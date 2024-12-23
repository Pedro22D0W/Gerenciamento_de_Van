package com.example.proj_vans.proj_vans.motorista;

import com.example.proj_vans.proj_vans.MotoristaDTO;
import com.example.proj_vans.proj_vans.UserRole;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.sql.Time;
import java.util.Collection;
import java.util.List;

@Table(name= "motoristas")
@Entity(name= "motoristas")
public class Motorista implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private String cnh;
    private String telefone;
    private Long linha;
    private String profile;
    private Time retorno;
    @Enumerated(EnumType.STRING)
    private UserRole role;

    public Motorista() {
    }

//Construtor com todos os argumentos
    public Motorista(MotoristaDTO data) {
        this.nome = data.nome();
        this.email = data.email();
        this.senha =  new BCryptPasswordEncoder().encode(data.senha());;
        this.cnh = data.cnh();
        this.telefone = data.telefone();
        this.linha = data.linha();
        this.retorno = data.retorno();
        this.role = UserRole.MOTORISTA;
    }

//geters e seters
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

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }
    //metodos do string security


    public Time getRetorno() {
        return retorno;
    }

    public void setRetorno(Time retorno) {
        this.retorno = retorno;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {


        if (this.role == UserRole.MOTORISTA) return List.of(new SimpleGrantedAuthority("ROLE_MOTORISTA"));
        else return null;
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public void setRole(UserRole userRole) {
        this.role = userRole;
    }
}

