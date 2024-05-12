// Import Anime.js library
import anime from 'animejs/lib/anime.es.js';

// Define animations
const headerAnimation = anime.timeline({
  targets: '.header-content',
  easing: 'easeOutExpo'
});

headerAnimation
  .add({
    translateY: ['-50px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    scale: [0.8, 1],
    duration: 1000
  });

const sectionAnimation = anime.timeline({
  targets: '.section-content',
  easing: 'easeOutExpo',
  delay: anime.stagger(200)
});

sectionAnimation
  .add({
    translateY: ['-50px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    scale: [0.8, 1],
    duration: 1000
  });

const hostAnimation = anime.timeline({
  targets: '.host',
  easing: 'easeOutExpo',
  delay: anime.stagger(200)
});

hostAnimation
  .add({
    translateY: ['-50px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    scale: [0.8, 1],
    duration: 1000
  });

// Add more animations as needed


// Import Anime.js library
import anime from 'animejs/lib/anime.es.js';

// Define animations
const headerAnimation = anime.timeline({
  targets: '.header-content',
  easing: 'easeOutExpo'
});

headerAnimation
  .add({
    translateY: ['-50px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    scale: [0.8, 1],
    duration: 1000
  });

const sectionAnimation = anime.timeline({
  targets: '.section-content',
  easing: 'easeOutExpo',
  delay: anime.stagger(200)
});

sectionAnimation
  .add({
    translateY: ['-50px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    scale: [0.8, 1],
    duration: 1000
  });

const hostAnimation = anime.timeline({
  targets: '.host',
  easing: 'easeOutExpo',
  delay: anime.stagger(200)
});

hostAnimation
  .add({
    translateY: ['-50px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    scale: [0.8, 1],
    duration: 1000
  });

// Additional animations
const footerAnimation = anime({
  targets: 'footer',
  translateY: ['50px', '0'],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 800
});

const navLinksAnimation = anime({
  targets: '.header-nav a',
  translateY: ['20px', '0'],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  delay: anime.stagger(100),
  duration: 800
});
