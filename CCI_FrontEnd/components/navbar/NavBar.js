import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Style from '../styles/Style';
import LanguageChoiceButton from './LanguageChoiceButton';
import LevelBar from './LevelBar';
import ScoresButton from './ScoresButton';


const NavBar = ({
    language, 
    topFiveUsers,
    levelUpButtonPressed,
    chooseLanguage,
    userTotalExperience,
    userLevel,

    assignViewScoreTo, 
    selectIsland, 
    assignTopFiveUsers,
    assignLevelUpButtonPressed,
    assignTriggerReloadFromDB,
    assignIsLoading,
    assignIsLoadingAllUsers
    
    }) => {

    return (
        <SafeAreaView style={Style.navBar}>

            <LanguageChoiceButton 
            language={language} 
            chooseLanguage={chooseLanguage}
            selectIsland={selectIsland}/>

            <LevelBar 
            userTotalExperience={userTotalExperience}
            userLevel={userLevel}
            levelUpButtonPressed={levelUpButtonPressed} 
            assignLevelUpButtonPressed={assignLevelUpButtonPressed}/>

            <ScoresButton assignViewScoreTo={assignViewScoreTo} 
                            assignTriggerReloadFromDB={assignTriggerReloadFromDB}
                            assignIsLoading={assignIsLoading}
                            assignIsLoadingAllUsers={assignIsLoadingAllUsers} />

        </SafeAreaView>
    );
};

export default NavBar;