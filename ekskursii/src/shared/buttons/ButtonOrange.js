import createElement from "../../helpers/createElement";

/**
 * Создает оранжевую кнопку
 * @param {string} text - Текст кнопки
 * @param {HTMLElement} parent - Родительский элемент
 * @param {'L' | 'S'} size - Размер кнопки: 'L' (large) или 'S' (small, по умолчанию)
 * @returns {HTMLElement}
 */

function ButtonOrange(text, parent, size = "S") {
  let sizeClass = "button_orange--small";

  if (size === "L") {
    sizeClass = "button_orange--large";
  } else if (size === "S") {
    sizeClass = "button_orange--small";
  }

  const button = createElement(
    "button",
    `button_orange ${sizeClass}`,
    parent,
    text,
  );

  return button;
}

export default ButtonOrange;
