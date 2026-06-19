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
          navMenu.style.top = '70px';
          navMenu.style.left = '0';
          navMenu.style.width = '100%';
          navMenu.style.background = 'white';
          navMenu.style.padding = '20px';
          navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
          navMenu.style.zIndex = '999';
        }
      });
    }

    // Filter buttons active class
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });