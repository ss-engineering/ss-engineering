document.addEventListener('DOMContentLoaded', function(){
  const headerOffset = document.querySelector('header').offsetHeight + 8;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(!targetId.startsWith('#')) return;
      const target = document.querySelector(targetId);
      if(target){
        e.preventDefault();
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
});