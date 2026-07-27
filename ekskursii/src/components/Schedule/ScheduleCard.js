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

  const leftSideSchedule = createElement(
    "div",
    "schedule-card__left-wrapper",
    card,
  );
  const rightSideSchedule = createElement(
    "div",
    "schedule-card__right-wrapper",
    card,
  );

  createElement(
    "span",
    "schedule-card__date",
    leftSideSchedule,
    `${date} (${weekday})`,
  );
  createElement(
    "span",
    "schedule-card__price",
    rightSideSchedule,
    `${priceAdult.toFixed(2)}\u00A0BYN\u00A0/ ${priceChild.toFixed(2)}\u00A0BYN`,
  );

  createElement(
    "p",
    "schedule-card__time",
    leftSideSchedule,
    `Начало: ${time} ~ ${duration}`,
  );

  if (isAvailable) {
    createElement(
      "span",
      "schedule-card__seats",
      leftSideSchedule,
      `Осталось мест: ${seatsLeft}`,
    );

    const button = ButtonOrange("Бронировать", rightSideSchedule, "S");
    button.type = "button";
    button.addEventListener("click", () => {
      // TODO: подключить открытие модалки бронирования
      console.log("Бронирование:", data);
    });
  } else {
    createElement(
      "span",
      "schedule-card__seats schedule-card__seats_empty",
      leftSideSchedule,
      "Нет мест",
    );
  }

  return card;
}

export default ScheduleCard;
