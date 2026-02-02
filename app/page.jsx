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

const CAL_LINK = "https://cal.com/machine-mind/machinemind-strategy-session";
const INSTAGRAM = "https://www.instagram.com/machinemindconsulting";

function SofiaChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { role: "sofia", text: "Hey! 👋 I'm Sofia, MachineMind's AI assistant. I can tell you about our services, results, and capabilities. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(function scrollToBottom() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function sofiaRespond(userMessage) {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing") || msg.includes("how much") || msg.includes("fee") || msg.includes("rate") || msg.includes("budget")) {
      return "Great question! Our solutions are customized based on your specific needs. The best way to get accurate pricing is a quick 15-minute strategy call.\n\n📅 Book free: " + CAL_LINK + "\n\nNo commitment - just clarity on what's possible.";
    }
    
    if (msg.includes("book") || msg.includes("call") || msg.includes("schedule") || msg.includes("meeting") || msg.includes("talk")) {
      return "Absolutely! Book a free 15-minute strategy session:\n\n📅 " + CAL_LINK + "\n\nWe'll understand your challenges, show what we can build, and give you a realistic timeline.";
    }
    
    if (msg.includes("service") || msg.includes("what do you") || msg.includes("offer") || msg.includes("help")) {
      return "MachineMind builds AI automation that works 24/7:\n\n🤖 AI Concierge Systems (WhatsApp, Web, Voice)\n💰 Revenue Recovery Automation\n📊 Booking & Reservation Management\n🌍 Multi-language Support\n\nWe specialize in hospitality, restaurants, tours & professional services. Which interests you?";
    }
    
    if (msg.includes("revenue") || msg.includes("roi") || msg.includes("results") || msg.includes("recover")) {
      return "Our clients see real impact:\n\n🏨 Hotels: $3,000-8,000/mo recovered\n🍽️ Restaurants: 40% fewer no-shows\n⛵ Tours: 35%+ booking increase\n💼 Services: 50% more qualified leads\n\nThe math: businesses miss 60% of after-hours inquiries. We capture them.";
    }
    
    if (msg.includes("how long") || msg.includes("timeline") || msg.includes("fast")) {
      return "We move fast! ⚡\n\n• Initial Setup: 7-14 days\n• Full System Live: 2-3 weeks\n• First Results: Within 30 days\n\nYour AI can be handling real inquiries in two weeks.";
    }
    
    if (msg.includes("whatsapp")) {
      return "WhatsApp is our specialty! 💬\n\n• Respond instantly 24/7\n• Handle bookings & payments\n• Multi-language support\n• Automated reminders\n• Review collection\n\nClients recover $2,000-8,000+ monthly from after-hours inquiries alone.";
    }
    
    return "I can help with:\n\n• Our AI automation services\n• Revenue recovery results\n• Implementation timeline\n• How the process works\n\nOr book a free strategy call: " + CAL_LINK;
  }

  function handleSend() {
    if (!input.trim()) return;
    var userText = input.trim();
    setMessages(function(prev) { return prev.concat([{ role: "user", text: userText }]); });
    setInput("");
    setIsTyping(true);
    setTimeout(function() {
      var response = sofiaRespond(userText);
      setMessages(function(prev) { return prev.concat([{ role: "sofia", text: response }]); });
      setIsTyping(false);
    }, 1000);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleSend();
  }

  if (!isOpen) return null;

  return (
    <div style={{ position: "fixed", bottom: "100px", right: "24px", width: "360px", maxWidth: "calc(100vw - 48px)", height: "480px", background: COLORS.bgCard, borderRadius: "16px", border: "1px solid " + COLORS.border, boxShadow: "0 0 40px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", zIndex: 1000 }}>
      <div style={{ padding: "16px", background: "linear-gradient(135deg, " + COLORS.cyan + "20, " + COLORS.gold + "10)", borderBottom: "1px solid " + COLORS.border, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🤖</div>
          <div>
            <div style={{ fontWeight: 600, color: COLORS.text }}>Sofia</div>
            <div style={{ fontSize: "12px", color: COLORS.green }}>● Online</div>
          </div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: COLORS.textMuted, fontSize: "24px", cursor: "pointer" }}>×</button>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.map(function(m, i) {
          return (
            <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "80%", padding: "12px 16px", borderRadius: "16px", background: m.role === "user" ? COLORS.cyan : "rgba(255,255,255,0.05)", color: m.role === "user" ? COLORS.bg : COLORS.text, fontSize: "14px", whiteSpace: "pre-wrap" }}>
              {m.text}
            </div>
          );
        })}
        {isTyping && <div style={{ color: COLORS.textMuted, fontSize: "14px" }}>Sofia is typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ padding: "12px", borderTop: "1px solid " + COLORS.border, display: "flex", gap: "8px" }}>
        <input
          value={input}
          onChange={function(e) { setInput(e.target.value); }}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          style={{ flex: 1, padding: "12px", borderRadius: "24px", border: "1px solid " + COLORS.border, background: "rgba(255,255,255,0.05)", color: COLORS.text, outline: "none" }}
        />
        <button onClick={handleSend} style={{ width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", color: COLORS.bg, cursor: "pointer", fontSize: "18px" }}>➤</button>
      </div>
    </div>
  );
}

