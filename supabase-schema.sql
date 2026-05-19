-- Criar tabela de testimonials
CREATE TABLE testimonials (
  id BIGSERIAL PRIMARY KEY,
  label TEXT NOT NULL,
  quote TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  avatar TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Criar índice para ordenação por data
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);

-- Habilitar RLS (Row Level Security) para permitir leitura pública
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Criar política para leitura pública
CREATE POLICY "Permitir leitura pública" ON testimonials
  FOR SELECT USING (true);

-- Criar política para inserção pública (sem autenticação)
CREATE POLICY "Permitir inserção pública" ON testimonials
  FOR INSERT WITH CHECK (true);
