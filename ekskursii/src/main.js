import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Schedule from "./components/Schedule/Schedule";
import "./main.css";

const app = document.querySelector("#app");

if (!app) {
  console.error("Элемент #app не найден в DOM");
} else {
  app.append(Header());
  app.append(Hero());
  app.append(Schedule(app));
}

// Инициализируем логику
document.addEventListener("DOMContentLoaded", () => {});
