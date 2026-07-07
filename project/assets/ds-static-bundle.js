/* ClassScout NYC — static component bundle (generated; do not edit).
   Exposes window.CSDS with every component. No runtime fetch/transpile needed. */
(function () {
  var registry = {};
  var cache = {};
  function norm(path) {
    var parts = [];
    path.split('/').forEach(function (p) {
      if (p === '' || p === '.') return;
      if (p === '..') parts.pop(); else parts.push(p);
    });
    return parts.join('/');
  }
  function makeRequire(fromDir) {
    return function (spec) {
      if (spec === 'react') return window.React;
      var key = norm(spec.charAt(0) === '.' ? fromDir + '/' + spec : spec);
      if (cache[key]) return cache[key].exports;
      var fn = registry[key];
      if (!fn) throw new Error('CSDS: module not found: ' + key);
      var module = { exports: {} };
      cache[key] = module;
      fn(makeRequire(key.split('/').slice(0, -1).join('/')), module, module.exports);
      return module.exports;
    };
  }

  registry["components/core/Icon.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PATHS = {
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "calendar": "<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <polyline points=\"12 6 12 12 16 14\" />",
  "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\" /> <path d=\"m9 11 3 3L22 4\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> <path d=\"M4 17v2\" /> <path d=\"M5 18H3\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" /> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /> <path d=\"M8 16H3v5\" />",
  "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\" /> <line x1=\"4\" x2=\"4\" y1=\"22\" y2=\"15\" />",
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />",
  "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /> <line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /> <line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /> <line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /> <line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /> <line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /> <line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /> <line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /> <line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "map": "<path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\" /> <path d=\"M15 5.764v15\" /> <path d=\"M9 3.236v15\" />",
  "list": "<path d=\"M3 12h.01\" /> <path d=\"M3 18h.01\" /> <path d=\"M3 6h.01\" /> <path d=\"M8 12h13\" /> <path d=\"M8 18h13\" /> <path d=\"M8 6h13\" />",
  "circle-user": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" /> <path d=\"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "columns-2": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"M12 3v18\" />",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" /> <circle cx=\"6\" cy=\"12\" r=\"3\" /> <circle cx=\"18\" cy=\"19\" r=\"3\" /> <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /> <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />",
  "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "locate-fixed": "<line x1=\"2\" x2=\"5\" y1=\"12\" y2=\"12\" /> <line x1=\"19\" x2=\"22\" y1=\"12\" y2=\"12\" /> <line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"5\" /> <line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\" /> <circle cx=\"12\" cy=\"12\" r=\"7\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2v2\" /> <path d=\"M12 20v2\" /> <path d=\"m4.93 4.93 1.41 1.41\" /> <path d=\"m17.66 17.66 1.41 1.41\" /> <path d=\"M2 12h2\" /> <path d=\"M20 12h2\" /> <path d=\"m6.34 17.66-1.41 1.41\" /> <path d=\"m19.07 4.93-1.41 1.41\" />",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />"
};

/** Calm 1.75px-stroke outline icon (Lucide copies in assets/icons/). */
function Icon(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 1.75 : _ref$strokeWidth,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    filled = _ref.filled,
    style = _ref.style;
  var body = PATHS[name] || '';
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : 'none',
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: _objectSpread({
      flexShrink: 0
    }, style),
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: body
    }
  });
}
  };

  registry["components/core/Button.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var VARIANTS = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid transparent',
    hoverBg: 'var(--primary-dark)'
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-text)',
    border: '1px solid transparent',
    hoverBg: 'var(--secondary-dark)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--primary-dark)',
    border: '1px solid var(--border-strong)',
    hoverBg: 'var(--chip-bg)'
  },
  danger: {
    background: 'var(--error)',
    color: 'var(--pure-white)',
    border: '1px solid transparent',
    hoverBg: 'var(--error-dark)'
  }
};
var SIZES = {
  sm: {
    padding: '8px 14px',
    font: '500 14px/1 var(--font-ui)',
    minHeight: 36
  },
  md: {
    padding: '11px 18px',
    font: '500 15px/1 var(--font-ui)',
    minHeight: 44
  },
  lg: {
    padding: '14px 24px',
    font: '500 16px/1 var(--font-ui)',
    minHeight: 52
  }
};
function Button(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    icon = _ref.icon,
    iconRight = _ref.iconRight,
    fullWidth = _ref.fullWidth,
    disabled = _ref.disabled,
    href = _ref.href,
    onClick = _ref.onClick,
    ariaLabel = _ref.ariaLabel,
    style = _ref.style;
  var v = VARIANTS[variant] || VARIANTS.primary;
  var s = SIZES[size] || SIZES.md;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var Tag = href ? 'a' : 'button';
  return /*#__PURE__*/_react["default"].createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled && !href ? true : undefined,
    "aria-label": ariaLabel,
    className: "cs-focusable",
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: _objectSpread({
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      background: hover && !disabled ? v.hoverBg : v.background,
      color: v.color,
      border: v.border,
      borderRadius: 'var(--radius-button)',
      padding: s.padding,
      font: s.font,
      minHeight: s.minHeight,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      textDecoration: 'none',
      transition: 'background var(--duration-quick) var(--ease-calm)',
      boxSizing: 'border-box',
      whiteSpace: 'nowrap'
    }, style)
  }, icon ? /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 17
  }) : null, /*#__PURE__*/_react["default"].createElement("span", null, children), iconRight ? /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: iconRight,
    size: size === 'sm' ? 15 : 17
  }) : null);
}
  };

  registry["components/core/FilterChip.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterChip = FilterChip;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function FilterChip(_ref) {
  var label = _ref.label,
    selected = _ref.selected,
    count = _ref.count,
    removable = _ref.removable,
    onClick = _ref.onClick,
    icon = _ref.icon,
    style = _ref.style;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: "cs-focusable",
    "aria-pressed": removable ? undefined : !!selected,
    "aria-label": removable ? 'Remove filter: ' + label : undefined,
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 14px',
      minHeight: 36,
      borderRadius: 'var(--radius-chip)',
      font: 'var(--text-meta-medium)',
      background: selected ? 'var(--primary)' : hover ? 'var(--chip-bg)' : 'var(--bg-card)',
      color: selected ? 'var(--text-on-primary)' : 'var(--text-primary)',
      border: selected ? '1px solid var(--primary)' : '1px solid var(--border-strong)',
      cursor: 'pointer',
      transition: 'background var(--duration-quick) var(--ease-calm)',
      maxWidth: '100%',
      flexShrink: 0
    }, style)
  }, icon ? /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: icon,
    size: 14
  }) : null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, label), typeof count === 'number' ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      opacity: 0.75,
      fontWeight: 400
    }
  }, count) : null, removable ? /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "x",
    size: 13
  }) : null);
}
  };

  registry["components/core/SaveButton.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveButton = SaveButton;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function SaveButton(_ref) {
  var saved = _ref.saved,
    onToggle = _ref.onToggle,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel,
    style = _ref.style;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onToggle,
    className: "cs-focusable",
    "aria-pressed": !!saved,
    "aria-label": saved ? 'Saved — remove from saved' : 'Save this activity to compare later',
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      minWidth: showLabel ? undefined : 'var(--tap-target)',
      minHeight: showLabel ? 36 : 'var(--tap-target)',
      padding: showLabel ? '8px 14px' : 0,
      borderRadius: 'var(--radius-chip)',
      font: 'var(--text-meta-medium)',
      background: saved ? 'var(--chip-bg)' : hover ? 'var(--bg-sunken)' : 'var(--bg-card)',
      color: saved ? 'var(--primary-dark)' : 'var(--text-secondary)',
      border: saved ? '1px solid var(--primary)' : '1px solid var(--border-strong)',
      cursor: 'pointer',
      transition: 'all var(--duration-quick) var(--ease-calm)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "bookmark",
    size: 15,
    filled: !!saved,
    color: saved ? 'var(--primary)' : 'currentColor'
  }), showLabel ? /*#__PURE__*/_react["default"].createElement("span", null, saved ? 'Saved' : 'Save') : null);
}
  };

  registry["components/core/CompareButton.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompareButton = CompareButton;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function CompareButton(_ref) {
  var comparing = _ref.comparing,
    onToggle = _ref.onToggle,
    count = _ref.count,
    style = _ref.style;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onToggle,
    className: "cs-focusable",
    "aria-pressed": !!comparing,
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '8px 14px',
      minHeight: 36,
      borderRadius: 'var(--radius-chip)',
      font: 'var(--text-meta-medium)',
      background: comparing ? 'var(--chip-bg)' : hover ? 'var(--bg-sunken)' : 'var(--bg-card)',
      color: comparing ? 'var(--primary-dark)' : 'var(--text-secondary)',
      border: comparing ? '1px solid var(--primary)' : '1px solid var(--border-strong)',
      cursor: 'pointer',
      transition: 'all var(--duration-quick) var(--ease-calm)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "columns-2",
    size: 15
  }), /*#__PURE__*/_react["default"].createElement("span", null, comparing ? 'Comparing' : 'Compare'), typeof count === 'number' && count > 0 ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      background: 'var(--primary)',
      color: 'var(--text-on-primary)',
      borderRadius: 'var(--radius-chip)',
      padding: '2px 7px',
      minWidth: 18,
      textAlign: 'center'
    }
  }, count) : null);
}
  };

  registry["components/core/TextInput.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = TextInput;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TextInput(_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    error = _ref.error,
    placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    id = _ref.id,
    style = _ref.style;
  var inputId = id || (label ? 'ti-' + label.replace(/\W+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }, style)
  }, label ? /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--text-meta-medium)',
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/_react["default"].createElement("input", {
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    className: "cs-focusable",
    "aria-invalid": !!error,
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      background: 'var(--bg-card)',
      border: error ? '1.5px solid var(--error)' : '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-input)',
      padding: '11px 14px',
      minHeight: 'var(--tap-target)',
      boxSizing: 'border-box',
      width: '100%'
    }
  }), error ? /*#__PURE__*/_react["default"].createElement("span", {
    role: "alert",
    style: {
      font: 'var(--text-meta)',
      color: 'var(--error)'
    }
  }, error) : hint ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)'
    }
  }, hint) : null);
}
  };

  registry["components/core/SelectField.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = SelectField;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function SelectField(_ref) {
  var label = _ref.label,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    id = _ref.id,
    style = _ref.style;
  var selectId = id || (label ? 'sel-' + label.replace(/\W+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }, style)
  }, label ? /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: selectId,
    style: {
      font: 'var(--text-meta-medium)',
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: selectId,
    value: value,
    onChange: onChange,
    className: "cs-focusable",
    style: {
      font: 'var(--text-body)',
      color: value ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-input)',
      padding: '11px 38px 11px 14px',
      minHeight: 'var(--tap-target)',
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer'
    }
  }, placeholder ? /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, placeholder) : null, options.map(function (o) {
    var opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-secondary)",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
  };

  registry["components/trust/TrustBadge.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrustBadge = TrustBadge;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §9.1 — labels only with defined meanings. */
var KINDS = {
  'official-source': {
    label: 'Official source',
    bg: 'var(--badge-trust-bg)',
    color: 'var(--badge-trust-text)',
    icon: 'circle-check-big'
  },
  'public-source': {
    label: 'Public source',
    bg: 'var(--bg-sunken)',
    color: 'var(--text-secondary)',
    icon: 'info'
  },
  'provider-claimed': {
    label: 'Provider claimed',
    bg: 'var(--badge-trust-bg)',
    color: 'var(--badge-trust-text)',
    icon: 'circle-check-big'
  },
  'recently-checked': {
    label: 'Recently checked',
    bg: 'var(--badge-trust-bg)',
    color: 'var(--badge-trust-text)',
    icon: 'clock'
  },
  'price-estimate': {
    label: 'Price estimate',
    bg: 'var(--badge-estimate-bg)',
    color: 'var(--badge-estimate-text)',
    icon: 'circle-alert'
  },
  'schedule-estimate': {
    label: 'Schedule estimate',
    bg: 'var(--badge-estimate-bg)',
    color: 'var(--badge-estimate-text)',
    icon: 'calendar'
  },
  'age-not-confirmed': {
    label: 'Age not confirmed',
    bg: 'var(--badge-estimate-bg)',
    color: 'var(--badge-estimate-text)',
    icon: 'info'
  },
  'source-not-confirmed': {
    label: 'Source not confirmed',
    bg: 'var(--badge-estimate-bg)',
    color: 'var(--badge-estimate-text)',
    icon: 'circle-alert'
  },
  'reported-outdated': {
    label: 'Reported outdated',
    bg: 'var(--error-soft)',
    color: 'var(--badge-error-text)',
    icon: 'flag'
  }
};
function TrustBadge(_ref) {
  var _ref$kind = _ref.kind,
    kind = _ref$kind === void 0 ? 'public-source' : _ref$kind,
    label = _ref.label,
    _ref$showIcon = _ref.showIcon,
    showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
    style = _ref.style;
  var k = KINDS[kind] || KINDS['public-source'];
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--radius-chip)',
      font: 'var(--text-badge)',
      background: k.bg,
      color: k.color,
      whiteSpace: 'nowrap'
    }, style)
  }, showIcon ? /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: k.icon,
    size: 12
  }) : null, label || k.label);
}
  };

  registry["components/trust/PriceEstimateLabel.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceEstimateLabel = PriceEstimateLabel;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §36.6 price copy: Free | Estimated from $25 | Price not confirmed | … */
function PriceEstimateLabel(_ref) {
  var _ref$status = _ref.status,
    status = _ref$status === void 0 ? 'estimated' : _ref$status,
    amount = _ref.amount,
    _ref$unit = _ref.unit,
    unit = _ref$unit === void 0 ? 'session' : _ref$unit,
    note = _ref.note,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    style = _ref.style;
  var big = size === 'lg';
  var text;
  if (status === 'free') text = 'Free';else if (status === 'confirmed') text = amount + (unit ? '/' + unit : '');else if (status === 'unknown') text = 'Price not confirmed';else text = 'Estimated from ' + amount + (unit ? '/' + unit : '');
  var defaultNote = status === 'estimated' ? 'confirm with provider' : status === 'unknown' ? 'check provider website' : null;
  var showNote = note === null ? null : note || defaultNote;
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap',
      minWidth: 0
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: big ? '600 20px/1.3 var(--font-ui)' : 'var(--text-meta-medium)',
      color: status === 'free' ? 'var(--badge-trust-text)' : 'var(--text-primary)'
    }
  }, text), showNote ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      color: 'var(--badge-estimate-text)',
      background: 'var(--badge-estimate-bg)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-chip)'
    }
  }, showNote) : null);
}
  };

  registry["components/trust/LastCheckedLabel.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LastCheckedLabel = LastCheckedLabel;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function LastCheckedLabel(_ref) {
  var date = _ref.date,
    source = _ref.source,
    stale = _ref.stale,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      font: 'var(--text-meta)',
      color: stale ? 'var(--badge-estimate-text)' : 'var(--text-secondary)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "clock",
    size: 13,
    style: {
      alignSelf: 'center'
    }
  }), /*#__PURE__*/_react["default"].createElement("span", null, date ? 'Last checked ' + date : 'Not yet checked', source ? ' · Source: ' + source : '', stale ? ' · Details may have changed' : ''));
}
  };

  registry["components/trust/ReportOutdatedLink.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportOutdatedLink = ReportOutdatedLink;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ReportOutdatedLink(_ref) {
  var _ref$href = _ref.href,
    href = _ref$href === void 0 ? '#' : _ref$href,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'Report outdated info' : _ref$label,
    onClick = _ref.onClick,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    onClick: onClick,
    className: "cs-focusable",
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      minHeight: 32,
      padding: '4px 0'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "flag",
    size: 13
  }), label);
}
  };

  registry["components/trust/SourceBlock.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceBlock = SourceBlock;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _ReportOutdatedLink = require("./ReportOutdatedLink.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §8.5 — the detail-page source block. */
function SourceBlock(_ref) {
  var _ref$sourceType = _ref.sourceType,
    sourceType = _ref$sourceType === void 0 ? 'Provider website' : _ref$sourceType,
    sourceUrl = _ref.sourceUrl,
    lastChecked = _ref.lastChecked,
    _ref$priceStatus = _ref.priceStatus,
    priceStatus = _ref$priceStatus === void 0 ? 'Estimate' : _ref$priceStatus,
    _ref$scheduleStatus = _ref.scheduleStatus,
    scheduleStatus = _ref$scheduleStatus === void 0 ? 'Needs provider confirmation' : _ref$scheduleStatus,
    _ref$reportHref = _ref.reportHref,
    reportHref = _ref$reportHref === void 0 ? '#' : _ref$reportHref,
    style = _ref.style;
  var Row = function Row(_ref2) {
    var label = _ref2.label,
      value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        font: 'var(--text-meta)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: 'var(--text-secondary)',
        minWidth: 118
      }
    }, label), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: 'var(--text-primary)',
        fontWeight: 500
      }
    }, value));
  };
  return /*#__PURE__*/_react["default"].createElement("section", {
    "aria-label": "Information source",
    style: _objectSpread({
      background: 'var(--bg-sunken)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      font: 'var(--text-meta-medium)',
      color: 'var(--text-secondary)',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 12
    }
  }, "Information source"), /*#__PURE__*/_react["default"].createElement(Row, {
    label: "Source type",
    value: sourceUrl ? /*#__PURE__*/_react["default"].createElement("a", {
      href: sourceUrl,
      className: "cs-focusable",
      style: {
        color: 'var(--primary-dark)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, sourceType, " ", /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      name: "external-link",
      size: 12
    })) : sourceType
  }), /*#__PURE__*/_react["default"].createElement(Row, {
    label: "Last checked",
    value: lastChecked || 'Not yet checked'
  }), /*#__PURE__*/_react["default"].createElement(Row, {
    label: "Price status",
    value: priceStatus
  }), /*#__PURE__*/_react["default"].createElement(Row, {
    label: "Schedule status",
    value: scheduleStatus
  }), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: '2px 0 0'
    }
  }, "Always confirm final details directly with the provider before attending."), /*#__PURE__*/_react["default"].createElement(_ReportOutdatedLink.ReportOutdatedLink, {
    href: reportHref
  }));
}
  };

  registry["components/search/HeroSearchPanel.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroSearchPanel = HeroSearchPanel;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../core/Button.jsx");
