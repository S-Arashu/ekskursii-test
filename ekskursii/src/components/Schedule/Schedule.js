import createElement from "../../helpers/createElement";
import Input from "../../shared/inputs/Input";
import Select from "../../shared/inputs/Select";
import ButtonBlue from "../../shared/buttons/ButtonBlue";
import ScheduleCard from "./ScheduleCard";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const COUNT_OPTIONS = Array.from({ length: 11 }, (_, i) => ({
  value: String(i),
  text: String(i),
}));

const RU_LOCALE = {
  firstDayOfWeek: 1,
  weekdays: {
    shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    longhand: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  },
  months: {
    shorthand: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    longhand: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  },
};

const SCHEDULE_DATA = [
  {
    date: "18.06.2026",
    weekday: "чт.",
    time: "18:00",
    duration: "4 ч. 15 мин.",
    priceAdult: 60,
    priceChild: 55,
    seatsLeft: 0,
  },
  {
    date: "25.06.2026",
    weekday: "чт.",
    time: "18:00",
    duration: "4 ч. 15 мин.",
    priceAdult: 60,
    priceChild: 55,
    seatsLeft: 2,
  },
  {
    date: "25.06.2026",
    weekday: "чт.",
    time: "18:00",
    duration: "4 ч. 15 мин.",
    priceAdult: 60,
    priceChild: 55,
    seatsLeft: 2,
  },
  {
    date: "25.06.2026",
    weekday: "чт.",
    time: "18:00",
    duration: "4 ч. 15 мин.",
    priceAdult: 60,
    priceChild: 55,
    seatsLeft: 2,
  },
  {
    date: "25.06.2026",
    weekday: "чт.",
    time: "18:00",
    duration: "4 ч. 15 мин.",
    priceAdult: 60,
    priceChild: 55,
    seatsLeft: 2,
  },
];

function Schedule() {
  const section = createElement("section", "schedule", document.body);
  const container = createElement("div", "container", section);
  const wrapper = createElement("div", "schedule__wrapper", container);

  createElement("h2", "schedule__title", wrapper, "Расписание экскурсии");
  createElement(
    "h3",
    "schedule__subtitle",
    wrapper,
    "Тысячелетний Брест и Бресткая крепость",
  );

  const form = createElement("form", "schedule__form", wrapper);
  const formRow = createElement("div", "schedule__form-row", form);

  const dateFromInput = Input(
    {
      type: "text",
      label: "Дата с",
      id: "date-from",
      placeholder: "Дд.Мм.Гггг",
      icon: "src/assets/calendar-icon.svg",
    },
    formRow,
  );

  const dateToInput = Input(
    {
      type: "text",
      label: "Дата по",
      id: "date-to",
      placeholder: "Дд.Мм.Гггг",
      icon: "src/assets/calendar-icon.svg",
    },
    formRow,
  );

  const adultsSelect = Select(
    {
      label: "Кол-во взрослых",
      id: "adults",
      options: COUNT_OPTIONS,
      value: "1",
    },
    formRow,
  );

  const childrenSelect = Select(
    {
      label: "Кол-во детей",
      id: "children",
      options: COUNT_OPTIONS,
      value: "0",
    },
    formRow,
  );

  if (!dateFromInput || !dateToInput || !adultsSelect || !childrenSelect) {
    console.error("Schedule: не удалось создать поля формы");
    return section;
  }

  const searchBtn = ButtonBlue("Поиск", formRow);
  searchBtn.type = "submit";
  searchBtn.classList.add("schedule__submit");

  const dateFromPicker = flatpickr(dateFromInput.input, {
    dateFormat: "d.m.Y",
    locale: RU_LOCALE,
    disableMobile: true,
    onChange(selectedDates) {
      if (selectedDates.length > 0) {
        dateToPicker.set("minDate", selectedDates[0]);
      }
    },
  });

  const dateToPicker = flatpickr(dateToInput.input, {
    dateFormat: "d.m.Y",
    locale: RU_LOCALE,
    disableMobile: true,
  });

  dateFromInput.icon?.addEventListener("click", () => dateFromPicker.open());
  dateToInput.icon?.addEventListener("click", () => dateToPicker.open());

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      dateFrom: dateFromInput.input.value,
      dateTo: dateToInput.input.value,
      adults: adultsSelect.select.value,
      children: childrenSelect.select.value,
    };

    console.log("Поиск экскурсий:", formData);
  });

  const cardsList = createElement("div", "schedule__cards", wrapper);
  SCHEDULE_DATA.forEach((item) => {
    ScheduleCard(item, cardsList);
  });

  return section;
}

export default Schedule;
