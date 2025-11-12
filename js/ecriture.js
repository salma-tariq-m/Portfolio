const textToType = " Full-Stack Developper"; 
const typingSpeed = 100; 
const erasingSpeed = 30; 
const pauseTime = 1500; // 

let index = 0; 
const outputElement = document.getElementById('typewriter-text');
function typeWriter() {
  if (index < textToType.length) {
    outputElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(eraseText, pauseTime);
  }
}
function eraseText() {
  if (outputElement.textContent.length > 0) {
        outputElement.textContent = outputElement.textContent.slice(0, -1);
    setTimeout(eraseText, erasingSpeed);
  } else {
    index = 0;
    setTimeout(typeWriter, typingSpeed);
  }
}
document.addEventListener("DOMContentLoaded", () => {
    if (outputElement) {
        typeWriter();
    }
});