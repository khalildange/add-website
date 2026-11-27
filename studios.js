// Member listings shared by the directory, The District, the homepage and profiles.
window.DD = {
  // The six ADD pillars (from the founding plan). Directory, Abuja page and homepage all use these.
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
    art: 'Painters, sculptors, mixed-media and textile artists; galleries, art spaces and curators; printmakers, fabricators and art foundries; and art advisors. The pillar connects artists with the architects and interior designers who commission and specify art for hotels, offices and homes. Collectors join as Friends of ADD.',
    media: 'Editorial, photography, film, branding and social media studios, and event producers'
  },
  // Membership tiers. Only patron and maker show a badge on cards.
  TIERS: { patron: 'Founding Patron', studio: 'Studio Member', maker: 'Maker' },
  CITIES: ['Abuja'],
  // ADD members. Pillars with no members show "coming soon".
  STUDIOS: [
    // Only add details the member has confirmed. Optional: tier, area, blurb, tags,
    // logo (image path), logoBg (the logo's background colour), logoWide (true for a wide wordmark).
    // ---- Architecture & Interiors ----
    { name: 'Phantom Grey Dynamic Ltd.', cat: 'architecture', discipline: 'Architecture & building consultancy', city: 'Abuja', art: 'p-concrete', logo: 'img/members/phantom-grey-dynamic-ltd-wide.jpg', logoBg: '#efeeea', logoWide: true, blurb: 'A building consultancy offering architecture, consultancy, training and retreats.', tags: ['Architecture', 'Consultancy', 'Training', 'Retreats'] },
    { name: 'Studio ATÓR', cat: 'architecture', discipline: 'Interior design', city: 'Abuja', art: 'p-breeze', logo: 'img/members/studio-ator.jpg', logoBg: '#a5a195', blurb: 'An interior design studio curating spaces with intention.', tags: ['Interior design'] },
    { name: 'By Ngogo', cat: 'architecture', discipline: 'Biophilic architecture & photography', city: 'Abuja', art: 'p-sun', logo: 'img/members/by-ngogo.jpg', logoBg: '#ece7e4', blurb: 'Biophilic architecture and light-and-shadow photography: a blend of architecture and photography.', tags: ['Biophilic architecture', 'Landscape design', 'Architectural photography', 'Interior photography'] },
    // ---- Fashion & Textiles ----
    { name: 'House of Arya', cat: 'fashion', city: 'Abuja', art: 'p-indigo-dye', logo: 'img/members/house-of-arya.jpg', logoBg: '#000', blurb: 'Ready-to-wear, bespoke tailoring and made-to-measure clothing.', tags: ['Ready to wear', 'Bespoke tailoring', 'Made to measure'] },
    { name: 'AW Clothiers', cat: 'fashion', discipline: 'Embroidery & tailoring', city: 'Abuja', area: 'Gwarinpa', art: 'p-asooke', logo: 'img/members/aw-clothiers.jpg', logoBg: '#f7f4e5', blurb: 'High-end embroidered ready-to-wear, made in Nigeria. Experts in embroidery, sequin beading and tailoring.', tags: ['Embroidery', 'Sequin beading', 'Tailoring', 'Ready to wear'] },
    // ---- Art & Galleries ----
    { name: 'Salim Arts', cat: 'art', city: 'Abuja', art: 'p-palm' },
  ]
};

