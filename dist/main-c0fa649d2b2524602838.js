"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n  color: black;\\n  background-color: whitesmoke;\\n}\\n\\nul {\\n  list-style: none;\\n  padding: 0;\\n}\\n\\nh1 {\\n  text-align: center;\\n  color: black;\\n  margin: 0 auto;\\n  padding-top: 20vh;\\n  font-size: 35px;\\n}\\n\\nbutton,\\ninput {\\n  background-color: transparent;\\n  border: none;\\n  font-size: 1rem;\\n}\\n\\n.box {\\n  width: 45%;\\n  margin: 0 auto;\\n  padding: 3rem;\\n  background-color: white;\\n}\\n\\n.task {\\n  display: flex;\\n  gap: 1rem;\\n  align-items: center;\\n  width: 100%;\\n  padding: 0.5rem;\\n}\\n\\n.text {\\n  flex: 1;\\n}\\n\\n.done {\\n  text-decoration: line-through;\\n  color: black;\\n}\\n\\n.head {\\n  display: flex;\\n}\\n\\n.head h2 {\\n  flex: 1;\\n}\\n\\n.edit {\\n  display: none;\\n  flex: 1;\\n  outline: 1px solid greenyellow;\\n}\\n\\n#alert {\\n  display: none;\\n  padding: 0.8rem;\\n  background-color: #c30;\\n  color: whitesmoke;\\n}\\n\\n#container {\\n  width: 100%;\\n  display: flex;\\n  gap: 1rem;\\n}\\n\\n#clear {\\n  width: 100%;\\n}\\n\\n#add-task,\\n#clear {\\n  color: black;\\n  background-color: whitesmoke;\\n  padding: 0.8rem;\\n  outline: 1px solid black;\\n}\\n\\n#add-task:active,\\n#clear:active {\\n  color: whitesmoke;\\n  background-color: gray;\\n  padding: 0.7rem;\\n  border: 0.1rem solid gray;\\n}\\n\\n#new-task {\\n  flex: 1;\\n  color: black;\\n  background-color: whitesmoke;\\n  padding: 0.7rem;\\n  border: 0.1rem solid black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_create_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-list.js */ \"./src/modules/create-list.js\");\n/* harmony import */ var _modules_add_task_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-task-event.js */ \"./src/modules/add-task-event.js\");\n/* harmony import */ var _modules_get_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/get-data.js */ \"./src/modules/get-data.js\");\n/* harmony import */ var _modules_clear_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clear-list.js */ \"./src/modules/clear-list.js\");\n\n\n\n\n\n\n(0,_modules_get_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().forEach((task) => (0,_modules_create_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task));\n(0,_modules_clear_list_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_add_task_event_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-task-event.js":
/*!***************************************!*\
  !*** ./src/modules/add-task-event.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-task.js */ \"./src/modules/add-task.js\");\n\n\nconst button = document.getElementById('add-task');\n\nconst addTaskEvent = () => {\n  button.addEventListener('click', _add_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskEvent);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/add-task-event.js?");

/***/ }),

/***/ "./src/modules/add-task.js":
/*!*********************************!*\
  !*** ./src/modules/add-task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _create_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-list.js */ \"./src/modules/create-list.js\");\n/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-data.js */ \"./src/modules/get-data.js\");\n\n\n\n\n// Selectors\nconst addTask = () => {\n  const input = document.getElementById('new-task');\n  const alert = document.getElementById('alert');\n  const toDoTasks = (0,_get_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  if (input.value) {\n    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](input.value, toDoTasks.length + 1);\n    (0,_create_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task);\n    toDoTasks.push(task);\n    // Local Storage\n    localStorage.setItem('toDoData', JSON.stringify(toDoTasks));\n    input.value = '';\n  } else {\n    alert.innerHTML = 'Empty field!';\n    alert.style.display = 'block';\n    setTimeout(() => {\n      alert.style.display = 'none';\n    }, 2500);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/add-task.js?");

/***/ }),

/***/ "./src/modules/clear-list.js":
/*!***********************************!*\
  !*** ./src/modules/clear-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-task.js */ \"./src/modules/remove-task.js\");\n\n\nconst clearList = () => {\n  const clearButton = document.getElementById('clear');\n  clearButton.addEventListener('click', () => {\n    const tasks = document.querySelectorAll('.task');\n    const tasksToBeRemoved = [...tasks].filter((task) => {\n      const checkbox = task.querySelector('.check');\n      return checkbox.checked;\n    });\n    tasksToBeRemoved.forEach((task) => {\n      const removeButton = task.querySelector('.remove');\n      (0,_remove_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(removeButton);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearList);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/clear-list.js?");

/***/ }),

/***/ "./src/modules/completed.js":
/*!**********************************!*\
  !*** ./src/modules/completed.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data.js */ \"./src/modules/get-data.js\");\n\n\nconst completed = (liId, completed = false) => {\n  const toDoTasks = (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const index = Number(liId.substring(4));\n  toDoTasks[index - 1].completed = completed;\n  // set data on local storage\n  localStorage.setItem('toDoData', JSON.stringify(toDoTasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completed);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/completed.js?");

/***/ }),

