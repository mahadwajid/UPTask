package com.be.api_server.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class DataBlock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String fileURL;
    private String hashDB;
}
