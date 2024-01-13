[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# widget-styling

Copies selected style rules from parent document to embedded iframe.

## Install

```sh
$ npm install --save widget-styling
```

## Usage

```js
var widgetStyling = require('widget-styling');

widgetStyling(selectors, widget, iframe);
```

## License

MIT © [Natalia Kowalczyk](https://melitele.me)

[npm-image]: https://img.shields.io/npm/v/widget-styling
[npm-url]: https://npmjs.org/package/widget-styling

[build-url]: https://github.com/furkot/widget-styling/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/furkot/widget-styling/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/widget-styling
[deps-url]: https://libraries.io/npm/widget-styling
