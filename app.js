const routes = {
  '/': {
    title: 'Entity Ethereal | Physical Signals, Made Measurable',
    view: homeView,
  },
  '/services': {
    title: 'Services | Entity Ethereal',
    view: servicesView,
  },
  '/platform': {
    title: 'Platform | Entity Ethereal',
    view: platformView,
  },
  '/use-cases': {
    title: 'Use Cases | Entity Ethereal',
    view: useCasesView,
  },
  '/early-adopter': {
    title: 'Early Adopter | Entity Ethereal',
    view: earlyAdopterView,
  },
  '/contact': {
    title: 'Contact | Entity Ethereal',
    view: contactView,
  },
};

const navItems = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/platform', 'Platform'],
  ['/use-cases', 'Use cases'],
  ['/early-adopter', 'Early adopter'],
  ['/contact', 'Contact'],
];

function normalisePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes[clean] ? clean : '/';
}

function html(strings, ...values) {
  return strings.reduce((output, string, index) => output + string + (values[index] ?? ''), '');
}

function pageShell(content, path) {
  return html`
    <header class="site-header">
      <a class="brand-link" href="/" data-link aria-label="Entity Ethereal home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>Entity Ethereal</span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
        <span class="sr-only">Menu</span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        ${navItems.map(([href, label]) => html`
          <a href="${href}" data-link class="${href === path ? 'active' : ''}">${label}</a>
        `).join('')}
      </nav>
    </header>
    <main id="main">
      ${content}
    </main>
    <footer class="site-footer">
      <div>
        <strong>Entity Ethereal</strong>
        <p>Intentional physical engagement, connected to measurable digital journeys.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/services" data-link>Services</a>
        <a href="/platform" data-link>Platform</a>
        <a href="/contact" data-link>Contact</a>
      </nav>
    </footer>
  `;
}

function productConsole() {
  return html`
    <section class="signal-console" aria-label="Campaign signal preview">
      <div class="console-bar">
        <span></span><span></span><span></span>
        <strong>Live Signal Map</strong>
      </div>
      <div class="console-grid">
        <div class="qr-preview" aria-hidden="true">
          ${Array.from({ length: 49 }, (_, index) => `<i class="${[0, 2, 3, 5, 8, 9, 10, 14, 16, 18, 20, 21, 22, 24, 27, 29, 30, 32, 35, 36, 38, 40, 41, 44, 45, 48].includes(index) ? 'on' : ''}"></i>`).join('')}
        </div>
        <div class="console-copy">
          <p class="label">Campaign token</p>
          <strong>EE-QR-7F21</strong>
          <span>Print pack to CRM to revenue</span>
        </div>
      </div>
      <div class="journey-line">
        ${['Print scan', 'Landing page', 'CRM route', 'Revenue event'].map((item, index) => html`
          <div>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${item}</strong>
          </div>
        `).join('')}
      </div>
      <div class="metrics-strip">
        <div><b>42k</b><span>Signals</span></div>
        <div><b>18%</b><span>Lift</span></div>
        <div><b>4.1x</b><span>ROAS view</span></div>
      </div>
    </section>
  `;
}

function hero() {
  return html`
    <section class="hero section-band">
      <div class="hero-scene" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="eyebrow">Called, not caught.</p>
        <h1>Entity Ethereal</h1>
        <p class="hero-lede">Physical signals, made measurable. Connect tracked print, QR, PURL and NFC campaigns to the digital journeys they start.</p>
        <div class="hero-actions">
          <a class="button primary" href="/early-adopter" data-link>Become an early adopter</a>
          <a class="button secondary" href="/platform" data-link>View the platform</a>
        </div>
      </div>
      ${productConsole()}
    </section>
  `;
}

function proofBand() {
  return html`
    <section class="proof-band" aria-label="Positioning">
      <div><strong>No passive surveillance.</strong><span>Only intentional interaction.</span></div>
      <div><strong>No attribution fog.</strong><span>Identifiers persist from print to CRM.</span></div>
      <div><strong>No campaign dead ends.</strong><span>Signals become journeys, routes and outcomes.</span></div>
    </section>
  `;
}

function homeView() {
  return html`
    ${hero()}
    ${proofBand()}
    <section class="section-grid">
      <div>
        <p class="eyebrow">Operating model</p>
        <h2>Turn physical media into accountable journey infrastructure.</h2>
        <p>Entity Ethereal gives every printed touchpoint a measurable identity, then connects the resulting action to landing pages, CRM routing, sales motion and revenue feedback.</p>
      </div>
      <div class="feature-list">
        ${[
          ['Generate', 'Create secure identifiers for mailers, shelf cards, packs, invitations and inserts.'],
          ['Route', 'Send each scan or tap to the right page, team, segment or CRM workflow.'],
          ['Measure', 'Track scans, page views, forms, conversions and closed-loop campaign outcomes.'],
        ].map(([title, copy]) => featureItem(title, copy)).join('')}
      </div>
    </section>
    ${ctaBand('Make the physical journey measurable.', 'Start with a focused launch campaign and expand into a full signal layer.', '/contact', 'Plan the first campaign')}
  `;
}

