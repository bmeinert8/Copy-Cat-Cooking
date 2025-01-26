function toggleMenu () {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
};

document.addEventListener('DOMContentLoaded', () => {
  const toggleElements = document.querySelectorAll('.js-toggle-menu, .js-toggle-menu .nav-text-preset-3 a');
  toggleElements.forEach(element => {
    element.addEventListener('click', toggleMenu);
  });
});