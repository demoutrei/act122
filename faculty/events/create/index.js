import { notify } from '../../../base.js';


document.querySelector("#button-back").addEventListener(
  "click", (_) => {
    notify("", "Cancelling event creation...");
    setTimeout(
      () => window.open('../', "_self"),
      1500
    )
  }
)

document.querySelector("#button-createEvent").addEventListener(
  "click", () => {
    if (!document.querySelector("#input-eventName").value) {
      notify("Missing required field", "An event name must be set");
      return;
    }
    const startDateElement = document.querySelector("#input-startDate")
    if (!startDateElement.value) {
      notify("Missing required field", "Starting date not plotted");
      return;
    }
    const endDateElement = document.querySelector("#input-endDate");
    if (!endDateElement.value) {
      notify("Missing required field", "Ending date not plotted");
      return;
    }
    const startDate = new Date(startDateElement.value);
    const endDate = new Date(endDateElement.value);
    const reservedStartDate = new Date(2026, 4, 6, 17);
    const reservedEndDate = new Date(2026, 4, 6, 20);
    if (endDate < startDate) {
      notify("Invalid event duration", "Ending date be plotted after starting date");
      return;
    }
    if (
      ((reservedStartDate <= startDate) && (startDate <= reservedEndDate))
      ||
      ((reservedStartDate <= endDate) && (endDate <= reservedEndDate))
    ) {
      notify("Conflicting schedule", "An event is already scheduled on May 6 2026, 5:00 PM - 8:00 PM");
      return;
    }
    if (!document.querySelector("#input-eventVenue").value) {
      notify("Missing required field", "An event venue must be set");
      return;
    }
    const programs = Array.from(document.querySelector("#select-programs").selectedOptions).map(option => option.value);
    const yearLevels = Array.from(document.querySelector("#select-yearLevels").selectedOptions).map(option => option.value);
    notify("", "Plotting event...");
    setTimeout(
      () => notify("Creation Successful", `'${document.querySelector("#input-eventName").value}' event plotted`),
      2000
    )
    setTimeout(
      () => window.open('../', "_self"),
      4000
    )
  }
)