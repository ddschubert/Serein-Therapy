document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements
    // We use simpler selectors to ensure they catch the elements regardless of nesting
    const hamburger = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.nav-list ul');
    const menu_items = document.querySelectorAll('.nav-list ul li a');
    const header = document.querySelector('#header .header');

    // 2. Safety Check: Only run if elements exist
    if (hamburger && mobile_menu) {
        
        // Toggle Menu on Click
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });

        // Close menu when a link is clicked (useful for anchor links)
        menu_items.forEach((item) => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobile_menu.classList.remove('active');
            });
        });
    }

    // 3. Blog Header Scroll Effect
    // On the blog, the header is usually dark by default. 
    // This ensures it stays dark or reacts to scroll as you prefer.
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.backgroundColor = '#081b24';
                header.style.boxShadow = '0px 2px 10px rgba(0,0,0,0.3)';
            } else {
                // If you want it to stay dark on the blog, keep this as the dark hex code
                header.style.backgroundColor = '#081b24';
                header.style.boxShadow = 'none';
            }
        });
    }
});