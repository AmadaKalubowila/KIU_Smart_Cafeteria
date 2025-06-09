package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/order")
@CrossOrigin

public class OrderController {
    @Autowired
    private OrderService orderService;
    @GetMapping("/getOrders")
    public List<OrderDTO> getOrder(){

        return orderService.getAllOrders();
    }
    @PostMapping("/saveOrder")
    public OrderDTO saveOrder(@Valid @RequestBody OrderDTO orderDTO){

        return orderService.saveOrder(orderDTO);
    }

    @PutMapping("/updateOrder")
    public OrderDTO updateUser(@Valid @RequestBody OrderDTO orderDTO){
        return orderService.updateOrder(orderDTO);
    }

    @DeleteMapping("/deleteOrder")
    public boolean deleteOrder(@Valid  @RequestBody OrderDTO orderDTO){
        return orderService.deleteOrder(orderDTO);
    }
    @GetMapping( "/getOrderByOrderID/{id}")
    public OrderDTO getOrderByOrderID (@PathVariable Long id){
        return orderService.getOrderByOrderID(id);}

    @PutMapping("/updateOrderByOrderID/{id}")
    public OrderDTO updateOrderByOrderID(@Valid @PathVariable Long id,@Valid  @RequestBody OrderDTO orderDTO){
        return orderService.updateOrderByOrderID(id,orderDTO);
    }

    @DeleteMapping("/deleteOrderByOrderID/{id}")
    public boolean deleteOrderByOrderID(@Valid @PathVariable Long id){
        return orderService.deleteOrderByOrderID(id);
    }
    @GetMapping( "/getOrderByOrderIDAndIndex/{id}/{indexNo}")
    public OrderDTO getOrderByOrderIDAndIndex(@Valid @PathVariable Long id, @Valid @PathVariable String indexNo){
        System.out.println("Order id:"+id+"Order Index:"+indexNo);
        return orderService.getOrderByOrderIDAndIndex(id,indexNo);}

    @GetMapping("/getOrderByOrderDate/{dates}")
    public OrderDTO getOrderByOrderDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dates) {
        return orderService.getOrderByOrderDate(dates);
    }


    @GetMapping("/getLatestOrderIdForUser/{indexNo}")
    public ResponseEntity<OrderDTO> getLatestOrderIdForUser(@Valid @PathVariable String indexNo) {
        OrderDTO latestOrder = orderService.getLatestOrderByIndexNo(indexNo);
        if (latestOrder != null) {
            return ResponseEntity.ok(latestOrder);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
