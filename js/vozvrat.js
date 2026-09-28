document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Oldingi barcha ochilganlarni yopish
      accordionItems.forEach(function (otherItem) {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        otherContent.style.maxHeight = null;
      });

      // Agar bosilgan element yopiq bo'lsa, uni ochish
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});