const hamburgerBtn = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const upBtn = document.querySelector("#up-button");
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
//Handle Navbar Scroll
window.onscroll = function () {
  const posY = window.scrollY;
  if (posY > 0) {
    header.classList.add("glass");
    header.classList.remove("relative");
    upBtn.classList.remove("opacity-0");
    upBtn.classList.add("opacity-100");
  } else {
    header.classList.remove("glass");
    header.classList.add("relative");
    upBtn.classList.add("opacity-0");
    upBtn.classList.remove("opacity-100");
  }
};

//Handle Hamburger Menu
hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("hamburger-active");
  if (nav.classList.contains("opacity-0")) {
    //Toggle off to on
    nav.classList.remove(
      "opacity-0",
      "scale-95",
      "-translate-y-2",
      "pointer-events-none"
    );
    nav.classList.add("opacity-100", "scale-100", "translate-y-0");
  } else {
    //Toggle on to off
    nav.classList.remove("opacity-100", "scale-100", "translate-y-0");
    nav.classList.add(
      "opacity-0",
      "scale-95",
      "-translate-y-2",
      "pointer-events-none"
    );
  }
});

//Close Click Nav
window.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    hamburgerBtn.classList.remove("hamburger-active");
    nav.classList.remove("opacity-100", "scale-100", "translate-y-0");
    nav.classList.add(
      "opacity-0",
      "scale-95",
      "-translate-y-2",
      "pointer-events-none"
    );
  }
});

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
