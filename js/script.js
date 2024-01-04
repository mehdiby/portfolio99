const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

// clickable cards

document.getElementById('Credit').addEventListener('click', function() {
  // Redirect to the GitHub link
  window.location.href = 'https://github.com/mehdiby/Credit-Risk-Analysis';
});

document.getElementById('Fino').addEventListener('click', function() {
  // Redirect to the GitHub link
  window.location.href = 'https://github.com/mehdiby/Financial-chatbot';
});

document.getElementById('Dam').addEventListener('click', function() {
  // Redirect to the GitHub link
  window.location.href = 'https://github.com/mehdiby/Water-Level-Prediction-in-Tunisian-Dams';
});

document.getElementById('Shazam').addEventListener('click', function() {
  // Redirect to the GitHub link
  window.location.href = 'https://github.com/mehdiby/mini-shazam';
});


