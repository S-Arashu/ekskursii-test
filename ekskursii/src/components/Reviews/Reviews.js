import createElement from "../../helpers/createElement";
import ReviewCard from "./ReviewCard";
import ButtonPagination from "../../shared/buttons/ButtonPagination";

const MOBILE_QUERY = "(max-width: 550px)";

const REVIEWS_DATA = [
  {
    id: 1,
    avatar: "src/assets/avatar.png",
    name: "Марина",
    city: "Санкт-Петербург",
    date: "11-Июня-2026",
    rating: 4,
    text: "Поездка очень понравилась! Усадьба Огинского, которого знают все, но о нем знают меньше. Быт белорусской усадьбы атмосфере. Три очень интересных костела, православный храм. Гид Юрий рассказывал интересно, видна любовь к родному краю, что всегда вдохновляет. Три очень интересных костела, православный храм. Гид Юрий рассказывал интересно, видна любовь к родному краю, что всегда вдохновляет. Три очень интересных костела, православный храм. Гид Юрий рассказывал интересно, видна любовь к родному краю, что всегда вдохновляет. Три очень интересных костела, православный храм. Гид Юрий рассказывал интересно, видна любовь к родному краю, что всегда вдохновляет.",
  },
  {
    id: 2,
    avatar: "src/assets/avatar.png",
    name: "Марина",
    city: "Санкт-Петербург",
    date: "11-Июня-2026",
    rating: 4,
    text: "Поездка очень понравилась! Усадьба Огинского, которого знают все, но о нем знают меньше. Быт белорусской усадьбы атмосфере. Три очень интересных костела, православный храм.",
  },
  {
    id: 3,
    avatar: "src/assets/avatar.png",
    name: "Марина",
    city: "Санкт-Петербург",
    date: "11-Июня-2026",
    rating: 4,
    text: "Поездка очень понравилась! Усадьба Огинского, которого знают все, но о нем знают меньше. Быт белорусской усадьбы атмосфере. Три очень интересных костела, православный храм. Гид Юрий рассказывал интересно.",
  },
  {
    id: 4,
    avatar: "src/assets/avatar.png",
    name: "Марина",
    city: "Санкт-Петербург",
    date: "11-Июня-2026",
    rating: 4,
    text: "Поездка очень понравилась! Усадьба Огинского, которого знают все, но о нем знают меньше. Быт белорусской усадьбы атмосфере. Три очень интересных костела, православный храм.",
  },
];

function Reviews() {
  const section = createElement("section", "reviews", document.body);
  const container = createElement("div", "container", section);
  const wrapper = createElement("div", "reviews__wrapper", container);

  createElement("h2", "reviews__title", wrapper, "Отзывы наших клиентов");

  const cardsBlock = createElement("div", "reviews__cards", wrapper);

  const mobileMedia = window.matchMedia(MOBILE_QUERY);
  let cardsPerView = mobileMedia.matches ? 1 : 2;
  let currentIndex = 0;

  function renderCards() {
    cardsBlock.innerHTML = "";
    for (let i = 0; i < cardsPerView; i += 1) {
      const item = REVIEWS_DATA[(currentIndex + i) % REVIEWS_DATA.length];
      ReviewCard(item, cardsBlock);
    }
  }

  renderCards();

  mobileMedia.addEventListener("change", (event) => {
    cardsPerView = event.matches ? 1 : 2;
    renderCards();
  });

  const pagination = createElement("div", "reviews__pagination", wrapper);

  ButtonPagination("src/assets/arrow-side-left.svg", pagination).then(
    (button) => {
      button.addEventListener("click", () => {
        currentIndex =
          (currentIndex - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length;
        renderCards();
      });
    },
  );

  ButtonPagination("src/assets/arrow-side-right.svg", pagination).then(
    (button) => {
      button.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % REVIEWS_DATA.length;
        renderCards();
      });
    },
  );

  return section;
}

export default Reviews;
