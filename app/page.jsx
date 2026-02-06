"use client";
import React, { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0d1117",
  bgCard: "#161b22",
  cyan: "#00d4ff",
  cyanDim: "rgba(0, 212, 255, 0.1)",
  cyanGlow: "rgba(0, 212, 255, 0.3)",
  gold: "#C9A12B",
  goldDim: "rgba(201, 161, 43, 0.15)",
  text: "#e6edf3",
  textMuted: "#7d8590",
  border: "rgba(0, 212, 255, 0.2)",
  green: "#10b981",
};

var CAL_LINK = "https://cal.com/machine-mind/machinemind-strategy-session";
var INSTAGRAM = "https://www.instagram.com/machinemindconsulting";
var WHATSAPP = "https://wa.me/19544451638";

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
  },
  
  services: {
    concierge: {
      name: "WhatsApp AI Booking Assistant",
      description: "24/7 automated responses, trained on YOUR specific business, services, and pricing",
      features: [
        "Instant response to every inquiry - day or night",
        "Natural conversation in Spanish, English, Portuguese, and 5+ languages",
        "Booking and reservation management with calendar sync",
        "Payment collection and deposit processing",
        "Personalized recommendations based on context",
        "Voice note understanding and response",
        "Smart escalation to humans when needed"
      ]
    },
    followUp: {
      name: "Automated Follow-Up Sequences",
      description: "Never lose a lead to silence again",
      features: [
        "24-hour and 48-hour check-ins on silent leads",
        "Recover 20-30% of leads that would have been lost",
        "Warm lead nurturing until they're ready to book",
        "Re-engagement campaigns for past customers",
        "Abandoned booking recovery"
      ]
    },
    reminders: {
      name: "Smart Booking Reminders",
      description: "Eliminate no-shows automatically",
      features: [
        "2-day, 1-day, and morning-of reminders",
        "Confirmation collection",
        "Easy rescheduling options",
        "60-80% reduction in no-shows typical"
      ]
    },
    reviews: {
      name: "Automated Review Engine",
      description: "Turn happy customers into 5-star reviews",
      features: [
        "Automated post-service follow-up",
        "Happy customers → review link",
        "Unhappy customers → private feedback before public posts",
        "3-4x more reviews collected automatically"
      ]
    },
    dashboard: {
      name: "Real-Time Analytics Dashboard",
      description: "See everything in one place",
      features: [
        "Who messaged, who booked, who needs follow-up",
        "Revenue tracking and attribution",
        "Response time metrics",
        "Conversion analytics"
      ]
    }
  },
  
  industries: {
    hospitality: {
      name: "Hotels & Hospitality",
      painPoints: [
        "Missing after-hours booking requests (60% of inquiries!)",
        "Staff overwhelmed during peak times",
        "Language barriers with international guests",
        "Manual reservation management errors",
        "Lost upsell and cross-sell opportunities",
        "No-shows killing revenue"
      ],
      results: {
        revenue: "$3,000-$8,000/month recovered",
        bookings: "40-60% increase in direct bookings",
        satisfaction: "Guest satisfaction scores up 25%",
        time: "Staff saves 20+ hours/week on routine inquiries"
      },
      caseStudy: "A boutique hotel in Cartagena was missing 60% of after-hours inquiries. Within 30 days of implementation, they recovered $4,200 in monthly revenue and reduced response time from 4 hours to 30 seconds. The system paid for itself in week 2.",
      buyingSignal: "They mention 'high season is impossible' or 'I spend all day answering the same questions'"
    },
    restaurant: {
      name: "Restaurants & Nightlife",
      painPoints: [
        "Phone ringing constantly during service",
        "No-shows destroying revenue and wasting tables",
        "Manual reservation book chaos",
        "Can't handle multiple inquiries simultaneously",
        "Losing customers to competitors who respond faster",
        "Large party and event inquiries falling through cracks"
      ],
      results: {
        noShows: "40-60% reduction in no-shows",
        revenue: "$2,000-$4,000/month in recovered tables",
        efficiency: "Handle 5x more reservations without extra staff",
        reviews: "3-4x more reviews collected automatically"
      },
      caseStudy: "A high-end restaurant was losing $3,000/month to no-shows alone. Our reminder system cut that by 60% in the first month. They also captured 15 additional reservations per week from faster response times.",
      buyingSignal: "They mention 'we can't answer the phone during rush' or 'people don't show up'"
    },
    tours: {
      name: "Tours & Experiences",
      painPoints: [
        "Inquiries coming at all hours from different time zones",
        "Complex itinerary questions taking forever to answer",
        "Group bookings requiring endless back-and-forth",
        "Weather and schedule changes needing mass communication",
        "Missing the booking window when travelers are deciding",
        "Last-minute bookings going to competitors"
      ],
      results: {
        bookings: "35%+ increase in bookings",
        conversion: "50% higher inquiry-to-booking conversion",
        groups: "Handle group bookings 3x faster",
        reviews: "4x more reviews collected"
      },
      caseStudy: "A boat tour operator was responding to inquiries in 6+ hours. Travelers had already booked competitors by then. After implementation, response time dropped to 30 seconds and bookings increased 35% in 60 days.",
      buyingSignal: "They mention 'tourists message at all hours' or 'by the time I respond, they've booked someone else'"
    },
    services: {
      name: "Professional Services",
      painPoints: [
        "Qualified leads slipping through the cracks",
        "Time wasted on unqualified inquiries",
        "Inconsistent follow-up losing warm leads",
        "Clients can't reach you after hours",
        "Administrative tasks eating billable hours",
        "No system for collecting testimonials"
      ],
      results: {
        leads: "50% more qualified consultations",
        time: "Save 15+ hours/week on admin",
        conversion: "30% higher proposal acceptance",
        referrals: "2x more referrals collected"
      },
      caseStudy: "A law firm was spending 10 hours/week on initial client intake. Our AI now handles qualification, scheduling, and document collection. They've increased consultations by 50% while the partners focus on billable work.",
      buyingSignal: "They mention 'I spend all day answering basic questions' or 'leads go cold before I can follow up'"
    },
    hvac: {
      name: "HVAC & Home Services",
      painPoints: [
        "Emergency calls at midnight you can't answer",
        "Quote requests requiring manual follow-up",
        "Technician scheduling conflicts and double-booking",
        "Service reminder gaps losing maintenance revenue",
        "Reviews not being collected after good service"
      ],
      results: {
        emergency: "Never miss an emergency call again",
        quotes: "Automated quote follow-up recovers 20-30% more jobs",
        scheduling: "Zero double-bookings with calendar integration",
        maintenance: "Automated reminder sequences for recurring revenue"
      },
      caseStudy: "An HVAC company was losing emergency calls every night. Our AI now triages emergencies, schedules non-urgent jobs, and follows up on quotes. They captured $6,000 in additional monthly revenue from jobs that would have gone to competitors.",
      buyingSignal: "They mention 'I can't be on call 24/7' or 'leads slip through the cracks'"
    }
  },
  
  technology: {
    whatsapp: {
      name: "WhatsApp Business API Integration",
      why: "In Latin America, WhatsApp isn't just messaging — it's how business gets done. 95% of your customers prefer WhatsApp over email or phone calls.",
      capabilities: [
        "Official WhatsApp Business API (not hacks or workarounds)",
        "Handle unlimited concurrent conversations",
        "Voice note understanding and response",
        "Image, document, and catalog sharing",
        "Payment links and invoicing",
        "Location sharing and maps integration",
        "Group chat management for events/parties",
        "No risk of getting banned — fully compliant"
      ]
    },
    ai: {
      name: "AI Intelligence Layer",
      notChatbot: "This isn't a decision tree chatbot that frustrates customers. Our AI actually understands language, handles complex questions, and knows when to bring in a human. Ask a chatbot something unexpected and it breaks. Ask our AI and it figures out the intent and helps anyway.",
      capabilities: [
        "Natural language understanding (not keyword matching)",
        "Context awareness across entire conversation history",
        "Sentiment detection and smart escalation triggers",
        "Personality and tone customization to match your brand",
        "Learning from corrections and feedback",
        "Multi-turn conversation handling",
        "Integration with your existing systems"
      ]
    },
    integrations: {
      supported: [
        "Google Calendar / Outlook",
        "Booking systems (Guesty, Lodgify, Hostaway, Booking.com, Airbnb)",
        "POS systems",
        "CRM platforms",
        "Payment processors (Stripe, PayPal, Nequi, Daviplata)",
        "Review platforms (Google, TripAdvisor, Facebook)",
        "Custom APIs and databases"
      ],
      approach: "We integrate with what you already use. No need to change your systems — we enhance them."
    }
  },
  
  process: {
    overview: "We move fast. Most clients are live within 2-3 weeks.",
    steps: [
      {
        name: "Strategy Call",
        duration: "15 minutes",
        description: "We understand your business, identify revenue leaks, and show you exactly what we'd build. No pitch — just diagnosis.",
        what: "By the end, you'll know exactly what system we'd build, expected ROI, and timeline."
      },
      {
        name: "Custom Blueprint",
        duration: "2-3 days",
        description: "We design your system based on your specific workflows, brand voice, pricing, and goals. You approve before we build."
      },
      {
        name: "Build & Train",
        duration: "7-14 days",
        description: "We build your AI, train it on your actual scenarios, FAQs, policies, and procedures. It sounds like you because we train it on how you actually communicate."
      },
      {
        name: "Launch & Monitor",
        duration: "1-2 days",
        description: "Go live with monitoring. We watch every conversation the first week to ensure quality. Any issues get fixed immediately."
      },
      {
        name: "Optimize Forever",
        duration: "Ongoing",
        description: "Continuous improvement based on real conversations. Your AI gets smarter every week. Monthly performance reviews included."
      }
    ],
    timeline: {
      setup: "7-14 days for initial build",
      live: "2-3 weeks to full deployment",
      results: "First measurable results within 30 days",
      roi: "System typically pays for itself in month one, often week 2-3"
    }
  },
  
  objections: {
    tooExpensive: {
      response: "I hear you on budget. But let me ask — what does one lost booking cost you? If your average booking is $200 and this system saves even 2-3 bookings per month that would have been lost to slow response, it's already paid for itself. The question isn't whether you can afford it — it's whether you can afford to keep losing those bookings every single month.",
      followUp: "What's your average booking value? Let's do the actual math together."
    },
    needToThink: {
      response: "Totally fair — it's a business decision. What specifically do you need to think through? Is it the investment, the timing, or something about how the system works? I want to make sure I've given you everything you need to decide.",
      urgency: "While you're thinking, consider this: every day without 24/7 coverage is another day of missed inquiries. Even one lost booking this week could have paid for months of service."
    },
    haveSomeone: {
      response: "Great that you have help! But can they respond at 2am when a traveler in Europe wants to book? Handle 10 conversations simultaneously during peak times? Speak 5 languages fluently? Never call in sick or take vacation? We complement your team, not replace them. Your staff handles the important stuff while AI handles the routine.",
      reframe: "Think of it this way — we free up your team to focus on high-value interactions instead of answering 'what time do you close?' for the 50th time today."
    },
    triedChatbots: {
      response: "Most chatbots ARE terrible — I completely get it. They're decision trees that frustrate customers and make your business look bad. That's not what we build. Our AI actually understands language, handles unexpected questions, and knows when to bring in a human. It's the difference between a phone tree and a trained employee.",
      question: "What specifically went wrong with the last one? I want to make sure we address that directly."
    },
    tooSmall: {
      response: "Actually, some of our best results come from smaller operations. A boutique hotel recovering $3,000/month in lost revenue transforms their entire business model. A restaurant saving 20 tables per month from no-shows changes their margins completely. You don't need to be big — you just need to stop leaving money on the table.",
      math: "If you're getting even 20 inquiries a month and missing half because of slow response, that's potentially $2,000-$5,000 in lost revenue. We fix that."
    },
    notReady: {
      response: "What would need to change for you to be ready? Often 'not ready' means 'not sure it'll work' — and that's exactly why we do strategy calls. No commitment, just show you specifically what we'd build and the expected results. Then you decide with full information.",
      alternatives: "Is it timing? Budget? Technical concerns? Help me understand so I can either address it or tell you honestly if we're not a fit right now."
    },
    dontTrustAI: {
      response: "That's a smart concern — there's a lot of overhyped AI that underdelivers. Here's how we think about it: the AI handles the 80% of conversations that are routine (hours, prices, availability, booking confirmation). The 20% that needs judgment, empathy, or negotiation gets escalated to you immediately. You stay in control.",
      proof: "Plus, you see every conversation. Nothing happens without your ability to review it. Most clients spend 5 minutes a day checking the dashboard and that's it."
    },
    partnerDecision: {
      response: "Of course — it's a joint decision. Would it help if we scheduled a quick call with both of you? I'm happy to walk them through it too. That way you're both on the same page. When would work?",
      alternative: "Or if you'd prefer, I can send you a summary document you can share with them. What's more useful?"
    },
    seenResultsFirst: {
      response: "Smart to want proof. Here's what I can offer: we'll have your system live within 2 weeks, and you'll see measurable results within the first month. If you're not seeing value by month two, we'll work with you until you are — that's our guarantee. But even better, let me share some case studies of similar businesses...",
      caseStudies: true
    },
    cheaper: {
      response: "I appreciate you asking. Our pricing reflects the custom work we do — we're not selling a template, we're building a system specifically for YOUR business, trained on YOUR procedures, matching YOUR brand voice. What I can do is split the setup into two payments if that helps with cash flow. But the value we deliver is worth every dollar — most clients are in profit by week 3.",
      value: "Think about it this way: a bilingual staff member costs $1,500+/month, works 40 hours, needs training, takes vacation, and can only handle one conversation at a time. Our AI works 24/7, handles unlimited conversations, never needs a day off, and costs a fraction."
    }
  },
  
  comparisons: {
    vsAgencies: "Marketing agencies build websites and run ads. Great. But what happens when those leads message you at 10pm? They go to your competitor who responded first. We're not competing with agencies — we're completing the loop. They drive traffic, we capture it.",
    vsChatbots: "Generic chatbots follow scripts and break when asked anything unexpected. 'I don't understand, please rephrase' — we've all been frustrated by that. Our AI understands intent, handles complex questions, and escalates gracefully. It's the difference between a phone tree and a trained employee.",
    vsHiring: "A bilingual staff member costs $1,500+/month, works 40 hours, needs training, calls in sick, takes vacation, and can only handle one conversation at a time. Our AI works 24/7/365, handles unlimited conversations, never complains, and costs a fraction.",
    vsDoingNothing: "Every missed after-hours inquiry is money walking to your competitor. If you're missing even 3-4 bookings a month (and you probably are), that's $1,000+ in lost revenue. Every. Single. Month. This isn't a cost — it's stopping a leak.",
    vsCompetitors: "Most AI companies are Silicon Valley generalists who don't understand WhatsApp culture, Latin American business norms, or Spanish-language nuance. We live here. We built this specifically for this market. That's why our conversion rates are 85-95% while generic solutions struggle to hit 50%."
  },
  
  trust: {
    noLockIn: "No long-term contracts. Month-to-month. If it stops working, you stop paying. We earn your business every month.",
    transparency: "We'll tell you if we're not a fit. If your business doesn't have the inquiry volume or your situation doesn't match our strengths, we'll say so. We'd rather have a good fit than a frustrated client.",
    risk: "Start small, see results, then grow. Your first 30 days are our proof period. If we don't deliver measurable ROI, we'll work for free until we do.",
    approach: "We're not trying to close you on this chat. I want to show you what's possible, answer your questions, and let you decide if it makes sense. No pressure.",
    support: "You're not buying software and being left alone. You get ongoing optimization, priority support, and regular performance reviews. Your success is our success."
  },
  
  referral: {
    program: "Blue Ocean Referral Partner Program",
    audience: "Accountants, lawyers, marketing agencies, web developers, business coaches",
    commission: "$300 immediately when they sign up, plus $29 every month for as long as they're a client. Most clients stay 2+ years. That's $1,000+ per referral.",
    effort: "You do nothing but make an introduction. We handle all sales, implementation, and support. You just mention us when a client complains about being overwhelmed with WhatsApp messages.",
    fit: "If you work with hospitality, restaurant, tour, or service businesses, you know they're drowning in messages. Now you have a solution that helps them AND pays you."
  },
  
  spanish: {
    greeting: "¡Hola! 👋 Soy Sofia, la asistente de IA de MachineMind.\n\nPuedo contarte todo sobre nuestras soluciones de automatización con IA, mostrarte resultados reales que hemos logrado, o ayudarte a ver si somos un buen fit.\n\n¿Qué te trae por aquí hoy?",
    services: "Construimos infraestructura de IA que captura ingresos y opera 24/7:\n\n🤖 **Concierge IA** - Maneja consultas, reservas, soporte por WhatsApp\n\n💰 **Recuperación de Ingresos** - Captura consultas fuera de horario, hace seguimiento a leads\n\n📊 **Automatización de Reservas** - Gestiona reservas, reduce no-shows en 40%\n\n🌍 **Multi-Idioma** - Español, inglés, portugués y más\n\n¿Qué es más importante para tu negocio?",
    pricing: "Excelente pregunta. Los precios dependen de tu situación específica.\n\nLa mayoría de clientes invierten $147-497/mes en un sistema que recupera $2,000-8,000+ mensuales. Las matemáticas siempre funcionan a tu favor.\n\nSin costos enormes por adelantado. Sin contratos largos.\n\n📅 Una llamada de 15 minutos te da precios exactos: " + CAL_LINK
  }
};

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
  var [context, setContext] = useState({ 
    industry: null, 
    questionsAsked: 0, 
    objectionCount: 0,
    interested: false,
    language: "en",
    businessType: null,
    hasShownCaseStudy: false,
    hasShownPricing: false,
    conversationStage: "discovery"
  });
  var messagesEndRef = useRef(null);

  useEffect(function() {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function detectIntent(msg) {
    var m = msg.toLowerCase().trim();
    
    // Spanish detection
    if (m.match(/hola|buenos|buenas|qué tal|como estas|necesito|quiero|precio|cuanto|cuesta|español|servicio|negocio|ayuda|reserva|hotel|restaurante/)) {
      return "spanish";
    }
    
    // Greetings
    if (m.match(/^(hi|hello|hey|hola|good morning|good afternoon|good evening|sup|yo|what's up|howdy)[\s!.,?]*$/i)) return "greeting";
    
    // High intent signals
    if (m.match(/sign up|get started|let's do it|i'm in|ready to start|want to start|how do i start|interested|ready|let's go|book.*call|schedule|yes|sounds good|i want|need this|perfect/)) return "high_intent";
    
    // Pricing questions
    if (m.match(/price|pricing|cost|how much|fee|rate|budget|afford|expensive|cheap|investment|pay|charge|subscription|monthly|setup/)) return "pricing";
    
    // Booking/call scheduling
    if (m.match(/book|call|schedule|meeting|talk|speak|demo|consultation|strategy|appointment|calendar|available|free time/)) return "booking";
    
    // Services overview
    if (m.match(/service|what do you|offer|help|do for|provide|solution|what can you/)) return "services";
    
    // Specific services
    if (m.match(/concierge|assistant|virtual/)) return "service_concierge";
    if (m.match(/revenue|recover|lost|missing|leak|money/)) return "service_revenue";
    if (m.match(/booking|reservation|no.?show|cancel|reminder/)) return "service_booking";
    if (m.match(/language|spanish|english|portuguese|multilingual|translate|bilingual/)) return "service_multilingual";
    if (m.match(/review|reputation|google|tripadvisor|rating/)) return "service_reviews";
    if (m.match(/follow.?up|nurture|sequence|automat/)) return "service_followup";
    
    // Industries
    if (m.match(/hotel|hospitality|lodging|accommodation|resort|hostel|airbnb|bnb|vacation rental|boutique/)) return "industry_hospitality";
    if (m.match(/restaurant|food|dining|bar|club|nightlife|cafe|bistro|catering|chef/)) return "industry_restaurant";
    if (m.match(/tour|experience|excursion|boat|adventure|travel|activity|guide|operator/)) return "industry_tours";
    if (m.match(/lawyer|law|legal|doctor|medical|clinic|consult|professional|accountant|real estate|agent|coach|therapist/)) return "industry_services";
    if (m.match(/hvac|plumb|electric|contractor|home service|repair|maintenance|technician/)) return "industry_hvac";
    
    // Technology questions
    if (m.match(/whatsapp/)) return "tech_whatsapp";
    if (m.match(/ai|artificial|intelligence|machine learning|gpt|chatbot|bot|smart/)) return "tech_ai";
    if (m.match(/integrat|connect|sync|crm|calendar|system|software|api/)) return "tech_integrations";
    
    // Process/timeline
    if (m.match(/how long|timeline|time|fast|quick|setup|implement|start|begin|process|work|step|phase/)) return "process";
    
    // Results/proof
    if (m.match(/result|roi|return|proof|case study|example|client|success|testimonial|evidence|number|metric|data/)) return "results";
    
    // Company info
    if (m.match(/who are|about you|company|team|founder|based|location|where are|background|story/)) return "about";
    
    // Objections
    if (m.match(/expensive|too much|can't afford|budget.*tight|cost.*high/)) return "objection_expensive";
    if (m.match(/not sure|uncertain|maybe|thinking|consider|don't know|unsure/)) return "objection_unsure";
    if (m.match(/think about|need time|decide later|get back|mull over/)) return "objection_think";
    if (m.match(/already have|have someone|staff|employee|team handle|current|existing/)) return "objection_have_someone";
    if (m.match(/tried|chatbot|didn't work|bad experience|past|before|failed/)) return "objection_tried_chatbots";
    if (m.match(/too small|small business|just me|solo|tiny|little/)) return "objection_too_small";
    if (m.match(/not ready|later|next month|next year|busy|not now|wait/)) return "objection_not_ready";
    if (m.match(/trust|skeptic|doubt|believe|scam|legit|real/)) return "objection_trust";
    if (m.match(/partner|spouse|wife|husband|co-founder|boss|discuss.*with/)) return "objection_partner";
    if (m.match(/see.*result|proof|evidence|show me|demonstrate/)) return "objection_proof";
    if (m.match(/cheaper|discount|deal|lower|negotiate|better price/)) return "objection_cheaper";
    
    // Comparisons
    if (m.match(/vs|versus|compared|difference|better|competitor|alternative|other|similar/)) return "comparison";
    if (m.match(/why you|why machinemind|what makes|different|special|unique|stand out/)) return "differentiator";
    
    // Trust/risk
    if (m.match(/guarantee|risk|contract|commitment|cancel|refund|safe|secure/)) return "trust";
    
    // Specific questions
    if (m.match(/after.?hours|night|weekend|24.?7|always|sleep|late|early morning/)) return "after_hours";
    if (m.match(/human|real person|escalate|transfer|handoff|someone.*help|live agent/)) return "human_handoff";
    if (m.match(/custom|personalize|brand|voice|tone|specific|tailored/)) return "customization";
    if (m.match(/secure|security|data|privacy|safe|gdpr|compliant|encrypt/)) return "security";
    if (m.match(/support|help|problem|issue|maintain|update|fix/)) return "support";
    
    // Referral
    if (m.match(/referral|partner|commission|affiliate|earn|introduce|recommend clients/)) return "referral";
    
    // Positive/negative signals
    if (m.match(/thank|thanks|helpful|great|awesome|perfect|appreciate|wonderful|amazing/)) return "thanks";
    if (m.match(/no thanks|not interested|stop|bye|goodbye|leave|not for me|pass/)) return "not_interested";
    
    // Questions about specific features
    if (m.match(/voice|audio|recording|call|phone/)) return "voice_features";
    if (m.match(/report|analytics|dashboard|track|measure|metric/)) return "analytics";
    
    return "general";
  }

  function sofiaRespond(userMessage, currentContext) {
    var intent = detectIntent(userMessage);
    var K = SOFIA_KNOWLEDGE;
    var newContext = Object.assign({}, currentContext, { questionsAsked: currentContext.questionsAsked + 1 });
    
    // Update context based on intent
    if (intent.startsWith("industry_")) {
      newContext.industry = intent.replace("industry_", "");
    }
    if (intent.startsWith("objection_")) {
      newContext.objectionCount = (newContext.objectionCount || 0) + 1;
    }
    if (intent === "high_intent") {
      newContext.interested = true;
      newContext.conversationStage = "closing";
    }
    
    setContext(newContext);
    
    // Dynamic CTAs based on conversation stage
    var ctaVariations = [
      "\n\n📅 Want to see how this works for your business? " + CAL_LINK,
      "\n\n📅 Worth a 15-min call to explore? No pitch, just diagnosis: " + CAL_LINK,
      "\n\n📅 Let's map out exactly what we'd build for you: " + CAL_LINK,
      "\n\n📅 Free strategy call — see your custom system before deciding: " + CAL_LINK
    ];
    var cta = ctaVariations[newContext.questionsAsked % ctaVariations.length];
    
    var softCta = "\n\nWhat else can I tell you?";
    var closingCta = "\n\n📅 Ready to see what we'd build? Pick a time: " + CAL_LINK;
    
    switch (intent) {
      case "spanish":
        newContext.language = "es";
        setContext(newContext);
        return K.spanish.greeting;
      
      case "greeting":
        return "Hey! 👋 Great to have you here.\n\nAre you looking to capture more bookings, automate customer communication, or just curious about what AI can do for your business?";
      
      case "high_intent":
        return "Love that energy! 🎯\n\nNext step is a quick 15-minute strategy call where we:\n\n1. Understand your specific situation and pain points\n2. Show you exactly what we'd build\n3. Give you realistic timeline and ROI numbers\n\nNo pressure, no commitment — just see if it makes sense.\n\n📅 Pick a time that works: " + CAL_LINK + "\n\nOr if you have more questions first, I'm here!";
      
      case "pricing":
        newContext.hasShownPricing = true;
        setContext(newContext);
        return "Great question — let me be transparent.\n\n**Typical investment:**\n• " + K.pricing.setup + " (one-time, can split into 2 payments)\n• " + K.pricing.starterMonthly + " ongoing\n\n**What you get back:**\n• " + K.stats.revenueRecovered + "\n• System typically pays for itself in week 2-3\n\n" + K.pricing.guarantee + "\n\n📅 A 15-minute call gives you exact pricing for your situation: " + CAL_LINK + "\n\nWhat kind of business are you running? That'll help me give you more specific numbers.";
      
      case "booking":
        return "Let's do it! 🎯\n\nIn 15 minutes, we'll:\n• Map your current inquiry flow and identify leaks\n• Show you exactly what your custom system would look like\n• Give you realistic timeline and ROI projection\n\nNo pitch, no pressure. If we're not a fit, I'll tell you.\n\n📅 Pick a time: " + CAL_LINK;
      
      case "services":
        return "We build AI infrastructure that captures revenue 24/7:\n\n🤖 **WhatsApp AI Concierge** — Handles inquiries, bookings, FAQs instantly\n\n💰 **Revenue Recovery** — Captures after-hours inquiries (60% of leads!), follows up automatically\n\n📊 **Booking Automation** — Manages reservations, cuts no-shows by 40-60%\n\n⭐ **Review Engine** — Collects 3-4x more reviews automatically\n\n🌍 **Multi-Language** — Spanish, English, Portuguese and more\n\nThe system responds in under 30 seconds, 24/7. Your competitors respond in 4+ hours.\n\nWhich of these matters most to your business?";
      
      case "service_concierge":
        var sc = K.services.concierge;
        return "**WhatsApp AI Booking Assistant**\n\n" + sc.description + "\n\nWhat it handles:\n" + sc.features.slice(0,5).map(function(f) { return "• " + f; }).join("\n") + "\n\nThe AI sounds like you because we train it on YOUR business, YOUR tone, YOUR policies. It's not a generic bot — it's YOUR trained employee that never sleeps." + cta;
      
      case "service_revenue":
        return "**Revenue Recovery** — This is the big one.\n\n" + K.stats.firstResponder + "\n\nBut most businesses take 2-4 hours to respond. Every hour of delay = money walking to your competitor.\n\nWe capture:\n• After-hours inquiries (60% of all leads!)\n• Abandoned bookings with follow-up sequences\n• Warm leads that go cold without nurturing\n• Past customers ready to return\n\n💰 **Average result: " + K.stats.revenueRecovered + "**\n\nThe system pays for itself. Usually in week 2 or 3." + cta;
      
      case "service_booking":
        var sb = K.services.reminders;
        return "**Booking Automation & No-Show Prevention**\n\n" + sb.description + "\n\n• " + sb.features.join("\n• ") + "\n\n📊 Restaurants report " + K.stats.noShowReduction + " fewer no-shows. At $50 average cover, that's thousands recovered monthly." + cta;
      
      case "service_reviews":
        var sr = K.services.reviews;
        return "**Automated Review Engine**\n\n" + sr.description + "\n\n• " + sr.features.join("\n• ") + "\n\nMore reviews = higher Google ranking = more bookings. It's a flywheel." + cta;
      
      case "service_followup":
        var sf = K.services.followUp;
        return "**Automated Follow-Up Sequences**\n\n" + sf.description + "\n\n• " + sf.features.join("\n• ") + "\n\nMost leads aren't lost because they said no — they're lost because nobody followed up. We fix that automatically." + cta;
      
      case "service_multilingual":
        return "**Multi-Language Support**\n\nYour AI speaks:\n• Native-quality Spanish (Latin American dialects)\n• English\n• Portuguese\n• French\n• German\n• And more on request\n\nNot just translation — cultural context awareness. The AI knows how to communicate appropriately in each language.\n\n🌍 Hotels report 25% increase in international bookings after implementation." + cta;
      
      case "industry_hospitality":
        var h = K.industries.hospitality;
        newContext.hasShownCaseStudy = true;
        setContext(newContext);
        return "**Hotels & Hospitality** — Our sweet spot! 🏨\n\nPain points we eliminate:\n" + h.painPoints.slice(0,4).map(function(p) { return "• " + p; }).join("\n") + "\n\n**Results:**\n💰 " + h.results.revenue + "\n📈 " + h.results.bookings + "\n⏱️ " + h.results.time + "\n\n**Case Study:** " + h.caseStudy + cta;
      
      case "industry_restaurant":
        var r = K.industries.restaurant;
        newContext.hasShownCaseStudy = true;
        setContext(newContext);
        return "**Restaurants & Nightlife** — We solve the phone-during-service problem! 🍽️\n\nPain points we eliminate:\n" + r.painPoints.slice(0,4).map(function(p) { return "• " + p; }).join("\n") + "\n\n**Results:**\n📉 " + r.results.noShows + "\n💰 " + r.results.revenue + "\n⭐ " + r.results.reviews + "\n\n**Case Study:** " + r.caseStudy + cta;
      
      case "industry_tours":
        var t = K.industries.tours;
        newContext.hasShownCaseStudy = true;
        setContext(newContext);
        return "**Tours & Experiences** — Perfect for operators! ⛵\n\nPain points we eliminate:\n" + t.painPoints.slice(0,4).map(function(p) { return "• " + p; }).join("\n") + "\n\n**Results:**\n📈 " + t.results.bookings + "\n🎯 " + t.results.conversion + "\n⭐ " + t.results.reviews + "\n\n**Case Study:** " + t.caseStudy + cta;
      
      case "industry_services":
        var s = K.industries.services;
        newContext.hasShownCaseStudy = true;
        setContext(newContext);
        return "**Professional Services** — We turn inquiries into consultations! 💼\n\nPain points we eliminate:\n" + s.painPoints.slice(0,4).map(function(p) { return "• " + p; }).join("\n") + "\n\n**Results:**\n📈 " + s.results.leads + "\n⏱️ " + s.results.time + "\n🎯 " + s.results.conversion + "\n\n**Case Study:** " + s.caseStudy + cta;
      
      case "industry_hvac":
        var hv = K.industries.hvac;
        newContext.hasShownCaseStudy = true;
        setContext(newContext);
        return "**HVAC & Home Services** — Never miss an emergency call again! 🔧\n\nPain points we eliminate:\n" + hv.painPoints.slice(0,4).map(function(p) { return "• " + p; }).join("\n") + "\n\n**Results:**\n🚨 " + hv.results.emergency + "\n💰 " + hv.results.quotes + "\n📅 " + hv.results.scheduling + "\n\n**Case Study:** " + hv.caseStudy + cta;
      
      case "tech_whatsapp":
        var tw = K.technology.whatsapp;
        return "**WhatsApp Integration** — Huge for Latin America! 💬\n\n" + tw.why + "\n\nOur WhatsApp AI handles:\n" + tw.capabilities.slice(0,6).map(function(c) { return "• " + c; }).join("\n") + "\n\nWe use the official WhatsApp Business API — fully compliant, unlimited conversations, no risk of getting banned." + cta;
      
      case "tech_ai":
        var ta = K.technology.ai;
        return "**Our AI Technology**\n\n" + ta.notChatbot + "\n\n**Capabilities:**\n" + ta.capabilities.slice(0,5).map(function(c) { return "• " + c; }).join("\n") + "\n\nThe difference? A chatbot breaks when asked something unexpected. Our AI figures out the intent and helps anyway. It's genuinely intelligent, not just keyword matching." + cta;
      
      case "tech_integrations":
        return "**Integrations** — We connect with what you already use\n\n" + K.technology.integrations.approach + "\n\nCommon integrations:\n" + K.technology.integrations.supported.slice(0,7).map(function(i) { return "• " + i; }).join("\n") + "\n\nWhat systems do you currently use? I can tell you if we integrate.";
      
      case "process":
        var p = K.process;
        return "**How It Works** — We move fast! ⚡\n\n" + p.steps.map(function(step, i) { return (i+1) + ". **" + step.name + "** (" + step.duration + ")\n   " + step.description; }).join("\n\n") + "\n\n📊 **Timeline:**\n• Setup: " + p.timeline.setup + "\n• Live: " + p.timeline.live + "\n• First results: " + p.timeline.results + "\n• ROI: " + p.timeline.roi + cta;
      
      case "results":
        return "**Real Results** — Numbers don't lie 📊\n\n💰 Revenue recovered: " + K.stats.revenueRecovered + "\n⚡ Response time: " + K.stats.responseTime + "\n🌙 After-hours capture: " + K.stats.afterHours + "\n📈 Booking increase: " + K.stats.bookingIncrease + "\n📉 No-show reduction: " + K.stats.noShowReduction + "\n⏱️ Time saved: " + K.stats.timeSaved + "\n⭐ Client satisfaction: " + K.stats.nps + "\n\n" + K.pricing.guarantee + cta;
      
      case "about":
        return "**About MachineMind**\n\n" + K.company.mission + "\n\n📍 Based in " + K.company.location + ", serving " + K.company.markets + "\n\n🎯 " + K.company.differentiator + "\n\n💡 " + K.company.philosophy + cta;
      
      // Objection handling - sophisticated responses
      case "objection_expensive":
        return K.objections.tooExpensive.response + "\n\n" + K.objections.tooExpensive.followUp + softCta;
      
      case "objection_unsure":
      case "objection_think":
        return K.objections.needToThink.response + "\n\n" + K.objections.needToThink.urgency + "\n\n📅 No commitment call to see exactly what we'd build: " + CAL_LINK;
      
      case "objection_have_someone":
        return K.objections.haveSomeone.response + "\n\n" + K.objections.haveSomeone.reframe + softCta;
      
      case "objection_tried_chatbots":
        return K.objections.triedChatbots.response + "\n\n" + K.objections.triedChatbots.question;
      
      case "objection_too_small":
        return K.objections.tooSmall.response + "\n\n" + K.objections.tooSmall.math + cta;
      
      case "objection_not_ready":
        return K.objections.notReady.response + "\n\n" + K.objections.notReady.alternatives;
      
      case "objection_trust":
        return K.objections.dontTrustAI.response + "\n\n" + K.objections.dontTrustAI.proof + cta;
      
      case "objection_partner":
        return K.objections.partnerDecision.response + "\n\n" + K.objections.partnerDecision.alternative;
      
      case "objection_proof":
        var industryCS = newContext.industry ? K.industries[newContext.industry] : K.industries.hospitality;
        return K.objections.seenResultsFirst.response + "\n\n**Case Study:** " + industryCS.caseStudy + cta;
      
      case "objection_cheaper":
        return K.objections.cheaper.response + "\n\n" + K.objections.cheaper.value + cta;
      
      case "comparison":
      case "differentiator":
        return "**What Makes Us Different**\n\n🏢 **vs Agencies:** " + K.comparisons.vsAgencies + "\n\n🤖 **vs Chatbots:** " + K.comparisons.vsChatbots + "\n\n👥 **vs Hiring Staff:** " + K.comparisons.vsHiring + "\n\n🌎 **vs Competitors:** " + K.comparisons.vsCompetitors + cta;
      
      case "trust":
        return "**Zero Risk to Get Started**\n\n🤝 " + K.trust.noLockIn + "\n\n💯 " + K.trust.risk + "\n\n✓ " + K.trust.transparency + "\n\n🛡️ " + K.trust.support + "\n\nStill have concerns? Ask me anything — I'd rather address them now than have you wonder later." + cta;
      
      case "after_hours":
        return "**After-Hours Coverage** — Where the money is!\n\n" + K.stats.afterHours + " — that's more than HALF your potential revenue happening when you're asleep or off the clock.\n\nOur AI works 24/7/365. No sick days, no vacations, no complaining.\n\nThat European tourist at 2am? The business owner browsing on Sunday? They become YOUR customers instead of going to whoever responds first." + cta;
      
      case "human_handoff":
        return "**Human Handoff** — AI + Human, not AI vs Human\n\nOur system knows when to bring in a real person:\n• Complex negotiations or special requests\n• VIP guests needing personal attention\n• Complaints requiring empathy and judgment\n• Anytime the customer specifically asks\n• Situations the AI is uncertain about\n\nThe AI handles the 80% that's routine so your team focuses on the 20% that needs human touch. You're notified instantly when escalation happens." + cta;
      
      case "customization":
        return "**Full Customization** — Your AI, Your Brand\n\nEvery system is tailored:\n• Voice and tone matching YOUR brand personality\n• YOUR specific FAQs, policies, and procedures\n• YOUR booking rules, availability, and pricing\n• YOUR upsells and cross-sells\n• YOUR escalation preferences\n\nIt sounds like you because we train it on how you actually communicate. We don't hand you a generic template." + cta;
      
      case "security":
        return "**Security & Privacy**\n\nWe take data seriously:\n• Official WhatsApp Business API (fully compliant)\n• Encrypted data in transit and at rest\n• No data shared with third parties\n• You own your customer data\n• Regular security audits\n• GDPR-conscious practices\n\nYour customer data stays your customer data. Period." + cta;
      
      case "support":
        return "**Ongoing Support & Optimization**\n\nWhat you get:\n• Dedicated onboarding and training\n• Continuous AI improvement based on real conversations\n• Priority support for any issues\n• Monthly performance reviews\n• Updates and new features included\n• Direct WhatsApp access to our team\n\nYou're not buying software and being left alone. Your success is our success — we're partners." + cta;
      
      case "referral":
        var ref = K.referral;
        return "**" + ref.program + "** 🤝\n\nPerfect for: " + ref.audience + "\n\n💰 **Commission:** " + ref.commission + "\n\n✅ **Your effort:** " + ref.effort + "\n\n🎯 **Why it works:** " + ref.fit + "\n\nInterested in becoming a referral partner? Let me know and I'll connect you with our partnership team.";
      
      case "voice_features":
        return "**Voice & Audio Capabilities**\n\nOur AI handles:\n• Voice notes — understands what people say and responds appropriately\n• Can send voice responses if preferred\n• Transcription of audio messages\n• Call-to-action for phone calls when needed\n\nIn Latin America, many people prefer voice notes over typing. We support that fully." + cta;
      
      case "analytics":
        return "**Analytics & Reporting Dashboard**\n\nSee everything in real-time:\n• Every conversation and its outcome\n• Response times and resolution rates\n• Booking conversion metrics\n• Revenue attribution\n• Busiest hours and days\n• Customer sentiment trends\n• Team performance (if applicable)\n\nYou'll know exactly what's working and what needs attention. Data-driven optimization." + cta;
      
      case "thanks":
        return "Happy to help! 😊\n\nIf you want to explore what this could look like for your specific business, I'm here.\n\nOr jump straight to a strategy call: " + CAL_LINK + "\n\nAnything else on your mind?";
      
      case "not_interested":
        return "No problem at all! 👋\n\nIf your situation changes or you want to explore this later, we're here. Just reach out anytime.\n\nGood luck with your business! 🙌";
      
      default:
        // Smart fallback based on conversation stage
        if (newContext.questionsAsked <= 2) {
          return "I want to help with what matters most to you.\n\nAre you:\n🏨 Running a hotel or hospitality business?\n🍽️ In restaurants or nightlife?\n⛵ Operating tours or experiences?\n💼 Offering professional services?\n🔧 In home services or HVAC?\n\nOr just tell me what challenge you're facing — I'll show you how we can help!";
        } else if (newContext.questionsAsked <= 5) {
          return "Let me make sure I'm addressing what you need.\n\nI can tell you about:\n• Exactly what our AI does and how it works\n• Real results and ROI for your industry\n• The process and timeline\n• Why we're different from generic chatbots\n• Pricing and how it pays for itself\n\nWhat would be most useful?" + softCta;
        } else {
          return "Sounds like you've got a good sense of what we do.\n\nThe best next step is usually a 15-minute strategy call where we can:\n• Map out YOUR specific situation\n• Show you exactly what we'd build\n• Give you realistic numbers\n\nNo pressure — if we're not a fit, I'll tell you.\n\n📅 " + CAL_LINK + "\n\nOr ask me anything else!";
        }
    }
  }

  function handleSend() {
    if (!input.trim()) return;
    var userText = input.trim();
    setMessages(function(prev) { return prev.concat([{ role: "user", text: userText }]); });
    setInput("");
    setIsTyping(true);
    var response = sofiaRespond(userText, context);
    var delay = Math.min(800 + response.length * 1.5, 2800);
    setTimeout(function() {
      setMessages(function(prev) { return prev.concat([{ role: "sofia", text: response }]); });
      setIsTyping(false);
    }, delay);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  function handleQuickAction(action) {
    setMessages(function(prev) { return prev.concat([{ role: "user", text: action }]); });
    setIsTyping(true);
    var response = sofiaRespond(action, context);
    setTimeout(function() {
      setMessages(function(prev) { return prev.concat([{ role: "sofia", text: response }]); });
      setIsTyping(false);
    }, 1200);
  }

  if (!isOpen) return null;

  var quickActions = messages.length <= 2 ? 
    ["What do you do?", "Show me results", "How much does it cost?", "Book a call"] :
    messages.length <= 4 ?
    ["Tell me more", "See case studies", "How does it work?", "I'm interested"] :
    [];

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
      quickActions.length > 0 && React.createElement("div", { style: { padding: "8px 16px", display: "flex", gap: "8px", flexWrap: "wrap", borderTop: "1px solid " + COLORS.border + "50" } },
        quickActions.map(function(action) {
          return React.createElement("button", { key: action, onClick: function() { handleQuickAction(action); }, style: { padding: "6px 12px", fontSize: "11px", borderRadius: "16px", border: "1px solid " + COLORS.border, background: "transparent", color: COLORS.text, cursor: "pointer", transition: "all 0.2s" } }, action);
        })
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

// ═══════════════════════════════════════════════════════════════════════════════
// PREMIUM COMPONENTS - ONE OF A KIND
// ═══════════════════════════════════════════════════════════════════════════════

function AnimatedCounter(props) {
  var end = props.end || 0;
  var prefix = props.prefix || "";
  var suffix = props.suffix || "";
  var duration = props.duration || 2000;
  var [count, setCount] = useState(0);
  var [started, setStarted] = useState(false);

  useEffect(function() {
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !started) {
        setStarted(true);
      }
    }, { threshold: 0.3 });
    var el = document.getElementById("counter-" + end);
    if (el) observer.observe(el);
    return function() { if (el) observer.unobserve(el); };
  }, [end, started]);

  useEffect(function() {
    if (!started) return;
    var startTime = Date.now();
    var animate = function() {
      var elapsed = Date.now() - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [started, end, duration]);

  return React.createElement("span", { id: "counter-" + end }, prefix + count.toLocaleString() + suffix);
}

function ResultsDashboard() {
  var metrics = [
    { value: 4200, prefix: "$", suffix: "+", label: "Monthly Revenue Recovered", subtext: "Average per client" },
    { value: 30, prefix: "<", suffix: "s", label: "Response Time", subtext: "vs 4+ hours industry avg" },
    { value: 85, prefix: "", suffix: "%", label: "Conversion Rate", subtext: "Inquiry to booking" },
    { value: 24, prefix: "", suffix: "/7", label: "Always Online", subtext: "Never miss a lead" }
  ];

  return React.createElement("div", { style: { marginTop: "60px", marginBottom: "60px" } },
    React.createElement("div", { style: { textAlign: "center", marginBottom: "40px" } },
      React.createElement("div", { style: { fontSize: "11px", letterSpacing: "0.2em", color: COLORS.gold, marginBottom: "12px" } }, "LIVE PERFORMANCE METRICS"),
      React.createElement("h3", { style: { fontFamily: "system-ui", fontSize: "28px", fontWeight: 700, color: COLORS.text } }, "Results That Speak For Themselves")
    ),
    React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" } },
      metrics.map(function(m, i) {
        return React.createElement("div", {
          key: m.label,
          style: {
            background: "linear-gradient(135deg, " + COLORS.bgCard + ", rgba(0,212,255,0.05))",
            border: "1px solid " + COLORS.border,
            borderRadius: "16px",
            padding: "28px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            opacity: 0,
            animation: "fadeIn 0.6s " + (i * 150) + "ms forwards"
          }
        },
          React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, " + COLORS.cyan + ", " + COLORS.gold + ")" } }),
          React.createElement("div", { style: { fontSize: "42px", fontWeight: 700, color: COLORS.cyan, marginBottom: "8px", textShadow: "0 0 30px " + COLORS.cyanGlow } },
            React.createElement(AnimatedCounter, { end: m.value, prefix: m.prefix, suffix: m.suffix, duration: 2000 + i * 200 })
          ),
          React.createElement("div", { style: { fontSize: "14px", fontWeight: 600, color: COLORS.text, marginBottom: "4px" } }, m.label),
          React.createElement("div", { style: { fontSize: "11px", color: COLORS.textMuted } }, m.subtext)
        );
      })
    )
  );
}

function BeforeAfterComparison() {
  var comparisons = [
    { before: "4+ hours response time", after: "<30 seconds response", icon: "⚡" },
    { before: "60% inquiries missed after-hours", after: "0% missed - 24/7 coverage", icon: "🌙" },
    { before: "Manual booking management", after: "Automated AI handling", icon: "🤖" },
    { before: "Lost revenue to competitors", after: "$2K-$8K+ monthly recovered", icon: "💰" },
    { before: "Language barriers", after: "5+ languages fluently", icon: "🌍" },
    { before: "Inconsistent follow-up", after: "100% follow-up rate", icon: "✓" }
  ];

  return React.createElement("div", { style: { marginTop: "60px", marginBottom: "60px" } },
    React.createElement("div", { style: { textAlign: "center", marginBottom: "40px" } },
      React.createElement("div", { style: { fontSize: "11px", letterSpacing: "0.2em", color: COLORS.gold, marginBottom: "12px" } }, "THE TRANSFORMATION"),
      React.createElement("h3", { style: { fontFamily: "system-ui", fontSize: "28px", fontWeight: 700, color: COLORS.text } }, "Before & After MachineMind")
    ),
    React.createElement("div", { style: { display: "grid", gap: "16px", maxWidth: "800px", margin: "0 auto" } },
      comparisons.map(function(c, i) {
        return React.createElement("div", {
          key: i,
          style: {
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "20px",
            alignItems: "center",
            padding: "20px",
            background: COLORS.bgCard,
            borderRadius: "12px",
            border: "1px solid " + COLORS.border,
            opacity: 0,
            animation: "fadeIn 0.5s " + (i * 100) + "ms forwards"
          }
        },
          React.createElement("div", { style: { textAlign: "right", color: "rgba(255,100,100,0.8)", fontSize: "14px", textDecoration: "line-through", opacity: 0.7 } }, c.before),
          React.createElement("div", { style: { width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", boxShadow: "0 0 20px " + COLORS.cyanGlow } }, c.icon),
          React.createElement("div", { style: { textAlign: "left", color: COLORS.cyan, fontSize: "14px", fontWeight: 600 } }, c.after)
        );
      })
    )
  );
}

function TrustBadges() {
  var badges = [
    { icon: "🔒", label: "Enterprise Security", desc: "Bank-level encryption" },
    { icon: "⚡", label: "99.9% Uptime", desc: "Always available" },
    { icon: "✅", label: "WhatsApp Certified", desc: "Official API partner" },
    { icon: "🛡️", label: "GDPR Compliant", desc: "Data protection" },
    { icon: "🏆", label: "94+ NPS Score", desc: "Client satisfaction" },
    { icon: "💳", label: "ROI Guaranteed", desc: "Or we work free" }
  ];

  return React.createElement("div", { style: { marginTop: "40px", padding: "32px", background: "rgba(0,0,0,0.3)", borderRadius: "16px", border: "1px solid " + COLORS.border } },
    React.createElement("div", { style: { textAlign: "center", marginBottom: "24px" } },
      React.createElement("div", { style: { fontSize: "11px", letterSpacing: "0.15em", color: COLORS.gold } }, "TRUSTED & CERTIFIED")
    ),
    React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px" } },
      badges.map(function(b, i) {
        return React.createElement("div", {
          key: b.label,
          style: {
            textAlign: "center",
            padding: "16px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            opacity: 0,
            animation: "fadeIn 0.4s " + (i * 80) + "ms forwards"
          }
        },
          React.createElement("div", { style: { fontSize: "28px", marginBottom: "8px" } }, b.icon),
          React.createElement("div", { style: { fontSize: "12px", fontWeight: 600, color: COLORS.text, marginBottom: "2px" } }, b.label),
          React.createElement("div", { style: { fontSize: "10px", color: COLORS.textMuted } }, b.desc)
        );
      })
    )
  );
}

function PremiumHeroGlow() {
  return React.createElement("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 } },
    React.createElement("div", { style: {
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "800px",
      height: "800px",
      background: "radial-gradient(circle, " + COLORS.cyanGlow + " 0%, transparent 70%)",
      opacity: 0.15,
      animation: "pulse 4s ease-in-out infinite"
    } }),
    React.createElement("div", { style: {
      position: "absolute",
      bottom: "10%",
      left: "20%",
      width: "600px",
      height: "600px",
      background: "radial-gradient(circle, " + COLORS.goldDim + " 0%, transparent 70%)",
      opacity: 0.2,
      animation: "pulse 5s ease-in-out infinite 1s"
    } }),
    React.createElement("div", { style: {
      position: "absolute",
      top: "60%",
      right: "10%",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
      opacity: 0.3,
      animation: "pulse 6s ease-in-out infinite 2s"
    } })
  );
}

function InstagramIcon() {
  return React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
    React.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
    React.createElement("circle", { cx: "18", cy: "6", r: "1.5", fill: "currentColor" })
  );
}

export default function Home() {
  var [phase, setPhase] = useState(0);
  var [selected, setSelected] = useState(null);
  var [logs, setLogs] = useState([]);
  var [progress, setProgress] = useState(0);
  var [caps, setCaps] = useState([]);
  var [chatOpen, setChatOpen] = useState(false);

  var interests = [{ id: "hospitality", label: "Hospitality & Hotels", icon: "🏨" }, { id: "restaurant", label: "Restaurants & Clubs", icon: "🍽️" }, { id: "tours", label: "Tours & Experiences", icon: "⛵" }, { id: "services", label: "Professional Services", icon: "💼" }];
  var capData = { hospitality: [{ title: "REVENUE RECOVERY", items: ["24/7 Booking Response", "Abandoned Inquiry Recovery", "Upsell Automation", "Multi-language Support"] }, { title: "OPERATIONS", items: ["Reservation Management", "Guest Communication", "Review Generation", "Staff Coordination"] }, { title: "INTELLIGENCE", items: ["Demand Forecasting", "Competitor Monitoring", "Sentiment Analysis", "Revenue Optimization"] }], restaurant: [{ title: "BOOKING", items: ["WhatsApp Reservations", "Wait List Management", "VIP Recognition", "Event Coordination"] }, { title: "EXPERIENCE", items: ["Menu Inquiries", "Dietary Accommodations", "Special Requests", "Loyalty Programs"] }, { title: "OPERATIONS", items: ["Table Optimization", "Staff Alerts", "Inventory Triggers", "Review Response"] }], tours: [{ title: "LEAD CAPTURE", items: ["Instant Availability", "Custom Itineraries", "Group Coordination", "Payment Links"] }, { title: "EXPERIENCE", items: ["Pre-trip Communication", "Weather Updates", "Safety Protocols", "Photo Sharing"] }, { title: "GROWTH", items: ["Review Collection", "Referral Programs", "Seasonal Campaigns", "Partner Integration"] }], services: [{ title: "ACQUISITION", items: ["Lead Qualification", "Appointment Scheduling", "Proposal Delivery", "Follow-up Sequences"] }, { title: "DELIVERY", items: ["Project Updates", "Document Sharing", "Billing Reminders", "Satisfaction Surveys"] }, { title: "RETENTION", items: ["Anniversary Outreach", "Cross-sell Triggers", "Testimonial Requests", "Referral Incentives"] }] };
  var logMessages = ["Initializing neural pathways...", "Loading behavior models...", "Calibrating response vectors...", "Mapping communication protocols...", "Activating WhatsApp integration...", "Deploying sentiment analysis...", "Configuring multi-language...", "Establishing revenue tracking...", "Optimizing conversion algorithms...", "System ready."];

  useEffect(function() { var timer = setTimeout(function() { setPhase(1); }, 4000); return function() { clearTimeout(timer); }; }, []);
  useEffect(function() { if (phase !== 2) return; var i = 0; var interval = setInterval(function() { if (i < logMessages.length) { setLogs(function(prev) { return prev.concat([logMessages[i]]); }); setProgress((i + 1) / logMessages.length * 100); i++; } else { clearInterval(interval); setTimeout(function() { setPhase(3); }, 1000); } }, 800); return function() { clearInterval(interval); }; }, [phase]);
  useEffect(function() { if (phase === 3 && selected) { setCaps(capData[selected.id] || []); var timer = setTimeout(function() { setPhase(4); }, 12000); return function() { clearTimeout(timer); }; } }, [phase, selected]);

  function handleSelect(interest) { setSelected(interest); setPhase(2); setLogs([]); setProgress(0); }
  function handleBack() { if (phase > 1 && phase < 4) { setPhase(1); setSelected(null); setLogs([]); setProgress(0); setCaps([]); } }
  function handleLogoError(e) { e.target.style.display = "none"; if (e.target.nextSibling) e.target.nextSibling.style.display = "flex"; }

  return (
    React.createElement("div", { style: { minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily: "ui-monospace, monospace" } },
      React.createElement(PremiumHeroGlow),
      React.createElement(ParticleField, { intensity: phase >= 2 ? 1.5 : 0.8 }),
      phase > 1 && phase < 4 && React.createElement("button", { onClick: handleBack, style: { position: "fixed", top: "24px", left: "24px", padding: "12px 20px", borderRadius: "8px", border: "1px solid " + COLORS.border, background: COLORS.bgCard, color: COLORS.text, cursor: "pointer", zIndex: 100, fontFamily: "system-ui", fontSize: "14px" } }, "← Back"),
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
            React.createElement("a", { href: INSTAGRAM, target: "_blank", rel: "noopener noreferrer", style: { color: COLORS.textMuted } }, React.createElement(InstagramIcon)),
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: COLORS.textMuted } },
              React.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: COLORS.cyan, animation: "pulse 2s infinite" } }),
              phase === 4 ? "READY" : "ONLINE"
            )
          )
        ),
        phase === 0 && React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" } },
          React.createElement("div", { style: { position: "relative", width: "140px", height: "140px", marginBottom: "40px" } },
            React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.3, animation: "ping 3s 0s infinite" } }),
            React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.2, animation: "ping 3s 0.5s infinite" } }),
            React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.1, animation: "ping 3s 1s infinite" } }),
            React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px" } }, "⚡")
          ),
          React.createElement("h1", { style: { fontFamily: "system-ui", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" } },
            React.createElement(Typewriter, { text: "THE INFRASTRUCTURE BEHIND", speed: 50, delay: 800 })
          ),
          React.createElement("p", { style: { fontSize: "18px", color: COLORS.textMuted } },
            React.createElement(Typewriter, { text: "BUSINESSES THAT NEVER SLEEP", speed: 60, delay: 2800 })
          )
        ),
        phase === 1 && React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } },
          React.createElement("h2", { style: { fontSize: "14px", letterSpacing: "0.2em", color: COLORS.cyan, marginBottom: "16px" } },
            React.createElement(Typewriter, { text: "SELECT YOUR VERTICAL", speed: 40 })
          ),
          React.createElement("p", { style: { fontSize: "14px", color: COLORS.textMuted, marginBottom: "40px" } },
            React.createElement(Typewriter, { text: "We'll generate a custom AI infrastructure blueprint", speed: 30, delay: 1000 })
          ),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", width: "100%", maxWidth: "700px" } },
            interests.map(function(interest, i) {
              return React.createElement("button", { key: interest.id, onClick: function() { handleSelect(interest); }, style: { background: COLORS.bgCard, border: "1px solid " + COLORS.border, borderRadius: "12px", padding: "32px 20px", cursor: "pointer", textAlign: "center", transition: "all 0.3s", opacity: 0, animation: "fadeIn 0.6s " + (1600 + i * 150) + "ms forwards" } },
                React.createElement("div", { style: { fontSize: "44px", marginBottom: "16px" } }, interest.icon),
                React.createElement("div", { style: { fontFamily: "system-ui", fontSize: "15px", fontWeight: 600, color: COLORS.text } }, interest.label)
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
                React.createElement("div", { style: { fontSize: "12px", color: COLORS.cyan } }, "GENERATING BLUEPRINT FOR"),
                React.createElement("div", { style: { fontFamily: "system-ui", fontSize: "22px", fontWeight: 600 } }, selected && selected.label)
              )
            ),
            React.createElement(GlowingProgress, { progress: progress, label: "SYSTEM INITIALIZATION" }),
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
        phase === 3 && React.createElement("div", { style: { flex: 1, overflow: "auto", paddingBottom: "60px" } },
          React.createElement("div", { style: { textAlign: "center", marginBottom: "40px" } },
            React.createElement("div", { style: { fontSize: "12px", color: COLORS.gold, marginBottom: "8px" } }, "✦ BLUEPRINT GENERATED ✦"),
            React.createElement("h2", { style: { fontFamily: "system-ui", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700 } },
              React.createElement(Typewriter, { text: (selected ? selected.label : "") + " AI Infrastructure", speed: 40 })
            )
          ),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" } },
            caps.map(function(c, i) { return React.createElement(CapabilityCard, { key: c.title, title: c.title, items: c.items, delay: i * 700, active: true }); })
          ),
          selected && React.createElement(CaseStudy, { vertical: selected.id }),
          React.createElement(ResultsDashboard),
          React.createElement(BeforeAfterComparison),
          React.createElement(TrustBadges)
        ),
        phase === 4 && React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" } },
          React.createElement("div", { style: { width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", boxShadow: "0 0 60px " + COLORS.cyanGlow } },
            React.createElement("span", { style: { fontSize: "44px" } }, "✓")
          ),
          React.createElement("h2", { style: { fontFamily: "system-ui", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" } },
            React.createElement(Typewriter, { text: "Your Infrastructure is Ready", speed: 45 })
          ),
          React.createElement("p", { style: { fontSize: "16px", color: COLORS.textMuted, maxWidth: "480px", marginBottom: "40px", lineHeight: 1.6 } },
            React.createElement(Typewriter, { text: "This runs 24/7 while you sleep. Zero missed inquiries. Zero lost revenue.", speed: 30, delay: 2000 })
          ),
          React.createElement("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" } },
            React.createElement("button", { onClick: function() { window.open(CAL_LINK, "_blank"); }, style: { background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", border: "none", borderRadius: "8px", padding: "18px 40px", fontSize: "14px", fontWeight: 600, color: COLORS.bg, cursor: "pointer", fontFamily: "system-ui", opacity: 0, animation: "fadeIn 0.6s 3s forwards" } }, "Schedule Your Build →"),
            React.createElement("button", { onClick: function() { setPhase(1); setSelected(null); setCaps([]); }, style: { background: "transparent", border: "1px solid " + COLORS.border, borderRadius: "8px", padding: "18px 32px", fontSize: "14px", color: COLORS.text, cursor: "pointer", fontFamily: "system-ui", opacity: 0, animation: "fadeIn 0.6s 3.2s forwards" } }, "← Explore Another")
          ),
          React.createElement("p", { style: { marginTop: "20px", fontSize: "12px", color: COLORS.textMuted, opacity: 0, animation: "fadeIn 0.5s 4s forwards" } }, "15-min call • No commitment • See what we'll build"),
          React.createElement("div", { style: { marginTop: "50px", width: "100%", maxWidth: "800px", opacity: 0, animation: "fadeIn 0.6s 4.5s forwards" } },
            React.createElement(TrustBadges)
          ),
          React.createElement("a", { href: INSTAGRAM, target: "_blank", rel: "noopener noreferrer", style: { marginTop: "32px", color: COLORS.textMuted, fontSize: "14px", textDecoration: "none", opacity: 0, animation: "fadeIn 0.5s 5.5s forwards" } }, "@machinemindconsulting")
        )
      ),
      React.createElement(SofiaChat, { isOpen: chatOpen, onClose: function() { setChatOpen(false); } }),
      React.createElement("button", { onClick: function() { setChatOpen(!chatOpen); }, style: { position: "fixed", bottom: "24px", right: "24px", width: "64px", height: "64px", borderRadius: "50%", border: "none", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", boxShadow: "0 0 30px " + COLORS.cyanGlow, cursor: "pointer", fontSize: "28px", zIndex: 999, transition: "transform 0.3s", transform: chatOpen ? "rotate(90deg)" : "rotate(0)", display: "flex", alignItems: "center", justifyContent: "center" } }, chatOpen ? "×" : "💬"),
      !chatOpen && React.createElement("div", { style: { position: "fixed", bottom: "76px", right: "24px", width: "12px", height: "12px", borderRadius: "50%", background: COLORS.green, border: "2px solid " + COLORS.bg, zIndex: 1000, animation: "pulse 2s infinite" } }),
      React.createElement("style", null, "@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } @keyframes ping { 0% { transform: scale(1); opacity: 0.3; } 75%, 100% { transform: scale(1.8); opacity: 0; } } @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } } * { margin: 0; padding: 0; box-sizing: border-box; } body { background: #0d1117; } a:hover { color: #00d4ff !important; }")
    )
  );
}
