const overlap = document.getElementById('overlap-video');
const play = document.getElementById("play");
const video = document.getElementById('myVideo');

function toggle(){
    if(video.paused){
        video.play();
        play.style.display = 'none';
    }
    else{
        video.pause();
        play.style.display = 'block';
    }
}

overlap.addEventListener('click',toggle);

// Slider functionality
const carousel = document.querySelector('.carousel-slides');
const reviewCards = document.querySelectorAll('.review-card');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let activeIndex = 0;
const totalReviews = reviewCards.length;
let autoSlideTimer;

function moveCarousel() {
  carousel.style.transform = `translateX(-${activeIndex * 100}%)`;
}

function highlightIndicator() {
  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[activeIndex].classList.add('active');
}

function advanceSlide() {
  activeIndex = (activeIndex + 1) % totalReviews;
  moveCarousel();
  highlightIndicator();
}

function beginAutoRotation() {
  autoSlideTimer = setInterval(advanceSlide, 5000);
}

function restartAutoRotation() {
  clearInterval(autoSlideTimer);
  beginAutoRotation();
}

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    activeIndex = parseInt(indicator.dataset.index);
    moveCarousel();
    highlightIndicator();
    restartAutoRotation();
  });
});

prevButton.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + totalReviews) % totalReviews;
  moveCarousel();
  highlightIndicator();
  restartAutoRotation();
});

nextButton.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % totalReviews;
  moveCarousel();
  highlightIndicator();
  restartAutoRotation();
});

document.querySelector('.reviews-carousel').addEventListener('mouseenter', () => {
  clearInterval(autoSlideTimer);
});

document.querySelector('.reviews-carousel').addEventListener('mouseleave', () => {
  beginAutoRotation();
});

moveCarousel();
beginAutoRotation();




const messageForm = document.getElementById('messageForm');
const formModal = document.getElementById('formModal');
const closeModal = formModal.querySelector('.popup-close');
const modalButton = formModal.querySelector('.popup-btn');

function showModal() {
  formModal.classList.add('show');
  document.body.classList.add('modal-open');
}

function hideModal() {
  formModal.classList.remove('show');
  document.body.classList.remove('modal-open');
  setTimeout(() => {
    if (!formModal.classList.contains('show')) {
      formModal.style.display = 'none';
    }
  }, 300);
}

if (messageForm) {
  messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    formModal.style.display = 'flex';
    setTimeout(showModal, 10);
    messageForm.reset();
  });
}

if (closeModal) {
  closeModal.addEventListener('click', hideModal);
}

if (modalButton) {
  modalButton.addEventListener('click', hideModal);
}

window.addEventListener('click', function(e) {
  if (e.target === formModal) {
    hideModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && formModal.classList.contains('show')) {
    hideModal();
  }
});
