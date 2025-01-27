package com.be.controllers;

import com.be.entities.Node;
import com.be.services.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/nodes")
public class NodeController {
    @Autowired
    private NodeService nodeService;

    @GetMapping
    public List<Node> getAllNodes() {
        return nodeService.getAllNodes();
    }

    @PostMapping
    public Node createNode(Node node) {
        return nodeService.addNode(node);
    }
}
