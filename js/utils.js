(function executeUtils(win) {
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
}(window));
