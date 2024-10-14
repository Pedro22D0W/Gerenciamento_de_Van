package com.example.proj_vans.proj_vans.admin;

import jakarta.persistence.*;

@Table(name = "admins")
@Entity(name = "admins")

public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String user_name;
    private String password;
    private Long role;

}
