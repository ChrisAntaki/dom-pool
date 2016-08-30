dom-pool
========

Let your app focus on rendering 60fps. Avoid creating & GC'ing DOM nodes on the fly.

### Installation
```bash
npm install dom-pool --save
```

### Usage
```js
// Grab the library from NPM or Bower.
const Pool = require('dom-pool');

// Create a new Pool for a specific DOM tagName, like "div".
const divPool = new Pool({
  tagName: 'div'
});

// Pools have an Array-like syntax: "pop" & "push".
const div = divPool.pop();

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
const circlePool = new Pool({
  namespace: 'http://www.w3.org/2000/svg',
  tagName: 'circle'
});

// Let's allocate 128 circles.
circlePool.allocate(128);
```

### What performance gains can I expect?
Reusing DOM elements is [2-6 times faster](http://jsperf.com/dom-pool-performance-1) than creating DOM elements.

![Performance](https://i.imgur.com/VaUcUQy.png)

Now is this performance totally free? Not exactly. When you create a DOM element, it's like a blank slate. When you reuse a DOM element, it keeps the attributes you've given it. However, if you're going to be updating those same attributes anyways, it's basically free.

### What browsers are supported?
Modern browsers & IE9+. If you're sticking to HTML nodes then IE5+ is supported. The reason being, IE added support for [createElementNS](http://msdn.microsoft.com/en-us/library/ie/ff975213%28v=vs.85%29.aspx) in version 9.

### Screenshots of dom-pool in use, with Chrome DevTools

Note the DOM node count over time.

![Pooling DOM nodes](https://i.imgur.com/gzkbN1X.png)

![Creating DOM nodes](https://i.imgur.com/oEJyNO7.png)
