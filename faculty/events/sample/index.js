import { notify } from '../../../base.js';


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

document.querySelector("#button-cancelEvent").addEventListener(
  "click", (_) => document.querySelector("#section-eventCancellation").classList.add("show")
)

document.querySelector("#button-cancel").addEventListener(
  "click", (_) => document.querySelector("#section-eventCancellation").classList.remove("show")
)

document.querySelector("#button-confirm").addEventListener(
  "click", (_) => {
    notify("Action confirmed", "Cancelling event...");
    document.querySelector("#button-confirm").disabled = true;
    document.querySelector("#button-cancel").disabled = true;
    setTimeout(
      () => {
        document.querySelector("#section-eventCancellation").classList.remove("show");
        notify("", "Event successfully cancelled");
        document.querySelector(".container-event.selected").classList.remove("ongoing");
        document.querySelector(".container-event.selected").classList.add("cancelled");
        document.querySelector("#eventInfo-name").classList.remove("ongoing");
        document.querySelector("#eventInfo-name").classList.add("cancelled");
        document.querySelector("#button-editEvent").remove();
        document.querySelector("#button-cancelEvent").remove();
        document.querySelector("#button-scanQrAttendance").remove();
        document.querySelector("#section-notification").remove();
      },
      2500
    )
  }
)

document.querySelector("#container-participants-attendees").addEventListener(
  "click", (_) => window.open("https://docs.google.com/spreadsheets/d/1vxFPeRvICQ_iyRyZcryD0bmaJ7HzE0Cp_RrREmJ_IkE/edit?usp=sharing")
)