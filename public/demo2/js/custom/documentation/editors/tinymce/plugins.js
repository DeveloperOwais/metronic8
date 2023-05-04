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

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js ***!
  \**********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsTinyMCEPlugins = function () {\n  // Private functions\n  var examplePlugins = function examplePlugins() {\n    tinymce.init({\n      selector: '#kt_docs_tinymce_plugins',\n      toolbar: 'advlist | autolink | link image | lists charmap | print preview',\n      plugins: 'advlist autolink link image lists charmap print preview'\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      examplePlugins();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEPlugins.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL3BsdWdpbnMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFXO0VBQ25DO0VBQ0EsSUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQWM7SUFDNUJDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO01BQ1RDLFFBQVEsRUFBRSwwQkFBMEI7TUFDcENDLE9BQU8sRUFBRSxpRUFBaUU7TUFDMUVDLE9BQU8sRUFBRztJQUNkLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUgsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBVztNQUNiRixjQUFjLEVBQUU7SUFDcEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0FNLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBVztFQUNqQ1IscUJBQXFCLENBQUNHLElBQUksRUFBRTtBQUNoQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL3BsdWdpbnMuanM/OWRjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNUaW55TUNFUGx1Z2lucyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVQbHVnaW5zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNrdF9kb2NzX3RpbnltY2VfcGx1Z2lucycsXG4gICAgICAgICAgICB0b29sYmFyOiAnYWR2bGlzdCB8IGF1dG9saW5rIHwgbGluayBpbWFnZSB8IGxpc3RzIGNoYXJtYXAgfCBwcmludCBwcmV2aWV3JyxcbiAgICAgICAgICAgIHBsdWdpbnMgOiAnYWR2bGlzdCBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIGNoYXJtYXAgcHJpbnQgcHJldmlldydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVQbHVnaW5zKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEZvcm1zVGlueU1DRVBsdWdpbnMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc1RpbnlNQ0VQbHVnaW5zIiwiZXhhbXBsZVBsdWdpbnMiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwidG9vbGJhciIsInBsdWdpbnMiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js"]();
/******/ 	
/******/ })()
;