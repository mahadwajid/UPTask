package com.be.repositories;

import com.be.entities.DataBlock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataBlockRepository extends JpaRepository<DataBlock, Long> {
    
}
