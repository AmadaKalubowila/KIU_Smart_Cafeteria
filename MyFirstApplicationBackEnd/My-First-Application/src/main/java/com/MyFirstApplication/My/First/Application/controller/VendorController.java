package com.MyFirstApplication.My.First.Application.controller;


import com.MyFirstApplication.My.First.Application.dto.VendorDTO;
import com.MyFirstApplication.My.First.Application.service.VendorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/vendor")
@CrossOrigin
@Validated
public class VendorController {
    @Autowired
    private VendorService vendorService;
    @GetMapping("/getVendors")
    public List<VendorDTO> geVendor(){
        return vendorService.getAllVendors();
    }
    @PostMapping("/saveVendor")
    public VendorDTO saveVendor(@Valid @RequestBody VendorDTO vendorDTO){
        return vendorService.saveVendor(vendorDTO);
    }
    @PutMapping("/updateVendor")
    public VendorDTO updateVendor(@Valid @RequestBody VendorDTO vendorDTO){
        return vendorService.updateVendor(vendorDTO);
    }
    @DeleteMapping("/deleteVendor")
    public boolean deleteVendor(@Valid @RequestBody VendorDTO vendorDTO){
        return vendorService.deleteVendor(vendorDTO);
    }
    @GetMapping( "/getVendorByVendorID/{v_id}")
    public VendorDTO getVendorByVendorID (@Valid @PathVariable int v_id){
        return vendorService.getVendorByVendorID(v_id);}

    @GetMapping( "/getVendorByVendorIDAndAddress/{v_id}/{address}")
    public VendorDTO getVendorByVendorIDAndAddress(@Valid @PathVariable int v_id,@Valid  @PathVariable String address){
        System.out.println("Vendor id:"+v_id+"vendor address:"+address);
        return vendorService.getVendorByVendorIDAndAddress(v_id,address);}

    @PutMapping("/updateVendorByVendorID/{v_id}")
    public VendorDTO updateVendorByVendorID(@Valid @PathVariable int v_id,@Valid @RequestBody VendorDTO vendorDTO){
        return vendorService.updateVendorByVendorID(v_id,vendorDTO);
    }
    @DeleteMapping("/deleteVendorByID/{v_id}")
    public boolean deleteVendorByID(@Valid @PathVariable int v_id){
        return vendorService.deleteVendorByID(v_id);
    }

    @GetMapping( "/getVendorByVendorNic/{nic}/{items}")
    public VendorDTO getVendorByVendorNic(@Valid @PathVariable String nic,@Valid @PathVariable String items){
        return vendorService.getVendorByVendorNic(nic,items);}

}
