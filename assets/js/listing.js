(function () {
  const data = window.SOYN_DATA;
  const root = document.querySelector('[data-listing]');
  if (!root) return;

  const type = root.dataset.listing;
  const sourceItems = type === 'projects' ? data.projects : data.posts;
  const uniqueItems = [...new Map(sourceItems.map(item => [item.slug, item])).values()]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  const categories = ['Tất cả', ...new Set(uniqueItems.map(item => item.category))];
  const filters = document.querySelector('[data-filters]');

  filters.innerHTML = categories.map((category, index) => `<button class="filter-btn${index === 0 ? ' active' : ''}" type="button" data-category="${category}">${category}</button>`).join('');

  function render(category = 'Tất cả') {
    const visible = category === 'Tất cả' ? uniqueItems : uniqueItems.filter(item => item.category === category);
    root.innerHTML = visible.map(item => `<article class="card">
      <a href="detail.html?type=${type === 'projects' ? 'project' : 'post'}&slug=${encodeURIComponent(item.slug)}">
        <div class="card-media">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}" loading="lazy">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</div>
        <div class="card-body"><div class="card-meta"><span>${item.category}</span><time>${item.year || window.formatSoynDate(item.date)}</time></div><h3>${item.title}</h3><p>${item.excerpt}</p><span class="card-link">${type === 'projects' ? 'Xem dự án' : 'Đọc bài viết'} <span aria-hidden="true">↗</span></span></div>
      </a>
    </article>`).join('') || '<div class="empty-state">Chưa có nội dung trong nhóm này.</div>';
  }

  render();
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    filters.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.category);
  });
})();