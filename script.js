document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Load saved theme
    if (localStorage.getItem('ref-theme') === 'dark') {
        html.classList.add('dark');
        themeIcon.innerText = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeIcon.innerText = '🌙';
            localStorage.setItem('ref-theme', 'light');
        } else {
            html.classList.add('dark');
            themeIcon.innerText = '☀️';
            localStorage.setItem('ref-theme', 'dark');
        }
    });
});