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
  root.innerHTML = `<article>
    <header class="detail-hero"><div class="container"><span class="eyebrow">${type === 'project' ? 'Dự án' : 'Bài viết'}</span><h1>${item.title}</h1><div class="detail-meta"><span>${item.category}</span><time datetime="${item.date}">${window.formatSoynDate(item.date)}</time>${item.demo ? '<span class="badge">Nội dung mẫu</span>' : ''}</div></div></header>
    <div class="detail-cover"><div class="art ${item.art}" role="img" aria-label="Hình minh họa cho ${item.title}"></div></div>
    <div class="container article-layout"><aside class="article-aside"><strong>${type === 'project' ? 'Soyn Project' : 'Soyn Stories'}</strong><p>${item.excerpt}</p></aside><div class="article"><div class="notice">${item.demo ? 'Đây là nội dung minh họa. Hãy thay bằng dữ liệu, hình ảnh và URL bài đăng thật trong tệp assets/js/content.js.' : 'Nội dung thuộc Portal Soyn.'}</div>${articleSections}<div class="source-box"><strong>Nguồn nội dung</strong><p>Bài viết hoặc dự án có thể được phát triển từ nội dung trên fanpage Soyn.</p><a class="btn btn-light" href="${item.facebookUrl}" target="_blank" rel="noopener noreferrer">Xem trên Facebook <span aria-hidden="true">↗</span></a></div></div></div>
  </article>`;
})();
