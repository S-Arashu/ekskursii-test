import createElement from "../../helpers/createElement";
import { insertSvg } from "../../helpers/createSvg";

const PHONES = ["+375 17 394-49-13", "+375 29 756-66-65"];

const SOCIALS = [
  { icon: "src/assets/whatsapp-icon.svg", href: "https://wa.me/375297566665" },
  { icon: "src/assets/telegram-icon.svg", href: "https://t.me/ekskursiiby" },
  {
    icon: "src/assets/viber-icon.svg",
    href: "viber://chat?number=%2B375297566665",
  },
];

function Footer() {
  const footer = createElement("footer", "footer", document.body);
  const container = createElement("div", "container", footer);
  const wrapper = createElement("div", "footer__wrapper", container);

  const top = createElement("div", "footer__top", wrapper);

  const brandCol = createElement("div", "footer__col footer__col--brand", top);

  createElement("img", "footer__logo", brandCol, "", {
    src: "/src/assets/logo-long.png",
    alt: "Ekskursii.by",
  });

  const contacts = createElement("div", "footer__contacts", brandCol);
  createElement("h3", "footer__contacts-title", contacts, "КОНТАКТЫ");

  PHONES.forEach((phone) => {
    const phoneRow = createElement("div", "footer__phone-row", contacts);

    const iconBlock = createElement("span", "footer__phone-icon", phoneRow);
    insertSvg(iconBlock, "src/assets/phone-icon.svg");

    createElement("a", "footer__phone", phoneRow, phone, {
      href: `tel:${phone.replace(/[^\d+]/g, "")}`,
    });
  });

  const socials = createElement("div", "footer__socials", contacts);
  SOCIALS.forEach(({ icon, href }) => {
    const socialLink = createElement("a", "footer__social", socials, "", {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
    });
    insertSvg(socialLink, icon);
  });

  const legalCol = createElement("div", "footer__col footer__col--legal", top);

  createElement(
    "p",
    "footer__copyright",
    legalCol,
    '© Частное научно-производственное унитарное предприятие "Автоматизированные технологии туризма"',
  );

  createElement(
    "p",
    "footer__license",
    legalCol,
    "Свидетельство о регистрации №1808 от 9.08.2007 выдано Минским горисполкомом. УНП: 190855081 Сертификат соответствия туристических услуг СТБ № BY/112 04.03. 071.01 00099 выдан Национальным агентством по туризму РБ, действителен до 22.10.2029 г.",
  );

  const bottom = createElement("div", "footer__bottom", wrapper);
  createElement(
    "p",
    "footer__bottom-text",
    bottom,
    '© 2007–2026 Частное научно-производственное унитарное предприятие "Автоматизированные технологии туризма"',
  );

  return footer;
}

export default Footer;