// Profile details, keyed by slug (see DD.slug). Studios without an entry get a simpler profile.
// projects: [title, type, year, pattern]
DD.DETAILS = {
  // 'studio-slug': { founded: 2020, team: '5 people', about: ['…'], services: ['…'], email: '', instagram: '' },
  'house-of-arya': { instagram: 'houseof_arya' },
  'phantom-grey-dynamic-ltd': { founded: 2016, instagram: 'phantomgrey.ng',
    gallery: [
      ['img/members/phantom-grey/meethaq-hotel.jpg', 'Meethaq Hotel, design image', 'DfhNbLOPjon'],
      ['img/members/phantom-grey/ambiiflora-lounge.jpg', 'Ambiiflora, lounge', 'Dcs3bprjLFn'],
      ['img/members/phantom-grey/ambiiflora-bed1.jpg', 'Ambiiflora, bedroom', 'Dcs3bprjLFn'],
    ] },
  'aw-clothiers': { founded: 2016, instagram: 'aw.clothiers', galleryShape: 'portrait',
    address: 'No 16, Joseph Waku Street, off First Avenue, Gwarinpa, Abuja',
    gallery: [
      ['img/members/aw-clothiers/runway.jpg', 'On the runway', 'DgIwaIuCEIn'],
      ['img/members/aw-clothiers/embroidered-gown.jpg', 'Embroidered gown', 'DgIwd_MCGUy'],
      ['img/members/aw-clothiers/embroidered-kaftan.jpg', 'Embroidered kaftan', 'DgIu4YviMAI'],
      ['img/members/aw-clothiers/rose-applique.jpg', 'Rose appliqué', 'DgGDeyUol7I'],
      ['img/members/aw-clothiers/ankara-fringe.jpg', 'Ankara with fringe trim', 'DgGUo0nCFho'],
      ['img/members/aw-clothiers/embroidery-detail.jpg', 'Embroidery detail', 'Df7hBNCBPNd'],
    ] },
  'by-ngogo': { instagram: 'by_ngogo',
    gallery: [
      ['img/members/by-ngogo/emirs-palace-bida.jpg', "The Emir's Palace, Bida, Niger State", 'Dd1TN1GDvVl'],
      ['img/members/by-ngogo/garden-retreat.jpg', 'Garden retreat: rattan, wood and greenery', 'C-7sndWATcS'],
      ['img/members/by-ngogo/ambiiflora-lounge.jpg', 'Ambiiflora Residences, lounge', 'DctBd0djoS8'],
      ['img/members/by-ngogo/ibn-tulun-mosque.jpg', 'Ibn Tulun Mosque, Cairo', 'DdjMiu6DrNv'],
      ['img/members/by-ngogo/outdoor-lounge.jpg', 'Outdoor lounge', 'C-7sDyeAwav'],
      ['img/members/by-ngogo/ambiiflora-bedroom.jpg', 'Ambiiflora Residences, bedroom', 'DctB_ucjhYA'],
    ] },
  'studio-ator': { instagram: 'studio.ator',
    // gallery: [image, caption, Instagram post id]
    gallery: [
      ['img/members/studio-ator/dining-room.jpg', 'Dining room', 'DdRQWysCNHS'],
      ['img/members/studio-ator/living-room.jpg', 'Living room', 'DcloiXyCJ0Q'],
      ['img/members/studio-ator/staircase.jpg', 'Staircase and landing', 'DctApIQiFmK'],
      ['img/members/studio-ator/bedroom.jpg', 'Bedroom', 'DZkiY8mCO8F'],
      ['img/members/studio-ator/kitchen.jpg', 'Kitchen and dining', 'DWmoz-yCCIP'],
      ['img/members/studio-ator/vanity.jpg', 'Bathroom vanity', 'DZkgdJLiGaB'],
    ] },
};

DD.slug = name => name.replace(/[Ƙƙ]/g, m => m === 'Ƙ' ? 'K' : 'k').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
DD.STUDIOS.forEach(s => { s.slug = DD.slug(s.name); });
DD.find = slug => DD.STUDIOS.find(s => s.slug === slug);
DD.url = s => `studio.html?s=${s.slug}`;

DD.esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
DD.place = s => [s.area, s.city].filter(Boolean).join(', ');
// Picture for a member: their logo if we have one, otherwise a pattern placeholder.
DD.pic = (s, shape) => s.logo
  ? `<div class="art ${shape} logo-tile${s.logoWide ? ' logo-wide' : ''}" style="background:${DD.esc(s.logoBg || '#fff')}"><img src="${DD.esc(s.logo)}" alt="${DD.esc(s.name)} logo" loading="lazy"></div>`
  : `<div class="art ${shape} ${s.art} zoom" data-caption="${DD.esc(DD.place(s))}"></div>`;
DD.card = s => `
  <article class="studio">
    <a class="frame" href="${DD.url(s)}" tabindex="-1" aria-hidden="true">${DD.pic(s, 'square')}</a>
    <div class="studio-body">
      <div class="meta"><b>${DD.esc(s.discipline || DD.CATS[s.cat])}</b>${s.tier && s.tier !== 'studio' ? `<span class="badge ${s.tier}">${DD.TIERS[s.tier]}</span>` : ''}</div>
      <h3><a href="${DD.url(s)}">${DD.esc(s.name)}</a></h3>
      ${s.blurb ? `<p>${DD.esc(s.blurb)}</p>` : ''}
      ${(s.tags || []).length ? `<ul class="tags">${s.tags.map(t => `<li>${DD.esc(t)}</li>`).join('')}</ul>` : ''}
      <div class="studio-foot"><span>${DD.esc(DD.place(s))}</span><a href="${DD.url(s)}">View profile →</a></div>
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
