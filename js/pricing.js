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

    // Billing toggle
    function toggleBilling(type, btn) {
      const buttons = document.querySelectorAll('.toggle-option');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // In production, you would update prices here
      console.log('Billing switched to:', type);
    }

    // FAQ toggle
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          icon.style.transform = 'rotate(0deg)';
        } else {
          answer.style.display = 'block';
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    // Initialize FAQ answers hidden
    document.querySelectorAll('.faq-answer').forEach(answer => {
      answer.style.display = 'none';
    });