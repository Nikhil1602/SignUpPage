const password_field = document.getElementById("password");
const confirm_password_field = document.getElementById("confirm-password");
const submit_form = document.getElementById("form-data");

const match_password = () => {
  let password = password_field.value;
  let count = 0;
  let confirm_password = confirm_password_field.value;

  if (password.length === confirm_password.length) {
    for (let i = 0; i < password.length; i++) {
      if (password[i] === confirm_password[i]) {
        count++;
      }
    }
    if (count === password.length) {
      alert("Form submitted successfully !!");
    } else {
      alert("Password doesn't match !!");
    }
  } else {
    alert("Password length isn't equal !!");
  }
};

submit_form.addEventListener("submit", (event) => {
  event.preventDefault();
  match_password();
});
