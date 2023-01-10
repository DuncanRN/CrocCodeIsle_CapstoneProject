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

    // const keys = islandsCompleted[0].keys();
    // console.log("keys " + keys)
    // console.log("islandsCompleted[0]['id'] = " + islandsCompleted[0]['id']);

    console.log("islandsCompleted = " + islandsCompleted);
    console.log("islandsCompleted[0] = " + islandsCompleted[0]);
    console.log("islandsCompleted[1] = " + islandsCompleted[1]);

    // var str = JSON.stringify(islandsCompleted);

    console.log(JSON.stringify(islandsCompleted, null, 4));

    // var keys = islandsCompleted.keys();

    // console.log("keys = " + keys);

    // console.log("string - " + str)

    // console.log("islandsCompleted[0]['island_id'] = " + islandsCompleted[0]['island_id']);

    // var str = JSON.stringify(islandsCompleted[0]);
    // console.log("string - " + str)

    // this is what's in islandsCompleted[0]

    // I'd like it if islandsCompleted was only for our current userID

    // {"id":1,
    // "user":{"id":1,"name":"Octopus","points":90},
    // "questionIsland":{"id":1,"language":"Python","name":"Outputs and Variables",
    //                     "questions":[
    //                                     {"id":1,"question_position":1,"question_type":"multiple_choice","question_text":"Output the string:","question_code":"_____('Hello')","points_value":10,"response1":"print","response2":"console","response3":"system.out","response4":"output","correct_response":1},
    //                                     {"id":2,"question_position":2,"question_type":"fill_blank","question_text":"Declare the variable:","question_code":"colin _ 'crocodile'","points_value":20,"response1":"is a","response2":"-","response3":"=","response4":":","correct_response":3},
    //                                     {"id":3,"question_position":3,"question_type":"text_input","question_text":"Output variable value:","question_code":"palm = 'tree' \n print (____)","points_value":30,"response1":"palm","response2":"","response3":"","response4":"","correct_response":1}]}}


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
            console.log("___");
            console.log("selectedIsland : " + selectedIsland);
            console.log("userId : " + userId);
            console.log("___");

            // do we just reload the islands 

            
    
            // this is ouputing what we want.



            // we can send this to the DB 
            // {
            //     "user": {
            //         "id": 2
            //     },
            //     "questionIsland": {
            //         "id": 5
            //     }
            // }

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
                        <Text style={Style.text}>
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

                            <Text style={Style.text}>
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
        backgroundColor: '#FFDF50',
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

})

export default FinishedBox;