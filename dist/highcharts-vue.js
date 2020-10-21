(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("highcharts"));
	else if(typeof define === 'function' && define.amd)
		define(["highcharts"], factory);
	else if(typeof exports === 'object')
		exports["HighchartsVue"] = factory(require("highcharts"));
	else
		root["HighchartsVue"] = factory(root["Highcharts"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__498__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 72:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Chart": () => /* binding */ Chart,
  "default": () => /* binding */ install
});

// EXTERNAL MODULE: external {"root":"Highcharts","commonjs":"highcharts","commonjs2":"highcharts","amd":"highcharts"}
var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_ = __webpack_require__(498);
var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default = /*#__PURE__*/__webpack_require__.n(external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_);

// CONCATENATED MODULE: ./utils/tools.js


function doCopy(copy, original, copyArray) {
  // Callback function to iterate on array or object elements
  function callback(value, key) {
    // Copy the contents of objects
    if (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isObject(value, !copyArray) && !external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isClass(value) && !external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isDOMElement(value)) {
      copy[key] = doCopy(copy[key] || external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isArray(value) ? [] : {}, value, copyArray);
    } else {
      // Primitives are copied over directly
      copy[key] = original[key];
    }
  }

  if (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isArray(original)) {
    original.forEach(callback);
  } else {
    external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().objectEach(original, callback);
  }

  return copy;
}

var copyObject = function copyObject(obj, copyArray) {
  return doCopy({}, obj, copyArray);
};


// CONCATENATED MODULE: ./src/component.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var generateVueComponent = function generateVueComponent(Highcharts) {
  return {
    template: '<div ref="chart"></div>',
    render: function render(createElement) {
      return createElement('div', {
        ref: 'chart'
      });
    },
    props: {
      constructorType: {
        type: String,
        "default": 'chart'
      },
      options: {
        type: Object,
        required: true
      },
      callback: Function,
      updateArgs: {
        type: Array,
        "default": function _default() {
          return [true, true];
        }
      },
      highcharts: {
        type: Object
      },
      deepCopyOnUpdate: {
        type: Boolean,
        "default": true
      }
    },
    watch: {
      options: {
        handler: function handler(newValue) {
          var _this$chart;

          (_this$chart = this.chart).update.apply(_this$chart, [copyObject(newValue, this.deepCopyOnUpdate)].concat(_toConsumableArray(this.updateArgs)));
        },
        deep: true
      }
    },
    mounted: function mounted() {
      var HC = this.highcharts || Highcharts; // Check wheather the chart configuration object is passed, as well as the constructor is valid

      if (this.options && HC[this.constructorType]) {
        this.chart = HC[this.constructorType](this.$refs.chart, copyObject(this.options, true), // Always pass the deep copy when generating a chart. #80
        this.callback ? this.callback : null);
      } else {
        !this.options ? console.warn('The "options" parameter was not passed.') : console.warn("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported."));
      }
    },
    beforeDestroy: function beforeDestroy() {
      // Destroy chart if exists
      if (this.chart) {
        this.chart.destroy();
      }
    }
  };
};

/* harmony default export */ const component = (generateVueComponent);
// CONCATENATED MODULE: ./src/index.js


var Chart = component((external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default()));
function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.component(options.tagName || 'highcharts', component(options.highcharts || (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default())));
}


/***/ }),

/***/ 498:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__498__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(72);
/******/ })()
;
});