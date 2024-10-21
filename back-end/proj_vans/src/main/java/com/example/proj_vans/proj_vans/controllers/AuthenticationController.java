package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.AuthenticationDTO;
import com.example.proj_vans.proj_vans.admin.Admin;
import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.motorista.Motorista;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.services.AuthorizationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")

public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    TokenService tokenService;
    @Autowired
    AuthorizationService authorizationService;

    @PostMapping
    public ResponseEntity login(@RequestBody AuthenticationDTO data){
        
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(),data.senha());
        //UserDetails user = authorizationService.loadUserByUsername(data.email()); 
     
        var auth = this.authenticationManager.authenticate(usernamePassword);

        Object principal = auth.getPrincipal(); // Pode ser Admin, Motorista ou Passageiro
        String token;

        if (principal instanceof Admin) {
            token = tokenService.generateToken((Admin) principal);
        } else if (principal instanceof Motorista) {
            token = tokenService.generateToken((Motorista) principal);
        } else if (principal instanceof Passageiro) {
            token = tokenService.generateToken((Passageiro) principal);} else {
            return ResponseEntity.status(403).body("Usuário não reconhecido");
        }

        return  ResponseEntity.ok(token);

    }
}