function servicesView() {
  return html`
    ${pageHero('Services', 'Launch the full physical-to-digital campaign layer without asking your team to stitch tools together.')}
    <section class="cards-grid">
      ${[
        ['Signal strategy', 'Map printed assets, audience intent, routing logic and measurable outcomes before production begins.'],
        ['Identifier generation', 'Create QR, PURL and NFC-ready identifiers with metadata exports for print and fulfilment partners.'],
        ['Journey buildout', 'Deploy landing flows, lead capture, CRM routing and event tracking that match the campaign promise.'],
        ['Attribution review', 'Read the signal path from first scan to conversion, then refine the next print run with evidence.'],
      ].map(([title, copy]) => card(title, copy)).join('')}
    </section>
  `;
}

function platformView() {
  return html`
    ${pageHero('Platform', 'A lightweight control layer for intentional physical engagement.')}
    <section class="platform-layout">
      ${productConsole()}
      <div class="feature-list">
        ${[
          ['Campaign workspaces', 'Keep brands, campaigns, identifiers and destinations organised.'],
          ['Personalised routes', 'Send each token to the right experience without exposing private source data.'],
          ['Event ingestion', 'Record scans, page views, form submissions and revenue events against the original physical touchpoint.'],
          ['Output bundles', 'Export metadata, manifests and QR assets for production teams.'],
        ].map(([title, copy]) => featureItem(title, copy)).join('')}
      </div>
    </section>
  `;
}

function useCasesView() {
  return html`
    ${pageHero('Use Cases', 'Designed for teams that still rely on physical moments but need digital accountability.')}
    <section class="cards-grid">
      ${[
        ['Direct mail', 'Track individual mailer responses and route each recipient into the right offer or advisor path.'],
        ['Retail media', 'Measure shelf cards, packaging inserts and in-store prompts beyond aggregate footfall.'],
        ['Events', 'Connect invitations, badges and physical leave-behinds to post-event pipeline.'],
        ['High-trust sales', 'Let printed material start a deliberate digital action without creepy background tracking.'],
      ].map(([title, copy]) => card(title, copy)).join('')}
    </section>
  `;
}

function earlyAdopterView() {
  return html`
    ${pageHero('Early Adopter', 'Bring one physical campaign into closed-loop measurement.')}
    <section class="form-layout">
      <div>
        <h2>Good first campaigns</h2>
        <ul class="check-list">
          <li>Direct mail with known recipients.</li>
          <li>Event invitations or printed follow-up packs.</li>
          <li>Retail or packaging prompts with clear next actions.</li>
          <li>Sales collateral where attribution is currently anecdotal.</li>
        </ul>
      </div>
      ${leadForm('early-adopter')}
    </section>
  `;
}

function contactView() {
  return html`
    ${pageHero('Contact', 'Tell us what physical media needs to become measurable.')}
    <section class="form-layout">
      <div>
        <h2>What to include</h2>
        <p>Share the asset type, expected volume, destination experience and the business outcome you want to connect back to the physical signal.</p>
        <div class="contact-note">
          <strong>Launch-ready scope</strong>
          <span>Campaign design, identifier structure, metadata, landing flow and reporting plan.</span>
        </div>
      </div>
      ${leadForm('contact')}
    </section>
  `;
}

function pageHero(title, copy) {
  return html`
    <section class="page-hero section-band">
      <p class="eyebrow">Entity Ethereal</p>
      <h1>${title}</h1>
      <p>${copy}</p>
    </section>
  `;
}

function featureItem(title, copy) {
  return html`
    <article class="feature-item">
      <span aria-hidden="true"></span>
      <div>
        <h3>${title}</h3>
        <p>${copy}</p>
      </div>
    </article>
  `;
}

function card(title, copy) {
  return html`
    <article class="info-card">
      <h2>${title}</h2>
      <p>${copy}</p>
    </article>
  `;
}

function ctaBand(title, copy, href, label) {
  return html`
    <section class="cta-band">
      <div>
        <h2>${title}</h2>
        <p>${copy}</p>
      </div>
      <a class="button primary" href="${href}" data-link>${label}</a>
    </section>
  `;
}

function leadForm(kind) {
  return html`
    <form class="lead-form" data-form="${kind}">
      <label>
        Name
        <input name="name" autocomplete="name" required>
      </label>
      <label>
        Email
        <input name="email" type="email" autocomplete="email" required>
      </label>
      <label>
        Campaign type
        <select name="campaignType" required>
          <option value="">Select one</option>
          <option>Direct mail</option>
          <option>Retail or packaging</option>
          <option>Event</option>
          <option>Sales collateral</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Notes
        <textarea name="notes" rows="5" placeholder="Volume, destination, CRM, timing"></textarea>
      </label>
      <button class="button primary" type="submit">Send request</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  `;
}

function render() {
  const path = normalisePath(window.location.pathname);
  const route = routes[path];
  document.title = route.title;
  document.querySelector('#app').innerHTML = pageShell(route.view(), path);
  bindInteractions();
}

function bindInteractions() {
  document.querySelectorAll('[data-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      history.pushState({}, '', url.pathname);
      render();
      window.scrollTo(0, 0);
    });
  });

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('#site-nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('open', !isOpen);
  });

  document.querySelectorAll('[data-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const submissions = JSON.parse(localStorage.getItem('entity-ethereal-leads') || '[]');
      submissions.unshift({ ...data, form: form.dataset.form, createdAt: new Date().toISOString() });
      localStorage.setItem('entity-ethereal-leads', JSON.stringify(submissions.slice(0, 25)));
      form.reset();
      form.querySelector('.form-status').textContent = 'Request saved. We will connect the next step from here.';
    });
  });
}

window.addEventListener('popstate', render);
render();
