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

  'css-backgrounds-3': {
    'title': 'Backgrounds and Borders',
    'tr': 'http://www.w3.org/TR/css3-background/',
    'properties': {
      'background-image': ['linear-gradient(white, black)'].concat(
        ['none', 'url(foo.png)', 'linear-gradient(white, black)'].times(2, 2, ', '),
        ['none, url(foo.png), linear-gradient(white, black)']
      ),
      'background-repeat': [
        'space', 'round',
        'space repeat', 'round repeat', 'repeat space', 'space space', 'round space',
        'no-repeat space', 'repeat round', 'space round', 'round round', 'no-repeat round',
        'space no-repeat', 'round no-repeat'
      ].concat(
        ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'].times(2, 2, ', '),
        ['repeat, repeat-x, repeat-y']
      ),
      'background-attachment': ['local'].concat(
        ['scroll', 'fixed', 'local'].times(2, 2, ', '),
        ['scroll, fixed, local']
      ),
      'background-position': [
        'center top 10%', 'center top 10px', 'center bottom 10%', 'center bottom 10px',
        'center left 10%', 'center left 10px', 'center right 10%', 'center right 10px',
        'left top 10%', 'left top 10px', 'left bottom 10%', 'left bottom 10px',
        'right top 10%', 'right top 10px', 'right bottom 10%', 'right bottom 10px',
        'top left 10%', 'top left 10px', 'top right 10%', 'top right 10px',
        'bottom left 10%', 'bottom left 10px', 'bottom right 10%', 'bottom right 10px',
        'left 10% center', 'left 10% top', 'left 10% bottom',
        'left 10px center', 'left 10px top', 'left 10px bottom',
        'right 10% center', 'right 10% top', 'right 10% bottom',
        'right 10px center', 'right 10px top', 'right 10px bottom',
        'top 10% center', 'top 10% left', 'top 10% right',
        'top 10px center', 'top 10px left', 'top 10px right',
        'bottom 10% center', 'bottom 10% left', 'bottom 10% right',
        'bottom 10px center', 'bottom 10px left', 'bottom 10px right',
        'left 10% top 10%', 'left 10% top 10px', 'left 10% bottom 10%', 'left 10% bottom 10px',
        'left 10px top 10%', 'left 10px top 10px', 'left 10px bottom 10%', 'left 10px bottom 10px',
        'right 10% top 10%', 'right 10% top 10px', 'right 10% bottom 10%', 'right 10% bottom 10px',
        'right 10px top 10%', 'right 10px top 10px', 'right 10px bottom 10%', 'right 10px bottom 10px',
        'top 10% left 10%', 'top 10% left 10px', 'top 10% right 10%', 'top 10% right 10px',
        'top 10px left 10%', 'top 10px left 10px', 'top 10px right 10%', 'top 10px right 10px',
        'bottom 10% left 10%', 'bottom 10% left 10px', 'bottom 10% right 10%', 'bottom 10% right 10px',
        'bottom 10px left 10%', 'bottom 10px left 10px', 'bottom 10px right 10%', 'bottom 10px right 10px',
        'left, center', 'left, center, right', 'left, left top, center top 10%, left 10% top 10%'
      ],
      'background-clip': ['border-box', 'padding-box', 'content-box'].times(1, 2, ', ').concat(
        ['border-box, padding-box, content-box']
      ),
      'background-origin': ['padding-box', 'border-box', 'content-box'].times(1, 2, ', ').concat(
        ['padding-box, border-box, content-box']
      ),
      'background-size': ['auto', '10px', '50%', 'cover', 'contain'].concat(
        ['auto', '10px', '50%'].times(2),
        ['auto', '10px', '50%', 'cover', 'contain'].times(2, 2, ', '),
        ['auto, 10px, 50%']
      ),
      'background': [
        'linear-gradient(white, black)',
        'center top 10%', 'center top 10px', 'center bottom 10%', 'center bottom 10px',
        'center left 10%', 'center left 10px', 'center right 10%', 'center right 10px',
        'left top 10%', 'left top 10px', 'left bottom 10%', 'left bottom 10px',
        'right top 10%', 'right top 10px', 'right bottom 10%', 'right bottom 10px',
        'top left 10%', 'top left 10px', 'top right 10%', 'top right 10px',
        'bottom left 10%', 'bottom left 10px', 'bottom right 10%', 'bottom right 10px',
        'left 10% center', 'left 10% top', 'left 10% bottom',
        'left 10px center', 'left 10px top', 'left 10px bottom',
        'right 10% center', 'right 10% top', 'right 10% bottom',
        'right 10px center', 'right 10px top', 'right 10px bottom',
        'top 10% center', 'top 10% left', 'top 10% right',
        'top 10px center', 'top 10px left', 'top 10px right',
        'bottom 10% center', 'bottom 10% left', 'bottom 10% right',
        'bottom 10px center', 'bottom 10px left', 'bottom 10px right',
        'left 10% top 10%', 'left 10% top 10px', 'left 10% bottom 10%', 'left 10% bottom 10px',
        'left 10px top 10%', 'left 10px top 10px', 'left 10px bottom 10%', 'left 10px bottom 10px',
        'right 10% top 10%', 'right 10% top 10px', 'right 10% bottom 10%', 'right 10% bottom 10px',
        'right 10px top 10%', 'right 10px top 10px', 'right 10px bottom 10%', 'right 10px bottom 10px',
        'top 10% left 10%', 'top 10% left 10px', 'top 10% right 10%', 'top 10% right 10px',
        'top 10px left 10%', 'top 10px left 10px', 'top 10px right 10%', 'top 10px right 10px',
        'bottom 10% left 10%', 'bottom 10% left 10px', 'bottom 10% right 10%', 'bottom 10% right 10px',
        'bottom 10px left 10%', 'bottom 10px left 10px', 'bottom 10px right 10%', 'bottom 10px right 10px',
        'space', 'round',
        'space repeat', 'round repeat', 'repeat space', 'space space', 'round space',
        'no-repeat space', 'repeat round', 'space round', 'round round', 'no-repeat round',
        'space no-repeat', 'round no-repeat',
        'local'
      ].concat(
        ['border-box', 'padding-box', 'content-box'].times(1, 2),
        ['left'].and(['auto', '10px', '50%', 'cover', 'contain'].concat(['auto', '10px', '50%'].times(2)), ' / '),
        [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px'])
        ).concat([
          'top center', 'top left', 'top right', 'bottom center', 'bottom left', 'bottom right', 'center left', 'center right',
          'center top 10%', 'center top 10px', 'center bottom 10%', 'center bottom 10px',
          'center left 10%', 'center left 10px', 'center right 10%', 'center right 10px',
          'left top 10%', 'left top 10px', 'left bottom 10%', 'left bottom 10px',
          'right top 10%', 'right top 10px', 'right bottom 10%', 'right bottom 10px',
          'top left 10%', 'top left 10px', 'top right 10%', 'top right 10px',
          'bottom left 10%', 'bottom left 10px', 'bottom right 10%', 'bottom right 10px',
          'left 10% center', 'left 10% top', 'left 10% bottom',
          'left 10px center', 'left 10px top', 'left 10px bottom',
          'right 10% center', 'right 10% top', 'right 10% bottom',
          'right 10px center', 'right 10px top', 'right 10px bottom',
          'top 10% center', 'top 10% left', 'top 10% right',
          'top 10px center', 'top 10px left', 'top 10px right',
          'bottom 10% center', 'bottom 10% left', 'bottom 10% right',
          'bottom 10px center', 'bottom 10px left', 'bottom 10px right',
          'left 10% top 10%', 'left 10% top 10px', 'left 10% bottom 10%', 'left 10% bottom 10px',
          'left 10px top 10%', 'left 10px top 10px', 'left 10px bottom 10%', 'left 10px bottom 10px',
          'right 10% top 10%', 'right 10% top 10px', 'right 10% bottom 10%', 'right 10% bottom 10px',
          'right 10px top 10%', 'right 10px top 10px', 'right 10px bottom 10%', 'right 10px bottom 10px',
          'top 10% left 10%', 'top 10% left 10px', 'top 10% right 10%', 'top 10% right 10px',
          'top 10px left 10%', 'top 10px left 10px', 'top 10px right 10%', 'top 10px right 10px',
          'bottom 10% left 10%', 'bottom 10% left 10px', 'bottom 10% right 10%', 'bottom 10% right 10px',
          'bottom 10px left 10%', 'bottom 10px left 10px', 'bottom 10px right 10%', 'bottom 10px right 10px'
        ]).and(['auto'], ' / '),
        [
          '0% 0% / cover', 'top left / 50% 60%', 'center top 10% / contain', 'bottom 10px right 10px / auto 10px',
          'linear-gradient(white, black) left', 'linear-gradient(white, black) transparent',
          'left linear-gradient(white, black)', 'transparent linear-gradient(white, black)',
          'none left repeat scroll border-box',
          'none left repeat scroll border-box transparent',
          'none left / auto repeat scroll border-box',
          'none left / auto repeat scroll border-box transparent',
          'none left repeat scroll border-box padding-box',
          'none left repeat scroll border-box padding-box transparent',
          'none left / auto repeat scroll border-box padding-box',
          'none left / auto repeat scroll border-box padding-box transparent',
          'url(foo.png) bottom right / cover padding-box content-box',
          'linear-gradient(white, black) left 10% top 10% / auto 10px space round local content-box content-box rgba(255, 255, 0, 0.5)',
          'url(foo.png), url(bar.svg)', 'url(foo.png), transparent',
          'none left repeat scroll border-box, none left repeat scroll border-box',
          'none left / auto repeat scroll border-box padding-box, none left / auto repeat scroll border-box padding-box transparent',
          'none, none, none'
        ]
      ),
      'border-top-left-radius': ['10px', '10%'].times(1, 2),
      'border-top-right-radius': ['10px', '10%'].times(1, 2),
      'border-bottom-right-radius': ['10px', '10%'].times(1, 2),
      'border-bottom-left-radius': ['10px', '10%'].times(1, 2),
      'border-radius': ['10px', '10%'].times(1, 4).concat(
        ['10px', '10%'].times(1, 4).and(['10px', '10%'].times(1, 4), ' / ')
      ),
      'border-image-source': ['none', 'url(foo.png)', 'linear-gradient(white, black)'],
      'border-image-slice': ['10', '30%'].times(1, 4).concat(
        ['10', '30%'].times(1, 4).and(['fill']),
        ['fill'].and(['10', '30%'].times(1, 4))
      ),
      'border-image-width': ['1', '10px', '10%', 'auto'].times(1, 4),
      'border-image-outset': ['10px', '1'].times(1, 4),
      'border-image-repeat': ['stretch', 'repeat', 'round', 'space'].times(1, 2),
      'border-image': ['none', 'url(foo.png)', 'linear-gradient(white, black)'].concat(
        ['10', '30%'].times(1, 4).concat(
          ['10', '30%'].times(1, 4).and(['fill']),
          ['fill'].and(['10', '30%'].times(1, 4))
        ),
        ['stretch', 'repeat', 'round', 'space'].times(1, 2),
        [
          '1 / 1', '1 / / 1', '30% 30% / / 10px 10px', 'fill 10 / / 1 10px',
          '30% 10 30% / / 10px 10px 10px', 'fill 30% 30% 30% 30% / / 1 1 1 1',
          '1 / 1 / 1', '10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px',
          'none 100%', '100% none', 'stretch 100%', 'none stretch',
          'none 100% stretch', 'none 100% / 1 stretch', 'none 100% / / 0 stretch',
          'none 100% / 1 / 0 stretch', 'none 100% fill / 1 / 0 stretch',
          'url(foo.png) 10', 'url(foo.png) 10%', 'url(foo.png) 10% fill',
          'url(foo.png) 10 round', 'url(foo.png) 10 stretch repeat',
          'url(foo.png) 10 / 10px', 'url(foo.png) 10 / 10% / 10px',
          'url(foo.png) fill 10 / 10% / 10px', 'url(foo.png) fill 10 / 10% / 10px repeat',
          'url(tl.png) 10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px repeat round'
        ]
      ),
      'box-decoration-break': ['slice', 'clone'],
      'box-shadow': [
        'none', '1px 2px', '1px 2px 3px', '1px 2px 3px 4px',
        '1px 2px red', 'blue 1px 2px', '1px 2px 3px yellow', 'green 1px 2px 3px',
        '1px 2px 3px 4px purple', 'pink 1px 2px 3px 4px',
        'inset 1px 2px', '1px 2px inset', 'inset 1px 2px 3px', '1px 2px 3px inset',
        'inset 1px 2px 3px 4px', '1px 2px 3px 4px inset',
        'inset 1px 2px red', '1px 2px red inset', 'inset blue 1px 2px', 'blue 1px 2px inset',
        'inset 1px 2px 3px yellow', '1px 2px 3px yellow inset',
        'inset green 1px 2px 3px', 'green 1px 2px 3px inset',
        'inset 1px 2px 3px 4px purple', '1px 2px 3px 4px purple inset',
        'inset pink 1px 2px 3px 4px', 'pink 1px 2px 3px 4px inset',
        '1px 2px, 1px 2px', '1px 2px, 1px 2px, 1px 2px'
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
      'text-transform': 'full-width',
      'tab-size': ['8', '1em'],
      'line-break': ['auto', 'loose', 'normal', 'strict'],
      'word-break': ['normal', 'keep-all', 'break-all'],
      'hyphens': ['manual', 'none', 'auto'],
      'word-wrap': ['normal', 'break-word'],
      'overflow-wrap': ['normal', 'break-word'],
      'text-align': ['start', 'end', 'match-parent', 'start end'],
      'text-align-last': ['auto', 'start', 'end', 'left', 'right', 'center', 'justify'],
      'text-justify': ['auto', 'none', 'inter-word', 'distribute'],
      'word-spacing': ['50%'].concat(['normal', '1em', '50%'].times(2, 3)),
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

  'css-fonts-3': {
    'title': 'Fonts',
    'tr': 'http://www.w3.org/TR/css3-fonts/',
    'properties': {
      'font-stretch': [
        'normal', 'ultra-condensed', 'extra-condensed', 'condensed',
        'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded',
        'ultra-expanded'
      ],
      'font-size-adjust': ['none', 'auto', '1', '.5'],
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
      'font-variant-ligatures': [
        'normal', 'none',
        'common-ligatures', 'no-common-ligatures',
        'discretionary-ligatures', 'no-discretionary-ligatures',
        'historical-ligatures', 'no-historical-ligatures',
        'contextual', 'no-contextual',
        'common-ligatures discretionary-ligatures',
        'discretionary-ligatures common-ligatures',
        'common-ligatures discretionary-ligatures historical-ligatures',
        'common-ligatures discretionary-ligatures historical-ligatures ' +
          'contextual'
      ],
      'font-variant-position': ['normal', 'sub', 'super'],
      'font-variant-caps': [
        'normal', 'small-caps', 'all-small-caps', 'petite-caps',
        'all-petite-caps', 'unicase', 'titling-caps'
      ],
      'font-variant-numeric': [
        'normal',
        'lining-nums', 'oldstyle-nums',
        'proportional-nums', 'tabular-nums',
        'diagonal-fractions', 'stacked-fractions',
        'ordinal', 'slashed-zero',
        'lining-nums proportional-nums', 'proportional-nums lining-nums',
        'lining-nums proportional-nums diagonal-fractions',
        'lining-nums proportional-nums diagonal-fractions ordinal',
        'lining-nums proportional-nums diagonal-fractions ordinal slashed-zero',
        'oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero',
        'slashed-zero ordinal tabular-nums stacked-fractions oldstyle-nums'
      ],
      'font-variant-alternates': [
        'normal', 'stylistic(Bongo)', 'historical-forms',
        'styleset(Bongo)', 'styleset(Bongo, Jupiter Sans)',
        'character-variant(Bongo)', 'character-variant(Bongo, Jupiter Sans)',
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
        'stylistic(Bongo) historical-forms styleset(Bongo, Jupiter Sans) ' +
          'character-variant(Bongo, Jupiter Sans) swash(Bongo) ' +
          'ornaments(Bongo) annotation(Bongo)'
      ],
      'font-variant-east-asian': [
        'normal',
        'jis78', 'jis83', 'jis90', 'jis04', 'simplified', 'traditional',
        'full-width', 'proportional-width',
        'ruby',
        'jis78 full-width', 'full-width jis78',
        'jis78 full-width ruby',
        'simplified full-width ruby'
      ],
      'font-variant': [
        'none',
        'common-ligatures', 'no-common-ligatures',
        'discretionary-ligatures', 'no-discretionary-ligatures',
        'historical-ligatures', 'no-historical-ligatures',
        'contextual', 'no-contextual',
        'stylistic(Bongo)', 'historical-forms',
        'styleset(Bongo)', 'styleset(Bongo, Jupiter Sans)',
        'character-variant(Bongo)', 'character-variant(Bongo, Jupiter Sans)',
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
          'historical-forms styleset(Bongo, Jupiter Sans) ' +
          'character-variant(Bongo, Jupiter Sans) swash(Bongo) ' +
          'ornaments(Bongo) annotation(Bongo) small-caps lining-nums ' +
          'proportional-nums diagonal-fractions ordinal slashed-zero jis78 ' +
          'full-width ruby'
      ],
      'font-feature-settings': [
        'normal', '\'c2sc\'', '\'c2sc\' 1', '\'smcp\' on', '\'liga\' off',
        '\'smcp\', \'swsh\'',
        '\'smcp\', \'swsh\' 2',
        '\'smcp\' on, \'swsh\' off',
        '\'c2sc\', \'smcp\', \'swsh\''
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
        'url(fonts/simple.ttf)', 'local(Gentium)', 'Gentium',
        'url(ideal-sans-serif.woff) format(\'woff\')',
        'url(basic-sans-serif.ttf) format(\'truetype\')',
        'url(basic-sans-serif.ttf) format(\'opentype\')',
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
        'none',
        'common-ligatures', 'no-common-ligatures',
        'discretionary-ligatures', 'no-discretionary-ligatures',
        'historical-ligatures', 'no-historical-ligatures',
        'contextual', 'no-contextual',
        'stylistic(Bongo)', 'historical-forms',
        'styleset(Bongo)', 'styleset(Bongo, Jupiter Sans)',
        'character-variant(Bongo)', 'character-variant(Bongo, Jupiter Sans)',
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
          'historical-forms styleset(Bongo, Jupiter Sans) ' +
          'character-variant(Bongo, Jupiter Sans) swash(Bongo) ' +
          'ornaments(Bongo) annotation(Bongo) small-caps lining-nums ' +
          'proportional-nums diagonal-fractions ordinal slashed-zero jis78 ' +
          'full-width ruby'
      ],
      'font-feature-settings': [
        'normal', '\'c2sc\'', '\'c2sc\' 1', '\'smcp\' on', '\'liga\' off',
        '\'smcp\', \'swsh\'',
        '\'smcp\', \'swsh\' 2',
        '\'smcp\' on, \'swsh\' off',
        '\'c2sc\', \'smcp\', \'swsh\''
      ]
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
        'content'
      ],
      'linear-gradient': [
        'linear-gradient(white, black)',
        'linear-gradient(white 1px, black)',
        'linear-gradient(white 1%, black)',
        'linear-gradient(white, black 1px)',
        'linear-gradient(white, black 1%)',
        'linear-gradient(white 1px, black 1%)',
        'linear-gradient(0deg, white, black)',
        'linear-gradient(90deg, white, black)',
        'linear-gradient(360deg, white, black)',
        'linear-gradient(-45deg, white, black)',
        'linear-gradient(to left, white, black)',
        'linear-gradient(to right, white, black)',
        'linear-gradient(to top, white, black)',
        'linear-gradient(to bottom, white, black)',
        'linear-gradient(to left top, white, black)',
        'linear-gradient(to left bottom, white, black)',
        'linear-gradient(to right top, white, black)',
        'linear-gradient(to right bottom, white, black)',
        'linear-gradient(to top left, white, black)',
        'linear-gradient(to top right, white, black)',
        'linear-gradient(to bottom left, white, black)',
        'linear-gradient(to bottom right, white, black)',
        'linear-gradient(-270deg, red, blue 90px, yellow, green 50%)',
        'linear-gradient(to bottom right, currentColor 100%, rgba(255, 0, 255, 0.3) 100px, transparent 0em, hsla(225, 50%, 100%, 0.7) 75%)'
      ],
      'radial-gradient': [
        'radial-gradient(white, black)',
        'radial-gradient(white 1px, black)',
        'radial-gradient(white 1%, black)',
        'radial-gradient(white, black 1px)',
        'radial-gradient(white, black 1%)',
        'radial-gradient(white 1px, black 1%)',
        'radial-gradient(circle, white, black)',
        'radial-gradient(10px, white, black)',
        'radial-gradient(circle 10em, white, black)',
        'radial-gradient(100px circle, white, black)',
        'radial-gradient(ellipse, white, black)',
        'radial-gradient(10px 10%, white, black)',
        'radial-gradient(ellipse 10% 20%, white, black)',
        'radial-gradient(10em 100px ellipse, white, black)',
        'radial-gradient(closest-corner, white, black)',
        'radial-gradient(closest-side, white, black)',
        'radial-gradient(farthest-corner, white, black)',
        'radial-gradient(farthest-side, white, black)',
        'radial-gradient(circle closest-corner, white, black)',
        'radial-gradient(closest-side ellipse, white, black)',
        'radial-gradient(at center, white, black)',
        'radial-gradient(circle at left, white, black)',
        'radial-gradient(ellipse at right, white, black)',
        'radial-gradient(closest-corner at top, white, black)',
        'radial-gradient(closest-side at bottom, white, black)',
        'radial-gradient(farthest-corner at 10%, white, black)',
        'radial-gradient(farthest-side at 10px, white, black)',
        'radial-gradient(10px at left top, white, black)',
        'radial-gradient(circle 10em at center 10%, white, black)',
        'radial-gradient(100px circle at 10px bottom, white, black)',
        'radial-gradient(10px 10% at right center, white, black)',
        'radial-gradient(ellipse 10% 20% at 10% 10%, white, black)',
        'radial-gradient(10em 100px ellipse at 10px 10px, white, black)',
        'radial-gradient(circle closest-corner at 10% 10px, white, black)',
        'radial-gradient(closest-side ellipse at 10px 10%, white, black)',
        'radial-gradient(at bottom left, white, black)',
        'radial-gradient(at center top 50%, white, black)',
        'radial-gradient(at right 50px center, white, black)',
        'radial-gradient(at left 10px top 10%, white, black)',
        'radial-gradient(at bottom 50% right 50%, white, black)',
        'radial-gradient(10% 100px ellipse at top 10% right 10px, white 10%, black 10px, red 50%)',
        'radial-gradient(ellipse 10% 20% at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)'
      ],
      'repeating-linear-gradient': [
        'repeating-linear-gradient(white, black)',
        'repeating-linear-gradient(white 1px, black)',
        'repeating-linear-gradient(white 1%, black)',
        'repeating-linear-gradient(white, black 1px)',
        'repeating-linear-gradient(white, black 1%)',
        'repeating-linear-gradient(white 1px, black 1%)',
        'repeating-linear-gradient(0deg, white, black)',
        'repeating-linear-gradient(90deg, white, black)',
        'repeating-linear-gradient(360deg, white, black)',
        'repeating-linear-gradient(-45deg, white, black)',
        'repeating-linear-gradient(to left, white, black)',
        'repeating-linear-gradient(to right, white, black)',
        'repeating-linear-gradient(to top, white, black)',
        'repeating-linear-gradient(to bottom, white, black)',
        'repeating-linear-gradient(to left top, white, black)',
        'repeating-linear-gradient(to left bottom, white, black)',
        'repeating-linear-gradient(to right top, white, black)',
        'repeating-linear-gradient(to right bottom, white, black)',
        'repeating-linear-gradient(to top left, white, black)',
        'repeating-linear-gradient(to top right, white, black)',
        'repeating-linear-gradient(to bottom left, white, black)',
        'repeating-linear-gradient(to bottom right, white, black)',
        'repeating-linear-gradient(-270deg, red, blue 90px, yellow, green 50%)',
        'repeating-linear-gradient(to bottom right, currentColor 100%, rgba(255, 0, 255, 0.3) 100px, transparent 0em, hsla(225, 50%, 100%, 0.7) 75%)'
      ],
      'repeating-radial-gradient': [
        'repeating-radial-gradient(white, black)',
        'repeating-radial-gradient(white 1px, black)',
        'repeating-radial-gradient(white 1%, black)',
        'repeating-radial-gradient(white, black 1px)',
        'repeating-radial-gradient(white, black 1%)',
        'repeating-radial-gradient(white 1px, black 1%)',
        'repeating-radial-gradient(circle, white, black)',
        'repeating-radial-gradient(10px, white, black)',
        'repeating-radial-gradient(circle 10em, white, black)',
        'repeating-radial-gradient(100px circle, white, black)',
        'repeating-radial-gradient(ellipse, white, black)',
        'repeating-radial-gradient(10px 10%, white, black)',
        'repeating-radial-gradient(ellipse 10% 20%, white, black)',
        'repeating-radial-gradient(10em 100px ellipse, white, black)',
        'repeating-radial-gradient(closest-corner, white, black)',
        'repeating-radial-gradient(closest-side, white, black)',
        'repeating-radial-gradient(farthest-corner, white, black)',
        'repeating-radial-gradient(farthest-side, white, black)',
        'repeating-radial-gradient(circle closest-corner, white, black)',
        'repeating-radial-gradient(closest-side ellipse, white, black)',
        'repeating-radial-gradient(at center, white, black)',
        'repeating-radial-gradient(circle at left, white, black)',
        'repeating-radial-gradient(ellipse at right, white, black)',
        'repeating-radial-gradient(closest-corner at top, white, black)',
        'repeating-radial-gradient(closest-side at bottom, white, black)',
        'repeating-radial-gradient(farthest-corner at 10%, white, black)',
        'repeating-radial-gradient(farthest-side at 10px, white, black)',
        'repeating-radial-gradient(10px at left top, white, black)',
        'repeating-radial-gradient(circle 10em at center 10%, white, black)',
        'repeating-radial-gradient(100px circle at 10px bottom, white, black)',
        'repeating-radial-gradient(10px 10% at right center, white, black)',
        'repeating-radial-gradient(ellipse 10% 20% at 10% 10%, white, black)',
        'repeating-radial-gradient(10em 100px ellipse at 10px 10px, white, black)',
        'repeating-radial-gradient(circle closest-corner at 10% 10px, white, black)',
        'repeating-radial-gradient(closest-side ellipse at 10px 10%, white, black)',
        'repeating-radial-gradient(at bottom left, white, black)',
        'repeating-radial-gradient(at center top 50%, white, black)',
        'repeating-radial-gradient(at right 50px center, white, black)',
        'repeating-radial-gradient(at left 10px top 10%, white, black)',
        'repeating-radial-gradient(at bottom 50% right 50%, white, black)',
        'repeating-radial-gradient(10% 100px ellipse at top 10% right 10px, white 10%, black 10px, red 50%)',
        'repeating-radial-gradient(ellipse 10% 20% at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)'
      ],
      'image()': [
        'image(\'sprites.png#xywh=10,30,60,20\')',
        'image(\'wavy.svg\', \'wavy.png\' , \'wavy.gif\')',
        'image(\'dark.png\', black)', 'image(green)'
      ]
    },
    'properties': {
      'object-fit': ['fill', 'contain', 'cover', 'none', 'scale-down'],
      'object-position': ['50% 50%', 'center', 'top right', 'bottom 10px right 20px'],
      'image-resolution': ['from-image', 'from-image snap', 'snap from-image', '1dppx', '300dpi', 'from-image 300dpi', '300dpi from-image', '300dpi from-image snap'],
      'image-orientation': ['0deg', '90deg', '45deg', '1turn', '100grad', '2rad']
    }
  },

  'css-inline-3': {
    'title': 'Line Layout',
    'tr': 'http://www.w3.org/TR/css3-linebox/',
    'properties': {
      'text-height': ['auto', 'font-size', 'text-size', 'max-size', '10.52'],
      'line-height': ['none'],
      'line-box-contain': ['block', 'inline', 'font', 'glyphs', 'replaced', 'inline-box', 'none'],
      'line-stacking-strategy': ['inline-line-height', 'block-line-height', 'max-height', 'grid-height'],
      'line-stacking-ruby': ['exclude-ruby', 'include-ruby'],
      'line-stacking-shift': ['consider-shifts', 'disregard-shifts'],
      'line-stacking': [
        'inline-line-height', 'block-line-height', 'max-height', 'grid-height', 'exclude-ruby', 'include-ruby', 'consider-shifts', 'disregard-shifts'
      ].concat(
        ['inline-line-height', 'block-line-height', 'max-height', 'grid-height'].and(['exclude-ruby', 'include-ruby']),
        ['inline-line-height', 'block-line-height', 'max-height', 'grid-height'].and(['consider-shifts', 'disregard-shifts']),
        ['exclude-ruby', 'include-ruby'].and(['inline-line-height', 'block-line-height', 'max-height', 'grid-height']),
        ['exclude-ruby', 'include-ruby'].and(['consider-shifts', 'disregard-shifts']),
        ['consider-shifts', 'disregard-shifts'].and(['inline-line-height', 'block-line-height', 'max-height', 'grid-height']),
        ['consider-shifts', 'disregard-shifts'].and(['exclude-ruby', 'include-ruby']),
        ['inline-line-height', 'block-line-height', 'max-height', 'grid-height'].and(['exclude-ruby', 'include-ruby']).and(['consider-shifts', 'disregard-shifts']),
        ['inline-line-height', 'block-line-height', 'max-height', 'grid-height'].and(['consider-shifts', 'disregard-shifts']).and(['exclude-ruby', 'include-ruby']),
        ['exclude-ruby', 'include-ruby'].and(['inline-line-height', 'block-line-height', 'max-height', 'grid-height']).and(['consider-shifts', 'disregard-shifts']),
        ['exclude-ruby', 'include-ruby'].and(['consider-shifts', 'disregard-shifts']).and(['inline-line-height', 'block-line-height', 'max-height', 'grid-height']),
        ['consider-shifts', 'disregard-shifts'].and(['inline-line-height', 'block-line-height', 'max-height', 'grid-height']).and(['exclude-ruby', 'include-ruby']),
        ['consider-shifts', 'disregard-shifts'].and(['exclude-ruby', 'include-ruby']).and(['inline-line-height', 'block-line-height', 'max-height', 'grid-height'])
      ),
      'dominant-baseline': ['auto', 'use-script', 'no-change', 'reset-size', 'alphabetic', 'hanging', 'ideographic', 'mathematical', 'central', 'middle', 'text-after-edge', 'text-before-edge'],
      'alignment-baseline': ['baseline', 'use-script', 'before-edge', 'text-before-edge', 'after-edge', 'text-after-edge', 'central', 'middle', 'ideographic', 'alphabetic', 'hanging', 'mathematical'],
      'alignment-adjust': ['auto', 'baseline', 'before-edge', 'text-before-edge', 'middle', 'central', 'after-edge', 'text-after-edge', 'ideographic', 'alphabetic', 'hanging', 'mathematical', '0%', '10%', '0cm', '10px'],
      'baseline-shift': ['baseline', 'sub', 'super', '0%', '10%', '0cm', '10px'],
      'vertical-align': ['auto', 'central'],
      'inline-box-align': ['last', 'initial', '1'],
      'drop-initial-value': ['initial', '1'],
      'drop-initial-size': ['auto', '&lt;line&gt;', '10%', '10px'],
      'drop-initial-after-align': ['baseline', 'use-script', 'before-edge', 'text-before-edge', 'after-edge', 'text-after-edge', 'central', 'middle', 'ideographic', 'alphabetic', 'hanging', 'mathematical'],
      'drop-initial-after-adjust': ['text-after-edge', 'central', 'middle', 'after-edge', 'ideographic', 'alphabetic', 'mathematical', '0%', '10%', '0cm', '10px'],
      'drop-initial-before-align': ['caps-height', 'baseline', 'use-script', 'before-edge', 'text-before-edge', 'after-edge', 'text-after-edge', 'central', 'middle', 'ideographic', 'alphabetic', 'hanging', 'mathematical'],
      'drop-initial-before-adjust': ['text-before-edge', 'before-edge', 'central', 'middle', 'hanging', 'mathematical', '0%', '10%', '0cm', '10px'],
    }
  },

  'css-lists-3': {
    'title': 'Lists and Counters',
    'tr': 'http://www.w3.org/TR/css3-lists/',
    'properties': {
      'display': ['inline-list-item'],
      'list-style-image': ['image(\'sprites.svg#xywh=40,0,20,20\')', 'radial-gradient(circle, #006, #00a 90%, #0000af 100%, white 100%)'],
      'list-style-type': [
        '\'★\'', 'cjk-decimal', 'hebrew', 'hiragana', 'hiragana-iroha', 'katakana', 'katakana-iroha', 'disclosure-open', 'disclosure-closed',
        'japanese-informal', 'japanese-formal', 'korean-hangul-formal', 'korean-hanja-informal', 'korean-hanja-formal',
        'simp-chinese-informal', 'simp-chinese-formal', 'trad-chinese-informal', 'trad-chinese-formal', 'cjk-ideographic',
        'ethiopic-numeric', 'circled-lower-latin', 'symbols(repeating \'○\' \'●\')', 'toggle(disc, square, circle)'
      ],
      'list-style': [
        'hebrew', 'linear-gradient(white, black)',
        'hiragana radial-gradient(white, black)', 'hiragana-iroha outside',
        'repeating-linear-gradient(white, black) katakana', 'repeating-radial-gradient(white, black) inside',
        'outside katakana-iroha', 'inside linear-gradient(to left, white, black)',
        'cjk-ideographic radial-gradient(at center, white, black) outside',
        'repeating-linear-gradient(to left, white, black) hebrew inside',
        'outside hiragana repeating-radial-gradient(at center, white, black)',
        'inside radial-gradient(closest-side ellipse at 10px 10%, white, black) hiragana-iroha'
      ],
      'position': ['marker'],
      'marker-side': ['list-item', 'list-container'],
      'counter-set': ['none', 'section', 'chapter 0', 'section -1 imagenum 99', 'list-item attr(value integer, 1)']
    },
    'selectors': {
      '::marker': 'li::marker'
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

  'css-sizing-3': {
    'title': 'Intrinsic & Extrinsic Sizing',
    'tr': 'http://www.w3.org/TR/css3-sizing/',
    'properties': {
      'width': ['fill-available', 'repudiate-floats'],
      'min-width': ['fill-available', 'repudiate-floats', 'contain-floats'],
      'max-width': ['fill-available', 'repudiate-floats'],
      'height': ['fill-available', 'repudiate-floats'],
      'min-height': ['fill-available', 'repudiate-floats', 'contain-floats'],
      'max-height': ['fill-available', 'repudiate-floats'],
      'column-width': ['min-content', 'max-content', 'fill-available', 'fit-content']
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
      'position': ['center', 'page'],
      'offset-before': ['auto', '10px', '10%'],
      'offset-end': ['auto', '10px', '10%'],
      'offset-after': ['auto', '10px', '10%'],
      'offset-start': ['auto', '10px', '10%'],
      'clip': ['inset(5px, 40px, 45px, 5px)', 'inset(30%, 0%, 30%, 25%)']
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

  'css-cascade-3': {
    'title': 'Cascading and Inheritance',
    'tr': 'http://www.w3.org/TR/css3-cascade/',
    'properties': {
      'all': ['default']
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
    'tr': 'http://www.w3.org/TR/css3-grid/',
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

  'css-flexbox-1': {
    'title': 'Flexible Box Layout',
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
    'title': 'Grid Layout',
    'tr': 'http://www.w3.org/TR/css3-grid-layout/',
    'properties': {
      'display': ['grid', 'inline-grid', 'subgrid'],
      'grid-definition-columns': [
        'none', 'minmax(1px, 10px)', 'auto',
        '100px', '30%', '1fr', 'min-content', 'max-content',
        'repeat(2, 2px)', 'repeat(4, \'content\' 10px)',
        'repeat(4, 10px \'content\')', 'repeat(4, \'content\' \'repeat\' 10px)',
        'repeat(4, \'content\' 250px 10px)',
        'repeat(4, 10px \'content\' \'repeat\')',
        'repeat(4, \'content\' 10px \'repeat\')',
        'repeat(4, \'content\' \'repeat\' 250px 10px)',
        'repeat(4, \'content\' 250px 10px \'repeat\')',
        '\'header\' 10px', '\'first\' repeat(2, 2px)', 'minmax(1px, 10px) auto',
        '\'first\' \'content\' 30%', '\'first\' 10px 30%', '10px 10px 10px',
        '\'first\' auto \'content\'', '\'first\' repeat(2, 2px) \'content\'',
        '100px 1fr max-content minmax(min-content, 1fr)',
        '10px repeat(2, 1fr auto minmax(30%, 1fr))',
        'repeat(4, 10px \'col-start\' 250px \'col-end\') 10px',
        '\'first\' \'header\' 50px \'main\' 1fr \'footer\' 50px \'last\''
      ],
      'grid-definition-rows': [
        'none', 'minmax(1px, 10px)', 'auto',
        '100px', '30%', '1fr', 'min-content', 'max-content',
        'repeat(2, 2px)', 'repeat(4, \'content\' 10px)',
        'repeat(4, 10px \'content\')', 'repeat(4, \'content\' \'repeat\' 10px)',
        'repeat(4, \'content\' 250px 10px)',
        'repeat(4, 10px \'content\' \'repeat\')',
        'repeat(4, \'content\' 10px \'repeat\')',
        'repeat(4, \'content\' \'repeat\' 250px 10px)',
        'repeat(4, \'content\' 250px 10px \'repeat\')',
        '\'header\' 10px', '\'first\' repeat(2, 2px)', 'minmax(1px, 10px) auto',
        '\'first\' \'content\' 30%', '\'first\' 10px 30%', '10px 10px 10px',
        '\'first\' auto \'content\'', '\'first\' repeat(2, 2px) \'content\'',
        '100px 1fr max-content minmax(min-content, 1fr)',
        '10px repeat(2, 1fr auto minmax(30%, 1fr))',
        'repeat(4, 10px \'col-start\' 250px \'col-end\') 10px',
        '\'first\' \'header\' 50px \'main\' 1fr \'footer\' 50px \'last\''
      ],
      'grid-template': [
        'none', '\'nav\'', '\'head head\' \'nav main\' \'foot .\''
      ],
      'grid-auto-columns': [
        'auto', 'minmax(1px, 10px)', 'minmax(10%, 10px)', 'minmax(1fr, 10px)',
        'minmax(min-content, 10px)', 'minmax(max-content, 10px)',
        'minmax(min-content, max-content)'
      ],
      'grid-auto-rows': [
        'auto', 'minmax(1px, 10px)', 'minmax(10%, 10px)', 'minmax(1fr, 10px)',
        'minmax(min-content, 10px)', 'minmax(max-content, 10px)',
        'minmax(min-content, max-content)'
      ],
      'grid-row-start': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ),
      'grid-column-start': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ),
      'grid-row-end': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ),
      'grid-column-end': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ),
      'grid-column': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ).times(1, 2, ' / '),
      'grid-row': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ).times(1, 2, ' / '),
      'grid-area': ['auto', 'ident'].concat(
        ['1'].or(['\'C\'']), ['span'].amp(['1'].or(['\'C\'']))
      ).times(1, 2, ' / ').concat([
        'auto / auto / auto', 'auto / auto / auto / auto'
      ]),
      'grid-auto-flow': ['none', 'rows', 'columns']
    },
    'values': {
      'properties': [
        'grid-definition-columns',
        'grid-definition-rows',
        'grid-columns',
        'grid-rows'
      ],
      'fr': '1fr'
    }
  },

  'css-template-1': {
    'title': 'Grid Template Layout',
    'tr': 'http://www.w3.org/TR/css3-layout/',
    'properties': {
      'grid-template': ['\'*\'', '\'****\' \'****\' \'****\''],
      'grid-columns': [
        'auto', '1px', '10%', '*', '1fr',
        'minmax(1px, 10px)', 'min-content', 'max-content', 'fit-content',
        'minmax(10%, 10px)', 'minmax(*, 10px)', 'minmax(1fr, 10px)', 'minmax(minmax(1px, 10px), 10px)',
        'minmax(min-content, 10px)', 'minmax(max-content, 10px)', 'minmax(fit-content, 10px)',
        'minmax(min-content, max-content)',
        '1px 1px', '* * * *'
      ],
      'grid-rows': [
        'auto', '1px', '10%', '*', '1fr',
        'minmax(1px, 10px)', 'min-content', 'max-content', 'fit-content',
        'minmax(10%, 10px)', 'minmax(*, 10px)', 'minmax(1fr, 10px)', 'minmax(minmax(1px, 10px), 10px)',
        'minmax(min-content, 10px)', 'minmax(max-content, 10px)', 'minmax(fit-content, 10px)',
        'minmax(min-content, max-content)',
        '1px 1px', '* * * *'
      ],
      'grid': ['none'].concat(
        '\'a b c\'',
        ['\'a b c\''].amp([
          '1px', '10%', '*', '1fr',
          'minmax(1px, 10px)', 'min-content', 'max-content', 'fit-content',
          'minmax(10%, 10px)', 'minmax(*, 10px)', 'minmax(1fr, 10px)', 'minmax(minmax(1px, 10px), 10px)',
          'minmax(min-content, 10px)', 'minmax(max-content, 10px)', 'minmax(fit-content, 10px)',
          'minmax(min-content, max-content)'
        ]),
        '10% \'d e f\' minmax(1px, 10px)',
        '\'a b c\' * \'d e f\' *',
        '10% \'d e f\' minmax(1px, 10px) \'g h i\' min-content',
        '10% \'d e f\' \'g h i\' max-content',
        '\'a b\' \'c d\'', '* 10em \'a b c\' \'a b d\' 4em'
      ),
      'flow': ['auto', 'p1', '\'initial\'', '*', 'same'],
      'grid-area': ['none'].concat(
        ['1', 'same', 'next'].times(2),
        ['1', 'same', 'next'].times(2).and(['1 1'])
      ),
      'chains': ['none', 'a', 'b c', 'd, e', 'f g, h i', 'j, k l', 'm n, o p', '@ a b c d e, f g h i j k']
    },
    'selectors': {
      '::slot()': 'body::slot(a)',
      '::blank()': 'body::blank(a)'
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

  // New CSS Level 1
  'css-transforms-1': {
    'title': 'Transforms Level 1',
    'tr': 'http://www.w3.org/TR/css3-transforms/',
    'properties': {
      'transform': ['none', 'matrix(1, 2, 3, 4, 5, 6)'].concat(
        ['0', '10px', '-20px', '50%'].times(1, 2, ', ').map(function (arg) {
          return 'translate(' + arg + ')';
        }),
        ['0', '10px', '-20px', '50%'].map(function (translationValue) {
          return 'translateX(' + translationValue + ')';
        }),
        ['0', '10px', '-20px', '50%'].map(function (translationValue) {
          return 'translateY(' + translationValue + ')';
        }),
        ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotate(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].times(1, 2, ', ').map(function (arg) {
          return 'skew(' + arg + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'skewX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'skewY(' + angle + ')';
        }),
        ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
        ['0', '10px', '-20px', '50%'].times(2, 2, ', ').map(function (arg) {
          return 'translate3d(' + arg + ', 10px)';
        }),
        ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotate3d(1, 2, 3, ' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotateX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotateY(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotateZ(' + angle + ')';
        }),
        [
          'perspective(10px)', 'matrix(1, 2, 3, 4, 5, 6) translate(0)',
          'scale(2, -1) scaleY(2.5) matrix(1, -.2, 0, 1, 10, 10)',
          'translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)',
          'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) translate3d(0, 0, 10px)',
          'scale3d(1, 0, -1) rotateX(-45deg) rotateY(-45deg) rotateZ(-45deg)',
          'translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)',
          'matrix(1, 2, 3, 4, 5, 6) matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'
        ]
      ),
      'transform-origin': ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
        ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px']),
        ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px']).and(['10px']),
        [
          'top left', 'center left', 'bottom left', 'top center',
          'bottom center', 'top right', 'center right', 'bottom right'
        ],
        [
          'top left', 'center left', 'bottom left', 'top center',
          'bottom center', 'top right', 'center right', 'bottom right'
        ].and(['10px'])
      ),
      'transform-style': ['flat', 'preserve-3d'],
      'perspective': ['none', '600px'],
      'perspective-origin': ['left', 'center', 'right', 'top', 'bottom', '10%', '10px'].concat(
        ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px']),
        [
          'top left', 'center left', 'bottom left', 'top center',
          'bottom center', 'top right', 'center right', 'bottom right'
        ]
      ),
      'backface-visibility': ['visible', 'hidden']
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
        ['10px', '10%'].times(4, 6, ', ').map(function (arg) {
          return 'rectangle(' + arg + ')';
        }),
        ['10px', '10%'].times(4, 6, ', ').map(function (arg) {
          return 'inset-rectangle(' + arg + ')';
        }),
        ['10px', '10%'].times(3, ', ').map(function (arg) {
          return 'circle(' + arg + ')';
        }),
        ['10px', '10%'].times(4, ', ').map(function (arg) {
          return 'ellipse(' + arg + ')';
        }),
        ['10px', '10%'].times(2).concat(
          ['nonzero', 'evenodd'].and(['10px', '10%'].times(2), ', '),
          [
            '10px 10%, 10px 10%',
            'nonzero, 10px 10%, 10px 10%', 'evenodd, 10px 10%, 10px 10%',
            'nonzero, 100% 0, 100% 100%, 0 100%'
          ]
        ).map(function (arg) {
          return 'polygon(' + arg + ')';
        }),
        ['url(foo.png)']
      ),
      'shape-image-threshold': ['0.0', '0.5', '1.0'],
      'shape-margin': ['0', '1px', '10em']
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
      'ruby-align': [
        'auto', 'start', 'center',
        'distribute-letter', 'distribute-space'
      ]
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
        ['10px', '10%'].times(4, 6, ', ').map(function (arg) {
          return 'rectangle(' + arg + ')';
        }),
        ['10px', '10%'].times(4, 6, ', ').map(function (arg) {
          return 'inset-rectangle(' + arg + ')';
        }),
        ['10px', '10%'].times(3, ', ').map(function (arg) {
          return 'circle(' + arg + ')';
        }),
        ['10px', '10%'].times(4, ', ').map(function (arg) {
          return 'ellipse(' + arg + ')';
        }),
        ['10px', '10%'].times(2).concat(
          ['nonzero', 'evenodd'].and(['10px', '10%'].times(2), ', '),
          [
            '10px 10%, 10px 10%',
            'nonzero, 10px 10%, 10px 10%', 'evenodd, 10px 10%, 10px 10%',
            'nonzero, 100% 0, 100% 100%, 0 100%'
          ]
        ).map(function (arg) {
          return 'polygon(' + arg + ')';
        }),
        ['url(foo.png)']
      ),
      'shape-margin': ['0', '1px', '10em']
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
        'image(ltr url(foo.png))', 'image(rtl \'foo.png\')', 'image(ltr \'arrow.png\')',
        'image(rtl url(arrow.png) \'foo.png\')',
        'image(ltr \'wavy.svg\', \'wavy.png\' , \'wavy.gif\')',
        'image(rtl \'dark.png\', black)', 'image(ltr green)'
      ],
      'image-set()': [
        'image-set(url(foo.png) 600dpi)', 'image-set(\'foo.png\' 600dpcm)',
        'image-set(linear-gradient(white, black) 600dppx)', 'image-set(radial-gradient(white, black) 1x)',
        'image-set(url(foo.png) 600dpi, \'foo.png\' 600dpcm)',
        'image-set(\'foo.png\' 1x, \'foo-2x.png\' 2x, \'foo-print.png\' 600dpi)',
        'image-set(url(foo.png) 600dppx, black)', 'image-set(url(foo.png) 1x, \'foo.png\' 2x, white)'
      ],
      'element()': [
        'element(#src)'
      ],
      'cross-fade()': [
        'cross-fade(url(foo.png))', 'cross-fade(10% linear-gradient(white, black))',
        'cross-fade(url(foo.png), linear-gradient(white, black))',
        'cross-fade(0% url(foo.png), url(arrow.png))',
        'cross-fade(url(foo.png), black)', 'cross-fade(50% url(foo.png), black)',
        'cross-fade(url(foo.png), linear-gradient(white, black), white)',
        'cross-fade(100% url(foo.png), url(arrow.png), white)'
      ],
      'linear-gradient()': [
        'linear-gradient(white black, black)',
        'linear-gradient(10px white, black)',
        'linear-gradient(10% white, black)',
        'linear-gradient(white black 10px, black)',
        'linear-gradient(white black 10%, black)',
        'linear-gradient(white 10px black, black)',
        'linear-gradient(white 10% black, black)',
        'linear-gradient(white 10px 10px, black)',
        'linear-gradient(white 10% 20%, black)',
        'linear-gradient(white 10px 20%, black)',
        'linear-gradient(white 10% 10px, black)',
        'linear-gradient(black 10px white, black)',
        'linear-gradient(black 10% white, black)',
        'linear-gradient(10px black white, black)',
        'linear-gradient(10% black white, black)',
        'linear-gradient(10px 10px white, black)',
        'linear-gradient(10% 20% white, black)',
        'linear-gradient(10px 20% white, black)',
        'linear-gradient(10% 10px white, black)',
        'linear-gradient(white black 10px 10px, black)',
        'linear-gradient(white black 10% 20%, black)',
        'linear-gradient(white black 10px 20%, black)',
        'linear-gradient(white black 10% 10px, black)',
        'linear-gradient(white 10px 10px black, black)',
        'linear-gradient(white 10% 20% black, black)',
        'linear-gradient(white 10px 20% black, black)',
        'linear-gradient(white 10% 10px black, black)',
        'linear-gradient(black 10px 10px white, black)',
        'linear-gradient(black 10% 20% white, black)',
        'linear-gradient(black 10px 20% white, black)',
        'linear-gradient(black 10% 10px white, black)',
        'linear-gradient(10px 10px black white, black)',
        'linear-gradient(10% 20% black white, black)',
        'linear-gradient(10px 20% black white, black)',
        'linear-gradient(10% 10px black white, black)',
        'linear-gradient(10% 10px black white, white black 10px 10px)',
        'linear-gradient(-10deg, white black 10% 20%, black)',
        'linear-gradient(200grad, white, white black 10px 20%)',
        'linear-gradient(1rad, white black 10% 10px, white 10px 10px black)',
        'linear-gradient(1turn, white black 10px, 10% 10px white)',
        'linear-gradient(to left, white black, black)',
        'linear-gradient(to right, white, 10px white)',
        'linear-gradient(to top, white black 10%, white 10px black)',
        'linear-gradient(to bottom, white black 10px 10px, 10% 10px black white)',
        'linear-gradient(to left top, white black, black)',
        'linear-gradient(to left bottom, white, 10px white)',
        'linear-gradient(to right top, white black 10%, white 10px black)',
        'linear-gradient(to right bottom, white black 10px 10px, 10% 10px black white)',
        'linear-gradient(to top left, white black, black)',
        'linear-gradient(to top right, white, 10px white)',
        'linear-gradient(to bottom left, white black 10%, white 10px black)',
        'linear-gradient(to bottom right, white black 10px 10px, 10% 10px black white)',
        'linear-gradient(-270deg, white, white black, white black 10px, white black 10px 10px)',
        'linear-gradient(to bottom right, currentColor rgba(255, 0, 255, 0.3),  transparent hsla(225, 50%, 100%, 0.7) 75%, 10px 10px black white)'
      ],
      'radial-gradient()': [
        'radial-gradient(white black, black)',
        'radial-gradient(10px white, black)',
        'radial-gradient(10% white, black)',
        'radial-gradient(white black 10px, black)',
        'radial-gradient(white black 10%, black)',
        'radial-gradient(white 10px black, black)',
        'radial-gradient(white 10% black, black)',
        'radial-gradient(white 10px 10px, black)',
        'radial-gradient(white 10% 20%, black)',
        'radial-gradient(white 10px 20%, black)',
        'radial-gradient(white 10% 10px, black)',
        'radial-gradient(black 10px white, black)',
        'radial-gradient(black 10% white, black)',
        'radial-gradient(10px black white, black)',
        'radial-gradient(10% black white, black)',
        'radial-gradient(10px 10px white, black)',
        'radial-gradient(10% 20% white, black)',
        'radial-gradient(10px 20% white, black)',
        'radial-gradient(10% 10px white, black)',
        'radial-gradient(white black 10px 10px, black)',
        'radial-gradient(white black 10% 20%, black)',
        'radial-gradient(white black 10px 20%, black)',
        'radial-gradient(white black 10% 10px, black)',
        'radial-gradient(white 10px 10px black, black)',
        'radial-gradient(white 10% 20% black, black)',
        'radial-gradient(white 10px 20% black, black)',
        'radial-gradient(white 10% 10px black, black)',
        'radial-gradient(black 10px 10px white, black)',
        'radial-gradient(black 10% 20% white, black)',
        'radial-gradient(black 10px 20% white, black)',
        'radial-gradient(black 10% 10px white, black)',
        'radial-gradient(10px 10px black white, black)',
        'radial-gradient(10% 20% black white, black)',
        'radial-gradient(10px 20% black white, black)',
        'radial-gradient(10% 10px black white, black)',
        'radial-gradient(10% 10px black white, white black 10px 10px)',
        'radial-gradient(circle, white black, black)',
        'radial-gradient(10px, white, 10px white)',
        'radial-gradient(circle 10em, 10% white, white black 10px)',
        'radial-gradient(100px circle, white black 10%, black)',
        'radial-gradient(ellipse, white, white 10px black)',
        'radial-gradient(10px 10%, white 10% black, white 10px 10px)',
        'radial-gradient(ellipse 10% 20%, white 10% 20%, black)',
        'radial-gradient(10em 100px ellipse, white, white 10px 20%)',
        'radial-gradient(closest-corner, white 10% 10px, black 10px white)',
        'radial-gradient(closest-side, black 10% white, black)',
        'radial-gradient(farthest-corner, white, 10px black white)',
        'radial-gradient(farthest-side, 10% black white, 10px 10px white)',
        'radial-gradient(circle closest-corner, 10% 20% white, black)',
        'radial-gradient(closest-side ellipse, white, 10px 20% white)',
        'radial-gradient(at center, 10% 10px white, white black 10px 10px)',
        'radial-gradient(circle at left, white black 10% 20%, black)',
        'radial-gradient(ellipse at right, white, white black 10px 20%)',
        'radial-gradient(closest-corner at top, white black 10% 10px, white black 10px 20%)',
        'radial-gradient(closest-side at bottom, white black 10% 10px, black)',
        'radial-gradient(farthest-corner at 10%, white, white 10px 10px black)',
        'radial-gradient(farthest-side at 10px, white 10% 20% black, white 10px 20% black)',
        'radial-gradient(10px at left top, white 10% 10px black, black)',
        'radial-gradient(circle 10em at center 10%, white, black 10px 10px white)',
        'radial-gradient(100px circle at 10px bottom, black 10% 20% white, black 10px 20% white)',
        'radial-gradient(10px 10% at right center, black 10% 10px white, black)',
        'radial-gradient(ellipse 10% 20% at 10% 10%, white, 10px 10px black white)',
        'radial-gradient(10em 100px ellipse at 10px 10px, 10% 20% black white, 10px 20% black white)',
        'radial-gradient(circle closest-corner at 10% 10px, 10% 10px black white, black)',
        'radial-gradient(closest-side ellipse at 10px 10%, white, white black)',
        'radial-gradient(at bottom left, 10px white, 10% white)',
        'radial-gradient(at center top 50%, white black 10px, black)',
        'radial-gradient(at right 50px center, white, white black 10%)',
        'radial-gradient(at left 10px top 10%, white 10px black, white 10% black)',
        'radial-gradient(at bottom 50% right 50%, white 10px 10px, black)',
        'radial-gradient(10% 100px ellipse at top 10% right 10px, white, white black, white black 10px, white black 10px 10px)',
        'radial-gradient(ellipse 10% 20% at top 30% left 40%, white, currentColor #0000FF, rgba(255, 255, 0, 0.5) hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow transparent 100% 10px)'
      ],
      'conic-gradient()': [
        'conic-gradient(white, black)',
        'conic-gradient(white black, black)',
        'conic-gradient(white 0deg, black)',
        'conic-gradient(white 10%, black)',
        'conic-gradient(10grad white, black)',
        'conic-gradient(10% white, black)',
        'conic-gradient(white black 1rad, black)',
        'conic-gradient(white black 10%, black)',
        'conic-gradient(white 1turn black, black)',
        'conic-gradient(white 10% black, black)',
        'conic-gradient(white 0deg 10deg, black)',
        'conic-gradient(white 10% 20%, black)',
        'conic-gradient(white 0deg 20%, black)',
        'conic-gradient(white 10% 10deg, black)',
        'conic-gradient(black 1rad white, black)',
        'conic-gradient(black 10% white, black)',
        'conic-gradient(1turn black white, black)',
        'conic-gradient(10% black white, black)',
        'conic-gradient(0deg 10deg white, black)',
        'conic-gradient(10% 20% white, black)',
        'conic-gradient(0deg 20% white, black)',
        'conic-gradient(10% 10deg white, black)',
        'conic-gradient(white black 0deg 10deg, black)',
        'conic-gradient(white black 10% 20%, black)',
        'conic-gradient(white black 0deg 20%, black)',
        'conic-gradient(white black 10% 10deg, black)',
        'conic-gradient(white 0deg 10deg black, black)',
        'conic-gradient(white 10% 20% black, black)',
        'conic-gradient(white 0deg 20% black, black)',
        'conic-gradient(white 10% 10deg black, black)',
        'conic-gradient(black 0deg 10deg white, black)',
        'conic-gradient(black 10% 20% white, black)',
        'conic-gradient(black 0deg 20% white, black)',
        'conic-gradient(black 10% 10deg white, black)',
        'conic-gradient(0deg 10deg black white, black)',
        'conic-gradient(10% 20% black white, black)',
        'conic-gradient(0deg 20% black white, black)',
        'conic-gradient(10% 10deg black white, black)',
        'conic-gradient(red -50%, yellow 150% white)',
        'conic-gradient(white black 0deg 10deg, 10% 10deg black white)',
        'conic-gradient(red, blue, yellow)',
        'conic-gradient(at center, white, black)',
        'conic-gradient(at left, white, black)',
        'conic-gradient(at right, white, black)',
        'conic-gradient(at top, white, black)',
        'conic-gradient(at bottom, white, black)',
        'conic-gradient(at 10%, white, black)',
        'conic-gradient(at 10px, white, black)',
        'conic-gradient(at left top, white, black)',
        'conic-gradient(at center 10%, white, black)',
        'conic-gradient(at 10px bottom, white, black)',
        'conic-gradient(at right center, white, black)',
        'conic-gradient(at 10% 10%, white, black)',
        'conic-gradient(at 10px 10px, white, black)',
        'conic-gradient(at 10% 10px, white, black)',
        'conic-gradient(at 10px 10%, white, black)',
        'conic-gradient(at bottom left, white, black)',
        'conic-gradient(at center top 50%, white, black)',
        'conic-gradient(at right 50px center, white, black)',
        'conic-gradient(at left 10px top 10%, white, black)',
        'conic-gradient(at bottom 50% right 50%, white, black)',
        'conic-gradient(at top 10% right 10px, white 10%, black 0deg, red 50%)',
        'conic-gradient(at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)',
        'conic-gradient(at bottom 50% right 50%, white black 0deg 10deg, 10% 10grad black white, white 10% 10rad black, black 0turn 20% white)'
      ],
      'repeating-linear-gradient()': [
        'repeating-linear-gradient(white black, black)',
        'repeating-linear-gradient(10px white, black)',
        'repeating-linear-gradient(10% white, black)',
        'repeating-linear-gradient(white black 10px, black)',
        'repeating-linear-gradient(white black 10%, black)',
        'repeating-linear-gradient(white 10px black, black)',
        'repeating-linear-gradient(white 10% black, black)',
        'repeating-linear-gradient(white 10px 10px, black)',
        'repeating-linear-gradient(white 10% 20%, black)',
        'repeating-linear-gradient(white 10px 20%, black)',
        'repeating-linear-gradient(white 10% 10px, black)',
        'repeating-linear-gradient(black 10px white, black)',
        'repeating-linear-gradient(black 10% white, black)',
        'repeating-linear-gradient(10px black white, black)',
        'repeating-linear-gradient(10% black white, black)',
        'repeating-linear-gradient(10px 10px white, black)',
        'repeating-linear-gradient(10% 20% white, black)',
        'repeating-linear-gradient(10px 20% white, black)',
        'repeating-linear-gradient(10% 10px white, black)',
        'repeating-linear-gradient(white black 10px 10px, black)',
        'repeating-linear-gradient(white black 10% 20%, black)',
        'repeating-linear-gradient(white black 10px 20%, black)',
        'repeating-linear-gradient(white black 10% 10px, black)',
        'repeating-linear-gradient(white 10px 10px black, black)',
        'repeating-linear-gradient(white 10% 20% black, black)',
        'repeating-linear-gradient(white 10px 20% black, black)',
        'repeating-linear-gradient(white 10% 10px black, black)',
        'repeating-linear-gradient(black 10px 10px white, black)',
        'repeating-linear-gradient(black 10% 20% white, black)',
        'repeating-linear-gradient(black 10px 20% white, black)',
        'repeating-linear-gradient(black 10% 10px white, black)',
        'repeating-linear-gradient(10px 10px black white, black)',
        'repeating-linear-gradient(10% 20% black white, black)',
        'repeating-linear-gradient(10px 20% black white, black)',
        'repeating-linear-gradient(10% 10px black white, black)',
        'repeating-linear-gradient(10% 10px black white, white black 10px 10px)',
        'repeating-linear-gradient(-10deg, white black 10% 20%, black)',
        'repeating-linear-gradient(200grad, white, white black 10px 20%)',
        'repeating-linear-gradient(1rad, white black 10% 10px, white 10px 10px black)',
        'repeating-linear-gradient(1turn, white black 10px, 10% 10px white)',
        'repeating-linear-gradient(to left, white black, black)',
        'repeating-linear-gradient(to right, white, 10px white)',
        'repeating-linear-gradient(to top, white black 10%, white 10px black)',
        'repeating-linear-gradient(to bottom, white black 10px 10px, 10% 10px black white)',
        'repeating-linear-gradient(to left top, white black, black)',
        'repeating-linear-gradient(to left bottom, white, 10px white)',
        'repeating-linear-gradient(to right top, white black 10%, white 10px black)',
        'repeating-linear-gradient(to right bottom, white black 10px 10px, 10% 10px black white)',
        'repeating-linear-gradient(to top left, white black, black)',
        'repeating-linear-gradient(to top right, white, 10px white)',
        'repeating-linear-gradient(to bottom left, white black 10%, white 10px black)',
        'repeating-linear-gradient(to bottom right, white black 10px 10px, 10% 10px black white)',
        'repeating-linear-gradient(-270deg, white, white black, white black 10px, white black 10px 10px)',
        'repeating-linear-gradient(to bottom right, currentColor rgba(255, 0, 255, 0.3),  transparent hsla(225, 50%, 100%, 0.7) 75%, 10px 10px black white)'
      ],
      'repeating-radial-gradient()': [
        'repeating-radial-gradient(white black, black)',
        'repeating-radial-gradient(10px white, black)',
        'repeating-radial-gradient(10% white, black)',
        'repeating-radial-gradient(white black 10px, black)',
        'repeating-radial-gradient(white black 10%, black)',
        'repeating-radial-gradient(white 10px black, black)',
        'repeating-radial-gradient(white 10% black, black)',
        'repeating-radial-gradient(white 10px 10px, black)',
        'repeating-radial-gradient(white 10% 20%, black)',
        'repeating-radial-gradient(white 10px 20%, black)',
        'repeating-radial-gradient(white 10% 10px, black)',
        'repeating-radial-gradient(black 10px white, black)',
        'repeating-radial-gradient(black 10% white, black)',
        'repeating-radial-gradient(10px black white, black)',
        'repeating-radial-gradient(10% black white, black)',
        'repeating-radial-gradient(10px 10px white, black)',
        'repeating-radial-gradient(10% 20% white, black)',
        'repeating-radial-gradient(10px 20% white, black)',
        'repeating-radial-gradient(10% 10px white, black)',
        'repeating-radial-gradient(white black 10px 10px, black)',
        'repeating-radial-gradient(white black 10% 20%, black)',
        'repeating-radial-gradient(white black 10px 20%, black)',
        'repeating-radial-gradient(white black 10% 10px, black)',
        'repeating-radial-gradient(white 10px 10px black, black)',
        'repeating-radial-gradient(white 10% 20% black, black)',
        'repeating-radial-gradient(white 10px 20% black, black)',
        'repeating-radial-gradient(white 10% 10px black, black)',
        'repeating-radial-gradient(black 10px 10px white, black)',
        'repeating-radial-gradient(black 10% 20% white, black)',
        'repeating-radial-gradient(black 10px 20% white, black)',
        'repeating-radial-gradient(black 10% 10px white, black)',
        'repeating-radial-gradient(10px 10px black white, black)',
        'repeating-radial-gradient(10% 20% black white, black)',
        'repeating-radial-gradient(10px 20% black white, black)',
        'repeating-radial-gradient(10% 10px black white, black)',
        'repeating-radial-gradient(10% 10px black white, white black 10px 10px)',
        'repeating-radial-gradient(circle, white black, black)',
        'repeating-radial-gradient(10px, white, 10px white)',
        'repeating-radial-gradient(circle 10em, 10% white, white black 10px)',
        'repeating-radial-gradient(100px circle, white black 10%, black)',
        'repeating-radial-gradient(ellipse, white, white 10px black)',
        'repeating-radial-gradient(10px 10%, white 10% black, white 10px 10px)',
        'repeating-radial-gradient(ellipse 10% 20%, white 10% 20%, black)',
        'repeating-radial-gradient(10em 100px ellipse, white, white 10px 20%)',
        'repeating-radial-gradient(closest-corner, white 10% 10px, black 10px white)',
        'repeating-radial-gradient(closest-side, black 10% white, black)',
        'repeating-radial-gradient(farthest-corner, white, 10px black white)',
        'repeating-radial-gradient(farthest-side, 10% black white, 10px 10px white)',
        'repeating-radial-gradient(circle closest-corner, 10% 20% white, black)',
        'repeating-radial-gradient(closest-side ellipse, white, 10px 20% white)',
        'repeating-radial-gradient(at center, 10% 10px white, white black 10px 10px)',
        'repeating-radial-gradient(circle at left, white black 10% 20%, black)',
        'repeating-radial-gradient(ellipse at right, white, white black 10px 20%)',
        'repeating-radial-gradient(closest-corner at top, white black 10% 10px, white black 10px 20%)',
        'repeating-radial-gradient(closest-side at bottom, white black 10% 10px, black)',
        'repeating-radial-gradient(farthest-corner at 10%, white, white 10px 10px black)',
        'repeating-radial-gradient(farthest-side at 10px, white 10% 20% black, white 10px 20% black)',
        'repeating-radial-gradient(10px at left top, white 10% 10px black, black)',
        'repeating-radial-gradient(circle 10em at center 10%, white, black 10px 10px white)',
        'repeating-radial-gradient(100px circle at 10px bottom, black 10% 20% white, black 10px 20% white)',
        'repeating-radial-gradient(10px 10% at right center, black 10% 10px white, black)',
        'repeating-radial-gradient(ellipse 10% 20% at 10% 10%, white, 10px 10px black white)',
        'repeating-radial-gradient(10em 100px ellipse at 10px 10px, 10% 20% black white, 10px 20% black white)',
        'repeating-radial-gradient(circle closest-corner at 10% 10px, 10% 10px black white, black)',
        'repeating-radial-gradient(closest-side ellipse at 10px 10%, white, white black)',
        'repeating-radial-gradient(at bottom left, 10px white, 10% white)',
        'repeating-radial-gradient(at center top 50%, white black 10px, black)',
        'repeating-radial-gradient(at right 50px center, white, white black 10%)',
        'repeating-radial-gradient(at left 10px top 10%, white 10px black, white 10% black)',
        'repeating-radial-gradient(at bottom 50% right 50%, white 10px 10px, black)',
        'repeating-radial-gradient(10% 100px ellipse at top 10% right 10px, white, white black, white black 10px, white black 10px 10px)',
        'repeating-radial-gradient(ellipse 10% 20% at top 30% left 40%, white, currentColor #0000FF, rgba(255, 255, 0, 0.5) hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow transparent 100% 10px)'
      ],
      'repeating-conic-gradient()': [
        'repeating-conic-gradient(white, black)',
        'repeating-conic-gradient(white black, black)',
        'repeating-conic-gradient(white 0deg, black)',
        'repeating-conic-gradient(white 10%, black)',
        'repeating-conic-gradient(black white, black)',
        'repeating-conic-gradient(10grad white, black)',
        'repeating-conic-gradient(10% white, black)',
        'repeating-conic-gradient(white black 1rad, black)',
        'repeating-conic-gradient(white black 10%, black)',
        'repeating-conic-gradient(white 1turn black, black)',
        'repeating-conic-gradient(white 10% black, black)',
        'repeating-conic-gradient(white 0deg 10deg, black)',
        'repeating-conic-gradient(white 10% 20%, black)',
        'repeating-conic-gradient(white 0deg 20%, black)',
        'repeating-conic-gradient(white 10% 10deg, black)',
        'repeating-conic-gradient(black 1rad white, black)',
        'repeating-conic-gradient(black 10% white, black)',
        'repeating-conic-gradient(1turn black white, black)',
        'repeating-conic-gradient(10% black white, black)',
        'repeating-conic-gradient(0deg 10deg white, black)',
        'repeating-conic-gradient(10% 20% white, black)',
        'repeating-conic-gradient(0deg 20% white, black)',
        'repeating-conic-gradient(10% 10deg white, black)',
        'repeating-conic-gradient(white black 0deg 10deg, black)',
        'repeating-conic-gradient(white black 10% 20%, black)',
        'repeating-conic-gradient(white black 0deg 20%, black)',
        'repeating-conic-gradient(white black 10% 10deg, black)',
        'repeating-conic-gradient(white 0deg 10deg black, black)',
        'repeating-conic-gradient(white 10% 20% black, black)',
        'repeating-conic-gradient(white 0deg 20% black, black)',
        'repeating-conic-gradient(white 10% 10deg black, black)',
        'repeating-conic-gradient(black 0deg 10deg white, black)',
        'repeating-conic-gradient(black 10% 20% white, black)',
        'repeating-conic-gradient(black 0deg 20% white, black)',
        'repeating-conic-gradient(black 10% 10deg white, black)',
        'repeating-conic-gradient(0deg 10deg black white, black)',
        'repeating-conic-gradient(10% 20% black white, black)',
        'repeating-conic-gradient(0deg 20% black white, black)',
        'repeating-conic-gradient(10% 10deg black white, black)',
        'repeating-conic-gradient(red -50%, yellow 150% white)',
        'repeating-conic-gradient(white black 0deg 10deg, 10% 10deg black white)',
        'repeating-conic-gradient(red, blue, yellow)',
        'repeating-conic-gradient(at center, white, black)',
        'repeating-conic-gradient(at left, white, black)',
        'repeating-conic-gradient(at right, white, black)',
        'repeating-conic-gradient(at top, white, black)',
        'repeating-conic-gradient(at bottom, white, black)',
        'repeating-conic-gradient(at 10%, white, black)',
        'repeating-conic-gradient(at 10px, white, black)',
        'repeating-conic-gradient(at left top, white, black)',
        'repeating-conic-gradient(at center 10%, white, black)',
        'repeating-conic-gradient(at 10px bottom, white, black)',
        'repeating-conic-gradient(at right center, white, black)',
        'repeating-conic-gradient(at 10% 10%, white, black)',
        'repeating-conic-gradient(at 10px 10px, white, black)',
        'repeating-conic-gradient(at 10% 10px, white, black)',
        'repeating-conic-gradient(at 10px 10%, white, black)',
        'repeating-conic-gradient(at bottom left, white, black)',
        'repeating-conic-gradient(at center top 50%, white, black)',
        'repeating-conic-gradient(at right 50px center, white, black)',
        'repeating-conic-gradient(at left 10px top 10%, white, black)',
        'repeating-conic-gradient(at bottom 50% right 50%, white, black)',
        'repeating-conic-gradient(at top 10% right 10px, white 10%, black 0deg, red 50%)',
        'repeating-conic-gradient(at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)',
        'repeating-conic-gradient(at bottom 50% right 50%, white black 0deg 10deg, 10% 10grad black white, white 10% 10rad black, black 0turn 20% white)',
        'repeating-conic-gradient(at 20%, white 0deg, white 20deg, red 20deg, red 40deg)'
      ],
    },
    'properties': {
      'image-orientation': ['from-image'],
      'image-rendering': ['auto', 'crisp-edges', 'pixelated']
    }
  },

  'selectors4': {
    'title': 'Selectors Level 4',
    'selectors': {
      'E! > F, !E F': [
        'head! > title', '!ol > li', 'ul > ol! > li',
        '!span:only-child a[href^=\'https://\']'
      ],
      'E /attr/ F': ['label /for/ input'],
      'E || F': ['col.selected || td'],
      '[att=val i]': ['[class=\'example\' i]', '[frame=hsides i]'],
      ':any-link': [':any-link'],
      ':local-link': [':local-link'],
      ':local-link()': [
        ':local-link(0)', ':local-link(1)', ':not(:local-link(0))'
      ],
      ':scope': [':scope', ':scope > .example'],
      ':current': [':current'],
      ':current()': [':current(div)', ':current(p, li, dt, dd)'],
      ':past': [':past'],
      ':future': [':future'],
      ':active-drop': [':active-drop'],
      ':valid-drop': [':valid-drop'],
      ':invalid-drop': [':invalid-drop'],
      ':active-drop-target': [':active-drop-target'],
      ':valid-drop-target': [':valid-drop-target'],
      ':invalid-drop-target': [':invalid-drop-target'],
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
        ':matches(section, article)',
        ':matches(section, article, aside, nav) h1',
        ':matches(section, article, aside, nav) ' +
          ':matches(section, article, aside, nav) h1',
        // complete profile
        ':matches(div div)', ':matches(div > div)',
        ':matches(div + div)', ':matches(div ~ div)',
        ':matches(div#text.text[data-text^=\'base\']:only-child > div, main)'
      ],
      ':nth-match(an+b of selector-list)': [
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
      ':nth-last-match(an+b of selector-list)': [
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
      'script': ['(script)', 'not all and (script: 0)', 'not all and (script: -0)', '(script: 1)'],
      'floating': ['(pointer)', '(pointer: none)', '(pointer: coarse)', '(pointer: fine)'],
      'hover': ['(hover)', '(hover: 0)', '(hover: -0)', '(hover: 1)'],
      'luminosity': ['(luminosity)', '(luminosity: dim)', '(luminosity: normal)', '(luminosity: washed)']
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
  'filter-effects': {
    'title': 'Filter Effects 1.0',
    'dev': 'http://dev.w3.org/fxtf/filters/',
    'properties': {
      'filter': [
        'none', 'url(commonmasks.xml#mask)',
        'grayscale(10)', 'grayscale(100%)', 'sepia(50)', 'sepia(10%)',
        'saturate(10)', 'saturate(50%)', 'hue-rotate(90deg)',
        'invert(100)', 'invert(0%)', 'opacity(1)', 'opacity(25%)',
        'brightness(15)', 'brightness(15%)', 'contrast(45)', 'contrast(1%)',
        'blur(10px)'
      ].concat([
        '1px 2px', '1px 2px 3px',
        '1px 2px red', 'blue 1px 2px', '1px 2px 3px yellow', 'green 1px 2px 3px',
        '1px 2px, 1px 2px', '1px 2px 3px red, 1px 2px 3px red'
      ].map(function (shadow) {
        return 'drop-shadow(' + shadow + ')';
      })).concat(
        ['warp, param'].and(['matrix(1, 2, 3, 4, 5, 6)'].concat(
          ['0', '10px', '-20px', '50%'].times(1, 2, ', ').map(function (arg) {
            return 'translate(' + arg + ')';
          }),
          ['0', '10px', '-20px', '50%'].map(function (translationValue) {
            return 'translateX(' + translationValue + ')';
          }),
          ['0', '10px', '-20px', '50%'].map(function (translationValue) {
            return 'translateY(' + translationValue + ')';
          }),
          ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'rotate(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].times(1, 2, ', ').map(function (arg) {
            return 'skew(' + arg + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'skewX(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'skewY(' + angle + ')';
          }),
          ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
          ['0', '10px', '-20px', '50%'].times(2, 2, ', ').map(function (arg) {
            return 'translate3d(' + arg + ', 10px)';
          }),
          ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'rotate3d(1, 2, 3, ' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'rotateX(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'rotateY(' + angle + ')';
          }),
          ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
            return 'rotateZ(' + angle + ')';
          }),
          [
            'perspective(10px)', 'matrix(1, 2, 3, 4, 5, 6) translate(0)',
            'scale(2, -1) scaleY(2.5) matrix(1, -.2, 0, 1, 10, 10)',
            'translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)',
            'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) translate3d(0, 0, 10px)',
            'scale3d(1, 0, -1) rotateX(-45deg) rotateY(-45deg) rotateZ(-45deg)',
            'translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)',
            'matrix(1, 2, 3, 4, 5, 6) matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'
          ],
          ['1'].times(1, 4),
          ['array(1)', 'array(1, 2)'],
          ['2'].times(3, 3, ', ').map(function (arg) {
            return 'mat2(1, ' + arg + ')';
          }),
          ['2'].times(8, 8, ', ').map(function (arg) {
            return 'mat3(1, ' + arg + ')';
          }),
          ['2'].times(15, 15, ', ').map(function (arg) {
            return 'mat4(1, ' + arg + ')';
          }),
          ['white', 'url(foo.png)']
        )).map(function (arg) {
          return 'custom(' + arg + ')';
        }),
        [
          'custom(warp, warp 1, warp 1)',
          'custom(warp, param matrix(1, 2, 3, 4, 5, 6), shader rotate(90deg))',
          'custom(warp, distortAmount 0.5, lightVector 1.0 1.0 0.0, disp texture(disp.png))',
          'linear-gradient(white, black), none', 'linear-gradient(white, black), sepia(50%)',
          'linear-gradient(white, black), sepia(50%) contrast(50%)',
          'linear-gradient(white, black), custom(warp, param matrix(1, 2, 3, 4, 5, 6), shader rotate(90deg))'
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
        'url(\'simple.vs\')', 'url(\'simple.vs\') format(\'x-shader/x-vertex\')',
        'url(\'simple.vs\'), url(simple.fs)',
        'url(\'simple.vs\') format(\'x-shader/x-vertex\'), url(simple.fs) format(\'x-shader/x-fragment\')'
      ],
      'parameters': ['warp'].and(['matrix(1, 2, 3, 4, 5, 6)'].concat(
        ['0', '10px', '-20px', '50%'].times(1, 2, ', ').map(function (arg) {
          return 'translate(' + arg + ')';
        }),
        ['0', '10px', '-20px', '50%'].map(function (translationValue) {
          return 'translateX(' + translationValue + ')';
        }),
        ['0', '10px', '-20px', '50%'].map(function (translationValue) {
          return 'translateY(' + translationValue + ')';
        }),
        ['scale(1)', 'scale(1, 2)', 'scaleX(1)', 'scaleY(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotate(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].times(1, 2, ', ').map(function (arg) {
          return 'skew(' + arg + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'skewX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'skewY(' + angle + ')';
        }),
        ['matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'],
        ['0', '10px', '-20px', '50%'].times(2, 2, ', ').map(function (arg) {
          return 'translate3d(' + arg + ', 10px)';
        }),
        ['translateZ(10px)', 'scale3d(1, 2, 3)', 'scaleZ(1)'],
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotate3d(1, 2, 3, ' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotateX(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotateY(' + angle + ')';
        }),
        ['90deg', '100grad', '1rad', '1turn'].map(function (angle) {
          return 'rotateZ(' + angle + ')';
        }),
        [
          'perspective(10px)', 'matrix(1, 2, 3, 4, 5, 6) translate(0)',
          'scale(2, -1) scaleY(2.5) matrix(1, -.2, 0, 1, 10, 10)',
          'translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)',
          'matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) translate3d(0, 0, 10px)',
          'scale3d(1, 0, -1) rotateX(-45deg) rotateY(-45deg) rotateZ(-45deg)',
          'translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)',
          'matrix(1, 2, 3, 4, 5, 6) matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)'
        ],
        ['1'].times(1, 4),
        ['array(1)', 'array(1, 2)'],
        ['2'].times(3, 3, ', ').map(function (arg) {
          return 'mat2(1, ' + arg + ')';
        }),
        ['2'].times(8, 8, ', ').map(function (arg) {
          return 'mat3(1, ' + arg + ')';
        }),
        ['2'].times(15, 15, ', ').map(function (arg) {
          return 'mat4(1, ' + arg + ')';
        }),
        ['white', 'url(foo.png)']
      )).concat([
        'warp 1, warp 1',
        'distortAmount 0.5, lightVector 1.0 1.0 0.0, disp texture(disp.png)'
      ]),
      'geometry': ['1', '1 2'].or(['detached', 'attached']).map(function (arg) {
        return 'grid(' + arg + ')';
      }),
      'mix': [
        'auto', 'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
        'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
        'exclusion', 'hue', 'saturation', 'color', 'luminosity',
        'clear', 'copy', 'destination', 'source-over', 'destination-over',
        'source-in', 'destination-in', 'source-out', 'destination-out',
        'source-atop', 'destination-atop', 'xor', 'lighter'
      ],
      'margin': ['10px', '10%', 'auto'].times(1, 4)
    }
  },

  'css-masking': {
    'title': 'Masking Level 1',
    'dev': 'http://dev.w3.org/fxtf/masking/',
    'properties': {
      'mask-image': [
        'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
        'url(#mask)', 'url(commonmasks.xml#mask)', 'child',
        'select(img)', 'select(mask:last-of-type)', 'select(img, mask:last-of-type)',
        'none, none', 'none, url(foo.png)', 'url(tl.png), url(tr.png)',
        'url(foo.png), linear-gradient(white, black)',
        'linear-gradient(black 0%, transparent 100%), linear-gradient(white, black)',
        'none, url(foo.png), linear-gradient(white, black)'
      ],
      'mask-source-type': ['auto', 'alpha', 'luminance', 'alpha, luminance'],
      'mask-repeat': ['repeat-x', 'repeat-y'].concat(
        ['repeat', 'space', 'round', 'no-repeat'].times(1, 2),
        ['repeat-x, repeat-y']
      ),
      'mask-position': [
        'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px'])
      ).concat([
        'top center', 'top left', 'top right', 'bottom center', 'bottom left', 'bottom right', 'center left', 'center right',
        'center top 10%', 'center top 10px', 'center bottom 10%', 'center bottom 10px',
        'center left 10%', 'center left 10px', 'center right 10%', 'center right 10px',
        'left top 10%', 'left top 10px', 'left bottom 10%', 'left bottom 10px',
        'right top 10%', 'right top 10px', 'right bottom 10%', 'right bottom 10px',
        'top left 10%', 'top left 10px', 'top right 10%', 'top right 10px',
        'bottom left 10%', 'bottom left 10px', 'bottom right 10%', 'bottom right 10px',
        'left 10% center', 'left 10% top', 'left 10% bottom',
        'left 10px center', 'left 10px top', 'left 10px bottom',
        'right 10% center', 'right 10% top', 'right 10% bottom',
        'right 10px center', 'right 10px top', 'right 10px bottom',
        'top 10% center', 'top 10% left', 'top 10% right',
        'top 10px center', 'top 10px left', 'top 10px right',
        'bottom 10% center', 'bottom 10% left', 'bottom 10% right',
        'bottom 10px center', 'bottom 10px left', 'bottom 10px right',
        'left 10% top 10%', 'left 10% top 10px', 'left 10% bottom 10%', 'left 10% bottom 10px',
        'left 10px top 10%', 'left 10px top 10px', 'left 10px bottom 10%', 'left 10px bottom 10px',
        'right 10% top 10%', 'right 10% top 10px', 'right 10% bottom 10%', 'right 10% bottom 10px',
        'right 10px top 10%', 'right 10px top 10px', 'right 10px bottom 10%', 'right 10px bottom 10px',
        'top 10% left 10%', 'top 10% left 10px', 'top 10% right 10%', 'top 10% right 10px',
        'top 10px left 10%', 'top 10px left 10px', 'top 10px right 10%', 'top 10px right 10px',
        'bottom 10% left 10%', 'bottom 10% left 10px', 'bottom 10% right 10%', 'bottom 10% right 10px',
        'bottom 10px left 10%', 'bottom 10px left 10px', 'bottom 10px right 10%', 'bottom 10px right 10px',
        'left, center'
      ]),
      'mask-clip': ['border-box', 'padding-box', 'content-box', 'no-clip', 'border-box, padding-box'],
      'mask-origin': ['border-box', 'padding-box', 'content-box', 'border-box, padding-box'],
      'mask-size': ['auto', '10px', '10%'].times(1, 2).concat(['cover', 'contain']),
      'mask': [
        'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
        'url(#mask)', 'url(commonmasks.xml#mask)', 'child',
        'select(img)', 'select(mask:last-of-type)', 'select(img, mask:last-of-type)',
        'none, none', 'none, url(foo.png)', 'url(tl.png), url(tr.png)',
        'url(foo.png), linear-gradient(white, black)',
        'linear-gradient(black 0%, transparent 100%), linear-gradient(white, black)',
        'none, url(foo.png), linear-gradient(white, black)'
      ].concat(
        [
          'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
        ].concat(
          ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px'])
        ).concat([
          'top center', 'top left', 'top right', 'bottom center', 'bottom left', 'bottom right', 'center left', 'center right',
          'center top 10%', 'center top 10px', 'center bottom 10%', 'center bottom 10px',
          'center left 10%', 'center left 10px', 'center right 10%', 'center right 10px',
          'left top 10%', 'left top 10px', 'left bottom 10%', 'left bottom 10px',
          'right top 10%', 'right top 10px', 'right bottom 10%', 'right bottom 10px',
          'top left 10%', 'top left 10px', 'top right 10%', 'top right 10px',
          'bottom left 10%', 'bottom left 10px', 'bottom right 10%', 'bottom right 10px',
          'left 10% center', 'left 10% top', 'left 10% bottom',
          'left 10px center', 'left 10px top', 'left 10px bottom',
          'right 10% center', 'right 10% top', 'right 10% bottom',
          'right 10px center', 'right 10px top', 'right 10px bottom',
          'top 10% center', 'top 10% left', 'top 10% right',
          'top 10px center', 'top 10px left', 'top 10px right',
          'bottom 10% center', 'bottom 10% left', 'bottom 10% right',
          'bottom 10px center', 'bottom 10px left', 'bottom 10px right',
          'left 10% top 10%', 'left 10% top 10px', 'left 10% bottom 10%', 'left 10% bottom 10px',
          'left 10px top 10%', 'left 10px top 10px', 'left 10px bottom 10%', 'left 10px bottom 10px',
          'right 10% top 10%', 'right 10% top 10px', 'right 10% bottom 10%', 'right 10% bottom 10px',
          'right 10px top 10%', 'right 10px top 10px', 'right 10px bottom 10%', 'right 10px bottom 10px',
          'top 10% left 10%', 'top 10% left 10px', 'top 10% right 10%', 'top 10% right 10px',
          'top 10px left 10%', 'top 10px left 10px', 'top 10px right 10%', 'top 10px right 10px',
          'bottom 10% left 10%', 'bottom 10% left 10px', 'bottom 10% right 10%', 'bottom 10% right 10px',
          'bottom 10px left 10%', 'bottom 10px left 10px', 'bottom 10px right 10%', 'bottom 10px right 10px'
        ]),
        ['repeat-x', 'repeat-y'].concat(['repeat', 'space', 'round', 'no-repeat'].times(1, 2)),
        ['border-box', 'padding-box', 'content-box', 'no-clip'],
        [
          'none', 'url(tl.png)', 'linear-gradient(black 0%, transparent 100%)',
          'url(#mask)', 'url(commonmasks.xml#mask)', 'child',
          'select(img)', 'select(mask:last-of-type)', 'select(img, mask:last-of-type)',
          'none, none', 'none, url(foo.png)', 'url(tl.png), url(tr.png)',
          'url(foo.png), linear-gradient(white, black)',
          'linear-gradient(black 0%, transparent 100%), linear-gradient(white, black)',
          'none, url(foo.png), linear-gradient(white, black)'
        ].and(['alpha', 'luminance', 'auto']),
        [
          'left / auto', 'bottom 10px right 10px / 10px 10%', 'padding-box space',
          'url(tl.png) alpha left / auto repeat-x border-box border-box',
          'url(foo.png), linear-gradient(white, black) luminance bottom 10px right 10px / 10px 10% repeat space content-box no-clip'
        ]
      ),
      'mask-type': ['luminance', 'alpha'],
      'mask-box-image-source': ['none', 'url(tl.png)', 'linear-gradient(white, black)'],
      'mask-box-image-slice': ['1', '10%'].times(1, 4).concat(
        ['1', '10%'].times(1, 4).and(['fill']),
        ['fill'].and(['1', '10%'].times(1, 4))
      ),
      'mask-box-image-width': ['auto', '10px', '10%', '1'].times(1, 4),
      'mask-box-image-outset': ['10px', '1'].times(1, 4),
      'mask-box-image-repeat': ['stretch', 'repeat', 'round', 'space'].times(1, 2),
      'mask-box-image': ['none', 'url(tl.png)', 'linear-gradient(white, black)'].concat(
        ['1', '10%'].times(1, 4).concat(
          ['1', '10%'].times(1, 4).and(['fill']),
          ['fill'].and(['1', '10%'].times(1, 4))
        ),
        ['stretch', 'repeat', 'round', 'space'].times(1, 2),
        [
          '1 / 1', '1 / / 1', '30% 30% / / 10px 10px', 'fill 10 / / 1 10px',
          '30% 10 30% / / 10px 10px 10px', 'fill 30% 30% 30% 30% / / 1 1 1 1',
          '1 / 1 / 1', '10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px',
          'none 100%', '100% none', 'stretch 100%', 'none stretch',
          'none 100% stretch', 'none 100% / 1 stretch', 'none 100% / / 0 stretch',
          'none 100% / 1 / 0 stretch', 'none 100% fill / 1 / 0 stretch',
          'url(foo.png) 10', 'url(foo.png) 10%', 'url(foo.png) 10% fill',
          'url(foo.png) 10 round', 'url(foo.png) 10 stretch repeat',
          'url(foo.png) 10 / 10px', 'url(foo.png) 10 / 10% / 10px',
          'url(foo.png) fill 10 / 10% / 10px', 'url(foo.png) fill 10 / 10% / 10px repeat',
          'url(tl.png) 10 30% 10 30% fill / 1 10px 10% auto / 10 5px 1px 10px repeat round'
        ]
      ),
      'clip-path': ['none'].concat(
        ['10px', '10%'].times(4, 6, ', ').map(function (arg) {
          return 'rectangle(' + arg + ')';
        }),
        ['10px', '10%'].times(4, 6, ', ').map(function (arg) {
          return 'inset-rectangle(' + arg + ')';
        }),
        ['10px', '10%'].times(3, ', ').map(function (arg) {
          return 'circle(' + arg + ')';
        }),
        ['10px', '10%'].times(4, ', ').map(function (arg) {
          return 'ellipse(' + arg + ')';
        }),
        ['10px', '10%'].times(2).concat(
          ['nonzero', 'evenodd'].and(['10px', '10%'].times(2), ', '),
          [
            '10px 10%, 10px 10%',
            'nonzero, 10px 10%, 10px 10%', 'evenodd, 10px 10%, 10px 10%',
            'nonzero, 100% 0, 100% 100%, 0 100%'
          ]
        ).map(function (arg) {
          return 'polygon(' + arg + ')';
        })
      ).concat([
        'url(#mask)', 'url(commonmasks.xml#mask)', 'url(tl.png)',
        'child', 'img', 'clipPath:last-of-type'
      ]),
      'clip-rule': ['nonzero', 'evenodd'],
      'clip': [
        'auto', 'rect(5px, 40px, 45px, 5px)',
        'rect(-5px, 40px, 45px, 5px)', 'rect(5px, 40px, 45px, auto)',
        'rect(-5px, auto, 0px, 5px)'
      ],
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
        'exclusion', 'hue', 'saturation', 'color', 'luminosity',
        'normal, multiply'
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
      '::distributed()': '::distributed(div)'
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

  'html': {
    'title': 'HTML',
    'dev': 'http://www.whatwg.org/specs/web-apps/current-work/multipage/',
    'properties': {
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#anchor-points
      'anchor-point': [
        'none', 'left', 'center', 'right', 'top', 'bottom', '10%', '10px'
      ].concat(
        ['left', 'center', 'right', '10%', '10px'].and(['top', 'center', 'bottom', '10%', '10px'])
      ).concat([
        'top center', 'top left', 'top right', 'bottom center', 'bottom left', 'bottom right', 'center left', 'center right',
        'center top 10%', 'center top 10px', 'center bottom 10%', 'center bottom 10px',
        'center left 10%', 'center left 10px', 'center right 10%', 'center right 10px',
        'left top 10%', 'left top 10px', 'left bottom 10%', 'left bottom 10px',
        'right top 10%', 'right top 10px', 'right bottom 10%', 'right bottom 10px',
        'top left 10%', 'top left 10px', 'top right 10%', 'top right 10px',
        'bottom left 10%', 'bottom left 10px', 'bottom right 10%', 'bottom right 10px',
        'left 10% center', 'left 10% top', 'left 10% bottom',
        'left 10px center', 'left 10px top', 'left 10px bottom',
        'right 10% center', 'right 10% top', 'right 10% bottom',
        'right 10px center', 'right 10px top', 'right 10px bottom',
        'top 10% center', 'top 10% left', 'top 10% right',
        'top 10px center', 'top 10px left', 'top 10px right',
        'bottom 10% center', 'bottom 10% left', 'bottom 10% right',
        'bottom 10px center', 'bottom 10px left', 'bottom 10px right',
        'left 10% top 10%', 'left 10% top 10px', 'left 10% bottom 10%', 'left 10% bottom 10px',
        'left 10px top 10%', 'left 10px top 10px', 'left 10px bottom 10%', 'left 10px bottom 10px',
        'right 10% top 10%', 'right 10% top 10px', 'right 10% bottom 10%', 'right 10% bottom 10px',
        'right 10px top 10%', 'right 10px top 10px', 'right 10px bottom 10%', 'right 10px bottom 10px',
        'top 10% left 10%', 'top 10% left 10px', 'top 10% right 10%', 'top 10% right 10px',
        'top 10px left 10%', 'top 10px left 10px', 'top 10px right 10%', 'top 10px right 10px',
        'bottom 10% left 10%', 'bottom 10% left 10px', 'bottom 10% right 10%', 'bottom 10% right 10px',
        'bottom 10px left 10%', 'bottom 10px left 10px', 'bottom 10px right 10%', 'bottom 10px right 10px'
      ])
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
      ':fullscreen': [
        ':fullscreen', '*|*:not(:root):fullscreen', 'iframe:fullscreen',
        '*|*:fullscreen::backdrop'
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
