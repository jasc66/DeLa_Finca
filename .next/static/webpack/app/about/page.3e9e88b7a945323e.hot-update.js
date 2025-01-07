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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _components_about_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/about-section */ \"(app-pages-browser)/./components/about-section.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AboutPage() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const sectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll)({\n        target: containerRef,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform)(scrollYProgress, [\n        0,\n        0.3\n    ], [\n        1,\n        0\n    ]);\n    const scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform)(scrollYProgress, [\n        0,\n        0.3\n    ], [\n        1,\n        0.8\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const pageTop = window.scrollY;\n            const pageBottom = pageTop + window.innerHeight;\n            const sections = sectionRefs.current;\n            sections.forEach((section, index)=>{\n                if (section) {\n                    const elementTop = section.offsetTop;\n                    const elementBottom = elementTop + section.offsetHeight;\n                    if (elementTop <= pageBottom && elementBottom >= pageTop) {\n                        setActiveSection(index);\n                    }\n                }\n            });\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-[#e6d5c3]\",\n        ref: containerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: (el)=>{\n                    if (el) sectionRefs.current[0] = el;\n                },\n                className: \"relative min-h-screen pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto px-4 pt-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"grid lg:grid-cols-2 gap-8 items-center\",\n                            style: {\n                                opacity,\n                                scale\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-5xl md:text-7xl font-bold text-[#91211e] tracking-tight\",\n                                            children: \"CONOCE M\\xc1S\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-4xl md:text-6xl font-bold text-[#91211e] tracking-tight\",\n                                            children: \"SOBRE NOSOTROS\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative w-32 h-32 mx-auto lg:mx-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                src: \"/LogoDeLaFinca.png\",\n                                                alt: \"De La Finca Logo\",\n                                                fill: true,\n                                                className: \"object-contain\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex justify-end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-[500px] h-[700px]\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                src: \"/img/comida7.jpg\",\n                                                alt: \"De La Finca Restaurant\",\n                                                fill: true,\n                                                className: \"object-cover rounded-lg\",\n                                                style: {\n                                                    filter: \"brightness(1.2) contrast(1.1)\",\n                                                    mixBlendMode: \"multiply\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute inset-0 rounded-lg\",\n                                                style: {\n                                                    background: \"radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)\",\n                                                    mixBlendMode: \"overlay\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n                        onClick: ()=>{\n                            var _sectionRefs_current_;\n                            (_sectionRefs_current_ = sectionRefs.current[1]) === null || _sectionRefs_current_ === void 0 ? void 0 : _sectionRefs_current_.scrollIntoView({\n                                behavior: \"smooth\"\n                            });\n                        },\n                        className: \"absolute bottom-8 left-1/2 -translate-x-1/2 text-[#91211e] animate-bounce\",\n                        whileHover: {\n                            scale: 1.1\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"h-8 w-8\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            aboutSections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_section__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ref: (el)=>{\n                        if (el) sectionRefs.current[index + 1] = el;\n                    },\n                    ...section,\n                    isActive: activeSection === index + 1\n                }, section.title, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(AboutPage, \"WfzMYLGB7y0S0hP8lXSuYm9UcJI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform\n    ];\n});\n_c = AboutPage;\nconst aboutSections = [\n    {\n        title: \"Nuestra Historia\",\n        content: \"Ubicado en el coraz\\xf3n de Quepos, Puntarenas, De La Finca es un restaurante que ofrece una experiencia culinaria \\xfanica, en donde la frescura de los ingredientes y la dedicaci\\xf3n por la gastronom\\xeda costarricense se unen para deleitar a los paladares m\\xe1s exigentes.\",\n        image: \"/png/img1_bg.png\",\n        imageAlt: \"Interior del restaurante De La Finca\"\n    },\n    {\n        title: \"Nuestra Misi\\xf3n\",\n        content: \"En De La Finca, nuestra misi\\xf3n es hacer que la comida de calidad sea accesible, agradable y sostenible. Creemos en el poder de la buena comida para nutrir tanto el cuerpo como el alma, y estamos comprometidos a servir platos que sean tan buenos para ti como lo son para el medio ambiente.\",\n        image: \"/png/img2_bg.png\",\n        imageAlt: \"Platos de De La Finca\"\n    },\n    {\n        title: \"Nuestros Valores\",\n        content: \"La sostenibilidad y la calidad son fundamentales en todo lo que hacemos. Trabajamos directamente con productores locales, minimizamos nuestro impacto ambiental y creamos relaciones duraderas con nuestra comunidad para ofrecer la mejor experiencia gastron\\xf3mica posible.\",\n        image: \"/png/img3_bg.png\",\n        imageAlt: \"Ingredientes frescos de De La Finca\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"AboutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hYm91dC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNYO0FBQ0E7QUFDVjtBQUNZO0FBQ1c7QUFDVTtBQUVoRCxTQUFTVzs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTVksY0FBY2IsNkNBQU1BLENBQXlCLEVBQUU7SUFDckQsTUFBTWMsZUFBZWQsNkNBQU1BLENBQWlCO0lBQzVDLE1BQU0sRUFBRWUsZUFBZSxFQUFFLEdBQUdQLHdEQUFTQSxDQUFDO1FBQ3BDUSxRQUFRRjtRQUNSRyxRQUFRO1lBQUM7WUFBZTtTQUFZO0lBQ3RDO0lBRUEsTUFBTUMsVUFBVVQsMkRBQVlBLENBQUNNLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBRztLQUFFO0lBQzlELE1BQU1JLFFBQVFWLDJEQUFZQSxDQUFDTSxpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUc7S0FBSTtJQUU5RGhCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXFCLGVBQWU7WUFDbkIsTUFBTUMsVUFBVUMsT0FBT0MsT0FBTztZQUM5QixNQUFNQyxhQUFhSCxVQUFVQyxPQUFPRyxXQUFXO1lBQy9DLE1BQU1DLFdBQVdiLFlBQVljLE9BQU87WUFFcENELFNBQVNFLE9BQU8sQ0FBQyxDQUFDQyxTQUFTQztnQkFDekIsSUFBSUQsU0FBUztvQkFDWCxNQUFNRSxhQUFhRixRQUFRRyxTQUFTO29CQUNwQyxNQUFNQyxnQkFBZ0JGLGFBQWFGLFFBQVFLLFlBQVk7b0JBRXZELElBQUlILGNBQWNQLGNBQWNTLGlCQUFpQlosU0FBUzt3QkFDeERULGlCQUFpQmtCO29CQUNuQjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQVIsT0FBT2EsZ0JBQWdCLENBQUMsVUFBVWY7UUFDbEMsT0FBTyxJQUFNRSxPQUFPYyxtQkFBbUIsQ0FBQyxVQUFVaEI7SUFDcEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVO1FBQTRCQyxLQUFLekI7OzBCQUM5Qyw4REFBQ1osMERBQU1BOzs7OzswQkFHUCw4REFBQzJCO2dCQUNDVSxLQUFLLENBQUNDO29CQUE2QixJQUFJQSxJQUFJM0IsWUFBWWMsT0FBTyxDQUFDLEVBQUUsR0FBR2E7Z0JBQUc7Z0JBQ3ZFRixXQUFVOztrQ0FFViw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUMvQixpREFBTUEsQ0FBQzhCLEdBQUc7NEJBQ1RDLFdBQVU7NEJBQ1ZHLE9BQU87Z0NBQUV2QjtnQ0FBU0M7NEJBQU07OzhDQUV4Qiw4REFBQ2tCO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQUdKLFdBQVU7c0RBQStEOzs7Ozs7c0RBRzdFLDhEQUFDSzs0Q0FBR0wsV0FBVTtzREFBK0Q7Ozs7OztzREFHN0UsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDbEMsa0RBQUtBO2dEQUNKd0MsS0FBSTtnREFDSkMsS0FBSTtnREFDSkMsSUFBSTtnREFDSlIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS2hCLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDbEMsa0RBQUtBO2dEQUNKd0MsS0FBSTtnREFDSkMsS0FBSTtnREFDSkMsSUFBSTtnREFDSlIsV0FBVTtnREFDVkcsT0FBTztvREFDTE0sUUFBUTtvREFDUkMsY0FBYztnREFDaEI7Ozs7OzswREFHRiw4REFBQ1g7Z0RBQ0NDLFdBQVU7Z0RBQ1ZHLE9BQU87b0RBQ0xRLFlBQVk7b0RBQ1pELGNBQWM7Z0RBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9WLDhEQUFDekMsaURBQU1BLENBQUMyQyxNQUFNO3dCQUNaQyxTQUFTO2dDQUNQdEM7NkJBQUFBLHdCQUFBQSxZQUFZYyxPQUFPLENBQUMsRUFBRSxjQUF0QmQsNENBQUFBLHNCQUF3QnVDLGNBQWMsQ0FBQztnQ0FBRUMsVUFBVTs0QkFBUzt3QkFDOUQ7d0JBQ0FmLFdBQVU7d0JBQ1ZnQixZQUFZOzRCQUFFbkMsT0FBTzt3QkFBSTt3QkFDekJvQyxVQUFVOzRCQUFFcEMsT0FBTzt3QkFBSTtrQ0FFdkIsNEVBQUNkLHVGQUFXQTs0QkFBQ2lDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSzFCa0IsY0FBY0MsR0FBRyxDQUFDLENBQUM1QixTQUFTQyxzQkFDM0IsOERBQUN4QixpRUFBWUE7b0JBRVhpQyxLQUFLLENBQUNDO3dCQUE2QixJQUFJQSxJQUFJM0IsWUFBWWMsT0FBTyxDQUFDRyxRQUFRLEVBQUUsR0FBR1U7b0JBQUc7b0JBQzlFLEdBQUdYLE9BQU87b0JBQ1g2QixVQUFVL0Msa0JBQWtCbUIsUUFBUTttQkFIL0JELFFBQVE4QixLQUFLOzs7OzswQkFPdEIsOERBQUN4RCwwREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0FuSHdCTzs7UUFJTUYsb0RBQVNBO1FBS3JCQyx1REFBWUE7UUFDZEEsdURBQVlBOzs7S0FWSkM7QUFxSHhCLE1BQU04QyxnQkFBZ0I7SUFDcEI7UUFDRUcsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Fib3V0L3BhZ2UudHN4PzgwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL2Fib3V0LXNlY3Rpb24nXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBzZWN0aW9uUmVmcyA9IHVzZVJlZjwoSFRNTEVsZW1lbnQgfCBudWxsKVtdPihbXSlcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IGNvbnRhaW5lclJlZixcbiAgICBvZmZzZXQ6IFtcInN0YXJ0IHN0YXJ0XCIsIFwiZW5kIHN0YXJ0XCJdXG4gIH0pXG5cbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjNdLCBbMSwgMF0pXG4gIGNvbnN0IHNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuM10sIFsxLCAwLjhdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnZVRvcCA9IHdpbmRvdy5zY3JvbGxZXG4gICAgICBjb25zdCBwYWdlQm90dG9tID0gcGFnZVRvcCArIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzZWN0aW9uUmVmcy5jdXJyZW50XG5cbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wXG4gICAgICAgICAgY29uc3QgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBzZWN0aW9uLm9mZnNldEhlaWdodFxuXG4gICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPD0gcGFnZUJvdHRvbSAmJiBlbGVtZW50Qm90dG9tID49IHBhZ2VUb3ApIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctWyNlNmQ1YzNdXCIgcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgXG4gICAgICB7LyogSGVybyBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gXG4gICAgICAgIHJlZj17KGVsOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHsgaWYgKGVsKSBzZWN0aW9uUmVmcy5jdXJyZW50WzBdID0gZWwgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIHB0LTIwXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB0LTIwXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC04IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5LCBzY2FsZSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1bIzkxMjExZV0gdHJhY2tpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICBDT05PQ0UgTcOBU1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRleHQtWyM5MTIxMWVdIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgU09CUkUgTk9TT1RST1NcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTMyIGgtMzIgbXgtYXV0byBsZzpteC0wXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvTG9nb0RlTGFGaW5jYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiRGUgTGEgRmluY2EgTG9nb1wiXG4gICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1bNTAwcHhdIGgtWzcwMHB4XVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9jb21pZGE3LmpwZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJEZSBMYSBGaW5jYSBSZXN0YXVyYW50XCJcbiAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJ2JyaWdodG5lc3MoMS4yKSBjb250cmFzdCgxLjEpJyxcbiAgICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIExpZ2h0IGVmZmVjdCBvdmVybGF5ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNzAlKScsXG4gICAgICAgICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ292ZXJsYXknXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bW90aW9uLmJ1dHRvbiBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZWN0aW9uUmVmcy5jdXJyZW50WzFdPy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB0ZXh0LVsjOTEyMTFlXSBhbmltYXRlLWJvdW5jZVwiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtOCB3LThcIiAvPlxuICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBBYm91dCBTZWN0aW9ucyAqL31cbiAgICAgIHthYm91dFNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgPEFib3V0U2VjdGlvblxuICAgICAgICAgIGtleT17c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICByZWY9eyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7IGlmIChlbCkgc2VjdGlvblJlZnMuY3VycmVudFtpbmRleCArIDFdID0gZWwgfX1cbiAgICAgICAgICB7Li4uc2VjdGlvbn1cbiAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlU2VjdGlvbiA9PT0gaW5kZXggKyAxfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBhYm91dFNlY3Rpb25zID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTnVlc3RyYSBIaXN0b3JpYVwiLFxuICAgIGNvbnRlbnQ6IFwiVWJpY2FkbyBlbiBlbCBjb3JhesOzbiBkZSBRdWVwb3MsIFB1bnRhcmVuYXMsIERlIExhIEZpbmNhIGVzIHVuIHJlc3RhdXJhbnRlIHF1ZSBvZnJlY2UgdW5hIGV4cGVyaWVuY2lhIGN1bGluYXJpYSDDum5pY2EsIGVuIGRvbmRlIGxhIGZyZXNjdXJhIGRlIGxvcyBpbmdyZWRpZW50ZXMgeSBsYSBkZWRpY2FjacOzbiBwb3IgbGEgZ2FzdHJvbm9tw61hIGNvc3RhcnJpY2Vuc2Ugc2UgdW5lbiBwYXJhIGRlbGVpdGFyIGEgbG9zIHBhbGFkYXJlcyBtw6FzIGV4aWdlbnRlcy5cIixcbiAgICBpbWFnZTogXCIvcG5nL2ltZzFfYmcucG5nXCIsXG4gICAgaW1hZ2VBbHQ6IFwiSW50ZXJpb3IgZGVsIHJlc3RhdXJhbnRlIERlIExhIEZpbmNhXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk51ZXN0cmEgTWlzacOzblwiLFxuICAgIGNvbnRlbnQ6IFwiRW4gRGUgTGEgRmluY2EsIG51ZXN0cmEgbWlzacOzbiBlcyBoYWNlciBxdWUgbGEgY29taWRhIGRlIGNhbGlkYWQgc2VhIGFjY2VzaWJsZSwgYWdyYWRhYmxlIHkgc29zdGVuaWJsZS4gQ3JlZW1vcyBlbiBlbCBwb2RlciBkZSBsYSBidWVuYSBjb21pZGEgcGFyYSBudXRyaXIgdGFudG8gZWwgY3VlcnBvIGNvbW8gZWwgYWxtYSwgeSBlc3RhbW9zIGNvbXByb21ldGlkb3MgYSBzZXJ2aXIgcGxhdG9zIHF1ZSBzZWFuIHRhbiBidWVub3MgcGFyYSB0aSBjb21vIGxvIHNvbiBwYXJhIGVsIG1lZGlvIGFtYmllbnRlLlwiLFxuICAgIGltYWdlOiBcIi9wbmcvaW1nMl9iZy5wbmdcIixcbiAgICBpbWFnZUFsdDogXCJQbGF0b3MgZGUgRGUgTGEgRmluY2FcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTnVlc3Ryb3MgVmFsb3Jlc1wiLFxuICAgIGNvbnRlbnQ6IFwiTGEgc29zdGVuaWJpbGlkYWQgeSBsYSBjYWxpZGFkIHNvbiBmdW5kYW1lbnRhbGVzIGVuIHRvZG8gbG8gcXVlIGhhY2Vtb3MuIFRyYWJhamFtb3MgZGlyZWN0YW1lbnRlIGNvbiBwcm9kdWN0b3JlcyBsb2NhbGVzLCBtaW5pbWl6YW1vcyBudWVzdHJvIGltcGFjdG8gYW1iaWVudGFsIHkgY3JlYW1vcyByZWxhY2lvbmVzIGR1cmFkZXJhcyBjb24gbnVlc3RyYSBjb211bmlkYWQgcGFyYSBvZnJlY2VyIGxhIG1lam9yIGV4cGVyaWVuY2lhIGdhc3Ryb27Ds21pY2EgcG9zaWJsZS5cIixcbiAgICBpbWFnZTogXCIvcG5nL2ltZzNfYmcucG5nXCIsXG4gICAgaW1hZ2VBbHQ6IFwiSW5ncmVkaWVudGVzIGZyZXNjb3MgZGUgRGUgTGEgRmluY2FcIlxuICB9XG5dXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZvb3RlciIsIkltYWdlIiwiQ2hldnJvbkRvd24iLCJBYm91dFNlY3Rpb24iLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJBYm91dFBhZ2UiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsInNlY3Rpb25SZWZzIiwiY29udGFpbmVyUmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0Iiwib3BhY2l0eSIsInNjYWxlIiwiaGFuZGxlU2Nyb2xsIiwicGFnZVRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJwYWdlQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJzZWN0aW9ucyIsImN1cnJlbnQiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwiZWxlbWVudFRvcCIsIm9mZnNldFRvcCIsImVsZW1lbnRCb3R0b20iLCJvZmZzZXRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImVsIiwic3R5bGUiLCJoMSIsImgyIiwic3JjIiwiYWx0IiwiZmlsbCIsImZpbHRlciIsIm1peEJsZW5kTW9kZSIsImJhY2tncm91bmQiLCJidXR0b24iLCJvbkNsaWNrIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIndoaWxlSG92ZXIiLCJ3aGlsZVRhcCIsImFib3V0U2VjdGlvbnMiLCJtYXAiLCJpc0FjdGl2ZSIsInRpdGxlIiwiY29udGVudCIsImltYWdlIiwiaW1hZ2VBbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/about/page.tsx\n"));

/***/ })

});