import noop from 'lodash/noop';
import getPrototypeOf from '../src/get-prototype-of-x';

describe('getPrototypeOf', function() {
  it('should return the [[Prototype]] of an object', function() {
    expect.assertions(1);
    const Foo = noop;

    const proto = getPrototypeOf(new Foo());
    expect(proto).toBe(Foo.prototype);
  });

  it('should shamone to the `Object.prototype` if `object.constructor` is not a function', function() {
    expect.assertions(1);
    const Foo = noop;

    Foo.prototype.constructor = 1;

    const proto = getPrototypeOf(new Foo());

    if (proto === Foo.prototype) {
      expect(proto).toBe(Foo.prototype);
    } else {
      expect(proto).toBe(Object.prototype);
    }
  });

  it('should throw error for `null` or `undefined`', function() {
    expect.assertions(3);
    expect(function() {
      getPrototypeOf();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      getPrototypeOf(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      getPrototypeOf(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should work with primitives', function() {
    expect.assertions(3);
    expect(getPrototypeOf(1)).toBe(Number.prototype);
    expect(getPrototypeOf(true)).toBe(Boolean.prototype);
    expect(getPrototypeOf('')).toBe(String.prototype);
  });
});
