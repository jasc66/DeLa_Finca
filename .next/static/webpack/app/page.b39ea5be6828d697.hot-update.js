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

/***/ "(app-pages-browser)/./components/image-carousel.tsx":
/*!***************************************!*\
  !*** ./components/image-carousel.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageCarousel: function() { return /* binding */ ImageCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./components/ui/carousel.tsx\");\n/* __next_internal_client_entry_do_not_use__ ImageCarousel auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst images = [\n    {\n        src: \"/img/comida1.jpg\",\n        alt: \"Plato 1\"\n    },\n    {\n        src: \"/img/comida3.jpg\",\n        alt: \"Plato 2\"\n    },\n    {\n        src: \"/img/comida2.jpg\",\n        alt: \"Plato 3\"\n    },\n    {\n        src: \"/img/comida4.jpg\",\n        alt: \"Plato 4\"\n    },\n    {\n        src: \"/img/comida7.jpg\",\n        alt: \"Plato 5\"\n    },\n    {\n        src: \"/img/comida6.jpg\",\n        alt: \"Plato 6\"\n    }\n];\nfunction ImageCarousel() {\n    _s();\n    const [api, setApi] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [current, setCurrent] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (!api) {\n            return;\n        }\n        setCount(api.scrollSnapList().length);\n        setCurrent(api.selectedScrollSnap() + 1);\n        api.on(\"select\", ()=>{\n            setCurrent(api.selectedScrollSnap() + 1);\n        });\n    }, [\n        api\n    ]);\n    const plugin = react__WEBPACK_IMPORTED_MODULE_1__.useRef(Autoplay({\n        delay: 4000,\n        stopOnInteraction: true\n    }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n        plugins: [\n            plugin.current\n        ],\n        className: \"w-full max-w-5xl\",\n        setApi: setApi,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselContent, {\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselItem, {\n                        className: \"md:basis-1/2 lg:basis-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                                    className: \"flex aspect-square items-center justify-center p-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-full h-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: image.src,\n                                            alt: image.alt,\n                                            fill: true,\n                                            className: \"rounded-md object-cover\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselPrevious, {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselNext, {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2 text-center text-sm text-muted-foreground\",\n                children: [\n                    \"Plato \",\n                    current,\n                    \" de \",\n                    count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/image-carousel.tsx\",\n        lineNumber: 46,\n        columnNumber: 7\n    }, this);\n}\n_s(ImageCarousel, \"TZvD8/5G1BgU/oT4dlWdzt5vs0U=\");\n_c = ImageCarousel;\nvar _c;\n$RefreshReg$(_c, \"ImageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaW1hZ2UtY2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNBO0FBQzBCO0FBT3ZCO0FBRWpDLE1BQU1TLFNBQVM7SUFDYjtRQUFFQyxLQUFLO1FBQW9CQyxLQUFLO0lBQVU7SUFDMUM7UUFBRUQsS0FBSztRQUFvQkMsS0FBSztJQUFVO0lBQzFDO1FBQUVELEtBQUs7UUFBb0JDLEtBQUs7SUFBVTtJQUMxQztRQUFFRCxLQUFLO1FBQW9CQyxLQUFLO0lBQVU7SUFDMUM7UUFBRUQsS0FBSztRQUFvQkMsS0FBSztJQUFVO0lBQzFDO1FBQUVELEtBQUs7UUFBb0JDLEtBQUs7SUFBVTtDQUMzQztBQUVNLFNBQVNDOztJQUNaLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHZCwyQ0FBYztJQUNwQyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwyQ0FBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLDJDQUFjLENBQUM7SUFFekNBLDRDQUFlLENBQUM7UUFDZCxJQUFJLENBQUNhLEtBQUs7WUFDUjtRQUNGO1FBRUFNLFNBQVNOLElBQUlRLGNBQWMsR0FBR0MsTUFBTTtRQUNwQ0wsV0FBV0osSUFBSVUsa0JBQWtCLEtBQUs7UUFFdENWLElBQUlXLEVBQUUsQ0FBQyxVQUFVO1lBQ2ZQLFdBQVdKLElBQUlVLGtCQUFrQixLQUFLO1FBQ3hDO0lBQ0YsR0FBRztRQUFDVjtLQUFJO0lBRVIsTUFBTVksU0FBU3pCLHlDQUFZLENBQ3pCMkIsU0FBUztRQUFFQyxPQUFPO1FBQU1DLG1CQUFtQjtJQUFLO0lBR2xELHFCQUNFLDhEQUFDekIsNkRBQVFBO1FBQ1AwQixTQUFTO1lBQUNMLE9BQU9ULE9BQU87U0FBQztRQUN6QmUsV0FBVTtRQUNWakIsUUFBUUE7OzBCQUVSLDhEQUFDVCxvRUFBZUE7MEJBQ2JJLE9BQU91QixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDNUIsaUVBQVlBO3dCQUFheUIsV0FBVTtrQ0FDbEMsNEVBQUNJOzRCQUFJSixXQUFVO3NDQUNiLDRFQUFDN0IscURBQUlBOzBDQUNILDRFQUFDQyw0REFBV0E7b0NBQUM0QixXQUFVOzhDQUNyQiw0RUFBQ0k7d0NBQUlKLFdBQVU7a0RBQ2IsNEVBQUM5QixrREFBS0E7NENBQ0pTLEtBQUt1QixNQUFNdkIsR0FBRzs0Q0FDZEMsS0FBS3NCLE1BQU10QixHQUFHOzRDQUNkeUIsSUFBSTs0Q0FDSkwsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBVEhHOzs7Ozs7Ozs7OzBCQWtCdkIsOERBQUMxQixxRUFBZ0JBOzs7OzswQkFDakIsOERBQUNELGlFQUFZQTs7Ozs7MEJBQ2IsOERBQUM0QjtnQkFBSUosV0FBVTs7b0JBQWlEO29CQUN2RGY7b0JBQVE7b0JBQUtFOzs7Ozs7Ozs7Ozs7O0FBSTVCO0dBdkRjTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ltYWdlLWNhcm91c2VsLnRzeD8wYzM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuaW1wb3J0IHtcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsQ29udGVudCxcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbE5leHQsXG4gIENhcm91c2VsUHJldmlvdXMsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2Fyb3VzZWxcIlxuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHsgc3JjOiBcIi9pbWcvY29taWRhMS5qcGdcIiwgYWx0OiBcIlBsYXRvIDFcIiB9LFxuICB7IHNyYzogXCIvaW1nL2NvbWlkYTMuanBnXCIsIGFsdDogXCJQbGF0byAyXCIgfSxcbiAgeyBzcmM6IFwiL2ltZy9jb21pZGEyLmpwZ1wiLCBhbHQ6IFwiUGxhdG8gM1wiIH0sXG4gIHsgc3JjOiBcIi9pbWcvY29taWRhNC5qcGdcIiwgYWx0OiBcIlBsYXRvIDRcIiB9LFxuICB7IHNyYzogXCIvaW1nL2NvbWlkYTcuanBnXCIsIGFsdDogXCJQbGF0byA1XCIgfSxcbiAgeyBzcmM6IFwiL2ltZy9jb21pZGE2LmpwZ1wiLCBhbHQ6IFwiUGxhdG8gNlwiIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBJbWFnZUNhcm91c2VsKCkge1xuICAgIGNvbnN0IFthcGksIHNldEFwaV0gPSBSZWFjdC51c2VTdGF0ZTxDYXJvdXNlbEFwaT4oKVxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IFJlYWN0LnVzZVN0YXRlKDApXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKCFhcGkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gIFxuICAgICAgc2V0Q291bnQoYXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoKVxuICAgICAgc2V0Q3VycmVudChhcGkuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxKVxuICBcbiAgICAgIGFwaS5vbihcInNlbGVjdFwiLCAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnQoYXBpLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMSlcbiAgICAgIH0pXG4gICAgfSwgW2FwaV0pXG4gIFxuICAgIGNvbnN0IHBsdWdpbiA9IFJlYWN0LnVzZVJlZihcbiAgICAgIEF1dG9wbGF5KHsgZGVsYXk6IDQwMDAsIHN0b3BPbkludGVyYWN0aW9uOiB0cnVlIH0pXG4gICAgKVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHBsdWdpbnM9e1twbHVnaW4uY3VycmVudF19XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGxcIlxuICAgICAgICBzZXRBcGk9e3NldEFwaX1cbiAgICAgID5cbiAgICAgICAgPENhcm91c2VsQ29udGVudD5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1kOmJhc2lzLTEvMiBsZzpiYXNpcy0xLzNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTFcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGFzcGVjdC1zcXVhcmUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbENvbnRlbnQ+XG4gICAgICAgIDxDYXJvdXNlbFByZXZpb3VzIC8+XG4gICAgICAgIDxDYXJvdXNlbE5leHQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgUGxhdG8ge2N1cnJlbnR9IGRlIHtjb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIClcbiAgfVxuICAiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxDb250ZW50IiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxOZXh0IiwiQ2Fyb3VzZWxQcmV2aW91cyIsImltYWdlcyIsInNyYyIsImFsdCIsIkltYWdlQ2Fyb3VzZWwiLCJhcGkiLCJzZXRBcGkiLCJ1c2VTdGF0ZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiY291bnQiLCJzZXRDb3VudCIsInVzZUVmZmVjdCIsInNjcm9sbFNuYXBMaXN0IiwibGVuZ3RoIiwic2VsZWN0ZWRTY3JvbGxTbmFwIiwib24iLCJwbHVnaW4iLCJ1c2VSZWYiLCJBdXRvcGxheSIsImRlbGF5Iiwic3RvcE9uSW50ZXJhY3Rpb24iLCJwbHVnaW5zIiwiY2xhc3NOYW1lIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImRpdiIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/image-carousel.tsx\n"));

/***/ })

});