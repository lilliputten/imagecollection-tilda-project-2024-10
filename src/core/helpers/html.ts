export function htmlToNode(html: string) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  const nNodes = template.content.childNodes.length;
  if (nNodes !== 1) {
    const error = new Error(
      `html parameter must represent a single node; got ${nNodes}. ` +
        'Note that leading or trailing spaces around an element in your ' +
        'HTML, like " <img/> ", get parsed as text nodes neighbouring ' +
        'the element; call .trim() on your input to avoid this.',
    );
    // eslint-disable-next-line no-console
    console.error('[RequestFormModal:htmlToNode]', error);
    debugger; // eslint-disable-line no-debugger
    throw error;
  }
  return template.content.firstChild;
}

/** quoteHtmlAttr -- quote all invalid characters for html */
export function quoteHtmlAttr(str: string, preserveCR?: boolean) {
  const crValue = preserveCR ? '&#13;' : '\n';
  return (
    String(str) // Forces the conversion to string
      .replace(/&/g, '&amp;') // This MUST be the 1st replacement
      .replace(/'/g, '&apos;') // The 4 other predefined entities, required
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // You may add other replacements here for HTML only (but it's not
      // necessary). Or for XML, only if the named entities are defined in its
      // DTD.
      .replace(/\r\n/g, crValue) // Must be before the next replacement
      .replace(/[\r\n]/g, crValue)
  );
}
