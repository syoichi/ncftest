/* global NCFTest */

(function executeScoringAndTesting(doc) {
  'use strict';

  var Supports = NCFTest.Supports,
      Specs = NCFTest.Specs;

  function Score(main) {
    this.passedTests = this.totalTests = this.total = this.passed = 0;
    this.main = main;

    if (!main) {
      this.element = {};

      Object.assign(this.element, {
        score: doc.getElementById('score'),
        passedTests: doc.getElementById('passedTests'),
        totalTests: doc.getElementById('totalTests'),
        total: doc.getElementById('total')
      });
    }
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
    },
    output: function output() {
      if (!this.main) {
        this.element.score.textContent = this.percent();
        this.element.passedTests.textContent = parseInt(this.passedTests, 10);
        this.element.totalTests.textContent = this.totalTests;
        this.element.total.textContent = this.total;
      }
    }
  });

  function Test() {
    Object.assign(this, {
      specMetaDataList: ['title', 'tr', 'dev'],
      featureInfoList: ['properties', 'atrule', 'atruleName'],
      all: doc.getElementById('all'),
      testedSpecs: doc.getElementById('testedSpecs')
    });

    this.all.addEventListener('click', function openDL(evt) {
      var target = evt.target;

      if (target.tagName === 'DT') {
        evt.stopPropagation();

        target.parentNode.classList.toggle('open');
      }
    });
  }
  Object.extend(Test.prototype, {
    createSpecTest: function createSpecTest(id, score) {
      var spec = Specs[id];

      Object.assign(this, {
        spec: spec,
        id: id,
        title: spec.title,
        score: score,
        feature: {},
        // Wrapper section
        section: (
          '<section id="' + id + '" class="test"></section>'
        ).toElement()
      });

      // Perform tests
      this.createFeatureList();

      // Display score for this spec
      this.all.appendChild(this.getSpecTest());

      // Add to list of tested specs
      this.addTestedSpec();
    },
    createFeatureList: function createFeatureList() {
      Object.keys(this.spec).remove(
        this.specMetaDataList
      ).forEach(function prepare(featureListName) {
        var featureSection = this.getFeatureSection(featureListName);

        Object.assign(this.feature, {
          category: featureListName,
          list: this.spec[featureListName],
          support: Test.groups[featureListName]
        });

        Object.keys(this.feature.list).remove(
          this.featureInfoList
        ).forEach(function createFeature(featureName) {
          var data;

          Object.assign(this.feature, {
            name: featureName,
            item: featureSection.appendChild(doc.createElement('dl'))
          });

          data = this.getScoreData();

          this.score.update(data);

          this.createFeatureTitle(data);
        }, this);
      }, this);
    },
    getFeatureSection: function getFeatureSection(featureListName) {
      return this.section.appendChild((
        '<section><h1>' + featureListName + '</h1></section>'
      ).toElement());
    },
    getScoreData: function getScoreData() {
      var passed = 0,
          tests = this.getFeatureTestList(),
          idx, testsLen, testResults, results, success;

      for (idx = 0, testsLen = tests.length; idx < testsLen; idx += 1) {
        testResults = this.getTestResults(idx, tests);

        if (testResults.testsLen) {
          testsLen = testResults.testsLen;
        }

        results = testResults.results;
        success = typeof results === 'object' ?
          results.success :
          Number(Boolean(results));

        passed += Number(success);

        this.createFeatureTest(testResults.test, results, success);
      }

      return {
        passed: passed,
        total: testsLen
      };
    },
    getFeatureTestList: function getFeatureTestList() {
      var featureList = this.feature.list,
          featureTest = featureList[this.feature.name];

      if (this.feature.category === 'values' && !featureList.properties) {
        featureTest = featureTest.values;
      }

      return Array.isArray(featureTest) ? featureTest : [featureTest];
    },
    getTestResults: function getTestResults(index, tests) {
      var category = this.feature.category,
          featureName = this.feature.name,
          featureList = this.feature.list,
          testCallback = this.feature.support.getResults,
          testsLen, test, results;

      if (category === 'units') {
        testsLen = 1;
        test = '1' + featureName;
        results = testCallback(featureName, tests);
      } else if (category === 'keywords') {
        testsLen = 1;
        test = featureName;
        results = testCallback(featureName, tests);
      } else if (category === 'values' && !featureList.properties) {
        test = tests[index];
        results = testCallback(test, featureName, featureList[featureName]);
      } else {
        test = tests[index];
        results = testCallback(test, featureName, featureList);
      }

      return {
        testsLen: testsLen,
        test: test,
        results: results
      };
    },
    createFeatureTest: function createFeatureTest(test, results, success) {
      var dd = this.feature.item.appendChild(doc.createElement('dd')),
          note = results.note;

      dd.className = this.passClass({
        passed: Math.round(success * 10000),
        total: 10000
      });
      dd.textContent = test;

      if (note) {
        dd.appendChild(doc.createElement('small')).textContent = note;
      }

      if (
        this.feature.category === 'properties' &&
          results && results !== test
      ) {
        dd.classList.add('prefixed');
        dd.title += 'prefixed';
      }
    },
    createFeatureTitle: function createFeatureTitle(data) {
      var featureName = this.feature.name,
          dl = this.feature.item,
          dt = dl.insertBefore(Object.assign(doc.createElement('dt'), {
            textContent: featureName,
            className: this.passClass(data)
          }), dl.firstChild),
          support = Supports[this.feature.support.type],
          cached = support.cached,
          result;

      if (cached) {
        result = cached[featureName];

        if (result && result !== featureName) {
          dt.classList.add('prefixed');
          dt.title += 'prefixed';
        }
      }
    },
    getSpecTest: function getSpecTest() {
      var tr = this.spec.tr || 'http://www.w3.org/TR/' + this.id + '/',
          dev = this.spec.dev || 'http://dev.w3.org/csswg/' + this.id + '/';

      this.section.insertAdjacentHTML('AfterBegin', [
        '<h1>' + this.title,
        '<a href="' + tr + '" class="spec-link" target="_blank">TR</a>',
        '<a href="' + dev + '" class="spec-link" target="_blank">DEV</a>',
        '<span class="score">' + this.score.percent() + '</span>',
        '</h1>'
      ].join(''));

      return this.section;
    },
    addTestedSpec: function addTestedSpec() {
      var pass = this.passClass(this.score);

      this.testedSpecs.insertAdjacentHTML('BeforeEnd', [
        '<li title="' + this.score.percent() + ' passed" class="' + pass + '">',
        '<a href="#' + this.id + '">' + this.title + '</a>',
        '</li>'
      ].join(''));
    },
    passClass: function passClass(info) {
      var success, classes;

      if ('passed' in info) {
        success = info.passed / info.total;
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

      return classes[Math.round(success * (classes.length - 1))];
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
          } else if (!Supports.keyword(property, keyword)) {
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
          } else if (!Supports.unit(property, unit)) {
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

  function Timer() {
    this.timeTaken = doc.getElementById('timeTaken');
  }
  Object.extend(Timer.prototype, {
    start: function start() {
      this.time = Date.now();
    },
    end: function end() {
      this.timeTaken.textContent = (Date.now() - this.time) + 'ms';
    }
  });

  doc.addEventListener('DOMContentLoaded', function prepare() {
    var mainScore = new Score(null),
        test = new Test(),
        timer = new Timer(),
        specIDs = Object.keys(Specs);

    timer.start();

    (function recursive() {
      if (specIDs.length) {
        // Get spec id and Run tests
        test.createSpecTest(specIDs.shift(), new Score(mainScore));

        // Output current score
        mainScore.output();

        // Schedule next test
        setTimeout(recursive, 50);

        return;
      }
      // Done!

      // Display time taken
      timer.end();
    })();
  });
}(document));
