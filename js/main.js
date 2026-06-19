/* ============================================
   DK TECH X - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========== PRELOADER ==========
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('preloader')?.classList.add('hidden');
        }, 1000);
    });

    // ========== AOS INIT ==========
    AOS.init({ duration: 800, once: true, offset: 50 });

    // ========== ELEMENTS ==========
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const backToTop = document.getElementById('backToTop');
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    // ========== STICKY HEADER ==========
    window.addEventListener('scroll', () => {
        header?.classList.toggle('scrolled', window.scrollY > 100);
        backToTop?.classList.toggle('active', window.scrollY > 500);
    });

    // ========== MOBILE MENU ==========
    function openMenu() {
        mobileToggle?.classList.add('active');
        navMenu?.classList.add('active');
        mobileOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        mobileOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }
    mobileToggle?.addEventListener('click', () => navMenu?.classList.contains('active') ? closeMenu() : openMenu());
    mobileOverlay?.addEventListener('click', closeMenu);
    navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    // ========== BACK TO TOP ==========
    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ========== VIDEO MODAL ==========
    document.getElementById('watchDemo')?.addEventListener('click', (e) => {
        e.preventDefault();
        videoFrame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
        videoModal?.classList.add('active');
    });
    document.querySelector('.video-close')?.addEventListener('click', () => {
        videoModal?.classList.remove('active');
        videoFrame.src = '';
    });
    videoModal?.addEventListener('click', (e) => {
        if (e.target === videoModal) { videoModal.classList.remove('active'); videoFrame.src = ''; }
    });

    // ========== COUNTER ANIMATION ==========
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    let current = 0;
                    const step = target / 80;
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) { counter.textContent = target; clearInterval(timer); }
                        else counter.textContent = Math.floor(current);
                    }, 20);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) counterObserver.observe(heroStats);

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ========== ACTIVE NAV LINK ==========
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section[id]').forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) current = section.getAttribute('id');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });

    // ========== FORM HANDLERS ==========
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('api/contact.php', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => { alert(data.message || 'Message sent!'); if (data.success) this.reset(); })
            .catch(() => { alert('Thank you! We will contact you soon.'); this.reset(); });
    });
    document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
        this.reset();
    });

    // ========== ESCAPE KEY ==========
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
            if (videoModal?.classList.contains('active')) { videoModal.classList.remove('active'); videoFrame.src = ''; }
        }
    });

    console.log('✅ DK Tech X - Blue Theme Ready!');
});// Function to handle logo image loading error
    function handleLogoError() {
        const container = document.getElementById('logoIconContainer');
        if (container) {
            container.classList.add('image-error');
        }
        console.warn('Logo image img/logo.png failed to load. Using fallback text DK.');
    }

    // Initialize AOS animation library
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    });
