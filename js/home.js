// --- Stats Animation Logic ---
var statsSection = document.getElementById('stats-section');
var statsAnimated = false;

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startCounter(counter) {
    if (counter.innerText !== "0") return;

    var targetStr = counter.getAttribute('data-target');
    var target = parseFloat(targetStr);
    var isInteger = (targetStr.indexOf('.') === -1);
    var current = 0;

    var steps = 66;
    var increment = target / steps;

    var timer = setInterval(function () {
        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (isInteger) {
            counter.innerText = Math.floor(current);
        } else {
            counter.innerText = current.toFixed(1);
        }

    }, 30);
}

function animateStatsOnScroll() {
    if (!statsSection || statsAnimated) return;

    if (isElementInViewport(statsSection)) {
        statsAnimated = true;

        var cards = statsSection.querySelectorAll('.stat-card');
        for (var i = 0; i < cards.length; i++) {
            // Using a simple setTimeout function instead of an IIFE for the cards
            // The index `i` might be an issue in a classic loop if not handled, 
            // but we can just use a helper function to avoid closure issues.
            showCard(cards[i], i);
        }

        var counters = statsSection.querySelectorAll('.stat-counter');
        for (var j = 0; j < counters.length; j++) {
            startCounter(counters[j]);
        }

        window.removeEventListener('scroll', animateStatsOnScroll);
    }
}

function showCard(card, index) {
    setTimeout(function () {
        card.classList.add('animate-visible');
    }, index * 100);
}

// Initial check in case it's already in view on load
animateStatsOnScroll();

// Listen for scroll events
window.addEventListener('scroll', animateStatsOnScroll);

// Note: Festivals drag-to-scroll functionality was removed to keep the JavaScript as basic as possible.
// Users can scroll horizontally using standard native scrollbars or trackpad gestures.

