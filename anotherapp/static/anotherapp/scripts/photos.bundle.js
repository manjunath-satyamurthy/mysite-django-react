webpackJsonp([5],{

/***/ 121:
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./anotherapp/react/js/Photos.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__ = __webpack_require__(/*! reactRoot/Components */ 6);
var _jsxFileName = "/home/manju/mysite-django-react/app/anotherapp/react/js/Photos.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TaggedPhotos = function (_Component) {
	_inherits(TaggedPhotos, _Component);

	function TaggedPhotos() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TaggedPhotos);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TaggedPhotos.__proto__ || Object.getPrototypeOf(TaggedPhotos)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
			_this.props.setModalName(_this.props.url);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TaggedPhotos, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: "photo-preview", onClick: this.onClick, __source: {
						fileName: _jsxFileName,
						lineNumber: 13
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: this.props.url, alt: "Failed to load", __source: {
						fileName: _jsxFileName,
						lineNumber: 14
					},
					__self: this
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"h3",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 15
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 16
							},
							__self: this
						},
						this.props.comment
					)
				)
			);
		}
	}]);

	return TaggedPhotos;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var PhotoModal = function (_Component2) {
	_inherits(PhotoModal, _Component2);

	function PhotoModal() {
		var _ref2;

		var _temp2, _this2, _ret2;

		_classCallCheck(this, PhotoModal);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = PhotoModal.__proto__ || Object.getPrototypeOf(PhotoModal)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onLeftClick = function () {
			_this2.props.setModalName(_this2.props.previousPhoto);
		}, _this2.onRightClick = function () {
			_this2.props.setModalName(_this2.props.nextPhoto);
		}, _this2.onKeyDown = function (e) {
			if (e.keyCode === 37) {
				_this2.props.setModalName(_this2.props.previousPhoto);
			} else if (e.keyCode === 39) {
				_this2.props.setModalName(_this2.props.nextPhoto);
			} else if (e.keyCode === 27) {
				_this2.props.setModalName(null);
			}
		}, _temp2), _possibleConstructorReturn(_this2, _ret2);
	}

	_createClass(PhotoModal, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			console.log("mounted PhotoModal");
			document.addEventListener("keydown", this.onKeyDown, false);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			console.log("unmounted PhotoModal");
			document.removeEventListener("keydown", this.onKeyDown, false);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 59
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"p",
					{ className: "left-arrow", onClick: this.onLeftClick, __source: {
							fileName: _jsxFileName,
							lineNumber: 60
						},
						__self: this
					},
					"<"
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: this.props.currentPhoto, alt: "Failed to Load", key: this.props.currentPhoto + this.props.nextPhoto, __source: {
						fileName: _jsxFileName,
						lineNumber: 63
					},
					__self: this
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"p",
					{ className: "right-arrow", onClick: this.onRightClick, __source: {
							fileName: _jsxFileName,
							lineNumber: 64
						},
						__self: this
					},
					">"
				)
			);
		}
	}]);

	return PhotoModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Photos = function (_Component3) {
	_inherits(Photos, _Component3);

	function Photos(props) {
		_classCallCheck(this, Photos);

		var _this3 = _possibleConstructorReturn(this, (Photos.__proto__ || Object.getPrototypeOf(Photos)).call(this, props));

		_this3.setModalName = function (url) {
			_this3.setState({
				showModalName: url
			});
		};

		_this3.state = {
			shouldPageLoad: true,
			images: null,
			showModalName: null
		};
		_this3.setModalName = _this3.setModalName.bind(_this3);

		return _this3;
	}

	_createClass(Photos, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			if (this.state.shouldPageLoad) {
				fetch(window.location.origin + "/get_photos", {
					method: "GET"
				}).then(function (res) {
					return res.json();
				}).then(function (json) {
					_this4.setState({
						images: json,
						shouldPageLoad: false
					});
				});
			}

			var images = [];
			var imageData = this.state.images;
			var photoModals = [];
			for (var i in imageData) {
				i = parseInt(i, 10);
				var previousPhoto = "",
				    nextPhoto = "",
				    currentPhoto = "";
				var lastIndex = imageData.length - 1;

				images.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TaggedPhotos, {
					url: imageData[i].image_url,
					comment: imageData[i].comment,
					key: imageData[i].image_url,
					setModalName: this.setModalName,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 119
					},
					__self: this
				}));

				currentPhoto = imageData[i].image_url;
				if (i === 0) {
					previousPhoto = imageData[lastIndex].image_url;
				} else {
					previousPhoto = imageData[i - 1].image_url;
				}
				if (i === lastIndex) {
					nextPhoto = imageData[0].image_url;
				} else {
					nextPhoto = imageData[i + 1].image_url;
				}

				var photoModal = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PhotoModal, {
					currentPhoto: currentPhoto,
					nextPhoto: nextPhoto,
					previousPhoto: previousPhoto,
					setModalName: this.setModalName,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 140
					},
					__self: this
				});

				photoModals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["f" /* Modal */], {
					className: "modal",
					modalContent: photoModal,
					key: currentPhoto,
					name: currentPhoto,
					showModalName: this.state.showModalName,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 149
					},
					__self: this
				}));
			}

			if (!this.shouldPageLoad) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "padded-div", __source: {
							fileName: _jsxFileName,
							lineNumber: 161
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactRoot_Components__["b" /* ControlButtons */], {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 162
						},
						__self: this
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 163
							},
							__self: this
						},
						images
					),
					photoModals
				);
			}
		}
	}]);

	return Photos;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Photos, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 174
	},
	__self: this
}), document.getElementById('photos-react-root'));

/***/ })

},[121]);