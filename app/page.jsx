"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// MACHINEMIND v6.0 | TRANSCENDENCE EDITION
// Cinematic Intro + ANIMA Experience + Full Bilingual Support
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
  void: "#030508",
  bg: "#0a0d12",
  bgCard: "#0f1318",
  bgElevated: "#141920",
  cyan: "#00d4ff",
  cyanDim: "rgba(0, 212, 255, 0.08)",
  cyanGlow: "rgba(0, 212, 255, 0.4)",
  cyanBright: "#00ffff",
  gold: "#d4a420",
  goldDim: "rgba(212, 164, 32, 0.1)",
  goldGlow: "rgba(212, 164, 32, 0.3)",
  neural: "#6366f1",
  neuralDim: "rgba(99, 102, 241, 0.1)",
  pulse: "#10b981",
  pulseDim: "rgba(16, 185, 129, 0.15)",
  danger: "#ef4444",
  text: "#e8edf5",
  textMuted: "#6b7280",
  textDim: "#4b5563",
  border: "rgba(0, 212, 255, 0.15)",
  borderGold: "rgba(212, 164, 32, 0.2)",
  gradient: "linear-gradient(135deg, #00d4ff 0%, #6366f1 50%, #d4a420 100%)"
};

const LINKS = {
  cal: "https://cal.com/machine-mind/machinemind-strategy-session",
  whatsapp: "https://wa.me/19544451638",
  instagram: "https://www.instagram.com/machinemindconsulting"
};

// ═══════════════════════════════════════════════════════════════════════════════
// BILINGUAL TEXT - Complete translations
// ═══════════════════════════════════════════════════════════════════════════════

const TEXT_EN = {
  brand: "MACHINEMIND",
  initializing: "INITIALIZING SYSTEMS",
  introHeadline: "THE INFRASTRUCTURE BEHIND",
  introSubheadline: "BUSINESSES THAT NEVER SLEEP",
  loading: "LOADING EXPERIENCE...",
  skipIntro: "SKIP INTRO →",
  selectVertical: "SELECT YOUR VERTICAL",
  selectSubtitle: "We'll generate a custom AI infrastructure blueprint",
  hospitality: "Hospitality & Hotels",
  restaurant: "Restaurants & Clubs",
  tours: "Tours & Experiences",
  services: "Professional Services",
  animaLabel: "ANIMA Intelligence",
  premiumTier: "PREMIUM TIER",
  generatingFor: "GENERATING BLUEPRINT FOR",
  systemInit: "SYSTEM INITIALIZATION",
  blueprintGenerated: "✦ BLUEPRINT GENERATED ✦",
  aiInfrastructure: "AI Infrastructure",
  infrastructureReady: "Your Infrastructure is Ready",
  finalSubtitle: "This runs 24/7 while you sleep. Zero missed inquiries. Zero lost revenue.",
  scheduleYourBuild: "Schedule Your Build →",
  exploreAnother: "← Explore Another",
  noCommitment: "15-min call • No commitment • See what we'll build",
  back: "← Back",
  online: "ONLINE",
  ready: "READY",
  // ANIMA Section
  animaEdition: "ANIMA EDITION",
  animaBadge: "ANIMA INTELLIGENT SYSTEMS",
  animaHeroHeadline: "We don't install chatbots. We install nervous systems.",
  animaHeroSubtitle: "ANIMA transforms your hospitality business into a 24/7 revenue-capturing, customer-learning, competitor-outsmarting operation.",
  animaHeroHighlight: "Every deployment makes every other deployment smarter.",
  animaCta1: "Get Your Diagnostic →",
  animaCta2: "See Sample Report",
  animaNavWhy: "Why ANIMA",
  animaNavPricing: "Pricing",
  animaNavMoat: "Our Moat",
  animaNavIntelligence: "Intelligence",
  animaNavBook: "Book Strategy Call",
  animaStatsResponse: "Response Time",
  animaStatsConversion: "Conversion Rate",
  animaStatsAfterHours: "After-Hours Captures",
  animaStatsRoi: "ROI in 60 Days",
  animaProblemLabel: "THE PROBLEM",
  animaProblemHeadline1: "Your competition is responding in",
  animaProblemHeadline2: "4+ hours",
  animaProblemHeadline3: "78% of customers book with whoever responds first.",
  animaCompetitorsLabel: "WHAT COMPETITORS INSTALL",
  animaCompetitorsTitle: "A Chatbot",
  animaWeInstallLabel: "WHAT WE INSTALL",
  animaWeInstallTitle: "A Nervous System",
  competitorList: ["Static FAQ responses", "No learning capability", "No intelligence reports", "Generic voice and tone", "No network learning", "One-time setup, zero evolution", "Race to the bottom on price"],
  nervousSystemList: ["Learns from every interaction", "Weekly intelligence reports", "Business blind spot detection", "Your voice, your brand, your policies", "Network learning across all deployments", "Gets smarter every week", "Premium positioning, premium results"],
  animaTiersLabel: "CHOOSE YOUR SYSTEM",
  animaTiersHeadline: "Three Levels of",
  animaTiersHighlight: "Intelligence",
  animaTiersSubtitle: "Start where you are. Upgrade when you're ready. Each tier builds on the last.",
  animaOneTime: "one-time",
  animaSetup: "setup +",
  animaMonth: "/month",
  animaIdealFor: "IDEAL FOR",
  animaGetStarted: "Get Started with ANIMA →",
  animaLearnMore: "Learn More",
  animaMoatLabel: "THE UNCOPYABLE ADVANTAGE",
  animaMoatHeadline: "Three Things",
  animaMoatHighlight: "No One Can Replicate",
  animaMoatSubtitle: "These aren't features. They're structural advantages that compound over time.",
  animaLockIn: "THE LOCK-IN EFFECT",
  animaIntelLabel: "WEEKLY INTELLIGENCE REPORT",
  animaIntelHeadline: "This Is What You've Been",
  animaIntelHighlight: "Missing",
  animaIntelSubtitle: "Every Monday. Delivered to your WhatsApp. Insights that change how you run your business.",
  animaReportTitle: "ANIMA — Weekly Summary",
  animaImportant: "🔥 MOST IMPORTANT THIS WEEK",
  animaInsightsLabel: "💡 KEY INSIGHTS",
  animaActionLabel: "🎯 ACTION OF THE WEEK",
  animaStartIntel: "Start Getting Intelligence →",
  animaRoiLabel: "ROI CALCULATOR",
  animaRoiHeadline: "Calculate Your",
  animaRoiHighlight: "Revenue Recovery",
  animaInquiries: "Inquiries per week",
  animaTicket: "Average ticket",
  animaNoShowRate: "Current no-show rate",
  animaRecovered: "Recovered bookings/month",
  animaAvoided: "Avoided no-shows/month",
  animaMonthlyValue: "MONTHLY VALUE RECOVERED",
  animaRoiResult: "ROI:",
  animaCtaHeadline: "Your Business Deserves a",
  animaCtaHighlight: "Nervous System",
  animaCtaSubtitle1: "Stop responding. Start understanding.",
  animaCtaSubtitle2: "The free diagnostic alone will show you things about your business you never knew.",
  animaCtaBook: "Book Your Free Diagnostic →",
  animaCtaWhatsApp: "💬 Message Us on WhatsApp",
  animaCtaNote: "No commitment required. No credit card. Just 45 minutes that will change how you see your business.",
  animaFooterVersion: "v6.0 TRANSCENDENCE | Built in Cartagena 🇨🇴",
  animaFooterBook: "Book a Call",
  animaFooterCopyright: "© 2026 MachineMind. ANIMA Intelligent Systems."
};

