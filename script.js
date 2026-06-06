document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Header background adjustments on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Dynamic active state styling for nav items
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile navigation drawer toggle
  mobileNavToggle.addEventListener('click', () => {
    mobileNavToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile navigation when a menu link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Mouse-controlled ambient glow blob position updates
  const glowBlob = document.querySelector('.glow-blob');
  if (glowBlob) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY; // adjust for page scroll position
      glowBlob.style.left = `${x - 200}px`;
      glowBlob.style.top = `${y - 200}px`;
    });
  }
});
