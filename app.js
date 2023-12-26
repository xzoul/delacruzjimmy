var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  setTimeout(function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".typewrite > .wrap { border-right: 0.08em solid transparent}";
    document.body.appendChild(css);
  }, 4000); // Adding a delay of 1 second (1000 milliseconds)
};

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".home-gallery-card");

  containers.forEach((container) => {
    const video = container.querySelector(".hover-video");

    container.addEventListener("mouseover", function () {
      video.play();
    });

    container.addEventListener("mouseout", function () {
      video.pause();
      video.currentTime = 0;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkModeToggleMobile = document.getElementById(
    "dark-mode-toggle-mobile"
  );
  const body = document.body;
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  const sunIconMobile = document.getElementById("sunIconMobile");
  const moonIconMobile = document.getElementById("moonIconMobile");

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      sunIcon.style.display = "block";
      sunIconMobile.style.display = "block";
      moonIcon.style.display = "none";
      moonIconMobile.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      sunIconMobile.style.display = "none";
      moonIcon.style.display = "block";
      moonIconMobile.style.display = "block";
    }
  });

  darkModeToggleMobile.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      sunIconMobile.style.display = "block";
      sunIcon.style.display = "block";
      moonIconMobile.style.display = "none";
      moonIcon.style.display = "none";
    } else {
      sunIconMobile.style.display = "none";
      sunIcon.style.display = "none";
      moonIconMobile.style.display = "block";
      moonIcon.style.display = "block";
    }
  });
});
