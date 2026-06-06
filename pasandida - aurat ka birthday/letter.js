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

// Gallery page pe jane ka button
function goToGallery() {
  window.location.href = "/gallary.html";
}