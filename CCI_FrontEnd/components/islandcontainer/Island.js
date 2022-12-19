import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Style from '../styles/Style';
import island from '../assets/island.png';
import drawnIsland from '../assets/NewIsland.png'

const Island = ({islandData, align, selectIsland, assignCurrentQuestion}) => {

  const onPress = (id) => {
    selectIsland(id)
    assignCurrentQuestion(1)
  };

  //In the above onPress function we need to 
  // assign the current question more correctly

  const id = islandData[1]['id'];
  const islandName = islandData[1]['name']
  //  duncan says - maybe we just pass the id down not the whole islandData

  return (
    <View style={styles.islandButtonContainer}>

        <Image style={Style.IslandButton} source = {drawnIsland} />

        <Pressable style={({ pressed }) => pressed ? [styles.islandButton, styles.pressed] : styles.islandButton } 
          onPress={(event) => onPress(id)}>
              <Text style={styles.text}>
                {islandName}
              </Text>
        </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({

  islandButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

    islandButton: {
      height: 100,
      width: 120,
      padding: 0,
      marginRight: 20,
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 20,
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFDF50'

    },
  
    pressed: {
      backgroundColor: 'lime'
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
  })

export default Island;
