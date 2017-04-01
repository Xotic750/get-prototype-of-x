/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, it, returnExports */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var getPrototypeOf;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    getPrototypeOf = require('../../index.js');
  } else {
    getPrototypeOf = returnExports;
  }

  describe('getPrototypeOf', function () {
    it('should return the [[Prototype]] of an object', function () {
      var Foo = function () {};
      var proto = getPrototypeOf(new Foo());
      expect(proto).toBe(Foo.prototype);
    });

    it('should shamone to the `Object.prototype` if `object.constructor` is not a function', function () {
      var Foo = function () {};
      Foo.prototype.constructor = 1;

      var proto = getPrototypeOf(new Foo());

      if (proto === Foo.prototype) {
        expect(proto).toBe(Foo.prototype);
      } else {
        expect(proto).toBe(Object.prototype);
      }
    });

    it('should throw error for `null` or `undefined`', function () {
      expect(function () {
        getPrototypeOf();
      }).toThrow();

      expect(function () {
        getPrototypeOf(void 0);
      }).toThrow();

      expect(function () {
        getPrototypeOf(null);
      }).toThrow();
    });

    it('should work with primitives', function () {
      expect(getPrototypeOf(1)).toBe(Number.prototype);
      expect(getPrototypeOf(true)).toBe(Boolean.prototype);
      expect(getPrototypeOf('')).toBe(String.prototype);
    });
  });
}());
