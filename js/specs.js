/* jshint maxstatements: false */
/* global NCFTest */

(function executeSpecs() {
  'use strict';

  // data types
  var number = [
    '0', '+0', '-0', '1', '+1', '-1', '0.1', '+0.1', '-0.1',
    '.1', '+.1', '-.1'/*, '+.1e+1'*/
  ];
  var percentage = number.map(function addPercent(num) {
    return num + '%';
  });
  var width = ['auto', '10px', '10%'];
  var anb = [
    'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
    '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
    'n-1', '-n-1', '+n-1', '1n-1', '-1n-1', '+1n-1', '0n-1', '-0n-1', '+0n-1',
    '10n-1', '-10n-1', '+10n-1', '01n-1',
    '-01n-1', '+01n-1', '00n-1', '-00n-1', '+00n-1',
    'n+1', '-n+1', '+n+1', '1n+1', '-1n+1', '+1n+1', '0n+1', '-0n+1', '+0n+1',
    '10n+1', '-10n+1', '+10n+1', '01n+1',
    '-01n+1', '+01n+1', '00n+1', '-00n+1', '+00n+1',
    'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
    '0', '1', '10', '01', '00', '-0', '-1', '-10',
    '-01', '-00', '+0', '+1', '+10', '+01', '+00',
    'odd', 'even'
  ];
  var alphavalue = ['1', '0', '2', '-5', '.5', '0.0', '1.0'];
  var image = [
    'url(foo.png)', /* image(white), */
    'linear-gradient(white, black)', 'radial-gradient(white, white)',
    'repeating-linear-gradient(white, white)',
    'repeating-radial-gradient(white, white)'
  ];
  var repeatStyle = ['repeat-x', 'repeat-y'].concat(
    ['repeat', 'space', 'round', 'no-repeat'].times(1, 2)
  );
  var position = [
    'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
  ].concat(
    ['left', 'center', 'right', '10%', '10px'].and([
      'top', 'center', 'bottom', '10%', '10px'
    ]),
    ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
      ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
    )
  ).uniq();
  var box = ['border-box', 'padding-box', 'content-box'];
  var shapeBox = box.concat('margin-box');
  var geometryBox = shapeBox.concat(['fill-box', 'stroke-box', 'view-box']);
  var bgSize = width.times(1, 2).concat(['cover', 'contain']);
  var counterStyle = [
    'cjk-decimal', 'hebrew', 'hiragana', 'hiragana-iroha',
    'katakana', 'katakana-iroha', 'disclosure-open', 'disclosure-closed',
    'japanese-informal', 'japanese-formal', 'korean-hangul-formal',
    'korean-hanja-informal', 'korean-hanja-formal', 'simp-chinese-informal',
    'simp-chinese-formal', 'trad-chinese-informal', 'trad-chinese-formal',
    'cjk-ideographic', 'ethiopic-numeric'/*, 'circled-lower-latin',
    'symbols(\'\')', 'symbols(repeating \'○\' \'●\')',
    'toggle(disc, square, circle)'*/
  ];
  var angle = ['90deg', '100grad', '1rad', '1turn'];
  var fillRule = ['nonzero', 'evenodd'];
  var shapeRadius = ['10px', '10%', 'closest-side', 'farthest-side'];
  var basicShape = [].concat(
    ['10px', '10%'].times(1, 4).map(function inset(arg) {
      return 'inset(' + arg + ')';
    }),
    [
      'inset(10px 10px 10px 10px round ' +
        '10px 10px 10px 10px / 10px 10px 10px 10px)'
    ],
    [''].concat(
      shapeRadius,
      ['at'].and(position),
      shapeRadius.and(['at'].and(['left', 'bottom 10px right 10px']))
    ).map(function circle(arg) {
      return 'circle(' + arg + ')';
    }),
    [''].concat(
      shapeRadius.times(2),
      ['at'].and(position),
      shapeRadius.times(2).and(['at'].and(['left', 'bottom 10px right 10px']))
    ).map(function ellipse(arg) {
      return 'ellipse(' + arg + ')';
    }),
    fillRule.qmark(
      ['10px', '10%'].times(2).times(1, 2, ', '), ', ', {former: true}
    ).concat([
      '0 0, 100% 100%, 0 100%', '100% 0, 100% 100%, 0 100%',
      '0 0, 500% 500%, 0 500%', '50px 0px, 100px 100px, 0px 100px',
      '0% 50%, 50% 100%, 0 100%',
      '10px 10px, 90px 50px, 40px 50px, 90px 90px, 10px 90px',
      '15px 99px, 30px 87px, 65px 99px, 85px 55px, 122px 57px, 184px 73px, ' +
        '198px 105px, 199px 150px, 145px 159px, 155px 139px, 126px 120px, ' +
        '112px 138px, 80px 128px, 39px 126px, 24px 104px'
    ]).map(function polygon(arg) {
      return 'polygon(' + arg + ')';
    })
  );
  var blendMode = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
    'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
    'exclusion', 'hue', 'saturation', 'color', 'luminosity'
  ];
  var timingFunction = [
    'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start',
    'step-end', 'steps(1)', 'steps(3, start)', 'steps(5, end)',
    'cubic-bezier(.5, .5, .5, .5)', 'cubic-bezier(.5, 1.5, .5, -2.5)',
    'cubic-bezier(0, -0.1, 1, 1.1)', 'cubic-bezier(0.5, -0.5, 0.5, -0.5)'
  ];
  var flexDirection = ['row', 'row-reverse', 'column', 'column-reverse'];
  var flexWrap = ['nowrap', 'wrap', 'wrap-reverse'];
  var flexBasis = ['main-size'].concat(width);
  var flexPosition = ['flex-start', 'flex-end', 'center'];
  var justifyContent = flexPosition.concat(['space-between', 'space-around']);
  var crossPosition = ['stretch', 'baseline'];
  var alignItems = flexPosition.concat(crossPosition);
  var boxPosition = ['start', 'end', 'left', 'right'];
  var selfPosition = ['self-start', 'self-end'];
  var contentPosition = flexPosition.concat(boxPosition);
  var itemPosition = contentPosition.concat(selfPosition);
  var overflowPosition = ['true', 'safe'];
  var alignPosition = boxPosition.concat(selfPosition);
  var justifyContent2 = ['auto', 'baseline', 'last-baseline'].concat(
    alignPosition.concat(
      itemPosition.and(contentPosition)
    ).qmark(overflowPosition, ' ', {amp: true}),
    flexPosition.amp(overflowPosition)
  );
  var justifySelf = ['auto'].concat(
    crossPosition,
    'last-baseline',
    itemPosition.qmark(overflowPosition, ' ', {amp: true})
  );
  var alignSelf = ['last-baseline'].concat(
    alignPosition,
    itemPosition.amp(overflowPosition)
  );
  var trackBreadth = ['10px', '10%', '1fr', 'min-content', 'max-content'];
  var trackSize = trackBreadth.times(2, 2, ', ').map(function minmax(arg) {
    return 'minmax(' + arg + ')';
  }).concat('auto', trackBreadth);
  var lineNames = [/*'()', */'(a)', '(a b)'];
  var repeatFunction = lineNames.qmark(trackSize, ' ', {
    former: true
  // })/*.times(1, 2)*/.qmark(lineNames).concat([
  }).qmark(lineNames).concat([
    '250px 10px 1px', '1fr auto minmax(30%, 1fr)', '(content) 250px 10px',
    '250px 10px (content)', '(content) 10px (repeat)', '(a) 1fr (b)',
    '250px 10px 5px 1px', '(content) 250px 10px 1px', '250px 10px 1px (repeat)',
    '(content) 250px 10px (repeat)', '(content) 1fr minmax(1px, 1px) (repeat)',
    '(first) 250px (content) 10px', '250px (content) 10px (repeat)',
    '10px (col-start) 250px (col-end)', '(first) 250px (content) 10px (repeat)',
    '(first nav) 1fr (content) minmax(1px, 1px) (repeat)'
  ]).map(function repeat(arg) {
    return 'repeat(1, ' + arg + ')';
  });
  var trackList = lineNames.qmark(trackSize.concat(['repeat(1, auto)']), ' ', {
    former: true
  // })/*.times(1, 2)*/.qmark(lineNames).concat(repeatFunction).concat([
  }).qmark(lineNames).concat(repeatFunction).concat([
    '10px repeat(2, 1fr auto minmax(30%, 1fr))',
    'repeat(4, 10px (col-start) 250px (col-end)) 10px',
    'auto auto auto', '10px 10px 10px', '50px 1fr 50px', '300px auto 300px',
    'auto 1fr auto',
    'auto minmax(min-content, 1fr) auto',
    'auto minmax(min-content, 1fr) repeat(1, 10px)',
    '(start) auto minmax(min-content, 1fr)', '(first) 10px 30%',
    'auto repeat(1, 10px) (end)',
    'auto auto minmax(min-content, 1fr) auto',
    '100px 1fr max-content minmax(min-content, 1fr)',
    '150px (item1-start) 1fr (item1-end)',
    '(a) 1fr (b a) 1fr (b)',
    '(header-top) auto (header-bottom main-top) 1fr (main-bottom)',
    '(item1-start) 50px 1fr 50px (item1-end)',
    '(first nav) 150px (main) 1fr (last)',
    '(labels) auto (controls) auto (oversized) auto',
    '(first header) 50px (main) 1fr (footer) 50px (last)',
    '(first) 1fr (header) 50px (main) 1fr (footer) 50px (last)',
    '(start) auto (track-start) 0.5fr ' +
      '(thumb-start) auto (fill-split) auto ' +
      '(thumb-end) 0.5fr (track-end) auto (end)',
    '(first header) minmax(min-content, max-content) auto max-content ' +
      'repeat(4, (content) 1fr minmax(1px, 1px) (repeat)) (middle) ' +
      '1fr (last footer)',
    '(a) auto (b) minmax(min-content, 1fr) (b c d)' +
      ' repeat(2, (e) 40px) repeat(5, auto)',
    '(a) 50px (b) 320px (b c d) repeat(2, (e) 40px) repeat(4, 0px) 50px',
    '10px (col-start) 250px (col-end) 10px (col-start) 250px (col-end) ' +
      '10px (col-start) 250px (col-end) 10px (col-start) 250px (col-end) 10px'
  ]);
  var trackSizing = ['none'].concat(
    trackList,
    ['subgrid'].qmark(lineNames.concat(lineNames.concat([
      '(a) (a)', '(a) (a b)', '(a b) (a b)'
    ]).map(function repeat(arg) {
      return 'repeat(1, ' + arg + ')';
    })).times(1, 2).concat([
      '(first) (content) (repeat)',
      '(first) (second) (third) (fourth) (fifth)'
    ])),
    ['calc(4em - 5px)']
  );
  var gridTemplateAreas = [
    'none', '\'nav\'', '\'.\'', '\'head head\' \'nav main\' \'foot .\''
  ];
  var gridTemplate = gridTemplateAreas.concat(
    ['subgrid'],
    trackSizing.and(['none'], ' / '),
    trackList.and(['"nav"'], ' / '),
    lineNames.amp(['"nav"']),
    ['"nav"'].and(trackSize)
  ).concat([
    '"nav" auto (end)', '(start) "nav" auto (end)',
    'auto / (start) "nav"', 'auto / "nav" auto (end)',
    'auto / "head" "nav" "main" "foot"', 'auto / (start) "nav" auto (end)',
    'auto 1fr auto / auto 1fr',
    '(start) auto (end) / (first) "content" auto (last)',
    'auto 1fr auto / (header-top) "a   a   a" (header-bottom) ' +
      '(main-top) "b   b   b" 1fr (main-bottom)',
    '(first header) minmax(min-content, max-content) auto max-content ' +
      'repeat(4, (content) 1fr minmax(1px, 1px) (repeat)) (middle) ' +
      '1fr (last footer) / (start) "nav" auto (end)'
  ]);
  var gridAutoFlow = [
    'row', 'column'
  ].qmark(['dense'], ' ', {amp: true}).concat(
    ['stack'].qmark(['row', 'column'], ' ', {amp: true})
  );
  var gridLine = ['auto'].concat(
    ['1'].or(['ident']), ['span'].amp(['1'].or(['ident'])), 'C -1'
  );
  var borderClip = ['normal'].concat(
    ['10px', '10%', '1fr'].times(1, 3)
  ).concat([
    '0 10px 1fr 10px',
    '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr'
  ]);
  var baseline = [
    'central', 'middle', 'alphabetic', 'hanging', 'ideographic',
    'mathematical', 'text-under-edge', 'text-over-edge'
  ];
  var breakInside = [
    'auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region'
  ];
  var overflowFragment = [
    'paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls', 'fragments'
  ];
  var contentSize = ['fill', 'min-content', 'max-content', 'fit-content'];
  var logicalPage = ['recto', 'verso'];
  var lineWidth = ['1px', 'thin', 'medium', 'thick'];
  var lineStyle = [
    'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove',
    'ridge', 'inset', 'outset'
  ];
  var linePosition = lineWidth.or(lineStyle, ['white']);
  var namedHue = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple'
  ].times(1, 2).concat([
    'reddish', 'orangish', 'yellowish', 'greenish', 'bluish', 'purplish',
    'reddish(10%)', 'orangish(10%)', 'yellowish(10%)', 'greenish(10%)',
    'bluish(10%)', 'purplish(10%)'
  ].and(['red', 'orange', 'yellow', 'green', 'blue', 'purple']));
  var hue = number.concat(angle, namedHue);
  var symbol = ['"string"'].concat(image, ['ident']);
  var symbolsType = ['cyclic', 'numeric', 'alphabetic', 'symbolic', 'fixed'];

  NCFTest.Specs = {
    // CSS Level 3
    'selectors3': {
      'title': 'Selectors',
      'tr': 'http://www.w3.org/TR/css3-selectors/',
      'selector': {
        'ns|E': [/*'svg|html', */'*|html', '|html', /*'svg|*', */'*|*', '|*'],
        '[att^=val]': ['[att^=val]', '[att^=\'val\']'],
        '[att$=val]': ['[att$=val]', '[att$=\'val\']'],
        '[att*=val]': ['[att*=val]', '[att*=\'val\']'],
        '[ns|att]': [
          // '[svg|attr]', '[svg|attr=val]',
          '[*|attr]', '[*|attr=val]',
          '[|attr]', '[|attr=val]', '*|html[*|attr]'
        ],
        ':target': ':target',
        ':enabled': ':enabled',
        ':disabled': ':disabled',
        ':checked': ':checked',
        ':indeterminate': ':indeterminate',
        ':root': ':root',
        ':last-child': ':last-child',
        ':first-of-type': ':first-of-type',
        ':last-of-type': ':last-of-type',
        ':only-child': ':only-child',
        ':only-of-type': ':only-of-type',
        ':empty': ':empty',
        ':nth-child()': anb.map(function nthChild(nth) {
          return ':nth-child(' + nth + ')';
        }),
        ':nth-last-child()': anb.map(function nthLastChild(nth) {
          return ':nth-last-child(' + nth + ')';
        }),
        ':nth-of-type()': anb.map(function nthOfType(nth) {
          return ':nth-of-type(' + nth + ')';
        }),
        ':nth-last-of-type()': anb.map(function nthLastOfType(nth) {
          return ':nth-last-of-type(' + nth + ')';
        }),
        ':not()': [
          ':not(element)', ':not(*)', ':not([attr])', ':not(.class)',
          ':not(#id)', ':not(:first-child)',
          ':not(.class):not(#id):not([attr]):not(:link)'
        ],
        '::first-line': '::first-line',
        '::first-letter': '::first-letter',
        '::before': '::before',
        '::after': '::after',
        'E ~ F': 'foo ~ bar'
      }
    },

    'css-color-3': {
      'title': 'Color',
      'tr': 'http://www.w3.org/TR/css3-color/',
      'keyword': {
        'transparent': [
          'color', 'background-color', 'border-color', 'text-decoration-color',
          'column-rule-color'
        ],
        'currentColor': [
          'color', 'background-color', 'border-color', 'text-decoration-color',
          'column-rule-color'
        ]
      },
      'value': {
        'properties': [
          'color',
          'background-color',
          'border-color',
          'text-decoration-color',
          'column-rule-color'
        ],
        'rgba()': [
          'rgba(0, 0, 0, .5)', 'rgba(255, 0, 0, 1)', 'rgba(100%, 0%, 0%, 1)'
        ],
        'hsl()': 'hsl(0, 0%, 0%)',
        'hsla()': 'hsla(0, 0%, 0%, .5)'
      },
      'property': {
        'color': [
          'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque',
          'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue',
          'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk',
          'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod',
          'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
          'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon',
          'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey',
          'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
          'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen',
          'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey',
          'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki',
          'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue',
          'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
          'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon',
          'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
          'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta',
          'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple',
          'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
          'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
          'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab',
          'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise',
          'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum',
          'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
          'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue',
          'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen',
          'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet',
          'wheat', 'whitesmoke', 'yellowgreen'
        ],
        'opacity': alphavalue
      }
    },

    /*
     * Note: the following media queries must be true in supporting UAs!
     */
    'mediaqueries3': {
      'title': 'Media Queries',
      'tr': 'http://www.w3.org/TR/css3-mediaqueries/',
      'mediaQuery': {
        'only': ['only screen', 'only all'],
        'not': [
          'not braille', 'not handheld', 'not print', 'not projection',
          'not tty', 'not tv'
        ],
        'and': [
          'all and (width)', '(width) and (height)',
          'screen, print and (height)', 'only screen and (width)',
          'not print and (height)', 'only screen, (width) and (height)',
          'not tv and (width) and (height)',
          'all and (width) and (height), only print and (width), ' +
            'not screen and (height)'
        ],
        'width': [
          '(width)', 'not print and (width: 0)',
          '(min-width: 0)', '(min-width: 1px)', '(max-width: 1000000px)'
        ],
        'height': [
          '(height)', 'not print and (height: 0)',
          '(min-height: 0)', '(min-height: 1px)', '(max-height: 1000000px)'
        ],
        'device-width': [
          '(device-width)', 'not print and (device-width: 0)',
          '(min-device-width: 0)', '(min-device-width: 1px)',
          '(max-device-width: 1000000px)'
        ],
        'device-height': [
          '(device-height)', 'not print and (device-height: 0)',
          '(min-device-height: 0)', '(min-device-height: 1px)',
          '(max-device-height: 1000000px)'
        ],
        'orientation': [
          '(orientation)', 'not print and (orientation: portrait)',
          '(orientation: landscape)'
        ],
        'aspect-ratio': [
          '(aspect-ratio)',
          'not print and (aspect-ratio: 1/1)',
          '(min-aspect-ratio: 1/1000000)',
          '(min-aspect-ratio: 1 / 1000000)',
          '(max-aspect-ratio: 1000000/1)'
        ],
        'device-aspect-ratio': [
          '(device-aspect-ratio)',
          'not print and (device-aspect-ratio: 1/1)',
          '(min-device-aspect-ratio: 1/1000000)',
          '(min-device-aspect-ratio: 1 / 1000000)',
          '(max-device-aspect-ratio: 1000000/1)'
        ],
        'color': [
          '(color)', 'not print and (color: 0)', '(min-color: 0)',
          '(max-color: 100)'
        ],
        'color-index': [
          'not print and (color-index)', '(color-index: 0)',
          '(min-color-index: 0)', 'not print and (min-color-index: 1)',
          '(max-color-index: 10000000)'
        ],
        'monochrome': [
          'not print and (monochrome)', '(monochrome: 0)',
          '(min-monochrome: 0)', 'not print and (min-monochrome: 1)',
          '(max-monochrome: 10000)'
        ],
        'resolution': [
          '(resolution)',
          'not print and (resolution: 1dpi)',
          '(min-resolution: 1dpi)',
          '(max-resolution: 1000000dpi)',
          '(max-resolution: 1000000dpcm)',
          '(max-resolution: 1000000dppx)'
        ],
        'scan': [
          'not tv and (scan)', 'not tv and (scan: progressive)',
          'not tv and (scan: interlace)'
        ],
        'grid': [
          'not print and (grid)', '(grid: -0)', '(grid: 0)',
          'not print and (grid: 1)'
        ]
      }
    },

    'css-conditional-3': {
      'title': 'Conditional Rules',
      'tr': 'http://www.w3.org/TR/css3-conditional/',
      'atrule': {
        '@supports': [
          // check syntax parsing, not check supporting these as a feature.
          // see http://dev.w3.org/csswg/css-conditional-3/#supports_rule
          '@supports (width: 1px)', '@supports ((width: 1px))',
          '@supports (width: 1px !important)',/*
          '@supports (javascript: @return)',
          '@supports url(foo.png)', '@supports (1px)', '@supports (@media)',
          '@supports (~=)', '@supports (|=)', '@supports (:)',
          '@supports (url(foo.png))', '@supports ({;})',*/
          '@supports not (javascript: return)',
          '@supports (width: 1px) or (display: flex)',
          '@supports (width: 1px) and (height: 1px)',
          '@supports (box-shadow: 2px 2px 2px black) or ' +
            '(-moz-box-shadow: 2px 2px 2px black) or ' +
            '(-webkit-box-shadow: 2px 2px 2px black) or ' +
            '(-o-box-shadow: 2px 2px 2px black)',
          '@supports ((transition-property: color) or ' +
            '(animation-name: foo)) and (transform: rotate(10deg))',
          '@supports (transition-property: color) or ' +
            '((animation-name: foo) and (transform: rotate(10deg)))',
          '@supports ((not (javascript: return)) and ' +
            '(transition-property: color)) or (display: subgrid)'
        ]
      }
    },

    'css-cascade-3': {
      'title': 'Cascading and Inheritance',
      'keyword': {
        'unset': ['width', 'height']
      },
      'property': {
        'all': ['unset']
      }
    },

    'css-namespaces-3': {
      'title': 'Namespaces',
      'tr': 'http://www.w3.org/TR/css3-namespace/',
      'atrule': {
        '@namespace': [
          '@namespace "";',
          '@namespace empty "";',
          '@namespace "http://www.w3.org/1999/xhtml";',
          '@namespace svg "http://www.w3.org/2000/svg";',
          '@namespace url(http://www.w3.org/1999/xhtml);',
          '@namespace svg url(http://www.w3.org/2000/svg);'
        ]
      }
    },

    'css-backgrounds-3': {
      'title': 'Backgrounds and Borders',
      'tr': 'http://www.w3.org/TR/css3-background/',
      'property': {
        'background-image': ['linear-gradient(white, black)'].concat(
          ['none', 'url(foo.png)', 'linear-gradient(white, black)'].times(
            2, 2, ', '
          ),
          ['none, url(foo.png), linear-gradient(white, black)']
        ),
        'background-repeat': repeatStyle.times(
          1, 2, ', '
        ).remove(['repeat', 'repeat-x', 'repeat-y', 'no-repeat']).concat(
          ['repeat, repeat-x, repeat-y']
        ),
        'background-attachment': ['local'].concat(
          ['scroll', 'fixed', 'local'].times(2, 2, ', '),
          ['scroll, fixed, local']
        ),
        'background-position': ['center'].concat(
          ['left', 'right'].qmark(['10%', '10px'])
        ).amp(['center'].concat(
          ['top', 'bottom'].qmark(['10%', '10px'])
        )).uniq().filter(function remove2ValueSyntax(val) {
          return val.split(' ').length > 2;
        }).concat([
          'left, center', 'left, center, right',
          'left, left top, center top 10%, left 10% top 10%'
        ]),
        'background-clip': box.times(1, 2, ', ').concat(
          'border-box, padding-box, content-box'
        ),
        'background-origin': box.times(1, 2, ', ').concat(
          'border-box, padding-box, content-box'
        ),
        'background-size': bgSize.times(1, 2, ', ').concat(
          ['auto, 10px, 50%']
        ),
        'background': ['linear-gradient(white, black)'].concat(
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px'])
          )).uniq().filter(function remove2ValueSyntax(val) {
            return val.split(' ').length > 2;
          }),
          position.and(bgSize, ' / '),
          ['space', 'round'].concat(
            ['repeat', 'space', 'round', 'no-repeat'].times(2)
          ),
          ['local'],
          box.times(1, 2)
        ).concat([
          'linear-gradient(white, black) left',
          'linear-gradient(white, black) transparent',
          'left linear-gradient(white, black)',
          'transparent linear-gradient(white, black)',
          'none left repeat scroll border-box',
          'none left repeat scroll border-box transparent',
          'none left / auto repeat scroll border-box',
          'none left / auto repeat scroll border-box transparent',
          'none left repeat scroll border-box padding-box',
          'none left repeat scroll border-box padding-box transparent',
          'none left / auto repeat scroll border-box padding-box',
          'none left / auto repeat scroll border-box padding-box transparent',
          'url(foo.png) bottom right / cover padding-box content-box',
          'linear-gradient(white, black) left 10% top 10% / auto 10px ' +
            'space round local content-box content-box rgba(255, 255, 0, 0.5)',
          'url(foo.png), url(bar.svg)', 'url(foo.png), transparent',
          'none left repeat scroll border-box, ' +
            'none left repeat scroll border-box',
          'none left / auto repeat scroll border-box padding-box, ' +
            'none left / auto repeat scroll border-box padding-box transparent',
          'none, none, none'
        ]),
        'border-top-left-radius': ['10px', '10%'].times(1, 2),
        'border-top-right-radius': ['10px', '10%'].times(1, 2),
        'border-bottom-right-radius': ['10px', '10%'].times(1, 2),
        'border-bottom-left-radius': ['10px', '10%'].times(1, 2),
        'border-radius': ['10px', '10%'].times(1, 4).times(1, 2, ' / '),
        'border-image-source': ['none'].concat(image),
        'border-image-slice': [
          '1', '10%'
        ].times(1, 4).qmark(['fill'], ' ', {amp: true}),
        'border-image-width': ['10px', '10%', '1', 'auto'].times(1, 4),
        'border-image-outset': ['10px', '1'].times(1, 4),
        'border-image-repeat': [
          'stretch', 'repeat', 'round', 'space'
        ].times(1, 2),
        'border-image': ['none'].concat(
          image,
          ['1', '10%'].times(1, 4).qmark(['fill'], ' ', {amp: true}).qmark(
            ['1', '1 / 1', '/ 1'], ' / '
          ),
          ['1'].and(width.concat(['1']).times(1, 4), ' / ').qmark(['1'], ' / '),
          ['1 / 1', '1 /'].and(['10px', '1'].times(1, 4), ' / '),
          ['stretch', 'repeat', 'round', 'space'].times(1, 2)
        ).concat([
          '30% 30% / / 10px 10px', 'fill 10 / / 1 10px',
          '30% 10 30% / / 10px 10px 10px', 'fill 30% 30% 30% 30% / / 1 1 1 1',
          '10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px',
          'none 100%', '100% none', 'stretch 100%', 'none stretch',
          'none 100% stretch',
          'none 100% / 1 stretch', 'none 100% / / 0 stretch',
          'none 100% / 1 / 0 stretch', 'none 100% fill / 1 / 0 stretch',
          'url(foo.png) 10', 'url(foo.png) 10%', 'url(foo.png) 10% fill',
          'url(foo.png) 10 round', 'url(foo.png) 10 stretch repeat',
          'url(foo.png) 10 / 10px', 'url(foo.png) 10 / 10% / 10px',
          'url(foo.png) fill 10 / 10% / 10px',
          'url(foo.png) fill 10 / 10% / 10px repeat',
          'url(tl.png) 10 30% 10 30% fill / 1 10px 10% auto / ' +
            '10 5px 1px 10px repeat round'
        ]),
        'box-shadow': ['none'].concat(
          ['inset'].qmark(
            ['10px'].times(2, 4), ' ', {former: true, amp: true}
          ).concat(
            ['10px'].times(2, 4).amp(['white']),
            ['inset'].amp(['10px'].times(2, 4)).amp(['white']).concat(
              ['inset'].amp(['white']).amp(['10px'].times(2, 4))
            ).uniq()
          ).times(1, 2, ', '),
          ['1px 2px, 1px 2px, 1px 2px']
        )
      }
    },

    'css-fonts-3': {
      'title': 'Fonts',
      'property': {
        'font-stretch': [
          'normal', 'ultra-condensed', 'extra-condensed', 'condensed',
          'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded',
          'ultra-expanded'
        ],
        'font-size-adjust': ['none', '1', '.5'],
        'font': [
          'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed',
          'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded',
          'normal ultra-condensed', 'ultra-condensed normal',
          'normal normal ultra-condensed',
          'normal normal normal ultra-condensed',
          'normal normal normal normal'
        ].and(['medium Helvetica']).concat(
          ['normal normal normal normal medium / normal Times, serif']
        ),
        'font-synthesis': ['none'].concat(['weight'].or(['style'])),
        'font-kerning': ['auto', 'normal', 'none'],
        'font-variant-ligatures': ['normal', 'none'].concat(
          ['common-ligatures', 'no-common-ligatures'].or(
            ['discretionary-ligatures', 'no-discretionary-ligatures'],
            ['historical-ligatures', 'no-historical-ligatures'],
            ['contextual', 'no-contextual']
          )
        ),
        'font-variant-position': ['normal', 'sub', 'super'],
        'font-variant-caps': [
          'normal', 'small-caps', 'all-small-caps', 'petite-caps',
          'all-petite-caps', 'unicase', 'titling-caps'
        ],
        'font-variant-numeric': ['normal'].concat(
          ['lining-nums', 'oldstyle-nums'].or(
            ['proportional-nums', 'tabular-nums'],
            ['diagonal-fractions', 'stacked-fractions'],
            ['ordinal'],
            ['slashed-zero']
          )
        ),
        'font-variant-alternates': [
          'normal', 'stylistic(Bongo)', 'historical-forms',
          'styleset(Bongo)', 'styleset(stacked-g, geometric-m)',
          'character-variant(Bongo)', 'character-variant(beta-3, gamma)',
          'swash(Bongo)', 'ornaments(Bongo)', 'annotation(Bongo)',
          'stylistic(Bongo) historical-forms',
          'historical-forms stylistic(Bongo)',
          'stylistic(Bongo) historical-forms styleset(Bongo)',
          'stylistic(Bongo) historical-forms styleset(Bongo) ' +
            'character-variant(Bongo)',
          'stylistic(Bongo) historical-forms styleset(Bongo) ' +
            'character-variant(Bongo) swash(Bongo)',
          'stylistic(Bongo) historical-forms styleset(Bongo) ' +
            'character-variant(Bongo) swash(Bongo) ornaments(Bongo)',
          'stylistic(Bongo) historical-forms styleset(Bongo) ' +
            'character-variant(Bongo) swash(Bongo) ornaments(Bongo) ' +
            'annotation(Bongo)',
          'stylistic(Bongo) historical-forms ' +
            'styleset(stacked-g, geometric-m) ' +
            'character-variant(beta-3, gamma) swash(Bongo) ' +
            'ornaments(Bongo) annotation(Bongo)'
        ],
        'font-variant-east-asian': ['normal'].concat(
          ['jis78', 'jis83', 'jis90', 'jis04', 'simplified', 'traditional'].or(
            ['full-width', 'proportional-width'],
            ['ruby']
          )
        ),
        'font-variant': [
          'none',
          'common-ligatures', 'no-common-ligatures',
          'discretionary-ligatures', 'no-discretionary-ligatures',
          'historical-ligatures', 'no-historical-ligatures',
          'contextual', 'no-contextual',
          'stylistic(Bongo)', 'historical-forms',
          'styleset(Bongo)', 'styleset(stacked-g, geometric-m)',
          'character-variant(Bongo)', 'character-variant(beta-3, gamma)',
          'swash(Bongo)', 'ornaments(Bongo)', 'annotation(Bongo)',
          'all-small-caps', 'petite-caps', 'all-petite-caps', 'unicase',
          'titling-caps',
          'lining-nums', 'oldstyle-nums',
          'proportional-nums', 'tabular-nums',
          'diagonal-fractions', 'stacked-fractions',
          'ordinal', 'slashed-zero',
          'jis78', 'jis83', 'jis90', 'jis04', 'simplified', 'traditional',
          'full-width', 'proportional-width',
          'ruby',
          'common-ligatures discretionary-ligatures',
          'discretionary-ligatures common-ligatures',
          'common-ligatures discretionary-ligatures ' +
            'historical-ligatures contextual stylistic(Bongo) ' +
            'historical-forms styleset(stacked-g, geometric-m) ' +
            'character-variant(beta-3, gamma) swash(Bongo) ' +
            'ornaments(Bongo) annotation(Bongo) small-caps lining-nums ' +
            'proportional-nums diagonal-fractions ordinal slashed-zero jis78 ' +
            'full-width ruby'
        ],
        'font-feature-settings': [
          'normal', '\'c2sc\'', '\'c2sc\' 1', '\'smcp\' on', '\'liga\' off',
          '\'smcp\', \'swsh\'',
          '\'smcp\', \'swsh\' 2',
          '\'smcp\' on, \'swsh\' off',
          '\'c2sc\', \'smcp\', \'swsh\'',
          '\'c2sc\', \'c2sc\' 1, \'smcp\' on, \'liga\' off'
        ],
        'font-language-override': ['normal', '\'SRB\'']
      },
      'atrule': {
        '@font-face': '@font-face',
        '@font-feature-values': '@font-feature-values Jupiter Sans'
      },
      // WebKit/Blink has 'src' and 'unicode-range' as a property too.
      'descriptor': {
        'atrule': '@font-face',
        'font-family': ['Helvetica', 'Verdana'],
        'src': [
          'url(fonts/simple.ttf)', 'local(Gentium)', 'local("Arial Lihavoitu")',
          'url(ideal-sans-serif.woff) format(\'woff\')',
          'url(basic-sans-serif.ttf) format(\'truetype\')',
          'url(basic-sans-serif.otf) format(\'opentype\')',
          'url(basic-sans-serif.eot) format(\'embedded-opentype\')',
          'url(fonts.svg#MyGeometricModern) format(\'svg\')',
          'url(basic-sans-serif.ttf) format(\'truetype\', \'opentype\')',
          'url(fonts/simple.ttf), url(ideal-sans-serif.woff)',
          'url(GentiumBold.ttf), local(Gentium-Bold)',
          'local(Gentium), url(Gentium.ttf)',
          'local(Futura-Medium), ' +
            'url(fonts.svg#MyGeometricModern) format(\'svg\')',
          'url(ideal-sans-serif.woff) format(\'woff\'), ' +
            'url(basic-sans-serif.ttf) format(\'opentype\')',
          'url(fonts/simple.ttf), ' +
            'url(ideal-sans-serif.woff), url(basic-sans-serif.ttf)',
          'local(HiraKakuPro-W3), local(Meiryo), local(IPAPGothic)'
        ],
        'font-style': ['normal', 'italic', 'oblique'],
        'font-weight': [
          'normal', 'bold',
          '100', '200', '300', '400', '500', '600', '700', '800', '900'
        ],
        'font-stretch': [
          'normal', 'ultra-condensed', 'extra-condensed', 'condensed',
          'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded',
          'ultra-expanded'
        ],
        'unicode-range': [
          'U+0-10FFFF', 'U+416', 'U+400-4ff', 'U+4??',
          'U+A5', 'U+0-7F', 'U+590-5ff', 'U+30??', 'U+0-2FF',
          'U+416, U+417', 'U+A5, U+4E00-9FFF', 'U+00-FF, U+980-9FF',
          'U+3000-9FFF, U+ff??', 'U+000-5FF, U+1e00-1fff, U+2000-2300',
          'U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F',
          'U+000-49F, U+2000-27FF, U+2900-2BFF, U+1D400-1D7FF'
        ],
        'font-variant': [
          'normal', 'none',
          'common-ligatures', 'no-common-ligatures',
          'discretionary-ligatures', 'no-discretionary-ligatures',
          'historical-ligatures', 'no-historical-ligatures',
          'contextual', 'no-contextual',
          'stylistic(Bongo)', 'historical-forms',
          'styleset(Bongo)', 'styleset(stacked-g, geometric-m)',
          'character-variant(Bongo)', 'character-variant(beta-3, gamma)',
          'swash(Bongo)', 'ornaments(Bongo)', 'annotation(Bongo)',
          'small-caps', 'all-small-caps', 'petite-caps', 'all-petite-caps',
          'unicase', 'titling-caps',
          'lining-nums', 'oldstyle-nums',
          'proportional-nums', 'tabular-nums',
          'diagonal-fractions', 'stacked-fractions',
          'ordinal', 'slashed-zero',
          'jis78', 'jis83', 'jis90', 'jis04', 'simplified', 'traditional',
          'full-width', 'proportional-width',
          'ruby',
          'common-ligatures discretionary-ligatures',
          'discretionary-ligatures common-ligatures',
          'common-ligatures discretionary-ligatures ' +
            'historical-ligatures contextual stylistic(Bongo) ' +
            'historical-forms styleset(stacked-g, geometric-m) ' +
            'character-variant(beta-3, gamma) swash(Bongo) ' +
            'ornaments(Bongo) annotation(Bongo) small-caps lining-nums ' +
            'proportional-nums diagonal-fractions ordinal slashed-zero jis78 ' +
            'full-width ruby'
        ],
        'font-feature-settings': [
          'normal', '\'c2sc\'', '\'c2sc\' 1', '\'smcp\' on', '\'liga\' off',
          '\'smcp\', \'swsh\'',
          '\'smcp\', \'swsh\' 2',
          '\'smcp\' on, \'swsh\' off',
          '\'c2sc\', \'smcp\', \'swsh\'',
          '\'c2sc\', \'c2sc\' 1, \'smcp\' on, \'liga\' off'
        ]
      }
    },

    'css-values-3': {
      'title': 'Values and Units',
      'keyword': {
        'initial': ['width', 'height']
      },
      'value': {
        '+<number> exponential notation': {
          'values': [
            '0e+0', '0e-0', '0e0', '+0e+0', '+0e-0', '+0e0', '-0e+0', '-0e-0',
            '-0e0',
            '1e+1', '1e-1', '1e1', '+1e+1', '+1e-1', '+1e1',
            '0.1e+1', '0.1e-1', '0.1e1', '+0.1e+1', '+0.1e-1', '+0.1e1',
            '.1e+1', '.1e-1', '.1e1', '+.1e+1', '+.1e-1', '+.1e1'
          ],
          'properties': ['opacity', 'line-height']
        },
        '-<number> exponential notation': {
          'values': [
            '0e+0', '0e-0', '0e0', '+0e+0', '+0e-0', '+0e0', '-0e+0', '-0e-0',
            '-0e0',
            '-1e+1', '-1e-1', '-1e1',
            '-0.1e+1', '-0.1e-1', '-0.1e1',
            '-.1e+1', '-.1e-1', '-.1e1'
          ],
          'properties': ['opacity']
        },
        '+<percentage> exponential notation': {
          'values': [
            '0e+0', '0e-0', '0e0', '+0e+0', '+0e-0', '+0e0', '-0e+0', '-0e-0',
            '-0e0',
            '0e+0%', '0e-0%', '0e0%', '+0e+0%', '+0e-0%', '+0e0%',
            '-0e+0%', '-0e-0%', '-0e0%',
            '1e+1%', '1e-1%', '1e1%', '+1e+1%', '+1e-1%', '+1e1%',
            '0.1e+1%', '0.1e-1%', '0.1e1%', '+0.1e+1%', '+0.1e-1%', '+0.1e1%',
            '.1e+1%', '.1e-1%', '.1e1%', '+.1e+1%', '+.1e-1%', '+.1e1%'
          ],
          'properties': [
            'width', 'height', 'max-width', 'max-height', 'min-width',
            'min-height', 'padding', 'padding-top', 'padding-bottom',
            'padding-left', 'padding-right', 'font-size', 'line-height', 'top',
            'bottom', 'left', 'right', 'margin', 'margin-top', 'margin-bottom',
            'margin-left', 'margin-right', 'background', 'background-position',
            'text-indent', 'vertical-align'
          ]
        },
        '-<percentage> exponential notation': {
          'values': [
            '0e+0', '0e-0', '0e0', '+0e+0', '+0e-0', '+0e0', '-0e+0', '-0e-0',
            '-0e0',
            '0e+0%', '0e-0%', '0e0%', '+0e+0%', '+0e-0%', '+0e0%',
            '-0e+0%', '-0e-0%', '-0e0%',
            '-1e+1%', '-1e-1%', '-1e1%',
            '-0.1e+1%', '-0.1e-1%', '-0.1e1%',
            '-.1e+1%', '-.1e-1%', '-.1e1%'
          ],
          'properties': [
            'top', 'bottom', 'left', 'right', 'margin', 'margin-top',
            'margin-bottom', 'margin-left', 'margin-right', 'background',
            'background-position', 'text-indent', 'vertical-align'
          ]
        },
        '+<length> exponential notation': {
          'values': [
            '0e+0', '0e-0', '0e0', '+0e+0', '+0e-0', '+0e0', '-0e+0', '-0e-0',
            '-0e0',
            '0e+0px', '0e-0px', '0e0px', '+0e+0px', '+0e-0px', '+0e0px',
            '-0e+0px', '-0e-0px', '-0e0px',
            '1e+1px', '1e-1px', '1e1px', '+1e+1px', '+1e-1px', '+1e1px',
            '0.1e+1px', '0.1e-1px', '0.1e1px', '+0.1e+1px', '+0.1e-1px',
            '+0.1e1px',
            '.1e+1px', '.1e-1px', '.1e1px', '+.1e+1px', '+.1e-1px', '+.1e1px'
          ],
          'properties': [
            'width', 'height', 'max-width', 'max-height', 'min-width',
            'min-height', 'padding', 'padding-top', 'padding-bottom',
            'padding-left', 'padding-right', 'font-size', 'line-height', 'top',
            'bottom', 'left', 'right', 'margin', 'margin-top', 'margin-bottom',
            'margin-left', 'margin-right', 'background', 'background-position',
            'text-indent', 'vertical-align'
          ]
        },
        '-<length> exponential notation': {
          'values': [
            '0e+0', '0e-0', '0e0', '+0e+0', '+0e-0', '+0e0', '-0e+0', '-0e-0',
            '-0e0',
            '0e+0px', '0e-0px', '0e0px', '+0e+0px', '+0e-0px', '+0e0px',
            '-0e+0px', '-0e-0px', '-0e0px',
            '-1e+1px', '-1e-1px', '-1e1px',
            '-0.1e+1px', '-0.1e-1px', '-0.1e1px',
            '-.1e+1px', '-.1e-1px', '-.1e1px'
          ],
          'properties': [
            'top', 'bottom', 'left', 'right', 'margin', 'margin-top',
            'margin-bottom', 'margin-left', 'margin-right', 'background',
            'background-position', 'text-indent', 'vertical-align'
          ]
        },
        'calc(+<number>)': {
          'values': [
            'calc(0)', 'calc(+0)', 'calc(-0)',
            'calc(1)', 'calc(+1)',
            'calc(0.1)', 'calc(+0.1)', 'calc(.1)', 'calc(+.1)',
            'calc(1 + 2)', 'calc(4 - 3)', 'calc(5 * 6)', 'calc(7 / 8)'
          ],
          'properties': ['opacity', 'line-height']
        },
        'calc(-<number>)': {
          'values': [
            'calc(0)', 'calc(+0)', 'calc(-0)',
            'calc(-1)', 'calc(-0.1)', 'calc(-.1)'
          ],
          'properties': ['opacity']
        },
        'calc(+<percentage>)': {
          'values': [
            'calc(0%)', 'calc(+0%)', 'calc(-0%)',
            'calc(1%)', 'calc(+1%)',
            'calc(0.1%)', 'calc(+0.1%)', 'calc(.1%)', 'calc(+.1%)',
            'calc(1% + 2%)', 'calc(4% - 3%)', 'calc(5% * 6)', 'calc(7% / 8)',
            'calc(100%/3 - 2*1em - 2*1px)', 'calc(50% + 20px)',
            'calc(100% - 100% + 1em)'
          ],
          'properties': [
            'width', 'height', 'max-width', 'max-height', 'min-width',
            'min-height', 'padding', 'padding-top', 'padding-bottom',
            'padding-left', 'padding-right', 'font-size', 'line-height', 'top',
            'bottom', 'left', 'right', 'margin', 'margin-top', 'margin-bottom',
            'margin-left', 'margin-right', 'background', 'background-position',
            'text-indent', 'vertical-align'
          ]
        },
        'calc(-<percentage>)': {
          'values': [
            'calc(0%)', 'calc(+0%)', 'calc(-0%)',
            'calc(-1%)', 'calc(-0.1%)', 'calc(-.1%)'
          ],
          'properties': [
            'top', 'bottom', 'left', 'right', 'margin', 'margin-top',
            'margin-bottom', 'margin-left', 'margin-right', 'background',
            'background-position', 'text-indent', 'vertical-align'
          ]
        },
        'calc(+<length>)': {
          'values': [
            'calc(0px)', 'calc(+0px)', 'calc(-0px)',
            'calc(1px)', 'calc(+1px)',
            'calc(0.1px)', 'calc(+0.1px)', 'calc(.1px)', 'calc(+.1px)',
            'calc(1px + 2px)', 'calc(4px - 3px)', 'calc(5px * 6)',
            'calc(7px / 8)',
            'calc(1ch * 2)', 'calc(1rem * 2)', 'calc(100vw / 40)',
            'calc(1vh * 2)', 'calc(1vmin * 2)', 'calc(1vmax * 2)',
            'calc((100vw - 100%) / 2)', 'calc(1rem - 1px)',
            'calc((1px))', 'calc(calc(1px))',
            'calc(1px * 2px)', 'calc(1px * (2))',
            'calc(calc(1px + 2px) * (3px + 4px))',
            // 'calc(attr(data-px) * 2)',
            'calc(1px + 2px + 3px + 4px + 5px + 6px + 7px + 8px + 9px + ' +
              '10px + 11px + 12px + 13px + 14px + 15px + 16px + 17px + ' +
              '18px + 19px + 20px)',
            'calc(1px + 2px + 3px + 4px + 5px + 6px + 7px + 8px + 9px + ' +
              '10px + 11px + 12px + 13px + 14px + 15px + 16px + 17px + ' +
              '18px + 19px + 20px + 21px)'
          ],
          'properties': [
            'width', 'height', 'max-width', 'max-height', 'min-width',
            'min-height', 'padding', 'padding-top', 'padding-bottom',
            'padding-left', 'padding-right', 'font-size', 'line-height', 'top',
            'bottom', 'left', 'right', 'margin', 'margin-top', 'margin-bottom',
            'margin-left', 'margin-right', 'background', 'background-position',
            'text-indent', 'vertical-align'
          ]
        },
        'calc(-<length>)': {
          'values': [
            'calc(0px)', 'calc(+0px)', 'calc(-0px)',
            'calc(-1px)', 'calc(-0.1px)', 'calc(-.1px)'
          ],
          'properties': [
            'top', 'bottom', 'left', 'right', 'margin', 'margin-top',
            'margin-bottom', 'margin-left', 'margin-right', 'background',
            'background-position', 'text-indent', 'vertical-align'
          ]
        },
        'toggle()': {
          'values': ['toggle(1px, 2px)', 'toggle(1px, 2px, 3px)'],
          'properties': [
            'width', 'height',
            'margin-top', 'margin-bottom', 'margin-left', 'margin-right'
          ]
        },
        'attr()': {
          'values': [
            'data-px',
            'data-text string', 'data-text color', 'data-text url',
            'data-text integer', 'data-text number', 'data-text length',
            'data-text angle', 'data-text time', 'data-text frequency',
            'data-text em', 'data-text ex', 'data-text px', 'data-text rem',
            'data-text vw', 'data-text vh', 'data-text vmin', 'data-text vmax',
            'data-text mm', 'data-text cm', 'data-text in', 'data-text pt',
            'data-text pc', 'data-text deg', 'data-text grad', 'data-text rad',
            'data-text ms', 'data-text s', 'data-text Hz', 'data-text kHz',
            'data-text %',
            'data-px, 1px', 'data-px px, 1px', 'data-px px, calc(1px)'
          ].map(function attr(arg) {
            return 'attr(' + arg + ')';
          }),
          'properties': ['width', 'height']
        }
      },
      'unit': {
        'ch': ['width', 'height'],
        'rem': ['width', 'height'],
        'vw': ['width', 'height'],
        'vh': ['width', 'height'],
        'vmin': ['width', 'height'],
        'vmax': ['width', 'height'],
        'q': ['letter-spacing'],
        'deg': [
          'azimuth', 'elevation', 'image-orientation',
          'glyph-orientation-vertical', 'glyph-orientation-horizontal'
        ],
        'grad': [
          'azimuth', 'elevation', 'image-orientation',
          'glyph-orientation-vertical', 'glyph-orientation-horizontal'
        ],
        'rad': [
          'azimuth', 'elevation', 'image-orientation',
          'glyph-orientation-vertical', 'glyph-orientation-horizontal'
        ],
        'turn': [
          'azimuth', 'elevation', 'image-orientation',
          'glyph-orientation-vertical', 'glyph-orientation-horizontal'
        ],
        's': [
          'transition-duration', 'transition-delay', 'transition',
          'animation-duration', 'animation-delay', 'animation',
          'pause-before', 'pause-after', 'pause', 'rest-before', 'rest-after',
          'rest', 'voice-duration'
        ],
        'ms': [
          'transition-duration', 'transition-delay', 'transition',
          'animation-duration', 'animation-delay', 'animation',
          'pause-before', 'pause-after', 'pause', 'rest-before', 'rest-after',
          'rest', 'voice-duration'
        ],
        'dpi': ['image-resolution'],
        'dpcm': ['image-resolution'],
        'dppx': ['image-resolution']
      }
    },

    'css-ui-3': {
      'title': 'Basic User Interface',
      'tr': 'http://www.w3.org/TR/css3-ui/',
      'property': {
        'content': 'icon',
        'icon': ['auto'].concat(['url(foo.png)'].times(1, 3, ', ')),
        'box-sizing': box,
        'outline-style': 'auto',
        'outline-offset': ['0', '5px', '-5px'],
        'resize': ['none', 'both', 'horizontal', 'vertical'],
        'text-overflow': ['clip', 'ellipsis', '\'foo\''].times(1, 2),
        'cursor': [
          'url(foo.png) 2 2, auto', 'url(foo.png) 1 1, url(bar.png), auto',
          'url(foo.png) 1 1, url(bar.png) 2 2, auto',
          'url(foo.png) 1.1 1.1, url(bar.png) 2.2 2.2, ' +
            'url(baz.png) 3.3 3.3, auto',
          'url(example.svg#linkcursor), url(hyper.cur), ' +
            'url(hyper.png) 2 3, pointer',
          'none', 'context-menu', 'cell', 'vertical-text',
          'alias', 'copy', 'no-drop', 'not-allowed', 'ew-resize', 'ns-resize',
          'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize',
          'all-scroll', 'zoom-in', 'zoom-out'
        ],
        'nav-index': ['auto', '1', '10', '1.1'],
        'nav-up': ['auto', '#foo'].concat(
          ['#foo'].and(['current', 'root', '\'main\''])
        ),
        'nav-right': ['auto', '#foo'].concat(
          ['#foo'].and(['current', 'root', '\'main\''])
        ),
        'nav-down': ['auto', '#foo'].concat(
          ['#foo'].and(['current', 'root', '\'main\''])
        ),
        'nav-left': ['auto', '#foo'].concat(
          ['#foo'].and(['current', 'root', '\'main\''])
        ),
        'ime-mode': ['auto', 'normal', 'active', 'inactive', 'disabled']
      },
      'selector': {
        ':default': ':default',
        ':valid': ':valid',
        ':invalid': ':invalid',
        ':in-range': ':in-range',
        ':out-of-range': ':out-of-range',
        ':required': ':required',
        ':optional': ':optional',
        ':read-only': ':read-only',
        ':read-write': ':read-write',
        '::value': '::value',
        '::choices': '::choices',
        '::repeat-item': '::repeat-item',
        '::repeat-index': '::repeat-index'
      }
    },

    'css-text-3': {
      'title': 'Text',
      'property': {
        'text-transform': ['full-width'],
        'tab-size': ['8', '1em'],
        'word-break': ['normal', 'keep-all', 'break-all'],
        'line-break': ['auto', 'loose', 'normal', 'strict'],
        'hyphens': ['manual', 'none', 'auto'],
        'word-wrap': ['normal', 'break-word'],
        'overflow-wrap': ['normal', 'break-word'],
        'text-align': ['start', 'end', 'match-parent', 'justify-all'],
        'text-align-all': [
          'start', 'end', 'left', 'right', 'center', 'justify', 'match-parent'
        ],
        'text-align-last': [
          'auto', 'start', 'end', 'left', 'right', 'center', 'justify'
        ],
        'text-justify': ['auto', 'none', 'inter-word', 'distribute'],
        'word-spacing': ['10%', '-10%'],
        'text-indent': ['1em', '1%'].amp(['hanging']).concat(
          ['1em', '1%'].amp(['each-line']),
          ['1em', '1%'].amp(['hanging'], ['each-line'])
        ),
        'hanging-punctuation': ['none'].concat(
          ['first'].or(['force-end', 'allow-end'], ['last'])
        )
      }
    },

    'css-text-decor-3': {
      'title': 'Text Decoration',
      'property': {
        'text-decoration-line': ['none'].concat(
          ['underline'].or(['overline'], ['line-through'], ['blink'])
        ),
        'text-decoration-color': 'white',
        'text-decoration-style': [
          'solid', 'double', 'dotted', 'dashed', 'wavy'
        ],
        'text-decoration': [
          'white', 'solid', 'double', 'dotted', 'dashed', 'wavy'
        ].concat(
          ['none'].concat(
            ['underline'].or(['overline'], ['line-through'], ['blink'])
          ).amp(['white']),
          ['none'].concat(
            ['underline'].or(['overline'], ['line-through'], ['blink'])
          ).amp(
            ['solid', 'double', 'dotted', 'dashed', 'wavy']
          ),
          ['white'].amp(['solid', 'double', 'dotted', 'dashed', 'wavy'])
        ).concat([
          'none white solid', 'none solid white',
          'underline overline line-through blink white solid'
        ]),
        'text-decoration-skip': ['none'].concat(
          ['objects'].or(['spaces'], ['ink'], ['edges'], ['box-decoration'])
        ),
        'text-underline-position': ['auto', 'alphabetic'].concat(
          ['under'].or(['left', 'right'])
        ),
        'text-emphasis-style': ['none', '\'foo\''].concat(
          ['filled', 'open'].or(
            ['dot', 'circle', 'double-circle', 'triangle', 'sesame']
          )
        ),
        'text-emphasis-color': 'green',
        'text-emphasis': ['none', '\'foo\''].concat(
          ['filled', 'open'].or(
            ['dot', 'circle', 'double-circle', 'triangle', 'sesame']
          )
        ).or(['white']),
        'text-emphasis-position': ['over', 'under'].amp(['right', 'left']),
        'text-shadow': ['none'].concat(
          ['10px'].times(2, 3).qmark(['white'], ' ', {amp: true})
        ).concat([
          '10px 10px, 10px 10px', 'white 10px 10px 10px, 10px 10px 10px white',
          '10px 10px, 10px 10px, 10px 10px'
        ])
      }
    },

    'css-page-3': {
      'title': 'Paged Media',
      'tr': 'http://www.w3.org/TR/css3-page/',
      'property': {
        'size': ['auto', '4in', '8.5in 11in'].concat([
          'A5', 'A4', 'A3', 'B5', 'B4', 'letter', 'legal', 'ledger'
        ].or(['portrait', ' landscape'])),
        'marks': ['none'].concat(['crop'].or(['cross'])),
        'bleed': ['auto', '6pt'],
        'page': ['auto', 'rotated', 'narrow', 'main', 'index', 'funky']
      },
      'atrule': {
        '@page': [
          '@page :blank', '@page LandscapeTable',
          '@page :left:right', '@page :left:left',
          '@page :left:right:first', '@page :left:right:first:blank',
          '@page CompanyLetterHead:left', '@page CompanyLetterHead:right',
          '@page CompanyLetterHead:first', '@page CompanyLetterHead:blank',
          '@page page:left:right',
          '@page :left, :right', '@page toc, index', '@page toc, :first',
          '@page page:left:right, :left:right:first:blank'
        ]/*,
        // It seems that Page-Margin Boxes need CSSOM API.
        '@top-left-corner': '@top-left-corner',
        '@top-left': '@top-left',
        '@top-center': '@top-center',
        '@top-right': '@top-right',
        '@top-right-corner': '@top-right-corner',
        '@bottom-left-corner': '@bottom-left-corner',
        '@bottom-left': '@bottom-left',
        '@bottom-center': '@bottom-center',
        '@bottom-right': '@bottom-right',
        '@bottom-right-corner': '@bottom-right-corner',
        '@left-top': '@left-top',
        '@left-middle': '@left-middle',
        '@right-top': '@right-top',
        '@right-middle': '@right-middle',
        '@right-bottom': '@right-bottom'*/
      }
    },

    'css-writing-modes-3': {
      'title': 'Writing Modes',
      'property': {
        'unicode-bidi': ['isolate', 'isolate-override', 'plaintext'],
        'writing-mode': ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
        'text-orientation': [
          'mixed', 'upright', 'sideways-right', 'sideways-left', 'sideways',
          'use-glyph-orientation'
        ],
        'caption-side': ['block-start', 'block-end'],
        'text-combine-upright': ['none', 'all', 'digits', 'digits 2']
      }
    },

    'css-images-3': {
      'title': 'Image Values and Replaced Content',
      'tr': 'http://www.w3.org/TR/css3-images/',
      'value': {
        'properties': [
          'background-image',
          'list-style-image',
          'border-image-source',
          // 'cursor',
          'content',
          'background',
          'list-style',
          'border-image',
          'shape-outside',
          'mask-image'/*,
          'mask',
          'mask-border-source',
          'mask-border'*/
        ],
        'image()': [
          'image(url(../img/noise.png))', 'image("../img/noise.png")',
          'image(\'sprites.png#xywh=10,30,60,20\')', 'image(white)',
          'image(url(../img/noise.png), \'wavy.svg\')',
          'image(\'cat_meme.gif#frame=5\', \'lolcat.png\')',
          'image(url("bg-image.png"), rgba(0, 0, 255, .5))',
          'image(\'dark.png\', black)',
          'image(\'wavy.svg\', \'wavy.png\' , \'wavy.gif\')'
        ],
        'linear-gradient()': angle.concat(
          ['to'].and(['left', 'right'].or(['top', 'bottom']))
        ).qmark(['white'].qmark(
          ['10%', '10px']).times(2, 2, ', '), ', ', {former: true}
        ).map(function linearGradient(arg) {
          return 'linear-gradient(' + arg + ')';
        }).concat([
          'linear-gradient(0deg, white, black)',
          'linear-gradient(-45deg, white, black)',
          'linear-gradient(to bottom, yellow 0%, blue 100%)',
          'linear-gradient(yellow, blue 20%, #0f0)',
          'linear-gradient(to top right, red, white, blue)',
          'linear-gradient(-270deg, red, blue 90px, yellow, green 50%)',
          'linear-gradient(to bottom right, currentColor 100%, ' +
            'rgba(255, 0, 255, 0.3) 100px, transparent 0em, ' +
            'hsla(225, 50%, 100%, 0.7) 75%)'
        ]),
        'radial-gradient()': ['white'].qmark([
          '10%', '10px'
        ]).times(2, 2, ', ').concat(['at'].and(position).concat(
          ['circle'].or(['10px']).concat(
            ['ellipse'].or(['10px', '10%'].times(2)),
            ['circle', 'ellipse'].or(
              ['closest-corner', 'closest-side'].concat(
                ['farthest-corner', 'farthest-side']
              )
            )
          ).uniq().and(['at'].and(
            ['left', 'center', 'right', 'top', 'bottom'].concat(
              ['10%', '10px']
            )/*.concat(
              ['left', 'center', 'right', '10%', '10px'].and(
                ['top', 'center', 'bottom', '10%', '10px']
              ),
              ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
                ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
              )
            ).uniq()*/
          ))
        ).and(['white, black'], ', ')).map(function radialGradient(arg) {
          return 'radial-gradient(' + arg + ')';
        }).concat([
          'radial-gradient(ellipse at center, yellow 0%, green 100%)',
          'radial-gradient(farthest-corner at 50% 50%, yellow, green)',
          'radial-gradient(farthest-side at left bottom, red, ' +
            'yellow 50px, green)',
          'radial-gradient(closest-side at 20px 30px, red, yellow, green)',
          'radial-gradient(20px 30px at 20px 30px, red, yellow, green)',
          'radial-gradient(closest-side circle at 20px 30px, ' +
            'red, yellow, green)',
          'radial-gradient(circle, #006, #00a 90%, #0000af 100%, white 100%)',
          'radial-gradient(20px 20px at 20px 30px, red, yellow, green)',
          'radial-gradient(5em circle at left 55px bottom 75px, yellow, blue)',
          'radial-gradient(5em circle at top 65px right 45%, yellow, blue)',
          'radial-gradient(5em circle at bottom 65px right 45%, yellow, blue)',
          'radial-gradient(5em circle at center left 45%, yellow, blue)',
          'radial-gradient(5em circle at right 45% center, yellow, blue)',
          'radial-gradient(5em circle at right calc(60px + 5px) center, ' +
            'yellow, blue)',
          'radial-gradient(10% 100px ellipse at top 10% right 10px, ' +
            'white 10%, black 10px, red 50%)',
          'radial-gradient(ellipse 10% 20% at top 30% left 40%, ' +
            'currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
            'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
            'transparent 100%)'
        ]),
        'repeating-linear-gradient()': angle.concat(
          ['to'].and(['left', 'right'].or(['top', 'bottom']))
        ).qmark(
          ['white'].qmark(['10%', '10px']).times(2, 2, ', '),
          ', ',
          {former: true}
        ).map(function repeatingLinearGradient(arg) {
          return 'repeating-linear-gradient(' + arg + ')';
        }).concat([
          'repeating-linear-gradient(0deg, white, black)',
          'repeating-linear-gradient(-45deg, white, black)',
          'repeating-linear-gradient(red 0px, white 0px, blue 0px)',
          'repeating-linear-gradient(red 0px, white .1px, blue .2px)',
          'repeating-linear-gradient(red, blue 20px, red 40px)',
          'repeating-linear-gradient(-270deg, red, blue 90px, ' +
            'yellow, green 50%)',
          'repeating-linear-gradient(to bottom right, currentColor 100%, ' +
            'rgba(255, 0, 255, 0.3) 100px, transparent 0em, ' +
            'hsla(225, 50%, 100%, 0.7) 75%)'
        ]),
        'repeating-radial-gradient()': ['white'].qmark([
          '10%', '10px'
        ]).times(2, 2, ', ').concat(
          ['at'].and(position).concat(
            ['circle'].or(['10px']).concat(
              ['ellipse'].or(['10px', '10%'].times(2)),
              ['circle', 'ellipse'].or(
                ['closest-corner', 'closest-side'].concat(
                  ['farthest-corner', 'farthest-side']
                )
              )
            ).uniq().and(['at'].and(
              ['left', 'center', 'right', 'top', 'bottom'].concat(
                ['10%', '10px']
              )/*.concat(
                ['left', 'center', 'right', '10%', '10px'].and(
                  ['top', 'center', 'bottom', '10%', '10px']
                ),
                ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
                  ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
                )
              ).uniq()*/
            ))
          ).and(['white, black'], ', ')
        ).map(function repeatingRadialGradient(arg) {
          return 'repeating-radial-gradient(' + arg + ')';
        }).concat([
          'repeating-radial-gradient(red, blue 20px, red 40px)',
          'repeating-radial-gradient(circle, #006, #00a 90%, ' +
            '#0000af 100%, white 100%)',
          'repeating-radial-gradient(circle closest-side at 20px 30px, red, ' +
            'yellow, green 100%, yellow 150%, red 200%)',
          'repeating-radial-gradient(10% 100px ellipse ' +
            'at top 10% right 10px, white 10%, black 10px, red 50%)',
          'repeating-radial-gradient(ellipse 10% 20% at top 30% left 40%, ' +
            'currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
            'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
            'transparent 100%)'
        ])
      },
      'property': {
        'object-fit': ['fill', 'contain', 'cover', 'none', 'scale-down'],
        'object-position': position,
        'image-resolution': ['from-image'].or(
          ['300dpi', '1dpcm', '1dppx']
        ).qmark(['snap'], ' ', {amp: true}),
        'image-orientation': angle
      }
    },

    'css-counter-styles-3': {
      'title': 'Counter Styles',
      'atrule': {
        '@counter-style': {
          'values': ['@counter-style ident'],
          'require': 'system: symbolic; symbols: A;'
        }
      },
      'descriptor': {
        'system': {
          'symbolic': 'symbols: A;',
          'cyclic': 'symbols: ‣;',
          'numeric': 'symbols: \'0\' \'1\';',
          'alphabetic': 'symbols: A B;',
          'additive': 'additive-symbols: 1 ⚀;',
          'fixed': 'symbols: ◰;',
          'fixed 1': 'symbols: ◰;',
          'extends ident': ''
        },
        'negative': {
          'values': symbol.times(1, 2),
          'require': 'system: symbolic; symbols: A;'
        },
        'prefix': {
          'values': symbol,
          'require': 'system: symbolic; symbols: A;'
        },
        'suffix': {
          'values': symbol,
          'require': 'system: symbolic; symbols: A;'
        },
        'range': {
          'values': ['auto'].concat(
            ['1', 'infinite'].times(2).times(1, 2, ', ').concat(
              ['-1 0']
            )
          ),
          'require': 'system: symbolic; symbols: A;'
        },
        'pad': {
          'values': ['0'].amp(symbol),
          'require': 'system: symbolic; symbols: A;'
        },
        'fallback': {
          'values': [
            'decimal', 'decimal-leading-zero', 'cjk-decimal', 'lower-roman',
            'upper-roman', 'armenian', 'georgian', 'hebrew',
            'lower-alpha', 'lower-latin', 'upper-alpha', 'upper-latin',
            'lower-greek', 'hiragana', 'hiragana-iroha',
            'katakana', 'katakana-iroha',
            'disc', 'circle', 'square', 'disclosure-open', 'disclosure-closed',
            'japanese-informal', 'japanese-formal',
            'korean-hangul-formal', 'korean-hanja-informal',
            'korean-hanja-formal',
            'simp-chinese-informal', 'simp-chinese-formal',
            'trad-chinese-informal', 'trad-chinese-formal', 'cjk-ideographic',
            'ethiopic-numeric'
          ],
          'require': 'system: symbolic; symbols: A;'
        },
        'symbols': {
          'values': symbol.times(1, 2).concat([
            '‣', '◰ ◳ ◲ ◱', '\'*\' ⁑ † ‡',
            'A B C D E F G H I J K L M \nN O P Q R S T U V W X Y Z',
            '\'0\' \'1\' \'2\' \'3\' \'4\' \'5\' \'6\' \'7\' \'8\' \'9\'',
            'ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ' +
              'ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ',
            '\'1\' linear-gradient(white, black) あ'
          ]),
          'require': 'system: symbolic;'
        },
        'additive-symbols': {
          'values': ['0'].amp(symbol).concat([
            '3 \'a\', 2 \'b\'', '6 ⚅, 5 ⚄, 4 ⚃, 3 ⚂, 2 ⚁, 1 ⚀',
            '2 A, 1 radial-gradient(white, black), \'0\' 0'
          ]),
          'require': 'system: additive;'
        },
        'speak-as':  {
          'values': [
            'auto', 'bullets', 'numbers', 'words', 'spell-out', 'ident'
          ],
          'require': 'system: symbolic; symbols: A;'
        }
      },
      'value': {
        'properties': ['list-style', 'list-style-type'],
        'symbols()': symbolsType.qmark(
          ['"string"'].concat(image).times(1, 2), ' ', {former: true}
        ).concat([
          'cyclic \'\' url(foo.png) linear-gradient(white, black)',
          'numeric \'0\' radial-gradient(white, black) \'A\'',
          '"*" "\\2020" "\\2021" "\\A7"', 'cyclic "*" "\\2020" "\\2021" "\\A7"'
        ]).map(function symbols(arg) {
          return 'symbols(' + arg + ')';
        })
      }
    },

    'css-sizing-3': {
      'title': 'Intrinsic & Extrinsic Sizing',
      'tr': 'http://www.w3.org/TR/css3-sizing/',
      'property': {
        'width': contentSize/*.concat('repudiate-floats')*/,
        'min-width': contentSize.concat(
          /*'repudiate-floats', */'contain-floats'
        ),
        'max-width': contentSize/*.concat('repudiate-floats')*/,
        'height': contentSize/*.concat('repudiate-floats')*/,
        'min-height': contentSize.concat(
          /*'repudiate-floats', */'contain-floats'
        ),
        'max-height': contentSize/*.concat('repudiate-floats')*/,
        'column-width': contentSize
      }
    },

    'css-break-3': {
      'title': 'Fragmentation',
      'tr': 'http://www.w3.org/TR/css3-break/',
      'property': {
        'break-before': breakInside.concat([
          'always', 'left', 'right', 'page', 'column', 'region', 'any'
        ], logicalPage),
        'break-after': breakInside.concat([
          'always', 'left', 'right', 'page', 'column', 'region', 'any'
        ], logicalPage),
        'break-inside': breakInside,
        'box-decoration-break': ['slice', 'clone']
      }
    },

    'css-overflow-3': {
      'title': 'Overflow',
      'property': {
        'overflow-x': [
          'visible', 'hidden', 'scroll', 'auto'
        ].concat(overflowFragment),
        'overflow-y': [
          'visible', 'hidden', 'scroll', 'auto'
        ].concat(overflowFragment),
        'overflow': overflowFragment,
        // 'break': ['regions'],
        'max-lines': ['none', '1']
      },
      'selector': {
        '::nth-fragment()': ['::nth-fragment(1)', 'div::nth-fragment(1)']
      }
    },

    'css-lists-3': {
      'title': 'Lists and Counters',
      'property': {
        'display': ['inline-list-item'],
        'list-style-image': ['linear-gradient(white, black)'],
        'list-style-type': ['\'★\''].concat(counterStyle),
        'list-style': ['\'★\''].concat(counterStyle).or([
          'linear-gradient(white, black)'
        ]).concat([
          'disc', 'circle', 'square', 'decimal',
          'decimal-leading-zero', 'lower-roman', 'upper-roman', 'lower-greek',
          'lower-latin', 'upper-latin', 'armenian', 'georgian', 'lower-alpha',
          'upper-alpha', 'none'
        ].amp(['linear-gradient(white, black)'])).concat(
          ['\'★\''].concat(counterStyle).amp(
            ['inside', 'outside', 'none', 'url(foo.png)']
          ),
          ['linear-gradient(white, black)'].amp(['inside', 'outside'])
        ).concat([
          'cjk-ideographic radial-gradient(at center, white, black) outside',
          'repeating-linear-gradient(to left, white, black) hebrew inside',
          'outside hiragana repeating-radial-gradient(at center, white, black)',
          'inside ' +
            'radial-gradient(closest-side ellipse at 10px 10%, white, black) ' +
            'hiragana-iroha'
        ]),
        'position': ['marker'],
        'marker-side': ['list-item', 'list-container'],
        'counter-set': [
          'none', 'section', 'chapter 0', 'section -1 imagenum 99'/*,
          'list-item attr(value integer, 1)'*/
        ]
      },
      'selector': {
        '::marker': '::marker'
      }
    },

    'css-inline-3': {
      'title': 'Inline Layout',
      'tr': 'http://www.w3.org/TR/css3-linebox/',
      'property': {
        'text-height': ['auto', 'font-size', 'text-size', 'max-size', '10.52'],
        'line-height': ['none'],
        'line-box-contain': ['block'].or(
          ['inline'], ['font'], ['glyphs'], ['replaced'], ['inline-box']
        ).concat(['none']),
        'line-stacking-strategy': [
          'inline-line-height', 'block-line-height', 'max-height', 'grid-height'
        ],
        'line-stacking-ruby': ['exclude-ruby', 'include-ruby'],
        'line-stacking-shift': ['consider-shifts', 'disregard-shifts'],
        'line-stacking': [
          'inline-line-height', 'block-line-height', 'max-height', 'grid-height'
        ].or(
          ['exclude-ruby', 'include-ruby'],
          ['consider-shifts', 'disregard-shifts']
        ),
        'dominant-baseline': [
          'auto', 'use-script', 'no-change', 'reset-size'
        ].concat(baseline),
        'alignment-baseline': [
          'baseline', 'use-script', 'over-edge', 'under-edge'
        ].concat(baseline),
        'alignment-adjust': [
          'auto', 'baseline', 'over-edge', 'under-edge',
          '0%', '10%', '0cm', '10px'
        ].concat(baseline),
        'baseline-shift': [
          'baseline', 'sub', 'super', '0%', '10%', '0cm', '10px'
        ],
        'vertical-align': ['auto', 'central'],
        'inline-box-align': ['last', '1'],
        'initial-letter': ['1', '1 1'],
        'initial-letter-align': [
          'auto', 'alphabetic', 'hanging', 'ideographic'
        ]/*,
        'initial-letter-alignment': ['ideographic']*/
      }
    },

    'css-align-3': {
      'title': 'Box Alignment',
      'tr': 'http://www.w3.org/TR/css3-align/',
      'property': {
        'justify-content': justifyContent2,
        'align-content': justifyContent2,
        'justify-self': justifySelf,
        'align-self': alignSelf,
        'justify-items': justifySelf.concat(
          ['legacy'].amp(['left', 'right', 'center'])
        ),
        'align-items': ['auto'].concat(alignSelf)
      }
    },

    // New CSS Level 1~3
    'css-transitions-1': {
      'title': 'Transitions',
      'tr': 'http://www.w3.org/TR/css3-transitions/',
      'property': {
        'transition-property': [
          'all', 'none',
          'background-color', 'background-position', 'border-bottom-color',
          'border-bottom-width', 'border-left-color', 'border-left-width',
          'border-right-color', 'border-right-width', 'border-spacing',
          'border-top-color', 'border-top-width', 'bottom', 'clip', 'color',
          'font-size', 'font-weight', 'height', 'left', 'letter-spacing',
          'line-height', 'margin-bottom', 'margin-left', 'margin-right',
          'margin-top', 'max-height', 'max-width', 'min-height', 'min-width',
          'opacity', 'outline-color', 'outline-width', 'padding-bottom',
          'padding-left', 'padding-right', 'padding-top', 'right',
          'text-indent', 'text-shadow', 'top', 'vertical-align', 'visibility',
          'width', 'word-spacing', 'z-index',
          'all, all', 'all, background-color', 'width, height',
          'width, all, height', 'opacity, left, top, width'
        ],
        'transition-duration': [
          '0s', '1s', '100ms', '0s, 10s', '0ms, 10s, 100s'
        ],
        'transition-timing-function': timingFunction.concat([
          'ease, linear', 'ease, ease, ease'
        ]),
        'transition-delay': [
          '0s', '-1s', '100ms', '0s, 10s', '-100ms, 1s, 10s'
        ],
        'transition': ['none', 'all', 'background-color', '0s', '-1s'].concat(
          timingFunction,
          ['none', 'all', 'top'].or(['2s'], ['ease'], ['-2ms'])
        ).concat([
          'all 0s', '1s -1s', '-1s 1s', 'background-color 0.1s ease',
          'background-position 10ms linear 1s', 'background-color linear 1s',
          '1s 2s width linear', 'border-bottom-color ease-in', '100s 100ms',
          'all, all', 'all, background-color',
          '-1s, -1s', 'all, 1s, ease-in-out',
          '10s border-left-color step-start, step-end, steps(10, start) all',
          'cubic-bezier(.5, 1.5, .5, -2.5) -10ms, -1s all 10s, all ease-in-out',
          'all 1s ease 2s, cubic-bezier(0.25, 0.1, 0.25, 1) 60s 1ms opacity'
        ])
      }
    },

    'css-multicol-1': {
      'title': 'Multi-column Layout',
      'tr': 'http://www.w3.org/TR/css3-multicol/',
      'property': {
        'column-width': ['10em', 'auto'],
        'column-count': ['2', 'auto'],
        'columns': ['1em', 'auto'].or(['1', 'auto']),
        'column-gap': ['1em', '0', 'normal'],
        'column-rule-color': ['red'],
        'column-rule-style': lineStyle,
        'column-rule-width': lineWidth,
        'column-rule': linePosition,
        'column-span': ['none', 'all'],
        'column-fill': ['balance', 'auto'/*, 'balance-all'*/]
      }
    },

    'cssom-view-1': {
      'title': 'CSSOM View',
      'tr': 'http://www.w3.org/TR/cssom-view/',
      'property': {
        'scroll-behavior': ['instant', 'smooth']
      }
    },

    'css-device-adapt-1': {
      'title': 'Device Adaptation',
      'tr': 'http://www.w3.org/TR/css-device-adapt/',
      'atrule': {
        '@viewport': '@viewport'
      },
      'descriptor': {
        'min-width': width,
        'max-width': width,
        'width': width.times(1, 2),
        'min-height': width,
        'max-height': width,
        'height': width.times(1, 2),
        'zoom': ['auto', '1.0', '2.0', '0.5', '100%', '200%', '50%'],
        'min-zoom': ['auto', '1.0', '2.0', '0.5', '100%', '200%', '50%'],
        'max-zoom': ['auto', '1.0', '2.0', '0.5', '100%', '200%', '50%'],
        'user-zoom': ['zoom', 'fixed'],
        'orientation': ['auto', 'portrait', 'landscape']
      }
    },

    // New CSS Level 1
    'css-flexbox-1': {
      'title': 'Flexible Box Layout Level 1',
      'property': {
        'display': ['flex', 'inline-flex'],
        'min-width': ['auto'],
        'min-height': ['auto'],
        'flex-direction': flexDirection,
        'flex-wrap': flexWrap,
        'flex-flow': flexDirection.or(flexWrap),
        'order': ['0', '1', '-1'],
        'flex': ['none'].concat(['1', '1 1'].or(flexBasis)),
        'flex-grow': ['0', '5', '0.11'],
        'flex-shrink': ['1', '10', '0', '0.11'],
        'flex-basis': flexBasis,
        'justify-content': justifyContent,
        'align-items': alignItems,
        'align-self': ['auto'].concat(alignItems),
        'align-content': ['stretch'].concat(justifyContent)
      }
    },

    'css-animations-1': {
      'title': 'Animations Level 1',
      'tr': 'http://www.w3.org/TR/css3-animations/',
      'property': {
        'animation-name': ['none', 'foo', 'foo, bar', 'none, foo, bar'],
        'animation-duration': ['0s', '1s', '100ms', '1s, 2s', '0ms, 1s, 3s'],
        'animation-timing-function': timingFunction.concat([
          'ease, linear', 'ease, ease, ease'
        ]),
        'animation-iteration-count': [
          'infinite', '8', '4.35', '1, .5', '0, 1, 2'
        ],
        'animation-direction': [
          'normal', 'reverse', 'alternate', 'alternate-reverse',
          'normal, reverse', 'normal, normal, alternate-reverse'
        ],
        'animation-play-state': [
          'running', 'paused',
          'running, paused', 'paused, paused, paused'
        ],
        'animation-delay': ['1s', '-1s', '0s, 1ms', '-10s, 0s, 10s'],
        'animation-fill-mode': [
          'none', 'forwards', 'backwards', 'both',
          'none, forwards', 'none, none, none'
        ],
        'animation': [
          'none', 'foo', '0s', '-1s', '1', 'infinite',
          'normal', 'reverse', 'alternate', 'alternate-reverse',
          'running', 'paused', 'forwards', 'backwards', 'both'
        ].concat(timingFunction).concat([
          'none 0s', 'both paused', 'none none', '1s -1s', '-1s 0s',
          'foo running', 'paused ident'
        ]).concat(['ident'].and([
          'infinite', 'normal', 'reverse', 'alternate', 'alternate-reverse',
          'none', 'forwards', 'backwards', 'both'
        ])).concat([
          'none none running', 'none -1s cubic-bezier(.5, 1.5, .5, -2.5)',
          'foo 1s 2s infinite linear alternate both',
          'none 0s ease 0s 1 normal none running',
          'none, none', '-1s, -1s', 'none 0s, both paused',
          'none 0s ease 0s 1 normal none running, ' +
            'none 0s ease 1 normal running 0s none',
          '0s, 0s, 0s'
        ])
      },
      'atrule': {
        '@keyframes': '@keyframes foo'
      },
      'ruleSelector': {
        'atrule': '@keyframes name',
        '@keyframes': ['to', 'from', '10%'].times(1, 2, ', ')
      }
    },

    'css-transforms-1': {
      'title': 'Transforms Level 1',
      'property': {
        'transform': ['none', 'matrix(1, 2, 3, 4, 5, 6)'].concat(
          ['0', '1px', '-20px'].times(
            1, 2, ', '
          ).map(function translate(length) {
            return 'translate(' + length + ')';
          }),
          ['0', '1px', '-20px'].map(function translateX(length) {
            return 'translateX(' + length + ')';
          }),
          ['0', '1px', '-20px'].map(function translateY(length) {
            return 'translateY(' + length + ')';
          }),
          ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
          angle.map(function rotate(angle) {
            return 'rotate(' + angle + ')';
          }),
          angle.times(1, 2, ', ').map(function skew(angles) {
            return 'skew(' + angles + ')';
          }),
          angle.map(function skewX(angle) {
            return 'skewX(' + angle + ')';
          }),
          angle.map(function skewY(angle) {
            return 'skewY(' + angle + ')';
          }),
          ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
          ['0', '10px', '-20px'].times(
            3, 3, ', '
          ).map(function translate3d(arg) {
            return 'translate3d(' + arg + ')';
          }),
          ['0', '1px', '-20px'].map(function translateZ(length) {
            return 'translateZ(' + length + ')';
          }),
          ['scale3d(1, 2, 3)', 'scaleZ(1)'],
          angle.map(function rotate3d(angle) {
            return 'rotate3d(1, 2, 3, ' + angle + ')';
          }),
          angle.map(function rotateX(angle) {
            return 'rotateX(' + angle + ')';
          }),
          angle.map(function rotateY(angle) {
            return 'rotateY(' + angle + ')';
          }),
          angle.map(function rotateZ(angle) {
            return 'rotateZ(' + angle + ')';
          }),
          ['0.1px', '1px'].map(function perspective(length) {
            return 'perspective(' + length + ')';
          })
        ).concat([
          'matrix(1, 2, 3, 4, 5, 6) translate(0)',
          'translate(100px, 100px) rotate(1215deg)',
          'scale(2) rotate3d(0, 0, 1, 45deg)',
          'perspective(50px) translateZ(100px)',
          'translate(80px, 80px) scale(1.5, 1.5) rotate(45deg)',
          'scale(2, -1) scaleY(2.5) matrix(1, -.2, 0, 1, 10, 10)',
          'translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)',
          'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) ' +
            'translate3d(0, 0, 10px)',
          'scale3d(1, 0, -1) rotateX(-45deg) rotateY(-45deg) rotateZ(-45deg)',
          'translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) ' +
            'scale3d(-1, 0, .5)',
          'matrix(1, 2, 3, 4, 5, 6) ' +
            'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'
        ]),
        'transform-origin': [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and(
            ['top', 'center', 'bottom', '10%', '10px']
          ).qmark(['10px']),
          ['center', 'left', 'right'].amp(
            ['center', 'top', 'bottom']
          ).qmark(['10px'])
        ).uniq().concat('-1px'),
        'transform-style': ['flat', 'preserve-3d'],
        'perspective': ['none', '10px'],
        'perspective-origin': [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and(
            ['top', 'center', 'bottom', '10%', '10px']
          ),
          ['center', 'left', 'right'].amp(['center', 'top', 'bottom'])
        ).uniq().concat('-1px'),
        'backface-visibility': ['visible', 'hidden']
      }
    },

    'css-will-change-1': {
      'title': 'Will Change Level 1',
      'property': {
        'will-change': ['auto'].concat([
          'scroll-position', 'contents', 'ident'
        ].times(1, 3, ', '))
      }
    },

    'css-grid-1': {
      'title': 'Grid Layout Level 1',
      'property': {
        'display': ['grid', 'inline-grid'],
        'grid-template-columns': trackSizing,
        'grid-template-rows': trackSizing,
        'grid-template-areas': gridTemplateAreas,
        'grid-template': gridTemplate,
        'grid-auto-columns': trackSize,
        'grid-auto-rows': trackSize,
        'grid-auto-flow': gridAutoFlow,
        'grid': gridTemplate.concat(
          gridAutoFlow,
          ['row'].and(trackSize.qmark(['auto'], ' / '))
        ).concat([
          'row dense minmax(10px, 10px) / minmax(min-content, max-content)',
          // 'rows 1fr', 'columns 1fr / auto',
          '10rem 10rem 10rem 10rem / 1fr 1fr 1fr 1fr',
          '12rem 12rem 12rem 12rem / 10rem 10rem 10rem 10rem'
        ]),
        'grid-row-start': gridLine,
        'grid-column-start': gridLine,
        'grid-row-end': gridLine,
        'grid-column-end': gridLine,
        'grid-row': gridLine.times(1, 2, ' / '),
        'grid-column': gridLine.times(1, 2, ' / '),
        'grid-area': gridLine.times(1, 2, ' / ').concat([
          'auto / auto / auto', 'auto / auto / auto / auto'
        ])
      },
      'unit': {
        'fr': [
          'grid-template-columns', 'grid-template-rows', 'grid-auto-columns',
          'grid-auto-rows', 'grid-columns', 'grid-rows'
        ]
      }
    },

    'css-variables-1': {
      'title': 'Custom Properties for Cascading Variables Level 1',
      'value': {
        'properties': ['background-color', 'var-foo'],
        'var()': [
          'var(--color)', 'var(--header-color)', 'var(--header-color, blue)',
          'calc(var(--gap) * 1px)'
        ]
      }/*,
      // '--*' must be checked by element.style.getPropertyValue('--*').
      'property': {
        '--*': ['--foo', '--FOO', '--header-color']
      }*/
    },

    'css-logical-props-1': {
      'title': 'Logical Properties Level 1',
      'property': {
        'caption-side': [
          'start', 'end', 'before', 'after'
        ].qmark(['outside'], ' ', {amp: true}),
        'clear': ['start', 'end'],
        'background-position': ['start', 'end'].qmark(['10%', '10px']).qmark(
          ['center'].concat(['top', 'bottom'].qmark(['10%', '10px'])),
          ' ',
          {amp: true}
        ),
        'float': ['start', 'end'].qmark(['contour'], ' ', {amp: true}),
        'page-break-after': logicalPage,
        'page-break-before': logicalPage,
        'measure': width,
        // for Presto
        // 'length': width,
        'min-measure': ['0', '10px', '10%'],
        'min-length': ['0', '10px', '10%'],
        'max-measure': ['none', '10px', '10%'],
        'max-length': ['none', '10px', '10%'],
        'margin-before': ['0'].concat(width),
        'margin-after': ['0'].concat(width),
        'margin-start': ['0'].concat(width),
        'margin-end': ['0'].concat(width),
        'padding-before': ['0', '10px', '10%'],
        'padding-after': ['0', '10px', '10%'],
        'padding-start': ['0', '10px', '10%'],
        'padding-end': ['0', '10px', '10%'],
        'border-before-width': lineWidth,
        'border-after-width': lineWidth,
        'border-start-width': lineWidth,
        'border-end-width': lineWidth,
        'border-before-style': lineStyle,
        'border-after-style': lineStyle,
        'border-start-style': lineStyle,
        'border-end-style': lineStyle,
        'border-before-color': ['white'],
        'border-after-color': ['white'],
        'border-start-color': ['white'],
        'border-end-color': ['white'],
        'border-before': linePosition,
        'border-after': linePosition,
        'border-start': linePosition,
        'border-end': linePosition,
        'margin': ['logical'].and(
          width.concat(['-10px', '-10%', 'fill']).times(1, 4)
        ),
        'padding': ['logical'].and(width.times(1, 4)),
        'border-color': ['logical'].and(['white'].times(1, 4)),
        'border-style': ['logical'].and(lineStyle.times(1, 4)),
        'border-width': ['logical'].and(lineWidth.times(1, 4)),
        'background-image-transform': ['physical', 'logical', 'rotate'],
        'border-image-transform': ['rotate', 'logical', 'physical']
      },
      'atrule': {
        '@page': ['@page :recto', '@page :verso']
      }
    },

    'css-shapes-1': {
      'title': 'Shapes Level 1',
      'property': {
        'shape-outside': ['none'].concat(basicShape, shapeBox, image, [
          'inset(10px) border-box', 'border-box inset(10px)',
          'content-box ellipse(10% farthest-side at bottom 10px right 10px)',
          'polygon(evenodd, 10% 10%, 10% 10%) margin-box'
        ]),
        'shape-image-threshold': alphavalue,
        'shape-margin': ['0', '1px', '10%']
      }
    },

    'css-scoping-1': {
      'title': 'Scoping Level 1',
      'selector': {
        ':scope-context()': [
          ':scope-context(.foo)', ':scope-context(div:only-child)'
        ],
        ':host': [':host', '.foo:host'],
        ':host()': [':host(.foo)', ':host(div:only-child)'],
        ':host-context()': [
          ':host-context(.foo)', ':host-context(div:only-child)'
        ],
        '::shadow': [
          '::shadow', 'x-foo::shadow > span', 'x-foo::shadow > div > span',
          'x-foo::shadow span'/*, ':host::shadow div'*/
        ],
        '::content': ['::content', '::content div', '::content > div'],
        'E /deep/ F': ['x-foo /deep/ span'],
        '::region': ['::region'/*, '#region1::region p'*/]/*,
        '::page()': ['::page(div)', 'div::page(div)']*/
      }/*,
      // It seems that @scope need CSSOM API.
      'atrule': {
        '@scope': ['@scope div']
      }*/
    },

    // CSS Level 4
    'css-images-4': {
      'title': 'Image Values and Replaced Content Level 4',
      'tr': 'http://www.w3.org/TR/css4-images/',
      'value': {
        'properties': [
          'background-image',
          'list-style-image',
          'border-image-source',
          'cursor',
          'content'
        ],
        'image()': [
          'ltr url(foo.png)', 'rtl url(foo.png)', 'ltr \'arrow.png\'',
          'ltr \'sprites.png#xywh=10,30,60,20\'', 'ltr green',
          'ltr url(../img/noise.png), url(foo.png)',
          'rtl url(arrow.png), \'foo.png\'',
          'ltr \'cat_meme.gif#frame=5\', \'lolcat.png\'',
          'rtl url("bg-image.png"), rgba(0, 0, 255, .5)',
          'ltr \'dark.png\', black',
          'rtl \'wavy.svg\', \'wavy.png\' , \'wavy.gif\''
        ].map(function imageFunc(arg) {
          return 'image(' + arg + ')';
        }),
        'image-set()': [
          'white', 'url(foo.png) 600dpi', '\'foo.png\' 600dpcm',
          'linear-gradient(white, black) 600dppx',
          'radial-gradient(white, black) 1x',
          'url(foo.png) 600dpi, \'foo.png\' 600dpcm',
          '\'foo.png\' 1x, \'foo-2x.png\' 2x, \'foo-print.png\' 600dpi',
          'url(foo.png) 600dppx, black',
          'url(foo.png) 1x, \'foo.png\' 2x, white'
        ].map(function imageSet(arg) {
          return 'image-set(' + arg + ')';
        }),
        'element()': ['element(#src)'],
        'cross-fade()': [
          'url(foo.png)', 'linear-gradient(white, black)', '10% url(foo.png)',
          'url(foo.png) 10%', 'url(foo.png), url("bar.png")',
          'url(foo.png), linear-gradient(white, black)', 'url(foo.png), black',
          '0% url(foo.png), url(arrow.png)',
          '50% url(foo.png), linear-gradient(white, black)',
          '50% url(foo.png), black',
          'linear-gradient(white, black) 100%, rgba(0, 0, 255, .5)'
        ].map(function crossFade(arg) {
          return 'cross-fade(' + arg + ')';
        }),
/*
 * <color-stop-list> = <color> && [<length>|<percentage>]{1,2}?,
 *                     [[<color> || [<length>|<percentage>]{1,2}]#, ]?
 *                     <color> && [<length>|<percentage>]{1,2}?
 */

        'linear-gradient()': [
          // '45deg'/*, '1turn', '100grad', '2rad'*/, 'to left', 'to left top'
          '45deg', 'to left', 'to left top'
        ]/*.concat(
          ['to'].and(['left', 'right'].or(['top', 'bottom']))
        )*/.qmark(
          ['10px', '10%'].and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          ).qmark(
            ['10px', '10%'].times(1, 2).concat(
              ['10px', '10%'].and(['white']),
              ['white'].amp(['10px', '10%'].times(2))
            )/*.times(1, 2, ', ')*/, ', '
          ).and(
            // [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            //   ['white'].amp(['10px', '10%'].times(2))
            // )*/, ', '
            ['white'], ', '
          ),
          ', ',
          {former: true}
        ).concat([
          'red, 10px, 10%, blue',
          'red 10px 0%, blue 10px 30%, yellow 10px 60%, green 10px 90%',
          '45deg, red, 10px, blue',
          'to left, red, 10px, blue',
          'to bottom right, white 10px 10%, 13% 10px blue, ' +
            '10px 50% red',
          'to bottom right, white 10px 10%, black, 10px, 10%, ' +
            '13% 10px blue, 50% 10px red',
          'to bottom right, white 10px 10deg, 10% 10px black, ' +
            'white 10% 10px, 10px 20% white',
          'to bottom right, currentColor 50%, #0000FF 60%, ' +
            'rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, ' +
            'lightgoldenrodyellow 90%, transparent 10px 100%'
        ]).map(function linearGradient(arg) {
          return 'linear-gradient(' + arg + ')';
        }),
        'radial-gradient()': [
          // /*'at'*/'10px', 'at left', '10px at left',
          '10px', 'at left', '10px at left',
          'ellipse 10% 20% at top 30% left 40%'
        ]/*.and(position).concat(
          ['circle'].or(['10px']).concat(
            ['ellipse'].or(['10px', '10%'].times(2)),
            ['circle', 'ellipse'].or(
              ['closest-corner', 'closest-side'].concat(
                ['farthest-corner', 'farthest-side']
              )
            )
          ).uniq().and(['at'].and(position))
        )*/.qmark(
          ['10px', '10%'].and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          ).qmark(
            ['10px', '10%'].times(1, 2).concat(
              ['10px', '10%'].and(['white']),
              ['white'].amp(['10px', '10%'].times(2))
            )/*.times(1, 2, ', ')*/, ', '
          ).and(
            // [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            //   ['white'].amp(['10px', '10%'].times(2))
            // )*/, ', '
            ['white'], ', '
          ),
          ', ',
          {former: true}
        ).concat([
          '10px, white, 10px white',
          'circle 10em, 10% white, white 10px',
          '100px circle, 10% white, black',
          'ellipse, white, 10px white',
          '10px 10%, white 10%, white 10px 10px',
          'ellipse 10% 20%, white 10% 20%, black',
          '10em 100px ellipse, white, white 10px 20%',
          'closest-corner, white 10% 10px, black 10px',
          'closest-side, 10% black, black',
          'farthest-corner, white, 10px black',
          'farthest-side, 10% white, 10px 10px white',
          'circle closest-corner, 10% 20% white, black',
          'closest-side ellipse, white, 10px 20% white',
          'at center, 10% 10px white, white 10px 10px',
          'circle at left, white 10% 20%, black',
          'ellipse at right, white, white 10px 20%',
          'closest-corner at top, white 10% 10px, white 10px 20%',
          'closest-side at bottom, white 10% 10px, black',
          'farthest-corner at 10%, white, white 10px 10px',
          'farthest-side at 10px, white 10% 20%, white 10px 20%',
          '10px at left top, white 10% 10px, black',
          'circle 10em at center 10%, white, black 10px 10px',
          '100px circle at 10px bottom, black 10% 20%, black 10px 20%',
          '10px 10% at right center, black 10% 10px, black',
          'ellipse 10% 20% at 10% 10%, white, 10px 10px white',
          '10em 100px ellipse at 10px 10px, 10% 20% white, 10px 20% white',
          'circle closest-corner at 10% 10px, 10% 10px white, black',
          'closest-side ellipse at 10px 10%, 10% white, white',
          'at bottom left, 10px white, 10% white',
          'at center top 50%, 10px white, black',
          'at right 50px center, white, 10% white',
          'at left 10px top 10%, white 10px, 10% white',
          'at bottom 50% right 50%, white 10px 10px, black',
          'red, 10px, 10%, blue',
          'red 10px 0%, blue 10px 30%, yellow 10px 60%, green 10px 90%',
          'circle, white, 10%, black',
          'ellipse, red, 10px, blue',
          'at left, red, 10px, blue',
          '10% 100px ellipse at top 10% right 10px, white 10px 10%, ' +
            '13% 10px blue, 10px 50% red',
          '10% 100px ellipse at top 10% right 10px, white 10px 10deg, ' +
            '10% 10px black, white 10% 10px, 10px 20% white',
          '10% 100px ellipse at top 10% right 10px, white, white, ' +
            'white 10px, white 10px 10px',
          '10% 100px ellipse at top 10% right 10px, white 10px 10%, black, ' +
            '10px, 10%, 13% 10px blue, 50% 10px red',
          'ellipse 10% 20% at top 30% left 40%, white, currentColor, ' +
            '#0000FF, rgba(255, 255, 0, 0.5), hsla(240, 100%, 50%, 0.5) 80%, ' +
            'lightgoldenrodyellow, transparent 100% 10px',
          '10% 100px ellipse at top 10% right 10px, currentColor 50%, ' +
            '#0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
            'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
            'transparent 10px 100%'
        ]).map(function radialGradient(arg) {
          return 'radial-gradient(' + arg + ')';
        }),
