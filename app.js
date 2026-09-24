// =========================================================================
// BONSAI TRAINING PORTAL — APP LOGIC
// Vanilla JS, hash-based routing, no build step. Deploy the whole folder.
// =========================================================================

let LANG = localStorage.getItem('bonsai_lang') || 'en';

function t(en, es){ return LANG === 'es' ? es : en; }
function esc(s){ return (s || '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function setLang(lang){
  LANG = lang;
  localStorage.setItem('bonsai_lang', lang);
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnES').classList.toggle('active', lang === 'es');
  document.documentElement.lang = lang;
  document.querySelectorAll('.i18n').forEach(el => {
    el.textContent = lang === 'es' ? el.dataset.es : el.dataset.en;
  });
  render();
}

function goHome(){ location.hash = ''; }

function photoBlock(path, altEn, altEs){
  if(!path) return '';
  return `<div class="item-photo">
    <img src="photos/${path}" alt="${esc(t(altEn,altEs))}"
      onerror="this.style.display='none'; this.parentElement.querySelector('.placeholder').style.display='flex';">
    <div class="placeholder" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;gap:6px;">
      <span style="font-size:22px;">📷</span>
      <span>${esc(t('Photo pending','Foto pendiente'))}</span>
    </div>
  </div>`;
}

function pill(cls, label){ return `<span class="pill ${cls}">${esc(label)}</span>`; }

function allergenPills(codes){
  if(!codes || !codes.length) return '';
  return `<div class="tagrow">` + codes.map(c => {
    const lbl = BONSAI.allergenLabels[c] ? t(BONSAI.allergenLabels[c].en, BONSAI.allergenLabels[c].es) : c;
    return pill('warn', lbl);
  }).join('') + `</div>`;
}

function toggleItem(id){
  const el = document.getElementById(id);
  if(el) el.classList.toggle('open');
}

// ---------------------------------------------------------------------
// PAGE RENDERERS
// ---------------------------------------------------------------------

function renderHome(){
  document.getElementById('backBtn').classList.remove('show');
  const cards = BONSAI.categories.map(c => `
    <div class="card" onclick="location.hash='${c.id}'">
      <div class="icon">${c.icon}</div>
      <h3>${esc(t(c.en_t, c.es_t))}</h3>
      <p>${esc(t(c.en_d, c.es_d))}</p>
      <div class="tag">${esc(c.tag)}</div>
    </div>`).join('');

  return `
    <div class="eyebrow">${esc(t('Training Portal','Portal de Capacitación'))}</div>
    <h1 class="pagetitle">${esc(t('Bonsai Smokehouse','Bonsai Smokehouse'))}</h1>
    <div class="subtitle">${esc(t('Fish smokehouse & café · Tulum, Mexico','Ahumadero de pescados y cafetería · Tulum, México'))}</div>
    <div class="intro">${esc(t(
      'Everything the team needs to know to run the counter, the case, and the conversation with a guest — one source of truth, in English and Spanish.',
      'Todo lo que el equipo necesita saber para operar el mostrador, la vitrina y la conversación con el cliente — una sola fuente de verdad, en inglés y español.'
    ))}</div>
    <div class="grid">${cards}</div>
    <div class="footer">
      <div class="foot-brand">bonsai smokehouse</div>
      <div>${esc(t('Staff training reference — not for guest distribution.','Referencia de capacitación del personal — no para distribución a clientes.'))}</div>
    </div>
  `;
}

function renderFoodLike(dataset, titleEn, titleEs, subEn, subEs){
  let html = `
    <div class="section-head">
      <div class="eyebrow">${esc(t('A Staff Training Guide','Una Guía de Capacitación'))}</div>
      <h1 class="pagetitle">${esc(t(titleEn, titleEs))}</h1>
      <div class="subtitle">${esc(t(subEn, subEs))}</div>
    </div>
    <div class="searchbar"><input type="text" id="searchbox" placeholder="${esc(t('Search dishes, ingredients…','Buscar platillos, ingredientes…'))}" oninput="filterItems(this.value)"></div>
    <div id="itemcontainer">`;

  let uid = 0;
  dataset.forEach(group => {
    if(!group.items) return;
    html += `<div class="grouphead" data-group>
      <div class="groupheading">${esc(t(group.group_en, group.group_es))}</div>`;
    if(group.lede_en) html += `<div class="grouplede">${esc(t(group.lede_en, group.lede_es))}</div>`;
    html += `<div class="itemlist">`;
    group.items.forEach(item => {
      uid++;
      const id = 'itm' + uid;
      const priceLabel = item.price ? item.price :
        (item.hot ? `${t('Hot','Caliente')} ${item.hot} / ${t('Iced','Frío')} ${item.iced}` : '');
      const searchText = (item.name + ' ' + (item.en||'') + ' ' + (item.es||'')).toLowerCase();
      html += `<div class="item" id="${id}" data-search="${esc(searchText)}">
        <div class="item-head" onclick="toggleItem('${id}')">
          <div class="item-title">
            <h3>${esc(item.name)}${item.veg ? ' 🌱' : ''}</h3>
            ${item.en ? `<div class="sub">${esc(t(item.en, item.es))}</div>` : ''}
          </div>
          <div style="display:flex;align-items:center;">
            ${priceLabel ? `<div class="item-price">${esc(priceLabel)}</div>` : ''}
            <div class="item-chevron">▶</div>
          </div>
        </div>
        <div class="item-body">
          <div class="item-body-inner">
            ${photoBlock(item.photo, item.name, item.name)}
            ${allergenPills(item.allergens)}
            ${item.veganSwap ? `<div class="tagrow" style="margin-top:6px;">${pill('veg', t('Vegan swap available','Sustitución vegana disponible'))}</div>` : ''}
            ${item.note_en ? `<div class="note-block">${esc(t(item.note_en, item.note_es))}</div>` : ''}
          </div>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });
  html += `</div>`;
  const trailingNote = dataset.find(g => g.note_en && !g.items);
  if(trailingNote) html += `<div class="note-block" style="max-width:560px;margin:20px auto 0;text-align:center;">${esc(t(trailingNote.note_en, trailingNote.note_es))}</div>`;
  return html;
}

function filterItems(q){
  q = q.toLowerCase().trim();
  document.querySelectorAll('#itemcontainer .item').forEach(el => {
    el.style.display = el.dataset.search.includes(q) ? '' : 'none';
  });
  document.querySelectorAll('#itemcontainer [data-group]').forEach(g => {
    const visible = Array.from(g.querySelectorAll('.item')).some(i => i.style.display !== 'none');
    g.style.display = visible ? '' : 'none';
  });
}

function renderMenuDisclaimer(){
  return `<div class="note-block" style="max-width:680px;margin:30px auto 0;">${esc(t(BONSAI.meta.menuDisclaimer.en, BONSAI.meta.menuDisclaimer.es))}</div>`;
}

function renderTeaComparisonTable(){
  const tg = BONSAI.teaComparison;
  if(!tg) return '';
  const rows = ['type','caffeine','looks','taste'];
  const rowLabels = {
    type: t('Processing','Procesamiento'), caffeine: t('Caffeine','Cafeína'),
    looks: t('Appearance','Apariencia'), taste: t('Taste','Sabor')
  };
  let table = `<div class="matrixwrap"><table class="matrix"><thead><tr><th>${esc(t('Tea','Té'))}</th>`;
  tg.rows.forEach(r => table += `<th>${esc(r.name)}</th>`);
  table += `</tr></thead><tbody>`;
  rows.forEach(key => {
    table += `<tr><td>${esc(rowLabels[key])}</td>`;
    tg.rows.forEach(r => table += `<td style="text-align:left;">${esc(t(r[key+'_en'], r[key+'_es']))}</td>`);
    table += `</tr>`;
  });
  table += `</tbody></table></div>`;

  return `
    <div class="groupheading">${esc(t('Tea Comparison — Quick Reference','Comparación de Tés — Referencia Rápida'))}</div>
    <div class="grouplede">${esc(t(tg.intro_en, tg.intro_es))}</div>
    ${table}
    <div class="note-block" style="max-width:680px;margin:14px auto 26px;">${esc(t(tg.tip_en, tg.tip_es))}</div>
  `;
}

function renderIngredients(){
  let html = `
    <div class="section-head">
      <div class="eyebrow">${esc(t('Educational Reference','Referencia Educativa'))}</div>
      <h1 class="pagetitle">${esc(t('Ingredient Notebook','Cuaderno de Ingredientes'))}</h1>
      <div class="subtitle">${esc(t('The rare, the obscure, and the easily-mispronounced.','Lo raro, lo poco conocido y lo difícil de pronunciar.'))}</div>
    </div>
    ${renderTeaComparisonTable()}
    <div class="searchbar"><input type="text" id="searchbox" placeholder="${esc(t('Search ingredients…','Buscar ingredientes…'))}" oninput="filterItems(this.value)"></div>
    <div id="itemcontainer"><div class="itemlist">`;
  BONSAI.ingredients.forEach((ing, i) => {
    const id = 'ing' + i;
    const searchText = (ing.term + ' ' + ing.en + ' ' + ing.es).toLowerCase();
    html += `<div class="item" id="${id}" data-search="${esc(searchText)}">
      <div class="item-head" onclick="toggleItem('${id}')">
        <div class="item-title"><h3>${esc(t(ing.en_t, ing.es_t))}</h3></div>
        <div class="item-chevron">▶</div>
      </div>
      <div class="item-body"><div class="item-body-inner">
        <p>${esc(t(ing.en, ing.es))}</p>
        ${ing.note_en ? `<div class="pending">${esc(t(ing.note_en, ing.note_es))}</div>` : ''}
      </div></div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

function renderAllergens(){
  const codes = ["fish","shellfish","gluten","dairy","egg","soy","treenut","sesame","mustard"];
  const allItems = [];
  BONSAI.food.forEach(g => g.items && g.items.forEach(it => allItems.push(it)));

  let table = `<div class="matrixwrap"><table class="matrix"><thead><tr><th>${esc(t('Dish','Platillo'))}</th>`;
  codes.forEach(c => table += `<th>${esc(t(BONSAI.allergenLabels[c].en, BONSAI.allergenLabels[c].es))}</th>`);
  table += `</tr></thead><tbody>`;
  allItems.forEach(it => {
    table += `<tr><td>${esc(it.name)}</td>`;
    codes.forEach(c => table += `<td>${(it.allergens||[]).includes(c) ? '<span class="dot"></span>' : ''}</td>`);
    table += `</tr>`;
  });
  table += `</tbody></table></div>`;

  return `
    <div class="section-head">
      <div class="eyebrow">${esc(t('Safety Reference','Referencia de Seguridad'))}</div>
      <h1 class="pagetitle">${esc(t('Allergens & Dietary','Alérgenos y Dietas'))}</h1>
      <div class="subtitle">${esc(t('The full matrix, at a glance.','La matriz completa, de un vistazo.'))}</div>
    </div>
    <div class="pending" style="max-width:680px;margin:0 auto 26px;">
      ${esc(t(
        '⚠ Based on the printed menu’s listed ingredients only — every entry must be verified with the kitchen for recipe changes and cross-contamination risk before this is treated as a guest-facing guarantee.',
        '⚠ Basado únicamente en los ingredientes listados en el menú impreso — cada entrada debe verificarse con cocina por cambios de receta y riesgo de contaminación cruzada antes de tratarse como una garantía para el cliente.'
      ))}
    </div>
    ${table}
    <div class="groupheading">${esc(t('The Disclosure Script','El Guion de Aviso'))}</div>
    <div class="item" style="padding:18px 20px;">
      <p style="margin:0 0 10px;font-style:italic;">${esc(t(
        '"Just to let you know — this menu is prepared in a kitchen that handles fish, shellfish, gluten, dairy, egg, soy, tree nuts, sesame, and mustard, so I can’t guarantee any dish against cross-contact. Is there anything you need me to flag or swap for you?"',
        '"Solo para que lo sepa — este menú se prepara en una cocina que maneja pescado, mariscos, gluten, lácteos, huevo, soya, frutos secos, ajonjolí y mostaza, así que no puedo garantizar ningún platillo contra contacto cruzado. ¿Hay algo que necesite que le señale o le cambie?"'
      ))}</p>
      <div class="note-block">${esc(t(
        'Draft script — Lodestar-authored, pending sign-off as the official standard. Say it early, plainly, and before the order is placed — not defensively, after a guest asks.',
        'Guion en borrador — redactado por Lodestar, pendiente de aprobación como estándar oficial. Dilo temprano, con claridad, y antes de tomar la orden — no a la defensiva, después de que el cliente pregunte.'
      ))}</div>
    </div>
    <div class="groupheading">${esc(t('Vegan & Gluten-Free Swaps','Sustituciones Veganas y Sin Gluten'))}</div>
    <div class="stepgrid">
      <div class="stepcard"><div class="num">${esc(t('SANDWICHES','SÁNDWICHES'))}</div><h4>${esc(t('Any sandwich → vegan','Cualquier sándwich → vegano'))}</h4><p>${esc(t('House-smoked beet in place of fish, cashew schmear in place of dairy.','Betabel ahumado en casa en lugar de pescado, untable de nuez de la india en lugar de lácteos.'))}</p></div>
      <div class="stepcard"><div class="num">${esc(t('SMOKED FISH TOAST','SMOKED FISH TOAST'))}</div><h4>${esc(t('→ Gluten-free','→ Sin gluten'))}</h4><p>${esc(t('The only savory dish with a built-in GF bread option. The bagel itself has no GF version.','El único platillo salado con opción de pan sin gluten incorporada. El bagel en sí no tiene versión sin gluten.'))}</p></div>
    </div>
    ${renderMenuDisclaimer()}
  `;
}

function renderSafety(){
  let html = `
    <div class="section-head">
      <div class="eyebrow">${esc(t('The Baseline for Every Shift','La Base para Cada Turno'))}</div>
      <h1 class="pagetitle">${esc(t('Food Safety & Cold Chain','Seguridad Alimentaria y Cadena de Frío'))}</h1>
      <div class="subtitle">${esc(t('Highest-consequence procedures on the list — get these right first.','Los procedimientos de mayor consecuencia de la lista — hazlos bien primero.'))}</div>
    </div>
    <div class="itemlist">`;
  BONSAI.safety.forEach((s, i) => {
    const id = 'saf' + i;
    html += `<div class="item" id="${id}">
      <div class="item-head" onclick="toggleItem('${id}')">
        <div class="item-title"><h3>${esc(t(s.en_t, s.es_t))}</h3></div>
        <div class="item-chevron">▶</div>
      </div>
      <div class="item-body"><div class="item-body-inner">
        <p>${esc(t(s.en, s.es))}</p>
        ${s.pending_en ? `<div class="pending">${esc(t(s.pending_en, s.pending_es))}</div>` : ''}
      </div></div>
    </div>`;
  });
  html += `</div>`;
  return html;
}

function renderService(){
  let html = `
    <div class="section-head">
      <div class="eyebrow">${esc(t('Counter, Not Table','Mostrador, No Mesa'))}</div>
      <h1 class="pagetitle">${esc(t('Service Standards','Estándares de Servicio'))}</h1>
      <div class="subtitle">${esc(t('How we run the floor and talk to guests.','Cómo operamos el mostrador y hablamos con los clientes.'))}</div>
    </div>
    <div class="stepgrid">`;
  BONSAI.service.forEach((s, i) => {
    html += `<div class="stepcard">
      <div class="num">${String(i+1).padStart(2,'0')}</div>
      <h4>${esc(t(s.en_t, s.es_t))}</h4>
      <p>${esc(t(s.en, s.es))}</p>
    </div>`;
  });
  html += `</div>`;
  return html;
}

function renderDeli(){
  let html = `
    <div class="section-head">
      <div class="eyebrow">${esc(t('The Fridge Case','La Vitrina'))}</div>
      <h1 class="pagetitle">${esc(t('Deli & Retail Case','Vitrina y Venta al Detalle'))}</h1>
      <div class="subtitle">${esc(t('Everything sold by weight or jar to take home.','Todo lo que se vende por peso o frasco para llevar.'))}</div>
    </div>`;
  BONSAI.deli.forEach(group => {
    html += `<div class="groupheading">${esc(t(group.group_en, group.group_es))}</div><div class="itemlist">`;
    group.items.forEach(it => {
      html += `<div class="item"><div class="item-head" style="cursor:default;">
        <div class="item-title"><h3>${esc(it.name)}</h3>${it.en ? `<div class="sub">${esc(t(it.en, it.es))}</div>` : ''}</div>
      </div></div>`;
    });
    html += `</div>`;
    if(group.note_en) html += `<div class="note-block" style="margin-bottom:10px;">${esc(t(group.note_en, group.note_es))}</div>`;
  });
  return html;
}

function renderBrand(){
  const b = BONSAI.brand;
  return `
    <div class="section-head">
      <div class="eyebrow">${esc(t('Voice & Identity','Voz e Identidad'))}</div>
      <h1 class="pagetitle">${esc(t('Brand & Story', 'Marca e Historia'))}</h1>
      <div class="subtitle">${esc(t(b.headline_en, b.headline_es))}</div>
    </div>
    <div class="intro" style="text-align:left;max-width:680px;">
      <p>${esc(t(b.story_en, b.story_es))}</p>
      <p>${esc(t(b.craft_en, b.craft_es))}</p>
    </div>
    <div class="groupheading">${esc(t('How We Talk About It','Cómo Hablamos de Esto'))}</div>
    <div class="itemlist">
      ${(LANG==='es'?b.voiceRules_es:b.voiceRules_en).map(r => `<div class="item" style="padding:16px 20px;"><p style="margin:0;">${esc(r)}</p></div>`).join('')}
    </div>
  `;
}

function renderInfo(){
  const m = BONSAI.meta;
  return `
    <div class="section-head">
      <div class="eyebrow">${esc(t('Quick Reference','Referencia Rápida'))}</div>
      <h1 class="pagetitle">${esc(t('Hours, Location & Team','Horario, Ubicación y Equipo'))}</h1>
    </div>
    <div class="installcard">
      <div class="oslabel">${esc(t('Hours','Horario'))}</div>
      <p style="text-align:center;font-size:18px;margin:0 0 4px;">${esc(t(m.hours.en, m.hours.es))}</p>
      <div class="oslabel">${esc(t('Location','Ubicación'))}</div>
      <p style="text-align:center;margin:0 0 4px;">${esc(m.address)}</p>
      <div class="oslabel">${esc(t('Team','Equipo'))}</div>
      ${m.team.map(p => `<p style="text-align:center;margin:0 0 4px;"><b>${esc(p.name)}</b><br><span style="color:var(--ink-soft);font-size:13px;">${esc(t(p.role.en, p.role.es))}</span></p>`).join('')}
    </div>
    ${renderMenuDisclaimer()}
  `;
}

function renderInstall(){
  const inst = BONSAI.install;
  const iphoneList = LANG==='es' ? inst.iphone_es : inst.iphone_en;
  const androidList = LANG==='es' ? inst.android_es : inst.android_en;
  return `
    <div class="section-head">
      <div class="eyebrow">${esc(t('Training Portal','Portal de Capacitación'))}</div>
    </div>
    <div class="installcard">
      <h2>${esc(t(inst.title_en, inst.title_es))}</h2>
      <div class="lede">${esc(t(inst.lede_en, inst.lede_es))}</div>
      <div class="oslabel">${esc(t('iPhone · Safari Only','iPhone · Solo Safari'))}</div>
      ${iphoneList.map((s,i) => `<div class="stepline"><div class="bullet">${i+1}</div><p>${esc(s)}</p></div>`).join('')}
      <div class="oslabel">${esc(t('Android · Chrome','Android · Chrome'))}</div>
      ${androidList.map((s,i) => `<div class="stepline"><div class="bullet">${i+1}</div><p>${esc(s)}</p></div>`).join('')}
    </div>
  `;
}

// ---------------------------------------------------------------------
// ROUTER
// ---------------------------------------------------------------------
function render(){
  const route = location.hash.replace('#','');
  const app = document.getElementById('app');
  document.getElementById('backBtn').classList.toggle('show', !!route);
  window.scrollTo(0,0);

  switch(route){
    case 'food':
      app.innerHTML = renderFoodLike(BONSAI.food, 'Food Guide', 'Guía de Comida',
        'Dishes, ingredients, and how to talk about them', 'Platillos, ingredientes y cómo describirlos') + renderMenuDisclaimer();
      break;
    case 'beverage':
      app.innerHTML = renderFoodLike(BONSAI.beverage, 'Beverage Guide', 'Guía de Bebidas',
        'Tea, coffee, and refreshments — hot and iced', 'Té, café y bebidas refrescantes — calientes y frías');
      break;
    case 'ingredients': app.innerHTML = renderIngredients(); break;
    case 'allergens': app.innerHTML = renderAllergens(); break;
    case 'safety': app.innerHTML = renderSafety(); break;
    case 'service': app.innerHTML = renderService(); break;
    case 'deli': app.innerHTML = renderDeli(); break;
    case 'brand': app.innerHTML = renderBrand(); break;
    case 'info': app.innerHTML = renderInfo(); break;
    case 'install': app.innerHTML = renderInstall(); break;
    default: app.innerHTML = renderHome();
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnEN').classList.toggle('active', LANG==='en');
  document.getElementById('btnES').classList.toggle('active', LANG==='es');
  document.documentElement.lang = LANG;
  render();
});
