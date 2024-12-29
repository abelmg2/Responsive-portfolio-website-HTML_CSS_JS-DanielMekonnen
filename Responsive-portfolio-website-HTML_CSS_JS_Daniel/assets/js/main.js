/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){

  const header = document.getElementById('header')

  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader)



/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal')

      modalBtns  = document.querySelectorAll('.services__button')

      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){

  modalViews[modalClick].classList.add('active-modal')

}



modalBtns.forEach((mb, i) => {

  mb.addEventListener('click', () => {

    modal(i)

  })

})



modalClose.forEach((mc) => {

  mc.addEventListener('click', () => {

    modalViews.forEach((mv) => {

      mv.classList.remove('active-modal')

    })

  })

})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {

  selectors: {

      target: '.work__card'

  },

  animation: {

      duration: 300

  }

});



/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){

    linkWork.forEach(l=> l.classList.remove('active-work'))

    this.classList.add('active-work')

}



linkWork.forEach(l=> l.addEventListener('click',activeWork))



/*=============== SWIPER TESTIMONIAL ===============*/

var swiperTestimonial = new Swiper(".testimonial__container", {

    spaceBetween: 24,

    loop: true,

    grabCursor: true,

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

    },

    breakpoints: {

      576: {

        slidesPerView: 2,

      },

      768: {

        slidesPerView: 2,

        spaceBetween: 48,

      },

    },

  });



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');

      // Check if the element exists before trying to access its classList
      const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              link.classList.add('active-link');
          } else {
              link.classList.remove('active-link');
          }
      }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 

const themeButton = document.getElementById('theme-button')

const lightTheme = 'light-theme'

const iconTheme = 'bx-sun'



const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')



const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'



if(selectedTheme){

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)

  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)

}



themeButton.addEventListener('click', () => {

  document.body.classList.toggle(lightTheme)

  themeButton.classList.toggle(iconTheme)



  localStorage.setItem('selected-theme', getCurrentTheme())

  localStorage.setItem('selected-icon', getCurrentIcon())

})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})

// Store the language preference in localStorage
function toggleLanguage() {
  const englishContent = document.getElementById("english-content");
  const amharicContent = document.getElementById("amharic-content");
  const toggleButton = document.querySelector(".btn-toggle");

  if (englishContent.classList.contains("active")) {
      englishContent.classList.remove("active");
      amharicContent.classList.add("active");
      toggleButton.textContent = "Switch to English";
      localStorage.setItem("language", "amharic"); // Save preference
  } else {
      englishContent.classList.add("active");
      amharicContent.classList.remove("active");
      toggleButton.textContent = "አማረኛ ቋንቋ";
      localStorage.setItem("language", "english");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const englishHome = document.getElementById("english-home");
  const amharicHome = document.getElementById("amharic-home");
  const toggleButton = document.querySelector(".btn-toggle");
  const elements = document.querySelectorAll('.your-selector');
  elements.forEach((el) => el.classList.add('active'));
  // On page load, check for saved language preference
  const savedLanguage = localStorage.getItem("language") || "english";
    if (savedLanguage === "amharic") {
        englishHome.classList.remove("active");
        amharicHome.classList.add("active");
    } else {
        englishHome.classList.add("active");
        amharicHome.classList.remove("active");
    }
});

function changeLanguage(language) {
  if (language === 'english') {
      document.getElementById('english-home').classList.add('active');
      document.getElementById('amharic-home').classList.remove('active');
  } else if (language === 'amharic') {
      document.getElementById('english-home').classList.remove('active');
      document.getElementById('amharic-home').classList.add('active');
  }
}

// Call this function when language is changed (e.g., on button click)
changeLanguage('amharic'); // or 'english' based on user choice


// Toggle language on button click
/* toggleButton.addEventListener("click", () => {
  if (englishHome.classList.contains("active")) {
      englishHome.classList.remove("active");
      amharicHome.classList.add("active");
      localStorage.setItem("language", "amharic");
  } else {
      englishHome.classList.add("active");
      amharicHome.classList.remove("active");
      localStorage.setItem("language", "english");
  }
});  */
// On page load, check for saved language preference
/* document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "amharic") {
        document.getElementById("english-content").classList.remove("active");
        document.getElementById("amharic-content").classList.add("active");
        document.querySelector(".btn-toggle").textContent = "Switch to English";
    }
}); */
