const logInButton = document.querySelector("#button-logIn");
const logInTypesArray = document.querySelectorAll(".logIn-type");


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
    window.open(`./${a.dataset.type}/dashboard`, "_self");
  }
)