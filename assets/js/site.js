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
        <div class="card-media"><div class="art ${item.art}" role="img" aria-label="Hình minh họa đơn sắc cho ${item.title}"></div>${item.demo ? '<span class="badge badge-overlay">Nội dung mẫu</span>' : ''}</div>
        <div class="card-body">
          <div class="card-meta"><span>${item.category}</span><time datetime="${item.date}">${formatDate(item.date)}</time></div>
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
