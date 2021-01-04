(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./js/components/codemirror.js":
/*!*************************************!*\
  !*** ./js/components/codemirror.js ***!
  \*************************************/
/*! exports provided: CodeMirrorWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeMirrorWrapper", function() { return CodeMirrorWrapper; });
/* harmony import */ var codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.js */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_mode_gas_gas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/gas/gas */ "./node_modules/codemirror/mode/gas/gas.js");
/* harmony import */ var codemirror_mode_gas_gas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_gas_gas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_theme_elegant_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/theme/elegant.css */ "./node_modules/codemirror/theme/elegant.css");
// These extra CSS imports probably would go over poorly with typescript, so we expose
// a smaller interface
// https://github.com/codemirror/CodeMirror/issues/5484

// https://github.com/survivejs-demos/react-demos/blob/master/demos/index.js
// https://stackoverflow.com/questions/55685029/codemirror-with-vanilla-typescript-and-webpack



// import "codemirror/theme/monokai.css";

const STORAGE_MAIN_FILE_KEY = "mainfile";

class CodeMirrorWrapper {
  constructor() {
    // TODO define custom types for RISC-V etc.
    // GAS supports ARM and x86-64
    this.localStorage = window.localStorage;
    let textArea = document.getElementById("code");
    // This needs to be set instead of the "value" parameter of the cm constructor
    textArea.value = this.localStorage.getItem(STORAGE_MAIN_FILE_KEY);
    let cm = codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_0___default.a.fromTextArea(textArea, {
      mode: "gas",
      lineNumbers: "true",
      theme: "elegant",
    });
    codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_0___default.a.commands.save = () => {
      console.log("Saved file at " + new Date().toTimeString());
      this.save();
    };
    this.codeMirror = cm;
  }

  getProgram() {
    return this.codeMirror.getValue();
  }

  // Saves the text of the main file in local storage for the time being
  // this will change when multiple files become supported
  save() {
    this.localStorage.setItem(STORAGE_MAIN_FILE_KEY, this.getProgram());
  }
}


/***/ }),

/***/ "./js/components/golden.jsx":
/*!**********************************!*\
  !*** ./js/components/golden.jsx ***!
  \**********************************/
/*! exports provided: goldenInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goldenInit", function() { return goldenInit; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! golden-layout */ "./node_modules/golden-layout/dist/goldenlayout.js");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var golden_layout_src_css_goldenlayout_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! golden-layout/src/css/goldenlayout-base.css */ "./node_modules/golden-layout/src/css/goldenlayout-base.css");
/* harmony import */ var golden_layout_src_css_goldenlayout_light_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! golden-layout/src/css/goldenlayout-light-theme.css */ "./node_modules/golden-layout/src/css/goldenlayout-light-theme.css");
/* harmony import */ var _no_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../no-react */ "./js/no-react.js");
// JQuery is required for GoldenLayout, meaning it's available even if it's not a direct dependency



 // Needed for JSX

 // Takes in a function of the form ((state) => jsx) and appends it to the golden container
//
// The second arg to registerComponent needs to be a function keyword, not a lambda
// because reasons

const goldenComponent = jsxFn => {
  return function (container, state) {
    container.getElement()[0].appendChild(jsxFn(state));
  };
};

