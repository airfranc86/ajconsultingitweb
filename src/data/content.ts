import type { LucideIcon } from 'lucide-react';
import { Database, Workflow, ClipboardList, ShoppingCart, Radio, Dumbbell, Heart } from 'lucide-react';

/** Taxonomía fija: toda categoría nueva debe entrar en una de estas 4. */
export type CategoriaProyecto =
  | 'BI & Dashboards'
  | 'Automatización & Pipelines'
  | 'Sistemas de Gestión'
  | 'Sitios Web & E-commerce';

export type Proyecto = {
  slug: string;
  numero: string;
  nombre: string;
  categoria: CategoriaProyecto;
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
    nombre: 'Web (Estilistas, Peluquerías, Barberías)',
    categoria: 'Sistemas de Gestión',
    descripcion:
      'Sistema de gestión integral para peluquerías, barberías y centros de estética: turnero online, control financiero y seguimiento de clientes en una interfaz moderna y profesional.',
    features: [
      'Turnero online',
      'Gestión financiera y de caja',
      'Seguimiento y fidelización de clientes',
      'Panel de tendencias y reportes',
    ],
    url: 'https://santa-barba-cba.vercel.app/',
    logo: '/projects/santa-barba.png',
  },
  {
    slug: 'vinewatch',
    numero: '02',
    nombre: 'VineWatch Consulting',
    categoria: 'Sitios Web & E-commerce',
    descripcion: 'Presentación profesional de servicios.',
    features: ['Diseño profesional', 'Navegación clara', 'Responsive'],
    url: 'https://vinewatchconsulting.vercel.app/',
    logo: '/projects/vinewatch.png',
  },
  {
    slug: 'aeromet',
    numero: '03',
    nombre: 'AeroMet ARG',
    categoria: 'Sitios Web & E-commerce',
    descripcion: 'Contenido educativo especializado en meteorología aeronáutica.',
    features: ['Contenido especializado', 'Estructura clara', 'SEO optimizado'],
    url: 'https://aerometarg.vercel.app/',
    logo: '/projects/aeromet.png',
  },
  {
    slug: 'fenix',
    numero: '04',
    nombre: 'Fenix CBA',
    categoria: 'Sitios Web & E-commerce',
    descripcion:
      'Sitio comercial para servicio de reparación de abolladuras por granizo (destapado sin pintura) en Córdoba.',
    features: ['Responsive', 'Presentación de servicio', 'SEO local'],
    url: 'https://fenixcba.vercel.app/',
    logo: '/projects/fenix.png',
  },
  {
    slug: 'app4bar',
    numero: '05',
    nombre: 'App4Bar',
    categoria: 'Sistemas de Gestión',
    descripcion: 'Gestión integral para bares: stock, OCR y reportes.',
    features: ['Stock con alertas WhatsApp', 'OCR de tickets financieros', 'Reportes Excel y PDF'],
    url: 'https://app4bar.onrender.com/#/login',
    logo: '/projects/app4bar.jpg',
  },
  {
    slug: 'pipeline-etl-contable',
    numero: '06',
    nombre: 'Pipeline ETL Contable',
    categoria: 'Automatización & Pipelines',
    descripcion:
      'Automatización contable end-to-end: API de gestión + ARCA + Google Sheets + dashboards de KPIs financieros, actualizados a diario.',
    features: [
      'API contable + e-commerce',
      'Pipeline Python automático',
      'Google Sheets sincronizado',
      'Dashboards Streamlit + Plotly',
    ],
    logo: '/projects/etl-dashboard.png',
  },
  {
    slug: 'skypulse',
    numero: '07',
    nombre: 'SkyPulse',
    categoria: 'BI & Dashboards',
    descripcion:
      'Panel informativo de nubosidades y fenómenos meteorológicos relevantes para operaciones aéreas, con datos actualizados de APIs oficiales.',
    features: [
      'Visualización de nubosidades',
      'Fenómenos meteo en tiempo real',
      'APIs meteorológicas oficiales',
      'Diseñado para operación aérea',
    ],
    url: 'https://skypulse-ar.vercel.app/',
    logo: '/projects/skypulse.png',
  },
  {
    slug: 'techcom-view',
    numero: '08',
    nombre: 'Techcom View',
    categoria: 'BI & Dashboards',
    descripcion:
      'Showcase técnico: panel interactivo de análisis de datos sobre infraestructura de telecomunicaciones a nivel mundial. Ejemplo de capacidad de exploración y visualización con Streamlit sobre datasets reales.',
    features: [
      'Streamlit + Python',
      'Visualización geoespacial',
      'Filtros interactivos',
      'Dataset público mundial',
    ],
    url: 'https://techcomview.streamlit.app/',
    icon: Radio,
  },
  {
    slug: 'kineopass',
    numero: '09',
    nombre: 'KineoPass CBA',
    categoria: 'Sistemas de Gestión',
    descripcion:
      'Turnero inteligente para estudios de movimiento: cupos, pagos y recordatorios automáticos.',
    features: [
      'Reservas con cupo y lista de espera',
      'Pagos nativos con MercadoPago',
      'Recordatorios automáticos por WhatsApp',
      'Multi-sede con dashboard unificado',
    ],
    url: 'https://kineopasscba.vercel.app/',
    icon: Dumbbell,
  },
  {
    slug: 'atelier-boda',
    numero: '10',
    nombre: 'Atelier Boda',
    categoria: 'Sitios Web & E-commerce',
    descripcion:
      'Invitación digital privada para bodas: acceso con contraseña, cuenta regresiva, cronograma y confirmación de asistencia en tiempo real.',
    features: [
      'Acceso privado con contraseña',
      'Confirmación de asistencia con backend propio',
      'Mesa de regalos con Mercado Pago',
      'Galería, música y cronograma del evento',
    ],
    icon: Heart,
  },
];

