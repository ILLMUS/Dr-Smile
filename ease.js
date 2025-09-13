// Custom easing function (0-30% slow, 30-70% speed up, 70-100% slow)
function easeInOutCustom(t) {
  return t < 0.3
    ? 0.5 * t * t              // slow start
    : t < 0.7
      ? 0.5 + 2 * (t - 0.3) * (t - 0.3) // speed up
      : 1 - 0.5 * Math.pow(1 - t, 2);   // slow down near end
}

// Smooth scroll function
function smoothScroll(target, duration = 1200) {
  const start = window.scrollY || window.pageYOffset;
  const end = document.querySelector(target).offsetTop;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    let t = timeElapsed / duration;
    if (t > 1) t = 1;

    const easedT = easeInOutCustom(t);
    window.scrollTo(0, start + distance * easedT);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Navbar toggle
const menuToggle = document.querySelector('.menu-toggle');
const navCenter = document.querySelector('.nav-center');

menuToggle.addEventListener('click', () => {
  navCenter.classList.toggle('active');
  menuToggle.classList.toggle('active'); // hamburger → X animation
});

// Smooth scroll + auto-collapse on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href');

    // Smooth scroll
    if (target.startsWith('#')) smoothScroll(target, 1200);

    // Close mobile menu if open
    if (navCenter.classList.contains('active')) {
      navCenter.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});

