import type { LucideIcon } from 'lucide-react';
import {
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Globe,
  GraduationCap,
  Wine,
  Cloud,
  Settings2,
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
  logo: string;
  icon: LucideIcon;
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
    icon: Globe,
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
    icon: Wine,
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
    icon: Cloud,
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
    icon: Settings2,
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
    icon: UtensilsCrossed,
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
      'Depende del alcance. Una landing comercial: 1–2 semanas. Un dashboard de KPIs con integración de datos: 3–6 semanas. Siempre arrancamos con un MVP funcional en menos de 15 días.',
  },
  {
    pregunta: '¿Qué pasa si ya tengo sistemas existentes?',
    respuesta:
      'Nos integramos con tu stack actual. Trabajamos con APIs, planillas Excel, bases de datos legadas y servicios cloud. No te obligamos a migrar todo de golpe.',
  },
  {
    pregunta: '¿La solución es propia o me lockean a una plataforma?',
    respuesta:
      'Todo el código y los datos son tuyos. Usamos stack open source y servicios estándar (Supabase, Vercel, Render). Si querés migrar el día de mañana, podés.',
  },
  {
    pregunta: '¿Hacen mantenimiento post-entrega?',
    respuesta:
      'Sí. Ofrecemos planes de soporte mensual y SLA de respuesta. La entrega no es el final del proyecto, es el inicio de la operación.',
  },
  {
    pregunta: '¿Trabajan con clientes fuera de Argentina?',
    respuesta:
      'Sí. Trabajamos remoto con clientes de LATAM y España. Toda la comunicación es en español y la facturación se ajusta al país del cliente.',
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
