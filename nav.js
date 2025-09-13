document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navCenter = document.querySelector('.nav-center');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // animate hamburger → cross
    navCenter.classList.toggle('active');  // show/hide menu
  });
});


