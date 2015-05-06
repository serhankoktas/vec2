var expect = require('chai').expect;
var Vec2 = require('../build');

describe('Vec2', function() {
  it('should create a new instance with supplied coordinates', function() {
    var a = new Vec2(10, 5);
    expect(a).to.be.an.instanceof(Vec2);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
  it('should create a new instance without any parameters', function() {
    var a = new Vec2();
    expect(a).to.be.an.instanceof(Vec2);
    expect(a.x).to.equal(0);
    expect(a.y).to.equal(0);
  });
  it('should handle string parameters', function() {
    var a = new Vec2('10', '5a');
    expect(a).to.be.an.instanceof(Vec2);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

describe('set', function() {
  it('should set this vector to supplied vector', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 7);
    a.set(b);
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(7);
  });
});

describe('setX', function() {
  it('should set x to supplied number', function() {
    var a = new Vec2(10, 5);
    a.setX(11);
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5);
  });
});

describe('setY', function() {
  it('should set y to supplied number', function() {
    var a = new Vec2(10, 5);
    a.setY(7);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(7);
  });
});

describe('reset', function() {
  it('should reset x and y to initial values', function() {
    var a = new Vec2(10, 5);
    a.setX(11).setY(7).reset();
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

describe('resetX', function() {
  it('should reset x to its initial value', function() {
    var a = new Vec2(10, 5);
    a.setX(11).setY(7).resetX();
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(7);
  });
});

describe('resetY', function() {
  it('should reset y to its initial value', function() {
    var a = new Vec2(10, 5);
    a.setX(11).setY(7).resetY();
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5);
  });
});

describe('zero', function() {
  it('should set x and y to 0', function() {
    var a = new Vec2(10, 5);
    a.zero();
    expect(a.x).to.equal(0);
    expect(a.y).to.equal(0);
  });
});

describe('add', function() {
  it('should add supplied vector to this vector', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(1, 2);
    a.add(b);
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(7);
  });
});

describe('addX', function() {
  it('should add supplied number to x', function() {
    var a = new Vec2(10, 5);
    a.addX(1);
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5);
  });
});

describe('addY', function() {
  it('should add supplied number to y', function() {
    var a = new Vec2(10, 5);
    a.addY(2);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(7);
  });
});

describe('subtract', function() {
  it('should subtract supplied vector from this vector', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(1, 2);
    a.subtract(b);
    expect(a.x).to.equal(9);
    expect(a.y).to.equal(3);
  });
});

describe('subtractX', function() {
  it('should subtract supplied number from x', function() {
    var a = new Vec2(10, 5);
    a.subtractX(1);
    expect(a.x).to.equal(9);
    expect(a.y).to.equal(5);
  });
});

describe('subtractY', function() {
  it('should subtract supplied number from y', function() {
    var a = new Vec2(10, 5);
    a.subtractY(2);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(3);
  });
});

describe('multiply', function() {
  it('should multiply this vector with supplied vector', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(1, 3);
    a.multiply(b);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(15);
  });
});

describe('multiplyX', function() {
  it('should multiply x with supplied number', function() {
    var a = new Vec2(10, 5);
    a.multiplyX(3);
    expect(a.x).to.equal(30);
    expect(a.y).to.equal(5);
  });
});

describe('multiplyY', function() {
  it('should multiply y with supplied number', function() {
    var a = new Vec2(10, 5);
    a.multiplyY(3);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(15);
  });
});

describe('divide', function() {
  it('should divide this vector by supplied vector', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(1, 2);
    a.divide(b);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(2.5);
  });
});

describe('divideX', function() {
  it('should divide x by supplied number', function() {
    var a = new Vec2(10, 5);
    a.divideX(2);
    expect(a.x).to.equal(5);
    expect(a.y).to.equal(5);
  });
});

describe('divideY', function() {
  it('should divide y by supplied number', function() {
    var a = new Vec2(10, 5);
    a.divideY(2);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(2.5);
  });
});

describe('round', function() {
  it('should round x and y', function() {
    var a = new Vec2(10.8, 5.2);
    a.round();
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5);
  });
});

