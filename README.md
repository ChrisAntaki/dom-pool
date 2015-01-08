dom-pool
========

Make your browser's life easier

### How to use
```js
// Grab the library from NPM or Bower.
var Pool = require('dom-pool');

// Create a new Pool for a specific DOM tagName, like "div".
var divPool = new Pool({
  tagName: 'div'
});

// Pools have an Array-like syntax: "pop" & "push".
var div = divPool.pop();

// ... let's imagine doing awesome stuff with the DIV ...

// Once you're done with the DIV, return it to the Pool with "push".
divPool.push(div);

// Next time "pop" is called, your app can efficiently reuse the DIV.

// To create DIVs ahead of time, use the "allocate" method.
divPool.allocate(100);

// There are now 100 DIVs ready to use.
```

### Custom namespaces
```js
// SVG is also supported.
// We just need to specify the right namespace.
var circlePool = new Pool({
  namespace: 'http://www.w3.org/2000/svg',
  tagName: 'circle'
});

// Let's allocate 128 circles.
// This way the app can focus on keeping 60fps,
// instead of creating circles on the fly. ;)
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
