// $VOID — subtle stars background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d', { alpha: true });

function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
addEventListener('resize', resize); resize();

const STAR_COUNT = 180;
const stars = Array.from({length: STAR_COUNT}).map(()=> ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*1.2 + 0.3,
  speed: Math.random()*0.25 + 0.05,
  hue: Math.random() > 0.5 ? 195 : 265
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const g = ctx.createLinearGradient(0,0,0,canvas.height);
  g.addColorStop(0,'rgba(11,16,30,0.6)');
  g.addColorStop(1,'rgba(5,6,10,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for(const s of stars){
    s.y += s.speed;
    if(s.y > canvas.height) { s.y = -5; s.x = Math.random()*canvas.width; }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${s.hue}, 100%, 70%, 0.75)`;
    ctx.shadowColor = `hsla(${s.hue}, 100%, 65%, 0.55)`;
    ctx.shadowBlur = 6;
    ctx.fill();
  }
  requestAnimationFrame(draw);
}
draw();

// External links placeholders
document.getElementById('pumpLink').href = '#';
document.getElementById('dexLink').href = '#';
document.getElementById('xLink').href = '#';
