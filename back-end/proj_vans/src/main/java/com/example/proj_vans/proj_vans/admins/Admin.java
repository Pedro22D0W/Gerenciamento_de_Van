package com.example.proj_vans.proj_vans.admins;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Table(name = "admins")
@Entity(name = "admins")

public class Admin {

    @Id @GenerationValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private Long role;


}
