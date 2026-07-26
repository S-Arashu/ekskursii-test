import createElement from "../../helpers/createElement";
import ButtonOrange from "../../shared/buttons/ButtonOrange";

/**
 * Создает карточку сеанса экскурсии в расписании
 *
 * @param {Object} data
 * @param {string} data.date - дата в формате "18.06.2026"
 * @param {string} data.weekday - день недели сокращенно, например "чт."
 * @param {string} data.time - время начала, например "18:00"
 * @param {string} data.duration - длительность, например "4 ч. 15 мин."
 * @param {number} data.priceAdult
 * @param {number} data.priceChild
 * @param {number} data.seatsLeft - 0 или меньше = мест нет
 * @param {HTMLElement} parent
 * @returns {HTMLElement}
 */
function ScheduleCard(data, parent) {
  const { date, weekday, time, duration, priceAdult, priceChild, seatsLeft } =
    data;

  const isAvailable = seatsLeft > 0;

  const card = createElement(
    "div",
    `schedule-card${isAvailable ? "" : " schedule-card_disabled"}`,
    parent,
  );

  const header = createElement("div", "schedule-card__header", card);
  createElement("span", "schedule-card__date", header, `${date} (${weekday})`);
  createElement(
    "span",
    "schedule-card__price",
    header,
    `${priceAdult.toFixed(2)} BYN / ${priceChild.toFixed(2)} BYN`,
  );

  createElement(
    "p",
    "schedule-card__time",
    card,
    `Начало: ${time} ~ ${duration}`,
  );

  const footer = createElement("div", "schedule-card__footer", card);

  if (isAvailable) {
    createElement(
      "span",
      "schedule-card__seats",
      footer,
      `Осталось мест: ${seatsLeft}`,
    );

    const button = ButtonOrange("Бронировать", footer, "S");
    button.type = "button";
    button.addEventListener("click", () => {
      // TODO: подключить открытие модалки бронирования
      console.log("Бронирование:", data);
    });
  } else {
    createElement(
      "span",
      "schedule-card__seats schedule-card__seats_empty",
      footer,
      "Нет мест",
    );
  }

  return card;
}

export default ScheduleCard;
