package com.be.api_server.entities;

import jakarta.persistence.*;

@Entity
public class NodeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "node_id")
    private Node node;

    @ManyToOne
    @JoinColumn(name = "model_id")
    private Model model;
}
