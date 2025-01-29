package com.be.api_server.dto;

public class ModelResponse {
    private String name;
    private String hashWB;
    private String nodeName;
    public String getName() {
        return name;
    }
    public String getHashWB() {
        return hashWB;
    }
    public String getNodeName() {
        return nodeName;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setHashWB(String hashWB) {
        this.hashWB = hashWB;
    }
    public void setNodeName(String nodeName) {
        this.nodeName = nodeName;
    }
}