package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Index cannot be null or blank")
    @Column(nullable = false)
    private String indexNo;

    @NotBlank(message = "Customer Name cannot be null or blank")
    @Column(nullable = false)
    private String customerName;

    @NotNull(message = "Batch no cannot be null or blank")
    @Column(nullable = false)
    private int  batchNo;

    @NotBlank(message = "Item  cannot be null or blank")
    @Column(nullable = false)
    private String itemName;

    @NotNull(message = "Quantity cannot be null or blank")
    @Column(nullable = false)
    private int quantity;


    private String  date;

    private LocalDate dates;

    @NotBlank(message = "email cannot be null or blank")
    @Column(nullable = false)
    private String email;

    @NotNull(message = "Status cannot be null or blank")
    @Column(nullable = false)
    private  int  status;

}
