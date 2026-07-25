/**
 * Создает DOM-элемент с заданными параметрами и добавляет его в родительский элемент
 *
 * @param {string} tag - HTML-тег создаваемого элемента (например, 'div', 'button')
 * @param {string} nameForClass - CSS-классы через пробел (например, 'button button--primary')
 * @param {HTMLElement} elemForInsert - Родительский элемент, куда будет добавлен новый элемент
 * @param {Object} [attr={}] - Объект с атрибутами для элемента (например, { type: 'submit', id: 'form-id' })
 * @returns {HTMLElement|null} Созданный DOM-элемент или null, если родитель не передан
 *
 * @example
 * Создает кнопку с классом 'button_blue' и добавляет в контейнер
 * const button = createElement('button', 'button_blue', container, { type: 'button' });
 *
 * @example
 * Создает div с несколькими классами
 * const wrapper = createElement('div', 'wrapper container flex', parent);
 */

function createElement(tag, nameForClass, elemForInsert, attr = {}) {
  if (!elemForInsert) {
    console.error("createElement: elemForInsert не передан или равен null");
    return null;
  }

  const elem = document.createElement(tag);
  if (nameForClass) elem.classList.add(...nameForClass.split(" "));
  if (Object.keys(attr).length > 0) {
    for (const [key, value] of Object.entries(attr)) {
      elem.setAttribute(key, value);
    }
  }
  elemForInsert.append(elem);
  return elem;
}

export default createElement;
