dom-pool
========

Make your browser's life easier

### How to use
```js
// Grab the library from NPM, Bower, or GitHub.
var Pool = require('dom-pool');

// Create a new Pool for a specific DOM tagName, like "div".
var divPool = new Pool({
  tagName: 'div'
});

// Pools have an Array-like syntax: "pop" & "push".
var div = divPool.pop();

// ... here's where you can imagine doing awesome stuff to the DIV...

// Once you're done with the DIV, return it to the Pool with "push".
divPool.push(div);

// There's now 1 DIV ready to deploy.

// To create DIVs ahead of time, use the "allocate" method.
divPool.allocate(100);

// There are now 100 DIVs ready to deploy.
```

### Custom namespaces
```js
// SVG is also supported!
// SVG has its own namespace which we need to specify.
var circlePool = new Pool({
  namespace: 'http://www.w3.org/2000/svg',
  tagName: 'circle'
});

// Imagine what we can do with all these circles. ;)
circlePool.allocate(128);
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
