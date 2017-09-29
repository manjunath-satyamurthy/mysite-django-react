webpackJsonp([0],{

/***/ 110:
/* no static exports found */
/* exports used: default */
/*!**************************************************!*\
  !*** ./app/main/static/main/images/facebook.png ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = "static/main/images/facebook.png";

/***/ }),

/***/ 111:
/* no static exports found */
/* exports used: default */
/*!************************************************!*\
  !*** ./app/main/static/main/images/github.png ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = "static/main/images/github.png";

/***/ }),

/***/ 112:
/* no static exports found */
/* exports used: default */
/*!*****************************************************!*\
  !*** ./app/main/static/main/images/google-plus.gif ***!
  \*****************************************************/
/***/ (function(module, exports) {

module.exports = "static/main/images/google-plus.gif";

/***/ }),

/***/ 113:
/* no static exports found */
/* exports used: default */
/*!***************************************************!*\
  !*** ./app/main/static/main/images/linked-in.png ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = "static/main/images/linked-in.png";

/***/ }),

/***/ 114:
/* no static exports found */
/* exports used: default */
/*!*******************************************************!*\
  !*** ./app/main/static/main/images/stackoverflow.svg ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = "static/main/images/stackoverflow.svg";

/***/ }),

/***/ 115:
/* no static exports found */
/* exports used: default */
/*!*************************************************!*\
  !*** ./app/main/static/main/images/twitter.png ***!
  \*************************************************/
/***/ (function(module, exports) {

module.exports = "static/main/images/twitter.png";

/***/ }),

