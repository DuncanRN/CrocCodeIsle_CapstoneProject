package com.codeclan.CrocCodeIsleService.controllers;

import com.codeclan.CrocCodeIsleService.repositories.QuestionIslandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionIslandController {

    @Autowired
    QuestionIslandRepository questionIslandRepository;

    @GetMapping(value = "/questionislands")
    public ResponseEntity getAllQuestionIslands(){
        return new ResponseEntity<>(questionIslandRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/questionislands/{id}")
    public ResponseEntity getQuestionsIslandOfThisID(@PathVariable long id){
        return new ResponseEntity<>(questionIslandRepository.findQuestionIslandById(id), HttpStatus.OK);
    }


}
