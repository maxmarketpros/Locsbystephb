// ─── Site-wide content configuration ────────────────────────────────────────
// Edit this file to change any text, images, or links across the site.

export const SITE = {
  name: "Locs By Steph B",
  phone: "(202) 744-8419",
  phoneHref: "tel:+12027448419",
  bookingUrl: "https://www.vagaro.com/locsbystephbllc",
  email: "",
  tagline: "Rooted in Care. Elevated by Craft.",
  description:
    "Premier loc specialist offering Microlocs, Sisterlocks, starter locs, retightening, interlocking, loc repair, and loc detox services. Your hair journey becomes a healing journey.",
} as const;

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Loc Install Process", href: "/loc-install-process" },
  { label: "Loc Stages", href: "/loc-stages" },
  { label: "Install Requirements", href: "/install-requirements" },
  { label: "Transfer Clients", href: "/transfer-clients" },
  { label: "My Loc Journey", href: "/my-loc-journey" },
  { label: "Locations & Parking", href: "/locations-and-parking" },
  { label: "Policies", href: "/policies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Client Reviews", href: "/reviews" },
] as const;

export const HEADER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { 
    label: "Services",
    subLinks: [
      { label: "Loc Installation", href: "/loc-installation" },
      { label: "Loc Repair", href: "/loc-repair" },
      { label: "Loc Retie", href: "/loc-retie" },
      { label: "Loc Coloring", href: "/loc-coloring" },
      { label: "Install Process Guide", href: "/loc-install-process" },
    ]
  },
  { 
    label: "Journey & Prep",
    subLinks: [
      { label: "Loc Stages", href: "/loc-stages" },
      { label: "Install Requirements", href: "/install-requirements" },
      { label: "Transfer Clients", href: "/transfer-clients" },
    ]
  },
  { 
    label: "About Us",
    subLinks: [
      { label: "My Loc Journey", href: "/my-loc-journey" },
      { label: "Client Reviews", href: "/reviews" },
      { label: "Locations & Parking", href: "/locations-and-parking" },
      { label: "Policies", href: "/policies" },
    ]
  },
];

// ─── Image map (public/images/clients) ──────────────────────────────────────

export const CLIENT_IMAGES = [
  {
    src: "/images/clients/imgi_19_615831996_17922569358226431_1132852781737866166_n.webp",
    alt: "Detailed microloc grid pattern showing precise parting and installation technique",
  },
  {
    src: "/images/clients/imgi_21_649230794_17929422939226431_2719201740057317517_n.webp",
    alt: "Client showcasing beautifully maintained starter locs with golden highlights",
  },
  {
    src: "/images/clients/imgi_22_643598842_17928485262226431_6045943903363176624_n.webp",
    alt: "Shoulder-length golden-brown locs styled with natural movement and shine",
  },
  {
    src: "/images/clients/imgi_23_641776364_17928051657226431_6067732075932186188_n.webp",
    alt: "Client with rich dark locs demonstrating healthy loc growth and definition",
  },
  {
    src: "/images/clients/imgi_25_637706553_17926745343226431_3720818840484354541_n.webp",
    alt: "Freshly interlocked microlocs displayed with hand-held styling showing loc density",
  },
  {
    src: "/images/clients/imgi_31_587801961_17917190706226431_8290326208089224828_n.webp",
    alt: "Medium-length locs with natural brown tones and beautiful loc maturation",
  },
  {
    src: "/images/clients/imgi_32_584403983_17916551589226431_6667879413487963914_n.webp",
    alt: "Full and voluminous dark locs after professional retightening session",
  },
  {
    src: "/images/clients/imgi_34_581930505_17915814777226431_719404915947012764_n.webp",
    alt: "Client relaxing in salon chair showcasing healthy loc maintenance results",
  },
  {
    src: "/images/clients/imgi_35_581806939_17915390784226431_917113508139036512_n.webp",
    alt: "Side profile of client with beautifully maintained short microlocs and natural texture",
  },
  {
    src: "/images/clients/imgi_39_550081900_17909279973226431_2964888095628416313_n.webp",
    alt: "Warm honey-toned locs with professional styling and healthy hair definition",
  },
  {
    src: "/images/clients/imgi_41_541849959_17907507141226431_356002767227141822_n.webp",
    alt: "Client with long dark locs against deep navy backdrop showing beautiful loc length",
  },
  {
    src: "/images/clients/imgi_43_532219526_17905391295226431_2794480892971602075_n.webp",
    alt: "Neat and uniform loc pattern showcasing expert installation and retightening",
  },
  {
    src: "/images/clients/imgi_44_527398410_17903941704226431_5129094409559905662_n.webp",
    alt: "Well-maintained dark locs from behind showing consistent size and healthy growth",
  },
] as const;

