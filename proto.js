Object.defineProperties(Array.prototype, {
  // [ a | b | c ] [ x | y | z ]
  'and': {
    value: function and(arr2, separator) {
      separator = separator || ' ';

      var ret = [],
        map = function map(val) {
          return val + separator + arr2[i];
        };

      for (var i = 0, len = arr2.length; i < len; i += 1) {
        ret = ret.concat(this.map(map));
      }

      return ret;
    },
    enumerable: false
  },
  // [ x | y | z ]{min, max}
  'times': {
    value: function times(min, max, separator) {
      separator = separator || ' ';

      max = max || min;

      var ret = [];

      if (min === max) {
        if (min === 1) {
          ret = this.slice(); // clone
        } else {
          ret = this.and(this, separator);

          for (var i = 2; i < min; i += 1) {
            ret = this.and(ret, separator);
          }
        }
      } else if (min < max) {
        for (var j = min; j <= max; j += 1) {
          ret = ret.concat(this.times(j, j, separator));
        }
      }

      return ret;
    },
    enumerable: false
  },
  // [ a | b | c ] || [ x | y | z ]
  'or': (function () {

    function isDuplicated(vals) {
        var idx, valsLen, hash, filename;

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
          separator = hasSeparator ? lastArg : ' ';

        if (argLen === 1 || (argLen === 2 && hasSeparator)) {
          var firstArg = arg[0];
          return this.concat(firstArg, this.and(firstArg, separator), firstArg.and(this, separator));
        }

        var arr = hasSeparator ? arg.slice(0, -1) : arg;
        var max = 1 + (hasSeparator ? argLen - 1 : argLen);
        var lists = arr.slice();
        lists.unshift(this);
        var listsLen = lists.length;

        return this.concat(arr.reduce(function flattened(pre, cur) {
          return pre.concat(cur);
        })).times(1, max, separator).filter(function duplicatedFilter(val) {
          var vals = val.split(separator);

          if (isDuplicated(vals)) {
            return false;
          }

          for (var i = 0, list; i < listsLen; i += 1) {
            list = lists[i];

            for (var j = count = 0, listLen = list.length; j < listLen; j += 1) {
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
