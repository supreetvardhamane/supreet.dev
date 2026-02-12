// Minimal JavaScript for Supreet.dev
// No overengineering. Just what's needed.

// 1. Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2025', year);
    }

    // 2. Active nav link highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Terminal cursor blink effect (optional)
    const cursor = document.querySelector('.hero-text p:last-child');
    if (cursor && cursor.innerHTML.includes('$ _')) {
        setInterval(() => {
            if (cursor.style.opacity === '0.5') {
                cursor.style.opacity = '1';
            } else {
                cursor.style.opacity = '0.5';
            }
        }, 500);
    }
});

// 4. Simple console message for recruiters
console.log(`
╔═══════════════════════════════════╗
║                                   ║
║    🔍 recruiter? hey!             ║
║    this site is hand-built        ║
║    no frameworks, just learning   ║
║    - supreet (18, cs student)     ║
║                                   ║
╚═══════════════════════════════════╝
`);
