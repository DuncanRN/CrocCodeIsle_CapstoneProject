import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import Style from '../styles/Style';
import Island from './Island';
import Padlock from '../assets/Padlock.png'


const IslandContainer = ({islands, 
                            language, 
                            islandsCompleted,
                            userTotalExperience,
                            selectIsland, 
                            assignCurrentQuestion}) => {

    var previousIslandId = -1; 
    var completedIslandsArray = islandsCompleted.toString().split(',');

    const islandToMap = Object.entries(islands)
    const islandItems= islandToMap.map((islandData, index) => {
        

        if (language == islandData[1]['language']) {
            var align;
            if(index%3 == 0){ align="left"; } 
            else if(index%3 == 1){ align="right"; } 
            else if(index%3 == 2){ align="center"; } 

            thisIslandID = islandData[1]['id'];
            
            if(previousIslandId == -1 || completedIslandsArray.includes(previousIslandId.toString()))
            {
                
                previousIslandId = thisIslandID;
                return (
                        <Island 
                            key={thisIslandID.toString()} 
                            islandData={islandData} 
                            align={align}
                            selectIsland={selectIsland} 
                            assignCurrentQuestion={assignCurrentQuestion} 
                            />  
                )
            }
            else{
                previousIslandId = thisIslandID;
                return (
                    <Image key={thisIslandID} source={Padlock} style={Style.Padlock} />
                )
            }
            
        }


    });

    return (
        <ScrollView style={Style.islandContainer} >
            {islandItems}
        </ScrollView>
    );
};

export default IslandContainer;