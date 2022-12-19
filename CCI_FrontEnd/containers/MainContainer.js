import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text, SafeAreaView, ActivityIndicator, StatusBar, Animated, StyleSheet} from 'react-native';
import NameEntry from '../components/setup/NameEntry';
import Logo from '../components/logo/Logo';
import Style from '../components/styles/Style';
import LanguageSelector from '../components/setup/LanguageSelector';
import NavBar from '../components/navbar/NavBar';
import IslandContainer from '../components/islandcontainer/IslandContainer';
import QuestionContainer from '../components/questioncontainer/QuestionContainer';
import ScorePage from '../components/scores/ScorePage';
import Island from '../components/islandcontainer/Island';
import UserService from '../components/services/UserService';
import UserLevelUpPage from '../components/scores/UserLevelUpPage';

const MainContainer = () => {

  const [name, setName] = useState ("");
  const [userId, setUserId] = useState(null);
  const [language, setLanguage] = useState ("");
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [viewScore, setViewScore] = useState(false);

  
  const [islands, setIslands] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // this isLoading is to check we've loaded the island

  const[allUsers, setAllUsers] = useState([])
  const [isLoadingAllUsers, setIsLoadingAllUsers] = useState(true); // this isLoading is to check we've loaded the island
  
  
  const [isLoadingIslandsCompleted, setIsLoadingIslandsCompleted] = useState(true); // this isLoading is to check we've loaded the islandscompleted

  
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [answerPicked, setAnswerPicked] = useState(null)

  const [topFiveUsers, setTopFiveUsers] = useState([])
  

  const [levelUpButtonPressed, setLevelUpButtonPressed] = useState(false);
  const [userTotalExperience, setUserTotalExperience] = useState(0);
  const [userLevel, setUserLevel] = useState(1);

  const [islandsCompleted, setIslandsCompleted] = useState([]);

  const [triggerReloadFromDB, setTriggerReloadFromDB] = useState("");


  useEffect(() => {
    // addUserId(UserService.getUserByName(name));
        // assignAllUsers(UserService.getAllUsers());
    
    console.log("in useEffect ")

    getIslands();

    getAllUsersAtStartup();

    assignTopFiveUsers(UserService.getTop5Users());

    getIslandsCompleted();

  }, [triggerReloadFromDB]);

  const getIslands = function(){
    fetch("http://localhost:8080/questionislands/")
    .then(res => res.json())
    .then((data) => {  setIslands(data); setIsLoading(false); 
    console.log("in getIslands, have just set isLoading to false ")
    
    }
    )
  };


  const getAllUsersAtStartup = function(){
    fetch("http://localhost:8080/users/")
    .then(res => res.json())
    .then((data) => {  
      setAllUsers(data); setIsLoadingAllUsers(false); }
    )
  };

  const getIslandsCompleted = function(){
    fetch("http://localhost:8080/islandscompleted/")
    .then(res => res.json())
    .then((data) => {  setIslandsCompleted(data); 
                        setIsLoadingIslandsCompleted(false); 
    console.log("in getIslandsCompleted, have just set isLoadingIslandsCompleted to false ")
    
    }
    )
  };

  function addName(name) {
    console.log("State (name) = " + name)
    tempName = setName(name)
  };

  function addUserId(id) {
    console.log("State (id) = " + id)
    tempUserId = setUserId(id)
  };

  function chooseLanguage(language) {
    console.log("State (language) = " + language)
    tempLanguage = setLanguage(language)
  };

  function selectIsland(island_id) {
    console.log("State (selectedIsland) = " + island_id)
    tempIsland = setSelectedIsland(island_id)
  };

  function assignCurrentQuestion(question_id) {
    console.log("State (currentQuestion) = " + question_id)
    tempCurrentQuestion = setCurrentQuestion(question_id)
  };

  function assignViewScoreTo(bool) {
    console.log("State (viewScore) = " + bool)
    tempViewScore = setViewScore(bool)
  };

  function assignIsQuestionAnswered(bool){
    console.log("State (isQuestionAnswered) = " + isQuestionAnswered)
    tempIsQuestionAnswered = setIsQuestionAnswered(bool)
  }

  function assignAnswerPicked(answer) {
    console.log("State (answerPicked) = " + answerPicked)
    tempAnswerPicked = setAnswerPicked(answer)
  }


  // -- 

  function assignTopFiveUsers(array) {
    
    tempTopFiveUsers = setTopFiveUsers(array)
    console.log("State (topFiveUsers) = " + topFiveUsers)
  }


  // -- 

  function assignLevelUpButtonPressed(bool) {
    console.log("State (levelUpButtonPressed) = " + levelUpButtonPressed)
    tempLevelUpButtonPressed = setLevelUpButtonPressed(bool)
  }

  function determineUserTotalExperience(experience) {
    console.log("State (userTotalExperience) = " + userTotalExperience)
    tempUserTotalExperience = setUserTotalExperience(experience)
  }

  function determineUserLevel(level) {
    tempUserLevel = setUserLevel(level)
    console.log("State (userLevel) = " + userLevel)
  }

  function assignTriggerReloadFromDB(data) {
    tempTriggerReloadFromDB = setTriggerReloadFromDB(data);
    console.log("State (triggerReloadFromD) = " + triggerReloadFromDB)
  }
  
  function assignIsLoading(bool) {
    tempIsLoading = setIsLoading(bool);
    console.log("State (isLoading) = " + isLoading)
  }

  function assignIsLoadingAllUsers(bool) {
    tempIsLoadingAllUser = setIsLoadingAllUsers(bool);
    console.log("State (isLoadingAllUsers) = " + isLoadingAllUsers)
  }

  function assignIslandsCompleted(arrayOfIslandsCompleted){
    tempIslandsCompleted = setIslandsCompleted(arrayOfIslandsCompleted)
    console.log("State (islandsCompleted) = " + islandsCompleted)
  }

  function assignIsLoadingIslandsCompleted(bool){
    tempIsLoadingIslandsCompleted = setIsLoadingIslandsCompleted(bool);
    console.log("State (isLoadingIslandsCompleted) = " + isLoadingIslandsCompleted)

  }

  if (isLoading || isLoadingAllUsers || isLoadingIslandsCompleted || !topFiveUsers) {
    console.log("isLoading = true. App is most likely fetching data.");
    return(
      <SafeAreaView style={Style.progressField}>
        <Text style={Style.text}>Loading...</Text>
          <View style={Style.progressBar}>
            <Animated.View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'lime', width: '50%' }} />
          </View>
        <Text style={Style.text}>50%</Text>
      </SafeAreaView>
    );
  }

  else if (name == "") {
    console.log("islandsCompleted");
    console.log(islandsCompleted);
    return (
      <SafeAreaView style={styles.mainContainerNameEntryView}>
        <Logo />
        <NameEntry allUsers={allUsers} 
                    addName={addName} 
                    addUserId={addUserId} 
                    determineUserTotalExperience={determineUserTotalExperience}
                    />
      </SafeAreaView>
    );
  }

  else if (name != "" && language == "") {

    return (
      <SafeAreaView style={Style.mainContainerView}>
        <Logo />
        <LanguageSelector chooseLanguage={chooseLanguage} />
      </SafeAreaView>
    );
  }

  else if (name !== "" && language !== "" && levelUpButtonPressed == true) {
    return (
      <SafeAreaView style={Style.mainContainerView}>
        <UserLevelUpPage userTotalExperience={userTotalExperience} userLevel={userLevel} assignLevelUpButtonPressed={assignLevelUpButtonPressed}/>
      </SafeAreaView>
    )
  }

  else if (name !== "" && language !== "" && viewScore == true) {

    return (
      <SafeAreaView style={Style.mainContainerView}>
        <ScorePage topFiveUsers={topFiveUsers} assignViewScoreTo={assignViewScoreTo} assignTopFiveUsers={assignTopFiveUsers} />
      </SafeAreaView>
    );
  }

  else if (name !== "" && language !== "" && selectedIsland == null) {

    return (
      <SafeAreaView style={Style.mainContainerView}>

        <NavBar 
          style={Style.navBarContainer}

          language={language}
          topFiveUsers={topFiveUsers}
          levelUpButtonPressed={levelUpButtonPressed}
          userTotalExperience={userTotalExperience}
          userLevel={userLevel}

          chooseLanguage={chooseLanguage} 
          assignViewScoreTo={assignViewScoreTo} 
          selectIsland={selectIsland}
          assignTopFiveUsers={assignTopFiveUsers}
          assignLevelUpButtonPressed={assignLevelUpButtonPressed}
          assignTriggerReloadFromDB={assignTriggerReloadFromDB}
          assignIsLoading={assignIsLoading}
          assignIsLoadingAllUsers={assignIsLoadingAllUsers}
          />

        <IslandContainer
          islands={islands}
          language={language} 
          islandsCompleted={islandsCompleted}
          name={name}
          userTotalExperience={userTotalExperience}
          
          selectIsland={selectIsland} 
          assignCurrentQuestion={assignCurrentQuestion}/>
      </SafeAreaView>
    );
  }

  else if (name !== "" && language !== "" && selectedIsland !== null) {

    return (
      <SafeAreaView style={Style.mainContainerView}>  

        <NavBar
          style={Style.navBarContainer}

          language={language}
          topFiveUsers={topFiveUsers}
          levelUpButtonPressed={levelUpButtonPressed}
          userTotalExperience={userTotalExperience}
          userLevel={userLevel}

          chooseLanguage={chooseLanguage}
          assignViewScoreTo={assignViewScoreTo} 
          selectIsland={selectIsland}
          assignTopFiveUsers={assignTopFiveUsers}
          assignLevelUpButtonPressed={assignLevelUpButtonPressed}
          assignTriggerReloadFromDB={assignTriggerReloadFromDB}
          assignIsLoading={assignIsLoading}
          assignIsLoadingAllUsers={assignIsLoadingAllUsers}
          />

        <QuestionContainer 
          name={name}
          islands={islands} 
          selectedIsland={selectedIsland} 
          currentQuestion={currentQuestion}
          isQuestionAnswered={isQuestionAnswered} 
          answerPicked={answerPicked}
          userTotalExperience={userTotalExperience}

          assignCurrentQuestion={assignCurrentQuestion}
          selectIsland={selectIsland}
          assignIsQuestionAnswered={assignIsQuestionAnswered}
          assignAnswerPicked={assignAnswerPicked}
          determineUserTotalExperience={determineUserTotalExperience}
          determineUserLevel={determineUserLevel}
          />
      </SafeAreaView>
    );
  };

};

const styles = StyleSheet.create ({

  mainContainerNameEntryView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5dade2',
  },

})

export default MainContainer;