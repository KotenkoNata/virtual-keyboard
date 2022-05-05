const body = document.querySelector('#body');

body.insertAdjacentHTML('beforeend', '<div class="container">'
  + '<h1 class="title">Virtual keyboard</h1>'
  + '<div class="container-text-keyboard">'
  + '<div class="text-area-container">'
  + '<textarea placeholder="Tap to start" class="input"></textarea>'
  + '</div>'
  + '<div class="keyboard-container">'
  + '<ul class="first-row rows">'
  + '<li>'
  + '<span class="caseDown">`</span>'
  + '</li>'
  + '<li>'
  + '<span class="">1</span>'
  + '</li>'
  + '<li>'
  + '<span class="">2</span>'
  + '</li>'
  + '<li>'
  + '<span class="">3</span>'
  + '</li>'
  + '<li>'
  + '<span class="">4</span>'
  + '</li>'
  + '<li>'
  + '<span class="">5</span>'
  + '</li>'
  + '<li>'
  + '<span class="">6</span>'
  + '</li>'
  + '<li>'
  + '<span class="">7</span>'
  + '</li>'
  + '<li>'
  + '<span class="">8</span>'
  + '</li>'
  + '<li>'
  + '<span class="">9</span>'
  + '</li>'
  + '<li>'
  + '<span class="">0</span>'
  + '</li>'
  + '<li>'
  + '<span class="">-</span>'
  + '</li>'
  + '<li>'
  + '<span class="">=</span>'
  + '</li>'
  + '<li>'
  + '<span class="">delete</span>'
  + '</li>'
  + '</ul>'
  + '<ul class="first-row rows">'
  + '<li>'
  + '<span class="caseDown">tab</span>'
  + '</li>'
  + '<li>'
  + '<span class="">q</span>'
  + '</li>'
  + '<li>'
  + '<span class="">w</span>'
  + '</li>'
  + '<li>'
  + '<span class="">e</span>'
  + '</li>'
  + '<li>'
  + '<span class="">r</span>'
  + '</li>'
  + '<li>'
  + '<span class="">t</span>'
  + '</li>'
  + '<li>'
  + '<span class="">y</span>'
  + '</li>'
  + '<li>'
  + '<span class="">u</span>'
  + '</li>'
  + '<li>'
  + '<span class="">i</span>'
  + '</li>'
  + '<li>'
  + '<span class="">o</span>'
  + '</li>'
  + '<li>'
  + '<span class="">[</span>'
  + '</li>'
  + '<li>'
  + '<span class="">]</span>'
  + '</li>'
  + '<li>'
  + '<span class="">&#x0002F;</span>'
  + '</li>'
  + '</ul>'
  + '</ul>'
  + '<ul class="first-row rows">'
  + '<li>'
  + '<span class="caseDown">caps lock</span>'
  + '</li>'
  + '<li>'
  + '<span class="">a</span>'
  + '</li>'
  + '<li>'
  + '<span class="">s</span>'
  + '</li>'
  + '<li>'
  + '<span class="">d</span>'
  + '</li>'
  + '<li>'
  + '<span class="">f</span>'
  + '</li>'
  + '<li>'
  + '<span class="">g</span>'
  + '</li>'
  + '<li>'
  + '<span class="">h</span>'
  + '</li>'
  + '<li>'
  + '<span class="">j</span>'
  + '</li>'
  + '<li>'
  + '<span class="">k</span>'
  + '</li>'
  + '<li>'
  + '<span class="">l</span>'
  + '</li>'
  + '<li>'
  + '<span class="">;</span>'
  + '</li>'
  + '<li>'
  + '<span class="">&#x00027;</span>'
  + '</li>'
  + '<li>'
  + '<span class="">return</span>'
  + '</li>'
  + '</ul>'
  + '<ul class="first-row rows">'
  + '<li>'
  + '<span class="caseDown">shift</span>'
  + '</li>'
  + '<li>'
  + '<span class="">z</span>'
  + '</li>'
  + '<li>'
  + '<span class="">x</span>'
  + '</li>'
  + '<li>'
  + '<span class="">c</span>'
  + '</li>'
  + '<li>'
  + '<span class="">c</span>'
  + '</li>'
  + '<li>'
  + '<span class="">v</span>'
  + '</li>'
  + '<li>'
  + '<span class="">b</span>'
  + '</li>'
  + '<li>'
  + '<span class="">n</span>'
  + '</li>'
  + '<li>'
  + '<span class="">m</span>'
  + '</li>'
  + '<li>'
  + '<span class="">,</span>'
  + '</li>'
  + '<li>'
  + '<span class="">.</span>'
  + '</li>'
  + '<li>'
  + '<span class="">/</span>'
  + '</li>'
  + '<li>'
  + '<span class="">shift</span>'
  + '</li>'
  + '</ul>'
  + '<ul class="first-row last-row rows">'
  + '<li>'
  + '<span class="">fn</span>'
  + '</li>'
  + '<li>'
  + '<span class="">⌃</span>'
  + '</li>'
  + '<li>'
  + '<span class="">⌥</span>'
  + '</li>'
  + '<li>'
  + '<span class="">⌘</span>'
  + '</li>'
  + '<li>'
  + '<span class="space"></span>'
  + '</li>'
  + '<li>'
  + '<span class="">⌘</span>'
  + '</li>'
  + '<li>'
  + '<span class="">⌥</span>'
  + '</li>'
  + '<div class="arrow-container">'
  + '<li class="caseUp">'
  + '<span>&#x25B4;</span>'
  + '</li>'
  + '<div class="arrow">'
  + '<li>'
  + '<span class="caseLeft">&#x25C2;</span>'
  + '</li>'
  + '<li>'
  + '<span class="caseDown">&#x25BE;</span>'
  + '</li>'
  + '<li>'
  + '<span class="caseRight">&#x25B8;</span>'
  + '</li>'
  + '</div>'
  + '</div>'
  + '</ul>'
  + '</div>'
  + '</div>'
  + '</div>'
  + '<div class="description">'
  + '<p>Keyboard was created for macOS</p>'
  + '<p>Switch between languages: command (⌘) + space</p>'
  + '</div>');

