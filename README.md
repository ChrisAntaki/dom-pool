dom-pool
========

Make your browser's life easier

### How to use
```js
var Pool = require('dom-pool');
var divPool = new Pool({
  tagName: 'div',
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
  tagName: 'circle',
});

// Enjoy!

```

### Install with NPM
```js
npm install dom-pool
```

#### Install with Bower
```js
bower install dom-pool
```
