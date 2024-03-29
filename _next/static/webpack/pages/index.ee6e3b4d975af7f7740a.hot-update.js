self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "GridContainerTech": function() { return /* binding */ GridContainerTech; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:", ";max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:", ";justify-content:flex-start;margin:0 auto;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:", ";justify-content:flex-start;margin:0 auto;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.first ? "12rem auto" : "8rem auto";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
}, function (props) {
  return props.first ? "column-reverse" : "column";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:#1d1e4e;-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? '65px' : '56px';
}, function (props) {
  return props.main ? '72px' : '56px';
}, function (props) {
  return props.main ? '58px 0 16px' : '0';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? '56px' : '48px';
}, function (props) {
  return props.main ? '56px' : '48px';
}, function (props) {
  return props.main ? '40px 0 12px' : '0';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? '32px' : '28px';
}, function (props) {
  return props.main ? '40px' : '32px';
}, function (props) {
  return props.main ? '16px 0 8px' : '0';
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(28,30,78,0.7);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:linear-gradient(90deg,rgba(29,30,78,1) 0%,rgba(61,122,68,1) 100%);margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(42,54,59,1);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#000;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}); // export const Button = styled.button`
//   background: transparent;
//   border-radius: 7px;
//   border: 2.5px solid #1d1e4e;
//   color: #1d1e4e;
//   margin: 0 0 1rem 0;
//   padding: 0.25em 1em;
//   cursor: pointer;
// &:hover {
//   background: rgb(120,225,133, 0.75);
// }
// `

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "GlobalComponents__Button",
  componentId: "sc-6qzy6y-6"
})(["display:flex;justify-content:center;background:transparent;border-radius:7px;border:2.5px solid #1d1e4e;color:#1d1e4e;margin:0 0 1rem 0;padding:0.25em 1em;cursor:pointer;&:hover{background:rgb(120,225,133,0.75);}"]); // export const ButtonBack = styled.div`
//   width: ${({ alt }) => alt ? '150px' : '262px'};
//   height: ${({ alt }) => alt ? '52px' : '64px'};
//   border-radius: 50px;
//   font-size: ${({ alt }) => alt ? '20px' : '24px'};
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
//   color: #000;
//   background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
//   cursor: pointer;
//   transition: 0.5s ease;
//   position: relative;
//   overflow: hidden;
//   opacity: ${({ disabled }) => disabled ? '.5' : '1'};
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: ${({ alt }) => alt ? '150px' : '184px'};
//     height: ${({ alt }) => alt ? '52px' : '48px'};
//     font-size: ${({ alt }) => alt ? '20px' : '16px'};
//     margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 100%;
//     height: 32px;
//     font-size: 14px;
//     margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
//   }
// `
// export const ButtonFront = styled.button`
//   border: none;
//   border-radius: 50px;
//   color: #2A363B;
//   display: flex;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: ${({ alt }) => alt ? 'linear-gradient(270deg, rgba(120,225,133,1) 0%, rgba(255,255,240,1) 100%)' : 'linear-gradient(270deg, rgba(255,255,240,1) 0%, rgba(120,225,133,1) 100%)'};
//   opacity: ${({ disabled }) => disabled ? '.5' : '1'};
//   transition: .4s ease;
//   font-size: ${({ alt }) => alt ? '20px' : '24px'};
//   font-weight: 600;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};
//   &:hover {
//     opacity: 0;
//   }
//   &:focus {
//     outline: none;
//   }
//   &:active {
//     opacity: 1;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }
//   &:disabled{
//     background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
//     opacity: 0.5;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     font-size: ${({ alt }) => alt ? '20px' : '16px'};
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     font-size: 14px;
//   }
// `

