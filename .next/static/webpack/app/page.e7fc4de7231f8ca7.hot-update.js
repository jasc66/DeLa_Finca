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

/***/ "(app-pages-browser)/./components/testimonials.tsx":
/*!*************************************!*\
  !*** ./components/testimonials.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/tabs */ \"(app-pages-browser)/./components/ui/tabs.tsx\");\n/* harmony import */ var _barrel_optimize_names_Star_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Star!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/star.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Testimonials() {\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"google\");\n    const trustmaryContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeTab === \"google\" && trustmaryContainerRef.current) {\n            // Clear previous content\n            trustmaryContainerRef.current.innerHTML = \"\";\n            // Initialize Trustmary\n            window.tmary = window.tmary || function() {\n                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                    args[_key] = arguments[_key];\n                }\n                (window.tmary.q = window.tmary.q || []).push(args);\n            };\n            // Create and append the script\n            const script = document.createElement(\"script\");\n            script.src = \"https://widget.trustmary.com/KoVx7GQHD\";\n            script.async = true;\n            // Create a placeholder div for the widget\n            const widgetPlaceholder = document.createElement(\"div\");\n            widgetPlaceholder.id = \"trustmary-widget\";\n            trustmaryContainerRef.current.appendChild(widgetPlaceholder);\n            // Append the script after the placeholder\n            trustmaryContainerRef.current.appendChild(script);\n            // Initialize the app after the script has loaded\n            script.onload = ()=>{\n                if (window.tmary) {\n                    window.tmary(\"app\", \"KoVx7GQHD\");\n                }\n            };\n        }\n        return ()=>{\n            // Cleanup function\n            if (trustmaryContainerRef.current) {\n                trustmaryContainerRef.current.innerHTML = \"\";\n            }\n        };\n    }, [\n        activeTab\n    ]);\n    const tripAdvisorReviews = [\n        {\n            name: \"TripUser1\",\n            text: \"Excelente comida y ambiente. Definitivamente volver\\xe9.\",\n            rating: 5\n        },\n        {\n            name: \"TripUser2\",\n            text: \"Una experiencia culinaria \\xfanica en Quepos. Altamente recomendado.\",\n            rating: 5\n        },\n        {\n            name: \"TripUser3\",\n            text: \"Buena comida, pero el servicio podr\\xeda mejorar un poco.\",\n            rating: 4\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-4xl font-bold text-center mb-12\",\n                    children: \"Lo que dicen nuestros clientes\"\n                }, void 0, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                    defaultValue: \"google\",\n                    className: \"w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsList, {\n                            className: \"grid w-full grid-cols-2 mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsTrigger, {\n                                    value: \"google\",\n                                    onClick: ()=>setActiveTab(\"google\"),\n                                    children: \"Rese\\xf1as de Google\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsTrigger, {\n                                    value: \"tripadvisor\",\n                                    onClick: ()=>setActiveTab(\"tripadvisor\"),\n                                    children: \"TripAdvisor\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsContent, {\n                            value: \"google\",\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: trustmaryContainerRef,\n                                className: \"trustmary-container\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsContent, {\n                            value: \"tripadvisor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                                children: tripAdvisorReviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                        className: \"bg-muted\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                                            className: \"p-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex mb-4\",\n                                                    children: [\n                                                        ...Array(review.rating)\n                                                    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Star_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                            className: \"h-5 w-5 fill-yellow-400 text-yellow-400\"\n                                                        }, i, false, {\n                                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                            lineNumber: 104,\n                                                            columnNumber: 25\n                                                        }, this))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mb-4\",\n                                                    children: review.text\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-semibold\",\n                                                    children: review.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"Ht6zK5r7IQVdLcO6Vn/2yf9KFtA=\");\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDSztBQUN1QjtBQUM1QztBQVdwQixTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1hLHdCQUF3QlgsNkNBQU1BLENBQWlCO0lBRXJERCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLGNBQWMsWUFBWUUsc0JBQXNCQyxPQUFPLEVBQUU7WUFDM0QseUJBQXlCO1lBQ3pCRCxzQkFBc0JDLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHO1lBRTFDLHVCQUF1QjtZQUN2QkMsT0FBT0MsS0FBSyxHQUFHRCxPQUFPQyxLQUFLLElBQUk7Z0JBQVM7b0JBQUdDLEtBQUgsdUJBQWM7O2dCQUNuREYsQ0FBQUEsT0FBT0MsS0FBSyxDQUFDRSxDQUFDLEdBQUdILE9BQU9DLEtBQUssQ0FBQ0UsQ0FBQyxJQUFJLEVBQUUsRUFBRUMsSUFBSSxDQUFDRjtZQUMvQztZQUVBLCtCQUErQjtZQUMvQixNQUFNRyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7WUFDdENGLE9BQU9HLEdBQUcsR0FBRztZQUNiSCxPQUFPSSxLQUFLLEdBQUc7WUFFZiwwQ0FBMEM7WUFDMUMsTUFBTUMsb0JBQW9CSixTQUFTQyxhQUFhLENBQUM7WUFDakRHLGtCQUFrQkMsRUFBRSxHQUFHO1lBQ3ZCZCxzQkFBc0JDLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDRjtZQUUxQywwQ0FBMEM7WUFDMUNiLHNCQUFzQkMsT0FBTyxDQUFDYyxXQUFXLENBQUNQO1lBRTFDLGlEQUFpRDtZQUNqREEsT0FBT1EsTUFBTSxHQUFHO2dCQUNkLElBQUliLE9BQU9DLEtBQUssRUFBRTtvQkFDaEJELE9BQU9DLEtBQUssQ0FBQyxPQUFPO2dCQUN0QjtZQUNGO1FBQ0Y7UUFFQSxPQUFPO1lBQ0wsbUJBQW1CO1lBQ25CLElBQUlKLHNCQUFzQkMsT0FBTyxFQUFFO2dCQUNqQ0Qsc0JBQXNCQyxPQUFPLENBQUNDLFNBQVMsR0FBRztZQUM1QztRQUNGO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBRWQsTUFBTW1CLHFCQUFxQjtRQUN6QjtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1FBQ1Y7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUF1Qzs7Ozs7OzhCQUVyRCw4REFBQzlCLHFEQUFJQTtvQkFBQ2lDLGNBQWE7b0JBQVNILFdBQVU7O3NDQUNwQyw4REFBQzVCLHlEQUFRQTs0QkFBQzRCLFdBQVU7OzhDQUNsQiw4REFBQzNCLDREQUFXQTtvQ0FBQytCLE9BQU07b0NBQVNDLFNBQVMsSUFBTTVCLGFBQWE7OENBQVc7Ozs7Ozs4Q0FHbkUsOERBQUNKLDREQUFXQTtvQ0FBQytCLE9BQU07b0NBQWNDLFNBQVMsSUFBTTVCLGFBQWE7OENBQWdCOzs7Ozs7Ozs7Ozs7c0NBSy9FLDhEQUFDTiw0REFBV0E7NEJBQUNpQyxPQUFNOzRCQUFTSixXQUFVO3NDQUNwQyw0RUFBQ0M7Z0NBQUlLLEtBQUs1QjtnQ0FBdUJzQixXQUFVOzs7Ozs7Ozs7OztzQ0FHN0MsOERBQUM3Qiw0REFBV0E7NEJBQUNpQyxPQUFNO3NDQUNqQiw0RUFBQ0g7Z0NBQUlELFdBQVU7MENBQ1pMLG1CQUFtQlksR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUMvQiw4REFBQ3pDLHFEQUFJQTt3Q0FBYWdDLFdBQVU7a0RBQzFCLDRFQUFDL0IsNERBQVdBOzRDQUFDK0IsV0FBVTs7OERBQ3JCLDhEQUFDQztvREFBSUQsV0FBVTs4REFDWjsyREFBSVUsTUFBTUYsT0FBT1YsTUFBTTtxREFBRSxDQUFDUyxHQUFHLENBQUMsQ0FBQ0ksR0FBR0Msa0JBQ2pDLDhEQUFDdEMsZ0ZBQUlBOzREQUFTMEIsV0FBVTsyREFBYlk7Ozs7Ozs7Ozs7OERBR2YsOERBQUNDO29EQUFFYixXQUFVOzhEQUFRUSxPQUFPWCxJQUFJOzs7Ozs7OERBQ2hDLDhEQUFDZ0I7b0RBQUViLFdBQVU7OERBQWlCUSxPQUFPWixJQUFJOzs7Ozs7Ozs7Ozs7dUNBUmxDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjNCO0dBckd3QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWxzLnRzeD80OGU0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IFRhYnMsIFRhYnNDb250ZW50LCBUYWJzTGlzdCwgVGFic1RyaWdnZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYnNcIlxuaW1wb3J0IHsgU3RhciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICB0bWFyeToge1xuICAgICAgKGFjdGlvbjogc3RyaW5nLCB3aWRnZXRJZDogc3RyaW5nKTogdm9pZDtcbiAgICAgIHE/OiBhbnlbXTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwiZ29vZ2xlXCIpXG4gIGNvbnN0IHRydXN0bWFyeUNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVUYWIgPT09IFwiZ29vZ2xlXCIgJiYgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgIHRydXN0bWFyeUNvbnRhaW5lclJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAvLyBJbml0aWFsaXplIFRydXN0bWFyeVxuICAgICAgd2luZG93LnRtYXJ5ID0gd2luZG93LnRtYXJ5IHx8IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICh3aW5kb3cudG1hcnkucSA9IHdpbmRvdy50bWFyeS5xIHx8IFtdKS5wdXNoKGFyZ3MpO1xuICAgICAgfTtcblxuICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHNjcmlwdFxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3dpZGdldC50cnVzdG1hcnkuY29tL0tvVng3R1FIRFwiO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgcGxhY2Vob2xkZXIgZGl2IGZvciB0aGUgd2lkZ2V0XG4gICAgICBjb25zdCB3aWRnZXRQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd2lkZ2V0UGxhY2Vob2xkZXIuaWQgPSAndHJ1c3RtYXJ5LXdpZGdldCc7XG4gICAgICB0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudC5hcHBlbmRDaGlsZCh3aWRnZXRQbGFjZWhvbGRlcik7XG5cbiAgICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IGFmdGVyIHRoZSBwbGFjZWhvbGRlclxuICAgICAgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgYXBwIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGxvYWRlZFxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy50bWFyeSkge1xuICAgICAgICAgIHdpbmRvdy50bWFyeSgnYXBwJywgJ0tvVng3R1FIRCcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uXG4gICAgICBpZiAodHJ1c3RtYXJ5Q29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2FjdGl2ZVRhYl0pO1xuXG4gIGNvbnN0IHRyaXBBZHZpc29yUmV2aWV3cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlRyaXBVc2VyMVwiLFxuICAgICAgdGV4dDogXCJFeGNlbGVudGUgY29taWRhIHkgYW1iaWVudGUuIERlZmluaXRpdmFtZW50ZSB2b2x2ZXLDqS5cIixcbiAgICAgIHJhdGluZzogNVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUcmlwVXNlcjJcIixcbiAgICAgIHRleHQ6IFwiVW5hIGV4cGVyaWVuY2lhIGN1bGluYXJpYSDDum5pY2EgZW4gUXVlcG9zLiBBbHRhbWVudGUgcmVjb21lbmRhZG8uXCIsXG4gICAgICByYXRpbmc6IDVcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVHJpcFVzZXIzXCIsXG4gICAgICB0ZXh0OiBcIkJ1ZW5hIGNvbWlkYSwgcGVybyBlbCBzZXJ2aWNpbyBwb2Ryw61hIG1lam9yYXIgdW4gcG9jby5cIixcbiAgICAgIHJhdGluZzogNFxuICAgIH1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTEyXCI+TG8gcXVlIGRpY2VuIG51ZXN0cm9zIGNsaWVudGVzPC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxUYWJzIGRlZmF1bHRWYWx1ZT1cImdvb2dsZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxUYWJzTGlzdCBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBncmlkLWNvbHMtMiBtYi04XCI+XG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJnb29nbGVcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJnb29nbGVcIil9PlxuICAgICAgICAgICAgICBSZXNlw7FhcyBkZSBHb29nbGVcbiAgICAgICAgICAgIDwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJ0cmlwYWR2aXNvclwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihcInRyaXBhZHZpc29yXCIpfT5cbiAgICAgICAgICAgICAgVHJpcEFkdmlzb3JcbiAgICAgICAgICAgIDwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgPC9UYWJzTGlzdD5cbiAgICAgICAgICBcbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJnb29nbGVcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgcmVmPXt0cnVzdG1hcnlDb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cInRydXN0bWFyeS1jb250YWluZXJcIiAvPlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG4gICAgICAgICAgXG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwidHJpcGFkdmlzb3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICB7dHJpcEFkdmlzb3JSZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyZXZpZXcucmF0aW5nKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhciBrZXk9e2l9IGNsYXNzTmFtZT1cImgtNSB3LTUgZmlsbC15ZWxsb3ctNDAwIHRleHQteWVsbG93LTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e3Jldmlldy50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntyZXZpZXcubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlRhYnMiLCJUYWJzQ29udGVudCIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJTdGFyIiwiVGVzdGltb25pYWxzIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidHJ1c3RtYXJ5Q29udGFpbmVyUmVmIiwiY3VycmVudCIsImlubmVySFRNTCIsIndpbmRvdyIsInRtYXJ5IiwiYXJncyIsInEiLCJwdXNoIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJ3aWRnZXRQbGFjZWhvbGRlciIsImlkIiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJ0cmlwQWR2aXNvclJldmlld3MiLCJuYW1lIiwidGV4dCIsInJhdGluZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwib25DbGljayIsInJlZiIsIm1hcCIsInJldmlldyIsImluZGV4IiwiQXJyYXkiLCJfIiwiaSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonials.tsx\n"));

/***/ })

});