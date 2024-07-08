package com.MyFirstApplication.My.First.Application.repo;


import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query(value="SELECT * FROM review WHERE id=?1 ",nativeQuery = true)
    Review getReviewByReviewID(Long id);

    @Query(value="SELECT * FROM review WHERE id=?1",nativeQuery = true)
    Review updateReviewByReviewID(Long id);

    @Query(value = "SELECT id FROM review WHERE index_no = ?1 ORDER BY date DESC LIMIT 1", nativeQuery = true)
    Long findLatestReviewIdByIndexNo(String indexNo);
    @Query(value="SELECT * FROM review WHERE id=?1 AND index_no=?2",nativeQuery = true)
    Review getReviewByReviewIDAndIndex(Long id,String indexNo);

    @Query(value="SELECT * FROM review WHERE dates=?1", nativeQuery = true)
    Review getReviewByReviewDate(LocalDate dates);
}
