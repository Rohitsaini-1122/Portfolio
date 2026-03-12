        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(element => {
            observer.observe(element);
        });
  
  // Click on a card to activate the video (enables iframe interaction)
  // Click again anywhere outside to deactivate
  function activateReel(card) {
    // If already playing, do nothing (let iframe handle)
    if (card.classList.contains('playing')) return;

    // Deactivate any other playing cards
    document.querySelectorAll('.reel-card.playing')
      .forEach(c => c.classList.remove('playing'));

    card.classList.add('playing');
  }

  // Click outside cards to reset
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.reel-card')) {
      document.querySelectorAll('.reel-card.playing')
        .forEach(c => c.classList.remove('playing'));
    }
  });

       



        