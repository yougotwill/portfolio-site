document.addEventListener('DOMContentLoaded', function () {
  var navElement = document.querySelector('nav');
  var navBtn = document.querySelector('#js-nav-btn');

  navBtn.addEventListener('click', function () {
    navElement.classList.toggle('active');
  });
});
