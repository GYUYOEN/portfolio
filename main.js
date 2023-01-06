const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.nav-link');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const scrollMove = document.getElementById("sroll-move");

scrollMove.click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
})