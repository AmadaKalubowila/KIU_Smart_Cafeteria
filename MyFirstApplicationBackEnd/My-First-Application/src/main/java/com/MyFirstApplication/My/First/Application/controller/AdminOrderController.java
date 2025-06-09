package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.AdminOrderDTO;
import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.service.AdminOrderService;
import com.MyFirstApplication.My.First.Application.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
@RestController
@RequestMapping("/api/status")
@CrossOrigin

public class AdminOrderController {
    @Autowired
    private AdminOrderService adminOrderService;
    @PostMapping("/saveStatus")
    public AdminOrderDTO saveStatus(@Valid @RequestBody AdminOrderDTO adminOrderDTO){

        return adminOrderService.saveStatus(adminOrderDTO);
    }
    @GetMapping("/getStatusByStatusDate/{dates}")
    public AdminOrderDTO getStatusByStatusDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dates) {
        return adminOrderService.getStatusByStatusDate(dates);
    }

    @GetMapping("/getLatestStatusForUser")
    public ResponseEntity<AdminOrderDTO> getLatestStatusForUser() {
        AdminOrderDTO latestStatus = adminOrderService.getLatestStatus();
        if (latestStatus != null) {
            return ResponseEntity.ok(latestStatus);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
