package com.be.api_server.controller;

import com.be.api_server.entities.Node;
import com.be.api_server.entities.Model;
import com.be.api_server.repositories.NodeRepository;
import com.be.api_server.repositories.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NodeController {
    
    @Autowired
    private NodeRepository nodeRepository;
    
    @Autowired
    private ModelRepository modelRepository;

    @GetMapping("/nodes")
    public List<Node> getAllNodes() {
        return nodeRepository.findAll();
    }

    @GetMapping("/models")
    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }

    @PostMapping("/nodes")
    public Node createNode(@RequestBody Node node) {
        return nodeRepository.save(node);
    }

    @PostMapping("/nodes/{nodeId}/models")
    public Model addModel(@PathVariable Long nodeId, @RequestBody Model model) {
        Node node = nodeRepository.findById(nodeId)
                .orElseThrow(() -> new RuntimeException("Node not found"));
        model.setNode(node);
        return modelRepository.save(model);
    }
}
