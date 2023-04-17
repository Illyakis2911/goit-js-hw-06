function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

btn.addEventListener("click", color);

function color(event) {
  const hex = getRandomHexColor();
  console.log(hex);
  btn.style.backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = hex;
  colorText.textContent = hex;
}
