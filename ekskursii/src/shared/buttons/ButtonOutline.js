import createElement from "../../helpers/createElement";

function ButtonOutline(text, parent) {
  const button = createElement("button", "button_outline", parent);
  button.innerText = text;
  return button;
}

export default ButtonOutline;
