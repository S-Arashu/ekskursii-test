import createElement from "../../helpers/createElement";

/**
 * Создает HTML-селект с заданными опциями
 *
 * @param {HTMLElement} parent - Родительский элемент для формы
 * @param {string[]} [text=[]] - Массив текстов для опций селекта
 * @param {boolean} [selected=false] - Если true, первая опция будет выбрана
 * @returns {HTMLElement} Созданная форма с селектом
 *
 * @example
 * Создает селект с городами
 * const select = Select('/assets/arrow-down.svg', formContainer, ['Минск', 'Гомель', 'Гродно'], true);
 *
 * @example
 * Создает селект без выбранной опции
 * const select = Select('', formContainer, ['Опция 1', 'Опция 2']);
 */

function Select(parent, text = [], selected = false) {
  const form = createElement("form", "form", parent);
  const list = createElement("p", "form__list", form);
  const select = createElement("select", "form__select", list, { size: 3 });
  for (let i = 0; i < text.length; i += 1) {
    const option = createElement("option", "form__option", select, {
      value: text[i],
    });
    if (selected && i === 0) {
      option.selected = true;
    }
  }
}

export default Select;
