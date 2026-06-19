// Parallax + Particles (add after existing script)
document.addEventListener('mousemove', (e) => {
    const hero = document.getElementById('home');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    hero.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

// Canvas particles for hero
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed'; canvas.style.top = '0'; canvas.style.left = '0'; canvas.style.zIndex = '-1';
document.getElementById('home').appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
function particles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < 50; i++) {
        ctx.beginPath(); ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*3, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.5})`; ctx.fill();
    }
    requestAnimationFrame(particles);
}
particles();
