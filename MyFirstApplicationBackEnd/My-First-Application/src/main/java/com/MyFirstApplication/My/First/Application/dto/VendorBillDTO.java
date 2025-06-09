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
public class VendorBillDTO {
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int vb_id;
    private String vendornic;
    private String vendorName;
    private String email;
    private int vendorId;
    private int itemId;
    private String ItemName;
    private int quantity;
    private LocalDateTime Dates;
    private String date;
    private float TotalAmount;
    private float cash;
    private float balance;
    private float price;

}
