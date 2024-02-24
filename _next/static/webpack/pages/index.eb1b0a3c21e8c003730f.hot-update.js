self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "technologies": function() { return /* binding */ technologies; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Thanh Vy\\Desktop\\4 react web apps\\portfolio_website-STARTER\\src\\constants\\constants.js";
var projects = [{
  title: 'Bookstore',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  image: '/images/1.png',
  tags: ['React', 'Node', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'Finla',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: '/images/2.jpg',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'Geritch Restaurant',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/3.png',
  tags: ['React', 'JavaScript'],
  source: 'https://tranthanhvi.github.io/restaurant-website/',
  visit: 'https://tranthanhvi.github.io/restaurant-website/',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];
var technologies = [{
  name: 'HTML',
  logo: '/images/java.png',
  id: 0
}, {
  name: 'CSS',
  logo: '/images/1.png',
  id: 1
}, {
  name: 'JavaScript',
  logo: 'http://www.w3.org/2000/svg',
  id: 2
}, {
  name: 'React',
  logo: '/images/1.png',
  id: 3
}, {
  name: 'Node',
  logo: '/images/1.png',
  id: 4
}, {
  name: 'Java',
  logo: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 11
  }, undefined),
  id: 5
}, {
  name: 'Python',
  logo: '/images/1.png',
  id: 6
}, {
  name: 'Firebase',
  logo: '/images/1.png',
  id: 7
}, {
  name: 'PowerBI',
  logo: '/images/1.png',
  id: 8
} // {
//   name: 'Github',
//   logo: '/images/1.png',
//   id: 9,
// },
];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwidGVjaG5vbG9naWVzIiwibmFtZSIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFBRSxtUUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixVQUFsQixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLE9BRFQ7QUFFRUMsYUFBVyxFQUFDLHVVQUZkO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixDQUpWO0FBS0VDLFFBQU0sRUFBRSxtREFMVjtBQU1FQyxPQUFLLEVBQUUsbURBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQUUsZ0lBRmY7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQjtBQVFBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUNFQyxNQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFJLEVBQUUsa0JBRlI7QUFHRU4sSUFBRSxFQUFFO0FBSE4sQ0FEMEIsRUFNMUI7QUFDRUssTUFBSSxFQUFFLEtBRFI7QUFFRUMsTUFBSSxFQUFFLGVBRlI7QUFHRU4sSUFBRSxFQUFFO0FBSE4sQ0FOMEIsRUFXMUI7QUFDRUssTUFBSSxFQUFFLFlBRFI7QUFFRUMsTUFBSSxFQUFFLDRCQUZSO0FBR0VOLElBQUUsRUFBRTtBQUhOLENBWDBCLEVBZ0IxQjtBQUNFSyxNQUFJLEVBQUUsT0FEUjtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFTixJQUFFLEVBQUU7QUFITixDQWhCMEIsRUFxQjFCO0FBQ0VLLE1BQUksRUFBRSxNQURSO0FBRUVDLE1BQUksRUFBRSxlQUZSO0FBR0VOLElBQUUsRUFBRTtBQUhOLENBckIwQixFQTBCMUI7QUFDRUssTUFBSSxFQUFFLE1BRFI7QUFFRUMsTUFBSSxlQUFFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFNBQUssRUFBQyxJQUE5QztBQUFtRCxVQUFNLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSO0FBSUVOLElBQUUsRUFBRTtBQUpOLENBMUIwQixFQWdDMUI7QUFDRUssTUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBSSxFQUFFLGVBRlI7QUFHRU4sSUFBRSxFQUFFO0FBSE4sQ0FoQzBCLEVBcUMxQjtBQUNFSyxNQUFJLEVBQUUsVUFEUjtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFTixJQUFFLEVBQUU7QUFITixDQXJDMEIsRUEwQzFCO0FBQ0VLLE1BQUksRUFBRSxTQURSO0FBRUVDLE1BQUksRUFBRSxlQUZSO0FBR0VOLElBQUUsRUFBRTtBQUhOLENBMUMwQixDQStDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWIxYjBhM2MyMWU4YzAwMzczMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQm9va3N0b3JlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVc2luZyBSZWFjdCwgTm9kZS5qcywgRXhwcmVzcyAmIE1vbmdvREIgeW91J2xsIGxlYXJuIGhvdyB0byBidWlsZCBhIEZ1bGwgU3RhY2sgTUVSTiBBcHBsaWNhdGlvbiAtIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGUgQXBwIGlzIGNhbGxlZCBNZW1vcmllcyBhbmQgaXQgaXMgYSBzaW1wbGUgc29jaWFsIG1lZGlhIGFwcCB0aGF0IGFsbG93cyB1c2VycyB0byBwb3N0IGludGVyZXN0aW5nIGV2ZW50cyB0aGF0IGhhcHBlbmVkIGluIHRoZWlyIGxpdmVzLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnTm9kZScsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGaW5sYScsXG4gICAgZGVzY3JpcHRpb246XCJXaGlsZSBidWlsZGluZyBpdCB5b3UncmUgZ29pbmcgdG8gbGVhcm4gbWFueSBhZHZhbmNlZCBSZWFjdCAmIEphdmFTY3JpcHQgdG9waWNzLCBhcyB3ZWxsIGFzIGhvdyB0byB1c2UgU3RyaXBlIGZvciBjYXJkIHRyYW5zYWN0aW9ucy4gT24gdG9wIG9mIHRoYXQsIGF0IHRoZSBlbmQgb2YgdGhlIHZpZGVvLCB5b3Ugd2lsbCBoYXZlIHRoaXMgdW5pcXVlIGFuZCBjb21wbGV4IHdlYnNob3AgYXBwIHRoYXQgeW91IHdpbGwgYmUgYWJsZSB0byBhZGQgdG8geW91ciBwb3J0Zm9saW8uIEFuZCB0cnVzdCBtZSwgZS1jb21tZXJjZSBhcHBsaWNhdGlvbnMgYXJlIGltcHJlc3NpdmUuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzIuanBnJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnR2VyaXRjaCBSZXN0YXVyYW50JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5wbmcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly90cmFudGhhbmh2aS5naXRodWIuaW8vcmVzdGF1cmFudC13ZWJzaXRlLycsXG4gICAgdmlzaXQ6ICdodHRwczovL3RyYW50aGFuaHZpLmdpdGh1Yi5pby9yZXN0YXVyYW50LXdlYnNpdGUvJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnSFRNTCcsXG4gICAgbG9nbzogJy9pbWFnZXMvamF2YS5wbmcnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NTUycsXG4gICAgbG9nbzogJy9pbWFnZXMvMS5wbmcnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0phdmFTY3JpcHQnLFxuICAgIGxvZ286ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUmVhY3QnLFxuICAgIGxvZ286ICcvaW1hZ2VzLzEucG5nJyxcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOb2RlJyxcbiAgICBsb2dvOiAnL2ltYWdlcy8xLnBuZycsXG4gICAgaWQ6IDQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSmF2YScsXG4gICAgbG9nbzogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCI+XG4gICAgPC9zdmc+LFxuICAgIGlkOiA1LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B5dGhvbicsXG4gICAgbG9nbzogJy9pbWFnZXMvMS5wbmcnLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZpcmViYXNlJyxcbiAgICBsb2dvOiAnL2ltYWdlcy8xLnBuZycsXG4gICAgaWQ6IDcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUG93ZXJCSScsXG4gICAgbG9nbzogJy9pbWFnZXMvMS5wbmcnLFxuICAgIGlkOiA4LFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0dpdGh1YicsXG4gIC8vICAgbG9nbzogJy9pbWFnZXMvMS5wbmcnLFxuICAvLyAgIGlkOiA5LFxuICAvLyB9LFxuXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==