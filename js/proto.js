(function executeProto() {
  'use strict';

  Object.defineProperties(Array.prototype, {
    // [ a | b | c ] [ x | y | z ]
    'and': {
      value: function and(arr2, separator) {
        var idx, len, ret;

        function map(val) {
          return val + separator + arr2[idx];
        }

        separator = separator || ' ';

        for (idx = 0, len = arr2.length, ret = []; idx < len; idx += 1) {
          ret = ret.concat(this.map(map));
        }

        return ret;
      },
      enumerable: false
    },
    // [ x | y | z ]{min, max}
    'times': {
      value: function times(min, max, separator) {
        var ret, i, j;

        max = max || min;
        separator = separator || ' ';
        ret = [];

        if (min === max) {
          if (min === 1) {
            ret = this.slice(); // clone
          } else {
            ret = this.and(this, separator);

            for (i = 2; i < min; i += 1) {
              ret = this.and(ret, separator);
            }
          }
        } else if (min < max) {
          for (j = min; j <= max; j += 1) {
            ret = ret.concat(this.times(j, j, separator));
          }
        }

        return ret;
      },
      enumerable: false
    },
    // [ a | b | c ] || [ x | y | z ]
    'or': (function executeReturn() {

      function isDuplicated(vals) {
        var hash, idx, valsLen, val;

        hash = {};

        for (idx = 0, valsLen = vals.length; idx < valsLen; idx += 1) {
          val = vals[idx];

          if (!hash[val]) {
            hash[val] = true;
          }
        }

        return Object.keys(hash).length !== valsLen;
      }

      return {
        value: function or() {
          var arg = Array.prototype.slice.call(arguments),
            argLen = arg.length,
            lastArg = arg[argLen - 1],
            hasSeparator = typeof lastArg === 'string',
            separator = hasSeparator ? lastArg : ' ',
            firstArg, arr, max, lists, listsLen;

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

          return this.concat(arr.reduce(function flattened(pre, cur) {
            return pre.concat(cur);
          })).times(1, max, separator).filter(function duplicatedFilter(val) {
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
        enumerable: false
      };
    }()),
    // [ a | b | c ] && [ x | y | z ]
    'amp': {
      value: function amp(arr2, separator) {
        separator = separator || ' ';

        return this.and(arr2, separator).concat(arr2.and(this, separator));
      },
      enumerable: false
    },
    // [ x | y | z ] a?
    'qmark': {
      value: function qmark(arr2, separator) {
        separator = separator || ' ';

        return this.concat(this.and(arr2, separator));
      },
      enumerable: false
    }
  });
}());
