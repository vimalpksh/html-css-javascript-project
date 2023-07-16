const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Wierd"];

const typingDelay = 200;
const erasingDelay = 200;

const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
  }
}
