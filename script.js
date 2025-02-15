document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar ul li a");
    const sections = document.querySelectorAll("section");

    // Smooth scrolling to sections
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const yOffset = -80; // Adjust this value as needed to accommodate fixed header
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        });
    });

    // Highlight active menu item based on scroll position
    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});