function ParticleField({ intensity }) {
  var canvasRef = useRef(null);
  var particleIntensity = intensity || 1;

  useEffect(function() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    var particles = [];
    var count = Math.floor(60 * particleIntensity);
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    var animationId;
    function animate() {
      ctx.fillStyle = "rgba(13, 17, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, " + p.alpha + ")";
        ctx.fill();

        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(0, 212, 255, " + (0.08 * (1 - d / 100)) + ")";
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return function() {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [particleIntensity]);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0 }} />;
}

function Typewriter({ text, speed, delay }) {
  var typeSpeed = speed || 60;
  var typeDelay = delay || 0;
  var [displayed, setDisplayed] = useState("");
  var [started, setStarted] = useState(false);

  useEffect(function() {
    var timer = setTimeout(function() { setStarted(true); }, typeDelay);
    return function() { clearTimeout(timer); };
  }, [typeDelay]);

  useEffect(function() {
    if (!started) return;
    var i = 0;
    var interval = setInterval(function() {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, typeSpeed);
    return function() { clearInterval(interval); };
  }, [text, typeSpeed, started]);

  return (
    <span>
      {displayed}
      <span style={{ opacity: started ? 1 : 0, color: COLORS.cyan }}>▊</span>
    </span>
  );
}

function GlowingProgress({ progress, label }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "12px", color: COLORS.textMuted }}>
        <span>{label}</span>
        <span style={{ color: COLORS.cyan }}>{Math.round(progress)}%</span>
      </div>
      <div style={{ height: "4px", background: COLORS.cyanDim, borderRadius: "2px" }}>
        <div style={{ width: progress + "%", height: "100%", background: "linear-gradient(90deg, " + COLORS.cyan + ", " + COLORS.gold + ")", borderRadius: "2px", transition: "width 0.3s" }} />
      </div>
    </div>
  );
}

