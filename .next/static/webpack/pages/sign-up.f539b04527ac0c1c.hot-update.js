"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./pages/sign-up.tsx":
/*!***************************!*\
  !*** ./pages/sign-up.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SignUpPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexFlow: \"column\",\n            gap: 15,\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"form-control w-full max-w-xs\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"email\",\n                    className: \"lablel\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"label-text\",\n                        children: \"email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andremacbook/Desktop/z/z_nextjs_zod/pages/sign-up.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/andremacbook/Desktop/z/z_nextjs_zod/pages/sign-up.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    color: \"ghost\",\n                    id: \"email\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"/Users/andremacbook/Desktop/z/z_nextjs_zod/pages/sign-up.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andremacbook/Desktop/z/z_nextjs_zod/pages/sign-up.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andremacbook/Desktop/z/z_nextjs_zod/pages/sign-up.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = SignUpPage;\nvar _c;\n$RefreshReg$(_c, \"SignUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLXVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLGFBQWE7SUFDbkMscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxnQkFBZ0I7WUFDaEJDLFFBQVE7UUFDVjtrQkFFQSw0RUFBQ1A7WUFBSVEsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFNQyxTQUFTO29CQUFTRixXQUFVOzhCQUNqQyw0RUFBQ0c7d0JBQUtILFdBQVU7a0NBQWE7Ozs7Ozs7Ozs7OzhCQUcvQiw4REFBQ0k7b0JBQU1DLE9BQU87b0JBQVNDLElBQUk7b0JBQVNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxELENBQUM7S0FyQnVCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi11cC50c3g/YmY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXBQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleEZsb3c6ICdjb2x1bW4nLFxuICAgICAgICBnYXA6IDE1LFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHctZnVsbCBtYXgtdy14c1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17J2VtYWlsJ30gY2xhc3NOYW1lPVwibGFibGVsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPmVtYWlsPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxpbnB1dCBjb2xvcj17J2dob3N0J30gaWQ9eydlbWFpbCd9IHR5cGU9eyd0ZXh0J30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiU2lnblVwUGFnZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhGbG93IiwiZ2FwIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwic3BhbiIsImlucHV0IiwiY29sb3IiLCJpZCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sign-up.tsx\n"));

/***/ })

});