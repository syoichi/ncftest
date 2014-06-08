(function executeProto(win) {
  'use strict';

  var NCFTest = win.NCFTest,
      extendProperties = NCFTest.extendProperties,
      isDuplicated = NCFTest.isDuplicated;

  extendProperties(Array.prototype, {
    // [ a | b | c ] [ x | y | z ]
    and: function and(arr, separator) {
      separator = separator || ' ';

      return this.map(function returnMap(val1) {
        return this.map(function combine(val2) {
          return val1 + separator + val2;
        });
      }, arr).flatten();
    },
    // [ x | y | z ]{num}
    // [ x | y | z ]{min, max}
    times: function times(min, max, separator) {
      var arr = [];

      for (min = min || 1, max = max || min; min <= max; min += 1) {
        arr.push(this.reperm(min, separator));
      }

      return arr.flatten();
    },
    // [ x | y | z ]{num}
    reperm: function reperm(num, separator) {
      var arr = this.slice(), idx;

      for (idx = 1, num = num || 1; idx < num; idx += 1) {
        arr = this.and(arr, separator);
      }

      return arr;
    },
    // [ a | b | c ] || [ x | y | z ]
    or: function or() {
      var arg, argLen, lastArg, hasSeparator, separator,
          firstArg, arr, max, lists, listsLen;

      arg = Array.prototype.slice.call(arguments);
      argLen = arg.length;
      lastArg = arg[argLen - 1];
      hasSeparator = typeof lastArg === 'string';
      separator = hasSeparator ? lastArg : ' ';

      if (argLen === 1 || (argLen === 2 && hasSeparator)) {
        firstArg = arg[0];
        return this.concat(
          firstArg,
          this.and(firstArg, separator),
          firstArg.and(this, separator)
        );
      }

      arr = hasSeparator ? arg.slice(0, -1) : arg;
      max = 1 + (hasSeparator ? argLen - 1 : argLen);
      lists = arr.slice();
      lists.unshift(this);
      listsLen = lists.length;

      return this.concat(
        arr.flatten()
      ).times(1, max, separator).filter(function duplicatedFilter(val) {
        var vals, i, list, j, count, listLen;

        vals = val.split(separator);

        if (isDuplicated(vals)) {
          return false;
        }

        for (i = 0; i < listsLen; i += 1) {
          list = lists[i];

          for (j = count = 0, listLen = list.length; j < listLen; j += 1) {
            if (vals.indexOf(list[j]) !== -1) {
              count += 1;
              if (count === 2) {
                return false;
              }
            }
          }

          if (listsLen === (i + 1)) {
            return true;
          }
        }
      });
    },
    // [ a | b | c ] && [ x | y | z ]
    amp: function amp(arr, separator) {
      return this.and(arr, separator).concat(arr.and(this, separator));
    },
    // [ x | y | z ] a?
    // [ a | b | c ]? [ x | y | z ]
    // [ x | y | z ] && a?
    // [ a | b | c ]? && [ x | y | z ]
    qmark: function qmark(arr, separator, option) {
      option = option || {};

      return (option.former ? arr : this).concat(
        this[option.amp ? 'amp' : 'and'](arr, separator)
      );
    },
    // simple uniq
    uniq: function uniq() {
      var hash = {};

      return this.filter(function filter(val) {
        if (!hash[val]) {
          hash[val] = true;

          return true;
        }
      });
    },
    flatten: function flatten() {
      return Array.prototype.concat.apply([], this);
    }
  });
}(window));
