
package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.dto.VendorDTO;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.entity.Vendor;
import com.MyFirstApplication.My.First.Application.repo.VendorRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@Transactional

public class VendorService {
    @Autowired
    private VendorRepository vendorRepository;
    @Autowired
    private ModelMapper modelMapper;
    public VendorDTO saveVendor(@Valid VendorDTO vendorDTO){
        vendorRepository.save(modelMapper.map(vendorDTO, Vendor.class));
        return vendorDTO;
    }
    public List <VendorDTO> getAllVendors(){
        List<Vendor>vendorList=vendorRepository.findAll();
        return modelMapper.map(vendorList,new TypeToken<List<VendorDTO>>(){}.getType());

    }
    public VendorDTO updateVendor(@Valid VendorDTO vendorDTO){
        vendorRepository.save(modelMapper.map(vendorDTO,Vendor.class));
        return vendorDTO;
    }
    public boolean deleteVendor(@Valid VendorDTO vendorDTO){
        vendorRepository.delete(modelMapper.map(vendorDTO, Vendor.class));
        return true;
    }
    public VendorDTO getVendorByVendorID(@Valid int v_id){
        Vendor vendor=vendorRepository.getVendorByVendorID(v_id);
        return modelMapper.map(vendor,VendorDTO.class);
    }
    public VendorDTO getVendorByVendorIDAndAddress(@Valid int v_id,@Valid String address){
        Vendor vendor=vendorRepository.getVendorByVendorIDAndAddress(v_id,address);
        return modelMapper.map(vendor,VendorDTO.class);
    }

    public VendorDTO updateVendorByVendorID(@Valid int v_id, VendorDTO vendorDTO){
        Optional<Vendor> vendor=vendorRepository.findById(v_id);
        vendorRepository.save(modelMapper.map(vendorDTO,Vendor.class));
        return vendorDTO;
    }
    public boolean deleteVendorByID(@Valid int v_id){
        vendorRepository.deleteById(v_id);

        return true;
    }


    public VendorDTO getVendorByVendorNic(@Valid String nic,@Valid String items){
        Vendor vendor=vendorRepository.getVendorByVendorNic(nic,items);
        return modelMapper.map(vendor,VendorDTO.class);
    }

}

