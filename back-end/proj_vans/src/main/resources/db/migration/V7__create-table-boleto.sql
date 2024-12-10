CREATE TABLE boletos (
    id SERIAL PRIMARY KEY,
    passageiro_id INT,
    status TEXT NOT NULL,
    data_vencimento DATE NOT NULL,
    valor DECIMAL NOT NULL,
    link  TEXT,
    FOREIGN KEY (passageiro_id) REFERENCES passageiros(id) ON DELETE CASCADE
);
