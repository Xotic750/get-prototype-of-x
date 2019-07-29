import isFunction from 'is-function-x';
import toObject from 'to-object-x';
import toBoolean from 'to-boolean-x';
var ObjectCtr = {}.constructor;
var nativeGetPrototypeOf = ObjectCtr.getPrototypeOf;

var test1 = function test1() {
  var prototypeOfCtr = {};
  /* eslint-disable-next-line lodash/prefer-noop */

  var Ctr = function Ctr() {};

  Ctr.prototype = prototypeOfCtr;
  var ctr = new Ctr();

  try {
    return nativeGetPrototypeOf(ctr) === prototypeOfCtr;
  } catch (ignore) {
    return false;
  }
};

var isWorking = toBoolean(nativeGetPrototypeOf) && test1();

var patchedGetPrototypeOf = function patchedGetPrototypeOf() {
  return function getPrototypeOf(obj) {
    return nativeGetPrototypeOf(toObject(obj));
  };
};

export var implementation = function implementation() {
  return function getPrototypeOf(obj) {
    var object = toObject(obj);
    /* eslint-disable-next-line no-proto */

    var proto = object.__proto__;

    if (proto || proto === null) {
      return proto;
    }

    if (isFunction(object.constructor)) {
      return object.constructor.prototype;
    }

    if (object instanceof ObjectCtr) {
      return ObjectCtr.prototype;
    }

    return null;
  };
};
/**
 * This method returns the prototype (i.e. The value of the internal [[Prototype]] property)
 * of the specified object.
 *
 * @function getPrototypeOf
 * @param {*} obj - The object whose prototype is to be returned.
 * @returns {object} The prototype of the given object. If there are no inherited properties, null is returned.
 */

var gpo = isWorking ? patchedGetPrototypeOf() : implementation();
export default gpo;

//# sourceMappingURL=get-prototype-of-x.esm.js.map