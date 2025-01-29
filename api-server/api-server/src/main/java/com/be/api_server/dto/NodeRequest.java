package com.be.api_server.dto;  // Adjust package as needed

public class NodeRequest {
    private String fqdn;
    private int rpcPort;

    // Getters and setters
    public String getFqdn() { return fqdn; }
    public void setFqdn(String fqdn) { this.fqdn = fqdn; }

    public int getRpcPort() { return rpcPort; }
    public void setRpcPort(int rpcPort) { this.rpcPort = rpcPort; }
}
