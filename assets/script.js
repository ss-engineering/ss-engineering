// assets/script.js

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav') || document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('active'));
  }

  // Smooth scroll with header offset
  const header = document.getElementById('site-header') || document.querySelector('.site-header') || document.querySelector('header');
  const headerHeight = header ? header.offsetHeight + 8 : 80;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const rect = target.getBoundingClientRect();
      const absoluteTop = rect.top + window.pageYOffset;
      const offsetTop = absoluteTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });

      // if mobile nav open, close it after click
      if (nav && nav.classList.contains('active')) nav.classList.remove('active');
    });
  });

  // Ensure clicking brand returns to top
  const brandLink = document.getElementById('brand-link');
  if (brandLink) {
    brandLink.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
