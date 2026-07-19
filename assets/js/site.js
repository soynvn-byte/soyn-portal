(function () {
  const data = window.SOYN_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const SITE_URL = 'https://soyncanvas.vn';

  function formatDate(input) {
    return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(input + 'T00:00:00'));
  }
  window.formatSoynDate = formatDate;

  function setMeta(selector, attr, value) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
      if (match) element.setAttribute(match[1], match[2]);
      document.head.appendChild(element);
    }
    element.setAttribute(attr, value);
  }

  function addGlobalSeo() {
    const path = window.location.pathname.replace(/index\.html$/, '') || '/';
    const canonicalUrl = SITE_URL + path + window.location.search;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const description = document.querySelector('meta[name="description"]')?.content || 'Soyn — Wall Art & Decor, Saigon, Since 2016.';
    const image = new URL(document.querySelector('meta[property="og:image"]')?.content || 'assets/images/og-cover.jpg', SITE_URL + '/').href;
    setMeta('meta[property="og:site_name"]', 'content', 'Soyn');
    setMeta('meta[property="og:locale"]', 'content', 'vi_VN');
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', document.title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', document.title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': SITE_URL + '/#organization',
          name: 'Công ty TNHH Soyn',
          url: SITE_URL + '/',
          logo: SITE_URL + '/assets/images/soyn-logo.png',
          email: 'soyn.vn@gmail.com',
          telephone: '+84899456699',
          sameAs: ['https://www.facebook.com/soyn.vn', 'https://soyn.vn/']
        },
        {
          '@type': 'WebSite',
          '@id': SITE_URL + '/#website',
          url: SITE_URL + '/',
          name: 'Soyn | Wall Art & Decor',
          publisher: { '@id': SITE_URL + '/#organization' },
          inLanguage: 'vi-VN'
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'soyn-global-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
  addGlobalSeo();

  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  const menuButton = $('.menu-button');
  const navLinks = $('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    $$('.nav-links a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  function addReadingProgressAndBackToTop() {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-progress{position:fixed;left:0;top:0;height:3px;width:0;background:var(--accent);z-index:250;transition:width .08s linear}
      .back-to-top{position:fixed;right:20px;bottom:150px;z-index:175;width:44px;height:44px;border:1px solid rgba(18,18,18,.16);border-radius:50%;background:rgba(255,255,255,.94);box-shadow:0 8px 24px rgba(0,0,0,.1);display:grid;place-items:center;font-size:1.15rem;opacity:0;visibility:hidden;transform:translateY(8px);transition:.2s ease;cursor:pointer}
      .back-to-top.visible{opacity:1;visibility:visible;transform:none}
      @media(max-width:820px){.back-to-top{right:14px;bottom:205px;width:42px;height:42px}}
    `;
    document.head.appendChild(style);
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.type = 'button';
    button.setAttribute('aria-label', 'Quay lên đầu trang');
    button.textContent = '↑';
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.append(progress, button);
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      button.classList.toggle('visible', window.scrollY > 600);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
  addReadingProgressAndBackToTop();

  function addMobileBottomNav() {
    const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const isProjectDetail = currentPage === 'detail.html' && new URLSearchParams(window.location.search).get('type') === 'project';
    const isNewsDetail = currentPage === 'detail.html' && new URLSearchParams(window.location.search).get('type') === 'post';
    const items = [
      { label: 'Trang chủ', href: 'index.html', active: currentPage === 'index.html', icon: '<path d="M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/><path d="M9 22v-7h6v7"/>' },
      { label: 'Profile', href: 'profile.html', active: currentPage === 'profile.html', icon: '<circle cx="12" cy="8" r="4"/><path d="M4 22c.7-5 3.4-7.5 8-7.5s7.3 2.5 8 7.5"/>' },
      { label: 'Dự án', href: 'projects.html', active: currentPage === 'projects.html' || isProjectDetail, icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4V2m8 2V2M3 9h18M8 13h3v3H8z"/>' },
      { label: 'Tin tức', href: 'news.html', active: currentPage === 'news.html' || isNewsDetail, icon: '<path d="M5 3h12a2 2 0 0 1 2 2v15H7a2 2 0 0 1-2-2z"/><path d="M8 7h8M8 11h8M8 15h5M5 18a2 2 0 0 0 2 2"/>' },
      { label: 'Mua sắm', href: 'https://soyn.vn/', external: true, icon: '<path d="M3 5h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7"/><circle cx="10" cy="21" r="1"/><circle cx="18" cy="21" r="1"/>' },
      { label: 'Liên hệ', href: 'contact.html', active: currentPage === 'contact.html', icon: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/>' }
    ];
    const style = document.createElement('style');
    style.textContent = `.mobile-bottom-nav{display:none}@media(max-width:820px){body{padding-bottom:calc(82px + env(safe-area-inset-bottom))}.mobile-bottom-nav{position:fixed;z-index:190;left:0;right:0;bottom:0;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding:8px 6px calc(7px + env(safe-area-inset-bottom));background:rgba(255,255,255,.96);border-top:1px solid rgba(18,18,18,.11);box-shadow:0 -12px 34px rgba(0,0,0,.08);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}.mobile-bottom-nav a{position:relative;min-width:0;min-height:57px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#9aa4a2;font-size:clamp(.58rem,2.5vw,.72rem);font-weight:600;line-height:1.05;text-align:center;white-space:nowrap}.mobile-bottom-nav a::before{content:"";position:absolute;top:-8px;left:16%;right:16%;height:3px;border-radius:0 0 4px 4px;background:transparent}.mobile-bottom-nav svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.mobile-bottom-nav a.active{color:var(--accent-ink)}.mobile-bottom-nav a.active::before{background:var(--accent)}}`;
    document.head.appendChild(style);
    const nav = document.createElement('nav');
    nav.className = 'mobile-bottom-nav';
    nav.setAttribute('aria-label', 'Điều hướng nhanh trên thiết bị di động');
    nav.innerHTML = items.map(item => `<a href="${item.href}"${item.active ? ' class="active" aria-current="page"' : ''}${item.external ? ' target="_blank" rel="noopener"' : ''}><svg viewBox="0 0 24 24" aria-hidden="true">${item.icon}</svg><span>${item.label}</span></a>`).join('');
    document.body.appendChild(nav);
  }
  addMobileBottomNav();

  function addChatButtons() {
    const style = document.createElement('style');
    style.textContent = `.chat-actions{position:fixed;right:18px;bottom:22px;z-index:180;display:flex;flex-direction:column;gap:10px;align-items:flex-end}.chat-action{display:flex;align-items:center;gap:10px;min-height:48px;padding:8px 14px 8px 10px;border-radius:999px;color:#fff;font-size:.82rem;font-weight:700;box-shadow:0 10px 28px rgba(0,0,0,.18)}.chat-action-icon{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.18);font-size:.8rem;font-weight:800}.chat-action svg{width:21px;height:21px;fill:currentColor}.chat-action.zalo{background:#0068ff}.chat-action.messenger{background:#168aff}@media(max-width:820px){.chat-actions{right:12px;bottom:calc(91px + env(safe-area-inset-bottom));gap:8px}.chat-action{width:48px;height:48px;min-height:48px;padding:0;justify-content:center}.chat-action span:last-child{display:none}.chat-action-icon{width:48px;height:48px;background:transparent}}`;
    document.head.appendChild(style);
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-actions';
    wrapper.innerHTML = `<a class="chat-action zalo" href="https://zalo.me/0899456699" target="_blank" rel="noopener noreferrer" aria-label="Nhắn tin Zalo cho Soyn"><span class="chat-action-icon">Zalo</span><span>Nhắn Zalo</span></a><a class="chat-action messenger" href="https://m.me/soyn.vn" target="_blank" rel="noopener noreferrer" aria-label="Nhắn tin Fanpage Soyn"><span class="chat-action-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.45 5.51 3.72 7.2V22l3.4-1.87c.91.25 1.87.37 2.88.37 5.52 0 10-4.14 10-9.25S17.52 2 12 2Zm1 12.46-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.92-2.72L13 14.46Z"/></svg></span><span>Nhắn Fanpage</span></a>`;
    document.body.appendChild(wrapper);
  }
  addChatButtons();

  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 }) : null;
  $$('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  function projectCard(item) {
    return `<article class="card reveal"><a href="detail.html?type=project&slug=${encodeURIComponent(item.slug)}" aria-label="Xem ${item.title}"><div class="card-media">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}" loading="lazy">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</div><div class="card-body"><div class="card-meta"><span>${item.category}</span><time datetime="${item.date}">${item.year || formatDate(item.date)}</time></div><h3>${item.title}</h3><p>${item.excerpt}</p><span class="card-link">Xem dự án <span aria-hidden="true">↗</span></span></div></a></article>`;
  }
  function storyRow(item) {
    return `<article class="story-card reveal"><a class="story-thumb" href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}" loading="lazy">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</a><div><div class="card-meta"><span>${item.category}</span><time datetime="${item.date}">${formatDate(item.date)}</time></div><h3><a href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}">${item.title}</a></h3><p>${item.excerpt}</p></div><a class="story-arrow" href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}" aria-label="Đọc ${item.title}">↗</a></article>`;
  }
  const featuredProjects = $('[data-featured-projects]');
  if (featuredProjects) {
    const unique = [...new Map(data.projects.map(item => [item.slug, item])).values()];
    featuredProjects.innerHTML = unique.slice(0, 3).map(projectCard).join('');
  }
  const latestStories = $('[data-latest-stories]');
  if (latestStories) latestStories.innerHTML = data.posts.slice(0, 3).map(storyRow).join('');
})();