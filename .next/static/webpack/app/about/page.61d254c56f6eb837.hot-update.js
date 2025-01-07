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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AboutSection = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { title, content, image, imageAlt, isActive } = param;\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>sectionRef.current);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: sectionRef,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ],\n        layoutEffect: false\n    });\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        1,\n        0\n    ]);\n    const scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0.8,\n        1,\n        0.8\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.section, {\n        ref: sectionRef,\n        className: \"relative min-h-screen flex items-center py-20 bg-[#e6d5c3]\",\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: isActive ? 1 : 0.3\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 relative z-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"max-w-6xl mx-auto relative\",\n                style: {\n                    opacity,\n                    scale\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute -right-4 -top-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/png/img2_bg.png\",\n                                alt: \"Decorative element\",\n                                width: 160,\n                                height: 160,\n                                className: \"object-contain\",\n                                style: {\n                                    filter: \"brightness(1.2) contrast(1.1)\",\n                                    mixBlendMode: \"multiply\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-[#e6d5c3] p-8 rounded-lg shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#91211e] mb-6\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mb-8\",\n                                    children: content\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: image,\n                                            alt: imageAlt,\n                                            fill: true,\n                                            className: \"object-cover\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute bottom-4 left-4 right-4 text-white\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-xl md:text-2xl font-semibold mb-2\",\n                                                    children: title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm\",\n                                                    children: imageAlt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute -left-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/png/img1_bg.png\",\n                                alt: \"Decorative element\",\n                                width: 160,\n                                height: 160,\n                                className: \"object-contain\",\n                                style: {\n                                    filter: \"brightness(1.2) contrast(1.1)\",\n                                    mixBlendMode: \"multiply\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/about-section.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n}, \"q1rklHSYxzq3LY1bYAcV+hTc2mg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n})), \"q1rklHSYxzq3LY1bYAcV+hTc2mg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c1 = AboutSection;\nAboutSection.displayName = \"AboutSection\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutSection);\nvar _c, _c1;\n$RefreshReg$(_c, \"AboutSection$forwardRef\");\n$RefreshReg$(_c1, \"AboutSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYWJvdXQtc2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrRDtBQUNqQztBQUNpQztBQVUvRCxNQUFNTyw2QkFBZVAsR0FBQUEsaURBQVVBLFNBQWlDLFFBQWdEUTtRQUEvQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDNUcsTUFBTUMsYUFBYWIsNkNBQU1BLENBQWM7SUFFdkNDLDBEQUFtQkEsQ0FBQ00sS0FBSyxJQUFNTSxXQUFXQyxPQUFPO0lBRWpELE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdYLHdEQUFTQSxDQUFDO1FBQ3BDWSxRQUFRSDtRQUNSSSxRQUFRO1lBQUM7WUFBYTtTQUFZO1FBQ2xDQyxjQUFjO0lBQ2hCO0lBRUEsTUFBTUMsVUFBVWQsMkRBQVlBLENBQUNVLGlCQUFpQjtRQUFDO1FBQUc7UUFBSztLQUFFLEVBQUU7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNwRSxNQUFNSyxRQUFRZiwyREFBWUEsQ0FBQ1UsaUJBQWlCO1FBQUM7UUFBRztRQUFLO0tBQUUsRUFBRTtRQUFDO1FBQUs7UUFBRztLQUFJO0lBRXRFLHFCQUNFLDhEQUFDWixpREFBTUEsQ0FBQ2tCLE9BQU87UUFDYmQsS0FBS007UUFDTFMsV0FBVTtRQUNWQyxTQUFTO1lBQUVKLFNBQVM7UUFBRTtRQUN0QkssU0FBUztZQUFFTCxTQUFTUCxXQUFXLElBQUk7UUFBSTtRQUN2Q2EsWUFBWTtZQUFFQyxVQUFVO1FBQUk7a0JBRTVCLDRFQUFDQztZQUFJTCxXQUFVO3NCQUNiLDRFQUFDbkIsaURBQU1BLENBQUN3QixHQUFHO2dCQUNUTCxXQUFVO2dCQUNWTSxPQUFPO29CQUFFVDtvQkFBU0M7Z0JBQU07MEJBRXhCLDRFQUFDTztvQkFBSUwsV0FBVTs7c0NBRWIsOERBQUNLOzRCQUFJTCxXQUFVO3NDQUNiLDRFQUFDcEIsa0RBQUtBO2dDQUNKMkIsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUlYsV0FBVTtnQ0FDVk0sT0FBTztvQ0FDTEssUUFBUTtvQ0FDUkMsY0FBYztnQ0FDaEI7Ozs7Ozs7Ozs7O3NDQUtKLDhEQUFDUDs0QkFBSUwsV0FBVTs7OENBQ2IsOERBQUNhO29DQUFHYixXQUFVOzhDQUE4RWQ7Ozs7Ozs4Q0FDNUYsOERBQUM0QjtvQ0FBRWQsV0FBVTs4Q0FBZ0ZiOzs7Ozs7OENBRTdGLDhEQUFDa0I7b0NBQUlMLFdBQVU7O3NEQUNiLDhEQUFDcEIsa0RBQUtBOzRDQUNKMkIsS0FBS25COzRDQUNMb0IsS0FBS25COzRDQUNMMEIsSUFBSTs0Q0FDSmYsV0FBVTs7Ozs7O3NEQUVaLDhEQUFDSzs0Q0FBSUwsV0FBVTs7Ozs7O3NEQUNmLDhEQUFDSzs0Q0FBSUwsV0FBVTs7OERBQ2IsOERBQUNnQjtvREFBR2hCLFdBQVU7OERBQTBDZDs7Ozs7OzhEQUN4RCw4REFBQzRCO29EQUFFZCxXQUFVOzhEQUFXWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU05Qiw4REFBQ2dCOzRCQUFJTCxXQUFVO3NDQUNiLDRFQUFDcEIsa0RBQUtBO2dDQUNKMkIsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUlYsV0FBVTtnQ0FDVk0sT0FBTztvQ0FDTEssUUFBUTtvQ0FDUkMsY0FBYztnQ0FDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhCOztRQTdFOEI5QixvREFBU0E7UUFNckJDLHVEQUFZQTtRQUNkQSx1REFBWUE7Ozs7UUFQRUQsb0RBQVNBO1FBTXJCQyx1REFBWUE7UUFDZEEsdURBQVlBOzs7O0FBd0U1QkMsYUFBYWlDLFdBQVcsR0FBRztBQUUzQiwrREFBZWpDLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC1zZWN0aW9uLnRzeD8xZWExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBmb3J3YXJkUmVmLCB1c2VSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmludGVyZmFjZSBBYm91dFNlY3Rpb25Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiBzdHJpbmdcbiAgaW1hZ2VBbHQ6IHN0cmluZ1xuICBpc0FjdGl2ZTogYm9vbGVhblxufVxuXG5jb25zdCBBYm91dFNlY3Rpb24gPSBmb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBBYm91dFNlY3Rpb25Qcm9wcz4oKHsgdGl0bGUsIGNvbnRlbnQsIGltYWdlLCBpbWFnZUFsdCwgaXNBY3RpdmUgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25SZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHNlY3Rpb25SZWYuY3VycmVudCBhcyBIVE1MRWxlbWVudClcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IHNlY3Rpb25SZWYsXG4gICAgb2Zmc2V0OiBbXCJzdGFydCBlbmRcIiwgXCJlbmQgc3RhcnRcIl0sXG4gICAgbGF5b3V0RWZmZWN0OiBmYWxzZVxuICB9KVxuXG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC41LCAxXSwgWzAsIDEsIDBdKVxuICBjb25zdCBzY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbMC44LCAxLCAwLjhdKVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5zZWN0aW9uXG4gICAgICByZWY9e3NlY3Rpb25SZWZ9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgcHktMjAgYmctWyNlNmQ1YzNdXCJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiBpc0FjdGl2ZSA/IDEgOiAwLjMgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcmVsYXRpdmVcIlxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHksIHNjYWxlIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgIHsvKiBUb3AgcmlnaHQgZGVjb3JhdGl2ZSBlbGVtZW50ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtcmlnaHQtNCAtdG9wLTQgdy0yNCBoLTI0IG1kOnctMzIgbWQ6aC0zMiBsZzp3LTQwIGxnOmgtNDBcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL3BuZy9pbWcyX2JnLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVjb3JhdGl2ZSBlbGVtZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTYwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxLjIpIGNvbnRyYXN0KDEuMSknLFxuICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjZTZkNWMzXSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIG1kOnRleHQtNXhsIGxnOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LVsjOTEyMTFlXSBtYi02XCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXJlbGF4ZWQgbWF4LXctNHhsIG1iLThcIj57Y29udGVudH08L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVsyNTBweF0gc206aC1bMzAwcHhdIG1kOmgtWzM1MHB4XSBsZzpoLVs0MDBweF0gcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay82MCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTQgcmlnaHQtNCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTJcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57aW1hZ2VBbHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQm90dG9tIGxlZnQgZGVjb3JhdGl2ZSBlbGVtZW50ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC00IC1ib3R0b20tNCB3LTI0IGgtMjQgbWQ6dy0zMiBtZDpoLTMyIGxnOnctNDAgbGc6aC00MFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvcG5nL2ltZzFfYmcucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJEZWNvcmF0aXZlIGVsZW1lbnRcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxNjB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDEuMikgY29udHJhc3QoMS4xKScsXG4gICAgICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5zZWN0aW9uPlxuICApXG59KVxuXG5BYm91dFNlY3Rpb24uZGlzcGxheU5hbWUgPSAnQWJvdXRTZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFNlY3Rpb25cblxuIl0sIm5hbWVzIjpbImZvcndhcmRSZWYiLCJ1c2VSZWYiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiSW1hZ2UiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJBYm91dFNlY3Rpb24iLCJyZWYiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsImltYWdlQWx0IiwiaXNBY3RpdmUiLCJzZWN0aW9uUmVmIiwiY3VycmVudCIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsImxheW91dEVmZmVjdCIsIm9wYWNpdHkiLCJzY2FsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRpdiIsInN0eWxlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXIiLCJtaXhCbGVuZE1vZGUiLCJoMiIsInAiLCJmaWxsIiwiaDMiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/about-section.tsx\n"));

/***/ })

});