package com.codeclan.CrocCodeIsleService.repositories;

import com.codeclan.CrocCodeIsleService.models.Question;
import com.codeclan.CrocCodeIsleService.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long>{


    List<Question> findQuestionByQuestionIslandId(long id);
    List<Question> getByQuestionIsland(long islandId);

//    List<Question> findQuestionByQuestionText(String s);


    // IS the big problem the _ 's in the database column names!?


//    List<Question> getQuestionByPointsValue(Integer p);

//    List<Question> getByPointsValue(int points);

//    List<Question> findQuestionByQuestionText(String text);
//    List<Question> findByQuestionText(String text);
//    List<Question> findQuestionByQuestionText(String text);



//    List<Question> findQuestionByQuestionIslandId(long id);


}