const config = {
  settings: {
    showPopoutIcon: false,
    showMaximiseIcon: false,
    showCloseIcon: false
  },
  content: [{
    type: "row",
    height: 100,
    content: [{
      type: "column",
      content: [{
        type: "component",
        componentName: "editor",
        componentState: {},
        isClosable: false
      }, {
        type: "component",
        componentName: "errors",
        componentState: {},
        isClosable: false
      }]
    }, {
      type: "stack",
      content: [{
        type: "component",
        componentName: "state",
        componentState: {},
        isClosable: false
      }, {
        type: "component",
        componentName: "console",
        componentState: {},
        isClosable: false
      }]
    }]
  }]
};
const goldenInit = () => {
  let layout = new golden_layout__WEBPACK_IMPORTED_MODULE_1___default.a(config, document.getElementById("golden-base"));
  layout.registerComponent("editor", goldenComponent(() => /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("div", null, /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("div", {
    id: "buttons",
    className: "flexRow",
    style: {
      margin: "0.5em"
    }
  }, /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("button", {
    id: "assemble"
  }, "Assemble"), /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("button", {
    id: "step"
  }, "Step"), /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("button", {
    id: "run"
  }, "Run"), /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("button", {
    id: "reset"
  }, "Reset"), /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("div", {
    style: {
      flex: 6
    }
  })), /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("textarea", {
    id: "code",
    rows: "20",
    cols: "80",
    placeholder: "your code here"
  }))));
  layout.registerComponent("console", goldenComponent(() =>
  /*#__PURE__*/
  // Fragment isn't implemented :(
  _no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("div", {
    className: "flexCol"
  }, /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("p", {
    style: {
      fontSize: "14px",
      marginLeft: "0.5em"
    }
  }, "Program exited with code ", /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("span", {
    id: "exit-code"
  }, "--")), /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("textarea", {
    id: "stdout",
    disabled: true,
    placeholder: "console output appears here",
    style: {
      flex: 1,
      fontSize: "14px"
    }
  }))));
  layout.registerComponent("errors", goldenComponent(() => /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("pre", {
    id: "compile-errors",
    style: {
      marginLeft: "0.5em",
      marginRight: "0.5em",
      fontSize: "14px"
    }
  })));
  layout.registerComponent("state", goldenComponent(() => /*#__PURE__*/_no_react__WEBPACK_IMPORTED_MODULE_4__["default"].createElement("textarea", {
    id: "sim-state",
    className: "flexCol",
    disabled: true,
    placeholder: "program state appears here during simulation -- press assemble & step to begin",
    style: {
      fontSize: "14px",
      whiteSpace: "pre-wrap",
      margin: "0.5em"
    }
  })));
  layout.init();
};

/***/ }),

/***/ "./js/index.ts":
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var duna_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! duna_web */ "./node_modules/duna_web/duna_web.js");
/* harmony import */ var _components_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/codemirror */ "./js/components/codemirror.js");
/* harmony import */ var _components_golden_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/golden.jsx */ "./js/components/golden.jsx");



Object(duna_web__WEBPACK_IMPORTED_MODULE_0__["init"])();
// All DOM manipulation must occur after goldenInit
Object(_components_golden_jsx__WEBPACK_IMPORTED_MODULE_2__["goldenInit"])();
var cm = new _components_codemirror__WEBPACK_IMPORTED_MODULE_1__["CodeMirrorWrapper"]();
var simState = duna_web__WEBPACK_IMPORTED_MODULE_0__["SimState"]["new"]();
console.log("You're running the duna simulator, version", "b607561 (2021-01-03)");
var assembleProgram = function () {
    var compileErrors = (document.getElementById("compile-errors"));
    var program = cm.getProgram();
    simState.assemble(program);
    var errs = simState.get_errors();
    compileErrors.innerText = errs !== null && errs !== void 0 ? errs : "No errors!";
    if (!errs) {
        updateState();
    }
};
var updateState = function () {
    var _a;
    var stdout = document.getElementById("stdout");
    var exitCode = document.getElementById("exit-code");
    var ec = simState.result();
    exitCode.innerText = (_a = ec === null || ec === void 0 ? void 0 : ec.toString()) !== null && _a !== void 0 ? _a : "--";
    var stdoutText = simState.stdout();
    stdout.value = stdoutText !== null && stdoutText !== void 0 ? stdoutText : "";
    var snapshot = simState.snapshot();
    var state = document.getElementById("sim-state");
    state.value = snapshot
        ? ("PC: " + snapshot.curr_pc() + "\n" +
            ("next instruction: " + snapshot.curr_inst() + "\n\n") +
            ("" + snapshot.reg_dump()))
        : "";
};
var step = function () {
    simState.step();
    updateState();
};
var run = function () {
    simState.run();
    updateState();
};
var reset = function () {
    simState.reset();
    updateState();
};
var assembleButton = document.getElementById("assemble");
assembleButton.onclick = function (e) { return assembleProgram(); };
var stepButton = document.getElementById("step");
stepButton.onclick = function (e) { return step(); };
var runButton = document.getElementById("run");
runButton.onclick = function (e) { return run(); };
var resetButton = document.getElementById("reset");
resetButton.onclick = function (e) { return reset(); };
window.onbeforeunload = function () {
    cm.save();
};


