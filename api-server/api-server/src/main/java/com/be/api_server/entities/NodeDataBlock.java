package com.be.api_server.entities;

import jakarta.persistence.*;

@Entity
public class NodeDataBlock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "node_id")
    private Node node;

    @ManyToOne
    @JoinColumn(name = "data_block_id")
    private DataBlock dataBlock;
}
