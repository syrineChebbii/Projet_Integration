package com.voyage.controller;

import com.voyage.model.User;
import com.voyage.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email déjà utilisé !");
        }

        userService.register(user);
        return ResponseEntity.ok("Inscription réussie !");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> existingUser = userService.findByEmail(user.getEmail());
        if (existingUser.isEmpty()) {
            return ResponseEntity.status(401).body("Email incorrect !");
        }

        if (!passwordEncoder.matches(user.getMotDePasse(), existingUser.get().getMotDePasse())) {
            return ResponseEntity.status(401).body("Mot de passe incorrect !");
        }

        return ResponseEntity.ok("Connexion réussie !");
    }
}
