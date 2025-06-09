package com.MyFirstApplication.My.First.Application.repo;

import com.MyFirstApplication.My.First.Application.entity.Bill;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.entity.VendorBill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VendorBillRepository extends JpaRepository<VendorBill,Integer> {

    @Query(value="SELECT * FROM venderbill  WHERE vb_id=?1 ",nativeQuery = true)
    VendorBill getVendorBillByBillID(int vb_id);

    @Query(value="SELECT * FROM venderbill WHERE vb_id=?1",nativeQuery = true)
    VendorBill updateVendorBillByBillID(int vb_id);
}
