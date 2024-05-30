let hamburger = document.querySelector('#menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');
let close = document.querySelector('#close');

hamburger.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden');
})

close.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
});


// Banner swiper
var swiper = new Swiper(".banner-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Append text in About section
let titles = document.querySelectorAll('.about-title');

for (let title of titles) {
    title.addEventListener('click', function (event) {
        title.nextElementSibling.classList.toggle('show');
    });
}


// Close mobile menu
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});


// Scroll to top

let scrollBtn = document.getElementById('scroll-Top');
scrollBtn.addEventListener('click', function () {
    window.scroll({ top: 0 });
});


window.addEventListener('scroll', function () {

    if (document.documentElement.scrollTop > 150) {
        scrollBtn.classList.add('visible');
    }
    else {
        scrollBtn.classList.remove('visible');
    }
});

