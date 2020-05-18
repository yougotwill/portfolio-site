document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const navElement = document.querySelector('nav');
  const navToggle = document.querySelector('#js-nav-toggle');
  const navItems = document.querySelector('#js-nav-items');

  const toggleNav = () => {
    body.style.overflowY = body.style.overflowY ? '' : 'hidden';
    navElement.classList.toggle('active');
    navToggle.classList.toggle('active');
  };

  navToggle.addEventListener('click', function () {
    toggleNav();
  });

  navItems.addEventListener('click', function (event) {
    if (!navToggle.classList.contains('active')) return;
    if (event.target.tagName === 'UL') return;
    toggleNav();
  });
});