var _SelectField = require("../core/SelectField.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* v2 §6.1 — primary fields: child age, location, date, activity type, budget. */
var DEFAULT_FIELDS = [{
  id: 'age',
  label: 'Child age',
  placeholder: 'Any age',
  options: ['0–2', '3–5', '5–8', '6–10', '11–14', '15–17']
}, {
  id: 'area',
  label: 'Neighbourhood',
  placeholder: 'All of NYC',
  options: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']
}, {
  id: 'date',
  label: 'Date',
  placeholder: 'Any time',
  options: ['Today', 'Tomorrow', 'This week', 'This weekend']
}, {
  id: 'type',
  label: 'Activity type',
  placeholder: 'All types',
  options: ['Class', 'Camp', 'Drop-in', 'Event', 'Birthday', 'Meet-up']
}, {
  id: 'budget',
  label: 'Budget',
  placeholder: 'Any budget',
  options: ['Free', 'Low-cost', 'Under $50', '$50+']
}];
function HeroSearchPanel(_ref) {
  var _ref$fields = _ref.fields,
    fields = _ref$fields === void 0 ? DEFAULT_FIELDS : _ref$fields,
    _ref$buttonLabel = _ref.buttonLabel,
    buttonLabel = _ref$buttonLabel === void 0 ? 'Show activities' : _ref$buttonLabel,
    _ref$secondaryLabel = _ref.secondaryLabel,
    secondaryLabel = _ref$secondaryLabel === void 0 ? 'Let Scout guide me' : _ref$secondaryLabel,
    onSearch = _ref.onSearch,
    onScout = _ref.onScout,
    _ref$trustLine = _ref.trustLine,
    trustLine = _ref$trustLine === void 0 ? 'Source-backed listings · Clear estimates · Confirm final details with providers' : _ref$trustLine,
    style = _ref.style;
  var _React$useState = _react["default"].useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    values = _React$useState2[0],
    setValues = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      onSearch && onSearch(values);
    },
    style: _objectSpread({
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'clamp(16px, 2.5vw, 24px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 'var(--space-3)'
    }
  }, fields.map(function (f) {
    return /*#__PURE__*/_react["default"].createElement(_SelectField.SelectField, {
      key: f.id,
      label: f.label,
      placeholder: f.placeholder,
      options: f.options,
      value: values[f.id] || '',
      onChange: function onChange(e) {
        return setValues(function (v) {
          return _objectSpread(_objectSpread({}, v), {}, _defineProperty({}, f.id, e.target.value));
        });
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    icon: "search",
    size: "lg",
    style: {
      flex: '1 1 200px'
    }
  }, buttonLabel), secondaryLabel ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    size: "lg",
    icon: "sparkles",
    onClick: onScout,
    style: {
      flex: '1 1 200px'
    }
  }, secondaryLabel) : null), trustLine ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: 0,
      textAlign: 'center'
    }
  }, trustLine) : null);
}
  };

  registry["components/search/QuickStartCard.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickStartCard = QuickStartCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* v2 §16.2 quick-start scenarios. */
function QuickStartCard(_ref) {
  var label = _ref.label,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'search' : _ref$icon,
    onClick = _ref.onClick,
    href = _ref.href,
    style = _ref.style;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var Tag = href ? 'a' : 'button';
  return /*#__PURE__*/_react["default"].createElement(Tag, {
    href: href,
    onClick: onClick,
    className: "cs-focusable",
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      padding: '14px 16px',
      minHeight: 'var(--tap-target)',
      cursor: 'pointer',
      font: 'var(--text-body-medium)',
      color: 'var(--text-primary)',
      textAlign: 'left',
      textDecoration: 'none',
      transition: 'box-shadow var(--duration-gentle) var(--ease-calm)',
      boxSizing: 'border-box',
      width: '100%'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--primary)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/_react["default"].createElement("span", null, label));
}
  };

  registry["components/search/FilterSheet.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterSheet = FilterSheet;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
var _FilterChip = require("../core/FilterChip.jsx");
var _SelectField = require("../core/SelectField.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §5.4 required filters + §28.2 bottom sheet (mobile) / side sheet or rail (wide). */
var DEFAULT_SECTIONS = [{
  id: 'age',
  label: 'Child age',
  kind: 'select',
  placeholder: 'Any age',
  options: ['0–2', '3–5', '5–8', '6–10', '11–14', '15–17']
}, {
  id: 'area',
  label: 'Borough / neighbourhood',
  kind: 'select',
  placeholder: 'All of NYC',
  options: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']
}, {
  id: 'date',
  label: 'Date',
  kind: 'chips',
  options: ['Today', 'Tomorrow', 'This week', 'This weekend']
}, {
  id: 'price',
  label: 'Price',
  kind: 'chips',
  options: ['Free', 'Low-cost', 'Under $50', '$50+']
}, {
  id: 'type',
  label: 'Activity type',
  kind: 'chips',
  options: ['Class', 'Camp', 'Drop-in', 'Event', 'Birthday', 'Meet-up']
}, {
  id: 'setting',
  label: 'Indoor / outdoor',
  kind: 'chips',
  options: ['Indoor', 'Outdoor', 'Mixed']
}, {
  id: 'booking',
  label: 'Booking type',
  kind: 'chips',
  options: ['Drop-in', 'Registration required', 'Waitlist']
}, {
  id: 'confidence',
  label: 'Source confidence',
  kind: 'chips',
  options: ['Official source', 'Public source', 'Provider claimed']
}];
function FilterSheet(_ref) {
  var _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'sheet' : _ref$mode,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? true : _ref$open,
    _ref$sections = _ref.sections,
    sections = _ref$sections === void 0 ? DEFAULT_SECTIONS : _ref$sections,
    _ref$values = _ref.values,
    values = _ref$values === void 0 ? {} : _ref$values,
    onChange = _ref.onChange,
    onApply = _ref.onApply,
    onClear = _ref.onClear,
    onClose = _ref.onClose,
    resultCount = _ref.resultCount,
    style = _ref.style;
  if (!open) return null;
  var set = function set(id, val) {
    return onChange && onChange(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, id, val)));
  };
  var toggleChip = function toggleChip(id, opt) {
    var cur = values[id] || [];
    set(id, cur.includes(opt) ? cur.filter(function (x) {
      return x !== opt;
    }) : [].concat(_toConsumableArray(cur), [opt]));
  };
  var body = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Filters"), onClose ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    "aria-label": "Close filters",
    className: "cs-focusable",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      width: 'var(--tap-target)',
      height: 'var(--tap-target)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "x",
    size: 20
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      overflowY: 'auto',
      flex: 1,
      paddingBottom: 8
    }
  }, sections.map(function (s) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: s.id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, s.kind === 'select' ? /*#__PURE__*/_react["default"].createElement(_SelectField.SelectField, {
      label: s.label,
      placeholder: s.placeholder,
      options: s.options,
      value: values[s.id] || '',
      onChange: function onChange(e) {
        return set(s.id, e.target.value);
      }
    }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        font: 'var(--text-meta-medium)',
        color: 'var(--text-primary)'
      }
    }, s.label), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, s.options.map(function (opt) {
      return /*#__PURE__*/_react["default"].createElement(_FilterChip.FilterChip, {
        key: opt,
        label: opt,
        selected: (values[s.id] || []).includes(opt),
        onClick: function onClick() {
          return toggleChip(s.id, opt);
        }
      });
    }))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, onClear ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost",
    onClick: onClear
  }, "Clear all") : null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: onApply,
    style: {
      flex: 1
    }
  }, typeof resultCount === 'number' ? 'Show ' + resultCount + ' activities' : 'Apply filters')));
  if (mode === 'rail') {
    return /*#__PURE__*/_react["default"].createElement("aside", {
      "aria-label": "Filters",
      style: _objectSpread({
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        width: 'var(--rail-filter-w)',
        maxWidth: '100%',
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--space-5)',
        boxSizing: 'border-box'
      }, style)
    }, body);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Filters",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-modal) var(--radius-modal) 0 0',
      boxShadow: 'var(--shadow-sheet)',
      padding: 'var(--space-5)',
      maxHeight: '85dvh',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      boxSizing: 'border-box'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--border-strong)',
      margin: '0 auto'
    }
  }), body));
}
  };

  registry["components/listing/ActivityCard.jsx"] = function (require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityCard = ActivityCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
var _SaveButton = require("../core/SaveButton.jsx");
var _TrustBadge = require("../trust/TrustBadge.jsx");
var _PriceEstimateLabel = require("../trust/PriceEstimateLabel.jsx");
var _LastCheckedLabel = require("../trust/LastCheckedLabel.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* v2 §7 — the card must answer: what, who for, where, when, cost, reliability, next step. */
function ActivityCard(_ref) {
  var image = _ref.image,
    _ref$imageAlt = _ref.imageAlt,
    imageAlt = _ref$imageAlt === void 0 ? '' : _ref$imageAlt,
    category = _ref.category,
    ages = _ref.ages,
    _ref$ageStatus = _ref.ageStatus,
    ageStatus = _ref$ageStatus === void 0 ? 'confirmed' : _ref$ageStatus,
    setting = _ref.setting,
    title = _ref.title,
    provider = _ref.provider,
    neighborhood = _ref.neighborhood,
    summary = _ref.summary,
    _ref$priceStatus = _ref.priceStatus,
    priceStatus = _ref$priceStatus === void 0 ? 'estimated' : _ref$priceStatus,
    price = _ref.price,
    _ref$priceUnit = _ref.priceUnit,
    priceUnit = _ref$priceUnit === void 0 ? 'session' : _ref$priceUnit,
    schedule = _ref.schedule,
    _ref$sourceKind = _ref.sourceKind,
    sourceKind = _ref$sourceKind === void 0 ? 'public-source' : _ref$sourceKind,
    lastChecked = _ref.lastChecked,
    sourceLabel = _ref.sourceLabel,
    stale = _ref.stale,
    saved = _ref.saved,
    onToggleSave = _ref.onToggleSave,
    onViewDetails = _ref.onViewDetails,
    providerHref = _ref.providerHref,
    onAskScout = _ref.onAskScout,
    compact = _ref.compact,
    style = _ref.style;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("article", {
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'box-shadow var(--duration-gentle) var(--ease-calm)',
      overflow: 'hidden',
      minWidth: 0
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: compact ? '5 / 2' : '16 / 9',
      background: 'var(--bg-sunken)'
    }
  }, image ? /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
      justifyContent: 'flex-end',
      color: 'var(--text-secondary)',
      padding: '44px 12px 14px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "map-pin",
    size: 20,
    color: "var(--border-strong)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)'
    }
  }, "Image not available from source")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 56,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, category ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      background: 'var(--overlay-scrim-dark)',
      color: 'var(--text-on-dark)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-chip)',
      whiteSpace: 'nowrap'
    }
  }, category) : null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      background: 'var(--overlay-scrim-light)',
      color: ages ? 'var(--text-primary)' : 'var(--badge-estimate-text)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-chip)',
      whiteSpace: 'nowrap'
    }
  }, ages ? 'Ages ' + ages + (ageStatus === 'estimated' ? ' (est.)' : '') : 'Age not confirmed')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_SaveButton.SaveButton, {
    saved: saved,
    onToggle: onToggleSave,
    showLabel: false,
    style: {
      background: 'var(--overlay-scrim-light)'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 'var(--card-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      font: 'var(--text-card-title)',
      color: 'var(--text-primary)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)'
    }
  }, provider ? /*#__PURE__*/_react["default"].createElement("span", null, provider) : null, neighborhood || setting ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "map-pin",
    size: 13,
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/_react["default"].createElement("span", null, [neighborhood, setting].filter(Boolean).join(' · '))) : null), summary && !compact ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, summary) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_PriceEstimateLabel.PriceEstimateLabel, {
    status: priceStatus,
    amount: price,
    unit: priceUnit,
    note: null
  }), schedule ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "calendar",
    size: 13
  }), schedule) : null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_TrustBadge.TrustBadge, {
    kind: sourceKind
  }), /*#__PURE__*/_react["default"].createElement(_LastCheckedLabel.LastCheckedLabel, {
    date: lastChecked,
    source: sourceLabel,
    stale: stale
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      paddingTop: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    onClick: onViewDetails,
    style: {
      flex: '1 1 auto'
    }
  }, "View details"), providerHref ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: "ghost",
    iconRight: "external-link",
    href: providerHref
  }, "Visit provider") : null, onAskScout ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: "ghost",
    icon: "sparkles",
    onClick: onAskScout,
    ariaLabel: 'Ask Scout about ' + title
  }, "Ask Scout") : null)));
}
  };

  registry["components/listing/DetailFactsTable.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailFactsTable = DetailFactsTable;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §8.3 key facts. `stacked` = mobile rows (v2 §17.2: no dense tables on mobile). */
function DetailFactsTable(_ref) {
  var _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? [] : _ref$rows,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Key facts' : _ref$title,
    stacked = _ref.stacked,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }, style)
  }, title ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      font: 'var(--text-meta-medium)',
      color: 'var(--text-secondary)',
      padding: '12px 20px',
      borderBottom: '1px solid var(--border-soft)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 12
    }
  }, title) : null, /*#__PURE__*/_react["default"].createElement("dl", {
    style: {
      margin: 0
    }
  }, rows.map(function (r, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: r.label,
      style: {
        display: 'grid',
        gridTemplateColumns: stacked ? '1fr' : 'minmax(120px, 160px) 1fr',
        gap: stacked ? 2 : 12,
        padding: stacked ? '10px 16px' : '12px 20px',
        borderBottom: i < rows.length - 1 ? '1px solid var(--border-soft)' : 'none',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/_react["default"].createElement("dt", {
      style: {
        font: 'var(--text-meta)',
        color: 'var(--text-secondary)'
      }
    }, r.label), /*#__PURE__*/_react["default"].createElement("dd", {
      style: {
        font: 'var(--text-body-medium)',
        color: 'var(--text-primary)',
        margin: 0,
        minWidth: 0
      }
    }, r.value));
  })));
}
  };

  registry["components/listing/ConfirmChecklist.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmChecklist = ConfirmChecklist;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §8.4 — required "what to confirm" checklist. */
var DEFAULT_ITEMS = ['Exact schedule', 'Current price', 'Age fit', 'Registration requirements', 'Cancellation / refund policy', 'Parent presence requirement', 'Supervision / safety policy', 'Accessibility or accommodation needs'];
function ConfirmChecklist(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? DEFAULT_ITEMS : _ref$items,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Check before booking' : _ref$title,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("section", {
    "aria-label": title,
    style: _objectSpread({
      background: 'var(--warning-soft)',
      border: '1px solid var(--border-warning)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-primary)',
      margin: '0 0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--warning)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "circle-alert",
    size: 18
  })), title), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '6px 16px'
    }
  }, items.map(function (t) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'baseline',
        font: 'var(--text-body)',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--warning)',
        flexShrink: 0,
        fontSize: 14
      }
    }, "\u2013"), t);
  })));
}
  };

  registry["components/scout/ScoutPromptCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoutPromptCard = ScoutPromptCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §16.4 + §10.5 privacy rule. */
function ScoutPromptCard(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Not sure where to start?' : _ref$title,
    _ref$body = _ref.body,
    body = _ref$body === void 0 ? "Tell Scout your child's age, area, schedule, budget, and interests. Scout will suggest options and explain what to confirm before booking." : _ref$body,
    _ref$buttonLabel = _ref.buttonLabel,
    buttonLabel = _ref$buttonLabel === void 0 ? 'Start with Scout' : _ref$buttonLabel,
    beta = _ref.beta,
    _ref$privacyNote = _ref.privacyNote,
    privacyNote = _ref$privacyNote === void 0 ? true : _ref$privacyNote,
    onStart = _ref.onStart,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("section", {
    style: _objectSpread({
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--chip-bg)',
      color: 'var(--primary-dark)',
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "sparkles",
    size: 17
  })), /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), beta ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      color: 'var(--text-secondary)',
      background: 'var(--bg-sunken)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-chip)'
    }
  }, "Beta") : null), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, body), beta ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Scout is in beta. It can help organise options, but details may change. Please confirm schedule, age fit, price, and availability with the provider.") : null, privacyNote ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Do not enter a child's full name. Scout only needs age, location, schedule, interests, and preferences.") : null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: onStart,
    icon: "sparkles",
    style: {
      alignSelf: 'flex-start'
    }
  }, buttonLabel));
}
  };

  registry["components/scout/ScoutResultCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoutResultCard = ScoutResultCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §10.3 — every Scout recommendation explains fit, evidence, uncertainty, confirmations. */
function ScoutResultCard(_ref) {
  var title = _ref.title,
    provider = _ref.provider,
    neighborhood = _ref.neighborhood,
    reason = _ref.reason,
    _ref$basedOn = _ref.basedOn,
    basedOn = _ref$basedOn === void 0 ? 'Based on available information from the listing source.' : _ref$basedOn,
    _ref$confirmItems = _ref.confirmItems,
    confirmItems = _ref$confirmItems === void 0 ? ['Current price', 'Exact time', 'Whether registration is required'] : _ref$confirmItems,
    onViewDetails = _ref.onViewDetails,
    providerHref = _ref.providerHref,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("article", {
    style: _objectSpread({
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderLeft: '3px solid var(--primary)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--primary-dark)',
      display: 'inline-flex',
      marginTop: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "sparkles",
    size: 16
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      font: 'var(--text-card-title)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), provider || neighborhood ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: '2px 0 0'
    }
  }, [provider, neighborhood].filter(Boolean).join(' · ')) : null)), reason ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "This may fit because ", reason) : null, basedOn ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, basedOn) : null, confirmItems && confirmItems.length ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-meta-medium)',
      color: 'var(--badge-estimate-text)'
    }
  }, "Check before booking"), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      margin: '4px 0 0',
      paddingLeft: 18,
      font: 'var(--text-meta)',
      color: 'var(--text-primary)',
      display: 'grid',
      gap: 2
    }
  }, confirmItems.map(function (c) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: c
    }, c);
  }))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    onClick: onViewDetails
  }, "View details"), providerHref ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: "ghost",
    iconRight: "external-link",
    href: providerHref
  }, "Visit provider") : null));
}
  };

  registry["components/states/EmptyState.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyState = EmptyState;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §6.3 — no dead-end empty states. */
function EmptyState(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'No matching activities found for this search' : _ref$title,
    _ref$body = _ref.body,
    body = _ref$body === void 0 ? 'Try expanding the neighbourhood, changing the date, or removing one filter.' : _ref$body,
    actions = _ref.actions,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'search' : _ref$icon,
    style = _ref.style;
  var acts = actions || [{
    label: 'Broaden search',
    primary: true
  }, {
    label: 'Try this weekend'
  }, {
    label: 'Ask Scout',
    icon: 'sparkles'
  }];
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: 'var(--space-7) var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-card)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--bg-sunken)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: 440
    }
  }, body), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 8
    }
  }, acts.map(function (a) {
    return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      key: a.label,
      size: "sm",
      variant: a.primary ? 'primary' : 'ghost',
      icon: a.icon,
      onClick: a.onClick
    }, a.label);
  })));
}
  };

  registry["components/states/ErrorState.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorState = ErrorState;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §6.5 — error states preserve trust. */
function ErrorState(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'We could not load these activities. Please refresh or try again.' : _ref$message,
    _ref$detail = _ref.detail,
    detail = _ref$detail === void 0 ? "If the problem continues, use Scout or browse this week\u2019s activities." : _ref$detail,
    onRetry = _ref.onRetry,
    actions = _ref.actions,
    timestamp = _ref.timestamp,
    style = _ref.style;
  var acts = actions || [];
  return /*#__PURE__*/_react["default"].createElement("div", {
    role: "alert",
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: 'var(--space-6) var(--space-5)',
      background: 'var(--error-soft)',
      border: '1px solid var(--border-error)',
      borderRadius: 'var(--radius-card)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--error)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "circle-alert",
    size: 26
  })), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-body-medium)',
      color: 'var(--text-primary)',
      margin: 0,
      maxWidth: 440
    }
  }, message), detail ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: 440
    }
  }, detail) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 4
    }
  }, onRetry ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    icon: "refresh-cw",
    onClick: onRetry
  }, "Retry") : null, acts.map(function (a) {
    return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      key: a.label,
      size: "sm",
      variant: "ghost",
      icon: a.icon,
      onClick: a.onClick,
      href: a.href
    }, a.label);
  })), timestamp ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      color: 'var(--text-secondary)'
    }
  }, "As of ", timestamp) : null);
}
  };

  registry["components/states/LoadingSkeleton.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSkeleton = LoadingSkeleton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Shimmer(_ref) {
  var _ref$w = _ref.w,
    w = _ref$w === void 0 ? '100%' : _ref$w,
    _ref$h = _ref.h,
    h = _ref$h === void 0 ? 14 : _ref$h,
    _ref$r = _ref.r,
    r = _ref$r === void 0 ? 6 : _ref$r,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: _objectSpread({
      display: 'block',
      width: w,
      height: h,
      borderRadius: r,
      background: 'linear-gradient(90deg, var(--bg-sunken) 25%, var(--skeleton-highlight) 50%, var(--bg-sunken) 75%)',
      backgroundSize: '200% 100%',
      animation: 'cs-shimmer 1.4s var(--ease-calm) infinite'
    }, style)
  });
}

