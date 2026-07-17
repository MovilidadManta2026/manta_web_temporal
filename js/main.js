const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
let currentSlide = 0;
let timer;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function startSlider() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(currentSlide + 1), 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    startSlider();
  });
});

if (prev) {
  prev.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    startSlider();
  });
}

if (next) {
  next.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    startSlider();
  });
}

startSlider();

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

const popupContent = {
  pagos: {
    title: 'Pagos en línea',
    text: 'Aquí puedes enlazar el portal oficial de pagos cuando esté disponible.'
  },
  turnos: {
    title: 'Turnos en línea',
    text: 'Aquí puedes enlazar el sistema de turnos institucional.'
  },
  servicios: {
    title: 'Servicios en línea',
    text: 'Consulta los servicios digitales disponibles para la ciudadanía.'
  },
  rtv: {
    title: 'RTV Matriculación',
    text: 'Revisa el calendario de matriculación y los requisitos vigentes.'
  }
};

document.querySelectorAll('[data-popup]').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const content = popupContent[item.dataset.popup];
    if (!content) return;
    modalTitle.textContent = content.title;
    modalText.textContent = content.text;
    modal.classList.add('show');
  });
});

if (modalClose) {
  modalClose.addEventListener('click', () => modal.classList.remove('show'));
}

if (modal) {
  modal.addEventListener('click', event => {
    if (event.target === modal) modal.classList.remove('show');
  });
}

// Popup inicial de convocatoria
const welcomePopup = document.getElementById('welcomePopup');
const welcomePopupClose = document.getElementById('welcomePopupClose');

if (welcomePopup) {
  window.addEventListener('load', () => {
    setTimeout(() => welcomePopup.classList.add('show'), 500);
  });
}

if (welcomePopupClose) {
  welcomePopupClose.addEventListener('click', () => {
    welcomePopup.classList.remove('show');
  });
}

if (welcomePopup) {
  welcomePopup.addEventListener('click', event => {
    if (event.target === welcomePopup) {
      welcomePopup.classList.remove('show');
    }
  });
}