describe('roundX', function() {
  it('should round x', function() {
    var a = new Vec2(10.8, 5.2);
    a.roundX();
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5.2);
  });
});

describe('roundY', function() {
  it('should round y', function() {
    var a = new Vec2(10.8, 5.2);
    a.roundY();
    expect(a.x).to.equal(10.8);
    expect(a.y).to.equal(5);
  });
});

describe('invert', function() {
  it('should invert x and y', function() {
    var a = new Vec2(10, -5);
    a.invert();
    expect(a.x).to.equal(-10);
    expect(a.y).to.equal(5);
  });
});

describe('invertX', function() {
  it('should invert x', function() {
    var a = new Vec2(10, -5);
    a.invertX();
    expect(a.x).to.equal(-10);
    expect(a.y).to.equal(-5);
  });
});

describe('invertY', function() {
  it('should invert y', function() {
    var a = new Vec2(10, -5);
    a.invertY();
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

describe('rotateTo', function() {
  it('should rotate the vector to passed angle', function() {
    var a = new Vec2(10, 5);
    a.rotateTo(180);
    expect(a.x).to.equal(-10);
    expect(a.y).to.equal(-4.999999999999999);
  });
});

describe('rotateAdd', function() {
  it('should add supplied angle this vector\'s angle', function() {
    var a = new Vec2(100, 100);
    a.rotateAdd(45);
    expect(a.x).to.equal(-100);
    expect(a.y).to.equal(100);
  });
});

describe('normalize', function() {
  it('should normalize the vector', function() {
    var a = new Vec2(10, 5);
    var angle = a.angle();
    a.normalize();
    expect(a.x).to.equal(0.8944271909999159);
    expect(a.y).to.equal(0.4472135954999579);
    expect(a.length()).to.equal(0.9999999999999999);
    expect(a.angle()).to.equal(angle);
  });
});

describe('min', function() {
  it('should set x and y to the lowest of two vectors', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 3);
    a.min(b);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(3);
  });
});

describe('minX', function() {
  it('should set x to the lowest of supplied number and x', function() {
    var a = new Vec2(10, 5);
    a.minX(9);
    expect(a.x).to.equal(9);
    expect(a.y).to.equal(5);
  });
});

describe('minY', function() {
  it('should set y to the lowest of supplied number and y', function() {
    var a = new Vec2(10, 5);
    a.minY(3);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(3);
  });
});

describe('max', function() {
  it('should set x and y to the greatest of two vectors', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 3);
    a.max(b);
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5);
  });
});

describe('maxX', function() {
  it('should set x to the greatest of supplied number and x', function() {
    var a = new Vec2(10, 5);
    a.maxX(11);
    expect(a.x).to.equal(11);
    expect(a.y).to.equal(5);
  });
});

describe('maxY', function() {
  it('should set y to the greatest of supplied number and y', function() {
    var a = new Vec2(10, 5);
    a.maxY(7);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(7);
  });
});

describe('limit', function() {
  it('should set a bounding rectangle around x and y for plane I', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(9, 2);
    var upperBound = new Vec2(2, 4);
    a.limit(upperBound, lowerBound);
    a.setX(10).setY(5);
    expect(a.x).to.equal(9);
    expect(a.y).to.equal(4);

    // Coordinates are now limited with bounding rectangle
    a.max(10).minY(1);
    expect(a.x).to.equal(9);
    expect(a.y).to.equal(2);
  });
  it('should set a bounding rectangle around x and y for plane II', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(-2, 6);
    var upperBound = new Vec2(-7, 11);
    a.limit(upperBound, lowerBound);
    a.setX(10).setY(5);
    expect(a.x).to.equal(-2);
    expect(a.y).to.equal(6);
  });
  it('should set a bounding rectangle around x and y for plane III', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(-2, -9);
    var upperBound = new Vec2(-6, -5);
    a.limit(upperBound, lowerBound);
    a.setX(10).setY(5);
    expect(a.x).to.equal(-2);
    expect(a.y).to.equal(-5);
  });
  it('should set a bounding rectangle around x and y for plane IV', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(5, -5);
    var upperBound = new Vec2(1, -2);
    a.limit(upperBound, lowerBound);
    a.setX(10).setY(5);
    expect(a.x).to.equal(5);
    expect(a.y).to.equal(-2);
  });
});

