const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handleClick);

function handleClick(event) {
  if (input.value === "") {
    return (span.textContent = "Anonymous");
  }
  span.textContent = event.currentTarget.value;
}
