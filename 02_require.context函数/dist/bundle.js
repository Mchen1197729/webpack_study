/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*const files = require.context('./data', false, /\\.txt$/)\r\nconsole.log(files instanceof Function) //true 说明返回值是一个函数\r\n//该函数有三个属性 1.id:String  2.keys:Function 3.resolve:Function\r\nconsole.dir(files.id) //基本没什么用\r\nconsole.log(files.keys()) //返回的是目录中所有匹配的文件的相对路径 [\"./day01.txt\", \"./day02.txt\", \"./day03.txt\"]\r\nconsole.log(files.resolve(files.keys()[0]))//基本没什么用\r\nconsole.log(files(files.keys()[0]))  //返回的是Module(正是我们通过import想要得到的东西)\r\nconsole.log(files(files.keys()[0]).default)  //就是模块默认导出的东西\r\n\r\nconst arr = files.keys().map(key => {\r\n  // return files(key).default 模块中的内容\r\n  return files(key) //模块对象Module\r\n})\r\n\r\nconsole.log(arr)\r\n*/\r\n\r\nconst files = __webpack_require__(\"./src/svg sync \\\\.svg$\")\r\n\r\nconst arr = files.keys().map(key => files(key).default)\r\nconsole.log(arr)\r\n\r\nconst span = document.createElement('span')\r\nspan.innerHTML = arr[0]\r\ndocument.body.append(span)\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/svg sync \\.svg$":
/*!******************************************!*\
  !*** ./src/svg sync nonrecursive \.svg$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./refresh.svg\": \"./src/svg/refresh.svg\",\n\t\"./telephone.svg\": \"./src/svg/telephone.svg\",\n\t\"./th_internet.svg\": \"./src/svg/th_internet.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/svg sync \\\\.svg$\";\n\n//# sourceURL=webpack:///./src/svg_sync_nonrecursive_\\.svg$?");

/***/ }),

/***/ "./src/svg/refresh.svg":
/*!*****************************!*\
  !*** ./src/svg/refresh.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"64px\\\" height=\\\"64.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#13227a\\\" d=\\\"M733.04 379.104a264.112 264.112 0 0 0-468.112 41.76 14.336 14.336 0 0 1-17.968 8.16l-20.256-7.008a12.352 12.352 0 0 1-7.456-16.192 312.112 312.112 0 0 1 556.736-48.56l12.704-44.352a16 16 0 0 1 7.632-9.584l24.752-13.712a14.464 14.464 0 0 1 20.912 16.64l-38.128 132.96a11.136 11.136 0 0 1-13.76 7.632l-132.96-38.128a14.464 14.464 0 0 1-3.04-26.56l24.752-13.712a16 16 0 0 1 12.16-1.392l42.032 12.048z m-447.52 280.352a264.112 264.112 0 0 0 468.112-41.76 14.336 14.336 0 0 1 17.968-8.16l20.256 7.008a12.352 12.352 0 0 1 7.44 16.176c-46.368 118.032-160.8 199.072-290.432 199.072-110.96 0-210.768-59.296-266.304-150.432l-12.704 44.288a16 16 0 0 1-7.616 9.584l-24.752 13.712a14.464 14.464 0 0 1-20.928-16.64l38.128-132.96a11.136 11.136 0 0 1 13.76-7.632l132.976 38.128a14.464 14.464 0 0 1 3.04 26.56l-24.768 13.712a16 16 0 0 1-12.16 1.392l-42.016-12.048z\\\" /></svg>\");\n\n//# sourceURL=webpack:///./src/svg/refresh.svg?");

/***/ }),

