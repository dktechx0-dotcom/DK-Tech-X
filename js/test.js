// Logo error fallback
    function handleLogoError() {
      const img = document.getElementById('logoImage');
      const fallback = document.querySelector('.fallback-text');
      if (img) img.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
    }

    // Mobile menu toggle
    const toggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (toggle) {
      toggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
          navMenu.style.display = 'none';
        } else {
          navMenu.style.display = 'flex';
          navMenu.style.flexDirection = 'column';
          navMenu.style.position = 'absolute';
          navMenu.style.top = '72px';
          navMenu.style.left = '0';
          navMenu.style.width = '100%';
          navMenu.style.background = '#ffffff';
          navMenu.style.padding = '24px';
          navMenu.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
          navMenu.style.zIndex = '999';
          navMenu.style.gap = '16px';
        }
      });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.featured-card, .testimonial-card, .video-card').forEach(el => {
      observer.observe(el);
    });