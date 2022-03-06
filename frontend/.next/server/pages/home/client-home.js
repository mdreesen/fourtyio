/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home/client-home";
exports.ids = ["pages/home/client-home"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ \"./components/Navigation/index.js\");\n\n\nfunction Layout({ children  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Layout.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Layout.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUV0QixRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxNQUFNLDZFQUNEQyxDQUFHOzt3RkFDSEgsbURBQVU7Ozs7O1lBQ1ZFLFFBQVE7Ozs7Ozs7QUFHZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm91cnR5aW8vLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ \"react-bootstrap/Nav\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Navigation() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n        bg: \"light\",\n        variant: \"light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default().Brand), {\n                    href: \"#home\",\n                    children: \"Navbar\"\n                }, void 0, false, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"me-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {\n                            href: \"#home\",\n                            children: \"Link\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {\n                            href: \"#features\",\n                            children: \"Link\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {\n                            href: \"#pricing\",\n                            children: \"Link\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/components/Navigation/index.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ047QUFDWTtBQUNSO0FBRTFCLFFBQVEsQ0FBQ0csVUFBVSxHQUFHLENBQUM7SUFDbEMsTUFBTSw2RUFDREgsK0RBQU07UUFBQ0ksRUFBRSxFQUFDLENBQU87UUFBQ0MsT0FBTyxFQUFDLENBQU87OEZBQzdCSCxrRUFBUzs7NEZBQ0xGLHFFQUFZO29CQUFDTyxJQUFJLEVBQUMsQ0FBTzs4QkFBQyxDQUFNOzs7Ozs7NEZBQ2hDTiw0REFBRztvQkFBQ08sU0FBUyxFQUFDLENBQVM7O29HQUNuQlAsaUVBQVE7NEJBQUNNLElBQUksRUFBQyxDQUFPO3NDQUFDLENBQUk7Ozs7OztvR0FDMUJOLGlFQUFROzRCQUFDTSxJQUFJLEVBQUMsQ0FBVztzQ0FBQyxDQUFJOzs7Ozs7b0dBQzlCTixpRUFBUTs0QkFBQ00sSUFBSSxFQUFDLENBQVU7c0NBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvdXJ0eWlvLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzP2M5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiB2YXJpYW50PVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5OYXZiYXI8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkxpbms8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPkxpbms8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+TGluazwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJOYXYiLCJDb250YWluZXIiLCJOYXZpZ2F0aW9uIiwiYmciLCJ2YXJpYW50IiwiQnJhbmQiLCJocmVmIiwiY2xhc3NOYW1lIiwiTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/index.js\n");

/***/ }),

/***/ "./pages/home/client-home.js":
/*!***********************************!*\
  !*** ./pages/home/client-home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientHome)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\n\nfunction ClientHome() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Client Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/pages/home/client-home.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/pages/home/client-home.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Client Home\"\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/pages/home/client-home.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/fourtyio/frontend/pages/home/client-home.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2NsaWVudC1ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7QUFDZ0I7QUFFN0IsUUFBUSxDQUFDRSxVQUFVLEdBQUcsQ0FBQztJQUNsQyxNQUFNLDZFQUNERCwwREFBTTs7d0ZBQ0ZELGtEQUFJO3NHQUNBRyxDQUFLOzhCQUFDLENBQVc7Ozs7Ozs7Ozs7O3dGQUVyQkMsQ0FBRzswQkFBQyxDQUFXOzs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvdXJ0eWlvLy4vcGFnZXMvaG9tZS9jbGllbnQtaG9tZS5qcz84Mjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50SG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNsaWVudCBIb21lPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXY+Q2xpZW50IEhvbWU8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkxheW91dCIsIkNsaWVudEhvbWUiLCJ0aXRsZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home/client-home.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home/client-home.js"));
module.exports = __webpack_exports__;

})();