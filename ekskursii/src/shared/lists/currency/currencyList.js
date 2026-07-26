import createElement from "../../../helpers/createElement";

function createCurrencyList(parent) {
  const currencyBlock = createElement("div", "currency-block", parent);

  const CURRENCY = ["BYN", "RUB", "EUR"];

  const currentCur = localStorage.getItem("currency") || "BYN";

  CURRENCY.forEach((cur) => {
    const item = createElement("div", "currency__item", currencyBlock, cur);

    if (currentCur === cur) {
      item.classList.add("currency__item_active");
    }
  });

  return currencyBlock;
}

export default createCurrencyList;
