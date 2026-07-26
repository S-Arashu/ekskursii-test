import createElement from "../../helpers/createElement";
import { createSvg } from "../../helpers/createSvg";

/**
 * Создает оранжевую кнопку-ссылка с иконкой для использования в списках
 *
 * @param {string} text - Текст кнопки (отображается в кнопке)
 * @param {HTMLElement} parent - Родительский элемент для контейнера кнопки
 * @param {string} svg - Путь к файлу SVG-иконки
 * @returns {Promise<HTMLElement>} Промис с контейнером кнопки
 *
 * @example
 * Создает кнопку "Подробнее" со стрелкой
 * const btn = await ButtonListOrange('Подробнее', container, '/assets/arrow.svg');
 */

async function ButtonListOrange(text, parent, svg) {
  const container = createElement("div", "button__wrapper", parent);
  const button = createElement(
    "div",
    "button__container button_list-orange",
    container,
    text,
  );
  const svgImg = await createSvg(svg);
  button.append(svgImg);

  return container;
}

export default ButtonListOrange;
