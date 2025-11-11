package com.voyage.service;

import com.voyage.model.User;
import com.voyage.repository.UserRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository repo) {
        this.userRepository = repo;
    }

    @Override
public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    System.out.println("🔍 Tentative de connexion avec : " + email);
    User user = userRepository.findByEmail(email)
        .orElseThrow(() -> new UsernameNotFoundException("Utilisateur introuvable : " + email));

    System.out.println("✅ Utilisateur trouvé : " + user.getEmail() + " / mdp = " + user.getMotDePasse());

    return org.springframework.security.core.userdetails.User
            .withUsername(user.getEmail())
            .password(user.getMotDePasse())
            .authorities(Collections.singleton(() -> "ROLE_USER"))
            .build();
}

}
