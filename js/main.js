// //  Scroll To Top
let span = document.querySelector(".up");

window.onscroll = function () {
  window.scrollY <= 100
    ? span.classList.remove("show")
    : span.classList.add("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//------------------------------------------

// Click Toggle
let toggler = document.querySelector(".toggle");
let nav = document.querySelector(" nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};
// ------------------------Contact Nav
let contactNav = document.querySelector(".contact")
let contactBtn = document.getElementById("contactBtn")
let closeContact = document.querySelector(".closeContact")
let contactToggle = document.getElementById("contactToggle")
console.log(contactToggle)

function openContact(){
  contactNav.classList.add("openContact")
}
contactBtn.onclick = openContact
contactToggle.onclick = openContact
closeContact.onclick = function(){
  contactNav.classList.remove("openContact")
}
// -------------------------

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};


// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// });
