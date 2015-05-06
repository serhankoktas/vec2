# Vec2

A javascript 2d vector library for Node.js and client.

## Installation

### Server

Install as a [node](http://nodejs.org/) module via [npm](https://www.npmjs.com/).

    npm install taksim-vec2 --save

and include in a file;

```js
var Vec2 = require('taksim-vec2');
```

### Client

You can pull down by using [Bower](http://bower.io/)

    bower install taksim-vec2 --save

or just [download](https://raw.githubusercontent.com/taksim-io/vec2/master/dist/taksim-vec2.min.js) the latest minified version and include in your document.

```html
<script type='text/javascript' src='taksim-vec2.min.js'></script>
```

## Usage

### Vec2(x:number, y:number)

Pass x and y to the constructor to create a new instance. If nothing supplied, x and y will be equal to zero.

```js
var a = new Vec2(10, 5);
var b = new Vec2();

a.toString();
=> '(10, 5)'

b.toString();
=> '(0, 0)'
```
### set(vec:vector)

Sets x and y coordinates of `this` vector to the incoming vector's coordinates. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(11, 7);
a.set(b).toString();
=> '(11, 7)'
```

### setX(num:number)

Sets x to the passed number. Returns `this`.

```js
var a = new Vec2(10, 5);
a.setX(11).toString();
=> '(11, 5)'
```

### setY(num:number)

Sets y to the passed number. Returns `this`.

```js
var a = new Vec2(10, 5);
a.setY(7).toString();
=> '(10, 7)'

### reset()

Sets x and y to the initial values. Returns `this`.

```js
var a = new Vec2(10, 5);

a.setX(11).setY(7).toString();
=> '(11, 7)'

a.reset().toString();
=> '(10, 5)'
```

### resetX()

Sets x to its initial value. Returns `this`.

```js
var a = new Vec2(10, 5);

a.setX(11).toString();
=> '(11, 5)'

a.resetX().toString();
=> '(10, 5)'
```

### resetY()

Sets y to its initial value. Returns `this`.

```js
var a = new Vec2(10, 5);

a.setY(7).toString();
=> '(10, 7)'

a.resetY().toString();
=> '(10, 5)'
```

### zero()

Sets x and y to 0. Returns `this`.

```js
var a = new Vec2(10, 5);
a.zero().toString();
=> '(0, 0)'
```

### add(vec:vector)

Adds x and y coordinates of the incoming vector to `this` vector's coordinates. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(1, 2);
a.add(b).toString();
=> '(11, 7)'
```

### addX(num:number)

Adds the passed number to `this` vector's x coordinate. Returns `this`.

```js
var a = new Vec2(10, 5);
a.addX(1).toString();
=> '(11, 5)'
```

### addY(num:number)

Adds the passed number to `this` vector's y coordinate. Returns `this`.

```js
var a = new Vec2(10, 5);
a.addY(2).toString();
=> '(10, 7)'
```

### subtract(vec:vector)

Subtracts x and y coordinates of the incoming vector from `this` vector's coordinates. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(1, 2);
a.subtract(b).toString();
=> '(9, 3)'
```

### subtractX(num:number)

Subtracts the passed number from `this` vector's x coordinate. Returns `this`.

```js
var a = new Vec2(10, 5);
a.subtractX(1).toString();
=> '(9, 5)'
```

### subtractY(num:number)

Subtracts the passed number from `this` vector's y coordinate. Returns `this`.

```js
var a = new Vec2(10, 5);
a.subtractY(2).toString();
=> '(10, 3)'
```

### multiply(vec:vector)

Multiplies x and y coordinates of `this` vector with the incoming vector's coordinates. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(1, 3);
a.multiply(b).toString();
=> '(10, 15)'
```

### multiplyX(num:number)

Multiplies x coordinate of `this` vector with the passed number. Returns `this`.

```js
var a = new Vec2(10, 5);
a.multiplyX(3).toString();
=> '(30, 5)'
```

### multiplyY(num:number)

Multiplies y coordinate of `this` vector with the passed number. Returns `this`.

```js
var a = new Vec2(10, 5);
a.multiplyY(3).toString();
=> '(10, 15)'
```

### divide(vec:vector)

Divides x and y coordinates of `this` vector by the incoming vector's coordinates. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(1, 2);
a.divide(b).toString();
=> '(10, 2.5)'
```

### divideX(num:number)

Divides x coordinate of `this` vector by the passed number. Returns `this`.

```js
var a = new Vec2(10, 5);
a.divideX(2).toString();
=> '(5, 5)'
```

### divideY(num:number)

Divides y coordinate of `this` vector by the passed number. Returns `this`.

```js
var a = new Vec2(10, 5);
a.divideY(2).toString();
=> '(10, 2.5)'
```

### round()

Applies Math.round to x and y. Returns `this`.

```js
var a = new Vec2(10.8, 5.2);
a.round().toString();
=> '(11, 5)'
```

### roundX()

Applies Math.round to x. Returns `this`.

```js
var a = new Vec2(10.8, 5.2);
a.roundX().toString();
=> '(11, 5.2)'
```

### roundY()

Applies Math.round to y. Returns `this`.

```js
var a = new Vec2(10.8, 5.2);
a.roundY().toString();
=> '(10.8, 5)'
```

### invert()

Multiplies x and y with -1. Returns `this`.

```js
var a = new Vec2(10, 5);
a.invert().toString();
=> '(-10, -5)'
```

### invertX()

Multiplies x with -1. Returns `this`.

```js
var a = new Vec2(10, 5);
a.invertX().toString();
=> '(-10, 5)'
```

### invertY()

Multiplies y with -1. Returns `this`.

```js
var a = new Vec2(10, 5);
a.invertY().toString();
=> '(10, -5)'
```

### rotateTo(deg:number)

Rotates `this` vector to supplied angle in degrees (CCW from +X axis). Returns `this`.

```js
var a = new Vec2(10, 5);
a.rotateTo(180).toString();
=> '(-10, -5)'
```

### rotateAdd(deg:number)

Adds supplied angle in degrees to `this` vector (CCW from +X axis). Returns `this`.

```js
var a = new Vec2(100, 100);
a.rotateAdd(45).toString();
=> '(-100, 100)'
```

### normalize(deg:number)

Makes the length of `this` vector `1` while keeping its direction same. Returns `this`.

```js
var a = new Vec2(10, 5);
a.normalize().toString();
=> '(0.8944271909999159, 0.4472135954999579)'
```

### min(vec:vector)

Compares two vectors and sets `this` vector's coordinates to lowest x and y. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(11, 3);
a.min(b).toString();
=> '(10, 3)'
```

### minX(num:number)

Sets x coordinate to the lowest of supplied number and x. Returns `this`.

```js
var a = new Vec2(10, 5);

a.minX(9).toString();
=> '(9, 5)'

a.minX(10).toString();
=> '(9, 5)'
```

### minY(num:number)

Sets y coordinate to the lowest of supplied number and y. Returns `this`.

```js
var a = new Vec2(10, 5);

a.minY(3).toString();
=> '(10, 3)'

a.minY(5).toString();
=> '(10, 3)'
```

### max(vec:vector)

Compares two vectors and sets `this` vector's coordinates to greatest x and y. Returns `this`.

```js
var a = new Vec2(10, 5);
var b = new Vec2(11, 3);
a.max(b).toString();
=> '(11, 5)'
```

### maxX(num:number)

Sets x coordinate to the greatest of supplied number and x. Returns `this`.

```js
var a = new Vec2(10, 5);

a.maxX(11).toString();
=> '(11, 5)'

a.maxX(10).toString();
=> '(11, 5)'
```

### maxY(num:number)

Sets y coordinate to the greatest of supplied number and y. Returns `this`.

```js
var a = new Vec2(10, 5);

a.maxY(7).toString();
=> '(10, 7)'

a.maxY(5).toString();
=> '(10, 7)'
```

### limit(upperBound:vector, lowerBound:vector)

Limits the coordinates with a bounding rectangle. After invoking this method, the resulting x and y of all other methods won't exceed the bounding rectangle. Returns `this`.

```js
var a = new Vec2(10, 5);
var lowerBound = new Vec2(9, 2);
var upperBound = new Vec2(2, 4);
a.limit(lowerBound, upperBound).toString();
=> '(9, 4)'

// x and y are now limited with lower and upper boundaries.
a.addX(10).addY(10).toString();
=> '(9, 4)'

a.max(10).minY(1).toString();
=> '(9, 2)'
```

### bound(upperBound:vector, lowerBound:vector)

Alias of `limit`

### unlimit()

Frees the coordinates from bounding rectangle. Returns `this`.

```js
var a = new Vec2(10, 5);
var lowerBound = new Vec2(9, 2);
var upperBound = new Vec2(2, 4);
a.limit(lowerBound, upperBound).toString();
=> '(9, 4)'

a.unlimit().addX(10).addY(10).toString();
=> '(19, 14)'
```

### unbound()

Alias of `unlimit`

### random()

Randomizes x and y within the bounding rectangle. If there is no bounding rectangle created with `limit` method, the coordinates is kept same. Returns `this`.

```js
var a = new Vec2(10, 5);
var lowerBound = new Vec2(9, 2);
var upperBound = new Vec2(2, 4);

// Coordinates remain same here
a.random().toString();
=> '(10, 5)'

// After limiting the vector, you can use random method
a.limit(lowerBound, upperBound).random().toString();
=> '(6, 3)'
```

### randomX()

Randomizes x within the bounding rectangle. Returns `this`.

```js
var a = new Vec2(10, 5);
var lowerBound = new Vec2(9, 2);
var upperBound = new Vec2(2, 4);

// Coordinates remain same here
a.randomX().toString();
=> '(10, 5)'

// After limiting the vector, you can use random method
a.limit(lowerBound, upperBound).randomX().toString();
=> '(6, 5)'
```

### randomY()

Randomizes y within the bounding rectangle. Returns `this`.

```js
var a = new Vec2(10, 5);
var lowerBound = new Vec2(9, 2);
var upperBound = new Vec2(2, 4);

// Coordinates remain same here
a.randomY().toString();
=> '(10, 5)'

// After limiting the vector, you can use random method
a.limit(lowerBound, upperBound).randomY().toString();
=> '(10, 3)'
```

### dot()

Returns dot product of two vectors.

```js
var a = new Vec2(10, 5);
var a = new Vec2(11, 7);
a.dot(b);
=> 145
```

### cross()

Returns cross product of two vectors.

```js
var a = new Vec2(10, 5);
var a = new Vec2(11, 7);
a.dot(b);
=> 15
```

### length()

Returns length/magnitude.

```js
var a = new Vec2(3, 4);
a.length();
=> 5
```

### angle()

Returns angle in degrees with respect to +X axis.

```js
var a = new Vec2(3, 4);
a.angle();
=> 53.13010235415598
```

### distance(vec:vector)

Returns distance between two vectors.

```js
var a = new Vec2(10, 5);
var b = new Vec2(11, 7);
a.distance(b);
=> 2.23606797749979
```

### clone()

Returns a new instance of Vec2 with `this` vector's coordinates.

```js
var a = new Vec2(10, 5);

a.clone().addX(1).toString();
=> '(11, 5)'

a.toString();
=> '(10, 5)'
```

### isEqual(vec:vector)

Returns true if two vectors coordinates are same.

```js
var a = new Vec2(10, 5);
var b = new Vec2(10, 5);
a.isEqual(b);
=> true

a.toString();
=> '(10, 5)'
```

### toString()

Returns string representation of the coordinates.

```js
var a = new Vec2(10, 5);
a.toString();
=> '(10, 5)'
```

### toString()

Returns array representation of the coordinates.

```js
var a = new Vec2(10, 5);
a.toArray();
=> [10, 5]
```

## License

MIT Copyright (c) 2015 taksim.io