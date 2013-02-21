window.Specs = {
	"css3-background": {
		"title": "Backgrounds and Borders",
		"properties": {
			"background-repeat": ["space", "round"].concat(["repeat", "space", "round", "no-repeat"].times(2)),
			"background-attachment": "local",
			"background-position": ["bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"background-clip": ["border-box", "padding-box", "content-box"],
			"background-origin": ["border-box", "padding-box", "content-box"],
			"background-size": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"background": [
				"url(foo.png), url(bar.svg)",
				"top left / 50% 60%",
				"border-box",
				"border-box padding-box",
				"url(foo.png) bottom right / cover padding-box content-box"
			],
			"border-radius": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px"],
			"border-image-source": ["none", "url(foo.png)"],
			"border-image-slice": ["10", "30%"].times(1, 4).concat(["fill 30%", "fill 10", "fill 2 4 8% 16%", "30% fill", "10 fill", "2 4 8% 16% fill"]),
			"border-image-width": ["10px", "5%", "28", "auto", "10px 10px", "5% 10px", "28 10px", "auto 10px", "10px 5%", "5% 5%", "28 5%", "auto 5%", "10px 28", "5% 28", "28 28", "auto 28", "10px auto", "5% auto", "28 auto", "auto auto", "10px 10% 10", "5% 10px 20 auto"],
			"border-image-outset": ["10px", "20", "10px 20", "10px 20px", "20 30", "2px 3px 4", "1 2px 3px 4"],
			"border-image-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
			"border-image": [
				"url(foo.png) 10", "url(foo.png) 10%", "url(foo.png) 10% fill",
				"url(foo.png) 10 round", "url(foo.png) 10 stretch repeat",
				"url(foo.png) 10 / 10px", "url(foo.png) 10 / 10% / 10px",
				"url(foo.png) fill 10 / 10% / 10px", "url(foo.png) fill 10 / 10% / 10px space"
			],
			"box-decoration-break": ["slice", "clone"],
			"box-shadow": [
				"1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
				"inset 1px 1px", "1px 2px 3px 4px black inset"
			]
		}
	},
	
	"css3-images": {
		"title": "Image Values and Replaced Content",
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image-source",
				// "cursor",
				"content"
			],
			"linear-gradient": [
				"linear-gradient(white, black)",
				"linear-gradient(white 1px, black)",
				"linear-gradient(white 1%, black)",
				"linear-gradient(white, black 1px)",
				"linear-gradient(white, black 1%)",
				"linear-gradient(white 1px, black 1%)",
				"linear-gradient(0deg, white, black)",
				"linear-gradient(90deg, white, black)",
				"linear-gradient(360deg, white, black)",
				"linear-gradient(-45deg, white, black)",
				"linear-gradient(to left, white, black)",
				"linear-gradient(to right, white, black)",
				"linear-gradient(to top, white, black)",
				"linear-gradient(to bottom, white, black)",
				"linear-gradient(to left top, white, black)",
				"linear-gradient(to left bottom, white, black)",
				"linear-gradient(to right top, white, black)",
				"linear-gradient(to right bottom, white, black)",
				"linear-gradient(to top left, white, black)",
				"linear-gradient(to top right, white, black)",
				"linear-gradient(to bottom left, white, black)",
				"linear-gradient(to bottom right, white, black)",
				"linear-gradient(-270deg, red, blue 90px, yellow, green 50%)",
				"linear-gradient(to bottom right, currentColor 100%, rgba(255, 0, 255, 0.3) 100px, transparent 0em, hsla(225, 50%, 100%, 0.7) 75%)"
			],
			"radial-gradient": [
				"radial-gradient(white, black)",
				"radial-gradient(white 1px, black)",
				"radial-gradient(white 1%, black)",
				"radial-gradient(white, black 1px)",
				"radial-gradient(white, black 1%)",
				"radial-gradient(white 1px, black 1%)",
				"radial-gradient(circle, white, black)",
				"radial-gradient(10px, white, black)",
				"radial-gradient(circle 10em, white, black)",
				"radial-gradient(100px circle, white, black)",
				"radial-gradient(ellipse, white, black)",
				"radial-gradient(10px 10%, white, black)",
				"radial-gradient(ellipse 10% 20%, white, black)",
				"radial-gradient(10em 100px ellipse, white, black)",
				"radial-gradient(closest-corner, white, black)",
				"radial-gradient(closest-side, white, black)",
				"radial-gradient(farthest-corner, white, black)",
				"radial-gradient(farthest-side, white, black)",
				"radial-gradient(circle closest-corner, white, black)",
				"radial-gradient(closest-side ellipse, white, black)",
				"radial-gradient(at center, white, black)",
				"radial-gradient(circle at left, white, black)",
				"radial-gradient(ellipse at right, white, black)",
				"radial-gradient(closest-corner at top, white, black)",
				"radial-gradient(closest-side at bottom, white, black)",
				"radial-gradient(farthest-corner at 10%, white, black)",
				"radial-gradient(farthest-side at 10px, white, black)",
				"radial-gradient(10px at left top, white, black)",
				"radial-gradient(circle 10em at center 10%, white, black)",
				"radial-gradient(100px circle at 10px bottom, white, black)",
				"radial-gradient(10px 10% at right center, white, black)",
				"radial-gradient(ellipse 10% 20% at 10% 10%, white, black)",
				"radial-gradient(10em 100px ellipse at 10px 10px, white, black)",
				"radial-gradient(circle closest-corner at 10% 10px, white, black)",
				"radial-gradient(closest-side ellipse at 10px 10%, white, black)",
				"radial-gradient(at bottom left, white, black)",
				"radial-gradient(at center top 50%, white, black)",
				"radial-gradient(at right 50px center, white, black)",
				"radial-gradient(at left 10px top 10%, white, black)",
				"radial-gradient(at bottom 50% right 50%, white, black)",
				"radial-gradient(10% 100px ellipse at top 10% right 10px, white 10%, black 10px, red 50%)",
				"radial-gradient(ellipse 10% 20% at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)"
			],
			"repeating-linear-gradient": [
				"repeating-linear-gradient(white, black)",
				"repeating-linear-gradient(white 1px, black)",
				"repeating-linear-gradient(white 1%, black)",
				"repeating-linear-gradient(white, black 1px)",
				"repeating-linear-gradient(white, black 1%)",
				"repeating-linear-gradient(white 1px, black 1%)",
				"repeating-linear-gradient(0deg, white, black)",
				"repeating-linear-gradient(90deg, white, black)",
				"repeating-linear-gradient(360deg, white, black)",
				"repeating-linear-gradient(-45deg, white, black)",
				"repeating-linear-gradient(to left, white, black)",
				"repeating-linear-gradient(to right, white, black)",
				"repeating-linear-gradient(to top, white, black)",
				"repeating-linear-gradient(to bottom, white, black)",
				"repeating-linear-gradient(to left top, white, black)",
				"repeating-linear-gradient(to left bottom, white, black)",
				"repeating-linear-gradient(to right top, white, black)",
				"repeating-linear-gradient(to right bottom, white, black)",
				"repeating-linear-gradient(to top left, white, black)",
				"repeating-linear-gradient(to top right, white, black)",
				"repeating-linear-gradient(to bottom left, white, black)",
				"repeating-linear-gradient(to bottom right, white, black)",
				"repeating-linear-gradient(-270deg, red, blue 90px, yellow, green 50%)",
				"repeating-linear-gradient(to bottom right, currentColor 100%, rgba(255, 0, 255, 0.3) 100px, transparent 0em, hsla(225, 50%, 100%, 0.7) 75%)"
			],
			"repeating-radial-gradient": [
				"repeating-radial-gradient(white, black)",
				"repeating-radial-gradient(white 1px, black)",
				"repeating-radial-gradient(white 1%, black)",
				"repeating-radial-gradient(white, black 1px)",
				"repeating-radial-gradient(white, black 1%)",
				"repeating-radial-gradient(white 1px, black 1%)",
				"repeating-radial-gradient(circle, white, black)",
				"repeating-radial-gradient(10px, white, black)",
				"repeating-radial-gradient(circle 10em, white, black)",
				"repeating-radial-gradient(100px circle, white, black)",
				"repeating-radial-gradient(ellipse, white, black)",
				"repeating-radial-gradient(10px 10%, white, black)",
				"repeating-radial-gradient(ellipse 10% 20%, white, black)",
				"repeating-radial-gradient(10em 100px ellipse, white, black)",
				"repeating-radial-gradient(closest-corner, white, black)",
				"repeating-radial-gradient(closest-side, white, black)",
				"repeating-radial-gradient(farthest-corner, white, black)",
				"repeating-radial-gradient(farthest-side, white, black)",
				"repeating-radial-gradient(circle closest-corner, white, black)",
				"repeating-radial-gradient(closest-side ellipse, white, black)",
				"repeating-radial-gradient(at center, white, black)",
				"repeating-radial-gradient(circle at left, white, black)",
				"repeating-radial-gradient(ellipse at right, white, black)",
				"repeating-radial-gradient(closest-corner at top, white, black)",
				"repeating-radial-gradient(closest-side at bottom, white, black)",
				"repeating-radial-gradient(farthest-corner at 10%, white, black)",
				"repeating-radial-gradient(farthest-side at 10px, white, black)",
				"repeating-radial-gradient(10px at left top, white, black)",
				"repeating-radial-gradient(circle 10em at center 10%, white, black)",
				"repeating-radial-gradient(100px circle at 10px bottom, white, black)",
				"repeating-radial-gradient(10px 10% at right center, white, black)",
				"repeating-radial-gradient(ellipse 10% 20% at 10% 10%, white, black)",
				"repeating-radial-gradient(10em 100px ellipse at 10px 10px, white, black)",
				"repeating-radial-gradient(circle closest-corner at 10% 10px, white, black)",
				"repeating-radial-gradient(closest-side ellipse at 10px 10%, white, black)",
				"repeating-radial-gradient(at bottom left, white, black)",
				"repeating-radial-gradient(at center top 50%, white, black)",
				"repeating-radial-gradient(at right 50px center, white, black)",
				"repeating-radial-gradient(at left 10px top 10%, white, black)",
				"repeating-radial-gradient(at bottom 50% right 50%, white, black)",
				"repeating-radial-gradient(10% 100px ellipse at top 10% right 10px, white 10%, black 10px, red 50%)",
				"repeating-radial-gradient(ellipse 10% 20% at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)"
			],
			"image()": [
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)", "image(green)"
			]
		},
		"properties": {
			"object-fit": ["fill", "contain", "cover", "none", "scale-down"],
			"object-position": ["50% 50%", "center", "top right", "bottom 10px right 20px"],
			"image-resolution": ["from-image", "from-image snap", "snap from-image", "1dppx", "300dpi", "from-image 300dpi", "300dpi from-image", "300dpi from-image snap"],
			"image-orientation": ["0deg", "90deg", "45deg", "1turn", "100grad", "2rad"]
		}
	},
	
	"css3-selectors": {
		"title": "Selectors",
		"tr": "http://www.w3.org/TR/css3-selectors",
		"dev": "http://dev.w3.org/csswg/selectors3",
		"selectors": {
			"Sibling combinator": "foo ~ bar",
			"::before": "::before",
			"::after": "::after",
			"::first-letter": "::first-letter",
			"::first-line": "::first-line",
			"[att^=val]": ["[att^=val]", "[att^=\"val\"]"],
			"[att*=val]": ["[att*=val]", "[att*=\"val\"]"],
			"[att$=val]": ["[att$=val]", "[att$=\"val\"]"],
			"Namespaces": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]"],
			":target": ":target",
			":enabled": ":enabled",
			":disabled": ":disabled",
			":checked": ":checked",
			":indeterminate": ":indeterminate",
			":root": ":root",
			":nth-child": [
				":nth-child(even)", ":nth-child(odd)",
				":nth-child(n)", ":nth-child(-n)", ":nth-child(0n)",
				":nth-child(1)", ":nth-child(-1)", ":nth-child(0)",
				":nth-child(n+1)", ":nth-child(3n+1)", ":nth-child(3n + 1)",
				":nth-child(-n+1)", ":nth-child(-n-1)", ":nth-child(3n-1)"
			],
			":nth-last-child": [
				":nth-last-child(even)", ":nth-last-child(odd)",
				":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
				":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
				":nth-last-child(n+1)", ":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
				":nth-last-child(-n+1)", ":nth-last-child(-n-1)", ":nth-last-child(3n-1)"
			],
			":nth-of-type": [
				":nth-of-type(even)", ":nth-of-type(odd)",
				":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
				":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
				":nth-of-type(n+1)", ":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
				":nth-of-type(-n+1)", ":nth-of-type(-n-1)", ":nth-of-type(3n-1)"
			],
			":nth-last-of-type": [
				":nth-last-of-type(even)", ":nth-last-of-type(odd)",
				":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
				":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
				":nth-last-of-type(n+1)", ":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
				":nth-last-of-type(-n+1)", ":nth-last-of-type(-n-1)", ":nth-last-of-type(3n-1)"
			],
			":last-child": ":last-child",
			":only-child": ":only-child",
			":first-of-type": ":first-of-type",
			":last-of-type": ":last-of-type",
			":only-of-type": ":only-of-type",
			":empty": ":empty",
			":not()": [":not(*)", ":not(element)", ":not(.class):not(#id):not([attr]):not(:link)"]
		}
	},
	
	/*
	 * Note: the following media queries must be true in supporting UAs!
	 */
	"css3-mediaqueries": {
		"title": "Media Queries",
		"Media queries": {
			"only": ["only screen", "only all"],
			"not": ["not braille", "not handheld", "not print", "not projection", "not tty", "not tv"],
			"and": [
				"all and (width)", "(width) and (height)",
				"screen, print and (height)", "only screen and (width)", "not print and (height)",
				"only screen, (width) and (height)", "not tv and (width) and (height)",
				"all and (width) and (height), only print and (width), not screen and (height)"
			],
			"width": ["(width)", "(min-width: 0)", "(min-width: 1px)", "(max-width: 1000000px)"],
			"height": ["(height)", "(min-height: 0)", "(min-height: 1px)", "(max-height: 1000000px)"],
			"device-width": [
				"(device-width)", "(min-device-width: 0)", "(min-device-width: 1px)",
				"(max-device-width: 1000000px)"
			],
			"device-height": [
				"(device-height)", "(min-device-height: 0)", "(min-device-height: 1px)",
				"(max-device-height: 1000000px)"
			],
			"orientation": ["(orientation)", "not print and (orientation: portrait)", "(orientation: landscape)"],
			"aspect-ratio": [
				"(aspect-ratio)",
				"(min-aspect-ratio: 1/1000000)",
				"(min-aspect-ratio: 1 / 1000000)",
				"(max-aspect-ratio: 1000000/1)",
			],
			"device-aspect-ratio": [
				"(device-aspect-ratio)",
				"(min-device-aspect-ratio: 1/1000000)",
				"(min-device-aspect-ratio: 1 / 1000000)",
				"(max-device-aspect-ratio: 1000000/1)",
			],
			"color": [
				"(color)", "(min-color: 0)", "(max-color: 100)"
			],
			"color-index": [
				"not print and (color-index)", "(min-color-index: 0)",
				"not print and (min-color-index: 1)", "(max-color-index: 10000000)"
			],
			"monochrome": [
				"not print and (monochrome)", "(min-monochrome: 0)",
				"not print and (min-monochrome: 1)", "(max-monochrome: 10000)"
			],
			"resolution": [
				"(resolution)",
				"(min-resolution: 1dpi)",
				"(max-resolution: 1000000dpi)",
				"(max-resolution: 1000000dpcm)",
				"(max-resolution: 1000000dppx)"
			],
			"scan": ["not tv and (scan)", "not tv and (scan: progressive)", "not tv and (scan: interlace)"],
			"grid": ["not print and (grid)", "(grid: -0)", "(grid: 0)", "not print and (grid: 1)"]
		}
	},
	
	"css3-conditional": {
		"title": "Conditional Rules",
		"@rules": {
			"@supports": "@supports (width:1px)"
		}
	},
	
	"css3-namespace": {
		"title": "Namespaces",
		"@rules": {
			"@namespace": [
				"@namespace \"http://www.w3.org/1999/xhtml\";",
				"@namespace svg \"http://www.w3.org/2000/svg\";",
				"@namespace url(http://www.w3.org/1999/xhtml);",
				"@namespace svg url(http://www.w3.org/2000/svg);"
			]
		}
	},
	
	"css3-ui": {
		"title": "Basic User Interface",
		"properties": {
			"content": "icon",
			"icon": ["auto", "url(foo.png)", "url(foo.png), url(foo.gif)"],
			"box-sizing": ["border-box", "padding-box", "content-box"],
			"outline-offset": ["-5px", "0", "5px"],
			"resize": ["none", "both", "horizontal", "vertical"],
			"text-overflow": ["clip", "ellipsis", "'foo'"].times(1, 2),
			"cursor": [
				"url(foo.png) 2 2, auto", "default", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
				"ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in", "zoom-out"
			],
			"nav-index": ["auto", "1", "10"],
			"nav-up": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-right": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-down": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-left": ["auto", "#foo", "#foo current", "#foo root"],
			"ime-mode": ["auto", "normal", "active", "inactive", "disabled"]
		},
		"selectors": {
			":indeterminate": ":indeterminate",
			":default": ":default",
			":valid": ":valid",
			":invalid": ":invalid",
			":in-range": ":in-range",
			":out-of-range": ":out-of-range",
			":required": ":required",
			":optional": ":optional",
			":read-only": ":read-only",
			":read-write": ":read-write",
			"::value": "::value",
			"::choices": "::choices",
			"::repeat-item": "::repeat-item",
			"::repeat-index": "::repeat-index"
		}
	},
	
	"css3-transitions": {
		"title": "Transitions",
		"properties": {
			"transition-property": [
				"all", "none",
				"background-color", "background-position", "border-bottom-color", "border-bottom-width",
				"border-left-color", "border-left-width", "border-right-color", "border-right-width",
				"border-spacing", "border-top-color", "border-top-width", "bottom",
				"clip", "color", "font-size", "font-weight", "height", "left", "letter-spacing",
				"line-height", "margin-bottom", "margin-left", "margin-right",
				"margin-top", "max-height", "max-width", "min-height",
				"min-width", "opacity", "outline-color", "outline-width",
				"padding-bottom", "padding-left", "padding-right",
				"padding-top", "right", "text-indent", "text-shadow",
				"top", "vertical-align", "visibility", "width", "word-spacing", "z-index",
				"all, all", "all, background-color", "width, height", "width, all, height"
			],
			"transition-duration": ["0s", "1s", "100ms", "0s, 10s", "0ms, 10s, 100s"],
			"transition-timing-function": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"step-start", "step-end", "steps(1)", "steps(3, start)", "steps(5, end)",
				"cubic-bezier(.5, .5, .5, .5)", "cubic-bezier(.5, 1.5, .5, -2.5)"
			],
			"transition-delay": ["0s", "-1s", "100ms", "0s, 10s", "-100ms, 1s, 10s"],
			"transition": [
				"none", "all", "background-color", "0s", "ease", "-1s",
				"all 0s", "-1s 1s", "background-color 0.1s ease", "background-position 10ms linear 1s",
				"background-color linear 1s", "1s 2s width linear", "border-bottom-color ease-in", "100s 100ms",
				"all, all", "all, background-color", "-1s, -1s", "all, 1s, ease-in-out",
				"10s border-left-color step-start, step-end, steps(10, start) all",
				"cubic-bezier(.5, 1.5, .5, -2.5) -10ms, -1s all 10s, all ease-in-out",
				"all 1s ease 2s, cubic-bezier(0.25, 0.1, 0.25, 1) 60s 1ms opacity"
			]
		}
	},
	
	"css3-animations": {
		"title": "Animations",
		"properties": {
			"animation-name": ["foo", "foo, bar"],
			"animation-duration": ["0s", "1s", "100ms"],
			"animation-timing-function": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"cubic-bezier(.5, .5, .5, .5)",
				"cubic-bezier(.5, 1.5, .5, -2.5)",
				"step-start", "step-end", "steps(3, start)", "steps(5, end)"
			],
			"animation-iteration-count": ["infinite", "8", "4.35"],
			"animation-direction": ["normal", "alternate", "reverse", "alternate-reverse"],
			"animation-play-state": ["running", "paused"],
			"animation-delay": ["1s", "-1s"],
			"animation-fill-mode": ["none", "forwards", "backwards", "both"],
			"animation": "foo 1s 2s infinite linear alternate both"
		},
		"@rules": {
			"@keyframes": "@keyframes foo"
		}
	},
	
	"css3-transforms": {
		"title": "Transforms",
		"properties": {
			"transform": [
				"none",
				"translate(5px)", "translate(5px, 10px)", "translateY(5px)", "translateX(5px)", "translateY(5%)", "translateX(5%)",
				"scale(2)", "scale(2, -1)", "scaleX(2)", "scaleY(2.5)",
				"rotate(45deg)",
				"skew(45deg)", "skew(45deg, 15deg)", "skewX(45deg)", "skewY(45deg)",
				"matrix(1,-.2,0,1,0,0)", "matrix(1,-.2,0,1,10,10)",
				"translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)",
				"translate3d(0, 0, 5px)", "translateZ(5px)",
				"scale3d(1, 0, -1)", "scaleZ(1.5)",
				"rotate3d(1, 1, 1, 45deg)", "rotateX(-45deg)", "rotateY(-45deg)", "rotateZ(-45deg)",
				"matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)", "matrix3d(0,0,0,0,0,0,0,0,0,0,1,0,10,10,0,1)",
				"translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)",
				"perspective(600px)"
			],
			"transform-origin": ["10px", "top", "top left", "50% 100%", "left 0%", "right bottom 20px"],
			"transform-style": ["flat", "preserve-3d"],
			"perspective": ["none", "600px"],
			"perspective-origin": ["10px", "top", "top left", "50% 100%", "left 0%"],
			"backface-visibility": ["visible", "hidden"]
		}
	},
	
	"css3-text": {
		"title": "Text",
		"properties": {
			"text-transform": "full-width",
			"tab-size": ["8", "1em"],
			"line-break": ["auto", "loose", "normal", "strict"],
			"word-break": ["normal", "keep-all", "break-all"],
			"hyphens": ["auto", "manual", "none"],
			"word-wrap": ["normal", "break-word"],
			"overflow-wrap": ["normal", "break-word"],
			"text-align": ["start", "end", "match-parent", "start end"],
			"text-align-last": ["auto", "start", "end", "left", "right", "center", "justify"],
			"text-justify": ["auto", "none", "inter-word", "distribute"],
			"word-spacing": ["50%"].concat(["normal", "1em", "50%"].times(2, 3)),
			"text-indent": [
				"1em hanging", "1em each-line", "hanging 2em", "each-line 3em",
				"1em hanging each-line", "1em each-line hanging", "hanging each-line 1em", "each-line hanging 1em"
			],
			"hanging-punctuation": [
				"none", "first", "last", "force-end", "allow-end",
				"first force-end", "first allow-end", "first last",
				"force-end first", "force-end last",
				"allow-end first", "allow-end last",
				"last first", "last force-end", "last force-end",
				"first force-end last", "first allow-end last", "first last force-end", "first last allow-end",
				"force-end first last", "force-end last first",
				"allow-end first last", "allow-end last first",
				"last first force-end", "last first allow-end", "last force-end first", "last allow-end first"
			]
		}
	},
	
	"css-text-decor-3": {
		"title": "Text Decoration",
		"properties": {
			"text-decoration-line": ["none", "underline", "overline", "line-through", "blink", "underline overline"],
			"text-decoration-color": "white",
			"text-decoration-style": ["solid", "double", "dotted", "dashed", "wavy"],
			"text-decoration": "underline dotted green",
			"text-decoration-skip": ["none", "objects", "spaces", "ink", "edges", "box-decoration", "objects edges"],
			"text-underline-position": ["auto", "alphabetic", "under", "left", "under right"],
			"text-emphasis-style": ["none", "filled", "open dot", "circle", "double-circle", "triangle", "sesame", "'foo'"],
			"text-emphasis-color": "green",
			"text-emphasis": "open dot green",
			"text-emphasis-position": ["over right", "under left"],
			"text-shadow": ["1px 1px", "0 0 black", "1px 2px 3px black"]
		}
	},
	
	"css3-fonts": {
		"title": "Fonts",
		"properties": {
			"font-stretch": ["normal", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
			"font-size-adjust": ["none", "auto", ".5"],
			"font-synthesis": ["none", "weight", "style", "weight style", "style weight"],
			"font-kerning": ["auto", "normal", "none"],
			"font-variant-position": ["normal", "sub", "super"],
			"font-variant-ligatures": [
				"normal", "none",
				"common-ligatures", "no-common-ligatures",
				"discretionary-ligatures", "no-discretionary-ligatures",
				"historical-ligatures", "no-historical-ligatures",
				"contextual", "no-contextual",
				"common-ligatures discretionary-ligatures historical-ligatures contextual"
			],
			"font-variant-caps": ["normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "titling-caps", "unicase"],
			"font-variant-numeric": [
				"normal",
				"lining-nums", "oldstyle-nums",
				"proportional-nums", "tabular-nums",
				"diagonal-fractions", "stacked-fractions",
				"ordinal", "slashed-zero",
				"lining-nums proportional-nums diagonal-fractions",
				"oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero",
				"slashed-zero ordinal tabular-nums stacked-fractions oldstyle-nums"
			],
			"font-variant-alternates": [
				"normal",
				"historical-forms"
				// TODO add tests for functions
			],
			"font-variant-east-asian": [
				"normal",
				"jis78", "jis83", "jis90", "jis04", "simplified", "traditional",
				"full-width", "proportional-width",
				"ruby", "simplified full-width ruby"
			],
			"font-variant": ["none", "sub lining-nums contextual ruby"],
			"font-feature-settings": ["normal", "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
			"font-language-override": ["normal", "'SRB'"],
			"unicode-range": ["U+416", "U+0-7F", "U+A5, U+4E00-9FFF", "U+30??"]
		},
		"@rules": {
			"@font-face": "@font-face",
			"@font-feature-values": "@font-feature-values Jupiter Sans"
		}
	},
	
	"css3-writing-modes": {
		"title": "Writing Modes",
		"properties": {
			"unicode-bidi": ["isolate", "isolate-override", "plaintext"],
			"writing-mode": ["horizontal-tb", "vertical-rl", "vertical-lr"],
			"text-orientation": ["mixed", "upright", "sideways-right", "sideways-left", "sideways", "use-glyph-orientation"],
			"caption-side": ["before", "after"],
			"text-combine-horizontal": ["none", "all", "digits", "digits 2"]
		}
	},
	
	"css3-color": {
		"title": "Color",
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"rgba": "rgba(0,0,0,.5)",
			"hsl": "hsl(0,0%,0%)",
			"hsla": "hsla(0,0%,0%,.5)",
			"transparent": "transparent",
			"currentColor": "currentColor"
		},
		"properties": {
			"opacity": ["-5", "0", ".5", "1", "2"]
		}
	},
	
	"css3-multicol": {
		"title": "Multi-column Layout",
		"properties": {
			"column-width": ["10em", "auto"],
			"column-count": ["2", "auto"],
			"columns": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"],
			"column-gap": ["1em", "normal"],
			"column-rule-color": "red",
			"column-rule-style": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"],
			"column-rule-width": ["1px", "thin", "medium", "thick"],
			"column-rule": [
				"medium", "none", "red", "transparent",
				"medium none", "none medium", "medium red", "none red",
				"red medium", "red none", "medium transparent", "none transparent",
				"transparent medium", "transparent none",
				"1px solid black", "thin outset blue", "thick yellow hidden", "dashed white medium",
				"dotted 10em purple", "green double thin", "black thick groove",
				"transparent ridge medium", "transparent thin inset"
			],
			"break-before": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"],
			"break-after": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"],
			"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
			"column-span": ["none", "all"],
			"column-fill": ["auto", "balance"]
		}
	},
	
	"css3-cascade": {
		"title": "Cascading and Inheritance",
		"properties": {
			"all": ["default"]
		}
	},
	
	"css3-values": {
		"title": "Values and Units",
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"initial": "initial",
			"rem": "5rem",
			"ch": "5ch",
			"vw": "5vw",
			"vh": "5vh",
			"vmin": "5vmin",
			"vmax": "5vmax",
			"attr()": ["attr(data-px)", "attr(data-px px)", "attr(data-px px, initial)"],
			"calc()": ["calc(1px + 2px)", "calc(5px*2)", "calc(5px/2)", "calc(100%/3 - 2*1em - 2*1px)", /* "calc(attr(data-px)*2)", */ "calc(5px - 10px)"],
			"toggle()": "toggle(1px, 2px)"
		}
	},
	
	"css3-speech": {
		"title": "Speech",
		"properties": {
			"voice-volume": ["silent", "x-soft", "soft", "medium", "loud", "x-loud", "-6dB", "0", "6db"],
			"voice-balance": ["left", "center", "right", "leftwards", "rightwards", "-100", "0", "100"],
			"speak": "auto",
			"speak-as": ["normal", "spell-out", "digits", "literal-punctuation", "no-punctuation"],
			"pause-before": ["none", "x-weak", "weak", "medium", "strong", "x-strong"],
			"pause-after": ["none", "x-weak", "weak", "medium", "strong", "x-strong"],
			"pause": ["none", "x-weak", "weak", "medium", "strong", "x-strong"],
			"rest-before": ["none", "x-weak", "weak", "medium", "strong", "x-strong", "+3s", "250ms"],
			"rest-after": ["none", "x-weak", "weak", "medium", "strong", "x-strong", "+3s", "250ms"],
			"rest": ["none", "x-weak", "weak", "medium", "strong", "x-strong", "+3s", "250ms"],
			"cue-before": ["-6dB", "0", "6db"],
			"cue-after": ["-6dB", "0", "6db"],
			"cue": ["-6dB", "0", "6db"],
			"voice-family": "preserve",
			"voice-rate": ["normal", "x-slow", "slow", "medium", "fast", "x-fast", "0", "100%"],
			"voice-pitch": ["absolute", "x-low", "low", "medium", "high", "x-high", "0", "100%", "-100%", "250Hz", "+250Hz", "-20Hz", ".2kHz", "-3.5st", "3.5st"],
			"voice-range": ["absolute", "x-low", "low", "medium", "high", "x-high", "0", "100%", "-100%", "250Hz", "+250Hz", "-20Hz", ".2kHz", "-3.5st", "3.5st"],
			"voice-stress": ["normal", "strong", "moderate", "none", "reduced "],
			"voice-duration": ["auto", "+3s", "250ms"]
		}
	},
	
	"css3-marquee": {
		"title": "Marquee",
		"properties": {
			"overflow-style": ["auto", "marquee-line", "marquee-block"],
			"marquee-style": ["scroll", "slide", "alternate"],
			"marquee-play-count": ["1", "0", "infinite"],
			"marquee-direction": ["forward", "reverse"],
			"marquee-speed": ["normal", "slow", "fast "]
		}
	},
	
	"css3-flexbox": {
		"title": "Flexible Box Layout",
		"properties": {
			"align-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
			"align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
			"align-self": ["flex-start", "flex-end", "center", "baseline", "stretch", "auto"],
			"display": ["flex", "inline-flex"],
			"flex": ["none", "5 7 10%"],
			"flex-basis": ["auto", "1px"],
			"flex-direction": ["row", "row-reverse", "column", "column-reverse"],
			"flex-flow": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"],
			"flex-grow": ["0", "5"],
			"flex-shrink": ["1", "10"],
			"flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
			"justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around"],
			"min-height": "auto",
			"min-width": "auto",
			"order": ["0", "1"]
		}
	},
	
	"css3-align": {
		"title": "Box Alignment",
		"properties": {
			"justify-self": ["auto", "start", "end", "center"].concat(
				["start", "end", "center"].and(["true"]),
				["true"].and(["start", "end", "center"])
			),
			"align-self": ["head", "foot"].concat(
				["baseline", "head", "foot", "center", "stretch"].and(["true"]),
				["true"].and(["baseline", "head", "foot", "center", "stretch"])
			),
			"justify-content": ["auto", "start", "end", "left", "right"].concat(
				["start", "end", "left", "right", "flex-start", "flex-end", "center", "space-between", "space-around"].and(["true"]),
				["true"].and(["start", "end", "left", "right", "flex-start", "flex-end", "center", "space-between", "space-around"])
			),
			"align-content": ["auto", "head", "foot", "baseline"].concat(
				["head", "foot", "flex-start", "flex-end", "baseline", "center", "space-between", "space-around"].and(["true"]),
				["true"].and(["head", "foot", "flex-start", "flex-end", "baseline", "center", "space-between", "space-around"])
			),
			"justify-items": ["auto", "start", "center", "end"].concat(
				["start", "center", "end"].and(["true"]),
				["true"].and(["start", "center", "end"])
			),
			"align-items": ["auto", "head", "foot"].concat(
				["head", "foot", "flex-start", "flex-end", "center", "baseline", "stretch"].and(["true"]),
				["true"].and(["head", "foot", "flex-start", "flex-end", "center", "baseline", "stretch"])
			)
		}
	},
	
	"css3-exclusions": {
		"title": "Exclusions and Shapes",
		"properties": {
			"wrap-flow": ["auto", "both", "start", "end", "minimum", "maximum", "clear"],
			"wrap-through": ["wrap", "none"],
			"shape-outside": ["auto", "rectangle", "circle", "ellipse", "polygon", "url(foo.png)"],
			"shape-inside": ["outside-shape", "auto", "rectangle", "circle", "ellipse", "polygon", "url(foo.png)"],
			"shape-image-threshold": ["0.5", "0.0", "1.0"],
			"shape-margin": ["0", "1px", "10em"],
			"shape-padding": ["0", "1px", "10em"]
		}
	},
	
	"css3-regions": {
		"title": "Regions",
		"properties": {
			"flow-into": ["table-content", "none"],
			"flow-from": ["thread", "none"],
			"break-before": ["region", "avoid-region"],
			"break-after": ["region", "avoid-region"],
			"break-inside": "avoid-region",
			"region-fragment": ["auto", "break"]
		},
		"@rules": {
			"@region": "@region div"
		}
	},
	
	"css3-break": {
		"title": "Fragmentation",
		"properties": {
			"break-before": ["any", "recto", "verso"],
			"break-after": ["any", "recto", "verso"]
		}
	},
	
	"css3-grid-layout": {
		"title": "Grid Layout",
		"properties": {
			"display": ["grid", "inline-grid"],
			"grid-definition-columns": [
				"none", "\"first\"", "minmax(1px, 10px)", "auto",
				"100px", "30%", "1fr", "min-content", "max-content",
				"repeat(2, 2px)", "repeat(4, \"content\" 250px 10px)",
				"100px 1fr max-content minmax(min-content, 1fr)",
			],
			"grid-definition-rows": [
				"none", "\"header\"", "minmax(1px, 10px)", "auto",
				"100px", "30%", "1fr", "min-content", "max-content",
				"repeat(2, 2px)", "repeat(4, \"content\" 250px 10px)",
				"\"first\" \"header\" 50px \"main\" 1fr \"footer\" 50px \"last\"",
			],
			"grid-template": ["none", "\"head head\" \"nav main\" \"foot .\""],
			"grid-column-position": ["auto", "1", "\"first\"", "head", "1 3"],
			"grid-row-position": ["auto", "2", "\"first\"", "head", "1 3"],
			"grid-column-span": ["1", "head"],
			"grid-row-span": ["1", "head"],
			"grid-row": [
				"1", "\"first\"", "auto", "2 3", "\"header\" \"main\"",
				"4 \"footer\"", "\"content\" 5", "auto 6", "auto \"first\"", "head"
			],
			"grid-column": [
				"1", "\"first\"", "auto", "2 3", "\"header\" \"main\"",
				"4 \"footer\"", "\"content\" 5", "auto 6", "auto \"first\"", "head"
			],
			"grid-position": ["1", "\"first\"", "auto"].times(2).concat(["head"]),
			"grid-span": ["1", "2 3", "head"],
			"grid-area": ["none", "head"].concat(
				Array.prototype.concat.apply(["1", "\"first\"", "auto"].times(2), ["2", "3 4", "5 \"header\""].map(function (val1) {
					return ["1", "\"first\"", "auto"].times(2).map(function (val2) {
						return val2 + " " + val1;
					});
				}))
			).concat(["\"labels\"", "\"controls\" \"oversized\"", "\"content\" 1", "auto"]),
			"grid-auto-columns": [
				"auto", "minmax(1px, 10px)", "100px", "30%", "1fr",
				"min-content", "max-content"
			],
			"grid-auto-rows": [
				"auto", "minmax(1px, 10px)", "100px", "30%", "1fr",
				"min-content", "max-content"
			],
			"grid-auto-flow": ["none", "rows", "columns"]
		}
	},
	
	"css3-layout": {
		"title": "Grid Template Layout",
		"properties": {
			"grid-template": "\"****\" \"****\" \"****\"",
			"grid-columns": [
				"auto", "1px", "10%", "*", "1fr",
				"minmax(1px , 10px)", "min-content", "max-content", "fit-content",
				"* * * *"
			],
			"grid-rows": [
				"auto", "1px", "10%", "*", "1fr",
				"minmax(1px , 10px)", "min-content", "max-content", "fit-content",
				"* * * *"
			],
			"grid": ["none"].concat(
				[
					"1px", "10%", "*", "1fr", "minmax(1px , 10px)",
					"min-content", "max-content", "fit-content", "* * * *"
				].and(["\"a b c\""]),
				"\"a b c\"",
				["\"a b c\""].and([
					"1px", "10%", "*", "1fr", "minmax(1px , 10px)",
					"min-content", "max-content", "fit-content", "* * * *"
				]),
				"10% \"d e f\" minmax(1px , 10px)",
				"10% \"d e f\" minmax(1px , 10px) \"g h i\" min-content",
				"10% \"d e f\" \"g h i\" max-content",
				"\"a b\" \"c d\"", "* 10em \"a b c\" \"a b d\" 4em"
			),
			"flow": ["auto", "p1", "\"initial\"", "*", "same"],
			"grid-area": ["same", "next"].times(2).concat(
				["same", "next"].and(["1"]), ["2"].and(["same", "next"]),
				["same", "next"].times(2).and(["3 4"]),
				["same", "next"].and(["5"]).and(["6 7"]),
				["8"].and(["same", "next"]).and(["9 10"])
			),
			"chains": ["none", "a", "b c", "d, e", "f g, h i", "j, k l", "m n, o p", "@ a b c d e, f g h i j k"]
		},
		"selectors": {
			"::slot()": "body::slot(a)",
			"::flow()": "p::flow(b)"
		}
	},
	
	"css3-ruby": {
		"title": "Ruby",
		"properties": {
			"ruby-position": ["before", "after", "inter-character", "inline"],
			"ruby-align": ["auto", "start", "left", "center", "end", "right", "distribute-letter", "distribute-space", "line-edge"],
			"ruby-overhang": ["auto", "start", "end", "none"],
			"ruby-span": ["none", "attr(rbspan)"]
		}
	},
	
	"css3-box": {
		"title": "Basic Box Model",
		"properties": {
			"display": [
				"run-in", "compact",
				"ruby", "ruby-base", "ruby-text", "ruby-base-group", "ruby-text-group",
				"container"
			],
			"padding": ["auto"].times(1, 4).concat([
				"auto 1px", "10% auto",
				"auto 1px 10%", "1px auto 10%", "1px 10% auto",
				"auto 1px 10% 100em", "1px auto 10% 100em", "1px 10% auto 100em", "1px 10% 100em auto"
			]),
			"padding-top": "auto",
			"padding-right": "auto",
			"padding-bottom": "auto",
			"padding-left": "auto",
			"margin-top": "fill",
			"margin-right": "fill",
			"margin-bottom": "fill",
			"margin-left": "fill",
			"margin": ["fill"].times(1, 4).concat([
				"fill 1px", "10% fill",
				"fill 1px 10%", "1px fill 10%", "1px 10% fill",
				"fill 1px 10% auto", "1px fill 10% auto", "1px 10% fill auto", "1px 10% auto fill"
			]),
			"width": ["1px", "1%"].and(["border-box", "content-box"]).concat(
				["border-box", "content-box"].and(["1px", "1%"]),
				["available", "min-content", "max-content", "fit-content"]
			),
			"height": ["1px", "1%"].and(["border-box", "content-box"]).concat(
				["border-box", "content-box"].and(["1px", "1%"]),
				["available", "min-content", "max-content", "fit-content", "complex"]
			),
			"min-width": ["1px", "1%"].and(["border-box", "content-box"]).concat(
				["border-box", "content-box"].and(["1px", "1%"]),
				["available", "min-content", "max-content", "fit-content"]
			),
			"min-height": ["1px", "1%"].and(["border-box", "content-box"]).concat(
				["border-box", "content-box"].and(["1px", "1%"]),
				["available", "min-content", "max-content", "fit-content"]
			),
			"max-width": ["1px", "1%"].and(["border-box", "content-box"]).concat(
				["border-box", "content-box"].and(["1px", "1%"]),
				["available", "min-content", "max-content", "fit-content"]
			),
			"max-height": ["1px", "1%"].and(["border-box", "content-box"]).concat(
				["border-box", "content-box"].and(["1px", "1%"]),
				["available", "min-content", "max-content", "fit-content"]
			),
			"float": [
				"top", "bottom", "start", "end",
				"inside", "outside", "page", "multicol", "intrude",
				"unless-room", "next", "page(landscape)", "hide"
			].concat(
				[
					"left", "right", "top", "bottom", "start", "end",
					"inside", "outside", "page", "multicol", "intrude",
					"unless-room", "next", "page(landscape)", "hide"
				].and(["contour"]),
				["contour"].and([
					"left", "right", "top", "bottom", "start", "end",
					"inside", "outside", "page", "multicol", "intrude",
					"unless-room", "next", "page(landscape)", "hide"
				])
			),
			"clear-after": [
				"none", "left", "right", "top", "bottom", "inside", "outside",
				"start", "end", "both", "descendants"
			],
			"overflow-x": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"],
			"overflow-y": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"],
			"overflow": ["no-display", "no-content"].times(1, 2).concat(
				["visible", "hidden", "scroll", "auto"].and(["no-display", "no-content"]),
				["no-display", "no-content"].and(["visible", "hidden", "scroll", "auto"])
			),
			"alignment": ["top", "right", "bottom", "left", "center"],
			"child-align": ["auto", "top", "middle", "bottom", "left", "right"],
			"float-displace": ["line", "indent", "block", "block-within-page"],
			"indent-edge-reset": ["none", "margin-edge", "border-edge", "padding-edge", "content-edge"]
		}
	},
	
	"css3-overflow": {
		"title": "Overflow",
		"properties": {
			"max-lines": ["none", "1"]
		}
	},
	
	"css3-sizing": {
		"title": "Intrinsic & Extrinsic Sizing",
		"properties": {
			"width": ["fill-available", "repudiate-floats"],
			"min-width": ["fill-available", "repudiate-floats", "contain-floats"],
			"max-width": ["fill-available", "repudiate-floats"],
			"height": ["fill-available", "repudiate-floats"],
			"min-height": ["fill-available", "repudiate-floats", "contain-floats"],
			"max-height": ["fill-available", "repudiate-floats"],
			"column-width": ["min-content", "max-content", "fill-available", "fit-content"]
		}
	},
	
	"css3-positioning": {
		"title": "Positioned Layout",
		"properties": {
			"position": ["center", "page"],
			"offset-before": ["auto", "10px", "10%"],
			"offset-end": ["auto", "10px", "10%"],
			"offset-after": ["auto", "10px", "10%"],
			"offset-start": ["auto", "10px", "10%"],
			"clip": ["inset(5px, 40px, 45px, 5px)", "inset(30%, 0%, 30%, 25%)"]
		}
	},
	
	"css3-linebox": {
		"title": "Line Layout",
		"properties": {
			"text-height": ["auto", "font-size", "text-size", "max-size", "10.52"],
			"line-height": ["none"],
			"line-box-contain": ["block", "inline", "font", "glyphs", "replaced", "inline-box", "none"],
			"line-stacking-strategy": ["inline-line-height", "block-line-height", "max-height", "grid-height"],
			"line-stacking-ruby": ["exclude-ruby", "include-ruby"],
			"line-stacking-shift": ["consider-shifts", "disregard-shifts"],
			"line-stacking": [
				"inline-line-height", "block-line-height", "max-height", "grid-height", "exclude-ruby", "include-ruby", "consider-shifts", "disregard-shifts"
			].concat(
				["inline-line-height", "block-line-height", "max-height", "grid-height"].and(["exclude-ruby", "include-ruby"]),
				["inline-line-height", "block-line-height", "max-height", "grid-height"].and(["consider-shifts", "disregard-shifts"]),
				["exclude-ruby", "include-ruby"].and(["inline-line-height", "block-line-height", "max-height", "grid-height"]),
				["exclude-ruby", "include-ruby"].and(["consider-shifts", "disregard-shifts"]),
				["consider-shifts", "disregard-shifts"].and(["inline-line-height", "block-line-height", "max-height", "grid-height"]),
				["consider-shifts", "disregard-shifts"].and(["exclude-ruby", "include-ruby"]),
				["inline-line-height", "block-line-height", "max-height", "grid-height"].and(["exclude-ruby", "include-ruby"]).and(["consider-shifts", "disregard-shifts"]),
				["inline-line-height", "block-line-height", "max-height", "grid-height"].and(["consider-shifts", "disregard-shifts"]).and(["exclude-ruby", "include-ruby"]),
				["exclude-ruby", "include-ruby"].and(["inline-line-height", "block-line-height", "max-height", "grid-height"]).and(["consider-shifts", "disregard-shifts"]),
				["exclude-ruby", "include-ruby"].and(["consider-shifts", "disregard-shifts"]).and(["inline-line-height", "block-line-height", "max-height", "grid-height"]),
				["consider-shifts", "disregard-shifts"].and(["inline-line-height", "block-line-height", "max-height", "grid-height"]).and(["exclude-ruby", "include-ruby"]),
				["consider-shifts", "disregard-shifts"].and(["exclude-ruby", "include-ruby"]).and(["inline-line-height", "block-line-height", "max-height", "grid-height"])
			),
			"dominant-baseline": ["auto", "use-script", "no-change", "reset-size", "alphabetic", "hanging", "ideographic", "mathematical", "central", "middle", "text-after-edge", "text-before-edge"],
			"alignment-baseline": ["baseline", "use-script", "before-edge", "text-before-edge", "after-edge", "text-after-edge", "central", "middle", "ideographic", "alphabetic", "hanging", "mathematical"],
			"alignment-adjust": ["auto", "baseline", "before-edge", "text-before-edge", "middle", "central", "after-edge", "text-after-edge", "ideographic", "alphabetic", "hanging", "mathematical", "0%", "10%", "0cm", "10px"],
			"baseline-shift": ["baseline", "sub", "super", "0%", "10%", "0cm", "10px"],
			"vertical-align": ["auto", "central"],
			"inline-box-align": ["last", "initial", "1"],
			"drop-initial-value": ["initial", "1"],
			"drop-initial-size": ["auto", "&lt;line&gt;", "10%", "10px"],
			"drop-initial-after-align": ["baseline", "use-script", "before-edge", "text-before-edge", "after-edge", "text-after-edge", "central", "middle", "ideographic", "alphabetic", "hanging", "mathematical"],
			"drop-initial-after-adjust": ["text-after-edge", "central", "middle", "after-edge", "ideographic", "alphabetic", "mathematical", "0%", "10%", "0cm", "10px"],
			"drop-initial-before-align": ["caps-height", "baseline", "use-script", "before-edge", "text-before-edge", "after-edge", "text-after-edge", "central", "middle", "ideographic", "alphabetic", "hanging", "mathematical"],
			"drop-initial-before-adjust": ["text-before-edge", "before-edge", "central", "middle", "hanging", "mathematical", "0%", "10%", "0cm", "10px"],
		}
	},
	
	"css3-page": {
		"title": "Paged Media",
		"properties": {
			"size": [
				"auto", "4in", "8.5in 11in", "A5", "A4", "A3", "B5", "B4", "letter", "legal", "ledger", "portrait", " landscape"
			].concat(
				["A5", "A4", "A3", "B5", "B4", "letter", "legal", "ledger"].and(["portrait", " landscape"]),
				["portrait", " landscape"].and(["A5", "A4", "A3", "B5", "B4", "letter", "legal", "ledger"])
			),
			"page": ["auto", "rotated", "narrow", "main", "index"]
		}
	},
	
	"css3-gcpm": {
		"title": "Generated Content for Paged Media",
		"properties": {
			"string-set": ["none"].concat(["header"].and([
				"\"foo\"", "counter(par-num, upper-roman)", "counters(par-num, upper-roman, disc)",
				"contents", "content-element", "content-before", "content-after", "content-first-letter",
				"env(url)", "env(date)", "env(time)", "env(date-time)"
			])).concat([
				"title contents", "index content-first-letter", "header content-before content-element",
				"header \"Chapter \" counter(chapter) contents", "header \"Chapter \" counter(header) \": \" contents",
				"index \"foo\" attr(title) counter(par-num, upper-roman) counters(par-num, upper-roman, disc) contents content-element content-before content-after content-first-letter env(url) env(date) env(time) env(date-time)",
				"index content-first-letter, entry contents", "title env(date-time), header content-before, index content-after"
			]),
			"marks": ["none", "crop", "cross", "crop cross", "cross crop"],
			"bleed": ["6pt"],
			"bookmark-level": ["none", "1"],
			"bookmark-label": [
				"none", "\"foo\"", "counter(par-num, upper-roman)", "counters(par-num, upper-roman, disc)",
				"contents", "content-element", "content-before", "content-after", "content-first-letter",
				"env(url)", "env(date)", "env(time)", "env(date-time)", "content-before \": \" contents",
				"\"foo\" counter(par-num, upper-roman) counters(par-num, upper-roman, disc) contents content-element content-before content-after content-first-letter env(url) env(date) env(time) env(date-time)"
			],
			"bookmark-state": ["open", "closed"],
			"float-offset": ["0 0", "5px", "2em 3em"],
			"clear-side": ["auto", "both"]
		}
	},
	
	"css3-lists": {
		"title": "Lists and Counters",
		"properties": {
			"display": ["inline-list-item"],
			"list-style-image": ["image('sprites.svg#xywh=40,0,20,20')", "radial-gradient(circle, #006, #00a 90%, #0000af 100%, white 100%)"],
			"list-style-type": [
				"\"★\"", "cjk-decimal", "hebrew", "hiragana", "hiragana-iroha", "katakana", "katakana-iroha", "disclosure-open", "disclosure-closed",
				"japanese-informal", "japanese-formal", "korean-hangul-formal", "korean-hanja-informal", "korean-hanja-formal",
				"simp-chinese-informal", "simp-chinese-formal", "trad-chinese-informal", "trad-chinese-formal", "cjk-ideographic",
				"ethiopic-numeric", "circled-lower-latin", "symbols(repeating '○' '●')", "toggle(disc, square, circle)"
			],
			"list-style": [
				"hebrew", "linear-gradient(white, black)",
				"hiragana radial-gradient(white, black)", "hiragana-iroha outside",
				"repeating-linear-gradient(white, black) katakana", "repeating-radial-gradient(white, black) inside",
				"outside katakana-iroha", "inside linear-gradient(to left, white, black)",
				"cjk-ideographic radial-gradient(at center, white, black) outside",
				"repeating-linear-gradient(to left, white, black) hebrew inside",
				"outside hiragana repeating-radial-gradient(at center, white, black)",
				"inside radial-gradient(closest-side ellipse at 10px 10%, white, black) hiragana-iroha"
			],
			"position": ["marker"],
			"marker-side": ["list-item", "list-container"],
			"counter-set": ["none", "section", "chapter 0", "section -1 imagenum 99", "list-item attr(value integer, 1)"]
		},
		"selectors": {
			"::marker": "li::marker"
		}
	},
	
	"css-counter-styles-3": {
		"title": "Counter Styles",
		"values": {
			"properties": ["list-style-type"],
			"symbols()": [
				"symbols(\"*\" \"\2020\" \"\2021\" \"\A7\")", "symbols(cyclic \"*\" \"\2020\" \"\2021\" \"\A7\")",
				"symbols(numeric \"1\")", "symbols(alphabetic \"a\")",
				"symbols(symbolic linear-gradient(white, black) url(foo.png))", "symbols(fixed \"0\" radial-gradient(white, black) \"A\")",
			]
		},
		"properties": {
			"system": ["cyclic", "numeric", "alphabetic", "symbolic", "additive", "fixed", "fixed 1", "override triangle"],
			"negative": ["\"-\"", "\"(\" \")\""],
			"prefix": ["\"\"", "\"-webkit-\""],
			"suffix": ["\".\"", "kg"],
			"range": ["auto", "1 infinite", "infinite 0"],
			"fallback": [
				"decimal", "decimal-leading-zero", "cjk-decimal", "lower-roman", "upper-roman", "armenian", "georgian", "hebrew",
				"lower-alpha", "lower-latin", "upper-alpha", "upper-latin", "lower-greek", "hiragana", "hiragana-iroha", "katakana", "katakana-iroha",
				"disc", "circle", "square", "disclosure-open", "disclosure-closed",
				"japanese-informal", "japanese-formal", "korean-hangul-formal", "korean-hanja-informal", "korean-hanja-formal",
				"simp-chinese-informal", "simp-chinese-formal", "trad-chinese-informal", "trad-chinese-formal", "cjk-ideographic",
				"ethiopic-numeric"
			],
			"symbols": [
				"‣", "◰ ◳ ◲ ◱", "* ⁑ † ‡", "A B C D E F G H I J K L M \nN O P Q R S T U V W X Y Z",
				"url(white.svg) url(black.svg)", "'0' '1' '2' '3' '4' '5' '6' '7' '8' '9'",
				"ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ", "'1' linear-gradient(white, black) あ"
			],
			"additive-symbols": [
				"6 ⚅, 5 ⚄, 4 ⚃, 3 ⚂, 2 ⚁, 1 ⚀", "'0' 0, 1 radial-gradient(white, black), 2 A"
			],
			"speak-as": ["auto", "numeric", "alphabetic", "bullet", "decimal", "lower-latin"]
		},
		"@rules": {
			"@counter-style": "@counter-style circled-lower-latin"
		}
	},
	
	"css3-hyperlinks": {
		"title": "Hyperlink Presentation",
		"properties": {
			"target-name": ["current", "root", "parent", "new", "modal", "\"foo\""],
			"target-new": ["window", "tab", "none"],
			"target-position": ["above", "behind", "front", "back"],
			"target": ["current", "root", "parent", "new", "modal", "\"foo\""].concat(
				["window", "tab", "none"],
				["above", "behind", "front", "back"],
				["current", "root", "parent", "new", "modal", "\"foo\""].and(["window", "tab", "none"]),
				["current", "root", "parent", "new", "modal", "\"foo\""].and(["above", "behind", "front", "back"]),
				["window", "tab", "none"].and(["current", "root", "parent", "new", "modal", "\"foo\""]),
				["window", "tab", "none"].and(["above", "behind", "front", "back"]),
				["above", "behind", "front", "back"].and(["current", "root", "parent", "new", "modal", "\"foo\""]),
				["above", "behind", "front", "back"].and(["window", "tab", "none"]),
				["current window above", "behind tab root"]
			)
		}
	},
	
	"css-variables": {
		"title": "Custom Properties for Cascading Variables",
		"values": {
			"properties": ["background-color", "var-foo"],
			"var()": ["var(color)", "var(header-color)"/*, "calc(var(gap) * 1px)"*/]
		}/*,
		"properties": {
			"var-*": ["var-foo", "var-FOO", "var-header-color"]
		}*/
	},
	
	"css-size-adjust": {
		"title": "Mobile Text Size Adjustment",
		"properties": {
			"text-size-adjust": ["auto", "none", "50%"]
		}
	},
	
	"css-color-correction": {
		"title": "Color Correction",
		"properties": {
			"color-correction": ["default", "sRGB"]
		}
	},
	
	"css-device-adapt": {
		"title": "Device Adaptation",
		"properties": {
			"min-width": ["device-width", "device-height"],
			"max-width": ["auto", "device-width", "device-height"],
			"width": [
				"device-width", "device-height",
				"device-width auto", "device-height auto", "auto device-width", "device-width device-width",
				"device-height device-width", "10px device-width", "50% device-width", "auto device-height",
				"device-width device-height", "device-height device-height", "10px device-height", "50% device-height",
				"device-width 10px", "device-height 10px", "device-width 50%", "device-height 50%"
			],
			"min-height": ["device-width", "device-height"],
			"max-height": ["auto", "device-width", "device-height"],
			"height": [
				"device-width", "device-height",
				"device-width auto", "device-height auto", "auto device-width", "device-width device-width",
				"device-height device-width", "10px device-width", "50% device-width", "auto device-height",
				"device-width device-height", "device-height device-height", "10px device-height", "50% device-height",
				"device-width 10px", "device-height 10px", "device-width 50%", "device-height 50%"
			],
			"zoom": ["auto", "1.0", "2.0", "0.5", "100%", "200%", "50%"],
			"min-zoom": ["auto", "1.0", "2.0", "0.5", "100%", "200%", "50%"],
			"max-zoom": ["auto", "1.0", "2.0", "0.5", "100%", "200%", "50%"],
			"user-zoom": ["zoom", "fixed"],
			"orientation": ["auto", "portrait", "landscape"]
		},
		"@rules": {
			"@viewport": "@viewport"
		}
	},
	
	"css4-images": {
		"title": "Image Values and Replaced Content Level 4",
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image-source",
				"cursor",
				"content"
			],
			"image()": [
				"image(ltr url(foo.png))", "image(rtl 'foo.png')", "image(ltr 'arrow.png')",
				"image(rtl url(arrow.png) 'foo.png')",
				"image(ltr 'wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image(rtl 'dark.png', black)", "image(ltr green)"
			],
			"image-set()": [
				"image-set(url(foo.png) 600dpi)", "image-set('foo.png' 600dpcm)",
				"image-set(linear-gradient(white, black) 600dppx)", "image-set(radial-gradient(white, black) 1x)",
				"image-set(url(foo.png) 600dpi, 'foo.png' 600dpcm)",
				"image-set(\"foo.png\" 1x, \"foo-2x.png\" 2x, \"foo-print.png\" 600dpi)",
				"image-set(url(foo.png) 600dppx, black)", "image-set(url(foo.png) 1x, 'foo.png' 2x, white)"
			],
			"element()": [
				"element(#src)"
			],
			"cross-fade()": [
				"cross-fade(url(foo.png))", "cross-fade(10% linear-gradient(white, black))",
				"cross-fade(url(foo.png), linear-gradient(white, black))",
				"cross-fade(0% url(foo.png), url(arrow.png))",
				"cross-fade(url(foo.png), black)", "cross-fade(50% url(foo.png), black)",
				"cross-fade(url(foo.png), linear-gradient(white, black), white)",
				"cross-fade(100% url(foo.png), url(arrow.png), white)"
			],
			"linear-gradient()": [
				"linear-gradient(white black, black)",
				"linear-gradient(10px white, black)",
				"linear-gradient(10% white, black)",
				"linear-gradient(white black 10px, black)",
				"linear-gradient(white black 10%, black)",
				"linear-gradient(white 10px black, black)",
				"linear-gradient(white 10% black, black)",
				"linear-gradient(white 10px 10px, black)",
				"linear-gradient(white 10% 20%, black)",
				"linear-gradient(white 10px 20%, black)",
				"linear-gradient(white 10% 10px, black)",
				"linear-gradient(black 10px white, black)",
				"linear-gradient(black 10% white, black)",
				"linear-gradient(10px black white, black)",
				"linear-gradient(10% black white, black)",
				"linear-gradient(10px 10px white, black)",
				"linear-gradient(10% 20% white, black)",
				"linear-gradient(10px 20% white, black)",
				"linear-gradient(10% 10px white, black)",
				"linear-gradient(white black 10px 10px, black)",
				"linear-gradient(white black 10% 20%, black)",
				"linear-gradient(white black 10px 20%, black)",
				"linear-gradient(white black 10% 10px, black)",
				"linear-gradient(white 10px 10px black, black)",
				"linear-gradient(white 10% 20% black, black)",
				"linear-gradient(white 10px 20% black, black)",
				"linear-gradient(white 10% 10px black, black)",
				"linear-gradient(black 10px 10px white, black)",
				"linear-gradient(black 10% 20% white, black)",
				"linear-gradient(black 10px 20% white, black)",
				"linear-gradient(black 10% 10px white, black)",
				"linear-gradient(10px 10px black white, black)",
				"linear-gradient(10% 20% black white, black)",
				"linear-gradient(10px 20% black white, black)",
				"linear-gradient(10% 10px black white, black)",
				"linear-gradient(10% 10px black white, white black 10px 10px)",
				"linear-gradient(-10deg, white black 10% 20%, black)",
				"linear-gradient(200grad, white, white black 10px 20%)",
				"linear-gradient(1rad, white black 10% 10px, white 10px 10px black)",
				"linear-gradient(1turn, white black 10px, 10% 10px white)",
				"linear-gradient(to left, white black, black)",
				"linear-gradient(to right, white, 10px white)",
				"linear-gradient(to top, white black 10%, white 10px black)",
				"linear-gradient(to bottom, white black 10px 10px, 10% 10px black white)",
				"linear-gradient(to left top, white black, black)",
				"linear-gradient(to left bottom, white, 10px white)",
				"linear-gradient(to right top, white black 10%, white 10px black)",
				"linear-gradient(to right bottom, white black 10px 10px, 10% 10px black white)",
				"linear-gradient(to top left, white black, black)",
				"linear-gradient(to top right, white, 10px white)",
				"linear-gradient(to bottom left, white black 10%, white 10px black)",
				"linear-gradient(to bottom right, white black 10px 10px, 10% 10px black white)",
				"linear-gradient(-270deg, white, white black, white black 10px, white black 10px 10px)",
				"linear-gradient(to bottom right, currentColor rgba(255, 0, 255, 0.3),  transparent hsla(225, 50%, 100%, 0.7) 75%, 10px 10px black white)"
			],
			"radial-gradient()": [
				"radial-gradient(white black, black)",
				"radial-gradient(10px white, black)",
				"radial-gradient(10% white, black)",
				"radial-gradient(white black 10px, black)",
				"radial-gradient(white black 10%, black)",
				"radial-gradient(white 10px black, black)",
				"radial-gradient(white 10% black, black)",
				"radial-gradient(white 10px 10px, black)",
				"radial-gradient(white 10% 20%, black)",
				"radial-gradient(white 10px 20%, black)",
				"radial-gradient(white 10% 10px, black)",
				"radial-gradient(black 10px white, black)",
				"radial-gradient(black 10% white, black)",
				"radial-gradient(10px black white, black)",
				"radial-gradient(10% black white, black)",
				"radial-gradient(10px 10px white, black)",
				"radial-gradient(10% 20% white, black)",
				"radial-gradient(10px 20% white, black)",
				"radial-gradient(10% 10px white, black)",
				"radial-gradient(white black 10px 10px, black)",
				"radial-gradient(white black 10% 20%, black)",
				"radial-gradient(white black 10px 20%, black)",
				"radial-gradient(white black 10% 10px, black)",
				"radial-gradient(white 10px 10px black, black)",
				"radial-gradient(white 10% 20% black, black)",
				"radial-gradient(white 10px 20% black, black)",
				"radial-gradient(white 10% 10px black, black)",
				"radial-gradient(black 10px 10px white, black)",
				"radial-gradient(black 10% 20% white, black)",
				"radial-gradient(black 10px 20% white, black)",
				"radial-gradient(black 10% 10px white, black)",
				"radial-gradient(10px 10px black white, black)",
				"radial-gradient(10% 20% black white, black)",
				"radial-gradient(10px 20% black white, black)",
				"radial-gradient(10% 10px black white, black)",
				"radial-gradient(10% 10px black white, white black 10px 10px)",
				"radial-gradient(circle, white black, black)",
				"radial-gradient(10px, white, 10px white)",
				"radial-gradient(circle 10em, 10% white, white black 10px)",
				"radial-gradient(100px circle, white black 10%, black)",
				"radial-gradient(ellipse, white, white 10px black)",
				"radial-gradient(10px 10%, white 10% black, white 10px 10px)",
				"radial-gradient(ellipse 10% 20%, white 10% 20%, black)",
				"radial-gradient(10em 100px ellipse, white, white 10px 20%)",
				"radial-gradient(closest-corner, white 10% 10px, black 10px white)",
				"radial-gradient(closest-side, black 10% white, black)",
				"radial-gradient(farthest-corner, white, 10px black white)",
				"radial-gradient(farthest-side, 10% black white, 10px 10px white)",
				"radial-gradient(circle closest-corner, 10% 20% white, black)",
				"radial-gradient(closest-side ellipse, white, 10px 20% white)",
				"radial-gradient(at center, 10% 10px white, white black 10px 10px)",
				"radial-gradient(circle at left, white black 10% 20%, black)",
				"radial-gradient(ellipse at right, white, white black 10px 20%)",
				"radial-gradient(closest-corner at top, white black 10% 10px, white black 10px 20%)",
				"radial-gradient(closest-side at bottom, white black 10% 10px, black)",
				"radial-gradient(farthest-corner at 10%, white, white 10px 10px black)",
				"radial-gradient(farthest-side at 10px, white 10% 20% black, white 10px 20% black)",
				"radial-gradient(10px at left top, white 10% 10px black, black)",
				"radial-gradient(circle 10em at center 10%, white, black 10px 10px white)",
				"radial-gradient(100px circle at 10px bottom, black 10% 20% white, black 10px 20% white)",
				"radial-gradient(10px 10% at right center, black 10% 10px white, black)",
				"radial-gradient(ellipse 10% 20% at 10% 10%, white, 10px 10px black white)",
				"radial-gradient(10em 100px ellipse at 10px 10px, 10% 20% black white, 10px 20% black white)",
				"radial-gradient(circle closest-corner at 10% 10px, 10% 10px black white, black)",
				"radial-gradient(closest-side ellipse at 10px 10%, white, white black)",
				"radial-gradient(at bottom left, 10px white, 10% white)",
				"radial-gradient(at center top 50%, white black 10px, black)",
				"radial-gradient(at right 50px center, white, white black 10%)",
				"radial-gradient(at left 10px top 10%, white 10px black, white 10% black)",
				"radial-gradient(at bottom 50% right 50%, white 10px 10px, black)",
				"radial-gradient(10% 100px ellipse at top 10% right 10px, white, white black, white black 10px, white black 10px 10px)",
				"radial-gradient(ellipse 10% 20% at top 30% left 40%, white, currentColor #0000FF, rgba(255, 255, 0, 0.5) hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow transparent 100% 10px)"
			],
			"conic-gradient()": [
				"conic-gradient(white, black)",
				"conic-gradient(white black, black)",
				"conic-gradient(white 0deg, black)",
				"conic-gradient(white 10%, black)",
				"conic-gradient(10grad white, black)",
				"conic-gradient(10% white, black)",
				"conic-gradient(white black 1rad, black)",
				"conic-gradient(white black 10%, black)",
				"conic-gradient(white 1turn black, black)",
				"conic-gradient(white 10% black, black)",
				"conic-gradient(white 0deg 10deg, black)",
				"conic-gradient(white 10% 20%, black)",
				"conic-gradient(white 0deg 20%, black)",
				"conic-gradient(white 10% 10deg, black)",
				"conic-gradient(black 1rad white, black)",
				"conic-gradient(black 10% white, black)",
				"conic-gradient(1turn black white, black)",
				"conic-gradient(10% black white, black)",
				"conic-gradient(0deg 10deg white, black)",
				"conic-gradient(10% 20% white, black)",
				"conic-gradient(0deg 20% white, black)",
				"conic-gradient(10% 10deg white, black)",
				"conic-gradient(white black 0deg 10deg, black)",
				"conic-gradient(white black 10% 20%, black)",
				"conic-gradient(white black 0deg 20%, black)",
				"conic-gradient(white black 10% 10deg, black)",
				"conic-gradient(white 0deg 10deg black, black)",
				"conic-gradient(white 10% 20% black, black)",
				"conic-gradient(white 0deg 20% black, black)",
				"conic-gradient(white 10% 10deg black, black)",
				"conic-gradient(black 0deg 10deg white, black)",
				"conic-gradient(black 10% 20% white, black)",
				"conic-gradient(black 0deg 20% white, black)",
				"conic-gradient(black 10% 10deg white, black)",
				"conic-gradient(0deg 10deg black white, black)",
				"conic-gradient(10% 20% black white, black)",
				"conic-gradient(0deg 20% black white, black)",
				"conic-gradient(10% 10deg black white, black)",
				"conic-gradient(red -50%, yellow 150% white)",
				"conic-gradient(white black 0deg 10deg, 10% 10deg black white)",
				"conic-gradient(red, blue, yellow)",
				"conic-gradient(at center, white, black)",
				"conic-gradient(at left, white, black)",
				"conic-gradient(at right, white, black)",
				"conic-gradient(at top, white, black)",
				"conic-gradient(at bottom, white, black)",
				"conic-gradient(at 10%, white, black)",
				"conic-gradient(at 10px, white, black)",
				"conic-gradient(at left top, white, black)",
				"conic-gradient(at center 10%, white, black)",
				"conic-gradient(at 10px bottom, white, black)",
				"conic-gradient(at right center, white, black)",
				"conic-gradient(at 10% 10%, white, black)",
				"conic-gradient(at 10px 10px, white, black)",
				"conic-gradient(at 10% 10px, white, black)",
				"conic-gradient(at 10px 10%, white, black)",
				"conic-gradient(at bottom left, white, black)",
				"conic-gradient(at center top 50%, white, black)",
				"conic-gradient(at right 50px center, white, black)",
				"conic-gradient(at left 10px top 10%, white, black)",
				"conic-gradient(at bottom 50% right 50%, white, black)",
				"conic-gradient(at top 10% right 10px, white 10%, black 0deg, red 50%)",
				"conic-gradient(at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)",
				"conic-gradient(at bottom 50% right 50%, white black 0deg 10deg, 10% 10grad black white, white 10% 10rad black, black 0turn 20% white)"
			],
			"repeating-linear-gradient()": [
				"repeating-linear-gradient(white black, black)",
				"repeating-linear-gradient(10px white, black)",
				"repeating-linear-gradient(10% white, black)",
				"repeating-linear-gradient(white black 10px, black)",
				"repeating-linear-gradient(white black 10%, black)",
				"repeating-linear-gradient(white 10px black, black)",
				"repeating-linear-gradient(white 10% black, black)",
				"repeating-linear-gradient(white 10px 10px, black)",
				"repeating-linear-gradient(white 10% 20%, black)",
				"repeating-linear-gradient(white 10px 20%, black)",
				"repeating-linear-gradient(white 10% 10px, black)",
				"repeating-linear-gradient(black 10px white, black)",
				"repeating-linear-gradient(black 10% white, black)",
				"repeating-linear-gradient(10px black white, black)",
				"repeating-linear-gradient(10% black white, black)",
				"repeating-linear-gradient(10px 10px white, black)",
				"repeating-linear-gradient(10% 20% white, black)",
				"repeating-linear-gradient(10px 20% white, black)",
				"repeating-linear-gradient(10% 10px white, black)",
				"repeating-linear-gradient(white black 10px 10px, black)",
				"repeating-linear-gradient(white black 10% 20%, black)",
				"repeating-linear-gradient(white black 10px 20%, black)",
				"repeating-linear-gradient(white black 10% 10px, black)",
				"repeating-linear-gradient(white 10px 10px black, black)",
				"repeating-linear-gradient(white 10% 20% black, black)",
				"repeating-linear-gradient(white 10px 20% black, black)",
				"repeating-linear-gradient(white 10% 10px black, black)",
				"repeating-linear-gradient(black 10px 10px white, black)",
				"repeating-linear-gradient(black 10% 20% white, black)",
				"repeating-linear-gradient(black 10px 20% white, black)",
				"repeating-linear-gradient(black 10% 10px white, black)",
				"repeating-linear-gradient(10px 10px black white, black)",
				"repeating-linear-gradient(10% 20% black white, black)",
				"repeating-linear-gradient(10px 20% black white, black)",
				"repeating-linear-gradient(10% 10px black white, black)",
				"repeating-linear-gradient(10% 10px black white, white black 10px 10px)",
				"repeating-linear-gradient(-10deg, white black 10% 20%, black)",
				"repeating-linear-gradient(200grad, white, white black 10px 20%)",
				"repeating-linear-gradient(1rad, white black 10% 10px, white 10px 10px black)",
				"repeating-linear-gradient(1turn, white black 10px, 10% 10px white)",
				"repeating-linear-gradient(to left, white black, black)",
				"repeating-linear-gradient(to right, white, 10px white)",
				"repeating-linear-gradient(to top, white black 10%, white 10px black)",
				"repeating-linear-gradient(to bottom, white black 10px 10px, 10% 10px black white)",
				"repeating-linear-gradient(to left top, white black, black)",
				"repeating-linear-gradient(to left bottom, white, 10px white)",
				"repeating-linear-gradient(to right top, white black 10%, white 10px black)",
				"repeating-linear-gradient(to right bottom, white black 10px 10px, 10% 10px black white)",
				"repeating-linear-gradient(to top left, white black, black)",
				"repeating-linear-gradient(to top right, white, 10px white)",
				"repeating-linear-gradient(to bottom left, white black 10%, white 10px black)",
				"repeating-linear-gradient(to bottom right, white black 10px 10px, 10% 10px black white)",
				"repeating-linear-gradient(-270deg, white, white black, white black 10px, white black 10px 10px)",
				"repeating-linear-gradient(to bottom right, currentColor rgba(255, 0, 255, 0.3),  transparent hsla(225, 50%, 100%, 0.7) 75%, 10px 10px black white)"
			],
			"repeating-radial-gradient()": [
				"repeating-radial-gradient(white black, black)",
				"repeating-radial-gradient(10px white, black)",
				"repeating-radial-gradient(10% white, black)",
				"repeating-radial-gradient(white black 10px, black)",
				"repeating-radial-gradient(white black 10%, black)",
				"repeating-radial-gradient(white 10px black, black)",
				"repeating-radial-gradient(white 10% black, black)",
				"repeating-radial-gradient(white 10px 10px, black)",
				"repeating-radial-gradient(white 10% 20%, black)",
				"repeating-radial-gradient(white 10px 20%, black)",
				"repeating-radial-gradient(white 10% 10px, black)",
				"repeating-radial-gradient(black 10px white, black)",
				"repeating-radial-gradient(black 10% white, black)",
				"repeating-radial-gradient(10px black white, black)",
				"repeating-radial-gradient(10% black white, black)",
				"repeating-radial-gradient(10px 10px white, black)",
				"repeating-radial-gradient(10% 20% white, black)",
				"repeating-radial-gradient(10px 20% white, black)",
				"repeating-radial-gradient(10% 10px white, black)",
				"repeating-radial-gradient(white black 10px 10px, black)",
				"repeating-radial-gradient(white black 10% 20%, black)",
				"repeating-radial-gradient(white black 10px 20%, black)",
				"repeating-radial-gradient(white black 10% 10px, black)",
				"repeating-radial-gradient(white 10px 10px black, black)",
				"repeating-radial-gradient(white 10% 20% black, black)",
				"repeating-radial-gradient(white 10px 20% black, black)",
				"repeating-radial-gradient(white 10% 10px black, black)",
				"repeating-radial-gradient(black 10px 10px white, black)",
				"repeating-radial-gradient(black 10% 20% white, black)",
				"repeating-radial-gradient(black 10px 20% white, black)",
				"repeating-radial-gradient(black 10% 10px white, black)",
				"repeating-radial-gradient(10px 10px black white, black)",
				"repeating-radial-gradient(10% 20% black white, black)",
				"repeating-radial-gradient(10px 20% black white, black)",
				"repeating-radial-gradient(10% 10px black white, black)",
				"repeating-radial-gradient(10% 10px black white, white black 10px 10px)",
				"repeating-radial-gradient(circle, white black, black)",
				"repeating-radial-gradient(10px, white, 10px white)",
				"repeating-radial-gradient(circle 10em, 10% white, white black 10px)",
				"repeating-radial-gradient(100px circle, white black 10%, black)",
				"repeating-radial-gradient(ellipse, white, white 10px black)",
				"repeating-radial-gradient(10px 10%, white 10% black, white 10px 10px)",
				"repeating-radial-gradient(ellipse 10% 20%, white 10% 20%, black)",
				"repeating-radial-gradient(10em 100px ellipse, white, white 10px 20%)",
				"repeating-radial-gradient(closest-corner, white 10% 10px, black 10px white)",
				"repeating-radial-gradient(closest-side, black 10% white, black)",
				"repeating-radial-gradient(farthest-corner, white, 10px black white)",
				"repeating-radial-gradient(farthest-side, 10% black white, 10px 10px white)",
				"repeating-radial-gradient(circle closest-corner, 10% 20% white, black)",
				"repeating-radial-gradient(closest-side ellipse, white, 10px 20% white)",
				"repeating-radial-gradient(at center, 10% 10px white, white black 10px 10px)",
				"repeating-radial-gradient(circle at left, white black 10% 20%, black)",
				"repeating-radial-gradient(ellipse at right, white, white black 10px 20%)",
				"repeating-radial-gradient(closest-corner at top, white black 10% 10px, white black 10px 20%)",
				"repeating-radial-gradient(closest-side at bottom, white black 10% 10px, black)",
				"repeating-radial-gradient(farthest-corner at 10%, white, white 10px 10px black)",
				"repeating-radial-gradient(farthest-side at 10px, white 10% 20% black, white 10px 20% black)",
				"repeating-radial-gradient(10px at left top, white 10% 10px black, black)",
				"repeating-radial-gradient(circle 10em at center 10%, white, black 10px 10px white)",
				"repeating-radial-gradient(100px circle at 10px bottom, black 10% 20% white, black 10px 20% white)",
				"repeating-radial-gradient(10px 10% at right center, black 10% 10px white, black)",
				"repeating-radial-gradient(ellipse 10% 20% at 10% 10%, white, 10px 10px black white)",
				"repeating-radial-gradient(10em 100px ellipse at 10px 10px, 10% 20% black white, 10px 20% black white)",
				"repeating-radial-gradient(circle closest-corner at 10% 10px, 10% 10px black white, black)",
				"repeating-radial-gradient(closest-side ellipse at 10px 10%, white, white black)",
				"repeating-radial-gradient(at bottom left, 10px white, 10% white)",
				"repeating-radial-gradient(at center top 50%, white black 10px, black)",
				"repeating-radial-gradient(at right 50px center, white, white black 10%)",
				"repeating-radial-gradient(at left 10px top 10%, white 10px black, white 10% black)",
				"repeating-radial-gradient(at bottom 50% right 50%, white 10px 10px, black)",
				"repeating-radial-gradient(10% 100px ellipse at top 10% right 10px, white, white black, white black 10px, white black 10px 10px)",
				"repeating-radial-gradient(ellipse 10% 20% at top 30% left 40%, white, currentColor #0000FF, rgba(255, 255, 0, 0.5) hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow transparent 100% 10px)"
			],
			"repeating-conic-gradient()": [
				"repeating-conic-gradient(white, black)",
				"repeating-conic-gradient(white black, black)",
				"repeating-conic-gradient(white 0deg, black)",
				"repeating-conic-gradient(white 10%, black)",
				"repeating-conic-gradient(black white, black)",
				"repeating-conic-gradient(10grad white, black)",
				"repeating-conic-gradient(10% white, black)",
				"repeating-conic-gradient(white black 1rad, black)",
				"repeating-conic-gradient(white black 10%, black)",
				"repeating-conic-gradient(white 1turn black, black)",
				"repeating-conic-gradient(white 10% black, black)",
				"repeating-conic-gradient(white 0deg 10deg, black)",
				"repeating-conic-gradient(white 10% 20%, black)",
				"repeating-conic-gradient(white 0deg 20%, black)",
				"repeating-conic-gradient(white 10% 10deg, black)",
				"repeating-conic-gradient(black 1rad white, black)",
				"repeating-conic-gradient(black 10% white, black)",
				"repeating-conic-gradient(1turn black white, black)",
				"repeating-conic-gradient(10% black white, black)",
				"repeating-conic-gradient(0deg 10deg white, black)",
				"repeating-conic-gradient(10% 20% white, black)",
				"repeating-conic-gradient(0deg 20% white, black)",
				"repeating-conic-gradient(10% 10deg white, black)",
				"repeating-conic-gradient(white black 0deg 10deg, black)",
				"repeating-conic-gradient(white black 10% 20%, black)",
				"repeating-conic-gradient(white black 0deg 20%, black)",
				"repeating-conic-gradient(white black 10% 10deg, black)",
				"repeating-conic-gradient(white 0deg 10deg black, black)",
				"repeating-conic-gradient(white 10% 20% black, black)",
				"repeating-conic-gradient(white 0deg 20% black, black)",
				"repeating-conic-gradient(white 10% 10deg black, black)",
				"repeating-conic-gradient(black 0deg 10deg white, black)",
				"repeating-conic-gradient(black 10% 20% white, black)",
				"repeating-conic-gradient(black 0deg 20% white, black)",
				"repeating-conic-gradient(black 10% 10deg white, black)",
				"repeating-conic-gradient(0deg 10deg black white, black)",
				"repeating-conic-gradient(10% 20% black white, black)",
				"repeating-conic-gradient(0deg 20% black white, black)",
				"repeating-conic-gradient(10% 10deg black white, black)",
				"repeating-conic-gradient(red -50%, yellow 150% white)",
				"repeating-conic-gradient(white black 0deg 10deg, 10% 10deg black white)",
				"repeating-conic-gradient(red, blue, yellow)",
				"repeating-conic-gradient(at center, white, black)",
				"repeating-conic-gradient(at left, white, black)",
				"repeating-conic-gradient(at right, white, black)",
				"repeating-conic-gradient(at top, white, black)",
				"repeating-conic-gradient(at bottom, white, black)",
				"repeating-conic-gradient(at 10%, white, black)",
				"repeating-conic-gradient(at 10px, white, black)",
				"repeating-conic-gradient(at left top, white, black)",
				"repeating-conic-gradient(at center 10%, white, black)",
				"repeating-conic-gradient(at 10px bottom, white, black)",
				"repeating-conic-gradient(at right center, white, black)",
				"repeating-conic-gradient(at 10% 10%, white, black)",
				"repeating-conic-gradient(at 10px 10px, white, black)",
				"repeating-conic-gradient(at 10% 10px, white, black)",
				"repeating-conic-gradient(at 10px 10%, white, black)",
				"repeating-conic-gradient(at bottom left, white, black)",
				"repeating-conic-gradient(at center top 50%, white, black)",
				"repeating-conic-gradient(at right 50px center, white, black)",
				"repeating-conic-gradient(at left 10px top 10%, white, black)",
				"repeating-conic-gradient(at bottom 50% right 50%, white, black)",
				"repeating-conic-gradient(at top 10% right 10px, white 10%, black 0deg, red 50%)",
				"repeating-conic-gradient(at top 30% left 40%, currentColor 50%, #0000FF 60%, rgba(255, 255, 0, 0.5) 70%, hsla(240, 100%, 50%, 0.5) 80%, lightgoldenrodyellow 90%, transparent 100%)",
				"repeating-conic-gradient(at bottom 50% right 50%, white black 0deg 10deg, 10% 10grad black white, white 10% 10rad black, black 0turn 20% white)",
				"repeating-conic-gradient(at 20%, white 0deg, white 20deg, red 20deg, red 40deg)"
			],
		},
		"properties": {
			"image-orientation": ["from-image"],
			"image-rendering": ["auto", "crisp-edges", "pixelated"]
		}
	},
	
	"selectors4": {
		"title": "Selectors Level 4",
		"selectors": {
			"!": ["head! > title", "!ol > li", "ul > ol! > li", "!span:only-child a[href^=\"https://\"]"],
			"A /attr/ B": ["label /for/ input"],
			"[att=val i]": ["[class=\"example\" i]", "[frame=hsides i]"],
			":any-link": [":any-link"],
			":local-link": [":local-link"],
			":local-link()": [":local-link(0)", ":local-link(1)", ":not(:local-link(0))"],
			":scope": [":scope", ":scope > .example"],
			":current": [":current"],
			":current()": [":current(div)", ":current(p, li, dt, dd)"],
			":past": [":past"],
			":future": [":future"],
			":active-drop-target": [":active-drop-target"],
			":valid-drop-target": [":valid-drop-target"],
			":invalid-drop-target": [":invalid-drop-target"],
			":user-error": [":user-error"],
			":not()": [":not(div:only-child)", ":not(header, footer)", ":not(header, main, footer)"],
			":matches()": [
				":matches(.example)", ":matches(div:only-child)", ":matches(section, article)",
				":matches(section, article, aside, nav) h1",
				":matches(section, article, aside, nav) :matches(section, article, aside, nav) h1"
			],
			":dir()": [":dir(ltr)", ":dir(rtl)"],
			":lang()": [":lang(de-*)", ":lang(en, ja)", ":lang(zh, *-hant)"],
			":nth-match(an+b of selector-list)": [
				":nth-match(3 of .foo)",
				":nth-match(2n+1 of .foo, #bar)"
			],
			":nth-last-match(an+b of selector-list)": [
				":nth-last-match(1 of #example)",
				":nth-last-match(even of #example > div, .foo)"
			],
			":column()": [":column(.example)"],
			"E || F": ["col.selected || td"],
			":nth-column()": [":nth-column(1)"],
			":nth-last-column()": [":nth-last-column(1)"]
		}
	},
	
	"mediaqueries4": {
		"title": "Media Queries Level 4",
		"Media queries": {
			"script": ["(script)", "not all and (script: 0)", "not all and (script: -0)", "(script: 1)"],
			"floating": ["(pointer)", "(pointer: none)", "(pointer: coarse)", "(pointer: fine)"],
			"hover": ["(hover)", "(hover: 0)", "(hover: -0)", "(hover: 1)"],
			"luminosity": ["(luminosity)", "(luminosity: dim)", "(luminosity: normal)", "(luminosity: washed)"]
		}
	},
	
	"view-mode": {
		"title": "The 'view-mode' Media Feature",
		"tr": "http://www.w3.org/TR/view-mode",
		"dev": "http://dev.w3.org/2006/waf/widgets-vmmf",
		"Media queries": {
			"windowed": ["(view-mode: windowed)"],
			"floating": ["not print and (view-mode: floating)"],
			"fullscreen": ["not print and (view-mode: fullscreen)"],
			"maximized": ["not print and (view-mode: maximized)"],
			"minimized": ["not print and (view-mode: minimized)"]
		}
	},
	
	"becss": {
		"title": "Behavioral Extensions to CSS",
		"tr": "http://www.w3.org/TR/becss",
		"dev": "http://dev.w3.org/2006/xbl2/css-module.html",
		"properties": {
			"binding": [
				"none",
				"url(\"http://example.org/htmlBindings.xml#checkbox\")",
				"url(triangles.xml#isoceles)",
				"url(#rightangle)",
				"url(triangles.xml#isoceles) url(triangles.xml#rightangle)",
				"url(#checkbox) url(#isoceles) url(#rightangle)"
			]
		},
		"selectors": {
			":bound-element": ":bound-element > *"
		}
	},
	
	"webcomponents": {
		"title": "Web Components",
		"tr": "http://www.w3.org/TR/webcomponents",
		"dev": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html",
		"properties": {
			"decorator": ["url(#fade-to-white)"]
		},
		"selectors": {
			":host": ":host"
		}
	},
	
	"shadow-dom": {
		"title": "Shadow DOM",
		"tr": "http://www.w3.org/TR/shadow-dom",
		"dev": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html",
		"selectors": {
			"::distributed()": "::distributed(div)"
		},
		"@rules": {
			"@host": "@host"
		}
	},
	
	"custom-elements": {
		"title": "Custom Elements",
		"tr": "http://www.w3.org/TR/custom-elements",
		"dev": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/custom/index.html",
		"selectors": {
			":unknown": ":unknown"
		}
	}
};
