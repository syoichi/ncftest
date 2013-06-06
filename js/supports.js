(function executeSupports(win, doc) {
  'use strict';

  var dummy, inline, style, iframe, head, prefixes, prefixesLen;

  /**
   * Setup dummy elements
   */
  dummy = doc.createElement('_');
  inline = dummy.style;
  style = doc.createElement('style');

  head = doc.head;
  prefixes = [
    '', '-moz-', '-webkit-', '-o-', '-ms-',
    '-wap-', '-op-', '-xv-', 'ms-', '-khtml-', '-apple-'
  ];
  prefixesLen = prefixes.length;

  function camelCase(str) {
    return str.replace(/-([a-z])/g, function makeUpperCase($0, $1) {
      return $1.toUpperCase();
    }).replace('-', '');
  }

  // On WebKit/Blink, @rule test is too slow.
  if (/WebKit/.test(win.navigator.userAgent)) {
    iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    head.appendChild(iframe);
    iframe.contentDocument.head.appendChild(style);
  } else {
    head.appendChild(style);
  }

  dummy.setAttribute('data-foo', 'bar');
  dummy.setAttribute('data-px', '1px');
  head.appendChild(dummy);

  win.Supports = {
    property: function propertyFunc(property) {
      var cached, idx, prefixed;

      if (property.charAt(0) === '-') {
        return camelCase(property) in inline ? property : false;
      }

      cached = propertyFunc.cached;

      if (!cached) {
        cached = propertyFunc.cached = {};
      } else if (cached[property]) {
        return cached[property];
      }

      for (idx = 0; idx < prefixesLen; idx += 1) {
        prefixed = prefixes[idx] + property;

        if (camelCase(prefixed) in inline) {
          cached[property] = prefixed;

          return prefixed;
        }
      }

      cached[property] = false;

      return false;
    },
    value: function valueFunc(property, value, label) {
      var cached, idx, prefix, prefixed;

      cached = valueFunc.cached;

      if (!cached) {
        cached = valueFunc.cached = {};
      }

      property = this.property(property);

      if (!property) {
        return false;
      }

      property = camelCase(property);
      inline[property] = inline.cssText = '';

      for (idx = 0; idx < prefixesLen; idx += 1) {
        prefix = prefixes[idx];
        prefixed = prefix + value;

        // Internet Explorer 10 throws Undefined Error.
        try {
          inline[property] = prefixed;
        } catch (err) {}

        if (inline.length > 0) {
          if (label && cached[label] === void 0) {
            cached[label] = prefix + label;
          }

          return prefixed;
        }
      }

      return false;
    },
    selector: function selectorFunc(selector) {
      var cached, idx, prefixed;

      cached = selectorFunc.cached;

      if (!cached) {
        cached = selectorFunc.cached = {};
      } else if (cached[selector]) {
        return cached[selector];
      }

      for (idx = 0; idx < prefixesLen; idx += 1) {
        prefixed = selector.replace(/^(:+)/, '$1' + prefixes[idx]);

        try {
          doc.querySelector(prefixed);

          cached[selector] = prefixed;

          return prefixed;
        } catch (err) {}
      }

      cached[selector] = false;

      return false;
    },
    atrule: function atruleFunc(atrule, atruleName) {
      var cached, idx, prefix, prefixed;

      cached = atruleFunc.cached;

      if (!cached) {
        cached = atruleFunc.cached = {};
      } else if (cached[atrule]) {
        return cached[atrule];
      }

      for (idx = 0; idx < prefixesLen; idx += 1) {
        prefix = prefixes[idx];
        prefixed = atrule.replace(/^@/, '@' + prefix);

        style.textContent = prefixed + '{}';

        if (style.sheet.cssRules.length > 0) {
          if (cached[atruleName] === void 0) {
            cached[atruleName] = atruleName.replace(/^@/, '@' + prefix);
          }

          cached[atrule] = prefixed;

          return prefixed;
        }
      }

      cached[atrule] = false;

      return false;
    },
    mq: function mqFunc(mq, mqName) {
      var cached, idx, prefix, prefixed, mql;

      cached = mqFunc.cached;

      if (!cached) {
        cached = mqFunc.cached = {};
      } else if (cached[mq]) {
        return cached[mq];
      }

      for (idx = 0; idx < prefixesLen; idx += 1) {
        prefix = prefixes[idx];
        prefixed = mq.replace(/\(/g, '(' + prefix);
        mql = win.matchMedia(prefixed);

        if (mql.media !== 'invalid' && mql.matches) {
          if (cached[mqName] === void 0) {
            cached[mqName] = prefix + mqName;
          }

          cached[mq] = prefixed;

          return prefixed;
        }
      }

      cached[mq] = false;

      return false;
    }
  };
}(window, document));
