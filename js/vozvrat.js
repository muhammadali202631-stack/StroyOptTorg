document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    const toggleBtn = item.querySelector('.faq-toggle');
    
    parent.classList.toggle('active');
    
    if (parent.classList.contains('active')) {
      toggleBtn.textContent = '−';
    } else {
      toggleBtn.textContent = '+';
    }
  });
});