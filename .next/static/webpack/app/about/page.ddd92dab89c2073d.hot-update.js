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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _components_about_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/about-section */ \"(app-pages-browser)/./components/about-section.tsx\");\n/* harmony import */ var _components_floating_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/floating-image */ \"(app-pages-browser)/./components/floating-image.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AboutPage() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const sectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const pageTop = window.scrollY;\n            const pageBottom = pageTop + window.innerHeight;\n            const sections = sectionRefs.current;\n            sections.forEach((section, index)=>{\n                if (section) {\n                    const elementTop = section.offsetTop;\n                    const elementBottom = elementTop + section.offsetHeight;\n                    if (elementTop <= pageBottom && elementBottom >= pageTop) {\n                        setActiveSection(index);\n                    }\n                }\n            });\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: (el)=>{\n                    if (el) sectionRefs.current[0] = el;\n                },\n                className: \"relative min-h-screen pt-10\",\n                style: {\n                    backgroundImage: \"url('/fondo-comida1.jpg')\",\n                    backgroundSize: \"cover\",\n                    backgroundPosition: \"center\",\n                    backgroundAttachment: \"fixed\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto px-4 pt-20 max-w-7xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col lg:flex-row gap-8 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-6 text-center lg:text-left bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full lg:w-1/2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#91211e] tracking-tight\",\n                                            children: \"CONOCE M\\xc1S\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#91211e] tracking-tight\",\n                                            children: \"SOBRE NOSOTROS\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative w-32 h-32 mx-auto lg:mx-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                src: \"/LogoDeLaFinca.png\",\n                                                alt: \"De La Finca Logo\",\n                                                fill: true,\n                                                className: \"object-contain\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            src: \"/img/comida2.jpg\",\n                                            alt: \"De La Finca Restaurant\",\n                                            fill: true,\n                                            className: \"object-cover rounded-lg\",\n                                            style: {\n                                                filter: \"brightness(1.2) contrast(1.1)\",\n                                                mixBlendMode: \"multiply\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-0 rounded-lg\",\n                                            style: {\n                                                background: \"radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)\",\n                                                mixBlendMode: \"overlay\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_floating_image__WEBPACK_IMPORTED_MODULE_6__.FloatingImage, {\n                        src: \"/png/img1_bg.png\",\n                        alt: \"Floating Mushroom\",\n                        className: \"absolute hidden md:block top-1/1 left-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] floating-image z-10\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_floating_image__WEBPACK_IMPORTED_MODULE_6__.FloatingImage, {\n                        src: \"/png/img2_bg.png\",\n                        alt: \"Floating Leaf\",\n                        className: \"absolute hidden md:block bottom-2/4 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] floating-image z-10\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            var _sectionRefs_current_;\n                            (_sectionRefs_current_ = sectionRefs.current[1]) === null || _sectionRefs_current_ === void 0 ? void 0 : _sectionRefs_current_.scrollIntoView({\n                                behavior: \"smooth\"\n                            });\n                        },\n                        className: \"absolute bottom-8 left-1/2 -translate-x-1/2 text-[#91211e] animate-bounce bg-white/80 rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"h-6 w-6 sm:h-8 sm:w-8\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            aboutSections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_section__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ref: (el)=>{\n                        if (el) sectionRefs.current[index + 1] = el;\n                    },\n                    ...section,\n                    isActive: activeSection === index + 1\n                }, section.title, false, {\n                    fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alonsosalguero/Downloads/restaurant-website/app/about/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(AboutPage, \"bzKsrgqBdvRHk86bU/pOIsN0eiA=\");\n_c = AboutPage;\nconst aboutSections = [\n    {\n        title: \"Nuestra Historia\",\n        content: \"Ubicado en el coraz\\xf3n de Quepos, Puntarenas, De La Finca es un restaurante que ofrece una experiencia culinaria \\xfanica, en donde la frescura de los ingredientes y la dedicaci\\xf3n por la gastronom\\xeda costarricense se unen para deleitar a los paladares m\\xe1s exigentes.\",\n        image: \"/img/interior.jpeg\",\n        imageAlt: \"Interior del restaurante De La Finca\"\n    },\n    {\n        title: \"Nuestra Misi\\xf3n\",\n        content: \"En De La Finca, nuestra misi\\xf3n es hacer que la comida de calidad sea accesible, agradable y sostenible. Creemos en el poder de la buena comida para nutrir tanto el cuerpo como el alma, y estamos comprometidos a servir platos que sean tan buenos para ti como lo son para el medio ambiente.\",\n        image: \"/img/comida7.jpg\",\n        imageAlt: \"Platos de De La Finca\"\n    },\n    {\n        title: \"Nuestros Valores\",\n        content: \"La sostenibilidad y la calidad son fundamentales en todo lo que hacemos. Trabajamos directamente con productores locales, minimizamos nuestro impacto ambiental y creamos relaciones duraderas con nuestra comunidad para ofrecer la mejor experiencia gastron\\xf3mica posible.\",\n        image: \"/img/comida3.jpg\",\n        imageAlt: \"Ingredientes frescos de De La Finca\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"AboutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDQzt3QkFBNkIsSUFBSUEsSUFBSXJCLFlBQVlRLE9BQU8sQ0FBQ0csUUFBUSxFQUFFLEdBQUdVO29CQUFHO29CQUM5RSxHQUFHWCxPQUFPO29CQUNYaUMsVUFBVTdDLGtCQUFrQmEsUUFBUTttQkFIL0JELFFBQVFrQyxLQUFLOzs7OzswQkFPdEIsOERBQUNwRCwwREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0F6SHdCSztLQUFBQTtBQTJIeEIsTUFBTTRDLGdCQUFnQjtJQUNwQjtRQUNFRyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO0lBQ1o7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWJvdXQvcGFnZS50c3g/ODA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvYWJvdXQtc2VjdGlvbidcbmltcG9ydCB7IEZsb2F0aW5nSW1hZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvZmxvYXRpbmctaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0UGFnZSgpIHtcbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgc2VjdGlvblJlZnMgPSB1c2VSZWY8KEhUTUxFbGVtZW50IHwgbnVsbClbXT4oW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdlVG9wID0gd2luZG93LnNjcm9sbFlcbiAgICAgIGNvbnN0IHBhZ2VCb3R0b20gPSBwYWdlVG9wICsgd2luZG93LmlubmVySGVpZ2h0XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IHNlY3Rpb25SZWZzLmN1cnJlbnRcblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50VG9wID0gc2VjdGlvbi5vZmZzZXRUb3BcbiAgICAgICAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIHNlY3Rpb24ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgICAgICBpZiAoZWxlbWVudFRvcCA8PSBwYWdlQm90dG9tICYmIGVsZW1lbnRCb3R0b20gPj0gcGFnZVRvcCkge1xuICAgICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgXG4gICAgICB7LyogSGVybyBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gXG4gICAgICAgIHJlZj17KGVsOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHsgaWYgKGVsKSBzZWN0aW9uUmVmcy5jdXJyZW50WzBdID0gZWwgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIHB0LTEwXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvZm9uZG8tY29taWRhMS5qcGcnKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBwdC0yMCBtYXgtdy03eGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgYmctd2hpdGUvODAgYmFja2Ryb3AtYmx1ci1zbSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1bIzkxMjExZV0gdHJhY2tpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICBDT05PQ0UgTcOBU1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtWyM5MTIxMWVdIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgU09CUkUgTk9TT1RST1NcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTMyIGgtMzIgbXgtYXV0byBsZzpteC0wXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvTG9nb0RlTGFGaW5jYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiRGUgTGEgRmluY2EgTG9nb1wiXG4gICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbGc6dy0xLzIgaC1bMjUwcHhdIHNtOmgtWzM1MHB4XSBtZDpoLVs0MDBweF0gbGc6aC1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvY29taWRhMi5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkRlIExhIEZpbmNhIFJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogJ2JyaWdodG5lc3MoMS4yKSBjb250cmFzdCgxLjEpJyxcbiAgICAgICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ211bHRpcGx5J1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNzAlKScsXG4gICAgICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdvdmVybGF5J1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZsb2F0aW5nSW1hZ2VcbiAgICAgICAgICBzcmM9XCIvcG5nL2ltZzFfYmcucG5nXCJcbiAgICAgICAgICBhbHQ9XCJGbG9hdGluZyBNdXNocm9vbVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaGlkZGVuIG1kOmJsb2NrIHRvcC0xLzEgbGVmdC0wIHctWzEwMHB4XSBoLVsxMDBweF0gbWQ6dy1bMTUwcHhdIG1kOmgtWzE1MHB4XSBsZzp3LVsyMDBweF0gbGc6aC1bMjAwcHhdIGZsb2F0aW5nLWltYWdlIHotMTBcIlxuICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZsb2F0aW5nSW1hZ2VcbiAgICAgICAgICBzcmM9XCIvcG5nL2ltZzJfYmcucG5nXCJcbiAgICAgICAgICBhbHQ9XCJGbG9hdGluZyBMZWFmXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoaWRkZW4gbWQ6YmxvY2sgYm90dG9tLTIvNCByaWdodC0wIHctWzEwMHB4XSBoLVsxMDBweF0gbWQ6dy1bMTUwcHhdIG1kOmgtWzE1MHB4XSBsZzp3LVsyMDBweF0gbGc6aC1bMjAwcHhdIGZsb2F0aW5nLWltYWdlIHotMTBcIlxuICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZWN0aW9uUmVmcy5jdXJyZW50WzFdPy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB0ZXh0LVsjOTEyMTFlXSBhbmltYXRlLWJvdW5jZSBiZy13aGl0ZS84MCByb3VuZGVkLWZ1bGwgcC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9XCJoLTYgdy02IHNtOmgtOCBzbTp3LThcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEFib3V0IFNlY3Rpb25zICovfVxuICAgICAge2Fib3V0U2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8QWJvdXRTZWN0aW9uXG4gICAgICAgICAga2V5PXtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgIHJlZj17KGVsOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHsgaWYgKGVsKSBzZWN0aW9uUmVmcy5jdXJyZW50W2luZGV4ICsgMV0gPSBlbCB9fVxuICAgICAgICAgIHsuLi5zZWN0aW9ufVxuICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVTZWN0aW9uID09PSBpbmRleCArIDF9XG4gICAgICAgIC8+XG4gICAgICApKX1cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGFib3V0U2VjdGlvbnMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJOdWVzdHJhIEhpc3RvcmlhXCIsXG4gICAgY29udGVudDogXCJVYmljYWRvIGVuIGVsIGNvcmF6w7NuIGRlIFF1ZXBvcywgUHVudGFyZW5hcywgRGUgTGEgRmluY2EgZXMgdW4gcmVzdGF1cmFudGUgcXVlIG9mcmVjZSB1bmEgZXhwZXJpZW5jaWEgY3VsaW5hcmlhIMO6bmljYSwgZW4gZG9uZGUgbGEgZnJlc2N1cmEgZGUgbG9zIGluZ3JlZGllbnRlcyB5IGxhIGRlZGljYWNpw7NuIHBvciBsYSBnYXN0cm9ub23DrWEgY29zdGFycmljZW5zZSBzZSB1bmVuIHBhcmEgZGVsZWl0YXIgYSBsb3MgcGFsYWRhcmVzIG3DoXMgZXhpZ2VudGVzLlwiLFxuICAgIGltYWdlOiBcIi9pbWcvaW50ZXJpb3IuanBlZ1wiLFxuICAgIGltYWdlQWx0OiBcIkludGVyaW9yIGRlbCByZXN0YXVyYW50ZSBEZSBMYSBGaW5jYVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJOdWVzdHJhIE1pc2nDs25cIixcbiAgICBjb250ZW50OiBcIkVuIERlIExhIEZpbmNhLCBudWVzdHJhIG1pc2nDs24gZXMgaGFjZXIgcXVlIGxhIGNvbWlkYSBkZSBjYWxpZGFkIHNlYSBhY2Nlc2libGUsIGFncmFkYWJsZSB5IHNvc3RlbmlibGUuIENyZWVtb3MgZW4gZWwgcG9kZXIgZGUgbGEgYnVlbmEgY29taWRhIHBhcmEgbnV0cmlyIHRhbnRvIGVsIGN1ZXJwbyBjb21vIGVsIGFsbWEsIHkgZXN0YW1vcyBjb21wcm9tZXRpZG9zIGEgc2VydmlyIHBsYXRvcyBxdWUgc2VhbiB0YW4gYnVlbm9zIHBhcmEgdGkgY29tbyBsbyBzb24gcGFyYSBlbCBtZWRpbyBhbWJpZW50ZS5cIixcbiAgICBpbWFnZTogXCIvaW1nL2NvbWlkYTcuanBnXCIsXG4gICAgaW1hZ2VBbHQ6IFwiUGxhdG9zIGRlIERlIExhIEZpbmNhXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk51ZXN0cm9zIFZhbG9yZXNcIixcbiAgICBjb250ZW50OiBcIkxhIHNvc3RlbmliaWxpZGFkIHkgbGEgY2FsaWRhZCBzb24gZnVuZGFtZW50YWxlcyBlbiB0b2RvIGxvIHF1ZSBoYWNlbW9zLiBUcmFiYWphbW9zIGRpcmVjdGFtZW50ZSBjb24gcHJvZHVjdG9yZXMgbG9jYWxlcywgbWluaW1pemFtb3MgbnVlc3RybyBpbXBhY3RvIGFtYmllbnRhbCB5IGNyZWFtb3MgcmVsYWNpb25lcyBkdXJhZGVyYXMgY29uIG51ZXN0cmEgY29tdW5pZGFkIHBhcmEgb2ZyZWNlciBsYSBtZWpvciBleHBlcmllbmNpYSBnYXN0cm9uw7NtaWNhIHBvc2libGUuXCIsXG4gICAgaW1hZ2U6IFwiL2ltZy9jb21pZGEzLmpwZ1wiLFxuICAgIGltYWdlQWx0OiBcIkluZ3JlZGllbnRlcyBmcmVzY29zIGRlIERlIExhIEZpbmNhXCJcbiAgfVxuXVxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJGb290ZXIiLCJJbWFnZSIsIkNoZXZyb25Eb3duIiwiQWJvdXRTZWN0aW9uIiwiRmxvYXRpbmdJbWFnZSIsIkFib3V0UGFnZSIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwic2VjdGlvblJlZnMiLCJoYW5kbGVTY3JvbGwiLCJwYWdlVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsInBhZ2VCb3R0b20iLCJpbm5lckhlaWdodCIsInNlY3Rpb25zIiwiY3VycmVudCIsImZvckVhY2giLCJzZWN0aW9uIiwiaW5kZXgiLCJlbGVtZW50VG9wIiwib2Zmc2V0VG9wIiwiZWxlbWVudEJvdHRvbSIsIm9mZnNldEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiZWwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJoMSIsImgyIiwic3JjIiwiYWx0IiwiZmlsbCIsImZpbHRlciIsIm1peEJsZW5kTW9kZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYWJvdXRTZWN0aW9ucyIsIm1hcCIsImlzQWN0aXZlIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJpbWFnZUFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/about/page.tsx\n"));

/***/ })

});