package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.UserRole;
import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.motorista.Motorista;
import com.example.proj_vans.proj_vans.motorista.MotoristaRepository;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("motorista")
public class MotoristaController {
    @Autowired
    private MotoristaRepository repository;
    @Autowired
    TokenService tokenService;
    @Autowired
    PassageiroRepository passageiroRepository;

    @PostMapping("/store")
    public void StoreMotorista(@RequestBody Motorista data){
        String senhaCriptografada = new BCryptPasswordEncoder().encode(data.getSenha());
        data.setSenha(senhaCriptografada);
        data.setRole(UserRole.MOTORISTA);
        repository.save(data);
    }

    @GetMapping("/getAll")
    public List<Motorista> GetMotoristas(){
        return repository.findAll();
    }
    @GetMapping("/getPassageirosDaLinha")
    public List<Passageiro> GetPassageirosDaLinha(HttpServletRequest request){

        var authHeader = request.getHeader("Authorization");
        String token = authHeader.replace(("Bearer "),"");
        String email = tokenService.validateToken(token);
        Motorista motorista = this.findMotorista(email);


        return this.GerarListaDePassageiros(motorista);
        
    }

    public List<Passageiro> GerarListaDePassageiros(Motorista motorista){
        List<Passageiro> AllPassageiros = passageiroRepository.findAll();
        List<Passageiro> passageirosDaLinha = new ArrayList<>();
        for (Passageiro passageiro:AllPassageiros
             ) {
            if (passageiro.getLinha().equals(motorista.getLinha())){
                passageirosDaLinha.add(passageiro);
            }

        }
        return passageirosDaLinha;
    }
    public Motorista findMotorista(String email){
        List<Motorista> Allmotoristas = repository.findAll();
        for (Motorista motorista:Allmotoristas
             ) {
            if (motorista.getEmail().equals(email)){
                return motorista;
            }
        }
        return null;
    }
}
