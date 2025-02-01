// main.js

// Function to handle navigation between pages
function navigateTo(page) {
    window.location.href = page;
}

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('href');
            navigateTo(page);
        });
    });
});