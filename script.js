/* ============================================================
   ARILL SHUKLA — Portfolio
   Script: Routing, Project Data, Filtering, Interactions
   ============================================================ */

// ─── Project Data ───────────────────────────────────────────
const PROJECTS = [
  // ── Product Design (6) ──
  {
    id: 'geodesic-shelter',
    title: 'Geodesic Shelter',
    category: 'product-design',
    year: '2025',
    tags: ['Product Design', 'Fabrication'],
    color: '#E8553A',
    subtitle: 'Deployable emergency housing solution using origami-inspired folding geometry.',
    description: `A lightweight, deployable shelter designed for emergency relief scenarios. The structure uses an origami-inspired folding mechanism that allows a single person to deploy it in under five minutes. Constructed from recycled polypropylene panels connected with fabric hinges, the shelter provides weather resistance while remaining portable and cost-effective.`,
    details: {
      'Category': 'Product Design',
      'Year': '2025',
      'Materials': 'Polypropylene, Fabric Hinges',
      'Status': 'Prototype Complete'
    }
  },
  {
    id: 'ceramic-vessel',
    title: 'Ceramic Vessel Collection',
    category: 'product-design',
    year: '2024',
    tags: ['Ceramics', 'Craft'],
    color: '#C4956A',
    subtitle: 'Handcrafted stoneware vessels exploring organic surface textures.',
    description: `A collection of handcrafted stoneware vessels that explore the dialogue between controlled form and organic surface texture. Each piece is wheel-thrown and then manipulated by hand, creating unique surface patterns that celebrate the material's natural behavior during firing.`,
    details: {
      'Category': 'Product Design',
      'Year': '2024',
      'Materials': 'Stoneware Clay, Glaze',
      'Status': 'Completed'
    }
  },
  {
    id: 'modular-lamp',
    title: 'Modular Desk Lamp',
    category: 'product-design',
    year: '2024',
    tags: ['Lighting', 'Product'],
    color: '#3D5A80',
    subtitle: 'Adjustable task lighting with interchangeable diffuser components.',
    description: `A modular desk lamp system that allows users to customize their lighting experience through interchangeable diffuser components. The base unit uses a simple magnetic connection system, enabling quick swaps between focused task lighting, ambient glow, and diffused reading light configurations.`,
    details: {
      'Category': 'Product Design',
      'Year': '2024',
      'Materials': 'Aluminum, 3D-Printed PLA, LED',
      'Status': 'Concept'
    }
  },
  {
    id: 'bamboo-stool',
    title: 'Bamboo Stool',
    category: 'product-design',
    year: '2024',
    tags: ['Furniture', 'Sustainable'],
    color: '#7B8A56',
    subtitle: 'Sustainable seating exploring traditional joinery with contemporary form.',
    description: `A minimalist stool crafted from locally sourced bamboo, combining traditional Indian joinery techniques with contemporary Scandinavian form language. The design eliminates the need for adhesives or metal fasteners, relying entirely on friction-fit joints that can be disassembled for flat-pack shipping.`,
    details: {
      'Category': 'Product Design',
      'Year': '2024',
      'Materials': 'Bamboo, Natural Oil Finish',
      'Status': 'Prototype'
    }
  },
  {
    id: 'water-filtration',
    title: 'Portable Water Filter',
    category: 'product-design',
    year: '2023',
    tags: ['Social Design', 'Product'],
    color: '#4A7C7E',
    subtitle: 'Low-cost portable water purification for rural communities.',
    description: `A gravity-fed water purification device designed for rural communities without access to clean drinking water. The system uses a combination of activated carbon and ceramic filtration to remove bacteria and particulates, packaged in a durable, easily replaceable cartridge format.`,
    details: {
      'Category': 'Product Design',
      'Year': '2023',
      'Materials': 'HDPE, Ceramic Filter, Activated Carbon',
      'Status': 'Field Testing'
    }
  },
  {
    id: 'kinetic-sculpture',
    title: 'Kinetic Wind Sculpture',
    category: 'product-design',
    year: '2023',
    tags: ['Sculpture', 'Kinetic'],
    color: '#8B6F4E',
    subtitle: 'Wind-powered kinetic sculpture exploring movement and balance.',
    description: `An outdoor kinetic sculpture that harnesses wind energy to create mesmerizing patterns of movement. The piece consists of precisely balanced aluminum fins mounted on low-friction bearings, each responding independently to air currents while maintaining visual harmony as a unified composition.`,
    details: {
      'Category': 'Product Design',
      'Year': '2023',
      'Materials': 'Aluminum, Stainless Steel Bearings',
      'Status': 'Installed'
    }
  },

  // ── Artworks (11) ──
  {
    id: 'fragmented-perspectives',
    title: 'Fragmented Perspectives',
    category: 'artworks',
    year: '2025',
    tags: ['Mixed Media', 'Installation'],
    color: '#2D3436',
    subtitle: 'Mixed media exploration of perception and viewpoint.',
    description: `A mixed media installation examining how physical perspective shapes our understanding of objects and space. Fragmented mirror panels and printed imagery create a disorienting but beautiful environment where viewers must actively reconstruct the visual narrative.`,
    details: { 'Category': 'Artwork', 'Year': '2025', 'Medium': 'Mixed Media', 'Size': 'Installation' }
  },
  {
    id: 'material-studies-i',
    title: 'Material Studies I',
    category: 'artworks',
    year: '2025',
    tags: ['Material', 'Exploration'],
    color: '#636E72',
    subtitle: 'Investigating paper as a structural and aesthetic medium.',
    description: `The first in a series of material investigations, this body of work examines paper's dual nature as both a delicate surface and a surprisingly robust structural material. Through folding, layering, and compression, ordinary paper is transformed into sculptural forms that challenge assumptions about material fragility.`,
    details: { 'Category': 'Artwork', 'Year': '2025', 'Medium': 'Paper, Light', 'Size': 'Various' }
  },
  {
    id: 'chromatic-layers',
    title: 'Chromatic Layers',
    category: 'artworks',
    year: '2024',
    tags: ['Painting', 'Abstract'],
    color: '#D4785C',
    subtitle: 'Layered acrylic compositions exploring color interaction.',
    description: `A series of large-format acrylic paintings built through systematic layering of translucent color. Each piece documents the interaction between warm and cool tones as they accumulate, creating depth and luminosity that shifts with viewing angle and lighting conditions.`,
    details: { 'Category': 'Artwork', 'Year': '2024', 'Medium': 'Acrylic on Canvas', 'Size': '120×90 cm' }
  },
  {
    id: 'tension-balance',
    title: 'Tension & Balance',
    category: 'artworks',
    year: '2024',
    tags: ['Sculpture', 'Wire'],
    color: '#4A4A4A',
    subtitle: 'Wire sculptures exploring equilibrium and structural tension.',
    description: `A collection of wire sculptures that examine the principles of tensegrity — structures held together by a balance of tension and compression. Each piece appears to defy gravity, with heavy elements suspended by thin wire, creating visual drama from simple physical principles.`,
    details: { 'Category': 'Artwork', 'Year': '2024', 'Medium': 'Steel Wire, Stone', 'Size': 'Various' }
  },
  {
    id: 'organic-forms',
    title: 'Organic Forms',
    category: 'artworks',
    year: '2024',
    tags: ['Sculpture', 'Plaster'],
    color: '#B2967D',
    subtitle: 'Plaster castings inspired by natural growth patterns.',
    description: `Cast plaster sculptures that draw inspiration from biological growth patterns — coral, fungi, and seed pods. The forms emerge from a process of intuitive sculpting, where the material's fluid, then rigid, nature guides the final shape rather than predetermined design.`,
    details: { 'Category': 'Artwork', 'Year': '2024', 'Medium': 'Plaster', 'Size': '30×20×15 cm' }
  },
  {
    id: 'deconstructed-object',
    title: 'Deconstructed Object',
    category: 'artworks',
    year: '2024',
    tags: ['Installation', 'Found Object'],
    color: '#5C4033',
    subtitle: 'Everyday objects dissected and reimagined as art.',
    description: `Everyday manufactured objects — a clock, a telephone, a radio — are carefully disassembled then reassembled into new configurations that highlight the beauty of their internal components. The work asks viewers to reconsider the aesthetic potential hidden within functional design.`,
    details: { 'Category': 'Artwork', 'Year': '2024', 'Medium': 'Found Objects', 'Size': 'Variable' }
  },
  {
    id: 'light-shadow',
    title: 'Light & Shadow Study',
    category: 'artworks',
    year: '2023',
    tags: ['Photography', 'Light'],
    color: '#1A1A1A',
    subtitle: 'Photographic study of natural light through architectural spaces.',
    description: `A photographic series documenting how natural light moves through architectural spaces over the course of a day. Shot in various buildings across India, the images capture moments where light transforms ordinary surfaces into canvases of moving shadow and warmth.`,
    details: { 'Category': 'Artwork', 'Year': '2023', 'Medium': 'Photography', 'Size': 'Digital' }
  },
  {
    id: 'woven-textures',
    title: 'Woven Textures',
    category: 'artworks',
    year: '2023',
    tags: ['Textile', 'Craft'],
    color: '#9B7653',
    subtitle: 'Hand-woven textile samples exploring pattern and rhythm.',
    description: `A collection of hand-woven textile samples created on a small table loom, exploring the relationship between weave structure and surface texture. The samples use a limited palette of natural fibers — cotton, jute, and silk — letting the weave pattern itself create visual interest.`,
    details: { 'Category': 'Artwork', 'Year': '2023', 'Medium': 'Cotton, Jute, Silk', 'Size': 'Various' }
  },
  {
    id: 'abstract-composition',
    title: 'Abstract Composition',
    category: 'artworks',
    year: '2023',
    tags: ['Collage', 'Paper'],
    color: '#A0522D',
    subtitle: 'Paper collage series exploring spatial relationships.',
    description: `Cut paper collages that explore spatial relationships through overlapping geometric and organic shapes. Using only black, white, and a single accent color, each composition creates a sense of depth and movement from flat, static materials.`,
    details: { 'Category': 'Artwork', 'Year': '2023', 'Medium': 'Cut Paper', 'Size': '40×30 cm' }
  },
  {
    id: 'surface-exploration',
    title: 'Surface Exploration',
    category: 'artworks',
    year: '2023',
    tags: ['Mixed Media', 'Texture'],
    color: '#6B4E3D',
    subtitle: 'Material surface experiments with plaster, resin, and pigment.',
    description: `A series of surface experiments combining plaster, resin, and raw pigment to create richly textured panels. Each surface is built up in layers, with materials reacting and interacting unpredictably — cracking, pooling, and crystallizing into unique surface topographies.`,
    details: { 'Category': 'Artwork', 'Year': '2023', 'Medium': 'Plaster, Resin, Pigment', 'Size': '50×50 cm' }
  },
  {
    id: 'material-studies-ii',
    title: 'Material Studies II',
    category: 'artworks',
    year: '2023',
    tags: ['Material', 'Exploration'],
    color: '#8B7355',
    subtitle: 'Continuation exploring concrete and textile composites.',
    description: `The second installment in the Material Studies series, focusing on the juxtaposition of concrete and textile. Fabric is used as formwork for casting, leaving its texture permanently imprinted in the rigid concrete surface — a dialogue between soft and hard, flexible and permanent.`,
    details: { 'Category': 'Artwork', 'Year': '2023', 'Medium': 'Concrete, Fabric', 'Size': 'Various' }
  },

  // ── Sketches ──
  {
    id: 'sketch-1',
    title: 'Concept Ideation — Shelter Forms',
    category: 'sketches',
    year: '2025',
    color: '#D5CFC7',
    isSketch: true
  },
  {
    id: 'sketch-2',
    title: 'Product Explorations — Lamp Iterations',
    category: 'sketches',
    year: '2024',
    color: '#C8C2BA',
    isSketch: true
  },
  {
    id: 'sketch-3',
    title: 'Form Studies — Organic Shapes',
    category: 'sketches',
    year: '2024',
    color: '#D0C9C1',
    isSketch: true
  },
  {
    id: 'sketch-4',
    title: 'Technical Drawings — Joinery Details',
    category: 'sketches',
    year: '2024',
    color: '#C5BFB7',
    isSketch: true
  },
  {
    id: 'sketch-5',
    title: 'Perspective Studies — Interior Spaces',
    category: 'sketches',
    year: '2023',
    color: '#CCC6BE',
    isSketch: true
  },
  {
    id: 'sketch-6',
    title: 'Material Texture Studies',
    category: 'sketches',
    year: '2023',
    color: '#D2CBC3',
    isSketch: true
  },
  {
    id: 'sketch-7',
    title: 'Quick Concepts — Seating',
    category: 'sketches',
    year: '2023',
    color: '#C9C3BB',
    isSketch: true
  },
  {
    id: 'sketch-8',
    title: 'Observational Sketches — Market Visit',
    category: 'sketches',
    year: '2023',
    color: '#D4CEC6',
    isSketch: true
  }
];

