var doc = document,
    specsTested = doc.getElementById('specsTested'),
    all = doc.getElementById('all');

var Score = function(parent) {
  this.passed = this.total =
  this.passedTests = this.totalTests = 0;

  this.parent = parent || null;
};

Score.prototype = {
  update: function(data) {
    if(!data.total) { return; }

    this.passedTests += data.passed;
    this.totalTests += data.total;

    this.total++;
    this.passed += data.passed / data.total;

    if(this.parent) {
      this.parent.update(data);
    }
  },

  toString: function() {
    return this.percent() + '%';
  },

  percent: function() {
    return Math.round(100 * this.passed / this.total);
  }
};

var mainScore = new Score();

var Test = function (tests, spec, title) {
  this.tests = tests;
  this.id = spec;
  this.title = title;

  this.score = new Score(mainScore);

  // Wrapper section
  var section = this.section = doc.createElement('section'),
      h1 = section.appendChild(doc.createElement('h1'));

  h1.appendChild(doc.createTextNode(title));
  var tr = h1.appendChild(doc.createElement('a'));
  tr.target = '_blank';
  tr.className = 'spec-link';
  var dev = h1.appendChild(tr.cloneNode(false));
  tr.href = tests.tr || 'http://www.w3.org/TR/' + spec + '/';
  tr.textContent = 'TR';
  dev.href = tests.dev || 'http://dev.w3.org/csswg/' + spec + '/';
  dev.textContent = 'DEV';
  section.id = spec;
  section.className = 'tests';

  // Perform tests
  for(var id in Test.groups) {
    this.group(id, Test.groups[id].getResults);
  }

  // Display score for this spec
  var score = h1.appendChild(doc.createElement('span'));
  score.className = 'score';
  score.textContent = this.score;

  all.appendChild(section);

  // Add to list of tested specs
  var list = doc.createElement('li');
  list.className = this.passclass({ passed: this.score.passed, total: this.score.total });
  list.title = this.score + ' passed';
  var anchor = list.appendChild(doc.createElement('a'));
  anchor.href = '#' + spec;
  anchor.textContent = title;
  specsTested.appendChild(list);
}

Test.prototype = {
  group: function(what, testCallback) {
    var thisSection, theseTests = this.tests[what];

    for(var feature in theseTests) {
      if(feature === 'properties') {
        continue;
      }

      if (!thisSection) {
        thisSection = this.section.appendChild(doc.createElement('section'));
        thisSection.className = 'tests ' + what;
        thisSection.appendChild(doc.createElement('h1')).textContent = what;
      }

      var dl = thisSection.appendChild(doc.createElement('dl')),
          dt = dl.appendChild(doc.createElement('dt'));

      dt.textContent = feature;

      var passed = 0, tests = theseTests[feature];

      tests = tests instanceof Array? tests : [tests];

      for(var i=0, test; test = tests[i++];) {
        var results = testCallback(test, feature, theseTests),
            success, note;

        if(typeof results === 'object') {
          success = results.success;
          note = results.note;
        }
        else { success = +!!results }

        passed += +success;

        var dd = dl.appendChild(doc.createElement('dd'));
        dd.className = this.passclass({passed: Math.round(success * 10000), total: 10000 });
        dd.textContent = test;
        if (note) {
          dd.appendChild(doc.createElement('small')).textContent = note;
        }

        if (what === 'properties' && results && results !== test) {
          dd.className += ' prefixed';
          dd.title += 'prefixed';
        }
      }

      this.score.update({passed: passed, total: tests.length });

      dt.className = this.passclass({ passed: passed, total: tests.length });

      var support = Supports[Test.groups[what].type];

      if (support.cached) {
        var result = support.cached[feature];

        if (result && result !== feature) {
          dt.className += ' prefixed';
          dt.title += 'prefixed';
        }
      }
    }
  },
  passclass: function(info) {
    var success;

    if('passed' in info) {
      success = info.passed / info.total;
    }
    else if('failed' in info) {
      success = 1 - info.failed / info.total;
    }

    if (success === 1) { return 'pass' }
    if (success === 0) { return 'epic-fail' }

    var classes = [
      'fail',
      'very-buggy',
      'buggy',
      'slightly-buggy',
      'almost-pass',
    ];

    var index = Math.round(success * (classes.length - 1));

    return classes[index];
  }
}

Test.groups = {
  'values': {
    type: 'value',
    getResults: function(test, label, tests) {
      var properties = tests.properties,
        failed = [];

      for(var j=0, property; property = properties[j++];) {
        if(!Supports.property(property)) {
          properties.splice(--j, 1);
          continue;
        }

        if(!Supports.value(property, test, label)) {
          failed.push(property);
        }
      }

      success = 1 - failed.length / properties.length;

      return {
        success: success,
        note: success > 0 && success < 1? 'Failed in: ' + failed.join(', ') : ''
      }
    }
  },

  'properties': {
    type: 'property',
    getResults: function(value, property) {
      return Supports.value(property, value);
    }
  },

  'selectors': {
    type: 'selector',
    getResults: function(test) {
      return Supports.selector(test);
    }
  },

  '@rules': {
    type: 'atrule',
    getResults: function(test, atruleName) {
      return Supports.atrule(test, atruleName);
    }
  },

  'Media queries': {
    type: 'mq',
    getResults: function(test, mqName) {
      return Supports.mq(test, mqName);
    }
  }
};

document.onclick = function(evt) {
  var target = evt.target;

  if(/^dt$/i.test(target.nodeName)) {
    evt.stopPropagation();

    var dl = target.parentNode;

    dl.className = dl.className === 'open'? '' : 'open';
  }
}

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

onload = function() {
  var timeBefore = +new Date,
    duration = 0;

  var specs = [];

  for(var spec in Specs) {
    specs.push(spec);
  }

  (function() {
    if(specs.length) {
      // Get spec id
      var spec = specs.shift();

      // Run tests
      var test = new Test(Specs[spec], spec, Specs[spec].title);

      // Count test duration
      duration += +new Date - timeBefore;
      timeBefore = +new Date;

      // Output current score
      score.textContent = mainScore + '';
      passedTests.textContent = ~~mainScore.passedTests;
      totalTests.textContent = mainScore.totalTests;
      total.textContent = mainScore.total;

      // Schedule next test
      setTimeout(arguments.callee, 50)
    }
    else {
      // Done!

      // Display time taken
      timeTaken.textContent = +new Date - timeBefore + 'ms';
    }
  })();
}
