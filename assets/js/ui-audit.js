(function () {
  function improveHomepageStories() {
    const container = document.querySelector('[data-latest-stories]');
    if (!container || !window.SOYN_DATA) return;
    const posts = [...new Map(window.SOYN_DATA.posts.map(post => [post.slug, post])).values()]
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
      .slice(0, 3);

    posts.forEach((post, index) => {
      const card = container.querySelectorAll('.story-card')[index];
      const thumb = card && card.querySelector('.story-thumb');
      if (thumb && post.coverImage) {
        thumb.innerHTML = `<img src="${post.coverImage}" alt="${post.title}" loading="lazy">`;
      }
    });
  }

  function removeDuplicateFeaturedProjects() {
    const container = document.querySelector('[data-featured-projects]');
    if (!container) return;
    const seen = new Set();
    container.querySelectorAll('.card').forEach(card => {
      const link = card.querySelector('a[href*="slug="]');
      if (!link) return;
      const slug = new URL(link.href, window.location.href).searchParams.get('slug');
      if (seen.has(slug)) card.remove();
      else seen.add(slug);
    });
  }

  improveHomepageStories();
  removeDuplicateFeaturedProjects();
})();
