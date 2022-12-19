package com.codeclan.CrocCodeIsleService.repositories;

import com.codeclan.CrocCodeIsleService.models.IslandsCompleted;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IslandsCompletedRepository extends JpaRepository<IslandsCompleted, Long> {

    List<IslandsCompleted> findIslandsCompletedByUserId(long id);

}
