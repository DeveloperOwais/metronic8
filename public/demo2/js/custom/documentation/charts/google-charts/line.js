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

/***/ "./resources/assets/core/js/custom/documentation/charts/google-charts/line.js":
/*!************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/charts/google-charts/line.js ***!
  \************************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTGoogleChartLineDemo = function () {\n  // Private functions\n  var exampleLine = function exampleLine() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      // LINE CHART\n      var data = new google.visualization.DataTable();\n      data.addColumn('number', 'Day');\n      data.addColumn('number', 'Guardians of the Galaxy');\n      data.addColumn('number', 'The Avengers');\n      data.addColumn('number', 'Transformers: Age of Extinction');\n      data.addRows([[1, 37.8, 80.8, 41.8], [2, 30.9, 69.5, 32.4], [3, 25.4, 57, 25.7], [4, 11.7, 18.8, 10.5], [5, 11.9, 17.6, 10.4], [6, 8.8, 13.6, 7.7], [7, 7.6, 12.3, 9.6], [8, 12.3, 29.2, 10.6], [9, 16.9, 42.9, 14.8], [10, 12.8, 30.9, 11.6], [11, 5.3, 7.9, 4.7], [12, 6.6, 8.4, 5.2], [13, 4.8, 6.3, 3.6], [14, 4.2, 6.2, 3.4]]);\n      var options = {\n        chart: {\n          title: 'Box Office Earnings in First Two Weeks of Opening',\n          subtitle: 'in millions of dollars (USD)'\n        },\n        colors: ['#6e4ff5', '#f6aa33', '#fe3995']\n      };\n      var chart = new google.charts.Line(document.getElementById('kt_docs_google_chart_line'));\n      chart.draw(data, options);\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleLine();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartLineDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2dvb2dsZS1jaGFydHMvbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLHFCQUFxQixHQUFHLFlBQVk7RUFDcEM7RUFDQSxJQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFlO0lBQzFCO0lBQ0FDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7TUFDOUJDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTTtJQUN6QyxDQUFDLENBQUM7SUFFRkYsTUFBTSxDQUFDRyxpQkFBaUIsQ0FBQyxZQUFZO01BQ2pDO01BQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlKLE1BQU0sQ0FBQ0ssYUFBYSxDQUFDQyxTQUFTLEVBQUU7TUFDL0NGLElBQUksQ0FBQ0csU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7TUFDL0JILElBQUksQ0FBQ0csU0FBUyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQztNQUNuREgsSUFBSSxDQUFDRyxTQUFTLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQztNQUN4Q0gsSUFBSSxDQUFDRyxTQUFTLENBQUMsUUFBUSxFQUFFLGlDQUFpQyxDQUFDO01BRTNESCxJQUFJLENBQUNJLE9BQU8sQ0FBQyxDQUNULENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3JCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3JCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQ25CLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3JCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3JCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ25CLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ25CLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3JCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3JCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ25CLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ25CLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ25CLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3RCLENBQUM7TUFFRixJQUFJQyxPQUFPLEdBQUc7UUFDVkMsS0FBSyxFQUFFO1VBQ0hDLEtBQUssRUFBRSxtREFBbUQ7VUFDMURDLFFBQVEsRUFBRTtRQUNkLENBQUM7UUFDREMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO01BQzVDLENBQUM7TUFFRCxJQUFJSCxLQUFLLEdBQUcsSUFBSVYsTUFBTSxDQUFDYyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsQ0FBQztNQUN4RlAsS0FBSyxDQUFDUSxJQUFJLENBQUNkLElBQUksRUFBRUssT0FBTyxDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQVUsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtNQUNkcEIsV0FBVyxFQUFFO0lBQ2pCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBcUIsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDdkIscUJBQXFCLENBQUNxQixJQUFJLEVBQUU7QUFDaEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL2xpbmUuanM/MzIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUR29vZ2xlQ2hhcnRMaW5lRGVtbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlTGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR09PR0xFIENIQVJUUyBJTklUXG4gICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEnLCB7XG4gICAgICAgICAgICBwYWNrYWdlczogWydjb3JlY2hhcnQnLCAnYmFyJywgJ2xpbmUnXVxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTElORSBDSEFSVFxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJ0RheScpO1xuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdHdWFyZGlhbnMgb2YgdGhlIEdhbGF4eScpO1xuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdUaGUgQXZlbmdlcnMnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnVHJhbnNmb3JtZXJzOiBBZ2Ugb2YgRXh0aW5jdGlvbicpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZFJvd3MoW1xuICAgICAgICAgICAgICAgIFsxLCAzNy44LCA4MC44LCA0MS44XSxcbiAgICAgICAgICAgICAgICBbMiwgMzAuOSwgNjkuNSwgMzIuNF0sXG4gICAgICAgICAgICAgICAgWzMsIDI1LjQsIDU3LCAyNS43XSxcbiAgICAgICAgICAgICAgICBbNCwgMTEuNywgMTguOCwgMTAuNV0sXG4gICAgICAgICAgICAgICAgWzUsIDExLjksIDE3LjYsIDEwLjRdLFxuICAgICAgICAgICAgICAgIFs2LCA4LjgsIDEzLjYsIDcuN10sXG4gICAgICAgICAgICAgICAgWzcsIDcuNiwgMTIuMywgOS42XSxcbiAgICAgICAgICAgICAgICBbOCwgMTIuMywgMjkuMiwgMTAuNl0sXG4gICAgICAgICAgICAgICAgWzksIDE2LjksIDQyLjksIDE0LjhdLFxuICAgICAgICAgICAgICAgIFsxMCwgMTIuOCwgMzAuOSwgMTEuNl0sXG4gICAgICAgICAgICAgICAgWzExLCA1LjMsIDcuOSwgNC43XSxcbiAgICAgICAgICAgICAgICBbMTIsIDYuNiwgOC40LCA1LjJdLFxuICAgICAgICAgICAgICAgIFsxMywgNC44LCA2LjMsIDMuNl0sXG4gICAgICAgICAgICAgICAgWzE0LCA0LjIsIDYuMiwgMy40XVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQm94IE9mZmljZSBFYXJuaW5ncyBpbiBGaXJzdCBUd28gV2Vla3Mgb2YgT3BlbmluZycsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnaW4gbWlsbGlvbnMgb2YgZG9sbGFycyAoVVNEKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjNmU0ZmY1JywgJyNmNmFhMzMnLCAnI2ZlMzk5NSddXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY2hhcnQgPSBuZXcgZ29vZ2xlLmNoYXJ0cy5MaW5lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2dvb2dsZV9jaGFydF9saW5lJykpO1xuICAgICAgICAgICAgY2hhcnQuZHJhdyhkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlTGluZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUR29vZ2xlQ2hhcnRMaW5lRGVtby5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEdvb2dsZUNoYXJ0TGluZURlbW8iLCJleGFtcGxlTGluZSIsImdvb2dsZSIsImxvYWQiLCJwYWNrYWdlcyIsInNldE9uTG9hZENhbGxiYWNrIiwiZGF0YSIsInZpc3VhbGl6YXRpb24iLCJEYXRhVGFibGUiLCJhZGRDb2x1bW4iLCJhZGRSb3dzIiwib3B0aW9ucyIsImNoYXJ0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbG9ycyIsImNoYXJ0cyIsIkxpbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhdyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/charts/google-charts/line.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/charts/google-charts/line.js"]();
/******/ 	
/******/ })()
;