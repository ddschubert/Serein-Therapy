// Select elements
const hamburger = document.querySelector('#header .hamburger');
const mobileMenu = document.querySelector('#header .nav-list ul');
const menuItems = document.querySelectorAll('#header .nav-list ul li a');

// Toggle hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close menu when clicking a link
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});
