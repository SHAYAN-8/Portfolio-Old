


// #custom cursor script

  let cursor = document.getElementById("cursor");

        document.addEventListener("mousemove", function (event) {
            // Limit cursor's vertical position to not go beyond 100vh
            let cursorTop = Math.min(event.clientY, window.innerHeight - 100);

            cursor.style.left = event.clientX + "px";
            cursor.style.top = cursorTop + "px";
        });







// Wait for the document to be ready
$(document).ready(function () {
  // Sticky Navbar on Scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Show/Hide Scroll Up Button
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Scroll Up Button Click
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth Scroll on Menu Items Click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle Menu/Navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Text Animation
  new Typed(".typing", {
    strings: ["Programmers", "Web Developers", "Designers", "Freelancers"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  new Typed(".typing-2", {
    strings: ["Programmers", "Web Developers", "Designers", "Freelancers"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });
});

// COLOR POP UP JS
function colors() {
  for (let i = 0; i <= 4; i++) {
    document.getElementsByClassName("color")[i].classList.toggle("visible");
  }
}

// TEXT COLOR CHANGING JS

// Function to change text color to purple
function purple() {
  let root = document.querySelector(":root");
  let rootStyles = getComputedStyle(root);
  let currentColor = rootStyles.getPropertyValue("--main-color");
  root.style.setProperty("--main-color", "rgb(159, 56, 255)");
}

// Function to change text color to red
function red() {
  let root = document.querySelector(":root");
  let rootStyles = getComputedStyle(root);
  let currentColor = rootStyles.getPropertyValue("--main-color");
  root.style.setProperty("--main-color", "rgb(255, 0, 0)");
}

// Function to change text color to blue
function blue() {
  let root = document.querySelector(":root");
  let rootStyles = getComputedStyle(root);
  let currentColor = rootStyles.getPropertyValue("--main-color");
  root.style.setProperty("--main-color", "rgb(43, 149, 255)");
}

// Function to change text color to pink
function pink() {
  let root = document.querySelector(":root");
  let rootStyles = getComputedStyle(root);
  let currentColor = rootStyles.getPropertyValue("--main-color");
  root.style.setProperty("--main-color", "rgb(255, 0, 208)");
}

// Function to change text color to tomato
function tomato() {
  let root = document.querySelector(":root");
  let rootStyles = getComputedStyle(root);
  let currentColor = rootStyles.getPropertyValue("--main-color");
  root.style.setProperty("--main-color", "rgb(255, 95, 66)");
}



