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
public class OrderDTO {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private  String indexNo;
    private  String customerName;
    private int batchNo;
    private  String itemName;
    private int quantity;
    private String  date;
    private LocalDate dates;
    private String email;
    private int status;

}
