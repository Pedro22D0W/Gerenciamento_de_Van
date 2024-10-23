package com.example.proj_vans.proj_vans.passageiro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface PassageiroRepository extends JpaRepository<Passageiro,Long> {
    UserDetails findByEmail(String email);
}
