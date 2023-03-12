"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/HomePage.tsx":
/*!****************************!*\
  !*** ./pages/HomePage.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"options\": () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__]);\n([chart_js__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nconst options = {\n    responsive: true,\n    plugins: {\n        legend: {\n            position: \"bottom\"\n        },\n        title: {\n            display: true,\n            text: \"Daily Recharge Collection\"\n        }\n    }\n};\nconst labels = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            label: \"collections\",\n            data: [\n                45000,\n                33424,\n                40000,\n                57647,\n                21112,\n                42312,\n                67868\n            ],\n            backgroundColor: \"rgba(0, 99, 232, 0.5)\"\n        }\n    ]\n};\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-5 flex-wrap my-5 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[50vh] w-[600px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n                        options: options,\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\HomePage.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\HomePage.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[50vh] w-[600px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n                        options: options,\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\HomePage.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\HomePage.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\HomePage.tsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ib21lUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQVNQO0FBQ29CO0FBR3RDRSxvREFBZ0IsQ0FDWkMsbURBQWFBLEVBQ2JDLGlEQUFXQSxFQUNYQyxnREFBVUEsRUFDVkMsMkNBQUtBLEVBQ0xDLDZDQUFPQSxFQUNQQyw0Q0FBTUE7QUFHSCxNQUFNRyxVQUFVO0lBQ25CQyxZQUFZLElBQUk7SUFDaEJDLFNBQVM7UUFDTEMsUUFBUTtZQUNKQyxVQUFVO1FBQ2Q7UUFDQUMsT0FBTztZQUNIQyxTQUFTLElBQUk7WUFDYkMsTUFBTTtRQUNWO0lBQ0o7QUFDSixFQUFFO0FBRUYsTUFBTUMsU0FBUztJQUFDO0lBQVc7SUFBWTtJQUFTO0lBQVM7SUFBTztJQUFRO0NBQU87QUFFeEUsTUFBTUMsT0FBTztJQUNoQkQ7SUFDQUUsVUFBVTtRQUNOO1lBQ0lDLE9BQU87WUFDUEYsTUFBTTtnQkFBQztnQkFBTztnQkFBTztnQkFBTztnQkFBTztnQkFBTztnQkFBTzthQUFNO1lBQ3ZERyxpQkFBaUI7UUFDckI7S0FDSDtBQUNMLEVBQUU7QUFFRixNQUFNQyxXQUFXLElBQU07SUFDbkIscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ2pCLGdEQUFHQTt3QkFBQ0UsU0FBU0E7d0JBQVNTLE1BQU1BOzs7Ozs7Ozs7Ozs4QkFFakMsOERBQUNLO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDakIsZ0RBQUdBO3dCQUFDRSxTQUFTQTt3QkFBU1MsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtBQUVBLGlFQUFlSSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4vLi9wYWdlcy9Ib21lUGFnZS50c3g/Yzk4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBDaGFydCBhcyBDaGFydEpTLFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgQmFyRWxlbWVudCxcclxuICAgIFRpdGxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIExlZ2VuZCxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIEJhckVsZW1lbnQsXHJcbiAgICBUaXRsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBMZWdlbmRcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nIGFzIGNvbnN0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgdGV4dDogJ0RhaWx5IFJlY2hhcmdlIENvbGxlY3Rpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcImNvbGxlY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFs0NTAwMCwgMzM0MjQsIDQwMDAwLCA1NzY0NywgMjExMTIsIDQyMzEyLCA2Nzg2OF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgOTksIDIzMiwgMC41KScsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTUgZmxleC13cmFwIG15LTUgJyA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNTB2aF0gdy1bNjAwcHhdJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhciBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNTB2aF0gdy1bNjAwcHhdJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhciBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiQmFyIiwicmVnaXN0ZXIiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJsYWJlbHMiLCJkYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsIkhvbWVQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/HomePage.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage */ \"./pages/HomePage.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HomePage__WEBPACK_IMPORTED_MODULE_2__]);\n_HomePage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"E - Ticket | Admin\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\index.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\index.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\index.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon-dark.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Arshil's workplace\\\\Sem-6\\\\project_e_ticket_management_system\\\\admin\\\\pages\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNLO0FBRWxCLFNBQVNFLE9BQU87SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDRztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDUixpREFBUUE7Ozs7Ozs7QUFJZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9Ib21lUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FIC0gVGlja2V0IHwgQWRtaW48L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24tZGFyay5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhvbWVQYWdlIC8+XG5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJIb21lUGFnZSIsIkhvbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();