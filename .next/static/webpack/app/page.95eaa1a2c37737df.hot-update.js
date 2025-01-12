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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Testimonials() {\n    _s();\n    const trustmaryContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Verifica si el contenedor está disponible\n        if (trustmaryContainerRef.current) {\n            trustmaryContainerRef.current.innerHTML = \"\" // Limpia el contenedor\n            ;\n            // Crea un marcador para el widget\n            const widgetPlaceholder = document.createElement(\"div\");\n            widgetPlaceholder.id = \"trustmary-widget\";\n            trustmaryContainerRef.current.appendChild(widgetPlaceholder);\n            // Función para inicializar el widget\n            const initTrustmary = ()=>{\n                try {\n                    if (!window.tmary) {\n                        window.tmary = function() {\n                            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                                args[_key] = arguments[_key];\n                            }\n                            (window.tmary.q = window.tmary.q || []).push(args);\n                        };\n                    }\n                    window.tmary(\"app\", \"KoVx7GQHD\") // ID del widget\n                    ;\n                } catch (error) {\n                    console.warn(\"Error al inicializar Trustmary:\", error);\n                }\n            };\n            // Crea el script para cargar el widget\n            const script = document.createElement(\"script\");\n            script.src = \"https://widget.trustmary.com/KoVx7GQHD\";\n            script.async = true;\n            // Maneja la carga del script\n            script.onload = ()=>{\n                if (trustmaryContainerRef.current) {\n                    try {\n                        initTrustmary();\n                    } catch (error) {\n                        console.warn(\"Error en script.onload:\", error);\n                    }\n                }\n            };\n            // Maneja errores globales relacionados con el script\n            const originalError = console.error;\n            console.error = function() {\n                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                    args[_key] = arguments[_key];\n                }\n                var _args_;\n                const errorMessage = ((_args_ = args[0]) === null || _args_ === void 0 ? void 0 : _args_.toString()) || \"\";\n                if (errorMessage.includes(\"TypeError\") && errorMessage.includes(\"parentElement\")) {\n                    console.log(\"Error atrapado y manejado de Trustmary:\", errorMessage);\n                    return;\n                }\n                originalError.apply(console, args);\n            };\n            // Añade el script al contenedor\n            trustmaryContainerRef.current.appendChild(script);\n            // Limpieza del componente\n            return ()=>{\n                if (trustmaryContainerRef.current) {\n                    while(trustmaryContainerRef.current.firstChild){\n                        trustmaryContainerRef.current.removeChild(trustmaryContainerRef.current.firstChild);\n                    }\n                }\n                window.removeEventListener(\"load\", initTrustmary);\n                console.error = originalError // Restaura console.error\n                ;\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 z-0 bg-cover bg-center bg-fixed\",\n                style: {\n                    backgroundImage: \"url('/img/fondo-gris.avif')\",\n                    filter: \"brightness(0.7)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 relative z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl font-bold text-center mb-12 text-white\",\n                        children: \"Lo que dicen nuestros clientes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"bg-black/90 backdrop-blur-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: trustmaryContainerRef,\n                                className: \"trustmary-container\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/components/testimonials.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"SvQDvIlXakZSNBSdbRyTgvK5yXc=\");\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXlDO0FBQ2U7QUFXekMsU0FBU0k7O0lBQ3RCLE1BQU1DLHdCQUF3QkosNkNBQU1BLENBQWlCO0lBRXJERCxnREFBU0EsQ0FBQztRQUNSLDRDQUE0QztRQUM1QyxJQUFJSyxzQkFBc0JDLE9BQU8sRUFBRTtZQUNqQ0Qsc0JBQXNCQyxPQUFPLENBQUNDLFNBQVMsR0FBRyxHQUFHLHVCQUF1Qjs7WUFFcEUsa0NBQWtDO1lBQ2xDLE1BQU1DLG9CQUFvQkMsU0FBU0MsYUFBYSxDQUFDO1lBQ2pERixrQkFBa0JHLEVBQUUsR0FBRztZQUN2Qk4sc0JBQXNCQyxPQUFPLENBQUNNLFdBQVcsQ0FBQ0o7WUFFMUMscUNBQXFDO1lBQ3JDLE1BQU1LLGdCQUFnQjtnQkFDcEIsSUFBSTtvQkFDRixJQUFJLENBQUNDLE9BQU9DLEtBQUssRUFBRTt3QkFDakJELE9BQU9DLEtBQUssR0FBRzs0QkFBVTtnQ0FBR0MsS0FBSCx1QkFBYzs7NEJBQ3BDRixDQUFBQSxPQUFPQyxLQUFLLENBQUNFLENBQUMsR0FBR0gsT0FBT0MsS0FBSyxDQUFDRSxDQUFDLElBQUksRUFBRSxFQUFFQyxJQUFJLENBQUNGO3dCQUMvQztvQkFDRjtvQkFDQUYsT0FBT0MsS0FBSyxDQUFDLE9BQU8sYUFBYSxnQkFBZ0I7O2dCQUNuRCxFQUFFLE9BQU9JLE9BQU87b0JBQ2RDLFFBQVFDLElBQUksQ0FBQyxtQ0FBbUNGO2dCQUNsRDtZQUNGO1lBRUEsdUNBQXVDO1lBQ3ZDLE1BQU1HLFNBQVNiLFNBQVNDLGFBQWEsQ0FBQztZQUN0Q1ksT0FBT0MsR0FBRyxHQUFHO1lBQ2JELE9BQU9FLEtBQUssR0FBRztZQUVmLDZCQUE2QjtZQUM3QkYsT0FBT0csTUFBTSxHQUFHO2dCQUNkLElBQUlwQixzQkFBc0JDLE9BQU8sRUFBRTtvQkFDakMsSUFBSTt3QkFDRk87b0JBQ0YsRUFBRSxPQUFPTSxPQUFPO3dCQUNkQyxRQUFRQyxJQUFJLENBQUMsMkJBQTJCRjtvQkFDMUM7Z0JBQ0Y7WUFDRjtZQUVBLHFEQUFxRDtZQUNyRCxNQUFNTyxnQkFBZ0JOLFFBQVFELEtBQUs7WUFDbkNDLFFBQVFELEtBQUssR0FBRztpREFBSUg7b0JBQUFBOztvQkFDR0E7Z0JBQXJCLE1BQU1XLGVBQWVYLEVBQUFBLFNBQUFBLElBQUksQ0FBQyxFQUFFLGNBQVBBLDZCQUFBQSxPQUFTWSxRQUFRLE9BQU07Z0JBQzVDLElBQ0VELGFBQWFFLFFBQVEsQ0FBQyxnQkFDdEJGLGFBQWFFLFFBQVEsQ0FBQyxrQkFDdEI7b0JBQ0FULFFBQVFVLEdBQUcsQ0FBQywyQ0FBMkNIO29CQUN2RDtnQkFDRjtnQkFDQUQsY0FBY0ssS0FBSyxDQUFDWCxTQUFTSjtZQUMvQjtZQUVBLGdDQUFnQztZQUNoQ1gsc0JBQXNCQyxPQUFPLENBQUNNLFdBQVcsQ0FBQ1U7WUFFMUMsMEJBQTBCO1lBQzFCLE9BQU87Z0JBQ0wsSUFBSWpCLHNCQUFzQkMsT0FBTyxFQUFFO29CQUNqQyxNQUFPRCxzQkFBc0JDLE9BQU8sQ0FBQzBCLFVBQVUsQ0FBRTt3QkFDL0MzQixzQkFBc0JDLE9BQU8sQ0FBQzJCLFdBQVcsQ0FBQzVCLHNCQUFzQkMsT0FBTyxDQUFDMEIsVUFBVTtvQkFDcEY7Z0JBQ0Y7Z0JBQ0FsQixPQUFPb0IsbUJBQW1CLENBQUMsUUFBUXJCO2dCQUNuQ08sUUFBUUQsS0FBSyxHQUFHTyxjQUFjLHlCQUF5Qjs7WUFDekQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUNDRCxXQUFVO2dCQUNWRSxPQUFPO29CQUNMQyxpQkFBaUI7b0JBQ2pCQyxRQUFRO2dCQUNWOzs7Ozs7MEJBRUYsOERBQUNIO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQWtEOzs7Ozs7a0NBQ2hFLDhEQUFDbEMscURBQUlBO3dCQUFDa0MsV0FBVTtrQ0FDZCw0RUFBQ2pDLDREQUFXQTtzQ0FDViw0RUFBQ2tDO2dDQUFJSyxLQUFLckM7Z0NBQXVCK0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RDtHQTVGd0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFscy50c3g/NDhlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICB0bWFyeToge1xuICAgICAgKGFjdGlvbjogc3RyaW5nLCB3aWRnZXRJZDogc3RyaW5nKTogdm9pZDtcbiAgICAgIHE/OiBhbnlbXTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcbiAgY29uc3QgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVmVyaWZpY2Egc2kgZWwgY29udGVuZWRvciBlc3TDoSBkaXNwb25pYmxlXG4gICAgaWYgKHRydXN0bWFyeUNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICB0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJyAvLyBMaW1waWEgZWwgY29udGVuZWRvclxuXG4gICAgICAvLyBDcmVhIHVuIG1hcmNhZG9yIHBhcmEgZWwgd2lkZ2V0XG4gICAgICBjb25zdCB3aWRnZXRQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB3aWRnZXRQbGFjZWhvbGRlci5pZCA9ICd0cnVzdG1hcnktd2lkZ2V0J1xuICAgICAgdHJ1c3RtYXJ5Q29udGFpbmVyUmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQod2lkZ2V0UGxhY2Vob2xkZXIpXG5cbiAgICAgIC8vIEZ1bmNpw7NuIHBhcmEgaW5pY2lhbGl6YXIgZWwgd2lkZ2V0XG4gICAgICBjb25zdCBpbml0VHJ1c3RtYXJ5ID0gKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghd2luZG93LnRtYXJ5KSB7XG4gICAgICAgICAgICB3aW5kb3cudG1hcnkgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgICAgKHdpbmRvdy50bWFyeS5xID0gd2luZG93LnRtYXJ5LnEgfHwgW10pLnB1c2goYXJncylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LnRtYXJ5KCdhcHAnLCAnS29WeDdHUUhEJykgLy8gSUQgZGVsIHdpZGdldFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkVycm9yIGFsIGluaWNpYWxpemFyIFRydXN0bWFyeTpcIiwgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYSBlbCBzY3JpcHQgcGFyYSBjYXJnYXIgZWwgd2lkZ2V0XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly93aWRnZXQudHJ1c3RtYXJ5LmNvbS9Lb1Z4N0dRSERcIlxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxuXG4gICAgICAvLyBNYW5lamEgbGEgY2FyZ2EgZGVsIHNjcmlwdFxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRydXN0bWFyeUNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGluaXRUcnVzdG1hcnkoKVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJFcnJvciBlbiBzY3JpcHQub25sb2FkOlwiLCBlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWFuZWphIGVycm9yZXMgZ2xvYmFsZXMgcmVsYWNpb25hZG9zIGNvbiBlbCBzY3JpcHRcbiAgICAgIGNvbnN0IG9yaWdpbmFsRXJyb3IgPSBjb25zb2xlLmVycm9yXG4gICAgICBjb25zb2xlLmVycm9yID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXJnc1swXT8udG9TdHJpbmcoKSB8fCAnJ1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLmluY2x1ZGVzKFwiVHlwZUVycm9yXCIpICYmXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLmluY2x1ZGVzKFwicGFyZW50RWxlbWVudFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGF0cmFwYWRvIHkgbWFuZWphZG8gZGUgVHJ1c3RtYXJ5OlwiLCBlcnJvck1lc3NhZ2UpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxFcnJvci5hcHBseShjb25zb2xlLCBhcmdzKVxuICAgICAgfVxuXG4gICAgICAvLyBBw7FhZGUgZWwgc2NyaXB0IGFsIGNvbnRlbmVkb3JcbiAgICAgIHRydXN0bWFyeUNvbnRhaW5lclJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHNjcmlwdClcblxuICAgICAgLy8gTGltcGllemEgZGVsIGNvbXBvbmVudGVcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICh0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIHdoaWxlICh0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudC5yZW1vdmVDaGlsZCh0cnVzdG1hcnlDb250YWluZXJSZWYuY3VycmVudC5maXJzdENoaWxkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRUcnVzdG1hcnkpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IgPSBvcmlnaW5hbEVycm9yIC8vIFJlc3RhdXJhIGNvbnNvbGUuZXJyb3JcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0wIGJnLWNvdmVyIGJnLWNlbnRlciBiZy1maXhlZFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL2ltZy9mb25kby1ncmlzLmF2aWYnKVwiLFxuICAgICAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDAuNylcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTEyIHRleHQtd2hpdGVcIj5MbyBxdWUgZGljZW4gbnVlc3Ryb3MgY2xpZW50ZXM8L2gyPlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1ibGFjay85MCBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPGRpdiByZWY9e3RydXN0bWFyeUNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwidHJ1c3RtYXJ5LWNvbnRhaW5lclwiIC8+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUZXN0aW1vbmlhbHMiLCJ0cnVzdG1hcnlDb250YWluZXJSZWYiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwid2lkZ2V0UGxhY2Vob2xkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFwcGVuZENoaWxkIiwiaW5pdFRydXN0bWFyeSIsIndpbmRvdyIsInRtYXJ5IiwiYXJncyIsInEiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNjcmlwdCIsInNyYyIsImFzeW5jIiwib25sb2FkIiwib3JpZ2luYWxFcnJvciIsImVycm9yTWVzc2FnZSIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJsb2ciLCJhcHBseSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmaWx0ZXIiLCJoMiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonials.tsx\n"));

/***/ })

});