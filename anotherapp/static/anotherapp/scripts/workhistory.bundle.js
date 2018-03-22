webpackJsonp([1],{

/***/ 126:
/* no static exports found */
/* all exports used */
/*!************************************************!*\
  !*** ./app/anotherapp/react/js/WorkHistory.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 5);
var _jsxFileName = "/home/tcnc/mysite-django-react/app/anotherapp/react/js/WorkHistory.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var WorkHistory = function (_Component) {
	_inherits(WorkHistory, _Component);

	function WorkHistory(props) {
		_classCallCheck(this, WorkHistory);

		var _this = _possibleConstructorReturn(this, (WorkHistory.__proto__ || Object.getPrototypeOf(WorkHistory)).call(this, props));

		_this.state = {
			shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldWorkHistoryLoad(),
			workHistory: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].workHistory()
		};
		return _this;
	}

	_createClass(WorkHistory, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.state.shouldPageLoad) {
				fetch("http://localhost:8000/get_work_history/", {
					method: "GET"
				}).then(function (res) {
					if (res.ok) {
						return res.json();
					}
				}).then(function (json) {
					localStorage.workHistory = json;
					localStorage.shouldWorkHistoryLoad = false;
					_this2.setState({
						workHistory: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].workHistory(),
						shouldPageLoad: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].shouldWorkHistoryLoad()
					});
				});
			}

			var body = [];
			var header = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["c" /* TableHeaders */], {
				header: [{ head: "Work History", colspan: 2 }],
				className: "main-table-header",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				},
				__self: this
			});
			var workHistory = this.state.workHistory;

			for (var i in workHistory) {
				var companyLink = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"a",
					{ target: "_blank", rel: "noopener noreferrer", href: workHistory[i].URL, __source: {
							fileName: _jsxFileName,
							lineNumber: 44
						},
						__self: this
					},
					workHistory[i].Company
				);

				body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["c" /* TableHeaders */], {
					header: [{ head: companyLink, colspan: 2 }],
					key: workHistory[i].Company,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 50
					},
					__self: this
				}));
				body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], {
					body: [{ data: "Role", colspan: 1 }, { data: workHistory[i].Role, colspan: 1 }],
					key: workHistory[i].Role,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 56
					},
					__self: this
				}));
				body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], {
					body: [{ data: "Duration", colspan: 1 }, { data: workHistory[i].Duration, colspan: 1 }],
					key: workHistory[i].Duration,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 65
					},
					__self: this
				}));
				body.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["d" /* TableRow */], {
					body: [{ data: "Description", colspan: 1 }, { data: workHistory[i].Description, colspan: 1 }],
					key: workHistory[i].Description,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 74
					},
					__self: this
				}));
			}

			if (!this.state.shouldPageLoad) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "padded-div", __source: {
							fileName: _jsxFileName,
							lineNumber: 86
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["e" /* InfoTable */], { theaders: header, tbody: body, __source: {
							fileName: _jsxFileName,
							lineNumber: 87
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
							lineNumber: 91
						},
						__self: this
					},
					"Loading ..."
				);
			}
		}
	}]);

	return WorkHistory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkHistory, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 97
	},
	__self: this
}), document.getElementById('workhistory-react-root'));

/***/ })

},[126]);