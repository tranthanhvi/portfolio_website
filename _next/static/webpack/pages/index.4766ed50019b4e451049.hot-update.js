self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;display:none;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-9w0vkp-1"
})(["font-size:2rem;"]);
var Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;"]);
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:1 / 4 / 2 / 6;"], function (props) {
  return props.theme.breakpoints.md;
});
var Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-4"
})(["grid-area:1 / 5 / 2 / 6;display:", ";justify-content:space-around;align-items:center;@media ", "{display:", ";justify-content:flex-start;align-items:center;}"], function (props) {
  return props.hide ? 'none' : 'flex';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.hide ? 'flex' : 'none';
}); // Navigation Links

var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-5"
})(["font-size:2rem;line-height:32px;color:#1d1e4e;transition:0.4s ease;&:hover{color:#000;opacity:1;cursor:pointer;font-weight:500;transition:0.3s ease;}@media ", "{padding:0.5rem;}@media ", "{padding:2rem;display:", "}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.hide ? 'none' : 'flex';
}); /// DropDown Contact

var ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var NavProductsIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '1' : '.75';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'scaleY(-1)' : 'scaleY(1)';
}, function (props) {
  return props.theme.breakpoints.sm;
}); // Social Icons 

var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-8"
})(["transition:0.3s ease;color:#1d1e4e;border-radius:50px;display:flex;justtify-content:center;align-items:center;padding:8px;&:hover{background-color:#e0f3e1;transform:scale(1.2);cursor:pointer;@media ", "{transform:scale(1.05);transition:0.3s ease;}@media ", "{transform:scale(1.05);transition:0.3s ease;}}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIlNwYW4iLCJEaXYxIiwiRGl2MiIsIm1kIiwiRGl2MyIsImhpZGUiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRSQVFYLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJXLENBQWY7QUFrQkEsSUFBTUMsSUFBSSxHQUFHTCxzRUFBSDtBQUFBO0FBQUE7QUFBQSx1QkFBVjtBQUlBLElBQU1NLElBQUksR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEscUZBQVY7QUFNQSxJQUFNTyxJQUFJLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtHQUtOLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBbkM7QUFBQSxDQUxNLENBQVY7QUFTQSxJQUFNQyxJQUFJLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNLQUVKLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNTLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWpDO0FBQUEsQ0FGSSxFQUtOLFVBQUNULEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBbkM7QUFBQSxDQUxNLEVBTUYsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1MsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFBakM7QUFBQSxDQU5FLENBQVYsQyxDQWFQOztBQUNPLElBQU1DLE9BQU8sR0FBR1gsbUVBQUg7QUFBQTtBQUFBO0FBQUEsZ09BWVQsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWlMsRUFnQlQsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSyxFQUFuQztBQUFBLENBaEJTLEVBa0JMLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNTLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWpDO0FBQUEsQ0FsQkssQ0FBYixDLENBdUJQOztBQUNPLElBQU1FLGVBQWUsR0FBR1osd0VBQUg7QUFBQTtBQUFBO0FBQUEsc1FBbUJqQixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FuQmlCLEVBc0JqQixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQW5DO0FBQUEsQ0F0QmlCLENBQXJCO0FBMkJBLElBQU1LLGVBQWUsR0FBR2IsMERBQU0sQ0FBQ2MsOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1S0FLZjtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsR0FBSCxHQUFTLEtBQWhDO0FBQUEsQ0FMZSxFQU1iO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxZQUFILEdBQWtCLFdBQXpDO0FBQUEsQ0FOYSxFQVlqQixVQUFDZCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FaaUIsQ0FBckIsQyxDQW1CUDs7QUFFTyxJQUFNWSxXQUFXLEdBQUdoQixtRUFBSDtBQUFBO0FBQUE7QUFBQSx5VEFjWCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FkVyxFQW1CWCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQW5DO0FBQUEsQ0FuQlcsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDc2NmVkNTAwMTliNGU0NTEwNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcclxuXHJcbiAgYDtcclxuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcclxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gcHJvcHMuaGlkZSA/ICdub25lJyA6ICdmbGV4J307XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gcHJvcHMuaGlkZSA/ICdmbGV4JyA6ICdub25lJ307XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIExpbmtzXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiAjMWQxZTRlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gcHJvcHMuaGlkZSA/ICdub25lJyA6ICdmbGV4J31cclxuICB9XHJcblxyXG5gO1xyXG5cclxuLy8vIERyb3BEb3duIENvbnRhY3RcclxuZXhwb3J0IGNvbnN0IENvbnRhY3REcm9wRG93biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZQcm9kdWN0c0ljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBvcGFjaXR5OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJzEnIDogJy43NScpfTtcclxuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW46IDJweCAwIDAgMnB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbi8vIFNvY2lhbCBJY29ucyBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxyXG50cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbmNvbG9yOiAjMWQxZTRlO1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3R0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZzogOHB4O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGYzZTE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9