document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar-custom');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const mobileMenuBtn = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (mobileMenuBtn && navbarCollapse) {
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                if (navbarCollapse.classList.contains('show')) {
                    mobileMenuBtn.click();
                }
            }
        });

        navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    mobileMenuBtn.click();
                }
            });
        });
    }

    const newsletterForm = document.querySelector('.footer-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (validateEmail(email)) {
                alert('Thank you for subscribing!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
