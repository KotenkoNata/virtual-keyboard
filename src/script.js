const body = document.querySelector('#body');

const keyboard = {
  elements: {
    textarea: null,
    main: null,
    keysContainer: null,
    keys: [],
  },

  inputField: undefined,

  properties: {
    value: '',
    capsLock: false,
    language: 'en',
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.textarea = document.createElement('div');
    this.elements.textarea.insertAdjacentHTML('beforeend', `
      <div class="text-area-container">
          <textarea placeholder="Tap to start" class="input"></textarea>
      </div>
    `);
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.appendChild(this.elements.textarea);
    this.elements.textarea.appendChild(this.elements.keysContainer);
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.main.classList.add('container');
    this.elements.textarea.classList.add('container-text-keyboard');
    this.elements.keysContainer.classList.add('keyboard-container');

    this.elements.keys = this.elements.keysContainer.querySelectorAll('li');

    // Add to DOM
    this.elements.main.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');
    document.body.appendChild(this.elements.main);
    body.insertAdjacentHTML('beforeend', '<div class="description">'
      + '<p>Keyboard was created for macOS</p>'
      + '<p>Switch between languages: command (⌘) + space</p>'
      + '</div>');

    this.inputField = document.querySelectorAll('.input')[0];
  },
  createKeys() {
    const fragment = document.createDocumentFragment();

    keyLayout.forEach((firstArray) => {
      const ulElement = document.createElement('ul');

      ulElement.classList.add('rows');

      firstArray.forEach((element) => {
        const liElement = document.createElement('li');

        if (isSpecial(element)) {
          liElement.classList.add('special');
        }

        if (element.layouts.en === 'space') {
          liElement.classList.add('Space');
        }

        if (this.properties.language === 'en') {
          liElement.textContent = element.layouts.en.toLowerCase();
        } else {
          liElement.textContent = element.layouts.rus.toLowerCase();
        };

        liElement.classList.add(`${element.code}`);
        liElement.dataset.key = element.code;
        ulElement.appendChild(liElement);
      });
      fragment.appendChild(ulElement);
    });
    return fragment;
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (!key.classList.contains('special')) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  keyBehavior() {
    const capsLockElement = document.querySelector('.CapsLock');
    capsLockElement.addEventListener('click', () => {
      this._toggleCapsLock();
      capsLockElement.classList.toggle('capsLock-active', this.properties.capsLock);
    });
  },

  _toggleLanguage() {
    if (this.properties.language === 'en') {
      this.properties.language = 'rus';
    } else {
      this.properties.language = 'en';
    }

    for (const li of this.elements.keys) {
      if (!li.classList.contains('special')) {


        const a = keyLayout.flat().filter((layout) => {
          return layout.code === li.dataset.key;
        })[0]


        li.textContent = a.layouts[this.properties.language]

      }
    }
  },

  handleKeyPress() {
    document.querySelectorAll('.keyboard-container .rows li').forEach((element) => {
      element.addEventListener('click', (event) => {
        const layout = findLayoutByLi(event.target);
        if (layout.layouts.en === 'shift') {
          this._toggleCapsLock();
        }
        this.inputField.value = handleKeyAndTextarea(this.inputField.value, layout, this.properties.capsLock);
      });
    });
    document.addEventListener('keydown', (event) => {

      event.preventDefault();

      const array = this.elements.keys;


      const keyButton = [...array].filter((li) => li.dataset.key === event.code)[0];

      if (keyButton.dataset.key === 'Space') {

        const keyMeta = [...array].filter((li) => li.classList.contains('active'));

        if (keyMeta.length === 1 && keyMeta[0].dataset.key === 'ControlLeft') {
          this._toggleLanguage();

        }
      }


      array.forEach((li) => {
        if (li.classList.contains(event.code)) {
          if (li.dataset.key === 'ShiftLeft' || li.dataset.key === 'ShiftRight') {
            this._toggleCapsLock();
          }
          li.classList.add('active');
          const layout = findLayoutByLi(li);
          this.inputField.value = handleKeyAndTextarea(this.inputField.value, layout, this.properties.capsLock);
        }
      });
    });
  },

  handleKeyDown() {
    const self = this;
    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      const array = this.elements.keys;
      if (event.key === 'Shift') {
        self._toggleCapsLock();
      }
      const keyButton = [...array]
        .filter((li) => li.dataset.key === event.code)[0];
      keyButton.classList.remove('active');
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
  keyboard.keyBehavior();
  keyboard.handleKeyPress();
  keyboard.handleKeyDown();
});
