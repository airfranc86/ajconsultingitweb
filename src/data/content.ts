import type { LucideIcon } from 'lucide-react';
import {
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Database,
  Library,
  Layers,
  ShieldCheck,
} from 'lucide-react';

export type Rubro = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  metric: string;
  icon: LucideIcon;
};

export const rubros: Rubro[] = [
  {
    slug: 'clinicas',
    title: 'Clínicas de Salud',
    description: 'Dashboards médicos con análisis predictivo y alertas clínicas.',
    features: [
      'KPIs personalizados',
      'Análisis predictivo',
      'Dashboard inteligente',
      'Alertas clínicas',
      'Resumen ejecutivo',
    ],
    metric: '−70% en tiempo de análisis de KPIs médicos',
    icon: Stethoscope,
  },
  {
    slug: 'obras',
    title: 'Obras Viales',
    description: 'Monitoreo de avance en tiempo real y análisis topográfico de obra.',
    features: [
      'Monitoreo en tiempo real',
      'Análisis topográfico',
      'KPIs de construcción',
      'Previsión meteorológica',
      'Gestión de inventario',
    ],
    metric: 'Optimización de recursos y plazos en obra',
    icon: HardHat,
  },
  {
    slug: 'gastronomia',
    title: 'Restaurantes y Bares',
    description: 'App4Bar: stock con alertas, OCR de tickets, recetas y reportes.',
    features: [
      'Stock con alertas WhatsApp',
      'OCR de tickets',
      'Recetas y costos',
      'Gestión por sectores',
      'Reportes Excel y PDF',
    ],
    metric: 'Menos rotura de stock y digitalización de tickets en tiempo real',
    icon: UtensilsCrossed,
  },
];

export type Proyecto = {
  slug: string;
  numero: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  features: string[];
  url?: string;
  /** Path del logo (proyectos públicos). Excluyente con `icon`. */
  logo?: string;
  /** Icono lucide (para casos internos/anonimizados sin logo público). */
  icon?: LucideIcon;
};

export const proyectos: Proyecto[] = [
  {
    slug: 'santa-barba',
    numero: '01',
    nombre: 'Santa Barba CBA',
    categoria: 'Servicios Locales',
    descripcion: 'Web comercial con contacto directo.',
    features: ['Responsive', 'Formulario de contacto', 'Optimizado SEO'],
    url: 'https://santa-barba-cba.vercel.app/',
    logo: '/projects/santa-barba.png',
  },
  {
    slug: 'vinewatch',
    numero: '02',
    nombre: 'VineWatch Consulting',
    categoria: 'Consultoría',
    descripcion: 'Presentación profesional de servicios.',
    features: ['Diseño profesional', 'Navegación clara', 'Responsive'],
    url: 'https://vinewatchconsulting.vercel.app/',
    logo: '/projects/vinewatch.png',
  },
  {
    slug: 'aeromet',
    numero: '03',
    nombre: 'AeroMet ARG',
    categoria: 'Educativo',
    descripcion: 'Contenido educativo especializado en meteorología aeronáutica.',
    features: ['Contenido especializado', 'Estructura clara', 'SEO optimizado'],
    url: 'https://aerometarg.vercel.app/',
    logo: '/projects/aeromet.png',
  },
  {
    slug: 'fenix',
    numero: '04',
    nombre: 'Fenix CBA',
    categoria: 'Sistema Operativo',
    descripcion: 'Plataforma operativa integrada.',
    features: ['Lógica funcional', 'Sistema integrado', 'Operativo'],
    url: 'https://fenixcba.vercel.app/',
    logo: '/projects/fenix.png',
  },
  {
    slug: 'app4bar',
    numero: '05',
    nombre: 'App4Bar',
    categoria: 'Sistema de Gestión',
    descripcion: 'Gestión integral para bares: stock, OCR y reportes.',
    features: ['Stock con alertas WhatsApp', 'OCR de tickets financieros', 'Reportes Excel y PDF'],
    url: 'https://app4bar.onrender.com/#/login',
    logo: '/projects/app4bar.jpg',
  },
  {
    slug: 'pipeline-etl-contable',
    numero: '06',
    nombre: 'Pipeline ETL Contable',
    categoria: 'API · Pipeline · Dashboards',
    descripcion:
      'Automatización contable end-to-end: API de gestión + ARCA + Google Sheets + dashboards de KPIs financieros, actualizados a diario.',
    features: [
      'API contable + e-commerce',
      'Pipeline Python automático',
      'Google Sheets sincronizado',
      'Dashboards Streamlit + Plotly',
    ],
    icon: Database,
  },
];

export type MetodologiaPaso = {
  numero: string;
  titulo: string;
  duracion: string;
  descripcion: string;
};

export const metodologia: MetodologiaPaso[] = [
  {
    numero: '01',
    titulo: 'Sprint diagnóstico',
    duracion: '3–5 días',
    descripcion:
      'Mapeamos los procesos y devolvemos un documento con alcance, stack propuesto y referencias técnicas citadas. No improvisamos arquitectura.',
  },
  {
    numero: '02',
    titulo: 'Primera versión funcional',
    duracion: '≤ 15 días',
    descripcion:
      'Producto navegable con el flujo crítico operando, no maqueta estática. Iterás sobre algo real desde la primera semana.',
  },
  {
    numero: '03',
    titulo: 'Iteración a producción',
    duracion: '3–6 semanas',
    descripcion:
      'Despliegue real, integraciones reales, datos del cliente. Acompañamiento técnico durante toda la rampa hasta la operación estable.',
  },
  {
    numero: '04',
    titulo: 'Operación + acompañamiento',
    duracion: 'Mensual',
    descripcion:
      'Soporte con contrato claro y alcance acordado. La entrega no es el cierre del proyecto sino el inicio de la operación.',
  },
];

