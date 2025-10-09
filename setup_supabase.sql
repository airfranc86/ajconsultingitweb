-- ===== CONFIGURACIÓN BÁSICA DE SUPABASE =====
-- A&J Consulting IT - Business Intelligence Solutions
-- 
-- NOTA: Esta es una versión simplificada para demostración.
-- La implementación completa con encriptación, RLS avanzado y funciones
-- de seguridad está disponible bajo licencia comercial.

-- Crear tabla básica para solicitudes de demo
CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  clinica TEXT NOT NULL,
  telefono TEXT,
  mensaje TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Índices básicos
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at);

-- Comentarios de documentación
COMMENT ON TABLE demo_requests IS 'Tabla básica para solicitudes de demo';
COMMENT ON COLUMN demo_requests.status IS 'Estado del procesamiento: pending, processed';