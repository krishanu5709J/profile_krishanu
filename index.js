document.addEventListener('DOMContentLoaded', () => {
    // Reusable Continuous Typing & Erasing Animation Function
    function startTypingEffect(elementId, textToType, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) {
        const textElement = document.getElementById(elementId);
        if (!textElement) return;

        let charIndex = 0;
        let isDeleting = false;

        function loop() {
            if (!isDeleting) {
                textElement.textContent = textToType.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === textToType.length) {
                    setTimeout(() => { isDeleting = true; loop(); }, pauseTime);
                    return;
                }
                setTimeout(loop, typingSpeed);
            } else {
                textElement.textContent = textToType.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    setTimeout(() => { isDeleting = false; loop(); }, 500);
                    return;
                }
                setTimeout(loop, deletingSpeed);
            }
        }

        setTimeout(loop, 500);
    }

    // Apply continuous alternate typing animation to all headings
    startTypingEffect('typedText', 'KRISHANU');
    startTypingEffect('typedCoding', 'CODING_KNOWLEDGE');
    startTypingEffect('typedGaming', 'GAMING_INTEREST');
    startTypingEffect('typedCourses', 'COURSE_INFO');
    startTypingEffect('typedContact', 'INITIALIZE_CONTACT');

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
            });
        });
    }

    // Theme Switcher (Dark Mode <-> Light Sky Blue Mode)
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    }
});
