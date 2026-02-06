"use client";
import { useState, useEffect, useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// MACHINEMIND v4.0 TRANSCENDENCE — THE COMPLETE SYSTEM PERFECTED
// Applying: GENESIS ENGINE + COMMUNION protocols + BLUE OCEAN vectors + APEX v5
// New: Footer trust elements, WhatsApp CTA, SEO-ready, mobile-optimized
// Cal.com: https://cal.com/machine-mind/machinemind-strategy-session
// ═══════════════════════════════════════════════════════════════════════════════

const CAL_LINK = "https://cal.com/machine-mind/machinemind-strategy-session";
const INSTAGRAM = "https://www.instagram.com/machinemindconsulting/";

const WHATSAPP_NUMBER = "+19544451638";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=`;
const EMAIL = "hello@machinemind.ai";

// ═══════════════════════════════════════════════════════════════════════════════
// COLOR SYSTEM (Enhanced with urgency red)
// ═══════════════════════════════════════════════════════════════════════════════
const COLORS = {
  void: "#030508",
  bg: "#0a0e14",
  bgCard: "#0d1219",
  bgCardHover: "#111820",
  border: "#1c2433",
  borderHover: "#2d3a4f",
  cyan: "#00d4ff",
  cyanBright: "#40e0ff",
  cyanDim: "rgba(0, 212, 255, 0.08)",
  cyanGlow: "rgba(0, 212, 255, 0.4)",
  gold: "#f0c850",
  goldDim: "rgba(240, 200, 80, 0.08)",
  goldGlow: "rgba(240, 200, 80, 0.3)",
  green: "#00ff88",
  greenDim: "rgba(0, 255, 136, 0.1)",
  red: "#ff4757",
  redGlow: "rgba(255, 71, 87, 0.4)",
  text: "#e6edf3",
  textMuted: "#7d8590",
};

// ═══════════════════════════════════════════════════════════════════════════════
// BILINGUAL CONTENT SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════
const CONTENT = {
  en: {
    header: {
      online: "ONLINE",
      ready: "READY"
    },
    intro: {
      initializing: "INITIALIZING SYSTEMS",
      loadingSteps: [
        "Scanning neural pathways...",
        "Loading behavior matrices...",
        "Calibrating response vectors...",
        "Establishing WhatsApp protocols...",
        "System online."
      ],
      headline: "THE INFRASTRUCTURE BEHIND",
      subheadline: "BUSINESSES THAT NEVER SLEEP"
    },
    select: {
      subtitle: "AI INFRASTRUCTURE GENERATOR",
      title: "What industry do you operate in?",
      description: "We'll generate a custom AI infrastructure blueprint",
      stats: {
        response: "<30s response",
        revenue: "$2-8K recovered",
        bookings: "+40% bookings"
      }
    },
    verticals: [
      { id: "hospitality", label: "Hotels & Hospitality", icon: "🏨" },
      { id: "restaurant", label: "Restaurants & Nightlife", icon: "🍽️" },
      { id: "tours", label: "Tours & Experiences", icon: "🚤" },
      { id: "services", label: "Professional Services", icon: "💼" }
    ],
    generation: {
      generating: "GENERATING BLUEPRINT FOR",
      label: "SYSTEM INITIALIZATION",
      logs: [
        "◈ Initializing neural pathways...",
        "◈ Scanning industry patterns...",
        "◈ Loading behavior matrices...",
        "◈ Calibrating response algorithms...",
        "◈ Mapping customer journey touchpoints...",
        "◈ Activating WhatsApp Business API...",
        "◈ Deploying conversational AI layer...",
        "◈ Integrating sentiment analysis...",
        "◈ Configuring multi-language support...",
        "◈ Establishing revenue tracking nodes...",
        "◈ Optimizing conversion pathways...",
        "◈ Running simulation diagnostics...",
        "◈ Validating response protocols...",
        "✦ SYSTEM ARCHITECTURE COMPLETE ✦"
      ]
    },
    blueprint: {
      badge: "✦ BLUEPRINT GENERATED ✦",
      suffix: "AI Infrastructure",
      caseStudy: "CASE STUDY",
      hook: "This is what runs 24/7 while you sleep",
      teaser: "Ready to stop leaving money on the table?",
      earlyAccess: "Lock in Your Build →"
    },
    capabilities: {
      hospitality: [
        { title: "REVENUE RECOVERY", items: ["24/7 Booking Response", "Abandoned Inquiry Recovery", "Upsell Automation", "Multi-language Support"] },
        { title: "OPERATIONS", items: ["Reservation Management", "Guest Communication", "Review Generation", "Staff Coordination"] },
        { title: "INTELLIGENCE", items: ["Demand Forecasting", "Competitor Monitoring", "Sentiment Analysis", "Revenue Optimization"] }
      ],
      restaurant: [
        { title: "BOOKING SYSTEM", items: ["WhatsApp Reservations", "Wait List Management", "VIP Recognition", "Event Coordination"] },
        { title: "GUEST EXPERIENCE", items: ["Menu Inquiries", "Dietary Accommodations", "Special Requests", "Loyalty Programs"] },
        { title: "OPERATIONS", items: ["Table Optimization", "No-Show Prevention", "Review Response", "Staff Alerts"] }
      ],
      tours: [
        { title: "LEAD CAPTURE", items: ["Instant Availability", "Custom Itineraries", "Group Coordination", "Payment Links"] },
        { title: "EXPERIENCE", items: ["Pre-trip Communication", "Weather Updates", "Safety Protocols", "Photo Sharing"] },
        { title: "GROWTH", items: ["Review Collection", "Referral Programs", "Seasonal Campaigns", "Partner Integration"] }
      ],
      services: [
        { title: "ACQUISITION", items: ["Lead Qualification", "Appointment Scheduling", "Proposal Delivery", "Follow-up Sequences"] },
        { title: "DELIVERY", items: ["Project Updates", "Document Sharing", "Billing Reminders", "Satisfaction Surveys"] },
        { title: "RETENTION", items: ["Anniversary Outreach", "Cross-sell Triggers", "Testimonial Requests", "Referral Incentives"] }
      ]
    },
    caseStudies: {
      hospitality: { title: "Boutique Hotel, Cartagena", metric: "$4,200", metricSuffix: "/month recovered", quote: "We went from missing 60% of after-hours inquiries to capturing them all. The system paid for itself in week 2." },
      restaurant: { title: "Fine Dining Restaurant", metric: "60%", metricSuffix: " fewer no-shows", quote: "Our no-show rate dropped from 25% to under 10%. That's thousands in recovered revenue every month." },
      tours: { title: "Boat Tour Operator", metric: "35%", metricSuffix: " more bookings", quote: "Response time went from 6 hours to 30 seconds. Travelers were booking competitors before we even saw the message." },
      services: { title: "Law Firm", metric: "50%", metricSuffix: " more consultations", quote: "We recovered 10 hours a week from intake. Now we focus on billable work while AI handles qualification." }
    },
    final: {
      title: "Your Infrastructure is Ready",
      subtitle: "This runs 24/7 while you sleep. Zero missed inquiries. Zero lost revenue.",
      cta: "Schedule Your Build →",
      ctaAlt: "← Explore Another",
      footer: "15-min call • No commitment • See what we'll build"
    },
    sofia: {
      greeting: "Hey! 👋 I'm Sofia, MachineMind's AI assistant.\n\nI can tell you about our AI automation solutions, show you real results we've achieved, or help you figure out if we're a good fit for your business.\n\nWhat brings you here today?",
      thinking: "Thinking...",
      placeholder: "Ask Sofia anything...",
      booking: "📅 Book Strategy Call →"
    },
    trust: {
      spots: "Only {n} strategy spots remaining this month",
      viewing: "{n} people viewing this blueprint",
      clients: "Trusted by 20+ Colombian businesses",
      guarantee: "30-day money-back guarantee",
      noRisk: "No contracts • Cancel anytime"
    },
    progress: {
      phases: ["Vision", "Problem", "Solution", "Systems", "Features", "Results", "Impact", "Action"]
    },
    floating: {
      ready: "Ready to transform?",
      cta: "Book Free Call →"
    },
    skip: {
      button: "Skip to Results →",
      missed: "You skipped ahead. Want to see what you missed?",
      goBack: "← See Full Blueprint"
    },
    footer: {
      tagline: "AI Infrastructure for Businesses That Never Sleep",
      contact: {
        title: "Get Started",
        whatsapp: "WhatsApp Us",
        whatsappMessage: "Hi! I'm interested in MachineMind's AI automation for my business.",
        email: "Email Us",
        schedule: "Schedule a Call"
      },
      company: {
        title: "Company",
        about: "About MachineMind",
        results: "Client Results",
        instagram: "Instagram"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      trust: {
        clients: "20+ businesses automated",
        guarantee: "30-day money-back guarantee",
        noContracts: "No long-term contracts"
      },
      copyright: "© 2025 MachineMind. All rights reserved.",
      location: "Cartagena, Colombia 🇨🇴"
    },
    whatsappCta: {
      text: "💬 Chat on WhatsApp",
      tooltip: "Get instant answers"
    }
  },
  es: {
    header: {
      online: "EN LÍNEA",
      ready: "LISTO"
    },
    intro: {
      initializing: "INICIALIZANDO SISTEMAS",
      loadingSteps: [
        "Escaneando redes neuronales...",
        "Cargando matrices de comportamiento...",
        "Calibrando vectores de respuesta...",
        "Estableciendo protocolos WhatsApp...",
        "Sistema en línea."
      ],
      headline: "LA INFRAESTRUCTURA DETRÁS DE",
      subheadline: "NEGOCIOS QUE NUNCA DUERMEN"
    },
    select: {
      subtitle: "GENERADOR DE INFRAESTRUCTURA IA",
      title: "¿En qué industria operas?",
      description: "Generaremos un plano de infraestructura IA personalizado",
      stats: {
        response: "<30s respuesta",
        revenue: "$2-8K recuperados",
        bookings: "+40% reservas"
      }
    },
    verticals: [
      { id: "hospitality", label: "Hoteles y Hospitalidad", icon: "🏨" },
      { id: "restaurant", label: "Restaurantes y Vida Nocturna", icon: "🍽️" },
      { id: "tours", label: "Tours y Experiencias", icon: "🚤" },
      { id: "services", label: "Servicios Profesionales", icon: "💼" }
    ],
    generation: {
      generating: "GENERANDO PLANO PARA",
      label: "INICIALIZACIÓN DEL SISTEMA",
      logs: [
        "◈ Inicializando redes neuronales...",
        "◈ Escaneando patrones de industria...",
        "◈ Cargando matrices de comportamiento...",
        "◈ Calibrando algoritmos de respuesta...",
        "◈ Mapeando puntos de contacto del cliente...",
        "◈ Activando WhatsApp Business API...",
        "◈ Desplegando capa de IA conversacional...",
        "◈ Integrando análisis de sentimiento...",
        "◈ Configurando soporte multi-idioma...",
        "◈ Estableciendo nodos de seguimiento...",
        "◈ Optimizando caminos de conversión...",
        "◈ Ejecutando diagnósticos de simulación...",
        "◈ Validando protocolos de respuesta...",
        "✦ ARQUITECTURA DEL SISTEMA COMPLETA ✦"
      ]
    },
    blueprint: {
      badge: "✦ PLANO GENERADO ✦",
      suffix: "Infraestructura IA",
      caseStudy: "CASO DE ESTUDIO",
      hook: "Esto funciona 24/7 mientras duermes",
      teaser: "¿Listo para dejar de perder dinero?",
      earlyAccess: "Asegura Tu Sistema →"
    },
    capabilities: {
      hospitality: [
        { title: "RECUPERACIÓN DE INGRESOS", items: ["Respuesta 24/7 a Reservas", "Recuperación de Consultas", "Automatización de Ventas", "Soporte Multi-idioma"] },
        { title: "OPERACIONES", items: ["Gestión de Reservas", "Comunicación con Huéspedes", "Generación de Reseñas", "Coordinación de Personal"] },
        { title: "INTELIGENCIA", items: ["Pronóstico de Demanda", "Monitoreo de Competencia", "Análisis de Sentimiento", "Optimización de Ingresos"] }
      ],
      restaurant: [
        { title: "SISTEMA DE RESERVAS", items: ["Reservas por WhatsApp", "Gestión de Lista de Espera", "Reconocimiento VIP", "Coordinación de Eventos"] },
        { title: "EXPERIENCIA DEL CLIENTE", items: ["Consultas de Menú", "Necesidades Dietéticas", "Solicitudes Especiales", "Programas de Lealtad"] },
        { title: "OPERACIONES", items: ["Optimización de Mesas", "Prevención de No-Shows", "Respuesta a Reseñas", "Alertas al Personal"] }
      ],
      tours: [
        { title: "CAPTURA DE LEADS", items: ["Disponibilidad Instantánea", "Itinerarios Personalizados", "Coordinación Grupal", "Links de Pago"] },
        { title: "EXPERIENCIA", items: ["Comunicación Pre-viaje", "Actualizaciones del Clima", "Protocolos de Seguridad", "Compartir Fotos"] },
        { title: "CRECIMIENTO", items: ["Recolección de Reseñas", "Programas de Referidos", "Campañas de Temporada", "Integración con Socios"] }
      ],
      services: [
        { title: "ADQUISICIÓN", items: ["Calificación de Leads", "Agendamiento de Citas", "Entrega de Propuestas", "Secuencias de Seguimiento"] },
        { title: "ENTREGA", items: ["Actualizaciones de Proyecto", "Compartir Documentos", "Recordatorios de Facturación", "Encuestas de Satisfacción"] },
        { title: "RETENCIÓN", items: ["Contacto de Aniversario", "Triggers de Cross-sell", "Solicitud de Testimonios", "Incentivos de Referidos"] }
      ]
    },
    caseStudies: {
      hospitality: { title: "Hotel Boutique, Cartagena", metric: "$4,200", metricSuffix: "/mes recuperados", quote: "Pasamos de perder 60% de consultas fuera de horario a capturarlas todas. El sistema se pagó solo en la semana 2." },
      restaurant: { title: "Restaurante de Alta Cocina", metric: "60%", metricSuffix: " menos no-shows", quote: "Nuestra tasa de no-shows bajó del 25% a menos del 10%. Eso son miles en ingresos recuperados cada mes." },
      tours: { title: "Operador de Tours en Bote", metric: "35%", metricSuffix: " más reservas", quote: "El tiempo de respuesta pasó de 6 horas a 30 segundos. Los viajeros estaban reservando con competidores antes de que viéramos el mensaje." },
      services: { title: "Firma de Abogados", metric: "50%", metricSuffix: " más consultas", quote: "Recuperamos 10 horas por semana del intake. Ahora nos enfocamos en trabajo facturable mientras la IA maneja la calificación." }
    },
    final: {
      title: "Tu Infraestructura Está Lista",
      subtitle: "Esto funciona 24/7 mientras duermes. Cero consultas perdidas. Cero ingresos perdidos.",
      cta: "Agenda Tu Construcción →",
      ctaAlt: "← Explorar Otro",
      footer: "Llamada de 15 min • Sin compromiso • Ve lo que construiremos"
    },
    sofia: {
      greeting: "¡Hola! 👋 Soy Sofia, la asistente de IA de MachineMind.\n\nPuedo contarte sobre nuestras soluciones de automatización con IA, mostrarte resultados reales que hemos logrado, o ayudarte a ver si somos un buen fit para tu negocio.\n\n¿Qué te trae por aquí hoy?",
      thinking: "Pensando...",
      placeholder: "Pregúntale algo a Sofia...",
      booking: "📅 Agendar Llamada de Estrategia →"
    },
    trust: {
      spots: "Solo {n} espacios de estrategia restantes este mes",
      viewing: "{n} personas viendo este plano",
      clients: "Confiado por 20+ negocios colombianos",
      guarantee: "Garantía de devolución de 30 días",
      noRisk: "Sin contratos • Cancela cuando quieras"
    },
    progress: {
      phases: ["Visión", "Problema", "Solución", "Sistemas", "Funciones", "Resultados", "Impacto", "Acción"]
    },
    floating: {
      ready: "¿Listo para transformar?",
      cta: "Agendar Llamada Gratis →"
    },
    skip: {
      button: "Saltar a Resultados →",
      missed: "Saltaste adelante. ¿Quieres ver lo que te perdiste?",
      goBack: "← Ver Plano Completo"
    },
    footer: {
      tagline: "Infraestructura IA para Negocios que Nunca Duermen",
      contact: {
        title: "Comienza Ahora",
        whatsapp: "Escríbenos por WhatsApp",
        whatsappMessage: "¡Hola! Estoy interesado en la automatización con IA de MachineMind para mi negocio.",
        email: "Envíanos un Email",
        schedule: "Agenda una Llamada"
      },
      company: {
        title: "Empresa",
        about: "Sobre MachineMind",
        results: "Resultados de Clientes",
        instagram: "Instagram"
      },
      legal: {
        title: "Legal",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      },
      trust: {
        clients: "20+ negocios automatizados",
        guarantee: "Garantía de devolución de 30 días",
        noContracts: "Sin contratos a largo plazo"
      },
      copyright: "© 2025 MachineMind. Todos los derechos reservados.",
      location: "Cartagena, Colombia 🇨🇴"
    },
    whatsappCta: {
      text: "💬 Chatea por WhatsApp",
      tooltip: "Respuestas instantáneas"
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// SOFIA KNOWLEDGE BASE
// ═══════════════════════════════════════════════════════════════════════════════
const SOFIA_KNOWLEDGE = {
  company: {
    name: "MachineMind",
    tagline: "AI Infrastructure for Hospitality",
    mission: "We install revenue recovery infrastructure. The chatbot is just the visible part — behind it is complete business logic, escalation protocols, analytics, integrations, and continuous optimization.",
  },
  stats: {
    responseTime: "Under 30 seconds, 24/7",
    revenueRecovered: "$2,000 - $8,000+ monthly",
    conversionRate: "40-60% increase in direct bookings",
    nps: "94+"
  },
  pricing: {
    setup: "$1,500 one-time",
    monthly: "$147 - $497/month depending on complexity",
    roi: "Most clients see 10-20x ROI",
    guarantee: "If it doesn't recover at least 3x the monthly fee in the first 90 days, we refund everything.",
    noContract: "Month-to-month. Cancel anytime."
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// GLITCH TEXT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
function GlitchText({ text, duration = 2500, active = true }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = Math.floor(duration / 50);
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealed = Math.floor(progress * text.length);
      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed) {
          result += text[i];
        } else if (text[i] === " ") {
          result += " ";
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(result);
      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(text);
        setDone(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [active, text, duration]);
  
  return (
    <span style={{ 
      color: done ? COLORS.cyan : COLORS.text,
      textShadow: done ? `0 0 30px ${COLORS.cyanGlow}` : "none",
      transition: "all 0.5s ease"
    }}>
      {display || text}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLOW TYPEWRITER COMPONENT - For dramatic reveals
// ═══════════════════════════════════════════════════════════════════════════════
function SlowTypewriter({ text, speed = 80, delay = 0, onComplete }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  
  // Keep ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!started || done) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
      // Use ref to avoid dependency issues
      if (onCompleteRef.current) onCompleteRef.current();
    }
  }, [started, displayed, text, speed, done]);
  
  return (
    <span>
      {displayed}
      {!done && <span style={{ 
        animation: "pulse 530ms infinite",
        color: COLORS.cyan,
        marginLeft: "2px"
      }}>|</span>}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FAST TYPEWRITER - For regular content
// ═══════════════════════════════════════════════════════════════════════════════
function Typewriter({ text, speed = 35, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [started, displayed, text, speed]);
  
  return <span>{displayed}</span>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// COUNT UP ANIMATION
// ═══════════════════════════════════════════════════════════════════════════════
function CountUp({ end, duration = 2000, prefix = "", suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (!started || !end) return;
    const startTime = Date.now();
    const endStr = typeof end === 'string' ? end : String(end);
    const endValue = parseFloat(endStr.replace(/[^0-9.]/g, "")) || 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(endValue * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [started, end, duration]);
  
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PARTICLE FIELD - Interactive background
// ═══════════════════════════════════════════════════════════════════════════════
function ParticleField({ intensity = 1 }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationRef = useRef();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    
    // Initialize particles
    const particleCount = Math.floor(120 * intensity);
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.85 ? COLORS.gold : COLORS.cyan,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
    
    const handleMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);
    
    const animate = () => {
      ctx.fillStyle = COLORS.void;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Radial gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      gradient.addColorStop(0, "rgba(0, 212, 255, 0.03)");
      gradient.addColorStop(0.5, "rgba(240, 200, 80, 0.01)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((p, i) => {
        // Mouse attraction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const force = (250 - dist) / 250 * 0.02;
          p.vx += dx * force * 0.01;
          p.vy += dy * force * 0.01;
        }
        
        // Apply velocity with damping
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Pulsing alpha
        const pulse = Math.sin(Date.now() * 0.002 + i) * 0.2 + 0.8;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `, ${p.alpha * pulse})`).replace("rgb", "rgba");
        ctx.fill();
        
        // Connection lines
        particles.current.slice(i + 1).forEach((p2) => {
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - d / 100) * 0.15})`;
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [intensity]);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CINEMATIC INTRO - Extended 20+ second experience with failsafe
// ═══════════════════════════════════════════════════════════════════════════════
function CinematicIntro({ onComplete, lang }) {
  const [stage, setStage] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [headlineComplete, setHeadlineComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const hasCompletedRef = useRef(false);
  const T = CONTENT[lang].intro;
  
  // Keep onComplete ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  // FAILSAFE: Force completion after 25 seconds no matter what
  useEffect(() => {
    const failsafe = setTimeout(() => {
      if (!hasCompletedRef.current) {
        console.log("Failsafe triggered - forcing intro completion");
        hasCompletedRef.current = true;
        if (onCompleteRef.current) onCompleteRef.current();
      }
    }, 25000);
    return () => clearTimeout(failsafe);
  }, []);
  
  // Stage timing:
  // 0: Pulsing icon + rings (0-3s)
  // 1: Glitch text "INITIALIZING SYSTEMS" (3-6s)
  // 2: Loading bar + steps (6-11s)
  // 3: Main headline typewriter (11-17s) - "THE INFRASTRUCTURE BEHIND"
  // 4: Subheadline typewriter (17-23s) - "BUSINESSES THAT NEVER SLEEP"
  // 5: Fade out (23-24s)
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 3000),  // Start glitch text
      setTimeout(() => setStage(2), 6000),  // Start loading bar
      setTimeout(() => setStage(3), 11000), // Start main headline
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  
  // Loading bar progress
  useEffect(() => {
    if (stage !== 2) return;
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [stage]);
  
  // Loading steps
  useEffect(() => {
    if (stage !== 2) return;
    const steps = T.loadingSteps;
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLoadingStep(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [stage, T.loadingSteps]);
  
  // When headline completes, show subheadline
  const handleHeadlineComplete = useCallback(() => {
    setHeadlineComplete(true);
    setStage(4);
  }, []);
  
  // When subheadline completes, start fade out
  const handleSubheadlineComplete = useCallback(() => {
    if (hasCompletedRef.current) return; // Prevent double-fire
    setTimeout(() => setStage(5), 1500);
    setTimeout(() => {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        if (onCompleteRef.current) onCompleteRef.current();
      }
    }, 2500);
  }, []);
  
  // Skip intro handler
  const handleSkip = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setStage(5);
    setTimeout(() => {
      if (onCompleteRef.current) onCompleteRef.current();
    }, 500);
  }, []);
  
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: COLORS.void,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      opacity: stage === 5 ? 0 : 1,
      transition: "opacity 1s ease"
    }}>
      {/* Pulsing rings - always visible until fade */}
      {stage < 3 && (
        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* Expanding rings */}
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: `2px solid ${i % 2 === 0 ? COLORS.cyan : COLORS.gold}`,
              opacity: 0.4,
              animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${i * 0.5}s`
            }} />
          ))}
          {/* Center icon with gradient border */}
          <div style={{
            width: "100px",
            height: "100px",
            borderRadius: "20px",
            background: `linear-gradient(135deg, ${COLORS.bg}, ${COLORS.bgCard})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            position: "relative",
            animation: "float 3s ease-in-out infinite",
            boxShadow: `0 0 60px ${COLORS.cyanGlow}, inset 0 0 30px ${COLORS.cyanDim}`
          }}>
            {/* Rotating gradient border */}
            <div style={{
              position: "absolute",
              inset: "-3px",
              borderRadius: "22px",
              background: `linear-gradient(45deg, ${COLORS.cyan}, ${COLORS.gold}, ${COLORS.cyan})`,
              backgroundSize: "200% 200%",
              animation: "spin 4s linear infinite",
              zIndex: -1
            }} />
            <div style={{
              position: "absolute",
              inset: "1px",
              borderRadius: "19px",
              background: COLORS.bg
            }} />
            <span style={{ position: "relative", zIndex: 1 }}>⚡</span>
          </div>
        </div>
      )}
      
      {/* Stage 1: Glitch Text */}
      {stage >= 1 && stage < 3 && (
        <div style={{
          fontSize: "clamp(14px, 3vw, 18px)",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "8px",
          marginBottom: "40px",
          opacity: stage === 1 ? 1 : 0.5,
          transition: "opacity 0.5s"
        }}>
          <GlitchText text={T.initializing} duration={2500} active={stage >= 1} />
        </div>
      )}
      
      {/* Stage 2: Loading Bar */}
      {stage >= 2 && stage < 3 && (
        <div style={{ width: "min(400px, 80vw)", marginTop: "20px" }}>
          {/* Progress bar */}
          <div style={{
            height: "4px",
            background: COLORS.bgCard,
            borderRadius: "2px",
            overflow: "hidden",
            marginBottom: "24px"
          }}>
            <div style={{
              width: `${loadingProgress}%`,
              height: "100%",
              background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold})`,
              borderRadius: "2px",
              transition: "width 0.1s linear",
              boxShadow: `0 0 20px ${COLORS.cyanGlow}`,
              position: "relative"
            }}>
              {/* Shimmer effect */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                animation: "shimmer 1.5s infinite"
              }} />
            </div>
          </div>
          
          {/* Loading steps */}
          <div style={{
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            color: COLORS.textMuted,
            textAlign: "center",
            minHeight: "20px"
          }}>
            <span style={{ color: COLORS.gold }}>▸</span> {T.loadingSteps[loadingStep]}
          </div>
        </div>
      )}
      
      {/* Stage 3 & 4: Headlines */}
      {stage >= 3 && (
        <div style={{
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 24px"
        }}>
          {/* Main headline */}
          <h1 style={{
            fontSize: "clamp(28px, 6vw, 56px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "16px",
            color: COLORS.text
          }}>
            <SlowTypewriter 
              text={T.headline} 
              speed={70} 
              delay={0}
              onComplete={handleHeadlineComplete}
            />
          </h1>
          
          {/* Subheadline - only appears after headline complete */}
          {stage >= 4 && (
            <h2 style={{
              fontSize: "clamp(28px, 6vw, 56px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              <SlowTypewriter 
                text={T.subheadline} 
                speed={80} 
                delay={500}
                onComplete={handleSubheadlineComplete}
              />
            </h2>
          )}
        </div>
      )}
      
      {/* Skip button - appears after 5 seconds */}
      {stage >= 2 && stage < 5 && (
        <button
          onClick={handleSkip}
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            padding: "10px 20px",
            background: "transparent",
            border: `1px solid ${COLORS.border}`,
            borderRadius: "6px",
            color: COLORS.textMuted,
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            cursor: "pointer",
            transition: "all 0.2s ease",
            opacity: 0.6
          }}
          onMouseEnter={e => {
            e.target.style.opacity = "1";
            e.target.style.borderColor = COLORS.cyan;
            e.target.style.color = COLORS.cyan;
          }}
          onMouseLeave={e => {
            e.target.style.opacity = "0.6";
            e.target.style.borderColor = COLORS.border;
            e.target.style.color = COLORS.textMuted;
          }}
        >
          SKIP →
        </button>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// GLOWING PROGRESS BAR
// ═══════════════════════════════════════════════════════════════════════════════
function GlowingProgress({ progress, label }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        marginBottom: "12px",
        fontSize: "11px",
        fontFamily: "'JetBrains Mono', monospace"
      }}>
        <span style={{ color: COLORS.textMuted }}>{label}</span>
        <span style={{ color: COLORS.cyan }}>{Math.round(progress)}%</span>
      </div>
      <div style={{ 
        height: "6px", 
        background: COLORS.bgCard, 
        borderRadius: "3px", 
        overflow: "hidden" 
      }}>
        <div style={{ 
          width: `${progress}%`, 
          height: "100%", 
          background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold})`,
          borderRadius: "3px",
          transition: "width 0.3s ease",
          boxShadow: `0 0 20px ${COLORS.cyanGlow}`,
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            animation: "shimmer 1.5s infinite"
          }} />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CINEMATIC CAPABILITY CARD - Dramatic reveal with scanning effect