document.addEventListener('keydown', (event) => {
  console.log(event.code);
  console.log(event.key);
});

const keyboard = {
  elements: {
    textarea: null,
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.textarea = document.createElement('div');
    this.elements.textarea.insertAdjacentHTML('beforeend', '<div class="text-area-container">'
      + '<textarea placeholder="Tap to start" class="input"></textarea>'
      + '</div>');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.appendChild(this.elements.textarea);
    this.elements.textarea.appendChild(this.elements.keysContainer);
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.main.classList.add('container');
    this.elements.textarea.classList.add('container-text-keyboard');
    this.elements.keysContainer.classList.add('keyboard-container');

    // Add to DOM
    this.elements.main.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');
    document.body.appendChild(this.elements.main);
    body.insertAdjacentHTML('beforeend', '<div class="description">'
      + '<p>Keyboard was created for macOS</p>'
      + '<p>Switch between languages: command (⌘) + space</p>'
      + '</div>');
  },
  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayoutEn = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
      ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['caps lock', ' a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'return'],
      ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
      ['fn', '⌃', '⌥', '⌘', 'space', '⌘', '⌥', '▲', '◀', '▼', '▶'],
    ];

    keyLayoutEn.forEach((key) => {
      const ulElement = document.createElement('ul');

      ulElement.classList.add('rows');

      key.forEach((element) => {
        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');

        liElement.appendChild(spanElement);

        if (element === '▲') {
          liElement.classList.add('top-arrow');
        }
        if (element === '◀') {
          liElement.classList.add('left-arrow');
        }
        if (element === '▼') {
          liElement.classList.add('bottom-arrow');
        }
        if (element === '▶') {
          liElement.classList.add('right-arrow');
        }

        switch (element) {
          case 'backspace':
            spanElement.addEventListener('click', () => {
              this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
              this._triggerEvent('oninput');
            });

            break;

          case 'caps':
            spanElement.addEventListener('click', () => {
              this._toggleCapsLock();
              spanElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
            });

            break;

          case 'enter':
            spanElement.addEventListener('click', () => {
              this.properties.value += '\n';
              this._triggerEvent('oninput');
            });

            break;

          case 'space':

            spanElement.addEventListener('click', () => {
              this.properties.value += ' ';
              this._triggerEvent('oninput');
            });

            break;

          default:
            spanElement.textContent = element.toLowerCase();
            spanElement.addEventListener('click', () => {
              this.properties.value += this.properties.capsLock ? element.toUpperCase() : element.toLowerCase();
              this._triggerEvent('oninput');
            });

            break;
        }

        ulElement.appendChild(liElement);
      });
      fragment.appendChild(ulElement);
    });
    return fragment;
  },

  _triggerEvent(handlerName) {
    console.log(`Test${handlerName}`);
  },

  _toggleCapsLock() {
    console.log('CapsLock toggle');
  },

  open(initial, oninput, onclose) {

  },

  close() {

  },

};

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
