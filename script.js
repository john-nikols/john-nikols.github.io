
/* Navigation scroll effect */
window.addEventListener('scroll', function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

/* Highlight active nav link */
(function highlightActive() {
  try {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path) a.classList.add('active');
    });
  } catch {}
})();

/* Intersection Observer for animations */
const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, observerOptions);

function triggerAnimations() {
  const animatedElements = document.querySelectorAll('.project-card, .selection-card');
  animatedElements.forEach(el => observer.observe(el));
}

window.addEventListener('load', () => {
  triggerAnimations();
  // Stagger selection cards on portfolio page
  const selectionCards = document.querySelectorAll('.selection-card');
  setTimeout(() => selectionCards.forEach(card => card.classList.add('visible')), 300);
});
