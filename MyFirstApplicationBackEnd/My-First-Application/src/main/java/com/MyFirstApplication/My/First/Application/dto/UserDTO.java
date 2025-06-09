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
public class UserDTO {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int u_id;

    private String id;
    private String name;
    private String address;
    private String Nic;
    private String email;
    private String password;
    private String department;
    private String Course;
    private String contact_no;
    private String batch_no;
    private String role;

}
