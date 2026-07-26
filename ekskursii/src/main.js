import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./main.css";

const app = document.querySelector("#app");

app.append(Header());
app.append(Hero());

// Инициализируем логику
document.addEventListener("DOMContentLoaded", () => {});
