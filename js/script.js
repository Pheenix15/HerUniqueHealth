
/*****
navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }

    else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

})
********/
const nav = document.querySelector(".Nav");
const navToggle = document.querySelector(".nav-toggle");
const navToggleClose = document.querySelector(".nav-toggle-close")

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        document.querySelector('#nav-toggle-close').style.display = 'block';
        document.querySelector('#nav-toggle').style.display = 'none';
    }

})


navToggleClose.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'true') {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        document.querySelector('#nav-toggle-close').style.display = 'none';
        document.querySelector('#nav-toggle').style.display = 'block';
    }    
});

//MAKE NAVBAR STICK TO TOP

const headers = document.querySelectorAll('.header, .main-header');
const offset = Array.from(headers).map(el => el.offsetTop); //BECAUSE ".querySelectorAll" PUTS ALL ELEMENTS IN AN ARRAY, MAP THROUGH THE ARRAY AND ADD THE "offsetTop" TO EACH ELEMENT IN THE LIST.

window.addEventListener('scroll', () => {
  headers.forEach((el, i) => {
    if (window.pageYOffset > offset[i]) {
        el.classList.add("fixed");
    } else {
        el.classList.remove("fixed");
    }
  });
});

/*========SWIPER==========*/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: 'true'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1, 
        },
        520:{
            slidesPerView: 2, 
        },
        920:{
            slidesPerView: 3, 
        },
    }
  });