/***/ }),

/***/ "./js/no-react.js":
/*!************************!*\
  !*** ./js/no-react.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Allows the usage of JSX without too much pain.
// Copy/pasted from here, with modifications:
// https://stackoverflow.com/questions/30430982/can-i-use-jsx-without-react-to-inline-html-in-script

const React = {
  // Fragment: function(props, names) {

  // },

  createElement: function (tag, attrs, children) {
    var element = document.createElement(tag);

    for (let name in attrs) {
      if (name && attrs.hasOwnProperty(name)) {
        let value = attrs[name];
        if (name === "style") {
          if (typeof value !== "object") {
            console.error("Style value expected JS object, got", value);
          }
          let new_value = "";
          for (let [styleKey, styleValue] of Object.entries(value)) {
            // Convert keys from camel case to hyphenated
            styleKey = styleKey.replace(
              /[A-Z]/g,
              (match) => "-" + match.toLowerCase()
            );
            new_value += styleKey + ": " + styleValue + "; ";
          }
          value = new_value.trim();
        }
        if (name === "className") {
          name = "class";
        }
        if (value === true) {
          element.setAttribute(name, name);
        } else if (value !== false && value != null) {
          element.setAttribute(name, value.toString());
        }
      }
    }
    for (let i = 2; i < arguments.length; i++) {
      let child = arguments[i];
      element.appendChild(
        child.nodeType == null
          ? document.createTextNode(child.toString())
          : child
      );
    }
    return element;
  },
};

/* harmony default export */ __webpack_exports__["default"] = (React);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NvZGVtaXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9nb2xkZW4uanN4Iiwid2VicGFjazovLy8uL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2pzL25vLXJlYWN0LmpzIl0sIm5hbWVzIjpbImdvbGRlbkNvbXBvbmVudCIsImpzeEZuIiwiY29udGFpbmVyIiwic3RhdGUiLCJnZXRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb25maWciLCJzZXR0aW5ncyIsInNob3dQb3BvdXRJY29uIiwic2hvd01heGltaXNlSWNvbiIsInNob3dDbG9zZUljb24iLCJjb250ZW50IiwidHlwZSIsImhlaWdodCIsImNvbXBvbmVudE5hbWUiLCJjb21wb25lbnRTdGF0ZSIsImlzQ2xvc2FibGUiLCJnb2xkZW5Jbml0IiwibGF5b3V0IiwiR29sZGVuTGF5b3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZ2lzdGVyQ29tcG9uZW50IiwibWFyZ2luIiwiZmxleCIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwid2hpdGVTcGFjZSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ3NEO0FBQ3REO0FBQ0E7QUFDdUM7QUFDTjtBQUNLO0FBQ3RDOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLG1FQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLG9FQUFLLEVBQUMiLCJmaWxlIjoiMS5ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBleHRyYSBDU1MgaW1wb3J0cyBwcm9iYWJseSB3b3VsZCBnbyBvdmVyIHBvb3JseSB3aXRoIHR5cGVzY3JpcHQsIHNvIHdlIGV4cG9zZVxuLy8gYSBzbWFsbGVyIGludGVyZmFjZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvZGVtaXJyb3IvQ29kZU1pcnJvci9pc3N1ZXMvNTQ4NFxuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSBcImNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuanNcIjtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdXJ2aXZlanMtZGVtb3MvcmVhY3QtZGVtb3MvYmxvYi9tYXN0ZXIvZGVtb3MvaW5kZXguanNcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1Njg1MDI5L2NvZGVtaXJyb3Itd2l0aC12YW5pbGxhLXR5cGVzY3JpcHQtYW5kLXdlYnBhY2tcbmltcG9ydCBcImNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvZ2FzL2dhc1wiO1xuaW1wb3J0IFwiY29kZW1pcnJvci90aGVtZS9lbGVnYW50LmNzc1wiO1xuLy8gaW1wb3J0IFwiY29kZW1pcnJvci90aGVtZS9tb25va2FpLmNzc1wiO1xuXG5jb25zdCBTVE9SQUdFX01BSU5fRklMRV9LRVkgPSBcIm1haW5maWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2RlTWlycm9yV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIFRPRE8gZGVmaW5lIGN1c3RvbSB0eXBlcyBmb3IgUklTQy1WIGV0Yy5cbiAgICAvLyBHQVMgc3VwcG9ydHMgQVJNIGFuZCB4ODYtNjRcbiAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlXCIpO1xuICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgc2V0IGluc3RlYWQgb2YgdGhlIFwidmFsdWVcIiBwYXJhbWV0ZXIgb2YgdGhlIGNtIGNvbnN0cnVjdG9yXG4gICAgdGV4dEFyZWEudmFsdWUgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfTUFJTl9GSUxFX0tFWSk7XG4gICAgbGV0IGNtID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGV4dEFyZWEsIHtcbiAgICAgIG1vZGU6IFwiZ2FzXCIsXG4gICAgICBsaW5lTnVtYmVyczogXCJ0cnVlXCIsXG4gICAgICB0aGVtZTogXCJlbGVnYW50XCIsXG4gICAgfSk7XG4gICAgQ29kZU1pcnJvci5jb21tYW5kcy5zYXZlID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZCBmaWxlIGF0IFwiICsgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKSk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9O1xuICAgIHRoaXMuY29kZU1pcnJvciA9IGNtO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlTWlycm9yLmdldFZhbHVlKCk7XG4gIH1cblxuICAvLyBTYXZlcyB0aGUgdGV4dCBvZiB0aGUgbWFpbiBmaWxlIGluIGxvY2FsIHN0b3JhZ2UgZm9yIHRoZSB0aW1lIGJlaW5nXG4gIC8vIHRoaXMgd2lsbCBjaGFuZ2Ugd2hlbiBtdWx0aXBsZSBmaWxlcyBiZWNvbWUgc3VwcG9ydGVkXG4gIHNhdmUoKSB7XG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX01BSU5fRklMRV9LRVksIHRoaXMuZ2V0UHJvZ3JhbSgpKTtcbiAgfVxufVxuIiwiLy8gSlF1ZXJ5IGlzIHJlcXVpcmVkIGZvciBHb2xkZW5MYXlvdXQsIG1lYW5pbmcgaXQncyBhdmFpbGFibGUgZXZlbiBpZiBpdCdzIG5vdCBhIGRpcmVjdCBkZXBlbmRlbmN5XG5pbXBvcnQgXCJqcXVlcnlcIjtcbmltcG9ydCBHb2xkZW5MYXlvdXQgZnJvbSBcImdvbGRlbi1sYXlvdXRcIjtcbmltcG9ydCBcImdvbGRlbi1sYXlvdXQvc3JjL2Nzcy9nb2xkZW5sYXlvdXQtYmFzZS5jc3NcIjtcbmltcG9ydCBcImdvbGRlbi1sYXlvdXQvc3JjL2Nzcy9nb2xkZW5sYXlvdXQtbGlnaHQtdGhlbWUuY3NzXCI7XG4vLyBOZWVkZWQgZm9yIEpTWFxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi9uby1yZWFjdFwiO1xuXG4vLyBUYWtlcyBpbiBhIGZ1bmN0aW9uIG9mIHRoZSBmb3JtICgoc3RhdGUpID0+IGpzeCkgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGdvbGRlbiBjb250YWluZXJcbi8vXG4vLyBUaGUgc2Vjb25kIGFyZyB0byByZWdpc3RlckNvbXBvbmVudCBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uIGtleXdvcmQsIG5vdCBhIGxhbWJkYVxuLy8gYmVjYXVzZSByZWFzb25zXG5jb25zdCBnb2xkZW5Db21wb25lbnQgPSAoanN4Rm4pID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb250YWluZXIsIHN0YXRlKSB7XG4gICAgY29udGFpbmVyLmdldEVsZW1lbnQoKVswXS5hcHBlbmRDaGlsZChqc3hGbihzdGF0ZSkpO1xuICB9O1xufTtcblxuY29uc3QgY29uZmlnID0ge1xuICBzZXR0aW5nczoge1xuICAgIHNob3dQb3BvdXRJY29uOiBmYWxzZSxcbiAgICBzaG93TWF4aW1pc2VJY29uOiBmYWxzZSxcbiAgICBzaG93Q2xvc2VJY29uOiBmYWxzZSxcbiAgfSxcbiAgY29udGVudDogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwicm93XCIsXG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiY29sdW1uXCIsXG4gICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lOiBcImVkaXRvclwiLFxuICAgICAgICAgICAgICBjb21wb25lbnRTdGF0ZToge30sXG4gICAgICAgICAgICAgIGlzQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZTogXCJlcnJvcnNcIixcbiAgICAgICAgICAgICAgY29tcG9uZW50U3RhdGU6IHt9LFxuICAgICAgICAgICAgICBpc0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwic3RhY2tcIixcbiAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgY29tcG9uZW50U3RhdGU6IHt9LFxuICAgICAgICAgICAgICBpc0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IFwiY29uc29sZVwiLFxuICAgICAgICAgICAgICBjb21wb25lbnRTdGF0ZToge30sXG4gICAgICAgICAgICAgIGlzQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IGdvbGRlbkluaXQgPSAoKSA9PiB7XG4gIGxldCBsYXlvdXQgPSBuZXcgR29sZGVuTGF5b3V0KFxuICAgIGNvbmZpZyxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbGRlbi1iYXNlXCIpXG4gICk7XG4gIGxheW91dC5yZWdpc3RlckNvbXBvbmVudChcbiAgICBcImVkaXRvclwiLFxuICAgIGdvbGRlbkNvbXBvbmVudCgoKSA9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogVE9ETyBwdXQgdGhpcyBpbiBhIHRvb2xiYXIgKi99XG4gICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCIgY2xhc3NOYW1lPVwiZmxleFJvd1wiIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46IFwiMC41ZW1cIixcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImFzc2VtYmxlXCI+QXNzZW1ibGU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic3RlcFwiPlN0ZXA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwicnVuXCI+UnVuPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInJlc2V0XCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogNn19PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJjb2RlXCJcbiAgICAgICAgICByb3dzPVwiMjBcIlxuICAgICAgICAgIGNvbHM9XCI4MFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIGNvZGUgaGVyZVwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgKSlcbiAgKTtcbiAgbGF5b3V0LnJlZ2lzdGVyQ29tcG9uZW50KFxuICAgIFwiY29uc29sZVwiLFxuICAgIGdvbGRlbkNvbXBvbmVudCgoKSA9PiAoXG4gICAgICAvLyBGcmFnbWVudCBpc24ndCBpbXBsZW1lbnRlZCA6KFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q29sXCI+XG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgbWFyZ2luTGVmdDogXCIwLjVlbVwiIH19PlxuICAgICAgICAgIFByb2dyYW0gZXhpdGVkIHdpdGggY29kZSA8c3BhbiBpZD1cImV4aXQtY29kZVwiPi0tPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwic3Rkb3V0XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29uc29sZSBvdXRwdXQgYXBwZWFycyBoZXJlXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxLCBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICApKVxuICApO1xuICBsYXlvdXQucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgXCJlcnJvcnNcIixcbiAgICBnb2xkZW5Db21wb25lbnQoKCkgPT4gKFxuICAgICAgPHByZVxuICAgICAgICBpZD1cImNvbXBpbGUtZXJyb3JzXCJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjVlbVwiLCBtYXJnaW5SaWdodDogXCIwLjVlbVwiLCBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgID48L3ByZT5cbiAgICApKVxuICApO1xuICBsYXlvdXQucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgXCJzdGF0ZVwiLFxuICAgIGdvbGRlbkNvbXBvbmVudCgoKSA9PiAoXG4gICAgICA8dGV4dGFyZWEgaWQ9XCJzaW0tc3RhdGVcIiBjbGFzc05hbWU9XCJmbGV4Q29sXCJcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwcm9ncmFtIHN0YXRlIGFwcGVhcnMgaGVyZSBkdXJpbmcgc2ltdWxhdGlvbiAtLSBwcmVzcyBhc3NlbWJsZSAmIHN0ZXAgdG8gYmVnaW5cIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAuNWVtXCJcbiAgICAgICAgfX0+XG4gICAgICA8L3RleHRhcmVhPlxuICAgICkpXG4gICk7XG4gIGxheW91dC5pbml0KCk7XG59O1xuIiwiaW1wb3J0IHsgaW5pdCBhcyBkdW5hX2luaXQsIFNpbVN0YXRlLCBTaW1TbmFwc2hvdCB9IGZyb20gXCJkdW5hX3dlYlwiO1xuaW1wb3J0IHsgbWVtb3J5IH0gZnJvbSBcImR1bmFfd2ViL2R1bmFfd2ViX2JnLndhc21cIjtcbmltcG9ydCB7IENvZGVNaXJyb3JXcmFwcGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb2RlbWlycm9yXCI7XG5pbXBvcnQgeyBnb2xkZW5Jbml0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9nb2xkZW4uanN4XCI7XG5cbmR1bmFfaW5pdCgpO1xuLy8gQWxsIERPTSBtYW5pcHVsYXRpb24gbXVzdCBvY2N1ciBhZnRlciBnb2xkZW5Jbml0XG5nb2xkZW5Jbml0KCk7XG5sZXQgY20gPSBuZXcgQ29kZU1pcnJvcldyYXBwZXIoKTtcblxubGV0IHNpbVN0YXRlID0gU2ltU3RhdGUubmV3KCk7XG5cbmNvbnNvbGUubG9nKFwiWW91J3JlIHJ1bm5pbmcgdGhlIGR1bmEgc2ltdWxhdG9yLCB2ZXJzaW9uXCIsIEJVSUxEX1ZFUlNJT04pO1xuXG5jb25zdCBhc3NlbWJsZVByb2dyYW0gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXBpbGVFcnJvcnMgPSA8SFRNTFByZUVsZW1lbnQ+KFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGlsZS1lcnJvcnNcIilcbiAgKTtcbiAgY29uc3QgcHJvZ3JhbSA9IGNtLmdldFByb2dyYW0oKTtcbiAgc2ltU3RhdGUuYXNzZW1ibGUocHJvZ3JhbSk7XG4gIGxldCBlcnJzID0gc2ltU3RhdGUuZ2V0X2Vycm9ycygpO1xuICBjb21waWxlRXJyb3JzLmlubmVyVGV4dCA9IGVycnMgPz8gXCJObyBlcnJvcnMhXCI7XG4gIGlmICghZXJycykge1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBzdGRvdXQgPSA8SFRNTFRleHRBcmVhRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZG91dFwiKTtcbiAgY29uc3QgZXhpdENvZGUgPSA8SFRNTFNwYW5FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhpdC1jb2RlXCIpO1xuICBsZXQgZWMgPSBzaW1TdGF0ZS5yZXN1bHQoKTtcbiAgZXhpdENvZGUuaW5uZXJUZXh0ID0gZWM/LnRvU3RyaW5nKCkgPz8gXCItLVwiO1xuICBsZXQgc3Rkb3V0VGV4dCA9IHNpbVN0YXRlLnN0ZG91dCgpO1xuICBzdGRvdXQudmFsdWUgPSBzdGRvdXRUZXh0ID8/IFwiXCI7XG4gIGxldCBzbmFwc2hvdCA9IHNpbVN0YXRlLnNuYXBzaG90KCk7XG4gIGNvbnN0IHN0YXRlID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW0tc3RhdGVcIik7XG4gIHN0YXRlLnZhbHVlID0gc25hcHNob3RcbiAgICA/IChgUEM6ICR7c25hcHNob3QuY3Vycl9wYygpfVxcbmAgK1xuICAgICAgYG5leHQgaW5zdHJ1Y3Rpb246ICR7c25hcHNob3QuY3Vycl9pbnN0KCl9XFxuXFxuYCArXG4gICAgICBgJHtzbmFwc2hvdC5yZWdfZHVtcCgpfWApXG4gICAgOiBcIlwiIDtcbn1cblxuY29uc3Qgc3RlcCA9ICgpID0+IHtcbiAgc2ltU3RhdGUuc3RlcCgpXG4gIHVwZGF0ZVN0YXRlKCk7XG59O1xuXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gIHNpbVN0YXRlLnJ1bigpO1xuICB1cGRhdGVTdGF0ZSgpO1xufTtcblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIHNpbVN0YXRlLnJlc2V0KCk7XG4gIHVwZGF0ZVN0YXRlKCk7XG59XG5cbmNvbnN0IGFzc2VtYmxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NlbWJsZVwiKTtcbmFzc2VtYmxlQnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4gYXNzZW1ibGVQcm9ncmFtKCk7XG5cbmNvbnN0IHN0ZXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXBcIik7XG5zdGVwQnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4gc3RlcCgpO1xuXG5jb25zdCBydW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1blwiKTtcbnJ1bkJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHJ1bigpO1xuXG5jb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRcIik7XG5yZXNldEJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHJlc2V0KCk7XG5cblxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuICBjbS5zYXZlKCk7XG59O1xuIiwiLy8gQWxsb3dzIHRoZSB1c2FnZSBvZiBKU1ggd2l0aG91dCB0b28gbXVjaCBwYWluLlxuLy8gQ29weS9wYXN0ZWQgZnJvbSBoZXJlLCB3aXRoIG1vZGlmaWNhdGlvbnM6XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDQzMDk4Mi9jYW4taS11c2UtanN4LXdpdGhvdXQtcmVhY3QtdG8taW5saW5lLWh0bWwtaW4tc2NyaXB0XG5cbmNvbnN0IFJlYWN0ID0ge1xuICAvLyBGcmFnbWVudDogZnVuY3Rpb24ocHJvcHMsIG5hbWVzKSB7XG5cbiAgLy8gfSxcblxuICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRycywgY2hpbGRyZW4pIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChuYW1lICYmIGF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlN0eWxlIHZhbHVlIGV4cGVjdGVkIEpTIG9iamVjdCwgZ290XCIsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5ld192YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgZm9yIChsZXQgW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQga2V5cyBmcm9tIGNhbWVsIGNhc2UgdG8gaHlwaGVuYXRlZFxuICAgICAgICAgICAgc3R5bGVLZXkgPSBzdHlsZUtleS5yZXBsYWNlKFxuICAgICAgICAgICAgICAvW0EtWl0vZyxcbiAgICAgICAgICAgICAgKG1hdGNoKSA9PiBcIi1cIiArIG1hdGNoLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuZXdfdmFsdWUgKz0gc3R5bGVLZXkgKyBcIjogXCIgKyBzdHlsZVZhbHVlICsgXCI7IFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICAgICAgICBuYW1lID0gXCJjbGFzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNoaWxkLm5vZGVUeXBlID09IG51bGxcbiAgICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgOiBjaGlsZFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=