import React from 'react';
import {View, Text, Pressable, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import LevelBar from '../navbar/LevelBar';
import Style from '../styles/Style';

const UserLevelUpPage = ({userTotalExperience, userLevel, assignLevelUpButtonPressed}) => {

    const onPress = () => {
        assignLevelUpButtonPressed(false)
    }

  return (
    <SafeAreaView style={styles.allLevelsContainer}>

        <ScrollView>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 1 ({userTotalExperience}/70)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 2 ({userTotalExperience}/160)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 3 ({userTotalExperience}/270)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 4 ({userTotalExperience}/400)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 5 ({userTotalExperience}/550)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 6 ({userTotalExperience}/720)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 7 ({userTotalExperience}/910)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 8 ({userTotalExperience}/1120)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 9 ({userTotalExperience}/1350)
                </Text>
            </View>

            <View style={styles.levelDisplay}>
                <Text style={Style.text}>
                    Level: 10
                </Text>
            </View>

        </ScrollView>

        <Pressable style={styles.backButton} onPress={(event)=>onPress()}>
            <Text style={Style.text}>Back</Text>
        </Pressable>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
    backButton: {
      marginTop: '15%',
      marginLeft: '39%',
      marginRight: '39%',
      backgroundColor: '#f4e4f4',
      width: 80,
      height: 80,
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      },

      allLevelsContainer: {
        width: '90%',
        height: '90%',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },

    levelDisplay: {
        height: 100,
        width: 250,
        borderColor: 'black',
        borderRadius: 8,
        backgroundColor: 'silver',
        borderWidth: 2,
        margin: 10,
        justifyContent: 'center'
    },
  });

export default UserLevelUpPage