import React from 'react';
import {View, Image, Pressable} from 'react-native';
import Style from '../styles/Style';
import pythonlogo from '../assets/PythonSnake1.png';
import jslogo from '../assets/CafeTiere.png';
import javalogo from '../assets/Java.png';


const LanguageChoiceButton = ({language, chooseLanguage, selectIsland})=>{

    const onPress = () => {
        chooseLanguage("")
        selectIsland(null)
    }
    
    var image;

    if (language == 'Python') {
        image = pythonlogo
    }

    else if (language == 'Javascript') {
        image = jslogo
    }

    else if (language == 'Java') {
        image = javalogo
    }

    return (
        <View>
            <Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
                <Image style={Style.languageLogo} source={image} />
            </Pressable>
        </View>
    );
};

export default LanguageChoiceButton;