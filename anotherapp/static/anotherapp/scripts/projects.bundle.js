webpackJsonp([4],{

/***/ 122:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./anotherapp/react/js/Projects.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 6);
var _jsxFileName = "/home/manju/mysite-django-react/app/anotherapp/react/js/Projects.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Projects = function (_Component) {
	_inherits(Projects, _Component);

	function Projects(props) {
		_classCallCheck(this, Projects);

		var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

		_this.state = {
			shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldProjectLoad(),
			project: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].project()
		};
		return _this;
	}

	_createClass(Projects, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.state.shouldPageLoad) {
				fetch(window.location.origin + "/get_projects/", {
					method: "GET"
				}).then(function (res) {
					if (res.ok) {
						return res.json();
					}
				}).then(function (json) {
					localStorage.project = json;
					localStorage.shouldProjectLoad = false;
					_this2.setState({
						project: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].project(),
						shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldProjectLoad()
					});
				});
			}

			var body = [];
			var header = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["c" /* TableHeaders */], {
				header: [{ head: "Projects", colspan: 2 }],
				className: "main-table-header",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				},
				__self: this
			});
			var project = this.state.project;
			for (var i in project) {
				var projectLink = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"a",
					{ target: "_blank", rel: "noopener noreferrer", href: project[i].github_link, __source: {
							fileName: _jsxFileName,
							lineNumber: 43
						},
						__self: this
					},
					project[i].name
				);

				body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["c" /* TableHeaders */], {
					header: [{ head: projectLink, colspan: 2 }],
					key: project[i].name,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 49
					},
					__self: this
				}));
				body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], {
					body: [{ data: "description", colspan: 1 }, { data: project[i].description, colspan: 1 }],
					key: project[i].description,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 55
					},
					__self: this
				}));
			}

			if (!this.state.shouldPageLoad) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "padded-div", __source: {
							fileName: _jsxFileName,
							lineNumber: 67
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["e" /* InfoTable */], { theaders: header, tbody: body, __source: {
							fileName: _jsxFileName,
							lineNumber: 68
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
							lineNumber: 72
						},
						__self: this
					},
					"Loading ..."
				);
			}
		}
	}]);

	return Projects;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Projects, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 78
	},
	__self: this
}), document.getElementById('projects-react-root'));

/***/ })

},[122]);