export type Servicio = {
  categoria: CategoriaProyecto;
  parrafo: string;
  bullets: string[];
  metrica: string;
  proyectoNombre: string;
  proyectoUrl: string;
  icon: LucideIcon;
};

/** Grid de servicios: 1 tarjeta por categoría fija, fusiona ex-Rubros + ex-Metodología + evidencia de Proyectos. */
export const servicios: Servicio[] = [
  {
    categoria: 'BI & Dashboards',
    parrafo: 'Paneles que convierten datos dispersos en decisiones, no en más planillas para revisar.',
    bullets: ['KPIs personalizados', 'Alertas automáticas', 'Análisis predictivo'],
    metrica: '−70% en tiempo de análisis de KPIs',
    proyectoNombre: 'SkyPulse',
    proyectoUrl: 'https://skypulse-ar.vercel.app/',
    icon: Database,
  },
  {
    categoria: 'Automatización & Pipelines',
    parrafo: 'Procesos que hoy hacés a mano — carga de datos, reportes, conciliaciones — corriendo solos.',
    bullets: ['ETL e integraciones', 'OCR y lectura de documentos', 'Reportes automáticos'],
    metrica: 'Actualización diaria sin intervención manual',
    proyectoNombre: 'Pipeline ETL Contable',
    proyectoUrl: '#proyectos',
    icon: Workflow,
  },
  {
    categoria: 'Sistemas de Gestión',
    parrafo: 'Turnero, caja, stock y seguimiento de clientes en un solo lugar, no en tres apps distintas.',
    bullets: ['Turnero online', 'Control financiero y de caja', 'Seguimiento de clientes'],
    metrica: 'Menos rotura de stock, cero doble carga',
    proyectoNombre: 'App4Bar',
    proyectoUrl: 'https://app4bar.onrender.com/#/login',
    icon: ClipboardList,
  },
  {
    categoria: 'Sitios Web & E-commerce',
    parrafo: 'Sitios a medida, rápidos y pensados para convertir — sin templates genéricos.',
    bullets: ['Diseño a medida', 'Pasarela de pagos', 'SEO técnico (Lighthouse ≥ 95)'],
    metrica: 'Lighthouse SEO ≥ 95 en producción',
    proyectoNombre: 'Fenix CBA',
    proyectoUrl: 'https://fenixcba.vercel.app/',
    icon: ShoppingCart,
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
