package com.be.api_server.repositories;

import com.be.api_server.entities.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepository extends JpaRepository<Model, Long> {
    
}
