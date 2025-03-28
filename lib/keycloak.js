"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Keycloak(config) {
  if (!(this instanceof Keycloak)) {
    throw new Error("The 'Keycloak' constructor must be invoked with 'new'.");
  }
  if (typeof config !== 'string' && !isObject(config)) {
    throw new Error("The 'Keycloak' constructor must be provided with a configuration object, or a URL to a JSON configuration file.");
  }
  if (isObject(config)) {
    var requiredProperties = 'oidcProvider' in config ? ['clientId'] : ['url', 'realm', 'clientId'];
    for (var _i = 0, _requiredProperties = requiredProperties; _i < _requiredProperties.length; _i++) {
      var property = _requiredProperties[_i];
      if (!config[property]) {
        throw new Error("The configuration object is missing the required '".concat(property, "' property."));
      }
    }
  }
  var kc = this;
  var adapter;
  var refreshQueue = [];
  var callbackStorage;
  var loginIframe = {
    enable: true,
    callbackList: [],
    interval: 5
  };
  kc.didInitialize = false;
  var useNonce = true;
  var logInfo = createLogger(console.info);
  var logWarn = createLogger(console.warn);
  if (!globalThis.isSecureContext) {
    logWarn("[KEYCLOAK] Keycloak JS must be used in a 'secure context' to function properly as it relies on browser APIs that are otherwise not available.\n" + "Continuing to run your application insecurely will lead to unexpected behavior and breakage.\n\n" + "For more information see: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts");
  }
  kc.init = function () {
    var initOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (kc.didInitialize) {
      throw new Error("A 'Keycloak' instance can only be initialized once.");
    }
    kc.didInitialize = true;
    kc.authenticated = false;
    callbackStorage = createCallbackStorage();
    var adapters = ['default', 'cordova', 'cordova-native'];
    if (adapters.indexOf(initOptions.adapter) > -1) {
      adapter = loadAdapter(initOptions.adapter);
    } else if (_typeof(initOptions.adapter) === "object") {
      adapter = initOptions.adapter;
    } else {
      if (window.Cordova || window.cordova) {
        adapter = loadAdapter('cordova');
      } else {
        adapter = loadAdapter();
      }
    }
    if (typeof initOptions.useNonce !== 'undefined') {
      useNonce = initOptions.useNonce;
    }
    if (typeof initOptions.checkLoginIframe !== 'undefined') {
      loginIframe.enable = initOptions.checkLoginIframe;
    }
    if (initOptions.checkLoginIframeInterval) {
      loginIframe.interval = initOptions.checkLoginIframeInterval;
    }
    if (initOptions.onLoad === 'login-required') {
      kc.loginRequired = true;
    }
    if (initOptions.responseMode) {
      if (initOptions.responseMode === 'query' || initOptions.responseMode === 'fragment') {
        kc.responseMode = initOptions.responseMode;
      } else {
        throw 'Invalid value for responseMode';
      }
    }
    if (initOptions.flow) {
      switch (initOptions.flow) {
        case 'standard':
          kc.responseType = 'code';
          break;
        case 'implicit':
          kc.responseType = 'id_token token';
          break;
        case 'hybrid':
          kc.responseType = 'code id_token token';
          break;
        default:
          throw 'Invalid value for flow';
      }
      kc.flow = initOptions.flow;
    }
    if (initOptions.timeSkew != null) {
      kc.timeSkew = initOptions.timeSkew;
    }
    if (initOptions.redirectUri) {
      kc.redirectUri = initOptions.redirectUri;
    }
    if (initOptions.silentCheckSsoRedirectUri) {
      kc.silentCheckSsoRedirectUri = initOptions.silentCheckSsoRedirectUri;
    }
    if (typeof initOptions.silentCheckSsoFallback === 'boolean') {
      kc.silentCheckSsoFallback = initOptions.silentCheckSsoFallback;
    } else {
      kc.silentCheckSsoFallback = true;
    }
    if (typeof initOptions.pkceMethod !== "undefined") {
      if (initOptions.pkceMethod !== "S256" && initOptions.pkceMethod !== false) {
        throw new TypeError("Invalid value for pkceMethod', expected 'S256' or false but got ".concat(initOptions.pkceMethod, "."));
      }
      kc.pkceMethod = initOptions.pkceMethod;
    } else {
      kc.pkceMethod = "S256";
    }
    if (typeof initOptions.enableLogging === 'boolean') {
      kc.enableLogging = initOptions.enableLogging;
    } else {
      kc.enableLogging = false;
    }
    if (initOptions.logoutMethod === 'POST') {
      kc.logoutMethod = 'POST';
    } else {
      kc.logoutMethod = 'GET';
    }
    if (typeof initOptions.scope === 'string') {
      kc.scope = initOptions.scope;
    }
    if (typeof initOptions.acrValues === 'string') {
      kc.acrValues = initOptions.acrValues;
    }
    if (typeof initOptions.messageReceiveTimeout === 'number' && initOptions.messageReceiveTimeout > 0) {
      kc.messageReceiveTimeout = initOptions.messageReceiveTimeout;
    } else {
      kc.messageReceiveTimeout = 10000;
    }
    if (!kc.responseMode) {
      kc.responseMode = 'fragment';
    }
    if (!kc.responseType) {
      kc.responseType = 'code';
      kc.flow = 'standard';
    }
    var promise = createPromise();
    var initPromise = createPromise();
    initPromise.promise.then(function () {
      kc.onReady && kc.onReady(kc.authenticated);
      promise.setSuccess(kc.authenticated);
    })["catch"](function (error) {
      promise.setError(error);
    });
    var configPromise = loadConfig();
    function onLoad() {
      var doLogin = function doLogin(prompt) {
        if (!prompt) {
          options.prompt = 'none';
        }
        if (initOptions.locale) {
          options.locale = initOptions.locale;
        }
        kc.login(options).then(function () {
          initPromise.setSuccess();
        })["catch"](function (error) {
          initPromise.setError(error);
        });
      };
      var checkSsoSilently = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var ifrm, src, _messageCallback;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                ifrm = document.createElement("iframe");
                _context.next = 3;
                return kc.createLoginUrl({
                  prompt: 'none',
                  redirectUri: kc.silentCheckSsoRedirectUri
                });
              case 3:
                src = _context.sent;
                ifrm.setAttribute("src", src);
                ifrm.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin");
                ifrm.setAttribute("title", "keycloak-silent-check-sso");
                ifrm.style.display = "none";
                document.body.appendChild(ifrm);
                _messageCallback = function messageCallback(event) {
                  if (event.origin !== window.location.origin || ifrm.contentWindow !== event.source) {
                    return;
                  }
                  var oauth = parseCallback(event.data);
                  processCallback(oauth, initPromise);
                  document.body.removeChild(ifrm);
                  window.removeEventListener("message", _messageCallback);
                };
                window.addEventListener("message", _messageCallback);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function checkSsoSilently() {
          return _ref.apply(this, arguments);
        };
      }();
      var options = {};
      switch (initOptions.onLoad) {
        case 'check-sso':
          if (loginIframe.enable) {
            setupCheckLoginIframe().then(function () {
              checkLoginIframe().then(function (unchanged) {
                if (!unchanged) {
                  kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
                } else {
                  initPromise.setSuccess();
                }
              })["catch"](function (error) {
                initPromise.setError(error);
              });
            });
          } else {
            kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
          }
          break;
        case 'login-required':
          doLogin(true);
          break;
        default:
          throw 'Invalid value for onLoad';
      }
    }
    function processInit() {
      var callback = parseCallback(window.location.href);
      if (callback) {
        window.history.replaceState(window.history.state, null, callback.newUrl);
      }
      if (callback && callback.valid) {
        return setupCheckLoginIframe().then(function () {
          processCallback(callback, initPromise);
        })["catch"](function (error) {
          initPromise.setError(error);
        });
      }
      if (initOptions.token && initOptions.refreshToken) {
        setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);
        if (loginIframe.enable) {
          setupCheckLoginIframe().then(function () {
            checkLoginIframe().then(function (unchanged) {
              if (unchanged) {
                kc.onAuthSuccess && kc.onAuthSuccess();
                initPromise.setSuccess();
                scheduleCheckIframe();
              } else {
                initPromise.setSuccess();
              }
            })["catch"](function (error) {
              initPromise.setError(error);
            });
          });
        } else {
          kc.updateToken(-1).then(function () {
            kc.onAuthSuccess && kc.onAuthSuccess();
            initPromise.setSuccess();
          })["catch"](function (error) {
            kc.onAuthError && kc.onAuthError();
            if (initOptions.onLoad) {
              onLoad();
            } else {
              initPromise.setError(error);
            }
          });
        }
      } else if (initOptions.onLoad) {
        onLoad();
      } else {
        initPromise.setSuccess();
      }
    }
    configPromise.then(function () {
      check3pCookiesSupported().then(processInit)["catch"](function (error) {
        promise.setError(error);
      });
    });
    configPromise["catch"](function (error) {
      promise.setError(error);
    });
    return promise.promise;
  };
  kc.login = function (options) {
    return adapter.login(options);
  };
  function generateRandomData(len) {
    if (typeof crypto === "undefined" || typeof crypto.getRandomValues === "undefined") {
      throw new Error("Web Crypto API is not available.");
    }
    return crypto.getRandomValues(new Uint8Array(len));
  }
  function generateCodeVerifier(len) {
    return generateRandomString(len, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  }
  function generateRandomString(len, alphabet) {
    var randomData = generateRandomData(len);
    var chars = new Array(len);
    for (var i = 0; i < len; i++) {
      chars[i] = alphabet.charCodeAt(randomData[i] % alphabet.length);
    }
    return String.fromCharCode.apply(null, chars);
  }
  function generatePkceChallenge(_x, _x2) {
    return _generatePkceChallenge.apply(this, arguments);
  }
  function _generatePkceChallenge() {
    _generatePkceChallenge = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(pkceMethod, codeVerifier) {
      var hashBytes, encodedHash;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            if (!(pkceMethod !== "S256")) {
              _context11.next = 2;
              break;
            }
            throw new TypeError("Invalid value for 'pkceMethod', expected 'S256' but got '".concat(pkceMethod, "'."));
          case 2:
            _context11.t0 = Uint8Array;
            _context11.next = 5;
            return sha256Digest(codeVerifier);
          case 5:
            _context11.t1 = _context11.sent;
            hashBytes = new _context11.t0(_context11.t1);
            encodedHash = bytesToBase64(hashBytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
            return _context11.abrupt("return", encodedHash);
          case 9:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _generatePkceChallenge.apply(this, arguments);
  }
  function buildClaimsParameter(requestedAcr) {
    var claims = {
      id_token: {
        acr: requestedAcr
      }
    };
    return JSON.stringify(claims);
  }
  kc.createLoginUrl = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
      var state, nonce, redirectUri, callbackState, baseUrl, scope, url, claimsParameter, codeVerifier, pkceChallenge;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            state = createUUID();
            nonce = createUUID();
            redirectUri = adapter.redirectUri(options);
            callbackState = {
              state: state,
              nonce: nonce,
              redirectUri: encodeURIComponent(redirectUri),
              loginOptions: options
            };
            if (options && options.prompt) {
              callbackState.prompt = options.prompt;
            }
            if (options && options.action == 'register') {
              baseUrl = kc.endpoints.register();
            } else {
              baseUrl = kc.endpoints.authorize();
            }
            scope = options && options.scope || kc.scope;
            if (!scope) {
              // if scope is not set, default to "openid"
              scope = "openid";
            } else if (scope.indexOf("openid") === -1) {
              // if openid scope is missing, prefix the given scopes with it
              scope = "openid " + scope;
            }
            url = baseUrl + '?client_id=' + encodeURIComponent(kc.clientId) + '&redirect_uri=' + encodeURIComponent(redirectUri) + '&state=' + encodeURIComponent(state) + '&response_mode=' + encodeURIComponent(kc.responseMode) + '&response_type=' + encodeURIComponent(kc.responseType) + '&scope=' + encodeURIComponent(scope);
            if (useNonce) {
              url = url + '&nonce=' + encodeURIComponent(nonce);
            }
            if (options && options.prompt) {
              url += '&prompt=' + encodeURIComponent(options.prompt);
            }
            if (options && typeof options.maxAge === 'number') {
              url += '&max_age=' + encodeURIComponent(options.maxAge);
            }
            if (options && options.loginHint) {
              url += '&login_hint=' + encodeURIComponent(options.loginHint);
            }
            if (options && options.idpHint) {
              url += '&kc_idp_hint=' + encodeURIComponent(options.idpHint);
            }
            if (options && options.action && options.action != 'register') {
              url += '&kc_action=' + encodeURIComponent(options.action);
            }
            if (options && options.locale) {
              url += '&ui_locales=' + encodeURIComponent(options.locale);
            }
            if (options && options.acr) {
              claimsParameter = buildClaimsParameter(options.acr);
              url += '&claims=' + encodeURIComponent(claimsParameter);
            }
            if (options && options.acrValues || kc.acrValues) {
              url += '&acr_values=' + encodeURIComponent(options.acrValues || kc.acrValues);
            }
            if (!kc.pkceMethod) {
              _context2.next = 32;
              break;
            }
            _context2.prev = 19;
            codeVerifier = generateCodeVerifier(96);
            _context2.next = 23;
            return generatePkceChallenge(kc.pkceMethod, codeVerifier);
          case 23:
            pkceChallenge = _context2.sent;
            callbackState.pkceCodeVerifier = codeVerifier;
            url += '&code_challenge=' + pkceChallenge;
            url += '&code_challenge_method=' + kc.pkceMethod;
            _context2.next = 32;
            break;
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](19);
            throw new Error("Failed to generate PKCE challenge.", {
              cause: _context2.t0
            });
          case 32:
            callbackStorage.add(callbackState);
            return _context2.abrupt("return", url);
          case 34:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[19, 29]]);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  kc.logout = function (options) {
    return adapter.logout(options);
  };
  kc.createLogoutUrl = function (options) {
    var _options$logoutMethod;
    var logoutMethod = (_options$logoutMethod = options === null || options === void 0 ? void 0 : options.logoutMethod) !== null && _options$logoutMethod !== void 0 ? _options$logoutMethod : kc.logoutMethod;
    if (logoutMethod === 'POST') {
      return kc.endpoints.logout();
    }
    var url = kc.endpoints.logout() + '?client_id=' + encodeURIComponent(kc.clientId) + '&post_logout_redirect_uri=' + encodeURIComponent(adapter.redirectUri(options, false));
    if (kc.idToken) {
      url += '&id_token_hint=' + encodeURIComponent(kc.idToken);
    }
    return url;
  };
  kc.register = function (options) {
    return adapter.register(options);
  };
  kc.createRegisterUrl = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(options) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!options) {
              options = {};
            }
            options.action = 'register';
            _context3.next = 4;
            return kc.createLoginUrl(options);
          case 4:
            return _context3.abrupt("return", _context3.sent);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  kc.createAccountUrl = function (options) {
    var realm = getRealmUrl();
    var url = undefined;
    if (typeof realm !== 'undefined') {
      url = realm + '/account' + '?referrer=' + encodeURIComponent(kc.clientId) + '&referrer_uri=' + encodeURIComponent(adapter.redirectUri(options));
    }
    return url;
  };
  kc.accountManagement = function () {
    return adapter.accountManagement();
  };
  kc.hasRealmRole = function (role) {
    var access = kc.realmAccess;
    return !!access && access.roles.indexOf(role) >= 0;
  };
  kc.hasResourceRole = function (role, resource) {
    if (!kc.resourceAccess) {
      return false;
    }
    var access = kc.resourceAccess[resource || kc.clientId];
    return !!access && access.roles.indexOf(role) >= 0;
  };
  kc.loadUserProfile = function () {
    var url = getRealmUrl() + '/account';
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('Authorization', 'bearer ' + kc.token);
    var promise = createPromise();
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          kc.profile = JSON.parse(req.responseText);
          promise.setSuccess(kc.profile);
        } else {
          promise.setError();
        }
      }
    };
    req.send();
    return promise.promise;
  };
  kc.loadUserInfo = function () {
    var url = kc.endpoints.userinfo();
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('Authorization', 'bearer ' + kc.token);
    var promise = createPromise();
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          kc.userInfo = JSON.parse(req.responseText);
          promise.setSuccess(kc.userInfo);
        } else {
          promise.setError();
        }
      }
    };
    req.send();
    return promise.promise;
  };
  kc.isTokenExpired = function (minValidity) {
    if (!kc.tokenParsed || !kc.refreshToken && kc.flow != 'implicit') {
      throw 'Not authenticated';
    }
    if (kc.timeSkew == null) {
      logInfo('[KEYCLOAK] Unable to determine if token is expired as timeskew is not set');
      return true;
    }
    var expiresIn = kc.tokenParsed['exp'] - Math.ceil(new Date().getTime() / 1000) + kc.timeSkew;
    if (minValidity) {
      if (isNaN(minValidity)) {
        throw 'Invalid minValidity';
      }
      expiresIn -= minValidity;
    }
    return expiresIn < 0;
  };
  kc.updateToken = function (minValidity) {
    var promise = createPromise();
    if (!kc.refreshToken) {
      promise.setError();
      return promise.promise;
    }
    minValidity = minValidity || 5;
    var exec = function exec() {
      var refreshToken = false;
      if (minValidity == -1) {
        refreshToken = true;
        logInfo('[KEYCLOAK] Refreshing token: forced refresh');
      } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
        refreshToken = true;
        logInfo('[KEYCLOAK] Refreshing token: token expired');
      }
      if (!refreshToken) {
        promise.setSuccess(false);
      } else {
        var params = 'grant_type=refresh_token&' + 'refresh_token=' + kc.refreshToken;
        var url = kc.endpoints.token();
        refreshQueue.push(promise);
        if (refreshQueue.length == 1) {
          var req = new XMLHttpRequest();
          req.open('POST', url, true);
          req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          req.withCredentials = true;
          params += '&client_id=' + encodeURIComponent(kc.clientId);
          var timeLocal = new Date().getTime();
          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status == 200) {
                logInfo('[KEYCLOAK] Token refreshed');
                timeLocal = (timeLocal + new Date().getTime()) / 2;
                var tokenResponse = JSON.parse(req.responseText);
                setToken(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], timeLocal);
                kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                  p.setSuccess(true);
                }
              } else {
                logWarn('[KEYCLOAK] Failed to refresh token');
                if (req.status == 400) {
                  kc.clearToken();
                }
                kc.onAuthRefreshError && kc.onAuthRefreshError();
                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                  p.setError("Failed to refresh token: An unexpected HTTP error occurred while attempting to refresh the token.");
                }
              }
            }
          };
          req.send(params);
        }
      }
    };
    if (loginIframe.enable) {
      var iframePromise = checkLoginIframe();
      iframePromise.then(function () {
        exec();
      })["catch"](function (error) {
        promise.setError(error);
      });
    } else {
      exec();
    }
    return promise.promise;
  };
  kc.clearToken = function () {
    if (kc.token) {
      setToken(null, null, null);
      kc.onAuthLogout && kc.onAuthLogout();
      if (kc.loginRequired) {
        kc.login();
      }
    }
  };
  function getRealmUrl() {
    if (typeof kc.authServerUrl !== 'undefined') {
      if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == '/') {
        return kc.authServerUrl + 'realms/' + encodeURIComponent(kc.realm);
      } else {
        return kc.authServerUrl + '/realms/' + encodeURIComponent(kc.realm);
      }
    } else {
      return undefined;
    }
  }
  function getOrigin() {
    if (!window.location.origin) {
      return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    } else {
      return window.location.origin;
    }
  }
  function processCallback(oauth, promise) {
    var code = oauth.code;
    var error = oauth.error;
    var prompt = oauth.prompt;
    var timeLocal = new Date().getTime();
    if (oauth['kc_action_status']) {
      kc.onActionUpdate && kc.onActionUpdate(oauth['kc_action_status'], oauth['kc_action']);
    }
    if (error) {
      if (prompt != 'none') {
        if (oauth.error_description && oauth.error_description === "authentication_expired") {
          kc.login(oauth.loginOptions);
        } else {
          var errorData = {
            error: error,
            error_description: oauth.error_description
          };
          kc.onAuthError && kc.onAuthError(errorData);
          promise && promise.setError(errorData);
        }
      } else {
        promise && promise.setSuccess();
      }
      return;
    } else if (kc.flow != 'standard' && (oauth.access_token || oauth.id_token)) {
      authSuccess(oauth.access_token, null, oauth.id_token, true);
    }
    if (kc.flow != 'implicit' && code) {
      var params = 'code=' + code + '&grant_type=authorization_code';
      var url = kc.endpoints.token();
      var req = new XMLHttpRequest();
      req.open('POST', url, true);
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      params += '&client_id=' + encodeURIComponent(kc.clientId);
      params += '&redirect_uri=' + oauth.redirectUri;
      if (oauth.pkceCodeVerifier) {
        params += '&code_verifier=' + oauth.pkceCodeVerifier;
      }
      req.withCredentials = true;
      req.onreadystatechange = function () {
        if (req.readyState == 4) {
          if (req.status == 200) {
            var tokenResponse = JSON.parse(req.responseText);
            authSuccess(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], kc.flow === 'standard');
            scheduleCheckIframe();
          } else {
            kc.onAuthError && kc.onAuthError();
            promise && promise.setError();
          }
        }
      };
      req.send(params);
    }
    function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
      timeLocal = (timeLocal + new Date().getTime()) / 2;
      setToken(accessToken, refreshToken, idToken, timeLocal);
      if (useNonce && kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce) {
        logInfo('[KEYCLOAK] Invalid nonce, clearing token');
        kc.clearToken();
        promise && promise.setError();
      } else {
        if (fulfillPromise) {
          kc.onAuthSuccess && kc.onAuthSuccess();
          promise && promise.setSuccess();
        }
      }
    }
  }
  function loadConfig() {
    var promise = createPromise();
    var configUrl;
    if (typeof config === 'string') {
      configUrl = config;
    }
    function setupOidcEndoints(oidcConfiguration) {
      if (!oidcConfiguration) {
        kc.endpoints = {
          authorize: function authorize() {
            return getRealmUrl() + '/protocol/openid-connect/auth';
          },
          token: function token() {
            return getRealmUrl() + '/protocol/openid-connect/token';
          },
          logout: function logout() {
            return getRealmUrl() + '/protocol/openid-connect/logout';
          },
          checkSessionIframe: function checkSessionIframe() {
            return getRealmUrl() + '/protocol/openid-connect/login-status-iframe.html';
          },
          thirdPartyCookiesIframe: function thirdPartyCookiesIframe() {
            return getRealmUrl() + '/protocol/openid-connect/3p-cookies/step1.html';
          },
          register: function register() {
            return getRealmUrl() + '/protocol/openid-connect/registrations';
          },
          userinfo: function userinfo() {
            return getRealmUrl() + '/protocol/openid-connect/userinfo';
          }
        };
      } else {
        kc.endpoints = {
          authorize: function authorize() {
            return oidcConfiguration.authorization_endpoint;
          },
          token: function token() {
            return oidcConfiguration.token_endpoint;
          },
          logout: function logout() {
            if (!oidcConfiguration.end_session_endpoint) {
              throw "Not supported by the OIDC server";
            }
            return oidcConfiguration.end_session_endpoint;
          },
          checkSessionIframe: function checkSessionIframe() {
            if (!oidcConfiguration.check_session_iframe) {
              throw "Not supported by the OIDC server";
            }
            return oidcConfiguration.check_session_iframe;
          },
          register: function register() {
            throw 'Redirection to "Register user" page not supported in standard OIDC mode';
          },
          userinfo: function userinfo() {
            if (!oidcConfiguration.userinfo_endpoint) {
              throw "Not supported by the OIDC server";
            }
            return oidcConfiguration.userinfo_endpoint;
          }
        };
      }
    }
    if (configUrl) {
      var req = new XMLHttpRequest();
      req.open('GET', configUrl, true);
      req.setRequestHeader('Accept', 'application/json');
      req.onreadystatechange = function () {
        if (req.readyState == 4) {
          if (req.status == 200 || fileLoaded(req)) {
            var config = JSON.parse(req.responseText);
            kc.authServerUrl = config['auth-server-url'];
            kc.realm = config['realm'];
            kc.clientId = config['resource'];
            setupOidcEndoints(null);
            promise.setSuccess();
          } else {
            promise.setError();
          }
        }
      };
      req.send();
    } else {
      kc.clientId = config.clientId;
      var oidcProvider = config['oidcProvider'];
      if (!oidcProvider) {
        kc.authServerUrl = config.url;
        kc.realm = config.realm;
        setupOidcEndoints(null);
        promise.setSuccess();
      } else {
        if (typeof oidcProvider === 'string') {
          var oidcProviderConfigUrl;
          if (oidcProvider.charAt(oidcProvider.length - 1) == '/') {
            oidcProviderConfigUrl = oidcProvider + '.well-known/openid-configuration';
          } else {
            oidcProviderConfigUrl = oidcProvider + '/.well-known/openid-configuration';
          }
          var req = new XMLHttpRequest();
          req.open('GET', oidcProviderConfigUrl, true);
          req.setRequestHeader('Accept', 'application/json');
          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status == 200 || fileLoaded(req)) {
                var oidcProviderConfig = JSON.parse(req.responseText);
                setupOidcEndoints(oidcProviderConfig);
                promise.setSuccess();
              } else {
                promise.setError();
              }
            }
          };
          req.send();
        } else {
          setupOidcEndoints(oidcProvider);
          promise.setSuccess();
        }
      }
    }
    return promise.promise;
  }
  function fileLoaded(xhr) {
    return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith('file:');
  }
  function setToken(token, refreshToken, idToken, timeLocal) {
    if (kc.tokenTimeoutHandle) {
      clearTimeout(kc.tokenTimeoutHandle);
      kc.tokenTimeoutHandle = null;
    }
    if (refreshToken) {
      kc.refreshToken = refreshToken;
      kc.refreshTokenParsed = decodeToken(refreshToken);
    } else {
      delete kc.refreshToken;
      delete kc.refreshTokenParsed;
    }
    if (idToken) {
      kc.idToken = idToken;
      kc.idTokenParsed = decodeToken(idToken);
    } else {
      delete kc.idToken;
      delete kc.idTokenParsed;
    }
    if (token) {
      kc.token = token;
      kc.tokenParsed = decodeToken(token);
      kc.sessionId = kc.tokenParsed.sid;
      kc.authenticated = true;
      kc.subject = kc.tokenParsed.sub;
      kc.realmAccess = kc.tokenParsed.realm_access;
      kc.resourceAccess = kc.tokenParsed.resource_access;
      if (timeLocal) {
        kc.timeSkew = Math.floor(timeLocal / 1000) - kc.tokenParsed.iat;
      }
      if (kc.timeSkew != null) {
        logInfo('[KEYCLOAK] Estimated time difference between browser and server is ' + kc.timeSkew + ' seconds');
        if (kc.onTokenExpired) {
          var expiresIn = (kc.tokenParsed['exp'] - new Date().getTime() / 1000 + kc.timeSkew) * 1000;
          logInfo('[KEYCLOAK] Token expires in ' + Math.round(expiresIn / 1000) + ' s');
          if (expiresIn <= 0) {
            kc.onTokenExpired();
          } else {
            kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
          }
        }
      }
    } else {
      delete kc.token;
      delete kc.tokenParsed;
      delete kc.subject;
      delete kc.realmAccess;
      delete kc.resourceAccess;
      kc.authenticated = false;
    }
  }
  function createUUID() {
    if (typeof crypto === "undefined" || typeof crypto.randomUUID === "undefined") {
      throw new Error("Web Crypto API is not available.");
    }
    return crypto.randomUUID();
  }
  function parseCallback(url) {
    var oauth = parseCallbackUrl(url);
    if (!oauth) {
      return;
    }
    var oauthState = callbackStorage.get(oauth.state);
    if (oauthState) {
      oauth.valid = true;
      oauth.redirectUri = oauthState.redirectUri;
      oauth.storedNonce = oauthState.nonce;
      oauth.prompt = oauthState.prompt;
      oauth.pkceCodeVerifier = oauthState.pkceCodeVerifier;
      oauth.loginOptions = oauthState.loginOptions;
    }
    return oauth;
  }
  function parseCallbackUrl(url) {
    var supportedParams;
    switch (kc.flow) {
      case 'standard':
        supportedParams = ['code', 'state', 'session_state', 'kc_action_status', 'kc_action', 'iss'];
        break;
      case 'implicit':
        supportedParams = ['access_token', 'token_type', 'id_token', 'state', 'session_state', 'expires_in', 'kc_action_status', 'kc_action', 'iss'];
        break;
      case 'hybrid':
        supportedParams = ['access_token', 'token_type', 'id_token', 'code', 'state', 'session_state', 'expires_in', 'kc_action_status', 'kc_action', 'iss'];
        break;
    }
    supportedParams.push('error');
    supportedParams.push('error_description');
    supportedParams.push('error_uri');
    var queryIndex = url.indexOf('?');
    var fragmentIndex = url.indexOf('#');
    var newUrl;
    var parsed;
    if (kc.responseMode === 'query' && queryIndex !== -1) {
      newUrl = url.substring(0, queryIndex);
      parsed = parseCallbackParams(url.substring(queryIndex + 1, fragmentIndex !== -1 ? fragmentIndex : url.length), supportedParams);
      if (parsed.paramsString !== '') {
        newUrl += '?' + parsed.paramsString;
      }
      if (fragmentIndex !== -1) {
        newUrl += url.substring(fragmentIndex);
      }
    } else if (kc.responseMode === 'fragment' && fragmentIndex !== -1) {
      newUrl = url.substring(0, fragmentIndex);
      parsed = parseCallbackParams(url.substring(fragmentIndex + 1), supportedParams);
      if (parsed.paramsString !== '') {
        newUrl += '#' + parsed.paramsString;
      }
    }
    if (parsed && parsed.oauthParams) {
      if (kc.flow === 'standard' || kc.flow === 'hybrid') {
        if ((parsed.oauthParams.code || parsed.oauthParams.error) && parsed.oauthParams.state) {
          parsed.oauthParams.newUrl = newUrl;
          return parsed.oauthParams;
        }
      } else if (kc.flow === 'implicit') {
        if ((parsed.oauthParams.access_token || parsed.oauthParams.error) && parsed.oauthParams.state) {
          parsed.oauthParams.newUrl = newUrl;
          return parsed.oauthParams;
        }
      }
    }
  }
  function parseCallbackParams(paramsString, supportedParams) {
    var p = paramsString.split('&');
    var result = {
      paramsString: '',
      oauthParams: {}
    };
    for (var i = 0; i < p.length; i++) {
      var split = p[i].indexOf("=");
      var key = p[i].slice(0, split);
      if (supportedParams.indexOf(key) !== -1) {
        result.oauthParams[key] = p[i].slice(split + 1);
      } else {
        if (result.paramsString !== '') {
          result.paramsString += '&';
        }
        result.paramsString += p[i];
      }
    }
    return result;
  }
  function createPromise() {
    // Need to create a native Promise which also preserves the
    // interface of the custom promise type previously used by the API
    var p = {
      setSuccess: function setSuccess(result) {
        p.resolve(result);
      },
      setError: function setError(result) {
        p.reject(result);
      }
    };
    p.promise = new Promise(function (resolve, reject) {
      p.resolve = resolve;
      p.reject = reject;
    });
    return p;
  }

  // Function to extend existing native Promise with timeout
  function applyTimeoutToPromise(promise, timeout, errorMessage) {
    var timeoutHandle = null;
    var timeoutPromise = new Promise(function (resolve, reject) {
      timeoutHandle = setTimeout(function () {
        reject({
          "error": errorMessage || "Promise is not settled within timeout of " + timeout + "ms"
        });
      }, timeout);
    });
    return Promise.race([promise, timeoutPromise])["finally"](function () {
      clearTimeout(timeoutHandle);
    });
  }
  function setupCheckLoginIframe() {
    var promise = createPromise();
    if (!loginIframe.enable) {
      promise.setSuccess();
      return promise.promise;
    }
    if (loginIframe.iframe) {
      promise.setSuccess();
      return promise.promise;
    }
    var iframe = document.createElement('iframe');
    loginIframe.iframe = iframe;
    iframe.onload = function () {
      var authUrl = kc.endpoints.authorize();
      if (authUrl.charAt(0) === '/') {
        loginIframe.iframeOrigin = getOrigin();
      } else {
        loginIframe.iframeOrigin = authUrl.substring(0, authUrl.indexOf('/', 8));
      }
      promise.setSuccess();
    };
    var src = kc.endpoints.checkSessionIframe();
    iframe.setAttribute('src', src);
    iframe.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin');
    iframe.setAttribute('title', 'keycloak-session-iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    var messageCallback = function messageCallback(event) {
      if (event.origin !== loginIframe.iframeOrigin || loginIframe.iframe.contentWindow !== event.source) {
        return;
      }
      if (!(event.data == 'unchanged' || event.data == 'changed' || event.data == 'error')) {
        return;
      }
      if (event.data != 'unchanged') {
        kc.clearToken();
      }
      var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);
      for (var i = callbacks.length - 1; i >= 0; --i) {
        var promise = callbacks[i];
        if (event.data == 'error') {
          promise.setError();
        } else {
          promise.setSuccess(event.data == 'unchanged');
        }
      }
    };
    window.addEventListener('message', messageCallback, false);
    return promise.promise;
  }
  function scheduleCheckIframe() {
    if (loginIframe.enable) {
      if (kc.token) {
        setTimeout(function () {
          checkLoginIframe().then(function (unchanged) {
            if (unchanged) {
              scheduleCheckIframe();
            }
          });
        }, loginIframe.interval * 1000);
      }
    }
  }
  function checkLoginIframe() {
    var promise = createPromise();
    if (loginIframe.iframe && loginIframe.iframeOrigin) {
      var msg = kc.clientId + ' ' + (kc.sessionId ? kc.sessionId : '');
      loginIframe.callbackList.push(promise);
      var origin = loginIframe.iframeOrigin;
      if (loginIframe.callbackList.length == 1) {
        loginIframe.iframe.contentWindow.postMessage(msg, origin);
      }
    } else {
      promise.setSuccess();
    }
    return promise.promise;
  }
  function check3pCookiesSupported() {
    var promise = createPromise();
    if ((loginIframe.enable || kc.silentCheckSsoRedirectUri) && typeof kc.endpoints.thirdPartyCookiesIframe === 'function') {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', kc.endpoints.thirdPartyCookiesIframe());
      iframe.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin');
      iframe.setAttribute('title', 'keycloak-3p-check-iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      var _messageCallback2 = function messageCallback(event) {
        if (iframe.contentWindow !== event.source) {
          return;
        }
        if (event.data !== "supported" && event.data !== "unsupported") {
          return;
        } else if (event.data === "unsupported") {
          logWarn("[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:\n\n" + " - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).\n" + " - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).\n\n" + "For more information see: https://www.keycloak.org/securing-apps/javascript-adapter#_modern_browsers");
          loginIframe.enable = false;
          if (kc.silentCheckSsoFallback) {
            kc.silentCheckSsoRedirectUri = false;
          }
        }
        document.body.removeChild(iframe);
        window.removeEventListener("message", _messageCallback2);
        promise.setSuccess();
      };
      window.addEventListener('message', _messageCallback2, false);
    } else {
      promise.setSuccess();
    }
    return applyTimeoutToPromise(promise.promise, kc.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
  }
  function loadAdapter(type) {
    if (!type || type == 'default') {
      return {
        login: function () {
          var _login = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(options) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.t0 = window.location;
                  _context4.next = 3;
                  return kc.createLoginUrl(options);
                case 3:
                  _context4.t1 = _context4.sent;
                  _context4.t0.assign.call(_context4.t0, _context4.t1);
                  return _context4.abrupt("return", createPromise().promise);
                case 6:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function login(_x5) {
            return _login.apply(this, arguments);
          }
          return login;
        }(),
        logout: function () {
          var _logout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(options) {
            var _options$logoutMethod2;
            var logoutMethod, form, data, _i2, _Object$entries, _Object$entries$_i, name, value, input;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  logoutMethod = (_options$logoutMethod2 = options === null || options === void 0 ? void 0 : options.logoutMethod) !== null && _options$logoutMethod2 !== void 0 ? _options$logoutMethod2 : kc.logoutMethod;
                  if (!(logoutMethod === "GET")) {
                    _context5.next = 4;
                    break;
                  }
                  window.location.replace(kc.createLogoutUrl(options));
                  return _context5.abrupt("return");
                case 4:
                  // Create form to send POST request.
                  form = document.createElement("form");
                  form.setAttribute("method", "POST");
                  form.setAttribute("action", kc.createLogoutUrl(options));
                  form.style.display = "none";

                  // Add data to form as hidden input fields.
                  data = {
                    id_token_hint: kc.idToken,
                    client_id: kc.clientId,
                    post_logout_redirect_uri: adapter.redirectUri(options, false)
                  };
                  for (_i2 = 0, _Object$entries = Object.entries(data); _i2 < _Object$entries.length; _i2++) {
                    _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2), name = _Object$entries$_i[0], value = _Object$entries$_i[1];
                    input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    input.setAttribute("name", name);
                    input.setAttribute("value", value);
                    form.appendChild(input);
                  }

                  // Append form to page and submit it to perform logout and redirect.
                  document.body.appendChild(form);
                  form.submit();
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function logout(_x6) {
            return _logout.apply(this, arguments);
          }
          return logout;
        }(),
        register: function () {
          var _register = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(options) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.t0 = window.location;
                  _context6.next = 3;
                  return kc.createRegisterUrl(options);
                case 3:
                  _context6.t1 = _context6.sent;
                  _context6.t0.assign.call(_context6.t0, _context6.t1);
                  return _context6.abrupt("return", createPromise().promise);
                case 6:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function register(_x7) {
            return _register.apply(this, arguments);
          }
          return register;
        }(),
        accountManagement: function accountManagement() {
          var accountUrl = kc.createAccountUrl();
          if (typeof accountUrl !== 'undefined') {
            window.location.href = accountUrl;
          } else {
            throw "Not supported by the OIDC server";
          }
          return createPromise().promise;
        },
        redirectUri: function redirectUri(options, encodeHash) {
          if (arguments.length == 1) {
            encodeHash = true;
          }
          if (options && options.redirectUri) {
            return options.redirectUri;
          } else if (kc.redirectUri) {
            return kc.redirectUri;
          } else {
            return location.href;
          }
        }
      };
    }
    if (type == 'cordova') {
      loginIframe.enable = false;
      var cordovaOpenWindowWrapper = function cordovaOpenWindowWrapper(loginUrl, target, options) {
        if (window.cordova && window.cordova.InAppBrowser) {
          // Use inappbrowser for IOS and Android if available
          return window.cordova.InAppBrowser.open(loginUrl, target, options);
        } else {
          return window.open(loginUrl, target, options);
        }
      };
      var shallowCloneCordovaOptions = function shallowCloneCordovaOptions(userOptions) {
        if (userOptions && userOptions.cordovaOptions) {
          return Object.keys(userOptions.cordovaOptions).reduce(function (options, optionName) {
            options[optionName] = userOptions.cordovaOptions[optionName];
            return options;
          }, {});
        } else {
          return {};
        }
      };
      var formatCordovaOptions = function formatCordovaOptions(cordovaOptions) {
        return Object.keys(cordovaOptions).reduce(function (options, optionName) {
          options.push(optionName + "=" + cordovaOptions[optionName]);
          return options;
        }, []).join(",");
      };
      var createCordovaOptions = function createCordovaOptions(userOptions) {
        var cordovaOptions = shallowCloneCordovaOptions(userOptions);
        cordovaOptions.location = 'no';
        if (userOptions && userOptions.prompt == 'none') {
          cordovaOptions.hidden = 'yes';
        }
        return formatCordovaOptions(cordovaOptions);
      };
      var getCordovaRedirectUri = function getCordovaRedirectUri() {
        return kc.redirectUri || 'http://localhost';
      };
      return {
        login: function () {
          var _login2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(options) {
            var promise, cordovaOptions, loginUrl, ref, completed, closed, closeBrowser;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  promise = createPromise();
                  cordovaOptions = createCordovaOptions(options);
                  _context7.next = 4;
                  return kc.createLoginUrl(options);
                case 4:
                  loginUrl = _context7.sent;
                  ref = cordovaOpenWindowWrapper(loginUrl, '_blank', cordovaOptions);
                  completed = false;
                  closed = false;
                  closeBrowser = function closeBrowser() {
                    closed = true;
                    ref.close();
                  };
                  ref.addEventListener('loadstart', function (event) {
                    if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                      var callback = parseCallback(event.url);
                      processCallback(callback, promise);
                      closeBrowser();
                      completed = true;
                    }
                  });
                  ref.addEventListener('loaderror', function (event) {
                    if (!completed) {
                      if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                        var callback = parseCallback(event.url);
                        processCallback(callback, promise);
                        closeBrowser();
                        completed = true;
                      } else {
                        promise.setError();
                        closeBrowser();
                      }
                    }
                  });
                  ref.addEventListener('exit', function (event) {
                    if (!closed) {
                      promise.setError({
                        reason: "closed_by_user"
                      });
                    }
                  });
                  return _context7.abrupt("return", promise.promise);
                case 13:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          function login(_x8) {
            return _login2.apply(this, arguments);
          }
          return login;
        }(),
        logout: function logout(options) {
          var promise = createPromise();
          var logoutUrl = kc.createLogoutUrl(options);
          var ref = cordovaOpenWindowWrapper(logoutUrl, '_blank', 'location=no,hidden=yes,clearcache=yes');
          var error;
          ref.addEventListener('loadstart', function (event) {
            if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
              ref.close();
            }
          });
          ref.addEventListener('loaderror', function (event) {
            if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
              ref.close();
            } else {
              error = true;
              ref.close();
            }
          });
          ref.addEventListener('exit', function (event) {
            if (error) {
              promise.setError();
            } else {
              kc.clearToken();
              promise.setSuccess();
            }
          });
          return promise.promise;
        },
        register: function () {
          var _register2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(options) {
            var promise, registerUrl, cordovaOptions, ref;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  promise = createPromise();
                  _context8.next = 3;
                  return kc.createRegisterUrl();
                case 3:
                  registerUrl = _context8.sent;
                  cordovaOptions = createCordovaOptions(options);
                  ref = cordovaOpenWindowWrapper(registerUrl, '_blank', cordovaOptions);
                  ref.addEventListener('loadstart', function (event) {
                    if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                      ref.close();
                      var oauth = parseCallback(event.url);
                      processCallback(oauth, promise);
                    }
                  });
                  return _context8.abrupt("return", promise.promise);
                case 8:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function register(_x9) {
            return _register2.apply(this, arguments);
          }
          return register;
        }(),
        accountManagement: function accountManagement() {
          var accountUrl = kc.createAccountUrl();
          if (typeof accountUrl !== 'undefined') {
            var ref = cordovaOpenWindowWrapper(accountUrl, '_blank', 'location=no');
            ref.addEventListener('loadstart', function (event) {
              if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                ref.close();
              }
            });
          } else {
            throw "Not supported by the OIDC server";
          }
        },
        redirectUri: function redirectUri(options) {
          return getCordovaRedirectUri();
        }
      };
    }
    if (type == 'cordova-native') {
      loginIframe.enable = false;
      return {
        login: function () {
          var _login3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(options) {
            var promise, loginUrl;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  promise = createPromise();
                  _context9.next = 3;
                  return kc.createLoginUrl(options);
                case 3:
                  loginUrl = _context9.sent;
                  universalLinks.subscribe('keycloak', function (event) {
                    universalLinks.unsubscribe('keycloak');
                    window.cordova.plugins.browsertab.close();
                    var oauth = parseCallback(event.url);
                    processCallback(oauth, promise);
                  });
                  window.cordova.plugins.browsertab.openUrl(loginUrl);
                  return _context9.abrupt("return", promise.promise);
                case 7:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
          function login(_x10) {
            return _login3.apply(this, arguments);
          }
          return login;
        }(),
        logout: function logout(options) {
          var promise = createPromise();
          var logoutUrl = kc.createLogoutUrl(options);
          universalLinks.subscribe('keycloak', function (event) {
            universalLinks.unsubscribe('keycloak');
            window.cordova.plugins.browsertab.close();
            kc.clearToken();
            promise.setSuccess();
          });
          window.cordova.plugins.browsertab.openUrl(logoutUrl);
          return promise.promise;
        },
        register: function () {
          var _register3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(options) {
            var promise, registerUrl;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  promise = createPromise();
                  _context10.next = 3;
                  return kc.createRegisterUrl(options);
                case 3:
                  registerUrl = _context10.sent;
                  universalLinks.subscribe('keycloak', function (event) {
                    universalLinks.unsubscribe('keycloak');
                    window.cordova.plugins.browsertab.close();
                    var oauth = parseCallback(event.url);
                    processCallback(oauth, promise);
                  });
                  window.cordova.plugins.browsertab.openUrl(registerUrl);
                  return _context10.abrupt("return", promise.promise);
                case 7:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          }));
          function register(_x11) {
            return _register3.apply(this, arguments);
          }
          return register;
        }(),
        accountManagement: function accountManagement() {
          var accountUrl = kc.createAccountUrl();
          if (typeof accountUrl !== 'undefined') {
            window.cordova.plugins.browsertab.openUrl(accountUrl);
          } else {
            throw "Not supported by the OIDC server";
          }
        },
        redirectUri: function redirectUri(options) {
          if (options && options.redirectUri) {
            return options.redirectUri;
          } else if (kc.redirectUri) {
            return kc.redirectUri;
          } else {
            return "http://localhost";
          }
        }
      };
    }
    throw 'invalid adapter type: ' + type;
  }
  var STORAGE_KEY_PREFIX = 'kc-callback-';
  var _LocalStorage = function LocalStorage() {
    if (!(this instanceof _LocalStorage)) {
      return new _LocalStorage();
    }
    localStorage.setItem('kc-test', 'test');
    localStorage.removeItem('kc-test');
    var cs = this;

    /**
     * Clears all values from local storage that are no longer valid.
     */
    function clearInvalidValues() {
      var currentTime = Date.now();
      var _iterator = _createForOfIteratorHelper(getStoredEntries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          // Attempt to parse the expiry time from the value.
          var expiry = parseExpiry(value);

          // Discard the value if it is malformed or expired.
          if (expiry === null || expiry < currentTime) {
            localStorage.removeItem(key);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Clears all known values from local storage.
     */
    function clearAllValues() {
      var _iterator2 = _createForOfIteratorHelper(getStoredEntries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 1),
            key = _step2$value[0];
          localStorage.removeItem(key);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    /**
     * Gets all entries stored in local storage that are known to be managed by this class.
     * @returns {Array<[string, unknown]>} An array of key-value pairs.
     */
    function getStoredEntries() {
      return Object.entries(localStorage).filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 1),
          key = _ref5[0];
        return key.startsWith(STORAGE_KEY_PREFIX);
      });
    }

    /**
     * Parses the expiry time from a value stored in local storage.
     * @param {unknown} value
     * @returns {number | null} The expiry time in milliseconds, or `null` if the value is malformed.
     */
    function parseExpiry(value) {
      var parsedValue;

      // Attempt to parse the value as JSON.
      try {
        parsedValue = JSON.parse(value);
      } catch (error) {
        return null;
      }

      // Attempt to extract the 'expires' property.
      if (isObject(parsedValue) && 'expires' in parsedValue && typeof parsedValue.expires === 'number') {
        return parsedValue.expires;
      }
      return null;
    }
    cs.get = function (state) {
      if (!state) {
        return;
      }
      var key = STORAGE_KEY_PREFIX + state;
      var value = localStorage.getItem(key);
      if (value) {
        localStorage.removeItem(key);
        value = JSON.parse(value);
      }
      clearInvalidValues();
      return value;
    };
    cs.add = function (state) {
      clearInvalidValues();
      var key = STORAGE_KEY_PREFIX + state.state;
      var value = JSON.stringify(_objectSpread(_objectSpread({}, state), {}, {
        // Set the expiry time to 1 hour from now.
        expires: Date.now() + 60 * 60 * 1000
      }));
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        // If the storage is full, clear all known values and try again.
        clearAllValues();
        localStorage.setItem(key, value);
      }
    };
  };
  var _CookieStorage = function CookieStorage() {
    if (!(this instanceof _CookieStorage)) {
      return new _CookieStorage();
    }
    var cs = this;
    cs.get = function (state) {
      if (!state) {
        return;
      }
      var value = getCookie(STORAGE_KEY_PREFIX + state);
      setCookie(STORAGE_KEY_PREFIX + state, '', cookieExpiration(-100));
      if (value) {
        return JSON.parse(value);
      }
    };
    cs.add = function (state) {
      setCookie(STORAGE_KEY_PREFIX + state.state, JSON.stringify(state), cookieExpiration(60));
    };
    cs.removeItem = function (key) {
      setCookie(key, '', cookieExpiration(-100));
    };
    var cookieExpiration = function cookieExpiration(minutes) {
      var exp = new Date();
      exp.setTime(exp.getTime() + minutes * 60 * 1000);
      return exp;
    };
    var getCookie = function getCookie(key) {
      var name = key + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    };
    var setCookie = function setCookie(key, value, expirationDate) {
      var cookie = key + '=' + value + '; ' + 'expires=' + expirationDate.toUTCString() + '; ';
      document.cookie = cookie;
    };
  };
  function createCallbackStorage() {
    try {
      return new _LocalStorage();
    } catch (err) {}
    return new _CookieStorage();
  }
  function createLogger(fn) {
    return function () {
      if (kc.enableLogging) {
        fn.apply(console, Array.prototype.slice.call(arguments));
      }
    };
  }
}
var _default = exports["default"] = Keycloak;
/**
 * @param {ArrayBuffer} bytes
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
 */
