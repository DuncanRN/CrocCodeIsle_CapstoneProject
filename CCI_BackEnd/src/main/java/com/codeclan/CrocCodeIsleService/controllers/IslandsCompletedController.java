package com.codeclan.CrocCodeIsleService.controllers;

import com.codeclan.CrocCodeIsleService.repositories.IslandsCompletedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IslandsCompletedController {

    @Autowired
    IslandsCompletedRepository islandsCompletedRepository;

    @GetMapping(value = "/islandscompleted")
    public ResponseEntity getAllIslandsCompleted(){
        return new ResponseEntity<>(islandsCompletedRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/islandscompleted/{id}")
    public ResponseEntity getAllIslandsCompletedOfThisUser(@PathVariable long id){
        System.out.println("in get all islands completed of this user");
        return new ResponseEntity<>(islandsCompletedRepository.findIslandsCompletedByUserId(id), HttpStatus.OK);

    }




}
