package com.example.proj_vans.proj_vans.controllers;

import com.example.proj_vans.proj_vans.BoletoDTO;
import com.example.proj_vans.proj_vans.FileStorageProperties;
import com.example.proj_vans.proj_vans.boleto.Boleto;
import com.example.proj_vans.proj_vans.boleto.BoletoRepository;
// import com.example.proj_vans.proj_vans.infra.security.TokenService;
import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import com.example.proj_vans.proj_vans.services.UploadService;

// import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("boleto")
public class BoletoController {

    @Autowired
    UploadService uploadService;
    private final Path fileStorageLocation;
    @Autowired
    private BoletoRepository boletoRepository;

    @Autowired
    private PassageiroRepository passageiroRepository;

    public BoletoController(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
    }

    // Endpoint para armazenar um novo boleto
    @PostMapping("/store")
    public ResponseEntity<String> storeBoleto(@RequestPart("file") MultipartFile file,@RequestPart("data") BoletoDTO Data) {

        System.out.println("Valores do DTO: " + Data);
        Optional<Passageiro> optionalPassageiro = passageiroRepository.findById(Data.passageiroId());

        // Lança uma exceção se o passageiro não for encontrado
        Passageiro passageiro = (Passageiro) ((Optional<?>) optionalPassageiro).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Passageiro não encontrado")
        );

        String fileDownloadUri = uploadService.uploadFile(file);
        Boleto boleto = new Boleto(passageiro,Data,fileDownloadUri);
        boletoRepository.save(boleto);

        return  ResponseEntity.ok(fileDownloadUri);

    }
    @PutMapping("/{id}/updateStatus")
    public ResponseEntity<String> updateStatus(@PathVariable Long id) {

        Optional<Boleto> optionalBoleto = boletoRepository.findById(id);
        Boleto boleto = (Boleto) ((Optional<?>) optionalBoleto).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Passageiro não encontrado")
        );
        if (Objects.equals(boleto.getStatus(), "PENDENTE")){
            boleto.setStatus("PAGO");
        }
        else{
            boleto.setStatus("PENDENTE");
        }
        System.out.println("novo status: " + boleto.getStatus());
        boletoRepository.save(boleto);
        return ResponseEntity.noContent().build();
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

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        Path filePath = fileStorageLocation.resolve(fileName).normalize();

        try {
            Resource resource = new UrlResource(filePath.toUri());
            String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());

            if (contentType == null) {
                contentType = "aplication/octet-stream";
            }
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
