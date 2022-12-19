import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import Style from '../styles/Style';
import Island from './Island';
import Padlock from '../assets/Padlock.png'


const IslandContainer = ({islands, 
                            language, 
                            islandsCompleted,
                            name,
                            userTotalExperience,
                            selectIsland, 
                            assignCurrentQuestion}) => {

    const islandToMap = Object.entries(islands)
    const islandItems= islandToMap.map((islandData, index) => {
        

        // const islandsCompletedToMap = Object.entries(islandsCompleted)
        // const islandCompletedForThisUser = islandsCompletedToMap.filter(islandCompletedData => islandCompletedData[1]['user']['name'] == name);

        // console.log("islandCompletedForThisUser " + islandCompletedForThisUser );

        // console.log("islandCompletedForThisUser[0] " + islandCompletedForThisUser[0] );


        // console.log("islandCompletedForThisUser[0][1] " + islandCompletedForThisUser[0][1] );


        // console.log("islandCompletedForThisUser[1][1]['id'] " + islandCompletedForThisUser[1][1]['id'] );
        
        // // this is what we want
        // console.log("islandCompletedForThisUser[1][1]['questionIsland']['id'] " + islandCompletedForThisUser[1][1]['questionIsland']['id'] );
        
        // // islandCompletedForThisUser is 1, object, 2, object


        // const listOfCompletedIslandsToMap = Object.entries(islandCompletedForThisUser)

        // const resultOfCompletedIslandsForUser = listOfCompletedIslandsToMap.filter((temp=islandCompleted[1][1]['questionIsland']['id']) => ( isNaN(temp) ) )
        


        // console.log("resultOfCompletedIslandsForUser : " + resultOfCompletedIslandsForUser);
        // console.log("islandCompletedForThisUser: " + islandCompletedForThisUser);

        // console.log("islandCompletedForThisUser[0]: " + islandCompletedForThisUser[0]);
        // console.log("islandCompletedForThisUser[0]['id']: " + islandCompletedForThisUser[0]['id']);

        // console.log("islandCompletedForThisUser[0]['id']: " + islandCompletedForThisUser[0]['id']);
        // console.log("islandCompletedForThisUser[0]['user']['name']: " + islandCompletedForThisUser[0]['user']['name']);

        // console.log("islandCompletedForThisUser[2]: " + islandCompletedForThisUser[2]);



        // console.log("islandCompletedForThisUser[0]['user']['id']: " + islandCompletedForThisUser[0]['user']['id']);
        // console.log("islandCompletedForThisUser[0]['user']['name']: " + islandCompletedForThisUser[0]['user']['name']);

        // console.log("islandCompletedForThisUser[0]['questionIsland']['id']: " + islandCompletedForThisUser[0]['questionIsland']['id']);


        if (language == islandData[1]['language']) {
            var align;
            if(index%3 == 0){ align="left"; } 
            else if(index%3 == 1){ align="right"; } 
            else if(index%3 == 2){ align="center"; } 

            // console.log("align : " + align);

            thisIslandID = islandData[1]['id'];

            if(userTotalExperience>80 )
            {
                return (
                    <Island 
                        islandData={islandData} 
                        key={index} 
                        align={align}

                        selectIsland={selectIsland} 
                        assignCurrentQuestion={assignCurrentQuestion} />  
                

                )
            }
            
            else if(thisIslandID==1 || thisIslandID==4)
            {

                return (
                    <Island 
                        islandData={islandData} 
                        key={index} 
                        align={align}

                        selectIsland={selectIsland} 
                        assignCurrentQuestion={assignCurrentQuestion} />  
                

                )
            }
            else if(thisIslandID==2 && userTotalExperience>40)
            {

                return (
                    <Island 
                        islandData={islandData} 
                        key={index} 
                        align={align}

                        selectIsland={selectIsland} 
                        assignCurrentQuestion={assignCurrentQuestion} />  
                

                )
            }
            else{
                return (
                    // <Text>PADLOCKED ISLAND</Text>
                    <Image source={Padlock}  style={Style.Padlock} />
                )
            }



        }


    });

    return (
        <ScrollView style={Style.islandContainer}>
            {islandItems}
        </ScrollView>
    );
};

export default IslandContainer;