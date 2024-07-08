package com.example.Admin.controller;

import com.example.Admin.dto.ItemDTO;
import com.example.Admin.service.ItemServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping (value ="api/v/Item")
@CrossOrigin

public class ItemController {

    @Autowired
    private ItemServices itemServices;

    @GetMapping("/getItem")
    public List<ItemDTO> getItem(){
        return itemServices.getAllItemStock();
    }

    @PostMapping("/saveItem")
    public ItemDTO saveItem(@RequestParam("name") String name,
                            @RequestParam("description") String description,
                            @RequestParam("price") float price,
                            @RequestParam("image") MultipartFile image) throws IOException{
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setName(name);
        itemDTO.setDescription(description);
        itemDTO.setPrice(price);
        itemDTO.setImage(image.getBytes());
        return itemServices.saveItem(itemDTO);
    }

    @PutMapping("/updateItem")
    public ItemDTO updateItem(@RequestBody ItemDTO itemDTO){
        return itemServices.updateItem(itemDTO);
    }

    @DeleteMapping("/deleteItem")
    public boolean deleteItem(@RequestBody ItemDTO itemDTO){
        return itemServices.deleteItem(itemDTO);
    }
}