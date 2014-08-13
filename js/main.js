(function executeScoringAndTesting(win, doc) {
  'use strict';

  var NCFTest, Supports, Specs, extendProperties, mainScore, all, specsTested;

  NCFTest = win.NCFTest;
  Supports = NCFTest.Supports;
  Specs = NCFTest.Specs;
  extendProperties = NCFTest.extendProperties;

  function Score(main) {
    this.passed = this.total = this.passedTests = this.totalTests = 0;
    this.main = main;
  }
  extendProperties(Score.prototype, {
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
    percent: function percent() {
      return parseInt(100 * this.passed / this.total, 10) + '%';
    }
  });

  function Test(tests, spec, title) {
    var section, h1, tr, dev, groups, idx, groupsLen, id,
        miniScore, list, anchor;

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
    section.className = 'test';

    // Perform tests
    groups = Object.keys(Test.groups);

    for (idx = 0, groupsLen = groups.length; idx < groupsLen; idx += 1) {
      id = groups[idx];
      this.group(id, Test.groups[id].getResults);
    }

    // Display score for this spec
    miniScore = h1.appendChild(doc.createElement('span'));
    miniScore.className = 'score';
    miniScore.textContent = this.score.percent();

    all.appendChild(section);

    // Add to list of tested specs
    list = doc.createElement('li');
    list.className = this.passClass(
      {passed: this.score.passed, total: this.score.total}
    );
    list.title = this.score.percent() + ' passed';
    anchor = list.appendChild(doc.createElement('a'));
    anchor.href = '#' + spec;
    anchor.textContent = title;
    specsTested.appendChild(list);
  }
  extendProperties(Test.prototype, {
    group: function group(what, testCallback) {
      var theseTests, testList, thisSection, i, testListLen, feature,
          dl, dt, passed, tests, j, testsLen,
          testResults, test, results, success, note, dd, support, result;

      theseTests = this.tests[what];

      if (!theseTests) {
        return;
      }

      testList = Object.keys(theseTests);

      for (i = 0, testListLen = testList.length; i < testListLen; i += 1) {
        feature = testList[i];

        if (!/^(?:properties|atrule|atruleName)$/.test(feature)) {
          if (!thisSection) {
            thisSection = this.section.appendChild(
              doc.createElement('section')
            );
            thisSection.className = what;
            thisSection.appendChild(
              doc.createElement('h1')
            ).textContent = what;
          }

          dl = thisSection.appendChild(doc.createElement('dl'));
          dt = dl.appendChild(doc.createElement('dt'));
          dt.textContent = feature;

          passed = 0;
          tests = theseTests[feature];

          if (what === 'values' && !theseTests.properties) {
            tests = tests.values;
          }

          tests = Array.isArray(tests) ? tests : [tests];

          for (j = 0, testsLen = tests.length; j < testsLen; j += 1) {
            testResults = this.getTestResults({
              what: what,
              index: j,
              tests: tests,
              feature: feature,
              theseTests: theseTests,
              testCallback: testCallback
            });

            if (testResults.testsLen) {
              testsLen = testResults.testsLen;
            }

            test = testResults.test;
            results = testResults.results;

            if (typeof results === 'object') {
              success = results.success;
              note = results.note;
            } else {
              success = Number(Boolean(results));
            }

            passed += Number(success);

            dd = dl.appendChild(doc.createElement('dd'));
            dd.className = this.passClass(
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

          dt.className = this.passClass({passed: passed, total: testsLen});

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
    getTestResults: function getTestResults(obj) {
      var what = obj.what,
          tests = obj.tests,
          index = obj.index,
          feature = obj.feature,
          theseTests = obj.theseTests,
          testCallback = obj.testCallback,
          testsLen, test, results;

      if (what === 'units') {
        testsLen = 1;
        test = '1' + feature;
        results = testCallback(feature, tests);
      } else if (what === 'keywords') {
        testsLen = 1;
        test = feature;
        results = testCallback(feature, tests);
      } else if (what === 'values' && !theseTests.properties) {
        test = tests[index];
        results = testCallback(test, feature, theseTests[feature]);
      } else {
        test = tests[index];
        results = testCallback(test, feature, theseTests);
      }

      return {
        testsLen: testsLen,
        test: test,
        results: results
      };
    },
    passClass: function passClass(info) {
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
  });
  Test.groups = {
    values: {
      type: 'value',
      getResults: function values(value, label, tests) {
        var properties, failed, results, idx, property, success;

        properties = tests.properties;
        failed = [];
        results = {};

        for (idx = 0; properties[idx];) {
          property = properties[idx];
          idx += 1;

          if (!Supports.property(property)) {
            properties.splice(idx -= 1, 1);
          } else if (!Supports.value(property, value, label)) {
            failed.push(property);
          }
        }

        results.success = success =
          1 - (properties.length ? failed.length / properties.length : 1);

        if (success > 0  && success < 1) {
          results.note = 'Failed in: ' + failed.join(', ');
        }

        return results;
      }
    },
    keywords: {
      type: 'keyword',
      getResults: function keywords(keyword, properties) {
        var failed, results, idx, property, success;

        failed = [];
        results = {};

        for (idx = 0; properties[idx];) {
          property = properties[idx];
          idx += 1;

          if (!Supports.property(property)) {
            properties.splice(idx -= 1, 1);
          } else if (!Supports.keyword(keyword, property)) {
            failed.push(property);
          }
        }

        results.success = success =
          1 - (properties.length ? failed.length / properties.length : 1);

        if (success > 0 && success < 1) {
          results.note = 'Failed in: ' + failed.join(', ');
        }

        return results;
      }
    },
    units: {
      type: 'unit',
      getResults: function units(unit, properties) {
        var failed, results, idx, property, success;

        failed = [];
        results = {};

        for (idx = 0; properties[idx];) {
          property = properties[idx];
          idx += 1;

          if (!Supports.property(property)) {
            properties.splice(idx -= 1, 1);
          } else if (!Supports.unit(unit, property)) {
            failed.push(property);
          }
        }

        results.success = success =
          1 - (properties.length ? failed.length / properties.length : 1);

        if (success > 0 && success < 1) {
          results.note = 'Failed in: ' + failed.join(', ');
        }

        return results;
      }
    },
    properties: {
      type: 'property',
      getResults: function properties(value, property) {
        return Supports.value(property, value);
      }
    },
    selectors: {
      type: 'selector',
      getResults: function selectors(selector) {
        return Supports.selector(selector);
      }
    },
    '@rules': {
      type: 'atrule',
      getResults: function atrules(atrule, atruleName) {
        return Supports.atrule(atrule, atruleName);
      }
    },
    descriptors: {
      type: 'descriptor',
      getResults: function descriptors(value, descriptor, tests) {
        return Supports.descriptor(descriptor, value, tests);
      }
    },
    '@rule selectors': {
      type: 'ruleSelector',
      getResults: function ruleSelectors(ruleSelector, atruleName, tests) {
        return Supports.ruleSelector(atruleName, ruleSelector, tests);
      }
    },
    'Media queries': {
      type: 'mediaQuery',
      getResults: function mediaQueries(mq, mqName) {
        return Supports.mediaQuery(mq, mqName);
      }
    }
  };

  mainScore = new Score(null);

  doc.addEventListener('DOMContentLoaded', function prepare() {
    var score, passedTests, totalTests, total, specs, timeBefore;

    all = doc.getElementById('all');
    specsTested = doc.getElementById('specsTested');

    score = doc.getElementById('score');
    passedTests = doc.getElementById('passedTests');
    totalTests = doc.getElementById('totalTests');
    total = doc.getElementById('total');

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
      var spec, test, timeTaken;

      if (specs.length) {
        // Get spec id
        spec = specs.shift();

        // Run tests
        test = new Test(Specs[spec], spec, Specs[spec].title);

        // Output current score
        score.textContent = mainScore.percent();
        passedTests.textContent = parseInt(mainScore.passedTests, 10);
        totalTests.textContent = mainScore.totalTests;
        total.textContent = mainScore.total;

        // Schedule next test
        setTimeout(main, 50);
        return;
      }
      // Done!

      // Display time taken
      timeTaken = doc.getElementById('timeTaken');
      timeTaken.textContent = (Date.now() - timeBefore) + 'ms';
    })();
  });
}(window, document));
