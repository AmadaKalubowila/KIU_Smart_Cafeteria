package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.ProductDTO;
import com.MyFirstApplication.My.First.Application.entity.Product;
import com.MyFirstApplication.My.First.Application.repo.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import org.modelmapper.TypeToken;
import java.util.List;

@Service
@Transactional
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;

    public ProductDTO saveProduct(ProductDTO productDTO){
        productRepository.save(modelMapper.map(productDTO, Product.class));
        return productDTO;
    }
    public List <ProductDTO> getAllProducts(){
        List<Product>userList=productRepository.findAll();
        return modelMapper.map(userList,new TypeToken<List<ProductDTO>>(){}.getType());

    }
    public ProductDTO updateProduct(ProductDTO productDTO){
        productRepository.save(modelMapper.map(productDTO, Product.class));
        return productDTO;
    }
    public boolean deleteProduct(ProductDTO productDTO){
        productRepository.delete(modelMapper.map(productDTO, Product.class));
        return true;
    }
    public ProductDTO getProductByProductID(Long id){
        Product product=productRepository.getProductByProductID(id);
        return modelMapper.map(product,ProductDTO.class);
    }
    public ProductDTO getProductByProductIDAndName(Long id,String productName){
        Product product=productRepository.getProductByProductIDAndName(id,productName);
        return modelMapper.map(product,ProductDTO.class);
    }

}
