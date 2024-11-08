package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.UserRole;
import com.example.proj_vans.proj_vans.boleto.Boleto;
import com.example.proj_vans.proj_vans.boleto.BoletoRepository;
import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import jakarta.servlet.http.HttpServletRequest;
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
    @Autowired
    private TokenService tokenService;

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
    @GetMapping("/boletos-passageiro")
    public List<Boleto> getBoletos(HttpServletRequest request) {

            //recupera email do token
            var authHeader = request.getHeader("Authorization");
            if(authHeader == null) {
                System.out.println("header nulo ");
            }
            String token = authHeader.replace(("Bearer "), "");
            String passageiroEmail = tokenService.validateToken(token);

            // cria lista de passageiros para encontrar o passageiro que esta logado
            List<Passageiro> AllPassageiros = this.GetPassageiros();
            Long passageiroId = null;
            for (Passageiro passageiro:AllPassageiros
            ) {
                if (passageiro.getEmail().equals(passageiroEmail)){
                    passageiroId = passageiro.getId();
                }
            }
            System.out.println("id do passageiro:"+ passageiroId);
        List<Boleto> boletos = boletoRepository.findByPassageiroId(passageiroId);

        return boletos;
    }
}
