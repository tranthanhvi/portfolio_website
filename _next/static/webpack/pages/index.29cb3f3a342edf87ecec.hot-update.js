self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "sc-l76idc-0"
})(["width:100%;height:auto;object-fit:cover;overflow:hidden;border-radius:10px 10px 0 0;"]);
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "sc-l76idc-1"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:100%;height:auto;max-width:400px;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "sc-l76idc-2"
})(["text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "sc-l76idc-3"
})(["font-weight:500;letter-spacing:2px;color:#1d1e4e;padding:.5rem 0;font-size:", ";@media ", "{font-size:1.5rem;}"], function (props) {
  return props.title ? '3rem' : '2rem';
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "sc-l76idc-4"
})(["width:70px;height:3px;margin:10px auto;border:0;background:linear-gradient(90deg,rgba(29,30,78,1) 0%,rgba(61,122,68,1) 100%);;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "sc-l76idc-5"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "sc-l76idc-6"
})(["width:100%;padding:0 50px;color:#2A363B;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "sc-l76idc-7"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "sc-l76idc-8"
})(["color:#e0f3e1;font-size:1.6rem;padding:1rem 1.5rem;background:#1d1e4e;border-radius:15px;transition:0.5s;&:hover{color:#e8eec8;background:#1d384e;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "sc-l76idc-9"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "sc-l76idc-10"
})(["color:#3d7a44;font-size:1.5rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiQmxvZ0NhcmQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFUO0FBUUEsSUFBTUMsUUFBUSxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3SkFRVixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FSVSxDQUFkO0FBYUEsSUFBTUMsWUFBWSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxnREFBbEI7QUFNQSxJQUFNTyxXQUFXLEdBQUdQLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHVIQU1ULFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNNLEtBQU4sR0FBYyxNQUFkLEdBQXVCLE1BQWxDO0FBQUEsQ0FOUyxFQVFiLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJhLENBQWpCO0FBY0EsSUFBTUksRUFBRSxHQUFHVCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxzSUFBUjtBQVFBLElBQU1VLEtBQUssR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFXQSxJQUFNVyxRQUFRLEdBQUdYLG1FQUFIO0FBQUE7QUFBQTtBQUFBLCtIQU9WLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBVLENBQWQ7QUFjQSxJQUFNTyxXQUFXLEdBQUdaLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGlHQUFqQjtBQVFBLElBQU1hLGFBQWEsR0FBR2IsbUVBQUg7QUFBQTtBQUFBO0FBQUEsMkpBQW5CO0FBY0EsSUFBTWMsT0FBTyxHQUFHZCxvRUFBSDtBQUFBO0FBQUE7QUFBQSwrREFBYjtBQUtBLElBQU1lLEdBQUcsR0FBR2Ysb0VBQUg7QUFBQTtBQUFBO0FBQUEsdUNBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjljYjNmM2EzNDJlZGY4N2VjZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDsgXG5gXG5cbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzFkMWU0ZTtcbiAgcGFkZGluZzogLjVyZW0gMDtcblxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9ICBcblxuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyOSwzMCw3OCwxKSAwJSwgcmdiYSg2MSwxMjIsNjgsMSkgMTAwJSk7O1xuYDtcblxuZXhwb3J0IGNvbnN0IEludHJvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNkY2UzZTc7XG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuYDtcblxuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgY29sb3I6ICMyQTM2M0I7XG4gIGZvbnQtc3R5bGU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzouM3JlbVxuICBcbn1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIuNXJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcbmNvbG9yOiNlMGYzZTE7XG5mb250LXNpemU6IDEuNnJlbTtcbnBhZGRpbmc6MXJlbSAxLjVyZW07XG5iYWNrZ3JvdW5kOiAjMWQxZTRlO1xuYm9yZGVyLXJhZGl1czogMTVweDtcbnRyYW5zaXRpb246IDAuNXM7XG4mOmhvdmVye1xuICBjb2xvcjogI2U4ZWVjODsgXG4gIGJhY2tncm91bmQ6ICMxZDM4NGU7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogIzNkN2E0NDtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCJdLCJzb3VyY2VSb290IjoiIn0=