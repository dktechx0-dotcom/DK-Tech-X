/* ============================================
   DK TECH X - NAVIGATION & ACTIVE LINKS
   ============================================ */

(function() {
    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Add scrolled class on page load if already scrolled
    if (window.scrollY > 100) {
        document.getElementById('header')?.classList.add('scrolled');
    }
})();