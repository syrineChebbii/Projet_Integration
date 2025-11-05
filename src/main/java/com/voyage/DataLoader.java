package com.voyage;

import com.voyage.model.User;
import com.voyage.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

            User user = new User();
            user.setNom("Admin");
            user.setPrenom("Admin");
            user.setEmail("admin@example.com");

            // 🔒 mot de passe haché ici
            user.setMotDePasse(encoder.encode("1234"));

            user.setNationalite("Tunisie");
            user.setSexe("Masculin");
            user.setTypePieceIdentite("CIN");
            user.setNumeroPieceIdentite("12345678");

            userRepository.save(user);
            System.out.println("✅ Utilisateur admin ajouté avec mot de passe haché !");
        }
    }
}
