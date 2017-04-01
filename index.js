/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/get-prototype-of-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/get-prototype-of-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/get-prototype-of-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/get-prototype-of-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/get-prototype-of-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/get-prototype-of-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/get-prototype-of-x" title="npm version">
 * <img src="https://badge.fury.io/js/get-prototype-of-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Sham for Object.getPrototypeOf.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module get-prototype-of-x
 */

/* eslint strict: 1, max-statements: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var toStringTag = require('to-string-tag-x');
  var isNull = require('lodash.isnull');
  var toObject = require('to-object-x');
  var gpo = Object.getPrototypeOf;

  if (gpo) {
    try {
      gpo = gpo(Object) === Object.prototype && gpo;
    } catch (ignore) {
      gpo = null;
    }
  }

  if (gpo) {
    try {
      gpo(1);
    } catch (ignore) {
      var $getPrototypeOf = gpo;
      gpo = function getPrototypeOf(obj) {
        return $getPrototypeOf(toObject(obj));
      };
    }
  } else {
    gpo = function getPrototypeOf(obj) {
      var object = toObject(obj);
      var proto = object.__proto__; // eslint-disable-line no-proto
      if (proto || isNull(proto)) {
        return proto;
      } else if (toStringTag(object.constructor) === '[object Function]') {
        return object.constructor.prototype;
      } else if (object instanceof Object) {
        return Object.prototype;
      } else {
        return null;
      }
    };
  }

  /**
   * This method returns the prototype (i.e. the value of the internal [[Prototype]] property)
   * of the specified object.
   *
   * @param {*} obj The object whose prototype is to be returned.
   * @return {Object} The prototype of the given object. If there are no inherited properties, null is returned.
   * @example
   * var getPrototypeOf = require('get-prototype-of-x');
   * getPrototypeOf('foo'); // String.prototype
   */
  module.exports = gpo;
}());
