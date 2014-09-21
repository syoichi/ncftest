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
      specStateList: [
        'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass'
      ],
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
          support: Supports[featureListName]
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
        '<section><h1>' + Supports[featureListName].name + '</h1></section>'
      ).toElement());
    },
    getScoreData: function getScoreData() {
      var passed = 0,
          feature = this.feature,
          support = feature.support,
          info = {
            featureName: feature.name,
            featureList: feature.list,
            featureTest: feature.list[feature.name],
            spec: this.spec
          },
          tests = Array.wrap(support.getTests(info));

      tests.forEach(function countSuccess(test) {
        var results = support.getResults(Object.assign({
              test: test
            }, info)),
            success = this.getSuccess(results);

        passed += success;

        this.createFeatureTest(test, results, success);
      }, this);

      return {
        passed: passed,
        total: tests.length
      };
    },
    getSuccess: function getSuccess(results) {
      return Object.isObject(results) ?
        results.success :
        Number(Boolean(results));
    },
    createFeatureTest: function createFeatureTest(test, results, success) {
      var dd = this.feature.item.appendChild(doc.createElement('dd')),
          note = results.note;

      dd.className = this.getSpecState({
        passed: Math.round(success * 10000),
        total: 10000
      });
      dd.textContent = test;

      if (note) {
        dd.appendChild(doc.createElement('small')).textContent = note;
      }

      if (
        this.feature.category === 'property' &&
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
            className: this.getSpecState(data)
          }), dl.firstChild),
          result = this.feature.support.cache[featureName];

      if (result && result !== featureName) {
        dt.classList.add('prefixed');
        dt.title += 'prefixed';
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
      var pass = this.getSpecState(this.score);

      this.testedSpecs.insertAdjacentHTML('BeforeEnd', [
        '<li title="' + this.score.percent() + ' passed" class="' + pass + '">',
        '<a href="#' + this.id + '">' + this.title + '</a>',
        '</li>'
      ].join(''));
    },
    getSpecState: function getSpecState(info) {
      var success;

      if ('passed' in info) {
        success = info.passed / info.total;
      }

      if (success === 1) {
        return 'pass';
      }
      if (success === 0) {
        return 'epic-fail';
      }

      return this.specStateList[
        Math.round(success * (this.specStateList.length - 1))
      ];
    }
  });

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
