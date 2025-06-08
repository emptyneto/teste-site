document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });

                // Remove 'active' class from all links
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                // Add 'active' class to the clicked link
                this.classList.add('active');
            }
        });
    });

    // Add 'active' class to the current section link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Set 'active' class for 'home' on initial load
    const homeLink = document.querySelector('nav a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});