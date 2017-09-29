webpackJsonp([6],{

/***/ 121:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./app/anotherapp/react/js/Login.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/home/tcnc/mysite-django-react/app/anotherapp/react/js/Login.js",
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Inputs = function Inputs(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "input-form", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: _this
      },
      props.label
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
      type: props.inputType,
      name: props.inputName,
      defaultValue: props.inputValue,
      onChange: props.onValueChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: _this
    })
  );
};

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this2 = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this2.onClickLogin = _this2.onClickLogin.bind(_this2);
    _this2.onValueChange = _this2.onValueChange.bind(_this2);
    _this2.state = {
      username: "manju",
      password: "Qwerty1.",
      isLoggedIn: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].isLoggedIn()
    };
    return _this2;
  }

  _createClass(Login, [{
    key: "onClickLogin",
    value: function onClickLogin(e) {
      var _this3 = this;

      var data = new FormData();
      data.append("data", JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }));

      fetch("http://localhost:8000/login/", {
        method: "post",
        credentials: "include",
        body: data,
        headers: {
          Accept: "application/json"
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      }).then(function (json) {
        window.localStorage.setItem("isLoggedIn", true);
        window.localStorage.setItem("username", json.username);
        _this3.setState({ isLoggedIn: true });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(e) {
      var inputName = e.currentTarget.name;
      var inputValue = e.currentTarget.value;
      this.setState(_defineProperty({}, inputName, inputValue));
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      if (!isLoggedIn) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { id: "login-form", __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inputs, {
            label: "Username : ",
            inputType: "text",
            inputName: "username",
            inputValue: this.state.username,
            onValueChange: this.onValueChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inputs, {
            label: "Password : ",
            inputType: "password",
            inputName: "password",
            inputValue: this.state.password,
            onValueChange: this.onValueChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "form-submit-btn", __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              className: "themed-btn",
              type: "button",
              onClick: this.onClickLogin,
              name: "login",
              value: "Login",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            })
          )
        );
      } else {
        window.location.pathname = "/";
        return null;
      }
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Login, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: this
}), document.getElementById('login-react-root'));

/***/ })

},[121]);