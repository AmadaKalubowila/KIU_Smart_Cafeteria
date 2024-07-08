package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.dto.ProductDTO;
import com.MyFirstApplication.My.First.Application.dto.UserDTO;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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
    public OrderDTO saveOrder(@RequestBody OrderDTO orderDTO){

        return orderService.saveOrder(orderDTO);
    }

    @PutMapping("/updateOrder")
    public OrderDTO updateUser(@RequestBody OrderDTO orderDTO){
        return orderService.updateOrder(orderDTO);
    }

    @DeleteMapping("/deleteOrder")
    public boolean deleteOrder(@RequestBody OrderDTO orderDTO){
        return orderService.deleteOrder(orderDTO);
    }
    @GetMapping( "/getOrderByOrderID/{id}")
    public OrderDTO getOrderByOrderID (@PathVariable Long id){
        return orderService.getOrderByOrderID(id);}

    @PutMapping("/updateOrderByOrderID/{id}")
    public OrderDTO updateOrderByOrderID(@PathVariable Long id,@RequestBody OrderDTO orderDTO){
        return orderService.updateOrderByOrderID(id,orderDTO);
    }

    @DeleteMapping("/deleteOrderByOrderID/{id}")
    public boolean deleteOrderByOrderID(@PathVariable Long id){
        return orderService.deleteOrderByOrderID(id);
    }
    @GetMapping( "/getOrderByOrderIDAndIndex/{id}/{indexNo}")
    public OrderDTO getOrderByOrderIDAndIndex(@PathVariable Long id, @PathVariable String indexNo){
        System.out.println("Order id:"+id+"Order Index:"+indexNo);
        return orderService.getOrderByOrderIDAndIndex(id,indexNo);}

    @GetMapping("/getOrderByOrderDate/{dates}")
    public OrderDTO getOrderByOrderDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dates) {
        return orderService.getOrderByOrderDate(dates);
    }


    @GetMapping("/getLatestOrderIdForUser/{indexNo}")
    public ResponseEntity<OrderDTO> getLatestOrderIdForUser(@PathVariable String indexNo) {
        OrderDTO latestOrder = orderService.getLatestOrderByIndexNo(indexNo);
        if (latestOrder != null) {
            return ResponseEntity.ok(latestOrder);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
