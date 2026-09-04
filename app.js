/* ============================================================
   MINGYING GEO — 網站邏輯 (app.js)
   ------------------------------------------------------------
   這個檔案負責：把 data.js 的內容畫到頁面上、選單開合、
   以及切換上方四個分頁。一般不需要修改這個檔案，
   要換文字內容請改 data.js。
   ============================================================ */

/* ---------- 圖示庫：新增內容若需要新圖示，可以在這裡加一組 ---------- */
const ICONS = {
  layers:   '<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M2 13l10 5 10-5"/>',
  pin:      '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>',
  compass:  '<circle cx="12" cy="12" r="9"/><path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z"/>',
  info:     '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
  target:   '<path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><circle cx="12" cy="12" r="3.5"/>',
  grid:     '<path d="M4 4h16v6H4zM4 14h7v6H4zM13 14h7v6h-7z"/>',
  drone:    '<path d="M12 4v3M12 4l6 3-6 3-6-3 6-3Z"/><path d="M4 11v7l8 3 8-3v-7"/>',
  mesh:     '<circle cx="6" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/><circle cx="12" cy="12" r="1.6"/><path d="M6 7.6V16.4M18 7.6V16.4M7.6 6h8.8M7.6 18h8.8M7.4 10.9l3.2-.1M13.4 10.9l3.2 3.1"/>',
  phone:    '<path d="M4 5h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 14l5 2v4a2 2 0 0 1-2 2C9.5 22 2 14.5 2 7a2 2 0 0 1 2-2Z"/>',
  email:    '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m4 6.5 8 6.5 8-6.5"/>',
  facebook: '<path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.6.4-1 1-1h2V8Z"/>',
  youtube:  '<rect x="2.5" y="6" width="19" height="12" rx="3.2"/><path d="M11 10.3v3.4l3-1.7-3-1.7Z" fill="currentColor" stroke="none"/>'
};

function icon(name){
  const body = ICONS[name];
  if(!body) return '';
  return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
}

