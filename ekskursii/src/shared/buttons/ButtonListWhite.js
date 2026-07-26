import createElement from "../../helpers/createElement";
import { createSvg } from "../../helpers/createSvg";

/**
 * Создает белую кнопку-ссылка с иконкой для использования в списках
 *
 * @param {string} text - Текст кнопки (отображается в кнопке)
 * @param {HTMLElement} parent - Родительский элемент для контейнера кнопки
 * @param {string} svg - Путь к файлу SVG-иконки
 * @returns {Promise<HTMLElement>} Промис с контейнером кнопки
 *
 * @example
 * Создает белую кнопку "Смотреть все" со стрелкой
 * const btn = await ButtonListWhite('Смотреть все', container, '/assets/arrow.svg');
 */

async function ButtonListWhite(text, parent, svg) {
  const container = createElement("div", "button__wrapper", parent);
  const button = createElement(
    "div",
    "button__container button_list-white",
    container,
    text,
  );
  const svgImg = await createSvg(svg);
  button.append(svgImg);

  return container;
}

export default ButtonListWhite;
