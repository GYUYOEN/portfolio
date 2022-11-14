const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.nav-link');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});