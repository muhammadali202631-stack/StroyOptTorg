document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  // Har bir faq__item elementini tekshirib, boshlang'ich holatni sozlash
  faqItems.forEach((item) => {
    const answer = item.querySelector(".faq__answer");
    const icon = item.querySelector(".faq__icon");

    // Agar HTML-da is-active klassi bo'lsa (masalan, 6-elementda)
    if (item.classList.contains("is-active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      if (icon) icon.textContent = "−";
    }

    const button = item.querySelector(".faq__question");
    button.addEventListener("click", () => {
      const isActive = item.classList.contains("is-active");

      // Barcha boshqa elementlarni yopish
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-active");
          const otherAnswer = otherItem.querySelector(".faq__answer");
          const otherIcon = otherItem.querySelector(".faq__icon");

          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherIcon) otherIcon.textContent = "+";
        }
      });

      // Bosilgan elementni ochish yoki yopish
      if (isActive) {
        item.classList.remove("is-active");
        answer.style.maxHeight = null;
        if (icon) icon.textContent = "+";
      } else {
        item.classList.add("is-active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        if (icon) icon.textContent = "−";
      }
    });
  });
});