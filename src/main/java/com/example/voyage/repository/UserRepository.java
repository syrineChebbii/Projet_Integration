package com.example.voyage.repository;

import com.example.voyage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    //interface pour accéder à la base de données
    Optional<User> findByEmail(String email);
}
