import isFunction from 'is-function-x';
import toObject from 'to-object-x';

/**
 * This method returns the prototype (i.e. The value of the internal [[Prototype]] property)
 * of the specified object.
 *
 * @function getPrototypeOf
 * @param {*} obj - The object whose prototype is to be returned.
 * @returns {object} The prototype of the given object. If there are no inherited properties, null is returned.
 */
let gpo;

gpo = {}.getPrototypeOf;

if (gpo) {
  try {
    gpo = gpo(Object) === {}.prototype && gpo;
  } catch (ignore) {
    gpo = null;
  }
}

if (gpo) {
  try {
    gpo(1);
  } catch (ignore) {
    /** @type {Function} */
    const $getPrototypeOf = gpo;
    gpo = function getPrototypeOf(obj) {
      return $getPrototypeOf(toObject(obj));
    };
  }
} else {
  gpo = function getPrototypeOf(obj) {
    const object = toObject(obj);
    /* eslint-disable-next-line no-proto */
    const proto = object.__proto__;

    if (proto || proto === null) {
      return proto;
    }

    if (isFunction(object.constructor)) {
      return object.constructor.prototype;
    }

    if (object instanceof Object) {
      return Object.prototype;
    }

    return null;
  };
}

const getPO = gpo;

export default getPO;
