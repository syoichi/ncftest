/* global Supports, Specs */
/* global specsTested, all, score, passedTests, totalTests, total, timeTaken */

(function (doc) {
  'use strict';

  var mainScore;

  function Score(main) {
    this.passed = this.total = this.passedTests = this.totalTests = 0;
    this.main = main;
  }
  Score.prototype = {
    update: function update(data) {
      if (!data.total) {
        return;
      }

      this.passedTests += data.passed;
      this.totalTests += data.total;
      this.total += 1;
      this.passed += data.passed / data.total;

      if (this.main) {
        this.main.update(data);
      }
    },

    toString: function toString() {
      return this.percent() + '%';
    },

    percent: function percent() {
      return Math.round(100 * this.passed / this.total);
    }
  };

  function Test(tests, spec, title) {
    var section, h1, tr, dev, groups, groupsLen, idx, id, score, list, anchor;

    this.tests = tests;
    this.id = spec;
    this.title = title;
    this.score = new Score(mainScore);

    // Wrapper section
    section = this.section = doc.createElement('section');
    h1 = section.appendChild(doc.createElement('h1'));

    h1.appendChild(doc.createTextNode(title));
    tr = h1.appendChild(doc.createElement('a'));
    tr.target = '_blank';
    tr.className = 'spec-link';
    dev = h1.appendChild(tr.cloneNode(false));
    tr.href = tests.tr || 'http://www.w3.org/TR/' + spec + '/';
    tr.textContent = 'TR';
    dev.href = tests.dev || 'http://dev.w3.org/csswg/' + spec + '/';
    dev.textContent = 'DEV';
    section.id = spec;
    section.className = 'tests';

    // Perform tests
    groups = Object.keys(Test.groups);
    groupsLen = groups.length;

    for (idx = 0; idx < groupsLen; idx += 1) {
      id = groups[idx];
      this.group(id, Test.groups[id].getResults);
    }

    // Display score for this spec
    score = h1.appendChild(doc.createElement('span'));
    score.className = 'score';
    score.textContent = this.score;

    all.appendChild(section);

    // Add to list of tested specs
    list = doc.createElement('li');
    list.className = this.passclass(
      {passed: this.score.passed, total: this.score.total}
    );
    list.title = this.score + ' passed';
    anchor = list.appendChild(doc.createElement('a'));
    anchor.href = '#' + spec;
    anchor.textContent = title;
    specsTested.appendChild(list);
  }
  Test.prototype = {
    group: function group(what, testCallback) {
      var theseTests, testList, thisSection, testListLen, i, feature,
          dl, dt, passed, tests, j, testsLen,
          test, results, success, note, dd, support, result;

      theseTests = this.tests[what];

      if (!theseTests) {
        return;
      }

      testList = Object.keys(theseTests);
      testListLen = testList.length;

      for (i = 0; i < testListLen; i += 1) {
        feature = testList[i];

        if (feature !== 'properties') {
          if (!thisSection) {
            thisSection = this.section.appendChild(
              doc.createElement('section')
            );
            thisSection.className = 'tests ' + what;
            thisSection.appendChild(doc.createElement('h1')).textContent = what;
          }

          dl = thisSection.appendChild(doc.createElement('dl'));
          dt = dl.appendChild(doc.createElement('dt'));
          dt.textContent = feature;

          passed = 0;
          tests = theseTests[feature];
          tests = tests instanceof Array ? tests : [tests];
          testsLen = tests.length;

          for (j = 0; j < testsLen; j += 1) {
            test = tests[j];
            results = testCallback(test, feature, theseTests);

            if (typeof results === 'object') {
              success = results.success;
              note = results.note;
            } else {
              success = +!!results;
            }

            passed += +success;

            dd = dl.appendChild(doc.createElement('dd'));
            dd.className = this.passclass(
              {passed: Math.round(success * 10000), total: 10000}
            );
            dd.textContent = test;

            if (note) {
              dd.appendChild(doc.createElement('small')).textContent = note;
            }

            if (what === 'properties' && results && results !== test) {
              dd.classList.add('prefixed');
              dd.title += 'prefixed';
            }
          }

          this.score.update({passed: passed, total: testsLen});

          dt.className = this.passclass({passed: passed, total: testsLen});

          support = Supports[Test.groups[what].type];

          if (support.cached) {
            result = support.cached[feature];

            if (result && result !== feature) {
              dt.classList.add('prefixed');
              dt.title += 'prefixed';
            }
          }
        }
      }
    },
    passclass: function passclass(info) {
      var success, classes, index;

      if ('passed' in info) {
        success = info.passed / info.total;
      } else if ('failed' in info) {
        success = 1 - info.failed / info.total;
      }

      if (success === 1) {
        return 'pass';
      }
      if (success === 0) {
        return 'epic-fail';
      }

      classes = [
        'fail',
        'very-buggy',
        'buggy',
        'slightly-buggy',
        'almost-pass'
      ];
      index = Math.round(success * (classes.length - 1));

      return classes[index];
    }
  };
  Test.groups = {
    'values': {
      type: 'value',
      getResults: function values(test, label, tests) {
        var properties, failed, results, idx, property, success;

        properties = tests.properties;
        failed = [];
        results = {};

        for (idx = 0; properties[idx]; idx += 1) {
          property = properties[idx];

          if (!Supports.property(property)) {
            properties.splice(idx, 1);
          } else if (!Supports.value(property, test, label)) {
            failed.push(property);
          }
        }

        results.success = success = 1 - failed.length / properties.length;

        if (0 < success && success < 1) {
          results.note = 'Failed in: ' + failed.join(', ');
        }

        return results;
      }
    },
    'properties': {
      type: 'property',
      getResults: function properties(value, property) {
        return Supports.value(property, value);
      }
    },
    'selectors': {
      type: 'selector',
      getResults: function selectors(test) {
        return Supports.selector(test);
      }
    },
    '@rules': {
      type: 'atrule',
      getResults: function atrules(test, atruleName) {
        return Supports.atrule(test, atruleName);
      }
    },
    'Media queries': {
      type: 'mq',
      getResults: function mediaQueries(test, mqName) {
        return Supports.mq(test, mqName);
      }
    }
  };

  mainScore = new Score(null);

  doc.addEventListener('DOMContentLoaded', function prepare() {
    var duration, specs, timeBefore;

    duration = 0;
    specs = Object.keys(Specs);

    all.addEventListener('click', function openDL(evt) {
      var target = evt.target;

      if (target.tagName === 'DT') {
        evt.stopPropagation();

        target.parentNode.classList.toggle('open');
      }
    });

    timeBefore = Date.now();

    (function main() {
      var spec, test;

      if (specs.length) {
        // Get spec id
        spec = specs.shift();

        // Run tests
        test = new Test(Specs[spec], spec, Specs[spec].title);

        // Count test duration
        duration += Date.now() - timeBefore;
        timeBefore = Date.now();

        // Output current score
        score.textContent = mainScore;
        passedTests.textContent = parseInt(mainScore.passedTests, 10);
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
}(document));
