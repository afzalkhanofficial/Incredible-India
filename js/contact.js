// --- Main Contact Form ---
var contactForm = document.getElementById('mainContactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var firstName = document.getElementById('firstName').value;
        var email = document.getElementById('email').value;

        var btn = contactForm.querySelector('button[type="submit"]');
        var originalText = btn.innerHTML;

        btn.disabled = true;
        btn.innerHTML = 'Sending...';

        setTimeout(function () {
            alert('Thank you, ' + firstName + '! Your message has been sent. We will contact you at ' + email + ' shortly.');
            contactForm.reset();
            btn.disabled = false;
            btn.innerHTML = originalText;
        }, 1000);
    });
}

// --- FAQ Accordion ---
var faqItems = document.querySelectorAll('.contact-faq-item');

function setupContactFaq(item) {
    var question = item.querySelector('.contact-faq-question');
    var answer = item.querySelector('.contact-faq-answer');
    var arrow = item.querySelector('.contact-faq-arrow');

    if (!question || !answer || !arrow) return;

    question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all other FAQs
        for (var j = 0; j < faqItems.length; j++) {
            var otherItem = faqItems[j];
            var otherAnswer = otherItem.querySelector('.contact-faq-answer');
            var otherArrow = otherItem.querySelector('.contact-faq-arrow');

            otherItem.classList.remove('active');
            if (otherAnswer) otherAnswer.style.maxHeight = '0';
            if (otherArrow) otherArrow.textContent = 'expand_more';
        }

        // Open the clicked one if it wasn't already open
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.textContent = 'expand_less';
        }
    });
}

for (var i = 0; i < faqItems.length; i++) {
    setupContactFaq(faqItems[i]);
}

// --- Page Newsletter Form ---
var newsletterSectionBtn = document.querySelector('.btn-newsletter');
var newsletterSectionInput = document.querySelector('.newsletter-input');

if (newsletterSectionBtn && newsletterSectionInput) {
    newsletterSectionBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var email = newsletterSectionInput.value.trim();
        if (email && email.indexOf('@') !== -1) {  // Replaced .includes with .indexOf for maximum compatibility/simplicity
            alert('Thank you for subscribing to our newsletter!');
            newsletterSectionInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

