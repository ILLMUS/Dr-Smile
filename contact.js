const form = document.getElementById('appointmentForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your appointment request has been submitted.');
  form.reset();
});
