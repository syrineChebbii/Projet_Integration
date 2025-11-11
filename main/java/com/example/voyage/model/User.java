package com.example.voyage.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String prenom;

    private String sexe;

    private LocalDate dateNaissance;

    private String nationalite;

    private String typePieceIdentite; // exemple : CIN, Passeport...

    private String numeroPieceIdentite;

    @Column(unique = true)
    private String email;

    private String motDePasse;

    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String nom) { this.prenom = prenom; }

    public String getNationalite() { return nationalite; }
    public void setNationalite(String nationalite) { this.nationalite = nationalite; }


    public String getTypePieceIdentite() { return typePieceIdentite; }
    public void setTypePieceIdentite(String typePieceIdentite) { this.typePieceIdentite = typePieceIdentite; }



    public String getNumeroPieceIdentite() { return numeroPieceIdentite; }
    public void setNumeroPieceIdentite(String typePieceIdentite) { this.numeroPieceIdentite = numeroPieceIdentite; }



    public String getSexe() { return sexe; }
    public void setSexe(String sexe) { this.sexe = sexe; }


    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMotDePasse() { return motDePasse; }
    public void setMotDePasse(String motDePasse) { this.motDePasse = motDePasse; }

    public LocalDate getDateNaissance() { return dateNaissance; }
    public void setDateNaissance(LocalDate dateNaissance) { this.dateNaissance = dateNaissance; }

}















































































































