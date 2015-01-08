dom-pool
========

Make your browser's life easier

### How to use
```js
var Pool = require('dom-pool');
var divPool = new Pool({
  tagName: 'div'
});

// Get a div
var div = divPool.pop();

// Give back a div
divPool.push(div);

// Allocate 100 divs
divPool.allocate(100);

// Get your SVG on
var circlePool = new Pool({
  namespace: 'http://www.w3.org/2000/svg',
  tagName: 'circle'
});

// Enjoy!

```

### What browsers are supported?
Modern browsers and IE9+. Not passing a `namespace` parameter? Then the IE support expands to IE5+. If you'd like to support custom namespaces in IE8, check out [aight](https://github.com/shawnbot/aight).

### Screenshots of dom-pool in use, with Chrome DevTools
(Pay attention to the DOM node count)
![Pooling DOM nodes](//i.imgur.com/gzkbN1X.png)
![Creating DOM nodes](//i.imgur.com/oEJyNO7.png)

### Available on NPM & Bower
```js
npm install dom-pool
```

```js
bower install dom-pool
```
