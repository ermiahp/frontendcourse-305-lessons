let next = document.getElementById('next');
let prev = document.getElementById('prev');


let screenWidth  = window.innerWidth;

let isMobile = screenWidth < 420;

console.log(screenWidth);
$(document).ready(function(){
    $('.team-members').slick({
        dots: isMobile,
        infinite: true,
        speed: 300,
        slidesToShow: isMobile ? 1: 4,
        slidesToScroll: 1,
        nextArrow: next,
        prevArrow: prev,
      });
  });