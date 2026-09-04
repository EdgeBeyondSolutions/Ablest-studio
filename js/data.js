// ===================== ABLEST STUDIO — project & journal data =====================
// All facts below are transcribed from Aldo Ballesteros's own project documentation.
// Nothing here is invented — fields left unknown (e.g. no stated year) are simply omitted.

var PROJECTS = [
  {
    slug: "salvia-modern-house-museum",
    num: "01",
    title: "Salvia Modern House Museum",
    location: "337 W Commerce St, San Antonio, TX",
    context: "Sophomore Year — Spring 2026",
    status: "Academic Project",
    categories: ["architecture", "cultural", "commercial"],
    categoryLabel: "Architecture · Cultural",
    cover: "images/salvia-exterior-01.jpg",
    concept: "A biomimetic design inspired by Salvia farinacea, stacking public program over private retreat: lobby and café, two art galleries, a community hub, two artist's lofts, and a rooftop vinothèque. The building is organized as a stacked spatial sequence — each level a gradual transition from public to private — built from concrete, black cherry wood, dwarf yaupon, and glass.",
    materiality: "Its form and systems are shaped throughout by COTE guidelines for integration, community, ecology, water, and energy: a hybrid passive-and-mechanical ventilation strategy using stack effect and wind-driven exhaust, a 1,500 sf roof harvesting roughly 29,900 gallons of water a year, and a 15kW PV system generating close to 22,000 kWh annually.",
    gallery: [
      { src: "images/salvia-exterior-01.jpg", alt: "Salvia Modern House Museum — exterior render, curved roof and vertical garden facade", full: true },
      { src: "images/salvia-atrium.jpg", alt: "Salvia Modern House Museum — gold-trellis gallery atrium interior" },
      { src: "images/salvia-cellar-bar.jpg", alt: "Salvia Modern House Museum — rooftop vinothèque cellar bar" },
      { src: "images/salvia-watercolor-section.jpg", alt: "Salvia Modern House Museum — watercolor building section", full: true },
      { src: "images/salvia-wind-diagram.jpg", alt: "Salvia Modern House Museum — passive ventilation and environmental systems diagram" },
      { src: "images/salvia-exterior-02.jpg", alt: "Salvia Modern House Museum — angled exterior view within the San Antonio skyline", full: true }
    ]
  },
  {
    slug: "la-raiz",
    num: "02",
    title: "La Raíz (The Root)",
    location: "Antelope Valley Fair & Event Center, Lancaster, CA",
    context: "Architecture at Zero 2026 — Student Division",
    status: "Competition Entry",
    categories: ["architecture", "cultural", "commercial"],
    categoryLabel: "Architecture · Cultural",
    cover: "images/la-raiz-exterior.jpg",
    concept: "A 10,000 sf, two-story, all-electric biophilic cultural center and emergency operations center for the Antelope Valley. Two programs share one building: \u201CLa Plaza Viva,\u201D for everyday cultural life, and \u201CCentro de Mando,\u201D for emergency response.",
    materiality: "Rammed earth walls sit beneath an arched bifacial photovoltaic canopy, targeting a net-negative energy use intensity of \u22121 kBtu/sf\u00B7yr. The proposal is grounded in an equity essay tying the design to Lancaster's Latino community.",
    gallery: [
      { src: "images/la-raiz-exterior.jpg", alt: "La Raíz — exterior view of the arched bifacial PV canopy at dusk", full: true },
      { src: "images/la-raiz-interior.jpg", alt: "La Raíz — interior view beneath the timber roof structure" },
      { src: "images/la-raiz-courtyard.jpg", alt: "La Raíz — rammed earth courtyard with water feature" }
    ]
  },
  {
    slug: "aquilo-flow",
    num: "03",
    title: "Aquilo Flow",
    location: null,
    context: "Sophomore Year — Fall 2025",
    status: "Academic Project",
    categories: ["architecture"],
    categoryLabel: "Architecture · Research",
    cover: "images/aquilo-flow-render.jpg",
    concept: "A research space drawn from the Edwards Aquifer — its movement, its scarcity, its mineral identity of calcium and magnesium — translated into flow, layering, and filtered light.",
    materiality: "A long, linear, slatted pavilion sits on a terraced site above a black resin pool, framed by plantings of dried baby's breath.",
    gallery: [
      { src: "images/aquilo-flow-render.jpg", alt: "Aquilo Flow — architectural axonometric render", full: true },
      { src: "images/aquilo-flow-model-01.jpg", alt: "Aquilo Flow — model, pavilion and black resin pool" },
      { src: "images/aquilo-flow-model-04.jpg", alt: "Aquilo Flow — model, aerial view" },
      { src: "images/aquilo-flow-sections.jpg", alt: "Aquilo Flow — section drawings", full: true }
    ]
  },
  {
    slug: "casa-jacaranda",
    num: "04",
    title: "Casa Jacaranda",
    location: null,
    context: "Interior Design — 2026",
    status: "Completed",
    categories: ["interiors", "residential"],
    categoryLabel: "Interiors · Residential",
    cover: "images/casa-jacaranda-sala-01.jpg",
    concept: "An interior reimagining for a client who wanted her residence to reflect contemporary Mexican identity without a full remodel — achieved through furniture, lighting, textiles, and artesanía, drawing on contemporary Mexico City residential design.",
    materiality: "The palette moves through marfil c\u00E1lido, arena, terracota, arcilla, caf\u00E9 tabaco, nogal, and verde olivo across three documented rooms: Sala entre Muros, Cocina Ra\u00EDz, and Comedor Ra\u00EDz.",
    gallery: [
      { src: "images/casa-jacaranda-sala-01.jpg", alt: "Casa Jacaranda — Sala entre Muros, evening view", full: true },
      { src: "images/casa-jacaranda-sala-02.jpg", alt: "Casa Jacaranda — Sala entre Muros, seating detail" },
      { src: "images/casa-jacaranda-cocina.jpg", alt: "Casa Jacaranda — Cocina Raíz" },
      { src: "images/casa-jacaranda-comedor-01.jpg", alt: "Casa Jacaranda — Comedor Raíz, table setting" },
      { src: "images/casa-jacaranda-comedor-02.jpg", alt: "Casa Jacaranda — Comedor Raíz, full dining room", full: true }
    ]
  },
  {
    slug: "asana-haus",
    num: "05",
    title: "Asana Haus",
    location: null,
    context: "Freshman Year — Spring 2025",
    status: "Academic Project",
    categories: ["architecture"],
    categoryLabel: "Architecture · Study",
    cover: "images/asana-haus-model-01.jpg",
    concept: "A hexagonal, organic-footprint pavilion built around curved walls and a single blue glazing accent — an early study in departing from orthogonal form.",
    materiality: null,
    gallery: [
      { src: "images/asana-haus-model-01.jpg", alt: "Asana Haus — model, front view with blue glazing", full: true },
      { src: "images/asana-haus-model-02.jpg", alt: "Asana Haus — model, side elevation" },
      { src: "images/asana-haus-axon.jpg", alt: "Asana Haus — architectural axonometric drawing" },
      { src: "images/asana-haus-plan.jpg", alt: "Asana Haus — site plan" }
    ]
  },
  {
    slug: "terravista",
    num: "06",
    title: "Terravista",
    location: null,
    context: "Freshman Year — Fall 2024",
    status: "Academic Project",
    categories: ["architecture"],
    categoryLabel: "Architecture · Study",
    cover: "images/terravista-01.jpg",
    concept: "A hillside model built around terraced, cut-strip contour terrain, with a cantilevered stair-bridge, green roofs, and a planted wall niche set into the slope.",
    materiality: null,
    gallery: [
      { src: "images/terravista-01.jpg", alt: "Terravista — hillside model, side angle", full: true },
      { src: "images/terravista-02.jpg", alt: "Terravista — hillside model, plan view", full: true }
    ]
  },
  {
    slug: "emerald-spring-hill",
    num: "07",
    title: "Emerald Spring Hill",
    location: "Texas Hill Country",
    context: "Estate & Events Venue",
    status: "Completed",
    categories: ["architecture", "hospitality", "residential"],
    categoryLabel: "Hospitality · Residential",
    cover: "images/emerald-spring-hill-aerial-01.jpg",
    concept: "A luxury estate wedding and events venue in the Texas Hill Country, designed as a destination site for celebration and gathering — from early framing through to a completed arched arcade, courtyard fountain, and covered outdoor living spaces.",
    materiality: null,
    beforeAfter: { before: "images/emerald-spring-hill-construction-01.jpg", after: "images/emerald-spring-hill-patio.jpg" },
    gallery: [
      { src: "images/emerald-spring-hill-aerial-01.jpg", alt: "Emerald Spring Hill — aerial night view of the completed estate", full: true },
      { src: "images/emerald-spring-hill-entry.jpg", alt: "Emerald Spring Hill — entry fountain at night" },
      { src: "images/emerald-spring-hill-patio.jpg", alt: "Emerald Spring Hill — daytime covered patio" },
      { src: "images/emerald-spring-hill-construction-01.jpg", alt: "Emerald Spring Hill — arched arcade under construction" },
      { src: "images/emerald-spring-hill-construction-02.jpg", alt: "Emerald Spring Hill — roof structure framing" },
      { src: "images/emerald-spring-hill-siteplan.jpg", alt: "Emerald Spring Hill — master site plan", full: true }
    ]
  }
];

