package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity

public class Review {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String UserName;
    private String Comment;
    private String email;
    private  String indexNo;
    private LocalDate dates;

}
