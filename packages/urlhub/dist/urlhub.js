/* urlhub 0.7.4 by Javier Marquez. MIT licensed. https://github.com/arqex/url-navigation/tree/master/packages/urlhub */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["urlhub"] = factory();
	else
		root["urlhub"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./urlhub.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/mini-querystring/dist/index.js":
/*!*******************************************************************************!*\
  !*** C:/proyectos/url-navigation/node_modules/mini-querystring/dist/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar q_flat_1 = __webpack_require__(/*! q-flat */ \"../../node_modules/q-flat/dist/index.js\");\nvar q_set_1 = __webpack_require__(/*! q-set */ \"../../node_modules/q-set/dist/index.js\");\nvar parseReg = /([^=?&]+)=?([^&]*)/g;\n/**\n * @description\n * Converts an object to a query string and optionally flattens it.\n *\n * @example\n * stringify({ a: 1 }) === 'a=1'\n *\n * stringify({ a: { b: 1 } }, true) === 'a[b]=1'\n *\n * @param obj The object to stringify.\n * @param deep If true the object will be flattened using query string syntax.\n */\nfunction stringify(obj, deep) {\n    if (deep) {\n        obj = q_flat_1.flatten(obj);\n    }\n    var keys = Object.keys(obj);\n    if (!keys.length) {\n        return \"\";\n    }\n    for (var i = 0, len = keys.length; i < len; i++) {\n        var key = keys[i];\n        keys[i] = encodeURIComponent(key) + \"=\" + encodeURIComponent(obj[key]);\n    }\n    return keys.join(\"&\");\n}\nexports.stringify = stringify;\n/**\n * @description\n * Parses a query string and optionally unflattens it.\n *\n * @example\n * parse('a=1&b=2&') === \"{ a: '1', b: '2' }\"\n *\n * parse('a=1&b[c]=2', true) === \"{ a: '1', b: { c: '1' } }\"\n *\n * @param str The string to parse.\n * @param deep If true, nested querystring paths will be resolved.\n */\nfunction parse(str, deep) {\n    var set = deep ? q_set_1.deep : q_set_1.shallow;\n    var result = {};\n    for (;;) {\n        var part = parseReg.exec(str);\n        if (!part) {\n            break;\n        }\n        var prop = part[1],\n            val = part[2];\n        set(result, decodeURIComponent(prop), decodeURIComponent(val));\n    }\n    return result;\n}\nexports.parse = parse;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://%5Bname%5D/C:/proyectos/url-navigation/node_modules/mini-querystring/dist/index.js?");

/***/ }),