/*
 * <angular-color-stop-list> = <color> && [<angle>|<percentage>]{1,2}?,
 *                             [[<color> || [<angle>|<percentage>]{1,2}]#, ]?
 *                             <color> && [<angle>|<percentage>]{1,2}?
 */

         /*'conic-gradient()': ['at'].and(position).qmark(
          ['white'].qmark(
            ['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2),
            ' ',
            {amp: true}
          ).qmark(
            ['white'].or(
              ['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2)
            ).times(1, 2, ', '), ', '
          ).and(
            ['white'].qmark(
              ['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2),
              ' ',
              {amp: true}
            ),
            ', '
          ),
          ', ',
          {former: true}
        ).map(function conicGradient(arg) {
          return 'conic-gradient(' + arg + ')';
        }),*/
        'conic-gradient()': ['white'].qmark([
          '45deg', /*'1turn', '100grad', '2rad', */'10%'
        ].times(1, 2), ' ', {amp: true}).qmark(
          ['white'].or(
            ['45deg', /*'1turn', '100grad', '2rad', */'10%'].times(1, 2)
          )/*.times(1, 2, ', ')*/,
          ', '
        ).and(
          // ['white']/*.qmark([
          //   '45deg', '1turn', '100grad', '2rad', '10%'
          // ].times(1, 2), ' ', {amp: true})*/, ', '
          ['white'], ', '
        ).concat(
          ['at'].and(position).and(['white, black'], ', ')
        ).concat([
          'red, blue, yellow, green',
          'red 45deg 0%, blue 1turn 30%, yellow 100grad 60%, green 2rad 90%',
          'at left, red, blue, yellow',
          'at top 10% right 10px, white 45deg 10%, 13% 100grad blue, ' +
            '2rad 50% red',
          'at top 10% right 10px, white 45deg 10%, black, 1turn, 10%, ' +
            '13% 100grad blue, 50% 2rad red',
          'at top 30% left 40%, currentColor 50%, #0000FF 60%, ' +
            'rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, ' +
            'lightgoldenrodyellow 90%, transparent 100%',
          'at bottom 50% right 50%, white 0deg 10deg, 10% 10grad black, ' +
            'white 10% 10rad, 0turn 20% white'
        ]).map(function conicGradient(arg) {
          return 'conic-gradient(' + arg + ')';
        }),
        'repeating-linear-gradient()': [
          '45deg', /*'1turn', '100grad', '2rad', */'to left', 'to left top'
        ]/*.concat(
          ['to'].and(['left', 'right'].or(['top', 'bottom']))
        )*/.qmark(
          ['10px', '10%'].and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          ).qmark(
            ['10px', '10%'].times(1, 2).concat(
              ['10px', '10%'].and(['white']),
              ['white'].amp(['10px', '10%'].times(2))
            )/*.times(1, 2, ', ')*/, ', '
          ).and(
            // [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            //   ['white'].amp(['10px', '10%'].times(2))
            // )*/, ', '
            ['white'], ', '
          ),
          ', ',
          {former: true}
        ).concat([
          'red, 10px, 10%, blue',
          'red 10px 0%, blue 10px 30%, yellow 10px 60%, green 10px 90%',
          '45deg, red, 10px, blue',
          'to left, red, 10px, blue',
          'to bottom right, white 10px 10%, 13% 10px blue, ' +
            '10px 50% red',
          'to bottom right, white 10px 10%, black, 10px, 10%, ' +
            '13% 10px blue, 50% 10px red',
          'to bottom right, white 10px 10deg, 10% 10px black, ' +
            'white 10% 10px, 10px 20% white',
          'to bottom right, currentColor 50%, #0000FF 60%, ' +
            'rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, ' +
            'lightgoldenrodyellow 90%, transparent 10px 100%'
        ]).map(function repeatingLinearGradient(arg) {
          return 'repeating-linear-gradient(' + arg + ')';
        }),
        'repeating-radial-gradient()': [
          // /*'at'*/'10px', 'at left', '10px at left',
          '10px', 'at left', '10px at left',
          'ellipse 10% 20% at top 30% left 40%'
        ]/*.and(position).concat(
          ['circle'].or(['10px']).concat(
            ['ellipse'].or(['10px', '10%'].times(2)),
            ['circle', 'ellipse'].or(
              ['closest-corner', 'closest-side'].concat(
                ['farthest-corner', 'farthest-side']
              )
            )
          ).uniq().and(['at'].and(position))
        )*/.qmark(
          ['10px', '10%'].and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          ).qmark(
            ['10px', '10%'].times(1, 2).concat(
              ['10px', '10%'].and(['white']),
              ['white'].amp(['10px', '10%'].times(2))
            )/*.times(1, 2, ', ')*/, ', '
          ).and(
            // [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            //   ['white'].amp(['10px', '10%'].times(2))
            // )*/, ', '
            ['white'], ', '
          ),
          ', ',
          {former: true}
        ).concat([
          '10px, white, 10px white',
          'circle 10em, 10% white, white 10px',
          '100px circle, 10% white, black',
          'ellipse, white, 10px white',
          '10px 10%, white 10%, white 10px 10px',
          'ellipse 10% 20%, white 10% 20%, black',
          '10em 100px ellipse, white, white 10px 20%',
          'closest-corner, white 10% 10px, black 10px',
          'closest-side, 10% black, black',
          'farthest-corner, white, 10px black',
          'farthest-side, 10% white, 10px 10px white',
          'circle closest-corner, 10% 20% white, black',
          'closest-side ellipse, white, 10px 20% white',
          'at center, 10% 10px white, white 10px 10px',
          'circle at left, white 10% 20%, black',
          'ellipse at right, white, white 10px 20%',
          'closest-corner at top, white 10% 10px, white 10px 20%',
          'closest-side at bottom, white 10% 10px, black',
          'farthest-corner at 10%, white, white 10px 10px',
          'farthest-side at 10px, white 10% 20%, white 10px 20%',
          '10px at left top, white 10% 10px, black',
          'circle 10em at center 10%, white, black 10px 10px',
          '100px circle at 10px bottom, black 10% 20%, black 10px 20%',
          '10px 10% at right center, black 10% 10px, black',
          'ellipse 10% 20% at 10% 10%, white, 10px 10px white',
          '10em 100px ellipse at 10px 10px, 10% 20% white, 10px 20% white',
          'circle closest-corner at 10% 10px, 10% 10px white, black',
          'closest-side ellipse at 10px 10%, 10% white, white',
          'at bottom left, 10px white, 10% white',
          'at center top 50%, 10px white, black',
          'at right 50px center, white, 10% white',
          'at left 10px top 10%, white 10px, 10% white',
          'at bottom 50% right 50%, white 10px 10px, black',
          'red, 10px, 10%, blue',
          'red 10px 0%, blue 10px 30%, yellow 10px 60%, green 10px 90%',
          'circle, white, 10%, black',
          'ellipse, red, 10px, blue',
          'at left, red, 10px, blue',
          '10% 100px ellipse at top 10% right 10px, white 10px 10%, ' +
            '13% 10px blue, 10px 50% red',
          '10% 100px ellipse at top 10% right 10px, white 10px 10deg, ' +
            '10% 10px black, white 10% 10px, 10px 20% white',
          '10% 100px ellipse at top 10% right 10px, white, white, ' +
            'white 10px, white 10px 10px',
          '10% 100px ellipse at top 10% right 10px, white 10px 10%, black, ' +
            '10px, 10%, 13% 10px blue, 50% 10px red',
          'ellipse 10% 20% at top 30% left 40%, white, currentColor, ' +
            '#0000FF, rgba(255, 255, 0, 0.5), hsla(240, 100%, 50%, 0.5) 80%, ' +
            'lightgoldenrodyellow, transparent 100% 10px',
          '10% 100px ellipse at top 10% right 10px, currentColor 50%, ' +
            '#0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
            'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
            'transparent 10px 100%'
        ]).map(function repeatingRadialGradient(arg) {
          return 'repeating-radial-gradient(' + arg + ')';
        }),
         /*'repeating-conic-gradient()': ['at'].and(position).qmark(
          ['white'].qmark(
            ['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2),
            ' ',
            {amp: true}
          ).qmark(
            ['white'].or(
              ['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2)
            ).times(1, 2, ', '),
            ', '
          ).and(
            ['white'].qmark(
              ['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2),
              ' ',
              {amp: true}
            ),
            ', '
          ),
          ', ',
          {former: true}
        ).map(function repeatingConicGradient(arg) {
          return 'repeating-conic-gradient(' + arg + ')';
        }),*/
        'repeating-conic-gradient()': ['white'].qmark([
          '45deg', /*'1turn', '100grad', '2rad', */'10%'
        ].times(1, 2), ' ', {amp: true}).qmark(
          ['white'].or(
            ['45deg', /*'1turn', '100grad', '2rad', */'10%'].times(1, 2)
          )/*.times(1, 2, ', ')*/,
          ', '
        ).and(
          // ['white']/*.qmark([
          //   '45deg', '1turn', '100grad', '2rad', '10%'
          // ].times(1, 2), ' ', {amp: true})*/, ', '
          ['white'], ', '
        ).concat(
          ['at'].and(position).and(['white, black'], ', ')
        ).concat([
          'red, blue, yellow, green',
          'red 45deg 0%, blue 1turn 30%, yellow 100grad 60%, green 2rad 90%',
          'at left, red, blue, yellow',
          'at top 10% right 10px, white 45deg 10%, 13% 100grad blue, ' +
            '2rad 50% red',
          'at top 10% right 10px, white 45deg 10%, black, 1turn, 10%, ' +
            '13% 100grad blue, 50% 2rad red',
          'at top 30% left 40%, currentColor 50%, #0000FF 60%, ' +
            'rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, ' +
            'lightgoldenrodyellow 90%, transparent 100%',
          'at bottom 50% right 50%, white 0deg 10deg, 10% 10grad black, ' +
            'white 10% 10rad, 0turn 20% white'
        ]).map(function repeatingConicGradient(arg) {
          return 'repeating-conic-gradient(' + arg + ')';
        })
      },
      'property': {
        'image-orientation': [
          'from-image'
        ].concat(angle.qmark(['flip'], ' ', {former: true})),
        'image-rendering': ['auto', 'crisp-edges', 'pixelated']
      }
    },

    'selectors4': {
      'title': 'Selectors Level 4',
      'selector': {/*
        ':active-drop': [':active-drop'],
        ':valid-drop': [':valid-drop'],
        ':invalid-drop': [':invalid-drop'],*/
        ':matches()': [
          // fast profile
          ':matches(.example)', ':matches(div:only-child)',
          ':matches(section, article)', ':matches(:link, :visited)',
          '*|*:matches(:hover, :focus)', '*|*:matches(*:hover, *:focus)',
          ':matches(section, article, aside, nav) h1',
          ':matches(section, article, aside, nav) ' +
            ':matches(section, article, aside, nav) h1',
          // complete profile
          ':matches(div div)', ':matches(div > div)',
          ':matches(div + div)', ':matches(div ~ div)',
          ':matches(div#text.text[data-text^=\'base\']:only-child > div, main)'
        ],
        ':not()': [
          // fast profile
          ':not(div:only-child)', ':not(header, footer)',
          ':not(header, main, footer)',
          // complete profile
          ':not(div div)', ':not(div > div)',
          ':not(div + div)', ':not(div ~ div)',
          ':not(div#text.text[data-text^=\'base\']:only-child > div, main)'
        ],
        ':has()': [
          ':has(div)', 'div:has(div)', 'div:has( div)', 'a:has(> img)',
          'dt:has(+ dt)', 'div:has(~ div)',
          // 'div:has(|| div)', 'label:has(/for/ input)',
          'section:has(:not(h1, h2, h3, h4, h5, h6))',
          'div:has(div, div)', 'div:has(> div, > div)'
        ],
        '[att=val i]': ['[class=\'example\' i]', '[frame=hsides i]'],
        ':dir()': [':dir(ltr)', ':dir(rtl)'],
        ':lang()': [
          ':lang(de-*)', ':lang(*-CH)', ':lang(en, ja)', ':lang(zh, *-hant)'
        ],
        ':any-link': [':any-link'],
        ':scope': [':scope', ':scope > .example'],
        ':drop': [':drop'],
        ':drop()': [':drop()'].concat(
          ['active'].or(['valid'], ['invalid']).map(function drop(arg) {
            return ':drop(' + arg + ')';
          })
        ),
        ':current': [':current'],
        ':current()': [
          ':current(div)', ':current(div:only-child)',
          ':current(div, p)', ':current(p, li, dt, dd)'
        ],
        ':past': [':past'],
        ':future': [':future'],
        ':placeholder-shown': [':placeholder-shown'],
        ':user-error': [':user-error'],
        ':blank': [':blank'],
        ':nth-child(an+b of <selector>)': anb.map(function nthChild(nth) {
          return ':nth-child(' + nth + ' of .foo)';
        }).concat([
          ':nth-child(2n+1 of .foo, #bar)', 'li:nth-child(-n+3 of .important)',
          'tr:nth-child(even of :not([hidden]))', '*:nth-child(2 of img)'
        ]),
        ':nth-last-child(an+b of <selector>)': anb.map(
          function nthLastChild(nth) {
            return ':nth-last-child(' + nth + ' of .foo)';
          }
        ).concat([
          ':nth-last-child(2n+1 of .foo, #bar)',
          'li:nth-last-child(-n+3 of .important)',
          'tr:nth-last-child(even of :not([hidden]))',
          '*:nth-last-child(2 of img)'
        ]),
        'E || F': ['div || span', 'col.selected || td'],
        ':nth-column()': anb.map(function nthColumn(nth) {
          return ':nth-column(' + nth + ')';
        }),
        ':nth-last-column()': anb.map(function nthLastColumn(nth) {
          return ':nth-last-column(' + nth + ')';
        })/*,
        'E /attr/ F': ['label /for/ input']*/
      }
    },

    'mediaqueries4': {
      'title': 'Media Queries Level 4',
      'mediaQuery': {
        '((query))': [
          '((width) and (height))', 'speech, ((width) and (height))',
          '((width) and (height)), ((width) and (height))',
          'all and ((width) and (height))',
          '(width) and ((width) and (height))',
          '((width) and (height)) and (height)',
          '((width) and (height)) and ((width) and (height))',
          'only screen and ((width) and (height))',
          'not embossed and ((width) and (height))',
          'only screen and (width) and ((width) and (height))',
          'not aural and ((width) and (height)) and (height)'
        ],
        'not (query)': [
          'not (color-index)', 'not (width: 0)',
          'not (width: 0), not (width: 0)', 'all and not (width: 0)',
          '(width) and not (width: 0)', 'not (width: 0) and (height)',
          'not (width: 0) and not (height: 0)',
          'only screen and not (width: 0)', 'not print and not (width: 0)',
          'only screen and (width) and not (width: 0)',
          'not tv and not (width: 0) and (height)'
        ],
        'or': [
          'all or (width)', '(width) or (height)', 'only screen or (width)',
          'not print or (height)', 'only screen and (width) or (height)',
          'not tv or (width) and (height)',
          'all or (width) and (height), only print or (width), ' +
            'not screen and (height)'
        ],
        'range type': [
          '(width >= 1px)', '(height > 1px)', '(1px < height)',
          '(1px <= width)', '(height >= 1px)', '(width <= 10000000em)',
          '(aspect-ratio > 1/1000000)', 'not print and (width = 1px)',
          'not print and (color > 0)', 'not print and (color >= 8)',
          'not print and (color-index >= 1)', 'not print and (monochrome >= 2)',
          '(resolution >= 1dppx)',
          '(1px < width < 100000px)', '(100000px >= height >= 1px)',
          '(1/1000000 <= aspect-ratio < 1000000/1)',
          '(0 < device-width < 1000000px)',
          '(0 < device-height < 1000000px)',
          '(1/1 < device-aspect-ratio < 1000000/1)'
        ],
        'general enclosed': [
          'url()', 'url(example.css)', 'url(example.css color.css)',
          'url(), url()', 'all and url()', '(width) and url()',
          'url() and (height)', 'url() and url()', 'only screen and url()',
          'not print and url()', 'only screen and (width) and url()',
          'not tv and url() and (height)'
        ],
        'update-frequency': [
          '(update-frequency)',
          '(update-frequency: none)', '(update-frequency: slow)',
          '(update-frequency: normal)'
        ],
        'overflow-block': [
          '(overflow-block)',
          '(overflow-block: none)', '(overflow-block: scroll)',
          '(overflow-block: optional-paged)', '(overflow-block: paged)'
        ],
        'overflow-inline': [
          '(overflow-inline)',
          '(overflow-inline: none)', '(overflow-inline: scroll)'
        ],
        'pointer': [
          '(pointer)', '(pointer: none)', '(pointer: coarse)', '(pointer: fine)'
        ],
        'hover': [
          '(hover)', '(hover: none)', '(hover: on-demand)', '(hover: hover)'
        ],
        'any-pointer': [
          '(any-pointer)',
          '(any-pointer: none)', '(any-pointer: coarse)', '(any-pointer: fine)'
        ],
        'any-hover': [
          '(any-hover)',
          '(any-hover: none)', '(any-hover: on-demand)', '(any-hover: hover)'
        ],
        'light-level': [
          '(light-level)',
          '(light-level: dim)', '(light-level: normal)', '(light-level: washed)'
        ],
        'scripting': [
          '(scripting)',
          'not all and (scripting: none)', '(scripting: initial-only)',
          '(scripting: enabled)'
        ]
      }/*,
      // Custom Media Queries must be checked CSSOM API.
      'atrule': {
        '@custom-media': ['@custom-media --narrow-window (max-width: 30em)']
      }*/
    },

    'css-color-4': {
      'title': 'Color Level 4',
      'value': {
        'properties': [
          'color',
          'background-color',
          'border-color',
          'text-decoration-color',
          'column-rule-color'
        ],
        'rgb()': [
          'rgb(1.1, 0, 0)', 'rgb(1.1, 1.2, 0)', 'rgb(1.1, 1.2, 1.3)'
        ],
        'rgba()': [
          'rgba(1.1, 0, 0, 1)', 'rgba(1.1, 1.2, 0, 1)',
          'rgba(1.1, 1.2, 1.3, 1)', 'rgba(0, 0, 0, 10%)',
          'rgba(0, 0, 100%, 80%)'
        ],
        '<hex-color> 8 digits': ['#0000ffcc'],
        '<hex-color> 4 digits': ['#0000'],
        'rebeccapurple': ['rebeccapurple'],
        'hsl()': angle.concat(namedHue).map(function hsl(newHue) {
          return 'hsl(' + newHue + ', 0%, 0%)';
        }),
        'hsla()': angle.concat(namedHue).and([
          '0%, 0%, 0.99', '100%, 50%, 100%'
        ], ', ').map(function hsla(arg) {
          return 'hsla(' + arg + ')';
        }).concat(['hsla(120, 100%, 50%, 100%)']),
        'hwb()': hue.and([
          '10%, 10%', '10%, 10%, 1.0', '10%, 10%, 100%'
        ], ', ').map(function hwb(arg) {
          return 'hwb(' + arg + ')';
        }),
        'gray()': number.concat([
          '10%'
        ]).qmark(['1.0', '100%'], ', ').map(function gray(arg) {
          return 'gray(' + arg + ')';
        }),
        'device-cmyk()': ['1.0', '10%'].times(4, 4, ', ').qmark(
          ['1.0', '100%'], ', '
        ).qmark(['white'], ', ').concat([
          '0, 81%, 81%, 30%'
        ]).map(function deviceCmyk(arg) {
          return 'device-cmyk(' + arg + ')';
        }),
        'color()': ['white'].concat(hue).concat(['white', '1.0'].and([
          ['red', 'green', 'blue', 'alpha', 'a'].map(
            function getFuncList(funcName) {
              return ['+', '-'].qmark([
                '1.0', '10%'
              ], ' ', {former: true}).concat([
                '* 10%'
              ]).map(function addFuncName(arg) {
                return funcName + '(' + arg + ')';
              });
            }
          ).flatten(),
          ['+', '-'].and(
            ['1.0', '10%'].times(3).concat(['#004400'])
          ).concat(['* 10%']).map(function rgb(arg) {
            return 'rgb(' + arg + ')';
          }),
          ['hue', 'h'].map(function getFuncList(funcName) {
            return ['+', '-', '*'].qmark(
              angle, ' ', {former: true}
            ).map(function addFuncName(arg) {
              return funcName + '(' + arg + ')';
            });
          }).flatten(),
          ['saturation', 's', 'lightness', 'l'].concat([
            'whiteness', 'w', 'blackness', 'b'
          ]).map(function getFuncList(funcName) {
            return ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function addFuncName(arg) {
              return funcName + '(' + arg + ')';
            });
          }).flatten(),
          ['tint(10%)', 'shade(10%)'],
          ['blend', 'blenda'].map(function getFuncList(funcName) {
            return ['white', '10%'].qmark(
              ['rgb', 'hsl', 'hwb']
            ).map(function addFuncName(arg) {
              return funcName + '(' + arg + ')';
            });
          }).flatten(),
          ['contrast()', 'contrast(10%)']
        ].flatten())).map(function color(arg) {
          return 'color(' + arg + ')';
        }).concat([
          'color(white red(1) red(1))', 'color(red s(- 10%) s(- 10%))',
          'color(blue w(+ 20%) s(+ 20%))'
        ])
      },
      'property': {
        'opacity': percentage,
        'color-correction': ['auto', 'sRGB'],
        'color-adjust': ['economy', 'exact']
      }
    },

    'css-backgrounds-4': {
      'title': 'Backgrounds and Borders Level 4',
      'property': {
        'corner-shape': ['round', 'bevel', 'scoop', 'notch'].times(1, 4),
        'corners': ['round', 'bevel', 'scoop', 'notch'].times(1, 4).concat(
          ['10px', '10%'].times(1, 4).times(1, 2, ' / ')
        ).concat([
          'bevel 50%', 'bevel 0.25em 0.25em 0 0 / 50% 50% 0 0',
          'round bevel notch scoop 10% 10px 10% 10px / 10px 10% 10% 10%'
        ]),
        'border-limit': [/*'round', */'all'].concat(
          ['sides', 'corners'].qmark(['10px', '10%']),
          ['top', 'right', 'bottom', 'left'].and(['10px', '10%'])
        ),/*
        'border-parts': [
          'sides 50%', 'corners', 'left 4em', 'corners 10px', 'corners 30%'
        ],
        'border-shape': ['scoop'],*/
        'border-clip': borderClip,
        'border-clip-top': borderClip,
        'border-clip-right': borderClip,
        'border-clip-bottom': borderClip,
        'border-clip-left': borderClip/*,
        'border-top-parts': [
          'repeat(10px 10px)', 'repeat(10px 10px) 1fr',
          '40px 20px 0 1fr repeat(20px 20px) 0 1fr 40px',
          '40px 20px 0 1fr 20px 20px 0 1fr 40px'
        ],
        'backround-position': ['start', 'end'],
        'background-repeat': ['extend'],
        'border-image': ['10', '30%'].times(1, 4).concat(
          ['10', '30%'].times(1, 4).amp(['fill'])
        ).and([' / '])*/
      }
    },

    // CSS-SVG Effects
    'compositing-1': {
      'title': 'Compositing and Blending Level 1',
      'dev': 'http://dev.w3.org/fxtf/compositing-1/',
      'property': {
        'mix-blend-mode': blendMode,
        'isolation': ['auto', 'isolate'],
        'background-blend-mode': blendMode.concat(['normal, multiply'])
      }
    },

    'filters': {
      'title': 'Filter Effects Level 1',
      'tr': 'http://www.w3.org/TR/filter-effects/',
      'dev': 'http://dev.w3.org/fxtf/filters/',
      'property': {
        'filter': ['none'].concat([
          'blur(0px)', 'brightness(1)', 'brightness(15%)',
          'contrast(1)', 'contrast(1%)'
        ]).concat(
          ['10px'].times(2, 3).qmark(
            ['white']
          ).map(function dropShadow(shadow) {
            return 'drop-shadow(' + shadow + ')';
          })
        ).concat([
          'grayscale(0)', 'grayscale(1)', 'grayscale(100%)',
          'hue-rotate(0deg)', 'hue-rotate(1turn)', 'hue-rotate(100grad)',
          'hue-rotate(2rad)', 'invert(0)', 'invert(100)', 'invert(0%)',
          'opacity(1)', 'opacity(25%)', 'saturate(1)', 'saturate(50%)',
          'sepia(0)', 'sepia(50)', 'sepia(10%)'
        ]).concat(
          image.concat(['"foo.png"']).map(function filter(shadow) {
            return 'filter(' + shadow + ', blur(0px))';
          }),
          ['url(commonmasks.svg#filter)', 'url(foo.png)'],
          ['blur(0px)', 'url(commonmasks.svg#filter)'].times(2)
        ),
        'flood-color': [
          'black', 'currentColor',
          'black icc-color(white, 1)', '#ffffff icc-color(white, 1, 2)'
        ],
        'flood-opacity': ['1', '10%'],
        'color-interpolation-filters': ['auto', 'linearRGB', 'sRGB'],
        'lighting-color': [
          'white', 'currentColor',
          'black icc-color(white, 1)', '#ffffff icc-color(white, 1, 2)'
        ]
      }
    },

    'css-masking-1': {
      'title': 'Masking Level 1',
      'dev': 'http://dev.w3.org/fxtf/css-masking-1/',
      'property': {
        'clip-path': [
          'none', 'url("#clip1")', 'url(commonmasks.xml#mask)'
        ].concat(basicShape, geometryBox).concat(
          'inset(10px) border-box', 'padding-box inset(10px)',
          'content-box ellipse(10% farthest-side at bottom 10px right 10px)',
          'polygon(evenodd, 10% 10%, 10% 10%) margin-box',
          'inset(10px) fill-box', 'inset(10px) stroke-box',
          'inset(10px) view-box'
        ),
        'clip-rule': fillRule,
        'mask-image': ['none'].concat(
          image,
          'linear-gradient(black 0%, transparent 100%)', 'url(#mask)',
          'url(resources.svg#mask2)'
        ).times(1, 2, ', ').concat('none, none, none'),
        'mask-mode': [
          'auto', 'alpha', 'luminance'
        ].times(1, 2, ', ').concat('auto, auto, auto'),
        'mask-repeat': repeatStyle.times(1, 2, ', ').concat(
          'repeat, repeat, repeat'
        ),
        'mask-position': position.concat('left, left', 'left, left, left'),
        'mask-clip': geometryBox.concat('no-clip').times(1, 2, ', ').concat(
          'border-box, border-box, border-box'
        ),
        'mask-origin': geometryBox.times(1, 2, ', ').concat(
          'border-box, border-box, border-box'
        ),
        'mask-size': bgSize.times(1, 2, ', ').concat('auto, auto, auto'),
        'mask-composite': [
          'add', 'subtract', 'intersect', 'exclude'
        ].times(1, 3, ', '),
        'mask': ['none'].concat(
          image, 'url(#mask)', 'url(resources.svg#mask2)'
        ).qmark(['auto', 'alpha', 'luminance']).concat(
          position.qmark(width.concat(
            ['cover', 'contain', '10px 10px']
          ), ' / '),
          repeatStyle,
          geometryBox.concat('no-clip'),
          ['add', 'subtract', 'intersect', 'exclude']
        ).concat([
          'none center', 'padding-box space', 'no-repeat none',
          'none left repeat-x border-box border-box',
          'none left repeat-x border-box border-box add',
          'none left / auto repeat-x border-box border-box add',
          'none auto left / auto repeat-x border-box border-box add',
          'url(tl.png) alpha left / auto repeat-x border-box border-box add',
          'linear-gradient(white, black) luminance bottom 10px right 10px' +
            ' / 10px 10% repeat space fill-box no-clip exclude',
          'none, none', 'none, none, none'
        ]),
        'mask-border-source': ['none'].concat(image),
        'mask-border-mode': ['alpha', 'luminance'],
        'mask-border-slice': ['1', '10%'].times(1, 4).qmark(['fill']),
        'mask-border-width': width.concat(['1']).times(1, 4),
        'mask-border-outset': ['10px', '1'].times(1, 4),
        'mask-border-repeat': [
          'stretch', 'repeat', 'round', 'space'
        ].times(1, 2),
        'mask-border': ['none'].concat(
          image,
          ['1', '10%'].times(1, 4).qmark(['fill']).qmark(
            ['1', '1 / 1', '/ 1'], ' / '
          ),
          ['1'].and(width.concat(['1']).times(1, 4), ' / ').qmark(['1'], ' / '),
          ['1 / 1', '1 /'].and(['10px', '1'].times(1, 4), ' / '),
          ['stretch', 'repeat', 'round', 'space'].times(1, 2),
          ['alpha', 'luminance']
        ).concat([
          '30% 30% / / 10px 10px', '10 fill / / 1 10px',
          '30% 10 30% / / 10px 10px 10px', '30% 30% 30% 30% fill / / 1 1 1 1',
          '10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px',
          'none 100%', '100% none', 'stretch 100%', 'none stretch',
          'none 100% stretch', 'none 100% stretch alpha',
          'none 100% / 1 stretch', 'none 100% / / 0 stretch',
          'none 100% / 1 / 0 stretch', 'none 100% / 1 / 0 stretch alpha',
          'none 100% fill / 1 / 0 stretch',
          'none 100% fill / 1 / 0 stretch alpha',
          'url(foo.png) 10', 'url(foo.png) 10%', 'url(foo.png) 10% fill',
          'url(foo.png) 10 round', 'url(foo.png) 10 stretch repeat',
          'url(foo.png) 10 / 10px', 'url(foo.png) 10 / 10% / 10px',
          'url(foo.png) 10 fill / 10% / 10px',
          'url(foo.png) 10 fill / 10% / 10px repeat',
          'url(foo.png) 10 fill / 10% / 10px repeat alpha',
          'url(tl.png) 10 30% 10 30% fill / 1 10px 10% auto / ' +
            '10 5px 1px 10px repeat round luminance'
        ]),
        'mask-type': ['luminance', 'alpha']
      }
    },

    'motion-1': {
      'title': 'Motion Path Level 1',
      'dev': 'http://dev.w3.org/fxtf/motion-1/',
      'property': {
        'motion-path': ['none'].concat(
          basicShape, ['path("string")', 'url(foo.png)']
        ),
        'motion-position': ['0', '10px', '-10px', '10%', '-10%'],
        'motion-rotation': ['auto'].concat(['auto', 'reverse'].amp(angle)),
        'motion': ['none 0 auto 90deg', '10% 1turn reverse path("string")']
      }
    },

    'web-animations': {
      'title': 'Web Animations',
      'dev': 'http://w3c.github.io/web-animations/',
      'property': {
        // http://w3c.github.io/web-animations/#typedef-step-timing-function
        'transition-timing-function': ['step-middle', 'steps(1, middle)'],
        'transition': ['none step-middle', 'steps(1, middle)'],
        'animation-timing-function': ['step-middle', 'steps(1, middle)'],
        'animation': ['ident step-middle', 'steps(1, middle)']
      }
    },

    // SVG
    'svg2': {
      'title': 'Scalable Vector Graphics 2',
      'tr': 'http://www.w3.org/TR/SVG2/',
      'dev': 'https://svgwg.org/svg2-draft/',
      // https://svgwg.org/svg2-draft/propidx.html
      'property': {
        'shape-inside': ['none'], // old
        'shape-outside': [
          '10px', '10%'
        ].times(4, 6, ', ').map(function rectangle(arg) {
          return 'rectangle(' + arg + ')';
        }), // old
        'shape-margin': ['25'], // syntax definition not found
        'shape-padding': ['25'], // syntax definition not found
        'writing-mode': ['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb'],
        'glyph-orientation-vertical': [
          'auto', '0deg', '1deg', '90grad', '180rad', '270turn',
          '0', '1', '90', '180', '270'
        ],
        'glyph-orientation-horizontal': [
          '0deg', '1deg', '90grad', '180rad', '270turn',
          '0', '1', '90', '180', '270'
        ],
        'alignment-baseline': ['auto'],
        'text-anchor': ['start', 'middle', 'end'],
        'font-stretch': ['wider', 'narrower'],
        'fill': ['none'].concat(image).concat([
          'url(#Triangle)', 'icc-color(ident, 1)',
          'context-fill', 'context-stroke'
        ]).concat(
          position,
          ['left'].and(bgSize, ' / '),
          repeatStyle,
          shapeBox.concat(['fill', 'stroke', 'view-box']).times(1, 2),
          ['white']
        ).concat([
          'none center', 'padding-box space', 'no-repeat none',
          'none left repeat-x border-box border-box',
          'none left / auto repeat-x border-box border-box',
          'none center left / auto repeat-x border-box border-box',
          'url(tl.png) center left / auto repeat-x border-box border-box',
          'linear-gradient(white, black) bottom 10px right 10px' +
            ' / 10px 10% repeat space fill margin-box',
          'context-stroke bottom 10px right 10px' +
            ' / 10px 10% repeat space stroke view-box white',
          'none, none', 'none, none, none'
        ]),
        'fill-rule': fillRule,
        'fill-opacity': ['1', '0.5', '0'],
        'stroke': ['none'].concat(image).concat([
          'url(#Triangle)', 'icc-color(ident, 1)',
          'context-fill', 'context-stroke'
        ]).concat(
          position,
          ['left'].and(bgSize, ' / '),
          repeatStyle,
          shapeBox.concat(['fill', 'stroke', 'view-box']).times(1, 2),
          ['white']
        ).concat([
          'none center', 'padding-box space', 'no-repeat none',
          'none left repeat-x border-box border-box',
          'none left / auto repeat-x border-box border-box',
          'none center left / auto repeat-x border-box border-box',
          'url(tl.png) center left / auto repeat-x border-box border-box',
          'linear-gradient(white, black) bottom 10px right 10px' +
            ' / 10px 10% repeat space fill margin-box',
          'context-stroke bottom 10px right 10px' +
            ' / 10px 10% repeat space stroke view-box white',
          'none, none', 'none, none, none'
        ]),
        'stroke-opacity': ['1', '0.5', '0'],
        'stroke-width': ['1', '10%', '10px'],
        'stroke-linecap': ['butt', 'round', 'square'],
        'stroke-linejoin': ['miter', 'round', 'bevel', 'arcs'],
        'stroke-miterlimit': ['4', '0.5', '0'],
        'stroke-dasharray': ['none'].concat(['10px', '10%'].times(1, 3, ', ')),
        'stroke-dashoffset': ['0', '10px', '10%'],
        'vector-effect': ['none', 'non-scaling-stroke'],
        'marker-start': [
          'none', 'url(#Triangle)', 'child',
          'select(img)', 'select(mask:last-of-type)',
          'select(img, mask)', 'select(img, mask:last-of-type)'
        ],
        'marker-mid': [
          'none', 'url(#Triangle)', 'child',
          'select(img)', 'select(mask:last-of-type)',
          'select(img, mask)', 'select(img, mask:last-of-type)'
        ],
        'marker-end': [
          'none', 'url(#Triangle)', 'child',
          'select(img)', 'select(mask:last-of-type)',
          'select(img, mask)', 'select(img, mask:last-of-type)'
        ],
        'marker-segment': [
          'none', 'url(#Triangle)', 'child',
          'select(img)', 'select(mask:last-of-type)',
          'select(img, mask)', 'select(img, mask:last-of-type)'
        ],
        'marker-pattern': [
          'none', '10px', '10%', 'url(#Triangle)', 'child',
          'select(img)', 'select(mask:last-of-type)',
          'select(img, mask)', 'select(img, mask:last-of-type)',
          'none 10px', '40 url(#DoubleDash) 40 url(#SingleDash)'
        ],
        'marker': [
          'none', 'url(#Triangle)', 'child',
          'select(img)', 'select(mask:last-of-type)',
          'select(img, mask)', 'select(img, mask:last-of-type)', '10px', '10%'
        ].concat(
          ['none', 'url(#Triangle)', 'child', 'select(img)'].times(2, 4)
        ).concat(['none', 'none url(#Triangle) none url(#Triangle)'].and([
          'none', '10px', '10%', 'url(#Triangle)', 'child', 'select(img)',
          'select(mask:last-of-type)', 'select(img, mask)',
          'select(img, mask:last-of-type)', 'none 10px'
        ], ' / ')).concat(
          ['none', 'url(#Triangle)', 'child', 'select(img)'].times(1, 4).and(
            ['10px', '10%']
          )
        ).concat(['10px', '10%'].and([
          'none', '10px', '10%', 'url(#Triangle)', 'child', 'select(img)',
          'select(mask:last-of-type)', 'select(img, mask)',
          'select(img, mask:last-of-type)', 'none 10px'
        ])).concat([
          'none url(#Triangle) none url(#Triangle) 10px none url(#Triangle)'
        ]),
        'marker-knockout-left': ['0', '10px', '10%'].concat(
          ['10px', '10%'].qmark(['inverted']).and(
            ['circle', 'rectangle', 'triangle']
          ).concat(
            ['10px', '10%'].times(2, 2).qmark(['inverted']).and(
              ['ellipse', 'rectangle', 'triangle']
            )
          ).qmark(['at'].and(['10px', '10%']))
        ),
        'marker-knockout-right': ['0', '10px', '10%'].concat(
          ['10px', '10%'].qmark(['inverted']).and(
            ['circle', 'rectangle', 'triangle']
          ).concat(
            ['10px', '10%'].times(2, 2).qmark(['inverted']).and(
              ['ellipse', 'rectangle', 'triangle']
            )
          ).qmark(['at'].and(['10px', '10%']))
        ),
        'paint-order': ['normal'].concat(['fill'].or(['stroke'], ['markers'])),
        'color-interpolation': ['sRGB', 'auto', 'linearRGB'],
        'color-rendering': ['auto', 'optimizeSpeed', 'optimizeQuality'],
        'shape-rendering': [
          'auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision'
        ],
        'text-rendering': [
          'auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision'
        ],
        'image-rendering': ['optimizeQuality', 'optimizeSpeed'],
        'buffered-rendering': ['auto', 'dynamic', 'static'],
        'solid-color': ['currentColor', 'black', 'white icc-color(ident, 1)'],
        'solid-opacity': ['1', '0.0', '0.5'],
        'stop-color': ['currentColor', 'black', 'white icc-color(ident, 1)'],
        'stop-opacity': ['1', '0.0', '0.5'],
        'pointer-events': [
          'visiblePainted', 'bounding-box', 'visibleFill', 'visibleStroke',
          'visible', 'painted', 'fill', 'stroke', 'all', 'none'
        ],
        'display': ['marker'], // syntax definition not found
        'enable-background': ['accumulate', 'new'] // old
      },
      'atrule': {
        '@color-profile': '@color-profile'
      },
      'descriptor': {
        'src': [
          'sRGB', 'local(red)',
          'http://example.com/someDrawing.svg',
          'http://example.com/someDrawing.svg#Lamppost',
          '(local(red) http://example.com/someDrawing.svg)',
          '(local(red) http://example.com/someDrawing.svg#Lamppost)',
          'url(http://swatches.example.com/Foo)'
        ],
        'name': ['FooColors'],
        'rendering-intent': [
          'auto', 'perceptual', 'relative-colorimetric', 'saturation',
          'absolute-colorimetric'
        ]
      }
    },

    // WHAT
    'html': {
      'title': 'HTML',
      'dev': 'http://www.whatwg.org/specs/web-apps/current-work/multipage/',
      'property': {
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#anchor-points
        'anchor-point': ['none'].concat(position)
      }
    },

    'fullscreen': {
      'title': 'Fullscreen API',
      'dev': 'http://fullscreen.spec.whatwg.org/',
      'selector': {
        '::backdrop': '::backdrop',
        ':fullscreen': ':fullscreen'
      }
    },

    // Web Components
    'custom-elements': {
      'title': 'Custom Elements',
      'dev': 'http://w3c.github.io/webcomponents/spec/custom/',
      'selector': {
        ':unresolved': ':unresolved'
      }
    },

    // Extra
    'pointerevents': {
      'title': 'Pointer Events',
      'dev': 'https://dvcs.w3.org/hg/pointerevents/raw-file/tip/' +
        'pointerEvents.html',
      'property': {
        'touch-action': ['auto', 'none', 'manipulation'].concat(
          ['pan-x'].or(['pan-y'])
        )
      }
    },

    'webvtt': {
      'title': 'WebVTT',
      'dev': 'http://dev.w3.org/html5/webvtt/',
      'selector': {
        '::cue': '::cue',
        // Presto crashes.
        /*'::cue()': [
          '::cue(#\\31)', '::cue(#transcript\\ credit)',
          '::cue(v[voice="Esme"])', '::cue(v[voice="Mary"])',
          '::cue(i)', '::cue(.loud)',
          '::cue(c)', '::cue(b)', '::cue(u)', '::cue(ruby)', '::cue(rt)',
          '::cue(v)', '::cue(lang)', '::cue(*)', '::cue(v[voice])',
          '::cue(lang[lang])', '::cue(lang[lang="ja"])', '::cue(:lang(en))',
          '::cue(v#track.loud[voice="John"]:lang(en))'
        ],*/
        '::cue-region': '::cue-region'
      }
    }
  };
}());
