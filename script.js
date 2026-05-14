document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalitat Menú Mòbil Hamburguesa
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Tancar menú en fer clic en un enllaç
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Canviar fons del navbar en fer scroll per millorar la lectura
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(18,18,18,0.9) 0%, rgba(18,18,18,0) 100%)';
        }
    });

    // 2. Efecte Fade-in i Slide-up en fer scroll Reveal
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealOptions = {
        threshold: 0.1, // S'activa quan el 10% de l'element és visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    revealElements.forEach(el => revealObserver.observe(el));

    // Activar immediatament els elements que ja estan en pantalla per exemple Hero
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

    // 3. Efecte Parallax molt subtil per a les imatges de fons cinematogràfiques
    const parallaxBgs = document.querySelectorAll('.parallax-bg, .footer-bg');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        parallaxBgs.forEach(bg => {
            let speed = 0.3;
            bg.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
});