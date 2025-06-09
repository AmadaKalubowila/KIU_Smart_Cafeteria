package com.MyFirstApplication.My.First.Application.entity;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Bill {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "orderID cannot be null or blank")
    @Column(nullable = false)
    private int orderId;

    @NotNull(message = "ItemId cannot be null or blank")
    @Column(nullable = false)
    private int itemId;

    @NotBlank(message = "IndexNo cannot be null or blank")
    @Column(nullable = false)
    private String indexNo;

    @NotBlank(message = "customerName cannot be null or blank")
    @Column(nullable = false)
    private String customerName;

    @NotBlank(message = "email cannot be null or blank")
    @Column(nullable = false)
    private  String email;

    @NotBlank(message = "Item_Name cannot be null or blank")
    @Column(nullable = false)
    private String ItemName;

    @NotNull(message = "Quantity cannot be null or blank")
    @Column(nullable = false)
    private int Quantity;

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

}
