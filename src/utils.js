function isSpecial(element) {
  return element.layouts.en.lower.length > 1;
}

function findLayoutByLi(element) {
  return keyLayout.flat()
    .filter((layout) => layout.code === element.dataset.key)[0];
}

function isSpace(element) {
  return element.code === 'Space';
}
function isControl(element) {
  return element.code === 'ControlLeft' || element.code === 'ControlRight';
}
function isOption(element) {
  return element.code === 'AltRight' || element.code === 'AltLeft';
}
function isCommand(element) {
  return element.code === 'MetaLeft' || element.code === 'MetaRight';
}
function isTab(element) {
  return element.code === 'Tab';
}
function isReturn(element) {
  return element.code === 'Enter';
}

function isCapsLock(element) {
  return element.code === 'CapsLock';
}

function isDelete(element) {
  return element.code === 'Backspace';
}

function handleKeyAndTextarea(currentTextValue, isCapsEnabled, lang, li) {

  const keyLayout = findLayoutByLi(li);

  if (isSpace(keyLayout)) {
    return `${currentTextValue} `;
  }
  if (isCapsLock(keyLayout)) {
    return currentTextValue;
  }
  if (keyLayout.isShift) {
    return currentTextValue;
  }
  if (isCommand(keyLayout)) {
    return currentTextValue;
  }
  if (isControl(keyLayout)) {
    return currentTextValue;
  }
  if (isOption(keyLayout)) {
    return currentTextValue;
  }

  if (isReturn(keyLayout)) {
    return `${currentTextValue}\n`;
  }

  if (isTab(keyLayout)) {
    return `${currentTextValue}    `;
  }
  if (isDelete(keyLayout)) {
    return currentTextValue.substring(0, currentTextValue.length - 1);
  }

  return currentTextValue + li.dataset.value;
}

function setLangLocalStorage(lang) {
  localStorage.setItem('lang', `${lang}`);
}

function getLangLocalStorage() {
  return localStorage.getItem('lang');
}