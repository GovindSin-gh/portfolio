/**
 * Govind Singh - Portfolio Logic
 * Focus: Performance and subtle UX enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Navigation Links
    const handleSmoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Offset for header
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // 2. Intersection Observer for "Reveal on Scroll"
    // This highlights the "Engineering Work" as the user reaches it.
    const revealOnScroll = () => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target); // Only reveal once
                }
            });
        }, observerOptions);

        // Apply starting state and observe project cards
        const targets = document.querySelectorAll('.project-card, .project-flagship, .section');
        targets.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "all 0.6s ease-out";
            observer.observe(el);
        });
    };

    // 3. Simple Console "Easter Egg" 
    // Engineers often check the console; this adds a touch of personality.
    const printIdentity = () => {
        console.log(
            "%c Govind Singh | ML & Backend Engineer %c",
            "background: #3b82f6; color: white; font-weight: bold; padding: 4px;",
            "background: transparent;"
        );
        console.log("Looking for the source? Check out the GitHub link in the hero section.");
    };

    // Initialize all functions
    handleSmoothScroll();
    revealOnScroll();
    printIdentity();
});