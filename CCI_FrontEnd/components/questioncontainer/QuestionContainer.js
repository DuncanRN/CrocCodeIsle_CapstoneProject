import React from 'react';
import {View} from 'react-native';
import Style from '../styles/Style';
import Question from './Question';


const QuestionContainer = ({
    name,
    islands, 
    selectedIsland, 
    userId,
    currentQuestion, 
    isQuestionAnswered,
    answerPicked,
    userTotalExperience,

    assignCurrentQuestion, 
    selectIsland, 
    assignIsQuestionAnswered,
    assignAnswerPicked,
    determineUserTotalExperience,
    determineUserLevel,

    islandsCompleted,
    assignIslandsCompleted
}) => {

    const questionsToMap = Object.entries(islands)
    const questionItems= questionsToMap.map((islandData, index) => {
        
        if (selectedIsland == islandData[1]['id']) {
            
            return (
                <Question 
                    name={name}
                    islandQuestions={islandData[1]['questions']}
                    key={index} 

                    selectedIsland={selectedIsland}
                    userId={userId}
                    currentQuestion={currentQuestion} 
                    isQuestionAnswered={isQuestionAnswered}
                    answerPicked={answerPicked}
                    userTotalExperience={userTotalExperience}
                    
                    assignCurrentQuestion={assignCurrentQuestion}
                    selectIsland={selectIsland}
                    assignIsQuestionAnswered={assignIsQuestionAnswered}
                    assignAnswerPicked={assignAnswerPicked}
                    determineUserTotalExperience={determineUserTotalExperience}
                    determineUserLevel={determineUserLevel}
                    
                    
                    islandsCompleted= {islandsCompleted}
                    assignIslandsCompleted = {assignIslandsCompleted}

                    />
            )
        }
    });

    return (
        <View style={Style.questionContainer}>
            {questionItems}
        </View>
    );
};

export default QuestionContainer;