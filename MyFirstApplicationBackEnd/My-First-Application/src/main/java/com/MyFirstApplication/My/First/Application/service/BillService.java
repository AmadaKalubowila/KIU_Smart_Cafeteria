package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.BillDTO;
import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.entity.Bill;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.repo.BillRepository;
import jakarta.validation.Valid;
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
public class BillService {
    @Autowired
    private BillRepository billRepository;
    @Autowired
    private ModelMapper modelMapper;


    public BillDTO saveBill(@Valid BillDTO billDTO){
        billRepository.save(modelMapper.map(billDTO, Bill.class));
        return billDTO;
    }
    public List<BillDTO> getAllBill(){
        List<Bill> billList=billRepository.findAll();
        return modelMapper.map(billList,new TypeToken<List<BillDTO>>(){}.getType());

    }

    public BillDTO updateBill(@Valid BillDTO billDTO){
        billRepository.save(modelMapper.map(billDTO, Bill.class));
        return billDTO;
    }

    public boolean deleteBill(@Valid BillDTO billDTO){
        billRepository.delete(modelMapper.map(billDTO, Bill.class));
        return true;
    }
    public BillDTO getBillByBillID(@Valid Long id){
        Bill bill=billRepository.getBillByBillID(id);
        return modelMapper.map(bill,BillDTO.class);
    }
    public BillDTO getLatestBillByIndexNo(@Valid String indexNo) {
        Long latestBillId = billRepository.findLatestBillIdByIndexNo(indexNo);
        if (latestBillId != null) {
            Optional<Bill> billOptional = billRepository.findById(latestBillId);
            if (billOptional.isPresent()) {
                return modelMapper.map(billOptional.get(), BillDTO.class);
            }
        }
        return null;
    }
    public boolean deleteBillByBillID(@Valid Long id){
        billRepository.deleteById(id);
        return true;
    }
    public BillDTO updateBillByBillID(@Valid Long id ,@Valid BillDTO billDTO){
        Bill bill=billRepository.updateBillByBillID(id);
        billRepository.save(modelMapper.map(billDTO, Bill.class));
        return billDTO;
    }

    public BillDTO getBillByBillIDAndIndex(@Valid Long id,@Valid String indexNo){
        Bill bill=billRepository.getBillByBillIDAndIndex(id,indexNo);
        return modelMapper.map(bill,BillDTO.class);
    }
    public BillDTO getBillByBillDate(LocalDate dates) {
        Bill bill = billRepository.getBillByBillDate(dates);
        return modelMapper.map(bill, BillDTO.class);
    }

    public BillDTO getLatestBillByDate(@Valid String date) {
        Long latestBillId = billRepository.findLatestBillIdByDate(date);
        if (latestBillId != null) {
            Optional<Bill> billOptional = billRepository.findById(latestBillId);
            if (billOptional.isPresent()) {
                return modelMapper.map(billOptional.get(), BillDTO.class);
            }
        }
        return null;
    }


}
