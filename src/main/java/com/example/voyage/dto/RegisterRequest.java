package com.example.voyage.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    //reçoit les données du frontend
    private String nom;
    private String email;
    private String motDePasse;
}
