import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import Style from '../styles/Style';
import Snake from '../assets/PythonSnake1.png';
import CafeTiere from '../assets/CafeTiere.png';
import Java from '../assets/Java.png';

const LanguageSelector = ({chooseLanguage}) => {

  const onPress = (text) => {
    chooseLanguage(text)
  };

  const python = "Python"
  const javascript = "Javascript";
  const java = "Java";

  return (
    <ScrollView style={Style.field}>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(python)}>
          <Image style={styles.languageImageStyle} source={Snake} />
          <View style={styles.languageDisplay}>
              <Text style={styles.text}> Python </Text>   
          </View>
      </Pressable>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(javascript)}>
          <Image style={styles.languageImageStyle} source={CafeTiere} />
          <View style={styles.languageDisplay}>
              <Text style={styles.text}> JavaScript </Text>   
          </View>
      </Pressable>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(java)}>
          <Image style={styles.languageImageStyle} source={Java} />
          <View style={styles.languageDisplay}>
              <Text style={styles.text}> Java </Text>   
          </View>
      </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  languageChoiceButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDF50',
    width: 150,
    padding: 10,
    paddingBottom: 0,
    margin: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    textAlign: 'center'
  },

  pressed: {
    backgroundColor: 'lime'
  },

  languageImageStyle: {
    height: 120,
    width: 120,
    padding: 0,
    borderRadius: 0,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'futura',
  },

  languageDisplay: {
    width: '100%',
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'lime',
    borderWidth: 2,
    marginBottom: 10
},

})

export default LanguageSelector;