// Journal — structural placeholders only. These are NOT written articles;
// each is a short stub Aldo can expand into a real piece before publishing.
var JOURNAL = [
  {
    slug: "the-poetry-of-material",
    title: "The Poetry of Material",
    category: "Materials",
    cover: "images/casa-jacaranda-cocina.jpg",
    excerpt: "On why the choice of concrete, wood, or rammed earth is never just structural — and how material carries the emotional register of a space.",
    placeholder: true
  },
  {
    slug: "designing-for-atmosphere",
    title: "Designing for Atmosphere",
    category: "Design",
    cover: "images/salvia-atrium.jpg",
    excerpt: "Notes on how light, material, and proportion combine to shape how a space feels, not just how it looks.",
    placeholder: true
  },
  {
    slug: "when-light-becomes-architecture",
    title: "When Light Becomes Architecture",
    category: "Architecture",
    cover: "images/la-raiz-interior.jpg",
    excerpt: "Thinking through daylight, shadow, and orientation as design tools rather than afterthoughts.",
    placeholder: true
  },
  {
    slug: "studio-notes",
    title: "Studio Notes: From Sketch to Section",
    category: "Studio",
    cover: "images/aquilo-flow-model-01.jpg",
    excerpt: "A behind-the-scenes look at how a project moves from an early sketch to a resolved architectural section.",
    placeholder: true
  }
];

