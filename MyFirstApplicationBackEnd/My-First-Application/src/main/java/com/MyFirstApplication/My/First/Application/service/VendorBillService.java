package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.BillDTO;
import com.MyFirstApplication.My.First.Application.dto.VendorBillDTO;
import com.MyFirstApplication.My.First.Application.entity.Bill;
import com.MyFirstApplication.My.First.Application.entity.VendorBill;
import com.MyFirstApplication.My.First.Application.repo.BillRepository;
import com.MyFirstApplication.My.First.Application.repo.VendorBillRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class VendorBillService {
    @Autowired
    private VendorBillRepository vendorBillRepository;
    @Autowired
    private ModelMapper modelMapper;
    public VendorBillDTO saveVendorBill(@Valid VendorBillDTO vendorBillDTO){
        vendorBillRepository.save(modelMapper.map(vendorBillDTO,VendorBill.class));
        return vendorBillDTO;
    }
    public VendorBillDTO getVendorBillByBillID(@Valid int vb_id){
        VendorBill vendorBill=vendorBillRepository.getVendorBillByBillID(vb_id);
        return modelMapper.map(vendorBill,VendorBillDTO.class);
    }
    public boolean deleteBillByBillID(@Valid  int  vb_id){
        vendorBillRepository.deleteById(vb_id);
        return true;
    }
    public VendorBillDTO updateBillByBillID(@Valid int vb_id, @Valid VendorBillDTO vendorBillDTO){
        VendorBill vendorBill=vendorBillRepository.updateVendorBillByBillID(vb_id);
        vendorBillRepository.save(modelMapper.map(vendorBillDTO, VendorBill.class));
        return vendorBillDTO;
    }

    public List<VendorBillDTO> getAllBill(){
        List<VendorBill> vendorbillList=vendorBillRepository.findAll();
        return modelMapper.map(vendorbillList,new TypeToken<List<VendorBillDTO>>(){}.getType());

    }
}
