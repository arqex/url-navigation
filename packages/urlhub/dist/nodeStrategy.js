(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nodeStrategy"] = factory();
	else
		root["nodeStrategy"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./nodeStrategy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/mini-querystring/dist/index.js":
/*!********************************************************************************************!*\
  !*** /Users/javi/projects/code/url-navigation/node_modules/mini-querystring/dist/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar q_flat_1 = __webpack_require__(/*! q-flat */ \"../../node_modules/q-flat/dist/index.js\");\n\nvar q_set_1 = __webpack_require__(/*! q-set */ \"../../node_modules/q-set/dist/index.js\");\n\nvar parseReg = /([^=?&]+)=?([^&]*)/g;\n/**\n * @description\n * Converts an object to a query string and optionally flattens it.\n *\n * @example\n * stringify({ a: 1 }) === 'a=1'\n *\n * stringify({ a: { b: 1 } }, true) === 'a[b]=1'\n *\n * @param obj The object to stringify.\n * @param deep If true the object will be flattened using query string syntax.\n */\n\nfunction stringify(obj, deep) {\n  if (deep) {\n    obj = q_flat_1.flatten(obj);\n  }\n\n  var keys = Object.keys(obj);\n\n  if (!keys.length) {\n    return \"\";\n  }\n\n  for (var i = 0, len = keys.length; i < len; i++) {\n    var key = keys[i];\n    keys[i] = encodeURIComponent(key) + \"=\" + encodeURIComponent(obj[key]);\n  }\n\n  return keys.join(\"&\");\n}\n\nexports.stringify = stringify;\n/**\n * @description\n * Parses a query string and optionally unflattens it.\n *\n * @example\n * parse('a=1&b=2&') === \"{ a: '1', b: '2' }\"\n *\n * parse('a=1&b[c]=2', true) === \"{ a: '1', b: { c: '1' } }\"\n *\n * @param str The string to parse.\n * @param deep If true, nested querystring paths will be resolved.\n */\n\nfunction parse(str, deep) {\n  var set = deep ? q_set_1.deep : q_set_1.shallow;\n  var result = {};\n\n  for (;;) {\n    var part = parseReg.exec(str);\n\n    if (!part) {\n      break;\n    }\n\n    var prop = part[1],\n        val = part[2];\n    set(result, decodeURIComponent(prop), decodeURIComponent(val));\n  }\n\n  return result;\n}\n\nexports.parse = parse;\n\n//# sourceURL=webpack://%5Bname%5D//Users/javi/projects/code/url-navigation/node_modules/mini-querystring/dist/index.js?");

/***/ }),

/***/ "../../node_modules/q-flat/dist/index.js":
/*!**********************************************************************************!*\
  !*** /Users/javi/projects/code/url-navigation/node_modules/q-flat/dist/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _a = Object.prototype,\n    toString = _a.toString,\n    hasOwnProperty = _a.hasOwnProperty;\nvar OBJECT_TYPE = \"[object Object]\";\nvar ARRAY_TYPE = \"[object Array]\";\n/**\n * @description\n * Creates a querystring style object from a nested one.\n *\n * @example\n * var result = flatten({ a: { b: 1 }, c: { d: 1 } });\n * result; //-> { \"a[b]\": 1, \"c[d]\": 2 }\n *\n * @param obj The object to flatten.\n */\n\nfunction flatten(obj, path, result) {\n  var type = toString.call(obj);\n\n  if (result === undefined) {\n    if (type === OBJECT_TYPE) {\n      result = {};\n    } else if (type === ARRAY_TYPE) {\n      result = [];\n    } else {\n      return;\n    }\n  }\n\n  for (var key in obj) {\n    /* istanbul ignore if */\n    if (!hasOwnProperty.call(obj, key)) {\n      continue;\n    }\n\n    var val = obj[key];\n\n    if (val == null) {\n      continue;\n    }\n\n    switch (toString.call(val)) {\n      case ARRAY_TYPE:\n      case OBJECT_TYPE:\n        flatten(val, join(path, key), result);\n        break;\n\n      default:\n        result[join(path, key)] = val;\n        break;\n    }\n  }\n\n  return result;\n}\n\nexports.flatten = flatten;\n/**\n * Join path keys using query string `a[b]` style syntax.\n */\n\nfunction join(path, key) {\n  return path != null ? path + \"[\" + key + \"]\" : key;\n}\n\n//# sourceURL=webpack://%5Bname%5D//Users/javi/projects/code/url-navigation/node_modules/q-flat/dist/index.js?");

/***/ }),

