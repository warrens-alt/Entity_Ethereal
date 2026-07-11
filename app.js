const routeMeta = {
  '/': {
    title: 'Entity Ethereal | Physical Signals, Made Measurable',
    description: 'Entity Ethereal turns print, QR, PURL and NFC campaigns into intentional digital journeys with deterministic attribution.',
    view: homeView,
  },
  '/services': {
    title: 'Services | Entity Ethereal',
    description: 'Campaign architecture, identifier production, landing journeys and attribution design for measurable physical media.',
    view: servicesView,
  },
  '/platform': {
    title: 'Platform | Entity Ethereal',
    description: 'A signal layer for physical media: identifiers, destinations, events, exports and campaign intelligence.',
    view: platformView,
  },
  '/use-cases': {
    title: 'Use Cases | Entity Ethereal',
    description: 'Direct mail, events, retail media and high-trust sales journeys made measurable from first scan to revenue signal.',
    view: useCasesView,
  },
  '/early-adopter': {
    title: 'Early Adopter | Entity Ethereal',
    description: 'Launch a focused physical-to-digital attribution pilot with Entity Ethereal.',
    view: earlyAdopterView,
  },
  '/contact': {
    title: 'Contact | Entity Ethereal',
    description: 'Plan a measurable print, QR, PURL or NFC campaign with Entity Ethereal.',
    view: contactView,
  },
};

const navItems = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/platform', 'Platform'],
  ['/use-cases', 'Use cases'],
  ['/early-adopter', 'Early access'],
  ['/contact', 'Contact'],
];

const outcomes = [
  ['Signal identity', 'Every artefact receives a durable token that survives the jump from paper to digital.'],
  ['Intentional capture', 'Only scan, tap, click and form actions become signal. No passive surveillance layer.'],
  ['Journey routing', 'Send each recipient to the right landing page, CRM path, team or conversion moment.'],
  ['Closed-loop proof', 'Tie scans, page views, submissions and revenue events back to the original physical touchpoint.'],
];

const serviceCards = [
  ['Campaign architecture', 'Define the physical asset, audience logic, destination paths, event model and reporting shape before anything goes to print.'],
  ['Identifier production', 'Generate QR, PURL and NFC-ready identifiers with metadata outputs for print, fulfilment and operational QA.'],
  ['Journey orchestration', 'Build the digital layer that receives the signal: landing flows, forms, routing rules, CRM handoff and outcome capture.'],
  ['Attribution review', 'Read the path from artefact to action, then refine creative, lists, offers and destinations for the next campaign.'],
];

const platformModules = [
  ['Campaign Control', 'Brand workspaces, campaign setup, identifier rules, source rows and destination logic.'],
  ['Signal Registry', 'Unique tokens, tracking URLs, PURLs, QR assets and metadata exports that stay production-ready.'],
  ['Journey Layer', 'Personalised experiences, landing pages, forms and routing rules attached to each signal.'],
  ['Event Ledger', 'Scans, page views, submissions, conversions and custom revenue events tied back to the token.'],
  ['Output Studio', 'CSV metadata, manifests and print-friendly QR assets for production teams.'],
  ['Insight Loop', 'Campaign totals, signal rates, conversion value and the evidence needed to optimise the next print run.'],
];

const useCases = [
  ['Direct mail', 'Know which household, segment or offer created action without relying on aggregate response estimates.'],
  ['Retail and packaging', 'Make shelf cards, inserts and packaging prompts measurable when the customer chooses to engage.'],
  ['Events', 'Connect invitations, table cards, badges and printed follow-up packs to pipeline after the room clears.'],
  ['High-trust sales', 'Let physical collateral start a deliberate digital action for financial, medical, legal or B2B journeys.'],
  ['Partner campaigns', 'Give distributors, franchises or field teams measurable physical assets without losing brand control.'],
  ['Print testing', 'Compare creative, offer, format and audience cells through deterministic token-level feedback.'],
];

function normalisePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routeMeta[clean] ? clean : '/';
}

function html(strings, ...values) {
  return strings.reduce((output, string, index) => output + string + (values[index] ?? ''), '');
}

function updateDocumentMeta(path) {
  const meta = routeMeta[path] || routeMeta['/'];
  document.title = meta.title;
  setMeta('description', meta.description);
  setMeta('og:title', meta.title, 'property');
  setMeta('og:description', meta.description, 'property');
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = `${window.location.origin}${path === '/' ? '/' : path}`;
}

function setMeta(name, content, attribute = 'name') {
  const tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (tag) tag.setAttribute('content', content);
}

