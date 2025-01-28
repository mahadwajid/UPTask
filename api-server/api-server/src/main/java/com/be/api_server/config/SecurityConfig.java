package com.be.api_server.config;  // Ensure package matches the file path

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;  // Use SecurityFilterChain instead of WebSecurityConfigurerAdapter

@Configuration
public class SecurityConfig {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .anyRequest().permitAll() // Allow all requests (GET, POST, etc.)
            )
            .csrf(csrf -> csrf.disable()); // Disable CSRF protection

        return http.build();
    }
}
