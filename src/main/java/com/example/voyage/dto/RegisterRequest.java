package com.example.voyage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RegisterRequest {
    //reçoit les données du frontend
    private String nom;
    private String email;
    private String motDePasse;

    public RegisterRequest(String nom, String email, String motDePasse) {
        this.nom = nom;
        this.email = email;
        this.motDePasse = motDePasse;
    }

    // Getters
    public String getNom() { return nom; }
    public String getEmail() { return email; }
    public String getMotDePasse() { return motDePasse; }

    public void setNom(String nom) { this.nom = nom; }



}
