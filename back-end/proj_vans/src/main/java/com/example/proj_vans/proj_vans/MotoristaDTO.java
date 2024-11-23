package com.example.proj_vans.proj_vans;

import java.sql.Time;

public record MotoristaDTO(String nome, String email, String senha, String cnh, String telefone, Long linha, Time retorno) {
}
