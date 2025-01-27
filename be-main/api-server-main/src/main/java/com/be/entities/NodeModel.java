package com.be.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class NodeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Node node;

    @ManyToOne
    private Model model;

   public Long getId() { return id; }
   public void setId(Long id) { this.id = id; }

   public Node getNode() { return node; }
   public void setNode(Node node) { this.node = node; }

   public Model getModel() { return model; }
   public void setModel(Model model) { this.model = model; }
}