// ─── DOM References ─────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── App State ──────────────────────────────────────────────
let currentPage = 'home';
let currentFilter = 'all';
let isTransitioning = false;

// ─── Initialize ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initScrollArrow();
  initRevealAnimations();
  initHeroWordRotation();
  renderProjects(); // Render projects immediately on load
  initRouter();
});

// ─── Router ─────────────────────────────────────────────────
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';

  if (hash.startsWith('project/')) {
    const projectId = hash.split('/')[1];
    showProjectDetail(projectId);
    return;
  }

  navigateTo(hash);
}

function navigateTo(page) {
  if (isTransitioning) return;

  const validPages = ['home', 'projects', 'about', 'contact'];
  if (!validPages.includes(page)) page = 'home';

  // 'home' and 'projects' show the same view
  if (page === 'projects') page = 'home';

  const overlay = $('.page-transition-overlay');

  if (currentPage === page && !document.querySelector('.project-detail-view.active')) {
    // same page, just hide project detail if showing
    hideProjectDetail();
    return;
  }

  isTransitioning = true;

  // Transition animation
  overlay.classList.add('entering');

  setTimeout(() => {
    // Hide all pages
    $$('.page-section').forEach(s => {
      s.classList.remove('active', 'visible');
    });

    // Hide project detail
    hideProjectDetail(true);

    // Show target page
    const target = $(`#page-${page}`);
    if (target) {
      target.classList.add('active');
      requestAnimationFrame(() => {
        target.classList.add('visible');
      });
    }

    currentPage = page;
    updateNavActive();

    // If showing home, render projects
    if (page === 'home') {
      renderProjects();
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    overlay.classList.remove('entering');
    overlay.classList.add('exiting');

    setTimeout(() => {
      overlay.classList.remove('exiting');
      isTransitioning = false;
      triggerReveal();
    }, 300);

  }, 300);
}

function updateNavActive() {
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || link.dataset.page;
    const target = href ? href.replace('#', '') : '';
    const isActive = (target === currentPage) ||
      (target === 'projects' && currentPage === 'home') ||
      (target === 'home' && currentPage === 'home');
    link.classList.toggle('active', isActive);
  });
}

