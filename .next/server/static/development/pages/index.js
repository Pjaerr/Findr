module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GlobalStyles.js":
/*!*************************!*\
  !*** ./GlobalStyles.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * This file should contain regular JavaScript objects that hold what would be CSS or SASS
 * variables if we weren't using Styled Components.
 * 
 * This is an alternative to using the <ThemeProvider> that comes with the Styled Components
 * package as to change the theme of the entire webpage/app you would just default export a
 * different themed JavaScript object in this file that will then be used throughout the app. 
 * Obviously ensuring that all of the fields in the object are the same.
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  backgroundColour: '#f5f5f5',
  textColour: '#333333',
  secondaryBackgroundColour: '#ffffff',
  fontFamily: 'Montserrat, sans-serif'
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GlobalStyles */ "./GlobalStyles.js");
/* harmony import */ var _src_components_CardContainer_CardContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CardContainer/CardContainer */ "./src/components/CardContainer/CardContainer.js");
/* harmony import */ var _test_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test-data */ "./test-data.js");
var _jsxFileName = "C:\\Users\\Pjaer\\Desktop\\Findr\\pages\\index.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700');\n\n    body {\n        font-family: ", ";\n        background-color: ", ";\n\n        overflow: hidden;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //Import Styled Components and Global Styles


 //Import Components

 //Import test data


var GloballyInjectedStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"].fontFamily, _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundColour);
var Page = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

var index = function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_test_data__WEBPACK_IMPORTED_MODULE_4__["default"]),
      _useState2 = _slicedToArray(_useState, 2),
      pointsOfInterestData = _useState2[0],
      setPointsOfInterestData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    /* 
        In here we would make our fetch request for the data, do any modifications and
        get an output matching our predefined data strucure. We would then pass that data
        into a setPointsOfInterestData() function call to re-render the component with the
        fetched data. For now we have a static js file that returns an array so we pass it in
        directly. We also want to specify that we only want to run this code if and when the data
        changes, hence the [testData].
    */
    setPointsOfInterestData(_test_data__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }, [_test_data__WEBPACK_IMPORTED_MODULE_4__["default"]]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GloballyInjectedStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Findr"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_CardContainer_CardContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: pointsOfInterestData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/components/Card/Card.js":
/*!*************************************!*\
  !*** ./src/components/Card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Rating_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Rating/Rating */ "./src/components/Rating/Rating.js");
/* harmony import */ var _CardStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStyles */ "./src/components/Card/CardStyles.js");
var _jsxFileName = "C:\\Users\\Pjaer\\Desktop\\Findr\\src\\components\\Card\\Card.js";

 //Components




var Card = function Card(props) {
  var _props$data = props.data,
      name = _props$data.name,
      distance = _props$data.distance,
      rating = _props$data.rating,
      image = _props$data.image;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardStyles__WEBPACK_IMPORTED_MODULE_3__["CardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardStyles__WEBPACK_IMPORTED_MODULE_3__["CardImage"], {
    image: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardStyles__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "(", distance, " Miles)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: rating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

Card.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    distance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Card/CardStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Card/CardStyles.js ***!
  \*******************************************/
/*! exports provided: CardContainer, CardContent, CardImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainer", function() { return CardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../GlobalStyles */ "./GlobalStyles.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 30rem;\n    height: 20rem;\n\n    @media (max-width: 992px)\n    {\n        width: 25rem;\n        height: 15rem;\n    }\n\n    @media (max-width: 768px)\n    {\n        width: 20rem;\n    }\n\n    background-image: url('", "');\n    background-size: cover;\n    background-position: center center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-top: 10px;\n    padding-left: 20px;\n    padding-bottom: 20px;\n\n    @media (max-width: 540px)\n    {\n        h2 {\n            font-size: 1.2em;\n        }\n\n        h4 {\n            font-size: 1em;\n        }\n\n        img {\n            width: 18px;\n            height: 18px;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);\n\n    width: 30rem;\n    height: 30rem;\n\n    @media (max-width: 992px)\n    {\n        width: 25rem;\n        height: 25rem;\n    }\n\n    @media (max-width: 768px)\n    {\n        width: 20rem;\n    }\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n\n    cursor: -webkit-grab;\n\n    &:active {\n        cursor: -webkit-grabbing;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"].secondaryBackgroundColour);
var CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());
var CardImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), function (props) {
  return props.image;
});

/***/ }),

