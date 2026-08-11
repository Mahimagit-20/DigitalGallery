/* =========================================================================
   APP.JS — AKSHAYA ART GALLERY Touchscreen Application
   Screen-based navigation, card reveal, media player, theme switching.
   ========================================================================= */

(() => {
  'use strict';

  /* Safe storage helpers for kiosk environments */
  function safeGet(key){
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value){
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  /* ---------- Theme ---------- */
  const Theme = {
    key: 'akshaya-theme',
    init(){
      const saved = safeGet(this.key);
      let prefersLight = false;
      try { prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches; } catch (e) { /* ignore */ }
      const preferred = saved || (prefersLight ? 'light' : 'dark');
      this.apply(preferred);
      document.getElementById('themeToggle')?.addEventListener('click', () => this.toggle());
    },
    apply(mode){
      document.documentElement.setAttribute('data-theme', mode);
      safeSet(this.key, mode);
    },
    toggle(){
      const current = document.documentElement.getAttribute('data-theme');
      this.apply(current === 'light' ? 'dark' : 'light');
    }
  };

  /* ---------- Screen Navigation Manager ---------- */
  const ScreenNav = {
    screens: [],
    currentScreen: 'welcome',
    screenStack: ['welcome'],
    inactivityTimer: null,
    inactivityDuration: 60000, // 60 seconds

    init(){
      this.screens = Array.from(document.querySelectorAll('.screen'));
      this.setupScreenButtons();
      this.setupNavDots();
      this.showScreen('welcome');
      this.setupInactivityTimeout();
      
      // Auto-transition from welcome screen after 1 second
      setTimeout(() => {
        if (this.currentScreen === 'welcome'){
          this.navigateTo('groups');
        }
      }, 2000);
    },

    setupScreenButtons(){
      // Navigation buttons
      document.getElementById('startBtn')?.addEventListener('click', () => this.navigateTo('groups'));
      document.getElementById('backToGroups')?.addEventListener('click', () => this.navigateTo('groups'));
      document.getElementById('backToCategories')?.addEventListener('click', () => this.navigateTo('categories'));
      document.getElementById('toTop')?.addEventListener('click', () => this.navigateTo('welcome'));
    },

    setupNavDots(){
      const dots = document.querySelectorAll('.nav-dot');
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const target = dot.dataset.target;
          this.navigateTo(target);
        });
      });
    },

    navigateTo(screenId){
      if (this.currentScreen === screenId) return;
      
      clearTimeout(this.inactivityTimer);
      this.resetInactivityTimeout();
      
      const fromScreen = document.getElementById(this.currentScreen);
      const toScreen = document.getElementById(screenId);
      
      if (!toScreen) return;

      // Handle exit animation
      if (fromScreen){
        fromScreen.classList.remove('active');
        fromScreen.classList.add('exit-left');
        
        setTimeout(() => {
          fromScreen.classList.remove('exit-left');
        }, 700);
      }

      // Update current screen and show new one
      this.currentScreen = screenId;
      this.showScreen(screenId);
      
      // Update active dot in nav
      this.updateActiveDot(screenId);
    },

    showScreen(screenId){
      const screen = document.getElementById(screenId);
      if (!screen) return;
      
      screen.classList.add('active');
      screen.classList.add('enter-animation');
      
      setTimeout(() => {
        screen.classList.remove('enter-animation');
      }, 700);
    },

    updateActiveDot(screenId){
      const dots = document.querySelectorAll('.nav-dot');
      dots.forEach(dot => {
        dot.classList.toggle('active', dot.dataset.target === screenId);
      });
    },

    setupInactivityTimeout(){
      this.resetInactivityTimeout();
    },

    resetInactivityTimeout(){
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = setTimeout(() => {
        if (this.currentScreen !== 'welcome'){
          Gallery.reset();
          this.navigateTo('welcome');
          // Auto-transition to groups again
          setTimeout(() => {
            if (this.currentScreen === 'welcome'){
              this.navigateTo('groups');
            }
          }, 1000);
        }
      }, this.inactivityDuration);
    }
  };

  /* ---------- Ripple effect ---------- */
  function attachRipple(el){
    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      el.style.position = el.style.position || 'relative';
      el.style.overflow = 'hidden';
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  }

  /* ---------- Scroll reveal for cards within screens ---------- */
  const Reveal = {
    observer: null,
    init(){
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add('in');
            this.observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      this.scan();
    },
    scan(){
      if (!this.observer){
        document.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)').forEach(el => el.classList.add('in'));
        return;
      }
      document.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)').forEach(el => this.observer.observe(el));
    }
  };

  /* ---------- Clock ---------- */
  function tickClock(){
    const el = document.getElementById('navClock');
    if (!el) return;
    el.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  /* ---------- Icon / photo frame helper ----------
     Pass a plain emoji string to get the old glowing-icon look, or an
     object like { icon: "🎨", src: "static/img/sunset-harmony.jpg" } to
     show a real photo instead. If the photo fails to load (missing
     file, bad path) it quietly falls back to the emoji. */
  function iconFrame(iconOrObj){
    const icon = (iconOrObj && typeof iconOrObj === 'object') ? iconOrObj.icon : iconOrObj;
    const src  = (iconOrObj && typeof iconOrObj === 'object') ? iconOrObj.src  : null;
    if (src){
      return `<img class="glow-photo" src="${src}" alt="" loading="lazy"
                onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'glow-icon',textContent:'${icon || ''}'}))">`;
    }
    return `<span class="glow-icon" aria-hidden="true">${icon}</span>`;
  }

  /* ---------- Card grid column sizing ----------
     Tablet and up (≥768px): handled entirely by CSS (repeat(auto-fit, ...))
     so the column count adapts continuously to the available width across
     tablet/laptop/desktop — no JS involved, so it can't misfire from being
     measured before layout has settled.
     Below that (phones): fills each row with as many cards as fit at the
     fixed card size, wrapping to more rows as needed. */
  const gridColumnState = new Map();
  function applyGridColumns(gridEl, count){
    if (!gridEl || !count) return;
    gridColumnState.set(gridEl.id, count);

    if (window.innerWidth >= 768){
      // Clear any inline override left from a narrower viewport so the
      // stylesheet's auto-fit rule takes over.
      gridEl.style.gridTemplateColumns = '';
      return;
    }

    const minCardWidth = 120; // floor so columns never get too cramped on narrow screens
    const maxCardWidth = 155; // ceiling so a low item count doesn't blow cards up to fill the row
    const gap = 14;
    const containerWidth = gridEl.clientWidth || window.innerWidth;
    const maxFit = Math.max(1, Math.floor((containerWidth + gap) / (minCardWidth + gap)));
    const cols = Math.min(count, maxFit);

    // minmax(..., maxCardWidth) instead of 1fr keeps cards capped at a fixed
    // size even when there are only a couple of items to lay out; leftover
    // row space stays blank (justify-content:start in CSS) rather than
    // stretching the cards.
    gridEl.style.gridTemplateColumns = `repeat(${cols}, minmax(${minCardWidth}px, ${maxCardWidth}px))`;
  }

  let gridResizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(gridResizeTimer);
    gridResizeTimer = setTimeout(() => {
      gridColumnState.forEach((count, id) => {
        applyGridColumns(document.getElementById(id), count);
      });
    }, 150);
  });

  /* ---------- Grid page indicator ---------- */
  const boundPagers = new Set();
  function initGridPager(sectionId, pagerId, dotCount = 4){
    const section = document.getElementById(sectionId);
    const pager = document.getElementById(pagerId);
    if (!section || !pager) return;

    pager.innerHTML = '';
    for (let i = 0; i < dotCount; i++){
      const d = document.createElement('span');
      d.className = 'nav-dot' + (i === 0 ? ' active' : '');
      pager.appendChild(d);
    }

    const update = () => {
      const liveDots = pager.querySelectorAll('.nav-dot');
      const scrollable = section.scrollHeight - section.clientHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, section.scrollTop / scrollable)) : 0;
      const idx = Math.min(dotCount - 1, Math.floor(progress * dotCount));
      liveDots.forEach((d, i) => d.classList.toggle('active', i === idx));
    };
    update();

    if (!boundPagers.has(sectionId)){
      section.addEventListener('scroll', update, { passive: true });
      boundPagers.add(sectionId);
    }
  }

  /* ---------- Kiosk configuration ---------- */
  const Config = {
    endOfCategoryBehavior: 'loop',
  };

  /* ---------- Gallery render + navigation ---------- */
  const Gallery = {
    data: null,
    state: { groupId: null, categoryId: null, productIndex: 0 },

    init(data){
      this.data = data;
      this.renderGroups();
    },

    currentGroup(){ return this.data.groups.find(g => g.id === this.state.groupId); },
    currentCategory(){ return this.currentGroup()?.categories.find(c => c.id === this.state.categoryId); },

    renderGroups(){
      const grid = document.getElementById('groupsGrid');
      grid.innerHTML = '';
      this.data.groups.forEach((group, i) => {
        const card = document.createElement('div');
        card.className = 'gcard reveal-scale';
        card.style.setProperty('--d', (i % 8) * 0.05 + 's');
        const count = group.categories.length;
        card.title = group.tagline;
        card.innerHTML = `
          <div class="gcard-media" data-tone="${i % 8}">${iconFrame({ icon: group.icon, src: group.photo })}</div>
          <div class="gcard-footer">
            <div class="gcard-badge" aria-hidden="true">${group.icon}</div>
            <div class="gcard-text">
              <div class="gcard-title">${group.name}</div>
              <div class="gcard-sub">${count} ${count === 1 ? 'Collection' : 'Collections'}</div>
            </div>
          </div>`;
        card.addEventListener('click', () => this.openGroup(group.id));
        attachRipple(card);
        grid.appendChild(card);
      });
      applyGridColumns(grid, this.data.groups.length);
      Reveal.scan();
      initGridPager('groups', 'groupsPager', Math.ceil(this.data.groups.length / 3));
    },

    openGroup(groupId){
      this.state.groupId = groupId;
      const group = this.currentGroup();
      document.getElementById('categoryEyebrow').textContent = group.name;
      document.getElementById('categoryTitle').textContent = `Explore ${group.name}`;
      document.getElementById('categoryDesc').textContent = group.description;

      const grid = document.getElementById('categoriesGrid');
      grid.innerHTML = '';
      group.categories.forEach((cat, i) => {
        const card = document.createElement('div');
        card.className = 'gcard reveal-scale';
        card.style.setProperty('--d', (i % 8) * 0.05 + 's');
        card.innerHTML = `
          <div class="gcard-media" data-tone="${i % 8}">${iconFrame({ icon: cat.icon, src: cat.photo })}</div>
          <div class="gcard-footer">
            <div class="gcard-badge" aria-hidden="true">${cat.icon}</div>
            <div class="gcard-text">
              <div class="gcard-title">${cat.name}</div>
            </div>
          </div>`;
        card.addEventListener('click', () => this.openCategory(cat.id));
        attachRipple(card);
        grid.appendChild(card);
      });
      applyGridColumns(grid, group.categories.length);
      Reveal.scan();
      initGridPager('categories', 'categoriesPager', Math.ceil(group.categories.length / 3));
      ScreenNav.navigateTo('categories');
    },

    openCategory(categoryId){
      this.state.categoryId = categoryId;
      this.state.productIndex = 0;
      const category = this.currentCategory();
      document.getElementById('showcaseCategoryLabel').textContent = category.name;
      Player.load();
      ScreenNav.navigateTo('showcase');
    },

    nextProduct(){
      const category = this.currentCategory();
      const atLastProduct = this.state.productIndex >= category.products.length - 1;

      if (atLastProduct && Config.endOfCategoryBehavior === 'returnToCategories'){
        clearTimeout(Player.timer);
        this.state.productIndex = 0;
        ScreenNav.navigateTo('categories');
        return;
      }

      this.state.productIndex = (this.state.productIndex + 1) % category.products.length;
      Player.load();
    },
    prevProduct(){
      const category = this.currentCategory();
      this.state.productIndex = (this.state.productIndex - 1 + category.products.length) % category.products.length;
      Player.load();
    },

    reset(){
      clearTimeout(Player.timer);
      Player.paused = false;
      Player.currentProduct = null;
      this.state = { groupId: null, categoryId: null, productIndex: 0 };
    }
  };

  /* ---------- Product / media player ---------- */
  const Player = {
    mediaIndex: 0,
    timer: null,
    paused: false,
    currentProduct: null,
    segmentDuration: 0,
    segmentStart: 0,
    durations: { image: 5000, video: 5200 },

    load(){
      clearTimeout(this.timer);
      this.paused = false;
      this.mediaIndex = 0;
      const category = Gallery.currentCategory();
      const product = category.products[Gallery.state.productIndex];
      this.currentProduct = product;
      this.setPlayIcon(true);

      document.getElementById('productName').textContent = product.name;
      document.getElementById('productInfo').textContent = product.artist || product.info;
      document.getElementById('productDesc').textContent = product.description;
      document.getElementById('productCount').textContent = `${Gallery.state.productIndex + 1} / ${category.products.length}`;

      // Randomly show the photo above or below the name/description for this product.
      document.querySelector('.showcase-grid')?.classList.toggle('text-first', Math.random() < 0.5);

      const specRow = document.getElementById('specRow');
      specRow.innerHTML = '';
      product.specs?.forEach(spec => {
        const tag = document.createElement('span');
        tag.className = 'spec-tag';
        tag.textContent = spec;
        specRow.appendChild(tag);
      });

      this.renderMedia(product);
      this.play(product);
    },

    renderMedia(product){
      const stage = document.getElementById('mediaStage');
      stage.querySelectorAll('.media-slide').forEach(s => s.remove());
      product.media.forEach((m, i) => {
        const slide = document.createElement('div');
        slide.className = 'media-slide' + (i === 0 ? ' active' : '');
        slide.innerHTML = m.src
          ? `<img class="media-photo" src="${m.src}" alt="${m.caption || ''}" loading="lazy"
                onerror="this.outerHTML='<div class=&quot;media-icon&quot;>${m.icon || ''}</div>'">`
          : `<div class="media-icon">${m.icon}</div>`;
        stage.insertBefore(slide, document.getElementById('mediaCaptionFooter'));
      });

      const dotRow = document.getElementById('mediaDots');
      dotRow.innerHTML = '';
      product.media.forEach((_, i) => {
        const d = document.createElement('span');
        d.className = 'mdot' + (i === 0 ? ' active' : '');
        dotRow.appendChild(d);
      });

      this.updateBadge(product.media[0]);
      this.updateCaption(product.media[0]);
      document.getElementById('mediaCount').textContent = `${1} / ${product.media.length}`;
    },

    updateBadge(mediaItem){
      const badge = document.getElementById('mediaBadge');
      badge.innerHTML = mediaItem.type === 'video'
        ? '<span>🎥</span><span>Video · Autoplay</span>'
        : '<span>🖼️</span><span>Photo</span>';
    },

    updateCaption(mediaItem){
      const header = document.getElementById('mediaCaptionHeader');
      const footer = document.getElementById('mediaCaptionFooter');
      const desc = document.getElementById('mediaDesc');
      header.classList.remove('show');
      footer.classList.remove('show');
      header.textContent = '';
      footer.textContent = '';

      if (desc) desc.textContent = mediaItem.caption || '';

      if (!mediaItem.caption) return;
      const target = mediaItem.captionPosition === 'header' ? header : footer;
      target.textContent = mediaItem.caption;
      target.classList.add('show');
    },

    runSegment(duration){
      const fill = document.getElementById('progressFill');
      clearTimeout(this.timer);
      this.segmentDuration = duration;
      this.segmentStart = Date.now();

      const tick = () => {
        const elapsed = Date.now() - this.segmentStart;
        const ratio = Math.min(1, elapsed / duration);
        fill.style.width = (ratio * 100) + '%';
        if (ratio < 1 && !this.paused){
          this.timer = setTimeout(tick, 16);
        } else if (ratio >= 1){
          this.nextMedia();
        }
      };
      tick();
    },

    play(product){
      if (!product.media) return;
      this.setPlayIcon(true);
      this.advanceMedia();
    },

    advanceMedia(){
      if (!this.currentProduct?.media) return;

      const media = this.currentProduct.media[this.mediaIndex];
      const duration = this.durations[media.type];

      this.updateBadge(media);
      this.updateCaption(media);
      this.updateMediaDots();
      this.updateMediaCount();

      if (!this.paused){
        this.runSegment(duration);
      }
    },

    nextMedia(){
      if (!this.currentProduct?.media) return;
      
      this.mediaIndex++;
      if (this.mediaIndex >= this.currentProduct.media.length){
        this.mediaIndex = 0;
        Gallery.nextProduct();
        return;
      }

      this.advanceMedia();
    },

    prevMedia(){
      if (this.mediaIndex > 0){
        this.mediaIndex--;
        this.advanceMedia();
      }
    },

    togglePlayPause(){
      this.paused = !this.paused;
      this.setPlayIcon(!this.paused);

      if (!this.paused){
        const media = this.currentProduct?.media[this.mediaIndex];
        if (media){
          const remaining = this.segmentDuration - (Date.now() - this.segmentStart);
          this.runSegment(Math.max(1, remaining));
        }
      } else {
        clearTimeout(this.timer);
      }
    },

    setPlayIcon(isPlaying){
      const btn = document.getElementById('mediaPlayPause');
      if (btn){
        btn.textContent = isPlaying ? '⏸' : '▶';
        btn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
      }
    },

    updateMediaDots(){
      const dots = document.querySelectorAll('#mediaDots .mdot');
      dots.forEach((d, i) => d.classList.toggle('active', i === this.mediaIndex));
    },

    updateMediaCount(){
      document.getElementById('mediaCount').textContent = `${this.mediaIndex + 1} / ${this.currentProduct?.media.length || 1}`;
    }
  };

  /* ---------- Event listeners ---------- */
  function setupProductControls(){
    document.getElementById('prevProduct').addEventListener('click', () => Gallery.prevProduct());
    document.getElementById('nextProduct').addEventListener('click', () => Gallery.nextProduct());
    document.getElementById('jumpNextProduct').addEventListener('click', () => Gallery.nextProduct());
    document.getElementById('prevMedia').addEventListener('click', () => Player.prevMedia());
    document.getElementById('nextMedia').addEventListener('click', () => Player.nextMedia());
    document.getElementById('mediaPlayPause').addEventListener('click', () => Player.togglePlayPause());
    document.getElementById('toTop').addEventListener('click', () => ScreenNav.navigateTo('welcome'));
  }

  /* ---------- Bootstrap ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Reveal.init();
    setupProductControls();
    ScreenNav.init();
    Gallery.init(GALLERY_DATA);
    
    tickClock();
    setInterval(tickClock, 8000);
  });

})();