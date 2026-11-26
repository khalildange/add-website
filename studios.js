// Studio listings shared by directory.html and abuja.html.
// Sample data: replace with real studios (or load from a CMS / spreadsheet later).
window.DD = {
  // The six NDD pillars (from the founding plan). Directory, Abuja page and homepage all use these.
  CATS: {
    architecture: 'Architecture & Interiors',
    fashion: 'Fashion & Textiles',
    objects: 'Furniture & Objects',
    craft: 'Craft & Heritage',
    art: 'Art & Galleries',
    media: 'Media & Experience'
  },
  CAT_INFO: {
    architecture: 'Architecture firms, interior designers, landscape, lighting and finishing specialists',
    fashion: 'Fashion houses, modest fashion, accessories, scarves, textile designers and weavers',
    objects: 'Furniture makers, product designers, ceramicists, metalworkers and lighting makers',
    craft: 'Traditional artisans and craft guilds: dyers, brass and glass workers, leatherworkers and carvers',
    art: 'Artists, galleries, curators, printmakers, fabricators and art advisors',
    media: 'Editorial, photography, film, branding and social media studios, and event producers'
  },
  // Membership tiers. Only patron and maker show a badge on cards.
  TIERS: { patron: 'Founding Patron', studio: 'Studio Member', maker: 'Maker' },
  CITIES: ['Abuja', 'Kano', 'Kaduna'],
  // Founding members are announced in Q1 2027. Until then the list is empty and pages show "coming soon".
  STUDIOS: [
    // Add founding members here, e.g.
    // { name: 'Studio name', cat: 'architecture', discipline: 'Architecture', tier: 'studio', city: 'Abuja', area: 'Wuse II', art: 'p-laterite', blurb: 'One line about the studio.', tags: ['Residential'] },
  ]
};

// Profile details, keyed by slug (see DD.slug). Studios without an entry get a simpler profile.
// projects: [title, type, year, pattern]
DD.DETAILS = {
  // 'studio-slug': { founded: 2020, team: '5 people', about: ['…'], services: ['…'], email: '', instagram: '' },
};

DD.slug = name => name.replace(/[Ƙƙ]/g, m => m === 'Ƙ' ? 'K' : 'k').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
DD.STUDIOS.forEach(s => { s.slug = DD.slug(s.name); });
DD.find = slug => DD.STUDIOS.find(s => s.slug === slug);
DD.url = s => `studio.html?s=${s.slug}`;

DD.esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
DD.card = s => `
  <article class="studio">
    <a class="frame" href="${DD.url(s)}" tabindex="-1" aria-hidden="true"><div class="art square ${s.art} zoom" data-caption="${DD.esc(s.area)}, ${DD.esc(s.city)}"></div></a>
    <div class="studio-body">
      <div class="meta"><b>${DD.esc(s.discipline || DD.CATS[s.cat])}</b>${s.tier && s.tier !== 'studio' ? `<span class="badge ${s.tier}">${DD.TIERS[s.tier]}</span>` : ''}</div>
      <h3><a href="${DD.url(s)}">${DD.esc(s.name)}</a></h3>
      <p>${DD.esc(s.blurb)}</p>
      <ul class="tags">${s.tags.map(t => `<li>${DD.esc(t)}</li>`).join('')}</ul>
      <div class="studio-foot"><span>${DD.esc(s.area)}, ${DD.esc(s.city)}</span><a href="${DD.url(s)}">View profile →</a></div>
    </div>
  </article>`;

DD.rank = s => ({ patron: 2, studio: 1, maker: 1 })[s.tier] || 0;

/* ---------- Projects (built from each member's selected work) ----------
   No projects yet: add `projects: [[title, type, year, pattern, [collaboratorSlugs]], ...]`
   to a member in DD.DETAILS and they appear on the Projects page, the homepage and the profile. */
DD.SCOPE = {
  architecture: ['Concept design', 'Technical design', 'Site supervision'],
  fashion: ['Design', 'Sampling', 'Production'],
  objects: ['Design', 'Prototyping', 'Making'],
  craft: ['Materials', 'Hand production', 'Finishing'],
  art: ['Curation', 'Commission', 'Installation'],
  media: ['Creative direction', 'Production', 'Post-production']
};
DD.ARTS = ['p-laterite', 'p-concrete', 'p-breeze', 'p-adire', 'p-indigo-dye', 'p-asooke', 'p-palm', 'p-sun'];
DD.PROJECTS = [];
DD.STUDIOS.forEach(st => (DD.DETAILS[st.slug]?.projects || []).forEach(([title, type, year, art, withSlugs]) => {
  DD.PROJECTS.push({ id: `${st.slug}--${DD.slug(title)}`, title, type, year, art, studio: st, cat: st.cat, area: st.area, city: st.city,
    with: (withSlugs || []).map(DD.find).filter(Boolean) });
}));
DD.PROJECTS.sort((a, b) => b.year - a.year || DD.rank(b.studio) - DD.rank(a.studio));
DD.findProject = id => DD.PROJECTS.find(p => p.id === id);
DD.projectUrl = p => `project.html?p=${p.id}`;
DD.projectCard = p => `
  <a class="project-card" href="${DD.projectUrl(p)}">
    <div class="pc-media"><div class="art ${p.art}"></div><span class="pc-view">View project →</span></div>
    <div class="pc-info">
      <div class="pc-meta"><span>${DD.esc(DD.CATS[p.cat])}</span><span>${p.year}</span></div>
      <h3>${DD.esc(p.title)}</h3>
      <p>${DD.esc(p.studio.name)}${p.with.length ? ' with ' + p.with.map(w => DD.esc(w.name)).join(' &amp; ') : ''} · ${DD.esc(p.area)}</p>
    </div>
  </a>`;