/***/ "../../node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** C:/proyectos/url-navigation/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar isarray = __webpack_require__(/*! isarray */ \"../../node_modules/path-to-regexp/node_modules/isarray/index.js\");\n\n/**\n * Expose `pathToRegexp`.\n */\nmodule.exports = pathToRegexp;\nmodule.exports.parse = parse;\nmodule.exports.compile = compile;\nmodule.exports.tokensToFunction = tokensToFunction;\nmodule.exports.tokensToRegExp = tokensToRegExp;\n\n/**\n * The main path matching regexp utility.\n *\n * @type {RegExp}\n */\nvar PATH_REGEXP = new RegExp([\n// Match escaped characters that would otherwise appear in future matches.\n// This allows the user to escape special characters that won't transform.\n'(\\\\\\\\.)',\n// Match Express-style parameters and un-named parameters with a prefix\n// and optional suffixes. Matches appear as:\n//\n// \"/:test(\\\\d+)?\" => [\"/\", \"test\", \"\\d+\", undefined, \"?\", undefined]\n// \"/route(\\\\d+)\"  => [undefined, undefined, undefined, \"\\d+\", undefined, undefined]\n// \"/*\"            => [\"/\", undefined, undefined, undefined, undefined, \"*\"]\n'([\\\\/.])?(?:(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?|(\\\\*))'].join('|'), 'g');\n\n/**\n * Parse a string for the raw tokens.\n *\n * @param  {string}  str\n * @param  {Object=} options\n * @return {!Array}\n */\nfunction parse(str, options) {\n  var tokens = [];\n  var key = 0;\n  var index = 0;\n  var path = '';\n  var defaultDelimiter = options && options.delimiter || '/';\n  var res;\n\n  while ((res = PATH_REGEXP.exec(str)) != null) {\n    var m = res[0];\n    var escaped = res[1];\n    var offset = res.index;\n    path += str.slice(index, offset);\n    index = offset + m.length;\n\n    // Ignore already escaped sequences.\n    if (escaped) {\n      path += escaped[1];\n      continue;\n    }\n\n    var next = str[index];\n    var prefix = res[2];\n    var name = res[3];\n    var capture = res[4];\n    var group = res[5];\n    var modifier = res[6];\n    var asterisk = res[7];\n\n    // Push the current path onto the tokens.\n    if (path) {\n      tokens.push(path);\n      path = '';\n    }\n\n    var partial = prefix != null && next != null && next !== prefix;\n    var repeat = modifier === '+' || modifier === '*';\n    var optional = modifier === '?' || modifier === '*';\n    var delimiter = res[2] || defaultDelimiter;\n    var pattern = capture || group;\n\n    tokens.push({\n      name: name || key++,\n      prefix: prefix || '',\n      delimiter: delimiter,\n      optional: optional,\n      repeat: repeat,\n      partial: partial,\n      asterisk: !!asterisk,\n      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'\n    });\n  }\n\n  // Match any characters still remaining.\n  if (index < str.length) {\n    path += str.substr(index);\n  }\n\n  // If the path exists, push it onto the end.\n  if (path) {\n    tokens.push(path);\n  }\n\n  return tokens;\n}\n\n/**\n * Compile a string to a template function for the path.\n *\n * @param  {string}             str\n * @param  {Object=}            options\n * @return {!function(Object=, Object=)}\n */\nfunction compile(str, options) {\n  return tokensToFunction(parse(str, options));\n}\n\n/**\n * Prettier encoding of URI path segments.\n *\n * @param  {string}\n * @return {string}\n */\nfunction encodeURIComponentPretty(str) {\n  return encodeURI(str).replace(/[\\/?#]/g, function (c) {\n    return '%' + c.charCodeAt(0).toString(16).toUpperCase();\n  });\n}\n\n/**\n * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.\n *\n * @param  {string}\n * @return {string}\n */\nfunction encodeAsterisk(str) {\n  return encodeURI(str).replace(/[?#]/g, function (c) {\n    return '%' + c.charCodeAt(0).toString(16).toUpperCase();\n  });\n}\n\n/**\n * Expose a method for transforming tokens into the path function.\n */\nfunction tokensToFunction(tokens) {\n  // Compile all the tokens into regexps.\n  var matches = new Array(tokens.length);\n\n  // Compile all the patterns before compilation.\n  for (var i = 0; i < tokens.length; i++) {\n    if (_typeof(tokens[i]) === 'object') {\n      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');\n    }\n  }\n\n  return function (obj, opts) {\n    var path = '';\n    var data = obj || {};\n    var options = opts || {};\n    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;\n\n    for (var i = 0; i < tokens.length; i++) {\n      var token = tokens[i];\n\n      if (typeof token === 'string') {\n        path += token;\n\n        continue;\n      }\n\n      var value = data[token.name];\n      var segment;\n\n      if (value == null) {\n        if (token.optional) {\n          // Prepend partial segment prefixes.\n          if (token.partial) {\n            path += token.prefix;\n          }\n\n          continue;\n        } else {\n          throw new TypeError('Expected \"' + token.name + '\" to be defined');\n        }\n      }\n\n      if (isarray(value)) {\n        if (!token.repeat) {\n          throw new TypeError('Expected \"' + token.name + '\" to not repeat, but received `' + JSON.stringify(value) + '`');\n        }\n\n        if (value.length === 0) {\n          if (token.optional) {\n            continue;\n          } else {\n            throw new TypeError('Expected \"' + token.name + '\" to not be empty');\n          }\n        }\n\n        for (var j = 0; j < value.length; j++) {\n          segment = encode(value[j]);\n\n          if (!matches[i].test(segment)) {\n            throw new TypeError('Expected all \"' + token.name + '\" to match \"' + token.pattern + '\", but received `' + JSON.stringify(segment) + '`');\n          }\n\n          path += (j === 0 ? token.prefix : token.delimiter) + segment;\n        }\n\n        continue;\n      }\n\n      segment = token.asterisk ? encodeAsterisk(value) : encode(value);\n\n      if (!matches[i].test(segment)) {\n        throw new TypeError('Expected \"' + token.name + '\" to match \"' + token.pattern + '\", but received \"' + segment + '\"');\n      }\n\n      path += token.prefix + segment;\n    }\n\n    return path;\n  };\n}\n\n/**\n * Escape a regular expression string.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction escapeString(str) {\n  return str.replace(/([.+*?=^!:${}()[\\]|\\/\\\\])/g, '\\\\$1');\n}\n\n/**\n * Escape the capturing group by escaping special characters and meaning.\n *\n * @param  {string} group\n * @return {string}\n */\nfunction escapeGroup(group) {\n  return group.replace(/([=!:$\\/()])/g, '\\\\$1');\n}\n\n/**\n * Attach the keys as a property of the regexp.\n *\n * @param  {!RegExp} re\n * @param  {Array}   keys\n * @return {!RegExp}\n */\nfunction attachKeys(re, keys) {\n  re.keys = keys;\n  return re;\n}\n\n/**\n * Get the flags for a regexp from the options.\n *\n * @param  {Object} options\n * @return {string}\n */\nfunction flags(options) {\n  return options.sensitive ? '' : 'i';\n}\n\n/**\n * Pull out keys from a regexp.\n *\n * @param  {!RegExp} path\n * @param  {!Array}  keys\n * @return {!RegExp}\n */\nfunction regexpToRegexp(path, keys) {\n  // Use a negative lookahead to match only capturing groups.\n  var groups = path.source.match(/\\((?!\\?)/g);\n\n  if (groups) {\n    for (var i = 0; i < groups.length; i++) {\n      keys.push({\n        name: i,\n        prefix: null,\n        delimiter: null,\n        optional: false,\n        repeat: false,\n        partial: false,\n        asterisk: false,\n        pattern: null\n      });\n    }\n  }\n\n  return attachKeys(path, keys);\n}\n\n/**\n * Transform an array into a regexp.\n *\n * @param  {!Array}  path\n * @param  {Array}   keys\n * @param  {!Object} options\n * @return {!RegExp}\n */\nfunction arrayToRegexp(path, keys, options) {\n  var parts = [];\n\n  for (var i = 0; i < path.length; i++) {\n    parts.push(pathToRegexp(path[i], keys, options).source);\n  }\n\n  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));\n\n  return attachKeys(regexp, keys);\n}\n\n/**\n * Create a path regexp from string input.\n *\n * @param  {string}  path\n * @param  {!Array}  keys\n * @param  {!Object} options\n * @return {!RegExp}\n */\nfunction stringToRegexp(path, keys, options) {\n  return tokensToRegExp(parse(path, options), keys, options);\n}\n\n/**\n * Expose a function for taking tokens and returning a RegExp.\n *\n * @param  {!Array}          tokens\n * @param  {(Array|Object)=} keys\n * @param  {Object=}         options\n * @return {!RegExp}\n */\nfunction tokensToRegExp(tokens, keys, options) {\n  if (!isarray(keys)) {\n    options = /** @type {!Object} */keys || options;\n    keys = [];\n  }\n\n  options = options || {};\n\n  var strict = options.strict;\n  var end = options.end !== false;\n  var route = '';\n\n  // Iterate over the tokens and create our regexp string.\n  for (var i = 0; i < tokens.length; i++) {\n    var token = tokens[i];\n\n    if (typeof token === 'string') {\n      route += escapeString(token);\n    } else {\n      var prefix = escapeString(token.prefix);\n      var capture = '(?:' + token.pattern + ')';\n\n      keys.push(token);\n\n      if (token.repeat) {\n        capture += '(?:' + prefix + capture + ')*';\n      }\n\n      if (token.optional) {\n        if (!token.partial) {\n          capture = '(?:' + prefix + '(' + capture + '))?';\n        } else {\n          capture = prefix + '(' + capture + ')?';\n        }\n      } else {\n        capture = prefix + '(' + capture + ')';\n      }\n\n      route += capture;\n    }\n  }\n\n  var delimiter = escapeString(options.delimiter || '/');\n  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;\n\n  // In non-strict mode we allow a slash at the end of match. If the path to\n  // match already ends with a slash, we remove it for consistency. The slash\n  // is valid at the end of a path match, not in the middle. This is important\n  // in non-ending mode, where \"/test/\" shouldn't match \"/test//route\".\n  if (!strict) {\n    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';\n  }\n\n  if (end) {\n    route += '$';\n  } else {\n    // In non-ending mode, we need the capturing groups to match as much as\n    // possible by using a positive lookahead to the end or next path segment.\n    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';\n  }\n\n  return attachKeys(new RegExp('^' + route, flags(options)), keys);\n}\n\n/**\n * Normalize the given path string, returning a regular expression.\n *\n * An empty array can be passed in for the keys, which will hold the\n * placeholder key descriptions. For example, using `/user/:id`, `keys` will\n * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.\n *\n * @param  {(string|RegExp|Array)} path\n * @param  {(Array|Object)=}       keys\n * @param  {Object=}               options\n * @return {!RegExp}\n */\nfunction pathToRegexp(path, keys, options) {\n  if (!isarray(keys)) {\n    options = /** @type {!Object} */keys || options;\n    keys = [];\n  }\n\n  options = options || {};\n\n  if (path instanceof RegExp) {\n    return regexpToRegexp(path, /** @type {!Array} */keys);\n  }\n\n  if (isarray(path)) {\n    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);\n  }\n\n  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);\n}\n\n//# sourceURL=webpack://%5Bname%5D/C:/proyectos/url-navigation/node_modules/path-to-regexp/index.js?");

