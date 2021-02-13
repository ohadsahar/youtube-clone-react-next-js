module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Videos/StyledVideos.js":
/*!*******************************************!*\
  !*** ./components/Videos/StyledVideos.js ***!
  \*******************************************/
/*! exports provided: VideosWrapper, VideoItemWrapper, VideoIframe, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VideosWrapper\", function() { return VideosWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VideoItemWrapper\", function() { return VideoItemWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VideoIframe\", function() { return VideoIframe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst VideosWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"StyledVideos__VideosWrapper\",\n  componentId: \"sc-1iq3rvd-0\"\n})([\"display:flex;flex-wrap:wrap;justify-content:flex-start;width:100%;margin-top:5rem;@media  (max-width:768px){justify-content:center;padding-left:6.5%;}@media (min-width:710px){justify-content:center;padding-left:2.5%;}@media (min-width:930px){padding-left:12%;justify-content:center;}@media (min-width:1440px){padding-left:10%;justify-content:flex-start;}@media (min-width:1900px){padding-left:8%;}@media (min-width:2200px){padding-left:8%;}@media (min-width:2550px){padding-left:6%;}\"]);\nconst VideoItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"StyledVideos__VideoItemWrapper\",\n  componentId: \"sc-1iq3rvd-1\"\n})([\"margin-right:1rem;margin-bottom:1.25rem;\"]);\nconst VideoIframe = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"StyledVideos__VideoIframe\",\n  componentId: \"sc-1iq3rvd-2\"\n})([\"width:100%;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"StyledVideos__Title\",\n  componentId: \"sc-1iq3rvd-3\"\n})([\"margin-left:.5rem;text-align:left;font-weight:bold;margin-top:.1rem;width:300px;\"]);\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"StyledVideos__Description\",\n  componentId: \"sc-1iq3rvd-4\"\n})([\"margin-left:.5rem;text-align:left;margin-top:0rem;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvcy9TdHlsZWRWaWRlb3MuanM/NmUzYyJdLCJuYW1lcyI6WyJWaWRlb3NXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVmlkZW9JdGVtV3JhcHBlciIsIlZpZGVvSWZyYW1lIiwiVGl0bGUiLCJEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsYUFBYSxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJlQUFuQjtBQXdDQSxNQUFNQyxnQkFBZ0IsR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnREFBdEI7QUFLQSxNQUFNRSxXQUFXLEdBQUdILHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUJBQWpCO0FBSUEsTUFBTUcsS0FBSyxHQUFHSix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdGQUFYO0FBUUEsTUFBTUksV0FBVyxHQUFHTCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBEQUFqQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9zL1N0eWxlZFZpZGVvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgVmlkZW9zV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG5cbiAgICBAbWVkaWEgIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjYuNSU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NzEwcHgpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjIuNSU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6OTMwcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMiU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MTQ0MHB4KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDoxOTAwcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDoyMjAwcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDoyNTUwcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9JdGVtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgICAgIG1hcmdpbi1yaWdodDoxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOjEuMjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9JZnJhbWUgPSBzdHlsZWQuZGl2YFxuICAgICAgICB3aWR0aDoxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC4xcmVtO1xuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Videos/StyledVideos.js\n");

/***/ }),

