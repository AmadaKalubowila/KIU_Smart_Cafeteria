package com.MyFirstApplication.My.First.Application.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BillDTO {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String orderId;
    private int itemId;
    private  int indexNo;
    private String customerName;
    private  String email;
    private String ItemName;
    private int Quantity;
    private LocalDateTime Dates;
    private String date;
    private float TotalAmount;
    private float cash;
    private float balance;
}
