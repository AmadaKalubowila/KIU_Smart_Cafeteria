package com.MyFirstApplication.My.First.Application.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReviewDTO {
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String UserName;
    private String Comment;
    private String email;
    private  String indexNo;
    private LocalDate dates;

}