/* ---------- 小工具 ---------- */
function esc(str){
  return String(str == null ? '' : str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ---------- 各區塊渲染 ---------- */
function renderBrand(){
  document.querySelectorAll('[data-field="tagline"]').forEach(function(node){
    node.textContent = SITE_DATA.brand.tagline;
  });
  const copyright = document.getElementById('copyrightLine');
  if(copyright){
    copyright.textContent = '\u00A9 ' + SITE_DATA.footer.copyrightYear + ' ' + SITE_DATA.brand.name + '. All rights reserved.';
  }
}

function renderNav(){
  const panel = document.getElementById('menuPanel');
  if(!panel) return;
  panel.innerHTML = SITE_DATA.navItems.map(function(item){
    return '<a href="#' + item.target + '" data-target="' + item.target + '" role="menuitem">' +
      icon(item.icon) +
      '<span>' + esc(item.title) + '<span class="item-desc">' + esc(item.desc) + '</span></span>' +
      '</a>';
  }).join('');
}

function renderQuicklinks(){
  const grid = document.getElementById('quicklinksGrid');
  if(!grid) return;
  grid.innerHTML = SITE_DATA.navItems.map(function(item){
    return '<button data-target="' + item.target + '">' +
      icon(item.icon) +
      '<span class="ql-title">' + esc(item.title) + '</span>' +
      '<span class="ql-desc">' + esc(item.desc) + '</span>' +
      '</button>';
  }).join('');
}

function renderHero(){
  const title = document.getElementById('heroTitle');
  const lead = document.getElementById('heroLead');
  if(title) title.textContent = SITE_DATA.hero.title;
  if(lead) lead.textContent = SITE_DATA.hero.lead;
}

function renderProducts(){
  const wrap = document.getElementById('productsGrid');
  if(!wrap) return;
  if(!SITE_DATA.products.length){
    wrap.innerHTML = '<p class="empty-state">目前尚未新增產品資訊。</p>';
    return;
  }
  wrap.innerHTML = SITE_DATA.products.map(function(p){
    return '<div class="product-card">' +
      '<span class="tag">' + esc(p.tag) + '</span>' +
      icon(p.icon) +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p>' + esc(p.desc) + '</p>' +
      '</div>';
  }).join('');
}

function renderCases(){
  const wrap = document.getElementById('casesList');
  if(!wrap) return;
  if(!SITE_DATA.cases.length){
    wrap.innerHTML = '<p class="empty-state">目前尚未新增案件分享。</p>';
    return;
  }
  wrap.innerHTML = SITE_DATA.cases.map(function(c){
    return '<div class="row-item">' +
      '<span class="row-tag">' + esc(c.tag) + '</span>' +
      '<div><h3>' + esc(c.title) + '</h3><p>' + esc(c.desc) + '</p></div>' +
      '<span class="row-date">' + esc(c.date) + '</span>' +
      '</div>';
  }).join('');
}

function renderTutorials(){
  const wrap = document.getElementById('tutorialsList');
  if(!wrap) return;
  if(!SITE_DATA.tutorials.length){
    wrap.innerHTML = '<p class="empty-state">目前尚未新增教學文章。</p>';
    return;
  }
  wrap.innerHTML = SITE_DATA.tutorials.map(function(t){
    const levelClass = t.level === '進階' ? ' level-advanced' : '';
    return '<div class="row-item' + levelClass + '">' +
      '<span class="row-tag">' + esc(t.level) + '</span>' +
      '<div><h3>' + esc(t.title) + '</h3><p>' + esc(t.desc) + '</p></div>' +
      '<a class="row-date" href="' + esc(t.link || '#') + '">閱讀文章</a>' +
      '</div>';
  }).join('');
}

function renderAbout(){
  const intro = document.getElementById('aboutIntro');
  const panel = document.getElementById('aboutPanel');
  if(intro){
    intro.innerHTML = SITE_DATA.about.intro.map(function(p){
      return '<p>' + esc(p) + '</p>';
    }).join('');
  }
  if(panel){
    panel.innerHTML = SITE_DATA.about.panel.map(function(item){
      return '<dt>' + esc(item.label) + '</dt><dd>' + esc(item.value) + '</dd>';
    }).join('');
  }
}

function renderContact(){
  const c = SITE_DATA.contact;
  const list = document.getElementById('footerContact');
  const social = document.getElementById('footerSocial');
  if(list){
    list.innerHTML =
      '<li>' + icon('pin') + '<span>' + esc(c.address) + '</span></li>' +
      '<li>' + icon('phone') + '<span>' + esc(c.phone) + '</span></li>' +
      '<li>' + icon('email') + '<span>' + esc(c.email) + '</span></li>';
  }
  if(social){
    social.innerHTML =
      '<a href="' + esc(c.facebook) + '" target="_blank" rel="noopener" aria-label="\u524d\u5f80 Facebook">' + icon('facebook') + '</a>' +
      '<a href="' + esc(c.youtube) + '" target="_blank" rel="noopener" aria-label="\u524d\u5f80 YouTube">' + icon('youtube') + '</a>';
  }
}

/* ---------- 選單開合 ---------- */
function setupMenu(){
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('menuPanel');
  if(!toggle || !panel) return;

  function closeMenu(){
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }
  function openMenu(){
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
  }

  toggle.addEventListener('click', function(e){
    e.stopPropagation();
    if(panel.classList.contains('open')){ closeMenu(); } else { openMenu(); }
  });
  document.addEventListener('click', function(e){
    if(!panel.contains(e.target) && e.target !== toggle){ closeMenu(); }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeMenu(); }
  });

  // showView() 呼叫這個函式來收合選單
  setupMenu.close = closeMenu;
}

/* ---------- 分頁切換（首頁／產品資訊／案件分享／GIS教學區／關於） ---------- */
const VALID_VIEWS = ['home','products','cases','tutorials','about'];

function showView(name){
  if(VALID_VIEWS.indexOf(name) === -1){ name = 'home'; }

  document.querySelectorAll('.view').forEach(function(v){
    v.classList.toggle('active', v.getAttribute('data-view') === name);
  });
  document.querySelectorAll('.menu-panel a').forEach(function(a){
    a.classList.toggle('active', a.getAttribute('data-target') === name);
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function navigate(name){
  showView(name);
  if(typeof setupMenu.close === 'function'){ setupMenu.close(); }
  history.pushState(null, '', name === 'home' ? '#' : ('#' + name));
}

function setupRouter(){
  // 用事件代理（event delegation），這樣就算選單/快速連結是動態產生的也能正常運作
  document.body.addEventListener('click', function(e){
    const el = e.target.closest('[data-target]');
    if(!el) return;
    e.preventDefault();
    navigate(el.getAttribute('data-target'));
  });

  window.addEventListener('popstate', function(){
    showView(location.hash.replace('#','') || 'home');
  });

  showView(location.hash.replace('#','') || 'home');
}

/* ---------- 初始化 ---------- */
document.addEventListener('DOMContentLoaded', function(){
  renderBrand();
  renderNav();
  renderQuicklinks();
  renderHero();
  renderProducts();
  renderCases();
  renderTutorials();
  renderAbout();
  renderContact();
  setupMenu();
  setupRouter();
});
