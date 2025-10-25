-- =============================================
-- SETUP SUPABASE MARKETING - A&J Consulting IT
-- =============================================
-- Este script configura el schema marketing para leads del sitio web
-- Separado del schema principal para clínicas

-- Crear schema marketing
CREATE SCHEMA IF NOT EXISTS marketing;

-- Crear tabla para solicitudes de demo en el schema marketing
CREATE TABLE marketing.demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  clinica TEXT NOT NULL,
  telefono TEXT,
  mensaje TEXT,
  honeypot TEXT, -- Campo para honeypot
  ip_address INET, -- Dirección IP del solicitante
  user_agent TEXT, -- User-Agent del navegador
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending', -- pending, processed, contacted, converted
  source TEXT DEFAULT 'website' -- website, manual, etc.
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_marketing_demo_requests_email ON marketing.demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_marketing_demo_requests_created_at ON marketing.demo_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_marketing_demo_requests_status ON marketing.demo_requests(status);

-- Habilitar Row Level Security (RLS)
ALTER TABLE marketing.demo_requests ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones anónimas (desde el formulario web)
CREATE POLICY "Allow anonymous inserts" ON marketing.demo_requests
  FOR INSERT WITH CHECK (true); -- Permitir a cualquier usuario insertar

-- Política para que el owner pueda leer sus propios registros (si se implementa autenticación)
-- Por ahora, solo se permite la inserción anónima.
-- Si se necesita que un usuario autenticado vea sus propios leads, se añadiría:
CREATE POLICY "Owner can read all" ON marketing.demo_requests
  FOR SELECT USING (auth.uid() IS NOT NULL AND auth.uid() = id);

-- Política para que el owner pueda actualizar sus propios registros
CREATE POLICY "Owner can update all" ON marketing.demo_requests
  FOR UPDATE USING (auth.uid() IS NOT NULL AND auth.uid() = id);

-- Comentarios de documentación
COMMENT ON TABLE marketing.demo_requests IS 'Tabla para solicitudes de demo del sitio web corporativo.';
COMMENT ON COLUMN marketing.demo_requests.status IS 'Estado del procesamiento del lead: pending, processed, contacted, converted.';
COMMENT ON COLUMN marketing.demo_requests.honeypot IS 'Campo oculto para detección de bots.';
COMMENT ON COLUMN marketing.demo_requests.ip_address IS 'Dirección IP del usuario que envió la solicitud.';
COMMENT ON COLUMN marketing.demo_requests.user_agent IS 'User-Agent del navegador del usuario.';
COMMENT ON COLUMN marketing.demo_requests.source IS 'Origen de la solicitud de demo.';
