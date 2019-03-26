var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["blocksonly"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/controls/controls.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/controls/controls.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controls_controls-container_2xinB {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n}\n", ""]);

// exports
exports.locals = {
	"controls-container": "controls_controls-container_2xinB",
	"controlsContainer": "controls_controls-container_2xinB"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/turbo-mode/turbo-mode.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/turbo-mode/turbo-mode.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* #4C97FF */ /* #3373CC */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* #0FBD8C */ /* #0B8E69 */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ .turbo-mode_turbo-container_2ZNcq {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n} .turbo-mode_turbo-icon_fjr8U {\n    margin: 0.25rem;\n} .turbo-mode_turbo-label_-1oMs {\n    font-size: 0.625rem;\n    font-weight: bold;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    color: hsla(38, 100%, 55%, 1);\n    white-space: nowrap;\n}\n", ""]);

// exports
exports.locals = {
	"turbo-container": "turbo-mode_turbo-container_2ZNcq",
	"turboContainer": "turbo-mode_turbo-container_2ZNcq",
	"turbo-icon": "turbo-mode_turbo-icon_fjr8U",
	"turboIcon": "turbo-mode_turbo-icon_fjr8U",
	"turbo-label": "turbo-mode_turbo-label_-1oMs",
	"turboLabel": "turbo-mode_turbo-label_-1oMs"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/blocks-only.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/blocks-only.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocks-only_controls_2GEvs {\n    position: absolute;\n    z-index: 2;\n    top: 10px;\n    right: 15px;\n}\n", ""]);

// exports
exports.locals = {
	"controls": "blocks-only_controls_2GEvs"
};

/***/ }),

/***/ "./src/components/controls/controls.css":
/*!**********************************************!*\
  !*** ./src/components/controls/controls.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./controls.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/controls/controls.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/controls/controls.jsx":
/*!**********************************************!*\
  !*** ./src/components/controls/controls.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _green_flag_green_flag_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../green-flag/green-flag.jsx */ "./src/components/green-flag/green-flag.jsx");
/* harmony import */ var _green_flag_green_flag_jsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_green_flag_green_flag_jsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stop_all_stop_all_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stop-all/stop-all.jsx */ "./src/components/stop-all/stop-all.jsx");
/* harmony import */ var _stop_all_stop_all_jsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stop_all_stop_all_jsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _turbo_mode_turbo_mode_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../turbo-mode/turbo-mode.jsx */ "./src/components/turbo-mode/turbo-mode.jsx");
/* harmony import */ var _controls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls.css */ "./src/components/controls/controls.css");
/* harmony import */ var _controls_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_controls_css__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
  goTitle: {
    "id": "gui.controls.go",
    "defaultMessage": "Go"
  },
  stopTitle: {
    "id": "gui.controls.stop",
    "defaultMessage": "Stop"
  }
});

var Controls = function Controls(props) {
  var active = props.active,
      className = props.className,
      intl = props.intl,
      onGreenFlagClick = props.onGreenFlagClick,
      onStopAllClick = props.onStopAllClick,
      turbo = props.turbo,
      componentProps = _objectWithoutProperties(props, ["active", "className", "intl", "onGreenFlagClick", "onStopAllClick", "turbo"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_controls_css__WEBPACK_IMPORTED_MODULE_7___default.a.controlsContainer, className)
  }, componentProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_green_flag_green_flag_jsx__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: active,
    title: intl.formatMessage(messages.goTitle),
    onClick: onGreenFlagClick
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stop_all_stop_all_jsx__WEBPACK_IMPORTED_MODULE_5___default.a, {
    active: active,
    title: intl.formatMessage(messages.stopTitle),
    onClick: onStopAllClick
  }), turbo ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_turbo_mode_turbo_mode_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null);
};

Controls.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  intl: react_intl__WEBPACK_IMPORTED_MODULE_3__["intlShape"].isRequired,
  onGreenFlagClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onStopAllClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  turbo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Controls.defaultProps = {
  active: false,
  turbo: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(Controls));

/***/ }),

