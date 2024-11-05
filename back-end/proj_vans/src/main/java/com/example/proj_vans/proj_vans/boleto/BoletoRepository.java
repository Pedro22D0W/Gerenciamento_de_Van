package com.example.proj_vans.proj_vans.boleto;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoletoRepository extends JpaRepository<Boleto, Long> {

    // Busca boletos por status
    List<Boleto> findByStatus(String status);

    // Busca boletos por passageiro
    List<Boleto> findByPassageiroId(Long passageiroId);

    // Busca um boleto específico pelo ID e ID do passageiro (caso queira verificar a relação)
    Optional<Boleto> findByIdAndPassageiroId(Long id, Long passageiroId);

    // Busca boletos por data de vencimento
    List<Boleto> findByDataVencimento(java.time.LocalDate dataVencimento);

    // Exemplo de um método customizado para encontrar boletos em atraso
    List<Boleto> findByStatusAndDataVencimentoBefore(String status, java.time.LocalDate data);
}