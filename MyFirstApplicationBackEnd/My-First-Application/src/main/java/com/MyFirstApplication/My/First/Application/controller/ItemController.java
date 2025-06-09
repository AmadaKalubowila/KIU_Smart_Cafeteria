package com.MyFirstApplication.My.First.Application.controller;

import com.MyFirstApplication.My.First.Application.dto.ItemDTO;
import com.MyFirstApplication.My.First.Application.service.ItemServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping(value = "api/v/Item")
@CrossOrigin
public class ItemController {

    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    @Autowired
    private ItemServices itemServices;

    @GetMapping("/getItem")
    public List<ItemDTO> getItem() {
        return itemServices.getAllItemStock();
    }

    @PostMapping("/saveItem")
    public ItemDTO saveItem(@RequestParam("name") String name,
                            @RequestParam("description") String description,
                            @RequestParam("price") float price,
                            @RequestParam("quantity") int quantity,
                            @RequestParam("type") String type,
                            @RequestParam("image") MultipartFile image) throws IOException {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setName(name);
        itemDTO.setDescription(description);
        itemDTO.setPrice(price);
        itemDTO.setQuantity(quantity);
        itemDTO.setType(type);
        itemDTO.setImage(image.getBytes());
        return itemServices.saveItem(itemDTO);
    }

    @PutMapping("/updateItem/{itemId}")
    public ItemDTO updateItem(@PathVariable("itemId") int itemId,
                              @RequestParam("name") String name,
                              @RequestParam("description") String description,
                              @RequestParam("price") float price,
                              @RequestParam("quantity") int quantity,
                              @RequestParam("type") String type,
                              @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setItemId(itemId);
        itemDTO.setName(name);
        itemDTO.setDescription(description);
        itemDTO.setPrice(price);
        itemDTO.setQuantity(quantity);
        itemDTO.setType(type);
        if (image != null) {
            itemDTO.setImage(image.getBytes());
        } else {
            // Fetch existing image if not updated
            ItemDTO existingItem = itemServices.getItemById(itemId);
            itemDTO.setImage(existingItem.getImage());
        }
        return itemServices.updateItem(itemDTO);
    }


    @DeleteMapping("/deleteItem/{itemId}")
    public boolean deleteItem(@PathVariable("itemId") int itemId) {
        return itemServices.deleteItemById(itemId);
    }

    @GetMapping("/getItemById/{itemId}")
    public ItemDTO getItemById(@PathVariable  int itemId){
        return itemServices.getItemById(itemId);
    }

    @GetMapping("/getItemByType/{type}")
    public List<ItemDTO> getItemByType(@PathVariable String type) {
        List<ItemDTO> items = itemServices.getItemByType(type);
        return items;
    }
    @GetMapping( "/getProductByName/{name}")
    public ItemDTO getProductByName(@PathVariable String name){
        System.out.println("Product Name:"+name);
        return itemServices.getProductByName(name);
    }
}






