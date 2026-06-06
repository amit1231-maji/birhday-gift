// Floating hearts
const container = document.getElementById('floating-hearts');
const heartEmojis = ['❤️', '🖤', '💋', '🌹'];

for (let i = 0; i < 18; i++) {
  const h = document.createElement('div');
  h.classList.add('heart');
  h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = (12 + Math.random() * 20) + 'px';
  h.style.animationDuration = (5 + Math.random() * 8) + 's';
  h.style.animationDelay = (Math.random() * 5) + 's';
  container.appendChild(h);
}

// Slideshow
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let current = 0;

// Dots banao
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});

function goToSlide(n) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
}

function changeSlide(dir) {
  goToSlide(current + dir);
}

// Music
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');

function toggleSong() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Play";
  }
}