package com.be.api_server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.be.api_server.entities.DataBlock;

public interface DataBlockRepository extends JpaRepository<DataBlock, Long> {
    
}
