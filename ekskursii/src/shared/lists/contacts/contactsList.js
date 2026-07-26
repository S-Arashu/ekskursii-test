import createElement from "../../../helpers/createElement";
import createSvg from "../../../helpers/createSvg";

function createContactsList(parent) {
  const contactsBlock = createElement("div", "contacts-block", parent);

  const phoneNumberBlock = createElement(
    "div",
    "contacts-block__number-block",
    contactsBlock,
  );
  const iconBlock = createElement(
    "div",
    "number-block__icon-block",
    phoneNumberBlock,
  );
  createIconsForBlock(iconBlock, "src/assets/phone-icon.svg");

  createElement(
    "a",
    "number-block__phone",
    phoneNumberBlock,
    "+375 29 756-66-65",
    {
      href: "tel: +37529756-66-65",
    },
  );

  const socialsBlock = createElement(
    "div",
    "contacts-block__socials-block",
    contactsBlock,
  );
  const SOCIALS_ICONS = [
    "src/assets/whatsapp-icon.svg",
    "src/assets/telegram-icon.svg",
    "src/assets/viber-icon.svg",
  ];

  for (let i = 0; i < SOCIALS_ICONS.length; i += 1) {
    const iconBlock = createElement(
      "div",
      "socials-block__icon-block",
      socialsBlock,
    );
    createIconsForBlock(iconBlock, SOCIALS_ICONS[i]);
  }

  async function createIconsForBlock(parent, svg) {
    const svgImg = await createSvg(svg);

    parent.append(svgImg);
  }

  return contactsBlock;
}

export default createContactsList;
