var doc = document;

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

doc.addEventListener('DOMContentLoaded', function () {
  var duration = 0,
      specs = Object.keys(Specs),
      timeBefore;

  all.addEventListener('click', function (evt) {
    var target = evt.target;

    if (target.tagName === 'DT') {
      evt.stopPropagation();

      target.parentNode.classList.toggle('open');
    }
  });

  timeBefore = Date.now();

  (function main() {
    if(specs.length) {
      // Get spec id
      var spec = specs.shift();

      // Run tests
      var test = new Test(Specs[spec], spec, Specs[spec].title);

      // Count test duration
      duration += Date.now() - timeBefore;
      timeBefore = Date.now();

      // Output current score
      score.textContent = mainScore;
      passedTests.textContent = ~~mainScore.passedTests;
      totalTests.textContent = mainScore.totalTests;
      total.textContent = mainScore.total;

      // Schedule next test
      setTimeout(main, 50);
      return;
    }
    // Done!

    // Display time taken
    timeTaken.textContent = (Date.now() - timeBefore) + 'ms';
  })();
});
