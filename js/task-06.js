const input = document.querySelector("#validation-input");

input.addEventListener("blur", cekenEvent);

function cekenEvent(event) {
  console.log(input.value.length);
  console.log(Number(input.dataset.length));
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