/***/ }),

/***/ "../../node_modules/path-to-regexp/node_modules/isarray/index.js":
/*!*********************************************************************************************!*\
  !*** C:/proyectos/url-navigation/node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = Array.isArray || function (arr) {\n  return Object.prototype.toString.call(arr) == '[object Array]';\n};\n\n//# sourceURL=webpack://%5Bname%5D/C:/proyectos/url-navigation/node_modules/path-to-regexp/node_modules/isarray/index.js?");

/***/ }),

/***/ "../../node_modules/q-flat/dist/index.js":
/*!*********************************************************************!*\
  !*** C:/proyectos/url-navigation/node_modules/q-flat/dist/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar _a = Object.prototype,\n    toString = _a.toString,\n    hasOwnProperty = _a.hasOwnProperty;\nvar OBJECT_TYPE = \"[object Object]\";\nvar ARRAY_TYPE = \"[object Array]\";\n/**\n * @description\n * Creates a querystring style object from a nested one.\n *\n * @example\n * var result = flatten({ a: { b: 1 }, c: { d: 1 } });\n * result; //-> { \"a[b]\": 1, \"c[d]\": 2 }\n *\n * @param obj The object to flatten.\n */\nfunction flatten(obj, path, result) {\n    var type = toString.call(obj);\n    if (result === undefined) {\n        if (type === OBJECT_TYPE) {\n            result = {};\n        } else if (type === ARRAY_TYPE) {\n            result = [];\n        } else {\n            return;\n        }\n    }\n    for (var key in obj) {\n        /* istanbul ignore if */\n        if (!hasOwnProperty.call(obj, key)) {\n            continue;\n        }\n        var val = obj[key];\n        if (val == null) {\n            continue;\n        }\n        switch (toString.call(val)) {\n            case ARRAY_TYPE:\n            case OBJECT_TYPE:\n                flatten(val, join(path, key), result);\n                break;\n            default:\n                result[join(path, key)] = val;\n                break;\n        }\n    }\n    return result;\n}\nexports.flatten = flatten;\n/**\n * Join path keys using query string `a[b]` style syntax.\n */\nfunction join(path, key) {\n    return path != null ? path + \"[\" + key + \"]\" : key;\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://%5Bname%5D/C:/proyectos/url-navigation/node_modules/q-flat/dist/index.js?");

