package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.AuthenticationDTO;
import com.example.proj_vans.proj_vans.LoginResponseDTO;
import com.example.proj_vans.proj_vans.admin.Admin;
import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.motorista.Motorista;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.services.AuthorizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("auth")

public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    TokenService tokenService;
    @Autowired
    AuthorizationService authorizationService;

    @PostMapping
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.senha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        Object principal = auth.getPrincipal();
        String token;
        String role;

        // Gera o token e define a role
        if (principal instanceof Admin) {
            token = tokenService.generateToken((Admin) principal);
            role = "ADMIN";
        } else if (principal instanceof Motorista) {
            token = tokenService.generateToken((Motorista) principal);
            role = "MOTORISTA";
        } else if (principal instanceof Passageiro) {
            token = tokenService.generateToken((Passageiro) principal);
            role = "PASSAGEIRO";
        } else {
            return ResponseEntity.status(403).body(null);
        }

        // Retorna a resposta usando LoginResponseDTO
        var response = new LoginResponseDTO(token, role);
        return ResponseEntity.ok(response);
    }
}
