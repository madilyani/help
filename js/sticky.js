let header = document.getElementById("header");
let quick = document.getElementById("quick");

if (header) {
  function scrollFunc() {
    if (window.pageYOffset >= 50) {
      header.classList.add("sticky");
      quick.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      quick.classList.remove("sticky");
    }
  }
  window.onscroll = function () {
    scrollFunc();
  };
}
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};

window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == basket) {
    basket.classList.remove("active");
    body.classList.remove("active");
  }
};
