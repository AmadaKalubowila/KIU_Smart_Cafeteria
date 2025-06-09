package com.MyFirstApplication.My.First.Application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.*;
@NoArgsConstructor
@AllArgsConstructor
@Data

public class ItemDTO {

    private int itemId;
    private String name;
    private byte[] image;
    private String description;
    private float price;
    private int quantity;
    private String type;

}

