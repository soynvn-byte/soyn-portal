(function(){
  const root=document.querySelector('[data-detail]');
  const data=window.SOYN_DATA;
  if(!root||!data)return;
  const params=new URLSearchParams(window.location.search);
  const type=params.get('type')==='project'?'project':'post';
  const slug=params.get('slug');
  const list=type==='project'?data.projects:data.posts;
  const item=Array.isArray(list)?list.find(x=>x.slug===slug):null;
  if(!item)return;

  const hero=root.querySelector('.detail-hero .container');
  if(hero&&!hero.querySelector('.detail-breadcrumb')){
    const breadcrumb=document.createElement('nav');
    breadcrumb.className='detail-breadcrumb';
    breadcrumb.setAttribute('aria-label','Breadcrumb');
    breadcrumb.innerHTML=`<a href="index.html">Trang chủ</a><span class="sep">/</span><a href="${type==='project'?'projects.html':'news.html'}">${type==='project'?'Dự án':'Tin tức'}</a><span class="sep">/</span><span aria-current="page">${item.category||item.title}</span>`;
    hero.prepend(breadcrumb);
  }

  const article=root.querySelector('.article');
  if(article&&!article.querySelector('.article-cta')){
    const cta=document.createElement('section');
    cta.className='article-cta';
    cta.innerHTML=`<h2>${type==='project'?'Bạn đang cần giải pháp tranh cho dự án?':'Bạn cần tư vấn chọn tranh cho không gian?'}</h2><p>Soyn hỗ trợ tư vấn phong cách, kích thước, bố cục và phương án hoàn thiện phù hợp với từng không gian.</p><div class="actions"><a class="btn btn-dark" href="https://zalo.me/0899456699" target="_blank" rel="noopener">Nhắn Zalo</a><a class="btn btn-light" href="https://m.me/soyn.vn" target="_blank" rel="noopener">Nhắn Fanpage</a><a class="btn btn-ghost" href="https://soyn.vn/" target="_blank" rel="noopener">Xem sản phẩm ↗</a></div>`;
    article.appendChild(cta);
  }

  if(type==='post'&&Array.isArray(data.posts)){
    const related=data.posts.filter(post=>post.slug!==slug).sort((a,b)=>{
      const ac=a.category===item.category?1:0;
      const bc=b.category===item.category?1:0;
      return bc-ac||new Date(b.date)-new Date(a.date);
    }).slice(0,3);
    if(related.length&&!root.querySelector('.related-section')){
      const section=document.createElement('section');
      section.className='related-section';
      section.innerHTML=`<div class="container"><div class="section-head"><div><span class="eyebrow">Đọc thêm</span><h2>Bài viết liên quan</h2></div><p>Khám phá thêm các hướng dẫn và cảm hứng trang trí từ Soyn.</p></div><div class="related-grid">${related.map(post=>`<article class="related-card"><a href="detail.html?type=post&slug=${encodeURIComponent(post.slug)}"><div class="related-card-media">${post.coverImage?`<img src="${post.coverImage}" alt="${post.title}" loading="lazy">`:`<div class="art ${post.art||''}" role="img" aria-label="${post.title}"></div>`}</div><div class="related-card-body"><div class="card-meta"><span>${post.category||''}</span></div><h3>${post.title}</h3></div></a></article>`).join('')}</div></div>`;
      root.querySelector('article')?.appendChild(section);
    }
  }
})();
