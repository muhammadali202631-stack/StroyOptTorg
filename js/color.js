// 1. HTML dan olingan 32 ta mahsulot arrayi
const productsData = [
  {
    id: 1,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F030",
    image: "../assets/img/image1.png",
    alt: "Перфоратор универсальный",
    isHit: true,
    oldPrice: "15 698 ₽",
    currentPrice: "12 789 ₽",
    discount: "-19%"
  },
  {
    id: 2,
    title: "Перфоратор Fans G-120 для раковины",
    article: "X8V9F010",
    image: "../assets/img/image2.png",
    alt: "Болгарка",
    isHit: false,
    oldPrice: "1 999 ₽",
    currentPrice: "1 789 ₽",
    discount: null
  },
  {
    id: 3,
    title: "Триммерная леска «Spiral-100»",
    article: "X8V9F020",
    image: "../assets/img/image3.png",
    alt: "Триммер",
    isHit: true,
    oldPrice: "3 312 ₽",
    currentPrice: "2 260 ₽",
    discount: "-30%"
  },
  {
    id: 4,
    title: "Ушпак подводной Aragio с двойным сливом",
    article: "X8V9F040",
    image: "../assets/img/image.png",
    alt: "Ушм",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 5,
    title: "Набор гравировальных насадок Nozzle-Tok",
    article: "X8V9F050",
    image: "../assets/img/image5.png",
    alt: "Набор насадок",
    isHit: false,
    oldPrice: "15 698 ₽",
    currentPrice: "12 789 ₽",
    discount: "-19%"
  },
  {
    id: 6,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F060",
    image: "../assets/img/image6.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "16 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-25%"
  },
  {
    id: 7,
    title: "Смеситель Fans G-120 для раковины",
    article: "X8V9F070",
    image: "../assets/img/image2.png",
    alt: "Смеситель",
    isHit: true,
    oldPrice: null,
    currentPrice: "1 789 ₽",
    discount: null
  },
  {
    id: 8,
    title: "Триммерная леска «Spiral-100»",
    article: "X8V9F080",
    image: "../assets/img/image8.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "3 312 ₽",
    currentPrice: "2 260 ₽",
    discount: "-20%"
  },
  {
    id: 9,
    title: "Набор гравировальных насадок Nozzle-Tok",
    article: "X8V9F090",
    image: "../assets/img/image9.png",
    alt: "Набор",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 10,
    title: "Ушпак подводной Aragio с двойным сливом",
    article: "X8V9F100",
    image: "../assets/img/image10.png",
    alt: "Инструмент",
    isHit: true,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 11,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F110",
    image: "../assets/img/image11.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "15 698 ₽",
    currentPrice: "12 789 ₽",
    discount: "-19%"
  },
  {
    id: 12,
    title: "Набор гравировальных насадок Nozzle-Tok",
    article: "X8V9F120",
    image: "../assets/img/image12.png",
    alt: "Набор",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 13,
    title: "Смеситель Fans G-120 для раковины",
    article: "X8V9F130",
    image: "../assets/img/image13.png",
    alt: "Смеситель",
    isHit: true,
    oldPrice: null,
    currentPrice: "1 789 ₽",
    discount: null
  },
  {
    id: 14,
    title: "Триммерная леска «Spiral-100»",
    article: "X8V9F140",
    image: "../assets/img/image14.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "3 312 ₽",
    currentPrice: "2 260 ₽",
    discount: "-20%"
  },
  {
    id: 15,
    title: "Ушпак подводной Aragio с двойным сливом",
    article: "X8V9F150",
    image: "../assets/img/image15.png",
    alt: "Ушм",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 16,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F160",
    image: "../assets/img/image16.png",
    alt: "Шлифмашина",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 17,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F017",
    image: "../assets/img/image1.png",
    alt: "Перфоратор универсальный",
    isHit: true,
    oldPrice: "15 698 ₽",
    currentPrice: "12 789 ₽",
    discount: "-19%"
  },
  {
    id: 18,
    title: "Перфоратор Fans G-120 для раковины",
    article: "X8V9F018",
    image: "../assets/img/image2.png",
    alt: "Болгарка",
    isHit: false,
    oldPrice: "1 999 ₽",
    currentPrice: "1 789 ₽",
    discount: null
  },
  {
    id: 19,
    title: "Триммерная леска «Spiral-100»",
    article: "X8V9F019",
    image: "../assets/img/image3.png",
    alt: "Триммер",
    isHit: true,
    oldPrice: "3 312 ₽",
    currentPrice: "2 260 ₽",
    discount: "-30%"
  },
  {
    id: 20,
    title: "Ушпак подводной Aragio с двойным сливом",
    article: "X8V9F020",
    image: "../assets/img/image.png",
    alt: "Ушм",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 21,
    title: "Набор гравировальных насадок Nozzle-Tok",
    article: "X8V9F021",
    image: "../assets/img/image5.png",
    alt: "Набор насадок",
    isHit: false,
    oldPrice: "15 698 ₽",
    currentPrice: "12 789 ₽",
    discount: "-19%"
  },
  {
    id: 22,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F022",
    image: "../assets/img/image6.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "16 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-25%"
  },
  {
    id: 23,
    title: "Смеситель Fans G-120 для раковины",
    article: "X8V9F023",
    image: "../assets/img/image2.png",
    alt: "Смеситель",
    isHit: true,
    oldPrice: null,
    currentPrice: "1 789 ₽",
    discount: null
  },
  {
    id: 24,
    title: "Триммерная леска «Spiral-100»",
    article: "X8V9F024",
    image: "../assets/img/image8.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "3 312 ₽",
    currentPrice: "2 260 ₽",
    discount: "-20%"
  },
  {
    id: 25,
    title: "Набор гравировальных насадок Nozzle-Tok",
    article: "X8V9F025",
    image: "../assets/img/image9.png",
    alt: "Набор",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 26,
    title: "Ушпак подводной Aragio с двойным сливом",
    article: "X8V9F026",
    image: "../assets/img/image10.png",
    alt: "Инструмент",
    isHit: true,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 27,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F027",
    image: "../assets/img/image11.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "15 698 ₽",
    currentPrice: "12 789 ₽",
    discount: "-19%"
  },
  {
    id: 28,
    title: "Набор гравировальных насадок Nozzle-Tok",
    article: "X8V9F028",
    image: "../assets/img/image12.png",
    alt: "Набор",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 29,
    title: "Смеситель Fans G-120 для раковины",
    article: "X8V9F029",
    image: "../assets/img/image13.png",
    alt: "Смеситель",
    isHit: true,
    oldPrice: null,
    currentPrice: "1 789 ₽",
    discount: null
  },
  {
    id: 30,
    title: "Триммерная леска «Spiral-100»",
    article: "X8V9F030",
    image: "../assets/img/image14.png",
    alt: "Перфоратор",
    isHit: false,
    oldPrice: "3 312 ₽",
    currentPrice: "2 260 ₽",
    discount: "-20%"
  },
  {
    id: 31,
    title: "Ушпак подводной Aragio с двойным сливом",
    article: "X8V9F031",
    image: "../assets/img/image15.png",
    alt: "Ушм",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  },
  {
    id: 32,
    title: "Перфоратор универсальный Wanker X645-6G 1450W",
    article: "X8V9F032",
    image: "../assets/img/image16.png",
    alt: "Шлифмашина",
    isHit: false,
    oldPrice: "14 999 ₽",
    currentPrice: "12 789 ₽",
    discount: "-15%"
  }
];

// 2. DOM elementni ushlab olish
const productsContainer = document.querySelector(".product-container");

productsData.map((item) => {
    productsContainer.innerHTML += `

        <article class="product-card">

            <div class="product-card__image">

                <img src="${item.image}"
                     alt="${item.alt}">

                ${
                    item.isHit
                        ? `<span class="product-card__badge">хит</span>`
                        : ""
                }

            </div>

            <p class="product-card__article">
                Артикул: ${item.article}
            </p>

            <h3 class="product-card__title">
                ${item.title}
            </h3>

            <div class="product-card__price">

                ${
                    item.oldPrice
                        ? `<del>${item.oldPrice}</del>`
                        : ""
                }

                <strong>${item.currentPrice}</strong>

                ${
                    item.discount
                        ? `<span>${item.discount}</span>`
                        : ""
                }

            </div>

            <div class="product-card__bottom">

                <button class="buy-button">
                    <img src="../assets/img/Frame 38 (10).png" alt="">
                    Купить
                </button>

                <div class="card-icons">
                    <img src="../assets/img/Frame 38 (11).png" alt="">
                    <img src="../assets/img/Frame 38 (12).png" alt="">
                </div>

            </div>

        </article>

    `;
});