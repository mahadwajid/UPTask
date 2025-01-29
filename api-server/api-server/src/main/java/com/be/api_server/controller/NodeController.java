package com.be.api_server.controller;

import com.be.api_server.entities.*;
import com.be.api_server.repositories.*;
import com.be.api_server.config.ApiPaths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.util.UriComponentsBuilder;
import com.be.api_server.dto.NodeRequest;
import com.be.api_server.dto.NodeInfoResponse;
import com.be.api_server.dto.ModelInfo;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(ApiPaths.NODES_BASE)
public class NodeController {

    @Autowired
    private NodeRepository nodeRepository;

    @Autowired
    private ModelRepository modelRepository;

    @Autowired
    private RestTemplate restTemplate;

    // Fetch all nodes
    @GetMapping
    public List<Node> getAllNodes() {
        return nodeRepository.findAll();
    }

    // Add a new node
    @PostMapping("/addNode")
    public Node addNode(@RequestBody NodeRequest nodeRequest) {
        // Validate input
        if (nodeRequest.getFqdn() == null || nodeRequest.getFqdn().isEmpty()) {
            throw new IllegalArgumentException("FQDN cannot be null or empty");
        }
        if (nodeRequest.getRpcPort() <= 0 || nodeRequest.getRpcPort() > 65535) {
            throw new IllegalArgumentException("Invalid RPC port");
        }

        // Construct the URL for the /info endpoint
        String url = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host(nodeRequest.getFqdn())
                .port(nodeRequest.getRpcPort())
                .path("/info")
                .build()
                .toUriString();

        try {
            // Call the /info endpoint
            NodeInfoResponse response = restTemplate.getForObject(url, NodeInfoResponse.class);

            // Check if the node already exists
            Optional<Node> existingNode = nodeRepository.findByFqdnAndRpcPort(nodeRequest.getFqdn(), nodeRequest.getRpcPort());
            Node node = existingNode.orElse(new Node());

            // Update node details
            node.setName(response.getName());
            node.setFqdn(nodeRequest.getFqdn());
            node.setRpcPort(nodeRequest.getRpcPort());
            node.setP2pPort(response.getP2pPort());
            node.setPublicKey(response.getPublicKey());
            node.setEthereumAddress(response.getEthereumAddress());
            node.setRegistered(response.isRegistered());

            // Save the node
            Node savedNode = nodeRepository.save(node);

            // Save models associated with the node
            for (ModelInfo modelInfo : response.getModels()) {
                Model model = new Model();
                model.setName(modelInfo.getName());
                model.setHashWB(modelInfo.getHashWB());
                model.setNode(savedNode);
                modelRepository.save(model);
            }

            return savedNode;
        } catch (HttpClientErrorException e) {
            throw new RuntimeException("Failed to call /info endpoint: " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("An error occurred: " + e.getMessage());
        }
    }

    // Refresh node data
    @PostMapping("/refresh")
    public Node refreshNode(@RequestBody NodeRequest nodeRequest) {
        // Validate input
        if (nodeRequest.getFqdn() == null || nodeRequest.getFqdn().isEmpty()) {
            throw new IllegalArgumentException("FQDN cannot be null or empty");
        }
        if (nodeRequest.getRpcPort() <= 0 || nodeRequest.getRpcPort() > 65535) {
            throw new IllegalArgumentException("Invalid RPC port");
        }

        // Construct the URL for the /info endpoint
        String url = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host(nodeRequest.getFqdn())
                .port(nodeRequest.getRpcPort())
                .path("/info")
                .build()
                .toUriString();

        try {
            // Call the /info endpoint
            NodeInfoResponse response = restTemplate.getForObject(url, NodeInfoResponse.class);

            // Find the node to refresh
            Node node = nodeRepository.findByFqdnAndRpcPort(nodeRequest.getFqdn(), nodeRequest.getRpcPort())
                    .orElseThrow(() -> new RuntimeException("Node not found"));

            // Update node details
            node.setName(response.getName());
            node.setP2pPort(response.getP2pPort());
            node.setPublicKey(response.getPublicKey());
            node.setEthereumAddress(response.getEthereumAddress());
            node.setRegistered(response.isRegistered());

            // Save the updated node
            return nodeRepository.save(node);
        } catch (HttpClientErrorException e) {
            throw new RuntimeException("Failed to call /info endpoint: " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("An error occurred: " + e.getMessage());
        }
    }
}