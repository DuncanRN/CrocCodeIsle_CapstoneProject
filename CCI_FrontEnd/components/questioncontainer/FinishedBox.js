import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import Style from '../styles/Style';
// import SuperCroc from '../assets/superCroc.png';
// import SuperCroc from './components/assets/superCroc.png'
import SuperCroc from '../assets/SuperCroc.png'
import DetectiveCroc from '../assets/DetectiveCroc.png';

const FinishedBox = ({
    assignIsQuestionAnswered,
    currentQuestion, 
    assignCurrentQuestion, 
    selectIsland,
    textOfCorrectResponse,
    textOfAnswerPicked

}) => {

    const onPress = () => {
        if (currentQuestion < 3) {
            assignCurrentQuestion(currentQuestion + 1)
        } else {
            assignCurrentQuestion(1)

            selectIsland(null)
            // to-do: unlock the next island
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