package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.motorista.Motorista;
import com.example.proj_vans.proj_vans.motorista.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@RestController
@RequestMapping("motorista")
public class MotoristaController {
    @Autowired
    private MotoristaRepository repository;

    @PostMapping
    public void StoreMotorista(@RequestBody Motorista data){
        repository.save(data);
    }

    @GetMapping
    public List<Motorista> GetMotoristas(){
        return repository.findAll();
    }
}
