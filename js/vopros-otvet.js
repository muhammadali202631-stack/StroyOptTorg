document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    // Sahifa yuklanganda "is-active" klassi bor elementni ochib qo'yish
    faqItems.forEach(item => {
        if (item.classList.contains('is-active')) {
            const answer = item.querySelector('.faq__answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        const icon = item.querySelector('.faq__icon');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('is-active');

            // Boshqa barcha ochiq bloklarni yopish
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('is-active');
                otherItem.querySelector('.faq__answer').style.maxHeight = null;
                otherItem.querySelector('.faq__icon').textContent = '+';
            });

            // Bosilgan savolni ochish
            if (!isActive) {
                item.classList.add('is-active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
});