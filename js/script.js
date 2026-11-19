/* =================================================
   Brunei Tourism Guide - Main JavaScript
================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------
       1. Mobile Navigation Toggle
    --------------------------------------------- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ---------------------------------------------
       2. Dark Mode Toggle (Kain Tenunan Style)
    --------------------------------------------- */
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = 'Light Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.textContent = 'Dark Mode';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let targetTheme = 'light';
            if (document.documentElement.getAttribute('data-theme') !== 'dark') {
                targetTheme = 'dark';
            }

            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            themeToggle.textContent = targetTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        });
    }

    /* ---------------------------------------------
       3. Interactive Image Lightbox Modal
    --------------------------------------------- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    if (lightbox && lightboxImg) {
        triggers.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Enlarged preview';
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }

    /* ---------------------------------------------
       4. Contact / Visitor Enquiry Form Handler
    --------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate form submission success
            contactForm.reset();
            formFeedback.style.display = 'block';

            // Hide feedback message after 5 seconds
            setTimeout(() => {
                formFeedback.style.display = 'none';
            }, 5000);
        });
    }

});