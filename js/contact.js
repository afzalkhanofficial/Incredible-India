document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('mainContactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = 'Sending...';

            setTimeout(() => {
                alert(`Thank you, ${firstName}! Your message has been sent. We will contact you at ${email} shortly.`);
                contactForm.reset();
                btn.disabled = false;
                btn.innerHTML = originalText;
            }, 1000);
        });
    }

    const faqItems = document.querySelectorAll('.contact-faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.contact-faq-question');
        const answer = item.querySelector('.contact-faq-answer');
        const arrow = item.querySelector('.contact-faq-arrow');

        if (question && answer && arrow) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                faqItems.forEach((otherItem) => {
                    const otherAnswer = otherItem.querySelector('.contact-faq-answer');
                    const otherArrow = otherItem.querySelector('.contact-faq-arrow');

                    otherItem.classList.remove('active');
                    if (otherAnswer) otherAnswer.style.maxHeight = '0';
                    if (otherArrow) otherArrow.textContent = 'expand_more';
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    arrow.textContent = 'expand_less';
                }
            });
        }
    });

    const newsletterSectionBtn = document.querySelector('.btn-newsletter');
    const newsletterSectionInput = document.querySelector('.newsletter-input');

    if (newsletterSectionBtn && newsletterSectionInput) {
        newsletterSectionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterSectionInput.value.trim();
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterSectionInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

});
