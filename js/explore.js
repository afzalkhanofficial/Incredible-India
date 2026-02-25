// --- FAQ Accordion ---
var faqItems = document.querySelectorAll('.explore-faq-item');

function setupExploreFaq(item) {
    var question = item.querySelector('.explore-faq-question');
    var answer = item.querySelector('.explore-faq-answer');
    var arrow = item.querySelector('.explore-faq-arrow');

    if (!question || !answer || !arrow) return;

    question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all other FAQs
        for (var j = 0; j < faqItems.length; j++) {
            var otherItem = faqItems[j];
            var otherAnswer = otherItem.querySelector('.explore-faq-answer');
            var otherArrow = otherItem.querySelector('.explore-faq-arrow');

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
    setupExploreFaq(faqItems[i]);
}

