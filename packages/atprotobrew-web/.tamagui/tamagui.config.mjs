import { createRequire as __cr } from "module"; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "../../node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    __name(_typeof2, "_typeof");
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "../../node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function toPrimitive(t2, r) {
      if ("object" != _typeof2(t2) || !t2) return t2;
      var e = t2[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t2, r || "default");
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t2);
    }
    __name(toPrimitive, "toPrimitive");
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "../../node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t2) {
      var i = toPrimitive(t2, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    __name(toPropertyKey, "toPropertyKey");
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t2) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t2,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t2, e;
    }
    __name(_defineProperty, "_defineProperty");
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
  "../../node_modules/@babel/runtime/helpers/objectSpread2.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function ownKeys(e, r) {
      var t2 = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t2.push.apply(t2, o);
      }
      return t2;
    }
    __name(ownKeys, "ownKeys");
    function _objectSpread24(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t2 = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
          defineProperty(e, r2, t2[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
        });
      }
      return e;
    }
    __name(_objectSpread24, "_objectSpread2");
    module.exports = _objectSpread24, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose14(r, e) {
      if (null == r) return {};
      var t2 = {};
      for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t2[n] = r[n];
      }
      return t2;
    }
    __name(_objectWithoutPropertiesLoose14, "_objectWithoutPropertiesLoose");
    module.exports = _objectWithoutPropertiesLoose14, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/react-native-web/node_modules/@react-native/normalize-colors/index.js
var require_normalize_colors = __commonJS({
  "../../node_modules/react-native-web/node_modules/@react-native/normalize-colors/index.js"(exports, module) {
    "use strict";
    function normalizeColor6(color) {
      if (typeof color === "number") {
        if (color >>> 0 === color && color >= 0 && color <= 4294967295) {
          return color;
        }
        return null;
      }
      if (typeof color !== "string") {
        return null;
      }
      const matchers = getMatchers();
      let match;
      if (match = matchers.hex6.exec(color)) {
        return parseInt(match[1] + "ff", 16) >>> 0;
      }
      const colorFromKeyword = normalizeKeyword(color);
      if (colorFromKeyword != null) {
        return colorFromKeyword;
      }
      if (match = matchers.rgb.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        255) >>> // a
        0;
      }
      if (match = matchers.rgba.exec(color)) {
        if (match[6] !== void 0) {
          return (parse255(match[6]) << 24 | // r
          parse255(match[7]) << 16 | // g
          parse255(match[8]) << 8 | // b
          parse1(match[9])) >>> // a
          0;
        }
        return (parse255(match[2]) << 24 | // r
        parse255(match[3]) << 16 | // g
        parse255(match[4]) << 8 | // b
        parse1(match[5])) >>> // a
        0;
      }
      if (match = matchers.hex3.exec(color)) {
        return parseInt(
          match[1] + match[1] + // r
          match[2] + match[2] + // g
          match[3] + match[3] + // b
          "ff",
          // a
          16
        ) >>> 0;
      }
      if (match = matchers.hex8.exec(color)) {
        return parseInt(match[1], 16) >>> 0;
      }
      if (match = matchers.hex4.exec(color)) {
        return parseInt(
          match[1] + match[1] + // r
          match[2] + match[2] + // g
          match[3] + match[3] + // b
          match[4] + match[4],
          // a
          16
        ) >>> 0;
      }
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb(
          parse360(match[1]),
          // h
          parsePercentage(match[2]),
          // s
          parsePercentage(match[3])
          // l
        ) | 255) >>> // a
        0;
      }
      if (match = matchers.hsla.exec(color)) {
        if (match[6] !== void 0) {
          return (hslToRgb(
            parse360(match[6]),
            // h
            parsePercentage(match[7]),
            // s
            parsePercentage(match[8])
            // l
          ) | parse1(match[9])) >>> // a
          0;
        }
        return (hslToRgb(
          parse360(match[2]),
          // h
          parsePercentage(match[3]),
          // s
          parsePercentage(match[4])
          // l
        ) | parse1(match[5])) >>> // a
        0;
      }
      if (match = matchers.hwb.exec(color)) {
        return (hwbToRgb(
          parse360(match[1]),
          // h
          parsePercentage(match[2]),
          // w
          parsePercentage(match[3])
          // b
        ) | 255) >>> // a
        0;
      }
      return null;
    }
    __name(normalizeColor6, "normalizeColor");
    function hue2rgb(p, q, t2) {
      if (t2 < 0) {
        t2 += 1;
      }
      if (t2 > 1) {
        t2 -= 1;
      }
      if (t2 < 1 / 6) {
        return p + (q - p) * 6 * t2;
      }
      if (t2 < 1 / 2) {
        return q;
      }
      if (t2 < 2 / 3) {
        return p + (q - p) * (2 / 3 - t2) * 6;
      }
      return p;
    }
    __name(hue2rgb, "hue2rgb");
    function hslToRgb(h, s, l) {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = hue2rgb(p, q, h + 1 / 3);
      const g = hue2rgb(p, q, h);
      const b = hue2rgb(p, q, h - 1 / 3);
      return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
    }
    __name(hslToRgb, "hslToRgb");
    function hwbToRgb(h, w2, b) {
      if (w2 + b >= 1) {
        const gray = Math.round(w2 * 255 / (w2 + b));
        return gray << 24 | gray << 16 | gray << 8;
      }
      const red = hue2rgb(0, 1, h + 1 / 3) * (1 - w2 - b) + w2;
      const green = hue2rgb(0, 1, h) * (1 - w2 - b) + w2;
      const blue = hue2rgb(0, 1, h - 1 / 3) * (1 - w2 - b) + w2;
      return Math.round(red * 255) << 24 | Math.round(green * 255) << 16 | Math.round(blue * 255) << 8;
    }
    __name(hwbToRgb, "hwbToRgb");
    var NUMBER = "[-+]?\\d*\\.?\\d+";
    var PERCENTAGE = NUMBER + "%";
    function call(...args) {
      return "\\(\\s*(" + args.join(")\\s*,?\\s*(") + ")\\s*\\)";
    }
    __name(call, "call");
    function callWithSlashSeparator(...args) {
      return "\\(\\s*(" + args.slice(0, args.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + args[args.length - 1] + ")\\s*\\)";
    }
    __name(callWithSlashSeparator, "callWithSlashSeparator");
    function commaSeparatedCall(...args) {
      return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
    }
    __name(commaSeparatedCall, "commaSeparatedCall");
    var cachedMatchers;
    function getMatchers() {
      if (cachedMatchers === void 0) {
        cachedMatchers = {
          rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
          rgba: new RegExp(
            "rgba(" + commaSeparatedCall(NUMBER, NUMBER, NUMBER, NUMBER) + "|" + callWithSlashSeparator(NUMBER, NUMBER, NUMBER, NUMBER) + ")"
          ),
          hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
          hsla: new RegExp(
            "hsla(" + commaSeparatedCall(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + "|" + callWithSlashSeparator(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + ")"
          ),
          hwb: new RegExp("hwb" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
          hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#([0-9a-fA-F]{6})$/,
          hex8: /^#([0-9a-fA-F]{8})$/
        };
      }
      return cachedMatchers;
    }
    __name(getMatchers, "getMatchers");
    function parse255(str) {
      const int = parseInt(str, 10);
      if (int < 0) {
        return 0;
      }
      if (int > 255) {
        return 255;
      }
      return int;
    }
    __name(parse255, "parse255");
    function parse360(str) {
      const int = parseFloat(str);
      return (int % 360 + 360) % 360 / 360;
    }
    __name(parse360, "parse360");
    function parse1(str) {
      const num = parseFloat(str);
      if (num < 0) {
        return 0;
      }
      if (num > 1) {
        return 255;
      }
      return Math.round(num * 255);
    }
    __name(parse1, "parse1");
    function parsePercentage(str) {
      const int = parseFloat(str);
      if (int < 0) {
        return 0;
      }
      if (int > 100) {
        return 1;
      }
      return int / 100;
    }
    __name(parsePercentage, "parsePercentage");
    function normalizeKeyword(name) {
      switch (name) {
        case "transparent":
          return 0;
        // http://www.w3.org/TR/css3-color/#svg-color
        case "aliceblue":
          return 4042850303;
        case "antiquewhite":
          return 4209760255;
        case "aqua":
          return 16777215;
        case "aquamarine":
          return 2147472639;
        case "azure":
          return 4043309055;
        case "beige":
          return 4126530815;
        case "bisque":
          return 4293182719;
        case "black":
          return 255;
        case "blanchedalmond":
          return 4293643775;
        case "blue":
          return 65535;
        case "blueviolet":
          return 2318131967;
        case "brown":
          return 2771004159;
        case "burlywood":
          return 3736635391;
        case "burntsienna":
          return 3934150143;
        case "cadetblue":
          return 1604231423;
        case "chartreuse":
          return 2147418367;
        case "chocolate":
          return 3530104575;
        case "coral":
          return 4286533887;
        case "cornflowerblue":
          return 1687547391;
        case "cornsilk":
          return 4294499583;
        case "crimson":
          return 3692313855;
        case "cyan":
          return 16777215;
        case "darkblue":
          return 35839;
        case "darkcyan":
          return 9145343;
        case "darkgoldenrod":
          return 3095792639;
        case "darkgray":
          return 2846468607;
        case "darkgreen":
          return 6553855;
        case "darkgrey":
          return 2846468607;
        case "darkkhaki":
          return 3182914559;
        case "darkmagenta":
          return 2332068863;
        case "darkolivegreen":
          return 1433087999;
        case "darkorange":
          return 4287365375;
        case "darkorchid":
          return 2570243327;
        case "darkred":
          return 2332033279;
        case "darksalmon":
          return 3918953215;
        case "darkseagreen":
          return 2411499519;
        case "darkslateblue":
          return 1211993087;
        case "darkslategray":
          return 793726975;
        case "darkslategrey":
          return 793726975;
        case "darkturquoise":
          return 13554175;
        case "darkviolet":
          return 2483082239;
        case "deeppink":
          return 4279538687;
        case "deepskyblue":
          return 12582911;
        case "dimgray":
          return 1768516095;
        case "dimgrey":
          return 1768516095;
        case "dodgerblue":
          return 512819199;
        case "firebrick":
          return 2988581631;
        case "floralwhite":
          return 4294635775;
        case "forestgreen":
          return 579543807;
        case "fuchsia":
          return 4278255615;
        case "gainsboro":
          return 3705462015;
        case "ghostwhite":
          return 4177068031;
        case "gold":
          return 4292280575;
        case "goldenrod":
          return 3668254975;
        case "gray":
          return 2155905279;
        case "green":
          return 8388863;
        case "greenyellow":
          return 2919182335;
        case "grey":
          return 2155905279;
        case "honeydew":
          return 4043305215;
        case "hotpink":
          return 4285117695;
        case "indianred":
          return 3445382399;
        case "indigo":
          return 1258324735;
        case "ivory":
          return 4294963455;
        case "khaki":
          return 4041641215;
        case "lavender":
          return 3873897215;
        case "lavenderblush":
          return 4293981695;
        case "lawngreen":
          return 2096890111;
        case "lemonchiffon":
          return 4294626815;
        case "lightblue":
          return 2916673279;
        case "lightcoral":
          return 4034953471;
        case "lightcyan":
          return 3774873599;
        case "lightgoldenrodyellow":
          return 4210742015;
        case "lightgray":
          return 3553874943;
        case "lightgreen":
          return 2431553791;
        case "lightgrey":
          return 3553874943;
        case "lightpink":
          return 4290167295;
        case "lightsalmon":
          return 4288707327;
        case "lightseagreen":
          return 548580095;
        case "lightskyblue":
          return 2278488831;
        case "lightslategray":
          return 2005441023;
        case "lightslategrey":
          return 2005441023;
        case "lightsteelblue":
          return 2965692159;
        case "lightyellow":
          return 4294959359;
        case "lime":
          return 16711935;
        case "limegreen":
          return 852308735;
        case "linen":
          return 4210091775;
        case "magenta":
          return 4278255615;
        case "maroon":
          return 2147483903;
        case "mediumaquamarine":
          return 1724754687;
        case "mediumblue":
          return 52735;
        case "mediumorchid":
          return 3126187007;
        case "mediumpurple":
          return 2473647103;
        case "mediumseagreen":
          return 1018393087;
        case "mediumslateblue":
          return 2070474495;
        case "mediumspringgreen":
          return 16423679;
        case "mediumturquoise":
          return 1221709055;
        case "mediumvioletred":
          return 3340076543;
        case "midnightblue":
          return 421097727;
        case "mintcream":
          return 4127193855;
        case "mistyrose":
          return 4293190143;
        case "moccasin":
          return 4293178879;
        case "navajowhite":
          return 4292783615;
        case "navy":
          return 33023;
        case "oldlace":
          return 4260751103;
        case "olive":
          return 2155872511;
        case "olivedrab":
          return 1804477439;
        case "orange":
          return 4289003775;
        case "orangered":
          return 4282712319;
        case "orchid":
          return 3664828159;
        case "palegoldenrod":
          return 4008225535;
        case "palegreen":
          return 2566625535;
        case "paleturquoise":
          return 2951671551;
        case "palevioletred":
          return 3681588223;
        case "papayawhip":
          return 4293907967;
        case "peachpuff":
          return 4292524543;
        case "peru":
          return 3448061951;
        case "pink":
          return 4290825215;
        case "plum":
          return 3718307327;
        case "powderblue":
          return 2967529215;
        case "purple":
          return 2147516671;
        case "rebeccapurple":
          return 1714657791;
        case "red":
          return 4278190335;
        case "rosybrown":
          return 3163525119;
        case "royalblue":
          return 1097458175;
        case "saddlebrown":
          return 2336560127;
        case "salmon":
          return 4202722047;
        case "sandybrown":
          return 4104413439;
        case "seagreen":
          return 780883967;
        case "seashell":
          return 4294307583;
        case "sienna":
          return 2689740287;
        case "silver":
          return 3233857791;
        case "skyblue":
          return 2278484991;
        case "slateblue":
          return 1784335871;
        case "slategray":
          return 1887473919;
        case "slategrey":
          return 1887473919;
        case "snow":
          return 4294638335;
        case "springgreen":
          return 16744447;
        case "steelblue":
          return 1182971135;
        case "tan":
          return 3535047935;
        case "teal":
          return 8421631;
        case "thistle":
          return 3636451583;
        case "tomato":
          return 4284696575;
        case "turquoise":
          return 1088475391;
        case "violet":
          return 4001558271;
        case "wheat":
          return 4125012991;
        case "white":
          return 4294967295;
        case "whitesmoke":
          return 4126537215;
        case "yellow":
          return 4294902015;
        case "yellowgreen":
          return 2597139199;
      }
      return null;
    }
    __name(normalizeKeyword, "normalizeKeyword");
    module.exports = normalizeColor6;
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js
var require_capitalizeString = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = capitalizeString;
    function capitalizeString(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    __name(capitalizeString, "capitalizeString");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/prefixProperty.js
var require_prefixProperty = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/prefixProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prefixProperty;
    var _capitalizeString = require_capitalizeString();
    var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function prefixProperty(prefixProperties, property, style) {
      var requiredPrefixes = prefixProperties[property];
      if (requiredPrefixes && style.hasOwnProperty(property)) {
        var capitalizedProperty = (0, _capitalizeString2.default)(property);
        for (var i = 0; i < requiredPrefixes.length; ++i) {
          var prefixedProperty = requiredPrefixes[i] + capitalizedProperty;
          if (!style[prefixedProperty]) {
            style[prefixedProperty] = style[property];
          }
        }
      }
      return style;
    }
    __name(prefixProperty, "prefixProperty");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/prefixValue.js
var require_prefixValue = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/prefixValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prefixValue;
    function prefixValue(plugins, property, value, style, metaData) {
      for (var i = 0, len = plugins.length; i < len; ++i) {
        var processedValue = plugins[i](property, value, style, metaData);
        if (processedValue) {
          return processedValue;
        }
      }
    }
    __name(prefixValue, "prefixValue");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js
var require_addNewValuesOnly = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addNewValuesOnly;
    function addIfNew(list, value) {
      if (list.indexOf(value) === -1) {
        list.push(value);
      }
    }
    __name(addIfNew, "addIfNew");
    function addNewValuesOnly(list, values) {
      if (Array.isArray(values)) {
        for (var i = 0, len = values.length; i < len; ++i) {
          addIfNew(list, values[i]);
        }
      } else {
        addIfNew(list, values);
      }
    }
    __name(addNewValuesOnly, "addNewValuesOnly");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isObject;
    function isObject(value) {
      return value instanceof Object && !Array.isArray(value);
    }
    __name(isObject, "isObject");
  }
});

// ../../node_modules/inline-style-prefixer/lib/createPrefixer.js
var require_createPrefixer = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/createPrefixer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createPrefixer2;
    var _prefixProperty = require_prefixProperty();
    var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
    var _prefixValue = require_prefixValue();
    var _prefixValue2 = _interopRequireDefault(_prefixValue);
    var _addNewValuesOnly = require_addNewValuesOnly();
    var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
    var _isObject = require_isObject();
    var _isObject2 = _interopRequireDefault(_isObject);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function createPrefixer2(_ref) {
      var prefixMap = _ref.prefixMap, plugins = _ref.plugins;
      return /* @__PURE__ */ __name(function prefix(style) {
        for (var property in style) {
          var value = style[property];
          if ((0, _isObject2.default)(value)) {
            style[property] = prefix(value);
          } else if (Array.isArray(value)) {
            var combinedValue = [];
            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);
            if (_processedValue) {
              style[property] = _processedValue;
            }
            style = (0, _prefixProperty2.default)(prefixMap, property, style);
          }
        }
        return style;
      }, "prefix");
    }
    __name(createPrefixer2, "createPrefixer");
  }
});

// ../../node_modules/css-in-js-utils/es/assignStyle.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = /* @__PURE__ */ __name(function _typeof2(obj2) {
      return typeof obj2;
    }, "_typeof");
  } else {
    _typeof = /* @__PURE__ */ __name(function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, "_typeof");
  }
  return _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function filterUniqueArray(arr) {
  return arr.filter(function(val, index) {
    return arr.lastIndexOf(val) === index;
  });
}
function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? void 0 : arguments[i + 1];
    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];
      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }
        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }
        if (_typeof(value) === "object") {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }
      base[property] = value;
    }
  }
  return base;
}
var init_assignStyle = __esm({
  "../../node_modules/css-in-js-utils/es/assignStyle.js"() {
    __name(_typeof, "_typeof");
    __name(_toConsumableArray, "_toConsumableArray");
    __name(_nonIterableSpread, "_nonIterableSpread");
    __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    __name(_iterableToArray, "_iterableToArray");
    __name(_arrayWithoutHoles, "_arrayWithoutHoles");
    __name(_arrayLikeToArray, "_arrayLikeToArray");
    __name(filterUniqueArray, "filterUniqueArray");
    __name(assignStyle, "assignStyle");
  }
});

// ../../node_modules/css-in-js-utils/es/camelCaseProperty.js
function toUpper(match) {
  return match[1].toUpperCase();
}
function camelCaseProperty(property) {
  if (cache2.hasOwnProperty(property)) {
    return cache2[property];
  }
  var camelProp = property.replace(DASH, toUpper).replace(MS, "ms");
  cache2[property] = camelProp;
  return camelProp;
}
var DASH, MS, cache2;
var init_camelCaseProperty = __esm({
  "../../node_modules/css-in-js-utils/es/camelCaseProperty.js"() {
    DASH = /-([a-z])/g;
    MS = /^Ms/g;
    cache2 = {};
    __name(toUpper, "toUpper");
    __name(camelCaseProperty, "camelCaseProperty");
  }
});

// ../../node_modules/hyphenate-style-name/index.js
var hyphenate_style_name_exports = {};
__export(hyphenate_style_name_exports, {
  default: () => hyphenate_style_name_default
});
function toHyphenLower2(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName2(name) {
  if (cache3.hasOwnProperty(name)) {
    return cache3[name];
  }
  var hName = name.replace(uppercasePattern2, toHyphenLower2);
  return cache3[name] = msPattern2.test(hName) ? "-" + hName : hName;
}
var uppercasePattern2, msPattern2, cache3, hyphenate_style_name_default;
var init_hyphenate_style_name = __esm({
  "../../node_modules/hyphenate-style-name/index.js"() {
    uppercasePattern2 = /[A-Z]/g;
    msPattern2 = /^ms-/;
    cache3 = {};
    __name(toHyphenLower2, "toHyphenLower");
    __name(hyphenateStyleName2, "hyphenateStyleName");
    hyphenate_style_name_default = hyphenateStyleName2;
  }
});

// ../../node_modules/css-in-js-utils/es/hyphenateProperty.js
function hyphenateProperty(property) {
  return hyphenate_style_name_default(property);
}
var init_hyphenateProperty = __esm({
  "../../node_modules/css-in-js-utils/es/hyphenateProperty.js"() {
    init_hyphenate_style_name();
    __name(hyphenateProperty, "hyphenateProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/cssifyDeclaration.js
function cssifyDeclaration(property, value) {
  return hyphenateProperty(property) + ":" + value;
}
var init_cssifyDeclaration = __esm({
  "../../node_modules/css-in-js-utils/es/cssifyDeclaration.js"() {
    init_hyphenateProperty();
    __name(cssifyDeclaration, "cssifyDeclaration");
  }
});

// ../../node_modules/css-in-js-utils/es/cssifyObject.js
function cssifyObject(style) {
  var css = "";
  for (var property in style) {
    var value = style[property];
    if (typeof value !== "string" && typeof value !== "number") {
      continue;
    }
    if (css) {
      css += ";";
    }
    css += cssifyDeclaration(property, value);
  }
  return css;
}
var init_cssifyObject = __esm({
  "../../node_modules/css-in-js-utils/es/cssifyObject.js"() {
    init_cssifyDeclaration();
    __name(cssifyObject, "cssifyObject");
  }
});

// ../../node_modules/css-in-js-utils/es/isPrefixedProperty.js
function isPrefixedProperty(property) {
  return RE.test(property);
}
var RE;
var init_isPrefixedProperty = __esm({
  "../../node_modules/css-in-js-utils/es/isPrefixedProperty.js"() {
    RE = /^(Webkit|Moz|O|ms)/;
    __name(isPrefixedProperty, "isPrefixedProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/isPrefixedValue.js
function isPrefixedValue(value) {
  return typeof value === "string" && RE2.test(value);
}
var RE2;
var init_isPrefixedValue = __esm({
  "../../node_modules/css-in-js-utils/es/isPrefixedValue.js"() {
    RE2 = /-webkit-|-moz-|-ms-/;
    __name(isPrefixedValue, "isPrefixedValue");
  }
});

// ../../node_modules/css-in-js-utils/es/isUnitlessProperty.js
function getPrefixedProperty(prefix, property) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1);
}
function isUnitlessProperty(property) {
  return unitlessProperties.hasOwnProperty(property);
}
var unitlessProperties, prefixedUnitlessProperties, prefixes2, property, j, jLen, i, len, _property;
var init_isUnitlessProperty = __esm({
  "../../node_modules/css-in-js-utils/es/isUnitlessProperty.js"() {
    init_hyphenateProperty();
    unitlessProperties = {
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    prefixedUnitlessProperties = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"];
    prefixes2 = ["Webkit", "ms", "Moz", "O"];
    __name(getPrefixedProperty, "getPrefixedProperty");
    for (i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
      property = prefixedUnitlessProperties[i];
      unitlessProperties[property] = true;
      for (j = 0, jLen = prefixes2.length; j < jLen; ++j) {
        unitlessProperties[getPrefixedProperty(prefixes2[j], property)] = true;
      }
    }
    for (_property in unitlessProperties) {
      unitlessProperties[hyphenateProperty(_property)] = true;
    }
    __name(isUnitlessProperty, "isUnitlessProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/unprefixProperty.js
function unprefixProperty(property) {
  var propertyWithoutPrefix = property.replace(RE3, "");
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}
var RE3;
var init_unprefixProperty = __esm({
  "../../node_modules/css-in-js-utils/es/unprefixProperty.js"() {
    RE3 = /^(ms|Webkit|Moz|O)/;
    __name(unprefixProperty, "unprefixProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/normalizeProperty.js
function normalizeProperty(property) {
  return unprefixProperty(camelCaseProperty(property));
}
var init_normalizeProperty = __esm({
  "../../node_modules/css-in-js-utils/es/normalizeProperty.js"() {
    init_camelCaseProperty();
    init_unprefixProperty();
    __name(normalizeProperty, "normalizeProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/resolveArrayValue.js
function resolveArrayValue(property, value) {
  return value.join(";" + hyphenateProperty(property) + ":");
}
var init_resolveArrayValue = __esm({
  "../../node_modules/css-in-js-utils/es/resolveArrayValue.js"() {
    init_hyphenateProperty();
    __name(resolveArrayValue, "resolveArrayValue");
  }
});

// ../../node_modules/css-in-js-utils/es/unprefixValue.js
function unprefixValue(value) {
  if (typeof value === "string") {
    return value.replace(RE4, "");
  }
  return value;
}
var RE4;
var init_unprefixValue = __esm({
  "../../node_modules/css-in-js-utils/es/unprefixValue.js"() {
    RE4 = /(-ms-|-webkit-|-moz-|-o-)/g;
    __name(unprefixValue, "unprefixValue");
  }
});

// ../../node_modules/css-in-js-utils/es/index.js
var es_exports = {};
__export(es_exports, {
  assignStyle: () => assignStyle,
  camelCaseProperty: () => camelCaseProperty,
  cssifyDeclaration: () => cssifyDeclaration,
  cssifyObject: () => cssifyObject,
  hyphenateProperty: () => hyphenateProperty,
  isPrefixedProperty: () => isPrefixedProperty,
  isPrefixedValue: () => isPrefixedValue,
  isUnitlessProperty: () => isUnitlessProperty,
  normalizeProperty: () => normalizeProperty,
  resolveArrayValue: () => resolveArrayValue,
  unprefixProperty: () => unprefixProperty,
  unprefixValue: () => unprefixValue
});
var init_es = __esm({
  "../../node_modules/css-in-js-utils/es/index.js"() {
    init_assignStyle();
    init_camelCaseProperty();
    init_cssifyDeclaration();
    init_cssifyObject();
    init_hyphenateProperty();
    init_isPrefixedProperty();
    init_isPrefixedValue();
    init_isUnitlessProperty();
    init_normalizeProperty();
    init_resolveArrayValue();
    init_unprefixProperty();
    init_unprefixValue();
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/crossFade.js
var require_crossFade = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/crossFade.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = crossFade2;
    var _cssInJsUtils = (init_es(), __toCommonJS(es_exports));
    var CROSS_FADE_REGEX = /cross-fade\(/g;
    var prefixes4 = ["-webkit-", ""];
    function crossFade2(property, value) {
      if (typeof value === "string" && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf("cross-fade(") !== -1) {
        return prefixes4.map(function(prefix) {
          return value.replace(CROSS_FADE_REGEX, prefix + "cross-fade(");
        });
      }
    }
    __name(crossFade2, "crossFade");
  }
});

// ../../node_modules/css-in-js-utils/lib/isPrefixedValue.js
var require_isPrefixedValue = __commonJS({
  "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = isPrefixedValue2;
    var RE5 = /-webkit-|-moz-|-ms-/;
    function isPrefixedValue2(value) {
      return typeof value === "string" && RE5.test(value);
    }
    __name(isPrefixedValue2, "isPrefixedValue");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/imageSet.js
var require_imageSet = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/imageSet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = imageSet2;
    var _isPrefixedValue = require_isPrefixedValue();
    var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var prefixes4 = ["-webkit-", ""];
    function imageSet2(property, value) {
      if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("image-set(") > -1) {
        return prefixes4.map(function(prefix) {
          return value.replace(/image-set\(/g, prefix + "image-set(");
        });
      }
    }
    __name(imageSet2, "imageSet");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/logical.js
var require_logical = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/logical.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = logical2;
    var alternativeProps = {
      marginBlockStart: ["WebkitMarginBefore"],
      marginBlockEnd: ["WebkitMarginAfter"],
      marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
      marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
      paddingBlockStart: ["WebkitPaddingBefore"],
      paddingBlockEnd: ["WebkitPaddingAfter"],
      paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
      paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
      borderBlockStart: ["WebkitBorderBefore"],
      borderBlockStartColor: ["WebkitBorderBeforeColor"],
      borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
      borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
      borderBlockEnd: ["WebkitBorderAfter"],
      borderBlockEndColor: ["WebkitBorderAfterColor"],
      borderBlockEndStyle: ["WebkitBorderAfterStyle"],
      borderBlockEndWidth: ["WebkitBorderAfterWidth"],
      borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
      borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
      borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
      borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
      borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
      borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
      borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
      borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
    };
    function logical2(property, value, style) {
      if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
        var alternativePropList = alternativeProps[property];
        for (var i = 0, len = alternativePropList.length; i < len; ++i) {
          style[alternativePropList[i]] = value;
        }
      }
    }
    __name(logical2, "logical");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/position.js
var require_position = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/position.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = position2;
    function position2(property, value) {
      if (property === "position" && value === "sticky") {
        return ["-webkit-sticky", "sticky"];
      }
    }
    __name(position2, "position");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/sizing.js
var require_sizing = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/sizing.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = sizing2;
    var prefixes4 = ["-webkit-", "-moz-", ""];
    var properties = {
      maxHeight: true,
      maxWidth: true,
      width: true,
      height: true,
      columnWidth: true,
      minWidth: true,
      minHeight: true
    };
    var values = {
      "min-content": true,
      "max-content": true,
      "fill-available": true,
      "fit-content": true,
      "contain-floats": true
    };
    function sizing2(property, value) {
      if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
        return prefixes4.map(function(prefix) {
          return prefix + value;
        });
      }
    }
    __name(sizing2, "sizing");
  }
});

// ../../node_modules/css-in-js-utils/lib/hyphenateProperty.js
var require_hyphenateProperty = __commonJS({
  "../../node_modules/css-in-js-utils/lib/hyphenateProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = hyphenateProperty2;
    var _hyphenateStyleName = (init_hyphenate_style_name(), __toCommonJS(hyphenate_style_name_exports));
    var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function hyphenateProperty2(property) {
      return (0, _hyphenateStyleName2["default"])(property);
    }
    __name(hyphenateProperty2, "hyphenateProperty");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/transition.js
var require_transition = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/transition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = transition2;
    var _hyphenateProperty = require_hyphenateProperty();
    var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
    var _isPrefixedValue = require_isPrefixedValue();
    var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
    var _capitalizeString = require_capitalizeString();
    var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var properties = {
      transition: true,
      transitionProperty: true,
      WebkitTransition: true,
      WebkitTransitionProperty: true,
      MozTransition: true,
      MozTransitionProperty: true
    };
    var prefixMapping = {
      Webkit: "-webkit-",
      Moz: "-moz-",
      ms: "-ms-"
    };
    function prefixValue(value, propertyPrefixMap) {
      if ((0, _isPrefixedValue2.default)(value)) {
        return value;
      }
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
      for (var i = 0, len = multipleValues.length; i < len; ++i) {
        var singleValue = multipleValues[i];
        var values = [singleValue];
        for (var property in propertyPrefixMap) {
          var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
          if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== "order") {
            var prefixes4 = propertyPrefixMap[property];
            for (var j = 0, pLen = prefixes4.length; j < pLen; ++j) {
              values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes4[j]] + dashCaseProperty));
            }
          }
        }
        multipleValues[i] = values.join(",");
      }
      return multipleValues.join(",");
    }
    __name(prefixValue, "prefixValue");
    function transition2(property, value, style, propertyPrefixMap) {
      if (typeof value === "string" && properties.hasOwnProperty(property)) {
        var outputValue = prefixValue(value, propertyPrefixMap);
        var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
          return !/-moz-|-ms-/.test(val);
        }).join(",");
        if (property.indexOf("Webkit") > -1) {
          return webkitOutput;
        }
        var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
          return !/-webkit-|-ms-/.test(val);
        }).join(",");
        if (property.indexOf("Moz") > -1) {
          return mozOutput;
        }
        style["Webkit" + (0, _capitalizeString2.default)(property)] = webkitOutput;
        style["Moz" + (0, _capitalizeString2.default)(property)] = mozOutput;
        return outputValue;
      }
    }
    __name(transition2, "transition");
  }
});

// ../../node_modules/styleq/dist/transform-localize-style.js
var require_transform_localize_style = __commonJS({
  "../../node_modules/styleq/dist/transform-localize-style.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.localizeStyle = localizeStyle2;
    var cache6 = /* @__PURE__ */ new WeakMap();
    var markerProp = "$$css$localize";
    function compileStyle(style, isRTL) {
      var compiledStyle = {};
      for (var prop in style) {
        if (prop !== markerProp) {
          var value = style[prop];
          if (Array.isArray(value)) {
            compiledStyle[prop] = isRTL ? value[1] : value[0];
          } else {
            compiledStyle[prop] = value;
          }
        }
      }
      return compiledStyle;
    }
    __name(compileStyle, "compileStyle");
    function localizeStyle2(style, isRTL) {
      if (style[markerProp] != null) {
        var compiledStyleIndex = isRTL ? 1 : 0;
        if (cache6.has(style)) {
          var _cachedStyles = cache6.get(style);
          var _compiledStyle = _cachedStyles[compiledStyleIndex];
          if (_compiledStyle == null) {
            _compiledStyle = compileStyle(style, isRTL);
            _cachedStyles[compiledStyleIndex] = _compiledStyle;
            cache6.set(style, _cachedStyles);
          }
          return _compiledStyle;
        }
        var compiledStyle = compileStyle(style, isRTL);
        var cachedStyles = new Array(2);
        cachedStyles[compiledStyleIndex] = compiledStyle;
        cache6.set(style, cachedStyles);
        return compiledStyle;
      }
      return style;
    }
    __name(localizeStyle2, "localizeStyle");
  }
});

// ../../node_modules/styleq/transform-localize-style.js
var require_transform_localize_style2 = __commonJS({
  "../../node_modules/styleq/transform-localize-style.js"(exports, module) {
    module.exports = require_transform_localize_style();
  }
});

// ../../node_modules/styleq/dist/styleq.js
var require_styleq = __commonJS({
  "../../node_modules/styleq/dist/styleq.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styleq = void 0;
    var cache6 = /* @__PURE__ */ new WeakMap();
    var compiledKey = "$$css";
    function createStyleq(options) {
      var disableCache;
      var disableMix;
      var transform;
      if (options != null) {
        disableCache = options.disableCache === true;
        disableMix = options.disableMix === true;
        transform = options.transform;
      }
      return /* @__PURE__ */ __name(function styleq3() {
        var definedProperties = [];
        var className = "";
        var inlineStyle = null;
        var nextCache = disableCache ? null : cache6;
        var styles9 = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
          styles9[i] = arguments[i];
        }
        while (styles9.length > 0) {
          var possibleStyle = styles9.pop();
          if (possibleStyle == null || possibleStyle === false) {
            continue;
          }
          if (Array.isArray(possibleStyle)) {
            for (var _i = 0; _i < possibleStyle.length; _i++) {
              styles9.push(possibleStyle[_i]);
            }
            continue;
          }
          var style = transform != null ? transform(possibleStyle) : possibleStyle;
          if (style.$$css) {
            var classNameChunk = "";
            if (nextCache != null && nextCache.has(style)) {
              var cacheEntry = nextCache.get(style);
              if (cacheEntry != null) {
                classNameChunk = cacheEntry[0];
                definedProperties.push.apply(definedProperties, cacheEntry[1]);
                nextCache = cacheEntry[2];
              }
            } else {
              var definedPropertiesChunk = [];
              for (var prop in style) {
                var value = style[prop];
                if (prop === compiledKey) continue;
                if (typeof value === "string" || value === null) {
                  if (!definedProperties.includes(prop)) {
                    definedProperties.push(prop);
                    if (nextCache != null) {
                      definedPropertiesChunk.push(prop);
                    }
                    if (typeof value === "string") {
                      classNameChunk += classNameChunk ? " " + value : value;
                    }
                  }
                } else {
                  console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
                }
              }
              if (nextCache != null) {
                var weakMap = /* @__PURE__ */ new WeakMap();
                nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
                nextCache = weakMap;
              }
            }
            if (classNameChunk) {
              className = className ? classNameChunk + " " + className : classNameChunk;
            }
          } else {
            if (disableMix) {
              if (inlineStyle == null) {
                inlineStyle = {};
              }
              inlineStyle = Object.assign({}, style, inlineStyle);
            } else {
              var subStyle = null;
              for (var _prop in style) {
                var _value = style[_prop];
                if (_value !== void 0) {
                  if (!definedProperties.includes(_prop)) {
                    if (_value != null) {
                      if (inlineStyle == null) {
                        inlineStyle = {};
                      }
                      if (subStyle == null) {
                        subStyle = {};
                      }
                      subStyle[_prop] = _value;
                    }
                    definedProperties.push(_prop);
                    nextCache = null;
                  }
                }
              }
              if (subStyle != null) {
                inlineStyle = Object.assign(subStyle, inlineStyle);
              }
            }
          }
        }
        var styleProps2 = [className, inlineStyle];
        return styleProps2;
      }, "styleq");
    }
    __name(createStyleq, "createStyleq");
    var styleq2 = createStyleq();
    exports.styleq = styleq2;
    styleq2.factory = createStyleq;
  }
});

// ../../node_modules/postcss-value-parser/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/postcss-value-parser/lib/parse.js"(exports, module) {
    var openParentheses = "(".charCodeAt(0);
    var closeParentheses = ")".charCodeAt(0);
    var singleQuote = "'".charCodeAt(0);
    var doubleQuote = '"'.charCodeAt(0);
    var backslash = "\\".charCodeAt(0);
    var slash = "/".charCodeAt(0);
    var comma = ",".charCodeAt(0);
    var colon = ":".charCodeAt(0);
    var star = "*".charCodeAt(0);
    var uLower = "u".charCodeAt(0);
    var uUpper = "U".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var isUnicodeRange = /^[a-f0-9?-]+$/i;
    module.exports = function(input) {
      var tokens2 = [];
      var value = input;
      var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
      var pos = 0;
      var code = value.charCodeAt(pos);
      var max = value.length;
      var stack = [{ nodes: tokens2 }];
      var balanced = 0;
      var parent;
      var name = "";
      var before = "";
      var after = "";
      while (pos < max) {
        if (code <= 32) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          token = value.slice(pos, next);
          prev = tokens2[tokens2.length - 1];
          if (code === closeParentheses && balanced) {
            after = token;
          } else if (prev && prev.type === "div") {
            prev.after = token;
            prev.sourceEndIndex += token.length;
          } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) {
            before = token;
          } else {
            tokens2.push({
              type: "space",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        } else if (code === singleQuote || code === doubleQuote) {
          next = pos;
          quote = code === singleQuote ? "'" : '"';
          token = {
            type: "string",
            sourceIndex: pos,
            quote
          };
          do {
            escape = false;
            next = value.indexOf(quote, next + 1);
            if (~next) {
              escapePos = next;
              while (value.charCodeAt(escapePos - 1) === backslash) {
                escapePos -= 1;
                escape = !escape;
              }
            } else {
              value += quote;
              next = value.length - 1;
              token.unclosed = true;
            }
          } while (escape);
          token.value = value.slice(pos + 1, next);
          token.sourceEndIndex = token.unclosed ? next : next + 1;
          tokens2.push(token);
          pos = next + 1;
          code = value.charCodeAt(pos);
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
          next = value.indexOf("*/", pos);
          token = {
            type: "comment",
            sourceIndex: pos,
            sourceEndIndex: next + 2
          };
          if (next === -1) {
            token.unclosed = true;
            next = value.length;
            token.sourceEndIndex = next;
          }
          token.value = value.slice(pos + 2, next);
          tokens2.push(token);
          pos = next + 2;
          code = value.charCodeAt(pos);
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
          token = value[pos];
          tokens2.push({
            type: "word",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token
          });
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (code === slash || code === comma || code === colon) {
          token = value[pos];
          tokens2.push({
            type: "div",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token,
            before,
            after: ""
          });
          before = "";
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (openParentheses === code) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          parenthesesOpenPos = pos;
          token = {
            type: "function",
            sourceIndex: pos - name.length,
            value: name,
            before: value.slice(parenthesesOpenPos + 1, next)
          };
          pos = next;
          if (name === "url" && code !== singleQuote && code !== doubleQuote) {
            next -= 1;
            do {
              escape = false;
              next = value.indexOf(")", next + 1);
              if (~next) {
                escapePos = next;
                while (value.charCodeAt(escapePos - 1) === backslash) {
                  escapePos -= 1;
                  escape = !escape;
                }
              } else {
                value += ")";
                next = value.length - 1;
                token.unclosed = true;
              }
            } while (escape);
            whitespacePos = next;
            do {
              whitespacePos -= 1;
              code = value.charCodeAt(whitespacePos);
            } while (code <= 32);
            if (parenthesesOpenPos < whitespacePos) {
              if (pos !== whitespacePos + 1) {
                token.nodes = [
                  {
                    type: "word",
                    sourceIndex: pos,
                    sourceEndIndex: whitespacePos + 1,
                    value: value.slice(pos, whitespacePos + 1)
                  }
                ];
              } else {
                token.nodes = [];
              }
              if (token.unclosed && whitespacePos + 1 !== next) {
                token.after = "";
                token.nodes.push({
                  type: "space",
                  sourceIndex: whitespacePos + 1,
                  sourceEndIndex: next,
                  value: value.slice(whitespacePos + 1, next)
                });
              } else {
                token.after = value.slice(whitespacePos + 1, next);
                token.sourceEndIndex = next;
              }
            } else {
              token.after = "";
              token.nodes = [];
            }
            pos = next + 1;
            token.sourceEndIndex = token.unclosed ? next : pos;
            code = value.charCodeAt(pos);
            tokens2.push(token);
          } else {
            balanced += 1;
            token.after = "";
            token.sourceEndIndex = pos + 1;
            tokens2.push(token);
            stack.push(token);
            tokens2 = token.nodes = [];
            parent = token;
          }
          name = "";
        } else if (closeParentheses === code && balanced) {
          pos += 1;
          code = value.charCodeAt(pos);
          parent.after = after;
          parent.sourceEndIndex += after.length;
          after = "";
          balanced -= 1;
          stack[stack.length - 1].sourceEndIndex = pos;
          stack.pop();
          parent = stack[balanced];
          tokens2 = parent.nodes;
        } else {
          next = pos;
          do {
            if (code === backslash) {
              next += 1;
            }
            next += 1;
            code = value.charCodeAt(next);
          } while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
          token = value.slice(pos, next);
          if (openParentheses === code) {
            name = token;
          } else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) {
            tokens2.push({
              type: "unicode-range",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          } else {
            tokens2.push({
              type: "word",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        }
      }
      for (pos = stack.length - 1; pos; pos -= 1) {
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
      }
      return stack[0].nodes;
    };
  }
});

// ../../node_modules/postcss-value-parser/lib/walk.js
var require_walk = __commonJS({
  "../../node_modules/postcss-value-parser/lib/walk.js"(exports, module) {
    module.exports = /* @__PURE__ */ __name(function walk(nodes, cb, bubble) {
      var i, max, node, result;
      for (i = 0, max = nodes.length; i < max; i += 1) {
        node = nodes[i];
        if (!bubble) {
          result = cb(node, i, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
          walk(node.nodes, cb, bubble);
        }
        if (bubble) {
          cb(node, i, nodes);
        }
      }
    }, "walk");
  }
});

// ../../node_modules/postcss-value-parser/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/postcss-value-parser/lib/stringify.js"(exports, module) {
    function stringifyNode(node, custom) {
      var type = node.type;
      var value = node.value;
      var buf;
      var customResult;
      if (custom && (customResult = custom(node)) !== void 0) {
        return customResult;
      } else if (type === "word" || type === "space") {
        return value;
      } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
      } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
      } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
      } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") {
          return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
      }
      return value;
    }
    __name(stringifyNode, "stringifyNode");
    function stringify(nodes, custom) {
      var result, i;
      if (Array.isArray(nodes)) {
        result = "";
        for (i = nodes.length - 1; ~i; i -= 1) {
          result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
      }
      return stringifyNode(nodes, custom);
    }
    __name(stringify, "stringify");
    module.exports = stringify;
  }
});

// ../../node_modules/postcss-value-parser/lib/unit.js
var require_unit = __commonJS({
  "../../node_modules/postcss-value-parser/lib/unit.js"(exports, module) {
    var minus = "-".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var dot = ".".charCodeAt(0);
    var exp = "e".charCodeAt(0);
    var EXP = "E".charCodeAt(0);
    function likeNumber(value) {
      var code = value.charCodeAt(0);
      var nextCode;
      if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code >= 48 && code <= 57) {
        return true;
      }
      return false;
    }
    __name(likeNumber, "likeNumber");
    module.exports = function(value) {
      var pos = 0;
      var length = value.length;
      var code;
      var nextCode;
      var nextNextCode;
      if (length === 0 || !likeNumber(value)) {
        return false;
      }
      code = value.charCodeAt(pos);
      if (code === plus || code === minus) {
        pos++;
      }
      while (pos < length) {
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) {
          break;
        }
        pos += 1;
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      nextNextCode = value.charCodeAt(pos + 2);
      if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
      };
    };
  }
});

// ../../node_modules/postcss-value-parser/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/postcss-value-parser/lib/index.js"(exports, module) {
    var parse = require_parse();
    var walk = require_walk();
    var stringify = require_stringify();
    function ValueParser(value) {
      if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
      }
      return new ValueParser(value);
    }
    __name(ValueParser, "ValueParser");
    ValueParser.prototype.toString = function() {
      return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
    };
    ValueParser.prototype.walk = function(cb, bubble) {
      walk(this.nodes, cb, bubble);
      return this;
    };
    ValueParser.unit = require_unit();
    ValueParser.walk = walk;
    ValueParser.stringify = stringify;
    module.exports = ValueParser;
  }
});

// ../../node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends13() {
      return module.exports = _extends13 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t2 = arguments[e];
          for (var r in t2) ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
        }
        return n;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends13.apply(null, arguments);
    }
    __name(_extends13, "_extends");
    module.exports = _extends13, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/fbjs/lib/invariant.js
var require_invariant = __commonJS({
  "../../node_modules/fbjs/lib/invariant.js"(exports, module) {
    "use strict";
    var validateFormat = process.env.NODE_ENV !== "production" ? function(format) {
      if (format === void 0) {
        throw new Error("invariant(...): Second argument must be a string.");
      }
    } : function(format) {
    };
    function invariant22(condition, format) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      validateFormat(format);
      if (!condition) {
        var error2;
        if (format === void 0) {
          error2 = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var argIndex = 0;
          error2 = new Error(format.replace(/%s/g, function() {
            return String(args[argIndex++]);
          }));
          error2.name = "Invariant Violation";
        }
        error2.framesToPop = 1;
        throw error2;
      }
    }
    __name(invariant22, "invariant");
    module.exports = invariant22;
  }
});

// ../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    function _arrayLikeToArray2(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    __name(_arrayLikeToArray2, "_arrayLikeToArray");
    module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray2(r, a) {
      if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t2 = {}.toString.call(r).slice(8, -1);
        return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? arrayLikeToArray(r, a) : void 0;
      }
    }
    __name(_unsupportedIterableToArray2, "_unsupportedIterableToArray");
    module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@babel/runtime/helpers/createForOfIteratorHelperLoose.js
var require_createForOfIteratorHelperLoose = __commonJS({
  "../../node_modules/@babel/runtime/helpers/createForOfIteratorHelperLoose.js"(exports, module) {
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    function _createForOfIteratorHelperLoose6(r, e) {
      var t2 = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (t2) return (t2 = t2.call(r)).next.bind(t2);
      if (Array.isArray(r) || (t2 = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t2 && (r = t2);
        var o = 0;
        return function() {
          return o >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[o++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    __name(_createForOfIteratorHelperLoose6, "_createForOfIteratorHelperLoose");
    module.exports = _createForOfIteratorHelperLoose6, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/fbjs/lib/emptyFunction.js
var require_emptyFunction = __commonJS({
  "../../node_modules/fbjs/lib/emptyFunction.js"(exports, module) {
    "use strict";
    function makeEmptyFunction(arg) {
      return function() {
        return arg;
      };
    }
    __name(makeEmptyFunction, "makeEmptyFunction");
    var emptyFunction2 = /* @__PURE__ */ __name(function emptyFunction3() {
    }, "emptyFunction");
    emptyFunction2.thatReturns = makeEmptyFunction;
    emptyFunction2.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction2.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction2.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction2.thatReturnsThis = function() {
      return this;
    };
    emptyFunction2.thatReturnsArgument = function(arg) {
      return arg;
    };
    module.exports = emptyFunction2;
  }
});

// ../../node_modules/fbjs/lib/warning.js
var require_warning = __commonJS({
  "../../node_modules/fbjs/lib/warning.js"(exports, module) {
    "use strict";
    var emptyFunction2 = require_emptyFunction();
    function printWarning(format) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var argIndex = 0;
      var message = "Warning: " + format.replace(/%s/g, function() {
        return args[argIndex++];
      });
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    }
    __name(printWarning, "printWarning");
    var warning2 = process.env.NODE_ENV !== "production" ? function(condition, format) {
      if (format === void 0) {
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        printWarning.apply(void 0, [format].concat(args));
      }
    } : emptyFunction2;
    module.exports = warning2;
  }
});

// ../../node_modules/nullthrows/nullthrows.js
var require_nullthrows = __commonJS({
  "../../node_modules/nullthrows/nullthrows.js"(exports, module) {
    "use strict";
    function nullthrows2(x, message) {
      if (x != null) {
        return x;
      }
      var error2 = new Error(message !== void 0 ? message : "Got unexpected " + x);
      error2.framesToPop = 1;
      throw error2;
    }
    __name(nullthrows2, "nullthrows");
    module.exports = nullthrows2;
    module.exports.default = nullthrows2;
    Object.defineProperty(module.exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@tamagui/themes/dist/esm/generated-v5.mjs
function t(a) {
  let res = {};
  for (const [ki, vi] of a) {
    res[ks[ki]] = colors[vi];
  }
  return res;
}
__name(t, "t");
var colors = ["hsla(0, 0%, 10%, 1)", "hsla(0, 0%, 67%, 1)", "hsla(0, 0%, 100%, 0)", "hsla(0, 0%, 97%, 0.2)", "hsla(0, 0%, 97%, 0.4)", "hsla(0, 0%, 97%, 0.6)", "hsla(0, 0%, 97%, 0.8)", "hsla(0, 0%, 100%, 1)", "hsla(0, 0%, 97%, 1)", "hsla(0, 0%, 93%, 1)", "hsla(0, 0%, 85%, 1)", "hsla(0, 0%, 80%, 1)", "hsla(0, 0%, 70%, 1)", "hsla(0, 0%, 59%, 1)", "hsla(0, 0%, 45%, 1)", "hsla(0, 0%, 30%, 1)", "hsla(0, 0%, 20%, 1)", "hsla(0, 0%, 14%, 1)", "hsla(0, 0%, 2%, 1)", "hsla(0, 0%, 2%, 0)", "hsla(0, 0%, 2%, 0.2)", "hsla(0, 0%, 2%, 0.4)", "hsla(0, 0%, 2%, 0.6)", "hsla(0, 0%, 2%, 0.8)", "#090909", "#151515", "#191919", "#232323", "#333", "#444", "#666", "#777", "#858585", "#aaa", "#ccc", "#ffffff", "#fff", "#f8f8f8", "hsl(0, 0%, 93%)", "hsl(0, 0%, 85%)", "hsl(0, 0%, 80%)", "hsl(0, 0%, 70%)", "hsl(0, 0%, 59%)", "hsl(0, 0%, 45%)", "hsl(0, 0%, 30%)", "hsl(0, 0%, 20%)", "hsl(0, 0%, 14%)", "hsl(0, 0%, 2%)", "rgba(255,255,255,1)", "rgba(255,255,255,0)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.8)", "rgba(0,0,0,1)", "rgba(0,0,0,0)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)", "rgba(0,0,0,0.04)", "rgba(0,0,0,0.08)", "rgba(0,0,0,0.12)", "rgba(0,0,0,0.22)", "rgba(0,0,0,0.33)", "rgba(0,0,0,0.44)", "rgba(0,0,0,0.75)", "rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.55)", "rgba(255,255,255,0.7)", "rgba(255,255,255,0.85)", "#fcfcfc", "#f9f9f9", "#f0f0f0", "#e8e8e8", "#e0e0e0", "#d9d9d9", "#cecece", "#bbbbbb", "#8d8d8d", "#838383", "#646464", "#202020", "#fbfdff", "#f4faff", "#e6f4fe", "#d5efff", "#c2e5ff", "#acd8fc", "#8ec8f6", "#5eb1ef", "#0090ff", "#0588f0", "#0d74ce", "#113264", "#fffcfc", "#fff7f7", "#feebec", "#ffdbdc", "#ffcdce", "#fdbdbe", "#f4a9aa", "#eb8e90", "#e5484d", "#dc3e42", "#ce2c31", "#641723", "#fdfdf9", "#fefce9", "#fffab8", "#fff394", "#ffe770", "#f3d768", "#e4c767", "#d5ae39", "#ffe629", "#ffdc00", "#9e6c00", "#473b1f", "#fbfefc", "#f4fbf6", "#e6f6eb", "#d6f1df", "#c4e8d1", "#adddc0", "#8eceaa", "#5bb98b", "#30a46c", "#2b9a66", "#218358", "#193b2d", "#fefcfb", "#fff7ed", "#ffefd6", "#ffdfb5", "#ffd19a", "#ffc182", "#f5ae73", "#ec9455", "#f76b15", "#ef5f00", "#cc4e00", "#582d1d", "#fffcfe", "#fef7fb", "#fee9f5", "#fbdcef", "#f6cee7", "#efbfdd", "#e7acd0", "#dd93c2", "#d6409f", "#cf3897", "#c2298a", "#651249", "#fefcfe", "#fbf7fe", "#f7edfe", "#f2e2fc", "#ead5f9", "#e0c4f4", "#d1afec", "#be93e4", "#8e4ec6", "#8347b9", "#8145b5", "#402060", "#fafefd", "#f3fbf9", "#e0f8f3", "#ccf3ea", "#b8eae0", "#a1ded2", "#83cdc1", "#53b9ab", "#12a594", "#0d9b8a", "#008573", "#0d3d38", "hsl(0, 0%, 68%)", "hsl(0, 0%, 65%)", "hsl(0, 0%, 62%)", "hsl(0, 0%, 56%)", "hsl(0, 0%, 53%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 47%)", "hsl(0, 0%, 44%)", "hsl(0, 0%, 41%)", "hsl(0, 0%, 38%)", "hsl(0, 0%, 32%)", "hsla(0, 0%, 4%, 1)", "hsla(0, 0%, 8%, 1)", "hsla(0, 0%, 27%, 1)", "hsla(0, 0%, 40%, 1)", "hsla(0, 0%, 47%, 1)", "hsla(0, 0%, 52%, 1)", "hsla(0, 0%, 2%, 0.1)", "hsla(0, 0%, 2%, 0.075)", "hsla(0, 0%, 2%, 0.05)", "hsla(0, 0%, 2%, 0.025)", "hsla(0, 0%, 2%, 0.02)", "hsla(0, 0%, 2%, 0.01)", "hsla(0, 0%, 97%, 0.1)", "hsla(0, 0%, 97%, 0.075)", "hsla(0, 0%, 97%, 0.05)", "hsla(0, 0%, 97%, 0.025)", "hsla(0, 0%, 97%, 0.02)", "hsla(0, 0%, 97%, 0.01)", "hsla(0, 0%, 70%, 0.6)", "hsla(0, 0%, 4%, 0)", "hsla(0, 0%, 8%, 0.2)", "hsla(0, 0%, 8%, 0.4)", "hsla(0, 0%, 8%, 0.6)", "hsla(0, 0%, 8%, 0.8)", "hsla(0, 0%, 100%, 0.2)", "hsla(0, 0%, 100%, 0.4)", "hsla(0, 0%, 100%, 0.6)", "hsla(0, 0%, 100%, 0.8)", "rgba(0,0,0,0.15)", "rgba(0,0,0,0.23)", "rgba(0,0,0,0.45)", "rgba(0,0,0,0.65)", "rgba(0,0,0,0.9)", "rgba(255,255,255,0.45)", "rgba(255,255,255,0.65)", "rgba(255,255,255,0.95)", "#111111", "#222222", "#2a2a2a", "#313131", "#3a3a3a", "#484848", "#606060", "#6e6e6e", "#7b7b7b", "#b4b4b4", "#eeeeee", "#0d1520", "#111927", "#0d2847", "#003362", "#004074", "#104d87", "#205d9e", "#2870bd", "#3b9eff", "#70b8ff", "#c2e6ff", "#191111", "#201314", "#3b1219", "#500f1c", "#611623", "#72232d", "#8c333a", "#b54548", "#ec5d5e", "#ff9592", "#ffd1d9", "#14120b", "#1b180f", "#2d2305", "#362b00", "#433500", "#524202", "#665417", "#836a21", "#ffff57", "#f5e147", "#f6eeb4", "#0e1512", "#121b17", "#132d21", "#113b29", "#174933", "#20573e", "#28684a", "#2f7c57", "#33b074", "#3dd68c", "#b1f1cb", "#17120e", "#1e160f", "#331e0b", "#462100", "#562800", "#66350c", "#7e451d", "#a35829", "#ff801f", "#ffa057", "#ffe0c2", "#191117", "#21121d", "#37172f", "#4b143d", "#591c47", "#692955", "#833869", "#a84885", "#de51a8", "#ff8dcc", "#fdd1ea", "#18111b", "#1e1523", "#301c3b", "#3d224e", "#48295c", "#54346b", "#664282", "#8457aa", "#9a5cd0", "#d19dff", "#ecd9fa", "#0d1514", "#111c1b", "#0d2d2a", "#023b37", "#084843", "#145750", "#1c6961", "#207e73", "#0eb39e", "#0bd8b6", "#adf0dd", "hsla(0, 0%, 100%, 0.1)", "hsla(0, 0%, 100%, 0.075)", "hsla(0, 0%, 100%, 0.05)", "hsla(0, 0%, 100%, 0.025)", "hsla(0, 0%, 100%, 0.02)", "hsla(0, 0%, 100%, 0.01)", "hsla(0, 0%, 8%, 0.1)", "hsla(0, 0%, 8%, 0.075)", "hsla(0, 0%, 8%, 0.05)", "hsla(0, 0%, 8%, 0.025)", "hsla(0, 0%, 8%, 0.02)", "hsla(0, 0%, 8%, 0.01)", "hsla(0, 0%, 27%, 0.6)", "hsla(0, 0%, 99%, 0)", "hsla(0, 0%, 98%, 0.2)", "hsla(0, 0%, 98%, 0.4)", "hsla(0, 0%, 98%, 0.6)", "hsla(0, 0%, 98%, 0.8)", "hsla(0, 0%, 99%, 1)", "hsla(0, 0%, 98%, 1)", "hsla(0, 0%, 94%, 1)", "hsla(0, 0%, 91%, 1)", "hsla(0, 0%, 88%, 1)", "hsla(0, 0%, 81%, 1)", "hsla(0, 0%, 73%, 1)", "hsla(0, 0%, 55%, 1)", "hsla(0, 0%, 51%, 1)", "hsla(0, 0%, 39%, 1)", "hsla(0, 0%, 13%, 1)", "hsla(0, 0%, 13%, 0)", "hsla(0, 0%, 13%, 0.2)", "hsla(0, 0%, 13%, 0.4)", "hsla(0, 0%, 13%, 0.6)", "hsla(0, 0%, 13%, 0.8)", "hsla(0, 0%, 13%, 0.1)", "hsla(0, 0%, 13%, 0.075)", "hsla(0, 0%, 13%, 0.05)", "hsla(0, 0%, 13%, 0.025)", "hsla(0, 0%, 13%, 0.02)", "hsla(0, 0%, 13%, 0.01)", "hsla(0, 0%, 98%, 0.1)", "hsla(0, 0%, 98%, 0.075)", "hsla(0, 0%, 98%, 0.05)", "hsla(0, 0%, 98%, 0.025)", "hsla(0, 0%, 98%, 0.02)", "hsla(0, 0%, 98%, 0.01)", "hsla(0, 0%, 85%, 0.6)", "hsla(216, 100%, 99%, 0)", "hsla(207, 100%, 98%, 0.2)", "hsla(207, 100%, 98%, 0.4)", "hsla(207, 100%, 98%, 0.6)", "hsla(207, 100%, 98%, 0.8)", "hsla(210, 100%, 99%, 1)", "hsla(207, 100%, 98%, 1)", "hsla(205, 92%, 95%, 1)", "hsla(203, 100%, 92%, 1)", "hsla(206, 100%, 88%, 1)", "hsla(207, 93%, 83%, 1)", "hsla(207, 85%, 76%, 1)", "hsla(206, 82%, 65%, 1)", "hsla(206, 100%, 50%, 1)", "hsla(207, 96%, 48%, 1)", "hsla(208, 88%, 43%, 1)", "hsla(216, 71%, 23%, 1)", "hsla(216, 71%, 23%, 0)", "hsla(216, 71%, 23%, 0.2)", "hsla(216, 71%, 23%, 0.4)", "hsla(216, 71%, 23%, 0.6)", "hsla(216, 71%, 23%, 0.8)", "hsla(216, 71%, 23%, 0.1)", "hsla(216, 71%, 23%, 0.075)", "hsla(216, 71%, 23%, 0.05)", "hsla(216, 71%, 23%, 0.025)", "hsla(216, 71%, 23%, 0.02)", "hsla(216, 71%, 23%, 0.01)", "hsla(207, 100%, 98%, 0.1)", "hsla(207, 100%, 98%, 0.075)", "hsla(207, 100%, 98%, 0.05)", "hsla(207, 100%, 98%, 0.025)", "hsla(207, 100%, 98%, 0.02)", "hsla(207, 100%, 98%, 0.01)", "hsla(207, 93%, 83%, 0.6)", "hsla(0, 100%, 99%, 0)", "hsla(0, 100%, 98%, 0.2)", "hsla(0, 100%, 98%, 0.4)", "hsla(0, 100%, 98%, 0.6)", "hsla(0, 100%, 98%, 0.8)", "hsla(0, 100%, 99%, 1)", "hsla(0, 100%, 98%, 1)", "hsla(357, 90%, 96%, 1)", "hsla(358, 100%, 93%, 1)", "hsla(359, 100%, 90%, 1)", "hsla(359, 94%, 87%, 1)", "hsla(359, 77%, 81%, 1)", "hsla(359, 70%, 74%, 1)", "hsla(358, 75%, 59%, 1)", "hsla(358, 69%, 55%, 1)", "hsla(358, 65%, 49%, 1)", "hsla(351, 63%, 24%, 1)", "hsla(351, 63%, 24%, 0)", "hsla(351, 63%, 24%, 0.2)", "hsla(351, 63%, 24%, 0.4)", "hsla(351, 63%, 24%, 0.6)", "hsla(351, 63%, 24%, 0.8)", "hsla(351, 63%, 24%, 0.1)", "hsla(351, 63%, 24%, 0.075)", "hsla(351, 63%, 24%, 0.05)", "hsla(351, 63%, 24%, 0.025)", "hsla(351, 63%, 24%, 0.02)", "hsla(351, 63%, 24%, 0.01)", "hsla(0, 100%, 98%, 0.1)", "hsla(0, 100%, 98%, 0.075)", "hsla(0, 100%, 98%, 0.05)", "hsla(0, 100%, 98%, 0.025)", "hsla(0, 100%, 98%, 0.02)", "hsla(0, 100%, 98%, 0.01)", "hsla(359, 94%, 87%, 0.6)", "hsla(60, 45%, 98%, 0)", "hsla(54, 91%, 95%, 0.2)", "hsla(54, 91%, 95%, 0.4)", "hsla(54, 91%, 95%, 0.6)", "hsla(54, 91%, 95%, 0.8)", "hsla(60, 50%, 98%, 1)", "hsla(54, 91%, 95%, 1)", "hsla(56, 100%, 86%, 1)", "hsla(53, 100%, 79%, 1)", "hsla(50, 100%, 72%, 1)", "hsla(48, 85%, 68%, 1)", "hsla(46, 70%, 65%, 1)", "hsla(45, 65%, 53%, 1)", "hsla(53, 100%, 58%, 1)", "hsla(52, 100%, 50%, 1)", "hsla(41, 100%, 31%, 1)", "hsla(42, 39%, 20%, 1)", "hsla(42, 39%, 20%, 0)", "hsla(42, 39%, 20%, 0.2)", "hsla(42, 39%, 20%, 0.4)", "hsla(42, 39%, 20%, 0.6)", "hsla(42, 39%, 20%, 0.8)", "hsla(42, 39%, 20%, 0.1)", "hsla(42, 39%, 20%, 0.075)", "hsla(42, 39%, 20%, 0.05)", "hsla(42, 39%, 20%, 0.025)", "hsla(42, 39%, 20%, 0.02)", "hsla(42, 39%, 20%, 0.01)", "hsla(54, 91%, 95%, 0.1)", "hsla(54, 91%, 95%, 0.075)", "hsla(54, 91%, 95%, 0.05)", "hsla(54, 91%, 95%, 0.025)", "hsla(54, 91%, 95%, 0.02)", "hsla(54, 91%, 95%, 0.01)", "hsla(48, 85%, 68%, 0.6)", "hsla(140, 60%, 99%, 0)", "hsla(137, 47%, 97%, 0.2)", "hsla(137, 47%, 97%, 0.4)", "hsla(137, 47%, 97%, 0.6)", "hsla(137, 47%, 97%, 0.8)", "hsla(140, 60%, 99%, 1)", "hsla(137, 47%, 97%, 1)", "hsla(139, 47%, 93%, 1)", "hsla(140, 49%, 89%, 1)", "hsla(142, 44%, 84%, 1)", "hsla(144, 41%, 77%, 1)", "hsla(146, 40%, 68%, 1)", "hsla(151, 40%, 54%, 1)", "hsla(151, 55%, 42%, 1)", "hsla(152, 56%, 39%, 1)", "hsla(154, 60%, 32%, 1)", "hsla(155, 40%, 16%, 1)", "hsla(156, 41%, 16%, 0)", "hsla(156, 41%, 16%, 0.2)", "hsla(156, 41%, 16%, 0.4)", "hsla(156, 41%, 16%, 0.6)", "hsla(156, 41%, 16%, 0.8)", "hsla(156, 41%, 16%, 0.1)", "hsla(156, 41%, 16%, 0.075)", "hsla(156, 41%, 16%, 0.05)", "hsla(156, 41%, 16%, 0.025)", "hsla(156, 41%, 16%, 0.02)", "hsla(156, 41%, 16%, 0.01)", "hsla(137, 47%, 97%, 0.1)", "hsla(137, 47%, 97%, 0.075)", "hsla(137, 47%, 97%, 0.05)", "hsla(137, 47%, 97%, 0.025)", "hsla(137, 47%, 97%, 0.02)", "hsla(137, 47%, 97%, 0.01)", "hsla(144, 41%, 77%, 0.6)", "hsla(20, 60%, 99%, 0)", "hsla(33, 100%, 96%, 0.2)", "hsla(33, 100%, 96%, 0.4)", "hsla(33, 100%, 96%, 0.6)", "hsla(33, 100%, 96%, 0.8)", "hsla(20, 60%, 99%, 1)", "hsla(33, 100%, 96%, 1)", "hsla(37, 100%, 92%, 1)", "hsla(34, 100%, 85%, 1)", "hsla(33, 100%, 80%, 1)", "hsla(30, 100%, 75%, 1)", "hsla(27, 87%, 71%, 1)", "hsla(25, 80%, 63%, 1)", "hsla(23, 93%, 53%, 1)", "hsla(24, 100%, 47%, 1)", "hsla(23, 100%, 40%, 1)", "hsla(16, 50%, 23%, 1)", "hsla(16, 50%, 23%, 0)", "hsla(16, 50%, 23%, 0.2)", "hsla(16, 50%, 23%, 0.4)", "hsla(16, 50%, 23%, 0.6)", "hsla(16, 50%, 23%, 0.8)", "hsla(16, 50%, 23%, 0.1)", "hsla(16, 50%, 23%, 0.075)", "hsla(16, 50%, 23%, 0.05)", "hsla(16, 50%, 23%, 0.025)", "hsla(16, 50%, 23%, 0.02)", "hsla(16, 50%, 23%, 0.01)", "hsla(33, 100%, 96%, 0.1)", "hsla(33, 100%, 96%, 0.075)", "hsla(33, 100%, 96%, 0.05)", "hsla(33, 100%, 96%, 0.025)", "hsla(33, 100%, 96%, 0.02)", "hsla(33, 100%, 96%, 0.01)", "hsla(30, 100%, 75%, 0.6)", "hsla(324, 100%, 99%, 0)", "hsla(326, 78%, 98%, 0.2)", "hsla(326, 78%, 98%, 0.4)", "hsla(326, 78%, 98%, 0.6)", "hsla(326, 78%, 98%, 0.8)", "hsla(320, 100%, 99%, 1)", "hsla(326, 78%, 98%, 1)", "hsla(326, 91%, 95%, 1)", "hsla(323, 79%, 92%, 1)", "hsla(323, 69%, 89%, 1)", "hsla(323, 60%, 84%, 1)", "hsla(323, 55%, 79%, 1)", "hsla(322, 52%, 72%, 1)", "hsla(322, 65%, 55%, 1)", "hsla(322, 61%, 52%, 1)", "hsla(322, 65%, 46%, 1)", "hsla(320, 70%, 23%, 1)", "hsla(320, 69%, 23%, 0)", "hsla(320, 69%, 23%, 0.2)", "hsla(320, 69%, 23%, 0.4)", "hsla(320, 69%, 23%, 0.6)", "hsla(320, 69%, 23%, 0.8)", "hsla(320, 69%, 23%, 0.1)", "hsla(320, 69%, 23%, 0.075)", "hsla(320, 69%, 23%, 0.05)", "hsla(320, 69%, 23%, 0.025)", "hsla(320, 69%, 23%, 0.02)", "hsla(320, 69%, 23%, 0.01)", "hsla(326, 78%, 98%, 0.1)", "hsla(326, 78%, 98%, 0.075)", "hsla(326, 78%, 98%, 0.05)", "hsla(326, 78%, 98%, 0.025)", "hsla(326, 78%, 98%, 0.02)", "hsla(326, 78%, 98%, 0.01)", "hsla(323, 60%, 84%, 0.6)", "hsla(300, 60%, 99%, 0)", "hsla(274, 78%, 98%, 0.2)", "hsla(274, 78%, 98%, 0.4)", "hsla(274, 78%, 98%, 0.6)", "hsla(274, 78%, 98%, 0.8)", "hsla(300, 50%, 99%, 1)", "hsla(274, 78%, 98%, 1)", "hsla(275, 89%, 96%, 1)", "hsla(277, 81%, 94%, 1)", "hsla(275, 75%, 91%, 1)", "hsla(275, 69%, 86%, 1)", "hsla(273, 62%, 81%, 1)", "hsla(272, 60%, 74%, 1)", "hsla(272, 51%, 54%, 1)", "hsla(272, 45%, 50%, 1)", "hsla(272, 45%, 49%, 1)", "hsla(270, 50%, 25%, 1)", "hsla(270, 50%, 25%, 0)", "hsla(270, 50%, 25%, 0.2)", "hsla(270, 50%, 25%, 0.4)", "hsla(270, 50%, 25%, 0.6)", "hsla(270, 50%, 25%, 0.8)", "hsla(270, 50%, 25%, 0.1)", "hsla(270, 50%, 25%, 0.075)", "hsla(270, 50%, 25%, 0.05)", "hsla(270, 50%, 25%, 0.025)", "hsla(270, 50%, 25%, 0.02)", "hsla(270, 50%, 25%, 0.01)", "hsla(274, 78%, 98%, 0.1)", "hsla(274, 78%, 98%, 0.075)", "hsla(274, 78%, 98%, 0.05)", "hsla(274, 78%, 98%, 0.025)", "hsla(274, 78%, 98%, 0.02)", "hsla(274, 78%, 98%, 0.01)", "hsla(275, 69%, 86%, 0.6)", "hsla(160, 60%, 99%, 0)", "hsla(165, 50%, 97%, 0.2)", "hsla(165, 50%, 97%, 0.4)", "hsla(165, 50%, 97%, 0.6)", "hsla(165, 50%, 97%, 0.8)", "hsla(165, 67%, 99%, 1)", "hsla(165, 50%, 97%, 1)", "hsla(167, 63%, 93%, 1)", "hsla(166, 62%, 88%, 1)", "hsla(168, 54%, 82%, 1)", "hsla(168, 48%, 75%, 1)", "hsla(170, 43%, 66%, 1)", "hsla(172, 42%, 53%, 1)", "hsla(173, 80%, 36%, 1)", "hsla(173, 85%, 33%, 1)", "hsla(172, 100%, 26%, 1)", "hsla(174, 65%, 15%, 1)", "hsla(174, 66%, 15%, 0)", "hsla(174, 66%, 15%, 0.2)", "hsla(174, 66%, 15%, 0.4)", "hsla(174, 66%, 15%, 0.6)", "hsla(174, 66%, 15%, 0.8)", "hsla(174, 66%, 15%, 0.1)", "hsla(174, 66%, 15%, 0.075)", "hsla(174, 66%, 15%, 0.05)", "hsla(174, 66%, 15%, 0.025)", "hsla(174, 66%, 15%, 0.02)", "hsla(174, 66%, 15%, 0.01)", "hsla(165, 50%, 97%, 0.1)", "hsla(165, 50%, 97%, 0.075)", "hsla(165, 50%, 97%, 0.05)", "hsla(165, 50%, 97%, 0.025)", "hsla(165, 50%, 97%, 0.02)", "hsla(165, 50%, 97%, 0.01)", "hsla(168, 48%, 75%, 0.6)", "hsla(0, 0%, 68%, 0)", "hsla(0, 0%, 65%, 0.2)", "hsla(0, 0%, 65%, 0.4)", "hsla(0, 0%, 65%, 0.6)", "hsla(0, 0%, 65%, 0.8)", "hsla(0, 0%, 68%, 1)", "hsla(0, 0%, 65%, 1)", "hsla(0, 0%, 62%, 1)", "hsla(0, 0%, 56%, 1)", "hsla(0, 0%, 53%, 1)", "hsla(0, 0%, 50%, 1)", "hsla(0, 0%, 44%, 1)", "hsla(0, 0%, 41%, 1)", "hsla(0, 0%, 38%, 1)", "hsla(0, 0%, 32%, 1)", "hsla(0, 0%, 32%, 0)", "hsla(0, 0%, 32%, 0.2)", "hsla(0, 0%, 32%, 0.4)", "hsla(0, 0%, 32%, 0.6)", "hsla(0, 0%, 32%, 0.8)", "hsla(0, 0%, 32%, 0.1)", "hsla(0, 0%, 32%, 0.075)", "hsla(0, 0%, 32%, 0.05)", "hsla(0, 0%, 32%, 0.025)", "hsla(0, 0%, 32%, 0.02)", "hsla(0, 0%, 32%, 0.01)", "hsla(0, 0%, 65%, 0.1)", "hsla(0, 0%, 65%, 0.075)", "hsla(0, 0%, 65%, 0.05)", "hsla(0, 0%, 65%, 0.025)", "hsla(0, 0%, 65%, 0.02)", "hsla(0, 0%, 65%, 0.01)", "hsla(0, 0%, 53%, 0.6)", "hsla(0, 0%, 7%, 0)", "hsla(0, 0%, 10%, 0.2)", "hsla(0, 0%, 10%, 0.4)", "hsla(0, 0%, 10%, 0.6)", "hsla(0, 0%, 10%, 0.8)", "hsla(0, 0%, 7%, 1)", "hsla(0, 0%, 16%, 1)", "hsla(0, 0%, 19%, 1)", "hsla(0, 0%, 23%, 1)", "hsla(0, 0%, 28%, 1)", "hsla(0, 0%, 43%, 1)", "hsla(0, 0%, 48%, 1)", "hsla(0, 0%, 71%, 1)", "hsla(0, 0%, 93%, 0)", "hsla(0, 0%, 93%, 0.2)", "hsla(0, 0%, 93%, 0.4)", "hsla(0, 0%, 93%, 0.6)", "hsla(0, 0%, 93%, 0.8)", "hsla(0, 0%, 93%, 0.1)", "hsla(0, 0%, 93%, 0.075)", "hsla(0, 0%, 93%, 0.05)", "hsla(0, 0%, 93%, 0.025)", "hsla(0, 0%, 93%, 0.02)", "hsla(0, 0%, 93%, 0.01)", "hsla(0, 0%, 10%, 0.1)", "hsla(0, 0%, 10%, 0.075)", "hsla(0, 0%, 10%, 0.05)", "hsla(0, 0%, 10%, 0.025)", "hsla(0, 0%, 10%, 0.02)", "hsla(0, 0%, 10%, 0.01)", "hsla(0, 0%, 23%, 0.6)", "hsla(216, 43%, 9%, 0)", "hsla(218, 39%, 11%, 0.2)", "hsla(218, 39%, 11%, 0.4)", "hsla(218, 39%, 11%, 0.6)", "hsla(218, 39%, 11%, 0.8)", "hsla(215, 42%, 9%, 1)", "hsla(218, 39%, 11%, 1)", "hsla(212, 69%, 16%, 1)", "hsla(209, 100%, 19%, 1)", "hsla(207, 100%, 23%, 1)", "hsla(209, 79%, 30%, 1)", "hsla(211, 66%, 37%, 1)", "hsla(211, 65%, 45%, 1)", "hsla(210, 100%, 62%, 1)", "hsla(210, 100%, 72%, 1)", "hsla(205, 100%, 88%, 1)", "hsla(205, 100%, 88%, 0)", "hsla(205, 100%, 88%, 0.2)", "hsla(205, 100%, 88%, 0.4)", "hsla(205, 100%, 88%, 0.6)", "hsla(205, 100%, 88%, 0.8)", "hsla(205, 100%, 88%, 0.1)", "hsla(205, 100%, 88%, 0.075)", "hsla(205, 100%, 88%, 0.05)", "hsla(205, 100%, 88%, 0.025)", "hsla(205, 100%, 88%, 0.02)", "hsla(205, 100%, 88%, 0.01)", "hsla(218, 39%, 11%, 0.1)", "hsla(218, 39%, 11%, 0.075)", "hsla(218, 39%, 11%, 0.05)", "hsla(218, 39%, 11%, 0.025)", "hsla(218, 39%, 11%, 0.02)", "hsla(218, 39%, 11%, 0.01)", "hsla(209, 79%, 30%, 0.6)", "hsla(0, 17%, 8%, 0)", "hsla(355, 25%, 10%, 0.2)", "hsla(355, 25%, 10%, 0.4)", "hsla(355, 25%, 10%, 0.6)", "hsla(355, 25%, 10%, 0.8)", "hsla(0, 19%, 8%, 1)", "hsla(355, 25%, 10%, 1)", "hsla(350, 53%, 15%, 1)", "hsla(348, 68%, 19%, 1)", "hsla(350, 63%, 23%, 1)", "hsla(352, 53%, 29%, 1)", "hsla(355, 47%, 37%, 1)", "hsla(358, 45%, 49%, 1)", "hsla(360, 79%, 65%, 1)", "hsla(2, 100%, 79%, 1)", "hsla(350, 100%, 91%, 1)", "hsla(350, 100%, 91%, 0)", "hsla(350, 100%, 91%, 0.2)", "hsla(350, 100%, 91%, 0.4)", "hsla(350, 100%, 91%, 0.6)", "hsla(350, 100%, 91%, 0.8)", "hsla(350, 100%, 91%, 0.1)", "hsla(350, 100%, 91%, 0.075)", "hsla(350, 100%, 91%, 0.05)", "hsla(350, 100%, 91%, 0.025)", "hsla(350, 100%, 91%, 0.02)", "hsla(350, 100%, 91%, 0.01)", "hsla(355, 25%, 10%, 0.1)", "hsla(355, 25%, 10%, 0.075)", "hsla(355, 25%, 10%, 0.05)", "hsla(355, 25%, 10%, 0.025)", "hsla(355, 25%, 10%, 0.02)", "hsla(355, 25%, 10%, 0.01)", "hsla(352, 53%, 29%, 0.6)", "hsla(47, 29%, 6%, 0)", "hsla(45, 29%, 8%, 0.2)", "hsla(45, 29%, 8%, 0.4)", "hsla(45, 29%, 8%, 0.6)", "hsla(45, 29%, 8%, 0.8)", "hsla(47, 29%, 6%, 1)", "hsla(45, 29%, 8%, 1)", "hsla(45, 80%, 10%, 1)", "hsla(48, 100%, 11%, 1)", "hsla(47, 100%, 13%, 1)", "hsla(48, 95%, 16%, 1)", "hsla(46, 63%, 25%, 1)", "hsla(45, 60%, 32%, 1)", "hsla(60, 100%, 67%, 1)", "hsla(53, 90%, 62%, 1)", "hsla(53, 79%, 84%, 1)", "hsla(53, 78%, 84%, 0)", "hsla(53, 78%, 84%, 0.2)", "hsla(53, 78%, 84%, 0.4)", "hsla(53, 78%, 84%, 0.6)", "hsla(53, 78%, 84%, 0.8)", "hsla(53, 78%, 84%, 0.1)", "hsla(53, 78%, 84%, 0.075)", "hsla(53, 78%, 84%, 0.05)", "hsla(53, 78%, 84%, 0.025)", "hsla(53, 78%, 84%, 0.02)", "hsla(53, 78%, 84%, 0.01)", "hsla(45, 29%, 8%, 0.1)", "hsla(45, 29%, 8%, 0.075)", "hsla(45, 29%, 8%, 0.05)", "hsla(45, 29%, 8%, 0.025)", "hsla(45, 29%, 8%, 0.02)", "hsla(45, 29%, 8%, 0.01)", "hsla(48, 95%, 16%, 0.6)", "hsla(154, 20%, 7%, 0)", "hsla(153, 20%, 9%, 0.2)", "hsla(153, 20%, 9%, 0.4)", "hsla(153, 20%, 9%, 0.6)", "hsla(153, 20%, 9%, 0.8)", "hsla(154, 20%, 7%, 1)", "hsla(153, 20%, 9%, 1)", "hsla(152, 41%, 13%, 1)", "hsla(154, 55%, 15%, 1)", "hsla(154, 52%, 19%, 1)", "hsla(153, 46%, 23%, 1)", "hsla(152, 44%, 28%, 1)", "hsla(151, 45%, 34%, 1)", "hsla(151, 55%, 45%, 1)", "hsla(151, 65%, 54%, 1)", "hsla(144, 70%, 82%, 1)", "hsla(144, 70%, 82%, 0)", "hsla(144, 70%, 82%, 0.2)", "hsla(144, 70%, 82%, 0.4)", "hsla(144, 70%, 82%, 0.6)", "hsla(144, 70%, 82%, 0.8)", "hsla(144, 70%, 82%, 0.1)", "hsla(144, 70%, 82%, 0.075)", "hsla(144, 70%, 82%, 0.05)", "hsla(144, 70%, 82%, 0.025)", "hsla(144, 70%, 82%, 0.02)", "hsla(144, 70%, 82%, 0.01)", "hsla(153, 20%, 9%, 0.1)", "hsla(153, 20%, 9%, 0.075)", "hsla(153, 20%, 9%, 0.05)", "hsla(153, 20%, 9%, 0.025)", "hsla(153, 20%, 9%, 0.02)", "hsla(153, 20%, 9%, 0.01)", "hsla(153, 46%, 23%, 0.6)", "hsla(23, 22%, 7%, 0)", "hsla(28, 33%, 9%, 0.2)", "hsla(28, 33%, 9%, 0.4)", "hsla(28, 33%, 9%, 0.6)", "hsla(28, 33%, 9%, 0.8)", "hsla(27, 24%, 7%, 1)", "hsla(28, 33%, 9%, 1)", "hsla(29, 65%, 12%, 1)", "hsla(28, 100%, 14%, 1)", "hsla(28, 100%, 17%, 1)", "hsla(27, 79%, 22%, 1)", "hsla(25, 63%, 30%, 1)", "hsla(23, 60%, 40%, 1)", "hsla(26, 100%, 56%, 1)", "hsla(26, 100%, 67%, 1)", "hsla(30, 100%, 88%, 1)", "hsla(30, 100%, 88%, 0)", "hsla(30, 100%, 88%, 0.2)", "hsla(30, 100%, 88%, 0.4)", "hsla(30, 100%, 88%, 0.6)", "hsla(30, 100%, 88%, 0.8)", "hsla(30, 100%, 88%, 0.1)", "hsla(30, 100%, 88%, 0.075)", "hsla(30, 100%, 88%, 0.05)", "hsla(30, 100%, 88%, 0.025)", "hsla(30, 100%, 88%, 0.02)", "hsla(30, 100%, 88%, 0.01)", "hsla(28, 33%, 9%, 0.1)", "hsla(28, 33%, 9%, 0.075)", "hsla(28, 33%, 9%, 0.05)", "hsla(28, 33%, 9%, 0.025)", "hsla(28, 33%, 9%, 0.02)", "hsla(28, 33%, 9%, 0.01)", "hsla(27, 79%, 22%, 0.6)", "hsla(317, 17%, 8%, 0)", "hsla(316, 29%, 10%, 0.2)", "hsla(316, 29%, 10%, 0.4)", "hsla(316, 29%, 10%, 0.6)", "hsla(316, 29%, 10%, 0.8)", "hsla(315, 19%, 8%, 1)", "hsla(316, 29%, 10%, 1)", "hsla(315, 41%, 15%, 1)", "hsla(315, 58%, 19%, 1)", "hsla(318, 52%, 23%, 1)", "hsla(319, 44%, 29%, 1)", "hsla(321, 40%, 37%, 1)", "hsla(322, 40%, 47%, 1)", "hsla(323, 68%, 59%, 1)", "hsla(327, 100%, 78%, 1)", "hsla(326, 92%, 91%, 1)", "hsla(326, 91%, 91%, 0)", "hsla(326, 91%, 91%, 0.2)", "hsla(326, 91%, 91%, 0.4)", "hsla(326, 91%, 91%, 0.6)", "hsla(326, 91%, 91%, 0.8)", "hsla(326, 91%, 91%, 0.1)", "hsla(326, 91%, 91%, 0.075)", "hsla(326, 91%, 91%, 0.05)", "hsla(326, 91%, 91%, 0.025)", "hsla(326, 91%, 91%, 0.02)", "hsla(326, 91%, 91%, 0.01)", "hsla(316, 29%, 10%, 0.1)", "hsla(316, 29%, 10%, 0.075)", "hsla(316, 29%, 10%, 0.05)", "hsla(316, 29%, 10%, 0.025)", "hsla(316, 29%, 10%, 0.02)", "hsla(316, 29%, 10%, 0.01)", "hsla(319, 44%, 29%, 0.6)", "hsla(282, 22%, 9%, 0)", "hsla(279, 25%, 11%, 0.2)", "hsla(279, 25%, 11%, 0.4)", "hsla(279, 25%, 11%, 0.6)", "hsla(279, 25%, 11%, 0.8)", "hsla(282, 23%, 9%, 1)", "hsla(279, 25%, 11%, 1)", "hsla(279, 36%, 17%, 1)", "hsla(277, 39%, 22%, 1)", "hsla(276, 38%, 26%, 1)", "hsla(275, 35%, 31%, 1)", "hsla(274, 33%, 38%, 1)", "hsla(273, 33%, 50%, 1)", "hsla(272, 55%, 59%, 1)", "hsla(272, 100%, 81%, 1)", "hsla(275, 77%, 92%, 1)", "hsla(275, 76%, 92%, 0)", "hsla(275, 76%, 92%, 0.2)", "hsla(275, 76%, 92%, 0.4)", "hsla(275, 76%, 92%, 0.6)", "hsla(275, 76%, 92%, 0.8)", "hsla(275, 76%, 92%, 0.1)", "hsla(275, 76%, 92%, 0.075)", "hsla(275, 76%, 92%, 0.05)", "hsla(275, 76%, 92%, 0.025)", "hsla(275, 76%, 92%, 0.02)", "hsla(275, 76%, 92%, 0.01)", "hsla(279, 25%, 11%, 0.1)", "hsla(279, 25%, 11%, 0.075)", "hsla(279, 25%, 11%, 0.05)", "hsla(279, 25%, 11%, 0.025)", "hsla(279, 25%, 11%, 0.02)", "hsla(279, 25%, 11%, 0.01)", "hsla(275, 35%, 31%, 0.6)", "hsla(173, 22%, 7%, 0)", "hsla(175, 24%, 9%, 0.2)", "hsla(175, 24%, 9%, 0.4)", "hsla(175, 24%, 9%, 0.6)", "hsla(175, 24%, 9%, 0.8)", "hsla(173, 24%, 7%, 1)", "hsla(175, 24%, 9%, 1)", "hsla(174, 55%, 11%, 1)", "hsla(176, 93%, 12%, 1)", "hsla(175, 80%, 16%, 1)", "hsla(174, 63%, 21%, 1)", "hsla(174, 58%, 26%, 1)", "hsla(173, 59%, 31%, 1)", "hsla(172, 85%, 38%, 1)", "hsla(170, 90%, 45%, 1)", "hsla(163, 69%, 81%, 1)", "hsla(163, 69%, 81%, 0)", "hsla(163, 69%, 81%, 0.2)", "hsla(163, 69%, 81%, 0.4)", "hsla(163, 69%, 81%, 0.6)", "hsla(163, 69%, 81%, 0.8)", "hsla(163, 69%, 81%, 0.1)", "hsla(163, 69%, 81%, 0.075)", "hsla(163, 69%, 81%, 0.05)", "hsla(163, 69%, 81%, 0.025)", "hsla(163, 69%, 81%, 0.02)", "hsla(163, 69%, 81%, 0.01)", "hsla(175, 24%, 9%, 0.1)", "hsla(175, 24%, 9%, 0.075)", "hsla(175, 24%, 9%, 0.05)", "hsla(175, 24%, 9%, 0.025)", "hsla(175, 24%, 9%, 0.02)", "hsla(175, 24%, 9%, 0.01)", "hsla(174, 63%, 21%, 0.6)", "hsla(0, 0%, 4%, 0.2)", "hsla(0, 0%, 4%, 0.4)", "hsla(0, 0%, 4%, 0.6)", "hsla(0, 0%, 4%, 0.8)", "hsla(0, 0%, 99%, 0.2)", "hsla(0, 0%, 99%, 0.4)", "hsla(0, 0%, 99%, 0.6)", "hsla(0, 0%, 99%, 0.8)", "hsla(216, 100%, 99%, 0.2)", "hsla(216, 100%, 99%, 0.4)", "hsla(216, 100%, 99%, 0.6)", "hsla(216, 100%, 99%, 0.8)", "hsla(0, 100%, 99%, 0.2)", "hsla(0, 100%, 99%, 0.4)", "hsla(0, 100%, 99%, 0.6)", "hsla(0, 100%, 99%, 0.8)", "hsla(60, 45%, 98%, 0.2)", "hsla(60, 45%, 98%, 0.4)", "hsla(60, 45%, 98%, 0.6)", "hsla(60, 45%, 98%, 0.8)", "hsla(140, 60%, 99%, 0.2)", "hsla(140, 60%, 99%, 0.4)", "hsla(140, 60%, 99%, 0.6)", "hsla(140, 60%, 99%, 0.8)", "hsla(20, 60%, 99%, 0.2)", "hsla(20, 60%, 99%, 0.4)", "hsla(20, 60%, 99%, 0.6)", "hsla(20, 60%, 99%, 0.8)", "hsla(324, 100%, 99%, 0.2)", "hsla(324, 100%, 99%, 0.4)", "hsla(324, 100%, 99%, 0.6)", "hsla(324, 100%, 99%, 0.8)", "hsla(300, 60%, 99%, 0.2)", "hsla(300, 60%, 99%, 0.4)", "hsla(300, 60%, 99%, 0.6)", "hsla(300, 60%, 99%, 0.8)", "hsla(160, 60%, 99%, 0.2)", "hsla(160, 60%, 99%, 0.4)", "hsla(160, 60%, 99%, 0.6)", "hsla(160, 60%, 99%, 0.8)", "hsla(0, 0%, 68%, 0.2)", "hsla(0, 0%, 68%, 0.4)", "hsla(0, 0%, 68%, 0.6)", "hsla(0, 0%, 68%, 0.8)", "hsla(0, 0%, 7%, 0.2)", "hsla(0, 0%, 7%, 0.4)", "hsla(0, 0%, 7%, 0.6)", "hsla(0, 0%, 7%, 0.8)", "hsla(216, 43%, 9%, 0.2)", "hsla(216, 43%, 9%, 0.4)", "hsla(216, 43%, 9%, 0.6)", "hsla(216, 43%, 9%, 0.8)", "hsla(0, 17%, 8%, 0.2)", "hsla(0, 17%, 8%, 0.4)", "hsla(0, 17%, 8%, 0.6)", "hsla(0, 17%, 8%, 0.8)", "hsla(47, 29%, 6%, 0.2)", "hsla(47, 29%, 6%, 0.4)", "hsla(47, 29%, 6%, 0.6)", "hsla(47, 29%, 6%, 0.8)", "hsla(154, 20%, 7%, 0.2)", "hsla(154, 20%, 7%, 0.4)", "hsla(154, 20%, 7%, 0.6)", "hsla(154, 20%, 7%, 0.8)", "hsla(23, 22%, 7%, 0.2)", "hsla(23, 22%, 7%, 0.4)", "hsla(23, 22%, 7%, 0.6)", "hsla(23, 22%, 7%, 0.8)", "hsla(317, 17%, 8%, 0.2)", "hsla(317, 17%, 8%, 0.4)", "hsla(317, 17%, 8%, 0.6)", "hsla(317, 17%, 8%, 0.8)", "hsla(282, 22%, 9%, 0.2)", "hsla(282, 22%, 9%, 0.4)", "hsla(282, 22%, 9%, 0.6)", "hsla(282, 22%, 9%, 0.8)", "hsla(173, 22%, 7%, 0.2)", "hsla(173, 22%, 7%, 0.4)", "hsla(173, 22%, 7%, 0.6)", "hsla(173, 22%, 7%, 0.8)"];
var ks = ["accentBackground", "accentColor", "background0", "background02", "background04", "background06", "background08", "color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "color10", "color11", "color12", "color0", "color02", "color04", "color06", "color08", "color", "colorHover", "colorPress", "colorFocus", "background", "backgroundHover", "backgroundPress", "backgroundFocus", "backgroundActive", "borderColor", "borderColorHover", "borderColorFocus", "borderColorPress", "placeholderColor", "colorTransparent", "black1", "black2", "black3", "black4", "black5", "black6", "black7", "black8", "black9", "black10", "black11", "black12", "white1", "white2", "white3", "white4", "white5", "white6", "white7", "white8", "white9", "white10", "white11", "white12", "white", "white0", "white02", "white04", "white06", "white08", "black", "black0", "black02", "black04", "black06", "black08", "shadow1", "shadow2", "shadow3", "shadow4", "shadow5", "shadow6", "shadow7", "shadow8", "highlight1", "highlight2", "highlight3", "highlight4", "highlight5", "highlight6", "highlight7", "highlight8", "shadowColor", "gray1", "gray2", "gray3", "gray4", "gray5", "gray6", "gray7", "gray8", "gray9", "gray10", "gray11", "gray12", "blue1", "blue2", "blue3", "blue4", "blue5", "blue6", "blue7", "blue8", "blue9", "blue10", "blue11", "blue12", "red1", "red2", "red3", "red4", "red5", "red6", "red7", "red8", "red9", "red10", "red11", "red12", "yellow1", "yellow2", "yellow3", "yellow4", "yellow5", "yellow6", "yellow7", "yellow8", "yellow9", "yellow10", "yellow11", "yellow12", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9", "green10", "green11", "green12", "orange1", "orange2", "orange3", "orange4", "orange5", "orange6", "orange7", "orange8", "orange9", "orange10", "orange11", "orange12", "pink1", "pink2", "pink3", "pink4", "pink5", "pink6", "pink7", "pink8", "pink9", "pink10", "pink11", "pink12", "purple1", "purple2", "purple3", "purple4", "purple5", "purple6", "purple7", "purple8", "purple9", "purple10", "purple11", "purple12", "teal1", "teal2", "teal3", "teal4", "teal5", "teal6", "teal7", "teal8", "teal9", "teal10", "teal11", "teal12", "neutral1", "neutral2", "neutral3", "neutral4", "neutral5", "neutral6", "neutral7", "neutral8", "neutral9", "neutral10", "neutral11", "neutral12", "accent1", "accent2", "accent3", "accent4", "accent5", "accent6", "accent7", "accent8", "accent9", "accent10", "accent11", "accent12", "color01", "color0075", "color005", "color0025", "color002", "color001", "background01", "background0075", "background005", "background0025", "background002", "background001", "outlineColor"];
var n1 = t([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 18], [25, 18], [26, 18], [27, 23], [28, 8], [29, 7], [30, 9], [31, 9], [32, 8], [33, 10], [34, 9], [35, 10], [36, 11], [37, 15], [38, 19], [39, 24], [40, 25], [41, 26], [42, 27], [43, 28], [44, 29], [45, 30], [46, 31], [47, 32], [48, 33], [49, 34], [50, 35], [51, 36], [52, 37], [53, 38], [54, 39], [55, 40], [56, 41], [57, 42], [58, 43], [59, 44], [60, 45], [61, 46], [62, 47], [63, 48], [64, 49], [65, 50], [66, 51], [67, 52], [68, 53], [69, 54], [70, 55], [71, 56], [72, 57], [73, 58], [74, 59], [75, 60], [76, 61], [77, 62], [78, 63], [79, 64], [80, 65], [81, 58], [82, 66], [83, 67], [84, 68], [85, 69], [86, 70], [87, 51], [88, 71], [89, 72], [90, 73], [91, 62], [92, 74], [93, 75], [94, 76], [95, 77], [96, 78], [97, 79], [98, 80], [99, 81], [100, 82], [101, 83], [102, 84], [103, 85], [104, 86], [105, 87], [106, 88], [107, 89], [108, 90], [109, 91], [110, 92], [111, 93], [112, 94], [113, 95], [114, 96], [115, 97], [116, 98], [117, 99], [118, 100], [119, 101], [120, 102], [121, 103], [122, 104], [123, 105], [124, 106], [125, 107], [126, 108], [127, 109], [128, 110], [129, 111], [130, 112], [131, 113], [132, 114], [133, 115], [134, 116], [135, 117], [136, 118], [137, 119], [138, 120], [139, 121], [140, 122], [141, 123], [142, 124], [143, 125], [144, 126], [145, 127], [146, 128], [147, 129], [148, 130], [149, 131], [150, 132], [151, 133], [152, 134], [153, 135], [154, 136], [155, 137], [156, 138], [157, 139], [158, 140], [159, 141], [160, 142], [161, 143], [162, 144], [163, 145], [164, 146], [165, 147], [166, 148], [167, 149], [168, 150], [169, 151], [170, 152], [171, 153], [172, 154], [173, 155], [174, 156], [175, 157], [176, 158], [177, 159], [178, 160], [179, 161], [180, 162], [181, 163], [182, 164], [183, 165], [184, 166], [185, 167], [186, 168], [187, 169], [188, 170], [189, 171], [190, 172], [191, 173], [192, 174], [193, 175], [194, 176], [195, 177], [196, 178], [197, 179], [198, 180], [199, 181], [200, 182], [201, 183], [202, 184], [203, 42], [204, 185], [205, 186], [206, 187], [207, 188], [208, 189], [209, 190], [210, 191], [211, 192], [212, 193], [213, 194], [214, 0], [215, 17], [216, 16], [217, 195], [218, 196], [219, 197], [220, 198], [221, 1], [222, 11], [223, 7], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [236, 211]]);
var n2 = t([[0, 16], [1, 9], [2, 212], [3, 213], [4, 214], [5, 215], [6, 216], [7, 193], [8, 194], [9, 0], [10, 17], [11, 16], [12, 195], [13, 196], [14, 197], [15, 198], [16, 1], [17, 11], [18, 7], [19, 2], [20, 217], [21, 218], [22, 219], [23, 220], [24, 7], [25, 220], [26, 7], [27, 11], [28, 194], [29, 0], [30, 193], [31, 0], [32, 194], [33, 17], [34, 16], [35, 17], [36, 0], [37, 198], [38, 2], [39, 24], [40, 25], [41, 26], [42, 27], [43, 28], [44, 29], [45, 30], [46, 31], [47, 32], [48, 33], [49, 34], [50, 35], [51, 36], [52, 37], [53, 38], [54, 39], [55, 40], [56, 41], [57, 42], [58, 43], [59, 44], [60, 45], [61, 46], [62, 47], [63, 48], [64, 49], [65, 50], [66, 51], [67, 52], [68, 53], [69, 54], [70, 55], [71, 56], [72, 57], [73, 58], [74, 59], [75, 221], [76, 222], [77, 64], [78, 223], [79, 224], [80, 59], [81, 225], [82, 54], [83, 68], [84, 50], [85, 70], [86, 226], [87, 227], [88, 73], [89, 228], [90, 48], [91, 64], [92, 229], [93, 26], [94, 230], [95, 231], [96, 232], [97, 233], [98, 234], [99, 235], [100, 236], [101, 237], [102, 238], [103, 239], [104, 240], [105, 241], [106, 242], [107, 243], [108, 244], [109, 245], [110, 246], [111, 247], [112, 94], [113, 248], [114, 249], [115, 250], [116, 251], [117, 252], [118, 253], [119, 254], [120, 255], [121, 256], [122, 257], [123, 258], [124, 106], [125, 259], [126, 260], [127, 261], [128, 262], [129, 263], [130, 264], [131, 265], [132, 266], [133, 267], [134, 268], [135, 269], [136, 118], [137, 270], [138, 271], [139, 272], [140, 273], [141, 274], [142, 275], [143, 276], [144, 277], [145, 278], [146, 279], [147, 280], [148, 130], [149, 281], [150, 282], [151, 283], [152, 284], [153, 285], [154, 286], [155, 287], [156, 288], [157, 289], [158, 290], [159, 291], [160, 142], [161, 292], [162, 293], [163, 294], [164, 295], [165, 296], [166, 297], [167, 298], [168, 299], [169, 300], [170, 301], [171, 302], [172, 154], [173, 303], [174, 304], [175, 305], [176, 306], [177, 307], [178, 308], [179, 309], [180, 310], [181, 311], [182, 312], [183, 313], [184, 166], [185, 314], [186, 315], [187, 316], [188, 317], [189, 318], [190, 319], [191, 320], [192, 321], [193, 322], [194, 323], [195, 324], [196, 178], [197, 325], [198, 326], [199, 327], [200, 182], [201, 183], [202, 184], [203, 42], [204, 185], [205, 186], [206, 187], [207, 188], [208, 189], [209, 190], [210, 191], [211, 192], [212, 7], [213, 8], [214, 9], [215, 10], [216, 11], [217, 12], [218, 13], [219, 14], [220, 15], [221, 16], [222, 17], [223, 18], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [236, 340]]);
var n3 = t([[0, 9], [1, 16], [2, 212], [3, 213], [4, 214], [5, 215], [6, 216], [7, 193], [8, 194], [9, 0], [10, 17], [11, 16], [12, 195], [13, 196], [14, 197], [15, 198], [16, 1], [17, 11], [18, 7], [19, 2], [20, 217], [21, 218], [22, 219], [23, 220], [24, 7], [25, 7], [26, 7], [27, 220], [28, 194], [29, 193], [30, 0], [31, 0], [32, 194], [33, 17], [34, 0], [35, 17], [36, 16], [37, 198], [38, 2], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [236, 340]]);
var n4 = t([[0, 1], [1, 0], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 18], [25, 23], [26, 18], [27, 17], [28, 8], [29, 9], [30, 7], [31, 9], [32, 8], [33, 10], [34, 11], [35, 10], [36, 9], [37, 15], [38, 19], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [236, 211]]);
var n5 = t([[0, 0], [1, 1], [2, 212], [3, 213], [4, 214], [5, 215], [6, 216], [7, 193], [8, 194], [9, 0], [10, 17], [11, 16], [12, 195], [13, 196], [14, 197], [15, 198], [16, 1], [17, 11], [18, 7], [19, 2], [20, 217], [21, 218], [22, 219], [23, 220], [24, 7], [25, 7], [26, 7], [27, 220], [28, 194], [29, 193], [30, 0], [31, 0], [32, 194], [33, 17], [34, 0], [35, 17], [36, 16], [37, 198], [38, 2], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [236, 340]]);
var n6 = t([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 18], [25, 18], [26, 18], [27, 23], [28, 8], [29, 7], [30, 9], [31, 9], [32, 8], [33, 10], [34, 9], [35, 10], [36, 11], [37, 15], [38, 19], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [236, 211]]);
var n7 = t([[0, 0], [1, 1], [2, 341], [3, 342], [4, 343], [5, 344], [6, 345], [7, 346], [8, 347], [9, 348], [10, 349], [11, 350], [12, 10], [13, 351], [14, 352], [15, 353], [16, 354], [17, 355], [18, 356], [19, 357], [20, 358], [21, 359], [22, 360], [23, 361], [24, 356], [25, 356], [26, 356], [27, 361], [28, 347], [29, 346], [30, 348], [31, 348], [32, 347], [33, 349], [34, 348], [35, 349], [36, 350], [37, 353], [38, 357], [224, 362], [225, 363], [226, 364], [227, 365], [228, 366], [229, 367], [230, 368], [231, 369], [232, 370], [233, 371], [234, 372], [235, 373], [236, 374]]);
var n8 = t([[0, 0], [1, 1], [2, 375], [3, 376], [4, 377], [5, 378], [6, 379], [7, 380], [8, 381], [9, 382], [10, 383], [11, 384], [12, 385], [13, 386], [14, 387], [15, 388], [16, 389], [17, 390], [18, 391], [19, 392], [20, 393], [21, 394], [22, 395], [23, 396], [24, 391], [25, 391], [26, 391], [27, 396], [28, 381], [29, 380], [30, 382], [31, 382], [32, 381], [33, 383], [34, 382], [35, 383], [36, 384], [37, 388], [38, 392], [224, 397], [225, 398], [226, 399], [227, 400], [228, 401], [229, 402], [230, 403], [231, 404], [232, 405], [233, 406], [234, 407], [235, 408], [236, 409]]);
var n9 = t([[0, 0], [1, 1], [2, 410], [3, 411], [4, 412], [5, 413], [6, 414], [7, 415], [8, 416], [9, 417], [10, 418], [11, 419], [12, 420], [13, 421], [14, 422], [15, 423], [16, 424], [17, 425], [18, 426], [19, 427], [20, 428], [21, 429], [22, 430], [23, 431], [24, 426], [25, 426], [26, 426], [27, 431], [28, 416], [29, 415], [30, 417], [31, 417], [32, 416], [33, 418], [34, 417], [35, 418], [36, 419], [37, 423], [38, 427], [224, 432], [225, 433], [226, 434], [227, 435], [228, 436], [229, 437], [230, 438], [231, 439], [232, 440], [233, 441], [234, 442], [235, 443], [236, 444]]);
var n10 = t([[0, 0], [1, 1], [2, 445], [3, 446], [4, 447], [5, 448], [6, 449], [7, 450], [8, 451], [9, 452], [10, 453], [11, 454], [12, 455], [13, 456], [14, 457], [15, 458], [16, 459], [17, 460], [18, 461], [19, 462], [20, 463], [21, 464], [22, 465], [23, 466], [24, 461], [25, 461], [26, 461], [27, 466], [28, 451], [29, 450], [30, 452], [31, 452], [32, 451], [33, 453], [34, 452], [35, 453], [36, 454], [37, 458], [38, 462], [224, 467], [225, 468], [226, 469], [227, 470], [228, 471], [229, 472], [230, 473], [231, 474], [232, 475], [233, 476], [234, 477], [235, 478], [236, 479]]);
var n11 = t([[0, 0], [1, 1], [2, 480], [3, 481], [4, 482], [5, 483], [6, 484], [7, 485], [8, 486], [9, 487], [10, 488], [11, 489], [12, 490], [13, 491], [14, 492], [15, 493], [16, 494], [17, 495], [18, 496], [19, 497], [20, 498], [21, 499], [22, 500], [23, 501], [24, 496], [25, 496], [26, 496], [27, 501], [28, 486], [29, 485], [30, 487], [31, 487], [32, 486], [33, 488], [34, 487], [35, 488], [36, 489], [37, 493], [38, 497], [224, 502], [225, 503], [226, 504], [227, 505], [228, 506], [229, 507], [230, 508], [231, 509], [232, 510], [233, 511], [234, 512], [235, 513], [236, 514]]);
var n12 = t([[0, 0], [1, 1], [2, 515], [3, 516], [4, 517], [5, 518], [6, 519], [7, 520], [8, 521], [9, 522], [10, 523], [11, 524], [12, 525], [13, 526], [14, 527], [15, 528], [16, 529], [17, 530], [18, 531], [19, 532], [20, 533], [21, 534], [22, 535], [23, 536], [24, 531], [25, 531], [26, 531], [27, 536], [28, 521], [29, 520], [30, 522], [31, 522], [32, 521], [33, 523], [34, 522], [35, 523], [36, 524], [37, 528], [38, 532], [224, 537], [225, 538], [226, 539], [227, 540], [228, 541], [229, 542], [230, 543], [231, 544], [232, 545], [233, 546], [234, 547], [235, 548], [236, 549]]);
var n13 = t([[0, 0], [1, 1], [2, 550], [3, 551], [4, 552], [5, 553], [6, 554], [7, 555], [8, 556], [9, 557], [10, 558], [11, 559], [12, 560], [13, 561], [14, 562], [15, 563], [16, 564], [17, 565], [18, 566], [19, 567], [20, 568], [21, 569], [22, 570], [23, 571], [24, 566], [25, 566], [26, 566], [27, 571], [28, 556], [29, 555], [30, 557], [31, 557], [32, 556], [33, 558], [34, 557], [35, 558], [36, 559], [37, 563], [38, 567], [224, 572], [225, 573], [226, 574], [227, 575], [228, 576], [229, 577], [230, 578], [231, 579], [232, 580], [233, 581], [234, 582], [235, 583], [236, 584]]);
var n14 = t([[0, 0], [1, 1], [2, 585], [3, 586], [4, 587], [5, 588], [6, 589], [7, 590], [8, 591], [9, 592], [10, 593], [11, 594], [12, 595], [13, 596], [14, 597], [15, 598], [16, 599], [17, 600], [18, 601], [19, 602], [20, 603], [21, 604], [22, 605], [23, 606], [24, 601], [25, 601], [26, 601], [27, 606], [28, 591], [29, 590], [30, 592], [31, 592], [32, 591], [33, 593], [34, 592], [35, 593], [36, 594], [37, 598], [38, 602], [224, 607], [225, 608], [226, 609], [227, 610], [228, 611], [229, 612], [230, 613], [231, 614], [232, 615], [233, 616], [234, 617], [235, 618], [236, 619]]);
var n15 = t([[0, 0], [1, 1], [2, 620], [3, 621], [4, 622], [5, 623], [6, 624], [7, 625], [8, 626], [9, 627], [10, 628], [11, 629], [12, 630], [13, 631], [14, 632], [15, 633], [16, 634], [17, 635], [18, 636], [19, 637], [20, 638], [21, 639], [22, 640], [23, 641], [24, 636], [25, 636], [26, 636], [27, 641], [28, 626], [29, 625], [30, 627], [31, 627], [32, 626], [33, 628], [34, 627], [35, 628], [36, 629], [37, 633], [38, 637], [224, 642], [225, 643], [226, 644], [227, 645], [228, 646], [229, 647], [230, 648], [231, 649], [232, 650], [233, 651], [234, 652], [235, 653], [236, 654]]);
var n16 = t([[0, 0], [1, 1], [2, 655], [3, 656], [4, 657], [5, 658], [6, 659], [7, 660], [8, 661], [9, 662], [10, 13], [11, 663], [12, 664], [13, 665], [14, 197], [15, 666], [16, 667], [17, 668], [18, 669], [19, 670], [20, 671], [21, 672], [22, 673], [23, 674], [24, 669], [25, 669], [26, 669], [27, 674], [28, 661], [29, 660], [30, 662], [31, 662], [32, 661], [33, 13], [34, 662], [35, 13], [36, 663], [37, 666], [38, 670], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [236, 687]]);
var n17 = t([[0, 16], [1, 9], [2, 212], [3, 213], [4, 214], [5, 215], [6, 216], [7, 193], [8, 194], [9, 0], [10, 17], [11, 16], [12, 195], [13, 196], [14, 197], [15, 198], [16, 1], [17, 11], [18, 7], [19, 2], [20, 217], [21, 218], [22, 219], [23, 220], [24, 7], [25, 220], [26, 7], [27, 11], [28, 194], [29, 0], [30, 193], [31, 0], [32, 194], [33, 17], [34, 16], [35, 17], [36, 0], [37, 198], [38, 2], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [236, 340]]);
var n18 = t([[0, 16], [1, 9], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 18], [25, 23], [26, 18], [27, 17], [28, 8], [29, 9], [30, 7], [31, 9], [32, 8], [33, 10], [34, 11], [35, 10], [36, 9], [37, 15], [38, 19], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [236, 211]]);
var n19 = t([[0, 16], [1, 9], [2, 688], [3, 689], [4, 690], [5, 691], [6, 692], [7, 693], [8, 0], [9, 356], [10, 694], [11, 695], [12, 696], [13, 697], [14, 668], [15, 698], [16, 699], [17, 700], [18, 9], [19, 701], [20, 702], [21, 703], [22, 704], [23, 705], [24, 9], [25, 705], [26, 9], [27, 700], [28, 0], [29, 356], [30, 693], [31, 356], [32, 0], [33, 694], [34, 695], [35, 694], [36, 356], [37, 698], [38, 701], [224, 706], [225, 707], [226, 708], [227, 709], [228, 710], [229, 711], [230, 712], [231, 713], [232, 714], [233, 715], [234, 716], [235, 717], [236, 718]]);
var n20 = t([[0, 16], [1, 9], [2, 719], [3, 720], [4, 721], [5, 722], [6, 723], [7, 724], [8, 725], [9, 726], [10, 727], [11, 728], [12, 729], [13, 730], [14, 731], [15, 388], [16, 732], [17, 733], [18, 734], [19, 735], [20, 736], [21, 737], [22, 738], [23, 739], [24, 734], [25, 739], [26, 734], [27, 733], [28, 725], [29, 726], [30, 724], [31, 726], [32, 725], [33, 727], [34, 728], [35, 727], [36, 726], [37, 388], [38, 735], [224, 740], [225, 741], [226, 742], [227, 743], [228, 744], [229, 745], [230, 746], [231, 747], [232, 748], [233, 749], [234, 750], [235, 751], [236, 752]]);
var n21 = t([[0, 16], [1, 9], [2, 753], [3, 754], [4, 755], [5, 756], [6, 757], [7, 758], [8, 759], [9, 760], [10, 761], [11, 762], [12, 763], [13, 764], [14, 765], [15, 423], [16, 766], [17, 767], [18, 768], [19, 769], [20, 770], [21, 771], [22, 772], [23, 773], [24, 768], [25, 773], [26, 768], [27, 767], [28, 759], [29, 760], [30, 758], [31, 760], [32, 759], [33, 761], [34, 762], [35, 761], [36, 760], [37, 423], [38, 769], [224, 774], [225, 775], [226, 776], [227, 777], [228, 778], [229, 779], [230, 780], [231, 781], [232, 782], [233, 783], [234, 784], [235, 785], [236, 786]]);
var n22 = t([[0, 16], [1, 9], [2, 787], [3, 788], [4, 789], [5, 790], [6, 791], [7, 792], [8, 793], [9, 794], [10, 795], [11, 796], [12, 797], [13, 798], [14, 799], [15, 458], [16, 800], [17, 801], [18, 802], [19, 803], [20, 804], [21, 805], [22, 806], [23, 807], [24, 802], [25, 807], [26, 802], [27, 801], [28, 793], [29, 794], [30, 792], [31, 794], [32, 793], [33, 795], [34, 796], [35, 795], [36, 794], [37, 458], [38, 803], [224, 808], [225, 809], [226, 810], [227, 811], [228, 812], [229, 813], [230, 814], [231, 815], [232, 816], [233, 817], [234, 818], [235, 819], [236, 820]]);
var n23 = t([[0, 16], [1, 9], [2, 821], [3, 822], [4, 823], [5, 824], [6, 825], [7, 826], [8, 827], [9, 828], [10, 829], [11, 830], [12, 831], [13, 832], [14, 833], [15, 493], [16, 834], [17, 835], [18, 836], [19, 837], [20, 838], [21, 839], [22, 840], [23, 841], [24, 836], [25, 841], [26, 836], [27, 835], [28, 827], [29, 828], [30, 826], [31, 828], [32, 827], [33, 829], [34, 830], [35, 829], [36, 828], [37, 493], [38, 837], [224, 842], [225, 843], [226, 844], [227, 845], [228, 846], [229, 847], [230, 848], [231, 849], [232, 850], [233, 851], [234, 852], [235, 853], [236, 854]]);
var n24 = t([[0, 16], [1, 9], [2, 855], [3, 856], [4, 857], [5, 858], [6, 859], [7, 860], [8, 861], [9, 862], [10, 863], [11, 864], [12, 865], [13, 866], [14, 867], [15, 528], [16, 868], [17, 869], [18, 870], [19, 871], [20, 872], [21, 873], [22, 874], [23, 875], [24, 870], [25, 875], [26, 870], [27, 869], [28, 861], [29, 862], [30, 860], [31, 862], [32, 861], [33, 863], [34, 864], [35, 863], [36, 862], [37, 528], [38, 871], [224, 876], [225, 877], [226, 878], [227, 879], [228, 880], [229, 881], [230, 882], [231, 883], [232, 884], [233, 885], [234, 886], [235, 887], [236, 888]]);
var n25 = t([[0, 16], [1, 9], [2, 889], [3, 890], [4, 891], [5, 892], [6, 893], [7, 894], [8, 895], [9, 896], [10, 897], [11, 898], [12, 899], [13, 900], [14, 901], [15, 563], [16, 902], [17, 903], [18, 904], [19, 905], [20, 906], [21, 907], [22, 908], [23, 909], [24, 904], [25, 909], [26, 904], [27, 903], [28, 895], [29, 896], [30, 894], [31, 896], [32, 895], [33, 897], [34, 898], [35, 897], [36, 896], [37, 563], [38, 905], [224, 910], [225, 911], [226, 912], [227, 913], [228, 914], [229, 915], [230, 916], [231, 917], [232, 918], [233, 919], [234, 920], [235, 921], [236, 922]]);
var n26 = t([[0, 16], [1, 9], [2, 923], [3, 924], [4, 925], [5, 926], [6, 927], [7, 928], [8, 929], [9, 930], [10, 931], [11, 932], [12, 933], [13, 934], [14, 935], [15, 598], [16, 936], [17, 937], [18, 938], [19, 939], [20, 940], [21, 941], [22, 942], [23, 943], [24, 938], [25, 943], [26, 938], [27, 937], [28, 929], [29, 930], [30, 928], [31, 930], [32, 929], [33, 931], [34, 932], [35, 931], [36, 930], [37, 598], [38, 939], [224, 944], [225, 945], [226, 946], [227, 947], [228, 948], [229, 949], [230, 950], [231, 951], [232, 952], [233, 953], [234, 954], [235, 955], [236, 956]]);
var n27 = t([[0, 16], [1, 9], [2, 957], [3, 958], [4, 959], [5, 960], [6, 961], [7, 962], [8, 963], [9, 964], [10, 965], [11, 966], [12, 967], [13, 968], [14, 969], [15, 633], [16, 970], [17, 971], [18, 972], [19, 973], [20, 974], [21, 975], [22, 976], [23, 977], [24, 972], [25, 977], [26, 972], [27, 971], [28, 963], [29, 964], [30, 962], [31, 964], [32, 963], [33, 965], [34, 966], [35, 965], [36, 964], [37, 633], [38, 973], [224, 978], [225, 979], [226, 980], [227, 981], [228, 982], [229, 983], [230, 984], [231, 985], [232, 986], [233, 987], [234, 988], [235, 989], [236, 990]]);
var n28 = t([[0, 16], [1, 9], [2, 655], [3, 656], [4, 657], [5, 658], [6, 659], [7, 660], [8, 661], [9, 662], [10, 13], [11, 663], [12, 664], [13, 665], [14, 197], [15, 666], [16, 667], [17, 668], [18, 669], [19, 670], [20, 671], [21, 672], [22, 673], [23, 674], [24, 669], [25, 674], [26, 669], [27, 668], [28, 661], [29, 662], [30, 660], [31, 662], [32, 661], [33, 13], [34, 663], [35, 13], [36, 662], [37, 666], [38, 670], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [236, 687]]);
var n29 = t([[24, 17], [25, 17], [26, 17], [27, 18], [28, 9], [29, 8], [30, 10], [31, 11], [32, 9], [33, 11], [34, 10], [35, 11], [36, 12], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [3, 3], [4, 4], [5, 5], [6, 6], [236, 211]]);
var n30 = t([[24, 17], [25, 17], [26, 17], [27, 18], [28, 10], [29, 9], [30, 11], [31, 13], [32, 10], [33, 12], [34, 11], [35, 12], [36, 13], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [3, 3], [4, 4], [5, 5], [6, 6], [236, 211]]);
var n31 = t([[24, 11], [25, 7], [26, 11], [27, 1], [28, 0], [29, 17], [30, 194], [31, 16], [32, 0], [33, 16], [34, 195], [35, 16], [36, 17], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [3, 213], [4, 214], [5, 215], [6, 216], [236, 340]]);
var n32 = t([[24, 11], [25, 7], [26, 11], [27, 1], [28, 17], [29, 16], [30, 0], [31, 196], [32, 17], [33, 195], [34, 196], [35, 195], [36, 16], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [3, 213], [4, 214], [5, 215], [6, 216], [236, 340]]);
var n33 = t([[0, 1], [1, 0], [2, 2], [3, 213], [4, 214], [5, 215], [6, 216], [7, 7], [8, 11], [9, 1], [10, 198], [11, 197], [12, 196], [13, 195], [14, 16], [15, 17], [16, 0], [17, 194], [18, 193], [19, 212], [20, 991], [21, 992], [22, 993], [23, 994], [24, 193], [25, 193], [26, 193], [27, 994], [28, 11], [29, 7], [30, 1], [31, 1], [32, 11], [33, 198], [34, 1], [35, 198], [36, 197], [37, 17], [38, 212], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [236, 340]]);
var n34 = t([[24, 11], [25, 11], [26, 11], [27, 7], [28, 0], [29, 194], [30, 17], [31, 16], [32, 0], [33, 16], [34, 17], [35, 16], [36, 195], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [3, 213], [4, 214], [5, 215], [6, 216], [236, 340]]);
var n35 = t([[24, 11], [25, 11], [26, 11], [27, 7], [28, 17], [29, 0], [30, 16], [31, 196], [32, 17], [33, 195], [34, 16], [35, 195], [36, 196], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [3, 213], [4, 214], [5, 215], [6, 216], [236, 340]]);
var n36 = t([[0, 1], [1, 0], [2, 19], [3, 3], [4, 4], [5, 5], [6, 6], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13], [13, 12], [14, 11], [15, 10], [16, 9], [17, 8], [18, 7], [19, 2], [20, 217], [21, 218], [22, 219], [23, 220], [24, 7], [25, 7], [26, 7], [27, 220], [28, 17], [29, 18], [30, 16], [31, 16], [32, 17], [33, 15], [34, 16], [35, 15], [36, 14], [37, 10], [38, 2], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [236, 211]]);
var n37 = t([[0, 1], [1, 0], [2, 357], [3, 342], [4, 343], [5, 344], [6, 345], [7, 356], [8, 355], [9, 354], [10, 353], [11, 352], [12, 351], [13, 10], [14, 350], [15, 349], [16, 348], [17, 347], [18, 346], [19, 341], [20, 995], [21, 996], [22, 997], [23, 998], [24, 346], [25, 346], [26, 346], [27, 998], [28, 355], [29, 356], [30, 354], [31, 354], [32, 355], [33, 353], [34, 354], [35, 353], [36, 352], [37, 349], [38, 341], [224, 362], [225, 363], [226, 364], [227, 365], [228, 366], [229, 367], [230, 368], [231, 369], [232, 370], [233, 371], [234, 372], [235, 373], [236, 374]]);
var n38 = t([[24, 355], [25, 355], [26, 355], [27, 356], [28, 348], [29, 347], [30, 349], [31, 350], [32, 348], [33, 350], [34, 349], [35, 350], [36, 10], [224, 362], [225, 363], [226, 364], [227, 365], [228, 366], [229, 367], [230, 368], [231, 369], [232, 370], [233, 371], [234, 372], [235, 373], [3, 342], [4, 343], [5, 344], [6, 345], [236, 374]]);
var n39 = t([[24, 355], [25, 355], [26, 355], [27, 356], [28, 349], [29, 348], [30, 350], [31, 351], [32, 349], [33, 10], [34, 350], [35, 10], [36, 351], [224, 362], [225, 363], [226, 364], [227, 365], [228, 366], [229, 367], [230, 368], [231, 369], [232, 370], [233, 371], [234, 372], [235, 373], [3, 342], [4, 343], [5, 344], [6, 345], [236, 374]]);
var n40 = t([[0, 1], [1, 0], [2, 392], [3, 376], [4, 377], [5, 378], [6, 379], [7, 391], [8, 390], [9, 389], [10, 388], [11, 387], [12, 386], [13, 385], [14, 384], [15, 383], [16, 382], [17, 381], [18, 380], [19, 375], [20, 999], [21, 1e3], [22, 1001], [23, 1002], [24, 380], [25, 380], [26, 380], [27, 1002], [28, 390], [29, 391], [30, 389], [31, 389], [32, 390], [33, 388], [34, 389], [35, 388], [36, 387], [37, 383], [38, 375], [224, 397], [225, 398], [226, 399], [227, 400], [228, 401], [229, 402], [230, 403], [231, 404], [232, 405], [233, 406], [234, 407], [235, 408], [236, 409]]);
var n41 = t([[24, 390], [25, 390], [26, 390], [27, 391], [28, 382], [29, 381], [30, 383], [31, 384], [32, 382], [33, 384], [34, 383], [35, 384], [36, 385], [224, 397], [225, 398], [226, 399], [227, 400], [228, 401], [229, 402], [230, 403], [231, 404], [232, 405], [233, 406], [234, 407], [235, 408], [3, 376], [4, 377], [5, 378], [6, 379], [236, 409]]);
var n42 = t([[24, 390], [25, 390], [26, 390], [27, 391], [28, 383], [29, 382], [30, 384], [31, 386], [32, 383], [33, 385], [34, 384], [35, 385], [36, 386], [224, 397], [225, 398], [226, 399], [227, 400], [228, 401], [229, 402], [230, 403], [231, 404], [232, 405], [233, 406], [234, 407], [235, 408], [3, 376], [4, 377], [5, 378], [6, 379], [236, 409]]);
var n43 = t([[0, 1], [1, 0], [2, 427], [3, 411], [4, 412], [5, 413], [6, 414], [7, 426], [8, 425], [9, 424], [10, 423], [11, 422], [12, 421], [13, 420], [14, 419], [15, 418], [16, 417], [17, 416], [18, 415], [19, 410], [20, 1003], [21, 1004], [22, 1005], [23, 1006], [24, 415], [25, 415], [26, 415], [27, 1006], [28, 425], [29, 426], [30, 424], [31, 424], [32, 425], [33, 423], [34, 424], [35, 423], [36, 422], [37, 418], [38, 410], [224, 432], [225, 433], [226, 434], [227, 435], [228, 436], [229, 437], [230, 438], [231, 439], [232, 440], [233, 441], [234, 442], [235, 443], [236, 444]]);
var n44 = t([[24, 425], [25, 425], [26, 425], [27, 426], [28, 417], [29, 416], [30, 418], [31, 419], [32, 417], [33, 419], [34, 418], [35, 419], [36, 420], [224, 432], [225, 433], [226, 434], [227, 435], [228, 436], [229, 437], [230, 438], [231, 439], [232, 440], [233, 441], [234, 442], [235, 443], [3, 411], [4, 412], [5, 413], [6, 414], [236, 444]]);
var n45 = t([[24, 425], [25, 425], [26, 425], [27, 426], [28, 418], [29, 417], [30, 419], [31, 421], [32, 418], [33, 420], [34, 419], [35, 420], [36, 421], [224, 432], [225, 433], [226, 434], [227, 435], [228, 436], [229, 437], [230, 438], [231, 439], [232, 440], [233, 441], [234, 442], [235, 443], [3, 411], [4, 412], [5, 413], [6, 414], [236, 444]]);
var n46 = t([[0, 1], [1, 0], [2, 462], [3, 446], [4, 447], [5, 448], [6, 449], [7, 461], [8, 460], [9, 459], [10, 458], [11, 457], [12, 456], [13, 455], [14, 454], [15, 453], [16, 452], [17, 451], [18, 450], [19, 445], [20, 1007], [21, 1008], [22, 1009], [23, 1010], [24, 450], [25, 450], [26, 450], [27, 1010], [28, 460], [29, 461], [30, 459], [31, 459], [32, 460], [33, 458], [34, 459], [35, 458], [36, 457], [37, 453], [38, 445], [224, 467], [225, 468], [226, 469], [227, 470], [228, 471], [229, 472], [230, 473], [231, 474], [232, 475], [233, 476], [234, 477], [235, 478], [236, 479]]);
var n47 = t([[24, 460], [25, 460], [26, 460], [27, 461], [28, 452], [29, 451], [30, 453], [31, 454], [32, 452], [33, 454], [34, 453], [35, 454], [36, 455], [224, 467], [225, 468], [226, 469], [227, 470], [228, 471], [229, 472], [230, 473], [231, 474], [232, 475], [233, 476], [234, 477], [235, 478], [3, 446], [4, 447], [5, 448], [6, 449], [236, 479]]);
var n48 = t([[24, 460], [25, 460], [26, 460], [27, 461], [28, 453], [29, 452], [30, 454], [31, 456], [32, 453], [33, 455], [34, 454], [35, 455], [36, 456], [224, 467], [225, 468], [226, 469], [227, 470], [228, 471], [229, 472], [230, 473], [231, 474], [232, 475], [233, 476], [234, 477], [235, 478], [3, 446], [4, 447], [5, 448], [6, 449], [236, 479]]);
var n49 = t([[0, 1], [1, 0], [2, 497], [3, 481], [4, 482], [5, 483], [6, 484], [7, 496], [8, 495], [9, 494], [10, 493], [11, 492], [12, 491], [13, 490], [14, 489], [15, 488], [16, 487], [17, 486], [18, 485], [19, 480], [20, 1011], [21, 1012], [22, 1013], [23, 1014], [24, 485], [25, 485], [26, 485], [27, 1014], [28, 495], [29, 496], [30, 494], [31, 494], [32, 495], [33, 493], [34, 494], [35, 493], [36, 492], [37, 488], [38, 480], [224, 502], [225, 503], [226, 504], [227, 505], [228, 506], [229, 507], [230, 508], [231, 509], [232, 510], [233, 511], [234, 512], [235, 513], [236, 514]]);
var n50 = t([[24, 495], [25, 495], [26, 495], [27, 496], [28, 487], [29, 486], [30, 488], [31, 489], [32, 487], [33, 489], [34, 488], [35, 489], [36, 490], [224, 502], [225, 503], [226, 504], [227, 505], [228, 506], [229, 507], [230, 508], [231, 509], [232, 510], [233, 511], [234, 512], [235, 513], [3, 481], [4, 482], [5, 483], [6, 484], [236, 514]]);
var n51 = t([[24, 495], [25, 495], [26, 495], [27, 496], [28, 488], [29, 487], [30, 489], [31, 491], [32, 488], [33, 490], [34, 489], [35, 490], [36, 491], [224, 502], [225, 503], [226, 504], [227, 505], [228, 506], [229, 507], [230, 508], [231, 509], [232, 510], [233, 511], [234, 512], [235, 513], [3, 481], [4, 482], [5, 483], [6, 484], [236, 514]]);
var n52 = t([[0, 1], [1, 0], [2, 532], [3, 516], [4, 517], [5, 518], [6, 519], [7, 531], [8, 530], [9, 529], [10, 528], [11, 527], [12, 526], [13, 525], [14, 524], [15, 523], [16, 522], [17, 521], [18, 520], [19, 515], [20, 1015], [21, 1016], [22, 1017], [23, 1018], [24, 520], [25, 520], [26, 520], [27, 1018], [28, 530], [29, 531], [30, 529], [31, 529], [32, 530], [33, 528], [34, 529], [35, 528], [36, 527], [37, 523], [38, 515], [224, 537], [225, 538], [226, 539], [227, 540], [228, 541], [229, 542], [230, 543], [231, 544], [232, 545], [233, 546], [234, 547], [235, 548], [236, 549]]);
var n53 = t([[24, 530], [25, 530], [26, 530], [27, 531], [28, 522], [29, 521], [30, 523], [31, 524], [32, 522], [33, 524], [34, 523], [35, 524], [36, 525], [224, 537], [225, 538], [226, 539], [227, 540], [228, 541], [229, 542], [230, 543], [231, 544], [232, 545], [233, 546], [234, 547], [235, 548], [3, 516], [4, 517], [5, 518], [6, 519], [236, 549]]);
var n54 = t([[24, 530], [25, 530], [26, 530], [27, 531], [28, 523], [29, 522], [30, 524], [31, 526], [32, 523], [33, 525], [34, 524], [35, 525], [36, 526], [224, 537], [225, 538], [226, 539], [227, 540], [228, 541], [229, 542], [230, 543], [231, 544], [232, 545], [233, 546], [234, 547], [235, 548], [3, 516], [4, 517], [5, 518], [6, 519], [236, 549]]);
var n55 = t([[0, 1], [1, 0], [2, 567], [3, 551], [4, 552], [5, 553], [6, 554], [7, 566], [8, 565], [9, 564], [10, 563], [11, 562], [12, 561], [13, 560], [14, 559], [15, 558], [16, 557], [17, 556], [18, 555], [19, 550], [20, 1019], [21, 1020], [22, 1021], [23, 1022], [24, 555], [25, 555], [26, 555], [27, 1022], [28, 565], [29, 566], [30, 564], [31, 564], [32, 565], [33, 563], [34, 564], [35, 563], [36, 562], [37, 558], [38, 550], [224, 572], [225, 573], [226, 574], [227, 575], [228, 576], [229, 577], [230, 578], [231, 579], [232, 580], [233, 581], [234, 582], [235, 583], [236, 584]]);
var n56 = t([[24, 565], [25, 565], [26, 565], [27, 566], [28, 557], [29, 556], [30, 558], [31, 559], [32, 557], [33, 559], [34, 558], [35, 559], [36, 560], [224, 572], [225, 573], [226, 574], [227, 575], [228, 576], [229, 577], [230, 578], [231, 579], [232, 580], [233, 581], [234, 582], [235, 583], [3, 551], [4, 552], [5, 553], [6, 554], [236, 584]]);
var n57 = t([[24, 565], [25, 565], [26, 565], [27, 566], [28, 558], [29, 557], [30, 559], [31, 561], [32, 558], [33, 560], [34, 559], [35, 560], [36, 561], [224, 572], [225, 573], [226, 574], [227, 575], [228, 576], [229, 577], [230, 578], [231, 579], [232, 580], [233, 581], [234, 582], [235, 583], [3, 551], [4, 552], [5, 553], [6, 554], [236, 584]]);
var n58 = t([[0, 1], [1, 0], [2, 602], [3, 586], [4, 587], [5, 588], [6, 589], [7, 601], [8, 600], [9, 599], [10, 598], [11, 597], [12, 596], [13, 595], [14, 594], [15, 593], [16, 592], [17, 591], [18, 590], [19, 585], [20, 1023], [21, 1024], [22, 1025], [23, 1026], [24, 590], [25, 590], [26, 590], [27, 1026], [28, 600], [29, 601], [30, 599], [31, 599], [32, 600], [33, 598], [34, 599], [35, 598], [36, 597], [37, 593], [38, 585], [224, 607], [225, 608], [226, 609], [227, 610], [228, 611], [229, 612], [230, 613], [231, 614], [232, 615], [233, 616], [234, 617], [235, 618], [236, 619]]);
var n59 = t([[24, 600], [25, 600], [26, 600], [27, 601], [28, 592], [29, 591], [30, 593], [31, 594], [32, 592], [33, 594], [34, 593], [35, 594], [36, 595], [224, 607], [225, 608], [226, 609], [227, 610], [228, 611], [229, 612], [230, 613], [231, 614], [232, 615], [233, 616], [234, 617], [235, 618], [3, 586], [4, 587], [5, 588], [6, 589], [236, 619]]);
var n60 = t([[24, 600], [25, 600], [26, 600], [27, 601], [28, 593], [29, 592], [30, 594], [31, 596], [32, 593], [33, 595], [34, 594], [35, 595], [36, 596], [224, 607], [225, 608], [226, 609], [227, 610], [228, 611], [229, 612], [230, 613], [231, 614], [232, 615], [233, 616], [234, 617], [235, 618], [3, 586], [4, 587], [5, 588], [6, 589], [236, 619]]);
var n61 = t([[0, 1], [1, 0], [2, 637], [3, 621], [4, 622], [5, 623], [6, 624], [7, 636], [8, 635], [9, 634], [10, 633], [11, 632], [12, 631], [13, 630], [14, 629], [15, 628], [16, 627], [17, 626], [18, 625], [19, 620], [20, 1027], [21, 1028], [22, 1029], [23, 1030], [24, 625], [25, 625], [26, 625], [27, 1030], [28, 635], [29, 636], [30, 634], [31, 634], [32, 635], [33, 633], [34, 634], [35, 633], [36, 632], [37, 628], [38, 620], [224, 642], [225, 643], [226, 644], [227, 645], [228, 646], [229, 647], [230, 648], [231, 649], [232, 650], [233, 651], [234, 652], [235, 653], [236, 654]]);
var n62 = t([[24, 635], [25, 635], [26, 635], [27, 636], [28, 627], [29, 626], [30, 628], [31, 629], [32, 627], [33, 629], [34, 628], [35, 629], [36, 630], [224, 642], [225, 643], [226, 644], [227, 645], [228, 646], [229, 647], [230, 648], [231, 649], [232, 650], [233, 651], [234, 652], [235, 653], [3, 621], [4, 622], [5, 623], [6, 624], [236, 654]]);
var n63 = t([[24, 635], [25, 635], [26, 635], [27, 636], [28, 628], [29, 627], [30, 629], [31, 631], [32, 628], [33, 630], [34, 629], [35, 630], [36, 631], [224, 642], [225, 643], [226, 644], [227, 645], [228, 646], [229, 647], [230, 648], [231, 649], [232, 650], [233, 651], [234, 652], [235, 653], [3, 621], [4, 622], [5, 623], [6, 624], [236, 654]]);
var n64 = t([[0, 1], [1, 0], [2, 670], [3, 656], [4, 657], [5, 658], [6, 659], [7, 669], [8, 668], [9, 667], [10, 666], [11, 197], [12, 665], [13, 664], [14, 663], [15, 13], [16, 662], [17, 661], [18, 660], [19, 655], [20, 1031], [21, 1032], [22, 1033], [23, 1034], [24, 660], [25, 660], [26, 660], [27, 1034], [28, 668], [29, 669], [30, 667], [31, 667], [32, 668], [33, 666], [34, 667], [35, 666], [36, 197], [37, 13], [38, 655], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [236, 687]]);
var n65 = t([[24, 668], [25, 668], [26, 668], [27, 669], [28, 662], [29, 661], [30, 13], [31, 663], [32, 662], [33, 663], [34, 13], [35, 663], [36, 664], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [3, 656], [4, 657], [5, 658], [6, 659], [236, 687]]);
var n66 = t([[24, 668], [25, 668], [26, 668], [27, 669], [28, 13], [29, 662], [30, 663], [31, 665], [32, 13], [33, 664], [34, 663], [35, 664], [36, 665], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [3, 656], [4, 657], [5, 658], [6, 659], [236, 687]]);
var n67 = t([[0, 9], [1, 16], [2, 2], [3, 213], [4, 214], [5, 215], [6, 216], [7, 7], [8, 11], [9, 1], [10, 198], [11, 197], [12, 196], [13, 195], [14, 16], [15, 17], [16, 0], [17, 194], [18, 193], [19, 212], [20, 991], [21, 992], [22, 993], [23, 994], [24, 193], [25, 994], [26, 193], [27, 194], [28, 11], [29, 1], [30, 7], [31, 1], [32, 11], [33, 198], [34, 197], [35, 198], [36, 1], [37, 17], [38, 212], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [236, 340]]);
var n68 = t([[0, 9], [1, 16], [2, 19], [3, 3], [4, 4], [5, 5], [6, 6], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13], [13, 12], [14, 11], [15, 10], [16, 9], [17, 8], [18, 7], [19, 2], [20, 217], [21, 218], [22, 219], [23, 220], [24, 7], [25, 220], [26, 7], [27, 8], [28, 17], [29, 16], [30, 18], [31, 16], [32, 17], [33, 15], [34, 14], [35, 15], [36, 16], [37, 10], [38, 2], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [236, 211]]);
var n69 = t([[24, 17], [25, 18], [26, 17], [27, 16], [28, 9], [29, 10], [30, 8], [31, 11], [32, 9], [33, 11], [34, 12], [35, 11], [36, 10], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [3, 3], [4, 4], [5, 5], [6, 6], [236, 211]]);
var n70 = t([[24, 17], [25, 18], [26, 17], [27, 16], [28, 10], [29, 11], [30, 9], [31, 13], [32, 10], [33, 12], [34, 13], [35, 12], [36, 11], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [3, 3], [4, 4], [5, 5], [6, 6], [236, 211]]);
var n71 = t([[0, 9], [1, 16], [2, 701], [3, 689], [4, 690], [5, 691], [6, 692], [7, 9], [8, 700], [9, 699], [10, 698], [11, 668], [12, 697], [13, 696], [14, 695], [15, 694], [16, 356], [17, 0], [18, 693], [19, 688], [20, 1035], [21, 1036], [22, 1037], [23, 1038], [24, 693], [25, 1038], [26, 693], [27, 0], [28, 700], [29, 699], [30, 9], [31, 699], [32, 700], [33, 698], [34, 668], [35, 698], [36, 699], [37, 694], [38, 688], [224, 706], [225, 707], [226, 708], [227, 709], [228, 710], [229, 711], [230, 712], [231, 713], [232, 714], [233, 715], [234, 716], [235, 717], [236, 718]]);
var n72 = t([[24, 700], [25, 9], [26, 700], [27, 699], [28, 356], [29, 694], [30, 0], [31, 695], [32, 356], [33, 695], [34, 696], [35, 695], [36, 694], [224, 706], [225, 707], [226, 708], [227, 709], [228, 710], [229, 711], [230, 712], [231, 713], [232, 714], [233, 715], [234, 716], [235, 717], [3, 689], [4, 690], [5, 691], [6, 692], [236, 718]]);
var n73 = t([[24, 700], [25, 9], [26, 700], [27, 699], [28, 694], [29, 695], [30, 356], [31, 697], [32, 694], [33, 696], [34, 697], [35, 696], [36, 695], [224, 706], [225, 707], [226, 708], [227, 709], [228, 710], [229, 711], [230, 712], [231, 713], [232, 714], [233, 715], [234, 716], [235, 717], [3, 689], [4, 690], [5, 691], [6, 692], [236, 718]]);
var n74 = t([[0, 9], [1, 16], [2, 735], [3, 720], [4, 721], [5, 722], [6, 723], [7, 734], [8, 733], [9, 732], [10, 388], [11, 731], [12, 730], [13, 729], [14, 728], [15, 727], [16, 726], [17, 725], [18, 724], [19, 719], [20, 1039], [21, 1040], [22, 1041], [23, 1042], [24, 724], [25, 1042], [26, 724], [27, 725], [28, 733], [29, 732], [30, 734], [31, 732], [32, 733], [33, 388], [34, 731], [35, 388], [36, 732], [37, 727], [38, 719], [224, 740], [225, 741], [226, 742], [227, 743], [228, 744], [229, 745], [230, 746], [231, 747], [232, 748], [233, 749], [234, 750], [235, 751], [236, 752]]);
var n75 = t([[24, 733], [25, 734], [26, 733], [27, 732], [28, 726], [29, 727], [30, 725], [31, 728], [32, 726], [33, 728], [34, 729], [35, 728], [36, 727], [224, 740], [225, 741], [226, 742], [227, 743], [228, 744], [229, 745], [230, 746], [231, 747], [232, 748], [233, 749], [234, 750], [235, 751], [3, 720], [4, 721], [5, 722], [6, 723], [236, 752]]);
var n76 = t([[24, 733], [25, 734], [26, 733], [27, 732], [28, 727], [29, 728], [30, 726], [31, 730], [32, 727], [33, 729], [34, 730], [35, 729], [36, 728], [224, 740], [225, 741], [226, 742], [227, 743], [228, 744], [229, 745], [230, 746], [231, 747], [232, 748], [233, 749], [234, 750], [235, 751], [3, 720], [4, 721], [5, 722], [6, 723], [236, 752]]);
var n77 = t([[0, 9], [1, 16], [2, 769], [3, 754], [4, 755], [5, 756], [6, 757], [7, 768], [8, 767], [9, 766], [10, 423], [11, 765], [12, 764], [13, 763], [14, 762], [15, 761], [16, 760], [17, 759], [18, 758], [19, 753], [20, 1043], [21, 1044], [22, 1045], [23, 1046], [24, 758], [25, 1046], [26, 758], [27, 759], [28, 767], [29, 766], [30, 768], [31, 766], [32, 767], [33, 423], [34, 765], [35, 423], [36, 766], [37, 761], [38, 753], [224, 774], [225, 775], [226, 776], [227, 777], [228, 778], [229, 779], [230, 780], [231, 781], [232, 782], [233, 783], [234, 784], [235, 785], [236, 786]]);
var n78 = t([[24, 767], [25, 768], [26, 767], [27, 766], [28, 760], [29, 761], [30, 759], [31, 762], [32, 760], [33, 762], [34, 763], [35, 762], [36, 761], [224, 774], [225, 775], [226, 776], [227, 777], [228, 778], [229, 779], [230, 780], [231, 781], [232, 782], [233, 783], [234, 784], [235, 785], [3, 754], [4, 755], [5, 756], [6, 757], [236, 786]]);
var n79 = t([[24, 767], [25, 768], [26, 767], [27, 766], [28, 761], [29, 762], [30, 760], [31, 764], [32, 761], [33, 763], [34, 764], [35, 763], [36, 762], [224, 774], [225, 775], [226, 776], [227, 777], [228, 778], [229, 779], [230, 780], [231, 781], [232, 782], [233, 783], [234, 784], [235, 785], [3, 754], [4, 755], [5, 756], [6, 757], [236, 786]]);
var n80 = t([[0, 9], [1, 16], [2, 803], [3, 788], [4, 789], [5, 790], [6, 791], [7, 802], [8, 801], [9, 800], [10, 458], [11, 799], [12, 798], [13, 797], [14, 796], [15, 795], [16, 794], [17, 793], [18, 792], [19, 787], [20, 1047], [21, 1048], [22, 1049], [23, 1050], [24, 792], [25, 1050], [26, 792], [27, 793], [28, 801], [29, 800], [30, 802], [31, 800], [32, 801], [33, 458], [34, 799], [35, 458], [36, 800], [37, 795], [38, 787], [224, 808], [225, 809], [226, 810], [227, 811], [228, 812], [229, 813], [230, 814], [231, 815], [232, 816], [233, 817], [234, 818], [235, 819], [236, 820]]);
var n81 = t([[24, 801], [25, 802], [26, 801], [27, 800], [28, 794], [29, 795], [30, 793], [31, 796], [32, 794], [33, 796], [34, 797], [35, 796], [36, 795], [224, 808], [225, 809], [226, 810], [227, 811], [228, 812], [229, 813], [230, 814], [231, 815], [232, 816], [233, 817], [234, 818], [235, 819], [3, 788], [4, 789], [5, 790], [6, 791], [236, 820]]);
var n82 = t([[24, 801], [25, 802], [26, 801], [27, 800], [28, 795], [29, 796], [30, 794], [31, 798], [32, 795], [33, 797], [34, 798], [35, 797], [36, 796], [224, 808], [225, 809], [226, 810], [227, 811], [228, 812], [229, 813], [230, 814], [231, 815], [232, 816], [233, 817], [234, 818], [235, 819], [3, 788], [4, 789], [5, 790], [6, 791], [236, 820]]);
var n83 = t([[0, 9], [1, 16], [2, 837], [3, 822], [4, 823], [5, 824], [6, 825], [7, 836], [8, 835], [9, 834], [10, 493], [11, 833], [12, 832], [13, 831], [14, 830], [15, 829], [16, 828], [17, 827], [18, 826], [19, 821], [20, 1051], [21, 1052], [22, 1053], [23, 1054], [24, 826], [25, 1054], [26, 826], [27, 827], [28, 835], [29, 834], [30, 836], [31, 834], [32, 835], [33, 493], [34, 833], [35, 493], [36, 834], [37, 829], [38, 821], [224, 842], [225, 843], [226, 844], [227, 845], [228, 846], [229, 847], [230, 848], [231, 849], [232, 850], [233, 851], [234, 852], [235, 853], [236, 854]]);
var n84 = t([[24, 835], [25, 836], [26, 835], [27, 834], [28, 828], [29, 829], [30, 827], [31, 830], [32, 828], [33, 830], [34, 831], [35, 830], [36, 829], [224, 842], [225, 843], [226, 844], [227, 845], [228, 846], [229, 847], [230, 848], [231, 849], [232, 850], [233, 851], [234, 852], [235, 853], [3, 822], [4, 823], [5, 824], [6, 825], [236, 854]]);
var n85 = t([[24, 835], [25, 836], [26, 835], [27, 834], [28, 829], [29, 830], [30, 828], [31, 832], [32, 829], [33, 831], [34, 832], [35, 831], [36, 830], [224, 842], [225, 843], [226, 844], [227, 845], [228, 846], [229, 847], [230, 848], [231, 849], [232, 850], [233, 851], [234, 852], [235, 853], [3, 822], [4, 823], [5, 824], [6, 825], [236, 854]]);
var n86 = t([[0, 9], [1, 16], [2, 871], [3, 856], [4, 857], [5, 858], [6, 859], [7, 870], [8, 869], [9, 868], [10, 528], [11, 867], [12, 866], [13, 865], [14, 864], [15, 863], [16, 862], [17, 861], [18, 860], [19, 855], [20, 1055], [21, 1056], [22, 1057], [23, 1058], [24, 860], [25, 1058], [26, 860], [27, 861], [28, 869], [29, 868], [30, 870], [31, 868], [32, 869], [33, 528], [34, 867], [35, 528], [36, 868], [37, 863], [38, 855], [224, 876], [225, 877], [226, 878], [227, 879], [228, 880], [229, 881], [230, 882], [231, 883], [232, 884], [233, 885], [234, 886], [235, 887], [236, 888]]);
var n87 = t([[24, 869], [25, 870], [26, 869], [27, 868], [28, 862], [29, 863], [30, 861], [31, 864], [32, 862], [33, 864], [34, 865], [35, 864], [36, 863], [224, 876], [225, 877], [226, 878], [227, 879], [228, 880], [229, 881], [230, 882], [231, 883], [232, 884], [233, 885], [234, 886], [235, 887], [3, 856], [4, 857], [5, 858], [6, 859], [236, 888]]);
var n88 = t([[24, 869], [25, 870], [26, 869], [27, 868], [28, 863], [29, 864], [30, 862], [31, 866], [32, 863], [33, 865], [34, 866], [35, 865], [36, 864], [224, 876], [225, 877], [226, 878], [227, 879], [228, 880], [229, 881], [230, 882], [231, 883], [232, 884], [233, 885], [234, 886], [235, 887], [3, 856], [4, 857], [5, 858], [6, 859], [236, 888]]);
var n89 = t([[0, 9], [1, 16], [2, 905], [3, 890], [4, 891], [5, 892], [6, 893], [7, 904], [8, 903], [9, 902], [10, 563], [11, 901], [12, 900], [13, 899], [14, 898], [15, 897], [16, 896], [17, 895], [18, 894], [19, 889], [20, 1059], [21, 1060], [22, 1061], [23, 1062], [24, 894], [25, 1062], [26, 894], [27, 895], [28, 903], [29, 902], [30, 904], [31, 902], [32, 903], [33, 563], [34, 901], [35, 563], [36, 902], [37, 897], [38, 889], [224, 910], [225, 911], [226, 912], [227, 913], [228, 914], [229, 915], [230, 916], [231, 917], [232, 918], [233, 919], [234, 920], [235, 921], [236, 922]]);
var n90 = t([[24, 903], [25, 904], [26, 903], [27, 902], [28, 896], [29, 897], [30, 895], [31, 898], [32, 896], [33, 898], [34, 899], [35, 898], [36, 897], [224, 910], [225, 911], [226, 912], [227, 913], [228, 914], [229, 915], [230, 916], [231, 917], [232, 918], [233, 919], [234, 920], [235, 921], [3, 890], [4, 891], [5, 892], [6, 893], [236, 922]]);
var n91 = t([[24, 903], [25, 904], [26, 903], [27, 902], [28, 897], [29, 898], [30, 896], [31, 900], [32, 897], [33, 899], [34, 900], [35, 899], [36, 898], [224, 910], [225, 911], [226, 912], [227, 913], [228, 914], [229, 915], [230, 916], [231, 917], [232, 918], [233, 919], [234, 920], [235, 921], [3, 890], [4, 891], [5, 892], [6, 893], [236, 922]]);
var n92 = t([[0, 9], [1, 16], [2, 939], [3, 924], [4, 925], [5, 926], [6, 927], [7, 938], [8, 937], [9, 936], [10, 598], [11, 935], [12, 934], [13, 933], [14, 932], [15, 931], [16, 930], [17, 929], [18, 928], [19, 923], [20, 1063], [21, 1064], [22, 1065], [23, 1066], [24, 928], [25, 1066], [26, 928], [27, 929], [28, 937], [29, 936], [30, 938], [31, 936], [32, 937], [33, 598], [34, 935], [35, 598], [36, 936], [37, 931], [38, 923], [224, 944], [225, 945], [226, 946], [227, 947], [228, 948], [229, 949], [230, 950], [231, 951], [232, 952], [233, 953], [234, 954], [235, 955], [236, 956]]);
var n93 = t([[24, 937], [25, 938], [26, 937], [27, 936], [28, 930], [29, 931], [30, 929], [31, 932], [32, 930], [33, 932], [34, 933], [35, 932], [36, 931], [224, 944], [225, 945], [226, 946], [227, 947], [228, 948], [229, 949], [230, 950], [231, 951], [232, 952], [233, 953], [234, 954], [235, 955], [3, 924], [4, 925], [5, 926], [6, 927], [236, 956]]);
var n94 = t([[24, 937], [25, 938], [26, 937], [27, 936], [28, 931], [29, 932], [30, 930], [31, 934], [32, 931], [33, 933], [34, 934], [35, 933], [36, 932], [224, 944], [225, 945], [226, 946], [227, 947], [228, 948], [229, 949], [230, 950], [231, 951], [232, 952], [233, 953], [234, 954], [235, 955], [3, 924], [4, 925], [5, 926], [6, 927], [236, 956]]);
var n95 = t([[0, 9], [1, 16], [2, 973], [3, 958], [4, 959], [5, 960], [6, 961], [7, 972], [8, 971], [9, 970], [10, 633], [11, 969], [12, 968], [13, 967], [14, 966], [15, 965], [16, 964], [17, 963], [18, 962], [19, 957], [20, 1067], [21, 1068], [22, 1069], [23, 1070], [24, 962], [25, 1070], [26, 962], [27, 963], [28, 971], [29, 970], [30, 972], [31, 970], [32, 971], [33, 633], [34, 969], [35, 633], [36, 970], [37, 965], [38, 957], [224, 978], [225, 979], [226, 980], [227, 981], [228, 982], [229, 983], [230, 984], [231, 985], [232, 986], [233, 987], [234, 988], [235, 989], [236, 990]]);
var n96 = t([[24, 971], [25, 972], [26, 971], [27, 970], [28, 964], [29, 965], [30, 963], [31, 966], [32, 964], [33, 966], [34, 967], [35, 966], [36, 965], [224, 978], [225, 979], [226, 980], [227, 981], [228, 982], [229, 983], [230, 984], [231, 985], [232, 986], [233, 987], [234, 988], [235, 989], [3, 958], [4, 959], [5, 960], [6, 961], [236, 990]]);
var n97 = t([[24, 971], [25, 972], [26, 971], [27, 970], [28, 965], [29, 966], [30, 964], [31, 968], [32, 965], [33, 967], [34, 968], [35, 967], [36, 966], [224, 978], [225, 979], [226, 980], [227, 981], [228, 982], [229, 983], [230, 984], [231, 985], [232, 986], [233, 987], [234, 988], [235, 989], [3, 958], [4, 959], [5, 960], [6, 961], [236, 990]]);
var n98 = t([[0, 9], [1, 16], [2, 670], [3, 656], [4, 657], [5, 658], [6, 659], [7, 669], [8, 668], [9, 667], [10, 666], [11, 197], [12, 665], [13, 664], [14, 663], [15, 13], [16, 662], [17, 661], [18, 660], [19, 655], [20, 1031], [21, 1032], [22, 1033], [23, 1034], [24, 660], [25, 1034], [26, 660], [27, 661], [28, 668], [29, 667], [30, 669], [31, 667], [32, 668], [33, 666], [34, 197], [35, 666], [36, 667], [37, 13], [38, 655], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [236, 687]]);
var n99 = t([[24, 668], [25, 669], [26, 668], [27, 667], [28, 662], [29, 13], [30, 661], [31, 663], [32, 662], [33, 663], [34, 664], [35, 663], [36, 13], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [3, 656], [4, 657], [5, 658], [6, 659], [236, 687]]);
var n100 = t([[24, 668], [25, 669], [26, 668], [27, 667], [28, 13], [29, 663], [30, 662], [31, 665], [32, 13], [33, 664], [34, 665], [35, 664], [36, 663], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [3, 656], [4, 657], [5, 658], [6, 659], [236, 687]]);
var n101 = t([[24, 17], [25, 17], [26, 17], [27, 18], [28, 12], [29, 11], [30, 13], [31, 17], [32, 12], [33, 14], [34, 13], [35, 14], [36, 15], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [3, 3], [4, 4], [5, 5], [6, 6], [236, 211]]);
var n102 = t([[24, 11], [25, 7], [26, 11], [27, 1], [28, 195], [29, 196], [30, 16], [31, 11], [32, 195], [33, 197], [34, 198], [35, 197], [36, 196], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [3, 213], [4, 214], [5, 215], [6, 216], [236, 340]]);
var n103 = t([[24, 11], [25, 11], [26, 11], [27, 7], [28, 195], [29, 16], [30, 196], [31, 11], [32, 195], [33, 197], [34, 196], [35, 197], [36, 198], [224, 328], [225, 329], [226, 330], [227, 331], [228, 332], [229, 333], [230, 334], [231, 335], [232, 336], [233, 337], [234, 338], [235, 339], [3, 213], [4, 214], [5, 215], [6, 216], [236, 340]]);
var n104 = t([[24, 355], [25, 355], [26, 355], [27, 356], [28, 10], [29, 350], [30, 351], [31, 355], [32, 10], [33, 352], [34, 351], [35, 352], [36, 353], [224, 362], [225, 363], [226, 364], [227, 365], [228, 366], [229, 367], [230, 368], [231, 369], [232, 370], [233, 371], [234, 372], [235, 373], [3, 342], [4, 343], [5, 344], [6, 345], [236, 374]]);
var n105 = t([[24, 390], [25, 390], [26, 390], [27, 391], [28, 385], [29, 384], [30, 386], [31, 390], [32, 385], [33, 387], [34, 386], [35, 387], [36, 388], [224, 397], [225, 398], [226, 399], [227, 400], [228, 401], [229, 402], [230, 403], [231, 404], [232, 405], [233, 406], [234, 407], [235, 408], [3, 376], [4, 377], [5, 378], [6, 379], [236, 409]]);
var n106 = t([[24, 425], [25, 425], [26, 425], [27, 426], [28, 420], [29, 419], [30, 421], [31, 425], [32, 420], [33, 422], [34, 421], [35, 422], [36, 423], [224, 432], [225, 433], [226, 434], [227, 435], [228, 436], [229, 437], [230, 438], [231, 439], [232, 440], [233, 441], [234, 442], [235, 443], [3, 411], [4, 412], [5, 413], [6, 414], [236, 444]]);
var n107 = t([[24, 460], [25, 460], [26, 460], [27, 461], [28, 455], [29, 454], [30, 456], [31, 460], [32, 455], [33, 457], [34, 456], [35, 457], [36, 458], [224, 467], [225, 468], [226, 469], [227, 470], [228, 471], [229, 472], [230, 473], [231, 474], [232, 475], [233, 476], [234, 477], [235, 478], [3, 446], [4, 447], [5, 448], [6, 449], [236, 479]]);
var n108 = t([[24, 495], [25, 495], [26, 495], [27, 496], [28, 490], [29, 489], [30, 491], [31, 495], [32, 490], [33, 492], [34, 491], [35, 492], [36, 493], [224, 502], [225, 503], [226, 504], [227, 505], [228, 506], [229, 507], [230, 508], [231, 509], [232, 510], [233, 511], [234, 512], [235, 513], [3, 481], [4, 482], [5, 483], [6, 484], [236, 514]]);
var n109 = t([[24, 530], [25, 530], [26, 530], [27, 531], [28, 525], [29, 524], [30, 526], [31, 530], [32, 525], [33, 527], [34, 526], [35, 527], [36, 528], [224, 537], [225, 538], [226, 539], [227, 540], [228, 541], [229, 542], [230, 543], [231, 544], [232, 545], [233, 546], [234, 547], [235, 548], [3, 516], [4, 517], [5, 518], [6, 519], [236, 549]]);
var n110 = t([[24, 565], [25, 565], [26, 565], [27, 566], [28, 560], [29, 559], [30, 561], [31, 565], [32, 560], [33, 562], [34, 561], [35, 562], [36, 563], [224, 572], [225, 573], [226, 574], [227, 575], [228, 576], [229, 577], [230, 578], [231, 579], [232, 580], [233, 581], [234, 582], [235, 583], [3, 551], [4, 552], [5, 553], [6, 554], [236, 584]]);
var n111 = t([[24, 600], [25, 600], [26, 600], [27, 601], [28, 595], [29, 594], [30, 596], [31, 600], [32, 595], [33, 597], [34, 596], [35, 597], [36, 598], [224, 607], [225, 608], [226, 609], [227, 610], [228, 611], [229, 612], [230, 613], [231, 614], [232, 615], [233, 616], [234, 617], [235, 618], [3, 586], [4, 587], [5, 588], [6, 589], [236, 619]]);
var n112 = t([[24, 635], [25, 635], [26, 635], [27, 636], [28, 630], [29, 629], [30, 631], [31, 635], [32, 630], [33, 632], [34, 631], [35, 632], [36, 633], [224, 642], [225, 643], [226, 644], [227, 645], [228, 646], [229, 647], [230, 648], [231, 649], [232, 650], [233, 651], [234, 652], [235, 653], [3, 621], [4, 622], [5, 623], [6, 624], [236, 654]]);
var n113 = t([[24, 668], [25, 668], [26, 668], [27, 669], [28, 664], [29, 663], [30, 665], [31, 668], [32, 664], [33, 197], [34, 665], [35, 197], [36, 666], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [3, 656], [4, 657], [5, 658], [6, 659], [236, 687]]);
var n114 = t([[24, 17], [25, 18], [26, 17], [27, 16], [28, 12], [29, 13], [30, 11], [31, 17], [32, 12], [33, 14], [34, 15], [35, 14], [36, 13], [224, 199], [225, 200], [226, 201], [227, 202], [228, 203], [229, 204], [230, 205], [231, 206], [232, 207], [233, 208], [234, 209], [235, 210], [3, 3], [4, 4], [5, 5], [6, 6], [236, 211]]);
var n115 = t([[24, 700], [25, 9], [26, 700], [27, 699], [28, 696], [29, 697], [30, 695], [31, 700], [32, 696], [33, 668], [34, 698], [35, 668], [36, 697], [224, 706], [225, 707], [226, 708], [227, 709], [228, 710], [229, 711], [230, 712], [231, 713], [232, 714], [233, 715], [234, 716], [235, 717], [3, 689], [4, 690], [5, 691], [6, 692], [236, 718]]);
var n116 = t([[24, 733], [25, 734], [26, 733], [27, 732], [28, 729], [29, 730], [30, 728], [31, 733], [32, 729], [33, 731], [34, 388], [35, 731], [36, 730], [224, 740], [225, 741], [226, 742], [227, 743], [228, 744], [229, 745], [230, 746], [231, 747], [232, 748], [233, 749], [234, 750], [235, 751], [3, 720], [4, 721], [5, 722], [6, 723], [236, 752]]);
var n117 = t([[24, 767], [25, 768], [26, 767], [27, 766], [28, 763], [29, 764], [30, 762], [31, 767], [32, 763], [33, 765], [34, 423], [35, 765], [36, 764], [224, 774], [225, 775], [226, 776], [227, 777], [228, 778], [229, 779], [230, 780], [231, 781], [232, 782], [233, 783], [234, 784], [235, 785], [3, 754], [4, 755], [5, 756], [6, 757], [236, 786]]);
var n118 = t([[24, 801], [25, 802], [26, 801], [27, 800], [28, 797], [29, 798], [30, 796], [31, 801], [32, 797], [33, 799], [34, 458], [35, 799], [36, 798], [224, 808], [225, 809], [226, 810], [227, 811], [228, 812], [229, 813], [230, 814], [231, 815], [232, 816], [233, 817], [234, 818], [235, 819], [3, 788], [4, 789], [5, 790], [6, 791], [236, 820]]);
var n119 = t([[24, 835], [25, 836], [26, 835], [27, 834], [28, 831], [29, 832], [30, 830], [31, 835], [32, 831], [33, 833], [34, 493], [35, 833], [36, 832], [224, 842], [225, 843], [226, 844], [227, 845], [228, 846], [229, 847], [230, 848], [231, 849], [232, 850], [233, 851], [234, 852], [235, 853], [3, 822], [4, 823], [5, 824], [6, 825], [236, 854]]);
var n120 = t([[24, 869], [25, 870], [26, 869], [27, 868], [28, 865], [29, 866], [30, 864], [31, 869], [32, 865], [33, 867], [34, 528], [35, 867], [36, 866], [224, 876], [225, 877], [226, 878], [227, 879], [228, 880], [229, 881], [230, 882], [231, 883], [232, 884], [233, 885], [234, 886], [235, 887], [3, 856], [4, 857], [5, 858], [6, 859], [236, 888]]);
var n121 = t([[24, 903], [25, 904], [26, 903], [27, 902], [28, 899], [29, 900], [30, 898], [31, 903], [32, 899], [33, 901], [34, 563], [35, 901], [36, 900], [224, 910], [225, 911], [226, 912], [227, 913], [228, 914], [229, 915], [230, 916], [231, 917], [232, 918], [233, 919], [234, 920], [235, 921], [3, 890], [4, 891], [5, 892], [6, 893], [236, 922]]);
var n122 = t([[24, 937], [25, 938], [26, 937], [27, 936], [28, 933], [29, 934], [30, 932], [31, 937], [32, 933], [33, 935], [34, 598], [35, 935], [36, 934], [224, 944], [225, 945], [226, 946], [227, 947], [228, 948], [229, 949], [230, 950], [231, 951], [232, 952], [233, 953], [234, 954], [235, 955], [3, 924], [4, 925], [5, 926], [6, 927], [236, 956]]);
var n123 = t([[24, 971], [25, 972], [26, 971], [27, 970], [28, 967], [29, 968], [30, 966], [31, 971], [32, 967], [33, 969], [34, 633], [35, 969], [36, 968], [224, 978], [225, 979], [226, 980], [227, 981], [228, 982], [229, 983], [230, 984], [231, 985], [232, 986], [233, 987], [234, 988], [235, 989], [3, 958], [4, 959], [5, 960], [6, 961], [236, 990]]);
var n124 = t([[24, 668], [25, 669], [26, 668], [27, 667], [28, 664], [29, 665], [30, 663], [31, 668], [32, 664], [33, 197], [34, 666], [35, 197], [36, 665], [224, 675], [225, 676], [226, 677], [227, 678], [228, 679], [229, 680], [230, 681], [231, 682], [232, 683], [233, 684], [234, 685], [235, 686], [3, 656], [4, 657], [5, 658], [6, 659], [236, 687]]);
var themes = {
  light: n1,
  dark: n2,
  light_accent: n3,
  dark_accent: n4,
  light_black: n5,
  light_white: n6,
  light_gray: n7,
  light_blue: n8,
  light_red: n9,
  light_yellow: n10,
  light_green: n11,
  light_orange: n12,
  light_pink: n13,
  light_purple: n14,
  light_teal: n15,
  light_neutral: n16,
  dark_black: n17,
  dark_white: n18,
  dark_gray: n19,
  dark_blue: n20,
  dark_red: n21,
  dark_yellow: n22,
  dark_green: n23,
  dark_orange: n24,
  dark_pink: n25,
  dark_purple: n26,
  dark_teal: n27,
  dark_neutral: n28,
  light_surface1: n29,
  light_white_surface1: n29,
  light_Input: n29,
  light_Progress: n29,
  light_Slider: n29,
  light_TextArea: n29,
  light_white_Input: n29,
  light_white_Progress: n29,
  light_white_Slider: n29,
  light_white_TextArea: n29,
  light_surface2: n30,
  light_white_surface2: n30,
  light_Button: n30,
  light_SliderThumb: n30,
  light_Switch: n30,
  light_white_Button: n30,
  light_white_SliderThumb: n30,
  light_white_Switch: n30,
  dark_surface1: n31,
  dark_black_surface1: n31,
  dark_Input: n31,
  dark_Progress: n31,
  dark_Slider: n31,
  dark_TextArea: n31,
  dark_black_Input: n31,
  dark_black_Progress: n31,
  dark_black_Slider: n31,
  dark_black_TextArea: n31,
  dark_surface2: n32,
  dark_black_surface2: n32,
  dark_Button: n32,
  dark_SliderThumb: n32,
  dark_Switch: n32,
  dark_black_Button: n32,
  dark_black_SliderThumb: n32,
  dark_black_Switch: n32,
  light_black_accent: n33,
  light_black_Tooltip: n33,
  light_black_SwitchThumb: n33,
  light_black_surface1: n34,
  light_black_Input: n34,
  light_black_Progress: n34,
  light_black_Slider: n34,
  light_black_TextArea: n34,
  light_black_surface2: n35,
  light_black_Button: n35,
  light_black_SliderThumb: n35,
  light_black_Switch: n35,
  light_white_accent: n36,
  light_Tooltip: n36,
  light_SwitchThumb: n36,
  light_white_Tooltip: n36,
  light_white_SwitchThumb: n36,
  light_gray_accent: n37,
  light_gray_Tooltip: n37,
  light_gray_SwitchThumb: n37,
  light_gray_surface1: n38,
  light_gray_Input: n38,
  light_gray_Progress: n38,
  light_gray_Slider: n38,
  light_gray_TextArea: n38,
  light_gray_surface2: n39,
  light_gray_Button: n39,
  light_gray_SliderThumb: n39,
  light_gray_Switch: n39,
  light_blue_accent: n40,
  light_blue_Tooltip: n40,
  light_blue_SwitchThumb: n40,
  light_blue_surface1: n41,
  light_blue_Input: n41,
  light_blue_Progress: n41,
  light_blue_Slider: n41,
  light_blue_TextArea: n41,
  light_blue_surface2: n42,
  light_blue_Button: n42,
  light_blue_SliderThumb: n42,
  light_blue_Switch: n42,
  light_red_accent: n43,
  light_red_Tooltip: n43,
  light_red_SwitchThumb: n43,
  light_red_surface1: n44,
  light_red_Input: n44,
  light_red_Progress: n44,
  light_red_Slider: n44,
  light_red_TextArea: n44,
  light_red_surface2: n45,
  light_red_Button: n45,
  light_red_SliderThumb: n45,
  light_red_Switch: n45,
  light_yellow_accent: n46,
  light_yellow_Tooltip: n46,
  light_yellow_SwitchThumb: n46,
  light_yellow_surface1: n47,
  light_yellow_Input: n47,
  light_yellow_Progress: n47,
  light_yellow_Slider: n47,
  light_yellow_TextArea: n47,
  light_yellow_surface2: n48,
  light_yellow_Button: n48,
  light_yellow_SliderThumb: n48,
  light_yellow_Switch: n48,
  light_green_accent: n49,
  light_green_Tooltip: n49,
  light_green_SwitchThumb: n49,
  light_green_surface1: n50,
  light_green_Input: n50,
  light_green_Progress: n50,
  light_green_Slider: n50,
  light_green_TextArea: n50,
  light_green_surface2: n51,
  light_green_Button: n51,
  light_green_SliderThumb: n51,
  light_green_Switch: n51,
  light_orange_accent: n52,
  light_orange_Tooltip: n52,
  light_orange_SwitchThumb: n52,
  light_orange_surface1: n53,
  light_orange_Input: n53,
  light_orange_Progress: n53,
  light_orange_Slider: n53,
  light_orange_TextArea: n53,
  light_orange_surface2: n54,
  light_orange_Button: n54,
  light_orange_SliderThumb: n54,
  light_orange_Switch: n54,
  light_pink_accent: n55,
  light_pink_Tooltip: n55,
  light_pink_SwitchThumb: n55,
  light_pink_surface1: n56,
  light_pink_Input: n56,
  light_pink_Progress: n56,
  light_pink_Slider: n56,
  light_pink_TextArea: n56,
  light_pink_surface2: n57,
  light_pink_Button: n57,
  light_pink_SliderThumb: n57,
  light_pink_Switch: n57,
  light_purple_accent: n58,
  light_purple_Tooltip: n58,
  light_purple_SwitchThumb: n58,
  light_purple_surface1: n59,
  light_purple_Input: n59,
  light_purple_Progress: n59,
  light_purple_Slider: n59,
  light_purple_TextArea: n59,
  light_purple_surface2: n60,
  light_purple_Button: n60,
  light_purple_SliderThumb: n60,
  light_purple_Switch: n60,
  light_teal_accent: n61,
  light_teal_Tooltip: n61,
  light_teal_SwitchThumb: n61,
  light_teal_surface1: n62,
  light_teal_Input: n62,
  light_teal_Progress: n62,
  light_teal_Slider: n62,
  light_teal_TextArea: n62,
  light_teal_surface2: n63,
  light_teal_Button: n63,
  light_teal_SliderThumb: n63,
  light_teal_Switch: n63,
  light_neutral_accent: n64,
  light_neutral_Tooltip: n64,
  light_neutral_SwitchThumb: n64,
  light_neutral_surface1: n65,
  light_neutral_Input: n65,
  light_neutral_Progress: n65,
  light_neutral_Slider: n65,
  light_neutral_TextArea: n65,
  light_neutral_surface2: n66,
  light_neutral_Button: n66,
  light_neutral_SliderThumb: n66,
  light_neutral_Switch: n66,
  dark_black_accent: n67,
  dark_Tooltip: n67,
  dark_SwitchThumb: n67,
  dark_black_Tooltip: n67,
  dark_black_SwitchThumb: n67,
  dark_white_accent: n68,
  dark_white_Tooltip: n68,
  dark_white_SwitchThumb: n68,
  dark_white_surface1: n69,
  dark_white_Input: n69,
  dark_white_Progress: n69,
  dark_white_Slider: n69,
  dark_white_TextArea: n69,
  dark_white_surface2: n70,
  dark_white_Button: n70,
  dark_white_SliderThumb: n70,
  dark_white_Switch: n70,
  dark_gray_accent: n71,
  dark_gray_Tooltip: n71,
  dark_gray_SwitchThumb: n71,
  dark_gray_surface1: n72,
  dark_gray_Input: n72,
  dark_gray_Progress: n72,
  dark_gray_Slider: n72,
  dark_gray_TextArea: n72,
  dark_gray_surface2: n73,
  dark_gray_Button: n73,
  dark_gray_SliderThumb: n73,
  dark_gray_Switch: n73,
  dark_blue_accent: n74,
  dark_blue_Tooltip: n74,
  dark_blue_SwitchThumb: n74,
  dark_blue_surface1: n75,
  dark_blue_Input: n75,
  dark_blue_Progress: n75,
  dark_blue_Slider: n75,
  dark_blue_TextArea: n75,
  dark_blue_surface2: n76,
  dark_blue_Button: n76,
  dark_blue_SliderThumb: n76,
  dark_blue_Switch: n76,
  dark_red_accent: n77,
  dark_red_Tooltip: n77,
  dark_red_SwitchThumb: n77,
  dark_red_surface1: n78,
  dark_red_Input: n78,
  dark_red_Progress: n78,
  dark_red_Slider: n78,
  dark_red_TextArea: n78,
  dark_red_surface2: n79,
  dark_red_Button: n79,
  dark_red_SliderThumb: n79,
  dark_red_Switch: n79,
  dark_yellow_accent: n80,
  dark_yellow_Tooltip: n80,
  dark_yellow_SwitchThumb: n80,
  dark_yellow_surface1: n81,
  dark_yellow_Input: n81,
  dark_yellow_Progress: n81,
  dark_yellow_Slider: n81,
  dark_yellow_TextArea: n81,
  dark_yellow_surface2: n82,
  dark_yellow_Button: n82,
  dark_yellow_SliderThumb: n82,
  dark_yellow_Switch: n82,
  dark_green_accent: n83,
  dark_green_Tooltip: n83,
  dark_green_SwitchThumb: n83,
  dark_green_surface1: n84,
  dark_green_Input: n84,
  dark_green_Progress: n84,
  dark_green_Slider: n84,
  dark_green_TextArea: n84,
  dark_green_surface2: n85,
  dark_green_Button: n85,
  dark_green_SliderThumb: n85,
  dark_green_Switch: n85,
  dark_orange_accent: n86,
  dark_orange_Tooltip: n86,
  dark_orange_SwitchThumb: n86,
  dark_orange_surface1: n87,
  dark_orange_Input: n87,
  dark_orange_Progress: n87,
  dark_orange_Slider: n87,
  dark_orange_TextArea: n87,
  dark_orange_surface2: n88,
  dark_orange_Button: n88,
  dark_orange_SliderThumb: n88,
  dark_orange_Switch: n88,
  dark_pink_accent: n89,
  dark_pink_Tooltip: n89,
  dark_pink_SwitchThumb: n89,
  dark_pink_surface1: n90,
  dark_pink_Input: n90,
  dark_pink_Progress: n90,
  dark_pink_Slider: n90,
  dark_pink_TextArea: n90,
  dark_pink_surface2: n91,
  dark_pink_Button: n91,
  dark_pink_SliderThumb: n91,
  dark_pink_Switch: n91,
  dark_purple_accent: n92,
  dark_purple_Tooltip: n92,
  dark_purple_SwitchThumb: n92,
  dark_purple_surface1: n93,
  dark_purple_Input: n93,
  dark_purple_Progress: n93,
  dark_purple_Slider: n93,
  dark_purple_TextArea: n93,
  dark_purple_surface2: n94,
  dark_purple_Button: n94,
  dark_purple_SliderThumb: n94,
  dark_purple_Switch: n94,
  dark_teal_accent: n95,
  dark_teal_Tooltip: n95,
  dark_teal_SwitchThumb: n95,
  dark_teal_surface1: n96,
  dark_teal_Input: n96,
  dark_teal_Progress: n96,
  dark_teal_Slider: n96,
  dark_teal_TextArea: n96,
  dark_teal_surface2: n97,
  dark_teal_Button: n97,
  dark_teal_SliderThumb: n97,
  dark_teal_Switch: n97,
  dark_neutral_accent: n98,
  dark_neutral_Tooltip: n98,
  dark_neutral_SwitchThumb: n98,
  dark_neutral_surface1: n99,
  dark_neutral_Input: n99,
  dark_neutral_Progress: n99,
  dark_neutral_Slider: n99,
  dark_neutral_TextArea: n99,
  dark_neutral_surface2: n100,
  dark_neutral_Button: n100,
  dark_neutral_SliderThumb: n100,
  dark_neutral_Switch: n100,
  light_ProgressIndicator: n101,
  light_SliderActive: n101,
  light_white_ProgressIndicator: n101,
  light_white_SliderActive: n101,
  dark_ProgressIndicator: n102,
  dark_SliderActive: n102,
  dark_black_ProgressIndicator: n102,
  dark_black_SliderActive: n102,
  light_black_ProgressIndicator: n103,
  light_black_SliderActive: n103,
  light_gray_ProgressIndicator: n104,
  light_gray_SliderActive: n104,
  light_blue_ProgressIndicator: n105,
  light_blue_SliderActive: n105,
  light_red_ProgressIndicator: n106,
  light_red_SliderActive: n106,
  light_yellow_ProgressIndicator: n107,
  light_yellow_SliderActive: n107,
  light_green_ProgressIndicator: n108,
  light_green_SliderActive: n108,
  light_orange_ProgressIndicator: n109,
  light_orange_SliderActive: n109,
  light_pink_ProgressIndicator: n110,
  light_pink_SliderActive: n110,
  light_purple_ProgressIndicator: n111,
  light_purple_SliderActive: n111,
  light_teal_ProgressIndicator: n112,
  light_teal_SliderActive: n112,
  light_neutral_ProgressIndicator: n113,
  light_neutral_SliderActive: n113,
  dark_white_ProgressIndicator: n114,
  dark_white_SliderActive: n114,
  dark_gray_ProgressIndicator: n115,
  dark_gray_SliderActive: n115,
  dark_blue_ProgressIndicator: n116,
  dark_blue_SliderActive: n116,
  dark_red_ProgressIndicator: n117,
  dark_red_SliderActive: n117,
  dark_yellow_ProgressIndicator: n118,
  dark_yellow_SliderActive: n118,
  dark_green_ProgressIndicator: n119,
  dark_green_SliderActive: n119,
  dark_orange_ProgressIndicator: n120,
  dark_orange_SliderActive: n120,
  dark_pink_ProgressIndicator: n121,
  dark_pink_SliderActive: n121,
  dark_purple_ProgressIndicator: n122,
  dark_purple_SliderActive: n122,
  dark_teal_ProgressIndicator: n123,
  dark_teal_SliderActive: n123,
  dark_neutral_ProgressIndicator: n124,
  dark_neutral_SliderActive: n124
};

// ../../node_modules/@tamagui/themes/dist/esm/utils.mjs
function sizeToSpace(v) {
  if (v === 0) return 0;
  if (v === 2) return 0.5;
  if (v === 4) return 1;
  if (v === 8) return 1.5;
  if (v <= 16) return Math.round(v * 0.333);
  return Math.floor(v * 0.7 - 12);
}
__name(sizeToSpace, "sizeToSpace");

// ../../node_modules/@tamagui/themes/dist/esm/v5-tokens.mjs
var size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size).map(([k, v]) => {
  return [k, sizeToSpace(v)];
});
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = {
  radius,
  zIndex,
  space,
  size
};

// ../../node_modules/@tamagui/shorthands/dist/esm/v4.mjs
var shorthands = createShorthands({
  // text
  text: "textAlign",
  // view
  b: "bottom",
  bg: "backgroundColor",
  content: "alignContent",
  grow: "flexGrow",
  items: "alignItems",
  justify: "justifyContent",
  l: "left",
  m: "margin",
  maxH: "maxHeight",
  maxW: "maxWidth",
  mb: "marginBottom",
  minH: "minHeight",
  minW: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  rounded: "borderRadius",
  select: "userSelect",
  self: "alignSelf",
  shrink: "flexShrink",
  t: "top",
  z: "zIndex"
});
function createShorthands(a) {
  return a;
}
__name(createShorthands, "createShorthands");

// ../../node_modules/@tamagui/config/dist/esm/v5-fonts.mjs
import { createFont, getVariableValue } from "@tamagui/core";
var defaultSizes = {
  1: 12,
  2: 13,
  3: 14,
  4: 15,
  true: 15,
  5: 16,
  6: 18,
  7: 22,
  8: 26,
  9: 30,
  10: 40,
  11: 46,
  12: 52,
  13: 60,
  14: 70,
  15: 85,
  16: 100
};
var defaultLineHeight = /* @__PURE__ */ __name((size2) => {
  const ratio = 1.5 - Math.max(0, (size2 - 20) * 4e-3);
  return Math.round(size2 * ratio);
}, "defaultLineHeight");
var createSystemFont = /* @__PURE__ */ __name(({
  font = {},
  sizeLineHeight = defaultLineHeight,
  sizeSize = /* @__PURE__ */ __name((size2) => Math.round(size2), "sizeSize")
} = {}) => {
  const size2 = Object.fromEntries(Object.entries({
    ...defaultSizes,
    ...font.size
  }).map(([k, v]) => [k, sizeSize(+v)]));
  return createFont({
    family: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: Object.fromEntries(Object.entries(size2).map(([k, v]) => [k, sizeLineHeight(getVariableValue(v))])),
    weight: {
      1: "400"
    },
    letterSpacing: {
      4: 0
    },
    ...font,
    size: size2
  });
}, "createSystemFont");
var headingLineHeight = /* @__PURE__ */ __name((size2) => Math.round(size2 * 1.12 + 5), "headingLineHeight");
var fonts = {
  body: createSystemFont(),
  heading: createSystemFont({
    font: {
      weight: {
        0: "600",
        6: "700",
        9: "800"
      }
    },
    sizeLineHeight: headingLineHeight
  })
};

// ../../node_modules/@tamagui/config/dist/esm/v5-media.mjs
var breakpoints = {
  100: 100,
  200: 200,
  xxxs: 260,
  xxs: 340,
  xs: 460,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};
var mediaQueryForceNonOverlap = 0.02;
var media = {
  touchable: {
    pointer: "coarse"
  },
  hoverable: {
    hover: "hover"
  },
  "max-xxl": {
    maxWidth: breakpoints.xxl - mediaQueryForceNonOverlap
  },
  "max-xl": {
    maxWidth: breakpoints.xl - mediaQueryForceNonOverlap
  },
  "max-lg": {
    maxWidth: breakpoints.lg - mediaQueryForceNonOverlap
  },
  "max-md": {
    maxWidth: breakpoints.md - mediaQueryForceNonOverlap
  },
  "max-sm": {
    maxWidth: breakpoints.sm - mediaQueryForceNonOverlap
  },
  "max-xs": {
    maxWidth: breakpoints.xs - mediaQueryForceNonOverlap
  },
  "max-xxs": {
    maxWidth: breakpoints.xxs - mediaQueryForceNonOverlap
  },
  "max-xxxs": {
    maxWidth: breakpoints.xxxs - mediaQueryForceNonOverlap
  },
  "max-200": {
    maxWidth: breakpoints["200"] - mediaQueryForceNonOverlap
  },
  "max-100": {
    maxWidth: breakpoints["100"] - mediaQueryForceNonOverlap
  },
  xxxs: {
    minWidth: breakpoints.xxxs
  },
  xxs: {
    minWidth: breakpoints.xxs
  },
  xs: {
    minWidth: breakpoints.xs
  },
  sm: {
    minWidth: breakpoints.sm
  },
  md: {
    minWidth: breakpoints.md
  },
  lg: {
    minWidth: breakpoints.lg
  },
  xl: {
    minWidth: breakpoints.xl
  },
  xxl: {
    minWidth: breakpoints.xxl
  },
  "max-height-lg": {
    maxHeight: breakpoints.lg - mediaQueryForceNonOverlap
  },
  "max-height-md": {
    maxHeight: breakpoints.md - mediaQueryForceNonOverlap
  },
  "max-height-sm": {
    maxHeight: breakpoints.sm - mediaQueryForceNonOverlap
  },
  "max-height-xs": {
    maxHeight: breakpoints.xs - mediaQueryForceNonOverlap
  },
  "max-height-xxs": {
    maxHeight: breakpoints.xxs - mediaQueryForceNonOverlap
  },
  "max-height-xxxs": {
    maxHeight: breakpoints.xxxs - mediaQueryForceNonOverlap
  },
  "max-height-200": {
    maxHeight: breakpoints["200"] - mediaQueryForceNonOverlap
  },
  "max-height-100": {
    maxHeight: breakpoints["100"] - mediaQueryForceNonOverlap
  },
  "height-sm": {
    minHeight: breakpoints.sm
  },
  "height-md": {
    minHeight: breakpoints.md
  },
  "height-lg": {
    minHeight: breakpoints.lg
  }
};
var mediaQueryDefaultActive = {
  touchable: false,
  hoverable: true,
  "max-xxl": true,
  "max-xl": true,
  "max-lg": true,
  "max-md": true,
  "max-sm": true,
  "max-xs": true,
  "max-xxs": false,
  "max-xxxs": false,
  xxxs: true,
  xxs: true,
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  "max-height-sm": false,
  "max-height-md": false,
  "max-height-lg": true,
  "height-sm": true,
  "height-md": true,
  "height-lg": false
};

// ../../node_modules/@tamagui/config/dist/esm/v5-base.mjs
var selectionStyles = /* @__PURE__ */ __name((theme) => theme.color5 ? {
  backgroundColor: theme.color5,
  color: theme.color11
} : null, "selectionStyles");
var settings = {
  mediaQueryDefaultActive,
  defaultFont: "body",
  fastSchemeChange: true,
  shouldAddPrefersColorThemes: true,
  allowedStyleValues: "somewhat-strict-web",
  addThemeClassName: "html",
  onlyAllowShorthands: true,
  styleCompat: "react-native"
};
var defaultConfig = {
  media,
  shorthands,
  themes,
  tokens,
  fonts,
  selectionStyles,
  settings
};

// ../../node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var PresenceContext = React.createContext(null);
var ResetPresence = /* @__PURE__ */ __name((props) => {
  const parent = React.useContext(PresenceContext);
  return /* @__PURE__ */ jsx(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
}, "ResetPresence");

// ../../node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
import * as React2 from "react";
function usePresence() {
  const context = React2.useContext(PresenceContext);
  if (!context) {
    return [true, null, context];
  }
  const {
    id: id2,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  React2.useEffect(() => register(id2), []);
  const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete?.(id2), "safeToRemove");
  return !isPresent2 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
}
__name(usePresence, "usePresence");

// ../../node_modules/@tamagui/constants/dist/esm/constants.mjs
import { useEffect as useEffect2, useLayoutEffect } from "react";
var isWeb = true;
var isBrowser = typeof document !== "undefined";
var isServer = !isBrowser;
var isClient = isBrowser;
var useIsomorphicLayoutEffect = isServer ? useEffect2 : useLayoutEffect;
var isChrome = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isAndroid = process.env.TEST_NATIVE_PLATFORM === "android" || process.env.TEST_NATIVE_PLATFORM === "androidtv";
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios" || process.env.TEST_NATIVE_PLATFORM === "tvos";
var isTV = process.env.TEST_NATIVE_PLATFORM === "androidtv" || process.env.TEST_NATIVE_PLATFORM === "tvos";

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled = /* @__PURE__ */ __name((props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1, "isDisabled");
var isDisabled_default = isDisabled;

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js
var accessibilityRoleToWebRole = {
  adjustable: "slider",
  button: "button",
  header: "heading",
  image: "img",
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: "link",
  none: "presentation",
  search: "search",
  summary: "region",
  text: null
};
var propsToAriaRole = /* @__PURE__ */ __name((_ref) => {
  var accessibilityRole = _ref.accessibilityRole, role = _ref.role;
  var _role = role || accessibilityRole;
  if (_role) {
    var inferredRole = accessibilityRoleToWebRole[_role];
    if (inferredRole !== null) {
      return inferredRole || _role;
    }
  }
}, "propsToAriaRole");
var propsToAriaRole_default = propsToAriaRole;

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js
var roleComponents = {
  article: "article",
  banner: "header",
  blockquote: "blockquote",
  button: "button",
  code: "code",
  complementary: "aside",
  contentinfo: "footer",
  deletion: "del",
  emphasis: "em",
  figure: "figure",
  insertion: "ins",
  form: "form",
  list: "ul",
  listitem: "li",
  main: "main",
  navigation: "nav",
  paragraph: "p",
  region: "section",
  strong: "strong"
};
var emptyObject = {};
var propsToAccessibilityComponent = /* @__PURE__ */ __name(function propsToAccessibilityComponent2(props) {
  if (props === void 0) {
    props = emptyObject;
  }
  var roleProp = props.role || props.accessibilityRole;
  if (roleProp === "label") {
    return "label";
  }
  var role = propsToAriaRole_default(props);
  if (role) {
    if (role === "heading") {
      var level = props.accessibilityLevel || props["aria-level"];
      if (level != null) {
        return "h" + level;
      }
      return "h1";
    }
    return roleComponents[role];
  }
}, "propsToAccessibilityComponent");
var propsToAccessibilityComponent_default = propsToAccessibilityComponent;

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js
var AccessibilityUtil = {
  isDisabled: isDisabled_default,
  propsToAccessibilityComponent: propsToAccessibilityComponent_default,
  propsToAriaRole: propsToAriaRole_default
};
var AccessibilityUtil_default = AccessibilityUtil;

// ../../node_modules/react-native-web/dist/modules/createDOMProps/index.js
var import_objectSpread23 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose3 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_objectSpread22 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose2 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/index.js
var import_objectSpread2 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/unitlessNumbers.js
var unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
var prefixes = ["ms", "Moz", "O", "Webkit"];
var prefixKey = /* @__PURE__ */ __name((prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}, "prefixKey");
Object.keys(unitlessNumbers).forEach((prop) => {
  prefixes.forEach((prefix) => {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
var unitlessNumbers_default = unitlessNumbers;

// ../../node_modules/react-native-web/dist/modules/isWebColor/index.js
var isWebColor = /* @__PURE__ */ __name((color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.indexOf("var(") === 0, "isWebColor");
var isWebColor_default = isWebColor;

// ../../node_modules/react-native-web/dist/exports/processColor/index.js
var import_normalize_colors = __toESM(require_normalize_colors());
var processColor = /* @__PURE__ */ __name((color) => {
  if (color === void 0 || color === null) {
    return color;
  }
  var int32Color = (0, import_normalize_colors.default)(color);
  if (int32Color === void 0 || int32Color === null) {
    return void 0;
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
}, "processColor");
var processColor_default = processColor;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/normalizeColor.js
var normalizeColor2 = /* @__PURE__ */ __name(function normalizeColor3(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }
  if (color == null) return;
  if (typeof color === "string" && isWebColor_default(color)) {
    return color;
  }
  var colorInt = processColor_default(color);
  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
}, "normalizeColor");
var normalizeColor_default = normalizeColor2;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/normalizeValueWithProperty.js
var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;
  if ((property == null || !unitlessNumbers_default[property]) && typeof value === "number") {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = normalizeColor_default(value);
  }
  return returnValue;
}
__name(normalizeValueWithProperty, "normalizeValueWithProperty");

// ../../node_modules/react-native-web/dist/modules/canUseDom/index.js
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDom_default = canUseDOM;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle.js
var emptyObject2 = {};
var supportsCSS3TextDecoration = !canUseDom_default || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"));
var MONOSPACE_FONT_STACK = "monospace,monospace";
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderInlineColor: ["borderRightColor", "borderLeftColor"],
  borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
  borderStyle: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderInlineStyle: ["borderRightStyle", "borderLeftStyle"],
  borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderInlineWidth: ["borderRightWidth", "borderLeftWidth"],
  insetBlock: ["top", "bottom"],
  insetInline: ["left", "right"],
  marginBlock: ["marginTop", "marginBottom"],
  marginInline: ["marginRight", "marginLeft"],
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingInline: ["paddingRight", "paddingLeft"],
  overflow: ["overflowX", "overflowY"],
  overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndColor: ["borderBottomColor"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderBlockEndWidth: ["borderBottomWidth"],
  //borderInlineStartColor: ['borderLeftColor'],
  //borderInlineStartStyle: ['borderLeftStyle'],
  //borderInlineStartWidth: ['borderLeftWidth'],
  //borderInlineEndColor: ['borderRightColor'],
  //borderInlineEndStyle: ['borderRightStyle'],
  //borderInlineEndWidth: ['borderRightWidth'],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"],
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  insetBlockEnd: ["bottom"],
  insetBlockStart: ["top"],
  //insetInlineEnd: ['right'],
  //insetInlineStart: ['left'],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  //marginInlineStart: ['marginLeft'],
  //marginInlineEnd: ['marginRight'],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"]
  //paddingInlineStart: ['marginLeft'],
  //paddingInlineEnd: ['marginRight'],
};
var createReactDOMStyle = /* @__PURE__ */ __name((style, isInline) => {
  if (!style) {
    return emptyObject2;
  }
  var resolvedStyle = {};
  var _loop = /* @__PURE__ */ __name(function _loop2() {
    var value = style[prop];
    if (
      // Ignore everything with a null value
      value == null
    ) {
      return "continue";
    }
    if (prop === "backgroundClip") {
      if (value === "text") {
        resolvedStyle.backgroundClip = value;
        resolvedStyle.WebkitBackgroundClip = value;
      }
    } else if (prop === "flex") {
      if (value === -1) {
        resolvedStyle.flexGrow = 0;
        resolvedStyle.flexShrink = 1;
        resolvedStyle.flexBasis = "auto";
      } else {
        resolvedStyle.flex = value;
      }
    } else if (prop === "font") {
      resolvedStyle[prop] = value.replace("System", SYSTEM_FONT_STACK);
    } else if (prop === "fontFamily") {
      if (value.indexOf("System") > -1) {
        var stack = value.split(/,\s*/);
        stack[stack.indexOf("System")] = SYSTEM_FONT_STACK;
        resolvedStyle[prop] = stack.join(",");
      } else if (value === "monospace") {
        resolvedStyle[prop] = MONOSPACE_FONT_STACK;
      } else {
        resolvedStyle[prop] = value;
      }
    } else if (prop === "textDecorationLine") {
      if (!supportsCSS3TextDecoration) {
        resolvedStyle.textDecoration = value;
      } else {
        resolvedStyle.textDecorationLine = value;
      }
    } else if (prop === "writingDirection") {
      resolvedStyle.direction = value;
    } else {
      var _value = normalizeValueWithProperty(style[prop], prop);
      var longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
      if (isInline && prop === "inset") {
        if (style.insetInline == null) {
          resolvedStyle.left = _value;
          resolvedStyle.right = _value;
        }
        if (style.insetBlock == null) {
          resolvedStyle.top = _value;
          resolvedStyle.bottom = _value;
        }
      } else if (isInline && prop === "margin") {
        if (style.marginInline == null) {
          resolvedStyle.marginLeft = _value;
          resolvedStyle.marginRight = _value;
        }
        if (style.marginBlock == null) {
          resolvedStyle.marginTop = _value;
          resolvedStyle.marginBottom = _value;
        }
      } else if (isInline && prop === "padding") {
        if (style.paddingInline == null) {
          resolvedStyle.paddingLeft = _value;
          resolvedStyle.paddingRight = _value;
        }
        if (style.paddingBlock == null) {
          resolvedStyle.paddingTop = _value;
          resolvedStyle.paddingBottom = _value;
        }
      } else if (longFormProperties) {
        longFormProperties.forEach((longForm, i) => {
          if (style[longForm] == null) {
            resolvedStyle[longForm] = _value;
          }
        });
      } else {
        resolvedStyle[prop] = _value;
      }
    }
  }, "_loop");
  for (var prop in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return resolvedStyle;
}, "createReactDOMStyle");
var createReactDOMStyle_default = createReactDOMStyle;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/hash.js
function murmurhash2_32_gc(str, seed) {
  var l = str.length, h = seed ^ l, i = 0, k;
  while (l >= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    k ^= k >>> 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}
__name(murmurhash2_32_gc, "murmurhash2_32_gc");
var hash = /* @__PURE__ */ __name((str) => murmurhash2_32_gc(str, 1).toString(36), "hash");
var hash_default = hash;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/hyphenateStyleName.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
__name(toHyphenLower, "toHyphenLower");
function hyphenateStyleName(name) {
  if (name in cache) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
__name(hyphenateStyleName, "hyphenateStyleName");
var hyphenateStyleName_default = hyphenateStyleName;

// ../../node_modules/react-native-web/dist/modules/prefixStyles/index.js
var import_createPrefixer = __toESM(require_createPrefixer());

// ../../node_modules/react-native-web/dist/modules/prefixStyles/static.js
var import_crossFade = __toESM(require_crossFade());
var import_imageSet = __toESM(require_imageSet());
var import_logical = __toESM(require_logical());
var import_position = __toESM(require_position());
var import_sizing = __toESM(require_sizing());
var import_transition = __toESM(require_transition());
var w = ["Webkit"];
var m = ["Moz"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];
var static_default = {
  plugins: [import_crossFade.default, import_imageSet.default, import_logical.default, import_position.default, import_sizing.default, import_transition.default],
  prefixMap: {
    appearance: wmms,
    userSelect: wm,
    textEmphasisPosition: wms,
    textEmphasis: wms,
    textEmphasisStyle: wms,
    textEmphasisColor: wms,
    boxDecorationBreak: wms,
    clipPath: w,
    maskImage: wms,
    maskMode: wms,
    maskRepeat: wms,
    maskPosition: wms,
    maskClip: wms,
    maskOrigin: wms,
    maskSize: wms,
    maskComposite: wms,
    mask: wms,
    maskBorderSource: wms,
    maskBorderMode: wms,
    maskBorderSlice: wms,
    maskBorderWidth: wms,
    maskBorderOutset: wms,
    maskBorderRepeat: wms,
    maskBorder: wms,
    maskType: wms,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    breakAfter: w,
    breakBefore: w,
    breakInside: w,
    columnCount: w,
    columnFill: w,
    columnGap: w,
    columnRule: w,
    columnRuleColor: w,
    columnRuleStyle: w,
    columnRuleWidth: w,
    columns: w,
    columnSpan: w,
    columnWidth: w,
    backdropFilter: w,
    hyphens: w,
    flowInto: w,
    flowFrom: w,
    regionFragment: w,
    textOrientation: w,
    tabSize: m,
    fontKerning: w,
    textSizeAdjust: w
  }
};

// ../../node_modules/react-native-web/dist/modules/prefixStyles/index.js
var prefixAll = (0, import_createPrefixer.default)(static_default);
var prefixStyles_default = prefixAll;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/index.js
var _excluded = ["animationKeyframes"];
var cache4 = /* @__PURE__ */ new Map();
var emptyObject3 = {};
var classicGroup = 1;
var atomicGroup = 3;
var customGroup = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  inset: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  insetBlock: 2.1,
  insetInline: 2.1,
  marginInline: 2.1,
  marginBlock: 2.1,
  paddingInline: 2.1,
  paddingBlock: 2.1,
  borderBlockStartColor: 2.2,
  borderBlockStartStyle: 2.2,
  borderBlockStartWidth: 2.2,
  borderBlockEndColor: 2.2,
  borderBlockEndStyle: 2.2,
  borderBlockEndWidth: 2.2,
  borderInlineStartColor: 2.2,
  borderInlineStartStyle: 2.2,
  borderInlineStartWidth: 2.2,
  borderInlineEndColor: 2.2,
  borderInlineEndStyle: 2.2,
  borderInlineEndWidth: 2.2,
  borderEndStartRadius: 2.2,
  borderEndEndRadius: 2.2,
  borderStartStartRadius: 2.2,
  borderStartEndRadius: 2.2,
  insetBlockEnd: 2.2,
  insetBlockStart: 2.2,
  insetInlineEnd: 2.2,
  insetInlineStart: 2.2,
  marginBlockStart: 2.2,
  marginBlockEnd: 2.2,
  marginInlineStart: 2.2,
  marginInlineEnd: 2.2,
  paddingBlockStart: 2.2,
  paddingBlockEnd: 2.2,
  paddingInlineStart: 2.2,
  paddingInlineEnd: 2.2
};
var borderTopLeftRadius = "borderTopLeftRadius";
var borderTopRightRadius = "borderTopRightRadius";
var borderBottomLeftRadius = "borderBottomLeftRadius";
var borderBottomRightRadius = "borderBottomRightRadius";
var borderLeftColor = "borderLeftColor";
var borderLeftStyle = "borderLeftStyle";
var borderLeftWidth = "borderLeftWidth";
var borderRightColor = "borderRightColor";
var borderRightStyle = "borderRightStyle";
var borderRightWidth = "borderRightWidth";
var right = "right";
var marginLeft = "marginLeft";
var marginRight = "marginRight";
var paddingLeft = "paddingLeft";
var paddingRight = "paddingRight";
var left = "left";
var PROPERTIES_FLIP = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left
};
var PROPERTIES_I18N = {
  borderStartStartRadius: borderTopLeftRadius,
  borderStartEndRadius: borderTopRightRadius,
  borderEndStartRadius: borderBottomLeftRadius,
  borderEndEndRadius: borderBottomRightRadius,
  borderInlineStartColor: borderLeftColor,
  borderInlineStartStyle: borderLeftStyle,
  borderInlineStartWidth: borderLeftWidth,
  borderInlineEndColor: borderRightColor,
  borderInlineEndStyle: borderRightStyle,
  borderInlineEndWidth: borderRightWidth,
  insetInlineEnd: right,
  insetInlineStart: left,
  marginInlineStart: marginLeft,
  marginInlineEnd: marginRight,
  paddingInlineStart: paddingLeft,
  paddingInlineEnd: paddingRight
};
var PROPERTIES_VALUE = ["clear", "float", "textAlign"];
function atomic(style) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  function atomicCompile(srcProp, prop, value) {
    var valueString = stringifyValueWithProperty(value, prop);
    var cacheKey = prop + valueString;
    var cachedResult = cache4.get(cacheKey);
    var identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      var v = srcProp !== prop ? cacheKey : valueString;
      identifier = createIdentifier("r", srcProp, v);
      var order = customGroup[srcProp] || atomicGroup;
      var rules = createAtomicRules(identifier, prop, value);
      var orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      cache4.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }
  __name(atomicCompile, "atomicCompile");
  Object.keys(style).sort().forEach((srcProp) => {
    var value = style[srcProp];
    if (value != null) {
      var localizeableValue;
      if (PROPERTIES_VALUE.indexOf(srcProp) > -1) {
        var _left = atomicCompile(srcProp, srcProp, "left");
        var _right = atomicCompile(srcProp, srcProp, "right");
        if (value === "start") {
          localizeableValue = [_left, _right];
        } else if (value === "end") {
          localizeableValue = [_right, _left];
        }
      }
      var propPolyfill = PROPERTIES_I18N[srcProp];
      if (propPolyfill != null) {
        var ltr = atomicCompile(srcProp, propPolyfill, value);
        var rtl = atomicCompile(srcProp, PROPERTIES_FLIP[propPolyfill], value);
        localizeableValue = [ltr, rtl];
      }
      if (srcProp === "transitionProperty") {
        var values = Array.isArray(value) ? value : [value];
        var polyfillIndices = [];
        for (var i = 0; i < values.length; i++) {
          var val = values[i];
          if (typeof val === "string" && PROPERTIES_I18N[val] != null) {
            polyfillIndices.push(i);
          }
        }
        if (polyfillIndices.length > 0) {
          var ltrPolyfillValues = [...values];
          var rtlPolyfillValues = [...values];
          polyfillIndices.forEach((i2) => {
            var ltrVal = ltrPolyfillValues[i2];
            if (typeof ltrVal === "string") {
              var ltrPolyfill = PROPERTIES_I18N[ltrVal];
              var rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
              ltrPolyfillValues[i2] = ltrPolyfill;
              rtlPolyfillValues[i2] = rtlPolyfill;
              var _ltr = atomicCompile(srcProp, srcProp, ltrPolyfillValues);
              var _rtl = atomicCompile(srcProp, srcProp, rtlPolyfillValues);
              localizeableValue = [_ltr, _rtl];
            }
          });
        }
      }
      if (localizeableValue == null) {
        localizeableValue = atomicCompile(srcProp, srcProp, value);
      } else {
        compiledStyle["$$css$localize"] = true;
      }
      compiledStyle[srcProp] = localizeableValue;
    }
  });
  return [compiledStyle, compiledRules];
}
__name(atomic, "atomic");
function classic(style, name) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  var animationKeyframes = style.animationKeyframes, rest = (0, import_objectWithoutPropertiesLoose.default)(style, _excluded);
  var identifier = createIdentifier("css", name, JSON.stringify(style));
  var selector = "." + identifier;
  var animationName;
  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes), animationNames = _processKeyframesValu[0], keyframesRules = _processKeyframesValu[1];
    animationName = animationNames.join(",");
    compiledRules.push(...keyframesRules);
  }
  var block = createDeclarationBlock((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, rest), {}, {
    animationName
  }));
  compiledRules.push("" + selector + block);
  compiledStyle[identifier] = identifier;
  return [compiledStyle, [[compiledRules, classicGroup]]];
}
__name(classic, "classic");
function inline(originalStyle, isRTL) {
  var style = originalStyle || emptyObject3;
  var frozenProps = {};
  var nextStyle = {};
  var _loop = /* @__PURE__ */ __name(function _loop2() {
    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      return "continue";
    }
    if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
      if (originalValue === "start") {
        value = isRTL ? "right" : "left";
      } else if (originalValue === "end") {
        value = isRTL ? "left" : "right";
      }
    }
    var propPolyfill = PROPERTIES_I18N[originalProp];
    if (propPolyfill != null) {
      prop = isRTL ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
    }
    if (originalProp === "transitionProperty") {
      var originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
      originalValues.forEach((val, i) => {
        if (typeof val === "string") {
          var valuePolyfill = PROPERTIES_I18N[val];
          if (valuePolyfill != null) {
            originalValues[i] = isRTL ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
            value = originalValues.join(" ");
          }
        }
      });
    }
    if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }
    if (prop === originalProp) {
      frozenProps[prop] = true;
    }
  }, "_loop");
  for (var originalProp in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return createReactDOMStyle_default(nextStyle, true);
}
__name(inline, "inline");
function stringifyValueWithProperty(value, property) {
  var normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== "string" ? JSON.stringify(normalizedValue || "") : normalizedValue;
}
__name(stringifyValueWithProperty, "stringifyValueWithProperty");
function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;
  switch (property) {
    case "animationKeyframes": {
      var _processKeyframesValu2 = processKeyframesValue(value), animationNames = _processKeyframesValu2[0], keyframesRules = _processKeyframesValu2[1];
      var block = createDeclarationBlock({
        animationName: animationNames.join(",")
      });
      rules.push("" + selector + block, ...keyframesRules);
      break;
    }
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      var _block = createDeclarationBlock({
        color: value,
        opacity: 1
      });
      rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
      break;
    }
    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    // See https://reactnative.dev/docs/view#pointerevents
    case "pointerEvents": {
      var finalValue = value;
      if (value === "auto") {
        finalValue = "auto!important";
      } else if (value === "none") {
        finalValue = "none!important";
        var _block2 = createDeclarationBlock({
          pointerEvents: "none"
        });
        rules.push(selector + ">* " + _block2);
      } else if (value === "box-none") {
        finalValue = "none!important";
        var _block3 = createDeclarationBlock({
          pointerEvents: "auto"
        });
        rules.push(selector + ">* " + _block3);
      } else if (value === "box-only") {
        finalValue = "auto!important";
        var _block4 = createDeclarationBlock({
          pointerEvents: "none"
        });
        rules.push(selector + ">* " + _block4);
      }
      var _block5 = createDeclarationBlock({
        pointerEvents: finalValue
      });
      rules.push("" + selector + _block5);
      break;
    }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case "scrollbarWidth": {
      if (value === "none") {
        rules.push(selector + "::-webkit-scrollbar{display:none}");
      }
      var _block6 = createDeclarationBlock({
        scrollbarWidth: value
      });
      rules.push("" + selector + _block6);
      break;
    }
    default: {
      var _block7 = createDeclarationBlock({
        [property]: value
      });
      rules.push("" + selector + _block7);
      break;
    }
  }
  return rules;
}
__name(createAtomicRules, "createAtomicRules");
function createDeclarationBlock(style) {
  var domStyle = prefixStyles_default(createReactDOMStyle_default(style));
  var declarationsString = Object.keys(domStyle).map((property) => {
    var value = domStyle[property];
    var prop = hyphenateStyleName_default(property);
    if (Array.isArray(value)) {
      return value.map((v) => prop + ":" + v).join(";");
    } else {
      return prop + ":" + value;
    }
  }).sort().join(";");
  return "{" + declarationsString + ";}";
}
__name(createDeclarationBlock, "createDeclarationBlock");
function createIdentifier(prefix, name, key) {
  var hashedString = hash_default(name + key);
  return process.env.NODE_ENV !== "production" ? prefix + "-" + name + "-" + hashedString : prefix + "-" + hashedString;
}
__name(createIdentifier, "createIdentifier");
function createKeyframes(keyframes) {
  var prefixes4 = ["-webkit-", ""];
  var identifier = createIdentifier("r", "animation", JSON.stringify(keyframes));
  var steps = "{" + Object.keys(keyframes).map((stepName) => {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join("") + "}";
  var rules = prefixes4.map((prefix) => {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return [identifier, rules];
}
__name(createKeyframes, "createKeyframes");
function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === "number") {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }
  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach((keyframes) => {
    if (typeof keyframes === "string") {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes), identifier = _createKeyframes[0], keyframesRules = _createKeyframes[1];
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });
  return [animationNames, rules];
}
__name(processKeyframesValue, "processKeyframesValue");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/dom/createCSSStyleSheet.js
function createCSSStyleSheet(id2, rootNode, textContent) {
  if (canUseDom_default) {
    var root = rootNode != null ? rootNode : document;
    var element = root.getElementById(id2);
    if (element == null) {
      element = document.createElement("style");
      element.setAttribute("id", id2);
      if (typeof textContent === "string") {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        var head = root.head;
        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    }
    return element.sheet;
  } else {
    return null;
  }
}
__name(createCSSStyleSheet, "createCSSStyleSheet");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/dom/createOrderedCSSStyleSheet.js
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet2) {
  var groups = {};
  var selectors = {};
  if (sheet2 != null) {
    var group;
    slice.call(sheet2.cssRules).forEach((cssRule, i) => {
      var cssText = cssRule.cssText;
      if (cssText.indexOf("stylesheet-group") > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);
        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }
  function sheetInsert(sheet3, group2, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group2);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position2 = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet3.cssRules.length;
    var isInserted = insertRuleAt(sheet3, text, position2);
    if (isInserted) {
      if (groups[group2].start == null) {
        groups[group2].start = position2;
      }
      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }
    return isInserted;
  }
  __name(sheetInsert, "sheetInsert");
  var OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return getOrderedGroups(groups).map((group2) => {
        var rules = groups[group2].rules;
        var marker = rules.shift();
        rules.sort();
        rules.unshift(marker);
        return rules.join("\n");
      }).join("\n");
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(cssText, groupValue) {
      var group2 = Number(groupValue);
      if (groups[group2] == null) {
        var markerRule = encodeGroupRule(group2);
        groups[group2] = {
          start: null,
          rules: [markerRule]
        };
        if (sheet2 != null) {
          sheetInsert(sheet2, group2, markerRule);
        }
      }
      var selectorText = getSelectorText(cssText);
      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group2].rules.push(cssText);
        if (sheet2 != null) {
          var isInserted = sheetInsert(sheet2, group2, cssText);
          if (!isInserted) {
            groups[group2].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
__name(createOrderedCSSStyleSheet, "createOrderedCSSStyleSheet");
function encodeGroupRule(group) {
  return '[stylesheet-group="' + group + '"]{}';
}
__name(encodeGroupRule, "encodeGroupRule");
var groupPattern = /["']/g;
function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(groupPattern)[1]);
}
__name(decodeGroupRule, "decodeGroupRule");
function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
}
__name(getOrderedGroups, "getOrderedGroups");
var selectorPattern = /\s*([,])\s*/g;
function getSelectorText(cssText) {
  var selector = cssText.split("{")[0].trim();
  return selector !== "" ? selector.replace(selectorPattern, "$1") : null;
}
__name(getSelectorText, "getSelectorText");
function insertRuleAt(root, cssText, position2) {
  try {
    root.insertRule(cssText, position2);
    return true;
  } catch (e) {
    return false;
  }
}
__name(insertRuleAt, "insertRuleAt");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/dom/index.js
var defaultId = "react-native-stylesheet";
var roots = /* @__PURE__ */ new WeakMap();
var sheets = [];
var initialRules = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function createSheet(root, id2) {
  if (id2 === void 0) {
    id2 = defaultId;
  }
  var sheet2;
  if (canUseDom_default) {
    var rootNode = root != null ? root.getRootNode() : document;
    if (sheets.length === 0) {
      sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id2));
      initialRules.forEach((rule) => {
        sheet2.insert(rule, 0);
      });
      roots.set(rootNode, sheets.length);
      sheets.push(sheet2);
    } else {
      var index = roots.get(rootNode);
      if (index == null) {
        var initialSheet = sheets[0];
        var textContent = initialSheet != null ? initialSheet.getTextContent() : "";
        sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id2, rootNode, textContent));
        roots.set(rootNode, sheets.length);
        sheets.push(sheet2);
      } else {
        sheet2 = sheets[index];
      }
    }
  } else {
    if (sheets.length === 0) {
      sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id2));
      initialRules.forEach((rule) => {
        sheet2.insert(rule, 0);
      });
      sheets.push(sheet2);
    } else {
      sheet2 = sheets[0];
    }
  }
  return {
    getTextContent() {
      return sheet2.getTextContent();
    },
    id: id2,
    insert(cssText, groupValue) {
      sheets.forEach((s) => {
        s.insert(cssText, groupValue);
      });
    }
  };
}
__name(createSheet, "createSheet");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_transform_localize_style = __toESM(require_transform_localize_style2());

// ../../node_modules/react-native-web/dist/modules/warnOnce/index.js
var warnedKeys = {};
function warnOnce(key, message) {
  if (process.env.NODE_ENV !== "production") {
    if (warnedKeys[key]) {
      return;
    }
    console.warn(message);
    warnedKeys[key] = true;
  }
}
__name(warnOnce, "warnOnce");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/preprocess.js
var emptyObject4 = {};
var defaultOffset = {
  height: 0,
  width: 0
};
var createBoxShadowValue = /* @__PURE__ */ __name((style) => {
  var shadowColor = style.shadowColor, shadowOffset = style.shadowOffset, shadowOpacity = style.shadowOpacity, shadowRadius = style.shadowRadius;
  var _ref = shadowOffset || defaultOffset, height = _ref.height, width = _ref.width;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  var color = normalizeColor_default(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}, "createBoxShadowValue");
var createTextShadowValue = /* @__PURE__ */ __name((style) => {
  var textShadowColor = style.textShadowColor, textShadowOffset = style.textShadowOffset, textShadowRadius = style.textShadowRadius;
  var _ref2 = textShadowOffset || defaultOffset, height = _ref2.height, width = _ref2.width;
  var radius2 = textShadowRadius || 0;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(radius2);
  var color = normalizeValueWithProperty(textShadowColor, "textShadowColor");
  if (color && (height !== 0 || width !== 0 || radius2 !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}, "createTextShadowValue");
var mapBoxShadow = /* @__PURE__ */ __name((boxShadow) => {
  if (typeof boxShadow === "string") {
    return boxShadow;
  }
  var offsetX = normalizeValueWithProperty(boxShadow.offsetX) || 0;
  var offsetY = normalizeValueWithProperty(boxShadow.offsetY) || 0;
  var blurRadius = normalizeValueWithProperty(boxShadow.blurRadius) || 0;
  var spreadDistance = normalizeValueWithProperty(boxShadow.spreadDistance) || 0;
  var color = normalizeColor_default(boxShadow.color) || "black";
  var position2 = boxShadow.inset ? "inset " : "";
  return "" + position2 + offsetX + " " + offsetY + " " + blurRadius + " " + spreadDistance + " " + color;
}, "mapBoxShadow");
var createBoxShadowArrayValue = /* @__PURE__ */ __name((value) => {
  return value.map(mapBoxShadow).join(", ");
}, "createBoxShadowArrayValue");
var mapTransform = /* @__PURE__ */ __name((transform) => {
  var type = Object.keys(transform)[0];
  var value = transform[type];
  if (type === "matrix" || type === "matrix3d") {
    return type + "(" + value.join(",") + ")";
  } else {
    var normalizedValue = normalizeValueWithProperty(value, type);
    return type + "(" + normalizedValue + ")";
  }
}, "mapTransform");
var createTransformValue = /* @__PURE__ */ __name((value) => {
  return value.map(mapTransform).join(" ");
}, "createTransformValue");
var createTransformOriginValue = /* @__PURE__ */ __name((value) => {
  return value.map((v) => normalizeValueWithProperty(v)).join(" ");
}, "createTransformOriginValue");
var PROPERTIES_STANDARD = {
  borderBottomEndRadius: "borderEndEndRadius",
  borderBottomStartRadius: "borderEndStartRadius",
  borderTopEndRadius: "borderStartEndRadius",
  borderTopStartRadius: "borderStartStartRadius",
  borderEndColor: "borderInlineEndColor",
  borderEndStyle: "borderInlineEndStyle",
  borderEndWidth: "borderInlineEndWidth",
  borderStartColor: "borderInlineStartColor",
  borderStartStyle: "borderInlineStartStyle",
  borderStartWidth: "borderInlineStartWidth",
  end: "insetInlineEnd",
  marginEnd: "marginInlineEnd",
  marginHorizontal: "marginInline",
  marginStart: "marginInlineStart",
  marginVertical: "marginBlock",
  paddingEnd: "paddingInlineEnd",
  paddingHorizontal: "paddingInline",
  paddingStart: "paddingInlineStart",
  paddingVertical: "paddingBlock",
  start: "insetInlineStart"
};
var ignoredProps = {
  elevation: true,
  overlayColor: true,
  resizeMode: true,
  tintColor: true
};
var preprocess = /* @__PURE__ */ __name(function preprocess2(originalStyle, options) {
  if (options === void 0) {
    options = {};
  }
  var style = originalStyle || emptyObject4;
  var nextStyle = {};
  if (options.shadow === true, style.shadowColor != null || style.shadowOffset != null || style.shadowOpacity != null || style.shadowRadius != null) {
    warnOnce("shadowStyles", '"shadow*" style props are deprecated. Use "boxShadow".');
    var boxShadowValue = createBoxShadowValue(style);
    if (boxShadowValue != null) {
      nextStyle.boxShadow = boxShadowValue;
    }
  }
  if (options.textShadow === true, style.textShadowColor != null || style.textShadowOffset != null || style.textShadowRadius != null) {
    warnOnce("textShadowStyles", '"textShadow*" style props are deprecated. Use "textShadow".');
    var textShadowValue = createTextShadowValue(style);
    if (textShadowValue != null && nextStyle.textShadow == null) {
      var textShadow = style.textShadow;
      var value = textShadow ? textShadow + ", " + textShadowValue : textShadowValue;
      nextStyle.textShadow = value;
    }
  }
  for (var originalProp in style) {
    if (
      // Ignore some React Native styles
      ignoredProps[originalProp] != null || originalProp === "shadowColor" || originalProp === "shadowOffset" || originalProp === "shadowOpacity" || originalProp === "shadowRadius" || originalProp === "textShadowColor" || originalProp === "textShadowOffset" || originalProp === "textShadowRadius"
    ) {
      continue;
    }
    var originalValue = style[originalProp];
    var prop = PROPERTIES_STANDARD[originalProp] || originalProp;
    var _value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || prop !== originalProp && style[prop] != null) {
      continue;
    }
    if (prop === "aspectRatio" && typeof _value === "number") {
      nextStyle[prop] = _value.toString();
    } else if (prop === "boxShadow") {
      if (Array.isArray(_value)) {
        _value = createBoxShadowArrayValue(_value);
      }
      var boxShadow = nextStyle.boxShadow;
      nextStyle.boxShadow = boxShadow ? _value + ", " + boxShadow : _value;
    } else if (prop === "fontVariant") {
      if (Array.isArray(_value) && _value.length > 0) {
        _value = _value.join(" ");
      }
      nextStyle[prop] = _value;
    } else if (prop === "textAlignVertical") {
      if (style.verticalAlign == null) {
        nextStyle.verticalAlign = _value === "center" ? "middle" : _value;
      }
    } else if (prop === "transform") {
      if (Array.isArray(_value)) {
        _value = createTransformValue(_value);
      }
      nextStyle.transform = _value;
    } else if (prop === "transformOrigin") {
      if (Array.isArray(_value)) {
        _value = createTransformOriginValue(_value);
      }
      nextStyle.transformOrigin = _value;
    } else {
      nextStyle[prop] = _value;
    }
  }
  return nextStyle;
}, "preprocess");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_styleq = __toESM(require_styleq());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/validate.js
var import_postcss_value_parser = __toESM(require_lib());
var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};
var invalidMultiValueShortforms = {
  flex: true,
  margin: true,
  padding: true,
  borderColor: true,
  borderRadius: true,
  borderStyle: true,
  borderWidth: true,
  inset: true,
  insetBlock: true,
  insetInline: true,
  marginBlock: true,
  marginInline: true,
  marginHorizontal: true,
  marginVertical: true,
  paddingBlock: true,
  paddingInline: true,
  paddingHorizontal: true,
  paddingVertical: true,
  overflow: true,
  overscrollBehavior: true,
  backgroundPosition: true
};
function error(message) {
  console.error(message);
}
__name(error, "error");
function validate(obj) {
  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;
    if (value === null) {
      continue;
    }
    if (typeof value === "string" && value.indexOf("!important") > -1) {
      error('Invalid style declaration "' + prop + ":" + value + '". Values cannot include "!important"');
      isInvalid = true;
    } else {
      var suggestion = "";
      if (prop === "animation" || prop === "animationName") {
        suggestion = 'Did you mean "animationKeyframes"?';
        isInvalid = true;
      } else if (prop === "direction") {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = "Please use long-form properties.";
        isInvalid = true;
      } else if (invalidMultiValueShortforms[prop]) {
        if (typeof value === "string" && (0, import_postcss_value_parser.default)(value).nodes.length > 1) {
          suggestion = 'Value is "' + value + '" but only single values are supported.';
          isInvalid = true;
        }
      }
      if (suggestion !== "") {
        error('Invalid style property of "' + prop + '". ' + suggestion);
      }
    }
    if (isInvalid) {
      delete obj[k];
    }
  }
}
__name(validate, "validate");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var _excluded2 = ["writingDirection"];
var staticStyleMap = /* @__PURE__ */ new WeakMap();
var sheet = createSheet();
var defaultPreprocessOptions = {
  shadow: true,
  textShadow: true
};
function customStyleq(styles9, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, writingDirection = _options.writingDirection, preprocessOptions = (0, import_objectWithoutPropertiesLoose2.default)(_options, _excluded2);
  var isRTL = writingDirection === "rtl";
  return import_styleq.styleq.factory({
    transform(style) {
      var compiledStyle = staticStyleMap.get(style);
      if (compiledStyle != null) {
        return (0, import_transform_localize_style.localizeStyle)(compiledStyle, isRTL);
      }
      return preprocess(style, (0, import_objectSpread22.default)((0, import_objectSpread22.default)({}, defaultPreprocessOptions), preprocessOptions));
    }
  })(styles9);
}
__name(customStyleq, "customStyleq");
function insertRules(compiledOrderedRules) {
  compiledOrderedRules.forEach((_ref) => {
    var rules = _ref[0], order = _ref[1];
    if (sheet != null) {
      rules.forEach((rule) => {
        sheet.insert(rule, order);
      });
    }
  });
}
__name(insertRules, "insertRules");
function compileAndInsertAtomic(style) {
  var _atomic = atomic(preprocess(style, defaultPreprocessOptions)), compiledStyle = _atomic[0], compiledOrderedRules = _atomic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
__name(compileAndInsertAtomic, "compileAndInsertAtomic");
function compileAndInsertReset(style, key) {
  var _classic = classic(style, key), compiledStyle = _classic[0], compiledOrderedRules = _classic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
__name(compileAndInsertReset, "compileAndInsertReset");
var absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = create({
  x: (0, import_objectSpread22.default)({}, absoluteFillObject)
}).x;
function create(styles9) {
  Object.keys(styles9).forEach((key) => {
    var styleObj = styles9[key];
    if (styleObj != null && styleObj.$$css !== true) {
      var compiledStyles;
      if (key.indexOf("$raw") > -1) {
        compiledStyles = compileAndInsertReset(styleObj, key.split("$raw")[0]);
      } else {
        if (process.env.NODE_ENV !== "production") {
          validate(styleObj);
          styles9[key] = Object.freeze(styleObj);
        }
        compiledStyles = compileAndInsertAtomic(styleObj);
      }
      staticStyleMap.set(styleObj, compiledStyles);
    }
  });
  return styles9;
}
__name(create, "create");
function compose(style1, style2) {
  if (process.env.NODE_ENV !== "production") {
    var len = arguments.length;
    if (len > 2) {
      var readableStyles = [...arguments].map((a) => flatten(a));
      throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
    }
  }
  return [style1, style2];
}
__name(compose, "compose");
function flatten() {
  for (var _len = arguments.length, styles9 = new Array(_len), _key = 0; _key < _len; _key++) {
    styles9[_key] = arguments[_key];
  }
  var flatArray = styles9.flat(Infinity);
  var result = {};
  for (var i = 0; i < flatArray.length; i++) {
    var style = flatArray[i];
    if (style != null && typeof style === "object") {
      Object.assign(result, style);
    }
  }
  return result;
}
__name(flatten, "flatten");
function getSheet() {
  return {
    id: sheet.id,
    textContent: sheet.getTextContent()
  };
}
__name(getSheet, "getSheet");
function StyleSheet(styles9, options) {
  if (options === void 0) {
    options = {};
  }
  var isRTL = options.writingDirection === "rtl";
  var styleProps2 = customStyleq(styles9, options);
  if (Array.isArray(styleProps2) && styleProps2[1] != null) {
    styleProps2[1] = inline(styleProps2[1], isRTL);
  }
  return styleProps2;
}
__name(StyleSheet, "StyleSheet");
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
StyleSheet.hairlineWidth = 1;
if (canUseDom_default && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
}
var stylesheet = StyleSheet;
var StyleSheet_default = stylesheet;

// ../../node_modules/react-native-web/dist/modules/createDOMProps/index.js
var _excluded3 = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"];
var emptyObject5 = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var uppercasePattern3 = /[A-Z]/g;
function toHyphenLower3(match) {
  return "-" + match.toLowerCase();
}
__name(toHyphenLower3, "toHyphenLower");
function hyphenateString(str) {
  return str.replace(uppercasePattern3, toHyphenLower3);
}
__name(hyphenateString, "hyphenateString");
function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
__name(processIDRefList, "processIDRefList");
var pointerEventsStyles = StyleSheet_default.create({
  auto: {
    pointerEvents: "auto"
  },
  "box-none": {
    pointerEvents: "box-none"
  },
  "box-only": {
    pointerEvents: "box-only"
  },
  none: {
    pointerEvents: "none"
  }
});
var createDOMProps = /* @__PURE__ */ __name((elementType, props, options) => {
  if (!props) {
    props = emptyObject5;
  }
  var _props = props, ariaActiveDescendant = _props["aria-activedescendant"], accessibilityActiveDescendant = _props.accessibilityActiveDescendant, ariaAtomic = _props["aria-atomic"], accessibilityAtomic = _props.accessibilityAtomic, ariaAutoComplete = _props["aria-autocomplete"], accessibilityAutoComplete = _props.accessibilityAutoComplete, ariaBusy = _props["aria-busy"], accessibilityBusy = _props.accessibilityBusy, ariaChecked = _props["aria-checked"], accessibilityChecked = _props.accessibilityChecked, ariaColumnCount = _props["aria-colcount"], accessibilityColumnCount = _props.accessibilityColumnCount, ariaColumnIndex = _props["aria-colindex"], accessibilityColumnIndex = _props.accessibilityColumnIndex, ariaColumnSpan = _props["aria-colspan"], accessibilityColumnSpan = _props.accessibilityColumnSpan, ariaControls = _props["aria-controls"], accessibilityControls = _props.accessibilityControls, ariaCurrent = _props["aria-current"], accessibilityCurrent = _props.accessibilityCurrent, ariaDescribedBy = _props["aria-describedby"], accessibilityDescribedBy = _props.accessibilityDescribedBy, ariaDetails = _props["aria-details"], accessibilityDetails = _props.accessibilityDetails, ariaDisabled = _props["aria-disabled"], accessibilityDisabled = _props.accessibilityDisabled, ariaErrorMessage = _props["aria-errormessage"], accessibilityErrorMessage = _props.accessibilityErrorMessage, ariaExpanded = _props["aria-expanded"], accessibilityExpanded = _props.accessibilityExpanded, ariaFlowTo = _props["aria-flowto"], accessibilityFlowTo = _props.accessibilityFlowTo, ariaHasPopup = _props["aria-haspopup"], accessibilityHasPopup = _props.accessibilityHasPopup, ariaHidden = _props["aria-hidden"], accessibilityHidden = _props.accessibilityHidden, ariaInvalid = _props["aria-invalid"], accessibilityInvalid = _props.accessibilityInvalid, ariaKeyShortcuts = _props["aria-keyshortcuts"], accessibilityKeyShortcuts = _props.accessibilityKeyShortcuts, ariaLabel = _props["aria-label"], accessibilityLabel = _props.accessibilityLabel, ariaLabelledBy = _props["aria-labelledby"], accessibilityLabelledBy = _props.accessibilityLabelledBy, ariaLevel = _props["aria-level"], accessibilityLevel = _props.accessibilityLevel, ariaLive = _props["aria-live"], accessibilityLiveRegion = _props.accessibilityLiveRegion, ariaModal = _props["aria-modal"], accessibilityModal = _props.accessibilityModal, ariaMultiline = _props["aria-multiline"], accessibilityMultiline = _props.accessibilityMultiline, ariaMultiSelectable = _props["aria-multiselectable"], accessibilityMultiSelectable = _props.accessibilityMultiSelectable, ariaOrientation = _props["aria-orientation"], accessibilityOrientation = _props.accessibilityOrientation, ariaOwns = _props["aria-owns"], accessibilityOwns = _props.accessibilityOwns, ariaPlaceholder = _props["aria-placeholder"], accessibilityPlaceholder = _props.accessibilityPlaceholder, ariaPosInSet = _props["aria-posinset"], accessibilityPosInSet = _props.accessibilityPosInSet, ariaPressed = _props["aria-pressed"], accessibilityPressed = _props.accessibilityPressed, ariaReadOnly = _props["aria-readonly"], accessibilityReadOnly = _props.accessibilityReadOnly, ariaRequired = _props["aria-required"], accessibilityRequired = _props.accessibilityRequired, ariaRole = _props.role, accessibilityRole = _props.accessibilityRole, ariaRoleDescription = _props["aria-roledescription"], accessibilityRoleDescription = _props.accessibilityRoleDescription, ariaRowCount = _props["aria-rowcount"], accessibilityRowCount = _props.accessibilityRowCount, ariaRowIndex = _props["aria-rowindex"], accessibilityRowIndex = _props.accessibilityRowIndex, ariaRowSpan = _props["aria-rowspan"], accessibilityRowSpan = _props.accessibilityRowSpan, ariaSelected = _props["aria-selected"], accessibilitySelected = _props.accessibilitySelected, ariaSetSize = _props["aria-setsize"], accessibilitySetSize = _props.accessibilitySetSize, ariaSort = _props["aria-sort"], accessibilitySort = _props.accessibilitySort, ariaValueMax = _props["aria-valuemax"], accessibilityValueMax = _props.accessibilityValueMax, ariaValueMin = _props["aria-valuemin"], accessibilityValueMin = _props.accessibilityValueMin, ariaValueNow = _props["aria-valuenow"], accessibilityValueNow = _props.accessibilityValueNow, ariaValueText = _props["aria-valuetext"], accessibilityValueText = _props.accessibilityValueText, dataSet = _props.dataSet, focusable = _props.focusable, id2 = _props.id, nativeID = _props.nativeID, pointerEvents = _props.pointerEvents, style = _props.style, tabIndex = _props.tabIndex, testID = _props.testID, domProps = (0, import_objectWithoutPropertiesLoose3.default)(_props, _excluded3);
  var disabled = ariaDisabled || accessibilityDisabled;
  var role = AccessibilityUtil_default.propsToAriaRole(props);
  var _ariaActiveDescendant = ariaActiveDescendant != null ? ariaActiveDescendant : accessibilityActiveDescendant;
  if (_ariaActiveDescendant != null) {
    domProps["aria-activedescendant"] = _ariaActiveDescendant;
  }
  var _ariaAtomic = ariaAtomic != null ? ariaActiveDescendant : accessibilityAtomic;
  if (_ariaAtomic != null) {
    domProps["aria-atomic"] = _ariaAtomic;
  }
  var _ariaAutoComplete = ariaAutoComplete != null ? ariaAutoComplete : accessibilityAutoComplete;
  if (_ariaAutoComplete != null) {
    domProps["aria-autocomplete"] = _ariaAutoComplete;
  }
  var _ariaBusy = ariaBusy != null ? ariaBusy : accessibilityBusy;
  if (_ariaBusy != null) {
    domProps["aria-busy"] = _ariaBusy;
  }
  var _ariaChecked = ariaChecked != null ? ariaChecked : accessibilityChecked;
  if (_ariaChecked != null) {
    domProps["aria-checked"] = _ariaChecked;
  }
  var _ariaColumnCount = ariaColumnCount != null ? ariaColumnCount : accessibilityColumnCount;
  if (_ariaColumnCount != null) {
    domProps["aria-colcount"] = _ariaColumnCount;
  }
  var _ariaColumnIndex = ariaColumnIndex != null ? ariaColumnIndex : accessibilityColumnIndex;
  if (_ariaColumnIndex != null) {
    domProps["aria-colindex"] = _ariaColumnIndex;
  }
  var _ariaColumnSpan = ariaColumnSpan != null ? ariaColumnSpan : accessibilityColumnSpan;
  if (_ariaColumnSpan != null) {
    domProps["aria-colspan"] = _ariaColumnSpan;
  }
  var _ariaControls = ariaControls != null ? ariaControls : accessibilityControls;
  if (_ariaControls != null) {
    domProps["aria-controls"] = processIDRefList(_ariaControls);
  }
  var _ariaCurrent = ariaCurrent != null ? ariaCurrent : accessibilityCurrent;
  if (_ariaCurrent != null) {
    domProps["aria-current"] = _ariaCurrent;
  }
  var _ariaDescribedBy = ariaDescribedBy != null ? ariaDescribedBy : accessibilityDescribedBy;
  if (_ariaDescribedBy != null) {
    domProps["aria-describedby"] = processIDRefList(_ariaDescribedBy);
  }
  var _ariaDetails = ariaDetails != null ? ariaDetails : accessibilityDetails;
  if (_ariaDetails != null) {
    domProps["aria-details"] = _ariaDetails;
  }
  if (disabled === true) {
    domProps["aria-disabled"] = true;
    if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.disabled = true;
    }
  }
  var _ariaErrorMessage = ariaErrorMessage != null ? ariaErrorMessage : accessibilityErrorMessage;
  if (_ariaErrorMessage != null) {
    domProps["aria-errormessage"] = _ariaErrorMessage;
  }
  var _ariaExpanded = ariaExpanded != null ? ariaExpanded : accessibilityExpanded;
  if (_ariaExpanded != null) {
    domProps["aria-expanded"] = _ariaExpanded;
  }
  var _ariaFlowTo = ariaFlowTo != null ? ariaFlowTo : accessibilityFlowTo;
  if (_ariaFlowTo != null) {
    domProps["aria-flowto"] = processIDRefList(_ariaFlowTo);
  }
  var _ariaHasPopup = ariaHasPopup != null ? ariaHasPopup : accessibilityHasPopup;
  if (_ariaHasPopup != null) {
    domProps["aria-haspopup"] = _ariaHasPopup;
  }
  var _ariaHidden = ariaHidden != null ? ariaHidden : accessibilityHidden;
  if (_ariaHidden === true) {
    domProps["aria-hidden"] = _ariaHidden;
  }
  var _ariaInvalid = ariaInvalid != null ? ariaInvalid : accessibilityInvalid;
  if (_ariaInvalid != null) {
    domProps["aria-invalid"] = _ariaInvalid;
  }
  var _ariaKeyShortcuts = ariaKeyShortcuts != null ? ariaKeyShortcuts : accessibilityKeyShortcuts;
  if (_ariaKeyShortcuts != null) {
    domProps["aria-keyshortcuts"] = processIDRefList(_ariaKeyShortcuts);
  }
  var _ariaLabel = ariaLabel != null ? ariaLabel : accessibilityLabel;
  if (_ariaLabel != null) {
    domProps["aria-label"] = _ariaLabel;
  }
  var _ariaLabelledBy = ariaLabelledBy != null ? ariaLabelledBy : accessibilityLabelledBy;
  if (_ariaLabelledBy != null) {
    domProps["aria-labelledby"] = processIDRefList(_ariaLabelledBy);
  }
  var _ariaLevel = ariaLevel != null ? ariaLevel : accessibilityLevel;
  if (_ariaLevel != null) {
    domProps["aria-level"] = _ariaLevel;
  }
  var _ariaLive = ariaLive != null ? ariaLive : accessibilityLiveRegion;
  if (_ariaLive != null) {
    domProps["aria-live"] = _ariaLive === "none" ? "off" : _ariaLive;
  }
  var _ariaModal = ariaModal != null ? ariaModal : accessibilityModal;
  if (_ariaModal != null) {
    domProps["aria-modal"] = _ariaModal;
  }
  var _ariaMultiline = ariaMultiline != null ? ariaMultiline : accessibilityMultiline;
  if (_ariaMultiline != null) {
    domProps["aria-multiline"] = _ariaMultiline;
  }
  var _ariaMultiSelectable = ariaMultiSelectable != null ? ariaMultiSelectable : accessibilityMultiSelectable;
  if (_ariaMultiSelectable != null) {
    domProps["aria-multiselectable"] = _ariaMultiSelectable;
  }
  var _ariaOrientation = ariaOrientation != null ? ariaOrientation : accessibilityOrientation;
  if (_ariaOrientation != null) {
    domProps["aria-orientation"] = _ariaOrientation;
  }
  var _ariaOwns = ariaOwns != null ? ariaOwns : accessibilityOwns;
  if (_ariaOwns != null) {
    domProps["aria-owns"] = processIDRefList(_ariaOwns);
  }
  var _ariaPlaceholder = ariaPlaceholder != null ? ariaPlaceholder : accessibilityPlaceholder;
  if (_ariaPlaceholder != null) {
    domProps["aria-placeholder"] = _ariaPlaceholder;
  }
  var _ariaPosInSet = ariaPosInSet != null ? ariaPosInSet : accessibilityPosInSet;
  if (_ariaPosInSet != null) {
    domProps["aria-posinset"] = _ariaPosInSet;
  }
  var _ariaPressed = ariaPressed != null ? ariaPressed : accessibilityPressed;
  if (_ariaPressed != null) {
    domProps["aria-pressed"] = _ariaPressed;
  }
  var _ariaReadOnly = ariaReadOnly != null ? ariaReadOnly : accessibilityReadOnly;
  if (_ariaReadOnly != null) {
    domProps["aria-readonly"] = _ariaReadOnly;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.readOnly = true;
    }
  }
  var _ariaRequired = ariaRequired != null ? ariaRequired : accessibilityRequired;
  if (_ariaRequired != null) {
    domProps["aria-required"] = _ariaRequired;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.required = accessibilityRequired;
    }
  }
  if (role != null) {
    domProps["role"] = role === "none" ? "presentation" : role;
  }
  var _ariaRoleDescription = ariaRoleDescription != null ? ariaRoleDescription : accessibilityRoleDescription;
  if (_ariaRoleDescription != null) {
    domProps["aria-roledescription"] = _ariaRoleDescription;
  }
  var _ariaRowCount = ariaRowCount != null ? ariaRowCount : accessibilityRowCount;
  if (_ariaRowCount != null) {
    domProps["aria-rowcount"] = _ariaRowCount;
  }
  var _ariaRowIndex = ariaRowIndex != null ? ariaRowIndex : accessibilityRowIndex;
  if (_ariaRowIndex != null) {
    domProps["aria-rowindex"] = _ariaRowIndex;
  }
  var _ariaRowSpan = ariaRowSpan != null ? ariaRowSpan : accessibilityRowSpan;
  if (_ariaRowSpan != null) {
    domProps["aria-rowspan"] = _ariaRowSpan;
  }
  var _ariaSelected = ariaSelected != null ? ariaSelected : accessibilitySelected;
  if (_ariaSelected != null) {
    domProps["aria-selected"] = _ariaSelected;
  }
  var _ariaSetSize = ariaSetSize != null ? ariaSetSize : accessibilitySetSize;
  if (_ariaSetSize != null) {
    domProps["aria-setsize"] = _ariaSetSize;
  }
  var _ariaSort = ariaSort != null ? ariaSort : accessibilitySort;
  if (_ariaSort != null) {
    domProps["aria-sort"] = _ariaSort;
  }
  var _ariaValueMax = ariaValueMax != null ? ariaValueMax : accessibilityValueMax;
  if (_ariaValueMax != null) {
    domProps["aria-valuemax"] = _ariaValueMax;
  }
  var _ariaValueMin = ariaValueMin != null ? ariaValueMin : accessibilityValueMin;
  if (_ariaValueMin != null) {
    domProps["aria-valuemin"] = _ariaValueMin;
  }
  var _ariaValueNow = ariaValueNow != null ? ariaValueNow : accessibilityValueNow;
  if (_ariaValueNow != null) {
    domProps["aria-valuenow"] = _ariaValueNow;
  }
  var _ariaValueText = ariaValueText != null ? ariaValueText : accessibilityValueText;
  if (_ariaValueText != null) {
    domProps["aria-valuetext"] = _ariaValueText;
  }
  if (dataSet != null) {
    for (var dataProp in dataSet) {
      if (hasOwnProperty.call(dataSet, dataProp)) {
        var dataName = hyphenateString(dataProp);
        var dataValue = dataSet[dataProp];
        if (dataValue != null) {
          domProps["data-" + dataName] = dataValue;
        }
      }
    }
  }
  if (tabIndex === 0 || tabIndex === "0" || tabIndex === -1 || tabIndex === "-1") {
    domProps.tabIndex = tabIndex;
  } else {
    if (focusable === false) {
      domProps.tabIndex = "-1";
    }
    if (
      // These native elements are keyboard focusable by default
      elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
    ) {
      if (focusable === false || accessibilityDisabled === true) {
        domProps.tabIndex = "-1";
      }
    } else if (
      // These roles are made keyboard focusable by default
      role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
    ) {
      if (focusable !== false) {
        domProps.tabIndex = "0";
      }
    } else {
      if (focusable === true) {
        domProps.tabIndex = "0";
      }
    }
  }
  if (pointerEvents != null) {
    warnOnce("pointerEvents", "props.pointerEvents is deprecated. Use style.pointerEvents");
  }
  var _StyleSheet = StyleSheet_default([style, pointerEvents && pointerEventsStyles[pointerEvents]], (0, import_objectSpread23.default)({
    writingDirection: "ltr"
  }, options)), className = _StyleSheet[0], inlineStyle = _StyleSheet[1];
  if (className) {
    domProps.className = className;
  }
  if (inlineStyle) {
    domProps.style = inlineStyle;
  }
  var _id = id2 != null ? id2 : nativeID;
  if (_id != null) {
    domProps.id = _id;
  }
  if (testID != null) {
    domProps["data-testid"] = testID;
  }
  if (domProps.type == null && elementType === "button") {
    domProps.type = "button";
  }
  return domProps;
}, "createDOMProps");
var createDOMProps_default = createDOMProps;

// ../../node_modules/react-native-web/dist/exports/createElement/index.js
import React4 from "react";

// ../../node_modules/react-native-web/dist/modules/useLocale/index.js
import React3, { createContext as createContext2, useContext as useContext3 } from "react";

// ../../node_modules/react-native-web/dist/modules/useLocale/isLocaleRTL.js
var rtlScripts = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
var rtlLangs = /* @__PURE__ */ new Set([
  "ae",
  // Avestan
  "ar",
  // Arabic
  "arc",
  // Aramaic
  "bcc",
  // Southern Balochi
  "bqi",
  // Bakthiari
  "ckb",
  // Sorani
  "dv",
  // Dhivehi
  "fa",
  "far",
  // Persian
  "glk",
  // Gilaki
  "he",
  "iw",
  // Hebrew
  "khw",
  // Khowar
  "ks",
  // Kashmiri
  "ku",
  // Kurdish
  "mzn",
  // Mazanderani
  "nqo",
  // N'Ko
  "pnb",
  // Western Punjabi
  "ps",
  // Pashto
  "sd",
  // Sindhi
  "ug",
  // Uyghur
  "ur",
  // Urdu
  "yi"
  // Yiddish
]);
var cache5 = /* @__PURE__ */ new Map();
function isLocaleRTL(locale) {
  var cachedRTL = cache5.get(locale);
  if (cachedRTL) {
    return cachedRTL;
  }
  var isRTL = false;
  if (Intl.Locale) {
    try {
      var script = new Intl.Locale(locale).maximize().script;
      isRTL = rtlScripts.has(script);
    } catch (_unused) {
      var lang = locale.split("-")[0];
      isRTL = rtlLangs.has(lang);
    }
  } else {
    var _lang = locale.split("-")[0];
    isRTL = rtlLangs.has(_lang);
  }
  cache5.set(locale, isRTL);
  return isRTL;
}
__name(isLocaleRTL, "isLocaleRTL");

// ../../node_modules/react-native-web/dist/modules/useLocale/index.js
var defaultLocale = {
  direction: "ltr",
  locale: "en-US"
};
var LocaleContext = /* @__PURE__ */ createContext2(defaultLocale);
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? "rtl" : "ltr";
}
__name(getLocaleDirection, "getLocaleDirection");
function LocaleProvider(props) {
  var direction = props.direction, locale = props.locale, children = props.children;
  var needsContext = direction || locale;
  return needsContext ? /* @__PURE__ */ React3.createElement(LocaleContext.Provider, {
    children,
    value: {
      direction: locale ? getLocaleDirection(locale) : direction,
      locale
    }
  }) : children;
}
__name(LocaleProvider, "LocaleProvider");
function useLocaleContext() {
  return useContext3(LocaleContext);
}
__name(useLocaleContext, "useLocaleContext");

// ../../node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = /* @__PURE__ */ __name((component, props, options) => {
  var accessibilityComponent;
  if (component && component.constructor === String) {
    accessibilityComponent = AccessibilityUtil_default.propsToAccessibilityComponent(props);
  }
  var Component2 = accessibilityComponent || component;
  var domProps = createDOMProps_default(Component2, props, options);
  var element = /* @__PURE__ */ React4.createElement(Component2, domProps);
  var elementWithLocaleProvider = domProps.dir ? /* @__PURE__ */ React4.createElement(LocaleProvider, {
    children: element,
    direction: domProps.dir,
    locale: domProps.lang
  }) : element;
  return elementWithLocaleProvider;
}, "createElement");
var createElement_default = createElement;

// ../../node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = /* @__PURE__ */ __name((node) => {
  if (node != null) {
    var isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
}, "getBoundingClientRect");
var getBoundingClientRect_default = getBoundingClientRect;

// ../../node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers2 = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
var prefixes3 = ["ms", "Moz", "O", "Webkit"];
var prefixKey2 = /* @__PURE__ */ __name((prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}, "prefixKey");
Object.keys(unitlessNumbers2).forEach((prop) => {
  prefixes3.forEach((prefix) => {
    unitlessNumbers2[prefixKey2(prefix, prop)] = unitlessNumbers2[prop];
  });
});
var unitlessNumbers_default2 = unitlessNumbers2;

// ../../node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(unitlessNumbers_default2.hasOwnProperty(name) && unitlessNumbers_default2[name])) {
    return value + "px";
  }
  return ("" + value).trim();
}
__name(dangerousStyleValue, "dangerousStyleValue");
var dangerousStyleValue_default = dangerousStyleValue;

// ../../node_modules/react-native-web/dist/modules/setValueForStyles/index.js
function setValueForStyles(node, styles9) {
  var style = node.style;
  for (var styleName in styles9) {
    if (!styles9.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf("--") === 0;
    var styleValue = dangerousStyleValue_default(styleName, styles9[styleName], isCustomProperty);
    if (styleName === "float") {
      styleName = "cssFloat";
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}
__name(setValueForStyles, "setValueForStyles");
var setValueForStyles_default = setValueForStyles;

// ../../node_modules/react-native-web/dist/exports/UIManager/index.js
var getRect = /* @__PURE__ */ __name((node) => {
  var height = node.offsetHeight;
  var width = node.offsetWidth;
  var left2 = node.offsetLeft;
  var top = node.offsetTop;
  node = node.offsetParent;
  while (node && node.nodeType === 1) {
    left2 += node.offsetLeft + node.clientLeft - node.scrollLeft;
    top += node.offsetTop + node.clientTop - node.scrollTop;
    node = node.offsetParent;
  }
  top -= window.scrollY;
  left2 -= window.scrollX;
  return {
    width,
    height,
    top,
    left: left2
  };
}, "getRect");
var measureLayout = /* @__PURE__ */ __name((node, relativeToNativeNode, callback) => {
  var relativeNode = relativeToNativeNode || node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      if (node.isConnected && relativeNode.isConnected) {
        var relativeRect = getRect(relativeNode);
        var _getRect = getRect(node), height = _getRect.height, left2 = _getRect.left, top = _getRect.top, width = _getRect.width;
        var x = left2 - relativeRect.left;
        var y = top - relativeRect.top;
        callback(x, y, width, height, left2, top);
      }
    }, 0);
  }
}, "measureLayout");
var elementsToIgnore = {
  A: true,
  BODY: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {
    }
  },
  focus(node) {
    try {
      var name = node.nodeName;
      if (node.getAttribute("tabIndex") == null && node.isContentEditable !== true && elementsToIgnore[name] == null) {
        node.setAttribute("tabIndex", "-1");
      }
      node.focus();
    } catch (err) {
    }
  },
  measure(node, callback) {
    measureLayout(node, null, callback);
  },
  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        var _getBoundingClientRec = getBoundingClientRect_default(node), height = _getBoundingClientRec.height, left2 = _getBoundingClientRec.left, top = _getBoundingClientRec.top, width = _getBoundingClientRec.width;
        callback(left2, top, width, height);
      }, 0);
    }
  },
  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      var value = props[prop];
      switch (prop) {
        case "style": {
          setValueForStyles_default(node, value);
          break;
        }
        case "class":
        case "className": {
          node.setAttribute("class", value);
          break;
        }
        case "text":
        case "value":
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation(config2, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
var UIManager_default = UIManager;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/Animated.js
var import_objectSpread223 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = {
  OS: "web",
  select: /* @__PURE__ */ __name((obj) => "web" in obj ? obj.web : obj.default, "select"),
  get isTesting() {
    if (process.env.NODE_ENV === "test") {
      return true;
    }
    return false;
  },
  get Version() {
    return "0.0.0";
  }
};
var Platform_default = Platform;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedFlatList.js
var import_extends7 = __toESM(require_extends());
import * as React19 from "react";

// ../../node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
var import_extends5 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose8 = __toESM(require_objectWithoutPropertiesLoose());
var import_objectSpread212 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/exports/View/index.js
var import_objectWithoutPropertiesLoose4 = __toESM(require_objectWithoutPropertiesLoose());
import * as React9 from "react";

// ../../node_modules/react-native-web/dist/modules/forwardedProps/index.js
var defaultProps = {
  children: true,
  dataSet: true,
  dir: true,
  id: true,
  ref: true,
  suppressHydrationWarning: true,
  tabIndex: true,
  testID: true,
  // @deprecated
  focusable: true,
  nativeID: true
};
var accessibilityProps = {
  "aria-activedescendant": true,
  "aria-atomic": true,
  "aria-autocomplete": true,
  "aria-busy": true,
  "aria-checked": true,
  "aria-colcount": true,
  "aria-colindex": true,
  "aria-colspan": true,
  "aria-controls": true,
  "aria-current": true,
  "aria-describedby": true,
  "aria-details": true,
  "aria-disabled": true,
  "aria-errormessage": true,
  "aria-expanded": true,
  "aria-flowto": true,
  "aria-haspopup": true,
  "aria-hidden": true,
  "aria-invalid": true,
  "aria-keyshortcuts": true,
  "aria-label": true,
  "aria-labelledby": true,
  "aria-level": true,
  "aria-live": true,
  "aria-modal": true,
  "aria-multiline": true,
  "aria-multiselectable": true,
  "aria-orientation": true,
  "aria-owns": true,
  "aria-placeholder": true,
  "aria-posinset": true,
  "aria-pressed": true,
  "aria-readonly": true,
  "aria-required": true,
  inert: true,
  role: true,
  "aria-roledescription": true,
  "aria-rowcount": true,
  "aria-rowindex": true,
  "aria-rowspan": true,
  "aria-selected": true,
  "aria-setsize": true,
  "aria-sort": true,
  "aria-valuemax": true,
  "aria-valuemin": true,
  "aria-valuenow": true,
  "aria-valuetext": true,
  // @deprecated
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true
};
var clickProps = {
  onClick: true,
  onAuxClick: true,
  onContextMenu: true,
  onGotPointerCapture: true,
  onLostPointerCapture: true,
  onPointerCancel: true,
  onPointerDown: true,
  onPointerEnter: true,
  onPointerMove: true,
  onPointerLeave: true,
  onPointerOut: true,
  onPointerOver: true,
  onPointerUp: true
};
var focusProps = {
  onBlur: true,
  onFocus: true
};
var keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
var mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
var touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
var styleProps = {
  style: true
};

// ../../node_modules/react-native-web/dist/modules/pick/index.js
function pick(obj, list) {
  var nextObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}
__name(pick, "pick");

// ../../node_modules/react-native-web/dist/modules/useLayoutEffect/index.js
import { useEffect as useEffect3, useLayoutEffect as useLayoutEffect2 } from "react";
var useLayoutEffectImpl = canUseDom_default ? useLayoutEffect2 : useEffect3;
var useLayoutEffect_default = useLayoutEffectImpl;

// ../../node_modules/react-native-web/dist/modules/useElementLayout/index.js
var DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
var didWarn = !canUseDom_default;
var resizeObserver = null;
function getResizeObserver() {
  if (canUseDom_default && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            UIManager_default.measure(node, (x, y, width, height, left2, top) => {
              var event3 = {
                // $FlowFixMe
                nativeEvent: {
                  layout: {
                    x,
                    y,
                    width,
                    height,
                    left: left2,
                    top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event3.nativeEvent, "target", {
                enumerable: true,
                get: /* @__PURE__ */ __name(() => entry.target, "get")
              });
              onLayout(event3);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
      console.warn("onLayout relies on ResizeObserver which is not supported by your browser. Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill.");
      didWarn = true;
    }
  }
  return resizeObserver;
}
__name(getResizeObserver, "getResizeObserver");
function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  useLayoutEffect_default(() => {
    var node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  useLayoutEffect_default(() => {
    var node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}
__name(useElementLayout, "useElementLayout");

// ../../node_modules/react-native-web/dist/modules/useMergeRefs/index.js
import * as React6 from "react";

// ../../node_modules/react-native-web/dist/modules/mergeRefs/index.js
import * as React5 from "react";
function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return /* @__PURE__ */ __name(function forwardRef9(node) {
    args.forEach((ref) => {
      if (ref == null) {
        return;
      }
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      if (typeof ref === "object") {
        ref.current = node;
        return;
      }
      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  }, "forwardRef");
}
__name(mergeRefs, "mergeRefs");

// ../../node_modules/react-native-web/dist/modules/useMergeRefs/index.js
function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return React6.useMemo(
    () => mergeRefs(...args),
    // eslint-disable-next-line
    [...args]
  );
}
__name(useMergeRefs, "useMergeRefs");

// ../../node_modules/react-native-web/dist/modules/useStable/index.js
import * as React7 from "react";
var UNINITIALIZED = typeof Symbol === "function" && typeof /* @__PURE__ */ Symbol() === "symbol" ? /* @__PURE__ */ Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  var ref = React7.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
__name(useStable, "useStable");

// ../../node_modules/react-native-web/dist/modules/usePlatformMethods/index.js
function usePlatformMethods(_ref) {
  var pointerEvents = _ref.pointerEvents, style = _ref.style;
  var ref = useStable(() => (hostNode) => {
    if (hostNode != null) {
      hostNode.measure = (callback) => UIManager_default.measure(hostNode, callback);
      hostNode.measureLayout = (relativeToNode, success, failure) => UIManager_default.measureLayout(hostNode, relativeToNode, failure, success);
      hostNode.measureInWindow = (callback) => UIManager_default.measureInWindow(hostNode, callback);
    }
  });
  return ref;
}
__name(usePlatformMethods, "usePlatformMethods");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/index.js
import * as React8 from "react";

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js
var emptyFunction = /* @__PURE__ */ __name(() => {
}, "emptyFunction");
var emptyObject6 = {};
var emptyArray = [];
function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}
__name(normalizeIdentifier, "normalizeIdentifier");
function createResponderEvent(domEvent, responderTouchHistoryStore2) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;
  function normalizeTouches(touches2) {
    return Array.prototype.slice.call(touches2).map((touch) => {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),
        get locationX() {
          return locationX(touch.clientX);
        },
        get locationY() {
          return locationY(touch.clientY);
        },
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp
      };
    });
  }
  __name(normalizeTouches, "normalizeTouches");
  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
  }
  var responderEvent = {
    bubbles: true,
    cancelable: true,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject6,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey,
      shiftKey,
      changedTouches,
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp,
      touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault,
    stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: responderTouchHistoryStore2.touchHistory
  };
  function locationX(x) {
    rect = rect || getBoundingClientRect_default(responderEvent.currentTarget);
    if (rect) {
      return x - rect.left;
    }
  }
  __name(locationX, "locationX");
  function locationY(y) {
    rect = rect || getBoundingClientRect_default(responderEvent.currentTarget);
    if (rect) {
      return y - rect.top;
    }
  }
  __name(locationY, "locationY");
  return responderEvent;
}
__name(createResponderEvent, "createResponderEvent");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js
var MOUSE_DOWN = "mousedown";
var MOUSE_MOVE = "mousemove";
var MOUSE_UP = "mouseup";
var MOUSE_CANCEL = "dragstart";
var TOUCH_START = "touchstart";
var TOUCH_MOVE = "touchmove";
var TOUCH_END = "touchend";
var TOUCH_CANCEL = "touchcancel";
var SCROLL = "scroll";
var SELECT = "select";
var SELECTION_CHANGE = "selectionchange";
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
__name(isStartish, "isStartish");
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
__name(isMoveish, "isMoveish");
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
__name(isEndish, "isEndish");
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
__name(isCancelish, "isCancelish");
function isScroll(eventType) {
  return eventType === SCROLL;
}
__name(isScroll, "isScroll");
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}
__name(isSelectionChange, "isSelectionChange");

// ../../node_modules/react-native-web/dist/modules/isSelectionValid/index.js
function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== "\n" && isTextNode;
}
__name(isSelectionValid, "isSelectionValid");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/utils.js
var keyName = "__reactResponderId";
function getEventPath(domEvent) {
  if (domEvent.type === "selectionchange") {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}
__name(getEventPath, "getEventPath");
function composedPathFallback(target) {
  var path = [];
  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }
  return path;
}
__name(composedPathFallback, "composedPathFallback");
function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }
  return null;
}
__name(getResponderId, "getResponderId");
function setResponderId(node, id2) {
  if (node != null) {
    node[keyName] = id2;
  }
}
__name(setResponderId, "setResponderId");
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);
  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id2 = getResponderId(node);
    if (id2 != null) {
      idPath.push(id2);
      nodePath.push(node);
    }
  }
  return {
    idPath,
    nodePath
  };
}
__name(getResponderPaths, "getResponderPaths");
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;
  if (
    // If either path is empty
    pathALength === 0 || pathBLength === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    pathA[pathALength - 1] !== pathB[pathBLength - 1]
  ) {
    return null;
  }
  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;
  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }
  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }
  var depth = pathALength;
  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }
    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }
  return null;
}
__name(getLowestCommonAncestor, "getLowestCommonAncestor");
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }
  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;
    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }
  return false;
}
__name(hasTargetTouches, "hasTargetTouches");
function hasValidSelection(domEvent) {
  if (domEvent.type === "selectionchange") {
    return isSelectionValid();
  }
  return domEvent.type === "select";
}
__name(hasValidSelection, "hasValidSelection");
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey, button = domEvent.button, buttons = domEvent.buttons, ctrlKey = domEvent.ctrlKey, type = domEvent.type;
  var isTouch = type === "touchstart" || type === "touchmove";
  var isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === "mousemove" && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;
  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }
  return false;
}
__name(isPrimaryPointerDown, "isPrimaryPointerDown");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js
var __DEV__ = process.env.NODE_ENV !== "production";
var MAX_TOUCH_BANK = 20;
function timestampForTouch(touch) {
  return touch.timeStamp || touch.timestamp;
}
__name(timestampForTouch, "timestampForTouch");
function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}
__name(createTouchRecord, "createTouchRecord");
function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}
__name(resetTouchRecord, "resetTouchRecord");
function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;
  if (identifier == null) {
    console.error("Touch object is missing identifier.");
  }
  if (__DEV__) {
    if (identifier > MAX_TOUCH_BANK) {
      console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.", identifier, MAX_TOUCH_BANK);
    }
  }
  return identifier;
}
__name(getTouchIdentifier, "getTouchIdentifier");
function recordTouchStart(touch, touchHistory) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchHistory.touchBank[identifier];
  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchHistory.touchBank[identifier] = createTouchRecord(touch);
  }
  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
__name(recordTouchStart, "recordTouchStart");
function recordTouchMove(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn("Cannot record touch move without a touch start.\n", "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
__name(recordTouchMove, "recordTouchMove");
function recordTouchEnd(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn("Cannot record touch end without a touch start.\n", "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
__name(recordTouchEnd, "recordTouchEnd");
function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}
__name(printTouch, "printTouch");
function printTouchBank(touchHistory) {
  var touchBank = touchHistory.touchBank;
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += " (original size: " + touchBank.length + ")";
  }
  return printed;
}
__name(printTouchBank, "printTouchBank");
var ResponderTouchHistoryStore = class {
  static {
    __name(this, "ResponderTouchHistoryStore");
  }
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(topLevelType, nativeEvent) {
    var touchHistory = this._touchHistory;
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchMove(touch, touchHistory));
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchStart(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchEnd(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        var touchBank = touchHistory.touchBank;
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
        if (__DEV__) {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];
          if (!(activeRecord != null && activeRecord.touchActive)) {
            console.error("Cannot find single active touch.");
          }
        }
      }
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
};

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js
var emptyObject7 = {};
var startRegistration = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: true
}];
var moveRegistration = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: true
}];
var scrollRegistration = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = /* @__PURE__ */ new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};
var responderTouchHistoryStore = new ResponderTouchHistoryStore();
function changeCurrentResponder(responder) {
  currentResponder = responder;
}
__name(changeCurrentResponder, "changeCurrentResponder");
function getResponderConfig(id2) {
  var config2 = responderListenersMap.get(id2);
  return config2 != null ? config2 : emptyObject7;
}
__name(getResponderConfig, "getResponderConfig");
function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;
  if (eventType === "touchstart") {
    isEmulatingMouseEvents = true;
  }
  if (eventType === "touchmove" || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }
  if (
    // Ignore browser emulated mouse events
    eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || // Ignore mousemove if a mousedown didn't occur first
    eventType === "mousemove" && trackedTouchCount < 1
  ) {
    return;
  }
  if (isEmulatingMouseEvents && eventType === "mouseup") {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }
    return;
  }
  var isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent);
  var isMoveEvent = isMoveish(eventType);
  var isEndEvent = isEndish(eventType);
  var isScrollEvent = isScroll(eventType);
  var isSelectionChangeEvent = isSelectionChange(eventType);
  var responderEvent = createResponderEvent(domEvent, responderTouchHistoryStore);
  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }
    responderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent);
  }
  var eventPaths = getResponderPaths(domEvent);
  var wasNegotiated = false;
  var wantsResponder;
  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;
    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = getLowestCommonAncestor(currentResponderIdPath, eventIdPath);
      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }
    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }
  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder, id2 = _currentResponder.id, node = _currentResponder.node;
    var _getResponderConfig = getResponderConfig(id2), onResponderStart = _getResponderConfig.onResponderStart, onResponderMove = _getResponderConfig.onResponderMove, onResponderEnd = _getResponderConfig.onResponderEnd, onResponderRelease = _getResponderConfig.onResponderRelease, onResponderTerminate = _getResponderConfig.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;
    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderStart";
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderMove";
        onResponderMove(responderEvent);
      }
    } else {
      var isTerminateEvent = isCancelish(eventType) || // native context menu
      eventType === "contextmenu" || // window blur
      eventType === "blur" && eventTarget === window || // responder (or ancestors) blur
      eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || // native scroll without using a pointer
      isScrollEvent && trackedTouchCount === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      isScrollEvent && eventTarget.contains(node) && eventTarget !== node || // native select/selectionchange on node
      isSelectionChangeEvent && hasValidSelection(domEvent);
      var isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);
      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderEnd";
          onResponderEnd(responderEvent);
        }
      }
      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderRelease";
          onResponderRelease(responderEvent);
        }
        changeCurrentResponder(emptyResponder);
      }
      if (isTerminateEvent) {
        var shouldTerminate = true;
        if (eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }
        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
            onResponderTerminate(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}
__name(eventListener, "eventListener");
function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath, nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;
    var check = /* @__PURE__ */ __name(function check2(id3, node2, callbackName) {
      var config2 = getResponderConfig(id3);
      var shouldSetCallback = config2[callbackName];
      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node2;
        if (shouldSetCallback(responderEvent) === true) {
          var prunedIdPath = idPath.slice(idPath.indexOf(id3));
          return {
            id: id3,
            node: node2,
            idPath: prunedIdPath
          };
        }
      }
    }, "check");
    for (var i = idPath.length - 1; i >= 0; i--) {
      var id2 = idPath[i];
      var node = nodePath[i];
      var result = check(id2, node, shouldSetCallbackCaptureName);
      if (result != null) {
        return result;
      }
      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }
    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];
        var _result = check(_id, _node, shouldSetCallbackBubbleName);
        if (_result != null) {
          return _result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;
      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}
__name(findWantsResponder, "findWantsResponder");
function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder, currentId = _currentResponder2.id, currentNode = _currentResponder2.node;
  var id2 = wantsResponder.id, node = wantsResponder.node;
  var _getResponderConfig2 = getResponderConfig(id2), onResponderGrant = _getResponderConfig2.onResponderGrant, onResponderReject = _getResponderConfig2.onResponderReject;
  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;
  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = "onResponderGrant";
      onResponderGrant(responderEvent);
    }
    changeCurrentResponder(wantsResponder);
  } else {
    var _getResponderConfig3 = getResponderConfig(currentId), onResponderTerminate = _getResponderConfig3.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;
    var allowTransfer = true;
    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }
    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
        onResponderTerminate(responderEvent);
      }
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderGrant";
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderReject";
        onResponderReject(responderEvent);
      }
    }
  }
}
__name(attemptTransfer, "attemptTransfer");
var documentEventsCapturePhase = ["blur", "scroll"];
var documentEventsBubblePhase = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
];
function attachListeners() {
  if (canUseDom_default && window.__reactResponderSystemActive == null) {
    window.addEventListener("blur", eventListener);
    documentEventsBubblePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}
__name(attachListeners, "attachListeners");
function addNode(id2, node, config2) {
  setResponderId(node, id2);
  responderListenersMap.set(id2, config2);
}
__name(addNode, "addNode");
function removeNode(id2) {
  if (currentResponder.id === id2) {
    terminateResponder();
  }
  if (responderListenersMap.has(id2)) {
    responderListenersMap.delete(id2);
  }
}
__name(removeNode, "removeNode");
function terminateResponder() {
  var _currentResponder3 = currentResponder, id2 = _currentResponder3.id, node = _currentResponder3.node;
  if (id2 != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id2), onResponderTerminate = _getResponderConfig4.onResponderTerminate;
    if (onResponderTerminate != null) {
      var event3 = createResponderEvent({}, responderTouchHistoryStore);
      event3.currentTarget = node;
      onResponderTerminate(event3);
    }
    changeCurrentResponder(emptyResponder);
  }
  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
__name(terminateResponder, "terminateResponder");
function getResponderNode() {
  return currentResponder.node;
}
__name(getResponderNode, "getResponderNode");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/index.js
var emptyObject8 = {};
var idCounter = 0;
function useStable2(getInitialValue) {
  var ref = React8.useRef(null);
  if (ref.current == null) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
__name(useStable2, "useStable");
function useResponderEvents(hostRef, config2) {
  if (config2 === void 0) {
    config2 = emptyObject8;
  }
  var id2 = useStable2(() => idCounter++);
  var isAttachedRef = React8.useRef(false);
  React8.useEffect(() => {
    attachListeners();
    return () => {
      removeNode(id2);
    };
  }, [id2]);
  React8.useEffect(() => {
    var _config = config2, onMoveShouldSetResponder = _config.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture, onScrollShouldSetResponder = _config.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = _config.onStartShouldSetResponder, onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;
    if (requiresResponderSystem) {
      addNode(id2, node, config2);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      removeNode(id2);
      isAttachedRef.current = false;
    }
  }, [config2, hostRef, id2]);
  React8.useDebugValue({
    isResponder: hostRef.current === getResponderNode()
  });
  React8.useDebugValue(config2);
}
__name(useResponderEvents, "useResponderEvents");

// ../../node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js
import { createContext as createContext3 } from "react";
var TextAncestorContext = /* @__PURE__ */ createContext3(false);
var TextAncestorContext_default = TextAncestorContext;

// ../../node_modules/react-native-web/dist/exports/View/index.js
var _excluded4 = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"];
var forwardPropsList = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  onScroll: true,
  onWheel: true,
  pointerEvents: true
});
var pickProps = /* @__PURE__ */ __name((props) => pick(props, forwardPropsList), "pickProps");
var View = /* @__PURE__ */ React9.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs, onLayout = props.onLayout, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, rest = (0, import_objectWithoutPropertiesLoose4.default)(props, _excluded4);
  if (process.env.NODE_ENV !== "production") {
    React9.Children.toArray(props.children).forEach((item) => {
      if (typeof item === "string") {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React9.useContext(TextAncestorContext_default);
  var hostRef = React9.useRef(null);
  var _useLocaleContext = useLocaleContext(), contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = "div";
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = "a";
    if (hrefAttrs != null) {
      var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === "string") {
        supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement_default(component, supportedProps, {
    writingDirection
  });
});
View.displayName = "View";
var styles = StyleSheet_default.create({
  view$raw: {
    alignContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "transparent",
    border: "0 solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    listStyle: "none",
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: "relative",
    textDecoration: "none",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  }
});
var View_default = View;

// ../../node_modules/react-native-web/dist/vendor/react-native/deepDiffer/index.js
var deepDiffer = /* @__PURE__ */ __name(function deepDiffer2(one, two, maxDepth) {
  if (maxDepth === void 0) {
    maxDepth = -1;
  }
  if (maxDepth === 0) {
    return true;
  }
  if (one === two) {
    return false;
  }
  if (typeof one === "function" && typeof two === "function") {
    return false;
  }
  if (typeof one !== "object" || one === null) {
    return one !== two;
  }
  if (typeof two !== "object" || two === null) {
    return true;
  }
  if (one.constructor !== two.constructor) {
    return true;
  }
  if (Array.isArray(one)) {
    var len = one.length;
    if (two.length !== len) {
      return true;
    }
    for (var ii = 0; ii < len; ii++) {
      if (deepDiffer2(one[ii], two[ii], maxDepth - 1)) {
        return true;
      }
    }
  } else {
    for (var key in one) {
      if (deepDiffer2(one[key], two[key], maxDepth - 1)) {
        return true;
      }
    }
    for (var twoKey in two) {
      if (one[twoKey] === void 0 && two[twoKey] !== void 0) {
        return true;
      }
    }
  }
  return false;
}, "deepDiffer");
var deepDiffer_default = deepDiffer;

// ../../node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
var import_invariant11 = __toESM(require_invariant());
import * as React17 from "react";

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js
var import_createForOfIteratorHelperLoose3 = __toESM(require_createForOfIteratorHelperLoose());
var import_extends4 = __toESM(require_extends());
var import_objectSpread211 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/exports/RefreshControl/index.js
var import_objectWithoutPropertiesLoose5 = __toESM(require_objectWithoutPropertiesLoose());
import React10 from "react";
var _excluded5 = ["colors", "enabled", "onRefresh", "progressBackgroundColor", "progressViewOffset", "refreshing", "size", "tintColor", "title", "titleColor"];
function RefreshControl(props) {
  var colors2 = props.colors, enabled = props.enabled, onRefresh = props.onRefresh, progressBackgroundColor = props.progressBackgroundColor, progressViewOffset = props.progressViewOffset, refreshing = props.refreshing, size2 = props.size, tintColor = props.tintColor, title = props.title, titleColor = props.titleColor, rest = (0, import_objectWithoutPropertiesLoose5.default)(props, _excluded5);
  return /* @__PURE__ */ React10.createElement(View_default, rest);
}
__name(RefreshControl, "RefreshControl");
var RefreshControl_default = RefreshControl;

// ../../node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_objectSpread24 = __toESM(require_objectSpread2());
var import_extends2 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose7 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/Dimensions/index.js
var import_invariant = __toESM(require_invariant());
var dimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  }
};
var listeners = {};
var shouldInit = canUseDom_default;
function update() {
  if (!canUseDom_default) {
    return;
  }
  var win = window;
  var height;
  var width;
  if (win.visualViewport) {
    var visualViewport = win.visualViewport;
    height = Math.round(visualViewport.height * visualViewport.scale);
    width = Math.round(visualViewport.width * visualViewport.scale);
  } else {
    var docEl = win.document.documentElement;
    height = docEl.clientHeight;
    width = docEl.clientWidth;
  }
  dimensions.window = {
    fontScale: 1,
    height,
    scale: win.devicePixelRatio || 1,
    width
  };
  dimensions.screen = {
    fontScale: 1,
    height: win.screen.height,
    scale: win.devicePixelRatio || 1,
    width: win.screen.width
  };
}
__name(update, "update");
function handleResize() {
  update();
  if (Array.isArray(listeners["change"])) {
    listeners["change"].forEach((handler) => handler(dimensions));
  }
}
__name(handleResize, "handleResize");
var Dimensions = class {
  static {
    __name(this, "Dimensions");
  }
  static get(dimension) {
    if (shouldInit) {
      shouldInit = false;
      update();
    }
    (0, import_invariant.default)(dimensions[dimension], "No dimension set for key " + dimension);
    return dimensions[dimension];
  }
  static set(initialDimensions) {
    if (initialDimensions) {
      if (canUseDom_default) {
        (0, import_invariant.default)(false, "Dimensions cannot be set in the browser");
      } else {
        if (initialDimensions.screen != null) {
          dimensions.screen = initialDimensions.screen;
        }
        if (initialDimensions.window != null) {
          dimensions.window = initialDimensions.window;
        }
      }
    }
  }
  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
    return {
      remove: /* @__PURE__ */ __name(() => {
        this.removeEventListener(type, handler);
      }, "remove")
    };
  }
  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter((_handler) => _handler !== handler);
    }
  }
};
if (canUseDom_default) {
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleResize, false);
  } else {
    window.addEventListener("resize", handleResize, false);
  }
}

// ../../node_modules/react-native-web/dist/modules/TextInputState/index.js
var TextInputState = {
  /**
   * Internal state
   */
  _currentlyFocusedNode: null,
  /**
   * Returns the ID of the currently focused text field, if one exists
   * If no text field is focused it returns null
   */
  currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }
    return this._currentlyFocusedNode;
  },
  /**
   * @param {Object} TextInputID id of the text field to focus
   * Focuses the specified text field
   * noop if the text field was already focused
   */
  focusTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;
      if (document.activeElement !== textFieldNode) {
        UIManager_default.focus(textFieldNode);
      }
    }
  },
  /**
   * @param {Object} textFieldNode id of the text field to focus
   * Unfocuses the specified text field
   * noop if it wasn't focused
   */
  blurTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = null;
      if (document.activeElement === textFieldNode) {
        UIManager_default.blur(textFieldNode);
      }
    }
  }
};
var TextInputState_default = TextInputState;

// ../../node_modules/react-native-web/dist/modules/dismissKeyboard/index.js
var dismissKeyboard = /* @__PURE__ */ __name(() => {
  TextInputState_default.blurTextInput(TextInputState_default.currentlyFocusedField());
}, "dismissKeyboard");
var dismissKeyboard_default = dismissKeyboard;

// ../../node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_invariant2 = __toESM(require_invariant());

// ../../node_modules/react-native-web/dist/exports/ScrollView/ScrollViewBase.js
var import_extends = __toESM(require_extends());
var import_objectWithoutPropertiesLoose6 = __toESM(require_objectWithoutPropertiesLoose());
import * as React11 from "react";
var _excluded6 = ["onScroll", "onTouchMove", "onWheel", "scrollEnabled", "scrollEventThrottle", "showsHorizontalScrollIndicator", "showsVerticalScrollIndicator", "style"];
function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },
        get y() {
          return e.target.scrollTop;
        }
      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },
        get width() {
          return e.target.scrollWidth;
        }
      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },
        get width() {
          return e.target.offsetWidth;
        }
      }
    },
    timeStamp: Date.now()
  };
}
__name(normalizeScrollEvent, "normalizeScrollEvent");
function shouldEmitScrollEvent(lastTick, eventThrottle) {
  var timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}
__name(shouldEmitScrollEvent, "shouldEmitScrollEvent");
var ScrollViewBase = /* @__PURE__ */ React11.forwardRef((props, forwardedRef) => {
  var onScroll = props.onScroll, onTouchMove = props.onTouchMove, onWheel = props.onWheel, _props$scrollEnabled = props.scrollEnabled, scrollEnabled = _props$scrollEnabled === void 0 ? true : _props$scrollEnabled, _props$scrollEventThr = props.scrollEventThrottle, scrollEventThrottle = _props$scrollEventThr === void 0 ? 0 : _props$scrollEventThr, showsHorizontalScrollIndicator = props.showsHorizontalScrollIndicator, showsVerticalScrollIndicator = props.showsVerticalScrollIndicator, style = props.style, rest = (0, import_objectWithoutPropertiesLoose6.default)(props, _excluded6);
  var scrollState = React11.useRef({
    isScrolling: false,
    scrollLastTick: 0
  });
  var scrollTimeout = React11.useRef(null);
  var scrollRef = React11.useRef(null);
  function createPreventableScrollHandler(handler) {
    return (e) => {
      if (scrollEnabled) {
        if (handler) {
          handler(e);
        }
      }
    };
  }
  __name(createPreventableScrollHandler, "createPreventableScrollHandler");
  function handleScroll(e) {
    e.stopPropagation();
    if (e.target === scrollRef.current) {
      e.persist();
      if (scrollTimeout.current != null) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        handleScrollEnd(e);
      }, 100);
      if (scrollState.current.isScrolling) {
        if (shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle)) {
          handleScrollTick(e);
        }
      } else {
        handleScrollStart(e);
      }
    }
  }
  __name(handleScroll, "handleScroll");
  function handleScrollStart(e) {
    scrollState.current.isScrolling = true;
    handleScrollTick(e);
  }
  __name(handleScrollStart, "handleScrollStart");
  function handleScrollTick(e) {
    scrollState.current.scrollLastTick = Date.now();
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  __name(handleScrollTick, "handleScrollTick");
  function handleScrollEnd(e) {
    scrollState.current.isScrolling = false;
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  __name(handleScrollEnd, "handleScrollEnd");
  var hideScrollbar = showsHorizontalScrollIndicator === false || showsVerticalScrollIndicator === false;
  return /* @__PURE__ */ React11.createElement(View_default, (0, import_extends.default)({}, rest, {
    onScroll: handleScroll,
    onTouchMove: createPreventableScrollHandler(onTouchMove),
    onWheel: createPreventableScrollHandler(onWheel),
    ref: useMergeRefs(scrollRef, forwardedRef),
    style: [style, !scrollEnabled && styles2.scrollDisabled, hideScrollbar && styles2.hideScrollbar]
  }));
});
var styles2 = StyleSheet_default.create({
  scrollDisabled: {
    overflowX: "hidden",
    overflowY: "hidden",
    touchAction: "none"
  },
  hideScrollbar: {
    scrollbarWidth: "none"
  }
});
var ScrollViewBase_default = ScrollViewBase;

// ../../node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_warning = __toESM(require_warning());
import React12 from "react";
var _excluded7 = ["contentContainerStyle", "horizontal", "onContentSizeChange", "refreshControl", "stickyHeaderIndices", "pagingEnabled", "forwardedRef", "keyboardDismissMode", "onScroll", "centerContent"];
var emptyObject9 = {};
var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
var ScrollView = class extends React12.Component {
  static {
    __name(this, "ScrollView");
  }
  constructor() {
    super(...arguments);
    this._scrollNodeRef = null;
    this._innerViewRef = null;
    this.isTouching = false;
    this.lastMomentumScrollBeginTime = 0;
    this.lastMomentumScrollEndTime = 0;
    this.observedScrollSinceBecomingResponder = false;
    this.becameResponderWhileAnimating = false;
    this.scrollResponderHandleScrollShouldSetResponder = () => {
      return this.isTouching;
    };
    this.scrollResponderHandleStartShouldSetResponderCapture = (e) => {
      return this.scrollResponderIsAnimating();
    };
    this.scrollResponderHandleTerminationRequest = () => {
      return !this.observedScrollSinceBecomingResponder;
    };
    this.scrollResponderHandleTouchEnd = (e) => {
      var nativeEvent = e.nativeEvent;
      this.isTouching = nativeEvent.touches.length !== 0;
      this.props.onTouchEnd && this.props.onTouchEnd(e);
    };
    this.scrollResponderHandleResponderRelease = (e) => {
      this.props.onResponderRelease && this.props.onResponderRelease(e);
      var currentlyFocusedTextInput = TextInputState_default.currentlyFocusedField();
      if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating) {
        this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
        TextInputState_default.blurTextInput(currentlyFocusedTextInput);
      }
    };
    this.scrollResponderHandleScroll = (e) => {
      this.observedScrollSinceBecomingResponder = true;
      this.props.onScroll && this.props.onScroll(e);
    };
    this.scrollResponderHandleResponderGrant = (e) => {
      this.observedScrollSinceBecomingResponder = false;
      this.props.onResponderGrant && this.props.onResponderGrant(e);
      this.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
    };
    this.scrollResponderHandleScrollBeginDrag = (e) => {
      this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
    };
    this.scrollResponderHandleScrollEndDrag = (e) => {
      this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
    };
    this.scrollResponderHandleMomentumScrollBegin = (e) => {
      this.lastMomentumScrollBeginTime = Date.now();
      this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
    };
    this.scrollResponderHandleMomentumScrollEnd = (e) => {
      this.lastMomentumScrollEndTime = Date.now();
      this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
    };
    this.scrollResponderHandleTouchStart = (e) => {
      this.isTouching = true;
      this.props.onTouchStart && this.props.onTouchStart(e);
    };
    this.scrollResponderHandleTouchMove = (e) => {
      this.props.onTouchMove && this.props.onTouchMove(e);
    };
    this.scrollResponderIsAnimating = () => {
      var now = Date.now();
      var timeSinceLastMomentumScrollEnd = now - this.lastMomentumScrollEndTime;
      var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.lastMomentumScrollEndTime < this.lastMomentumScrollBeginTime;
      return isAnimating;
    };
    this.scrollResponderScrollTo = (x, y, animated) => {
      if (typeof x === "number") {
        console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");
      } else {
        var _ref = x || emptyObject9;
        x = _ref.x;
        y = _ref.y;
        animated = _ref.animated;
      }
      var node = this.getScrollableNode();
      var left2 = x || 0;
      var top = y || 0;
      if (node != null) {
        if (typeof node.scroll === "function") {
          node.scroll({
            top,
            left: left2,
            behavior: !animated ? "auto" : "smooth"
          });
        } else {
          node.scrollLeft = left2;
          node.scrollTop = top;
        }
      }
    };
    this.scrollResponderZoomTo = (rect, animated) => {
      if (Platform_default.OS !== "ios") {
        (0, import_invariant2.default)("zoomToRect is not implemented");
      }
    };
    this.scrollResponderScrollNativeHandleToKeyboard = (nodeHandle, additionalOffset, preventNegativeScrollOffset) => {
      this.additionalScrollOffset = additionalOffset || 0;
      this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
      UIManager_default.measureLayout(nodeHandle, this.getInnerViewNode(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
    };
    this.scrollResponderInputMeasureAndScrollToKeyboard = (left2, top, width, height) => {
      var keyboardScreenY = Dimensions.get("window").height;
      if (this.keyboardWillOpenTo) {
        keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
      }
      var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
      if (this.preventNegativeScrollOffset) {
        scrollOffsetY = Math.max(0, scrollOffsetY);
      }
      this.scrollResponderScrollTo({
        x: 0,
        y: scrollOffsetY,
        animated: true
      });
      this.additionalOffset = 0;
      this.preventNegativeScrollOffset = false;
    };
    this.scrollResponderKeyboardWillShow = (e) => {
      this.keyboardWillOpenTo = e;
      this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
    };
    this.scrollResponderKeyboardWillHide = (e) => {
      this.keyboardWillOpenTo = null;
      this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
    };
    this.scrollResponderKeyboardDidShow = (e) => {
      if (e) {
        this.keyboardWillOpenTo = e;
      }
      this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
    };
    this.scrollResponderKeyboardDidHide = (e) => {
      this.keyboardWillOpenTo = null;
      this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
    };
    this.flashScrollIndicators = () => {
      this.scrollResponderFlashScrollIndicators();
    };
    this.getScrollResponder = () => {
      return this;
    };
    this.getScrollableNode = () => {
      return this._scrollNodeRef;
    };
    this.getInnerViewRef = () => {
      return this._innerViewRef;
    };
    this.getInnerViewNode = () => {
      return this._innerViewRef;
    };
    this.getNativeScrollRef = () => {
      return this._scrollNodeRef;
    };
    this.scrollTo = (y, x, animated) => {
      if (typeof y === "number") {
        console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
      } else {
        var _ref2 = y || emptyObject9;
        x = _ref2.x;
        y = _ref2.y;
        animated = _ref2.animated;
      }
      this.scrollResponderScrollTo({
        x: x || 0,
        y: y || 0,
        animated: animated !== false
      });
    };
    this.scrollToEnd = (options) => {
      var animated = (options && options.animated) !== false;
      var horizontal = this.props.horizontal;
      var scrollResponderNode = this.getScrollableNode();
      var x = horizontal ? scrollResponderNode.scrollWidth : 0;
      var y = horizontal ? 0 : scrollResponderNode.scrollHeight;
      this.scrollResponderScrollTo({
        x,
        y,
        animated
      });
    };
    this._handleContentOnLayout = (e) => {
      var _e$nativeEvent$layout = e.nativeEvent.layout, width = _e$nativeEvent$layout.width, height = _e$nativeEvent$layout.height;
      this.props.onContentSizeChange(width, height);
    };
    this._handleScroll = (e) => {
      if (process.env.NODE_ENV !== "production") {
        if (this.props.onScroll && this.props.scrollEventThrottle == null) {
          console.log("You specified `onScroll` on a <ScrollView> but not `scrollEventThrottle`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use a bigger number if you don't need as much precision.");
        }
      }
      if (this.props.keyboardDismissMode === "on-drag") {
        dismissKeyboard_default();
      }
      this.scrollResponderHandleScroll(e);
    };
    this._setInnerViewRef = (node) => {
      this._innerViewRef = node;
    };
    this._setScrollNodeRef = (node) => {
      this._scrollNodeRef = node;
      if (node != null) {
        node.getScrollResponder = this.getScrollResponder;
        node.getInnerViewNode = this.getInnerViewNode;
        node.getInnerViewRef = this.getInnerViewRef;
        node.getNativeScrollRef = this.getNativeScrollRef;
        node.getScrollableNode = this.getScrollableNode;
        node.scrollTo = this.scrollTo;
        node.scrollToEnd = this.scrollToEnd;
        node.flashScrollIndicators = this.flashScrollIndicators;
        node.scrollResponderZoomTo = this.scrollResponderZoomTo;
        node.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard;
      }
      var ref = mergeRefs(this.props.forwardedRef);
      ref(node);
    };
  }
  /**
   * ------------------------------------------------------
   * START SCROLLRESPONDER
   * ------------------------------------------------------
   */
  // Reset to false every time becomes responder. This is used to:
  // - Determine if the scroll view has been scrolled and therefore should
  // refuse to give up its responder lock.
  // - Determine if releasing should dismiss the keyboard when we are in
  // tap-to-dismiss mode (!this.props.keyboardShouldPersistTaps).
  /**
   * Invoke this from an `onScroll` event.
   */
  /**
   * Merely touch starting is not sufficient for a scroll view to become the
   * responder. Being the "responder" means that the very next touch move/end
   * event will result in an action/movement.
   *
   * Invoke this from an `onStartShouldSetResponder` event.
   *
   * `onStartShouldSetResponder` is used when the next move/end will trigger
   * some UI movement/action, but when you want to yield priority to views
   * nested inside of the view.
   *
   * There may be some cases where scroll views actually should return `true`
   * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
   * that gives priority to nested views.
   *
   * - If a single tap on the scroll view triggers an action such as
   *   recentering a map style view yet wants to give priority to interaction
   *   views inside (such as dropped pins or labels), then we would return true
   *   from this method when there is a single touch.
   *
   * - Similar to the previous case, if a two finger "tap" should trigger a
   *   zoom, we would check the `touches` count, and if `>= 2`, we would return
   *   true.
   *
   */
  scrollResponderHandleStartShouldSetResponder() {
    return false;
  }
  /**
   * There are times when the scroll view wants to become the responder
   * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
   * that *doesn't* give priority to nested views (hence the capture phase):
   *
   * - Currently animating.
   * - Tapping anywhere that is not the focused input, while the keyboard is
   *   up (which should dismiss the keyboard).
   *
   * Invoke this from an `onStartShouldSetResponderCapture` event.
   */
  /**
   * Invoke this from an `onResponderReject` event.
   *
   * Some other element is not yielding its role as responder. Normally, we'd
   * just disable the `UIScrollView`, but a touch has already began on it, the
   * `UIScrollView` will not accept being disabled after that. The easiest
   * solution for now is to accept the limitation of disallowing this
   * altogether. To improve this, find a way to disable the `UIScrollView` after
   * a touch has already started.
   */
  scrollResponderHandleResponderReject() {
    (0, import_warning.default)(false, "ScrollView doesn't take rejection well - scrolls anyway");
  }
  /**
   * We will allow the scroll view to give up its lock iff it acquired the lock
   * during an animation. This is a very useful default that happens to satisfy
   * many common user experiences.
   *
   * - Stop a scroll on the left edge, then turn that into an outer view's
   *   backswipe.
   * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
   *   view dismiss.
   * - However, without catching the scroll view mid-bounce (while it is
   *   motionless), if you drag far enough for the scroll view to become
   *   responder (and therefore drag the scroll view a bit), any backswipe
   *   navigation of a swipe gesture higher in the view hierarchy, should be
   *   rejected.
   */
  /**
   * Invoke this from an `onTouchEnd` event.
   *
   * @param {SyntheticEvent} e Event.
   */
  /**
   * Invoke this from an `onResponderRelease` event.
   */
  /**
   * Invoke this from an `onResponderGrant` event.
   */
  /**
   * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
   * animation, and there's not an easy way to distinguish a drag vs. stopping
   * momentum.
   *
   * Invoke this from an `onScrollBeginDrag` event.
   */
  /**
   * Invoke this from an `onScrollEndDrag` event.
   */
  /**
   * Invoke this from an `onMomentumScrollBegin` event.
   */
  /**
   * Invoke this from an `onMomentumScrollEnd` event.
   */
  /**
   * Invoke this from an `onTouchStart` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  /**
   * Invoke this from an `onTouchMove` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  /**
   * A helper function for this class that lets us quickly determine if the
   * view is currently animating. This is particularly useful to know when
   * a touch has just started or ended.
   */
  /**
   * A helper function to scroll to a specific point in the scrollview.
   * This is currently used to help focus on child textviews, but can also
   * be used to quickly scroll to any element we want to focus. Syntax:
   *
   * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  /**
   * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
   * {x: number; y: number; width: number; height: number; animated: boolean = true}
   *
   * @platform ios
   */
  /**
   * Displays the scroll indicators momentarily.
   */
  scrollResponderFlashScrollIndicators() {
  }
  /**
   * This method should be used as the callback to onFocus in a TextInputs'
   * parent view. Note that any module using this mixin needs to return
   * the parent view's ref in getScrollViewRef() in order to use this method.
   * @param {any} nodeHandle The TextInput node handle
   * @param {number} additionalOffset The scroll view's top "contentInset".
   *        Default is 0.
   * @param {bool} preventNegativeScrolling Whether to allow pulling the content
   *        down to make it meet the keyboard's top. Default is false.
   */
  /**
   * The calculations performed here assume the scroll view takes up the entire
   * screen - even if has some content inset. We then measure the offsets of the
   * keyboard, and compensate both for the scroll view's "contentInset".
   *
   * @param {number} left Position of input w.r.t. table view.
   * @param {number} top Position of input w.r.t. table view.
   * @param {number} width Width of the text input.
   * @param {number} height Height of the text input.
   */
  scrollResponderTextInputFocusError(e) {
    console.error("Error measuring text field: ", e);
  }
  /**
   * Warning, this may be called several times for a single keyboard opening.
   * It's best to store the information in this method and then take any action
   * at a later point (either in `keyboardDidShow` or other).
   *
   * Here's the order that events occur in:
   * - focus
   * - willShow {startCoordinates, endCoordinates} several times
   * - didShow several times
   * - blur
   * - willHide {startCoordinates, endCoordinates} several times
   * - didHide several times
   *
   * The `ScrollResponder` providesModule callbacks for each of these events.
   * Even though any user could have easily listened to keyboard events
   * themselves, using these `props` callbacks ensures that ordering of events
   * is consistent - and not dependent on the order that the keyboard events are
   * subscribed to. This matters when telling the scroll view to scroll to where
   * the keyboard is headed - the scroll responder better have been notified of
   * the keyboard destination before being instructed to scroll to where the
   * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
   * will work.
   *
   * WARNING: These callbacks will fire even if a keyboard is displayed in a
   * different navigation pane. Filter out the events to determine if they are
   * relevant to you. (For example, only if you receive these callbacks after
   * you had explicitly focused a node etc).
   */
  /**
   * ------------------------------------------------------
   * END SCROLLRESPONDER
   * ------------------------------------------------------
   */
  /**
   * Returns a reference to the underlying scroll responder, which supports
   * operations like `scrollTo`. All ScrollView-like components should
   * implement this method so that they can be composed while providing access
   * to the underlying scroll responder's methods.
   */
  /**
   * Scrolls to a given x, y offset, either immediately or with a smooth animation.
   * Syntax:
   *
   * scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  /**
   * If this is a vertical ScrollView scrolls to the bottom.
   * If this is a horizontal ScrollView scrolls to the right.
   *
   * Use `scrollToEnd({ animated: true })` for smooth animated scrolling,
   * `scrollToEnd({ animated: false })` for immediate scrolling.
   * If no options are passed, `animated` defaults to true.
   */
  render() {
    var _this$props = this.props, contentContainerStyle = _this$props.contentContainerStyle, horizontal = _this$props.horizontal, onContentSizeChange = _this$props.onContentSizeChange, refreshControl = _this$props.refreshControl, stickyHeaderIndices = _this$props.stickyHeaderIndices, pagingEnabled = _this$props.pagingEnabled, forwardedRef = _this$props.forwardedRef, keyboardDismissMode = _this$props.keyboardDismissMode, onScroll = _this$props.onScroll, centerContent = _this$props.centerContent, other = (0, import_objectWithoutPropertiesLoose7.default)(_this$props, _excluded7);
    if (process.env.NODE_ENV !== "production" && this.props.style) {
      var style = StyleSheet_default.flatten(this.props.style);
      var childLayoutProps = ["alignItems", "justifyContent"].filter((prop) => style && style[prop] !== void 0);
      (0, import_invariant2.default)(childLayoutProps.length === 0, "ScrollView child layout (" + JSON.stringify(childLayoutProps) + ") must be applied through the contentContainerStyle prop.");
    }
    var contentSizeChangeProps = {};
    if (onContentSizeChange) {
      contentSizeChangeProps = {
        onLayout: this._handleContentOnLayout
      };
    }
    var hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices);
    var children = hasStickyHeaderIndices || pagingEnabled ? React12.Children.map(this.props.children, (child, i) => {
      var isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
      if (child != null && (isSticky || pagingEnabled)) {
        return /* @__PURE__ */ React12.createElement(View_default, {
          style: [isSticky && styles3.stickyHeader, pagingEnabled && styles3.pagingEnabledChild]
        }, child);
      } else {
        return child;
      }
    }) : this.props.children;
    var contentContainer = /* @__PURE__ */ React12.createElement(View_default, (0, import_extends2.default)({}, contentSizeChangeProps, {
      children,
      collapsable: false,
      ref: this._setInnerViewRef,
      style: [horizontal && styles3.contentContainerHorizontal, centerContent && styles3.contentContainerCenterContent, contentContainerStyle]
    }));
    var baseStyle = horizontal ? styles3.baseHorizontal : styles3.baseVertical;
    var pagingEnabledStyle = horizontal ? styles3.pagingEnabledHorizontal : styles3.pagingEnabledVertical;
    var props = (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, other), {}, {
      style: [baseStyle, pagingEnabled && pagingEnabledStyle, this.props.style],
      onTouchStart: this.scrollResponderHandleTouchStart,
      onTouchMove: this.scrollResponderHandleTouchMove,
      onTouchEnd: this.scrollResponderHandleTouchEnd,
      onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
      onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
      onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
      onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
      onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
      onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
      onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
      onScroll: this._handleScroll,
      onResponderGrant: this.scrollResponderHandleResponderGrant,
      onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
      onResponderTerminate: this.scrollResponderHandleTerminate,
      onResponderRelease: this.scrollResponderHandleResponderRelease,
      onResponderReject: this.scrollResponderHandleResponderReject
    });
    var ScrollViewClass = ScrollViewBase_default;
    (0, import_invariant2.default)(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
    var scrollView = /* @__PURE__ */ React12.createElement(ScrollViewClass, (0, import_extends2.default)({}, props, {
      ref: this._setScrollNodeRef
    }), contentContainer);
    if (refreshControl) {
      return /* @__PURE__ */ React12.cloneElement(refreshControl, {
        style: props.style
      }, scrollView);
    }
    return scrollView;
  }
};
var commonStyle = {
  flexGrow: 1,
  flexShrink: 1,
  // Enable hardware compositing in modern browsers.
  // Creates a new layer with its own backing surface that can significantly
  // improve scroll performance.
  transform: "translateZ(0)",
  // iOS native scrolling
  WebkitOverflowScrolling: "touch"
};
var styles3 = StyleSheet_default.create({
  baseVertical: (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, commonStyle), {}, {
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto"
  }),
  baseHorizontal: (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, commonStyle), {}, {
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden"
  }),
  contentContainerHorizontal: {
    flexDirection: "row"
  },
  contentContainerCenterContent: {
    justifyContent: "center",
    flexGrow: 1
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  pagingEnabledHorizontal: {
    scrollSnapType: "x mandatory"
  },
  pagingEnabledVertical: {
    scrollSnapType: "y mandatory"
  },
  pagingEnabledChild: {
    scrollSnapAlign: "start"
  }
});
var ForwardedScrollView = /* @__PURE__ */ React12.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ React12.createElement(ScrollView, (0, import_extends2.default)({}, props, {
    forwardedRef
  }));
});
ForwardedScrollView.displayName = "ScrollView";
var ScrollView_default = ForwardedScrollView;

// ../../node_modules/react-native-web/dist/exports/InteractionManager/index.js
var import_invariant4 = __toESM(require_invariant());

// ../../node_modules/react-native-web/dist/exports/InteractionManager/TaskQueue.js
var import_objectSpread25 = __toESM(require_objectSpread2());
var import_invariant3 = __toESM(require_invariant());
var TaskQueue = class {
  static {
    __name(this, "TaskQueue");
  }
  constructor(_ref) {
    var onMoreTasks = _ref.onMoreTasks;
    this._onMoreTasks = onMoreTasks;
    this._queueStack = [{
      tasks: [],
      popable: true
    }];
  }
  enqueue(task) {
    this._getCurrentQueue().push(task);
  }
  enqueueTasks(tasks) {
    tasks.forEach((task) => this.enqueue(task));
  }
  cancelTasks(tasksToCancel) {
    this._queueStack = this._queueStack.map((queue2) => (0, import_objectSpread25.default)((0, import_objectSpread25.default)({}, queue2), {}, {
      tasks: queue2.tasks.filter((task) => tasksToCancel.indexOf(task) === -1)
    })).filter((queue2, idx) => queue2.tasks.length > 0 || idx === 0);
  }
  hasTasksToProcess() {
    return this._getCurrentQueue().length > 0;
  }
  /**
   * Executes the next task in the queue.
   */
  processNext() {
    var queue2 = this._getCurrentQueue();
    if (queue2.length) {
      var task = queue2.shift();
      try {
        if (typeof task === "object" && task.gen) {
          this._genPromise(task);
        } else if (typeof task === "object" && task.run) {
          task.run();
        } else {
          (0, import_invariant3.default)(typeof task === "function", "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(task, null, 2));
          task();
        }
      } catch (e) {
        e.message = "TaskQueue: Error with task " + (task.name || "") + ": " + e.message;
        throw e;
      }
    }
  }
  _getCurrentQueue() {
    var stackIdx = this._queueStack.length - 1;
    var queue2 = this._queueStack[stackIdx];
    if (queue2.popable && queue2.tasks.length === 0 && stackIdx > 0) {
      this._queueStack.pop();
      return this._getCurrentQueue();
    } else {
      return queue2.tasks;
    }
  }
  _genPromise(task) {
    var length = this._queueStack.push({
      tasks: [],
      popable: false
    });
    var stackIdx = length - 1;
    var stackItem = this._queueStack[stackIdx];
    task.gen().then(() => {
      stackItem.popable = true;
      this.hasTasksToProcess() && this._onMoreTasks();
    }).catch((ex) => {
      setTimeout(() => {
        ex.message = "TaskQueue: Error resolving Promise in task " + task.name + ": " + ex.message;
        throw ex;
      }, 0);
    });
  }
};
var TaskQueue_default = TaskQueue;

// ../../node_modules/react-native-web/dist/vendor/react-native/vendor/emitter/EventEmitter.js
var EventEmitter = class {
  static {
    __name(this, "EventEmitter");
  }
  constructor() {
    this._registry = {};
  }
  /**
   * Registers a listener that is called when the supplied event is emitted.
   * Returns a subscription that has a `remove` method to undo registration.
   */
  addListener(eventType, listener, context) {
    var registrations = allocate(this._registry, eventType);
    var registration = {
      context,
      listener,
      remove() {
        registrations.delete(registration);
      }
    };
    registrations.add(registration);
    return registration;
  }
  /**
   * Emits the supplied event. Additional arguments supplied to `emit` will be
   * passed through to each of the registered listeners.
   *
   * If a listener modifies the listeners registered for the same event, those
   * changes will not be reflected in the current invocation of `emit`.
   */
  emit(eventType) {
    var registrations = this._registry[eventType];
    if (registrations != null) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var _i = 0, _arr = [...registrations]; _i < _arr.length; _i++) {
        var registration = _arr[_i];
        registration.listener.apply(registration.context, args);
      }
    }
  }
  /**
   * Removes all registered listeners.
   */
  removeAllListeners(eventType) {
    if (eventType == null) {
      this._registry = {};
    } else {
      delete this._registry[eventType];
    }
  }
  /**
   * Returns the number of registered listeners for the supplied event.
   */
  listenerCount(eventType) {
    var registrations = this._registry[eventType];
    return registrations == null ? 0 : registrations.size;
  }
};
function allocate(registry, eventType) {
  var registrations = registry[eventType];
  if (registrations == null) {
    registrations = /* @__PURE__ */ new Set();
    registry[eventType] = registrations;
  }
  return registrations;
}
__name(allocate, "allocate");

// ../../node_modules/react-native-web/dist/modules/requestIdleCallback/index.js
var _requestIdleCallback = /* @__PURE__ */ __name(function _requestIdleCallback2(cb, options) {
  return setTimeout(() => {
    var start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
}, "_requestIdleCallback");
var _cancelIdleCallback = /* @__PURE__ */ __name(function _cancelIdleCallback2(id2) {
  clearTimeout(id2);
}, "_cancelIdleCallback");
var isSupported = canUseDom_default && typeof window.requestIdleCallback !== "undefined";
var requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
var cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
var requestIdleCallback_default = requestIdleCallback;

// ../../node_modules/react-native-web/dist/exports/InteractionManager/index.js
var _emitter = new EventEmitter();
var InteractionManager = {
  Events: {
    interactionStart: "interactionStart",
    interactionComplete: "interactionComplete"
  },
  /**
   * Schedule a function to run after all interactions have completed.
   */
  runAfterInteractions(task) {
    var tasks = [];
    var promise = new Promise((resolve) => {
      _scheduleUpdate();
      if (task) {
        tasks.push(task);
      }
      tasks.push({
        run: resolve,
        name: "resolve " + (task && task.name || "?")
      });
      _taskQueue.enqueueTasks(tasks);
    });
    return {
      then: promise.then.bind(promise),
      done: promise.then.bind(promise),
      cancel: /* @__PURE__ */ __name(() => {
        _taskQueue.cancelTasks(tasks);
      }, "cancel")
    };
  },
  /**
   * Notify manager that an interaction has started.
   */
  createInteractionHandle() {
    _scheduleUpdate();
    var handle = ++_inc;
    _addInteractionSet.add(handle);
    return handle;
  },
  /**
   * Notify manager that an interaction has completed.
   */
  clearInteractionHandle(handle) {
    (0, import_invariant4.default)(!!handle, "Must provide a handle to clear.");
    _scheduleUpdate();
    _addInteractionSet.delete(handle);
    _deleteInteractionSet.add(handle);
  },
  addListener: _emitter.addListener.bind(_emitter),
  /**
   *
   * @param deadline
   */
  setDeadline(deadline) {
    _deadline = deadline;
  }
};
var _interactionSet = /* @__PURE__ */ new Set();
var _addInteractionSet = /* @__PURE__ */ new Set();
var _deleteInteractionSet = /* @__PURE__ */ new Set();
var _taskQueue = new TaskQueue_default({
  onMoreTasks: _scheduleUpdate
});
var _nextUpdateHandle = 0;
var _inc = 0;
var _deadline = -1;
function _scheduleUpdate() {
  if (!_nextUpdateHandle) {
    if (_deadline > 0) {
      _nextUpdateHandle = setTimeout(_processUpdate);
    } else {
      _nextUpdateHandle = requestIdleCallback_default(_processUpdate);
    }
  }
}
__name(_scheduleUpdate, "_scheduleUpdate");
function _processUpdate() {
  _nextUpdateHandle = 0;
  var interactionCount = _interactionSet.size;
  _addInteractionSet.forEach((handle) => _interactionSet.add(handle));
  _deleteInteractionSet.forEach((handle) => _interactionSet.delete(handle));
  var nextInteractionCount = _interactionSet.size;
  if (interactionCount !== 0 && nextInteractionCount === 0) {
    _emitter.emit(InteractionManager.Events.interactionComplete);
  } else if (interactionCount === 0 && nextInteractionCount !== 0) {
    _emitter.emit(InteractionManager.Events.interactionStart);
  }
  if (nextInteractionCount === 0) {
    var begin = Date.now();
    while (_taskQueue.hasTasksToProcess()) {
      _taskQueue.processNext();
      if (_deadline > 0 && Date.now() - begin >= _deadline) {
        _scheduleUpdate();
        break;
      }
    }
  }
  _addInteractionSet.clear();
  _deleteInteractionSet.clear();
}
__name(_processUpdate, "_processUpdate");
var InteractionManager_default = InteractionManager;

// ../../node_modules/react-native-web/dist/vendor/react-native/Batchinator/index.js
var Batchinator = class {
  static {
    __name(this, "Batchinator");
  }
  constructor(callback, delayMS) {
    this._delay = delayMS;
    this._callback = callback;
  }
  /*
   * Cleanup any pending tasks.
   *
   * By default, if there is a pending task the callback is run immediately. Set the option abort to
   * true to not call the callback if it was pending.
   */
  dispose(options) {
    if (options === void 0) {
      options = {
        abort: false
      };
    }
    if (this._taskHandle) {
      this._taskHandle.cancel();
      if (!options.abort) {
        this._callback();
      }
      this._taskHandle = null;
    }
  }
  schedule() {
    if (this._taskHandle) {
      return;
    }
    var timeoutHandle = setTimeout(() => {
      this._taskHandle = InteractionManager_default.runAfterInteractions(() => {
        this._taskHandle = null;
        this._callback();
      });
    }, this._delay);
    this._taskHandle = {
      cancel: /* @__PURE__ */ __name(() => clearTimeout(timeoutHandle), "cancel")
    };
  }
};
var Batchinator_default = Batchinator;

// ../../node_modules/react-native-web/dist/vendor/react-native/Utilities/clamp.js
function clamp(min, value, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
__name(clamp, "clamp");
var clamp_default = clamp;

// ../../node_modules/react-native-web/dist/vendor/react-native/infoLog/index.js
function infoLog() {
  return console.log(...arguments);
}
__name(infoLog, "infoLog");
var infoLog_default = infoLog;

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/CellRenderMask.js
var import_objectSpread26 = __toESM(require_objectSpread2());
var import_invariant5 = __toESM(require_invariant());
var CellRenderMask = class {
  static {
    __name(this, "CellRenderMask");
  }
  constructor(numCells) {
    (0, import_invariant5.default)(numCells >= 0, "CellRenderMask must contain a non-negative number os cells");
    this._numCells = numCells;
    if (numCells === 0) {
      this._regions = [];
    } else {
      this._regions = [{
        first: 0,
        last: numCells - 1,
        isSpacer: true
      }];
    }
  }
  enumerateRegions() {
    return this._regions;
  }
  addCells(cells) {
    (0, import_invariant5.default)(cells.first >= 0 && cells.first < this._numCells && cells.last >= -1 && cells.last < this._numCells && cells.last >= cells.first - 1, "CellRenderMask.addCells called with invalid cell range");
    if (cells.last < cells.first) {
      return;
    }
    var _this$_findRegion = this._findRegion(cells.first), firstIntersect = _this$_findRegion[0], firstIntersectIdx = _this$_findRegion[1];
    var _this$_findRegion2 = this._findRegion(cells.last), lastIntersect = _this$_findRegion2[0], lastIntersectIdx = _this$_findRegion2[1];
    if (firstIntersectIdx === lastIntersectIdx && !firstIntersect.isSpacer) {
      return;
    }
    var newLeadRegion = [];
    var newTailRegion = [];
    var newMainRegion = (0, import_objectSpread26.default)((0, import_objectSpread26.default)({}, cells), {}, {
      isSpacer: false
    });
    if (firstIntersect.first < newMainRegion.first) {
      if (firstIntersect.isSpacer) {
        newLeadRegion.push({
          first: firstIntersect.first,
          last: newMainRegion.first - 1,
          isSpacer: true
        });
      } else {
        newMainRegion.first = firstIntersect.first;
      }
    }
    if (lastIntersect.last > newMainRegion.last) {
      if (lastIntersect.isSpacer) {
        newTailRegion.push({
          first: newMainRegion.last + 1,
          last: lastIntersect.last,
          isSpacer: true
        });
      } else {
        newMainRegion.last = lastIntersect.last;
      }
    }
    var replacementRegions = [...newLeadRegion, newMainRegion, ...newTailRegion];
    var numRegionsToDelete = lastIntersectIdx - firstIntersectIdx + 1;
    this._regions.splice(firstIntersectIdx, numRegionsToDelete, ...replacementRegions);
  }
  numCells() {
    return this._numCells;
  }
  equals(other) {
    return this._numCells === other._numCells && this._regions.length === other._regions.length && this._regions.every((region, i) => region.first === other._regions[i].first && region.last === other._regions[i].last && region.isSpacer === other._regions[i].isSpacer);
  }
  _findRegion(cellIdx) {
    var firstIdx = 0;
    var lastIdx = this._regions.length - 1;
    while (firstIdx <= lastIdx) {
      var middleIdx = Math.floor((firstIdx + lastIdx) / 2);
      var middleRegion = this._regions[middleIdx];
      if (cellIdx >= middleRegion.first && cellIdx <= middleRegion.last) {
        return [middleRegion, middleIdx];
      } else if (cellIdx < middleRegion.first) {
        lastIdx = middleIdx - 1;
      } else if (cellIdx > middleRegion.last) {
        firstIdx = middleIdx + 1;
      }
    }
    (0, import_invariant5.default)(false, "A region was not found containing cellIdx " + cellIdx);
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/ChildListCollection.js
var import_createForOfIteratorHelperLoose = __toESM(require_createForOfIteratorHelperLoose());
var import_invariant6 = __toESM(require_invariant());
var ChildListCollection = class {
  static {
    __name(this, "ChildListCollection");
  }
  constructor() {
    this._cellKeyToChildren = /* @__PURE__ */ new Map();
    this._childrenToCellKey = /* @__PURE__ */ new Map();
  }
  add(list, cellKey) {
    var _this$_cellKeyToChild;
    (0, import_invariant6.default)(!this._childrenToCellKey.has(list), "Trying to add already present child list");
    var cellLists = (_this$_cellKeyToChild = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild !== void 0 ? _this$_cellKeyToChild : /* @__PURE__ */ new Set();
    cellLists.add(list);
    this._cellKeyToChildren.set(cellKey, cellLists);
    this._childrenToCellKey.set(list, cellKey);
  }
  remove(list) {
    var cellKey = this._childrenToCellKey.get(list);
    (0, import_invariant6.default)(cellKey != null, "Trying to remove non-present child list");
    this._childrenToCellKey.delete(list);
    var cellLists = this._cellKeyToChildren.get(cellKey);
    (0, import_invariant6.default)(cellLists, "_cellKeyToChildren should contain cellKey");
    cellLists.delete(list);
    if (cellLists.size === 0) {
      this._cellKeyToChildren.delete(cellKey);
    }
  }
  forEach(fn) {
    for (var _iterator = (0, import_createForOfIteratorHelperLoose.default)(this._cellKeyToChildren.values()), _step; !(_step = _iterator()).done; ) {
      var listSet = _step.value;
      for (var _iterator2 = (0, import_createForOfIteratorHelperLoose.default)(listSet), _step2; !(_step2 = _iterator2()).done; ) {
        var list = _step2.value;
        fn(list);
      }
    }
  }
  forEachInCell(cellKey, fn) {
    var _this$_cellKeyToChild2;
    var listSet = (_this$_cellKeyToChild2 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild2 !== void 0 ? _this$_cellKeyToChild2 : [];
    for (var _iterator3 = (0, import_createForOfIteratorHelperLoose.default)(listSet), _step3; !(_step3 = _iterator3()).done; ) {
      var list = _step3.value;
      fn(list);
    }
  }
  anyInCell(cellKey, fn) {
    var _this$_cellKeyToChild3;
    var listSet = (_this$_cellKeyToChild3 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild3 !== void 0 ? _this$_cellKeyToChild3 : [];
    for (var _iterator4 = (0, import_createForOfIteratorHelperLoose.default)(listSet), _step4; !(_step4 = _iterator4()).done; ) {
      var list = _step4.value;
      if (fn(list)) {
        return true;
      }
    }
    return false;
  }
  size() {
    return this._childrenToCellKey.size;
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/FillRateHelper/index.js
var import_objectSpread27 = __toESM(require_objectSpread2());
var Info = class {
  static {
    __name(this, "Info");
  }
  constructor() {
    this.any_blank_count = 0;
    this.any_blank_ms = 0;
    this.any_blank_speed_sum = 0;
    this.mostly_blank_count = 0;
    this.mostly_blank_ms = 0;
    this.pixels_blank = 0;
    this.pixels_sampled = 0;
    this.pixels_scrolled = 0;
    this.total_time_spent = 0;
    this.sample_count = 0;
  }
};
var DEBUG = false;
var _listeners = [];
var _minSampleCount = 10;
var _sampleRate = DEBUG ? 1 : null;
var FillRateHelper = class {
  static {
    __name(this, "FillRateHelper");
  }
  static addListener(callback) {
    if (_sampleRate === null) {
      console.warn("Call `FillRateHelper.setSampleRate` before `addListener`.");
    }
    _listeners.push(callback);
    return {
      remove: /* @__PURE__ */ __name(() => {
        _listeners = _listeners.filter((listener) => callback !== listener);
      }, "remove")
    };
  }
  static setSampleRate(sampleRate) {
    _sampleRate = sampleRate;
  }
  static setMinSampleCount(minSampleCount) {
    _minSampleCount = minSampleCount;
  }
  constructor(getFrameMetrics) {
    this._anyBlankStartTime = null;
    this._enabled = false;
    this._info = new Info();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
    this._getFrameMetrics = getFrameMetrics;
    this._enabled = (_sampleRate || 0) > Math.random();
    this._resetData();
  }
  activate() {
    if (this._enabled && this._samplesStartTime == null) {
      DEBUG && console.debug("FillRateHelper: activate");
      this._samplesStartTime = global.performance.now();
    }
  }
  deactivateAndFlush() {
    if (!this._enabled) {
      return;
    }
    var start = this._samplesStartTime;
    if (start == null) {
      DEBUG && console.debug("FillRateHelper: bail on deactivate with no start time");
      return;
    }
    if (this._info.sample_count < _minSampleCount) {
      this._resetData();
      return;
    }
    var total_time_spent = global.performance.now() - start;
    var info = (0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, this._info), {}, {
      total_time_spent
    });
    if (DEBUG) {
      var derived = {
        avg_blankness: this._info.pixels_blank / this._info.pixels_sampled,
        avg_speed: this._info.pixels_scrolled / (total_time_spent / 1e3),
        avg_speed_when_any_blank: this._info.any_blank_speed_sum / this._info.any_blank_count,
        any_blank_per_min: this._info.any_blank_count / (total_time_spent / 1e3 / 60),
        any_blank_time_frac: this._info.any_blank_ms / total_time_spent,
        mostly_blank_per_min: this._info.mostly_blank_count / (total_time_spent / 1e3 / 60),
        mostly_blank_time_frac: this._info.mostly_blank_ms / total_time_spent
      };
      for (var key in derived) {
        derived[key] = Math.round(1e3 * derived[key]) / 1e3;
      }
      console.debug("FillRateHelper deactivateAndFlush: ", {
        derived,
        info
      });
    }
    _listeners.forEach((listener) => listener(info));
    this._resetData();
  }
  computeBlankness(props, cellsAroundViewport, scrollMetrics) {
    if (!this._enabled || props.getItemCount(props.data) === 0 || cellsAroundViewport.last < cellsAroundViewport.first || this._samplesStartTime == null) {
      return 0;
    }
    var dOffset = scrollMetrics.dOffset, offset = scrollMetrics.offset, velocity = scrollMetrics.velocity, visibleLength = scrollMetrics.visibleLength;
    this._info.sample_count++;
    this._info.pixels_sampled += Math.round(visibleLength);
    this._info.pixels_scrolled += Math.round(Math.abs(dOffset));
    var scrollSpeed = Math.round(Math.abs(velocity) * 1e3);
    var now = global.performance.now();
    if (this._anyBlankStartTime != null) {
      this._info.any_blank_ms += now - this._anyBlankStartTime;
    }
    this._anyBlankStartTime = null;
    if (this._mostlyBlankStartTime != null) {
      this._info.mostly_blank_ms += now - this._mostlyBlankStartTime;
    }
    this._mostlyBlankStartTime = null;
    var blankTop = 0;
    var first = cellsAroundViewport.first;
    var firstFrame = this._getFrameMetrics(first, props);
    while (first <= cellsAroundViewport.last && (!firstFrame || !firstFrame.inLayout)) {
      firstFrame = this._getFrameMetrics(first, props);
      first++;
    }
    if (firstFrame && first > 0) {
      blankTop = Math.min(visibleLength, Math.max(0, firstFrame.offset - offset));
    }
    var blankBottom = 0;
    var last = cellsAroundViewport.last;
    var lastFrame = this._getFrameMetrics(last, props);
    while (last >= cellsAroundViewport.first && (!lastFrame || !lastFrame.inLayout)) {
      lastFrame = this._getFrameMetrics(last, props);
      last--;
    }
    if (lastFrame && last < props.getItemCount(props.data) - 1) {
      var bottomEdge = lastFrame.offset + lastFrame.length;
      blankBottom = Math.min(visibleLength, Math.max(0, offset + visibleLength - bottomEdge));
    }
    var pixels_blank = Math.round(blankTop + blankBottom);
    var blankness = pixels_blank / visibleLength;
    if (blankness > 0) {
      this._anyBlankStartTime = now;
      this._info.any_blank_speed_sum += scrollSpeed;
      this._info.any_blank_count++;
      this._info.pixels_blank += pixels_blank;
      if (blankness > 0.5) {
        this._mostlyBlankStartTime = now;
        this._info.mostly_blank_count++;
      }
    } else if (scrollSpeed < 0.01 || Math.abs(dOffset) < 1) {
      this.deactivateAndFlush();
    }
    return blankness;
  }
  enabled() {
    return this._enabled;
  }
  _resetData() {
    this._anyBlankStartTime = null;
    this._info = new Info();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
  }
};
var FillRateHelper_default = FillRateHelper;

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/StateSafePureComponent.js
var import_invariant7 = __toESM(require_invariant());
import * as React13 from "react";
var StateSafePureComponent = class extends React13.PureComponent {
  static {
    __name(this, "StateSafePureComponent");
  }
  constructor(props) {
    super(props);
    this._inAsyncStateUpdate = false;
    this._installSetStateHooks();
  }
  setState(partialState, callback) {
    if (typeof partialState === "function") {
      super.setState((state, props) => {
        this._inAsyncStateUpdate = true;
        var ret;
        try {
          ret = partialState(state, props);
        } catch (err) {
          throw err;
        } finally {
          this._inAsyncStateUpdate = false;
        }
        return ret;
      }, callback);
    } else {
      super.setState(partialState, callback);
    }
  }
  _installSetStateHooks() {
    var that = this;
    var props = this.props, state = this.state;
    Object.defineProperty(this, "props", {
      get() {
        (0, import_invariant7.default)(!that._inAsyncStateUpdate, '"this.props" should not be accessed during state updates');
        return props;
      },
      set(newProps) {
        props = newProps;
      }
    });
    Object.defineProperty(this, "state", {
      get() {
        (0, import_invariant7.default)(!that._inAsyncStateUpdate, '"this.state" should not be acceessed during state updates');
        return state;
      },
      set(newState) {
        state = newState;
      }
    });
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/ViewabilityHelper/index.js
var import_objectSpread28 = __toESM(require_objectSpread2());
var import_createForOfIteratorHelperLoose2 = __toESM(require_createForOfIteratorHelperLoose());
var import_invariant8 = __toESM(require_invariant());
var ViewabilityHelper = class {
  static {
    __name(this, "ViewabilityHelper");
  }
  constructor(config2) {
    if (config2 === void 0) {
      config2 = {
        viewAreaCoveragePercentThreshold: 0
      };
    }
    this._hasInteracted = false;
    this._timers = /* @__PURE__ */ new Set();
    this._viewableIndices = [];
    this._viewableItems = /* @__PURE__ */ new Map();
    this._config = config2;
  }
  /**
   * Cleanup, e.g. on unmount. Clears any pending timers.
   */
  dispose() {
    this._timers.forEach(clearTimeout);
  }
  /**
   * Determines which items are viewable based on the current metrics and config.
   */
  computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange) {
    var itemCount = props.getItemCount(props.data);
    var _this$_config = this._config, itemVisiblePercentThreshold = _this$_config.itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold = _this$_config.viewAreaCoveragePercentThreshold;
    var viewAreaMode = viewAreaCoveragePercentThreshold != null;
    var viewablePercentThreshold = viewAreaMode ? viewAreaCoveragePercentThreshold : itemVisiblePercentThreshold;
    (0, import_invariant8.default)(viewablePercentThreshold != null && itemVisiblePercentThreshold != null !== (viewAreaCoveragePercentThreshold != null), "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
    var viewableIndices = [];
    if (itemCount === 0) {
      return viewableIndices;
    }
    var firstVisible = -1;
    var _ref = renderRange || {
      first: 0,
      last: itemCount - 1
    }, first = _ref.first, last = _ref.last;
    if (last >= itemCount) {
      console.warn("Invalid render range computing viewability " + JSON.stringify({
        renderRange,
        itemCount
      }));
      return [];
    }
    for (var idx = first; idx <= last; idx++) {
      var metrics = getFrameMetrics(idx, props);
      if (!metrics) {
        continue;
      }
      var top = metrics.offset - scrollOffset;
      var bottom = top + metrics.length;
      if (top < viewportHeight && bottom > 0) {
        firstVisible = idx;
        if (_isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, metrics.length)) {
          viewableIndices.push(idx);
        }
      } else if (firstVisible >= 0) {
        break;
      }
    }
    return viewableIndices;
  }
  /**
   * Figures out which items are viewable and how that has changed from before and calls
   * `onViewableItemsChanged` as appropriate.
   */
  onUpdate(props, scrollOffset, viewportHeight, getFrameMetrics, createViewToken, onViewableItemsChanged, renderRange) {
    var itemCount = props.getItemCount(props.data);
    if (this._config.waitForInteraction && !this._hasInteracted || itemCount === 0 || !getFrameMetrics(0, props)) {
      return;
    }
    var viewableIndices = [];
    if (itemCount) {
      viewableIndices = this.computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange);
    }
    if (this._viewableIndices.length === viewableIndices.length && this._viewableIndices.every((v, ii) => v === viewableIndices[ii])) {
      return;
    }
    this._viewableIndices = viewableIndices;
    if (this._config.minimumViewTime) {
      var handle = setTimeout(() => {
        this._timers.delete(handle);
        this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
      }, this._config.minimumViewTime);
      this._timers.add(handle);
    } else {
      this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
    }
  }
  /**
   * clean-up cached _viewableIndices to evaluate changed items on next update
   */
  resetViewableIndices() {
    this._viewableIndices = [];
  }
  /**
   * Records that an interaction has happened even if there has been no scroll.
   */
  recordInteraction() {
    this._hasInteracted = true;
  }
  _onUpdateSync(props, viewableIndicesToCheck, onViewableItemsChanged, createViewToken) {
    viewableIndicesToCheck = viewableIndicesToCheck.filter((ii) => this._viewableIndices.includes(ii));
    var prevItems = this._viewableItems;
    var nextItems = new Map(viewableIndicesToCheck.map((ii) => {
      var viewable2 = createViewToken(ii, true, props);
      return [viewable2.key, viewable2];
    }));
    var changed = [];
    for (var _iterator = (0, import_createForOfIteratorHelperLoose2.default)(nextItems), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], viewable = _step$value[1];
      if (!prevItems.has(key)) {
        changed.push(viewable);
      }
    }
    for (var _iterator2 = (0, import_createForOfIteratorHelperLoose2.default)(prevItems), _step2; !(_step2 = _iterator2()).done; ) {
      var _step2$value = _step2.value, _key = _step2$value[0], _viewable = _step2$value[1];
      if (!nextItems.has(_key)) {
        changed.push((0, import_objectSpread28.default)((0, import_objectSpread28.default)({}, _viewable), {}, {
          isViewable: false
        }));
      }
    }
    if (changed.length > 0) {
      this._viewableItems = nextItems;
      onViewableItemsChanged({
        viewableItems: Array.from(nextItems.values()),
        changed,
        viewabilityConfig: this._config
      });
    }
  }
};
function _isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, itemLength) {
  if (_isEntirelyVisible(top, bottom, viewportHeight)) {
    return true;
  } else {
    var pixels = _getPixelsVisible(top, bottom, viewportHeight);
    var percent = 100 * (viewAreaMode ? pixels / viewportHeight : pixels / itemLength);
    return percent >= viewablePercentThreshold;
  }
}
__name(_isViewable, "_isViewable");
function _getPixelsVisible(top, bottom, viewportHeight) {
  var visibleHeight = Math.min(bottom, viewportHeight) - Math.max(top, 0);
  return Math.max(0, visibleHeight);
}
__name(_getPixelsVisible, "_getPixelsVisible");
function _isEntirelyVisible(top, bottom, viewportHeight) {
  return top >= 0 && bottom <= viewportHeight && bottom > top;
}
__name(_isEntirelyVisible, "_isEntirelyVisible");
var ViewabilityHelper_default = ViewabilityHelper;

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/VirtualizedListCellRenderer.js
var import_extends3 = __toESM(require_extends());
var import_objectSpread210 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/VirtualizedListContext.js
var import_objectSpread29 = __toESM(require_objectSpread2());
import * as React14 from "react";
import { useContext as useContext5, useMemo as useMemo2 } from "react";
var __DEV__2 = process.env.NODE_ENV !== "production";
var VirtualizedListContext = /* @__PURE__ */ React14.createContext(null);
if (__DEV__2) {
  VirtualizedListContext.displayName = "VirtualizedListContext";
}
function VirtualizedListContextProvider(_ref2) {
  var children = _ref2.children, value = _ref2.value;
  var context = useMemo2(() => ({
    cellKey: null,
    getScrollMetrics: value.getScrollMetrics,
    horizontal: value.horizontal,
    getOutermostParentListRef: value.getOutermostParentListRef,
    registerAsNestedChild: value.registerAsNestedChild,
    unregisterAsNestedChild: value.unregisterAsNestedChild
  }), [value.getScrollMetrics, value.horizontal, value.getOutermostParentListRef, value.registerAsNestedChild, value.unregisterAsNestedChild]);
  return /* @__PURE__ */ React14.createElement(VirtualizedListContext.Provider, {
    value: context
  }, children);
}
__name(VirtualizedListContextProvider, "VirtualizedListContextProvider");
function VirtualizedListCellContextProvider(_ref3) {
  var cellKey = _ref3.cellKey, children = _ref3.children;
  var currContext = useContext5(VirtualizedListContext);
  var context = useMemo2(() => currContext == null ? null : (0, import_objectSpread29.default)((0, import_objectSpread29.default)({}, currContext), {}, {
    cellKey
  }), [currContext, cellKey]);
  return /* @__PURE__ */ React14.createElement(VirtualizedListContext.Provider, {
    value: context
  }, children);
}
__name(VirtualizedListCellContextProvider, "VirtualizedListCellContextProvider");

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/VirtualizedListCellRenderer.js
var import_invariant9 = __toESM(require_invariant());
import * as React15 from "react";
var CellRenderer = class extends React15.Component {
  static {
    __name(this, "CellRenderer");
  }
  constructor() {
    super(...arguments);
    this.state = {
      separatorProps: {
        highlighted: false,
        leadingItem: this.props.item
      }
    };
    this._separators = {
      highlight: /* @__PURE__ */ __name(() => {
        var _this$props = this.props, cellKey = _this$props.cellKey, prevCellKey = _this$props.prevCellKey;
        this.props.onUpdateSeparators([cellKey, prevCellKey], {
          highlighted: true
        });
      }, "highlight"),
      unhighlight: /* @__PURE__ */ __name(() => {
        var _this$props2 = this.props, cellKey = _this$props2.cellKey, prevCellKey = _this$props2.prevCellKey;
        this.props.onUpdateSeparators([cellKey, prevCellKey], {
          highlighted: false
        });
      }, "unhighlight"),
      updateProps: /* @__PURE__ */ __name((select, newProps) => {
        var _this$props3 = this.props, cellKey = _this$props3.cellKey, prevCellKey = _this$props3.prevCellKey;
        this.props.onUpdateSeparators([select === "leading" ? prevCellKey : cellKey], newProps);
      }, "updateProps")
    };
    this._onLayout = (nativeEvent) => {
      this.props.onCellLayout && this.props.onCellLayout(nativeEvent, this.props.cellKey, this.props.index);
    };
  }
  static getDerivedStateFromProps(props, prevState) {
    return {
      separatorProps: (0, import_objectSpread210.default)((0, import_objectSpread210.default)({}, prevState.separatorProps), {}, {
        leadingItem: props.item
      })
    };
  }
  // TODO: consider factoring separator stuff out of VirtualizedList into FlatList since it's not
  // reused by SectionList and we can keep VirtualizedList simpler.
  // $FlowFixMe[missing-local-annot]
  updateSeparatorProps(newProps) {
    this.setState((state) => ({
      separatorProps: (0, import_objectSpread210.default)((0, import_objectSpread210.default)({}, state.separatorProps), newProps)
    }));
  }
  componentWillUnmount() {
    this.props.onUnmount(this.props.cellKey);
  }
  _renderElement(renderItem, ListItemComponent, item, index) {
    if (renderItem && ListItemComponent) {
      console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.");
    }
    if (ListItemComponent) {
      return /* @__PURE__ */ React15.createElement(ListItemComponent, {
        item,
        index,
        separators: this._separators
      });
    }
    if (renderItem) {
      return renderItem({
        item,
        index,
        separators: this._separators
      });
    }
    (0, import_invariant9.default)(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
  }
  render() {
    var _this$props4 = this.props, CellRendererComponent = _this$props4.CellRendererComponent, ItemSeparatorComponent = _this$props4.ItemSeparatorComponent, ListItemComponent = _this$props4.ListItemComponent, cellKey = _this$props4.cellKey, horizontal = _this$props4.horizontal, item = _this$props4.item, index = _this$props4.index, inversionStyle = _this$props4.inversionStyle, onCellFocusCapture = _this$props4.onCellFocusCapture, onCellLayout = _this$props4.onCellLayout, renderItem = _this$props4.renderItem;
    var element = this._renderElement(renderItem, ListItemComponent, item, index);
    var itemSeparator = /* @__PURE__ */ React15.isValidElement(ItemSeparatorComponent) ? (
      // $FlowFixMe[incompatible-type]
      ItemSeparatorComponent
    ) : (
      // $FlowFixMe[incompatible-type]
      ItemSeparatorComponent && /* @__PURE__ */ React15.createElement(ItemSeparatorComponent, this.state.separatorProps)
    );
    var cellStyle = inversionStyle ? horizontal ? [styles4.rowReverse, inversionStyle] : [styles4.columnReverse, inversionStyle] : horizontal ? [styles4.row, inversionStyle] : inversionStyle;
    var result = !CellRendererComponent ? /* @__PURE__ */ React15.createElement(View_default, (0, import_extends3.default)({
      style: cellStyle,
      onFocusCapture: onCellFocusCapture
    }, onCellLayout && {
      onLayout: this._onLayout
    }), element, itemSeparator) : /* @__PURE__ */ React15.createElement(CellRendererComponent, (0, import_extends3.default)({
      cellKey,
      index,
      item,
      style: cellStyle,
      onFocusCapture: onCellFocusCapture
    }, onCellLayout && {
      onLayout: this._onLayout
    }), element, itemSeparator);
    return /* @__PURE__ */ React15.createElement(VirtualizedListCellContextProvider, {
      cellKey: this.props.cellKey
    }, result);
  }
};
var styles4 = StyleSheet_default.create({
  row: {
    flexDirection: "row"
  },
  rowReverse: {
    flexDirection: "row-reverse"
  },
  columnReverse: {
    flexDirection: "column-reverse"
  }
});

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizeUtils/index.js
function elementsThatOverlapOffsets(offsets, props, getFrameMetrics, zoomScale) {
  if (zoomScale === void 0) {
    zoomScale = 1;
  }
  var itemCount = props.getItemCount(props.data);
  var result = [];
  for (var offsetIndex = 0; offsetIndex < offsets.length; offsetIndex++) {
    var currentOffset = offsets[offsetIndex];
    var left2 = 0;
    var right2 = itemCount - 1;
    while (left2 <= right2) {
      var mid = left2 + (right2 - left2 >>> 1);
      var frame = getFrameMetrics(mid, props);
      var scaledOffsetStart = frame.offset * zoomScale;
      var scaledOffsetEnd = (frame.offset + frame.length) * zoomScale;
      if (mid === 0 && currentOffset < scaledOffsetStart || mid !== 0 && currentOffset <= scaledOffsetStart) {
        right2 = mid - 1;
      } else if (currentOffset > scaledOffsetEnd) {
        left2 = mid + 1;
      } else {
        result[offsetIndex] = mid;
        break;
      }
    }
  }
  return result;
}
__name(elementsThatOverlapOffsets, "elementsThatOverlapOffsets");
function newRangeCount(prev, next) {
  return next.last - next.first + 1 - Math.max(0, 1 + Math.min(next.last, prev.last) - Math.max(next.first, prev.first));
}
__name(newRangeCount, "newRangeCount");
function computeWindowedRenderLimits(props, maxToRenderPerBatch, windowSize, prev, getFrameMetricsApprox, scrollMetrics) {
  var itemCount = props.getItemCount(props.data);
  if (itemCount === 0) {
    return {
      first: 0,
      last: -1
    };
  }
  var offset = scrollMetrics.offset, velocity = scrollMetrics.velocity, visibleLength = scrollMetrics.visibleLength, _scrollMetrics$zoomSc = scrollMetrics.zoomScale, zoomScale = _scrollMetrics$zoomSc === void 0 ? 1 : _scrollMetrics$zoomSc;
  var visibleBegin = Math.max(0, offset);
  var visibleEnd = visibleBegin + visibleLength;
  var overscanLength = (windowSize - 1) * visibleLength;
  var leadFactor = 0.5;
  var fillPreference = velocity > 1 ? "after" : velocity < -1 ? "before" : "none";
  var overscanBegin = Math.max(0, visibleBegin - (1 - leadFactor) * overscanLength);
  var overscanEnd = Math.max(0, visibleEnd + leadFactor * overscanLength);
  var lastItemOffset = getFrameMetricsApprox(itemCount - 1, props).offset * zoomScale;
  if (lastItemOffset < overscanBegin) {
    return {
      first: Math.max(0, itemCount - 1 - maxToRenderPerBatch),
      last: itemCount - 1
    };
  }
  var _elementsThatOverlapO = elementsThatOverlapOffsets([overscanBegin, visibleBegin, visibleEnd, overscanEnd], props, getFrameMetricsApprox, zoomScale), overscanFirst = _elementsThatOverlapO[0], first = _elementsThatOverlapO[1], last = _elementsThatOverlapO[2], overscanLast = _elementsThatOverlapO[3];
  overscanFirst = overscanFirst == null ? 0 : overscanFirst;
  first = first == null ? Math.max(0, overscanFirst) : first;
  overscanLast = overscanLast == null ? itemCount - 1 : overscanLast;
  last = last == null ? Math.min(overscanLast, first + maxToRenderPerBatch - 1) : last;
  var visible = {
    first,
    last
  };
  var newCellCount = newRangeCount(prev, visible);
  while (true) {
    if (first <= overscanFirst && last >= overscanLast) {
      break;
    }
    var maxNewCells = newCellCount >= maxToRenderPerBatch;
    var firstWillAddMore = first <= prev.first || first > prev.last;
    var firstShouldIncrement = first > overscanFirst && (!maxNewCells || !firstWillAddMore);
    var lastWillAddMore = last >= prev.last || last < prev.first;
    var lastShouldIncrement = last < overscanLast && (!maxNewCells || !lastWillAddMore);
    if (maxNewCells && !firstShouldIncrement && !lastShouldIncrement) {
      break;
    }
    if (firstShouldIncrement && !(fillPreference === "after" && lastShouldIncrement && lastWillAddMore)) {
      if (firstWillAddMore) {
        newCellCount++;
      }
      first--;
    }
    if (lastShouldIncrement && !(fillPreference === "before" && firstShouldIncrement && firstWillAddMore)) {
      if (lastWillAddMore) {
        newCellCount++;
      }
      last++;
    }
  }
  if (!(last >= first && first >= 0 && last < itemCount && first >= overscanFirst && last <= overscanLast && first <= visible.first && last >= visible.last)) {
    throw new Error("Bad window calculation " + JSON.stringify({
      first,
      last,
      itemCount,
      overscanFirst,
      overscanLast,
      visible
    }));
  }
  return {
    first,
    last
  };
}
__name(computeWindowedRenderLimits, "computeWindowedRenderLimits");
function keyExtractor(item, index) {
  if (typeof item === "object" && (item == null ? void 0 : item.key) != null) {
    return item.key;
  }
  if (typeof item === "object" && (item == null ? void 0 : item.id) != null) {
    return item.id;
  }
  return String(index);
}
__name(keyExtractor, "keyExtractor");

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js
var import_invariant10 = __toESM(require_invariant());
var import_nullthrows = __toESM(require_nullthrows());
import * as React16 from "react";
var __DEV__3 = process.env.NODE_ENV !== "production";
var ON_EDGE_REACHED_EPSILON = 1e-3;
var _usedIndexForKey = false;
var _keylessItemComponentName = "";
function horizontalOrDefault(horizontal) {
  return horizontal !== null && horizontal !== void 0 ? horizontal : false;
}
__name(horizontalOrDefault, "horizontalOrDefault");
function initialNumToRenderOrDefault(initialNumToRender) {
  return initialNumToRender !== null && initialNumToRender !== void 0 ? initialNumToRender : 10;
}
__name(initialNumToRenderOrDefault, "initialNumToRenderOrDefault");
function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
  return maxToRenderPerBatch !== null && maxToRenderPerBatch !== void 0 ? maxToRenderPerBatch : 10;
}
__name(maxToRenderPerBatchOrDefault, "maxToRenderPerBatchOrDefault");
function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
  return onStartReachedThreshold !== null && onStartReachedThreshold !== void 0 ? onStartReachedThreshold : 2;
}
__name(onStartReachedThresholdOrDefault, "onStartReachedThresholdOrDefault");
function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
  return onEndReachedThreshold !== null && onEndReachedThreshold !== void 0 ? onEndReachedThreshold : 2;
}
__name(onEndReachedThresholdOrDefault, "onEndReachedThresholdOrDefault");
function getScrollingThreshold(threshold, visibleLength) {
  return threshold * visibleLength / 2;
}
__name(getScrollingThreshold, "getScrollingThreshold");
function scrollEventThrottleOrDefault(scrollEventThrottle) {
  return scrollEventThrottle !== null && scrollEventThrottle !== void 0 ? scrollEventThrottle : 50;
}
__name(scrollEventThrottleOrDefault, "scrollEventThrottleOrDefault");
function windowSizeOrDefault(windowSize) {
  return windowSize !== null && windowSize !== void 0 ? windowSize : 21;
}
__name(windowSizeOrDefault, "windowSizeOrDefault");
function findLastWhere(arr, predicate) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return null;
}
__name(findLastWhere, "findLastWhere");
var VirtualizedList = class _VirtualizedList extends StateSafePureComponent {
  static {
    __name(this, "VirtualizedList");
  }
  // scrollToEnd may be janky without getItemLayout prop
  scrollToEnd(params) {
    var animated = params ? params.animated : true;
    var veryLast = this.props.getItemCount(this.props.data) - 1;
    if (veryLast < 0) {
      return;
    }
    var frame = this.__getFrameMetricsApprox(veryLast, this.props);
    var offset = Math.max(0, frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength);
    if (this._scrollRef == null) {
      return;
    }
    if (this._scrollRef.scrollTo == null) {
      console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
      return;
    }
    this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
      x: offset,
      animated
    } : {
      y: offset,
      animated
    });
  }
  // scrollToIndex may be janky without getItemLayout prop
  scrollToIndex(params) {
    var _this$props = this.props, data = _this$props.data, horizontal = _this$props.horizontal, getItemCount = _this$props.getItemCount, getItemLayout = _this$props.getItemLayout, onScrollToIndexFailed = _this$props.onScrollToIndexFailed;
    var animated = params.animated, index = params.index, viewOffset = params.viewOffset, viewPosition = params.viewPosition;
    (0, import_invariant10.default)(index >= 0, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
    (0, import_invariant10.default)(getItemCount(data) >= 1, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
    (0, import_invariant10.default)(index < getItemCount(data), "scrollToIndex out of range: requested index " + index + " is out of 0 to " + (getItemCount(data) - 1));
    if (!getItemLayout && index > this._highestMeasuredFrameIndex) {
      (0, import_invariant10.default)(!!onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
      onScrollToIndexFailed({
        averageItemLength: this._averageCellLength,
        highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
        index
      });
      return;
    }
    var frame = this.__getFrameMetricsApprox(Math.floor(index), this.props);
    var offset = Math.max(0, this._getOffsetApprox(index, this.props) - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length)) - (viewOffset || 0);
    if (this._scrollRef == null) {
      return;
    }
    if (this._scrollRef.scrollTo == null) {
      console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
      return;
    }
    this._scrollRef.scrollTo(horizontal ? {
      x: offset,
      animated
    } : {
      y: offset,
      animated
    });
  }
  // scrollToItem may be janky without getItemLayout prop. Required linear scan through items -
  // use scrollToIndex instead if possible.
  scrollToItem(params) {
    var item = params.item;
    var _this$props2 = this.props, data = _this$props2.data, getItem = _this$props2.getItem, getItemCount = _this$props2.getItemCount;
    var itemCount = getItemCount(data);
    for (var _index = 0; _index < itemCount; _index++) {
      if (getItem(data, _index) === item) {
        this.scrollToIndex((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, params), {}, {
          index: _index
        }));
        break;
      }
    }
  }
  /**
   * Scroll to a specific content pixel offset in the list.
   *
   * Param `offset` expects the offset to scroll to.
   * In case of `horizontal` is true, the offset is the x-value,
   * in any other case the offset is the y-value.
   *
   * Param `animated` (`true` by default) defines whether the list
   * should do an animation while scrolling.
   */
  scrollToOffset(params) {
    var animated = params.animated, offset = params.offset;
    if (this._scrollRef == null) {
      return;
    }
    if (this._scrollRef.scrollTo == null) {
      console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
      return;
    }
    this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
      x: offset,
      animated
    } : {
      y: offset,
      animated
    });
  }
  recordInteraction() {
    this._nestedChildLists.forEach((childList) => {
      childList.recordInteraction();
    });
    this._viewabilityTuples.forEach((t2) => {
      t2.viewabilityHelper.recordInteraction();
    });
    this._updateViewableItems(this.props, this.state.cellsAroundViewport);
  }
  flashScrollIndicators() {
    if (this._scrollRef == null) {
      return;
    }
    this._scrollRef.flashScrollIndicators();
  }
  /**
   * Provides a handle to the underlying scroll responder.
   * Note that `this._scrollRef` might not be a `ScrollView`, so we
   * need to check that it responds to `getScrollResponder` before calling it.
   */
  getScrollResponder() {
    if (this._scrollRef && this._scrollRef.getScrollResponder) {
      return this._scrollRef.getScrollResponder();
    }
  }
  getScrollableNode() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      return this._scrollRef.getScrollableNode();
    } else {
      return this._scrollRef;
    }
  }
  getScrollRef() {
    if (this._scrollRef && this._scrollRef.getScrollRef) {
      return this._scrollRef.getScrollRef();
    } else {
      return this._scrollRef;
    }
  }
  _getCellKey() {
    var _this$context;
    return ((_this$context = this.context) == null ? void 0 : _this$context.cellKey) || "rootList";
  }
  // $FlowFixMe[missing-local-annot]
  hasMore() {
    return this._hasMore;
  }
  // $FlowFixMe[missing-local-annot]
  // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
  constructor(_props) {
    var _this$props$updateCel;
    super(_props);
    this._getScrollMetrics = () => {
      return this._scrollMetrics;
    };
    this._getOutermostParentListRef = () => {
      if (this._isNestedWithSameOrientation()) {
        return this.context.getOutermostParentListRef();
      } else {
        return this;
      }
    };
    this._registerAsNestedChild = (childList) => {
      this._nestedChildLists.add(childList.ref, childList.cellKey);
      if (this._hasInteracted) {
        childList.ref.recordInteraction();
      }
    };
    this._unregisterAsNestedChild = (childList) => {
      this._nestedChildLists.remove(childList.ref);
    };
    this._onUpdateSeparators = (keys, newProps) => {
      keys.forEach((key) => {
        var ref = key != null && this._cellRefs[key];
        ref && ref.updateSeparatorProps(newProps);
      });
    };
    this._getSpacerKey = (isVertical) => isVertical ? "height" : "width";
    this._averageCellLength = 0;
    this._cellRefs = {};
    this._frames = {};
    this._footerLength = 0;
    this._hasTriggeredInitialScrollToIndex = false;
    this._hasInteracted = false;
    this._hasMore = false;
    this._hasWarned = {};
    this._headerLength = 0;
    this._hiPriInProgress = false;
    this._highestMeasuredFrameIndex = 0;
    this._indicesToKeys = /* @__PURE__ */ new Map();
    this._lastFocusedCellKey = null;
    this._nestedChildLists = new ChildListCollection();
    this._offsetFromParentVirtualizedList = 0;
    this._prevParentOffset = 0;
    this._scrollMetrics = {
      contentLength: 0,
      dOffset: 0,
      dt: 10,
      offset: 0,
      timestamp: 0,
      velocity: 0,
      visibleLength: 0,
      zoomScale: 1
    };
    this._scrollRef = null;
    this._sentStartForContentLength = 0;
    this._sentEndForContentLength = 0;
    this._totalCellLength = 0;
    this._totalCellsMeasured = 0;
    this._viewabilityTuples = [];
    this._captureScrollRef = (ref) => {
      this._scrollRef = ref;
    };
    this._defaultRenderScrollComponent = (props) => {
      var onRefresh = props.onRefresh;
      if (this._isNestedWithSameOrientation()) {
        return /* @__PURE__ */ React16.createElement(View_default, props);
      } else if (onRefresh) {
        var _props$refreshing;
        (0, import_invariant10.default)(typeof props.refreshing === "boolean", "`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `" + JSON.stringify((_props$refreshing = props.refreshing) !== null && _props$refreshing !== void 0 ? _props$refreshing : "undefined") + "`");
        return (
          // $FlowFixMe[prop-missing] Invalid prop usage
          // $FlowFixMe[incompatible-use]
          /* @__PURE__ */ React16.createElement(ScrollView_default, (0, import_extends4.default)({}, props, {
            refreshControl: props.refreshControl == null ? /* @__PURE__ */ React16.createElement(
              RefreshControl_default,
              {
                refreshing: props.refreshing,
                onRefresh,
                progressViewOffset: props.progressViewOffset
              }
            ) : props.refreshControl
          }))
        );
      } else {
        return /* @__PURE__ */ React16.createElement(ScrollView_default, props);
      }
    };
    this._onCellLayout = (e, cellKey, index) => {
      var layout = e.nativeEvent.layout;
      var next = {
        offset: this._selectOffset(layout),
        length: this._selectLength(layout),
        index,
        inLayout: true
      };
      var curr = this._frames[cellKey];
      if (!curr || next.offset !== curr.offset || next.length !== curr.length || index !== curr.index) {
        this._totalCellLength += next.length - (curr ? curr.length : 0);
        this._totalCellsMeasured += curr ? 0 : 1;
        this._averageCellLength = this._totalCellLength / this._totalCellsMeasured;
        this._frames[cellKey] = next;
        this._highestMeasuredFrameIndex = Math.max(this._highestMeasuredFrameIndex, index);
        this._scheduleCellsToRenderUpdate();
      } else {
        this._frames[cellKey].inLayout = true;
      }
      this._triggerRemeasureForChildListsInCell(cellKey);
      this._computeBlankness();
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
    };
    this._onCellUnmount = (cellKey) => {
      delete this._cellRefs[cellKey];
      var curr = this._frames[cellKey];
      if (curr) {
        this._frames[cellKey] = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, curr), {}, {
          inLayout: false
        });
      }
    };
    this._onLayout = (e) => {
      if (this._isNestedWithSameOrientation()) {
        this.measureLayoutRelativeToContainingList();
      } else {
        this._scrollMetrics.visibleLength = this._selectLength(e.nativeEvent.layout);
      }
      this.props.onLayout && this.props.onLayout(e);
      this._scheduleCellsToRenderUpdate();
      this._maybeCallOnEdgeReached();
    };
    this._onLayoutEmpty = (e) => {
      this.props.onLayout && this.props.onLayout(e);
    };
    this._onLayoutFooter = (e) => {
      this._triggerRemeasureForChildListsInCell(this._getFooterCellKey());
      this._footerLength = this._selectLength(e.nativeEvent.layout);
    };
    this._onLayoutHeader = (e) => {
      this._headerLength = this._selectLength(e.nativeEvent.layout);
    };
    this._onContentSizeChange = (width, height) => {
      if (width > 0 && height > 0 && this.props.initialScrollIndex != null && this.props.initialScrollIndex > 0 && !this._hasTriggeredInitialScrollToIndex) {
        if (this.props.contentOffset == null) {
          if (this.props.initialScrollIndex < this.props.getItemCount(this.props.data)) {
            this.scrollToIndex({
              animated: false,
              index: (0, import_nullthrows.default)(this.props.initialScrollIndex)
            });
          } else {
            this.scrollToEnd({
              animated: false
            });
          }
        }
        this._hasTriggeredInitialScrollToIndex = true;
      }
      if (this.props.onContentSizeChange) {
        this.props.onContentSizeChange(width, height);
      }
      this._scrollMetrics.contentLength = this._selectLength({
        height,
        width
      });
      this._scheduleCellsToRenderUpdate();
      this._maybeCallOnEdgeReached();
    };
    this._convertParentScrollMetrics = (metrics) => {
      var offset = metrics.offset - this._offsetFromParentVirtualizedList;
      var visibleLength = metrics.visibleLength;
      var dOffset = offset - this._scrollMetrics.offset;
      var contentLength = this._scrollMetrics.contentLength;
      return {
        visibleLength,
        contentLength,
        offset,
        dOffset
      };
    };
    this._onScroll = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onScroll(e);
      });
      if (this.props.onScroll) {
        this.props.onScroll(e);
      }
      var timestamp = e.timeStamp;
      var visibleLength = this._selectLength(e.nativeEvent.layoutMeasurement);
      var contentLength = this._selectLength(e.nativeEvent.contentSize);
      var offset = this._selectOffset(e.nativeEvent.contentOffset);
      var dOffset = offset - this._scrollMetrics.offset;
      if (this._isNestedWithSameOrientation()) {
        if (this._scrollMetrics.contentLength === 0) {
          return;
        }
        var _this$_convertParentS = this._convertParentScrollMetrics({
          visibleLength,
          offset
        });
        visibleLength = _this$_convertParentS.visibleLength;
        contentLength = _this$_convertParentS.contentLength;
        offset = _this$_convertParentS.offset;
        dOffset = _this$_convertParentS.dOffset;
      }
      var dt = this._scrollMetrics.timestamp ? Math.max(1, timestamp - this._scrollMetrics.timestamp) : 1;
      var velocity = dOffset / dt;
      if (dt > 500 && this._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !this._hasWarned.perf) {
        infoLog_default("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", {
          dt,
          prevDt: this._scrollMetrics.dt,
          contentLength
        });
        this._hasWarned.perf = true;
      }
      var zoomScale = e.nativeEvent.zoomScale < 0 ? 1 : e.nativeEvent.zoomScale;
      this._scrollMetrics = {
        contentLength,
        dt,
        dOffset,
        offset,
        timestamp,
        velocity,
        visibleLength,
        zoomScale
      };
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
      if (!this.props) {
        return;
      }
      this._maybeCallOnEdgeReached();
      if (velocity !== 0) {
        this._fillRateHelper.activate();
      }
      this._computeBlankness();
      this._scheduleCellsToRenderUpdate();
    };
    this._onScrollBeginDrag = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onScrollBeginDrag(e);
      });
      this._viewabilityTuples.forEach((tuple) => {
        tuple.viewabilityHelper.recordInteraction();
      });
      this._hasInteracted = true;
      this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
    };
    this._onScrollEndDrag = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onScrollEndDrag(e);
      });
      var velocity = e.nativeEvent.velocity;
      if (velocity) {
        this._scrollMetrics.velocity = this._selectOffset(velocity);
      }
      this._computeBlankness();
      this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
    };
    this._onMomentumScrollBegin = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onMomentumScrollBegin(e);
      });
      this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
    };
    this._onMomentumScrollEnd = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onMomentumScrollEnd(e);
      });
      this._scrollMetrics.velocity = 0;
      this._computeBlankness();
      this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
    };
    this._updateCellsToRender = () => {
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
      this.setState((state, props) => {
        var cellsAroundViewport = this._adjustCellsAroundViewport(props, state.cellsAroundViewport);
        var renderMask = _VirtualizedList._createRenderMask(props, cellsAroundViewport, this._getNonViewportRenderRegions(props));
        if (cellsAroundViewport.first === state.cellsAroundViewport.first && cellsAroundViewport.last === state.cellsAroundViewport.last && renderMask.equals(state.renderMask)) {
          return null;
        }
        return {
          cellsAroundViewport,
          renderMask
        };
      });
    };
    this._createViewToken = (index, isViewable, props) => {
      var data = props.data, getItem = props.getItem;
      var item = getItem(data, index);
      return {
        index,
        item,
        key: this._keyExtractor(item, index, props),
        isViewable
      };
    };
    this._getOffsetApprox = (index, props) => {
      if (Number.isInteger(index)) {
        return this.__getFrameMetricsApprox(index, props).offset;
      } else {
        var frameMetrics = this.__getFrameMetricsApprox(Math.floor(index), props);
        var remainder = index - Math.floor(index);
        return frameMetrics.offset + remainder * frameMetrics.length;
      }
    };
    this.__getFrameMetricsApprox = (index, props) => {
      var frame = this._getFrameMetrics(index, props);
      if (frame && frame.index === index) {
        return frame;
      } else {
        var data = props.data, getItemCount = props.getItemCount, getItemLayout = props.getItemLayout;
        (0, import_invariant10.default)(index >= 0 && index < getItemCount(data), "Tried to get frame for out of range index " + index);
        (0, import_invariant10.default)(!getItemLayout, "Should not have to estimate frames when a measurement metrics function is provided");
        return {
          length: this._averageCellLength,
          offset: this._averageCellLength * index
        };
      }
    };
    this._getFrameMetrics = (index, props) => {
      var data = props.data, getItem = props.getItem, getItemCount = props.getItemCount, getItemLayout = props.getItemLayout;
      (0, import_invariant10.default)(index >= 0 && index < getItemCount(data), "Tried to get frame for out of range index " + index);
      var item = getItem(data, index);
      var frame = this._frames[this._keyExtractor(item, index, props)];
      if (!frame || frame.index !== index) {
        if (getItemLayout) {
          return getItemLayout(data, index);
        }
      }
      return frame;
    };
    this._getNonViewportRenderRegions = (props) => {
      if (!(this._lastFocusedCellKey && this._cellRefs[this._lastFocusedCellKey])) {
        return [];
      }
      var lastFocusedCellRenderer = this._cellRefs[this._lastFocusedCellKey];
      var focusedCellIndex = lastFocusedCellRenderer.props.index;
      var itemCount = props.getItemCount(props.data);
      if (focusedCellIndex >= itemCount || this._keyExtractor(props.getItem(props.data, focusedCellIndex), focusedCellIndex, props) !== this._lastFocusedCellKey) {
        return [];
      }
      var first = focusedCellIndex;
      var heightOfCellsBeforeFocused = 0;
      for (var i = first - 1; i >= 0 && heightOfCellsBeforeFocused < this._scrollMetrics.visibleLength; i--) {
        first--;
        heightOfCellsBeforeFocused += this.__getFrameMetricsApprox(i, props).length;
      }
      var last = focusedCellIndex;
      var heightOfCellsAfterFocused = 0;
      for (var _i = last + 1; _i < itemCount && heightOfCellsAfterFocused < this._scrollMetrics.visibleLength; _i++) {
        last++;
        heightOfCellsAfterFocused += this.__getFrameMetricsApprox(_i, props).length;
      }
      return [{
        first,
        last
      }];
    };
    this._checkProps(_props);
    this._fillRateHelper = new FillRateHelper_default(this._getFrameMetrics);
    this._updateCellsToRenderBatcher = new Batchinator_default(this._updateCellsToRender, (_this$props$updateCel = this.props.updateCellsBatchingPeriod) !== null && _this$props$updateCel !== void 0 ? _this$props$updateCel : 50);
    if (this.props.viewabilityConfigCallbackPairs) {
      this._viewabilityTuples = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
        viewabilityHelper: new ViewabilityHelper_default(pair.viewabilityConfig),
        onViewableItemsChanged: pair.onViewableItemsChanged
      }));
    } else {
      var _this$props3 = this.props, onViewableItemsChanged = _this$props3.onViewableItemsChanged, viewabilityConfig = _this$props3.viewabilityConfig;
      if (onViewableItemsChanged) {
        this._viewabilityTuples.push({
          viewabilityHelper: new ViewabilityHelper_default(viewabilityConfig),
          onViewableItemsChanged
        });
      }
    }
    var initialRenderRegion = _VirtualizedList._initialRenderRegion(_props);
    this.state = {
      cellsAroundViewport: initialRenderRegion,
      renderMask: _VirtualizedList._createRenderMask(_props, initialRenderRegion)
    };
    this.invertedWheelEventHandler = (ev) => {
      var scrollOffset = this.props.horizontal ? ev.target.scrollLeft : ev.target.scrollTop;
      var scrollLength = this.props.horizontal ? ev.target.scrollWidth : ev.target.scrollHeight;
      var clientLength = this.props.horizontal ? ev.target.clientWidth : ev.target.clientHeight;
      var isEventTargetScrollable = scrollLength > clientLength;
      var delta = this.props.horizontal ? ev.deltaX || ev.wheelDeltaX : ev.deltaY || ev.wheelDeltaY;
      var leftoverDelta = delta;
      if (isEventTargetScrollable) {
        leftoverDelta = delta < 0 ? Math.min(delta + scrollOffset, 0) : Math.max(delta - (scrollLength - clientLength - scrollOffset), 0);
      }
      var targetDelta = delta - leftoverDelta;
      if (this.props.inverted && this._scrollRef && this._scrollRef.getScrollableNode) {
        var node = this._scrollRef.getScrollableNode();
        if (this.props.horizontal) {
          ev.target.scrollLeft += targetDelta;
          var nextScrollLeft = node.scrollLeft - leftoverDelta;
          node.scrollLeft = !this.props.getItemLayout ? Math.min(nextScrollLeft, this._totalCellLength) : nextScrollLeft;
        } else {
          ev.target.scrollTop += targetDelta;
          var nextScrollTop = node.scrollTop - leftoverDelta;
          node.scrollTop = !this.props.getItemLayout ? Math.min(nextScrollTop, this._totalCellLength) : nextScrollTop;
        }
        ev.preventDefault();
      }
    };
  }
  _checkProps(props) {
    var onScroll = props.onScroll, windowSize = props.windowSize, getItemCount = props.getItemCount, data = props.data, initialScrollIndex = props.initialScrollIndex;
    (0, import_invariant10.default)(
      // $FlowFixMe[prop-missing]
      !onScroll || !onScroll.__isNative,
      "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"
    );
    (0, import_invariant10.default)(windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
    (0, import_invariant10.default)(getItemCount, 'VirtualizedList: The "getItemCount" prop must be provided');
    var itemCount = getItemCount(data);
    if (initialScrollIndex != null && !this._hasTriggeredInitialScrollToIndex && (initialScrollIndex < 0 || itemCount > 0 && initialScrollIndex >= itemCount) && !this._hasWarned.initialScrollIndex) {
      console.warn('initialScrollIndex "' + initialScrollIndex + '" is not valid (list has ' + itemCount + " items)");
      this._hasWarned.initialScrollIndex = true;
    }
    if (__DEV__3 && !this._hasWarned.flexWrap) {
      var flatStyles = StyleSheet_default.flatten(this.props.contentContainerStyle);
      if (flatStyles != null && flatStyles.flexWrap === "wrap") {
        console.warn("`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.");
        this._hasWarned.flexWrap = true;
      }
    }
  }
  static _createRenderMask(props, cellsAroundViewport, additionalRegions) {
    var itemCount = props.getItemCount(props.data);
    (0, import_invariant10.default)(cellsAroundViewport.first >= 0 && cellsAroundViewport.last >= cellsAroundViewport.first - 1 && cellsAroundViewport.last < itemCount, 'Invalid cells around viewport "[' + cellsAroundViewport.first + ", " + cellsAroundViewport.last + ']" was passed to VirtualizedList._createRenderMask');
    var renderMask = new CellRenderMask(itemCount);
    if (itemCount > 0) {
      var allRegions = [cellsAroundViewport, ...additionalRegions !== null && additionalRegions !== void 0 ? additionalRegions : []];
      for (var _i2 = 0, _allRegions = allRegions; _i2 < _allRegions.length; _i2++) {
        var region = _allRegions[_i2];
        renderMask.addCells(region);
      }
      if (props.initialScrollIndex == null || props.initialScrollIndex <= 0) {
        var initialRegion = _VirtualizedList._initialRenderRegion(props);
        renderMask.addCells(initialRegion);
      }
      var stickyIndicesSet = new Set(props.stickyHeaderIndices);
      _VirtualizedList._ensureClosestStickyHeader(props, stickyIndicesSet, renderMask, cellsAroundViewport.first);
    }
    return renderMask;
  }
  static _initialRenderRegion(props) {
    var _props$initialScrollI;
    var itemCount = props.getItemCount(props.data);
    var firstCellIndex = Math.max(0, Math.min(itemCount - 1, Math.floor((_props$initialScrollI = props.initialScrollIndex) !== null && _props$initialScrollI !== void 0 ? _props$initialScrollI : 0)));
    var lastCellIndex = Math.min(itemCount, firstCellIndex + initialNumToRenderOrDefault(props.initialNumToRender)) - 1;
    return {
      first: firstCellIndex,
      last: lastCellIndex
    };
  }
  static _ensureClosestStickyHeader(props, stickyIndicesSet, renderMask, cellIdx) {
    var stickyOffset = props.ListHeaderComponent ? 1 : 0;
    for (var itemIdx = cellIdx - 1; itemIdx >= 0; itemIdx--) {
      if (stickyIndicesSet.has(itemIdx + stickyOffset)) {
        renderMask.addCells({
          first: itemIdx,
          last: itemIdx
        });
        break;
      }
    }
  }
  _adjustCellsAroundViewport(props, cellsAroundViewport) {
    var data = props.data, getItemCount = props.getItemCount;
    var onEndReachedThreshold = onEndReachedThresholdOrDefault(props.onEndReachedThreshold);
    var _this$_scrollMetrics = this._scrollMetrics, contentLength = _this$_scrollMetrics.contentLength, offset = _this$_scrollMetrics.offset, visibleLength = _this$_scrollMetrics.visibleLength;
    var distanceFromEnd = contentLength - visibleLength - offset;
    if (visibleLength <= 0 || contentLength <= 0) {
      return cellsAroundViewport.last >= getItemCount(data) ? _VirtualizedList._constrainToItemCount(cellsAroundViewport, props) : cellsAroundViewport;
    }
    var newCellsAroundViewport;
    if (props.disableVirtualization) {
      var renderAhead = distanceFromEnd < onEndReachedThreshold * visibleLength ? maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch) : 0;
      newCellsAroundViewport = {
        first: 0,
        last: Math.min(cellsAroundViewport.last + renderAhead, getItemCount(data) - 1)
      };
    } else {
      if (props.initialScrollIndex && !this._scrollMetrics.offset && Math.abs(distanceFromEnd) >= Number.EPSILON) {
        return cellsAroundViewport.last >= getItemCount(data) ? _VirtualizedList._constrainToItemCount(cellsAroundViewport, props) : cellsAroundViewport;
      }
      newCellsAroundViewport = computeWindowedRenderLimits(props, maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch), windowSizeOrDefault(props.windowSize), cellsAroundViewport, this.__getFrameMetricsApprox, this._scrollMetrics);
      (0, import_invariant10.default)(newCellsAroundViewport.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
    }
    if (this._nestedChildLists.size() > 0) {
      var childIdx = this._findFirstChildWithMore(newCellsAroundViewport.first, newCellsAroundViewport.last);
      newCellsAroundViewport.last = childIdx !== null && childIdx !== void 0 ? childIdx : newCellsAroundViewport.last;
    }
    return newCellsAroundViewport;
  }
  _findFirstChildWithMore(first, last) {
    for (var ii = first; ii <= last; ii++) {
      var cellKeyForIndex = this._indicesToKeys.get(ii);
      if (cellKeyForIndex != null && this._nestedChildLists.anyInCell(cellKeyForIndex, (childList) => childList.hasMore())) {
        return ii;
      }
    }
    return null;
  }
  componentDidMount() {
    if (this._isNestedWithSameOrientation()) {
      this.context.registerAsNestedChild({
        ref: this,
        cellKey: this.context.cellKey
      });
    }
    this.setupWebWheelHandler();
  }
  componentWillUnmount() {
    if (this._isNestedWithSameOrientation()) {
      this.context.unregisterAsNestedChild({
        ref: this
      });
    }
    this._updateCellsToRenderBatcher.dispose({
      abort: true
    });
    this._viewabilityTuples.forEach((tuple) => {
      tuple.viewabilityHelper.dispose();
    });
    this._fillRateHelper.deactivateAndFlush();
    this.teardownWebWheelHandler();
  }
  // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
  setupWebWheelHandler() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      this._scrollRef.getScrollableNode().addEventListener("wheel", this.invertedWheelEventHandler);
    } else {
      setTimeout(() => this.setupWebWheelHandler(), 50);
      return;
    }
  }
  // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
  teardownWebWheelHandler() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      this._scrollRef.getScrollableNode().removeEventListener("wheel", this.invertedWheelEventHandler);
    }
  }
  static getDerivedStateFromProps(newProps, prevState) {
    var itemCount = newProps.getItemCount(newProps.data);
    if (itemCount === prevState.renderMask.numCells()) {
      return prevState;
    }
    var constrainedCells = _VirtualizedList._constrainToItemCount(prevState.cellsAroundViewport, newProps);
    return {
      cellsAroundViewport: constrainedCells,
      renderMask: _VirtualizedList._createRenderMask(newProps, constrainedCells)
    };
  }
  _pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, first, last, inversionStyle) {
    var _this = this;
    var _this$props4 = this.props, CellRendererComponent = _this$props4.CellRendererComponent, ItemSeparatorComponent = _this$props4.ItemSeparatorComponent, ListHeaderComponent = _this$props4.ListHeaderComponent, ListItemComponent = _this$props4.ListItemComponent, data = _this$props4.data, debug = _this$props4.debug, getItem = _this$props4.getItem, getItemCount = _this$props4.getItemCount, getItemLayout = _this$props4.getItemLayout, horizontal = _this$props4.horizontal, renderItem = _this$props4.renderItem;
    var stickyOffset = ListHeaderComponent ? 1 : 0;
    var end = getItemCount(data) - 1;
    var prevCellKey;
    last = Math.min(end, last);
    var _loop = /* @__PURE__ */ __name(function _loop2() {
      var item = getItem(data, ii);
      var key = _this._keyExtractor(item, ii, _this.props);
      _this._indicesToKeys.set(ii, key);
      if (stickyIndicesFromProps.has(ii + stickyOffset)) {
        stickyHeaderIndices.push(cells.length);
      }
      var shouldListenForLayout = getItemLayout == null || debug || _this._fillRateHelper.enabled();
      cells.push(/* @__PURE__ */ React16.createElement(CellRenderer, (0, import_extends4.default)({
        CellRendererComponent,
        ItemSeparatorComponent: ii < end ? ItemSeparatorComponent : void 0,
        ListItemComponent,
        cellKey: key,
        horizontal,
        index: ii,
        inversionStyle,
        item,
        key,
        prevCellKey,
        onUpdateSeparators: _this._onUpdateSeparators,
        onCellFocusCapture: /* @__PURE__ */ __name((e) => _this._onCellFocusCapture(key), "onCellFocusCapture"),
        onUnmount: _this._onCellUnmount,
        ref: /* @__PURE__ */ __name((_ref) => {
          _this._cellRefs[key] = _ref;
        }, "ref"),
        renderItem
      }, shouldListenForLayout && {
        onCellLayout: _this._onCellLayout
      })));
      prevCellKey = key;
    }, "_loop");
    for (var ii = first; ii <= last; ii++) {
      _loop();
    }
  }
  static _constrainToItemCount(cells, props) {
    var itemCount = props.getItemCount(props.data);
    var last = Math.min(itemCount - 1, cells.last);
    var maxToRenderPerBatch = maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch);
    return {
      first: clamp_default(0, itemCount - 1 - maxToRenderPerBatch, cells.first),
      last
    };
  }
  _isNestedWithSameOrientation() {
    var nestedContext = this.context;
    return !!(nestedContext && !!nestedContext.horizontal === horizontalOrDefault(this.props.horizontal));
  }
  _keyExtractor(item, index, props) {
    if (props.keyExtractor != null) {
      return props.keyExtractor(item, index);
    }
    var key = keyExtractor(item, index);
    if (key === String(index)) {
      _usedIndexForKey = true;
      if (item.type && item.type.displayName) {
        _keylessItemComponentName = item.type.displayName;
      }
    }
    return key;
  }
  render() {
    this._checkProps(this.props);
    var _this$props5 = this.props, ListEmptyComponent = _this$props5.ListEmptyComponent, ListFooterComponent = _this$props5.ListFooterComponent, ListHeaderComponent = _this$props5.ListHeaderComponent;
    var _this$props6 = this.props, data = _this$props6.data, horizontal = _this$props6.horizontal;
    var inversionStyle = this.props.inverted ? horizontalOrDefault(this.props.horizontal) ? styles5.horizontallyInverted : styles5.verticallyInverted : null;
    var cells = [];
    var stickyIndicesFromProps = new Set(this.props.stickyHeaderIndices);
    var stickyHeaderIndices = [];
    if (ListHeaderComponent) {
      if (stickyIndicesFromProps.has(0)) {
        stickyHeaderIndices.push(0);
      }
      var _element = /* @__PURE__ */ React16.isValidElement(ListHeaderComponent) ? ListHeaderComponent : (
        // $FlowFixMe[not-a-component]
        // $FlowFixMe[incompatible-type-arg]
        /* @__PURE__ */ React16.createElement(ListHeaderComponent, null)
      );
      cells.push(/* @__PURE__ */ React16.createElement(VirtualizedListCellContextProvider, {
        cellKey: this._getCellKey() + "-header",
        key: "$header"
      }, /* @__PURE__ */ React16.createElement(
        View_default,
        {
          onLayout: this._onLayoutHeader,
          style: [inversionStyle, this.props.ListHeaderComponentStyle]
        },
        // $FlowFixMe[incompatible-type] - Typing ReactNativeComponent revealed errors
        _element
      )));
    }
    var itemCount = this.props.getItemCount(data);
    if (itemCount === 0 && ListEmptyComponent) {
      var _element2 = /* @__PURE__ */ React16.isValidElement(ListEmptyComponent) ? ListEmptyComponent : (
        // $FlowFixMe[not-a-component]
        // $FlowFixMe[incompatible-type-arg]
        /* @__PURE__ */ React16.createElement(ListEmptyComponent, null)
      );
      cells.push(/* @__PURE__ */ React16.createElement(VirtualizedListCellContextProvider, {
        cellKey: this._getCellKey() + "-empty",
        key: "$empty"
      }, /* @__PURE__ */ React16.cloneElement(_element2, {
        onLayout: /* @__PURE__ */ __name((event3) => {
          this._onLayoutEmpty(event3);
          if (_element2.props.onLayout) {
            _element2.props.onLayout(event3);
          }
        }, "onLayout"),
        style: [inversionStyle, _element2.props.style]
      })));
    }
    if (itemCount > 0) {
      _usedIndexForKey = false;
      _keylessItemComponentName = "";
      var spacerKey = this._getSpacerKey(!horizontal);
      var renderRegions = this.state.renderMask.enumerateRegions();
      var lastSpacer = findLastWhere(renderRegions, (r) => r.isSpacer);
      for (var _iterator = (0, import_createForOfIteratorHelperLoose3.default)(renderRegions), _step; !(_step = _iterator()).done; ) {
        var section = _step.value;
        if (section.isSpacer) {
          if (this.props.disableVirtualization) {
            continue;
          }
          var isLastSpacer = section === lastSpacer;
          var constrainToMeasured = isLastSpacer && !this.props.getItemLayout;
          var last = constrainToMeasured ? clamp_default(section.first - 1, section.last, this._highestMeasuredFrameIndex) : section.last;
          var firstMetrics = this.__getFrameMetricsApprox(section.first, this.props);
          var lastMetrics = this.__getFrameMetricsApprox(last, this.props);
          var spacerSize = lastMetrics.offset + lastMetrics.length - firstMetrics.offset;
          cells.push(/* @__PURE__ */ React16.createElement(View_default, {
            key: "$spacer-" + section.first,
            style: {
              [spacerKey]: spacerSize
            }
          }));
        } else {
          this._pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, section.first, section.last, inversionStyle);
        }
      }
      if (!this._hasWarned.keys && _usedIndexForKey) {
        console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", _keylessItemComponentName);
        this._hasWarned.keys = true;
      }
    }
    if (ListFooterComponent) {
      var _element3 = /* @__PURE__ */ React16.isValidElement(ListFooterComponent) ? ListFooterComponent : (
        // $FlowFixMe[not-a-component]
        // $FlowFixMe[incompatible-type-arg]
        /* @__PURE__ */ React16.createElement(ListFooterComponent, null)
      );
      cells.push(/* @__PURE__ */ React16.createElement(VirtualizedListCellContextProvider, {
        cellKey: this._getFooterCellKey(),
        key: "$footer"
      }, /* @__PURE__ */ React16.createElement(
        View_default,
        {
          onLayout: this._onLayoutFooter,
          style: [inversionStyle, this.props.ListFooterComponentStyle]
        },
        // $FlowFixMe[incompatible-type] - Typing ReactNativeComponent revealed errors
        _element3
      )));
    }
    var scrollProps = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, this.props), {}, {
      onContentSizeChange: this._onContentSizeChange,
      onLayout: this._onLayout,
      onScroll: this._onScroll,
      onScrollBeginDrag: this._onScrollBeginDrag,
      onScrollEndDrag: this._onScrollEndDrag,
      onMomentumScrollBegin: this._onMomentumScrollBegin,
      onMomentumScrollEnd: this._onMomentumScrollEnd,
      scrollEventThrottle: scrollEventThrottleOrDefault(this.props.scrollEventThrottle),
      // TODO: Android support
      invertStickyHeaders: this.props.invertStickyHeaders !== void 0 ? this.props.invertStickyHeaders : this.props.inverted,
      stickyHeaderIndices,
      style: inversionStyle ? [inversionStyle, this.props.style] : this.props.style
    });
    this._hasMore = this.state.cellsAroundViewport.last < itemCount - 1;
    var innerRet = /* @__PURE__ */ React16.createElement(VirtualizedListContextProvider, {
      value: {
        cellKey: null,
        getScrollMetrics: this._getScrollMetrics,
        horizontal: horizontalOrDefault(this.props.horizontal),
        getOutermostParentListRef: this._getOutermostParentListRef,
        registerAsNestedChild: this._registerAsNestedChild,
        unregisterAsNestedChild: this._unregisterAsNestedChild
      }
    }, /* @__PURE__ */ React16.cloneElement((this.props.renderScrollComponent || this._defaultRenderScrollComponent)(scrollProps), {
      ref: this._captureScrollRef
    }, cells));
    var ret = innerRet;
    if (this.props.debug) {
      return /* @__PURE__ */ React16.createElement(View_default, {
        style: styles5.debug
      }, ret, this._renderDebugOverlay());
    } else {
      return ret;
    }
  }
  componentDidUpdate(prevProps) {
    var _this$props7 = this.props, data = _this$props7.data, extraData = _this$props7.extraData;
    if (data !== prevProps.data || extraData !== prevProps.extraData) {
      this._viewabilityTuples.forEach((tuple) => {
        tuple.viewabilityHelper.resetViewableIndices();
      });
    }
    var hiPriInProgress = this._hiPriInProgress;
    this._scheduleCellsToRenderUpdate();
    if (hiPriInProgress) {
      this._hiPriInProgress = false;
    }
  }
  // Used for preventing scrollToIndex from being called multiple times for initialScrollIndex
  // flag to prevent infinite hiPri cell limit update
  // $FlowFixMe[missing-local-annot]
  /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
   * LTI update could not be added via codemod */
  _computeBlankness() {
    this._fillRateHelper.computeBlankness(this.props, this.state.cellsAroundViewport, this._scrollMetrics);
  }
  /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
   * LTI update could not be added via codemod */
  _onCellFocusCapture(cellKey) {
    this._lastFocusedCellKey = cellKey;
    this._updateCellsToRender();
  }
  _triggerRemeasureForChildListsInCell(cellKey) {
    this._nestedChildLists.forEachInCell(cellKey, (childList) => {
      childList.measureLayoutRelativeToContainingList();
    });
  }
  measureLayoutRelativeToContainingList() {
    try {
      if (!this._scrollRef) {
        return;
      }
      this._scrollRef.measureLayout(this.context.getOutermostParentListRef().getScrollRef(), (x, y, width, height) => {
        this._offsetFromParentVirtualizedList = this._selectOffset({
          x,
          y
        });
        this._scrollMetrics.contentLength = this._selectLength({
          width,
          height
        });
        var scrollMetrics = this._convertParentScrollMetrics(this.context.getScrollMetrics());
        var metricsChanged = this._scrollMetrics.visibleLength !== scrollMetrics.visibleLength || this._scrollMetrics.offset !== scrollMetrics.offset;
        if (metricsChanged) {
          this._scrollMetrics.visibleLength = scrollMetrics.visibleLength;
          this._scrollMetrics.offset = scrollMetrics.offset;
          this._nestedChildLists.forEach((childList) => {
            childList.measureLayoutRelativeToContainingList();
          });
        }
      }, (error2) => {
        console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
      });
    } catch (error2) {
      console.warn("measureLayoutRelativeToContainingList threw an error", error2.stack);
    }
  }
  _getFooterCellKey() {
    return this._getCellKey() + "-footer";
  }
  // $FlowFixMe[missing-local-annot]
  _renderDebugOverlay() {
    var normalize = this._scrollMetrics.visibleLength / (this._scrollMetrics.contentLength || 1);
    var framesInLayout = [];
    var itemCount = this.props.getItemCount(this.props.data);
    for (var ii = 0; ii < itemCount; ii++) {
      var frame = this.__getFrameMetricsApprox(ii, this.props);
      if (frame.inLayout) {
        framesInLayout.push(frame);
      }
    }
    var windowTop = this.__getFrameMetricsApprox(this.state.cellsAroundViewport.first, this.props).offset;
    var frameLast = this.__getFrameMetricsApprox(this.state.cellsAroundViewport.last, this.props);
    var windowLen = frameLast.offset + frameLast.length - windowTop;
    var visTop = this._scrollMetrics.offset;
    var visLen = this._scrollMetrics.visibleLength;
    return /* @__PURE__ */ React16.createElement(View_default, {
      style: [styles5.debugOverlayBase, styles5.debugOverlay]
    }, framesInLayout.map((f, ii2) => /* @__PURE__ */ React16.createElement(View_default, {
      key: "f" + ii2,
      style: [styles5.debugOverlayBase, styles5.debugOverlayFrame, {
        top: f.offset * normalize,
        height: f.length * normalize
      }]
    })), /* @__PURE__ */ React16.createElement(View_default, {
      style: [styles5.debugOverlayBase, styles5.debugOverlayFrameLast, {
        top: windowTop * normalize,
        height: windowLen * normalize
      }]
    }), /* @__PURE__ */ React16.createElement(View_default, {
      style: [styles5.debugOverlayBase, styles5.debugOverlayFrameVis, {
        top: visTop * normalize,
        height: visLen * normalize
      }]
    }));
  }
  _selectLength(metrics) {
    return !horizontalOrDefault(this.props.horizontal) ? metrics.height : metrics.width;
  }
  _selectOffset(metrics) {
    return !horizontalOrDefault(this.props.horizontal) ? metrics.y : metrics.x;
  }
  _maybeCallOnEdgeReached() {
    var _this$props8 = this.props, data = _this$props8.data, getItemCount = _this$props8.getItemCount, onStartReached = _this$props8.onStartReached, onStartReachedThreshold = _this$props8.onStartReachedThreshold, onEndReached = _this$props8.onEndReached, onEndReachedThreshold = _this$props8.onEndReachedThreshold, initialScrollIndex = _this$props8.initialScrollIndex;
    var _this$_scrollMetrics2 = this._scrollMetrics, contentLength = _this$_scrollMetrics2.contentLength, visibleLength = _this$_scrollMetrics2.visibleLength, offset = _this$_scrollMetrics2.offset;
    var distanceFromStart = offset;
    var distanceFromEnd = contentLength - visibleLength - offset;
    if (distanceFromStart < ON_EDGE_REACHED_EPSILON) {
      distanceFromStart = 0;
    }
    if (distanceFromEnd < ON_EDGE_REACHED_EPSILON) {
      distanceFromEnd = 0;
    }
    var DEFAULT_THRESHOLD_PX = 2;
    var startThreshold = onStartReachedThreshold != null ? onStartReachedThreshold * visibleLength : DEFAULT_THRESHOLD_PX;
    var endThreshold = onEndReachedThreshold != null ? onEndReachedThreshold * visibleLength : DEFAULT_THRESHOLD_PX;
    var isWithinStartThreshold = distanceFromStart <= startThreshold;
    var isWithinEndThreshold = distanceFromEnd <= endThreshold;
    if (onEndReached && this.state.cellsAroundViewport.last === getItemCount(data) - 1 && isWithinEndThreshold && this._scrollMetrics.contentLength !== this._sentEndForContentLength) {
      this._sentEndForContentLength = this._scrollMetrics.contentLength;
      onEndReached({
        distanceFromEnd
      });
    } else if (onStartReached != null && this.state.cellsAroundViewport.first === 0 && isWithinStartThreshold && this._scrollMetrics.contentLength !== this._sentStartForContentLength) {
      if (!initialScrollIndex || this._scrollMetrics.timestamp !== 0) {
        this._sentStartForContentLength = this._scrollMetrics.contentLength;
        onStartReached({
          distanceFromStart
        });
      }
    } else {
      this._sentStartForContentLength = isWithinStartThreshold ? this._sentStartForContentLength : 0;
      this._sentEndForContentLength = isWithinEndThreshold ? this._sentEndForContentLength : 0;
    }
  }
  /* Translates metrics from a scroll event in a parent VirtualizedList into
   * coordinates relative to the child list.
   */
  _scheduleCellsToRenderUpdate() {
    var _this$state$cellsArou = this.state.cellsAroundViewport, first = _this$state$cellsArou.first, last = _this$state$cellsArou.last;
    var _this$_scrollMetrics3 = this._scrollMetrics, offset = _this$_scrollMetrics3.offset, visibleLength = _this$_scrollMetrics3.visibleLength, velocity = _this$_scrollMetrics3.velocity;
    var itemCount = this.props.getItemCount(this.props.data);
    var hiPri = false;
    var onStartReachedThreshold = onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
    var onEndReachedThreshold = onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
    if (first > 0) {
      var distTop = offset - this.__getFrameMetricsApprox(first, this.props).offset;
      hiPri = distTop < 0 || velocity < -2 && distTop < getScrollingThreshold(onStartReachedThreshold, visibleLength);
    }
    if (!hiPri && last >= 0 && last < itemCount - 1) {
      var distBottom = this.__getFrameMetricsApprox(last, this.props).offset - (offset + visibleLength);
      hiPri = distBottom < 0 || velocity > 2 && distBottom < getScrollingThreshold(onEndReachedThreshold, visibleLength);
    }
    if (hiPri && (this._averageCellLength || this.props.getItemLayout) && !this._hiPriInProgress) {
      this._hiPriInProgress = true;
      this._updateCellsToRenderBatcher.dispose({
        abort: true
      });
      this._updateCellsToRender();
      return;
    } else {
      this._updateCellsToRenderBatcher.schedule();
    }
  }
  /**
   * Gets an approximate offset to an item at a given index. Supports
   * fractional indices.
   */
  _updateViewableItems(props, cellsAroundViewport) {
    this._viewabilityTuples.forEach((tuple) => {
      tuple.viewabilityHelper.onUpdate(props, this._scrollMetrics.offset, this._scrollMetrics.visibleLength, this._getFrameMetrics, this._createViewToken, tuple.onViewableItemsChanged, cellsAroundViewport);
    });
  }
};
VirtualizedList.contextType = VirtualizedListContext;
var styles5 = StyleSheet_default.create({
  verticallyInverted: {
    transform: "scaleY(-1)"
  },
  horizontallyInverted: {
    transform: "scaleX(-1)"
  },
  debug: {
    flex: 1
  },
  debugOverlayBase: {
    position: "absolute",
    top: 0,
    right: 0
  },
  debugOverlay: {
    bottom: 0,
    width: 20,
    borderColor: "blue",
    borderWidth: 1
  },
  debugOverlayFrame: {
    left: 0,
    backgroundColor: "orange"
  },
  debugOverlayFrameLast: {
    left: 0,
    borderColor: "green",
    borderWidth: 2
  },
  debugOverlayFrameVis: {
    left: 0,
    borderColor: "red",
    borderWidth: 2
  }
});
var VirtualizedList_default = VirtualizedList;

// ../../node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || /* @__PURE__ */ __name(function ponyfill(value) {
  return typeof value === "number" && value !== value;
}, "ponyfill");
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
__name(isEqual, "isEqual");
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
__name(areInputsEqual, "areInputsEqual");
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache6 = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache6 && cache6.lastThis === this && isEqual2(newArgs, cache6.lastArgs)) {
      return cache6.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache6 = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  __name(memoized, "memoized");
  memoized.clear = /* @__PURE__ */ __name(function clear() {
    cache6 = null;
  }, "clear");
  return memoized;
}
__name(memoizeOne, "memoizeOne");

// ../../node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
var _excluded8 = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
function removeClippedSubviewsOrDefault(removeClippedSubviews) {
  return removeClippedSubviews !== null && removeClippedSubviews !== void 0 ? removeClippedSubviews : Platform_default.OS === "android";
}
__name(removeClippedSubviewsOrDefault, "removeClippedSubviewsOrDefault");
function numColumnsOrDefault(numColumns) {
  return numColumns !== null && numColumns !== void 0 ? numColumns : 1;
}
__name(numColumnsOrDefault, "numColumnsOrDefault");
function isArrayLike(data) {
  return typeof Object(data).length === "number";
}
__name(isArrayLike, "isArrayLike");
var FlatList = class extends React17.PureComponent {
  static {
    __name(this, "FlatList");
  }
  /**
   * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
   */
  scrollToEnd(params) {
    if (this._listRef) {
      this._listRef.scrollToEnd(params);
    }
  }
  /**
   * Scrolls to the item at the specified index such that it is positioned in the viewable area
   * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the
   * middle. `viewOffset` is a fixed number of pixels to offset the final target position.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToIndex(params) {
    if (this._listRef) {
      this._listRef.scrollToIndex(params);
    }
  }
  /**
   * Requires linear scan through data - use `scrollToIndex` instead if possible.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToItem(params) {
    if (this._listRef) {
      this._listRef.scrollToItem(params);
    }
  }
  /**
   * Scroll to a specific content pixel offset in the list.
   *
   * Check out [scrollToOffset](docs/virtualizedlist.html#scrolltooffset) of VirtualizedList
   */
  scrollToOffset(params) {
    if (this._listRef) {
      this._listRef.scrollToOffset(params);
    }
  }
  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction() {
    if (this._listRef) {
      this._listRef.recordInteraction();
    }
  }
  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators() {
    if (this._listRef) {
      this._listRef.flashScrollIndicators();
    }
  }
  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder() {
    if (this._listRef) {
      return this._listRef.getScrollResponder();
    }
  }
  /**
   * Provides a reference to the underlying host component
   */
  getNativeScrollRef() {
    if (this._listRef) {
      return this._listRef.getScrollRef();
    }
  }
  getScrollableNode() {
    if (this._listRef) {
      return this._listRef.getScrollableNode();
    }
  }
  constructor(_props) {
    super(_props);
    this._virtualizedListPairs = [];
    this._captureRef = (ref) => {
      this._listRef = ref;
    };
    this._getItem = (data, index) => {
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      if (numColumns > 1) {
        var ret = [];
        for (var kk = 0; kk < numColumns; kk++) {
          var itemIndex = index * numColumns + kk;
          if (itemIndex < data.length) {
            var _item = data[itemIndex];
            ret.push(_item);
          }
        }
        return ret;
      } else {
        return data[index];
      }
    };
    this._getItemCount = (data) => {
      if (data != null && isArrayLike(data)) {
        var numColumns = numColumnsOrDefault(this.props.numColumns);
        return numColumns > 1 ? Math.ceil(data.length / numColumns) : data.length;
      } else {
        return 0;
      }
    };
    this._keyExtractor = (items, index) => {
      var _this$props$keyExtrac;
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      var keyExtractor2 = (_this$props$keyExtrac = this.props.keyExtractor) !== null && _this$props$keyExtrac !== void 0 ? _this$props$keyExtrac : keyExtractor;
      if (numColumns > 1) {
        (0, import_invariant11.default)(Array.isArray(items), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", numColumns);
        return items.map((item, kk) => keyExtractor2(item, index * numColumns + kk)).join(":");
      }
      return keyExtractor2(items, index);
    };
    this._renderer = (ListItemComponent, renderItem, columnWrapperStyle, numColumns, extraData) => {
      var cols = numColumnsOrDefault(numColumns);
      var render = /* @__PURE__ */ __name((props) => {
        if (ListItemComponent) {
          return /* @__PURE__ */ React17.createElement(ListItemComponent, props);
        } else if (renderItem) {
          return renderItem(props);
        } else {
          return null;
        }
      }, "render");
      var renderProp = /* @__PURE__ */ __name((info) => {
        if (cols > 1) {
          var _item2 = info.item, _index = info.index;
          (0, import_invariant11.default)(Array.isArray(_item2), "Expected array of items with numColumns > 1");
          return /* @__PURE__ */ React17.createElement(View_default, {
            style: [styles6.row, columnWrapperStyle]
          }, _item2.map((it, kk) => {
            var element = render({
              // $FlowFixMe[incompatible-call]
              item: it,
              index: _index * cols + kk,
              separators: info.separators
            });
            return element != null ? /* @__PURE__ */ React17.createElement(React17.Fragment, {
              key: kk
            }, element) : null;
          }));
        } else {
          return render(info);
        }
      }, "renderProp");
      return ListItemComponent ? {
        ListItemComponent: renderProp
      } : {
        renderItem: renderProp
      };
    };
    this._memoizedRenderer = memoizeOne(this._renderer);
    this._checkProps(this.props);
    if (this.props.viewabilityConfigCallbackPairs) {
      this._virtualizedListPairs = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
        viewabilityConfig: pair.viewabilityConfig,
        onViewableItemsChanged: this._createOnViewableItemsChanged(pair.onViewableItemsChanged)
      }));
    } else if (this.props.onViewableItemsChanged) {
      this._virtualizedListPairs.push({
        /* $FlowFixMe[incompatible-call] (>=0.63.0 site=react_native_fb) This
         * comment suppresses an error found when Flow v0.63 was deployed. To
         * see the error delete this comment and run Flow. */
        viewabilityConfig: this.props.viewabilityConfig,
        onViewableItemsChanged: this._createOnViewableItemsChanged(this.props.onViewableItemsChanged)
      });
    }
  }
  // $FlowFixMe[missing-local-annot]
  componentDidUpdate(prevProps) {
    (0, import_invariant11.default)(prevProps.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
    (0, import_invariant11.default)(prevProps.onViewableItemsChanged === this.props.onViewableItemsChanged, "Changing onViewableItemsChanged on the fly is not supported");
    (0, import_invariant11.default)(!deepDiffer_default(prevProps.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
    (0, import_invariant11.default)(prevProps.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
    this._checkProps(this.props);
  }
  // $FlowFixMe[missing-local-annot]
  _checkProps(props) {
    var getItem = props.getItem, getItemCount = props.getItemCount, horizontal = props.horizontal, columnWrapperStyle = props.columnWrapperStyle, onViewableItemsChanged = props.onViewableItemsChanged, viewabilityConfigCallbackPairs = props.viewabilityConfigCallbackPairs;
    var numColumns = numColumnsOrDefault(this.props.numColumns);
    (0, import_invariant11.default)(!getItem && !getItemCount, "FlatList does not support custom data formats.");
    if (numColumns > 1) {
      (0, import_invariant11.default)(!horizontal, "numColumns does not support horizontal.");
    } else {
      (0, import_invariant11.default)(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
    }
    (0, import_invariant11.default)(!(onViewableItemsChanged && viewabilityConfigCallbackPairs), "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
  }
  _pushMultiColumnViewable(arr, v) {
    var _this$props$keyExtrac2;
    var numColumns = numColumnsOrDefault(this.props.numColumns);
    var keyExtractor2 = (_this$props$keyExtrac2 = this.props.keyExtractor) !== null && _this$props$keyExtrac2 !== void 0 ? _this$props$keyExtrac2 : keyExtractor;
    v.item.forEach((item, ii) => {
      (0, import_invariant11.default)(v.index != null, "Missing index!");
      var index = v.index * numColumns + ii;
      arr.push((0, import_objectSpread212.default)((0, import_objectSpread212.default)({}, v), {}, {
        item,
        key: keyExtractor2(item, index),
        index
      }));
    });
  }
  _createOnViewableItemsChanged(onViewableItemsChanged) {
    return (info) => {
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      if (onViewableItemsChanged) {
        if (numColumns > 1) {
          var changed = [];
          var viewableItems = [];
          info.viewableItems.forEach((v) => this._pushMultiColumnViewable(viewableItems, v));
          info.changed.forEach((v) => this._pushMultiColumnViewable(changed, v));
          onViewableItemsChanged({
            viewableItems,
            changed
          });
        } else {
          onViewableItemsChanged(info);
        }
      }
    };
  }
  // $FlowFixMe[missing-local-annot]
  render() {
    var _this$props = this.props, numColumns = _this$props.numColumns, columnWrapperStyle = _this$props.columnWrapperStyle, _removeClippedSubviews = _this$props.removeClippedSubviews, _this$props$strictMod = _this$props.strictMode, strictMode = _this$props$strictMod === void 0 ? false : _this$props$strictMod, restProps = (0, import_objectWithoutPropertiesLoose8.default)(_this$props, _excluded8);
    var renderer = strictMode ? this._memoizedRenderer : this._renderer;
    return (
      // $FlowFixMe[incompatible-exact] - `restProps` (`Props`) is inexact.
      /* @__PURE__ */ React17.createElement(VirtualizedList_default, (0, import_extends5.default)({}, restProps, {
        getItem: this._getItem,
        getItemCount: this._getItemCount,
        keyExtractor: this._keyExtractor,
        ref: this._captureRef,
        viewabilityConfigCallbackPairs: this._virtualizedListPairs,
        removeClippedSubviews: removeClippedSubviewsOrDefault(_removeClippedSubviews)
      }, renderer(this.props.ListItemComponent, this.props.renderItem, columnWrapperStyle, numColumns, this.props.extraData)))
    );
  }
};
var styles6 = StyleSheet_default.create({
  row: {
    flexDirection: "row"
  }
});
var FlatList_default = FlatList;

// ../../node_modules/react-native-web/dist/exports/FlatList/index.js
var FlatList_default2 = FlatList_default;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/createAnimatedComponent.js
var import_extends6 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose9 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/useAnimatedProps.js
var import_objectSpread216 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedProps.js
var import_objectSpread215 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedInterpolation.js
var import_objectSpread214 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedWithChildren.js
var import_createForOfIteratorHelperLoose4 = __toESM(require_createForOfIteratorHelperLoose());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js
var import_objectSpread213 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/TurboModule/TurboModuleRegistry.js
var import_invariant12 = __toESM(require_invariant());
function get(name) {
  return null;
}
__name(get, "get");

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedModule.js
var NativeAnimatedModule_default = get("NativeAnimatedModule");

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedTurboModule.js
var NativeAnimatedTurboModule_default = get("NativeAnimatedTurboModule");

// ../../node_modules/react-native-web/dist/vendor/react-native/EventEmitter/RCTDeviceEventEmitter.js
var RCTDeviceEventEmitter_default = new EventEmitter();

// ../../node_modules/react-native-web/dist/vendor/react-native/EventEmitter/NativeEventEmitter.js
var import_invariant13 = __toESM(require_invariant());
var NativeEventEmitter = class {
  static {
    __name(this, "NativeEventEmitter");
  }
  constructor(nativeModule) {
    if (Platform_default.OS === "ios") {
      (0, import_invariant13.default)(nativeModule != null, "`new NativeEventEmitter()` requires a non-null argument.");
      this._nativeModule = nativeModule;
    }
  }
  addListener(eventType, listener, context) {
    var _this$_nativeModule;
    (_this$_nativeModule = this._nativeModule) == null ? void 0 : _this$_nativeModule.addListener(eventType);
    var subscription = RCTDeviceEventEmitter_default.addListener(eventType, listener, context);
    return {
      remove: /* @__PURE__ */ __name(() => {
        if (subscription != null) {
          var _this$_nativeModule2;
          (_this$_nativeModule2 = this._nativeModule) == null ? void 0 : _this$_nativeModule2.removeListeners(1);
          subscription.remove();
          subscription = null;
        }
      }, "remove")
    };
  }
  /**
   * @deprecated Use `remove` on the EventSubscription from `addListener`.
   */
  removeListener(eventType, listener) {
    var _this$_nativeModule3;
    (_this$_nativeModule3 = this._nativeModule) == null ? void 0 : _this$_nativeModule3.removeListeners(1);
    RCTDeviceEventEmitter_default.removeListener(eventType, listener);
  }
  emit(eventType) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    RCTDeviceEventEmitter_default.emit(eventType, ...args);
  }
  removeAllListeners(eventType) {
    var _this$_nativeModule4;
    (0, import_invariant13.default)(eventType != null, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
    (_this$_nativeModule4 = this._nativeModule) == null ? void 0 : _this$_nativeModule4.removeListeners(this.listenerCount(eventType));
    RCTDeviceEventEmitter_default.removeAllListeners(eventType);
  }
  listenerCount(eventType) {
    return RCTDeviceEventEmitter_default.listenerCount(eventType);
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Utilities/Platform.js
var Platform_default2 = Platform_default;

// ../../node_modules/react-native-web/dist/vendor/react-native/ReactNative/ReactNativeFeatureFlags.js
var ReactNativeFeatureFlags = {
  isLayoutAnimationEnabled: /* @__PURE__ */ __name(() => true, "isLayoutAnimationEnabled"),
  shouldEmitW3CPointerEvents: /* @__PURE__ */ __name(() => false, "shouldEmitW3CPointerEvents"),
  shouldPressibilityUseW3CPointerEventsForHover: /* @__PURE__ */ __name(() => false, "shouldPressibilityUseW3CPointerEventsForHover"),
  animatedShouldDebounceQueueFlush: /* @__PURE__ */ __name(() => false, "animatedShouldDebounceQueueFlush"),
  animatedShouldUseSingleOp: /* @__PURE__ */ __name(() => false, "animatedShouldUseSingleOp")
};
var ReactNativeFeatureFlags_default = ReactNativeFeatureFlags;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js
var import_invariant14 = __toESM(require_invariant());
var NativeAnimatedModule = Platform_default2.OS === "ios" && global.RN$Bridgeless === true ? NativeAnimatedTurboModule_default : NativeAnimatedModule_default;
var __nativeAnimatedNodeTagCount = 1;
var __nativeAnimationIdCount = 1;
var nativeEventEmitter;
var waitingForQueuedOperations = /* @__PURE__ */ new Set();
var queueOperations = false;
var queue = [];
var singleOpQueue = [];
var useSingleOpBatching = false;
Platform_default2.OS === "android" && !!(NativeAnimatedModule != null && NativeAnimatedModule.queueAndExecuteBatchedOperations) && ReactNativeFeatureFlags_default.animatedShouldUseSingleOp();
var flushQueueTimeout = null;
var eventListenerGetValueCallbacks = {};
var eventListenerAnimationFinishedCallbacks = {};
var nativeOps = useSingleOpBatching ? (function() {
  var apis = [
    "createAnimatedNode",
    // 1
    "updateAnimatedNodeConfig",
    // 2
    "getValue",
    // 3
    "startListeningToAnimatedNodeValue",
    // 4
    "stopListeningToAnimatedNodeValue",
    // 5
    "connectAnimatedNodes",
    // 6
    "disconnectAnimatedNodes",
    // 7
    "startAnimatingNode",
    // 8
    "stopAnimation",
    // 9
    "setAnimatedNodeValue",
    // 10
    "setAnimatedNodeOffset",
    // 11
    "flattenAnimatedNodeOffset",
    // 12
    "extractAnimatedNodeOffset",
    // 13
    "connectAnimatedNodeToView",
    // 14
    "disconnectAnimatedNodeFromView",
    // 15
    "restoreDefaultValues",
    // 16
    "dropAnimatedNode",
    // 17
    "addAnimatedEventToView",
    // 18
    "removeAnimatedEventFromView",
    // 19
    "addListener",
    // 20
    "removeListener"
    // 21
  ];
  return apis.reduce((acc, functionName, i) => {
    acc[functionName] = i + 1;
    return acc;
  }, {});
})() : NativeAnimatedModule;
var API = {
  getValue: /* @__PURE__ */ __name(function getValue(tag, saveValueCallback) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (useSingleOpBatching) {
      if (saveValueCallback) {
        eventListenerGetValueCallbacks[tag] = saveValueCallback;
      }
      API.queueOperation(nativeOps.getValue, tag);
    } else {
      API.queueOperation(nativeOps.getValue, tag, saveValueCallback);
    }
  }, "getValue"),
  setWaitingForIdentifier: /* @__PURE__ */ __name(function setWaitingForIdentifier(id2) {
    waitingForQueuedOperations.add(id2);
    queueOperations = true;
    if (ReactNativeFeatureFlags_default.animatedShouldDebounceQueueFlush() && flushQueueTimeout) {
      clearTimeout(flushQueueTimeout);
    }
  }, "setWaitingForIdentifier"),
  unsetWaitingForIdentifier: /* @__PURE__ */ __name(function unsetWaitingForIdentifier(id2) {
    waitingForQueuedOperations.delete(id2);
    if (waitingForQueuedOperations.size === 0) {
      queueOperations = false;
      API.disableQueue();
    }
  }, "unsetWaitingForIdentifier"),
  disableQueue: /* @__PURE__ */ __name(function disableQueue() {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (ReactNativeFeatureFlags_default.animatedShouldDebounceQueueFlush()) {
      var prevTimeout = flushQueueTimeout;
      clearImmediate(prevTimeout);
      flushQueueTimeout = setImmediate(API.flushQueue);
    } else {
      API.flushQueue();
    }
  }, "disableQueue"),
  flushQueue: /* @__PURE__ */ __name(function flushQueue() {
  }, "flushQueue"),
  queueOperation: /* @__PURE__ */ __name(function queueOperation(fn) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (useSingleOpBatching) {
      singleOpQueue.push(fn, ...args);
      return;
    }
    if (queueOperations || queue.length !== 0) {
      queue.push(() => fn(...args));
    } else {
      fn(...args);
    }
  }, "queueOperation"),
  createAnimatedNode: /* @__PURE__ */ __name(function createAnimatedNode(tag, config2) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.createAnimatedNode, tag, config2);
  }, "createAnimatedNode"),
  updateAnimatedNodeConfig: /* @__PURE__ */ __name(function updateAnimatedNodeConfig(tag, config2) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
  }, "updateAnimatedNodeConfig"),
  startListeningToAnimatedNodeValue: /* @__PURE__ */ __name(function startListeningToAnimatedNodeValue(tag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.startListeningToAnimatedNodeValue, tag);
  }, "startListeningToAnimatedNodeValue"),
  stopListeningToAnimatedNodeValue: /* @__PURE__ */ __name(function stopListeningToAnimatedNodeValue(tag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.stopListeningToAnimatedNodeValue, tag);
  }, "stopListeningToAnimatedNodeValue"),
  connectAnimatedNodes: /* @__PURE__ */ __name(function connectAnimatedNodes(parentTag, childTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.connectAnimatedNodes, parentTag, childTag);
  }, "connectAnimatedNodes"),
  disconnectAnimatedNodes: /* @__PURE__ */ __name(function disconnectAnimatedNodes(parentTag, childTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.disconnectAnimatedNodes, parentTag, childTag);
  }, "disconnectAnimatedNodes"),
  startAnimatingNode: /* @__PURE__ */ __name(function startAnimatingNode(animationId, nodeTag, config2, endCallback) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (useSingleOpBatching) {
      if (endCallback) {
        eventListenerAnimationFinishedCallbacks[animationId] = endCallback;
      }
      API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config2);
    } else {
      API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config2, endCallback);
    }
  }, "startAnimatingNode"),
  stopAnimation: /* @__PURE__ */ __name(function stopAnimation(animationId) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.stopAnimation, animationId);
  }, "stopAnimation"),
  setAnimatedNodeValue: /* @__PURE__ */ __name(function setAnimatedNodeValue(nodeTag, value) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.setAnimatedNodeValue, nodeTag, value);
  }, "setAnimatedNodeValue"),
  setAnimatedNodeOffset: /* @__PURE__ */ __name(function setAnimatedNodeOffset(nodeTag, offset) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.setAnimatedNodeOffset, nodeTag, offset);
  }, "setAnimatedNodeOffset"),
  flattenAnimatedNodeOffset: /* @__PURE__ */ __name(function flattenAnimatedNodeOffset(nodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.flattenAnimatedNodeOffset, nodeTag);
  }, "flattenAnimatedNodeOffset"),
  extractAnimatedNodeOffset: /* @__PURE__ */ __name(function extractAnimatedNodeOffset(nodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.extractAnimatedNodeOffset, nodeTag);
  }, "extractAnimatedNodeOffset"),
  connectAnimatedNodeToView: /* @__PURE__ */ __name(function connectAnimatedNodeToView(nodeTag, viewTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.connectAnimatedNodeToView, nodeTag, viewTag);
  }, "connectAnimatedNodeToView"),
  disconnectAnimatedNodeFromView: /* @__PURE__ */ __name(function disconnectAnimatedNodeFromView(nodeTag, viewTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.disconnectAnimatedNodeFromView, nodeTag, viewTag);
  }, "disconnectAnimatedNodeFromView"),
  restoreDefaultValues: /* @__PURE__ */ __name(function restoreDefaultValues(nodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (nativeOps.restoreDefaultValues != null) {
      API.queueOperation(nativeOps.restoreDefaultValues, nodeTag);
    }
  }, "restoreDefaultValues"),
  dropAnimatedNode: /* @__PURE__ */ __name(function dropAnimatedNode(tag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.dropAnimatedNode, tag);
  }, "dropAnimatedNode"),
  addAnimatedEventToView: /* @__PURE__ */ __name(function addAnimatedEventToView(viewTag, eventName, eventMapping) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.addAnimatedEventToView, viewTag, eventName, eventMapping);
  }, "addAnimatedEventToView"),
  removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.removeAnimatedEventFromView, viewTag, eventName, animatedNodeTag);
  }
};
var SUPPORTED_COLOR_STYLES = {
  backgroundColor: true,
  borderBottomColor: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderStartColor: true,
  borderTopColor: true,
  color: true,
  tintColor: true
};
var SUPPORTED_STYLES = (0, import_objectSpread213.default)((0, import_objectSpread213.default)({}, SUPPORTED_COLOR_STYLES), {}, {
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  elevation: true,
  opacity: true,
  transform: true,
  zIndex: true,
  /* ios styles */
  shadowOpacity: true,
  shadowRadius: true,
  /* legacy android transform properties */
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true
});
var SUPPORTED_TRANSFORMS = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
  perspective: true
};
var SUPPORTED_INTERPOLATION_PARAMS = {
  inputRange: true,
  outputRange: true,
  extrapolate: true,
  extrapolateRight: true,
  extrapolateLeft: true
};
function addWhitelistedStyleProp(prop) {
  SUPPORTED_STYLES[prop] = true;
}
__name(addWhitelistedStyleProp, "addWhitelistedStyleProp");
function addWhitelistedTransformProp(prop) {
  SUPPORTED_TRANSFORMS[prop] = true;
}
__name(addWhitelistedTransformProp, "addWhitelistedTransformProp");
function addWhitelistedInterpolationParam(param) {
  SUPPORTED_INTERPOLATION_PARAMS[param] = true;
}
__name(addWhitelistedInterpolationParam, "addWhitelistedInterpolationParam");
function isSupportedColorStyleProp(prop) {
  return SUPPORTED_COLOR_STYLES.hasOwnProperty(prop);
}
__name(isSupportedColorStyleProp, "isSupportedColorStyleProp");
function isSupportedStyleProp(prop) {
  return SUPPORTED_STYLES.hasOwnProperty(prop);
}
__name(isSupportedStyleProp, "isSupportedStyleProp");
function isSupportedTransformProp(prop) {
  return SUPPORTED_TRANSFORMS.hasOwnProperty(prop);
}
__name(isSupportedTransformProp, "isSupportedTransformProp");
function isSupportedInterpolationParam(param) {
  return SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(param);
}
__name(isSupportedInterpolationParam, "isSupportedInterpolationParam");
function validateTransform(configs) {
  configs.forEach((config2) => {
    if (!isSupportedTransformProp(config2.property)) {
      throw new Error("Property '" + config2.property + "' is not supported by native animated module");
    }
  });
}
__name(validateTransform, "validateTransform");
function validateStyles(styles9) {
  for (var _key2 in styles9) {
    if (!isSupportedStyleProp(_key2)) {
      throw new Error("Style property '" + _key2 + "' is not supported by native animated module");
    }
  }
}
__name(validateStyles, "validateStyles");
function validateInterpolation(config2) {
  for (var _key3 in config2) {
    if (!isSupportedInterpolationParam(_key3)) {
      throw new Error("Interpolation property '" + _key3 + "' is not supported by native animated module");
    }
  }
}
__name(validateInterpolation, "validateInterpolation");
function generateNewNodeTag() {
  return __nativeAnimatedNodeTagCount++;
}
__name(generateNewNodeTag, "generateNewNodeTag");
function generateNewAnimationId() {
  return __nativeAnimationIdCount++;
}
__name(generateNewAnimationId, "generateNewAnimationId");
function assertNativeAnimatedModule() {
  (0, import_invariant14.default)(NativeAnimatedModule, "Native animated module is not available");
}
__name(assertNativeAnimatedModule, "assertNativeAnimatedModule");
var _warnedMissingNativeAnimated = false;
function shouldUseNativeDriver(config2) {
  if (config2.useNativeDriver == null) {
    console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
  }
  if (config2.useNativeDriver === true && !NativeAnimatedModule) {
    if (!_warnedMissingNativeAnimated) {
      console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
      _warnedMissingNativeAnimated = true;
    }
    return false;
  }
  return config2.useNativeDriver || false;
}
__name(shouldUseNativeDriver, "shouldUseNativeDriver");
function transformDataType(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (/deg$/.test(value)) {
    var degrees = parseFloat(value) || 0;
    var radians = degrees * Math.PI / 180;
    return radians;
  } else {
    return value;
  }
}
__name(transformDataType, "transformDataType");
var NativeAnimatedHelper_default = {
  API,
  isSupportedColorStyleProp,
  isSupportedStyleProp,
  isSupportedTransformProp,
  isSupportedInterpolationParam,
  addWhitelistedStyleProp,
  addWhitelistedTransformProp,
  addWhitelistedInterpolationParam,
  validateStyles,
  validateTransform,
  validateInterpolation,
  generateNewNodeTag,
  generateNewAnimationId,
  assertNativeAnimatedModule,
  shouldUseNativeDriver,
  transformDataType,
  // $FlowExpectedError[unsafe-getters-setters] - unsafe getter lint suppresion
  // $FlowExpectedError[missing-type-arg] - unsafe getter lint suppresion
  get nativeEventEmitter() {
    if (!nativeEventEmitter) {
      nativeEventEmitter = new NativeEventEmitter(
        // T88715063: NativeEventEmitter only used this parameter on iOS. Now it uses it on all platforms, so this code was modified automatically to preserve its behavior
        // If you want to use the native module on other platforms, please remove this condition and test its behavior
        Platform_default2.OS !== "ios" ? null : NativeAnimatedModule
      );
    }
    return nativeEventEmitter;
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedNode.js
var import_invariant15 = __toESM(require_invariant());
var NativeAnimatedAPI = NativeAnimatedHelper_default.API;
var _uniqueId = 1;
var AnimatedNode = class {
  static {
    __name(this, "AnimatedNode");
  }
  __attach() {
  }
  __detach() {
    if (this.__isNative && this.__nativeTag != null) {
      NativeAnimatedHelper_default.API.dropAnimatedNode(this.__nativeTag);
      this.__nativeTag = void 0;
    }
  }
  __getValue() {
  }
  __getAnimatedValue() {
    return this.__getValue();
  }
  __addChild(child) {
  }
  __removeChild(child) {
  }
  __getChildren() {
    return [];
  }
  /* Methods and props used by native Animated impl */
  constructor() {
    this._listeners = {};
  }
  __makeNative(platformConfig) {
    if (!this.__isNative) {
      throw new Error('This node cannot be made a "native" animated node');
    }
    this._platformConfig = platformConfig;
    if (this.hasListeners()) {
      this._startListeningToNativeValueUpdates();
    }
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to
   * synchronously read the value because it might be driven natively.
   *
   * See https://reactnative.dev/docs/animatedvalue#addlistener
   */
  addListener(callback) {
    var id2 = String(_uniqueId++);
    this._listeners[id2] = callback;
    if (this.__isNative) {
      this._startListeningToNativeValueUpdates();
    }
    return id2;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvalue#removelistener
   */
  removeListener(id2) {
    delete this._listeners[id2];
    if (this.__isNative && !this.hasListeners()) {
      this._stopListeningForNativeValueUpdates();
    }
  }
  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvalue#removealllisteners
   */
  removeAllListeners() {
    this._listeners = {};
    if (this.__isNative) {
      this._stopListeningForNativeValueUpdates();
    }
  }
  hasListeners() {
    return !!Object.keys(this._listeners).length;
  }
  _startListeningToNativeValueUpdates() {
    if (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) {
      return;
    }
    if (this.__shouldUpdateListenersForNewNativeTag) {
      this.__shouldUpdateListenersForNewNativeTag = false;
      this._stopListeningForNativeValueUpdates();
    }
    NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
    this.__nativeAnimatedValueListener = NativeAnimatedHelper_default.nativeEventEmitter.addListener("onAnimatedValueUpdate", (data) => {
      if (data.tag !== this.__getNativeTag()) {
        return;
      }
      this.__onAnimatedValueUpdateReceived(data.value);
    });
  }
  __onAnimatedValueUpdateReceived(value) {
    this.__callListeners(value);
  }
  __callListeners(value) {
    for (var _key in this._listeners) {
      this._listeners[_key]({
        value
      });
    }
  }
  _stopListeningForNativeValueUpdates() {
    if (!this.__nativeAnimatedValueListener) {
      return;
    }
    this.__nativeAnimatedValueListener.remove();
    this.__nativeAnimatedValueListener = null;
    NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
  }
  __getNativeTag() {
    var _this$__nativeTag;
    NativeAnimatedHelper_default.assertNativeAnimatedModule();
    (0, import_invariant15.default)(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
    var nativeTag = (_this$__nativeTag = this.__nativeTag) !== null && _this$__nativeTag !== void 0 ? _this$__nativeTag : NativeAnimatedHelper_default.generateNewNodeTag();
    if (this.__nativeTag == null) {
      this.__nativeTag = nativeTag;
      var config2 = this.__getNativeConfig();
      if (this._platformConfig) {
        config2.platformConfig = this._platformConfig;
      }
      NativeAnimatedHelper_default.API.createAnimatedNode(nativeTag, config2);
      this.__shouldUpdateListenersForNewNativeTag = true;
    }
    return nativeTag;
  }
  __getNativeConfig() {
    throw new Error("This JS animated node type cannot be used as native animated node");
  }
  toJSON() {
    return this.__getValue();
  }
  __getPlatformConfig() {
    return this._platformConfig;
  }
  __setPlatformConfig(platformConfig) {
    this._platformConfig = platformConfig;
  }
};
var AnimatedNode_default = AnimatedNode;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedWithChildren.js
var AnimatedWithChildren = class extends AnimatedNode_default {
  static {
    __name(this, "AnimatedWithChildren");
  }
  constructor() {
    super();
    this._children = [];
  }
  __makeNative(platformConfig) {
    if (!this.__isNative) {
      this.__isNative = true;
      for (var _iterator = (0, import_createForOfIteratorHelperLoose4.default)(this._children), _step; !(_step = _iterator()).done; ) {
        var child = _step.value;
        child.__makeNative(platformConfig);
        NativeAnimatedHelper_default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
    }
    super.__makeNative(platformConfig);
  }
  __addChild(child) {
    if (this._children.length === 0) {
      this.__attach();
    }
    this._children.push(child);
    if (this.__isNative) {
      child.__makeNative(this.__getPlatformConfig());
      NativeAnimatedHelper_default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
  }
  __removeChild(child) {
    var index = this._children.indexOf(child);
    if (index === -1) {
      console.warn("Trying to remove a child that doesn't exist");
      return;
    }
    if (this.__isNative && child.__isNative) {
      NativeAnimatedHelper_default.API.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
    this._children.splice(index, 1);
    if (this._children.length === 0) {
      this.__detach();
    }
  }
  __getChildren() {
    return this._children;
  }
  __callListeners(value) {
    super.__callListeners(value);
    if (!this.__isNative) {
      for (var _iterator2 = (0, import_createForOfIteratorHelperLoose4.default)(this._children), _step2; !(_step2 = _iterator2()).done; ) {
        var child = _step2.value;
        if (child.__getValue) {
          child.__callListeners(child.__getValue());
        }
      }
    }
  }
};
var AnimatedWithChildren_default = AnimatedWithChildren;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedInterpolation.js
var import_invariant16 = __toESM(require_invariant());
var import_normalize_colors2 = __toESM(require_normalize_colors());
var __DEV__4 = process.env.NODE_ENV !== "production";
var linear = /* @__PURE__ */ __name((t2) => t2, "linear");
function createInterpolation(config2) {
  if (config2.outputRange && typeof config2.outputRange[0] === "string") {
    return createInterpolationFromStringOutputRange(config2);
  }
  var outputRange = config2.outputRange;
  var inputRange = config2.inputRange;
  if (__DEV__4) {
    checkInfiniteRange("outputRange", outputRange);
    checkInfiniteRange("inputRange", inputRange);
    checkValidInputRange(inputRange);
    (0, import_invariant16.default)(inputRange.length === outputRange.length, "inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
  }
  var easing = config2.easing || linear;
  var extrapolateLeft = "extend";
  if (config2.extrapolateLeft !== void 0) {
    extrapolateLeft = config2.extrapolateLeft;
  } else if (config2.extrapolate !== void 0) {
    extrapolateLeft = config2.extrapolate;
  }
  var extrapolateRight = "extend";
  if (config2.extrapolateRight !== void 0) {
    extrapolateRight = config2.extrapolateRight;
  } else if (config2.extrapolate !== void 0) {
    extrapolateRight = config2.extrapolate;
  }
  return (input) => {
    (0, import_invariant16.default)(typeof input === "number", "Cannot interpolation an input which is not a number");
    var range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight);
  };
}
__name(createInterpolation, "createInterpolation");
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
  var result = input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    } else if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "extend") {
    }
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    } else if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "extend") {
    }
  }
  if (outputMin === outputMax) {
    return outputMin;
  }
  if (inputMin === inputMax) {
    if (input <= inputMin) {
      return outputMin;
    }
    return outputMax;
  }
  if (inputMin === -Infinity) {
    result = -result;
  } else if (inputMax === Infinity) {
    result = result - inputMin;
  } else {
    result = (result - inputMin) / (inputMax - inputMin);
  }
  result = easing(result);
  if (outputMin === -Infinity) {
    result = -result;
  } else if (outputMax === Infinity) {
    result = result + outputMin;
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }
  return result;
}
__name(interpolate, "interpolate");
function colorToRgba(input) {
  var normalizedColor = (0, import_normalize_colors2.default)(input);
  if (normalizedColor === null || typeof normalizedColor !== "number") {
    return input;
  }
  normalizedColor = normalizedColor || 0;
  var r = (normalizedColor & 4278190080) >>> 24;
  var g = (normalizedColor & 16711680) >>> 16;
  var b = (normalizedColor & 65280) >>> 8;
  var a = (normalizedColor & 255) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
__name(colorToRgba, "colorToRgba");
var stringShapeRegex = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
function createInterpolationFromStringOutputRange(config2) {
  var outputRange = config2.outputRange;
  (0, import_invariant16.default)(outputRange.length >= 2, "Bad output range");
  outputRange = outputRange.map(colorToRgba);
  checkPattern(outputRange);
  var outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach((value) => {
    value.match(stringShapeRegex).forEach((number, i) => {
      outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return createInterpolation((0, import_objectSpread214.default)((0, import_objectSpread214.default)({}, config2), {}, {
      outputRange: outputRanges[i]
    }));
  });
  var shouldRound = isRgbOrRgba(outputRange[0]);
  return (input) => {
    var i = 0;
    return outputRange[0].replace(stringShapeRegex, () => {
      var val = +interpolations[i++](input);
      if (shouldRound) {
        val = i < 4 ? Math.round(val) : Math.round(val * 1e3) / 1e3;
      }
      return String(val);
    });
  };
}
__name(createInterpolationFromStringOutputRange, "createInterpolationFromStringOutputRange");
function isRgbOrRgba(range) {
  return typeof range === "string" && range.startsWith("rgb");
}
__name(isRgbOrRgba, "isRgbOrRgba");
function checkPattern(arr) {
  var pattern = arr[0].replace(stringShapeRegex, "");
  for (var i = 1; i < arr.length; ++i) {
    (0, import_invariant16.default)(pattern === arr[i].replace(stringShapeRegex, ""), "invalid pattern " + arr[0] + " and " + arr[i]);
  }
}
__name(checkPattern, "checkPattern");
function findRange(input, inputRange) {
  var i;
  for (i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }
  return i - 1;
}
__name(findRange, "findRange");
function checkValidInputRange(arr) {
  (0, import_invariant16.default)(arr.length >= 2, "inputRange must have at least 2 elements");
  var message = "inputRange must be monotonically non-decreasing " + String(arr);
  for (var i = 1; i < arr.length; ++i) {
    (0, import_invariant16.default)(arr[i] >= arr[i - 1], message);
  }
}
__name(checkValidInputRange, "checkValidInputRange");
function checkInfiniteRange(name, arr) {
  (0, import_invariant16.default)(arr.length >= 2, name + " must have at least 2 elements");
  (0, import_invariant16.default)(
    arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity,
    /* $FlowFixMe[incompatible-type] (>=0.13.0) - In the addition expression
     * below this comment, one or both of the operands may be something that
     * doesn't cleanly convert to a string, like undefined, null, and object,
     * etc. If you really mean this implicit string conversion, you can do
     * something like String(myThing) */
    name + "cannot be ]-infinity;+infinity[ " + arr
  );
}
__name(checkInfiniteRange, "checkInfiniteRange");
var AnimatedInterpolation = class _AnimatedInterpolation extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedInterpolation");
  }
  // Export for testing.
  constructor(parent, config2) {
    super();
    this._parent = parent;
    this._config = config2;
    this._interpolation = createInterpolation(config2);
  }
  __makeNative(platformConfig) {
    this._parent.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    var parentValue = this._parent.__getValue();
    (0, import_invariant16.default)(typeof parentValue === "number", "Cannot interpolate an input which is not a number.");
    return this._interpolation(parentValue);
  }
  interpolate(config2) {
    return new _AnimatedInterpolation(this, config2);
  }
  __attach() {
    this._parent.__addChild(this);
  }
  __detach() {
    this._parent.__removeChild(this);
    super.__detach();
  }
  __transformDataType(range) {
    return range.map(NativeAnimatedHelper_default.transformDataType);
  }
  __getNativeConfig() {
    if (__DEV__4) {
      NativeAnimatedHelper_default.validateInterpolation(this._config);
    }
    return {
      inputRange: this._config.inputRange,
      // Only the `outputRange` can contain strings so we don't need to transform `inputRange` here
      outputRange: this.__transformDataType(this._config.outputRange),
      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend",
      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend",
      type: "interpolation"
    };
  }
};
AnimatedInterpolation.__createInterpolation = createInterpolation;
var AnimatedInterpolation_default = AnimatedInterpolation;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValue.js
var NativeAnimatedAPI2 = NativeAnimatedHelper_default.API;
function _flush(rootNode) {
  var animatedStyles = /* @__PURE__ */ new Set();
  function findAnimatedStyles(node) {
    if (typeof node.update === "function") {
      animatedStyles.add(node);
    } else {
      node.__getChildren().forEach(findAnimatedStyles);
    }
  }
  __name(findAnimatedStyles, "findAnimatedStyles");
  findAnimatedStyles(rootNode);
  animatedStyles.forEach((animatedStyle) => animatedStyle.update());
}
__name(_flush, "_flush");
function _executeAsAnimatedBatch(id2, operation) {
  NativeAnimatedAPI2.setWaitingForIdentifier(id2);
  operation();
  NativeAnimatedAPI2.unsetWaitingForIdentifier(id2);
}
__name(_executeAsAnimatedBatch, "_executeAsAnimatedBatch");
var AnimatedValue = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedValue");
  }
  constructor(value, config2) {
    super();
    if (typeof value !== "number") {
      throw new Error("AnimatedValue: Attempting to set value to undefined");
    }
    this._startingValue = this._value = value;
    this._offset = 0;
    this._animation = null;
    if (config2 && config2.useNativeDriver) {
      this.__makeNative();
    }
  }
  __detach() {
    if (this.__isNative) {
      NativeAnimatedAPI2.getValue(this.__getNativeTag(), (value) => {
        this._value = value - this._offset;
      });
    }
    this.stopAnimation();
    super.__detach();
  }
  __getValue() {
    return this._value + this._offset;
  }
  /**
   * Directly set the value.  This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvalue#setvalue
   */
  setValue(value) {
    if (this._animation) {
      this._animation.stop();
      this._animation = null;
    }
    this._updateValue(
      value,
      !this.__isNative
      /* don't perform a flush for natively driven values */
    );
    if (this.__isNative) {
      _executeAsAnimatedBatch(this.__getNativeTag().toString(), () => NativeAnimatedAPI2.setAnimatedNodeValue(this.__getNativeTag(), value));
    }
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether via
   * `setValue`, an animation, or `Animated.event`.  Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvalue#setoffset
   */
  setOffset(offset) {
    this._offset = offset;
    if (this.__isNative) {
      NativeAnimatedAPI2.setAnimatedNodeOffset(this.__getNativeTag(), offset);
    }
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue#flattenoffset
   */
  flattenOffset() {
    this._value += this._offset;
    this._offset = 0;
    if (this.__isNative) {
      NativeAnimatedAPI2.flattenAnimatedNodeOffset(this.__getNativeTag());
    }
  }
  /**
   * Sets the offset value to the base value, and resets the base value to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue#extractoffset
   */
  extractOffset() {
    this._offset += this._value;
    this._value = 0;
    if (this.__isNative) {
      NativeAnimatedAPI2.extractAnimatedNodeOffset(this.__getNativeTag());
    }
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvalue#stopanimation
   */
  stopAnimation(callback) {
    this.stopTracking();
    this._animation && this._animation.stop();
    this._animation = null;
    if (callback) {
      if (this.__isNative) {
        NativeAnimatedAPI2.getValue(this.__getNativeTag(), callback);
      } else {
        callback(this.__getValue());
      }
    }
  }
  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvalue#resetanimation
   */
  resetAnimation(callback) {
    this.stopAnimation(callback);
    this._value = this._startingValue;
    if (this.__isNative) {
      NativeAnimatedAPI2.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
    }
  }
  __onAnimatedValueUpdateReceived(value) {
    this._updateValue(
      value,
      false
      /*flush*/
    );
  }
  /**
   * Interpolates the value before updating the property, e.g. mapping 0-1 to
   * 0-10.
   */
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  /**
   * Typically only used internally, but could be used by a custom Animation
   * class.
   *
   * See https://reactnative.dev/docs/animatedvalue#animate
   */
  animate(animation, callback) {
    var handle = null;
    if (animation.__isInteraction) {
      handle = InteractionManager_default.createInteractionHandle();
    }
    var previousAnimation = this._animation;
    this._animation && this._animation.stop();
    this._animation = animation;
    animation.start(this._value, (value) => {
      this._updateValue(
        value,
        true
        /* flush */
      );
    }, (result) => {
      this._animation = null;
      if (handle !== null) {
        InteractionManager_default.clearInteractionHandle(handle);
      }
      callback && callback(result);
    }, previousAnimation, this);
  }
  /**
   * Typically only used internally.
   */
  stopTracking() {
    this._tracking && this._tracking.__detach();
    this._tracking = null;
  }
  /**
   * Typically only used internally.
   */
  track(tracking) {
    this.stopTracking();
    this._tracking = tracking;
    this._tracking && this._tracking.update();
  }
  _updateValue(value, flush) {
    if (value === void 0) {
      throw new Error("AnimatedValue: Attempting to set value to undefined");
    }
    this._value = value;
    if (flush) {
      _flush(this);
    }
    super.__callListeners(this.__getValue());
  }
  __getNativeConfig() {
    return {
      type: "value",
      value: this._value,
      offset: this._offset
    };
  }
};
var AnimatedValue_default = AnimatedValue;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedEvent.js
var import_invariant17 = __toESM(require_invariant());
var __DEV__5 = process.env.NODE_ENV !== "production";
function attachNativeEvent(viewRef, eventName, argMapping) {
  var eventMappings = [];
  var traverse = /* @__PURE__ */ __name((value, path) => {
    if (value instanceof AnimatedValue_default) {
      value.__makeNative();
      eventMappings.push({
        nativeEventPath: path,
        animatedValueTag: value.__getNativeTag()
      });
    } else if (typeof value === "object") {
      for (var _key in value) {
        traverse(value[_key], path.concat(_key));
      }
    }
  }, "traverse");
  (0, import_invariant17.default)(argMapping[0] && argMapping[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(argMapping[0].nativeEvent, []);
  if (viewRef != null) {
    eventMappings.forEach((mapping) => {
      NativeAnimatedHelper_default.API.addAnimatedEventToView(viewRef, eventName, mapping);
    });
  }
  return {
    detach() {
      if (viewRef != null) {
        eventMappings.forEach((mapping) => {
          NativeAnimatedHelper_default.API.removeAnimatedEventFromView(
            viewRef,
            eventName,
            // $FlowFixMe[incompatible-call]
            mapping.animatedValueTag
          );
        });
      }
    }
  };
}
__name(attachNativeEvent, "attachNativeEvent");
function validateMapping(argMapping, args) {
  var validate2 = /* @__PURE__ */ __name((recMapping, recEvt, key) => {
    if (recMapping instanceof AnimatedValue_default) {
      (0, import_invariant17.default)(typeof recEvt === "number", "Bad mapping of event key " + key + ", should be number but got " + typeof recEvt);
      return;
    }
    if (typeof recEvt === "number") {
      (0, import_invariant17.default)(recMapping instanceof AnimatedValue_default, "Bad mapping of type " + typeof recMapping + " for key " + key + ", event value must map to AnimatedValue");
      return;
    }
    (0, import_invariant17.default)(typeof recMapping === "object", "Bad mapping of type " + typeof recMapping + " for key " + key);
    (0, import_invariant17.default)(typeof recEvt === "object", "Bad event of type " + typeof recEvt + " for key " + key);
    for (var mappingKey in recMapping) {
      validate2(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
    }
  }, "validate");
  (0, import_invariant17.default)(args.length >= argMapping.length, "Event has less arguments than mapping");
  argMapping.forEach((mapping, idx) => {
    validate2(mapping, args[idx], "arg" + idx);
  });
}
__name(validateMapping, "validateMapping");
var AnimatedEvent = class {
  static {
    __name(this, "AnimatedEvent");
  }
  constructor(argMapping, config2) {
    this._listeners = [];
    this._argMapping = argMapping;
    if (config2 == null) {
      console.warn("Animated.event now requires a second argument for options");
      config2 = {
        useNativeDriver: false
      };
    }
    if (config2.listener) {
      this.__addListener(config2.listener);
    }
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = shouldUseNativeDriver(config2);
  }
  __addListener(callback) {
    this._listeners.push(callback);
  }
  __removeListener(callback) {
    this._listeners = this._listeners.filter((listener) => listener !== callback);
  }
  __attach(viewRef, eventName) {
    (0, import_invariant17.default)(this.__isNative, "Only native driven events need to be attached.");
    this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
  }
  __detach(viewTag, eventName) {
    (0, import_invariant17.default)(this.__isNative, "Only native driven events need to be detached.");
    this._attachedEvent && this._attachedEvent.detach();
  }
  __getHandler() {
    var _this = this;
    if (this.__isNative) {
      if (__DEV__5) {
        var _validatedMapping = false;
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (!_validatedMapping) {
            validateMapping(_this._argMapping, args);
            _validatedMapping = true;
          }
          _this._callListeners(...args);
        };
      } else {
        return this._callListeners;
      }
    }
    var validatedMapping = false;
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (__DEV__5 && !validatedMapping) {
        validateMapping(_this._argMapping, args);
        validatedMapping = true;
      }
      var traverse = /* @__PURE__ */ __name((recMapping, recEvt, key) => {
        if (recMapping instanceof AnimatedValue_default) {
          if (typeof recEvt === "number") {
            recMapping.setValue(recEvt);
          }
        } else if (typeof recMapping === "object") {
          for (var mappingKey in recMapping) {
            traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
          }
        }
      }, "traverse");
      _this._argMapping.forEach((mapping, idx) => {
        traverse(mapping, args[idx], "arg" + idx);
      });
      _this._callListeners(...args);
    };
  }
  _callListeners() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      args[_key4] = arguments[_key4];
    }
    this._listeners.forEach((listener) => listener(...args));
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTransform.js
var AnimatedTransform = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedTransform");
  }
  constructor(transforms) {
    super();
    this._transforms = transforms;
  }
  __makeNative() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          value.__makeNative();
        }
      }
    });
    super.__makeNative();
  }
  __getValue() {
    return this._transforms.map((transform) => {
      var result = {};
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          result[key] = value.__getValue();
        } else {
          result[key] = value;
        }
      }
      return result;
    });
  }
  __getAnimatedValue() {
    return this._transforms.map((transform) => {
      var result = {};
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          result[key] = value.__getAnimatedValue();
        } else {
          result[key] = value;
        }
      }
      return result;
    });
  }
  __attach() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          value.__addChild(this);
        }
      }
    });
  }
  __detach() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          value.__removeChild(this);
        }
      }
    });
    super.__detach();
  }
  __getNativeConfig() {
    var transConfigs = [];
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          transConfigs.push({
            type: "animated",
            property: key,
            nodeTag: value.__getNativeTag()
          });
        } else {
          transConfigs.push({
            type: "static",
            property: key,
            value: NativeAnimatedHelper_default.transformDataType(value)
          });
        }
      }
    });
    NativeAnimatedHelper_default.validateTransform(transConfigs);
    return {
      type: "transform",
      transforms: transConfigs
    };
  }
};
var AnimatedTransform_default = AnimatedTransform;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedStyle.js
var flattenStyle = StyleSheet_default.flatten;
function createAnimatedStyle(inputStyle) {
  var style = flattenStyle(inputStyle);
  var animatedStyles = {};
  for (var key in style) {
    var value = style[key];
    if (key === "transform" && Array.isArray(value)) {
      animatedStyles[key] = new AnimatedTransform_default(value);
    } else if (value instanceof AnimatedNode_default) {
      animatedStyles[key] = value;
    } else if (value && !Array.isArray(value) && typeof value === "object") {
      animatedStyles[key] = createAnimatedStyle(value);
    }
  }
  return animatedStyles;
}
__name(createAnimatedStyle, "createAnimatedStyle");
var AnimatedStyle = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedStyle");
  }
  constructor(style) {
    super();
    this._inputStyle = style;
    this._style = createAnimatedStyle(style);
  }
  // Recursively get values for nested styles (like iOS's shadowOffset)
  _walkStyleAndGetValues(style) {
    var updatedStyle = {};
    for (var key in style) {
      var value = style[key];
      if (value instanceof AnimatedNode_default) {
        if (!value.__isNative) {
          updatedStyle[key] = value.__getValue();
        }
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        updatedStyle[key] = this._walkStyleAndGetValues(value);
      } else {
        updatedStyle[key] = value;
      }
    }
    return updatedStyle;
  }
  __getValue() {
    return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
  }
  // Recursively get animated values for nested styles (like iOS's shadowOffset)
  _walkStyleAndGetAnimatedValues(style) {
    var updatedStyle = {};
    for (var key in style) {
      var value = style[key];
      if (value instanceof AnimatedNode_default) {
        updatedStyle[key] = value.__getAnimatedValue();
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        updatedStyle[key] = this._walkStyleAndGetAnimatedValues(value);
      }
    }
    return updatedStyle;
  }
  __getAnimatedValue() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  }
  __attach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof AnimatedNode_default) {
        value.__addChild(this);
      }
    }
  }
  __detach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof AnimatedNode_default) {
        value.__removeChild(this);
      }
    }
    super.__detach();
  }
  __makeNative() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof AnimatedNode_default) {
        value.__makeNative();
      }
    }
    super.__makeNative();
  }
  __getNativeConfig() {
    var styleConfig = {};
    for (var styleKey in this._style) {
      if (this._style[styleKey] instanceof AnimatedNode_default) {
        var style = this._style[styleKey];
        style.__makeNative();
        styleConfig[styleKey] = style.__getNativeTag();
      }
    }
    NativeAnimatedHelper_default.validateStyles(styleConfig);
    return {
      type: "style",
      style: styleConfig
    };
  }
};
var AnimatedStyle_default = AnimatedStyle;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedProps.js
var import_invariant18 = __toESM(require_invariant());
var AnimatedProps = class extends AnimatedNode_default {
  static {
    __name(this, "AnimatedProps");
  }
  constructor(props, callback) {
    super();
    if (props.style) {
      props = (0, import_objectSpread215.default)((0, import_objectSpread215.default)({}, props), {}, {
        style: new AnimatedStyle_default(props.style)
      });
    }
    this._props = props;
    this._callback = callback;
  }
  __getValue() {
    var props = {};
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        if (!value.__isNative || value instanceof AnimatedStyle_default) {
          props[key] = value.__getValue();
        }
      } else if (value instanceof AnimatedEvent) {
        props[key] = value.__getHandler();
      } else {
        props[key] = value;
      }
    }
    return props;
  }
  __getAnimatedValue() {
    var props = {};
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        props[key] = value.__getAnimatedValue();
      }
    }
    return props;
  }
  __attach() {
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        value.__addChild(this);
      }
    }
  }
  __detach() {
    if (this.__isNative && this._animatedView) {
      this.__disconnectAnimatedView();
    }
    this._animatedView = null;
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        value.__removeChild(this);
      }
    }
    super.__detach();
  }
  update() {
    this._callback();
  }
  __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof AnimatedNode_default) {
          value.__makeNative();
        }
      }
      if (this._animatedView) {
        this.__connectAnimatedView();
      }
    }
  }
  setNativeView(animatedView) {
    if (this._animatedView === animatedView) {
      return;
    }
    this._animatedView = animatedView;
    if (this.__isNative) {
      this.__connectAnimatedView();
    }
  }
  __connectAnimatedView() {
    (0, import_invariant18.default)(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = this._animatedView;
    (0, import_invariant18.default)(nativeViewTag != null, "Unable to locate attached view in the native tree");
    NativeAnimatedHelper_default.API.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
  }
  __disconnectAnimatedView() {
    (0, import_invariant18.default)(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = this._animatedView;
    (0, import_invariant18.default)(nativeViewTag != null, "Unable to locate attached view in the native tree");
    NativeAnimatedHelper_default.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
  }
  __restoreDefaultValues() {
    if (this.__isNative) {
      NativeAnimatedHelper_default.API.restoreDefaultValues(this.__getNativeTag());
    }
  }
  __getNativeConfig() {
    var propsConfig = {};
    for (var propKey in this._props) {
      var value = this._props[propKey];
      if (value instanceof AnimatedNode_default) {
        value.__makeNative();
        propsConfig[propKey] = value.__getNativeTag();
      }
    }
    return {
      type: "props",
      props: propsConfig
    };
  }
};
var AnimatedProps_default = AnimatedProps;

// ../../node_modules/react-native-web/dist/vendor/react-native/Utilities/useRefEffect.js
import { useCallback, useRef as useRef5 } from "react";
function useRefEffect(effect) {
  var cleanupRef = useRef5(void 0);
  return useCallback((instance) => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = void 0;
    }
    if (instance != null) {
      cleanupRef.current = effect(instance);
    }
  }, [effect]);
}
__name(useRefEffect, "useRefEffect");

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/useAnimatedProps.js
import { useCallback as useCallback2, useEffect as useEffect5, useMemo as useMemo3, useReducer, useRef as useRef6 } from "react";
function useAnimatedProps(props) {
  var _useReducer = useReducer((count) => count + 1, 0), scheduleUpdate = _useReducer[1];
  var onUpdateRef = useRef6(null);
  var node = useMemo3(() => new AnimatedProps_default(props, () => onUpdateRef.current == null ? void 0 : onUpdateRef.current()), [props]);
  useAnimatedPropsLifecycle(node);
  var refEffect = useCallback2((instance) => {
    node.setNativeView(instance);
    onUpdateRef.current = () => {
      scheduleUpdate();
    };
    var target = getEventTarget(instance);
    var events = [];
    for (var propName in props) {
      var propValue = props[propName];
      if (propValue instanceof AnimatedEvent && propValue.__isNative) {
        propValue.__attach(target, propName);
        events.push([propName, propValue]);
      }
    }
    return () => {
      onUpdateRef.current = null;
      for (var _i = 0, _events = events; _i < _events.length; _i++) {
        var _events$_i = _events[_i], _propName = _events$_i[0], _propValue = _events$_i[1];
        _propValue.__detach(target, _propName);
      }
    };
  }, [props, node]);
  var callbackRef = useRefEffect(refEffect);
  return [reduceAnimatedProps(node), callbackRef];
}
__name(useAnimatedProps, "useAnimatedProps");
function reduceAnimatedProps(node) {
  return (0, import_objectSpread216.default)((0, import_objectSpread216.default)({}, node.__getValue()), {}, {
    collapsable: false
  });
}
__name(reduceAnimatedProps, "reduceAnimatedProps");
function useAnimatedPropsLifecycle(node) {
  var prevNodeRef = useRef6(null);
  var isUnmountingRef = useRef6(false);
  useEffect5(() => {
    NativeAnimatedHelper_default.API.flushQueue();
  });
  useLayoutEffect_default(() => {
    isUnmountingRef.current = false;
    return () => {
      isUnmountingRef.current = true;
    };
  }, []);
  useLayoutEffect_default(() => {
    node.__attach();
    if (prevNodeRef.current != null) {
      var prevNode = prevNodeRef.current;
      prevNode.__restoreDefaultValues();
      prevNode.__detach();
      prevNodeRef.current = null;
    }
    return () => {
      if (isUnmountingRef.current) {
        node.__detach();
      } else {
        prevNodeRef.current = node;
      }
    };
  }, [node]);
}
__name(useAnimatedPropsLifecycle, "useAnimatedPropsLifecycle");
function getEventTarget(instance) {
  return typeof instance === "object" && typeof (instance == null ? void 0 : instance.getScrollableNode) === "function" ? (
    // $FlowFixMe[incompatible-use] - Legacy instance assumptions.
    instance.getScrollableNode()
  ) : instance;
}
__name(getEventTarget, "getEventTarget");

// ../../node_modules/react-native-web/dist/vendor/react-native/Utilities/useMergeRefs.js
import { useCallback as useCallback3 } from "react";
function useMergeRefs2() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return useCallback3(
    (current) => {
      for (var _i = 0, _refs = refs; _i < _refs.length; _i++) {
        var ref = _refs[_i];
        if (ref != null) {
          if (typeof ref === "function") {
            ref(current);
          } else {
            ref.current = current;
          }
        }
      }
    },
    [...refs]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
}
__name(useMergeRefs2, "useMergeRefs");

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/createAnimatedComponent.js
import * as React18 from "react";
var _excluded9 = ["style"];
function createAnimatedComponent(Component2) {
  return /* @__PURE__ */ React18.forwardRef((props, forwardedRef) => {
    var _useAnimatedProps = useAnimatedProps(props), reducedProps = _useAnimatedProps[0], callbackRef = _useAnimatedProps[1];
    var ref = useMergeRefs2(callbackRef, forwardedRef);
    var passthroughAnimatedPropExplicitValues = reducedProps.passthroughAnimatedPropExplicitValues, style = reducedProps.style;
    var _ref = passthroughAnimatedPropExplicitValues !== null && passthroughAnimatedPropExplicitValues !== void 0 ? passthroughAnimatedPropExplicitValues : {}, passthroughStyle = _ref.style, passthroughProps = (0, import_objectWithoutPropertiesLoose9.default)(_ref, _excluded9);
    var mergedStyle = [style, passthroughStyle];
    return /* @__PURE__ */ React18.createElement(Component2, (0, import_extends6.default)({}, reducedProps, passthroughProps, {
      style: mergedStyle,
      ref
    }));
  });
}
__name(createAnimatedComponent, "createAnimatedComponent");

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedFlatList.js
var FlatListWithEventThrottle = /* @__PURE__ */ React19.forwardRef((props, ref) => /* @__PURE__ */ React19.createElement(FlatList_default2, (0, import_extends7.default)({
  scrollEventThrottle: 1e-4
}, props, {
  ref
})));
var AnimatedFlatList_default = createAnimatedComponent(FlatListWithEventThrottle);

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage.js
import * as React21 from "react";

// ../../node_modules/react-native-web/dist/exports/Image/index.js
var import_objectSpread217 = __toESM(require_objectSpread2());
var import_extends8 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose10 = __toESM(require_objectWithoutPropertiesLoose());
import * as React20 from "react";

// ../../node_modules/react-native-web/dist/modules/AssetRegistry/index.js
var assets = [];
function getAssetByID(assetId) {
  return assets[assetId - 1];
}
__name(getAssetByID, "getAssetByID");

// ../../node_modules/react-native-web/dist/modules/ImageLoader/index.js
var dataUriPattern = /^data:/;
var ImageUriCache = class _ImageUriCache {
  static {
    __name(this, "ImageUriCache");
  }
  static has(uri) {
    var entries = _ImageUriCache._entries;
    var isDataUri = dataUriPattern.test(uri);
    return isDataUri || Boolean(entries[uri]);
  }
  static add(uri) {
    var entries = _ImageUriCache._entries;
    var lastUsedTimestamp = Date.now();
    if (entries[uri]) {
      entries[uri].lastUsedTimestamp = lastUsedTimestamp;
      entries[uri].refCount += 1;
    } else {
      entries[uri] = {
        lastUsedTimestamp,
        refCount: 1
      };
    }
  }
  static remove(uri) {
    var entries = _ImageUriCache._entries;
    if (entries[uri]) {
      entries[uri].refCount -= 1;
    }
    _ImageUriCache._cleanUpIfNeeded();
  }
  static _cleanUpIfNeeded() {
    var entries = _ImageUriCache._entries;
    var imageUris = Object.keys(entries);
    if (imageUris.length + 1 > _ImageUriCache._maximumEntries) {
      var leastRecentlyUsedKey;
      var leastRecentlyUsedEntry;
      imageUris.forEach((uri) => {
        var entry = entries[uri];
        if ((!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0) {
          leastRecentlyUsedKey = uri;
          leastRecentlyUsedEntry = entry;
        }
      });
      if (leastRecentlyUsedKey) {
        delete entries[leastRecentlyUsedKey];
      }
    }
  }
};
ImageUriCache._maximumEntries = 256;
ImageUriCache._entries = {};
var id = 0;
var requests = {};
var ImageLoader = {
  abort(requestId) {
    var image = requests["" + requestId];
    if (image) {
      image.onerror = null;
      image.onload = null;
      image = null;
      delete requests["" + requestId];
    }
  },
  getSize(uri, success, failure) {
    var complete = false;
    var interval = setInterval(callback, 16);
    var requestId = ImageLoader.load(uri, callback, errorCallback);
    function callback() {
      var image = requests["" + requestId];
      if (image) {
        var naturalHeight = image.naturalHeight, naturalWidth = image.naturalWidth;
        if (naturalHeight && naturalWidth) {
          success(naturalWidth, naturalHeight);
          complete = true;
        }
      }
      if (complete) {
        ImageLoader.abort(requestId);
        clearInterval(interval);
      }
    }
    __name(callback, "callback");
    function errorCallback() {
      if (typeof failure === "function") {
        failure();
      }
      ImageLoader.abort(requestId);
      clearInterval(interval);
    }
    __name(errorCallback, "errorCallback");
  },
  has(uri) {
    return ImageUriCache.has(uri);
  },
  load(uri, onLoad, onError) {
    id += 1;
    var image = new window.Image();
    image.onerror = onError;
    image.onload = (e) => {
      var onDecode = /* @__PURE__ */ __name(() => onLoad({
        nativeEvent: e
      }), "onDecode");
      if (typeof image.decode === "function") {
        image.decode().then(onDecode, onDecode);
      } else {
        setTimeout(onDecode, 0);
      }
    };
    image.src = uri;
    requests["" + id] = image;
    return id;
  },
  prefetch(uri) {
    return new Promise((resolve, reject) => {
      ImageLoader.load(uri, () => {
        ImageUriCache.add(uri);
        ImageUriCache.remove(uri);
        resolve();
      }, reject);
    });
  },
  queryCache(uris) {
    var result = {};
    uris.forEach((u) => {
      if (ImageUriCache.has(u)) {
        result[u] = "disk/memory";
      }
    });
    return Promise.resolve(result);
  }
};
var ImageLoader_default = ImageLoader;

// ../../node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = class _PixelRatio {
  static {
    __name(this, "PixelRatio");
  }
  /**
   * Returns the device pixel density.
   */
  static get() {
    return Dimensions.get("window").scale;
  }
  /**
   * No equivalent for Web
   */
  static getFontScale() {
    return Dimensions.get("window").fontScale || _PixelRatio.get();
  }
  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  static getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * _PixelRatio.get());
  }
  /**
   * Rounds a layout size (dp) to the nearest layout size that corresponds to
   * an integer number of pixels. For example, on a device with a PixelRatio
   * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
   * exactly (8.33 * 3) = 25 pixels.
   */
  static roundToNearestPixel(layoutSize) {
    var ratio = _PixelRatio.get();
    return Math.round(layoutSize * ratio) / ratio;
  }
};

// ../../node_modules/react-native-web/dist/exports/Image/index.js
var _excluded10 = ["aria-label", "accessibilityLabel", "blurRadius", "defaultSource", "draggable", "onError", "onLayout", "onLoad", "onLoadEnd", "onLoadStart", "pointerEvents", "source", "style"];
var ERRORED = "ERRORED";
var LOADED = "LOADED";
var LOADING = "LOADING";
var IDLE = "IDLE";
var _filterId = 0;
var svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;
function createTintColorSVG(tintColor, id2) {
  return tintColor && id2 != null ? /* @__PURE__ */ React20.createElement("svg", {
    style: {
      position: "absolute",
      height: 0,
      visibility: "hidden",
      width: 0
    }
  }, /* @__PURE__ */ React20.createElement("defs", null, /* @__PURE__ */ React20.createElement("filter", {
    id: "tint-" + id2,
    suppressHydrationWarning: true
  }, /* @__PURE__ */ React20.createElement("feFlood", {
    floodColor: "" + tintColor,
    key: tintColor
  }), /* @__PURE__ */ React20.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in"
  })))) : null;
}
__name(createTintColorSVG, "createTintColorSVG");
function extractNonStandardStyleProps(style, blurRadius, filterId, tintColorProp) {
  var flatStyle = StyleSheet_default.flatten(style);
  var filter = flatStyle.filter, resizeMode = flatStyle.resizeMode, shadowOffset = flatStyle.shadowOffset, tintColor = flatStyle.tintColor;
  if (flatStyle.resizeMode) {
    warnOnce("Image.style.resizeMode", "Image: style.resizeMode is deprecated. Please use props.resizeMode.");
  }
  if (flatStyle.tintColor) {
    warnOnce("Image.style.tintColor", "Image: style.tintColor is deprecated. Please use props.tintColor.");
  }
  var filters = [];
  var _filter = null;
  if (filter) {
    filters.push(filter);
  }
  if (blurRadius) {
    filters.push("blur(" + blurRadius + "px)");
  }
  if (shadowOffset) {
    var shadowString = createBoxShadowValue(flatStyle);
    if (shadowString) {
      filters.push("drop-shadow(" + shadowString + ")");
    }
  }
  if ((tintColorProp || tintColor) && filterId != null) {
    filters.push("url(#tint-" + filterId + ")");
  }
  if (filters.length > 0) {
    _filter = filters.join(" ");
  }
  return [resizeMode, _filter, tintColor];
}
__name(extractNonStandardStyleProps, "extractNonStandardStyleProps");
function resolveAssetDimensions(source) {
  if (typeof source === "number") {
    var _getAssetByID = getAssetByID(source), _height = _getAssetByID.height, _width = _getAssetByID.width;
    return {
      height: _height,
      width: _width
    };
  } else if (source != null && !Array.isArray(source) && typeof source === "object") {
    var _height2 = source.height, _width2 = source.width;
    return {
      height: _height2,
      width: _width2
    };
  }
}
__name(resolveAssetDimensions, "resolveAssetDimensions");
function resolveAssetUri(source) {
  var uri = null;
  if (typeof source === "number") {
    var asset = getAssetByID(source);
    if (asset == null) {
      throw new Error('Image: asset with ID "' + source + '" could not be found. Please check the image source or packager.');
    }
    var scale = asset.scales[0];
    if (asset.scales.length > 1) {
      var preferredScale = PixelRatio.get();
      scale = asset.scales.reduce((prev, curr) => Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev);
    }
    var scaleSuffix = scale !== 1 ? "@" + scale + "x" : "";
    uri = asset ? asset.httpServerLocation + "/" + asset.name + scaleSuffix + "." + asset.type : "";
  } else if (typeof source === "string") {
    uri = source;
  } else if (source && typeof source.uri === "string") {
    uri = source.uri;
  }
  if (uri) {
    var match = uri.match(svgDataUriPattern);
    if (match) {
      var prefix = match[1], svg = match[2];
      var encodedSvg = encodeURIComponent(svg);
      return "" + prefix + encodedSvg;
    }
  }
  return uri;
}
__name(resolveAssetUri, "resolveAssetUri");
var Image = /* @__PURE__ */ React20.forwardRef((props, ref) => {
  var _ariaLabel = props["aria-label"], accessibilityLabel = props.accessibilityLabel, blurRadius = props.blurRadius, defaultSource = props.defaultSource, draggable = props.draggable, onError = props.onError, onLayout = props.onLayout, onLoad = props.onLoad, onLoadEnd = props.onLoadEnd, onLoadStart = props.onLoadStart, pointerEvents = props.pointerEvents, source = props.source, style = props.style, rest = (0, import_objectWithoutPropertiesLoose10.default)(props, _excluded10);
  var ariaLabel = _ariaLabel || accessibilityLabel;
  if (process.env.NODE_ENV !== "production") {
    if (props.children) {
      throw new Error("The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.");
    }
  }
  var _React$useState = React20.useState(() => {
    var uri2 = resolveAssetUri(source);
    if (uri2 != null) {
      var isLoaded = ImageLoader_default.has(uri2);
      if (isLoaded) {
        return LOADED;
      }
    }
    return IDLE;
  }), state = _React$useState[0], updateState = _React$useState[1];
  var _React$useState2 = React20.useState({}), layout = _React$useState2[0], updateLayout = _React$useState2[1];
  var hasTextAncestor = React20.useContext(TextAncestorContext_default);
  var hiddenImageRef = React20.useRef(null);
  var filterRef = React20.useRef(_filterId++);
  var requestRef = React20.useRef(null);
  var shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;
  var _extractNonStandardSt = extractNonStandardStyleProps(style, blurRadius, filterRef.current, props.tintColor), _resizeMode = _extractNonStandardSt[0], filter = _extractNonStandardSt[1], _tintColor = _extractNonStandardSt[2];
  var resizeMode = props.resizeMode || _resizeMode || "cover";
  var tintColor = props.tintColor || _tintColor;
  var selectedSource = shouldDisplaySource ? source : defaultSource;
  var displayImageUri = resolveAssetUri(selectedSource);
  var imageSizeStyle = resolveAssetDimensions(selectedSource);
  var backgroundImage = displayImageUri ? 'url("' + displayImageUri + '")' : null;
  var backgroundSize = getBackgroundSize();
  var hiddenImage = displayImageUri ? createElement_default("img", {
    alt: ariaLabel || "",
    style: styles7.accessibilityImage$raw,
    draggable: draggable || false,
    ref: hiddenImageRef,
    src: displayImageUri
  }) : null;
  function getBackgroundSize() {
    if (hiddenImageRef.current != null && (resizeMode === "center" || resizeMode === "repeat")) {
      var _hiddenImageRef$curre = hiddenImageRef.current, naturalHeight = _hiddenImageRef$curre.naturalHeight, naturalWidth = _hiddenImageRef$curre.naturalWidth;
      var _height3 = layout.height, _width3 = layout.width;
      if (naturalHeight && naturalWidth && _height3 && _width3) {
        var scaleFactor = Math.min(1, _width3 / naturalWidth, _height3 / naturalHeight);
        var x = Math.ceil(scaleFactor * naturalWidth);
        var y = Math.ceil(scaleFactor * naturalHeight);
        return x + "px " + y + "px";
      }
    }
  }
  __name(getBackgroundSize, "getBackgroundSize");
  function handleLayout(e) {
    if (resizeMode === "center" || resizeMode === "repeat" || onLayout) {
      var _layout = e.nativeEvent.layout;
      onLayout && onLayout(e);
      updateLayout(_layout);
    }
  }
  __name(handleLayout, "handleLayout");
  var uri = resolveAssetUri(source);
  React20.useEffect(() => {
    abortPendingRequest();
    if (uri != null) {
      updateState(LOADING);
      if (onLoadStart) {
        onLoadStart();
      }
      requestRef.current = ImageLoader_default.load(uri, /* @__PURE__ */ __name(function load(e) {
        updateState(LOADED);
        if (onLoad) {
          onLoad(e);
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      }, "load"), /* @__PURE__ */ __name(function error2() {
        updateState(ERRORED);
        if (onError) {
          onError({
            nativeEvent: {
              error: "Failed to load resource " + uri
            }
          });
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      }, "error"));
    }
    function abortPendingRequest() {
      if (requestRef.current != null) {
        ImageLoader_default.abort(requestRef.current);
        requestRef.current = null;
      }
    }
    __name(abortPendingRequest, "abortPendingRequest");
    return abortPendingRequest;
  }, [uri, requestRef, updateState, onError, onLoad, onLoadEnd, onLoadStart]);
  return /* @__PURE__ */ React20.createElement(View_default, (0, import_extends8.default)({}, rest, {
    "aria-label": ariaLabel,
    onLayout: handleLayout,
    pointerEvents,
    ref,
    style: [
      styles7.root,
      hasTextAncestor && styles7.inline,
      imageSizeStyle,
      style,
      styles7.undo,
      // TEMP: avoid deprecated shadow props regression
      // until Image refactored to use createElement.
      {
        boxShadow: null
      }
    ]
  }), /* @__PURE__ */ React20.createElement(View_default, {
    style: [styles7.image, resizeModeStyles[resizeMode], {
      backgroundImage,
      filter
    }, backgroundSize != null && {
      backgroundSize
    }],
    suppressHydrationWarning: true
  }), hiddenImage, createTintColorSVG(tintColor, filterRef.current));
});
Image.displayName = "Image";
var ImageWithStatics = Image;
ImageWithStatics.getSize = function(uri, success, failure) {
  ImageLoader_default.getSize(uri, success, failure);
};
ImageWithStatics.prefetch = function(uri) {
  return ImageLoader_default.prefetch(uri);
};
ImageWithStatics.queryCache = function(uris) {
  return ImageLoader_default.queryCache(uris);
};
var styles7 = StyleSheet_default.create({
  root: {
    flexBasis: "auto",
    overflow: "hidden",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  },
  undo: {
    // These styles are converted to CSS filters applied to the
    // element displaying the background image.
    blurRadius: null,
    shadowColor: null,
    shadowOpacity: null,
    shadowOffset: null,
    shadowRadius: null,
    tintColor: null,
    // These styles are not supported
    overlayColor: null,
    resizeMode: null
  },
  image: (0, import_objectSpread217.default)((0, import_objectSpread217.default)({}, StyleSheet_default.absoluteFillObject), {}, {
    backgroundColor: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    zIndex: -1
  }),
  accessibilityImage$raw: (0, import_objectSpread217.default)((0, import_objectSpread217.default)({}, StyleSheet_default.absoluteFillObject), {}, {
    height: "100%",
    opacity: 0,
    width: "100%",
    zIndex: -1
  })
});
var resizeModeStyles = StyleSheet_default.create({
  center: {
    backgroundSize: "auto"
  },
  contain: {
    backgroundSize: "contain"
  },
  cover: {
    backgroundSize: "cover"
  },
  none: {
    backgroundPosition: "0",
    backgroundSize: "auto"
  },
  repeat: {
    backgroundPosition: "0",
    backgroundRepeat: "repeat",
    backgroundSize: "auto"
  },
  stretch: {
    backgroundSize: "100% 100%"
  }
});
var Image_default = ImageWithStatics;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage.js
var AnimatedImage_default = createAnimatedComponent(Image_default);

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedScrollView.js
var import_extends9 = __toESM(require_extends());
import * as React22 from "react";
var ScrollViewWithEventThrottle = /* @__PURE__ */ React22.forwardRef((props, ref) => /* @__PURE__ */ React22.createElement(ScrollView_default, (0, import_extends9.default)({
  scrollEventThrottle: 1e-4
}, props, {
  ref
})));
var AnimatedScrollView_default = createAnimatedComponent(ScrollViewWithEventThrottle);

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedSectionList.js
var import_extends12 = __toESM(require_extends());
import * as React25 from "react";

// ../../node_modules/react-native-web/dist/vendor/react-native/SectionList/index.js
var import_extends11 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose12 = __toESM(require_objectWithoutPropertiesLoose());
import * as React24 from "react";

// ../../node_modules/react-native-web/dist/vendor/react-native/VirtualizedSectionList/index.js
var import_extends10 = __toESM(require_extends());
var import_createForOfIteratorHelperLoose5 = __toESM(require_createForOfIteratorHelperLoose());
var import_objectWithoutPropertiesLoose11 = __toESM(require_objectWithoutPropertiesLoose());
var import_objectSpread218 = __toESM(require_objectSpread2());
var import_invariant19 = __toESM(require_invariant());
import * as React23 from "react";
var _excluded11 = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
var VirtualizedSectionList = class extends React23.PureComponent {
  static {
    __name(this, "VirtualizedSectionList");
  }
  constructor() {
    super(...arguments);
    this._keyExtractor = (item, index) => {
      var info = this._subExtractor(index);
      return info && info.key || String(index);
    };
    this._convertViewable = (viewable) => {
      var _info$index;
      (0, import_invariant19.default)(viewable.index != null, "Received a broken ViewToken");
      var info = this._subExtractor(viewable.index);
      if (!info) {
        return null;
      }
      var keyExtractorWithNullableIndex = info.section.keyExtractor;
      var keyExtractorWithNonNullableIndex = this.props.keyExtractor || keyExtractor;
      var key = keyExtractorWithNullableIndex != null ? keyExtractorWithNullableIndex(viewable.item, info.index) : keyExtractorWithNonNullableIndex(viewable.item, (_info$index = info.index) !== null && _info$index !== void 0 ? _info$index : 0);
      return (0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, viewable), {}, {
        index: info.index,
        key,
        section: info.section
      });
    };
    this._onViewableItemsChanged = (_ref) => {
      var viewableItems = _ref.viewableItems, changed = _ref.changed;
      var onViewableItemsChanged = this.props.onViewableItemsChanged;
      if (onViewableItemsChanged != null) {
        onViewableItemsChanged({
          viewableItems: viewableItems.map(this._convertViewable, this).filter(Boolean),
          changed: changed.map(this._convertViewable, this).filter(Boolean)
        });
      }
    };
    this._renderItem = (listItemCount) => (
      // eslint-disable-next-line react/no-unstable-nested-components
      (_ref2) => {
        var item = _ref2.item, index = _ref2.index;
        var info = this._subExtractor(index);
        if (!info) {
          return null;
        }
        var infoIndex = info.index;
        if (infoIndex == null) {
          var section = info.section;
          if (info.header === true) {
            var renderSectionHeader = this.props.renderSectionHeader;
            return renderSectionHeader ? renderSectionHeader({
              section
            }) : null;
          } else {
            var renderSectionFooter = this.props.renderSectionFooter;
            return renderSectionFooter ? renderSectionFooter({
              section
            }) : null;
          }
        } else {
          var renderItem = info.section.renderItem || this.props.renderItem;
          var SeparatorComponent = this._getSeparatorComponent(index, info, listItemCount);
          (0, import_invariant19.default)(renderItem, "no renderItem!");
          return /* @__PURE__ */ React23.createElement(ItemWithSeparator, {
            SeparatorComponent,
            LeadingSeparatorComponent: infoIndex === 0 ? this.props.SectionSeparatorComponent : void 0,
            cellKey: info.key,
            index: infoIndex,
            item,
            leadingItem: info.leadingItem,
            leadingSection: info.leadingSection,
            prevCellKey: (this._subExtractor(index - 1) || {}).key,
            setSelfHighlightCallback: this._setUpdateHighlightFor,
            setSelfUpdatePropsCallback: this._setUpdatePropsFor,
            updateHighlightFor: this._updateHighlightFor,
            updatePropsFor: this._updatePropsFor,
            renderItem,
            section: info.section,
            trailingItem: info.trailingItem,
            trailingSection: info.trailingSection,
            inverted: !!this.props.inverted
          });
        }
      }
    );
    this._updatePropsFor = (cellKey, value) => {
      var updateProps = this._updatePropsMap[cellKey];
      if (updateProps != null) {
        updateProps(value);
      }
    };
    this._updateHighlightFor = (cellKey, value) => {
      var updateHighlight = this._updateHighlightMap[cellKey];
      if (updateHighlight != null) {
        updateHighlight(value);
      }
    };
    this._setUpdateHighlightFor = (cellKey, updateHighlightFn) => {
      if (updateHighlightFn != null) {
        this._updateHighlightMap[cellKey] = updateHighlightFn;
      } else {
        delete this._updateHighlightFor[cellKey];
      }
    };
    this._setUpdatePropsFor = (cellKey, updatePropsFn) => {
      if (updatePropsFn != null) {
        this._updatePropsMap[cellKey] = updatePropsFn;
      } else {
        delete this._updatePropsMap[cellKey];
      }
    };
    this._updateHighlightMap = {};
    this._updatePropsMap = {};
    this._captureRef = (ref) => {
      this._listRef = ref;
    };
  }
  scrollToLocation(params) {
    var index = params.itemIndex;
    for (var i = 0; i < params.sectionIndex; i++) {
      index += this.props.getItemCount(this.props.sections[i].data) + 2;
    }
    var viewOffset = params.viewOffset || 0;
    if (this._listRef == null) {
      return;
    }
    if (params.itemIndex > 0 && this.props.stickySectionHeadersEnabled) {
      var frame = this._listRef.__getFrameMetricsApprox(index - params.itemIndex, this._listRef.props);
      viewOffset += frame.length;
    }
    var toIndexParams = (0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, params), {}, {
      viewOffset,
      index
    });
    this._listRef.scrollToIndex(toIndexParams);
  }
  getListRef() {
    return this._listRef;
  }
  render() {
    var _this$props = this.props, ItemSeparatorComponent = _this$props.ItemSeparatorComponent, SectionSeparatorComponent = _this$props.SectionSeparatorComponent, _renderItem = _this$props.renderItem, renderSectionFooter = _this$props.renderSectionFooter, renderSectionHeader = _this$props.renderSectionHeader, _sections = _this$props.sections, stickySectionHeadersEnabled = _this$props.stickySectionHeadersEnabled, passThroughProps = (0, import_objectWithoutPropertiesLoose11.default)(_this$props, _excluded11);
    var listHeaderOffset = this.props.ListHeaderComponent ? 1 : 0;
    var stickyHeaderIndices = this.props.stickySectionHeadersEnabled ? [] : void 0;
    var itemCount = 0;
    for (var _iterator = (0, import_createForOfIteratorHelperLoose5.default)(this.props.sections), _step; !(_step = _iterator()).done; ) {
      var section = _step.value;
      if (stickyHeaderIndices != null) {
        stickyHeaderIndices.push(itemCount + listHeaderOffset);
      }
      itemCount += 2;
      itemCount += this.props.getItemCount(section.data);
    }
    var renderItem = this._renderItem(itemCount);
    return /* @__PURE__ */ React23.createElement(VirtualizedList_default, (0, import_extends10.default)({}, passThroughProps, {
      keyExtractor: this._keyExtractor,
      stickyHeaderIndices,
      renderItem,
      data: this.props.sections,
      getItem: /* @__PURE__ */ __name((sections, index) => this._getItem(this.props, sections, index), "getItem"),
      getItemCount: /* @__PURE__ */ __name(() => itemCount, "getItemCount"),
      onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0,
      ref: this._captureRef
    }));
  }
  _getItem(props, sections, index) {
    if (!sections) {
      return null;
    }
    var itemIdx = index - 1;
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionData = section.data;
      var itemCount = props.getItemCount(sectionData);
      if (itemIdx === -1 || itemIdx === itemCount) {
        return section;
      } else if (itemIdx < itemCount) {
        return props.getItem(sectionData, itemIdx);
      } else {
        itemIdx -= itemCount + 2;
      }
    }
    return null;
  }
  // $FlowFixMe[missing-local-annot]
  _subExtractor(index) {
    var itemIndex = index;
    var _this$props2 = this.props, getItem = _this$props2.getItem, getItemCount = _this$props2.getItemCount, keyExtractor2 = _this$props2.keyExtractor, sections = _this$props2.sections;
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionData = section.data;
      var key = section.key || String(i);
      itemIndex -= 1;
      if (itemIndex >= getItemCount(sectionData) + 1) {
        itemIndex -= getItemCount(sectionData) + 1;
      } else if (itemIndex === -1) {
        return {
          section,
          key: key + ":header",
          index: null,
          header: true,
          trailingSection: sections[i + 1]
        };
      } else if (itemIndex === getItemCount(sectionData)) {
        return {
          section,
          key: key + ":footer",
          index: null,
          header: false,
          trailingSection: sections[i + 1]
        };
      } else {
        var extractor = section.keyExtractor || keyExtractor2 || keyExtractor;
        return {
          section,
          key: key + ":" + extractor(getItem(sectionData, itemIndex), itemIndex),
          index: itemIndex,
          leadingItem: getItem(sectionData, itemIndex - 1),
          leadingSection: sections[i - 1],
          trailingItem: getItem(sectionData, itemIndex + 1),
          trailingSection: sections[i + 1]
        };
      }
    }
  }
  _getSeparatorComponent(index, info, listItemCount) {
    info = info || this._subExtractor(index);
    if (!info) {
      return null;
    }
    var ItemSeparatorComponent = info.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent;
    var SectionSeparatorComponent = this.props.SectionSeparatorComponent;
    var isLastItemInList = index === listItemCount - 1;
    var isLastItemInSection = info.index === this.props.getItemCount(info.section.data) - 1;
    if (SectionSeparatorComponent && isLastItemInSection) {
      return SectionSeparatorComponent;
    }
    if (ItemSeparatorComponent && !isLastItemInSection && !isLastItemInList) {
      return ItemSeparatorComponent;
    }
    return null;
  }
};
function ItemWithSeparator(props) {
  var LeadingSeparatorComponent = props.LeadingSeparatorComponent, SeparatorComponent = props.SeparatorComponent, cellKey = props.cellKey, prevCellKey = props.prevCellKey, setSelfHighlightCallback = props.setSelfHighlightCallback, updateHighlightFor = props.updateHighlightFor, setSelfUpdatePropsCallback = props.setSelfUpdatePropsCallback, updatePropsFor = props.updatePropsFor, item = props.item, index = props.index, section = props.section, inverted = props.inverted;
  var _React$useState = React23.useState(false), leadingSeparatorHiglighted = _React$useState[0], setLeadingSeparatorHighlighted = _React$useState[1];
  var _React$useState2 = React23.useState(false), separatorHighlighted = _React$useState2[0], setSeparatorHighlighted = _React$useState2[1];
  var _React$useState3 = React23.useState({
    leadingItem: props.leadingItem,
    leadingSection: props.leadingSection,
    section: props.section,
    trailingItem: props.item,
    trailingSection: props.trailingSection
  }), leadingSeparatorProps = _React$useState3[0], setLeadingSeparatorProps = _React$useState3[1];
  var _React$useState4 = React23.useState({
    leadingItem: props.item,
    leadingSection: props.leadingSection,
    section: props.section,
    trailingItem: props.trailingItem,
    trailingSection: props.trailingSection
  }), separatorProps = _React$useState4[0], setSeparatorProps = _React$useState4[1];
  React23.useEffect(() => {
    setSelfHighlightCallback(cellKey, setSeparatorHighlighted);
    setSelfUpdatePropsCallback(cellKey, setSeparatorProps);
    return () => {
      setSelfUpdatePropsCallback(cellKey, null);
      setSelfHighlightCallback(cellKey, null);
    };
  }, [cellKey, setSelfHighlightCallback, setSeparatorProps, setSelfUpdatePropsCallback]);
  var separators = {
    highlight: /* @__PURE__ */ __name(() => {
      setLeadingSeparatorHighlighted(true);
      setSeparatorHighlighted(true);
      if (prevCellKey != null) {
        updateHighlightFor(prevCellKey, true);
      }
    }, "highlight"),
    unhighlight: /* @__PURE__ */ __name(() => {
      setLeadingSeparatorHighlighted(false);
      setSeparatorHighlighted(false);
      if (prevCellKey != null) {
        updateHighlightFor(prevCellKey, false);
      }
    }, "unhighlight"),
    updateProps: /* @__PURE__ */ __name((select, newProps) => {
      if (select === "leading") {
        if (LeadingSeparatorComponent != null) {
          setLeadingSeparatorProps((0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, leadingSeparatorProps), newProps));
        } else if (prevCellKey != null) {
          updatePropsFor(prevCellKey, (0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, leadingSeparatorProps), newProps));
        }
      } else if (select === "trailing" && SeparatorComponent != null) {
        setSeparatorProps((0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, separatorProps), newProps));
      }
    }, "updateProps")
  };
  var element = props.renderItem({
    item,
    index,
    section,
    separators
  });
  var leadingSeparator = LeadingSeparatorComponent != null && /* @__PURE__ */ React23.createElement(LeadingSeparatorComponent, (0, import_extends10.default)({
    highlighted: leadingSeparatorHiglighted
  }, leadingSeparatorProps));
  var separator = SeparatorComponent != null && /* @__PURE__ */ React23.createElement(SeparatorComponent, (0, import_extends10.default)({
    highlighted: separatorHighlighted
  }, separatorProps));
  return leadingSeparator || separator ? /* @__PURE__ */ React23.createElement(View_default, null, inverted === false ? leadingSeparator : separator, element, inverted === false ? separator : leadingSeparator) : element;
}
__name(ItemWithSeparator, "ItemWithSeparator");
var VirtualizedSectionList_default = VirtualizedSectionList;

// ../../node_modules/react-native-web/dist/vendor/react-native/SectionList/index.js
var _excluded12 = ["stickySectionHeadersEnabled"];
var SectionList = class extends React24.PureComponent {
  static {
    __name(this, "SectionList");
  }
  constructor() {
    super(...arguments);
    this._captureRef = (ref) => {
      this._wrapperListRef = ref;
    };
  }
  /**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToLocation(params) {
    if (this._wrapperListRef != null) {
      this._wrapperListRef.scrollToLocation(params);
    }
  }
  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    listRef && listRef.recordInteraction();
  }
  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    listRef && listRef.flashScrollIndicators();
  }
  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      return listRef.getScrollResponder();
    }
  }
  getScrollableNode() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      return listRef.getScrollableNode();
    }
  }
  render() {
    var _this$props = this.props, _stickySectionHeadersEnabled = _this$props.stickySectionHeadersEnabled, restProps = (0, import_objectWithoutPropertiesLoose12.default)(_this$props, _excluded12);
    var stickySectionHeadersEnabled = _stickySectionHeadersEnabled !== null && _stickySectionHeadersEnabled !== void 0 ? _stickySectionHeadersEnabled : Platform_default.OS === "ios";
    return /* @__PURE__ */ React24.createElement(VirtualizedSectionList_default, (0, import_extends11.default)({}, restProps, {
      stickySectionHeadersEnabled,
      ref: this._captureRef,
      getItemCount: /* @__PURE__ */ __name((items) => items.length, "getItemCount"),
      getItem: /* @__PURE__ */ __name((items, index) => items[index], "getItem")
    }));
  }
};

// ../../node_modules/react-native-web/dist/exports/SectionList/index.js
var SectionList_default = SectionList;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedSectionList.js
var SectionListWithEventThrottle = /* @__PURE__ */ React25.forwardRef((props, ref) => /* @__PURE__ */ React25.createElement(SectionList_default, (0, import_extends12.default)({
  scrollEventThrottle: 1e-4
}, props, {
  ref
})));
var AnimatedSectionList_default = createAnimatedComponent(SectionListWithEventThrottle);

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedText.js
import * as React27 from "react";

// ../../node_modules/react-native-web/dist/exports/Text/index.js
var import_objectSpread219 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose13 = __toESM(require_objectWithoutPropertiesLoose());
import * as React26 from "react";
var _excluded13 = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"];
var forwardPropsList2 = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  pointerEvents: true
});
var pickProps2 = /* @__PURE__ */ __name((props) => pick(props, forwardPropsList2), "pickProps");
var Text = /* @__PURE__ */ React26.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs, numberOfLines = props.numberOfLines, onClick = props.onClick, onLayout = props.onLayout, onPress = props.onPress, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, selectable = props.selectable, rest = (0, import_objectWithoutPropertiesLoose13.default)(props, _excluded13);
  var hasTextAncestor = React26.useContext(TextAncestorContext_default);
  var hostRef = React26.useRef(null);
  var _useLocaleContext = useLocaleContext(), contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var handleClick = React26.useCallback((e) => {
    if (onClick != null) {
      onClick(e);
    } else if (onPress != null) {
      e.stopPropagation();
      onPress(e);
    }
  }, [onClick, onPress]);
  var component = hasTextAncestor ? "span" : "div";
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps2(rest);
  supportedProps.dir = componentDirection;
  if (!hasTextAncestor) {
    supportedProps.dir = componentDirection != null ? componentDirection : "auto";
  }
  if (onClick || onPress) {
    supportedProps.onClick = handleClick;
  }
  supportedProps.style = [numberOfLines != null && numberOfLines > 1 && {
    WebkitLineClamp: numberOfLines
  }, hasTextAncestor === true ? styles8.textHasAncestor$raw : styles8.text$raw, numberOfLines === 1 && styles8.textOneLine, numberOfLines != null && numberOfLines > 1 && styles8.textMultiLine, props.style, selectable === true && styles8.selectable, selectable === false && styles8.notSelectable, onPress && styles8.pressable];
  if (props.href != null) {
    component = "a";
    if (hrefAttrs != null) {
      var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === "string") {
        supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  var element = createElement_default(component, supportedProps, {
    writingDirection
  });
  return hasTextAncestor ? element : /* @__PURE__ */ React26.createElement(TextAncestorContext_default.Provider, {
    value: true
  }, element);
});
Text.displayName = "Text";
var textStyle = {
  backgroundColor: "transparent",
  border: "0 solid black",
  boxSizing: "border-box",
  color: "black",
  display: "inline",
  font: "14px System",
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  textAlign: "start",
  textDecoration: "none",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word"
};
var styles8 = StyleSheet_default.create({
  text$raw: textStyle,
  textHasAncestor$raw: (0, import_objectSpread219.default)((0, import_objectSpread219.default)({}, textStyle), {}, {
    color: "inherit",
    font: "inherit",
    textAlign: "inherit",
    whiteSpace: "inherit"
  }),
  textOneLine: {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  },
  // See #13
  textMultiLine: {
    display: "-webkit-box",
    maxWidth: "100%",
    overflow: "clip",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical"
  },
  notSelectable: {
    userSelect: "none"
  },
  selectable: {
    userSelect: "text"
  },
  pressable: {
    cursor: "pointer"
  }
});
var Text_default = Text;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedText.js
var AnimatedText_default = createAnimatedComponent(Text_default);

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedView.js
import * as React28 from "react";
var AnimatedView_default = createAnimatedComponent(View_default);

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedMock.js
var import_objectSpread222 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedImplementation.js
var import_objectSpread221 = __toESM(require_objectSpread2());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedAddition.js
var AnimatedAddition = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedAddition");
  }
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() + this._b.__getValue();
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "addition",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedAddition_default = AnimatedAddition;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDiffClamp.js
var AnimatedDiffClamp = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedDiffClamp");
  }
  constructor(a, min, max) {
    super();
    this._a = a;
    this._min = min;
    this._max = max;
    this._value = this._lastValue = this._a.__getValue();
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __getValue() {
    var value = this._a.__getValue();
    var diff = value - this._lastValue;
    this._lastValue = value;
    this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
    return this._value;
  }
  __attach() {
    this._a.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "diffclamp",
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max
    };
  }
};
var AnimatedDiffClamp_default = AnimatedDiffClamp;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDivision.js
var AnimatedDivision = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedDivision");
  }
  constructor(a, b) {
    super();
    this._warnedAboutDivideByZero = false;
    if (b === 0 || b instanceof AnimatedNode_default && b.__getValue() === 0) {
      console.error("Detected potential division by zero in AnimatedDivision");
    }
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    var a = this._a.__getValue();
    var b = this._b.__getValue();
    if (b === 0) {
      if (!this._warnedAboutDivideByZero) {
        console.error("Detected division by zero in AnimatedDivision");
        this._warnedAboutDivideByZero = true;
      }
      return 0;
    }
    this._warnedAboutDivideByZero = false;
    return a / b;
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "division",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedDivision_default = AnimatedDivision;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedModulo.js
var AnimatedModulo = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedModulo");
  }
  constructor(a, modulus) {
    super();
    this._a = a;
    this._modulus = modulus;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "modulus",
      input: this._a.__getNativeTag(),
      modulus: this._modulus
    };
  }
};
var AnimatedModulo_default = AnimatedModulo;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedMultiplication.js
var AnimatedMultiplication = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedMultiplication");
  }
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() * this._b.__getValue();
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "multiplication",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedMultiplication_default = AnimatedMultiplication;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedSubtraction.js
var AnimatedSubtraction = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedSubtraction");
  }
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() - this._b.__getValue();
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "subtraction",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedSubtraction_default = AnimatedSubtraction;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTracking.js
var import_objectSpread220 = __toESM(require_objectSpread2());
var AnimatedTracking = class extends AnimatedNode_default {
  static {
    __name(this, "AnimatedTracking");
  }
  constructor(value, parent, animationClass, animationConfig, callback) {
    super();
    this._value = value;
    this._parent = parent;
    this._animationClass = animationClass;
    this._animationConfig = animationConfig;
    this._useNativeDriver = shouldUseNativeDriver(animationConfig);
    this._callback = callback;
    this.__attach();
  }
  __makeNative() {
    this.__isNative = true;
    this._parent.__makeNative();
    super.__makeNative();
    this._value.__makeNative();
  }
  __getValue() {
    return this._parent.__getValue();
  }
  __attach() {
    this._parent.__addChild(this);
    if (this._useNativeDriver) {
      this.__makeNative();
    }
  }
  __detach() {
    this._parent.__removeChild(this);
    super.__detach();
  }
  update() {
    this._value.animate(new this._animationClass((0, import_objectSpread220.default)((0, import_objectSpread220.default)({}, this._animationConfig), {}, {
      toValue: this._animationConfig.toValue.__getValue()
    })), this._callback);
  }
  __getNativeConfig() {
    var animation = new this._animationClass((0, import_objectSpread220.default)((0, import_objectSpread220.default)({}, this._animationConfig), {}, {
      // remove toValue from the config as it's a ref to Animated.Value
      toValue: void 0
    }));
    var animationConfig = animation.__getNativeAnimationConfig();
    return {
      type: "tracking",
      animationId: generateNewAnimationId(),
      animationConfig,
      toValue: this._parent.__getNativeTag(),
      value: this._value.__getNativeTag()
    };
  }
};
var AnimatedTracking_default = AnimatedTracking;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValueXY.js
var import_invariant20 = __toESM(require_invariant());
var _uniqueId2 = 1;
var AnimatedValueXY = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedValueXY");
  }
  constructor(valueIn) {
    super();
    var value = valueIn || {
      x: 0,
      y: 0
    };
    if (typeof value.x === "number" && typeof value.y === "number") {
      this.x = new AnimatedValue_default(value.x);
      this.y = new AnimatedValue_default(value.y);
    } else {
      (0, import_invariant20.default)(value.x instanceof AnimatedValue_default && value.y instanceof AnimatedValue_default, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
      this.x = value.x;
      this.y = value.y;
    }
    this._listeners = {};
  }
  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setvalue
   */
  setValue(value) {
    this.x.setValue(value.x);
    this.y.setValue(value.y);
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setoffset
   */
  setOffset(offset) {
    this.x.setOffset(offset.x);
    this.y.setOffset(offset.y);
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#flattenoffset
   */
  flattenOffset() {
    this.x.flattenOffset();
    this.y.flattenOffset();
  }
  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#extractoffset
   */
  extractOffset() {
    this.x.extractOffset();
    this.y.extractOffset();
  }
  __getValue() {
    return {
      x: this.x.__getValue(),
      y: this.y.__getValue()
    };
  }
  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#resetanimation
   */
  resetAnimation(callback) {
    this.x.resetAnimation();
    this.y.resetAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#stopanimation
   */
  stopAnimation(callback) {
    this.x.stopAnimation();
    this.y.stopAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#addlistener
   */
  addListener(callback) {
    var id2 = String(_uniqueId2++);
    var jointCallback = /* @__PURE__ */ __name((_ref) => {
      var number = _ref.value;
      callback(this.__getValue());
    }, "jointCallback");
    this._listeners[id2] = {
      x: this.x.addListener(jointCallback),
      y: this.y.addListener(jointCallback)
    };
    return id2;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removelistener
   */
  removeListener(id2) {
    this.x.removeListener(this._listeners[id2].x);
    this.y.removeListener(this._listeners[id2].y);
    delete this._listeners[id2];
  }
  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removealllisteners
   */
  removeAllListeners() {
    this.x.removeAllListeners();
    this.y.removeAllListeners();
    this._listeners = {};
  }
  /**
   * Converts `{x, y}` into `{left, top}` for use in style.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#getlayout
   */
  getLayout() {
    return {
      left: this.x,
      top: this.y
    };
  }
  /**
   * Converts `{x, y}` into a useable translation transform.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#gettranslatetransform
   */
  getTranslateTransform() {
    return [{
      translateX: this.x
    }, {
      translateY: this.y
    }];
  }
};
var AnimatedValueXY_default = AnimatedValueXY;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/animations/Animation.js
var startNativeAnimationNextId = 1;
var Animation = class {
  static {
    __name(this, "Animation");
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
  }
  stop() {
    if (this.__nativeId) {
      NativeAnimatedHelper_default.API.stopAnimation(this.__nativeId);
    }
  }
  __getNativeAnimationConfig() {
    throw new Error("This animation type cannot be offloaded to native");
  }
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result) {
    var onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  }
  __startNativeAnimation(animatedValue) {
    var startNativeAnimationWaitId = startNativeAnimationNextId + ":startAnimation";
    startNativeAnimationNextId += 1;
    NativeAnimatedHelper_default.API.setWaitingForIdentifier(startNativeAnimationWaitId);
    try {
      var config2 = this.__getNativeAnimationConfig();
      animatedValue.__makeNative(config2.platformConfig);
      this.__nativeId = NativeAnimatedHelper_default.generateNewAnimationId();
      NativeAnimatedHelper_default.API.startAnimatingNode(
        this.__nativeId,
        animatedValue.__getNativeTag(),
        config2,
        // $FlowFixMe[method-unbinding] added when improving typing for this parameters
        this.__debouncedOnEnd.bind(this)
      );
    } catch (e) {
      throw e;
    } finally {
      NativeAnimatedHelper_default.API.unsetWaitingForIdentifier(startNativeAnimationWaitId);
    }
  }
};
var Animation_default = Animation;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/animations/DecayAnimation.js
var DecayAnimation = class extends Animation_default {
  static {
    __name(this, "DecayAnimation");
  }
  constructor(config2) {
    var _config$deceleration, _config$isInteraction, _config$iterations;
    super();
    this._deceleration = (_config$deceleration = config2.deceleration) !== null && _config$deceleration !== void 0 ? _config$deceleration : 0.998;
    this._velocity = config2.velocity;
    this._useNativeDriver = shouldUseNativeDriver(config2);
    this.__isInteraction = (_config$isInteraction = config2.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    this.__iterations = (_config$iterations = config2.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
  }
  __getNativeAnimationConfig() {
    return {
      type: "decay",
      deceleration: this._deceleration,
      velocity: this._velocity,
      iterations: this.__iterations
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._lastValue = fromValue;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._startTime = Date.now();
    if (this._useNativeDriver) {
      this.__startNativeAnimation(animatedValue);
    } else {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  onUpdate() {
    var now = Date.now();
    var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));
    this._onUpdate(value);
    if (Math.abs(this._lastValue - value) < 0.1) {
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._lastValue = value;
    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  stop() {
    super.stop();
    this.__active = false;
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
};
var DecayAnimation_default = DecayAnimation;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/SpringConfig.js
function stiffnessFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194;
}
__name(stiffnessFromOrigamiValue, "stiffnessFromOrigamiValue");
function dampingFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25;
}
__name(dampingFromOrigamiValue, "dampingFromOrigamiValue");
function fromOrigamiTensionAndFriction(tension, friction) {
  return {
    stiffness: stiffnessFromOrigamiValue(tension),
    damping: dampingFromOrigamiValue(friction)
  };
}
__name(fromOrigamiTensionAndFriction, "fromOrigamiTensionAndFriction");
function fromBouncinessAndSpeed(bounciness, speed) {
  function normalize(value, startValue, endValue) {
    return (value - startValue) / (endValue - startValue);
  }
  __name(normalize, "normalize");
  function projectNormal(n, start, end) {
    return start + n * (end - start);
  }
  __name(projectNormal, "projectNormal");
  function linearInterpolation(t2, start, end) {
    return t2 * end + (1 - t2) * start;
  }
  __name(linearInterpolation, "linearInterpolation");
  function quadraticOutInterpolation(t2, start, end) {
    return linearInterpolation(2 * t2 - t2 * t2, start, end);
  }
  __name(quadraticOutInterpolation, "quadraticOutInterpolation");
  function b3Friction1(x) {
    return 7e-4 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
  }
  __name(b3Friction1, "b3Friction1");
  function b3Friction2(x) {
    return 44e-6 * Math.pow(x, 3) - 6e-3 * Math.pow(x, 2) + 0.36 * x + 2;
  }
  __name(b3Friction2, "b3Friction2");
  function b3Friction3(x) {
    return 45e-8 * Math.pow(x, 3) - 332e-6 * Math.pow(x, 2) + 0.1078 * x + 5.84;
  }
  __name(b3Friction3, "b3Friction3");
  function b3Nobounce(tension) {
    if (tension <= 18) {
      return b3Friction1(tension);
    } else if (tension > 18 && tension <= 44) {
      return b3Friction2(tension);
    } else {
      return b3Friction3(tension);
    }
  }
  __name(b3Nobounce, "b3Nobounce");
  var b = normalize(bounciness / 1.7, 0, 20);
  b = projectNormal(b, 0, 0.8);
  var s = normalize(speed / 1.7, 0, 20);
  var bouncyTension = projectNormal(s, 0.5, 200);
  var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);
  return {
    stiffness: stiffnessFromOrigamiValue(bouncyTension),
    damping: dampingFromOrigamiValue(bouncyFriction)
  };
}
__name(fromBouncinessAndSpeed, "fromBouncinessAndSpeed");
var SpringConfig_default = {
  fromOrigamiTensionAndFriction,
  fromBouncinessAndSpeed
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/animations/SpringAnimation.js
var import_invariant21 = __toESM(require_invariant());

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedColor.js
var import_normalize_colors3 = __toESM(require_normalize_colors());
var NativeAnimatedAPI3 = NativeAnimatedHelper_default.API;
var defaultColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
var _uniqueId3 = 1;
var processColorObject = /* @__PURE__ */ __name((color) => {
  return color;
}, "processColorObject");
function processColor2(color) {
  if (color === void 0 || color === null) {
    return null;
  }
  if (isRgbaValue(color)) {
    return color;
  }
  var normalizedColor = (0, import_normalize_colors3.default)(
    // $FlowIgnore[incompatible-cast] - Type is verified above
    color
  );
  if (normalizedColor === void 0 || normalizedColor === null) {
    return null;
  }
  if (typeof normalizedColor === "object") {
    var processedColorObj = processColorObject(normalizedColor);
    if (processedColorObj != null) {
      return processedColorObj;
    }
  } else if (typeof normalizedColor === "number") {
    var r = (normalizedColor & 4278190080) >>> 24;
    var g = (normalizedColor & 16711680) >>> 16;
    var b = (normalizedColor & 65280) >>> 8;
    var a = (normalizedColor & 255) / 255;
    return {
      r,
      g,
      b,
      a
    };
  }
  return null;
}
__name(processColor2, "processColor");
function isRgbaValue(value) {
  return value && typeof value.r === "number" && typeof value.g === "number" && typeof value.b === "number" && typeof value.a === "number";
}
__name(isRgbaValue, "isRgbaValue");
function isRgbaAnimatedValue(value) {
  return value && value.r instanceof AnimatedValue_default && value.g instanceof AnimatedValue_default && value.b instanceof AnimatedValue_default && value.a instanceof AnimatedValue_default;
}
__name(isRgbaAnimatedValue, "isRgbaAnimatedValue");
var AnimatedColor = class extends AnimatedWithChildren_default {
  static {
    __name(this, "AnimatedColor");
  }
  constructor(valueIn, config2) {
    super();
    this._listeners = {};
    var value = valueIn !== null && valueIn !== void 0 ? valueIn : defaultColor;
    if (isRgbaAnimatedValue(value)) {
      var rgbaAnimatedValue = value;
      this.r = rgbaAnimatedValue.r;
      this.g = rgbaAnimatedValue.g;
      this.b = rgbaAnimatedValue.b;
      this.a = rgbaAnimatedValue.a;
    } else {
      var _processColor;
      var processedColor = (
        // $FlowIgnore[incompatible-cast] - Type is verified above
        (_processColor = processColor2(value)) !== null && _processColor !== void 0 ? _processColor : defaultColor
      );
      var initColor = defaultColor;
      if (isRgbaValue(processedColor)) {
        initColor = processedColor;
      } else {
        this.nativeColor = processedColor;
      }
      this.r = new AnimatedValue_default(initColor.r);
      this.g = new AnimatedValue_default(initColor.g);
      this.b = new AnimatedValue_default(initColor.b);
      this.a = new AnimatedValue_default(initColor.a);
    }
    if (this.nativeColor || config2 && config2.useNativeDriver) {
      this.__makeNative();
    }
  }
  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   */
  setValue(value) {
    var _processColor2;
    var shouldUpdateNodeConfig = false;
    if (this.__isNative) {
      var nativeTag = this.__getNativeTag();
      NativeAnimatedAPI3.setWaitingForIdentifier(nativeTag.toString());
    }
    var processedColor = (_processColor2 = processColor2(value)) !== null && _processColor2 !== void 0 ? _processColor2 : defaultColor;
    if (isRgbaValue(processedColor)) {
      var rgbaValue = processedColor;
      this.r.setValue(rgbaValue.r);
      this.g.setValue(rgbaValue.g);
      this.b.setValue(rgbaValue.b);
      this.a.setValue(rgbaValue.a);
      if (this.nativeColor != null) {
        this.nativeColor = null;
        shouldUpdateNodeConfig = true;
      }
    } else {
      var nativeColor = processedColor;
      if (this.nativeColor !== nativeColor) {
        this.nativeColor = nativeColor;
        shouldUpdateNodeConfig = true;
      }
    }
    if (this.__isNative) {
      var _nativeTag = this.__getNativeTag();
      if (shouldUpdateNodeConfig) {
        NativeAnimatedAPI3.updateAnimatedNodeConfig(_nativeTag, this.__getNativeConfig());
      }
      NativeAnimatedAPI3.unsetWaitingForIdentifier(_nativeTag.toString());
    }
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   */
  setOffset(offset) {
    this.r.setOffset(offset.r);
    this.g.setOffset(offset.g);
    this.b.setOffset(offset.b);
    this.a.setOffset(offset.a);
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   */
  flattenOffset() {
    this.r.flattenOffset();
    this.g.flattenOffset();
    this.b.flattenOffset();
    this.a.flattenOffset();
  }
  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   */
  extractOffset() {
    this.r.extractOffset();
    this.g.extractOffset();
    this.b.extractOffset();
    this.a.extractOffset();
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   */
  addListener(callback) {
    var id2 = String(_uniqueId3++);
    var jointCallback = /* @__PURE__ */ __name((_ref) => {
      var number = _ref.value;
      callback(this.__getValue());
    }, "jointCallback");
    this._listeners[id2] = {
      r: this.r.addListener(jointCallback),
      g: this.g.addListener(jointCallback),
      b: this.b.addListener(jointCallback),
      a: this.a.addListener(jointCallback)
    };
    return id2;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   */
  removeListener(id2) {
    this.r.removeListener(this._listeners[id2].r);
    this.g.removeListener(this._listeners[id2].g);
    this.b.removeListener(this._listeners[id2].b);
    this.a.removeListener(this._listeners[id2].a);
    delete this._listeners[id2];
  }
  /**
   * Remove all registered listeners.
   */
  removeAllListeners() {
    this.r.removeAllListeners();
    this.g.removeAllListeners();
    this.b.removeAllListeners();
    this.a.removeAllListeners();
    this._listeners = {};
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   */
  stopAnimation(callback) {
    this.r.stopAnimation();
    this.g.stopAnimation();
    this.b.stopAnimation();
    this.a.stopAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Stops any animation and resets the value to its original.
   */
  resetAnimation(callback) {
    this.r.resetAnimation();
    this.g.resetAnimation();
    this.b.resetAnimation();
    this.a.resetAnimation();
    callback && callback(this.__getValue());
  }
  __getValue() {
    if (this.nativeColor != null) {
      return this.nativeColor;
    } else {
      return "rgba(" + this.r.__getValue() + ", " + this.g.__getValue() + ", " + this.b.__getValue() + ", " + this.a.__getValue() + ")";
    }
  }
  __attach() {
    this.r.__addChild(this);
    this.g.__addChild(this);
    this.b.__addChild(this);
    this.a.__addChild(this);
    super.__attach();
  }
  __detach() {
    this.r.__removeChild(this);
    this.g.__removeChild(this);
    this.b.__removeChild(this);
    this.a.__removeChild(this);
    super.__detach();
  }
  __makeNative(platformConfig) {
    this.r.__makeNative(platformConfig);
    this.g.__makeNative(platformConfig);
    this.b.__makeNative(platformConfig);
    this.a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getNativeConfig() {
    return {
      type: "color",
      r: this.r.__getNativeTag(),
      g: this.g.__getNativeTag(),
      b: this.b.__getNativeTag(),
      a: this.a.__getNativeTag(),
      nativeColor: this.nativeColor
    };
  }
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/animations/SpringAnimation.js
var SpringAnimation = class _SpringAnimation extends Animation_default {
  static {
    __name(this, "SpringAnimation");
  }
  constructor(config2) {
    var _config$overshootClam, _config$restDisplacem, _config$restSpeedThre, _config$velocity, _config$velocity2, _config$delay, _config$isInteraction, _config$iterations;
    super();
    this._overshootClamping = (_config$overshootClam = config2.overshootClamping) !== null && _config$overshootClam !== void 0 ? _config$overshootClam : false;
    this._restDisplacementThreshold = (_config$restDisplacem = config2.restDisplacementThreshold) !== null && _config$restDisplacem !== void 0 ? _config$restDisplacem : 1e-3;
    this._restSpeedThreshold = (_config$restSpeedThre = config2.restSpeedThreshold) !== null && _config$restSpeedThre !== void 0 ? _config$restSpeedThre : 1e-3;
    this._initialVelocity = (_config$velocity = config2.velocity) !== null && _config$velocity !== void 0 ? _config$velocity : 0;
    this._lastVelocity = (_config$velocity2 = config2.velocity) !== null && _config$velocity2 !== void 0 ? _config$velocity2 : 0;
    this._toValue = config2.toValue;
    this._delay = (_config$delay = config2.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    this._useNativeDriver = shouldUseNativeDriver(config2);
    this._platformConfig = config2.platformConfig;
    this.__isInteraction = (_config$isInteraction = config2.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    this.__iterations = (_config$iterations = config2.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    if (config2.stiffness !== void 0 || config2.damping !== void 0 || config2.mass !== void 0) {
      var _config$stiffness, _config$damping, _config$mass;
      (0, import_invariant21.default)(config2.bounciness === void 0 && config2.speed === void 0 && config2.tension === void 0 && config2.friction === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
      this._stiffness = (_config$stiffness = config2.stiffness) !== null && _config$stiffness !== void 0 ? _config$stiffness : 100;
      this._damping = (_config$damping = config2.damping) !== null && _config$damping !== void 0 ? _config$damping : 10;
      this._mass = (_config$mass = config2.mass) !== null && _config$mass !== void 0 ? _config$mass : 1;
    } else if (config2.bounciness !== void 0 || config2.speed !== void 0) {
      var _config$bounciness, _config$speed;
      (0, import_invariant21.default)(config2.tension === void 0 && config2.friction === void 0 && config2.stiffness === void 0 && config2.damping === void 0 && config2.mass === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
      var springConfig = SpringConfig_default.fromBouncinessAndSpeed((_config$bounciness = config2.bounciness) !== null && _config$bounciness !== void 0 ? _config$bounciness : 8, (_config$speed = config2.speed) !== null && _config$speed !== void 0 ? _config$speed : 12);
      this._stiffness = springConfig.stiffness;
      this._damping = springConfig.damping;
      this._mass = 1;
    } else {
      var _config$tension, _config$friction;
      var _springConfig = SpringConfig_default.fromOrigamiTensionAndFriction((_config$tension = config2.tension) !== null && _config$tension !== void 0 ? _config$tension : 40, (_config$friction = config2.friction) !== null && _config$friction !== void 0 ? _config$friction : 7);
      this._stiffness = _springConfig.stiffness;
      this._damping = _springConfig.damping;
      this._mass = 1;
    }
    (0, import_invariant21.default)(this._stiffness > 0, "Stiffness value must be greater than 0");
    (0, import_invariant21.default)(this._damping > 0, "Damping value must be greater than 0");
    (0, import_invariant21.default)(this._mass > 0, "Mass value must be greater than 0");
  }
  __getNativeAnimationConfig() {
    var _this$_initialVelocit;
    return {
      type: "spring",
      overshootClamping: this._overshootClamping,
      restDisplacementThreshold: this._restDisplacementThreshold,
      restSpeedThreshold: this._restSpeedThreshold,
      stiffness: this._stiffness,
      damping: this._damping,
      mass: this._mass,
      initialVelocity: (_this$_initialVelocit = this._initialVelocity) !== null && _this$_initialVelocit !== void 0 ? _this$_initialVelocit : this._lastVelocity,
      toValue: this._toValue,
      iterations: this.__iterations,
      platformConfig: this._platformConfig
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._startPosition = fromValue;
    this._lastPosition = this._startPosition;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._lastTime = Date.now();
    this._frameTime = 0;
    if (previousAnimation instanceof _SpringAnimation) {
      var internalState = previousAnimation.getInternalState();
      this._lastPosition = internalState.lastPosition;
      this._lastVelocity = internalState.lastVelocity;
      this._initialVelocity = this._lastVelocity;
      this._lastTime = internalState.lastTime;
    }
    var start = /* @__PURE__ */ __name(() => {
      if (this._useNativeDriver) {
        this.__startNativeAnimation(animatedValue);
      } else {
        this.onUpdate();
      }
    }, "start");
    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  }
  getInternalState() {
    return {
      lastPosition: this._lastPosition,
      lastVelocity: this._lastVelocity,
      lastTime: this._lastTime
    };
  }
  /**
   * This spring model is based off of a damped harmonic oscillator
   * (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
   *
   * We use the closed form of the second order differential equation:
   *
   * x'' + (2ζ⍵_0)x' + ⍵^2x = 0
   *
   * where
   *    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
   *    ζ = c / 2√mk (damping ratio),
   *    c = damping constant
   *    k = stiffness
   *    m = mass
   *
   * The derivation of the closed form is described in detail here:
   * http://planetmath.org/sites/default/files/texpdf/39745.pdf
   *
   * This algorithm happens to match the algorithm used by CASpringAnimation,
   * a QuartzCore (iOS) API that creates spring animations.
   */
  onUpdate() {
    var MAX_STEPS = 64;
    var now = Date.now();
    if (now > this._lastTime + MAX_STEPS) {
      now = this._lastTime + MAX_STEPS;
    }
    var deltaTime = (now - this._lastTime) / 1e3;
    this._frameTime += deltaTime;
    var c = this._damping;
    var m2 = this._mass;
    var k = this._stiffness;
    var v0 = -this._initialVelocity;
    var zeta = c / (2 * Math.sqrt(k * m2));
    var omega0 = Math.sqrt(k / m2);
    var omega1 = omega0 * Math.sqrt(1 - zeta * zeta);
    var x0 = this._toValue - this._startPosition;
    var position2 = 0;
    var velocity = 0;
    var t2 = this._frameTime;
    if (zeta < 1) {
      var envelope = Math.exp(-zeta * omega0 * t2);
      position2 = this._toValue - envelope * ((v0 + zeta * omega0 * x0) / omega1 * Math.sin(omega1 * t2) + x0 * Math.cos(omega1 * t2));
      velocity = zeta * omega0 * envelope * (Math.sin(omega1 * t2) * (v0 + zeta * omega0 * x0) / omega1 + x0 * Math.cos(omega1 * t2)) - envelope * (Math.cos(omega1 * t2) * (v0 + zeta * omega0 * x0) - omega1 * x0 * Math.sin(omega1 * t2));
    } else {
      var _envelope = Math.exp(-omega0 * t2);
      position2 = this._toValue - _envelope * (x0 + (v0 + omega0 * x0) * t2);
      velocity = _envelope * (v0 * (t2 * omega0 - 1) + t2 * x0 * (omega0 * omega0));
    }
    this._lastTime = now;
    this._lastPosition = position2;
    this._lastVelocity = velocity;
    this._onUpdate(position2);
    if (!this.__active) {
      return;
    }
    var isOvershooting = false;
    if (this._overshootClamping && this._stiffness !== 0) {
      if (this._startPosition < this._toValue) {
        isOvershooting = position2 > this._toValue;
      } else {
        isOvershooting = position2 < this._toValue;
      }
    }
    var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
    var isDisplacement = true;
    if (this._stiffness !== 0) {
      isDisplacement = Math.abs(this._toValue - position2) <= this._restDisplacementThreshold;
    }
    if (isOvershooting || isVelocity && isDisplacement) {
      if (this._stiffness !== 0) {
        this._lastPosition = this._toValue;
        this._lastVelocity = 0;
        this._onUpdate(this._toValue);
      }
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  }
  stop() {
    super.stop();
    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
};
var SpringAnimation_default = SpringAnimation;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/bezier.js
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
__name(A, "A");
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
__name(B, "B");
function C(aA1) {
  return 3 * aA1;
}
__name(C, "C");
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
__name(calcBezier, "calcBezier");
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
__name(getSlope, "getSlope");
function binarySubdivide(aX, _aA, _aB, mX1, mX2) {
  var currentX, currentT, i = 0, aA = _aA, aB = _aB;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
__name(binarySubdivide, "binarySubdivide");
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
  var aGuessT = _aGuessT;
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
__name(newtonRaphsonIterate, "newtonRaphsonIterate");
function bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }
  function getTForX(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  __name(getTForX, "getTForX");
  return /* @__PURE__ */ __name(function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x;
    }
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  }, "BezierEasing");
}
__name(bezier, "bezier");

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/Easing.js
var ease;
var Easing = class _Easing {
  static {
    __name(this, "Easing");
  }
  /**
   * A stepping function, returns 1 for any positive value of `n`.
   */
  static step0(n) {
    return n > 0 ? 1 : 0;
  }
  /**
   * A stepping function, returns 1 if `n` is greater than or equal to 1.
   */
  static step1(n) {
    return n >= 1 ? 1 : 0;
  }
  /**
   * A linear function, `f(t) = t`. Position correlates to elapsed time one to
   * one.
   *
   * http://cubic-bezier.com/#0,0,1,1
   */
  static linear(t2) {
    return t2;
  }
  /**
   * A simple inertial interaction, similar to an object slowly accelerating to
   * speed.
   *
   * http://cubic-bezier.com/#.42,0,1,1
   */
  static ease(t2) {
    if (!ease) {
      ease = _Easing.bezier(0.42, 0, 1, 1);
    }
    return ease(t2);
  }
  /**
   * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
   * time.
   *
   * http://easings.net/#easeInQuad
   */
  static quad(t2) {
    return t2 * t2;
  }
  /**
   * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
   * time.
   *
   * http://easings.net/#easeInCubic
   */
  static cubic(t2) {
    return t2 * t2 * t2;
  }
  /**
   * A power function. Position is equal to the Nth power of elapsed time.
   *
   * n = 4: http://easings.net/#easeInQuart
   * n = 5: http://easings.net/#easeInQuint
   */
  static poly(n) {
    return (t2) => Math.pow(t2, n);
  }
  /**
   * A sinusoidal function.
   *
   * http://easings.net/#easeInSine
   */
  static sin(t2) {
    return 1 - Math.cos(t2 * Math.PI / 2);
  }
  /**
   * A circular function.
   *
   * http://easings.net/#easeInCirc
   */
  static circle(t2) {
    return 1 - Math.sqrt(1 - t2 * t2);
  }
  /**
   * An exponential function.
   *
   * http://easings.net/#easeInExpo
   */
  static exp(t2) {
    return Math.pow(2, 10 * (t2 - 1));
  }
  /**
   * A simple elastic interaction, similar to a spring oscillating back and
   * forth.
   *
   * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
   * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
   * times.
   *
   * http://easings.net/#easeInElastic
   */
  static elastic(bounciness) {
    if (bounciness === void 0) {
      bounciness = 1;
    }
    var p = bounciness * Math.PI;
    return (t2) => 1 - Math.pow(Math.cos(t2 * Math.PI / 2), 3) * Math.cos(t2 * p);
  }
  /**
   * Use with `Animated.parallel()` to create a simple effect where the object
   * animates back slightly as the animation starts.
   *
   * Wolfram Plot:
   *
   * - http://tiny.cc/back_default (s = 1.70158, default)
   */
  static back(s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return (t2) => t2 * t2 * ((s + 1) * t2 - s);
  }
  /**
   * Provides a simple bouncing effect.
   *
   * http://easings.net/#easeInBounce
   */
  static bounce(t2) {
    if (t2 < 1 / 2.75) {
      return 7.5625 * t2 * t2;
    }
    if (t2 < 2 / 2.75) {
      var _t = t2 - 1.5 / 2.75;
      return 7.5625 * _t * _t + 0.75;
    }
    if (t2 < 2.5 / 2.75) {
      var _t2 = t2 - 2.25 / 2.75;
      return 7.5625 * _t2 * _t2 + 0.9375;
    }
    var t22 = t2 - 2.625 / 2.75;
    return 7.5625 * t22 * t22 + 0.984375;
  }
  /**
   * Provides a cubic bezier curve, equivalent to CSS Transitions'
   * `transition-timing-function`.
   *
   * A useful tool to visualize cubic bezier curves can be found at
   * http://cubic-bezier.com/
   */
  static bezier(x1, y1, x2, y2) {
    return bezier(x1, y1, x2, y2);
  }
  /**
   * Runs an easing function forwards.
   */
  static in(easing) {
    return easing;
  }
  /**
   * Runs an easing function backwards.
   */
  static out(easing) {
    return (t2) => 1 - easing(1 - t2);
  }
  /**
   * Makes any easing function symmetrical. The easing function will run
   * forwards for half of the duration, then backwards for the rest of the
   * duration.
   */
  static inOut(easing) {
    return (t2) => {
      if (t2 < 0.5) {
        return easing(t2 * 2) / 2;
      }
      return 1 - easing((1 - t2) * 2) / 2;
    };
  }
};
var Easing_default = Easing;

// ../../node_modules/react-native-web/dist/exports/Easing/index.js
var Easing_default2 = Easing_default;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/animations/TimingAnimation.js
var _easeInOut;
function easeInOut() {
  if (!_easeInOut) {
    _easeInOut = Easing_default2.inOut(Easing_default2.ease);
  }
  return _easeInOut;
}
__name(easeInOut, "easeInOut");
var TimingAnimation = class extends Animation_default {
  static {
    __name(this, "TimingAnimation");
  }
  constructor(config2) {
    var _config$easing, _config$duration, _config$delay, _config$iterations, _config$isInteraction;
    super();
    this._toValue = config2.toValue;
    this._easing = (_config$easing = config2.easing) !== null && _config$easing !== void 0 ? _config$easing : easeInOut();
    this._duration = (_config$duration = config2.duration) !== null && _config$duration !== void 0 ? _config$duration : 500;
    this._delay = (_config$delay = config2.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    this.__iterations = (_config$iterations = config2.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    this._useNativeDriver = shouldUseNativeDriver(config2);
    this._platformConfig = config2.platformConfig;
    this.__isInteraction = (_config$isInteraction = config2.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
  }
  __getNativeAnimationConfig() {
    var frameDuration = 1e3 / 60;
    var frames = [];
    var numFrames = Math.round(this._duration / frameDuration);
    for (var frame = 0; frame < numFrames; frame++) {
      frames.push(this._easing(frame / numFrames));
    }
    frames.push(this._easing(1));
    return {
      type: "frames",
      frames,
      toValue: this._toValue,
      iterations: this.__iterations,
      platformConfig: this._platformConfig
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    var start = /* @__PURE__ */ __name(() => {
      if (this._duration === 0 && !this._useNativeDriver) {
        this._onUpdate(this._toValue);
        this.__debouncedOnEnd({
          finished: true
        });
      } else {
        this._startTime = Date.now();
        if (this._useNativeDriver) {
          this.__startNativeAnimation(animatedValue);
        } else {
          this._animationFrame = requestAnimationFrame(
            // $FlowFixMe[method-unbinding] added when improving typing for this parameters
            this.onUpdate.bind(this)
          );
        }
      }
    }, "start");
    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  }
  onUpdate() {
    var now = Date.now();
    if (now >= this._startTime + this._duration) {
      if (this._duration === 0) {
        this._onUpdate(this._toValue);
      } else {
        this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
      }
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));
    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  stop() {
    super.stop();
    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
};
var TimingAnimation_default = TimingAnimation;

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedImplementation.js
var add = /* @__PURE__ */ __name(function add2(a, b) {
  return new AnimatedAddition_default(a, b);
}, "add");
var subtract = /* @__PURE__ */ __name(function subtract2(a, b) {
  return new AnimatedSubtraction_default(a, b);
}, "subtract");
var divide = /* @__PURE__ */ __name(function divide2(a, b) {
  return new AnimatedDivision_default(a, b);
}, "divide");
var multiply = /* @__PURE__ */ __name(function multiply2(a, b) {
  return new AnimatedMultiplication_default(a, b);
}, "multiply");
var modulo = /* @__PURE__ */ __name(function modulo2(a, modulus) {
  return new AnimatedModulo_default(a, modulus);
}, "modulo");
var diffClamp = /* @__PURE__ */ __name(function diffClamp2(a, min, max) {
  return new AnimatedDiffClamp_default(a, min, max);
}, "diffClamp");
var _combineCallbacks = /* @__PURE__ */ __name(function _combineCallbacks2(callback, config2) {
  if (callback && config2.onComplete) {
    return function() {
      config2.onComplete && config2.onComplete(...arguments);
      callback && callback(...arguments);
    };
  } else {
    return callback || config2.onComplete;
  }
}, "_combineCallbacks");
var maybeVectorAnim = /* @__PURE__ */ __name(function maybeVectorAnim2(value, config2, anim) {
  if (value instanceof AnimatedValueXY_default) {
    var configX = (0, import_objectSpread221.default)({}, config2);
    var configY = (0, import_objectSpread221.default)({}, config2);
    for (var key in config2) {
      var _config$key = config2[key], x = _config$key.x, y = _config$key.y;
      if (x !== void 0 && y !== void 0) {
        configX[key] = x;
        configY[key] = y;
      }
    }
    var aX = anim(value.x, configX);
    var aY = anim(value.y, configY);
    return parallel([aX, aY], {
      stopTogether: false
    });
  } else if (value instanceof AnimatedColor) {
    var configR = (0, import_objectSpread221.default)({}, config2);
    var configG = (0, import_objectSpread221.default)({}, config2);
    var configB = (0, import_objectSpread221.default)({}, config2);
    var configA = (0, import_objectSpread221.default)({}, config2);
    for (var _key in config2) {
      var _config$_key = config2[_key], r = _config$_key.r, g = _config$_key.g, b = _config$_key.b, a = _config$_key.a;
      if (r !== void 0 && g !== void 0 && b !== void 0 && a !== void 0) {
        configR[_key] = r;
        configG[_key] = g;
        configB[_key] = b;
        configA[_key] = a;
      }
    }
    var aR = anim(value.r, configR);
    var aG = anim(value.g, configG);
    var aB = anim(value.b, configB);
    var aA = anim(value.a, configA);
    return parallel([aR, aG, aB, aA], {
      stopTogether: false
    });
  }
  return null;
}, "maybeVectorAnim");
var spring = /* @__PURE__ */ __name(function spring2(value, config2) {
  var _start = /* @__PURE__ */ __name(function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof AnimatedNode_default) {
      singleValue.track(new AnimatedTracking_default(singleValue, configuration.toValue, SpringAnimation_default, singleConfig, callback));
    } else {
      singleValue.animate(new SpringAnimation_default(singleConfig), callback);
    }
  }, "start");
  return maybeVectorAnim(value, config2, spring2) || {
    start: /* @__PURE__ */ __name(function start(callback) {
      _start(value, config2, callback);
    }, "start"),
    stop: /* @__PURE__ */ __name(function stop() {
      value.stopAnimation();
    }, "stop"),
    reset: /* @__PURE__ */ __name(function reset() {
      value.resetAnimation();
    }, "reset"),
    _startNativeLoop: /* @__PURE__ */ __name(function _startNativeLoop(iterations) {
      var singleConfig = (0, import_objectSpread221.default)((0, import_objectSpread221.default)({}, config2), {}, {
        iterations
      });
      _start(value, singleConfig);
    }, "_startNativeLoop"),
    _isUsingNativeDriver: /* @__PURE__ */ __name(function _isUsingNativeDriver() {
      return config2.useNativeDriver || false;
    }, "_isUsingNativeDriver")
  };
}, "spring");
var timing = /* @__PURE__ */ __name(function timing2(value, config2) {
  var _start2 = /* @__PURE__ */ __name(function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof AnimatedNode_default) {
      singleValue.track(new AnimatedTracking_default(singleValue, configuration.toValue, TimingAnimation_default, singleConfig, callback));
    } else {
      singleValue.animate(new TimingAnimation_default(singleConfig), callback);
    }
  }, "start");
  return maybeVectorAnim(value, config2, timing2) || {
    start: /* @__PURE__ */ __name(function start(callback) {
      _start2(value, config2, callback);
    }, "start"),
    stop: /* @__PURE__ */ __name(function stop() {
      value.stopAnimation();
    }, "stop"),
    reset: /* @__PURE__ */ __name(function reset() {
      value.resetAnimation();
    }, "reset"),
    _startNativeLoop: /* @__PURE__ */ __name(function _startNativeLoop(iterations) {
      var singleConfig = (0, import_objectSpread221.default)((0, import_objectSpread221.default)({}, config2), {}, {
        iterations
      });
      _start2(value, singleConfig);
    }, "_startNativeLoop"),
    _isUsingNativeDriver: /* @__PURE__ */ __name(function _isUsingNativeDriver() {
      return config2.useNativeDriver || false;
    }, "_isUsingNativeDriver")
  };
}, "timing");
var decay = /* @__PURE__ */ __name(function decay2(value, config2) {
  var _start3 = /* @__PURE__ */ __name(function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    singleValue.animate(new DecayAnimation_default(singleConfig), callback);
  }, "start");
  return maybeVectorAnim(value, config2, decay2) || {
    start: /* @__PURE__ */ __name(function start(callback) {
      _start3(value, config2, callback);
    }, "start"),
    stop: /* @__PURE__ */ __name(function stop() {
      value.stopAnimation();
    }, "stop"),
    reset: /* @__PURE__ */ __name(function reset() {
      value.resetAnimation();
    }, "reset"),
    _startNativeLoop: /* @__PURE__ */ __name(function _startNativeLoop(iterations) {
      var singleConfig = (0, import_objectSpread221.default)((0, import_objectSpread221.default)({}, config2), {}, {
        iterations
      });
      _start3(value, singleConfig);
    }, "_startNativeLoop"),
    _isUsingNativeDriver: /* @__PURE__ */ __name(function _isUsingNativeDriver() {
      return config2.useNativeDriver || false;
    }, "_isUsingNativeDriver")
  };
}, "decay");
var sequence = /* @__PURE__ */ __name(function sequence2(animations) {
  var current = 0;
  return {
    start: /* @__PURE__ */ __name(function start(callback) {
      var onComplete = /* @__PURE__ */ __name(function onComplete2(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }
        current++;
        if (current === animations.length) {
          current = 0;
          callback && callback(result);
          return;
        }
        animations[current].start(onComplete2);
      }, "onComplete");
      if (animations.length === 0) {
        callback && callback({
          finished: true
        });
      } else {
        animations[current].start(onComplete);
      }
    }, "start"),
    stop: /* @__PURE__ */ __name(function stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    }, "stop"),
    reset: /* @__PURE__ */ __name(function reset() {
      animations.forEach((animation, idx) => {
        if (idx <= current) {
          animation.reset();
        }
      });
      current = 0;
    }, "reset"),
    _startNativeLoop: /* @__PURE__ */ __name(function _startNativeLoop() {
      throw new Error("Loops run using the native driver cannot contain Animated.sequence animations");
    }, "_startNativeLoop"),
    _isUsingNativeDriver: /* @__PURE__ */ __name(function _isUsingNativeDriver() {
      return false;
    }, "_isUsingNativeDriver")
  };
}, "sequence");
var parallel = /* @__PURE__ */ __name(function parallel2(animations, config2) {
  var doneCount = 0;
  var hasEnded = {};
  var stopTogether = !(config2 && config2.stopTogether === false);
  var result = {
    start: /* @__PURE__ */ __name(function start(callback) {
      if (doneCount === animations.length) {
        callback && callback({
          finished: true
        });
        return;
      }
      animations.forEach((animation, idx) => {
        var cb = /* @__PURE__ */ __name(function cb2(endResult) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }
          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        }, "cb");
        if (!animation) {
          cb({
            finished: true
          });
        } else {
          animation.start(cb);
        }
      });
    }, "start"),
    stop: /* @__PURE__ */ __name(function stop() {
      animations.forEach((animation, idx) => {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    }, "stop"),
    reset: /* @__PURE__ */ __name(function reset() {
      animations.forEach((animation, idx) => {
        animation.reset();
        hasEnded[idx] = false;
        doneCount = 0;
      });
    }, "reset"),
    _startNativeLoop: /* @__PURE__ */ __name(function _startNativeLoop() {
      throw new Error("Loops run using the native driver cannot contain Animated.parallel animations");
    }, "_startNativeLoop"),
    _isUsingNativeDriver: /* @__PURE__ */ __name(function _isUsingNativeDriver() {
      return false;
    }, "_isUsingNativeDriver")
  };
  return result;
}, "parallel");
var delay = /* @__PURE__ */ __name(function delay2(time) {
  return timing(new AnimatedValue_default(0), {
    toValue: 0,
    delay: time,
    duration: 0,
    useNativeDriver: false
  });
}, "delay");
var stagger = /* @__PURE__ */ __name(function stagger2(time, animations) {
  return parallel(animations.map((animation, i) => {
    return sequence([delay(time * i), animation]);
  }));
}, "stagger");
var loop = /* @__PURE__ */ __name(function loop2(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations, _ref$resetBeforeItera = _ref.resetBeforeIteration, resetBeforeIteration = _ref$resetBeforeItera === void 0 ? true : _ref$resetBeforeItera;
  var isFinished = false;
  var iterationsSoFar = 0;
  return {
    start: /* @__PURE__ */ __name(function start(callback) {
      var restart = /* @__PURE__ */ __name(function restart2(result) {
        if (result === void 0) {
          result = {
            finished: true
          };
        }
        if (isFinished || iterationsSoFar === iterations || result.finished === false) {
          callback && callback(result);
        } else {
          iterationsSoFar++;
          resetBeforeIteration && animation.reset();
          animation.start(restart2);
        }
      }, "restart");
      if (!animation || iterations === 0) {
        callback && callback({
          finished: true
        });
      } else {
        if (animation._isUsingNativeDriver()) {
          animation._startNativeLoop(iterations);
        } else {
          restart();
        }
      }
    }, "start"),
    stop: /* @__PURE__ */ __name(function stop() {
      isFinished = true;
      animation.stop();
    }, "stop"),
    reset: /* @__PURE__ */ __name(function reset() {
      iterationsSoFar = 0;
      isFinished = false;
      animation.reset();
    }, "reset"),
    _startNativeLoop: /* @__PURE__ */ __name(function _startNativeLoop() {
      throw new Error("Loops run using the native driver cannot contain Animated.loop animations");
    }, "_startNativeLoop"),
    _isUsingNativeDriver: /* @__PURE__ */ __name(function _isUsingNativeDriver() {
      return animation._isUsingNativeDriver();
    }, "_isUsingNativeDriver")
  };
}, "loop");
function forkEvent(event3, listener) {
  if (!event3) {
    return listener;
  } else if (event3 instanceof AnimatedEvent) {
    event3.__addListener(listener);
    return event3;
  } else {
    return function() {
      typeof event3 === "function" && event3(...arguments);
      listener(...arguments);
    };
  }
}
__name(forkEvent, "forkEvent");
function unforkEvent(event3, listener) {
  if (event3 && event3 instanceof AnimatedEvent) {
    event3.__removeListener(listener);
  }
}
__name(unforkEvent, "unforkEvent");
var event = /* @__PURE__ */ __name(function event2(argMapping, config2) {
  var animatedEvent = new AnimatedEvent(argMapping, config2);
  if (animatedEvent.__isNative) {
    return animatedEvent;
  } else {
    return animatedEvent.__getHandler();
  }
}, "event");
var AnimatedImplementation_default = {
  /**
   * Standard value class for driving animations.  Typically initialized with
   * `new Animated.Value(0);`
   *
   * See https://reactnative.dev/docs/animated#value
   */
  Value: AnimatedValue_default,
  /**
   * 2D value class for driving 2D animations, such as pan gestures.
   *
   * See https://reactnative.dev/docs/animatedvaluexy
   */
  ValueXY: AnimatedValueXY_default,
  /**
   * Value class for driving color animations.
   */
  Color: AnimatedColor,
  /**
   * Exported to use the Interpolation type in flow.
   *
   * See https://reactnative.dev/docs/animated#interpolation
   */
  Interpolation: AnimatedInterpolation_default,
  /**
   * Exported for ease of type checking. All animated values derive from this
   * class.
   *
   * See https://reactnative.dev/docs/animated#node
   */
  Node: AnimatedNode_default,
  /**
   * Animates a value from an initial velocity to zero based on a decay
   * coefficient.
   *
   * See https://reactnative.dev/docs/animated#decay
   */
  decay,
  /**
   * Animates a value along a timed easing curve. The Easing module has tons of
   * predefined curves, or you can use your own function.
   *
   * See https://reactnative.dev/docs/animated#timing
   */
  timing,
  /**
   * Animates a value according to an analytical spring model based on
   * damped harmonic oscillation.
   *
   * See https://reactnative.dev/docs/animated#spring
   */
  spring,
  /**
   * Creates a new Animated value composed from two Animated values added
   * together.
   *
   * See https://reactnative.dev/docs/animated#add
   */
  add,
  /**
   * Creates a new Animated value composed by subtracting the second Animated
   * value from the first Animated value.
   *
   * See https://reactnative.dev/docs/animated#subtract
   */
  subtract,
  /**
   * Creates a new Animated value composed by dividing the first Animated value
   * by the second Animated value.
   *
   * See https://reactnative.dev/docs/animated#divide
   */
  divide,
  /**
   * Creates a new Animated value composed from two Animated values multiplied
   * together.
   *
   * See https://reactnative.dev/docs/animated#multiply
   */
  multiply,
  /**
   * Creates a new Animated value that is the (non-negative) modulo of the
   * provided Animated value.
   *
   * See https://reactnative.dev/docs/animated#modulo
   */
  modulo,
  /**
   * Create a new Animated value that is limited between 2 values. It uses the
   * difference between the last value so even if the value is far from the
   * bounds it will start changing when the value starts getting closer again.
   *
   * See https://reactnative.dev/docs/animated#diffclamp
   */
  diffClamp,
  /**
   * Starts an animation after the given delay.
   *
   * See https://reactnative.dev/docs/animated#delay
   */
  delay,
  /**
   * Starts an array of animations in order, waiting for each to complete
   * before starting the next. If the current running animation is stopped, no
   * following animations will be started.
   *
   * See https://reactnative.dev/docs/animated#sequence
   */
  sequence,
  /**
   * Starts an array of animations all at the same time. By default, if one
   * of the animations is stopped, they will all be stopped. You can override
   * this with the `stopTogether` flag.
   *
   * See https://reactnative.dev/docs/animated#parallel
   */
  parallel,
  /**
   * Array of animations may run in parallel (overlap), but are started in
   * sequence with successive delays.  Nice for doing trailing effects.
   *
   * See https://reactnative.dev/docs/animated#stagger
   */
  stagger,
  /**
   * Loops a given animation continuously, so that each time it reaches the
   * end, it resets and begins again from the start.
   *
   * See https://reactnative.dev/docs/animated#loop
   */
  loop,
  /**
   * Takes an array of mappings and extracts values from each arg accordingly,
   * then calls `setValue` on the mapped outputs.
   *
   * See https://reactnative.dev/docs/animated#event
   */
  event,
  /**
   * Make any React component Animatable.  Used to create `Animated.View`, etc.
   *
   * See https://reactnative.dev/docs/animated#createanimatedcomponent
   */
  createAnimatedComponent,
  /**
   * Imperative API to attach an animated value to an event on a view. Prefer
   * using `Animated.event` with `useNativeDrive: true` if possible.
   *
   * See https://reactnative.dev/docs/animated#attachnativeevent
   */
  attachNativeEvent,
  /**
   * Advanced imperative API for snooping on animated events that are passed in
   * through props. Use values directly where possible.
   *
   * See https://reactnative.dev/docs/animated#forkevent
   */
  forkEvent,
  unforkEvent,
  /**
   * Expose Event class, so it can be used as a type for type checkers.
   */
  Event: AnimatedEvent
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedMock.js
var inAnimationCallback = false;
function mockAnimationStart(start) {
  return (callback) => {
    var guardedCallback = callback == null ? callback : function() {
      if (inAnimationCallback) {
        console.warn("Ignoring recursive animation callback when running mock animations");
        return;
      }
      inAnimationCallback = true;
      try {
        callback(...arguments);
      } finally {
        inAnimationCallback = false;
      }
    };
    start(guardedCallback);
  };
}
__name(mockAnimationStart, "mockAnimationStart");
var emptyAnimation = {
  start: /* @__PURE__ */ __name(() => {
  }, "start"),
  stop: /* @__PURE__ */ __name(() => {
  }, "stop"),
  reset: /* @__PURE__ */ __name(() => {
  }, "reset"),
  _startNativeLoop: /* @__PURE__ */ __name(() => {
  }, "_startNativeLoop"),
  _isUsingNativeDriver: /* @__PURE__ */ __name(() => {
    return false;
  }, "_isUsingNativeDriver")
};
var mockCompositeAnimation = /* @__PURE__ */ __name((animations) => (0, import_objectSpread222.default)((0, import_objectSpread222.default)({}, emptyAnimation), {}, {
  start: mockAnimationStart((callback) => {
    animations.forEach((animation) => animation.start());
    callback == null ? void 0 : callback({
      finished: true
    });
  })
}), "mockCompositeAnimation");
var spring3 = /* @__PURE__ */ __name(function spring4(value, config2) {
  var anyValue = value;
  return (0, import_objectSpread222.default)((0, import_objectSpread222.default)({}, emptyAnimation), {}, {
    start: mockAnimationStart((callback) => {
      anyValue.setValue(config2.toValue);
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  });
}, "spring");
var timing3 = /* @__PURE__ */ __name(function timing4(value, config2) {
  var anyValue = value;
  return (0, import_objectSpread222.default)((0, import_objectSpread222.default)({}, emptyAnimation), {}, {
    start: mockAnimationStart((callback) => {
      anyValue.setValue(config2.toValue);
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  });
}, "timing");
var decay3 = /* @__PURE__ */ __name(function decay4(value, config2) {
  return emptyAnimation;
}, "decay");
var sequence3 = /* @__PURE__ */ __name(function sequence4(animations) {
  return mockCompositeAnimation(animations);
}, "sequence");
var parallel3 = /* @__PURE__ */ __name(function parallel4(animations, config2) {
  return mockCompositeAnimation(animations);
}, "parallel");
var delay3 = /* @__PURE__ */ __name(function delay4(time) {
  return emptyAnimation;
}, "delay");
var stagger3 = /* @__PURE__ */ __name(function stagger4(time, animations) {
  return mockCompositeAnimation(animations);
}, "stagger");
var loop3 = /* @__PURE__ */ __name(function loop4(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations;
  return emptyAnimation;
}, "loop");
var AnimatedMock_default = {
  Value: AnimatedValue_default,
  ValueXY: AnimatedValueXY_default,
  Color: AnimatedColor,
  Interpolation: AnimatedInterpolation_default,
  Node: AnimatedNode_default,
  decay: decay3,
  timing: timing3,
  spring: spring3,
  add: AnimatedImplementation_default.add,
  subtract: AnimatedImplementation_default.subtract,
  divide: AnimatedImplementation_default.divide,
  multiply: AnimatedImplementation_default.multiply,
  modulo: AnimatedImplementation_default.modulo,
  diffClamp: AnimatedImplementation_default.diffClamp,
  delay: delay3,
  sequence: sequence3,
  parallel: parallel3,
  stagger: stagger3,
  loop: loop3,
  event: AnimatedImplementation_default.event,
  createAnimatedComponent,
  attachNativeEvent,
  forkEvent: AnimatedImplementation_default.forkEvent,
  unforkEvent: AnimatedImplementation_default.unforkEvent,
  Event: AnimatedEvent
};

// ../../node_modules/react-native-web/dist/vendor/react-native/Animated/Animated.js
var Animated = Platform_default.isTesting ? AnimatedMock_default : AnimatedImplementation_default;
var Animated_default = (0, import_objectSpread223.default)({
  FlatList: AnimatedFlatList_default,
  Image: AnimatedImage_default,
  ScrollView: AnimatedScrollView_default,
  SectionList: AnimatedSectionList_default,
  Text: AnimatedText_default,
  View: AnimatedView_default
}, Animated);

// ../../node_modules/react-native-web/dist/exports/Animated/index.js
var Animated_default2 = Animated_default;

// ../../node_modules/tamagui/dist/esm/createTamagui.mjs
import { createTamagui as createTamaguiCore } from "@tamagui/core";
var createTamagui = process.env.NODE_ENV !== "development" ? createTamaguiCore : (conf) => {
  const sizeTokenKeys = ["$true"];
  const hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => {
    return expectedKeys.every((k) => typeof obj[k] !== "undefined");
  }, "hasKeys");
  const tamaguiConfig = createTamaguiCore(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) {
      throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig.tokensParsed).join(", ")}`);
    }
    if (!hasKeys(sizeTokenKeys, tokenSet)) {
      throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
    }
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    const received = Object.keys(tokenSet);
    const hasSomeOverlap = received.some((rk) => expected.includes(rk));
    if (!hasSomeOverlap) {
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
    }
  }
  return tamaguiConfig;
};

// ../../node_modules/@tamagui/animation-helpers/dist/esm/normalizeTransition.mjs
var SPRING_CONFIG_KEYS = /* @__PURE__ */ new Set(["stiffness", "damping", "mass", "tension", "friction", "velocity", "overshootClamping", "duration", "bounciness", "speed"]);
function isSpringConfigKey(key) {
  return SPRING_CONFIG_KEYS.has(key);
}
__name(isSpringConfigKey, "isSpringConfigKey");
function normalizeTransition(transition2) {
  if (!transition2) {
    return {
      default: null,
      enter: null,
      exit: null,
      delay: void 0,
      properties: {}
    };
  }
  if (typeof transition2 === "string") {
    return {
      default: transition2,
      enter: null,
      exit: null,
      delay: void 0,
      properties: {}
    };
  }
  if (Array.isArray(transition2)) {
    const [defaultAnimation, configObj] = transition2;
    const properties = {};
    const springConfig = {};
    let delay5;
    let enter = null;
    let exit = null;
    if (configObj && typeof configObj === "object") {
      for (const [key, value] of Object.entries(configObj)) {
        if (key === "delay" && typeof value === "number") {
          delay5 = value;
        } else if (key === "enter" && typeof value === "string") {
          enter = value;
        } else if (key === "exit" && typeof value === "string") {
          exit = value;
        } else if (isSpringConfigKey(key) && value !== void 0) {
          springConfig[key] = value;
        } else if (value !== void 0) {
          properties[key] = value;
        }
      }
    }
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay: delay5,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
    };
  }
  if (typeof transition2 === "object") {
    const properties = {};
    const springConfig = {};
    let defaultAnimation = null;
    let enter = null;
    let exit = null;
    let delay5;
    for (const [key, value] of Object.entries(transition2)) {
      if (key === "default" && typeof value === "string") {
        defaultAnimation = value;
      } else if (key === "enter" && typeof value === "string") {
        enter = value;
      } else if (key === "exit" && typeof value === "string") {
        exit = value;
      } else if (key === "delay" && typeof value === "number") {
        delay5 = value;
      } else if (isSpringConfigKey(key) && value !== void 0) {
        springConfig[key] = value;
      } else if (value !== void 0) {
        properties[key] = value;
      }
    }
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay: delay5,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
    };
  }
  return {
    default: null,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
}
__name(normalizeTransition, "normalizeTransition");
function getEffectiveAnimation(normalized, state) {
  if (state === "enter" && normalized.enter) {
    return normalized.enter;
  }
  if (state === "exit" && normalized.exit) {
    return normalized.exit;
  }
  return normalized.default;
}
__name(getEffectiveAnimation, "getEffectiveAnimation");

// ../../node_modules/@tamagui/animations-react-native/dist/esm/createAnimations.mjs
import { useEvent, useThemeWithState } from "@tamagui/web";
import React29 from "react";
var isFabric = !isWeb && typeof global !== "undefined" && !!global.__nativeFabricUIManager;
var resolveDynamicValue = /* @__PURE__ */ __name((value, isDark) => {
  if (value && typeof value === "object" && "dynamic" in value) {
    const dynamicValue = isDark ? value.dynamic.dark : value.dynamic.light;
    return dynamicValue;
  }
  return value;
}, "resolveDynamicValue");
var animatedStyleKey = {
  transform: true,
  opacity: true
};
var colorStyleKey = {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderTopColor: true,
  borderBottomColor: true
};
var costlyToAnimateStyleKey = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderBottomWidth: true,
  ...colorStyleKey
};
var AnimatedView = Animated_default2.View;
var AnimatedText = Animated_default2.Text;
function useAnimatedNumber(initial) {
  const state = React29.useRef(null);
  if (!state.current) {
    state.current = {
      composite: null,
      val: new Animated_default2.Value(initial),
      strategy: {
        type: "spring"
      }
    };
  }
  return {
    getInstance() {
      return state.current.val;
    },
    getValue() {
      return state.current.val["_value"];
    },
    stop() {
      state.current.composite?.stop();
      state.current.composite = null;
    },
    setValue(next, {
      type,
      ...config2
    } = {
      type: "spring"
    }, onFinish) {
      const val = state.current.val;
      const handleFinish = onFinish ? ({
        finished
      }) => finished ? onFinish() : null : void 0;
      if (type === "direct") {
        val.setValue(next);
      } else if (type === "spring") {
        state.current.composite?.stop();
        const composite = Animated_default2.spring(val, {
          ...config2,
          toValue: next,
          useNativeDriver: isFabric
        });
        composite.start(handleFinish);
        state.current.composite = composite;
      } else {
        state.current.composite?.stop();
        const composite = Animated_default2.timing(val, {
          ...config2,
          toValue: next,
          useNativeDriver: isFabric
        });
        composite.start(handleFinish);
        state.current.composite = composite;
      }
    }
  };
}
__name(useAnimatedNumber, "useAnimatedNumber");
var useAnimatedNumberReaction = /* @__PURE__ */ __name(({
  value
}, onValue) => {
  const onChange = useEvent((current) => {
    onValue(current.value);
  });
  React29.useEffect(() => {
    const id2 = value.getInstance().addListener(onChange);
    return () => {
      value.getInstance().removeListener(id2);
    };
  }, [value, onChange]);
}, "useAnimatedNumberReaction");
var useAnimatedNumberStyle = /* @__PURE__ */ __name((value, getStyle) => {
  return getStyle(value.getInstance());
}, "useAnimatedNumberStyle");
var useAnimatedNumbersStyle = /* @__PURE__ */ __name((vals, getStyle) => {
  return getStyle(...vals.map((v) => v.getInstance()));
}, "useAnimatedNumbersStyle");
function createAnimations(animations, options) {
  const nativeDriver = options?.useNativeDriver ?? isFabric;
  return {
    isReactNative: true,
    inputStyle: "value",
    outputStyle: "inline",
    avoidReRenders: true,
    animations,
    needsCustomComponent: true,
    View: AnimatedView,
    Text: AnimatedText,
    useAnimatedNumber,
    useAnimatedNumberReaction,
    useAnimatedNumberStyle,
    useAnimatedNumbersStyle,
    usePresence,
    ResetPresence,
    useAnimations: /* @__PURE__ */ __name(({
      props,
      onDidAnimate,
      style,
      componentState,
      presence,
      useStyleEmitter
    }) => {
      const isDisabled2 = isWeb && componentState.unmounted === true;
      const isExiting = presence?.[0] === false;
      const sendExitComplete = presence?.[1];
      const [, themeState] = useThemeWithState({});
      const isDark = themeState?.scheme === "dark" || themeState?.name?.startsWith("dark");
      const animateStyles = React29.useRef({});
      const animatedTranforms = React29.useRef([]);
      const animationsState = React29.useRef(/* @__PURE__ */ new WeakMap());
      const exitCycleIdRef = React29.useRef(0);
      const exitCompletedRef = React29.useRef(false);
      const wasExitingRef = React29.useRef(false);
      const justStartedExiting = isExiting && !wasExitingRef.current;
      const justStoppedExiting = !isExiting && wasExitingRef.current;
      if (justStartedExiting) {
        exitCycleIdRef.current++;
        exitCompletedRef.current = false;
      }
      if (justStoppedExiting) {
        exitCycleIdRef.current++;
      }
      const animateOnly = props.animateOnly || [];
      const hasTransitionOnly = !!props.animateOnly;
      const isEntering = !!componentState.unmounted;
      const wasEnteringRef = React29.useRef(isEntering);
      const justFinishedEntering = wasEnteringRef.current && !isEntering;
      React29.useEffect(() => {
        wasEnteringRef.current = isEntering;
      });
      const args = [JSON.stringify(style), componentState, isExiting, !!onDidAnimate, isDark, justFinishedEntering, hasTransitionOnly];
      const res = React29.useMemo(() => {
        const runners = [];
        const completions = [];
        const animationState = isExiting ? "exit" : isEntering || justFinishedEntering ? "enter" : "default";
        const nonAnimatedStyle = {};
        for (const key in style) {
          const rawVal = style[key];
          const val = resolveDynamicValue(rawVal, isDark);
          if (val === void 0) continue;
          if (isDisabled2) {
            continue;
          }
          if (animatedStyleKey[key] == null && !costlyToAnimateStyleKey[key]) {
            nonAnimatedStyle[key] = val;
            continue;
          }
          if (hasTransitionOnly && !animateOnly.includes(key)) {
            nonAnimatedStyle[key] = val;
            continue;
          }
          if (key !== "transform") {
            animateStyles.current[key] = update2(key, animateStyles.current[key], val);
            continue;
          }
          if (!val) continue;
          if (typeof val === "string") {
            console.warn(`Warning: Tamagui can't animate string transforms yet!`);
            continue;
          }
          for (const [index, transform] of val.entries()) {
            if (!transform) continue;
            const tkey = Object.keys(transform)[0];
            const currentTransform = animatedTranforms.current[index]?.[tkey];
            animatedTranforms.current[index] = {
              [tkey]: update2(tkey, currentTransform, transform[tkey])
            };
            animatedTranforms.current = [...animatedTranforms.current];
          }
        }
        const animatedTransformStyle = animatedTranforms.current.length > 0 ? {
          transform: animatedTranforms.current.map((r) => {
            const key = Object.keys(r)[0];
            const val = animationsState.current.get(r[key])?.interpolation || r[key];
            return {
              [key]: val
            };
          })
        } : {};
        const animatedStyle = {
          ...Object.fromEntries(Object.entries(animateStyles.current).map(([k, v]) => [k, animationsState.current.get(v)?.interpolation || v])),
          ...animatedTransformStyle
        };
        return {
          runners,
          completions,
          style: [nonAnimatedStyle, animatedStyle]
        };
        function update2(key, animated, valIn) {
          const isColorStyleKey = colorStyleKey[key];
          const [val, type] = isColorStyleKey ? [0, void 0] : getValue2(valIn);
          let animateToValue = val;
          const value = animated || new Animated_default2.Value(val);
          const curInterpolation = animationsState.current.get(value);
          let interpolateArgs;
          if (type) {
            interpolateArgs = getInterpolated(curInterpolation?.current ?? value["_value"], val, type);
            animationsState.current.set(value, {
              interpolation: value.interpolate(interpolateArgs),
              current: val
            });
          }
          if (isColorStyleKey) {
            animateToValue = curInterpolation?.animateToValue ? 0 : 1;
            interpolateArgs = getColorInterpolated(
              curInterpolation?.current,
              // valIn is the next color
              valIn,
              animateToValue
            );
            animationsState.current.set(value, {
              current: valIn,
              interpolation: value.interpolate(interpolateArgs),
              animateToValue: curInterpolation?.animateToValue ? 0 : 1
            });
          }
          if (value) {
            const animationConfig = getAnimationConfig(key, animations, props.transition, animationState);
            let resolve;
            const promise = new Promise((res2) => {
              resolve = res2;
            });
            completions.push(promise);
            runners.push(() => {
              value.stopAnimation();
              function getAnimation() {
                return Animated_default2[animationConfig.type || "spring"](value, {
                  toValue: animateToValue,
                  useNativeDriver: nativeDriver,
                  ...animationConfig
                });
              }
              __name(getAnimation, "getAnimation");
              const animation = animationConfig.delay ? Animated_default2.sequence([Animated_default2.delay(animationConfig.delay), getAnimation()]) : getAnimation();
              animation.start(({
                finished
              }) => {
                if (finished || isExiting) {
                  resolve();
                }
              });
            });
          }
          if (process.env.NODE_ENV === "development") {
            if (props["debug"] === "verbose") {
              console.info(" \u{1F4A0} animate", key, `from (${value["_value"]}) to`, valIn, `(${val})`, "type", type, "interpolate", interpolateArgs);
            }
          }
          return value;
        }
        __name(update2, "update");
      }, args);
      React29.useEffect(() => {
        wasExitingRef.current = isExiting;
      });
      useIsomorphicLayoutEffect(() => {
        res.runners.forEach((r) => r());
        const cycleId = exitCycleIdRef.current;
        if (res.completions.length === 0) {
          onDidAnimate?.();
          if (isExiting && !exitCompletedRef.current) {
            exitCompletedRef.current = true;
            sendExitComplete?.();
          }
          return;
        }
        let cancel = false;
        Promise.all(res.completions).then(() => {
          if (cancel) return;
          if (isExiting && cycleId !== exitCycleIdRef.current) return;
          if (isExiting && exitCompletedRef.current) return;
          onDidAnimate?.();
          if (isExiting) {
            exitCompletedRef.current = true;
            sendExitComplete?.();
          }
        });
        return () => {
          cancel = true;
        };
      }, args);
      useStyleEmitter?.((nextStyle) => {
        for (const key in nextStyle) {
          const rawVal = nextStyle[key];
          const val = resolveDynamicValue(rawVal, isDark);
          if (val === void 0) continue;
          if (key === "transform" && Array.isArray(val)) {
            for (const [index, transform] of val.entries()) {
              if (!transform) continue;
              const tkey = Object.keys(transform)[0];
              const currentTransform = animatedTranforms.current[index]?.[tkey];
              animatedTranforms.current[index] = {
                [tkey]: update2(tkey, currentTransform, transform[tkey])
              };
            }
          } else if (animatedStyleKey[key] != null || costlyToAnimateStyleKey[key]) {
            animateStyles.current[key] = update2(key, animateStyles.current[key], val);
          }
        }
        res.runners.forEach((r) => r());
        function update2(key, animated, valIn) {
          const isColor = colorStyleKey[key];
          const [numVal, type] = isColor ? [0, void 0] : getValue2(valIn);
          let animateToValue = numVal;
          const value = animated || new Animated_default2.Value(numVal);
          const curInterpolation = animationsState.current.get(value);
          if (type) {
            animationsState.current.set(value, {
              interpolation: value.interpolate(getInterpolated(curInterpolation?.current ?? value["_value"], numVal, type)),
              current: numVal
            });
          }
          if (isColor) {
            animateToValue = curInterpolation?.animateToValue ? 0 : 1;
            animationsState.current.set(value, {
              current: valIn,
              interpolation: value.interpolate(getColorInterpolated(curInterpolation?.current, valIn, animateToValue)),
              animateToValue: curInterpolation?.animateToValue ? 0 : 1
            });
          }
          const animationConfig = getAnimationConfig(key, animations, props.transition, "default");
          res.runners.push(() => {
            value.stopAnimation();
            const anim = Animated_default2[animationConfig.type || "spring"](value, {
              toValue: animateToValue,
              useNativeDriver: nativeDriver,
              ...animationConfig
            });
            (animationConfig.delay ? Animated_default2.sequence([Animated_default2.delay(animationConfig.delay), anim]) : anim).start();
          });
          return value;
        }
        __name(update2, "update");
      });
      if (process.env.NODE_ENV === "development") {
        if (props["debug"] === "verbose") {
          console.info(`Animated`, {
            response: res,
            inputStyle: style,
            isExiting
          });
        }
      }
      return res;
    }, "useAnimations")
  };
}
__name(createAnimations, "createAnimations");
function getColorInterpolated(currentColor, nextColor, animateToValue) {
  const inputRange = [0, 1];
  const outputRange = [currentColor ? currentColor : nextColor, nextColor];
  if (animateToValue === 0) {
    outputRange.reverse();
  }
  return {
    inputRange,
    outputRange
  };
}
__name(getColorInterpolated, "getColorInterpolated");
function getInterpolated(current, next, postfix = "deg") {
  if (next === current) {
    current = next - 1e-9;
  }
  const inputRange = [current, next];
  const outputRange = [`${current}${postfix}`, `${next}${postfix}`];
  if (next < current) {
    inputRange.reverse();
    outputRange.reverse();
  }
  return {
    inputRange,
    outputRange
  };
}
__name(getInterpolated, "getInterpolated");
function getAnimationConfig(key, animations, transition2, animationState = "default") {
  const normalized = normalizeTransition(transition2);
  const shortKey = transformShorthands[key];
  const propAnimation = normalized.properties[key] ?? normalized.properties[shortKey];
  let animationType = null;
  let extraConf = {};
  if (typeof propAnimation === "string") {
    animationType = propAnimation;
  } else if (propAnimation && typeof propAnimation === "object") {
    animationType = propAnimation.type || getEffectiveAnimation(normalized, animationState);
    extraConf = propAnimation;
  } else {
    animationType = getEffectiveAnimation(normalized, animationState);
  }
  if (normalized.delay && !extraConf.delay) {
    extraConf = {
      ...extraConf,
      delay: normalized.delay
    };
  }
  const found = animationType ? animations[animationType] : {};
  return {
    ...found,
    // Apply global spring config overrides (from transition={['bouncy', { stiffness: 1000 }]})
    ...normalized.config,
    // Property-specific config takes highest precedence
    ...extraConf
  };
}
__name(getAnimationConfig, "getAnimationConfig");
var transformShorthands = {
  x: "translateX",
  y: "translateY",
  translateX: "x",
  translateY: "y"
};
function getValue2(input, isColor = false) {
  if (typeof input !== "string") {
    return [input];
  }
  const [_, number, after] = input.match(/([-0-9]+)(deg|%|px)/) ?? [];
  return [+number, after];
}
__name(getValue2, "getValue");

// ../common/tamagui.config.ts
var config = createTamagui({
  ...defaultConfig,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: "#000"
    },
    dark: {
      bg: "#111",
      color: "#fff"
    },
    // sub-themes are a powerful feature of tamagui, explained later in the docs
    // user theme like <Theme name="dark"><Theme name="blue">
    // or just <Theme name="dark_blue">
    dark_blue: {
      bg: "darkblue",
      color: "#fff"
    }
  },
  animations: createAnimations({
    bouncy: {
      damping: 10,
      mass: 0.9,
      stiffness: 100
    },
    lazy: {
      damping: 18,
      stiffness: 50
    },
    quick: {
      damping: 20,
      mass: 1.2,
      stiffness: 250
    }
  }),
  media: {
    ...defaultConfig.media
    // add your own media queries here, if wanted
  }
});
export {
  config
};
