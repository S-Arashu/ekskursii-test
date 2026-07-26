import createElement from "../../helpers/createElement";
import { insertSvg } from "../../helpers/createSvg";

const STAR_ICON = "src/assets/star-icon.svg";
const STARS_COUNT = 5;

/**
 * Отображает рейтинг в виде 5 звёзд, закрашенных по количеству rating
 *
 * @param {Object} params
 * @param {number} params.rating - количество закрашенных звёзд (0-5), приходит с бэка
 * @param {HTMLElement} parent
 * @returns {HTMLElement|null}
 */
function StarRating({ rating = 0 }, parent) {
  if (!parent) {
    console.error("StarRating: parent не передан");
    return null;
  }

  const wrapper = createElement("div", "star-rating", parent);

  for (let i = 1; i <= STARS_COUNT; i += 1) {
    const isFilled = i <= rating;
    const starEl = createElement(
      "span",
      `star-rating__star${isFilled ? " star-rating__star_filled" : ""}`,
      wrapper,
    );
    insertSvg(starEl, STAR_ICON);
  }

  return wrapper;
}

export default StarRating;
