document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const cards = entry.target.querySelectorAll('.stat-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-visible');
                    }, index * 100);
                });

                const counters = entry.target.querySelectorAll('.stat-counter');
                counters.forEach(counter => {
                    if (counter.innerText !== "0") return;

                    const target = parseFloat(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const startTime = performance.now();

                    const updateCounter = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const current = target * easeOutQuart;

                        if (Number.isInteger(target)) {
                            counter.innerText = Math.ceil(current);
                        } else {
                            counter.innerText = current.toFixed(1);
                        }

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    requestAnimationFrame(updateCounter);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    const festivalsScroll = document.querySelector('.festivals-scroll');

    if (festivalsScroll) {
        let isDown = false;
        let startX;
        let scrollLeft;

        festivalsScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            festivalsScroll.style.cursor = 'grabbing';
            startX = e.pageX - festivalsScroll.offsetLeft;
            scrollLeft = festivalsScroll.scrollLeft;
        });

        festivalsScroll.addEventListener('mouseleave', () => {
            isDown = false;
            festivalsScroll.style.cursor = 'grab';
        });

        festivalsScroll.addEventListener('mouseup', () => {
            isDown = false;
            festivalsScroll.style.cursor = 'grab';
        });

        festivalsScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - festivalsScroll.offsetLeft;
            const walk = (x - startX) * 2;
            festivalsScroll.scrollLeft = scrollLeft - walk;
        });
    }

});
