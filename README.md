dom-pool
========

Make your browser's life easier

### How to use
```js
// Grab the library from NPM, Bower, or GitHub.
var Pool = require('dom-pool');

// Create a new Pool for a specific DOM tagName.
var divPool = new Pool({
  tagName: 'div'
});

// Pools have an Array-like syntax: "pop" & "push".
// When calling "pop", you'll always get a new DOM node.
var div = divPool.pop();

// Now I'll leave what you can do with a DIV to your imagination ;) ...

// Once you're done with the DIV, return it to the Pool.
// Now it will be saved for the next time you need a DIV.
// This is easier on browsers.
divPool.push(div);

// If you'd like to allocate nodes ahead of time,
// just call the "allocate" method, and pass it a number.
// The Pool will then add nodes to reach the specified number.
divPool.allocate(100);

// There are now 100 nodes ready to deploy.
```

### Custom namespaces
```js
// SVG is also supported!
// Since SVG has a different namespace than HTML,
// we need to specify it.
var circlePool = new Pool({
  namespace: 'http://www.w3.org/2000/svg',
  tagName: 'circle'
});
```

### What browsers are supported?
Modern browsers & IE9+. If you're sticking to HTML nodes, and not passing a namespace parameter IE5+ is supported. The reason being, IE added support for [createElementNS](http://msdn.microsoft.com/en-us/library/ie/ff975213%28v=vs.85%29.aspx) in version 9.

### Screenshots of dom-pool in use, with Chrome DevTools

Note the DOM node count over time.

![Pooling DOM nodes](https://i.imgur.com/gzkbN1X.png)

![Creating DOM nodes](https://i.imgur.com/oEJyNO7.png)

### Available on NPM & Bower
```js
npm install dom-pool
```

```js
bower install dom-pool
```
