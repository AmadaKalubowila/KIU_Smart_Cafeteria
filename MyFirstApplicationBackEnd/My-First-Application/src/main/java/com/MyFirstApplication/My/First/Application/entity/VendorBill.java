package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "venderbill")
public class VendorBill {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int vb_id;

    @NotBlank(message = "NIC cannot be null or blank")
    @Column(nullable = false)
    @Size(min = 12, max = 12, message = "NIC must be 12 characters long")
    private String vendornic;

    @NotBlank(message = "vendorName cannot be null or blank")
    @Column(nullable = false)
    private String vendorName;

    @NotBlank(message = "email cannot be null or blank")
    @Column(nullable = false)
    private  String email;

    @NotNull(message = "VendorId cannot be null or blank")
    @Column(nullable = false)
    private int vendorId;

    @NotNull(message = "ItemId cannot be null or blank")
    @Column(nullable = false)
    private int itemId;

    @NotBlank(message = "Item_Name cannot be null or blank")
    @Column(nullable = false)
    private String ItemName;

    @NotNull(message = "Quantity cannot be null or blank")
    @Column(nullable = false)
    private int quantity;

    private LocalDateTime Dates;
    private String date;

    @NotNull(message = "Total_Amount cannot be null or blank")
    @Column(nullable = false)
    private float TotalAmount;

    @NotNull(message = "Cash cannot be null or blank")
    @Column(nullable = false)
    private float cash;

    @NotNull(message = "Change cannot be null or blank")
    @Column(nullable = false)
    private float balance;

    @NotNull(message = "Price cannot be null or blank")
    @Column(nullable = false)
    private float price;
}