/***/ }),

/***/ "../../node_modules/q-set/dist/index.js":
/*!********************************************************************!*\
  !*** C:/proyectos/url-navigation/node_modules/q-set/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar matchArray = /[^\\[\\]]+|\\[\\]/g;\nvar matchInteger = /^\\d+$/;\nvar temp = [];\n/**\n * @description\n * A setter for querystring style fields like \"a[b][c]\".\n * The setter will create arrays for repeat keys and supports the \"[]\" push syntax.\n *\n * @example\n * deep({}, \"a[b][c]\", 1) // { a: { b: { c: 1 } } }\n *\n * @param obj The object to set a value on.\n * @param path The querystring path to set.\n * @param value The value to set at the path.\n */\nfunction deep(obj, path, value) {\n    var keys = path === \"\" ? [\"\"] : path.match(matchArray);\n    var len = keys.length;\n    var cur = obj;\n    var prev;\n    var key;\n    var exists;\n    for (var i = 0; i < len; i++) {\n        prev = cur;\n        key = keys[i];\n        var next = keys[i + 1];\n        if (key === \"[]\") {\n            key = cur.length;\n        }\n        // Make path as we go.\n        cur = (exists = (typeof cur === \"undefined\" ? \"undefined\" : _typeof(cur)) === \"object\" && key in cur) ? cur[key] : // Check if the next path is an explicit array.\n        cur[key] = next === \"[]\" || matchInteger.test(next) ? [] : {};\n    }\n    prev[key] = exists ? temp.concat(cur, value) : value;\n    return obj;\n}\nexports.deep = deep;\n/**\n * @description\n * Appends to an object using query string syntax with \"[]\" syntax push support.\n *\n * @example\n * shallow({}, \"a[b][c]\", 1) // { \"a[b][c]\": 1 }\n * shallow({}, \"a[]\", 1) // { a: [1] }\n *\n * @param obj The object to set a value on.\n * @param path The querystring path to set.\n * @param value The value to set at the path.\n */\nfunction shallow(obj, key, val) {\n    key = arrayPushIndexes(obj, key);\n    obj[key] = key in obj ? temp.concat(obj[key], val) : val;\n    return obj;\n}\nexports.shallow = shallow;\n/**\n * Given a qs style key and an object will convert array push syntax to integers.\n * Eg: a[b][] -> a[b][0]\n */\nfunction arrayPushIndexes(obj, key) {\n    var path = key.split(\"[]\");\n    if (path.length === 1) {\n        return key;\n    }\n    var cur = path[0];\n    var keys = Object.keys(obj);\n    for (var i = 1, len = path.length; i < len; i++) {\n        cur += \"[\" + findLastIndex(keys, cur) + \"]\" + path[i];\n    }\n    return cur;\n}\n/**\n * Given a path to push to will return the next valid index if possible.\n * Eg: a[b][] -> 0 // if array is empty.\n */\nfunction findLastIndex(keys, path) {\n    var last = -1;\n    for (var i = keys.length; i--;) {\n        var key = keys[i];\n        if (key.indexOf(path) !== 0) {\n            continue;\n        }\n        var index = Number(key.replace(path, \"\").slice(1, key.indexOf(\"]\") - 1));\n        if (index > last) {\n            last = index;\n        }\n    }\n    return last + 1;\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://%5Bname%5D/C:/proyectos/url-navigation/node_modules/q-set/dist/index.js?");

