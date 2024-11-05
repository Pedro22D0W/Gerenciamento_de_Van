package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.UserRole;
import com.example.proj_vans.proj_vans.boleto.Boleto;
import com.example.proj_vans.proj_vans.boleto.BoletoRepository;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("passageiro")
@CrossOrigin(origins = "http://localhost:4200")
public class PassageiroController {
    @Autowired
    private PassageiroRepository repository;
    @Autowired
    private BoletoRepository boletoRepository;

    @PostMapping("/store")
    public void StorePassageiro(@RequestBody Passageiro data){
        String senhaCriptografada = new BCryptPasswordEncoder().encode(data.getSenha());
        data.setSenha(senhaCriptografada);
        data.setRole(UserRole.PASSAGEIRO);
        repository.save(data);
    }

    @GetMapping("/getAll")
    public List<Passageiro> GetPassageiros(){
        return repository.findAll();
    }
    @GetMapping("/boletos/{passageiroId}")
    public List<Boleto> getBoletos(@PathVariable Long passageiroId) {
        List<Boleto> boletos = boletoRepository.findByPassageiroId(passageiroId);

        return boletos;
    }
}
