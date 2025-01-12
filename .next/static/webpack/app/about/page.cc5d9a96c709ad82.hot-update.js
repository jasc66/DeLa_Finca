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

/***/ "(app-pages-browser)/./app/about/page.tsx":
/*!****************************!*\
  !*** ./app/about/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _components_about_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/about-section */ \"(app-pages-browser)/./components/about-section.tsx\");\n/* harmony import */ var _components_floating_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/floating-image */ \"(app-pages-browser)/./components/floating-image.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AboutPage() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const sectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const pageTop = window.scrollY;\n            const pageBottom = pageTop + window.innerHeight;\n            const sections = sectionRefs.current;\n            sections.forEach((section, index)=>{\n                if (section) {\n                    const elementTop = section.offsetTop;\n                    const elementBottom = elementTop + section.offsetHeight;\n                    if (elementTop <= pageBottom && elementBottom >= pageTop) {\n                        setActiveSection(index);\n                    }\n                }\n            });\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: (el)=>{\n                    if (el) sectionRefs.current[0] = el;\n                },\n                className: \"relative min-h-screen pt-10\",\n                style: {\n                    backgroundImage: \"url('/fondo-comida1.jpg')\",\n                    backgroundSize: \"cover\",\n                    backgroundPosition: \"center\",\n                    backgroundAttachment: \"fixed\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto px-4 pt-20 max-w-7xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col lg:flex-row gap-8 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-6 text-center lg:text-left bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full lg:w-1/2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#91211e] tracking-tight\",\n                                            children: \"CONOCE M\\xc1S\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#91211e] tracking-tight\",\n                                            children: \"SOBRE NOSOTROS\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative w-32 h-32 mx-auto lg:mx-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                src: \"/LogoDeLaFinca.png\",\n                                                alt: \"De La Finca Logo\",\n                                                fill: true,\n                                                className: \"object-contain\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 rounded-lg\",\n                                        style: {\n                                            background: \"radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)\",\n                                            mixBlendMode: \"overlay\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_floating_image__WEBPACK_IMPORTED_MODULE_6__.FloatingImage, {\n                        src: \"/png/img1_bg.png\",\n                        alt: \"Floating Mushroom\",\n                        className: \"absolute hidden md:block top-1/1 left-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] floating-image z-10\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_floating_image__WEBPACK_IMPORTED_MODULE_6__.FloatingImage, {\n                        src: \"/png/img2_bg.png\",\n                        alt: \"Floating Leaf\",\n                        className: \"absolute hidden md:block bottom-2/4 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] floating-image z-10\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            var _sectionRefs_current_;\n                            (_sectionRefs_current_ = sectionRefs.current[1]) === null || _sectionRefs_current_ === void 0 ? void 0 : _sectionRefs_current_.scrollIntoView({\n                                behavior: \"smooth\"\n                            });\n                        },\n                        className: \"absolute bottom-8 left-1/2 -translate-x-1/2 text-[#91211e] animate-bounce bg-white/80 rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"h-6 w-6 sm:h-8 sm:w-8\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            aboutSections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_section__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ref: (el)=>{\n                        if (el) sectionRefs.current[index + 1] = el;\n                    },\n                    ...section,\n                    isActive: activeSection === index + 1\n                }, section.title, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(AboutPage, \"bzKsrgqBdvRHk86bU/pOIsN0eiA=\");\n_c = AboutPage;\nconst aboutSections = [\n    {\n        title: \"Nuestra Historia\",\n        content: \"Ubicado en el coraz\\xf3n de Quepos, Puntarenas, De La Finca es un restaurante que ofrece una experiencia culinaria \\xfanica, en donde la frescura de los ingredientes y la dedicaci\\xf3n por la gastronom\\xeda costarricense se unen para deleitar a los paladares m\\xe1s exigentes.\",\n        image: \"/img/interior.jpeg\",\n        imageAlt: \"Interior del restaurante De La Finca\"\n    },\n    {\n        title: \"Nuestra Misi\\xf3n\",\n        content: \"En De La Finca, nuestra misi\\xf3n es hacer que la comida de calidad sea accesible, agradable y sostenible. Creemos en el poder de la buena comida para nutrir tanto el cuerpo como el alma, y estamos comprometidos a servir platos que sean tan buenos para ti como lo son para el medio ambiente.\",\n        image: \"/img/comida7.jpg\",\n        imageAlt: \"Platos de De La Finca\"\n    },\n    {\n        title: \"Nuestros Valores\",\n        content: \"La sostenibilidad y la calidad son fundamentales en todo lo que hacemos. Trabajamos directamente con productores locales, minimizamos nuestro impacto ambiental y creamos relaciones duraderas con nuestra comunidad para ofrecer la mejor experiencia gastron\\xf3mica posible.\",\n        image: \"/img/comida3.jpg\",\n        imageAlt: \"Ingredientes frescos de De La Finca\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"AboutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxRQUFRaUMsS0FBSzs7Ozs7MEJBT3RCLDhEQUFDbkQsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBL0d3Qks7S0FBQUE7QUFpSHhCLE1BQU0yQyxnQkFBZ0I7SUFDcEI7UUFDRUcsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Fib3V0L3BhZ2UudHN4PzgwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL2Fib3V0LXNlY3Rpb24nXG5pbXBvcnQgeyBGbG9hdGluZ0ltYWdlIH0gZnJvbSAnQC9jb21wb25lbnRzL2Zsb2F0aW5nLWltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHNlY3Rpb25SZWZzID0gdXNlUmVmPChIVE1MRWxlbWVudCB8IG51bGwpW10+KFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnZVRvcCA9IHdpbmRvdy5zY3JvbGxZXG4gICAgICBjb25zdCBwYWdlQm90dG9tID0gcGFnZVRvcCArIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzZWN0aW9uUmVmcy5jdXJyZW50XG5cbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wXG4gICAgICAgICAgY29uc3QgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBzZWN0aW9uLm9mZnNldEhlaWdodFxuXG4gICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPD0gcGFnZUJvdHRvbSAmJiBlbGVtZW50Qm90dG9tID49IHBhZ2VUb3ApIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIFxuICAgICAgey8qIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIFxuICAgICAgICByZWY9eyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7IGlmIChlbCkgc2VjdGlvblJlZnMuY3VycmVudFswXSA9IGVsIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBwdC0xMFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL2ZvbmRvLWNvbWlkYTEuanBnJylcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHQtMjAgbWF4LXctN3hsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0IGJnLXdoaXRlLzgwIGJhY2tkcm9wLWJsdXItc20gcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1ib2xkIHRleHQtWyM5MTIxMWVdIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgQ09OT0NFIE3DgVNcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIG1kOnRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LVsjOTEyMTFlXSB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICAgIFNPQlJFIE5PU09UUk9TXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0zMiBoLTMyIG14LWF1dG8gbGc6bXgtMFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL0xvZ29EZUxhRmluY2EucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkRlIExhIEZpbmNhIExvZ29cIlxuICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGxnOnctMS8yIGgtWzI1MHB4XSBzbTpoLVszNTBweF0gbWQ6aC1bNDAwcHhdIGxnOmgtWzUwMHB4XVwiPlxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDcwJSknLFxuICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnb3ZlcmxheSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGbG9hdGluZ0ltYWdlXG4gICAgICAgICAgc3JjPVwiL3BuZy9pbWcxX2JnLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiRmxvYXRpbmcgTXVzaHJvb21cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGhpZGRlbiBtZDpibG9jayB0b3AtMS8xIGxlZnQtMCB3LVsxMDBweF0gaC1bMTAwcHhdIG1kOnctWzE1MHB4XSBtZDpoLVsxNTBweF0gbGc6dy1bMjAwcHhdIGxnOmgtWzIwMHB4XSBmbG9hdGluZy1pbWFnZSB6LTEwXCJcbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxGbG9hdGluZ0ltYWdlXG4gICAgICAgICAgc3JjPVwiL3BuZy9pbWcyX2JnLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiRmxvYXRpbmcgTGVhZlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaGlkZGVuIG1kOmJsb2NrIGJvdHRvbS0yLzQgcmlnaHQtMCB3LVsxMDBweF0gaC1bMTAwcHhdIG1kOnctWzE1MHB4XSBtZDpoLVsxNTBweF0gbGc6dy1bMjAwcHhdIGxnOmgtWzIwMHB4XSBmbG9hdGluZy1pbWFnZSB6LTEwXCJcbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2VjdGlvblJlZnMuY3VycmVudFsxXT8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS04IGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdGV4dC1bIzkxMjExZV0gYW5pbWF0ZS1ib3VuY2UgYmctd2hpdGUvODAgcm91bmRlZC1mdWxsIHAtMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiaC02IHctNiBzbTpoLTggc206dy04XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBBYm91dCBTZWN0aW9ucyAqL31cbiAgICAgIHthYm91dFNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgPEFib3V0U2VjdGlvblxuICAgICAgICAgIGtleT17c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICByZWY9eyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7IGlmIChlbCkgc2VjdGlvblJlZnMuY3VycmVudFtpbmRleCArIDFdID0gZWwgfX1cbiAgICAgICAgICB7Li4uc2VjdGlvbn1cbiAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlU2VjdGlvbiA9PT0gaW5kZXggKyAxfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBhYm91dFNlY3Rpb25zID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTnVlc3RyYSBIaXN0b3JpYVwiLFxuICAgIGNvbnRlbnQ6IFwiVWJpY2FkbyBlbiBlbCBjb3JhesOzbiBkZSBRdWVwb3MsIFB1bnRhcmVuYXMsIERlIExhIEZpbmNhIGVzIHVuIHJlc3RhdXJhbnRlIHF1ZSBvZnJlY2UgdW5hIGV4cGVyaWVuY2lhIGN1bGluYXJpYSDDum5pY2EsIGVuIGRvbmRlIGxhIGZyZXNjdXJhIGRlIGxvcyBpbmdyZWRpZW50ZXMgeSBsYSBkZWRpY2FjacOzbiBwb3IgbGEgZ2FzdHJvbm9tw61hIGNvc3RhcnJpY2Vuc2Ugc2UgdW5lbiBwYXJhIGRlbGVpdGFyIGEgbG9zIHBhbGFkYXJlcyBtw6FzIGV4aWdlbnRlcy5cIixcbiAgICBpbWFnZTogXCIvaW1nL2ludGVyaW9yLmpwZWdcIixcbiAgICBpbWFnZUFsdDogXCJJbnRlcmlvciBkZWwgcmVzdGF1cmFudGUgRGUgTGEgRmluY2FcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTnVlc3RyYSBNaXNpw7NuXCIsXG4gICAgY29udGVudDogXCJFbiBEZSBMYSBGaW5jYSwgbnVlc3RyYSBtaXNpw7NuIGVzIGhhY2VyIHF1ZSBsYSBjb21pZGEgZGUgY2FsaWRhZCBzZWEgYWNjZXNpYmxlLCBhZ3JhZGFibGUgeSBzb3N0ZW5pYmxlLiBDcmVlbW9zIGVuIGVsIHBvZGVyIGRlIGxhIGJ1ZW5hIGNvbWlkYSBwYXJhIG51dHJpciB0YW50byBlbCBjdWVycG8gY29tbyBlbCBhbG1hLCB5IGVzdGFtb3MgY29tcHJvbWV0aWRvcyBhIHNlcnZpciBwbGF0b3MgcXVlIHNlYW4gdGFuIGJ1ZW5vcyBwYXJhIHRpIGNvbW8gbG8gc29uIHBhcmEgZWwgbWVkaW8gYW1iaWVudGUuXCIsXG4gICAgaW1hZ2U6IFwiL2ltZy9jb21pZGE3LmpwZ1wiLFxuICAgIGltYWdlQWx0OiBcIlBsYXRvcyBkZSBEZSBMYSBGaW5jYVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJOdWVzdHJvcyBWYWxvcmVzXCIsXG4gICAgY29udGVudDogXCJMYSBzb3N0ZW5pYmlsaWRhZCB5IGxhIGNhbGlkYWQgc29uIGZ1bmRhbWVudGFsZXMgZW4gdG9kbyBsbyBxdWUgaGFjZW1vcy4gVHJhYmFqYW1vcyBkaXJlY3RhbWVudGUgY29uIHByb2R1Y3RvcmVzIGxvY2FsZXMsIG1pbmltaXphbW9zIG51ZXN0cm8gaW1wYWN0byBhbWJpZW50YWwgeSBjcmVhbW9zIHJlbGFjaW9uZXMgZHVyYWRlcmFzIGNvbiBudWVzdHJhIGNvbXVuaWRhZCBwYXJhIG9mcmVjZXIgbGEgbWVqb3IgZXhwZXJpZW5jaWEgZ2FzdHJvbsOzbWljYSBwb3NpYmxlLlwiLFxuICAgIGltYWdlOiBcIi9pbWcvY29taWRhMy5qcGdcIixcbiAgICBpbWFnZUFsdDogXCJJbmdyZWRpZW50ZXMgZnJlc2NvcyBkZSBEZSBMYSBGaW5jYVwiXG4gIH1cbl1cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiSW1hZ2UiLCJDaGV2cm9uRG93biIsIkFib3V0U2VjdGlvbiIsIkZsb2F0aW5nSW1hZ2UiLCJBYm91dFBhZ2UiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsInNlY3Rpb25SZWZzIiwiaGFuZGxlU2Nyb2xsIiwicGFnZVRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJwYWdlQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJzZWN0aW9ucyIsImN1cnJlbnQiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwiZWxlbWVudFRvcCIsIm9mZnNldFRvcCIsImVsZW1lbnRCb3R0b20iLCJvZmZzZXRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImVsIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwiaDEiLCJoMiIsInNyYyIsImFsdCIsImZpbGwiLCJiYWNrZ3JvdW5kIiwibWl4QmxlbmRNb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImFib3V0U2VjdGlvbnMiLCJtYXAiLCJpc0FjdGl2ZSIsInRpdGxlIiwiY29udGVudCIsImltYWdlIiwiaW1hZ2VBbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/about/page.tsx\n"));

/***/ })

});