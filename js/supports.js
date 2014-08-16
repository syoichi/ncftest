/* global NCFTest, CSS */

(function executeSupports(doc) {
  'use strict';

  var prefixes, prefixesLen, style, inline, Supports;

  prefixes = [
    '', '-moz-', '-webkit-', '-ms-', '-o-',
    // for Trident's CSSOM property
    'ms-',
    // for Presto
    '-wap-'/*,
    '-op-', '-xv-', '-khtml-', '-apple-'*/
  ];
  prefixesLen = prefixes.length;

  doc.addEventListener('DOMContentLoaded', function setupDummys() {
    var head = doc.head,
        body = doc.body,
        iframe;

    style = '<style disabled></style>'.toElement();
    inline = doc.createElement('div').style;

    // On Trident, descriptor test is too slow or freezing.
    if (/Trident/.test(navigator.userAgent)) {
      iframe = '<iframe class="dummy" src="about:blank">'.toElement();

      iframe.addEventListener('load', function appendStyle() {
        iframe.contentDocument.head.appendChild(style);
      });

      body.appendChild(iframe);
    } else {
      head.appendChild(style);
    }
  });

  function collectValueResults(callback, properties) {
    var failed = [],
        results = {},
        idx, property, success;

    for (idx = 0; properties[idx];) {
      property = properties[idx];
      idx += 1;

      if (!Supports.property.check(property)) {
        properties.splice(idx -= 1, 1);
      } else if (!callback(property)) {
        failed.push(property);
      }
    }

    results.success = success =
      1 - (properties.length ? failed.length / properties.length : 1);

    if (success > 0 && success < 1) {
      results.note = 'Failed in: ' + failed.join(', ');
    }

    return results;
  }

  NCFTest.Supports = Supports = {
    property: {
      name: 'properties',
      getResults: function getResults(info) {
        var value = info.test,
            property = info.featureName;

        return Supports.value.check(property, value);
      },
      cache: {},
      check: function check(property) {
        var cache = this.cache,
            prop = cache[property],
            idx, prefixed;

        if (prop) {
          return prop;
        }

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefixed = prefixes[idx] + property;

          if (prefixed.toCamelCase() in inline) {
            cache[property] = prefixed;

            return prefixed;
          }
        }

        cache[property] = '';

        return '';
      }
    },
    value: {
      name: 'values',
      getResults: function getResults(info) {
        var value = info.test,
            label = info.featureName,
            featureList = info.featureList,
            properties = featureList.properties ||
              featureList[label].properties;

        return collectValueResults(function callback(property) {
          return Supports.value.check(property, value, label);
        }, properties);
      },
      cache: {},
      check: function check(property, value, label) {
        var cache = this.cache, idx, prefix, prefixed;

        property = Supports.property.check(property);

        if (property) {
          for (idx = 0; idx < prefixesLen; idx += 1) {
            prefix = prefixes[idx];
            prefixed = prefix + value;

            if (CSS.supports(property, prefixed)) {
              if (label && cache[label] === void 0) {
                cache[label] = prefix + label;
              }

              return prefixed;
            }
          }
        }

        return '';
      }
    },
    keyword: {
      name: 'keywords',
      getResults: function getResults(info) {
        var keyword = info.featureName,
            properties = info.featureTestList;

        return collectValueResults(function callback(property) {
          return Supports.keyword.check(property, keyword);
        }, properties);
      },
      cache: {},
      check: function check(property, keyword) {
        var cache = this.cache, idx, prefixed;

        property = Supports.property.check(property);

        if (property) {
          for (idx = 0; idx < prefixesLen; idx += 1) {
            prefixed = prefixes[idx] + keyword;

            if (CSS.supports(property, prefixed)) {
              if (cache[keyword] === void 0) {
                cache[keyword] = prefixed;
              }

              return prefixed;
            }
          }
        }

        if (cache[keyword] === void 0) {
          cache[keyword] = '';
        }

        return '';
      }
    },
    unit: {
      name: 'units',
      getResults: function getResults(info) {
        var unit = info.featureName,
            properties = info.featureTestList;

        return collectValueResults(function callback(property) {
          return Supports.unit.check(property, unit);
        }, properties);
      },
      cache: {},
      check: function check(property, unit) {
        var cache = this.cache, idx, prefix, prefixed;

        property = Supports.property.check(property);

        if (property) {
          for (idx = 0; idx < prefixesLen; idx += 1) {
            prefix = prefixes[idx];
            prefixed = '1' + prefix + unit;

            if (CSS.supports(property, prefixed)) {
              if (cache[unit] === void 0) {
                cache[unit] = prefix + unit;
              }

              return prefixed;
            }
          }
        }

        if (cache[unit] === void 0) {
          cache[unit] = '';
        }

        return '';
      }
    },
    selector: {
      name: 'selectors',
      getResults: function getResults(info) {
        var selector = info.test;

        return this.check(selector);
      },
      cache: {},
      check: function check(selector) {
        var cache = this.cache, idx, prefixed;

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefixed = selector.replace(/^(:+)/, '$1' + prefixes[idx]);

          try {
            doc.querySelector(prefixed);

            cache[selector] = prefixed;

            return prefixed;
          } catch (err) { }
        }

        cache[selector] = '';

        return '';
      }
    },
    atrule: {
      name: '@rules',
      getResults: function getResults(info) {
        var atrule = info.test,
            atruleName = info.featureName;

        return this.check(atrule, atruleName);
      },
      cache: {},
      check: function check(atrule, atruleName) {
        var cache = this.cache,
            cachedAtrule = cache[atrule],
            idx, prefix, prefixed;

        if (cachedAtrule) {
          return cachedAtrule;
        }

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = atrule.replace(/^@/, '@' + prefix);

          style.textContent = prefixed + '{}';

          if (style.sheet.cssRules.length > 0) {
            if (cache[atruleName] === void 0) {
              cache[atruleName] = atruleName.replace(/^@/, '@' + prefix);
            }

            cache[atrule] = prefixed;

            return prefixed;
          }
        }

        cache[atrule] = '';

        return '';
      }
    },
    descriptor: {
      name: 'descriptors',
      getResults: function getResults(info) {
        var value = info.test,
            descriptor = info.featureName,
            featureList = info.featureList;

        return this.check(descriptor, value, featureList);
      },
      cache: {},
      check: function check(descriptor, value, featureList) {
        var cache = this.cache,
            atrule = featureList.atrule,
            atruleName = featureList.atruleName,
            idx, prefixed;

        atrule = Supports.atrule.check(atrule, atruleName || atrule);

        if (atrule) {
          for (idx = 0; idx < prefixesLen; idx += 1) {
            prefixed = prefixes[idx] + descriptor;

            if (this.checkDescriptor(atrule, prefixed, value)) {
              if (cache[descriptor] === void 0) {
                cache[descriptor] = prefixed;
              }

              return prefixed;
            }
          }
        }

        if (cache[descriptor] === void 0) {
          cache[descriptor] = '';
        }

        return '';
      },
      checkDescriptor: function checkDescriptor(atrule, descriptor, value) {
        var prop = descriptor.toCamelCase(), cssRule, styleDec;

        // value should do prefix test.
        style.textContent = atrule + '{' + descriptor + ': ' + value + ';}';
        cssRule = style.sheet.cssRules[0];
        styleDec = cssRule.style;

        if (
          // probably standard
          cssRule[prop] ||
            // for Trident, WebKit/Blink, Presto
            styleDec[prop] ||
            // for Gecko
            styleDec.getPropertyValue(descriptor)
        ) {
          return true;
        }
      }
    },
    ruleSelector: {
      name: '@rule selectors',
      getResults: function getResults(info) {
        var ruleSelector = info.test,
            atruleName = info.featureName,
            featureList = info.featureList;

        return this.check(atruleName, ruleSelector, featureList);
      },
      cache: {},
      check: function check(atruleName, ruleSelector, featureList) {
        var cache = this.cache,
            atrule = featureList.atrule,
            idx, prefixed;

        atrule = Supports.atrule.check(atrule || atruleName, atruleName);

        if (atrule) {
          for (idx = 0; idx < prefixesLen; idx += 1) {
            prefixed = prefixes[idx] + ruleSelector;

            if (this.checkRuleSelector(atrule, prefixed)) {
              if (cache[ruleSelector] === void 0) {
                cache[ruleSelector] = prefixed;
              }

              return prefixed;
            }
          }
        }

        if (cache[ruleSelector] === void 0) {
          cache[ruleSelector] = '';
        }

        return '';
      },
      checkRuleSelector: function checkRuleSelector(atrule, ruleSelector) {
        var cssRule;

        style.textContent = atrule + ' {' + ruleSelector + ' { top: 0; } }';
        cssRule = style.sheet.cssRules[0];

        if (
          // standard
          // Trident throws Error.
          // cssRule.findRule(ruleSelector) ||
            // for Trident, WebKit/Blink
            cssRule.cssRules.length > 0
        ) {
          return true;
        }
      }
    },
    mediaQuery: {
      name: 'Media queries',
      getResults: function getResults(info) {
        var mq = info.test,
            mqName = info.featureName;

        return this.check(mq, mqName);
      },
      cache: {},
      check: function check(mq, mqName) {
        var cache = this.cache, idx, prefix, prefixed, mql;

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = mq.replace(/\(/g, '(' + prefix);
          mql = matchMedia(prefixed);

          if (mql.media !== 'invalid' && mql.matches) {
            if (cache[mqName] === void 0) {
              cache[mqName] = prefix + mqName;
            }

            return prefixed;
          }
        }

        if (cache[mqName] === void 0) {
          cache[mqName] = '';
        }

        return '';
      }
    }
  };
}(document));
