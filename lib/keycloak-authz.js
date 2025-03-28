"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 *  Copyright 2016 Red Hat, Inc. and/or its affiliates
 *  and other contributors as indicated by the @author tags.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

var KeycloakAuthorization = function KeycloakAuthorization(keycloak, options) {
  var _instance = this;
  this.rpt = null;

  // Only here for backwards compatibility, as the configuration is now loaded on demand.
  // See:
  // - https://github.com/keycloak/keycloak/pull/6619
  // - https://issues.redhat.com/browse/KEYCLOAK-10894
  // TODO: Remove both `ready` property and `init` method in a future version
  Object.defineProperty(this, 'ready', {
    get: function get() {
      console.warn("The 'ready' property is deprecated and will be removed in a future version. Initialization now happens automatically, using this property is no longer required.");
      return Promise.resolve();
    }
  });
  this.init = function () {
    console.warn("The 'init()' method is deprecated and will be removed in a future version. Initialization now happens automatically, calling this method is no longer required.");
  };

  /** @type {Promise<unknown> | undefined} */
  var configPromise;

  /**
   * Initializes the configuration or re-uses the existing one if present.
   * @returns {Promise<void>} A promise that resolves when the configuration is loaded.
   */
  function initializeConfigIfNeeded() {
    return _initializeConfigIfNeeded.apply(this, arguments);
  }
  /**
   * This method enables client applications to better integrate with resource servers protected by a Keycloak
   * policy enforcer using UMA protocol.
   *
   * The authorization request must be provided with a ticket.
   */
  function _initializeConfigIfNeeded() {
    _initializeConfigIfNeeded = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!_instance.config) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", _instance.config);
          case 2:
            if (!configPromise) {
              _context3.next = 6;
              break;
            }
            _context3.next = 5;
            return configPromise;
          case 5:
            return _context3.abrupt("return", _context3.sent);
          case 6:
            if (keycloak.didInitialize) {
              _context3.next = 8;
              break;
            }
            throw new Error('The Keycloak instance has not been initialized yet.');
          case 8:
            configPromise = loadConfig(keycloak.authServerUrl, keycloak.realm);
            _context3.next = 11;
            return configPromise;
          case 11:
            _instance.config = _context3.sent;
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _initializeConfigIfNeeded.apply(this, arguments);
  }
  this.authorize = function (authorizationRequest) {
    this.then = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(onGrant, onDeny, onError) {
        var request, params, metadata;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return initializeConfigIfNeeded();
            case 3:
              _context.next = 9;
              break;
            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              handleError(_context.t0, onError);
              return _context.abrupt("return");
            case 9:
              if (authorizationRequest && authorizationRequest.ticket) {
                request = new XMLHttpRequest();
                request.open('POST', _instance.config.token_endpoint, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);
                request.onreadystatechange = function () {
                  if (request.readyState == 4) {
                    var status = request.status;
                    if (status >= 200 && status < 300) {
                      var rpt = JSON.parse(request.responseText).access_token;
                      _instance.rpt = rpt;
                      onGrant(rpt);
                    } else if (status == 403) {
                      if (onDeny) {
                        onDeny();
                      } else {
                        console.error('Authorization request was denied by the server.');
                      }
                    } else {
                      if (onError) {
                        onError();
                      } else {
                        console.error('Could not obtain authorization data from server.');
                      }
                    }
                  }
                };
                params = "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket&client_id=" + keycloak.clientId + "&ticket=" + authorizationRequest.ticket;
                if (authorizationRequest.submitRequest != undefined) {
                  params += "&submit_request=" + authorizationRequest.submitRequest;
                }
                metadata = authorizationRequest.metadata;
                if (metadata) {
                  if (metadata.responseIncludeResourceName) {
                    params += "&response_include_resource_name=" + metadata.responseIncludeResourceName;
                  }
                  if (metadata.responsePermissionsLimit) {
                    params += "&response_permissions_limit=" + metadata.responsePermissionsLimit;
                  }
                }
                if (_instance.rpt && (authorizationRequest.incrementalAuthorization == undefined || authorizationRequest.incrementalAuthorization)) {
                  params += "&rpt=" + _instance.rpt;
                }
                request.send(params);
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 5]]);
      }));
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
    return this;
  };

  /**
   * Obtains all entitlements from a Keycloak Server based on a given resourceServerId.
   */
  this.entitlement = function (resourceServerId, authorizationRequest) {
    this.then = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(onGrant, onDeny, onError) {
        var request, params, permissions, i, resource, permission, j, scope, metadata;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return initializeConfigIfNeeded();
            case 3:
              _context2.next = 9;
              break;
            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              handleError(_context2.t0, onError);
              return _context2.abrupt("return");
            case 9:
              request = new XMLHttpRequest();
              request.open('POST', _instance.config.token_endpoint, true);
              request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              request.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);
              request.onreadystatechange = function () {
                if (request.readyState == 4) {
                  var status = request.status;
                  if (status >= 200 && status < 300) {
                    var rpt = JSON.parse(request.responseText).access_token;
                    _instance.rpt = rpt;
                    onGrant(rpt);
                  } else if (status == 403) {
                    if (onDeny) {
                      onDeny();
                    } else {
                      console.error('Authorization request was denied by the server.');
                    }
                  } else {
                    if (onError) {
                      onError();
                    } else {
                      console.error('Could not obtain authorization data from server.');
                    }
                  }
                }
              };
              if (!authorizationRequest) {
                authorizationRequest = {};
              }
              params = "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket&client_id=" + keycloak.clientId;
              if (authorizationRequest.claimToken) {
                params += "&claim_token=" + authorizationRequest.claimToken;
                if (authorizationRequest.claimTokenFormat) {
                  params += "&claim_token_format=" + authorizationRequest.claimTokenFormat;
                }
              }
              params += "&audience=" + resourceServerId;
              permissions = authorizationRequest.permissions;
              if (!permissions) {
                permissions = [];
              }
              for (i = 0; i < permissions.length; i++) {
                resource = permissions[i];
                permission = resource.id;
                if (resource.scopes && resource.scopes.length > 0) {
                  permission += "#";
                  for (j = 0; j < resource.scopes.length; j++) {
                    scope = resource.scopes[j];
                    if (permission.indexOf('#') != permission.length - 1) {
                      permission += ",";
                    }
                    permission += scope;
                  }
                }
                params += "&permission=" + permission;
              }
              metadata = authorizationRequest.metadata;
              if (metadata) {
                if (metadata.responseIncludeResourceName) {
                  params += "&response_include_resource_name=" + metadata.responseIncludeResourceName;
                }
                if (metadata.responsePermissionsLimit) {
                  params += "&response_permissions_limit=" + metadata.responsePermissionsLimit;
                }
              }
              if (_instance.rpt) {
                params += "&rpt=" + _instance.rpt;
              }
              request.send(params);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 5]]);
      }));
      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }();
    return this;
  };
  return this;
};

