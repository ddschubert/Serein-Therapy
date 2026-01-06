/* ======================================================
   HAMBURGER MENU + HEADER BEHAVIOR
====================================================== */

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const menu_items = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('#header .header');

/* Guard against pages without nav */
if (hamburger && mobile_menu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });

  menu_items.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobile_menu.classList.remove('active');
    });
  });
}

/* Header background on scroll */
if (header) {
  document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    header.style.backgroundColor =
      scroll_position > 250 ? '#081b24' : 'transparent';
  });
}

/* ======================================================
   FADE-IN FROM RIGHT
====================================================== */

const faders = document.querySelectorAll('.fade-right');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(
  function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  appearOptions
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* ======================================================
   REVEAL ON SCROLL
====================================================== */

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        if (entry.target.classList.contains('about-section')) {
          entry.target.classList.add('is-visible');
        }

        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => revealObserver.observe(el));

/* ======================================================
   ACCORDION
====================================================== */

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {

    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});
