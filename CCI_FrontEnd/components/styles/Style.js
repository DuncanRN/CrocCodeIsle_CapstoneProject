import { StyleSheet } from 'react-native';


export default Style = StyleSheet.create({

    mainContainerView: {
        flex: 2,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5dade2'
      },
    
    questionContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      marginTop: 150,
      backgroundColor: '#00ccff',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10, 
    },

    islandContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      marginTop: 150,
      backgroundColor: '#3366DF',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    
    logo: {
      fontFamily: 'arial',
      fontSize: 33,
      color: 'lime'
    },

    input: {
        height: 50,
        width: 220,
        padding: 0,
        fontSize: 22,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 20,
        textAlign: 'center',
    },

    field: {
      padding: 20
    },

    text: {
      fontSize: 20,
      textAlign: 'center',
    },

    navBarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },

    navBar: {
      flex: 3,
      flexDirection: 'row',
    },

    navBarButton: {
      backgroundColor: '#f4e4f4',
      width: 80,
      height: 80,
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    languageLogo: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
    },

    Padlock: {
      width: 170,
      height: 170,
      padding: 5,
      margin: 28,
      resizeMode: 'contain',
    },

    TrophyLogoLarge: {
      width: 200,
      height: 200,
      margin: 40,
      
      resizeMode: 'cover',
      
    },

    IslandButton: {
      width: 200,
      height: 200,
      margin: 10,
      resizeMode: 'contain',
    },
    

    progressField: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8
    },

    progressBar: {
      width: '80%',
      height: 40,
      borderColor: 'black',
      backgroundColor: 'antiquewhite',
      borderWidth: 3,
      borderRadius: 10,
      flexDirection: 'row',
    },

    scorePageView: {
      justifyContent: 'center',
      alignItems: 'center',

    }

});