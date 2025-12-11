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
// for contact
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_192m8pf","template_x4lw4bt", {
        from_email: email,
        message: message
    })
    .then(function(response) {
        document.getElementById("status").innerText = "Message sent successfully!";
    }, function(error) {
        document.getElementById("status").innerText = "Error sending message.";
    });
});
