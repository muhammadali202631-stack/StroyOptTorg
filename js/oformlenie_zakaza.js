const deliveryCards = document.querySelectorAll(".delivery_card");
const radios = document.querySelectorAll('input[name="example"]');
const cdekOptions = document.querySelector(".cdek-options");
const cdekRadio = document.querySelector(".second_delivery_card input[name='example']");
const cdekRadio2 = document.querySelector(".third_delivery_card input[name='example']");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        deliveryCards.forEach(card => card.classList.remove("active"));
        radio.closest(".delivery_card").classList.add("active");

        if (radio === cdekRadio || radio === cdekRadio2) {
            cdekOptions.classList.add("show");
        } else {
            cdekOptions.classList.remove("show");
        }
    });
});