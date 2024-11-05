package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.boleto.Boleto;
import com.example.proj_vans.proj_vans.boleto.BoletoRepository;
// import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
// import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("boleto")
public class BoletoController {
    
    @Autowired
    private BoletoRepository boletoRepository;
    
    @Autowired
    private PassageiroRepository passageiroRepository;

    // Endpoint para armazenar um novo boleto
    @PostMapping("/store")
    public void storeBoleto(@RequestBody Boleto boleto) {
        boletoRepository.save(boleto);
    }

    // Endpoint para obter todos os boletos
    @GetMapping("/getAll")
    public List<Boleto> getAllBoletos() {
        return boletoRepository.findAll();
    }

    // Endpoint para obter boletos de um passageiro específico
    @GetMapping("/byPassageiro/{passageiroId}")
    public List<Boleto> getBoletosByPassageiroId(@PathVariable Long passageiroId) {
        Passageiro passageiro = passageiroRepository.findById(passageiroId).orElse(null);
        if (passageiro != null) {
            return boletoRepository.findByPassageiroId(passageiroId);
        }
        return null;
    }
}
