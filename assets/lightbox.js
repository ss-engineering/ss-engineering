\
document.addEventListener('DOMContentLoaded', function(){
  const imgs = document.querySelectorAll('.gallery-grid img');
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class=\"lb-close\">✕</button><button class=\"lb-prev\">◀</button><img src=\"\" alt=\"\"><button class=\"lb-next\">▶</button>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const closeBtn = lb.querySelector('.lb-close');
  const prevBtn = lb.querySelector('.lb-prev');
  const nextBtn = lb.querySelector('.lb-next');
  let current = 0;
  const srcs = Array.from(imgs).map(i=>i.dataset.full);
  function open(index){
    current = index;
    lbImg.src = srcs[current];
    lb.classList.add('open');
  }
  function close(){ lb.classList.remove('open'); lbImg.src=''; }
  function prev(){ current = (current-1+srcs.length)%srcs.length; lbImg.src = srcs[current]; }
  function next(){ current = (current+1)%srcs.length; lbImg.src = srcs[current]; }
  imgs.forEach((img, idx)=> img.addEventListener('click', ()=> open(idx)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  lb.addEventListener('click', function(e){ if(e.target===lb) close(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); if(e.key==='ArrowLeft') prev(); if(e.key==='ArrowRight') next(); });
});\
