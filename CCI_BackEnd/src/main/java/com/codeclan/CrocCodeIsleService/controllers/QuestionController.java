package com.codeclan.CrocCodeIsleService.controllers;

import com.codeclan.CrocCodeIsleService.models.Question;
import com.codeclan.CrocCodeIsleService.models.User;
import com.codeclan.CrocCodeIsleService.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class QuestionController {

    @Autowired
    QuestionRepository questionRepository;

    @GetMapping(value = "/questions")
    public ResponseEntity getAllQuestions(){
        return new ResponseEntity<>(questionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/questions/{id}")
    public ResponseEntity getQuestionsOfThisIsland(@PathVariable long id){
        return new ResponseEntity<>(questionRepository.findQuestionByQuestionIslandId(id), HttpStatus.OK);
    }

    // untested
    @PostMapping(value="/questions/")
    public ResponseEntity<Question> posQuestion(@RequestBody Question question){
        System.out.println(" I am HERE! I am in posQuestion");
        questionRepository.save(question);
        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }


    @PutMapping(value = "/questions/")
    @CrossOrigin(origins ="http://localhost:3000/")
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question){

        System.out.println(" I am HERE! I am in updateQuestion");
        System.out.println(" question : " + question);
        System.out.println(" Q text : " + question.getQuestion_text());

        //  System.out.println("question : " + question);

        final Question updatedQuestion = questionRepository.save(question);



        return new ResponseEntity<>(question, HttpStatus.OK);
    }


//
}
