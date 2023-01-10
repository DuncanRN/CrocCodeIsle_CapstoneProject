package com.codeclan.CrocCodeIsleService.repositories;

import com.codeclan.CrocCodeIsleService.models.IslandsCompleted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface IslandsCompletedRepository extends JpaRepository<IslandsCompleted, Long> {

    List<IslandsCompleted> findIslandsCompletedByUserId(long id);

    @Query(value = "SELECT island_id FROM islands_completed WHERE user_id = ?1", nativeQuery = true)
    ArrayList<Integer> findIDOfIslandsCompletedByUser(long user_id);


}
