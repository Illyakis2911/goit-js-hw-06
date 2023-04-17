const sizeEl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

console.log(sizeEl.element);
sizeEl.addEventListener("input", onFn);

function onFn() {
  return (text.style.fontSize = Number(sizeEl.value) + "px");
}
