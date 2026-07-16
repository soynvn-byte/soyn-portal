(function () {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') === 'project' ? 'project' : 'post';
  const slug = params.get('slug');
  const list = type === 'project' ? window.SOYN_DATA.projects : window.SOYN_DATA.posts;
  const item = list.find(x => x.slug === slug);
  const root = document.querySelector('[data-detail]');
  if (!root) return;
  if (!item) {
    document.title = 'Không tìm thấy nội dung · Soyn';
    root.innerHTML = `<section class="section"><div class="container"><div class="empty-state"><h1>Không tìm thấy nội dung</h1><p>Đường dẫn có thể đã thay đổi.</p><a class="btn btn-dark" href="index.html">Về trang chủ</a></div></div></section>`;
    return;
  }
  document.title = `${item.title} · Soyn`;
  const articleSections = item.content.map(section => `<h2>${section.heading}</h2>${section.paragraphs.map(p => `<p>${p}</p>`).join('')}`).join('');
  const factRow = item.facts?.length ? `<div class="project-facts">${item.facts.map(fact => `<div><strong>${fact.value}</strong><span>${fact.label}</span></div>`).join('')}</div>` : '';
  const gallery = item.gallery?.length ? `<section class="project-gallery-section"><div class="container"><div class="section-head"><div><span class="eyebrow">Project gallery</span><h2>Hành trình hoàn thiện không gian</h2></div><p>Từ kiểm tra thành phẩm, thi công đến những góc nội thất sau khi hoàn thiện.</p></div><div class="project-gallery-grid">${item.gallery.map(image => `<figure class="project-gallery-item ${image.layout || 'landscape'}"><img src="${image.src}" alt="${image.alt}" loading="lazy"><figcaption>${image.caption}</figcaption></figure>`).join('')}</div></div></section>` : '';
  root.innerHTML = `<article>
    <header class="detail-hero"><div class="container"><span class="eyebrow">${type === 'project' ? 'Dự án' : 'Bài viết'}</span><h1>${item.title}</h1><div class="detail-meta"><span>${item.category}</span><time datetime="${item.date}">${item.year || window.formatSoynDate(item.date)}</time></div>${factRow}</div></header>
    <div class="detail-cover">${item.coverImage ? `<img src="${item.coverImage}" alt="${item.title}">` : `<div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div>`}</div>
    <div class="container article-layout"><aside class="article-aside"><strong>${type === 'project' ? 'Soyn Project' : 'Soyn Stories'}</strong><p>${item.excerpt}</p></aside><div class="article">${type === 'project' ? '<div class="notice">Dự án thực tế do Soyn triển khai.</div>' : ''}${articleSections}${type === 'post' && item.sourceUrl ? `<div class="source-box"><strong>Nguồn bài viết</strong><p>Nội dung được Soyn biên tập và phát triển từ kênh chính thức.</p><a class="btn btn-light" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceLabel || 'Xem nguồn gốc'} <span aria-hidden="true">↗</span></a></div>` : ''}</div></div>${gallery}
  </article>`;
})();
