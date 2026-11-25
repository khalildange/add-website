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
  CITIES: ['Abuja', 'Lagos', 'Kano', 'Kaduna'],
  // SAMPLE LISTINGS: placeholders until founding members are confirmed (Q1 2027).
  STUDIOS: [
    // ---- Architecture & Interiors ----
    { name: 'Ọ̀rẹ́ Studio', cat: 'architecture', discipline: 'Architecture', tier: 'patron', city: 'Abuja', area: 'Wuse II', art: 'p-laterite', blurb: 'Passive-cooled homes in compressed laterite, built around courtyards.', tags: ['Residential', 'Passive design'] },
    { name: 'Atlas Civic Architects', cat: 'architecture', discipline: 'Architecture', tier: 'patron', city: 'Abuja', area: 'Maitama', art: 'p-concrete', blurb: 'Schools, libraries and civic buildings for growing communities.', tags: ['Civic', 'Education'] },
    { name: 'Gwarinpa Build Co.', cat: 'architecture', discipline: 'Architecture', city: 'Abuja', area: 'Gwarinpa', art: 'p-breeze', blurb: 'Affordable family homes using breeze block and local stone.', tags: ['Housing', 'Breeze block'] },
    { name: 'Jabi Lake Interiors', cat: 'architecture', discipline: 'Interior design', city: 'Abuja', area: 'Jabi', art: 'p-sun', blurb: 'Calm, light-filled interiors for homes, offices and embassies.', tags: ['Residential', 'Workplace'] },
    { name: 'Central Area Studio', cat: 'architecture', discipline: 'Interior design', city: 'Abuja', area: 'Central Area', art: 'p-indigo-dye', blurb: 'Fit-outs for restaurants, galleries and cultural spaces.', tags: ['Hospitality', 'Culture'] },
    { name: 'Northern Light Interiors', cat: 'architecture', discipline: 'Interior design', city: 'Abuja', area: 'Maitama', art: 'p-adire', blurb: 'Interiors that draw on northern pattern, plaster and colour.', tags: ['Residential', 'Pattern'] },
    { name: 'Savanna Garden Design', cat: 'architecture', discipline: 'Landscape', tier: 'patron', city: 'Abuja', area: 'Katampe', art: 'p-palm', blurb: 'Drought-tolerant gardens and courtyards for the middle belt.', tags: ['Courtyards', 'Dry gardens'] },
    { name: 'Kubwa Landscapes', cat: 'architecture', discipline: 'Landscape', city: 'Abuja', area: 'Kubwa', art: 'p-palm', blurb: 'Estate landscaping, rain gardens and tree planting.', tags: ['Estates', 'Trees'] },
    { name: 'Lumen Abuja', cat: 'architecture', discipline: 'Lighting design', city: 'Abuja', area: 'Garki', art: 'p-breeze', blurb: 'Architectural lighting design for public and private buildings.', tags: ['Lighting design', 'Civic'] },
    // ---- Fashion & Textiles ----
    { name: 'Zaria Road Atelier', cat: 'fashion', discipline: 'Modest fashion', city: 'Abuja', area: 'Wuse II', art: 'p-indigo-dye', blurb: 'Modest womenswear in Nigerian cloth, cut and finished in Abuja.', tags: ['Womenswear', 'Made to order'] },
    { name: 'Indigo & Thread', cat: 'fashion', discipline: 'Scarves & accessories', city: 'Abuja', area: 'Maitama', art: 'p-adire', blurb: 'Silk and cotton scarves printed with patterns drawn from adire.', tags: ['Scarves', 'Accessories'] },
    { name: 'Gbagyi Weave', cat: 'fashion', discipline: 'Weaving', city: 'Abuja', area: 'Wuse II', art: 'p-asooke', blurb: 'Handwoven cloth and rugs for interiors, made with weavers across the FCT.', tags: ['Rugs', 'Handwoven'] },
    { name: 'Wuse Textile Lab', cat: 'fashion', discipline: 'Textile design', city: 'Abuja', area: 'Wuse', art: 'p-adire', blurb: 'Adire and tie-dye for upholstery, curtains and wall panels.', tags: ['Adire', 'Upholstery'] },
    // ---- Furniture & Objects ----
    { name: 'Aso Rock Workshop', cat: 'objects', discipline: 'Furniture', city: 'Abuja', area: 'Asokoro', art: 'p-asooke', blurb: 'Hardwood dining tables and seating, made to order in a small workshop.', tags: ['Bespoke', 'Hardwood'] },
    { name: 'Utako Joinery', cat: 'objects', discipline: 'Furniture & joinery', city: 'Abuja', area: 'Utako', art: 'p-concrete', blurb: 'Kitchens, wardrobes and built-in joinery in Nigerian hardwoods.', tags: ['Joinery', 'Kitchens'] },
    { name: 'Life Camp Clay', cat: 'objects', discipline: 'Ceramics', tier: 'maker', city: 'Abuja', area: 'Life Camp', art: 'p-laterite', blurb: 'Wheel-thrown tableware and tiles fired in a wood kiln.', tags: ['Tableware', 'Tiles'] },
    { name: 'Asokoro Light Works', cat: 'objects', discipline: 'Lighting', city: 'Abuja', area: 'Asokoro', art: 'p-sun', blurb: 'Pendants and lamps in woven raffia, brass and calabash.', tags: ['Pendants', 'Raffia'] },
    // ---- Craft & Heritage ----
    { name: 'Ushafa Potters', cat: 'craft', discipline: 'Pottery', tier: 'maker', city: 'Abuja', area: 'Bwari', art: 'p-sun', blurb: 'A cooperative of Gbagyi potters making vessels in the Ushafa tradition.', tags: ['Gbagyi', 'Vessels'] },
    { name: 'Bida Brass Collective', cat: 'craft', discipline: 'Brass & glass', tier: 'maker', city: 'Abuja', area: 'Garki', art: 'p-sun', blurb: 'Bida-trained brass and glass workers making trays, lamps and hardware.', tags: ['Brass', 'Glass beads'] },
    { name: 'Dye Pit Studio', cat: 'craft', discipline: 'Indigo dyeing', tier: 'maker', city: 'Abuja', area: 'Wuse', art: 'p-indigo-dye', blurb: 'Natural indigo dyeing in the Kano tradition, for cloth, yarn and interiors.', tags: ['Indigo', 'Natural dye'] },
    { name: 'Fata Leatherworks', cat: 'craft', discipline: 'Leatherwork', city: 'Abuja', area: 'Utako', art: 'p-laterite', blurb: 'Hand-tooled northern leatherwork: poufs, bags, wall pieces and upholstery.', tags: ['Leather', 'Upholstery'] },
    // ---- Art & Galleries ----
    { name: 'Red Earth Gallery', cat: 'art', discipline: 'Gallery', city: 'Abuja', area: 'Asokoro', art: 'p-laterite', blurb: 'Contemporary Nigerian painting and sculpture, with an art advisory for hotels and offices.', tags: ['Exhibitions', 'Art advisory'] },
    { name: 'Jabi Print Studio', cat: 'art', discipline: 'Printmaking', city: 'Abuja', area: 'Jabi', art: 'p-breeze', blurb: 'Screenprint and etching studio producing limited editions with Nigerian artists.', tags: ['Editions', 'Screenprint'] },
    // ---- Media & Experience ----
    { name: 'Harmattan Studio', cat: 'media', discipline: 'Photography & film', city: 'Abuja', area: 'Wuse II', art: 'p-concrete', blurb: 'Architecture, interiors and fashion photography and short film.', tags: ['Photography', 'Film'] },
    { name: 'Plot 9 Events', cat: 'media', discipline: 'Event production', city: 'Abuja', area: 'Central Area', art: 'p-indigo-dye', blurb: 'Production for launches, exhibitions and fashion presentations.', tags: ['Exhibitions', 'Fashion shows'] }
  ]
};