function bytesToBase64(bytes) {
  var binString = String.fromCodePoint.apply(String, _toConsumableArray(bytes));
  return btoa(binString);
}

/**
 * @param {string} message
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#basic_example
 */
function sha256Digest(_x12) {
  return _sha256Digest.apply(this, arguments);
}
/**
 * @param {string} token
 */
function _sha256Digest() {
  _sha256Digest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(message) {
    var encoder, data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          encoder = new TextEncoder();
          data = encoder.encode(message);
          if (!(typeof crypto === "undefined" || typeof crypto.subtle === "undefined")) {
            _context12.next = 4;
            break;
          }
          throw new Error("Web Crypto API is not available.");
        case 4:
          _context12.next = 6;
          return crypto.subtle.digest("SHA-256", data);
        case 6:
          return _context12.abrupt("return", _context12.sent);
        case 7:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _sha256Digest.apply(this, arguments);
}
function decodeToken(token) {
  var _token$split = token.split("."),
    _token$split2 = _slicedToArray(_token$split, 2),
    header = _token$split2[0],
    payload = _token$split2[1];
  if (typeof payload !== "string") {
    throw new Error("Unable to decode token, payload not found.");
  }
  var decoded;
  try {
    decoded = base64UrlDecode(payload);
  } catch (error) {
    throw new Error("Unable to decode token, payload is not a valid Base64URL value.", {
      cause: error
    });
  }
  try {
    return JSON.parse(decoded);
  } catch (error) {
    throw new Error("Unable to decode token, payload is not a valid JSON value.", {
      cause: error
    });
  }
}

/**
 * @param {string} input
 */
function base64UrlDecode(input) {
  var output = input.replaceAll("-", "+").replaceAll("_", "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("Input is not of the correct length.");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (error) {
    return atob(output);
  }
}

/**
 * @param {string} input
 */
function b64DecodeUnicode(input) {
  return decodeURIComponent(atob(input).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}

/**
 * Check if the input is an object that can be operated on.
 * @param {unknown} input
 */
function isObject(input) {
  return _typeof(input) === 'object' && input !== null;
}