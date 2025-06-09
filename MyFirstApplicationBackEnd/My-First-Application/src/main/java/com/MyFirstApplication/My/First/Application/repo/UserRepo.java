package com.MyFirstApplication.My.First.Application.repo;

import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User,Integer> {
    @Query(value="SELECT * FROM user WHERE id=?1",nativeQuery = true)
    User getUserByUserID(String userId);
    @Query(value="SELECT * FROM user WHERE Id=?1 AND ADDRESS=?2",nativeQuery = true)
    User getUserByUserIDAndAddress(String userId,String address);

    @Query(value="SELECT * FROM user WHERE id=?1 AND u_id=?2",nativeQuery = true)
    User updateUserByUserID(String id,int u_id);
}
