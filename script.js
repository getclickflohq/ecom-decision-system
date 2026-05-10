(function(){
  const cards = Array.from(document.querySelectorAll('.dashboard-card'));
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  const close = document.getElementById('lightboxClose');
  if(!cards.length || !lightbox || !img) return;
  cards.forEach(card => card.addEventListener('click', () => {
    const cardImg = card.querySelector('img');
    const title = card.querySelector('strong')?.textContent || '';
    const desc = card.querySelector('span')?.textContent || '';
    img.src = cardImg.src;
    img.alt = cardImg.alt || title;
    if(cap) cap.textContent = title + (desc ? ' — ' + desc : '');
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }));
  function hide(){
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  close?.addEventListener('click', hide);
  lightbox?.addEventListener('click', e => { if(e.target === lightbox) hide(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') hide(); });
})();
