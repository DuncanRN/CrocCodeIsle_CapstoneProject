import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import Style from '../styles/Style';
import SuperCroc from '../assets/SuperCroc.png'
import DetectiveCroc from '../assets/DetectiveCroc.png';
import IslandCompletedService from '../services/IslandCompletedService';

const FinishedBox = ({
    selectedIsland,
    userId,
    assignIsQuestionAnswered,
    currentQuestion, 
    assignCurrentQuestion, 
    selectIsland,
    textOfCorrectResponse,
    textOfAnswerPicked,

    islandsCompleted,
    assignIslandsCompleted


}) => {

    console.log(" ");
    console.log(" islands completed : " + JSON.stringify(islandsCompleted, null, 4));


    console.log(" ");

    const onPress = () => {
        if (currentQuestion < 3) {
            assignCurrentQuestion(currentQuestion + 1)
        } else {
            // we have finished this island
            
            // firstly set this island as being completed
            // in db

            const payload = '{ "user": { "id": '+ userId + ' }, "questionIsland": { "id": ' + selectedIsland + '  }  }';

            IslandCompletedService.addIslandCompleted(payload);

            // then in state


            // console.log("FINISHING ISLAND___");
            // console.log("selectedIsland : " + selectedIsland);
            // console.log("userId : " + userId);
            // console.log("ABOUT TO RELOAD FROM BACKEND___");
            // console.log("islandsCompleted" + islandsCompleted);

            const tempIslandsCompleted = islandsCompleted + "," + selectedIsland;
            
            assignIslandsCompleted(tempIslandsCompleted);

            assignCurrentQuestion(1)

            selectIsland(null)

        };
        assignIsQuestionAnswered(false)
    }

    if(textOfCorrectResponse==textOfAnswerPicked){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Well Done, 
                </Text>
                <Text style={styles.text}> 
                    that was correct!
                </Text>
                <Image style={styles.crocImage} source = {SuperCroc} />
                <Pressable
                    style={styles.moveOnButton}
                    onPress={(event) => onPress()}>
                        <Text style={styles.textBold}>
                            Move on!
                        </Text>
                </Pressable>
            </View>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Sorry! 
                </Text>
                
                <Text style={styles.text}>
                    The correct response was "{textOfCorrectResponse}".
                </Text>
                <Text style={styles.text}>
                    You chose "{textOfAnswerPicked}"!
                </Text>
                <Image style={styles.crocImage} source = {DetectiveCroc} />

                
                    <Pressable
                        style={styles.moveOnButton}
                        onPress={(event) => onPress()}>

                            <Text style={styles.textBold}>
                                Continue
                            </Text>
                    </Pressable>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    moveOnButton: {
        marginTop: '15%',
        marginLeft: '39%',
        marginRight: '39%',
        backgroundColor: '#4BBC',   //61C0BF   BBDED6  FFB6B9 4BBCF4  FAE3D9
        width: 140,
        height: 80,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        },

        crocImage: {
            height: 240,
            width: 240,
            resizeMode: 'contain',
            marginTop: 20
        },

        text: {
            paddingTop: 10,
            fontSize: 30,
            textAlign: 'center',
        },

        textBold: {
            paddingTop: 0,
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold'
        },


        
})

export default FinishedBox;