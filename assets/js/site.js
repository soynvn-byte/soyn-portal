(function () {
  const data = window.SOYN_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function formatDate(input) {
    return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(input + 'T00:00:00'));
  }
  window.formatSoynDate = formatDate;

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
    style.textContent = `
      .mobile-bottom-nav{display:none}
      @media (max-width:820px){
        body{padding-bottom:calc(82px + env(safe-area-inset-bottom))}
        .mobile-bottom-nav{position:fixed;z-index:190;left:0;right:0;bottom:0;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding:8px 6px calc(7px + env(safe-area-inset-bottom));background:rgba(255,255,255,.96);border-top:1px solid rgba(18,18,18,.11);box-shadow:0 -12px 34px rgba(0,0,0,.08);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}
        .mobile-bottom-nav a{position:relative;min-width:0;min-height:57px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#9aa4a2;font-size:clamp(.58rem,2.5vw,.72rem);font-weight:600;line-height:1.05;text-align:center;white-space:nowrap}
        .mobile-bottom-nav a::before{content:"";position:absolute;top:-8px;left:16%;right:16%;height:3px;border-radius:0 0 4px 4px;background:transparent}
        .mobile-bottom-nav svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
        .mobile-bottom-nav a.active{color:var(--accent-ink)}
        .mobile-bottom-nav a.active::before{background:var(--accent)}
        .mobile-bottom-nav a:active{transform:translateY(1px)}
      }
      @media (max-width:390px){
        .mobile-bottom-nav{padding-left:2px;padding-right:2px}
        .mobile-bottom-nav a{font-size:.57rem}
        .mobile-bottom-nav svg{width:22px;height:22px}
      }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('nav');
    nav.className = 'mobile-bottom-nav';
    nav.setAttribute('aria-label', 'Điều hướng nhanh trên thiết bị di động');
    nav.innerHTML = items.map(item => `<a href="${item.href}"${item.active ? ' class="active" aria-current="page"' : ''}${item.external ? ' target="_blank" rel="noopener"' : ''}><svg viewBox="0 0 24 24" aria-hidden="true">${item.icon}</svg><span>${item.label}</span></a>`).join('');
    document.body.appendChild(nav);
  }
  addMobileBottomNav();

  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 }) : null;
  $$('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  function projectCard(item) {
    return `<article class="card reveal">
      <a href="detail.html?type=project&slug=${encodeURIComponent(item.slug)}" aria-label="Xem ${item.title}">
        <div class="card-media">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}" loading="lazy">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</div>
        <div class="card-body">
          <div class="card-meta"><span>${item.category}</span><time datetime="${item.date}">${item.year || formatDate(item.date)}</time></div>
          <h3>${item.title}</h3><p>${item.excerpt}</p>
          <span class="card-link">Xem dự án <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>`;
  }

  function storyRow(item) {
    return `<article class="story-card reveal">
      <a class="story-thumb" href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}"><div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div></a>
      <div><div class="card-meta"><span>${item.category}</span><time datetime="${item.date}">${formatDate(item.date)}</time></div><h3><a href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}">${item.title}</a></h3><p>${item.excerpt}</p></div>
      <a class="story-arrow" href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}" aria-label="Đọc ${item.title}">↗</a>
    </article>`;
  }

  const featuredProjects = $('[data-featured-projects]');
  if (featuredProjects) {
    featuredProjects.innerHTML = data.projects.slice(0, 3).map(projectCard).join('');
    featuredProjects.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
  }
  const latestStories = $('[data-latest-stories]');
  if (latestStories) {
    latestStories.innerHTML = data.posts.slice(0, 3).map(storyRow).join('');
    latestStories.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
  }
})();