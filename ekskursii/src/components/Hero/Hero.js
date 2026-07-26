import createElement from "../../helpers/createElement";
import ButtonOrange from "../../shared/buttons/ButtonOrange";
import { insertSvg } from "../../helpers/createSvg";

function Hero() {
  const heroSection = createElement("section", "hero", document.body);

  const container = createElement("div", "container", heroSection);

  const wrapper = createElement("div", "hero__wrapper", container);

  const contentBlock = createElement("div", "hero__desc", wrapper);
  const title = createElement(
    "h1",
    "desc__title",
    contentBlock,
    "Экскурсия Тысячелетний Брест и Брестская крепость ",
  );
  const desc = createElement(
    "p",
    "desc__info",
    contentBlock,
    "Погрузитесь в историю наследия заповедной памяти",
  );
  const buttonWrapper = createElement(
    "div",
    "desc__button-wrapper",
    contentBlock,
  );
  const button = ButtonOrange("РАСПИСАНИЕ", buttonWrapper, "L");
  const iconBlock = createElement("div", "desc__icon-block", buttonWrapper);
  insertSvg(iconBlock, "src/assets/multiple-arrows.svg");

  return heroSection;
}

export default Hero;
