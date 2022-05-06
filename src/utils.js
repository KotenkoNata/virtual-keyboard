function isSpecial(element) {
  return element.layouts.en.length > 1
    || element.layouts.en === '⌃'
    || element.layouts.en === '⌥'
    || element.layouts.en === '⌘'
    || element.layouts.en === '▲'
    || element.layouts.en === '◀'
    || element.layouts.en === '▼'
    || element.layouts.en === '▶';
}

function findLayoutByLi(element) {
  return keyLayout.flat()
    .filter((layout) => layout.code === element.dataset.key)[0];
}

function isSpace(element) {
  return element.layouts.en === 'space';
}

function isDelete(element) {
  return element.layouts.en === 'delete';
}

function handleKeyAndTextarea(prev, element) {
  if (isSpace(element)) {
    return `${prev}`;
  }

  if (isDelete(element)) {
    return prev.substring(0, prev.length - 1);
  }
  return prev + element.layouts.en;
}