//Alias for limit
describe('bound', function() {
  it('should equal to limit', function() {
    var a = new Vec2(10, 5);
    expect(a.bound).to.deep.equal(a.limit);
  });
});

describe('unlimit', function() {
  it('should remove bounding rectangle around x and y', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(9, 2);
    var upperBound = new Vec2(2, 4);
    a.limit(upperBound, lowerBound);
    a.unlimit().setX(10).setY(5);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

// Alias for unlimit
describe('unbound', function() {
  it('should equal to unlimit', function() {
    var a = new Vec2(10, 5);
    expect(a.unbound).to.deep.equal(a.unlimit);
  });
});

describe('random', function() {
  it('should randomize x and y within bounding rectangle', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(9, 2);
    var upperBound = new Vec2(2, 4);
    a.limit(upperBound, lowerBound).random();
    expect(a.x).to.be.within(2, 9);
    expect(a.y).to.be.within(2, 4);
  });
  it('should not randomize x and y', function() {
    var a = new Vec2(10, 5);
    a.random();
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

describe('randomX', function() {
  it('should randomize x within bounding rectangle', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(9, 2);
    var upperBound = new Vec2(2, 4);
    a.limit(upperBound, lowerBound).randomX();
    expect(a.x).to.be.within(2, 9);
    expect(a.y).to.equal(4);
  });
  it('should not randomize x', function() {
    var a = new Vec2(10, 5);
    a.randomX();
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

describe('randomY', function() {
  it('should randomize y within bounding rectangle', function() {
    var a = new Vec2(10, 5);
    var lowerBound = new Vec2(9, 2);
    var upperBound = new Vec2(2, 4);
    a.limit(upperBound, lowerBound).randomY();
    expect(a.x).to.equal(9);
    expect(a.y).to.be.within(2, 4);
  });
  it('should not randomize y', function() {
    var a = new Vec2(10, 5);
    a.randomY();
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
  });
});

describe('dot', function() {
  it('should return dot product of two vectors', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 7);
    expect(a.dot(b)).to.equal(145);
  });
});

describe('cross', function() {
  it('should return cross product of two vectors', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 7);
    expect(a.cross(b)).to.equal(15);
  });
});

describe('length', function() {
  it('should return length/magnitude', function() {
    var a = new Vec2(3, 4);
    expect(a.length()).to.equal(5);
  });
});

describe('angle', function() {
  it('should return angle in degrees with respect to +X axis', function() {
    var a = new Vec2(3, 4);
    expect(a.angle()).to.equal(53.13010235415598);
  });
});

describe('distance', function() {
  it('should return distance between two vectors', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 7);
    expect(a.distance(b)).to.equal(2.23606797749979);
  });
});

describe('clone', function() {
  it('should return a new instance of Vec2 with same x and y', function() {
    var a = new Vec2(10, 5);
    var b = a.clone();
    b.addX(1).addY(2);
    expect(a.x).to.equal(10);
    expect(a.y).to.equal(5);
    expect(b).to.be.an.instanceof(Vec2);
    expect(b.x).to.equal(11);
    expect(b.y).to.equal(7);
  });
});

describe('isEqual', function() {
  it('should return true', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(10, 5);
    expect(a.isEqual(b)).to.be.true;
  });
  it('should return false', function() {
    var a = new Vec2(10, 5);
    var b = new Vec2(11, 7);
    expect(a.isEqual(b)).to.be.false;
  });
});

describe('toString', function() {
  it('should return string representation of vector', function() {
    var a = new Vec2(10, 5);
    expect(a.toString()).to.equal('(10, 5)');
  });
});

describe('toArray', function() {
  it('should return array representation of vector', function() {
    var a = new Vec2(10, 5);
    expect(a.toArray()).to.deep.equal([10, 5]);
  });
});
