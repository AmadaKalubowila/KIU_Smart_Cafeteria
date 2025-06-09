package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.AdminOrderDTO;
import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.entity.AdminOrder;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.repo.AdminOrderRepository;
import com.MyFirstApplication.My.First.Application.repo.OrderRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;
@Service
@Transactional
public class AdminOrderService {
    @Autowired
    private AdminOrderRepository adminOrderRepository;
    @Autowired
    private ModelMapper modelMapper;


    public AdminOrderDTO saveStatus(@Valid AdminOrderDTO adminOrderDTO){
        adminOrderRepository.save(modelMapper.map(adminOrderDTO, AdminOrder.class));
        return adminOrderDTO;
    }

    public AdminOrderDTO getLatestStatus() {
        Long latestStatusId = adminOrderRepository.getLatestStatus();
        if (latestStatusId != null) {
            Optional<AdminOrder> orderOptional = adminOrderRepository.findById(latestStatusId);
            if (orderOptional.isPresent()) {
                return modelMapper.map(orderOptional.get(), AdminOrderDTO.class);
            }
        }
        return null;
    }

    public AdminOrderDTO getStatusByStatusDate(LocalDate dates) {
        AdminOrder status = adminOrderRepository.getStatusByStatusDate(dates);
        return modelMapper.map(status,AdminOrderDTO.class);
    }
}
