package com.example.Admin.entity;

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
public class ItemStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int ItemId;
    private String Name;

    @Lob
    private byte[] Image;
    private String Description;
    private float Price;




}
