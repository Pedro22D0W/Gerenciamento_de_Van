package com.example.proj_vans.proj_vans;

import java.sql.Time;

public record PassageiroDTO(String nome, String senha, String email, String cpf, String logradouro, String destino, Time retorno, String telefone, Long linha) {
}
