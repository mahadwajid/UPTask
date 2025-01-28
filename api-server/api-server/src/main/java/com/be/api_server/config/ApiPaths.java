package com.be.api_server.config;

public class ApiPaths {
    
    // Base API path
    public static final String API_BASE = "/api";

    // Node API paths
    public static final String NODES_BASE = API_BASE + "/nodes";
    public static final String NODES_ADD = NODES_BASE; // POST for adding nodes
    public static final String NODES_GET_ALL = NODES_BASE; // GET for fetching all nodes

    // Model API paths
    public static final String MODELS_BASE = API_BASE + "/models";
    public static final String MODELS_ADD = MODELS_BASE; // POST for adding models
    public static final String MODELS_GET_ALL = MODELS_BASE; // GET for fetching all models

    // DataBlock API paths
    public static final String DATA_BLOCKS_BASE = API_BASE + "/data-blocks";
    public static final String DATA_BLOCKS_ADD = DATA_BLOCKS_BASE; // POST for adding data blocks
    public static final String DATA_BLOCKS_GET_ALL = DATA_BLOCKS_BASE; // GET for fetching all data blocks

}
