package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.BillDTO;
import com.MyFirstApplication.My.First.Application.dto.VendorBillDTO;
import com.MyFirstApplication.My.First.Application.service.BillService;
import com.MyFirstApplication.My.First.Application.service.VendorBillService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vBill")
@CrossOrigin
public class VendorBillController {
    @Autowired
    private VendorBillService vendorBillService;
    @PostMapping("/saveBill")
    public VendorBillDTO saveVendorBill(@Valid @RequestBody VendorBillDTO  vendorBillDTO){

        return vendorBillService.saveVendorBill(vendorBillDTO);
    }
    @GetMapping( "/getVendorBillByBillID/{vb_id}")
    public VendorBillDTO getVendorBillByBillID(@Valid @PathVariable int vb_id ){
        return vendorBillService.getVendorBillByBillID(vb_id);}

    @PutMapping("/updateVendorBillByBillID/{vb_id}")
    public VendorBillDTO  updateVendorBillByBillID(@Valid @PathVariable int vb_id, @Valid  @RequestBody VendorBillDTO  vendorBillDTO){
        return vendorBillService.updateBillByBillID(vb_id,vendorBillDTO);
    }


    @DeleteMapping("/deleteVendorBillByBillID/{vb_id}")
    public boolean deleteVendorBillByBillID(@Valid @PathVariable int vb_id){
        return vendorBillService.deleteBillByBillID(vb_id);
    }
    @GetMapping("/getVBill")
    public List<VendorBillDTO> getVendorBill(){

        return vendorBillService.getAllBill();
    }
}
