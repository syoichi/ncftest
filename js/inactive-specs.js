/* jshint maxstatements: false */

(function executeInactiveSpecs(win) {
  'use strict';

  // data types
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
  var overflowFragment = [
    'paged-x', 'paged-y', 'paged-x-controls', 'paged-y-controls', 'fragments'
  ];
  var contentSize = ['fill', 'min-content', 'max-content', 'fit-content'];

  win.NCFTest.Specs = {
    // Inactive implementing in Browsers
    // CSS Level 3
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
          'ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ' +
            'ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ',
          '\'1\' linear-gradient(white, black) あ'
        ]),
        'additive-symbols': ['0'].amp(symbol).concat([
          '3 \'a\', 2 \'b\'', '6 ⚅, 5 ⚄, 4 ⚃, 3 ⚂, 2 ⚁, 1 ⚀',
          '\'0\' 0, 1 radial-gradient(white, black), 2 A'
        ]),
        'speak-as': [
          'auto', 'bullets', 'numbers', 'words', 'spell-out', 'triangle'
        ]
      }
    },

    'css-overflow-3': {
      'title': 'Overflow',
      'properties': {
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
      'selectors': {
        '::nth-fragment()': ['::nth-fragment(1)', 'div::nth-fragment(1)']
      }
    },

    'css-sizing-3': {
      'title': 'Intrinsic & Extrinsic Sizing',
      'tr': 'http://www.w3.org/TR/css3-sizing/',
      'properties': {
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

    // CSS Level 3?
    'css-containment': {
      'title': 'Containment',
      'properties': {
        'contain': ['none', 'strict']
      }
    },

    // New CSS Level 1
    'css-regions-1': {
      'title': 'Regions Level 1',
      'tr': 'http://www.w3.org/TR/css3-regions/',
      'properties': {
        'flow-into': ['none'].concat(['ident'].qmark(['element', 'content'])),
        'flow-from': ['none', 'ident'],
        'region-fragment': ['auto', 'break']/*,
        'flex-pack': ['justify']*/
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

    'css-line-grid-1': {
      'title': 'Line Grid Level 1',
      'properties': {
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

    'selectors-nonelement': {
      'title': 'Non-element Selectors Level 1',
      'selectors': {
        '::attr()': ['::attr(title)', 'abbr::attr(title)']
      }
    },

    // Håkon Wium Lie's specs
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

    // Inactive editing
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

    // CSS Level 3?
    'css-module': {
      'title': 'Template',
      'properties': {
        'display-inside': ['text', 'inline-inside', 'block-inside', 'icon']
      }
    },

    // CSS Level 3? New CSS Level 1?
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

    // New CSS Level 1~3
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

    // Unmaintained New CSS Level 1
    'css-size-adjust': {
      'title': 'Mobile Text Size Adjustment Level 1',
      'properties': {
        'text-size-adjust': ['auto', 'none', '50%']
      }
    },

    // No Ready CSS Level 4
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

    // CSS 2
    'css2': {
      'title': 'Missing CSS 2 & 2.1',
      'properties': {
        /* CSS 2 */
        // only Trident pass
        'font-stretch': ['wider', 'narrower'],
        // only Gecko pass
        'marker-offset': ['auto', '10px'],
        // Blink(maybe WebKit too) pass
        'text-align': ['"string"']
      },
      '@rules': {
        // only Gecko doesn't pass
        '@page': ['@page :left', '@page :right', '@page :first']
      }
    },

    // Aural
    'aural': {
      'title': 'CSS 2.1 Aural style sheets',
      'tr': 'http://www.w3.org/TR/CSS2/aural.html',
      'dev': 'http://dev.w3.org/csswg/css2/aural.html',
      'properties': {
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
      'units': {
        'Hz': ['pitch', 'voice-pitch', 'voice-range'],
        'kHz': ['pitch', 'voice-pitch', 'voice-range']
      }
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
    }
  };
}(window));
