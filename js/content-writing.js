    // Initialize AOS
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    });

    // Back to top
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            if (mobileOverlay) mobileOverlay.classList.toggle('active');
        });

        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileOverlay.classList.remove('active');
            });
        }

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                if (mobileOverlay) mobileOverlay.classList.remove('active');
            });
        });

        // Mobile dropdown toggle
        const navDropdowns = document.querySelectorAll('.nav-dropdown');
        navDropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                }
            });
        });
    }

    // FAQ Accordion
    function toggleFaq(element) {
        const faqItem = element.parentElement;
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }

    // Form submissions
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your message has been received. Our content specialist will contact you within 24 hours with a free sample and proposal.');
        this.reset();
    });
    document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Subscribed successfully! Welcome to the DK Tech X content writing tips newsletter.');
        this.reset();
    });