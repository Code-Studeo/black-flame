const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateHeader() { header.classList.toggle('is-scrolled', window.scrollY > 24); }
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  mainNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}
menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
  mainNav.classList.toggle('is-open', opening);
  document.body.classList.toggle('menu-open', opening);
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const reveals = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) reveals.forEach(el => el.classList.add('is-visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
  reveals.forEach(el => observer.observe(el));
}

if (!reduceMotion && window.matchMedia('(min-width: 651px)').matches) {
  const art = document.querySelector('[data-parallax]');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const progress = Math.min(window.scrollY, window.innerHeight) * .045;
      art.style.setProperty('--parallax', `${progress}px`);
      ticking = false;
    });
  }, { passive: true });
}

document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('.filter-button').forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.menu-item').forEach(item => item.classList.toggle('is-hidden', category !== 'todos' && item.dataset.category !== category));
}));

const voiceCards = [...document.querySelectorAll('.voice-card')];
let voiceIndex = 0;
function setVoice(index) {
  voiceIndex = (index + voiceCards.length) % voiceCards.length;
  voiceCards.forEach((card, i) => { card.hidden = i !== voiceIndex; card.classList.toggle('is-current', i === voiceIndex); });
  document.querySelector('.voice-count').innerHTML = `${String(voiceIndex + 1).padStart(2, '0')} <i>/ 03</i>`;
}
document.querySelector('.voice-prev').addEventListener('click', () => setVoice(voiceIndex - 1));
document.querySelector('.voice-next').addEventListener('click', () => setVoice(voiceIndex + 1));

const dateInput = document.querySelector('input[name="date"]');
dateInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const bookingForm = document.querySelector('#booking-form');
bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = bookingForm.elements.name;
  const result = document.querySelector('#form-result');
  const nameError = document.querySelector('#name-error');
  const dateError = document.querySelector('#date-error');
  nameError.textContent = name.value.trim().length < 2 ? 'Informe um nome com pelo menos 2 caracteres.' : '';
  dateError.textContent = dateInput.value && dateInput.value < dateInput.min ? 'Escolha uma data a partir de hoje.' : '';
  result.textContent = '';
  if (!bookingForm.reportValidity() || nameError.textContent || dateError.textContent) return;
  result.textContent = `Simulação concluída, ${name.value.trim()}. Nenhum dado foi enviado.`;
  bookingForm.reset();
  dateInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
});

