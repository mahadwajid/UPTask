package com.be.api_server.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String hashWB;

    @ManyToOne
    @JoinColumn(name = "node_id", nullable = false)
    private Node node;
}
