package com.be.api_server.repositories;

import com.be.api_server.entities.Node;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NodeRepository extends JpaRepository<Node, Long> {
    Node findByName(String name);
}
