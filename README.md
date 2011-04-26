Hilite.js
=========

This is still under development and the API unset, but feel free to join in.

Goal
-----

- Be tiny, fast, and accurate, therefore no language detection and stuff.
- Work client or server side

Features
--------

Regex  matching is based on textmate languages, therefore a regex can have
multiple captures (might even be scriptable to convert any .tmLangauge into
a HiliteJS language /shrug).

License
-------

(c) Ryan Florence, MIT Style License

Many thanks to [hijs](https://github.com/cloudhead/hijs) for a few bits of
inspiration.

API
===

Subject to change!  Check out the demo.

You should pretty much just be using CODE tags and CODE tags wrapped in a PRE.

    <code></code>
    <pre><code></code></pre>
    <pre class=solarized_light><code data-language=javascript></code></pre>

## hilite

Adds highlighting to an element.

### signature

`hilite(node, language, lines)`

### arguments

- node (dom element) - the element w/ code to highlight
- language (string) - the language to use, if undefined, will look at the
`data-language` attribute of the element
- lines (boolean) - defaults to false, inserts line numbers if true. If the
tag's parent is a PRE element, this defaults to true.

## hilite.convert

Converts a string of text to a string of text w/ SPAN tags all over the place.
Ideal for SSJS.

### signature

`hilite.convert(text, language)`

### arguments

- text (string) - the text to convert
- language (string) - the language to use

### returns

String, with SPANS all over the place.

## hilite.define

Defines a language

Check out the javascript language in `src/languages` for now, it's pretty basic.
