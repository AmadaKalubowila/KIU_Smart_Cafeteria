package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;


@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int u_id;

    @NotBlank(message = "ID cannot be null or blank")
    @Column(nullable = false)
    @Size(min = 5, max = 5, message = "ID must be 5 characters long")
    private String id;




    @NotBlank(message = "NIC cannot be null or blank")
    @Column(nullable = false)
    @Size(min = 12, max = 12, message = "NIC must be 12 characters long")
    private String nic;


    @NotBlank(message = "Address cannot be null or blank")
    @Column(nullable = false)
    private String address;


    @NotBlank(message = "Batch number cannot be null or blank")
    @Column(nullable = false)
    private String batch_no;


    @NotBlank(message = "Contact number cannot be null or blank")
    @Column(nullable = false)
    @Pattern(regexp = "^0\\d{9}$", message = "Contact number must be 10 digits long and start with '0'")
    private String contact_no;


    @NotBlank(message = "Department cannot be null or blank")
    @Column(nullable = false)
    private String department;


    @NotBlank(message = "Email cannot be null or blank")
    @Column(nullable = false)
    @Email(message = "Email should be valid and include '@gmail.com'")
    @Pattern(regexp = "^[\\w-\\.]+@gmail\\.com$", message = "Email must be a Gmail address")
    private String email;


    @NotBlank(message = "Name cannot be null or blank")
    @Column(nullable = false)
    private String name;


    @NotBlank(message = "Password cannot be null or blank")
    @Column(nullable = false)
    @Size(min = 6, max=6,message = "Password must be at least 6 characters long")
    private String password;


    @NotBlank(message = "Role cannot be null or blank")
    @Column(nullable = false)
    private String role;

    @Column(name = "course")
    private String Course;


}