package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
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

    private String indexNo;
    private String customerName;
    private int  batchNo;
    private String itemName;
    private int quantity;
    private String  date;
    private LocalDate dates;


}
