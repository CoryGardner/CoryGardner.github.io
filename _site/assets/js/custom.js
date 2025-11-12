// ==========================================
// Particle.js Configuration for Hero Background
// ==========================================

if (document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// ==========================================
// Stats Counter Animation
// ==========================================

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        if (!counter.classList.contains('animated')) {
          counter.classList.add('animated');
          animateCounter(counter);
        }
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  counterObserver.observe(statsSection);
}

// ==========================================
// Research Projects Filtering
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const researchCards = document.querySelectorAll('.research-card-enhanced');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    
    researchCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'flex';
        card.classList.add('fade-in');
      } else {
        const category = card.getAttribute('data-category');
        if (category === filter) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

// ==========================================
// Publications Filtering
// ==========================================

const pubFilterButtons = document.querySelectorAll('.pub-filter-btn');
const publications = document.querySelectorAll('.publication-enhanced');

pubFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    pubFilterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    
    publications.forEach(pub => {
      if (filter === 'all') {
        pub.style.display = 'block';
        pub.classList.add('fade-in');
      } else {
        const type = pub.getAttribute('data-type');
        if (type === filter) {
          pub.style.display = 'block';
          pub.classList.add('fade-in');
        } else {
          pub.style.display = 'none';
        }
      }
    });
  });
});

// ==========================================
// Skill Bars Animation on Scroll
// ==========================================

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillLevels = entry.target.querySelectorAll('.skill-level');
      skillLevels.forEach((level, index) => {
        setTimeout(() => {
          level.style.width = level.getAttribute('data-level') + '%';
        }, index * 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ==========================================
// Smooth Scroll for Internal Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ==========================================
// Back to Top Button
// ==========================================

const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563EB, #14B8A6);
  color: white;
  border: none;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  z-index: 1000;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopButton.addEventListener('mouseenter', () => {
  backToTopButton.style.transform = 'translateY(-5px) scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
  backToTopButton.style.transform = 'translateY(0) scale(1)';
});

// ==========================================
// Fade-in Animation on Scroll for Cards
// ==========================================

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe various card elements
const elementsToFadeIn = document.querySelectorAll(`
  .highlight-card,
  .featured-card,
  .research-card-enhanced,
  .publication-enhanced,
  .experience-card,
  .award-item
`);

elementsToFadeIn.forEach(element => {
  fadeInObserver.observe(element);
});

// ==========================================
// Dark Mode Toggle (Optional)
// ==========================================

// Uncomment to enable dark mode toggle
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--light-gray);
  border: 2px solid var(--medium-gray);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  z-index: 1001;
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = darkModeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.className = 'fas fa-sun';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.className = 'fas fa-moon';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.querySelector('i').className = 'fas fa-sun';
}
*/

// ==========================================
// Prevent Fade-in Animation on Page Load
// ==========================================

window.addEventListener('load', () => {
  // Remove fade-in class from elements that are already visible
  document.querySelectorAll('.fade-in').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
});

console.log('Custom scripts loaded successfully!');
