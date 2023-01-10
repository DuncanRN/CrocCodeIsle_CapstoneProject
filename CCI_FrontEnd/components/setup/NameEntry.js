import React from 'react';
import { View, TextInput } from 'react-native';
import Style from '../styles/Style';
import UserService from '../services/UserService';

const NameEntry = ({allUsers, addName, addUserId, determineUserTotalExperience, setIsLoadingIslandsCompleted, getIslandsCompleted}) => {

  const submitName = (name) => {
    // addName sets the state "name"
    addName(name);

    // now we should see if a user of this name exists in the database.
    // If they do, we should get their points from the database, and put 
    // those points into state.
    // Otherwise we should add them to the database with 0 points

    var index = allUsers.map(function(e) { return e.name; }).indexOf(name);
    // if the name just input by the user is not in the db index = -1

    if(index != -1) // if the current name is in the database
    {
      // get points from DB
      scoreFromDB = allUsers[index]['points'];
      // console.log("scoreFromDB: ");
      // console.log(scoreFromDB);
      // put those points into state
      determineUserTotalExperience(scoreFromDB);

      
      // their id is one more than the index.
      // given the assumption that no users can be deleted.
      idToAddToState = index+1;
      addUserId(idToAddToState);

      console.log("This user is in the database already");
      console.log("the index that has got us here is " + index);

      // console.log("Their ID is " + idToAddToState);


      // here we should load the islandsCompleted for this user.

      setIsLoadingIslandsCompleted(true);
      getIslandsCompleted();

    }
    else // we have a new user
    {
      var points = 0;
      const user = {
        name,
        points
      }

      // console.log("heres what we are passing to UserService.addUser" + user);

      // add the user to the database
      returnFromAddUser = UserService.addUser(user)



      // somewhat bodged fix. We find out how many users we have in the allUsers state.
      // the new id is that plus 1.

      const numberOfUsers = allUsers.length;

      idToAddToState = numberOfUsers+1;
      addUserId(idToAddToState);

      // set islandsCompleted to empty, since this is a new user

    }



  };




  return (
    <View style={Style.field}>
        <TextInput 
          style={Style.input}
          autoCorrect={false}
          onSubmitEditing={(event) => submitName(event.nativeEvent.text)}
          placeholder="Your Name..." />
    </View>
  );
};

export default NameEntry;