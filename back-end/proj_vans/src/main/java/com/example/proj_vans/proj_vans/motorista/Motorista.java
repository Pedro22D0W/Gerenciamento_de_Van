package com.example.proj_vans.proj_vans.motorista;

import jakarta.persistence.*;

@Table(name="motoristas")
@Entity(name = "motorostas")
public class Motorista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String senha;
    private String cnh;
    private String telefone;
    private Long linha;
    private Long role;

    public Motorista() {
    }


    public Motorista(String nome, String senha, String cnh, String telefone, Long linha, Long role) {
        this.nome = nome;
        this.senha = senha;
        this.cnh = cnh;
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

    public String getPassword() {
        return senha;
    }

    public void setPassword(String password) {
        this.senha = password;
    }

    public String getCnh() {
        return cnh;
    }

    public void setCnh(String cnh) {
        this.cnh = cnh;
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

