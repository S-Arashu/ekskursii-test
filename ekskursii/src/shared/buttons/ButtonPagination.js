import createElement from "../../helpers/createElement";
import createSvg from "../../helpers/createSvg";

/**
 * Создает кнопку пагинации с SVG-иконкой
 *
 * @param {string} svg - Путь к файлу SVG-иконки
 * @param {HTMLElement} parent - Родительский элемент, куда будет добавлена кнопка
 * @returns {Promise<HTMLElement>} Промис с созданной кнопкой класса 'button_pagination'
 *
 * @example
 * Создает кнопку пагинации со стрелкой вправо
 * const nextBtn = await ButtonPagination('/assets/arrow-right.svg', paginationContainer);
 */

async function ButtonPagination(svg, parent) {
  const button = createElement("button", "button_pagination", parent);
  const svgImg = await createSvg(svg);
  button.append(svgImg);

  return button;
}

export default ButtonPagination;