function pageShell(content, path) {
  return html`
    <header class="site-header">
      <a class="brand-link" href="/" data-link aria-label="Entity Ethereal home">
        <span class="brand-mark" aria-hidden="true"><i></i></span>
        <span><strong>Entity Ethereal</strong><small>Called, not caught.</small></span>
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
        <a class="footer-brand" href="/" data-link>Entity Ethereal</a>
        <p>Physical media intelligence for teams that want attribution without invisible tracking.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/services" data-link>Services</a>
        <a href="/platform" data-link>Platform</a>
        <a href="/use-cases" data-link>Use cases</a>
        <a href="/contact" data-link>Contact</a>
      </nav>
    </footer>
  `;
}

function heroVisual() {
  return html`
    <section class="signal-console" aria-label="Signal journey preview">
      <div class="console-top">
        <span></span><span></span><span></span>
        <strong>Signal layer</strong>
      </div>
      <div class="console-body">
        <div class="token-panel">
          <span class="panel-label">Live token</span>
          <strong>EE-PURL-7F21</strong>
          <p>Printed mailer to personalised page to CRM to revenue event.</p>
        </div>
        <div class="qr-frame" aria-hidden="true">
          ${Array.from({ length: 64 }, (_, index) => {
            const active = [0,1,2,4,7,8,10,12,13,15,16,18,21,23,25,26,27,30,32,34,35,37,39,40,42,43,45,48,50,52,54,55,56,59,61,62,63].includes(index);
            return `<i class="${active ? 'on' : ''}"></i>`;
          }).join('')}
        </div>
      </div>
      <div class="signal-path">
        ${['Printed artefact', 'Intentional scan', 'Digital journey', 'Attribution event'].map((item, index) => html`
          <div>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${item}</strong>
          </div>
        `).join('')}
      </div>
      <div class="console-metrics">
        <div><b>42.7k</b><span>Signals</span></div>
        <div><b>31%</b><span>Qualified intent</span></div>
        <div><b>4.1x</b><span>Outcome lift</span></div>
      </div>
    </section>
  `;
}

function homeView() {
  return html`
    <section class="hero section-band">
      <div class="hero-copy">
        <p class="eyebrow">Physical-to-digital campaign intelligence</p>
        <h1>Physical signals, made measurable.</h1>
        <p class="hero-lede">Entity Ethereal turns printed artefacts into intentional digital journeys through QR, PURL, NFC and hybrid identifiers. No guesswork. No passive surveillance. Just clear signal from physical engagement.</p>
        <div class="hero-actions">
          <a class="button primary" href="/early-adopter" data-link>Launch an attribution pilot</a>
          <a class="button secondary" href="/platform" data-link>Explore the signal layer</a>
        </div>
      </div>
      ${heroVisual()}
    </section>
    <section class="proof-band" aria-label="Entity Ethereal principles">
      <div><strong>Called, not caught.</strong><span>Measurement begins when someone chooses to engage.</span></div>
      <div><strong>Token-level proof.</strong><span>Each scan or tap carries the physical context with it.</span></div>
      <div><strong>Print becomes a loop.</strong><span>Campaign feedback informs the next production run.</span></div>
    </section>
    <section class="section-grid">
      <div>
        <p class="eyebrow">Operating model</p>
        <h2>Campaigns move from artefact to action to evidence.</h2>
        <p>Entity Ethereal gives marketing, sales and operations teams a shared system for physical engagement. Source data becomes unique identifiers. Identifiers become printed assets. Printed assets create digital events. Events become attribution, routing and optimisation.</p>
      </div>
      <div class="feature-list">
        ${outcomes.map(([title, copy]) => featureItem(title, copy)).join('')}
      </div>
    </section>
    <section class="dark-band">
      <div>
        <p class="eyebrow">Signal architecture</p>
        <h2>The bridge from print to performance.</h2>
      </div>
      <div class="steps-grid">
        ${[
          ['Connect', 'CRM, CDP, CSV or campaign source data.'],
          ['Compose', 'Audience logic, offer, destination and content.'],
          ['Generate', 'Secure identifiers and print-ready metadata.'],
          ['Deploy', 'Mail, event, retail, packaging or sales assets.'],
          ['Track', 'Intentional scan, tap, page and conversion events.'],
          ['Optimise', 'Evidence for the next physical media decision.'],
        ].map(([title, copy], index) => html`
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>
        `).join('')}
      </div>
    </section>
    ${ctaBand('Ready to make one physical campaign accountable?', 'Start with a focused pilot: one source file, one print asset, one destination path and one outcome model.', '/contact', 'Plan the pilot')}
  `;
}

