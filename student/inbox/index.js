import { notify } from '../../base.js';


function updateInboxCount() {
  const inboxNotifCount = document.querySelector("#button-inboxMails").querySelector(".notif-count");
  let count = 0;
  document.querySelectorAll(".mail").forEach(mail => {
    if (mail.classList.contains("markedAsRead")) return;
    count++;
  })
  inboxNotifCount.innerText = count;
}


document.querySelectorAll(".mail").forEach(mail => {
  const markAsReadAction = mail.querySelector(".mail-actions-markAsRead");
  if (markAsReadAction) markAsReadAction.addEventListener(
    "click", (_) => {
      mail.classList.add("markedAsRead");
      notify("", "Mail marked as read");
      markAsReadAction.remove();
      updateInboxCount();
    }
  )
  mail.querySelector(".mail-actions-trash").addEventListener(
    "click", (_) => {
      mail.remove();
      notify("", "Mail moved to trash");
      updateInboxCount();
      if (document.querySelectorAll(".mail").length == 0) {
        const mainPanel = document.querySelector("#mainPanel");
        mainPanel.style.alignItems = "center";
        mainPanel.style.justifyContent = "center";
        mainPanel.innerText = "No mails in your Inbox.";
      }
    }
  )
})