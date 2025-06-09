package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;


@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "vendor")
public class Vendor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int v_id;


    @Column(name = "gender")
    private String gender;


    @NotBlank(message = "NIC cannot be null or blank")
    @Column(nullable = false)
    @Size(min = 12, max = 12, message = "NIC must be 12 characters long")
    private String nic;


    @NotBlank(message = "Address cannot be null or blank")
    @Column(nullable = false)
    private String address;


    @NotBlank(message = "Contact number cannot be null or blank")
    @Column(nullable = false)
    @Pattern(regexp = "^0\\d{9}$", message = "Contact number must be 10 digits long and start with '0'")
    private String contactNo;


    @NotBlank(message = "Vendor Name cannot be null or blank")
    @Column(nullable = false)
    private String vendorName;


    @NotBlank(message = "Email cannot be null or blank")
    @Column(nullable = false)

    private String email;


    @NotBlank(message = "Date cannot be null or blank")
    @Column(nullable = false)
    private String date;


    @NotNull(message = "Vendor no of items cannot be null or blank")
    @Column(nullable = false)
    private int noItems;


    @NotBlank(message = "Items cannot be null or blank")
    @Column(nullable = false)
    private String items;

    @NotNull(message = "Price cannot be null or blank")
    @Column(nullable = false)
    private double price;

}
