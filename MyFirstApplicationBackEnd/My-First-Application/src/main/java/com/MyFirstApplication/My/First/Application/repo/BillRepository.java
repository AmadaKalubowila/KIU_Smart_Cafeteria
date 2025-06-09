package com.MyFirstApplication.My.First.Application.repo;

import com.MyFirstApplication.My.First.Application.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



import java.time.LocalDate;

public interface BillRepository  extends JpaRepository<Bill,Long> {
    @Query(value="SELECT * FROM bill WHERE id=?1 ",nativeQuery = true)
    Bill getBillByBillID(Long id);

    @Query(value="SELECT * FROM bill WHERE id=?1",nativeQuery = true)
    Bill updateBillByBillID(Long id);

    @Query(value = "SELECT id FROM bill WHERE index_no = ?1 ORDER BY Date_And_Time DESC LIMIT 1", nativeQuery = true)
    Long findLatestBillIdByIndexNo(String indexNo);
    @Query(value="SELECT * FROM bill WHERE id=?1 AND indexNo=?2",nativeQuery = true)
    Bill getBillByBillIDAndIndex(Long id,String indexNo);

    @Query(value="SELECT * FROM bill WHERE Date_And_Time=?1", nativeQuery = true)
    Bill getBillByBillDate(LocalDate Date_And_Time);

    @Query(value = "SELECT id FROM bill WHERE date = ?1 ", nativeQuery = true)
    Long findLatestBillIdByDate(String date);
}

