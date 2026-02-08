"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// MACHINEMIND v5.1 | UNIFIED EDITION
// Standard Flow + ANIMA Experience
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
  bg: "#0d1117",
  void: "#030508",
  bgCard: "#161b22",
  bgElevated: "#141920",
  cyan: "#00d4ff",
  cyanDim: "rgba(0, 212, 255, 0.1)",
  cyanGlow: "rgba(0, 212, 255, 0.3)",
  cyanBright: "#00ffff",
  gold: "#C9A12B",
  goldDim: "rgba(201, 161, 43, 0.15)",
  goldGlow: "rgba(212, 164, 32, 0.3)",
  neural: "#6366f1",
  neuralDim: "rgba(99, 102, 241, 0.1)",
  pulse: "#10b981",
  pulseDim: "rgba(16, 185, 129, 0.15)",
  danger: "#ef4444",
  text: "#e6edf3",
  textMuted: "#7d8590",
  textDim: "#4b5563",
  border: "rgba(0, 212, 255, 0.2)",
  borderGold: "rgba(212, 164, 32, 0.2)",
  green: "#10b981",
  gradient: "linear-gradient(135deg, #00d4ff 0%, #6366f1 50%, #d4a420 100%)"
};

var CAL_LINK = "https://cal.com/machine-mind/machinemind-strategy-session";
var INSTAGRAM = "https://www.instagram.com/machinemindconsulting";
var WHATSAPP = "https://wa.me/19544451638";

// ═══════════════════════════════════════════════════════════════════════════════
// BILINGUAL TEXT
// ═══════════════════════════════════════════════════════════════════════════════

var TEXT_EN = {
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
  animaFooterVersion: "v5.0 ANIMA EDITION | Built in Cartagena 🇨🇴",
  animaFooterBook: "Book a Call",
  animaFooterCopyright: "© 2026 MachineMind. ANIMA Intelligent Systems.",
  // Problem section lists
  competitorList: ["Static FAQ responses", "No learning capability", "No intelligence reports", "Generic voice and tone", "No network learning", "One-time setup, zero evolution", "Race to the bottom on price"],
  nervousSystemList: ["Learns from every interaction", "Weekly intelligence reports", "Business blind spot detection", "Your voice, your brand, your policies", "Network learning across all deployments", "Gets smarter every week", "Premium positioning, premium results"]
};

var TEXT_ES = {
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
  animaFooterVersion: "v5.0 EDICIÓN ANIMA | Hecho en Cartagena 🇨🇴",
  animaFooterBook: "Agendar Llamada",
  animaFooterCopyright: "© 2026 MachineMind. Sistemas Inteligentes ANIMA.",
  // Problem section lists
  competitorList: ["Respuestas FAQ estáticas", "Sin capacidad de aprendizaje", "Sin informes de inteligencia", "Voz y tono genéricos", "Sin aprendizaje de red", "Configuración única, cero evolución", "Carrera hacia el fondo en precio"],
  nervousSystemList: ["Aprende de cada interacción", "Informes de inteligencia semanales", "Detección de puntos ciegos del negocio", "Tu voz, tu marca, tus políticas", "Aprendizaje de red en todas las implementaciones", "Se vuelve más inteligente cada semana", "Posicionamiento premium, resultados premium"]
};

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA KNOWLEDGE BASE
// ═══════════════════════════════════════════════════════════════════════════════

const ANIMA_KNOWLEDGE = {
  core: {
    tagline: "We don't install chatbots. We install nervous systems.",
    mission: "ANIMA is the intelligent nervous system that transforms your hospitality business into a 24/7 revenue-capturing, customer-learning, competitor-outsmarting operation.",
    differentiator: "Every deployment makes every other deployment smarter. Your competition is installing chatbots. You're installing an intelligence network."
  },

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
      ideal: "Perfect for businesses just starting to automate",
      limitation: "No intelligence layer, no weekly reports, no network learning"
    },
    brain: {
      name: "THE BRAIN",
      tagline: "Intelligence-Driven Operations",
      description: "ANIMA's full power — not just response, but intelligence. Your business learns from every interaction and you see what you've been missing.",
      setup: "$750",
      monthly: "$1,500",
      features: [
        "Everything in The Nerve, plus:",
        "Weekly Intelligence Reports",
        "Customer Lifecycle Management",
        "No-Show Annihilation System",
        "Revenue Leak Detection",
        "Competitor Mention Tracking",
        "Network Learning (gets smarter from all deployments)",
        "Monthly Strategy Calls",
        "Dedicated onboarding diagnostic"
      ],
      ideal: "The sweet spot — maximum value for serious hospitality businesses",
      roi: "Average client sees 3x ROI within 60 days"
    },
    soul: {
      name: "THE SOUL",
      tagline: "Autonomous Business Operations",
      description: "Your business runs itself while you sleep. Full integration, daily optimization, predictive intelligence.",
      setup: "$3,500",
      monthly: "$2,500",
      features: [
        "Everything in The Brain, plus:",
        "Daily Pulse Reports",
        "Predictive Demand Forecasting",
        "Automated Menu Optimization Suggestions",
        "VIP Customer Priority Routing",
        "Multi-Location Support",
        "API Access for Custom Integrations",
        "Quarterly Business Reviews",
        "Priority Support (2-hour response)"
      ],
      ideal: "For established businesses ready to operate autonomously",
      status: "Available Q2 2026"
    }
  },

  moat: {
    diagnostic: {
      title: "The Onboarding Diagnostic",
      subtitle: "Consulting-grade intelligence extraction",
      description: "Competitors ask 'what do you want the bot to say?' We run a 7-phase business diagnostic that delivers insights worth more than the setup fee — before the system even exists.",
      value: "Owners discover blind spots in their business they never knew existed. The diagnostic alone pays for itself."
    },
    intelligence: {
      title: "Weekly Intelligence Reports",
      subtitle: "See what you've been missing",
      description: "Every Monday: what your customers actually want, how much money you left on the table, who your competitors are losing to you (and who you're losing to them), and exactly what to do about it.",
      value: "Once an owner sees their business through ANIMA's eyes, going back to guessing is unacceptable."
    },
    network: {
      title: "Network Learning",
      subtitle: "Every deployment makes all deployments smarter",
      description: "ANIMA deployment #50 knows things about optimal confirmation timing, upsell language, and no-show patterns that no single-restaurant system could ever discover. This is the data moat.",
      value: "No competitor starting from scratch can compete with accumulated intelligence from the entire network."
    }
  },

  stats: {
    responseTime: "< 3 seconds",
    conversion: "85-95%",
    noShowReduction: "40-60%",
    afterHours: "60%",
    roi: "3x in 60 days",
    revenueRecovered: "$2,000-$8,000+/mo"
  },

  weeklyReport: {
    headline: "23 personas preguntaron por brunch este fin de semana. No ofreces brunch. A un ticket promedio de $85K, eso son $1.9M que no capturaste.",
    metrics: {
      conversations: 147,
      bookings: 89,
      conversion: "61%",
      revenue: "$12,400,000 COP",
      afterHours: 62,
      noShows: 3
    },
    insights: [
      "Tu plato más pedido esta semana: Bandeja Paisa (34 veces)",
      "El 34% de consultas llegan entre 10-11pm. Antes no respondías ninguna.",
      "Menciones de La Cevichería: 8 veces. Clientes comparan precios de ceviche.",
      "6 clientes dormidos volvieron después del mensaje de reactivación."
    ],
    action: "Considera agregar brunch los fines de semana. La demanda está ahí."
  }
};

