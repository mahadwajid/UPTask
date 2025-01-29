package com.be.api_server.repositories;

import com.be.api_server.entities.Node;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface NodeRepository extends JpaRepository<Node, Long> {
    Optional<Node> findByFqdnAndRpcPort(String fqdn, int rpcPort);
}