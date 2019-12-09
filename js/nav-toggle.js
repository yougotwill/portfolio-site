document.addEventListener('DOMContentLoaded', function () {
  var navElement = document.querySelector('#js-nav');
  var navBtn = document.querySelector('#js-nav-btn');

  navBtn.addEventListener('click', function () {
    navElement.classList.toggle('active');
  });
});
