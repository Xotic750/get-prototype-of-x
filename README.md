<a
  href="https://travis-ci.org/Xotic750/get-prototype-of-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/get-prototype-of-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/get-prototype-of-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/get-prototype-of-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/get-prototype-of-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/get-prototype-of-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/get-prototype-of-x"
  title="npm version">
<img src="https://badge.fury.io/js/get-prototype-of-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/get-prototype-of-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/get-prototype-of-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/get-prototype-of-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/get-prototype-of-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_get-prototype-of-x"></a>

## get-prototype-of-x

Sham for Object.getPrototypeOf

<a name="exp_module_get-prototype-of-x--module.exports"></a>

### `module.exports` ⇒ <code>Object</code> ⏏

This method returns the prototype (i.e. the value of the internal [[Prototype]] property)
of the specified object.

**Kind**: Exported member  
**Returns**: <code>Object</code> - The prototype of the given object. If there are no inherited properties, null is returned.

| Param | Type            | Description                                   |
| ----- | --------------- | --------------------------------------------- |
| obj   | <code>\*</code> | The object whose prototype is to be returned. |

**Example**

```js
import getPrototypeOf from 'get-prototype-of-x';

console.log(getPrototypeOf('foo')); // String.prototype
```
