
package com.MyFirstApplication.My.First.Application.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class VendorDTO {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long v_id;
    private String vendorName;
    private String address;
    private String nic;
    private String gender;
    private String email;
    private String contactNo;
    private  String date;
    private int noItems;
    private String items;
    private double price;


}
