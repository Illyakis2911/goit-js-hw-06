const form = document.querySelector(".login-form");

form.addEventListener("submit", formEl);

function formEl(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "") {
    return alert("Потрібен Email");
  } else if (password.value === "") {
    return alert("Потрібен password");
  }
  const obj = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  console.log(obj);
  event.currentTarget.reset();
}
