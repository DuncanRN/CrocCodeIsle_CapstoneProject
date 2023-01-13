import React, { useEffect } from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet, Image} from 'react-native';
import Style from '../styles/Style';
import UserService from '../services/UserService';
import trophy from '../assets/Trophy.png';

const ScorePage = ({topFiveUsers, assignViewScoreTo, assignTopFiveUsers}) => {


  const onPress = () => {
      assignViewScoreTo(false)
  };

  // for (var key in topFiveUsers) {
  //   console.log("key : " + key);
  // } 
  
  var topFiveUsersToOutput;
  if(topFiveUsers!=null && topFiveUsers['_z'][0]!=null && typeof(topFiveUsers) === 'object' )
  {
    topFiveUsersToOutput = 
            "1: " + topFiveUsers['_z'][0]['name'] + ": " + topFiveUsers['_z'][0]['points'] + "\n" +
            "2: " + topFiveUsers['_z'][1]['name'] + ": " + topFiveUsers['_z'][1]['points'] + "\n" +
            "3: " + topFiveUsers['_z'][2]['name'] + ": " + topFiveUsers['_z'][2]['points'] + "\n" +
            "4: " + topFiveUsers['_z'][3]['name'] + ": " + topFiveUsers['_z'][3]['points'] + "\n" +
            "5: " + topFiveUsers['_z'][4]['name'] + ": " + topFiveUsers['_z'][4]['points'];
  }
  else{
    topFiveUsersToOutput = "Loading...";
  }

  
  return (
    <View style={Style.scorePageView} >

      <ScrollView style={styles.scoresContainer} >

        <Image style={Style.TrophyLogoLarge} source = {trophy} />
        <Text style={styles.userOutputBold} >
          Top Scorers
        </Text>
        <Text style={styles.userOutput} >
          {topFiveUsersToOutput}
        </Text>
        <Pressable style={styles.backButton} onPress={(event)=>onPress()}>
            <Text style={Style.text}>Back</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  userOutput: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      padding: 5,
      paddingTop: 20
  },

  userOutputBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
    paddingTop: 20
},

  backButton: {
    marginTop: '15%',
    marginLeft: '39%',
    marginRight: '39%',
    backgroundColor: '#FFDF50',
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    },

    scoresContainer: {

      backgroundColor: '#ADD8E6',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      marginTop: '4%',
      marginLeft: '9%',
      marginRight: '9%',

    }
});

export default ScorePage;