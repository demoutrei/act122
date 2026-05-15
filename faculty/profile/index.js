import { notify } from '../../base.js';


export function scrollToView(elementId) {
  document.querySelector(elementId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

document.querySelector("#section-notifications-email").addEventListener(
  "click",
  (_) => {
    document.querySelector("#section-notifications-email").classList.toggle("active");
    if (document.querySelector("#section-notifications-email").classList.contains("active")) {
      notify("Enabled 'Email Address' notifications", "You will start receiving notifications through your email address.");
    } else {
      notify("Disabled 'Email Address' notifications", "You will now stop receiving notifications from your email address.");
    }
  }
)

document.querySelector("#section-notifications-contactNumber").addEventListener(
  "click",
  (_) => {
    document.querySelector("#section-notifications-contactNumber").classList.toggle("active");
    if (document.querySelector("#section-notifications-contactNumber").classList.contains("active")) {
      notify("Enabled 'Contact Number' notifications", "You will start receiving notifications through your contact number.");
    } else {
      notify("Disabled 'Contact Number' notifications", "You will now stop receiving notifications from your contact number.");
    }
  }
)

document.querySelector("#section-account-studentId").addEventListener(
  "click",
  (_) => notify("", "Copied your Student ID to clipboard")
)

document.querySelector("#button-logOut").addEventListener(
  "click",
  (_) => document.querySelector("#section-logOut-confirmation").classList.add("show")
)

document.querySelector("#confirmation-action-cancel").addEventListener(
  "click", (_) => document.querySelector("#section-logOut-confirmation").classList.remove("show")
)

document.querySelector("#confirmation-action-confirm").addEventListener(
  "click", (_) => {
    notify("", "Logging out...");
    setTimeout(
      () => window.open('../../', "_self"),
      1500
    )
  }
)