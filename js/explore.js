document.addEventListener('DOMContentLoaded', () => {

    const faqItems = document.querySelectorAll('.explore-faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.explore-faq-question');
        const answer = item.querySelector('.explore-faq-answer');
        const arrow = item.querySelector('.explore-faq-arrow');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach((otherItem) => {
                const otherAnswer = otherItem.querySelector('.explore-faq-answer');
                const otherArrow = otherItem.querySelector('.explore-faq-arrow');
                otherItem.classList.remove('active');
                otherAnswer.style.maxHeight = '0';
                otherArrow.textContent = 'expand_more';
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                arrow.textContent = 'expand_less';
            }
        });
    });

});
