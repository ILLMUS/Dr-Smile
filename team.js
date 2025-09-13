const carousel = document.querySelector('.team-carousel');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

const cardWidth = 250 + 40; // card width + gap
let scrollAmount = 0;

// Auto-slide function
function slideNext() {
  scrollAmount += cardWidth;
  if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0; // loop back
  }
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(slideNext, 3000);

// Function to reset auto-slide after manual click
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(slideNext, 3000);
}

// Next button
nextBtn.addEventListener('click', () => {
  scrollAmount += cardWidth;
  if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0; // loop back
  }
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  resetAutoSlide();
});

// Previous button
prevBtn.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) {
    scrollAmount = carousel.scrollWidth - carousel.clientWidth; // loop back to end
  }
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  resetAutoSlide();
});
