package com.be.api_server.controller;

import com.be.api_server.entities.Model;
import com.be.api_server.repositories.ModelRepository;
import com.be.api_server.config.ApiPaths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiPaths.MODELS_BASE)
public class ModelController {

    @Autowired
    private ModelRepository modelRepository;

    // Fetch all models
    @GetMapping
    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }
}