var CAPABILITIES = [
  { num: "01", title: "Architecture", img: "images/salvia-exterior-02.jpg", text: "Conceptual and residential architecture, cultural spaces, and academic research translated into buildable form." },
  { num: "02", title: "Interior Architecture", img: "images/casa-jacaranda-sala-01.jpg", text: "Interior environments, spatial planning, materiality, furniture, lighting, and custom detailing." },
  { num: "03", title: "3D Visualization", img: "images/salvia-exterior-01.jpg", text: "Photorealistic architectural visualization, renderings, and presentation graphics." },
  { num: "04", title: "Architectural Modeling", img: "images/terravista-01.jpg", text: "Physical and digital models used to test form, terrain, and structure before a line is drawn." },
  { num: "05", title: "Master Planning", img: "images/emerald-spring-hill-siteplan.jpg", text: "Site strategy, spatial organization, and landscape integration at the scale of a full site." },
  { num: "06", title: "Research & Systems", img: "images/salvia-wind-diagram.jpg", text: "Passive systems, environmental diagrams, and research-driven design thinking." }
];

var PROCESS = [
  { num: "01", title: "Discover", text: "Understanding the site, context, and ambitions behind a project before any form is proposed.", img: "images/la-raiz-courtyard.jpg" },
  { num: "02", title: "Concept", text: "Developing the architectural idea and design language that will carry through the project.", img: "images/aquilo-flow-render.jpg" },
  { num: "03", title: "Develop", text: "Refining spatial organization, materials, structure, and detail.", img: "images/salvia-watercolor-section.jpg" },
  { num: "04", title: "Visualize", text: "Creating immersive architectural imagery and presentation material.", img: "images/salvia-exterior-01.jpg" },
  { num: "05", title: "Realize", text: "Where a project is built, seeing the design through to a finished, occupied space.", img: "images/emerald-spring-hill-patio.jpg" }
];
