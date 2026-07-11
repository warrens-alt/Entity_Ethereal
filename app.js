const routeMeta = {
  '/': {
    title: 'Entity Ethereal | Called, Not Caught',
    description: 'Tracked physical print to digital omnichannel with closed-loop attribution. Entity Ethereal makes print measurable without passive surveillance.',
    view: homeView,
  },
  '/services': {
    title: 'Services | Entity Ethereal',
    description: 'Tracked print services available now: strategy, full-service campaign execution, production management, analytics setup and optimisation.',
    view: servicesView,
  },
  '/platform': {
    title: 'Platform | Entity Ethereal',
    description: 'The Entity Ethereal platform roadmap: batch campaign engine, signal registry, PURL host, event ledger, dashboard and AI optimisation loop.',
    view: platformView,
  },
  '/use-cases': {
    title: 'Use Cases | Entity Ethereal',
    description: 'Direct mail, catalogues, packaging, retail prompts, loyalty cards, agencies and print companies made measurable from scan to conversion.',
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
  ['Tracked print campaigns', 'Turn catalogues, direct mail and packaging into measurable entry points that respect the tap.'],
  ['Variable data at scale', 'Merge customer data with dynamic content, QR, PURL or NFC identifiers and print-ready outputs.'],
  ['Closed-loop attribution', 'Log scan, form, purchase and conversion events against the original physical artefact.'],
  ['Fractional operations', 'Campaign delivery, vendor coordination and performance reporting managed end to end.'],
];

const serviceCards = [
  {
    title: 'Strategy & Blueprint',
    price: 'From R15,000',
    copy: 'A 4-week roadmap that turns existing print assets into measurable digital engagement channels.',
    bullets: ['Audience segmentation', 'QR, PURL, NFC channel model', 'KPI and attribution framework', 'Vendor and data recommendations'],
  },
  {
    title: 'Full-Service Campaign Execution',
    price: 'From R25,000 per campaign',
    copy: 'Tracked print execution from data preparation to unique identifiers, print-ready output and summary reporting.',
    bullets: ['Variable data file preparation', 'Batch QR/PURL generation', 'Print vendor coordination', 'Tracking setup and QA'],
  },
  {
    title: 'Print Production Management',
    price: '10-15% of print spend',
    copy: 'Production lifecycle ownership for variable-data print, from supplier comparison to proof approval and delivery.',
    bullets: ['Prepress checks', 'Production scheduling', 'Quality control', 'Cost reconciliation'],
  },
  {
    title: 'Tracking & Analytics Setup',
    price: 'R8k-R15k setup + monthly',
    copy: 'A turnkey tracking layer using dynamic QR, PURL, UTM and dashboard tools clients can see immediately.',
    bullets: ['Dynamic QR codes', 'PURLs with analytics', 'Live scan dashboards', 'Conversion event tracking'],
  },
  {
    title: 'Performance Reporting',
    price: 'From R10,000 per report',
    copy: 'Campaign evidence translated into what worked, what did not and what the next print run should change.',
    bullets: ['Engagement heatmaps', 'Segment analysis', 'Drop-off points', 'ROI attribution'],
  },
  {
    title: 'Fractional Operations Lead',
    price: 'From R35,000 / month',
    copy: 'An embedded digital operations partner for teams running ongoing physical-to-digital campaigns.',
    bullets: ['Campaign planning', 'Team coordination', 'Vendor communication', 'Platform migration pathway'],
  },
];

const platformModules = [
  ['Batch Campaign Engine', 'Upload a source file, map variables and generate thousands of unique QR, PURL or NFC identifiers in one operation.'],
  ['Signal Registry', 'Durable tokens, tracking URLs, PURLs, QR assets and metadata exports tied to source rows.'],
  ['Output Studio', 'Print-ready PDFs, data manifests, QR coordinate maps and handoff files for production partners.'],
  ['Journey Layer', 'Personalised landing pages, forms, routing rules and digital fallbacks attached to each artefact.'],
  ['Event Ledger', 'Scan, form, conversion and purchase events attributed back to campaign, token, segment and source.'],
  ['Insight Loop', 'Dashboard evidence and AI-assisted recommendations for content, audience and distribution changes.'],
];

const useCases = [
  ['Direct mail that learns', 'Send segmented postcards or letters and see which household, offer and format created action.'],
  ['Catalogues to commerce', 'Give every catalogue, spread or product story its own measurable route to online or in-store conversion.'],
  ['Retail and packaging', 'Measure shelf talkers, inserts, labels and packaging prompts by store, product, time and device.'],
  ['Loyalty programmes', 'Turn physical cards into digital journeys where taps trigger points, emails, forms or wallet actions.'],
  ['Agency delivery', 'Give clients print-to-web campaigns with PURLs, landing pages and reporting without building the stack in-house.'],
  ['Print company transition', 'Add digital engagement, dashboards and recurring optimisation to traditional print production.'],
];

const processSteps = [
  ['Discover', 'Audit the current print, data, customer journey and quick-win opportunities.'],
  ['Design', 'Map the campaign, choose QR/PURL/NFC channels and define variable placeholders.'],
  ['Deploy', 'Generate identifiers, prepare print-ready assets, coordinate vendors and launch tracking.'],
  ['Analyse', 'Measure scans, conversions and drop-off points, then refine the next run.'],
];

const roadmapItems = [
  ['Now', 'Managed services using best-in-class tools, manual QA and operations leadership.'],
  ['MVP', 'CSV upload, batch QR/PURL generation, tracking URLs, landing journeys and campaign dashboard.'],
  ['Next', 'Print-ready PDF rendering, API/webhook integrations and automated client reporting.'],
  ['Later', 'AI optimisation that suggests content, audience and distribution changes for the next run.'],
];

const earlyBenefits = [
  'Lifetime 20% platform discount once the product launches.',
  'Free onboarding and dedicated support for the first 6 months.',
  'Beta Council seat to influence feature prioritisation.',
  'Optional public case study with consent once results are available.',
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
          <p>Printed artefact to personalised page to CRM to conversion event.</p>
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
        <p class="eyebrow">Tracked physical print -> digital omnichannel -> closed-loop attribution</p>
        <h1>Called, not caught.</h1>
        <p class="hero-lede">Entity Ethereal transforms every printed artefact into a measurable digital signal. No guesswork. No surveillance. Just invitation.</p>
        <div class="hero-actions">
          <a class="button primary" href="/services" data-link>See services</a>
          <a class="button secondary" href="/contact" data-link>Book a call</a>
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
        <p class="eyebrow">Our vision</p>
        <h2>Vision. Innovation. Beyond.</h2>
        <p>We are engineers of the invisible bridge between physical media and digital intelligence. Every piece of print can become a living, traceable entry point into the customer journey with consent, clarity and measurable impact.</p>
      </div>
      <div class="feature-list">
        ${outcomes.map(([title, copy]) => featureItem(title, copy)).join('')}
      </div>
    </section>
    <section class="dark-band">
      <div>
        <p class="eyebrow">Process</p>
        <h2>The traceable thread from print to proof.</h2>
      </div>
      <div class="steps-grid">
        ${processSteps.map(([title, copy], index) => html`
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>
        `).join('')}
      </div>
    </section>
    ${ctaBand('Ready to turn print into a living data network?', 'Start with a service engagement now and become an early adopter of the automated platform as it launches.', '/early-adopter', 'Join early access')}
  `;
}

function servicesView() {
  return html`
    ${pageHero('Services', 'Tracked print campaigns, delivered today. While the platform is being built, Entity Ethereal delivers fully managed physical-to-digital campaigns using best-in-class tools and deep operations expertise.')}
    <section class="cards-grid service-grid">
      ${serviceCards.map(serviceCard).join('')}
    </section>
    <section class="section-grid compact">
      <div>
        <p class="eyebrow">What you get</p>
        <h2>Results now. Platform advantage later.</h2>
        <p>Each service creates client trust, reusable campaign evidence and a clean pathway into the automated platform when the batch engine is ready.</p>
      </div>
      <div class="timeline-list">
        ${processSteps.map(([title, copy], index) => html`
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div><h3>${title}</h3><p>${copy}</p></div>
          </article>
        `).join('')}
      </div>
    </section>
    ${ctaBand('Need a quote for a real campaign?', 'Share the asset type, volume, audience source, deadline and the business event you need to measure.', '/contact', 'Get a quote')}
  `;
}

function platformView() {
  return html`
    ${pageHero('Platform', 'The automated Entity Ethereal platform is being built around one differentiator: a batch campaign engine for tracked print, not a generic one-tag-at-a-time QR tool.')}
    <section class="platform-layout">
      ${heroVisual()}
      <div class="feature-list">
        ${platformModules.map(([title, copy]) => featureItem(title, copy)).join('')}
      </div>
    </section>
    <section class="schema-band">
      <h2>Campaign -> source data -> unique identifiers -> print-ready assets -> digital journeys -> event ledger -> next print run</h2>
      <p>This is the product model: physical media becomes a measurable system with a persistent identity layer and a feedback loop.</p>
    </section>
    <section class="cards-grid dense">
      ${roadmapItems.map(([title, copy]) => card(title, copy)).join('')}
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
    ${pageHero('Early Access', 'Partner now. Save forever. Service clients during the build phase receive the first platform advantage.')}
    <section class="form-layout">
      <div>
        <h2>Early adopter benefits</h2>
        <ul class="check-list">
          ${earlyBenefits.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <div class="contact-note">
          <strong>Best-fit pilots</strong>
          <span>Direct mail, catalogues, packaging, retail prompts, loyalty cards, agency campaigns and print-to-web tests with a measurable next action.</span>
        </div>
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
        <h2>Let us turn your print into a living data network.</h2>
        <p>Share the asset type, expected volume, audience source, destination experience, CRM or analytics stack, and the business event you want to connect back to the physical signal.</p>
        <div class="contact-note">
          <strong>Contact</strong>
          <span>hello@entityethereal.com<br>Cape Town, South Africa</span>
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

function serviceCard(service) {
  return html`
    <article class="info-card service-card">
      <span aria-hidden="true"></span>
      <div class="price">${service.price}</div>
      <h2>${service.title}</h2>
      <p>${service.copy}</p>
      <ul class="service-list">
        ${service.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
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
