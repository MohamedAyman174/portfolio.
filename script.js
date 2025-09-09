// typing effect for hero highlight text
const texts = ["Mohamed Ayman", "Front-End Developer", "React.js Specialist"];
const typingElement = document.querySelector(".typing");
let charIndex = 0;
let textIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(type, 500);
  }
}

// Start typing effect
document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Dark Mode toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Animate sections on scroll
const sections = document.querySelectorAll("section.animate");

function checkSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.classList.add("animate-visible");
    } else {
      section.classList.remove("animate-visible");
    }
  });
}

window.addEventListener("scroll", checkSections);

// Run on load
checkSections();
