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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/tabs */ \"(app-pages-browser)/./components/ui/tabs.tsx\");\n/* harmony import */ var _barrel_optimize_names_Star_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Star!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/star.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Testimonials() {\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"google\");\n    const trustmaryContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeTab === \"google\" && trustmaryContainerRef.current) {\n            // Clear previous content\n            trustmaryContainerRef.current.innerHTML = \"\";\n            // Initialize Trustmary\n            window.tmary = window.tmary || function() {\n                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                    args[_key] = arguments[_key];\n                }\n                (window.tmary.q = window.tmary.q || []).push(args);\n            };\n            // Create a placeholder div for the widget\n            const widgetPlaceholder = document.createElement(\"div\");\n            widgetPlaceholder.id = \"trustmary-widget\";\n            trustmaryContainerRef.current.appendChild(widgetPlaceholder);\n            // Create and append the script\n            const script = document.createElement(\"script\");\n            script.src = \"https://widget.trustmary.com/KoVx7GQHD\";\n            script.async = true;\n            // Initialize the app after the script has loaded\n            script.onload = ()=>{\n                if (window.tmary) {\n                    window.tmary(\"app\", \"KoVx7GQHD\");\n                }\n            };\n            // Append the script after the placeholder\n            trustmaryContainerRef.current.appendChild(script);\n        }\n        return ()=>{\n            // Cleanup function\n            if (trustmaryContainerRef.current) {\n                trustmaryContainerRef.current.innerHTML = \"\";\n            }\n        };\n    }, [\n        activeTab\n    ]);\n    const tripAdvisorReviews = [\n        {\n            name: \"TripUser1\",\n            text: \"Excelente comida y ambiente. Definitivamente volver\\xe9.\",\n            rating: 5,\n            image: \"/img/review1.jpg\"\n        },\n        {\n            name: \"TripUser2\",\n            text: \"Una experiencia culinaria \\xfanica en Quepos. Altamente recomendado.\",\n            rating: 5,\n            image: \"/img/review2.jpg\"\n        },\n        {\n            name: \"TripUser3\",\n            text: \"Buena comida, pero el servicio podr\\xeda mejorar un poco.\",\n            rating: 4,\n            image: \"/img/review3.jpg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-4xl font-bold text-center mb-12\",\n                    children: \"Lo que dicen nuestros clientes\"\n                }, void 0, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                    defaultValue: \"google\",\n                    className: \"w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsList, {\n                            className: \"grid w-full grid-cols-2 mb-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsTrigger, {\n                                value: \"google\",\n                                onClick: ()=>setActiveTab(\"google\"),\n                                children: \"Rese\\xf1as de Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsContent, {\n                            value: \"google\",\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: trustmaryContainerRef,\n                                className: \"trustmary-container\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsContent, {\n                            value: \"tripadvisor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                                children: tripAdvisorReviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                        className: \"bg-muted\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                                            className: \"p-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex mb-4\",\n                                                    children: [\n                                                        ...Array(review.rating)\n                                                    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                            className: \"h-5 w-5 fill-yellow-400 text-yellow-400\"\n                                                        }, i, false, {\n                                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 25\n                                                        }, this))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative w-full h-40 mb-4\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        src: review.image,\n                                                        alt: \"Review by \".concat(review.name),\n                                                        layout: \"fill\",\n                                                        objectFit: \"cover\",\n                                                        className: \"rounded-md\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mb-4\",\n                                                    children: review.text\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-semibold\",\n                                                    children: review.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"Ht6zK5r7IQVdLcO6Vn/2yf9KFtA=\");\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ0s7QUFDdUI7QUFDNUM7QUFDTDtBQVdmLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTWMsd0JBQXdCWiw2Q0FBTUEsQ0FBaUI7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsY0FBYyxZQUFZRSxzQkFBc0JDLE9BQU8sRUFBRTtZQUMzRCx5QkFBeUI7WUFDekJELHNCQUFzQkMsT0FBTyxDQUFDQyxTQUFTLEdBQUc7WUFFMUMsdUJBQXVCO1lBQ3ZCQyxPQUFPQyxLQUFLLEdBQUdELE9BQU9DLEtBQUssSUFBSTtnQkFBUztvQkFBR0MsS0FBSCx1QkFBYzs7Z0JBQ25ERixDQUFBQSxPQUFPQyxLQUFLLENBQUNFLENBQUMsR0FBR0gsT0FBT0MsS0FBSyxDQUFDRSxDQUFDLElBQUksRUFBRSxFQUFFQyxJQUFJLENBQUNGO1lBQy9DO1lBRUEsMENBQTBDO1lBQzFDLE1BQU1HLG9CQUFvQkMsU0FBU0MsYUFBYSxDQUFDO1lBQ2pERixrQkFBa0JHLEVBQUUsR0FBRztZQUN2Qlgsc0JBQXNCQyxPQUFPLENBQUNXLFdBQVcsQ0FBQ0o7WUFFMUMsK0JBQStCO1lBQy9CLE1BQU1LLFNBQVNKLFNBQVNDLGFBQWEsQ0FBQztZQUN0Q0csT0FBT0MsR0FBRyxHQUFHO1lBQ2JELE9BQU9FLEtBQUssR0FBRztZQUVmLGlEQUFpRDtZQUNqREYsT0FBT0csTUFBTSxHQUFHO2dCQUNkLElBQUliLE9BQU9DLEtBQUssRUFBRTtvQkFDaEJELE9BQU9DLEtBQUssQ0FBQyxPQUFPO2dCQUN0QjtZQUNGO1lBRUEsMENBQTBDO1lBQzFDSixzQkFBc0JDLE9BQU8sQ0FBQ1csV0FBVyxDQUFDQztRQUM1QztRQUVBLE9BQU87WUFDTCxtQkFBbUI7WUFDbkIsSUFBSWIsc0JBQXNCQyxPQUFPLEVBQUU7Z0JBQ2pDRCxzQkFBc0JDLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHO1lBQzVDO1FBQ0Y7SUFDRixHQUFHO1FBQUNKO0tBQVU7SUFFZCxNQUFNbUIscUJBQXFCO1FBQ3pCO1lBQ0VDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE9BQU87UUFDVDtRQUNBO1lBQ0VILE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE9BQU87UUFDVDtRQUNBO1lBQ0VILE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE9BQU87UUFDVDtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQXVDOzs7Ozs7OEJBRXJELDhEQUFDaEMscURBQUlBO29CQUFDbUMsY0FBYTtvQkFBU0gsV0FBVTs7c0NBQ3BDLDhEQUFDOUIseURBQVFBOzRCQUFDOEIsV0FBVTtzQ0FDbEIsNEVBQUM3Qiw0REFBV0E7Z0NBQUNpQyxPQUFNO2dDQUFTQyxTQUFTLElBQU03QixhQUFhOzBDQUFXOzs7Ozs7Ozs7OztzQ0FLckUsOERBQUNQLDREQUFXQTs0QkFBQ21DLE9BQU07NEJBQVNKLFdBQVU7c0NBQ3BDLDRFQUFDQztnQ0FBSUssS0FBSzdCO2dDQUF1QnVCLFdBQVU7Ozs7Ozs7Ozs7O3NDQUc3Qyw4REFBQy9CLDREQUFXQTs0QkFBQ21DLE9BQU07c0NBQ2pCLDRFQUFDSDtnQ0FBSUQsV0FBVTswQ0FDWk4sbUJBQW1CYSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQy9CLDhEQUFDM0MscURBQUlBO3dDQUFha0MsV0FBVTtrREFDMUIsNEVBQUNqQyw0REFBV0E7NENBQUNpQyxXQUFVOzs4REFDckIsOERBQUNDO29EQUFJRCxXQUFVOzhEQUNaOzJEQUFJVSxNQUFNRixPQUFPWCxNQUFNO3FEQUFFLENBQUNVLEdBQUcsQ0FBQyxDQUFDSSxHQUFHQyxrQkFDakMsOERBQUN4QyxnRkFBSUE7NERBQVM0QixXQUFVOzJEQUFiWTs7Ozs7Ozs7Ozs4REFHZiw4REFBQ1g7b0RBQUlELFdBQVU7OERBQ2IsNEVBQUMzQixrREFBS0E7d0RBQ0prQixLQUFLaUIsT0FBT1YsS0FBSzt3REFDakJlLEtBQUssYUFBeUIsT0FBWkwsT0FBT2IsSUFBSTt3REFDN0JtQixRQUFPO3dEQUNQQyxXQUFVO3dEQUNWZixXQUFVOzs7Ozs7Ozs7Ozs4REFHZCw4REFBQ2dCO29EQUFFaEIsV0FBVTs4REFBUVEsT0FBT1osSUFBSTs7Ozs7OzhEQUNoQyw4REFBQ29CO29EQUFFaEIsV0FBVTs4REFBaUJRLE9BQU9iLElBQUk7Ozs7Ozs7Ozs7Ozt1Q0FqQmxDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQjNCO0dBOUd3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWxzLnRzeD80OGU0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IFRhYnMsIFRhYnNDb250ZW50LCBUYWJzTGlzdCwgVGFic1RyaWdnZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYnNcIlxuaW1wb3J0IHsgU3RhciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHRtYXJ5OiB7XG4gICAgICAoYWN0aW9uOiBzdHJpbmcsIHdpZGdldElkOiBzdHJpbmcpOiB2b2lkO1xuICAgICAgcT86IGFueVtdO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxzKCkge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoXCJnb29nbGVcIilcbiAgY29uc3QgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVRhYiA9PT0gXCJnb29nbGVcIiAmJiB0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgLy8gQ2xlYXIgcHJldmlvdXMgY29udGVudFxuICAgICAgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgVHJ1c3RtYXJ5XG4gICAgICB3aW5kb3cudG1hcnkgPSB3aW5kb3cudG1hcnkgfHwgZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgKHdpbmRvdy50bWFyeS5xID0gd2luZG93LnRtYXJ5LnEgfHwgW10pLnB1c2goYXJncyk7XG4gICAgICB9O1xuXG4gICAgICAvLyBDcmVhdGUgYSBwbGFjZWhvbGRlciBkaXYgZm9yIHRoZSB3aWRnZXRcbiAgICAgIGNvbnN0IHdpZGdldFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB3aWRnZXRQbGFjZWhvbGRlci5pZCA9ICd0cnVzdG1hcnktd2lkZ2V0JztcbiAgICAgIHRydXN0bWFyeUNvbnRhaW5lclJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHdpZGdldFBsYWNlaG9sZGVyKTtcblxuICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHNjcmlwdFxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3dpZGdldC50cnVzdG1hcnkuY29tL0tvVng3R1FIRFwiO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgYXBwIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGxvYWRlZFxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy50bWFyeSkge1xuICAgICAgICAgIHdpbmRvdy50bWFyeSgnYXBwJywgJ0tvVng3R1FIRCcpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBBcHBlbmQgdGhlIHNjcmlwdCBhZnRlciB0aGUgcGxhY2Vob2xkZXJcbiAgICAgIHRydXN0bWFyeUNvbnRhaW5lclJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIENsZWFudXAgZnVuY3Rpb25cbiAgICAgIGlmICh0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICB0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbYWN0aXZlVGFiXSk7XG5cbiAgY29uc3QgdHJpcEFkdmlzb3JSZXZpZXdzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiVHJpcFVzZXIxXCIsXG4gICAgICB0ZXh0OiBcIkV4Y2VsZW50ZSBjb21pZGEgeSBhbWJpZW50ZS4gRGVmaW5pdGl2YW1lbnRlIHZvbHZlcsOpLlwiLFxuICAgICAgcmF0aW5nOiA1LFxuICAgICAgaW1hZ2U6IFwiL2ltZy9yZXZpZXcxLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRyaXBVc2VyMlwiLFxuICAgICAgdGV4dDogXCJVbmEgZXhwZXJpZW5jaWEgY3VsaW5hcmlhIMO6bmljYSBlbiBRdWVwb3MuIEFsdGFtZW50ZSByZWNvbWVuZGFkby5cIixcbiAgICAgIHJhdGluZzogNSxcbiAgICAgIGltYWdlOiBcIi9pbWcvcmV2aWV3Mi5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUcmlwVXNlcjNcIixcbiAgICAgIHRleHQ6IFwiQnVlbmEgY29taWRhLCBwZXJvIGVsIHNlcnZpY2lvIHBvZHLDrWEgbWVqb3JhciB1biBwb2NvLlwiLFxuICAgICAgcmF0aW5nOiA0LFxuICAgICAgaW1hZ2U6IFwiL2ltZy9yZXZpZXczLmpwZ1wiXG4gICAgfVxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItMTJcIj5MbyBxdWUgZGljZW4gbnVlc3Ryb3MgY2xpZW50ZXM8L2gyPlxuICAgICAgICBcbiAgICAgICAgPFRhYnMgZGVmYXVsdFZhbHVlPVwiZ29vZ2xlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPFRhYnNMaXN0IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGdyaWQtY29scy0yIG1iLThcIj5cbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cImdvb2dsZVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihcImdvb2dsZVwiKX0+XG4gICAgICAgICAgICAgIFJlc2XDsWFzIGRlIEdvb2dsZVxuICAgICAgICAgICAgPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICA8L1RhYnNMaXN0PlxuICAgICAgICAgIFxuICAgICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cImdvb2dsZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiByZWY9e3RydXN0bWFyeUNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwidHJ1c3RtYXJ5LWNvbnRhaW5lclwiIC8+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgICBcbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJ0cmlwYWR2aXNvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgIHt0cmlwQWR2aXNvclJldmlld3MubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHJldmlldy5yYXRpbmcpXS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyIGtleT17aX0gY2xhc3NOYW1lPVwiaC01IHctNSBmaWxsLXllbGxvdy00MDAgdGV4dC15ZWxsb3ctNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtNDAgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXZpZXcuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BSZXZpZXcgYnkgJHtyZXZpZXcubmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntyZXZpZXcudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57cmV2aWV3Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlRhYnMiLCJUYWJzQ29udGVudCIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJTdGFyIiwiSW1hZ2UiLCJUZXN0aW1vbmlhbHMiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0cnVzdG1hcnlDb250YWluZXJSZWYiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwid2luZG93IiwidG1hcnkiLCJhcmdzIiwicSIsInB1c2giLCJ3aWRnZXRQbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJzY3JpcHQiLCJzcmMiLCJhc3luYyIsIm9ubG9hZCIsInRyaXBBZHZpc29yUmV2aWV3cyIsIm5hbWUiLCJ0ZXh0IiwicmF0aW5nIiwiaW1hZ2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJyZWYiLCJtYXAiLCJyZXZpZXciLCJpbmRleCIsIkFycmF5IiwiXyIsImkiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonials.tsx\n"));

/***/ })

});