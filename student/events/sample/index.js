import { notify } from '../../../base.js';


export function register() {
  const button = document.querySelector("#button-register");
  button.disabled = true;
  button.innerText = "Registered";
  notify("", "Successfully registered for the event.");
  document.querySelector("#section-notification").classList.add("show");
  document.querySelector("#button-QR").classList.add("show");
}

export function displayQrCode() {
  document.querySelector("#section-QR").classList.add("show");
}


document.querySelector("#section-notification-emailAddress").addEventListener(
  "click",
  (_) => {
    document.querySelector("#section-notification-emailAddress").classList.toggle("active");
    if (document.querySelector("#section-notification-emailAddress").classList.contains("active")) {
      notify("", "You will receive notification for this event through your email address.");
    } else {
      notify("", "You will stop receiving notifications for this event from your email address.")
    }
  }
)

document.querySelector("#section-notification-contactNumber").addEventListener(
  "click",
  (_) => {
    document.querySelector("#section-notification-contactNumber").classList.toggle("active");
    if (document.querySelector("#section-notification-contactNumber").classList.contains("active")) {
      notify("", "You will receive notification for this event through your contact number.");
    } else {
      notify("", "You will stop receiving notifications for this event from your contact number.")
    }
  }
)

document.querySelector("#reminderTime").addEventListener(
  "change",
  (event) => notify("", `Updated delay of reminder to: ${event.target.value}`)
)

document.querySelector("#button-close-qrCode").addEventListener(
  "click",
  (_) => document.querySelector("#section-QR").classList.remove("show")
)

document.querySelector("#button-downloadQrCode").addEventListener(
  "click",
  (_) => notify("", "Successfully downloaded QR code")
)


window.displayQrCode = displayQrCode;
window.register = register;