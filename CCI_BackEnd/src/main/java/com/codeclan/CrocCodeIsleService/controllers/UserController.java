package com.codeclan.CrocCodeIsleService.controllers;

import com.codeclan.CrocCodeIsleService.models.User;
import com.codeclan.CrocCodeIsleService.repositories.QuestionRepository;
import com.codeclan.CrocCodeIsleService.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;


    @GetMapping(value = "/users")
    public ResponseEntity getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/top10")
    public ResponseEntity getTopTenUsers(){
        return new ResponseEntity<>(userRepository.findTop10ByOrderByPointsDesc(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/top5")
    public ResponseEntity getTopFiveUsers(){
        return new ResponseEntity<>(userRepository.findTop5ByOrderByPointsDesc(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUserOfThisId(@PathVariable long id){
        return new ResponseEntity<>(userRepository.findUserById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/users/name/{name}")
    public ResponseEntity getUserOfThisName(@PathVariable String name){
        return new ResponseEntity<>(userRepository.findUserByName(name), HttpStatus.OK);
    }

    @PutMapping(value = "/users/")
    public ResponseEntity updateUserOfThisName(@RequestBody User user){

//        System.out.println(" I am HERE! I am in PutMapping");
//        System.out.println(" user : " + user);
//        System.out.println(" user name : " + user.getName());
//        System.out.println(" user points : " + user.getPoints());

        // =========================================================
        // IMPORTANT NOTE ABOUT UNDERSTANDING WHAT IS IMPORTANT HERE
        // =========================================================
        // we previously had the issue of instead of changing the user in the db. we were making a new one
        // with the new score.
        // So now we get the id from the database by the user's unique name
        // assign that id to the user we have been handed to this method
        //
        // then when we do save(user) that save knows to do an UPDATE rather than an INSERT
        // because a user of that id already exists!

        User userFromDB = userRepository.findUserByName(user.getName());

//        System.out.println(" userIdFromDB : " + userFromDB.getId());

        user.setId(userFromDB.getId());

        final User updatedUser = userRepository.save(user);

        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }


    // the following Patch / Update is untested
    @PatchMapping(value = "users/points/{name}/{points}/")
    public ResponseEntity<User> partialUpdatePoints(@PathVariable("name") String name, @PathVariable("points") int points){

        System.out.println("points: " + points );

        User user = userRepository.findUserByName(name);

        System.out.println("user: " + user );

        System.out.println("user.getName(): " + user.getName() );

        user.setPoints(points);

        System.out.println("user.getPoints() NEW: " + user.getPoints() );

        final User updatedUser = userRepository.save(user);


        return new ResponseEntity<>(HttpStatus.OK);

    }



    @PostMapping(value="/users")
    public ResponseEntity<User> postUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

//    @PatchMapping(value = "/pirates/{id}")
//    public ResponseEntity<Pirate> updatePirate(@RequestBody Pirate pirate){
//        pirateRepository.save(pirate);
//        return new ResponseEntity<>(pirate, HttpStatus.OK);
//    }




}
