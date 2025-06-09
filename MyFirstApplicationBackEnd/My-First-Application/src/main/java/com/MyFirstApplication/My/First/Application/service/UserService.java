package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.dto.UserDTO;
import com.MyFirstApplication.My.First.Application.dto.VendorDTO;
import com.MyFirstApplication.My.First.Application.entity.Order;
import com.MyFirstApplication.My.First.Application.entity.User;
import com.MyFirstApplication.My.First.Application.entity.Vendor;
import com.MyFirstApplication.My.First.Application.repo.UserRepo;
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

public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    public UserDTO saveUser(@Valid UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }
    public List <UserDTO> getAllUsers(){
        List<User>userList=userRepo.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());

    }
    public UserDTO updateUser(@Valid UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }
    public boolean deleteUser(@Valid UserDTO userDTO){
        userRepo.delete(modelMapper.map(userDTO, User.class));
        return true;
    }
    public UserDTO getUserByUserID(@Valid String userID){
        User user=userRepo.getUserByUserID(userID);
        return modelMapper.map(user,UserDTO.class);
    }
    public UserDTO getUserByUserIDAndAddress(@Valid String userID,@Valid String address){
        User user=userRepo.getUserByUserIDAndAddress(userID,address);
        return modelMapper.map(user,UserDTO.class);
    }
    public UserDTO updateUserByUserID(@Valid int u_id,@Valid UserDTO userDTO){
        Optional <User> user=userRepo.findById(u_id);
        userRepo.save(modelMapper.map(userDTO,User.class));
        return userDTO;
    }
    public boolean deleteUserByID(@Valid int u_id){
        userRepo.deleteById(u_id);

        return true;
    }

}
