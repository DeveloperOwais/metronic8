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

/***/ "./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js":
/*!*************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js ***!
  \*************************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTVisTimelineStyle = function () {\n  // Private functions\n  var exampleStyle = function exampleStyle() {\n    var container = document.getElementById(\"kt_docs_vistimeline_style\");\n\n    // Generate HTML content\n    var getContent = function getContent(title, img) {\n      var _name$classList, _symbol$classList;\n      var item = document.createElement('div');\n      var name = document.createElement('div');\n      var nameClasses = ['fw-bolder', 'mb-2'];\n      (_name$classList = name.classList).add.apply(_name$classList, nameClasses);\n      name.innerHTML = title;\n      var image = document.createElement('img');\n      image.setAttribute('src', img);\n      var symbol = document.createElement('div');\n      var symbolClasses = ['symbol', 'symbol-circle', 'symbol-30'];\n      (_symbol$classList = symbol.classList).add.apply(_symbol$classList, symbolClasses);\n      symbol.appendChild(image);\n      item.appendChild(name);\n      item.appendChild(symbol);\n      return item;\n    };\n\n    // note that months are zero-based in the JavaScript Date object\n    var items = new vis.DataSet([{\n      start: new Date(2010, 7, 23),\n      content: getContent('Conversation', hostUrl + '/media/avatars/150-1.jpg')\n    }, {\n      start: new Date(2010, 7, 23, 23, 0, 0),\n      content: getContent('Mail from boss', hostUrl + '/media/avatars/150-2.jpg')\n    }, {\n      start: new Date(2010, 7, 24, 16, 0, 0),\n      content: \"Report\"\n    }, {\n      start: new Date(2010, 7, 26),\n      end: new Date(2010, 8, 2),\n      content: \"Traject A\"\n    }, {\n      start: new Date(2010, 7, 28),\n      content: getContent('Memo', hostUrl + '/media/avatars/150-3.jpg')\n    }, {\n      start: new Date(2010, 7, 29),\n      content: getContent('Phone call', hostUrl + '/media/avatars/150-4.jpg')\n    }, {\n      start: new Date(2010, 7, 31),\n      end: new Date(2010, 8, 3),\n      content: \"Traject B\"\n    }, {\n      start: new Date(2010, 8, 4, 12, 0, 0),\n      content: getContent('Report', hostUrl + '/media/avatars/150-5.jpg')\n    }]);\n    var options = {\n      editable: true,\n      margin: {\n        item: 20,\n        axis: 40\n      }\n    };\n    var timeline = new vis.Timeline(container, items, options);\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleStyle();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineStyle.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBR2I7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFZO0VBQ2pDO0VBQ0EsSUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBZTtJQUMzQixJQUFJQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDJCQUEyQixDQUFDOztJQUVwRTtJQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxLQUFLLEVBQUVDLEdBQUcsRUFBSztNQUFBLElBQUFDLGVBQUEsRUFBQUMsaUJBQUE7TUFDL0IsSUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUMsSUFBTUMsSUFBSSxHQUFHVCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUMsSUFBTUUsV0FBVyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztNQUN6QyxDQUFBTCxlQUFBLEdBQUFJLElBQUksQ0FBQ0UsU0FBUyxFQUFDQyxHQUFHLENBQUFDLEtBQUEsQ0FBQVIsZUFBQSxFQUFJSyxXQUFXLENBQUM7TUFDbENELElBQUksQ0FBQ0ssU0FBUyxHQUFHWCxLQUFLO01BRXRCLElBQU1ZLEtBQUssR0FBR2YsUUFBUSxDQUFDUSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzNDTyxLQUFLLENBQUNDLFlBQVksQ0FBQyxLQUFLLEVBQUVaLEdBQUcsQ0FBQztNQUU5QixJQUFNYSxNQUFNLEdBQUdqQixRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDNUMsSUFBTVUsYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUM7TUFDOUQsQ0FBQVosaUJBQUEsR0FBQVcsTUFBTSxDQUFDTixTQUFTLEVBQUNDLEdBQUcsQ0FB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QUM3QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvc3R5bGUuanM/NDMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RWaXNUaW1lbGluZVN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfZG9jc192aXN0aW1lbGluZV9zdHlsZVwiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBIVE1MIGNvbnRlbnRcbiAgICAgICAgY29uc3QgZ2V0Q29udGVudCA9ICh0aXRsZSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lQ2xhc3NlcyA9IFsnZnctYm9sZGVyJywgJ21iLTInXTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCguLi5uYW1lQ2xhc3Nlcyk7XG4gICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IHRpdGxlO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xuXG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbENsYXNzZXMgPSBbJ3N5bWJvbCcsICdzeW1ib2wtY2lyY2xlJywgJ3N5bWJvbC0zMCddO1xuICAgICAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoLi4uc3ltYm9sQ2xhc3Nlcyk7XG4gICAgICAgICAgICBzeW1ib2wuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdGUgdGhhdCBtb250aHMgYXJlIHplcm8tYmFzZWQgaW4gdGhlIEphdmFTY3JpcHQgRGF0ZSBvYmplY3RcbiAgICAgICAgdmFyIGl0ZW1zID0gbmV3IHZpcy5EYXRhU2V0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNywgMjMpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoJ0NvbnZlcnNhdGlvbicsIGhvc3RVcmwgKyAnL21lZGlhL2F2YXRhcnMvMTUwLTEuanBnJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDIzLCAyMywgMCwgMCksXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnTWFpbCBmcm9tIGJvc3MnLCBob3N0VXJsICsgJy9tZWRpYS9hdmF0YXJzLzE1MC0yLmpwZycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBzdGFydDogbmV3IERhdGUoMjAxMCwgNywgMjQsIDE2LCAwLCAwKSwgY29udGVudDogXCJSZXBvcnRcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyNiksXG4gICAgICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDEwLCA4LCAyKSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlRyYWplY3QgQVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNywgMjgpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoJ01lbW8nLCBob3N0VXJsICsgJy9tZWRpYS9hdmF0YXJzLzE1MC0zLmpwZycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyOSksXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnUGhvbmUgY2FsbCcsIGhvc3RVcmwgKyAnL21lZGlhL2F2YXRhcnMvMTUwLTQuanBnJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDMxKSxcbiAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMTAsIDgsIDMpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiVHJhamVjdCBCXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA4LCA0LCAxMiwgMCwgMCksXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnUmVwb3J0JywgaG9zdFVybCArICcvbWVkaWEvYXZhdGFycy8xNTAtNS5qcGcnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgICAgIGl0ZW06IDIwLFxuICAgICAgICAgICAgICAgIGF4aXM6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgdmlzLlRpbWVsaW5lKGNvbnRhaW5lciwgaXRlbXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZVN0eWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RWaXNUaW1lbGluZVN0eWxlLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUVmlzVGltZWxpbmVTdHlsZSIsImV4YW1wbGVTdHlsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZW50IiwidGl0bGUiLCJpbWciLCJfbmFtZSRjbGFzc0xpc3QiLCJfc3ltYm9sJGNsYXNzTGlzdCIsIml0ZW0iLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsIm5hbWVDbGFzc2VzIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHkiLCJpbm5lckhUTUwiLCJpbWFnZSIsInNldEF0dHJpYnV0ZSIsInN5bWJvbCIsInN5bWJvbENsYXNzZXMiLCJhcHBlbmRDaGlsZCIsIml0ZW1zIiwidmlzIiwiRGF0YVNldCIsInN0YXJ0IiwiRGF0ZSIsImNvbnRlbnQiLCJob3N0VXJsIiwiZW5kIiwib3B0aW9ucyIsImVkaXRhYmxlIiwibWFyZ2luIiwiYXhpcyIsInRpbWVsaW5lIiwiVGltZWxpbmUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js"]();
/******/ 	
/******/ })()
;