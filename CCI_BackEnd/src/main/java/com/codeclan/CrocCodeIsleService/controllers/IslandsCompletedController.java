package com.codeclan.CrocCodeIsleService.controllers;

import com.codeclan.CrocCodeIsleService.models.IslandsCompleted;
import com.codeclan.CrocCodeIsleService.models.User;
import com.codeclan.CrocCodeIsleService.repositories.IslandsCompletedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;

@RestController
public class IslandsCompletedController {

    @Autowired
    IslandsCompletedRepository islandsCompletedRepository;

    @GetMapping(value = "/islandscompleted")
    public ResponseEntity getAllIslandsCompleted(){
        return new ResponseEntity<>(islandsCompletedRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/islandscompleted/{id}")
    public ArrayList<Integer> getAllIslandsCompletedOfThisUser(@PathVariable long id){
        // previously that ArrayList<Integer> was ResponseEntity

        System.out.println("in get all islands completed of this user");
//        return new ResponseEntity<>(islandsCompletedRepository.findIDOfIslandsCompletedByUser(id), HttpStatus.OK);
        return islandsCompletedRepository.findIDOfIslandsCompletedByUser((id));
    }


    // called when a user completes an island.
    @PostMapping(value="/islandscompleted/")
    public ResponseEntity<IslandsCompleted> postNewIslandCompleted(@RequestBody IslandsCompleted IslandsCompleted){
        System.out.println("in POST islands completed");

        // we need to build up the IslandsCompleted just from the ids?
        // or can we hand in just the ids and it'll work it out...?

        islandsCompletedRepository.save(IslandsCompleted);
        return new ResponseEntity<>(IslandsCompleted, HttpStatus.CREATED);
    }

}
