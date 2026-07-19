(function () {
  function formatDate(input) {
    try {
      return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
        .format(new Date(input + 'T00:00:00'));
    } catch (_) {
      return input || '';
    }
  }

  function renderFeaturedProjects() {
    const root = document.querySelector('[data-featured-projects]');
    const data = window.SOYN_DATA;
    if (!root || !data || !Array.isArray(data.projects)) return;

    const projects = [...new Map(data.projects.map(item => [item.slug, item])).values()].slice(0, 3);

    if (!root.children.length) {
      root.innerHTML = projects.map(item => `
        <article class="card visible">
          <a href="detail.html?type=project&slug=${encodeURIComponent(item.slug)}" aria-label="Xem ${item.title}">
            <div class="card-media">${item.coverImage
              ? `<img src="${item.coverImage}" alt="${item.title}" loading="eager" decoding="async">`
              : `<div class="art ${item.art || ''}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}
            </div>
            <div class="card-body">
              <div class="card-meta"><span>${item.category || ''}</span><time datetime="${item.date || ''}">${item.year || formatDate(item.date)}</time></div>
              <h3>${item.title}</h3>
              <p>${item.excerpt || ''}</p>
              <span class="card-link">Xem dự án <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        </article>`).join('');
    }

    root.querySelectorAll('.card').forEach(card => {
      card.classList.add('visible');
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
  }

  function init() {
    renderFeaturedProjects();
    requestAnimationFrame(renderFeaturedProjects);
    setTimeout(renderFeaturedProjects, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