/***/ "./src/svg/telephone.svg":
/*!*******************************!*\
  !*** ./src/svg/telephone.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"64px\\\" height=\\\"64.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#13227a\\\" d=\\\"M585.2 641.872c-8.256 7.648-20.048 20.72-35.04 38.992l-12.96 15.76-17.648-10.24c-84.352-49.008-152.384-121.216-190.832-204.928l-7.2-15.68 12.576-11.84c17.232-16.176 29.824-28.896 37.632-37.952a122.24 122.24 0 0 0 4.08-4.96 340.08 340.08 0 0 1-12.288-98.624 22.56 22.56 0 0 0-1.296-0.72 47.248 47.248 0 0 0-17.936-4.304l-99.424-3.472c-3.952-0.128-4.432 0.32-4.576 4.272-8.864 254 189.264 466.464 443.264 475.328 3.744 0.128 4.432-0.496 4.56-4.256l3.392-96.8c0.256-7.584 0.272-11.36-0.08-15.552-0.704-8.352-0.32-7.792-1.84-7.728-33.968 1.216-66.112-5.36-102.528-18.976a102.768 102.768 0 0 0-1.856 1.68z m-58.688-7.488c10.208-11.84 18.864-21.056 26.08-27.728 17.44-16.16 29.568-23.152 45.312-13.696 33.6 13.12 61.456 19.264 89.76 18.24 33.072-1.44 48.976 20.88 51.584 51.648 0.576 6.672 0.56 11.84 0.224 21.264l-3.376 96.8c-1.072 30.368-24.08 51.616-54.24 50.56-280.48-9.792-499.328-244.48-489.536-524.96 1.056-30.448 23.776-51.632 54.224-50.576l99.408 3.472c33.888 1.184 66.816 17.824 65.648 51.008a292.64 292.64 0 0 0 12.56 95.088c5.792 18.72-5.136 33.76-44.32 71.248 32.32 62.4 83.712 117.248 146.672 157.632z m18.16-312.24a190.08 190.08 0 0 1 107.36 53.952 190.08 190.08 0 0 1 54.672 112.672 10.576 10.576 0 0 1-10.4 11.808l-15.936 0.16a11.552 11.552 0 0 1-11.584-10.032 152.08 152.08 0 0 0-43.44-87.904 152.08 152.08 0 0 0-82.88-42.688 13.936 13.936 0 0 1-11.648-14.112l0.32-12.448a11.84 11.84 0 0 1 13.536-11.408z m2.704-114.08A304.16 304.16 0 0 1 732.144 296a304.16 304.16 0 0 1 88.688 193.312 9.344 9.344 0 0 1-9.216 10.032l-18.672 0.192a9.92 9.92 0 0 1-10-9.136 266.144 266.144 0 0 0-77.504-167.696 266.128 266.128 0 0 0-160.32-76.8 12.8 12.8 0 0 1-11.456-13.072l0.32-12.976a12.16 12.16 0 0 1 13.392-11.792z m-11.728 239.04c27.12 1.312 47.472 21.184 49.392 48.16 0.096 1.376-1.728 4.272-2.4 4.32-8.848 0.672-25.056 1.792-48.56 3.376h-0.112a4.4 4.4 0 0 1-4.688-4.816c1.664-23.808 2.784-40.224 3.392-49.248 0.032-0.496 2.048-1.84 2.976-1.792z\\\" /></svg>\");\n\n//# sourceURL=webpack:///./src/svg/telephone.svg?");

/***/ }),

/***/ "./src/svg/th_internet.svg":
/*!*********************************!*\
  !*** ./src/svg/th_internet.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"64px\\\" height=\\\"64.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#13227a\\\" d=\\\"M477.536 717.52a76.704 76.704 0 0 1 94.096-1.024c1.424 1.072 2.48 5.072 1.888 5.664-7.92 8.064-22.464 22.72-43.616 43.92l-0.096 0.096a6.56 6.56 0 0 1-9.184-0.096 18009.664 18009.664 0 0 0-44.24-44.512c-0.448-0.448 0.208-3.296 1.152-4.048z m-105.712-120.16a242.976 242.976 0 0 1 145.056-47.648c56.864 0 109.136 19.36 150.416 51.728a13.312 13.312 0 0 1 1.28 19.824l-14.176 14.352a14.752 14.752 0 0 1-19.44 1.376 194.352 194.352 0 0 0-118.08-39.648 194.416 194.416 0 0 0-114 36.624 16 16 0 0 1-20.976-1.856l-11.968-12.48a14.88 14.88 0 0 1 1.888-22.272z m-100.128-104.16a388.64 388.64 0 0 1 245.184-86.368c96.992 0 185.648 35.184 253.536 93.312a11.744 11.744 0 0 1 0.72 17.168l-16.608 16.816a12.672 12.672 0 0 1-17.216 0.784 340 340 0 0 0-220.432-80.464 340.064 340.064 0 0 0-213.44 74.704 16 16 0 0 1-21.584-1.408l-11.584-12.096a15.28 15.28 0 0 1 1.424-22.448z m-106.864-108.528C259.36 304.48 382.368 256 516.88 256c137.36 0 262.72 50.56 358 133.808a14.8 14.8 0 0 1 0.8 21.552l-12.112 12.272a16 16 0 0 1-21.92 0.8l-1.52-1.312c-86.4-74.4-199.488-119.488-323.248-119.488-121.792 0-233.248 43.648-319.104 115.952a15.12 15.12 0 0 1-20.656-1.104l-13.312-13.888a13.696 13.696 0 0 1 1.024-19.92z\\\" /></svg>\");\n\n//# sourceURL=webpack:///./src/svg/th_internet.svg?");

/***/ })

/******/ });