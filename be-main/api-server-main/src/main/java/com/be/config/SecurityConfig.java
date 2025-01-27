package com.be.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults; // Static import for withDefaults()

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Updated CSRF configuration
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("api/v1/**").authenticated() // Secure endpoints
                .anyRequest().permitAll() // Allow all other endpoints
            )
            .httpBasic(withDefaults()); // Enable basic authentication
        return http.build();
    }
}
