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

/***/ "./resources/assets/core/js/custom/documentation/editors/quill/basic.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/quill/basic.js ***!
  \******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsQuillBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var quill = new Quill('#kt_docs_quill_basic', {\n      modules: {\n        toolbar: [[{\n          header: [1, 2, false]\n        }], ['bold', 'italic', 'underline'], ['image', 'code-block']]\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow' // or 'bubble'\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVc7RUFDL0I7RUFDQSxJQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFjO0lBQzFCLElBQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUMsc0JBQXNCLEVBQUU7TUFDMUNDLE9BQU8sRUFBRTtRQUNMQyxPQUFPLEVBQUUsQ0FDTCxDQUFDO1VBQ0dDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSztRQUN4QixDQUFDLENBQUMsRUFDRixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQy9CLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztNQUUvQixDQUFDO01BQ0RDLFdBQVcsRUFBRSx3QkFBd0I7TUFDckNDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQzs7RUFFRCxPQUFPO0lBQ0g7SUFDQUMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBVztNQUNiUixZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0FTLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBVztFQUNqQ1gsaUJBQWlCLENBQUNTLElBQUksRUFBRTtBQUM1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9iYXNpYy5qcz9mMmFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc1F1aWxsQmFzaWMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQmFzaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHF1aWxsID0gbmV3IFF1aWxsKCcja3RfZG9jc19xdWlsbF9iYXNpYycsIHtcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFsxLCAyLCBmYWxzZV1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgICAgIFsnaW1hZ2UnLCAnY29kZS1ibG9jayddXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIHRleHQgaGVyZS4uLicsXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnIC8vIG9yICdidWJibGUnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNRdWlsbEJhc2ljLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURm9ybXNRdWlsbEJhc2ljIiwiZXhhbXBsZUJhc2ljIiwicXVpbGwiLCJRdWlsbCIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/quill/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/quill/basic.js"]();
/******/ 	
/******/ })()
;