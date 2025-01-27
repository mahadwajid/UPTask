package com.be.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.be.entities.NodeModel;

public interface NodeModelRepository extends JpaRepository<NodeModel, Long> {
    
}
