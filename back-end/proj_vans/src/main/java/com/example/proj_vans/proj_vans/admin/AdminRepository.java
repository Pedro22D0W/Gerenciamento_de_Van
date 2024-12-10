package com.example.proj_vans.proj_vans.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface AdminRepository extends JpaRepository<Admin,Long>{
    UserDetails findByEmail(String email);
}