/***/ "../../node_modules/q-set/dist/index.js":
/*!*********************************************************************************!*\
  !*** /Users/javi/projects/code/url-navigation/node_modules/q-set/dist/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && _typeof(Symbol.iterator) === \"symbol\") { _typeof = function (_typeof2) { function _typeof(_x) { return _typeof2.apply(this, arguments); } _typeof.toString = function () { return _typeof2.toString(); }; return _typeof; }(function (obj) { return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj); }); } else { _typeof = function (_typeof3) { function _typeof(_x2) { return _typeof3.apply(this, arguments); } _typeof.toString = function () { return _typeof3.toString(); }; return _typeof; }(function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj); }); } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar matchArray = /[^\\[\\]]+|\\[\\]/g;\nvar matchInteger = /^\\d+$/;\nvar temp = [];\n/**\n * @description\n * A setter for querystring style fields like \"a[b][c]\".\n * The setter will create arrays for repeat keys and supports the \"[]\" push syntax.\n *\n * @example\n * deep({}, \"a[b][c]\", 1) // { a: { b: { c: 1 } } }\n *\n * @param obj The object to set a value on.\n * @param path The querystring path to set.\n * @param value The value to set at the path.\n */\n\nfunction deep(obj, path, value) {\n  var keys = path === \"\" ? [\"\"] : path.match(matchArray);\n  var len = keys.length;\n  var cur = obj;\n  var prev;\n  var key;\n  var exists;\n\n  for (var i = 0; i < len; i++) {\n    prev = cur;\n    key = keys[i];\n    var next = keys[i + 1];\n\n    if (key === \"[]\") {\n      key = cur.length;\n    } // Make path as we go.\n\n\n    cur = (exists = (typeof cur === \"undefined\" ? \"undefined\" : _typeof(cur)) === \"object\" && key in cur) ? cur[key] : // Check if the next path is an explicit array.\n    cur[key] = next === \"[]\" || matchInteger.test(next) ? [] : {};\n  }\n\n  prev[key] = exists ? temp.concat(cur, value) : value;\n  return obj;\n}\n\nexports.deep = deep;\n/**\n * @description\n * Appends to an object using query string syntax with \"[]\" syntax push support.\n *\n * @example\n * shallow({}, \"a[b][c]\", 1) // { \"a[b][c]\": 1 }\n * shallow({}, \"a[]\", 1) // { a: [1] }\n *\n * @param obj The object to set a value on.\n * @param path The querystring path to set.\n * @param value The value to set at the path.\n */\n\nfunction shallow(obj, key, val) {\n  key = arrayPushIndexes(obj, key);\n  obj[key] = key in obj ? temp.concat(obj[key], val) : val;\n  return obj;\n}\n\nexports.shallow = shallow;\n/**\n * Given a qs style key and an object will convert array push syntax to integers.\n * Eg: a[b][] -> a[b][0]\n */\n\nfunction arrayPushIndexes(obj, key) {\n  var path = key.split(\"[]\");\n\n  if (path.length === 1) {\n    return key;\n  }\n\n  var cur = path[0];\n  var keys = Object.keys(obj);\n\n  for (var i = 1, len = path.length; i < len; i++) {\n    cur += \"[\" + findLastIndex(keys, cur) + \"]\" + path[i];\n  }\n\n  return cur;\n}\n/**\n * Given a path to push to will return the next valid index if possible.\n * Eg: a[b][] -> 0 // if array is empty.\n */\n\n\nfunction findLastIndex(keys, path) {\n  var last = -1;\n\n  for (var i = keys.length; i--;) {\n    var key = keys[i];\n\n    if (key.indexOf(path) !== 0) {\n      continue;\n    }\n\n    var index = Number(key.replace(path, \"\").slice(1, key.indexOf(\"]\") - 1));\n\n    if (index > last) {\n      last = index;\n    }\n  }\n\n  return last + 1;\n}\n\n//# sourceURL=webpack://%5Bname%5D//Users/javi/projects/code/url-navigation/node_modules/q-set/dist/index.js?");

/***/ }),

/***/ "./nodeStrategy.js":
/*!*************************!*\
  !*** ./nodeStrategy.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar qs = __webpack_require__(/*! mini-querystring */ \"../../node_modules/mini-querystring/dist/index.js\");\n\nvar _onChange = function onChange() {};\n\nvar nodeStrategy = {\n  init: function init(options) {\n    this.history = [options.initialLocation || '/'];\n  },\n  start: function start() {\n    this.emit();\n  },\n  push: function push(location) {\n    this.history.push(location);\n    this.emit();\n  },\n  replace: function replace(location) {\n    this.history[this.history.length] = location;\n    this.emit();\n  },\n  onChange: function onChange(cb) {\n    _onChange = cb;\n  },\n  getLocation: function getLocation() {\n    return this.history[this.history.length - 1];\n  },\n  emit: function emit() {\n    _onChange && _onChange(this.getLocation());\n  },\n  parseUrl: function parseUrl(str) {\n    var parts = str.split('?');\n    var searchParts = parts[1] ? parts[1].split('#') : [];\n    return {\n      pathname: parts[0],\n      search: searchParts[0] ? '?' + searchParts[0] : '',\n      hash: searchParts[1] ? '#' + searchParts[1] : '',\n      query: searchParts[0] ? qs.parse(searchParts[0]) : {}\n    };\n  },\n  back: function back() {\n    if (this.history.length > 1) {\n      this.history.pop();\n    }\n\n    this.emit();\n  }\n};\nmodule.exports = nodeStrategy;\n\n//# sourceURL=webpack://%5Bname%5D/./nodeStrategy.js?");

/***/ })

/******/ });
});