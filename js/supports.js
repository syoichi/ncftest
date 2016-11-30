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
      getTests: function getTests(info) {
        return info.featureTest;
      },
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

        if (prop !== void 0) {
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
      getTests: function getTests(info) {
        var featureTest = info.featureTest;

        return Object.isObject(featureTest) ? featureTest.values : featureTest;
      },
      getResults: function getResults(info) {
        var value = info.test,
            label = info.featureName,
            properties = info.featureList.properties ||
              info.featureTest.properties;

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
      getTests: function getTests(info) {
        return info.featureName;
      },
      getResults: function getResults(info) {
        var keyword = info.featureName,
            properties = info.featureTest;

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
      getTests: function getTests(info) {
        return '1' + info.featureName;
      },
      getResults: function getResults(info) {
        var unit = info.featureName,
            properties = info.featureTest;

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
      getTests: function getTests(info) {
        return info.featureTest;
      },
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
          } catch (err) {
            // do nothing
          }
        }

        cache[selector] = '';

        return '';
      }
    },
    atrule: {
      name: '@rules',
      getTests: function getTests(info) {
        var featureTest = info.featureTest;

        return Object.isObject(featureTest) ? featureTest.values : featureTest;
      },
      getResults: function getResults(info) {
        var atrule = info.test,
            atruleName = info.featureName,
            featureTest = info.featureTest;

        return this.check(atrule, atruleName, featureTest);
      },
      cache: {},
      check: function check(atrule, atruleName, featureTest) {
        var cache = this.cache,
            cachedAtrule = cache[atrule],
            idx, prefix, prefixed;

        if (cachedAtrule !== void 0) {
          return cachedAtrule;
        }

        for (idx = 0; idx < prefixesLen; idx += 1) {
          prefix = prefixes[idx];
          prefixed = atrule.replace(/^@/, '@' + prefix);

          if (this.checkAtrule(prefixed, featureTest)) {
            if (cache[atruleName] === void 0) {
              cache[atruleName] = atruleName.replace('@', '@' + prefix);
            }

            cache[atrule] = prefixed;

            return prefixed;
          }
        }

        cache[atrule] = '';

        return '';
      },
      checkAtrule: function checkAtrule(atrule, featureTest) {
        if (Object.isObject(featureTest)) {
          style.textContent = atrule + '{' + featureTest.require + '}';
        } else {
          style.textContent = atrule + '{}';
        }

        return style.sheet.cssRules.length > 0;
      }
    },
    descriptor: {
      name: 'descriptors',
      getTests: function getTests(info) {
        var featureTest = info.featureTest;

        return Object.isObject(featureTest) ?
          featureTest.values || Object.keys(featureTest) :
          featureTest;
      },
      getResults: function getResults(info) {
        var value = info.test,
            descriptor = info.featureName;

        return this.check(descriptor, value, info);
      },
      cache: {},
      check: function check(descriptor, value, info) {
        var cache = this.cache,
            atrule = this.getAtrule(info),
            idx, prefixed;

        if (atrule) {
          for (idx = 0; idx < prefixesLen; idx += 1) {
            prefixed = prefixes[idx] + descriptor;

            if (this.checkDescriptor({
              atrule: atrule,
              descriptor: prefixed,
              value: value,
              featureTest: info.featureTest
            })) {
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
      getAtrule: function getAtrule(info) {
        var featureList = info.featureList,
            atrule = featureList.atrule,
            specAtrule, atruleName, featureTest, atruleNameValue;

        if (atrule) {
          atruleName = featureList.atruleName;
        } else {
          specAtrule = info.spec.atrule;
          atruleName = featureList.atruleName = Object.keys(specAtrule)[0];
          featureTest = specAtrule[atruleName];
          atruleNameValue = Supports.atrule.getTests({
            featureTest: featureTest
          });
          atrule = featureList.atrule = Array.isArray(atruleNameValue) ?
            atruleNameValue[0] :
            atruleNameValue;
        }

        return Supports.atrule.check(atrule, atruleName || atrule, featureTest);
      },
      checkDescriptor: function checkDescriptor(info) {
        var cssRule = this.getCSSRule(info),
            descriptor, prop, styleDec;

        if (cssRule) {
          descriptor = info.descriptor;
          prop = descriptor.toCamelCase();

          // probably standard
          if (cssRule[prop]) {
            return true;
          }

          styleDec = cssRule.style;

          if (styleDec) {
            // for Trident, WebKit/Blink, Presto
            return styleDec[prop] ||
              // for Gecko
              styleDec.getPropertyValue(descriptor);
          }
        }
      },
      getCSSRule: function getCSSRule(info) {
        var atrule = info.atrule,
            descriptor = info.descriptor,
            value = info.value,
            featureTest = info.featureTest;

        // value should do prefix test.
        if (Object.isObject(featureTest)) {
          style.textContent = atrule + '{' +
            (featureTest.require || featureTest[value] || '') +
            descriptor + ': ' + value + ';}';
        } else {
          style.textContent = atrule + '{' + descriptor + ': ' + value + ';}';
        }

        return style.sheet.cssRules[0];
      }
    },
    ruleSelector: {
      name: '@rule selectors',
      getTests: function getTests(info) {
        return info.featureTest;
      },
      getResults: function getResults(info) {
        var ruleSelector = info.test,
            atruleName = info.featureName,
            featureList = info.featureList;

        return this.check(atruleName, ruleSelector, featureList);
      },
      cache: {},
      check: function check(atruleName, ruleSelector, featureList) {
        var cache = this.cache,
            atrule = Supports.atrule.check(
              featureList.atrule || atruleName,
              atruleName
            ),
            idx, prefixed;

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
      getTests: function getTests(info) {
        return info.featureTest;
      },
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
