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

/***/ "./resources/assets/core/js/custom/documentation/general/jkanban/color.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/jkanban/color.js ***!
  \********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTJKanbanDemoColor = function () {\n  // Private functions\n  var exampleColor = function exampleColor() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_color',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'class': 'primary',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>',\n          'class': 'light-primary'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>',\n          'class': 'light-primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'success',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>',\n          'class': 'light-success'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>',\n          'class': 'light-success'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'danger',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>',\n          'class': 'light-danger'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>',\n          'class': 'light-danger'\n        }]\n      }]\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColor();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoColor.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2NvbG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztFQUNoQztFQUNBLElBQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQWM7SUFDMUIsSUFBSUMsTUFBTSxHQUFHLElBQUlDLE9BQU8sQ0FBQztNQUNyQkMsT0FBTyxFQUFFLHdCQUF3QjtNQUNqQ0MsTUFBTSxFQUFFLEdBQUc7TUFDWEMsVUFBVSxFQUFFLE9BQU87TUFDbkJDLE1BQU0sRUFBRSxDQUFDO1FBQ0QsSUFBSSxFQUFFLFlBQVk7UUFDbEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsTUFBTSxFQUFFLENBQUM7VUFDRCxPQUFPLEVBQUUsa0RBQWtEO1VBQzNELE9BQU8sRUFBRTtRQUNiLENBQUMsRUFDRDtVQUNJLE9BQU8sRUFBRSx1Q0FBdUM7VUFDaEQsT0FBTyxFQUFFO1FBQ2IsQ0FBQztNQUVULENBQUMsRUFBRTtRQUNDLElBQUksRUFBRSxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE1BQU0sRUFBRSxDQUFDO1VBQ0QsT0FBTyxFQUFFLDRDQUE0QztVQUNyRCxPQUFPLEVBQUU7UUFDYixDQUFDLEVBQ0Q7VUFDSSxPQUFPLEVBQUUsbUNBQW1DO1VBQzVDLE9BQU8sRUFBRTtRQUNiLENBQUM7TUFFVCxDQUFDLEVBQUU7UUFDQyxJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFLENBQUM7VUFDRCxPQUFPLEVBQUUsd0NBQXdDO1VBQ2pELE9BQU8sRUFBRTtRQUNiLENBQUMsRUFDRDtVQUNJLE9BQU8sRUFBRSxrQ0FBa0M7VUFDM0MsT0FBTyxFQUFFO1FBQ2IsQ0FBQztNQUVULENBQUM7SUFFVCxDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVc7TUFDYlAsWUFBWSxFQUFFO0lBQ2xCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBUSxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakNWLGtCQUFrQixDQUFDUSxJQUFJLEVBQUU7QUFDN0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9jb2xvci5qcz8yYTI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RKS2FuYmFuRGVtb0NvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUNvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrYW5iYW4gPSBuZXcgakthbmJhbih7XG4gICAgICAgICAgICBlbGVtZW50OiAnI2t0X2RvY3NfamthbmJhbl9jb2xvcicsXG4gICAgICAgICAgICBndXR0ZXI6ICcwJyxcbiAgICAgICAgICAgIHdpZHRoQm9hcmQ6ICcyNTBweCcsXG4gICAgICAgICAgICBib2FyZHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfaW5wcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0luIFByb2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+WW91IGNhbiBkcmFnIG1lIHRvbzwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkJ1eSBNaWxrPC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX3dvcmtpbmcnLFxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnV29ya2luZycsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EbyBTb21ldGhpbmchPC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UnVuPzwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19kb25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5BbGwgcmlnaHQ8L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPk9rITwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1kYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhhbXBsZUNvbG9yKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEpLYW5iYW5EZW1vQ29sb3IuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RKS2FuYmFuRGVtb0NvbG9yIiwiZXhhbXBsZUNvbG9yIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJ3aWR0aEJvYXJkIiwiYm9hcmRzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/jkanban/color.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/jkanban/color.js"]();
/******/ 	
/******/ })()
;