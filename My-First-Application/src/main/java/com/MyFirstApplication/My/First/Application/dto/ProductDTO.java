package com.MyFirstApplication.My.First.Application.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String productName;


}
