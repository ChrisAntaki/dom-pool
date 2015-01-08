dom-pool
========

Let your app focus on rendering 60fps. Avoid creating & GC'ing DOM nodes on the fly.

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
```

### Custom namespaces
```js
// SVG is also supported.
// We just need to specify its namespace.
var circlePool = new Pool({
  namespace: 'http://www.w3.org/2000/svg',
  tagName: 'circle'
});

// Let's allocate 128 circles.
circlePool.allocate(128);
```

### What browsers are supported?
Modern browsers & IE9+. If you're sticking to HTML nodes then IE5+ is supported. The reason being, IE added support for [createElementNS](http://msdn.microsoft.com/en-us/library/ie/ff975213%28v=vs.85%29.aspx) in version 9.

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
