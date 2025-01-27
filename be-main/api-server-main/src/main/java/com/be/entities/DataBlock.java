package com.be.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DataBlock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String fileURL;
    private String dbWB;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getFileURL() { return fileURL; }
    public void setFileURL(String fileURL) { this.fileURL = fileURL; }

    public String getDbWB() { return dbWB; }
    public void setDbWB(String dbWB) { this.dbWB = dbWB; }
}
