package com.MyFirstApplication.My.First.Application.repo;
import com.MyFirstApplication.My.First.Application.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query(value="SELECT * FROM orders WHERE id=?1 ",nativeQuery = true)
    Order getOrderByOrderID(Long id);

    @Query(value="SELECT * FROM orders WHERE id=?1",nativeQuery = true)
    Order updateOrderByOrderID(Long id);

    @Query(value = "SELECT id FROM orders WHERE index_no = ?1 ORDER BY date DESC LIMIT 1", nativeQuery = true)
    Long findLatestOrderIdByIndexNo(String indexNo);
    @Query(value="SELECT * FROM orders WHERE id=?1 AND indexNo=?2",nativeQuery = true)
    Order getOrderByOrderIDAndIndex(Long id,String indexNo);

    @Query(value="SELECT * FROM orders WHERE dates=?1", nativeQuery = true)
    Order getOrderByOrderDate(LocalDate dates);
}
