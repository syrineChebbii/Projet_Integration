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
}










































































































