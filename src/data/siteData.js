// ============================================================
//  SITE DATA — single source of truth for all content
//  Search for "TODO" to find every placeholder to fill in.
// ============================================================

export const siteData = {

  // ── Personal ──────────────────────────────────────────────
  name: "Md Minhajul haque",
  tagline: "Full Stack Developer",
  headline: "I build fast, modern websites that help local businesses get more customers.",
  subHeadline:
    "Business websites, booking systems and custom web apps — delivered on time with clear communication.",

  // ── Contact details ───────────────────────────────────────
  whatsapp: "+918539827705",          // TODO: replace with your WhatsApp number (e.g. +919876543210)
  email: "minhajulhaque2308@gmail.com",       // TODO: replace with your email
  linkedin: "https://www.linkedin.com/in/minhaj8165/", // TODO: replace with your LinkedIn profile URL
  github: "https://github.com/Imsheikhminhaj",        // TODO: replace with your GitHub username

  // ── Availability ──────────────────────────────────────────
  available: true,
  availabilityText: "Available for new projects",

  // ── Formspree form endpoint ───────────────────────────────
  formspreeEndpoint: "https://formspree.io/f/TODO_FORMSPREE_ID", // TODO: create form at formspree.io and paste ID here

  // ── About ─────────────────────────────────────────────────
  aboutText:
    "I'm a B.Tech Computer Science student who builds real, full-stack projects that solve actual business problems. I enjoy turning what a business needs into a clean, working website — and I communicate clearly and deliver on time. Every project I take on gets my full attention from kickoff to launch.",
  aboutPhoto:"/minhaj.jpeg", // TODO: add your photo to /public/minhaj.jpg and set this to "/minhaj.jpg"

  quickFacts: [
    { label: "Projects shipped", value: "TODO" }, // TODO: e.g. "10+"
    { label: "Technologies",     value: "10+"   },
    { label: "Response time",    value: "< 4 hrs" },
  ],

  // ── Projects ─────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "AI Career Coach",
      result: "Generates personalised learning roadmaps with AI, streak tracking and a contribution heatmap.",
      description:
        "A MERN full-stack app powered by Groq / Llama that creates custom learning paths for developers. Includes JWT authentication, streak tracking and a GitHub-style contribution heatmap.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API"],
      liveUrl: "TODO_LIVE_URL",   // TODO: add live demo URL
      githubUrl: "TODO_GITHUB_URL", // TODO: add GitHub repo URL
      image: null,                  // TODO: add screenshot to /public/projects/ai-career-coach.png
      concept: false,
    },
    {
      id: 2,
      title: "PeerStack",
      result: "Developer community platform with JWT auth, debounced search and star ratings.",
      description:
        "A community platform where developers can share and discover resources. Features JWT authentication, debounced search, star ratings and full theming. Currently being migrated to React, Vite and Tailwind.",
      tags: ["React", "Vite", "Tailwind", "JWT"],
      liveUrl: "TODO_LIVE_URL",
      githubUrl: "TODO_GITHUB_URL",
      image: null,
      concept: false,
    },
    {
      id: 3,
      title: "Restaurant & Cafe Website",
      result: "Full menu, gallery, opening hours, reservation form and WhatsApp ordering.",
      description:
        "A concept project showing what a restaurant or cafe website can look like — menu display, photo gallery, opening hours, online reservation form and a WhatsApp ordering button.",
      tags: ["React", "Tailwind"],
      liveUrl: "TODO_LIVE_URL",
      githubUrl: "TODO_GITHUB_URL",
      image: null,
      concept: true,
    },
    {
      id: 4,
      title: "Salon & Clinic Booking Site",
      result: "Service list, online booking form and a simple admin dashboard.",
      description:
        "A concept project for salons or clinics — service listings, an online booking form, and a basic admin dashboard so the owner can view and manage appointments.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Auth"],
      liveUrl: "TODO_LIVE_URL",
      githubUrl: "TODO_GITHUB_URL",
      image: null,
      concept: true,
    },
  ],

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      id: "starter",
      icon: "Zap",
      name: "Starter Site",
      pitch: "Everything you need to get online and start getting enquiries.",
      features: [
        "1-page responsive landing site",
        "Contact form + WhatsApp button",
        "Basic SEO setup",
        "Deployed and live on day one",
      ],
      price: "From TODO_PRICE",  // TODO: set your price, e.g. "From ₹8,000"
      cta: "Request Starter",
      formType: "Starter Site",
    },
    {
      id: "business",
      icon: "Briefcase",
      name: "Business Site",
      pitch: "A professional multi-page site that builds trust and drives enquiries.",
      features: [
        "Up to 5 pages (Home, About, Services, Gallery, Contact)",
        "Menu, gallery or services section",
        "Google Maps integration",
        "SEO + speed optimisation",
        "1 month of free support",
      ],
      price: "From TODO_PRICE",  // TODO: set your price, e.g. "From ₹18,000"
      cta: "Request Business",
      formType: "Business Site",
      highlight: true,
    },
    {
      id: "custom",
      icon: "Code2",
      name: "Custom Web App",
      pitch: "A full-stack application built exactly for your business.",
      features: [
        "User login & dashboard",
        "Database-driven content",
        "Booking or ordering system",
        "Admin panel",
        "Payment integration if needed",
      ],
      price: "Quote on request",
      cta: "Request Custom Quote",
      formType: "Custom Web App",
    },
  ],
  servicesFootnote: "Need something else? Tell me your idea.",

  // ── Process ──────────────────────────────────────────────
  process: [
    {
      step: "01",
      title: "Discuss",
      description:
        "We start with a free call or chat. I learn about your business, your goals and what you need the website to do.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "I share the layout and look before writing a line of code. You approve the design — no surprises.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Development begins. I send regular updates so you always know where things stand.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We go live together. I handle the technical side, show you how to manage your site and stay available afterwards.",
    },
  ],
  processNote:
    "50 % advance to begin · Fixed price and timeline agreed before any work starts.",

  // ── Skills ───────────────────────────────────────────────
  skills: [
    { group: "Frontend",  items: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Vite"] },
    { group: "Backend",   items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
    { group: "Database",  items: ["MongoDB", "Mongoose"] },
    { group: "Tools",     items: ["Git", "GitHub", "Vercel", "Postman"] },
    { group: "AI / APIs", items: ["Groq", "LLM API Integration"] },
  ],

  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      quote: "TODO: Add a real testimonial here.",
      author: "TODO: Client Name",
      role: "TODO: Business / Role",
      avatar: null,
    },
    {
      id: 2,
      quote: "TODO: Add a real testimonial here.",
      author: "TODO: Client Name",
      role: "TODO: Business / Role",
      avatar: null,
    },
  ],

  // ── Footer ───────────────────────────────────────────────
  footerTagline: "Building websites that work as hard as you do.",
};

export default siteData;
