function toggleMode() {
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    footer.classList.toggle('dark-mode');
}