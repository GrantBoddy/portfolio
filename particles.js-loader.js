// Loads particles.js from CDN and initializes with config file
function loadParticlesJS() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/particles.js';
  script.onload = function() {
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
      console.log('particles.js loaded - callback');
    });
  };
  document.head.appendChild(script);
}

window.addEventListener('DOMContentLoaded', loadParticlesJS);
