function isSpecial(element) {
  return element.layouts.en.length > 1
    || element.layouts.en === '⌃'
    || element.layouts.en === '⌥'
    || element.layouts.en === '⌘';
}

function findLayoutByLi(element) {
  return keyLayout.flat()
    .filter((layout) => layout.code === element.dataset.key)[0];
}

function isSpace(element) {
  return element.layouts.en === 'space';
}
function isControl(element) {
  return element.layouts.en === '⌃';
}
function isOption(element) {
  return element.layouts.en === '⌥';
}
function isCommand(element) {
  return element.layouts.en === '⌘';
}
function isTab(element) {
  return element.layouts.en === 'tab';
}
function isReturn(element) {
  return element.layouts.en === 'return';
}

function isShift(element) {
  return element.layouts.en === 'shift';
}

function isCapsLock(element) {
  return element.layouts.en === 'caps lock';
}

function isDelete(element) {
  return element.layouts.en === 'delete';
}

function handleKeyAndTextarea(currentTextValue, keyLayout, isCapsEnabled) {
  if (isSpace(keyLayout)) {
    return `${currentTextValue} `;
  }
  if (isCapsLock(keyLayout)) {
    return currentTextValue;
  }
  if (isShift(keyLayout)) {
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
  let nextChar = keyLayout.layouts.en;
  if (isCapsEnabled) {
    nextChar = nextChar.toUpperCase();
  }
  return currentTextValue + nextChar;
}
