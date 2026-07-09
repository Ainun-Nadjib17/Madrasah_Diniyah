/* ============================================
   MADRASAH DINIYAH - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === Highlight Active Nav Link ===
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // === Mobile Nav Toggle ===
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // === Header Scroll Effect ===
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // === Scroll Reveal Animations ===
  const revealElements = document.querySelectorAll('.fade-up');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // === Hero Particles Animation ===
  const particlesContainer = document.querySelector('.hero-particles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 4 + 2;
      const posX = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.bottom = '-10px';
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      particlesContainer.appendChild(particle);
    }
  }

  // === Counter Animation ===
  const counters = document.querySelectorAll('.counter');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target'));
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easeOut * targetValue);
          
          target.textContent = currentValue + (target.getAttribute('data-suffix') || '');
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = targetValue + (target.getAttribute('data-suffix') || '');
          }
        }
        
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // === Smooth Scroll for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === Gallery Lightbox ===
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const icon = this.querySelector('.gallery-icon')?.textContent || '🖼️';
      
      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
          <div class="lightbox-icon">${icon}</div>
          <p class="lightbox-caption">${this.querySelector('.gallery-caption')?.textContent || 'Dokumentasi Kegiatan'}</p>
          <button class="lightbox-close">&times;</button>
        </div>
      `;
      
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';
      
      // Animate in
      requestAnimationFrame(() => {
        lightbox.classList.add('active');
      });
      
      // Close handlers
      const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
          lightbox.remove();
          document.body.style.overflow = '';
        }, 300);
      };
      
      lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
      lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
      
      document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', closeOnEscape);
        }
      });
    });
  });

  // === Active Page Indicator ===
  console.log('🌙 Madrasah Diniyah - Website loaded successfully');
});

// === Page-specific init functions (called from individual pages) ===
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      const body = accordion.querySelector('.accordion-body');
      const isActive = accordion.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.accordion.active').forEach(a => {
        a.classList.remove('active');
        a.querySelector('.accordion-body').style.maxHeight = '0';
      });
      
      if (!isActive) {
        accordion.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}
