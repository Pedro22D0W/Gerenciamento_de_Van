package com.example.proj_vans.proj_vans.boleto;

import com.example.proj_vans.proj_vans.passageiro.Passageiro;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "boletos")
public class Boleto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "passageiro_id", nullable = false)
    private Passageiro passageiro;

    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "data_vencimento", nullable = false)
    private LocalDate dataVencimento;

    @Column(nullable = false)
    private BigDecimal valor;

    // Enum para representar o status do boleto
    public enum Status {
        PAGO, PENDENTE, ATRASADO
    }

    // Construtor padrão
    public Boleto() {
    }

    // Construtor com todos os atributos, exceto o ID que é gerado automaticamente
    public Boleto(Passageiro passageiro, Status status, LocalDate dataVencimento, BigDecimal valor) {
        this.passageiro = passageiro;
        this.status = status;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public Passageiro getPassageiro() {
        return passageiro;
    }

    public void setPassageiro(Passageiro passageiro) {
        this.passageiro = passageiro;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDate getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(LocalDate dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }
}
