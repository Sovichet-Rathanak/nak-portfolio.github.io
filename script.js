document.addEventListener('DOMContentLoaded', () => {
    const aboutMeSection = document.querySelector('.about-me');
    const aboutMeContent = document.querySelector('.about-me-content');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('.footer-link');
    const typingHeader = document.querySelector('.typing-header');
    const nameHighlight = document.querySelector('.name-highlight');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Function to set the height of About Me content
    const setContentHeight = () => {
        if (aboutMeContent) {
            aboutMeSection.style.setProperty('--content-height', `${aboutMeContent.scrollHeight}px`);
        }
    };

    // Initialize content height
    setContentHeight();

    // Expand About Me section with animation
    let isExpanded = false;
    let expandInterval = setInterval(() => {
        if (!isExpanded) {
            aboutMeSection.classList.add('expanded');
            isExpanded = true;
            clearInterval(expandInterval);
        }
    }, 700);

    // Update content height on window resize
    window.addEventListener('resize', () => {
        setContentHeight();
    });

    // Add animation class to header
    if (header) {
        header.classList.add('animate-nav');
    }

    // Navigation button handlers
    document.getElementById('home-btn')?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    document.getElementById('education-btn')?.addEventListener('click', () => {
        window.location.href = 'education.html';
    });

    document.getElementById('experience-btn')?.addEventListener('click', () => {
        window.location.href = 'experience.html';
    });

    document.getElementById('projects-btn')?.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });

    // Project buttons
    document.getElementById('txt_btn')?.addEventListener('click', () => {
        window.location.href = 'https://team3webpro.vercel.app/';
    });

    document.getElementById('automata_btn')?.addEventListener('click', () => {
        window.location.href = 'https://darororo.github.io/fortnite-automaton/';
    });

    document.getElementById('game_btn')?.addEventListener('click', () => {
        window.location.href = 'https://pinkksoda.itch.io/wanderer';
    });

    // Function to apply dark mode based on local storage
    const applyDarkMode = () => {
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            if (header) header.classList.add('dark-mode');
            if (footer) footer.classList.add('dark-mode');
            if (typingHeader) typingHeader.classList.add('dark-mode');
            if (nameHighlight) nameHighlight.classList.add('dark-mode');

            buttons.forEach(button => {
                button.classList.add('dark-mode');
            });

            links.forEach(link => {
                link.classList.add('dark-mode');
            });
        } else {
            document.body.classList.remove('dark-mode');
            if (header) header.classList.remove('dark-mode');
            if (footer) footer.classList.remove('dark-mode');
            if (typingHeader) typingHeader.classList.remove('dark-mode');
            if (nameHighlight) nameHighlight.classList.remove('dark-mode');

            buttons.forEach(button => {
                button.classList.remove('dark-mode');
            });

            links.forEach(link => {
                link.classList.remove('dark-mode');
            });
        }
    };

    // Apply dark mode on page load
    applyDarkMode();

    // Dark Mode Toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');

            if (header) header.classList.toggle('dark-mode');
            if (footer) footer.classList.toggle('dark-mode');
            if (typingHeader) typingHeader.classList.toggle('dark-mode');
            if (nameHighlight) nameHighlight.classList.toggle('dark-mode');

            buttons.forEach(button => {
                button.classList.toggle('dark-mode');
            });

            links.forEach(link => {
                link.classList.toggle('dark-mode');
            });
        });
    }
});
