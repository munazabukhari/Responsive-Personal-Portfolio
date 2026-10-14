/* 1. DARK AND LIGHT MODE */

// Get the theme button
let themeButton = document.getElementById("tgl");

// Get the HTML element
let html = document.documentElement;

// Check the saved theme
let savedTheme = localStorage.getItem("theme");

// Apply the saved theme
if (savedTheme === "dark") {
  html.setAttribute("data-theme", "dark");
} else {
  html.setAttribute("data-theme", "light");
}

// Show the correct button icon
if (savedTheme === "dark") {
  themeButton.textContent = "☀";
} else {
  themeButton.textContent = "☾";
}

// Change theme when button is clicked
themeButton.onclick = function () {
  let currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeButton.textContent = "☾";
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "☀";
  }
};

/* 2. DIGITAL CLOCK */

let clock = document.getElementById("clk");

if (clock) {
  function showTime() {
    let time = new Date();

    clock.textContent = time.toLocaleTimeString("en-GB");
  }

  showTime();

  setInterval(showTime, 1000);
}

/* 3. MOBILE NAVIGATION MENU */

let menuButton = document.getElementById("menu");
let header = document.querySelector("header");

// Open and close the menu
menuButton.onclick = function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    menuButton.textContent = "☰";
  } else {
    header.classList.add("open");
    menuButton.textContent = "✕";
  }
};

// Close menu when Escape key is pressed
document.onkeydown = function (event) {
  if (event.key === "Escape") {
    header.classList.remove("open");
    menuButton.textContent = "☰";
  }
};

/* 4. CONTACT FORM */

let form = document.getElementById("f");

if (form) {
  form.onsubmit = function (event) {
    // Stop the form from submitting normally
    event.preventDefault();

    // Get the values entered by the user
    let name = document.getElementById("n").value;
    let email = document.getElementById("e").value;
    let message = document.getElementById("m").value;

    // Create the email details
    let subject = "Portfolio message from " + name;

    let body = message + "\n\nFrom: " + name + " (" + email + ")";

    // Open the user's email application
    window.location.href =
      "mailto:munazzabukhari@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  };
}
