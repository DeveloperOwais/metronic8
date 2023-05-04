/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js ***!
  \********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsTinyMCEBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var options = {\n      selector: '#kt_docs_tinymce_basic'\n    };\n    if (KTApp.isDarkMode()) {\n      options['skin'] = 'oxide-dark';\n      options['content_css'] = 'dark';\n    }\n    tinymce.init(options);\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsbUJBQW1CLEdBQUcsWUFBVztFQUNqQztFQUNBLElBQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQWM7SUFDMUIsSUFBSUMsT0FBTyxHQUFHO01BQUNDLFFBQVEsRUFBRTtJQUF3QixDQUFDO0lBRWxELElBQUlDLEtBQUssQ0FBQ0MsVUFBVSxFQUFFLEVBQUU7TUFDcEJILE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZO01BQzlCQSxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTTtJQUNuQztJQUVBSSxPQUFPLENBQUNDLElBQUksQ0FBQ0wsT0FBTyxDQUFDO0VBQ3pCLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUssSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBVztNQUNiTixZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0FPLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBVztFQUNqQ1QsbUJBQW1CLENBQUNPLElBQUksRUFBRTtBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2Jhc2ljLmpzPzBiYjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zVGlueU1DRUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge3NlbGVjdG9yOiAnI2t0X2RvY3NfdGlueW1jZV9iYXNpYyd9O1xuICAgICAgICBcbiAgICAgICAgaWYgKEtUQXBwLmlzRGFya01vZGUoKSkge1xuICAgICAgICAgICAgb3B0aW9uc1snc2tpbiddID0gJ294aWRlLWRhcmsnO1xuICAgICAgICAgICAgb3B0aW9uc1snY29udGVudF9jc3MnXSA9ICdkYXJrJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGlueW1jZS5pbml0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNUaW55TUNFQmFzaWMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc1RpbnlNQ0VCYXNpYyIsImV4YW1wbGVCYXNpYyIsIm9wdGlvbnMiLCJzZWxlY3RvciIsIktUQXBwIiwiaXNEYXJrTW9kZSIsInRpbnltY2UiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js"]();
/******/ 	
/******/ })()
;