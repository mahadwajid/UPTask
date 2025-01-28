package com.be.api_server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.be.api_server.entities.NodeDataBlock;

public interface NodeDataBlockRepository extends JpaRepository<NodeDataBlock, Long> {
    
}
