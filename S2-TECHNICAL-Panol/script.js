let box = document.getElementById('animatedBox');

function animateBox(day) {
 
  box.style.animation = 'none'; 
  box.offsetHeight; 
  box.style.animation = null;

  box.className = `box ${day}`; 
  
  box.style.opacity = 1;
  box.style.transform = 'scale(1)';
  box.style.animation = 'popUp 0.5s ease'; 
}
