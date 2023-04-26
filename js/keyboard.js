import keys from './data-keys.js';
import serviceKeys from './data-service-key.js';
import CssClasses from './data-css.js';

const TITLE_TEXT = 'RSS Virtual keyboard';

export default class Keyboard {
  constructor(node) {
    this.body = node;
    this.keyboard = null;
    this.title = null;
    this.textarea = null;
    this.row = null;
    this.key = null;
    this.span = null;
    this.textElement = null;
    this.element = null;
    this.isLanguageRu = false;
    this.isLanguageEn = true;
    this.currentLanguage = null;
    this.isCapsLock = false;
    this.isShift = false;

    this.init();
  }

  init() {
    this.title = this.createElement('h1', CssClasses.TITLE);
    this.textarea = this.createElement('textarea', CssClasses.TEXT_AREA);
    this.keyboard = this.creatKeyboard();
    this.currentLanguage = this.setCurrentLanguage();

    this.title.innerHTML = TITLE_TEXT;
    this.body.append(this.title);
    this.body.append(this.textarea);
    this.body.append(this.keyboard);
  }

  creatKeyboard() {
    const keyboard = this.createElement('div', CssClasses.KEYBOARD);

    keys.forEach((arrayKeysRow) => {
      this.row = this.createElement('div', CssClasses.ROW);
      arrayKeysRow.forEach((elementKey) => {
        this.key = this.createElement('div', CssClasses.KEY, elementKey.id.toLocaleLowerCase());
        this.key.setAttribute('id', elementKey.id.toLocaleLowerCase());
        this.key.append(this.creatTextKey(CssClasses.EN, elementKey));
        this.key.append(this.creatTextKey(CssClasses.RU, elementKey));
        this.key.addEventListener('click', this.mouseHandler.bind(this));
        this.key.addEventListener('mousedown', this.mousedownHandler.bind(this));
        this.key.addEventListener('mouseup', this.mouseupHandler.bind(this));
        this.row.append(this.key);
      });

      keyboard.append(this.row);
    });

    return keyboard;
  }

  addTextToElement(element, text) {
    this.testElement = element;
    this.testElement.innerHTML = text;
    return this.testElement;
  }

  creatTextKey(language = CssClasses.EN, elementKey = {}) {
    this.span = this.createElement('span');
    this.span.classList.add(language);

    this.span.append(this.addTextToElement(this.createElement('span', CssClasses.TEXT), elementKey[language].text));
    this.span.append(this.addTextToElement(this.createElement('span', CssClasses.TEXT_SHIFT, CssClasses.VISUALLY_HIDDEN), elementKey[language].textShift));
    this.span.append(this.addTextToElement(this.createElement('span', CssClasses.TEXT_CAPS, CssClasses.VISUALLY_HIDDEN), elementKey[language].textCaps));
    this.span.append(this.addTextToElement(this.createElement('span', CssClasses.TEXT_SHIFT_CAPS, CssClasses.VISUALLY_HIDDEN), elementKey[language].textShiftCaps));

    return this.span;
  }

  pressBackspace() {
    const { selectionStart: caret, value } = this.textarea;
    this.textarea.value = value.substring(0, caret - 1) + value.substring(caret, value.length);
    this.textarea.focus();

    if (caret > 0) {
      this.textarea.setSelectionRange(caret - 1, caret - 1);
    } else {
      this.textarea.setSelectionRange(caret - 1, caret);
    }
  }

  pressDelete() {
    const { selectionStart: caret, value } = this.textarea;
    this.textarea.value = value.substring(0, caret) + value.substring(caret + 1, value.length);
    this.textarea.focus();

    this.textarea.setSelectionRange(caret, caret);
  }

  pressEnter() {
    this.addTextToTextarea('\n');
  }

  pressTab() {
    this.addTextToTextarea('\t');
  }

  pressCapsLock(event) {
    const textLowerCase = this.keyboard.querySelectorAll(`.${CssClasses.TEXT}`);
    const textUpperCase = this.keyboard.querySelectorAll(`.${CssClasses.TEXT_CAPS}`);
    event.currentTarget.classList.toggle(CssClasses.KEY_ACTIVE);

    textLowerCase.forEach((textKey) => {
      textKey.classList.toggle(`${CssClasses.VISUALLY_HIDDEN}`);
    });

    textUpperCase.forEach((textKey) => {
      textKey.classList.toggle(`${CssClasses.VISUALLY_HIDDEN}`);
    });

    this.isCapsLock = !this.isCapsLock;
  }