// ─── Navigation Scroll Effect ───────────────────────────────
function initNavScroll() {
  const nav = $('.nav');
  const scrollIndicator = $('#hero-scroll-indicator');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 80);

    if (scrollIndicator) {
      if (scrollY > 50) {
        scrollIndicator.classList.add('hidden');
      } else {
        scrollIndicator.classList.remove('hidden');
      }
    }

    lastScroll = scrollY;
  });
}

// ─── Mobile Menu ────────────────────────────────────────────
function initMobileMenu() {
  const toggle = $('.nav-toggle');
  const menu = $('.mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  $$('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ─── Scroll Arrow ───────────────────────────────────────────
function initScrollArrow() {
  const arrow = $('.hero-scroll');
  if (!arrow) return;

  arrow.addEventListener('click', () => {
    const projectsSection = $('#projects-area');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ─── Projects Rendering ─────────────────────────────────────
function renderProjects() {
  const grid = $('#project-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filteredProjects = currentFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === currentFilter);

  filteredProjects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    grid.appendChild(card);
  });

  updateFilterButtons();
  triggerReveal();
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = `project-card showing${project.isSketch ? ' sketch-card' : ''}`;
  card.style.animationDelay = `${index * 0.06}s`;
  card.dataset.id = project.id;
  card.dataset.category = project.category;

  const placeholder = document.createElement('div');
  placeholder.className = 'project-card-placeholder';
  placeholder.style.backgroundColor = project.color;

  card.appendChild(placeholder);

  const info = document.createElement('div');
  info.className = 'project-card-info';

  const title = document.createElement('h3');
  title.className = 'project-card-title';
  title.textContent = project.title;

  const meta = document.createElement('p');
  meta.className = 'project-card-meta';
  meta.textContent = project.isSketch
    ? `Sketchbook — ${project.year}`
    : `${project.tags ? project.tags[0] : project.category} — ${project.year}`;

  info.appendChild(title);
  info.appendChild(meta);
  card.appendChild(info);

  if (!project.isSketch) {
    card.addEventListener('click', () => {
      window.location.hash = `project/${project.id}`;
    });
  }

  return card;
}

// ─── Filter Logic ───────────────────────────────────────────
function setFilter(filter) {
  if (filter === currentFilter) return;
  currentFilter = filter;

  const grid = $('#project-grid');
  if (!grid) return;

  // Fade out
  const cards = $$('.project-card', grid);
  cards.forEach(c => c.classList.add('hiding'));

  setTimeout(() => {
    renderProjects();
  }, 300);
}

function updateFilterButtons() {
  $$('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === currentFilter);
  });
}

// Expose to global for onclick
window.setFilter = setFilter;

// ─── Project Detail View ────────────────────────────────────
function showProjectDetail(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project || project.isSketch) {
    window.location.hash = 'home';
    return;
  }

  isTransitioning = true;
  const overlay = $('.page-transition-overlay');
  overlay.classList.add('entering');

  setTimeout(() => {
    // Hide all page sections
    $$('.page-section').forEach(s => s.classList.remove('active', 'visible'));

    // Build and show detail
    const detail = $('#project-detail-view');
    detail.innerHTML = buildProjectDetailHTML(project);
    detail.classList.add('active');

    requestAnimationFrame(() => {
      detail.classList.add('visible');
    });

    currentPage = 'detail';
    updateNavActive();
    window.scrollTo({ top: 0, behavior: 'instant' });

    overlay.classList.remove('entering');
    overlay.classList.add('exiting');

    setTimeout(() => {
      overlay.classList.remove('exiting');
      isTransitioning = false;
    }, 300);
  }, 300);
}

function buildProjectDetailHTML(project) {
  const metaHTML = project.details
    ? Object.entries(project.details).map(([label, value]) => `
        <div class="project-detail-meta-item">
          <span class="project-detail-meta-label">${label}</span>
          <span class="project-detail-meta-value">${value}</span>
        </div>
      `).join('')
    : '';

  // Generate gallery colors (variations of the project color)
  const galleryColors = [
    project.color,
    adjustColor(project.color, 20),
    adjustColor(project.color, -20),
    adjustColor(project.color, 40)
  ];

  return `
    <div class="project-detail">
      <button class="project-detail-back" onclick="window.location.hash='home'">
        ← Back to Projects
      </button>

      <div class="project-detail-hero-placeholder" style="background-color: ${project.color}"></div>

      <div class="project-detail-header">
        <div>
          <h1 class="project-detail-title">${project.title}</h1>
          <p class="project-detail-subtitle">${project.subtitle || ''}</p>
        </div>
        <div class="project-detail-meta">
          ${metaHTML}
        </div>
      </div>

      <div class="project-detail-body">
        <p>${project.description || ''}</p>
      </div>

      <div class="project-detail-gallery">
        ${galleryColors.map(color => `
          <div class="project-detail-gallery-placeholder" style="background-color: ${color}"></div>
        `).join('')}
      </div>
    </div>
  `;
}

function hideProjectDetail(instant = false) {
  const detail = $('#project-detail-view');
  if (detail) {
    detail.classList.remove('active', 'visible');
    detail.innerHTML = '';
  }
}

// ─── Color Utility ──────────────────────────────────────────
function adjustColor(hex, amount) {
  hex = hex.replace('#', '');
  const r = Math.min(255, Math.max(0, parseInt(hex.substr(0, 2), 16) + amount));
  const g = Math.min(255, Math.max(0, parseInt(hex.substr(2, 2), 16) + amount));
  const b = Math.min(255, Math.max(0, parseInt(hex.substr(4, 2), 16) + amount));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ─── Scroll Reveal Animations ───────────────────────────────
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.reveal').forEach(el => observer.observe(el));
}

function triggerReveal() {
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    $$('.reveal:not(.revealed)').forEach(el => observer.observe(el));
  });
}

// ─── Hero Word Rotation ─────────────────────────────────────
function initHeroWordRotation() {
  const container = document.getElementById('hero-words');
  if (!container) return;

  const words = container.querySelectorAll('.hero-word');
  if (words.length === 0) return;

  let currentIndex = 0;

  setInterval(() => {
    words[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.add('active');
  }, 2500);
}

// ─── Attach Nav Click Handlers ──────────────────────────────
document.addEventListener('click', (e) => {
  const navLink = e.target.closest('[data-page]');
  if (navLink) {
    e.preventDefault();
    const page = navLink.dataset.page;
    window.location.hash = page;
  }
});
