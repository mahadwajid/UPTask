package com.be.api_server.controller;

import com.be.api_server.entities.Node;
import com.be.api_server.repositories.NodeRepository;
import com.be.api_server.config.ApiPaths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiPaths.NODES_BASE)
public class NodeController {
    
    @Autowired
    private NodeRepository nodeRepository;
    
    @GetMapping
    public List<Node> getAllNodes() {
        return nodeRepository.findAll();
    }
    
    @PostMapping
    public Node createNode(@RequestBody Node node) {
        return nodeRepository.save(node);
    }
}
