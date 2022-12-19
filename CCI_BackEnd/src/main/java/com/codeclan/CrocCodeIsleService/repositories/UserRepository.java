package com.codeclan.CrocCodeIsleService.repositories;

import com.codeclan.CrocCodeIsleService.models.Question;
import com.codeclan.CrocCodeIsleService.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findTop10ByOrderByPointsDesc();
    List<User> findTop5ByOrderByPointsDesc();
    User findUserById(long id);
    User findUserByName(String name);

//    long findIdByName(String name);

}
