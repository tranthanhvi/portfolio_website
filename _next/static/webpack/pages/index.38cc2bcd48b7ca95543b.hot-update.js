self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/DownloadBtn.js":
/*!****************************************************!*\
  !*** ./src/styles/GlobalComponents/DownloadBtn.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/styles/GlobalComponents/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Thanh Vy\\Desktop\\Deployed Webapp\\Portfolio\\portfolio_website\\src\\styles\\GlobalComponents\\DownloadBtn.js",
    _this = undefined;



var PNG_FILE_URL = 'https://tranthanhvi.github.io/portfolio_website/files/thanh-tran-resume.pdf';

var DownloadBtn = function DownloadBtn() {
  var downloadFile = function downloadFile(url) {
    var fileName = url.split('/').pop();
    var aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    window.open(url, '_blank');
    aTag.click();
    aTag.remove();
    console.log('Download button clicked'); // Check if click event is firing

    console.log('PDF_FILE_URL:', url); // Check the URL being used for download

    console.log('File downloaded!');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: function onClick() {
      downloadFile(PNG_FILE_URL);
    },
    children: "View Resume"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = DownloadBtn;
/* harmony default export */ __webpack_exports__["default"] = (DownloadBtn);

var _c;

$RefreshReg$(_c, "DownloadBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0Rvd25sb2FkQnRuLmpzIl0sIm5hbWVzIjpbIlBOR19GSUxFX1VSTCIsIkRvd25sb2FkQnRuIiwiZG93bmxvYWRGaWxlIiwidXJsIiwiZmlsZU5hbWUiLCJzcGxpdCIsInBvcCIsImFUYWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwid2luZG93Iiwib3BlbiIsImNsaWNrIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRyw2RUFBckI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDNUIsUUFBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxHQUFWLEVBQWVDLEdBQWYsRUFBakI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FGLFFBQUksQ0FBQ0csSUFBTCxHQUFVUCxHQUFWO0FBQ0FJLFFBQUksQ0FBQ0ksWUFBTCxDQUFrQixVQUFsQixFQUE4QlAsUUFBOUI7QUFDQUksWUFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJOLElBQTFCO0FBQ0FPLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZWixHQUFaLEVBQWlCLFFBQWpCO0FBQ0FJLFFBQUksQ0FBQ1MsS0FBTDtBQUNBVCxRQUFJLENBQUNVLE1BQUw7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFUNEIsQ0FTWTs7QUFDeENELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJoQixHQUE3QixFQVY0QixDQVVPOztBQUNuQ2UsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxHQVpEOztBQWFBLHNCQUNFLDhEQUFDLHFDQUFEO0FBQVEsV0FBTyxFQUFFLG1CQUFLO0FBQUNqQixrQkFBWSxDQUFDRixZQUFELENBQVo7QUFBMkIsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlELENBbEJEOztLQUFNQyxXO0FBb0JOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4Y2MyYmNkNDhiN2NhOTU1NDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLic7XG5cbmNvbnN0IFBOR19GSUxFX1VSTCA9ICdodHRwczovL3RyYW50aGFuaHZpLmdpdGh1Yi5pby9wb3J0Zm9saW9fd2Vic2l0ZS9maWxlcy90aGFuaC10cmFuLXJlc3VtZS5wZGYnO1xuY29uc3QgRG93bmxvYWRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGRvd25sb2FkRmlsZSA9ICh1cmwpID0+IHtcbiAgICBjb25zdCBmaWxlTmFtZSA9IHVybC5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYVRhZy5ocmVmPXVybDtcbiAgICBhVGFnLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhVGFnKTtcbiAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICBhVGFnLmNsaWNrKCk7XG4gICAgYVRhZy5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnRG93bmxvYWQgYnV0dG9uIGNsaWNrZWQnKTsgLy8gQ2hlY2sgaWYgY2xpY2sgZXZlbnQgaXMgZmlyaW5nXG4gICAgY29uc29sZS5sb2coJ1BERl9GSUxFX1VSTDonLCB1cmwpOyAvLyBDaGVjayB0aGUgVVJMIGJlaW5nIHVzZWQgZm9yIGRvd25sb2FkXG4gICAgY29uc29sZS5sb2coJ0ZpbGUgZG93bmxvYWRlZCEnKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17KCk9PiB7ZG93bmxvYWRGaWxlKFBOR19GSUxFX1VSTCl9fT5WaWV3IFJlc3VtZTwvQnV0dG9uPlxuICApXG4gIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRCdG5cbiJdLCJzb3VyY2VSb290IjoiIn0=