package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("passageiro")
@CrossOrigin(origins = "http://localhost:4200")
public class PassageiroController {
    @Autowired
    private PassageiroRepository repository;

    @PostMapping
    public void StorePassageiro(@RequestBody Passageiro data){
        repository.save(data);
    }

    @GetMapping
    public List<Passageiro> GetPassageiros(){
        return repository.findAll();
    }
    
}