export type Pillar = {
  numero: string;
  titulo: string;
  descripcion: string;
  prueba: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    numero: '01',
    titulo: 'Investigamos antes de cotizar',
    descripcion:
      'Operamos sobre una base de conocimiento técnica propia con 700+ fuentes indexadas en 36 dominios — frameworks, hosting, autenticación, OCR, pagos, LLMs y más.',
    prueba:
      'Por eso entregamos en 15 días lo que otras consultoras cotizan en meses, sin reinventar arquitectura.',
    icon: Library,
  },
  {
    numero: '02',
    titulo: 'Verticales con piso, no demos',
    descripcion:
      'Lo que ves en proyectos ya corre en producción: salud, obras viales, gastronomía, vitivinicultura, meteorología, telcos.',
    prueba: 'No vendemos "podríamos hacer". Vendemos "esto ya está andando".',
    icon: Layers,
  },
  {
    numero: '03',
    titulo: 'Decisiones validadas por especialistas',
    descripcion:
      'Board asesor: un ingeniero profesional senior en planificación con metodología Kanban y un consultor externo experto en indicadores clave (KPIs) del área de salud.',
    prueba:
      'No improvisamos: consultamos antes de cada paso crítico del proyecto.',
    icon: ShieldCheck,
  },
];

export type Faq = {
  pregunta: string;
  respuesta: string;
};

export const faqs: Faq[] = [
  {
    pregunta: '¿Cuánto tiempo lleva implementar una solución?',
    respuesta:
      'Depende del alcance. Una landing web de presentación o portfolio: 1–2 semanas. Un panel de métricas de indicadores clave para finanzas o reestructuración de reportes financieros: 3–6 semanas. La primera versión funcional siempre la entregamos en menos de 15 días.',
  },
  {
    pregunta: '¿Y si todavía no tengo claro el proyecto?',
    respuesta:
      'Asistimos el proyecto que tengas en mente — esté apenas esbozado o ya en marcha. En la primera consulta devolvemos un feedback concreto para encauzar la idea, coordinar el alcance y acompañar la ejecución en el mundo de la tecnología.',
  },
  {
    pregunta: '¿La solución es propia o me lockean a una plataforma?',
    respuesta:
      'Todo el código y los datos son tuyos. Trabajamos sobre infraestructura con estándares de seguridad internacional. Tenés libertad total para mantenerlo con nosotros o migrarlo cuando lo decidas.',
  },
  {
    pregunta: '¿Hacen mantenimiento post-entrega?',
    respuesta:
      'Sí. Ofrecemos planes de soporte mensual con contrato claro y alcance acordado. El acompañamiento es de principio a fin: la entrega no es el cierre del proyecto sino el inicio de la operación.',
  },
  {
    pregunta: '¿Quién valida las decisiones técnicas detrás de cada proyecto?',
    respuesta:
      'Contamos con asesores externos que validan cada decisión clave antes de avanzar: un ingeniero profesional especializado en planificación con metodología Kanban, y un consultor externo del área de salud experto en indicadores clave (KPIs). No improvisamos: consultamos antes de cada paso.',
  },
];

export type Metrica = {
  valor: string;
  label: string;
};

export const metricas: Metrica[] = [
  { valor: '7+', label: 'Verticales con casos' },
  { valor: '700+', label: 'Fuentes técnicas indexadas' },
  { valor: '−70%', label: 'Tiempo en análisis de KPIs' },
  { valor: '15d', label: 'Primera versión funcional' },
];

/**
 * Rubros adicionales con evidencia (no protagónicos en home, pero visibles).
 * Aparecen como nota al pie de la grilla principal de Rubros.
 */
export const rubrosAdicionales: string[] = [
  'Vitivinicultura',
  'Meteorología aeronáutica',
  'Telcos',
  'Finanzas y contable',
];

export type AntiFitItem = {
  texto: string;
};

export const antiFitNo: AntiFitItem[] = [
  { texto: 'Buscás una landing en 48 horas sin diagnóstico previo.' },
  { texto: 'Necesitás integrar más de 5 sistemas legados sin etapa de discovery.' },
  { texto: 'Esperás que cotice sin entender tu operación primero.' },
];

export const antiFitSi: AntiFitItem[] = [
  { texto: 'Ya tenés sistemas funcionando y necesitás que conversen entre sí.' },
  { texto: 'Querés métricas reales sobre tu operación, no dashboards decorativos.' },
  { texto: 'Valorás que te digan "esto no" cuando corresponde — antes de gastar.' },
];

/**
 * Stack técnico mostrado como prueba de profundidad, no como venta de herramientas.
 * Tomado del ecosistema real en producción + Evolvionexus (base de conocimiento interna).
 */
export const stack: string[] = [
  'Next.js',
  'Streamlit',
  'NiceGUI',
  'FastAPI',
  'Supabase',
  'Google Cloud',
  'Vercel',
  'Render',
  'Docker',
  'OCR / Document AI',
  'LLM APIs',
  'GA4',
];
