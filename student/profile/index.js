function scrollToView(elementId) {
  document.querySelector(elementId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

(new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => {
        const target = document.querySelector("#navigation-account");
        if (entry.isIntersecting) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      }
    )
  },
  {
    threshold: 0.5
  }
)).observe(document.querySelector("#section-account"));

(new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => {
        const target = document.querySelector("#navigation-notifications");
        if (entry.isIntersecting) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      }
    )
  },
  {
    threshold: 0.5
  }
)).observe(document.querySelector("#section-notifications"));

(new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => {
        const target = document.querySelector("#navigation-logOut");
        if (entry.isIntersecting) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      }
    )
  },
  {
    threshold: 0.5
  }
)).observe(document.querySelector("#section-logOut"));