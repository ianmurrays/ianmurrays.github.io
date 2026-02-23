(function () {
  // Theme toggle
  var toggle = document.getElementById('theme-toggle');
  var iconSun = document.getElementById('icon-sun');
  var iconMoon = document.getElementById('icon-moon');

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function updateIcons() {
    var theme = getTheme();
    iconSun.classList.toggle('hidden', theme !== 'dark');
    iconMoon.classList.toggle('hidden', theme !== 'light');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = getTheme() === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      localStorage.setItem('theme', next);
      updateIcons();
    });
  }

  updateIcons();

  // Mobile menu toggle
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuClose = document.getElementById('mobile-menu-close');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  }
})();
