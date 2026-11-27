/* ==========================================================================
   SITE SETTINGS — edit these before launch
   ========================================================================== */
window.SITE = {
  // Where messages go if no form service is set up (opens the visitor's email app).
  email: 'hello@example.com',

  // Form service endpoint, e.g. Formspree: 'https://formspree.io/f/abcdwxyz'
  // When set, every form on the site (enquiries, contact, listing applications,
  // RSVPs, newsletter) is sent straight to it, with no email app needed.
  formEndpoint: '',

  // Your WhatsApp number in international format, digits only (e.g. '2348012345678').
  // PLACEHOLDER: replace before launch.
  whatsapp: '2340000000000',

  // Link to your WhatsApp Channel (from WhatsApp > Updates > Channels > Share). Leave '' to hide.
  whatsappChannel: '',

  // Social accounts. Leave '' and the footer shows "soon" instead of a dead link.
  social: { instagram: '', linkedin: '', x: '', tiktok: '' }
};

/* ---------- Events (events page, homepage and ADD page) ----------
   From the founding plan's road to Q1 2027. Exact dates and venues to be confirmed. */
/* ---------- One sector per quarter ----------
   3 or 4 times a year (once a quarter) one sector (pillar) is in focus.
   Keep 4 rows for four a year, or delete one for three. Fill in `sector` with a pillar key
   (architecture, fashion, objects, craft, art, media) once the order is decided.
   Leave it '' to show "Sector to be announced". */
window.SECTOR_QUARTERS = [
  { q: 'Q1', year: 2027, sector: '' },
  { q: 'Q2', year: 2027, sector: '' },
  { q: 'Q3', year: 2027, sector: '' },
  { q: 'Q4', year: 2027, sector: '' },
];
window.SECTOR_NAMES = { architecture: 'Architecture & Interiors', fashion: 'Fashion & Textiles', objects: 'Furniture & Objects', craft: 'Craft & Heritage', art: 'Art & Galleries', media: 'Media & Experience' };

// An event with `tba: true` shows its month and "To be announced", with no RSVP.
window.EVENTS = [
  { id: 'jan-2027', big: 'Jan', small: '2027', title: 'To be announced', tba: true },
  { id: 'feb-2027', big: 'Feb', small: '2027', title: 'To be announced', tba: true },
  { id: 'mar-2027', big: 'Mar', small: '2027', title: 'To be announced', tba: true },
  { id: 'late-2027', big: 'Late', small: '2027', title: 'To be announced', tba: true }
];

/* ==========================================================================
   Behaviour
   ========================================================================== */
