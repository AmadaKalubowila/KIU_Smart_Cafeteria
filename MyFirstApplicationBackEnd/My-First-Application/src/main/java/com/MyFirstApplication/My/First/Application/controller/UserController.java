package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.OrderDTO;
import com.MyFirstApplication.My.First.Application.dto.UserDTO;
import com.MyFirstApplication.My.First.Application.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/v1/user")
@CrossOrigin
@Validated
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/getUsers")
    public List<UserDTO> getUser(){

        return userService.getAllUsers();
    }
    @PostMapping("/saveUser")
    public UserDTO saveUser(@Valid @RequestBody UserDTO userDTO){

        return userService.saveUser(userDTO);
    }
    @PutMapping("/updateUser")
    public UserDTO updateUser(@Valid @RequestBody UserDTO userDTO){
        return userService.updateUser(userDTO);
    }
    @DeleteMapping("/deleteUser")
    public boolean deleteUser(@Valid @RequestBody UserDTO userDTO){
        return userService.deleteUser(userDTO);
    }
    @GetMapping( "/getUserByUserId/{userID}")
    public UserDTO getUserByUserID (@Valid @PathVariable String userID){
    return userService.getUserByUserID(userID);}

    @GetMapping( "/getUserByUserIdAndAddress/{userID}/{address}")
    public UserDTO getUserByUserIDAndAddress(@Valid @PathVariable String userID,@Valid  @PathVariable String address){
        System.out.println("User id:"+userID+"user address:"+address);
        return userService.getUserByUserIDAndAddress(userID,address);}

    @PutMapping("/updateUserByUserID/{u_id}")
    public UserDTO updateUserByUserID( @Valid @PathVariable int u_id,@Valid @RequestBody UserDTO userDTO){
        return userService.updateUserByUserID(u_id,userDTO);
    }
    @DeleteMapping("/deleteUserByID/{u_id}")
    public boolean deleteUserByID(@Valid @PathVariable int u_id){
        return userService.deleteUserByID(u_id);
    }

}
