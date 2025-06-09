package com.MyFirstApplication.My.First.Application.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.*;
import java.sql.Blob;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "item_stock")
public class ItemStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private int itemId;
    @Column(name = "name")
    private String name;
    @Lob
    @Column(name = "image" , columnDefinition = "MEDIUMBLOB")
    private byte[] image;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private float price;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "type")
    private String type ;



}
