const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      el.classList.add('reveal_active');
    }
  });
});
