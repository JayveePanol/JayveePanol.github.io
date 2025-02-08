const colorButton = document.getElementById('colorButton');
const resume = document.querySelector('.resume');

colorButton.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  resume.style.backgroundColor = randomColor;
});