/* v2 §6.4 — serious loading with skeleton cards. */
function LoadingSkeleton(_ref2) {
  var _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? 'card' : _ref2$variant,
    _ref2$count = _ref2.count,
    count = _ref2$count === void 0 ? 3 : _ref2$count,
    _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? "Loading source-backed listings for your filters\u2026" : _ref2$label,
    style = _ref2.style;
  var items = Array.from({
    length: count
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    "aria-busy": "true",
    role: "status",
    "aria-label": label || 'Loading',
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("style", null, '@keyframes cs-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }'), label ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)'
    }
  }, label) : null, variant === 'card' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
      gap: 16
    }
  }, items.map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/_react["default"].createElement(Shimmer, {
      h: 130,
      r: 0
    }), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/_react["default"].createElement(Shimmer, {
      w: "70%",
      h: 16
    }), /*#__PURE__*/_react["default"].createElement(Shimmer, {
      w: "50%",
      h: 12
    }), /*#__PURE__*/_react["default"].createElement(Shimmer, {
      w: "90%",
      h: 12
    }), /*#__PURE__*/_react["default"].createElement(Shimmer, {
      w: "40%",
      h: 12
    })));
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(Shimmer, {
      key: i,
      w: i % 3 === 2 ? '60%' : '100%'
    });
  })));
}
  };

  registry["components/navigation/TopNav.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopNav = TopNav;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §35.1 — one row, ≤6 links + Ask Scout CTA. Collapses to logo + menu below `collapseAt`. */
var DEFAULT_LINKS = [{
  id: 'find',
  label: 'Find activities'
}, {
  id: 'week',
  label: 'This week'
}, {
  id: 'camps',
  label: 'Camps'
}, {
  id: 'birthdays',
  label: 'Birthday parties'
}, {
  id: 'saved',
  label: 'Saved'
}, {
  id: 'providers',
  label: 'For providers'
}];
function TopNav(_ref) {
  var _ref$links = _ref.links,
    links = _ref$links === void 0 ? DEFAULT_LINKS : _ref$links,
    current = _ref.current,
    onNav = _ref.onNav,
    onScout = _ref.onScout,
    onMenu = _ref.onMenu,
    _ref$showLinks = _ref.showLinks,
    showLinks = _ref$showLinks === void 0 ? true : _ref$showLinks,
    _ref$logoSrc = _ref.logoSrc,
    logoSrc = _ref$logoSrc === void 0 ? '../../assets/logo-pin.png' : _ref$logoSrc,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: _objectSpread({
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-soft)',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '10px var(--page-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      onNav && onNav('home');
    },
    className: "cs-focusable",
    "aria-label": "ClassScout NYC home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 38,
      display: 'block'
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: '650 15px/1.2 var(--font-ui)',
      color: 'var(--brand-navy)',
      letterSpacing: '0.03em',
      whiteSpace: 'nowrap'
    }
  }, "ClassScout"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: '400 10.5px/1.2 var(--font-ui)',
      color: 'var(--text-secondary)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "NYC"))), showLinks ? /*#__PURE__*/_react["default"].createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      gap: 2,
      flex: 1,
      minWidth: 0,
      overflow: 'hidden'
    }
  }, links.map(function (l) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: l.id,
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        onNav && onNav(l.id);
      },
      "aria-current": current === l.id ? 'page' : undefined,
      className: "cs-focusable",
      style: {
        font: 'var(--text-meta-medium)',
        color: current === l.id ? 'var(--primary-dark)' : 'var(--text-secondary)',
        background: current === l.id ? 'var(--chip-bg)' : 'transparent',
        padding: '9px 12px',
        borderRadius: 'var(--radius-chip)',
        textDecoration: 'none',
        minHeight: 36,
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap'
      }
    }, l.label);
  })) : /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: "ghost",
    icon: "sparkles",
    onClick: onScout
  }, "Ask Scout"), onMenu ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onMenu,
    "aria-label": "More menu",
    className: "cs-focusable",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      width: 'var(--tap-target)',
      height: 'var(--tap-target)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "menu",
    size: 20
  })) : null)));
}
  };

  registry["components/navigation/BottomNav.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomNav = BottomNav;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §35.2 — exactly five tabs: Search · This Week · Saved · Scout · Account. */
var DEFAULT_TABS = [{
  id: 'search',
  label: 'Search',
  icon: 'search'
}, {
  id: 'week',
  label: 'This Week',
  icon: 'calendar'
}, {
  id: 'saved',
  label: 'Saved',
  icon: 'bookmark'
}, {
  id: 'scout',
  label: 'Scout',
  icon: 'sparkles'
}, {
  id: 'account',
  label: 'Account',
  icon: 'circle-user'
}];
function BottomNav(_ref) {
  var _ref$tabs = _ref.tabs,
    tabs = _ref$tabs === void 0 ? DEFAULT_TABS : _ref$tabs,
    _ref$current = _ref.current,
    current = _ref$current === void 0 ? 'search' : _ref$current,
    onNav = _ref.onNav,
    badge = _ref.badge,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    "aria-label": "Primary",
    style: _objectSpread({
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 50,
      background: 'var(--bg-card)',
      boxShadow: 'var(--shadow-nav)',
      paddingBottom: 'env(safe-area-inset-bottom, 0px)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + tabs.length + ', 1fr)',
      maxWidth: 600,
      margin: '0 auto'
    }
  }, tabs.map(function (t) {
    var active = current === t.id;
    var b = badge && badge[t.id];
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: t.id,
      onClick: function onClick() {
        return onNav && onNav(t.id);
      },
      "aria-current": active ? 'page' : undefined,
      className: "cs-focusable",
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '8px 4px 6px',
        minHeight: 'var(--tap-target)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: active ? 'var(--primary-dark)' : 'var(--text-secondary)'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      name: t.icon,
      size: 21,
      filled: active && t.icon === 'bookmark',
      strokeWidth: active ? 2.1 : 1.75
    }), b ? /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        position: 'absolute',
        top: -4,
        right: -8,
        font: '600 10px/1 var(--font-ui)',
        background: 'var(--primary)',
        color: 'var(--text-on-primary)',
        borderRadius: 999,
        padding: '2.5px 5px',
        minWidth: 9,
        textAlign: 'center'
      }
    }, b) : null), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        font: (active ? '600' : '500') + ' 10.5px/1.2 var(--font-ui)',
        whiteSpace: 'nowrap'
      }
    }, t.label));
  })));
}
  };

  registry["components/map/MapPin.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapPin = MapPin;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §34.5 pin table. Rendered as an absolutely-positioned marker inside a map panel. */
function MapPin(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'standard' : _ref$type,
    label = _ref.label,
    count = _ref.count,
    selected = _ref.selected,
    onClick = _ref.onClick,
    style = _ref.style;
  if (type === 'cluster') {
    return /*#__PURE__*/_react["default"].createElement("button", {
      onClick: onClick,
      className: "cs-focusable",
      "aria-label": count + ' activities in this area',
      style: _objectSpread({
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--primary)',
        color: 'var(--text-on-primary)',
        border: '2.5px solid var(--pure-white)',
        boxShadow: 'var(--shadow-card-hover)',
        font: '600 14px/1 var(--font-ui)',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer'
      }, style)
    }, count);
  }
  var palette = {
    standard: {
      bg: 'var(--primary)',
      ring: 'var(--pure-white)'
    },
    free: {
      bg: 'var(--trust)',
      ring: 'var(--pure-white)'
    },
    saved: {
      bg: 'var(--brand-navy)',
      ring: 'var(--pure-white)'
    },
    approximate: {
      bg: 'var(--text-secondary)',
      ring: 'var(--pure-white)'
    }
  };
  var p = palette[type] || palette.standard;
  var size = selected ? 40 : 32;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: "cs-focusable",
    "aria-label": (label || 'Activity') + (type === 'free' ? ' (free)' : '') + (type === 'approximate' ? ' (approximate area)' : '') + (selected ? ' — selected' : ''),
    "aria-pressed": !!selected,
    style: _objectSpread({
      width: size,
      height: size,
      background: p.bg,
      border: selected ? '3px solid var(--brand-navy)' : '2.5px solid ' + p.ring,
      borderRadius: '50% 50% 50% 4px',
      transform: 'rotate(-45deg)',
      boxShadow: selected ? 'var(--shadow-modal)' : 'var(--shadow-card-hover)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      padding: 0,
      transition: 'all var(--duration-quick) var(--ease-calm)'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      transform: 'rotate(45deg)',
      display: 'inline-flex',
      color: 'var(--pure-white)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: type === 'saved' ? 'bookmark' : 'map-pin',
    size: selected ? 17 : 14,
    filled: type === 'saved',
    color: "var(--pure-white)"
  })));
}
  };

  registry["components/map/MapPreviewCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapPreviewCard = MapPreviewCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Button = require("../core/Button.jsx");
var _SaveButton = require("../core/SaveButton.jsx");
var _PriceEstimateLabel = require("../trust/PriceEstimateLabel.jsx");
var _LastCheckedLabel = require("../trust/LastCheckedLabel.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §34.6 — compact preview when a pin is tapped. */
function MapPreviewCard(_ref) {
  var title = _ref.title,
    provider = _ref.provider,
    ages = _ref.ages,
    _ref$priceStatus = _ref.priceStatus,
    priceStatus = _ref$priceStatus === void 0 ? 'estimated' : _ref$priceStatus,
    price = _ref.price,
    schedule = _ref.schedule,
    lastChecked = _ref.lastChecked,
    sourceLabel = _ref.sourceLabel,
    approximate = _ref.approximate,
    saved = _ref.saved,
    onToggleSave = _ref.onToggleSave,
    onViewDetails = _ref.onViewDetails,
    onClose = _ref.onClose,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("article", {
    style: _objectSpread({
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 'min(320px, calc(100vw - 32px))',
      boxSizing: 'border-box'
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      font: 'var(--text-card-title)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      margin: '2px 0 0'
    }
  }, provider, ages ? ' · Ages ' + ages : ' · Age not confirmed')), onClose ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    "aria-label": "Close preview",
    className: "cs-focusable",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      padding: 4,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "x",
    size: 16
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_PriceEstimateLabel.PriceEstimateLabel, {
    status: priceStatus,
    amount: price,
    note: null
  }), schedule ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--text-meta)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "calendar",
    size: 13
  }), schedule) : null), /*#__PURE__*/_react["default"].createElement(_LastCheckedLabel.LastCheckedLabel, {
    date: lastChecked,
    source: sourceLabel
  }), approximate ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      font: 'var(--text-badge)',
      color: 'var(--badge-estimate-text)',
      background: 'var(--badge-estimate-bg)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-chip)',
      alignSelf: 'flex-start'
    }
  }, "Approximate area") : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    onClick: onViewDetails,
    style: {
      flex: 1
    }
  }, "View details"), /*#__PURE__*/_react["default"].createElement(_SaveButton.SaveButton, {
    saved: saved,
    onToggle: onToggleSave
  })));
}
  };

  registry["components/provider/ProviderCTA.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProviderCTA = ProviderCTA;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* v2 §18.1 provider landing headline + live-site "List your program" module. */
function ProviderCTA(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Reach NYC parents looking for trusted kids\u2019 activities" : _ref$title,
    _ref$body = _ref.body,
    body = _ref$body === void 0 ? "Tell us about your program and we\u2019ll follow up about the right listing path for local families." : _ref$body,
    _ref$buttonLabel = _ref.buttonLabel,
    buttonLabel = _ref$buttonLabel === void 0 ? 'Request listing info' : _ref$buttonLabel,
    _ref$href = _ref.href,
    href = _ref$href === void 0 ? 'mailto:hello@classscoutny.com?subject=Request%20listing%20info' : _ref$href,
    onClick = _ref.onClick,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("section", {
    style: _objectSpread({
      background: 'var(--bg-navy)',
      borderRadius: 'var(--radius-card)',
      padding: 'clamp(20px, 3vw, 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-on-dark)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--on-dark-dim)',
      margin: 0
    }
  }, body), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    href: href,
    onClick: onClick,
    style: {
      alignSelf: 'flex-start',
      background: 'var(--text-on-dark)',
      color: 'var(--brand-navy)'
    }
  }, buttonLabel));
}
  };

  var api = {};
  var req = makeRequire('');
  ["components/core/Icon.jsx","components/core/Button.jsx","components/core/FilterChip.jsx","components/core/SaveButton.jsx","components/core/CompareButton.jsx","components/core/TextInput.jsx","components/core/SelectField.jsx","components/trust/TrustBadge.jsx","components/trust/PriceEstimateLabel.jsx","components/trust/LastCheckedLabel.jsx","components/trust/ReportOutdatedLink.jsx","components/trust/SourceBlock.jsx","components/search/HeroSearchPanel.jsx","components/search/QuickStartCard.jsx","components/search/FilterSheet.jsx","components/listing/ActivityCard.jsx","components/listing/DetailFactsTable.jsx","components/listing/ConfirmChecklist.jsx","components/scout/ScoutPromptCard.jsx","components/scout/ScoutResultCard.jsx","components/states/EmptyState.jsx","components/states/ErrorState.jsx","components/states/LoadingSkeleton.jsx","components/navigation/TopNav.jsx","components/navigation/BottomNav.jsx","components/map/MapPin.jsx","components/map/MapPreviewCard.jsx","components/provider/ProviderCTA.jsx"].forEach(function (f) {
    var m = req(f);
    Object.keys(m).forEach(function (k) { api[k] = m[k]; });
  });
  window.CSDS = api;
})();
