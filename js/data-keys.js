const keys = [
  [
    {
      id: 'Backquote',
      en: {
        text: '`',
        textShift: '~',
        textCaps: '`',
        textShiftCaps: '~',
      },
      ru: {
        text: 'ё',
        textShift: 'Ё',
        textCaps: 'Ё',
        textShiftCaps: 'ё',
      },
    },
    {
      id: 'Digit1',
      en: {
        text: '1',
        textShift: '!',
        textCaps: '1',
        textShiftCaps: '!',
      },
      ru: {
        text: '1',
        textShift: '!',
        textCaps: '1',
        textShiftCaps: '!',
      },
    },
    {
      id: 'Digit2',
      en: {
        text: '2',
        textShift: '@',
        textCaps: '2',
        textShiftCaps: '@',
      },
      ru: {
        text: '2',
        textShift: '"',
        textCaps: '2',
        textShiftCaps: '"',
      },
    },
    {
      id: 'Digit3',
      en: {
        text: '3',
        textShift: '#',
        textCaps: '3',
        textShiftCaps: '#',
      },
      ru: {
        text: '3',
        textShift: '№',
        textCaps: '3',
        textShiftCaps: '№',
      },
    },
    {
      id: 'Digit4',
      en: {
        text: '4',
        textShift: '$',
        textCaps: '4',
        textShiftCaps: '$',
      },
      ru: {
        text: '4',
        textShift: ';',
        textCaps: '4',
        textShiftCaps: ';',
      },
    },
    {
      id: 'Digit5',
      en: {
        text: '5',
        textShift: '%',
        textCaps: '5',
        textShiftCaps: '%',
      },
      ru: {
        text: '5',
        textShift: '%',
        textCaps: '5',
        textShiftCaps: '%',
      },
    },
    {
      id: 'Digit6',
      en: {
        text: '6',
        textShift: '^',
        textCaps: '6',
        textShiftCaps: '^',
      },
      ru: {
        text: '6',
        textShift: ':',
        textCaps: '6',
        textShiftCaps: ':',
      },
    },
    {
      id: 'Digit7',
      en: {
        text: '7',
        textShift: '&',
        textCaps: '7',
        textShiftCaps: '&',
      },
      ru: {
        text: '7',
        textShift: '?',
        textCaps: '7',
        textShiftCaps: '?',
      },
    },
    {
      id: 'Digit8',
      en: {
        text: '8',
        textShift: '*',
        textCaps: '8',
        textShiftCaps: '*',
      },
      ru: {
        text: '8',
        textShift: '*',
        textCaps: '8',
        textShiftCaps: '*',
      },
    },
    {
      id: 'Digit9',
      en: {
        text: '9',
        textShift: '(',
        textCaps: '9',
        textShiftCaps: '(',
      },
      ru: {
        text: '9',
        textShift: '(',
        textCaps: '9',
        textShiftCaps: '(',
      },
    },
    {
      id: 'Digit0',
      en: {
        text: '0',
        textShift: ')',
        textCaps: '0',
        textShiftCaps: ')',
      },
      ru: {
        text: '0',
        textShift: ')',
        textCaps: '0',
        textShiftCaps: ')',
      },
    },
    {
      id: 'Minus',
      en: {
        text: '-',
        textShift: '_',
        textCaps: '-',
        textShiftCaps: '_',
      },
      ru: {
        text: '-',
        textShift: '_',
        textCaps: '-',
        textShiftCaps: '_',
      },
    },
    {
      id: 'Equal',
      en: {
        text: '=',
        textShift: '+',
        textCaps: '=',
        textShiftCaps: '+',
      },
      ru: {
        text: '=',
        textShift: '+',
        textCaps: '=',
        textShiftCaps: '+',
      },
    },
    {
      id: 'Backspace',
      en: {
        text: 'Backspace',
        textShift: 'Backspace',
        textCaps: 'Backspace',
        textShiftCaps: 'Backspace',
      },
      ru: {
        text: 'Backspace',
        textShift: 'Backspace',
        textCaps: 'Backspace',
        textShiftCaps: 'Backspace',
      },
    },
  ],
  [
    {
      id: 'Tab',
      en: {
        text: 'Tab',
        textShift: 'Tab',
        textCaps: 'Tab',
        textShiftCaps: 'Tab',
      },
      ru: {
        text: 'Tab',
        textShift: 'Tab',
        textCaps: 'Tab',
        textShiftCaps: 'Tab',
      },
    },
    {
      id: 'KeyQ',
      en: {
        text: 'q',
        textShift: 'Q',
        textCaps: 'Q',
        textShiftCaps: 'q',
      },
      ru: {
        text: 'й',
        textShift: 'Й',
        textCaps: 'Й',
        textShiftCaps: 'й',
      },
    },
    {
      id: 'KeyW',
      en: {
        text: 'w',
        textShift: 'W',
        textCaps: 'W',
        textShiftCaps: 'w',
      },
      ru: {
        text: 'ц',
        textShift: 'Ц',
        textCaps: 'Ц',
        textShiftCaps: 'ц',
      },
    },
    {
      id: 'KeyE',
      en: {
        text: 'e',
        textShift: 'E',
        textCaps: 'E',
        textShiftCaps: 'e',
      },
      ru: {
        text: 'у',
        textShift: 'У',
        textCaps: 'У',
        textShiftCaps: 'у',
      },
    },
    {
      id: 'KeyR',
      en: {
        text: 'r',
        textShift: 'R',
        textCaps: 'R',
        textShiftCaps: 'r',
      },
      ru: {
        text: 'к',
        textShift: 'К',
        textCaps: 'К',
        textShiftCaps: 'к',
      },
    },
    {
      id: 'KeyT',
      en: {
        text: 't',
        textShift: 'T',
        textCaps: 'T',
        textShiftCaps: 't',
      },
      ru: {
        text: 'е',
        textShift: 'Е',
        textCaps: 'Е',
        textShiftCaps: 'е',
      },
    },
    {
      id: 'KeyY',
      en: {
        text: 'y',
        textShift: 'Y',
        textCaps: 'Y',
        textShiftCaps: 'y',
      },
      ru: {
        text: 'н',
        textShift: 'Н',
        textCaps: 'Н',
        textShiftCaps: 'н',
      },
    },
    {
      id: 'KeyU',
      en: {
        text: 'u',
        textShift: 'U',
        textCaps: 'U',
        textShiftCaps: 'u',
      },
      ru: {
        text: 'г',
        textShift: 'Г',
        textCaps: 'Г',
        textShiftCaps: 'г',
      },
    },
    {
      id: 'KeyI',
      en: {
        text: 'i',
        textShift: 'I',
        textCaps: 'I',
        textShiftCaps: 'i',
      },
      ru: {
        text: 'ш',
        textShift: 'Ш',
        textCaps: 'Ш',
        textShiftCaps: 'ш',
      },
    },
    {
      id: 'KeyO',
      en: {
        text: 'o',
        textShift: 'O',
        textCaps: 'O',
        textShiftCaps: 'o',
      },
      ru: {
        text: 'щ',
        textShift: 'Щ',
        textCaps: 'Щ',
        textShiftCaps: 'щ',
      },
    },
    {
      id: 'KeyP',
      en: {
        text: 'p',
        textShift: 'P',
        textCaps: 'P',
        textShiftCaps: 'p',
      },
      ru: {
        text: 'з',
        textShift: 'З',
        textCaps: 'З',
        textShiftCaps: 'з',
      },
    },
    {
      id: 'BracketLeft',
      en: {
        text: '[',
        textShift: '{',
        textCaps: '[',
        textShiftCaps: '{',
      },
      ru: {
        text: 'х',
        textShift: 'Х',
        textCaps: 'Х',
        textShiftCaps: 'х',
      },
    },
    {
      id: 'BracketRight',
      en: {
        text: ']',
        textShift: '}',
        textCaps: ']',
        textShiftCaps: '}',
      },
      ru: {
        text: 'ъ',
        textShift: 'Ъ',
        textCaps: 'Ъ',
        textShiftCaps: 'ъ',
      },
    },
    {
      id: 'Backslash',
      en: {
        text: '\\',
        textShift: '|',
        textCaps: '\\',
        textShiftCaps: '|',
      },
      ru: {
        text: '\\',
        textShift: '/',
        textCaps: '\\',
        textShiftCaps: '/',
      },
    },
    {
      id: 'Delete',
      en: {
        text: 'Del',
        textShift: 'Del',
        textCaps: 'Del',
        textShiftCaps: 'Del',
      },
      ru: {
        text: 'Del',
        textShift: 'Del',
        textCaps: 'Del',
        textShiftCaps: 'Del',
      },
    },
  ],
  [
    {
      id: 'CapsLock',
      en: {
        text: 'CapsLock',
        textShift: 'CapsLock',
        textCaps: 'CapsLock',
        textShiftCaps: 'CapsLock',
      },
      ru: {
        text: 'CapsLock',
        textShift: 'CapsLock',
        textCaps: 'CapsLock',
        textShiftCaps: 'CapsLock',
      },
    },
    {
      id: 'KeyA',
      en: {
        text: 'a',
        textShift: 'A',
        textCaps: 'A',
        textShiftCaps: 'a',
      },
      ru: {
        text: 'ф',
        textShift: 'Ф',
        textCaps: 'Ф',
        textShiftCaps: 'ф',
      },
    },
    {
      id: 'KeyS',
      en: {
        text: 's',
        textShift: 'S',
        textCaps: 'S',
        textShiftCaps: 's',
      },
      ru: {
        text: 'ы',
        textShift: 'Ы',
        textCaps: 'Ы',
        textShiftCaps: 'ы',
      },
    },
    {
      id: 'KeyD',
      en: {
        text: 'd',
        textShift: 'D',
        textCaps: 'D',
        textShiftCaps: 'd',
      },
      ru: {
        text: 'в',
        textShift: 'В',
        textCaps: 'В',
        textShiftCaps: 'в',
      },
    },
    {
      id: 'KeyF',
      en: {
        text: 'f',
        textShift: 'F',
        textCaps: 'F',
        textShiftCaps: 'f',
      },
      ru: {
        text: 'а',
        textShift: 'А',
        textCaps: 'А',
        textShiftCaps: 'а',
      },
    },
    {
      id: 'KeyG',
      en: {
        text: 'g',
        textShift: 'G',
        textCaps: 'G',
        textShiftCaps: 'g',
      },
      ru: {
        text: 'п',
        textShift: 'П',
        textCaps: 'П',
        textShiftCaps: 'п',
      },
    },
    {
      id: 'KeyH',
      en: {
        text: 'h',
        textShift: 'H',
        textCaps: 'H',
        textShiftCaps: 'h',
      },
      ru: {
        text: 'р',
        textShift: 'Р',
        textCaps: 'Р',
        textShiftCaps: 'р',
      },
    },
    {
      id: 'KeyJ',
      en: {
        text: 'j',
        textShift: 'J',
        textCaps: 'J',
        textShiftCaps: 'j',
      },
      ru: {
        text: 'о',
        textShift: 'О',
        textCaps: 'О',
        textShiftCaps: 'о',
      },
    },
    {
      id: 'KeyK',
      en: {
        text: 'k',
        textShift: 'K',
        textCaps: 'K',
        textShiftCaps: 'k',
      },
      ru: {
        text: 'л',
        textShift: 'Л',
        textCaps: 'Л',
        textShiftCaps: 'л',
      },
    },
    {
      id: 'KeyL',
      en: {
        text: 'l',
        textShift: 'L',
        textCaps: 'L',
        textShiftCaps: 'l',
      },
      ru: {
        text: 'д',
        textShift: 'Д',
        textCaps: 'Д',
        textShiftCaps: 'д',
      },
    },
    {
      id: 'Semicolon',
      en: {
        text: ';',
        textShift: ':',
        textCaps: ';',
        textShiftCaps: ':',
      },
      ru: {
        text: 'ж',
        textShift: 'Ж',
        textCaps: 'Ж',
        textShiftCaps: 'ж',
      },
    },
    {
      id: 'Quote',
      en: {
        text: "'",
        textShift: '"',
        textCaps: "'",
        textShiftCaps: '"',
      },
      ru: {
        text: 'э',
        textShift: 'Э',
        textCaps: 'Э',
        textShiftCaps: 'э',
      },
    },
    {
      id: 'Enter',
      en: {
        text: 'Enter',
        textShift: 'Enter',
        textCaps: 'Enter',
        textShiftCaps: 'Enter',
      },
      ru: {
        text: 'Enter',
        textShift: 'Enter',
        textCaps: 'Enter',
        textShiftCaps: 'Enter',
      },
    },
  ],
  [
    {
      id: 'ShiftLeft',
      en: {
        text: 'Shift',
        textShift: 'Shift',
        textCaps: 'Shift',
        textShiftCaps: 'Shift',
      },
      ru: {
        text: 'Shift',
        textShift: 'Shift',
        textCaps: 'Shift',
        textShiftCaps: 'Shift',
      },
    },
    {
      id: 'KeyZ',
      en: {
        text: 'z',
        textShift: 'Z',
        textCaps: 'Z',
        textShiftCaps: 'z',
      },
      ru: {
        text: 'я',
        textShift: 'Я',
        textCaps: 'Я',
        textShiftCaps: 'я',
      },
    },
    {
      id: 'KeyX',
      en: {
        text: 'x',
        textShift: 'X',
        textCaps: 'X',
        textShiftCaps: 'x',
      },
      ru: {
        text: 'ч',
        textShift: 'Ч',
        textCaps: 'Ч',
        textShiftCaps: 'ч',
      },
    },
    {
      id: 'KeyC',
      en: {
        text: 'c',
        textShift: 'C',
        textCaps: 'C',
        textShiftCaps: 'c',
      },
      ru: {
        text: 'с',
        textShift: 'С',
        textCaps: 'С',
        textShiftCaps: 'с',
      },
    },
    {
      id: 'KeyV',
      en: {
        text: 'v',
        textShift: 'V',
        textCaps: 'V',
        textShiftCaps: 'v',
      },
      ru: {
        text: 'м',
        textShift: 'М',
        textCaps: 'М',
        textShiftCaps: 'м',
      },
    },
    {
      id: 'KeyB',
      en: {
        text: 'b',
        textShift: 'B',
        textCaps: 'B',
        textShiftCaps: 'b',
      },
      ru: {
        text: 'и',
        textShift: 'И',
        textCaps: 'И',
        textShiftCaps: 'и',
      },
    },
    {
      id: 'KeyN',
      en: {
        text: 'n',
        textShift: 'N',
        textCaps: 'N',
        textShiftCaps: 'n',
      },
      ru: {
        text: 'т',
        textShift: 'Т',
        textCaps: 'Т',
        textShiftCaps: 'т',
      },
    },
    {
      id: 'KeyM',
      en: {
        text: 'm',
        textShift: 'M',
        textCaps: 'M',
        textShiftCaps: 'm',
      },
      ru: {
        text: 'ь',
        textShift: 'Ь',
        textCaps: 'Ь',
        textShiftCaps: 'ь',
      },
    },
    {
      id: 'Comma',
      en: {
        text: ',',
        textShift: '<',
        textCaps: ',',
        textShiftCaps: '<',
      },
      ru: {
        text: 'б',
        textShift: 'Б',
        textCaps: 'Б',
        textShiftCaps: 'б',
      },
    },
    {
      id: 'Period',
      en: {
        text: '.',
        textShift: '>',
        textCaps: '.',
        textShiftCaps: '>',
      },
      ru: {
        text: 'ю',
        textShift: 'Ю',
        textCaps: 'Ю',
        textShiftCaps: 'ю',
      },
    },
    {
      id: 'Slash',
      en: {
        text: '/',
        textShift: '?',
        textCaps: '/',
        textShiftCaps: '?',
      },
      ru: {
        text: '.',
        textShift: ',',
        textCaps: '.',
        textShiftCaps: ',',
      },
    },
    {
      id: 'ArrowUp',
      en: {
        text: '▲',
        textShift: '▲',
        textCaps: '▲',
        textShiftCaps: '▲',
      },
      ru: {
        text: '▲',
        textShift: '▲',
        textCaps: '▲',
        textShiftCaps: '▲',
      },
    },
    {
      id: 'ShiftRight',
      en: {
        text: 'Shift',
        textShift: 'Shift',
        textCaps: 'Shift',
        textShiftCaps: 'Shift',
      },
      ru: {
        text: 'Shift',
        textShift: 'Shift',
        textCaps: 'Shift',
        textShiftCaps: 'Shift',
      },
    },
  ],
  [
    {
      id: 'ControlLeft',
      en: {
        text: 'Ctrl',
        textShift: 'Ctrl',
        textCaps: 'Ctrl',
        textShiftCaps: 'Ctrl',
      },
      ru: {
        text: 'Ctrl',
        textShift: 'Ctrl',
        textCaps: 'Ctrl',
        textShiftCaps: 'Ctrl',
      },
    },
    {
      id: 'MetaLeft',
      en: {
        text: 'Win',
        textShift: 'Win',
        textCaps: 'Win',
        textShiftCaps: 'Win',
      },
      ru: {
        text: 'Win',
        textShift: 'Win',
        textCaps: 'Win',
        textShiftCaps: 'Win',
      },
    },
    {
      id: 'AltLeft',
      en: {
        text: 'Alt',
        textShift: 'Alt',
        textCaps: 'Alt',
        textShiftCaps: 'Alt',
      },
      ru: {
        text: 'Alt',
        textShift: 'Alt',
        textCaps: 'Alt',
        textShiftCaps: 'Alt',
      },
    },
    {
      id: 'Space',
      en: {
        text: 'Space',
        textShift: 'Space',
        textCaps: 'Space',
        textShiftCaps: 'Space',
      },
      ru: {
        text: 'Space',
        textShift: 'Space',
        textCaps: 'Space',
        textShiftCaps: 'Space',
      },
    },
    {
      id: 'AltRight',
      en: {
        text: 'Alt',
        textShift: 'Alt',
        textCaps: 'Alt',
        textShiftCaps: 'Alt',
      },
      ru: {
        text: 'Alt',
        textShift: 'Alt',
        textCaps: 'Alt',
        textShiftCaps: 'Alt',
      },
    },
    {
      id: 'ArrowLeft',
      en: {
        text: '◀',
        textShift: '◀',
        textCaps: '◀',
        textShiftCaps: '◀',
      },
      ru: {
        text: '◀',
        textShift: '◀',
        textCaps: '◀',
        textShiftCaps: '◀',
      },
    },
    {
      id: 'ArrowDown',
      en: {
        text: '▼',
        textShift: '▼',
        textCaps: '▼',
        textShiftCaps: '▼',
      },
      ru: {
        text: '▼',
        textShift: '▼',
        textCaps: '▼',
        textShiftCaps: '▼',
      },
    },
    {
      id: 'ArrowRight',
      en: {
        text: '▶',
        textShift: '▶',
        textCaps: '▶',
        textShiftCaps: '▶',
      },
      ru: {
        text: '▶',
        textShift: '▶',
        textCaps: '▶',
        textShiftCaps: '▶',
      },
    },
    {
      id: 'ControlRight',
      en: {
        text: 'Ctrl',
        textShift: 'Ctrl',
        textCaps: 'Ctrl',
        textShiftCaps: 'Ctrl',
      },
      ru: {
        text: 'Ctrl',
        textShift: 'Ctrl',
        textCaps: 'Ctrl',
        textShiftCaps: 'Ctrl',
      },
    },
  ],
];
export default keys;
