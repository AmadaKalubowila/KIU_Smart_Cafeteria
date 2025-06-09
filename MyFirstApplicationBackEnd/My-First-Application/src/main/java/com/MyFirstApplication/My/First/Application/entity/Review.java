package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank(message = "UserName cannot be null or blank")
    @Column(nullable = false)
    private String UserName;

    @NotBlank(message = "Comment cannot be null or blank")
    @Column(nullable = false)
    private String Comment;

    @NotBlank(message = "Email cannot be null or blank")
    @Column(nullable = false)
    private String email;

    @NotBlank(message = "Index No cannot be null or blank")
    @Column(nullable = false)
    private  String indexNo;


    private LocalDate dates;

}
