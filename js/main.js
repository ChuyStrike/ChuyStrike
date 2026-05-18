/**
 * Main.js - Funcionalidad principal del portafolio
 * Estructura modular y reutilizable
 * Con animaciones Framer Motion (Motion)
 */

// ============================================
// MÓDULO: ANIMACIONES CON MOTION (FRAMER)
// ============================================

const MotionAnimationModule = (() => {
    /**
     * Inicializa animaciones con Motion
     */
    const init = () => {
        animateHero();
        animateOnScroll();
    };

    /**
     * Anima la sección Hero al cargar
     */
    const animateHero = () => {
        const { animate } = window.Motion;

        // Animar título
        const title = document.querySelector('.hero__title--animated');
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(20px)';
            
            animate(
                title,
                { opacity: 1, transform: 'translateY(0)' },
                { duration: 0.8, delay: 0.2 }
            );
        }

        // Animar subtítulo
        const subtitle = document.querySelector('.hero__subtitle--animated');
        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(20px)';
            
            animate(
                subtitle,
                { opacity: 1, transform: 'translateY(0)' },
                { duration: 0.8, delay: 0.4 }
            );
        }

        // Animar botones
        const buttons = document.querySelector('.hero__buttons--animated');
        if (buttons) {
            buttons.style.opacity = '0';
            buttons.style.transform = 'translateY(20px)';
            
            animate(
                buttons,
                { opacity: 1, transform: 'translateY(0)' },
                { duration: 0.8, delay: 0.6 }
            );
        }
    };

    /**
     * Anima tarjetas al entrar en vista
     */
    const animateOnScroll = () => {
        const { animate } = window.Motion;

        const cards = document.querySelectorAll(
            '.skill-card, .project-card'
        );

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';

                    animate(
                        entry.target,
                        { opacity: 1, transform: 'translateY(0)' },
                        { duration: 0.6, ease: 'easeOut' }
                    );

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach(card => observer.observe(card));
    };

    return {
        init
    };
})();

// ============================================
// MÓDULO: NAVEGACIÓN MÓVIL
// ============================================

const NavigationModule = (() => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.header__link');

    /**
     * Inicializa los event listeners de navegación
     */
    const init = () => {
        if (!menuToggle) return;

        menuToggle.addEventListener('click', toggleMenu);
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', handleOutsideClick);
    };

    /**
     * Alterna el estado del menú
     */
    const toggleMenu = () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
    };

    /**
     * Establece el estado del menú
     * @param {boolean} isOpen - Si el menú debe estar abierto
     */
    const setMenuState = (isOpen) => {
        menuToggle.setAttribute('aria-expanded', isOpen);
        navMenu.classList.toggle('active', isOpen);
    };

    /**
     * Cierra el menú
     */
    const closeMenu = () => {
        setMenuState(false);
    };

    /**
     * Maneja clicks fuera del menú
     * @param {Event} event - Evento del click
     */
    const handleOutsideClick = (event) => {
        const isMenuOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        if (!isMenuOpen) return;

        const isClickInsideNav = event.target.closest('.header__nav');
        if (!isClickInsideNav) {
            closeMenu();
        }
    };

    return {
        init
    };
})();

// ============================================
// MÓDULO: ANIMACIONES DE SCROLL
// ============================================

const ScrollAnimationModule = (() => {
    /**
     * Observa elementos y los anima cuando entran en vista
     */
    const init = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar todas las tarjetas
        const cards = document.querySelectorAll(
            '.skill-card, .project-card'
        );
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all var(--transition-slow)';
            observer.observe(card);
        });
    };

    return {
        init
    };
})();

// ============================================
// MÓDULO: SMOOTH SCROLL PARA ENLACES
// ============================================

const SmoothScrollModule = (() => {
    /**
     * Agrega smooth scroll a los enlaces internos
     */
    const init = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
    };

    /**
     * Maneja el click en enlaces
     * @param {Event} event - Evento del click
     */
    const handleLinkClick = (event) => {
        const href = event.currentTarget.getAttribute('href');
        
        if (href === '#') {
            event.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        
        // El scroll suave está habilitado en CSS (html { scroll-behavior: smooth; })
        target.scrollIntoView();
    };

    return {
        init
    };
})();

// ============================================
// MÓDULO: UTILIDADES
// ============================================

const UtilsModule = (() => {
    /**
     * Log en consola para desarrollo
     * @param {string} message - Mensaje a mostrar
     * @param {string} type - Tipo de log (log, warn, error)
     */
    const log = (message, type = 'log') => {
        if (process.env.NODE_ENV !== 'production') {
            console[type](message);
        }
    };

    /**
     * Verifica si el navegador soporta una función
     * @param {string} featureName - Nombre de la característica
     * @returns {boolean}
     */
    const isSupported = (featureName) => {
        const features = {
            intersectionObserver: 'IntersectionObserver' in window,
            fetch: 'fetch' in window,
            localStorage: 'localStorage' in window,
            motion: 'Motion' in window
        };
        return features[featureName] || false;
    };

    return {
        log,
        isSupported
    };
})();

// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================

const App = (() => {
    /**
     * Inicializa todos los módulos
     */
    const init = () => {
        // Esperar a que Motion esté disponible
        if (UtilsModule.isSupported('motion')) {
            MotionAnimationModule.init();
            UtilsModule.log('Motion (Framer Motion) cargado ✨');
        } else {
            UtilsModule.log(
                'Motion no disponible, usando animaciones CSS',
                'warn'
            );
            ScrollAnimationModule.init();
        }

        NavigationModule.init();
        SmoothScrollModule.init();

        UtilsModule.log('Portafolio cargado correctamente 🚀');
    };

    return {
        init
    };
})();

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App.init);
} else {
    App.init();
}

