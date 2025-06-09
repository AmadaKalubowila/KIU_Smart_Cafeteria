package com.MyFirstApplication.My.First.Application.service;

import com.MyFirstApplication.My.First.Application.dto.ItemDTO;
import com.MyFirstApplication.My.First.Application.entity.ItemStock;
import com.MyFirstApplication.My.First.Application.repo.ItemRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ItemServices {

    @Autowired
    private ItemRepo itemRepo;

    @Autowired
    private ModelMapper modelMapper;

    public ItemDTO saveItem(ItemDTO itemDTO) {
        ItemStock itemStock = modelMapper.map(itemDTO, ItemStock.class);
        itemStock = itemRepo.save(itemStock);
        return modelMapper.map(itemStock, ItemDTO.class);
    }

    public List<ItemDTO> getAllItemStock() {
        List<ItemStock> itemList = itemRepo.findAll();
        return modelMapper.map(itemList, new TypeToken<List<ItemDTO>>() {}.getType());
    }

    public ItemDTO updateItem(ItemDTO itemDTO) {
        ItemStock existingItemStock = itemRepo.findById(itemDTO.getItemId())
                .orElseThrow(() -> new RuntimeException("Item not found"));

        existingItemStock.setName(itemDTO.getName());
        existingItemStock.setDescription(itemDTO.getDescription());
        existingItemStock.setPrice(itemDTO.getPrice());
        existingItemStock.setQuantity(itemDTO.getQuantity());
        existingItemStock.setType(itemDTO.getType());
        if (itemDTO.getImage() != null) {
            existingItemStock.setImage(itemDTO.getImage());
        }

        itemRepo.save(existingItemStock);
        return modelMapper.map(existingItemStock, ItemDTO.class);
    }

    public boolean deleteItemById(int itemId) {
        itemRepo.deleteById(itemId);
        return true;
    }

    public ItemDTO getItemById(int itemId) {
        ItemStock itemStock = itemRepo.findById(itemId).orElseThrow(() -> new RuntimeException("Item not found"));
        return modelMapper.map(itemStock, ItemDTO.class);
    }


    public List<ItemDTO> getItemByType(String type) {
        List<ItemStock> itemStocks = itemRepo.findByType(type);
        return itemStocks.stream()
                .map(item -> modelMapper.map(item, ItemDTO.class))
                .collect(Collectors.toList());
    }

    public ItemDTO getProductByName(String name){
        ItemStock itemStock=itemRepo.getProductByName(name);
        return modelMapper.map(itemStock,ItemDTO.class);
    }
}

