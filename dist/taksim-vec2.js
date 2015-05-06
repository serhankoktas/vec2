/**
 * @license MIT
 * taksim.io/vec2 v0.1.0
 * https://github.com/taksim-io/vec2
 * Copyright (c) 2015 taksim.io
*/

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    var Vec2 = factory(root);
    root.Vec2 || (root.Vec2 = Vec2);
    root.taksim || (root.taksim = {});
    root.taksim.Vec2 = Vec2;
  }
})(this, function() {

  'use strict';

  var namespace = 'vec2';
  var proto = TaksimVec2.prototype;

  function TaksimVec2(x, y) {
    var _t = this._t || (this._t = {});
    _t[namespace] = {};
    _t[namespace].x = this.x = float(x, 0);
    _t[namespace].y = this.y = float(y, 0);
  }

  proto.set = function(vec2) {
    return this.setX(vec2.x).setY(vec2.y);
  };

  proto.setX = function(x) {
    this.x = float(x, this.x);
    return this.maxX().minX();
  };

  proto.setY = function(y) {
    this.y = float(y, this.y);
    return this.maxY().minY();
  };

  proto.reset = function() {
    return this.resetX().resetY();
  };

  proto.resetX = function() {
    return this.setX(this._t.vec2.x);
  };

  proto.resetY = function() {
    return this.setY(this._t.vec2.y);
  };

  proto.zero = function() {
    return this.setX(0).setY(0);
  };

  proto.add = function(vec2) {
    return this.addX(vec2.x).addY(vec2.y);
  };

  proto.addX = function(number) {
    return this.setX(this.x + float(number, 0));
  };

  proto.addY = function(number) {
    return this.setY(this.y + float(number, 0));
  };

  proto.subtract = function(vec2) {
    return this.subtractX(vec2.x).subtractY(vec2.y);
  };

  proto.subtractX = function(number) {
    return this.setX(this.x - float(number, 0));
  };

  proto.subtractY = function(number) {
    return this.setY(this.y - float(number, 0));
  };

  proto.multiply = function(vec2) {
    return this.multiplyX(vec2.x).multiplyY(vec2.y);
  };

  proto.multiplyX = function(number) {
    return this.setX(this.x * float(number, 1));
  };

  proto.multiplyY = function(number) {
    return this.setY(this.y * float(number, 1));
  };

  proto.divide = function(vec2) {
    return this.divideX(vec2.x).divideY(vec2.y);
  };

  proto.divideX = function(number) {
    return this.setX(this.x / float(number, 1));
  };

  proto.divideY = function(number) {
    return this.setY(this.y / float(number, 1));
  };

  proto.round = function() {
    return this.roundX().roundY();
  };

  proto.roundX = function() {
    return this.setX(Math.round(this.x));
  };

  proto.roundY = function() {
    return this.setY(Math.round(this.y));
  };

  proto.invert = function() {
    return this.invertX().invertY();
  };

  proto.invertX = function() {
    return this.setX(-this.x);
  };

  proto.invertY = function() {
    return this.setY(-this.y);
  };

  proto.rotateTo = function(deg) {
    var rad = deg2rad(deg);
    var x = this.x;
    var y = this.y;
    return this
        .setX((x * Math.cos(rad)) - (y * Math.sin(rad)))
        .setY((x * Math.sin(rad)) + (y * Math.cos(rad)));
  };

  proto.rotateAdd = function(deg) {
    return this.rotateTo(this.angle() + deg);
  };

  proto.normalize = function() {
    var len = this.length();
    len = len < Number.MIN_VALUE ? 0 : 1 / len;
    return this.multiplyX(len).multiplyY(len);
  };

  proto.min = function(vec2) {
    return this.minX(vec2.x).minY(vec2.y);
  };

  proto.minX = function(number) {
    var x = this.x;
    var lb = get(this, 'lowerBound');
    x = Math.min(x, float(number, x));
    this.x = Math.max(lb ? lb.x : x, x);
    return this;
  };

  proto.minY = function(number) {
    var y = this.y;
    var lb = get(this, 'lowerBound');
    y = Math.min(y, float(number, y));
    this.y = Math.max(lb ? lb.y : y, y);
    return this;
  };

  proto.max = function(vec2) {
    return this.maxX(vec2.x).maxY(vec2.y);
  };

  proto.maxX = function(number) {
    var x = this.x;
    var ub = get(this, 'upperBound');
    x = Math.max(x, float(number, x));
    this.x = Math.min(ub ? ub.x : x, x);
    return this;
  };

  proto.maxY = function(number) {
    var y = this.y;
    var ub = get(this, 'upperBound');
    y = Math.max(y, float(number, y));
    this.y = Math.min(ub ? ub.y : y, y);
    return this;
  };

  proto.limit = function(upperVec2, lowerVec2) {
    lowerVec2 && set(this, 'lowerBound', upperVec2 ? lowerVec2.clone().min(upperVec2) : lowerVec2);
    upperVec2 && set(this, 'upperBound', lowerVec2 ? upperVec2.clone().max(lowerVec2) : upperVec2);
    return this.maxX().maxY().minX().minY();
  };

  proto.bound = proto.limit;

  proto.unlimit = function() {
    set(this, 'lowerBound', null);
    set(this, 'upperBound', null);
    return this;
  };

  proto.unbound = proto.unlimit;

  proto.random = function() {
    return this.randomX().randomY();
  };

  proto.randomX = function() {
    var lb = get(this, 'lowerBound');
    var ub = get(this, 'upperBound');
    if (lb && ub) {
      this.x = random(lb.x, ub.x);
    }
    return this;
  };

  proto.randomY = function() {
    var lb = get(this, 'lowerBound');
    var ub = get(this, 'upperBound');
    if (lb && ub) {
      this.y = random(lb.y, ub.y);
    }
    return this;
  };

  proto.dot = function(vec2) {
    return this.x * float(vec2.x, 0) + this.y * float(vec2.y, 0);
  };

  proto.cross = function(vec2) {
    return this.x * float(vec2.y, 0) - this.y * float(vec2.x, 0);
  };

  proto.length = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  };

  proto.angle = function() {
    return rad2deg(Math.atan2(this.y, this.x));
  };

  proto.distance = function(vec2) {
    var x = this.x - vec2.x;
    var y = this.y - vec2.y;
    return Math.sqrt(x * x + y * y);
  };

  proto.clone = function() {
    return new TaksimVec2(this.x, this.y);
  };

  proto.isEqual = function(vec2) {
    return this.x === vec2.x && this.y === vec2.y;
  };

  proto.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
  };

  proto.toArray = function() {
    return [this.x, this.y];
  };

  function float(number, fallback) {
    var i = parseFloat(number);
    return isNaN(i) ? fallback : i;
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function deg2rad(deg) {
    return deg / (180 / Math.PI);
  }

  function rad2deg(rad) {
    return rad * (180 / Math.PI);
  }

  function get(ctx, key) {
    return ctx._t[namespace][key];
  }

  function set(ctx, key, value) {
    ctx._t[namespace][key] = value;
    return value;
  }

  return TaksimVec2;
});
