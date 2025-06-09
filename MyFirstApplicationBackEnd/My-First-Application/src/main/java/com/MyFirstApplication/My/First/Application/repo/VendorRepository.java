package com.MyFirstApplication.My.First.Application.repo;


import com.MyFirstApplication.My.First.Application.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VendorRepository extends JpaRepository<Vendor,Integer> {
    @Query(value="SELECT * FROM vendor WHERE v_id=?1",nativeQuery = true)
    Vendor getVendorByVendorID(int v_id);
    @Query(value="SELECT * FROM vendor WHERE v_id=?1 AND ADDRESS=?2",nativeQuery = true)
    Vendor getVendorByVendorIDAndAddress(int v_id,String address);

    @Query(value="SELECT * FROM vendor WHERE  v_id=?1",nativeQuery = true)
    Vendor updateVendorByVendorID(int v_id);
    @Query(value="SELECT * FROM vendor WHERE nic=?1 AND items=?2",nativeQuery = true)
    Vendor getVendorByVendorNic(String nic,String items);

}
