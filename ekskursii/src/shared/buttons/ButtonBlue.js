import createElement from "../../helpers/createElement";

function ButtonBlue(text, parent) {
  const button = createElement("button", "button_blue", parent);
  button.innerText = text;
  return button;
}
