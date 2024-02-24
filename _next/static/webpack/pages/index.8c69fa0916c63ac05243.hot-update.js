self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony export */   "Logo": function() { return /* binding */ Logo; }
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
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);width:400px;display:flex;justtify-content:flex-start;align-item:center;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "TechnologiesStyles__Logo",
  componentId: "sc-1ehw0pq-3"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;border-radius:10px 10px 0 0;"]); // export const List = styled.ul`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llc1N0eWxlcy5qcyJdLCJuYW1lcyI6WyJJbWFnZUNvbnRhaW5lciIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsImxnIiwibWQiLCJNYWluSW1hZ2UiLCJUZWNoQ2FyZCIsInNtIiwiTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1YQVdoQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FYVyxFQWdCaEIsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUE1QjtBQUFBLENBaEJXLENBQXBCO0FBdUJBLElBQU1DLFNBQVMsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWY7QUFJQSxJQUFNTyxRQUFRLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNLQU9WLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBbkM7QUFBQSxDQVBVLENBQWQ7QUFhQSxJQUFNQyxJQUFJLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFWLEMsQ0FVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGM2OWZhMDkxNmM2M2FjMDUyNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgcmdiYSg3OSwgMTA4LCAxNzYsIDAuMjUpIDUzLjglLCByZ2JhKDc5LCAxMDgsIDE3NiwgMCkgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4O1xuICBtYXJnaW4tdG9wOiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgVGVjaENhcmQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggcmdiYSg4MCwgNzgsIDc4LCAwLjUpO1xuICB3aWR0aDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3R0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwOyBcbmBcblxuXG5cbi8vIGV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuLy8gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4vLyAgIGdhcDogNDBweDtcbi8vICAgbWFyZ2luOiAzcmVtIDA7XG4gIFxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XG4vLyAgICAgbWFyZ2luOiA2NHB4IDA7XG4vLyAgIH1cblxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4vLyAgICAgbWFyZ2luOiA2NHB4IDA7XG4vLyAgICAgZ2FwOiAyNHB4XG4vLyAgIH1cbiAgXG4vLyAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgbWFyZ2luOiAzMnB4IDA7XG4vLyAgIH1cbi8vIGBcblxuLy8gZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4vLyAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuLy8gICB9XG4vLyBgXG5cbi8vIGV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXG4vLyAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyAgIGZvbnQtc2l6ZTogMjhweDtcbi8vICAgbGluZS1oZWlnaHQ6IDMycHg7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4vLyAgIGNvbG9yOiAjRkZGRkZGO1xuLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbi8vIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbi8vICAgZm9udC1zaXplOiAyNHB4O1xuLy8gICBsaW5lLWhlaWdodDogMjhweDtcbi8vIH1cblxuLy8gQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuLy8gICBtYXJnaW4tYm90dG9tOiA0cHg7XG4vLyB9XG4vLyBgXG5cbi8vIGV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXG4vLyAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG4vLyAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4vLyAgIH1cblxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuLy8gICB9XG4vLyBgXG5cbi8vIGV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbi8vICAgbWF4LXdpZHRoOiAzMjBweDtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuLy8gQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuLy8gICBtYXgtd2lkdGg6IDIwM3B4O1xuLy8gfVxuXG4vLyBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4vLyAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4vLyAgIG1heC13aWR0aDogMzIwcHg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4vLyB9XG4vLyBgXG5cbi8vIGV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICB3aWR0aDogNDhweDtcbi8vICAgaGVpZ2h0OiA0OHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbi8vICAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuLy8gICAgIHdpZHRoOiA0MHB4O1xuLy8gICAgIGhlaWdodDogNDBweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyAgIH1cblxuLy8gICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4vLyAgICAgd2lkdGg6IDMycHg7XG4vLyAgICAgaGVpZ2h0OiAzMnB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDBweDtcbi8vICAgfVxuLy8gYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==