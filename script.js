/**
 * Script untuk Portofolio David Teguh Pambudi
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;
    const icon = themeBtn.querySelector('i');

    // Fungsi ganti tema
    const toggleTheme = () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }

        // Opsional: Simpan preferensi di localStorage
        localStorage.setItem('theme', newTheme);
    };

    // Load tema yang disimpan sebelumnya
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeBtn.addEventListener('click', toggleTheme);
});
