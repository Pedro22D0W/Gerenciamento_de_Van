package com.example.proj_vans.proj_vans.passageiro;

import jakarta.persistence.*;
import java.sql.Time;

@Table(name="passageiros")
@Entity(name = "passageiros")
public class Passageiro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private String cpf;
    private String logradouro;
    private String destino;
    private Time retorno;
    private String telefone;
    private Long linha;

    public Passageiro() {
    }

    public Passageiro(String nome, String senha, String email, String cpf, String logradouro, String destino, Time retorno, String telefone, Long linha, Long role) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.logradouro = logradouro;
        this.destino = destino;
        this.retorno = retorno;
        this.telefone = telefone;
        this.linha = linha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() { 
        return email; 
    }

    public void setEmail(String email) { 
        this.email = email; 
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getDestino() {
        return destino;
    }

    public void setRetorno(Time retorno) {
        this.retorno = retorno;
    }

    public Time getRetorno() {
        return retorno;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Long getLinha() {
        return linha;
    }

    public void setLinha(Long linha) {
        this.linha = linha;
    }
}