(function () {
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: compact on scroll ---------- */
  const header = document.querySelector('header.site');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Navigation: dropdowns + mobile panel ---------- */
  const toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  const triggers = $$('.nav-trigger');
  const closeMenus = except => triggers.forEach(t => { if (t !== except) t.setAttribute('aria-expanded', 'false'); });
  triggers.forEach(t => {
    t.addEventListener('click', e => {
      e.stopPropagation();
      const open = t.getAttribute('aria-expanded') !== 'true';
      closeMenus(t);
      t.setAttribute('aria-expanded', open);
    });
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav-group')) closeMenus(); });

  const setPanel = open => {
    if (!nav || !toggle) return;
    if (open && header) document.documentElement.style.setProperty('--header-h', Math.round(header.getBoundingClientRect().bottom) + 'px');
    nav.classList.toggle('open', open);
    document.documentElement.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
    if (open) setTimeout(() => nav.querySelector('a, button')?.focus(), 0);
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => setPanel(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) setPanel(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1024 && nav.classList.contains('open')) setPanel(false); });
  }
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const openTrigger = triggers.find(t => t.getAttribute('aria-expanded') === 'true');
    if (openTrigger) { closeMenus(); openTrigger.focus(); }
    else if (nav?.classList.contains('open')) { setPanel(false); toggle.focus(); }
  });

  /* ---------- WhatsApp links: <a data-wa data-wa-text="..." data-wa-number="(optional)"> ---------- */
  window.waLink = (number, text) => `https://wa.me/${String(number).replace(/\D/g, '')}${text ? '?text=' + encodeURIComponent(text) : ''}`;
  window.applyWhatsApp = (root = document) => $$('[data-wa]', root).forEach(a => {
    const num = a.dataset.waNumber || SITE.whatsapp;
    if (!num) { a.hidden = true; return; }
    a.href = waLink(num, a.dataset.waText || '');
    a.target = '_blank'; a.rel = 'noopener';
  });
  applyWhatsApp();

  $$('[data-wa-channel]').forEach(a => { if (SITE.whatsappChannel) { a.href = SITE.whatsappChannel; a.target = '_blank'; a.rel = 'noopener'; } else a.hidden = true; });

  $$('[data-social]').forEach(a => {
    const url = SITE.social[a.dataset.social];
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.removeAttribute('href'); a.classList.add('soon-link'); a.title = 'Coming soon'; }
  });

  /* ---------- Form validation: clear, inline, friendly ---------- */
  const labelText = el => {
    const l = el.closest('label') || document.querySelector(`label[for="${el.id}"]`);
    const t = l ? [...l.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').trim() : '';
    return (t || el.placeholder || el.name || 'this field').replace(/\s+/g, ' ').trim();
  };
  const messageFor = el => {
    const v = el.validity;
    if (el.dataset.error && !v.valueMissing) return el.dataset.error;
    if (v.valueMissing) {
      if (el.type === 'checkbox') return 'Please tick this box to continue.';
      if (el.type === 'email') return 'Please enter your email address.';
      return `${el.tagName === 'SELECT' ? 'Please choose' : 'Please fill in'} “${labelText(el)}”.`;
    }
    if (v.typeMismatch && el.type === 'email') return 'Please enter a valid email address, like name@example.com.';
    if (v.typeMismatch && el.type === 'url') return 'Please enter a full web address, starting with https://';
    if (v.patternMismatch) return el.title || 'Please check the format.';
    return el.validationMessage;
  };
  const isLive = el => el.willValidate && !el.closest('[hidden]') && el.type !== 'hidden' && el.name !== '_gotcha';
  const showError = (el, msg) => {
    const host = el.closest('label') || el.parentElement;
    let err = host.querySelector(':scope > .field-error');
    if (!msg) { el.removeAttribute('aria-invalid'); err?.remove(); return true; }
    if (!err) {
      err = document.createElement('span'); err.className = 'field-error';
      err.id = (el.id || el.name) + '-err-' + Math.random().toString(36).slice(2, 6);
      host.appendChild(err);
    }
    err.textContent = msg;
    el.setAttribute('aria-invalid', 'true');
    el.setAttribute('aria-describedby', err.id);
    return false;
  };
  const check = el => showError(el, el.checkValidity() ? '' : messageFor(el));
  const validate = scope => {
    const fields = $$('input, select, textarea', scope).filter(isLive);
    const bad = fields.filter(el => !check(el));
    if (bad.length) bad[0].focus({ preventScroll: false });
    return !bad.length;
  };

  /* ---------- Multi-step forms: <fieldset class="form-step" data-title="..."> ---------- */
  const setupSteps = form => {
    const steps = $$('.form-step', form);
    if (steps.length < 2) return null;
    const bar = document.createElement('ol'); bar.className = 'step-bar'; bar.setAttribute('aria-label', 'Form progress');
    bar.innerHTML = steps.map((s, i) => `<li><span>${i + 1}</span>${s.dataset.title}</li>`).join('');
    form.prepend(bar);
    const nav = document.createElement('div'); nav.className = 'step-nav full';
    nav.innerHTML = '<button type="button" class="btn" data-back>← Back</button><button type="button" class="btn solid" data-next>Continue →</button>';
    const foot = form.querySelector('.form-foot'); foot.before(nav);
    let i = 0;
    const visible = s => !s.dataset.skip;
    const go = n => {
      i = n;
      steps.forEach((s, k) => s.hidden = k !== i);
      $$('li', bar).forEach((li, k) => { li.classList.toggle('done', k < i); li.classList.toggle('now', k === i); li.toggleAttribute('hidden', !visible(steps[k])); });
      const last = steps.slice(i + 1).every(s => !visible(s));
      nav.querySelector('[data-back]').hidden = i === 0;
      nav.querySelector('[data-next]').hidden = last;
      foot.hidden = !last;
    };
    const move = dir => { let n = i + dir; while (steps[n] && !visible(steps[n])) n += dir; if (steps[n]) { go(n); form.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' }); steps[n].querySelector('input, select, textarea')?.focus({ preventScroll: true }); } };
    nav.querySelector('[data-next]').addEventListener('click', () => { if (validate(steps[i])) move(1); });
    nav.querySelector('[data-back]').addEventListener('click', () => move(-1));
    form.addEventListener('stepschange', () => go(i));
    go(0);
    return { reset: () => go(0) };
  };

  /* ---------- Forms: <form data-form data-subject="..." [data-to="..."]> with a [data-status] element ---------- */
  window.wireForms = (root = document) => $$('form[data-form]', root).forEach(form => {
    if (form.dataset.wired) return;
    form.dataset.wired = '1';
    form.noValidate = true;
    const steps = setupSteps(form);
    const status = form.querySelector('[data-status]');
    const say = (msg, ok) => { if (status) { status.textContent = msg; status.className = 'form-status ' + (ok ? 'ok' : 'err'); } };

    // Validate a field when the visitor leaves it, then live as they fix it.
    form.addEventListener('focusout', e => { const el = e.target; if (isLive(el) && (el.value || el.dataset.touched)) { el.dataset.touched = 1; check(el); } });
    form.addEventListener('input', e => { const el = e.target; if (el.getAttribute('aria-invalid')) check(el); });
    form.addEventListener('change', e => { const el = e.target; if (el.getAttribute('aria-invalid')) check(el); });

    form.addEventListener('submit', async ev => {
      ev.preventDefault();
      if (form.querySelector('[name=_gotcha]')?.value) return; // spam trap
      if (!validate(form)) { say('Please check the highlighted fields.', false); return; }
      const data = new FormData(form);
      data.delete('_gotcha');
      $$('[hidden] [name]', form).forEach(el => { if (!el.closest('.form-step:not([data-skip])')) data.delete(el.name); });
      const subject = form.dataset.subject || 'Website message';
      const btn = form.querySelector('[type=submit]');

      if (SITE.formEndpoint) {
        data.append('_subject', subject);
        if (form.dataset.to) data.append('studio_email', form.dataset.to);
        btn.disabled = true; btn.classList.add('is-loading'); say('Sending…', true);
        try {
          const r = await fetch(SITE.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!r.ok) throw new Error(r.status);
          form.reset(); steps?.reset();
          form.classList.add('is-sent');
          say(form.dataset.success || 'Thank you. Your message has been sent.', true);
          status?.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
        } catch (e) {
          say(`Sorry, that didn't send. Please try again, or email ${SITE.email}.`, false);
        } finally { btn.disabled = false; btn.classList.remove('is-loading'); }
      } else {
        // No form service yet: open the visitor's email app with the message filled in.
        const body = [...data.entries()].filter(([, v]) => typeof v === 'string' && v.trim())
          .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${v}`).join('\n');
        location.href = `mailto:${form.dataset.to || SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + '\n\n(Sent via ADD, Abuja Design District)')}`;
        say('Your email app should open with your message ready to send.', true);
      }
    });
  });
  wireForms();

  /* ---------- Compact event lists: <div class="events" data-events="3"> ---------- */
  $$('[data-events]').forEach(el => {
    el.innerHTML = EVENTS.slice(0, +el.dataset.events || EVENTS.length).map(e => `
      <div class="event"><time>${e.big}<small>${e.small}</small></time>
        <div><h3>${e.title}</h3></div>
        ${e.tba ? '<span class="ec-tba">Details soon</span>' : `<a class="btn" href="events.html#${e.id}">${e.id === 'ndd-week' ? 'Register interest' : 'RSVP'}</a>`}</div>`).join('');
  });

  /* ---------- Event cards: <div class="event-cards" data-event-cards="4"> ---------- */
  $$('[data-event-cards]').forEach(el => {
    el.innerHTML = EVENTS.slice(0, +el.dataset.eventCards || EVENTS.length).map(e => e.tba ? `
      <div class="event-card tba">
        <span class="ec-date"><b>${e.big}</b><small>${e.small}</small></span>
        <h3>${e.title}</h3>
        <span class="ec-tba">Details soon</span>
      </div>` : `
      <a class="event-card" href="events.html#${e.id}">
        <span class="ec-date"><b>${e.big}</b><small>${e.small}</small></span>
        <h3>${e.title}</h3>
        <span class="ec-go">${e.id === 'ndd-week' ? 'Register interest' : 'RSVP'} <i aria-hidden="true">↗</i></span>
      </a>`).join('');
  });

  /* ---------- One sector per quarter: <div data-sector-quarters> ---------- */
  $$('[data-sector-quarters]').forEach(el => {
    const used = new Set(SECTOR_QUARTERS.map(x => x.sector).filter(Boolean));
    el.innerHTML = SECTOR_QUARTERS.map((x, i) => `
      <div class="sq${x.sector ? '' : ' tba'}${i === 0 ? ' first' : ''}">
        <span class="sq-when"><b>${x.q}</b> ${x.year}</span>
        <span class="sq-sector">${x.sector ? SECTOR_NAMES[x.sector] : 'Sector to be announced'}</span>
      </div>`).join('') + `
      <p class="sq-rotation"><span>In the rotation</span>${Object.entries(SECTOR_NAMES).map(([k, v]) => `<a class="${used.has(k) ? 'on' : ''}" href="directory.html?cat=${k}">${v}</a>`).join('')}</p>`;
  });

  /* ---------- Gentle reveal on scroll (skipped for reduced motion) ---------- */
  window.reveal = (root = document) => {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    const io = window.__revealIO || (window.__revealIO = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' }));
    $$('.card, .pillar, .studio, .programme, .tier, .event, .event-card, .start-tile, .offer-list li, .project-card, .stages li, .steps li', root).forEach((el, k) => {
      if (el.dataset.rv || el.getBoundingClientRect().top < window.innerHeight) return; // never hide what's already on screen
      el.dataset.rv = 1; el.classList.add('rv'); el.style.transitionDelay = `${(k % 3) * 60}ms`;
      io.observe(el);
    });
  };
  window.addEventListener('load', () => reveal());
})();
