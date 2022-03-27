const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

/*Input field focus and blur animations*/
footer_input.addEventListener("focus", function(){
footer_input.classList.add("focus");
});


footer_input.addEventListener("blur", function(){
  if(footer_input.value != "")return;
    footer_input.classList.remove("focus");


  });

function closeMenu(){
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}



  hamburger_menu.addEventListener("click", function(){
    if(!navbar.classList.contains("open")){
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    }else{
      closeMenu();
    }
  });


links.forEach((link) => link.addEventListener("click", function(){closeMenu()} ));


filter_btns.forEach( (btn) => {btn.addEventListener("click", function(){
  filter_btns.forEach(button => button.classList.remove("active"));
  btn.classList.add('active');


  let filterValue = btn.dataset.filter;

  $(".grid").isotope({filter:filterValue});

});
});

$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s'
  });



  window.addEventListener("scroll", function(){
    skillsEffect();
    countUp();
  });


  /*Checks how much distance we have the div*/
  function checkScroll(element){/*???? */
    let rect = element.getBoundingClientRect();
    /*Windows`s height >= element`s top position + element`s height */
    /*If we exceed the bottom edge of the skills div*/
    if(window.innerHeight >= rect.top + element.offsetHeight) return true;
    return false;
  }

  function skillsEffect(){
    if(!checkScroll(skills_wrap)) return;
    skills_bars.forEach(skill => skill.style.width = skill.dataset.progress);
  }

  function countUp(){/*???? */
    if(!checkScroll(records_wrap)) return;
     records_numbers.forEach(numb => {
       const updateCount = function(){
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 100;
        const increment = Math.ceil(maxNum / speed);

        if(currentNum < maxNum){
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 1);
        }else{
          numb.innerText = maxNum;
        }

       };
      setTimeout(updateCount, 400);
     });
  }

//SWIPER Library

const swiper = new Swiper('.swiper-container', {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});
