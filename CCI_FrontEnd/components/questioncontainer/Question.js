import React from 'react';
import {Text, SafeAreaView, View, Pressable, StyleSheet, TextInput} from 'react-native';
import Style from '../styles/Style';
import FinishedBox from './FinishedBox';
import LevelDeterminer from '../services/LevelDeterminer';
import UserService from '../services/UserService';

const Question = ({
    name,
    islandQuestions, 
    selectedIsland, 
    currentQuestion, 
    isQuestionAnswered,
    answerPicked,
    userTotalExperience,

    assignCurrentQuestion, 
    selectIsland, 
    assignIsQuestionAnswered,
    assignAnswerPicked,
    determineUserTotalExperience,
    determineUserLevel
}) => {

    // This onPress is only called for the fill in the blank and multiple choice Qs
    const onPress = (response) => { 

        assignIsQuestionAnswered(true)
        assignAnswerPicked(response)

        if (response == correctResponse) {

            var points;
            points = userTotalExperience + questionPoints;
            determineUserTotalExperience(points)

            const user = {
                name,
                points
            }

            UserService.updateUser(user, name)

            var level = workOutUserLevelByExperience(points)
            console.log ( "Level = " + level)
            determineUserLevel(level)

        } else {

            // console.log(response + " was the incorrect response")

        };
    };

    const submitTextAnswer = (text) => {

        assignIsQuestionAnswered(true)
        assignAnswerPicked(text)


        if (text == response1) {
            console.log(text + ' was the correct answer!')

            var points;
            points = userTotalExperience + questionPoints;
            determineUserTotalExperience(points)

            const user = {
                name,
                points
            }

            UserService.updateUser(user, name)

            var level = workOutUserLevelByExperience(points)
            console.log ( "Level = " + level)
            determineUserLevel(level)

        }
        else {
            console.log(text + ' was incorrect!')
        }
    }

    const questionToShow = islandQuestions[currentQuestion];
    
    const islandQuestionsToMap = Object.entries(islandQuestions)
    const islandQuestionItems = islandQuestionsToMap.map((questionData, index) => {

        if(currentQuestion == questionData[1]['question_position']) {
            
            return (
                questionData[1]
            )
        };
    });

    // We have small concerns with this current question-1 solution
    // the data is coming back [data we want, undefined, undefined]
    // then [undefined, data we want, undefined]......

    var questionText = islandQuestionItems[currentQuestion-1]['question_text']
    var response1 = islandQuestionItems[currentQuestion-1]['response1']
    var response2 = islandQuestionItems[currentQuestion-1]['response2']
    var response3 = islandQuestionItems[currentQuestion-1]['response3']
    var response4 = islandQuestionItems[currentQuestion-1]['response4']
    var correctResponse = islandQuestionItems[currentQuestion-1]['correct_response']
    var questionType = islandQuestionItems[currentQuestion-1]['question_type']
    var questionCode = islandQuestionItems[currentQuestion-1]['question_code']
    var questionPoints = islandQuestionItems[currentQuestion-1]['points_value']

    var textOfCorrectResponse;
    var textOfAnswerPicked;


    if (questionType == "multiple_choice" || questionType == "fill_blank") {

        //Dealing with correct response
        if (correctResponse == '1') {
            textOfCorrectResponse = response1
        }
        else if (correctResponse == '2') {
            textOfCorrectResponse = response2
        }
        else if (correctResponse == '3') {
            textOfCorrectResponse = response3
        }
        else if (correctResponse == '4') {
            textOfCorrectResponse = response4
        }

        //Dealing with the answer picked text
        if (answerPicked == '1') {
            textOfAnswerPicked = response1
        }
        else if (answerPicked == '2') {
            textOfAnswerPicked = response2
        }
        else if (answerPicked == '3') {
            textOfAnswerPicked = response3
        }
        else if (answerPicked == '4') {
            textOfAnswerPicked = response4
        }
    }
    else if(questionType == "text_input"){
        
        textOfCorrectResponse = response1

        textOfAnswerPicked = answerPicked



    }

    if (isQuestionAnswered == true){
        return (
            <SafeAreaView style={Style.field}>

                <Text style={styles.questionTitle}>
                    { questionText }
                </Text>

                <FinishedBox 
                assignIsQuestionAnswered={assignIsQuestionAnswered} 
                currentQuestion={currentQuestion} 
                assignCurrentQuestion={assignCurrentQuestion}
                selectIsland={selectIsland}
                textOfCorrectResponse={textOfCorrectResponse}
                textOfAnswerPicked={textOfAnswerPicked}
                />

            </SafeAreaView>
        )
    }


    if (questionType != 'text_input'){
        return (
            <SafeAreaView style={Style.field}>
                <Text style={styles.questionTitle}>
                    { questionText }
                </Text>
                <View style={styles.questionCodeView}>
                <Text style={styles.questionCodeText}>
                    { questionCode }
                </Text>
                </View>

                <View style={styles.answerField}>
                    <Pressable style={styles.answerButton}
                        onPress={(event) => onPress('1')}>
                            <Text style={styles.text}>
                                {response1}
                            </Text>
                    </Pressable>

                    <Pressable style={styles.answerButton}
                        onPress={(event) => onPress('2')}>
                            <Text style={styles.text}>
                                {response2}
                            </Text>
                    </Pressable>

                    <Pressable style={styles.answerButton}
                        onPress={(event) => onPress('3')}>
                            <Text style={styles.text}>
                                {response3}
                            </Text>
                    </Pressable>

                    <Pressable style={styles.answerButton}
                        onPress={(event) => onPress('4')}>
                            <Text style={styles.text}>
                                {response4}
                            </Text>
                    </Pressable>
                </View>
            
        </SafeAreaView>
        );
    }

    else{
        return (
            <SafeAreaView >
                <Text style={styles.questionTitle}>
                    { questionText }
                </Text>

                <View style={styles.questionCodeView}>
                <Text style={styles.questionCodeText}>
                    { questionCode }
                </Text>
                </View>

                <View style={Style.textInputField}>
                    <TextInput 
                    style={styles.textInput}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onSubmitEditing={(event) => submitTextAnswer(event.nativeEvent.text)}
                    placeholder="Your Text..." />
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    questionTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10,
    },

    questionCodeView: {
        backgroundColor: '#eeeeee',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },

    questionCodeText: {
        fontFamily: 'courier',
        textAlign: 'left',
        fontSize: 19,
        padding: 10
    },

    answerField: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10
    },

    answerButton: {
        height: 180,
        width: 162,
        padding: 10,
        margin: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#FFDF50',
        textAlign: 'center',
        justifyContent: 'center',
        textColor: 'black',
        fontSize: 30
    },

    textInput: {
        justifyContent: 'center',
        height: 50,
        width: 220,
        fontSize: 22,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 20,
        textAlign: 'center',
        alignContent: 'center',
        marginTop: '33%',
        marginLeft: '20%',
        marginRight: '20%',
    },

    text: {
        fontSize: 40,
        textAlign: 'center',

    }

})

export default Question;