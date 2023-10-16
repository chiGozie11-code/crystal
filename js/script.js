// for image slider/
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 900,
      autoplayHoverPause: true,
      touchDrag  : true,
      mouseDrag  : true,

  
    });
  });
  // the end/
  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrolled = window.scrollY > 0;
    header.classList.toggle('scrolled', scrolled);
  });
  // $(document).ready(function () {
  //   $("#little-sliders").owlCarousel({
  //     items: 1,
  //     loop: true,
  //     dots: true,
  //     autoplay: true,
  //     autoplayTimeout: 10000,
  //     smartSpeed: 200,
  //     autoplayHoverPause: true,
  //     touchDrag  : true,
  //     mouseDrag  : true,

  
  //   });
  // });

  const nav = document.querySelector("#mobile-nav");
  const click = document.querySelector(".ham");
const cliker = document.querySelector(".fa-solid fa-bars fa-2xl");
click.addEventListener('click', () =>{
    nav.style.display = "block";
});
function closeNav() {
  document.querySelector("#mobile-nav").style.display = "none";
};

