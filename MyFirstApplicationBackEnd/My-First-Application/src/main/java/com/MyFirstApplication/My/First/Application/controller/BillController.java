package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.BillDTO;
import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.service.BillService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
@RestController
@RequestMapping("/api/bill")
@CrossOrigin
public class BillController {

    @Autowired
    private BillService billService;
    @GetMapping("/getBill")
    public List<BillDTO> getBill(){

        return billService.getAllBill();
    }
    @PostMapping("/saveBill")
    public BillDTO saveBill(@Valid @RequestBody BillDTO BillDTO){

        return billService.saveBill(BillDTO);
    }

    @PutMapping("/updateBill")
    public BillDTO updateUser(@Valid @RequestBody BillDTO BillDTO){
        return billService.updateBill(BillDTO);
    }

    @DeleteMapping("/deleteBill")
    public boolean deleteBill(@Valid  @RequestBody BillDTO BillDTO){
        return billService.deleteBill(BillDTO);
    }
    @GetMapping( "/getBillByBillID/{id}")
    public BillDTO getBillByBillID (@PathVariable Long id){
        return billService.getBillByBillID(id);}

    @PutMapping("/updateBillByBillID/{id}")
    public BillDTO updateBillByBillID(@Valid @PathVariable Long id,@Valid  @RequestBody BillDTO billDTO){
        return billService.updateBillByBillID(id,billDTO);
    }


    @DeleteMapping("/deleteBillByBillID/{id}")
    public boolean deleteBillByBillID(@Valid @PathVariable Long id){
        return billService.deleteBillByBillID(id);
    }
    @GetMapping( "/getBillByBillIDAndIndex/{id}/{indexNo}")
    public BillDTO getBillByBillIDAndIndex(@Valid @PathVariable Long id, @Valid @PathVariable String indexNo){
        System.out.println("Bill id:"+id+"Bill Index:"+indexNo);
        return billService.getBillByBillIDAndIndex(id,indexNo);}

    @GetMapping("/getBillByBillDate/{dates}")
    public BillDTO getBillByBillDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dates) {
        return billService.getBillByBillDate(dates);
    }


    @GetMapping("/getLatestBillIdForUser/{indexNo}")
    public ResponseEntity<BillDTO> getLatestBillIdForUser(@Valid @PathVariable String indexNo) {
        BillDTO latestBill = billService.getLatestBillByIndexNo(indexNo);
        if (latestBill != null) {
            return ResponseEntity.ok(latestBill);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getLatestBillForUser/{date}")
    public ResponseEntity<BillDTO> getLatestBillForUser(@Valid @PathVariable String date) {
        BillDTO latestBill = billService.getLatestBillByDate(date);
        if (latestBill != null) {
            return ResponseEntity.ok(latestBill);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