// ─── Services ───────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    title: "Starter Locs",
    description:
      "Begin your loc journey with expert installation tailored to your hair texture, density, and lifestyle. A grounded foundation for lasting beauty.",
    icon: "seedling",
  },
  {
    title: "Microlocs Installation",
    description:
      "Ultra-fine locs that offer the versatility of loose hair with the ease of a locked style. Precision parting, lasting results.",
    icon: "grid",
  },
  {
    title: "Sisterlocks",
    description:
      "The premier small-loc system built with a patented technique. A premium commitment to lightweight, refined locs.",
    icon: "sparkle",
  },
  {
    title: "Retightening",
    description:
      "Maintain the integrity and beauty of your locs with skilled retightening sessions designed around your unique growth pattern.",
    icon: "refresh",
  },
  {
    title: "Loc Retwist Services",
    description:
      "Professional retwist sessions that promote healthy growth, neat appearance, and long-term loc health.",
    icon: "twist",
  },
  {
    title: "Interlocking Locs",
    description:
      "A durable maintenance method ideal for active lifestyles. Interlocking keeps your locs secure and polished between visits.",
    icon: "link",
  },
  {
    title: "Loc Repair",
    description:
      "Restore damaged, thinning, or broken locs with precision repair techniques. Strengthen what's already rooted.",
    icon: "heal",
  },
  {
    title: "Loc Detox Service",
    description:
      "Deep-cleanse buildup, residue, and impurities from your locs. Refresh your hair and scalp for healthier growth.",
    icon: "leaf",
  },
] as const;

// ─── Testimonials ───────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote:
      "Steph B has completely transformed my relationship with my hair. I walked in unsure, and walked out feeling like the best version of myself. Her patience, skill, and genuine care are unmatched.",
    name: "Tasha M.",
    date: "2024",
    featured: true,
  },
  {
    quote:
      "I've been going to Steph for over two years and the consistency in her work is incredible. My locs have never looked better. She truly understands hair and takes her time with every client.",
    name: "Danielle R.",
    date: "2024",
    featured: false,
  },
  {
    quote:
      "From the consultation to the install, everything was professional, transparent, and warm. I finally found a loctician I trust with my hair journey.",
    name: "Keisha L.",
    date: "2023",
    featured: false,
  },
  {
    quote:
      "Steph repaired locs that I thought were beyond saving. Her expertise as a loc repair specialist gave me my confidence back. I can't recommend her enough.",
    name: "Nicole W.",
    date: "2024",
    featured: false,
  },
] as const;

// ─── Benefits ───────────────────────────────────────────────────────────────

export const BENEFITS = [
  {
    title: "Rooted in Simplicity",
    description:
      "Locs free you from complicated routines and product overload. Embrace a style that works with your natural hair, not against it.",
    icon: "circle",
  },
  {
    title: "Rooted in Self-Trust",
    description:
      "Choosing locs is a declaration of confidence. It's trusting your natural beauty and letting go of the pressure to conform.",
    icon: "heart",
  },
  {
    title: "Rooted in Wholeness",
    description:
      "When your hair feels aligned, everything else follows. Locs bring a sense of completeness that goes beyond aesthetics.",
    icon: "sun",
  },
  {
    title: "Rooted in Time Freedom",
    description:
      "Reclaim the hours spent on styling, pressing, and maintenance. Locs give you back the time you've been losing to your hair.",
    icon: "clock",
  },
  {
    title: "Rooted in Legacy",
    description:
      "Locs carry history, culture, and intention. Wearing them is a connection to something larger than a hairstyle—it's a way of life.",
    icon: "crown",
  },
] as const;

