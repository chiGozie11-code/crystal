// for image slider/
$(document).ready(function () {
  $("#owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,
    // onInitialized: startAnimation,
    // onTranslated: startAnimation,
    onInitialized: animateText,
    onTranslated: animateText,


  });
  function animateText(event) {
    // Remove the 'show' class from all text animations
    $('.text-animation').removeClass('show');

    // Add the 'show' class to the text animation in the current slide
    var currentSlide = event.item.index + 1;
    $('.owl-item:nth-child(' + currentSlide + ') .text-animation').addClass('show');
  }
});


function startAnimation() {
  // Add and remove the 'animate__animated' class to restart the animation
  $('.owl-item.active h1, .owl-item.active p').removeClass('animate__animated').css('opacity', '0');
  $('.owl-item.active h1, .owl-item.active p').addClass('animate__animated').css('opacity', '1');
  
}
// the end/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});

$(document).ready(function () {
  $("#little-sliders").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 200,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,


  });
});

$(document).ready(function () {
  $("#mobile-view").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 200,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,


  });
});




$(document).ready(function () {
  $("#quote-slides").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: false,
    smartSpeed: false,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,


  });
});


$(document).ready(function () {
  $("#little-quote-slides").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: false,
    smartSpeed: false,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,


  });
});

const nav = document.querySelector("#mobile-nav");
const click = document.querySelector(".ham");
const cliker = document.querySelector(".fa-solid fa-bars fa-2xl");
click.addEventListener('click', () => {
  nav.style.display = "block";
});
function closeNav() {
  document.querySelector("#mobile-nav").style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");
  const collable = document.querySelector(".content-collasible");

  for (const collapsible of collapsibles) {
    collapsible.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const activeCollapsible = document.querySelector(".collapsible.active");

      if (activeCollapsible) {
        activeCollapsible.classList.remove("active");
        activeCollapsible.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      content.style.display = "block";
      collapsible.addEventListener("onclick", () => {
              
      })
    });
  }
});

// change toggle



function changeTab() {
  const changetab1 = document.querySelector("#tab-1");
  const changetab2 = document.querySelector("#tab-2");
  const btn1 = document.querySelector("#Year");
  const btn2 = document.querySelector("#month");
  btn1.addEventListener("click", () => {
    changetab1.style.display = "none";
    changetab2.style.display = "flex"
    btn1.style.backgroundColor = "rgb(16, 76, 186)";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "white";
    btn2.style.color = "black";
  });
  btn2.addEventListener("click", () => {
    changetab1.style.display = "flex";
    changetab2.style.display = "none";
    btn1.style.backgroundColor = "white";
    btn1.style.color = "black";
    btn2.style.backgroundColor = "rgb(16, 76, 186)";
    btn2.style.color = "white";
  })
};

document.addEventListener('DOMContentLoaded', function () {
  // Set the target number
  const targetNumber = 847;


  // Get the count element
  const countElement = document.getElementById('count');

  // Function to update the count
  function updateCount(count) {
    countElement.textContent = count;
  }

  // Function to start the count-up animation
  function startCountUp() {
    let count = 0;

    // Update the count every 10 milliseconds
    const intervalId = setInterval(function () {
      count++;
      updateCount(count);

      // Stop the count-up animation when the target number is reached
      if (count === targetNumber) {
        clearInterval(intervalId);
      }
    }, 100);
  }

  // Start the count-up animation when the page is loaded
  startCountUp();
});



