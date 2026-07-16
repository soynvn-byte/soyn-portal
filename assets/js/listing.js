(function () {
  const data = window.SOYN_DATA;
  const root = document.querySelector('[data-listing]');
  if (!root) return;
  const type = root.dataset.listing;
  const items = type === 'projects' ? data.projects : data.posts;
  const categories = ['Tất cả', ...new Set(items.map(x => x.category))];
  const filters = document.querySelector('[data-filters]');

  filters.innerHTML = categories.map((c, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" type="button" data-category="${c}">${c}</button>`).join('');

  function render(category = 'Tất cả') {
    const visible = category === 'Tất cả' ? items : items.filter(x => x.category === category);
    root.innerHTML = visible.map(item => `<article class="card">
      <a href="detail.html?type=${type === 'projects' ? 'project' : 'post'}&slug=${encodeURIComponent(item.slug)}">
        <div class="card-media">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}" loading="lazy">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</div>
        <div class="card-body"><div class="card-meta"><span>${item.category}</span><time>${item.year || window.formatSoynDate(item.date)}</time></div><h3>${item.title}</h3><p>${item.excerpt}</p><span class="card-link">${type === 'projects' ? 'Xem dự án' : 'Đọc bài viết'} <span aria-hidden="true">↗</span></span></div>
      </a>
    </article>`).join('') || '<div class="empty-state">Chưa có nội dung trong nhóm này.</div>';
  }
  render();
  filters.addEventListener('click', event => {
    const btn = event.target.closest('[data-category]');
    if (!btn) return;
    filters.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.category);
  });
})();
