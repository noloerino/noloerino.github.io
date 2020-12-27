(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var duna_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! duna_frontend */ "./node_modules/duna_frontend/duna_frontend.js");

Object(duna_frontend__WEBPACK_IMPORTED_MODULE_0__["init"])();
console.log("You're running the duna emulator, version", "7c31242 (2020-10-19)");
var codeArea = document.getElementById("code");
var stdout = document.getElementById("stdout");
var exitCode = document.getElementById("exit-code");
var getProgram = function () {
    return codeArea.value;
};
var assembleAndRunProgram = function () {
    var program = getProgram();
    var simResult = Object(duna_frontend__WEBPACK_IMPORTED_MODULE_0__["simulate"])(program);
    exitCode.innerText = simResult.exit_code.toString();
    stdout.value = simResult.get_stdout();
};
var goButton = document.getElementById("go");
goButton.onclick = function (e) { return assembleAndRunProgram(); };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUErQztBQUcvQywwREFBSSxFQUFFLENBQUM7QUFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLHNCQUFhLENBQUMsQ0FBQztBQUV4RSxJQUFNLFFBQVEsR0FBd0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0RSxJQUFNLE1BQU0sR0FBd0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RSxJQUFNLFFBQVEsR0FBb0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV2RSxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixJQUFNLE9BQU8sR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUM3QixJQUFNLFNBQVMsR0FBRyw4REFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRCxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLFFBQVEsQ0FBQyxPQUFPLEdBQUcsVUFBQyxDQUFDLElBQUssNEJBQXFCLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyIsImZpbGUiOiIxLmJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXQsIHNpbXVsYXRlIH0gZnJvbSBcImR1bmFfZnJvbnRlbmRcIjtcbmltcG9ydCB7IG1lbW9yeSB9IGZyb20gXCJkdW5hX2Zyb250ZW5kL2R1bmFfZnJvbnRlbmRfYmcud2FzbVwiO1xuXG5pbml0KCk7XG5cbmNvbnNvbGUubG9nKFwiWW91J3JlIHJ1bm5pbmcgdGhlIGR1bmEgZW11bGF0b3IsIHZlcnNpb25cIiwgQlVJTERfVkVSU0lPTik7XG5cbmNvbnN0IGNvZGVBcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlXCIpO1xuY29uc3Qgc3Rkb3V0ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGRvdXRcIik7XG5jb25zdCBleGl0Q29kZSA9IDxIVE1MU3BhbkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGl0LWNvZGVcIik7XG5cbmNvbnN0IGdldFByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjb2RlQXJlYS52YWx1ZTtcbn07XG5cbmNvbnN0IGFzc2VtYmxlQW5kUnVuUHJvZ3JhbSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IGdldFByb2dyYW0oKTtcbiAgY29uc3Qgc2ltUmVzdWx0ID0gc2ltdWxhdGUocHJvZ3JhbSk7XG4gIGV4aXRDb2RlLmlubmVyVGV4dCA9IHNpbVJlc3VsdC5leGl0X2NvZGUudG9TdHJpbmcoKTtcbiAgc3Rkb3V0LnZhbHVlID0gc2ltUmVzdWx0LmdldF9zdGRvdXQoKTtcbn07XG5cbmNvbnN0IGdvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb1wiKTtcbmdvQnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4gYXNzZW1ibGVBbmRSdW5Qcm9ncmFtKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9