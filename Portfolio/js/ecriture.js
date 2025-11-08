const textToType = " Full-Stack Developper"; // Lktaba dyalek
const typingSpeed = 100; // Ssr3a dyal l-ktaba (ms)
const erasingSpeed = 30; // Ssr3a dyal l-mssé7 (ms) - khassha tkoun asra3
const pauseTime = 1500; // L-waqt lli ghadi n-tssenaw qbel ma n-bddaw n-msshou (1.5s)

let index = 0; // L-index dyal l-7arf
const outputElement = document.getElementById('typewriter-text');

// 1. Function L-Ktaba (Write)
function typeWriter() {
  if (index < textToType.length) {
    // Ktaba 7arf b 7arf
    outputElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Melli katssali lktaba, kan-tssenaw chwiya w kanbdaw n-mssé7ou
    setTimeout(eraseText, pauseTime);
  }
}

// 2. Function L-Mssé7 (Erase)
function eraseText() {
  // Kan-tchekkiw wach mazal kayn chi 7arf
  if (outputElement.textContent.length > 0) {
    // Kan-hiddou 7arf wa7ed men l-kher
    outputElement.textContent = outputElement.textContent.slice(0, -1);
    
    // N3awdou n-3aytou 3la eraseText b ssr3a dyal l-mssé7
    setTimeout(eraseText, erasingSpeed);
  } else {
    // Melli katwlli lktaba khawya, kan-saffrou l-index
    index = 0;
    
    // Kan-3awdou n-bdaw l-ktaba men jdid! (Looping)
    setTimeout(typeWriter, typingSpeed);
  }
}

// Kanbdaw l-animation (Kifma dima, t7t document.body)
document.addEventListener("DOMContentLoaded", () => {
    if (outputElement) {
        typeWriter();
    }
});