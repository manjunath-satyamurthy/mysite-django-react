webpackJsonp([3],{

/***/ 124:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./app/anotherapp/react/js/Resume.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 5);
var _jsxFileName = "/home/tcnc/mysite-django-react/app/anotherapp/react/js/Resume.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Resume = function (_Component) {
	_inherits(Resume, _Component);

	function Resume(props) {
		_classCallCheck(this, Resume);

		var _this = _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).call(this, props));

		_this.onEditClick = function (e) {
			_this.setState({
				isEdited: !_this.state.isEdited
			});
		};

		_this.onSaveClick = function (e) {
			if (_this.state.uploadFile) {
				var data = new FormData();
				data.append("resume", _this.state.uploadFile);
				fetch("http://localhost:8000/update_resume/", {
					method: "POST",
					credentials: "include",
					body: data,
					headers: {
						Accept: "multipart/form-data"
					}
				}).then(function (res) {
					if (res.ok) {
						_this.setState({
							isEdited: !_this.state.isEdited,
							uploadFile: null,
							shouldPageLoad: true
						});
					}
				});
			}
		};

		_this.onChange = function (e) {
			_this.setState({
				uploadFile: e.currentTarget["files"][0]
			});
		};

		_this.state = {
			isLoggedIn: __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["a" /* LocalStorage */].isLoggedIn(),
			shouldPageLoad: true,
			isEdited: false,
			uploadFile: null,
			resumeURL: null
		};
		_this.onEditClick = _this.onEditClick.bind(_this);
		_this.onSaveClick = _this.onSaveClick.bind(_this);
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Resume, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var resumePDF = !this.state.isEdited ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"object",
				{
					data: this.state.resumeURL,
					type: "application/pdf",
					height: "100%",
					width: "100%",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 54
					},
					__self: this
				},
				"Alternative Text"
			) : null;
			var uploadResume = null;
			if (this.state.isLoggedIn & this.state.isEdited) {
				uploadResume = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "editable-photo", __source: {
							fileName: _jsxFileName,
							lineNumber: 66
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
						type: "file",
						className: "themed-btn",
						id: "upload-btn",
						onChange: this.onChange,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 67
						},
						__self: this
					})
				);
			}

			if (this.state.shouldPageLoad) {
				fetch("http://localhost:8000/get_resume/", {
					method: "GET",
					credentials: "include"
				}).then(function (res) {
					if (res.ok) {
						return res.json();
					}
				}).then(function (json) {
					_this2.setState({
						resumeURL: json.url,
						shouldPageLoad: false
					});
				});
			}

			if (this.state.resumeURL) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "padded-div", __source: {
							fileName: _jsxFileName,
							lineNumber: 97
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
							lineNumber: 98
						},
						__self: this
					}),
					resumePDF,
					uploadResume
				);
			} else {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"p",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 109
						},
						__self: this
					},
					"Loading ..."
				);
			}
		}
	}]);

	return Resume;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Resume, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 115
	},
	__self: this
}), document.getElementById('resume-react-root'));

/***/ })

},[124]);