/***/ "./src/components/CardContainer/CardContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/CardContainer/CardContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-swipy */ "react-swipy");
/* harmony import */ var react_swipy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_swipy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var _CardContainerStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardContainerStyles */ "./src/components/CardContainer/CardContainerStyles.js");
var _jsxFileName = "C:\\Users\\Pjaer\\Desktop\\Findr\\src\\components\\CardContainer\\CardContainer.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CardContainer = function CardContainer(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentCard = _useState2[0],
      setCurrentCard = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      cards = _useState4[0],
      setCards = _useState4[1];
  /*
      Using the useEffect hook to recreate the functionality of the
      componentDidMount lifecycle method. The setCards function call will only
      happen if the data prop has changed.
  */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCards(data.map(function (set) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: set,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }));
  }, [data]);
  var direction = '';

  var onAfterSwipe = function onAfterSwipe() {
    if (direction === 'left') {
      dislikeCard();
    } else {
      likeCard();
    }
  };

  var dislikeCard = function dislikeCard() {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  var likeCard = function likeCard() {
    window.open(data[currentCard].externalLink, "_blank");
  };

  if (cards.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardContainerStyles__WEBPACK_IMPORTED_MODULE_3__["CardContainerWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipy__WEBPACK_IMPORTED_MODULE_1___default.a, {
      limit: 300,
      buttons: function buttons(_ref2) {
        var left = _ref2.left,
            right = _ref2.right;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardContainerStyles__WEBPACK_IMPORTED_MODULE_3__["CardContainerButtons"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: left,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "/static/cross-icon.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: right,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "/static/heart-icon.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })));
      },
      onSwipe: function onSwipe(dir) {
        direction = dir;
      },
      onAfterSwipe: onAfterSwipe,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, cards[currentCard]));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\u2639\uFE0F No data found");
};

/* harmony default export */ __webpack_exports__["default"] = (CardContainer);

/***/ }),

/***/ "./src/components/CardContainer/CardContainerStyles.js":
/*!*************************************************************!*\
  !*** ./src/components/CardContainer/CardContainerStyles.js ***!
  \*************************************************************/
/*! exports provided: CardContainerButtons, CardContainerWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainerButtons", function() { return CardContainerButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainerWrapper", function() { return CardContainerWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../GlobalStyles */ "./GlobalStyles.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n\n    margin-right: 3.5rem;\n    margin-left: 3.5rem;\n    margin-top: 0.6rem;\n\n    @media (min-width: 540px)\n    {\n        margin-top: 1rem;\n    }\n\n    button {\n        width: 3.2rem;\n        height: 3.2rem;\n        border-radius: 50%;\n\n        background: ", ";\n        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);\n        border: none;\n\n        -webkit-appearance: button; /* for input */\n        -webkit-user-select: none; /* for button */\n       -moz-user-select: none;\n        -ms-user-select: none;\n\n        display: flex;\n        justify-content: center;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CardContainerButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"].secondaryBackgroundColour);
var CardContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());

/***/ }),

/***/ "./src/components/Rating/Rating.js":
/*!*****************************************!*\
  !*** ./src/components/Rating/Rating.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RatingStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingStyles */ "./src/components/Rating/RatingStyles.js");
var _jsxFileName = "C:\\Users\\Pjaer\\Desktop\\Findr\\src\\components\\Rating\\Rating.js";



var renderStars = function renderStars(number) {
  var stars = [];
  var fullStars = 0;
  var hasHalfStar = false;
  /*Set the number of full stars to be equal to the current rating
  minus the decimal amount gained as a remainder when dividing the number
  by 1. ie: 4.4 % 1 would give 0.4, 4.4 - 0.4 = 4. If the number is not
  a decimal number, the modulus would give 0 and thus nothing changes.*/

  fullStars = number - number % 1;
  /*If the number contained a decimal, use 1 half star but only if the amount
  is more than or equal to .5*/

  number % 1 >= 0.5 ? hasHalfStar = true : hasHalfStar = false;

  for (var i = 0; i < fullStars; i++) {
    stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      key: "Star" + i,
      src: "/static/star-icon.svg",
      alt: "Star Icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }

  if (hasHalfStar) {
    stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      key: "StarHalf",
      src: "/static/half-star-icon.svg",
      alt: "Star Icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  }

  return stars;
};

var Rating = function Rating(_ref) {
  var number = _ref.number;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RatingStyles__WEBPACK_IMPORTED_MODULE_1__["RatingContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, renderStars(number));
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/components/Rating/RatingStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Rating/RatingStyles.js ***!
  \***********************************************/
/*! exports provided: RatingContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingContainer", function() { return RatingContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    \n    img {\n        margin-left: 5px;\n        margin-right: 5px;\n\n        width: 20px;\n        height: 20px;\n\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var RatingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./test-data.js":
/*!**********************!*\
  !*** ./test-data.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "Big Ben",
  distance: 4,
  rating: 4,
  image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00514390_hsmjfe.jpg",
  externalLink: "https://google.co.uk"
}, {
  name: "Eiffel Tower",
  distance: 243,
  rating: 4,
  image: "https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg",
  externalLink: "https://google.co.uk"
}, {
  name: "Petronas Twin Towers",
  distance: 16000,
  rating: 2.3,
  image: "https://2.bp.blogspot.com/-r-UjhIS_PnE/Wa-jeZ4pYyI/AAAAAAAAd_g/2Vm4ETMGfGsjU-hKsCISkAFQ_rCGNYJQACLcBGAs/s1600/kuala%2Blumpur%2Btour-103-2.jpg",
  externalLink: "https://google.co.uk"
}, {
  name: "Moscow Kremlin",
  distance: 9085,
  rating: 5,
  image: "https://www.dookinternational.com/blog/wp-content/uploads/2016/11/Moscow-Kremlin-2.jpg",
  externalLink: "https://google.co.uk"
}]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-swipy":
/*!******************************!*\
  !*** external "react-swipy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipy");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map