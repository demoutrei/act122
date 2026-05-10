function notify(title, message) {
  const container = document.querySelector("#container-notifications");

  const toast = document.createElement("div");
  toast.classList.add("notification");
  const toastTitle = document.createElement("div");
  toastTitle.classList.add("notification-title");
  toastTitle.innerText = title;
  toast.appendChild(toastTitle);
  const toastMessage = document.createElement("div");
  toastMessage.classList.add("notification-message");
  toastMessage.innerText = message;
  toast.appendChild(toastMessage);
  container.prepend(toast);
  toast.onclick = () => remove(toast);
  setTimeout(() => remove(toast), 4000);

  function remove(t) {
    toast.classList.add("fadeOut");
    toast.addEventListener(
      "transitionend",
      () => toast.remove()
    )
  }
}

function scrollToView(elementId) {
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
      title = "Enabled 'Email Address' notifications";
      message = "You will start receiving notifications through your email address.";
    } else {
      title = "Disabled 'Email Address' notifications";
      message = "You will now stop receiving notifications from your email address."
    }
    notify(title, message);
  }
)

document.querySelector("#section-notifications-contactNumber").addEventListener(
  "click",
  (_) => {
    document.querySelector("#section-notifications-contactNumber").classList.toggle("active");
    if (document.querySelector("#section-notifications-contactNumber").classList.contains("active")) {
      title = "Enabled 'Contact Number' notifications";
      message = "You will start receiving notifications through your contact number.";
    } else {
      title = "Disabled 'Contact Number' notifications";
      message = "You will now stop receiving notifications from your contact number."
    }
    notify(title, message);
  }
)

document.querySelector("#section-account-studentId").addEventListener(
  "click",
  (_) => notify("", "Copied your Student ID to clipboard")
)