webpackJsonp([8],{

/***/ 119:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./app/anotherapp/react/js/Credits.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 5);
var _jsxFileName = "/home/tcnc/mysite-django-react/app/anotherapp/react/js/Credits.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Credits = function (_Component) {
  _inherits(Credits, _Component);

  function Credits() {
    _classCallCheck(this, Credits);

    return _possibleConstructorReturn(this, (Credits.__proto__ || Object.getPrototypeOf(Credits)).apply(this, arguments));
  }

  _createClass(Credits, [{
    key: "render",
    value: function render() {
      var header = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["c" /* TableHeaders */], { header: [{ "head": "Credits", "colspan": "2" }], className: "main-table-header", key: "header", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      });
      var body = [];
      body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], { body: [{ "data": "Inspiration", "colSpan": "1" }, { "data": "dhilipsiva.com", "colSpan": "1" }], key: "email", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], { body: [{ "data": "Time and Resources", "colSpan": "1" }, { "data": "Tesa Scribos GmbH", "colSpan": "1" }], key: "phone", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], { body: [{ "data": "Technologies", "colSpan": "1" }, { "data": "python/Django, React JS", "colSpan": "1" }], key: "body", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "padded-div", __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["e" /* InfoTable */], { theaders: header, tbody: body, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        })
      );
    }
  }]);

  return Credits;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Credits, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: this
}), document.getElementById('credits-react-root'));

/***/ })

},[119]);