package com.codeclan.CrocCodeIsleService.components;

import com.codeclan.CrocCodeIsleService.models.IslandsCompleted;
import com.codeclan.CrocCodeIsleService.models.Question;
import com.codeclan.CrocCodeIsleService.models.QuestionIsland;
import com.codeclan.CrocCodeIsleService.models.User;
import com.codeclan.CrocCodeIsleService.repositories.IslandsCompletedRepository;
import com.codeclan.CrocCodeIsleService.repositories.QuestionIslandRepository;
import com.codeclan.CrocCodeIsleService.repositories.QuestionRepository;
import com.codeclan.CrocCodeIsleService.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    QuestionIslandRepository questionIslandRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    IslandsCompletedRepository islandsCompletedRepository;


    public DataLoader() {

    }

    public void run(ApplicationArguments args) {


        QuestionIsland questionIsland1 = new QuestionIsland("Python","Outputs and Variables");
        questionIslandRepository.save(questionIsland1);


        Question question1 = new Question(questionIsland1, 1, "multiple_choice",
                "Output the string:",
                "_____('Hello')", 10,
                "print",
                "console",
                "system.out",
                "output",
                1);
        questionRepository.save(question1);

        Question question2 = new Question(questionIsland1, 2, "fill_blank",
                "Declare the variable:",
                "colin _ 'crocodile'", 20,
                "is a",
                "-",
                "=",
                ":",
                3);
        questionRepository.save(question2);

        Question question3 = new Question(questionIsland1, 3, "text_input",
                "Output variable value:",
                "palm = 'tree' \n print (____)", 30,
                "palm",
                "",
                "",
                "",
                1);
        questionRepository.save(question3);

        // now for island 2

        QuestionIsland questionIsland2 = new QuestionIsland("Python","Data Types");
        questionIslandRepository.save(questionIsland2);

        Question question4 = new Question(questionIsland2, 1, "multiple_choice",
                "Select data type of value:",
                "1.5", 40,
                "integer",
                "string",
                "thing",
                "float",
                4);
        questionRepository.save(question4);

        Question question5 = new Question(questionIsland2, 2, "fill_blank",
                "Concatenate the strings:",
                "'coco' ___ 'nut'", 50,
                "*",
                "+",
                "and",
                "-",
                2);
        questionRepository.save(question5);

        Question question6 = new Question(questionIsland2, 3, "text_input",
                "Enter the result:",
                "print((5 % 3) * 3)", 60,
                "6",
                "",
                "",
                "",
                1);
        questionRepository.save(question6);




        // now for island 3

        QuestionIsland questionIsland3 = new QuestionIsland("Python","Conditional Logic");
        questionIslandRepository.save(questionIsland3);

        Question question7 = new Question(questionIsland3, 1, "multiple_choice",
                "Select output:",
                "coconuts = 3 \nif coconuts < 5: \n \t print (coconuts) ", 70,
                "3",
                "5",
                "coconuts",
                "error",
                1);
        questionRepository.save(question7);

        Question question8 = new Question(questionIsland3, 2, "fill_blank",
                "Choose correct keyword:",
                "if animal == 'crocodile': \n \t print ('in a while') \n ___ animal == 'alligator': \n \t print('see you later') \n else: \n \t print('Shark! Swim  away!')",
                80,
                "if",
                "elif",
                "or",
                "otherwise",
                2);
        questionRepository.save(question8);

        Question question9 = new Question(questionIsland3, 3, "text_input",
                "Enter correct output:",
                "fruit = 'pineapple' \n if fruit == 'coconut': print('coconutty') else: print ('yum')",
                90,
                "yum",
                "",
                "",
                "",
                1);
        questionRepository.save(question9);


        // ______
        // Javascript time!
        //_____


        // now for island 4

        QuestionIsland questionIsland4 = new QuestionIsland("Javascript","Outputs and Variables");
        questionIslandRepository.save(questionIsland4);

        Question question10 = new Question(questionIsland4, 1, "multiple_choice",
                "Output the string:", "_____('Crocodiles are cool!')", 10,
                "system.out",
                "console.log",
                "print",
                "write",
                2);
        questionRepository.save(question10);

        Question question11 = new Question(questionIsland4, 2, "fill_blank",
                "Declare the variable:", "_____ clyde = 'crocodile'", 20,
                "const",
                "this",
                "variable",
                "string",
                1);
        questionRepository.save(question11);

        Question question12 = new Question(questionIsland4, 3, "text_input",
                "Output variable value: ", "const coconuts = 'tasty' \n console.log(_____)", 30,
                "coconuts",
                "",
                "",
                "",
                3);
        questionRepository.save(question12);

        // now for island 5

        QuestionIsland questionIsland5 = new QuestionIsland("Javascript","Data Types");
        questionIslandRepository.save(questionIsland5);

        Question question13 = new Question(questionIsland5, 1, "multiple_choice",
                "Select data type of value:", "true", 10,
                "string",
                "integer",
                "boolean",
                "undefined",
                3);
        questionRepository.save(question13);

        Question question14 = new Question(questionIsland5, 2, "fill_blank",
                "What is the output?", "const coco = 'nuts' \n console.log(!coco)", 20,
                "nuts",
                "coconuts",
                "true",
                "false",
                4);
        questionRepository.save(question14);

        Question question15 = new Question(questionIsland5, 3, "text_input",
                "Log the variable's value:", "const shark = 'Swim away!'", 30,
                "console.log(shark)",
                "",
                "",
                "",
                1);
        questionRepository.save(question15);

        QuestionIsland questionIsland6 = new QuestionIsland("Javascript","Conditional Logic");
        questionIslandRepository.save(questionIsland6);

        Question question16 = new Question(questionIsland6, 1, "multiple_choice",
                "Select output:",
                "const crocodiles = 5 \nif (crocodiles > 2) {\n \t console.log(crocodiles)}", 70,
                "true",
                "5",
                "crocodiles",
                "false",
                2);
        questionRepository.save(question16);

        Question question17 = new Question(questionIsland6, 2, "fill_blank",
                "Choose correct keyword:",
                "if (animal == 'crocodile') { \n \t console.log('in a while') \n _____ { console.log('No crocodile found!') }" ,
                80,
                "else if",
                "elif",
                "else",
                "if",
                3);
        questionRepository.save(question17);

        Question question18 = new Question(questionIsland6, 3, "text_input",
                "Enter correct output:",
                "const crocus = 'dill' \n if (crocus != 'dill') { console.log('crocodile!') } else { console.log('flowers') }",
                90,
                "flowers",
                "",
                "",
                "",
                1);
        questionRepository.save(question18);





        // USERS

        User user1 = new User("Octopus", 12);
        userRepository.save(user1);

        User user2 = new User("Seahorse", 35);
        userRepository.save(user2);

        User user3 = new User("Starfish", 31);
        userRepository.save(user3);

        User user4 = new User("Blowfish", 23);
        userRepository.save(user4);

        User user5 = new User("Shrimp", 20);
        userRepository.save(user5);

        User user6 = new User("Squid", 15);
        userRepository.save(user6);

        IslandsCompleted duncanFinishedIslandOne = new IslandsCompleted(user1, questionIsland1);
        islandsCompletedRepository.save(duncanFinishedIslandOne);

        IslandsCompleted louiseFinishedIslandOne = new IslandsCompleted(user2, questionIsland1);
        islandsCompletedRepository.save(louiseFinishedIslandOne);
        IslandsCompleted louiseFinishedIslandTwo = new IslandsCompleted(user2, questionIsland2);
        islandsCompletedRepository.save(louiseFinishedIslandTwo);

        IslandsCompleted cammyFinishedIslandOne = new IslandsCompleted(user3, questionIsland1);
        islandsCompletedRepository.save(cammyFinishedIslandOne);



    }
}