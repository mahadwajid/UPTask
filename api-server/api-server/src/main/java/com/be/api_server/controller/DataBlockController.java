package com.be.api_server.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.be.api_server.entities.DataBlock;
import com.be.api_server.repositories.DataBlockRepository;
import com.be.api_server.config.ApiPaths;

@RestController
@RequestMapping(ApiPaths.DATA_BLOCKS_BASE)
public class DataBlockController {
    @Autowired
    private DataBlockRepository dataBlockRepository;
    
    @GetMapping
    public List<DataBlock> getAllDataBlocks() {
        return dataBlockRepository.findAll();
    }
    
    @PostMapping
    public DataBlock createDataBlock(@RequestBody DataBlock dataBlock) {
        return dataBlockRepository.save(dataBlock);
    }
}
