import React from 'react';
import {View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import Style from '../styles/Style';


const LevelBar = ({

    userTotalExperience,
    userLevel,
    levelUpButtonPressed,

    assignLevelUpButtonPressed,
    }) => {

    const onPress = () => {
        assignLevelUpButtonPressed(true)
    };

    var percentage;

    if (userLevel == 1) {
        percentage = ((userTotalExperience/70) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 2) {
        percentage = (((userTotalExperience - 70)/90) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 3) {
        percentage = (((userTotalExperience - 160)/110) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 4) {
        percentage = (((userTotalExperience - 270)/130) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 5) {
        percentage = (((userTotalExperience - 400)/150) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 6) {
        percentage = (((userTotalExperience - 550)/170) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 7) {
        percentage = (((userTotalExperience - 720)/190) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 8) {
        percentage = (((userTotalExperience - 910)/210) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 9) {
        percentage = (((userTotalExperience - 1120)/230) * 100)
        percentage = Math.floor(percentage)
    }

    else if (userLevel == 10) {
        percentage = (((userTotalExperience - 1350)/250) * 100)
        percentage = Math.floor(percentage)
    }

    if (percentage > 100) {
        percentage = 100
    }

        return (
            <SafeAreaView style={styles().levelUpBarContainer}>
                    <Pressable style={styles().levelUpBar} onPress={(event)=>onPress()}>
                        <View style={styles(percentage).experienceBar}>
                        </View>
                    </Pressable>

                    <View style={styles().levelDisplay}>
                        <Text style={Style.text}>Level: {userLevel}</Text>   
                    </View>
            </SafeAreaView>
    );
}


const styles = (props) => StyleSheet.create ({

    levelUpButton: {
        backgroundColor: '#f4e4f4',
        width: 180,
        height: 80,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
    },

    levelUpBarContainer: {
        width: 180,
        height: 70,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        marginTop: 25
    },

    levelUpBar: {
        width: '100%',
        height: 60,
        borderColor: 'black',
        backgroundColor: 'antiquewhite',
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: 'row',
    },

    levelDisplay: {
        width: '66%',
        borderColor: 'black',
        borderRadius: 8,
        backgroundColor: 'lime',
        borderWidth: 2,
        marginBottom: 10
    },

    experienceBar: {
        height: 54,
        backgroundColor: 'lime',
        borderRadius: 10,
        flexDirection: 'row',
        width: props + '%',
    }
})

export default LevelBar;