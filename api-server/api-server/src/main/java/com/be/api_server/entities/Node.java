package com.be.api_server.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Node {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String publicKey;
    private String ethereumAddress;
    private int p2pPort;
    private int rpcPort;
    private boolean registered;
}
