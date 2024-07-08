package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.ProductDTO;
import com.MyFirstApplication.My.First.Application.entity.Product;
import com.MyFirstApplication.My.First.Application.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/getProduct")
    public List<ProductDTO> getProduct(){

        return productService.getAllProducts();
    }
    @PostMapping("/saveProduct")
    public ProductDTO saveProduct(@RequestBody ProductDTO productDTO){

        return productService.saveProduct(productDTO);
    }
    @PutMapping("/updateProduct")
    public ProductDTO updateProduct(@RequestBody ProductDTO productDTO){
        return productService.updateProduct(productDTO);
    }
    @DeleteMapping("/deleteProduct")
    public boolean deleteUser(@RequestBody ProductDTO userDTO){
        return productService.deleteProduct(userDTO);
    }
    @GetMapping( "/getProductByProductID/{id}")
    public ProductDTO getProductByProductID (@PathVariable Long id){
        return productService.getProductByProductID(id);}

    @GetMapping( "/getProductByProductIDAndName/{id}/{productName}")
    public ProductDTO getProductByProductIDAndName(@PathVariable Long id, @PathVariable String productName){
        System.out.println("Product id:"+id+"Product Name:"+productName);
        return productService.getProductByProductIDAndName(id,productName);}


}