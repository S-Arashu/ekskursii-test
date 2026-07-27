# Ekskursii.by

Лендинг экскурсии на чистом JS (без фреймворков), Vite + flatpickr.

## Запуск

```bash
npm install
npm run dev
```

Откроется дефолтный адрес Vite (обычно `http://localhost:5173`).

## Сборка

```bash
npm run build
```

Собранные файлы попадут в `dist/`.

## Превью собранной версии

```bash
npm run preview
```

## Линтинг

```bash
npm run lint       # проверка
npm run lint:fix   # автофикс
```

## Стек

- Vanilla JS (без React/Vue) — DOM собирается через хелпер `createElement`
- Flatpickr — календарь в блоке "Расписание"
- Vite — сборка и dev-сервер
- ESLint + Prettier — линтинг и форматирование
