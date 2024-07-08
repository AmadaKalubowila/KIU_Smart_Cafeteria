package com.example.Admin.repo;

import com.example.Admin.entity.ItemStock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepo extends JpaRepository<ItemStock,Integer> {
}
