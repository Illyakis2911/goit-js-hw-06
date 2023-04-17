const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemAl = document.querySelectorAll("#categories .item");
itemAl.forEach((el) => {
  const titel = el.querySelector("h2");
  const namberIs = el.querySelector("ul").children.length;
  console.log(`Category: ${titel.textContent}`);
  console.log(`Elements: ${namberIs}`);
});
