-- Tabla para guardar sesiones de la aplicación
-- Ejecuta este SQL en el SQL Editor de Supabase

CREATE TABLE IF NOT EXISTS sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  session_data JSONB NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('therapist', 'patient')),
  current_step INTEGER NOT NULL DEFAULT 0,
  view TEXT NOT NULL DEFAULT 'guide' CHECK (view IN ('guide', 'recommendations', 'manual')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índice para búsquedas rápidas por fecha de actualización
CREATE INDEX IF NOT EXISTS idx_sessions_updated_at ON sessions(updated_at DESC);

-- Índice para búsquedas por modo
CREATE INDEX IF NOT EXISTS idx_sessions_mode ON sessions(mode);

-- Función para actualizar automáticamente updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at automáticamente
CREATE TRIGGER update_sessions_updated_at
  BEFORE UPDATE ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Habilitar Row Level Security (RLS)
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Política para permitir lectura y escritura a todos los usuarios autenticados
-- Si quieres que cualquiera pueda usar la app sin autenticación, usa esta política:
CREATE POLICY "Allow all operations for authenticated users" ON sessions
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Si prefieres acceso público (sin autenticación), usa esta política en su lugar:
-- CREATE POLICY "Allow public access" ON sessions
--   FOR ALL
--   USING (true)
--   WITH CHECK (true);

