package com.MyFirstApplication.My.First.Application.repo;

import com.MyFirstApplication.My.First.Application.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
public interface ProductRepository extends JpaRepository<Product, Long>{
    @Query(value="SELECT * FROM product WHERE ID=?1",nativeQuery = true)
    Product getProductByProductID(Long id);
    @Query(value="SELECT * FROM product WHERE ID=?1 AND productName=?2",nativeQuery = true)
    Product getProductByProductIDAndName(Long id,String productName);

}
