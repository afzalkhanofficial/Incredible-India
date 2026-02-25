// --- Sticky Navbar Shadow ---
var navbar = document.querySelector('.navbar-custom');

if (navbar) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// --- Smooth Scrolling ---
var anchors = document.querySelectorAll('a[href^="#"]');

function setupSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            var navbarHeight = navbar ? navbar.offsetHeight : 0;
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

for (var i = 0; i < anchors.length; i++) {
    setupSmoothScroll(anchors[i]);
}

// --- Mobile Menu Toggle ---
var mobileMenuBtn = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

if (mobileMenuBtn && navbarCollapse) {
    document.addEventListener('click', function (e) {
        if (!navbarCollapse.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (navbarCollapse.classList.contains('show')) {
                mobileMenuBtn.click();
            }
        }
    });

    var navLinks = navbarCollapse.querySelectorAll('.nav-link');

    function setupMobileMenuLink(link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                mobileMenuBtn.click();
            }
        });
    }

    for (var j = 0; j < navLinks.length; j++) {
        setupMobileMenuLink(navLinks[j]);
    }
}

// --- Footer Newsletter Form ---
var newsletterForm = document.querySelector('.footer-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailInput = newsletterForm.querySelector('input[type="email"]');
        var email = emailInput.value.trim();

        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