/***/ }),

/***/ "./urlhub.js":
/*!*******************!*\
  !*** ./urlhub.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parser = __webpack_require__(/*! path-to-regexp */ \"../../node_modules/path-to-regexp/index.js\");\nvar qs = __webpack_require__(/*! mini-querystring */ \"../../node_modules/mini-querystring/dist/index.js\");\n\n/*\r\nroutes = {\r\n  path: '/hola',\r\n  cb: fn,\r\n  children: []\r\n}\r\n*/\n\n// parseUrl function needed for testing\nvar parseUrl;\nif (typeof window !== 'undefined') {\n  parseUrl = function parseUrl(url) {\n    var a = document.createElement('a');\n    a.href = url;\n    return a;\n  };\n}\n\n// The lib\nvar urlhub = {\n  create: function create(options) {\n    return new Urlhub(options);\n  },\n  joinUrls: joinUrls // just for testing never used, see helpers at bottom\n\n\n  // The class\n};var Urlhub = function Urlhub(options) {\n  if (!options || !options.strategy) {\n    throw new Error('Router needs an strategy to listen to url changes.');\n  }\n\n  var s = options.strategy;\n\n  var ops = {};\n  Object.keys(options).forEach(function (key) {\n    if (key === 'strategy') return;\n    ops[key] = options[key];\n  });\n\n  s.init && s.init(ops);\n  this.strategy = s;\n\n  // Callbacks before the route change\n  this.obc = [];\n\n  // Callbacks to be called on route change\n  this.cbs = [];\n};\n\nvar prototype = {\n  setRoutes: function setRoutes(routes) {\n    this.routes = this.parseRoutes(routes);\n  },\n  // Route translation methods\n  parseRoutes: function parseRoutes(routes, parent) {\n    if (!routes) console.warn('No routes provided to parseRoutes');\n\n    if (!routes.length) {\n      routes = [routes];\n    }\n\n    var parsedRoutes = [],\n        me = this;\n\n    routes.forEach(function (r) {\n      var path = joinUrls(parent, r.path);\n\n      var params = [],\n          parsed = {\n        regex: parser(path, params),\n        id: path,\n        cb: r.cb\n      };\n\n      parsed.params = params.map(function (p) {\n        return p.name;\n      });\n\n      if (r.children && r.children.length) {\n        parsed.childRegex = parser(path, [], { end: false });\n        parsed.children = me.parseRoutes(r.children, path);\n      }\n\n      parsedRoutes.push(parsed);\n    });\n\n    return parsedRoutes;\n  },\n\n  match: function match(location, candidates, isChild) {\n    var i = 0,\n        url = sanitizeUrl(location),\n        path,\n        found,\n        match,\n        c;\n\n    if (!candidates) {\n      candidates = this.routes;\n    }\n\n    var parsed = (this.strategy.parseUrl || parseUrl)(url);\n    path = parsed.pathname;\n\n    // Normalize pathname\n    if (path[0] !== '/') {\n      path = '/' + path;\n    }\n\n    while (i < candidates.length && !found) {\n      c = candidates[i];\n      if (c.childRegex) {\n        //console.log( 'failed', c.regex, path );\n        found = c.childRegex.exec(path);\n        if (found) {\n          match = this.match(url, c.children, true);\n          if (match.matches.length) {\n            match.matches = [c.cb].concat(match.matches);\n            match.matchIds = [c.id].concat(match.matchIds);\n            return match; // The recursive call will give all the info\n          } else {\n            found = false;\n          }\n        }\n      }\n\n      found = c.regex.exec(path);\n      if (found) {\n        found = {\n          id: c.id, cb: c.cb, params: found.slice(1)\n        };\n      }\n\n      if (!found) {\n        i++;\n      }\n    }\n\n    var matches = [];\n    var matchIds = [];\n\n    if (found) {\n      matches.push(found.cb);\n      matchIds.push(found.id);\n    } else if (!isChild) {\n      console.error('There is no route match for ' + location);\n    }\n\n    match = {\n      matches: matches,\n      matchIds: matchIds,\n      pathname: path,\n      search: parsed.search,\n      query: qs.parse(parsed.search),\n      hash: parsed.hash,\n      route: found && found.id || false,\n      params: {}\n    };\n\n    if (found) {\n      c.params.forEach(function (p, i) {\n        match.params[p] = found.params[i];\n      });\n    }\n\n    return match;\n  },\n\n  // Routing methods\n  start: function start() {\n    var me = this;\n    this.strategy.onChange(function () {\n      var change = me.checkChange();\n      if (!change.next) return;\n\n      if (change.current !== change.next) {\n        me.strategy.replace(change.next);\n      } else {\n        me.location = change.nextLocation;\n        me.cbs.forEach(function (cb) {\n          cb(change.nextLocation);\n        });\n      }\n    });\n\n    this.strategy.start();\n    this.location = this.match(this.strategy.getLocation());\n    return this.location;\n  },\n  stop: function stop() {\n    this.strategy.onChange(function () {});\n  },\n  refresh: function refresh() {\n    var change = this.checkChange();\n    change.next && change.current !== change.next && this.strategy.replace(change.next);\n  },\n  checkChange: function checkChange() {\n    var current = this.strategy.getLocation(),\n        nextLocation = this.runOnBeforeChange(this.match(current)),\n        next = nextLocation && nextLocation.pathname + nextLocation.search + nextLocation.hash;\n\n    return { current: current, next: next, nextLocation: nextLocation };\n  },\n  runOnBeforeChange: function runOnBeforeChange(match) {\n    var me = this;\n\n    this.obc.forEach(function (cb) {\n      if (match) {\n        match = cb(match);\n        if (typeof match === 'string') {\n          match = me.match(match);\n        }\n      }\n    });\n\n    return match;\n  },\n  onBeforeChange: function onBeforeChange(cb) {\n    this.obc.push(cb);\n  },\n  onChange: function onChange(cb) {\n    this.cbs.push(cb);\n  },\n  push: function push(location) {\n    this.updateLocation('push', location);\n  },\n  replace: function replace(location) {\n    this.updateLocation('replace', location);\n  },\n  back: function back() {\n    this.strategy.back();\n  },\n  updateLocation: function updateLocation(method, location) {\n    var current = this.strategy.getLocation();\n    var next;\n\n    if (typeof location === 'string') {\n      next = location;\n    } else {\n      next = mergeLocations(this.match(current), location);\n    }\n\n    var nextLocation = this.runOnBeforeChange(this.match(next));\n    if (nextLocation) {\n      next = nextLocation.pathname + nextLocation.search + nextLocation.hash;\n      if (current !== next) {\n        this.strategy[method](next);\n      }\n    }\n  }\n};\n\nfor (var method in prototype) {\n  Urlhub.prototype[method] = prototype[method];\n}module.exports = urlhub;\n\n/********* HELPERS */\nfunction joinUrls(one, two) {\n  var first = sanitizeUrl(one),\n      second = sanitizeUrl(two);\n\n  if (!one) return second;\n  if (!two) return first;\n\n  if (first === '/') {\n    return second;\n  } else if (second === '/') {\n    return first;\n  } else {\n    return first + second;\n  }\n}\n\nfunction sanitizeUrl(url) {\n  if (!url) return '/';\n  var sanitized = url;\n  if (sanitized[sanitized.length - 1] === '/') {\n    sanitized = sanitized.slice(0, sanitized.length - 1);\n  }\n  if (sanitized[0] !== '/') {\n    sanitized = '/' + sanitized;\n  }\n  return sanitized;\n}\n\nfunction mergeLocations(prev, next) {\n  var location = Object.assign(prev, next),\n      search = location.search;\n\n  if (Object.keys(location.query).length) {\n    search = '?' + qs.stringify(location.query);\n  } else {\n    search = '';\n  }\n\n  return location.pathname + search + location.hash;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./urlhub.js?");

/***/ })

/******/ });
});