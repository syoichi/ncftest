(function executeSupports(win, doc) {
  'use strict';

  var inline, style, prefixes, prefixesLen, isCSS;

  prefixes = [
    '', '-moz-', '-webkit-', '-o-', '-ms-',
    '-wap-', '-op-', '-xv-', 'ms-', '-khtml-', '-apple-'
  ];
  prefixesLen = prefixes.length;
  isCSS = 'CSS' in win;

  function camelCase(str) {
    return str.replace(/-([a-z])/g, function makeUpperCase($0, $1) {
      return $1.toUpperCase();
    }).replace('-', '');
  }

  doc.addEventListener('DOMContentLoaded', function setupDummys() {
    var head, body, dummy, iframe;

    head = doc.head;
    body = doc.body;

    dummy = doc.createElement('_');
    dummy.className = 'dummy';
    inline = dummy.style;
    dummy.setAttribute('data-foo', 'bar');
    dummy.setAttribute('data-px', '1px');
    body.appendChild(dummy);

    style = doc.createElement('style');
    style.disabled = true;

    // On Trident, descriptor test is too slow or freezing.
    if (/Trident/.test(win.navigator.userAgent)) {
      iframe = doc.createElement('iframe');
      iframe.className = 'dummy';
      iframe.src = 'about:blank';
      iframe.addEventListener('load', function appendStyle() {
        iframe.contentDocument.head.appendChild(style);
      });
      body.appendChild(iframe);
    } else {
      head.appendChild(style);
    }
  });

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

      if (isCSS) {
        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = prefix + value;

          if (win.CSS.supports(property, prefixed)) {
            if (label && cached[label] === void 0) {
              cached[label] = prefix + label;
            }

            return prefixed;
          }
        }
      } else {
        property = camelCase(property);
        inline[property] = inline.cssText = '';

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = prefix + value;

          // Trident throws Undefined Error.
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
      }

      return false;
    },
    unit: function unitFunc(unit, property) {
      var cached, idx, prefix, prefixed;

      cached = unitFunc.cached;

      if (!cached) {
        cached = unitFunc.cached = {};
      }

      property = this.property(property);

      if (!property) {
        return false;
      }

      if (isCSS) {
        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = '1' + prefix + unit;

          if (win.CSS.supports(property, prefixed)) {
            if (unit && cached[unit] === void 0) {
              cached[unit] = prefix + unit;
            }

            return prefixed;
          }
        }
      } else {
        property = camelCase(property);
        inline[property] = inline.cssText = '';

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = '1' + prefix + unit;

          // Trident throws Undefined Error.
          try {
            inline[property] = prefixed;
          } catch (err) {}

          if (inline.length > 0) {
            if (unit && cached[unit] === void 0) {
              cached[unit] = prefix + unit;
            }

            return prefixed;
          }
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
    descriptor: function descriptorFunc(descriptor, value, tests) {
      var cached, key, atrule, idx, prefix, prefixed, prop, cssRule, styleDec;

      cached = descriptorFunc.cached;
      key = descriptor + ': ' + value;

      if (!cached) {
        cached = descriptorFunc.cached = {};
      } else if (cached[key]) {
        return cached[key];
      }

      atrule = this.atrule(tests.atrule, tests.atruleName || tests.atrule);

      if (!atrule) {
        return false;
      }

      for (idx = 0; idx < prefixesLen; idx += 1) {
        prefix = prefixes[idx];
        prefixed = prefix + descriptor;
        prop = camelCase(prefixed);

        // value should do prefix test.
        style.textContent = atrule + '{' + prefixed + ': ' + value + ';}';
        cssRule = style.sheet.cssRules[0];
        styleDec = cssRule.style;

        if (
          // probably standard
          cssRule[prop] ||
            // for Trident, WebKit/Blink, Presto
            styleDec[prop] ||
            // for Gecko
            styleDec.getPropertyValue(prefixed)
        ) {
          if (cached[descriptor] === void 0) {
            cached[descriptor] = prefixed;
          }

          cached[key] = prefixed;

          return prefixed;
        }
      }

      cached[key] = false;

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
