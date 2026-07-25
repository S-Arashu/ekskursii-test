/**
 * Асинхронно загружает SVG-иконку по URL и возвращает ее DOM-элемент
 * Реализовано кеширование: каждая иконка загружается только один раз
 *
 * @param {string} url - Путь к файлу SVG (например, '/assets/icons/arrow.svg')
 * @returns {Promise<SVGElement|null>} Промис с SVG-элементом или null в случае ошибки
 *
 * @example
 * Загрузка иконки для кнопки
 * const icon = await createSvg('/assets/arrow.svg');
 * button.append(icon);
 *
 * @example
 * Повторный вызов использует кешированную версию
 * const sameIcon = await createSvg('/assets/arrow.svg');
 */

const svgCache = new Map();

async function createSvg(url) {
  if (svgCache.has(url)) {
    return svgCache.get(url).cloneNode(true);
  }

  try {
    const response = await fetch(url);
    const svgText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, "image/svg+xml");
    const svgElement = doc.querySelector("svg");
    svgCache.set(url, svgElement);
    return svgElement.cloneNode(true);
  } catch (error) {
    console.error("Ошибка загрузки SVG:", error);
    return null;
  }
}

export default createSvg;
