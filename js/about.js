  // ========== HEADER SCROLL EFFECT ==========
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ========== MOBILE NAV TOGGLE ==========
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // ========== SCROLL REVEAL ANIMATION ==========
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // ========== STATS COUNTER ANIMATION ==========
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statEl = entry.target;
                    const target = parseInt(statEl.getAttribute('data-target'));
                    const suffix = '+';
                    let current = 0;
                    const duration = 2000;
                    const step = Math.ceil(target / (duration / 16));

                    const counter = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            statEl.textContent = target + suffix;
                            clearInterval(counter);
                        } else {
                            statEl.textContent = current + suffix;
                        }
                    }, 16);

                    statsObserver.unobserve(statEl);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => statsObserver.observe(stat));

        // ========== FAQ ACCORDION ==========
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        });

        // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        console.log('%c DK Tech X %c About Us Page Loaded Successfully! ',
            'background:#1a56db;color:#fff;padding:10px 20px;border-radius:8px;font-size:15px;font-weight:bold;',
            'color:#1a56db;font-size:14px;');
        console.log('%c White + Blue + Black Theme %c✓',
            'color:#0f172a;', 'color:#1a56db;font-weight:bold;');