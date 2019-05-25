document.addEventListener('DOMContentLoaded', (event) =>
{
  ((localStorage.getItem('mode') || 'dark-theme') === 'dark-theme')
  ? document.querySelector('body').classList.add('dark-theme')
  : document.querySelector('body').classList.remove('dark-theme')
});
