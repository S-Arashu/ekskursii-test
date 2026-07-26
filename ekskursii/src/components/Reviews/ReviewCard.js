import createElement from "../../helpers/createElement";
import StarRating from "../../shared/rating/StarRating";

const TEXT_LIMIT = 220;

function ReviewCard(data, parent) {
  const { avatar, name, city, date, rating, text } = data;

  const card = createElement("div", "review-card", parent);

  createElement("img", "review-card__avatar", card, "", {
    src: avatar,
    alt: name,
  });

  const wrapper = createElement("div", "rewiew-card__wrapper", card);

  const header = createElement("div", "review-card__header", wrapper);

  const info = createElement("div", "review-card__info", header);
  const nameLine = createElement("p", "review-card__name", info, `${name}, `);
  createElement("span", "review-card__city", nameLine, city);

  createElement("span", "review-card__date", header, date);

  StarRating({ rating }, wrapper);

  const isLong = text.length > TEXT_LIMIT;
  const textEl = createElement(
    "p",
    `review-card__text${isLong ? " review-card__text_truncated" : ""}`,
    wrapper,
    text,
  );

  if (isLong) {
    const toggle = createElement(
      "span",
      "review-card__toggle",
      wrapper,
      "далее...",
    );

    toggle.addEventListener("click", () => {
      const isExpanded = textEl.classList.toggle("review-card__text_expanded");
      textEl.classList.toggle("review-card__text_truncated", !isExpanded);
      toggle.textContent = isExpanded ? "свернуть" : "далее...";
    });
  }

  return card;
}

export default ReviewCard;
