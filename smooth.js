// Custom easing function (easeInOutCubic style)
function easeInOutCustom(t) {
  return t < 0.3
    ? 0.5 * t * t             // very slow at start (0-30%)
    : t < 0.7
      ? 0.5 + 2 * (t - 0.3) * (t - 0.3) // speed up (30%-70%)
      : 1 - 0.5 * Math.pow(1 - t, 2);   // slow down near end (70%-100%)
}

// Scroll function
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

// Apply to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href');
    if (target.startsWith('#')) smoothScroll(target, 1200);
  });
});
