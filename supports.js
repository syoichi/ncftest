(function(){

/**
 * Setup dummy elements
 */
var dummy = document.createElement('_'),
  inline = dummy.style,
  style = document.createElement('style');

// On WebKit, @rule test is too slow.
if (/WebKit/.test(navigator.userAgent)) {
  var iframe = document.createElement('iframe');
  iframe.hidden = true;
  iframe.src = 'about:blank';
  document.body.appendChild(iframe);
  iframe.contentDocument.body.appendChild(style);
} else {
  document.documentElement.appendChild(style);
}

dummy.setAttribute('data-foo', 'bar');
dummy.setAttribute('data-px', '1px');
document.documentElement.appendChild(dummy);

var _ = window.Supports = {
  prefixes: ['', '-moz-', '-webkit-', '-o-', '-wap-', '-op-', '-xv-', '-ms-', 'ms-', '-khtml-', '-apple-'],

  property: function(property) {
    if(property.charAt(0) === '-') {
      return camelCase(property) in inline? property : false;
    }

    if(!_.property.cached) {
      _.property.cached = {};
    }
    else if(_.property.cached[property]) {
      return _.property.cached[property];
    }

    for(var i=0; i<_.prefixes.length; i++) {
      var prefixed = _.prefixes[i] + property;

      if(camelCase(prefixed) in inline) {
        return _.property.cached[property] = prefixed;
      }
    }

    return _.property.cached[property] = false;
  },

  value: function(property, value, label) {
    if(!_.value.cached) {
      _.value.cached = {};
    }
    property = _.property(property);

    if(!property) { return false; }

    property = camelCase(property);

    inline.cssText = '';
    inline[property] = '';

    for(var i=0; i<_.prefixes.length; i++) {
      var prefixed = _.prefixes[i] + value;

      try {
        inline[property] = prefixed;
      } catch(e) {}

      if(inline.length > 0) {
        if (label && _.value.cached[label] === void 0) {
          _.value.cached[label] = _.prefixes[i] + label;
        }
        return prefixed;
      }
    }

    return false;
  },

  selector: function(selector) {
    if(!_.selector.cached) {
      _.selector.cached = {};
    }
    else if(_.selector.cached[selector]) {
      return _.selector.cached[selector];
    }

    for(var i=0; i<_.prefixes.length; i++) {
      var prefixed = selector.replace(/^(:+)/, '$1' + _.prefixes[i]);

      try {
        document.querySelector(prefixed);
        return  _.selector.cached[selector] = prefixed;
      }
      catch (e) {}
    }

    return  _.selector.cached[selector] = false;
  },

  atrule: function(atrule, atruleName) {
    if(!_.atrule.cached) {
      _.atrule.cached = {};
    }
    else if(_.selector.cached[atrule]) {
      return _.atrule.cached[atrule];
    }

    for(var i=0; i<_.prefixes.length; i++) {
      var prefixed = atrule.replace(/^@/, '@' + _.prefixes[i]);

      style.textContent = prefixed + '{}';  // Safari 4 has issues with style.innerHTML

      if(style.sheet.cssRules.length > 0) {
        if (_.atrule.cached[atruleName] === void 0) {
          _.atrule.cached[atruleName] = atruleName.replace(/^@/, '@' + _.prefixes[i]);
        }
        return _.atrule.cached[atrule] = prefixed;
      }
    }

    return _.atrule.cached[atrule] = false;
  },

  mq: function(mq, mqName) {
    if(!_.mq.cached) {
      _.mq.cached = {};
    } else if(_.mq.cached[mq]) {
      return _.mq.cached[mq];
    }

    for(var i=0; i<_.prefixes.length; i++) {
      var prefixed = mq.replace(/\(/g, '(' + _.prefixes[i]);
      var mql = matchMedia(prefixed);

      if(mql.media !== 'invalid' && mql.matches) {
        if (_.mq.cached[mqName] === void 0) {
          _.mq.cached[mqName] = _.prefixes[i] + mqName;
        }
        return _.mq.cached[mq] = prefixed;
      }
    }

    return _.mq.cached[mq] = false;
  }
};

/**
 * Private
 */
function camelCase (str) {
  return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase(); }).replace('-','');
}

})();
