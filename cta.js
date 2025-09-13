const ctaBtns = document.querySelectorAll('.cta-btn');

ctaBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-5px) scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
});
