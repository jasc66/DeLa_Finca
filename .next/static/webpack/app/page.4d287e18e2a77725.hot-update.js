"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/hero.tsx":
/*!*****************************!*\
  !*** ./components/hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst backgroundImages = [\n    \"/header_de_la_finca.jpg\",\n    \"/header_nosotros.jpg\" // Asegúrate de que esta imagen exista en tu proyecto\n];\nfunction Hero() {\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentImageIndex((prevIndex)=>prevIndex === 0 ? 1 : 0);\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative min-h-screen flex items-center justify-center overflow-hidden\",\n        children: [\n            backgroundImages.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-cover bg-center transition-opacity duration-1000 \".concat(index === currentImageIndex ? \"opacity-100\" : \"opacity-0\"),\n                    style: {\n                        backgroundImage: \"url(\".concat(image, \")\")\n                    }\n                }, image, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70\"\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative container mx-auto px-4 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-5xl mx-auto space-y-8 bg-black/50 backdrop-blur-sm p-8 rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"block mb-4\",\n                                    children: \"De la Finca a tu mesa:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80\",\n                                    children: \"Sabores aut\\xe9nticos, frescura inigualable.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/menu\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    size: \"lg\",\n                                    variant: \"outline\",\n                                    className: \"text-black border-2 border-black bg-white/50 hover:bg-black hover:text-white transition-all duration-300 text-lg px-8 py-6\",\n                                    children: \"Revisa el men\\xfa\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/hero.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"iwdYV/csWqs0gMEM0R8yiwCHnVs=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSTtBQUNuQjtBQUU1QixNQUFNSSxtQkFBbUI7SUFDdkI7SUFDQSx1QkFBdUIscURBQXFEO0NBQzdFO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0RDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sV0FBV0MsWUFBWTtZQUMzQkYscUJBQXFCLENBQUNHLFlBQ3BCQSxjQUFjLElBQUksSUFBSTtRQUUxQixHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTs7WUFDaEJULGlCQUFpQlUsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUM1Qiw4REFBQ0M7b0JBRUNKLFdBQVcsd0VBRVYsT0FEQ0csVUFBVVYsb0JBQW9CLGdCQUFnQjtvQkFFaERZLE9BQU87d0JBQ0xDLGlCQUFpQixPQUFhLE9BQU5KLE9BQU07b0JBQ2hDO21CQU5LQTs7Ozs7MEJBU1QsOERBQUNFO2dCQUFJSixXQUFVOzs7Ozs7MEJBRWYsOERBQUNJO2dCQUFJSixXQUFVOzBCQUNiLDRFQUFDSTtvQkFBSUosV0FBVTs7c0NBQ2IsOERBQUNPOzRCQUFHUCxXQUFVOzs4Q0FDWiw4REFBQ1E7b0NBQUtSLFdBQVU7OENBQWE7Ozs7Ozs4Q0FDN0IsOERBQUNRO29DQUFLUixXQUFVOzhDQUFtRTs7Ozs7Ozs7Ozs7O3NDQUlyRiw4REFBQ0k7NEJBQUlKLFdBQVU7c0NBQ2IsNEVBQUNWLGlEQUFJQTtnQ0FBQ21CLE1BQUs7MENBQ1QsNEVBQUNwQix5REFBTUE7b0NBQ0xxQixNQUFLO29DQUNMQyxTQUFRO29DQUNSWCxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQW5Ed0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby50c3g/MjVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgYmFja2dyb3VuZEltYWdlcyA9IFtcbiAgJy9oZWFkZXJfZGVfbGFfZmluY2EuanBnJyxcbiAgJy9oZWFkZXJfbm9zb3Ryb3MuanBnJyAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBlc3RhIGltYWdlbiBleGlzdGEgZW4gdHUgcHJveWVjdG9cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybygpIHtcbiAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCgocHJldkluZGV4KSA9PiBcbiAgICAgICAgcHJldkluZGV4ID09PSAwID8gMSA6IDBcbiAgICAgIClcbiAgICB9LCA1MDAwKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAge2JhY2tncm91bmRJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aW1hZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQtMCBiZy1jb3ZlciBiZy1jZW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTEwMDAgJHtcbiAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50SW1hZ2VJbmRleCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuICAgICAgICAgIH1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2svNzAgdmlhLWJsYWNrLzYwIHRvLWJsYWNrLzcwXCIgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb250YWluZXIgbXgtYXV0byBweC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gc3BhY2UteS04IGJnLWJsYWNrLzUwIGJhY2tkcm9wLWJsdXItc20gcC04IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC01eGwgbWQ6dGV4dC02eGwgbGc6dGV4dC03eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IGxlYWRpbmctdGlnaHQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbWItNFwiPkRlIGxhIEZpbmNhIGEgdHUgbWVzYTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCB0ZXh0LXdoaXRlLzgwXCI+XG4gICAgICAgICAgICAgIFNhYm9yZXMgYXV0w6ludGljb3MsIGZyZXNjdXJhIGluaWd1YWxhYmxlLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL21lbnVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIiBcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIGJnLXdoaXRlLzUwIGhvdmVyOmJnLWJsYWNrIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtbGcgcHgtOCBweS02XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJldmlzYSBlbCBtZW7DulxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiTGluayIsImJhY2tncm91bmRJbWFnZXMiLCJIZXJvIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgxIiwic3BhbiIsImhyZWYiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/hero.tsx\n"));

/***/ })

});