import createElement from "../../helpers/createElement";
import { insertSvg } from "../../helpers/createSvg";

/**
 * Создает поле ввода: подпись сверху + бордер-бокс с полем и опциональной иконкой
 *
 * @param {Object} params
 * @param {string} params.type
 * @param {string} params.label
 * @param {string} params.id
 * @param {string} [params.value]
 * @param {string} [params.placeholder]
 * @param {string} [params.icon] - путь к svg-иконке справа от поля (например, календарь)
 * @param {Object} [params.attrs]
 * @param {HTMLElement} parent
 * @param {string} [modifier]
 * @returns {Object|null} { wrapper, label, box, input, icon }
 */
function Input(
  { type, label, id, value = "", placeholder = "", icon = "", attrs = {} },
  parent,
  modifier = "",
) {
  if (!parent) {
    console.error("Input: parent не передан");
    return null;
  }

  const wrapper = createElement(
    "div",
    `input__wrapper${modifier ? ` input__wrapper--${modifier}` : ""}`,
    parent,
  );

  const labelEl = createElement("label", "input__label", wrapper, label, {
    for: id,
  });

  const box = createElement("div", "input__box", wrapper);

  const input = createElement("input", "input__field", box, "", {
    type,
    id,
    name: id,
    value,
    placeholder,
    autocomplete: "off",
    ...attrs,
  });

  let iconEl = null;
  if (icon) {
    iconEl = createElement("span", "input__icon", box);
    insertSvg(iconEl, icon);
  }

  return { wrapper, label: labelEl, box, input, icon: iconEl };
}

export default Input;
