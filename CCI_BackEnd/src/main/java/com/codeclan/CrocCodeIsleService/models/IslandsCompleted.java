package com.codeclan.CrocCodeIsleService.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="islands_completed")
public class IslandsCompleted {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
//    @JsonBackReference
    @JoinColumn(name="user_id", nullable = false)
    private User user;

//    duncan has concerns bout that name="user_id"

    @ManyToOne
//    @JsonBackReference
    @JoinColumn(name="island_id", nullable = false)
    private QuestionIsland questionIsland;

    public IslandsCompleted(User user, QuestionIsland questionIsland){
        this.user = user;
        this.questionIsland = questionIsland;
    }

    public IslandsCompleted(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public QuestionIsland getQuestionIsland() {
        return questionIsland;
    }

    public void setQuestionIsland(QuestionIsland questionIsland) {
        this.questionIsland = questionIsland;
    }
}
