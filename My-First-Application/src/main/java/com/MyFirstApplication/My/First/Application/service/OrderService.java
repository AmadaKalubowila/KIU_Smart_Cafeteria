package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.repo.OrderRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderService{
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ModelMapper modelMapper;


    public OrderDTO saveOrder(OrderDTO orderDTO){
        orderRepository.save(modelMapper.map(orderDTO, Order.class));
        return orderDTO;
    }
    public List <OrderDTO> getAllOrders(){
        List<Order>orderList=orderRepository.findAll();
        return modelMapper.map(orderList,new TypeToken<List<OrderDTO>>(){}.getType());

    }

    public OrderDTO updateOrder(OrderDTO orderDTO){
        orderRepository.save(modelMapper.map(orderDTO, Order.class));
        return orderDTO;
    }

    public boolean deleteOrder(OrderDTO orderDTO){
        orderRepository.delete(modelMapper.map(orderDTO, Order.class));
        return true;
    }
    public OrderDTO getOrderByOrderID(Long id){
        Order order=orderRepository.getOrderByOrderID(id);
        return modelMapper.map(order,OrderDTO.class);
    }
    public OrderDTO getLatestOrderByIndexNo(String indexNo) {
        Long latestOrderId = orderRepository.findLatestOrderIdByIndexNo(indexNo);
        if (latestOrderId != null) {
            Optional<Order> orderOptional = orderRepository.findById(latestOrderId);
            if (orderOptional.isPresent()) {
                return modelMapper.map(orderOptional.get(), OrderDTO.class);
            }
        }
        return null;
    }
    public boolean deleteOrderByOrderID(Long id){
        orderRepository.deleteById(id);
        return true;
    }
    public OrderDTO updateOrderByOrderID(Long id , OrderDTO orderDTO){
        Order order=orderRepository.updateOrderByOrderID(id);
        orderRepository.save(modelMapper.map(orderDTO, Order.class));
        return orderDTO;
    }
    public OrderDTO getOrderByOrderIDAndIndex(Long id,String indexNo){
        Order order=orderRepository.getOrderByOrderIDAndIndex(id,indexNo);
        return modelMapper.map(order,OrderDTO.class);
    }
    public OrderDTO getOrderByOrderDate(LocalDate dates) {
        Order order = orderRepository.getOrderByOrderDate(dates);
        return modelMapper.map(order, OrderDTO.class);
    }


}
