package com.codeclan.CrocCodeIsleService.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="question_islands")
public class QuestionIsland {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // language
    @Column(name = "language")
    private String language;

    // name
    @Column(name = "name")
    private String name;

    // questions <Question>
    @OneToMany(mappedBy = "questionIsland", fetch = FetchType.LAZY)
//    @JsonBackReference
    private List<Question> questions;

    public QuestionIsland(String language, String name) {
        this.language = language;
        this.name = name;
        this.questions = new ArrayList<>();
    }

    public QuestionIsland(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
