const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});
