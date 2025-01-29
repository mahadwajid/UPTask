package com.be.api_server.dto;  // Adjust package as needed

import java.util.List;

public class NodeInfoResponse {
    private String name;
    private int p2pPort;
    private String publicKey;
    private String ethereumAddress;
    private boolean registered;
    private List<ModelInfo> models;

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getP2pPort() { return p2pPort; }
    public void setP2pPort(int p2pPort) { this.p2pPort = p2pPort; }

    public String getPublicKey() { return publicKey; }
    public void setPublicKey(String publicKey) { this.publicKey = publicKey; }

    public String getEthereumAddress() { return ethereumAddress; }
    public void setEthereumAddress(String ethereumAddress) { this.ethereumAddress = ethereumAddress; }

    public boolean isRegistered() { return registered; }
    public void setRegistered(boolean registered) { this.registered = registered; }

    public List<ModelInfo> getModels() { return models; }
    public void setModels(List<ModelInfo> models) { this.models = models; }
}
