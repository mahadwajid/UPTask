package com.be.api_server.controller;

import com.be.api_server.entities.Model;
import com.be.api_server.repositories.ModelRepository;
import com.be.api_server.repositories.NodeRepository;
import com.be.api_server.config.ApiPaths;
import com.be.api_server.dto.ModelResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors; // Add this import

@RestController
@RequestMapping(ApiPaths.MODELS_BASE)
public class ModelController {

    @Autowired
    private ModelRepository modelRepository;

    @Autowired
    private NodeRepository nodeRepository;

    // Fetch all models with node names
    @GetMapping
    public List<ModelResponse> getAllModels() {
        return modelRepository.findAll().stream()
                .map(model -> {
                    ModelResponse response = new ModelResponse();
                    response.setName(model.getName());
                    response.setHashWB(model.getHashWB());
                    response.setNodeName(model.getNode().getName()); // Get node name
                    return response;
                })
                .collect(Collectors.toList()); // Use Collectors.toList()
    }
}