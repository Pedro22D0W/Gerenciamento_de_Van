package com.example.proj_vans.proj_vans.controllers;


import com.example.proj_vans.proj_vans.FileStorageProperties;
import com.example.proj_vans.proj_vans.PassageiroDTO;
import com.example.proj_vans.proj_vans.boleto.Boleto;
import com.example.proj_vans.proj_vans.boleto.BoletoRepository;
import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.motorista.Motorista;
import com.example.proj_vans.proj_vans.motorista.MotoristaRepository;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import com.example.proj_vans.proj_vans.services.UploadService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("passageiro")
@CrossOrigin(origins = "http://localhost:4200")
public class PassageiroController {

    @Autowired
    UploadService uploadService;
    private final Path fileStorageLocation;
    @Autowired
    private PassageiroRepository repository;
    @Autowired
    private BoletoRepository boletoRepository;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private MotoristaRepository motoristaRepository;

    public PassageiroController(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getPassageirosProfileDir())
                .toAbsolutePath().normalize();
    }


    @PostMapping("/store")
    public void StorePassageiro(@RequestPart("file") MultipartFile file,@RequestPart("data") PassageiroDTO data){

        Passageiro passageiro = new Passageiro(data);
        String UriProfileLink = uploadService.uploadFile(file,fileStorageLocation,"profile_passageiros/");
        passageiro.setProfile(UriProfileLink);
        repository.save(passageiro);
    }

    @GetMapping("/getAll")
    public List<Passageiro> GetPassageiros(){
        return repository.findAll();
    }
    @GetMapping("/boletos-passageiro")
    public List<Boleto> getBoletosPassageiro(HttpServletRequest request) {

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
    @GetMapping("/boletos/{passageiroId}")
    public List<Boleto> getBoletos(@PathVariable Long passageiroId) {
   
        List<Boleto> boletos = boletoRepository.findByPassageiroId(passageiroId);

        return boletos;
    }
    @GetMapping("/get-my-motorista")
    public List<Motorista> GetMyMotorista(HttpServletRequest request){

        var authHeader = request.getHeader("Authorization");
        String token = authHeader.replace(("Bearer "),"");
        String email = tokenService.validateToken(token);
        Passageiro passageiro = this.findPassageiro(email);


        return this.GerarListaDeMotoristas(passageiro);

    }
    @GetMapping("/get-profile")
    public ResponseEntity<String> GetProfile(HttpServletRequest request){

        var authHeader = request.getHeader("Authorization");
        String token = authHeader.replace(("Bearer "),"");
        String email = tokenService.validateToken(token);
        Passageiro passageiro = this.findPassageiro(email);


        return ResponseEntity.ok(passageiro.getProfile());

    }

    public List<Motorista> GerarListaDeMotoristas(Passageiro passageiro){
        List<Motorista> AllMotoristas = motoristaRepository.findAll();
        List<Motorista> MotoristasDaLinha = new ArrayList<>();
        for (Motorista motorista:AllMotoristas
        ) {
            if (passageiro.getLinha().equals(motorista.getLinha())){
                MotoristasDaLinha.add(motorista);
            }

        }
        return MotoristasDaLinha;
    }
    public Passageiro findPassageiro(String email){
        List<Passageiro> Allpassageiros = repository.findAll();

        for (Passageiro passageiro:Allpassageiros
        ) {
            if (passageiro.getEmail().equals(email)){
                return passageiro;
            }
        }
        return null;
    }

}
