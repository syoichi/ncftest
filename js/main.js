/* global NCFTest */

(function executeScoringAndTesting(doc) {
  'use strict';

  var Supports, Specs, Timer, mainScore, all, specsTested;

  Supports = NCFTest.Supports;
  Specs = NCFTest.Specs;

  function Score(main) {
    this.passed = this.total = this.passedTests = this.totalTests = 0;
    this.main = main;
  }
  Object.extend(Score.prototype, {
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

  function Test(tests, id, title) {
    Object.extend(this, {
      tests: tests,
      id: id,
      title: title,
      score: new Score(mainScore),
      // Wrapper section
      section: ('<section id="' + id + '" class="test"></section>').toElement()
    });

    // Perform tests
    this.createFeatureList();

    // Display score for this spec
    all.appendChild(this.getTest());

    // Add to list of tested specs
    this.addPassedSpecToSideList();
  }
  Object.extend(Test.prototype, {
    createFeatureList: (function cacheGroups(groups, featureNames) {
      return function createFeatureList() {
        if (!groups) {
          groups = Test.groups;
          featureNames = Object.keys(Test.groups);
        }

        featureNames.forEach(function createFeature(featureName) {
          this.group(featureName, groups[featureName].getResults);
        }, this);
      };
    }()),
    getTest: function getTest() {
      var tr = this.tests.tr || 'http://www.w3.org/TR/' + this.id + '/',
          dev = this.tests.dev || 'http://dev.w3.org/csswg/' + this.id + '/';

      this.section.insertAdjacentHTML('AfterBegin', [
        '<h1>' + this.title,
        '<a href="' + tr + '" class="spec-link" target="_blank">TR</a>',
        '<a href="' + dev + '" class="spec-link" target="_blank">DEV</a>',
        '<span class="score">' + this.score.percent() + '</span>',
        '</h1>'
      ].join(''));

      return this.section;
    },
    addPassedSpecToSideList: function addPassedSpecToSideList() {
      var pass = this.passClass(this.score);

      specsTested.insertAdjacentHTML('BeforeEnd', [
        '<li title="' + this.score.percent() + ' passed" class="' + pass + '">',
        '<a href="#' + this.id + '">' + this.title + '</a>',
        '</li>'
      ].join(''));
    },
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

  Timer = {
    time: null,
    timeStart: function timeStart() {
      this.time = Date.now();
    },
    timeEnd: function timeEnd() {
      var timeTaken = doc.getElementById('timeTaken');

      timeTaken.textContent = (Date.now() - this.time) + 'ms';
    }
  };

  mainScore = new Score(null);

  doc.addEventListener('DOMContentLoaded', function prepare() {
    var score, passedTests, totalTests, total, specIDs;

    all = doc.getElementById('all');
    specsTested = doc.getElementById('specsTested');

    score = doc.getElementById('score');
    passedTests = doc.getElementById('passedTests');
    totalTests = doc.getElementById('totalTests');
    total = doc.getElementById('total');

    specIDs = Object.keys(Specs);

    all.addEventListener('click', function openDL(evt) {
      var target = evt.target;

      if (target.tagName === 'DT') {
        evt.stopPropagation();

        target.parentNode.classList.toggle('open');
      }
    });

    Timer.timeStart();

    (function main() {
      var id, test;

      if (specIDs.length) {
        // Get spec id
        id = specIDs.shift();

        // Run tests
        test = new Test(Specs[id], id, Specs[id].title);

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
      Timer.timeEnd();
    })();
  });
}(document));
