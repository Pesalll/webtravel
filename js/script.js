// toggle class active

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburg = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburg.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})