package com.codeclan.CrocCodeIsleService.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "question_island_id", nullable = false)
    private QuestionIsland questionIsland;

    @Column(name = "question_position")
    private int question_position;

    @Column(name = "question_type")
    private String question_type;

    @Column(name = "question_text")
    private String question_text;

    @Column(name = "question_code")
    private String question_code;

    @Column(name = "points_value")
    private int points_value;

    @Column(name = "response1")
    private String response1;
    @Column(name = "response2")
    private String response2;
    @Column(name = "response3")
    private String response3;
    @Column(name = "response4")
    private String response4;

    @Column(name = "correct_response")
    private int correct_response;

    public Question(QuestionIsland questionIsland, int question_position, String question_type, String question_text, String question_code, int points_value, String response1, String response2, String response3, String response4, int correct_response) {
        this.questionIsland = questionIsland;
        this.question_position = question_position;
        this.question_type = question_type;
        this.question_text = question_text;
        this.question_code = question_code;
        this.points_value = points_value;
        this.response1 = response1;
        this.response2 = response2;
        this.response3 = response3;
        this.response4 = response4;
        this.correct_response = correct_response;
    }

    public Question(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public QuestionIsland getQuestionIsland() {
        return questionIsland;
    }

    public void setQuestionIsland(QuestionIsland questionIsland) {
        this.questionIsland = questionIsland;
    }

    public int getQuestion_position() {
        return question_position;
    }

    public void setQuestion_position(int question_position) {
        this.question_position = question_position;
    }

    public String getQuestion_type() {
        return question_type;
    }

    public void setQuestion_type(String question_type) {
        this.question_type = question_type;
    }

    public String getQuestion_text() {
        return question_text;
    }

    public void setQuestion_text(String question_text) {
        this.question_text = question_text;
    }

    public int getPoints_value() {
        return points_value;
    }

    public void setPoints_value(int points_value) {
        this.points_value = points_value;
    }

    public String getResponse1() {
        return response1;
    }

    public void setResponse1(String response1) {
        this.response1 = response1;
    }

    public String getResponse2() {
        return response2;
    }

    public void setResponse2(String response2) {
        this.response2 = response2;
    }

    public String getResponse3() {
        return response3;
    }

    public void setResponse3(String response3) {
        this.response3 = response3;
    }

    public String getResponse4() {
        return response4;
    }

    public void setResponse4(String response4) {
        this.response4 = response4;
    }

    public int getCorrect_response() {
        return correct_response;
    }

    public void setCorrect_response(int correct_response) {
        this.correct_response = correct_response;
    }


    public String getQuestion_code() {
        return question_code;
    }

    public void setQuestion_code(String question_code) {
        this.question_code = question_code;
    }
}
