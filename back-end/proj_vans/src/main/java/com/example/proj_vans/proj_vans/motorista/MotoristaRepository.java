package com.example.proj_vans.proj_vans.motorista;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface MotoristaRepository extends JpaRepository<Motorista,Long> {
    UserDetails findByEmail(String email);
}
