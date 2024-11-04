CREATE TABLE boletos (
    id SERIAL PRIMARY KEY,
    passageiro_id INT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pago', 'pendente', 'atrasado')),
    data_vencimento DATE NOT NULL,
    valor DECIMAL NOT NULL,
    FOREIGN KEY (passageiro_id) REFERENCES passageiros(id) ON DELETE CASCADE
);
