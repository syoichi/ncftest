/* jshint maxstatements: false */
/* global NCFTest */

(function executeInactiveSpecs() {
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
  var symbol = ['"string"'].concat(image, ['ident']);
  var symbolsType = ['cyclic', 'numeric', 'alphabetic', 'symbolic', 'fixed'];
  var width2 = ['1px', '1%'].amp(['border-box', 'content-box']).concat(
    'available'
  );
  var trackBreadth = ['10px', '10%', '1fr', 'min-content', 'max-content'];
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
    '10px 10px "a"', '"a" 10px 10px', '10px "a" 10px', '10px "a" "b"',
    '10px 10px "a" 10px "b" 10px'
  ]).concat(
    ['/'].and(fullColWidth),
    colWidth.concat(['minmax(*, 1px)']).times(2, 2, ' / ')
  ).concat([
    '* * / * *', '* 10em / 4em 5em', '10em * "a   b"', '* * 3em "a b c"',
    '"." "*" fit-content', '* 10em "a b c" "a b d" 4em',
    '* min-content * "a a a" ". b ."', '1fr "a @ b" "c c c"',
    // 'auto * 10em " a a . " " b . c "',
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
  var fillRule = ['nonzero', 'evenodd'];
  var spatialNav = [
    'go(index)', 'go(previous)', 'go(next)', 'back',
    'url(..)', 'url(a1.html)', 'url-doc(..)', 'url-doc(a1.html)'/*,
    'link-rel(next)'*/
  ];
  var pageShiftEffects = ['pan', 'turn', 'flip', 'fold'];

  NCFTest.Specs = {
    // Inactive implementing in Browsers
    // CSS Level 3
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

    'css-display-3': {
      'title': 'Display',
      'property': {
        'display-inside': ['auto', 'block', 'table', 'flex', 'grid', 'ruby'],
        'display-outside': [
          'inline-level', 'block-level', 'run-in', 'contents', 'none',
          'table-row-group', 'table-header-group', 'table-footer-group',
          'table-row', 'table-cell', 'table-column-group', 'table-column',
          'table-caption', 'ruby-base', 'ruby-text', 'ruby-base-container',
          'ruby-text-container'
        ],
        'display-list': ['none', 'list-item'],
        'display': [
          'auto', 'inline-level', 'block-level', 'contents',
          'auto inline-level', 'none none', 'auto inline-level none'
        ],
        'box-suppress': ['show', 'discard', 'hide'/*, 'normal'*/]
      }
    },

    'css-position-3': {
      'title': 'Positioned Layout',
      'tr': 'http://www.w3.org/TR/css3-positioning/',
      'property': {
        'position': ['sticky', 'center', 'page'],
        'offset-before': width,
        'offset-end': width,
        'offset-after': width,
        'offset-start': width
      }
    },

    // New CSS Level 1~3
    'css-template-1': {
      'title': 'Grid Template Layout',
      'tr': 'http://www.w3.org/TR/css3-layout/',
      'property': {
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
      'selector': {
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
      'atrule': {
        '@region': [
          '@region ::slot(*)', '@region ::slot(b)', '@region BODY::slot(b)',
          '@region ::first-line', '@region div::first-line',
          '@region ul.menu.nav::slot(a)'
        ]/*,
        '@footnote': ['@footnote :first::slot(a)'],
        '@page': ['@page :first::slot(a)', '@page::slot(g)']*/
      }/*,
      'unit': {
        'gr': ['width', 'top', 'right', 'bottom', 'left']
      }*/
    },

    // New CSS Level 1
    'css-exclusions-1': {
      'title': 'Exclusions Level 1',
      'tr': 'http://www.w3.org/TR/css3-exclusions/',
      'property': {
        'wrap-flow': [
          'auto', 'both', 'start', 'end', 'minimum', 'maximum', 'clear'
        ],
        'wrap-through': ['wrap', 'none']
      }
    },

    'css-regions-1': {
      'title': 'Regions Level 1',
      'tr': 'http://www.w3.org/TR/css3-regions/',
      'property': {
        'flow-into': ['none'].concat(['ident'].qmark(['element', 'content'])),
        'flow-from': ['none', 'ident'],
        'region-fragment': ['auto', 'break']/*,
        'flex-pack': ['justify']*/
      }
    },

    'css-snappoints-1': {
      'title': 'Scroll Snap Points Level 1',
      'property': {
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

    'css-line-grid-1': {
      'title': 'Line Grid Level 1',
      'property': {
        'line-grid': ['match-parent', 'create'],
        'line-snap': ['none', 'baseline', 'contain'],
        'box-snap': [
          'none', 'before', 'after', 'center',
          'first-baseline', 'last-baseline'
        ]
      }
    },

    'css-ruby-1': {
      'title': 'Ruby Level 1',
      'property': {
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

    'selectors-nonelement-1': {
      'title': 'Non-element Selectors Level 1',
      'selector': {
        '::attr()': [
          '::attr()', '::attr(title)', '::attr(*)', '::attr(|title)',
          '::attr(|*)', '::attr(svg|title)', '::attr(svg|*)', '::attr(*|title)',
          '::attr(*|*)', 'abbr::attr(title)'
        ]
      }
    },

    // New CSS Level 2
    'css-shapes-2': {
      'title': 'Shapes Level 2',
      'property': {
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

    // Håkon Wium Lie's specs
    'css-page-floats': {
      'title': 'Page Floats',
      'property': {
        'float': ['top', 'bottom', 'snap'].concat(
          ['10px'].times(1, 2).qmark([
            'top', 'bottom', 'near'
          ], ', ').map(function snap(arg) {
            return 'snap(' + arg + ')';
          })
        ).concat(['inside', 'outside']),
        'column-span': ['1', 'page'],
        // 'float-reference': ['multicol'],
        'float-defer-column': ['none', '1', '-1', 'last'],
        'float-defer-page': ['none', '1', '-1', 'last'],
        'clear': ['top', 'bottom', 'column', 'page'],
        'float-wrap': ['none', 'wrap'/*, 'intrude'*/],
        'float-offset': [
          '0', '5px', '-1px', '0 0', '2em 3em'/*, '-50% 3em', '-80% 2em'*/
        ],
        'clear-side': ['auto', 'both', 'none', 'left', 'right'],
        'background-exclude-level': alphavalue,
        'exclude-level': alphavalue/*,
        'exclude-margin': width,
        'content-inside': [
          'circle(50%, 50%, 30%)',
          'polygon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)'
        ],
        'content-outside': [
          'circle(50%, 50%, 30%)',
          'polygon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)'
        ]*/
      },
      'selector': {
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

    'figures': {
      'title': 'CSS Figures',
      'dev': 'http://figures.spec.whatwg.org/',
      'property': {
        'float': [
          'block-start', 'block-end', 'top-bottom', 'block-start-end',
          'bottom-top', 'block-end-start'/*,
          'snap(2, near)', 'snap(1)', 'snap(3, bottom)'*/
        ].concat([
          'top', 'bottom', 'top-bottom', 'bottom-top', 'snap(1em)'
        ].amp(['left', 'right', 'inside', 'outside'])),
        'float-reference': ['column', 'element', 'page', 'bleed-box'],
        // 'object-fill': ['fill'],
        'float-defer-page': ['left', 'right'].concat(
          ['1', '-1'].or(
            ['last'],
            ['left', 'right']
          ).filter(function remove1ValueSyntax(val) {
            return val.split(' ').length > 1;
          })
        ),
        'float-defer-column': ['inside', 'outside'],
        'float-defer-line': ['none', '1', '1%'],
        'float-policy': [
          'normal'/*, 'forward', 'zap-last'*/
        ].concat(['drop-tail'].or(['in-order'])),
        'column-span': ['0.5', '1.75', '10px', 'auto'],
        'float-offset': [
          'none', '1.1', '-1.1', '50%', '-50%', 'auto'/*, '-3em'*/
        ],
        'wrap-side': ['none'].concat([
          'all', 'left', 'right', 'top', 'bottom', 'line-start', 'line-end',
          'block-start', 'block-end', 'line'
        ].or(['1', '-1'])),
        'wrap-contrast': ['normal', '0.5', '0', '1', '0.5 1em']
      }
    },

    'css-gcpm-3': {
      'title': 'Generated Content for Paged Media',
      'property': {
        'string-set': ['none'].concat(['header'].and([
          '\'foo\'',
          'counter(par-num, upper-roman)',
          'counters(par-num, upper-roman, disc)',
          'content()', 'content(text)', 'content(before)', 'content(after)',
          'content(first-letter)', 'attr(title)'
        ])).concat([
          'header content(before) content(text)',
          'header content(before) \':\' content(text)',
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
        ).concat([/*
          '"first: " string(heading, first)',
          'counter(footnote, symbols(\'*\', \'†\', \'‡\', \'§\'))',
          'counter(footnote, symbols(\'*\', \'†\', \'‡\', \'§\')) \'. \'',
          'leader(\'.\') target-counter(attr(href url), page)',
          'leader('.') target-counter(attr(href url), page, lower-roman)',
          '", in the chapter entitled " target-text(attr(href url))'*/
        ]),
        'position': ['running(header)'],
        // 'running': ['none', 'ident', 'chapter'],
        'float': ['footnote'/*, 'prince-column-footnote'*/],
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
      'selector': {
        '::footnote-call': ['::footnote-call'],
        '::footnote-marker': ['::footnote-marker', '::footnote-marker::after']
      },
      'atrule': {
        '@footnote': ['@footnote'],
        '@page': anb.concat([
          '5 of A', '1n+1 of B', 'odd of C'
        ]).map(function atPageNth(nth) {
          return '@page :nth(' + nth + ')';
        }).concat(['@page:nth(1)', '@page:nth(3 of body)'])
      }
    },

    'books': {
      'title': 'CSS Books',
      'dev': 'http://books.spec.whatwg.org/',
      'property': {
        // 'string-set': ['index first-letter, entry content()'],
        'content': [
          // 'leader(space) counter(line)',
          // '"(see page " target-counter(attr(href url), page, decimal) ")"',
          /*'"(see section " ' +
            'target-counters(attr(href url), section, ".", decimal) ")"',*/
          /*'"Chapter " target-counter(attr(href url), chapter) ' +
            '\' ("\'  target-text(attr(href url), content) \'") on page \' ' +
            'target-counter(attr(href url), page)',*/
          'counter(footnote, super-decimal)',
          'target-pull(attr(href url))'
        ],
        // 'float-defer': ['last'],
        'flow': ['ident'].qmark([
          'baseline', 'top-edge', 'bottom-edge', 'close', 'same-page',
          'same-spread', 'fill',
          'baseline!', 'top-edge!', 'bottom-edge!', 'close!', 'same-page!',
          'same-spread!', 'fill!'
        ], ', ').concat([
          // 'sidenote, fill same-spread', 'sidenote, stick', 'sidenote, erase'
        ]).map(function area(arg) {
          return 'area(' + arg + ')';
        }),
        'condition': ['at-page-break', 'not-at-page-break'],
        'column-rule-clip': ['none', 'auto', '10px', '10px 10px'],
        'baseline-grid': ['normal', 'none', 'new', 'root'],
        'baseline-block-snap': [
          'auto', 'before', 'after', 'center'
        ].or(['margin-box', 'border-box']),
        'text-replace': [
          'none', '"foo" "bar"', '"a" ""', '"..." "\\2026" "\'" "\\2019"',
          '"a" "b" "b" "c"'
        ],
        'nav-up': spatialNav,
        'nav-right': spatialNav,
        'nav-down': spatialNav,
        'nav-left': spatialNav,
        'nav-up-shift': pageShiftEffects,
        'nav-right-shift': pageShiftEffects,
        'nav-down-shift': pageShiftEffects,
        'nav-left-shift': pageShiftEffects
      },
      'atrule': {
        '@area': ['@area', '@area sidenote'],
        '@page': [
          'chapter:nth(1)', 'chapter:nth(3n)', 'chapter:nth(3n+1)', ':first p',
          ':nth(1) .sidenote', ':nth(3n+1) p:first-line', 'funky:nth(1) p',
          ':left p'
        ].map(function atPageNth(nth) {
          return '@page ' + nth;
        }),
        '@inside': ['@inside', '@inside p'],
        '@layout': ['@layout']/*,
        '@navigation': ['@navigation'],
        '@neighborhood': ['@neighborhood'],
        '@hood': ['@hood']*/
      },
      'selector': {
        '::call': ['::call'/*, '.sidenote::call'*/]/*,
        ':column()': [
          ':column(1)',
          'div.chapter:column(3)', 'div.chapter:column(2n)',
          'div.chapter:column(3+)', 'div.chapter:column(2, 2)',
          'div.chapter:column(*, 2)', 'div.chapter:column(1, *)'
        ]*/
      }
    },

    // Obsolete
    'css-content-3': {
      'title': 'Generated Content',
      'tr': 'http://www.w3.org/TR/css3-content/',
      'property': {
        // 'string-set': ['title contents', 'chapter contents'],
        'page-policy': ['start', 'first', 'last'],
        'content': [
          'inhibit', 'pending(insert)', 'contents', 'footnote', 'endnote',
          'section-note', 'list-item', 'box', 'check', 'circle', 'diamond',
          'disc', 'hyphen', 'square', 'date()', 'time()', 'document-url',
          // '<target>',
          'url(foo.png), none', 'icon, none', 'icon, icon',
          'url(foo.png), string(name)', 'url(foo.png), pending(footnote)',
          'url(foo.png), url(foo.png)', 'url(foo.png), attr(alt)',
          'attr(href, url) contents', 'string(name) string(name)',
          'url(foo.png), url(foo.png), none',
          'url(header/mng), url(header/png), none',
          'url(1), url(2), url(3), contents',
          'url(logo.mov), url(logo.mng), url(logo.png), none',
          'url(welcome), "Welcome to: " url(logo)',
          '\'[\' counter(footnote) \']\' contents',
          'counter(footnote) \'. \' contents'
        ]/*,
        'move-to': ['insert']*/
      },
      'selector': {
        '::line-marker': ['::line-marker'],
        '::alternate': [
          '::alternate'/*, 'span::alternate',
          'span::alternate::before', 'span::after::alternate'*/
        ]
      },
      'atrule': {
        '@counter-styles': ['@counter-styles']/*,
        '@string': ['@string chapter'],
        '@counter': ['@counter', '@counter footnote']*/
      },
      'descriptor': {
        'footnote': ['super-decimal']
      }
    },

    // Inactive editing
    // CSS Level 3
    'css-box-3': {
      'title': 'Basic Box Model',
      'tr': 'http://www.w3.org/TR/css3-box/',
      'property': {
        'display': [
          'run-in', 'compact', 'ruby-base-group', 'ruby-text-group',
          'container'/*, 'align-box'*/
        ],
        // 'display-role': ['table-cell'],
        // 'display-model': ['table'],
        'padding': width.times(1, 4).filter(function filter(val) {
          return val.indexOf('auto') !== -1;
        }),
        'padding-top': ['auto'],
        'padding-right': ['auto'],
        'padding-bottom': ['auto'],
        'padding-left': ['auto'],
        'margin-top': ['fill'],
        'margin-right': ['fill'],
        'margin-bottom': ['fill'],
        'margin-left': ['fill'],
        'margin': width.concat('fill').times(1, 4).filter(function filter(val) {
          return val.indexOf('fill') !== -1;
        }),
        'width': width2/*.concat('shrink-wrap')*/,
        'height': width2.concat('complex'/*, 'shrink-wrap'*/),
        'min-width': width2,
        'min-height': width2,
        'max-width': width2,
        'max-height': width2,
        'float': ['top-corner', 'bottom-corner'].concat(
          ['top', 'bottom'].amp(['next-page', 'next-column', 'unless-room']),
          ['top-corner', 'bottom-corner'].amp(
            ['next-page', 'next-column', 'unless-room', 'left', 'right']
          ),
          ['intrude'].amp(
            ['left', 'right', 'top', 'bottom', 'top-corner', 'bottom-corner']
          )
        ).concat([
          'left', 'right', 'top', 'bottom', 'none',
          'top-corner', 'bottom-corner', 'snap'
        ].concat(
          ['top', 'bottom', 'top-corner', 'bottom-corner'].amp(
            ['next-page', 'next-column', 'unless-room', 'left', 'right']
          ),
          ['inside', 'outside'],
          ['intrude'].amp(
            ['left', 'right', 'top', 'bottom', 'top-corner', 'bottom-corner']
          )
        ).amp(['contour'])),
        'clear-after': [
          'none', 'left', 'right', 'top', 'bottom', 'inside', 'outside',
          'start', 'end', 'both', 'descendants'
        ],/*
        'clear': ['inside', 'outside', 'after'].concat([
          'left', 'right', 'top', 'bottom', 'inside', 'outside', 'start', 'end',
          'both', 'after'
        ].times(2)),
        'underhang-limit': ['1'],*/
        'overflow-x': ['no-display', 'no-content'],
        'overflow-y': ['no-display', 'no-content'],
        'overflow': ['no-display', 'no-content'].concat([
          'visible', 'hidden', 'scroll', 'auto', 'no-display', 'no-content'
        ].times(2)),
        'alignment': ['top', 'right', 'bottom', 'left', 'center'],
        // 'block-align': ['top', 'right', 'bottom', 'left', 'center'],
        'child-align': ['auto', 'top', 'middle', 'bottom', 'left', 'right'],/*
        'block-vertical-align': [
          'auto', 'top', 'middle', 'bottom', 'left', 'right'
        ],*/
        'float-displace': ['line', 'indent', 'block', 'block-within-page'],/*
        'float-displace': ['auto'].concat(
          ['1px'].qmark(['block', 'block-within-page'], ' ', {amp: true})
        ),*/
        'indent-edge-reset': [
          'none', 'margin-edge', 'border-edge', 'padding-edge', 'content-edge'
        ]
      }/*,
      'selector': {
        '::outside': '::outside'
      }*/
    },

    // CSS Level 3?
    'css-containment': {
      'title': 'Containment',
      'property': {
        'contain': ['none', 'strict']
      }
    },

    // CSS Level 1~3
    'css-color-correction-1': {
      'title': 'Color Correction',
      'property': {
        'color-correction': ['default']
      }
    },

    // New CSS Level 1
    'css-size-adjust': {
      'title': 'Mobile Text Size Adjustment Level 1',
      'property': {
        'text-size-adjust': ['auto', 'none', '50%']
      }
    },

    // XBL
    'becss': {
      'title': 'Behavioral Extensions to CSS',
      'dev': 'http://dev.w3.org/2006/xbl2/css-module.html',
      'property': {
        'binding': [
          'none',
          'url(\'http://example.org/htmlBindings.xml#checkbox\')',
          'url(triangles.xml#isoceles)',
          'url(#rightangle)',
          'url(triangles.xml#isoceles) url(triangles.xml#rightangle)',
          'url(#checkbox) url(#isoceles) url(#rightangle)'
        ]
      },
      'selector': {
        ':bound-element': ':bound-element > *'
      }
    },

    // Extra
    'view-mode': {
      'title': 'The \'view-mode\' Media Feature',
      'dev': 'http://dev.w3.org/2006/waf/widgets-vmmf/',
      'mediaQuery': {
        'view-mode': [
          '(view-mode: windowed)',
          'not print and (view-mode: floating)',
          'not print and (view-mode: fullscreen)',
          'not print and (view-mode: maximized)',
          'not print and (view-mode: minimized)'
        ]
      }
    },

    // No Ready
    // CSS Level 4
    'css-text-4': {
      'title': 'Text Level 4',
      'property': {
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
        'overflow-wrap': ['hyphenate'].qmark(['break-word'], ' ', {amp: true}),
        'text-align': ['start end'].concat(
          ['\'foo\''].and(
            ['start', 'end', 'left', 'right', 'center', 'justify']
          )
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
          ).remove(['underline'].or(['overline'], ['line-through']))
        ),
        'text-decoration': ['remove-all'].concat(
          ['underline', 'no-underline', 'replace-underline'].or(
            ['overline', 'no-overline', 'replace-overline'],
            ['line-through', 'no-line-through', 'replace-line-through']
          ).remove(['underline'].or(['overline'], ['line-through']))
        ).concat([
          'remove-all solid', 'solid remove-all', 'underline solid blink',
          'remove-all solid black', 'remove-all solid black blink',
          'underline overline no-line-through solid black blink'
        ]),
        'text-underline-position': ['below left', 'below right'],
        'text-emphasis-position': ['above', 'below'].amp(['right', 'left']),
        'text-emphasis-skip': ['spaces'].or(
          ['punctuation'], ['symbols'], ['narrow']
        ),
        'text-shadow': [
          '1px 2px 3px 4px', '1px 2px 3px 4px white', 'white 1px 2px 3px 4px'
        ]
      }
    },

    // Unofficial
    // CSS Level 3? New CSS Level 1?
    'css-page-template-1': {
      'title': 'Pagination Templates',
      'property': {
        'overflow-style': [
          'paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls'
        ],
        'template-set': ['one', 'one two']
      },
      'atrule': {
        '@template': ['@template paged-display', '@template side-by-side:first']
      },
      'descriptor': {
        'required-flow': ['related-flow', 'lead-flow']
      }
    },

    // CSS Level 4
    'css-pseudo-4': {
      'title': 'Pseudo-elements Level 4',
      'selector': {
        '::before()': 'div::before(1)',
        '::after()': 'div::after(1)',
        '::nth-before()': 'div::nth-before(1)',
        '::nth-after()': 'div::nth-after(1)',
        '::nth-last-before()': 'div::nth-last-before(1)',
        '::nth-last-after()': 'div::nth-last-after(1)'
      }
    },

    // Obsolete
    // CSS Level 3
    'css3-tables': {
      'title': 'Tables',
      'property': {
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
        'caption-side': ['left', 'right'].concat(
          ['top', 'bottom', 'left', 'right'].amp(['outside'])
        ),
        'table-column-span': ['auto', 'attr(colspan)'],
        'table-row-span': ['auto', 'attr(rowspan)'],
        'table-baseline': '1',
        'speak-header': ['once', 'always']
      }
    },

    // Editor's Draft Not Found CSS Level 3
    'css3-marquee': {
      'title': 'Marquee',
      'property': {
        'overflow-style': ['auto', 'marquee-line', 'marquee-block'],
        'marquee-style': ['scroll', 'slide', 'alternate'],
        'marquee-play-count': ['1', '0', 'infinite'],
        'marquee-direction': ['forward', 'reverse'],
        'marquee-speed': ['normal', 'slow', 'fast ']
      }
    },

    'css3-hyperlinks': {
      'title': 'Hyperlink Presentation',
      'property': {
        'target-name': ['current', 'root', 'parent', 'new', 'modal', '\'foo\''],
        'target-new': ['window', 'tab', 'none'],
        'target-position': ['above', 'behind', 'front', 'back'],
        'target': [
          'current', 'root', 'parent', 'new', 'modal', '\'foo\''
        ].or(
          ['window', 'tab', 'none'],
          ['above', 'behind', 'front', 'back']
        ).concat('attr(target, string)')
      }
    },

    // CSS Level 1~3
    'css-preslev-1': {
      'title': 'Presentation Levels',
      'tr': 'http://www.w3.org/TR/css3-preslev/',
      'dev': 'http://dev.w3.org/csswg/css-preslev-1/Overview.src.html',
      'property': {
        'presentation-level': ['0', '1', 'same', 'increment']
      },
      'selector': {
        ':below-level': [':below-level'],
        ':at-level': [':at-level'],
        ':above-level': [':above-level']
      }
    },

    // CSS Level 2
    'css2': {
      'title': 'Missing CSS Level 2 & 2.1',
      'property': {
        // only Trident pass
        'font-stretch': ['wider', 'narrower'],
        // only Gecko pass
        'marker-offset': ['auto', '10px'],
        // Blink(maybe WebKit too) pass
        'text-align': ['"string"']
      },
      'atrule': {
        // only Gecko doesn't pass
        '@page': ['@page :left', '@page :right', '@page :first']
      }
    },

    // Aural
    'aural': {
      'title': 'CSS Level 2.1 Aural style sheets',
      'tr': 'http://www.w3.org/TR/CSS2/aural.html',
      'dev': 'http://dev.w3.org/csswg/css2/aural.html',
      'property': {
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
      'unit': {
        'Hz': ['pitch', 'voice-pitch', 'voice-range'],
        'kHz': ['pitch', 'voice-pitch', 'voice-range']
      }
    },

    'css-speech-1': {
      'title': 'Speech',
      'tr': 'http://www.w3.org/TR/css3-speech/',
      'property': {
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
    }
  };
}());