const TEXT_ES = {
  brand: "MACHINEMIND",
  initializing: "INICIALIZANDO SISTEMAS",
  introHeadline: "LA INFRAESTRUCTURA DETRÁS DE",
  introSubheadline: "NEGOCIOS QUE NUNCA DUERMEN",
  loading: "CARGANDO EXPERIENCIA...",
  skipIntro: "SALTAR INTRO →",
  selectVertical: "SELECCIONA TU VERTICAL",
  selectSubtitle: "Generaremos un blueprint de infraestructura IA personalizado",
  hospitality: "Hoteles y Hospitalidad",
  restaurant: "Restaurantes y Clubes",
  tours: "Tours y Experiencias",
  services: "Servicios Profesionales",
  animaLabel: "Inteligencia ANIMA",
  premiumTier: "NIVEL PREMIUM",
  generatingFor: "GENERANDO BLUEPRINT PARA",
  systemInit: "INICIALIZACIÓN DEL SISTEMA",
  blueprintGenerated: "✦ BLUEPRINT GENERADO ✦",
  aiInfrastructure: "Infraestructura IA",
  infrastructureReady: "Tu Infraestructura Está Lista",
  finalSubtitle: "Funciona 24/7 mientras duermes. Cero consultas perdidas. Cero ingresos perdidos.",
  scheduleYourBuild: "Agenda Tu Construcción →",
  exploreAnother: "← Explorar Otro",
  noCommitment: "Llamada de 15 min • Sin compromiso • Ve lo que construiremos",
  back: "← Volver",
  online: "EN LÍNEA",
  ready: "LISTO",
  // ANIMA Section
  animaEdition: "EDICIÓN ANIMA",
  animaBadge: "SISTEMAS INTELIGENTES ANIMA",
  animaHeroHeadline: "No instalamos chatbots. Instalamos sistemas nerviosos.",
  animaHeroSubtitle: "ANIMA transforma tu negocio de hospitalidad en una operación 24/7 que captura ingresos, aprende de clientes y supera a la competencia.",
  animaHeroHighlight: "Cada implementación hace que todas las demás sean más inteligentes.",
  animaCta1: "Obtén Tu Diagnóstico →",
  animaCta2: "Ver Reporte de Ejemplo",
  animaNavWhy: "Por Qué ANIMA",
  animaNavPricing: "Precios",
  animaNavMoat: "Nuestra Ventaja",
  animaNavIntelligence: "Inteligencia",
  animaNavBook: "Agendar Llamada",
  animaStatsResponse: "Tiempo de Respuesta",
  animaStatsConversion: "Tasa de Conversión",
  animaStatsAfterHours: "Capturas Fuera de Horario",
  animaStatsRoi: "ROI en 60 Días",
  animaProblemLabel: "EL PROBLEMA",
  animaProblemHeadline1: "Tu competencia responde en",
  animaProblemHeadline2: "4+ horas",
  animaProblemHeadline3: "78% de los clientes reservan con quien responde primero.",
  animaCompetitorsLabel: "LO QUE INSTALAN LOS COMPETIDORES",
  animaCompetitorsTitle: "Un Chatbot",
  animaWeInstallLabel: "LO QUE NOSOTROS INSTALAMOS",
  animaWeInstallTitle: "Un Sistema Nervioso",
  competitorList: ["Respuestas FAQ estáticas", "Sin capacidad de aprendizaje", "Sin informes de inteligencia", "Voz y tono genéricos", "Sin aprendizaje de red", "Configuración única, cero evolución", "Carrera hacia el fondo en precio"],
  nervousSystemList: ["Aprende de cada interacción", "Informes de inteligencia semanales", "Detección de puntos ciegos del negocio", "Tu voz, tu marca, tus políticas", "Aprendizaje de red en todas las implementaciones", "Se vuelve más inteligente cada semana", "Posicionamiento premium, resultados premium"],
  animaTiersLabel: "ELIGE TU SISTEMA",
  animaTiersHeadline: "Tres Niveles de",
  animaTiersHighlight: "Inteligencia",
  animaTiersSubtitle: "Empieza donde estés. Mejora cuando estés listo. Cada nivel construye sobre el anterior.",
  animaOneTime: "único",
  animaSetup: "setup +",
  animaMonth: "/mes",
  animaIdealFor: "IDEAL PARA",
  animaGetStarted: "Comenzar con ANIMA →",
  animaLearnMore: "Saber Más",
  animaMoatLabel: "LA VENTAJA INCOPIABLE",
  animaMoatHeadline: "Tres Cosas Que",
  animaMoatHighlight: "Nadie Puede Replicar",
  animaMoatSubtitle: "Estas no son características. Son ventajas estructurales que se acumulan con el tiempo.",
  animaLockIn: "EL EFECTO DE RETENCIÓN",
  animaIntelLabel: "REPORTE DE INTELIGENCIA SEMANAL",
  animaIntelHeadline: "Esto Es Lo Que Te Has Estado",
  animaIntelHighlight: "Perdiendo",
  animaIntelSubtitle: "Cada lunes. Entregado a tu WhatsApp. Insights que cambian cómo manejas tu negocio.",
  animaReportTitle: "ANIMA — Resumen Semanal",
  animaImportant: "🔥 LO MÁS IMPORTANTE ESTA SEMANA",
  animaInsightsLabel: "💡 INSIGHTS CLAVE",
  animaActionLabel: "🎯 ACCIÓN DE LA SEMANA",
  animaStartIntel: "Empieza a Recibir Inteligencia →",
  animaRoiLabel: "CALCULADORA DE ROI",
  animaRoiHeadline: "Calcula Tu",
  animaRoiHighlight: "Recuperación de Ingresos",
  animaInquiries: "Consultas por semana",
  animaTicket: "Ticket promedio",
  animaNoShowRate: "Tasa actual de no-shows",
  animaRecovered: "Reservas recuperadas/mes",
  animaAvoided: "No-shows evitados/mes",
  animaMonthlyValue: "VALOR MENSUAL RECUPERADO",
  animaRoiResult: "ROI:",
  animaCtaHeadline: "Tu Negocio Merece un",
  animaCtaHighlight: "Sistema Nervioso",
  animaCtaSubtitle1: "Deja de responder. Empieza a entender.",
  animaCtaSubtitle2: "El diagnóstico gratuito solo te mostrará cosas de tu negocio que nunca supiste.",
  animaCtaBook: "Agenda Tu Diagnóstico Gratis →",
  animaCtaWhatsApp: "💬 Escríbenos en WhatsApp",
  animaCtaNote: "Sin compromiso requerido. Sin tarjeta de crédito. Solo 45 minutos que cambiarán cómo ves tu negocio.",
  animaFooterVersion: "v6.0 TRANSCENDENCE | Hecho en Cartagena 🇨🇴",
  animaFooterBook: "Agendar Llamada",
  animaFooterCopyright: "© 2026 MachineMind. Sistemas Inteligentes ANIMA."
};

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA KNOWLEDGE BASE
// ═══════════════════════════════════════════════════════════════════════════════