// ─── Investment / Education Section ─────────────────────────────────────────

export const INVESTMENT_CONTENT = {
  headline: "Understanding Your Investment",
  intro:
    "Great locs are a long-term investment in yourself. Understanding the cost of loc maintenance helps you plan with confidence and choose the path that fits your life.",
  cards: [
    {
      title: "Sisterlocks",
      description:
        "A premium, patented system requiring specialized training and certification. The initial installation is a multi-day process, and maintenance reflects the precision and expertise involved.",
      badge: "Premium Commitment",
    },
    {
      title: "Microlocs",
      description:
        "A flexible option that offers fine, versatile locs without the brand-specific requirements of Sisterlocks. Installation is detailed and time-intensive, but maintenance tends to be more adaptable.",
      badge: "Flexible & Versatile",
    },
    {
      title: "Traditional Locs",
      description:
        "The most accessible entry into the loc lifestyle. Lower upfront investment with simpler long-term maintenance. A timeless choice that grows more beautiful with every stage.",
      badge: "Timeless & Accessible",
    },
  ],
  transparency: [
    "Pricing reflects skill, sustainability, tools, education, licensing, taxes, and quality—not just time in the chair.",
    "Hair texture, density, length, and condition all affect the time and care required for each session.",
    "Maintenance costs have evolved over the years as the industry has grown and standards have risen.",
    "No hidden fees. No surprises. Transparent guidance from consultation through every maintenance visit.",
  ],
} as const;

// ─── Why Get Rooted ─────────────────────────────────────────────────────────

export const WHY_ROOTED = {
  headline: "Why Get Rooted",
  subtitle: "This is more than a hairstyle. It's a return to yourself.",
  points: [
    {
      title: "Start Over with Intention",
      description:
        "Whether you're beginning your very first set or releasing years of buildup, getting locked is a fresh start rooted in purpose.",
    },
    {
      title: "Reclaim Your Time",
      description:
        "The hours you've spent fighting your hair can be spent living your life. Locs give you back your mornings, your confidence, and your peace.",
    },
    {
      title: "Redefine Beauty on Your Terms",
      description:
        "Beauty doesn't have to be high-maintenance, heat-damaged, or chemically altered. Locs are effortless, elegant, and authentically you.",
    },
    {
      title: "Realign with Your Natural Rhythm",
      description:
        "Your hair wants to lock. Working with your texture instead of against it is one of the most freeing decisions you'll ever make.",
    },
  ],
} as const;

// ─── Starter Pages ──────────────────────────────────────────────────────────

export const STARTER_PAGES = [
  {
    slug: "loc-install-process",
    title: "The Loc Install Process",
    description:
      "Learn what to expect during your loc installation—from consultation to completion.",
  },
  {
    slug: "loc-stages",
    title: "Loc Stages",
    description:
      "Understand the beautiful stages your locs will go through as they mature and evolve.",
  },
  {
    slug: "install-requirements",
    title: "Install Requirements",
    description:
      "Everything you need to know before your installation appointment.",
  },
  {
    slug: "transfer-clients",
    title: "Transfer Clients",
    description:
      "Information for clients transitioning from another loctician to Locs By Steph B.",
  },
  {
    slug: "my-loc-journey",
    title: "My Loc Journey",
    description:
      "Follow the personal loc journey that inspired Locs By Steph B.",
  },
  {
    slug: "locations-and-parking",
    title: "Locations & Parking",
    description:
      "Find us easily with directions, parking information, and location details.",
  },
  {
    slug: "policies",
    title: "Studio Policies",
    description:
      "Review our booking, cancellation, and studio policies before your visit.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your personal information.",
  },
] as const;
