self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Thanh Vy\\Desktop\\4 react web apps\\portfolio_website-STARTER\\src\\components\\Technologies\\Technologies.js",
    _this = undefined;





var Technologies = function Technologies() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    id: "tech",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      main: true,
      children: "Technologies"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
      children: "I've work with a range of technologies in the web development world."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.technologies.map(function (_ref) {
        var id = _ref.id,
            logo = _ref.logo,
            name = _ref.name;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
            src: logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContent, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderThree, {
              title: true,
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 11
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

_c = Technologies;
/* harmony default export */ __webpack_exports__["default"] = (Technologies);

var _c;

$RefreshReg$(_c, "Technologies");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llcy5qcyJdLCJuYW1lcyI6WyJUZWNobm9sb2dpZXMiLCJ0ZWNobm9sb2dpZXMiLCJpZCIsImxvZ28iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsc0JBQ25CLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE1BQVo7QUFBQSw0QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRSw4REFBQyxtRUFBRDtBQUFBLGdCQUNHQyxrRUFBQSxDQUFpQjtBQUFBLFlBQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLFlBQU9DLElBQVAsUUFBT0EsSUFBUDtBQUFBLFlBQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLDRCQUNoQiw4REFBQyxRQUFEO0FBQUEsa0NBQ0UsOERBQUMsR0FBRDtBQUFLLGVBQUcsRUFBRUQ7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsWUFBRDtBQUFBLG1DQUNFLDhEQUFDLFdBQUQ7QUFBYSxtQkFBSyxNQUFsQjtBQUFBLHdCQUFvQkM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFlRixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG1CO0FBQUEsQ0FBckI7O0tBQU1GLFk7QUFxQk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDNkMDY3ODBlOTE3OTg0NGFiZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkQ29udGFpbmVyLCBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IHRlY2hub2xvZ2llcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiAgKFxuICA8U2VjdGlvbiBpZD0ndGVjaCc+XG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgPFNlY3Rpb25UaXRsZSBtYWluPlRlY2hub2xvZ2llczwvU2VjdGlvblRpdGxlPlxuICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgIEkndmUgd29yayB3aXRoIGEgcmFuZ2Ugb2YgdGVjaG5vbG9naWVzIGluIHRoZSB3ZWIgZGV2ZWxvcG1lbnQgd29ybGQuIFxuICAgIDwvU2VjdGlvblRleHQ+XG4gICAgPEdyaWRDb250YWluZXI+XG4gICAgICB7dGVjaG5vbG9naWVzLm1hcCgoIHtpZCwgbG9nbywgbmFtZX0pID0+IChcbiAgICAgICAgPEJsb2dDYXJkIGtleT17aWR9PlxuICAgICAgICAgIDxJbWcgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8SGVhZGVyVGhyZWUgdGl0bGU+e25hbWV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgPC9CbG9nQ2FyZD5cblxuICAgICAgKSl9XG4gICAgPC9HcmlkQ29udGFpbmVyPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9