var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-7"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref) {
  var large = _ref.large;
  return large ? '24px' : '16px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref2) {
  var large = _ref2.large;
  return large ? '16px' : '8px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref3) {
  var large = _ref3.large;
  return large ? '0' : '8px';
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-8"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref4) {
  var large = _ref4.large;
  return large ? '32px' : '24px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref5) {
  var nav = _ref5.nav;
  return nav ? '16px' : '24px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref6) {
  var large = _ref6.large;
  return large ? '32px' : '16px';
});
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__GridContainer",
  componentId: "sc-6qzy6y-9"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:1rem;row-gap:2rem;margin-bottom:4rem;@media ", "{display:flex;padding:2rem;padding-bottom:0;margin-bottom:4rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var GridContainerTech = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__GridContainerTech",
  componentId: "sc-6qzy6y-10"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:1rem;row-gap:2rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.sm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJmaXJzdCIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZCIsInNtIiwiU2VjdGlvblRpdGxlIiwibWFpbiIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvbkRpdmlkZXIiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b24iLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiIsIkdyaWRDb250YWluZXIiLCJHcmlkQ29udGFpbmVyVGVjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsT0FBTyxHQUFHQyx5RUFBSDtBQUFBO0FBQUE7QUFBQSx5WEFDUCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFqQztBQUFBLENBRE8sRUFFQSxVQUFDRCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxHQUFOLEdBQVksS0FBWixHQUFvQixRQUEvQjtBQUFBLENBRkEsRUFHUCxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRyxTQUFOLEdBQWtCLEdBQWxCLEdBQXdCLGFBQW5DO0FBQUEsQ0FITyxFQUtSLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sR0FBYyxZQUFkLEdBQTZCLFdBQXhDO0FBQUEsQ0FMUSxFQVlULFVBQUNKLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVpTLEVBY0UsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsR0FBTixHQUFZLEtBQVosR0FBb0IsUUFBL0I7QUFB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QixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FQcUIsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU2ZTNiNGQ5NzVhZjdmNzc0MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIiB9O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMucm93ID8gXCJyb3dcIiA6IFwiY29sdW1uXCIgfTtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCIgfSA7XHJcbiAgXHJcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMuZmlyc3QgPyBcIjEycmVtIGF1dG9cIiA6IFwiOHJlbSBhdXRvXCIgfTtcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIiB9O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIxNnB4IDE2cHggMFwiIH0gO1xyXG5cclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLmZpcnN0ID8gXCJjb2x1bW4tcmV2ZXJzZVwiIDogXCJjb2x1bW5cIiB9O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc2NXB4JyA6ICc1NnB4J307XHJcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzcycHgnIDogJzU2cHgnfTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICAjMWQxZTRlOyBcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjMDAwMDAwIDE4Ljc3JSwgcmdiYSg0MiwgNTQsIDU5LCAwLjY2KSA2MC4xNSUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU4cHggMCAxNnB4JyA6ICcwJ307XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4IDAgMTJweCcgOiAnMCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzMycHgnIDogJzI4cHgnfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4JyA6ICczMnB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcxNnB4IDAgOHB4JyA6ICcwJ307XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW07XHJcbiAgY29sb3I6IHJnYmEoMjgsIDMwLCA3OCwgMC43KTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyOSwzMCw3OCwxKSAwJSwgcmdiYSg2MSwxMjIsNjgsMSkgMTAwJSk7XHJcblxyXG4gICAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMuZGl2aWRlciA/IFwiNHJlbSAwXCIgOiBcIlwiIH07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgU2VjdGlvblN1YlRleHQgPSBzdHlsZWQucGBcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDQyLCA1NCwgNTksIDEpO1xyXG5cclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBmMTYyNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTRlYjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5gXHJcblxyXG4vLyBleHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbi8vICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMWQxZTRlO1xyXG4vLyAgIGNvbG9yOiAjMWQxZTRlO1xyXG4vLyAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuLy8gICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gJjpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiKDEyMCwyMjUsMTMzLCAwLjc1KTtcclxuLy8gfVxyXG4vLyBgXHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBib3JkZXI6IDIuNXB4IHNvbGlkICMxZDFlNGU7XHJcbiAgY29sb3I6ICMxZDFlNGU7XHJcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4mOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTIwLDIyNSwxMzMsIDAuNzUpO1xyXG59XHJcbmBcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXHJcbi8vICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMjYycHgnfTtcclxuLy8gICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc2NHB4J307XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuLy8gICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgbWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0pID8gJzAnIDogJzAgMCA4MHB4J307XHJcbi8vICAgY29sb3I6ICMwMDA7XHJcbi8vICAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSknfTtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcclxuXHJcbi8vICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4vLyAgICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMTg0cHgnfTtcclxuLy8gICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUycHgnIDogJzQ4cHgnfTtcclxuLy8gICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICc2NHB4J307XHJcbi8vICAgfVxyXG5cclxuLy8gICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMzJweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICczMnB4J307XHJcbi8vICAgfVxyXG4vLyBgXHJcblxyXG4vLyBleHBvcnQgY29uc3QgQnV0dG9uRnJvbnQgPSBzdHlsZWQuYnV0dG9uYFxyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4vLyAgIGNvbG9yOiAjMkEzNjNCO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgxMjAsMjI1LDEzMywxKSAwJSwgcmdiYSgyNTUsMjU1LDI0MCwxKSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsMjU1LDI0MCwxKSAwJSwgcmdiYSgxMjAsMjI1LDEzMywxKSAxMDAlKSd9O1xyXG4vLyAgIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcclxuLy8gICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcclxuLy8gICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBib3gtc2hhZG93OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJ2luc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKScgOiAnbm9uZSd9O1xyXG5cclxuLy8gICAmOmhvdmVyIHtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgfVxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICB9XHJcbi8vICAgJjphY3RpdmUge1xyXG4vLyAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6ZGlzYWJsZWR7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpO1xyXG4vLyAgICAgb3BhY2l0eTogMC41O1xyXG4vLyAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4vLyAgICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIH1cclxuLy8gYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzI0cHgnIDogJzE2cHgnfTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzE2cHgnIDogJzhweCd9O1xyXG5cclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMCcgOiAnOHB4J307XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzI0cHgnfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IG5hdiB9KSA9PiBuYXYgPyAnMTZweCcgOiAnMjRweCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAzcmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAxcmVtO1xyXG5yb3ctZ2FwOiAycmVtO1xyXG5tYXJnaW4tYm90dG9tOiA0cmVtO1xyXG5cclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXJUZWNoID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxucGFkZGluZzogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMXJlbTtcclxucm93LWdhcDogMnJlbTtcclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59YCJdLCJzb3VyY2VSb290IjoiIn0=