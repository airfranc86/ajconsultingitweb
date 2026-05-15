import type { LucideIcon } from 'lucide-react';
import { Stethoscope, HardHat, UtensilsCrossed, Database } from 'lucide-react';

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
  descripcion: string;
};

export const metodologia: MetodologiaPaso[] = [
  {
    numero: '01',
    titulo: 'Consulta inicial',
    descripcion: 'Entendemos tu negocio y definimos objetivos.',
  },
  {
    numero: '02',
    titulo: 'Análisis y propuesta',
    descripcion: 'Solución personalizada con métricas y alcance.',
  },
  {
    numero: '03',
    titulo: 'Desarrollo',
    descripcion: 'Implementación con seguimiento continuo.',
  },
  {
    numero: '04',
    titulo: 'Entrega y seguimiento',
    descripcion: 'Entrega funcional y acompañamiento en la adopción.',
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
  { valor: '5+', label: 'Proyectos en producción' },
  { valor: '3', label: 'Rubros especializados' },
  { valor: '−70%', label: 'Tiempo en análisis de KPIs' },
  { valor: '15d', label: 'Tiempo a MVP funcional' },
];
