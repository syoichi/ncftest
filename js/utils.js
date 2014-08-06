/* global CSS */

(function executeUtils(win, doc) {
  'use strict';

  var NCFTest = win.NCFTest = {};

  function extendProperties(target, obj) {
    var props = {};

    Object.keys(obj).forEach(function setDescriptor(key) {
      props[key] = {
        value: obj[key],
        enumerable: false,
        writable: true,
        configurable: true
      };
    });

    return Object.defineProperties(target, props);
  }

  NCFTest.extendProperties = extendProperties;

  function camelCase(str) {
    return str.replace(/-([a-z])/g, function makeUpperCase($0, $1) {
      return $1.toUpperCase();
    }).replace('-', '');
  }

  NCFTest.camelCase = camelCase;

  // simple polyfills
  // for Trident, Presto
  if (!(typeof CSS !== 'undefined' && 'supports' in CSS)) {
    if (typeof CSS === 'undefined') {
      win.CSS = {};
    }

    CSS.supports = (function cacheInline() {
      var inline = doc.createElement('div').style;

      return function supports(property, value) {
        var prop = camelCase(property);

        inline[prop] = inline.cssText = '';

        // Trident throws Undefined Error.
        try {
          inline[prop] = value;
        } catch (err) { }

        return inline.length > 0;
      };
    }());
  }
}(window, document));
