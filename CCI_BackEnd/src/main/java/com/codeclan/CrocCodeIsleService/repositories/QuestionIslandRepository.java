package com.codeclan.CrocCodeIsleService.repositories;
import com.codeclan.CrocCodeIsleService.models.QuestionIsland;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionIslandRepository extends JpaRepository<QuestionIsland, Long> {
    List<QuestionIsland> findQuestionIslandById(long id);






}
