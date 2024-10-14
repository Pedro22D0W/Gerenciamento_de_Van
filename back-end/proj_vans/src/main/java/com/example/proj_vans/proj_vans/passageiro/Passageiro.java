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
    private String senha;
    private String cpf;
    private String logradouro;
    private Time retorno;
    private Time ida;
    private String telefone;
    private Long linha;
    private Long role;

    public Passageiro() {
    }


    public Passageiro(String nome, String senha, String cpf, String logradouro, Time retorno, Time ida, String telefone, Long linha, Long role) {
        this.nome = nome;
        this.senha = senha;
        this.cpf = cpf;
        this.logradouro = logradouro;
        this.retorno = retorno;
        this.ida = ida;
        this.telefone = telefone;
        this.linha = linha;
        this.role = role;
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

    public void setRetorno(Time retorno) {
        this.retorno = retorno;
    }

    public Time getRetorno() {
        return retorno;
    }

    public void setIda(Time ida) {
        this.ida = ida;
    }

    public Time getIda() {
        return ida;
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

    public Long getRole() {
        return role;
    }

    public void setRole(Long role) {
        this.role = role;
    }
}

