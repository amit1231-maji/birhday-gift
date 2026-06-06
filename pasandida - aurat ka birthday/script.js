const SECRET = "02020202";// change accorging to your feverable birthday 
let input = "";

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

// Profile pic
function previewPic(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => showPic(e.target.result);
  reader.readAsDataURL(file);
}

function showPic(src) {
  const img = document.getElementById('pic-preview');
  const placeholder = document.getElementById('pic-placeholder');
  img.src = src;
  img.style.display = 'block';
  placeholder.style.display = 'none';
  localStorage.setItem('profile-pic', src);
}

window.addEventListener('load', () => {
  const saved = localStorage.getItem('profile-pic');
  if (saved) showPic(saved);
});

// Password
function press(num) {
  if (input.length >= SECRET.length) return;
  input += num;
  showInput();
  if (input.length === SECRET.length) setTimeout(check, 300);
}

function del() {
  input = input.slice(0, -1);
  showInput();
}

function showInput() {
  document.getElementById('msg').textContent = input;
}

function check() {
  if (input === SECRET) {
    document.getElementById('msg').textContent = "✅ Correct! Welcome  💕";
    setTimeout(() => {
      window.location.href = "letter.html"; // letter page pe bhejo
    }, 1500);
  } else {
    document.getElementById('msg').textContent = "❌ Wrong! Try again.";
    document.getElementById('hearts-row').classList.add('shake');
    setTimeout(() => {
      document.getElementById('hearts-row').classList.remove('shake');
      input = "";
      showInput();
    }, 1000);
  }
}