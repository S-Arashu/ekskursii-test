import createElement from "../../helpers/createElement";
import ButtonListOrange from "../../shared/buttons/ButtonListOrange";
import ButtonListWhite from "../../shared/buttons/ButtonListWhite";
import ButtonOutline from "../../shared/buttons/ButtonOutline";
import createCurrencyList from "../../shared/lists/currency/currencyList";
import { insertSvg } from "../../helpers/createSvg";
import createContactsList from "../../shared/lists/contacts/contactsList";

function Header() {
  const currentCur = localStorage.getItem("currency") || "BYN";
  const NAV = ["Программа", "Расписание", "Отзывы"];
  const BUTTONS = ["Контакты", currentCur, "РУС"];

  const header = createElement("header", "header", document.body);

  const container = createElement("div", "container", header);

  const wrapper = createElement("div", "header__wrapper", container);

  createElement("img", "header__img", wrapper, "", {
    src: "/src/assets/logo-short.png",
    alt: "Logo",
  });

  const headerNav = createElement("nav", "header__nav", wrapper);

  NAV.forEach((linkText) => {
    createElement("a", "nav__link", headerNav, linkText);
  });

  for (let i = 0; i < BUTTONS.length; i += 1) {
    if (i === 0) {
      ButtonListWhite(BUTTONS[i], headerNav, "src/assets/arrow-down-icon.svg");
    } else {
      ButtonListOrange(BUTTONS[i], headerNav, "src/assets/arrow-down-icon.svg");
    }
  }

  ButtonOutline("Бронировать", headerNav);

  const navButtons = document.querySelectorAll(".button__wrapper");
  for (let i = 0; i < navButtons.length; i += 1) {
    if (navButtons.length !== 0 && navButtons[i].textContent === currentCur) {
      navButtons[i].addEventListener("mouseenter", () => {
        const block = createCurrencyList(navButtons[i]);
        block.classList.add("currency-block_active");

        block.addEventListener("click", (event) => {
          const target = event.target;

          localStorage.setItem("currency", target.textContent);
          navButtons[i].firstChild.innerText = target.textContent;
          insertSvg(navButtons[i].firstChild, "src/assets/arrow-down-icon.svg");
          block.classList.remove("currency-block_active");
          block.remove();
        });
      });

      navButtons[i].addEventListener("mouseleave", () => {
        const block = document.querySelector(".currency-block_active");
        if (block) {
          block.classList.add("currency-block_leaving");
          block.classList.remove("currency-block_active");
          setTimeout(() => {
            block.remove();
          }, 500);
        }
      });
    }

    if (navButtons.length !== 0 && navButtons[i].textContent === "Контакты") {
      navButtons[i].addEventListener("mouseenter", () => {
        const block = createContactsList(navButtons[i]);
        block.classList.add("contacts-block_active");
      });

      navButtons[i].addEventListener("mouseleave", () => {
        const block = document.querySelector(".contacts-block_active");
        if (block) {
          block.classList.add("contacts-block_leaving");
          block.classList.remove("contacts-block_active");
          setTimeout(() => {
            block.remove();
          }, 500);
        }
      });
    }
  }

  return header;
}

export default Header;
