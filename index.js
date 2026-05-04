const inputLogInAccountId = document.querySelector("#logIn-info-accountId");
const inputLogInPassword = document.querySelector("#logIn-info-password");
const logInButton = document.querySelector("#button-logIn");
const logInTypesArray = document.querySelectorAll(".logIn-type");


inputLogInAccountId.addEventListener(
  "input",
  (_) => {
    if (!inputLogInAccountId.value || !inputLogInPassword.value) {
      logInButton.setAttribute("disabled", "disabled");
    } else {
      logInButton.removeAttribute("disabled");
    }
  }
)

inputLogInPassword.addEventListener(
  "input",
  (_) => {
    if (!inputLogInAccountId.value || !inputLogInPassword.value) {
      logInButton.setAttribute("disabled", "disabled");
    } else {
      logInButton.removeAttribute("disabled");
    }
  }
)


logInTypesArray.forEach(
  logInTypeElement => {
    logInTypeElement.addEventListener(
      "click",
      (_) => {
        logInTypesArray.forEach(
          element => {
            element.classList.toggle("selected");
          }
        )
      }
    )
  }
)


logInButton.addEventListener(
  "click",
  (_) => {
    const a = document.querySelector(".logIn-type.selected");
    window.open(`./${a.dataset.type}/events`, "_self");
  }
)