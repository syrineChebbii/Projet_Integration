package com.example.voyage.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // désactive CSRF pour les requêtes Angular
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll() // autorise register/login
                        .anyRequest().authenticated() // le reste nécessite auth
                )
                .httpBasic(httpBasic -> httpBasic.disable()) // pas de login par popup
                .formLogin(form -> form.disable()); // pas de formulaire de login par défaut

        return http.build();
    }
}
