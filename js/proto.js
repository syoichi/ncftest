(function executeProto(win) {
  'use strict';

  var NCFTest = win.NCFTest,
      extendProperties = NCFTest.extendProperties,
      isDuplicated = NCFTest.isDuplicated;

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
    // [ a | b | c ] || [ x | y | z ]
    or: function or() {
      var arr = Array.from(arguments),
          separator = typeof arr.last() === 'string' ? arr.pop() : ' ',
          lists = [this].concat(arr),
          listsLen = lists.length,
          flat = lists.flatten();

      if (listsLen === 2) {
        return flat.concat(this.amp(arr[0], separator));
      }

      return flat.times(
        1, listsLen, separator
      ).filter(function duplicatedFilter(val) {
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
    },
    last: function last() {
      return this[this.length - 1];
    }
  });
}(window));
