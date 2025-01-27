package com.be.services;

import com.be.entities.Node;
import com.be.repositories.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NodeService {
    @Autowired
    private NodeRepository nodeRepository;

    public List<Node> getAllNodes() {
        return nodeRepository.findAll();
    }

    public Node addNode(Node node) {
        return nodeRepository.save(node);
    }
}