/***/ "./src/components/green-flag/green-flag.jsx":
/*!**************************************************!*\
  !*** ./src/components/green-flag/green-flag.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/serene/Desktop/Cognimates/cognimates-gui/src/components/green-flag/green-flag.jsx: Unexpected token (14:8)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m        onClick\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m        title\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m        \u001b[33m...\u001b[39mcomponentProps\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m    } \u001b[33m=\u001b[39m props\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m\u001b[0m\n    at raise (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:3831:17)\n    at unexpected (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5143:16)\n    at parseIdentifierName (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6970:18)\n    at parseIdentifier (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6948:23)\n    at parseMaybePrivateName (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6312:19)\n    at parsePropertyName (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6768:98)\n    at parseObj (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6667:14)\n    at parseBindingAtom (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5402:21)\n    at parseVarId (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7905:20)\n    at parseVar (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7877:12)\n    at parseVarStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7714:10)\n    at parseStatementContent (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7310:21)\n    at parseStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7243:17)\n    at parseBlockOrModuleBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7810:25)\n    at parseBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7797:10)\n    at parseBlock (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7786:10)\n    at parseFunctionBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6876:24)\n    at parseFunctionBodyAndFinish (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6860:10)\n    at withTopicForbiddingContext (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7945:12)\n    at withTopicForbiddingContext (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7150:14)\n    at parseFunction (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7944:10)\n    at parseFunctionExpression (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6326:17)\n    at parseExprAtom (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6232:21)\n    at parseExprAtom (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:3552:20)\n    at parseExprSubscripts (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5862:23)\n    at parseMaybeUnary (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5842:21)\n    at parseExprOps (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5729:23)\n    at parseMaybeConditional (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5702:23)\n    at parseMaybeAssign (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5647:21)\n    at parseVar (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7880:26)\n    at parseVarStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7714:10)\n    at parseStatementContent (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7310:21)\n    at parseStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7243:17)\n    at parseBlockOrModuleBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7810:25)\n    at parseBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7797:10)\n    at parseTopLevel (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7181:10)");

/***/ }),

/***/ "./src/components/stop-all/stop-all.jsx":
/*!**********************************************!*\
  !*** ./src/components/stop-all/stop-all.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/serene/Desktop/Cognimates/cognimates-gui/src/components/stop-all/stop-all.jsx: Unexpected token (14:8)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m        onClick\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m        title\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m        \u001b[33m...\u001b[39mcomponentProps\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m    } \u001b[33m=\u001b[39m props\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m\u001b[0m\n    at raise (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:3831:17)\n    at unexpected (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5143:16)\n    at parseIdentifierName (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6970:18)\n    at parseIdentifier (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6948:23)\n    at parseMaybePrivateName (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6312:19)\n    at parsePropertyName (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6768:98)\n    at parseObj (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6667:14)\n    at parseBindingAtom (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5402:21)\n    at parseVarId (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7905:20)\n    at parseVar (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7877:12)\n    at parseVarStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7714:10)\n    at parseStatementContent (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7310:21)\n    at parseStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7243:17)\n    at parseBlockOrModuleBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7810:25)\n    at parseBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7797:10)\n    at parseBlock (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7786:10)\n    at parseFunctionBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6876:24)\n    at parseFunctionBodyAndFinish (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6860:10)\n    at withTopicForbiddingContext (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7945:12)\n    at withTopicForbiddingContext (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7150:14)\n    at parseFunction (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7944:10)\n    at parseFunctionExpression (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6326:17)\n    at parseExprAtom (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:6232:21)\n    at parseExprAtom (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:3552:20)\n    at parseExprSubscripts (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5862:23)\n    at parseMaybeUnary (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5842:21)\n    at parseExprOps (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5729:23)\n    at parseMaybeConditional (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5702:23)\n    at parseMaybeAssign (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:5647:21)\n    at parseVar (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7880:26)\n    at parseVarStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7714:10)\n    at parseStatementContent (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7310:21)\n    at parseStatement (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7243:17)\n    at parseBlockOrModuleBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7810:25)\n    at parseBlockBody (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7797:10)\n    at parseTopLevel (/Users/serene/Desktop/Cognimates/cognimates-gui/node_modules/@babel/parser/lib/index.js:7181:10)");

/***/ }),

/***/ "./src/components/turbo-mode/icon--turbo.svg":
/*!***************************************************!*\
  !*** ./src/components/turbo-mode/icon--turbo.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/f2457825850317e66ef2128504613c30.svg";

/***/ }),

