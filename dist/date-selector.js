!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DateSelector=t():e.DateSelector=t()}(this,(()=>(()=>{"use strict";var e={707:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var l=n(16),o=n(16),r=function(){function e(){this.yearSelectElement=document.getElementById("year"),this.monthSelectElement=document.getElementById("month"),this.daySelectElement=document.getElementById("day")}return e.prototype.element=function(e,t,n){e||t||n?(this.yearSelectElement=document.getElementById(e),this.monthSelectElement=document.getElementById(t),this.daySelectElement=document.getElementById(n),this.yearSelectElement||console.error("ERROR: Select element with ID '".concat(e,"' not found.")),this.monthSelectElement||console.error("ERROR: Select element with ID '".concat(t,"' not found.")),this.daySelectElement||console.error("ERROR: Select element with ID '".concat(n,"' not found.")),this.event()):console.error("ERROR: The function 'element()' requires exactly 3 arguments. Please provide three non-null arguments.")},e.prototype.event=function(){var e=this;this.yearSelectElement&&this.monthSelectElement&&this.daySelectElement&&((0,l.populateYearSelector)(this.yearSelectElement,""),this.yearSelectElement.addEventListener("change",(function(){var t=parseInt(e.yearSelectElement.value,10);isNaN(t)||((0,l.populateMonthSelector)(e.monthSelectElement,t,e.monthSelectElement.value),e.monthSelectElement.value||e.daySelectElement.appendChild((0,o.checkFirstOption)(e.daySelectElement)))})),this.monthSelectElement.addEventListener("change",(function(){var t=parseInt(e.yearSelectElement.value,10),n=parseInt(e.monthSelectElement.value,10);isNaN(t)||isNaN(n)||(0,l.populateDaySelector)(e.daySelectElement,t,n,e.daySelectElement.value),isNaN(n)&&e.daySelectElement.appendChild((0,o.checkFirstOption)(e.daySelectElement))})))},e.prototype.initialize=function(e,t,n){if(void 0===t&&(t=""),void 0===n&&(n=""),this.yearSelectElement&&this.monthSelectElement&&this.daySelectElement&&""!=e){if(this.yearSelectElement.value=e,!this.yearSelectElement.value)return console.error("ERROR: The Year you provided '%s' is not available in the option of Years.",e),this.monthSelectElement.appendChild((0,o.checkFirstOption)(this.monthSelectElement)),void this.daySelectElement.appendChild((0,o.checkFirstOption)(this.daySelectElement));var r=""==t?this.monthSelectElement.value:t;if((0,l.populateMonthSelector)(this.monthSelectElement,parseInt(e,10),r),this.monthSelectElement.value){var a=""==n?this.daySelectElement.value:n;(0,l.populateDaySelector)(this.daySelectElement,parseInt(e,10),parseInt(this.monthSelectElement.value,10),a)}else t&&console.error("ERROR: The month you provided '%s' is not available in the option of months.",t),this.daySelectElement.appendChild((0,o.checkFirstOption)(this.daySelectElement))}},e.prototype.addYears=function(e,t,n){if(void 0===n&&(n=""),this.yearSelectElement&&this.monthSelectElement&&this.daySelectElement){var r=(0,o.validateYears)(e,t),a=r[0],i=r[1],c=""==n?this.yearSelectElement.value:n;(0,l.populateYearSelector)(this.yearSelectElement,c,a,i),this.initialize(c)}},e}();t.default=r},137:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(707));window.dateSelector=new o.default,null===window||void 0===window||window.dateSelector.event()},16:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateYears=t.checkFirstOption=t.populateDaySelector=t.populateMonthSelector=t.populateYearSelector=void 0;var n=new Date,l=n.getFullYear(),o=n.getMonth()+1,r=n.getDate();t.populateYearSelector=function(e,n,o,r){void 0===o&&(o=1950),void 0===r&&(r=l);var i=parseInt(n,10)||0;e.appendChild((0,t.checkFirstOption)(e)),a(e,o,r,i)},t.populateMonthSelector=function(e,n,r){var i=parseInt(r,10)||0;e.appendChild((0,t.checkFirstOption)(e)),a(e,1,n===l?o:12,i)},t.populateDaySelector=function(e,n,i,c){var s=parseInt(c,10)||0;e.appendChild((0,t.checkFirstOption)(e));var d=new Date(n,i,0).getDate();a(e,1,n===l&&i===o?r:d,s)},t.checkFirstOption=function(e){var t=e.firstElementChild;return e.innerHTML="",t||document.createElement("option")};var a=function(e,t,n,l){for(var o=t;t<n?o<=n:o>=n;t<n?o++:o--){var r=document.createElement("option");r.value=o.toString(),r.textContent=o.toString(),o===l&&(r.selected=!0),e.appendChild(r)}};t.validateYears=function(e,t){return"now"===e&&(e=l.toString()),"now"===t&&(t=l.toString()),[i(e),i(t)]};var i=function(e){var t=parseInt(e,10);if(isNaN(t))throw new Error("ERROR: The value '".concat(e,"' is not a valid number. Please provide a valid year."));if(4!==e.length)throw new Error("ERROR: The year '".concat(e,"' should have exactly 4 digits."));if(t<1900)throw new Error("ERROR: The year '".concat(e,"' is before 1900. Please provide a year greater than or equal to 1900."));return t}}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l].call(r.exports,r,r.exports,n),r.exports}var l={};return(()=>{var e=l;Object.defineProperty(e,"__esModule",{value:!0}),n(137),document.addEventListener("DOMContentLoaded",(function(){window.dateSelector||console.error("Error: DateSelector has not been initialized. Please check that the initialization script has executed correctly and that the DateSelector library is properly included. Ensure the script link is correct and try reloading the page.")}))})(),l})()));