package com.example.proj_vans.proj_vans.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.example.proj_vans.proj_vans.admin.Admin;
import com.example.proj_vans.proj_vans.motorista.Motorista;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    @Value("${api.security.token.secret}")
    private String secret;

    public String generateToken(Admin admin) {
        return generateTokenGeneric(admin.getEmail());
    }

    public String generateToken(Motorista motorista) {
        return generateTokenGeneric(motorista.getEmail());
    }

    public String generateToken(Passageiro passageiro) {
        return generateTokenGeneric(passageiro.getEmail());
    }
    public  String generateTokenGeneric(String email){
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer("auth")
                    .withSubject(email)
                    .withExpiresAt(generateExpiration())
                    .sign(algorithm);
            return token;
        }catch (JWTCreationException exception){
            throw  new RuntimeException("erro ao gerar o token",exception);
        }
    }
    public String validateToken(String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("auth")
                    .build()
                    .verify(token)
                    .getSubject();
        }catch (JWTVerificationException exception){
            return "";
        }
    }
    private Instant generateExpiration(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