  pressShift() {
    if (this.isCapsLock) {
      const textUpperCase = this.keyboard.querySelectorAll(`.${CssClasses.TEXT_CAPS}`);
      const textShift = this.keyboard.querySelectorAll(`.${CssClasses.TEXT_SHIFT_CAPS}`);

      textUpperCase.forEach((textKey) => {
        textKey.classList.toggle(`${CssClasses.VISUALLY_HIDDEN}`);
      });
      textShift.forEach((textKey) => {
        textKey.classList.toggle(`${CssClasses.VISUALLY_HIDDEN}`);
      });
    } else {
      const textLowerCase = this.keyboard.querySelectorAll(`.${CssClasses.TEXT}`);
      const textShift = this.keyboard.querySelectorAll(`.${CssClasses.TEXT_SHIFT}`);

      textLowerCase.forEach((textKey) => {
        textKey.classList.toggle(`${CssClasses.VISUALLY_HIDDEN}`);
      });
      textShift.forEach((textKey) => {
        textKey.classList.toggle(`${CssClasses.VISUALLY_HIDDEN}`);
      });
    }

    this.isShift = !this.isShift;
  }

  addTextToTextarea(newValue = '') {
    const { selectionStart: caret, value } = this.textarea;
    this.textarea.value = `${value.substring(0, caret)}${newValue}${value.substring(caret, value.length)}`;
    this.textarea.focus();

    this.textarea.setSelectionRange(caret + 1, caret + 1);
  }

  mouseHandler(event) {
    const codeKey = event.currentTarget.className.split(' ')[1];

    if (!serviceKeys.includes(codeKey) && codeKey !== 'space') {
      const keyLanguage = event.currentTarget.querySelector(`.${this.currentLanguage}`);
      const array = [...keyLanguage.childNodes];

      const newText = array.filter((text) => !text.className.includes(CssClasses.VISUALLY_HIDDEN));

      this.addTextToTextarea(newText[0].innerHTML);
    }

    if (codeKey === 'space') {
      this.addTextToTextarea(' ');
    }

    if (codeKey === 'backspace') {
      this.pressBackspace();
    }

    if (codeKey === 'delete') {
      this.pressDelete();
    }

    if (codeKey === 'enter') {
      this.pressEnter();
    }

    if (codeKey === 'tab') {
      this.pressTab();
    }

    if (codeKey === 'capslock') {
      this.pressCapsLock(event);
    }

    if ((codeKey === 'altleft' || codeKey === 'altright') && (codeKey === 'controlleft' || codeKey === 'controlright')) {
      this.currentLanguage = this.setCurrentLanguage(this.isLanguageRu);
    }
  }

  mousedownHandler(event) {
    const codeKey = event.currentTarget.className.split(' ')[1];

    if (codeKey !== 'capslock') {
      event.currentTarget.classList.add(CssClasses.KEY_ACTIVE);
    }

    if (codeKey === 'shiftleft' || codeKey === 'shiftright') {
      this.pressShift();
    }
  }

  mouseupHandler(event) {
    const codeKey = event.currentTarget.className.split(' ')[1];

    if (codeKey !== 'capslock') {
      event.currentTarget.classList.remove(CssClasses.KEY_ACTIVE);
    }

    if (codeKey === 'shiftleft' || codeKey === 'shiftright') {
      this.pressShift();
    }
  }

  setCurrentLanguage(isLanguageRu = this.isLanguageRu) {
    if (isLanguageRu) {
      Array.from(this.keyboard.querySelectorAll(`.${CssClasses.RU}`)).forEach((element) => element.classList.remove(CssClasses.VISUALLY_HIDDEN));
      Array.from(this.keyboard.querySelectorAll(`.${CssClasses.EN}`)).forEach((element) => element.classList.add(CssClasses.VISUALLY_HIDDEN));
      this.isLanguageRu = !this.isLanguageRu;
      this.isLanguageEn = !this.isLanguageEn;
      return CssClasses.RU;
    }

    Array.from(this.keyboard.querySelectorAll(`.${CssClasses.EN}`)).forEach((element) => element.classList.remove(CssClasses.VISUALLY_HIDDEN));
    Array.from(this.keyboard.querySelectorAll(`.${CssClasses.RU}`)).forEach((element) => element.classList.add(CssClasses.VISUALLY_HIDDEN));
    this.isLanguageRu = !this.isLanguageRu;
    this.isLanguageEn = !this.isLanguageEn;
    return CssClasses.EN;
  }

  createElement(tagName, ...className) {
    this.element = document.createElement(tagName);
    if (className.length > 0) {
      this.element.classList.add(...className);
    }
    return this.element;
  }
}
