import createElement from "../../helpers/createElement";
import createSvg from "../../helpers/createSvg";

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
  const container = createElement("div", "button__container", parent);
  const button = createElement("button", "button_list-orange", container);
  const svgImg = await createSvg(svg);
  button.append(svgImg);
}

export default ButtonListOrange;