/***/ "./components/Videos/Videos.js":
/*!*************************************!*\
  !*** ./components/Videos/Videos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledVideos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledVideos */ \"./components/Videos/StyledVideos.js\");\n\nvar _jsxFileName = \"/Users/ohadsahar/Documents/Development/OhadProjects/youtube-clone-react-next-js/components/Videos/Videos.js\";\n\n\n\n\nconst Videos = ({\n  videos\n}) => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])(); // const videoState = useSelector(state => state.videos);\n  // const { videos } = videoState;\n  // useEffect(() => {\n  //     const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=eminem&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;\n  //     dispatch(getAllVideos(url));\n  // }, [dispatch])\n  //console.log(videos);\n\n  return (\n    /*#__PURE__*/\n    //         <div className=\"content\" >\n    // {videos.map((video) => (\n    //     <div className=\"video-frame\" key={video.id}>\n    //         <iframe className=\"video\" src={video.src}>\n    //         </iframe>\n    //         <p className=\"title\">{video.title}</p>\n    //         <p className=\"sub-title\">{video.description}</p>\n    //     </div>\n    // ))}\n    // </div >\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledVideos__WEBPACK_IMPORTED_MODULE_3__[\"VideosWrapper\"], {\n      children: videos.map(video => (console.log(video === null || video === void 0 ? void 0 : video.src), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledVideos__WEBPACK_IMPORTED_MODULE_3__[\"VideoItemWrapper\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledVideos__WEBPACK_IMPORTED_MODULE_3__[\"VideoIframe\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n            src: video === null || video === void 0 ? void 0 : video.src\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledVideos__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n          children: video === null || video === void 0 ? void 0 : video.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledVideos__WEBPACK_IMPORTED_MODULE_3__[\"Description\"], {\n          children: video === null || video === void 0 ? void 0 : video.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, undefined)]\n      }, video.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined)))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, undefined)\n  );\n  {\n    /* {videos.length === 0 ? <h2>Loading...</h2> :\n               (\n                   videos.map(video => (\n                       <div>\n                           {video.id.videoId ? <iframe width=\"200px\" height=\"200px\"\n                               src={`https://www.youtube.com/embed/${video.id.videoId}`}>\n                           </iframe> : (null)}\n                       </div>\n                   )\n                   )\n               )\n           } */\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvcy9WaWRlb3MuanM/Yzc3OCJdLCJuYW1lcyI6WyJWaWRlb3MiLCJ2aWRlb3MiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWFwIiwidmlkZW8iLCJjb25zb2xlIiwibG9nIiwic3JjIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUUzQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRjJCLENBRzNCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUFDLDJEQUFEO0FBQUEsZ0JBQ0tGLE1BQU0sQ0FBQ0csR0FBUCxDQUFZQyxLQUFELEtBQ1JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLGFBQVlBLEtBQVosdUJBQVlBLEtBQUssQ0FBRUcsR0FBbkIsZ0JBQ0EscUVBQUMsOERBQUQ7QUFBQSxnQ0FDSSxxRUFBQyx5REFBRDtBQUFBLGlDQUNJO0FBQVEsZUFBRyxFQUFFSCxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRUc7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSSxxRUFBQyxtREFBRDtBQUFBLG9CQUFRSCxLQUFSLGFBQVFBLEtBQVIsdUJBQVFBLEtBQUssQ0FBRUk7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUkscUVBQUMseURBQUQ7QUFBQSxvQkFBY0osS0FBZCxhQUFjQSxLQUFkLHVCQUFjQSxLQUFLLENBQUVLO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTko7QUFBQSxTQUF1QkwsS0FBSyxDQUFDTSxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZRLENBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEo7QUE0QkE7QUFBQztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBaUI7QUFDaEIsQ0FyREQ7O0FBdURlWCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9zL1ZpZGVvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IERlc2NyaXB0aW9uLCBUaXRsZSwgVmlkZW9JZnJhbWUsIFZpZGVvSXRlbVdyYXBwZXIsIFZpZGVvc1dyYXBwZXIgfSBmcm9tICcuL1N0eWxlZFZpZGVvcyc7XG5cblxuY29uc3QgVmlkZW9zID0gKHsgdmlkZW9zIH0pID0+IHtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICAvLyBjb25zdCB2aWRlb1N0YXRlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudmlkZW9zKTtcbiAgICAvLyBjb25zdCB7IHZpZGVvcyB9ID0gdmlkZW9TdGF0ZTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHVybCA9IGBodHRwczovL3lvdXR1YmUuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/cGFydD1zbmlwcGV0JnE9ZW1pbmVtJmtleT0ke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9ZT1VUVUJFX0FQSV9LRVl9YDtcbiAgICAvLyAgICAgZGlzcGF0Y2goZ2V0QWxsVmlkZW9zKHVybCkpO1xuICAgIC8vIH0sIFtkaXNwYXRjaF0pXG5cbiAgICAvL2NvbnNvbGUubG9nKHZpZGVvcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiID5cbiAgICAgICAgLy8ge3ZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZyYW1lXCIga2V5PXt2aWRlby5pZH0+XG4gICAgICAgIC8vICAgICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJ2aWRlb1wiIHNyYz17dmlkZW8uc3JjfT5cbiAgICAgICAgLy8gICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt2aWRlby50aXRsZX08L3A+XG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyApKX1cbiAgICAgICAgLy8gPC9kaXYgPlxuICAgICAgICA8VmlkZW9zV3JhcHBlcj5cbiAgICAgICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbykgPT4gKFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZGVvPy5zcmMpLFxuICAgICAgICAgICAgICAgIDxWaWRlb0l0ZW1XcmFwcGVyIGtleT17dmlkZW8uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9JZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz17dmlkZW8/LnNyY30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWRlb0lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPnt2aWRlbz8udGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPnt2aWRlbz8uZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZGVvSXRlbVdyYXBwZXI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9WaWRlb3NXcmFwcGVyPlxuXG5cblxuICAgIClcbiAgICB7Lyoge3ZpZGVvcy5sZW5ndGggPT09IDAgPyA8aDI+TG9hZGluZy4uLjwvaDI+IDpcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvcy5tYXAodmlkZW8gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlkZW8uaWQudmlkZW9JZCA/IDxpZnJhbWUgd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlby5pZC52aWRlb0lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPiA6IChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9ICovfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3M7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Videos/Videos.js\n");

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: articles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articles\", function() { return articles; });\nconst articles = [{\n  id: '1',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  description: 'GitHub today announced a bunch .',\n  src: 'https://www.youtube.com/embed/tgbNymZ7vqY'\n}, {\n  id: '2',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  description: 'GitHub today announced a bunch .',\n  src: 'https://www.youtube.com/embed/tgbNymZ7vqY'\n}, {\n  id: '3',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  description: 'GitHub today announced a bunch .',\n  src: 'https://www.youtube.com/embed/tgbNymZ7vqY'\n}, {\n  id: '4',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  description: 'GitHub today announced a bunch .',\n  src: 'https://www.youtube.com/embed/tgbNymZ7vqY'\n}, {\n  id: '5',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  description: 'GitHub today announced a bunch .',\n  src: 'https://www.youtube.com/embed/tgbNymZ7vqY'\n}, {\n  id: '6',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  description: 'GitHub today announced a bunch .',\n  src: 'https://www.youtube.com/embed/tgbNymZ7vqY'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzPzg4NWEiXSwibmFtZXMiOlsiYXJ0aWNsZXMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzcmMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLHlEQUZUO0FBR0VDLGFBQVcsRUFDVCxrQ0FKSjtBQUtFQyxLQUFHLEVBQ0Q7QUFOSixDQURzQixFQVN0QjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUseURBRlQ7QUFHRUMsYUFBVyxFQUNULGtDQUpKO0FBS0VDLEtBQUcsRUFDRDtBQU5KLENBVHNCLEVBaUJ0QjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUseURBRlQ7QUFHRUMsYUFBVyxFQUNULGtDQUpKO0FBS0VDLEtBQUcsRUFDRDtBQU5KLENBakJzQixFQXlCdEI7QUFDRUgsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLHlEQUZUO0FBR0VDLGFBQVcsRUFDVCxrQ0FKSjtBQUtFQyxLQUFHLEVBQ0Q7QUFOSixDQXpCc0IsRUFpQ3RCO0FBQ0VILElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSx5REFGVDtBQUdFQyxhQUFXLEVBQ1Qsa0NBSko7QUFLRUMsS0FBRyxFQUNEO0FBTkosQ0FqQ3NCLEVBeUN0QjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUseURBRlQ7QUFHRUMsYUFBVyxFQUNULGtDQUpKO0FBS0VDLEtBQUcsRUFDRDtBQU5KLENBekNzQixDQUFqQjtBQW1EUUosdUVBQWYiLCJmaWxlIjoiLi9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFydGljbGVzID0gW1xuICB7XG4gICAgaWQ6ICcxJyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCAuJyxcbiAgICBzcmM6XG4gICAgICAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVknLFxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCAuJyxcbiAgICBzcmM6XG4gICAgICAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVknLFxuICB9LFxuICB7XG4gICAgaWQ6ICczJyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCAuJyxcbiAgICBzcmM6XG4gICAgICAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVknLFxuICB9LFxuICB7XG4gICAgaWQ6ICc0JyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCAuJyxcbiAgICBzcmM6XG4gICAgICAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVknLFxuICB9LFxuICB7XG4gICAgaWQ6ICc1JyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCAuJyxcbiAgICBzcmM6XG4gICAgICAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVknLFxuICB9LFxuICB7XG4gICAgaWQ6ICc2JyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCAuJyxcbiAgICBzcmM6XG4gICAgICAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVknLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Videos_Videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Videos/Videos */ \"./components/Videos/Videos.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./data.js\");\n\nvar _jsxFileName = \"/Users/ohadsahar/Documents/Development/OhadProjects/youtube-clone-react-next-js/pages/index.js\";\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Videos_Videos__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      videos: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticProps = async () => {\n  return {\n    props: {\n      videos: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ2aWRlb3MiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVEsWUFBTSxFQUFFQyw2Q0FBTUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRU0sTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDeEMsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTEYsMkRBQU1BO0FBREQ7QUFERixHQUFQO0FBS0QsQ0FOTSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvcyBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvcy9WaWRlb3MnO1xuaW1wb3J0IHZpZGVvcyBmcm9tICcuLi9kYXRhJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPFZpZGVvcyB2aWRlb3M9e3ZpZGVvc30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpZGVvc1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });