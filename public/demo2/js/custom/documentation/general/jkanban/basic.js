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

/***/ "./resources/assets/core/js/custom/documentation/general/jkanban/basic.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/jkanban/basic.js ***!
  \********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTJKanbanDemoBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_basic',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>'\n        }]\n      }]\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztFQUNoQztFQUNBLElBQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQWM7SUFDMUIsSUFBSUMsTUFBTSxHQUFHLElBQUlDLE9BQU8sQ0FBQztNQUNyQkMsT0FBTyxFQUFFLHdCQUF3QjtNQUNqQ0MsTUFBTSxFQUFFLEdBQUc7TUFDWEMsVUFBVSxFQUFFLE9BQU87TUFDbkJDLE1BQU0sRUFBRSxDQUFDO1FBQ0QsSUFBSSxFQUFFLFlBQVk7UUFDbEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsTUFBTSxFQUFFLENBQUM7VUFDRCxPQUFPLEVBQUU7UUFDYixDQUFDLEVBQ0Q7VUFDSSxPQUFPLEVBQUU7UUFDYixDQUFDO01BRVQsQ0FBQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsTUFBTSxFQUFFLENBQUM7VUFDRCxPQUFPLEVBQUU7UUFDYixDQUFDLEVBQ0Q7VUFDSSxPQUFPLEVBQUU7UUFDYixDQUFDO01BRVQsQ0FBQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsTUFBTTtRQUNmLE1BQU0sRUFBRSxDQUFDO1VBQ0QsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxFQUNEO1VBQ0ksT0FBTyxFQUFFO1FBQ2IsQ0FBQztNQUVULENBQUM7SUFFVCxDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVc7TUFDYlAsWUFBWSxFQUFFO0lBQ2xCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBUSxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakNWLGtCQUFrQixDQUFDUSxJQUFJLEVBQUU7QUFDN0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9iYXNpYy5qcz82NTlhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RKS2FuYmFuRGVtb0Jhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrYW5iYW4gPSBuZXcgakthbmJhbih7XG4gICAgICAgICAgICBlbGVtZW50OiAnI2t0X2RvY3NfamthbmJhbl9iYXNpYycsXG4gICAgICAgICAgICBndXR0ZXI6ICcwJyxcbiAgICAgICAgICAgIHdpZHRoQm9hcmQ6ICcyNTBweCcsXG4gICAgICAgICAgICBib2FyZHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfaW5wcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0luIFByb2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPllvdSBjYW4gZHJhZyBtZSB0b288L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+QnV5IE1pbGs8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX3dvcmtpbmcnLFxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnV29ya2luZycsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RG8gU29tZXRoaW5nITwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5SdW4/PC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19kb25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkFsbCByaWdodDwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5PayE8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhhbXBsZUJhc2ljKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEpLYW5iYW5EZW1vQmFzaWMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RKS2FuYmFuRGVtb0Jhc2ljIiwiZXhhbXBsZUJhc2ljIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJ3aWR0aEJvYXJkIiwiYm9hcmRzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/jkanban/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/jkanban/basic.js"]();
/******/ 	
/******/ })()
;