function servicesView() {
  return html`
    ${pageHero('Services', 'A launch service for physical campaigns that need digital accountability without bolting together five disconnected tools.')}
    <section class="cards-grid">
      ${serviceCards.map(([title, copy]) => card(title, copy)).join('')}
    </section>
    <section class="section-grid compact">
      <div>
        <p class="eyebrow">Delivery shape</p>
        <h2>From campaign question to production-ready signal plan.</h2>
      </div>
      <div class="timeline-list">
        ${[
          ['01', 'Discovery', 'Clarify the physical asset, audience, timing, destination and measurable business outcome.'],
          ['02', 'Signal design', 'Define token structure, field mapping, routing rules, event taxonomy and privacy boundaries.'],
          ['03', 'Build and export', 'Prepare identifiers, metadata, QR assets, landing journeys and campaign QA checks.'],
          ['04', 'Review and optimise', 'Read campaign evidence and decide what should change in the next print run.'],
        ].map(([num, title, copy]) => html`
          <article>
            <span>${num}</span>
            <div><h3>${title}</h3><p>${copy}</p></div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function platformView() {
  return html`
    ${pageHero('Platform', 'The Entity Ethereal signal layer keeps physical media, digital destinations and attribution events in one accountable system.')}
    <section class="platform-layout">
      ${heroVisual()}
      <div class="feature-list">
        ${platformModules.map(([title, copy]) => featureItem(title, copy)).join('')}
      </div>
    </section>
    <section class="schema-band">
      <h2>Campaign -> source data -> unique identifiers -> physical assets -> digital events -> attribution -> optimisation</h2>
      <p>This is the product model: a physical campaign does not end at print production. It becomes a measurable system with a persistent identity layer.</p>
    </section>
  `;
}

function useCasesView() {
  return html`
    ${pageHero('Use Cases', 'For moments where physical media still matters, but proof, routing and follow-up cannot stay anecdotal.')}
    <section class="cards-grid dense">
      ${useCases.map(([title, copy]) => card(title, copy)).join('')}
    </section>
    ${ctaBand('Use the campaign you already planned.', 'Entity Ethereal works best when attached to a real print run, event pack, retail prompt or sales asset that already has a business outcome.', '/early-adopter', 'Join early access')}
  `;
}

function earlyAdopterView() {
  return html`
    ${pageHero('Early Access', 'Bring one physical campaign into closed-loop measurement and learn what the signal layer should become next.')}
    <section class="form-layout">
      <div>
        <h2>Best-fit pilots</h2>
        <ul class="check-list">
          <li>Known-recipient direct mail with segmented offers.</li>
          <li>Event invitations, table cards, badges or printed follow-up packs.</li>
          <li>Retail or packaging prompts with a clear digital next action.</li>
          <li>Sales collateral where pipeline attribution is currently anecdotal.</li>
          <li>Partner or franchise campaigns that need controlled local execution.</li>
        </ul>
      </div>
      ${leadForm('early-access')}
    </section>
  `;
}

function contactView() {
  return html`
    ${pageHero('Contact', 'Tell us what physical media needs to become measurable.')}
    <section class="form-layout">
      <div>
        <h2>What helps us scope it quickly</h2>
        <p>Share the asset type, expected volume, audience source, destination experience, CRM or analytics stack, and the business event you want to connect back to the physical signal.</p>
        <div class="contact-note">
          <strong>Launch-ready scope</strong>
          <span>Campaign design, identifier structure, metadata export, landing flow and reporting plan.</span>
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
      <span aria-hidden="true"></span>
      <h2>${title}</h2>
      <p>${copy}</p>
    </article>
  `;
}

function ctaBand(title, copy, href, label) {
  return html`
    <section class="cta-band">
      <div>
        <p class="eyebrow">Next signal</p>
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
          <option>Partner campaign</option>
        </select>
      </label>
      <label>
        Signal goal
        <select name="signalGoal" required>
          <option value="">Select one</option>
          <option>Measure scan response</option>
          <option>Route leads to CRM</option>
          <option>Attribute revenue</option>
          <option>Test creative or audience cells</option>
          <option>Build full journey reporting</option>
        </select>
      </label>
      <label class="full">
        Notes
        <textarea name="notes" rows="5" placeholder="Volume, print format, CRM, destination, timing"></textarea>
      </label>
      <button class="button primary" type="submit">Send request</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  `;
}

function render() {
  const path = normalisePath(window.location.pathname);
  const route = routeMeta[path];
  updateDocumentMeta(path);
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
      form.querySelector('.form-status').textContent = 'Request saved locally for this launch build. Connect CRM or email routing next.';
    });
  });
}

window.addEventListener('popstate', render);
render();