/***/ "./src/components/turbo-mode/turbo-mode.css":
/*!**************************************************!*\
  !*** ./src/components/turbo-mode/turbo-mode.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./turbo-mode.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/turbo-mode/turbo-mode.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/turbo-mode/turbo-mode.jsx":
/*!**************************************************!*\
  !*** ./src/components/turbo-mode/turbo-mode.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icon_turbo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon--turbo.svg */ "./src/components/turbo-mode/icon--turbo.svg");
/* harmony import */ var _icon_turbo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_turbo_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _turbo_mode_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turbo-mode.css */ "./src/components/turbo-mode/turbo-mode.css");
/* harmony import */ var _turbo_mode_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turbo_mode_css__WEBPACK_IMPORTED_MODULE_3__);





var TurboMode = function TurboMode() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _turbo_mode_css__WEBPACK_IMPORTED_MODULE_3___default.a.turboContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _turbo_mode_css__WEBPACK_IMPORTED_MODULE_3___default.a.turboIcon,
    src: _icon_turbo_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _turbo_mode_css__WEBPACK_IMPORTED_MODULE_3___default.a.turboLabel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    defaultMessage: "Turbo Mode",
    id: "gui.turboMode.active"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TurboMode);

/***/ }),

/***/ "./src/containers/controls.jsx":
/*!*************************************!*\
  !*** ./src/containers/controls.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scratch_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scratch-vm */ "./node_modules/scratch-vm/src/index.js");
/* harmony import */ var scratch_vm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scratch_vm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");
/* harmony import */ var _components_controls_controls_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/controls.jsx */ "./src/components/controls/controls.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Controls =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Controls, _React$Component);

  function Controls(props) {
    var _this;

    _classCallCheck(this, Controls);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Controls).call(this, props));
    lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default()(_assertThisInitialized(_this), ['handleGreenFlagClick', 'handleStopAllClick']);
    return _this;
  }

  _createClass(Controls, [{
    key: "handleGreenFlagClick",
    value: function handleGreenFlagClick(e) {
      e.preventDefault();

      if (e.shiftKey) {
        this.props.vm.setTurboMode(!this.props.turbo);
      } else {
        if (!this.props.isStarted) {
          this.props.vm.start();
        }

        this.props.vm.greenFlag();
        _lib_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].event({
          category: 'general',
          action: 'Green Flag'
        });
      }
    }
  }, {
    key: "handleStopAllClick",
    value: function handleStopAllClick(e) {
      e.preventDefault();
      this.props.vm.stopAll();
      _lib_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].event({
        category: 'general',
        action: 'Stop Button'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vm = _this$props.vm,
          isStarted = _this$props.isStarted,
          projectRunning = _this$props.projectRunning,
          turbo = _this$props.turbo,
          props = _objectWithoutProperties(_this$props, ["vm", "isStarted", "projectRunning", "turbo"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_controls_controls_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
        active: projectRunning,
        turbo: turbo,
        onGreenFlagClick: this.handleGreenFlagClick,
        onStopAllClick: this.handleStopAllClick
      }));
    }
  }]);

  return Controls;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Controls.propTypes = {
  isStarted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  projectRunning: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  turbo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  vm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(scratch_vm__WEBPACK_IMPORTED_MODULE_3___default.a)
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isStarted: state.scratchGui.vmStatus.running,
    projectRunning: state.scratchGui.vmStatus.running,
    turbo: state.scratchGui.vmStatus.turbo
  };
}; // no-op function to prevent dispatch prop being passed to component


var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Controls));

/***/ }),

/***/ "./src/playground/blocks-only.css":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./blocks-only.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/blocks-only.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/blocks-only.jsx":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.jsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/controls.jsx */ "./src/containers/controls.jsx");
/* harmony import */ var _containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/blocks.jsx */ "./src/containers/blocks.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks-only.css */ "./src/playground/blocks-only.css");
/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_only_css__WEBPACK_IMPORTED_MODULE_8__);










var mapStateToProps = function mapStateToProps(state) {
  return {
    vm: state.scratchGui.vm
  };
};

var VMBlocks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(_containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);
var VMControls = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(_containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

var BlocksOnly = function BlocksOnly(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VMBlocks, {
    grow: 1,
    options: {
      media: "static/blocks-media/"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VMControls, {
    className: _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default.a.controls
  }));
};

var App = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(BlocksOnly));
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), appTarget);

/***/ })

},[["./src/playground/blocks-only.jsx","lib.min"]]]);
//# sourceMappingURL=blocksonly.js.map