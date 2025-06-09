package com.MyFirstApplication.My.First.Application.repo;

import com.MyFirstApplication.My.First.Application.entity.AdminOrder;
import com.MyFirstApplication.My.First.Application.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface AdminOrderRepository  extends JpaRepository<AdminOrder, Long> {

        @Query(value = "SELECT id FROM status  ORDER BY date DESC LIMIT 1", nativeQuery = true)
        Long getLatestStatus();

        @Query(value="SELECT * FROM status WHERE id=?1 ",nativeQuery = true)
        AdminOrder getOrderByOrderID(Long id);

        @Query(value="SELECT * FROM status WHERE dates=?1", nativeQuery = true)
        AdminOrder getStatusByStatusDate(LocalDate dates);

}
