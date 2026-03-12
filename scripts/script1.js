const btn = document.getElementById('show-socials-btn');
const list = document.getElementById('socials-list');

btn.addEventListener('click', () => {
  list.classList.toggle('active');

  if (list.classList.contains('active')) {
    btn.innerHTML = 'Скрыть <i class="fa-solid fa-chevron-up"></i>';
  } else {
    btn.innerHTML = 'Мои профили <i class="fa-solid fa-chevron-down"></i>';
  }
});
