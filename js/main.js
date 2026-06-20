/* =============================================
   CASA EVENTO — main.js
   ============================================= */

// ---- Year in footer ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Sticky header shadow ----
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---- Mobile menu toggle ----
const menuBtn = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('main-nav-mobile');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
    // Animate bars
    const bars = menuBtn.querySelectorAll('span');
    if (!isOpen) {
      bars[0].style.transform = 'translateY(7px) rotate(45deg)';
      bars[1].style.opacity  = '0';
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity  = '';
      bars[2].style.transform = '';
    }
  });

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
      const bars = menuBtn.querySelectorAll('span');
      bars[0].style.transform = '';
      bars[1].style.opacity  = '';
      bars[2].style.transform = '';
    });
  });
}

// ---- Intersection Observer: fade-in on scroll ----
const fadeTargets = document.querySelectorAll(
  '.product-card, .contact-card, .about-text, .about-visual, .trust-item'
);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  fadeTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 60 * (entry.target.dataset.delay || 0));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Stagger cards
  document.querySelectorAll('.product-card').forEach((el, i) => {
    el.dataset.delay = i;
  });
  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.dataset.delay = i;
  });

  fadeTargets.forEach(el => observer.observe(el));
}

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}
