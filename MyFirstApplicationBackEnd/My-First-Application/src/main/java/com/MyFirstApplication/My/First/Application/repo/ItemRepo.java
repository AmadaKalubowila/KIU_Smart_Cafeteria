package com.MyFirstApplication.My.First.Application.repo;



import com.MyFirstApplication.My.First.Application.entity.ItemStock;
import com.MyFirstApplication.My.First.Application.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepo extends JpaRepository<ItemStock,Integer> {

    @Query(value = "select * FROM item_stock WHERE itemId=?1" , nativeQuery = true)
    ItemStock getItemById (int itemId);

    @Query(value="SELECT * FROM item_stock WHERE  name=?1",nativeQuery = true)
   ItemStock getProductByName(String name);

    @Query(value="SELECT * FROM item_stock WHERE type=?1 ",nativeQuery = true)
    List<ItemStock> findByType(String type);


}
