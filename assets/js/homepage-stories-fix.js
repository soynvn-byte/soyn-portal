(function () {
  function formatDate(input) {
    try {
      return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
        .format(new Date(input + 'T00:00:00'));
    } catch (_) {
      return input || '';
    }
  }

  function renderStories() {
    const root = document.querySelector('[data-latest-stories]');
    const data = window.SOYN_DATA;
    if (!root || !data || !Array.isArray(data.posts)) return;

    const posts = [...new Map(data.posts.map(item => [item.slug, item])).values()]
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
      .slice(0, 3);

    if (!root.children.length) {
      root.innerHTML = posts.map(item => `
        <article class="story-card visible">
          <a class="story-thumb" href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}">
            ${item.coverImage
              ? `<img src="${item.coverImage}" alt="${item.title}" loading="eager" decoding="async">`
              : `<div class="art ${item.art || ''}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}
          </a>
          <div>
            <div class="card-meta"><span>${item.category || ''}</span><time datetime="${item.date || ''}">${formatDate(item.date)}</time></div>
            <h3><a href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}">${item.title}</a></h3>
            <p>${item.excerpt || ''}</p>
          </div>
          <a class="story-arrow" href="detail.html?type=post&slug=${encodeURIComponent(item.slug)}" aria-label="Đọc ${item.title}">↗</a>
        </article>`).join('');
    }

    root.querySelectorAll('.story-card').forEach(card => {
      card.classList.add('visible');
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
  }

  function init() {
    renderStories();
    requestAnimationFrame(renderStories);
    setTimeout(renderStories, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();