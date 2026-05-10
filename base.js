export function notify(title, message) {
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