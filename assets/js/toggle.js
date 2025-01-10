
// This doesn't work yet and is ugly, I am working on it - Alex


// Night Mode Toggle

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check and apply saved mode
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    }

    // Toggle function
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
    });
});