package com.example.Admin.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.*;
@NoArgsConstructor
@AllArgsConstructor
@Data

public class ItemDTO {

    private int ItemId;
    private String Name;
    private byte[] Image;
    private String Description;
    private float Price;


    public void setName(String name) {
    }

    public void setDescription(String description) {
    }

    public void setPrice(float price) {
    }

    public void setImage(byte[] bytes) {
    }
}
