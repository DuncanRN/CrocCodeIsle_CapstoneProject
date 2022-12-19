import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Style from '../styles/Style';
import trophy from '../assets/Trophy.png';


const ScoresButton = ({assignViewScoreTo, assignTriggerReloadFromDB, assignIsLoading, assignIsLoadingAllUsers})=>{

const onPress = () => {


    console.log("in scores onPress")

    assignIsLoadingAllUsers(true);

    console.log("1");
    assignIsLoading(true);


    console.log("2");
    
    assignTriggerReloadFromDB(Math.random()); 
    // to start with we were just putting a string into this trigger.
    // so it would owrk the first time. 
    // but the whole thing wouldn't work the second time round.
    // because we were putting the same thing in, so it wasn't changing
    // so our useEffect wasn't being triggered the second time. 
    // hence the random number.

    console.log("3");

    assignViewScoreTo(true);

    // here we want to trigger the useEffect in MainContainer to reloa the 
    // scores so our highscores are up to date

};

    return (
        <View>
            <Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
                <Image style={Style.languageLogo} source = {trophy} />
            </Pressable>
        </View>
    );
};

export default ScoresButton;