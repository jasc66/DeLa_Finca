"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./components/about-section.tsx":
/*!**************************************!*\
  !*** ./components/about-section.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AboutSection = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { title, content, image, imageAlt, isActive } = param;\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>sectionRef.current);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: sectionRef,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ],\n        layoutEffect: false\n    });\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        1,\n        0\n    ]);\n    const scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0.8,\n        1,\n        0.8\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.section, {\n        ref: sectionRef,\n        className: \"relative min-h-screen flex items-center py-20\",\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: isActive ? 1 : 0.3\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-black/40\"\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 z-[-1]\",\n                style: {\n                    backgroundImage: \"linear-gradient(rgba(230, 213, 195, 0.9), rgba(230, 213, 195, 0.9)), url(\".concat(image, \")\"),\n                    backgroundSize: \"cover\",\n                    backgroundPosition: \"center\",\n                    backgroundAttachment: \"fixed\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 relative z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"max-w-6xl mx-auto relative\",\n                    style: {\n                        opacity,\n                        scale\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative z-10 mx-32 md:mx-40\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute -right-40 md:-right-48 -top-12 w-32 h-32 md:w-48 md:h-48 z-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/png/img2_bg.png\",\n                                    alt: \"Decorative element\",\n                                    width: 192,\n                                    height: 192,\n                                    className: \"object-contain\",\n                                    style: {\n                                        filter: \"brightness(1.2) contrast(1.1)\",\n                                        mixBlendMode: \"multiply\",\n                                        width: \"100%\",\n                                        height: \"100%\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute -left-40 md:-left-48 bottom-32 w-32 h-32 md:w-48 md:h-48 z-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/png/img1_bg.png\",\n                                    alt: \"Decorative element\",\n                                    width: 192,\n                                    height: 192,\n                                    className: \"object-contain\",\n                                    style: {\n                                        filter: \"brightness(1.2) contrast(1.1)\",\n                                        mixBlendMode: \"multiply\",\n                                        width: \"100%\",\n                                        height: \"100%\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-4xl md:text-6xl font-bold text-gray-800\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto\",\n                                        children: content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl mt-16\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                src: image,\n                                                alt: imageAlt,\n                                                fill: true,\n                                                className: \"object-cover\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute bottom-4 left-4 right-4 text-white\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"text-xl md:text-2xl font-semibold mb-2\",\n                                                        children: title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-sm\",\n                                                        children: imageAlt\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n}, \"q1rklHSYxzq3LY1bYAcV+hTc2mg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n})), \"q1rklHSYxzq3LY1bYAcV+hTc2mg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c1 = AboutSection;\nAboutSection.displayName = \"AboutSection\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutSection);\nvar _c, _c1;\n$RefreshReg$(_c, \"AboutSection$forwardRef\");\n$RefreshReg$(_c1, \"AboutSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYWJvdXQtc2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrRDtBQUNqQztBQUNpQztBQVUvRCxNQUFNTyw2QkFBZVAsR0FBQUEsaURBQVVBLFNBQWlDLFFBQWdEUTtRQUEvQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDNUcsTUFBTUMsYUFBYWIsNkNBQU1BLENBQWM7SUFFdkNDLDBEQUFtQkEsQ0FBQ00sS0FBSyxJQUFNTSxXQUFXQyxPQUFPO0lBRWpELE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdYLHdEQUFTQSxDQUFDO1FBQ3BDWSxRQUFRSDtRQUNSSSxRQUFRO1lBQUM7WUFBYTtTQUFZO1FBQ2xDQyxjQUFjO0lBQ2hCO0lBRUEsTUFBTUMsVUFBVWQsMkRBQVlBLENBQUNVLGlCQUFpQjtRQUFDO1FBQUc7UUFBSztLQUFFLEVBQUU7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNwRSxNQUFNSyxRQUFRZiwyREFBWUEsQ0FBQ1UsaUJBQWlCO1FBQUM7UUFBRztRQUFLO0tBQUUsRUFBRTtRQUFDO1FBQUs7UUFBRztLQUFJO0lBRXRFLHFCQUNFLDhEQUFDWixpREFBTUEsQ0FBQ2tCLE9BQU87UUFDYmQsS0FBS007UUFDTFMsV0FBVTtRQUNWQyxTQUFTO1lBQUVKLFNBQVM7UUFBRTtRQUN0QkssU0FBUztZQUFFTCxTQUFTUCxXQUFXLElBQUk7UUFBSTtRQUN2Q2EsWUFBWTtZQUFFQyxVQUFVO1FBQUk7OzBCQUU1Qiw4REFBQ0M7Z0JBQUlMLFdBQVU7Ozs7OzswQkFFZiw4REFBQ0s7Z0JBQ0NMLFdBQVU7Z0JBQ1ZNLE9BQU87b0JBQ0xDLGlCQUFpQiw0RUFBa0YsT0FBTm5CLE9BQU07b0JBQ25Hb0IsZ0JBQWdCO29CQUNoQkMsb0JBQW9CO29CQUNwQkMsc0JBQXNCO2dCQUN4Qjs7Ozs7OzBCQUdGLDhEQUFDTDtnQkFBSUwsV0FBVTswQkFDYiw0RUFBQ25CLGlEQUFNQSxDQUFDd0IsR0FBRztvQkFDVEwsV0FBVTtvQkFDVk0sT0FBTzt3QkFBRVQ7d0JBQVNDO29CQUFNOzhCQUd4Qiw0RUFBQ087d0JBQUlMLFdBQVU7OzBDQUViLDhEQUFDSztnQ0FBSUwsV0FBVTswQ0FDYiw0RUFBQ3BCLGtEQUFLQTtvQ0FDSitCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JkLFdBQVU7b0NBQ1ZNLE9BQU87d0NBQ0xTLFFBQVE7d0NBQ1JDLGNBQWM7d0NBQ2RILE9BQU87d0NBQ1BDLFFBQVE7b0NBQ1Y7Ozs7Ozs7Ozs7OzBDQUtKLDhEQUFDVDtnQ0FBSUwsV0FBVTswQ0FDYiw0RUFBQ3BCLGtEQUFLQTtvQ0FDSitCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JkLFdBQVU7b0NBQ1ZNLE9BQU87d0NBQ0xTLFFBQVE7d0NBQ1JDLGNBQWM7d0NBQ2RILE9BQU87d0NBQ1BDLFFBQVE7b0NBQ1Y7Ozs7Ozs7Ozs7OzBDQUtKLDhEQUFDVDtnQ0FBSUwsV0FBVTs7a0RBQ2IsOERBQUNpQjt3Q0FBR2pCLFdBQVU7a0RBQWdEZDs7Ozs7O2tEQUM5RCw4REFBQ2dDO3dDQUFFbEIsV0FBVTtrREFBc0ViOzs7Ozs7a0RBRW5GLDhEQUFDa0I7d0NBQUlMLFdBQVU7OzBEQUNiLDhEQUFDcEIsa0RBQUtBO2dEQUNKK0IsS0FBS3ZCO2dEQUNMd0IsS0FBS3ZCO2dEQUNMOEIsSUFBSTtnREFDSm5CLFdBQVU7Ozs7OzswREFFWiw4REFBQ0s7Z0RBQUlMLFdBQVU7Ozs7OzswREFDZiw4REFBQ0s7Z0RBQUlMLFdBQVU7O2tFQUNiLDhEQUFDb0I7d0RBQUdwQixXQUFVO2tFQUEwQ2Q7Ozs7OztrRUFDeEQsOERBQUNnQzt3REFBRWxCLFdBQVU7a0VBQVdYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzFDOztRQTlGOEJQLG9EQUFTQTtRQU1yQkMsdURBQVlBO1FBQ2RBLHVEQUFZQTs7OztRQVBFRCxvREFBU0E7UUFNckJDLHVEQUFZQTtRQUNkQSx1REFBWUE7Ozs7QUF5RjVCQyxhQUFhcUMsV0FBVyxHQUFHO0FBRTNCLCtEQUFlckMsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Fib3V0LXNlY3Rpb24udHN4PzFlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGZvcndhcmRSZWYsIHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW50ZXJmYWNlIEFib3V0U2VjdGlvblByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2U6IHN0cmluZ1xuICBpbWFnZUFsdDogc3RyaW5nXG4gIGlzQWN0aXZlOiBib29sZWFuXG59XG5cbmNvbnN0IEFib3V0U2VjdGlvbiA9IGZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIEFib3V0U2VjdGlvblByb3BzPigoeyB0aXRsZSwgY29udGVudCwgaW1hZ2UsIGltYWdlQWx0LCBpc0FjdGl2ZSB9LCByZWYpID0+IHtcbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gc2VjdGlvblJlZi5jdXJyZW50IGFzIEhUTUxFbGVtZW50KVxuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogc2VjdGlvblJlZixcbiAgICBvZmZzZXQ6IFtcInN0YXJ0IGVuZFwiLCBcImVuZCBzdGFydFwiXSxcbiAgICBsYXlvdXRFZmZlY3Q6IGZhbHNlXG4gIH0pXG5cbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbMCwgMSwgMF0pXG4gIGNvbnN0IHNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNSwgMV0sIFswLjgsIDEsIDAuOF0pXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLnNlY3Rpb25cbiAgICAgIHJlZj17c2VjdGlvblJlZn1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBweS0yMFwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogaXNBY3RpdmUgPyAxIDogMC4zIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svNDBcIiAvPlxuICAgICAgXG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotWy0xXVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHJnYmEoMjMwLCAyMTMsIDE5NSwgMC45KSwgcmdiYSgyMzAsIDIxMywgMTk1LCAwLjkpKSwgdXJsKCR7aW1hZ2V9KWAsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJ1xuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byByZWxhdGl2ZVwiXG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eSwgc2NhbGUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBNYWluIGNvbnRlbnQgY29udGFpbmVyIHdpdGggbWFyZ2luIHRvIHByZXZlbnQgb3ZlcmxhcCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbXgtMzIgbWQ6bXgtNDBcIj5cbiAgICAgICAgICAgIHsvKiBUb3AgcmlnaHQgZGVjb3JhdGl2ZSBlbGVtZW50ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtcmlnaHQtNDAgbWQ6LXJpZ2h0LTQ4IC10b3AtMTIgdy0zMiBoLTMyIG1kOnctNDggbWQ6aC00OCB6LTBcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL3BuZy9pbWcyX2JnLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVjb3JhdGl2ZSBlbGVtZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTkyfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTkyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxLjIpIGNvbnRyYXN0KDEuMSknLFxuICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQm90dG9tIGxlZnQgZGVjb3JhdGl2ZSBlbGVtZW50ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC00MCBtZDotbGVmdC00OCBib3R0b20tMzIgdy0zMiBoLTMyIG1kOnctNDggbWQ6aC00OCB6LTBcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL3BuZy9pbWcxX2JnLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVjb3JhdGl2ZSBlbGVtZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTkyfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTkyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxLjIpIGNvbnRyYXN0KDEuMSknLFxuICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ29udGVudCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXJlbGF4ZWQgbWF4LXctNHhsIG14LWF1dG9cIj57Y29udGVudH08L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVszMDBweF0gbWQ6aC1bNDAwcHhdIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgbXQtMTZcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2svNjAgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IHJpZ2h0LTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2ltYWdlQWx0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cbiAgKVxufSlcblxuQWJvdXRTZWN0aW9uLmRpc3BsYXlOYW1lID0gJ0Fib3V0U2VjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uXG5cbiJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwidXNlUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsIkltYWdlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiQWJvdXRTZWN0aW9uIiwicmVmIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJpbWFnZUFsdCIsImlzQWN0aXZlIiwic2VjdGlvblJlZiIsImN1cnJlbnQiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJsYXlvdXRFZmZlY3QiLCJvcGFjaXR5Iiwic2NhbGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbHRlciIsIm1peEJsZW5kTW9kZSIsImgyIiwicCIsImZpbGwiLCJoMyIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/about-section.tsx\n"));

/***/ })

});