const html      = document.documentElement;
const themeBtn  = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

function storageGet(key) {
  try { return localStorage.getItem(key); } catch(e) { return null; }
}
function storageSet(key, val) {
  try { localStorage.setItem(key, val); } catch(e) {}
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  storageSet('theme', theme);
}

applyTheme(storageGet('theme') || 'light');
themeBtn.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

const socialsBtn  = document.getElementById('socials-btn');
const socialsList = document.getElementById('socials-list');

socialsBtn.addEventListener('click', () => {
  const isOpen = socialsList.classList.toggle('active');
  socialsBtn.classList.toggle('open', isOpen);
  const label = isOpen ? 'Скрыть профили' : 'Показать профили';
  socialsBtn.innerHTML = `${label} <i class="fa-solid fa-chevron-down chevron"></i>`;
  if (isOpen) socialsBtn.classList.add('open');
});