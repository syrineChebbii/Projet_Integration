package com.example.voyage.controller;

import com.example.voyage.model.User;
import com.example.voyage.repository.UserRepository;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public User getCurrentUser(@AuthenticationPrincipal Object principal) {
        if (principal == null) {
            throw new RuntimeException("Utilisateur non connecté");
        }

        String email = null;

        // 🟢 Cas 1 : utilisateur connecté avec Google
        if (principal instanceof OAuth2User oAuth2User) {
            email = oAuth2User.getAttribute("email");
        }
        // 🟢 Cas 2 : utilisateur connecté avec email/mot de passe
        else if (principal instanceof UserDetails userDetails) {
            email = userDetails.getUsername();
        }

        if (email == null) {
            throw new RuntimeException("Impossible de récupérer l'email de l'utilisateur");
        }

        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }

    @PutMapping("/update")
    public User updateCurrentUser(@AuthenticationPrincipal Object principal, @RequestBody User updatedUser) {
        if (principal == null) {
            throw new RuntimeException("Utilisateur non connecté");
        }

        String email = null;

        // Détection du type de login
        if (principal instanceof OAuth2User oAuth2User) {
            email = oAuth2User.getAttribute("email");
        } else if (principal instanceof UserDetails userDetails) {
            email = userDetails.getUsername();
        }

        if (email == null) {
            throw new RuntimeException("Impossible de récupérer l'email de l'utilisateur");
        }

        // Mise à jour du profil
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        user.setNom(updatedUser.getNom());
        user.setPrenom(updatedUser.getPrenom());
        user.setNationalite(updatedUser.getNationalite());
        user.setSexe(updatedUser.getSexe());
        user.setTypePieceIdentite(updatedUser.getTypePieceIdentite());
        user.setNumeroPieceIdentite(updatedUser.getNumeroPieceIdentite());
        user.setDateNaissance(updatedUser.getDateNaissance());

        return userRepository.save(user);
    }
}
