import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView } from 'react-native';
import Style from '../styles/Style';
import CrocLogo from '../assets/CrocText.png'
import IslandLogo from '../assets/IslandLogo.png'
import TextLogo from '../assets/TextLogo.png';


const Logo = () => {
  
  return (
    <SafeAreaView>
      <View>
        <Image style={styles.crocLogo} source = {CrocLogo} />
      </View>
      {/* <View>
        <Image style={styles.textLogo} source = {TextLogo} />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({

  crocLogo: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
    borderRadius: 0,
  },

  textLogo: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },


})


export default Logo;