/* global CSS */

(function executeUtils(win, doc) {
  'use strict';

  win.NCFTest = {};

  // simple polyfills
  // for Trident, Presto
  if (!(typeof CSS !== 'undefined' && 'supports' in CSS)) {
    if (typeof CSS === 'undefined') {
      win.CSS = {};
    }

    CSS.supports = (function cacheInline() {
      var inline = doc.createElement('div').style;

      return function supports(property, value) {
        var prop = property.toCamelCase();

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
