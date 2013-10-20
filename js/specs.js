window.Specs = {
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
        /*'[svg|attr]', '[svg|attr=val]', */'[*|attr]', '[*|attr=val]',
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
      ':nth-child()': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1', '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1', '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1', '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1', '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10', '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-child(' + nth + ')';
      }),
      ':nth-last-child()': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1', '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1', '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1', '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1', '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10', '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-last-child(' + nth + ')';
      }),
      ':nth-of-type()': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1', '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1', '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1', '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1', '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10', '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-of-type(' + nth + ')';
      }),
      ':nth-last-of-type()': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1', '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1', '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1', '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1', '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10', '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-last-of-type(' + nth + ')';
      }),
      ':not()': [
        ':not(element)', ':not(*)', ':not([attr])', ':not(.class)', ':not(#id)', ':not(:first-child)',
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
      'rgba()': ['rgba(0, 0, 0, .5)', 'rgba(255, 0, 0, 1)', 'rgba(100%, 0%, 0%, 1)'],
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
        'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
        'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
        'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
        'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise',
        'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey',
        'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro',
        'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew',
        'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender',
        'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue',
        'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
        'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
        'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue',
        'lightyellow', 'limegreen', 'linen', 'magenta', 'mediumaquamarine',
        'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
        'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred',
        'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite',
        'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
        'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
        'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown',
        'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue',
        'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
        'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'
      ],
      'opacity': ['1', '0', '2', '-5', '.5', '0.0', '1.0']
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
      'not': ['not braille', 'not handheld', 'not print', 'not projection', 'not tty', 'not tv'],
      'and': [
        'all and (width)', '(width) and (height)',
        'screen, print and (height)', 'only screen and (width)', 'not print and (height)',
        'only screen, (width) and (height)', 'not tv and (width) and (height)',
        'all and (width) and (height), only print and (width), not screen and (height)'
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
      'orientation': ['(orientation)', 'not print and (orientation: portrait)', '(orientation: landscape)'],
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
        '(color)', 'not print and (color: 0)', '(min-color: 0)', '(max-color: 100)'
      ],
      'color-index': [
        'not print and (color-index)', '(color-index: 0)', '(min-color-index: 0)',
        'not print and (min-color-index: 1)', '(max-color-index: 10000000)'
      ],
      'monochrome': [
        'not print and (monochrome)', '(monochrome: 0)', '(min-monochrome: 0)',
        'not print and (min-monochrome: 1)', '(max-monochrome: 10000)'
      ],
      'resolution': [
        '(resolution)',
        'not print and (resolution: 1dpi)',
        '(min-resolution: 1dpi)',
        '(max-resolution: 1000000dpi)',
        '(max-resolution: 1000000dpcm)',
        '(max-resolution: 1000000dppx)'
      ],
      'scan': ['not tv and (scan)', 'not tv and (scan: progressive)', 'not tv and (scan: interlace)'],
      'grid': ['not print and (grid)', '(grid: -0)', '(grid: 0)', 'not print and (grid: 1)']
    }
  },

  'css-conditional-3': {
    'title': 'Conditional Rules',
    'tr': 'http://www.w3.org/TR/css3-conditional/',
    '@rules': {
      '@supports': [
        // check syntax parsing, not check supporting these as a feature.
        // see http://dev.w3.org/csswg/css-conditional-3/#supports_rule
        '@supports (width: 1px)', '@supports ((width: 1px))', '@supports (width: 1px !important)',
        '@supports (javascript: @return)',
        '@supports url(foo.png)', '@supports (1px)', '@supports (@media)',
        '@supports (~=)', '@supports (|=)', '@supports (:)', '@supports (url(foo.png))', '@supports ({;})',
        '@supports not (javascript: return)',
        '@supports (width: 1px) or (display: flex)', '@supports (width: 1px) and (height: 1px)',
        '@supports (box-shadow: 2px 2px 2px black) or (-moz-box-shadow: 2px 2px 2px black) or (-webkit-box-shadow: 2px 2px 2px black) or (-o-box-shadow: 2px 2px 2px black)',
        '@supports ((transition-property: color) or (animation-name: foo)) and (transform: rotate(10deg))',
        '@supports (transition-property: color) or ((animation-name: foo) and (transform: rotate(10deg)))',
        '@supports ((not (javascript: return)) and (transition-property: color)) or (display: subgrid)'
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
      'background-repeat': ['space', 'round'].times(1, 2).concat([
        'space', 'round'
      ].amp(['repeat', 'no-repeat'])).concat(
        ['repeat-x', 'repeat-y'].concat(
          ['repeat', 'space', 'round', 'no-repeat'].times(1, 2)
        ).times(2, 2, ', '),
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
      'background-clip': [
        'border-box', 'padding-box', 'content-box'
      ].times(1, 2, ', ').concat(
        ['border-box, padding-box, content-box']
      ),
      'background-origin': [
        'padding-box', 'border-box', 'content-box'
      ].times(1, 2, ', ').concat(
        ['padding-box, border-box, content-box']
      ),
      'background-size': ['auto', '10px', '10%'].times(1, 2).concat([
        'cover', 'contain'
      ]).times(1, 2, ', ').concat(
        ['auto, 10px, 50%']
      ),
      'background': ['linear-gradient(white, black)'].concat(
        ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
          ['center'].concat(['top', 'bottom'].qmark(['10%', '10px'])
        )).uniq().filter(function remove2ValueSyntax(val) {
          return val.split(' ').length > 2;
        }),
        [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq().and(['auto', '10px', '10%'].times(1, 2).concat([
          'cover', 'contain'
        ]), ' / '),
        ['space', 'round'].times(1, 2).concat(
          ['space', 'round'].amp(['repeat', 'no-repeat'])
        ),
        ['local'],
        ['border-box', 'padding-box', 'content-box'].times(1, 2),
        [
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
        ]
      ),
      'border-top-left-radius': ['10px', '10%'].times(1, 2),
      'border-top-right-radius': ['10px', '10%'].times(1, 2),
      'border-bottom-right-radius': ['10px', '10%'].times(1, 2),
      'border-bottom-left-radius': ['10px', '10%'].times(1, 2),
      'border-radius': ['10px', '10%'].times(1, 4).times(1, 2, ' / '),
      'border-image-source': [
        'none', 'url(foo.png)', 'linear-gradient(white, black)'
      ],
      'border-image-slice': [
        '1', '10%'
      ].times(1, 4).qmark(['fill'], ' ', {amp: true}),
      'border-image-width': ['10px', '10%', '1', 'auto'].times(1, 4),
      'border-image-outset': ['10px', '1'].times(1, 4),
      'border-image-repeat': [
        'stretch', 'repeat', 'round', 'space'
      ].times(1, 2),
      'border-image': [
        'none', 'url(tl.png)', 'linear-gradient(white, black)'
      ].concat(
        ['1', '10%'].times(1, 4).qmark(['fill'], ' ', {amp: true}).qmark([
          '1', '1 / 1', '/ 1'
        ], ' / '),
        ['1'].and(['auto', '10px', '10%', '1'].times(1, 4), ' / '),
        ['1'].and(['auto', '10px', '10%', '1'].times(1, 4), ' / ').and([
          '1'
        ], ' / '),
        ['1 / 1', '1 /'].and(['10px', '1'].times(1, 4), ' / '),
        ['stretch', 'repeat', 'round', 'space'].times(1, 2),
        [
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
        ]
      ),
      'box-decoration-break': ['slice', 'clone'],
      'box-shadow': ['none'].concat(
        ['inset'].qmark(
          ['10px'].times(2, 4).qmark(['white'], ' ', {amp: true}),
          ' ',
          {former: true, amp: true}
        ).times(1, 2, ', '),
        ['1px 2px, 1px 2px, 1px 2px']
      )
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
      'ch': '5ch',
      'rem': '5rem',
      'vw': '5vw',
      'vh': '5vh',
      'vmin': '5vmin',
      'vmax': '5vmax',
      'calc()': [
        /*'calc(1)', 'calc(0)', 'calc(-1)', 'calc(+1)', 'calc(1.1)',*/
        'calc(1px)', 'calc(0px)', 'calc(-1px)', 'calc(+1px)', 'calc(1.1px)',
        'calc(1%)', 'calc(0%)', 'calc(-1%)', 'calc(+1%)', 'calc(1.1%)',
        'calc(1px + 2px)', 'calc(5px - 10px)', 'calc(5px * 2)', 'calc(5px / 2)',
        'calc(100%/3 - 2*1em - 2*1px)'/*, 'calc(attr(data-px) * 2)'*/
      ],
      'toggle()': ['toggle(1px, 2px)', 'toggle(1px, 2px, 3px)'],
      'attr()': [
        'data-px',
        'data-text string', 'data-text color', 'data-text url', 'data-text integer',
        'data-text number', 'data-text length', 'data-text angle', 'data-text time',
        'data-text frequency', 'data-text em', 'data-text ex', 'data-text px',
        'data-text rem', 'data-text vw', 'data-text vh', 'data-text vmin',
        'data-text vmax', 'data-text mm', 'data-text cm', 'data-text in',
        'data-text pt', 'data-text pc', 'data-text deg', 'data-text grad',
        'data-text rad', 'data-text ms', 'data-text s', 'data-text Hz',
        'data-text kHz', 'data-text %',
        'data-px, 1px', 'data-px px, 1px', 'data-px px, calc(1px)'
      ].map(function (arg) {
        return 'attr(' + arg + ')';
      })
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
        'stylistic(Bongo) historical-forms styleset(stacked-g, geometric-m) ' +
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

  'css-writing-modes-3': {
    'title': 'Writing Modes',
    'tr': 'http://www.w3.org/TR/css3-writing-modes/',
    'properties': {
      'unicode-bidi': ['isolate', 'isolate-override', 'plaintext'],
      'writing-mode': ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
      'text-orientation': ['mixed', 'upright', 'sideways-right', 'sideways-left', 'sideways', 'use-glyph-orientation'],
      'caption-side': ['block-start', 'block-end'],
      'text-combine-horizontal': ['none', 'all', 'digits', 'digits 2']
    }
  },

  'css-ui-3': {
    'title': 'Basic User Interface',
    'tr': 'http://www.w3.org/TR/css3-ui/',
    'properties': {
      'content': 'icon',
      'icon': ['auto'].concat(['url(foo.png)'].times(1, 3, ', ')),
      'box-sizing': ['content-box', 'padding-box', 'border-box'],
      'outline-style': 'auto',
      'outline-offset': ['0', '5px', '-5px'],
      'resize': ['none', 'both', 'horizontal', 'vertical'],
      'text-overflow': ['clip', 'ellipsis', '\'foo\''].times(1, 2),
      'cursor': [
        'url(foo.png) 2 2, auto', 'url(foo.png) 1 1, url(bar.png), auto',
        'url(foo.png) 1 1, url(bar.png) 2 2, auto',
        'url(foo.png) 1.1 1.1, url(bar.png) 2.2 2.2, url(baz.png) 3.3 3.3, auto',
        'url(example.svg#linkcursor), url(hyper.cur), url(hyper.png) 2 3, pointer',
        'none', 'context-menu', 'cell', 'vertical-text',
        'alias', 'copy', 'no-drop', 'not-allowed', 'ew-resize', 'ns-resize', 'nesw-resize',
        'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out'
      ],
      'nav-index': ['auto', '1', '10', '1.1'],
      'nav-up': ['auto', '#foo'].concat(['#foo'].and(['current', 'root', '\'main\''])),
      'nav-right': ['auto', '#foo'].concat(['#foo'].and(['current', 'root', '\'main\''])),
      'nav-down': ['auto', '#foo'].concat(['#foo'].and(['current', 'root', '\'main\''])),
      'nav-left': ['auto', '#foo'].concat(['#foo'].and(['current', 'root', '\'main\''])),
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
      'text-align-last': ['auto', 'start', 'end', 'left', 'right', 'center', 'justify'],
      'text-justify': ['auto', 'none', 'inter-word', 'distribute'],
      'word-spacing': ['10%', '-10%'],
      'text-indent': ['1em', '1%'].amp(['hanging'].or(['each-line'])),
      'hanging-punctuation': ['none'].concat(['first'].or(['force-end', 'allow-end'], ['last']))
    }
  },

  'css-text-decor-3': {
    'title': 'Text Decoration',
    'properties': {
      'text-decoration-line': ['none'].concat(
        ['underline'].or(['overline'], ['line-through'], ['blink'])
      ),
      'text-decoration-color': 'white',
      'text-decoration-style': ['solid', 'double', 'dotted', 'dashed', 'wavy'],
      'text-decoration': ['white', 'solid', 'double', 'dotted', 'dashed', 'wavy'].concat(
        ['none'].concat(['underline'].or(['overline'], ['line-through'], ['blink'])).amp(['white']),
        ['none'].concat(['underline'].or(['overline'], ['line-through'], ['blink'])).amp(
          ['solid', 'double', 'dotted', 'dashed', 'wavy']
        ),
        ['white'].amp(['solid', 'double', 'dotted', 'dashed', 'wavy']),
        ['none white solid', 'none solid white', 'underline overline line-through blink white solid']
      ),
      'text-decoration-skip': ['none'].concat(
        ['objects'].or(['spaces'], ['ink'], ['edges'], ['box-decoration'])
      ),
      'text-underline-position': ['auto', 'alphabetic'].concat(['under'].or(['left', 'right'])),
      'text-emphasis-style': ['none', '\'foo\''].concat(
        ['filled', 'open'].or(['dot', 'circle', 'double-circle', 'triangle', 'sesame'])
      ),
      'text-emphasis-color': 'green',
      'text-emphasis': ['none', '\'foo\''].concat(
        ['filled', 'open'].or(['dot', 'circle', 'double-circle', 'triangle', 'sesame'])
      ).or(['white']),
      'text-emphasis-position': ['over', 'under'].amp(['right', 'left']),
      'text-shadow': ['none'].concat(
        ['10px'].times(2, 3),
        ['10px'].times(2, 3).amp(['white']),
        [
          '10px 10px, 10px 10px', 'white 10px 10px 10px, 10px 10px 10px white',
          '10px 10px, 10px 10px, 10px 10px'
        ]
      )
    }
  },

  'css-page-3': {
    'title': 'Paged Media',
    'tr': 'http://www.w3.org/TR/css3-page/',
    'properties': {
      'size': ['auto', '4in', '8.5in 11in'].concat(
        ['A5', 'A4', 'A3', 'B5', 'B4', 'letter', 'legal', 'ledger'].or(['portrait', ' landscape'])
      ),
      'page': ['auto', 'rotated', 'narrow', 'main', 'index']
    },
    '@rules': {
      '@page': [
        '@page :blank', '@page LandscapeTable', '@page :left:right', '@page :left:left',
        '@page :left:right:first', '@page :left:right:first:blank',
        '@page CompanyLetterHead:left', '@page CompanyLetterHead:right',
        '@page CompanyLetterHead:first', '@page CompanyLetterHead:blank', '@page page:left:right',
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

  'css-images-3': {
    'title': 'Image Values and Replaced Content',
    'tr': 'http://www.w3.org/TR/css3-images/',
    'values': {
      'properties': [
        'background-image',
        'list-style-image',
        'border-image-source',
        'cursor',
        'content',
        'background',
        'border-image',
        'list-style',
        'shape-outside',
        'mask-image',
        'mask',
        'mask-box-image-source',
        'mask-box-image'
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
      'linear-gradient()': [
        '45deg', '1turn', '100grad', '2rad'
      ].concat(
        ['to'].and(['left', 'right'].or(['top', 'bottom']))
      ).qmark(['white'].qmark([
        '10%', '10px'
      ]).times(2, 2, ', '), ', ', {former: true}).map(function linearGradient(arg) {
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
      ]).times(2, 2, ', ').concat(['at'].and(
        ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq()
      ).concat(
        ['circle'].or(['10px']).concat(
          ['ellipse'].or(['10px', '10%'].times(2)),
          ['circle', 'ellipse'].or([
            'closest-corner', 'closest-side', 'farthest-corner', 'farthest-side'
          ])
        ).uniq().and(['at'].and(
          ['left', 'center', 'right', 'top', 'bottom', '10%', '10px']/*.concat(
            ['left', 'center', 'right', '10%', '10px'].and([
              'top', 'center', 'bottom', '10%', '10px'
            ]),
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
        'radial-gradient(closest-side circle at 20px 30px, red, yellow, green)',
        'radial-gradient(circle, #006, #00a 90%, #0000af 100%, white 100%)',
        'radial-gradient(20px 20px at 20px 30px, red, yellow, green)',
        'radial-gradient(10% 100px ellipse at top 10% right 10px, ' +
          'white 10%, black 10px, red 50%)',
        'radial-gradient(ellipse 10% 20% at top 30% left 40%, ' +
          'currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
          'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
          'transparent 100%)'
      ]),
      'repeating-linear-gradient()': [
        '45deg', '1turn', '100grad', '2rad'
      ].concat(
        ['to'].and(['left', 'right'].or(['top', 'bottom']))
      ).qmark(
        ['white'].qmark(['10%', '10px']).times(2, 2, ', '), ', ', {former: true}
      ).map(function repeatingLinearGradient(arg) {
        return 'repeating-linear-gradient(' + arg + ')';
      }).concat([
        'repeating-linear-gradient(0deg, white, black)',
        'repeating-linear-gradient(-45deg, white, black)',
        'repeating-linear-gradient(red 0px, white 0px, blue 0px)',
        'repeating-linear-gradient(red 0px, white .1px, blue .2px)',
        'repeating-linear-gradient(red, blue 20px, red 40px)',
        'repeating-linear-gradient(-270deg, red, blue 90px, yellow, green 50%)',
        'repeating-linear-gradient(to bottom right, currentColor 100%, ' +
          'rgba(255, 0, 255, 0.3) 100px, transparent 0em, ' +
          'hsla(225, 50%, 100%, 0.7) 75%)'
      ]),
      'repeating-radial-gradient()': ['white'].qmark([
        '10%', '10px'
      ]).times(2, 2, ', ').concat(['at'].and(
        ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq()
      ).concat(
        ['circle'].or(['10px']).concat(
          ['ellipse'].or(['10px', '10%'].times(2)),
          ['circle', 'ellipse'].or([
            'closest-corner', 'closest-side', 'farthest-corner', 'farthest-side'
          ])
        ).uniq().and(['at'].and(
          ['left', 'center', 'right', 'top', 'bottom', '10%', '10px']/*.concat(
            ['left', 'center', 'right', '10%', '10px'].and([
              'top', 'center', 'bottom', '10%', '10px'
            ]),
            ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
              ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
            )
          ).uniq()*/
        ))
      ).and(['white, black'], ', ')).map(function repeatingRadialGradient(arg) {
        return 'repeating-radial-gradient(' + arg + ')';
      }).concat([
        'repeating-radial-gradient(red, blue 20px, red 40px)',
        'repeating-radial-gradient(circle, #006, #00a 90%, ' +
          '#0000af 100%, white 100%)',
        'repeating-radial-gradient(circle closest-side at 20px 30px, red, ' +
          'yellow, green 100%, yellow 150%, red 200%)',
        'repeating-radial-gradient(10% 100px ellipse at top 10% right 10px, ' +
          'white 10%, black 10px, red 50%)',
        'repeating-radial-gradient(ellipse 10% 20% at top 30% left 40%, ' +
          'currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
          'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
          'transparent 100%)'
      ])
    },
    'properties': {
      'object-fit': ['fill', 'contain', 'cover', 'none', 'scale-down'],
      'object-position': [
        'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and([
          'top', 'center', 'bottom', '10%', '10px'
        ]),
        ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
          ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
        )
      ).uniq(),
      'image-resolution': ['from-image'].or(['300dpi', '1dpcm', '1dppx']).qmark(
        ['snap'], ' ', {amp: true}
      ),
      'image-orientation': [
        '0deg', '90deg', '-45deg', '1turn', '100grad', '2rad'
      ]
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
        'central', 'after-edge', 'text-after-edge', 'ideographic', 'alphabetic',
        'hanging', 'mathematical', '0%', '10%', '0cm', '10px'
      ],
      'baseline-shift': [
        'baseline', 'sub', 'super', '0%', '10%', '0cm', '10px'
      ],
      'vertical-align': ['auto', 'central'],
      'inline-box-align': ['last', 'initial', '1'],
      'drop-initial-value': ['initial', '1'],
      'drop-initial-size': ['auto', '1', '10px', '10%'],
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

  'css-lists-3': {
    'title': 'Lists and Counters',
    'tr': 'http://www.w3.org/TR/css3-lists/',
    'properties': {
      'display': ['inline-list-item'],
      'list-style-image': ['linear-gradient(white, black)'],
      'list-style-type': [
        '\'★\'', 'cjk-decimal', 'hebrew', 'hiragana', 'hiragana-iroha',
        'katakana', 'katakana-iroha', 'disclosure-open', 'disclosure-closed',
        'japanese-informal', 'japanese-formal', 'korean-hangul-formal',
        'korean-hanja-informal', 'korean-hanja-formal', 'simp-chinese-informal',
        'simp-chinese-formal', 'trad-chinese-informal', 'trad-chinese-formal',
        'cjk-ideographic', 'ethiopic-numeric'/*, 'circled-lower-latin',
        'symbols(\'\')', 'symbols(repeating \'○\' \'●\')',
        'toggle(disc, square, circle)'*/
      ],
      'list-style': [
        '\'★\'', 'cjk-decimal', 'hebrew', 'hiragana', 'hiragana-iroha',
        'katakana', 'katakana-iroha', 'disclosure-open', 'disclosure-closed',
        'japanese-informal', 'japanese-formal', 'korean-hangul-formal',
        'korean-hanja-informal', 'korean-hanja-formal', 'simp-chinese-informal',
        'simp-chinese-formal', 'trad-chinese-informal', 'trad-chinese-formal',
        'cjk-ideographic', 'ethiopic-numeric'
      ].or(['linear-gradient(white, black)']).concat(
        [
          'disc', 'circle', 'square', 'decimal',
          'decimal-leading-zero', 'lower-roman', 'upper-roman', 'lower-greek',
          'lower-latin', 'upper-latin', 'armenian', 'georgian', 'lower-alpha',
          'upper-alpha', 'none'
        ].amp(['linear-gradient(white, black)']),
        [
          '\'★\'', 'cjk-decimal', 'hebrew', 'hiragana', 'hiragana-iroha',
          'katakana', 'katakana-iroha', 'disclosure-open', 'disclosure-closed',
          'japanese-informal', 'japanese-formal', 'korean-hangul-formal',
          'korean-hanja-informal', 'korean-hanja-formal',
          'simp-chinese-informal', 'simp-chinese-formal',
          'trad-chinese-informal', 'trad-chinese-formal',
          'cjk-ideographic', 'ethiopic-numeric'
        ].amp(['inside', 'outside', 'none', 'url(foo.png)']),
        ['linear-gradient(white, black)'].amp(['inside', 'outside']),
        [
          'cjk-ideographic radial-gradient(at center, white, black) outside',
          'repeating-linear-gradient(to left, white, black) hebrew inside',
          'outside hiragana repeating-radial-gradient(at center, white, black)',
          'inside ' +
            'radial-gradient(closest-side ellipse at 10px 10%, white, black) ' +
            'hiragana-iroha'
        ]
      ),
      'position': ['marker'],
      'marker-side': ['list-item', 'list-container'],
      'counter-set': [
        'none', 'section', 'chapter 0', 'section -1 imagenum 99'/*,
        'list-item attr(value integer, 1)'*/
      ]
    },
    'selectors': {
      '::marker': ['::marker', 'li::marker']
    }
  },

  'css-box-3': {
    'title': 'Basic Box Model',
    'tr': 'http://www.w3.org/TR/css3-box/',
    'properties': {
      'display': [
        'run-in', 'compact', 'ruby-base-group', 'ruby-text-group', 'container'
      ],
      'padding': ['auto'].times(1, 4).concat([
        'auto 1px', '10% auto',
        'auto 1px 10%', '1px auto 10%', '1px 10% auto',
        'auto 1px 10% 100em', '1px auto 10% 100em', '1px 10% auto 100em', '1px 10% 100em auto'
      ]),
      'padding-top': 'auto',
      'padding-right': 'auto',
      'padding-bottom': 'auto',
      'padding-left': 'auto',
      'margin-top': 'fill',
      'margin-right': 'fill',
      'margin-bottom': 'fill',
      'margin-left': 'fill',
      'margin': ['fill'].times(1, 4).concat([
        'fill 1px', '10% fill',
        'fill 1px 10%', '1px fill 10%', '1px 10% fill',
        'fill 1px 10% auto', '1px fill 10% auto', '1px 10% fill auto', '1px 10% auto fill'
      ]),
      'width': ['1px', '1%'].and(['border-box', 'content-box']).concat(
        ['border-box', 'content-box'].and(['1px', '1%']),
        ['available', 'min-content', 'max-content', 'fit-content']
      ),
      'height': ['1px', '1%'].and(['border-box', 'content-box']).concat(
        ['border-box', 'content-box'].and(['1px', '1%']),
        ['available', 'min-content', 'max-content', 'fit-content', 'complex']
      ),
      'min-width': ['1px', '1%'].and(['border-box', 'content-box']).concat(
        ['border-box', 'content-box'].and(['1px', '1%']),
        ['available', 'min-content', 'max-content', 'fit-content']
      ),
      'min-height': ['1px', '1%'].and(['border-box', 'content-box']).concat(
        ['border-box', 'content-box'].and(['1px', '1%']),
        ['available', 'min-content', 'max-content', 'fit-content']
      ),
      'max-width': ['1px', '1%'].and(['border-box', 'content-box']).concat(
        ['border-box', 'content-box'].and(['1px', '1%']),
        ['available', 'min-content', 'max-content', 'fit-content']
      ),
      'max-height': ['1px', '1%'].and(['border-box', 'content-box']).concat(
        ['border-box', 'content-box'].and(['1px', '1%']),
        ['available', 'min-content', 'max-content', 'fit-content']
      ),
      'float': [
        'top', 'bottom', 'start', 'end',
        'inside', 'outside', 'page', 'multicol', 'intrude',
        'unless-room', 'next', 'page(landscape)', 'hide'
      ].concat(
        [
          'left', 'right', 'top', 'bottom', 'start', 'end',
          'inside', 'outside', 'page', 'multicol', 'intrude',
          'unless-room', 'next', 'page(landscape)', 'hide'
        ].and(['contour']),
        ['contour'].and([
          'left', 'right', 'top', 'bottom', 'start', 'end',
          'inside', 'outside', 'page', 'multicol', 'intrude',
          'unless-room', 'next', 'page(landscape)', 'hide'
        ])
      ),
      'clear-after': [
        'none', 'left', 'right', 'top', 'bottom', 'inside', 'outside',
        'start', 'end', 'both', 'descendants'
      ],
      'overflow-x': ['visible', 'hidden', 'scroll', 'auto', 'no-display', 'no-content'],
      'overflow-y': ['visible', 'hidden', 'scroll', 'auto', 'no-display', 'no-content'],
      'overflow': ['no-display', 'no-content'].times(1, 2).concat(
        ['visible', 'hidden', 'scroll', 'auto'].and(['no-display', 'no-content']),
        ['no-display', 'no-content'].and(['visible', 'hidden', 'scroll', 'auto'])
      ),
      'alignment': ['top', 'right', 'bottom', 'left', 'center'],
      'child-align': ['auto', 'top', 'middle', 'bottom', 'left', 'right'],
      'float-displace': ['line', 'indent', 'block', 'block-within-page'],
      'indent-edge-reset': ['none', 'margin-edge', 'border-edge', 'padding-edge', 'content-edge']
    }
  },

  'css-overflow-3': {
    'title': 'Overflow',
    'properties': {
      'overflow-x': ['paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls', 'fragments'],
      'overflow-y': ['paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls', 'fragments'],
      'overflow': ['paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls', 'fragments'],
      'max-lines': ['none', '1']
    },
    'selectors': {
      '::nth-fragment()': 'div::nth-fragment(1)'
    }
  },

  'css-gcpm-3': {
    'title': 'Generated Content for Paged Media',
    'tr': 'http://www.w3.org/TR/css3-gcpm/',
    'properties': {
      'string-set': ['none'].concat(['header'].and([
        '\'foo\'', 'counter(par-num, upper-roman)', 'counters(par-num, upper-roman, disc)',
        'contents', 'content-element', 'content-before', 'content-after', 'content-first-letter',
        'env(url)', 'env(date)', 'env(time)', 'env(date-time)'
      ])).concat([
        'title contents', 'index content-first-letter', 'header content-before content-element',
        'header \'Chapter \' counter(chapter) contents', 'header \'Chapter \' counter(header) \': \' contents',
        'index \'foo\' attr(title) counter(par-num, upper-roman) counters(par-num, upper-roman, disc) contents content-element content-before content-after content-first-letter env(url) env(date) env(time) env(date-time)',
        'index content-first-letter, entry contents', 'title env(date-time), header content-before, index content-after'
      ]),
      'marks': ['none', 'crop', 'cross', 'crop cross', 'cross crop'],
      'bleed': ['6pt'],
      'bookmark-level': ['none', '1'],
      'bookmark-label': [
        'none', '\'foo\'', 'counter(par-num, upper-roman)', 'counters(par-num, upper-roman, disc)',
        'contents', 'content-element', 'content-before', 'content-after', 'content-first-letter',
        'env(url)', 'env(date)', 'env(time)', 'env(date-time)', 'content-before \': \' contents',
        '\'foo\' counter(par-num, upper-roman) counters(par-num, upper-roman, disc) contents content-element content-before content-after content-first-letter env(url) env(date) env(time) env(date-time)'
      ],
      'bookmark-state': ['open', 'closed'],
      'float-offset': ['0 0', '5px', '2em 3em'],
      'clear-side': ['auto', 'both']
    }
  },

  'css-position-3': {
    'title': 'Positioned Layout',
    'tr': 'http://www.w3.org/TR/css3-positioning/',
    'properties': {
      'position': ['sticky', 'center', 'page'],
      'offset-before': ['auto', '10px', '10%'],
      'offset-end': ['auto', '10px', '10%'],
      'offset-after': ['auto', '10px', '10%'],
      'offset-start': ['auto', '10px', '10%'],
      'clip': ['inset(5px, 40px, 45px, 5px)', 'inset(30%, 0%, 30%, 25%)']
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
      'properties': ['list-style-type'],
      'symbols()': [
        'symbols(\'\')', 'symbols(url(foo.png))',
        'symbols(linear-gradient(white, black))',
        'symbols(cyclic \'\')', 'symbols(numeric url(foo.png))',
        'symbols(alphabetic linear-gradient(white, black))',
        'symbols(\'\' \'\')', 'symbols(url(foo.png) url(foo.png))',
        'symbols(linear-gradient(white, black) linear-gradient(white, black))',
        'symbols(symbolic \'\' \'\')',
        'symbols(fixed url(foo.png) linear-gradient(white, black))',
        'symbols(cyclic \'\' url(foo.png) linear-gradient(white, black))',
        'symbols(numeric \'0\' radial-gradient(white, black) \'A\')'
      ]
    },
    '@rules': {
      '@counter-style': '@counter-style circled-lower-latin'
    },
    'descriptors': {
      'atrule': '@counter-style circled-lower-latin',
      'atruleName': '@counter-style',
      'system': [
        'symbolic', 'cyclic', 'numeric', 'alphabetic', 'additive',
        'fixed', 'fixed 1', 'override triangle'
      ],
      'negative': [
        '\'-\'', 'url(foo.svg)', 'linear-gradient(white, black)', 'triangle'
      ].times(1, 2),
      'prefix': [
        '\'\'', '\'-webkit-\'',
        'url(foo.svg)', 'linear-gradient(white, black)', 'triangle'
      ],
      'suffix': [
        '\'.\'', '\'kg\'',
        'url(foo.svg)', 'linear-gradient(white, black)', 'triangle'
      ],
      'range': ['auto'].concat(['1', 'infinite'].times(2), ['1 1, 1 1']),
      'pad': ['0'].amp([
        '\'\'', 'url(foo.svg)', 'linear-gradient(white, black)', 'triangle'
      ]),
      'fallback': [
        'decimal', 'decimal-leading-zero', 'cjk-decimal', 'lower-roman',
        'upper-roman', 'armenian', 'georgian', 'hebrew',
        'lower-alpha', 'lower-latin', 'upper-alpha', 'upper-latin',
        'lower-greek', 'hiragana', 'hiragana-iroha',
        'katakana', 'katakana-iroha',
        'disc', 'circle', 'square', 'disclosure-open', 'disclosure-closed',
        'japanese-informal', 'japanese-formal',
        'korean-hangul-formal', 'korean-hanja-informal', 'korean-hanja-formal',
        'simp-chinese-informal', 'simp-chinese-formal',
        'trad-chinese-informal', 'trad-chinese-formal', 'cjk-ideographic',
        'ethiopic-numeric'
      ],
      'symbols': [
        '\'\'', 'url(foo.svg)', 'linear-gradient(white, black)', 'triangle'
      ].times(1, 2).concat([
        '‣', '◰ ◳ ◲ ◱', '* ⁑ † ‡',
        'A B C D E F G H I J K L M \nN O P Q R S T U V W X Y Z',
        '\'0\' \'1\' \'2\' \'3\' \'4\' \'5\' \'6\' \'7\' \'8\' \'9\'',
        'ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ',
        '\'1\' linear-gradient(white, black) あ'
      ]),
      'additive-symbols': ['0'].amp([
        '\'\'', 'url(foo.svg)', 'linear-gradient(white, black)', 'triangle'
      ]).concat([
        '3 \'a\', 2 \'b\'', '6 ⚅, 5 ⚄, 4 ⚃, 3 ⚂, 2 ⚁, 1 ⚀',
        '\'0\' 0, 1 radial-gradient(white, black), 2 A'
      ]),
      'speak-as': ['auto', 'numeric', 'alphabetic', 'bullet', 'triangle']
    },
  },

  'css-break-3': {
    'title': 'Fragmentation',
    'tr': 'http://www.w3.org/TR/css3-break/',
    'properties': {
      'break-before': ['any', 'recto', 'verso'],
      'break-after': ['any', 'recto', 'verso']
    }
  },

  'css-align-3': {
    'title': 'Box Alignment',
    'tr': 'http://www.w3.org/TR/css3-align/',
    'properties': {
      'justify-self': ['auto', 'baseline', 'start', 'end', 'center', 'stretch'].concat(
        ['baseline', 'start', 'end', 'center', 'stretch'].and(['true']),
        ['true'].and(['baseline', 'start', 'end', 'center', 'stretch'])
      ),
      'align-self': ['head', 'foot'].concat(
        ['baseline', 'head', 'foot', 'center', 'stretch'].and(['true']),
        ['true'].and(['baseline', 'head', 'foot', 'center', 'stretch'])
      ),
      'justify-content': ['auto', 'start', 'end', 'left', 'right', 'baseline'].concat(
        [
          'start', 'end', 'left', 'right', 'flex-start', 'flex-end',
          'baseline', 'center', 'space-between', 'space-around'
        ].and(['true']),
        ['true'].and([
          'start', 'end', 'left', 'right', 'flex-start', 'flex-end',
          'baseline', 'center', 'space-between', 'space-around'
        ])
      ),
      'align-content': ['auto', 'head', 'foot', 'baseline'].concat(
        ['head', 'foot', 'flex-start', 'flex-end', 'baseline', 'center', 'space-between', 'space-around'].and(['true']),
        ['true'].and(['head', 'foot', 'flex-start', 'flex-end', 'baseline', 'center', 'space-between', 'space-around'])
      ),
      'justify-items': ['auto', 'start', 'center', 'end'].concat(
        ['start', 'center', 'end'].and(['true']),
        ['true'].and(['start', 'center', 'end'])
      ),
      'align-items': ['auto', 'head', 'foot'].concat(
        ['head', 'foot', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'].and(['true']),
        ['true'].and(['head', 'foot', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
      )
    }
  },

  'css-display-3': {
    'title': 'Display',
    'properties': {
      'display-inside': ['auto', 'block', 'table', 'flex', 'grid'],
      'display-outside': [
        'inline-level', 'block-level', 'none', 'table-row-group', 'table-header-group',
        'table-footer-group', 'table-row', 'table-cell', 'table-column-group',
        'table-column', 'table-caption'
      ],
      'display-extras': ['none', 'list-item'],
      'display': [
        'auto', 'block-level', 'inline-level', 'normal', 'contents',
        'auto inline-level', 'none normal', 'none none',
        'auto inline-level normal', 'none none none',
        'auto inline-level normal none'
      ],
      'box': ['normal', 'none', 'contents']
    }
  },

  'css-overflow-clipping': {
    'title': 'Overflow Clipping',
    'properties': {
      'overflow': ['clip']
    }
  },

  'css-page-floats': {
    'title': 'Page Floats',
    'properties': {
      'float-defer-column': ['none', '1', 'last'],
      'float-defer-page': ['none', '1', 'last'],
      'float-wrap': ['none', 'wrap'],
      'float-offset': ['0', '5px', '0 0', '2em 3em'],
      'clear-side': ['auto', 'both']
    }
  },

  // Unmaintained CSS Level 3
  'css-content-3': {
    'title': 'Generated Content',
    'tr': 'http://www.w3.org/TR/css3-content/',
    'properties': {/*
      'move-to': ['normal', 'here', 'ident', 'top-floats'],
      'crop': [
        'auto', 'rect(0px, 115px, 85px, 30px)', 'rect(10%, 10%, 10%, 10%)',
        'inset-rect(0px, 115px, 85px, 30px)', 'inset-rect(10%, 10%, 10%, 10%)'
      ],*/
      'page-policy': ['start', 'first', 'last'],
      'content': [
        'inhibit', 'pending(insert)', 'contents', 'footnote', 'endnote',
        'section-note', 'box', 'check', 'circle', 'diamond', 'disc', 'hyphen',
        'square', 'date()', 'time()', 'document-url'/*, '<target>'*/,
        'url(foo.png), none', 'icon, none', 'icon, icon',
        'url(foo.png), url(foo.png), none'
      ]
    },
    'selectors': {/*
      '::outside': [
        'note::outside', 'note::outside::before'
      ],
      '::outside()': [
        'span::outside(1)', 'span::outside(1)::before', 'span::outside(2)::after'
      ],
      '::alternate': [
        'span::alternate', 'span::alternate::before', 'span::after::alternate'
      ],*/
      '::line-marker': 'span::line-marker'
    }/*,
    '@rules': {
      '@counter-styles': '@counter-styles',
      '@counter': '@counter footnote',
      '@string': '@string chapter',
      '@footnote': '@footnote'
    }*/
  },

  'css3-tables': {
    'title': 'Tables',
    'properties': {
      'tab-position': ['0', '10px', '10%'],
      'tab-align': ['none ', 'left', 'top', 'center', 'right', 'bottom', '\'foo\''],
      'tab-leaders': ['\'\'', '\'foo\''],
      'tab-leaders-alignment': ['aligned', 'centered', 'distributed'],
      'tab': ['10px', '10%'].or(['none ', 'left', 'top', 'center', 'right', 'bottom', '\'foo\'']).concat(
        ['10px', '10%'].or(['none ', 'left', 'top', 'center', 'right', 'bottom', '\'foo\'']).and(
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

  'css-grid-position-3': {
    'title': 'Grid Positioning',
    'properties': {
      'grid-columns': ['none'].concat(/*
        ['10px', '10%', '10fr', '*'].times(1, 3).map(function (arg) {
          return '(' + arg + ')';
        }),
        ['10px', '10%', '10fr', '*'].times(1, 3).map(function (arg) {
          return '(' + arg + ')[1]';
        }),*/
        ['10px', '10%', '10fr'].times(1, 3).map(function (arg) {
          return 'repeat(' + arg + ')';
        }),
        [
          /*'* * (0.5in * *)[2]', '* (1em *)[2]',
          '10px (10px)', '(10px) (10px)', '10px (10px)[1]',
          '10px 10px (10px)',*/
          '10px repeat(10px)', 'repeat(10px) repeat(10px)',
          '4em repeat(0.25em 1em)', '10px 10px repeat(10px)'
        ]
      ),
      'grid-rows': ['none'].concat(
        ['10px', '10%', '10fr'/*, '*'*/].times(1, 3).map(function (arg) {
          return '(' + arg + ')';
        }),
        ['10px', '10%', '10fr'/*, '*'*/].times(1, 3).map(function (arg) {
          return '(' + arg + ')[1]';
        }),
        [
          '10px (10px)', '(10px) (10px)', '10px (10px)[1]',
          '10px 10px (10px)'
        ]
      )
    },
    'values': {
      'properties': [
        'float-offset',
        'width',
        'left'
      ],
      'gr': '1gr'
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
      'target': ['current', 'root', 'parent', 'new', 'modal', '\'foo\''].concat(
        ['window', 'tab', 'none'],
        ['above', 'behind', 'front', 'back'],
        ['current', 'root', 'parent', 'new', 'modal', '\'foo\''].and(['window', 'tab', 'none']),
        ['current', 'root', 'parent', 'new', 'modal', '\'foo\''].and(['above', 'behind', 'front', 'back']),
        ['window', 'tab', 'none'].and(['current', 'root', 'parent', 'new', 'modal', '\'foo\'']),
        ['window', 'tab', 'none'].and(['above', 'behind', 'front', 'back']),
        ['above', 'behind', 'front', 'back'].and(['current', 'root', 'parent', 'new', 'modal', '\'foo\'']),
        ['above', 'behind', 'front', 'back'].and(['window', 'tab', 'none']),
        ['current window above', 'behind tab root']
      )
    }
  },

  // CSS Level 3?
  'css-line-grid': {
    'title': 'Line Grid',
    'properties': {
      'line-grid': ['root-grid', 'ident'],
      'line-snap': ['none', 'baseline', 'contain'],
      'line-slack': ['none', '1'],
      'box-snap': ['none', 'margin-box', 'border-box', 'half-border'].concat(
        ['none', 'margin-box', 'border-box', 'half-border'].and(['ident'].times(1, 4), ' / ')
      )
    }
  },

  'css-module': {
    'title': 'Template',
    'properties': {
      'display-inside': ['text', 'inline-inside', 'block-inside', 'ruby', 'icon']
    }
  },

  // New CSS Level 1~3
  'css-namespaces-1': {
    'title': 'Namespaces',
    'tr': 'http://www.w3.org/TR/css3-namespace/',
    '@rules': {
      '@namespace': [
        '@namespace \'http://www.w3.org/1999/xhtml\';',
        '@namespace svg \'http://www.w3.org/2000/svg\';',
        '@namespace url(http://www.w3.org/1999/xhtml);',
        '@namespace svg url(http://www.w3.org/2000/svg);'
      ]
    }
  },

  'css-transitions-1': {
    'title': 'Transitions',
    'tr': 'http://www.w3.org/TR/css3-transitions/',
    'properties': {
      'transition-property': [
        'all', 'none',
        'background-color', 'background-position', 'border-bottom-color', 'border-bottom-width',
        'border-left-color', 'border-left-width', 'border-right-color', 'border-right-width',
        'border-spacing', 'border-top-color', 'border-top-width', 'bottom',
        'clip', 'color', 'font-size', 'font-weight', 'height', 'left', 'letter-spacing',
        'line-height', 'margin-bottom', 'margin-left', 'margin-right',
        'margin-top', 'max-height', 'max-width', 'min-height',
        'min-width', 'opacity', 'outline-color', 'outline-width',
        'padding-bottom', 'padding-left', 'padding-right',
        'padding-top', 'right', 'text-indent', 'text-shadow',
        'top', 'vertical-align', 'visibility', 'width', 'word-spacing', 'z-index',
        'all, all', 'all, background-color', 'width, height', 'width, all, height'
      ],
      'transition-duration': ['0s', '1s', '100ms', '0s, 10s', '0ms, 10s, 100s'],
      'transition-timing-function': [
        'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out',
        'step-start', 'step-end', 'steps(1)', 'steps(3, start)', 'steps(5, end)',
        'cubic-bezier(.5, .5, .5, .5)', 'cubic-bezier(.5, 1.5, .5, -2.5)',
        'ease, linear', 'ease, ease, ease'
      ],
      'transition-delay': ['0s', '-1s', '100ms', '0s, 10s', '-100ms, 1s, 10s'],
      'transition': [
        'none', 'all', 'background-color', '0s', 'ease', '-1s',
        'all 0s', '-1s 1s', 'background-color 0.1s ease', 'background-position 10ms linear 1s',
        'background-color linear 1s', '1s 2s width linear', 'border-bottom-color ease-in', '100s 100ms',
        'all, all', 'all, background-color', '-1s, -1s', 'all, 1s, ease-in-out',
        '10s border-left-color step-start, step-end, steps(10, start) all',
        'cubic-bezier(.5, 1.5, .5, -2.5) -10ms, -1s all 10s, all ease-in-out',
        'all 1s ease 2s, cubic-bezier(0.25, 0.1, 0.25, 1) 60s 1ms opacity'
      ]
    }
  },

  'css-animations-1': {
    'title': 'Animations',
    'tr': 'http://www.w3.org/TR/css3-animations/',
    'properties': {
      'animation-name': ['none', 'foo', 'foo, bar', 'none, foo, bar'],
      'animation-duration': ['0s', '1s', '100ms', '1s, 2s', '0ms, 1s, 3s'],
      'animation-timing-function': [
        'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out',
        'step-start', 'step-end', 'steps(1)', 'steps(3, start)', 'steps(5, end)',
        'cubic-bezier(.5, .5, .5, .5)', 'cubic-bezier(.5, 1.5, .5, -2.5)',
        'ease, linear', 'ease, ease, ease'
      ],
      'animation-iteration-count': ['infinite', '8', '4.35', '1, .5', '0, 1, 2'],
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
        'none', 'foo', '0s', 'ease', 'linear', 'ease-in', 'ease-out',
        'ease-in-out', 'step-start', 'step-end', 'steps(1)',
        'steps(3, start)', 'steps(5, end)', 'cubic-bezier(.5, .5, .5, .5)',
        'cubic-bezier(.5, 1.5, .5, -2.5)', '1', 'infinite', 'normal',
        'reverse', 'alternate', 'alternate-reverse', 'running', 'paused',
        '0s', 'none', 'forwards', 'backwards', 'both',
        'none 0s', 'both paused', 'none none', '-1s 0s', 'foo running',
        'none -1s cubic-bezier(.5, 1.5, .5, -2.5)',
        'foo 1s 2s infinite linear alternate both',
        'none 0s ease 0s 1 normal none running',
        'none, none', '-1s, -1s', 'none 0s, both paused',
        'none 0s ease 0s 1 normal none running, none 0s ease 1 normal running 0s none',
        '0s, 0s, 0s'
      ]
    },
    '@rules': {
      '@keyframes': '@keyframes foo'
    }
  },

  'css-multicol-1': {
    'title': 'Multi-column Layout',
    'tr': 'http://www.w3.org/TR/css3-multicol/',
    'properties': {
      'column-width': ['10em', 'auto'],
      'column-count': ['2', 'auto'],
      'columns': ['100px', '3', '10em 2', 'auto 2', '10em auto', 'auto auto', '2 10em', 'auto 10em', '2 auto'],
      'column-gap': ['1em', 'normal'],
      'column-rule-color': 'red',
      'column-rule-style': ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
      'column-rule-width': ['1px', 'thin', 'medium', 'thick'],
      'column-rule': [
        'medium', 'none', 'red', 'transparent',
        'medium none', 'none medium', 'medium red', 'none red',
        'red medium', 'red none', 'medium transparent', 'none transparent',
        'transparent medium', 'transparent none',
        '1px solid black', 'thin outset blue', 'thick yellow hidden', 'dashed white medium',
        'dotted 10em purple', 'green double thin', 'black thick groove',
        'transparent ridge medium', 'transparent thin inset'
      ],
      'break-before': ['auto', 'always', 'avoid', 'left', 'right', 'page', 'column', 'avoid-page', 'avoid-column'],
      'break-after': ['auto', 'always', 'avoid', 'left', 'right', 'page', 'column', 'avoid-page', 'avoid-column'],
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
      'min-width': ['auto', '10px', '10%'],
      'max-width': ['auto', '10px', '10%'],
      'width': ['auto', '10px', '10%'].times(1, 2),
      'min-height': ['auto', '10px', '10%'],
      'max-height': ['auto', '10px', '10%'],
      'height': ['auto', '10px', '10%'].times(1, 2),
      'zoom': ['auto', '1.0', '2.0', '0.5', '100%', '200%', '50%'],
      'min-zoom': ['auto', '1.0', '2.0', '0.5', '100%', '200%', '50%'],
      'max-zoom': ['auto', '1.0', '2.0', '0.5', '100%', '200%', '50%'],
      'user-zoom': ['zoom', 'fixed'],
      'orientation': ['auto', 'portrait', 'landscape']
    }
  },

  'css-template-1': {
    'title': 'Grid Template Layout',
    'tr': 'http://www.w3.org/TR/css3-layout/',
    'properties': {
      'grid-template-areas': ['\'*\'', '\'****\' \'****\' \'****\''],
      'grid-template-columns': ['*', 'fit-content'].concat(
        ['*', 'fit-content'].amp([
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ], ', ').concat(
          ['*', 'fit-content'].times(2, 2, ', ')
        ).map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        }),
        ['minmax(minmax(1px, 1px), 1px)'],
        ['*', 'fit-content'].amp([
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ]).concat(['*', 'fit-content'].times(2, 2)),
        ['* * * *']
      ),
      'grid-template-rows': ['*', 'fit-content'].concat(
        ['*', 'fit-content'].amp([
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ], ', ').concat(
          ['*', 'fit-content'].times(2, 2, ', ')
        ).map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        }),
        ['minmax(minmax(1px, 1px), 1px)'],
        ['*', 'fit-content'].amp([
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ]).concat(['*', 'fit-content'].times(2, 2)),
        ['* * * *']
      ),
      'grid-template': ['"a"'].amp([
        '10px', '10%', '*', '1fr',
        'min-content', 'max-content', 'fit-content'
      ].concat([
        '10px', '10%', '*', '1fr',
        'min-content', 'max-content', 'fit-content'
      ].times(2, 2, ', ').map(function minmax(arg) {
        return 'minmax(' + arg + ')';
      }))).concat(
        [
          '10px 10px "a"', '"a" 10px 10px', '10px "a" 10px',
          '"a" "b" 10px', '10px "a" "b"', '"a" 10px "b"',
          '10px 10px "a" 10px "b" 10px'
        ],
        ['/'].and([
          '10px', '10%', '*', '1fr',
          'min-content', 'max-content', 'fit-content'
        ].concat([
          '10px', '10%', '*', '1fr',
          'min-content', 'max-content', 'fit-content'
        ].times(2, 2, ', ').map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        }))),
        ['*', 'fit-content'].times(2, 2, ' / '),
        ['* * / * *']
      ),
      'grid': ['"a"'].amp([
        '10px', '10%', '*', '1fr',
        'min-content', 'max-content', 'fit-content'
      ].concat([
        '10px', '10%', '*', '1fr',
        'min-content', 'max-content', 'fit-content'
      ].times(2, 2, ', ').map(function minmax(arg) {
        return 'minmax(' + arg + ')';
      }))).concat(
        [
          '10px 10px "a"', '"a" 10px 10px', '10px "a" 10px',
          '"a" "b" 10px', '10px "a" "b"', '"a" 10px "b"',
          '10px 10px "a" 10px "b" 10px'
        ],
        ['/'].and([
          '10px', '10%', '*', '1fr',
          'min-content', 'max-content', 'fit-content'
        ].concat([
          '10px', '10%', '*', '1fr',
          'min-content', 'max-content', 'fit-content'
        ].times(2, 2, ', ').map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        }))),
        ['*', 'fit-content'].times(2, 2, ' / '),
        ['* * / * *', '* 10em / 4em 5em', '* 10em "a b c" "a b d" 4em']
      ),
      'flow': ['auto', 'p1', '\'initial\'', '*', 'same'],
      'chains': [
        'none', 'a', 'b c',
        'd, e', 'f g, h i', 'j, k l', 'm n, o p',
        '@ a b c d e, f g h i j k'
      ]
    },
    'selectors': {
      '::slot()': 'body::slot(a)',
      '::blank()': 'body::blank(a)'
    }
  },

  'css-speech-1': {
    'title': 'Speech',
    'tr': 'http://www.w3.org/TR/css3-speech/',
    'properties': {
      'voice-volume': ['silent'].concat(
        ['x-soft', 'soft', 'medium', 'loud', 'x-loud'].or(['-6dB', '0', '6db'])
      ),
      'voice-balance': ['center', '-100', '0', '1.1', '100', 'left', 'right', 'leftwards', 'rightwards'],
      'speak': 'auto',
      'speak-as': [
        'normal', 'spell-out', 'digits', 'literal-punctuation', 'no-punctuation',
        'spell-out digits', 'spell-out literal-punctuation', 'spell-out no-punctuation',
        'digits spell-out', 'digits literal-punctuation', 'digits no-punctuation',
        'literal-punctuation spell-out', 'literal-punctuation digits',
        'no-punctuation spell-out', 'no-punctuation digits',
        'spell-out digits literal-punctuation', 'spell-out digits no-punctuation',
        'spell-out literal-punctuation digits', 'spell-out no-punctuation digits',
        'digits spell-out literal-punctuation', 'digits spell-out no-punctuation',
        'digits literal-punctuation spell-out', 'digits no-punctuation spell-out',
        'literal-punctuation spell-out digits', 'literal-punctuation digits spell-out',
        'no-punctuation spell-out digits', 'no-punctuation digits spell-out'
      ],
      'pause-before': ['none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'],
      'pause-after': ['none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'],
      'pause': ['none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'].times(1, 2).concat(
        ['20ms'].amp(['none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'])
      ),
      'rest-before': ['none', '+3s', '250ms', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'],
      'rest-after': ['none', '+3s', '250ms', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'],
      'rest': ['none', '+3s', '250ms', 'x-weak', 'weak', 'medium', 'strong', 'x-strong'].times(1, 2),
      'cue-before': ['url(\'bell.aiff\') -6dB', 'url(\'dong.wav\') 0', 'url(\'pop.au\') 6db'],
      'cue-after': ['url(/audio/bell.aiff) -6dB', 'url(../clips-1/pop.au) 0', 'url(./audio/caution.wav) 6db'],
      'cue': ['url(/audio/bell.aiff) -6dB', 'url(../clips-1/pop.au) 0', 'url(./audio/caution.wav) 6db'].times(1, 2).concat(
        ['none', '-6dB', '0', '6db', 'url(../clips-2/pop.au)'].amp(
          ['url(\'bell.aiff\') -6dB', 'url(\'dong.wav\') 0', 'url(\'pop.au\') 6db']
        )
      ),
      'voice-family': ['neutral', 'preserve'].concat(
        ['child', 'young', 'old'].and(['male', 'female', 'neutral']),
        ['male', 'female', 'neutral'].and(['1']),
        ['child', 'young', 'old'].and(['male', 'female', 'neutral']).and(['1']),
        [
          'comedian, neutral', 'male, preserve', 'female, child male', 'romeo, young male 1',
          'young female, juliet', 'child male, male 1', 'young male 1, young female 2',
          'male, female, preserve'
        ]
      ),
      'voice-rate': ['normal', 'x-slow', 'slow', 'medium', 'fast', 'x-fast'].or(['0', '100%']),
      'voice-pitch': ['250Hz', '+250Hz', '-20Hz', '.2kHz'].amp(['absolute']).concat(
        ['x-low', 'low', 'medium', 'high', 'x-high'].or(
          ['0', '250Hz', '+250Hz', '-20Hz', '.2kHz', '-3.5st', '3.5st', '100%', '-100%']
        )
      ),
      'voice-range': ['250Hz', '+250Hz', '-20Hz', '.2kHz'].amp(['absolute']).concat(
        ['x-low', 'low', 'medium', 'high', 'x-high'].or(
          ['0', '250Hz', '+250Hz', '-20Hz', '.2kHz', '-3.5st', '3.5st', '100%', '-100%']
        )
      ),
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

  // New CSS Level 1
  'css-transforms-1': {
    'title': 'Transforms Level 1',
    'tr': 'http://www.w3.org/TR/css3-transforms/',
    'properties': {
      'transform': ['none', 'matrix(1, 2, 3, 4, 5, 6)'].concat([
        '0', '10px', '-20px', '50%'
        ].times(1, 2, ', ').map(function translate(arg) {
          return 'translate(' + arg + ')';
        }),
        ['0', '1px', '-20px', '50%'].map(function translateX(translationValue) {
          return 'translateX(' + translationValue + ')';
        }),
        ['0', '1px', '-20px', '50%'].map(function translateY(translationValue) {
          return 'translateY(' + translationValue + ')';
        }),
        ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function rotate(angle) {
          return 'rotate(' + angle + ')';
        }), [
         '90deg', '100grad', '1rad', '1turn'
        ].times(1, 2, ', ').map(function skew(arg) {
          return 'skew(' + arg + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function skewX(angle) {
          return 'skewX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function skewY(angle) {
          return 'skewY(' + angle + ')';
        }),
        ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
        [
          '0', '10px', '-20px', '50%'
        ].times(2, 2, ', ').map(function translate3d(arg) {
          return 'translate3d(' + arg + ', 10px)';
        }),
        ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function rotate3d(angle) {
          return 'rotate3d(1, 2, 3, ' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function rotateX(angle) {
          return 'rotateX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function rotateY(angle) {
          return 'rotateY(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function rotateZ(angle) {
          return 'rotateZ(' + angle + ')';
        }),
        [
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
        ]
      ),
      'transform-origin': [
        'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and([
          'top', 'center', 'bottom', '10%', '10px'
        ]).qmark(['10px']),
        ['center', 'left', 'right'].amp([
          'center', 'top', 'bottom'
        ]).qmark(['10px'])
      ).uniq(),
      'transform-style': ['flat', 'preserve-3d'],
      'perspective': ['none', '10px'],
      'perspective-origin': [
        'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and([
          'top', 'center', 'bottom', '10%', '10px'
        ]),
        ['center', 'left', 'right'].amp(['center', 'top', 'bottom'])
      ).uniq(),
      'backface-visibility': ['visible', 'hidden']
    }
  },

  'css-flexbox-1': {
    'title': 'Flexible Box Layout Level 1',
    'tr': 'http://www.w3.org/TR/css3-flexbox/',
    'properties': {
      'display': ['flex', 'inline-flex'],
      'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
      'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
      'flex-flow': ['row', 'row-reverse', 'column', 'column-reverse'].or(['nowrap', 'wrap', 'wrap-reverse']),
      'order': ['0', '1', '-1'],
      'flex': ['none'].concat(['1', '1 1'].or(['auto', '10px', '10%'])),
      'flex-grow': ['0', '5', '0.11'],
      'flex-shrink': ['1', '10', '0', '0.11'],
      'flex-basis': ['auto', '1px', '1%'],
      'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      'align-items': ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      'align-self': ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      'align-content': ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
    }
  },

  'css-grid-1': {
    'title': 'Grid Layout Level 1',
    'properties': {
      'display': ['grid', 'inline-grid'],
      'grid-template-columns': ['none'].concat(
        ['auto', '10px', '10%', '1fr', 'min-content', 'max-content'],
        [
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ].times(2, 2, ', ').map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        }),
        [
          'auto', '1px', '1%', '1fr', 'min-content', 'max-content',
          'minmax(1px, 1px)'
        ].map(function repeat(arg) {
          return 'repeat(1, ' + arg + ')';
        }),
        [
          'repeat(4, 250px 10px)',
          'repeat(4, (content) 10px)',
          'repeat(4, 10px (content))',
          'repeat(4, (first nav) 10px)',
          'repeat(4, 250px 10px 1px)',
          'repeat(2, 1fr auto minmax(30%, 1fr))',
          'repeat(4, (content) 250px 10px)',
          'repeat(4, 250px 10px (content))',
          'repeat(4, (content) 10px (repeat))',
          'repeat(4, 250px 10px 5px 1px)',
          'repeat(4, (content) 250px 10px 1px)',
          'repeat(4, 250px 10px 1px (repeat))',
          'repeat(4, (content) 250px 10px (repeat))',
          'repeat(4, (content) 1fr minmax(1px, 1px) (repeat))',
          'repeat(4, (first) 250px (content) 10px)',
          'repeat(4, 250px (content) 10px (repeat))',
          'repeat(4, 10px (col-start) 250px (col-end))',
          'repeat(4, (first) 250px (content) 10px (repeat))',
          'repeat(4, (first nav) 1fr (content) minmax(1px, 1px) (repeat))'
        ],
        [
          'auto auto', 'auto minmax(min-content, 1fr)', 'auto repeat(1, 10px)',
          'minmax(1px, 10px) auto', '10px repeat(2, 1fr auto minmax(30%, 1fr))',
          'repeat(4, 10px (col-start) 250px (col-end)) 10px',
          '(start) auto', '(first) repeat(2, 2px)',
          'auto (end)', '(first header) auto',
          'auto auto auto', '10px 10px 10px',
          'auto minmax(min-content, 1fr) auto',
          'auto minmax(min-content, 1fr) repeat(1, 10px)',
          '(start) auto minmax(min-content, 1fr)', '(first) 10px 30%',
          'auto repeat(1, 10px) (end)', '(start) auto (end)',
          '(first) repeat(2, 2px) (content)',
          'auto auto minmax(min-content, 1fr) auto',
          '100px 1fr max-content minmax(min-content, 1fr)',
          '150px (item1-start) 1fr (item1-end)',
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
        ],
        [
          'subgrid', 'subgrid (content)', 'subgrid repeat(1, (content))',
          'subgrid (content) (repeat)',
          'subgrid repeat(1, (content)) repeat(2, (repeat))',
          'subgrid (content) repeat(2, (repeat))',
          'subgrid repeat(1, (content)) (repeat)',
          'subgrid (first) (content) (repeat)',
          'subgrid (first) (second) (third) (fourth) (fifth)'
        ]
      ),
      'grid-template-rows': ['none'].concat(
        ['auto', '10px', '10%', '1fr', 'min-content', 'max-content'],
        [
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ].times(2, 2, ', ').map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        }),
        [
          'auto', '1px', '1%', '1fr', 'min-content', 'max-content',
          'minmax(1px, 1px)'
        ].map(function repeat(arg) {
          return 'repeat(1, ' + arg + ')';
        }),
        [
          'repeat(4, 250px 10px)',
          'repeat(4, (content) 10px)',
          'repeat(4, 10px (content))',
          'repeat(4, (first nav) 10px)',
          'repeat(4, 250px 10px 1px)',
          'repeat(2, 1fr auto minmax(30%, 1fr))',
          'repeat(4, (content) 250px 10px)',
          'repeat(4, 250px 10px (content))',
          'repeat(4, (content) 10px (repeat))',
          'repeat(4, 250px 10px 5px 1px)',
          'repeat(4, (content) 250px 10px 1px)',
          'repeat(4, 250px 10px 1px (repeat))',
          'repeat(4, (content) 250px 10px (repeat))',
          'repeat(4, (content) 1fr minmax(1px, 1px) (repeat))',
          'repeat(4, (first) 250px (content) 10px)',
          'repeat(4, 250px (content) 10px (repeat))',
          'repeat(4, 10px (col-start) 250px (col-end))',
          'repeat(4, (first) 250px (content) 10px (repeat))',
          'repeat(4, (first nav) 1fr (content) minmax(1px, 1px) (repeat))'
        ],
        [
          'auto auto', 'auto minmax(min-content, 1fr)', 'auto repeat(1, 10px)',
          'minmax(1px, 10px) auto', '10px repeat(2, 1fr auto minmax(30%, 1fr))',
          'repeat(4, 10px (col-start) 250px (col-end)) 10px',
          '(start) auto', '(first) repeat(2, 2px)',
          'auto (end)', '(first header) auto',
          'auto auto auto', '10px 10px 10px',
          'auto minmax(min-content, 1fr) auto',
          'auto minmax(min-content, 1fr) repeat(1, 10px)',
          '(start) auto minmax(min-content, 1fr)', '(first) 10px 30%',
          'auto repeat(1, 10px) (end)', '(start) auto (end)',
          '(first) repeat(2, 2px) (content)',
          'auto auto minmax(min-content, 1fr) auto',
          '100px 1fr max-content minmax(min-content, 1fr)',
          '150px (item1-start) 1fr (item1-end)',
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
        ],
        [
          'subgrid', 'subgrid (content)', 'subgrid repeat(1, (content))',
          'subgrid (content) (repeat)',
          'subgrid repeat(1, (content)) repeat(2, (repeat))',
          'subgrid (content) repeat(2, (repeat))',
          'subgrid repeat(1, (content)) (repeat)',
          'subgrid (first) (content) (repeat)',
          'subgrid (first) (second) (third) (fourth) (fifth)'
        ]
      ),
      'grid-template-areas': [
        'none', '\'nav\'', '\'.\'', '\'head head\' \'nav main\' \'foot .\''
      ],
      'grid-template': [
        'none', '\'nav\'', '\'.\'', '\'head head\' \'nav main\' \'foot .\''
      ].concat(
        ['none'].concat(
          ['auto', '10px', '10%', '1fr', 'min-content', 'max-content'],
          [
            '10px', '10%', '1fr', 'min-content', 'max-content'
          ].times(2, 2, ', ').map(function minmax(arg) {
            return 'minmax(' + arg + ')';
          }),
          [
            'auto', '1px', '1%', '1fr', 'min-content', 'max-content',
            'minmax(1px, 1px)'
          ].map(function repeat(arg) {
            return 'repeat(1, ' + arg + ')';
          }),
          [
            'repeat(4, 250px 10px)',
            'repeat(4, (content) 10px)',
            'repeat(4, 10px (content))',
            'repeat(4, (first nav) 10px)',
            'repeat(4, 250px 10px 1px)',
            'repeat(2, 1fr auto minmax(30%, 1fr))',
            'repeat(4, (content) 250px 10px)',
            'repeat(4, 250px 10px (content))',
            'repeat(4, (content) 10px (repeat))',
            'repeat(4, 250px 10px 5px 1px)',
            'repeat(4, (content) 250px 10px 1px)',
            'repeat(4, 250px 10px 1px (repeat))',
            'repeat(4, (content) 250px 10px (repeat))',
            'repeat(4, (content) 1fr minmax(1px, 1px) (repeat))',
            'repeat(4, (first) 250px (content) 10px)',
            'repeat(4, 250px (content) 10px (repeat))',
            'repeat(4, 10px (col-start) 250px (col-end))',
            'repeat(4, (first) 250px (content) 10px (repeat))',
            'repeat(4, (first nav) 1fr (content) minmax(1px, 1px) (repeat))'
          ],
          [
            'auto auto', 'auto minmax(min-content, 1fr)', 'auto repeat(1, 10px)',
            'minmax(1px, 10px) auto', '10px repeat(2, 1fr auto minmax(30%, 1fr))',
            'repeat(4, 10px (col-start) 250px (col-end)) 10px',
            '(start) auto', '(first) repeat(2, 2px)',
            'auto (end)', '(first header) auto',
            'auto auto auto', '10px 10px 10px',
            'auto minmax(min-content, 1fr) auto',
            'auto minmax(min-content, 1fr) repeat(1, 10px)',
            '(start) auto minmax(min-content, 1fr)', '(first) 10px 30%',
            'auto repeat(1, 10px) (end)', '(start) auto (end)',
            '(first) repeat(2, 2px) (content)',
            'auto auto minmax(min-content, 1fr) auto',
            '100px 1fr max-content minmax(min-content, 1fr)',
            '150px (item1-start) 1fr (item1-end)',
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
          ],
          [
            'subgrid', 'subgrid (content)', 'subgrid repeat(1, (content))',
            'subgrid (content) (repeat)',
            'subgrid repeat(1, (content)) repeat(2, (repeat))',
            'subgrid (content) repeat(2, (repeat))',
            'subgrid repeat(1, (content)) (repeat)',
            'subgrid (first) (content) (repeat)',
            'subgrid (first) (second) (third) (fourth) (fifth)'
          ]
        ).and(['none'], ' / '),
        [
          '(start) "nav"', '"nav" auto (end)', '(start) "nav" auto (end)',
          'auto / "nav"', 'auto / (start) "nav"', 'auto / "nav" auto (end)',
          'auto / "head" "nav" "main" "foot"', 'none / (start) "nav" auto (end)',
          'auto 1fr auto / auto 1fr',
          '(start) auto (end) / (first) "content" auto (last)',
          'auto 1fr auto / (header-top) "a   a   a" (header-bottom) ' +
            '(main-top) "b   b   b" 1fr (main-bottom)',
          '(first header) minmax(min-content, max-content) auto max-content ' +
              'repeat(4, (content) 1fr minmax(1px, 1px) (repeat)) (middle) ' +
              '1fr (last footer) / (start) "nav" auto (end)'
        ]
      ),
      'grid-auto-columns': [
        'auto', '10px', '10%', '1fr', 'min-content', 'max-content'
      ].concat([
        '10px', '10%', '1fr', 'min-content', 'max-content'
      ].times(2, 2, ', ').map(function minmax(arg) {
        return 'minmax(' + arg + ')';
      })),
      'grid-auto-rows': [
        'auto', '10px', '10%', '1fr', 'min-content', 'max-content'
      ].concat([
        '10px', '10%', '1fr', 'min-content', 'max-content'
      ].times(2, 2, ', ').map(function minmax(arg) {
        return 'minmax(' + arg + ')';
      })),
      'grid-auto-flow': ['none'].concat(
        ['rows', 'columns'], ['rows', 'columns'].amp(['dense'])
      ),
      'grid-auto-position': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ).times(2, 2, ' / '),
      'grid': [
        'none', '\'nav\'', '\'.\'', '\'head head\' \'nav main\' \'foot .\''
      ].concat(
        ['none'].concat(
          ['auto', '10px', '10%', '1fr', 'min-content', 'max-content'],
          [
            '10px', '10%', '1fr', 'min-content', 'max-content'
          ].times(2, 2, ', ').map(function minmax(arg) {
            return 'minmax(' + arg + ')';
          }),
          [
            'auto', '1px', '1%', '1fr', 'min-content', 'max-content',
            'minmax(1px, 1px)'
          ].map(function repeat(arg) {
            return 'repeat(1, ' + arg + ')';
          }),
          [
            'repeat(4, 250px 10px)',
            'repeat(4, (content) 10px)',
            'repeat(4, 10px (content))',
            'repeat(4, (first nav) 10px)',
            'repeat(4, 250px 10px 1px)',
            'repeat(2, 1fr auto minmax(30%, 1fr))',
            'repeat(4, (content) 250px 10px)',
            'repeat(4, 250px 10px (content))',
            'repeat(4, (content) 10px (repeat))',
            'repeat(4, 250px 10px 5px 1px)',
            'repeat(4, (content) 250px 10px 1px)',
            'repeat(4, 250px 10px 1px (repeat))',
            'repeat(4, (content) 250px 10px (repeat))',
            'repeat(4, (content) 1fr minmax(1px, 1px) (repeat))',
            'repeat(4, (first) 250px (content) 10px)',
            'repeat(4, 250px (content) 10px (repeat))',
            'repeat(4, 10px (col-start) 250px (col-end))',
            'repeat(4, (first) 250px (content) 10px (repeat))',
            'repeat(4, (first nav) 1fr (content) minmax(1px, 1px) (repeat))'
          ],
          [
            'auto auto', 'auto minmax(min-content, 1fr)', 'auto repeat(1, 10px)',
            'minmax(1px, 10px) auto', '10px repeat(2, 1fr auto minmax(30%, 1fr))',
            'repeat(4, 10px (col-start) 250px (col-end)) 10px',
            '(start) auto', '(first) repeat(2, 2px)',
            'auto (end)', '(first header) auto',
            'auto auto auto', '10px 10px 10px',
            'auto minmax(min-content, 1fr) auto',
            'auto minmax(min-content, 1fr) repeat(1, 10px)',
            '(start) auto minmax(min-content, 1fr)', '(first) 10px 30%',
            'auto repeat(1, 10px) (end)', '(start) auto (end)',
            '(first) repeat(2, 2px) (content)',
            'auto auto minmax(min-content, 1fr) auto',
            '100px 1fr max-content minmax(min-content, 1fr)',
            '150px (item1-start) 1fr (item1-end)',
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
          ],
          [
            'subgrid', 'subgrid (content)', 'subgrid repeat(1, (content))',
            'subgrid (content) (repeat)',
            'subgrid repeat(1, (content)) repeat(2, (repeat))',
            'subgrid (content) repeat(2, (repeat))',
            'subgrid repeat(1, (content)) (repeat)',
            'subgrid (first) (content) (repeat)',
            'subgrid (first) (second) (third) (fourth) (fifth)'
          ]
        ).and(['none'], ' / '),
        [
          '(start) "nav"', '"nav" auto (end)', '(start) "nav" auto (end)',
          'auto / "nav"', 'auto / (start) "nav"', 'auto / "nav" auto (end)',
          'auto / "head" "nav" "main" "foot"', 'none / (start) "nav" auto (end)',
          'auto 1fr auto / auto 1fr',
          '(start) auto (end) / (first) "content" auto (last)',
          'auto 1fr auto / (header-top) "a   a   a" (header-bottom) ' +
            '(main-top) "b   b   b" 1fr (main-bottom)',
          '(first header) minmax(min-content, max-content) auto max-content ' +
              'repeat(4, (content) 1fr minmax(1px, 1px) (repeat)) (middle) ' +
              '1fr (last footer) / (start) "nav" auto (end)'
        ],
        [
          'none auto', 'none auto / auto',
          'rows dense minmax(10px, 10px) / minmax(min-content, max-content)'
        ]
        /*['none'].concat(
          ['rows', 'columns'], ['rows', 'columns'].amp(['dense'])
        ).and([
          'auto', '10px', '10%', '1fr', 'min-content', 'max-content'
        ].concat([
          '10px', '10%', '1fr', 'min-content', 'max-content'
        ].times(2, 2, ', ').map(function minmax(arg) {
          return 'minmax(' + arg + ')';
        })).times(1, 2, ' / '))*/
      ),
      'grid-row-start': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ),
      'grid-column-start': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ),
      'grid-row-end': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ),
      'grid-column-end': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ),
      'grid-column': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ).times(1, 2, ' / '),
      'grid-row': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ).times(1, 2, ' / '),
      'grid-area': ['auto'].concat(
        ['1'].or(['ident']), ['span'].amp(['1'].or(['ident']))
      ).times(1, 2, ' / ').concat([
        'auto / auto / auto', 'auto / auto / auto / auto'
      ])
    },
    'values': {
      'properties': [
        'grid-template-columns',
        'grid-template-rows',
        'grid-auto-columns',
        'grid-auto-rows',
        'grid-columns',
        'grid-rows'
      ],
      'fr': '1fr'
    }
  },

  'css-exclusions-1': {
    'title': 'Exclusions Level 1',
    'tr': 'http://www.w3.org/TR/css3-exclusions/',
    'properties': {
      'wrap-flow': ['auto', 'both', 'start', 'end', 'minimum', 'maximum', 'clear'],
      'wrap-through': ['wrap', 'none']
    }
  },

  'css-shapes-1': {
    'title': 'Shapes Level 1',
    'properties': {
      'shape-outside': ['auto'].concat(
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
        ['nonzero', 'evenodd'].qmark(
          ['10px', '10%'].times(2).times(1, 2, ', '), ', ', {former: true}
        ).map(function polygon(arg) {
          return 'polygon(' + arg + ')';
        }),
        ['url(foo.png)', 'linear-gradient(white, black)']
      ),
      'shape-image-threshold': ['0.0', '0.5', '1.0'],
      'shape-margin': ['0', '1px']
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
    },
    'selectors': {
      '::region()': ['#region-1::region(p)']
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

  'css-variables-1': {
    'title': 'Custom Properties for Cascading Variables Level 1',
    'tr': 'http://www.w3.org/TR/css-variables/',
    'values': {
      'properties': ['background-color', 'var-foo'],
      'var()': [
        'var(color)', 'var(header-color)', 'var(header-color, blue)'
        /*, 'calc(var(gap) * 1px)'*/
      ]
    }/*,
    // 'var-*' must be checked by element.style.var.*.
    'properties': {
      'var-*': ['var-foo', 'var-FOO', 'var-header-color']
    }*/
  },

  'css-size-adjust': {
    'title': 'Mobile Text Size Adjustment Level 1',
    'properties': {
      'text-size-adjust': ['auto', 'none', '50%']
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
        ['nonzero', 'evenodd'].qmark(
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
        '45deg'/*, '1turn', '100grad', '2rad'*/, 'to left', 'to left top'
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
          [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          )*/,
          ', '
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
        /*'at'*/'10px', 'at left', '10px at left',
        'ellipse 10% 20% at top 30% left 40%'
      ]/*.and(
        ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq()
      ).concat(
        ['circle'].or(['10px']).concat(
          ['ellipse'].or(['10px', '10%'].times(2)),
          ['circle', 'ellipse'].or([
            'closest-corner', 'closest-side', 'farthest-corner', 'farthest-side'
          ])
        ).uniq().and(['at'].and(
          ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
            ['left', 'center', 'right', '10%', '10px'].and([
              'top', 'center', 'bottom', '10%', '10px'
            ]),
            ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
              ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
            )
          ).uniq()
        ))
      )*/.qmark(
        ['10px', '10%'].and(['white']).concat(
          ['white'].amp(['10px', '10%'].times(2))
        ).qmark(
          ['10px', '10%'].times(1, 2).concat(
            ['10px', '10%'].and(['white']),
            ['white'].amp(['10px', '10%'].times(2))
          )/*.times(1, 2, ', ')*/, ', '
        ).and(
          [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          )*/,
          ', '
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
        '10% 100px ellipse at top 10% right 10px, white, white, white 10px, ' +
          'white 10px 10px',
        '10% 100px ellipse at top 10% right 10px, white 10px 10%, black, ' +
          '10px, 10%, 13% 10px blue, 50% 10px red',
        'ellipse 10% 20% at top 30% left 40%, white, currentColor, #0000FF, ' +
          'rgba(255, 255, 0, 0.5), hsla(240, 100%, 50%, 0.5) 80%, ' +
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
       /*'conic-gradient()': ['at'].and(
        ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq()
      ).qmark(
        ['white'].qmark(['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2), ' ', {amp: true}).qmark(
          ['white'].or(['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2)).times(1, 2, ', '), ', '
        ).and(['white'].qmark(['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2), ' ', {amp: true}), ', '),
        ', ',
        {former: true}
      ).map(function conicGradient(arg) {
        return 'conic-gradient(' + arg + ')';
      }),*/
      'conic-gradient()': ['white'].qmark([
        '45deg'/*, '1turn', '100grad', '2rad'*/, '10%'
      ].times(1, 2), ' ', {amp: true}).qmark(
        ['white'].or([
          '45deg'/*, '1turn', '100grad', '2rad'*/, '10%'
        ].times(1, 2))/*.times(1, 2, ', ')*/,
        ', '
      ).and(
        ['white']/*.qmark([
          '45deg', '1turn', '100grad', '2rad', '10%'
        ].times(1, 2), ' ', {amp: true})*/,
        ', '
      ).concat(
        ['at'].and(
          ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
            ['left', 'center', 'right', '10%', '10px'].and([
              'top', 'center', 'bottom', '10%', '10px'
            ]),
            ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
              ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
            )
          ).uniq()
        ).and(['white, black'], ', '), [
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
        '45deg'/*, '1turn', '100grad', '2rad'*/, 'to left', 'to left top'
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
          [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          )*/,
          ', '
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
        /*'at'*/'10px', 'at left', '10px at left',
        'ellipse 10% 20% at top 30% left 40%'
      ]/*.and(
        ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq()
      ).concat(
        ['circle'].or(['10px']).concat(
          ['ellipse'].or(['10px', '10%'].times(2)),
          ['circle', 'ellipse'].or([
            'closest-corner', 'closest-side', 'farthest-corner', 'farthest-side'
          ])
        ).uniq().and(['at'].and(
          ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
            ['left', 'center', 'right', '10%', '10px'].and([
              'top', 'center', 'bottom', '10%', '10px'
            ]),
            ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
              ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
            )
          ).uniq()
        ))
      )*/.qmark(
        ['10px', '10%'].and(['white']).concat(
          ['white'].amp(['10px', '10%'].times(2))
        ).qmark(
          ['10px', '10%'].times(1, 2).concat(
            ['10px', '10%'].and(['white']),
            ['white'].amp(['10px', '10%'].times(2))
          )/*.times(1, 2, ', ')*/, ', '
        ).and(
          [/*'10px', '10%'*/'white']/*.and(['white']).concat(
            ['white'].amp(['10px', '10%'].times(2))
          )*/,
          ', '
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
        '10% 100px ellipse at top 10% right 10px, white, white, white 10px, ' +
          'white 10px 10px',
        '10% 100px ellipse at top 10% right 10px, white 10px 10%, black, ' +
          '10px, 10%, 13% 10px blue, 50% 10px red',
        'ellipse 10% 20% at top 30% left 40%, white, currentColor, #0000FF, ' +
          'rgba(255, 255, 0, 0.5), hsla(240, 100%, 50%, 0.5) 80%, ' +
          'lightgoldenrodyellow, transparent 100% 10px',
        '10% 100px ellipse at top 10% right 10px, currentColor 50%, ' +
          '#0000FF 60%, rgba(255, 255, 0, 0.5) 70%, ' +
          'hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, ' +
          'transparent 10px 100%'
      ]).map(function repeatingRadialGradient(arg) {
        return 'repeating-radial-gradient(' + arg + ')';
      }),
       /*'repeating-conic-gradient()': ['at'].and(
        ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq()
      ).qmark(
        ['white'].qmark(['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2), ' ', {amp: true}).qmark(
          ['white'].or(['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2)).times(1, 2, ', '), ', '
        ).and(['white'].qmark(['45deg', '1turn', '100grad', '2rad', '10%'].times(1, 2), ' ', {amp: true}), ', '),
        ', ',
        {former: true}
      ).map(function repeatingConicGradient(arg) {
        return 'repeating-conic-gradient(' + arg + ')';
      }),*/
      'repeating-conic-gradient()': ['white'].qmark([
        '45deg'/*, '1turn', '100grad', '2rad'*/, '10%'
      ].times(1, 2), ' ', {amp: true}).qmark(
        ['white'].or([
          '45deg'/*, '1turn', '100grad', '2rad'*/, '10%'
        ].times(1, 2))/*.times(1, 2, ', ')*/,
        ', '
      ).and(
        ['white']/*.qmark([
          '45deg', '1turn', '100grad', '2rad', '10%'
        ].times(1, 2), ' ', {amp: true})*/,
        ', '
      ).concat(
        ['at'].and(
          ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
            ['left', 'center', 'right', '10%', '10px'].and([
              'top', 'center', 'bottom', '10%', '10px'
            ]),
            ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
              ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
            )
          ).uniq()
        ).and(['white, black'], ', '), [
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
      'image-orientation': ['from-image'].concat([
        '45deg', '1turn', '100grad', '2rad'
      ].qmark(['flip'], ' ', {former: true})),
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
        ['active'].or(['valid'], ['invalid']).map(function (arg) {
          return ':drop(' + arg + ')'
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
        ':lang(de-*)',':lang(*-CH)' , ':lang(en, ja)', ':lang(zh, *-hant)'
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
      ':nth-match(an+b of <selector>)': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1',
        '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1',
        '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1',
        '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1',
        '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10',
        '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-match(' + nth + ' of .foo)';
      }).concat([':nth-match(2n+1 of .foo, #bar)']),
      ':nth-last-match(an+b of <selector>)': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1',
        '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1',
        '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1',
        '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1',
        '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10',
        '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-last-match(' + nth + ' of #example)';
      }).concat([':nth-last-match(even of #example > div, .foo)']),
      ':nth-column()': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1',
        '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1',
        '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1',
        '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1',
        '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10',
        '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-column(' + nth + ')';
      }),
      ':nth-last-column()': [
        'n', '-n', '+n', '1n', '-1n', '+1n', '0n', '-0n', '+0n',
        '10n', '-10n', '+10n', '01n', '-01n', '+01n', '00n', '-00n', '+00n',
        'n-1', '-n-1', '+n-1', '1n-1', '-1n-1',
        '+1n-1', '0n-1', '-0n-1', '+0n-1',
        '10n-1', '-10n-1', '+10n-1', '01n-1', '-01n-1',
        '+01n-1', '00n-1', '-00n-1', '+00n-1',
        'n+1', '-n+1', '+n+1', '1n+1', '-1n+1',
        '+1n+1', '0n+1', '-0n+1', '+0n+1',
        '10n+1', '-10n+1', '+10n+1', '01n+1', '-01n+1',
        '+01n+1', '00n+1', '-00n+1', '+00n+1',
        'n+0', 'n+00', '3n +1', '3n- 1', '3n + 1',
        '0', '1', '10', '01', '00', '-0', '-1', '-10',
        '-01', '-00', '+0', '+1', '+10', '+01', '+00',
        'odd', 'even'
      ].map(function (nth) {
        return ':nth-last-column(' + nth + ')';
      })
    }
  },

  'mediaqueries4': {
    'title': 'Media Queries Level 4',
    'Media queries': {
      'script': [
        '(script)',
        'not all and (script: 0)', 'not all and (script: -0)', '(script: 1)'
      ],
      'pointer': [
        '(pointer)', '(pointer: none)', '(pointer: coarse)', '(pointer: fine)'
      ],
      'hover': ['(hover)', '(hover: 0)', '(hover: -0)', '(hover: 1)'],
      'luminosity': [
        '(luminosity)',
        '(luminosity: dim)', '(luminosity: normal)', '(luminosity: washed)'
      ]
    }
  },

  // No Ready CSS Level 4
  'css-backgrounds-4': {
    'title': 'Backgrounds and Borders Level 4',
    'properties': {
      'border-corner-shape': ['curve', 'bevel', 'scoop', 'notch'],
      'border-image': ['10', '30%'].times(1, 4).concat(
        ['10', '30%'].times(1, 4).amp(['fill'])
      ).and([' / ']),
      'border-clip': ['normal'].concat(
        ['10px', '10%', '1fr'].times(1, 3),
        ['0 10px 1fr 10px', '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr']
      ),
      'border-clip-top': ['normal'].concat(
        ['10px', '10%', '1fr'].times(1, 3),
        ['0 10px 1fr 10px', '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr']
      ),
      'border-clip-right': ['normal'].concat(
        ['10px', '10%', '1fr'].times(1, 3),
        ['0 10px 1fr 10px', '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr']
      ),
      'border-clip-bottom': ['normal'].concat(
        ['10px', '10%', '1fr'].times(1, 3),
        ['0 10px 1fr 10px', '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr']
      ),
      'border-clip-left': ['normal'].concat(
        ['10px', '10%', '1fr'].times(1, 3),
        ['0 10px 1fr 10px', '3fr 10px 2fr 10px 1fr 10px 10px 10px 1fr 10px 2fr 10px 3fr']
      ),
      'border-top-parts': [
        'repeat(10px 10px)', 'repeat(10px 10px) 1fr',
        '40px 20px 0 1fr repeat(20px 20px) 0 1fr 40px',
        '40px 20px 0 1fr 20px 20px 0 1fr 40px'
      ]
    }
  },

  'css-text-4': {
    'title': 'Text Level 4',
    'properties': {
      'text-transform': ['capitalize', 'uppercase', 'lowercase'].or(
        ['full-width'], ['full-size-kana']
      ).slice(4),
      'text-space-collapse': ['collapse', 'discard'].concat(
        ['preserve', 'preserve-breaks'].amp(['trim-inner'].or(['consume-before'], ['consume-after']))
      ),
      'hyphenate-character': ['auto', '\'\2010\''],
      'hyphenate-limit-zone': ['0', '10%', '10px'],
      'hyphenate-limit-chars': ['auto', '1'].times(1, 3),
      'hyphenate-limit-lines': ['no-limit ', '1'],
      'hyphenate-limit-last': ['none ', 'always', 'column', 'page', 'spread'],
      'text-wrap': ['normal', 'none', 'avoid'],
      'overflow-wrap': ['hyphenate'].concat(['break-word'].amp(['hyphenate'])),
      'text-align': ['\'foo\''].and(['start', 'end', 'left', 'right', 'center', 'justify']),
      'text-justify': ['inter-ideograph', 'inter-cluster', 'kashida'],
      'word-spacing': ['normal', '1em', '50%'].times(2, 3),
      'letter-spacing': ['50%'].concat(['normal', '1em', '50%'].times(2, 3)),
      'text-spacing': [
        'normal', 'none', 'trim-start', 'space-start',
        'trim-end', 'space-end', 'allow-end', 'trim-adjacent', 'space-adjacent',
        'no-compress', 'ideograph-alpha', 'ideograph-numeric', 'punctuation',
        'trim-start trim-end', 'trim-end trim-start',
        'no-compress ideograph-alpha ideograph-numeric punctuation',
        'trim-start trim-end trim-adjacent no-compress ideograph-alpha ideograph-numeric punctuation'
      ],
      'text-decoration-line': ['remove-all'].concat(
        ['underline', 'no-underline', 'replace-underline'].or(
          ['overline', 'no-overline', 'replace-overline'],
          ['line-through', 'no-line-through', 'replace-line-through']
        ).filter(function (val) {
          return this.indexOf(val) === -1;
        }, ['underline'].or(['overline'], ['line-through']))
      ),
      'text-decoration': ['remove-all '].concat(
        ['underline', 'no-underline', 'replace-underline'].or(
          ['overline', 'no-overline', 'replace-overline'],
          ['line-through', 'no-line-through', 'replace-line-through']
        ).filter(function (val) {
          return this.indexOf(val) === -1;
        }, ['underline'].or(['overline'], ['line-through'])),
        [
          'remove-all solid', 'solid remove-all',
          'remove-all solid black', 'underline overline no-line-through solid black'
        ]
      ),
      'text-underline-position': ['below left', 'below right'],
      'text-emphasis-position': ['above', 'below'].amp(['right', 'left']),
      'text-emphasis-skip': ['spaces'].or(['punctuation'], ['symbols'], ['narrow']),
      'text-shadow': [
        '1px 2px 3px 4px', '1px 2px 3px 4px purple', 'pink 1px 2px 3px 4px',
        'inset 1px 2px', '1px 2px inset', 'inset 1px 2px 3px', '1px 2px 3px inset',
        'inset 1px 2px 3px 4px', '1px 2px 3px 4px inset',
        'inset 1px 2px red', '1px 2px red inset', 'inset blue 1px 2px', 'blue 1px 2px inset',
        'inset 1px 2px 3px yellow', '1px 2px 3px yellow inset',
        'inset green 1px 2px 3px', 'green 1px 2px 3px inset',
        'inset 1px 2px 3px 4px purple', '1px 2px 3px 4px purple inset',
        'inset pink 1px 2px 3px 4px', 'pink 1px 2px 3px 4px inset',
        '1px 2px, inset 1px 2px', '1px 2px 3px 4px, 1px 2px 3px 4px',
        '1px 2px, 1px 2px, inset 1px 2px'
      ]
    }
  },/*

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
      'rgb()': ['rgba(1.1, 0, 0)', 'rgba(1.1, 1.2, 0)', 'rgba(1.1, 1.2, 1.3)'],
      'rgba()': [
        'rgba(1.1, 0, 0, 1)', 'rgba(1.1, 1.2, 0, 1)', 'rgba(1.1, 1.2, 1.3, 1)',
        'rgba(0, 0, 0, 10%)'
      ],
      'hsl()': ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
        return 'hsl(' + angle + ', 0%, 0%)';
      }),
      'hsla()': ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
        return 'hsla(' + angle + ', 0%, 0%, 0.99)';
      }).concat(['hsla(0, 0%, 0%, 10%)'])
    },
    'properties': {
      'opacity': '10%',
      'color-correction': 'auto'
    }
  },*/

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
  'filters': {
    'title': 'Filter Effects 1.0',
    'tr': 'http://www.w3.org/TR/filter-effects/',
    'dev': 'http://dev.w3.org/fxtf/filters/',
    'properties': {
      'filter': [
        'none',
        'grayscale(10)', 'grayscale(100%)', 'sepia(50)', 'sepia(10%)',
        'saturate(10)', 'saturate(50%)',
        'hue-rotate(90deg)', 'hue-rotate(1turn)', 'hue-rotate(100grad)',
        'hue-rotate(2rad)',
        'invert(100)', 'invert(0%)', 'opacity(1)', 'opacity(25%)',
        'brightness(15)', 'brightness(15%)', 'contrast(45)', 'contrast(1%)',
        'blur(10px)'
      ].concat(
        ['10px'].times(2, 3).qmark(
          ['white'], ' ', {amp: true}
        ).map(function dropShadow(shadow) {
          return 'drop-shadow(' + shadow + ')';
        }),
        ['custom(warp)'],
        ['warp, param'].and(['matrix(1, 2, 3, 4, 5, 6)'].concat(
          ['0', '10px', '-20px', '50%'].times(
            1, 2, ', '
          ).map(function translate(arg) {
            return 'translate(' + arg + ')';
          }), [
            '0', '1px', '-20px', '50%'
          ].map(function translateX(translationValue) {
            return 'translateX(' + translationValue + ')';
          }), [
            '0', '1px', '-20px', '50%'
          ].map(function translateY(translationValue) {
            return 'translateY(' + translationValue + ')';
          }),
          ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
          ['90deg', '100grad', '1rad', '1turn'].map(function rotate(angle) {
            return 'rotate(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].times(
            1, 2, ', '
          ).map(function skew(arg) {
            return 'skew(' + arg + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function skewX(angle) {
            return 'skewX(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function skewY(angle) {
            return 'skewY(' + angle + ')';
          }),
          ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
          ['0', '10px', '-20px', '50%'].times(
            2, 2, ', '
          ).map(function translate3d(arg) {
            return 'translate3d(' + arg + ', 10px)';
          }),
          ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
          ['90deg', '100grad', '1rad', '1turn'].map(function rotate3d(angle) {
            return 'rotate3d(1, 2, 3, ' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function rotateX(angle) {
            return 'rotateX(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function rotateY(angle) {
            return 'rotateY(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function rotateZ(angle) {
            return 'rotateZ(' + angle + ')';
          }),
          [
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
          ],
          ['1'].times(1, 4),
          ['array(1)', 'array(1, 2)'],
          ['1'].times(4, 4, ', ').map(function mat2(arg) {
            return 'mat2(' + arg + ')';
          }),
          ['1'].times(9, 9, ', ').map(function mat3(arg) {
            return 'mat3(' + arg + ')';
          }),
          ['1'].times(16, 16, ', ').map(function mat4(arg) {
            return 'mat4(' + arg + ')';
          }),
          ['white', 'url(foo.png)']
        )).map(function (arg) {
          return 'custom(' + arg + ')';
        }),
        [
          'custom(warp, warp 1, warp 1)',
          'custom(warp, param matrix(1, 2, 3, 4, 5, 6), shader rotate(90deg))',
          'custom(warp, distortAmount 0.5, lightVector 1.0 1.0 0.0, ' +
            'disp texture(disp.png))',
          'url(commonmasks.svg#filter)',
          'select(div)', 'select(filter:last-of-type)', 'select(div, div)',
          'select(div:first-child, div:last-child)', 'child',
          'url(foo.png), grayscale(10)',
          'linear-gradient(white, black), grayscale(10)',
          '"foo.png", grayscale(10)',
          'url(foo.png), url(commonmasks.svg#filter)',
          'url(foo.png), select(div:first-child)',
          'url(foo.png), custom(warp)',
          'linear-gradient(white, black), sepia(50%) contrast(50%)',
          'linear-gradient(white, black), invert(0%) ' +
            'custom(warp, param matrix(1, 2, 3, 4, 5, 6), ' +
            'shader rotate(90deg)) ' +
            'url(commonmasks.svg#filter) select(div, div:last-child)'
        ]
      ),
      'flood-color': [
        'black', 'currentColor',
        'black icc-color(white, 1)', '#ffffff icc-color(white, 1, 2)'
      ],
      'flood-opacity': ['1', '10%'],
      'color-interpolation-filters': ['linearRGB', 'auto', 'sRGB'],
      'lighting-color': [
        'white', 'currentColor',
        'black icc-color(white, 1)', '#ffffff icc-color(white, 1, 2)'
      ]
    },
    '@rules': {
      '@supports': '@supports filter(webgl)',
      '@filter': '@filter warp'
    },
    'descriptors': {
      'atrule': '@filter warp',
      'atruleName': '@filter',
      'src': [
        'url(#warp)',
        'url(\'simple.vs\')',
        'url(\'simple.vs\') format(\'x-shader/x-vertex\')',
        'url(\'simple.vs\'), url(simple.fs)',
        'url(\'simple.vs\') format(\'x-shader/x-vertex\'), ' +
          'url(simple.fs) format(\'x-shader/x-fragment\')'
      ],
      'parameters': ['warp'].and(['matrix(1, 2, 3, 4, 5, 6)'].concat(
        ['0', '10px', '-20px', '50%'].times(
          1, 2, ', '
        ).map(function translate(arg) {
          return 'translate(' + arg + ')';
        }),
        ['0', '1px', '-20px', '50%'].map(function translateX(translationValue) {
          return 'translateX(' + translationValue + ')';
        }),
        ['0', '1px', '-20px', '50%'].map(function translateY(translationValue) {
          return 'translateY(' + translationValue + ')';
        }),
        ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function rotate(angle) {
          return 'rotate(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].times(
          1, 2, ', '
        ).map(function skew(arg) {
          return 'skew(' + arg + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function skewX(angle) {
          return 'skewX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function skewY(angle) {
          return 'skewY(' + angle + ')';
        }),
        ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
        ['0', '10px', '-20px', '50%'].times(
          2, 2, ', '
        ).map(function translate3d(arg) {
          return 'translate3d(' + arg + ', 10px)';
        }),
        ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function rotate3d(angle) {
          return 'rotate3d(1, 2, 3, ' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function rotateX(angle) {
          return 'rotateX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function rotateY(angle) {
          return 'rotateY(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function rotateZ(angle) {
          return 'rotateZ(' + angle + ')';
        }),
        [
          'perspective(10px)', 'matrix(1, 2, 3, 4, 5, 6) translate(0)',
          'scale(2, -1) scaleY(2.5) matrix(1, -.2, 0, 1, 10, 10)',
          'translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)',
          'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) ' +
            'translate3d(0, 0, 10px)',
          'scale3d(1, 0, -1) rotateX(-45deg) rotateY(-45deg) rotateZ(-45deg)',
          'translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) ' +
            'scale3d(-1, 0, .5)',
          'matrix(1, 2, 3, 4, 5, 6) ' +
            'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'
        ],
        ['1'].times(1, 4),
        ['array(1)', 'array(1, 2)'],
        ['1'].times(4, 4, ', ').map(function mat2(arg) {
          return 'mat2(' + arg + ')';
        }),
        ['1'].times(9, 9, ', ').map(function mat3(arg) {
          return 'mat3(' + arg + ')';
        }),
        ['1'].times(16, 16, ', ').map(function mat4(arg) {
          return 'mat4(' + arg + ')';
        }),
        ['white', 'url(foo.png)']
      )).concat([
        'warp 1, warp 1',
        'distortAmount 0.5, lightVector 1.0 1.0 0.0, disp texture(disp.png)'
      ]),
      'geometry': ['1', '1 2'].or(
        ['detached', 'attached']
      ).map(function grid(arg) {
        return 'grid(' + arg + ')';
      }),
      'mix': [
        'auto',
        'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
        'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
        'exclusion', 'hue', 'saturation', 'color', 'luminosity',
        'clear', 'copy', 'destination', 'source-over', 'destination-over',
        'source-in', 'destination-in', 'source-out', 'destination-out',
        'source-atop', 'destination-atop', 'xor', 'lighter'
      ],
      'margin': ['10px', '10%', 'auto'].times(1, 4)
    }
  },

  'masking': {
    'title': 'Masking Level 1',
    'tr': 'http://www.w3.org/TR/css-masking/',
    'dev': 'http://dev.w3.org/fxtf/masking/',
    'properties': {
      'mask-image': [
        'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
        'url(#mask)', 'url(commonmasks.xml#mask)', 'child',
        'select(img)', 'select(mask:last-of-type)',
        'select(img, mask:last-of-type)'
      ],
      'mask-source-type': ['auto', 'alpha', 'luminance'],
      'mask-repeat': ['repeat-x', 'repeat-y'].concat(
        ['repeat', 'space', 'round', 'no-repeat'].times(1, 2)
      ),
      'mask-position': [
        'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and([
          'top', 'center', 'bottom', '10%', '10px'
        ]),
        ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
          ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
        )
      ).uniq(),
      'mask-clip': ['border-box', 'padding-box', 'content-box', 'no-clip'],
      'mask-origin': ['border-box', 'padding-box', 'content-box'],
      'mask-size': ['auto', '10px', '10%'].times(1, 2).concat([
        'cover', 'contain'
      ]),
      'mask': [
        'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
        'url(#mask)', 'url(commonmasks.xml#mask)', 'child',
        'select(img)', 'select(mask:last-of-type)',
        'select(img, mask:last-of-type)'
      ].qmark(['auto', 'alpha', 'luminance']).concat(
        [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and([
            'top', 'center', 'bottom', '10%', '10px'
          ]),
          ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
            ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
          )
        ).uniq().qmark([
          'auto', '10px', '10%', 'cover', 'contain', '10px 10px'
        ], ' / '),
        ['repeat-x', 'repeat-y'].concat(
          ['repeat', 'space', 'round', 'no-repeat'].times(1, 2)
        ),
        ['border-box', 'padding-box', 'content-box'].or([
          'border-box', 'padding-box', 'content-box', 'no-clip'
        ]).uniq(), [
          'none center', 'padding-box space', 'no-repeat none',
          'none left repeat-x border-box border-box',
          'none left / auto repeat-x border-box border-box',
          'none auto left / auto repeat-x border-box border-box',
          'url(tl.png) alpha left / auto repeat-x border-box border-box',
          'linear-gradient(white, black) luminance bottom 10px right 10px' +
            ' / 10px 10% repeat space content-box no-clip'
        ]
      ),
      'mask-type': ['luminance', 'alpha'],
      'mask-box-image-source': [
        'none', 'url(tl.png)', 'linear-gradient(white, black)'
      ],
      'mask-box-image-slice': [
        '1', '10%'
      ].times(1, 4).qmark(['fill'], ' ', {amp: true}),
      'mask-box-image-width': ['auto', '10px', '10%', '1'].times(1, 4),
      'mask-box-image-outset': ['10px', '1'].times(1, 4),
      'mask-box-image-repeat': [
        'stretch', 'repeat', 'round', 'space'
      ].times(1, 2),
      'mask-box-image': [
        'none', 'url(tl.png)', 'linear-gradient(white, black)'
      ].concat(
        ['1', '10%'].times(1, 4).qmark(['fill'], ' ', {amp: true}).qmark([
          '1', '1 / 1', '/ 1'
        ], ' / '),
        ['1'].and(['auto', '10px', '10%', '1'].times(1, 4), ' / '),
        ['1'].and(['auto', '10px', '10%', '1'].times(1, 4), ' / ').and([
          '1'
        ], ' / '),
        ['1 / 1', '1 /'].and(['10px', '1'].times(1, 4), ' / '),
        ['stretch', 'repeat', 'round', 'space'].times(1, 2),
        [
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
        ]
      ),
      'clip-path': ['none'].concat(
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
        ['nonzero', 'evenodd'].qmark(
          ['10px', '10%'].times(2).times(1, 2, ', '), ', ', {former: true}
        ).map(function polygon(arg) {
          return 'polygon(' + arg + ')';
        })
      ).concat([
        'url(#mask)', 'url(commonmasks.xml#mask)', 'url(tl.png)',
        'child', 'select(img)', 'select(clipPath:last-of-type)',
        'select(img, mask:last-of-type)'
      ]),
      'clip-rule': ['nonzero', 'evenodd'],
      'clip': ['auto'].concat(
        ['10px', '-20px', 'auto'].times(4, 4, ', ').map(function rect(arg) {
          return 'rect(' + arg + ')';
        })
      )
    }
  },

  'compositing-1': {
    'title': 'Compositing and Blending Level 1',
    'tr': 'http://www.w3.org/TR/compositing/',
    'dev': 'http://dev.w3.org/fxtf/compositing-1/',
    'properties': {
      'mix-blend-mode': [
        'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
        'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
        'exclusion', 'hue', 'saturation', 'color', 'luminosity'
      ],
      'isolation': ['auto', 'isolate'],
      'background-blend-mode': [
        'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
        'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
        'exclusion', 'hue', 'saturation', 'color', 'luminosity',
        'normal, multiply'
      ]
    }
  },

  // WHAT
  'html': {
    'title': 'HTML',
    'dev': 'http://www.whatwg.org/specs/web-apps/current-work/multipage/',
    'properties': {
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#anchor-points
      'anchor-point': ['none'].concat([
        'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and([
          'top', 'center', 'bottom', '10%', '10px'
        ]),
        ['center'].concat(['left', 'right'].qmark(['10%', '10px'])).amp(
          ['center'].concat(['top', 'bottom'].qmark(['10%', '10px']))
        )
      ).uniq()),
    },
    '@rules': {
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#the-style-element
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

  // Web Components
  'components-intro': {
    'title': 'Web Components',
    'dev': 'https://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html',
    'properties': {
      'decorator': ['url(#fade-to-white)']
    }
  },

  'shadow-dom': {
    'title': 'Shadow DOM',
    'dev': 'https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html',
    'selectors': {
      '::content': ['::content div', '.victory::content > span']
    },
    '@rules': {
      '@host': '@host'
    }
  },

  'custom-elements': {
    'title': 'Custom Elements',
    'dev': 'https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/custom/index.html',
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
    'dev': 'https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html',
    'properties': {
      'touch-action': ['auto', 'none'].concat(['pan-x'].or(['pan-y']))
    }
  }
};
