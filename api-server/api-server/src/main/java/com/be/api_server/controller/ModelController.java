package com.be.api_server.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.be.api_server.entities.Model;
import com.be.api_server.repositories.ModelRepository;
import com.be.api_server.config.ApiPaths;

@RestController
@RequestMapping(ApiPaths.MODELS_BASE)
public class ModelController {
    @Autowired
    private ModelRepository modelRepository;
    
    @GetMapping
    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }
    
    @PostMapping
    public Model createModel(@RequestBody Model model) {
        return modelRepository.save(model);
    }
}
