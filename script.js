
VANTA.WAVES({
  el: "#vanta-canvas",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x000018,
  shininess: 15.00,
  waveHeight: 6.50,
  zoom: 1.02
})
let lastUpdate = 0;
const fpsLimit = 30;

function updateAnimation(timestamp) {
  if (timestamp - lastUpdate > 1000 / fpsLimit) {
    lastUpdate = timestamp;
    vantaEffect.update(); // Trigger update if applicable
  }
  requestAnimationFrame(updateAnimation);
}

requestAnimationFrame(updateAnimation);
// script.js
   // JavaScript to prevent body scrolling when navbar is open
   document.getElementById('navi-toggle').addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  });