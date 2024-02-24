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
/* harmony import */ var _Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Projects/ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Thanh Vy\\Desktop\\4 react web apps\\portfolio_website-STARTER\\src\\components\\Technologies\\Technologies.js",
    _this = undefined;







var Technologies = function Technologies() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    id: "tech",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      main: true,
      children: "Technologies"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
      children: "I've work with a range of technologies in the web development world."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.technologies.map(function (_ref) {
        var id = _ref.id,
            logo = _ref.logo,
            name = _ref.name;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_5__.TechCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
            src: logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContent, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_4__.HeaderThree, {
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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


/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "TechCard": function() { return /* binding */ TechCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
});
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
var TechCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TechnologiesStyles__TechCard",
  componentId: "sc-1ehw0pq-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TechnologiesStyles__TitleContent",
  componentId: "sc-1ehw0pq-3"
})(["text-align:center;z-index:20;width:100%;"]); // export const List = styled.ul`
//   list-style-type: none;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   margin: 3rem 0;
//   @media ${props => props.theme.breakpoints.lg}{
//     margin: 64px 0;
//   }
//   @media ${props => props.theme.breakpoints.md}{
//     margin: 64px 0;
//     gap: 24px
//   }
//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     flex-direction: column;
//     margin: 32px 0;
//   }
// `
// export const ListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     margin-left: 18px;
//   }
// `
// export const ListTitle = styled.h4`
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 32px;
//   letter-spacing: 0.02em;
//   color: #FFFFFF;
//   margin-bottom: 8px;
// @media ${props => props.theme.breakpoints.md}{
//   font-size: 24px;
//   line-height: 28px;
// }
// @media ${props => props.theme.breakpoints.sm}{
//   font-size: 20px;
//   line-height: 28px;
//   letter-spacing: 0.02em;
//   margin-bottom: 4px;
// }
// `
// export const ListParagraph = styled.p`
//   font-size: 18px;
//   line-height: 30px;
//   color: rgba(255, 255, 255, 0.75);
//   @media ${props => props.theme.breakpoints.md}{
//     font-size: 16px;
//     line-height: 28px;
//   }
//   @media ${props => props.theme.breakpoints.sm}{
//     font-size: 14px;
//     line-height: 22px;
//   }
// `
// export const ListItem = styled.li`
//   max-width: 320px;
//   display: flex;
//   flex-direction: column;
// @media ${props => props.theme.breakpoints.md}{
//   max-width: 203px;
// }
// @media ${props => props.theme.breakpoints.sm}{
//   margin-bottom: 14px;
//   max-width: 320px;
//   flex-direction: row;
// }
// `
// export const ListIcon = styled.img`
//   display: block;
//   width: 48px;
//   height: 48px;
//   margin-bottom: 10px;
//   @media ${props => props.theme.breakpoints.md}{
//     width: 40px;
//     height: 40px;
//     margin-bottom: 8px;
//   }
//   @media ${props => props.theme.breakpoints.sm}{
//     width: 32px;
//     height: 32px;
//     margin-bottom: 0px;
//   }
// `

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llc1N0eWxlcy5qcyJdLCJuYW1lcyI6WyJUZWNobm9sb2dpZXMiLCJ0ZWNobm9sb2dpZXMiLCJpZCIsImxvZ28iLCJuYW1lIiwiSW1hZ2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJsZyIsIm1kIiwiTWFpbkltYWdlIiwiVGVjaENhcmQiLCJzbSIsIlRpdGxlQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLHNCQUNuQiw4REFBQyw2REFBRDtBQUFTLE1BQUUsRUFBQyxNQUFaO0FBQUEsNEJBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFBYyxVQUFJLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBTUUsOERBQUMsbUVBQUQ7QUFBQSxnQkFDR0Msa0VBQUEsQ0FBaUI7QUFBQSxZQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxZQUFPQyxJQUFQLFFBQU9BLElBQVA7QUFBQSxZQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSw0QkFDaEIsOERBQUMseURBQUQ7QUFBQSxrQ0FDRSw4REFBQyxHQUFEO0FBQUssZUFBRyxFQUFFRDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxZQUFEO0FBQUEsbUNBQ0UsOERBQUMsaUVBQUQ7QUFBQSx3QkFBY0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQWVGLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEbUI7QUFBQSxDQUFyQjs7S0FBTUYsWTtBQW9CTiwrREFBZUEsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFTyxJQUFNSyxjQUFjLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1YQVdoQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FYVyxFQWdCaEIsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUE1QjtBQUFBLENBaEJXLENBQXBCO0FBdUJBLElBQU1DLFNBQVMsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWY7QUFJQSxJQUFNTyxRQUFRLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZIQUtWLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBbkM7QUFBQSxDQUxVLENBQWQ7QUFVQSxJQUFNQyxZQUFZLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdEQUFsQixDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1OGU0ODI3ZDI1ZmZmNWExMzAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZENvbnRhaW5lciwgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyB0ZWNobm9sb2dpZXMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEhlYWRlclRocmVlIH0gZnJvbSAnLi4vUHJvamVjdHMvUHJvamVjdHNTdHlsZXMnO1xuaW1wb3J0IHsgVGVjaENhcmQgfSBmcm9tICcuL1RlY2hub2xvZ2llc1N0eWxlcyc7XG5cbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+ICAoXG4gIDxTZWN0aW9uIGlkPSd0ZWNoJz5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8U2VjdGlvblRpdGxlIG1haW4+VGVjaG5vbG9naWVzPC9TZWN0aW9uVGl0bGU+XG4gICAgPFNlY3Rpb25UZXh0PlxuICAgICAgSSd2ZSB3b3JrIHdpdGggYSByYW5nZSBvZiB0ZWNobm9sb2dpZXMgaW4gdGhlIHdlYiBkZXZlbG9wbWVudCB3b3JsZC4gXG4gICAgPC9TZWN0aW9uVGV4dD5cbiAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgIHt0ZWNobm9sb2dpZXMubWFwKCgge2lkLCBsb2dvLCBuYW1lfSkgPT4gKFxuICAgICAgICA8VGVjaENhcmQga2V5PXtpZH0+XG4gICAgICAgICAgPEltZyBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxIZWFkZXJUaHJlZT57bmFtZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICA8L1RlY2hDYXJkPlxuICAgICAgKSl9XG4gICAgPC9HcmlkQ29udGFpbmVyPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwLjI1KSA1My44JSwgcmdiYSg3OSwgMTA4LCAxNzYsIDApIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNjBweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFRlY2hDYXJkID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxMDAlO1xuXG5gO1xuXG4vLyBleHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuLy8gICBnYXA6IDQwcHg7XG4vLyAgIG1hcmdpbjogM3JlbSAwO1xuICBcbi8vICAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xuLy8gICAgIG1hcmdpbjogNjRweCAwO1xuLy8gICB9XG5cbi8vICAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuLy8gICAgIG1hcmdpbjogNjRweCAwO1xuLy8gICAgIGdhcDogMjRweFxuLy8gICB9XG4gIFxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIG1hcmdpbjogMzJweCAwO1xuLy8gICB9XG4vLyBgXG5cbi8vIGV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBtYXJnaW4tbGVmdDogMThweDtcbi8vICAgfVxuLy8gYFxuXG4vLyBleHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxuLy8gICBmb250LXdlaWdodDogNzAwO1xuLy8gICBmb250LXNpemU6IDI4cHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuLy8gICBjb2xvcjogI0ZGRkZGRjtcbi8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4vLyBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4vLyAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4vLyB9XG5cbi8vIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBsaW5lLWhlaWdodDogMjhweDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbi8vICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuLy8gfVxuLy8gYFxuXG4vLyBleHBvcnQgY29uc3QgTGlzdFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuLy8gICBmb250LXNpemU6IDE4cHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuLy8gICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuLy8gICB9XG5cbi8vICAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBsaW5lLWhlaWdodDogMjJweDtcbi8vICAgfVxuLy8gYFxuXG4vLyBleHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4vLyAgIG1heC13aWR0aDogMzIwcHg7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbi8vIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbi8vICAgbWF4LXdpZHRoOiAyMDNweDtcbi8vIH1cblxuLy8gQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuLy8gICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuLy8gICBtYXgtd2lkdGg6IDMyMHB4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuLy8gfVxuLy8gYFxuXG4vLyBleHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgd2lkdGg6IDQ4cHg7XG4vLyAgIGhlaWdodDogNDhweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4vLyAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbi8vICAgICB3aWR0aDogNDBweDtcbi8vICAgICBoZWlnaHQ6IDQwcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gICB9XG5cbi8vICAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuLy8gICAgIHdpZHRoOiAzMnB4O1xuLy8gICAgIGhlaWdodDogMzJweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4vLyAgIH1cbi8vIGBcbiJdLCJzb3VyY2VSb290IjoiIn0=