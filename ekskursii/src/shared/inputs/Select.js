import createElement from "../../helpers/createElement";
import { insertSvg } from "../../helpers/createSvg";

/**
 * Создает выпадающий список: подпись сверху + бордер-бокс с select и шевроном
 *
 * @param {Object} params
 * @param {string} params.label
 * @param {string} params.id
 * @param {Array<{value: string, text: string}>} params.options
 * @param {string} [params.value]
 * @param {string} [params.icon] - путь к svg-иконке шеврона (по умолчанию arrow-down-icon.svg)
 * @param {HTMLElement} parent
 * @param {string} [modifier]
 * @returns {Object|null} { wrapper, label, box, select }
 */
function Select(
  { label, id, options = [], value = "", icon = "" },
  parent,
  modifier = "",
) {
  if (!parent) {
    console.error("Select: parent не передан");
    return null;
  }

  const wrapper = createElement(
    "div",
    `select__wrapper${modifier ? ` select__wrapper--${modifier}` : ""}`,
    parent,
  );

  const labelEl = createElement("label", "select__label", wrapper, label, {
    for: id,
  });

  const box = createElement("div", "select__box", wrapper);

  const select = createElement("select", "select__field", box, "", {
    id,
    name: id,
  });

  options.forEach((option) => {
    const optionEl = createElement(
      "option",
      "select__option",
      select,
      option.text,
      { value: option.value },
    );
    if (option.value === value) {
      optionEl.selected = true;
    }
  });

  const iconEl = createElement("span", "select__icon", box);
  insertSvg(iconEl, icon || "src/assets/arrow-down-icon.svg");

  return { wrapper, label: labelEl, box, select };
}

export default Select;
