(function executeProto(win) {
  'use strict';

  var NCFTest = win.NCFTest,
      extendProperties = NCFTest.extendProperties;

  extendProperties(Array, {
    from: function from(arrayLike) {
      return Array.prototype.slice.call(arrayLike);
    }
  });

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
    // [ a | b | c ] || [ d | e | f ] || [ g | h | i ]
    or: function or() {
      var lists = [this].concat(Array.from(arguments)),
          separator = typeof lists.last() === 'string' ? lists.pop() : ' ',
          listsLen = lists.length,
          arr = lists.flatten();

      return arr.concat(listsLen !== 2 ? arr.range(
        2, listsLen, separator
      ).filter(function duplicatedFilter(val) {
        var vals = val.split(separator), i, list, j, count, listLen;

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
      }) : this.amp(lists[1], separator));
    },
    // [ a | b | c ] && [ x | y | z ]
    amp: function amp(arr, separator) {
      return this.and(arr, separator).concat(arr.and(this, separator));
    },
    // x && y && z
    // x || y || z
    range: function range(min, max, separator) {
      var arr = [];

      for (min = min || 1, max = max || min; min <= max; min += 1) {
        arr.push(this.perm(min, separator));
      }

      return arr.flatten();
    },
    // x && y && z
    perm: function perm(num, separator) {
      var arr = [];

      separator = separator || ' ';

      (function generatePermutation(pre, post, num) {
        var idx, rest, len;

        if (num > 0) {
          for (idx = 0, len = post.length; idx < len; idx += 1) {
            rest = post.slice();
            generatePermutation(pre.concat(rest.splice(idx, 1)), rest, num - 1);
          }
        } else {
          arr.push(pre.join(separator));
        }
      }([], this, num || this.length));

      return arr;
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
    },
    last: function last() {
      return this[this.length - 1];
    }
  });
}(window));