/**
 * Obtains the configuration from the server.
 * @param {string} serverUrl The URL of the Keycloak server.
 * @param {string} realm The realm name.
 * @returns {Promise<unknown>} A promise that resolves when the configuration is loaded.
 */
function loadConfig(_x7, _x8) {
  return _loadConfig.apply(this, arguments);
}
/**
 * Fetches the JSON data from the given URL.
 * @param {string} url The URL to fetch the data from.
 * @returns {Promise<unknown>} A promise that resolves when the data is loaded.
 */
function _loadConfig() {
  _loadConfig = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(serverUrl, realm) {
    var url;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          url = "".concat(serverUrl, "/realms/").concat(encodeURIComponent(realm), "/.well-known/uma2-configuration");
          _context4.prev = 1;
          _context4.next = 4;
          return fetchJSON(url);
        case 4:
          return _context4.abrupt("return", _context4.sent);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          throw new Error('Could not obtain configuration from server.', {
            cause: _context4.t0
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return _loadConfig.apply(this, arguments);
}
function fetchJSON(_x9) {
  return _fetchJSON.apply(this, arguments);
}
/**
 * @param {unknown} error 
 * @param {((error: unknown) => void) | undefined} handler 
 */
function _fetchJSON() {
  _fetchJSON = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
    var response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetch(url);
        case 3:
          response = _context5.sent;
          _context5.next = 9;
          break;
        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          throw new Error('Server did not respond.', {
            cause: _context5.t0
          });
        case 9:
          if (response.ok) {
            _context5.next = 11;
            break;
          }
          throw new Error('Server responded with an invalid status.');
        case 11:
          _context5.prev = 11;
          _context5.next = 14;
          return response.json();
        case 14:
          return _context5.abrupt("return", _context5.sent);
        case 17:
          _context5.prev = 17;
          _context5.t1 = _context5["catch"](11);
          throw new Error('Server responded with invalid JSON.', {
            cause: _context5.t1
          });
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 6], [11, 17]]);
  }));
  return _fetchJSON.apply(this, arguments);
}
function handleError(error, handler) {
  if (handler) {
    handler(error);
  } else {
    console.error(message, error);
  }
}
var _default = exports["default"] = KeycloakAuthorization;