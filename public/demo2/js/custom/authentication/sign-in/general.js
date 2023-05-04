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

/***/ "./resources/assets/extended/js/custom/authentication/sign-in/general.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/extended/js/custom/authentication/sign-in/general.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTSigninGeneral = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n\n  // Handle form\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'email': {\n          validators: {\n            notEmpty: {\n              message: 'Email address is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n\n    // Handle form submit\n    submitButton.addEventListener('click', function (e) {\n      // Prevent button default action\n      e.preventDefault();\n\n      // Validate form\n      validator.validate().then(function (status) {\n        if (status === 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on');\n\n          // Disable button to avoid multiple click\n          submitButton.disabled = true;\n\n          // Simulate ajax request\n          axios.post(submitButton.closest('form').getAttribute('action'), new FormData(form)).then(function (response) {\n            // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"You have successfully logged in!\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.querySelector('[name=\"email\"]').value = \"\";\n                form.querySelector('[name=\"password\"]').value = \"\";\n                window.location.reload();\n              }\n            });\n          })[\"catch\"](function (error) {\n            var dataMessage = error.response.data.message;\n            var dataErrors = error.response.data.errors;\n            for (var errorsKey in dataErrors) {\n              if (!dataErrors.hasOwnProperty(errorsKey)) continue;\n              dataMessage += \"\\r\\n\" + dataErrors[errorsKey];\n            }\n            if (error.response) {\n              Swal.fire({\n                text: dataMessage,\n                icon: \"error\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              });\n            }\n          }).then(function () {\n            // always executed\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator');\n\n            // Enable button\n            submitButton.disabled = false;\n          });\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  // Public functions\n  return {\n    // Initialization\n    init: function init() {\n      form = document.querySelector('#kt_sign_in_form');\n      submitButton = document.querySelector('#kt_sign_in_submit');\n      handleForm();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTSigninGeneral.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2V4dGVuZGVkL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLWluL2dlbmVyYWwuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBWTtFQUM5QjtFQUNBLElBQUlDLElBQUk7RUFDUixJQUFJQyxZQUFZO0VBQ2hCLElBQUlDLFNBQVM7O0VBRWI7RUFDQSxJQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBYUMsQ0FBQyxFQUFFO0lBQzFCO0lBQ0FGLFNBQVMsR0FBR0csY0FBYyxDQUFDQyxjQUFjLENBQ3JDTixJQUFJLEVBQ0o7TUFDSU8sTUFBTSxFQUFFO1FBQ0osT0FBTyxFQUFFO1VBQ0xDLFVBQVUsRUFBRTtZQUNSQyxRQUFRLEVBQUU7Y0FDTkMsT0FBTyxFQUFFO1lBQ2IsQ0FBQztZQUNEQyxZQUFZLEVBQUU7Y0FDVkQsT0FBTyxFQUFFO1lBQ2I7VUFDSjtRQUNKLENBQUM7UUFDRCxVQUFVLEVBQUU7VUFDUkYsVUFBVSxFQUFFO1lBQ1JDLFFBQVEsRUFBRTtjQUNOQyxPQUFPLEVBQUU7WUFDYixDQUFDO1lBQ0RFLFFBQVEsRUFBRTtjQUNORixPQUFPLEVBQUU7WUFDYjtVQUNKO1FBQ0o7TUFDSixDQUFDO01BQ0RHLE9BQU8sRUFBRTtRQUNMQyxPQUFPLEVBQUUsSUFBSVQsY0FBYyxDQUFDUSxPQUFPLENBQUNFLE9BQU8sRUFBRTtRQUM3Q0MsU0FBUyxFQUFFLElBQUlYLGNBQWMsQ0FBQ1EsT0FBTyxDQUFDSSxVQUFVLENBQUM7VUFDN0NDLFdBQVcsRUFBRSxTQUFTO1VBQ3RCQyxlQUFlLEVBQUUsRUFBRTtVQUNuQkMsYUFBYSxFQUFFO1FBQ25CLENBQUM7TUFDTDtJQUNKLENBQUMsQ0FDSjs7SUFFRDtJQUNBbkIsWUFBWSxDQUFDb0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVqQixDQUFDLEVBQUU7TUFDaEQ7TUFDQUEsQ0FBQyxDQUFDa0IsY0FBYyxFQUFFOztNQUVsQjtNQUNBcEIsU0FBUyxDQUFDcUIsUUFBUSxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFVQyxNQUFNLEVBQUU7UUFDeEMsSUFBSUEsTUFBTSxLQUFLLE9BQU8sRUFBRTtVQUNwQjtVQUNBeEIsWUFBWSxDQUFDeUIsWUFBWSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQzs7VUFFcEQ7VUFDQXpCLFlBQVksQ0FBQzBCLFFBQVEsR0FBRyxJQUFJOztVQUU1QjtVQUNBQyxLQUFLLENBQUNDLElBQUksQ0FBQzVCLFlBQVksQ0FBQzZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUlDLFFBQVEsQ0FBQ2hDLElBQUksQ0FBQyxDQUFDLENBQzlFd0IsSUFBSSxDQUFDLFVBQVVTLFFBQVEsRUFBRTtZQUN0QjtZQUNBQyxJQUFJLENBQUNDLElBQUksQ0FBQztjQUNOQyxJQUFJLEVBQUUsa0NBQWtDO2NBQ3hDQyxJQUFJLEVBQUUsU0FBUztjQUNmQyxjQUFjLEVBQUUsS0FBSztjQUNyQkMsaUJBQWlCLEVBQUUsYUFBYTtjQUNoQ0MsV0FBVyxFQUFFO2dCQUNUQyxhQUFhLEVBQUU7Y0FDbkI7WUFDSixDQUFDLENBQUMsQ0FBQ2pCLElBQUksQ0FBQyxVQUFVa0IsTUFBTSxFQUFFO2NBQ3RCLElBQUlBLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO2dCQUNwQjNDLElBQUksQ0FBQzRDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsRUFBRTtnQkFDL0M3QyxJQUFJLENBQUM0QyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7Z0JBQ2xEQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO2NBQzVCO1lBQ0osQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFVQyxLQUFLLEVBQUU7WUFDcEIsSUFBSUMsV0FBVyxHQUFHRCxLQUFLLENBQUNoQixRQUFRLENBQUNrQixJQUFJLENBQUN6QyxPQUFPO1lBQzdDLElBQUkwQyxVQUFVLEdBQUdILEtBQUssQ0FBQ2hCLFFBQVEsQ0FBQ2tCLElBQUksQ0FBQ0UsTUFBTTtZQUUzQyxLQUFLLElBQU1DLFNBQVMsSUFBSUYsVUFBVSxFQUFFO2NBQ2hDLElBQUksQ0FBQ0EsVUFBVSxDQUFDRyxjQUFjLENBQUNELFNBQVMsQ0FBQyxFQUFFO2NBQzNDSixXQUFXLElBQUksTUFBTSxHQUFHRSxVQUFVLENBQUNFLFNBQVMsQ0FBQztZQUNqRDtZQUVBLElBQUlMLEtBQUssQ0FBQ2hCLFFBQVEsRUFBRTtjQUNoQkMsSUFBSSxDQUFDQyxJQUFJLENBQUM7Z0JBQ05DLElBQUksRUFBRWMsV0FBVztnQkFDakJiLElBQUksRUFBRSxPQUFPO2dCQUNiQyxjQUFjLEVBQUUsS0FBSztnQkFDckJDLGlCQUFpQixFQUFFLGFBQWE7Z0JBQ2hDQyxXQUFXLEVBQUU7a0JBQ1RDLGFBQWEsRUFBRTtnQkFDbkI7Y0FDSixDQUFDLENBQUM7WUFDTjtVQUNKLENBQUMsQ0FBQyxDQUNEakIsSUFBSSxDQUFDLFlBQVk7WUFDZDtZQUNBO1lBQ0F2QixZQUFZLENBQUN1RCxlQUFlLENBQUMsbUJBQW1CLENBQUM7O1lBRWpEO1lBQ0F2RCxZQUFZLENBQUMwQixRQUFRLEdBQUcsS0FBSztVQUNqQyxDQUFDLENBQUM7UUFDVixDQUFDLE1BQU07VUFDSDtVQUNBTyxJQUFJLENBQUNDLElBQUksQ0FBQztZQUNOQyxJQUFJLEVBQUUscUVBQXFFO1lBQzNFQyxJQUFJLEVBQUUsT0FBTztZQUNiQyxjQUFjLEVBQUUsS0FBSztZQUNyQkMsaUJBQWlCLEVBQUUsYUFBYTtZQUNoQ0MsV0FBVyxFQUFFO2NBQ1RDLGFBQWEsRUFBRTtZQUNuQjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQzs7RUFFRDtFQUNBLE9BQU87SUFDSDtJQUNBZ0IsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtNQUNkekQsSUFBSSxHQUFHMEQsUUFBUSxDQUFDZCxhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFDakQzQyxZQUFZLEdBQUd5RCxRQUFRLENBQUNkLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztNQUUzRHpDLFVBQVUsRUFBRTtJQUNoQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQXdELE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBWTtFQUNsQzdELGVBQWUsQ0FBQzBELElBQUksRUFBRTtBQUMxQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2V4dGVuZGVkL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLWluL2dlbmVyYWwuanM/NWI4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUU2lnbmluR2VuZXJhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBFbGVtZW50c1xuICAgIHZhciBmb3JtO1xuICAgIHZhciBzdWJtaXRCdXR0b247XG4gICAgdmFyIHZhbGlkYXRvcjtcblxuICAgIC8vIEhhbmRsZSBmb3JtXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xuICAgICAgICB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgYWRkcmVzcyBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHZhbHVlIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pdFxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBidXR0b24gZGVmYXVsdCBhY3Rpb25cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgZm9ybVxuICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ1ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgYWpheCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3Qoc3VibWl0QnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCBuZXcgRm9ybURhdGEoZm9ybSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IG1lc3NhZ2UgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhRXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVycm9yc0tleSBpbiBkYXRhRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YUVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcnNLZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1lc3NhZ2UgKz0gXCJcXHJcXG5cIiArIGRhdGFFcnJvcnNbZXJyb3JzS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGFNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBleGVjdXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb25cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduX2luX2Zvcm0nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduX2luX3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RTaWduaW5HZW5lcmFsLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUU2lnbmluR2VuZXJhbCIsImZvcm0iLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0b3IiLCJoYW5kbGVGb3JtIiwiZSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwiZW1haWxBZGRyZXNzIiwiY2FsbGJhY2siLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJ0aGVuIiwic3RhdHVzIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJheGlvcyIsInBvc3QiLCJjbG9zZXN0IiwiZ2V0QXR0cmlidXRlIiwiRm9ybURhdGEiLCJyZXNwb25zZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiZGF0YU1lc3NhZ2UiLCJkYXRhIiwiZGF0YUVycm9ycyIsImVycm9ycyIsImVycm9yc0tleSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdCIsImRvY3VtZW50IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/extended/js/custom/authentication/sign-in/general.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/extended/js/custom/authentication/sign-in/general.js"]();
/******/ 	
/******/ })()
;