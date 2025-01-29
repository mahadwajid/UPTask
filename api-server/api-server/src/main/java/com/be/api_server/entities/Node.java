package com.be.api_server.entities;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.List;

@Entity
@Data
public class Node {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String fqdn;
    private String publicKey;
    private String ethereumAddress;
    private int p2pPort;
    private int rpcPort;
    private boolean registered;

    @OneToMany(mappedBy = "node", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Model> models;
}