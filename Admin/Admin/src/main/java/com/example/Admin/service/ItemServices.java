package com.example.Admin.service;

import com.example.Admin.dto.ItemDTO;
import com.example.Admin.entity.ItemStock;
import com.example.Admin.repo.ItemRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
@Transactional

public class ItemServices {

    @Autowired
    private ItemRepo itemRepo;

    @Autowired
    private ModelMapper modelMapper;

    public ItemDTO saveItem(ItemDTO itemDTO) {
        ItemStock itemStock = modelMapper.map(itemDTO, ItemStock.class);
        itemRepo.save(itemStock);
        return itemDTO;
    }

    public List<ItemDTO> getAllItemStock(){
        List<ItemStock>itemList=itemRepo.findAll();
        return modelMapper.map(itemList,new TypeToken<List<ItemDTO>>(){}.getType());
    }

    public ItemDTO updateItem(ItemDTO itemDTO){
        ItemStock itemStock = modelMapper.map(itemDTO, ItemStock.class);
        itemRepo.save(itemStock);
        return itemDTO;
    }

    public boolean deleteItem(ItemDTO itemDTO){
        ItemStock itemStock = modelMapper.map(itemDTO, ItemStock.class);
        itemRepo.delete(itemStock);
        return true;
    }


}