function CapabilityCard({ title, items, delay, active }) {
  var [visible, setVisible] = useState(false);
  var [itemsVisible, setItemsVisible] = useState([]);

  useEffect(function() {
    if (active) {
      var timer = setTimeout(function() { setVisible(true); }, delay);
      return function() { clearTimeout(timer); };
    }
  }, [active, delay]);

  useEffect(function() {
    if (visible) {
      items.forEach(function(_, i) {
        setTimeout(function() {
          setItemsVisible(function(prev) { return prev.concat([i]); });
        }, i * 300);
      });
    }
  }, [visible, items]);

  return (
    <div style={{ background: COLORS.bgCard, border: "1px solid " + COLORS.border, borderRadius: "12px", padding: "24px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
      <h3 style={{ color: COLORS.cyan, fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "16px" }}>{title}</h3>
      {items.map(function(item, i) {
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", opacity: itemsVisible.indexOf(i) >= 0 ? 1 : 0, transition: "opacity 0.5s" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS.cyan }} />
            <span style={{ color: COLORS.text, fontSize: "13px" }}>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

function LiveStats() {
  var [stats, setStats] = useState({ messages: 127453, bookings: 3847, revenue: 284 });

  useEffect(function() {
    var interval = setInterval(function() {
      setStats(function(prev) {
        return {
          messages: prev.messages + Math.floor(Math.random() * 3),
          bookings: prev.bookings + (Math.random() > 0.7 ? 1 : 0),
          revenue: prev.revenue
        };
      });
    }, 3000);
    return function() { clearInterval(interval); };
  }, []);

  var statItems = [
    { label: "Messages", value: stats.messages.toLocaleString(), icon: "💬" },
    { label: "Bookings", value: stats.bookings.toLocaleString(), icon: "📅" },
    { label: "Revenue", value: "$" + stats.revenue + "K+", icon: "💰" }
  ];

  return (
    <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap", padding: "24px", background: COLORS.bgCard, borderRadius: "12px", border: "1px solid " + COLORS.border, marginTop: "32px" }}>
      {statItems.map(function(s, i) {
        return (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>{s.icon}</div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: COLORS.cyan }}>{s.value}</div>
            <div style={{ fontSize: "11px", color: COLORS.textMuted, textTransform: "uppercase" }}>{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function CaseStudy({ vertical }) {
  var studies = {
    hospitality: { name: "Boutique Hotel, Cartagena", result: "$4,200/mo recovered", quote: "We were missing 60% of inquiries after hours. Now we capture everything." },
    restaurant: { name: "Fine Dining Restaurant", result: "40% fewer no-shows", quote: "WhatsApp reminders changed everything." },
    tours: { name: "Boat Tour Operator", result: "35% more bookings", quote: "Responding at 2am when someone wants to book - game changer." },
    services: { name: "Law Firm", result: "50% more consultations", quote: "Our intake is completely automated." }
  };
  var s = studies[vertical] || studies.hospitality;

  return (
    <div style={{ background: COLORS.goldDim, border: "1px solid " + COLORS.gold + "40", borderRadius: "12px", padding: "24px", marginTop: "24px" }}>
      <div style={{ fontSize: "12px", color: COLORS.gold, marginBottom: "12px" }}>★ CASE STUDY</div>
      <div style={{ fontWeight: 600, color: COLORS.text, marginBottom: "8px" }}>{s.name}</div>
      <div style={{ fontSize: "28px", fontWeight: 700, color: COLORS.cyan, marginBottom: "12px" }}>{s.result}</div>
      <div style={{ fontSize: "14px", color: COLORS.textMuted, fontStyle: "italic" }}>"{s.quote}"</div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
    </svg>
  );
}

export default function Portfolio() {
  var [phase, setPhase] = useState(0);
  var [progress, setProgress] = useState(0);
  var [selected, setSelected] = useState(null);
  var [logs, setLogs] = useState([]);
  var [caps, setCaps] = useState([]);
  var [chatOpen, setChatOpen] = useState(false);

  var interests = [
    { id: "hospitality", label: "Hospitality & Hotels", icon: "🏨" },
    { id: "restaurant", label: "Restaurants & Clubs", icon: "🍽️" },
    { id: "tours", label: "Tours & Experiences", icon: "⛵" },
    { id: "services", label: "Professional Services", icon: "💼" }
  ];

  var capData = {
    hospitality: [
      { title: "REVENUE RECOVERY", items: ["24/7 Booking Response", "Abandoned Inquiry Recovery", "Upsell Automation", "Multi-language Support"] },
      { title: "OPERATIONS", items: ["Reservation Management", "Guest Communication", "Review Generation", "Staff Coordination"] },
      { title: "INTELLIGENCE", items: ["Demand Forecasting", "Competitor Monitoring", "Sentiment Analysis", "Revenue Optimization"] }
    ],
    restaurant: [
      { title: "BOOKING", items: ["WhatsApp Reservations", "Wait List Management", "VIP Recognition", "Event Coordination"] },
      { title: "EXPERIENCE", items: ["Menu Inquiries", "Dietary Accommodations", "Special Requests", "Loyalty Programs"] },
      { title: "OPERATIONS", items: ["Table Optimization", "Staff Alerts", "Inventory Triggers", "Review Response"] }
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
  };

  var logMessages = [
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

  useEffect(function() {
    var timer = setTimeout(function() { setPhase(1); }, 4000);
    return function() { clearTimeout(timer); };
  }, []);

  useEffect(function() {
    if (phase !== 2) return;
    var i = 0;
    var interval = setInterval(function() {
      if (i < logMessages.length) {
        setLogs(function(prev) { return prev.concat([logMessages[i]]); });
        setProgress((i + 1) / logMessages.length * 100);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(function() { setPhase(3); }, 1000);
      }
    }, 800);
    return function() { clearInterval(interval); };
  }, [phase]);

  useEffect(function() {
    if (phase === 3 && selected) {
      setCaps(capData[selected.id] || []);
      var timer = setTimeout(function() { setPhase(4); }, 6000);
      return function() { clearTimeout(timer); };
    }
  }, [phase, selected]);

  function handleSelect(interest) {
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

  function handleLogoError(e) {
    e.target.style.display = "none";
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = "flex";
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily: "ui-monospace, monospace" }}>
      <ParticleField intensity={phase >= 2 ? 1.5 : 0.8} />

      {phase > 1 && phase < 4 && (
        <button onClick={handleBack} style={{ position: "fixed", top: "24px", left: "24px", padding: "12px 20px", borderRadius: "8px", border: "1px solid " + COLORS.border, background: COLORS.bgCard, color: COLORS.text, cursor: "pointer", zIndex: 100, fontFamily: "system-ui" }}>
          ← Back
        </button>
      )}

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "40px 24px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="MachineMind" style={{ height: "50px" }} onError={handleLogoError} />
            <div style={{ display: "none", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: COLORS.bg, fontSize: "18px" }}>M</div>
              <span style={{ fontWeight: 600, fontSize: "16px" }}>MACHINEMIND</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.textMuted, transition: "color 0.3s" }}>
              <InstagramIcon />
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: COLORS.textMuted }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.cyan, animation: "pulse 2s infinite" }} />
              {phase === 4 ? "READY" : "ONLINE"}
            </div>
          </div>
        </header>

        {phase === 0 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div style={{ position: "relative", width: "140px", height: "140px", marginBottom: "40px" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.3, animation: "ping 3s 0s infinite" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.2, animation: "ping 3s 0.5s infinite" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + COLORS.cyan, opacity: 0.1, animation: "ping 3s 1s infinite" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px" }}>⚡</div>
            </div>
            <h1 style={{ fontFamily: "system-ui", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <Typewriter text="THE INFRASTRUCTURE BEHIND" speed={50} delay={800} />
            </h1>
            <p style={{ fontSize: "18px", color: COLORS.textMuted }}>
              <Typewriter text="BUSINESSES THAT NEVER SLEEP" speed={60} delay={2800} />
            </p>
          </div>
        )}

        {phase === 1 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ fontSize: "14px", letterSpacing: "0.2em", color: COLORS.cyan, marginBottom: "16px" }}>
              <Typewriter text="SELECT YOUR VERTICAL" speed={40} />
            </h2>
            <p style={{ fontSize: "14px", color: COLORS.textMuted, marginBottom: "40px" }}>
              <Typewriter text="We'll generate a custom AI infrastructure blueprint" speed={30} delay={1000} />
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", width: "100%", maxWidth: "700px" }}>
              {interests.map(function(interest, i) {
                return (
                  <button
                    key={interest.id}
                    onClick={function() { handleSelect(interest); }}
                    style={{ background: COLORS.bgCard, border: "1px solid " + COLORS.border, borderRadius: "12px", padding: "32px 20px", cursor: "pointer", textAlign: "center", transition: "all 0.3s", opacity: 0, animation: "fadeIn 0.6s " + (1600 + i * 150) + "ms forwards" }}
                  >
                    <div style={{ fontSize: "44px", marginBottom: "16px" }}>{interest.icon}</div>
                    <div style={{ fontFamily: "system-ui", fontSize: "15px", fontWeight: 600, color: COLORS.text }}>{interest.label}</div>
                  </button>
                );
              })}
            </div>
            <LiveStats />
          </div>
        )}

        {phase === 2 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "500px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                <span style={{ fontSize: "44px" }}>{selected && selected.icon}</span>
                <div>
                  <div style={{ fontSize: "12px", color: COLORS.cyan }}>GENERATING BLUEPRINT FOR</div>
                  <div style={{ fontFamily: "system-ui", fontSize: "22px", fontWeight: 600 }}>{selected && selected.label}</div>
                </div>
              </div>
              <GlowingProgress progress={progress} label="SYSTEM INITIALIZATION" />
              <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: "8px", padding: "16px", fontSize: "12px", maxHeight: "200px", overflow: "auto", fontFamily: "monospace" }}>
                {logs.map(function(log, i) {
                  return (
                    <div key={i} style={{ color: i === logs.length - 1 ? COLORS.cyan : COLORS.textMuted, marginBottom: "8px" }}>
                      <span style={{ color: COLORS.gold }}>{">"}</span> {log}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {phase === 3 && (
          <div style={{ flex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ fontSize: "12px", color: COLORS.gold, marginBottom: "8px" }}>✦ BLUEPRINT GENERATED ✦</div>
              <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700 }}>
                <Typewriter text={(selected ? selected.label : "") + " AI Infrastructure"} speed={40} />
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {caps.map(function(c, i) {
                return <CapabilityCard key={c.title} title={c.title} items={c.items} delay={i * 700} active={true} />;
              })}
            </div>
            {selected && <CaseStudy vertical={selected.id} />}
          </div>
        )}

        {phase === 4 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", boxShadow: "0 0 60px " + COLORS.cyanGlow }}>
              <span style={{ fontSize: "44px" }}>✓</span>
            </div>
            <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
              <Typewriter text="Your Infrastructure is Ready" speed={45} />
            </h2>
            <p style={{ fontSize: "16px", color: COLORS.textMuted, maxWidth: "480px", marginBottom: "40px", lineHeight: 1.6 }}>
              <Typewriter text="This runs 24/7 while you sleep. Zero missed inquiries. Zero lost revenue." speed={30} delay={2000} />
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <button
                onClick={function() { window.open(CAL_LINK, "_blank"); }}
                style={{ background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", border: "none", borderRadius: "8px", padding: "18px 40px", fontSize: "14px", fontWeight: 600, color: COLORS.bg, cursor: "pointer", fontFamily: "system-ui", opacity: 0, animation: "fadeIn 0.6s 3s forwards" }}
              >
                Schedule Your Build →
              </button>
              <button
                onClick={function() { setPhase(1); setSelected(null); setCaps([]); }}
                style={{ background: "transparent", border: "1px solid " + COLORS.border, borderRadius: "8px", padding: "18px 32px", fontSize: "14px", color: COLORS.text, cursor: "pointer", fontFamily: "system-ui", opacity: 0, animation: "fadeIn 0.6s 3.2s forwards" }}
              >
                ← Explore Another
              </button>
            </div>
            <p style={{ marginTop: "20px", fontSize: "12px", color: COLORS.textMuted, opacity: 0, animation: "fadeIn 0.5s 4s forwards" }}>
              15-min call • No commitment • See what we'll build
            </p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ marginTop: "32px", color: COLORS.textMuted, fontSize: "14px", textDecoration: "none", opacity: 0, animation: "fadeIn 0.5s 4.5s forwards" }}>
              @machinemindconsulting
            </a>
          </div>
        )}
      </div>

      <SofiaChat isOpen={chatOpen} onClose={function() { setChatOpen(false); }} />
      <button
        onClick={function() { setChatOpen(!chatOpen); }}
        style={{ position: "fixed", bottom: "24px", right: "24px", width: "60px", height: "60px", borderRadius: "50%", border: "none", background: "linear-gradient(135deg, " + COLORS.cyan + ", " + COLORS.gold + ")", boxShadow: "0 0 30px " + COLORS.cyanGlow, cursor: "pointer", fontSize: "26px", zIndex: 999, transition: "transform 0.3s", transform: chatOpen ? "rotate(90deg)" : "rotate(0)" }}
      >
        {chatOpen ? "×" : "💬"}
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.3; }
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0d1117; }
      `}</style>
    </div>
  );
}
