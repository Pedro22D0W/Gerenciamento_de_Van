package com.example.proj_vans.proj_vans;

import java.math.BigDecimal;
import java.time.LocalDate;

public record BoletoDTO(String mes, Long passageiroId, String status, LocalDate dataVencimento, BigDecimal valor) {
}
