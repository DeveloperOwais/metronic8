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

/***/ "./resources/assets/core/js/custom/documentation/forms/password-meter.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/forms/password-meter.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTGeneralPasswordMeterDemos = function () {\n  // Private functions\n  var _showScore = function _showScore() {\n    // Select show score button\n    var showScoreButton = document.getElementById('kt_password_meter_example_show_score');\n\n    // Get password meter instance\n    var passwordMeterElement = document.querySelector(\"#kt_password_meter_example\");\n    var passwordMeter = KTPasswordMeter.getInstance(passwordMeterElement);\n\n    // Handle show score button click\n    showScoreButton.addEventListener('click', function (e) {\n      // Get password score\n      var score = passwordMeter.getScore();\n\n      // Show popup confirmation \n      Swal.fire({\n        text: \"Current Password Score: \" + score,\n        icon: \"success\",\n        buttonsStyling: false,\n        confirmButtonText: \"Ok, got it!\",\n        customClass: {\n          confirmButton: \"btn btn-primary\"\n        }\n      });\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      _showScore();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralPasswordMeterDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvcGFzc3dvcmQtbWV0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSwyQkFBMkIsR0FBRyxZQUFXO0VBQ3pDO0VBQ0EsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBYztJQUN4QjtJQUNBLElBQU1DLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsc0NBQXNDLENBQUM7O0lBRXZGO0lBQ0EsSUFBTUMsb0JBQW9CLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBQ2pGLElBQU1DLGFBQWEsR0FBR0MsZUFBZSxDQUFDQyxXQUFXLENBQUNKLG9CQUFvQixDQUFDOztJQUV2RTtJQUNBSCxlQUFlLENBQUNRLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxDQUFDLEVBQUk7TUFDM0M7TUFDQSxJQUFNQyxLQUFLLEdBQUdMLGFBQWEsQ0FBQ00sUUFBUSxFQUFFOztNQUV0QztNQUNBQyxJQUFJLENBQUNDLElBQUksQ0FBQztRQUNOQyxJQUFJLEVBQUUsMEJBQTBCLEdBQUdKLEtBQUs7UUFDeENLLElBQUksRUFBRSxTQUFTO1FBQ2ZDLGNBQWMsRUFBRSxLQUFLO1FBQ3JCQyxpQkFBaUIsRUFBRSxhQUFhO1FBQ2hDQyxXQUFXLEVBQUU7VUFDVEMsYUFBYSxFQUFFO1FBQ25CO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO01BQ2JyQixVQUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0FzQixNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakN4QiwyQkFBMkIsQ0FBQ3NCLElBQUksRUFBRTtBQUN0QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvcGFzc3dvcmQtbWV0ZXIuanM/NmIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUR2VuZXJhbFBhc3N3b3JkTWV0ZXJEZW1vcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIF9zaG93U2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gU2VsZWN0IHNob3cgc2NvcmUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHNob3dTY29yZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9wYXNzd29yZF9tZXRlcl9leGFtcGxlX3Nob3dfc2NvcmUnKTsgIFxuXG4gICAgICAgIC8vIEdldCBwYXNzd29yZCBtZXRlciBpbnN0YW5jZVxuICAgICAgICBjb25zdCBwYXNzd29yZE1ldGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfcGFzc3dvcmRfbWV0ZXJfZXhhbXBsZVwiKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRNZXRlciA9IEtUUGFzc3dvcmRNZXRlci5nZXRJbnN0YW5jZShwYXNzd29yZE1ldGVyRWxlbWVudCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIHNob3cgc2NvcmUgYnV0dG9uIGNsaWNrXG4gICAgICAgIHNob3dTY29yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgLy8gR2V0IHBhc3N3b3JkIHNjb3JlXG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IHBhc3N3b3JkTWV0ZXIuZ2V0U2NvcmUoKTtcblxuICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCBjb25maXJtYXRpb24gXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ3VycmVudCBQYXNzd29yZCBTY29yZTogXCIgKyBzY29yZSxcbiAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfc2hvd1Njb3JlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEdlbmVyYWxQYXNzd29yZE1ldGVyRGVtb3MuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHZW5lcmFsUGFzc3dvcmRNZXRlckRlbW9zIiwiX3Nob3dTY29yZSIsInNob3dTY29yZUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXNzd29yZE1ldGVyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXNzd29yZE1ldGVyIiwiS1RQYXNzd29yZE1ldGVyIiwiZ2V0SW5zdGFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNjb3JlIiwiZ2V0U2NvcmUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/forms/password-meter.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/forms/password-meter.js"]();
/******/ 	
/******/ })()
;