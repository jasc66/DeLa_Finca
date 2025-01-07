"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/menu/page",{

/***/ "(app-pages-browser)/./components/menu-section.tsx":
/*!*************************************!*\
  !*** ./components/menu-section.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst MenuSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = (param, ref)=>{\n    let { title, items, isActive } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        className: \"py-20 px-4 sm:px-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: isActive ? 1 : 0,\n                    y: isActive ? 0 : 20\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-800\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-6 md:space-y-8\",\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                initial: {\n                                    opacity: 0,\n                                    y: 20\n                                },\n                                animate: {\n                                    opacity: isActive ? 1 : 0,\n                                    y: isActive ? 0 : 20\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    delay: 0.2\n                                },\n                                className: \"border-b border-gray-200 pb-6 last:border-b-0 last:pb-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-lg sm:text-xl font-semibold text-gray-800\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-gray-800 whitespace-nowrap\",\n                                                children: [\n                                                    \"₡\",\n                                                    item.price.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\")\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-2 text-gray-600 text-sm sm:text-base\",\n                                        children: item.description.es\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 text-gray-500 text-xs sm:text-sm\",\n                                        children: item.description.en\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    item.description.fr && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 text-gray-500 text-xs sm:text-sm italic\",\n                                        children: item.description.fr\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, item.name, true, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/menu-section.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n});\n_c1 = MenuSection;\nMenuSection.displayName = \"MenuSection\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuSection);\nvar _c, _c1;\n$RefreshReg$(_c, \"MenuSection$forwardRef\");\n$RefreshReg$(_c1, \"MenuSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudS1zZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFa0M7QUFDSTtBQVN0QyxNQUFNRSw0QkFBY0YsaURBQVVBLE1BQWdDLFFBQTZCRztRQUE1QixFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3ZGLHFCQUNFLDhEQUFDQztRQUNDSixLQUFLQTtRQUNMSyxXQUFVO2tCQUVWLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDUCxpREFBTUEsQ0FBQ1EsR0FBRztnQkFDVEMsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRztnQkFBRztnQkFDN0JDLFNBQVM7b0JBQUVGLFNBQVNMLFdBQVcsSUFBSTtvQkFBR00sR0FBR04sV0FBVyxJQUFJO2dCQUFHO2dCQUMzRFEsWUFBWTtvQkFBRUMsVUFBVTtnQkFBSTtnQkFDNUJQLFdBQVU7O2tDQUVWLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FBc0ZKOzs7Ozs7a0NBRXBHLDhEQUFDSzt3QkFBSUQsV0FBVTtrQ0FDWkgsTUFBTVksR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDakIsaURBQU1BLENBQUNRLEdBQUc7Z0NBRVRDLFNBQVM7b0NBQUVDLFNBQVM7b0NBQUdDLEdBQUc7Z0NBQUc7Z0NBQzdCQyxTQUFTO29DQUFFRixTQUFTTCxXQUFXLElBQUk7b0NBQUdNLEdBQUdOLFdBQVcsSUFBSTtnQ0FBRztnQ0FDM0RRLFlBQVk7b0NBQUVDLFVBQVU7b0NBQUtJLE9BQU87Z0NBQUk7Z0NBQ3hDWCxXQUFVOztrREFFViw4REFBQ0M7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDWTtnREFBR1osV0FBVTswREFBa0RVLEtBQUtHLElBQUk7Ozs7OzswREFDekUsOERBQUNDO2dEQUFLZCxXQUFVOztvREFBNEM7b0RBQUVVLEtBQUtLLEtBQUssQ0FBQ0MsUUFBUSxHQUFHQyxPQUFPLENBQUMseUJBQXlCOzs7Ozs7Ozs7Ozs7O2tEQUV2SCw4REFBQ0M7d0NBQUVsQixXQUFVO2tEQUEyQ1UsS0FBS1MsV0FBVyxDQUFDQyxFQUFFOzs7Ozs7a0RBQzNFLDhEQUFDRjt3Q0FBRWxCLFdBQVU7a0RBQXlDVSxLQUFLUyxXQUFXLENBQUNFLEVBQUU7Ozs7OztvQ0FDeEVYLEtBQUtTLFdBQVcsQ0FBQ0csRUFBRSxrQkFDbEIsOERBQUNKO3dDQUFFbEIsV0FBVTtrREFBZ0RVLEtBQUtTLFdBQVcsQ0FBQ0csRUFBRTs7Ozs7OzsrQkFiN0VaLEtBQUtHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0I5Qjs7QUFFQW5CLFlBQVk2QixXQUFXLEdBQUc7QUFFMUIsK0RBQWU3QixXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVudS1zZWN0aW9uLnRzeD8yN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAL2RhdGEvbWVudS1pdGVtcydcblxuaW50ZXJmYWNlIE1lbnVTZWN0aW9uUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGl0ZW1zOiBNZW51SXRlbVtdXG4gIGlzQWN0aXZlOiBib29sZWFuXG59XG5cbmNvbnN0IE1lbnVTZWN0aW9uID0gZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgTWVudVNlY3Rpb25Qcm9wcz4oKHsgdGl0bGUsIGl0ZW1zLCBpc0FjdGl2ZSB9LCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9XCJweS0yMCBweC00IHNtOnB4LTZcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiBpc0FjdGl2ZSA/IDEgOiAwLCB5OiBpc0FjdGl2ZSA/IDAgOiAyMCB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIGJnLXdoaXRlLzk1IGJhY2tkcm9wLWJsdXItbWQgcm91bmRlZC1sZyBwLTYgbWQ6cC04IHNoYWRvdy14bFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIG1iLTggbWQ6bWItMTIgdGV4dC1ncmF5LTgwMFwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IG1kOnNwYWNlLXktOFwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IGlzQWN0aXZlID8gMSA6IDAsIHk6IGlzQWN0aXZlID8gMCA6IDIwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMC4yIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTYgbGFzdDpib3JkZXItYi0wIGxhc3Q6cGItMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtc3RhcnQgc206anVzdGlmeS1iZXR3ZWVuIGdhcC0yIHNtOmdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPntpdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+4oKhe2l0ZW0ucHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIil9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZVwiPntpdGVtLmRlc2NyaXB0aW9uLmVzfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtZ3JheS01MDAgdGV4dC14cyBzbTp0ZXh0LXNtXCI+e2l0ZW0uZGVzY3JpcHRpb24uZW59PC9wPlxuICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9uLmZyICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1ncmF5LTUwMCB0ZXh0LXhzIHNtOnRleHQtc20gaXRhbGljXCI+e2l0ZW0uZGVzY3JpcHRpb24uZnJ9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn0pXG5cbk1lbnVTZWN0aW9uLmRpc3BsYXlOYW1lID0gJ01lbnVTZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBNZW51U2VjdGlvblxuXG4iXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsIm1vdGlvbiIsIk1lbnVTZWN0aW9uIiwicmVmIiwidGl0bGUiLCJpdGVtcyIsImlzQWN0aXZlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMiIsIm1hcCIsIml0ZW0iLCJkZWxheSIsImgzIiwibmFtZSIsInNwYW4iLCJwcmljZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInAiLCJkZXNjcmlwdGlvbiIsImVzIiwiZW4iLCJmciIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menu-section.tsx\n"));

/***/ })

});