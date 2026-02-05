// ===== CHAT SIMULATION =====
const messages = [
  "That's what I was going to do...",
  "But then I stopped lol.",
  "I realised, I wanted to do something special.",
  "Because,",
  "You are Special 🙂",
  "Your smile makes normal days brighter,",
  "and your presence makes moments feel warm.",
  "I hope this year brings you happiness, peace, and everything your heart wishes for. Happy Birthday, Rawnd 🎂🎉 Stay the beautiful soul you are."
];

messages.forEach((text, i) => {
  setTimeout(() => {
    const msg = document.getElementById("msg" + (i + 1));
    msg.innerHTML = text;
    msg.classList.add("show");
  }, i * 3500); // 3.5 seconds per message for realistic reading time
});

// ===== CONFETTI =====
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 10 + 10;
    this.speed = Math.random() * 3 + 2;
    this.angle = Math.random() * Math.PI * 2;
  }
  draw() {
    ctx.fillStyle = "rgba(255,0,100,0.7)";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x, this.y - this.size/2, this.x - this.size, this.y - this.size/2, this.x - this.size, this.y);
    ctx.bezierCurveTo(this.x - this.size, this.y + this.size/2, this.x, this.y + this.size, this.x, this.y + this.size*1.5);
    ctx.bezierCurveTo(this.x, this.y + this.size, this.x + this.size, this.y + this.size/2, this.x + this.size, this.y);
    ctx.bezierCurveTo(this.x + this.size, this.y - this.size/2, this.x, this.y - this.size/2, this.x, this.y);
    ctx.fill();
  }
  update() {
    this.y += this.speed;
    if(this.y > canvas.height) this.y = -20;
  }
}

const hearts = [];
for(let i = 0; i < 50; i++) hearts.push(new Heart());

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach(h => { h.update(); h.draw(); });
  requestAnimationFrame(animate);
}

animate();
window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});