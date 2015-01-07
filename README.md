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
Modern browsers and IE9+. If you are not passing a namespace, IE5+ is supported. If you'd like to use custom namespaces in IE8 or lower, you might find [aight](https://github.com/shawnbot/aight) useful.

### Available on NPM & Bower
```js
npm install dom-pool
```

```js
bower install dom-pool
```
