const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

const fnLi = (iel) => {
  const masEl = document.createElement("li");
  masEl.classList.add("item");
  masEl.textContent = iel;
  return masEl;
};

const arrEls = ingredients.map((el, index) => {
  return fnLi(el);
});

ingredientsEl.append(...arrEls);
