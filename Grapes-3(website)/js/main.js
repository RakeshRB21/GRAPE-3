//back-to-top-button
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
  window.scrollTo(0, 0);
  }
  //nav-bar hide
  document.addEventListener('DOMContentLoaded', function() {
    var previousScroll = 0;
  
    window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY;
  
      if (currentScroll > previousScroll) {
        document.querySelector('.navbar').classList.add('navbar-hidden');
      } else {
        document.querySelector('.navbar').classList.remove('navbar-hidden');
      }
  
      previousScroll = currentScroll;
    });
  });
//theme selector
const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

function setTheme() {
  const activeTheme = localStorage.getItem("theme");
  document.documentElement.className = activeTheme;
  colorThemes.forEach((themeOption) => {
    themeOption.checked = themeOption.id === activeTheme;
  });
}

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    setTheme();
  });
});

window.onload = setTheme();
//visibilty of color-switcher
document.addEventListener('DOMContentLoaded', function () {
  var colorSwitcher = document.getElementById('color-switcher');
  var toggleSwitcherButton = document.getElementById('color-switcher-btn');
   
  toggleSwitcherButton.addEventListener('click', function () {
      if (window.getComputedStyle(colorSwitcher).display === 'none') {
          colorSwitcher.style.display = 'block';
      } else {
          colorSwitcher.style.display = 'none';
      }
  });
});


