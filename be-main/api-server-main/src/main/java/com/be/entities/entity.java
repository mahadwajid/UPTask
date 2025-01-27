package com.be.entities

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Node {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String fqdn;
    private int rpcPort;
    private int p2pPort;
    private boolean registered;

    public Long getId(){ return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getFQDN() { return fqdn; }
    public void setFQDN(String fqdn) { this.fqdn = fqdn; }

    public int getRPCPort() { return rpcPort; }
    public void setRPCPort(int rpcPort) { this.rpcPort = rpcPort; }

    public int getP2PPort() { return p2pPort; }
    public void setP2PPort(int p2pPort) { this.p2pPort = p2pPort; }

    public boolean getRegistered() { return registered; }
    public void setRegistered(boolean registered) { this.registered = registered; }
}