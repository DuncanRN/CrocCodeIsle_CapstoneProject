import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Style from '../styles/Style';
import island from '../assets/island.png';
import drawnIsland from '../assets/NewIsland.png'

const Island = ({islandData, align, selectIsland, assignCurrentQuestion }) => {

  const onPress = (id) => {
    selectIsland(id)
    assignCurrentQuestion(1)
  };

  const id = islandData[1]['id'];
  const islandName = islandData[1]['name']

  // console.log("INSIDE ISLAND, key - " + key);


  // console.log("INSIDE ISLAND, align - " + align);
  if(align == "left")
  {
    return (

      <View style={styles.islandButtonContainerLeft} key={id}>

          <Pressable style={({ pressed }) => pressed ? [styles.islandButton, styles.pressed] : styles.islandButton } 
            onPress={(event) => onPress(id)}>

                <Image style={Style.IslandButton} source = {drawnIsland} />

                <Text style={styles.text}>
                  {islandName}
                </Text>
          </Pressable>

      </View>
    );
  }
  else if(align=="right")
  {

    return (

      <View style={styles.islandButtonContainerRight} key={id}>

          <Pressable style={({ pressed }) => pressed ? [styles.islandButton, styles.pressed] : styles.islandButton } 
            onPress={(event) => onPress(id)}>

                <Image style={Style.IslandButton} source = {drawnIsland} />

                <Text style={styles.text}>
                  {islandName}
                </Text>
          </Pressable>

      </View>
    );


  }
  else 
  {

    return (

      <View style={styles.islandButtonContainerCenter} key={id}>

          <Pressable style={({ pressed }) => pressed ? [styles.islandButton, styles.pressed] : styles.islandButton } 
            onPress={(event) => onPress(id)}>

                <Image style={Style.IslandButton} source = {drawnIsland} />

                <Text style={styles.text}>
                  {islandName}
                </Text>
          </Pressable>

      </View>
    );


  }




};

const styles = StyleSheet.create({

  islandButtonContainerLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  islandButtonContainerRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  islandButtonContainerCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

    islandButton: {
      height: 290,
      width: 180,
      padding: 0,
      marginRight: 10,
      // borderColor: 'black',
      // borderWidth: 3,
      borderRadius: 20,
      textAlign: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      // backgroundColor: '#FFDF50'

    },
  
    pressed: {
      backgroundColor: '#528AAE'
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
  })

export default Island;