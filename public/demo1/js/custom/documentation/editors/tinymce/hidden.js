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

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js ***!
  \*********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsTinyMCEHidden = function () {\n  // Private functions\n  var exampleHidden = function exampleHidden() {\n    tinymce.init({\n      selector: '#kt_docs_tinymce_hidden',\n      menubar: false,\n      toolbar: ['styleselect fontselect fontsizeselect', 'undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify', 'bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code'],\n      plugins: 'advlist autolink link image lists charmap print preview code'\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleHidden();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEHidden.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2hpZGRlbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVc7RUFDbEM7RUFDQSxJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBYztJQUMzQkMsT0FBTyxDQUFDQyxJQUFJLENBQUM7TUFDVEMsUUFBUSxFQUFFLHlCQUF5QjtNQUNuQ0MsT0FBTyxFQUFFLEtBQUs7TUFDZEMsT0FBTyxFQUFFLENBQUMsdUNBQXVDLEVBQzdDLHVHQUF1RyxFQUN2RyxrSUFBa0ksQ0FBQztNQUN2SUMsT0FBTyxFQUFHO0lBQ2QsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBSixJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO01BQ2JGLGFBQWEsRUFBRTtJQUNuQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQU8sTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDVCxvQkFBb0IsQ0FBQ0csSUFBSSxFQUFFO0FBQy9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL3RpbnltY2UvaGlkZGVuLmpzPzQ4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zVGlueU1DRUhpZGRlbiA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVIaWRkZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2t0X2RvY3NfdGlueW1jZV9oaWRkZW4nLFxuICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICB0b29sYmFyOiBbJ3N0eWxlc2VsZWN0IGZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QnLFxuICAgICAgICAgICAgICAgICd1bmRvIHJlZG8gfCBjdXQgY29weSBwYXN0ZSB8IGJvbGQgaXRhbGljIHwgbGluayBpbWFnZSB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeScsXG4gICAgICAgICAgICAgICAgJ2J1bGxpc3QgbnVtbGlzdCB8IG91dGRlbnQgaW5kZW50IHwgYmxvY2txdW90ZSBzdWJzY3JpcHQgc3VwZXJzY3JpcHQgfCBhZHZsaXN0IHwgYXV0b2xpbmsgfCBsaXN0cyBjaGFybWFwIHwgcHJpbnQgcHJldmlldyB8ICBjb2RlJ10sXG4gICAgICAgICAgICBwbHVnaW5zIDogJ2Fkdmxpc3QgYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByaW50IHByZXZpZXcgY29kZSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVIaWRkZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNUaW55TUNFSGlkZGVuLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURm9ybXNUaW55TUNFSGlkZGVuIiwiZXhhbXBsZUhpZGRlbiIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJtZW51YmFyIiwidG9vbGJhciIsInBsdWdpbnMiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js"]();
/******/ 	
/******/ })()
;