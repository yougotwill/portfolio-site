document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var navElement = document.querySelector('nav');
  var navToggle = document.querySelector('#js-nav-toggle');
  var navItems = document.querySelector('#js-nav-items');

  function toggleNav () {
    body.style.overflowY = body.style.overflowY ? '' : 'hidden';
    navElement.classList.toggle('active');
    navToggle.classList.toggle('active');
  }

  navToggle.addEventListener('click', function () {
    toggleNav();
  });

  navItems.addEventListener('click', function (event) {
    if (!navToggle.classList.contains('active')) return;
    if (event.target.tagName === 'UL') return;
    toggleNav();
  });
});