var SOFIA_KNOWLEDGE = {
  company: {
    name: "MachineMind",
    tagline: "AI Infrastructure for Businesses That Never Sleep",
    fullName: "MachineMind Consulting",
    founder: "Philip McGill",
    location: "Cartagena, Colombia",
    markets: "Latin America, United States, Global",
    mission: "We don't sell chatbots. We install revenue recovery infrastructure. The chatbot is just the visible part — behind it is complete business logic, escalation protocols, analytics, integrations, and continuous optimization.",
    whyWeExist: "78% of customers book with the FIRST business that responds. Most businesses take 2-4 hours to reply to WhatsApp inquiries. Every hour of delay equals bookings going to faster competitors.",
    differentiator: "We're not Silicon Valley generalists. We built this specifically for Latin American hospitality because we live here, we understand the market, and we know WhatsApp is how business actually happens in LATAM.",
    philosophy: "Your AI should sound like you, understand your business, and work 24/7 without complaining. If it doesn't pay for itself in month one, we've failed."
  },

  stats: {
    responseTime: "< 30 seconds (vs industry average 4+ hours)",
    revenueRecovered: "$2,000-$8,000+ monthly per client",
    conversionRate: "85-95% inquiry-to-booking conversion",
    afterHours: "60% of inquiries happen outside business hours",
    nps: "94+ NPS client satisfaction",
    noShowReduction: "40-60% fewer no-shows",
    bookingIncrease: "35-60% increase in direct bookings",
    timeSaved: "20+ hours/week staff time recovered",
    firstResponder: "78% book with whoever responds first",
    leakage: "30-40% revenue lost to slow response times"
  },

  pricing: {
    setup: "$1,500 one-time setup",
    monthly: "$147-$497/month depending on complexity",
    starterSetup: "$1,500",
    starterMonthly: "$147/month",
    growthSetup: "$3,000",
    growthMonthly: "$297/month",
    roi: "Most clients see ROI within 2-3 weeks",
    guarantee: "ROI Guarantee: If your system doesn't recover at least 3x the monthly fee in the first 90 days, we work for free until it does.",
    noContract: "No long-term contracts required. Month-to-month. You stay because it works.",
    paymentSplit: "Setup can be split into 2 payments if needed for cash flow"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA GLOBAL STYLES
// ═══════════════════════════════════════════════════════════════════════════════

const AnimaGlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@200;300;400;500;600;700;800&display=swap');

    .anima-page * {
      box-sizing: border-box;
    }

    .anima-page {
      font-family: 'Outfit', system-ui, sans-serif;
      background: ${COLORS.void};
      color: ${COLORS.text};
      min-height: 100vh;
      line-height: 1.6;
    }

    .anima-page ::selection {
      background: ${COLORS.cyan};
      color: ${COLORS.void};
    }

    @keyframes animaPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.95); }
    }

    @keyframes animaGlow {
      0%, 100% { box-shadow: 0 0 20px ${COLORS.cyanGlow}; }
      50% { box-shadow: 0 0 40px ${COLORS.cyanGlow}, 0 0 60px ${COLORS.cyanDim}; }
    }

    @keyframes animaFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes animaSlideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes animaFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .anima-gradient-text {
      background: ${COLORS.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `}</style>
);

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA NEURAL BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaNeuralBackground() {
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
      const nodeCount = Math.min(Math.floor(window.innerWidth / 100), 15);

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
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
        node.pulsePhase += 0.02;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const pulseSize = node.radius + Math.sin(node.pulsePhase) * 1;

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 4);
        gradient.addColorStop(0, node.color === COLORS.cyan ? 'rgba(0, 212, 255, 0.3)' : 'rgba(212, 164, 32, 0.3)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 1;
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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaNavigation({ onBack, T, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '16px 24px',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(3, 5, 8, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onBack}
            style={{
              padding: '8px 16px',
              background: 'transparent',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '8px',
              color: COLORS.text,
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: 'system-ui'
            }}
          >
            {T.back}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: COLORS.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '20px',
              color: COLORS.void
            }}>M</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '-0.5px' }}>MACHINEMIND</div>
              <div style={{ fontSize: '10px', color: COLORS.textMuted, letterSpacing: '2px' }}>{T.animaEdition}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#problem" style={{ color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>{T.animaNavWhy}</a>
          <a href="#tiers" style={{ color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>{T.animaNavPricing}</a>
          <a href="#moat" style={{ color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>{T.animaNavMoat}</a>
          <a href="#intelligence" style={{ color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>{T.animaNavIntelligence}</a>
          <LanguageToggle lang={lang} setLang={setLang} />
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 24px',
              background: COLORS.gradient,
              border: 'none',
              borderRadius: '8px',
              color: COLORS.void,
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none'
            }}
          >
            {T.animaNavBook}
          </a>
        </div>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA HERO SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaHeroSection({ T }) {
  const [typedText, setTypedText] = useState('');
  const fullText = T.animaHeroHeadline;

  useEffect(() => {
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 20px',
        background: COLORS.cyanDim,
        borderRadius: '100px',
        border: `1px solid ${COLORS.border}`,
        marginBottom: '32px',
        animation: 'animaFadeIn 0.6s ease-out'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: COLORS.pulse,
          animation: 'animaPulse 2s infinite'
        }} />
        <span style={{ fontSize: '12px', fontWeight: 600, color: COLORS.cyan, letterSpacing: '2px' }}>
          {T.animaBadge}
        </span>
      </div>

      <h1 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(32px, 6vw, 72px)',
        fontWeight: 800,
        lineHeight: 1.1,
        maxWidth: '1000px',
        marginBottom: '24px',
        letterSpacing: '-2px'
      }}>
        <span style={{ color: COLORS.text }}>{typedText}</span>
        <span style={{
          display: 'inline-block',
          width: '4px',
          height: '1em',
          background: COLORS.cyan,
          marginLeft: '4px',
          animation: 'animaPulse 1s infinite'
        }} />
      </h1>

      <p style={{
        fontSize: 'clamp(16px, 2vw, 22px)',
        color: COLORS.textMuted,
        maxWidth: '700px',
        lineHeight: 1.6,
        marginBottom: '48px',
        animation: 'animaFadeIn 0.8s ease-out 0.5s both'
      }}>
        {T.animaHeroSubtitle}
        <br /><br />
        <span style={{ color: COLORS.gold }}>{T.animaHeroHighlight}</span>
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animation: 'animaFadeIn 0.8s ease-out 0.7s both'
      }}>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '16px 40px',
            background: COLORS.gradient,
            border: 'none',
            borderRadius: '12px',
            color: COLORS.void,
            fontWeight: 700,
            fontSize: '16px',
            textDecoration: 'none',
            boxShadow: `0 0 30px ${COLORS.cyanGlow}`
          }}
        >
          {T.animaCta1}
        </a>
        <a
          href="#intelligence"
          style={{
            padding: '16px 40px',
            background: 'transparent',
            border: `2px solid ${COLORS.border}`,
            borderRadius: '12px',
            color: COLORS.text,
            fontWeight: 600,
            fontSize: '16px',
            textDecoration: 'none'
          }}
        >
          {T.animaCta2}
        </a>
      </div>

      <div style={{
        display: 'flex',
        gap: '48px',
        marginTop: '80px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animation: 'animaFadeIn 0.8s ease-out 1s both'
      }}>
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

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'animaFloat 2s ease-in-out infinite'
      }}>
        <div style={{
          width: '24px',
          height: '40px',
          border: `2px solid ${COLORS.border}`,
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: COLORS.cyan,
            borderRadius: '2px',
            animation: 'animaPulse 1.5s infinite'
          }} />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA PROBLEM SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaProblemSection({ T }) {
  return (
    <section id="problem" style={{
      padding: '120px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            fontSize: '12px',
            color: COLORS.gold,
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: 600
          }}>{T.animaProblemLabel}</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            {T.animaProblemHeadline1} <span style={{ color: COLORS.danger }}>{T.animaProblemHeadline2}</span>.
            <br />
            <span style={{ color: COLORS.cyan }}>{T.animaProblemHeadline3}</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          <div style={{
            padding: '40px',
            background: `linear-gradient(135deg, rgba(239, 68, 68, 0.1), ${COLORS.bgCard})`,
            border: `1px solid rgba(239, 68, 68, 0.2)`,
            borderRadius: '20px'
          }}>
            <div style={{
              fontSize: '12px',
              color: COLORS.danger,
              letterSpacing: '2px',
              marginBottom: '24px',
              fontWeight: 600
            }}>{T.animaCompetitorsLabel}</div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: COLORS.text }}>
              {T.animaCompetitorsTitle}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {T.competitorList.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  color: COLORS.textMuted
                }}>
                  <span style={{ color: COLORS.danger }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            padding: '40px',
            background: `linear-gradient(135deg, ${COLORS.cyanDim}, ${COLORS.bgCard})`,
            border: `1px solid ${COLORS.border}`,
            borderRadius: '20px',
            boxShadow: `0 0 60px ${COLORS.cyanDim}`
          }}>
            <div style={{
              fontSize: '12px',
              color: COLORS.cyan,
              letterSpacing: '2px',
              marginBottom: '24px',
              fontWeight: 600
            }}>{T.animaWeInstallLabel}</div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
              <span className="anima-gradient-text">{T.animaWeInstallTitle}</span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {T.nervousSystemList.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  color: COLORS.text
                }}>
                  <span style={{ color: COLORS.cyan }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA TIERS SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaTiersSection({ T }) {
  const tiers = [
    {
      ...ANIMA_KNOWLEDGE.tiers.nerve,
      icon: '⚡',
      color: COLORS.textMuted,
      featured: false
    },
    {
      ...ANIMA_KNOWLEDGE.tiers.brain,
      icon: '🧠',
      color: COLORS.cyan,
      featured: true
    },
    {
      ...ANIMA_KNOWLEDGE.tiers.soul,
      icon: '✨',
      color: COLORS.gold,
      featured: false
    }
  ];

  return (
    <section id="tiers" style={{
      padding: '120px 24px',
      position: 'relative',
      background: `linear-gradient(180deg, transparent, ${COLORS.cyanDim} 50%, transparent)`
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            fontSize: '12px',
            color: COLORS.gold,
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: 600
          }}>{T.animaTiersLabel}</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1px',
            marginBottom: '16px'
          }}>
            {T.animaTiersHeadline} <span className="anima-gradient-text">{T.animaTiersHighlight}</span>
          </h2>
          <p style={{ color: COLORS.textMuted, fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            {T.animaTiersSubtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{
              padding: tier.featured ? '3px' : '0',
              background: tier.featured ? COLORS.gradient : 'transparent',
              borderRadius: '24px',
              transform: tier.featured ? 'scale(1.02)' : 'scale(1)'
            }}>
              <div style={{
                height: '100%',
                padding: '40px',
                background: COLORS.bgCard,
                borderRadius: tier.featured ? '22px' : '24px',
                border: tier.featured ? 'none' : `1px solid ${COLORS.border}`,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{tier.icon}</div>
                  <div style={{
                    fontSize: '14px',
                    color: tier.color,
                    letterSpacing: '2px',
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>{tier.name}</div>
                  <div style={{ fontSize: '18px', color: COLORS.textMuted }}>{tier.tagline}</div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  {tier.priceType === 'one-time' ? (
                    <div>
                      <span style={{ fontSize: '42px', fontWeight: 800, color: COLORS.text }}>{tier.price}</span>
                      <span style={{ color: COLORS.textMuted, marginLeft: '8px' }}>{T.animaOneTime}</span>
                    </div>
                  ) : (
                    <div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontSize: '16px', color: COLORS.textMuted }}>{tier.setup} {T.animaSetup}</span>
                      </div>
                      <span style={{ fontSize: '42px', fontWeight: 800, color: COLORS.text }}>{tier.monthly}</span>
                      <span style={{ color: COLORS.textMuted, marginLeft: '8px' }}>{T.animaMonth}</span>
                    </div>
                  )}
                </div>

                <p style={{
                  color: COLORS.textMuted,
                  marginBottom: '24px',
                  lineHeight: 1.6
                }}>{tier.description}</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1 }}>
                  {tier.features.map((feature, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                      color: feature.includes('Everything') ? COLORS.gold : COLORS.text,
                      fontWeight: feature.includes('Everything') ? 600 : 400,
                      fontSize: '14px'
                    }}>
                      <span style={{ color: tier.color }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div style={{
                  padding: '16px',
                  background: COLORS.bgElevated,
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '11px', color: COLORS.textMuted, marginBottom: '4px', letterSpacing: '1px' }}>{T.animaIdealFor}</div>
                  <div style={{ fontSize: '14px', color: COLORS.text }}>{tier.ideal}</div>
                </div>

                <a
                  href={tier.status ? '#' : CAL_LINK}
                  target={tier.status ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '16px',
                    background: tier.featured ? COLORS.gradient : 'transparent',
                    border: tier.featured ? 'none' : `2px solid ${COLORS.border}`,
                    borderRadius: '12px',
                    color: tier.featured ? COLORS.void : COLORS.text,
                    fontWeight: 700,
                    fontSize: '16px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    cursor: tier.status ? 'default' : 'pointer',
                    opacity: tier.status ? 0.6 : 1
                  }}
                >
                  {tier.status || (tier.featured ? T.animaGetStarted : T.animaLearnMore)}
                </a>

                {tier.roi && (
                  <div style={{
                    marginTop: '16px',
                    textAlign: 'center',
                    fontSize: '13px',
                    color: COLORS.pulse
                  }}>
                    {tier.roi}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA MOAT SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaMoatSection({ T }) {
  const moats = [
    {
      ...ANIMA_KNOWLEDGE.moat.diagnostic,
      icon: '🔬',
      color: COLORS.neural
    },
    {
      ...ANIMA_KNOWLEDGE.moat.intelligence,
      icon: '📊',
      color: COLORS.cyan
    },
    {
      ...ANIMA_KNOWLEDGE.moat.network,
      icon: '🌐',
      color: COLORS.gold
    }
  ];

  return (
    <section id="moat" style={{
      padding: '120px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            fontSize: '12px',
            color: COLORS.gold,
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: 600
          }}>{T.animaMoatLabel}</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1px',
            marginBottom: '16px'
          }}>
            {T.animaMoatHeadline} <span className="anima-gradient-text">{T.animaMoatHighlight}</span>
          </h2>
          <p style={{ color: COLORS.textMuted, fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            {T.animaMoatSubtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px' }}>
          {moats.map((moat, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              padding: '48px',
              background: COLORS.bgCard,
              borderRadius: '24px',
              border: `1px solid ${COLORS.border}`,
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '64px', marginBottom: '24px' }}>{moat.icon}</div>
                <div style={{
                  fontSize: '14px',
                  color: moat.color,
                  letterSpacing: '2px',
                  marginBottom: '8px',
                  fontWeight: 600
                }}>{moat.title.toUpperCase()}</div>
                <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>{moat.subtitle}</div>
                <p style={{ color: COLORS.textMuted, lineHeight: 1.7 }}>{moat.description}</p>
              </div>
              <div style={{
                padding: '32px',
                background: `linear-gradient(135deg, ${moat.color}15, ${COLORS.bgElevated})`,
                borderRadius: '16px',
                borderLeft: `4px solid ${moat.color}`
              }}>
                <div style={{ fontSize: '14px', color: moat.color, fontWeight: 600, marginBottom: '12px' }}>{T.animaLockIn}</div>
                <p style={{ color: COLORS.text, lineHeight: 1.7, fontSize: '16px' }}>{moat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA INTELLIGENCE SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaIntelligenceSection({ T }) {
  const report = ANIMA_KNOWLEDGE.weeklyReport;

  return (
    <section id="intelligence" style={{
      padding: '120px 24px',
      position: 'relative',
      background: `linear-gradient(180deg, transparent, ${COLORS.goldDim} 50%, transparent)`
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            fontSize: '12px',
            color: COLORS.gold,
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: 600
          }}>{T.animaIntelLabel}</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1px',
            marginBottom: '16px'
          }}>
            {T.animaIntelHeadline} <span className="anima-gradient-text">{T.animaIntelHighlight}</span>
          </h2>
          <p style={{ color: COLORS.textMuted, fontSize: '18px' }}>
            {T.animaIntelSubtitle}
          </p>
        </div>

        <div style={{
          background: COLORS.bgCard,
          borderRadius: '24px',
          border: `1px solid ${COLORS.border}`,
          overflow: 'hidden',
          boxShadow: `0 0 80px ${COLORS.cyanDim}`
        }}>
          <div style={{
            padding: '24px 32px',
            background: COLORS.bgElevated,
            borderBottom: `1px solid ${COLORS.border}`,
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: COLORS.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>📊</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px' }}>{T.animaReportTitle}</div>
              <div style={{ color: COLORS.textMuted, fontSize: '14px' }}>Tu Restaurante | Semana del 27 Ene al 2 Feb</div>
            </div>
          </div>

          <div style={{
            padding: '32px',
            background: `linear-gradient(135deg, ${COLORS.goldDim}, transparent)`,
            borderBottom: `1px solid ${COLORS.border}`
          }}>
            <div style={{ fontSize: '12px', color: COLORS.gold, marginBottom: '12px', fontWeight: 600 }}>{T.animaImportant}</div>
            <p style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.5 }}>{report.headline}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderBottom: `1px solid ${COLORS.border}`
          }}>
            {[
              { label: 'Conversaciones', value: report.metrics.conversations, icon: '💬' },
              { label: 'Reservas', value: report.metrics.bookings, icon: '✅' },
              { label: 'Conversión', value: report.metrics.conversion, icon: '📈' },
              { label: 'Valor Generado', value: report.metrics.revenue, icon: '💰' },
              { label: 'Fuera de Horario', value: report.metrics.afterHours, icon: '🌙' },
              { label: 'No-Shows', value: report.metrics.noShows, icon: '❌' }
            ].map((metric, i) => (
              <div key={i} style={{
                padding: '24px',
                textAlign: 'center',
                borderRight: (i + 1) % 3 !== 0 ? `1px solid ${COLORS.border}` : 'none',
                borderBottom: i < 3 ? `1px solid ${COLORS.border}` : 'none'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{metric.icon}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: COLORS.cyan }}>{metric.value}</div>
                <div style={{ fontSize: '12px', color: COLORS.textMuted }}>{metric.label}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: '32px' }}>
            <div style={{ fontSize: '12px', color: COLORS.cyan, marginBottom: '16px', fontWeight: 600 }}>{T.animaInsightsLabel}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {report.insights.map((insight, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: COLORS.bgElevated,
                  borderRadius: '12px',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ color: COLORS.cyan }}>→</span>
                  {insight}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: '24px 32px',
            background: COLORS.bgElevated,
            borderTop: `1px solid ${COLORS.border}`
          }}>
            <div style={{ fontSize: '12px', color: COLORS.pulse, marginBottom: '8px', fontWeight: 600 }}>{T.animaActionLabel}</div>
            <p style={{ fontSize: '16px', fontWeight: 500 }}>{report.action}</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: COLORS.textMuted, marginBottom: '24px' }}>
            Imagine getting this every week. Knowing exactly what's happening in your business.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: COLORS.gradient,
              border: 'none',
              borderRadius: '12px',
              color: COLORS.void,
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none'
            }}
          >
            {T.animaStartIntel}
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA ROI CALCULATOR SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaROISection({ T }) {
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(50);
  const [avgTicket, setAvgTicket] = useState(150000);
  const [noShowRate, setNoShowRate] = useState(15);

  const missedAfterHours = Math.floor(inquiriesPerWeek * 0.6 * 0.3);
  const recoveredBookings = Math.floor(missedAfterHours * 0.8);
  const afterHoursRevenue = recoveredBookings * avgTicket * 4;

  const currentNoShows = Math.floor(inquiriesPerWeek * 0.5 * (noShowRate / 100) * 4);
  const reducedNoShows = Math.floor(currentNoShows * 0.5);
  const noShowSavings = reducedNoShows * avgTicket;

  const totalMonthlyValue = afterHoursRevenue + noShowSavings;
  const animaCost = 1500 * 4200;
  const roi = ((totalMonthlyValue - animaCost) / animaCost * 100).toFixed(0);

  const formatCOP = (num) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(num);

  return (
    <section style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            fontSize: '12px',
            color: COLORS.gold,
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: 600
          }}>{T.animaRoiLabel}</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            {T.animaRoiHeadline} <span className="anima-gradient-text">{T.animaRoiHighlight}</span>
          </h2>
        </div>

        <div style={{
          background: COLORS.bgCard,
          borderRadius: '24px',
          border: `1px solid ${COLORS.border}`,
          overflow: 'hidden'
        }}>
          <div style={{ padding: '32px', borderBottom: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'grid', gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '14px', color: COLORS.textMuted }}>{T.animaInquiries}</label>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.cyan }}>{inquiriesPerWeek}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={inquiriesPerWeek}
                  onChange={(e) => setInquiriesPerWeek(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    background: COLORS.bgElevated,
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '14px', color: COLORS.textMuted }}>{T.animaTicket}</label>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.cyan }}>{formatCOP(avgTicket)}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    background: COLORS.bgElevated,
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '14px', color: COLORS.textMuted }}>{T.animaNoShowRate}</label>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.danger }}>{noShowRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={noShowRate}
                  onChange={(e) => setNoShowRate(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    background: COLORS.bgElevated,
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ padding: '32px', background: COLORS.bgElevated }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <div style={{
                padding: '24px',
                background: COLORS.bgCard,
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>{T.animaRecovered}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: COLORS.cyan }}>{recoveredBookings * 4}</div>
              </div>
              <div style={{
                padding: '24px',
                background: COLORS.bgCard,
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>{T.animaAvoided}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: COLORS.pulse }}>{reducedNoShows}</div>
              </div>
            </div>

            <div style={{
              padding: '32px',
              background: `linear-gradient(135deg, ${COLORS.cyanDim}, ${COLORS.goldDim})`,
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '8px' }}>{T.animaMonthlyValue}</div>
              <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '8px' }}>
                <span className="anima-gradient-text">{formatCOP(totalMonthlyValue)}</span>
              </div>
              <div style={{ fontSize: '24px', color: COLORS.pulse, fontWeight: 700 }}>
                {T.animaRoiResult} {roi}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA CTA SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaCTASection({ T }) {
  return (
    <section style={{
      padding: '120px 24px',
      position: 'relative',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontSize: '64px', marginBottom: '32px' }}>🧠</div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-1px',
          marginBottom: '24px'
        }}>
          {T.animaCtaHeadline} <span className="anima-gradient-text">{T.animaCtaHighlight}</span>
        </h2>
        <p style={{
          fontSize: '20px',
          color: COLORS.textMuted,
          marginBottom: '48px',
          lineHeight: 1.6
        }}>
          {T.animaCtaSubtitle1}
          <br />
          {T.animaCtaSubtitle2}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '20px 48px',
              background: COLORS.gradient,
              border: 'none',
              borderRadius: '16px',
              color: COLORS.void,
              fontWeight: 700,
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: `0 0 40px ${COLORS.cyanGlow}`,
              animation: 'animaGlow 3s ease-in-out infinite'
            }}
          >
            {T.animaCtaBook}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '20px 48px',
              background: 'transparent',
              border: `2px solid ${COLORS.border}`,
              borderRadius: '16px',
              color: COLORS.text,
              fontWeight: 600,
              fontSize: '18px',
              textDecoration: 'none'
            }}
          >
            {T.animaCtaWhatsApp}
          </a>
        </div>

        <div style={{
          marginTop: '48px',
          padding: '24px',
          background: COLORS.bgCard,
          borderRadius: '16px',
          border: `1px solid ${COLORS.border}`
        }}>
          <div style={{ fontSize: '14px', color: COLORS.textMuted }}>
            {T.animaCtaNote}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA FOOTER
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaFooter({ T }) {
  return (
    <footer style={{
      padding: '48px 24px',
      borderTop: `1px solid ${COLORS.border}`,
      background: COLORS.bgCard
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div>
          <div style={{ fontWeight: 700, marginBottom: '8px' }}>{T.brand}</div>
          <div style={{ fontSize: '12px', color: COLORS.textMuted }}>
            {T.animaFooterVersion}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.textMuted, textDecoration: 'none' }}>Instagram</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.textMuted, textDecoration: 'none' }}>WhatsApp</a>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.textMuted, textDecoration: 'none' }}>{T.animaFooterBook}</a>
        </div>

        <div style={{ fontSize: '12px', color: COLORS.textDim }}>
          {T.animaFooterCopyright}
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMA FULL EXPERIENCE
// ═══════════════════════════════════════════════════════════════════════════════

function AnimaExperience({ onBack, T, lang, setLang }) {
  return (
    <div className="anima-page">
      <AnimaGlobalStyles />
      <AnimaNeuralBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <AnimaNavigation onBack={onBack} T={T} lang={lang} setLang={setLang} />
        <main>
          <AnimaHeroSection T={T} />
          <AnimaProblemSection T={T} />
          <AnimaTiersSection T={T} />
          <AnimaMoatSection T={T} />
          <AnimaIntelligenceSection T={T} />
          <AnimaROISection T={T} />
          <AnimaCTASection T={T} />
        </main>
        <AnimaFooter T={T} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// STANDARD COMPONENTS (SOFIA CHAT, PARTICLES, ETC)
// ═══════════════════════════════════════════════════════════════════════════════

function SofiaChat(props) {
  var isOpen = props.isOpen;
  var onClose = props.onClose;

  var initialMessage = {
    role: "sofia",
    text: "Hey! 👋 I'm Sofia, MachineMind's AI assistant.\n\nI can tell you about our AI automation solutions, show you real results we've achieved, or help you figure out if we're a good fit for your business.\n\nWhat brings you here today?"
  };

  var [messages, setMessages] = useState([initialMessage]);
  var [input, setInput] = useState("");
  var [isTyping, setIsTyping] = useState(false);
  var messagesEndRef = useRef(null);

  useEffect(function() {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    var userText = input.trim();
    setMessages(function(prev) { return prev.concat([{ role: "user", text: userText }]); });
    setInput("");
    setIsTyping(true);
    setTimeout(function() {
      setMessages(function(prev) { return prev.concat([{ role: "sofia", text: "Thanks for your message! I'd love to help. For the most personalized assistance, let's book a quick call:\n\n📅 " + CAL_LINK + "\n\nOr message us directly on WhatsApp: " + WHATSAPP }]); });
      setIsTyping(false);
    }, 1500);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  if (!isOpen) return null;

  return (
    React.createElement("div", { style: { position: "fixed", bottom: "100px", right: "24px", width: "400px", maxWidth: "calc(100vw - 48px)", height: "550px", background: COLORS.bgCard, borderRadius: "16px", border: "1px solid " + COLORS.border, boxShadow: "0 0 40px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", zIndex: 1000 } },
      React.createElement("div", { style: { padding: "16px", background: "linear-gradient(135deg, " + COLORS.cyan + "20, " + COLORS.gold + "10)", borderBottom: "1px solid " + COLORS.border, display: "flex", justifyContent: "space-between", alignItems: "center" } },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px" } },
          React.createElement("div", { style: { width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" } }, "🤖"),
          React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 600, color: COLORS.text, fontSize: "16px" } }, "Sofia"),
            React.createElement("div", { style: { fontSize: "11px", color: COLORS.green, display: "flex", alignItems: "center", gap: "4px" } },
              React.createElement("span", { style: { width: "6px", height: "6px", borderRadius: "50%", background: COLORS.green, display: "inline-block" } }),
              "Online • MachineMind AI"
            )
          )
        ),
        React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: COLORS.textMuted, fontSize: "24px", cursor: "pointer", padding: "4px" } }, "×")
      ),
      React.createElement("div", { style: { flex: 1, overflow: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" } },
        messages.map(function(m, i) {
          return React.createElement("div", { key: i, style: { alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%", padding: "12px 16px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: m.role === "user" ? COLORS.cyan : "rgba(255,255,255,0.05)", color: m.role === "user" ? COLORS.bg : COLORS.text, fontSize: "13px", lineHeight: "1.6", whiteSpace: "pre-wrap", wordBreak: "break-word" } },
            m.text
          );
        }),
        isTyping && React.createElement("div", { style: { alignSelf: "flex-start", padding: "12px 16px", borderRadius: "16px 16px 16px 4px", background: "rgba(255,255,255,0.05)", color: COLORS.textMuted, fontSize: "13px" } }, "Sofia is typing..."),
        React.createElement("div", { ref: messagesEndRef })
      ),
      React.createElement("div", { style: { padding: "12px 16px", borderTop: "1px solid " + COLORS.border, display: "flex", gap: "8px", alignItems: "center" } },
        React.createElement("input", { value: input, onChange: function(e) { setInput(e.target.value); }, onKeyPress: handleKeyPress, placeholder: "Ask me anything...", style: { flex: 1, padding: "12px 16px", borderRadius: "24px", border: "1px solid " + COLORS.border, background: "rgba(255,255,255,0.05)", color: COLORS.text, outline: "none", fontSize: "13px" } }),
        React.createElement("button", { onClick: handleSend, disabled: !input.trim(), style: { width: "44px", height: "44px", borderRadius: "50%", border: "none", background: input.trim() ? "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")" : COLORS.border, color: COLORS.bg, cursor: input.trim() ? "pointer" : "default", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" } }, "➤")
      )
    )
  );
}

function ParticleField(props) {
  var intensity = props.intensity || 1;
  var canvasRef = useRef(null);
  useEffect(function() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener("resize", resize);
    var particles = [];
    for (var i = 0; i < Math.floor(60 * intensity); i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.5 + 0.2 });
    }
    var animationId;
    function animate() {
      ctx.fillStyle = "rgba(13, 17, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, " + p.alpha + ")"; ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return function() { window.removeEventListener("resize", resize); cancelAnimationFrame(animationId); };
  }, [intensity]);
  return React.createElement("canvas", { ref: canvasRef, style: { position: "fixed", inset: 0, zIndex: 0 } });
}

function Typewriter(props) {
  var text = props.text || "";
  var speed = props.speed || 50;
  var delay = props.delay || 0;
  var [displayed, setDisplayed] = useState("");
  var [started, setStarted] = useState(false);
  useEffect(function() {
    var timeout = setTimeout(function() { setStarted(true); }, delay);
    return function() { clearTimeout(timeout); };
  }, [delay]);
  useEffect(function() {
    if (!started) return;
    if (displayed.length < text.length) {
      var timeout = setTimeout(function() { setDisplayed(text.slice(0, displayed.length + 1)); }, speed);
      return function() { clearTimeout(timeout); };
    }
  }, [started, displayed, text, speed]);
  return React.createElement("span", null, displayed);
}

function GlowingProgress(props) {
  var progress = props.progress || 0;
  var label = props.label || "";
  return React.createElement("div", { style: { marginBottom: "24px" } },
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "8px" } },
      React.createElement("span", { style: { color: COLORS.cyan } }, label),
      React.createElement("span", { style: { color: COLORS.textMuted } }, Math.round(progress) + "%")
    ),
    React.createElement("div", { style: { height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" } },
      React.createElement("div", { style: { width: progress + "%", height: "100%", background: "linear-gradient(90deg, " + COLORS.cyan + ", " + COLORS.gold + ")", boxShadow: "0 0 20px " + COLORS.cyan, transition: "width 0.3s" } })
    )
  );
}

function CapabilityCard(props) {
  var title = props.title;
  var items = props.items;
  var delay = props.delay || 0;
  var active = props.active;
  var [show, setShow] = useState(false);
  useEffect(function() {
    if (active) { var t = setTimeout(function() { setShow(true); }, delay); return function() { clearTimeout(t); }; }
  }, [active, delay]);
  return React.createElement("div", { style: { background: COLORS.bgCard, border: "1px solid " + COLORS.border, borderRadius: "12px", padding: "24px", opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s" } },
    React.createElement("div", { style: { fontSize: "11px", letterSpacing: "0.15em", color: COLORS.gold, marginBottom: "16px" } }, title),
    items.map(function(item, i) {
      return React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", fontSize: "13px", color: COLORS.text } },
        React.createElement("span", { style: { color: COLORS.cyan } }, "→"),
        item
      );
    })
  );
}

function CaseStudy(props) {
  var vertical = props.vertical;
  var studies = { hospitality: { title: "Boutique Hotel, Cartagena", metric: "+$4,200/mo", quote: "We went from missing 60% of after-hours inquiries to capturing them all. The system paid for itself in week 2." }, restaurant: { title: "Fine Dining Restaurant", metric: "-60% no-shows", quote: "Our no-show rate dropped from 25% to under 10%. That's thousands in recovered revenue every month." }, tours: { title: "Boat Tour Operator", metric: "+35% bookings", quote: "Response time went from 6 hours to 30 seconds. Travelers were booking competitors before we even saw the message. Not anymore." }, services: { title: "Law Firm", metric: "+50% consultations", quote: "We recovered 10 hours a week from intake. Now we focus on billable work while AI handles qualification." } };
  var study = studies[vertical] || studies.hospitality;
  return React.createElement("div", { style: { marginTop: "40px", padding: "32px", background: "linear-gradient(135deg, " + COLORS.cyanDim + ", " + COLORS.goldDim + ")", borderRadius: "12px", border: "1px solid " + COLORS.border } },
    React.createElement("div", { style: { fontSize: "11px", color: COLORS.gold, marginBottom: "8px" } }, "CASE STUDY"),
    React.createElement("div", { style: { fontFamily: "system-ui", fontSize: "20px", fontWeight: 600, marginBottom: "8px" } }, study.title),
    React.createElement("div", { style: { fontSize: "32px", fontWeight: 700, color: COLORS.cyan, marginBottom: "16px" } }, study.metric),
    React.createElement("p", { style: { color: COLORS.textMuted, fontStyle: "italic", lineHeight: 1.6 } }, "\"" + study.quote + "\"")
  );
}

function LiveStats() {
  var stats = [{ label: "Revenue Recovered", value: "$2K-$8K+/mo" }, { label: "Response Time", value: "<30 sec" }, { label: "Client NPS", value: "94+" }];
  return React.createElement("div", { style: { display: "flex", gap: "32px", marginTop: "48px", opacity: 0, animation: "fadeIn 0.6s 2.5s forwards" } },
    stats.map(function(s) {
      return React.createElement("div", { key: s.label, style: { textAlign: "center" } },
        React.createElement("div", { style: { fontSize: "24px", fontWeight: 700, color: COLORS.cyan } }, s.value),
        React.createElement("div", { style: { fontSize: "11px", color: COLORS.textMuted, marginTop: "4px" } }, s.label)
      );
    })
  );
}

function InstagramIcon() {
  return React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
    React.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
    React.createElement("circle", { cx: "18", cy: "6", r: "1.5", fill: "currentColor" })
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════════════════════════════════════════════

function LanguageToggle(props) {
  return React.createElement("div", {
    style: { display: "flex", gap: "4px", background: COLORS.bgCard, borderRadius: "20px", padding: "4px", border: "1px solid " + COLORS.border }
  },
    React.createElement("button", {
      onClick: function() { props.setLang("en"); },
      style: { padding: "6px 12px", borderRadius: "16px", border: "none", background: props.lang === "en" ? COLORS.cyan : "transparent", color: props.lang === "en" ? COLORS.bg : COLORS.textMuted, fontSize: "12px", fontWeight: 600, cursor: "pointer" }
    }, "EN"),
    React.createElement("button", {
      onClick: function() { props.setLang("es"); },
      style: { padding: "6px 12px", borderRadius: "16px", border: "none", background: props.lang === "es" ? COLORS.cyan : "transparent", color: props.lang === "es" ? COLORS.bg : COLORS.textMuted, fontSize: "12px", fontWeight: 600, cursor: "pointer" }
    }, "ES")
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  var [phase, setPhase] = useState(0);
  var [selected, setSelected] = useState(null);
  var [showAnima, setShowAnima] = useState(false);
  var [logs, setLogs] = useState([]);
  var [progress, setProgress] = useState(0);
  var [caps, setCaps] = useState([]);
  var [chatOpen, setChatOpen] = useState(false);
  var [lang, setLang] = useState("en");

  // Get text for current language
  var T = lang === "es" ? TEXT_ES : TEXT_EN;

  // Updated interests with ANIMA as the 5th option
  var interests = [
    { id: "hospitality", label: T.hospitality, icon: "🏨" },
    { id: "restaurant", label: T.restaurant, icon: "🍽️" },
    { id: "tours", label: T.tours, icon: "⛵" },
    { id: "services", label: T.services, icon: "💼" },
    { id: "anima", label: T.animaLabel, icon: "🧠", special: true }
  ];

  var capData = { hospitality: [{ title: "REVENUE RECOVERY", items: ["24/7 Booking Response", "Abandoned Inquiry Recovery", "Upsell Automation", "Multi-language Support"] }, { title: "OPERATIONS", items: ["Reservation Management", "Guest Communication", "Review Generation", "Staff Coordination"] }, { title: "INTELLIGENCE", items: ["Demand Forecasting", "Competitor Monitoring", "Sentiment Analysis", "Revenue Optimization"] }], restaurant: [{ title: "BOOKING", items: ["WhatsApp Reservations", "Wait List Management", "VIP Recognition", "Event Coordination"] }, { title: "EXPERIENCE", items: ["Menu Inquiries", "Dietary Accommodations", "Special Requests", "Loyalty Programs"] }, { title: "OPERATIONS", items: ["Table Optimization", "Staff Alerts", "Inventory Triggers", "Review Response"] }], tours: [{ title: "LEAD CAPTURE", items: ["Instant Availability", "Custom Itineraries", "Group Coordination", "Payment Links"] }, { title: "EXPERIENCE", items: ["Pre-trip Communication", "Weather Updates", "Safety Protocols", "Photo Sharing"] }, { title: "GROWTH", items: ["Review Collection", "Referral Programs", "Seasonal Campaigns", "Partner Integration"] }], services: [{ title: "ACQUISITION", items: ["Lead Qualification", "Appointment Scheduling", "Proposal Delivery", "Follow-up Sequences"] }, { title: "DELIVERY", items: ["Project Updates", "Document Sharing", "Billing Reminders", "Satisfaction Surveys"] }, { title: "RETENTION", items: ["Anniversary Outreach", "Cross-sell Triggers", "Testimonial Requests", "Referral Incentives"] }] };
  var logMessages = ["Initializing neural pathways...", "Loading behavior models...", "Calibrating response vectors...", "Mapping communication protocols...", "Activating WhatsApp integration...", "Deploying sentiment analysis...", "Configuring multi-language...", "Establishing revenue tracking...", "Optimizing conversion algorithms...", "System ready."];

  useEffect(function() { var timer = setTimeout(function() { setPhase(1); }, 6000); return function() { clearTimeout(timer); }; }, []);
  useEffect(function() { if (phase !== 2) return; var i = 0; var interval = setInterval(function() { if (i < logMessages.length) { setLogs(function(prev) { return prev.concat([logMessages[i]]); }); setProgress((i + 1) / logMessages.length * 100); i++; } else { clearInterval(interval); setTimeout(function() { setPhase(3); }, 1000); } }, 800); return function() { clearInterval(interval); }; }, [phase]);
  useEffect(function() { if (phase === 3 && selected) { setCaps(capData[selected.id] || []); var timer = setTimeout(function() { setPhase(4); }, 6000); return function() { clearTimeout(timer); }; } }, [phase, selected]);

  function handleSelect(interest) {
    if (interest.id === "anima") {
      setShowAnima(true);
      return;
    }
    setSelected(interest);
    setPhase(2);
    setLogs([]);
    setProgress(0);
  }

  function handleBack() {
    if (phase > 1 && phase < 4) {
      setPhase(1);
      setSelected(null);
      setLogs([]);
      setProgress(0);
      setCaps([]);
    }
  }

  function handleAnimaBack() {
    setShowAnima(false);
    setPhase(1);
  }

  function handleLogoError(e) { e.target.style.display = "none"; if (e.target.nextSibling) e.target.nextSibling.style.display = "flex"; }

  // If ANIMA is selected, show the full ANIMA experience
  if (showAnima) {
    return React.createElement(AnimaExperience, { onBack: handleAnimaBack, T: T, lang: lang, setLang: setLang });
  }

  return (
    React.createElement("div", { style: { minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily: "ui-monospace, monospace" } },
      React.createElement(ParticleField, { intensity: phase >= 2 ? 1.5 : 0.8 }),
      phase > 1 && phase < 4 && React.createElement("button", { onClick: handleBack, style: { position: "fixed", top: "24px", left: "24px", padding: "12px 20px", borderRadius: "8px", border: "1px solid " + COLORS.border, background: COLORS.bgCard, color: COLORS.text, cursor: "pointer", zIndex: 100, fontFamily: "system-ui", fontSize: "14px" } }, T.back),
      React.createElement("div", { style: { position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "40px 24px", minHeight: "100vh", display: "flex", flexDirection: "column" } },
        React.createElement("header", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px", flexWrap: "wrap", gap: "16px" } },
          React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px" } },
            React.createElement("img", { src: "/logo.png", alt: "MachineMind", style: { height: "50px" }, onError: handleLogoError }),
            React.createElement("div", { style: { display: "none", alignItems: "center", gap: "12px" } },
              React.createElement("div", { style: { width: "40px", height: "40px", borderRadius: "8px", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: COLORS.bg, fontSize: "18px" } }, "M"),
              React.createElement("span", { style: { fontWeight: 600, fontSize: "16px" } }, "MACHINEMIND")
            )
          ),
          React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "16px" } },
            React.createElement(LanguageToggle, { lang: lang, setLang: setLang }),
            React.createElement("a", { href: INSTAGRAM, target: "_blank", rel: "noopener noreferrer", style: { color: COLORS.textMuted } }, React.createElement(InstagramIcon)),
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: COLORS.textMuted } },
              React.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: COLORS.cyan, animation: "pulse 2s infinite" } }),
              phase === 4 ? T.ready : T.online
            )
          )
        ),
        phase === 0 && React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 100, background: COLORS.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" } },
          React.createElement(ParticleField, { intensity: 1.2 }),
          React.createElement("div", { style: { position: "relative", zIndex: 10 } },
            // Glowing core with pulsing rings
            React.createElement("div", { style: { position: "relative", width: "180px", height: "180px", marginBottom: "48px", margin: "0 auto 48px" } },
              // Outer glow
              React.createElement("div", { style: { position: "absolute", inset: "-40px", borderRadius: "50%", background: "radial-gradient(circle, " + COLORS.cyanGlow + " 0%, transparent 70%)", animation: "pulse 2s infinite" } }),
              // Pulsing rings
              React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.4, animation: "ping 2.5s 0s infinite" } }),
              React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.3, animation: "ping 2.5s 0.4s infinite" } }),
              React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.2, animation: "ping 2.5s 0.8s infinite" } }),
              React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.gold, opacity: 0.15, animation: "ping 2.5s 1.2s infinite" } }),
              // Inner core
              React.createElement("div", { style: { position: "absolute", inset: "30px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + "30, " + COLORS.gold + "20)", border: "1px solid " + COLORS.border } }),
              // Icon
              React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px", filter: "drop-shadow(0 0 20px " + COLORS.cyan + ")" } }, "⚡")
            ),
            // Logo text
            React.createElement("div", { style: { marginBottom: "24px", opacity: 0, animation: "fadeIn 0.8s 0.5s forwards" } },
              React.createElement("div", { style: { fontSize: "12px", letterSpacing: "0.3em", color: COLORS.gold, marginBottom: "8px" } }, T.brand),
              React.createElement("div", { style: { fontSize: "10px", letterSpacing: "0.2em", color: COLORS.textMuted } }, T.initializing)
            ),
            // Main headline
            React.createElement("h1", { style: { fontFamily: "system-ui", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 800, marginBottom: "16px", letterSpacing: "-1px" } },
              React.createElement(Typewriter, { text: T.introHeadline, speed: 45, delay: 1000 })
            ),
            React.createElement("p", { style: { fontSize: "clamp(18px, 3vw, 24px)", color: COLORS.textMuted, marginBottom: "48px" } },
              React.createElement(Typewriter, { text: T.introSubheadline, speed: 50, delay: 2500 })
            ),
            // Loading indicator
            React.createElement("div", { style: { opacity: 0, animation: "fadeIn 0.5s 3.5s forwards" } },
              React.createElement("div", { style: { width: "200px", height: "3px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", margin: "0 auto", overflow: "hidden" } },
                React.createElement("div", { style: { width: "100%", height: "100%", background: "linear-gradient(90deg, " + COLORS.cyan + ", " + COLORS.gold + ")", animation: "loadingBar 2s ease-in-out" } })
              ),
              React.createElement("div", { style: { fontSize: "11px", color: COLORS.textMuted, marginTop: "12px", letterSpacing: "0.1em" } }, T.loading)
            ),
            // Skip button
            React.createElement("button", {
              onClick: function() { setPhase(1); },
              style: {
                position: "absolute",
                bottom: "-80px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "transparent",
                border: "1px solid " + COLORS.border,
                borderRadius: "20px",
                padding: "8px 20px",
                color: COLORS.textMuted,
                fontSize: "11px",
                cursor: "pointer",
                opacity: 0,
                animation: "fadeIn 0.5s 5s forwards",
                letterSpacing: "0.1em"
              }
            }, T.skipIntro)
          )
        ),
        phase === 1 && React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } },
          React.createElement("h2", { style: { fontSize: "14px", letterSpacing: "0.2em", color: COLORS.cyan, marginBottom: "16px" } },
            React.createElement(Typewriter, { text: T.selectVertical, speed: 40 })
          ),
          React.createElement("p", { style: { fontSize: "14px", color: COLORS.textMuted, marginBottom: "40px" } },
            React.createElement(Typewriter, { text: T.selectSubtitle, speed: 30, delay: 1000 })
          ),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", width: "100%", maxWidth: "900px" } },
            interests.map(function(interest, i) {
              var isAnima = interest.id === "anima";
              return React.createElement("button", {
                key: interest.id,
                onClick: function() { handleSelect(interest); },
                style: {
                  background: isAnima ? "linear-gradient(135deg, " + COLORS.cyanDim + ", " + COLORS.goldDim + ")" : COLORS.bgCard,
                  border: isAnima ? "2px solid " + COLORS.gold : "1px solid " + COLORS.border,
                  borderRadius: "12px",
                  padding: "32px 20px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  opacity: 0,
                  animation: "fadeIn 0.6s " + (1600 + i * 150) + "ms forwards",
                  boxShadow: isAnima ? "0 0 30px " + COLORS.goldDim : "none"
                }
              },
                React.createElement("div", { style: { fontSize: "44px", marginBottom: "16px" } }, interest.icon),
                React.createElement("div", { style: { fontFamily: "system-ui", fontSize: "15px", fontWeight: 600, color: isAnima ? COLORS.gold : COLORS.text } }, interest.label),
                isAnima && React.createElement("div", { style: { fontSize: "10px", color: COLORS.cyan, marginTop: "8px", letterSpacing: "1px" } }, T.premiumTier)
              );
            })
          ),
          React.createElement(LiveStats)
        ),
        phase === 2 && React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } },
          React.createElement("div", { style: { width: "100%", maxWidth: "500px" } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" } },
              React.createElement("span", { style: { fontSize: "44px" } }, selected && selected.icon),
              React.createElement("div", null,
                React.createElement("div", { style: { fontSize: "12px", color: COLORS.cyan } }, T.generatingFor),
                React.createElement("div", { style: { fontFamily: "system-ui", fontSize: "22px", fontWeight: 600 } }, selected && selected.label)
              )
            ),
            React.createElement(GlowingProgress, { progress: progress, label: T.systemInit }),
            React.createElement("div", { style: { background: "rgba(0,0,0,0.4)", borderRadius: "8px", padding: "16px", fontSize: "12px", maxHeight: "200px", overflow: "auto", fontFamily: "monospace" } },
              logs.map(function(log, i) {
                return React.createElement("div", { key: i, style: { color: i === logs.length - 1 ? COLORS.cyan : COLORS.textMuted, marginBottom: "8px" } },
                  React.createElement("span", { style: { color: COLORS.gold } }, ">"),
                  " ",
                  log
                );
              })
            )
          )
        ),
        phase === 3 && React.createElement("div", { style: { flex: 1 } },
          React.createElement("div", { style: { textAlign: "center", marginBottom: "40px" } },
            React.createElement("div", { style: { fontSize: "12px", color: COLORS.gold, marginBottom: "8px" } }, T.blueprintGenerated),
            React.createElement("h2", { style: { fontFamily: "system-ui", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700 } },
              React.createElement(Typewriter, { text: (selected ? selected.label : "") + " " + T.aiInfrastructure, speed: 40 })
            )
          ),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" } },
            caps.map(function(c, i) { return React.createElement(CapabilityCard, { key: c.title, title: c.title, items: c.items, delay: i * 700, active: true }); })
          ),
          selected && React.createElement(CaseStudy, { vertical: selected.id })
        ),
        phase === 4 && React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" } },
          React.createElement("div", { style: { width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", boxShadow: "0 0 60px " + COLORS.cyanGlow } },
            React.createElement("span", { style: { fontSize: "44px" } }, "✓")
          ),
          React.createElement("h2", { style: { fontFamily: "system-ui", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" } },
            React.createElement(Typewriter, { text: T.infrastructureReady, speed: 45 })
          ),
          React.createElement("p", { style: { fontSize: "16px", color: COLORS.textMuted, maxWidth: "480px", marginBottom: "40px", lineHeight: 1.6 } },
            React.createElement(Typewriter, { text: T.finalSubtitle, speed: 30, delay: 2000 })
          ),
          React.createElement("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" } },
            React.createElement("button", { onClick: function() { window.open(CAL_LINK, "_blank"); }, style: { background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", border: "none", borderRadius: "8px", padding: "18px 40px", fontSize: "14px", fontWeight: 600, color: COLORS.bg, cursor: "pointer", fontFamily: "system-ui", opacity: 0, animation: "fadeIn 0.6s 3s forwards" } }, T.scheduleYourBuild),
            React.createElement("button", { onClick: function() { setPhase(1); setSelected(null); setCaps([]); }, style: { background: "transparent", border: "1px solid " + COLORS.border, borderRadius: "8px", padding: "18px 32px", fontSize: "14px", color: COLORS.text, cursor: "pointer", fontFamily: "system-ui", opacity: 0, animation: "fadeIn 0.6s 3.2s forwards" } }, T.exploreAnother)
          ),
          React.createElement("p", { style: { marginTop: "20px", fontSize: "12px", color: COLORS.textMuted, opacity: 0, animation: "fadeIn 0.5s 4s forwards" } }, T.noCommitment),
          React.createElement("a", { href: INSTAGRAM, target: "_blank", rel: "noopener noreferrer", style: { marginTop: "32px", color: COLORS.textMuted, fontSize: "14px", textDecoration: "none", opacity: 0, animation: "fadeIn 0.5s 4.5s forwards" } }, "@machinemindconsulting")
        )
      ),
      React.createElement(SofiaChat, { isOpen: chatOpen, onClose: function() { setChatOpen(false); } }),
      React.createElement("button", { onClick: function() { setChatOpen(!chatOpen); }, style: { position: "fixed", bottom: "24px", right: "24px", width: "64px", height: "64px", borderRadius: "50%", border: "none", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", boxShadow: "0 0 30px " + COLORS.cyanGlow, cursor: "pointer", fontSize: "28px", zIndex: 999, transition: "transform 0.3s", transform: chatOpen ? "rotate(90deg)" : "rotate(0)", display: "flex", alignItems: "center", justifyContent: "center" } }, chatOpen ? "×" : "💬"),
      !chatOpen && React.createElement("div", { style: { position: "fixed", bottom: "76px", right: "24px", width: "12px", height: "12px", borderRadius: "50%", background: COLORS.green, border: "2px solid " + COLORS.bg, zIndex: 1000, animation: "pulse 2s infinite" } }),
      React.createElement("style", null, "@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } @keyframes ping { 0% { transform: scale(1); opacity: 0.3; } 75%, 100% { transform: scale(1.8); opacity: 0; } } @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } } @keyframes loadingBar { 0% { transform: translateX(-100%); } 100% { transform: translateX(0%); } } * { margin: 0; padding: 0; box-sizing: border-box; } body { background: #0d1117; } a:hover { color: #00d4ff !important; }")
    )
  );
}