/***/ 127:
/* exports provided: default */
/* all exports used */
/*!***********************************!*\
  !*** ./app/main/react/js/Home.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mainDjango_images_facebook_png__ = __webpack_require__(/*! mainDjango/images/facebook.png */ 110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mainDjango_images_facebook_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mainDjango_images_facebook_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mainDjango_images_github_png__ = __webpack_require__(/*! mainDjango/images/github.png */ 111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mainDjango_images_github_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mainDjango_images_github_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mainDjango_images_google_plus_gif__ = __webpack_require__(/*! mainDjango/images/google-plus.gif */ 112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mainDjango_images_google_plus_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mainDjango_images_google_plus_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mainDjango_images_linked_in_png__ = __webpack_require__(/*! mainDjango/images/linked-in.png */ 113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mainDjango_images_linked_in_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mainDjango_images_linked_in_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mainDjango_images_twitter_png__ = __webpack_require__(/*! mainDjango/images/twitter.png */ 115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mainDjango_images_twitter_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mainDjango_images_twitter_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mainDjango_images_stackoverflow_svg__ = __webpack_require__(/*! mainDjango/images/stackoverflow.svg */ 114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mainDjango_images_stackoverflow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mainDjango_images_stackoverflow_svg__);
var _jsxFileName = "/home/tcnc/mysite-django-react/app/main/react/js/Home.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var ProfilePhoto = function (_Component) {
  _inherits(ProfilePhoto, _Component);

  function ProfilePhoto() {
    _classCallCheck(this, ProfilePhoto);

    return _possibleConstructorReturn(this, (ProfilePhoto.__proto__ || Object.getPrototypeOf(ProfilePhoto)).apply(this, arguments));
  }

  _createClass(ProfilePhoto, [{
    key: "render",
    value: function render() {
      var image = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", src: this.props.profileImgURL, id: this.props.photoType, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
      var uploadProfilePhoto = null;
      if (this.props.isLoggedIn & this.props.isEdited) {
        uploadProfilePhoto = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "editable-photo", __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            type: "file",
            className: "themed-btn",
            id: "upload-btn",
            onChange: this.props.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          })
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        image,
        " ",
        uploadProfilePhoto
      );
    }
  }]);

  return ProfilePhoto;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var MainHeading = function (_Component2) {
  _inherits(MainHeading, _Component2);

  function MainHeading() {
    _classCallCheck(this, MainHeading);

    return _possibleConstructorReturn(this, (MainHeading.__proto__ || Object.getPrototypeOf(MainHeading)).apply(this, arguments));
  }

  _createClass(MainHeading, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h1",
        {
          className: this.props.headingType,
          id: this.props.id ? this.props.id : "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        },
        this.props.content
      );
    }
  }]);

  return MainHeading;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var TextDescription = function (_Component3) {
  _inherits(TextDescription, _Component3);

  function TextDescription() {
    _classCallCheck(this, TextDescription);

    return _possibleConstructorReturn(this, (TextDescription.__proto__ || Object.getPrototypeOf(TextDescription)).apply(this, arguments));
  }

  _createClass(TextDescription, [{
    key: "render",
    value: function render() {
      var description = null;
      if (this.props.isLoggedIn & this.props.isEdited) {
        description = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
          id: "description-input",
          rows: "15",
          onChang: this.props.onChange,
          defaultValue: this.props.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        });
      } else {
        description = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: this.props.descriptionType, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          this.props.text
        );
      }

      return description;
    }
  }]);

  return TextDescription;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var ProfileLinks = function (_Component4) {
  _inherits(ProfileLinks, _Component4);

  function ProfileLinks() {
    _classCallCheck(this, ProfileLinks);

    return _possibleConstructorReturn(this, (ProfileLinks.__proto__ || Object.getPrototypeOf(ProfileLinks)).apply(this, arguments));
  }

  _createClass(ProfileLinks, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "table",
        { className: "profile-links", __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tbody",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "tr",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://github.com/manjunath-satyamurthy",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", width: "40", src: __WEBPACK_IMPORTED_MODULE_4_mainDjango_images_github_png___default.a, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://stackoverflow.com/users/3536784/manjunath-satyamurthy",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", width: "40", src: __WEBPACK_IMPORTED_MODULE_8_mainDjango_images_stackoverflow_svg___default.a, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://www.facebook.com/manjunathsatyamurthy",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", width: "40", src: __WEBPACK_IMPORTED_MODULE_3_mainDjango_images_facebook_png___default.a, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://plus.google.com/+ManjunathSatyamurthy",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", width: "40", src: __WEBPACK_IMPORTED_MODULE_5_mainDjango_images_google_plus_gif___default.a, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://www.linkedin.com/in/manjunath-satyamurthy-a4408575/",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", width: "40", src: __WEBPACK_IMPORTED_MODULE_6_mainDjango_images_linked_in_png___default.a, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://twitter.com/ManjunathSatya",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "", width: "40", src: __WEBPACK_IMPORTED_MODULE_7_mainDjango_images_twitter_png___default.a, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                  },
                  __self: this
                })
              )
            )
          )
        )
      );
    }
  }]);

  return ProfileLinks;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Home = function (_Component5) {
  _inherits(Home, _Component5);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this5 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this5.state = {
      isLoggedIn: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].isLoggedIn(),
      isEdited: false,
      profileImageURL: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].profileImageURL(),
      uploadFile: null,
      updateDescription: null,
      description: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].description(),
      shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldHomepageLoad()
    };

    _this5.onEditClick = _this5.onEditClick.bind(_this5);
    _this5.onSaveClick = _this5.onSaveClick.bind(_this5);
    _this5.onProfileImageChange = _this5.onProfileImageChange.bind(_this5);
    _this5.onDescriptionChange = _this5.onDescriptionChange.bind(_this5);
    return _this5;
  }

  _createClass(Home, [{
    key: "onEditClick",
    value: function onEditClick(e) {
      this.setState({
        isEdited: !this.state.isEdited
      });
    }
  }, {
    key: "onSaveClick",
    value: function onSaveClick(e) {
      var _this6 = this;

      var data = new FormData();
      if (this.state.updateDescription) {
        data.append("data", JSON.stringify({
          description: this.state.updateDescription
        }));
      }
      if (this.state.uploadFile) {
        data.append("photo", this.state.uploadFile);
      }

      fetch("http://localhost:8000/update_home_page/", {
        method: "POST",
        credentials: "include",
        body: data,
        headers: {
          Accept: "multipart/form-data"
        }
      }).then(function (res) {
        if (res.ok) {
          localStorage.shouldHomepageLoad = true;
          _this6.setState({
            isEdited: !_this6.state.isEdited,
            uploadFile: null,
            updateDescription: null,
            shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldHomepageLoad()
          });
        }
      });
    }
  }, {
    key: "onProfileImageChange",
    value: function onProfileImageChange(e) {
      this.setState({
        uploadFile: e.currentTarget["files"][0]
      });
    }
  }, {
    key: "onDescriptionChange",
    value: function onDescriptionChange(e) {
      this.setState({
        updateDescription: e.currentTarget.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      if (this.state.shouldPageLoad) {
        fetch("http://localhost:8000/get_home_page/", {
          method: "GET"
        }).then(function (res) {
          if (res.ok) {
            return res.json();
          }
        }).then(function (json) {
          localStorage.description = json.description;
          localStorage.profileImageURL = "http://127.0.0.1:8000" + json.profile_photo_url;
          localStorage.shouldHomepageLoad = false;
          _this7.setState({
            description: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].description(),
            profileImageURL: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].profileImageURL(),
            shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldHomepageLoad()
          });
        });
      }

      if (!this.state.shouldPageLoad) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "padded-div", __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["b" /* ControlButtons */], {
            isLoggedIn: this.state.isLoggedIn,
            isEdited: this.state.isEdited,
            onEditClick: this.onEditClick,
            onSaveClick: this.onSaveClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProfilePhoto, {
            profileImgURL: this.state.profileImageURL,
            photoType: "profile-photo",
            isLoggedIn: this.state.isLoggedIn,
            isEdited: this.state.isEdited,
            onChange: this.onProfileImageChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MainHeading, {
            headingType: "center",
            id: "manjunath-satyamurthy",
            content: "Manjunath Satyamurthy",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextDescription, {
            descriptionType: "welcome-text",
            text: this.state.description,
            isLoggedIn: this.state.isLoggedIn,
            isEdited: this.state.isEdited,
            onChange: this.onDescriptionChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProfileLinks, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            },
            __self: this
          })
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          },
          "Loading ..."
        );
      }
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Home, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275
  },
  __self: this
}), document.getElementById('home-react-root'));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

},[127]);