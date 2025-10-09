-- ===== CONFIGURACIÓN DE SUPABASE PARA DEMO REQUESTS =====
-- A&J Consulting IT - Business Intelligence Solutions
-- Ejecutar en Supabase SQL Editor

-- Crear tabla para solicitudes de demo
CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  -- Datos originales (para validación y email)
  nombre TEXT NOT NULL CHECK (length(nombre) >= 2 AND length(nombre) <= 100),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  clinica TEXT NOT NULL CHECK (length(clinica) >= 2 AND length(clinica) <= 200),
  telefono TEXT CHECK (length(telefono) <= 20),
  mensaje TEXT CHECK (length(mensaje) <= 1000),
  -- Datos encriptados (para almacenamiento seguro)
  nombre_encrypted JSONB,
  email_encrypted JSONB,
  clinica_encrypted JSONB,
  telefono_encrypted JSONB,
  mensaje_encrypted JSONB,
  -- Metadatos de seguridad
  ip_address INET,
  user_agent TEXT,
  honeypot TEXT, -- Campo para detectar bots
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'spam', 'blocked')),
  processed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Índices para optimización
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_ip_address ON demo_requests(ip_address);

-- Habilitar RLS (Row Level Security)
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción desde el backend
CREATE POLICY "Allow backend insertions" ON demo_requests
  FOR INSERT WITH CHECK (true);

-- Política para permitir lectura solo a administradores
CREATE POLICY "Allow admin read access" ON demo_requests
  FOR SELECT USING (auth.role() = 'service_role');

-- Política para permitir actualización solo a administradores
CREATE POLICY "Allow admin update access" ON demo_requests
  FOR UPDATE USING (auth.role() = 'service_role');

-- Crear función para limpiar registros antiguos (más de 1 año)
CREATE OR REPLACE FUNCTION cleanup_old_demo_requests()
RETURNS void AS $$
BEGIN
  DELETE FROM demo_requests 
  WHERE created_at < NOW() - INTERVAL '1 year';
END;
$$ LANGUAGE plpgsql;

-- Crear función para obtener estadísticas
CREATE OR REPLACE FUNCTION get_demo_stats()
RETURNS TABLE (
  total_requests BIGINT,
  pending_requests BIGINT,
  processed_requests BIGINT,
  spam_requests BIGINT,
  today_requests BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) as total_requests,
    COUNT(*) FILTER (WHERE status = 'pending') as pending_requests,
    COUNT(*) FILTER (WHERE status = 'processed') as processed_requests,
    COUNT(*) FILTER (WHERE status = 'spam') as spam_requests,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as today_requests
  FROM demo_requests;
END;
$$ LANGUAGE plpgsql;

-- Crear función para obtener datos desencriptados (solo para administradores)
CREATE OR REPLACE FUNCTION get_decrypted_demo_requests()
RETURNS TABLE (
  id UUID,
  nombre TEXT,
  email TEXT,
  clinica TEXT,
  telefono TEXT,
  mensaje TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  status TEXT
) AS $$
BEGIN
  -- Solo permitir acceso a service_role
  IF auth.role() != 'service_role' THEN
    RAISE EXCEPTION 'Acceso denegado';
  END IF;
  
  RETURN QUERY
  SELECT 
    dr.id,
    dr.nombre,
    dr.email,
    dr.clinica,
    dr.telefono,
    dr.mensaje,
    dr.created_at,
    dr.status
  FROM demo_requests dr
  ORDER BY dr.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear vista para reportes
CREATE OR REPLACE VIEW demo_requests_summary AS
SELECT 
  DATE(created_at) as fecha,
  COUNT(*) as total_solicitudes,
  COUNT(*) FILTER (WHERE status = 'pending') as pendientes,
  COUNT(*) FILTER (WHERE status = 'processed') as procesadas,
  COUNT(*) FILTER (WHERE status = 'spam') as spam
FROM demo_requests
GROUP BY DATE(created_at)
ORDER BY fecha DESC;

-- Comentarios de documentación
COMMENT ON TABLE demo_requests IS 'Tabla para almacenar solicitudes de demo de manera segura';
COMMENT ON COLUMN demo_requests.honeypot IS 'Campo oculto para detectar bots automatizados';
COMMENT ON COLUMN demo_requests.ip_address IS 'IP del cliente para rate limiting y seguridad';
COMMENT ON COLUMN demo_requests.status IS 'Estado del procesamiento: pending, processed, spam, blocked';
