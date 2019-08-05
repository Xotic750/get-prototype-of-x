import isFunction from 'is-function-x';
import toObject from 'to-object-x';
import toBoolean from 'to-boolean-x';

const ObjectCtr = {}.constructor;
const nativeGetPrototypeOf = ObjectCtr.getPrototypeOf;

const test1 = function test1() {
  const prototypeOfCtr = {};
  /* eslint-disable-next-line lodash/prefer-noop */
  const Ctr = function Ctr() {};

  Ctr.prototype = prototypeOfCtr;
  const ctr = new Ctr();

  try {
    return nativeGetPrototypeOf(ctr) === prototypeOfCtr;
  } catch (ignore) {
    return false;
  }
};

const isWorking = toBoolean(nativeGetPrototypeOf) && test1();

const patchedGetPrototypeOf = function getPrototypeOf(obj) {
  return nativeGetPrototypeOf(toObject(obj));
};

export const implementation = function getPrototypeOf(obj) {
  const object = toObject(obj);
  /* eslint-disable-next-line no-proto */
  const proto = object.__proto__;

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

/**
 * This method returns the prototype (i.e. The value of the internal [[Prototype]] property)
 * of the specified object.
 *
 * @function getPrototypeOf
 * @param {*} obj - The object whose prototype is to be returned.
 * @returns {object} The prototype of the given object. If there are no inherited properties, null is returned.
 */
const gpo = isWorking ? patchedGetPrototypeOf : implementation;

export default gpo;
