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
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:", ";;justify-content:flex-start;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;justify-content:flex-start;order:2;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
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
  return props.main ? '28px' : '32px';
}, function (props) {
  return props.main ? '32px' : '40px';
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
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__Button",
  componentId: "sc-6qzy6y-6"
})(["background:transparent;border-radius:7px;border:2.5px solid #1d1e4e;color:#1d1e4e;margin:0 0 1rem 0;padding:0.25em 1em;cursor:pointer;&:hover{background:rgb(120,225,133,0.75);}"]); // export const ButtonBack = styled.div`
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
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:1rem;row-gap:2rem;margin-bottom:4rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;margin-bottom:4rem;}"], function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiZGl2aWRlciIsIlNlY3Rpb25TdWJUZXh0IiwiU2Vjb25kYXJ5QnRuIiwiQnV0dG9uIiwiTGlua0NvbnRhaW5lciIsImxhcmdlIiwiTGlua0ljb25JbWciLCJuYXYiLCJHcmlkQ29udGFpbmVyIiwiR3JpZENvbnRhaW5lclRlY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsMFdBQ1AsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFBakM7QUFBQSxDQURPLEVBRUEsVUFBQ0QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsR0FBTixHQUFZLEtBQVosR0FBb0IsUUFBL0I7QUFBQSxDQUZBLEVBR1AsVUFBQ0YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0csU0FBTixHQUFrQixHQUFsQixHQUF3QixhQUFuQztBQUFBLENBSE8sRUFXVCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FYUyxFQWFFLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQS9CO0FBQUEsQ0FiRixFQWlCVCxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0Fq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ZUEsS0FBSyxHQUFHLEdBQUgsR0FBUyxLQUE3QjtBQUFBLENBbEJPLENBQW5CO0FBdUJBLElBQU1DLFdBQVcsR0FBR25CLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUVaO0FBQUEsTUFBR2tCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBaEM7QUFBQSxDQUZZLEVBSWIsVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUphLEVBS1Y7QUFBQSxNQUFHYSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTVCO0FBQUEsQ0FMVSxFQVFiLFVBQUNuQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FSYSxFQVNWO0FBQUEsTUFBR1UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUFoQztBQUFBLENBVFUsQ0FBakI7QUFZQSxJQUFNRyxhQUFhLEdBQUdyQix5RUFBSDtBQUFBO0FBQUE7QUFBQSxpUUFTakIsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBVGlCLENBQW5CO0FBaUJBLElBQU1jLGlCQUFpQixHQUFHdEIseUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BT3JCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQVBxQixDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOTkxY2MwOGYyMGM5NDk4M2M4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwiIH07XHJcbiAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIiB9O1xyXG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIiB9IDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIiB9OztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIiB9IDtcclxuXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG9yZGVyOiAyO1xyXG5cclxuIFxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNjVweCcgOiAnNTZweCd9O1xyXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc3MnB4JyA6ICc1NnB4J307XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAgIzFkMWU0ZTsgXHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgIzAwMDAwMCAxOC43NyUsIHJnYmEoNDIsIDU0LCA1OSwgMC42NikgNjAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1OHB4IDAgMTZweCcgOiAnMCd9O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNDBweCAwIDEycHgnIDogJzAnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcyOHB4JyA6ICczMnB4J307XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMTZweCAwIDhweCcgOiAnMCd9O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI4LCAzMCwgNzgsIDAuNyk7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjksMzAsNzgsMSkgMCUsIHJnYmEoNjEsMTIyLDY4LDEpIDEwMCUpO1xyXG5cclxuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIiB9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSg0MiwgNTQsIDU5LCAxKTtcclxuXHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZjE2MjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA0MTY5O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJvcmRlcjogMi41cHggc29saWQgIzFkMWU0ZTtcclxuICBjb2xvcjogIzFkMWU0ZTtcclxuICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMjAsMjI1LDEzMywgMC43NSk7XHJcbn1cclxuYFxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxyXG4vLyAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzI2MnB4J307XHJcbi8vICAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNjRweCd9O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbi8vICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtKSA/ICcwJyA6ICcwIDAgODBweCd9O1xyXG4vLyAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJ307XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcblxyXG4vLyAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuLy8gICAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzE4NHB4J307XHJcbi8vICAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XHJcbi8vICAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnNjRweCd9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDMycHg7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xyXG4vLyAgIH1cclxuLy8gYFxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuLy8gICBjb2xvcjogIzJBMzYzQjtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMTIwLDIyNSwxMzMsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNDAsMSkgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LDI1NSwyNDAsMSkgMCUsIHJnYmEoMTIwLDIyNSwxMzMsMSkgMTAwJSknfTtcclxuLy8gICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcbi8vICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XHJcbi8vICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICdpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyknIDogJ25vbmUnfTtcclxuXHJcbi8vICAgJjpob3ZlciB7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgIH1cclxuLy8gICAmOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgfVxyXG4vLyAgICY6YWN0aXZlIHtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOmRpc2FibGVke1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDAuNTtcclxuLy8gICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcclxuLy8gICB9XHJcblxyXG4vLyAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICB9XHJcbi8vIGBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcxNnB4JyA6ICc4cHgnfTtcclxuXHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzAnIDogJzhweCd9O1xyXG4gIH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcyNHB4J307XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxucGFkZGluZzogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMXJlbTtcclxucm93LWdhcDogMnJlbTtcclxubWFyZ2luLWJvdHRvbTogNHJlbTtcclxuXHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXJUZWNoID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxucGFkZGluZzogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMXJlbTtcclxucm93LWdhcDogMnJlbTtcclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59YCJdLCJzb3VyY2VSb290IjoiIn0=