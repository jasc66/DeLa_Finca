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

/***/ "(app-pages-browser)/./components/floating-image.tsx":
/*!***************************************!*\
  !*** ./components/floating-image.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FloatingImage: function() { return /* binding */ FloatingImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ FloatingImage auto */ \nvar _s = $RefreshSig$();\n\n\nfunction FloatingImage(param) {\n    let { src, alt, className = \"\", width, height } = param;\n    _s();\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const img = new window.Image();\n        img.src = src;\n        img.onload = ()=>setIsLoaded(true);\n    }, [\n        src\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"transition-opacity duration-1000 \".concat(isLoaded ? \"opacity-100\" : \"opacity-0\", \" \").concat(className),\n        style: {\n            willChange: \"transform\",\n            transform: \"translate3d(0, 0, 0)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            src: src,\n            alt: alt,\n            width: width,\n            height: height,\n            className: \"object-contain w-full h-full\",\n            style: {\n                filter: \"brightness(1.2) contrast(1.1)\",\n                mixBlendMode: \"multiply\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/floating-image.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/floating-image.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(FloatingImage, \"e/1lVN3R6kIvuSIAmUIHNmZXQsc=\");\n_c = FloatingImage;\nvar _c;\n$RefreshReg$(_c, \"FloatingImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZmxvYXRpbmctaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMkM7QUFDYjtBQVV2QixTQUFTRyxjQUFjLEtBQStEO1FBQS9ELEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxZQUFZLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQXNCLEdBQS9EOztJQUM1QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsTUFBTSxJQUFJQyxPQUFPVixLQUFLO1FBQzVCUyxJQUFJUCxHQUFHLEdBQUdBO1FBQ1ZPLElBQUlFLE1BQU0sR0FBRyxJQUFNSCxZQUFZO0lBQ2pDLEdBQUc7UUFBQ047S0FBSTtJQUVSLHFCQUNFLDhEQUFDVTtRQUNDUixXQUFXLG9DQUE4RUEsT0FBMUNHLFdBQVcsZ0JBQWdCLGFBQVksS0FBYSxPQUFWSDtRQUN6RlMsT0FBTztZQUNMQyxZQUFZO1lBQ1pDLFdBQVc7UUFDYjtrQkFFQSw0RUFBQ2Ysa0RBQUtBO1lBQ0pFLEtBQUtBO1lBQ0xDLEtBQUtBO1lBQ0xFLE9BQU9BO1lBQ1BDLFFBQVFBO1lBQ1JGLFdBQVU7WUFDVlMsT0FBTztnQkFDTEcsUUFBUTtnQkFDUkMsY0FBYztZQUNoQjs7Ozs7Ozs7Ozs7QUFJUjtHQTlCZ0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zsb2F0aW5nLWltYWdlLnRzeD80MTQzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW50ZXJmYWNlIEZsb2F0aW5nSW1hZ2VQcm9wcyB7XG4gIHNyYzogc3RyaW5nXG4gIGFsdDogc3RyaW5nXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGbG9hdGluZ0ltYWdlKHsgc3JjLCBhbHQsIGNsYXNzTmFtZSA9ICcnLCB3aWR0aCwgaGVpZ2h0IH06IEZsb2F0aW5nSW1hZ2VQcm9wcykge1xuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IHdpbmRvdy5JbWFnZSgpXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiBzZXRJc0xvYWRlZCh0cnVlKVxuICB9LCBbc3JjXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgXG4gICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCAke2lzTG9hZGVkID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfSAke2NsYXNzTmFtZX1gfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIGFsdD17YWx0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDEuMikgY29udHJhc3QoMS4xKScsXG4gICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiRmxvYXRpbmdJbWFnZSIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImltZyIsIndpbmRvdyIsIm9ubG9hZCIsImRpdiIsInN0eWxlIiwid2lsbENoYW5nZSIsInRyYW5zZm9ybSIsImZpbHRlciIsIm1peEJsZW5kTW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/floating-image.tsx\n"));

/***/ })

});