// ═══════════════════════════════════════════════════════════════════════════════
function CinematicCapabilityCard({ title, items = [], delay = 0, active, moduleNumber = 1 }) {
  const [phase, setPhase] = useState("hidden"); // hidden, scanning, building, online
  const [itemsVisible, setItemsVisible] = useState([]);
  const [scanLine, setScanLine] = useState(0);
  
  useEffect(() => {
    if (!active) return;
    
    // Phase 1: Start scanning after delay
    const scanTimer = setTimeout(() => setPhase("scanning"), delay);
    
    // Phase 2: Building (scanning complete)
    const buildTimer = setTimeout(() => setPhase("building"), delay + 1500);
    
    // Phase 3: Online
    const onlineTimer = setTimeout(() => setPhase("online"), delay + 2500);
    
    return () => {
      clearTimeout(scanTimer);
      clearTimeout(buildTimer);
      clearTimeout(onlineTimer);
    };
  }, [active, delay]);
  
  // Scanning animation
  useEffect(() => {
    if (phase === "scanning") {
      const interval = setInterval(() => {
        setScanLine(prev => (prev + 5) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [phase]);
  
  // Stagger items appearance after online
  useEffect(() => {
    if (phase === "online" && items && items.length > 0) {
      items.forEach((_, i) => {
        setTimeout(() => {
          setItemsVisible(prev => [...prev, i]);
        }, i * 400 + 300);
      });
    }
  }, [phase, items]);
  
  if (!items || items.length === 0) return null;
  
  const isVisible = phase !== "hidden";
  const isOnline = phase === "online";
  
  return (
    <div style={{
      position: "relative",
      background: `linear-gradient(135deg, ${COLORS.bgCard}, ${COLORS.bgCardHover})`,
      border: `1px solid ${isOnline ? COLORS.cyan : COLORS.border}`,
      borderRadius: "16px",
      padding: "28px",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
      transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
      boxShadow: isOnline ? `0 0 40px ${COLORS.cyanGlow}, inset 0 0 60px rgba(0, 212, 255, 0.05)` : "none",
      overflow: "hidden"
    }}>
      {/* Scanning Line Effect */}
      {phase === "scanning" && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, transparent)`,
          transform: `translateY(${scanLine * 2}px)`,
          boxShadow: `0 0 20px ${COLORS.cyan}`,
          opacity: 0.8
        }} />
      )}
      
      {/* Module Status Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <div style={{
          fontSize: "10px",
          color: COLORS.textMuted,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "1px"
        }}>
          MODULE {moduleNumber.toString().padStart(2, "0")}
        </div>
        <div style={{
          fontSize: "10px",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "1px",
          padding: "4px 12px",
          borderRadius: "12px",
          background: isOnline ? "rgba(0, 212, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
          color: isOnline ? COLORS.cyan : COLORS.textMuted,
          border: `1px solid ${isOnline ? COLORS.cyan : "transparent"}`,
          transition: "all 0.5s ease"
        }}>
          {phase === "hidden" && "STANDBY"}
          {phase === "scanning" && "SCANNING..."}
          {phase === "building" && "BUILDING..."}
          {phase === "online" && "● ONLINE"}
        </div>
      </div>
      
      {/* Title */}
      <h3 style={{ 
        fontSize: "13px", 
        color: isOnline ? COLORS.gold : COLORS.cyan, 
        marginBottom: "24px",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "2px",
        textShadow: isOnline ? `0 0 20px ${COLORS.goldGlow}` : "none",
        transition: "all 0.5s ease"
      }}>
        {title}
      </h3>
      
      {/* Capability Items */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "14px", 
            marginBottom: i < items.length - 1 ? "16px" : 0,
            fontSize: "14px",
            color: COLORS.text,
            fontFamily: "'Inter', sans-serif",
            opacity: itemsVisible.includes(i) ? 1 : 0.3,
            transform: itemsVisible.includes(i) ? "translateX(0)" : "translateX(-15px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <span style={{ 
              color: itemsVisible.includes(i) ? COLORS.cyan : COLORS.textMuted, 
              fontSize: "16px",
              transition: "color 0.3s ease"
            }}>
              {itemsVisible.includes(i) ? "✓" : "○"}
            </span>
            {item}
          </li>
        ))}
      </ul>
      
      {/* Bottom glow when online */}
      {isOnline && (
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, transparent)`,
          boxShadow: `0 0 20px ${COLORS.cyan}`
        }} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CASE STUDY COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
function CaseStudy({ data, lang }) {
  const T = CONTENT[lang].blueprint;
  
  // Safety check - don't render if data is missing
  if (!data || !data.metric) return null;
  
  // Safe check for dollar sign
  const hasDollar = typeof data.metric === 'string' && data.metric.includes("$");
  
  return (
    <div style={{ 
      marginTop: "40px", 
      padding: "32px", 
      background: `linear-gradient(135deg, ${COLORS.goldDim}, ${COLORS.cyanDim})`,
      borderRadius: "16px",
      border: `1px solid ${COLORS.border}`,
      opacity: 0,
      animation: "fadeSlideIn 0.8s 9s forwards"
    }}>
      <div style={{ 
        fontSize: "11px", 
        color: COLORS.gold, 
        marginBottom: "8px",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "2px"
      }}>
        {T?.caseStudy || "CASE STUDY"}
      </div>
      <div style={{ 
        fontFamily: "'Space Grotesk', sans-serif", 
        fontSize: "20px", 
        fontWeight: 600, 
        marginBottom: "12px" 
      }}>
        {data.title}
      </div>
      <div style={{ 
        fontSize: "42px", 
        fontWeight: 700, 
        color: COLORS.cyan, 
        marginBottom: "4px",
        fontFamily: "'Space Grotesk', sans-serif"
      }}>
        <CountUp end={data.metric} prefix={hasDollar ? "$" : ""} delay={9500} />
        <span style={{ fontSize: "20px", color: COLORS.textMuted }}>{data.metricSuffix}</span>
      </div>
      <p style={{ 
        color: COLORS.textMuted, 
        fontStyle: "italic", 
        lineHeight: 1.7,
        fontFamily: "'Inter', sans-serif",
        marginTop: "16px"
      }}>
        "{data.quote}"
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PREMIUM COMPONENTS - RESULTS DASHBOARD, BEFORE/AFTER, TRUST BADGES
// These create the psychological "wow" factor and social proof
// ═══════════════════════════════════════════════════════════════════════════════

function ResultsDashboard({ lang }) {
  const metrics = [
    { value: 4200, prefix: "$", suffix: "+", label: lang === "es" ? "Ingresos Recuperados" : "Revenue Recovered", subtext: lang === "es" ? "Promedio mensual" : "Monthly average" },
    { value: 30, prefix: "<", suffix: "s", label: lang === "es" ? "Tiempo de Respuesta" : "Response Time", subtext: lang === "es" ? "vs 4+ horas promedio" : "vs 4+ hours industry avg" },
    { value: 85, prefix: "", suffix: "%", label: lang === "es" ? "Tasa de Conversión" : "Conversion Rate", subtext: lang === "es" ? "Consulta a reserva" : "Inquiry to booking" },
    { value: 24, prefix: "", suffix: "/7", label: lang === "es" ? "Siempre Online" : "Always Online", subtext: lang === "es" ? "Nunca pierdas un lead" : "Never miss a lead" }
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(metrics.map(m => Math.floor(m.value * eased)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [started]);

  return (
    <div style={{ marginTop: "60px", marginBottom: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: COLORS.gold, marginBottom: "12px" }}>
          {lang === "es" ? "MÉTRICAS EN VIVO" : "LIVE PERFORMANCE METRICS"}
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: 700, color: COLORS.text }}>
          {lang === "es" ? "Resultados Que Hablan Solos" : "Results That Speak For Themselves"}
        </h3>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
        {metrics.map((m, i) => (
          <div key={m.label} style={{
            background: `linear-gradient(135deg, ${COLORS.bgCard}, rgba(0,212,255,0.05))`,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            opacity: 0,
            animation: `fadeSlideIn 0.6s ${i * 150}ms forwards`
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold})` }} />
            <div style={{ fontSize: "36px", fontWeight: 700, color: COLORS.cyan, marginBottom: "8px", textShadow: `0 0 30px ${COLORS.cyanGlow}` }}>
              {m.prefix}{counts[i].toLocaleString()}{m.suffix}
            </div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.text, marginBottom: "4px" }}>{m.label}</div>
            <div style={{ fontSize: "11px", color: COLORS.textMuted }}>{m.subtext}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforeAfterComparison({ lang }) {
  const comparisons = [
    { before: lang === "es" ? "4+ horas de respuesta" : "4+ hours response time", after: lang === "es" ? "<30 segundos" : "<30 seconds response", icon: "⚡" },
    { before: lang === "es" ? "60% consultas perdidas" : "60% inquiries missed after-hours", after: lang === "es" ? "0% perdidas - 24/7" : "0% missed - 24/7 coverage", icon: "🌙" },
    { before: lang === "es" ? "Gestión manual" : "Manual booking management", after: lang === "es" ? "IA automatizada" : "Automated AI handling", icon: "🤖" },
    { before: lang === "es" ? "Ingresos perdidos" : "Lost revenue to competitors", after: lang === "es" ? "$2K-$8K+ recuperados" : "$2K-$8K+ monthly recovered", icon: "💰" },
    { before: lang === "es" ? "Barreras de idioma" : "Language barriers", after: lang === "es" ? "5+ idiomas fluidos" : "5+ languages fluently", icon: "🌍" },
    { before: lang === "es" ? "Seguimiento inconsistente" : "Inconsistent follow-up", after: lang === "es" ? "100% seguimiento" : "100% follow-up rate", icon: "✓" }
  ];

  return (
    <div style={{ marginTop: "50px", marginBottom: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: COLORS.gold, marginBottom: "12px" }}>
          {lang === "es" ? "LA TRANSFORMACIÓN" : "THE TRANSFORMATION"}
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: 700, color: COLORS.text }}>
          {lang === "es" ? "Antes y Después de MachineMind" : "Before & After MachineMind"}
        </h3>
      </div>
      <div style={{ display: "grid", gap: "12px", maxWidth: "700px", margin: "0 auto" }}>
        {comparisons.map((c, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "16px",
            alignItems: "center",
            padding: "16px 20px",
            background: COLORS.bgCard,
            borderRadius: "12px",
            border: `1px solid ${COLORS.border}`,
            opacity: 0,
            animation: `fadeSlideIn 0.5s ${i * 80}ms forwards`
          }}>
            <div style={{ textAlign: "right", color: "rgba(255,100,100,0.8)", fontSize: "13px", textDecoration: "line-through", opacity: 0.7 }}>{c.before}</div>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: `0 0 20px ${COLORS.cyanGlow}` }}>{c.icon}</div>
            <div style={{ textAlign: "left", color: COLORS.cyan, fontSize: "13px", fontWeight: 600 }}>{c.after}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustBadges({ lang }) {
  const badges = [
    { icon: "🔒", label: lang === "es" ? "Seguridad Enterprise" : "Enterprise Security", desc: lang === "es" ? "Encriptación bancaria" : "Bank-level encryption" },
    { icon: "⚡", label: lang === "es" ? "99.9% Uptime" : "99.9% Uptime", desc: lang === "es" ? "Siempre disponible" : "Always available" },
    { icon: "✅", label: lang === "es" ? "WhatsApp Certificado" : "WhatsApp Certified", desc: lang === "es" ? "API oficial" : "Official API partner" },
    { icon: "🛡️", label: lang === "es" ? "GDPR Compliant" : "GDPR Compliant", desc: lang === "es" ? "Protección de datos" : "Data protection" },
    { icon: "🏆", label: lang === "es" ? "NPS 94+" : "94+ NPS Score", desc: lang === "es" ? "Satisfacción cliente" : "Client satisfaction" },
    { icon: "💳", label: lang === "es" ? "ROI Garantizado" : "ROI Guaranteed", desc: lang === "es" ? "O trabajamos gratis" : "Or we work free" }
  ];

  return (
    <div style={{ marginTop: "40px", padding: "28px", background: "rgba(0,0,0,0.3)", borderRadius: "16px", border: `1px solid ${COLORS.border}` }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "3px", color: COLORS.gold }}>
          {lang === "es" ? "CONFIANZA Y CERTIFICACIONES" : "TRUSTED & CERTIFIED"}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "12px" }}>
        {badges.map((b, i) => (
          <div key={b.label} style={{
            textAlign: "center",
            padding: "14px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            opacity: 0,
            animation: `fadeSlideIn 0.4s ${i * 60}ms forwards`
          }}>
            <div style={{ fontSize: "24px", marginBottom: "6px" }}>{b.icon}</div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: COLORS.text, marginBottom: "2px" }}>{b.label}</div>
            <div style={{ fontSize: "9px", color: COLORS.textMuted }}>{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// BLUEPRINT REVEAL - THE CINEMATIC MOMENT THAT CHANGES EVERYTHING
// This is where they see their future. Make it count.
// ═══════════════════════════════════════════════════════════════════════════════
function BlueprintReveal({ selected, T, lang, calLink }) {
  // Sub-phases: vision → problem → transformation → systems → capabilities → proof → moment → invitation
  const [subPhase, setSubPhase] = useState("vision");
  const [systemsOnline, setSystemsOnline] = useState([]);
  const [visibleCapIndex, setVisibleCapIndex] = useState(-1);
  const [showProof, setShowProof] = useState(false);
  const [showMoment, setShowMoment] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [problemIndex, setProblemIndex] = useState(-1);
  
  // ═══════════════════════════════════════════════════════════════════════════════
  // v3.9 APEX - CONVERSION OPTIMIZATION STATE
  // ═══════════════════════════════════════════════════════════════════════════════
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [viewerCount] = useState(() => Math.floor(Math.random() * 3) + 2); // 2-4 viewers
  const [spotsRemaining] = useState(() => Math.floor(Math.random() * 3) + 3); // 3-5 spots
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Phase mapping for progress indicator
  const phases = [
    { id: "vision", label: lang === "es" ? "Visión" : "Vision" },
    { id: "problem", label: lang === "es" ? "Problema" : "Problem" },
    { id: "transformation", label: lang === "es" ? "Cambio" : "Shift" },
    { id: "systems", label: lang === "es" ? "Sistemas" : "Systems" },
    { id: "capabilities", label: lang === "es" ? "Módulos" : "Modules" },
    { id: "proof", label: lang === "es" ? "Resultados" : "Results" },
    { id: "moment", label: lang === "es" ? "Momento" : "Moment" },
    { id: "invitation", label: lang === "es" ? "Acción" : "Action" }
  ];
  const currentPhaseIndex = phases.findIndex(p => p.id === subPhase);
  
  // Industry-specific pain points
  const industryProblems = {
    hospitality: {
      en: [
        "Guests messaging at 2am... no one responds",
        "Reservation requests lost in your inbox",
        "Competition capturing YOUR customers",
        "Revenue leaking through the cracks"
      ],
      es: [
        "Huéspedes escribiendo a las 2am... nadie responde",
        "Solicitudes de reserva perdidas en tu bandeja",
        "La competencia capturando TUS clientes",
        "Ingresos escapándose sin control"
      ]
    },
    restaurant: {
      en: [
        "Tables sitting empty that should be full",
        "Staff overwhelmed answering repeat questions",
        "No-shows costing you thousands monthly",
        "Diners choosing competitors who respond faster"
      ],
      es: [
        "Mesas vacías que deberían estar llenas",
        "Personal abrumado respondiendo las mismas preguntas",
        "No-shows costándote miles cada mes",
        "Comensales eligiendo competidores que responden más rápido"
      ]
    },
    tours: {
      en: [
        "Tourists booking with competitors who respond first",
        "Questions at midnight going unanswered",
        "Same questions, answered manually, 50 times a day",
        "Peak season inquiries overwhelming your team"
      ],
      es: [
        "Turistas reservando con competidores que responden primero",
        "Preguntas a medianoche sin respuesta",
        "Las mismas preguntas, respondidas manualmente, 50 veces al día",
        "Consultas de temporada alta abrumando a tu equipo"
      ]
    },
    services: {
      en: [
        "High-value clients lost to slow response times",
        "Your expertise bottlenecked by your availability",
        "Leads cooling off while you sleep",
        "Competitors answering faster, winning your clients"
      ],
      es: [
        "Clientes de alto valor perdidos por tiempos de respuesta lentos",
        "Tu experiencia limitada por tu disponibilidad",
        "Leads enfriándose mientras duermes",
        "Competidores respondiendo más rápido, ganando tus clientes"
      ]
    }
  };
  
  // Industry-specific transformation statements
  const transformations = {
    hospitality: {
      en: "Every guest inquiry answered instantly. Every opportunity captured.",
      es: "Cada consulta de huésped respondida al instante. Cada oportunidad capturada."
    },
    restaurant: {
      en: "Tables filled. Questions answered. Revenue protected.",
      es: "Mesas llenas. Preguntas respondidas. Ingresos protegidos."
    },
    tours: {
      en: "Every tourist engaged. Every booking secured. Every adventure sold.",
      es: "Cada turista atendido. Cada reserva asegurada. Cada aventura vendida."
    },
    services: {
      en: "Your expertise, available 24/7. No lead left behind.",
      es: "Tu experiencia, disponible 24/7. Ningún lead abandonado."
    }
  };
  
  // System initialization - slower, more dramatic
  const systems = [
    { id: "core", en: "CORE AI ENGINE", es: "MOTOR DE IA PRINCIPAL", delay: 14000 },
    { id: "whatsapp", en: "WHATSAPP INTEGRATION", es: "INTEGRACIÓN WHATSAPP", delay: 16000 },
    { id: "nlp", en: "NATURAL LANGUAGE PROCESSOR", es: "PROCESADOR DE LENGUAJE", delay: 18000 },
    { id: "crm", en: "CLIENT MEMORY SYSTEM", es: "SISTEMA DE MEMORIA", delay: 20000 },
    { id: "analytics", en: "REVENUE ANALYTICS", es: "ANALÍTICAS DE INGRESOS", delay: 22000 }
  ];
  
  const problems = industryProblems[selected?.id] || industryProblems.hospitality;
  const problemList = problems[lang] || problems.en;
  const transformation = transformations[selected?.id] || transformations.hospitality;
  const transformText = transformation[lang] || transformation.en;
  
  // ═══════════════════════════════════════════════════════════════════════════════
  // ORCHESTRATION - The emotional timeline
  // ═══════════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    // Track elapsed time for floating CTA
    const timeTracker = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    
    // Show floating CTA after 30 seconds
    const floatingCTATimer = setTimeout(() => setShowFloatingCTA(true), 30000);
    
    // PHASE 1: VISION (0-4s) - Hook them with "Imagine..."
    const visionTimer = setTimeout(() => setSubPhase("problem"), 4000);
    
    // PHASE 2: PROBLEM (4-12s) - Show their pain points one by one
    problemList.forEach((_, i) => {
      setTimeout(() => setProblemIndex(i), 4500 + i * 1800);
    });
    const problemPhaseEnd = setTimeout(() => setSubPhase("transformation"), 12000);
    
    // PHASE 3: TRANSFORMATION (12-14s) - The shift moment
    const transformTimer = setTimeout(() => setSubPhase("systems"), 14000);
    
    // PHASE 4: SYSTEMS (14-25s) - Systems come online
    systems.forEach(sys => {
      setTimeout(() => setSystemsOnline(prev => [...prev, sys.id]), sys.delay);
    });
    const systemsEnd = setTimeout(() => setSubPhase("capabilities"), 25000);
    
    // PHASE 5: CAPABILITIES (25-55s) - Reveal one capability at a time
    const caps = T.capabilities?.[selected?.id] || [];
    caps.forEach((_, i) => {
      setTimeout(() => setVisibleCapIndex(i), 26000 + i * 8000);
    });
    
    // PHASE 6: PROOF (55-65s) - Real results
    const proofTimer = setTimeout(() => {
      setSubPhase("proof");
      setShowProof(true);
    }, 55000);
    
    // PHASE 7: MOMENT (65-72s) - The powerful pause
    const momentTimer = setTimeout(() => {
      setSubPhase("moment");
      setShowMoment(true);
    }, 65000);
    
    // PHASE 8: INVITATION (72s+) - Soft CTA
    const ctaTimer = setTimeout(() => {
      setSubPhase("invitation");
      setShowCTA(true);
    }, 72000);
    
    return () => {
      clearInterval(timeTracker);
      clearTimeout(floatingCTATimer);
      clearTimeout(visionTimer);
      clearTimeout(problemPhaseEnd);
      clearTimeout(transformTimer);
      clearTimeout(systemsEnd);
      clearTimeout(proofTimer);
      clearTimeout(momentTimer);
      clearTimeout(ctaTimer);
    };
  }, []);
  
  // Skip to results function
  const handleSkip = () => {
    setSkipped(true);
    setSubPhase("proof");
    setShowProof(true);
    setVisibleCapIndex(2); // Show all capability cards
    setSystemsOnline(systems.map(s => s.id)); // All systems online
    setShowFloatingCTA(true);
  };
  
  // Pulsing glow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  const glowOpacity = 0.3 + Math.sin(glowIntensity * 0.1) * 0.2;
  
  return (
    <div style={{ 
      flex: 1,
      position: "relative",
      overflow: "auto",
      padding: "40px 20px"
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "1000px",
        height: "1000px",
        transform: "translate(-50%, -50%)",
        background: subPhase === "problem" 
          ? `radial-gradient(circle, rgba(255, 100, 100, 0.15) 0%, transparent 70%)`
          : `radial-gradient(circle, ${COLORS.cyanGlow} 0%, transparent 70%)`,
        opacity: glowOpacity * 0.3,
        pointerEvents: "none",
        transition: "background 2s ease"
      }} />
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* v3.9 APEX - PROGRESS TIMELINE (Fixed Top) */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: `linear-gradient(180deg, ${COLORS.void} 0%, transparent 100%)`,
        padding: "16px 20px 30px",
        pointerEvents: "none"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          {phases.map((phase, i) => (
            <div key={phase.id} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: i <= currentPhaseIndex ? "10px" : "8px",
                height: i <= currentPhaseIndex ? "10px" : "8px",
                borderRadius: "50%",
                background: i < currentPhaseIndex 
                  ? COLORS.green 
                  : i === currentPhaseIndex 
                    ? COLORS.cyan 
                    : COLORS.border,
                boxShadow: i === currentPhaseIndex ? `0 0 15px ${COLORS.cyanGlow}` : "none",
                transition: "all 0.5s ease"
              }} />
              {i < phases.length - 1 && (
                <div style={{
                  width: "clamp(15px, 4vw, 40px)",
                  height: "2px",
                  background: i < currentPhaseIndex ? COLORS.green : COLORS.border,
                  transition: "background 0.5s ease"
                }} />
              )}
            </div>
          ))}
        </div>
        <div style={{
          textAlign: "center",
          marginTop: "8px",
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          color: COLORS.cyan,
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}>
          {phases[currentPhaseIndex]?.label || ""}
        </div>
      </div>
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* v3.9 APEX - URGENCY BANNER (Top) */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "fixed",
        top: "70px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99,
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "10px 24px",
        background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(13, 18, 25, 0.95) 100%)`,
        borderRadius: "30px",
        border: `1px solid ${COLORS.border}`,
        fontSize: "12px",
        fontFamily: "'JetBrains Mono', monospace"
      }}>
        <span style={{ color: COLORS.red, display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ 
            width: "6px", 
            height: "6px", 
            borderRadius: "50%", 
            background: COLORS.red,
            animation: "pulse 1s infinite"
          }} />
          {lang === "es" 
            ? `Solo ${spotsRemaining} espacios este mes` 
            : `Only ${spotsRemaining} spots this month`}
        </span>
        <span style={{ color: COLORS.textMuted }}>•</span>
        <span style={{ color: COLORS.green, display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ 
            width: "6px", 
            height: "6px", 
            borderRadius: "50%", 
            background: COLORS.green 
          }} />
          {viewerCount} {lang === "es" ? "viendo ahora" : "viewing now"}
        </span>
      </div>
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* v3.9 APEX - SKIP BUTTON (Early phases only) */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {!skipped && currentPhaseIndex < 5 && currentPhaseIndex > 0 && (
        <button
          onClick={handleSkip}
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            zIndex: 98,
            padding: "12px 20px",
            background: "transparent",
            border: `1px solid ${COLORS.border}`,
            borderRadius: "20px",
            color: COLORS.textMuted,
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            cursor: "pointer",
            transition: "all 0.3s ease",
            pointerEvents: "auto"
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = COLORS.cyan;
            e.target.style.color = COLORS.cyan;
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = COLORS.border;
            e.target.style.color = COLORS.textMuted;
          }}
        >
          {lang === "es" ? "Saltar a resultados →" : "Skip to results →"}
        </button>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* v3.9 APEX - FLOATING CTA (After 30s) */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {showFloatingCTA && !showCTA && (
        <div style={{
          position: "fixed",
          bottom: "30px",
          right: "20px",
          zIndex: 100,
          opacity: 0,
          animation: "fadeSlideIn 0.5s ease forwards",
          pointerEvents: "auto"
        }}>
          <button
            onClick={() => window.open(calLink, "_blank")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 24px",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.cyan})`,
              border: "none",
              borderRadius: "25px",
              color: COLORS.void,
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer",
              boxShadow: `0 10px 40px ${COLORS.goldGlow}`,
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              e.currentTarget.style.boxShadow = `0 15px 50px ${COLORS.goldGlow}`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = `0 10px 40px ${COLORS.goldGlow}`;
            }}
          >
            <span style={{ fontSize: "16px" }}>🚀</span>
            {lang === "es" ? "¿Listo? Agenda ahora" : "Ready? Book now"}
          </button>
          <div style={{
            marginTop: "8px",
            textAlign: "center",
            fontSize: "10px",
            color: COLORS.textMuted,
            fontFamily: "'JetBrains Mono', monospace"
          }}>
            {lang === "es" ? "Sin compromiso" : "No commitment"}
          </div>
        </div>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* v3.9 APEX - SKIPPED NOTICE */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {skipped && (
        <div style={{
          position: "fixed",
          top: "120px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 97,
          padding: "12px 24px",
          background: `linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(240, 200, 80, 0.1) 100%)`,
          borderRadius: "20px",
          border: `1px solid ${COLORS.cyan}`,
          fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace",
          color: COLORS.cyan,
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}>
          <span>⚡</span>
          <span>{lang === "es" ? "Saltaste adelante" : "You skipped ahead"}</span>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "transparent",
              border: `1px solid ${COLORS.cyan}`,
              borderRadius: "12px",
              padding: "4px 12px",
              color: COLORS.cyan,
              fontSize: "11px",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            {lang === "es" ? "Ver todo →" : "See full →"}
          </button>
        </div>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PHASE 1: THE VISION - "Imagine..." */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {subPhase === "vision" && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center"
        }}>
          {/* Floating industry icon */}
          <div style={{
            fontSize: "120px",
            marginBottom: "50px",
            filter: `drop-shadow(0 0 80px ${COLORS.cyanGlow})`,
            animation: "float 3s ease-in-out infinite",
            opacity: 0,
            animationDelay: "0s",
            animationFillMode: "forwards"
          }}>
            <span style={{ 
              opacity: 0, 
              animation: "fadeSlideIn 1.5s ease-out forwards",
              display: "block"
            }}>
              {selected?.icon}
            </span>
          </div>
          
          <div style={{
            fontSize: "clamp(36px, 7vw, 64px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            color: COLORS.text,
            opacity: 0,
            animation: "fadeSlideIn 1.5s ease-out 0.5s forwards",
            marginBottom: "20px"
          }}>
            {lang === "es" ? "Imagina..." : "Imagine..."}
          </div>
          
          <div style={{
            fontSize: "clamp(20px, 4vw, 28px)",
            fontFamily: "'Inter', sans-serif",
            color: COLORS.cyan,
            maxWidth: "600px",
            lineHeight: 1.6,
            opacity: 0,
            animation: "fadeSlideIn 1.5s ease-out 1.5s forwards",
            textShadow: `0 0 30px ${COLORS.cyanGlow}`
          }}>
            {lang === "es" 
              ? "Un negocio que nunca duerme. Que nunca pierde una oportunidad."
              : "A business that never sleeps. That never misses an opportunity."}
          </div>
        </div>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PHASE 2: THE PROBLEM - Their current pain */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {subPhase === "problem" && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center"
        }}>
          <div style={{
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(255, 100, 100, 0.8)",
            letterSpacing: "4px",
            marginBottom: "40px",
            opacity: 0,
            animation: "fadeSlideIn 0.8s forwards"
          }}>
            {lang === "es" ? "PERO AHORA MISMO..." : "BUT RIGHT NOW..."}
          </div>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "700px"
          }}>
            {problemList.map((problem, i) => (
              <div 
                key={i}
                style={{
                  fontSize: "clamp(18px, 3vw, 24px)",
                  fontFamily: "'Inter', sans-serif",
                  color: problemIndex >= i ? "rgba(255, 150, 150, 0.9)" : "transparent",
                  padding: "16px 24px",
                  background: problemIndex >= i ? "rgba(255, 100, 100, 0.1)" : "transparent",
                  borderRadius: "12px",
                  border: problemIndex >= i ? "1px solid rgba(255, 100, 100, 0.3)" : "1px solid transparent",
                  transition: "all 0.8s ease-out",
                  transform: problemIndex >= i ? "translateY(0)" : "translateY(20px)",
                  opacity: problemIndex >= i ? 1 : 0
                }}
              >
                {problem}
              </div>
            ))}
          </div>
          
          {problemIndex >= problemList.length - 1 && (
            <div style={{
              marginTop: "50px",
              fontSize: "clamp(24px, 4vw, 32px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: COLORS.gold,
              opacity: 0,
              animation: "fadeSlideIn 1s 1s forwards",
              textShadow: `0 0 30px ${COLORS.goldGlow}`
            }}>
              {lang === "es" ? "Esto cambia hoy." : "This changes today."}
            </div>
          )}
        </div>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PHASE 3: THE TRANSFORMATION - The shift moment */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {subPhase === "transformation" && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center"
        }}>
          <div style={{
            fontSize: "clamp(14px, 2vw, 16px)",
            fontFamily: "'JetBrains Mono', monospace",
            color: COLORS.gold,
            letterSpacing: "6px",
            marginBottom: "30px",
            textShadow: `0 0 30px ${COLORS.goldGlow}`,
            opacity: 0,
            animation: "fadeSlideIn 1s forwards"
          }}>
            {lang === "es" ? "CON MACHINEMIND" : "WITH MACHINEMIND"}
          </div>
          
          <div style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: COLORS.text,
            maxWidth: "800px",
            lineHeight: 1.4,
            opacity: 0,
            animation: "fadeSlideIn 1.2s 0.5s forwards"
          }}>
            {transformText}
          </div>
          
          <div style={{
            marginTop: "50px",
            fontSize: "14px",
            fontFamily: "'JetBrains Mono', monospace",
            color: COLORS.cyan,
            letterSpacing: "3px",
            opacity: 0,
            animation: "fadeSlideIn 1s 1.5s forwards"
          }}>
            {lang === "es" ? "INICIALIZANDO SISTEMAS..." : "INITIALIZING SYSTEMS..."}
          </div>
        </div>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PHASE 4: SYSTEMS COMING ONLINE */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {subPhase === "systems" && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh"
        }}>
          <div style={{
            fontSize: "11px",
            color: COLORS.gold,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "3px",
            marginBottom: "50px",
            textShadow: `0 0 20px ${COLORS.goldGlow}`
          }}>
            {lang === "es" ? "INICIALIZACIÓN DE SISTEMA" : "SYSTEM INITIALIZATION"}
          </div>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "550px"
          }}>
            {systems.map((sys, i) => {
              const isOnline = systemsOnline.includes(sys.id);
              return (
                <div key={sys.id} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 28px",
                  background: isOnline 
                    ? `linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(212, 175, 55, 0.05))`
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isOnline ? COLORS.cyan : COLORS.border}`,
                  borderRadius: "16px",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isOnline ? "scale(1.02)" : "scale(1)",
                  boxShadow: isOnline ? `0 0 40px ${COLORS.cyanGlow}` : "none",
                  opacity: i <= systemsOnline.length ? 1 : 0.3
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "13px",
                    color: isOnline ? COLORS.text : COLORS.textMuted,
                    letterSpacing: "1px",
                    transition: "color 0.5s"
                  }}>
                    {sys[lang] || sys.en}
                  </span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: isOnline ? COLORS.cyan : COLORS.textMuted,
                    padding: "6px 16px",
                    borderRadius: "20px",
                    background: isOnline ? "rgba(0, 212, 255, 0.2)" : "transparent",
                    border: `1px solid ${isOnline ? COLORS.cyan : "transparent"}`,
                    boxShadow: isOnline ? `0 0 20px ${COLORS.cyanGlow}` : "none",
                    transition: "all 0.5s ease"
                  }}>
                    {isOnline ? "● ONLINE" : "○ STANDBY"}
                  </span>
                </div>
              );
            })}
          </div>
          
          {systemsOnline.length === systems.length && (
            <div style={{
              marginTop: "50px",
              fontSize: "16px",
              color: COLORS.cyan,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              opacity: 0,
              animation: "fadeSlideIn 1s forwards",
              textShadow: `0 0 20px ${COLORS.cyanGlow}`
            }}>
              {lang === "es" ? "✓ Todos los sistemas activos" : "✓ All systems active"}
            </div>
          )}
        </div>
      )}
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PHASE 5: CAPABILITIES - One at a time, dramatic reveals */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {(subPhase === "capabilities" || subPhase === "proof" || subPhase === "moment" || subPhase === "invitation") && (
        <div>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ 
              fontSize: "12px", 
              color: COLORS.gold, 
              marginBottom: "16px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "5px",
              textShadow: `0 0 30px ${COLORS.goldGlow}`,
              opacity: 0,
              animation: "fadeSlideIn 1s forwards"
            }}>
              {lang === "es" ? "TU PLAN PERSONALIZADO" : "YOUR CUSTOM BLUEPRINT"}
            </div>
            
            <h2 style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 700,
              marginBottom: "20px",
              background: `linear-gradient(135deg, ${COLORS.text}, ${COLORS.gold})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0,
              animation: "fadeSlideIn 1s 0.3s forwards"
            }}>
              {selected?.label} {lang === "es" ? "IA" : "AI"}
            </h2>
            
            <p style={{
              color: COLORS.textMuted,
              fontSize: "18px",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
              opacity: 0,
              animation: "fadeSlideIn 1s 0.6s forwards"
            }}>
              {lang === "es" 
                ? "Todo lo que tu negocio necesita para capturar cada oportunidad, 24/7."
                : "Everything your business needs to capture every opportunity, 24/7."}
            </p>
            
            {/* v3.9 APEX - Trust Badge */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginTop: "30px",
              opacity: 0,
              animation: "fadeSlideIn 1s 0.9s forwards"
            }}>
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                color: COLORS.green
              }}>
                <span>✓</span> {lang === "es" ? "20+ negocios colombianos" : "20+ Colombian businesses"}
              </span>
              <span style={{ color: COLORS.border }}>•</span>
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                color: COLORS.gold
              }}>
                <span>⚡</span> {lang === "es" ? "Garantía 30 días" : "30-day guarantee"}
              </span>
              <span style={{ color: COLORS.border }}>•</span>
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                color: COLORS.cyan
              }}>
                <span>∞</span> {lang === "es" ? "Sin contratos" : "No contracts"}
              </span>
            </div>
          </div>
          
          {/* Capability Cards - Dramatic one-at-a-time reveal */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            maxWidth: "800px",
            margin: "0 auto 60px"
          }}>
            {(T.capabilities?.[selected?.id] || []).map((cap, i) => (
              <div 
                key={cap?.title || i}
                style={{
                  opacity: visibleCapIndex >= i ? 1 : 0,
                  transform: visibleCapIndex >= i ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: visibleCapIndex >= i ? "auto" : "none"
                }}
              >
                <CinematicCapabilityCard 
                  title={cap?.title || ""}
                  items={cap?.items || []}
                  delay={0}
                  active={visibleCapIndex >= i}
                  moduleNumber={i + 1}
                />
              </div>
            ))}
          </div>
          
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* PHASE 6: PROOF - Real results */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {showProof && T.caseStudies?.[selected?.id] && (
            <div style={{ 
              marginTop: "80px", 
              padding: "60px", 
              background: `linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(0, 212, 255, 0.1))`,
              borderRadius: "32px",
              border: `2px solid ${COLORS.gold}`,
              boxShadow: `0 0 100px ${COLORS.goldGlow}`,
              opacity: 0,
              animation: "fadeSlideIn 1.5s forwards",
              position: "relative",
              overflow: "hidden",
              maxWidth: "800px",
              margin: "80px auto 0"
            }}>
              {/* Animated corner accents */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "150px",
                height: "150px",
                borderTop: `3px solid ${COLORS.gold}`,
                borderLeft: `3px solid ${COLORS.gold}`,
                borderRadius: "32px 0 0 0",
                animation: "pulse 2s infinite"
              }} />
              <div style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "150px",
                height: "150px",
                borderBottom: `3px solid ${COLORS.gold}`,
                borderRight: `3px solid ${COLORS.gold}`,
                borderRadius: "0 0 32px 0",
                animation: "pulse 2s infinite"
              }} />
              
              <div style={{ 
                fontSize: "13px", 
                color: COLORS.gold, 
                marginBottom: "16px",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "4px",
                textShadow: `0 0 15px ${COLORS.goldGlow}`
              }}>
                {lang === "es" ? "★ RESULTADOS REALES" : "★ REAL RESULTS"}
              </div>
              
              <div style={{ 
                fontFamily: "'Space Grotesk', sans-serif", 
                fontSize: "28px", 
                fontWeight: 600, 
                marginBottom: "30px",
                color: COLORS.text
              }}>
                {T.caseStudies[selected?.id]?.title}
              </div>
              
              <div style={{ 
                fontSize: "clamp(56px, 10vw, 88px)", 
                fontWeight: 700, 
                color: COLORS.cyan, 
                marginBottom: "12px",
                fontFamily: "'Space Grotesk', sans-serif",
                textShadow: `0 0 60px ${COLORS.cyanGlow}`,
                lineHeight: 1
              }}>
                <CountUp 
                  end={T.caseStudies[selected?.id]?.metric} 
                  prefix={typeof T.caseStudies[selected?.id]?.metric === 'string' && T.caseStudies[selected?.id]?.metric?.includes?.("$") ? "$" : ""} 
                  delay={500}
                  duration={3000}
                />
                <span style={{ 
                  fontSize: "clamp(24px, 4vw, 32px)", 
                  color: COLORS.textMuted,
                  marginLeft: "12px"
                }}>
                  {T.caseStudies[selected?.id]?.metricSuffix}
                </span>
              </div>
              
              <p style={{ 
                color: COLORS.text, 
                fontStyle: "italic", 
                lineHeight: 1.9,
                fontFamily: "'Inter', sans-serif",
                marginTop: "30px",
                fontSize: "20px"
              }}>
                "{T.caseStudies[selected?.id]?.quote}"
              </p>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* PREMIUM SHOWCASE - Results Dashboard + Before/After + Trust Badges */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {showProof && (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <ResultsDashboard lang={lang} />
              <BeforeAfterComparison lang={lang} />
              <TrustBadges lang={lang} />
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* PHASE 7: THE MOMENT - Powerful pause */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {showMoment && (
            <div style={{
              textAlign: "center",
              marginTop: "100px",
              padding: "60px 40px",
              opacity: 0,
              animation: "fadeSlideIn 2s forwards"
            }}>
              <div style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: COLORS.text,
                marginBottom: "20px",
                lineHeight: 1.4
              }}>
                {lang === "es" 
                  ? `Este es tu ${selected?.label}.`
                  : `This is your ${selected?.label}.`}
              </div>
              <div style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: `0 0 60px ${COLORS.cyanGlow}`,
                opacity: 0,
                animation: "fadeSlideIn 1.5s 1s forwards"
              }}>
                {lang === "es" ? "Transformado." : "Transformed."}
              </div>
            </div>
          )}
          
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* PHASE 8: THE INVITATION - Soft CTA */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {showCTA && (
            <div style={{
              textAlign: "center",
              marginTop: "80px",
              padding: "80px 40px",
              background: `linear-gradient(180deg, transparent, rgba(0, 212, 255, 0.08))`,
              borderRadius: "32px",
              maxWidth: "700px",
              margin: "80px auto 0",
              opacity: 0,
              animation: "fadeSlideIn 1.5s forwards"
            }}>
              <div style={{
                fontSize: "12px",
                color: COLORS.cyan,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "4px",
                marginBottom: "24px",
                textShadow: `0 0 20px ${COLORS.cyanGlow}`
              }}>
                {lang === "es" ? "TU PRÓXIMO PASO" : "YOUR NEXT STEP"}
              </div>
              
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 600,
                marginBottom: "20px",
                color: COLORS.text
              }}>
                {lang === "es" 
                  ? "¿Listo para dejar de perder oportunidades?"
                  : "Ready to stop losing opportunities?"}
              </h3>
              
              <p style={{
                color: COLORS.textMuted,
                fontSize: "17px",
                marginBottom: "40px",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7
              }}>
                {lang === "es" 
                  ? "En 30 minutos, te mostraré exactamente cómo esto funciona para tu negocio específico. Sin presión. Sin compromiso."
                  : "In 30 minutes, I'll show you exactly how this works for your specific business. No pressure. No obligation."}
              </p>
              
              <button
                onClick={() => window.open(calLink, "_blank")}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.cyan})`,
                  border: "none",
                  borderRadius: "20px",
                  padding: "24px 60px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: COLORS.void,
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: `0 20px 60px ${COLORS.goldGlow}`,
                  animation: "pulse 2s infinite"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-5px) scale(1.05)";
                  e.target.style.boxShadow = `0 30px 80px ${COLORS.goldGlow}`;
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = `0 20px 60px ${COLORS.goldGlow}`;
                }}
              >
                {lang === "es" ? "Agendar Mi Sesión de Estrategia →" : "Book My Strategy Session →"}
              </button>
              
              <p style={{
                marginTop: "24px",
                fontSize: "14px",
                color: COLORS.textMuted,
                fontFamily: "'Inter', sans-serif"
              }}>
                {lang === "es" 
                  ? "30 minutos • 100% gratis • Cero obligación"
                  : "30 minutes • 100% free • Zero obligation"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SOFIA CHAT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
function SofiaChat({ isOpen, onClose, lang }) {
  const T = CONTENT[lang].sofia;
  const [messages, setMessages] = useState([{ role: "sofia", text: T.greeting }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Reset messages when language changes
  useEffect(() => {
    setMessages([{ role: "sofia", text: T.greeting }]);
  }, [lang, T.greeting]);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  function detectIntent(msg) {
    const m = msg.toLowerCase().trim();
    
    // Greetings (more patterns)
    if (m.match(/^(hi|hello|hey|hola|buenos|buenas|saludos|que tal|qué tal|good morning|good afternoon)[\\s!.,?]*$/i)) return "greeting";
    if (m.length < 4 && m.match(/^(hi|hey|ho|ey)$/i)) return "greeting";
    
    // High intent signals (ready to buy)
    if (m.match(/sign up|get started|ready|start|begin|quiero|empezar|listo|comenzar|interested|interesado|let's go|vamos/i)) return "high_intent";
    
    // Booking/scheduling
    if (m.match(/book|call|schedule|agendar|llamada|cita|appointment|meet|reunión|demo|demostración/i)) return "booking";
    
    // Pricing questions
    if (m.match(/price|pricing|cost|how much|cuánto|cuanto|cuesta|precio|rate|fee|pay|pagar|investment|inversión/i)) return "pricing";
    
    // How it works / process questions
    if (m.match(/how does|how do|cómo funciona|como funciona|how it work|explain|explica|process|proceso|step|paso/i)) return "how_works";
    
    // WhatsApp specific
    if (m.match(/whatsapp|wsp|wa|mensaje|message|chat|chatbot|bot/i)) return "whatsapp";
    
    // Services overview
    if (m.match(/service|what do you|offer|qué hacen|que hacen|servicios|help|ayuda|do for me/i)) return "services";
    
    // Industry: Hotels/Hospitality
    if (m.match(/hotel|hospitality|hostel|airbnb|alojamiento|hospedaje|accommodation|lodging|villa|rental/i)) return "industry_hospitality";
    
    // Industry: Restaurants
    if (m.match(/restaurant|food|dining|bar|restaurante|comida|café|cafe|bistro|kitchen|cocina/i)) return "industry_restaurant";
    
    // Industry: Tours/Experiences  
    if (m.match(/tour|experience|excursion|boat|barco|adventure|aventura|activity|actividad|travel|viaje/i)) return "industry_tours";
    
    // Industry: Professional Services
    if (m.match(/lawyer|law|doctor|professional|abogado|médico|medico|consultant|consultora?|clinic|clínica|office|oficina|firm/i)) return "industry_services";
    
    // Results/proof
    if (m.match(/result|roi|proof|case|resultado|prueba|example|ejemplo|success|éxito|exito|testimonial|client/i)) return "results";
    
    // About company
    if (m.match(/who are|about|company|quiénes|quienes|team|equipo|founder|fundador/i)) return "about";
    
    // Thanks
    if (m.match(/thank|thanks|gracias|appreciate|agradec/i)) return "thanks";
    
    // Negative/objections
    if (m.match(/expensive|too much|caro|no need|don't need|no necesito|not interested|no me interesa/i)) return "objection";
    
    return "general";
  }
  
  function sofiaRespond(userMessage) {
    const intent = detectIntent(userMessage);
    const isSpanish = lang === "es";
    
    const responses = {
      greeting: isSpanish 
        ? "¡Hola! 👋 ¿En qué puedo ayudarte hoy? ¿Te gustaría saber más sobre cómo automatizamos negocios de hospitalidad?"
        : "Hey there! 👋 What can I help you with today? Would you like to learn how we automate hospitality businesses?",
      
      pricing: isSpanish
        ? `Excelente pregunta. La mayoría de clientes invierten $147-497/mes en un sistema que recupera $2,000-8,000+ mensuales.\n\nSin costos enormes. Sin contratos largos. Si no recuperas al menos 3x en 90 días, te devolvemos todo.\n\n${CAL_LINK}`
        : `Great question. Most clients invest $147-497/month on a system that recovers $2,000-8,000+ monthly.\n\nNo huge upfront costs. No long contracts. If it doesn't recover at least 3x in 90 days, we refund everything.\n\n${CAL_LINK}`,
      
      booking: isSpanish
        ? `¡Perfecto! Agenda una llamada de 15 minutos y te mostraremos exactamente lo que construiríamos para ti.\n\n${CAL_LINK}`
        : `Perfect! Book a 15-minute call and we'll show you exactly what we'd build for you.\n\n${CAL_LINK}`,
      
      high_intent: isSpanish
        ? `¡Me encanta esa energía! 🚀 El siguiente paso es una llamada rápida de 15 minutos donde mapeamos tu situación específica.\n\n${CAL_LINK}`
        : `Love that energy! 🚀 Next step is a quick 15-minute call where we map out your specific situation.\n\n${CAL_LINK}`,
      
      services: isSpanish
        ? "Construimos infraestructura de IA que opera 24/7:\n\n🤖 **Concierge IA** — Maneja consultas y reservas por WhatsApp\n\n💰 **Recuperación de Ingresos** — Captura consultas fuera de horario\n\n📊 **Automatización** — Gestiona reservas, reduce no-shows 40%\n\n¿Cuál es más relevante para tu negocio?"
        : "We build AI infrastructure that operates 24/7:\n\n🤖 **AI Concierge** — Handles inquiries & bookings via WhatsApp\n\n💰 **Revenue Recovery** — Captures after-hours inquiries\n\n📊 **Automation** — Manages bookings, cuts no-shows by 40%\n\nWhich matters most for your business?",
      
      how_works: isSpanish
        ? "Así funciona:\n\n1️⃣ **Análisis** — Mapeamos tu flujo actual de clientes y dónde pierdes dinero\n\n2️⃣ **Construcción** — En 7-14 días, construimos tu sistema personalizado\n\n3️⃣ **Lanzamiento** — Lo conectamos a tu WhatsApp Business y empiezas a capturar ingresos perdidos\n\nEl sistema maneja consultas, reservas, recordatorios — todo automático. ¿Te gustaría ver un demo?"
        : "Here's how it works:\n\n1️⃣ **Analysis** — We map your current customer flow and where you're losing money\n\n2️⃣ **Build** — In 7-14 days, we build your custom system\n\n3️⃣ **Launch** — We connect it to your WhatsApp Business and you start capturing lost revenue\n\nThe system handles inquiries, bookings, reminders — all automatic. Want to see a demo?",
      
      whatsapp: isSpanish
        ? "¡Exacto, WhatsApp es el canal! 📱\n\nEn LATAM, el 90% de las consultas llegan por WhatsApp. Nuestro sistema responde en segundos, 24/7, en español natural.\n\nManeja:\n• Preguntas sobre disponibilidad y precios\n• Reservaciones completas\n• Confirmaciones y recordatorios\n• Escalación a humanos cuando es necesario\n\n¿Qué tipo de negocio tienes?"
        : "Exactly, WhatsApp is the channel! 📱\n\nIn LATAM, 90% of inquiries come through WhatsApp. Our system responds in seconds, 24/7, in natural Spanish.\n\nIt handles:\n• Questions about availability and pricing\n• Complete bookings\n• Confirmations and reminders\n• Escalation to humans when needed\n\nWhat type of business do you have?",
      
      objection: isSpanish
        ? "Entiendo la preocupación. Aquí está la realidad:\n\nLa mayoría de negocios de hospitalidad pierden $2,000-8,000+ al mes en consultas que no responden a tiempo. Eso es dinero que YA están perdiendo.\n\nNuestro sistema cuesta una fracción de eso y típicamente se paga solo en la primera semana.\n\nPero no tienes que creerme — ¿qué tal una llamada de 15 min para que te muestre números reales de clientes como tú?"
        : "I understand the concern. Here's the reality:\n\nMost hospitality businesses lose $2,000-8,000+ monthly on inquiries they don't respond to in time. That's money they're ALREADY losing.\n\nOur system costs a fraction of that and typically pays for itself in the first week.\n\nBut you don't have to take my word for it — how about a 15-min call so I can show you real numbers from clients like you?",
      
      industry_hospitality: isSpanish
        ? "¡Hoteles son nuestro punto fuerte! Un hotel boutique en Cartagena recuperó $4,200/mes después de perder 60% de consultas fuera de horario.\n\nNuestro sistema responde en 30 segundos, 24/7. ¿Te gustaría ver cómo funcionaría para ti?"
        : "Hotels are our sweet spot! A boutique hotel in Cartagena recovered $4,200/month after missing 60% of after-hours inquiries.\n\nOur system responds in 30 seconds, 24/7. Want to see how it would work for you?",
      
      industry_restaurant: isSpanish
        ? "¡Restaurantes! Un restaurante premium redujo sus no-shows un 60% con recordatorios automáticos y confirmaciones por WhatsApp.\n\nAdemás, nuestro sistema maneja reservaciones 24/7, incluso cuando tu equipo no está disponible. ¿Te gustaría ver cómo funcionaría para tu restaurante?"
        : "Restaurants! A premium restaurant cut no-shows by 60% with automated reminders and WhatsApp confirmations.\n\nPlus, our system handles reservations 24/7, even when your team isn't available. Want to see how it would work for your restaurant?",
      
      industry_tours: isSpanish
        ? "¡Operadores de tours! Un operador en Colombia aumentó sus reservas un 35% al responder consultas de WhatsApp en segundos, no horas.\n\nEl sistema maneja preguntas sobre disponibilidad, precios, itinerarios — todo automático. ¿Quieres ver cómo funcionaría para ti?"
        : "Tour operators! One operator in Colombia increased bookings by 35% by responding to WhatsApp inquiries in seconds, not hours.\n\nThe system handles questions about availability, pricing, itineraries — all automatic. Want to see how it would work for you?",
      
      industry_services: isSpanish
        ? "¡Servicios profesionales! Abogados, médicos, consultores — todos pierden clientes cuando no responden rápido.\n\nNuestro sistema califica leads, agenda citas, y filtra consultas. Un bufete de abogados aumentó sus consultas calificadas un 45%. ¿En qué profesión estás?"
        : "Professional services! Lawyers, doctors, consultants — they all lose clients when they don't respond quickly.\n\nOur system qualifies leads, schedules appointments, and filters inquiries. One law firm increased qualified consultations by 45%. What profession are you in?",
      
      results: isSpanish
        ? "Claro, aquí hay algunos resultados reales:\n\n🏨 Hotel Boutique: +$4,200/mes recuperados\n🍽️ Restaurante: -60% no-shows\n⛵ Operador de Tours: +35% reservas\n\n¿En qué industria estás?"
        : "Absolutely, here are some real results:\n\n🏨 Boutique Hotel: +$4,200/month recovered\n🍽️ Restaurant: -60% no-shows\n⛵ Tour Operator: +35% bookings\n\nWhich industry are you in?",
      
      about: isSpanish
        ? "MachineMind construye infraestructura de IA para negocios de hospitalidad en América Latina. No vendemos chatbots — instalamos sistemas completos de recuperación de ingresos.\n\nOperamos en Colombia pero servimos a toda LATAM."
        : "MachineMind builds AI infrastructure for hospitality businesses in Latin America. We don't sell chatbots — we install complete revenue recovery systems.\n\nWe're based in Colombia but serve all of LATAM.",
      
      thanks: isSpanish
        ? "¡De nada! 😊 Si tienes más preguntas, aquí estoy. Y si quieres ver lo que construiríamos para ti:\n\n" + CAL_LINK
        : "You're welcome! 😊 If you have more questions, I'm here. And if you want to see what we'd build for you:\n\n" + CAL_LINK,
      
      general: isSpanish
        ? "Interesante pregunta. Te cuento — ayudamos a negocios de hospitalidad a capturar ingresos que están perdiendo a través de automatización con IA.\n\n¿Qué tipo de negocio tienes?"
        : "Interesting question. Here's the deal — we help hospitality businesses capture revenue they're currently losing through AI automation.\n\nWhat type of business do you have?"
    };
    
    return responses[intent] || responses.general;
  }
  
  function parseMessageWithLinks(text) {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(linkRegex);
    
    return parts.map((part, i) => {
      if (part.match(linkRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "12px",
              padding: "12px 20px",
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
              color: COLORS.void,
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "13px",
              transition: "all 0.3s",
              fontFamily: "'Inter', sans-serif"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 4px 20px ${COLORS.cyanGlow}`;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            {T.booking}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }
  
  function handleSend() {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const response = sofiaRespond(userMsg);
      setMessages(prev => [...prev, { role: "sofia", text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  }
  
  if (!isOpen) return null;
  
  return (
    <div style={{
      position: "fixed",
      bottom: "100px",
      right: "24px",
      width: "380px",
      maxWidth: "calc(100vw - 48px)",
      height: "520px",
      background: COLORS.bg,
      borderRadius: "20px",
      border: `1px solid ${COLORS.border}`,
      display: "flex",
      flexDirection: "column",
      zIndex: 1000,
      overflow: "hidden",
      boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${COLORS.cyanDim}`,
      animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      {/* Header */}
      <div style={{
        padding: "20px",
        background: `linear-gradient(135deg, ${COLORS.bgCard}, ${COLORS.bg})`,
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        gap: "14px"
      }}>
        <div style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px"
        }}>
          🤖
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>Sofia</div>
          <div style={{ fontSize: "12px", color: COLORS.green, display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ 
              width: "8px", 
              height: "8px", 
              borderRadius: "50%", 
              background: COLORS.green,
              animation: "pulse 2s infinite"
            }} />
            {CONTENT[lang].header.online}
          </div>
        </div>
        <button 
          onClick={onClose}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            border: "none",
            background: COLORS.bgCard,
            color: COLORS.textMuted,
            cursor: "pointer",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ×
        </button>
      </div>
      
      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
          }}>
            <div style={{
              maxWidth: "85%",
              padding: "14px 18px",
              borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: msg.role === "user" 
                ? `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.cyanBright})`
                : COLORS.bgCard,
              color: msg.role === "user" ? COLORS.void : COLORS.text,
              fontSize: "14px",
              lineHeight: 1.6,
              fontFamily: "'Inter', sans-serif",
              whiteSpace: "pre-wrap",
              border: msg.role === "user" ? "none" : `1px solid ${COLORS.border}`
            }}>
              {msg.role === "sofia" ? parseMessageWithLinks(msg.text) : msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{
            padding: "14px 18px",
            background: COLORS.bgCard,
            borderRadius: "18px 18px 18px 4px",
            width: "fit-content",
            fontSize: "14px",
            color: COLORS.textMuted,
            fontFamily: "'Inter', sans-serif",
            border: `1px solid ${COLORS.border}`
          }}>
            {T.thinking}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div style={{
        padding: "16px 20px",
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex",
        gap: "12px"
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={T.placeholder}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "12px",
            border: `1px solid ${COLORS.border}`,
            background: COLORS.bgCard,
            color: COLORS.text,
            fontSize: "14px",
            outline: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "border-color 0.3s"
          }}
          onFocus={(e) => e.target.style.borderColor = COLORS.cyan}
          onBlur={(e) => e.target.style.borderColor = COLORS.border}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "14px 20px",
            borderRadius: "12px",
            border: "none",
            background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
            color: COLORS.void,
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "'Inter', sans-serif",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = `0 4px 20px ${COLORS.cyanGlow}`;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════════════════════════════════════════════
function LanguageToggle({ lang, setLang }) {
  return (
    <div style={{
      display: "flex",
      background: COLORS.cyanDim,
      borderRadius: "8px",
      padding: "4px",
      border: `1px solid ${COLORS.border}`
    }}>
      <button
        onClick={() => setLang("en")}
        style={{
          padding: "6px 14px",
          borderRadius: "6px",
          border: "none",
          background: lang === "en" ? COLORS.cyan : "transparent",
          color: lang === "en" ? COLORS.void : COLORS.textMuted,
          fontWeight: 600,
          fontSize: "12px",
          cursor: "pointer",
          transition: "all 0.3s",
          fontFamily: "'Inter', sans-serif"
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        style={{
          padding: "6px 14px",
          borderRadius: "6px",
          border: "none",
          background: lang === "es" ? COLORS.gold : "transparent",
          color: lang === "es" ? COLORS.void : COLORS.textMuted,
          fontWeight: 600,
          fontSize: "12px",
          cursor: "pointer",
          transition: "all 0.3s",
          fontFamily: "'Inter', sans-serif"
        }}
      >
        ES
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// INSTAGRAM ICON
// ═══════════════════════════════════════════════════════════════════════════════
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function EmailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6L12 13 2 6" />
    </svg>
  );
}

function CalendarIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FOOTER COMPONENT — TRUST & CREDIBILITY LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function Footer({ lang }) {
  const T = CONTENT[lang].footer;
  const whatsappMsg = encodeURIComponent(T.contact.whatsappMessage);
  
  return (
    <footer style={{
      width: "100%",
      background: `linear-gradient(to bottom, ${COLORS.bg}, ${COLORS.void})`,
      borderTop: `1px solid ${COLORS.border}`,
      padding: "60px 20px 40px",
      marginTop: "80px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Logo and Tagline */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "48px",
          textAlign: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px"
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px"
            }}>
              ⚡
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "24px",
              fontWeight: "700",
              background: `linear-gradient(135deg, ${COLORS.text}, ${COLORS.cyan})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              MachineMind
            </span>
          </div>
          <p style={{
            color: COLORS.textMuted,
            fontSize: "14px",
            maxWidth: "400px"
          }}>
            {T.tagline}
          </p>
        </div>
        
        {/* Main Footer Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          marginBottom: "48px"
        }}>
          {/* Contact Column - Most Important */}
          <div>
            <h4 style={{
              color: COLORS.cyan,
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}>
              {T.contact.title}
            </h4>
            
            {/* WhatsApp - Primary CTA */}
            <a
              href={`${WHATSAPP_LINK}${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                background: "#25D366",
                borderRadius: "8px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "14px",
                marginBottom: "12px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <WhatsAppIcon size={18} />
              {T.contact.whatsapp}
            </a>
            
            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 0",
                color: COLORS.textMuted,
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = COLORS.cyan}
              onMouseOut={(e) => e.currentTarget.style.color = COLORS.textMuted}
            >
              <EmailIcon size={16} />
              {T.contact.email}
            </a>
            
            {/* Schedule Call */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 0",
                color: COLORS.textMuted,
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = COLORS.cyan}
              onMouseOut={(e) => e.currentTarget.style.color = COLORS.textMuted}
            >
              <CalendarIcon size={16} />
              {T.contact.schedule}
            </a>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 style={{
              color: COLORS.cyan,
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}>
              {T.company.title}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: COLORS.textMuted,
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.3s"
                }}
                onMouseOver={(e) => e.currentTarget.style.color = COLORS.cyan}
                onMouseOut={(e) => e.currentTarget.style.color = COLORS.textMuted}
              >
                <InstagramIcon />
                {T.company.instagram}
              </a>
            </div>
          </div>
          
          {/* Trust Column */}
          <div>
            <h4 style={{
              color: COLORS.gold,
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}>
              ✓ {lang === "en" ? "Why Us" : "Por Qué Nosotros"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: COLORS.text,
                fontSize: "14px"
              }}>
                <span style={{ color: COLORS.green }}>✓</span>
                {T.trust.clients}
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: COLORS.text,
                fontSize: "14px"
              }}>
                <span style={{ color: COLORS.green }}>✓</span>
                {T.trust.guarantee}
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: COLORS.text,
                fontSize: "14px"
              }}>
                <span style={{ color: COLORS.green }}>✓</span>
                {T.trust.noContracts}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px"
        }}>
          <div style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <span style={{ color: COLORS.textMuted, fontSize: "13px" }}>
              {T.legal.privacy}
            </span>
            <span style={{ color: COLORS.border }}>|</span>
            <span style={{ color: COLORS.textMuted, fontSize: "13px" }}>
              {T.legal.terms}
            </span>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ color: COLORS.textMuted, fontSize: "13px" }}>
              {T.location}
            </span>
            <span style={{ color: COLORS.textMuted, fontSize: "12px" }}>
              {T.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function Home() {
  const [phase, setPhase] = useState("intro"); // intro, select, locking, generate, blueprint, final
  const [lang, setLang] = useState("en");
  const [selected, setSelected] = useState(null);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [particleIntensity, setParticleIntensity] = useState(1);
  const [scanLine, setScanLine] = useState(0);
  const [screenFlash, setScreenFlash] = useState(false);
  const [screenGlow, setScreenGlow] = useState(null); // null, 'cyan', 'gold'
  const [lockingStage, setLockingStage] = useState(0); // 0-4 stages
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const T = CONTENT[lang];
  
  // Handle locking phase (multi-stage dramatic transition)
  useEffect(() => {
    if (phase !== "locking") return;
    
    // Initial flash
    setScreenFlash(true);
    setScreenGlow('cyan');
    setTimeout(() => setScreenFlash(false), 150);
    
    setParticleIntensity(3);
    setLockingStage(1);
    
    // Stage progression
    const stages = [
      { delay: 800, stage: 2 },   // SCANNING
      { delay: 2000, stage: 3 },  // ANALYZING  
      { delay: 3200, stage: 4 },  // LOCKED
    ];
    
    stages.forEach(({ delay, stage }) => {
      setTimeout(() => {
        setLockingStage(stage);
        if (stage === 4) {
          setScreenFlash(true);
          setScreenGlow('gold');
          setTimeout(() => setScreenFlash(false), 200);
        }
      }, delay);
    });
    
    // Scanning animation
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev + 3) % 100);
    }, 30);
    
    // Transition to generate
    const timer = setTimeout(() => {
      clearInterval(scanInterval);
      setScanLine(0);
      setScreenGlow(null);
      setLockingStage(0);
      setPhase("generate");
    }, 4500);
    
    return () => {
      clearInterval(scanInterval);
      clearTimeout(timer);
    };
  }, [phase]);
  
  // Handle generation phase
  useEffect(() => {
    if (phase !== "generate") return;
    
    // Initial flash entering generation
    setScreenFlash(true);
    setScreenGlow('cyan');
    setTimeout(() => {
      setScreenFlash(false);
      setScreenGlow(null);
    }, 100);
    
    setParticleIntensity(2);
    let i = 0;
    const interval = setInterval(() => {
      if (i < T.generation.logs.length) {
        setLogs(prev => [...prev, T.generation.logs[i]]);
        setProgress((i + 1) / T.generation.logs.length * 100);
        
        // Flash on final log
        if (i === T.generation.logs.length - 1) {
          setScreenGlow('gold');
          setTimeout(() => setScreenGlow(null), 500);
        }
        i++;
      } else {
        clearInterval(interval);
        // Dramatic pause then transition
        setTimeout(() => {
          setScreenFlash(true);
          setScreenGlow('gold');
          setTimeout(() => {
            setScreenFlash(false);
            setPhase("blueprint");
            setParticleIntensity(1.2);
            setTimeout(() => setScreenGlow(null), 300);
          }, 200);
        }, 4000);
      }
    }, 2800);
    
    return () => clearInterval(interval);
  }, [phase, T.generation.logs]);
  
  // Transition to final after blueprint
  useEffect(() => {
    if (phase !== "blueprint") return;
    const timer = setTimeout(() => setPhase("final"), 50000);
    return () => clearTimeout(timer);
  }, [phase]);
  
  function handleSelect(vertical) {
    setSelected(vertical);
    setLogs([]);
    setProgress(0);
    setPhase("locking"); // Go to dramatic locking transition first
  }
  
  function handleBack() {
    if (phase === "locking" || phase === "generate" || phase === "blueprint") {
      setPhase("select");
      setSelected(null);
      setLogs([]);
      setProgress(0);
      setParticleIntensity(1);
    }
  }
  
  function handleLogoError(e) {
    e.target.style.display = "none";
    if (e.target.nextSibling) e.target.nextSibling.style.display = "flex";
  }
  
  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.void,
      color: COLORS.text,
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Particle Field */}
      <ParticleField intensity={particleIntensity} />
      
      {/* Screen Flash Effect */}
      {screenFlash && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: screenGlow === 'gold' 
            ? `radial-gradient(circle, ${COLORS.goldGlow}40, transparent 70%)`
            : `radial-gradient(circle, ${COLORS.cyanGlow}40, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 9999,
          animation: "flash 0.15s ease-out"
        }} />
      )}
      
      {/* Screen Glow Border Effect */}
      {screenGlow && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 100,
          boxShadow: screenGlow === 'gold'
            ? `inset 0 0 100px ${COLORS.goldGlow}30, inset 0 0 200px ${COLORS.goldGlow}15`
            : `inset 0 0 100px ${COLORS.cyanGlow}30, inset 0 0 200px ${COLORS.cyanGlow}15`,
          transition: "box-shadow 0.3s ease"
        }} />
      )}
      
      {/* Cinematic Intro */}
      {phase === "intro" && (
        <CinematicIntro 
          onComplete={() => setPhase("select")} 
          lang={lang}
        />
      )}
      
      {/* Back Button */}
      {(phase === "locking" || phase === "generate" || phase === "blueprint") && (
        <button
          onClick={handleBack}
          style={{
            position: "fixed",
            top: "24px",
            left: "24px",
            padding: "12px 20px",
            borderRadius: "10px",
            border: `1px solid ${COLORS.border}`,
            background: COLORS.bgCard,
            color: COLORS.text,
            cursor: "pointer",
            zIndex: 100,
            fontSize: "14px",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s"
          }}
          onMouseOver={(e) => e.target.style.borderColor = COLORS.cyan}
          onMouseOut={(e) => e.target.style.borderColor = COLORS.border}
        >
          ← Back
        </button>
      )}
      
      {/* Main Content */}
      {phase !== "intro" && (
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}>
          {/* Header */}
          <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img 
                src="/logo.png" 
                alt="MachineMind" 
                style={{ height: "50px" }} 
                onError={handleLogoError}
              />
              <div style={{ display: "none", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: COLORS.void,
                  fontSize: "18px",
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>M</div>
                <span style={{ fontWeight: 600, fontSize: "16px" }}>MACHINEMIND</span>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <LanguageToggle lang={lang} setLang={setLang} />
              <a 
                href={INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: COLORS.textMuted, transition: "color 0.3s" }}
                onMouseOver={(e) => e.target.style.color = COLORS.cyan}
                onMouseOut={(e) => e.target.style.color = COLORS.textMuted}
              >
                <InstagramIcon />
              </a>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "8px", 
                fontSize: "12px", 
                color: COLORS.green,
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <span style={{ 
                  width: "8px", 
                  height: "8px", 
                  borderRadius: "50%", 
                  background: COLORS.green,
                  animation: "pulse 2s infinite"
                }} />
                {phase === "final" ? T.header.ready : T.header.online}
              </div>
            </div>
          </header>
          
          {/* Phase: Select */}
          {phase === "select" && (
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}>
              <div style={{ 
                fontSize: "11px", 
                color: COLORS.gold, 
                marginBottom: "16px",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "3px",
                opacity: 0,
                animation: "fadeSlideIn 0.6s 0.2s forwards"
              }}>
                {T.select.subtitle}
              </div>
              
              <h1 style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                marginBottom: "16px",
                fontFamily: "'Space Grotesk', sans-serif",
                opacity: 0,
                animation: "fadeSlideIn 0.6s 0.4s forwards"
              }}>
                <Typewriter text={T.select.title} speed={35} delay={600} />
              </h1>
              
              <p style={{
                fontSize: "16px",
                color: COLORS.textMuted,
                marginBottom: "48px",
                opacity: 0,
                animation: "fadeSlideIn 0.6s 0.8s forwards"
              }}>
                <Typewriter text={T.select.description} speed={25} delay={1200} />
              </p>
              
              {/* Vertical Cards */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
                width: "100%",
                maxWidth: "900px"
              }}>
                {T.verticals.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => handleSelect(v)}
                    onMouseEnter={() => setHoveredCard(v.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      background: hoveredCard === v.id 
                        ? `linear-gradient(135deg, ${COLORS.bgCard}, rgba(34, 211, 238, 0.1))`
                        : COLORS.bgCard,
                      border: `2px solid ${hoveredCard === v.id ? COLORS.cyan : COLORS.border}`,
                      borderRadius: "20px",
                      padding: "40px 28px",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      opacity: 0,
                      animation: `fadeSlideIn 0.8s ${1600 + i * 200}ms forwards`,
                      transform: hoveredCard === v.id ? "translateY(-12px) scale(1.05)" : "translateY(0) scale(1)",
                      boxShadow: hoveredCard === v.id 
                        ? `0 25px 50px ${COLORS.cyanDim}, 0 0 40px ${COLORS.cyanGlow}30, inset 0 1px 0 rgba(255,255,255,0.1)`
                        : "0 4px 20px rgba(0,0,0,0.3)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    {/* Hover glow effect */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: hoveredCard === v.id 
                        ? `radial-gradient(circle at center, ${COLORS.cyanGlow}15, transparent 70%)`
                        : "transparent",
                      transition: "background 0.5s ease",
                      pointerEvents: "none"
                    }} />
                    
                    {/* Icon with glow */}
                    <div style={{ 
                      fontSize: "64px", 
                      marginBottom: "20px",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: hoveredCard === v.id ? "scale(1.15)" : "scale(1)",
                      filter: hoveredCard === v.id ? `drop-shadow(0 0 20px ${COLORS.cyanGlow})` : "none",
                      position: "relative",
                      zIndex: 1
                    }}>
                      {v.icon}
                    </div>
                    
                    {/* Label */}
                    <div style={{ 
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: hoveredCard === v.id ? COLORS.cyan : COLORS.text,
                      transition: "color 0.3s ease",
                      position: "relative",
                      zIndex: 1,
                      textShadow: hoveredCard === v.id ? `0 0 20px ${COLORS.cyanGlow}` : "none"
                    }}>
                      {v.label}
                    </div>
                    
                    {/* Subtle indicator */}
                    <div style={{
                      marginTop: "16px",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: hoveredCard === v.id ? COLORS.cyan : COLORS.textMuted,
                      letterSpacing: "2px",
                      opacity: hoveredCard === v.id ? 1 : 0.5,
                      transition: "all 0.3s ease",
                      position: "relative",
                      zIndex: 1
                    }}>
                      {hoveredCard === v.id 
                        ? (lang === "es" ? "◈ CLIC PARA GENERAR" : "◈ CLICK TO GENERATE")
                        : (lang === "es" ? "SELECCIONAR" : "SELECT")
                      }
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Live Stats */}
              <div style={{
                display: "flex",
                gap: "40px",
                marginTop: "60px",
                opacity: 0,
                animation: "fadeSlideIn 0.6s 2.5s forwards"
              }}>
                {Object.values(T.select.stats).map((stat, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ 
                      fontSize: "13px", 
                      color: COLORS.cyan,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      {stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Phase: Locking - Multi-Stage Dramatic Transition */}
          {phase === "locking" && selected && (
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Scanning Lines Effect */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none"
              }}>
                {/* Primary scan line */}
                <div style={{
                  position: "absolute",
                  top: `${scanLine}%`,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, ${COLORS.cyan}, transparent)`,
                  boxShadow: `0 0 30px ${COLORS.cyanGlow}, 0 0 60px ${COLORS.cyanGlow}, 0 0 90px ${COLORS.cyanGlow}50`,
                  transition: "top 0.03s linear"
                }} />
                {/* Secondary scan line */}
                <div style={{
                  position: "absolute",
                  top: `${(scanLine + 33) % 100}%`,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
                  boxShadow: `0 0 20px ${COLORS.goldGlow}`,
                  opacity: 0.6
                }} />
                {/* Tertiary scan line */}
                <div style={{
                  position: "absolute",
                  top: `${(scanLine + 66) % 100}%`,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, ${COLORS.cyan}80, transparent)`,
                  opacity: 0.4
                }} />
              </div>
              
              {/* Targeting Grid Overlay */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "400px",
                border: `2px solid ${lockingStage >= 4 ? COLORS.gold : COLORS.cyan}40`,
                borderRadius: "50%",
                opacity: 0.3,
                animation: lockingStage >= 4 ? "none" : "pulse 2s infinite"
              }} />
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "300px",
                height: "300px",
                border: `1px solid ${lockingStage >= 4 ? COLORS.gold : COLORS.cyan}30`,
                borderRadius: "50%",
                opacity: 0.2
              }} />
              
              {/* Center Content */}
              <div style={{
                textAlign: "center",
                position: "relative",
                zIndex: 10
              }}>
                {/* Giant Pulsing Icon with Targeting */}
                <div style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: "40px"
                }}>
                  <div style={{
                    fontSize: "140px",
                    filter: lockingStage >= 4 
                      ? `drop-shadow(0 0 60px ${COLORS.goldGlow})`
                      : `drop-shadow(0 0 50px ${COLORS.cyanGlow})`,
                    animation: lockingStage >= 4 ? "none" : "pulse 1.2s infinite",
                    transition: "filter 0.5s ease"
                  }}>
                    {selected.icon}
                  </div>
                  
                  {/* Targeting brackets around icon */}
                  <div style={{ 
                    position: "absolute", 
                    top: "-20px", 
                    left: "-30px", 
                    fontSize: "30px",
                    color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan,
                    fontWeight: 100,
                    transition: "color 0.5s ease"
                  }}>╔</div>
                  <div style={{ 
                    position: "absolute", 
                    top: "-20px", 
                    right: "-30px", 
                    fontSize: "30px",
                    color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan,
                    fontWeight: 100,
                    transition: "color 0.5s ease"
                  }}>╗</div>
                  <div style={{ 
                    position: "absolute", 
                    bottom: "-20px", 
                    left: "-30px", 
                    fontSize: "30px",
                    color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan,
                    fontWeight: 100,
                    transition: "color 0.5s ease"
                  }}>╚</div>
                  <div style={{ 
                    position: "absolute", 
                    bottom: "-20px", 
                    right: "-30px", 
                    fontSize: "30px",
                    color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan,
                    fontWeight: 100,
                    transition: "color 0.5s ease"
                  }}>╝</div>
                </div>
                
                {/* Stage-Based Status Text */}
                <div style={{
                  fontSize: "13px",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "4px",
                  marginBottom: "12px",
                  color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan,
                  textShadow: lockingStage >= 4 
                    ? `0 0 30px ${COLORS.goldGlow}`
                    : `0 0 20px ${COLORS.cyanGlow}`,
                  transition: "all 0.5s ease"
                }}>
                  {lockingStage === 1 && (lang === "es" ? "◈ INDUSTRIA DETECTADA ◈" : "◈ INDUSTRY DETECTED ◈")}
                  {lockingStage === 2 && (lang === "es" ? "◈ ESCANEANDO PARÁMETROS ◈" : "◈ SCANNING PARAMETERS ◈")}
                  {lockingStage === 3 && (lang === "es" ? "◈ CARGANDO MATRIZ IA ◈" : "◈ LOADING AI MATRIX ◈")}
                  {lockingStage === 4 && (lang === "es" ? "✦ SISTEMA BLOQUEADO ✦" : "✦ SYSTEM LOCKED ✦")}
                </div>
                
                {/* Industry Label */}
                <div style={{
                  fontSize: "32px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  marginBottom: "32px",
                  color: lockingStage >= 4 ? COLORS.gold : COLORS.text,
                  textShadow: lockingStage >= 4 ? `0 0 40px ${COLORS.goldGlow}` : "none",
                  transition: "all 0.5s ease"
                }}>
                  {selected.label}
                </div>
                
                {/* Multi-stage Progress Bar */}
                <div style={{
                  width: "350px",
                  margin: "0 auto"
                }}>
                  {/* Progress bar container */}
                  <div style={{
                    height: "6px",
                    background: COLORS.bgCard,
                    borderRadius: "3px",
                    overflow: "hidden",
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: `inset 0 2px 4px rgba(0,0,0,0.3)`
                  }}>
                    <div style={{
                      width: lockingStage >= 4 ? "100%" : `${scanLine}%`,
                      height: "100%",
                      background: lockingStage >= 4 
                        ? `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold}, ${COLORS.gold})`
                        : `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.cyanGlow})`,
                      boxShadow: lockingStage >= 4 
                        ? `0 0 20px ${COLORS.goldGlow}`
                        : `0 0 15px ${COLORS.cyanGlow}`,
                      transition: lockingStage >= 4 ? "all 0.5s ease" : "width 0.03s linear"
                    }} />
                  </div>
                  
                  {/* Stage indicators */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "12px",
                    fontSize: "10px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: COLORS.textMuted,
                    letterSpacing: "1px"
                  }}>
                    <span style={{ color: lockingStage >= 1 ? COLORS.cyan : COLORS.textMuted }}>DETECT</span>
                    <span style={{ color: lockingStage >= 2 ? COLORS.cyan : COLORS.textMuted }}>SCAN</span>
                    <span style={{ color: lockingStage >= 3 ? COLORS.cyan : COLORS.textMuted }}>LOAD</span>
                    <span style={{ color: lockingStage >= 4 ? COLORS.gold : COLORS.textMuted }}>LOCKED</span>
                  </div>
                </div>
                
                {/* Sub-status */}
                <div style={{
                  fontSize: "11px",
                  color: COLORS.textMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                  marginTop: "24px",
                  letterSpacing: "2px",
                  opacity: lockingStage >= 4 ? 0 : 1,
                  transition: "opacity 0.5s ease"
                }}>
                  {lang === "es" 
                    ? "PREPARANDO ARQUITECTURA PERSONALIZADA..." 
                    : "PREPARING CUSTOM ARCHITECTURE..."}
                </div>
              </div>
              
              {/* Corner Brackets - Animated */}
              <div style={{ 
                position: "absolute", 
                top: "15%", 
                left: "10%", 
                color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan, 
                opacity: 0.4, 
                fontSize: "50px",
                transition: "color 0.5s ease"
              }}>┌</div>
              <div style={{ 
                position: "absolute", 
                top: "15%", 
                right: "10%", 
                color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan, 
                opacity: 0.4, 
                fontSize: "50px",
                transition: "color 0.5s ease"
              }}>┐</div>
              <div style={{ 
                position: "absolute", 
                bottom: "15%", 
                left: "10%", 
                color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan, 
                opacity: 0.4, 
                fontSize: "50px",
                transition: "color 0.5s ease"
              }}>└</div>
              <div style={{ 
                position: "absolute", 
                bottom: "15%", 
                right: "10%", 
                color: lockingStage >= 4 ? COLORS.gold : COLORS.cyan, 
                opacity: 0.4, 
                fontSize: "50px",
                transition: "color 0.5s ease"
              }}>┘</div>
              
              {/* Extra decorative elements */}
              <div style={{
                position: "absolute",
                top: "25%",
                left: "5%",
                fontSize: "10px",
                fontFamily: "'JetBrains Mono', monospace",
                color: COLORS.cyan,
                opacity: 0.3,
                transform: "rotate(-90deg)"
              }}>
                SYS.LOCK.ACTIVE
              </div>
              <div style={{
                position: "absolute",
                bottom: "25%",
                right: "5%",
                fontSize: "10px",
                fontFamily: "'JetBrains Mono', monospace",
                color: COLORS.cyan,
                opacity: 0.3,
                transform: "rotate(90deg)"
              }}>
                AI.MATRIX.LOAD
              </div>
            </div>
          )}
          
          {/* Phase: Generate */}
          {phase === "generate" && (
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{ width: "100%", maxWidth: "500px" }}>
                {/* Header */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "20px", 
                  marginBottom: "40px" 
                }}>
                  <span style={{ 
                    fontSize: "52px",
                    filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))",
                    animation: "pulse 2s infinite"
                  }}>{selected?.icon}</span>
                  <div>
                    <div style={{ 
                      fontSize: "11px", 
                      color: COLORS.cyan,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "2px",
                      marginBottom: "4px",
                      textShadow: `0 0 10px ${COLORS.cyanGlow}`
                    }}>
                      {T.generation.generating}
                    </div>
                    <div style={{ 
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "24px",
                      fontWeight: 600
                    }}>
                      {selected?.label}
                    </div>
                  </div>
                </div>
                
                {/* Progress */}
                <GlowingProgress progress={progress} label={T.generation.label} />
                
                {/* Terminal Logs */}
                <div style={{
                  background: "rgba(0,0,0,0.7)",
                  borderRadius: "12px",
                  padding: "24px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "13px",
                  maxHeight: "280px",
                  overflow: "auto",
                  border: `1px solid ${COLORS.cyan}`,
                  boxShadow: `0 0 30px ${COLORS.cyanGlow}, inset 0 0 60px rgba(0, 212, 255, 0.03)`
                }}>
                  {logs.map((log, i) => {
                    if (!log) return null;
                    const hasGold = typeof log === 'string' && log.includes("✦");
                    return (
                    <div key={i} style={{
                      color: hasGold ? COLORS.gold : (i === logs.length - 1 ? COLORS.cyan : COLORS.textMuted),
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "all 0.5s ease",
                      opacity: 0,
                      animation: "fadeSlideIn 0.6s forwards",
                      textShadow: hasGold ? `0 0 10px ${COLORS.goldGlow}` : "none"
                    }}>
                      <span style={{ color: COLORS.gold }}>▸</span>
                      {log}
                      {i === logs.length - 1 && !hasGold && (
                        <span style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: COLORS.cyan,
                          animation: "pulse 1s infinite",
                          boxShadow: `0 0 10px ${COLORS.cyanGlow}`
                        }} />
                      )}
                    </div>
                  )})}
                </div>
              </div>
            </div>
          )}
          
          {/* Phase: Blueprint - THE CINEMATIC MOMENT */}
          {phase === "blueprint" && selected && (
            <BlueprintReveal 
              selected={selected}
              T={T}
              lang={lang}
              calLink={CAL_LINK}
            />
          )}
          
          {/* Phase: Final */}
          {phase === "final" && (
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}>
              {/* Success Icon */}
              <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "40px",
                boxShadow: `0 0 80px ${COLORS.cyanGlow}`,
                animation: "fadeSlideIn 0.8s forwards",
                fontSize: "48px"
              }}>
                ✓
              </div>
              
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 700,
                marginBottom: "20px"
              }}>
                <Typewriter text={T.final.title} speed={45} delay={500} />
              </h2>
              
              <p style={{
                fontSize: "17px",
                color: COLORS.textMuted,
                maxWidth: "500px",
                marginBottom: "48px",
                lineHeight: 1.7,
                opacity: 0,
                animation: "fadeSlideIn 0.6s 2s forwards"
              }}>
                {T.final.subtitle}
              </p>
              
              {/* CTAs */}
              <div style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center"
              }}>
                <button
                  onClick={() => window.open(CAL_LINK, "_blank")}
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
                    border: "none",
                    borderRadius: "12px",
                    padding: "18px 40px",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: COLORS.void,
                    cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                    opacity: 0,
                    animation: "fadeSlideIn 0.6s 2.5s forwards",
                    transition: "transform 0.3s, box-shadow 0.3s"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = `0 10px 30px ${COLORS.cyanGlow}`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  {T.final.cta}
                </button>
                
                <button
                  onClick={() => {
                    setPhase("select");
                    setSelected(null);
                  }}
                  style={{
                    background: "transparent",
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "12px",
                    padding: "18px 32px",
                    fontSize: "15px",
                    color: COLORS.text,
                    cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                    opacity: 0,
                    animation: "fadeSlideIn 0.6s 2.7s forwards",
                    transition: "all 0.3s"
                  }}
                  onMouseOver={(e) => e.target.style.borderColor = COLORS.cyan}
                  onMouseOut={(e) => e.target.style.borderColor = COLORS.border}
                >
                  {T.final.ctaAlt}
                </button>
              </div>
              
              <p style={{
                marginTop: "24px",
                fontSize: "13px",
                color: COLORS.textMuted,
                opacity: 0,
                animation: "fadeSlideIn 0.5s 3s forwards"
              }}>
                {T.final.footer}
              </p>
              
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "40px",
                  color: COLORS.textMuted,
                  fontSize: "14px",
                  textDecoration: "none",
                  opacity: 0,
                  animation: "fadeSlideIn 0.5s 3.5s forwards",
                  transition: "color 0.3s"
                }}
                onMouseOver={(e) => e.target.style.color = COLORS.cyan}
                onMouseOut={(e) => e.target.style.color = COLORS.textMuted}
              >
                @machinemindconsulting
              </a>
            </div>
          )}
        </div>
      )}
      
      {/* Footer - Only show after intro */}
      {phase !== "intro" && (
        <Footer lang={lang} />
      )}
      
      {/* Sofia Chat */}
      <SofiaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} lang={lang} />
      
      {/* Chat Toggle Button - Sofia */}
      {phase !== "intro" && (
        <>
          <button
            onClick={() => setChatOpen(!chatOpen)}
            style={{
              position: "fixed",
              bottom: "24px",
              right: "24px",
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              border: "none",
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`,
              boxShadow: `0 0 40px ${COLORS.cyanGlow}`,
              cursor: "pointer",
              fontSize: "30px",
              zIndex: 999,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: chatOpen ? "rotate(90deg)" : "rotate(0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {chatOpen ? "×" : "💬"}
          </button>
          
          {!chatOpen && (
            <div style={{
              position: "fixed",
              bottom: "80px",
              right: "24px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: COLORS.green,
              border: `2px solid ${COLORS.void}`,
              zIndex: 1000,
              animation: "pulse 2s infinite"
            }} />
          )}
          
          {/* WhatsApp Direct Button - Secondary CTA */}
          <a
            href={`${WHATSAPP_LINK}${encodeURIComponent(CONTENT[lang].footer.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: "24px",
              left: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 20px",
              background: "#25D366",
              borderRadius: "50px",
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
              zIndex: 999,
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 30px rgba(37, 211, 102, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
            }}
          >
            <WhatsAppIcon size={20} />
            <span style={{ display: "none", "@media (minWidth: 640px)": { display: "inline" } }}>
              {CONTENT[lang].whatsappCta.text}
            </span>
          </a>
        </>
      )}
      
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: ${COLORS.void};
        }
        
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          75%, 100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes spin {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 200% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
        
        @keyframes flash {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${COLORS.bg};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${COLORS.cyan};
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.cyanBright};
        }
        
        ::selection {
          background: ${COLORS.cyan};
          color: ${COLORS.void};
        }
        
        a:hover {
          color: ${COLORS.cyan} !important;
        }
      `}</style>
    </div>
  );
}
