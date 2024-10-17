package com.example.proj_vans.proj_vans.motorista;

import jakarta.persistence.*;

@Table(name= "motoristas")
@Entity(name= "motoristas")
public class Motorista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private String cnh;
    private String telefone;
    private Long linha;

    public Motorista() {
    }


    public Motorista(String nome, String email, String senha, String cnh, String telefone, Long linha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cnh = cnh;
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
}

