/* jshint onevar: false, maxstatements: false */

(function executeSpecs(win) {
  'use strict';

  // data types
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
  var basicShape = [].concat(
    ['10px', '10%'].times(1, 4).map(function inset(arg) {
      return 'inset(' + arg + ')';
    }),
    [
      'inset(10px 10px 10px 10px round ' +
        '10px 10px 10px 10px / 10px 10px 10px 10px)'
    ],
    ['10px', '10%', 'closest-side', 'farthest-side'].concat(
      ['at'].and(position),
      ['10px', '10%', 'closest-side', 'farthest-side'].and(
        ['at'].and(['left', 'bottom 10px right 10px'])
      )
    ).map(function circle(arg) {
      return 'circle(' + arg + ')';
    }),
    ['10px', '10%', 'closest-side', 'farthest-side'].times(2).concat(
      ['at'].and(position),
      ['10px', '10%', 'closest-side', 'farthest-side'].times(2).and(
        ['at'].and(['left', 'bottom 10px right 10px'])
      )
    ).map(function ellipse(arg) {
      return 'ellipse(' + arg + ')';
    }),
    fillRule.qmark(
      ['10px', '10%'].times(2).times(1, 2, ', '), ', ', {former: true}
    ).map(function polygon(arg) {
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
  var justifyContent2 = ['auto', 'baseline'].concat(
    alignPosition.concat(
      itemPosition.and(contentPosition)
    ).qmark(overflowPosition, ' ', {amp: true}),
    flexPosition.amp(overflowPosition)
  );
  var justifySelf = ['auto'].concat(
    crossPosition,
    itemPosition.qmark(overflowPosition, ' ', {amp: true})
  );
  var alignSelf = alignPosition.concat(itemPosition.amp(overflowPosition));
  var trackBreadth = ['10px', '10%', '1fr', 'min-content', 'max-content'];
  var trackSize = trackBreadth.times(2, 2, ', ').map(function minmax(arg) {
    return 'minmax(' + arg + ')';
  }).concat(['auto'], trackBreadth);
  var lineNames = [/*'()', */'(a)', '(a b)'];
  var repeatFunction = lineNames.qmark(trackSize, ' ', {
    former: true
  // })/*.times(1, 2)*/.qmark(lineNames).concat([
  }).qmark(lineNames).concat([
    '250px 10px 1px', '1fr auto minmax(30%, 1fr)', '(content) 250px 10px',
    '250px 10px (content)', '(content) 10px (repeat)', '250px 10px 5px 1px',
    '(content) 250px 10px 1px', '250px 10px 1px (repeat)',
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
    '(a) 50px (b) 320px (b c d) repeat(2, (e) 40px) repeat(4, 0px) 50px'
  ]);
  var trackSizing = ['none'].concat(
    trackList,
    ['subgrid'].qmark(lineNames.concat(lineNames.map(function repeat(arg) {
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
  var gridAutoFlow = ['none'].concat(
    ['row', 'column'].qmark(['dense'], ' ', {amp: true})
  );
  var gridLine = ['auto'].concat(
    ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
  );
  var borderClip = ['normal'].concat(
    ['10px', '10%', '1fr'].times(1, 3)
  ).concat([
    '0 10px 1fr 10px',
    '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr'
  ]);
  var symbol = ['"string"'].concat(image, ['ident']);
  var symbolsType = ['cyclic', 'numeric', 'alphabetic', 'symbolic', 'fixed'];
  var overflowFragment = [
    'paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls', 'fragments'
  ];
  var colWidth = ['*', 'fit-content'];
  var colWidths = colWidth.concat(
    colWidth.concat(['minmax(1px, 1px)']).amp(trackBreadth, ', ').concat(
      colWidth.concat(['minmax(1px, 1px)']).times(2, 2, ', ')
    ).map(function minmax(arg) {
      return 'minmax(' + arg + ')';
    })
  );
  var colWidthPlus = colWidths.concat(
    colWidth.amp(trackBreadth).concat(colWidth.times(2, 2))
  ).concat([
    '* * * *', '* * * * *', '* a-line * * b-line * *',
    '* 1em * 1em * 1em * 1em * 1em *'//,
    // '* repeat(1em *, 5)', '* (1em *)[5]', '* 5//1em *//'
  ]);
  var fullColWidth = trackBreadth.concat(colWidth).concat(
    trackBreadth.concat(
      colWidth, ['minmax(1px, 1px)']
    ).times(2, 2, ', ').map(function minmax(arg) {
      return 'minmax(' + arg + ')';
    })
  );
  var gridTemplate2 = fullColWidth.and(['"a"']).concat(
    ['"a"'].and(colWidths)
  ).concat([
    '10px 10px "a"', '"a" 10px 10px', '10px "a" 10px',
    '"a" "b" 10px', '10px "a" "b"', '"a" 10px "b"',
    '10px 10px "a" 10px "b" 10px'
  ]).concat(
    ['/'].and(fullColWidth),
    colWidth.concat(['minmax(*, 1px)']).times(2, 2, ' / ')
  ).concat([
    '* * / * *', '* 10em / 4em 5em', '10em * "a   b"', '* * 3em  "a b c"',
    '"." "*" fit-content', '* 10em "a b c" "a b d" 4em',
    '* min-content * "a a a" ". b ."',
    '1fr "a @ b" "c c c"', 'auto * 10em " a a . " " b . c "',
    '"a . b" * "a c ." *', '"a c" "a b" auto *',
    '5em 1em * 1em 10em "a . b . c" 2em ". . . . ." ' +
      '1em "d . e . f" ". . . . ." 1em "g . h . i" 2em',
    '* 1em * 1em * "c . d . e" ". . . . ." 1em ". . f . ."',
    '* 2em * 2em * "a . b . c"', '"a" 5em "@" * "b" auto',
    // '"a" 5em "*" "b" intrinsic',
    '* 3em * 3em * 3em * 3em * "A A A A A A A A A" 5cm ' +
      '". . . . . . . . ." 0.25cm "B . C C C C C C C" * ' +
      '"B . C C C C C C C" * "B . C C C C C C C" * ' +
      '"B . C C C C C C C" * "B . C C C C C C C" * ' +
      '"B . D D D D D D D" * "B . D D D D D D D" * ' +
      '"B . E E E . F F F" * "B . E E E . F F F" * ' +
      '"B . E E E . F F F" *'
  ]);

  win.NCFTest.Specs = {
    // CSS Level 3
    'selectors3': {
      'title': 'Selectors',
      'tr': 'http://www.w3.org/TR/css3-selectors/',
      'selectors': {
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
      'values': {
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
        'hsla()': 'hsla(0, 0%, 0%, .5)',
        'transparent': 'transparent',
        'currentColor': 'currentColor'
      },
      'properties': {
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
      'Media queries': {
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
          '(max-aspect-ratio: 1000000/1)',
        ],
        'device-aspect-ratio': [
          '(device-aspect-ratio)',
          'not print and (device-aspect-ratio: 1/1)',
          '(min-device-aspect-ratio: 1/1000000)',
          '(min-device-aspect-ratio: 1 / 1000000)',
          '(max-device-aspect-ratio: 1000000/1)',
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
      '@rules': {
        '@supports': [
          // check syntax parsing, not check supporting these as a feature.
          // see http://dev.w3.org/csswg/css-conditional-3/#supports_rule
          '@supports (width: 1px)', '@supports ((width: 1px))',
          '@supports (width: 1px !important)',
          '@supports (javascript: @return)',
          '@supports url(foo.png)', '@supports (1px)', '@supports (@media)',
          '@supports (~=)', '@supports (|=)', '@supports (:)',
          '@supports (url(foo.png))', '@supports ({;})',
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
      'tr': 'http://www.w3.org/TR/css3-cascade/',
      'values': {
        'properties': [
          'width',
          'height'
        ],
        'unset': 'unset'
      },
      'properties': {
        'all': ['unset']
      }
    },

    'css-backgrounds-3': {
      'title': 'Backgrounds and Borders',
      'tr': 'http://www.w3.org/TR/css3-background/',
      'properties': {
        'background-image': ['linear-gradient(white, black)'].concat(
          ['none', 'url(foo.png)', 'linear-gradient(white, black)'].times(
            2, 2, ', '
          ),
          ['none, url(foo.png), linear-gradient(white, black)']
        ),
        'background-repeat': repeatStyle.times(
          1, 2, ', '
        ).filter(function removeCSS2Value(val) {
          return [
            'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
          ].indexOf(val) === -1;
        }).concat(
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
        'background-clip': box.times(1, 2, ', ').concat(box),
        'background-origin': box.times(1, 2, ', ').concat(box),
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
      'properties': {
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
      '@rules': {
        '@font-face': '@font-face',
        '@font-feature-values': '@font-feature-values Jupiter Sans'
      },
      // WebKit/Blink has 'src' and 'unicode-range' as a property too.
      'descriptors': {
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
      'tr': 'http://www.w3.org/TR/css3-values/',
      'values': {
        'properties': [
          'top',
          'bottom',
          'left',
          'right',
          // 'width',
          // 'height',
          // 'max-width',
          // 'max-height',
          // 'min-width',
          // 'min-height',
          'margin',
          // 'padding',
          // 'font-size',
          // 'line-height',
          'background-position',
          'text-indent',
          'vertical-align'
        ],
        'initial': 'initial',
        'calc()': [
          /*'calc(1)', 'calc(0)', 'calc(-1)', 'calc(+1)', 'calc(1.1)',*/
          'calc(1px)', 'calc(0px)', 'calc(-1px)', 'calc(+1px)', 'calc(1.1px)',
          'calc(1%)', 'calc(0%)', 'calc(-1%)', 'calc(+1%)', 'calc(1.1%)',
          'calc(1px + 2px)', 'calc(5px - 10px)', 'calc(5px * 2)',
          'calc(5px / 2)', 'calc(100%/3 - 2*1em - 2*1px)',
          'calc(1ch * 2)', 'calc(1rem * 2)', 'calc(1vw * 2)', 'calc(1vh * 2)',
          'calc(1vmin * 2)', 'calc(1vmax * 2)'
          /*, 'calc(attr(data-px) * 2)'*/
        ],
        'toggle()': ['toggle(1px, 2px)', 'toggle(1px, 2px, 3px)'],
        'attr()': [
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
        })
      },
      'units': {
        'ch': ['width', 'height'],
        'rem': ['width', 'height'],
        'vw': ['width', 'height'],
        'vh': ['width', 'height'],
        'vmin': ['width', 'height'],
        'vmax': ['width', 'height'],
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
      'properties': {
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
      'selectors': {
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
      'tr': 'http://www.w3.org/TR/css3-text/',
      'properties': {
        'text-transform': ['full-width'],
        'tab-size': ['8', '1em'],
        'line-break': ['auto', 'loose', 'normal', 'strict'],
        'word-break': ['normal', 'keep-all', 'break-all'],
        'hyphens': ['manual', 'none', 'auto'],
        'word-wrap': ['normal', 'break-word'],
        'overflow-wrap': ['normal', 'break-word'],
        'text-align': ['start', 'end', 'match-parent', 'start end'],
        'text-align-last': [
          'auto', 'start', 'end', 'left', 'right', 'center', 'justify'
        ],
        'text-justify': ['auto', 'none', 'inter-word', 'distribute'],
        'word-spacing': ['10%', '-10%'],
        'text-indent': ['1em', '1%'].amp(['hanging'].or(['each-line'])),
        'hanging-punctuation': ['none'].concat(
          ['first'].or(['force-end', 'allow-end'], ['last'])
        )
      }
    },

    'css-text-decor-3': {
      'title': 'Text Decoration',
      'properties': {
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
      'properties': {
        'size': ['auto', '4in', '8.5in 11in'].concat([
          'A5', 'A4', 'A3', 'B5', 'B4', 'letter', 'legal', 'ledger'
        ].or(['portrait', ' landscape'])),
        'marks': ['none'].concat(['crop'].or(['cross'])),
        'bleed': ['auto', '6pt'],
        'page': ['auto', 'rotated', 'narrow', 'main', 'index', 'funky']
      },
      '@rules': {
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
      'tr': 'http://www.w3.org/TR/css3-writing-modes/',
      'properties': {
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
      'values': {
        'properties': [
          'background-image',
          'list-style-image',
          'border-image-source',
          // 'cursor',
          'content',
          'background',
          'border-image',
          'list-style'/*,
          'shape-outside',
          'mask-image',
          'mask',
          'mask-box-source',
          'mask-box'*/
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
      'properties': {
        'object-fit': ['fill', 'contain', 'cover', 'none', 'scale-down'],
        'object-position': position,
        'image-resolution': ['from-image'].or(
          ['300dpi', '1dpcm', '1dppx']
        ).qmark(['snap'], ' ', {amp: true}),
        'image-orientation': angle
      }
    },

    'css-lists-3': {
      'title': 'Lists and Counters',
      'tr': 'http://www.w3.org/TR/css3-lists/',
      'properties': {
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
      'selectors': {
        '::marker': '::marker'
      }
    },

    'css-inline-3': {
      'title': 'Line Layout',
      'tr': 'http://www.w3.org/TR/css3-linebox/',
      'properties': {
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
          'auto', 'use-script', 'no-change', 'reset-size', 'alphabetic',
          'hanging', 'ideographic', 'mathematical', 'central', 'middle',
          'text-after-edge', 'text-before-edge'
        ],
        'alignment-baseline': [
          'baseline', 'use-script', 'before-edge', 'text-before-edge',
          'after-edge', 'text-after-edge', 'central', 'middle', 'ideographic',
          'alphabetic', 'hanging', 'mathematical'
        ],
        'alignment-adjust': [
          'auto', 'baseline', 'before-edge', 'text-before-edge', 'middle',
          'central', 'after-edge', 'text-after-edge', 'ideographic',
          'alphabetic', 'hanging', 'mathematical', '0%', '10%', '0cm', '10px'
        ],
        'baseline-shift': [
          'baseline', 'sub', 'super', '0%', '10%', '0cm', '10px'
        ],
        'vertical-align': ['auto', 'central'],
        'inline-box-align': ['last', 'initial', '1'],
        'drop-initial-value': ['initial', '1'],
        'drop-initial-size': width.concat(['1']),
        'drop-initial-after-align': [
          'baseline', 'use-script', 'before-edge', 'text-before-edge',
          'after-edge', 'text-after-edge', 'central', 'middle', 'ideographic',
          'alphabetic', 'hanging', 'mathematical'
        ],
        'drop-initial-after-adjust': [
          'text-after-edge', 'central', 'middle', 'after-edge', 'ideographic',
          'alphabetic', 'mathematical', '0%', '10%', '0cm', '10px'
        ],
        'drop-initial-before-align': [
          'caps-height', 'baseline', 'use-script', 'before-edge',
          'text-before-edge', 'after-edge', 'text-after-edge', 'central',
          'middle', 'ideographic', 'alphabetic', 'hanging', 'mathematical'
        ],
        'drop-initial-before-adjust': [
          'text-before-edge', 'before-edge', 'central', 'middle', 'hanging',
          'mathematical', '0%', '10%', '0cm', '10px'
        ]
      }
    },

    'css-box-3': {
      'title': 'Basic Box Model',
      'tr': 'http://www.w3.org/TR/css3-box/',
      'properties': {
        'display': [
          'run-in', 'compact', 'ruby-base-group', 'ruby-text-group', 'container'
        ],
        'padding': width.times(1, 4).filter(function filter(val) {
          return val.indexOf('auto') !== -1;
        }),
        'padding-top': 'auto',
        'padding-right': 'auto',
        'padding-bottom': 'auto',
        'padding-left': 'auto',
        'margin-top': 'fill',
        'margin-right': 'fill',
        'margin-bottom': 'fill',
        'margin-left': 'fill',
        'margin': width.concat([
          'fill'
        ]).times(1, 4).filter(function filter(val) {
          return val.indexOf('fill') !== -1;
        }),
        'width': ['1px', '1%'].amp(['border-box', 'content-box']).concat([
          'available', 'min-content', 'max-content', 'fit-content'
        ]),
        'height': ['1px', '1%'].amp(['border-box', 'content-box']).concat([
          'available', 'min-content', 'max-content', 'fit-content', 'complex'
        ]),
        'min-width': ['1px', '1%'].amp(['border-box', 'content-box']).concat([
          'available', 'min-content', 'max-content', 'fit-content'
        ]),
        'min-height': ['1px', '1%'].amp(['border-box', 'content-box']).concat([
          'available', 'min-content', 'max-content', 'fit-content'
        ]),
        'max-width': ['1px', '1%'].amp(['border-box', 'content-box']).concat([
          'available', 'min-content', 'max-content', 'fit-content'
        ]),
        'max-height': ['1px', '1%'].amp(['border-box', 'content-box']).concat([
          'available', 'min-content', 'max-content', 'fit-content'
        ]),
        'float': [
          'left', 'right', 'top', 'bottom', 'start', 'end', 'none',
          'top-corner', 'bottom-corner', 'snap'
        ].concat(
          ['top', 'bottom', 'top-corner', 'bottom-corner'].amp(
            ['next-page', 'next-column', 'unless-room', 'left', 'right']
          ),
          ['inside', 'outside'],
          ['intrude'].amp(
            ['left', 'right', 'top', 'bottom', 'top-corner', 'bottom-corner']
          )
        ).qmark(['contour'], ' ', {amp: true}).filter(function filter(val) {
          return !this[val];
        }, {left: true, right: true, none: true}),
        'clear-after': [
          'none', 'left', 'right', 'top', 'bottom', 'inside', 'outside',
          'start', 'end', 'both', 'descendants'
        ],
        'overflow-x': [
          'visible', 'hidden', 'scroll', 'auto', 'no-display', 'no-content'
        ],
        'overflow-y': [
          'visible', 'hidden', 'scroll', 'auto', 'no-display', 'no-content'
        ],
        'overflow': ['no-display', 'no-content'].concat([
          'visible', 'hidden', 'scroll', 'auto', 'no-display', 'no-content'
        ].times(2)),
        'alignment': ['top', 'right', 'bottom', 'left', 'center'],
        'child-align': ['auto', 'top', 'middle', 'bottom', 'left', 'right'],
        'float-displace': ['line', 'indent', 'block', 'block-within-page'],
        'indent-edge-reset': [
          'none', 'margin-edge', 'border-edge', 'padding-edge', 'content-edge'
        ]
      }
    },

    'css-position-3': {
      'title': 'Positioned Layout',
      'tr': 'http://www.w3.org/TR/css3-positioning/',
      'properties': {
        'position': ['sticky', 'center', 'page'],
        'offset-before': width,
        'offset-end': width,
        'offset-after': width,
        'offset-start': width
      }
    },

    'css-align-3': {
      'title': 'Box Alignment',
      'tr': 'http://www.w3.org/TR/css3-align/',
      'properties': {
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

    'css-break-3': {
      'title': 'Fragmentation',
      'tr': 'http://www.w3.org/TR/css3-break/',
      'properties': {
        'break-before': ['any', 'recto', 'verso'],
        'break-after': ['any', 'recto', 'verso'],
        'box-decoration-break': ['slice', 'clone']
      }
    },

    'css-overflow-3': {
      'title': 'Overflow',
      'properties': {
        'overflow-x': overflowFragment,
        'overflow-y': overflowFragment,
        'overflow': overflowFragment,
        // 'break': ['regions'],
        'max-lines': ['none', '1']
      },
      'selectors': {
        '::nth-fragment()': ['::nth-fragment(1)', 'div::nth-fragment(1)']
      }
    },

    'css-gcpm-3': {
      'title': 'Generated Content for Paged Media',
      'tr': 'http://www.w3.org/TR/css3-gcpm/',
      'properties': {
        'string-set': ['none'].concat(['header'].and([
          '\'foo\'',
          'counter(par-num, upper-roman)',
          'counters(par-num, upper-roman, disc)',
          'content()', 'content(text)', 'content(before)', 'content(after)',
          'content(first-letter)', 'attr(title)'
        ])).concat([
          'header content(before) content(text)',
          'header "Chapter " counter(chapter) content()',
          'header "Chapter " counter(header) ": " content()',
          'index \'foo\' attr(title) ' +
            'counter(par-num, upper-roman) ' +
            'counters(par-num, upper-roman, disc) ' +
            'content() content(text) content(before) content(after) ' +
            'content(first-letter)',
          'index content(first-letter), entry content()',
          'index content(first-letter), term content(text)',
          'title content(), header content(before), index content(after)'
        ]),
        'content': ['term'].qmark([
          'first', 'start', 'last', 'first-except'
        ], ', ').map(function string(arg) {
          return 'string(' + arg + ')';
        }).concat(
          ['header'].qmark(
            ['first', 'start', 'last', 'first-except'], ', '
          ).map(function element(arg) {
            return 'element(' + arg + ')';
          }),
          ['dotted', 'solid', 'space', '", "'].map(function leader(arg) {
            return 'leader(' + arg + ')';
          })
        ).concat([
          'target-counter(attr(href url), page)',
          'target-counter(attr(href url), page, decimal)',
          'target-counters(attr(href url), section, ".")',
          'target-counters(attr(href url), section, ".", decimal)'
        ]).concat(
          ['attr(href url)'].qmark(
            ['content', 'before', 'after', 'first-letter'], ', '
          ).map(function targetText(arg) {
            return 'target-text(' + arg + ')';
          })
        ).concat([
          '"first: " string(heading, first)',
          'counter(footnote, symbols(\'*\', \'†\', \'‡\', \'§\'))',
          'counter(footnote, symbols(\'*\', \'†\', \'‡\', \'§\')) \'. \'',
          'leader(\'.\') target-counter(attr(href url), page)',
          '", in the chapter entitled " target-text(attr(href url))'
        ]),
        'position': ['running(header)'],
        'running': ['none', 'ident', 'chapter'],
        'float': ['footnote'],
        'footnote-display': ['block', 'inline', 'compact'],
        'footnote-policy': ['auto', 'line', 'block'],
        'bookmark-level': ['none', '1'],
        'bookmark-label': ['none'].concat([
          '\'foo\'',
          'counter(par-num, upper-roman)',
          'counters(par-num, upper-roman, disc)',
          'content()', 'content(text)', 'content(before)', 'content(after)',
          'content(first-letter)', 'attr(title)',
          'content(before) content(text)',
          '"Chapter " counter(chapter) content()',
          '"Chapter " counter(header) ": " content()',
          '\'foo\' attr(title) ' +
            'counter(par-num, upper-roman) ' +
            'counters(par-num, upper-roman, disc) ' +
            'content() content(text) content(before) content(after) ' +
            'content(first-letter)'
        ]),
        'bookmark-state': ['open', 'closed']
      },
      'selectors': {
        '::footnote-call': ['::footnote-call'],
        '::footnote-marker': ['::footnote-marker', '::footnote-marker::after']
      },
      '@rules': {
        '@footnote': ['@footnote'],
        '@page': anb.map(function atPageNth(nth) {
          return '@page :nth(' + nth + ')';
        }).concat([
          '@page :nth(5 of A)', '@page :nth(1n+1 of B)', '@page :nth(odd of C)',
          '@page:nth(3 of body)'
        ])
      }
    },

    'css-sizing-3': {
      'title': 'Intrinsic & Extrinsic Sizing',
      'tr': 'http://www.w3.org/TR/css3-sizing/',
      'properties': {
        'width': ['fill', 'repudiate-floats'],
        'min-width': ['fill', 'repudiate-floats', 'contain-floats'],
        'max-width': ['fill', 'repudiate-floats'],
        'height': ['fill', 'repudiate-floats'],
        'min-height': ['fill', 'repudiate-floats', 'contain-floats'],
        'max-height': ['fill', 'repudiate-floats'],
        'column-width': ['fill', 'max-content', 'min-content', 'fit-content']
      }
    },

    'css-counter-styles-3': {
      'title': 'Counter Styles',
      'values': {
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
      },
      '@rules': {
        '@counter-style': '@counter-style circled-lower-latin'
      },
      'descriptors': {
        'atrule': '@counter-style circled-lower-latin',
        'atruleName': '@counter-style',
        'system': symbolsType.concat([
          'additive', 'fixed 1', 'override triangle'
        ]),
        'negative': symbol.times(1, 2),
        'prefix': symbol,
        'suffix': symbol,
        'range': ['auto'].concat(['1', 'infinite'].times(2).times(1, 2, ', ')),
        'pad': ['0'].amp(symbol),
        'fallback': [
          'decimal', 'decimal-leading-zero', 'cjk-decimal', 'lower-roman',
          'upper-roman', 'armenian', 'georgian', 'hebrew',
          'lower-alpha', 'lower-latin', 'upper-alpha', 'upper-latin',
          'lower-greek', 'hiragana', 'hiragana-iroha',
          'katakana', 'katakana-iroha',
          'disc', 'circle', 'square', 'disclosure-open', 'disclosure-closed',
          'japanese-informal', 'japanese-formal',
          'korean-hangul-formal', 'korean-hanja-informal',
          'korean-hanja-formal', 'simp-chinese-informal', 'simp-chinese-formal',
          'trad-chinese-informal', 'trad-chinese-formal', 'cjk-ideographic',
          'ethiopic-numeric'
        ],
        'symbols': symbol.times(1, 2).concat([
          '‣', '◰ ◳ ◲ ◱', '* ⁑ † ‡',
          'A B C D E F G H I J K L M \nN O P Q R S T U V W X Y Z',
          '\'0\' \'1\' \'2\' \'3\' \'4\' \'5\' \'6\' \'7\' \'8\' \'9\'',
          'ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ',
          '\'1\' linear-gradient(white, black) あ'
        ]),
        'additive-symbols': ['0'].amp(symbol).concat([
          '3 \'a\', 2 \'b\'', '6 ⚅, 5 ⚄, 4 ⚃, 3 ⚂, 2 ⚁, 1 ⚀',
          '\'0\' 0, 1 radial-gradient(white, black), 2 A'
        ]),
        'speak-as': ['auto', 'numeric', 'alphabetic', 'bullet', 'triangle']
      }
    },

    'css-display-3': {
      'title': 'Display',
      'properties': {
        'display-inside': ['auto', 'block', 'table', 'flex', 'grid', 'ruby'],
        'display-outside': [
          'inline-level', 'block-level', 'none', 'table-row-group',
          'table-header-group', 'table-footer-group', 'table-row', 'table-cell',
          'table-column-group', 'table-column', 'table-caption',
          'ruby-base', 'ruby-text', 'ruby-base-container',
          'ruby-text-container', 'run-in'
        ],
        'display-extras': ['none', 'list-item'],
        'display': [
          'auto', 'block-level', 'inline-level', 'auto inline-level',
          'none none', 'auto inline-level none'
        ],
        'display-box': ['normal', 'none', 'contents']
      }
    },

    // Unmaintained CSS Level 3
    'css3-tables': {
      'title': 'Tables',
      'properties': {
        'tab-position': ['0', '10px', '10%'],
        'tab-align': [
          'none ', 'left', 'top', 'center', 'right', 'bottom', '\'foo\''
        ],
        'tab-leaders': ['\'\'', '\'foo\''],
        'tab-leaders-alignment': ['aligned', 'centered', 'distributed'],
        'tab': ['10px', '10%'].or([
          'none ', 'left', 'top', 'center', 'right', 'bottom', '\'foo\''
        ]).concat(
          ['10px', '10%'].or(
            ['none ', 'left', 'top', 'center', 'right', 'bottom', '\'foo\'']
          ).and(
            ['\'foo\''].or(['aligned', 'centered', 'distributed']), ' / '
          )
        ),
        'caption-side': ['left', 'right', 'before', 'after'].concat(
          ['top', 'bottom', 'left', 'right', 'before', 'after'].amp(['outside'])
        ),
        'table-column-span': ['auto', 'attr(colspan)'],
        'table-row-span': ['auto', 'attr(rowspan)'],
        'table-baseline': '1',
        'speak-header': ['once', 'always']
      }
    },

    'css-content-3': {
      'title': 'Generated Content',
      'tr': 'http://www.w3.org/TR/css3-content/',
      'properties': {
        'string-set': ['title contents', 'chapter contents'],
        'page-policy': ['start', 'first', 'last'],
        'content': [
          'inhibit', 'pending(insert)', 'contents', 'footnote', 'endnote',
          'section-note', 'list-item', 'box', 'check', 'circle', 'diamond',
          'disc', 'hyphen', 'square', 'date()', 'time()', 'document-url',
          /*'<target>',*/
          'url(foo.png), none', 'icon, none', 'icon, icon',
          'url(foo.png), string(name)', 'url(foo.png), pending(footnote)',
          'url(foo.png), url(foo.png)',
          'attr(href, url), attr(alt)', 'attr(href, url), contents',
          'url(foo.png), url(foo.png), none',
          'url(header/mng), url(header/png), none',
          'url(logo.mov), url(logo.mng), url(logo.png), none',
          '\'[\' counter(footnote) \']\' contents',
          'counter(footnote) \'. \' contents'
        ],
        'move-to': ['insert']
      },
      'selectors': {
        '::line-marker': ['::line-marker'],
        '::alternate': [
          '::alternate'/*, 'span::alternate',
          'span::alternate::before', 'span::after::alternate'*/
        ]
      },
      '@rules': {
        '@counter-styles': ['@counter-styles'],
        '@string': ['@string chapter'],
        '@counter': ['@counter', '@counter footnote']
      },
      'descriptors': {
        'atrule': '@counter-styles',
        'footnote': ['super-decimal']
      }
    },

    'css3-marquee': {
      'title': 'Marquee',
      'properties': {
        'overflow-style': ['auto', 'marquee-line', 'marquee-block'],
        'marquee-style': ['scroll', 'slide', 'alternate'],
        'marquee-play-count': ['1', '0', 'infinite'],
        'marquee-direction': ['forward', 'reverse'],
        'marquee-speed': ['normal', 'slow', 'fast ']
      }
    },

    'css3-hyperlinks': {
      'title': 'Hyperlink Presentation',
      'properties': {
        'target-name': ['current', 'root', 'parent', 'new', 'modal', '\'foo\''],
        'target-new': ['window', 'tab', 'none'],
        'target-position': ['above', 'behind', 'front', 'back'],
        'target': [
          'current', 'root', 'parent', 'new', 'modal', '\'foo\''
        ].concat(
          ['window', 'tab', 'none'],
          ['above', 'behind', 'front', 'back'],
          ['current', 'root', 'parent', 'new', 'modal', '\'foo\''].and(
            ['window', 'tab', 'none']
          ),
          ['current', 'root', 'parent', 'new', 'modal', '\'foo\''].and(
            ['above', 'behind', 'front', 'back']
          ),
          ['window', 'tab', 'none'].and(
            ['current', 'root', 'parent', 'new', 'modal', '\'foo\'']
          ),
          ['window', 'tab', 'none'].and(
            ['above', 'behind', 'front', 'back']
          ),
          ['above', 'behind', 'front', 'back'].and(
            ['current', 'root', 'parent', 'new', 'modal', '\'foo\'']
          ),
          ['above', 'behind', 'front', 'back'].and(['window', 'tab', 'none']),
          ['current window above', 'behind tab root']
        )
      }
    },

    // CSS Level 3? New CSS Level 1?
    'css-namespaces-1': {
      'title': 'Namespaces',
      'tr': 'http://www.w3.org/TR/css3-namespace/',
      '@rules': {
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

    'css-page-template-1': {
      'title': 'Pagination Templates',
      'properties': {
        'overflow-style': [
          'paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls'
        ],
        'template-set': ['one', 'one two']
      },
      '@rules': {
        '@template': ['@template paged-display', '@template side-by-side:first']
      },
      'descriptors': {
        'atrule': '@template paged-display',
        'atruleName': '@template',
        'required-flow': ['related-flow', 'lead-flow']
      }
    },

    // CSS Level 3?
    'css-containment': {
      'title': 'Containment',
      'properties': {
        'contain': ['none', 'strict']
      }
    },

    'css-page-floats': {
      'title': 'Page Floats',
      'properties': {
        'float': ['10px'].times(1, 2).qmark([
          'top', 'bottom', 'near'
        ], ', ').map(function snap(arg) {
          return 'snap(' + arg + ')';
        }),
        'column-span': ['1', 'page'],
        // 'float-reference': ['multicol'],
        'float-defer-column': ['none', '1', '-1', 'last'],
        'float-defer-page': ['none', '1', '-1', 'last'],
        'clear': ['top', 'bottom', 'column', 'page'],
        'float-wrap': ['none', 'wrap'/*, 'intrude'*/],
        'float-offset': ['0', '5px', '0 0', '2em 3em', '50%', '-50% 3em'],
        'clear-side': ['auto', 'both', 'none', 'left', 'right'],
        'background-exclude-level': alphavalue,
        'exclude-level': alphavalue,
        // 'exclude-margin': width,
        'content-inside': [
          'circle(50%, 50%, 30%)',
          'polygon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)'
        ],
        'content-outside': [
          'circle(50%, 50%, 30%)',
          'polygon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)'
        ]
      },
      'selectors': {
        '::column()': [
          '::column(1)',
          'div.chapter::column(3)',
          'div.chapter::column(3+)', 'div.chapter::column(2, 2)',
          'div.chapter::column(*, 2)', 'div.chapter::column(1, *)'
        ],
        '::region()': [
          '::region(1)',
          'div.chapter::region(3)', 'div.chapter::region(2n)',
          'div.chapter::region(3+)', 'div.chapter::region(2, 2)',
          'div.chapter::region(*, 2)', 'div.chapter::region(1, *)',
          'article::region(1-3)'
        ]
      }
    },

    'selectors-nonelement': {
      'title': 'Non-element Selectors',
      'selectors': {
        '::attr()': ['::attr(title)', 'abbr::attr(title)']
      }
    },

    'css-module': {
      'title': 'Template',
      'properties': {
        'display-inside': ['text', 'inline-inside', 'block-inside', 'icon']
      }
    },

    // New CSS Level 1~3
    'css-transitions-1': {
      'title': 'Transitions',
      'tr': 'http://www.w3.org/TR/css3-transitions/',
      'properties': {
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

    'css-animations-1': {
      'title': 'Animations',
      'tr': 'http://www.w3.org/TR/css3-animations/',
      'properties': {
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
      '@rules': {
        '@keyframes': '@keyframes foo'
      },
      '@rule selectors': {
        'atrule': '@keyframes name',
        '@keyframes': ['to', 'from', '10%'].times(1, 2, ', ')
      }
    },

    'css-multicol-1': {
      'title': 'Multi-column Layout',
      'tr': 'http://www.w3.org/TR/css3-multicol/',
      'properties': {
        'column-width': ['10em', 'auto'],
        'column-count': ['2', 'auto'],
        'columns': [
          '100px', '3', '10em 2', 'auto 2', '10em auto', 'auto auto', '2 10em',
          'auto 10em', '2 auto'
        ],
        'column-gap': ['1em', 'normal'],
        'column-rule-color': 'red',
        'column-rule-style': [
          'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove',
          'ridge', 'inset', 'outset'
        ],
        'column-rule-width': ['1px', 'thin', 'medium', 'thick'],
        'column-rule': [
          'medium', 'none', 'red', 'transparent',
          'medium none', 'none medium', 'medium red', 'none red',
          'red medium', 'red none', 'medium transparent', 'none transparent',
          'transparent medium', 'transparent none',
          '1px solid black', 'thin outset blue', 'thick yellow hidden',
          'dashed white medium', 'dotted 10em purple', 'green double thin',
          'black thick groove', 'transparent ridge medium',
          'transparent thin inset'
        ],
        'break-before': [
          'auto', 'always', 'avoid', 'left', 'right', 'page', 'column',
          'avoid-page', 'avoid-column'
        ],
        'break-after': [
          'auto', 'always', 'avoid', 'left', 'right', 'page', 'column',
          'avoid-page', 'avoid-column'
        ],
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
        'column-span': ['none', 'all'],
        'column-fill': ['auto', 'balance']
      }
    },

    'css-device-adapt-1': {
      'title': 'Device Adaptation',
      'tr': 'http://www.w3.org/TR/css-device-adapt/',
      '@rules': {
        '@viewport': '@viewport'
      },
      'descriptors': {
        'atrule': '@viewport',
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

    'cssom-view-1': {
      'title': 'CSSOM View',
      'tr': 'http://www.w3.org/TR/cssom-view/',
      'properties': {
        'scroll-behavior': ['instant', 'smooth']
      }
    },

    'css-template-1': {
      'title': 'Grid Template Layout',
      'tr': 'http://www.w3.org/TR/css3-layout/',
      'properties': {
        'grid-template-areas': [
          '\'*\'', '"* *" "* *"', '\'****\' \'****\' \'****\''
        ],
        'grid-template-columns': colWidthPlus,
        'grid-template-rows': colWidthPlus,
        'grid-template': gridTemplate2,
        'grid': gridTemplate2,
        'flow': ['auto', 'p1', '\'initial\'', '*', 'same'/*, 'a, b, c'*/],
        'chains': [
          'none', 'a', 'b c', 'top-half bottom-half',
          'd, e', 'f g, h i', 'j, k l', 'm n, o p',
          '@ a b c d e, f g h i j k', '* a b c',
          '* a b c d e f g', 'a b c d e f'
        ]/*,
        'break-content': ['▶ continued on p. " targetcounter(???, page)'],
        'position': ['@', 'f', 'grid'],
        'top': ['1fr'],
        'left': ['1fr'],
        'width': ['1fr'],
        'height': ['1fr'],
        'display': ['inline-block "abc" "abd"'],
        'break-before': ['page(news)'],
        'next': ['news-even'],
        'grid-area': ['2 2', '1 -1', 'next same'],
        'block-align': [
          'top', 'bottom', 'middle', 'baseline', '10%', '10px', 'center'
        ],
        'margin': ['any'],
        'grid-slot-align': [
          'top', 'bottom', 'middle', 'baseline', '10%', '10px', 'center'
        ]*/
      },
      'selectors': {
        '::slot()': [
          '::slot(running-header)', 'P::slot(*)', 'body::slot(a)', '::slot(a) P'
        ],
        '::blank()': ['::blank(a)', 'body::blank(a)']/*,
        '::flow()': ['::flow(a)', 'P::flow(a)'],
        '::region()': [
          'P::region(slot(c))', 'EM::region(first-line)', 'P::region(slot c)',
          'em::region(div::first-line)'
        ],
        '::part()': ['::part(first-line)', 'EM::part(first-line)'],
        '::inside()': ['::inside(first-line)', 'EM::inside(first-line)'],
        '::overlap()': ['::overlap(first-line)', 'EM::overlap(first-line)']*/
      },
      '@rules': {
        '@region': [
          '@region ::slot(*)', '@region ::slot(b)', '@region BODY::slot(b)',
          '@region ::first-line', '@region div::first-line',
          '@region ul.menu.nav::slot(a)'
        ]/*,
        '@footnote': ['@footnote :first::slot(a)'],
        '@page': ['@page :first::slot(a)', '@page::slot(g)']*/
      }/*,
      'units': {
        'gr': ['width', 'top', 'right', 'bottom', 'left']
      }*/
    },

    'css-speech-1': {
      'title': 'Speech',
      'tr': 'http://www.w3.org/TR/css3-speech/',
      'properties': {
        'voice-volume': ['silent'].concat(
          ['x-soft', 'soft', 'medium', 'loud', 'x-loud'].or(
            ['-6dB', '0', '6db']
          )
        ),
        'voice-balance': [
          'center', '-100', '0', '1.1', '100', 'left', 'right', 'leftwards',
          'rightwards'
        ],
        'speak': 'auto',
        'speak-as': [
          'normal', 'spell-out', 'digits', 'literal-punctuation',
          'no-punctuation',
          'spell-out digits', 'spell-out literal-punctuation',
          'spell-out no-punctuation', 'digits spell-out',
          'digits literal-punctuation', 'digits no-punctuation',
          'literal-punctuation spell-out', 'literal-punctuation digits',
          'no-punctuation spell-out', 'no-punctuation digits',
          'spell-out digits literal-punctuation',
          'spell-out digits no-punctuation',
          'spell-out literal-punctuation digits',
          'spell-out no-punctuation digits',
          'digits spell-out literal-punctuation',
          'digits spell-out no-punctuation',
          'digits literal-punctuation spell-out',
          'digits no-punctuation spell-out',
          'literal-punctuation spell-out digits',
          'literal-punctuation digits spell-out',
          'no-punctuation spell-out digits', 'no-punctuation digits spell-out'
        ],
        'pause-before': [
          'none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'
        ],
        'pause-after': [
          'none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'
        ],
        'pause': [
          'none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'
        ].times(1, 2).concat(
          ['20ms'].amp(
            ['none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong']
          )
        ),
        'rest-before': [
          'none', '+3s', '250ms', 'x-weak', 'weak', 'medium', 'strong',
          'x-strong'
        ],
        'rest-after': [
          'none', '+3s', '250ms', 'x-weak', 'weak', 'medium', 'strong',
          'x-strong'
        ],
        'rest': [
          'none', '+3s', '250ms', 'x-weak', 'weak', 'medium', 'strong',
          'x-strong'
        ].times(1, 2),
        'cue-before': [
          'url(\'bell.aiff\') -6dB', 'url(\'dong.wav\') 0',
          'url(\'pop.au\') 6db'
        ],
        'cue-after': [
          'url(/audio/bell.aiff) -6dB', 'url(../clips-1/pop.au) 0',
          'url(./audio/caution.wav) 6db'
        ],
        'cue': [
          'url(/audio/bell.aiff) -6dB', 'url(../clips-1/pop.au) 0',
          'url(./audio/caution.wav) 6db'
        ].times(
          1, 2
        ).concat(['none', '-6dB', '0', '6db', 'url(../clips-2/pop.au)'].amp([
          'url(\'bell.aiff\') -6dB', 'url(\'dong.wav\') 0',
          'url(\'pop.au\') 6db'
        ])),
        'voice-family': ['neutral', 'preserve'].concat(
          ['child', 'young', 'old'].and(['male', 'female', 'neutral']),
          ['male', 'female', 'neutral'].and(['1']),
          ['child', 'young', 'old'].and(
            ['male', 'female', 'neutral']
          ).and(['1'])
        ).concat([
          'comedian, neutral', 'male, preserve', 'female, child male',
          'romeo, young male 1', 'young female, juliet', 'child male, male 1',
          'young male 1, young female 2', 'male, female, preserve'
        ]),
        'voice-rate': [
          'normal', 'x-slow', 'slow', 'medium', 'fast', 'x-fast'
        ].or(['0', '100%']),
        'voice-pitch': [
          '250Hz', '+250Hz', '-20Hz', '.2kHz'
        ].amp(
          ['absolute']
        ).concat(['x-low', 'low', 'medium', 'high', 'x-high'].or([
          '0', '250Hz', '+250Hz', '-20Hz', '.2kHz',
          '-3.5st', '3.5st', '100%', '-100%'
        ])),
        'voice-range': [
          '250Hz', '+250Hz', '-20Hz', '.2kHz'
        ].amp(
          ['absolute']
        ).concat(['x-low', 'low', 'medium', 'high', 'x-high'].or([
          '0', '250Hz', '+250Hz', '-20Hz', '.2kHz',
          '-3.5st', '3.5st', '100%', '-100%'
        ])),
        'voice-stress': ['normal', 'strong', 'moderate', 'none', 'reduced'],
        'voice-duration': ['auto', '+3s', '250ms']
      }
    },

    'css-color-correction-1': {
      'title': 'Color Correction',
      'properties': {
        'color-correction': ['default', 'sRGB']
      }
    },

    // Unmaintained CSS Level 1~3
    'css-preslev-1': {
      'title': 'Presentation Levels',
      'tr': 'http://www.w3.org/TR/css3-preslev',
      'dev': 'http://dev.w3.org/csswg/css-preslev-1/Overview.src.html',
      'properties': {
        'presentation-level': ['0', '1', 'same', 'increment']
      },
      'selectors': {
        ':below-level': [':below-level'],
        ':at-level': [':at-level'],
        ':above-level': [':above-level']
      }
    },

    // New CSS Level 1
    'css-flexbox-1': {
      'title': 'Flexible Box Layout Level 1',
      'tr': 'http://www.w3.org/TR/css3-flexbox/',
      'properties': {
        'display': ['flex', 'inline-flex'],
        // 'min-width': ['auto'],
        // 'min-height': ['auto'],
        'flex-direction': flexDirection,
        'flex-wrap': flexWrap,
        'flex-flow': flexDirection.or(flexWrap),
        'order': ['0', '1', '-1'],
        'flex': ['none'].concat(['1', '1 1'].or(width)),
        'flex-grow': ['0', '5', '0.11'],
        'flex-shrink': ['1', '10', '0', '0.11'],
        'flex-basis': width,
        'justify-content': justifyContent,
        'align-items': alignItems,
        'align-self': ['auto'].concat(alignItems),
        'align-content': ['stretch'].concat(justifyContent)
      }
    },

    'css-transforms-1': {
      'title': 'Transforms Level 1',
      'tr': 'http://www.w3.org/TR/css3-transforms/',
      'properties': {
        'transform': ['none', 'matrix(1, 2, 3, 4, 5, 6)'].concat(
          ['0', '10px', '-20px', '50%'].times(
            1, 2, ', '
          ).map(function translate(translationValues) {
            return 'translate(' + translationValues + ')';
          }),
          ['0', '1px', '-20px', '50%'].map(
            function translateX(translationValue) {
              return 'translateX(' + translationValue + ')';
            }
          ),
          ['0', '1px', '-20px', '50%'].map(
            function translateY(translationValue) {
              return 'translateY(' + translationValue + ')';
            }
          ),
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
          ['0', '10px', '-20px', '50%'].times(
            2, 2, ', '
          ).map(function translate3d(arg) {
            return 'translate3d(' + arg + ', 10px)';
          }),
          ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
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
          })
        ).concat([
          'perspective(10px)',
          'matrix(1, 2, 3, 4, 5, 6) translate(0)',
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
        ).uniq(),
        'transform-style': ['flat', 'preserve-3d'],
        'perspective': ['none', '10px'],
        'perspective-origin': [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and(
            ['top', 'center', 'bottom', '10%', '10px']
          ),
          ['center', 'left', 'right'].amp(['center', 'top', 'bottom'])
        ).uniq(),
        'backface-visibility': ['visible', 'hidden']
      }
    },

    'css-variables-1': {
      'title': 'Custom Properties for Cascading Variables Level 1',
      'values': {
        'properties': ['background-color', 'var-foo'],
        'var()': [
          'var(--color)', 'var(--header-color)', 'var(--header-color, blue)',
          'calc(var(--gap) * 1px)'
        ]
      }/*,
      // '--*' must be checked by element.style.getPropertyValue('--*').
      'properties': {
        '--*': ['--foo', '--FOO', '--header-color']
      }*/
    },

    'css-size-adjust': {
      'title': 'Mobile Text Size Adjustment Level 1',
      'properties': {
        'text-size-adjust': ['auto', 'none', '50%']
      }
    },

    'css-shapes-1': {
      'title': 'Shapes Level 1',
      'properties': {
        'shape-outside': ['none'].concat(basicShape, shapeBox, image, [
          'inset(10px) border-box', 'border-box inset(10px)',
          'content-box ellipse(10% farthest-side at bottom 10px right 10px)',
          'polygon(evenodd, 10% 10%, 10% 10%) margin-box'
        ]),
        'shape-image-threshold': alphavalue,
        'shape-margin': ['0', '1px', '10%']
      }
    },

    'css-exclusions-1': {
      'title': 'Exclusions Level 1',
      'tr': 'http://www.w3.org/TR/css3-exclusions/',
      'properties': {
        'wrap-flow': [
          'auto', 'both', 'start', 'end', 'minimum', 'maximum', 'clear'
        ],
        'wrap-through': ['wrap', 'none']
      }
    },

    'css-grid-1': {
      'title': 'Grid Layout Level 1',
      'properties': {
        'align-self': ['head', 'foot'],
        'display': ['grid', 'inline-grid'],
        'grid-template-columns': trackSizing,
        'grid-template-rows': trackSizing,
        'grid-template-areas': gridTemplateAreas,
        'grid-template': gridTemplate,
        'grid-auto-columns': trackSize,
        'grid-auto-rows': trackSize,
        'grid-auto-flow': gridAutoFlow,
        'grid-auto-position': gridLine.times(2, 2, ' / '),
        'grid': gridTemplate.concat(
          gridAutoFlow.or(trackSize).filter(function filter(val) {
            return !this[val];
          }, {none: true}),
          ['none auto'].and(trackSize, ' / ')
        ).concat([
          'row dense minmax(10px, 10px) / minmax(min-content, max-content)',
          'rows 1fr', 'columns 1fr / auto',
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
      'units': {
        'fr': [
          'grid-template-columns', 'grid-template-rows', 'grid-auto-columns',
          'grid-auto-rows', 'grid-columns', 'grid-rows'
        ]
      }
    },

    'css-snappoints-1': {
      'title': 'Scroll Snap Points Level 1',
      'properties': {
        'scroll-snap-type': ['none', 'mandatory', 'proximity'],
        'scroll-snap-points-x': [
          'repeat(100%)', 'repeat(10px)', '10px', 'elements',
          '10px, 10px', '10px, repeat(10px)', '10px, 10px, 10px',
          '10px, 10px, repeat(10px)'
        ],
        'scroll-snap-points-y': [
          'repeat(100%)', 'repeat(10px)', '10px', 'elements',
          '10px, 10px', '10px, repeat(10px)', '10px, 10px, 10px',
          '10px, 10px, repeat(10px)'
        ],
        'scroll-snap-destination': [
          '0px', '0px 0px', '10px 10px'/*,
          '50% 50%', '50% 100px'*/
        ],
        'scroll-snap-coordinate': [
          'none', '0px 0px', '10px 10px', '10px 10px, 10px 10px'/*,
          '50% 50%', '50% 0'*/
        ]
      }
    },

    'css-regions-1': {
      'title': 'Regions Level 1',
      'tr': 'http://www.w3.org/TR/css3-regions/',
      'properties': {
        'flow-into': ['none'].concat(['ident'].qmark(['element', 'content'])),
        'flow-from': ['none', 'ident'],
        'break-before': ['region', 'avoid-region'],
        'break-after': ['region', 'avoid-region'],
        'break-inside': 'avoid-region',
        'region-fragment': ['auto', 'break']
      }
    },

    'css-ruby-1': {
      'title': 'Ruby Level 1',
      'tr': 'http://www.w3.org/TR/css3-ruby/',
      'properties': {
        'display': [
          'ruby', 'ruby-base', 'ruby-text',
          'ruby-base-container', 'ruby-text-container'
        ],
        'ruby-position': ['over', 'under', 'inter-character'].amp(
          ['right', 'left']
        ),
        'ruby-merge': ['separate', 'collapse', 'auto'],
        'ruby-align': ['space-around', 'start', 'center', 'space-between']
      }
    },

    'css-scoping-1': {
      'title': 'Scoping Level 1',
      'selectors': {
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
      '@rules': {
        '@scope': ['@scope div']
      }*/
    },

    'css-line-grid-1': {
      'title': 'Line Grid Level 1',
      'properties': {
        'line-grid': ['match-parent', 'create'],
        'line-snap': ['none', 'baseline', 'contain'],
        'line-slack': ['none', '1'],
        'box-snap': [
          'none', 'margin-box', 'border-box', 'half-border'
        ].times(1, 4).qmark(['ident'].times(1, 4), ' / '),
        /*'layout-grid': ['strict both 20pt 15pt'],
        'layout-grid-line': ['1.5'],
        'layout-grid-mode': ['baseline'],
        'line-grid-mode': ['block'],*/
        'width': ['rounddown(1em)', 'roundup(1em)'],
        'height': ['rounddown(1em)', 'roundup(1em)']
      },
      'units': {
        'gd': [
          'margin',
          'margin-top',
          'margin-bottom',
          'min-height'
        ]
      }
    },

    // New CSS Level 2
    'css-shapes-2': {
      'title': 'Shapes Level 2',
      'properties': {
        'shape-inside': ['auto', 'outside-shape'].concat(
          ['10px', '10%'].times(4, 6, ', ').map(function rectangle(arg) {
            return 'rectangle(' + arg + ')';
          }),
          ['10px', '10%'].times(4, 6, ', ').map(function insetRectangle(arg) {
            return 'inset-rectangle(' + arg + ')';
          }),
          ['10px', '10%'].times(3, 3, ', ').map(function circle(arg) {
            return 'circle(' + arg + ')';
          }),
          ['10px', '10%'].times(4, 4, ', ').map(function ellipse(arg) {
            return 'ellipse(' + arg + ')';
          }),
          fillRule.qmark(
            ['10px', '10%'].times(2).times(1, 2, ', '), ', ', {former: true}
          ).map(function polygon(arg) {
            return 'polygon(' + arg + ')';
          }),
          ['url(foo.png)']
        ),
        'shape-padding': ['0', '1px']
      }
    },

    // CSS Level 4
    'css-images-4': {
      'title': 'Image Values and Replaced Content Level 4',
      'tr': 'http://www.w3.org/TR/css4-images/',
      'values': {
        'properties': [
          'background-image',
          'list-style-image',
          'border-image-source',
          'cursor',
          'content'
        ],
        'image()': [
          'image(ltr url(foo.png))', 'image(ltr \'arrow.png\')',
          'image(ltr green)', 'image(rtl url(foo.png))',
          'image(rtl url(arrow.png), \'foo.png\')',
          'image(rtl \'dark.png\', black)',
          'image(ltr \'wavy.svg\', \'wavy.png\' , \'wavy.gif\')'
        ],
        'image-set()': [
          'image-set(white)',
          'image-set(url(foo.png) 600dpi)', 'image-set(\'foo.png\' 600dpcm)',
          'image-set(linear-gradient(white, black) 600dppx)',
          'image-set(radial-gradient(white, black) 1x)',
          'image-set(url(foo.png) 600dpi, \'foo.png\' 600dpcm)',
          'image-set(\'foo.png\' 1x, \'foo-2x.png\' 2x, ' +
            '\'foo-print.png\' 600dpi)',
          'image-set(url(foo.png) 600dppx, black)',
          'image-set(url(foo.png) 1x, \'foo.png\' 2x, white)'
        ],
        'element()': ['element(#src)'],
        'cross-fade()': [
          'cross-fade(url(foo.png))',
          'cross-fade(linear-gradient(white, black))',
          'cross-fade(10% url(foo.png))',
          'cross-fade(url(foo.png), linear-gradient(white, black))',
          'cross-fade(0% url(foo.png), url(arrow.png))',
          'cross-fade(url(foo.png), black)',
          'cross-fade(50% url(foo.png), black)',
          'cross-fade(url(foo.png), linear-gradient(white, black), white)',
          'cross-fade(100% url(foo.png), url(arrow.png), white)'
        ],
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
      'properties': {
        'image-orientation': [
          'from-image'
        ].concat(angle.qmark(['flip'], ' ', {former: true})),
        'image-rendering': ['auto', 'crisp-edges', 'pixelated']
      }
    },

    'selectors4': {
      'title': 'Selectors Level 4',
      'selectors': {
        'E! > F, !E F': [
          'head! > title', '!ol > li', '!ol > li:only-child', 'ul > ol! > li',
          '!div p', '!span:only-child a[href^=\'https://\']',
          '!div > !p.warning'
        ],
        'E /attr/ F': ['label /for/ input'],
        'E || F': ['div || span', 'col.selected || td'],
        '[att=val i]': ['[class=\'example\' i]', '[frame=hsides i]'],
        ':any-link': [':any-link'],
        ':local-link': [':local-link'],
        ':local-link()': [
          ':local-link(0)', ':local-link(1)', ':not(:local-link(0))'
        ],
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
        ':dir()': [':dir(ltr)', ':dir(rtl)'],
        ':lang()': [
          ':lang(de-*)', ':lang(*-CH)', ':lang(en, ja)', ':lang(zh, *-hant)'
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
        ':matches()': [
          // fast profile
          ':matches(.example)', ':matches(div:only-child)',
          ':matches(section, article)', ':matches(:link, :visited)',
          ':matches(section, article, aside, nav) h1',
          ':matches(section, article, aside, nav) ' +
            ':matches(section, article, aside, nav) h1',
          // complete profile
          ':matches(div div)', ':matches(div > div)',
          ':matches(div + div)', ':matches(div ~ div)',
          ':matches(div#text.text[data-text^=\'base\']:only-child > div, main)'
        ],
        ':nth-match(an+b of <selector>)': anb.map(function nthMatch(nth) {
          return ':nth-match(' + nth + ' of .foo)';
        }).concat([':nth-match(2n+1 of .foo, #bar)']),
        ':nth-last-match(an+b of <selector>)': anb.map(
          function nthLastMatch(nth) {
            return ':nth-last-match(' + nth + ' of #example)';
          }
        ).concat([':nth-last-match(even of #example > div, .foo)']),
        ':nth-column()': anb.map(function nthColumn(nth) {
          return ':nth-column(' + nth + ')';
        }),
        ':nth-last-column()': anb.map(function nthLastColumn(nth) {
          return ':nth-last-column(' + nth + ')';
        })
      }
    },

    'mediaqueries4': {
      'title': 'Media Queries Level 4',
      'Media queries': {
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
        'general enclosed': [
          'url()', 'url(example.css)', 'url(example.css color.css)',
          'url(), url()', 'all and url()', '(width) and url()',
          'url() and (height)', 'url() and url()', 'only screen and url()',
          'not print and url()', 'only screen and (width) and url()',
          'not tv and url() and (height)'
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
          '(1/1000000 <= aspect-ratio < 1000000/1)'
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
          '(hover)', '(hover: none)', '(hover: on-demand)', '(hover: over)'
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
      }
    },

    'css-color-4': {
      'title': 'Color Level 4',
      'values': {
        'properties': [
          'color',
          'background-color',
          'border-color',
          'text-decoration-color',
          'column-rule-color'
        ],
        'rgb()': [
          'rgba(1.1, 0, 0)', 'rgba(1.1, 1.2, 0)', 'rgba(1.1, 1.2, 1.3)'
        ],
        'rgba()': [
          'rgba(1.1, 0, 0, 1)', 'rgba(1.1, 1.2, 0, 1)',
          'rgba(1.1, 1.2, 1.3, 1)', 'rgba(0, 0, 0, 10%)'
        ],
        'hsl()': angle.concat(
          ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].times(1, 2)
        ).concat([
          'reddish', 'orangish', 'yellowish', 'greenish', 'bluish', 'purplish',
          'reddish(10%)', 'orangish(10%)', 'yellowish(10%)', 'greenish(10%)',
          'bluish(10%)', 'purplish(10%)'
        ].and(['red', 'orange', 'yellow', 'green', 'blue', 'purple'])).map(
          function hsl(arg) {
            return 'hsl(' + arg + ', 0%, 0%)';
          }
        ),
        'hsla()': angle.concat(
          ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].times(1, 2)
        ).concat([
          'reddish', 'orangish', 'yellowish', 'greenish', 'bluish', 'purplish',
          'reddish(10%)', 'orangish(10%)', 'yellowish(10%)', 'greenish(10%)',
          'bluish(10%)', 'purplish(10%)'
        ].and(['red', 'orange', 'yellow', 'green', 'blue', 'purple'])).map(
          function hsla(arg) {
            return 'hsla(' + arg + ', 0%, 0%, 0.99)';
          }
        ),
        'hwb()': ['0', '1', '-1', '1.1'].concat(
          angle,
          ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].times(1, 2)
        ).concat([
          'reddish', 'orangish', 'yellowish', 'greenish', 'bluish', 'purplish',
          'reddish(10%)', 'orangish(10%)', 'yellowish(10%)', 'greenish(10%)',
          'bluish(10%)', 'purplish(10%)'
        ].and(['red', 'orange', 'yellow', 'green', 'blue', 'purple'])).and(
          ['10%, 10%', '10%, 10%, 1.0'], ', '
        ).map(function hwb(arg) {
          return 'hwb(' + arg + ')';
        }),
        'gray()': [
          '0', '1', '-1', '1.1', '10%'
        ].qmark(['1.0'], ', ').map(function gray(arg) {
          return 'gray(' + arg + ')';
        }),
        'device-cmyk()': ['1', '10%'].times(4, 4, ', ').qmark(
          ['1.0'], ', '
        ).qmark(['white'], ', ').map(function deviceCmyk(arg) {
          return 'device-cmyk(' + arg + ')';
        }),
        'color()': ['white'].concat(
          ['0', '1', '-1', '1.1'],
          angle,
          ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].times(1, 2)
        ).concat([
          'reddish', 'orangish', 'yellowish', 'greenish',
          'bluish', 'purplish',
          'reddish(10%)', 'orangish(10%)', 'yellowish(10%)', 'greenish(10%)',
          'bluish(10%)', 'purplish(10%)'
        ].and(['red', 'orange', 'yellow', 'green', 'blue', 'purple'])).concat(
          ['white', '1'].and([].concat(
            ['+', '-'].qmark(
              ['1', '10%'], ' ', {former: true}).concat(['* 10%']
            ).map(function red(arg) {
              return 'red(' + arg + ')';
            }),
            ['+', '-'].qmark(
              ['1', '10%'], ' ', {former: true}).concat(['* 10%']
            ).map(function green(arg) {
              return 'green(' + arg + ')';
            }),
            ['+', '-'].qmark(
              ['1', '10%'], ' ', {former: true}).concat(['* 10%']
            ).map(function blue(arg) {
              return 'blue(' + arg + ')';
            }),
            ['+', '-'].qmark(
              ['1', '10%'], ' ', {former: true}).concat(['* 10%']
            ).map(function alpha(arg) {
              return 'alpha(' + arg + ')';
            }),
            ['+', '-'].qmark(
              ['1', '10%'], ' ', {former: true}).concat(['* 10%']
            ).map(function a(arg) {
              return 'a(' + arg + ')';
            }),
            ['+', '-'].and(
              ['1', '10%'].times(3).concat(['#004400'])
            ).concat(['* 10%']).map(function rgb(arg) {
              return 'rgb(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              angle, ' ', {former: true}
            ).map(function hue(arg) {
              return 'hue(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              angle, ' ', {former: true}
            ).map(function h(arg) {
              return 'h(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function saturation(arg) {
              return 'saturation(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function s(arg) {
              return 's(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function lightness(arg) {
              return 'lightness(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function l(arg) {
              return 'l(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function whiteness(arg) {
              return 'whiteness(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function w(arg) {
              return 'w(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function blackness(arg) {
              return 'blackness(' + arg + ')';
            }),
            ['+', '-', '*'].qmark(
              ['10%'], ' ', {former: true}
            ).map(function b(arg) {
              return 'b(' + arg + ')';
            }),
            ['tint(10%)', 'shade(10%)'],
            ['white', '10%'].qmark(
              ['rgb', 'hsl', 'hwb']
            ).map(function blend(arg) {
              return 'blend(' + arg + ')';
            }),
            ['white', '10%'].qmark(
              ['rgb', 'hsl', 'hwb']
            ).map(function blenda(arg) {
              return 'blenda(' + arg + ')';
            }),
            ['contrast()', 'contrast(10%)']
          ))
        ).map(function color(arg) {
          return 'color(' + arg + ')';
        })
      },
      'properties': {
        'color-correction': 'auto'
      }
    },

    // No Ready CSS Level 4
    'css-text-4': {
      'title': 'Text Level 4',
      'properties': {
        'text-transform': ['capitalize', 'uppercase', 'lowercase'].or(
          ['full-width'], ['full-size-kana']
        ).slice(4),
        'text-space-collapse': ['collapse', 'discard'].concat(
          ['preserve', 'preserve-breaks'].amp(
            ['trim-inner'].or(['consume-before'], ['consume-after'])
          )
        ),
        'hyphenate-character': ['auto', '\'\\2010\''],
        'hyphenate-limit-zone': ['0', '10%', '10px'],
        'hyphenate-limit-chars': ['auto', '1'].times(1, 3),
        'hyphenate-limit-lines': ['no-limit ', '1'],
        'hyphenate-limit-last': ['none ', 'always', 'column', 'page', 'spread'],
        'text-wrap': ['normal', 'none', 'avoid'],
        'overflow-wrap': ['hyphenate'].concat(
          ['break-word'].amp(['hyphenate'])
        ),
        'text-align': ['\'foo\''].and(
          ['start', 'end', 'left', 'right', 'center', 'justify']
        ),
        'text-justify': ['inter-ideograph', 'inter-cluster', 'kashida'],
        'word-spacing': ['normal', '1em', '50%'].times(2, 3),
        'letter-spacing': ['50%'].concat(['normal', '1em', '50%'].times(2, 3)),
        'text-spacing': [
          'normal', 'none', 'trim-start', 'space-start', 'trim-end',
          'space-end', 'allow-end', 'trim-adjacent', 'space-adjacent',
          'no-compress', 'ideograph-alpha', 'ideograph-numeric', 'punctuation',
          'trim-start trim-end', 'trim-end trim-start',
          'no-compress ideograph-alpha ideograph-numeric punctuation',
          'trim-start trim-end trim-adjacent no-compress ideograph-alpha ' +
            'ideograph-numeric punctuation'
        ],
        'text-decoration-line': ['remove-all'].concat(
          ['underline', 'no-underline', 'replace-underline'].or(
            ['overline', 'no-overline', 'replace-overline'],
            ['line-through', 'no-line-through', 'replace-line-through']
          ).filter(function filter(val) {
            return this.indexOf(val) === -1;
          }, ['underline'].or(['overline'], ['line-through']))
        ),
        'text-decoration': ['remove-all '].concat(
          ['underline', 'no-underline', 'replace-underline'].or(
            ['overline', 'no-overline', 'replace-overline'],
            ['line-through', 'no-line-through', 'replace-line-through']
          ).filter(function filter(val) {
            return this.indexOf(val) === -1;
          }, ['underline'].or(['overline'], ['line-through']))
        ).concat([
          'remove-all solid', 'solid remove-all',
          'remove-all solid black',
          'underline overline no-line-through solid black'
        ]),
        'text-underline-position': ['below left', 'below right'],
        'text-emphasis-position': ['above', 'below'].amp(['right', 'left']),
        'text-emphasis-skip': ['spaces'].or(
          ['punctuation'], ['symbols'], ['narrow']
        ),
        'text-shadow': [
          '1px 2px 3px 4px', '1px 2px 3px 4px purple', 'pink 1px 2px 3px 4px',
          'inset 1px 2px', '1px 2px inset', 'inset 1px 2px 3px',
          '1px 2px 3px inset', 'inset 1px 2px 3px 4px', '1px 2px 3px 4px inset',
          'inset 1px 2px red', '1px 2px red inset', 'inset blue 1px 2px',
          'blue 1px 2px inset', 'inset 1px 2px 3px yellow',
          '1px 2px 3px yellow inset', 'inset green 1px 2px 3px',
          'green 1px 2px 3px inset', 'inset 1px 2px 3px 4px purple',
          '1px 2px 3px 4px purple inset', 'inset pink 1px 2px 3px 4px',
          'pink 1px 2px 3px 4px inset', '1px 2px, inset 1px 2px',
          '1px 2px 3px 4px, 1px 2px 3px 4px', '1px 2px, 1px 2px, inset 1px 2px'
        ]
      }
    },

    'css-backgrounds-4': {
      'title': 'Backgrounds and Borders Level 4',
      'properties': {
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

    'css-pseudo-4': {
      'title': 'Pseudo-elements Level 4',
      'selectors': {
        '::before()': 'div::before(1)',
        '::after()': 'div::after(1)',
        '::nth-before()': 'div::nth-before(1)',
        '::nth-after()': 'div::nth-after(1)',
        '::nth-last-before()': 'div::nth-last-before(1)',
        '::nth-last-after()': 'div::nth-last-after(1)'
      }
    },

    // CSS-SVG Effects
    'compositing-1': {
      'title': 'Compositing and Blending Level 1',
      'tr': 'http://www.w3.org/TR/compositing/',
      'dev': 'http://dev.w3.org/fxtf/compositing-1/',
      'properties': {
        'mix-blend-mode': blendMode,
        'isolation': ['auto', 'isolate'],
        'background-blend-mode': blendMode.concat(['normal, multiply'])
      }
    },

    'filters': {
      'title': 'Filter Effects Level 1',
      'tr': 'http://www.w3.org/TR/filter-effects/',
      'dev': 'http://dev.w3.org/fxtf/filters/',
      'properties': {
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
      'properties': {
        'clip-path': [
          'none', 'url("#clip1")', 'url(commonmasks.xml#mask)'
        ].concat(basicShape, geometryBox).concat([
          'inset(10px) border-box', 'border-box inset(10px)',
          'content-box ellipse(10% farthest-side at bottom 10px right 10px)',
          'polygon(evenodd, 10% 10%, 10% 10%) margin-box',
          'inset(10px) fill', 'inset(10px) stroke', 'inset(10px) view-box'
        ]),
        'clip-rule': fillRule,
        'mask-image': [
          'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
          'url(#mask)', 'url(resources.svg#mask2)'
        ],
        'mask-type': ['auto', 'alpha', 'luminance'],
        'mask-repeat': repeatStyle,
        'mask-position': position,
        'mask-clip': geometryBox.concat('no-clip'),
        'mask-origin': geometryBox,
        'mask-size': bgSize,
        'mask': [
          'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
          'url(#mask)', 'url(commonmasks.xml#mask)'
        ].qmark(['auto', 'alpha', 'luminance']).concat(
          position.qmark(width.concat(
            ['cover', 'contain', '10px 10px']
          ), ' / '),
          repeatStyle,
          geometryBox.or(geometryBox.concat('no-clip')).uniq()
        ).concat([
          'none center', 'padding-box space', 'no-repeat none',
          'none left repeat-x border-box border-box',
          'none left / auto repeat-x border-box border-box',
          'none auto left / auto repeat-x border-box border-box',
          'url(tl.png) alpha left / auto repeat-x border-box border-box',
          'linear-gradient(white, black) luminance bottom 10px right 10px' +
            ' / 10px 10% repeat space fill no-clip'
        ]),
        'mask-box-source': ['none'].concat(image),
        'mask-box-slice': ['1', '10%'].times(1, 4).qmark(['fill']),
        'mask-box-width': width.concat(['1']).times(1, 4),
        'mask-box-outset': ['10px', '1'].times(1, 4),
        'mask-box-repeat': ['stretch', 'repeat', 'round', 'space'].times(1, 2),
        'mask-box': ['none'].concat(
          image,
          ['1', '10%'].times(1, 4).qmark(['fill']).qmark(
            ['1', '1 / 1', '/ 1'], ' / '
          ),
          ['1'].and(width.concat(['1']).times(1, 4), ' / ').qmark(['1'], ' / '),
          ['1 / 1', '1 /'].and(['10px', '1'].times(1, 4), ' / '),
          ['stretch', 'repeat', 'round', 'space'].times(1, 2)
        ).concat([
          '30% 30% / / 10px 10px', '10 fill / / 1 10px',
          '30% 10 30% / / 10px 10px 10px', '30% 30% 30% 30% fill / / 1 1 1 1',
          '10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px',
          'none 100%', '100% none', 'stretch 100%', 'none stretch',
          'none 100% stretch',
          'none 100% / 1 stretch', 'none 100% / / 0 stretch',
          'none 100% / 1 / 0 stretch', 'none 100% fill / 1 / 0 stretch',
          'url(foo.png) 10', 'url(foo.png) 10%', 'url(foo.png) 10% fill',
          'url(foo.png) 10 round', 'url(foo.png) 10 stretch repeat',
          'url(foo.png) 10 / 10px', 'url(foo.png) 10 / 10% / 10px',
          'url(foo.png) 10 fill / 10% / 10px',
          'url(foo.png) 10 fill / 10% / 10px repeat',
          'url(tl.png) 10 30% 10 30% fill / 1 10px 10% auto / ' +
            '10 5px 1px 10px repeat round'
        ]),
        'mask-source-type': ['luminance', 'alpha']
      }
    },

    'web-animations': {
      'title': 'Web Animations 1.0',
      'dev': 'http://dev.w3.org/fxtf/web-animations/',
      'properties': {
        // http://dev.w3.org/fxtf/web-animations/#dfn-step-timing-function-1
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
      'properties': {
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
      '@rules': {
        '@color-profile': '@color-profile'
      },
      'descriptors': {
        'atrule': '@color-profile',
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
      'properties': {
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#anchor-points
        'anchor-point': ['none'].concat(position),
      },
      '@rules': {
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#the-@global-rule
        '@global': '@global'
      }
    },

    'fullscreen': {
      'title': 'Fullscreen API',
      'dev': 'http://fullscreen.spec.whatwg.org/',
      'selectors': {
        '::backdrop': '::backdrop',
        ':fullscreen': ':fullscreen'
      }
    },

    'books': {
      'title': 'CSS Books',
      'dev': 'http://books.spec.whatwg.org/',
      'properties': {
        'content': [
          'counter(footnote, super-decimal)',
          'target-pull(attr(href url))'
        ],
        'float-defer': ['last'],
        'flow': ['sidenote'].qmark([
          'align', 'align-x', 'align-y', 'fill'
        ].or([
          'same-page', 'same-spread', 'any-page'
        ]).concat([
          'same-page!', 'align!', 'align-y!', 'stick', 'erase'
        ]), ', ').map(function area(arg) {
          return 'area(' + arg + ')';
        }),
        'condition': ['at-page-break', 'not-at-page-break'],
        'column-rule-clip': ['none', 'auto', '10px', '10px 10px'],
        'baseline-grid': ['normal', 'none', 'new', 'root', 'page'],
        'baseline-block-snap': [
          'auto', 'before', 'after', 'center'
        ].or(['margin-box', 'border-box']),
        'text-replace': [
          'none', '"foo" "bar"', '"a" ""', '"..." "\\2026" "\'" "\\2019"',
          '"a" "b" "b" "c"'
        ],
        'nav-up': [
          'go(index)', 'go(previous)', 'go(next)', 'back',
          'url(..)', 'url(a1.html)', 'url-doc(..)', 'url-doc(a1.html)',
          'link-rel(next)'
        ],
        'nav-right': [
          'go(index)', 'go(previous)', 'go(next)', 'back',
          'url(..)', 'url(a1.html)', 'url-doc(..)', 'url-doc(a1.html)',
          'link-rel(next)'
        ],
        'nav-down': [
          'go(index)', 'go(previous)', 'go(next)', 'back',
          'url(..)', 'url(a1.html)', 'url-doc(..)', 'url-doc(a1.html)',
          'link-rel(next)'
        ],
        'nav-left': [
          'go(index)', 'go(previous)', 'go(next)', 'back',
          'url(..)', 'url(a1.html)', 'url-doc(..)', 'url-doc(a1.html)',
          'link-rel(next)'
        ],
        'nav-up-shift': ['pan', 'turn', 'flip', 'fold'],
        'nav-right-shift': ['pan', 'turn', 'flip', 'fold'],
        'nav-down-shift': ['pan', 'turn', 'flip', 'fold'],
        'nav-left-shift': ['pan', 'turn', 'flip', 'fold']
      },
      '@rules': {
        '@area': ['@area', '@area sidenote'],
        '@page': [
          '@page chapter:nth(3n)', '@page chapter:nth(3n+1)',
          '@page chapter:nth(3n+2)',
          '@page :first p', '@page :nth(1) .sidenote',
          '@page :nth(3n+1) p:first-line', '@page funky:nth(1) p',
          '@page :left p'
        ],
        '@inside': ['@inside', '@inside p'],
        '@layout': ['@layout'],
        '@navigation': ['@navigation']
      },
      'selectors': {
        '::call': ['::call'],
        ':column()': [
          'div.chapter:column(3)', 'div.chapter:column(2n)',
          'div.chapter:column(3+)', 'div.chapter:column(2, 2)',
          'div.chapter:column(*, 2)', 'div.chapter:column(1, *)'
        ]
      }
    },

    'figures': {
      'title': 'CSS Figures',
      'dev': 'http://figures.spec.whatwg.org/',
      'properties': {
        'float': [
          'block-start', 'before', 'block-end', 'after', 'top-bottom',
          'bottom-top'
        ],
        'column-span': ['0.5', '1.75', '10px', 'auto'],
        'float-reference': ['column', 'element', 'page', 'bleed-box'],
        'object-fill': ['fill'],
        'float-defer-page': ['left', 'right'].concat(
          ['1', '-1'].or(
            ['last'],
            ['left', 'right']
          ).filter(function remove1ValueSyntax(val) {
            return val.split(' ').length > 1;
          })
        ),
        'wrap-side': ['none'].concat([
          'all', 'left', 'right', 'top', 'bottom', 'line-start', 'line-end',
          'block-start', 'block-end', 'line'
        ].or(['1', '-1'])),
        'wrap-contrast': ['normal', '0.5', '0', '1', '0.5 1em'],
        'float-defer-line': ['2'],
        'float-offset-y': ['2'],
        'float-offset': [
          '2 top', '3em outside', '2 bottom, 3em outside',
          '2 bottom, 50% outside'
        ],
        'float-outside': ['3em'],
        'float-offset-x': ['3em', '50%']
      }
    },

    // Web Components
    'custom-elements': {
      'title': 'Custom Elements',
      'dev': 'http://w3c.github.io/webcomponents/spec/custom/',
      'selectors': {
        ':unresolved': ':unresolved'
      }
    },

    // XBL
    'becss': {
      'title': 'Behavioral Extensions to CSS',
      'dev': 'http://dev.w3.org/2006/xbl2/css-module.html',
      'properties': {
        'binding': [
          'none',
          'url(\'http://example.org/htmlBindings.xml#checkbox\')',
          'url(triangles.xml#isoceles)',
          'url(#rightangle)',
          'url(triangles.xml#isoceles) url(triangles.xml#rightangle)',
          'url(#checkbox) url(#isoceles) url(#rightangle)'
        ]
      },
      'selectors': {
        ':bound-element': ':bound-element > *'
      }
    },

    // Extra
    'view-mode': {
      'title': 'The \'view-mode\' Media Feature',
      'dev': 'http://dev.w3.org/2006/waf/widgets-vmmf/',
      'Media queries': {
        'view-mode': [
          '(view-mode: windowed)',
          'not print and (view-mode: floating)',
          'not print and (view-mode: fullscreen)',
          'not print and (view-mode: maximized)',
          'not print and (view-mode: minimized)'
        ]
      }
    },

    'pointerevents': {
      'title': 'Pointer Events',
      'dev': 'https://dvcs.w3.org/hg/pointerevents/raw-file/tip/' +
        'pointerEvents.html',
      'properties': {
        'touch-action': ['auto', 'none', 'manipulation'].concat(
          ['pan-x'].or(['pan-y'])
        )
      }
    },

    'css2': {
      'title': 'Missing CSS 2 & 2.1',
      'properties': {
        /* CSS 2 */
        // only Trident pass
        'font-stretch': ['wider', 'narrower'],
        // only Gecko pass
        'marker-offset': ['auto', '10px'],
        // Blink(maybe WebKit too) pass
        'text-align': ['"string"'],
        /* CSS 2.1 Aural style sheets */
        // http://dev.w3.org/csswg/css2/aural.html
        'volume': [
          'medium', '0', '1', '100', '99.99', '10%', 'silent', 'x-soft', 'soft',
          'loud', 'x-loud'
        ],
        // Blink(maybe WebKit too) pass
        'speak': ['normal', 'none', 'spell-out'],
        'pause-before': ['0', '10ms', '10s', '10%'],
        'pause-after': ['0', '10ms', '10s', '10%'],
        'pause': ['10ms', '10s', '10%'].times(1, 2),
        'cue-before': ['none', 'url("bell.aiff")'],
        'cue-after': ['none', 'url("bell.aiff")'],
        'cue': ['none', 'url("bell.aiff")'].times(1, 2),
        'play-during': ['auto', 'none'].concat(['url("violins.aiff")'].qmark(
          ['mix'].or(['repeat'])
        )),
        'azimuth': [
          '90deg', '100grad', '1rad', 'leftwards', 'rightwards'
        ].concat([
          'left-side', 'far-left', 'left', 'center-left', 'center',
          'center-right', 'right', 'far-right', 'right-side'
        ].or(['behind'])),
        'elevation': [
          'level', '90deg', '100grad', '1rad', 'below', 'above', 'higher',
          'lower'
        ],
        'speech-rate': [
          'medium', '0', '1', '100', '99.99', 'silent', 'x-slow', 'slow',
          'fast', 'x-fast', 'faster', 'slower'
        ],
        'voice-family': [
          'comedian', 'trinoids', 'carlos', 'lani', 'announcer', 'romeo',
          'juliet'
        ].concat(['male', 'female', 'child']).times(1, 2, ', '),
        'pitch': [
          'medium', '10Hz', '10kHz', 'silent', 'x-low', 'low', 'high', 'x-high'
        ],
        'pitch-range': ['50', '0', '100', '99.99'],
        'stress': ['50', '0', '100', '99.99'],
        'richness': ['50', '0', '100', '99.99'],
        'speak-punctuation': ['none', ' code'],
        'speak-numeral': ['continuous', 'digits'],
        'speak-header': ['once', 'always']
      },
      '@rules': {
        // only Gecko doesn't pass
        '@page': ['@page :left', '@page :right', '@page :first']
      },
      'units': {
        'Hz': ['pitch', 'voice-pitch', 'voice-range'],
        'kHz': ['pitch', 'voice-pitch', 'voice-range']
      }
    }
  };

}(window));
