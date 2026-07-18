(function () {
  if (!window.SOYN_DATA || !Array.isArray(window.SOYN_DATA.posts)) return;

  const covers = {
    "trang-tri-khong-gian-song-voi-tranh-canvas": "news/news_01.jpg",
    "tranh-treo-tuong-co-that-su-can-thiet": "news/news_04.jpg",
    "de-tranh-len-tieng-ve-gu-tham-my": "news/news_09.jpg",
    "art-clock-khi-thoi-gian-tro-thanh-nghe-thuat": "news/news_02.jpg",
    "suc-hut-cua-tranh-truu-tuong-toi-gian": "news/news_10.jpg",
    "mix-match-tranh-cho-goc-sofa": "news/news_07.jpg"
  };

  window.SOYN_DATA.posts.forEach(function (post) {
    if (covers[post.slug]) post.coverImage = covers[post.slug];
  });
})();