/***/ "./src/modules/create-list.js":
/*!************************************!*\
  !*** ./src/modules/create-list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _edit_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-task.js */ \"./src/modules/edit-task.js\");\n/* harmony import */ var _remove_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-task.js */ \"./src/modules/remove-task.js\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed.js */ \"./src/modules/completed.js\");\n\n\n\n\nconst createLi = (task) => {\n  const taskList = document.getElementById('task-list');\n  // Set selectors\n  const li = document.createElement('li');\n  const checkbox = document.createElement('input');\n  const div = document.createElement('div');\n  const button = document.createElement('button');\n  const removeButton = document.createElement('button');\n  const textInput = document.createElement('input');\n\n  // Set List element id and class\n  li.setAttribute('id', `task${task.index}`);\n  li.classList.add('task');\n\n  // Set checkbox attributes\n  checkbox.checked = task.completed;\n  checkbox.classList.add('check');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.setAttribute('name', `check${task.index}`);\n  checkbox.setAttribute('id', `check${task.index}`);\n\n  // Set text input attributes\n  textInput.classList.add('edit');\n  textInput.setAttribute('type', 'text');\n  textInput.setAttribute('name', `text${task.index}`);\n  textInput.setAttribute('id', `text${task.index}`);\n  textInput.value = task.description;\n\n  // Set div classes and content\n  div.classList.add('text');\n  div.innerHTML = task.description;\n  if (checkbox.checked) {\n    div.classList.add('done');\n  }\n\n  // Set options button class and content\n  button.classList.add('options');\n  button.innerHTML = '<i class=\"fa-solid fa-check\"></i>';\n\n  // Set remove button class and content\n  removeButton.classList.add('remove');\n  removeButton.innerHTML = '<i class=\"fa-solid fa-trash-can\"></i>';\n\n  // Append all elements to li in order\n  li.appendChild(checkbox);\n  li.appendChild(div);\n  li.appendChild(textInput);\n  li.appendChild(button);\n  li.appendChild(removeButton);\n\n  taskList.appendChild(li);\n\n  // create functions for specific behaviors\n\n  const toggleDiv = () => {\n    div.classList.toggle('done');\n    (0,_completed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(li.id, checkbox.checked);\n  };\n\n  const changeToInput = () => {\n    div.style.display = 'none';\n    textInput.style.display = 'inherit';\n  };\n\n  const changeToDiv = () => {\n    div.style.display = 'inherit';\n    textInput.style.display = 'none';\n  };\n\n  const editDiv = () => {\n    div.innerHTML = textInput.value;\n    (0,_edit_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(li.id, textInput.value, checkbox.checked);\n    changeToDiv();\n  };\n\n  // add Eventlisteners to elements\n  // add event listener to the checkbox , change\n  checkbox.addEventListener('change', toggleDiv);\n  div.addEventListener('click', changeToInput);\n  textInput.addEventListener('change', editDiv);\n  textInput.addEventListener('focusout', changeToDiv);\n  removeButton.addEventListener('click', () => {\n    (0,_remove_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(removeButton);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLi);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/create-list.js?");

/***/ }),

/***/ "./src/modules/edit-task.js":
/*!**********************************!*\
  !*** ./src/modules/edit-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data.js */ \"./src/modules/get-data.js\");\n\n\nconst editTask = (liId, description = '', completed = false) => {\n  const toDoTasks = (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const index = Number(liId.substring(4));\n  if (description) {\n    toDoTasks[index - 1].description = description;\n  }\n  toDoTasks[index - 1].completed = completed;\n  // set data on local storage\n  localStorage.setItem('toDoData', JSON.stringify(toDoTasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/edit-task.js?");

/***/ }),

/***/ "./src/modules/get-data.js":
/*!*********************************!*\
  !*** ./src/modules/get-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n  const data = localStorage.getItem('toDoData');\n  if (data) {\n    return JSON.parse(data);\n  }\n  return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get-data.js?");

/***/ }),

/***/ "./src/modules/remove-task.js":
/*!************************************!*\
  !*** ./src/modules/remove-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-index.js */ \"./src/modules/update-index.js\");\n\n\nconst removeTask = (target) => {\n  target.parentElement.remove();\n  (0,_update_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/remove-task.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, index, completed = false) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/update-index.js":
/*!*************************************!*\
  !*** ./src/modules/update-index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\nconst updateIndex = () => {\n  const allLis = document.querySelectorAll('.task');\n  const newToDoList = [];\n  allLis.forEach((li, index) => {\n    // Change the li id\n    const newIndex = index + 1;\n    li.setAttribute('id', `task${newIndex}`);\n\n    // Obtain the elements of the current li\n    const checkbox = li.querySelector('.check');\n    const div = li.querySelector('.text');\n    const textInput = li.querySelector('.edit');\n\n    // Change the unique attributes of the elements\n    checkbox.setAttribute('name', `check${newIndex}`);\n    checkbox.setAttribute('id', `check${newIndex}`);\n\n    textInput.setAttribute('name', `text${newIndex}`);\n    textInput.setAttribute('id', `text${newIndex}`);\n\n    newToDoList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](div.innerHTML, newIndex, checkbox.checked));\n  });\n  localStorage.setItem('toDoData', JSON.stringify(newToDoList));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateIndex);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/update-index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);