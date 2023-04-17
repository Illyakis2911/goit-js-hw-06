const btnDsk = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const btnInk = document.querySelector(
  '#counter button[data-action="increment"]'
);

const valueEl = document.querySelector("#value");

let countenVelue = 0;

btnDsk.addEventListener("click", () => {
  countenVelue -= 1;
  valueEl.textContent = countenVelue;
  console.log(valueEl);
});

btnInk.addEventListener("click", () => {
  countenVelue += 1;
  valueEl.textContent = countenVelue;
  console.log(valueEl);
});