// Profile details, keyed by slug (see DD.slug). Studios without an entry get a simpler profile.
// projects: [title, type, year, pattern]
DD.DETAILS = {
  'zaria-road-atelier': { founded: 2020, team: '6 designers & tailors', about: ['Modest womenswear in Nigerian cloth, designed and finished in Abuja.'], services: ['Ready-to-wear', 'Made to order', 'Bridal'],
    projects: [['Harmattan collection', 'Womenswear collection', 2026, 'p-indigo-dye'], ['Aso Oke evening capsule', 'Capsule collection', 2025, 'p-asooke', ['gbagyi-weave']]] },
  'dye-pit-studio': { founded: 2021, team: '4 dyers', about: ['Natural indigo dyeing in the Kano tradition, for cloth, yarn and interiors.'], services: ['Indigo dyeing', 'Interior textiles', 'Workshops'],
    projects: [['Indigo screen wall', 'Interior commission', 2026, 'p-indigo-dye', ['central-area-studio']], ['Dyed yarn for rugs', 'Material supply', 2025, 'p-adire', ['gbagyi-weave']]] },
  'bida-brass-collective': { founded: 2019, team: '7 brass and glass workers', about: ['Bida-trained brass and glass workers making trays, lamps and hardware.'], services: ['Brass hardware', 'Lighting', 'Glass beads'],
    projects: [['Brass door pulls', 'Hardware for a residence', 2025, 'p-sun', ['ore-studio']], ['Glass bead chandelier', 'Lighting commission', 2026, 'p-sun', ['asokoro-light-works']]] },
  'red-earth-gallery': { founded: 2017, team: '5 curators', about: ['Contemporary Nigerian painting and sculpture, with an art advisory for hotels and offices.'], services: ['Exhibitions', 'Art advisory', 'Commissions'],
    projects: [['Art for a 12-room hotel', 'Art advisory', 2024, 'p-laterite', ['northern-light-interiors']], ['Red Earth: new painting', 'Exhibition', 2026, 'p-laterite']] },
  'harmattan-studio': { founded: 2018, team: '5 photographers & filmmakers', about: ['Architecture, interiors and fashion photography and short film.'], services: ['Architectural photography', 'Fashion film', 'Campaigns'],
    projects: [['Courtyard houses of Abuja', 'Photo essay', 2026, 'p-concrete', ['ore-studio']], ['Harmattan collection film', 'Fashion film', 2026, 'p-indigo-dye', ['zaria-road-atelier']]] },
  'ore-studio': { founded: 2019, team: '9 architects & makers', email: 'studio@example.com', instagram: 'orestudio',
    about: ['Ọ̀rẹ́ Studio designs homes and small public buildings that stay cool without air conditioning. Every project starts with a sun study, then shade, then walls.', 'The studio presses its own compressed laterite blocks on site and trains local crews to build with them.'],
    services: ['Residential architecture', 'Passive cooling design', 'Compressed earth construction', 'Feasibility studies'],
    projects: [['Ẹ̀fúùfù House', 'Courtyard house', 2025, 'p-laterite', ['savanna-garden-design', 'bida-brass-collective']], ['Bwari Primary School', 'Education', 2026, 'p-breeze'], ['Kubwa Terraces', 'Affordable housing', 2027, 'p-concrete']], article: 'article.html' },
  'atlas-civic-architects': { founded: 2012, team: '22 architects & planners', about: ['Atlas designs schools, libraries and community buildings across the FCT and the North Central states.', 'Their work favours robust materials, deep verandas and buildings that can be maintained locally.'],
    services: ['Civic & education buildings', 'Masterplanning', 'Public consultation'], projects: [['Garki Community Library', 'Library', 2023, 'p-concrete'], ['Lugbe Secondary School', 'Education', 2024, 'p-breeze'], ['Kuje Health Centre', 'Healthcare', 2025, 'p-laterite']] },
  'aso-rock-workshop': { founded: 2016, team: '7 makers', about: ['A small hardwood workshop making dining tables, benches and chairs to order, each signed and dated.'], services: ['Bespoke furniture', 'Dining tables', 'Restoration'], projects: [['Asokoro dining table', 'Iroko, 12 seats', 2025, 'p-asooke'], ['Embassy reception benches', 'Commission', 2024, 'p-concrete'], ['Low lounge chair', 'Product', 2026, 'p-sun']] },
  'savanna-garden-design': { founded: 2015, team: '11 designers & gardeners', about: ['Savanna designs gardens that thrive through the long dry season, using native grasses, shade trees and rainwater storage.', 'They also maintain the gardens they plant.'],
    services: ['Garden design', 'Courtyards & roof gardens', 'Rainwater harvesting', 'Maintenance'], projects: [['Katampe Hill garden', 'Private garden', 2024, 'p-palm'], ['Ẹ̀fúùfù House courtyard', 'Courtyard garden', 2025, 'p-palm', ['ore-studio']], ['Wuse office roof garden', 'Workplace', 2026, 'p-breeze']] },
  'lumen-abuja': { founded: 2018, team: '6 lighting designers', about: ['Lumen plans light for buildings: how a room feels at night, how a façade reads from the street, and how much power it uses.'], services: ['Architectural lighting', 'Façade lighting', 'Solar & low-energy schemes'], projects: [['Central Area gallery', 'Exhibition lighting', 2025, 'p-breeze'], ['Garki office façade', 'Façade', 2024, 'p-concrete'], ['Jabi Lake boardwalk', 'Public space', 2026, 'p-indigo-dye']] },
  'jabi-lake-interiors': { founded: 2017, team: '8 designers', about: ['Calm, light-filled interiors for homes, offices and embassies, with furniture sourced from Nigerian makers wherever possible.'], services: ['Residential interiors', 'Workplace design', 'Furniture sourcing'], projects: [['Jabi lakeside apartment', 'Residential', 2025, 'p-sun'], ['Consulate reception', 'Diplomatic', 2024, 'p-concrete'], ['Co-working floor, Utako', 'Workplace', 2026, 'p-breeze']] },
  'gwarinpa-build-co': { founded: 2014, team: '15 architects & builders', about: ['Design-and-build for families: durable, affordable homes using breeze block, local stone and simple roofs.'], services: ['Design & build', 'Family housing', 'Extensions'], projects: [['Gwarinpa family house', 'Residential', 2024, 'p-breeze'], ['Six-unit terrace', 'Housing', 2025, 'p-concrete'], ['Stone garden wall', 'Landscape', 2023, 'p-laterite']] },
  'utako-joinery': { founded: 2013, team: '12 joiners', about: ['Kitchens, wardrobes and built-in joinery made in Nigerian hardwoods in their Utako workshop.'], services: ['Kitchens', 'Wardrobes & storage', 'Shopfitting'], projects: [['Maitama kitchen', 'Mahogany kitchen', 2025, 'p-concrete'], ['Library shelving', 'Built-in', 2024, 'p-asooke'], ['Café counter, Wuse II', 'Shopfit', 2026, 'p-sun']] },
  'central-area-studio': { founded: 2020, team: '5 designers', about: ['Fit-outs for restaurants, galleries and cultural spaces, often on tight timelines and budgets.'], services: ['Restaurant design', 'Gallery fit-out', 'Branding & signage'], projects: [['Indigo dining room', 'Restaurant', 2025, 'p-indigo-dye'], ['Pop-up gallery', 'Exhibition', 2024, 'p-breeze'], ['Book café', 'Hospitality', 2026, 'p-sun']] },
  'life-camp-clay': { founded: 2021, team: '3 potters', about: ['Wheel-thrown tableware and handmade tiles, fired in a wood kiln behind the studio. Visitors welcome by appointment.'], services: ['Tableware', 'Handmade tiles', 'Pottery classes'], projects: [['Restaurant tableware', 'Commission', 2025, 'p-laterite'], ['Bathroom tiles', 'Residential', 2024, 'p-breeze'], ['Kiln open day', 'Event', 2026, 'p-sun']] },
  'ushafa-potters': { founded: 1990, team: 'Cooperative of 20+ potters', about: ['A cooperative of Gbagyi potters making vessels in the Ushafa tradition, near Bwari.', 'They sell directly and take commissions for interiors and hotels.'], services: ['Hand-built vessels', 'Interior commissions', 'Workshops & visits'], projects: [['Large water jars', 'Vessels', 2025, 'p-sun'], ['Hotel lobby planters', 'Commission', 2024, 'p-laterite'], ['Pottery day trip', 'Workshop', 2026, 'p-breeze']] },
  'gbagyi-weave': { founded: 2018, team: '4 designers, 30 weavers', about: ['Handwoven cloth and rugs for interiors, made with weavers across the FCT and paid fairly per piece.'], services: ['Rugs', 'Upholstery cloth', 'Wall hangings'], projects: [['Living room rug', 'Residential', 2025, 'p-asooke'], ['Hotel corridor runners', 'Hospitality', 2024, 'p-asooke'], ['Woven wall panel', 'Office', 2026, 'p-adire']] },
  'kubwa-landscapes': { founded: 2016, team: '18 landscapers', about: ['Estate landscaping, rain gardens and tree planting across the northern suburbs.'], services: ['Estate landscaping', 'Tree planting', 'Rain gardens'], projects: [['Kubwa estate avenue', 'Tree planting', 2024, 'p-palm'], ['School rain garden', 'Education', 2025, 'p-palm'], ['Community park', 'Public space', 2026, 'p-breeze']] },
  'asokoro-light-works': { founded: 2019, team: '5 makers', about: ['Pendants and lamps in woven raffia, brass and calabash, made by hand in Asokoro.'], services: ['Pendant lights', 'Table lamps', 'Custom fittings'], projects: [['Calabash pendant', 'Product', 2025, 'p-sun'], ['Restaurant lighting', 'Commission', 2024, 'p-indigo-dye'], ['Raffia floor lamp', 'Product', 2026, 'p-asooke']] },
  'wuse-textile-lab': { founded: 2022, team: '4 designers', about: ['Adire and tie-dye for upholstery, curtains and wall panels, dyed in small batches.'], services: ['Upholstery fabric', 'Curtains', 'Wall panels'], projects: [['Adire headboard', 'Residential', 2025, 'p-adire'], ['Acoustic wall panels', 'Office', 2024, 'p-indigo-dye'], ['Café curtains', 'Hospitality', 2026, 'p-adire']] },
  'northern-light-interiors': { founded: 2015, team: '9 designers', about: ['Interiors that draw on northern Nigerian pattern, lime plaster and colour, for homes and boutique hotels.'], services: ['Residential interiors', 'Boutique hotels', 'Decorative plaster'], projects: [['Maitama residence', 'Residential', 2025, 'p-adire'], ['Boutique hotel, 12 rooms', 'Hospitality', 2024, 'p-sun'], ['Plaster reception wall', 'Commission', 2026, 'p-laterite']] }
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
   SAMPLE PROJECTS: placeholders until members supply real projects and photos. */
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
