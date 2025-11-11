package com.example.voyage.service;

import com.example.voyage.dto.RegisterRequest;
import com.example.voyage.model.User;
import com.example.voyage.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User register(RegisterRequest request) throws Exception {

        //contient la logique métier (vérifier l’email, encoder le mot de passe, sauvegarder l’utilisateur).

        // Vérifier si l'email existe déjà
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new Exception("Email déjà utilisé");
        }

        // Créer un nouvel utilisateur
        User user = new User();
        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setMotDePasse(passwordEncoder.encode(request.getMotDePasse())); // crypter le mot de passe

        return userRepository.save(user);
    }
}
