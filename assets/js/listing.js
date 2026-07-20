(function () {
  const data = window.SOYN_DATA;
  const root = document.querySelector('[data-listing]');
  if (!root || !data) return;

  const type = root.dataset.listing;
  const sourceItems = type === 'projects' ? data.projects : data.posts;
  const uniqueItems = [...new Map(sourceItems.map(item => [item.slug, item])).values()]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  const categories = ['Tất cả', ...new Set(uniqueItems.map(item => item.category))];
  const filters = document.querySelector('[data-filters]');
  const pageSize = type === 'posts' ? 12 : uniqueItems.length;
  let activeCategory = 'Tất cả';
  let currentPage = Math.max(1, Number(new URLSearchParams(window.location.search).get('page')) || 1);

  filters.innerHTML = categories.map((category, index) => `<button class="filter-btn${index === 0 ? ' active' : ''}" type="button" data-category="${category}">${category}</button>`).join('');

  const pagination = document.createElement('nav');
  pagination.className = 'listing-pagination';
  pagination.setAttribute('aria-label', 'Phân trang bài viết');
  root.insertAdjacentElement('afterend', pagination);

  const style = document.createElement('style');
  style.textContent = `
    .listing-pagination{display:flex;justify-content:center;align-items:center;gap:8px;flex-wrap:wrap;margin-top:42px}
    .listing-pagination button{min-width:42px;height:42px;padding:0 13px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--ink);cursor:pointer;font-weight:600}
    .listing-pagination button:hover,.listing-pagination button.active{background:var(--accent-ink);border-color:var(--accent-ink);color:#fff}
    .listing-pagination button:disabled{opacity:.35;cursor:not-allowed;background:#fff;color:var(--muted)}
    .listing-pagination .page-status{margin:0 8px;color:var(--muted);font-size:.82rem}
    @media(max-width:700px){.listing-pagination{margin-top:30px}.listing-pagination button{min-width:38px;height:38px;padding:0 11px;font-size:.82rem}.listing-pagination .page-status{width:100%;text-align:center;order:-1;margin-bottom:4px}}
  `;
  document.head.appendChild(style);

  function getFilteredItems() {
    return activeCategory === 'Tất cả'
      ? uniqueItems
      : uniqueItems.filter(item => item.category === activeCategory);
  }

  function updateUrl() {
    if (type !== 'posts') return;
    const url = new URL(window.location.href);
    if (currentPage > 1) url.searchParams.set('page', String(currentPage));
    else url.searchParams.delete('page');
    window.history.replaceState({}, '', url);
  }

  function renderPagination(totalItems) {
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    currentPage = Math.min(currentPage, totalPages);

    if (type !== 'posts' || totalPages <= 1) {
      pagination.innerHTML = '';
      pagination.hidden = true;
      return;
    }

    pagination.hidden = false;
    const pages = [];
    for (let i = 1; i <= totalPages; i += 1) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) pages.push(i);
    }

    let last = 0;
    const pageButtons = pages.map(page => {
      const gap = page - last > 1 ? '<span class="page-status" aria-hidden="true">…</span>' : '';
      last = page;
      return `${gap}<button type="button" data-page="${page}" class="${page === currentPage ? 'active' : ''}"${page === currentPage ? ' aria-current="page"' : ''}>${page}</button>`;
    }).join('');

    pagination.innerHTML = `
      <button type="button" data-page="prev" aria-label="Trang trước" ${currentPage === 1 ? 'disabled' : ''}>←</button>
      ${pageButtons}
      <button type="button" data-page="next" aria-label="Trang sau" ${currentPage === totalPages ? 'disabled' : ''}>→</button>
    `;
  }

  function render() {
    const filtered = getFilteredItems();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    const visible = filtered.slice(start, start + pageSize);

    root.innerHTML = visible.map(item => `<article class="card">
      <a href="detail.html?type=${type === 'projects' ? 'project' : 'post'}&slug=${encodeURIComponent(item.slug)}">
        <div class="card-media">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}" loading="lazy">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</div>
        <div class="card-body"><div class="card-meta"><span>${item.category}</span><time>${item.year || window.formatSoynDate(item.date)}</time></div><h3>${item.title}</h3><p>${item.excerpt}</p><span class="card-link">${type === 'projects' ? 'Xem dự án' : 'Đọc bài viết'} <span aria-hidden="true">↗</span></span></div>
      </a>
    </article>`).join('') || '<div class="empty-state">Chưa có nội dung trong nhóm này.</div>';

    renderPagination(filtered.length);
    updateUrl();
  }

  render();

  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    filters.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeCategory = button.dataset.category;
    currentPage = 1;
    render();
  });

  pagination.addEventListener('click', event => {
    const button = event.target.closest('[data-page]');
    if (!button || button.disabled) return;
    const filtered = getFilteredItems();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const target = button.dataset.page;

    if (target === 'prev') currentPage = Math.max(1, currentPage - 1);
    else if (target === 'next') currentPage = Math.min(totalPages, currentPage + 1);
    else currentPage = Number(target);

    render();
    const top = root.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();