const ANIMA_KNOWLEDGE = {
  tiers: {
    nerve: {
      name: "THE NERVE",
      tagline: "Instant Response Infrastructure",
      description: "The foundation — an AI responder that handles inquiries 24/7 with your business's voice and knowledge.",
      price: "$490",
      priceType: "one-time",
      features: [
        "24/7 WhatsApp AI responder",
        "Trained on your menu, services, policies",
        "Multi-language support (ES/EN/PT)",
        "Basic booking assistance",
        "Smart escalation to humans"
      ],
      ideal: "Perfect for businesses just starting to automate"
    },
    brain: {
      name: "THE BRAIN",
      tagline: "Intelligence-Driven Operations",
      description: "ANIMA's full power — not just response, but intelligence.",
      setup: "$750",
      monthly: "$1,500",
      features: [
        "Everything in The Nerve, plus:",
        "Weekly Intelligence Reports",
        "Customer Lifecycle Management",
        "No-Show Annihilation System",
        "Revenue Leak Detection",
        "Competitor Mention Tracking",
        "Network Learning",
        "Monthly Strategy Calls"
      ],
      ideal: "Maximum value for serious hospitality businesses",
      roi: "Average client sees 3x ROI within 60 days"
    },
    soul: {
      name: "THE SOUL",
      tagline: "Autonomous Business Operations",
      description: "Your business runs itself while you sleep.",
      setup: "$3,500",
      monthly: "$2,500",
      features: [
        "Everything in The Brain, plus:",
        "Daily Pulse Reports",
        "Predictive Demand Forecasting",
        "Automated Menu Optimization",
        "VIP Customer Priority Routing",
        "Multi-Location Support",
        "API Access",
        "Priority Support"
      ],
      ideal: "For businesses ready to operate autonomously",
      status: "Available Q2 2026"
    }
  },
  moat: {
    diagnostic: {
      title: "The Onboarding Diagnostic",
      subtitle: "Consulting-grade intelligence extraction",
      description: "We run a 7-phase business diagnostic that delivers insights worth more than the setup fee.",
      value: "Owners discover blind spots they never knew existed."
    },
    intelligence: {
      title: "Weekly Intelligence Reports",
      subtitle: "See what you've been missing",
      description: "Every Monday: what customers want, money left on table, competitor insights.",
      value: "Once owners see through ANIMA's eyes, going back is unacceptable."
    },
    network: {
      title: "Network Learning",
      subtitle: "Every deployment makes all smarter",
      description: "ANIMA knows things about optimal timing and patterns no single system could discover.",
      value: "No competitor can compete with accumulated network intelligence."
    }
  },
  weeklyReport: {
    headline: "23 personas preguntaron por brunch. No ofreces brunch. A $85K promedio = $1.9M sin capturar.",
    metrics: {
      conversations: 147,
      bookings: 89,
      conversion: "61%",
      revenue: "$12,400,000 COP",
      afterHours: 62,
      noShows: 3
    },
    insights: [
      "Plato más pedido: Bandeja Paisa (34 veces)",
      "34% de consultas entre 10-11pm",
      "8 menciones de La Cevichería",
      "6 clientes reactivados"
    ],
    action: "Considera agregar brunch. La demanda está ahí."
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// CAPABILITY DATA FOR BLUEPRINT GENERATION
// ═══════════════════════════════════════════════════════════════════════════════

const CAP_DATA = {
  hospitality: [
    { icon: "🤖", name: "24/7 AI Concierge", desc: "Never miss a booking inquiry" },
    { icon: "📅", name: "Smart Reservations", desc: "Automated booking management" },
    { icon: "🌐", name: "Multi-Language", desc: "ES, EN, PT support" },
    { icon: "📊", name: "Revenue Analytics", desc: "Track every opportunity" },
    { icon: "⚡", name: "Instant Response", desc: "< 3 second reply time" },
    { icon: "🔔", name: "Smart Alerts", desc: "VIP detection & escalation" }
  ],
  restaurant: [
    { icon: "🍽️", name: "Menu Intelligence", desc: "AI knows your full menu" },
    { icon: "📱", name: "WhatsApp Orders", desc: "Take orders via chat" },
    { icon: "🎫", name: "No-Show Prevention", desc: "Smart confirmation system" },
    { icon: "⭐", name: "Review Management", desc: "Auto-response to reviews" },
    { icon: "📈", name: "Demand Forecasting", desc: "Predict busy periods" },
    { icon: "🔄", name: "Table Turnover", desc: "Optimize seating" }
  ],
  tours: [
    { icon: "🗓️", name: "Tour Scheduling", desc: "Real-time availability" },
    { icon: "💳", name: "Payment Links", desc: "Secure deposits" },
    { icon: "📍", name: "Location Sharing", desc: "Meeting point automation" },
    { icon: "🌦️", name: "Weather Alerts", desc: "Proactive rescheduling" },
    { icon: "📸", name: "Photo Delivery", desc: "Post-tour engagement" },
    { icon: "⭐", name: "Review Requests", desc: "Automated follow-ups" }
  ],
  services: [
    { icon: "📞", name: "Lead Capture", desc: "24/7 inquiry response" },
    { icon: "📋", name: "Intake Forms", desc: "Conversational data collection" },
    { icon: "📅", name: "Appointment Setting", desc: "Calendar integration" },
    { icon: "💰", name: "Quote Generation", desc: "Instant estimates" },
    { icon: "📧", name: "Follow-Up Sequences", desc: "Nurture automation" },
    { icon: "📊", name: "Pipeline Tracking", desc: "Lead status visibility" }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
// GLOBAL STYLES
// ═══════════════════════════════════════════════════════════════════════════════
// NEURAL BACKGROUND - Animated particles
// ═══════════════════════════════════════════════════════════════════════════════

function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let nodes = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const count = Math.min(Math.floor(window.innerWidth / 100), 15);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          phase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.7 ? COLORS.gold : COLORS.cyan
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 5, 8, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.phase += 0.02;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const size = node.radius + Math.sin(node.phase);

        // Glow
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 4);
        grad.addColorStop(0, node.color === COLORS.cyan ? 'rgba(0,212,255,0.3)' : 'rgba(212,164,32,0.3)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Connections
        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0,212,255,${(1 - dist/200) * 0.3})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}

// ═══════════════════════════════════════════════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════════════════════════════════════════════

function LanguageToggle({ lang, setLang }) {
  return (
    <div style={{ display: 'flex', gap: '4px', background: COLORS.bgCard, borderRadius: '20px', padding: '4px', border: `1px solid ${COLORS.border}` }}>
      <button
        onClick={() => setLang('en')}
        style={{
          padding: '6px 12px',
          borderRadius: '16px',
          border: 'none',
          background: lang === 'en' ? COLORS.cyan : 'transparent',
          color: lang === 'en' ? COLORS.void : COLORS.textMuted,
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >EN</button>
      <button
        onClick={() => setLang('es')}
        style={{
          padding: '6px 12px',
          borderRadius: '16px',
          border: 'none',
          background: lang === 'es' ? COLORS.cyan : 'transparent',
          color: lang === 'es' ? COLORS.void : COLORS.textMuted,
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >ES</button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TYPEWRITER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function Typewriter({ text, speed = 40, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    setDisplayed('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, started]);

  return <span>{displayed}</span>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA FULL EXPERIENCE SECTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaHeroSection({ T }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const fullText = T.animaHeroHeadline;
    let i = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [T.animaHeroHeadline]);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '120px 24px 80px', textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: COLORS.cyanDim, borderRadius: '100px', border: `1px solid ${COLORS.border}`, marginBottom: '32px', animation: 'fadeIn 0.6s ease-out' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS.pulse, animation: 'pulse 2s infinite' }} />
        <span style={{ fontSize: '12px', fontWeight: 600, color: COLORS.cyan, letterSpacing: '2px' }}>{T.animaBadge}</span>
      </div>

      <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.1, maxWidth: '1000px', marginBottom: '24px', letterSpacing: '-2px' }}>
        <span style={{ color: COLORS.text }}>{typedText}</span>
        <span style={{ display: 'inline-block', width: '4px', height: '1em', background: COLORS.cyan, marginLeft: '4px', animation: 'pulse 1s infinite' }} />
      </h1>

      <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: COLORS.textMuted, maxWidth: '700px', lineHeight: 1.6, marginBottom: '48px', animation: 'fadeIn 0.8s ease-out 0.5s both' }}>
        {T.animaHeroSubtitle}
        <br /><br />
        <span style={{ color: COLORS.gold }}>{T.animaHeroHighlight}</span>
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeIn 0.8s ease-out 0.7s both' }}>
        <a href={LINKS.cal} target="_blank" rel="noopener noreferrer" style={{ padding: '16px 40px', background: COLORS.gradient, border: 'none', borderRadius: '12px', color: COLORS.void, fontWeight: 700, fontSize: '16px', textDecoration: 'none', boxShadow: `0 0 30px ${COLORS.cyanGlow}` }}>{T.animaCta1}</a>
        <a href="#intelligence" style={{ padding: '16px 40px', background: 'transparent', border: `2px solid ${COLORS.border}`, borderRadius: '12px', color: COLORS.text, fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>{T.animaCta2}</a>
      </div>

      <div style={{ display: 'flex', gap: '48px', marginTop: '80px', flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeIn 0.8s ease-out 1s both' }}>
        {[
          { value: '<3s', label: T.animaStatsResponse },
          { value: '85-95%', label: T.animaStatsConversion },
          { value: '60%', label: T.animaStatsAfterHours },
          { value: '3x', label: T.animaStatsRoi }
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: COLORS.cyan }}>{stat.value}</div>
            <div style={{ fontSize: '12px', color: COLORS.textMuted, letterSpacing: '1px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', animation: 'float 2s ease-in-out infinite' }}>
        <div style={{ width: '24px', height: '40px', border: `2px solid ${COLORS.border}`, borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
          <div style={{ width: '4px', height: '8px', background: COLORS.cyan, borderRadius: '2px', animation: 'pulse 1.5s infinite' }} />
        </div>
      </div>
    </section>
  );
}

function AnimaProblemSection({ T }) {
  return (
    <section id="problem" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ fontSize: '12px', color: COLORS.gold, letterSpacing: '3px', marginBottom: '16px', fontWeight: 600 }}>{T.animaProblemLabel}</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-1px' }}>
            {T.animaProblemHeadline1} <span style={{ color: COLORS.danger }}>{T.animaProblemHeadline2}</span>.
            <br /><span style={{ color: COLORS.cyan }}>{T.animaProblemHeadline3}</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={{ padding: '40px', background: `linear-gradient(135deg, rgba(239,68,68,0.1), ${COLORS.bgCard})`, border: '1px solid rgba(239,68,68,0.2)', borderRadius: '20px' }}>
            <div style={{ fontSize: '12px', color: COLORS.danger, letterSpacing: '2px', marginBottom: '24px', fontWeight: 600 }}>{T.animaCompetitorsLabel}</div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>{T.animaCompetitorsTitle}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {T.competitorList.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', color: COLORS.textMuted }}>
                  <span style={{ color: COLORS.danger }}>✕</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '40px', background: `linear-gradient(135deg, ${COLORS.cyanDim}, ${COLORS.bgCard})`, border: `1px solid ${COLORS.border}`, borderRadius: '20px', boxShadow: `0 0 60px ${COLORS.cyanDim}` }}>
            <div style={{ fontSize: '12px', color: COLORS.cyan, letterSpacing: '2px', marginBottom: '24px', fontWeight: 600 }}>{T.animaWeInstallLabel}</div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}><span className="gradient-text">{T.animaWeInstallTitle}</span></h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {T.nervousSystemList.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', color: COLORS.text }}>
                  <span style={{ color: COLORS.cyan }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimaTiersSection({ T }) {
  const tiers = [
    { ...ANIMA_KNOWLEDGE.tiers.nerve, icon: '⚡', color: COLORS.textMuted, featured: false },
    { ...ANIMA_KNOWLEDGE.tiers.brain, icon: '🧠', color: COLORS.cyan, featured: true },
    { ...ANIMA_KNOWLEDGE.tiers.soul, icon: '✨', color: COLORS.gold, featured: false }
  ];

  return (
    <section id="tiers" style={{ padding: '120px 24px', background: `linear-gradient(180deg, transparent, ${COLORS.cyanDim} 50%, transparent)` }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ fontSize: '12px', color: COLORS.gold, letterSpacing: '3px', marginBottom: '16px', fontWeight: 600 }}>{T.animaTiersLabel}</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '16px' }}>
            {T.animaTiersHeadline} <span className="gradient-text">{T.animaTiersHighlight}</span>
          </h2>
          <p style={{ color: COLORS.textMuted, fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>{T.animaTiersSubtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{ padding: tier.featured ? '3px' : '0', background: tier.featured ? COLORS.gradient : 'transparent', borderRadius: '24px', transform: tier.featured ? 'scale(1.02)' : 'scale(1)' }}>
              <div style={{ height: '100%', padding: '40px', background: COLORS.bgCard, borderRadius: tier.featured ? '22px' : '24px', border: tier.featured ? 'none' : `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{tier.icon}</div>
                <div style={{ fontSize: '14px', color: tier.color, letterSpacing: '2px', marginBottom: '8px', fontWeight: 600 }}>{tier.name}</div>
                <div style={{ fontSize: '18px', color: COLORS.textMuted, marginBottom: '24px' }}>{tier.tagline}</div>

                <div style={{ marginBottom: '24px' }}>
                  {tier.priceType === 'one-time' ? (
                    <div>
                      <span style={{ fontSize: '42px', fontWeight: 800 }}>{tier.price}</span>
                      <span style={{ color: COLORS.textMuted, marginLeft: '8px' }}>{T.animaOneTime}</span>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '16px', color: COLORS.textMuted, marginBottom: '8px' }}>{tier.setup} {T.animaSetup}</div>
                      <span style={{ fontSize: '42px', fontWeight: 800 }}>{tier.monthly}</span>
                      <span style={{ color: COLORS.textMuted, marginLeft: '8px' }}>{T.animaMonth}</span>
                    </div>
                  )}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1 }}>
                  {tier.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: f.includes('Everything') ? COLORS.gold : COLORS.text, fontWeight: f.includes('Everything') ? 600 : 400, fontSize: '14px' }}>
                      <span style={{ color: tier.color }}>✓</span>{f}
                    </li>
                  ))}
                </ul>

                <div style={{ padding: '16px', background: COLORS.bgElevated, borderRadius: '12px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '11px', color: COLORS.textMuted, marginBottom: '4px', letterSpacing: '1px' }}>{T.animaIdealFor}</div>
                  <div style={{ fontSize: '14px' }}>{tier.ideal}</div>
                </div>

                <a href={tier.status ? '#' : LINKS.cal} target={tier.status ? '_self' : '_blank'} style={{ display: 'block', padding: '16px', background: tier.featured ? COLORS.gradient : 'transparent', border: tier.featured ? 'none' : `2px solid ${COLORS.border}`, borderRadius: '12px', color: tier.featured ? COLORS.void : COLORS.text, fontWeight: 700, fontSize: '16px', textAlign: 'center', textDecoration: 'none', opacity: tier.status ? 0.6 : 1 }}>
                  {tier.status || (tier.featured ? T.animaGetStarted : T.animaLearnMore)}
                </a>

                {tier.roi && <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '13px', color: COLORS.pulse }}>💰 {tier.roi}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimaCTASection({ T }) {
  return (
    <section style={{ padding: '120px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontSize: '64px', marginBottom: '32px' }}>🧠</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '24px' }}>
          {T.animaCtaHeadline} <span className="gradient-text">{T.animaCtaHighlight}</span>
        </h2>
        <p style={{ fontSize: '20px', color: COLORS.textMuted, marginBottom: '48px', lineHeight: 1.6 }}>
          {T.animaCtaSubtitle1}<br />{T.animaCtaSubtitle2}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={LINKS.cal} target="_blank" style={{ padding: '20px 48px', background: COLORS.gradient, border: 'none', borderRadius: '16px', color: COLORS.void, fontWeight: 700, fontSize: '18px', textDecoration: 'none', boxShadow: `0 0 40px ${COLORS.cyanGlow}`, animation: 'glow 3s ease-in-out infinite' }}>{T.animaCtaBook}</a>
          <a href={LINKS.whatsapp} target="_blank" style={{ padding: '20px 48px', background: 'transparent', border: `2px solid ${COLORS.border}`, borderRadius: '16px', color: COLORS.text, fontWeight: 600, fontSize: '18px', textDecoration: 'none' }}>{T.animaCtaWhatsApp}</a>
        </div>

        <div style={{ marginTop: '48px', padding: '24px', background: COLORS.bgCard, borderRadius: '16px', border: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: '14px', color: COLORS.textMuted }}>{T.animaCtaNote}</div>
        </div>
      </div>
    </section>
  );
}

function AnimaFooter({ T }) {
  return (
    <footer style={{ padding: '48px 24px', borderTop: `1px solid ${COLORS.border}`, background: COLORS.bgCard }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div style={{ fontWeight: 700, marginBottom: '8px' }}>{T.brand}</div>
          <div style={{ fontSize: '12px', color: COLORS.textMuted }}>{T.animaFooterVersion}</div>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href={LINKS.instagram} target="_blank" style={{ color: COLORS.textMuted, textDecoration: 'none' }}>Instagram</a>
          <a href={LINKS.whatsapp} target="_blank" style={{ color: COLORS.textMuted, textDecoration: 'none' }}>WhatsApp</a>
          <a href={LINKS.cal} target="_blank" style={{ color: COLORS.textMuted, textDecoration: 'none' }}>{T.animaFooterBook}</a>
        </div>
        <div style={{ fontSize: '12px', color: COLORS.textDim }}>{T.animaFooterCopyright}</div>
      </div>
    </footer>
  );
}

function AnimaNavigation({ onBack, T, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '16px 24px', transition: 'all 0.3s', background: scrolled ? 'rgba(3,5,8,0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? `1px solid ${COLORS.border}` : 'none' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onBack} style={{ padding: '8px 16px', background: 'transparent', border: `1px solid ${COLORS.border}`, borderRadius: '8px', color: COLORS.text, cursor: 'pointer', fontSize: '14px' }}>{T.back}</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: COLORS.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '20px', color: COLORS.void }}>M</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '16px' }}>{T.brand}</div>
              <div style={{ fontSize: '10px', color: COLORS.textMuted, letterSpacing: '2px' }}>{T.animaEdition}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#problem" style={{ color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px' }}>{T.animaNavWhy}</a>
          <a href="#tiers" style={{ color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px' }}>{T.animaNavPricing}</a>
          <LanguageToggle lang={lang} setLang={setLang} />
          <a href={LINKS.cal} target="_blank" style={{ padding: '10px 24px', background: COLORS.gradient, borderRadius: '8px', color: COLORS.void, fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>{T.animaNavBook}</a>
        </div>
      </div>
    </nav>
  );
}

function AnimaExperience({ onBack, T, lang, setLang }) {
  return (
    <div>
      <NeuralBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <AnimaNavigation onBack={onBack} T={T} lang={lang} setLang={setLang} />
        <main>
          <AnimaHeroSection T={T} />
          <AnimaProblemSection T={T} />
          <AnimaTiersSection T={T} />
          <AnimaCTASection T={T} />
        </main>
        <AnimaFooter T={T} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN HOME COMPONENT - Cinematic Multi-Phase Flow
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  const [phase, setPhase] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnima, setShowAnima] = useState(false);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [caps, setCaps] = useState([]);
  const [lang, setLang] = useState('en');

  const T = lang === 'es' ? TEXT_ES : TEXT_EN;

  const interests = [
    { id: 'hospitality', label: T.hospitality, icon: '🏨' },
    { id: 'restaurant', label: T.restaurant, icon: '🍽️' },
    { id: 'tours', label: T.tours, icon: '⛵' },
    { id: 'services', label: T.services, icon: '💼' },
    { id: 'anima', label: T.animaLabel, icon: '🧠', special: true }
  ];

  const logMessages = [
    "Initializing neural pathways...",
    "Loading behavior models...",
    "Calibrating response vectors...",
    "Mapping communication protocols...",
    "Activating WhatsApp integration...",
    "Deploying sentiment analysis...",
    "Configuring multi-language...",
    "Establishing revenue tracking...",
    "Optimizing conversion algorithms...",
    "System ready."
  ];

  // Phase 0 → 1 after 6 seconds (intro complete)
  useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Phase 2: Log generation with accelerating timing
  useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    const runLog = () => {
      if (i < logMessages.length) {
        setLogs(prev => [...prev, logMessages[i]]);
        setProgress(((i + 1) / logMessages.length) * 100);
        i++;
        // Accelerating timing: starts at 800ms, gets faster
        setTimeout(runLog, Math.max(200, 800 - i * 60));
      } else {
        setTimeout(() => setPhase(3), 1000);
      }
    };
    runLog();
  }, [phase]);

  // Phase 3: Show capabilities and move to phase 4
  useEffect(() => {
    if (phase === 3 && selected) {
      setCaps(CAP_DATA[selected.id] || []);
      const timer = setTimeout(() => setPhase(4), 5000);
      return () => clearTimeout(timer);
    }
  }, [phase, selected]);

  function handleSelect(interest) {
    if (interest.id === 'anima') {
      setShowAnima(true);
    } else {
      setSelected(interest);
      setLogs([]);
      setProgress(0);
      setPhase(2);
    }
  }

  function handleReset() {
    setPhase(1);
    setSelected(null);
    setLogs([]);
    setProgress(0);
    setCaps([]);
  }

  // If showing ANIMA, render that experience
  if (showAnima) {
    return <AnimaExperience onBack={() => setShowAnima(false)} T={T} lang={lang} setLang={setLang} />;
  }

  return (
    <>
      <NeuralBackground />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: COLORS.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: COLORS.void, fontSize: '18px' }}>M</div>
            <span style={{ fontWeight: 600, fontSize: '16px' }}>{T.brand}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <LanguageToggle lang={lang} setLang={setLang} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: COLORS.textMuted }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS.cyan, animation: 'pulse 2s infinite' }} />
              {T.online}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════════════════════════════════════
            PHASE 0: CINEMATIC INTRO
            Timing: 6 seconds with psychological progression
        ════════════════════════════════════════════════════════════════════════ */}
        {phase === 0 && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: COLORS.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <NeuralBackground />
            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Glowing Core with Pulsing Rings */}
              <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 48px' }}>
                {/* Outer Glow */}
                <div style={{ position: 'absolute', inset: '-40px', borderRadius: '50%', background: `radial-gradient(circle, ${COLORS.cyanGlow} 0%, transparent 70%)`, animation: 'pulse 2s infinite' }} />
                {/* Pulsing Rings */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid ${COLORS.cyan}`, opacity: 0.4, animation: 'ping 2.5s 0s infinite' }} />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid ${COLORS.cyan}`, opacity: 0.3, animation: 'ping 2.5s 0.4s infinite' }} />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid ${COLORS.cyan}`, opacity: 0.2, animation: 'ping 2.5s 0.8s infinite' }} />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid ${COLORS.gold}`, opacity: 0.15, animation: 'ping 2.5s 1.2s infinite' }} />
                {/* Inner Core */}
                <div style={{ position: 'absolute', inset: '30px', borderRadius: '50%', background: `linear-gradient(135deg, ${COLORS.cyan}30, ${COLORS.gold}20)`, border: `1px solid ${COLORS.border}` }} />
                {/* Icon */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', filter: `drop-shadow(0 0 20px ${COLORS.cyan})` }}>⚡</div>
              </div>

              {/* Logo Text */}
              <div style={{ marginBottom: '24px', opacity: 0, animation: 'fadeIn 0.8s 0.5s forwards' }}>
                <div style={{ fontSize: '12px', letterSpacing: '0.3em', color: COLORS.gold, marginBottom: '8px' }}>{T.brand}</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: COLORS.textMuted }}>{T.initializing}</div>
              </div>

              {/* Main Headlines */}
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-1px' }}>
                <Typewriter text={T.introHeadline} speed={45} delay={1000} />
              </h1>
              <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: COLORS.textMuted, marginBottom: '48px' }}>
                <Typewriter text={T.introSubheadline} speed={50} delay={2500} />
              </p>

              {/* Loading Bar */}
              <div style={{ opacity: 0, animation: 'fadeIn 0.5s 3.5s forwards' }}>
                <div style={{ width: '200px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', margin: '0 auto', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold})`, animation: 'loadingBar 2s ease-in-out' }} />
                </div>
                <div style={{ fontSize: '11px', color: COLORS.textMuted, marginTop: '12px', letterSpacing: '0.1em' }}>{T.loading}</div>
              </div>

              {/* Skip Button */}
              <button
                onClick={() => setPhase(1)}
                style={{
                  marginTop: '40px',
                  background: 'transparent',
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '20px',
                  padding: '8px 20px',
                  color: COLORS.textMuted,
                  fontSize: '11px',
                  cursor: 'pointer',
                  opacity: 0,
                  animation: 'fadeIn 0.5s 5s forwards',
                  letterSpacing: '0.1em'
                }}
              >{T.skipIntro}</button>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════════
            PHASE 1: VERTICAL SELECTION
        ════════════════════════════════════════════════════════════════════════ */}
        {phase === 1 && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <h2 style={{ fontSize: '14px', letterSpacing: '0.2em', color: COLORS.cyan, marginBottom: '16px' }}>
              <Typewriter text={T.selectVertical} speed={40} />
            </h2>
            <p style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '40px' }}>
              <Typewriter text={T.selectSubtitle} speed={30} delay={1000} />
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', width: '100%', maxWidth: '900px' }}>
              {interests.map((interest, i) => (
                <button
                  key={interest.id}
                  onClick={() => handleSelect(interest)}
                  style={{
                    background: interest.special ? `linear-gradient(135deg, ${COLORS.cyanDim}, ${COLORS.goldDim})` : COLORS.bgCard,
                    border: interest.special ? `2px solid ${COLORS.gold}` : `1px solid ${COLORS.border}`,
                    borderRadius: '12px',
                    padding: '32px 20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    opacity: 0,
                    animation: `fadeIn 0.5s ${0.2 + i * 0.1}s forwards`
                  }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{interest.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.text }}>{interest.label}</div>
                  {interest.special && (
                    <div style={{ fontSize: '10px', color: COLORS.gold, marginTop: '8px', letterSpacing: '0.1em' }}>{T.premiumTier}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════════
            PHASE 2: LOCKING / GENERATING
        ════════════════════════════════════════════════════════════════════════ */}
        {phase === 2 && selected && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <div style={{ fontSize: '12px', color: COLORS.cyan, marginBottom: '8px', letterSpacing: '0.15em' }}>{T.generatingFor}</div>
            <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '36px' }}>{selected.icon}</span>
              {selected.label}
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', maxWidth: '400px', height: '4px', background: COLORS.bgCard, borderRadius: '2px', marginBottom: '32px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: COLORS.gradient, transition: 'width 0.3s ease-out' }} />
            </div>

            {/* Log Output */}
            <div style={{ width: '100%', maxWidth: '500px', background: COLORS.bgCard, borderRadius: '12px', padding: '20px', border: `1px solid ${COLORS.border}`, fontFamily: 'monospace', fontSize: '12px', maxHeight: '300px', overflow: 'auto' }}>
              <div style={{ color: COLORS.cyan, marginBottom: '12px' }}>{T.systemInit}</div>
              {logs.map((log, i) => (
                <div key={i} style={{ color: COLORS.textMuted, marginBottom: '6px', opacity: 0, animation: 'fadeIn 0.3s forwards' }}>
                  <span style={{ color: COLORS.pulse }}>›</span> {log}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════════
            PHASE 3: BLUEPRINT REVEAL
        ════════════════════════════════════════════════════════════════════════ */}
        {phase === 3 && selected && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <div style={{ fontSize: '12px', color: COLORS.gold, marginBottom: '8px', letterSpacing: '0.2em' }}>{T.blueprintGenerated}</div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '40px' }}>
              {selected.label} {T.aiInfrastructure}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', width: '100%', maxWidth: '700px' }}>
              {caps.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    background: COLORS.bgCard,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'center',
                    opacity: 0,
                    animation: `fadeIn 0.5s ${i * 0.1}s forwards`
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{cap.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>{cap.name}</div>
                  <div style={{ fontSize: '11px', color: COLORS.textMuted }}>{cap.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════════
            PHASE 4: FINAL CTA
        ════════════════════════════════════════════════════════════════════════ */}
        {phase === 4 && selected && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '24px', animation: 'pulse 2s infinite' }}>✨</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: '16px' }}>
              <Typewriter text={T.infrastructureReady} speed={45} />
            </h2>
            <p style={{ fontSize: '16px', color: COLORS.textMuted, marginBottom: '40px', maxWidth: '500px' }}>
              <Typewriter text={T.finalSubtitle} speed={30} delay={2000} />
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', opacity: 0, animation: 'fadeIn 0.5s 3s forwards' }}>
              <a
                href={LINKS.cal}
                target="_blank"
                style={{
                  padding: '16px 40px',
                  background: COLORS.gradient,
                  borderRadius: '12px',
                  color: COLORS.void,
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                  boxShadow: `0 0 30px ${COLORS.cyanGlow}`
                }}
              >{T.scheduleYourBuild}</a>
              <button
                onClick={handleReset}
                style={{
                  padding: '16px 40px',
                  background: 'transparent',
                  border: `2px solid ${COLORS.border}`,
                  borderRadius: '12px',
                  color: COLORS.text,
                  fontWeight: 600,
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >{T.exploreAnother}</button>
            </div>

            <div style={{ marginTop: '32px', fontSize: '12px', color: COLORS.textMuted, opacity: 0, animation: 'fadeIn 0.5s 3.5s forwards' }}>
              {T.noCommitment}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
