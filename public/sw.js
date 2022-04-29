(() => {
  var __create = Object.create;
  var __freeze = Object.freeze;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x4) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x4, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x4)(function(x4) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x4 + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target2, all) => {
    for (var name in all)
      __defProp(target2, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key2 of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from2[key2], enumerable: !(desc = __getOwnPropDesc(from2, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));

  // env.js
  var init_env = __esm({
    "env.js"() {
      self.DENO_STORAGE_AREA__DEFAULT_URL = "sqlite://database.sqlite";
    }
  });

  // node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/tslib.js"(exports, module) {
      init_env();
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet9;
      var __classPrivateFieldSet9;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root = typeof self === "object" ? self : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target2, key2, desc) {
          var c = arguments.length, r = c < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key2) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target2, key2, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target2, key2, r) : d(target2, key2)) || r;
          return c > 3 && r && Object.defineProperty(target2, key2, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target2, key2) {
            decorator(target2, key2, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from2, pack2) {
          if (pack2 || arguments.length === 2)
            for (var i = 0, l = from2.length, ar; i < l; i++) {
              if (ar || !(i in from2)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from2, 0, i);
                ar[i] = from2[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from2));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet9 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet9 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet9);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet9);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // node_modules/.pnpm/negotiated@1.0.2/node_modules/negotiated/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/.pnpm/negotiated@1.0.2/node_modules/negotiated/lib/parser.js"(exports, module) {
      "use strict";
      init_env();
      module.exports = class Parser {
        constructor(source) {
          this.source = source;
          this.index = 0;
        }
        accept({ regex, capture }) {
          regex.lastIndex = this.index;
          const match2 = this.source.match(regex);
          if (match2) {
            this.index += match2[0].length;
            return capture === -1 ? match2 : match2[capture];
          }
          return null;
        }
        expect(pattern) {
          const result = this.accept(pattern);
          if (result !== null)
            return result;
          throw new Error("Malformed header value");
        }
        ended() {
          return this.index === this.source.length;
        }
      };
    }
  });

  // node_modules/.pnpm/negotiated@1.0.2/node_modules/negotiated/lib/patterns.js
  var require_patterns = __commonJS({
    "node_modules/.pnpm/negotiated@1.0.2/node_modules/negotiated/lib/patterns.js"(exports) {
      "use strict";
      init_env();
      var pattern = (capture, regex) => ({ regex, capture });
      exports.token = pattern(0, /[-!#$%&'*+.^_`|~a-z\d]+/yi);
      exports.mediaRange = pattern(0, /[-!#$%&'*+.^_`|~a-z\d]+\/[-!#$%&'*+.^_`|~a-z\d]+/yi);
      exports.languageRange = pattern(0, /[a-z]{1,8}(?:-[a-z\d]{1,8})*|\*/yi);
      exports.trailers = pattern(0, /trailers/yi);
      exports.transferCoding = pattern(0, /gzip|deflate|compress|chunked/yi);
      exports.parameters = pattern(0, /(?:[ \t]*;[ \t]*(?!q=)[-!#$%&'*+.^_`|~a-z\d]+=(?:[-!#$%&'*+.^_`|~a-z\d]+|"(?:[ \t\x21\x23-\x5b\x5d-\x7e\x80-\xff]|\\[ \t\x21-\x7e\x80-\xff])*"))*/yi);
      exports.transferParameters = pattern(0, /(?:[ \t]*;[ \t]*(?!q=)[-!#$%&'*+.^_`|~a-z\d]+[ \t]*=[ \t]*(?:[-!#$%&'*+.^_`|~a-z\d]+|"(?:[ \t\x21\x23-\x5b\x5d-\x7e\x80-\xff]|\\[ \t\x21-\x7e\x80-\xff])*"))*/yi);
      exports.extensions = pattern(0, /(?:[ \t]*;[ \t]*[-!#$%&'*+.^_`|~a-z\d]+(?:=(?:[-!#$%&'*+.^_`|~a-z\d]+|"(?:[ \t\x21\x23-\x5b\x5d-\x7e\x80-\xff]|\\[ \t\x21-\x7e\x80-\xff])*"))?)*/yi);
      exports.qvalue = pattern(1, /[ \t]*;[ \t]*q=(0(?:\.\d{0,3})?|1(?:\.0{0,3})?)/yi);
      exports.comma = pattern(0, /[ \t]*,[ \t]*/yi);
      exports.nextParameter = pattern(-1, /[; \t]+([^=; \t]+)(?:[= \t]+([^"; \t]+|"(?:[^"\\]|\\.)*"))?/yi);
    }
  });

  // node_modules/.pnpm/negotiated@1.0.2/node_modules/negotiated/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/negotiated@1.0.2/node_modules/negotiated/lib/index.js"(exports) {
      "use strict";
      init_env();
      var Parser3 = require_parser();
      var patterns = require_patterns();
      var quotedPair = /\\(.)/g;
      var simpleAccept = (name, subjectPattern) => function* (header) {
        if (!header)
          return;
        if (typeof header !== "string")
          throw new TypeError("Expected header to be a string");
        for (const parser = new Parser3(header); ; ) {
          const subject = parser.expect(subjectPattern).toLowerCase();
          const weight = +(parser.accept(patterns.qvalue) || 1);
          yield { [name]: subject, weight };
          if (parser.ended())
            return;
          parser.expect(patterns.comma);
        }
      };
      exports.mediaTypes = function* (header) {
        if (!header)
          return;
        if (typeof header !== "string")
          throw new TypeError("Expected header to be a string");
        for (const parser = new Parser3(header); ; ) {
          const type = parser.expect(patterns.mediaRange).toLowerCase();
          const params = parser.accept(patterns.parameters);
          const qvalue = parser.accept(patterns.qvalue);
          const extensions2 = qvalue ? parser.accept(patterns.extensions) : "";
          const weight = qvalue ? +qvalue : 1;
          yield { type, params, weight, extensions: extensions2 };
          if (parser.ended())
            return;
          parser.expect(patterns.comma);
        }
      };
      exports.charsets = simpleAccept("charset", patterns.token);
      exports.encodings = simpleAccept("encoding", patterns.token);
      exports.languages = simpleAccept("language", patterns.languageRange);
      exports.transferEncodings = function* (header) {
        if (!header)
          return;
        if (typeof header !== "string")
          throw new TypeError("Expected header to be a string");
        for (const parser = new Parser3(header); ; ) {
          if (!parser.accept(patterns.trailers)) {
            let encoding = parser.accept(patterns.transferCoding);
            let params = "";
            if (encoding) {
              encoding = encoding.toLowerCase();
              if (encoding === "chunked")
                throw new Error("Malformed header value");
            } else {
              encoding = parser.expect(patterns.token).toLowerCase();
              params = parser.accept(patterns.transferParameters);
            }
            const weight = +(parser.accept(patterns.qvalue) || 1);
            yield { encoding, params, weight };
          }
          if (parser.ended())
            return;
          parser.expect(patterns.comma);
        }
      };
      exports.parameters = function* (params) {
        if (!params)
          return;
        if (typeof params !== "string")
          throw new TypeError("Expected parameters to be a string");
        for (const parser = new Parser3(params); ; ) {
          let [, key2, value] = parser.expect(patterns.nextParameter);
          key2 = key2.toLowerCase();
          if (value && value.charCodeAt(0) === 34)
            value = value.slice(1, -1).replace(quotedPair, "$1");
          yield { key: key2, value };
          if (parser.ended())
            return;
        }
      };
    }
  });

  // node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    "node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      init_env();
      function Mime2() {
        this._types = /* @__PURE__ */ Object.create(null);
        this._extensions = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < arguments.length; i++) {
          this.define(arguments[i]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime2.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions2 = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i = 0; i < extensions2.length; i++) {
            const ext = extensions2[i];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions2[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime2.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime2.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime2;
    }
  });

  // node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    "node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js"(exports, module) {
      init_env();
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/other.js
  var require_other = __commonJS({
    "node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/other.js"(exports, module) {
      init_env();
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // node_modules/.pnpm/mime@3.0.0/node_modules/mime/index.js
  var require_mime = __commonJS({
    "node_modules/.pnpm/mime@3.0.0/node_modules/mime/index.js"(exports, module) {
      "use strict";
      init_env();
      var Mime2 = require_Mime();
      module.exports = new Mime2(require_standard(), require_other());
    }
  });

  // node_modules/.pnpm/@cloudflare+kv-asset-handler@0.2.0/node_modules/@cloudflare/kv-asset-handler/dist/types.js
  var require_types = __commonJS({
    "node_modules/.pnpm/@cloudflare+kv-asset-handler@0.2.0/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
      var KVError = class extends Error {
        constructor(message, status = 500) {
          super(message);
          Object.setPrototypeOf(this, new.target.prototype);
          this.name = KVError.name;
          this.status = status;
        }
      };
      exports.KVError = KVError;
      var MethodNotAllowedError = class extends KVError {
        constructor(message = `Not a valid request method`, status = 405) {
          super(message, status);
        }
      };
      exports.MethodNotAllowedError = MethodNotAllowedError;
      var NotFoundError = class extends KVError {
        constructor(message = `Not Found`, status = 404) {
          super(message, status);
        }
      };
      exports.NotFoundError = NotFoundError;
      var InternalError = class extends KVError {
        constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
          super(message, status);
        }
      };
      exports.InternalError = InternalError;
    }
  });

  // node_modules/.pnpm/@cloudflare+kv-asset-handler@0.2.0/node_modules/@cloudflare/kv-asset-handler/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/@cloudflare+kv-asset-handler@0.2.0/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
      var mime = require_mime();
      var types_1 = require_types();
      Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
        return types_1.MethodNotAllowedError;
      } });
      Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
        return types_1.NotFoundError;
      } });
      Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
        return types_1.InternalError;
      } });
      var defaultCacheControl = {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24,
        bypassCache: false
      };
      var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
      var getAssetFromKVDefaultOptions = {
        ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
        ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : {},
        cacheControl: defaultCacheControl,
        defaultMimeType: "text/plain",
        defaultDocument: "index.html",
        pathIsEncoded: false
      };
      function assignOptions(options) {
        return Object.assign({}, getAssetFromKVDefaultOptions, options);
      }
      var mapRequestToAsset2 = (request, options) => {
        options = assignOptions(options);
        const parsedUrl = new URL(request.url);
        let pathname = parsedUrl.pathname;
        if (pathname.endsWith("/")) {
          pathname = pathname.concat(options.defaultDocument);
        } else if (!mime.getType(pathname)) {
          pathname = pathname.concat("/" + options.defaultDocument);
        }
        parsedUrl.pathname = pathname;
        return new Request(parsedUrl.toString(), request);
      };
      exports.mapRequestToAsset = mapRequestToAsset2;
      function serveSinglePageApp(request, options) {
        options = assignOptions(options);
        request = mapRequestToAsset2(request, options);
        const parsedUrl = new URL(request.url);
        if (parsedUrl.pathname.endsWith(".html")) {
          return new Request(`${parsedUrl.origin}/${options.defaultDocument}`, request);
        } else {
          return request;
        }
      }
      exports.serveSinglePageApp = serveSinglePageApp;
      var getAssetFromKV2 = async (event, options) => {
        options = assignOptions(options);
        const request = event.request;
        const ASSET_NAMESPACE = options.ASSET_NAMESPACE;
        const ASSET_MANIFEST = parseStringAsObject(options.ASSET_MANIFEST);
        if (typeof ASSET_NAMESPACE === "undefined") {
          throw new types_1.InternalError(`there is no KV namespace bound to the script`);
        }
        const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
        let pathIsEncoded = options.pathIsEncoded;
        let requestKey;
        if (options.mapRequestToAsset) {
          requestKey = options.mapRequestToAsset(request);
        } else if (ASSET_MANIFEST[rawPathKey]) {
          requestKey = request;
        } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
          pathIsEncoded = true;
          requestKey = request;
        } else {
          const mappedRequest = mapRequestToAsset2(request);
          const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
          if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
            pathIsEncoded = true;
            requestKey = mappedRequest;
          } else {
            requestKey = mapRequestToAsset2(request, options);
          }
        }
        const SUPPORTED_METHODS = ["GET", "HEAD"];
        if (!SUPPORTED_METHODS.includes(requestKey.method)) {
          throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
        }
        const parsedUrl = new URL(requestKey.url);
        const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
        let pathKey = pathname.replace(/^\/+/, "");
        const cache = caches.default;
        let mimeType = mime.getType(pathKey) || options.defaultMimeType;
        if (mimeType.startsWith("text") || mimeType === "application/javascript") {
          mimeType += "; charset=utf-8";
        }
        let shouldEdgeCache = false;
        if (typeof ASSET_MANIFEST !== "undefined") {
          if (ASSET_MANIFEST[pathKey]) {
            pathKey = ASSET_MANIFEST[pathKey];
            shouldEdgeCache = true;
          }
        }
        let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
        const evalCacheOpts = (() => {
          switch (typeof options.cacheControl) {
            case "function":
              return options.cacheControl(request);
            case "object":
              return options.cacheControl;
            default:
              return defaultCacheControl;
          }
        })();
        const formatETag = (entityId = pathKey, validatorType = "strong") => {
          if (!entityId) {
            return "";
          }
          switch (validatorType) {
            case "weak":
              if (!entityId.startsWith("W/")) {
                return `W/${entityId}`;
              }
              return entityId;
            case "strong":
              if (entityId.startsWith(`W/"`)) {
                entityId = entityId.replace("W/", "");
              }
              if (!entityId.endsWith(`"`)) {
                entityId = `"${entityId}"`;
              }
              return entityId;
            default:
              return "";
          }
        };
        options.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
        if (options.cacheControl.bypassCache || options.cacheControl.edgeTTL === null || request.method == "HEAD") {
          shouldEdgeCache = false;
        }
        const shouldSetBrowserCache = typeof options.cacheControl.browserTTL === "number";
        let response = null;
        if (shouldEdgeCache) {
          response = await cache.match(cacheKey);
        }
        if (response) {
          if (response.status > 300 && response.status < 400) {
            if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
              response.body.cancel();
            } else {
            }
            response = new Response(null, response);
          } else {
            let opts = {
              headers: new Headers(response.headers),
              status: 0,
              statusText: ""
            };
            opts.headers.set("cf-cache-status", "HIT");
            if (response.status) {
              opts.status = response.status;
              opts.statusText = response.statusText;
            } else if (opts.headers.has("Content-Range")) {
              opts.status = 206;
              opts.statusText = "Partial Content";
            } else {
              opts.status = 200;
              opts.statusText = "OK";
            }
            response = new Response(response.body, opts);
          }
        } else {
          const body = await ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
          if (body === null) {
            throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
          }
          response = new Response(body);
          if (shouldEdgeCache) {
            response.headers.set("Accept-Ranges", "bytes");
            response.headers.set("Content-Length", body.length);
            if (!response.headers.has("etag")) {
              response.headers.set("etag", formatETag(pathKey, "strong"));
            }
            response.headers.set("Cache-Control", `max-age=${options.cacheControl.edgeTTL}`);
            event.waitUntil(cache.put(cacheKey, response.clone()));
            response.headers.set("CF-Cache-Status", "MISS");
          }
        }
        response.headers.set("Content-Type", mimeType);
        if (response.status === 304) {
          let etag = formatETag(response.headers.get("etag"), "strong");
          let ifNoneMatch = cacheKey.headers.get("if-none-match");
          let proxyCacheStatus = response.headers.get("CF-Cache-Status");
          if (etag) {
            if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
              response.headers.set("CF-Cache-Status", "EXPIRED");
            } else {
              response.headers.set("CF-Cache-Status", "REVALIDATED");
            }
            response.headers.set("etag", formatETag(etag, "weak"));
          }
        }
        if (shouldSetBrowserCache) {
          response.headers.set("Cache-Control", `max-age=${options.cacheControl.browserTTL}`);
        } else {
          response.headers.delete("Cache-Control");
        }
        return response;
      };
      exports.getAssetFromKV = getAssetFromKV2;
    }
  });

  // node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint = __commonJS({
    "node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/decode_codepoint.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      var decodeMap = /* @__PURE__ */ new Map([
        [0, 65533],
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376]
      ]);
      var fromCodePoint = String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      };
      function decodeCodePoint(codePoint) {
        var _a7;
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          return "\uFFFD";
        }
        return fromCodePoint((_a7 = decodeMap.get(codePoint)) !== null && _a7 !== void 0 ? _a7 : codePoint);
      }
      exports.default = decodeCodePoint;
    }
  });

  // node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/generated/decode-data-html.js
  var require_decode_data_html = __commonJS({
    "node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/generated/decode-data-html.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = new Uint16Array([14866, 60, 237, 340, 721, 1312, 1562, 1654, 1838, 1957, 2183, 2239, 2301, 2958, 3037, 3893, 4123, 4298, 4330, 4801, 5191, 5395, 5752, 5903, 5943, 5972, 6050, 0, 0, 0, 0, 0, 0, 6135, 6565, 7422, 8183, 8738, 9242, 9503, 9938, 10189, 10573, 10637, 10715, 11950, 12246, 13539, 13950, 14445, 14533, 15364, 16514, 16980, 17390, 17763, 17849, 18036, 18125, 4096, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 100, 106, 115, 122, 137, 142, 151, 157, 163, 167, 182, 196, 204, 220, 229, 108, 105, 103, 33024, 198, 59, 32768, 198, 80, 33024, 38, 59, 32768, 38, 99, 117, 116, 101, 33024, 193, 59, 32768, 193, 114, 101, 118, 101, 59, 32768, 258, 512, 105, 121, 127, 134, 114, 99, 33024, 194, 59, 32768, 194, 59, 32768, 1040, 114, 59, 32896, 55349, 56580, 114, 97, 118, 101, 33024, 192, 59, 32768, 192, 112, 104, 97, 59, 32768, 913, 97, 99, 114, 59, 32768, 256, 100, 59, 32768, 10835, 512, 103, 112, 172, 177, 111, 110, 59, 32768, 260, 102, 59, 32896, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 32768, 8289, 105, 110, 103, 33024, 197, 59, 32768, 197, 512, 99, 115, 209, 214, 114, 59, 32896, 55349, 56476, 105, 103, 110, 59, 32768, 8788, 105, 108, 100, 101, 33024, 195, 59, 32768, 195, 109, 108, 33024, 196, 59, 32768, 196, 2048, 97, 99, 101, 102, 111, 114, 115, 117, 253, 278, 282, 310, 315, 321, 327, 332, 512, 99, 114, 258, 267, 107, 115, 108, 97, 115, 104, 59, 32768, 8726, 583, 271, 274, 59, 32768, 10983, 101, 100, 59, 32768, 8966, 121, 59, 32768, 1041, 768, 99, 114, 116, 289, 296, 306, 97, 117, 115, 101, 59, 32768, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 32768, 8492, 97, 59, 32768, 914, 114, 59, 32896, 55349, 56581, 112, 102, 59, 32896, 55349, 56633, 101, 118, 101, 59, 32768, 728, 99, 114, 59, 32768, 8492, 109, 112, 101, 113, 59, 32768, 8782, 3584, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 368, 373, 380, 426, 461, 466, 487, 491, 495, 533, 593, 695, 701, 707, 99, 121, 59, 32768, 1063, 80, 89, 33024, 169, 59, 32768, 169, 768, 99, 112, 121, 387, 393, 419, 117, 116, 101, 59, 32768, 262, 512, 59, 105, 398, 400, 32768, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 32768, 8517, 108, 101, 121, 115, 59, 32768, 8493, 1024, 97, 101, 105, 111, 435, 441, 449, 454, 114, 111, 110, 59, 32768, 268, 100, 105, 108, 33024, 199, 59, 32768, 199, 114, 99, 59, 32768, 264, 110, 105, 110, 116, 59, 32768, 8752, 111, 116, 59, 32768, 266, 512, 100, 110, 471, 478, 105, 108, 108, 97, 59, 32768, 184, 116, 101, 114, 68, 111, 116, 59, 32768, 183, 114, 59, 32768, 8493, 105, 59, 32768, 935, 114, 99, 108, 101, 1024, 68, 77, 80, 84, 508, 513, 520, 526, 111, 116, 59, 32768, 8857, 105, 110, 117, 115, 59, 32768, 8854, 108, 117, 115, 59, 32768, 8853, 105, 109, 101, 115, 59, 32768, 8855, 111, 512, 99, 115, 539, 562, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8754, 101, 67, 117, 114, 108, 121, 512, 68, 81, 573, 586, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 32768, 8221, 117, 111, 116, 101, 59, 32768, 8217, 1024, 108, 110, 112, 117, 602, 614, 648, 664, 111, 110, 512, 59, 101, 609, 611, 32768, 8759, 59, 32768, 10868, 768, 103, 105, 116, 621, 629, 634, 114, 117, 101, 110, 116, 59, 32768, 8801, 110, 116, 59, 32768, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8750, 512, 102, 114, 653, 656, 59, 32768, 8450, 111, 100, 117, 99, 116, 59, 32768, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8755, 111, 115, 115, 59, 32768, 10799, 99, 114, 59, 32896, 55349, 56478, 112, 512, 59, 67, 713, 715, 32768, 8915, 97, 112, 59, 32768, 8781, 2816, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 743, 758, 763, 768, 773, 795, 809, 821, 826, 910, 1295, 512, 59, 111, 748, 750, 32768, 8517, 116, 114, 97, 104, 100, 59, 32768, 10513, 99, 121, 59, 32768, 1026, 99, 121, 59, 32768, 1029, 99, 121, 59, 32768, 1039, 768, 103, 114, 115, 780, 786, 790, 103, 101, 114, 59, 32768, 8225, 114, 59, 32768, 8609, 104, 118, 59, 32768, 10980, 512, 97, 121, 800, 806, 114, 111, 110, 59, 32768, 270, 59, 32768, 1044, 108, 512, 59, 116, 815, 817, 32768, 8711, 97, 59, 32768, 916, 114, 59, 32896, 55349, 56583, 512, 97, 102, 831, 897, 512, 99, 109, 836, 891, 114, 105, 116, 105, 99, 97, 108, 1024, 65, 68, 71, 84, 852, 859, 877, 884, 99, 117, 116, 101, 59, 32768, 180, 111, 581, 864, 867, 59, 32768, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 32768, 733, 114, 97, 118, 101, 59, 32768, 96, 105, 108, 100, 101, 59, 32768, 732, 111, 110, 100, 59, 32768, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 32768, 8518, 2113, 920, 0, 0, 0, 925, 946, 0, 1139, 102, 59, 32896, 55349, 56635, 768, 59, 68, 69, 931, 933, 938, 32768, 168, 111, 116, 59, 32768, 8412, 113, 117, 97, 108, 59, 32768, 8784, 98, 108, 101, 1536, 67, 68, 76, 82, 85, 86, 961, 978, 996, 1080, 1101, 1125, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8751, 111, 1093, 985, 0, 0, 988, 59, 32768, 168, 110, 65, 114, 114, 111, 119, 59, 32768, 8659, 512, 101, 111, 1001, 1034, 102, 116, 768, 65, 82, 84, 1010, 1017, 1029, 114, 114, 111, 119, 59, 32768, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8660, 101, 101, 59, 32768, 10980, 110, 103, 512, 76, 82, 1041, 1068, 101, 102, 116, 512, 65, 82, 1049, 1056, 114, 114, 111, 119, 59, 32768, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10233, 105, 103, 104, 116, 512, 65, 84, 1089, 1096, 114, 114, 111, 119, 59, 32768, 8658, 101, 101, 59, 32768, 8872, 112, 1042, 1108, 0, 0, 1115, 114, 114, 111, 119, 59, 32768, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8741, 110, 1536, 65, 66, 76, 82, 84, 97, 1152, 1179, 1186, 1236, 1272, 1288, 114, 114, 111, 119, 768, 59, 66, 85, 1163, 1165, 1170, 32768, 8595, 97, 114, 59, 32768, 10515, 112, 65, 114, 114, 111, 119, 59, 32768, 8693, 114, 101, 118, 101, 59, 32768, 785, 101, 102, 116, 1315, 1196, 0, 1209, 0, 1220, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 32768, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10590, 101, 99, 116, 111, 114, 512, 59, 66, 1229, 1231, 32768, 8637, 97, 114, 59, 32768, 10582, 105, 103, 104, 116, 805, 1245, 0, 1256, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10591, 101, 99, 116, 111, 114, 512, 59, 66, 1265, 1267, 32768, 8641, 97, 114, 59, 32768, 10583, 101, 101, 512, 59, 65, 1279, 1281, 32768, 8868, 114, 114, 111, 119, 59, 32768, 8615, 114, 114, 111, 119, 59, 32768, 8659, 512, 99, 116, 1300, 1305, 114, 59, 32896, 55349, 56479, 114, 111, 107, 59, 32768, 272, 4096, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1344, 1348, 1354, 1363, 1386, 1391, 1396, 1405, 1413, 1460, 1475, 1483, 1514, 1527, 1531, 1538, 71, 59, 32768, 330, 72, 33024, 208, 59, 32768, 208, 99, 117, 116, 101, 33024, 201, 59, 32768, 201, 768, 97, 105, 121, 1370, 1376, 1383, 114, 111, 110, 59, 32768, 282, 114, 99, 33024, 202, 59, 32768, 202, 59, 32768, 1069, 111, 116, 59, 32768, 278, 114, 59, 32896, 55349, 56584, 114, 97, 118, 101, 33024, 200, 59, 32768, 200, 101, 109, 101, 110, 116, 59, 32768, 8712, 512, 97, 112, 1418, 1423, 99, 114, 59, 32768, 274, 116, 121, 1060, 1431, 0, 0, 1444, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9643, 512, 103, 112, 1465, 1470, 111, 110, 59, 32768, 280, 102, 59, 32896, 55349, 56636, 115, 105, 108, 111, 110, 59, 32768, 917, 117, 512, 97, 105, 1489, 1504, 108, 512, 59, 84, 1495, 1497, 32768, 10869, 105, 108, 100, 101, 59, 32768, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 8652, 512, 99, 105, 1519, 1523, 114, 59, 32768, 8496, 109, 59, 32768, 10867, 97, 59, 32768, 919, 109, 108, 33024, 203, 59, 32768, 203, 512, 105, 112, 1543, 1549, 115, 116, 115, 59, 32768, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 32768, 8519, 1280, 99, 102, 105, 111, 115, 1572, 1576, 1581, 1620, 1648, 121, 59, 32768, 1060, 114, 59, 32896, 55349, 56585, 108, 108, 101, 100, 1060, 1591, 0, 0, 1604, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9642, 1601, 1628, 0, 1633, 0, 0, 1639, 102, 59, 32896, 55349, 56637, 65, 108, 108, 59, 32768, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 32768, 8497, 99, 114, 59, 32768, 8497, 3072, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1678, 1683, 1688, 1701, 1708, 1729, 1734, 1739, 1742, 1748, 1828, 1834, 99, 121, 59, 32768, 1027, 33024, 62, 59, 32768, 62, 109, 109, 97, 512, 59, 100, 1696, 1698, 32768, 915, 59, 32768, 988, 114, 101, 118, 101, 59, 32768, 286, 768, 101, 105, 121, 1715, 1721, 1726, 100, 105, 108, 59, 32768, 290, 114, 99, 59, 32768, 284, 59, 32768, 1043, 111, 116, 59, 32768, 288, 114, 59, 32896, 55349, 56586, 59, 32768, 8921, 112, 102, 59, 32896, 55349, 56638, 101, 97, 116, 101, 114, 1536, 69, 70, 71, 76, 83, 84, 1766, 1783, 1794, 1803, 1809, 1821, 113, 117, 97, 108, 512, 59, 76, 1775, 1777, 32768, 8805, 101, 115, 115, 59, 32768, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8807, 114, 101, 97, 116, 101, 114, 59, 32768, 10914, 101, 115, 115, 59, 32768, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 10878, 105, 108, 100, 101, 59, 32768, 8819, 99, 114, 59, 32896, 55349, 56482, 59, 32768, 8811, 2048, 65, 97, 99, 102, 105, 111, 115, 117, 1854, 1861, 1874, 1880, 1884, 1897, 1919, 1934, 82, 68, 99, 121, 59, 32768, 1066, 512, 99, 116, 1866, 1871, 101, 107, 59, 32768, 711, 59, 32768, 94, 105, 114, 99, 59, 32768, 292, 114, 59, 32768, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 32768, 8459, 833, 1902, 0, 1906, 102, 59, 32768, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 32768, 9472, 512, 99, 116, 1924, 1928, 114, 59, 32768, 8459, 114, 111, 107, 59, 32768, 294, 109, 112, 533, 1940, 1950, 111, 119, 110, 72, 117, 109, 112, 59, 32768, 8782, 113, 117, 97, 108, 59, 32768, 8783, 3584, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1985, 1990, 1996, 2001, 2010, 2025, 2030, 2034, 2043, 2077, 2134, 2155, 2160, 2167, 99, 121, 59, 32768, 1045, 108, 105, 103, 59, 32768, 306, 99, 121, 59, 32768, 1025, 99, 117, 116, 101, 33024, 205, 59, 32768, 205, 512, 105, 121, 2015, 2022, 114, 99, 33024, 206, 59, 32768, 206, 59, 32768, 1048, 111, 116, 59, 32768, 304, 114, 59, 32768, 8465, 114, 97, 118, 101, 33024, 204, 59, 32768, 204, 768, 59, 97, 112, 2050, 2052, 2070, 32768, 8465, 512, 99, 103, 2057, 2061, 114, 59, 32768, 298, 105, 110, 97, 114, 121, 73, 59, 32768, 8520, 108, 105, 101, 115, 59, 32768, 8658, 837, 2082, 0, 2110, 512, 59, 101, 2086, 2088, 32768, 8748, 512, 103, 114, 2093, 2099, 114, 97, 108, 59, 32768, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 32768, 8898, 105, 115, 105, 98, 108, 101, 512, 67, 84, 2120, 2127, 111, 109, 109, 97, 59, 32768, 8291, 105, 109, 101, 115, 59, 32768, 8290, 768, 103, 112, 116, 2141, 2146, 2151, 111, 110, 59, 32768, 302, 102, 59, 32896, 55349, 56640, 97, 59, 32768, 921, 99, 114, 59, 32768, 8464, 105, 108, 100, 101, 59, 32768, 296, 828, 2172, 0, 2177, 99, 121, 59, 32768, 1030, 108, 33024, 207, 59, 32768, 207, 1280, 99, 102, 111, 115, 117, 2193, 2206, 2211, 2217, 2232, 512, 105, 121, 2198, 2203, 114, 99, 59, 32768, 308, 59, 32768, 1049, 114, 59, 32896, 55349, 56589, 112, 102, 59, 32896, 55349, 56641, 820, 2222, 0, 2227, 114, 59, 32896, 55349, 56485, 114, 99, 121, 59, 32768, 1032, 107, 99, 121, 59, 32768, 1028, 1792, 72, 74, 97, 99, 102, 111, 115, 2253, 2258, 2263, 2269, 2283, 2288, 2294, 99, 121, 59, 32768, 1061, 99, 121, 59, 32768, 1036, 112, 112, 97, 59, 32768, 922, 512, 101, 121, 2274, 2280, 100, 105, 108, 59, 32768, 310, 59, 32768, 1050, 114, 59, 32896, 55349, 56590, 112, 102, 59, 32896, 55349, 56642, 99, 114, 59, 32896, 55349, 56486, 2816, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2323, 2328, 2333, 2374, 2396, 2775, 2780, 2797, 2804, 2934, 2954, 99, 121, 59, 32768, 1033, 33024, 60, 59, 32768, 60, 1280, 99, 109, 110, 112, 114, 2344, 2350, 2356, 2360, 2370, 117, 116, 101, 59, 32768, 313, 98, 100, 97, 59, 32768, 923, 103, 59, 32768, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 32768, 8466, 114, 59, 32768, 8606, 768, 97, 101, 121, 2381, 2387, 2393, 114, 111, 110, 59, 32768, 317, 100, 105, 108, 59, 32768, 315, 59, 32768, 1051, 512, 102, 115, 2401, 2702, 116, 2560, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2423, 2470, 2479, 2530, 2537, 2561, 2618, 2666, 2683, 2690, 512, 110, 114, 2428, 2441, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10216, 114, 111, 119, 768, 59, 66, 82, 2451, 2453, 2458, 32768, 8592, 97, 114, 59, 32768, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8646, 101, 105, 108, 105, 110, 103, 59, 32768, 8968, 111, 838, 2485, 0, 2498, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10214, 110, 805, 2503, 0, 2514, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10593, 101, 99, 116, 111, 114, 512, 59, 66, 2523, 2525, 32768, 8643, 97, 114, 59, 32768, 10585, 108, 111, 111, 114, 59, 32768, 8970, 105, 103, 104, 116, 512, 65, 86, 2546, 2553, 114, 114, 111, 119, 59, 32768, 8596, 101, 99, 116, 111, 114, 59, 32768, 10574, 512, 101, 114, 2566, 2591, 101, 768, 59, 65, 86, 2574, 2576, 2583, 32768, 8867, 114, 114, 111, 119, 59, 32768, 8612, 101, 99, 116, 111, 114, 59, 32768, 10586, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 2604, 2606, 2611, 32768, 8882, 97, 114, 59, 32768, 10703, 113, 117, 97, 108, 59, 32768, 8884, 112, 768, 68, 84, 86, 2626, 2638, 2649, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 32768, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10592, 101, 99, 116, 111, 114, 512, 59, 66, 2659, 2661, 32768, 8639, 97, 114, 59, 32768, 10584, 101, 99, 116, 111, 114, 512, 59, 66, 2676, 2678, 32768, 8636, 97, 114, 59, 32768, 10578, 114, 114, 111, 119, 59, 32768, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8660, 115, 1536, 69, 70, 71, 76, 83, 84, 2716, 2730, 2741, 2750, 2756, 2768, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 32768, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8806, 114, 101, 97, 116, 101, 114, 59, 32768, 8822, 101, 115, 115, 59, 32768, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 10877, 105, 108, 100, 101, 59, 32768, 8818, 114, 59, 32896, 55349, 56591, 512, 59, 101, 2785, 2787, 32768, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8666, 105, 100, 111, 116, 59, 32768, 319, 768, 110, 112, 119, 2811, 2899, 2904, 103, 1024, 76, 82, 108, 114, 2821, 2848, 2860, 2887, 101, 102, 116, 512, 65, 82, 2829, 2836, 114, 114, 111, 119, 59, 32768, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10230, 101, 102, 116, 512, 97, 114, 2868, 2875, 114, 114, 111, 119, 59, 32768, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10233, 102, 59, 32896, 55349, 56643, 101, 114, 512, 76, 82, 2911, 2922, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8600, 768, 99, 104, 116, 2941, 2945, 2948, 114, 59, 32768, 8466, 59, 32768, 8624, 114, 111, 107, 59, 32768, 321, 59, 32768, 8810, 2048, 97, 99, 101, 102, 105, 111, 115, 117, 2974, 2978, 2982, 3007, 3012, 3022, 3028, 3033, 112, 59, 32768, 10501, 121, 59, 32768, 1052, 512, 100, 108, 2987, 2998, 105, 117, 109, 83, 112, 97, 99, 101, 59, 32768, 8287, 108, 105, 110, 116, 114, 102, 59, 32768, 8499, 114, 59, 32896, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 32768, 8723, 112, 102, 59, 32896, 55349, 56644, 99, 114, 59, 32768, 8499, 59, 32768, 924, 2304, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3055, 3060, 3067, 3089, 3201, 3206, 3874, 3880, 3889, 99, 121, 59, 32768, 1034, 99, 117, 116, 101, 59, 32768, 323, 768, 97, 101, 121, 3074, 3080, 3086, 114, 111, 110, 59, 32768, 327, 100, 105, 108, 59, 32768, 325, 59, 32768, 1053, 768, 103, 115, 119, 3096, 3160, 3194, 97, 116, 105, 118, 101, 768, 77, 84, 86, 3108, 3121, 3145, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 32768, 8203, 104, 105, 512, 99, 110, 3128, 3137, 107, 83, 112, 97, 99, 101, 59, 32768, 8203, 83, 112, 97, 99, 101, 59, 32768, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 32768, 8203, 116, 101, 100, 512, 71, 76, 3168, 3184, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 32768, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 32768, 8810, 76, 105, 110, 101, 59, 32768, 10, 114, 59, 32896, 55349, 56593, 1024, 66, 110, 112, 116, 3215, 3222, 3238, 3242, 114, 101, 97, 107, 59, 32768, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 32768, 160, 102, 59, 32768, 8469, 3328, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3269, 3271, 3293, 3312, 3352, 3430, 3455, 3551, 3589, 3625, 3678, 3821, 3861, 32768, 10988, 512, 111, 117, 3276, 3286, 110, 103, 114, 117, 101, 110, 116, 59, 32768, 8802, 112, 67, 97, 112, 59, 32768, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8742, 768, 108, 113, 120, 3319, 3327, 3345, 101, 109, 101, 110, 116, 59, 32768, 8713, 117, 97, 108, 512, 59, 84, 3335, 3337, 32768, 8800, 105, 108, 100, 101, 59, 32896, 8770, 824, 105, 115, 116, 115, 59, 32768, 8708, 114, 101, 97, 116, 101, 114, 1792, 59, 69, 70, 71, 76, 83, 84, 3373, 3375, 3382, 3394, 3404, 3410, 3423, 32768, 8815, 113, 117, 97, 108, 59, 32768, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32896, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 32896, 8811, 824, 101, 115, 115, 59, 32768, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32896, 10878, 824, 105, 108, 100, 101, 59, 32768, 8821, 117, 109, 112, 533, 3437, 3448, 111, 119, 110, 72, 117, 109, 112, 59, 32896, 8782, 824, 113, 117, 97, 108, 59, 32896, 8783, 824, 101, 512, 102, 115, 3461, 3492, 116, 84, 114, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 3477, 3479, 3485, 32768, 8938, 97, 114, 59, 32896, 10703, 824, 113, 117, 97, 108, 59, 32768, 8940, 115, 1536, 59, 69, 71, 76, 83, 84, 3506, 3508, 3515, 3524, 3531, 3544, 32768, 8814, 113, 117, 97, 108, 59, 32768, 8816, 114, 101, 97, 116, 101, 114, 59, 32768, 8824, 101, 115, 115, 59, 32896, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32896, 10877, 824, 105, 108, 100, 101, 59, 32768, 8820, 101, 115, 116, 101, 100, 512, 71, 76, 3561, 3578, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 32896, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 32896, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 768, 59, 69, 83, 3603, 3605, 3613, 32768, 8832, 113, 117, 97, 108, 59, 32896, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8928, 512, 101, 105, 3630, 3645, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 32768, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 3663, 3665, 3671, 32768, 8939, 97, 114, 59, 32896, 10704, 824, 113, 117, 97, 108, 59, 32768, 8941, 512, 113, 117, 3683, 3732, 117, 97, 114, 101, 83, 117, 512, 98, 112, 3694, 3712, 115, 101, 116, 512, 59, 69, 3702, 3705, 32896, 8847, 824, 113, 117, 97, 108, 59, 32768, 8930, 101, 114, 115, 101, 116, 512, 59, 69, 3722, 3725, 32896, 8848, 824, 113, 117, 97, 108, 59, 32768, 8931, 768, 98, 99, 112, 3739, 3757, 3801, 115, 101, 116, 512, 59, 69, 3747, 3750, 32896, 8834, 8402, 113, 117, 97, 108, 59, 32768, 8840, 99, 101, 101, 100, 115, 1024, 59, 69, 83, 84, 3771, 3773, 3781, 3793, 32768, 8833, 113, 117, 97, 108, 59, 32896, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8929, 105, 108, 100, 101, 59, 32896, 8831, 824, 101, 114, 115, 101, 116, 512, 59, 69, 3811, 3814, 32896, 8835, 8402, 113, 117, 97, 108, 59, 32768, 8841, 105, 108, 100, 101, 1024, 59, 69, 70, 84, 3834, 3836, 3843, 3854, 32768, 8769, 113, 117, 97, 108, 59, 32768, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8775, 105, 108, 100, 101, 59, 32768, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8740, 99, 114, 59, 32896, 55349, 56489, 105, 108, 100, 101, 33024, 209, 59, 32768, 209, 59, 32768, 925, 3584, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3921, 3927, 3936, 3951, 3958, 3963, 3972, 3996, 4002, 4034, 4037, 4055, 4071, 4078, 108, 105, 103, 59, 32768, 338, 99, 117, 116, 101, 33024, 211, 59, 32768, 211, 512, 105, 121, 3941, 3948, 114, 99, 33024, 212, 59, 32768, 212, 59, 32768, 1054, 98, 108, 97, 99, 59, 32768, 336, 114, 59, 32896, 55349, 56594, 114, 97, 118, 101, 33024, 210, 59, 32768, 210, 768, 97, 101, 105, 3979, 3984, 3989, 99, 114, 59, 32768, 332, 103, 97, 59, 32768, 937, 99, 114, 111, 110, 59, 32768, 927, 112, 102, 59, 32896, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 512, 68, 81, 4014, 4027, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 32768, 8220, 117, 111, 116, 101, 59, 32768, 8216, 59, 32768, 10836, 512, 99, 108, 4042, 4047, 114, 59, 32896, 55349, 56490, 97, 115, 104, 33024, 216, 59, 32768, 216, 105, 573, 4060, 4067, 100, 101, 33024, 213, 59, 32768, 213, 101, 115, 59, 32768, 10807, 109, 108, 33024, 214, 59, 32768, 214, 101, 114, 512, 66, 80, 4085, 4109, 512, 97, 114, 4090, 4094, 114, 59, 32768, 8254, 97, 99, 512, 101, 107, 4101, 4104, 59, 32768, 9182, 101, 116, 59, 32768, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 32768, 9180, 2304, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4141, 4150, 4154, 4159, 4163, 4166, 4176, 4198, 4284, 114, 116, 105, 97, 108, 68, 59, 32768, 8706, 121, 59, 32768, 1055, 114, 59, 32896, 55349, 56595, 105, 59, 32768, 934, 59, 32768, 928, 117, 115, 77, 105, 110, 117, 115, 59, 32768, 177, 512, 105, 112, 4181, 4194, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 32768, 8460, 102, 59, 32768, 8473, 1024, 59, 101, 105, 111, 4207, 4209, 4251, 4256, 32768, 10939, 99, 101, 100, 101, 115, 1024, 59, 69, 83, 84, 4223, 4225, 4232, 4244, 32768, 8826, 113, 117, 97, 108, 59, 32768, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8828, 105, 108, 100, 101, 59, 32768, 8830, 109, 101, 59, 32768, 8243, 512, 100, 112, 4261, 4267, 117, 99, 116, 59, 32768, 8719, 111, 114, 116, 105, 111, 110, 512, 59, 97, 4278, 4280, 32768, 8759, 108, 59, 32768, 8733, 512, 99, 105, 4289, 4294, 114, 59, 32896, 55349, 56491, 59, 32768, 936, 1024, 85, 102, 111, 115, 4306, 4313, 4318, 4323, 79, 84, 33024, 34, 59, 32768, 34, 114, 59, 32896, 55349, 56596, 112, 102, 59, 32768, 8474, 99, 114, 59, 32896, 55349, 56492, 3072, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4354, 4360, 4366, 4395, 4417, 4473, 4477, 4481, 4743, 4764, 4776, 4788, 97, 114, 114, 59, 32768, 10512, 71, 33024, 174, 59, 32768, 174, 768, 99, 110, 114, 4373, 4379, 4383, 117, 116, 101, 59, 32768, 340, 103, 59, 32768, 10219, 114, 512, 59, 116, 4389, 4391, 32768, 8608, 108, 59, 32768, 10518, 768, 97, 101, 121, 4402, 4408, 4414, 114, 111, 110, 59, 32768, 344, 100, 105, 108, 59, 32768, 342, 59, 32768, 1056, 512, 59, 118, 4422, 4424, 32768, 8476, 101, 114, 115, 101, 512, 69, 85, 4433, 4458, 512, 108, 113, 4438, 4446, 101, 109, 101, 110, 116, 59, 32768, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 10607, 114, 59, 32768, 8476, 111, 59, 32768, 929, 103, 104, 116, 2048, 65, 67, 68, 70, 84, 85, 86, 97, 4501, 4547, 4556, 4607, 4614, 4671, 4719, 4736, 512, 110, 114, 4506, 4519, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10217, 114, 111, 119, 768, 59, 66, 76, 4529, 4531, 4536, 32768, 8594, 97, 114, 59, 32768, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8644, 101, 105, 108, 105, 110, 103, 59, 32768, 8969, 111, 838, 4562, 0, 4575, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10215, 110, 805, 4580, 0, 4591, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10589, 101, 99, 116, 111, 114, 512, 59, 66, 4600, 4602, 32768, 8642, 97, 114, 59, 32768, 10581, 108, 111, 111, 114, 59, 32768, 8971, 512, 101, 114, 4619, 4644, 101, 768, 59, 65, 86, 4627, 4629, 4636, 32768, 8866, 114, 114, 111, 119, 59, 32768, 8614, 101, 99, 116, 111, 114, 59, 32768, 10587, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 4657, 4659, 4664, 32768, 8883, 97, 114, 59, 32768, 10704, 113, 117, 97, 108, 59, 32768, 8885, 112, 768, 68, 84, 86, 4679, 4691, 4702, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 32768, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10588, 101, 99, 116, 111, 114, 512, 59, 66, 4712, 4714, 32768, 8638, 97, 114, 59, 32768, 10580, 101, 99, 116, 111, 114, 512, 59, 66, 4729, 4731, 32768, 8640, 97, 114, 59, 32768, 10579, 114, 114, 111, 119, 59, 32768, 8658, 512, 112, 117, 4748, 4752, 102, 59, 32768, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 32768, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8667, 512, 99, 104, 4781, 4785, 114, 59, 32768, 8475, 59, 32768, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 32768, 10740, 3328, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4827, 4842, 4849, 4856, 4889, 4894, 4949, 4955, 4967, 4973, 5059, 5065, 5070, 512, 67, 99, 4832, 4838, 72, 99, 121, 59, 32768, 1065, 121, 59, 32768, 1064, 70, 84, 99, 121, 59, 32768, 1068, 99, 117, 116, 101, 59, 32768, 346, 1280, 59, 97, 101, 105, 121, 4867, 4869, 4875, 4881, 4886, 32768, 10940, 114, 111, 110, 59, 32768, 352, 100, 105, 108, 59, 32768, 350, 114, 99, 59, 32768, 348, 59, 32768, 1057, 114, 59, 32896, 55349, 56598, 111, 114, 116, 1024, 68, 76, 82, 85, 4906, 4917, 4928, 4940, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8594, 112, 65, 114, 114, 111, 119, 59, 32768, 8593, 103, 109, 97, 59, 32768, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 32768, 8728, 112, 102, 59, 32896, 55349, 56650, 1091, 4979, 0, 0, 4983, 116, 59, 32768, 8730, 97, 114, 101, 1024, 59, 73, 83, 85, 4994, 4996, 5010, 5052, 32768, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 32768, 8851, 117, 512, 98, 112, 5016, 5033, 115, 101, 116, 512, 59, 69, 5024, 5026, 32768, 8847, 113, 117, 97, 108, 59, 32768, 8849, 101, 114, 115, 101, 116, 512, 59, 69, 5043, 5045, 32768, 8848, 113, 117, 97, 108, 59, 32768, 8850, 110, 105, 111, 110, 59, 32768, 8852, 99, 114, 59, 32896, 55349, 56494, 97, 114, 59, 32768, 8902, 1024, 98, 99, 109, 112, 5079, 5102, 5155, 5158, 512, 59, 115, 5084, 5086, 32768, 8912, 101, 116, 512, 59, 69, 5093, 5095, 32768, 8912, 113, 117, 97, 108, 59, 32768, 8838, 512, 99, 104, 5107, 5148, 101, 101, 100, 115, 1024, 59, 69, 83, 84, 5120, 5122, 5129, 5141, 32768, 8827, 113, 117, 97, 108, 59, 32768, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8829, 105, 108, 100, 101, 59, 32768, 8831, 84, 104, 97, 116, 59, 32768, 8715, 59, 32768, 8721, 768, 59, 101, 115, 5165, 5167, 5185, 32768, 8913, 114, 115, 101, 116, 512, 59, 69, 5176, 5178, 32768, 8835, 113, 117, 97, 108, 59, 32768, 8839, 101, 116, 59, 32768, 8913, 2816, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5213, 5221, 5227, 5241, 5252, 5274, 5279, 5323, 5362, 5368, 5378, 79, 82, 78, 33024, 222, 59, 32768, 222, 65, 68, 69, 59, 32768, 8482, 512, 72, 99, 5232, 5237, 99, 121, 59, 32768, 1035, 121, 59, 32768, 1062, 512, 98, 117, 5246, 5249, 59, 32768, 9, 59, 32768, 932, 768, 97, 101, 121, 5259, 5265, 5271, 114, 111, 110, 59, 32768, 356, 100, 105, 108, 59, 32768, 354, 59, 32768, 1058, 114, 59, 32896, 55349, 56599, 512, 101, 105, 5284, 5300, 835, 5289, 0, 5297, 101, 102, 111, 114, 101, 59, 32768, 8756, 97, 59, 32768, 920, 512, 99, 110, 5305, 5315, 107, 83, 112, 97, 99, 101, 59, 32896, 8287, 8202, 83, 112, 97, 99, 101, 59, 32768, 8201, 108, 100, 101, 1024, 59, 69, 70, 84, 5335, 5337, 5344, 5355, 32768, 8764, 113, 117, 97, 108, 59, 32768, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8773, 105, 108, 100, 101, 59, 32768, 8776, 112, 102, 59, 32896, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 32768, 8411, 512, 99, 116, 5383, 5388, 114, 59, 32896, 55349, 56495, 114, 111, 107, 59, 32768, 358, 5426, 5417, 5444, 5458, 5473, 0, 5480, 5485, 0, 0, 0, 0, 0, 5494, 5500, 5564, 5579, 0, 5726, 5732, 5738, 5745, 512, 99, 114, 5421, 5429, 117, 116, 101, 33024, 218, 59, 32768, 218, 114, 512, 59, 111, 5435, 5437, 32768, 8607, 99, 105, 114, 59, 32768, 10569, 114, 820, 5449, 0, 5453, 121, 59, 32768, 1038, 118, 101, 59, 32768, 364, 512, 105, 121, 5462, 5469, 114, 99, 33024, 219, 59, 32768, 219, 59, 32768, 1059, 98, 108, 97, 99, 59, 32768, 368, 114, 59, 32896, 55349, 56600, 114, 97, 118, 101, 33024, 217, 59, 32768, 217, 97, 99, 114, 59, 32768, 362, 512, 100, 105, 5504, 5548, 101, 114, 512, 66, 80, 5511, 5535, 512, 97, 114, 5516, 5520, 114, 59, 32768, 95, 97, 99, 512, 101, 107, 5527, 5530, 59, 32768, 9183, 101, 116, 59, 32768, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 32768, 9181, 111, 110, 512, 59, 80, 5555, 5557, 32768, 8899, 108, 117, 115, 59, 32768, 8846, 512, 103, 112, 5568, 5573, 111, 110, 59, 32768, 370, 102, 59, 32896, 55349, 56652, 2048, 65, 68, 69, 84, 97, 100, 112, 115, 5595, 5624, 5635, 5648, 5664, 5671, 5682, 5712, 114, 114, 111, 119, 768, 59, 66, 68, 5606, 5608, 5613, 32768, 8593, 97, 114, 59, 32768, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 10606, 101, 101, 512, 59, 65, 5655, 5657, 32768, 8869, 114, 114, 111, 119, 59, 32768, 8613, 114, 114, 111, 119, 59, 32768, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 32768, 8661, 101, 114, 512, 76, 82, 5689, 5700, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8599, 105, 512, 59, 108, 5718, 5720, 32768, 978, 111, 110, 59, 32768, 933, 105, 110, 103, 59, 32768, 366, 99, 114, 59, 32896, 55349, 56496, 105, 108, 100, 101, 59, 32768, 360, 109, 108, 33024, 220, 59, 32768, 220, 2304, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5770, 5776, 5781, 5785, 5798, 5878, 5883, 5889, 5895, 97, 115, 104, 59, 32768, 8875, 97, 114, 59, 32768, 10987, 121, 59, 32768, 1042, 97, 115, 104, 512, 59, 108, 5793, 5795, 32768, 8873, 59, 32768, 10982, 512, 101, 114, 5803, 5806, 59, 32768, 8897, 768, 98, 116, 121, 5813, 5818, 5866, 97, 114, 59, 32768, 8214, 512, 59, 105, 5823, 5825, 32768, 8214, 99, 97, 108, 1024, 66, 76, 83, 84, 5837, 5842, 5848, 5859, 97, 114, 59, 32768, 8739, 105, 110, 101, 59, 32768, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 32768, 10072, 105, 108, 100, 101, 59, 32768, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 32768, 8202, 114, 59, 32896, 55349, 56601, 112, 102, 59, 32896, 55349, 56653, 99, 114, 59, 32896, 55349, 56497, 100, 97, 115, 104, 59, 32768, 8874, 1280, 99, 101, 102, 111, 115, 5913, 5919, 5925, 5930, 5936, 105, 114, 99, 59, 32768, 372, 100, 103, 101, 59, 32768, 8896, 114, 59, 32896, 55349, 56602, 112, 102, 59, 32896, 55349, 56654, 99, 114, 59, 32896, 55349, 56498, 1024, 102, 105, 111, 115, 5951, 5956, 5959, 5965, 114, 59, 32896, 55349, 56603, 59, 32768, 926, 112, 102, 59, 32896, 55349, 56655, 99, 114, 59, 32896, 55349, 56499, 2304, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5990, 5995, 6e3, 6005, 6014, 6027, 6032, 6038, 6044, 99, 121, 59, 32768, 1071, 99, 121, 59, 32768, 1031, 99, 121, 59, 32768, 1070, 99, 117, 116, 101, 33024, 221, 59, 32768, 221, 512, 105, 121, 6019, 6024, 114, 99, 59, 32768, 374, 59, 32768, 1067, 114, 59, 32896, 55349, 56604, 112, 102, 59, 32896, 55349, 56656, 99, 114, 59, 32896, 55349, 56500, 109, 108, 59, 32768, 376, 2048, 72, 97, 99, 100, 101, 102, 111, 115, 6066, 6071, 6078, 6092, 6097, 6119, 6123, 6128, 99, 121, 59, 32768, 1046, 99, 117, 116, 101, 59, 32768, 377, 512, 97, 121, 6083, 6089, 114, 111, 110, 59, 32768, 381, 59, 32768, 1047, 111, 116, 59, 32768, 379, 835, 6102, 0, 6116, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 32768, 8203, 97, 59, 32768, 918, 114, 59, 32768, 8488, 112, 102, 59, 32768, 8484, 99, 114, 59, 32896, 55349, 56501, 5938, 6159, 6168, 6175, 0, 6214, 6222, 6233, 0, 0, 0, 0, 6242, 6267, 6290, 6429, 6444, 0, 6495, 6503, 6531, 6540, 0, 6547, 99, 117, 116, 101, 33024, 225, 59, 32768, 225, 114, 101, 118, 101, 59, 32768, 259, 1536, 59, 69, 100, 105, 117, 121, 6187, 6189, 6193, 6196, 6203, 6210, 32768, 8766, 59, 32896, 8766, 819, 59, 32768, 8767, 114, 99, 33024, 226, 59, 32768, 226, 116, 101, 33024, 180, 59, 32768, 180, 59, 32768, 1072, 108, 105, 103, 33024, 230, 59, 32768, 230, 512, 59, 114, 6226, 6228, 32768, 8289, 59, 32896, 55349, 56606, 114, 97, 118, 101, 33024, 224, 59, 32768, 224, 512, 101, 112, 6246, 6261, 512, 102, 112, 6251, 6257, 115, 121, 109, 59, 32768, 8501, 104, 59, 32768, 8501, 104, 97, 59, 32768, 945, 512, 97, 112, 6271, 6284, 512, 99, 108, 6276, 6280, 114, 59, 32768, 257, 103, 59, 32768, 10815, 33024, 38, 59, 32768, 38, 1077, 6295, 0, 0, 6326, 1280, 59, 97, 100, 115, 118, 6305, 6307, 6312, 6315, 6322, 32768, 8743, 110, 100, 59, 32768, 10837, 59, 32768, 10844, 108, 111, 112, 101, 59, 32768, 10840, 59, 32768, 10842, 1792, 59, 101, 108, 109, 114, 115, 122, 6340, 6342, 6345, 6349, 6391, 6410, 6422, 32768, 8736, 59, 32768, 10660, 101, 59, 32768, 8736, 115, 100, 512, 59, 97, 6356, 6358, 32768, 8737, 2098, 6368, 6371, 6374, 6377, 6380, 6383, 6386, 6389, 59, 32768, 10664, 59, 32768, 10665, 59, 32768, 10666, 59, 32768, 10667, 59, 32768, 10668, 59, 32768, 10669, 59, 32768, 10670, 59, 32768, 10671, 116, 512, 59, 118, 6397, 6399, 32768, 8735, 98, 512, 59, 100, 6405, 6407, 32768, 8894, 59, 32768, 10653, 512, 112, 116, 6415, 6419, 104, 59, 32768, 8738, 59, 32768, 197, 97, 114, 114, 59, 32768, 9084, 512, 103, 112, 6433, 6438, 111, 110, 59, 32768, 261, 102, 59, 32896, 55349, 56658, 1792, 59, 69, 97, 101, 105, 111, 112, 6458, 6460, 6463, 6469, 6472, 6476, 6480, 32768, 8776, 59, 32768, 10864, 99, 105, 114, 59, 32768, 10863, 59, 32768, 8778, 100, 59, 32768, 8779, 115, 59, 32768, 39, 114, 111, 120, 512, 59, 101, 6488, 6490, 32768, 8776, 113, 59, 32768, 8778, 105, 110, 103, 33024, 229, 59, 32768, 229, 768, 99, 116, 121, 6509, 6514, 6517, 114, 59, 32896, 55349, 56502, 59, 32768, 42, 109, 112, 512, 59, 101, 6524, 6526, 32768, 8776, 113, 59, 32768, 8781, 105, 108, 100, 101, 33024, 227, 59, 32768, 227, 109, 108, 33024, 228, 59, 32768, 228, 512, 99, 105, 6551, 6559, 111, 110, 105, 110, 116, 59, 32768, 8755, 110, 116, 59, 32768, 10769, 4096, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 6597, 6602, 6673, 6688, 6701, 6707, 6768, 6773, 6891, 6898, 6999, 7023, 7309, 7316, 7334, 7383, 111, 116, 59, 32768, 10989, 512, 99, 114, 6607, 6652, 107, 1024, 99, 101, 112, 115, 6617, 6623, 6632, 6639, 111, 110, 103, 59, 32768, 8780, 112, 115, 105, 108, 111, 110, 59, 32768, 1014, 114, 105, 109, 101, 59, 32768, 8245, 105, 109, 512, 59, 101, 6646, 6648, 32768, 8765, 113, 59, 32768, 8909, 583, 6656, 6661, 101, 101, 59, 32768, 8893, 101, 100, 512, 59, 103, 6667, 6669, 32768, 8965, 101, 59, 32768, 8965, 114, 107, 512, 59, 116, 6680, 6682, 32768, 9141, 98, 114, 107, 59, 32768, 9142, 512, 111, 121, 6693, 6698, 110, 103, 59, 32768, 8780, 59, 32768, 1073, 113, 117, 111, 59, 32768, 8222, 1280, 99, 109, 112, 114, 116, 6718, 6731, 6738, 6743, 6749, 97, 117, 115, 512, 59, 101, 6726, 6728, 32768, 8757, 59, 32768, 8757, 112, 116, 121, 118, 59, 32768, 10672, 115, 105, 59, 32768, 1014, 110, 111, 117, 59, 32768, 8492, 768, 97, 104, 119, 6756, 6759, 6762, 59, 32768, 946, 59, 32768, 8502, 101, 101, 110, 59, 32768, 8812, 114, 59, 32896, 55349, 56607, 103, 1792, 99, 111, 115, 116, 117, 118, 119, 6789, 6809, 6834, 6850, 6872, 6879, 6884, 768, 97, 105, 117, 6796, 6800, 6805, 112, 59, 32768, 8898, 114, 99, 59, 32768, 9711, 112, 59, 32768, 8899, 768, 100, 112, 116, 6816, 6821, 6827, 111, 116, 59, 32768, 10752, 108, 117, 115, 59, 32768, 10753, 105, 109, 101, 115, 59, 32768, 10754, 1090, 6840, 0, 0, 6846, 99, 117, 112, 59, 32768, 10758, 97, 114, 59, 32768, 9733, 114, 105, 97, 110, 103, 108, 101, 512, 100, 117, 6862, 6868, 111, 119, 110, 59, 32768, 9661, 112, 59, 32768, 9651, 112, 108, 117, 115, 59, 32768, 10756, 101, 101, 59, 32768, 8897, 101, 100, 103, 101, 59, 32768, 8896, 97, 114, 111, 119, 59, 32768, 10509, 768, 97, 107, 111, 6905, 6976, 6994, 512, 99, 110, 6910, 6972, 107, 768, 108, 115, 116, 6918, 6927, 6935, 111, 122, 101, 110, 103, 101, 59, 32768, 10731, 113, 117, 97, 114, 101, 59, 32768, 9642, 114, 105, 97, 110, 103, 108, 101, 1024, 59, 100, 108, 114, 6951, 6953, 6959, 6965, 32768, 9652, 111, 119, 110, 59, 32768, 9662, 101, 102, 116, 59, 32768, 9666, 105, 103, 104, 116, 59, 32768, 9656, 107, 59, 32768, 9251, 770, 6981, 0, 6991, 771, 6985, 0, 6988, 59, 32768, 9618, 59, 32768, 9617, 52, 59, 32768, 9619, 99, 107, 59, 32768, 9608, 512, 101, 111, 7004, 7019, 512, 59, 113, 7009, 7012, 32896, 61, 8421, 117, 105, 118, 59, 32896, 8801, 8421, 116, 59, 32768, 8976, 1024, 112, 116, 119, 120, 7032, 7037, 7049, 7055, 102, 59, 32896, 55349, 56659, 512, 59, 116, 7042, 7044, 32768, 8869, 111, 109, 59, 32768, 8869, 116, 105, 101, 59, 32768, 8904, 3072, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7080, 7101, 7126, 7147, 7182, 7187, 7208, 7233, 7240, 7246, 7253, 7274, 1024, 76, 82, 108, 114, 7089, 7092, 7095, 7098, 59, 32768, 9559, 59, 32768, 9556, 59, 32768, 9558, 59, 32768, 9555, 1280, 59, 68, 85, 100, 117, 7112, 7114, 7117, 7120, 7123, 32768, 9552, 59, 32768, 9574, 59, 32768, 9577, 59, 32768, 9572, 59, 32768, 9575, 1024, 76, 82, 108, 114, 7135, 7138, 7141, 7144, 59, 32768, 9565, 59, 32768, 9562, 59, 32768, 9564, 59, 32768, 9561, 1792, 59, 72, 76, 82, 104, 108, 114, 7162, 7164, 7167, 7170, 7173, 7176, 7179, 32768, 9553, 59, 32768, 9580, 59, 32768, 9571, 59, 32768, 9568, 59, 32768, 9579, 59, 32768, 9570, 59, 32768, 9567, 111, 120, 59, 32768, 10697, 1024, 76, 82, 108, 114, 7196, 7199, 7202, 7205, 59, 32768, 9557, 59, 32768, 9554, 59, 32768, 9488, 59, 32768, 9484, 1280, 59, 68, 85, 100, 117, 7219, 7221, 7224, 7227, 7230, 32768, 9472, 59, 32768, 9573, 59, 32768, 9576, 59, 32768, 9516, 59, 32768, 9524, 105, 110, 117, 115, 59, 32768, 8863, 108, 117, 115, 59, 32768, 8862, 105, 109, 101, 115, 59, 32768, 8864, 1024, 76, 82, 108, 114, 7262, 7265, 7268, 7271, 59, 32768, 9563, 59, 32768, 9560, 59, 32768, 9496, 59, 32768, 9492, 1792, 59, 72, 76, 82, 104, 108, 114, 7289, 7291, 7294, 7297, 7300, 7303, 7306, 32768, 9474, 59, 32768, 9578, 59, 32768, 9569, 59, 32768, 9566, 59, 32768, 9532, 59, 32768, 9508, 59, 32768, 9500, 114, 105, 109, 101, 59, 32768, 8245, 512, 101, 118, 7321, 7326, 118, 101, 59, 32768, 728, 98, 97, 114, 33024, 166, 59, 32768, 166, 1024, 99, 101, 105, 111, 7343, 7348, 7353, 7364, 114, 59, 32896, 55349, 56503, 109, 105, 59, 32768, 8271, 109, 512, 59, 101, 7359, 7361, 32768, 8765, 59, 32768, 8909, 108, 768, 59, 98, 104, 7372, 7374, 7377, 32768, 92, 59, 32768, 10693, 115, 117, 98, 59, 32768, 10184, 573, 7387, 7399, 108, 512, 59, 101, 7392, 7394, 32768, 8226, 116, 59, 32768, 8226, 112, 768, 59, 69, 101, 7406, 7408, 7411, 32768, 8782, 59, 32768, 10926, 512, 59, 113, 7416, 7418, 32768, 8783, 59, 32768, 8783, 6450, 7448, 0, 7523, 7571, 7576, 7613, 0, 7618, 7647, 0, 0, 7764, 0, 0, 7779, 0, 0, 7899, 7914, 7949, 7955, 0, 8158, 0, 8176, 768, 99, 112, 114, 7454, 7460, 7509, 117, 116, 101, 59, 32768, 263, 1536, 59, 97, 98, 99, 100, 115, 7473, 7475, 7480, 7487, 7500, 7505, 32768, 8745, 110, 100, 59, 32768, 10820, 114, 99, 117, 112, 59, 32768, 10825, 512, 97, 117, 7492, 7496, 112, 59, 32768, 10827, 112, 59, 32768, 10823, 111, 116, 59, 32768, 10816, 59, 32896, 8745, 65024, 512, 101, 111, 7514, 7518, 116, 59, 32768, 8257, 110, 59, 32768, 711, 1024, 97, 101, 105, 117, 7531, 7544, 7552, 7557, 833, 7536, 0, 7540, 115, 59, 32768, 10829, 111, 110, 59, 32768, 269, 100, 105, 108, 33024, 231, 59, 32768, 231, 114, 99, 59, 32768, 265, 112, 115, 512, 59, 115, 7564, 7566, 32768, 10828, 109, 59, 32768, 10832, 111, 116, 59, 32768, 267, 768, 100, 109, 110, 7582, 7589, 7596, 105, 108, 33024, 184, 59, 32768, 184, 112, 116, 121, 118, 59, 32768, 10674, 116, 33280, 162, 59, 101, 7603, 7605, 32768, 162, 114, 100, 111, 116, 59, 32768, 183, 114, 59, 32896, 55349, 56608, 768, 99, 101, 105, 7624, 7628, 7643, 121, 59, 32768, 1095, 99, 107, 512, 59, 109, 7635, 7637, 32768, 10003, 97, 114, 107, 59, 32768, 10003, 59, 32768, 967, 114, 1792, 59, 69, 99, 101, 102, 109, 115, 7662, 7664, 7667, 7742, 7745, 7752, 7757, 32768, 9675, 59, 32768, 10691, 768, 59, 101, 108, 7674, 7676, 7680, 32768, 710, 113, 59, 32768, 8791, 101, 1074, 7687, 0, 0, 7709, 114, 114, 111, 119, 512, 108, 114, 7695, 7701, 101, 102, 116, 59, 32768, 8634, 105, 103, 104, 116, 59, 32768, 8635, 1280, 82, 83, 97, 99, 100, 7719, 7722, 7725, 7730, 7736, 59, 32768, 174, 59, 32768, 9416, 115, 116, 59, 32768, 8859, 105, 114, 99, 59, 32768, 8858, 97, 115, 104, 59, 32768, 8861, 59, 32768, 8791, 110, 105, 110, 116, 59, 32768, 10768, 105, 100, 59, 32768, 10991, 99, 105, 114, 59, 32768, 10690, 117, 98, 115, 512, 59, 117, 7771, 7773, 32768, 9827, 105, 116, 59, 32768, 9827, 1341, 7785, 7804, 7850, 0, 7871, 111, 110, 512, 59, 101, 7791, 7793, 32768, 58, 512, 59, 113, 7798, 7800, 32768, 8788, 59, 32768, 8788, 1086, 7809, 0, 0, 7820, 97, 512, 59, 116, 7814, 7816, 32768, 44, 59, 32768, 64, 768, 59, 102, 108, 7826, 7828, 7832, 32768, 8705, 110, 59, 32768, 8728, 101, 512, 109, 120, 7838, 7844, 101, 110, 116, 59, 32768, 8705, 101, 115, 59, 32768, 8450, 824, 7854, 0, 7866, 512, 59, 100, 7858, 7860, 32768, 8773, 111, 116, 59, 32768, 10861, 110, 116, 59, 32768, 8750, 768, 102, 114, 121, 7877, 7881, 7886, 59, 32896, 55349, 56660, 111, 100, 59, 32768, 8720, 33280, 169, 59, 115, 7892, 7894, 32768, 169, 114, 59, 32768, 8471, 512, 97, 111, 7903, 7908, 114, 114, 59, 32768, 8629, 115, 115, 59, 32768, 10007, 512, 99, 117, 7918, 7923, 114, 59, 32896, 55349, 56504, 512, 98, 112, 7928, 7938, 512, 59, 101, 7933, 7935, 32768, 10959, 59, 32768, 10961, 512, 59, 101, 7943, 7945, 32768, 10960, 59, 32768, 10962, 100, 111, 116, 59, 32768, 8943, 1792, 100, 101, 108, 112, 114, 118, 119, 7969, 7983, 7996, 8009, 8057, 8147, 8152, 97, 114, 114, 512, 108, 114, 7977, 7980, 59, 32768, 10552, 59, 32768, 10549, 1089, 7989, 0, 0, 7993, 114, 59, 32768, 8926, 99, 59, 32768, 8927, 97, 114, 114, 512, 59, 112, 8004, 8006, 32768, 8630, 59, 32768, 10557, 1536, 59, 98, 99, 100, 111, 115, 8022, 8024, 8031, 8044, 8049, 8053, 32768, 8746, 114, 99, 97, 112, 59, 32768, 10824, 512, 97, 117, 8036, 8040, 112, 59, 32768, 10822, 112, 59, 32768, 10826, 111, 116, 59, 32768, 8845, 114, 59, 32768, 10821, 59, 32896, 8746, 65024, 1024, 97, 108, 114, 118, 8066, 8078, 8116, 8123, 114, 114, 512, 59, 109, 8073, 8075, 32768, 8631, 59, 32768, 10556, 121, 768, 101, 118, 119, 8086, 8104, 8109, 113, 1089, 8093, 0, 0, 8099, 114, 101, 99, 59, 32768, 8926, 117, 99, 99, 59, 32768, 8927, 101, 101, 59, 32768, 8910, 101, 100, 103, 101, 59, 32768, 8911, 101, 110, 33024, 164, 59, 32768, 164, 101, 97, 114, 114, 111, 119, 512, 108, 114, 8134, 8140, 101, 102, 116, 59, 32768, 8630, 105, 103, 104, 116, 59, 32768, 8631, 101, 101, 59, 32768, 8910, 101, 100, 59, 32768, 8911, 512, 99, 105, 8162, 8170, 111, 110, 105, 110, 116, 59, 32768, 8754, 110, 116, 59, 32768, 8753, 108, 99, 116, 121, 59, 32768, 9005, 4864, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8221, 8226, 8231, 8267, 8282, 8296, 8327, 8351, 8366, 8379, 8466, 8471, 8487, 8621, 8647, 8676, 8697, 8712, 8720, 114, 114, 59, 32768, 8659, 97, 114, 59, 32768, 10597, 1024, 103, 108, 114, 115, 8240, 8246, 8252, 8256, 103, 101, 114, 59, 32768, 8224, 101, 116, 104, 59, 32768, 8504, 114, 59, 32768, 8595, 104, 512, 59, 118, 8262, 8264, 32768, 8208, 59, 32768, 8867, 572, 8271, 8278, 97, 114, 111, 119, 59, 32768, 10511, 97, 99, 59, 32768, 733, 512, 97, 121, 8287, 8293, 114, 111, 110, 59, 32768, 271, 59, 32768, 1076, 768, 59, 97, 111, 8303, 8305, 8320, 32768, 8518, 512, 103, 114, 8310, 8316, 103, 101, 114, 59, 32768, 8225, 114, 59, 32768, 8650, 116, 115, 101, 113, 59, 32768, 10871, 768, 103, 108, 109, 8334, 8339, 8344, 33024, 176, 59, 32768, 176, 116, 97, 59, 32768, 948, 112, 116, 121, 118, 59, 32768, 10673, 512, 105, 114, 8356, 8362, 115, 104, 116, 59, 32768, 10623, 59, 32896, 55349, 56609, 97, 114, 512, 108, 114, 8373, 8376, 59, 32768, 8643, 59, 32768, 8642, 1280, 97, 101, 103, 115, 118, 8390, 8418, 8421, 8428, 8433, 109, 768, 59, 111, 115, 8398, 8400, 8415, 32768, 8900, 110, 100, 512, 59, 115, 8407, 8409, 32768, 8900, 117, 105, 116, 59, 32768, 9830, 59, 32768, 9830, 59, 32768, 168, 97, 109, 109, 97, 59, 32768, 989, 105, 110, 59, 32768, 8946, 768, 59, 105, 111, 8440, 8442, 8461, 32768, 247, 100, 101, 33280, 247, 59, 111, 8450, 8452, 32768, 247, 110, 116, 105, 109, 101, 115, 59, 32768, 8903, 110, 120, 59, 32768, 8903, 99, 121, 59, 32768, 1106, 99, 1088, 8478, 0, 0, 8483, 114, 110, 59, 32768, 8990, 111, 112, 59, 32768, 8973, 1280, 108, 112, 116, 117, 119, 8498, 8504, 8509, 8556, 8570, 108, 97, 114, 59, 32768, 36, 102, 59, 32896, 55349, 56661, 1280, 59, 101, 109, 112, 115, 8520, 8522, 8535, 8542, 8548, 32768, 729, 113, 512, 59, 100, 8528, 8530, 32768, 8784, 111, 116, 59, 32768, 8785, 105, 110, 117, 115, 59, 32768, 8760, 108, 117, 115, 59, 32768, 8724, 113, 117, 97, 114, 101, 59, 32768, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 32768, 8966, 110, 768, 97, 100, 104, 8578, 8585, 8597, 114, 114, 111, 119, 59, 32768, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 32768, 8650, 97, 114, 112, 111, 111, 110, 512, 108, 114, 8608, 8614, 101, 102, 116, 59, 32768, 8643, 105, 103, 104, 116, 59, 32768, 8642, 563, 8625, 8633, 107, 97, 114, 111, 119, 59, 32768, 10512, 1088, 8638, 0, 0, 8643, 114, 110, 59, 32768, 8991, 111, 112, 59, 32768, 8972, 768, 99, 111, 116, 8654, 8666, 8670, 512, 114, 121, 8659, 8663, 59, 32896, 55349, 56505, 59, 32768, 1109, 108, 59, 32768, 10742, 114, 111, 107, 59, 32768, 273, 512, 100, 114, 8681, 8686, 111, 116, 59, 32768, 8945, 105, 512, 59, 102, 8692, 8694, 32768, 9663, 59, 32768, 9662, 512, 97, 104, 8702, 8707, 114, 114, 59, 32768, 8693, 97, 114, 59, 32768, 10607, 97, 110, 103, 108, 101, 59, 32768, 10662, 512, 99, 105, 8725, 8729, 121, 59, 32768, 1119, 103, 114, 97, 114, 114, 59, 32768, 10239, 4608, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 8774, 8788, 8807, 8844, 8849, 8852, 8866, 8895, 8929, 8977, 8989, 9004, 9046, 9136, 9151, 9171, 9184, 9199, 512, 68, 111, 8779, 8784, 111, 116, 59, 32768, 10871, 116, 59, 32768, 8785, 512, 99, 115, 8793, 8801, 117, 116, 101, 33024, 233, 59, 32768, 233, 116, 101, 114, 59, 32768, 10862, 1024, 97, 105, 111, 121, 8816, 8822, 8835, 8841, 114, 111, 110, 59, 32768, 283, 114, 512, 59, 99, 8828, 8830, 32768, 8790, 33024, 234, 59, 32768, 234, 108, 111, 110, 59, 32768, 8789, 59, 32768, 1101, 111, 116, 59, 32768, 279, 59, 32768, 8519, 512, 68, 114, 8857, 8862, 111, 116, 59, 32768, 8786, 59, 32896, 55349, 56610, 768, 59, 114, 115, 8873, 8875, 8883, 32768, 10906, 97, 118, 101, 33024, 232, 59, 32768, 232, 512, 59, 100, 8888, 8890, 32768, 10902, 111, 116, 59, 32768, 10904, 1024, 59, 105, 108, 115, 8904, 8906, 8914, 8917, 32768, 10905, 110, 116, 101, 114, 115, 59, 32768, 9191, 59, 32768, 8467, 512, 59, 100, 8922, 8924, 32768, 10901, 111, 116, 59, 32768, 10903, 768, 97, 112, 115, 8936, 8941, 8960, 99, 114, 59, 32768, 275, 116, 121, 768, 59, 115, 118, 8950, 8952, 8957, 32768, 8709, 101, 116, 59, 32768, 8709, 59, 32768, 8709, 112, 512, 49, 59, 8966, 8975, 516, 8970, 8973, 59, 32768, 8196, 59, 32768, 8197, 32768, 8195, 512, 103, 115, 8982, 8985, 59, 32768, 331, 112, 59, 32768, 8194, 512, 103, 112, 8994, 8999, 111, 110, 59, 32768, 281, 102, 59, 32896, 55349, 56662, 768, 97, 108, 115, 9011, 9023, 9028, 114, 512, 59, 115, 9017, 9019, 32768, 8917, 108, 59, 32768, 10723, 117, 115, 59, 32768, 10865, 105, 768, 59, 108, 118, 9036, 9038, 9043, 32768, 949, 111, 110, 59, 32768, 949, 59, 32768, 1013, 1024, 99, 115, 117, 118, 9055, 9071, 9099, 9128, 512, 105, 111, 9060, 9065, 114, 99, 59, 32768, 8790, 108, 111, 110, 59, 32768, 8789, 1082, 9077, 0, 0, 9081, 109, 59, 32768, 8770, 97, 110, 116, 512, 103, 108, 9088, 9093, 116, 114, 59, 32768, 10902, 101, 115, 115, 59, 32768, 10901, 768, 97, 101, 105, 9106, 9111, 9116, 108, 115, 59, 32768, 61, 115, 116, 59, 32768, 8799, 118, 512, 59, 68, 9122, 9124, 32768, 8801, 68, 59, 32768, 10872, 112, 97, 114, 115, 108, 59, 32768, 10725, 512, 68, 97, 9141, 9146, 111, 116, 59, 32768, 8787, 114, 114, 59, 32768, 10609, 768, 99, 100, 105, 9158, 9162, 9167, 114, 59, 32768, 8495, 111, 116, 59, 32768, 8784, 109, 59, 32768, 8770, 512, 97, 104, 9176, 9179, 59, 32768, 951, 33024, 240, 59, 32768, 240, 512, 109, 114, 9189, 9195, 108, 33024, 235, 59, 32768, 235, 111, 59, 32768, 8364, 768, 99, 105, 112, 9206, 9210, 9215, 108, 59, 32768, 33, 115, 116, 59, 32768, 8707, 512, 101, 111, 9220, 9230, 99, 116, 97, 116, 105, 111, 110, 59, 32768, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 32768, 8519, 4914, 9262, 0, 9276, 0, 9280, 9287, 0, 0, 9318, 9324, 0, 9331, 0, 9352, 9357, 9386, 0, 9395, 9497, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 32768, 8786, 121, 59, 32768, 1092, 109, 97, 108, 101, 59, 32768, 9792, 768, 105, 108, 114, 9293, 9299, 9313, 108, 105, 103, 59, 32768, 64259, 1082, 9305, 0, 0, 9309, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 32896, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 32896, 102, 106, 768, 97, 108, 116, 9337, 9341, 9346, 116, 59, 32768, 9837, 105, 103, 59, 32768, 64258, 110, 115, 59, 32768, 9649, 111, 102, 59, 32768, 402, 833, 9361, 0, 9366, 102, 59, 32896, 55349, 56663, 512, 97, 107, 9370, 9375, 108, 108, 59, 32768, 8704, 512, 59, 118, 9380, 9382, 32768, 8916, 59, 32768, 10969, 97, 114, 116, 105, 110, 116, 59, 32768, 10765, 512, 97, 111, 9399, 9491, 512, 99, 115, 9404, 9487, 1794, 9413, 9443, 9453, 9470, 9474, 0, 9484, 1795, 9421, 9426, 9429, 9434, 9437, 0, 9440, 33024, 189, 59, 32768, 189, 59, 32768, 8531, 33024, 188, 59, 32768, 188, 59, 32768, 8533, 59, 32768, 8537, 59, 32768, 8539, 772, 9447, 0, 9450, 59, 32768, 8532, 59, 32768, 8534, 1285, 9459, 9464, 0, 0, 9467, 33024, 190, 59, 32768, 190, 59, 32768, 8535, 59, 32768, 8540, 53, 59, 32768, 8536, 775, 9478, 0, 9481, 59, 32768, 8538, 59, 32768, 8541, 56, 59, 32768, 8542, 108, 59, 32768, 8260, 119, 110, 59, 32768, 8994, 99, 114, 59, 32896, 55349, 56507, 4352, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 9537, 9547, 9575, 9582, 9595, 9600, 9679, 9684, 9694, 9700, 9705, 9725, 9773, 9779, 9785, 9810, 9917, 512, 59, 108, 9542, 9544, 32768, 8807, 59, 32768, 10892, 768, 99, 109, 112, 9554, 9560, 9572, 117, 116, 101, 59, 32768, 501, 109, 97, 512, 59, 100, 9567, 9569, 32768, 947, 59, 32768, 989, 59, 32768, 10886, 114, 101, 118, 101, 59, 32768, 287, 512, 105, 121, 9587, 9592, 114, 99, 59, 32768, 285, 59, 32768, 1075, 111, 116, 59, 32768, 289, 1024, 59, 108, 113, 115, 9609, 9611, 9614, 9633, 32768, 8805, 59, 32768, 8923, 768, 59, 113, 115, 9621, 9623, 9626, 32768, 8805, 59, 32768, 8807, 108, 97, 110, 116, 59, 32768, 10878, 1024, 59, 99, 100, 108, 9642, 9644, 9648, 9667, 32768, 10878, 99, 59, 32768, 10921, 111, 116, 512, 59, 111, 9655, 9657, 32768, 10880, 512, 59, 108, 9662, 9664, 32768, 10882, 59, 32768, 10884, 512, 59, 101, 9672, 9675, 32896, 8923, 65024, 115, 59, 32768, 10900, 114, 59, 32896, 55349, 56612, 512, 59, 103, 9689, 9691, 32768, 8811, 59, 32768, 8921, 109, 101, 108, 59, 32768, 8503, 99, 121, 59, 32768, 1107, 1024, 59, 69, 97, 106, 9714, 9716, 9719, 9722, 32768, 8823, 59, 32768, 10898, 59, 32768, 10917, 59, 32768, 10916, 1024, 69, 97, 101, 115, 9734, 9737, 9751, 9768, 59, 32768, 8809, 112, 512, 59, 112, 9743, 9745, 32768, 10890, 114, 111, 120, 59, 32768, 10890, 512, 59, 113, 9756, 9758, 32768, 10888, 512, 59, 113, 9763, 9765, 32768, 10888, 59, 32768, 8809, 105, 109, 59, 32768, 8935, 112, 102, 59, 32896, 55349, 56664, 97, 118, 101, 59, 32768, 96, 512, 99, 105, 9790, 9794, 114, 59, 32768, 8458, 109, 768, 59, 101, 108, 9802, 9804, 9807, 32768, 8819, 59, 32768, 10894, 59, 32768, 10896, 34304, 62, 59, 99, 100, 108, 113, 114, 9824, 9826, 9838, 9843, 9849, 9856, 32768, 62, 512, 99, 105, 9831, 9834, 59, 32768, 10919, 114, 59, 32768, 10874, 111, 116, 59, 32768, 8919, 80, 97, 114, 59, 32768, 10645, 117, 101, 115, 116, 59, 32768, 10876, 1280, 97, 100, 101, 108, 115, 9867, 9882, 9887, 9906, 9912, 833, 9872, 0, 9879, 112, 114, 111, 120, 59, 32768, 10886, 114, 59, 32768, 10616, 111, 116, 59, 32768, 8919, 113, 512, 108, 113, 9893, 9899, 101, 115, 115, 59, 32768, 8923, 108, 101, 115, 115, 59, 32768, 10892, 101, 115, 115, 59, 32768, 8823, 105, 109, 59, 32768, 8819, 512, 101, 110, 9922, 9932, 114, 116, 110, 101, 113, 113, 59, 32896, 8809, 65024, 69, 59, 32896, 8809, 65024, 2560, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 9958, 9963, 10015, 10020, 10026, 10060, 10065, 10085, 10147, 10171, 114, 114, 59, 32768, 8660, 1024, 105, 108, 109, 114, 9972, 9978, 9982, 9988, 114, 115, 112, 59, 32768, 8202, 102, 59, 32768, 189, 105, 108, 116, 59, 32768, 8459, 512, 100, 114, 9993, 9998, 99, 121, 59, 32768, 1098, 768, 59, 99, 119, 10005, 10007, 10012, 32768, 8596, 105, 114, 59, 32768, 10568, 59, 32768, 8621, 97, 114, 59, 32768, 8463, 105, 114, 99, 59, 32768, 293, 768, 97, 108, 114, 10033, 10048, 10054, 114, 116, 115, 512, 59, 117, 10041, 10043, 32768, 9829, 105, 116, 59, 32768, 9829, 108, 105, 112, 59, 32768, 8230, 99, 111, 110, 59, 32768, 8889, 114, 59, 32896, 55349, 56613, 115, 512, 101, 119, 10071, 10078, 97, 114, 111, 119, 59, 32768, 10533, 97, 114, 111, 119, 59, 32768, 10534, 1280, 97, 109, 111, 112, 114, 10096, 10101, 10107, 10136, 10141, 114, 114, 59, 32768, 8703, 116, 104, 116, 59, 32768, 8763, 107, 512, 108, 114, 10113, 10124, 101, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8618, 102, 59, 32896, 55349, 56665, 98, 97, 114, 59, 32768, 8213, 768, 99, 108, 116, 10154, 10159, 10165, 114, 59, 32896, 55349, 56509, 97, 115, 104, 59, 32768, 8463, 114, 111, 107, 59, 32768, 295, 512, 98, 112, 10176, 10182, 117, 108, 108, 59, 32768, 8259, 104, 101, 110, 59, 32768, 8208, 5426, 10211, 0, 10220, 0, 10239, 10255, 10267, 0, 10276, 10312, 0, 0, 10318, 10371, 10458, 10485, 10491, 0, 10500, 10545, 10558, 99, 117, 116, 101, 33024, 237, 59, 32768, 237, 768, 59, 105, 121, 10226, 10228, 10235, 32768, 8291, 114, 99, 33024, 238, 59, 32768, 238, 59, 32768, 1080, 512, 99, 120, 10243, 10247, 121, 59, 32768, 1077, 99, 108, 33024, 161, 59, 32768, 161, 512, 102, 114, 10259, 10262, 59, 32768, 8660, 59, 32896, 55349, 56614, 114, 97, 118, 101, 33024, 236, 59, 32768, 236, 1024, 59, 105, 110, 111, 10284, 10286, 10300, 10306, 32768, 8520, 512, 105, 110, 10291, 10296, 110, 116, 59, 32768, 10764, 116, 59, 32768, 8749, 102, 105, 110, 59, 32768, 10716, 116, 97, 59, 32768, 8489, 108, 105, 103, 59, 32768, 307, 768, 97, 111, 112, 10324, 10361, 10365, 768, 99, 103, 116, 10331, 10335, 10357, 114, 59, 32768, 299, 768, 101, 108, 112, 10342, 10345, 10351, 59, 32768, 8465, 105, 110, 101, 59, 32768, 8464, 97, 114, 116, 59, 32768, 8465, 104, 59, 32768, 305, 102, 59, 32768, 8887, 101, 100, 59, 32768, 437, 1280, 59, 99, 102, 111, 116, 10381, 10383, 10389, 10403, 10409, 32768, 8712, 97, 114, 101, 59, 32768, 8453, 105, 110, 512, 59, 116, 10396, 10398, 32768, 8734, 105, 101, 59, 32768, 10717, 100, 111, 116, 59, 32768, 305, 1280, 59, 99, 101, 108, 112, 10420, 10422, 10427, 10444, 10451, 32768, 8747, 97, 108, 59, 32768, 8890, 512, 103, 114, 10432, 10438, 101, 114, 115, 59, 32768, 8484, 99, 97, 108, 59, 32768, 8890, 97, 114, 104, 107, 59, 32768, 10775, 114, 111, 100, 59, 32768, 10812, 1024, 99, 103, 112, 116, 10466, 10470, 10475, 10480, 121, 59, 32768, 1105, 111, 110, 59, 32768, 303, 102, 59, 32896, 55349, 56666, 97, 59, 32768, 953, 114, 111, 100, 59, 32768, 10812, 117, 101, 115, 116, 33024, 191, 59, 32768, 191, 512, 99, 105, 10504, 10509, 114, 59, 32896, 55349, 56510, 110, 1280, 59, 69, 100, 115, 118, 10521, 10523, 10526, 10531, 10541, 32768, 8712, 59, 32768, 8953, 111, 116, 59, 32768, 8949, 512, 59, 118, 10536, 10538, 32768, 8948, 59, 32768, 8947, 59, 32768, 8712, 512, 59, 105, 10549, 10551, 32768, 8290, 108, 100, 101, 59, 32768, 297, 828, 10562, 0, 10567, 99, 121, 59, 32768, 1110, 108, 33024, 239, 59, 32768, 239, 1536, 99, 102, 109, 111, 115, 117, 10585, 10598, 10603, 10609, 10615, 10630, 512, 105, 121, 10590, 10595, 114, 99, 59, 32768, 309, 59, 32768, 1081, 114, 59, 32896, 55349, 56615, 97, 116, 104, 59, 32768, 567, 112, 102, 59, 32896, 55349, 56667, 820, 10620, 0, 10625, 114, 59, 32896, 55349, 56511, 114, 99, 121, 59, 32768, 1112, 107, 99, 121, 59, 32768, 1108, 2048, 97, 99, 102, 103, 104, 106, 111, 115, 10653, 10666, 10680, 10685, 10692, 10697, 10702, 10708, 112, 112, 97, 512, 59, 118, 10661, 10663, 32768, 954, 59, 32768, 1008, 512, 101, 121, 10671, 10677, 100, 105, 108, 59, 32768, 311, 59, 32768, 1082, 114, 59, 32896, 55349, 56616, 114, 101, 101, 110, 59, 32768, 312, 99, 121, 59, 32768, 1093, 99, 121, 59, 32768, 1116, 112, 102, 59, 32896, 55349, 56668, 99, 114, 59, 32896, 55349, 56512, 5888, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 10761, 10783, 10789, 10799, 10804, 10957, 11011, 11047, 11094, 11349, 11372, 11382, 11409, 11414, 11451, 11478, 11526, 11698, 11711, 11755, 11823, 11910, 11929, 768, 97, 114, 116, 10768, 10773, 10777, 114, 114, 59, 32768, 8666, 114, 59, 32768, 8656, 97, 105, 108, 59, 32768, 10523, 97, 114, 114, 59, 32768, 10510, 512, 59, 103, 10794, 10796, 32768, 8806, 59, 32768, 10891, 97, 114, 59, 32768, 10594, 4660, 10824, 0, 10830, 0, 10838, 0, 0, 0, 0, 0, 10844, 10850, 0, 10867, 10870, 10877, 0, 10933, 117, 116, 101, 59, 32768, 314, 109, 112, 116, 121, 118, 59, 32768, 10676, 114, 97, 110, 59, 32768, 8466, 98, 100, 97, 59, 32768, 955, 103, 768, 59, 100, 108, 10857, 10859, 10862, 32768, 10216, 59, 32768, 10641, 101, 59, 32768, 10216, 59, 32768, 10885, 117, 111, 33024, 171, 59, 32768, 171, 114, 2048, 59, 98, 102, 104, 108, 112, 115, 116, 10894, 10896, 10907, 10911, 10915, 10919, 10923, 10928, 32768, 8592, 512, 59, 102, 10901, 10903, 32768, 8676, 115, 59, 32768, 10527, 115, 59, 32768, 10525, 107, 59, 32768, 8617, 112, 59, 32768, 8619, 108, 59, 32768, 10553, 105, 109, 59, 32768, 10611, 108, 59, 32768, 8610, 768, 59, 97, 101, 10939, 10941, 10946, 32768, 10923, 105, 108, 59, 32768, 10521, 512, 59, 115, 10951, 10953, 32768, 10925, 59, 32896, 10925, 65024, 768, 97, 98, 114, 10964, 10969, 10974, 114, 114, 59, 32768, 10508, 114, 107, 59, 32768, 10098, 512, 97, 107, 10979, 10991, 99, 512, 101, 107, 10985, 10988, 59, 32768, 123, 59, 32768, 91, 512, 101, 115, 10996, 10999, 59, 32768, 10635, 108, 512, 100, 117, 11005, 11008, 59, 32768, 10639, 59, 32768, 10637, 1024, 97, 101, 117, 121, 11020, 11026, 11040, 11044, 114, 111, 110, 59, 32768, 318, 512, 100, 105, 11031, 11036, 105, 108, 59, 32768, 316, 108, 59, 32768, 8968, 98, 59, 32768, 123, 59, 32768, 1083, 1024, 99, 113, 114, 115, 11056, 11060, 11072, 11090, 97, 59, 32768, 10550, 117, 111, 512, 59, 114, 11067, 11069, 32768, 8220, 59, 32768, 8222, 512, 100, 117, 11077, 11083, 104, 97, 114, 59, 32768, 10599, 115, 104, 97, 114, 59, 32768, 10571, 104, 59, 32768, 8626, 1280, 59, 102, 103, 113, 115, 11105, 11107, 11228, 11231, 11250, 32768, 8804, 116, 1280, 97, 104, 108, 114, 116, 11119, 11136, 11157, 11169, 11216, 114, 114, 111, 119, 512, 59, 116, 11128, 11130, 32768, 8592, 97, 105, 108, 59, 32768, 8610, 97, 114, 112, 111, 111, 110, 512, 100, 117, 11147, 11153, 111, 119, 110, 59, 32768, 8637, 112, 59, 32768, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 32768, 8647, 105, 103, 104, 116, 768, 97, 104, 115, 11180, 11194, 11204, 114, 114, 111, 119, 512, 59, 115, 11189, 11191, 32768, 8596, 59, 32768, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 32768, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 32768, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 32768, 8907, 59, 32768, 8922, 768, 59, 113, 115, 11238, 11240, 11243, 32768, 8804, 59, 32768, 8806, 108, 97, 110, 116, 59, 32768, 10877, 1280, 59, 99, 100, 103, 115, 11261, 11263, 11267, 11286, 11298, 32768, 10877, 99, 59, 32768, 10920, 111, 116, 512, 59, 111, 11274, 11276, 32768, 10879, 512, 59, 114, 11281, 11283, 32768, 10881, 59, 32768, 10883, 512, 59, 101, 11291, 11294, 32896, 8922, 65024, 115, 59, 32768, 10899, 1280, 97, 100, 101, 103, 115, 11309, 11317, 11322, 11339, 11344, 112, 112, 114, 111, 120, 59, 32768, 10885, 111, 116, 59, 32768, 8918, 113, 512, 103, 113, 11328, 11333, 116, 114, 59, 32768, 8922, 103, 116, 114, 59, 32768, 10891, 116, 114, 59, 32768, 8822, 105, 109, 59, 32768, 8818, 768, 105, 108, 114, 11356, 11362, 11368, 115, 104, 116, 59, 32768, 10620, 111, 111, 114, 59, 32768, 8970, 59, 32896, 55349, 56617, 512, 59, 69, 11377, 11379, 32768, 8822, 59, 32768, 10897, 562, 11386, 11405, 114, 512, 100, 117, 11391, 11394, 59, 32768, 8637, 512, 59, 108, 11399, 11401, 32768, 8636, 59, 32768, 10602, 108, 107, 59, 32768, 9604, 99, 121, 59, 32768, 1113, 1280, 59, 97, 99, 104, 116, 11425, 11427, 11432, 11440, 11446, 32768, 8810, 114, 114, 59, 32768, 8647, 111, 114, 110, 101, 114, 59, 32768, 8990, 97, 114, 100, 59, 32768, 10603, 114, 105, 59, 32768, 9722, 512, 105, 111, 11456, 11462, 100, 111, 116, 59, 32768, 320, 117, 115, 116, 512, 59, 97, 11470, 11472, 32768, 9136, 99, 104, 101, 59, 32768, 9136, 1024, 69, 97, 101, 115, 11487, 11490, 11504, 11521, 59, 32768, 8808, 112, 512, 59, 112, 11496, 11498, 32768, 10889, 114, 111, 120, 59, 32768, 10889, 512, 59, 113, 11509, 11511, 32768, 10887, 512, 59, 113, 11516, 11518, 32768, 10887, 59, 32768, 8808, 105, 109, 59, 32768, 8934, 2048, 97, 98, 110, 111, 112, 116, 119, 122, 11543, 11556, 11561, 11616, 11640, 11660, 11667, 11680, 512, 110, 114, 11548, 11552, 103, 59, 32768, 10220, 114, 59, 32768, 8701, 114, 107, 59, 32768, 10214, 103, 768, 108, 109, 114, 11569, 11596, 11604, 101, 102, 116, 512, 97, 114, 11577, 11584, 114, 114, 111, 119, 59, 32768, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10231, 97, 112, 115, 116, 111, 59, 32768, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10230, 112, 97, 114, 114, 111, 119, 512, 108, 114, 11627, 11633, 101, 102, 116, 59, 32768, 8619, 105, 103, 104, 116, 59, 32768, 8620, 768, 97, 102, 108, 11647, 11651, 11655, 114, 59, 32768, 10629, 59, 32896, 55349, 56669, 117, 115, 59, 32768, 10797, 105, 109, 101, 115, 59, 32768, 10804, 562, 11671, 11676, 115, 116, 59, 32768, 8727, 97, 114, 59, 32768, 95, 768, 59, 101, 102, 11687, 11689, 11695, 32768, 9674, 110, 103, 101, 59, 32768, 9674, 59, 32768, 10731, 97, 114, 512, 59, 108, 11705, 11707, 32768, 40, 116, 59, 32768, 10643, 1280, 97, 99, 104, 109, 116, 11722, 11727, 11735, 11747, 11750, 114, 114, 59, 32768, 8646, 111, 114, 110, 101, 114, 59, 32768, 8991, 97, 114, 512, 59, 100, 11742, 11744, 32768, 8651, 59, 32768, 10605, 59, 32768, 8206, 114, 105, 59, 32768, 8895, 1536, 97, 99, 104, 105, 113, 116, 11768, 11774, 11779, 11782, 11798, 11817, 113, 117, 111, 59, 32768, 8249, 114, 59, 32896, 55349, 56513, 59, 32768, 8624, 109, 768, 59, 101, 103, 11790, 11792, 11795, 32768, 8818, 59, 32768, 10893, 59, 32768, 10895, 512, 98, 117, 11803, 11806, 59, 32768, 91, 111, 512, 59, 114, 11812, 11814, 32768, 8216, 59, 32768, 8218, 114, 111, 107, 59, 32768, 322, 34816, 60, 59, 99, 100, 104, 105, 108, 113, 114, 11841, 11843, 11855, 11860, 11866, 11872, 11878, 11885, 32768, 60, 512, 99, 105, 11848, 11851, 59, 32768, 10918, 114, 59, 32768, 10873, 111, 116, 59, 32768, 8918, 114, 101, 101, 59, 32768, 8907, 109, 101, 115, 59, 32768, 8905, 97, 114, 114, 59, 32768, 10614, 117, 101, 115, 116, 59, 32768, 10875, 512, 80, 105, 11890, 11895, 97, 114, 59, 32768, 10646, 768, 59, 101, 102, 11902, 11904, 11907, 32768, 9667, 59, 32768, 8884, 59, 32768, 9666, 114, 512, 100, 117, 11916, 11923, 115, 104, 97, 114, 59, 32768, 10570, 104, 97, 114, 59, 32768, 10598, 512, 101, 110, 11934, 11944, 114, 116, 110, 101, 113, 113, 59, 32896, 8808, 65024, 69, 59, 32896, 8808, 65024, 3584, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 11978, 11984, 12061, 12075, 12081, 12095, 12100, 12104, 12170, 12181, 12188, 12204, 12207, 12223, 68, 111, 116, 59, 32768, 8762, 1024, 99, 108, 112, 114, 11993, 11999, 12019, 12055, 114, 33024, 175, 59, 32768, 175, 512, 101, 116, 12004, 12007, 59, 32768, 9794, 512, 59, 101, 12012, 12014, 32768, 10016, 115, 101, 59, 32768, 10016, 512, 59, 115, 12024, 12026, 32768, 8614, 116, 111, 1024, 59, 100, 108, 117, 12037, 12039, 12045, 12051, 32768, 8614, 111, 119, 110, 59, 32768, 8615, 101, 102, 116, 59, 32768, 8612, 112, 59, 32768, 8613, 107, 101, 114, 59, 32768, 9646, 512, 111, 121, 12066, 12072, 109, 109, 97, 59, 32768, 10793, 59, 32768, 1084, 97, 115, 104, 59, 32768, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 32768, 8737, 114, 59, 32896, 55349, 56618, 111, 59, 32768, 8487, 768, 99, 100, 110, 12111, 12118, 12146, 114, 111, 33024, 181, 59, 32768, 181, 1024, 59, 97, 99, 100, 12127, 12129, 12134, 12139, 32768, 8739, 115, 116, 59, 32768, 42, 105, 114, 59, 32768, 10992, 111, 116, 33024, 183, 59, 32768, 183, 117, 115, 768, 59, 98, 100, 12155, 12157, 12160, 32768, 8722, 59, 32768, 8863, 512, 59, 117, 12165, 12167, 32768, 8760, 59, 32768, 10794, 564, 12174, 12178, 112, 59, 32768, 10971, 114, 59, 32768, 8230, 112, 108, 117, 115, 59, 32768, 8723, 512, 100, 112, 12193, 12199, 101, 108, 115, 59, 32768, 8871, 102, 59, 32896, 55349, 56670, 59, 32768, 8723, 512, 99, 116, 12212, 12217, 114, 59, 32896, 55349, 56514, 112, 111, 115, 59, 32768, 8766, 768, 59, 108, 109, 12230, 12232, 12240, 32768, 956, 116, 105, 109, 97, 112, 59, 32768, 8888, 97, 112, 59, 32768, 8888, 6144, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 12294, 12315, 12364, 12376, 12393, 12472, 12496, 12547, 12553, 12636, 12641, 12703, 12725, 12747, 12752, 12876, 12881, 12957, 13033, 13089, 13294, 13359, 13384, 13499, 512, 103, 116, 12299, 12303, 59, 32896, 8921, 824, 512, 59, 118, 12308, 12311, 32896, 8811, 8402, 59, 32896, 8811, 824, 768, 101, 108, 116, 12322, 12348, 12352, 102, 116, 512, 97, 114, 12329, 12336, 114, 114, 111, 119, 59, 32768, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8654, 59, 32896, 8920, 824, 512, 59, 118, 12357, 12360, 32896, 8810, 8402, 59, 32896, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8655, 512, 68, 100, 12381, 12387, 97, 115, 104, 59, 32768, 8879, 97, 115, 104, 59, 32768, 8878, 1280, 98, 99, 110, 112, 116, 12404, 12409, 12415, 12420, 12452, 108, 97, 59, 32768, 8711, 117, 116, 101, 59, 32768, 324, 103, 59, 32896, 8736, 8402, 1280, 59, 69, 105, 111, 112, 12431, 12433, 12437, 12442, 12446, 32768, 8777, 59, 32896, 10864, 824, 100, 59, 32896, 8779, 824, 115, 59, 32768, 329, 114, 111, 120, 59, 32768, 8777, 117, 114, 512, 59, 97, 12459, 12461, 32768, 9838, 108, 512, 59, 115, 12467, 12469, 32768, 9838, 59, 32768, 8469, 836, 12477, 0, 12483, 112, 33024, 160, 59, 32768, 160, 109, 112, 512, 59, 101, 12489, 12492, 32896, 8782, 824, 59, 32896, 8783, 824, 1280, 97, 101, 111, 117, 121, 12507, 12519, 12525, 12540, 12544, 833, 12512, 0, 12515, 59, 32768, 10819, 111, 110, 59, 32768, 328, 100, 105, 108, 59, 32768, 326, 110, 103, 512, 59, 100, 12532, 12534, 32768, 8775, 111, 116, 59, 32896, 10861, 824, 112, 59, 32768, 10818, 59, 32768, 1085, 97, 115, 104, 59, 32768, 8211, 1792, 59, 65, 97, 100, 113, 115, 120, 12568, 12570, 12575, 12596, 12602, 12608, 12623, 32768, 8800, 114, 114, 59, 32768, 8663, 114, 512, 104, 114, 12581, 12585, 107, 59, 32768, 10532, 512, 59, 111, 12590, 12592, 32768, 8599, 119, 59, 32768, 8599, 111, 116, 59, 32896, 8784, 824, 117, 105, 118, 59, 32768, 8802, 512, 101, 105, 12613, 12618, 97, 114, 59, 32768, 10536, 109, 59, 32896, 8770, 824, 105, 115, 116, 512, 59, 115, 12631, 12633, 32768, 8708, 59, 32768, 8708, 114, 59, 32896, 55349, 56619, 1024, 69, 101, 115, 116, 12650, 12654, 12688, 12693, 59, 32896, 8807, 824, 768, 59, 113, 115, 12661, 12663, 12684, 32768, 8817, 768, 59, 113, 115, 12670, 12672, 12676, 32768, 8817, 59, 32896, 8807, 824, 108, 97, 110, 116, 59, 32896, 10878, 824, 59, 32896, 10878, 824, 105, 109, 59, 32768, 8821, 512, 59, 114, 12698, 12700, 32768, 8815, 59, 32768, 8815, 768, 65, 97, 112, 12710, 12715, 12720, 114, 114, 59, 32768, 8654, 114, 114, 59, 32768, 8622, 97, 114, 59, 32768, 10994, 768, 59, 115, 118, 12732, 12734, 12744, 32768, 8715, 512, 59, 100, 12739, 12741, 32768, 8956, 59, 32768, 8954, 59, 32768, 8715, 99, 121, 59, 32768, 1114, 1792, 65, 69, 97, 100, 101, 115, 116, 12767, 12772, 12776, 12781, 12785, 12853, 12858, 114, 114, 59, 32768, 8653, 59, 32896, 8806, 824, 114, 114, 59, 32768, 8602, 114, 59, 32768, 8229, 1024, 59, 102, 113, 115, 12794, 12796, 12821, 12842, 32768, 8816, 116, 512, 97, 114, 12802, 12809, 114, 114, 111, 119, 59, 32768, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8622, 768, 59, 113, 115, 12828, 12830, 12834, 32768, 8816, 59, 32896, 8806, 824, 108, 97, 110, 116, 59, 32896, 10877, 824, 512, 59, 115, 12847, 12850, 32896, 10877, 824, 59, 32768, 8814, 105, 109, 59, 32768, 8820, 512, 59, 114, 12863, 12865, 32768, 8814, 105, 512, 59, 101, 12871, 12873, 32768, 8938, 59, 32768, 8940, 105, 100, 59, 32768, 8740, 512, 112, 116, 12886, 12891, 102, 59, 32896, 55349, 56671, 33536, 172, 59, 105, 110, 12899, 12901, 12936, 32768, 172, 110, 1024, 59, 69, 100, 118, 12911, 12913, 12917, 12923, 32768, 8713, 59, 32896, 8953, 824, 111, 116, 59, 32896, 8949, 824, 818, 12928, 12931, 12934, 59, 32768, 8713, 59, 32768, 8951, 59, 32768, 8950, 105, 512, 59, 118, 12942, 12944, 32768, 8716, 818, 12949, 12952, 12955, 59, 32768, 8716, 59, 32768, 8958, 59, 32768, 8957, 768, 97, 111, 114, 12964, 12992, 12999, 114, 1024, 59, 97, 115, 116, 12974, 12976, 12983, 12988, 32768, 8742, 108, 108, 101, 108, 59, 32768, 8742, 108, 59, 32896, 11005, 8421, 59, 32896, 8706, 824, 108, 105, 110, 116, 59, 32768, 10772, 768, 59, 99, 101, 13006, 13008, 13013, 32768, 8832, 117, 101, 59, 32768, 8928, 512, 59, 99, 13018, 13021, 32896, 10927, 824, 512, 59, 101, 13026, 13028, 32768, 8832, 113, 59, 32896, 10927, 824, 1024, 65, 97, 105, 116, 13042, 13047, 13066, 13077, 114, 114, 59, 32768, 8655, 114, 114, 768, 59, 99, 119, 13056, 13058, 13062, 32768, 8603, 59, 32896, 10547, 824, 59, 32896, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8603, 114, 105, 512, 59, 101, 13084, 13086, 32768, 8939, 59, 32768, 8941, 1792, 99, 104, 105, 109, 112, 113, 117, 13104, 13128, 13151, 13169, 13174, 13179, 13194, 1024, 59, 99, 101, 114, 13113, 13115, 13120, 13124, 32768, 8833, 117, 101, 59, 32768, 8929, 59, 32896, 10928, 824, 59, 32896, 55349, 56515, 111, 114, 116, 1086, 13137, 0, 0, 13142, 105, 100, 59, 32768, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 32768, 8742, 109, 512, 59, 101, 13157, 13159, 32768, 8769, 512, 59, 113, 13164, 13166, 32768, 8772, 59, 32768, 8772, 105, 100, 59, 32768, 8740, 97, 114, 59, 32768, 8742, 115, 117, 512, 98, 112, 13186, 13190, 101, 59, 32768, 8930, 101, 59, 32768, 8931, 768, 98, 99, 112, 13201, 13241, 13254, 1024, 59, 69, 101, 115, 13210, 13212, 13216, 13219, 32768, 8836, 59, 32896, 10949, 824, 59, 32768, 8840, 101, 116, 512, 59, 101, 13226, 13229, 32896, 8834, 8402, 113, 512, 59, 113, 13235, 13237, 32768, 8840, 59, 32896, 10949, 824, 99, 512, 59, 101, 13247, 13249, 32768, 8833, 113, 59, 32896, 10928, 824, 1024, 59, 69, 101, 115, 13263, 13265, 13269, 13272, 32768, 8837, 59, 32896, 10950, 824, 59, 32768, 8841, 101, 116, 512, 59, 101, 13279, 13282, 32896, 8835, 8402, 113, 512, 59, 113, 13288, 13290, 32768, 8841, 59, 32896, 10950, 824, 1024, 103, 105, 108, 114, 13303, 13307, 13315, 13319, 108, 59, 32768, 8825, 108, 100, 101, 33024, 241, 59, 32768, 241, 103, 59, 32768, 8824, 105, 97, 110, 103, 108, 101, 512, 108, 114, 13330, 13344, 101, 102, 116, 512, 59, 101, 13338, 13340, 32768, 8938, 113, 59, 32768, 8940, 105, 103, 104, 116, 512, 59, 101, 13353, 13355, 32768, 8939, 113, 59, 32768, 8941, 512, 59, 109, 13364, 13366, 32768, 957, 768, 59, 101, 115, 13373, 13375, 13380, 32768, 35, 114, 111, 59, 32768, 8470, 112, 59, 32768, 8199, 2304, 68, 72, 97, 100, 103, 105, 108, 114, 115, 13403, 13409, 13415, 13420, 13426, 13439, 13446, 13476, 13493, 97, 115, 104, 59, 32768, 8877, 97, 114, 114, 59, 32768, 10500, 112, 59, 32896, 8781, 8402, 97, 115, 104, 59, 32768, 8876, 512, 101, 116, 13431, 13435, 59, 32896, 8805, 8402, 59, 32896, 62, 8402, 110, 102, 105, 110, 59, 32768, 10718, 768, 65, 101, 116, 13453, 13458, 13462, 114, 114, 59, 32768, 10498, 59, 32896, 8804, 8402, 512, 59, 114, 13467, 13470, 32896, 60, 8402, 105, 101, 59, 32896, 8884, 8402, 512, 65, 116, 13481, 13486, 114, 114, 59, 32768, 10499, 114, 105, 101, 59, 32896, 8885, 8402, 105, 109, 59, 32896, 8764, 8402, 768, 65, 97, 110, 13506, 13511, 13532, 114, 114, 59, 32768, 8662, 114, 512, 104, 114, 13517, 13521, 107, 59, 32768, 10531, 512, 59, 111, 13526, 13528, 32768, 8598, 119, 59, 32768, 8598, 101, 97, 114, 59, 32768, 10535, 9252, 13576, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13579, 0, 13596, 13617, 13653, 13659, 13673, 13695, 13708, 0, 0, 13713, 13750, 0, 13788, 13794, 0, 13815, 13890, 13913, 13937, 13944, 59, 32768, 9416, 512, 99, 115, 13583, 13591, 117, 116, 101, 33024, 243, 59, 32768, 243, 116, 59, 32768, 8859, 512, 105, 121, 13600, 13613, 114, 512, 59, 99, 13606, 13608, 32768, 8858, 33024, 244, 59, 32768, 244, 59, 32768, 1086, 1280, 97, 98, 105, 111, 115, 13627, 13632, 13638, 13642, 13646, 115, 104, 59, 32768, 8861, 108, 97, 99, 59, 32768, 337, 118, 59, 32768, 10808, 116, 59, 32768, 8857, 111, 108, 100, 59, 32768, 10684, 108, 105, 103, 59, 32768, 339, 512, 99, 114, 13663, 13668, 105, 114, 59, 32768, 10687, 59, 32896, 55349, 56620, 1600, 13680, 0, 0, 13684, 0, 13692, 110, 59, 32768, 731, 97, 118, 101, 33024, 242, 59, 32768, 242, 59, 32768, 10689, 512, 98, 109, 13699, 13704, 97, 114, 59, 32768, 10677, 59, 32768, 937, 110, 116, 59, 32768, 8750, 1024, 97, 99, 105, 116, 13721, 13726, 13741, 13746, 114, 114, 59, 32768, 8634, 512, 105, 114, 13731, 13735, 114, 59, 32768, 10686, 111, 115, 115, 59, 32768, 10683, 110, 101, 59, 32768, 8254, 59, 32768, 10688, 768, 97, 101, 105, 13756, 13761, 13766, 99, 114, 59, 32768, 333, 103, 97, 59, 32768, 969, 768, 99, 100, 110, 13773, 13779, 13782, 114, 111, 110, 59, 32768, 959, 59, 32768, 10678, 117, 115, 59, 32768, 8854, 112, 102, 59, 32896, 55349, 56672, 768, 97, 101, 108, 13800, 13804, 13809, 114, 59, 32768, 10679, 114, 112, 59, 32768, 10681, 117, 115, 59, 32768, 8853, 1792, 59, 97, 100, 105, 111, 115, 118, 13829, 13831, 13836, 13869, 13875, 13879, 13886, 32768, 8744, 114, 114, 59, 32768, 8635, 1024, 59, 101, 102, 109, 13845, 13847, 13859, 13864, 32768, 10845, 114, 512, 59, 111, 13853, 13855, 32768, 8500, 102, 59, 32768, 8500, 33024, 170, 59, 32768, 170, 33024, 186, 59, 32768, 186, 103, 111, 102, 59, 32768, 8886, 114, 59, 32768, 10838, 108, 111, 112, 101, 59, 32768, 10839, 59, 32768, 10843, 768, 99, 108, 111, 13896, 13900, 13908, 114, 59, 32768, 8500, 97, 115, 104, 33024, 248, 59, 32768, 248, 108, 59, 32768, 8856, 105, 573, 13917, 13924, 100, 101, 33024, 245, 59, 32768, 245, 101, 115, 512, 59, 97, 13930, 13932, 32768, 8855, 115, 59, 32768, 10806, 109, 108, 33024, 246, 59, 32768, 246, 98, 97, 114, 59, 32768, 9021, 5426, 13972, 0, 14013, 0, 14017, 14053, 0, 14058, 14086, 0, 0, 14107, 14199, 0, 14202, 0, 0, 14229, 14425, 0, 14438, 114, 1024, 59, 97, 115, 116, 13981, 13983, 13997, 14009, 32768, 8741, 33280, 182, 59, 108, 13989, 13991, 32768, 182, 108, 101, 108, 59, 32768, 8741, 1082, 14003, 0, 0, 14007, 109, 59, 32768, 10995, 59, 32768, 11005, 59, 32768, 8706, 121, 59, 32768, 1087, 114, 1280, 99, 105, 109, 112, 116, 14028, 14033, 14038, 14043, 14046, 110, 116, 59, 32768, 37, 111, 100, 59, 32768, 46, 105, 108, 59, 32768, 8240, 59, 32768, 8869, 101, 110, 107, 59, 32768, 8241, 114, 59, 32896, 55349, 56621, 768, 105, 109, 111, 14064, 14074, 14080, 512, 59, 118, 14069, 14071, 32768, 966, 59, 32768, 981, 109, 97, 116, 59, 32768, 8499, 110, 101, 59, 32768, 9742, 768, 59, 116, 118, 14092, 14094, 14103, 32768, 960, 99, 104, 102, 111, 114, 107, 59, 32768, 8916, 59, 32768, 982, 512, 97, 117, 14111, 14132, 110, 512, 99, 107, 14117, 14128, 107, 512, 59, 104, 14123, 14125, 32768, 8463, 59, 32768, 8462, 118, 59, 32768, 8463, 115, 2304, 59, 97, 98, 99, 100, 101, 109, 115, 116, 14152, 14154, 14160, 14163, 14168, 14179, 14182, 14188, 14193, 32768, 43, 99, 105, 114, 59, 32768, 10787, 59, 32768, 8862, 105, 114, 59, 32768, 10786, 512, 111, 117, 14173, 14176, 59, 32768, 8724, 59, 32768, 10789, 59, 32768, 10866, 110, 33024, 177, 59, 32768, 177, 105, 109, 59, 32768, 10790, 119, 111, 59, 32768, 10791, 59, 32768, 177, 768, 105, 112, 117, 14208, 14216, 14221, 110, 116, 105, 110, 116, 59, 32768, 10773, 102, 59, 32896, 55349, 56673, 110, 100, 33024, 163, 59, 32768, 163, 2560, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 14249, 14251, 14254, 14258, 14263, 14336, 14348, 14367, 14413, 14418, 32768, 8826, 59, 32768, 10931, 112, 59, 32768, 10935, 117, 101, 59, 32768, 8828, 512, 59, 99, 14268, 14270, 32768, 10927, 1536, 59, 97, 99, 101, 110, 115, 14283, 14285, 14293, 14302, 14306, 14331, 32768, 8826, 112, 112, 114, 111, 120, 59, 32768, 10935, 117, 114, 108, 121, 101, 113, 59, 32768, 8828, 113, 59, 32768, 10927, 768, 97, 101, 115, 14313, 14321, 14326, 112, 112, 114, 111, 120, 59, 32768, 10937, 113, 113, 59, 32768, 10933, 105, 109, 59, 32768, 8936, 105, 109, 59, 32768, 8830, 109, 101, 512, 59, 115, 14343, 14345, 32768, 8242, 59, 32768, 8473, 768, 69, 97, 115, 14355, 14358, 14362, 59, 32768, 10933, 112, 59, 32768, 10937, 105, 109, 59, 32768, 8936, 768, 100, 102, 112, 14374, 14377, 14402, 59, 32768, 8719, 768, 97, 108, 115, 14384, 14390, 14396, 108, 97, 114, 59, 32768, 9006, 105, 110, 101, 59, 32768, 8978, 117, 114, 102, 59, 32768, 8979, 512, 59, 116, 14407, 14409, 32768, 8733, 111, 59, 32768, 8733, 105, 109, 59, 32768, 8830, 114, 101, 108, 59, 32768, 8880, 512, 99, 105, 14429, 14434, 114, 59, 32896, 55349, 56517, 59, 32768, 968, 110, 99, 115, 112, 59, 32768, 8200, 1536, 102, 105, 111, 112, 115, 117, 14457, 14462, 14467, 14473, 14480, 14486, 114, 59, 32896, 55349, 56622, 110, 116, 59, 32768, 10764, 112, 102, 59, 32896, 55349, 56674, 114, 105, 109, 101, 59, 32768, 8279, 99, 114, 59, 32896, 55349, 56518, 768, 97, 101, 111, 14493, 14513, 14526, 116, 512, 101, 105, 14499, 14508, 114, 110, 105, 111, 110, 115, 59, 32768, 8461, 110, 116, 59, 32768, 10774, 115, 116, 512, 59, 101, 14520, 14522, 32768, 63, 113, 59, 32768, 8799, 116, 33024, 34, 59, 32768, 34, 5376, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 14575, 14597, 14603, 14608, 14775, 14829, 14865, 14901, 14943, 14966, 15e3, 15139, 15159, 15176, 15182, 15236, 15261, 15267, 15309, 15352, 15360, 768, 97, 114, 116, 14582, 14587, 14591, 114, 114, 59, 32768, 8667, 114, 59, 32768, 8658, 97, 105, 108, 59, 32768, 10524, 97, 114, 114, 59, 32768, 10511, 97, 114, 59, 32768, 10596, 1792, 99, 100, 101, 110, 113, 114, 116, 14623, 14637, 14642, 14650, 14672, 14679, 14751, 512, 101, 117, 14628, 14632, 59, 32896, 8765, 817, 116, 101, 59, 32768, 341, 105, 99, 59, 32768, 8730, 109, 112, 116, 121, 118, 59, 32768, 10675, 103, 1024, 59, 100, 101, 108, 14660, 14662, 14665, 14668, 32768, 10217, 59, 32768, 10642, 59, 32768, 10661, 101, 59, 32768, 10217, 117, 111, 33024, 187, 59, 32768, 187, 114, 2816, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 14703, 14705, 14709, 14720, 14723, 14727, 14731, 14735, 14739, 14744, 14748, 32768, 8594, 112, 59, 32768, 10613, 512, 59, 102, 14714, 14716, 32768, 8677, 115, 59, 32768, 10528, 59, 32768, 10547, 115, 59, 32768, 10526, 107, 59, 32768, 8618, 112, 59, 32768, 8620, 108, 59, 32768, 10565, 105, 109, 59, 32768, 10612, 108, 59, 32768, 8611, 59, 32768, 8605, 512, 97, 105, 14756, 14761, 105, 108, 59, 32768, 10522, 111, 512, 59, 110, 14767, 14769, 32768, 8758, 97, 108, 115, 59, 32768, 8474, 768, 97, 98, 114, 14782, 14787, 14792, 114, 114, 59, 32768, 10509, 114, 107, 59, 32768, 10099, 512, 97, 107, 14797, 14809, 99, 512, 101, 107, 14803, 14806, 59, 32768, 125, 59, 32768, 93, 512, 101, 115, 14814, 14817, 59, 32768, 10636, 108, 512, 100, 117, 14823, 14826, 59, 32768, 10638, 59, 32768, 10640, 1024, 97, 101, 117, 121, 14838, 14844, 14858, 14862, 114, 111, 110, 59, 32768, 345, 512, 100, 105, 14849, 14854, 105, 108, 59, 32768, 343, 108, 59, 32768, 8969, 98, 59, 32768, 125, 59, 32768, 1088, 1024, 99, 108, 113, 115, 14874, 14878, 14885, 14897, 97, 59, 32768, 10551, 100, 104, 97, 114, 59, 32768, 10601, 117, 111, 512, 59, 114, 14892, 14894, 32768, 8221, 59, 32768, 8221, 104, 59, 32768, 8627, 768, 97, 99, 103, 14908, 14934, 14938, 108, 1024, 59, 105, 112, 115, 14918, 14920, 14925, 14931, 32768, 8476, 110, 101, 59, 32768, 8475, 97, 114, 116, 59, 32768, 8476, 59, 32768, 8477, 116, 59, 32768, 9645, 33024, 174, 59, 32768, 174, 768, 105, 108, 114, 14950, 14956, 14962, 115, 104, 116, 59, 32768, 10621, 111, 111, 114, 59, 32768, 8971, 59, 32896, 55349, 56623, 512, 97, 111, 14971, 14990, 114, 512, 100, 117, 14977, 14980, 59, 32768, 8641, 512, 59, 108, 14985, 14987, 32768, 8640, 59, 32768, 10604, 512, 59, 118, 14995, 14997, 32768, 961, 59, 32768, 1009, 768, 103, 110, 115, 15007, 15123, 15127, 104, 116, 1536, 97, 104, 108, 114, 115, 116, 15022, 15039, 15060, 15086, 15099, 15111, 114, 114, 111, 119, 512, 59, 116, 15031, 15033, 32768, 8594, 97, 105, 108, 59, 32768, 8611, 97, 114, 112, 111, 111, 110, 512, 100, 117, 15050, 15056, 111, 119, 110, 59, 32768, 8641, 112, 59, 32768, 8640, 101, 102, 116, 512, 97, 104, 15068, 15076, 114, 114, 111, 119, 115, 59, 32768, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 32768, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 32768, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 32768, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 32768, 8908, 103, 59, 32768, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 32768, 8787, 768, 97, 104, 109, 15146, 15151, 15156, 114, 114, 59, 32768, 8644, 97, 114, 59, 32768, 8652, 59, 32768, 8207, 111, 117, 115, 116, 512, 59, 97, 15168, 15170, 32768, 9137, 99, 104, 101, 59, 32768, 9137, 109, 105, 100, 59, 32768, 10990, 1024, 97, 98, 112, 116, 15191, 15204, 15209, 15229, 512, 110, 114, 15196, 15200, 103, 59, 32768, 10221, 114, 59, 32768, 8702, 114, 107, 59, 32768, 10215, 768, 97, 102, 108, 15216, 15220, 15224, 114, 59, 32768, 10630, 59, 32896, 55349, 56675, 117, 115, 59, 32768, 10798, 105, 109, 101, 115, 59, 32768, 10805, 512, 97, 112, 15241, 15253, 114, 512, 59, 103, 15247, 15249, 32768, 41, 116, 59, 32768, 10644, 111, 108, 105, 110, 116, 59, 32768, 10770, 97, 114, 114, 59, 32768, 8649, 1024, 97, 99, 104, 113, 15276, 15282, 15287, 15290, 113, 117, 111, 59, 32768, 8250, 114, 59, 32896, 55349, 56519, 59, 32768, 8625, 512, 98, 117, 15295, 15298, 59, 32768, 93, 111, 512, 59, 114, 15304, 15306, 32768, 8217, 59, 32768, 8217, 768, 104, 105, 114, 15316, 15322, 15328, 114, 101, 101, 59, 32768, 8908, 109, 101, 115, 59, 32768, 8906, 105, 1024, 59, 101, 102, 108, 15338, 15340, 15343, 15346, 32768, 9657, 59, 32768, 8885, 59, 32768, 9656, 116, 114, 105, 59, 32768, 10702, 108, 117, 104, 97, 114, 59, 32768, 10600, 59, 32768, 8478, 6706, 15391, 15398, 15404, 15499, 15516, 15592, 0, 15606, 15660, 0, 0, 15752, 15758, 0, 15827, 15863, 15886, 16e3, 16006, 16038, 16086, 0, 16467, 0, 0, 16506, 99, 117, 116, 101, 59, 32768, 347, 113, 117, 111, 59, 32768, 8218, 2560, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 15424, 15426, 15429, 15441, 15446, 15458, 15463, 15482, 15490, 15495, 32768, 8827, 59, 32768, 10932, 833, 15434, 0, 15437, 59, 32768, 10936, 111, 110, 59, 32768, 353, 117, 101, 59, 32768, 8829, 512, 59, 100, 15451, 15453, 32768, 10928, 105, 108, 59, 32768, 351, 114, 99, 59, 32768, 349, 768, 69, 97, 115, 15470, 15473, 15477, 59, 32768, 10934, 112, 59, 32768, 10938, 105, 109, 59, 32768, 8937, 111, 108, 105, 110, 116, 59, 32768, 10771, 105, 109, 59, 32768, 8831, 59, 32768, 1089, 111, 116, 768, 59, 98, 101, 15507, 15509, 15512, 32768, 8901, 59, 32768, 8865, 59, 32768, 10854, 1792, 65, 97, 99, 109, 115, 116, 120, 15530, 15535, 15556, 15562, 15566, 15572, 15587, 114, 114, 59, 32768, 8664, 114, 512, 104, 114, 15541, 15545, 107, 59, 32768, 10533, 512, 59, 111, 15550, 15552, 32768, 8600, 119, 59, 32768, 8600, 116, 33024, 167, 59, 32768, 167, 105, 59, 32768, 59, 119, 97, 114, 59, 32768, 10537, 109, 512, 105, 110, 15578, 15584, 110, 117, 115, 59, 32768, 8726, 59, 32768, 8726, 116, 59, 32768, 10038, 114, 512, 59, 111, 15597, 15600, 32896, 55349, 56624, 119, 110, 59, 32768, 8994, 1024, 97, 99, 111, 121, 15614, 15619, 15632, 15654, 114, 112, 59, 32768, 9839, 512, 104, 121, 15624, 15629, 99, 121, 59, 32768, 1097, 59, 32768, 1096, 114, 116, 1086, 15640, 0, 0, 15645, 105, 100, 59, 32768, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 32768, 8741, 33024, 173, 59, 32768, 173, 512, 103, 109, 15664, 15681, 109, 97, 768, 59, 102, 118, 15673, 15675, 15678, 32768, 963, 59, 32768, 962, 59, 32768, 962, 2048, 59, 100, 101, 103, 108, 110, 112, 114, 15698, 15700, 15705, 15715, 15725, 15735, 15739, 15745, 32768, 8764, 111, 116, 59, 32768, 10858, 512, 59, 113, 15710, 15712, 32768, 8771, 59, 32768, 8771, 512, 59, 69, 15720, 15722, 32768, 10910, 59, 32768, 10912, 512, 59, 69, 15730, 15732, 32768, 10909, 59, 32768, 10911, 101, 59, 32768, 8774, 108, 117, 115, 59, 32768, 10788, 97, 114, 114, 59, 32768, 10610, 97, 114, 114, 59, 32768, 8592, 1024, 97, 101, 105, 116, 15766, 15788, 15796, 15808, 512, 108, 115, 15771, 15783, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 32768, 8726, 104, 112, 59, 32768, 10803, 112, 97, 114, 115, 108, 59, 32768, 10724, 512, 100, 108, 15801, 15804, 59, 32768, 8739, 101, 59, 32768, 8995, 512, 59, 101, 15813, 15815, 32768, 10922, 512, 59, 115, 15820, 15822, 32768, 10924, 59, 32896, 10924, 65024, 768, 102, 108, 112, 15833, 15839, 15857, 116, 99, 121, 59, 32768, 1100, 512, 59, 98, 15844, 15846, 32768, 47, 512, 59, 97, 15851, 15853, 32768, 10692, 114, 59, 32768, 9023, 102, 59, 32896, 55349, 56676, 97, 512, 100, 114, 15868, 15882, 101, 115, 512, 59, 117, 15875, 15877, 32768, 9824, 105, 116, 59, 32768, 9824, 59, 32768, 8741, 768, 99, 115, 117, 15892, 15921, 15977, 512, 97, 117, 15897, 15909, 112, 512, 59, 115, 15903, 15905, 32768, 8851, 59, 32896, 8851, 65024, 112, 512, 59, 115, 15915, 15917, 32768, 8852, 59, 32896, 8852, 65024, 117, 512, 98, 112, 15927, 15952, 768, 59, 101, 115, 15934, 15936, 15939, 32768, 8847, 59, 32768, 8849, 101, 116, 512, 59, 101, 15946, 15948, 32768, 8847, 113, 59, 32768, 8849, 768, 59, 101, 115, 15959, 15961, 15964, 32768, 8848, 59, 32768, 8850, 101, 116, 512, 59, 101, 15971, 15973, 32768, 8848, 113, 59, 32768, 8850, 768, 59, 97, 102, 15984, 15986, 15996, 32768, 9633, 114, 566, 15991, 15994, 59, 32768, 9633, 59, 32768, 9642, 59, 32768, 9642, 97, 114, 114, 59, 32768, 8594, 1024, 99, 101, 109, 116, 16014, 16019, 16025, 16031, 114, 59, 32896, 55349, 56520, 116, 109, 110, 59, 32768, 8726, 105, 108, 101, 59, 32768, 8995, 97, 114, 102, 59, 32768, 8902, 512, 97, 114, 16042, 16053, 114, 512, 59, 102, 16048, 16050, 32768, 9734, 59, 32768, 9733, 512, 97, 110, 16058, 16081, 105, 103, 104, 116, 512, 101, 112, 16067, 16076, 112, 115, 105, 108, 111, 110, 59, 32768, 1013, 104, 105, 59, 32768, 981, 115, 59, 32768, 175, 1280, 98, 99, 109, 110, 112, 16096, 16221, 16288, 16291, 16295, 2304, 59, 69, 100, 101, 109, 110, 112, 114, 115, 16115, 16117, 16120, 16125, 16137, 16143, 16154, 16160, 16166, 32768, 8834, 59, 32768, 10949, 111, 116, 59, 32768, 10941, 512, 59, 100, 16130, 16132, 32768, 8838, 111, 116, 59, 32768, 10947, 117, 108, 116, 59, 32768, 10945, 512, 69, 101, 16148, 16151, 59, 32768, 10955, 59, 32768, 8842, 108, 117, 115, 59, 32768, 10943, 97, 114, 114, 59, 32768, 10617, 768, 101, 105, 117, 16173, 16206, 16210, 116, 768, 59, 101, 110, 16181, 16183, 16194, 32768, 8834, 113, 512, 59, 113, 16189, 16191, 32768, 8838, 59, 32768, 10949, 101, 113, 512, 59, 113, 16201, 16203, 32768, 8842, 59, 32768, 10955, 109, 59, 32768, 10951, 512, 98, 112, 16215, 16218, 59, 32768, 10965, 59, 32768, 10963, 99, 1536, 59, 97, 99, 101, 110, 115, 16235, 16237, 16245, 16254, 16258, 16283, 32768, 8827, 112, 112, 114, 111, 120, 59, 32768, 10936, 117, 114, 108, 121, 101, 113, 59, 32768, 8829, 113, 59, 32768, 10928, 768, 97, 101, 115, 16265, 16273, 16278, 112, 112, 114, 111, 120, 59, 32768, 10938, 113, 113, 59, 32768, 10934, 105, 109, 59, 32768, 8937, 105, 109, 59, 32768, 8831, 59, 32768, 8721, 103, 59, 32768, 9834, 3328, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 16322, 16327, 16332, 16337, 16339, 16342, 16356, 16368, 16382, 16388, 16394, 16405, 16411, 33024, 185, 59, 32768, 185, 33024, 178, 59, 32768, 178, 33024, 179, 59, 32768, 179, 32768, 8835, 59, 32768, 10950, 512, 111, 115, 16347, 16351, 116, 59, 32768, 10942, 117, 98, 59, 32768, 10968, 512, 59, 100, 16361, 16363, 32768, 8839, 111, 116, 59, 32768, 10948, 115, 512, 111, 117, 16374, 16378, 108, 59, 32768, 10185, 98, 59, 32768, 10967, 97, 114, 114, 59, 32768, 10619, 117, 108, 116, 59, 32768, 10946, 512, 69, 101, 16399, 16402, 59, 32768, 10956, 59, 32768, 8843, 108, 117, 115, 59, 32768, 10944, 768, 101, 105, 117, 16418, 16451, 16455, 116, 768, 59, 101, 110, 16426, 16428, 16439, 32768, 8835, 113, 512, 59, 113, 16434, 16436, 32768, 8839, 59, 32768, 10950, 101, 113, 512, 59, 113, 16446, 16448, 32768, 8843, 59, 32768, 10956, 109, 59, 32768, 10952, 512, 98, 112, 16460, 16463, 59, 32768, 10964, 59, 32768, 10966, 768, 65, 97, 110, 16473, 16478, 16499, 114, 114, 59, 32768, 8665, 114, 512, 104, 114, 16484, 16488, 107, 59, 32768, 10534, 512, 59, 111, 16493, 16495, 32768, 8601, 119, 59, 32768, 8601, 119, 97, 114, 59, 32768, 10538, 108, 105, 103, 33024, 223, 59, 32768, 223, 5938, 16538, 16552, 16557, 16579, 16584, 16591, 0, 16596, 16692, 0, 0, 0, 0, 0, 16731, 16780, 0, 16787, 16908, 0, 0, 0, 16938, 1091, 16543, 0, 0, 16549, 103, 101, 116, 59, 32768, 8982, 59, 32768, 964, 114, 107, 59, 32768, 9140, 768, 97, 101, 121, 16563, 16569, 16575, 114, 111, 110, 59, 32768, 357, 100, 105, 108, 59, 32768, 355, 59, 32768, 1090, 111, 116, 59, 32768, 8411, 108, 114, 101, 99, 59, 32768, 8981, 114, 59, 32896, 55349, 56625, 1024, 101, 105, 107, 111, 16604, 16641, 16670, 16684, 835, 16609, 0, 16624, 101, 512, 52, 102, 16614, 16617, 59, 32768, 8756, 111, 114, 101, 59, 32768, 8756, 97, 768, 59, 115, 118, 16631, 16633, 16638, 32768, 952, 121, 109, 59, 32768, 977, 59, 32768, 977, 512, 99, 110, 16646, 16665, 107, 512, 97, 115, 16652, 16660, 112, 112, 114, 111, 120, 59, 32768, 8776, 105, 109, 59, 32768, 8764, 115, 112, 59, 32768, 8201, 512, 97, 115, 16675, 16679, 112, 59, 32768, 8776, 105, 109, 59, 32768, 8764, 114, 110, 33024, 254, 59, 32768, 254, 829, 16696, 16701, 16727, 100, 101, 59, 32768, 732, 101, 115, 33536, 215, 59, 98, 100, 16710, 16712, 16723, 32768, 215, 512, 59, 97, 16717, 16719, 32768, 8864, 114, 59, 32768, 10801, 59, 32768, 10800, 116, 59, 32768, 8749, 768, 101, 112, 115, 16737, 16741, 16775, 97, 59, 32768, 10536, 1024, 59, 98, 99, 102, 16750, 16752, 16757, 16762, 32768, 8868, 111, 116, 59, 32768, 9014, 105, 114, 59, 32768, 10993, 512, 59, 111, 16767, 16770, 32896, 55349, 56677, 114, 107, 59, 32768, 10970, 97, 59, 32768, 10537, 114, 105, 109, 101, 59, 32768, 8244, 768, 97, 105, 112, 16793, 16798, 16899, 100, 101, 59, 32768, 8482, 1792, 97, 100, 101, 109, 112, 115, 116, 16813, 16868, 16873, 16876, 16883, 16889, 16893, 110, 103, 108, 101, 1280, 59, 100, 108, 113, 114, 16828, 16830, 16836, 16850, 16853, 32768, 9653, 111, 119, 110, 59, 32768, 9663, 101, 102, 116, 512, 59, 101, 16844, 16846, 32768, 9667, 113, 59, 32768, 8884, 59, 32768, 8796, 105, 103, 104, 116, 512, 59, 101, 16862, 16864, 32768, 9657, 113, 59, 32768, 8885, 111, 116, 59, 32768, 9708, 59, 32768, 8796, 105, 110, 117, 115, 59, 32768, 10810, 108, 117, 115, 59, 32768, 10809, 98, 59, 32768, 10701, 105, 109, 101, 59, 32768, 10811, 101, 122, 105, 117, 109, 59, 32768, 9186, 768, 99, 104, 116, 16914, 16926, 16931, 512, 114, 121, 16919, 16923, 59, 32896, 55349, 56521, 59, 32768, 1094, 99, 121, 59, 32768, 1115, 114, 111, 107, 59, 32768, 359, 512, 105, 111, 16942, 16947, 120, 116, 59, 32768, 8812, 104, 101, 97, 100, 512, 108, 114, 16956, 16967, 101, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8608, 4608, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 17016, 17021, 17026, 17043, 17057, 17072, 17095, 17110, 17119, 17139, 17172, 17187, 17202, 17290, 17330, 17336, 17365, 17381, 114, 114, 59, 32768, 8657, 97, 114, 59, 32768, 10595, 512, 99, 114, 17031, 17039, 117, 116, 101, 33024, 250, 59, 32768, 250, 114, 59, 32768, 8593, 114, 820, 17049, 0, 17053, 121, 59, 32768, 1118, 118, 101, 59, 32768, 365, 512, 105, 121, 17062, 17069, 114, 99, 33024, 251, 59, 32768, 251, 59, 32768, 1091, 768, 97, 98, 104, 17079, 17084, 17090, 114, 114, 59, 32768, 8645, 108, 97, 99, 59, 32768, 369, 97, 114, 59, 32768, 10606, 512, 105, 114, 17100, 17106, 115, 104, 116, 59, 32768, 10622, 59, 32896, 55349, 56626, 114, 97, 118, 101, 33024, 249, 59, 32768, 249, 562, 17123, 17135, 114, 512, 108, 114, 17128, 17131, 59, 32768, 8639, 59, 32768, 8638, 108, 107, 59, 32768, 9600, 512, 99, 116, 17144, 17167, 1088, 17150, 0, 0, 17163, 114, 110, 512, 59, 101, 17156, 17158, 32768, 8988, 114, 59, 32768, 8988, 111, 112, 59, 32768, 8975, 114, 105, 59, 32768, 9720, 512, 97, 108, 17177, 17182, 99, 114, 59, 32768, 363, 33024, 168, 59, 32768, 168, 512, 103, 112, 17192, 17197, 111, 110, 59, 32768, 371, 102, 59, 32896, 55349, 56678, 1536, 97, 100, 104, 108, 115, 117, 17215, 17222, 17233, 17257, 17262, 17280, 114, 114, 111, 119, 59, 32768, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 32768, 8597, 97, 114, 112, 111, 111, 110, 512, 108, 114, 17244, 17250, 101, 102, 116, 59, 32768, 8639, 105, 103, 104, 116, 59, 32768, 8638, 117, 115, 59, 32768, 8846, 105, 768, 59, 104, 108, 17270, 17272, 17275, 32768, 965, 59, 32768, 978, 111, 110, 59, 32768, 965, 112, 97, 114, 114, 111, 119, 115, 59, 32768, 8648, 768, 99, 105, 116, 17297, 17320, 17325, 1088, 17303, 0, 0, 17316, 114, 110, 512, 59, 101, 17309, 17311, 32768, 8989, 114, 59, 32768, 8989, 111, 112, 59, 32768, 8974, 110, 103, 59, 32768, 367, 114, 105, 59, 32768, 9721, 99, 114, 59, 32896, 55349, 56522, 768, 100, 105, 114, 17343, 17348, 17354, 111, 116, 59, 32768, 8944, 108, 100, 101, 59, 32768, 361, 105, 512, 59, 102, 17360, 17362, 32768, 9653, 59, 32768, 9652, 512, 97, 109, 17370, 17375, 114, 114, 59, 32768, 8648, 108, 33024, 252, 59, 32768, 252, 97, 110, 103, 108, 101, 59, 32768, 10663, 3840, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 17420, 17425, 17437, 17443, 17613, 17617, 17623, 17667, 17672, 17678, 17693, 17699, 17705, 17711, 17754, 114, 114, 59, 32768, 8661, 97, 114, 512, 59, 118, 17432, 17434, 32768, 10984, 59, 32768, 10985, 97, 115, 104, 59, 32768, 8872, 512, 110, 114, 17448, 17454, 103, 114, 116, 59, 32768, 10652, 1792, 101, 107, 110, 112, 114, 115, 116, 17469, 17478, 17485, 17494, 17515, 17526, 17578, 112, 115, 105, 108, 111, 110, 59, 32768, 1013, 97, 112, 112, 97, 59, 32768, 1008, 111, 116, 104, 105, 110, 103, 59, 32768, 8709, 768, 104, 105, 114, 17501, 17505, 17508, 105, 59, 32768, 981, 59, 32768, 982, 111, 112, 116, 111, 59, 32768, 8733, 512, 59, 104, 17520, 17522, 32768, 8597, 111, 59, 32768, 1009, 512, 105, 117, 17531, 17537, 103, 109, 97, 59, 32768, 962, 512, 98, 112, 17542, 17560, 115, 101, 116, 110, 101, 113, 512, 59, 113, 17553, 17556, 32896, 8842, 65024, 59, 32896, 10955, 65024, 115, 101, 116, 110, 101, 113, 512, 59, 113, 17571, 17574, 32896, 8843, 65024, 59, 32896, 10956, 65024, 512, 104, 114, 17583, 17589, 101, 116, 97, 59, 32768, 977, 105, 97, 110, 103, 108, 101, 512, 108, 114, 17600, 17606, 101, 102, 116, 59, 32768, 8882, 105, 103, 104, 116, 59, 32768, 8883, 121, 59, 32768, 1074, 97, 115, 104, 59, 32768, 8866, 768, 101, 108, 114, 17630, 17648, 17654, 768, 59, 98, 101, 17637, 17639, 17644, 32768, 8744, 97, 114, 59, 32768, 8891, 113, 59, 32768, 8794, 108, 105, 112, 59, 32768, 8942, 512, 98, 116, 17659, 17664, 97, 114, 59, 32768, 124, 59, 32768, 124, 114, 59, 32896, 55349, 56627, 116, 114, 105, 59, 32768, 8882, 115, 117, 512, 98, 112, 17685, 17689, 59, 32896, 8834, 8402, 59, 32896, 8835, 8402, 112, 102, 59, 32896, 55349, 56679, 114, 111, 112, 59, 32768, 8733, 116, 114, 105, 59, 32768, 8883, 512, 99, 117, 17716, 17721, 114, 59, 32896, 55349, 56523, 512, 98, 112, 17726, 17740, 110, 512, 69, 101, 17732, 17736, 59, 32896, 10955, 65024, 59, 32896, 8842, 65024, 110, 512, 69, 101, 17746, 17750, 59, 32896, 10956, 65024, 59, 32896, 8843, 65024, 105, 103, 122, 97, 103, 59, 32768, 10650, 1792, 99, 101, 102, 111, 112, 114, 115, 17777, 17783, 17815, 17820, 17826, 17829, 17842, 105, 114, 99, 59, 32768, 373, 512, 100, 105, 17788, 17809, 512, 98, 103, 17793, 17798, 97, 114, 59, 32768, 10847, 101, 512, 59, 113, 17804, 17806, 32768, 8743, 59, 32768, 8793, 101, 114, 112, 59, 32768, 8472, 114, 59, 32896, 55349, 56628, 112, 102, 59, 32896, 55349, 56680, 59, 32768, 8472, 512, 59, 101, 17834, 17836, 32768, 8768, 97, 116, 104, 59, 32768, 8768, 99, 114, 59, 32896, 55349, 56524, 5428, 17871, 17891, 0, 17897, 0, 17902, 17917, 0, 0, 17920, 17935, 17940, 17945, 0, 0, 17977, 17992, 0, 18008, 18024, 18029, 768, 97, 105, 117, 17877, 17881, 17886, 112, 59, 32768, 8898, 114, 99, 59, 32768, 9711, 112, 59, 32768, 8899, 116, 114, 105, 59, 32768, 9661, 114, 59, 32896, 55349, 56629, 512, 65, 97, 17906, 17911, 114, 114, 59, 32768, 10234, 114, 114, 59, 32768, 10231, 59, 32768, 958, 512, 65, 97, 17924, 17929, 114, 114, 59, 32768, 10232, 114, 114, 59, 32768, 10229, 97, 112, 59, 32768, 10236, 105, 115, 59, 32768, 8955, 768, 100, 112, 116, 17951, 17956, 17970, 111, 116, 59, 32768, 10752, 512, 102, 108, 17961, 17965, 59, 32896, 55349, 56681, 117, 115, 59, 32768, 10753, 105, 109, 101, 59, 32768, 10754, 512, 65, 97, 17981, 17986, 114, 114, 59, 32768, 10233, 114, 114, 59, 32768, 10230, 512, 99, 113, 17996, 18001, 114, 59, 32896, 55349, 56525, 99, 117, 112, 59, 32768, 10758, 512, 112, 116, 18012, 18018, 108, 117, 115, 59, 32768, 10756, 114, 105, 59, 32768, 9651, 101, 101, 59, 32768, 8897, 101, 100, 103, 101, 59, 32768, 8896, 2048, 97, 99, 101, 102, 105, 111, 115, 117, 18052, 18068, 18081, 18087, 18092, 18097, 18103, 18109, 99, 512, 117, 121, 18058, 18065, 116, 101, 33024, 253, 59, 32768, 253, 59, 32768, 1103, 512, 105, 121, 18073, 18078, 114, 99, 59, 32768, 375, 59, 32768, 1099, 110, 33024, 165, 59, 32768, 165, 114, 59, 32896, 55349, 56630, 99, 121, 59, 32768, 1111, 112, 102, 59, 32896, 55349, 56682, 99, 114, 59, 32896, 55349, 56526, 512, 99, 109, 18114, 18118, 121, 59, 32768, 1102, 108, 33024, 255, 59, 32768, 255, 2560, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 18145, 18152, 18166, 18171, 18186, 18191, 18196, 18204, 18210, 18216, 99, 117, 116, 101, 59, 32768, 378, 512, 97, 121, 18157, 18163, 114, 111, 110, 59, 32768, 382, 59, 32768, 1079, 111, 116, 59, 32768, 380, 512, 101, 116, 18176, 18182, 116, 114, 102, 59, 32768, 8488, 97, 59, 32768, 950, 114, 59, 32896, 55349, 56631, 99, 121, 59, 32768, 1078, 103, 114, 97, 114, 114, 59, 32768, 8669, 112, 102, 59, 32896, 55349, 56683, 99, 114, 59, 32896, 55349, 56527, 512, 106, 110, 18221, 18224, 59, 32768, 8205, 106, 59, 32768, 8204]);
    }
  });

  // node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/generated/decode-data-xml.js
  var require_decode_data_xml = __commonJS({
    "node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/generated/decode-data-xml.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = new Uint16Array([1024, 97, 103, 108, 113, 9, 23, 27, 31, 1086, 15, 0, 0, 19, 112, 59, 32768, 38, 111, 115, 59, 32768, 39, 116, 59, 32768, 62, 116, 59, 32768, 60, 117, 111, 116, 59, 32768, 34]);
    }
  });

  // node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/decode.js
  var require_decode = __commonJS({
    "node_modules/.pnpm/entities@3.0.1/node_modules/entities/lib/decode.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.JUMP_OFFSET_BASE = exports.BinTrieFlags = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
      var decode_data_html_1 = __importDefault2(require_decode_data_html());
      exports.htmlDecodeTree = decode_data_html_1.default;
      var decode_data_xml_1 = __importDefault2(require_decode_data_xml());
      exports.xmlDecodeTree = decode_data_xml_1.default;
      var decode_codepoint_1 = __importDefault2(require_decode_codepoint());
      var BinTrieFlags;
      (function(BinTrieFlags2) {
        BinTrieFlags2[BinTrieFlags2["HAS_VALUE"] = 32768] = "HAS_VALUE";
        BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 32512] = "BRANCH_LENGTH";
        BinTrieFlags2[BinTrieFlags2["MULTI_BYTE"] = 128] = "MULTI_BYTE";
        BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
      })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
      exports.JUMP_OFFSET_BASE = 48 - 1;
      function getDecoder(decodeTree) {
        return function decodeHTMLBinary(str, strict) {
          var ret = "";
          var lastIdx = 0;
          var strIdx = 0;
          while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
            ret += str.slice(lastIdx, strIdx);
            lastIdx = strIdx;
            strIdx += 1;
            if (str.charCodeAt(strIdx) === 35) {
              var start = strIdx + 1;
              var base = 10;
              var cp = str.charCodeAt(start);
              if ((cp | 32) === 120) {
                base = 16;
                strIdx += 1;
                start += 1;
              }
              while ((cp = str.charCodeAt(++strIdx)) >= 48 && cp <= 57 || base === 16 && (cp | 32) >= 97 && (cp | 32) <= 102)
                ;
              if (start !== strIdx) {
                var entity = str.substring(start, strIdx);
                var parsed = parseInt(entity, base);
                if (str.charCodeAt(strIdx) === 59) {
                  strIdx += 1;
                } else if (strict) {
                  continue;
                }
                ret += decode_codepoint_1.default(parsed);
                lastIdx = strIdx;
              }
              continue;
            }
            var result = null;
            var excess = 1;
            var treeIdx = 0;
            var current = decodeTree[treeIdx];
            for (; strIdx < str.length; strIdx++, excess++) {
              treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
              if (treeIdx < 0)
                break;
              current = decodeTree[treeIdx];
              if (current & BinTrieFlags.HAS_VALUE) {
                if (strict && str.charCodeAt(strIdx) !== 59) {
                  treeIdx += 1;
                } else {
                  result = current & BinTrieFlags.MULTI_BYTE ? String.fromCharCode(decodeTree[++treeIdx], decodeTree[++treeIdx]) : String.fromCharCode(decodeTree[++treeIdx]);
                  excess = 0;
                }
              }
            }
            if (result != null) {
              ret += result;
              lastIdx = strIdx - excess + 1;
            }
          }
          return ret + str.slice(lastIdx);
        };
      }
      function determineBranch(decodeTree, current, nodeIdx, char) {
        if (current <= 128) {
          return char === current ? nodeIdx : -1;
        }
        var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 8;
        if (branchCount === 0) {
          return -1;
        }
        if (branchCount === 1) {
          return char === decodeTree[nodeIdx] ? nodeIdx + 1 : -1;
        }
        var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
        if (jumpOffset) {
          var value = char - exports.JUMP_OFFSET_BASE - jumpOffset;
          return value < 0 || value > branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
        }
        var lo = nodeIdx;
        var hi = lo + branchCount - 1;
        while (lo <= hi) {
          var mid = lo + hi >>> 1;
          var midVal = decodeTree[mid];
          if (midVal < char) {
            lo = mid + 1;
          } else if (midVal > char) {
            hi = mid - 1;
          } else {
            return decodeTree[mid + branchCount];
          }
        }
        return -1;
      }
      exports.determineBranch = determineBranch;
      var htmlDecoder = getDecoder(decode_data_html_1.default);
      var xmlDecoder = getDecoder(decode_data_xml_1.default);
      function decodeHTML(str) {
        return htmlDecoder(str, false);
      }
      exports.decodeHTML = decodeHTML;
      function decodeHTMLStrict(str) {
        return htmlDecoder(str, true);
      }
      exports.decodeHTMLStrict = decodeHTMLStrict;
      function decodeXML(str) {
        return xmlDecoder(str, true);
      }
      exports.decodeXML = decodeXML;
    }
  });

  // node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/Tokenizer.js
  var require_Tokenizer = __commonJS({
    "node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/Tokenizer.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decode_codepoint_1 = __importDefault2(require_decode_codepoint());
      var decode_1 = require_decode();
      function isWhitespace(c) {
        return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
      }
      function isEndOfTagSection(c) {
        return c === 47 || c === 62 || isWhitespace(c);
      }
      function isNumber(c) {
        return c >= 48 && c <= 57;
      }
      function isASCIIAlpha(c) {
        return c >= 97 && c <= 122 || c >= 65 && c <= 90;
      }
      var Sequences = {
        Cdata: new Uint16Array([67, 68, 65, 84, 65, 91]),
        CdataEnd: new Uint16Array([93, 93, 62]),
        CommentEnd: new Uint16Array([45, 45, 62]),
        ScriptEnd: new Uint16Array([
          60,
          47,
          115,
          99,
          114,
          105,
          112,
          116
        ]),
        StyleEnd: new Uint16Array([60, 47, 115, 116, 121, 108, 101]),
        TitleEnd: new Uint16Array([60, 47, 116, 105, 116, 108, 101])
      };
      var Tokenizer = function() {
        function Tokenizer2(_a7, cbs) {
          var _b3 = _a7.xmlMode, xmlMode = _b3 === void 0 ? false : _b3, _c = _a7.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
          this.cbs = cbs;
          this._state = 1;
          this.buffer = "";
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.isSpecial = false;
          this.running = true;
          this.ended = false;
          this.sequenceIndex = 0;
          this.trieIndex = 0;
          this.trieCurrent = 0;
          this.trieResult = null;
          this.entityExcess = 0;
          this.xmlMode = xmlMode;
          this.decodeEntities = decodeEntities;
          this.entityTrie = xmlMode ? decode_1.xmlDecodeTree : decode_1.htmlDecodeTree;
        }
        Tokenizer2.prototype.reset = function() {
          this._state = 1;
          this.buffer = "";
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.currentSequence = void 0;
          this.running = true;
          this.ended = false;
        };
        Tokenizer2.prototype.write = function(chunk) {
          if (this.ended)
            return this.cbs.onerror(Error(".write() after done!"));
          this.buffer += chunk;
          this.parse();
        };
        Tokenizer2.prototype.end = function(chunk) {
          if (this.ended)
            return this.cbs.onerror(Error(".end() after done!"));
          if (chunk)
            this.write(chunk);
          this.ended = true;
          if (this.running)
            this.finish();
        };
        Tokenizer2.prototype.pause = function() {
          this.running = false;
        };
        Tokenizer2.prototype.resume = function() {
          this.running = true;
          if (this._index < this.buffer.length) {
            this.parse();
          }
          if (this.ended) {
            this.finish();
          }
        };
        Tokenizer2.prototype.getAbsoluteSectionStart = function() {
          return this.sectionStart + this.bufferOffset;
        };
        Tokenizer2.prototype.getAbsoluteIndex = function() {
          return this.bufferOffset + this._index;
        };
        Tokenizer2.prototype.stateText = function(c) {
          if (c === 60 || !this.decodeEntities && this.fastForwardTo(60)) {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this._state = 2;
            this.sectionStart = this._index;
          } else if (this.decodeEntities && c === 38) {
            this._state = 25;
          }
        };
        Tokenizer2.prototype.stateSpecialStartSequence = function(c) {
          var isEnd = this.sequenceIndex === this.currentSequence.length;
          var isMatch = isEnd ? isEndOfTagSection(c) : (c | 32) === this.currentSequence[this.sequenceIndex];
          if (!isMatch) {
            this.isSpecial = false;
          } else if (!isEnd) {
            this.sequenceIndex++;
            return;
          }
          this.sequenceIndex = 0;
          this._state = 3;
          this.stateInTagName(c);
        };
        Tokenizer2.prototype.stateInSpecialTag = function(c) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (c === 62 || isWhitespace(c)) {
              var endOfText = this._index - this.currentSequence.length;
              if (this.sectionStart < endOfText) {
                var actualIndex = this._index;
                this._index = endOfText;
                this.cbs.ontext(this.getSection());
                this._index = actualIndex;
              }
              this.isSpecial = false;
              this.sectionStart = endOfText + 2;
              this.stateInClosingTagName(c);
              return;
            }
            this.sequenceIndex = 0;
          }
          if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
          } else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
              if (this.decodeEntities && c === 38) {
                this._state = 25;
              }
            } else if (this.fastForwardTo(60)) {
              this.sequenceIndex = 1;
            }
          } else {
            this.sequenceIndex = Number(c === 60);
          }
        };
        Tokenizer2.prototype.stateCDATASequence = function(c) {
          if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
              this._state = 21;
              this.currentSequence = Sequences.CdataEnd;
              this.sequenceIndex = 0;
              this.sectionStart = this._index + 1;
            }
          } else {
            this.sequenceIndex = 0;
            this._state = 16;
            this.stateInDeclaration(c);
          }
        };
        Tokenizer2.prototype.fastForwardTo = function(c) {
          while (++this._index < this.buffer.length) {
            if (this.buffer.charCodeAt(this._index) === c) {
              return true;
            }
          }
          this._index = this.buffer.length - 1;
          return false;
        };
        Tokenizer2.prototype.stateInCommentLike = function(c) {
          if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
              var section = this.buffer.slice(this.sectionStart, this._index - 2);
              if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(section);
              } else {
                this.cbs.oncomment(section);
              }
              this.sequenceIndex = 0;
              this.sectionStart = this._index + 1;
              this._state = 1;
            }
          } else if (this.sequenceIndex === 0) {
            if (this.fastForwardTo(this.currentSequence[0])) {
              this.sequenceIndex = 1;
            }
          } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            this.sequenceIndex = 0;
          }
        };
        Tokenizer2.prototype.isTagStartChar = function(c) {
          return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
        };
        Tokenizer2.prototype.startSpecial = function(sequence, offset) {
          this.isSpecial = true;
          this.currentSequence = sequence;
          this.sequenceIndex = offset;
          this._state = 23;
        };
        Tokenizer2.prototype.stateBeforeTagName = function(c) {
          if (c === 33) {
            this._state = 15;
            this.sectionStart = this._index + 1;
          } else if (c === 63) {
            this._state = 17;
            this.sectionStart = this._index + 1;
          } else if (this.isTagStartChar(c)) {
            var lower = c | 32;
            this.sectionStart = this._index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
              this.startSpecial(Sequences.TitleEnd, 3);
            } else {
              this._state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? 22 : 3;
            }
          } else if (c === 47) {
            this._state = 5;
          } else {
            this._state = 1;
            this.stateText(c);
          }
        };
        Tokenizer2.prototype.stateInTagName = function(c) {
          if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.getSection());
            this.sectionStart = -1;
            this._state = 8;
            this.stateBeforeAttributeName(c);
          }
        };
        Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
          if (isWhitespace(c)) {
          } else if (c === 62) {
            this._state = 1;
          } else {
            this._state = this.isTagStartChar(c) ? 6 : 20;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInClosingTagName = function(c) {
          if (c === 62 || isWhitespace(c)) {
            this.cbs.onclosetag(this.getSection());
            this.sectionStart = -1;
            this._state = 7;
            this.stateAfterClosingTagName(c);
          }
        };
        Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
          if (c === 62 || this.fastForwardTo(62)) {
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
          if (c === 62) {
            this.cbs.onopentagend();
            if (this.isSpecial) {
              this._state = 24;
              this.sequenceIndex = 0;
            } else {
              this._state = 1;
            }
            this.baseState = this._state;
            this.sectionStart = this._index + 1;
          } else if (c === 47) {
            this._state = 4;
          } else if (!isWhitespace(c)) {
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
          if (c === 62) {
            this.cbs.onselfclosingtag();
            this._state = 1;
            this.baseState = 1;
            this.sectionStart = this._index + 1;
            this.isSpecial = false;
          } else if (!isWhitespace(c)) {
            this._state = 8;
            this.stateBeforeAttributeName(c);
          }
        };
        Tokenizer2.prototype.stateInAttributeName = function(c) {
          if (c === 61 || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10;
            this.stateAfterAttributeName(c);
          }
        };
        Tokenizer2.prototype.stateAfterAttributeName = function(c) {
          if (c === 61) {
            this._state = 11;
          } else if (c === 47 || c === 62) {
            this.cbs.onattribend(void 0);
            this._state = 8;
            this.stateBeforeAttributeName(c);
          } else if (!isWhitespace(c)) {
            this.cbs.onattribend(void 0);
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
          if (c === 34) {
            this._state = 12;
            this.sectionStart = this._index + 1;
          } else if (c === 39) {
            this._state = 13;
            this.sectionStart = this._index + 1;
          } else if (!isWhitespace(c)) {
            this.sectionStart = this._index;
            this._state = 14;
            this.stateInAttributeValueNoQuotes(c);
          }
        };
        Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
          if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.getSection());
            this.sectionStart = -1;
            this.cbs.onattribend(String.fromCharCode(quote));
            this._state = 8;
          } else if (this.decodeEntities && c === 38) {
            this.baseState = this._state;
            this._state = 25;
          }
        };
        Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
          this.handleInAttributeValue(c, 34);
        };
        Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
          this.handleInAttributeValue(c, 39);
        };
        Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
          if (isWhitespace(c) || c === 62) {
            this.cbs.onattribdata(this.getSection());
            this.sectionStart = -1;
            this.cbs.onattribend(null);
            this._state = 8;
            this.stateBeforeAttributeName(c);
          } else if (this.decodeEntities && c === 38) {
            this.baseState = this._state;
            this._state = 25;
          }
        };
        Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
          if (c === 91) {
            this._state = 19;
            this.sequenceIndex = 0;
          } else {
            this._state = c === 45 ? 18 : 16;
          }
        };
        Tokenizer2.prototype.stateInDeclaration = function(c) {
          if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
          if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeComment = function(c) {
          if (c === 45) {
            this._state = 21;
            this.currentSequence = Sequences.CommentEnd;
            this.sequenceIndex = 2;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
          }
        };
        Tokenizer2.prototype.stateInSpecialComment = function(c) {
          if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.oncomment(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
          var lower = c | 32;
          if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
          } else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
          } else {
            this._state = 3;
            this.stateInTagName(c);
          }
        };
        Tokenizer2.prototype.stateBeforeEntity = function(c) {
          this.entityExcess = 1;
          if (c === 35) {
            this._state = 26;
          } else if (c === 38) {
          } else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.trieResult = null;
            this._state = 27;
            this.stateInNamedEntity(c);
          }
        };
        Tokenizer2.prototype.stateInNamedEntity = function(c) {
          this.entityExcess += 1;
          this.trieIndex = (0, decode_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
          if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this._index--;
            return;
          }
          this.trieCurrent = this.entityTrie[this.trieIndex];
          if (this.trieCurrent & decode_1.BinTrieFlags.HAS_VALUE) {
            if (!this.allowLegacyEntity() && c !== 59) {
              this.trieIndex += 1;
            } else {
              var entityStart = this._index - this.entityExcess + 1;
              if (entityStart > this.sectionStart) {
                this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
              }
              this.trieResult = this.trieCurrent & decode_1.BinTrieFlags.MULTI_BYTE ? String.fromCharCode(this.entityTrie[++this.trieIndex], this.entityTrie[++this.trieIndex]) : String.fromCharCode(this.entityTrie[++this.trieIndex]);
              this.entityExcess = 0;
              this.sectionStart = this._index + 1;
            }
          }
        };
        Tokenizer2.prototype.emitNamedEntity = function() {
          if (this.trieResult) {
            this.emitPartial(this.trieResult);
          }
          this._state = this.baseState;
        };
        Tokenizer2.prototype.stateBeforeNumericEntity = function(c) {
          if ((c | 32) === 120) {
            this.entityExcess++;
            this._state = 29;
          } else {
            this._state = 28;
            this.stateInNumericEntity(c);
          }
        };
        Tokenizer2.prototype.decodeNumericEntity = function(base, strict) {
          var entityStart = this._index - this.entityExcess - 1;
          var numberStart = entityStart + 2 + (base >> 4);
          if (numberStart !== this._index) {
            if (entityStart > this.sectionStart) {
              this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
            }
            var entity = this.buffer.substring(numberStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial((0, decode_codepoint_1.default)(parsed));
            this.sectionStart = this._index + Number(strict);
          }
          this._state = this.baseState;
        };
        Tokenizer2.prototype.stateInNumericEntity = function(c) {
          if (c === 59) {
            this.decodeNumericEntity(10, true);
          } else if (!isNumber(c)) {
            if (this.allowLegacyEntity()) {
              this.decodeNumericEntity(10, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          } else {
            this.entityExcess++;
          }
        };
        Tokenizer2.prototype.stateInHexEntity = function(c) {
          if (c === 59) {
            this.decodeNumericEntity(16, true);
          } else if ((c < 97 || c > 102) && (c < 65 || c > 70) && !isNumber(c)) {
            if (this.allowLegacyEntity()) {
              this.decodeNumericEntity(16, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          } else {
            this.entityExcess++;
          }
        };
        Tokenizer2.prototype.allowLegacyEntity = function() {
          return !this.xmlMode && (this.baseState === 1 || this.baseState === 24);
        };
        Tokenizer2.prototype.cleanup = function() {
          if (this.running && this.sectionStart !== this._index && (this._state === 1 || this._state === 24 && this.sequenceIndex === 0)) {
            this.cbs.ontext(this.buffer.substr(this.sectionStart));
            this.sectionStart = this._index;
          }
          var start = this.sectionStart < 0 ? this._index : this.sectionStart;
          this.buffer = start === this.buffer.length ? "" : this.buffer.substr(start);
          this._index -= start;
          this.bufferOffset += start;
          if (this.sectionStart > 0) {
            this.sectionStart = 0;
          }
        };
        Tokenizer2.prototype.shouldContinue = function() {
          return this._index < this.buffer.length && this.running;
        };
        Tokenizer2.prototype.parse = function() {
          while (this.shouldContinue()) {
            var c = this.buffer.charCodeAt(this._index);
            if (this._state === 1) {
              this.stateText(c);
            } else if (this._state === 23) {
              this.stateSpecialStartSequence(c);
            } else if (this._state === 24) {
              this.stateInSpecialTag(c);
            } else if (this._state === 19) {
              this.stateCDATASequence(c);
            } else if (this._state === 12) {
              this.stateInAttributeValueDoubleQuotes(c);
            } else if (this._state === 9) {
              this.stateInAttributeName(c);
            } else if (this._state === 21) {
              this.stateInCommentLike(c);
            } else if (this._state === 20) {
              this.stateInSpecialComment(c);
            } else if (this._state === 8) {
              this.stateBeforeAttributeName(c);
            } else if (this._state === 3) {
              this.stateInTagName(c);
            } else if (this._state === 6) {
              this.stateInClosingTagName(c);
            } else if (this._state === 2) {
              this.stateBeforeTagName(c);
            } else if (this._state === 10) {
              this.stateAfterAttributeName(c);
            } else if (this._state === 13) {
              this.stateInAttributeValueSingleQuotes(c);
            } else if (this._state === 11) {
              this.stateBeforeAttributeValue(c);
            } else if (this._state === 5) {
              this.stateBeforeClosingTagName(c);
            } else if (this._state === 7) {
              this.stateAfterClosingTagName(c);
            } else if (this._state === 22) {
              this.stateBeforeSpecialS(c);
            } else if (this._state === 14) {
              this.stateInAttributeValueNoQuotes(c);
            } else if (this._state === 4) {
              this.stateInSelfClosingTag(c);
            } else if (this._state === 16) {
              this.stateInDeclaration(c);
            } else if (this._state === 15) {
              this.stateBeforeDeclaration(c);
            } else if (this._state === 18) {
              this.stateBeforeComment(c);
            } else if (this._state === 17) {
              this.stateInProcessingInstruction(c);
            } else if (this._state === 27) {
              this.stateInNamedEntity(c);
            } else if (this._state === 25) {
              this.stateBeforeEntity(c);
            } else if (this._state === 29) {
              this.stateInHexEntity(c);
            } else if (this._state === 28) {
              this.stateInNumericEntity(c);
            } else {
              this.stateBeforeNumericEntity(c);
            }
            this._index++;
          }
          this.cleanup();
        };
        Tokenizer2.prototype.finish = function() {
          if (this._state === 27) {
            this.emitNamedEntity();
          }
          if (this.sectionStart < this._index) {
            this.handleTrailingData();
          }
          this.cbs.onend();
        };
        Tokenizer2.prototype.handleTrailingData = function() {
          var data = this.buffer.substr(this.sectionStart);
          if (this._state === 21) {
            if (this.currentSequence === Sequences.CdataEnd) {
              this.cbs.oncdata(data);
            } else {
              this.cbs.oncomment(data);
            }
          } else if (this._state === 28 && this.allowLegacyEntity()) {
            this.decodeNumericEntity(10, false);
          } else if (this._state === 29 && this.allowLegacyEntity()) {
            this.decodeNumericEntity(16, false);
          } else if (this._state === 3 || this._state === 8 || this._state === 11 || this._state === 10 || this._state === 9 || this._state === 13 || this._state === 12 || this._state === 14 || this._state === 6) {
          } else {
            this.cbs.ontext(data);
          }
        };
        Tokenizer2.prototype.getSection = function() {
          return this.buffer.substring(this.sectionStart, this._index);
        };
        Tokenizer2.prototype.emitPartial = function(value) {
          if (this.baseState !== 1 && this.baseState !== 24) {
            this.cbs.onattribdata(value);
          } else {
            this.cbs.ontext(value);
          }
        };
        return Tokenizer2;
      }();
      exports.default = Tokenizer;
    }
  });

  // node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/Parser.js
  var require_Parser = __commonJS({
    "node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/Parser.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Parser = void 0;
      var Tokenizer_1 = __importDefault2(require_Tokenizer());
      var formTags = /* @__PURE__ */ new Set([
        "input",
        "option",
        "optgroup",
        "select",
        "button",
        "datalist",
        "textarea"
      ]);
      var pTag = /* @__PURE__ */ new Set(["p"]);
      var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
      var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
      var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
      var openImpliesClose = /* @__PURE__ */ new Map([
        ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
        ["th", /* @__PURE__ */ new Set(["th"])],
        ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
        ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
        ["li", /* @__PURE__ */ new Set(["li"])],
        ["p", pTag],
        ["h1", pTag],
        ["h2", pTag],
        ["h3", pTag],
        ["h4", pTag],
        ["h5", pTag],
        ["h6", pTag],
        ["select", formTags],
        ["input", formTags],
        ["output", formTags],
        ["button", formTags],
        ["datalist", formTags],
        ["textarea", formTags],
        ["option", /* @__PURE__ */ new Set(["option"])],
        ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
        ["dd", ddtTags],
        ["dt", ddtTags],
        ["address", pTag],
        ["article", pTag],
        ["aside", pTag],
        ["blockquote", pTag],
        ["details", pTag],
        ["div", pTag],
        ["dl", pTag],
        ["fieldset", pTag],
        ["figcaption", pTag],
        ["figure", pTag],
        ["footer", pTag],
        ["form", pTag],
        ["header", pTag],
        ["hr", pTag],
        ["main", pTag],
        ["nav", pTag],
        ["ol", pTag],
        ["pre", pTag],
        ["section", pTag],
        ["table", pTag],
        ["ul", pTag],
        ["rt", rtpTags],
        ["rp", rtpTags],
        ["tbody", tableSectionTags],
        ["tfoot", tableSectionTags]
      ]);
      var voidElements2 = /* @__PURE__ */ new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
      var htmlIntegrationElements = /* @__PURE__ */ new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignobject",
        "desc",
        "title"
      ]);
      var reNameEnd = /\s|\//;
      var Parser3 = function() {
        function Parser4(cbs, options) {
          if (options === void 0) {
            options = {};
          }
          var _a7, _b3, _c, _d, _e;
          this.options = options;
          this.startIndex = 0;
          this.endIndex = 0;
          this.openTagStart = 0;
          this.tagname = "";
          this.attribname = "";
          this.attribvalue = "";
          this.attribs = null;
          this.stack = [];
          this.foreignContext = [];
          this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
          this.lowerCaseTagNames = (_a7 = options.lowerCaseTags) !== null && _a7 !== void 0 ? _a7 : !options.xmlMode;
          this.lowerCaseAttributeNames = (_b3 = options.lowerCaseAttributeNames) !== null && _b3 !== void 0 ? _b3 : !options.xmlMode;
          this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
          (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
        }
        Parser4.prototype.ontext = function(data) {
          var _a7, _b3;
          var idx = this.tokenizer.getAbsoluteIndex();
          this.endIndex = idx - 1;
          (_b3 = (_a7 = this.cbs).ontext) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, data);
          this.startIndex = idx;
        };
        Parser4.prototype.isVoidElement = function(name) {
          return !this.options.xmlMode && voidElements2.has(name);
        };
        Parser4.prototype.onopentagname = function(name) {
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          this.emitOpenTag(name);
        };
        Parser4.prototype.emitOpenTag = function(name) {
          var _a7, _b3, _c, _d;
          this.openTagStart = this.startIndex;
          this.tagname = name;
          var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
          if (impliesClose) {
            while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
              var el = this.stack.pop();
              (_b3 = (_a7 = this.cbs).onclosetag) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, el, true);
            }
          }
          if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
              this.foreignContext.push(true);
            } else if (htmlIntegrationElements.has(name)) {
              this.foreignContext.push(false);
            }
          }
          (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
          if (this.cbs.onopentag)
            this.attribs = {};
        };
        Parser4.prototype.endOpenTag = function(isImplied) {
          var _a7, _b3;
          this.startIndex = this.openTagStart;
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          if (this.attribs) {
            (_b3 = (_a7 = this.cbs).onopentag) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, this.tagname, this.attribs, isImplied);
            this.attribs = null;
          }
          if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
          }
          this.tagname = "";
        };
        Parser4.prototype.onopentagend = function() {
          this.endOpenTag(false);
          this.startIndex = this.endIndex + 1;
        };
        Parser4.prototype.onclosetag = function(name) {
          var _a7, _b3, _c, _d, _e, _f;
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
          }
          if (!this.isVoidElement(name)) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
              if (this.cbs.onclosetag) {
                var count = this.stack.length - pos;
                while (count--) {
                  this.cbs.onclosetag(this.stack.pop(), count !== 0);
                }
              } else
                this.stack.length = pos;
            } else if (!this.options.xmlMode && name === "p") {
              this.emitOpenTag(name);
              this.closeCurrentTag(true);
            }
          } else if (!this.options.xmlMode && name === "br") {
            (_b3 = (_a7 = this.cbs).onopentagname) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, name);
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, name, {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, name, false);
          }
          this.startIndex = this.endIndex + 1;
        };
        Parser4.prototype.onselfclosingtag = function() {
          if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            this.startIndex = this.endIndex + 1;
          } else {
            this.onopentagend();
          }
        };
        Parser4.prototype.closeCurrentTag = function(isOpenImplied) {
          var _a7, _b3;
          var name = this.tagname;
          this.endOpenTag(isOpenImplied);
          if (this.stack[this.stack.length - 1] === name) {
            (_b3 = (_a7 = this.cbs).onclosetag) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, name, !isOpenImplied);
            this.stack.pop();
          }
        };
        Parser4.prototype.onattribname = function(name) {
          this.startIndex = this.tokenizer.getAbsoluteSectionStart();
          if (this.lowerCaseAttributeNames) {
            name = name.toLowerCase();
          }
          this.attribname = name;
        };
        Parser4.prototype.onattribdata = function(value) {
          this.attribvalue += value;
        };
        Parser4.prototype.onattribend = function(quote) {
          var _a7, _b3;
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          (_b3 = (_a7 = this.cbs).onattribute) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, this.attribname, this.attribvalue, quote);
          if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
          }
          this.attribname = "";
          this.attribvalue = "";
        };
        Parser4.prototype.getInstructionName = function(value) {
          var idx = value.search(reNameEnd);
          var name = idx < 0 ? value : value.substr(0, idx);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          return name;
        };
        Parser4.prototype.ondeclaration = function(value) {
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
          }
          this.startIndex = this.endIndex + 1;
        };
        Parser4.prototype.onprocessinginstruction = function(value) {
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
          }
          this.startIndex = this.endIndex + 1;
        };
        Parser4.prototype.oncomment = function(value) {
          var _a7, _b3, _c, _d;
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          (_b3 = (_a7 = this.cbs).oncomment) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, value);
          (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
          this.startIndex = this.endIndex + 1;
        };
        Parser4.prototype.oncdata = function(value) {
          var _a7, _b3, _c, _d, _e, _f, _g, _h, _j, _k;
          this.endIndex = this.tokenizer.getAbsoluteIndex();
          if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b3 = (_a7 = this.cbs).oncdatastart) === null || _b3 === void 0 ? void 0 : _b3.call(_a7);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
          } else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[" + value + "]]");
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
          }
          this.startIndex = this.endIndex + 1;
        };
        Parser4.prototype.onerror = function(err) {
          var _a7, _b3;
          (_b3 = (_a7 = this.cbs).onerror) === null || _b3 === void 0 ? void 0 : _b3.call(_a7, err);
        };
        Parser4.prototype.onend = function() {
          var _a7, _b3;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
              ;
          }
          (_b3 = (_a7 = this.cbs).onend) === null || _b3 === void 0 ? void 0 : _b3.call(_a7);
        };
        Parser4.prototype.reset = function() {
          var _a7, _b3, _c, _d;
          (_b3 = (_a7 = this.cbs).onreset) === null || _b3 === void 0 ? void 0 : _b3.call(_a7);
          this.tokenizer.reset();
          this.tagname = "";
          this.attribname = "";
          this.attribs = null;
          this.stack = [];
          this.startIndex = 0;
          this.endIndex = 0;
          (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        };
        Parser4.prototype.parseComplete = function(data) {
          this.reset();
          this.end(data);
        };
        Parser4.prototype.write = function(chunk) {
          this.tokenizer.write(chunk);
        };
        Parser4.prototype.end = function(chunk) {
          this.tokenizer.end(chunk);
        };
        Parser4.prototype.pause = function() {
          this.tokenizer.pause();
        };
        Parser4.prototype.resume = function() {
          this.tokenizer.resume();
        };
        Parser4.prototype.parseChunk = function(chunk) {
          this.write(chunk);
        };
        Parser4.prototype.done = function(chunk) {
          this.end(chunk);
        };
        return Parser4;
      }();
      exports.Parser = Parser3;
    }
  });

  // node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/index.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
      var ElementType;
      (function(ElementType2) {
        ElementType2["Root"] = "root";
        ElementType2["Text"] = "text";
        ElementType2["Directive"] = "directive";
        ElementType2["Comment"] = "comment";
        ElementType2["Script"] = "script";
        ElementType2["Style"] = "style";
        ElementType2["Tag"] = "tag";
        ElementType2["CDATA"] = "cdata";
        ElementType2["Doctype"] = "doctype";
      })(ElementType = exports.ElementType || (exports.ElementType = {}));
      function isTag2(elem) {
        return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
      }
      exports.isTag = isTag2;
      exports.Root = ElementType.Root;
      exports.Text = ElementType.Text;
      exports.Directive = ElementType.Directive;
      exports.Comment = ElementType.Comment;
      exports.Script = ElementType.Script;
      exports.Style = ElementType.Style;
      exports.Tag = ElementType.Tag;
      exports.CDATA = ElementType.CDATA;
      exports.Doctype = ElementType.Doctype;
    }
  });

  // node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/node.js
  var require_node = __commonJS({
    "node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/node.js"(exports) {
      "use strict";
      init_env();
      var __extends2 = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
      var domelementtype_1 = require_lib2();
      var nodeTypes = /* @__PURE__ */ new Map([
        [domelementtype_1.ElementType.Tag, 1],
        [domelementtype_1.ElementType.Script, 1],
        [domelementtype_1.ElementType.Style, 1],
        [domelementtype_1.ElementType.Directive, 1],
        [domelementtype_1.ElementType.Text, 3],
        [domelementtype_1.ElementType.CDATA, 4],
        [domelementtype_1.ElementType.Comment, 8],
        [domelementtype_1.ElementType.Root, 9]
      ]);
      var Node3 = function() {
        function Node4(type) {
          this.type = type;
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node4.prototype, "nodeType", {
          get: function() {
            var _a7;
            return (_a7 = nodeTypes.get(this.type)) !== null && _a7 !== void 0 ? _a7 : 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node4.prototype, "parentNode", {
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node4.prototype, "previousSibling", {
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node4.prototype, "nextSibling", {
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node4.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node4;
      }();
      exports.Node = Node3;
      var DataNode = function(_super) {
        __extends2(DataNode2, _super);
        function DataNode2(type, data) {
          var _this = _super.call(this, type) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node3);
      exports.DataNode = DataNode;
      var Text3 = function(_super) {
        __extends2(Text4, _super);
        function Text4(data) {
          return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
        }
        return Text4;
      }(DataNode);
      exports.Text = Text3;
      var Comment3 = function(_super) {
        __extends2(Comment4, _super);
        function Comment4(data) {
          return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
        }
        return Comment4;
      }(DataNode);
      exports.Comment = Comment3;
      var ProcessingInstruction = function(_super) {
        __extends2(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
          _this.name = name;
          return _this;
        }
        return ProcessingInstruction2;
      }(DataNode);
      exports.ProcessingInstruction = ProcessingInstruction;
      var NodeWithChildren = function(_super) {
        __extends2(NodeWithChildren2, _super);
        function NodeWithChildren2(type, children) {
          var _this = _super.call(this, type) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          get: function() {
            var _a7;
            return (_a7 = this.children[0]) !== null && _a7 !== void 0 ? _a7 : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node3);
      exports.NodeWithChildren = NodeWithChildren;
      var Document4 = function(_super) {
        __extends2(Document5, _super);
        function Document5(children) {
          return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
        }
        return Document5;
      }(NodeWithChildren);
      exports.Document = Document4;
      var Element3 = function(_super) {
        __extends2(Element4, _super);
        function Element4(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, type, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          return _this;
        }
        Object.defineProperty(Element4.prototype, "tagName", {
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element4.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a7, _b3;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a7 = _this["x-attribsNamespace"]) === null || _a7 === void 0 ? void 0 : _a7[name],
                prefix: (_b3 = _this["x-attribsPrefix"]) === null || _b3 === void 0 ? void 0 : _b3[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element4;
      }(NodeWithChildren);
      exports.Element = Element3;
      function isTag2(node) {
        return (0, domelementtype_1.isTag)(node);
      }
      exports.isTag = isTag2;
      function isCDATA(node) {
        return node.type === domelementtype_1.ElementType.CDATA;
      }
      exports.isCDATA = isCDATA;
      function isText(node) {
        return node.type === domelementtype_1.ElementType.Text;
      }
      exports.isText = isText;
      function isComment(node) {
        return node.type === domelementtype_1.ElementType.Comment;
      }
      exports.isComment = isComment;
      function isDirective(node) {
        return node.type === domelementtype_1.ElementType.Directive;
      }
      exports.isDirective = isDirective;
      function isDocument(node) {
        return node.type === domelementtype_1.ElementType.Root;
      }
      exports.isDocument = isDocument;
      function hasChildren(node) {
        return Object.prototype.hasOwnProperty.call(node, "children");
      }
      exports.hasChildren = hasChildren;
      function cloneNode(node, recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        var result;
        if (isText(node)) {
          result = new Text3(node.data);
        } else if (isComment(node)) {
          result = new Comment3(node.data);
        } else if (isTag2(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_1 = new Element3(node.name, __assign2({}, node.attribs), children);
          children.forEach(function(child) {
            return child.parent = clone_1;
          });
          if (node.namespace != null) {
            clone_1.namespace = node.namespace;
          }
          if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign2({}, node["x-attribsNamespace"]);
          }
          if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign2({}, node["x-attribsPrefix"]);
          }
          result = clone_1;
        } else if (isCDATA(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
          children.forEach(function(child) {
            return child.parent = clone_2;
          });
          result = clone_2;
        } else if (isDocument(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_3 = new Document4(children);
          children.forEach(function(child) {
            return child.parent = clone_3;
          });
          if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
          }
          result = clone_3;
        } else if (isDirective(node)) {
          var instruction = new ProcessingInstruction(node.name, node.data);
          if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
          }
          result = instruction;
        } else {
          throw new Error("Not implemented yet: ".concat(node.type));
        }
        result.startIndex = node.startIndex;
        result.endIndex = node.endIndex;
        if (node.sourceCodeLocation != null) {
          result.sourceCodeLocation = node.sourceCodeLocation;
        }
        return result;
      }
      exports.cloneNode = cloneNode;
      function cloneChildren(childs) {
        var children = childs.map(function(child) {
          return cloneNode(child, true);
        });
        for (var i = 1; i < children.length; i++) {
          children[i].prev = children[i - 1];
          children[i - 1].next = children[i];
        }
        return children;
      }
    }
  });

  // node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/index.js"(exports) {
      "use strict";
      init_env();
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DomHandler = void 0;
      var domelementtype_1 = require_lib2();
      var node_1 = require_node();
      __exportStar2(require_node(), exports);
      var reWhitespace = /\s+/g;
      var defaultOpts = {
        normalizeWhitespace: false,
        withStartIndices: false,
        withEndIndices: false,
        xmlMode: false
      };
      var DomHandler = function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var normalizeWhitespace = this.options.normalizeWhitespace;
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
              lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            } else {
              lastNode.data += data;
            }
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            if (normalizeWhitespace) {
              data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_1.Text("");
          var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling2 = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling2) {
            node.prev = previousSibling2;
            previousSibling2.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }();
      exports.DomHandler = DomHandler;
      exports.default = DomHandler;
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/entities.json
  var require_entities = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/entities.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/legacy.json
  var require_legacy = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/legacy.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/xml.json
  var require_xml = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/xml.json"(exports, module) {
      module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/decode.json
  var require_decode2 = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/decode.json"(exports, module) {
      module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint2 = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode_codepoint.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decode_json_1 = __importDefault2(require_decode2());
      var fromCodePoint = String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      };
      function decodeCodePoint(codePoint) {
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          return "\uFFFD";
        }
        if (codePoint in decode_json_1.default) {
          codePoint = decode_json_1.default[codePoint];
        }
        return fromCodePoint(codePoint);
      }
      exports.default = decodeCodePoint;
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode.js
  var require_decode3 = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
      var entities_json_1 = __importDefault2(require_entities());
      var legacy_json_1 = __importDefault2(require_legacy());
      var xml_json_1 = __importDefault2(require_xml());
      var decode_codepoint_1 = __importDefault2(require_decode_codepoint2());
      var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
      exports.decodeXML = getStrictDecoder(xml_json_1.default);
      exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
      function getStrictDecoder(map) {
        var replace3 = getReplacer(map);
        return function(str) {
          return String(str).replace(strictEntityRe, replace3);
        };
      }
      var sorter = function(a, b) {
        return a < b ? 1 : -1;
      };
      exports.decodeHTML = function() {
        var legacy = Object.keys(legacy_json_1.default).sort(sorter);
        var keys2 = Object.keys(entities_json_1.default).sort(sorter);
        for (var i = 0, j = 0; i < keys2.length; i++) {
          if (legacy[j] === keys2[i]) {
            keys2[i] += ";?";
            j++;
          } else {
            keys2[i] += ";";
          }
        }
        var re = new RegExp("&(?:" + keys2.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
        var replace3 = getReplacer(entities_json_1.default);
        function replacer(str) {
          if (str.substr(-1) !== ";")
            str += ";";
          return replace3(str);
        }
        return function(str) {
          return String(str).replace(re, replacer);
        };
      }();
      function getReplacer(map) {
        return function replace3(str) {
          if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
              return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
          }
          return map[str.slice(1, -1)] || str;
        };
      }
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/encode.js
  var require_encode = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/encode.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
      var xml_json_1 = __importDefault2(require_xml());
      var inverseXML = getInverseObj(xml_json_1.default);
      var xmlReplacer = getInverseReplacer(inverseXML);
      exports.encodeXML = getASCIIEncoder(inverseXML);
      var entities_json_1 = __importDefault2(require_entities());
      var inverseHTML = getInverseObj(entities_json_1.default);
      var htmlReplacer = getInverseReplacer(inverseHTML);
      exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
      exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
      function getInverseObj(obj) {
        return Object.keys(obj).sort().reduce(function(inverse, name) {
          inverse[obj[name]] = "&" + name + ";";
          return inverse;
        }, {});
      }
      function getInverseReplacer(inverse) {
        var single = [];
        var multiple = [];
        for (var _i = 0, _a7 = Object.keys(inverse); _i < _a7.length; _i++) {
          var k = _a7[_i];
          if (k.length === 1) {
            single.push("\\" + k);
          } else {
            multiple.push(k);
          }
        }
        single.sort();
        for (var start = 0; start < single.length - 1; start++) {
          var end = start;
          while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
          }
          var count = 1 + end - start;
          if (count < 3)
            continue;
          single.splice(start, count, single[start] + "-" + single[end]);
        }
        multiple.unshift("[" + single.join("") + "]");
        return new RegExp(multiple.join("|"), "g");
      }
      var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
      var getCodePoint = String.prototype.codePointAt != null ? function(str) {
        return str.codePointAt(0);
      } : function(c) {
        return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
      };
      function singleCharReplacer(c) {
        return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
      }
      function getInverse(inverse, re) {
        return function(data) {
          return data.replace(re, function(name) {
            return inverse[name];
          }).replace(reNonASCII, singleCharReplacer);
        };
      }
      var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
      function escape2(data) {
        return data.replace(reEscapeChars, singleCharReplacer);
      }
      exports.escape = escape2;
      function escapeUTF8(data) {
        return data.replace(xmlReplacer, singleCharReplacer);
      }
      exports.escapeUTF8 = escapeUTF8;
      function getASCIIEncoder(obj) {
        return function(data) {
          return data.replace(reEscapeChars, function(c) {
            return obj[c] || singleCharReplacer(c);
          });
        };
      }
    }
  });

  // node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/index.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
      var decode_1 = require_decode3();
      var encode_1 = require_encode();
      function decode2(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
      }
      exports.decode = decode2;
      function decodeStrict(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
      }
      exports.decodeStrict = decodeStrict;
      function encode2(data, level) {
        return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
      }
      exports.encode = encode2;
      var encode_2 = require_encode();
      Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
        return encode_2.encodeXML;
      } });
      Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
        return encode_2.encodeNonAsciiHTML;
      } });
      Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
        return encode_2.escape;
      } });
      Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
        return encode_2.escapeUTF8;
      } });
      Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      var decode_2 = require_decode3();
      Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
        return decode_2.decodeXML;
      } });
      Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
        return decode_2.decodeXML;
      } });
    }
  });

  // node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/foreignNames.js
  var require_foreignNames = __commonJS({
    "node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/foreignNames.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeNames = exports.elementNames = void 0;
      exports.elementNames = /* @__PURE__ */ new Map([
        ["altglyph", "altGlyph"],
        ["altglyphdef", "altGlyphDef"],
        ["altglyphitem", "altGlyphItem"],
        ["animatecolor", "animateColor"],
        ["animatemotion", "animateMotion"],
        ["animatetransform", "animateTransform"],
        ["clippath", "clipPath"],
        ["feblend", "feBlend"],
        ["fecolormatrix", "feColorMatrix"],
        ["fecomponenttransfer", "feComponentTransfer"],
        ["fecomposite", "feComposite"],
        ["feconvolvematrix", "feConvolveMatrix"],
        ["fediffuselighting", "feDiffuseLighting"],
        ["fedisplacementmap", "feDisplacementMap"],
        ["fedistantlight", "feDistantLight"],
        ["fedropshadow", "feDropShadow"],
        ["feflood", "feFlood"],
        ["fefunca", "feFuncA"],
        ["fefuncb", "feFuncB"],
        ["fefuncg", "feFuncG"],
        ["fefuncr", "feFuncR"],
        ["fegaussianblur", "feGaussianBlur"],
        ["feimage", "feImage"],
        ["femerge", "feMerge"],
        ["femergenode", "feMergeNode"],
        ["femorphology", "feMorphology"],
        ["feoffset", "feOffset"],
        ["fepointlight", "fePointLight"],
        ["fespecularlighting", "feSpecularLighting"],
        ["fespotlight", "feSpotLight"],
        ["fetile", "feTile"],
        ["feturbulence", "feTurbulence"],
        ["foreignobject", "foreignObject"],
        ["glyphref", "glyphRef"],
        ["lineargradient", "linearGradient"],
        ["radialgradient", "radialGradient"],
        ["textpath", "textPath"]
      ]);
      exports.attributeNames = /* @__PURE__ */ new Map([
        ["definitionurl", "definitionURL"],
        ["attributename", "attributeName"],
        ["attributetype", "attributeType"],
        ["basefrequency", "baseFrequency"],
        ["baseprofile", "baseProfile"],
        ["calcmode", "calcMode"],
        ["clippathunits", "clipPathUnits"],
        ["diffuseconstant", "diffuseConstant"],
        ["edgemode", "edgeMode"],
        ["filterunits", "filterUnits"],
        ["glyphref", "glyphRef"],
        ["gradienttransform", "gradientTransform"],
        ["gradientunits", "gradientUnits"],
        ["kernelmatrix", "kernelMatrix"],
        ["kernelunitlength", "kernelUnitLength"],
        ["keypoints", "keyPoints"],
        ["keysplines", "keySplines"],
        ["keytimes", "keyTimes"],
        ["lengthadjust", "lengthAdjust"],
        ["limitingconeangle", "limitingConeAngle"],
        ["markerheight", "markerHeight"],
        ["markerunits", "markerUnits"],
        ["markerwidth", "markerWidth"],
        ["maskcontentunits", "maskContentUnits"],
        ["maskunits", "maskUnits"],
        ["numoctaves", "numOctaves"],
        ["pathlength", "pathLength"],
        ["patterncontentunits", "patternContentUnits"],
        ["patterntransform", "patternTransform"],
        ["patternunits", "patternUnits"],
        ["pointsatx", "pointsAtX"],
        ["pointsaty", "pointsAtY"],
        ["pointsatz", "pointsAtZ"],
        ["preservealpha", "preserveAlpha"],
        ["preserveaspectratio", "preserveAspectRatio"],
        ["primitiveunits", "primitiveUnits"],
        ["refx", "refX"],
        ["refy", "refY"],
        ["repeatcount", "repeatCount"],
        ["repeatdur", "repeatDur"],
        ["requiredextensions", "requiredExtensions"],
        ["requiredfeatures", "requiredFeatures"],
        ["specularconstant", "specularConstant"],
        ["specularexponent", "specularExponent"],
        ["spreadmethod", "spreadMethod"],
        ["startoffset", "startOffset"],
        ["stddeviation", "stdDeviation"],
        ["stitchtiles", "stitchTiles"],
        ["surfacescale", "surfaceScale"],
        ["systemlanguage", "systemLanguage"],
        ["tablevalues", "tableValues"],
        ["targetx", "targetX"],
        ["targety", "targetY"],
        ["textlength", "textLength"],
        ["viewbox", "viewBox"],
        ["viewtarget", "viewTarget"],
        ["xchannelselector", "xChannelSelector"],
        ["ychannelselector", "yChannelSelector"],
        ["zoomandpan", "zoomAndPan"]
      ]);
    }
  });

  // node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/index.js"(exports) {
      "use strict";
      init_env();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar2 = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var ElementType = __importStar2(require_lib2());
      var entities_1 = require_lib4();
      var foreignNames_1 = require_foreignNames();
      var unencodedElements = /* @__PURE__ */ new Set([
        "style",
        "script",
        "xmp",
        "iframe",
        "noembed",
        "noframes",
        "plaintext",
        "noscript"
      ]);
      function formatAttributes(attributes, opts) {
        if (!attributes)
          return;
        return Object.keys(attributes).map(function(key2) {
          var _a7, _b3;
          var value = (_a7 = attributes[key2]) !== null && _a7 !== void 0 ? _a7 : "";
          if (opts.xmlMode === "foreign") {
            key2 = (_b3 = foreignNames_1.attributeNames.get(key2)) !== null && _b3 !== void 0 ? _b3 : key2;
          }
          if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key2;
          }
          return key2 + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
        }).join(" ");
      }
      var singleTag = /* @__PURE__ */ new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      function render(node, options) {
        if (options === void 0) {
          options = {};
        }
        var nodes = "length" in node ? node : [node];
        var output = "";
        for (var i = 0; i < nodes.length; i++) {
          output += renderNode(nodes[i], options);
        }
        return output;
      }
      exports.default = render;
      function renderNode(node, options) {
        switch (node.type) {
          case ElementType.Root:
            return render(node.children, options);
          case ElementType.Directive:
          case ElementType.Doctype:
            return renderDirective(node);
          case ElementType.Comment:
            return renderComment(node);
          case ElementType.CDATA:
            return renderCdata(node);
          case ElementType.Script:
          case ElementType.Style:
          case ElementType.Tag:
            return renderTag(node, options);
          case ElementType.Text:
            return renderText(node, options);
        }
      }
      var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ]);
      var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
      function renderTag(elem, opts) {
        var _a7;
        if (opts.xmlMode === "foreign") {
          elem.name = (_a7 = foreignNames_1.elementNames.get(elem.name)) !== null && _a7 !== void 0 ? _a7 : elem.name;
          if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign2(__assign2({}, opts), { xmlMode: false });
          }
        }
        if (!opts.xmlMode && foreignElements.has(elem.name)) {
          opts = __assign2(__assign2({}, opts), { xmlMode: "foreign" });
        }
        var tag = "<" + elem.name;
        var attribs = formatAttributes(elem.attribs, opts);
        if (attribs) {
          tag += " " + attribs;
        }
        if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
          if (!opts.xmlMode)
            tag += " ";
          tag += "/>";
        } else {
          tag += ">";
          if (elem.children.length > 0) {
            tag += render(elem.children, opts);
          }
          if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</" + elem.name + ">";
          }
        }
        return tag;
      }
      function renderDirective(elem) {
        return "<" + elem.data + ">";
      }
      function renderText(elem, opts) {
        var data = elem.data || "";
        if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
          data = entities_1.encodeXML(data);
        }
        return data;
      }
      function renderCdata(elem) {
        return "<![CDATA[" + elem.children[0].data + "]]>";
      }
      function renderComment(elem) {
        return "<!--" + elem.data + "-->";
      }
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/stringify.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
      var domhandler_1 = require_lib3();
      var dom_serializer_1 = __importDefault2(require_lib5());
      var domelementtype_1 = require_lib2();
      function getOuterHTML(node, options) {
        return (0, dom_serializer_1.default)(node, options);
      }
      exports.getOuterHTML = getOuterHTML;
      function getInnerHTML(node, options) {
        return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
          return getOuterHTML(node2, options);
        }).join("") : "";
      }
      exports.getInnerHTML = getInnerHTML;
      function getText2(node) {
        if (Array.isArray(node))
          return node.map(getText2).join("");
        if ((0, domhandler_1.isTag)(node))
          return node.name === "br" ? "\n" : getText2(node.children);
        if ((0, domhandler_1.isCDATA)(node))
          return getText2(node.children);
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.getText = getText2;
      function textContent(node) {
        if (Array.isArray(node))
          return node.map(textContent).join("");
        if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
          return textContent(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.textContent = textContent;
      function innerText(node) {
        if (Array.isArray(node))
          return node.map(innerText).join("");
        if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
          return innerText(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.innerText = innerText;
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/traversal.js
  var require_traversal = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/traversal.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
      var domhandler_1 = require_lib3();
      var emptyArray = [];
      function getChildren2(elem) {
        var _a7;
        return (_a7 = elem.children) !== null && _a7 !== void 0 ? _a7 : emptyArray;
      }
      exports.getChildren = getChildren2;
      function getParent2(elem) {
        return elem.parent || null;
      }
      exports.getParent = getParent2;
      function getSiblings2(elem) {
        var _a7, _b3;
        var parent = getParent2(elem);
        if (parent != null)
          return getChildren2(parent);
        var siblings = [elem];
        var prev = elem.prev, next = elem.next;
        while (prev != null) {
          siblings.unshift(prev);
          _a7 = prev, prev = _a7.prev;
        }
        while (next != null) {
          siblings.push(next);
          _b3 = next, next = _b3.next;
        }
        return siblings;
      }
      exports.getSiblings = getSiblings2;
      function getAttributeValue2(elem, name) {
        var _a7;
        return (_a7 = elem.attribs) === null || _a7 === void 0 ? void 0 : _a7[name];
      }
      exports.getAttributeValue = getAttributeValue2;
      function hasAttrib2(elem, name) {
        return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
      }
      exports.hasAttrib = hasAttrib2;
      function getName2(elem) {
        return elem.name;
      }
      exports.getName = getName2;
      function nextElementSibling2(elem) {
        var _a7;
        var next = elem.next;
        while (next !== null && !(0, domhandler_1.isTag)(next))
          _a7 = next, next = _a7.next;
        return next;
      }
      exports.nextElementSibling = nextElementSibling2;
      function prevElementSibling(elem) {
        var _a7;
        var prev = elem.prev;
        while (prev !== null && !(0, domhandler_1.isTag)(prev))
          _a7 = prev, prev = _a7.prev;
        return prev;
      }
      exports.prevElementSibling = prevElementSibling;
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/manipulation.js
  var require_manipulation = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/manipulation.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
      function removeElement(elem) {
        if (elem.prev)
          elem.prev.next = elem.next;
        if (elem.next)
          elem.next.prev = elem.prev;
        if (elem.parent) {
          var childs = elem.parent.children;
          childs.splice(childs.lastIndexOf(elem), 1);
        }
      }
      exports.removeElement = removeElement;
      function replaceElement(elem, replacement) {
        var prev = replacement.prev = elem.prev;
        if (prev) {
          prev.next = replacement;
        }
        var next = replacement.next = elem.next;
        if (next) {
          next.prev = replacement;
        }
        var parent = replacement.parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs[childs.lastIndexOf(elem)] = replacement;
        }
      }
      exports.replaceElement = replaceElement;
      function appendChild(elem, child) {
        removeElement(child);
        child.next = null;
        child.parent = elem;
        if (elem.children.push(child) > 1) {
          var sibling = elem.children[elem.children.length - 2];
          sibling.next = child;
          child.prev = sibling;
        } else {
          child.prev = null;
        }
      }
      exports.appendChild = appendChild;
      function append2(elem, next) {
        removeElement(next);
        var parent = elem.parent;
        var currNext = elem.next;
        next.next = currNext;
        next.prev = elem;
        elem.next = next;
        next.parent = parent;
        if (currNext) {
          currNext.prev = next;
          if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
          }
        } else if (parent) {
          parent.children.push(next);
        }
      }
      exports.append = append2;
      function prependChild(elem, child) {
        removeElement(child);
        child.parent = elem;
        child.prev = null;
        if (elem.children.unshift(child) !== 1) {
          var sibling = elem.children[1];
          sibling.prev = child;
          child.next = sibling;
        } else {
          child.next = null;
        }
      }
      exports.prependChild = prependChild;
      function prepend(elem, prev) {
        removeElement(prev);
        var parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.indexOf(elem), 0, prev);
        }
        if (elem.prev) {
          elem.prev.next = prev;
        }
        prev.parent = parent;
        prev.prev = elem.prev;
        prev.next = elem;
        elem.prev = prev;
      }
      exports.prepend = prepend;
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/querying.js
  var require_querying = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/querying.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
      var domhandler_1 = require_lib3();
      function filter(test, node, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        if (!Array.isArray(node))
          node = [node];
        return find(test, node, recurse, limit);
      }
      exports.filter = filter;
      function find(test, nodes, recurse, limit) {
        var result = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
          var elem = nodes_1[_i];
          if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
              break;
          }
          if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
              break;
          }
        }
        return result;
      }
      exports.find = find;
      function findOneChild(test, nodes) {
        return nodes.find(test);
      }
      exports.findOneChild = findOneChild;
      function findOne2(test, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        var elem = null;
        for (var i = 0; i < nodes.length && !elem; i++) {
          var checked = nodes[i];
          if (!(0, domhandler_1.isTag)(checked)) {
            continue;
          } else if (test(checked)) {
            elem = checked;
          } else if (recurse && checked.children.length > 0) {
            elem = findOne2(test, checked.children);
          }
        }
        return elem;
      }
      exports.findOne = findOne2;
      function existsOne2(test, nodes) {
        return nodes.some(function(checked) {
          return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne2(test, checked.children));
        });
      }
      exports.existsOne = existsOne2;
      function findAll2(test, nodes) {
        var _a7;
        var result = [];
        var stack = nodes.filter(domhandler_1.isTag);
        var elem;
        while (elem = stack.shift()) {
          var children = (_a7 = elem.children) === null || _a7 === void 0 ? void 0 : _a7.filter(domhandler_1.isTag);
          if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
          }
          if (test(elem))
            result.push(elem);
        }
        return result;
      }
      exports.findAll = findAll2;
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/legacy.js
  var require_legacy2 = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/legacy.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
      var domhandler_1 = require_lib3();
      var querying_1 = require_querying();
      var Checks = {
        tag_name: function(name) {
          if (typeof name === "function") {
            return function(elem) {
              return (0, domhandler_1.isTag)(elem) && name(elem.name);
            };
          } else if (name === "*") {
            return domhandler_1.isTag;
          }
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && elem.name === name;
          };
        },
        tag_type: function(type) {
          if (typeof type === "function") {
            return function(elem) {
              return type(elem.type);
            };
          }
          return function(elem) {
            return elem.type === type;
          };
        },
        tag_contains: function(data) {
          if (typeof data === "function") {
            return function(elem) {
              return (0, domhandler_1.isText)(elem) && data(elem.data);
            };
          }
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && elem.data === data;
          };
        }
      };
      function getAttribCheck(attrib, value) {
        if (typeof value === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
        };
      }
      function combineFuncs(a, b) {
        return function(elem) {
          return a(elem) || b(elem);
        };
      }
      function compileTest(options) {
        var funcs = Object.keys(options).map(function(key2) {
          var value = options[key2];
          return Object.prototype.hasOwnProperty.call(Checks, key2) ? Checks[key2](value) : getAttribCheck(key2, value);
        });
        return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
      }
      function testElement(options, node) {
        var test = compileTest(options);
        return test ? test(node) : true;
      }
      exports.testElement = testElement;
      function getElements(options, nodes, recurse, limit) {
        if (limit === void 0) {
          limit = Infinity;
        }
        var test = compileTest(options);
        return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
      }
      exports.getElements = getElements;
      function getElementById(id, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (!Array.isArray(nodes))
          nodes = [nodes];
        return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
      }
      exports.getElementById = getElementById;
      function getElementsByTagName(tagName15, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_1.filter)(Checks.tag_name(tagName15), nodes, recurse, limit);
      }
      exports.getElementsByTagName = getElementsByTagName;
      function getElementsByTagType(type, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
      }
      exports.getElementsByTagType = getElementsByTagType;
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/helpers.js
  var require_helpers = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/helpers.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
      var domhandler_1 = require_lib3();
      function removeSubsets2(nodes) {
        var idx = nodes.length;
        while (--idx >= 0) {
          var node = nodes[idx];
          if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
          }
          for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
              nodes.splice(idx, 1);
              break;
            }
          }
        }
        return nodes;
      }
      exports.removeSubsets = removeSubsets2;
      function compareDocumentPosition(nodeA, nodeB) {
        var aParents = [];
        var bParents = [];
        if (nodeA === nodeB) {
          return 0;
        }
        var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
        while (current) {
          aParents.unshift(current);
          current = current.parent;
        }
        current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
        while (current) {
          bParents.unshift(current);
          current = current.parent;
        }
        var maxIdx = Math.min(aParents.length, bParents.length);
        var idx = 0;
        while (idx < maxIdx && aParents[idx] === bParents[idx]) {
          idx++;
        }
        if (idx === 0) {
          return 1;
        }
        var sharedParent = aParents[idx - 1];
        var siblings = sharedParent.children;
        var aSibling = aParents[idx];
        var bSibling = bParents[idx];
        if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
          if (sharedParent === nodeB) {
            return 4 | 16;
          }
          return 4;
        }
        if (sharedParent === nodeA) {
          return 2 | 8;
        }
        return 2;
      }
      exports.compareDocumentPosition = compareDocumentPosition;
      function uniqueSort(nodes) {
        nodes = nodes.filter(function(node, i, arr) {
          return !arr.includes(node, i + 1);
        });
        nodes.sort(function(a, b) {
          var relative = compareDocumentPosition(a, b);
          if (relative & 2) {
            return -1;
          } else if (relative & 4) {
            return 1;
          }
          return 0;
        });
        return nodes;
      }
      exports.uniqueSort = uniqueSort;
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/feeds.js
  var require_feeds = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/feeds.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFeed = void 0;
      var stringify_1 = require_stringify();
      var legacy_1 = require_legacy2();
      function getFeed(doc) {
        var feedRoot = getOneElement(isValidFeed, doc);
        return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
      }
      exports.getFeed = getFeed;
      function getAtomFeed(feedRoot) {
        var _a7;
        var childs = feedRoot.children;
        var feed = {
          type: "atom",
          items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
            var _a8;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href2 = (_a8 = getOneElement("link", children)) === null || _a8 === void 0 ? void 0 : _a8.attribs.href;
            if (href2) {
              entry.link = href2;
            }
            var description = fetch2("summary", children) || fetch2("content", children);
            if (description) {
              entry.description = description;
            }
            var pubDate = fetch2("updated", children);
            if (pubDate) {
              entry.pubDate = new Date(pubDate);
            }
            return entry;
          })
        };
        addConditionally(feed, "id", "id", childs);
        addConditionally(feed, "title", "title", childs);
        var href = (_a7 = getOneElement("link", childs)) === null || _a7 === void 0 ? void 0 : _a7.attribs.href;
        if (href) {
          feed.link = href;
        }
        addConditionally(feed, "description", "subtitle", childs);
        var updated = fetch2("updated", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "email", childs, true);
        return feed;
      }
      function getRssFeed(feedRoot) {
        var _a7, _b3;
        var childs = (_b3 = (_a7 = getOneElement("channel", feedRoot.children)) === null || _a7 === void 0 ? void 0 : _a7.children) !== null && _b3 !== void 0 ? _b3 : [];
        var feed = {
          type: feedRoot.name.substr(0, 3),
          id: "",
          items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch2("pubDate", children);
            if (pubDate)
              entry.pubDate = new Date(pubDate);
            return entry;
          })
        };
        addConditionally(feed, "title", "title", childs);
        addConditionally(feed, "link", "link", childs);
        addConditionally(feed, "description", "description", childs);
        var updated = fetch2("lastBuildDate", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "managingEditor", childs, true);
        return feed;
      }
      var MEDIA_KEYS_STRING = ["url", "type", "lang"];
      var MEDIA_KEYS_INT = [
        "fileSize",
        "bitrate",
        "framerate",
        "samplingrate",
        "channels",
        "duration",
        "height",
        "width"
      ];
      function getMediaElements(where) {
        return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
          var attribs = elem.attribs;
          var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault
          };
          for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
              media[attrib] = attribs[attrib];
            }
          }
          for (var _a7 = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a7 < MEDIA_KEYS_INT_1.length; _a7++) {
            var attrib = MEDIA_KEYS_INT_1[_a7];
            if (attribs[attrib]) {
              media[attrib] = parseInt(attribs[attrib], 10);
            }
          }
          if (attribs.expression) {
            media.expression = attribs.expression;
          }
          return media;
        });
      }
      function getOneElement(tagName15, node) {
        return (0, legacy_1.getElementsByTagName)(tagName15, node, true, 1)[0];
      }
      function fetch2(tagName15, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName15, where, recurse, 1)).trim();
      }
      function addConditionally(obj, prop2, tagName15, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        var val = fetch2(tagName15, where, recurse);
        if (val)
          obj[prop2] = val;
      }
      function isValidFeed(value) {
        return value === "rss" || value === "feed" || value === "rdf:RDF";
      }
    }
  });

  // node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/index.js"(exports) {
      "use strict";
      init_env();
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
      __exportStar2(require_stringify(), exports);
      __exportStar2(require_traversal(), exports);
      __exportStar2(require_manipulation(), exports);
      __exportStar2(require_querying(), exports);
      __exportStar2(require_legacy2(), exports);
      __exportStar2(require_helpers(), exports);
      __exportStar2(require_feeds(), exports);
      var domhandler_1 = require_lib3();
      Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
        return domhandler_1.isTag;
      } });
      Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
        return domhandler_1.isCDATA;
      } });
      Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
        return domhandler_1.isText;
      } });
      Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
        return domhandler_1.isComment;
      } });
      Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
        return domhandler_1.isDocument;
      } });
      Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
        return domhandler_1.hasChildren;
      } });
    }
  });

  // node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/FeedHandler.js
  var require_FeedHandler = __commonJS({
    "node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/FeedHandler.js"(exports) {
      "use strict";
      init_env();
      var __extends2 = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseFeed = exports.FeedHandler = exports.getFeed = void 0;
      var domhandler_1 = __importDefault2(require_lib3());
      var domutils_1 = require_lib6();
      Object.defineProperty(exports, "getFeed", { enumerable: true, get: function() {
        return domutils_1.getFeed;
      } });
      var Parser_1 = require_Parser();
      var FeedHandler = function(_super) {
        __extends2(FeedHandler2, _super);
        function FeedHandler2(callback, options) {
          var _this = this;
          if (typeof callback === "object") {
            callback = void 0;
            options = callback;
          }
          _this = _super.call(this, callback, options) || this;
          return _this;
        }
        FeedHandler2.prototype.onend = function() {
          var feed = (0, domutils_1.getFeed)(this.dom);
          if (feed) {
            this.feed = feed;
            this.handleCallback(null);
          } else {
            this.handleCallback(new Error("couldn't find root of feed"));
          }
        };
        return FeedHandler2;
      }(domhandler_1.default);
      exports.FeedHandler = FeedHandler;
      function parseFeed(feed, options) {
        if (options === void 0) {
          options = { xmlMode: true };
        }
        var handler5 = new domhandler_1.default(null, options);
        new Parser_1.Parser(handler5, options).end(feed);
        return (0, domutils_1.getFeed)(handler5.dom);
      }
      exports.parseFeed = parseFeed;
    }
  });

  // node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/index.js
  var require_lib7 = __commonJS({
    "node_modules/.pnpm/htmlparser2@7.2.0/node_modules/htmlparser2/lib/index.js"(exports) {
      "use strict";
      init_env();
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar2 = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
      var Parser_1 = require_Parser();
      Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
        return Parser_1.Parser;
      } });
      var domhandler_1 = require_lib3();
      Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
        return domhandler_1.DomHandler;
      } });
      Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
        return domhandler_1.DomHandler;
      } });
      function parseDocument(data, options) {
        var handler5 = new domhandler_1.DomHandler(void 0, options);
        new Parser_1.Parser(handler5, options).end(data);
        return handler5.root;
      }
      exports.parseDocument = parseDocument;
      function parseDOM(data, options) {
        return parseDocument(data, options).children;
      }
      exports.parseDOM = parseDOM;
      function createDomStream(cb, options, elementCb) {
        var handler5 = new domhandler_1.DomHandler(cb, options, elementCb);
        return new Parser_1.Parser(handler5, options);
      }
      exports.createDomStream = createDomStream;
      var Tokenizer_1 = require_Tokenizer();
      Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
        return __importDefault2(Tokenizer_1).default;
      } });
      var ElementType = __importStar2(require_lib2());
      exports.ElementType = ElementType;
      __exportStar2(require_FeedHandler(), exports);
      exports.DomUtils = __importStar2(require_lib6());
      var FeedHandler_1 = require_FeedHandler();
      Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
        return FeedHandler_1.FeedHandler;
      } });
    }
  });

  // src/vendor/perf_hooks.js
  var perf_hooks_exports = {};
  __export(perf_hooks_exports, {
    Performance: () => Performance,
    PerformanceEntry: () => PerformanceEntry,
    PerformanceMark: () => PerformanceMark,
    PerformanceMeasure: () => PerformanceMeasure,
    PerformanceNavigation: () => PerformanceNavigation,
    PerformanceNavigationTiming: () => PerformanceNavigationTiming,
    PerformanceObserver: () => PerformanceObserver,
    PerformanceObserverEntryList: () => PerformanceObserverEntryList,
    PerformanceResourceTiming: () => PerformanceResourceTiming,
    PerformanceTiming: () => PerformanceTiming,
    performance: () => performance
  });
  var performance, Performance, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceNavigation, PerformanceNavigationTiming, PerformanceObserver, PerformanceObserverEntryList, PerformanceResourceTiming, PerformanceTiming;
  var init_perf_hooks = __esm({
    "src/vendor/perf_hooks.js"() {
      init_env();
      ({
        performance,
        Performance,
        PerformanceEntry,
        PerformanceMark,
        PerformanceMeasure,
        PerformanceNavigation,
        PerformanceNavigationTiming,
        PerformanceObserver,
        PerformanceObserverEntryList,
        PerformanceResourceTiming,
        PerformanceTiming
      } = globalThis);
    }
  });

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/commonjs/perf_hooks.cjs
  var require_perf_hooks = __commonJS({
    "node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/commonjs/perf_hooks.cjs"(exports) {
      init_env();
      try {
        const { performance: performance3 } = (init_perf_hooks(), __toCommonJS(perf_hooks_exports));
        exports.performance = performance3;
      } catch (fallback) {
        exports.performance = { now() {
          return +new Date();
        } };
      }
    }
  });

  // node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js
  var require_boolbase = __commonJS({
    "node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js"(exports, module) {
      init_env();
      module.exports = {
        trueFunc: function trueFunc() {
          return true;
        },
        falseFunc: function falseFunc() {
          return false;
        }
      };
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/types.js
  var require_types2 = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/types.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AttributeAction = exports.IgnoreCaseMode = exports.SelectorType = void 0;
      var SelectorType;
      (function(SelectorType2) {
        SelectorType2["Attribute"] = "attribute";
        SelectorType2["Pseudo"] = "pseudo";
        SelectorType2["PseudoElement"] = "pseudo-element";
        SelectorType2["Tag"] = "tag";
        SelectorType2["Universal"] = "universal";
        SelectorType2["Adjacent"] = "adjacent";
        SelectorType2["Child"] = "child";
        SelectorType2["Descendant"] = "descendant";
        SelectorType2["Parent"] = "parent";
        SelectorType2["Sibling"] = "sibling";
        SelectorType2["ColumnCombinator"] = "column-combinator";
      })(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
      exports.IgnoreCaseMode = {
        Unknown: null,
        QuirksMode: "quirks",
        IgnoreCase: true,
        CaseSensitive: false
      };
      var AttributeAction;
      (function(AttributeAction2) {
        AttributeAction2["Any"] = "any";
        AttributeAction2["Element"] = "element";
        AttributeAction2["End"] = "end";
        AttributeAction2["Equals"] = "equals";
        AttributeAction2["Exists"] = "exists";
        AttributeAction2["Hyphen"] = "hyphen";
        AttributeAction2["Not"] = "not";
        AttributeAction2["Start"] = "start";
      })(AttributeAction = exports.AttributeAction || (exports.AttributeAction = {}));
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/parse.js
  var require_parse = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/parse.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = exports.isTraversal = void 0;
      var types_1 = require_types2();
      var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
      var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
      var actionTypes = /* @__PURE__ */ new Map([
        [126, types_1.AttributeAction.Element],
        [94, types_1.AttributeAction.Start],
        [36, types_1.AttributeAction.End],
        [42, types_1.AttributeAction.Any],
        [33, types_1.AttributeAction.Not],
        [124, types_1.AttributeAction.Hyphen]
      ]);
      var unpackPseudos = /* @__PURE__ */ new Set([
        "has",
        "not",
        "matches",
        "is",
        "where",
        "host",
        "host-context"
      ]);
      function isTraversal(selector) {
        switch (selector.type) {
          case types_1.SelectorType.Adjacent:
          case types_1.SelectorType.Child:
          case types_1.SelectorType.Descendant:
          case types_1.SelectorType.Parent:
          case types_1.SelectorType.Sibling:
          case types_1.SelectorType.ColumnCombinator:
            return true;
          default:
            return false;
        }
      }
      exports.isTraversal = isTraversal;
      var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
      function funescape(_, escaped, escapedWhitespace) {
        var high = parseInt(escaped, 16) - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }
      function unescapeCSS(str) {
        return str.replace(reEscape, funescape);
      }
      function isQuote(c) {
        return c === 39 || c === 34;
      }
      function isWhitespace(c) {
        return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
      }
      function parse4(selector) {
        var subselects = [];
        var endIndex = parseSelector(subselects, "".concat(selector), 0);
        if (endIndex < selector.length) {
          throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
        }
        return subselects;
      }
      exports.parse = parse4;
      function parseSelector(subselects, selector, selectorIndex) {
        var tokens = [];
        function getName2(offset) {
          var match2 = selector.slice(selectorIndex + offset).match(reName);
          if (!match2) {
            throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
          }
          var name = match2[0];
          selectorIndex += offset + name.length;
          return unescapeCSS(name);
        }
        function stripWhitespace(offset) {
          selectorIndex += offset;
          while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
          }
        }
        function readValueWithParenthesis() {
          selectorIndex += 1;
          var start = selectorIndex;
          var counter = 1;
          for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
              counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
              counter--;
            }
          }
          if (counter) {
            throw new Error("Parenthesis not matched");
          }
          return unescapeCSS(selector.slice(start, selectorIndex - 1));
        }
        function isEscaped(pos) {
          var slashCount = 0;
          while (selector.charCodeAt(--pos) === 92)
            slashCount++;
          return (slashCount & 1) === 1;
        }
        function ensureNotTraversal() {
          if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
          }
        }
        function addTraversal(type) {
          if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
          }
          ensureNotTraversal();
          tokens.push({ type });
        }
        function addSpecialAttribute(name, action2) {
          tokens.push({
            type: types_1.SelectorType.Attribute,
            name,
            action: action2,
            value: getName2(1),
            namespace: null,
            ignoreCase: "quirks"
          });
        }
        function finalizeSubselector() {
          if (tokens.length && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens.pop();
          }
          if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
          }
          subselects.push(tokens);
        }
        stripWhitespace(0);
        if (selector.length === selectorIndex) {
          return selectorIndex;
        }
        loop:
          while (selectorIndex < selector.length) {
            var firstChar = selector.charCodeAt(selectorIndex);
            switch (firstChar) {
              case 32:
              case 9:
              case 10:
              case 12:
              case 13: {
                if (tokens.length === 0 || tokens[0].type !== types_1.SelectorType.Descendant) {
                  ensureNotTraversal();
                  tokens.push({ type: types_1.SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
              }
              case 62: {
                addTraversal(types_1.SelectorType.Child);
                stripWhitespace(1);
                break;
              }
              case 60: {
                addTraversal(types_1.SelectorType.Parent);
                stripWhitespace(1);
                break;
              }
              case 126: {
                addTraversal(types_1.SelectorType.Sibling);
                stripWhitespace(1);
                break;
              }
              case 43: {
                addTraversal(types_1.SelectorType.Adjacent);
                stripWhitespace(1);
                break;
              }
              case 46: {
                addSpecialAttribute("class", types_1.AttributeAction.Element);
                break;
              }
              case 35: {
                addSpecialAttribute("id", types_1.AttributeAction.Equals);
                break;
              }
              case 91: {
                stripWhitespace(1);
                var name_1 = void 0;
                var namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124) {
                  name_1 = getName2(1);
                } else if (selector.startsWith("*|", selectorIndex)) {
                  namespace = "*";
                  name_1 = getName2(2);
                } else {
                  name_1 = getName2(0);
                  if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
                    namespace = name_1;
                    name_1 = getName2(1);
                  }
                }
                stripWhitespace(0);
                var action = types_1.AttributeAction.Exists;
                var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                  action = possibleAction;
                  if (selector.charCodeAt(selectorIndex + 1) !== 61) {
                    throw new Error("Expected `=`");
                  }
                  stripWhitespace(2);
                } else if (selector.charCodeAt(selectorIndex) === 61) {
                  action = types_1.AttributeAction.Equals;
                  stripWhitespace(1);
                }
                var value = "";
                var ignoreCase2 = null;
                if (action !== "exists") {
                  if (isQuote(selector.charCodeAt(selectorIndex))) {
                    var quote = selector.charCodeAt(selectorIndex);
                    var sectionEnd = selectorIndex + 1;
                    while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                      sectionEnd += 1;
                    }
                    if (selector.charCodeAt(sectionEnd) !== quote) {
                      throw new Error("Attribute value didn't end");
                    }
                    value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                    selectorIndex = sectionEnd + 1;
                  } else {
                    var valueStart = selectorIndex;
                    while (selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                      selectorIndex += 1;
                    }
                    value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                  }
                  stripWhitespace(0);
                  var forceIgnore = selector.charCodeAt(selectorIndex) | 32;
                  if (forceIgnore === 115) {
                    ignoreCase2 = false;
                    stripWhitespace(1);
                  } else if (forceIgnore === 105) {
                    ignoreCase2 = true;
                    stripWhitespace(1);
                  }
                }
                if (selector.charCodeAt(selectorIndex) !== 93) {
                  throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                var attributeSelector = {
                  type: types_1.SelectorType.Attribute,
                  name: name_1,
                  action,
                  value,
                  namespace,
                  ignoreCase: ignoreCase2
                };
                tokens.push(attributeSelector);
                break;
              }
              case 58: {
                if (selector.charCodeAt(selectorIndex + 1) === 58) {
                  tokens.push({
                    type: types_1.SelectorType.PseudoElement,
                    name: getName2(2).toLowerCase(),
                    data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
                  });
                  continue;
                }
                var name_2 = getName2(1).toLowerCase();
                var data = null;
                if (selector.charCodeAt(selectorIndex) === 40) {
                  if (unpackPseudos.has(name_2)) {
                    if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                      throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                    }
                    data = [];
                    selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                    if (selector.charCodeAt(selectorIndex) !== 41) {
                      throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                    }
                    selectorIndex += 1;
                  } else {
                    data = readValueWithParenthesis();
                    if (stripQuotesFromPseudos.has(name_2)) {
                      var quot = data.charCodeAt(0);
                      if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                        data = data.slice(1, -1);
                      }
                    }
                    data = unescapeCSS(data);
                  }
                }
                tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data });
                break;
              }
              case 44: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
              }
              default: {
                if (selector.startsWith("/*", selectorIndex)) {
                  var endIndex = selector.indexOf("*/", selectorIndex + 2);
                  if (endIndex < 0) {
                    throw new Error("Comment was not terminated");
                  }
                  selectorIndex = endIndex + 2;
                  if (tokens.length === 0) {
                    stripWhitespace(0);
                  }
                  break;
                }
                var namespace = null;
                var name_3 = void 0;
                if (firstChar === 42) {
                  selectorIndex += 1;
                  name_3 = "*";
                } else if (firstChar === 124) {
                  name_3 = "";
                  if (selector.charCodeAt(selectorIndex + 1) === 124) {
                    addTraversal(types_1.SelectorType.ColumnCombinator);
                    stripWhitespace(2);
                    break;
                  }
                } else if (reName.test(selector.slice(selectorIndex))) {
                  name_3 = getName2(0);
                } else {
                  break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
                  namespace = name_3;
                  if (selector.charCodeAt(selectorIndex + 1) === 42) {
                    name_3 = "*";
                    selectorIndex += 2;
                  } else {
                    name_3 = getName2(1);
                  }
                }
                tokens.push(name_3 === "*" ? { type: types_1.SelectorType.Universal, namespace } : { type: types_1.SelectorType.Tag, name: name_3, namespace });
              }
            }
          }
        finalizeSubselector();
        return selectorIndex;
      }
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/stringify.js
  var require_stringify2 = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/stringify.js"(exports) {
      "use strict";
      init_env();
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from2, pack2) {
        if (pack2 || arguments.length === 2)
          for (var i = 0, l = from2.length, ar; i < l; i++) {
            if (ar || !(i in from2)) {
              if (!ar)
                ar = Array.prototype.slice.call(from2, 0, i);
              ar[i] = from2[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from2));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = void 0;
      var types_1 = require_types2();
      var attribValChars = ["\\", '"'];
      var pseudoValChars = __spreadArray2(__spreadArray2([], attribValChars, true), ["(", ")"], false);
      var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInName = new Set(__spreadArray2(__spreadArray2([], pseudoValChars, true), [
        "~",
        "^",
        "$",
        "*",
        "+",
        "!",
        "|",
        ":",
        "[",
        "]",
        " ",
        "."
      ], false).map(function(c) {
        return c.charCodeAt(0);
      }));
      function stringify(selector) {
        return selector.map(function(token) {
          return token.map(stringifyToken).join("");
        }).join(", ");
      }
      exports.stringify = stringify;
      function stringifyToken(token, index, arr) {
        switch (token.type) {
          case types_1.SelectorType.Child:
            return index === 0 ? "> " : " > ";
          case types_1.SelectorType.Parent:
            return index === 0 ? "< " : " < ";
          case types_1.SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
          case types_1.SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
          case types_1.SelectorType.Descendant:
            return " ";
          case types_1.SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
          case types_1.SelectorType.Universal:
            return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : "".concat(getNamespace(token.namespace), "*");
          case types_1.SelectorType.Tag:
            return getNamespacedName(token);
          case types_1.SelectorType.PseudoElement:
            return "::".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(escapeName(token.data, charsToEscapeInPseudoValue), ")"));
          case types_1.SelectorType.Pseudo:
            return ":".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data), ")"));
          case types_1.SelectorType.Attribute: {
            if (token.name === "id" && token.action === types_1.AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
              return "#".concat(escapeName(token.value, charsToEscapeInName));
            }
            if (token.name === "class" && token.action === types_1.AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
              return ".".concat(escapeName(token.value, charsToEscapeInName));
            }
            var name_1 = getNamespacedName(token);
            if (token.action === types_1.AttributeAction.Exists) {
              return "[".concat(name_1, "]");
            }
            return "[".concat(name_1).concat(getActionValue(token.action), '="').concat(escapeName(token.value, charsToEscapeInAttributeValue), '"').concat(token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s", "]");
          }
        }
      }
      function getActionValue(action) {
        switch (action) {
          case types_1.AttributeAction.Equals:
            return "";
          case types_1.AttributeAction.Element:
            return "~";
          case types_1.AttributeAction.Start:
            return "^";
          case types_1.AttributeAction.End:
            return "$";
          case types_1.AttributeAction.Any:
            return "*";
          case types_1.AttributeAction.Not:
            return "!";
          case types_1.AttributeAction.Hyphen:
            return "|";
          case types_1.AttributeAction.Exists:
            throw new Error("Shouldn't be here");
        }
      }
      function getNamespacedName(token) {
        return "".concat(getNamespace(token.namespace)).concat(escapeName(token.name, charsToEscapeInName));
      }
      function getNamespace(namespace) {
        return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
      }
      function escapeName(str, charsToEscape) {
        var lastIdx = 0;
        var ret = "";
        for (var i = 0; i < str.length; i++) {
          if (charsToEscape.has(str.charCodeAt(i))) {
            ret += "".concat(str.slice(lastIdx, i), "\\").concat(str.charAt(i));
            lastIdx = i + 1;
          }
        }
        return ret.length > 0 ? ret + str.slice(lastIdx) : str;
      }
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/index.js
  var require_commonjs = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/index.js"(exports) {
      "use strict";
      init_env();
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = exports.parse = exports.isTraversal = void 0;
      __exportStar2(require_types2(), exports);
      var parse_1 = require_parse();
      Object.defineProperty(exports, "isTraversal", { enumerable: true, get: function() {
        return parse_1.isTraversal;
      } });
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var stringify_1 = require_stringify2();
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return stringify_1.stringify;
      } });
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/procedure.js
  var require_procedure = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/procedure.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isTraversal = exports.procedure = void 0;
      exports.procedure = {
        universal: 50,
        tag: 30,
        attribute: 1,
        pseudo: 0,
        "pseudo-element": 0,
        "column-combinator": -1,
        descendant: -1,
        child: -1,
        parent: -1,
        sibling: -1,
        adjacent: -1,
        _flexibleDescendant: -1
      };
      function isTraversal(t) {
        return exports.procedure[t.type] < 0;
      }
      exports.isTraversal = isTraversal;
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/sort.js
  var require_sort = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/sort.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      var css_what_1 = require_commonjs();
      var procedure_1 = require_procedure();
      var attributes = {
        exists: 10,
        equals: 8,
        not: 7,
        start: 6,
        end: 6,
        any: 5,
        hyphen: 4,
        element: 4
      };
      function sortByProcedure(arr) {
        var procs = arr.map(getProcedure);
        for (var i = 1; i < arr.length; i++) {
          var procNew = procs[i];
          if (procNew < 0)
            continue;
          for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
          }
        }
      }
      exports.default = sortByProcedure;
      function getProcedure(token) {
        var proc = procedure_1.procedure[token.type];
        if (token.type === css_what_1.SelectorType.Attribute) {
          proc = attributes[token.action];
          if (proc === attributes.equals && token.name === "id") {
            proc = 9;
          }
          if (token.ignoreCase) {
            proc >>= 1;
          }
        } else if (token.type === css_what_1.SelectorType.Pseudo) {
          if (!token.data) {
            proc = 3;
          } else if (token.name === "has" || token.name === "contains") {
            proc = 0;
          } else if (Array.isArray(token.data)) {
            proc = 0;
            for (var i = 0; i < token.data.length; i++) {
              if (token.data[i].length !== 1)
                continue;
              var cur = getProcedure(token.data[i][0]);
              if (cur === 0) {
                proc = 0;
                break;
              }
              if (cur > proc)
                proc = cur;
            }
            if (token.data.length > 1 && proc > 0)
              proc -= 1;
          } else {
            proc = 1;
          }
        }
        return proc;
      }
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/attributes.js
  var require_attributes = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/attributes.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeRules = void 0;
      var boolbase_1 = require_boolbase();
      var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
      function escapeRegex(value) {
        return value.replace(reChars, "\\$&");
      }
      var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
        "accept",
        "accept-charset",
        "align",
        "alink",
        "axis",
        "bgcolor",
        "charset",
        "checked",
        "clear",
        "codetype",
        "color",
        "compact",
        "declare",
        "defer",
        "dir",
        "direction",
        "disabled",
        "enctype",
        "face",
        "frame",
        "hreflang",
        "http-equiv",
        "lang",
        "language",
        "link",
        "media",
        "method",
        "multiple",
        "nohref",
        "noresize",
        "noshade",
        "nowrap",
        "readonly",
        "rel",
        "rev",
        "rules",
        "scope",
        "scrolling",
        "selected",
        "shape",
        "target",
        "text",
        "type",
        "valign",
        "valuetype",
        "vlink"
      ]);
      function shouldIgnoreCase(selector, options) {
        return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
      }
      exports.attributeRules = {
        equals: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name;
          var value = data.value;
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter2.getAttributeValue(elem, name);
              return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
          }
          return function(elem) {
            return adapter2.getAttributeValue(elem, name) === value && next(elem);
          };
        },
        hyphen: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = value.length;
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
              var attr = adapter2.getAttributeValue(elem, name);
              return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
          }
          return function hyphen(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
          };
        },
        element: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name, value = data.value;
          if (/\s/.test(value)) {
            return boolbase_1.falseFunc;
          }
          var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
          return function element(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
          };
        },
        exists: function(next, _a7, _b3) {
          var name = _a7.name;
          var adapter2 = _b3.adapter;
          return function(elem) {
            return adapter2.hasAttrib(elem, name) && next(elem);
          };
        },
        start: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = value.length;
          if (len === 0) {
            return boolbase_1.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter2.getAttributeValue(elem, name);
              return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
          }
          return function(elem) {
            var _a7;
            return !!((_a7 = adapter2.getAttributeValue(elem, name)) === null || _a7 === void 0 ? void 0 : _a7.startsWith(value)) && next(elem);
          };
        },
        end: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = -value.length;
          if (len === 0) {
            return boolbase_1.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var _a7;
              return ((_a7 = adapter2.getAttributeValue(elem, name)) === null || _a7 === void 0 ? void 0 : _a7.substr(len).toLowerCase()) === value && next(elem);
            };
          }
          return function(elem) {
            var _a7;
            return !!((_a7 = adapter2.getAttributeValue(elem, name)) === null || _a7 === void 0 ? void 0 : _a7.endsWith(value)) && next(elem);
          };
        },
        any: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name, value = data.value;
          if (value === "") {
            return boolbase_1.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            var regex_1 = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
              var attr = adapter2.getAttributeValue(elem, name);
              return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
            };
          }
          return function(elem) {
            var _a7;
            return !!((_a7 = adapter2.getAttributeValue(elem, name)) === null || _a7 === void 0 ? void 0 : _a7.includes(value)) && next(elem);
          };
        },
        not: function(next, data, options) {
          var adapter2 = options.adapter;
          var name = data.name;
          var value = data.value;
          if (value === "") {
            return function(elem) {
              return !!adapter2.getAttributeValue(elem, name) && next(elem);
            };
          } else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter2.getAttributeValue(elem, name);
              return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
          }
          return function(elem) {
            return adapter2.getAttributeValue(elem, name) !== value && next(elem);
          };
        }
      };
    }
  });

  // node_modules/.pnpm/nth-check@2.0.1/node_modules/nth-check/lib/parse.js
  var require_parse2 = __commonJS({
    "node_modules/.pnpm/nth-check@2.0.1/node_modules/nth-check/lib/parse.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = void 0;
      var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
      var ZERO = "0".charCodeAt(0);
      var NINE = "9".charCodeAt(0);
      function parse4(formula) {
        formula = formula.trim().toLowerCase();
        if (formula === "even") {
          return [2, 0];
        } else if (formula === "odd") {
          return [2, 1];
        }
        var idx = 0;
        var a = 0;
        var sign = readSign();
        var number = readNumber();
        if (idx < formula.length && formula.charAt(idx) === "n") {
          idx++;
          a = sign * (number !== null && number !== void 0 ? number : 1);
          skipWhitespace();
          if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
          } else {
            sign = number = 0;
          }
        }
        if (number === null || idx < formula.length) {
          throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
        }
        return [a, sign * number];
        function readSign() {
          if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
          }
          if (formula.charAt(idx) === "+") {
            idx++;
          }
          return 1;
        }
        function readNumber() {
          var start = idx;
          var value = 0;
          while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
          }
          return idx === start ? null : value;
        }
        function skipWhitespace() {
          while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
            idx++;
          }
        }
      }
      exports.parse = parse4;
    }
  });

  // node_modules/.pnpm/nth-check@2.0.1/node_modules/nth-check/lib/compile.js
  var require_compile = __commonJS({
    "node_modules/.pnpm/nth-check@2.0.1/node_modules/nth-check/lib/compile.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compile = void 0;
      var boolbase_1 = require_boolbase();
      function compile2(parsed) {
        var a = parsed[0];
        var b = parsed[1] - 1;
        if (b < 0 && a <= 0)
          return boolbase_1.falseFunc;
        if (a === -1)
          return function(index) {
            return index <= b;
          };
        if (a === 0)
          return function(index) {
            return index === b;
          };
        if (a === 1)
          return b < 0 ? boolbase_1.trueFunc : function(index) {
            return index >= b;
          };
        var absA = Math.abs(a);
        var bMod = (b % absA + absA) % absA;
        return a > 1 ? function(index) {
          return index >= b && index % absA === bMod;
        } : function(index) {
          return index <= b && index % absA === bMod;
        };
      }
      exports.compile = compile2;
    }
  });

  // node_modules/.pnpm/nth-check@2.0.1/node_modules/nth-check/lib/index.js
  var require_lib8 = __commonJS({
    "node_modules/.pnpm/nth-check@2.0.1/node_modules/nth-check/lib/index.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compile = exports.parse = void 0;
      var parse_1 = require_parse2();
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var compile_1 = require_compile();
      Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
        return compile_1.compile;
      } });
      function nthCheck(formula) {
        return (0, compile_1.compile)((0, parse_1.parse)(formula));
      }
      exports.default = nthCheck;
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/filters.js
  var require_filters = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/filters.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.filters = void 0;
      var nth_check_1 = __importDefault2(require_lib8());
      var boolbase_1 = require_boolbase();
      function getChildFunc(next, adapter2) {
        return function(elem) {
          var parent = adapter2.getParent(elem);
          return parent != null && adapter2.isTag(parent) && next(elem);
        };
      }
      exports.filters = {
        contains: function(next, text, _a7) {
          var adapter2 = _a7.adapter;
          return function contains(elem) {
            return next(elem) && adapter2.getText(elem).includes(text);
          };
        },
        icontains: function(next, text, _a7) {
          var adapter2 = _a7.adapter;
          var itext = text.toLowerCase();
          return function icontains(elem) {
            return next(elem) && adapter2.getText(elem).toLowerCase().includes(itext);
          };
        },
        "nth-child": function(next, rule, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter2);
          return function nthChild(elem) {
            var siblings = adapter2.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
              if (equals(elem, siblings[i]))
                break;
              if (adapter2.isTag(siblings[i])) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-last-child": function(next, rule, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter2);
          return function nthLastChild(elem) {
            var siblings = adapter2.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
              if (equals(elem, siblings[i]))
                break;
              if (adapter2.isTag(siblings[i])) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-of-type": function(next, rule, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter2);
          return function nthOfType(elem) {
            var siblings = adapter2.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === adapter2.getName(elem)) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-last-of-type": function(next, rule, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter2);
          return function nthLastOfType(elem) {
            var siblings = adapter2.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === adapter2.getName(elem)) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        root: function(next, _rule, _a7) {
          var adapter2 = _a7.adapter;
          return function(elem) {
            var parent = adapter2.getParent(elem);
            return (parent == null || !adapter2.isTag(parent)) && next(elem);
          };
        },
        scope: function(next, rule, options, context) {
          var equals = options.equals;
          if (!context || context.length === 0) {
            return exports.filters.root(next, rule, options);
          }
          if (context.length === 1) {
            return function(elem) {
              return equals(context[0], elem) && next(elem);
            };
          }
          return function(elem) {
            return context.includes(elem) && next(elem);
          };
        },
        hover: dynamicStatePseudo("isHovered"),
        visited: dynamicStatePseudo("isVisited"),
        active: dynamicStatePseudo("isActive")
      };
      function dynamicStatePseudo(name) {
        return function dynamicPseudo(next, _rule, _a7) {
          var adapter2 = _a7.adapter;
          var func = adapter2[name];
          if (typeof func !== "function") {
            return boolbase_1.falseFunc;
          }
          return function active(elem) {
            return func(elem) && next(elem);
          };
        };
      }
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/pseudos.js
  var require_pseudos = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/pseudos.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.verifyPseudoArgs = exports.pseudos = void 0;
      exports.pseudos = {
        empty: function(elem, _a7) {
          var adapter2 = _a7.adapter;
          return !adapter2.getChildren(elem).some(function(elem2) {
            return adapter2.isTag(elem2) || adapter2.getText(elem2) !== "";
          });
        },
        "first-child": function(elem, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var firstChild = adapter2.getSiblings(elem).find(function(elem2) {
            return adapter2.isTag(elem2);
          });
          return firstChild != null && equals(elem, firstChild);
        },
        "last-child": function(elem, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var siblings = adapter2.getSiblings(elem);
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              return true;
            if (adapter2.isTag(siblings[i]))
              break;
          }
          return false;
        },
        "first-of-type": function(elem, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var siblings = adapter2.getSiblings(elem);
          var elemName = adapter2.getName(elem);
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              return true;
            if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === elemName) {
              break;
            }
          }
          return false;
        },
        "last-of-type": function(elem, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var siblings = adapter2.getSiblings(elem);
          var elemName = adapter2.getName(elem);
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              return true;
            if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === elemName) {
              break;
            }
          }
          return false;
        },
        "only-of-type": function(elem, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          var elemName = adapter2.getName(elem);
          return adapter2.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter2.isTag(sibling) || adapter2.getName(sibling) !== elemName;
          });
        },
        "only-child": function(elem, _a7) {
          var adapter2 = _a7.adapter, equals = _a7.equals;
          return adapter2.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter2.isTag(sibling);
          });
        }
      };
      function verifyPseudoArgs(func, name, subselect) {
        if (subselect === null) {
          if (func.length > 2) {
            throw new Error("pseudo-selector :".concat(name, " requires an argument"));
          }
        } else if (func.length === 2) {
          throw new Error("pseudo-selector :".concat(name, " doesn't have any arguments"));
        }
      }
      exports.verifyPseudoArgs = verifyPseudoArgs;
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/aliases.js
  var require_aliases = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/aliases.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.aliases = void 0;
      exports.aliases = {
        "any-link": ":is(a, area, link)[href]",
        link: ":any-link:not(:visited)",
        disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
        enabled: ":not(:disabled)",
        checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
        required: ":is(input, select, textarea)[required]",
        optional: ":is(input, select, textarea):not([required])",
        selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
        checkbox: "[type=checkbox]",
        file: "[type=file]",
        password: "[type=password]",
        radio: "[type=radio]",
        reset: "[type=reset]",
        image: "[type=image]",
        submit: "[type=submit]",
        parent: ":not(:empty)",
        header: ":is(h1, h2, h3, h4, h5, h6)",
        button: ":is(button, input[type=button])",
        input: ":is(input, textarea, select, button)",
        text: "input:is(:not([type!='']), [type=text])"
      };
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/subselects.js
  var require_subselects = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/subselects.js"(exports) {
      "use strict";
      init_env();
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from2, pack2) {
        if (pack2 || arguments.length === 2)
          for (var i = 0, l = from2.length, ar; i < l; i++) {
            if (ar || !(i in from2)) {
              if (!ar)
                ar = Array.prototype.slice.call(from2, 0, i);
              ar[i] = from2[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from2));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
      var boolbase_1 = require_boolbase();
      var procedure_1 = require_procedure();
      exports.PLACEHOLDER_ELEMENT = {};
      function ensureIsTag(next, adapter2) {
        if (next === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        return function(elem) {
          return adapter2.isTag(elem) && next(elem);
        };
      }
      exports.ensureIsTag = ensureIsTag;
      function getNextSiblings(elem, adapter2) {
        var siblings = adapter2.getSiblings(elem);
        if (siblings.length <= 1)
          return [];
        var elemIndex = siblings.indexOf(elem);
        if (elemIndex < 0 || elemIndex === siblings.length - 1)
          return [];
        return siblings.slice(elemIndex + 1).filter(adapter2.isTag);
      }
      exports.getNextSiblings = getNextSiblings;
      var is2 = function(next, token, options, context, compileToken) {
        var opts = {
          xmlMode: !!options.xmlMode,
          adapter: options.adapter,
          equals: options.equals
        };
        var func = compileToken(token, opts, context);
        return function(elem) {
          return func(elem) && next(elem);
        };
      };
      exports.subselects = {
        is: is2,
        matches: is2,
        where: is2,
        not: function(next, token, options, context, compileToken) {
          var opts = {
            xmlMode: !!options.xmlMode,
            adapter: options.adapter,
            equals: options.equals
          };
          var func = compileToken(token, opts, context);
          if (func === boolbase_1.falseFunc)
            return next;
          if (func === boolbase_1.trueFunc)
            return boolbase_1.falseFunc;
          return function not(elem) {
            return !func(elem) && next(elem);
          };
        },
        has: function(next, subselect, options, _context, compileToken) {
          var adapter2 = options.adapter;
          var opts = {
            xmlMode: !!options.xmlMode,
            adapter: adapter2,
            equals: options.equals
          };
          var context = subselect.some(function(s) {
            return s.some(procedure_1.isTraversal);
          }) ? [exports.PLACEHOLDER_ELEMENT] : void 0;
          var compiled = compileToken(subselect, opts, context);
          if (compiled === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (compiled === boolbase_1.trueFunc) {
            return function(elem) {
              return adapter2.getChildren(elem).some(adapter2.isTag) && next(elem);
            };
          }
          var hasElement = ensureIsTag(compiled, adapter2);
          var _a7 = compiled.shouldTestNextSiblings, shouldTestNextSiblings = _a7 === void 0 ? false : _a7;
          if (context) {
            return function(elem) {
              context[0] = elem;
              var childs = adapter2.getChildren(elem);
              var nextElements = shouldTestNextSiblings ? __spreadArray2(__spreadArray2([], childs, true), getNextSiblings(elem, adapter2), true) : childs;
              return next(elem) && adapter2.existsOne(hasElement, nextElements);
            };
          }
          return function(elem) {
            return next(elem) && adapter2.existsOne(hasElement, adapter2.getChildren(elem));
          };
        }
      };
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/index.js
  var require_pseudo_selectors = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/pseudo-selectors/index.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
      var boolbase_1 = require_boolbase();
      var css_what_1 = require_commonjs();
      var filters_1 = require_filters();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return filters_1.filters;
      } });
      var pseudos_1 = require_pseudos();
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return pseudos_1.pseudos;
      } });
      var aliases_1 = require_aliases();
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return aliases_1.aliases;
      } });
      var subselects_1 = require_subselects();
      function compilePseudoSelector(next, selector, options, context, compileToken) {
        var name = selector.name, data = selector.data;
        if (Array.isArray(data)) {
          return subselects_1.subselects[name](next, data, options, context, compileToken);
        }
        if (name in aliases_1.aliases) {
          if (data != null) {
            throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
          }
          var alias = (0, css_what_1.parse)(aliases_1.aliases[name]);
          return subselects_1.subselects.is(next, alias, options, context, compileToken);
        }
        if (name in filters_1.filters) {
          return filters_1.filters[name](next, data, options, context);
        }
        if (name in pseudos_1.pseudos) {
          var pseudo_1 = pseudos_1.pseudos[name];
          (0, pseudos_1.verifyPseudoArgs)(pseudo_1, name, data);
          return pseudo_1 === boolbase_1.falseFunc ? boolbase_1.falseFunc : next === boolbase_1.trueFunc ? function(elem) {
            return pseudo_1(elem, options, data);
          } : function(elem) {
            return pseudo_1(elem, options, data) && next(elem);
          };
        }
        throw new Error("unmatched pseudo-class :".concat(name));
      }
      exports.compilePseudoSelector = compilePseudoSelector;
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/general.js
  var require_general = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/general.js"(exports) {
      "use strict";
      init_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compileGeneralSelector = void 0;
      var attributes_1 = require_attributes();
      var pseudo_selectors_1 = require_pseudo_selectors();
      var css_what_1 = require_commonjs();
      function compileGeneralSelector(next, selector, options, context, compileToken) {
        var adapter2 = options.adapter, equals = options.equals;
        switch (selector.type) {
          case css_what_1.SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
          }
          case css_what_1.SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
          }
          case css_what_1.SelectorType.Attribute: {
            if (selector.namespace != null) {
              throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
              selector.name = selector.name.toLowerCase();
            }
            return attributes_1.attributeRules[selector.action](next, selector, options);
          }
          case css_what_1.SelectorType.Pseudo: {
            return (0, pseudo_selectors_1.compilePseudoSelector)(next, selector, options, context, compileToken);
          }
          case css_what_1.SelectorType.Tag: {
            if (selector.namespace != null) {
              throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            var name_1 = selector.name;
            if (!options.xmlMode || options.lowerCaseTags) {
              name_1 = name_1.toLowerCase();
            }
            return function tag(elem) {
              return adapter2.getName(elem) === name_1 && next(elem);
            };
          }
          case css_what_1.SelectorType.Descendant: {
            if (options.cacheResults === false || typeof WeakSet === "undefined") {
              return function descendant(elem) {
                var current = elem;
                while (current = adapter2.getParent(current)) {
                  if (adapter2.isTag(current) && next(current)) {
                    return true;
                  }
                }
                return false;
              };
            }
            var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
            return function cachedDescendant(elem) {
              var current = elem;
              while (current = adapter2.getParent(current)) {
                if (!isFalseCache_1.has(current)) {
                  if (adapter2.isTag(current) && next(current)) {
                    return true;
                  }
                  isFalseCache_1.add(current);
                }
              }
              return false;
            };
          }
          case "_flexibleDescendant": {
            return function flexibleDescendant(elem) {
              var current = elem;
              do {
                if (adapter2.isTag(current) && next(current))
                  return true;
              } while (current = adapter2.getParent(current));
              return false;
            };
          }
          case css_what_1.SelectorType.Parent: {
            return function parent(elem) {
              return adapter2.getChildren(elem).some(function(elem2) {
                return adapter2.isTag(elem2) && next(elem2);
              });
            };
          }
          case css_what_1.SelectorType.Child: {
            return function child(elem) {
              var parent = adapter2.getParent(elem);
              return parent != null && adapter2.isTag(parent) && next(parent);
            };
          }
          case css_what_1.SelectorType.Sibling: {
            return function sibling(elem) {
              var siblings = adapter2.getSiblings(elem);
              for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                  break;
                if (adapter2.isTag(currentSibling) && next(currentSibling)) {
                  return true;
                }
              }
              return false;
            };
          }
          case css_what_1.SelectorType.Adjacent: {
            if (adapter2.prevElementSibling) {
              return function adjacent(elem) {
                var previous = adapter2.prevElementSibling(elem);
                return previous != null && next(previous);
              };
            }
            return function adjacent(elem) {
              var siblings = adapter2.getSiblings(elem);
              var lastElement;
              for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                  break;
                if (adapter2.isTag(currentSibling)) {
                  lastElement = currentSibling;
                }
              }
              return !!lastElement && next(lastElement);
            };
          }
          case css_what_1.SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
              throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
          }
        }
      }
      exports.compileGeneralSelector = compileGeneralSelector;
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/compile.js
  var require_compile2 = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/compile.js"(exports) {
      "use strict";
      init_env();
      var __importDefault2 = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
      var css_what_1 = require_commonjs();
      var boolbase_1 = require_boolbase();
      var sort_1 = __importDefault2(require_sort());
      var procedure_1 = require_procedure();
      var general_1 = require_general();
      var subselects_1 = require_subselects();
      function compile2(selector, options, context) {
        var next = compileUnsafe(selector, options, context);
        return (0, subselects_1.ensureIsTag)(next, options.adapter);
      }
      exports.compile = compile2;
      function compileUnsafe(selector, options, context) {
        var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
        return compileToken(token, options, context);
      }
      exports.compileUnsafe = compileUnsafe;
      function includesScopePseudo(t) {
        return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
          return data.some(includesScopePseudo);
        }));
      }
      var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
      var FLEXIBLE_DESCENDANT_TOKEN = {
        type: "_flexibleDescendant"
      };
      var SCOPE_TOKEN = {
        type: css_what_1.SelectorType.Pseudo,
        name: "scope",
        data: null
      };
      function absolutize(token, _a7, context) {
        var adapter2 = _a7.adapter;
        var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
          var parent = adapter2.isTag(e) && adapter2.getParent(e);
          return e === subselects_1.PLACEHOLDER_ELEMENT || parent && adapter2.isTag(parent);
        }));
        for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
          var t = token_1[_i];
          if (t.length > 0 && (0, procedure_1.isTraversal)(t[0]) && t[0].type !== "descendant") {
          } else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
          } else {
            continue;
          }
          t.unshift(SCOPE_TOKEN);
        }
      }
      function compileToken(token, options, context) {
        var _a7;
        token = token.filter(function(t) {
          return t.length > 0;
        });
        token.forEach(sort_1.default);
        context = (_a7 = options.context) !== null && _a7 !== void 0 ? _a7 : context;
        var isArrayContext = Array.isArray(context);
        var finalContext = context && (Array.isArray(context) ? context : [context]);
        absolutize(token, options, finalContext);
        var shouldTestNextSiblings = false;
        var query2 = token.map(function(rules) {
          if (rules.length >= 2) {
            var first = rules[0], second = rules[1];
            if (first.type !== "pseudo" || first.name !== "scope") {
            } else if (isArrayContext && second.type === "descendant") {
              rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === "adjacent" || second.type === "sibling") {
              shouldTestNextSiblings = true;
            }
          }
          return compileRules(rules, options, finalContext);
        }).reduce(reduceRules, boolbase_1.falseFunc);
        query2.shouldTestNextSiblings = shouldTestNextSiblings;
        return query2;
      }
      exports.compileToken = compileToken;
      function compileRules(rules, options, context) {
        var _a7;
        return rules.reduce(function(previous, rule) {
          return previous === boolbase_1.falseFunc ? boolbase_1.falseFunc : (0, general_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
        }, (_a7 = options.rootFunc) !== null && _a7 !== void 0 ? _a7 : boolbase_1.trueFunc);
      }
      function reduceRules(a, b) {
        if (b === boolbase_1.falseFunc || a === boolbase_1.trueFunc) {
          return a;
        }
        if (a === boolbase_1.falseFunc || b === boolbase_1.trueFunc) {
          return b;
        }
        return function combine2(elem) {
          return a(elem) || b(elem);
        };
      }
    }
  });

  // node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/index.js
  var require_lib9 = __commonJS({
    "node_modules/.pnpm/css-select@4.3.0/node_modules/css-select/lib/index.js"(exports) {
      "use strict";
      init_env();
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar2 = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
      var DomUtils = __importStar2(require_lib6());
      var boolbase_1 = require_boolbase();
      var compile_1 = require_compile2();
      var subselects_1 = require_subselects();
      var defaultEquals = function(a, b) {
        return a === b;
      };
      var defaultOptions2 = {
        adapter: DomUtils,
        equals: defaultEquals
      };
      function convertOptionFormats(options) {
        var _a7, _b3, _c, _d;
        var opts = options !== null && options !== void 0 ? options : defaultOptions2;
        (_a7 = opts.adapter) !== null && _a7 !== void 0 ? _a7 : opts.adapter = DomUtils;
        (_b3 = opts.equals) !== null && _b3 !== void 0 ? _b3 : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
        return opts;
      }
      function wrapCompile(func) {
        return function addAdapter(selector, options, context) {
          var opts = convertOptionFormats(options);
          return func(selector, opts, context);
        };
      }
      exports.compile = wrapCompile(compile_1.compile);
      exports._compileUnsafe = wrapCompile(compile_1.compileUnsafe);
      exports._compileToken = wrapCompile(compile_1.compileToken);
      function getSelectorFunc(searchFunc) {
        return function select(query2, elements, options) {
          var opts = convertOptionFormats(options);
          if (typeof query2 !== "function") {
            query2 = (0, compile_1.compileUnsafe)(query2, opts, elements);
          }
          var filteredElements = prepareContext(elements, opts.adapter, query2.shouldTestNextSiblings);
          return searchFunc(query2, filteredElements, opts);
        };
      }
      function prepareContext(elems, adapter2, shouldTestNextSiblings) {
        if (shouldTestNextSiblings === void 0) {
          shouldTestNextSiblings = false;
        }
        if (shouldTestNextSiblings) {
          elems = appendNextSiblings(elems, adapter2);
        }
        return Array.isArray(elems) ? adapter2.removeSubsets(elems) : adapter2.getChildren(elems);
      }
      exports.prepareContext = prepareContext;
      function appendNextSiblings(elem, adapter2) {
        var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
        var elemsLength = elems.length;
        for (var i = 0; i < elemsLength; i++) {
          var nextSiblings = (0, subselects_1.getNextSiblings)(elems[i], adapter2);
          elems.push.apply(elems, nextSiblings);
        }
        return elems;
      }
      exports.selectAll = getSelectorFunc(function(query2, elems, options) {
        return query2 === boolbase_1.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query2, elems);
      });
      exports.selectOne = getSelectorFunc(function(query2, elems, options) {
        return query2 === boolbase_1.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query2, elems);
      });
      function is2(elem, query2, options) {
        var opts = convertOptionFormats(options);
        return (typeof query2 === "function" ? query2 : (0, compile_1.compile)(query2, opts))(elem);
      }
      exports.is = is2;
      exports.default = exports.selectAll;
      var pseudo_selectors_1 = require_pseudo_selectors();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return pseudo_selectors_1.filters;
      } });
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return pseudo_selectors_1.pseudos;
      } });
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return pseudo_selectors_1.aliases;
      } });
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/StyleSheet.js
  var require_StyleSheet = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/StyleSheet.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.StyleSheet = function StyleSheet() {
        this.parentStyleSheet = null;
      };
      exports.StyleSheet = CSSOM.StyleSheet;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSRule.js
  var require_CSSRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSRule.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.CSSRule = function CSSRule() {
        this.parentRule = null;
        this.parentStyleSheet = null;
      };
      CSSOM.CSSRule.UNKNOWN_RULE = 0;
      CSSOM.CSSRule.STYLE_RULE = 1;
      CSSOM.CSSRule.CHARSET_RULE = 2;
      CSSOM.CSSRule.IMPORT_RULE = 3;
      CSSOM.CSSRule.MEDIA_RULE = 4;
      CSSOM.CSSRule.FONT_FACE_RULE = 5;
      CSSOM.CSSRule.PAGE_RULE = 6;
      CSSOM.CSSRule.KEYFRAMES_RULE = 7;
      CSSOM.CSSRule.KEYFRAME_RULE = 8;
      CSSOM.CSSRule.MARGIN_RULE = 9;
      CSSOM.CSSRule.NAMESPACE_RULE = 10;
      CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
      CSSOM.CSSRule.SUPPORTS_RULE = 12;
      CSSOM.CSSRule.DOCUMENT_RULE = 13;
      CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
      CSSOM.CSSRule.VIEWPORT_RULE = 15;
      CSSOM.CSSRule.REGION_STYLE_RULE = 16;
      CSSOM.CSSRule.prototype = {
        constructor: CSSOM.CSSRule
      };
      exports.CSSRule = CSSOM.CSSRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleRule.js
  var require_CSSStyleRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSStyleRule = function CSSStyleRule() {
        CSSOM.CSSRule.call(this);
        this.selectorText = "";
        this.style = new CSSOM.CSSStyleDeclaration();
        this.style.parentRule = this;
      };
      CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
      CSSOM.CSSStyleRule.prototype.type = 1;
      Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
        get: function() {
          var text;
          if (this.selectorText) {
            text = this.selectorText + " {" + this.style.cssText + "}";
          } else {
            text = "";
          }
          return text;
        },
        set: function(cssText) {
          var rule = CSSOM.CSSStyleRule.parse(cssText);
          this.style = rule.style;
          this.selectorText = rule.selectorText;
        }
      });
      CSSOM.CSSStyleRule.parse = function(ruleText) {
        var i = 0;
        var state = "selector";
        var index;
        var j = i;
        var buffer2 = "";
        var SIGNIFICANT_WHITESPACE = {
          "selector": true,
          "value": true
        };
        var styleRule = new CSSOM.CSSStyleRule();
        var name, priority = "";
        for (var character; character = ruleText.charAt(i); i++) {
          switch (character) {
            case " ":
            case "	":
            case "\r":
            case "\n":
            case "\f":
              if (SIGNIFICANT_WHITESPACE[state]) {
                switch (ruleText.charAt(i - 1)) {
                  case " ":
                  case "	":
                  case "\r":
                  case "\n":
                  case "\f":
                    break;
                  default:
                    buffer2 += " ";
                    break;
                }
              }
              break;
            case '"':
              j = i + 1;
              index = ruleText.indexOf('"', j) + 1;
              if (!index) {
                throw '" is missing';
              }
              buffer2 += ruleText.slice(i, index);
              i = index - 1;
              break;
            case "'":
              j = i + 1;
              index = ruleText.indexOf("'", j) + 1;
              if (!index) {
                throw "' is missing";
              }
              buffer2 += ruleText.slice(i, index);
              i = index - 1;
              break;
            case "/":
              if (ruleText.charAt(i + 1) === "*") {
                i += 2;
                index = ruleText.indexOf("*/", i);
                if (index === -1) {
                  throw new SyntaxError("Missing */");
                } else {
                  i = index + 1;
                }
              } else {
                buffer2 += character;
              }
              break;
            case "{":
              if (state === "selector") {
                styleRule.selectorText = buffer2.trim();
                buffer2 = "";
                state = "name";
              }
              break;
            case ":":
              if (state === "name") {
                name = buffer2.trim();
                buffer2 = "";
                state = "value";
              } else {
                buffer2 += character;
              }
              break;
            case "!":
              if (state === "value" && ruleText.indexOf("!important", i) === i) {
                priority = "important";
                i += "important".length;
              } else {
                buffer2 += character;
              }
              break;
            case ";":
              if (state === "value") {
                styleRule.style.setProperty(name, buffer2.trim(), priority);
                priority = "";
                buffer2 = "";
                state = "name";
              } else {
                buffer2 += character;
              }
              break;
            case "}":
              if (state === "value") {
                styleRule.style.setProperty(name, buffer2.trim(), priority);
                priority = "";
                buffer2 = "";
              } else if (state === "name") {
                break;
              } else {
                buffer2 += character;
              }
              state = "selector";
              break;
            default:
              buffer2 += character;
              break;
          }
        }
        return styleRule;
      };
      exports.CSSStyleRule = CSSOM.CSSStyleRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleSheet.js
  var require_CSSStyleSheet = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleSheet.js"(exports) {
      init_env();
      var CSSOM = {
        StyleSheet: require_StyleSheet().StyleSheet,
        CSSStyleRule: require_CSSStyleRule().CSSStyleRule
      };
      CSSOM.CSSStyleSheet = function CSSStyleSheet() {
        CSSOM.StyleSheet.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
      CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;
      CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
        if (index < 0 || index > this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        var cssRule = CSSOM.parse(rule).cssRules[0];
        cssRule.parentStyleSheet = this;
        this.cssRules.splice(index, 0, cssRule);
        return index;
      };
      CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
        if (index < 0 || index >= this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        this.cssRules.splice(index, 1);
      };
      CSSOM.CSSStyleSheet.prototype.toString = function() {
        var result = "";
        var rules = this.cssRules;
        for (var i = 0; i < rules.length; i++) {
          result += rules[i].cssText + "\n";
        }
        return result;
      };
      exports.CSSStyleSheet = CSSOM.CSSStyleSheet;
      CSSOM.parse = require_parse3().parse;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MediaList.js
  var require_MediaList = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MediaList.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.MediaList = function MediaList() {
        this.length = 0;
      };
      CSSOM.MediaList.prototype = {
        constructor: CSSOM.MediaList,
        get mediaText() {
          return Array.prototype.join.call(this, ", ");
        },
        set mediaText(value) {
          var values = value.split(",");
          var length = this.length = values.length;
          for (var i = 0; i < length; i++) {
            this[i] = values[i].trim();
          }
        },
        appendMedium: function(medium) {
          if (Array.prototype.indexOf.call(this, medium) === -1) {
            this[this.length] = medium;
            this.length++;
          }
        },
        deleteMedium: function(medium) {
          var index = Array.prototype.indexOf.call(this, medium);
          if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
          }
        }
      };
      exports.MediaList = CSSOM.MediaList;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSImportRule.js
  var require_CSSImportRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSImportRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
        MediaList: require_MediaList().MediaList
      };
      CSSOM.CSSImportRule = function CSSImportRule() {
        CSSOM.CSSRule.call(this);
        this.href = "";
        this.media = new CSSOM.MediaList();
        this.styleSheet = new CSSOM.CSSStyleSheet();
      };
      CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
      CSSOM.CSSImportRule.prototype.type = 3;
      Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
        get: function() {
          var mediaText = this.media.mediaText;
          return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
        },
        set: function(cssText) {
          var i = 0;
          var state = "";
          var buffer2 = "";
          var index;
          for (var character; character = cssText.charAt(i); i++) {
            switch (character) {
              case " ":
              case "	":
              case "\r":
              case "\n":
              case "\f":
                if (state === "after-import") {
                  state = "url";
                } else {
                  buffer2 += character;
                }
                break;
              case "@":
                if (!state && cssText.indexOf("@import", i) === i) {
                  state = "after-import";
                  i += "import".length;
                  buffer2 = "";
                }
                break;
              case "u":
                if (state === "url" && cssText.indexOf("url(", i) === i) {
                  index = cssText.indexOf(")", i + 1);
                  if (index === -1) {
                    throw i + ': ")" not found';
                  }
                  i += "url(".length;
                  var url = cssText.slice(i, index);
                  if (url[0] === url[url.length - 1]) {
                    if (url[0] === '"' || url[0] === "'") {
                      url = url.slice(1, -1);
                    }
                  }
                  this.href = url;
                  i = index;
                  state = "media";
                }
                break;
              case '"':
                if (state === "url") {
                  index = cssText.indexOf('"', i + 1);
                  if (!index) {
                    throw i + `: '"' not found`;
                  }
                  this.href = cssText.slice(i + 1, index);
                  i = index;
                  state = "media";
                }
                break;
              case "'":
                if (state === "url") {
                  index = cssText.indexOf("'", i + 1);
                  if (!index) {
                    throw i + `: "'" not found`;
                  }
                  this.href = cssText.slice(i + 1, index);
                  i = index;
                  state = "media";
                }
                break;
              case ";":
                if (state === "media") {
                  if (buffer2) {
                    this.media.mediaText = buffer2.trim();
                  }
                }
                break;
              default:
                if (state === "media") {
                  buffer2 += character;
                }
                break;
            }
          }
        }
      });
      exports.CSSImportRule = CSSOM.CSSImportRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSGroupingRule.js
  var require_CSSGroupingRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSGroupingRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSGroupingRule = function CSSGroupingRule() {
        CSSOM.CSSRule.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;
      CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
        if (index < 0 || index > this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        var cssRule = CSSOM.parse(rule).cssRules[0];
        cssRule.parentRule = this;
        this.cssRules.splice(index, 0, cssRule);
        return index;
      };
      CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
        if (index < 0 || index >= this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        this.cssRules.splice(index, 1)[0].parentRule = null;
      };
      exports.CSSGroupingRule = CSSOM.CSSGroupingRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSConditionRule.js
  var require_CSSConditionRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSConditionRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule
      };
      CSSOM.CSSConditionRule = function CSSConditionRule() {
        CSSOM.CSSGroupingRule.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
      CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
      CSSOM.CSSConditionRule.prototype.conditionText = "";
      CSSOM.CSSConditionRule.prototype.cssText = "";
      exports.CSSConditionRule = CSSOM.CSSConditionRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSMediaRule.js
  var require_CSSMediaRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSMediaRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
        CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
        MediaList: require_MediaList().MediaList
      };
      CSSOM.CSSMediaRule = function CSSMediaRule() {
        CSSOM.CSSConditionRule.call(this);
        this.media = new CSSOM.MediaList();
      };
      CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
      CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
      CSSOM.CSSMediaRule.prototype.type = 4;
      Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
        "conditionText": {
          get: function() {
            return this.media.mediaText;
          },
          set: function(value) {
            this.media.mediaText = value;
          },
          configurable: true,
          enumerable: true
        },
        "cssText": {
          get: function() {
            var cssTexts = [];
            for (var i = 0, length = this.cssRules.length; i < length; i++) {
              cssTexts.push(this.cssRules[i].cssText);
            }
            return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
          },
          configurable: true,
          enumerable: true
        }
      });
      exports.CSSMediaRule = CSSOM.CSSMediaRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSSupportsRule.js
  var require_CSSSupportsRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSSupportsRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
        CSSConditionRule: require_CSSConditionRule().CSSConditionRule
      };
      CSSOM.CSSSupportsRule = function CSSSupportsRule() {
        CSSOM.CSSConditionRule.call(this);
      };
      CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
      CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
      CSSOM.CSSSupportsRule.prototype.type = 12;
      Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
        }
      });
      exports.CSSSupportsRule = CSSOM.CSSSupportsRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSFontFaceRule.js
  var require_CSSFontFaceRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSFontFaceRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
        CSSOM.CSSRule.call(this);
        this.style = new CSSOM.CSSStyleDeclaration();
        this.style.parentRule = this;
      };
      CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
      CSSOM.CSSFontFaceRule.prototype.type = 5;
      Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
        get: function() {
          return "@font-face {" + this.style.cssText + "}";
        }
      });
      exports.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSHostRule.js
  var require_CSSHostRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSHostRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSHostRule = function CSSHostRule() {
        CSSOM.CSSRule.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
      CSSOM.CSSHostRule.prototype.type = 1001;
      Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@host {" + cssTexts.join("") + "}";
        }
      });
      exports.CSSHostRule = CSSOM.CSSHostRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframeRule.js
  var require_CSSKeyframeRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframeRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration
      };
      CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
        CSSOM.CSSRule.call(this);
        this.keyText = "";
        this.style = new CSSOM.CSSStyleDeclaration();
        this.style.parentRule = this;
      };
      CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
      CSSOM.CSSKeyframeRule.prototype.type = 8;
      Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
        get: function() {
          return this.keyText + " {" + this.style.cssText + "} ";
        }
      });
      exports.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframesRule.js
  var require_CSSKeyframesRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframesRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
        CSSOM.CSSRule.call(this);
        this.name = "";
        this.cssRules = [];
      };
      CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
      CSSOM.CSSKeyframesRule.prototype.type = 7;
      Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push("  " + this.cssRules[i].cssText);
          }
          return "@" + (this._vendorPrefix || "") + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
        }
      });
      exports.CSSKeyframesRule = CSSOM.CSSKeyframesRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValue.js
  var require_CSSValue = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValue.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.CSSValue = function CSSValue() {
      };
      CSSOM.CSSValue.prototype = {
        constructor: CSSOM.CSSValue,
        set cssText(text) {
          var name = this._getConstructorName();
          throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
        },
        get cssText() {
          var name = this._getConstructorName();
          throw new Error('getter "cssText" of "' + name + '" is not implemented!');
        },
        _getConstructorName: function() {
          var s = this.constructor.toString(), c = s.match(/function\s([^\(]+)/), name = c[1];
          return name;
        }
      };
      exports.CSSValue = CSSOM.CSSValue;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValueExpression.js
  var require_CSSValueExpression = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValueExpression.js"(exports) {
      init_env();
      var CSSOM = {
        CSSValue: require_CSSValue().CSSValue
      };
      CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
        this._token = token;
        this._idx = idx;
      };
      CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
      CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;
      CSSOM.CSSValueExpression.prototype.parse = function() {
        var token = this._token, idx = this._idx;
        var character = "", expression = "", error = "", info, paren = [];
        for (; ; ++idx) {
          character = token.charAt(idx);
          if (character === "") {
            error = "css expression error: unfinished expression!";
            break;
          }
          switch (character) {
            case "(":
              paren.push(character);
              expression += character;
              break;
            case ")":
              paren.pop(character);
              expression += character;
              break;
            case "/":
              if (info = this._parseJSComment(token, idx)) {
                if (info.error) {
                  error = "css expression error: unfinished comment in expression!";
                } else {
                  idx = info.idx;
                }
              } else if (info = this._parseJSRexExp(token, idx)) {
                idx = info.idx;
                expression += info.text;
              } else {
                expression += character;
              }
              break;
            case "'":
            case '"':
              info = this._parseJSString(token, idx, character);
              if (info) {
                idx = info.idx;
                expression += info.text;
              } else {
                expression += character;
              }
              break;
            default:
              expression += character;
              break;
          }
          if (error) {
            break;
          }
          if (paren.length === 0) {
            break;
          }
        }
        var ret;
        if (error) {
          ret = {
            error
          };
        } else {
          ret = {
            idx,
            expression
          };
        }
        return ret;
      };
      CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
        var nextChar = token.charAt(idx + 1), text;
        if (nextChar === "/" || nextChar === "*") {
          var startIdx = idx, endIdx, commentEndChar;
          if (nextChar === "/") {
            commentEndChar = "\n";
          } else if (nextChar === "*") {
            commentEndChar = "*/";
          }
          endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
          if (endIdx !== -1) {
            endIdx = endIdx + commentEndChar.length - 1;
            text = token.substring(idx, endIdx + 1);
            return {
              idx: endIdx,
              text
            };
          } else {
            var error = "css expression error: unfinished comment in expression!";
            return {
              error
            };
          }
        } else {
          return false;
        }
      };
      CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
        var endIdx = this._findMatchedIdx(token, idx, sep), text;
        if (endIdx === -1) {
          return false;
        } else {
          text = token.substring(idx, endIdx + sep.length);
          return {
            idx: endIdx,
            text
          };
        }
      };
      CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
        var before2 = token.substring(0, idx).replace(/\s+$/, ""), legalRegx = [
          /^$/,
          /\($/,
          /\[$/,
          /\!$/,
          /\+$/,
          /\-$/,
          /\*$/,
          /\/\s+/,
          /\%$/,
          /\=$/,
          /\>$/,
          /<$/,
          /\&$/,
          /\|$/,
          /\^$/,
          /\~$/,
          /\?$/,
          /\,$/,
          /delete$/,
          /in$/,
          /instanceof$/,
          /new$/,
          /typeof$/,
          /void$/
        ];
        var isLegal = legalRegx.some(function(reg) {
          return reg.test(before2);
        });
        if (!isLegal) {
          return false;
        } else {
          var sep = "/";
          return this._parseJSString(token, idx, sep);
        }
      };
      CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
        var startIdx = idx, endIdx;
        var NOT_FOUND = -1;
        while (true) {
          endIdx = token.indexOf(sep, startIdx + 1);
          if (endIdx === -1) {
            endIdx = NOT_FOUND;
            break;
          } else {
            var text = token.substring(idx + 1, endIdx), matched = text.match(/\\+$/);
            if (!matched || matched[0] % 2 === 0) {
              break;
            } else {
              startIdx = endIdx;
            }
          }
        }
        var nextNewLineIdx = token.indexOf("\n", idx + 1);
        if (nextNewLineIdx < endIdx) {
          endIdx = NOT_FOUND;
        }
        return endIdx;
      };
      exports.CSSValueExpression = CSSOM.CSSValueExpression;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MatcherList.js
  var require_MatcherList = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MatcherList.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.MatcherList = function MatcherList() {
        this.length = 0;
      };
      CSSOM.MatcherList.prototype = {
        constructor: CSSOM.MatcherList,
        get matcherText() {
          return Array.prototype.join.call(this, ", ");
        },
        set matcherText(value) {
          var values = value.split(",");
          var length = this.length = values.length;
          for (var i = 0; i < length; i++) {
            this[i] = values[i].trim();
          }
        },
        appendMatcher: function(matcher) {
          if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
          }
        },
        deleteMatcher: function(matcher) {
          var index = Array.prototype.indexOf.call(this, matcher);
          if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
          }
        }
      };
      exports.MatcherList = CSSOM.MatcherList;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSDocumentRule.js
  var require_CSSDocumentRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSDocumentRule.js"(exports) {
      init_env();
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        MatcherList: require_MatcherList().MatcherList
      };
      CSSOM.CSSDocumentRule = function CSSDocumentRule() {
        CSSOM.CSSRule.call(this);
        this.matcher = new CSSOM.MatcherList();
        this.cssRules = [];
      };
      CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
      CSSOM.CSSDocumentRule.prototype.type = 10;
      Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
        }
      });
      exports.CSSDocumentRule = CSSOM.CSSDocumentRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/parse.js
  var require_parse3 = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/parse.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.parse = function parse4(token) {
        var i = 0;
        var state = "before-selector";
        var index;
        var buffer2 = "";
        var valueParenthesisDepth = 0;
        var SIGNIFICANT_WHITESPACE = {
          "selector": true,
          "value": true,
          "value-parenthesis": true,
          "atRule": true,
          "importRule-begin": true,
          "importRule": true,
          "atBlock": true,
          "conditionBlock": true,
          "documentRule-begin": true
        };
        var styleSheet = new CSSOM.CSSStyleSheet();
        var currentScope = styleSheet;
        var parentRule;
        var ancestorRules = [];
        var hasAncestors = false;
        var prevScope;
        var name, priority = "", styleRule, mediaRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule;
        var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;
        var parseError = function(message) {
          var lines = token.substring(0, i).split("\n");
          var lineCount = lines.length;
          var charCount = lines.pop().length + 1;
          var error = new Error(message + " (line " + lineCount + ", char " + charCount + ")");
          error.line = lineCount;
          error["char"] = charCount;
          error.styleSheet = styleSheet;
          throw error;
        };
        for (var character; character = token.charAt(i); i++) {
          switch (character) {
            case " ":
            case "	":
            case "\r":
            case "\n":
            case "\f":
              if (SIGNIFICANT_WHITESPACE[state]) {
                buffer2 += character;
              }
              break;
            case '"':
              index = i + 1;
              do {
                index = token.indexOf('"', index) + 1;
                if (!index) {
                  parseError('Unmatched "');
                }
              } while (token[index - 2] === "\\");
              buffer2 += token.slice(i, index);
              i = index - 1;
              switch (state) {
                case "before-value":
                  state = "value";
                  break;
                case "importRule-begin":
                  state = "importRule";
                  break;
              }
              break;
            case "'":
              index = i + 1;
              do {
                index = token.indexOf("'", index) + 1;
                if (!index) {
                  parseError("Unmatched '");
                }
              } while (token[index - 2] === "\\");
              buffer2 += token.slice(i, index);
              i = index - 1;
              switch (state) {
                case "before-value":
                  state = "value";
                  break;
                case "importRule-begin":
                  state = "importRule";
                  break;
              }
              break;
            case "/":
              if (token.charAt(i + 1) === "*") {
                i += 2;
                index = token.indexOf("*/", i);
                if (index === -1) {
                  parseError("Missing */");
                } else {
                  i = index + 1;
                }
              } else {
                buffer2 += character;
              }
              if (state === "importRule-begin") {
                buffer2 += " ";
                state = "importRule";
              }
              break;
            case "@":
              if (token.indexOf("@-moz-document", i) === i) {
                state = "documentRule-begin";
                documentRule = new CSSOM.CSSDocumentRule();
                documentRule.__starts = i;
                i += "-moz-document".length;
                buffer2 = "";
                break;
              } else if (token.indexOf("@media", i) === i) {
                state = "atBlock";
                mediaRule = new CSSOM.CSSMediaRule();
                mediaRule.__starts = i;
                i += "media".length;
                buffer2 = "";
                break;
              } else if (token.indexOf("@supports", i) === i) {
                state = "conditionBlock";
                supportsRule = new CSSOM.CSSSupportsRule();
                supportsRule.__starts = i;
                i += "supports".length;
                buffer2 = "";
                break;
              } else if (token.indexOf("@host", i) === i) {
                state = "hostRule-begin";
                i += "host".length;
                hostRule = new CSSOM.CSSHostRule();
                hostRule.__starts = i;
                buffer2 = "";
                break;
              } else if (token.indexOf("@import", i) === i) {
                state = "importRule-begin";
                i += "import".length;
                buffer2 += "@import";
                break;
              } else if (token.indexOf("@font-face", i) === i) {
                state = "fontFaceRule-begin";
                i += "font-face".length;
                fontFaceRule = new CSSOM.CSSFontFaceRule();
                fontFaceRule.__starts = i;
                buffer2 = "";
                break;
              } else {
                atKeyframesRegExp.lastIndex = i;
                var matchKeyframes = atKeyframesRegExp.exec(token);
                if (matchKeyframes && matchKeyframes.index === i) {
                  state = "keyframesRule-begin";
                  keyframesRule = new CSSOM.CSSKeyframesRule();
                  keyframesRule.__starts = i;
                  keyframesRule._vendorPrefix = matchKeyframes[1];
                  i += matchKeyframes[0].length - 1;
                  buffer2 = "";
                  break;
                } else if (state === "selector") {
                  state = "atRule";
                }
              }
              buffer2 += character;
              break;
            case "{":
              if (state === "selector" || state === "atRule") {
                styleRule.selectorText = buffer2.trim();
                styleRule.style.__starts = i;
                buffer2 = "";
                state = "before-name";
              } else if (state === "atBlock") {
                mediaRule.media.mediaText = buffer2.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                }
                currentScope = parentRule = mediaRule;
                mediaRule.parentStyleSheet = styleSheet;
                buffer2 = "";
                state = "before-selector";
              } else if (state === "conditionBlock") {
                supportsRule.conditionText = buffer2.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                }
                currentScope = parentRule = supportsRule;
                supportsRule.parentStyleSheet = styleSheet;
                buffer2 = "";
                state = "before-selector";
              } else if (state === "hostRule-begin") {
                if (parentRule) {
                  ancestorRules.push(parentRule);
                }
                currentScope = parentRule = hostRule;
                hostRule.parentStyleSheet = styleSheet;
                buffer2 = "";
                state = "before-selector";
              } else if (state === "fontFaceRule-begin") {
                if (parentRule) {
                  fontFaceRule.parentRule = parentRule;
                }
                fontFaceRule.parentStyleSheet = styleSheet;
                styleRule = fontFaceRule;
                buffer2 = "";
                state = "before-name";
              } else if (state === "keyframesRule-begin") {
                keyframesRule.name = buffer2.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                  keyframesRule.parentRule = parentRule;
                }
                keyframesRule.parentStyleSheet = styleSheet;
                currentScope = parentRule = keyframesRule;
                buffer2 = "";
                state = "keyframeRule-begin";
              } else if (state === "keyframeRule-begin") {
                styleRule = new CSSOM.CSSKeyframeRule();
                styleRule.keyText = buffer2.trim();
                styleRule.__starts = i;
                buffer2 = "";
                state = "before-name";
              } else if (state === "documentRule-begin") {
                documentRule.matcher.matcherText = buffer2.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                  documentRule.parentRule = parentRule;
                }
                currentScope = parentRule = documentRule;
                documentRule.parentStyleSheet = styleSheet;
                buffer2 = "";
                state = "before-selector";
              }
              break;
            case ":":
              if (state === "name") {
                name = buffer2.trim();
                buffer2 = "";
                state = "before-value";
              } else {
                buffer2 += character;
              }
              break;
            case "(":
              if (state === "value") {
                if (buffer2.trim() === "expression") {
                  var info = new CSSOM.CSSValueExpression(token, i).parse();
                  if (info.error) {
                    parseError(info.error);
                  } else {
                    buffer2 += info.expression;
                    i = info.idx;
                  }
                } else {
                  state = "value-parenthesis";
                  valueParenthesisDepth = 1;
                  buffer2 += character;
                }
              } else if (state === "value-parenthesis") {
                valueParenthesisDepth++;
                buffer2 += character;
              } else {
                buffer2 += character;
              }
              break;
            case ")":
              if (state === "value-parenthesis") {
                valueParenthesisDepth--;
                if (valueParenthesisDepth === 0)
                  state = "value";
              }
              buffer2 += character;
              break;
            case "!":
              if (state === "value" && token.indexOf("!important", i) === i) {
                priority = "important";
                i += "important".length;
              } else {
                buffer2 += character;
              }
              break;
            case ";":
              switch (state) {
                case "value":
                  styleRule.style.setProperty(name, buffer2.trim(), priority);
                  priority = "";
                  buffer2 = "";
                  state = "before-name";
                  break;
                case "atRule":
                  buffer2 = "";
                  state = "before-selector";
                  break;
                case "importRule":
                  importRule = new CSSOM.CSSImportRule();
                  importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
                  importRule.cssText = buffer2 + character;
                  styleSheet.cssRules.push(importRule);
                  buffer2 = "";
                  state = "before-selector";
                  break;
                default:
                  buffer2 += character;
                  break;
              }
              break;
            case "}":
              switch (state) {
                case "value":
                  styleRule.style.setProperty(name, buffer2.trim(), priority);
                  priority = "";
                case "before-name":
                case "name":
                  styleRule.__ends = i + 1;
                  if (parentRule) {
                    styleRule.parentRule = parentRule;
                  }
                  styleRule.parentStyleSheet = styleSheet;
                  currentScope.cssRules.push(styleRule);
                  buffer2 = "";
                  if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
                    state = "keyframeRule-begin";
                  } else {
                    state = "before-selector";
                  }
                  break;
                case "keyframeRule-begin":
                case "before-selector":
                case "selector":
                  if (!parentRule) {
                    parseError("Unexpected }");
                  }
                  hasAncestors = ancestorRules.length > 0;
                  while (ancestorRules.length > 0) {
                    parentRule = ancestorRules.pop();
                    if (parentRule.constructor.name === "CSSMediaRule" || parentRule.constructor.name === "CSSSupportsRule") {
                      prevScope = currentScope;
                      currentScope = parentRule;
                      currentScope.cssRules.push(prevScope);
                      break;
                    }
                    if (ancestorRules.length === 0) {
                      hasAncestors = false;
                    }
                  }
                  if (!hasAncestors) {
                    currentScope.__ends = i + 1;
                    styleSheet.cssRules.push(currentScope);
                    currentScope = styleSheet;
                    parentRule = null;
                  }
                  buffer2 = "";
                  state = "before-selector";
                  break;
              }
              break;
            default:
              switch (state) {
                case "before-selector":
                  state = "selector";
                  styleRule = new CSSOM.CSSStyleRule();
                  styleRule.__starts = i;
                  break;
                case "before-name":
                  state = "name";
                  break;
                case "before-value":
                  state = "value";
                  break;
                case "importRule-begin":
                  state = "importRule";
                  break;
              }
              buffer2 += character;
              break;
          }
        }
        return styleSheet;
      };
      exports.parse = CSSOM.parse;
      CSSOM.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
      CSSOM.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
      CSSOM.CSSImportRule = require_CSSImportRule().CSSImportRule;
      CSSOM.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
      CSSOM.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
      CSSOM.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
      CSSOM.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
      CSSOM.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
      CSSOM.CSSHostRule = require_CSSHostRule().CSSHostRule;
      CSSOM.CSSStyleDeclaration = require_CSSStyleDeclaration().CSSStyleDeclaration;
      CSSOM.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
      CSSOM.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
      CSSOM.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
      CSSOM.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleDeclaration.js
  var require_CSSStyleDeclaration = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleDeclaration.js"(exports) {
      init_env();
      var CSSOM = {};
      CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration2() {
        this.length = 0;
        this.parentRule = null;
        this._importants = {};
      };
      CSSOM.CSSStyleDeclaration.prototype = {
        constructor: CSSOM.CSSStyleDeclaration,
        getPropertyValue: function(name) {
          return this[name] || "";
        },
        setProperty: function(name, value, priority) {
          if (this[name]) {
            var index = Array.prototype.indexOf.call(this, name);
            if (index < 0) {
              this[this.length] = name;
              this.length++;
            }
          } else {
            this[this.length] = name;
            this.length++;
          }
          this[name] = value + "";
          this._importants[name] = priority;
        },
        removeProperty: function(name) {
          if (!(name in this)) {
            return "";
          }
          var index = Array.prototype.indexOf.call(this, name);
          if (index < 0) {
            return "";
          }
          var prevValue = this[name];
          this[name] = "";
          Array.prototype.splice.call(this, index, 1);
          return prevValue;
        },
        getPropertyCSSValue: function() {
        },
        getPropertyPriority: function(name) {
          return this._importants[name] || "";
        },
        getPropertyShorthand: function() {
        },
        isPropertyImplicit: function() {
        },
        get cssText() {
          var properties = [];
          for (var i = 0, length = this.length; i < length; ++i) {
            var name = this[i];
            var value = this.getPropertyValue(name);
            var priority = this.getPropertyPriority(name);
            if (priority) {
              priority = " !" + priority;
            }
            properties[i] = name + ": " + value + priority + ";";
          }
          return properties.join(" ");
        },
        set cssText(text) {
          var i, name;
          for (i = this.length; i--; ) {
            name = this[i];
            this[name] = "";
          }
          Array.prototype.splice.call(this, 0, this.length);
          this._importants = {};
          var dummyRule = CSSOM.parse("#bogus{" + text + "}").cssRules[0].style;
          var length = dummyRule.length;
          for (i = 0; i < length; ++i) {
            name = dummyRule[i];
            this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
          }
        }
      };
      exports.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
      CSSOM.parse = require_parse3().parse;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/clone.js
  var require_clone = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/clone.js"(exports) {
      init_env();
      var CSSOM = {
        CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
        CSSRule: require_CSSRule().CSSRule,
        CSSStyleRule: require_CSSStyleRule().CSSStyleRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
        CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
        CSSMediaRule: require_CSSMediaRule().CSSMediaRule,
        CSSSupportsRule: require_CSSSupportsRule().CSSSupportsRule,
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
        CSSKeyframeRule: require_CSSKeyframeRule().CSSKeyframeRule,
        CSSKeyframesRule: require_CSSKeyframesRule().CSSKeyframesRule
      };
      CSSOM.clone = function clone(stylesheet) {
        var cloned = new CSSOM.CSSStyleSheet();
        var rules = stylesheet.cssRules;
        if (!rules) {
          return cloned;
        }
        for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
          var rule = rules[i];
          var ruleClone = cloned.cssRules[i] = new rule.constructor();
          var style = rule.style;
          if (style) {
            var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
            for (var j = 0, styleLength = style.length; j < styleLength; j++) {
              var name = styleClone[j] = style[j];
              styleClone[name] = style[name];
              styleClone._importants[name] = style.getPropertyPriority(name);
            }
            styleClone.length = style.length;
          }
          if (rule.hasOwnProperty("keyText")) {
            ruleClone.keyText = rule.keyText;
          }
          if (rule.hasOwnProperty("selectorText")) {
            ruleClone.selectorText = rule.selectorText;
          }
          if (rule.hasOwnProperty("mediaText")) {
            ruleClone.mediaText = rule.mediaText;
          }
          if (rule.hasOwnProperty("conditionText")) {
            ruleClone.conditionText = rule.conditionText;
          }
          if (rule.hasOwnProperty("cssRules")) {
            ruleClone.cssRules = clone(rule).cssRules;
          }
        }
        return cloned;
      };
      exports.clone = CSSOM.clone;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/index.js
  var require_lib10 = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/index.js"(exports) {
      "use strict";
      init_env();
      exports.CSSStyleDeclaration = require_CSSStyleDeclaration().CSSStyleDeclaration;
      exports.CSSRule = require_CSSRule().CSSRule;
      exports.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
      exports.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
      exports.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
      exports.MediaList = require_MediaList().MediaList;
      exports.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
      exports.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
      exports.CSSImportRule = require_CSSImportRule().CSSImportRule;
      exports.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
      exports.CSSHostRule = require_CSSHostRule().CSSHostRule;
      exports.StyleSheet = require_StyleSheet().StyleSheet;
      exports.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
      exports.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
      exports.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
      exports.MatcherList = require_MatcherList().MatcherList;
      exports.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
      exports.CSSValue = require_CSSValue().CSSValue;
      exports.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
      exports.parse = require_parse3().parse;
      exports.clone = require_clone().clone;
    }
  });

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/commonjs/canvas.cjs
  var require_canvas = __commonJS({
    "node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/commonjs/canvas.cjs"(exports, module) {
      init_env();
      try {
        module.exports = __require("canvas");
      } catch (fallback) {
        class Canvas2 {
          constructor(width, height) {
            this.width = width;
            this.height = height;
          }
          getContext() {
            return null;
          }
          toDataURL() {
            return "";
          }
        }
        module.exports = {
          createCanvas: (width, height) => new Canvas2(width, height)
        };
      }
    }
  });

  // src/entry/sw.ts
  init_env();

  // node_modules/.pnpm/urlpattern-polyfill@4.0.3/node_modules/urlpattern-polyfill/dist/index.js
  init_env();
  var regexIdentifierStart = /[$_\p{ID_Start}]/u;
  var regexIdentifierPart = /[$_\u200C\u200D\p{ID_Continue}]/u;
  function isASCII(str, extended) {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(str);
  }
  function lexer(str, lenient = false) {
    const tokens = [];
    let i = 0;
    while (i < str.length) {
      const char = str[i];
      const ErrorOrInvalid = function(msg) {
        if (!lenient)
          throw new TypeError(msg);
        tokens.push({ type: "INVALID_CHAR", index: i, value: str[i++] });
      };
      if (char === "*") {
        tokens.push({ type: "ASTERISK", index: i, value: str[i++] });
        continue;
      }
      if (char === "+" || char === "?") {
        tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
        continue;
      }
      if (char === "\\") {
        tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
        continue;
      }
      if (char === "{") {
        tokens.push({ type: "OPEN", index: i, value: str[i++] });
        continue;
      }
      if (char === "}") {
        tokens.push({ type: "CLOSE", index: i, value: str[i++] });
        continue;
      }
      if (char === ":") {
        let name = "";
        let j = i + 1;
        while (j < str.length) {
          const code = str.substr(j, 1);
          if (j === i + 1 && regexIdentifierStart.test(code) || j !== i + 1 && regexIdentifierPart.test(code)) {
            name += str[j++];
            continue;
          }
          break;
        }
        if (!name) {
          ErrorOrInvalid(`Missing parameter name at ${i}`);
          continue;
        }
        tokens.push({ type: "NAME", index: i, value: name });
        i = j;
        continue;
      }
      if (char === "(") {
        let count = 1;
        let pattern = "";
        let j = i + 1;
        let error = false;
        if (str[j] === "?") {
          ErrorOrInvalid(`Pattern cannot start with "?" at ${j}`);
          continue;
        }
        while (j < str.length) {
          if (!isASCII(str[j], false)) {
            ErrorOrInvalid(`Invalid character '${str[j]}' at ${j}.`);
            error = true;
            break;
          }
          if (str[j] === "\\") {
            pattern += str[j++] + str[j++];
            continue;
          }
          if (str[j] === ")") {
            count--;
            if (count === 0) {
              j++;
              break;
            }
          } else if (str[j] === "(") {
            count++;
            if (str[j + 1] !== "?") {
              ErrorOrInvalid(`Capturing groups are not allowed at ${j}`);
              error = true;
              break;
            }
          }
          pattern += str[j++];
        }
        if (error) {
          continue;
        }
        if (count) {
          ErrorOrInvalid(`Unbalanced pattern at ${i}`);
          continue;
        }
        if (!pattern) {
          ErrorOrInvalid(`Missing pattern at ${i}`);
          continue;
        }
        tokens.push({ type: "PATTERN", index: i, value: pattern });
        i = j;
        continue;
      }
      tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
  }
  function parse(str, options = {}) {
    const tokens = lexer(str);
    const { prefixes = "./" } = options;
    const defaultPattern = `[^${escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key2 = 0;
    let i = 0;
    let path = "";
    let nameSet = /* @__PURE__ */ new Set();
    const tryConsume = (type) => {
      if (i < tokens.length && tokens[i].type === type)
        return tokens[i++].value;
    };
    const tryConsumeModifier = () => {
      const r = tryConsume("MODIFIER");
      if (r) {
        return r;
      }
      return tryConsume("ASTERISK");
    };
    const mustConsume = (type) => {
      const value = tryConsume(type);
      if (value !== void 0)
        return value;
      const { type: nextType, index } = tokens[i];
      throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = () => {
      let result2 = "";
      let value;
      while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
        result2 += value;
      }
      return result2;
    };
    const DefaultEncodePart = (value) => {
      return value;
    };
    const encodePart = options.encodePart || DefaultEncodePart;
    while (i < tokens.length) {
      const char = tryConsume("CHAR");
      const name = tryConsume("NAME");
      let pattern = tryConsume("PATTERN");
      if (!name && !pattern && tryConsume("ASTERISK")) {
        pattern = ".*";
      }
      if (name || pattern) {
        let prefix = char || "";
        if (prefixes.indexOf(prefix) === -1) {
          path += prefix;
          prefix = "";
        }
        if (path) {
          result.push(encodePart(path));
          path = "";
        }
        const finalName = name || key2++;
        if (nameSet.has(finalName)) {
          throw new TypeError(`Duplicate name '${finalName}'.`);
        }
        nameSet.add(finalName);
        result.push({
          name: finalName,
          prefix: encodePart(prefix),
          suffix: "",
          pattern: pattern || defaultPattern,
          modifier: tryConsumeModifier() || ""
        });
        continue;
      }
      const value = char || tryConsume("ESCAPED_CHAR");
      if (value) {
        path += value;
        continue;
      }
      const open = tryConsume("OPEN");
      if (open) {
        const prefix = consumeText();
        const name2 = tryConsume("NAME") || "";
        let pattern2 = tryConsume("PATTERN") || "";
        if (!name2 && !pattern2 && tryConsume("ASTERISK")) {
          pattern2 = ".*";
        }
        const suffix = consumeText();
        mustConsume("CLOSE");
        const modifier = tryConsumeModifier() || "";
        if (!name2 && !pattern2 && !modifier) {
          path += prefix;
          continue;
        }
        if (!name2 && !pattern2 && !prefix) {
          continue;
        }
        if (path) {
          result.push(encodePart(path));
          path = "";
        }
        result.push({
          name: name2 || (pattern2 ? key2++ : ""),
          pattern: name2 && !pattern2 ? defaultPattern : pattern2,
          prefix: encodePart(prefix),
          suffix: encodePart(suffix),
          modifier
        });
        continue;
      }
      if (path) {
        result.push(encodePart(path));
        path = "";
      }
      mustConsume("END");
    }
    return result;
  }
  function escapeString(str) {
    return str.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
  }
  function flags(options) {
    return options && options.sensitive ? "u" : "ui";
  }
  function regexpToRegexp(path, keys2) {
    if (!keys2)
      return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while (execResult) {
      keys2.push({
        name: execResult[1] || index++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
      execResult = groupsRegex.exec(path.source);
    }
    return path;
  }
  function arrayToRegexp(paths, keys2, options) {
    const parts = paths.map((path) => pathToRegexp(path, keys2, options).source);
    return new RegExp(`(?:${parts.join("|")})`, flags(options));
  }
  function stringToRegexp(path, keys2, options) {
    return tokensToRegexp(parse(path, options), keys2, options);
  }
  function tokensToRegexp(tokens, keys2, options = {}) {
    const {
      strict = false,
      start = true,
      end = true,
      encode: encode2 = (x4) => x4
    } = options;
    const endsWith = `[${escapeString(options.endsWith || "")}]|$`;
    const delimiter = `[${escapeString(options.delimiter || "/#?")}]`;
    let route = start ? "^" : "";
    for (const token of tokens) {
      if (typeof token === "string") {
        route += escapeString(encode2(token));
      } else {
        const prefix = escapeString(encode2(token.prefix));
        const suffix = escapeString(encode2(token.suffix));
        if (token.pattern) {
          if (keys2)
            keys2.push(token);
          if (prefix || suffix) {
            if (token.modifier === "+" || token.modifier === "*") {
              const mod = token.modifier === "*" ? "?" : "";
              route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
            } else {
              route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            }
          } else {
            if (token.modifier === "+" || token.modifier === "*") {
              route += `((?:${token.pattern})${token.modifier})`;
            } else {
              route += `(${token.pattern})${token.modifier}`;
            }
          }
        } else {
          route += `(?:${prefix}${suffix})${token.modifier}`;
        }
      }
    }
    if (end) {
      if (!strict)
        route += `${delimiter}?`;
      route += !options.endsWith ? "$" : `(?=${endsWith})`;
    } else {
      const endToken = tokens[tokens.length - 1];
      const isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
      if (!strict) {
        route += `(?:${delimiter}(?=${endsWith}))?`;
      }
      if (!isEndDelimited) {
        route += `(?=${delimiter}|${endsWith})`;
      }
    }
    return new RegExp(route, flags(options));
  }
  function pathToRegexp(path, keys2, options) {
    if (path instanceof RegExp)
      return regexpToRegexp(path, keys2);
    if (Array.isArray(path))
      return arrayToRegexp(path, keys2, options);
    return stringToRegexp(path, keys2, options);
  }
  var DEFAULT_OPTIONS = {
    delimiter: "",
    prefixes: "",
    sensitive: true,
    strict: true
  };
  var HOSTNAME_OPTIONS = {
    delimiter: ".",
    prefixes: "",
    sensitive: true,
    strict: true
  };
  var PATHNAME_OPTIONS = {
    delimiter: "/",
    prefixes: "/",
    sensitive: true,
    strict: true
  };
  function isAbsolutePathname(pathname, isPattern) {
    if (!pathname.length) {
      return false;
    }
    if (pathname[0] === "/") {
      return true;
    }
    if (!isPattern) {
      return false;
    }
    if (pathname.length < 2) {
      return false;
    }
    if ((pathname[0] == "\\" || pathname[0] == "{") && pathname[1] == "/") {
      return true;
    }
    return false;
  }
  function maybeStripPrefix(value, prefix) {
    if (value.startsWith(prefix)) {
      return value.substring(prefix.length, value.length);
    }
    return value;
  }
  function maybeStripSuffix(value, suffix) {
    if (value.endsWith(suffix)) {
      return value.substr(0, value.length - suffix.length);
    }
    return value;
  }
  function treatAsIPv6Hostname(value) {
    if (!value || value.length < 2) {
      return false;
    }
    if (value[0] === "[") {
      return true;
    }
    if ((value[0] === "\\" || value[0] === "{") && value[1] === "[") {
      return true;
    }
    return false;
  }
  var SPECIAL_SCHEMES = [
    "ftp",
    "file",
    "http",
    "https",
    "ws",
    "wss"
  ];
  function isSpecialScheme(protocol_regexp) {
    if (!protocol_regexp) {
      return true;
    }
    for (const scheme of SPECIAL_SCHEMES) {
      if (protocol_regexp.test(scheme)) {
        return true;
      }
    }
    return false;
  }
  function canonicalizeHash(hash, isPattern) {
    hash = maybeStripPrefix(hash, "#");
    if (isPattern || hash === "") {
      return hash;
    }
    const url = new URL("https://example.com");
    url.hash = hash;
    return url.hash ? url.hash.substring(1, url.hash.length) : "";
  }
  function canonicalizeSearch(search, isPattern) {
    search = maybeStripPrefix(search, "?");
    if (isPattern || search === "") {
      return search;
    }
    const url = new URL("https://example.com");
    url.search = search;
    return url.search ? url.search.substring(1, url.search.length) : "";
  }
  function canonicalizeHostname(hostname, isPattern) {
    if (isPattern || hostname === "") {
      return hostname;
    }
    if (treatAsIPv6Hostname(hostname)) {
      return ipv6HostnameEncodeCallback(hostname);
    } else {
      return hostnameEncodeCallback(hostname);
    }
  }
  function canonicalizePassword(password, isPattern) {
    if (isPattern || password === "") {
      return password;
    }
    const url = new URL("https://example.com");
    url.password = password;
    return url.password;
  }
  function canonicalizeUsername(username, isPattern) {
    if (isPattern || username === "") {
      return username;
    }
    const url = new URL("https://example.com");
    url.username = username;
    return url.username;
  }
  function canonicalizePathname(pathname, protocol, isPattern) {
    if (isPattern || pathname === "") {
      return pathname;
    }
    if (protocol && !SPECIAL_SCHEMES.includes(protocol)) {
      const url = new URL(`${protocol}:${pathname}`);
      return url.pathname;
    }
    const leadingSlash = pathname[0] == "/";
    pathname = new URL(!leadingSlash ? "/-" + pathname : pathname, "https://example.com").pathname;
    if (!leadingSlash) {
      pathname = pathname.substring(2, pathname.length);
    }
    return pathname;
  }
  function canonicalizePort(port, protocol, isPattern) {
    if (defaultPortForProtocol(protocol) === port) {
      port = "";
    }
    if (isPattern || port === "") {
      return port;
    }
    return portEncodeCallback(port);
  }
  function canonicalizeProtocol(protocol, isPattern) {
    protocol = maybeStripSuffix(protocol, ":");
    if (isPattern || protocol === "") {
      return protocol;
    }
    return protocolEncodeCallback(protocol);
  }
  function defaultPortForProtocol(protocol) {
    switch (protocol) {
      case "ws":
      case "http":
        return "80";
      case "wws":
      case "https":
        return "443";
      case "ftp":
        return "21";
      default:
        return "";
    }
  }
  function protocolEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/^[-+.A-Za-z0-9]*$/.test(input))
      return input.toLowerCase();
    throw new TypeError(`Invalid protocol '${input}'.`);
  }
  function usernameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.username = input;
    return url.username;
  }
  function passwordEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.password = input;
    return url.password;
  }
  function hostnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(input)) {
      throw new TypeError(`Invalid hostname '${input}'`);
    }
    const url = new URL("https://example.com");
    url.hostname = input;
    return url.hostname;
  }
  function ipv6HostnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/[^0-9a-fA-F[\]:]/g.test(input)) {
      throw new TypeError(`Invalid IPv6 hostname '${input}'`);
    }
    return input.toLowerCase();
  }
  function portEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/^[0-9]*$/.test(input) && parseInt(input) <= 65535) {
      return input;
    }
    throw new TypeError(`Invalid port '${input}'.`);
  }
  function standardURLPathnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.pathname = input[0] !== "/" ? "/-" + input : input;
    if (input[0] !== "/") {
      return url.pathname.substring(2, url.pathname.length);
    }
    return url.pathname;
  }
  function pathURLPathnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL(`data:${input}`);
    return url.pathname;
  }
  function searchEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.search = input;
    return url.search.substring(1, url.search.length);
  }
  function hashEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.hash = input;
    return url.hash.substring(1, url.hash.length);
  }
  var Parser = class {
    constructor(input) {
      this.tokenList = [];
      this.internalResult = {};
      this.tokenIndex = 0;
      this.tokenIncrement = 1;
      this.componentStart = 0;
      this.state = 0;
      this.groupDepth = 0;
      this.hostnameIPv6BracketDepth = 0;
      this.shouldTreatAsStandardURL = false;
      this.input = input;
    }
    get result() {
      return this.internalResult;
    }
    parse() {
      this.tokenList = lexer(this.input, true);
      for (; this.tokenIndex < this.tokenList.length; this.tokenIndex += this.tokenIncrement) {
        this.tokenIncrement = 1;
        if (this.tokenList[this.tokenIndex].type === "END") {
          if (this.state === 0) {
            this.rewind();
            if (this.isHashPrefix()) {
              this.changeState(9, 1);
            } else if (this.isSearchPrefix()) {
              this.changeState(8, 1);
              this.internalResult.hash = "";
            } else {
              this.changeState(7, 0);
              this.internalResult.search = "";
              this.internalResult.hash = "";
            }
            continue;
          } else if (this.state === 2) {
            this.rewindAndSetState(5);
            continue;
          }
          this.changeState(10, 0);
          break;
        }
        if (this.groupDepth > 0) {
          if (this.isGroupClose()) {
            this.groupDepth -= 1;
          } else {
            continue;
          }
        }
        if (this.isGroupOpen()) {
          this.groupDepth += 1;
          continue;
        }
        switch (this.state) {
          case 0:
            if (this.isProtocolSuffix()) {
              this.internalResult.username = "";
              this.internalResult.password = "";
              this.internalResult.hostname = "";
              this.internalResult.port = "";
              this.internalResult.pathname = "";
              this.internalResult.search = "";
              this.internalResult.hash = "";
              this.rewindAndSetState(1);
            }
            break;
          case 1:
            if (this.isProtocolSuffix()) {
              this.computeShouldTreatAsStandardURL();
              let nextState = 7;
              let skip = 1;
              if (this.shouldTreatAsStandardURL) {
                this.internalResult.pathname = "/";
              }
              if (this.nextIsAuthoritySlashes()) {
                nextState = 2;
                skip = 3;
              } else if (this.shouldTreatAsStandardURL) {
                nextState = 2;
              }
              this.changeState(nextState, skip);
            }
            break;
          case 2:
            if (this.isIdentityTerminator()) {
              this.rewindAndSetState(3);
            } else if (this.isPathnameStart() || this.isSearchPrefix() || this.isHashPrefix()) {
              this.rewindAndSetState(5);
            }
            break;
          case 3:
            if (this.isPasswordPrefix()) {
              this.changeState(4, 1);
            } else if (this.isIdentityTerminator()) {
              this.changeState(5, 1);
            }
            break;
          case 4:
            if (this.isIdentityTerminator()) {
              this.changeState(5, 1);
            }
            break;
          case 5:
            if (this.isIPv6Open()) {
              this.hostnameIPv6BracketDepth += 1;
            } else if (this.isIPv6Close()) {
              this.hostnameIPv6BracketDepth -= 1;
            }
            if (this.isPortPrefix() && !this.hostnameIPv6BracketDepth) {
              this.changeState(6, 1);
            } else if (this.isPathnameStart()) {
              this.changeState(7, 0);
            } else if (this.isSearchPrefix()) {
              this.changeState(8, 1);
            } else if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 6:
            if (this.isPathnameStart()) {
              this.changeState(7, 0);
            } else if (this.isSearchPrefix()) {
              this.changeState(8, 1);
            } else if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 7:
            if (this.isSearchPrefix()) {
              this.changeState(8, 1);
            } else if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 8:
            if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 9:
            break;
          case 10:
            break;
        }
      }
    }
    changeState(newState, skip) {
      switch (this.state) {
        case 0:
          break;
        case 1:
          this.internalResult.protocol = this.makeComponentString();
          break;
        case 2:
          break;
        case 3:
          this.internalResult.username = this.makeComponentString();
          break;
        case 4:
          this.internalResult.password = this.makeComponentString();
          break;
        case 5:
          this.internalResult.hostname = this.makeComponentString();
          break;
        case 6:
          this.internalResult.port = this.makeComponentString();
          break;
        case 7:
          this.internalResult.pathname = this.makeComponentString();
          break;
        case 8:
          this.internalResult.search = this.makeComponentString();
          break;
        case 9:
          this.internalResult.hash = this.makeComponentString();
          break;
        case 10:
          break;
      }
      this.changeStateWithoutSettingComponent(newState, skip);
    }
    changeStateWithoutSettingComponent(newState, skip) {
      this.state = newState;
      this.componentStart = this.tokenIndex + skip;
      this.tokenIndex += skip;
      this.tokenIncrement = 0;
    }
    rewind() {
      this.tokenIndex = this.componentStart;
      this.tokenIncrement = 0;
    }
    rewindAndSetState(newState) {
      this.rewind();
      this.state = newState;
    }
    safeToken(index) {
      if (index < 0) {
        index = this.tokenList.length - index;
      }
      if (index < this.tokenList.length) {
        return this.tokenList[index];
      }
      return this.tokenList[this.tokenList.length - 1];
    }
    isNonSpecialPatternChar(index, value) {
      const token = this.safeToken(index);
      return token.value === value && (token.type === "CHAR" || token.type === "ESCAPED_CHAR" || token.type === "INVALID_CHAR");
    }
    isProtocolSuffix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, ":");
    }
    nextIsAuthoritySlashes() {
      return this.isNonSpecialPatternChar(this.tokenIndex + 1, "/") && this.isNonSpecialPatternChar(this.tokenIndex + 2, "/");
    }
    isIdentityTerminator() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "@");
    }
    isPasswordPrefix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, ":");
    }
    isPortPrefix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, ":");
    }
    isPathnameStart() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "/");
    }
    isSearchPrefix() {
      if (this.isNonSpecialPatternChar(this.tokenIndex, "?")) {
        return true;
      }
      if (this.tokenList[this.tokenIndex].value !== "?") {
        return false;
      }
      const previousToken = this.safeToken(this.tokenIndex - 1);
      return previousToken.type !== "NAME" && previousToken.type !== "PATTERN" && previousToken.type !== "CLOSE" && previousToken.type !== "ASTERISK";
    }
    isHashPrefix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "#");
    }
    isGroupOpen() {
      return this.tokenList[this.tokenIndex].type == "OPEN";
    }
    isGroupClose() {
      return this.tokenList[this.tokenIndex].type == "CLOSE";
    }
    isIPv6Open() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "[");
    }
    isIPv6Close() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "]");
    }
    makeComponentString() {
      const token = this.tokenList[this.tokenIndex];
      const componentCharStart = this.safeToken(this.componentStart).index;
      return this.input.substring(componentCharStart, token.index);
    }
    computeShouldTreatAsStandardURL() {
      const options = {};
      Object.assign(options, DEFAULT_OPTIONS);
      options.encodePart = protocolEncodeCallback;
      const regexp = pathToRegexp(this.makeComponentString(), void 0, options);
      this.shouldTreatAsStandardURL = isSpecialScheme(regexp);
    }
  };
  var COMPONENTS = [
    "protocol",
    "username",
    "password",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash"
  ];
  var DEFAULT_PATTERN = "*";
  function extractValues(url, baseURL) {
    if (typeof url !== "string") {
      throw new TypeError(`parameter 1 is not of type 'string'.`);
    }
    const o = new URL(url, baseURL);
    return {
      protocol: o.protocol.substring(0, o.protocol.length - 1),
      username: o.username,
      password: o.password,
      hostname: o.hostname,
      port: o.port,
      pathname: o.pathname,
      search: o.search != "" ? o.search.substring(1, o.search.length) : void 0,
      hash: o.hash != "" ? o.hash.substring(1, o.hash.length) : void 0
    };
  }
  function applyInit(o, init, isPattern) {
    let baseURL;
    if (typeof init.baseURL === "string") {
      try {
        baseURL = new URL(init.baseURL);
        o.protocol = baseURL.protocol ? baseURL.protocol.substring(0, baseURL.protocol.length - 1) : "";
        o.username = baseURL.username;
        o.password = baseURL.password;
        o.hostname = baseURL.hostname;
        o.port = baseURL.port;
        o.pathname = baseURL.pathname;
        o.search = baseURL.search ? baseURL.search.substring(1, baseURL.search.length) : "";
        o.hash = baseURL.hash ? baseURL.hash.substring(1, baseURL.hash.length) : "";
      } catch {
        throw new TypeError(`invalid baseURL '${init.baseURL}'.`);
      }
    }
    if (typeof init.protocol === "string") {
      o.protocol = canonicalizeProtocol(init.protocol, isPattern);
    }
    if (typeof init.username === "string") {
      o.username = canonicalizeUsername(init.username, isPattern);
    }
    if (typeof init.password === "string") {
      o.password = canonicalizePassword(init.password, isPattern);
    }
    if (typeof init.hostname === "string") {
      o.hostname = canonicalizeHostname(init.hostname, isPattern);
    }
    if (typeof init.port === "string") {
      o.port = canonicalizePort(init.port, o.protocol, isPattern);
    }
    if (typeof init.pathname === "string") {
      o.pathname = init.pathname;
      if (baseURL && !isAbsolutePathname(o.pathname, isPattern)) {
        const slashIndex = baseURL.pathname.lastIndexOf("/");
        if (slashIndex >= 0) {
          o.pathname = baseURL.pathname.substring(0, slashIndex + 1) + o.pathname;
        }
      }
      o.pathname = canonicalizePathname(o.pathname, o.protocol, isPattern);
    }
    if (typeof init.search === "string") {
      o.search = canonicalizeSearch(init.search, isPattern);
    }
    if (typeof init.hash === "string") {
      o.hash = canonicalizeHash(init.hash, isPattern);
    }
    return o;
  }
  function escapePatternString(value) {
    return value.replace(/([+*?:{}()\\])/g, "\\$1");
  }
  function escapeRegexpString(value) {
    return value.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
  }
  function tokensToPattern(tokens, options) {
    const wildcardPattern = ".*";
    const segmentWildcardPattern = `[^${escapeRegexpString(options.delimiter || "/#?")}]+?`;
    const regexIdentifierPart2 = /[$_\u200C\u200D\p{ID_Continue}]/u;
    let result = "";
    for (let i = 0; i < tokens.length; ++i) {
      const token = tokens[i];
      const lastToken = i > 0 ? tokens[i - 1] : null;
      const nextToken = i < tokens.length - 1 ? tokens[i + 1] : null;
      if (typeof token === "string") {
        result += escapePatternString(token);
        continue;
      }
      if (token.pattern === "") {
        if (token.modifier === "") {
          result += escapePatternString(token.prefix);
          continue;
        }
        result += `{${escapePatternString(token.prefix)}}${token.modifier}`;
        continue;
      }
      const customName = typeof token.name !== "number";
      const optionsPrefixes = options.prefixes !== void 0 ? options.prefixes : "./";
      let needsGrouping = token.suffix !== "" || token.prefix !== "" && (token.prefix.length !== 1 || !optionsPrefixes.includes(token.prefix));
      if (!needsGrouping && customName && token.pattern === segmentWildcardPattern && token.modifier === "" && nextToken && !nextToken.prefix && !nextToken.suffix) {
        if (typeof nextToken === "string") {
          const code = nextToken.length > 0 ? nextToken[0] : "";
          needsGrouping = regexIdentifierPart2.test(code);
        } else {
          needsGrouping = typeof nextToken.name === "number";
        }
      }
      if (!needsGrouping && token.prefix === "" && lastToken && typeof lastToken === "string" && lastToken.length > 0) {
        const code = lastToken[lastToken.length - 1];
        needsGrouping = optionsPrefixes.includes(code);
      }
      if (needsGrouping) {
        result += "{";
      }
      result += escapePatternString(token.prefix);
      if (customName) {
        result += `:${token.name}`;
      }
      if (token.pattern === wildcardPattern) {
        if (!customName && (!lastToken || typeof lastToken === "string" || lastToken.modifier || needsGrouping || token.prefix !== "")) {
          result += "*";
        } else {
          result += `(${wildcardPattern})`;
        }
      } else if (token.pattern === segmentWildcardPattern) {
        if (!customName) {
          result += `(${segmentWildcardPattern})`;
        }
      } else {
        result += `(${token.pattern})`;
      }
      if (token.pattern === segmentWildcardPattern && customName && token.suffix !== "") {
        if (regexIdentifierPart2.test(token.suffix[0])) {
          result += "\\";
        }
      }
      result += escapePatternString(token.suffix);
      if (needsGrouping) {
        result += "}";
      }
      result += token.modifier;
    }
    return result;
  }
  var URLPattern2 = class {
    constructor(init = {}, baseURL) {
      this.regexp = {};
      this.keys = {};
      this.component_pattern = {};
      try {
        if (typeof init === "string") {
          const parser = new Parser(init);
          parser.parse();
          init = parser.result;
          if (baseURL) {
            if (typeof baseURL === "string") {
              init.baseURL = baseURL;
            } else {
              throw new TypeError(`'baseURL' parameter is not of type 'string'.`);
            }
          } else if (typeof init.protocol !== "string") {
            throw new TypeError(`A base URL must be provided for a relative constructor string.`);
          }
        } else if (baseURL) {
          throw new TypeError(`parameter 1 is not of type 'string'.`);
        }
        if (!init || typeof init !== "object") {
          throw new TypeError(`parameter 1 is not of type 'string' and cannot convert to dictionary.`);
        }
        const defaults = {
          pathname: DEFAULT_PATTERN,
          protocol: DEFAULT_PATTERN,
          username: DEFAULT_PATTERN,
          password: DEFAULT_PATTERN,
          hostname: DEFAULT_PATTERN,
          port: DEFAULT_PATTERN,
          search: DEFAULT_PATTERN,
          hash: DEFAULT_PATTERN
        };
        this.pattern = applyInit(defaults, init, true);
        if (defaultPortForProtocol(this.pattern.protocol) === this.pattern.port) {
          this.pattern.port = "";
        }
        let component;
        for (component of COMPONENTS) {
          if (!(component in this.pattern))
            continue;
          const options = {};
          const pattern = this.pattern[component];
          this.keys[component] = [];
          switch (component) {
            case "protocol":
              Object.assign(options, DEFAULT_OPTIONS);
              options.encodePart = protocolEncodeCallback;
              break;
            case "username":
              Object.assign(options, DEFAULT_OPTIONS);
              options.encodePart = usernameEncodeCallback;
              break;
            case "password":
              Object.assign(options, DEFAULT_OPTIONS);
              options.encodePart = passwordEncodeCallback;
              break;
            case "hostname":
              Object.assign(options, HOSTNAME_OPTIONS);
              if (treatAsIPv6Hostname(pattern)) {
                options.encodePart = ipv6HostnameEncodeCallback;
              } else {
                options.encodePart = hostnameEncodeCallback;
              }
              break;
            case "port":
              Object.assign(options, DEFAULT_OPTIONS);
              options.encodePart = portEncodeCallback;
              break;
            case "pathname":
              if (isSpecialScheme(this.regexp.protocol)) {
                Object.assign(options, PATHNAME_OPTIONS);
                options.encodePart = standardURLPathnameEncodeCallback;
              } else {
                Object.assign(options, DEFAULT_OPTIONS);
                options.encodePart = pathURLPathnameEncodeCallback;
              }
              break;
            case "search":
              Object.assign(options, DEFAULT_OPTIONS);
              options.encodePart = searchEncodeCallback;
              break;
            case "hash":
              Object.assign(options, DEFAULT_OPTIONS);
              options.encodePart = hashEncodeCallback;
              break;
          }
          try {
            const tokens = parse(pattern, options);
            this.regexp[component] = tokensToRegexp(tokens, this.keys[component], options);
            this.component_pattern[component] = tokensToPattern(tokens, options);
          } catch {
            throw new TypeError(`invalid ${component} pattern '${this.pattern[component]}'.`);
          }
        }
      } catch (err) {
        throw new TypeError(`Failed to construct 'URLPattern': ${err.message}`);
      }
    }
    test(input = {}, baseURL) {
      let values = {
        pathname: "",
        protocol: "",
        username: "",
        password: "",
        hostname: "",
        port: "",
        search: "",
        hash: ""
      };
      if (typeof input !== "string" && baseURL) {
        throw new TypeError(`parameter 1 is not of type 'string'.`);
      }
      if (typeof input === "undefined") {
        return false;
      }
      try {
        if (typeof input === "object") {
          values = applyInit(values, input, false);
        } else {
          values = applyInit(values, extractValues(input, baseURL), false);
        }
      } catch (err) {
        return false;
      }
      let component;
      for (component in this.pattern) {
        if (!this.regexp[component].exec(values[component])) {
          return false;
        }
      }
      return true;
    }
    exec(input = {}, baseURL) {
      let values = {
        pathname: "",
        protocol: "",
        username: "",
        password: "",
        hostname: "",
        port: "",
        search: "",
        hash: ""
      };
      if (typeof input !== "string" && baseURL) {
        throw new TypeError(`parameter 1 is not of type 'string'.`);
      }
      if (typeof input === "undefined") {
        return;
      }
      try {
        if (typeof input === "object") {
          values = applyInit(values, input, false);
        } else {
          values = applyInit(values, extractValues(input, baseURL), false);
        }
      } catch (err) {
        return null;
      }
      let result = {};
      if (baseURL) {
        result.inputs = [input, baseURL];
      } else {
        result.inputs = [input];
      }
      let component;
      for (component in this.pattern) {
        let match2 = this.regexp[component].exec(values[component]);
        if (!match2) {
          return null;
        }
        let groups = {};
        for (let [i, key2] of this.keys[component].entries()) {
          if (typeof key2.name === "string" || typeof key2.name === "number") {
            let value = match2[i + 1];
            groups[key2.name] = value;
          }
        }
        result[component] = {
          input: values[component] || "",
          groups
        };
      }
      return result;
    }
    get protocol() {
      return this.component_pattern.protocol;
    }
    get username() {
      return this.component_pattern.username;
    }
    get password() {
      return this.component_pattern.password;
    }
    get hostname() {
      return this.component_pattern.hostname;
    }
    get port() {
      return this.component_pattern.port;
    }
    get pathname() {
      return this.component_pattern.pathname;
    }
    get search() {
      return this.component_pattern.search;
    }
    get hash() {
      return this.component_pattern.hash;
    }
  };
  if (!globalThis.URLPattern) {
    globalThis.URLPattern = URLPattern2;
  }

  // src/routes/index.ts
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/index.js
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/context.js
  init_env();

  // node_modules/.pnpm/ts-functional-pipe@3.1.2/node_modules/ts-functional-pipe/dist/ts-functional-pipe.es5.js
  init_env();

  // node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/modules/index.js
  init_env();
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn
  } = import_tslib.default;

  // node_modules/.pnpm/ts-functional-pipe@3.1.2/node_modules/ts-functional-pipe/dist/ts-functional-pipe.es5.js
  function pipeImpl() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _a7 = __read(args), o1 = _a7[0], operations = _a7.slice(1);
    return function() {
      var args2 = [];
      for (var _i2 = 0; _i2 < arguments.length; _i2++) {
        args2[_i2] = arguments[_i2];
      }
      return operations.reduce(function(acc, f) {
        return f(acc);
      }, o1.apply(void 0, __spreadArray([], __read(args2), false)));
    };
  }
  function pipe(o1) {
    var operations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      operations[_i - 1] = arguments[_i];
    }
    return pipeImpl.apply(void 0, __spreadArray([o1], __read(operations), false));
  }

  // node_modules/.pnpm/@worker-tools+resolvable-promise@0.2.0-pre.4/node_modules/@worker-tools/resolvable-promise/esm/index.js
  init_env();
  var _ResolvablePromise_promise;
  var _ResolvablePromise_resolve;
  var _ResolvablePromise_reject;
  var _ResolvablePromise_settled;
  var _a;
  _ResolvablePromise_promise = /* @__PURE__ */ new WeakMap(), _ResolvablePromise_resolve = /* @__PURE__ */ new WeakMap(), _ResolvablePromise_reject = /* @__PURE__ */ new WeakMap(), _ResolvablePromise_settled = /* @__PURE__ */ new WeakMap(), _a = Symbol.toStringTag;

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/utils/append-only-list.js
  init_env();
  var _arr = /* @__PURE__ */ new WeakMap();
  var AppendOnlyList = class {
    constructor() {
      _arr.set(this, []);
    }
    get length() {
      return _arr.get(this).length;
    }
    toString() {
      return _arr.get(this).toString();
    }
    toLocaleString() {
      return _arr.get(this).toLocaleString();
    }
    push(...items) {
      return _arr.get(this).push(...items);
    }
    entries() {
      return _arr.get(this).entries();
    }
    keys() {
      return _arr.get(this).keys();
    }
    values() {
      return _arr.get(this).values();
    }
    [Symbol.iterator]() {
      return _arr.get(this)[Symbol.iterator]();
    }
    [Symbol.unscopables]() {
      throw new Error("Method not implemented.");
    }
  };

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/context.js
  var EffectsList = class extends AppendOnlyList {
  };
  function executeEffects(effects, response) {
    var _a7;
    return (_a7 = [...effects].reduceRight(async (response2, effect) => {
      var _a8;
      return (_a8 = effect(await response2)) !== null && _a8 !== void 0 ? _a8 : response2;
    }, response)) !== null && _a7 !== void 0 ? _a7 : response;
  }

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/basics.js
  init_env();
  var basics = () => async (ax) => {
    var _a7, _b3, _c, _d, _e, _f;
    const x4 = await ax;
    const { request, match: match2 } = x4;
    const { headers } = request;
    const method = request.method;
    const url = new URL(request.url);
    const { pathname, searchParams } = url;
    const userAgent = (_a7 = headers.get("user-agent")) !== null && _a7 !== void 0 ? _a7 : "";
    const ip = (_e = (_b3 = headers.get("x-forwarded-for")) !== null && _b3 !== void 0 ? _b3 : (_d = (_c = x4.connInfo) === null || _c === void 0 ? void 0 : _c.remoteAddr) === null || _d === void 0 ? void 0 : _d.hostname) !== null && _e !== void 0 ? _e : "";
    const params = (_f = match2 === null || match2 === void 0 ? void 0 : match2.pathname.groups) !== null && _f !== void 0 ? _f : {};
    const query2 = Object.fromEntries(searchParams);
    return Object.assign(x4, { headers, method, url, pathname, searchParams, userAgent, ip, params, query: query2 });
  };

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/content-negotiation.js
  init_env();

  // node_modules/.pnpm/@worker-tools+response-creators@1.2.0-pre.5/node_modules/@worker-tools/response-creators/esm/index.js
  init_env();
  var mkResponse = (status, statusText) => (body = null, init = {}) => new Response(body, {
    ...init,
    status,
    statusText
  });
  var mkRedirect = (status, statusText) => (location2, init = {}) => new Response(null, {
    ...init,
    status,
    statusText,
    headers: [
      ...(init === null || init === void 0 ? void 0 : init.headers) ? Array.isArray(init.headers) ? init.headers : new Headers(init.headers) : [],
      ["Location", location2.toString()]
    ]
  });
  var mkUnauthorized = (status, statusText) => (realm = "", init = {}) => new Response(null, {
    ...init,
    status,
    statusText,
    headers: [
      ...(init === null || init === void 0 ? void 0 : init.headers) ? Array.isArray(init.headers) ? init.headers : new Headers(init.headers) : [],
      ["WWW-Authenticate", `Basic realm="${realm}", charset="UTF-8"`]
    ]
  });
  var mkNotModified = (status, statusText) => (ifNoneMatch, ifModifiedSince, init = {}) => new Response(null, {
    ...init,
    status,
    statusText,
    headers: [
      ...(init === null || init === void 0 ? void 0 : init.headers) ? Array.isArray(init.headers) ? init.headers : new Headers(init.headers) : [],
      ["If-None-Match", ifNoneMatch],
      ["If-Modified-Since", ifModifiedSince.toUTCString()]
    ]
  });
  var ok = mkResponse(200, "OK");
  var created = mkResponse(201, "Created");
  var accepted = mkResponse(202, "Accepted");
  var nonAuthoritativeInformation = mkResponse(203, "Non-Authoritative Information");
  var noContent = mkResponse(204, "No Content");
  var resetContent = mkResponse(205, "Reset Content");
  var partialContent = mkResponse(206, "Partial Content");
  var multiStatus = mkResponse(207, "Multi-Status");
  var alreadyReported = mkResponse(208, "Already Reported");
  var imUsed = mkResponse(226, "IM Used");
  var multipleChoices = mkRedirect(300, "Multiple Choices");
  var movedPermanently = mkRedirect(301, "Moved Permanently");
  var found = mkRedirect(302, "Found");
  var seeOther = mkRedirect(303, "See Other");
  var notModified = mkNotModified(304, "Not Modified");
  var temporaryRedirect = mkRedirect(307, "Temporary Redirect");
  var permanentRedirect = mkRedirect(308, "Permanent Redirect");
  var badRequest = mkResponse(400, "Bad Request");
  var unauthorized = mkUnauthorized(401, "Unauthorized");
  var paymentRequired = mkResponse(402, "Payment Required");
  var forbidden = mkResponse(403, "Forbidden");
  var notFound = mkResponse(404, "Not Found");
  var methodNotAllowed = mkResponse(405, "Method Not Allowed");
  var notAcceptable = mkResponse(406, "Not Acceptable");
  var proxyAuthenticationRequired = mkResponse(407, "Proxy Authentication Required");
  var requestTimeout = mkResponse(408, "Request Timeout");
  var conflict = mkResponse(409, "Conflict");
  var gone = mkResponse(410, "Gone");
  var lengthRequired = mkResponse(411, "Length Required");
  var preconditionFailed = mkResponse(412, "Precondition Failed");
  var payloadTooLarge = mkResponse(413, "Payload Too Large");
  var uriTooLong = mkResponse(414, "URI Too Long");
  var unsupportedMediaType = mkResponse(415, "Unsupported Media Type");
  var rangeNotSatisfiable = mkResponse(416, "Range Not Satisfiable");
  var expectationFailed = mkResponse(417, "Expectation Failed");
  var imATeapot = mkResponse(418, "I'm a teapot");
  var misdirectedRequest = mkResponse(421, "Misdirected Request");
  var unprocessableEntity = mkResponse(422, "Unprocessable Entity");
  var locked = mkResponse(423, "Locked");
  var failedDependency = mkResponse(424, "Failed Dependency");
  var tooEarly = mkResponse(425, "Too Early");
  var upgradeRequired = mkResponse(426, "Upgrade Required");
  var preconditionRequired = mkResponse(428, "Precondition Required");
  var tooManyRequests = mkResponse(429, "Too Many Requests");
  var requestHeaderFieldsTooLarge = mkResponse(431, "Request Header Fields Too Large");
  var unavailableForLegalReasons = mkResponse(451, "Unavailable For Legal Reasons");
  var internalServerError = mkResponse(500, "Internal Server Error");
  var notImplemented = mkResponse(501, "Not Implemented");
  var badGateway = mkResponse(502, "Bad Gateway");
  var serviceUnavailable = mkResponse(503, "Service Unavailable");
  var gatewayTimeout = mkResponse(504, "Gateway Timeout");
  var httpVersionNotSupported = mkResponse(505, "HTTP Version Not Supported");
  var variantAlsoNegotiates = mkResponse(506, "Variant Also Negotiates");
  var insufficientStorage = mkResponse(507, "Insufficient Storage");
  var loopDetected = mkResponse(508, "Loop Detected");
  var notExtended = mkResponse(510, "Not Extended");
  var networkAuthenticationRequired = mkResponse(511, "Network Authentication Required");

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/content-negotiation.js
  var import_negotiated = __toESM(require_lib(), 1);
  var weightSortFn = (a, b) => a.weight >= b.weight ? a : b;
  var ACCEPT = "Accept";
  var CONTENT_TYPE = "Content-Type";
  var VARY = "Vary";
  function contentTypes(types) {
    return async (ax) => {
      const ctx = await ax;
      const { headers } = ctx.request;
      const type = [...import_negotiated.default.mediaTypes(headers.get(ACCEPT))].filter((t) => !types || types.includes(t.type)).reduce(weightSortFn, { weight: -1 }).type;
      if (headers.has(ACCEPT) && types && !type)
        throw notAcceptable();
      ctx.effects.push((response) => {
        var _a7;
        if (!response.headers.has(CONTENT_TYPE))
          response.headers.set(CONTENT_TYPE, type);
        if (((_a7 = types === null || types === void 0 ? void 0 : types.length) !== null && _a7 !== void 0 ? _a7 : 0) > 1)
          response.headers.append(VARY, ACCEPT);
        return response;
      });
      return Object.assign(ctx, { type });
    };
  }

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/body-parser.js
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/cookies.js
  init_env();

  // node_modules/.pnpm/@worker-tools+request-cookie-store@0.5.0-pre.9/node_modules/@worker-tools/request-cookie-store/esm/index.js
  init_env();

  // node_modules/.pnpm/cookie-store-interface@0.1.1/node_modules/cookie-store-interface/index.js
  init_env();

  // node_modules/.pnpm/@worker-tools+request-cookie-store@0.5.0-pre.9/node_modules/@worker-tools/request-cookie-store/esm/set-cookie.js
  init_env();

  // node_modules/.pnpm/@worker-tools+request-cookie-store@0.5.0-pre.9/node_modules/@worker-tools/request-cookie-store/esm/index.js
  var _RequestCookieStore_origin;
  var _RequestCookieStore_map;
  var _RequestCookieStore_changes;
  _RequestCookieStore_origin = /* @__PURE__ */ new WeakMap(), _RequestCookieStore_map = /* @__PURE__ */ new WeakMap(), _RequestCookieStore_changes = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/@worker-tools+signed-cookie-store@0.3.0-pre.7/node_modules/@worker-tools/signed-cookie-store/esm/index.js
  init_env();

  // node_modules/.pnpm/typed-array-utils@0.2.2/node_modules/typed-array-utils/index.js
  init_env();
  var bufferSourceToUint8Array = (bs) => bs instanceof ArrayBuffer ? new Uint8Array(bs) : new Uint8Array(bs.buffer, bs.byteOffset, bs.byteLength);
  var bs2u8 = bufferSourceToUint8Array;
  var byteToHex = (byte) => byte.toString(16).padStart(2, "0");
  var hexToByte = (hexOctet) => parseInt(hexOctet, 16);
  var hexStringToBytes = (hexString) => new Uint8Array(hexString.match(/[0-9a-f]{1,2}/ig).map(hexToByte));
  var bytesToHexArray = (bufferSource) => Array.from(bs2u8(bufferSource), (byte) => byteToHex(byte));
  function concatUint8Arrays(...uint8Arrays) {
    const size = uint8Arrays.reduce((size2, u8) => size2 + u8.length, 0);
    const res = new Uint8Array(size);
    let i = 0;
    for (const u8 of uint8Arrays) {
      res.set(u8, i);
      i += u8.length;
    }
    return res;
  }

  // node_modules/.pnpm/base64-encoding@0.15.0-alpha.0/node_modules/base64-encoding/esm/index.js
  init_env();

  // node_modules/.pnpm/base64-encoding@0.15.0-alpha.0/node_modules/base64-encoding/esm/base64.js
  init_env();

  // node_modules/.pnpm/base64-encoding@0.15.0-alpha.0/node_modules/base64-encoding/esm/base64-js.js
  init_env();
  var b64lookup = [];
  var urlLookup = [];
  var revLookup = [];
  var CODE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var CODE_B64 = CODE + "+/";
  var CODE_URL = CODE + "-_";
  for (let i = 0, len = CODE_B64.length; i < len; ++i) {
    b64lookup[i] = CODE_B64[i];
    urlLookup[i] = CODE_URL[i];
    revLookup[CODE_B64.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;

  // node_modules/.pnpm/base64-encoding@0.15.0-alpha.0/node_modules/base64-encoding/esm/base64.js
  var WASM = `
AGFzbQEAAAABFwRgAABgAX8Bf2ACf38Bf2AEf39/fwF/AwYFAAECAQMFAwEAAgYrB38BQaCLBAt/AEGA
CAt/AEGRCwt/AEGACAt/AEGgiwQLfwBBAAt/AEEBCwe7AQwGbWVtb3J5AgARX193YXNtX2NhbGxfY3Rv
cnMAABBCYXNlNjRkZWNvZGVfbGVuAAEMQmFzZTY0ZGVjb2RlAAIQQmFzZTY0ZW5jb2RlX2xlbgADDEJh
c2U2NGVuY29kZQAEDF9fZHNvX2hhbmRsZQMBCl9fZGF0YV9lbmQDAg1fX2dsb2JhbF9iYXNlAwMLX19o
ZWFwX2Jhc2UDBA1fX21lbW9yeV9iYXNlAwUMX190YWJsZV9iYXNlAwYKqAcFAgALPgEDf0EAIQEDQCAA
IAFqIQIgAUEBaiIDIQEgAi0AAEGAiICAAGotAABBwABJDQALIANBAmpBBG1BA2xBAWoLxQMBBH9BAyEC
A0AgASACaiEDIAJBAWoiBCECIANBfWotAABBgIiAgABqLQAAQcAASQ0ACwJAIARBfGoiAkEFSA0AIAQh
AgNAIAAgAUEBaiIDLQAAQYCIgIAAai0AAEEEdiABLQAAQYCIgIAAai0AAEECdHI6AAAgAEEBaiABQQJq
IgUtAABBgIiAgABqLQAAQQJ2IAMtAABBgIiAgABqLQAAQQR0cjoAACAAQQJqIAFBA2otAABBgIiAgABq
LQAAIAUtAABBgIiAgABqLQAAQQZ0cjoAACAAQQNqIQAgAUEEaiEBIAJBfGoiAkEISg0ACyACQXxqIQIL
AkAgAkECSA0AIAAgAS0AAUGAiICAAGotAABBBHYgAS0AAEGAiICAAGotAABBAnRyOgAAAkAgAkECRw0A
IABBAWohAAwBCyAAIAEtAAJBgIiAgABqLQAAQQJ2IAEtAAFBgIiAgABqLQAAQQR0cjoAAQJAIAJBBE4N
ACAAQQJqIQAMAQsgACABLQADQYCIgIAAai0AACABLQACQYCIgIAAai0AAEEGdHI6AAIgAEEDaiEACyAA
QQA6AAAgBEF/akEEbUEDbEEAIAJrQQNxawsQACAAQQJqQQNtQQJ0QQFyC4sDAQZ/QYCKgIAAQdCKgIAA
IANBAUYbIQRBACEFIAAhBgJAIAJBA0gNACACQX5qIQdBACEFIAAhBgNAIAYgBCABIAVqIggtAABBAnZq
LQAAOgAAIAZBAWogBCAILQAAQQR0QTBxIAhBAWoiCS0AAEEEdnJqLQAAOgAAIAZBAmogBCAJLQAAQQJ0
QTxxIAhBAmoiCC0AAEEGdnJqLQAAOgAAIAZBA2ogBCAILQAAQT9xai0AADoAACAGQQRqIQYgBUEDaiIF
IAdIDQALCwJAIAUgAk4NACAGIAQgASAFaiIILQAAQQJ2ai0AADoAACAILQAAQQR0QTBxIQkCQAJAAkAg
BSACQX9qRw0AIAYgBCAJai0AADoAASADRQ0BIAZBAmohBgwDCyAGIAQgCSAIQQFqIggtAABBBHZyai0A
ADoAASAGIAQgCC0AAEECdEE8cWotAAA6AAIgA0UNASAGQQNqIQYMAgsgBkE9OgACCyAGQT06AAMgBkEE
aiEGCyAGQQA6AAAgBiAAa0EBagsLmQMBAEGACAuRA0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA
QEBAQEBAQEBAQEBAQEA+QD5APzQ1Njc4OTo7PD1AQEBAQEBAAAECAwQFBgcICQoLDA0ODxAREhMUFRYX
GBlAQEBAP0AaGxwdHh8gISIjJCUmJygpKissLS4vMDEyM0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA
QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA
QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQkNERUZHSElKS0xN
Tk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fAAAAAAAAAAAA
AAAAAAAAAEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXow
MTIzNDU2Nzg5Ky8AAHsEbmFtZQFUBQARX193YXNtX2NhbGxfY3RvcnMBEEJhc2U2NGRlY29kZV9sZW4C
DEJhc2U2NGRlY29kZQMQQmFzZTY0ZW5jb2RlX2xlbgQMQmFzZTY0ZW5jb2RlBxIBAA9fX3N0YWNrX3Bv
aW50ZXIJCgEABy5yb2RhdGEALwlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQEOSG9tZWJyZXcgY2xhbmcG
MTMuMC4x
`.replace(/\n/g, "").trim();
  var BYTES_PER_PAGE = 64 * 1024;
  var textEncodeInto = "encodeInto" in TextEncoder.prototype ? (encoder, uint8, str) => (encoder.encodeInto(str, uint8), uint8) : (encoder, uint8, str) => (uint8.set(encoder.encode(str)), uint8);

  // node_modules/.pnpm/base64-encoding@0.15.0-alpha.0/node_modules/base64-encoding/esm/index.js
  var _Base64Encoder_provider;
  var _Base64Encoder_urlFriendly;
  var _Base64Decoder_provider;
  _Base64Encoder_provider = /* @__PURE__ */ new WeakMap(), _Base64Encoder_urlFriendly = /* @__PURE__ */ new WeakMap();
  _Base64Decoder_provider = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/@worker-tools+signed-cookie-store@0.3.0-pre.7/node_modules/@worker-tools/signed-cookie-store/esm/index.js
  var _SignedCookieStore_store;
  var _SignedCookieStore_keyring;
  var _SignedCookieStore_key;
  var _SignedCookieStore_verify;
  var _SignedCookieStore_sign;
  _SignedCookieStore_store = /* @__PURE__ */ new WeakMap(), _SignedCookieStore_keyring = /* @__PURE__ */ new WeakMap(), _SignedCookieStore_key = /* @__PURE__ */ new WeakMap(), _SignedCookieStore_verify = /* @__PURE__ */ new WeakMap(), _SignedCookieStore_sign = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/@worker-tools+encrypted-cookie-store@0.3.0-pre.5/node_modules/@worker-tools/encrypted-cookie-store/esm/index.js
  init_env();

  // node_modules/.pnpm/@worker-tools+encrypted-cookie-store@0.3.0-pre.5/node_modules/@worker-tools/encrypted-cookie-store/esm/aggregate-error.js
  init_env();
  var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _AggregateErrorPolyfill_errors;
  var AggregateErrorPolyfill = class extends Error {
    constructor(errors, message = "") {
      super(message);
      _AggregateErrorPolyfill_errors.set(this, void 0);
      __classPrivateFieldSet2(this, _AggregateErrorPolyfill_errors, [...errors], "f");
    }
    get name() {
      return "AggregateError";
    }
    get errors() {
      return [...__classPrivateFieldGet2(this, _AggregateErrorPolyfill_errors, "f")];
    }
  };
  _AggregateErrorPolyfill_errors = /* @__PURE__ */ new WeakMap();
  var AggregateError = "AggregateError" in self ? self.AggregateError : AggregateErrorPolyfill;

  // node_modules/.pnpm/@worker-tools+encrypted-cookie-store@0.3.0-pre.5/node_modules/@worker-tools/encrypted-cookie-store/esm/index.js
  var _EncryptedCookieStore_store;
  var _EncryptedCookieStore_keyring;
  var _EncryptedCookieStore_key;
  var _EncryptedCookieStore_decrypt;
  _EncryptedCookieStore_store = /* @__PURE__ */ new WeakMap(), _EncryptedCookieStore_keyring = /* @__PURE__ */ new WeakMap(), _EncryptedCookieStore_key = /* @__PURE__ */ new WeakMap(), _EncryptedCookieStore_decrypt = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/utils/middleware-cookie-store.js
  init_env();

  // node_modules/.pnpm/@worker-tools+extendable-promise@0.2.0-pre.8/node_modules/@worker-tools/extendable-promise/esm/index.js
  init_env();
  var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ExtendablePromise_instances;
  var _ExtendablePromise_values;
  var _ExtendablePromise_promise;
  var _ExtendablePromise_numAdded;
  var _ExtendablePromise_numSettled;
  var _ExtendablePromise_fulfill;
  var _ExtendablePromise_reject;
  var _a2;
  _ExtendablePromise_values = /* @__PURE__ */ new WeakMap(), _ExtendablePromise_promise = /* @__PURE__ */ new WeakMap(), _ExtendablePromise_numAdded = /* @__PURE__ */ new WeakMap(), _ExtendablePromise_numSettled = /* @__PURE__ */ new WeakMap(), _ExtendablePromise_instances = /* @__PURE__ */ new WeakSet(), _ExtendablePromise_fulfill = function _ExtendablePromise_fulfill2(i, value) {
    var _b3;
    __classPrivateFieldGet3(this, _ExtendablePromise_values, "f")[i] = { status: "fulfilled", value };
    if (__classPrivateFieldSet3(this, _ExtendablePromise_numSettled, (_b3 = __classPrivateFieldGet3(this, _ExtendablePromise_numSettled, "f"), ++_b3), "f") === __classPrivateFieldGet3(this, _ExtendablePromise_numAdded, "f")) {
      __classPrivateFieldGet3(this, _ExtendablePromise_promise, "f").resolve(__classPrivateFieldGet3(this, _ExtendablePromise_values, "f"));
    }
  }, _ExtendablePromise_reject = function _ExtendablePromise_reject2(i, reason) {
    var _b3;
    __classPrivateFieldGet3(this, _ExtendablePromise_values, "f")[i] = { status: "rejected", reason };
    if (__classPrivateFieldSet3(this, _ExtendablePromise_numSettled, (_b3 = __classPrivateFieldGet3(this, _ExtendablePromise_numSettled, "f"), ++_b3), "f") === __classPrivateFieldGet3(this, _ExtendablePromise_numAdded, "f")) {
      __classPrivateFieldGet3(this, _ExtendablePromise_promise, "f").resolve(__classPrivateFieldGet3(this, _ExtendablePromise_values, "f"));
    }
  }, _a2 = Symbol.toStringTag;

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/utils/middleware-cookie-store.js
  var _MiddlewareCookieStore_promise;
  var _MiddlewareCookieStore_store;
  _MiddlewareCookieStore_promise = /* @__PURE__ */ new WeakMap(), _MiddlewareCookieStore_store = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/utils/headers-set-cookie-fix.js
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/utils/unsettle.js
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/utils/aggregate-error.js
  init_env();
  var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _AggregateErrorPolyfill_errors2;
  var AggregateErrorPolyfill2 = class extends Error {
    constructor(errors, message = "") {
      super(message);
      _AggregateErrorPolyfill_errors2.set(this, void 0);
      __classPrivateFieldSet4(this, _AggregateErrorPolyfill_errors2, [...errors], "f");
    }
    get name() {
      return "AggregateError";
    }
    get errors() {
      return [...__classPrivateFieldGet4(this, _AggregateErrorPolyfill_errors2, "f")];
    }
  };
  _AggregateErrorPolyfill_errors2 = /* @__PURE__ */ new WeakMap();
  var AggregateError2 = "AggregateError" in self ? self.AggregateError : AggregateErrorPolyfill2;

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/cors.js
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/session.js
  init_env();

  // node_modules/.pnpm/uuid-class@0.13.0-alpha.0/node_modules/uuid-class/esm/index.js
  init_env();
  function _bytesToUUIDString(uint8Array) {
    const hexArray = bytesToHexArray(uint8Array);
    hexArray.splice(4, 0, "-");
    hexArray.splice(7, 0, "-");
    hexArray.splice(10, 0, "-");
    hexArray.splice(13, 0, "-");
    return hexArray.join("");
  }
  function _v4() {
    const uuid = crypto.getRandomValues(new Uint8Array(16));
    uuid[6] = uuid[6] & 15 | 64;
    uuid[8] = uuid[8] & 63 | 128;
    return uuid.buffer;
  }
  function _fromString(str) {
    const hex = str.replace(/[^0-9a-f]/gi, "").slice(0, 32);
    if (hex.length < 32)
      throw Error("UUID too short");
    return hexStringToBytes(hex).buffer;
  }
  function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    return new TextEncoder().encode(str);
  }
  async function _v5(value, namespace) {
    const valueBytes = typeof value === "string" ? stringToBytes(value) : bufferSourceToUint8Array(value);
    const namespaceUUID = typeof namespace === "string" ? new UUID(namespace) : namespace;
    const hashBytes = new Uint8Array(await crypto.subtle.digest("SHA-1", concatUint8Arrays(namespaceUUID, valueBytes)));
    hashBytes[6] = hashBytes[6] & 15 | 80;
    hashBytes[8] = hashBytes[8] & 63 | 128;
    return hashBytes.buffer.slice(0, 16);
  }
  var UUID = class extends Uint8Array {
    static v4() {
      return new UUID(_v4());
    }
    static async v5(value, namespace) {
      return new UUID(await _v5(value, namespace));
    }
    constructor(value, byteOffset) {
      if (value == null) {
        super(_v4());
      } else if (typeof value === "string") {
        super(_fromString(value));
      } else if (value instanceof UUID) {
        super(value.buffer.slice(0));
      } else {
        const u8 = value instanceof ArrayBuffer || value instanceof SharedArrayBuffer ? new Uint8Array(value, byteOffset !== null && byteOffset !== void 0 ? byteOffset : 0, 16) : "length" in value ? new Uint8Array(value) : new Uint8Array(value);
        if (u8.length < 16)
          throw Error("UUID too short");
        super(u8.buffer.slice(0, 16));
      }
    }
    get id() {
      return _bytesToUUIDString(this);
    }
    get uuid() {
      return _bytesToUUIDString(this);
    }
    toString() {
      return _bytesToUUIDString(this);
    }
    toJSON() {
      return _bytesToUUIDString(this);
    }
    static get [Symbol.species]() {
      return Uint8Array;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `UUID [ ${this.uuid} ]`;
    }
    [Symbol.for("Deno.customInspect")]() {
      return `UUID [ ${this.uuid} ]`;
    }
  };

  // node_modules/.pnpm/msgpackr@1.5.6/node_modules/msgpackr/index.js
  init_env();

  // node_modules/.pnpm/msgpackr@1.5.6/node_modules/msgpackr/pack.js
  init_env();

  // node_modules/.pnpm/msgpackr@1.5.6/node_modules/msgpackr/unpack.js
  init_env();
  var decoder;
  try {
    decoder = new TextDecoder();
  } catch (error) {
  }
  var src;
  var srcEnd;
  var position = 0;
  var EMPTY_ARRAY = [];
  var strings = EMPTY_ARRAY;
  var stringPosition = 0;
  var currentUnpackr = {};
  var currentStructures;
  var srcString;
  var srcStringStart = 0;
  var srcStringEnd = 0;
  var bundledStrings;
  var referenceMap;
  var currentExtensions = [];
  var dataView;
  var defaultOptions = {
    useRecords: false,
    mapsAsObjects: true
  };
  var C1Type = class {
  };
  var C1 = new C1Type();
  C1.name = "MessagePack 0xC1";
  var sequentialMode = false;
  var inlineObjectReadThreshold = 2;
  try {
    new Function("");
  } catch (error) {
    inlineObjectReadThreshold = Infinity;
  }
  var Unpackr = class {
    constructor(options) {
      if (options) {
        if (options.useRecords === false && options.mapsAsObjects === void 0)
          options.mapsAsObjects = true;
        if (options.structures)
          options.structures.sharedLength = options.structures.length;
        else if (options.getStructures) {
          (options.structures = []).uninitialized = true;
          options.structures.sharedLength = 0;
        }
      }
      Object.assign(this, options);
    }
    unpack(source, end) {
      if (src) {
        return saveState(() => {
          clearSource();
          return this ? this.unpack(source, end) : Unpackr.prototype.unpack.call(defaultOptions, source, end);
        });
      }
      srcEnd = end > -1 ? end : source.length;
      position = 0;
      stringPosition = 0;
      srcStringEnd = 0;
      srcString = null;
      strings = EMPTY_ARRAY;
      bundledStrings = null;
      src = source;
      try {
        dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
      } catch (error) {
        src = null;
        if (source instanceof Uint8Array)
          throw error;
        throw new Error("Source must be a Uint8Array or Buffer but was a " + (source && typeof source == "object" ? source.constructor.name : typeof source));
      }
      if (this instanceof Unpackr) {
        currentUnpackr = this;
        if (this.structures) {
          currentStructures = this.structures;
          return checkedRead();
        } else if (!currentStructures || currentStructures.length > 0) {
          currentStructures = [];
        }
      } else {
        currentUnpackr = defaultOptions;
        if (!currentStructures || currentStructures.length > 0)
          currentStructures = [];
      }
      return checkedRead();
    }
    unpackMultiple(source, forEach) {
      let values, lastPosition = 0;
      try {
        sequentialMode = true;
        let size = source.length;
        let value = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size);
        if (forEach) {
          forEach(value);
          while (position < size) {
            lastPosition = position;
            if (forEach(checkedRead()) === false) {
              return;
            }
          }
        } else {
          values = [value];
          while (position < size) {
            lastPosition = position;
            values.push(checkedRead());
          }
          return values;
        }
      } catch (error) {
        error.lastPosition = lastPosition;
        error.values = values;
        throw error;
      } finally {
        sequentialMode = false;
        clearSource();
      }
    }
    _mergeStructures(loadedStructures, existingStructures) {
      loadedStructures = loadedStructures || [];
      for (let i = 0, l = loadedStructures.length; i < l; i++) {
        let structure = loadedStructures[i];
        if (structure) {
          structure.isShared = true;
          if (i >= 32)
            structure.highByte = i - 32 >> 5;
        }
      }
      loadedStructures.sharedLength = loadedStructures.length;
      for (let id in existingStructures || []) {
        if (id >= 0) {
          let structure = loadedStructures[id];
          let existing = existingStructures[id];
          if (existing) {
            if (structure)
              (loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure;
            loadedStructures[id] = existing;
          }
        }
      }
      return this.structures = loadedStructures;
    }
    decode(source, end) {
      return this.unpack(source, end);
    }
  };
  function checkedRead() {
    try {
      if (!currentUnpackr.trusted && !sequentialMode) {
        let sharedLength = currentStructures.sharedLength || 0;
        if (sharedLength < currentStructures.length)
          currentStructures.length = sharedLength;
      }
      let result = read();
      if (bundledStrings)
        position = bundledStrings.postBundlePosition;
      if (position == srcEnd) {
        if (currentStructures.restoreStructures)
          restoreStructures();
        currentStructures = null;
        src = null;
        if (referenceMap)
          referenceMap = null;
      } else if (position > srcEnd) {
        let error = new Error("Unexpected end of MessagePack data");
        error.incomplete = true;
        throw error;
      } else if (!sequentialMode) {
        throw new Error("Data read, but end of buffer not reached");
      }
      return result;
    } catch (error) {
      if (currentStructures.restoreStructures)
        restoreStructures();
      clearSource();
      if (error instanceof RangeError || error.message.startsWith("Unexpected end of buffer")) {
        error.incomplete = true;
      }
      throw error;
    }
  }
  function restoreStructures() {
    for (let id in currentStructures.restoreStructures) {
      currentStructures[id] = currentStructures.restoreStructures[id];
    }
    currentStructures.restoreStructures = null;
  }
  function read() {
    let token = src[position++];
    if (token < 160) {
      if (token < 128) {
        if (token < 64)
          return token;
        else {
          let structure = currentStructures[token & 63] || currentUnpackr.getStructures && loadStructures()[token & 63];
          if (structure) {
            if (!structure.read) {
              structure.read = createStructureReader(structure, token & 63);
            }
            return structure.read();
          } else
            return token;
        }
      } else if (token < 144) {
        token -= 128;
        if (currentUnpackr.mapsAsObjects) {
          let object = {};
          for (let i = 0; i < token; i++) {
            object[readKey()] = read();
          }
          return object;
        } else {
          let map = /* @__PURE__ */ new Map();
          for (let i = 0; i < token; i++) {
            map.set(read(), read());
          }
          return map;
        }
      } else {
        token -= 144;
        let array = new Array(token);
        for (let i = 0; i < token; i++) {
          array[i] = read();
        }
        return array;
      }
    } else if (token < 192) {
      let length = token - 160;
      if (srcStringEnd >= position) {
        return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
      }
      if (srcStringEnd == 0 && srcEnd < 140) {
        let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
        if (string != null)
          return string;
      }
      return readFixedString(length);
    } else {
      let value;
      switch (token) {
        case 192:
          return null;
        case 193:
          if (bundledStrings) {
            value = read();
            if (value > 0)
              return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value);
            else
              return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 -= value);
          }
          return C1;
        case 194:
          return false;
        case 195:
          return true;
        case 196:
          return readBin(src[position++]);
        case 197:
          value = dataView.getUint16(position);
          position += 2;
          return readBin(value);
        case 198:
          value = dataView.getUint32(position);
          position += 4;
          return readBin(value);
        case 199:
          return readExt(src[position++]);
        case 200:
          value = dataView.getUint16(position);
          position += 2;
          return readExt(value);
        case 201:
          value = dataView.getUint32(position);
          position += 4;
          return readExt(value);
        case 202:
          value = dataView.getFloat32(position);
          if (currentUnpackr.useFloat32 > 2) {
            let multiplier = mult10[(src[position] & 127) << 1 | src[position + 1] >> 7];
            position += 4;
            return (multiplier * value + (value > 0 ? 0.5 : -0.5) >> 0) / multiplier;
          }
          position += 4;
          return value;
        case 203:
          value = dataView.getFloat64(position);
          position += 8;
          return value;
        case 204:
          return src[position++];
        case 205:
          value = dataView.getUint16(position);
          position += 2;
          return value;
        case 206:
          value = dataView.getUint32(position);
          position += 4;
          return value;
        case 207:
          if (currentUnpackr.int64AsNumber) {
            value = dataView.getUint32(position) * 4294967296;
            value += dataView.getUint32(position + 4);
          } else
            value = dataView.getBigUint64(position);
          position += 8;
          return value;
        case 208:
          return dataView.getInt8(position++);
        case 209:
          value = dataView.getInt16(position);
          position += 2;
          return value;
        case 210:
          value = dataView.getInt32(position);
          position += 4;
          return value;
        case 211:
          if (currentUnpackr.int64AsNumber) {
            value = dataView.getInt32(position) * 4294967296;
            value += dataView.getUint32(position + 4);
          } else
            value = dataView.getBigInt64(position);
          position += 8;
          return value;
        case 212:
          value = src[position++];
          if (value == 114) {
            return recordDefinition(src[position++] & 63);
          } else {
            let extension = currentExtensions[value];
            if (extension) {
              if (extension.read) {
                position++;
                return extension.read(read());
              } else if (extension.noBuffer) {
                position++;
                return extension();
              } else
                return extension(src.subarray(position, ++position));
            } else
              throw new Error("Unknown extension " + value);
          }
        case 213:
          value = src[position];
          if (value == 114) {
            position++;
            return recordDefinition(src[position++] & 63, src[position++]);
          } else
            return readExt(2);
        case 214:
          return readExt(4);
        case 215:
          return readExt(8);
        case 216:
          return readExt(16);
        case 217:
          value = src[position++];
          if (srcStringEnd >= position) {
            return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
          }
          return readString8(value);
        case 218:
          value = dataView.getUint16(position);
          position += 2;
          if (srcStringEnd >= position) {
            return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
          }
          return readString16(value);
        case 219:
          value = dataView.getUint32(position);
          position += 4;
          if (srcStringEnd >= position) {
            return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
          }
          return readString32(value);
        case 220:
          value = dataView.getUint16(position);
          position += 2;
          return readArray(value);
        case 221:
          value = dataView.getUint32(position);
          position += 4;
          return readArray(value);
        case 222:
          value = dataView.getUint16(position);
          position += 2;
          return readMap(value);
        case 223:
          value = dataView.getUint32(position);
          position += 4;
          return readMap(value);
        default:
          if (token >= 224)
            return token - 256;
          if (token === void 0) {
            let error = new Error("Unexpected end of MessagePack data");
            error.incomplete = true;
            throw error;
          }
          throw new Error("Unknown MessagePack token " + token);
      }
    }
  }
  var validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
  function createStructureReader(structure, firstId) {
    function readObject() {
      if (readObject.count++ > inlineObjectReadThreshold) {
        let readObject2 = structure.read = new Function("r", "return function(){return {" + structure.map((key2) => validName.test(key2) ? key2 + ":r()" : "[" + JSON.stringify(key2) + "]:r()").join(",") + "}}")(read);
        if (structure.highByte === 0)
          structure.read = createSecondByteReader(firstId, structure.read);
        return readObject2();
      }
      let object = {};
      for (let i = 0, l = structure.length; i < l; i++) {
        let key2 = structure[i];
        object[key2] = read();
      }
      return object;
    }
    readObject.count = 0;
    if (structure.highByte === 0) {
      return createSecondByteReader(firstId, readObject);
    }
    return readObject;
  }
  var createSecondByteReader = (firstId, read0) => {
    return function() {
      let highByte = src[position++];
      if (highByte === 0)
        return read0();
      let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5);
      let structure = currentStructures[id] || loadStructures()[id];
      if (!structure) {
        throw new Error("Record id is not defined for " + id);
      }
      if (!structure.read)
        structure.read = createStructureReader(structure, firstId);
      return structure.read();
    };
  };
  function loadStructures() {
    let loadedStructures = saveState(() => {
      src = null;
      return currentUnpackr.getStructures();
    });
    return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures);
  }
  var readFixedString = readStringJS;
  var readString8 = readStringJS;
  var readString16 = readStringJS;
  var readString32 = readStringJS;
  function readStringJS(length) {
    let result;
    if (length < 16) {
      if (result = shortStringInJS(length))
        return result;
    }
    if (length > 64 && decoder)
      return decoder.decode(src.subarray(position, position += length));
    const end = position + length;
    const units = [];
    result = "";
    while (position < end) {
      const byte1 = src[position++];
      if ((byte1 & 128) === 0) {
        units.push(byte1);
      } else if ((byte1 & 224) === 192) {
        const byte2 = src[position++] & 63;
        units.push((byte1 & 31) << 6 | byte2);
      } else if ((byte1 & 240) === 224) {
        const byte2 = src[position++] & 63;
        const byte3 = src[position++] & 63;
        units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
      } else if ((byte1 & 248) === 240) {
        const byte2 = src[position++] & 63;
        const byte3 = src[position++] & 63;
        const byte4 = src[position++] & 63;
        let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
        if (unit > 65535) {
          unit -= 65536;
          units.push(unit >>> 10 & 1023 | 55296);
          unit = 56320 | unit & 1023;
        }
        units.push(unit);
      } else {
        units.push(byte1);
      }
      if (units.length >= 4096) {
        result += fromCharCode.apply(String, units);
        units.length = 0;
      }
    }
    if (units.length > 0) {
      result += fromCharCode.apply(String, units);
    }
    return result;
  }
  function readArray(length) {
    let array = new Array(length);
    for (let i = 0; i < length; i++) {
      array[i] = read();
    }
    return array;
  }
  function readMap(length) {
    if (currentUnpackr.mapsAsObjects) {
      let object = {};
      for (let i = 0; i < length; i++) {
        object[readKey()] = read();
      }
      return object;
    } else {
      let map = /* @__PURE__ */ new Map();
      for (let i = 0; i < length; i++) {
        map.set(read(), read());
      }
      return map;
    }
  }
  var fromCharCode = String.fromCharCode;
  function longStringInJS(length) {
    let start = position;
    let bytes = new Array(length);
    for (let i = 0; i < length; i++) {
      const byte = src[position++];
      if ((byte & 128) > 0) {
        position = start;
        return;
      }
      bytes[i] = byte;
    }
    return fromCharCode.apply(String, bytes);
  }
  function shortStringInJS(length) {
    if (length < 4) {
      if (length < 2) {
        if (length === 0)
          return "";
        else {
          let a = src[position++];
          if ((a & 128) > 1) {
            position -= 1;
            return;
          }
          return fromCharCode(a);
        }
      } else {
        let a = src[position++];
        let b = src[position++];
        if ((a & 128) > 0 || (b & 128) > 0) {
          position -= 2;
          return;
        }
        if (length < 3)
          return fromCharCode(a, b);
        let c = src[position++];
        if ((c & 128) > 0) {
          position -= 3;
          return;
        }
        return fromCharCode(a, b, c);
      }
    } else {
      let a = src[position++];
      let b = src[position++];
      let c = src[position++];
      let d = src[position++];
      if ((a & 128) > 0 || (b & 128) > 0 || (c & 128) > 0 || (d & 128) > 0) {
        position -= 4;
        return;
      }
      if (length < 6) {
        if (length === 4)
          return fromCharCode(a, b, c, d);
        else {
          let e = src[position++];
          if ((e & 128) > 0) {
            position -= 5;
            return;
          }
          return fromCharCode(a, b, c, d, e);
        }
      } else if (length < 8) {
        let e = src[position++];
        let f = src[position++];
        if ((e & 128) > 0 || (f & 128) > 0) {
          position -= 6;
          return;
        }
        if (length < 7)
          return fromCharCode(a, b, c, d, e, f);
        let g = src[position++];
        if ((g & 128) > 0) {
          position -= 7;
          return;
        }
        return fromCharCode(a, b, c, d, e, f, g);
      } else {
        let e = src[position++];
        let f = src[position++];
        let g = src[position++];
        let h = src[position++];
        if ((e & 128) > 0 || (f & 128) > 0 || (g & 128) > 0 || (h & 128) > 0) {
          position -= 8;
          return;
        }
        if (length < 10) {
          if (length === 8)
            return fromCharCode(a, b, c, d, e, f, g, h);
          else {
            let i = src[position++];
            if ((i & 128) > 0) {
              position -= 9;
              return;
            }
            return fromCharCode(a, b, c, d, e, f, g, h, i);
          }
        } else if (length < 12) {
          let i = src[position++];
          let j = src[position++];
          if ((i & 128) > 0 || (j & 128) > 0) {
            position -= 10;
            return;
          }
          if (length < 11)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j);
          let k = src[position++];
          if ((k & 128) > 0) {
            position -= 11;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i, j, k);
        } else {
          let i = src[position++];
          let j = src[position++];
          let k = src[position++];
          let l = src[position++];
          if ((i & 128) > 0 || (j & 128) > 0 || (k & 128) > 0 || (l & 128) > 0) {
            position -= 12;
            return;
          }
          if (length < 14) {
            if (length === 12)
              return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
            else {
              let m = src[position++];
              if ((m & 128) > 0) {
                position -= 13;
                return;
              }
              return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m);
            }
          } else {
            let m = src[position++];
            let n = src[position++];
            if ((m & 128) > 0 || (n & 128) > 0) {
              position -= 14;
              return;
            }
            if (length < 15)
              return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
            let o = src[position++];
            if ((o & 128) > 0) {
              position -= 15;
              return;
            }
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
          }
        }
      }
    }
  }
  function readOnlyJSString() {
    let token = src[position++];
    let length;
    if (token < 192) {
      length = token - 160;
    } else {
      switch (token) {
        case 217:
          length = src[position++];
          break;
        case 218:
          length = dataView.getUint16(position);
          position += 2;
          break;
        case 219:
          length = dataView.getUint32(position);
          position += 4;
          break;
        default:
          throw new Error("Expected string");
      }
    }
    return readStringJS(length);
  }
  function readBin(length) {
    return currentUnpackr.copyBuffers ? Uint8Array.prototype.slice.call(src, position, position += length) : src.subarray(position, position += length);
  }
  function readExt(length) {
    let type = src[position++];
    if (currentExtensions[type]) {
      return currentExtensions[type](src.subarray(position, position += length));
    } else
      throw new Error("Unknown extension type " + type);
  }
  var keyCache = new Array(4096);
  function readKey() {
    let length = src[position++];
    if (length >= 160 && length < 192) {
      length = length - 160;
      if (srcStringEnd >= position)
        return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
      else if (!(srcStringEnd == 0 && srcEnd < 180))
        return readFixedString(length);
    } else {
      position--;
      return read();
    }
    let key2 = (length << 5 ^ (length > 1 ? dataView.getUint16(position) : length > 0 ? src[position] : 0)) & 4095;
    let entry = keyCache[key2];
    let checkPosition = position;
    let end = position + length - 3;
    let chunk;
    let i = 0;
    if (entry && entry.bytes == length) {
      while (checkPosition < end) {
        chunk = dataView.getUint32(checkPosition);
        if (chunk != entry[i++]) {
          checkPosition = 1879048192;
          break;
        }
        checkPosition += 4;
      }
      end += 3;
      while (checkPosition < end) {
        chunk = src[checkPosition++];
        if (chunk != entry[i++]) {
          checkPosition = 1879048192;
          break;
        }
      }
      if (checkPosition === end) {
        position = checkPosition;
        return entry.string;
      }
      end -= 3;
      checkPosition = position;
    }
    entry = [];
    keyCache[key2] = entry;
    entry.bytes = length;
    while (checkPosition < end) {
      chunk = dataView.getUint32(checkPosition);
      entry.push(chunk);
      checkPosition += 4;
    }
    end += 3;
    while (checkPosition < end) {
      chunk = src[checkPosition++];
      entry.push(chunk);
    }
    let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
    if (string != null)
      return entry.string = string;
    return entry.string = readFixedString(length);
  }
  var recordDefinition = (id, highByte) => {
    var structure = read();
    let firstByte = id;
    if (highByte !== void 0) {
      id = id < 32 ? -((highByte << 5) + id) : (highByte << 5) + id;
      structure.highByte = highByte;
    }
    let existingStructure = currentStructures[id];
    if (existingStructure && existingStructure.isShared) {
      (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
    }
    currentStructures[id] = structure;
    structure.read = createStructureReader(structure, firstByte);
    return structure.read();
  };
  var glbl = typeof self == "object" ? self : self;
  currentExtensions[0] = () => {
  };
  currentExtensions[0].noBuffer = true;
  currentExtensions[101] = () => {
    let data = read();
    return (glbl[data[0]] || Error)(data[1]);
  };
  currentExtensions[105] = (data) => {
    let id = dataView.getUint32(position - 4);
    if (!referenceMap)
      referenceMap = /* @__PURE__ */ new Map();
    let token = src[position];
    let target2;
    if (token >= 144 && token < 160 || token == 220 || token == 221)
      target2 = [];
    else
      target2 = {};
    let refEntry = { target: target2 };
    referenceMap.set(id, refEntry);
    let targetProperties = read();
    if (refEntry.used)
      return Object.assign(target2, targetProperties);
    refEntry.target = targetProperties;
    return targetProperties;
  };
  currentExtensions[112] = (data) => {
    let id = dataView.getUint32(position - 4);
    let refEntry = referenceMap.get(id);
    refEntry.used = true;
    return refEntry.target;
  };
  currentExtensions[115] = () => new Set(read());
  var typedArrays = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((type) => type + "Array");
  currentExtensions[116] = (data) => {
    let typeCode = data[0];
    let typedArrayName = typedArrays[typeCode];
    if (!typedArrayName)
      throw new Error("Could not find typed array for code " + typeCode);
    return new glbl[typedArrayName](Uint8Array.prototype.slice.call(data, 1).buffer);
  };
  currentExtensions[120] = () => {
    let data = read();
    return new RegExp(data[0], data[1]);
  };
  var TEMP_BUNDLE = [];
  currentExtensions[98] = (data) => {
    let dataSize = (data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3];
    let dataPosition = position;
    position += dataSize - data.length;
    bundledStrings = TEMP_BUNDLE;
    bundledStrings = [readOnlyJSString(), readOnlyJSString()];
    bundledStrings.position0 = 0;
    bundledStrings.position1 = 0;
    bundledStrings.postBundlePosition = position;
    position = dataPosition;
    return read();
  };
  currentExtensions[255] = (data) => {
    if (data.length == 4)
      return new Date((data[0] * 16777216 + (data[1] << 16) + (data[2] << 8) + data[3]) * 1e3);
    else if (data.length == 8)
      return new Date(((data[0] << 22) + (data[1] << 14) + (data[2] << 6) + (data[3] >> 2)) / 1e6 + ((data[3] & 3) * 4294967296 + data[4] * 16777216 + (data[5] << 16) + (data[6] << 8) + data[7]) * 1e3);
    else if (data.length == 12)
      return new Date(((data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]) / 1e6 + ((data[4] & 128 ? -281474976710656 : 0) + data[6] * 1099511627776 + data[7] * 4294967296 + data[8] * 16777216 + (data[9] << 16) + (data[10] << 8) + data[11]) * 1e3);
    else
      return new Date("invalid");
  };
  function saveState(callback) {
    let savedSrcEnd = srcEnd;
    let savedPosition = position;
    let savedStringPosition = stringPosition;
    let savedSrcStringStart = srcStringStart;
    let savedSrcStringEnd = srcStringEnd;
    let savedSrcString = srcString;
    let savedStrings = strings;
    let savedReferenceMap = referenceMap;
    let savedBundledStrings = bundledStrings;
    let savedSrc = new Uint8Array(src.slice(0, srcEnd));
    let savedStructures = currentStructures;
    let savedStructuresContents = currentStructures.slice(0, currentStructures.length);
    let savedPackr = currentUnpackr;
    let savedSequentialMode = sequentialMode;
    let value = callback();
    srcEnd = savedSrcEnd;
    position = savedPosition;
    stringPosition = savedStringPosition;
    srcStringStart = savedSrcStringStart;
    srcStringEnd = savedSrcStringEnd;
    srcString = savedSrcString;
    strings = savedStrings;
    referenceMap = savedReferenceMap;
    bundledStrings = savedBundledStrings;
    src = savedSrc;
    sequentialMode = savedSequentialMode;
    currentStructures = savedStructures;
    currentStructures.splice(0, currentStructures.length, ...savedStructuresContents);
    currentUnpackr = savedPackr;
    dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
    return value;
  }
  function clearSource() {
    src = null;
    referenceMap = null;
    currentStructures = null;
  }
  var mult10 = new Array(147);
  for (let i = 0; i < 256; i++) {
    mult10[i] = +("1e" + Math.floor(45.15 - i * 0.30103));
  }
  var defaultUnpackr = new Unpackr({ useRecords: false });
  var unpack = defaultUnpackr.unpack;
  var unpackMultiple = defaultUnpackr.unpackMultiple;
  var decode = defaultUnpackr.unpack;
  var FLOAT32_OPTIONS = {
    NEVER: 0,
    ALWAYS: 1,
    DECIMAL_ROUND: 3,
    DECIMAL_FIT: 4
  };
  var f32Array = new Float32Array(1);
  var u8Array = new Uint8Array(f32Array.buffer, 0, 4);

  // node_modules/.pnpm/msgpackr@1.5.6/node_modules/msgpackr/pack.js
  var textEncoder;
  try {
    textEncoder = new TextEncoder();
  } catch (error) {
  }
  var extensions;
  var extensionClasses;
  var hasNodeBuffer = typeof Buffer !== "undefined";
  var ByteArrayAllocate = hasNodeBuffer ? Buffer.allocUnsafeSlow : Uint8Array;
  var ByteArray = hasNodeBuffer ? Buffer : Uint8Array;
  var MAX_BUFFER_SIZE = hasNodeBuffer ? 4294967296 : 2144337920;
  var target;
  var keysTarget;
  var targetView;
  var position2 = 0;
  var safeEnd;
  var bundledStrings2 = null;
  var MAX_BUNDLE_SIZE = 61440;
  var hasNonLatin = /[\u0080-\uFFFF]/;
  var RECORD_SYMBOL = Symbol("record-id");
  var Packr = class extends Unpackr {
    constructor(options) {
      super(options);
      this.offset = 0;
      let typeBuffer;
      let start;
      let hasSharedUpdate;
      let structures;
      let referenceMap2;
      let lastSharedStructuresLength = 0;
      let encodeUtf8 = ByteArray.prototype.utf8Write ? function(string, position3, maxBytes) {
        return target.utf8Write(string, position3, maxBytes);
      } : textEncoder && textEncoder.encodeInto ? function(string, position3) {
        return textEncoder.encodeInto(string, target.subarray(position3)).written;
      } : false;
      let packr = this;
      if (!options)
        options = {};
      let isSequential = options && options.sequential;
      let hasSharedStructures = options.structures || options.saveStructures;
      let maxSharedStructures = options.maxSharedStructures;
      if (maxSharedStructures == null)
        maxSharedStructures = hasSharedStructures ? 32 : 0;
      if (maxSharedStructures > 8160)
        throw new Error("Maximum maxSharedStructure is 8160");
      if (options.structuredClone && options.moreTypes == void 0) {
        options.moreTypes = true;
      }
      let maxOwnStructures = options.maxOwnStructures;
      if (maxOwnStructures == null)
        maxOwnStructures = hasSharedStructures ? 32 : 64;
      if (!this.structures && options.useRecords != false)
        this.structures = [];
      let useTwoByteRecords = maxSharedStructures > 32 || maxOwnStructures + maxSharedStructures > 64;
      let sharedLimitId = maxSharedStructures + 64;
      let maxStructureId = maxSharedStructures + maxOwnStructures + 64;
      if (maxStructureId > 8256) {
        throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
      }
      let recordIdsToRemove = [];
      let transitionsCount = 0;
      let serializationsSinceTransitionRebuild = 0;
      this.pack = this.encode = function(value, encodeOptions) {
        if (!target) {
          target = new ByteArrayAllocate(8192);
          targetView = new DataView(target.buffer, 0, 8192);
          position2 = 0;
        }
        safeEnd = target.length - 10;
        if (safeEnd - position2 < 2048) {
          target = new ByteArrayAllocate(target.length);
          targetView = new DataView(target.buffer, 0, target.length);
          safeEnd = target.length - 10;
          position2 = 0;
        } else
          position2 = position2 + 7 & 2147483640;
        start = position2;
        referenceMap2 = packr.structuredClone ? /* @__PURE__ */ new Map() : null;
        if (packr.bundleStrings && typeof value !== "string") {
          bundledStrings2 = [];
          bundledStrings2.size = Infinity;
        } else
          bundledStrings2 = null;
        structures = packr.structures;
        if (structures) {
          if (structures.uninitialized)
            structures = packr._mergeStructures(packr.getStructures());
          let sharedLength = structures.sharedLength || 0;
          if (sharedLength > maxSharedStructures) {
            throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + structures.sharedLength);
          }
          if (!structures.transitions) {
            structures.transitions = /* @__PURE__ */ Object.create(null);
            for (let i = 0; i < sharedLength; i++) {
              let keys2 = structures[i];
              if (!keys2)
                continue;
              let nextTransition, transition = structures.transitions;
              for (let j = 0, l = keys2.length; j < l; j++) {
                let key2 = keys2[j];
                nextTransition = transition[key2];
                if (!nextTransition) {
                  nextTransition = transition[key2] = /* @__PURE__ */ Object.create(null);
                }
                transition = nextTransition;
              }
              transition[RECORD_SYMBOL] = i + 64;
            }
            lastSharedStructuresLength = sharedLength;
          }
          if (!isSequential) {
            structures.nextId = sharedLength + 64;
          }
        }
        if (hasSharedUpdate)
          hasSharedUpdate = false;
        try {
          pack2(value);
          if (bundledStrings2) {
            writeBundles(start, pack2);
          }
          packr.offset = position2;
          if (referenceMap2 && referenceMap2.idsToInsert) {
            position2 += referenceMap2.idsToInsert.length * 6;
            if (position2 > safeEnd)
              makeRoom(position2);
            packr.offset = position2;
            let serialized = insertIds(target.subarray(start, position2), referenceMap2.idsToInsert);
            referenceMap2 = null;
            return serialized;
          }
          if (encodeOptions & REUSE_BUFFER_MODE) {
            target.start = start;
            target.end = position2;
            return target;
          }
          return target.subarray(start, position2);
        } finally {
          if (structures) {
            if (serializationsSinceTransitionRebuild < 10)
              serializationsSinceTransitionRebuild++;
            let sharedLength = structures.sharedLength || maxSharedStructures;
            if (structures.length > sharedLength)
              structures.length = sharedLength;
            if (transitionsCount > 1e4) {
              structures.transitions = null;
              serializationsSinceTransitionRebuild = 0;
              transitionsCount = 0;
              if (recordIdsToRemove.length > 0)
                recordIdsToRemove = [];
            } else if (recordIdsToRemove.length > 0 && !isSequential) {
              for (let i = 0, l = recordIdsToRemove.length; i < l; i++) {
                recordIdsToRemove[i][RECORD_SYMBOL] = 0;
              }
              recordIdsToRemove = [];
            }
            if (hasSharedUpdate && packr.saveStructures) {
              let returnBuffer = target.subarray(start, position2);
              if (packr.saveStructures(structures, lastSharedStructuresLength) === false) {
                packr._mergeStructures(packr.getStructures());
                return packr.pack(value);
              }
              lastSharedStructuresLength = sharedLength;
              return returnBuffer;
            }
          }
          if (encodeOptions & RESET_BUFFER_MODE)
            position2 = start;
        }
      };
      const pack2 = (value) => {
        if (position2 > safeEnd)
          target = makeRoom(position2);
        var type = typeof value;
        var length;
        if (type === "string") {
          let strLength = value.length;
          if (bundledStrings2 && strLength >= 4 && strLength < 4096) {
            if ((bundledStrings2.size += strLength) > MAX_BUNDLE_SIZE) {
              let extStart;
              let maxBytes2 = (bundledStrings2[0] ? bundledStrings2[0].length * 3 + bundledStrings2[1].length : 0) + 10;
              if (position2 + maxBytes2 > safeEnd)
                target = makeRoom(position2 + maxBytes2);
              if (bundledStrings2.position) {
                target[position2] = 200;
                position2 += 3;
                target[position2++] = 98;
                extStart = position2 - start;
                position2 += 4;
                writeBundles(start, pack2);
                targetView.setUint16(extStart + start - 3, position2 - start - extStart);
              } else {
                target[position2++] = 214;
                target[position2++] = 98;
                extStart = position2 - start;
                position2 += 4;
              }
              bundledStrings2 = ["", ""];
              bundledStrings2.size = 0;
              bundledStrings2.position = extStart;
            }
            let twoByte = hasNonLatin.test(value);
            bundledStrings2[twoByte ? 0 : 1] += value;
            target[position2++] = 193;
            pack2(twoByte ? -strLength : strLength);
            return;
          }
          let headerSize;
          if (strLength < 32) {
            headerSize = 1;
          } else if (strLength < 256) {
            headerSize = 2;
          } else if (strLength < 65536) {
            headerSize = 3;
          } else {
            headerSize = 5;
          }
          let maxBytes = strLength * 3;
          if (position2 + maxBytes > safeEnd)
            target = makeRoom(position2 + maxBytes);
          if (strLength < 64 || !encodeUtf8) {
            let i, c1, c2, strPosition = position2 + headerSize;
            for (i = 0; i < strLength; i++) {
              c1 = value.charCodeAt(i);
              if (c1 < 128) {
                target[strPosition++] = c1;
              } else if (c1 < 2048) {
                target[strPosition++] = c1 >> 6 | 192;
                target[strPosition++] = c1 & 63 | 128;
              } else if ((c1 & 64512) === 55296 && ((c2 = value.charCodeAt(i + 1)) & 64512) === 56320) {
                c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
                i++;
                target[strPosition++] = c1 >> 18 | 240;
                target[strPosition++] = c1 >> 12 & 63 | 128;
                target[strPosition++] = c1 >> 6 & 63 | 128;
                target[strPosition++] = c1 & 63 | 128;
              } else {
                target[strPosition++] = c1 >> 12 | 224;
                target[strPosition++] = c1 >> 6 & 63 | 128;
                target[strPosition++] = c1 & 63 | 128;
              }
            }
            length = strPosition - position2 - headerSize;
          } else {
            length = encodeUtf8(value, position2 + headerSize, maxBytes);
          }
          if (length < 32) {
            target[position2++] = 160 | length;
          } else if (length < 256) {
            if (headerSize < 2) {
              target.copyWithin(position2 + 2, position2 + 1, position2 + 1 + length);
            }
            target[position2++] = 217;
            target[position2++] = length;
          } else if (length < 65536) {
            if (headerSize < 3) {
              target.copyWithin(position2 + 3, position2 + 2, position2 + 2 + length);
            }
            target[position2++] = 218;
            target[position2++] = length >> 8;
            target[position2++] = length & 255;
          } else {
            if (headerSize < 5) {
              target.copyWithin(position2 + 5, position2 + 3, position2 + 3 + length);
            }
            target[position2++] = 219;
            targetView.setUint32(position2, length);
            position2 += 4;
          }
          position2 += length;
        } else if (type === "number") {
          if (value >>> 0 === value) {
            if (value < 64) {
              target[position2++] = value;
            } else if (value < 256) {
              target[position2++] = 204;
              target[position2++] = value;
            } else if (value < 65536) {
              target[position2++] = 205;
              target[position2++] = value >> 8;
              target[position2++] = value & 255;
            } else {
              target[position2++] = 206;
              targetView.setUint32(position2, value);
              position2 += 4;
            }
          } else if (value >> 0 === value) {
            if (value >= -32) {
              target[position2++] = 256 + value;
            } else if (value >= -128) {
              target[position2++] = 208;
              target[position2++] = value + 256;
            } else if (value >= -32768) {
              target[position2++] = 209;
              targetView.setInt16(position2, value);
              position2 += 2;
            } else {
              target[position2++] = 210;
              targetView.setInt32(position2, value);
              position2 += 4;
            }
          } else {
            let useFloat32;
            if ((useFloat32 = this.useFloat32) > 0 && value < 4294967296 && value >= -2147483648) {
              target[position2++] = 202;
              targetView.setFloat32(position2, value);
              let xShifted;
              if (useFloat32 < 4 || (xShifted = value * mult10[(target[position2] & 127) << 1 | target[position2 + 1] >> 7]) >> 0 === xShifted) {
                position2 += 4;
                return;
              } else
                position2--;
            }
            target[position2++] = 203;
            targetView.setFloat64(position2, value);
            position2 += 8;
          }
        } else if (type === "object") {
          if (!value)
            target[position2++] = 192;
          else {
            if (referenceMap2) {
              let referee = referenceMap2.get(value);
              if (referee) {
                if (!referee.id) {
                  let idsToInsert = referenceMap2.idsToInsert || (referenceMap2.idsToInsert = []);
                  referee.id = idsToInsert.push(referee);
                }
                target[position2++] = 214;
                target[position2++] = 112;
                targetView.setUint32(position2, referee.id);
                position2 += 4;
                return;
              } else
                referenceMap2.set(value, { offset: position2 - start });
            }
            let constructor = value.constructor;
            if (constructor === Object) {
              writeObject(value, true);
            } else if (constructor === Array) {
              length = value.length;
              if (length < 16) {
                target[position2++] = 144 | length;
              } else if (length < 65536) {
                target[position2++] = 220;
                target[position2++] = length >> 8;
                target[position2++] = length & 255;
              } else {
                target[position2++] = 221;
                targetView.setUint32(position2, length);
                position2 += 4;
              }
              for (let i = 0; i < length; i++) {
                pack2(value[i]);
              }
            } else if (constructor === Map) {
              length = value.size;
              if (length < 16) {
                target[position2++] = 128 | length;
              } else if (length < 65536) {
                target[position2++] = 222;
                target[position2++] = length >> 8;
                target[position2++] = length & 255;
              } else {
                target[position2++] = 223;
                targetView.setUint32(position2, length);
                position2 += 4;
              }
              for (let [key2, entryValue] of value) {
                pack2(key2);
                pack2(entryValue);
              }
            } else {
              for (let i = 0, l = extensions.length; i < l; i++) {
                let extensionClass = extensionClasses[i];
                if (value instanceof extensionClass) {
                  let extension = extensions[i];
                  if (extension.write) {
                    if (extension.type) {
                      target[position2++] = 212;
                      target[position2++] = extension.type;
                      target[position2++] = 0;
                    }
                    pack2(extension.write.call(this, value));
                    return;
                  }
                  let currentTarget = target;
                  let currentTargetView = targetView;
                  let currentPosition = position2;
                  target = null;
                  let result;
                  try {
                    result = extension.pack.call(this, value, (size) => {
                      target = currentTarget;
                      currentTarget = null;
                      position2 += size;
                      if (position2 > safeEnd)
                        makeRoom(position2);
                      return {
                        target,
                        targetView,
                        position: position2 - size
                      };
                    }, pack2);
                  } finally {
                    if (currentTarget) {
                      target = currentTarget;
                      targetView = currentTargetView;
                      position2 = currentPosition;
                      safeEnd = target.length - 10;
                    }
                  }
                  if (result) {
                    if (result.length + position2 > safeEnd)
                      makeRoom(result.length + position2);
                    position2 = writeExtensionData(result, target, position2, extension.type);
                  }
                  return;
                }
              }
              writeObject(value, !value.hasOwnProperty);
            }
          }
        } else if (type === "boolean") {
          target[position2++] = value ? 195 : 194;
        } else if (type === "bigint") {
          if (value < BigInt(1) << BigInt(63) && value >= -(BigInt(1) << BigInt(63))) {
            target[position2++] = 211;
            targetView.setBigInt64(position2, value);
          } else if (value < BigInt(1) << BigInt(64) && value > 0) {
            target[position2++] = 207;
            targetView.setBigUint64(position2, value);
          } else {
            if (this.largeBigIntToFloat) {
              target[position2++] = 203;
              targetView.setFloat64(position2, Number(value));
            } else {
              throw new RangeError(value + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");
            }
          }
          position2 += 8;
        } else if (type === "undefined") {
          if (this.encodeUndefinedAsNil)
            target[position2++] = 192;
          else {
            target[position2++] = 212;
            target[position2++] = 0;
            target[position2++] = 0;
          }
        } else if (type === "function") {
          pack2(this.writeFunction && this.writeFunction());
        } else {
          throw new Error("Unknown type: " + type);
        }
      };
      const writeObject = this.useRecords === false ? this.variableMapSize ? (object) => {
        let keys2 = Object.keys(object);
        let length = keys2.length;
        if (length < 16) {
          target[position2++] = 128 | length;
        } else if (length < 65536) {
          target[position2++] = 222;
          target[position2++] = length >> 8;
          target[position2++] = length & 255;
        } else {
          target[position2++] = 223;
          targetView.setUint32(position2, length);
          position2 += 4;
        }
        let key2;
        for (let i = 0; i < length; i++) {
          pack2(key2 = keys2[i]);
          pack2(object[key2]);
        }
      } : (object, safePrototype) => {
        target[position2++] = 222;
        let objectOffset = position2 - start;
        position2 += 2;
        let size = 0;
        for (let key2 in object) {
          if (safePrototype || object.hasOwnProperty(key2)) {
            pack2(key2);
            pack2(object[key2]);
            size++;
          }
        }
        target[objectOffset++ + start] = size >> 8;
        target[objectOffset + start] = size & 255;
      } : options.progressiveRecords && !useTwoByteRecords ? (object, safePrototype) => {
        let nextTransition, transition = structures.transitions || (structures.transitions = /* @__PURE__ */ Object.create(null));
        let objectOffset = position2++ - start;
        let wroteKeys;
        for (let key2 in object) {
          if (safePrototype || object.hasOwnProperty(key2)) {
            nextTransition = transition[key2];
            if (nextTransition)
              transition = nextTransition;
            else {
              let keys2 = Object.keys(object);
              let lastTransition = transition;
              transition = structures.transitions;
              let newTransitions = 0;
              for (let i = 0, l = keys2.length; i < l; i++) {
                let key3 = keys2[i];
                nextTransition = transition[key3];
                if (!nextTransition) {
                  nextTransition = transition[key3] = /* @__PURE__ */ Object.create(null);
                  newTransitions++;
                }
                transition = nextTransition;
              }
              if (objectOffset + start + 1 == position2) {
                position2--;
                newRecord(transition, keys2, newTransitions);
              } else
                insertNewRecord(transition, keys2, objectOffset, newTransitions);
              wroteKeys = true;
              transition = lastTransition[key2];
            }
            pack2(object[key2]);
          }
        }
        if (!wroteKeys) {
          let recordId = transition[RECORD_SYMBOL];
          if (recordId)
            target[objectOffset + start] = recordId;
          else
            insertNewRecord(transition, Object.keys(object), objectOffset, 0);
        }
      } : (object, safePrototype) => {
        let nextTransition, transition = structures.transitions || (structures.transitions = /* @__PURE__ */ Object.create(null));
        let newTransitions = 0;
        for (let key2 in object)
          if (safePrototype || object.hasOwnProperty(key2)) {
            nextTransition = transition[key2];
            if (!nextTransition) {
              nextTransition = transition[key2] = /* @__PURE__ */ Object.create(null);
              newTransitions++;
            }
            transition = nextTransition;
          }
        let recordId = transition[RECORD_SYMBOL];
        if (recordId) {
          if (recordId >= 96 && useTwoByteRecords) {
            target[position2++] = ((recordId -= 96) & 31) + 96;
            target[position2++] = recordId >> 5;
          } else
            target[position2++] = recordId;
        } else {
          newRecord(transition, transition.__keys__ || Object.keys(object), newTransitions);
        }
        for (let key2 in object)
          if (safePrototype || object.hasOwnProperty(key2))
            pack2(object[key2]);
      };
      const makeRoom = (end) => {
        let newSize;
        if (end > 16777216) {
          if (end - start > MAX_BUFFER_SIZE)
            throw new Error("Packed buffer would be larger than maximum buffer size");
          newSize = Math.min(MAX_BUFFER_SIZE, Math.round(Math.max((end - start) * (end > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096);
        } else
          newSize = (Math.max(end - start << 2, target.length - 1) >> 12) + 1 << 12;
        let newBuffer = new ByteArrayAllocate(newSize);
        targetView = new DataView(newBuffer.buffer, 0, newSize);
        if (target.copy)
          target.copy(newBuffer, 0, start, end);
        else
          newBuffer.set(target.slice(start, end));
        position2 -= start;
        start = 0;
        safeEnd = newBuffer.length - 10;
        return target = newBuffer;
      };
      const newRecord = (transition, keys2, newTransitions) => {
        let recordId = structures.nextId;
        if (!recordId)
          recordId = 64;
        if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys2)) {
          recordId = structures.nextOwnId;
          if (!(recordId < maxStructureId))
            recordId = sharedLimitId;
          structures.nextOwnId = recordId + 1;
        } else {
          if (recordId >= maxStructureId)
            recordId = sharedLimitId;
          structures.nextId = recordId + 1;
        }
        let highByte = keys2.highByte = recordId >= 96 && useTwoByteRecords ? recordId - 96 >> 5 : -1;
        transition[RECORD_SYMBOL] = recordId;
        transition.__keys__ = keys2;
        structures[recordId - 64] = keys2;
        if (recordId < sharedLimitId) {
          keys2.isShared = true;
          structures.sharedLength = recordId - 63;
          hasSharedUpdate = true;
          if (highByte >= 0) {
            target[position2++] = (recordId & 31) + 96;
            target[position2++] = highByte;
          } else {
            target[position2++] = recordId;
          }
        } else {
          if (highByte >= 0) {
            target[position2++] = 213;
            target[position2++] = 114;
            target[position2++] = (recordId & 31) + 96;
            target[position2++] = highByte;
          } else {
            target[position2++] = 212;
            target[position2++] = 114;
            target[position2++] = recordId;
          }
          if (newTransitions)
            transitionsCount += serializationsSinceTransitionRebuild * newTransitions;
          if (recordIdsToRemove.length >= maxOwnStructures)
            recordIdsToRemove.shift()[RECORD_SYMBOL] = 0;
          recordIdsToRemove.push(transition);
          pack2(keys2);
        }
      };
      const insertNewRecord = (transition, keys2, insertionOffset, newTransitions) => {
        let mainTarget = target;
        let mainPosition = position2;
        let mainSafeEnd = safeEnd;
        let mainStart = start;
        target = keysTarget;
        position2 = 0;
        start = 0;
        if (!target)
          keysTarget = target = new ByteArrayAllocate(8192);
        safeEnd = target.length - 10;
        newRecord(transition, keys2, newTransitions);
        keysTarget = target;
        let keysPosition = position2;
        target = mainTarget;
        position2 = mainPosition;
        safeEnd = mainSafeEnd;
        start = mainStart;
        if (keysPosition > 1) {
          let newEnd = position2 + keysPosition - 1;
          if (newEnd > safeEnd)
            makeRoom(newEnd);
          let insertionPosition = insertionOffset + start;
          target.copyWithin(insertionPosition + keysPosition, insertionPosition + 1, position2);
          target.set(keysTarget.slice(0, keysPosition), insertionPosition);
          position2 = newEnd;
        } else {
          target[insertionOffset + start] = keysTarget[0];
        }
      };
    }
    useBuffer(buffer2) {
      target = buffer2;
      targetView = new DataView(target.buffer, target.byteOffset, target.byteLength);
      position2 = 0;
    }
    clearSharedData() {
      if (this.structures)
        this.structures = [];
    }
  };
  extensionClasses = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, C1Type];
  extensions = [{
    pack(date, allocateForWrite, pack2) {
      let seconds = date.getTime() / 1e3;
      if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 4294967296) {
        let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(6);
        target2[position3++] = 214;
        target2[position3++] = 255;
        targetView2.setUint32(position3, seconds);
      } else if (seconds > 0 && seconds < 17179869184) {
        let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(10);
        target2[position3++] = 215;
        target2[position3++] = 255;
        targetView2.setUint32(position3, date.getMilliseconds() * 4e6 + (seconds / 1e3 / 4294967296 >> 0));
        targetView2.setUint32(position3 + 4, seconds);
      } else if (isNaN(seconds)) {
        if (this.onInvalidDate) {
          allocateForWrite(0);
          return pack2(this.onInvalidDate());
        }
        let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(3);
        target2[position3++] = 212;
        target2[position3++] = 255;
        target2[position3++] = 255;
      } else {
        let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(15);
        target2[position3++] = 199;
        target2[position3++] = 12;
        target2[position3++] = 255;
        targetView2.setUint32(position3, date.getMilliseconds() * 1e6);
        targetView2.setBigInt64(position3 + 4, BigInt(Math.floor(seconds)));
      }
    }
  }, {
    pack(set, allocateForWrite, pack2) {
      let array = Array.from(set);
      let { target: target2, position: position3 } = allocateForWrite(this.moreTypes ? 3 : 0);
      if (this.moreTypes) {
        target2[position3++] = 212;
        target2[position3++] = 115;
        target2[position3++] = 0;
      }
      pack2(array);
    }
  }, {
    pack(error, allocateForWrite, pack2) {
      let { target: target2, position: position3 } = allocateForWrite(this.moreTypes ? 3 : 0);
      if (this.moreTypes) {
        target2[position3++] = 212;
        target2[position3++] = 101;
        target2[position3++] = 0;
      }
      pack2([error.name, error.message]);
    }
  }, {
    pack(regex, allocateForWrite, pack2) {
      let { target: target2, position: position3 } = allocateForWrite(this.moreTypes ? 3 : 0);
      if (this.moreTypes) {
        target2[position3++] = 212;
        target2[position3++] = 120;
        target2[position3++] = 0;
      }
      pack2([regex.source, regex.flags]);
    }
  }, {
    pack(arrayBuffer, allocateForWrite) {
      if (this.moreTypes)
        writeExtBuffer(arrayBuffer, 16, allocateForWrite);
      else
        writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
    }
  }, {
    pack(typedArray, allocateForWrite) {
      let constructor = typedArray.constructor;
      if (constructor !== ByteArray && this.moreTypes)
        writeExtBuffer(typedArray, typedArrays.indexOf(constructor.name), allocateForWrite);
      else
        writeBuffer(typedArray, allocateForWrite);
    }
  }, {
    pack(c1, allocateForWrite) {
      let { target: target2, position: position3 } = allocateForWrite(1);
      target2[position3] = 193;
    }
  }];
  function writeExtBuffer(typedArray, type, allocateForWrite, encode2) {
    let length = typedArray.byteLength;
    if (length + 1 < 256) {
      var { target: target2, position: position3 } = allocateForWrite(4 + length);
      target2[position3++] = 199;
      target2[position3++] = length + 1;
    } else if (length + 1 < 65536) {
      var { target: target2, position: position3 } = allocateForWrite(5 + length);
      target2[position3++] = 200;
      target2[position3++] = length + 1 >> 8;
      target2[position3++] = length + 1 & 255;
    } else {
      var { target: target2, position: position3, targetView: targetView2 } = allocateForWrite(7 + length);
      target2[position3++] = 201;
      targetView2.setUint32(position3, length + 1);
      position3 += 4;
    }
    target2[position3++] = 116;
    target2[position3++] = type;
    target2.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position3);
  }
  function writeBuffer(buffer2, allocateForWrite) {
    let length = buffer2.byteLength;
    var target2, position3;
    if (length < 256) {
      var { target: target2, position: position3 } = allocateForWrite(length + 2);
      target2[position3++] = 196;
      target2[position3++] = length;
    } else if (length < 65536) {
      var { target: target2, position: position3 } = allocateForWrite(length + 3);
      target2[position3++] = 197;
      target2[position3++] = length >> 8;
      target2[position3++] = length & 255;
    } else {
      var { target: target2, position: position3, targetView: targetView2 } = allocateForWrite(length + 5);
      target2[position3++] = 198;
      targetView2.setUint32(position3, length);
      position3 += 4;
    }
    target2.set(buffer2, position3);
  }
  function writeExtensionData(result, target2, position3, type) {
    let length = result.length;
    switch (length) {
      case 1:
        target2[position3++] = 212;
        break;
      case 2:
        target2[position3++] = 213;
        break;
      case 4:
        target2[position3++] = 214;
        break;
      case 8:
        target2[position3++] = 215;
        break;
      case 16:
        target2[position3++] = 216;
        break;
      default:
        if (length < 256) {
          target2[position3++] = 199;
          target2[position3++] = length;
        } else if (length < 65536) {
          target2[position3++] = 200;
          target2[position3++] = length >> 8;
          target2[position3++] = length & 255;
        } else {
          target2[position3++] = 201;
          target2[position3++] = length >> 24;
          target2[position3++] = length >> 16 & 255;
          target2[position3++] = length >> 8 & 255;
          target2[position3++] = length & 255;
        }
    }
    target2[position3++] = type;
    target2.set(result, position3);
    position3 += length;
    return position3;
  }
  function insertIds(serialized, idsToInsert) {
    let nextId;
    let distanceToMove = idsToInsert.length * 6;
    let lastEnd = serialized.length - distanceToMove;
    idsToInsert.sort((a, b) => a.offset > b.offset ? 1 : -1);
    while (nextId = idsToInsert.pop()) {
      let offset = nextId.offset;
      let id = nextId.id;
      serialized.copyWithin(offset + distanceToMove, offset, lastEnd);
      distanceToMove -= 6;
      let position3 = offset + distanceToMove;
      serialized[position3++] = 214;
      serialized[position3++] = 105;
      serialized[position3++] = id >> 24;
      serialized[position3++] = id >> 16 & 255;
      serialized[position3++] = id >> 8 & 255;
      serialized[position3++] = id & 255;
      lastEnd = offset;
    }
    return serialized;
  }
  function writeBundles(start, pack2) {
    targetView.setUint32(bundledStrings2.position + start, position2 - bundledStrings2.position - start);
    let writeStrings = bundledStrings2;
    bundledStrings2 = null;
    let startPosition = position2;
    pack2(writeStrings[0]);
    pack2(writeStrings[1]);
  }
  var defaultPackr = new Packr({ useRecords: false });
  var pack = defaultPackr.pack;
  var encode = defaultPackr.pack;
  var { NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = FLOAT32_OPTIONS;
  var REUSE_BUFFER_MODE = 512;
  var RESET_BUFFER_MODE = 1024;

  // node_modules/.pnpm/msgpackr@1.5.6/node_modules/msgpackr/iterators.js
  init_env();

  // node_modules/.pnpm/@worker-tools+middleware@0.1.0-pre.16/node_modules/@worker-tools/middleware/esm/caching.js
  init_env();
  var caching = (opt = {}) => async (ax) => {
    const x4 = await ax;
    x4.effects.push((res) => {
      var _a7;
      res.headers.set("cache-control", (_a7 = opt.cacheControl) !== null && _a7 !== void 0 ? _a7 : "");
      if (typeof opt.maxAge === "number") {
        if (opt.maxAge > 31536e3)
          console.warn(`Provided maxAge appears to be too large. Perhaps you meant ${opt.maxAge / 1e3}? maxAge is defined in seconds!`);
        res.headers.append("cache-control", `max-age=${opt.maxAge}`);
      }
      if (opt.mustRevalidate) {
        res.headers.append("cache-control", "must-revalidate");
      }
      if (opt.immutable) {
        res.headers.append("cache-control", "immutable");
      }
      return res;
    });
    return x4;
  };

  // src/router.ts
  init_env();

  // node_modules/.pnpm/@worker-tools+router@0.2.0-pre.6/node_modules/@worker-tools/router/esm/index.js
  init_env();

  // node_modules/.pnpm/@worker-tools+router@0.2.0-pre.6/node_modules/@worker-tools/router/esm/deps/raw.githubusercontent.com/worker-tools/resolvable-promise/master/index.js
  init_env();
  var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ResolvablePromise_promise2;
  var _ResolvablePromise_resolve2;
  var _ResolvablePromise_reject2;
  var _ResolvablePromise_settled2;
  var _a3;
  var ResolvablePromise2 = class {
    constructor(init) {
      _ResolvablePromise_promise2.set(this, void 0);
      _ResolvablePromise_resolve2.set(this, void 0);
      _ResolvablePromise_reject2.set(this, void 0);
      _ResolvablePromise_settled2.set(this, false);
      Object.defineProperty(this, _a3, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "ResolvablePromise"
      });
      __classPrivateFieldSet5(this, _ResolvablePromise_promise2, new Promise((res, rej) => {
        const resolve = __classPrivateFieldSet5(this, _ResolvablePromise_resolve2, (v) => (__classPrivateFieldSet5(this, _ResolvablePromise_settled2, true, "f"), res(v)), "f");
        const reject = __classPrivateFieldSet5(this, _ResolvablePromise_reject2, (r) => (__classPrivateFieldSet5(this, _ResolvablePromise_settled2, true, "f"), rej(r)), "f");
        if (init == null)
          return;
        if (typeof init === "function")
          init(resolve, reject);
        else if (typeof init.then === "function")
          init.then(resolve, reject);
      }), "f");
    }
    resolve(x4) {
      __classPrivateFieldGet5(this, _ResolvablePromise_resolve2, "f").call(this, x4);
    }
    reject(reason) {
      __classPrivateFieldGet5(this, _ResolvablePromise_reject2, "f").call(this, reason);
    }
    get settled() {
      return __classPrivateFieldGet5(this, _ResolvablePromise_settled2, "f");
    }
    then(onfulfilled, onrejected) {
      return __classPrivateFieldGet5(this, _ResolvablePromise_promise2, "f").then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return __classPrivateFieldGet5(this, _ResolvablePromise_promise2, "f").catch(onrejected);
    }
    finally(onfinally) {
      return __classPrivateFieldGet5(this, _ResolvablePromise_promise2, "f").finally(onfinally);
    }
  };
  _ResolvablePromise_promise2 = /* @__PURE__ */ new WeakMap(), _ResolvablePromise_resolve2 = /* @__PURE__ */ new WeakMap(), _ResolvablePromise_reject2 = /* @__PURE__ */ new WeakMap(), _ResolvablePromise_settled2 = /* @__PURE__ */ new WeakMap(), _a3 = Symbol.toStringTag;

  // node_modules/.pnpm/@worker-tools+router@0.2.0-pre.6/node_modules/@worker-tools/router/esm/utils/aggregate-error.js
  init_env();
  var __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet6 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _AggregateErrorPolyfill_errors3;
  var AggregateErrorPolyfill3 = class extends Error {
    constructor(errors, message = "") {
      super(message);
      _AggregateErrorPolyfill_errors3.set(this, void 0);
      __classPrivateFieldSet6(this, _AggregateErrorPolyfill_errors3, [...errors], "f");
    }
    get name() {
      return "AggregateError";
    }
    get errors() {
      return [...__classPrivateFieldGet6(this, _AggregateErrorPolyfill_errors3, "f")];
    }
  };
  _AggregateErrorPolyfill_errors3 = /* @__PURE__ */ new WeakMap();
  var AggregateError3 = "AggregateError" in self ? self.AggregateError : AggregateErrorPolyfill3;

  // node_modules/.pnpm/@worker-tools+router@0.2.0-pre.6/node_modules/@worker-tools/router/esm/index.js
  var __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet7 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _WorkerRouter_instances;
  var _WorkerRouter_middleware;
  var _WorkerRouter_routes;
  var _WorkerRouter_recoverRoutes;
  var _WorkerRouter_route;
  var _WorkerRouter_execPatterns;
  var _WorkerRouter_pushRoute;
  var _WorkerRouter_pushMiddlewareRoute;
  var _WorkerRouter_registerPattern;
  var _WorkerRouter_registerRecoverPattern;
  var _WorkerRouter_pushRecoverRoute;
  var _WorkerRouter_pushMiddlewareRecoverRoute;
  var _WorkerRouter_routeHandler;
  function toPattern(pathname) {
    var _a7, _b3, _c;
    const pattern = new URLPattern({
      pathname,
      protocol: (_a7 = self.location) === null || _a7 === void 0 ? void 0 : _a7.protocol,
      hostname: (_b3 = self.location) === null || _b3 === void 0 ? void 0 : _b3.hostname,
      port: (_c = self.location) === null || _c === void 0 ? void 0 : _c.port
    });
    return pattern;
  }
  var WorkerRouter = class {
    constructor(middleware = (_) => _) {
      _WorkerRouter_instances.add(this);
      _WorkerRouter_middleware.set(this, void 0);
      _WorkerRouter_routes.set(this, []);
      _WorkerRouter_recoverRoutes.set(this, []);
      _WorkerRouter_routeHandler.set(this, (ctx) => {
        var _a7, _b3;
        const values = Object.values((_b3 = (_a7 = ctx.match) === null || _a7 === void 0 ? void 0 : _a7.pathname.groups) !== null && _b3 !== void 0 ? _b3 : {});
        if (values.length) {
          const baseURL = new URL(ctx.request.url).origin;
          const subURL = new URL(values.at(-1), baseURL);
          return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_route).call(this, subURL.href, ctx);
        }
        throw TypeError("Pattern not suitable for nested routing. Did you forget to add a wildcard (*)?");
      });
      Object.defineProperty(this, "handle", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: (request, ctx) => {
          var _a7, _b3;
          return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_route).call(this, request.url, {
            ...ctx,
            request,
            waitUntil: (_b3 = (_a7 = ctx === null || ctx === void 0 ? void 0 : ctx.waitUntil) === null || _a7 === void 0 ? void 0 : _a7.bind(ctx)) !== null && _b3 !== void 0 ? _b3 : (_f) => {
            }
          });
        }
      });
      Object.defineProperty(this, "handleEvent", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: (object) => {
          const event = object;
          event.respondWith(__classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_route).call(this, event.request.url, {
            request: event.request,
            waitUntil: event.waitUntil.bind(event),
            event
          }));
        }
      });
      Object.defineProperty(this, "fetch", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: (request, env, ctx) => {
          var _a7, _b3;
          return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_route).call(this, request.url, {
            request,
            waitUntil: (_b3 = (_a7 = ctx === null || ctx === void 0 ? void 0 : ctx.waitUntil) === null || _a7 === void 0 ? void 0 : _a7.bind(ctx)) !== null && _b3 !== void 0 ? _b3 : (_f) => {
            },
            env,
            ctx
          });
        }
      });
      Object.defineProperty(this, "serveCallback", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: (request, connInfo) => {
          return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_route).call(this, request.url, { request, waitUntil: (_f) => {
          }, connInfo });
        }
      });
      __classPrivateFieldSet7(this, _WorkerRouter_middleware, middleware, "f");
    }
    any(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "ANY", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    all(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "ANY", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    get(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "GET", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    post(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "POST", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    put(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "PUT", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    patch(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "PATCH", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    delete(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "DELETE", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    head(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "HEAD", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    options(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "OPTIONS", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    external(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "ANY", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalGET(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "GET", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalPOST(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "POST", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalPUT(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "PUT", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalPATCH(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "PATCH", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalDELETE(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "DELETE", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalOPTIONS(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "OPTIONS", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    externalHEAD(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerPattern).call(this, "HEAD", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
    use(path, subRouter) {
      if (!path.endsWith("*")) {
        console.warn("Path for 'use' does not appear to end in a wildcard (*). This is likely to produce unexpected results.");
      }
      __classPrivateFieldGet7(this, _WorkerRouter_routes, "f").push({
        method: "ANY",
        pattern: toPattern(path),
        handler: __classPrivateFieldGet7(subRouter, _WorkerRouter_routeHandler, "f")
      });
      return this;
    }
    useExternal(init, subRouter) {
      const pattern = new URLPattern(init);
      if (!pattern.pathname.endsWith("*")) {
        console.warn("Pathname pattern for 'use' does not appear to end in a wildcard (*). This is likely to produce unexpected results.");
      }
      __classPrivateFieldGet7(this, _WorkerRouter_routes, "f").push({
        method: "ANY",
        pattern,
        handler: __classPrivateFieldGet7(subRouter, _WorkerRouter_routeHandler, "f")
      });
      return this;
    }
    recover(path, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerRecoverPattern).call(this, "ANY", arguments.length, toPattern(path), middlewareOrHandler, handler5);
    }
    recoverExternal(init, middlewareOrHandler, handler5) {
      return __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_registerRecoverPattern).call(this, "ANY", arguments.length, new URLPattern(init), middlewareOrHandler, handler5);
    }
  };
  _WorkerRouter_middleware = /* @__PURE__ */ new WeakMap(), _WorkerRouter_routes = /* @__PURE__ */ new WeakMap(), _WorkerRouter_recoverRoutes = /* @__PURE__ */ new WeakMap(), _WorkerRouter_routeHandler = /* @__PURE__ */ new WeakMap(), _WorkerRouter_instances = /* @__PURE__ */ new WeakSet(), _WorkerRouter_route = async function _WorkerRouter_route2(fqURL, ctx) {
    var _a7, _b3, _c, _d;
    const result = __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_execPatterns).call(this, fqURL, ctx.request);
    const handled = new ResolvablePromise2();
    try {
      if (!result)
        throw notFound();
      const [handler5, match2] = result;
      const response = await handler5(Object.assign(ctx, { match: match2, handled, effects: new EffectsList() }));
      handled.resolve((_b3 = (_a7 = ctx.event) === null || _a7 === void 0 ? void 0 : _a7.handled) !== null && _b3 !== void 0 ? _b3 : Promise.resolve());
      return response;
    } catch (err) {
      if (err instanceof Response) {
        const recoverResult = __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_execPatterns).call(this, fqURL, ctx.request, __classPrivateFieldGet7(this, _WorkerRouter_recoverRoutes, "f"));
        if (recoverResult) {
          try {
            const [handler5, match2] = recoverResult;
            const response = await handler5(Object.assign(ctx, { match: match2, response: err, handled, effects: new EffectsList() }));
            handled.resolve((_d = (_c = ctx.event) === null || _c === void 0 ? void 0 : _c.handled) !== null && _d !== void 0 ? _d : Promise.resolve());
            return response;
          } catch (recoverErr) {
            throw new AggregateError3([err, recoverErr], "Route handler as well as recover handler failed");
          }
        }
      }
      throw err;
    }
  }, _WorkerRouter_execPatterns = function _WorkerRouter_execPatterns2(fqURL, request, routes = __classPrivateFieldGet7(this, _WorkerRouter_routes, "f")) {
    for (const { method, pattern, handler: handler5 } of routes) {
      if (method !== "ANY" && method !== request.method.toUpperCase())
        continue;
      const match2 = pattern.exec(fqURL);
      if (!match2)
        continue;
      return [handler5, match2];
    }
    return null;
  }, _WorkerRouter_pushRoute = function _WorkerRouter_pushRoute2(method, pattern, handler5) {
    __classPrivateFieldGet7(this, _WorkerRouter_routes, "f").push({
      method,
      pattern,
      handler: async (event) => {
        const ctx = await __classPrivateFieldGet7(this, _WorkerRouter_middleware, "f").call(this, event);
        const response = handler5(event.request, ctx);
        return executeEffects(event.effects, response);
      }
    });
  }, _WorkerRouter_pushMiddlewareRoute = function _WorkerRouter_pushMiddlewareRoute2(method, pattern, middleware, handler5) {
    __classPrivateFieldGet7(this, _WorkerRouter_routes, "f").push({
      method,
      pattern,
      handler: async (event) => {
        const ctx = await middleware(__classPrivateFieldGet7(this, _WorkerRouter_middleware, "f").call(this, event));
        const response = handler5(event.request, ctx);
        return executeEffects(event.effects, response);
      }
    });
  }, _WorkerRouter_registerPattern = function _WorkerRouter_registerPattern2(method, argsN, pattern, middlewareOrHandler, handler5) {
    if (argsN === 2) {
      const handler6 = middlewareOrHandler;
      __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_pushRoute).call(this, method, pattern, handler6);
    } else if (argsN === 3) {
      const middleware = middlewareOrHandler;
      __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_pushMiddlewareRoute).call(this, method, pattern, middleware, handler5);
    } else {
      throw Error(`Router '${method.toLowerCase()}' called with invalid number of arguments`);
    }
    return this;
  }, _WorkerRouter_registerRecoverPattern = function _WorkerRouter_registerRecoverPattern2(method, argsN, pattern, middlewareOrHandler, handler5) {
    if (argsN === 2) {
      const handler6 = middlewareOrHandler;
      __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_pushRecoverRoute).call(this, method, pattern, handler6);
    } else if (argsN === 3) {
      const middleware = middlewareOrHandler;
      __classPrivateFieldGet7(this, _WorkerRouter_instances, "m", _WorkerRouter_pushMiddlewareRecoverRoute).call(this, method, pattern, middleware, handler5);
    } else {
      throw Error(`Router '${method.toLowerCase()}' called with invalid number of arguments`);
    }
    return this;
  }, _WorkerRouter_pushRecoverRoute = function _WorkerRouter_pushRecoverRoute2(method, pattern, handler5) {
    __classPrivateFieldGet7(this, _WorkerRouter_recoverRoutes, "f").push({
      method,
      pattern,
      handler: (event) => {
        const response = handler5(event.request, event);
        return executeEffects(event.effects, response);
      }
    });
  }, _WorkerRouter_pushMiddlewareRecoverRoute = function _WorkerRouter_pushMiddlewareRecoverRoute2(method, pattern, middleware, handler5) {
    __classPrivateFieldGet7(this, _WorkerRouter_recoverRoutes, "f").push({
      method,
      pattern,
      handler: async (event) => {
        const ctx = await middleware(event);
        const response = handler5(event.request, ctx);
        return executeEffects(event.effects, response);
      }
    });
  };

  // src/router.ts
  var mw = pipe(basics(), contentTypes(["text/html", "application/json"]));
  var router = new WorkerRouter();

  // src/routes/assets.ts
  init_env();
  var import_kv_asset_handler = __toESM(require_dist());

  // node_modules/.pnpm/@worker-tools+response-creators@1.0.8/node_modules/@worker-tools/response-creators/index.js
  init_env();
  var mkResponse2 = (status, statusText) => (body = null, init = {}) => new Response(body, {
    ...init,
    status,
    statusText
  });
  var mkRedirect2 = (status, statusText) => (location2, init = {}) => new Response(null, {
    ...init,
    status,
    statusText,
    headers: [
      ...(init === null || init === void 0 ? void 0 : init.headers) ? Array.isArray(init.headers) ? init.headers : new Headers(init.headers) : [],
      ["Location", location2.toString()]
    ]
  });
  var mkUnauthorized2 = (status, statusText) => (realm = "", init = {}) => new Response(null, {
    ...init,
    status,
    statusText,
    headers: [
      ...(init === null || init === void 0 ? void 0 : init.headers) ? Array.isArray(init.headers) ? init.headers : new Headers(init.headers) : [],
      ["WWW-Authenticate", `Basic realm="${realm}", charset="UTF-8"`]
    ]
  });
  var mkNotModified2 = (status, statusText) => (ifNoneMatch, ifModifiedSince, init = {}) => new Response(null, {
    ...init,
    status,
    statusText,
    headers: [
      ...(init === null || init === void 0 ? void 0 : init.headers) ? Array.isArray(init.headers) ? init.headers : new Headers(init.headers) : [],
      ["If-None-Match", ifNoneMatch],
      ["If-Modified-Since", ifModifiedSince.toUTCString()]
    ]
  });
  var ok2 = mkResponse2(200, "OK");
  var created2 = mkResponse2(201, "Created");
  var accepted2 = mkResponse2(202, "Accepted");
  var nonAuthoritativeInformation2 = mkResponse2(203, "Non-Authoritative Information");
  var noContent2 = mkResponse2(204, "No Content");
  var resetContent2 = mkResponse2(205, "Reset Content");
  var partialContent2 = mkResponse2(206, "Partial Content");
  var multiStatus2 = mkResponse2(207, "Multi-Status");
  var alreadyReported2 = mkResponse2(208, "Already Reported");
  var imUsed2 = mkResponse2(226, "IM Used");
  var multipleChoices2 = mkRedirect2(300, "Multiple Choices");
  var movedPermanently2 = mkRedirect2(301, "Moved Permanently");
  var found2 = mkRedirect2(302, "Found");
  var seeOther2 = mkRedirect2(303, "See Other");
  var notModified2 = mkNotModified2(304, "Not Modified");
  var temporaryRedirect2 = mkRedirect2(307, "Temporary Redirect");
  var permanentRedirect2 = mkRedirect2(308, "Permanent Redirect");
  var badRequest2 = mkResponse2(400, "Bad Request");
  var unauthorized2 = mkUnauthorized2(401, "Unauthorized");
  var paymentRequired2 = mkResponse2(402, "Payment Required");
  var forbidden2 = mkResponse2(403, "Forbidden");
  var notFound2 = mkResponse2(404, "Not Found");
  var methodNotAllowed2 = mkResponse2(405, "Method Not Allowed");
  var notAcceptable2 = mkResponse2(406, "Not Acceptable");
  var proxyAuthenticationRequired2 = mkResponse2(407, "Proxy Authentication Required");
  var requestTimeout2 = mkResponse2(408, "Request Timeout");
  var conflict2 = mkResponse2(409, "Conflict");
  var gone2 = mkResponse2(410, "Gone");
  var lengthRequired2 = mkResponse2(411, "Length Required");
  var preconditionFailed2 = mkResponse2(412, "Precondition Failed");
  var payloadTooLarge2 = mkResponse2(413, "Payload Too Large");
  var uriTooLong2 = mkResponse2(414, "URI Too Long");
  var unsupportedMediaType2 = mkResponse2(415, "Unsupported Media Type");
  var rangeNotSatisfiable2 = mkResponse2(416, "Range Not Satisfiable");
  var expectationFailed2 = mkResponse2(417, "Expectation Failed");
  var imATeapot2 = mkResponse2(418, "I'm a teapot");
  var misdirectedRequest2 = mkResponse2(421, "Misdirected Request");
  var unprocessableEntity2 = mkResponse2(422, "Unprocessable Entity");
  var locked2 = mkResponse2(423, "Locked");
  var failedDependency2 = mkResponse2(424, "Failed Dependency");
  var tooEarly2 = mkResponse2(425, "Too Early");
  var upgradeRequired2 = mkResponse2(426, "Upgrade Required");
  var preconditionRequired2 = mkResponse2(428, "Precondition Required");
  var tooManyRequests2 = mkResponse2(429, "Too Many Requests");
  var requestHeaderFieldsTooLarge2 = mkResponse2(431, "Request Header Fields Too Large");
  var unavailableForLegalReasons2 = mkResponse2(451, "Unavailable For Legal Reasons");
  var internalServerError2 = mkResponse2(500, "Internal Server Error");
  var notImplemented2 = mkResponse2(501, "Not Implemented");
  var badGateway2 = mkResponse2(502, "Bad Gateway");
  var serviceUnavailable2 = mkResponse2(503, "Service Unavailable");
  var gatewayTimeout2 = mkResponse2(504, "Gateway Timeout");
  var httpVersionNotSupported2 = mkResponse2(505, "HTTP Version Not Supported");
  var variantAlsoNegotiates2 = mkResponse2(506, "Variant Also Negotiates");
  var insufficientStorage2 = mkResponse2(507, "Insufficient Storage");
  var loopDetected2 = mkResponse2(508, "Loop Detected");
  var notExtended2 = mkResponse2(510, "Not Extended");
  var networkAuthenticationRequired2 = mkResponse2(511, "Network Authentication Required");

  // src/routes/assets.ts
  var import_meta = {};
  async function handler(req, event) {
    const options = {};
    try {
      if (true) {
        options.cacheControl = {
          bypassCache: false
        };
      }
      let page;
      if ("__STATIC_CONTENT" in self) {
        page = await (0, import_kv_asset_handler.getAssetFromKV)(event, options);
      } else if ("Deno" in globalThis) {
        const url = new URL(event.request.url);
        const assetURL = new URL(`../public${url.pathname}`, import_meta.url).href;
        page = await fetch(assetURL);
      } else {
        page = await self.caches.match(event.request) ?? await fetch(event.request, { mode: "cors" });
      }
      const response = new Response(page.body, page);
      if (req.url.endsWith(".js"))
        response.headers.set("content-type", "text/javascript");
      if (req.url.endsWith(".wasm"))
        response.headers.set("content-type", "application/wasm");
      if (req.url.endsWith(".css"))
        response.headers.set("content-type", "text/css");
      if (req.url.endsWith(".html"))
        response.headers.set("content-type", "text/html");
      return response;
    } catch (e) {
      console.error(e);
      return internalServerError2(e instanceof Error ? e.message : e);
    }
  }

  // src/routes/news.ts
  init_env();

  // node_modules/.pnpm/@worker-tools+html@2.0.0-pre.8/node_modules/@worker-tools/html/esm/index.js
  init_env();

  // node_modules/.pnpm/@worker-tools+html@2.0.0-pre.8/node_modules/@worker-tools/html/esm/html.js
  init_env();

  // node_modules/.pnpm/@worker-tools+html@2.0.0-pre.8/node_modules/@worker-tools/html/esm/deps/deno.land/x/escape_html@1.0.0/mod.js
  init_env();
  var matchHtmlRegExp = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match2 = matchHtmlRegExp.exec(str);
    if (!match2) {
      return str;
    }
    let escape2;
    let html2 = "";
    let index = 0;
    let lastIndex = 0;
    for (index = match2.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escape2 = "&quot;";
          break;
        case 38:
          escape2 = "&amp;";
          break;
        case 39:
          escape2 = "&#39;";
          break;
        case 60:
          escape2 = "&lt;";
          break;
        case 62:
          escape2 = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html2 += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html2 += escape2;
    }
    return lastIndex !== index ? html2 + str.substring(lastIndex, index) : html2;
  }

  // node_modules/.pnpm/@worker-tools+html@2.0.0-pre.8/node_modules/@worker-tools/html/esm/html.js
  var __classPrivateFieldSet8 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet8 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _HTML_strings;
  var _HTML_args;
  var _UnsafeHTML_value;
  var _Fallback_content;
  var _Fallback_fallback;
  var isIterable = (x4) => typeof x4 === "object" && x4 !== null && Symbol.iterator in x4;
  var isAsyncIterable = (x4) => typeof x4 === "object" && x4 !== null && Symbol.asyncIterator in x4;
  async function* unpackContent(content) {
    const x4 = await content;
    if (x4 == null || x4 === "" || x4 === false) {
      yield " ";
    } else if (x4 instanceof AbstractHTML) {
      yield* x4;
    } else if (isIterable(x4)) {
      for (const xi of x4) {
        yield* unpackContent(xi);
      }
    } else if (isAsyncIterable(x4)) {
      for await (const xi of x4) {
        yield* unpackContent(xi);
      }
    } else {
      yield escapeHtml(x4);
    }
  }
  async function* unpack2(content) {
    try {
      yield* unpackContent(typeof content === "function" ? content() : content);
    } catch (err) {
      if (err instanceof AbstractHTML)
        yield* err;
      else
        throw err;
    }
  }
  var AbstractHTML = class {
  };
  var HTML = class extends AbstractHTML {
    constructor(strings2, args) {
      super();
      _HTML_strings.set(this, void 0);
      _HTML_args.set(this, void 0);
      __classPrivateFieldSet8(this, _HTML_strings, strings2, "f");
      __classPrivateFieldSet8(this, _HTML_args, args, "f");
    }
    async *[(_HTML_strings = /* @__PURE__ */ new WeakMap(), _HTML_args = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
      const stringsIt = __classPrivateFieldGet8(this, _HTML_strings, "f")[Symbol.iterator]();
      const argsIt = __classPrivateFieldGet8(this, _HTML_args, "f")[Symbol.iterator]();
      while (true) {
        const { done: stringDone2, value: string2 } = stringsIt.next();
        if (stringDone2)
          break;
        else
          yield string2;
        const { done: argDone, value: arg } = argsIt.next();
        if (argDone)
          break;
        else
          yield* unpack2(arg);
      }
      const { done: stringDone, value: string } = stringsIt.next();
      if (stringDone)
        return;
      else
        yield string;
    }
  };
  var UnsafeHTML = class extends AbstractHTML {
    constructor(value) {
      super();
      _UnsafeHTML_value.set(this, void 0);
      __classPrivateFieldSet8(this, _UnsafeHTML_value, value || " ", "f");
    }
    async *[(_UnsafeHTML_value = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
      yield __classPrivateFieldGet8(this, _UnsafeHTML_value, "f");
    }
    toString() {
      return __classPrivateFieldGet8(this, _UnsafeHTML_value, "f");
    }
    toJSON() {
      return __classPrivateFieldGet8(this, _UnsafeHTML_value, "f");
    }
  };
  var Fallback = class extends AbstractHTML {
    constructor(content, fallback) {
      super();
      _Fallback_content.set(this, void 0);
      _Fallback_fallback.set(this, void 0);
      __classPrivateFieldSet8(this, _Fallback_content, content, "f");
      __classPrivateFieldSet8(this, _Fallback_fallback, fallback, "f");
    }
    async *[(_Fallback_content = /* @__PURE__ */ new WeakMap(), _Fallback_fallback = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
      try {
        yield* unpack2(__classPrivateFieldGet8(this, _Fallback_content, "f"));
      } catch (e) {
        yield* typeof __classPrivateFieldGet8(this, _Fallback_fallback, "f") === "function" ? __classPrivateFieldGet8(this, _Fallback_fallback, "f").call(this, e) : __classPrivateFieldGet8(this, _Fallback_fallback, "f");
      }
    }
  };
  function html(strings2, ...args) {
    return new HTML(strings2, args);
  }
  function unsafeHTML(content) {
    return new UnsafeHTML(content);
  }

  // node_modules/.pnpm/@worker-tools+html@2.0.0-pre.8/node_modules/@worker-tools/html/esm/html-response.js
  init_env();

  // node_modules/.pnpm/@worker-tools+stream-response@0.1.0-pre.0/node_modules/@worker-tools/stream-response/esm/index.js
  init_env();

  // node_modules/.pnpm/whatwg-stream-to-async-iter@0.5.0/node_modules/whatwg-stream-to-async-iter/index.js
  init_env();
  function asyncIterableToStreamTS(iterable) {
    const { readable, writable } = new TransformStream();
    (async () => {
      const writer = writable.getWriter();
      try {
        for await (const x4 of iterable)
          writer.write(x4);
        writer.close();
      } catch (err) {
        writer.abort(err);
      }
    })();
    return readable;
  }
  function asyncIterableToStreamRS(iterable) {
    return new ReadableStream({
      async pull(controller) {
        try {
          for await (const x4 of iterable)
            controller.enqueue(x4);
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      }
    });
  }
  var tryReadableStream = () => {
    try {
      return !!new ReadableStream({});
    } catch (_a7) {
      return false;
    }
  };
  var asyncIterableToStream = tryReadableStream() ? asyncIterableToStreamRS : asyncIterableToStreamTS;

  // node_modules/.pnpm/@worker-tools+stream-response@0.1.0-pre.0/node_modules/@worker-tools/stream-response/esm/iter.js
  init_env();
  async function* aMap(iterable, f) {
    for await (const x4 of iterable)
      yield f(x4);
  }
  async function aJoin(iterable) {
    const chunks = [];
    for await (const x4 of iterable)
      chunks.push(x4);
    return chunks.join("");
  }
  async function* promiseToAsyncIterable(promise) {
    yield await promise;
  }

  // node_modules/.pnpm/@worker-tools+stream-response@0.1.0-pre.0/node_modules/@worker-tools/stream-response/esm/index.js
  var _a4;
  var _b;
  var isCFWorkers = ((_b = (_a4 = self.navigator) === null || _a4 === void 0 ? void 0 : _a4.userAgent) === null || _b === void 0 ? void 0 : _b.includes("Cloudflare-Workers")) || !("TextEncoderStream" in self);
  var StreamResponse = class extends Response {
    constructor(body, init) {
      super(isCFWorkers ? (() => {
        const encoder = new TextEncoder();
        return asyncIterableToStream(aMap(body, (x4) => encoder.encode(x4)));
      })() : asyncIterableToStream(body).pipeThrough(new TextEncoderStream()), init);
    }
  };
  var BufferedResponse = class extends Response {
    constructor(body, init) {
      super(asyncIterableToStream(promiseToAsyncIterable(aJoin(body).then((str) => new TextEncoder().encode(str)))), init);
    }
  };

  // node_modules/.pnpm/@worker-tools+html@2.0.0-pre.8/node_modules/@worker-tools/html/esm/html-response.js
  var HTMLResponse = class extends StreamResponse {
    constructor(html2, init) {
      super(html2, init);
      if (!this.headers.has("content-type"))
        this.headers.set("Content-Type", HTMLResponse.contentType);
    }
  };
  Object.defineProperty(HTMLResponse, "contentType", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "text/html;charset=UTF-8"
  });
  var BufferedHTMLResponse = class extends BufferedResponse {
    constructor(html2, init) {
      super(html2, init);
      if (!this.headers.has("content-type"))
        this.headers.set("content-type", BufferedHTMLResponse.contentType);
    }
  };
  Object.defineProperty(BufferedHTMLResponse, "contentType", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "text/html;charset=UTF-8"
  });

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/toDate/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/_lib/requiredArgs/index.js
  init_env();
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/toDate/index.js
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
        console.warn(new Error().stack);
      }
      return new Date(NaN);
    }
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
  init_env();
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/compareAsc/index.js
  init_env();
  function compareAsc(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return diff;
    }
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
  init_env();
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };
  var formatDistance_default = formatDistance;

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
  init_env();
  function buildFormatLongFn(args) {
    return function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };
  var formatLong_default = formatLong;

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
  init_env();
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  };
  var formatRelative_default = formatRelative;

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
  init_env();
  function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function(quarter) {
        return quarter - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };
  var localize_default = localize;

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
  init_env();
  function buildMatchFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key2 = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
        return pattern.test(matchedString);
      }) : findKey(parsePatterns, function(pattern) {
        return pattern.test(matchedString);
      });
      var value;
      value = args.valueCallback ? args.valueCallback(key2) : key2;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  function findKey(object, predicate) {
    for (var key2 in object) {
      if (object.hasOwnProperty(key2) && predicate(object[key2])) {
        return key2;
      }
    }
    return void 0;
  }
  function findIndex(array, predicate) {
    for (var key2 = 0; key2 < array.length; key2++) {
      if (predicate(array[key2])) {
        return key2;
      }
    }
    return void 0;
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
  init_env();
  function buildMatchPatternFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult)
        return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult)
        return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function(index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };
  var match_default = match;

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/index.js
  var locale = {
    code: "en-US",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  var en_US_default = locale;

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/_lib/cloneObject/index.js
  init_env();

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/_lib/assign/index.js
  init_env();
  function assign(target2, dirtyObject) {
    if (target2 == null) {
      throw new TypeError("assign requires that input parameter not be null or undefined");
    }
    dirtyObject = dirtyObject || {};
    for (var property in dirtyObject) {
      if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
        target2[property] = dirtyObject[property];
      }
    }
    return target2;
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/_lib/cloneObject/index.js
  function cloneObject(dirtyObject) {
    return assign({}, dirtyObject);
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDistanceStrict/index.js
  init_env();
  var MILLISECONDS_IN_MINUTE = 1e3 * 60;
  var MINUTES_IN_DAY = 60 * 24;
  var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
  var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
  function formatDistanceStrict(dirtyDate, dirtyBaseDate) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    requiredArgs(2, arguments);
    var locale2 = options.locale || en_US_default;
    if (!locale2.formatDistance) {
      throw new RangeError("locale must contain localize.formatDistance property");
    }
    var comparison = compareAsc(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) {
      throw new RangeError("Invalid time value");
    }
    var localizeOptions = cloneObject(options);
    localizeOptions.addSuffix = Boolean(options.addSuffix);
    localizeOptions.comparison = comparison;
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
      dateLeft = toDate(dirtyBaseDate);
      dateRight = toDate(dirtyDate);
    } else {
      dateLeft = toDate(dirtyDate);
      dateRight = toDate(dirtyBaseDate);
    }
    var roundingMethod = options.roundingMethod == null ? "round" : String(options.roundingMethod);
    var roundingMethodFn;
    if (roundingMethod === "floor") {
      roundingMethodFn = Math.floor;
    } else if (roundingMethod === "ceil") {
      roundingMethodFn = Math.ceil;
    } else if (roundingMethod === "round") {
      roundingMethodFn = Math.round;
    } else {
      throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    }
    var milliseconds = dateRight.getTime() - dateLeft.getTime();
    var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
    var timezoneOffset = getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft);
    var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
    var unit;
    if (options.unit == null) {
      if (minutes < 1) {
        unit = "second";
      } else if (minutes < 60) {
        unit = "minute";
      } else if (minutes < MINUTES_IN_DAY) {
        unit = "hour";
      } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
        unit = "day";
      } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
        unit = "month";
      } else {
        unit = "year";
      }
    } else {
      unit = String(options.unit);
    }
    if (unit === "second") {
      var seconds = roundingMethodFn(milliseconds / 1e3);
      return locale2.formatDistance("xSeconds", seconds, localizeOptions);
    } else if (unit === "minute") {
      var roundedMinutes = roundingMethodFn(minutes);
      return locale2.formatDistance("xMinutes", roundedMinutes, localizeOptions);
    } else if (unit === "hour") {
      var hours = roundingMethodFn(minutes / 60);
      return locale2.formatDistance("xHours", hours, localizeOptions);
    } else if (unit === "day") {
      var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
      return locale2.formatDistance("xDays", days, localizeOptions);
    } else if (unit === "month") {
      var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
      return months === 12 && options.unit !== "month" ? locale2.formatDistance("xYears", 1, localizeOptions) : locale2.formatDistance("xMonths", months, localizeOptions);
    } else if (unit === "year") {
      var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
      return locale2.formatDistance("xYears", years, localizeOptions);
    }
    throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
  }

  // node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDistanceToNowStrict/index.js
  init_env();
  function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    return formatDistanceStrict(dirtyDate, Date.now(), dirtyOptions);
  }

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/main.js
  init_env();

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/parse-domain.js
  init_env();

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/serialized-tries.js
  init_env();

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/serialized-tries/icann.js
  init_env();
  var icann_default = "ac>com,edu,gov,net,mil,org<ad>nom<ae>co,net,org,sch,ac,gov,mil<aero>accident-investigation,accident-prevention,aerobatic,aeroclub,aerodrome,agents,aircraft,airline,airport,air-surveillance,airtraffic,air-traffic-control,ambulance,amusement,association,author,ballooning,broker,caa,cargo,catering,certification,championship,charter,civilaviation,club,conference,consultant,consulting,control,council,crew,design,dgca,educator,emergency,engine,engineer,entertainment,equipment,exchange,express,federation,flight,fuel,gliding,government,groundhandling,group,hanggliding,homebuilt,insurance,journal,journalist,leasing,logistics,magazine,maintenance,media,microlight,modelling,navigation,parachuting,paragliding,passenger-association,pilot,press,production,recreation,repbody,res,research,rotorcraft,safety,scientist,services,show,skydiving,software,student,trader,trading,trainer,union,workinggroup,works<af>gov,com,org,net,edu<ag>com,org,net,co,nom<ai>off,com,net,org<al>com,edu,gov,mil,net,org<am>co,com,commune,net,org<ao>ed,gv,og,co,pb,it<aq,ar>bet,com,coop,edu,gob,gov,int,mil,musica,mutual,net,org,senasa,tur<arpa>e164,in-addr,ip6,iris,uri,urn<as>gov<asia,at>ac>sth<co,gv,or<au>com,net,org,edu>act,catholic,nsw>schools<nt,qld,sa,tas,vic,wa<gov>qld,sa,tas,vic,wa<asn,id,info,conf,oz,act,nsw,nt,qld,sa,tas,vic,wa<aw>com<ax,az>com,net,int,gov,org,edu,info,pp,mil,name,pro,biz<ba>com,edu,gov,mil,net,org<bb>biz,co,com,edu,gov,info,net,org,store,tv<bd>*<be>ac<bf>gov<bg>a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9<bh>com,edu,net,org,gov<bi>co,com,edu,or,org<biz,bj>asso,barreau,gouv<bm>com,edu,gov,net,org<bn>com,edu,gov,net,org<bo>com,edu,gob,int,org,net,mil,tv,web,academia,agro,arte,blog,bolivia,ciencia,cooperativa,democracia,deporte,ecologia,economia,empresa,indigena,industria,info,medicina,movimiento,musica,natural,nombre,noticias,patria,politica,profesional,plurinacional,pueblo,revista,salud,tecnologia,tksat,transporte,wiki<br>9guacu,abc,adm,adv,agr,aju,am,anani,aparecida,app,arq,art,ato,b,barueri,belem,bhz,bib,bio,blog,bmd,boavista,bsb,campinagrande,campinas,caxias,cim,cng,cnt,com,contagem,coop,coz,cri,cuiaba,curitiba,def,des,det,dev,ecn,eco,edu,emp,enf,eng,esp,etc,eti,far,feira,flog,floripa,fm,fnd,fortal,fot,foz,fst,g12,geo,ggf,goiania,gov>ac,al,am,ap,ba,ce,df,es,go,ma,mg,ms,mt,pa,pb,pe,pi,pr,rj,rn,ro,rr,rs,sc,se,sp,to<gru,imb,ind,inf,jab,jampa,jdf,joinville,jor,jus,leg,lel,log,londrina,macapa,maceio,manaus,maringa,mat,med,mil,morena,mp,mus,natal,net,niteroi,nom>*<not,ntr,odo,ong,org,osasco,palmas,poa,ppg,pro,psc,psi,pvh,qsl,radio,rec,recife,rep,ribeirao,rio,riobranco,riopreto,salvador,sampa,santamaria,santoandre,saobernardo,saogonca,seg,sjc,slg,slz,sorocaba,srv,taxi,tc,tec,teo,the,tmp,trd,tur,tv,udi,vet,vix,vlog,wiki,zlg<bs>com,net,org,edu,gov<bt>com,edu,gov,net,org<bv,bw>co,org<by>gov,mil,com,of<bz>com,net,org,edu,gov<ca>ab,bc,mb,nb,nf,nl,ns,nt,nu,on,pe,qc,sk,yk,gc<cat,cc,cd>gov<cf,cg,ch,ci>org,or,com,co,edu,ed,ac,net,go,asso,xn--aroport-bya,int,presse,md,gouv<ck>*,!www<cl>co,gob,gov,mil<cm>co,com,gov,net<cn>ac,com,edu,gov,net,org,mil,xn--55qx5d,xn--io0a7i,xn--od0alg,ah,bj,cq,fj,gd,gs,gz,gx,ha,hb,he,hi,hl,hn,jl,js,jx,ln,nm,nx,qh,sc,sd,sh,sn,sx,tj,xj,xz,yn,zj,hk,mo,tw<co>arts,com,edu,firm,gov,info,int,mil,net,nom,org,rec,web<com,coop,cr>ac,co,ed,fi,go,or,sa<cu>com,edu,org,net,gov,inf<cv>com,edu,int,nome,org<cw>com,edu,net,org<cx>gov<cy>ac,biz,com,ekloges,gov,ltd,name,net,org,parliament,press,pro,tm<cz,de,dj,dk,dm>com,net,org,edu,gov<do>art,com,edu,gob,gov,mil,net,org,sld,web<dz>art,asso,com,edu,gov,org,net,pol,soc,tm<ec>com,info,net,fin,k12,med,pro,org,edu,gov,gob,mil<edu,ee>edu,gov,riik,lib,med,com,pri,aip,org,fie<eg>com,edu,eun,gov,mil,name,net,org,sci<er>*<es>com,nom,org,gob,edu<et>com,gov,org,edu,biz,name,info,net<eu,fi>aland<fj>ac,biz,com,gov,info,mil,name,net,org,pro<fk>*<fm>com,edu,net,org<fo,fr>asso,com,gouv,nom,prd,tm,aeroport,avocat,avoues,cci,chambagri,chirurgiens-dentistes,experts-comptables,geometre-expert,greta,huissier-justice,medecin,notaires,pharmacien,port,veterinaire<ga,gb,gd>edu,gov<ge>com,edu,gov,org,mil,net,pvt<gf,gg>co,net,org<gh>com,edu,gov,org,mil<gi>com,ltd,gov,mod,edu,org<gl>co,com,edu,net,org<gm,gn>ac,com,edu,gov,org,net<gov,gp>com,net,mobi,edu,org,asso<gq,gr>com,edu,net,org,gov<gs,gt>com,edu,gob,ind,mil,net,org<gu>com,edu,gov,guam,info,net,org,web<gw,gy>co,com,edu,gov,net,org<hk>com,edu,gov,idv,net,org,xn--55qx5d,xn--wcvs22d,xn--lcvr32d,xn--mxtq1m,xn--gmqw5a,xn--ciqpn,xn--gmq050i,xn--zf0avx,xn--io0a7i,xn--mk0axi,xn--od0alg,xn--od0aq3b,xn--tn0ag,xn--uc0atv,xn--uc0ay4a<hm,hn>com,edu,org,net,mil,gob<hr>iz,from,name,com<ht>com,shop,firm,info,adult,net,pro,org,med,art,coop,pol,asso,edu,rel,gouv,perso<hu>co,info,org,priv,sport,tm,2000,agrar,bolt,casino,city,erotica,erotika,film,forum,games,hotel,ingatlan,jogasz,konyvelo,lakas,media,news,reklam,sex,shop,suli,szex,tozsde,utazas,video<id>ac,biz,co,desa,go,mil,my,net,or,ponpes,sch,web<ie>gov<il>ac,co,gov,idf,k12,muni,net,org<im>ac,co>ltd,plc<com,net,org,tt,tv<in>co,firm,net,org,gen,ind,nic,ac,edu,res,gov,mil<info,int>eu<io>com<iq>gov,edu,mil,com,org,net<ir>ac,co,gov,id,net,org,sch,xn--mgba3a4f16a,xn--mgba3a4fra<is>net,com,edu,gov,org,int<it>gov,edu,abr,abruzzo,aosta-valley,aostavalley,bas,basilicata,cal,calabria,cam,campania,emilia-romagna,emiliaromagna,emr,friuli-v-giulia,friuli-ve-giulia,friuli-vegiulia,friuli-venezia-giulia,friuli-veneziagiulia,friuli-vgiulia,friuliv-giulia,friulive-giulia,friulivegiulia,friulivenezia-giulia,friuliveneziagiulia,friulivgiulia,fvg,laz,lazio,lig,liguria,lom,lombardia,lombardy,lucania,mar,marche,mol,molise,piedmont,piemonte,pmn,pug,puglia,sar,sardegna,sardinia,sic,sicilia,sicily,taa,tos,toscana,trentin-sud-tirol,xn--trentin-sd-tirol-rzb,trentin-sudtirol,xn--trentin-sdtirol-7vb,trentin-sued-tirol,trentin-suedtirol,trentino-a-adige,trentino-aadige,trentino-alto-adige,trentino-altoadige,trentino-s-tirol,trentino-stirol,trentino-sud-tirol,xn--trentino-sd-tirol-c3b,trentino-sudtirol,xn--trentino-sdtirol-szb,trentino-sued-tirol,trentino-suedtirol,trentino,trentinoa-adige,trentinoaadige,trentinoalto-adige,trentinoaltoadige,trentinos-tirol,trentinostirol,trentinosud-tirol,xn--trentinosd-tirol-rzb,trentinosudtirol,xn--trentinosdtirol-7vb,trentinosued-tirol,trentinosuedtirol,trentinsud-tirol,xn--trentinsd-tirol-6vb,trentinsudtirol,xn--trentinsdtirol-nsb,trentinsued-tirol,trentinsuedtirol,tuscany,umb,umbria,val-d-aosta,val-daosta,vald-aosta,valdaosta,valle-aosta,valle-d-aosta,valle-daosta,valleaosta,valled-aosta,valledaosta,vallee-aoste,xn--valle-aoste-ebb,vallee-d-aoste,xn--valle-d-aoste-ehb,valleeaoste,xn--valleaoste-e7a,valleedaoste,xn--valledaoste-ebb,vao,vda,ven,veneto,ag,agrigento,al,alessandria,alto-adige,altoadige,an,ancona,andria-barletta-trani,andria-trani-barletta,andriabarlettatrani,andriatranibarletta,ao,aosta,aoste,ap,aq,aquila,ar,arezzo,ascoli-piceno,ascolipiceno,asti,at,av,avellino,ba,balsan-sudtirol,xn--balsan-sdtirol-nsb,balsan-suedtirol,balsan,bari,barletta-trani-andria,barlettatraniandria,belluno,benevento,bergamo,bg,bi,biella,bl,bn,bo,bologna,bolzano-altoadige,bolzano,bozen-sudtirol,xn--bozen-sdtirol-2ob,bozen-suedtirol,bozen,br,brescia,brindisi,bs,bt,bulsan-sudtirol,xn--bulsan-sdtirol-nsb,bulsan-suedtirol,bulsan,bz,ca,cagliari,caltanissetta,campidano-medio,campidanomedio,campobasso,carbonia-iglesias,carboniaiglesias,carrara-massa,carraramassa,caserta,catania,catanzaro,cb,ce,cesena-forli,xn--cesena-forl-mcb,cesenaforli,xn--cesenaforl-i8a,ch,chieti,ci,cl,cn,co,como,cosenza,cr,cremona,crotone,cs,ct,cuneo,cz,dell-ogliastra,dellogliastra,en,enna,fc,fe,fermo,ferrara,fg,fi,firenze,florence,fm,foggia,forli-cesena,xn--forl-cesena-fcb,forlicesena,xn--forlcesena-c8a,fr,frosinone,ge,genoa,genova,go,gorizia,gr,grosseto,iglesias-carbonia,iglesiascarbonia,im,imperia,is,isernia,kr,la-spezia,laquila,laspezia,latina,lc,le,lecce,lecco,li,livorno,lo,lodi,lt,lu,lucca,macerata,mantova,massa-carrara,massacarrara,matera,mb,mc,me,medio-campidano,mediocampidano,messina,mi,milan,milano,mn,mo,modena,monza-brianza,monza-e-della-brianza,monza,monzabrianza,monzaebrianza,monzaedellabrianza,ms,mt,na,naples,napoli,no,novara,nu,nuoro,og,ogliastra,olbia-tempio,olbiatempio,or,oristano,ot,pa,padova,padua,palermo,parma,pavia,pc,pd,pe,perugia,pesaro-urbino,pesarourbino,pescara,pg,pi,piacenza,pisa,pistoia,pn,po,pordenone,potenza,pr,prato,pt,pu,pv,pz,ra,ragusa,ravenna,rc,re,reggio-calabria,reggio-emilia,reggiocalabria,reggioemilia,rg,ri,rieti,rimini,rm,rn,ro,roma,rome,rovigo,sa,salerno,sassari,savona,si,siena,siracusa,so,sondrio,sp,sr,ss,suedtirol,xn--sdtirol-n2a,sv,ta,taranto,te,tempio-olbia,tempioolbia,teramo,terni,tn,to,torino,tp,tr,trani-andria-barletta,trani-barletta-andria,traniandriabarletta,tranibarlettaandria,trapani,trento,treviso,trieste,ts,turin,tv,ud,udine,urbino-pesaro,urbinopesaro,va,varese,vb,vc,ve,venezia,venice,verbania,vercelli,verona,vi,vibo-valentia,vibovalentia,vicenza,viterbo,vr,vs,vt,vv<je>co,net,org<jm>*<jo>com,org,net,edu,sch,gov,mil,name<jobs,jp>ac,ad,co,ed,go,gr,lg,ne,or,aichi>aisai,ama,anjo,asuke,chiryu,chita,fuso,gamagori,handa,hazu,hekinan,higashiura,ichinomiya,inazawa,inuyama,isshiki,iwakura,kanie,kariya,kasugai,kira,kiyosu,komaki,konan,kota,mihama,miyoshi,nishio,nisshin,obu,oguchi,oharu,okazaki,owariasahi,seto,shikatsu,shinshiro,shitara,tahara,takahama,tobishima,toei,togo,tokai,tokoname,toyoake,toyohashi,toyokawa,toyone,toyota,tsushima,yatomi<akita>akita,daisen,fujisato,gojome,hachirogata,happou,higashinaruse,honjo,honjyo,ikawa,kamikoani,kamioka,katagami,kazuno,kitaakita,kosaka,kyowa,misato,mitane,moriyoshi,nikaho,noshiro,odate,oga,ogata,semboku,yokote,yurihonjo<aomori>aomori,gonohe,hachinohe,hashikami,hiranai,hirosaki,itayanagi,kuroishi,misawa,mutsu,nakadomari,noheji,oirase,owani,rokunohe,sannohe,shichinohe,shingo,takko,towada,tsugaru,tsuruta<chiba>abiko,asahi,chonan,chosei,choshi,chuo,funabashi,futtsu,hanamigawa,ichihara,ichikawa,ichinomiya,inzai,isumi,kamagaya,kamogawa,kashiwa,katori,katsuura,kimitsu,kisarazu,kozaki,kujukuri,kyonan,matsudo,midori,mihama,minamiboso,mobara,mutsuzawa,nagara,nagareyama,narashino,narita,noda,oamishirasato,omigawa,onjuku,otaki,sakae,sakura,shimofusa,shirako,shiroi,shisui,sodegaura,sosa,tako,tateyama,togane,tohnosho,tomisato,urayasu,yachimata,yachiyo,yokaichiba,yokoshibahikari,yotsukaido<ehime>ainan,honai,ikata,imabari,iyo,kamijima,kihoku,kumakogen,masaki,matsuno,matsuyama,namikata,niihama,ozu,saijo,seiyo,shikokuchuo,tobe,toon,uchiko,uwajima,yawatahama<fukui>echizen,eiheiji,fukui,ikeda,katsuyama,mihama,minamiechizen,obama,ohi,ono,sabae,sakai,takahama,tsuruga,wakasa<fukuoka>ashiya,buzen,chikugo,chikuho,chikujo,chikushino,chikuzen,chuo,dazaifu,fukuchi,hakata,higashi,hirokawa,hisayama,iizuka,inatsuki,kaho,kasuga,kasuya,kawara,keisen,koga,kurate,kurogi,kurume,minami,miyako,miyama,miyawaka,mizumaki,munakata,nakagawa,nakama,nishi,nogata,ogori,okagaki,okawa,oki,omuta,onga,onojo,oto,saigawa,sasaguri,shingu,shinyoshitomi,shonai,soeda,sue,tachiarai,tagawa,takata,toho,toyotsu,tsuiki,ukiha,umi,usui,yamada,yame,yanagawa,yukuhashi<fukushima>aizubange,aizumisato,aizuwakamatsu,asakawa,bandai,date,fukushima,furudono,futaba,hanawa,higashi,hirata,hirono,iitate,inawashiro,ishikawa,iwaki,izumizaki,kagamiishi,kaneyama,kawamata,kitakata,kitashiobara,koori,koriyama,kunimi,miharu,mishima,namie,nango,nishiaizu,nishigo,okuma,omotego,ono,otama,samegawa,shimogo,shirakawa,showa,soma,sukagawa,taishin,tamakawa,tanagura,tenei,yabuki,yamato,yamatsuri,yanaizu,yugawa<gifu>anpachi,ena,gifu,ginan,godo,gujo,hashima,hichiso,hida,higashishirakawa,ibigawa,ikeda,kakamigahara,kani,kasahara,kasamatsu,kawaue,kitagata,mino,minokamo,mitake,mizunami,motosu,nakatsugawa,ogaki,sakahogi,seki,sekigahara,shirakawa,tajimi,takayama,tarui,toki,tomika,wanouchi,yamagata,yaotsu,yoro<gunma>annaka,chiyoda,fujioka,higashiagatsuma,isesaki,itakura,kanna,kanra,katashina,kawaba,kiryu,kusatsu,maebashi,meiwa,midori,minakami,naganohara,nakanojo,nanmoku,numata,oizumi,ora,ota,shibukawa,shimonita,shinto,showa,takasaki,takayama,tamamura,tatebayashi,tomioka,tsukiyono,tsumagoi,ueno,yoshioka<hiroshima>asaminami,daiwa,etajima,fuchu,fukuyama,hatsukaichi,higashihiroshima,hongo,jinsekikogen,kaita,kui,kumano,kure,mihara,miyoshi,naka,onomichi,osakikamijima,otake,saka,sera,seranishi,shinichi,shobara,takehara<hokkaido>abashiri,abira,aibetsu,akabira,akkeshi,asahikawa,ashibetsu,ashoro,assabu,atsuma,bibai,biei,bifuka,bihoro,biratori,chippubetsu,chitose,date,ebetsu,embetsu,eniwa,erimo,esan,esashi,fukagawa,fukushima,furano,furubira,haboro,hakodate,hamatonbetsu,hidaka,higashikagura,higashikawa,hiroo,hokuryu,hokuto,honbetsu,horokanai,horonobe,ikeda,imakane,ishikari,iwamizawa,iwanai,kamifurano,kamikawa,kamishihoro,kamisunagawa,kamoenai,kayabe,kembuchi,kikonai,kimobetsu,kitahiroshima,kitami,kiyosato,koshimizu,kunneppu,kuriyama,kuromatsunai,kushiro,kutchan,kyowa,mashike,matsumae,mikasa,minamifurano,mombetsu,moseushi,mukawa,muroran,naie,nakagawa,nakasatsunai,nakatombetsu,nanae,nanporo,nayoro,nemuro,niikappu,niki,nishiokoppe,noboribetsu,numata,obihiro,obira,oketo,okoppe,otaru,otobe,otofuke,otoineppu,oumu,ozora,pippu,rankoshi,rebun,rikubetsu,rishiri,rishirifuji,saroma,sarufutsu,shakotan,shari,shibecha,shibetsu,shikabe,shikaoi,shimamaki,shimizu,shimokawa,shinshinotsu,shintoku,shiranuka,shiraoi,shiriuchi,sobetsu,sunagawa,taiki,takasu,takikawa,takinoue,teshikaga,tobetsu,tohma,tomakomai,tomari,toya,toyako,toyotomi,toyoura,tsubetsu,tsukigata,urakawa,urausu,uryu,utashinai,wakkanai,wassamu,yakumo,yoichi<hyogo>aioi,akashi,ako,amagasaki,aogaki,asago,ashiya,awaji,fukusaki,goshiki,harima,himeji,ichikawa,inagawa,itami,kakogawa,kamigori,kamikawa,kasai,kasuga,kawanishi,miki,minamiawaji,nishinomiya,nishiwaki,ono,sanda,sannan,sasayama,sayo,shingu,shinonsen,shiso,sumoto,taishi,taka,takarazuka,takasago,takino,tamba,tatsuno,toyooka,yabu,yashiro,yoka,yokawa<ibaraki>ami,asahi,bando,chikusei,daigo,fujishiro,hitachi,hitachinaka,hitachiomiya,hitachiota,ibaraki,ina,inashiki,itako,iwama,joso,kamisu,kasama,kashima,kasumigaura,koga,miho,mito,moriya,naka,namegata,oarai,ogawa,omitama,ryugasaki,sakai,sakuragawa,shimodate,shimotsuma,shirosato,sowa,suifu,takahagi,tamatsukuri,tokai,tomobe,tone,toride,tsuchiura,tsukuba,uchihara,ushiku,yachiyo,yamagata,yawara,yuki<ishikawa>anamizu,hakui,hakusan,kaga,kahoku,kanazawa,kawakita,komatsu,nakanoto,nanao,nomi,nonoichi,noto,shika,suzu,tsubata,tsurugi,uchinada,wajima<iwate>fudai,fujisawa,hanamaki,hiraizumi,hirono,ichinohe,ichinoseki,iwaizumi,iwate,joboji,kamaishi,kanegasaki,karumai,kawai,kitakami,kuji,kunohe,kuzumaki,miyako,mizusawa,morioka,ninohe,noda,ofunato,oshu,otsuchi,rikuzentakata,shiwa,shizukuishi,sumita,tanohata,tono,yahaba,yamada<kagawa>ayagawa,higashikagawa,kanonji,kotohira,manno,marugame,mitoyo,naoshima,sanuki,tadotsu,takamatsu,tonosho,uchinomi,utazu,zentsuji<kagoshima>akune,amami,hioki,isa,isen,izumi,kagoshima,kanoya,kawanabe,kinko,kouyama,makurazaki,matsumoto,minamitane,nakatane,nishinoomote,satsumasendai,soo,tarumizu,yusui<kanagawa>aikawa,atsugi,ayase,chigasaki,ebina,fujisawa,hadano,hakone,hiratsuka,isehara,kaisei,kamakura,kiyokawa,matsuda,minamiashigara,miura,nakai,ninomiya,odawara,oi,oiso,sagamihara,samukawa,tsukui,yamakita,yamato,yokosuka,yugawara,zama,zushi<kochi>aki,geisei,hidaka,higashitsuno,ino,kagami,kami,kitagawa,kochi,mihara,motoyama,muroto,nahari,nakamura,nankoku,nishitosa,niyodogawa,ochi,okawa,otoyo,otsuki,sakawa,sukumo,susaki,tosa,tosashimizu,toyo,tsuno,umaji,yasuda,yusuhara<kumamoto>amakusa,arao,aso,choyo,gyokuto,kamiamakusa,kikuchi,kumamoto,mashiki,mifune,minamata,minamioguni,nagasu,nishihara,oguni,ozu,sumoto,takamori,uki,uto,yamaga,yamato,yatsushiro<kyoto>ayabe,fukuchiyama,higashiyama,ide,ine,joyo,kameoka,kamo,kita,kizu,kumiyama,kyotamba,kyotanabe,kyotango,maizuru,minami,minamiyamashiro,miyazu,muko,nagaokakyo,nakagyo,nantan,oyamazaki,sakyo,seika,tanabe,uji,ujitawara,wazuka,yamashina,yawata<mie>asahi,inabe,ise,kameyama,kawagoe,kiho,kisosaki,kiwa,komono,kumano,kuwana,matsusaka,meiwa,mihama,minamiise,misugi,miyama,nabari,shima,suzuka,tado,taiki,taki,tamaki,toba,tsu,udono,ureshino,watarai,yokkaichi<miyagi>furukawa,higashimatsushima,ishinomaki,iwanuma,kakuda,kami,kawasaki,marumori,matsushima,minamisanriku,misato,murata,natori,ogawara,ohira,onagawa,osaki,rifu,semine,shibata,shichikashuku,shikama,shiogama,shiroishi,tagajo,taiwa,tome,tomiya,wakuya,watari,yamamoto,zao<miyazaki>aya,ebino,gokase,hyuga,kadogawa,kawaminami,kijo,kitagawa,kitakata,kitaura,kobayashi,kunitomi,kushima,mimata,miyakonojo,miyazaki,morotsuka,nichinan,nishimera,nobeoka,saito,shiiba,shintomi,takaharu,takanabe,takazaki,tsuno<nagano>achi,agematsu,anan,aoki,asahi,azumino,chikuhoku,chikuma,chino,fujimi,hakuba,hara,hiraya,iida,iijima,iiyama,iizuna,ikeda,ikusaka,ina,karuizawa,kawakami,kiso,kisofukushima,kitaaiki,komagane,komoro,matsukawa,matsumoto,miasa,minamiaiki,minamimaki,minamiminowa,minowa,miyada,miyota,mochizuki,nagano,nagawa,nagiso,nakagawa,nakano,nozawaonsen,obuse,ogawa,okaya,omachi,omi,ookuwa,ooshika,otaki,otari,sakae,sakaki,saku,sakuho,shimosuwa,shinanomachi,shiojiri,suwa,suzaka,takagi,takamori,takayama,tateshina,tatsuno,togakushi,togura,tomi,ueda,wada,yamagata,yamanouchi,yasaka,yasuoka<nagasaki>chijiwa,futsu,goto,hasami,hirado,iki,isahaya,kawatana,kuchinotsu,matsuura,nagasaki,obama,omura,oseto,saikai,sasebo,seihi,shimabara,shinkamigoto,togitsu,tsushima,unzen<nara>ando,gose,heguri,higashiyoshino,ikaruga,ikoma,kamikitayama,kanmaki,kashiba,kashihara,katsuragi,kawai,kawakami,kawanishi,koryo,kurotaki,mitsue,miyake,nara,nosegawa,oji,ouda,oyodo,sakurai,sango,shimoichi,shimokitayama,shinjo,soni,takatori,tawaramoto,tenkawa,tenri,uda,yamatokoriyama,yamatotakada,yamazoe,yoshino<niigata>aga,agano,gosen,itoigawa,izumozaki,joetsu,kamo,kariwa,kashiwazaki,minamiuonuma,mitsuke,muika,murakami,myoko,nagaoka,niigata,ojiya,omi,sado,sanjo,seiro,seirou,sekikawa,shibata,tagami,tainai,tochio,tokamachi,tsubame,tsunan,uonuma,yahiko,yoita,yuzawa<oita>beppu,bungoono,bungotakada,hasama,hiji,himeshima,hita,kamitsue,kokonoe,kuju,kunisaki,kusu,oita,saiki,taketa,tsukumi,usa,usuki,yufu<okayama>akaiwa,asakuchi,bizen,hayashima,ibara,kagamino,kasaoka,kibichuo,kumenan,kurashiki,maniwa,misaki,nagi,niimi,nishiawakura,okayama,satosho,setouchi,shinjo,shoo,soja,takahashi,tamano,tsuyama,wake,yakage<okinawa>aguni,ginowan,ginoza,gushikami,haebaru,higashi,hirara,iheya,ishigaki,ishikawa,itoman,izena,kadena,kin,kitadaito,kitanakagusuku,kumejima,kunigami,minamidaito,motobu,nago,naha,nakagusuku,nakijin,nanjo,nishihara,ogimi,okinawa,onna,shimoji,taketomi,tarama,tokashiki,tomigusuku,tonaki,urasoe,uruma,yaese,yomitan,yonabaru,yonaguni,zamami<osaka>abeno,chihayaakasaka,chuo,daito,fujiidera,habikino,hannan,higashiosaka,higashisumiyoshi,higashiyodogawa,hirakata,ibaraki,ikeda,izumi,izumiotsu,izumisano,kadoma,kaizuka,kanan,kashiwara,katano,kawachinagano,kishiwada,kita,kumatori,matsubara,minato,minoh,misaki,moriguchi,neyagawa,nishi,nose,osakasayama,sakai,sayama,sennan,settsu,shijonawate,shimamoto,suita,tadaoka,taishi,tajiri,takaishi,takatsuki,tondabayashi,toyonaka,toyono,yao<saga>ariake,arita,fukudomi,genkai,hamatama,hizen,imari,kamimine,kanzaki,karatsu,kashima,kitagata,kitahata,kiyama,kouhoku,kyuragi,nishiarita,ogi,omachi,ouchi,saga,shiroishi,taku,tara,tosu,yoshinogari<saitama>arakawa,asaka,chichibu,fujimi,fujimino,fukaya,hanno,hanyu,hasuda,hatogaya,hatoyama,hidaka,higashichichibu,higashimatsuyama,honjo,ina,iruma,iwatsuki,kamiizumi,kamikawa,kamisato,kasukabe,kawagoe,kawaguchi,kawajima,kazo,kitamoto,koshigaya,kounosu,kuki,kumagaya,matsubushi,minano,misato,miyashiro,miyoshi,moroyama,nagatoro,namegawa,niiza,ogano,ogawa,ogose,okegawa,omiya,otaki,ranzan,ryokami,saitama,sakado,satte,sayama,shiki,shiraoka,soka,sugito,toda,tokigawa,tokorozawa,tsurugashima,urawa,warabi,yashio,yokoze,yono,yorii,yoshida,yoshikawa,yoshimi<shiga>aisho,gamo,higashiomi,hikone,koka,konan,kosei,koto,kusatsu,maibara,moriyama,nagahama,nishiazai,notogawa,omihachiman,otsu,ritto,ryuoh,takashima,takatsuki,torahime,toyosato,yasu<shimane>akagi,ama,gotsu,hamada,higashiizumo,hikawa,hikimi,izumo,kakinoki,masuda,matsue,misato,nishinoshima,ohda,okinoshima,okuizumo,shimane,tamayu,tsuwano,unnan,yakumo,yasugi,yatsuka<shizuoka>arai,atami,fuji,fujieda,fujikawa,fujinomiya,fukuroi,gotemba,haibara,hamamatsu,higashiizu,ito,iwata,izu,izunokuni,kakegawa,kannami,kawanehon,kawazu,kikugawa,kosai,makinohara,matsuzaki,minamiizu,mishima,morimachi,nishiizu,numazu,omaezaki,shimada,shimizu,shimoda,shizuoka,susono,yaizu,yoshida<tochigi>ashikaga,bato,haga,ichikai,iwafune,kaminokawa,kanuma,karasuyama,kuroiso,mashiko,mibu,moka,motegi,nasu,nasushiobara,nikko,nishikata,nogi,ohira,ohtawara,oyama,sakura,sano,shimotsuke,shioya,takanezawa,tochigi,tsuga,ujiie,utsunomiya,yaita<tokushima>aizumi,anan,ichiba,itano,kainan,komatsushima,matsushige,mima,minami,miyoshi,mugi,nakagawa,naruto,sanagochi,shishikui,tokushima,wajiki<tokyo>adachi,akiruno,akishima,aogashima,arakawa,bunkyo,chiyoda,chofu,chuo,edogawa,fuchu,fussa,hachijo,hachioji,hamura,higashikurume,higashimurayama,higashiyamato,hino,hinode,hinohara,inagi,itabashi,katsushika,kita,kiyose,kodaira,koganei,kokubunji,komae,koto,kouzushima,kunitachi,machida,meguro,minato,mitaka,mizuho,musashimurayama,musashino,nakano,nerima,ogasawara,okutama,ome,oshima,ota,setagaya,shibuya,shinagawa,shinjuku,suginami,sumida,tachikawa,taito,tama,toshima<tottori>chizu,hino,kawahara,koge,kotoura,misasa,nanbu,nichinan,sakaiminato,tottori,wakasa,yazu,yonago<toyama>asahi,fuchu,fukumitsu,funahashi,himi,imizu,inami,johana,kamiichi,kurobe,nakaniikawa,namerikawa,nanto,nyuzen,oyabe,taira,takaoka,tateyama,toga,tonami,toyama,unazuki,uozu,yamada<wakayama>arida,aridagawa,gobo,hashimoto,hidaka,hirogawa,inami,iwade,kainan,kamitonda,katsuragi,kimino,kinokawa,kitayama,koya,koza,kozagawa,kudoyama,kushimoto,mihama,misato,nachikatsuura,shingu,shirahama,taiji,tanabe,wakayama,yuasa,yura<yamagata>asahi,funagata,higashine,iide,kahoku,kaminoyama,kaneyama,kawanishi,mamurogawa,mikawa,murayama,nagai,nakayama,nanyo,nishikawa,obanazawa,oe,oguni,ohkura,oishida,sagae,sakata,sakegawa,shinjo,shirataka,shonai,takahata,tendo,tozawa,tsuruoka,yamagata,yamanobe,yonezawa,yuza<yamaguchi>abu,hagi,hikari,hofu,iwakuni,kudamatsu,mitou,nagato,oshima,shimonoseki,shunan,tabuse,tokuyama,toyota,ube,yuu<yamanashi>chuo,doshi,fuefuki,fujikawa,fujikawaguchiko,fujiyoshida,hayakawa,hokuto,ichikawamisato,kai,kofu,koshu,kosuge,minami-alps,minobu,nakamichi,nanbu,narusawa,nirasaki,nishikatsura,oshino,otsuki,showa,tabayama,tsuru,uenohara,yamanakako,yamanashi<xn--4pvxs,xn--vgu402c,xn--c3s14m,xn--f6qx53a,xn--8pvr4u,xn--uist22h,xn--djrs72d6uy,xn--mkru45i,xn--0trq7p7nn,xn--8ltr62k,xn--2m4a15e,xn--efvn9s,xn--32vp30h,xn--4it797k,xn--1lqs71d,xn--5rtp49c,xn--5js045d,xn--ehqz56n,xn--1lqs03n,xn--qqqt11m,xn--kbrq7o,xn--pssu33l,xn--ntsq17g,xn--uisz3g,xn--6btw5a,xn--1ctwo,xn--6orx2r,xn--rht61e,xn--rht27z,xn--djty4k,xn--nit225k,xn--rht3d,xn--klty5x,xn--kltx9a,xn--kltp7d,xn--uuwu58a,xn--zbx025d,xn--ntso0iqx3a,xn--elqq16h,xn--4it168d,xn--klt787d,xn--rny31h,xn--7t0a264c,xn--5rtq34k,xn--k7yn95e,xn--tor131o,xn--d5qv7z876c,kawasaki>*,!city<kitakyushu>*,!city<kobe>*,!city<nagoya>*,!city<sapporo>*,!city<sendai>*,!city<yokohama>*,!city<<ke>ac,co,go,info,me,mobi,ne,or,sc<kg>org,net,com,edu,gov,mil<kh>*<ki>edu,biz,net,org,gov,info,com<km>org,nom,gov,prd,tm,edu,mil,ass,com,coop,asso,presse,medecin,notaires,pharmaciens,veterinaire,gouv<kn>net,org,edu,gov<kp>com,edu,gov,org,rep,tra<kr>ac,co,es,go,hs,kg,mil,ms,ne,or,pe,re,sc,busan,chungbuk,chungnam,daegu,daejeon,gangwon,gwangju,gyeongbuk,gyeonggi,gyeongnam,incheon,jeju,jeonbuk,jeonnam,seoul,ulsan<kw>com,edu,emb,gov,ind,net,org<ky>com,edu,net,org<kz>org,edu,net,gov,mil,com<la>int,net,info,edu,gov,per,com,org<lb>com,edu,gov,net,org<lc>com,net,co,org,edu,gov<li,lk>gov,sch,net,int,com,org,edu,ngo,soc,web,ltd,assn,grp,hotel,ac<lr>com,edu,gov,org,net<ls>ac,biz,co,edu,gov,info,net,org,sc<lt>gov<lu,lv>com,edu,gov,org,mil,id,net,asn,conf<ly>com,net,gov,plc,edu,sch,med,org,id<ma>co,net,gov,org,ac,press<mc>tm,asso<md,me>co,net,org,edu,ac,gov,its,priv<mg>org,nom,gov,prd,tm,edu,mil,com,co<mh,mil,mk>com,org,net,edu,gov,inf,name<ml>com,edu,gouv,gov,net,org,presse<mm>*<mn>gov,edu,org<mo>com,net,org,edu,gov<mobi,mp,mq,mr>gov<ms>com,edu,gov,net,org<mt>com,edu,net,org<mu>com,net,org,gov,ac,co,or<museum>academy,agriculture,air,airguard,alabama,alaska,amber,ambulance,american,americana,americanantiques,americanart,amsterdam,and,annefrank,anthro,anthropology,antiques,aquarium,arboretum,archaeological,archaeology,architecture,art,artanddesign,artcenter,artdeco,arteducation,artgallery,arts,artsandcrafts,asmatart,assassination,assisi,association,astronomy,atlanta,austin,australia,automotive,aviation,axis,badajoz,baghdad,bahn,bale,baltimore,barcelona,baseball,basel,baths,bauern,beauxarts,beeldengeluid,bellevue,bergbau,berkeley,berlin,bern,bible,bilbao,bill,birdart,birthplace,bonn,boston,botanical,botanicalgarden,botanicgarden,botany,brandywinevalley,brasil,bristol,british,britishcolumbia,broadcast,brunel,brussel,brussels,bruxelles,building,burghof,bus,bushey,cadaques,california,cambridge,can,canada,capebreton,carrier,cartoonart,casadelamoneda,castle,castres,celtic,center,chattanooga,cheltenham,chesapeakebay,chicago,children,childrens,childrensgarden,chiropractic,chocolate,christiansburg,cincinnati,cinema,circus,civilisation,civilization,civilwar,clinton,clock,coal,coastaldefence,cody,coldwar,collection,colonialwilliamsburg,coloradoplateau,columbia,columbus,communication,communications,community,computer,computerhistory,xn--comunicaes-v6a2o,contemporary,contemporaryart,convent,copenhagen,corporation,xn--correios-e-telecomunicaes-ghc29a,corvette,costume,countryestate,county,crafts,cranbrook,creation,cultural,culturalcenter,culture,cyber,cymru,dali,dallas,database,ddr,decorativearts,delaware,delmenhorst,denmark,depot,design,detroit,dinosaur,discovery,dolls,donostia,durham,eastafrica,eastcoast,education,educational,egyptian,eisenbahn,elburg,elvendrell,embroidery,encyclopedic,england,entomology,environment,environmentalconservation,epilepsy,essex,estate,ethnology,exeter,exhibition,family,farm,farmequipment,farmers,farmstead,field,figueres,filatelia,film,fineart,finearts,finland,flanders,florida,force,fortmissoula,fortworth,foundation,francaise,frankfurt,franziskaner,freemasonry,freiburg,fribourg,frog,fundacio,furniture,gallery,garden,gateway,geelvinck,gemological,geology,georgia,giessen,glas,glass,gorge,grandrapids,graz,guernsey,halloffame,hamburg,handson,harvestcelebration,hawaii,health,heimatunduhren,hellas,helsinki,hembygdsforbund,heritage,histoire,historical,historicalsociety,historichouses,historisch,historisches,history,historyofscience,horology,house,humanities,illustration,imageandsound,indian,indiana,indianapolis,indianmarket,intelligence,interactive,iraq,iron,isleofman,jamison,jefferson,jerusalem,jewelry,jewish,jewishart,jfk,journalism,judaica,judygarland,juedisches,juif,karate,karikatur,kids,koebenhavn,koeln,kunst,kunstsammlung,kunstunddesign,labor,labour,lajolla,lancashire,landes,lans,xn--lns-qla,larsson,lewismiller,lincoln,linz,living,livinghistory,localhistory,london,losangeles,louvre,loyalist,lucerne,luxembourg,luzern,mad,madrid,mallorca,manchester,mansion,mansions,manx,marburg,maritime,maritimo,maryland,marylhurst,media,medical,medizinhistorisches,meeres,memorial,mesaverde,michigan,midatlantic,military,mill,miners,mining,minnesota,missile,missoula,modern,moma,money,monmouth,monticello,montreal,moscow,motorcycle,muenchen,muenster,mulhouse,muncie,museet,museumcenter,museumvereniging,music,national,nationalfirearms,nationalheritage,nativeamerican,naturalhistory,naturalhistorymuseum,naturalsciences,nature,naturhistorisches,natuurwetenschappen,naumburg,naval,nebraska,neues,newhampshire,newjersey,newmexico,newport,newspaper,newyork,niepce,norfolk,north,nrw,nyc,nyny,oceanographic,oceanographique,omaha,online,ontario,openair,oregon,oregontrail,otago,oxford,pacific,paderborn,palace,paleo,palmsprings,panama,paris,pasadena,pharmacy,philadelphia,philadelphiaarea,philately,phoenix,photography,pilots,pittsburgh,planetarium,plantation,plants,plaza,portal,portland,portlligat,posts-and-telecommunications,preservation,presidio,press,project,public,pubol,quebec,railroad,railway,research,resistance,riodejaneiro,rochester,rockart,roma,russia,saintlouis,salem,salvadordali,salzburg,sandiego,sanfrancisco,santabarbara,santacruz,santafe,saskatchewan,satx,savannahga,schlesisches,schoenbrunn,schokoladen,school,schweiz,science,scienceandhistory,scienceandindustry,sciencecenter,sciencecenters,science-fiction,sciencehistory,sciences,sciencesnaturelles,scotland,seaport,settlement,settlers,shell,sherbrooke,sibenik,silk,ski,skole,society,sologne,soundandvision,southcarolina,southwest,space,spy,square,stadt,stalbans,starnberg,state,stateofdelaware,station,steam,steiermark,stjohn,stockholm,stpetersburg,stuttgart,suisse,surgeonshall,surrey,svizzera,sweden,sydney,tank,tcm,technology,telekommunikation,television,texas,textile,theater,time,timekeeping,topology,torino,touch,town,transport,tree,trolley,trust,trustee,uhren,ulm,undersea,university,usa,usantiques,usarts,uscountryestate,usculture,usdecorativearts,usgarden,ushistory,ushuaia,uslivinghistory,utah,uvic,valley,vantaa,versailles,viking,village,virginia,virtual,virtuel,vlaanderen,volkenkunde,wales,wallonie,war,washingtondc,watchandclock,watch-and-clock,western,westfalen,whaling,wildlife,williamsburg,windmill,workshop,york,yorkshire,yosemite,youth,zoological,zoology,xn--9dbhblg6di,xn--h1aegh<mv>aero,biz,com,coop,edu,gov,info,int,mil,museum,name,net,org,pro<mw>ac,biz,co,com,coop,edu,gov,int,museum,net,org<mx>com,org,gob,edu,net<my>biz,com,edu,gov,mil,name,net,org<mz>ac,adv,co,edu,gov,mil,net,org<na>info,pro,name,school,or,dr,us,mx,ca,in,cc,tv,ws,mobi,co,com,org<name,nc>asso,nom<ne,net,nf>com,net,per,rec,web,arts,firm,info,other,store<ng>com,edu,gov,i,mil,mobi,name,net,org,sch<ni>ac,biz,co,com,edu,gob,in,info,int,mil,net,nom,org,web<nl,no>fhs,vgs,fylkesbibl,folkebibl,museum,idrett,priv,mil,stat,dep,kommune,herad,aa>gs<ah>gs<bu>gs<fm>gs<hl>gs<hm>gs<jan-mayen>gs<mr>gs<nl>gs<nt>gs<of>gs<ol>gs<oslo>gs<rl>gs<sf>gs<st>gs<svalbard>gs<tm>gs<tr>gs<va>gs<vf>gs<akrehamn,xn--krehamn-dxa,algard,xn--lgrd-poac,arna,brumunddal,bryne,bronnoysund,xn--brnnysund-m8ac,drobak,xn--drbak-wua,egersund,fetsund,floro,xn--flor-jra,fredrikstad,hokksund,honefoss,xn--hnefoss-q1a,jessheim,jorpeland,xn--jrpeland-54a,kirkenes,kopervik,krokstadelva,langevag,xn--langevg-jxa,leirvik,mjondalen,xn--mjndalen-64a,mo-i-rana,mosjoen,xn--mosjen-eya,nesoddtangen,orkanger,osoyro,xn--osyro-wua,raholt,xn--rholt-mra,sandnessjoen,xn--sandnessjen-ogb,skedsmokorset,slattum,spjelkavik,stathelle,stavern,stjordalshalsen,xn--stjrdalshalsen-sqb,tananger,tranby,vossevangen,afjord,xn--fjord-lra,agdenes,al,xn--l-1fa,alesund,xn--lesund-hua,alstahaug,alta,xn--lt-liac,alaheadju,xn--laheadju-7ya,alvdal,amli,xn--mli-tla,amot,xn--mot-tla,andebu,andoy,xn--andy-ira,andasuolo,ardal,xn--rdal-poa,aremark,arendal,xn--s-1fa,aseral,xn--seral-lra,asker,askim,askvoll,askoy,xn--asky-ira,asnes,xn--snes-poa,audnedaln,aukra,aure,aurland,aurskog-holand,xn--aurskog-hland-jnb,austevoll,austrheim,averoy,xn--avery-yua,balestrand,ballangen,balat,xn--blt-elab,balsfjord,bahccavuotna,xn--bhccavuotna-k7a,bamble,bardu,beardu,beiarn,bajddar,xn--bjddar-pta,baidar,xn--bidr-5nac,berg,bergen,berlevag,xn--berlevg-jxa,bearalvahki,xn--bearalvhki-y4a,bindal,birkenes,bjarkoy,xn--bjarky-fya,bjerkreim,bjugn,bodo,xn--bod-2na,badaddja,xn--bdddj-mrabd,budejju,bokn,bremanger,bronnoy,xn--brnny-wuac,bygland,bykle,barum,xn--brum-voa,telemark>bo,xn--b-5ga<nordland>bo,xn--b-5ga,heroy,xn--hery-ira<bievat,xn--bievt-0qa,bomlo,xn--bmlo-gra,batsfjord,xn--btsfjord-9za,bahcavuotna,xn--bhcavuotna-s4a,dovre,drammen,drangedal,dyroy,xn--dyry-ira,donna,xn--dnna-gra,eid,eidfjord,eidsberg,eidskog,eidsvoll,eigersund,elverum,enebakk,engerdal,etne,etnedal,evenes,evenassi,xn--eveni-0qa01ga,evje-og-hornnes,farsund,fauske,fuossko,fuoisku,fedje,fet,finnoy,xn--finny-yua,fitjar,fjaler,fjell,flakstad,flatanger,flekkefjord,flesberg,flora,fla,xn--fl-zia,folldal,forsand,fosnes,frei,frogn,froland,frosta,frana,xn--frna-woa,froya,xn--frya-hra,fusa,fyresdal,forde,xn--frde-gra,gamvik,gangaviika,xn--ggaviika-8ya47h,gaular,gausdal,gildeskal,xn--gildeskl-g0a,giske,gjemnes,gjerdrum,gjerstad,gjesdal,gjovik,xn--gjvik-wua,gloppen,gol,gran,grane,granvin,gratangen,grimstad,grong,kraanghke,xn--kranghke-b0a,grue,gulen,hadsel,halden,halsa,hamar,hamaroy,habmer,xn--hbmer-xqa,hapmir,xn--hpmir-xqa,hammerfest,hammarfeasta,xn--hmmrfeasta-s4ac,haram,hareid,harstad,hasvik,aknoluokta,xn--koluokta-7ya57h,hattfjelldal,aarborte,haugesund,hemne,hemnes,hemsedal,more-og-romsdal>heroy,sande<xn--mre-og-romsdal-qqb>xn--hery-ira,sande<hitra,hjartdal,hjelmeland,hobol,xn--hobl-ira,hof,hol,hole,holmestrand,holtalen,xn--holtlen-hxa,hornindal,horten,hurdal,hurum,hvaler,hyllestad,hagebostad,xn--hgebostad-g3a,hoyanger,xn--hyanger-q1a,hoylandet,xn--hylandet-54a,ha,xn--h-2fa,ibestad,inderoy,xn--indery-fya,iveland,jevnaker,jondal,jolster,xn--jlster-bya,karasjok,karasjohka,xn--krjohka-hwab49j,karlsoy,galsa,xn--gls-elac,karmoy,xn--karmy-yua,kautokeino,guovdageaidnu,klepp,klabu,xn--klbu-woa,kongsberg,kongsvinger,kragero,xn--krager-gya,kristiansand,kristiansund,krodsherad,xn--krdsherad-m8a,kvalsund,rahkkeravju,xn--rhkkervju-01af,kvam,kvinesdal,kvinnherad,kviteseid,kvitsoy,xn--kvitsy-fya,kvafjord,xn--kvfjord-nxa,giehtavuoatna,kvanangen,xn--kvnangen-k0a,navuotna,xn--nvuotna-hwa,kafjord,xn--kfjord-iua,gaivuotna,xn--givuotna-8ya,larvik,lavangen,lavagis,loabat,xn--loabt-0qa,lebesby,davvesiida,leikanger,leirfjord,leka,leksvik,lenvik,leangaviika,xn--leagaviika-52b,lesja,levanger,lier,lierne,lillehammer,lillesand,lindesnes,lindas,xn--linds-pra,lom,loppa,lahppi,xn--lhppi-xqa,lund,lunner,luroy,xn--lury-ira,luster,lyngdal,lyngen,ivgu,lardal,lerdal,xn--lrdal-sra,lodingen,xn--ldingen-q1a,lorenskog,xn--lrenskog-54a,loten,xn--lten-gra,malvik,masoy,xn--msy-ula0h,muosat,xn--muost-0qa,mandal,marker,marnardal,masfjorden,meland,meldal,melhus,meloy,xn--mely-ira,meraker,xn--merker-kua,moareke,xn--moreke-jua,midsund,midtre-gauldal,modalen,modum,molde,moskenes,moss,mosvik,malselv,xn--mlselv-iua,malatvuopmi,xn--mlatvuopmi-s4a,namdalseid,aejrie,namsos,namsskogan,naamesjevuemie,xn--nmesjevuemie-tcba,laakesvuemie,nannestad,narvik,narviika,naustdal,nedre-eiker,akershus>nes<buskerud>nes<nesna,nesodden,nesseby,unjarga,xn--unjrga-rta,nesset,nissedal,nittedal,nord-aurdal,nord-fron,nord-odal,norddal,nordkapp,davvenjarga,xn--davvenjrga-y4a,nordre-land,nordreisa,raisa,xn--risa-5na,nore-og-uvdal,notodden,naroy,xn--nry-yla5g,notteroy,xn--nttery-byae,odda,oksnes,xn--ksnes-uua,oppdal,oppegard,xn--oppegrd-ixa,orkdal,orland,xn--rland-uua,orskog,xn--rskog-uua,orsta,xn--rsta-fra,hedmark>os,valer,xn--vler-qoa<hordaland>os<osen,osteroy,xn--ostery-fya,ostre-toten,xn--stre-toten-zcb,overhalla,ovre-eiker,xn--vre-eiker-k8a,oyer,xn--yer-zna,oygarden,xn--ygarden-p1a,oystre-slidre,xn--ystre-slidre-ujb,porsanger,porsangu,xn--porsgu-sta26f,porsgrunn,radoy,xn--rady-ira,rakkestad,rana,ruovat,randaberg,rauma,rendalen,rennebu,rennesoy,xn--rennesy-v1a,rindal,ringebu,ringerike,ringsaker,rissa,risor,xn--risr-ira,roan,rollag,rygge,ralingen,xn--rlingen-mxa,rodoy,xn--rdy-0nab,romskog,xn--rmskog-bya,roros,xn--rros-gra,rost,xn--rst-0na,royken,xn--ryken-vua,royrvik,xn--ryrvik-bya,rade,xn--rde-ula,salangen,siellak,saltdal,salat,xn--slt-elab,xn--slat-5na,samnanger,vestfold>sande<sandefjord,sandnes,sandoy,xn--sandy-yua,sarpsborg,sauda,sauherad,sel,selbu,selje,seljord,sigdal,siljan,sirdal,skaun,skedsmo,ski,skien,skiptvet,skjervoy,xn--skjervy-v1a,skierva,xn--skierv-uta,skjak,xn--skjk-soa,skodje,skanland,xn--sknland-fxa,skanit,xn--sknit-yqa,smola,xn--smla-hra,snillfjord,snasa,xn--snsa-roa,snoasa,snaase,xn--snase-nra,sogndal,sokndal,sola,solund,songdalen,sortland,spydeberg,stange,stavanger,steigen,steinkjer,stjordal,xn--stjrdal-s1a,stokke,stor-elvdal,stord,stordal,storfjord,omasvuotna,strand,stranda,stryn,sula,suldal,sund,sunndal,surnadal,sveio,svelvik,sykkylven,sogne,xn--sgne-gra,somna,xn--smna-gra,sondre-land,xn--sndre-land-0cb,sor-aurdal,xn--sr-aurdal-l8a,sor-fron,xn--sr-fron-q1a,sor-odal,xn--sr-odal-q1a,sor-varanger,xn--sr-varanger-ggb,matta-varjjat,xn--mtta-vrjjat-k7af,sorfold,xn--srfold-bya,sorreisa,xn--srreisa-q1a,sorum,xn--srum-gra,tana,deatnu,time,tingvoll,tinn,tjeldsund,dielddanuorri,tjome,xn--tjme-hra,tokke,tolga,torsken,tranoy,xn--trany-yua,tromso,xn--troms-zua,tromsa,romsa,trondheim,troandin,trysil,trana,xn--trna-woa,trogstad,xn--trgstad-r1a,tvedestrand,tydal,tynset,tysfjord,divtasvuodna,divttasvuotna,tysnes,tysvar,xn--tysvr-vra,tonsberg,xn--tnsberg-q1a,ullensaker,ullensvang,ulvik,utsira,vadso,xn--vads-jra,cahcesuolo,xn--hcesuolo-7ya35b,vaksdal,valle,vang,vanylven,vardo,xn--vard-jra,varggat,xn--vrggt-xqad,vefsn,vaapste,vega,vegarshei,xn--vegrshei-c0a,vennesla,verdal,verran,vestby,vestnes,vestre-slidre,vestre-toten,vestvagoy,xn--vestvgy-ixa6o,vevelstad,vik,vikna,vindafjord,volda,voss,varoy,xn--vry-yla5g,vagan,xn--vgan-qoa,voagat,vagsoy,xn--vgsy-qoa0j,vaga,xn--vg-yiab,ostfold>valer<xn--stfold-9xa>xn--vler-qoa<<np>*<nr>biz,info,gov,edu,org,net,com<nu,nz>ac,co,cri,geek,gen,govt,health,iwi,kiwi,maori,mil,xn--mori-qsa,net,org,parliament,school<om>co,com,edu,gov,med,museum,net,org,pro<onion,org,pa>ac,gob,com,org,sld,edu,net,ing,abo,med,nom<pe>edu,gob,nom,mil,org,com,net<pf>com,org,edu<pg>*<ph>com,net,org,gov,edu,ngo,mil,i<pk>com,net,edu,org,fam,biz,web,gov,gob,gok,gon,gop,gos,info<pl>com,net,org,aid,agro,atm,auto,biz,edu,gmina,gsm,info,mail,miasta,media,mil,nieruchomosci,nom,pc,powiat,priv,realestate,rel,sex,shop,sklep,sos,szkola,targi,tm,tourism,travel,turystyka,gov>ap,ic,is,us,kmpsp,kppsp,kwpsp,psp,wskr,kwp,mw,ug,um,umig,ugim,upow,uw,starostwo,pa,po,psse,pup,rzgw,sa,so,sr,wsa,sko,uzs,wiih,winb,pinb,wios,witd,wzmiuw,piw,wiw,griw,wif,oum,sdn,zp,uppo,mup,wuoz,konsulat,oirm<augustow,babia-gora,bedzin,beskidy,bialowieza,bialystok,bielawa,bieszczady,boleslawiec,bydgoszcz,bytom,cieszyn,czeladz,czest,dlugoleka,elblag,elk,glogow,gniezno,gorlice,grajewo,ilawa,jaworzno,jelenia-gora,jgora,kalisz,kazimierz-dolny,karpacz,kartuzy,kaszuby,katowice,kepno,ketrzyn,klodzko,kobierzyce,kolobrzeg,konin,konskowola,kutno,lapy,lebork,legnica,lezajsk,limanowa,lomza,lowicz,lubin,lukow,malbork,malopolska,mazowsze,mazury,mielec,mielno,mragowo,naklo,nowaruda,nysa,olawa,olecko,olkusz,olsztyn,opoczno,opole,ostroda,ostroleka,ostrowiec,ostrowwlkp,pila,pisz,podhale,podlasie,polkowice,pomorze,pomorskie,prochowice,pruszkow,przeworsk,pulawy,radom,rawa-maz,rybnik,rzeszow,sanok,sejny,slask,slupsk,sosnowiec,stalowa-wola,skoczow,starachowice,stargard,suwalki,swidnica,swiebodzin,swinoujscie,szczecin,szczytno,tarnobrzeg,tgory,turek,tychy,ustka,walbrzych,warmia,warszawa,waw,wegrow,wielun,wlocl,wloclawek,wodzislaw,wolomin,wroclaw,zachpomor,zagan,zarow,zgora,zgorzelec<pm,pn>gov,co,org,edu,net<post,pr>com,net,org,gov,edu,isla,pro,biz,info,name,est,prof,ac<pro>aaa,aca,acct,avocat,bar,cpa,eng,jur,law,med,recht<ps>edu,gov,sec,plo,com,org,net<pt>net,gov,org,edu,int,publ,com,nome<pw>co,ne,or,ed,go,belau<py>com,coop,edu,gov,mil,net,org<qa>com,edu,gov,mil,name,net,org,sch<re>asso,com,nom<ro>arts,com,firm,info,nom,nt,org,rec,store,tm,www<rs>ac,co,edu,gov,in,org<ru,rw>ac,co,coop,gov,mil,net,org<sa>com,net,org,gov,med,pub,edu,sch<sb>com,edu,gov,net,org<sc>com,gov,net,org,edu<sd>com,net,org,edu,med,tv,gov,info<se>a,ac,b,bd,brand,c,d,e,f,fh,fhsk,fhv,g,h,i,k,komforb,kommunalforbund,komvux,l,lanbib,m,n,naturbruksgymn,o,org,p,parti,pp,press,r,s,t,tm,u,w,x,y,z<sg>com,net,org,gov,edu,per<sh>com,net,gov,org,mil<si,sj,sk,sl>com,net,edu,gov,org<sm,sn>art,com,edu,gouv,org,perso,univ<so>com,edu,gov,me,net,org<sr,ss>biz,com,edu,gov,me,net,org,sch<st>co,com,consulado,edu,embaixada,mil,net,org,principe,saotome,store<su,sv>com,edu,gob,org,red<sx>gov<sy>edu,gov,net,mil,com,org<sz>co,ac,org<tc,td,tel,tf,tg,th>ac,co,go,in,mi,net,or<tj>ac,biz,co,com,edu,go,gov,int,mil,name,net,nic,org,test,web<tk,tl>gov<tm>com,co,org,net,nom,gov,mil,edu<tn>com,ens,fin,gov,ind,info,intl,mincom,nat,net,org,perso,tourism<to>com,gov,net,org,edu,mil<tr>av,bbs,bel,biz,com,dr,edu,gen,gov,info,mil,k12,kep,name,net,org,pol,tel,tsk,tv,web,nc>gov<<tt>co,com,org,net,biz,info,pro,int,coop,jobs,mobi,travel,museum,aero,name,gov,edu<tv,tw>edu,gov,mil,com,net,org,idv,game,ebiz,club,xn--zf0ao64a,xn--uc0atv,xn--czrw28b<tz>ac,co,go,hotel,info,me,mil,mobi,ne,or,sc,tv<ua>com,edu,gov,in,net,org,cherkassy,cherkasy,chernigov,chernihiv,chernivtsi,chernovtsy,ck,cn,cr,crimea,cv,dn,dnepropetrovsk,dnipropetrovsk,donetsk,dp,if,ivano-frankivsk,kh,kharkiv,kharkov,kherson,khmelnitskiy,khmelnytskyi,kiev,kirovograd,km,kr,krym,ks,kv,kyiv,lg,lt,lugansk,lutsk,lv,lviv,mk,mykolaiv,nikolaev,od,odesa,odessa,pl,poltava,rivne,rovno,rv,sb,sebastopol,sevastopol,sm,sumy,te,ternopil,uz,uzhgorod,vinnica,vinnytsia,vn,volyn,yalta,zaporizhzhe,zaporizhzhia,zhitomir,zhytomyr,zp,zt<ug>co,or,ac,sc,go,ne,com,org<uk>ac,co,gov,ltd,me,net,nhs,org,plc,police,sch>*<<us>dni,fed,isa,kids,nsn,ak>k12,cc,lib<al>k12,cc,lib<ar>k12,cc,lib<as>k12,cc,lib<az>k12,cc,lib<ca>k12,cc,lib<co>k12,cc,lib<ct>k12,cc,lib<dc>k12,cc,lib<de>k12,cc<fl>k12,cc,lib<ga>k12,cc,lib<gu>k12,cc,lib<hi>cc,lib<ia>k12,cc,lib<id>k12,cc,lib<il>k12,cc,lib<in>k12,cc,lib<ks>k12,cc,lib<ky>k12,cc,lib<la>k12,cc,lib<ma>k12>pvt,chtr,paroch<cc,lib<md>k12,cc,lib<me>k12,cc,lib<mi>k12,cc,lib,ann-arbor,cog,dst,eaton,gen,mus,tec,washtenaw<mn>k12,cc,lib<mo>k12,cc,lib<ms>k12,cc,lib<mt>k12,cc,lib<nc>k12,cc,lib<nd>cc,lib<ne>k12,cc,lib<nh>k12,cc,lib<nj>k12,cc,lib<nm>k12,cc,lib<nv>k12,cc,lib<ny>k12,cc,lib<oh>k12,cc,lib<ok>k12,cc,lib<or>k12,cc,lib<pa>k12,cc,lib<pr>k12,cc,lib<ri>cc,lib<sc>k12,cc,lib<sd>cc,lib<tn>k12,cc,lib<tx>k12,cc,lib<ut>k12,cc,lib<vi>k12,cc,lib<vt>k12,cc,lib<va>k12,cc,lib<wa>k12,cc,lib<wi>k12,cc,lib<wv>cc<wy>k12,cc,lib<<uy>com,edu,gub,mil,net,org<uz>co,com,net,org<va,vc>com,net,org,gov,mil,edu<ve>arts,bib,co,com,e12,edu,firm,gob,gov,info,int,mil,net,nom,org,rar,rec,store,tec,web<vg,vi>co,com,k12,net,org<vn>com,net,org,edu,gov,int,ac,biz,info,name,pro,health<vu>com,edu,net,org<wf,ws>com,net,org,gov,edu<yt,xn--mgbaam7a8h,xn--y9a3aq,xn--54b7fta0cc,xn--90ae,xn--mgbcpq6gpa1a,xn--90ais,xn--fiqs8s,xn--fiqz9s,xn--lgbbat1ad8j,xn--wgbh1c,xn--e1a4c,xn--qxa6a,xn--mgbah1a3hjkrd,xn--node,xn--qxam,xn--j6w193g>xn--55qx5d,xn--wcvs22d,xn--mxtq1m,xn--gmqw5a,xn--od0alg,xn--uc0atv<xn--2scrj9c,xn--3hcrj9c,xn--45br5cyl,xn--h2breg3eve,xn--h2brj9c8c,xn--mgbgu82a,xn--rvc1e0am3e,xn--h2brj9c,xn--mgbbh1a,xn--mgbbh1a71e,xn--fpcrj9c3d,xn--gecrj9c,xn--s9brj9c,xn--45brj9c,xn--xkc2dl3a5ee0h,xn--mgba3a4f16a,xn--mgba3a4fra,xn--mgbtx2b,xn--mgbayh7gpa,xn--3e0b707e,xn--80ao21a,xn--q7ce6a,xn--fzc2c9e2c,xn--xkc2al3hye2a,xn--mgbc0a9azcg,xn--d1alf,xn--l1acc,xn--mix891f,xn--mix082f,xn--mgbx4cd0ab,xn--mgb9awbf,xn--mgbai9azgqp6j,xn--mgbai9a5eva00b,xn--ygbi2ammx,xn--90a3ac>xn--o1ac,xn--c1avg,xn--90azh,xn--d1at,xn--o1ach,xn--80au<xn--p1ai,xn--wgbl6a,xn--mgberp4a5d4ar,xn--mgberp4a5d4a87g,xn--mgbqly7c0a67fbc,xn--mgbqly7cvafr,xn--mgbpl2fh,xn--yfro4i67o,xn--clchc0ea0b2g2a9gcd,xn--ogbpf8fl,xn--mgbtf8fl,xn--o3cw4h>xn--12c1fe0br,xn--12co0c3b4eva,xn--h3cuzk1di,xn--o3cyx2a,xn--m3ch0j3a,xn--12cfi8ixb8l<xn--pgbs0dh,xn--kpry57d,xn--kprw13d,xn--nnx388a,xn--j1amh,xn--mgb2ddes,xxx,ye>com,edu,gov,net,mil,org<za>ac,agric,alt,co,edu,gov,grondar,law,mil,net,ngo,nic,nis,nom,org,school,tm,web<zm>ac,biz,co,com,edu,gov,info,mil,net,org,sch<zw>ac,co,gov,mil,org<aaa,aarp,abarth,abb,abbott,abbvie,abc,able,abogado,abudhabi,academy,accenture,accountant,accountants,aco,actor,adac,ads,adult,aeg,aetna,afl,africa,agakhan,agency,aig,airbus,airforce,airtel,akdn,alfaromeo,alibaba,alipay,allfinanz,allstate,ally,alsace,alstom,amazon,americanexpress,americanfamily,amex,amfam,amica,amsterdam,analytics,android,anquan,anz,aol,apartments,app,apple,aquarelle,arab,aramco,archi,army,art,arte,asda,associates,athleta,attorney,auction,audi,audible,audio,auspost,author,auto,autos,avianca,aws,axa,azure,baby,baidu,banamex,bananarepublic,band,bank,bar,barcelona,barclaycard,barclays,barefoot,bargains,baseball,basketball,bauhaus,bayern,bbc,bbt,bbva,bcg,bcn,beats,beauty,beer,bentley,berlin,best,bestbuy,bet,bharti,bible,bid,bike,bing,bingo,bio,black,blackfriday,blockbuster,blog,bloomberg,blue,bms,bmw,bnpparibas,boats,boehringer,bofa,bom,bond,boo,book,booking,bosch,bostik,boston,bot,boutique,box,bradesco,bridgestone,broadway,broker,brother,brussels,budapest,bugatti,build,builders,business,buy,buzz,bzh,cab,cafe,cal,call,calvinklein,cam,camera,camp,cancerresearch,canon,capetown,capital,capitalone,car,caravan,cards,care,career,careers,cars,casa,case,cash,casino,catering,catholic,cba,cbn,cbre,cbs,center,ceo,cern,cfa,cfd,chanel,channel,charity,chase,chat,cheap,chintai,christmas,chrome,church,cipriani,circle,cisco,citadel,citi,citic,city,cityeats,claims,cleaning,click,clinic,clinique,clothing,cloud,club,clubmed,coach,codes,coffee,college,cologne,comcast,commbank,community,company,compare,computer,comsec,condos,construction,consulting,contact,contractors,cooking,cookingchannel,cool,corsica,country,coupon,coupons,courses,cpa,credit,creditcard,creditunion,cricket,crown,crs,cruise,cruises,csc,cuisinella,cymru,cyou,dabur,dad,dance,data,date,dating,datsun,day,dclk,dds,deal,dealer,deals,degree,delivery,dell,deloitte,delta,democrat,dental,dentist,desi,design,dev,dhl,diamonds,diet,digital,direct,directory,discount,discover,dish,diy,dnp,docs,doctor,dog,domains,dot,download,drive,dtv,dubai,dunlop,dupont,durban,dvag,dvr,earth,eat,eco,edeka,education,email,emerck,energy,engineer,engineering,enterprises,epson,equipment,ericsson,erni,esq,estate,etisalat,eurovision,eus,events,exchange,expert,exposed,express,extraspace,fage,fail,fairwinds,faith,family,fan,fans,farm,farmers,fashion,fast,fedex,feedback,ferrari,ferrero,fiat,fidelity,fido,film,final,finance,financial,fire,firestone,firmdale,fish,fishing,fit,fitness,flickr,flights,flir,florist,flowers,fly,foo,food,foodnetwork,football,ford,forex,forsale,forum,foundation,fox,free,fresenius,frl,frogans,frontdoor,frontier,ftr,fujitsu,fun,fund,furniture,futbol,fyi,gal,gallery,gallo,gallup,game,games,gap,garden,gay,gbiz,gdn,gea,gent,genting,george,ggee,gift,gifts,gives,giving,glass,gle,global,globo,gmail,gmbh,gmo,gmx,godaddy,gold,goldpoint,golf,goo,goodyear,goog,google,gop,got,grainger,graphics,gratis,green,gripe,grocery,group,guardian,gucci,guge,guide,guitars,guru,hair,hamburg,hangout,haus,hbo,hdfc,hdfcbank,health,healthcare,help,helsinki,here,hermes,hgtv,hiphop,hisamitsu,hitachi,hiv,hkt,hockey,holdings,holiday,homedepot,homegoods,homes,homesense,honda,horse,hospital,host,hosting,hot,hoteles,hotels,hotmail,house,how,hsbc,hughes,hyatt,hyundai,ibm,icbc,ice,icu,ieee,ifm,ikano,imamat,imdb,immo,immobilien,inc,industries,infiniti,ing,ink,institute,insurance,insure,international,intuit,investments,ipiranga,irish,ismaili,ist,istanbul,itau,itv,jaguar,java,jcb,jeep,jetzt,jewelry,jio,jll,jmp,jnj,joburg,jot,joy,jpmorgan,jprs,juegos,juniper,kaufen,kddi,kerryhotels,kerrylogistics,kerryproperties,kfh,kia,kids,kim,kinder,kindle,kitchen,kiwi,koeln,komatsu,kosher,kpmg,kpn,krd,kred,kuokgroup,kyoto,lacaixa,lamborghini,lamer,lancaster,lancia,land,landrover,lanxess,lasalle,lat,latino,latrobe,law,lawyer,lds,lease,leclerc,lefrak,legal,lego,lexus,lgbt,lidl,life,lifeinsurance,lifestyle,lighting,like,lilly,limited,limo,lincoln,linde,link,lipsy,live,living,llc,llp,loan,loans,locker,locus,loft,lol,london,lotte,lotto,love,lpl,lplfinancial,ltd,ltda,lundbeck,luxe,luxury,macys,madrid,maif,maison,makeup,man,management,mango,map,market,marketing,markets,marriott,marshalls,maserati,mattel,mba,mckinsey,med,media,meet,melbourne,meme,memorial,men,menu,merckmsd,miami,microsoft,mini,mint,mit,mitsubishi,mlb,mls,mma,mobile,moda,moe,moi,mom,monash,money,monster,mormon,mortgage,moscow,moto,motorcycles,mov,movie,msd,mtn,mtr,music,mutual,nab,nagoya,natura,navy,nba,nec,netbank,netflix,network,neustar,new,news,next,nextdirect,nexus,nfl,ngo,nhk,nico,nike,nikon,ninja,nissan,nissay,nokia,northwesternmutual,norton,now,nowruz,nowtv,nra,nrw,ntt,nyc,obi,observer,office,okinawa,olayan,olayangroup,oldnavy,ollo,omega,one,ong,onl,online,ooo,open,oracle,orange,organic,origins,osaka,otsuka,ott,ovh,page,panasonic,paris,pars,partners,parts,party,passagens,pay,pccw,pet,pfizer,pharmacy,phd,philips,phone,photo,photography,photos,physio,pics,pictet,pictures,pid,pin,ping,pink,pioneer,pizza,place,play,playstation,plumbing,plus,pnc,pohl,poker,politie,porn,pramerica,praxi,press,prime,prod,productions,prof,progressive,promo,properties,property,protection,pru,prudential,pub,pwc,qpon,quebec,quest,racing,radio,read,realestate,realtor,realty,recipes,red,redstone,redumbrella,rehab,reise,reisen,reit,reliance,ren,rent,rentals,repair,report,republican,rest,restaurant,review,reviews,rexroth,rich,richardli,ricoh,ril,rio,rip,rocher,rocks,rodeo,rogers,room,rsvp,rugby,ruhr,run,rwe,ryukyu,saarland,safe,safety,sakura,sale,salon,samsclub,samsung,sandvik,sandvikcoromant,sanofi,sap,sarl,sas,save,saxo,sbi,sbs,sca,scb,schaeffler,schmidt,scholarships,school,schule,schwarz,science,scot,search,seat,secure,security,seek,select,sener,services,ses,seven,sew,sex,sexy,sfr,shangrila,sharp,shaw,shell,shia,shiksha,shoes,shop,shopping,shouji,show,showtime,silk,sina,singles,site,ski,skin,sky,skype,sling,smart,smile,sncf,soccer,social,softbank,software,sohu,solar,solutions,song,sony,soy,spa,space,sport,spot,srl,stada,staples,star,statebank,statefarm,stc,stcgroup,stockholm,storage,store,stream,studio,study,style,sucks,supplies,supply,support,surf,surgery,suzuki,swatch,swiss,sydney,systems,tab,taipei,talk,taobao,target,tatamotors,tatar,tattoo,tax,taxi,tci,tdk,team,tech,technology,temasek,tennis,teva,thd,theater,theatre,tiaa,tickets,tienda,tiffany,tips,tires,tirol,tjmaxx,tjx,tkmaxx,tmall,today,tokyo,tools,top,toray,toshiba,total,tours,town,toyota,toys,trade,trading,training,travel,travelchannel,travelers,travelersinsurance,trust,trv,tube,tui,tunes,tushu,tvs,ubank,ubs,unicom,university,uno,uol,ups,vacations,vana,vanguard,vegas,ventures,verisign,versicherung,vet,viajes,video,vig,viking,villas,vin,vip,virgin,visa,vision,viva,vivo,vlaanderen,vodka,volkswagen,volvo,vote,voting,voto,voyage,vuelos,wales,walmart,walter,wang,wanggou,watch,watches,weather,weatherchannel,webcam,weber,website,wedding,weibo,weir,whoswho,wien,wiki,williamhill,win,windows,wine,winners,wme,wolterskluwer,woodside,work,works,world,wow,wtc,wtf,xbox,xerox,xfinity,xihuan,xin,xn--11b4c3d,xn--1ck2e1b,xn--1qqw23a,xn--30rr7y,xn--3bst00m,xn--3ds443g,xn--3pxu8k,xn--42c2d9a,xn--45q11c,xn--4gbrim,xn--55qw42g,xn--55qx5d,xn--5su34j936bgsg,xn--5tzm5g,xn--6frz82g,xn--6qq986b3xl,xn--80adxhks,xn--80aqecdr1a,xn--80asehdb,xn--80aswg,xn--8y0a063a,xn--9dbq2a,xn--9et52u,xn--9krt00a,xn--b4w605ferd,xn--bck1b9a5dre4c,xn--c1avg,xn--c2br7g,xn--cck2b3b,xn--cckwcxetd,xn--cg4bki,xn--czr694b,xn--czrs0t,xn--czru2d,xn--d1acj3b,xn--eckvdtc9d,xn--efvy88h,xn--fct429k,xn--fhbei,xn--fiq228c5hs,xn--fiq64b,xn--fjq720a,xn--flw351e,xn--fzys8d69uvgm,xn--g2xx48c,xn--gckr3f0f,xn--gk3at1e,xn--hxt814e,xn--i1b6b1a6a2e,xn--imr513n,xn--io0a7i,xn--j1aef,xn--jlq480n2rg,xn--jlq61u9w7b,xn--jvr189m,xn--kcrx77d1x4a,xn--kput3i,xn--mgba3a3ejt,xn--mgba7c0bbn0a,xn--mgbaakc7dvf,xn--mgbab2bd,xn--mgbca7dzdo,xn--mgbi4ecexp,xn--mgbt3dhd,xn--mk1bu44c,xn--mxtq1m,xn--ngbc5azd,xn--ngbe9e0a,xn--ngbrx,xn--nqv7f,xn--nqv7fs00ema,xn--nyqy26a,xn--otu796d,xn--p1acf,xn--pssy2u,xn--q9jyb4c,xn--qcka1pmc,xn--rhqv96g,xn--rovu88b,xn--ses554g,xn--t60b56a,xn--tckwe,xn--tiq49xqyj,xn--unup4y,xn--vermgensberater-ctb,xn--vermgensberatung-pwb,xn--vhquv,xn--vuq861b,xn--w4r85el8fhu5dnra,xn--w4rs40l,xn--xhq521b,xn--zfr164b,xyz,yachts,yahoo,yamaxun,yandex,yodobashi,yoga,yokohama,you,youtube,yun,zappos,zara,zero,zip,zone,zuerich";

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/serialized-tries/private.js
  init_env();
  var private_default = "ua>cc,inf,ltd,cx,biz,co,pp,v<to>611,oya,rdv,vpnplus,quickconnect>direct<nyan<us>graphox,cloudns,drud,is-by,land-4-sale,stuff-4-sale,enscaled>phx<mircloud,freeddns,golffan,noip,pointto,platterp,de>lib<<com>devcdnaccesso>*<adobeaemcloud>dev>*<<kasserver,amazonaws>compute>*<compute-1>*<us-east-1>dualstack>s3<<elb>*<s3,s3-ap-northeast-1,s3-ap-northeast-2,s3-ap-south-1,s3-ap-southeast-1,s3-ap-southeast-2,s3-ca-central-1,s3-eu-central-1,s3-eu-west-1,s3-eu-west-2,s3-eu-west-3,s3-external-1,s3-fips-us-gov-west-1,s3-sa-east-1,s3-us-gov-west-1,s3-us-east-2,s3-us-west-1,s3-us-west-2,ap-northeast-2>s3,dualstack>s3<s3-website<ap-south-1>s3,dualstack>s3<s3-website<ca-central-1>s3,dualstack>s3<s3-website<eu-central-1>s3,dualstack>s3<s3-website<eu-west-2>s3,dualstack>s3<s3-website<eu-west-3>s3,dualstack>s3<s3-website<us-east-2>s3,dualstack>s3<s3-website<ap-northeast-1>dualstack>s3<<ap-southeast-1>dualstack>s3<<ap-southeast-2>dualstack>s3<<eu-west-1>dualstack>s3<<sa-east-1>dualstack>s3<<s3-website-us-east-1,s3-website-us-west-1,s3-website-us-west-2,s3-website-ap-northeast-1,s3-website-ap-southeast-1,s3-website-ap-southeast-2,s3-website-eu-west-1,s3-website-sa-east-1<elasticbeanstalk>ap-northeast-1,ap-northeast-2,ap-northeast-3,ap-south-1,ap-southeast-1,ap-southeast-2,ca-central-1,eu-central-1,eu-west-1,eu-west-2,eu-west-3,sa-east-1,us-east-1,us-east-2,us-gov-west-1,us-west-1,us-west-2<awsglobalaccelerator,siiites,appspacehosted,appspaceusercontent,on-aptible,myasustor,balena-devices,betainabox,boutir,bplaced,cafjs,br,cn,de,eu,jpn,mex,ru,sa,uk,us,za,ar,hu,kr,no,qc,uy,africa,gr,co,jdevcloud,wpdevcloud,cloudcontrolled,cloudcontrolapp,trycloudflare,customer-oci>*,oci>*<ocp>*<ocs>*<<dattolocal,dattorelay,dattoweb,mydatto,builtwithdark,datadetect>demo,instance<ddns5,drayddns,dreamhosters,mydrobo,dyndns-at-home,dyndns-at-work,dyndns-blog,dyndns-free,dyndns-home,dyndns-ip,dyndns-mail,dyndns-office,dyndns-pics,dyndns-remote,dyndns-server,dyndns-web,dyndns-wiki,dyndns-work,blogdns,cechire,dnsalias,dnsdojo,doesntexist,dontexist,doomdns,dyn-o-saur,dynalias,est-a-la-maison,est-a-la-masion,est-le-patron,est-mon-blogueur,from-ak,from-al,from-ar,from-ca,from-ct,from-dc,from-de,from-fl,from-ga,from-hi,from-ia,from-id,from-il,from-in,from-ks,from-ky,from-ma,from-md,from-mi,from-mn,from-mo,from-ms,from-mt,from-nc,from-nd,from-ne,from-nh,from-nj,from-nm,from-nv,from-oh,from-ok,from-or,from-pa,from-pr,from-ri,from-sc,from-sd,from-tn,from-tx,from-ut,from-va,from-vt,from-wa,from-wi,from-wv,from-wy,getmyip,gotdns,hobby-site,homelinux,homeunix,iamallama,is-a-anarchist,is-a-blogger,is-a-bookkeeper,is-a-bulls-fan,is-a-caterer,is-a-chef,is-a-conservative,is-a-cpa,is-a-cubicle-slave,is-a-democrat,is-a-designer,is-a-doctor,is-a-financialadvisor,is-a-geek,is-a-green,is-a-guru,is-a-hard-worker,is-a-hunter,is-a-landscaper,is-a-lawyer,is-a-liberal,is-a-libertarian,is-a-llama,is-a-musician,is-a-nascarfan,is-a-nurse,is-a-painter,is-a-personaltrainer,is-a-photographer,is-a-player,is-a-republican,is-a-rockstar,is-a-socialist,is-a-student,is-a-teacher,is-a-techie,is-a-therapist,is-an-accountant,is-an-actor,is-an-actress,is-an-anarchist,is-an-artist,is-an-engineer,is-an-entertainer,is-certified,is-gone,is-into-anime,is-into-cars,is-into-cartoons,is-into-games,is-leet,is-not-certified,is-slick,is-uberleet,is-with-theband,isa-geek,isa-hockeynut,issmarterthanyou,likes-pie,likescandy,neat-url,saves-the-whales,selfip,sells-for-less,sells-for-u,servebbs,simple-url,space-to-rent,teaches-yoga,writesthisblog,digitaloceanspaces>*<ddnsfree,ddnsgeek,giize,gleeze,kozow,loseyourip,ooguy,theworkpc,mytuleap,tuleap-partners,evennode>eu-1,eu-2,eu-3,eu-4,us-1,us-2,us-3,us-4<onfabrica,fbsbx>apps<fastly-terrarium,fastvps-server,mydobiss,firebaseapp,fldrv,forgeblocks,framercanvas,freebox-os,freeboxos,freemyip,gentapps,gentlentapis,githubusercontent,0emm>*<appspot>r>*<<codespot,googleapis,googlecode,pagespeedmobilizer,publishproxy,withgoogle,withyoutube,blogspot,awsmppl,herokuapp,herokussl,myravendb,impertrixcdn,impertrix,smushcdn,wphostedmail,wpmucdn,pixolino,amscompute,clicketcloud,dopaas,hidora,hosted-by-previder>paas<hosteur>rag-cloud,rag-cloud-ch<ik-server>jcloud,jcloud-ver-jpc<jelastic>demo<kilatiron,massivegrid>paas<wafaicloud>jed,lon,ryd<joyent>cns>*<<lpusercontent,lmpm>app<linode>members,nodebalancer>*<<linodeobjects>*<linodeusercontent>ip<barsycenter,barsyonline,mazeplay,miniserver,meteorapp>eu<hostedpi,mythic-beasts>customer,caracal,fentiger,lynx,ocelot,oncilla,onza,sphinx,vs,x,yali<nospamproxy>cloud<4u,nfshost,001www,ddnslive,myiphost,blogsyte,ciscofreak,damnserver,ditchyourip,dnsiskinky,dynns,geekgalaxy,health-carereform,homesecuritymac,homesecuritypc,myactivedirectory,mysecuritycamera,net-freaks,onthewifi,point2this,quicksytes,securitytactics,serveexchange,servehumour,servep2p,servesarcasm,stufftoread,unusualperson,workisboring,3utilities,ddnsking,myvnc,servebeer,servecounterstrike,serveftp,servegame,servehalflife,servehttp,serveirc,servemp3,servepics,servequake,observableusercontent>static<orsites,operaunite,authgear-staging,authgearapps,skygearapp,outsystemscloud,ownprovider,pgfog,pagefrontapp,pagexl,paywhirl>*<gotpantheon,platter-app,pleskns,postman-echo,prgmr>xen<pythonanywhere>eu<qualifioapp,qbuser,qa2,dev-myqnapcloud,alpha-myqnapcloud,myqnapcloud,quipelements>*<rackmaze,rhcloud,render>app<onrender,logoip,scrysec,firewall-gateway,myshopblocks,myshopify,shopitsite,1kapp,appchizi,applinzi,sinaapp,vipsinaapp,bounty-full>alpha,beta<try-snowplow,stackhero-network,playstation-cloud,myspreadshop,stdlib>api<temp-dns,dsmynas,familyds,tb-hosting>site<reservd,thingdustdata,bloxcms,townnews-staging,typeform>pro<hk,wafflecell,idnblogger,indowapblog,reserve-online,hotelwithflight,remotewd,wiardweb>pages<woltlab-demo,wpenginepowered>js<wixsite,xnbay>u2,u2-local<yolasite<live>hlx<net>adobeaemcloud,alwaysdata,cloudfront,t3l3p0rt,appudo,atlassian-dev>prod>cdn<<myfritz,onavstack,shopselect,blackbaudcdn,boomla,bplaced,square7,gb,hu,jp,se,uk,in,clickrising,cloudaccess,cdn77-ssl,cdn77>r<feste-ip,knx-server,static-access,cryptonomic>*<dattolocal,mydatto,debian,bitbridge,at-band-camp,blogdns,broke-it,buyshouses,dnsalias,dnsdojo,does-it,dontexist,dynalias,dynathome,endofinternet,from-az,from-co,from-la,from-ny,gets-it,ham-radio-op,homeftp,homeip,homelinux,homeunix,in-the-band,is-a-chef,is-a-geek,isa-geek,kicks-ass,office-on-the,podzone,scrapper-site,selfip,sells-it,servebbs,serveftp,thruhere,webhop,definima,casacam,dynu,dynv6,twmail,ru,channelsdvr>u<fastlylb>map<fastly>freetls,map,prod>a,global<ssl>a,b,global<<edgeapp,flynnhosting,cdn-edges,cloudfunctions,moonscale,in-dsl,in-vpn,ipifony,iobb,cloudjiffy>fra1-de,west1-us<elastx>jls-sto1,jls-sto2,jls-sto3<faststacks,massivegrid>paas>fr-1,lon-1,lon-2,ny-1,ny-2,sg-1<<saveincloud>jelastic,nordeste-idc<scaleforce>j<tsukaeru>jelastic<kinghost,uni5,krellian,barsy,memset,azurewebsites,azure-mobile,cloudapp,azurestaticapps>centralus,eastasia,eastus2,westeurope,westus2<dnsup,hicam,now-dns,ownip,vpndns,eating-organic,mydissent,myeffect,mymediapc,mypsx,mysecuritycamera,nhlfan,no-ip,pgafan,privatizehealthinsurance,bounceme,ddns,redirectme,serveblog,serveminecraft,sytes,cloudycluster,ovh>webpaas>*<hosting>*<<bar0,bar1,bar2,rackmaze,schokokeks,firewall-gateway,seidat,senseering,siteleaf,vps-host>jelastic>atl,njs,ric<<myspreadshop,srcf>soc,user<supabase,dsmynas,familyds,tailscale>beta<ts,torproject>pages<fastblog,reserve-online,community-pro,meinforum,yandexcloud>storage,website<za<page>hlx,hlx3,codeberg,pdns,plesk,prvcy,magnet<pl>beep,ecommerce-shop,shoparena,homesklep,sdscloud,unicloud,krasnik,leczna,lubartow,lublin,poniatowa,swidnik,co,art,gliwice,krakow,poznan,wroc,zakopane,myspreadshop,gda,gdansk,gdynia,med,sopot<ca>barsy,awdev>*<co,blogspot,no-ip,myspreadshop<estate>compute>*<<network>alces>*<co,arvo,azimuth,tlon<org>altervista,amune>tele<pimienta,poivron,potager,sweetpepper,ae,us,certmgr,cdn77>c,rsc<cdn77-secure>origin>ssl<<cloudns,duckdns,tunk,dyndns>go,home<blogdns,blogsite,boldlygoingnowhere,dnsalias,dnsdojo,doesntexist,dontexist,doomdns,dvrdns,dynalias,endofinternet,endoftheinternet,from-me,game-host,gotdns,hobby-site,homedns,homeftp,homelinux,homeunix,is-a-bruinsfan,is-a-candidate,is-a-celticsfan,is-a-chef,is-a-geek,is-a-knight,is-a-linux-user,is-a-patsfan,is-a-soxfan,is-found,is-lost,is-saved,is-very-bad,is-very-evil,is-very-good,is-very-nice,is-very-sweet,isa-geek,kicks-ass,misconfused,podzone,readmyblog,selfip,sellsyourhome,servebbs,serveftp,servegame,stuff-4-sale,webhop,ddnss,accesscam,camdvr,freeddns,mywire,webredirect,eu>al,asso,at,au,be,bg,ca,cd,ch,cn,cy,cz,de,dk,edu,ee,es,fi,fr,gr,hr,hu,ie,il,in,int,is,it,jp,kr,lt,lu,lv,mc,me,mk,mt,my,net,ng,nl,no,nz,paris,pl,pt,q-a,ro,ru,se,si,sk,tr,uk,us<twmail,fedorainfracloud,fedorapeople,fedoraproject>cloud,os>app<stg>os>app<<<freedesktop,hepforge,in-dsl,in-vpn,js,barsy,mayfirst,mozilla-iot,bmoattachments,dynserv,now-dns,cable-modem,collegefan,couchpotatofries,mlbfan,mysecuritycamera,nflfan,read-books,ufcfan,hopto,myftp,no-ip,zapto,httpbin,pubtls,my-firewall,myfirewall,spdns,small-web,dsmynas,familyds,teckids>s3<tuxfamily,diskstation,hk,wmflabs,toolforge,wmcloud,za<cn>com>amazonaws>compute>*<eb>cn-north-1,cn-northwest-1<elb>*<cn-north-1>s3<<<instantcloud<io>apigee,b-data,backplaneapp,banzaicloud>app,backyards>*<<bitbucket,bluebite,boxfuse,browsersafetymark,bigv>uk0<cleverapps,dappnode>dyndns<dedyn,drud,definima,fh-muenster,shw,forgerock>id<ghost,github,gitlab,lolipop,hasura-app,hostyhosting,moonscale>*<beebyte>paas<beebyteapp>sekd1<jele,unispace>cloud-fr1<webthings,loginline,barsy,azurecontainer>*<ngrok,nodeart>stage<nid,pantheonsite,dyn53,pstmn>mock<protonet,qoto,qcx>sys>*<<vaporcloud,vbrplsbx>g<on-k3s>*<on-rio>*<readthedocs,resindevice,resinstaging>devices<hzc,sandcats,shiftcrypto,shiftedit,mo-siemens,lair>apps<stolos>*<spacekit,utwente,s5y>*<edugit,telebit,thingdust>dev>cust,reservd<disrec>cust,reservd<prod>cust<testing>cust,reservd<<tickets,upli,2038,wedeploy,editorx,basicserver,virtualserver<jp>ne>aseinet>user<gehirn<buyshop,fashionstore,handcrafted,kawaiishop,supersale,theshop,usercontent,blogspot<vc>gv>d<0e<eus>party>user<<ws>advisor>*<cloud66,dyndns,mypets<ba>rs,blogspot<cloud>banzai>*<elementor,encoway>eu<statics>*<ravendb,axarnet>es-1<diadem,jelastic>vip<jele,jenv-aruba>aruba>eur>it1<<it1<keliweb>cs<oxa>tn,uk<primetel>uk<reclaim>ca,uk,us<trendhosting>ch,de<jotelulu,kuleuven,linkyard,magentosite>*<perspecta,vapor,on-rancher>*<sensiosite>*<trafficplex,urown,voorloper<ec>base,official<shop>base,hoplix,barsy<la>bnr,c<je>of<ch>square7,blogspot,flow>ae>alp1<appengine<linkyard-cloud,dnsking,gotdns,myspreadshop,firenet>*,svc>*<<12hp,2ix,4lima,lima-city<de>bplaced,square7,com,cosidns>dyn<dynamisches-dns,dnsupdater,internet-dns,l-o-g-i-n,dnshome,fuettertdasnetz,isteingeek,istmein,lebtimnetz,leitungsen,traeumtgerade,ddnss>dyn,dyndns<dyndns1,dyn-ip24,home-webserver>dyn<myhome-server,frusky>*<goip,blogspot,xn--gnstigbestellen-zvb,xn--gnstigliefern-wob,hs-heilbronn>it>pages<<dyn-berlin,in-berlin,in-brb,in-butter,in-dsl,in-vpn,mein-iserv,schulserver,test-iserv,keymachine,git-repos,lcube-server,svn-repos,barsy,logoip,firewall-gateway,my-gateway,my-router,spdns,speedpartner>customer<myspreadshop,taifun-dns,12hp,2ix,4lima,lima-city,dd-dns,dray-dns,draydns,dyn-vpn,dynvpn,mein-vigor,my-vigor,my-wan,syno-ds,synology-diskstation,synology-ds,uberspace>*<virtualuser,virtual-user,community-pro,diskussionsbereich<rs>brendly>shop<blogspot,ua,ox<uk>co>bytemark>dh,vm<blogspot,layershift>j<barsy,barsyonline,retrosnub>cust<nh-serv,no-ip,wellbeingzone,adimo,myspreadshop,gwiddle<conn,copro,hosp,gov>service,homeoffice<pymnt,org>glug,lug,lugs,affinitylottery,raffleentry,weeklylottery<barsy<eu>mycd,cloudns,dogado>jelastic<barsy,wellbeingzone,spdns,transurl>*<diskstation<ac>drr<ai>uwu<co>carrd,crd,otap>*<com>blogspot<leadpages,lpages,mypi,n4t,repl>id<supabase<mp>ju<se>com,blogspot,conf,iopsys,itcouldbewor,myspreadshop,paba>su<<bz>za,gsj<in>web,cloudns,blogspot,barsy,supabase<basketball>aus,nz<am>radio,blogspot,neko,nyaa<fm>radio<group>discourse<team>discourse,jelastic<app>clerk,clerkstage,wnext,platform0,ondigitalocean,edgecompute,fireweb,onflashdrive,framer,run>a<web,hasura,loginline,netlify,developer>*<noop,northflank>*<telebit,vercel,bookonline<dev>lcl>*<lclstage>*<stg>*<stgstage>*<pages,workers,curv,deno,deno-staging,fly,githubpreview,gateway>*<iserv,loginline,mediatech,platter-app,shiftcrypto,vercel,webhare>*<<me>c66,daplie>localhost<edgestack,couk,ukco,filegear,filegear-au,filegear-de,filegear-gb,filegear-ie,filegear-jp,filegear-sg,glitch,ravendb,lohmus,barsy,mcpe,mcdir,soundcast,tcp4,brasilia,ddns,dnsfor,hopto,loginto,noip,webhop,vp4,diskstation,dscloud,i234,myds,synology,tbits,wbq,wedeploy,yombo,nohost<zone>cloud66,hs,triton>*<lima<host>cloudaccess,freesite,fastvps,myfast,tempurl,wpmudev,jele,mircloud,pcloud,half<site>cloudera>*<cyon,fnwk,folionetwork,fastvps,jele,lelux,loginline,barsy,mintere,omniwe,opensocial,platformsh>*<tst>*<byen,srht,novecore<cz>co,realm,e4,blogspot,metacentrum>cloud>*<custom<muni>cloud>flt,usr<<<asia>cloudns<biz>cloudns,jozi,dyndns,for-better,for-more,for-some,for-the,selfip,webhop,orx,mmafan,myftp,no-ip,dscloud<club>cloudns,jele,barsy,pony<cc>cloudns,ftpaccess,game-server,myphotos,scrapping,twmail,csx,fantasyleague,spawn>instances<<info>cloudns,dynamic-dns,dyndns,barrel-of-knowledge,barrell-of-knowledge,for-our,groks-the,groks-this,here-for-more,knowsitall,selfip,webhop,barsy,mayfirst,forumz,nsupdate,dvrcam,ilovecollege,no-ip,dnsupdate,v-info<pro>cloudns,dnstrace>bci<barsy<pw>cloudns,x443<gdn>cnpy<nl>co,hosting-cluster,blogspot,khplay,myspreadshop,transurl>*<cistron,demon<no>co,blogspot,myspreadshop<be>webhosting,blogspot,interhostsolutions>cloud<kuleuven>ezproxy<myspreadshop,transurl>*<<ru>ac,edu,gov,int,mil,test,eurodir,adygeya,bashkiria,bir,cbg,com,dagestan,grozny,kalmykia,kustanai,marine,mordovia,msk,mytis,nalchik,nov,pyatigorsk,spb,vladikavkaz,vladimir,blogspot,na4u,mircloud,regruhosting>jelastic<myjino>hosting>*<landing>*<spectrum>*<vps>*<<cldmail>hb<mcdir>vps<mcpre,net,org,pp,lk3,ras<is>cupcake,blogspot<link>cyon,mypep,dweb>*<<dk>biz,co,firm,reg,store,blogspot,myspreadshop<earth>dapps>*,bzz>*<<<id>my>rss>*<<flap,co>blogspot<forte,bloger,wblog<solutions>diher>*<<th>online,shop<sh>bip,hashbang,platform>bc,ent,eu,us<now,vxl,wedeploy<fi>dy,blogspot,xn--hkkinen-5wa,iki,cloudplatform>fi<datacenter>demo,paas<myspreadshop<tv>dyndns,better-than,on-the-web,worse-than<cx>ath,info<name>her>forgot<his>forgot<<nu>merseine,mine,shacknet,enterprisecloud<rocks>myddns,lima-city,webspace<xyz>blogsite,localzone,crafting,zapto,telebit>*<<online>eero,eero-stage,barsy<cool>elementor,de<fr>en-root,fbx-os,fbxos,freebox-os,freeboxos,blogspot,goupile,on-web,chirurgiens-dentistes-en-france,myspreadshop,ynh<one>onred>staging<for,under,service,homelink<tw>com>mymailer<url,blogspot<su>abkhazia,adygeya,aktyubinsk,arkhangelsk,armenia,ashgabad,azerbaijan,balashov,bashkiria,bryansk,bukhara,chimkent,dagestan,east-kazakhstan,exnet,georgia,grozny,ivanovo,jambyl,kalmykia,kaluga,karacol,karaganda,karelia,khakassia,krasnodar,kurgan,kustanai,lenug,mangyshlak,mordovia,msk,murmansk,nalchik,navoi,north-kazakhstan,nov,obninsk,penza,pokrovsk,sochi,spb,tashkent,termez,togliatti,troitsk,tselinograd,tula,tuva,vladikavkaz,vladimir,vologda<space>myfast,uber,xs4all<il>co>ravpage,blogspot,tabitorder<<at>funkfeuer>wien<futurecms>*,ex>*<in>*<<futurehosting,futuremailing,ortsinfo>ex>*<kunden>*<<co>blogspot<biz,info,priv,myspreadshop,12hp,2ix,4lima,lima-city<ms>lab,minisite<si>gitapp,gitpage,blogspot<community>nog,ravendb,myforum<ro>co,shop,blogspot,barsy<digital>cloudapps>london<<im>ro<goog>cloud,translate,usercontent>*<<ae>blogspot<al>blogspot<bg>blogspot,barsy<bj>blogspot<cf>blogspot<cl>blogspot<ke>co>blogspot<<nz>co>blogspot<<za>co>blogspot<<ar>com>blogspot<<au>com>blogspot,cloudlets>mel<myspreadshop<<br>com>blogspot,virtualcloud>scale>users<<<leg>ac,al,am,ap,ba,ce,df,es,go,ma,mg,ms,mt,pa,pb,pe,pi,pr,rj,rn,ro,rr,rs,sc,se,sp,to<<by>com>blogspot<mycloud,mediatech<cy>com>blogspot,scaleforce>j<<<ee>com>blogspot<<eg>com>blogspot<<es>com>blogspot<myspreadshop<mt>com>blogspot<<ng>com>blogspot<col,firm,gen,ltd,ngo<tr>com>blogspot<<uy>com>blogspot<<cv>blogspot<gr>blogspot<hk>blogspot,secaas,ltd,inc<hr>blogspot,free<hu>blogspot<ie>blogspot,myspreadshop<it>blogspot,neen>jc<tim>open>jelastic>cloud<<<16-b,32-b,64-b,myspreadshop,syncloud<kr>blogspot<li>blogspot,caa<lt>blogspot<lu>blogspot<md>blogspot,at,de,jp,to<mk>blogspot<mr>blogspot<mx>blogspot<my>blogspot<pe>blogspot<pt>blogspot<qa>blogspot<re>blogspot<sg>blogspot,enscaled<sk>blogspot<sn>blogspot<td>blogspot<ug>blogspot<vn>blogspot<ci>fin,nl<run>hs,development,ravendb,servers,code>*<repl<gl>biz,xx<scot>edu,gov>service<<so>sch<yt>org<kz>jcloud,kazteleport>upaas<<tn>orangecloud<gg>kaas,cya,panel>daemon<<systems>knightpoint<events>koobin,co<krd>co,edu<business>co<education>co<financial>co<place>co<technology>co<bs>we<services>loginline<menu>barsy<mobi>barsy,dscloud<pub>barsy<support>barsy<vu>cn,blog,dev,me<health>hra<casa>nabu>ui<<fashion>of<london>in,of<marketing>from,with<men>for,repair<mom>and,for<sale>for<win>that<work>from,to<news>noticeable<top>now-dns,ntdll<ovh>nerdpol<mn>nyc<lol>omg<hosting>opencraft<pm>own<codes>owo>*<<lc>oy<bn>co<today>prequalifyme<builders>cloudsite<edu>rit>git-pages<<xn--p1acf>xn--90amc,xn--j1aef,xn--j1ael8b,xn--h1ahn,xn--j1adp,xn--c1avg,xn--80aaa0cvac,xn--h1aliz,xn--90a1af,xn--41a<store>sellfy,shopware,storebase<land>static>dev,sites<<farm>storj<pictures>1337<rip>clan<management>router<ax>be,cat,es,eu,gg,mc,us,xy<gp>app<gt>blog,de,to<gy>be<hn>cc<kg>blog,io,jp,tv,uk,us<ls>de<porn>indie<tc>ch,me,we<vg>at<academy>official<faith>ybo<party>ybo<review>ybo<science>ybo<trade>ybo<st>noho<design>bss";

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/trie/look-up.js
  init_env();

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/trie/characters.js
  init_env();
  var UP = "<";
  var SAME = ",";
  var DOWN = ">";
  var RESET = "|";
  var WILDCARD = "*";
  var EXCEPTION = "!";

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/trie/look-up.js
  var lookUpTldsInTrie = (labels, trie) => {
    const labelsToCheck = labels.slice();
    const tlds = [];
    let node = trie;
    while (labelsToCheck.length !== 0) {
      const label = labelsToCheck.pop();
      const labelLowerCase = label.toLowerCase();
      if (node.children.has(WILDCARD)) {
        if (node.children.has(EXCEPTION + labelLowerCase)) {
          break;
        }
        node = node.children.get(WILDCARD);
      } else {
        if (node.children.has(labelLowerCase) === false) {
          break;
        }
        node = node.children.get(labelLowerCase);
      }
      tlds.unshift(label);
    }
    return tlds;
  };

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/sanitize.js
  init_env();

  // node_modules/.pnpm/is-ip@4.0.0/node_modules/is-ip/index.js
  init_env();

  // node_modules/.pnpm/ip-regex@5.0.0/node_modules/ip-regex/index.js
  init_env();
  var word = "[a-fA-F\\d:]";
  var boundry = (options) => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : "";
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6segment = "[a-fA-F\\d]{1,4}";
  var v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
  var v4exact = new RegExp(`^${v4}$`);
  var v6exact = new RegExp(`^${v6}$`);
  var ipRegex = (options) => options && options.exact ? v46Exact : new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, "g");
  ipRegex.v4 = (options) => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, "g");
  ipRegex.v6 = (options) => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, "g");
  var ip_regex_default = ipRegex;

  // node_modules/.pnpm/is-ip@4.0.0/node_modules/is-ip/index.js
  function isIP(string) {
    return ip_regex_default({ exact: true }).test(string);
  }
  function isIPv6(string) {
    return ip_regex_default.v6({ exact: true }).test(string);
  }
  function ipVersion(string) {
    return isIP(string) ? isIPv6(string) ? 6 : 4 : void 0;
  }

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/sanitize.js
  var LABEL_SEPARATOR = ".";
  var LABEL_LENGTH_MIN = 1;
  var LABEL_LENGTH_MAX = 63;
  var DOMAIN_LENGTH_MAX = 253;
  var textEncoder2 = new TextEncoder();
  var Validation;
  (function(Validation2) {
    Validation2["Lax"] = "LAX";
    Validation2["Strict"] = "STRICT";
  })(Validation || (Validation = {}));
  var ValidationErrorType;
  (function(ValidationErrorType2) {
    ValidationErrorType2["NoHostname"] = "NO_HOSTNAME";
    ValidationErrorType2["DomainMaxLength"] = "DOMAIN_MAX_LENGTH";
    ValidationErrorType2["LabelMinLength"] = "LABEL_MIN_LENGTH";
    ValidationErrorType2["LabelMaxLength"] = "LABEL_MAX_LENGTH";
    ValidationErrorType2["LabelInvalidCharacter"] = "LABEL_INVALID_CHARACTER";
    ValidationErrorType2["LastLabelInvalid"] = "LAST_LABEL_INVALID";
  })(ValidationErrorType || (ValidationErrorType = {}));
  var SanitizationResultType;
  (function(SanitizationResultType2) {
    SanitizationResultType2["ValidIp"] = "VALID_IP";
    SanitizationResultType2["ValidDomain"] = "VALID_DOMAIN";
    SanitizationResultType2["Error"] = "ERROR";
  })(SanitizationResultType || (SanitizationResultType = {}));
  var createNoHostnameError = (input) => {
    return {
      type: ValidationErrorType.NoHostname,
      message: `The given input ${String(input)} does not look like a hostname.`,
      column: 1
    };
  };
  var createDomainMaxLengthError = (domain, length) => {
    return {
      type: ValidationErrorType.DomainMaxLength,
      message: `Domain "${domain}" is too long. Domain is ${length} octets long but should not be longer than ${DOMAIN_LENGTH_MAX}.`,
      column: length
    };
  };
  var createLabelMinLengthError = (label, column) => {
    const length = label.length;
    return {
      type: ValidationErrorType.LabelMinLength,
      message: `Label "${label}" is too short. Label is ${length} octets long but should be at least ${LABEL_LENGTH_MIN}.`,
      column
    };
  };
  var createLabelMaxLengthError = (label, column) => {
    const length = label.length;
    return {
      type: ValidationErrorType.LabelMaxLength,
      message: `Label "${label}" is too long. Label is ${length} octets long but should not be longer than ${LABEL_LENGTH_MAX}.`,
      column
    };
  };
  var createLabelInvalidCharacterError = (label, invalidCharacter, column) => {
    return {
      type: ValidationErrorType.LabelInvalidCharacter,
      message: `Label "${label}" contains invalid character "${invalidCharacter}" at column ${column}.`,
      column
    };
  };
  var createLastLabelInvalidError = (label, column) => {
    return {
      type: ValidationErrorType.LabelInvalidCharacter,
      message: `Last label "${label}" must not be all-numeric.`,
      column
    };
  };
  var sanitize = (input, options = {}) => {
    if (typeof input !== "string") {
      return {
        type: SanitizationResultType.Error,
        errors: [createNoHostnameError(input)]
      };
    }
    if (input === "") {
      return {
        type: SanitizationResultType.ValidDomain,
        domain: input,
        labels: []
      };
    }
    const inputTrimmedAsIp = input.replace(/^\[|]$/g, "");
    const ipVersionOfInput = ipVersion(inputTrimmedAsIp);
    if (ipVersionOfInput !== void 0) {
      return {
        type: SanitizationResultType.ValidIp,
        ip: inputTrimmedAsIp,
        ipVersion: ipVersionOfInput
      };
    }
    const lastChar = input.charAt(input.length - 1);
    const canonicalInput = lastChar === LABEL_SEPARATOR ? input.slice(0, -1) : input;
    const octets = new TextEncoder().encode(canonicalInput);
    if (octets.length > DOMAIN_LENGTH_MAX) {
      return {
        type: SanitizationResultType.Error,
        errors: [createDomainMaxLengthError(input, octets.length)]
      };
    }
    const labels = canonicalInput.split(LABEL_SEPARATOR);
    const { validation = Validation.Strict } = options;
    const labelValidationErrors = validateLabels[validation](labels);
    if (labelValidationErrors.length > 0) {
      return {
        type: SanitizationResultType.Error,
        errors: labelValidationErrors
      };
    }
    return {
      type: SanitizationResultType.ValidDomain,
      domain: input,
      labels
    };
  };
  var validateLabels = {
    [Validation.Lax]: (labels) => {
      const labelValidationErrors = [];
      let column = 1;
      for (const label of labels) {
        const octets = textEncoder2.encode(label);
        if (octets.length < LABEL_LENGTH_MIN) {
          labelValidationErrors.push(createLabelMinLengthError(label, column));
        } else if (octets.length > LABEL_LENGTH_MAX) {
          labelValidationErrors.push(createLabelMaxLengthError(label, column));
        }
        column += label.length + LABEL_SEPARATOR.length;
      }
      return labelValidationErrors;
    },
    [Validation.Strict]: (labels) => {
      const labelValidationErrors = [];
      let column = 1;
      let lastLabel;
      for (const label of labels) {
        const invalidCharacter = /[^\da-z-]/i.exec(label);
        if (invalidCharacter) {
          labelValidationErrors.push(createLabelInvalidCharacterError(label, invalidCharacter[0], invalidCharacter.index + 1));
        }
        if (label.startsWith("-")) {
          labelValidationErrors.push(createLabelInvalidCharacterError(label, "-", column));
        } else if (label.endsWith("-")) {
          labelValidationErrors.push(createLabelInvalidCharacterError(label, "-", column + label.length - 1));
        }
        if (label.length < LABEL_LENGTH_MIN) {
          labelValidationErrors.push(createLabelMinLengthError(label, column));
        } else if (label.length > LABEL_LENGTH_MAX) {
          labelValidationErrors.push(createLabelMaxLengthError(label, column));
        }
        column += label.length + LABEL_SEPARATOR.length;
        lastLabel = label;
      }
      if (lastLabel !== void 0 && /[a-z-]/iu.test(lastLabel) === false) {
        labelValidationErrors.push(createLastLabelInvalidError(lastLabel, column - lastLabel.length - LABEL_SEPARATOR.length));
      }
      return labelValidationErrors;
    }
  };

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/trie/parse-trie.js
  init_env();

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/trie/nodes.js
  init_env();
  var NODE_TYPE_ROOT = Symbol("ROOT");
  var NODE_TYPE_CHILD = Symbol("CHILD");
  var createRootNode = () => {
    return {
      type: NODE_TYPE_ROOT,
      children: /* @__PURE__ */ new Map()
    };
  };
  var createOrGetChild = (parent, label) => {
    let child = parent.children.get(label);
    if (child === void 0) {
      child = {
        type: NODE_TYPE_CHILD,
        label,
        children: /* @__PURE__ */ new Map(),
        parent
      };
      parent.children.set(label, child);
    }
    return child;
  };

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/trie/parse-trie.js
  var parseTrie = (serializedTrie) => {
    const rootNode = createRootNode();
    let domain = "";
    let parentNode = rootNode;
    let node = rootNode;
    const addDomain = () => {
      node = createOrGetChild(parentNode, domain);
      domain = "";
    };
    for (let i = 0; i < serializedTrie.length; i++) {
      const char = serializedTrie.charAt(i);
      switch (char) {
        case SAME: {
          addDomain();
          continue;
        }
        case DOWN: {
          addDomain();
          parentNode = node;
          continue;
        }
        case RESET: {
          addDomain();
          parentNode = rootNode;
          continue;
        }
        case UP: {
          if (parentNode.type === NODE_TYPE_ROOT) {
            throw new Error(`Error in serialized trie at position ${i}: Cannot go up, current parent node is already root`);
          }
          addDomain();
          parentNode = parentNode.parent;
          continue;
        }
      }
      domain += char;
    }
    if (domain !== "") {
      addDomain();
    }
    return rootNode;
  };

  // node_modules/.pnpm/parse-domain@7.0.0/node_modules/parse-domain/build/parse-domain.js
  var RESERVED_TOP_LEVEL_DOMAINS = [
    "localhost",
    "local",
    "example",
    "invalid",
    "test"
  ];
  var ParseResultType;
  (function(ParseResultType2) {
    ParseResultType2["Invalid"] = "INVALID";
    ParseResultType2["Ip"] = "IP";
    ParseResultType2["Reserved"] = "RESERVED";
    ParseResultType2["NotListed"] = "NOT_LISTED";
    ParseResultType2["Listed"] = "LISTED";
  })(ParseResultType || (ParseResultType = {}));
  var getAtIndex = (array, index) => {
    return index >= 0 && index < array.length ? array[index] : void 0;
  };
  var splitLabelsIntoDomains = (labels, index) => {
    return {
      subDomains: labels.slice(0, Math.max(0, index)),
      domain: getAtIndex(labels, index),
      topLevelDomains: labels.slice(index + 1)
    };
  };
  var parsedIcannTrie;
  var parsedPrivateTrie;
  var parseDomain = (hostname, options) => {
    const sanitizationResult = sanitize(hostname, options);
    if (sanitizationResult.type === SanitizationResultType.Error) {
      return {
        type: ParseResultType.Invalid,
        hostname,
        errors: sanitizationResult.errors
      };
    }
    if (sanitizationResult.type === SanitizationResultType.ValidIp) {
      return {
        type: ParseResultType.Ip,
        hostname: sanitizationResult.ip,
        ipVersion: sanitizationResult.ipVersion
      };
    }
    const { labels, domain } = sanitizationResult;
    if (hostname === "" || RESERVED_TOP_LEVEL_DOMAINS.includes(labels[labels.length - 1])) {
      return {
        type: ParseResultType.Reserved,
        hostname: domain,
        labels
      };
    }
    parsedIcannTrie = parsedIcannTrie !== null && parsedIcannTrie !== void 0 ? parsedIcannTrie : parseTrie(icann_default);
    parsedPrivateTrie = parsedPrivateTrie !== null && parsedPrivateTrie !== void 0 ? parsedPrivateTrie : parseTrie(private_default);
    const icannTlds = lookUpTldsInTrie(labels, parsedIcannTrie);
    const privateTlds = lookUpTldsInTrie(labels, parsedPrivateTrie);
    if (icannTlds.length === 0 && privateTlds.length === 0) {
      return {
        type: ParseResultType.NotListed,
        hostname: domain,
        labels
      };
    }
    const indexOfPublicSuffixDomain = labels.length - Math.max(privateTlds.length, icannTlds.length) - 1;
    const indexOfIcannDomain = labels.length - icannTlds.length - 1;
    return Object.assign({ type: ParseResultType.Listed, hostname: domain, labels, icann: splitLabelsIntoDomains(labels, indexOfIcannDomain) }, splitLabelsIntoDomains(labels, indexOfPublicSuffixDomain));
  };

  // src/routes/components.ts
  init_env();

  // src/routes/api/interface.ts
  init_env();

  // src/routes/components.ts
  var topSel = (wrap, content) => wrap ? html`<span class="topsel">${content}</span>` : content;
  var identicon = (by, size = 11) => {
    const img = new URL(`/identicon/${by}.svg`, location.origin).href;
    return html`<img class="identicon" src="${img}" alt="${by}" width="${size}" height="${size}"/>`;
  };
  var headerEl = ({ op, id }) => html`
  <tr>
    <td id="header" bgcolor="#ee9b33">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
        <tbody>
          <tr>
            <td style="width:18px;padding-right:4px"><a href="https://workers.tools"><picture><source 
                  srcset="darky18.png" media="(prefers-color-scheme: dark)"><img
                  src="y18.png" width="18" height="18"
                  style="border:1px transparent solid;"></picture></a></td>
            <td style="line-height:12pt; height:10px;"><span class="pagetop"><b class="hnname"><a
                    href="news">Worker News</a></b>
                ${topSel(op === "newest" /* NEW */, html`<a href="newest">new</a>`)}
                <!-- | <a href="threads?id=USER">threads</a> -->
                <!-- | <a href="front">past</a> -->
                <!-- | <a href="newcomments">comments</a> -->
                | ${topSel(op === "ask" /* ASK */, html`<a href="ask">ask</a>`)}
                | ${topSel(op === "show" /* SHOW */, html`<a href="show">show</a>`)}
                | ${topSel(op === "jobs" /* JOB */, html`<a href="jobs">jobs</a>`)}
                | ${topSel(op === "best" /* BEST */, html`<a href="best">best</a>`)}
                | <a onclick="popitup(this,event,850,380)" href="https://news.ycombinator.com/submit">submit</a>
                ${op === "shownew" /* SHOW_NEW */ ? html`| <font color="#ffffff">${op}</font>` : ""}
                ${op === "submitted" /* USER */ ? html`| <font color="#ffffff">${id}'s submissions</font>` : ""}
                ${op === "threads" ? html`| <font color="#ffffff">${id}'s comments</font>` : ""}
                ${op === "from" ? html`| <font color="#ffffff">from</font>` : ""}
              </span></td>
            <td style="text-align:right;padding-right:4px;"><span class="pagetop">
                ${null}
            </span></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
`;
  var footerEl = () => html`
  <tr>
    <td id="footer"><img src="s.gif" height="10" width="0">
      <table width="100%" cellspacing="0" cellpadding="1">
        <tbody>
          <tr>
            <td id="border" bgcolor="#ee9b33"></td>
          </tr>
        </tbody>
      </table><br/>
      <center>Made by <a href="/user?id=qwtel">qwtel</a> with <a
          href="https://workers.tools">Worker&nbsp;Tools</a> and <a
          href="https://workers.cloudflare.com">Cloudflare&nbsp;Workers</a>.</center><br/>
      <center><span class="yclinks">YC: 
            <a href="newsguidelines.html">Guidelines</a>
          | <a href="newsfaq.html">FAQ</a>
          <!-- | <a href="lists">Lists</a> -->
          | <a href="https://github.com/HackerNews/API">API</a>
          | <a href="security.html">Security</a>
          | <a href="https://www.ycombinator.com/legal/">Legal</a>
          | <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          | <a href="mailto:hn@ycombinator.com">Contact YC</a></span><br/><br/>
        <form method="get" action="//hn.algolia.com/">Search:
          <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="off"
            autocomplete="false">
        </form>
      </center>
    </td>
  </tr>`;
  var _a5, _b2;
  var pageLayout = ({ title, op, id }) => (content) => html(_b2 || (_b2 = __template(['\n  <!DOCTYPE html>\n  <html lang="en" op="', '">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="referrer" content="origin">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" type="text/css" href="news.css?v=2">\n    <link rel="shortcut icon" href="favicon.ico">\n    <link rel="alternate" type="application/rss+xml" title="RSS" href="rss">\n    <title>', `</title>
    <script type="module">(async () => {
      const regis = await navigator.serviceWorker.register('/sw.js')
      regis.addEventListener('updatefound', () => { console.log('update found')})
      // for (const reg of await navigator.serviceWorker.getRegistrations()) reg.unregister()
    })()<\/script>
  </head>
  <body>
    <center>
      <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          `, '\n          <tr id="pagespace" title="', '" style="height:10px"></tr>\n          ', "\n          ", '\n        </tbody>\n      </table>\n    </center>\n    <script type="text/javascript" src="hn.js"><\/script>\n    ', "\n  </body>\n  </html>"])), op, title ? `${title} | Worker News` : "Worker News", headerEl({ op, id }), title, content, footerEl(), self.location.hostname === "news.workers.tools" ? html(_a5 || (_a5 = __template(['<script defer data-domain="news.workers.tools" src="https://plausible.io/js/plausible.js"><\/script>']))) : "");

  // src/routes/api/index.ts
  init_env();

  // src/routes/api/dom-api.ts
  init_env();

  // node_modules/.pnpm/@worker-tools+json-fetch@2.1.0-pre.4/node_modules/@worker-tools/json-fetch/esm/index.js
  init_env();

  // node_modules/.pnpm/@worker-tools+json-fetch@2.1.0-pre.4/node_modules/@worker-tools/json-fetch/esm/search-params-url.js
  init_env();

  // node_modules/.pnpm/@worker-tools+json-fetch@2.1.0-pre.4/node_modules/@worker-tools/json-fetch/esm/index.js
  function isBodyInit(b) {
    return b == null || typeof b === "string" || typeof Blob !== "undefined" && b instanceof Blob || typeof ArrayBuffer !== "undefined" && (b instanceof ArrayBuffer || ArrayBuffer.isView(b)) || typeof FormData !== "undefined" && b instanceof FormData || typeof URLSearchParams !== "undefined" && b instanceof URLSearchParams || typeof ReadableStream !== "undefined" && b instanceof ReadableStream;
  }
  var JSONRequest = class extends Request {
    constructor(input, init, replacer, space) {
      const { headers: _headers, body: _body, ..._init } = init || {};
      let isBI;
      const body = (isBI = isBodyInit(_body)) ? _body : JSON.stringify(_body, replacer, space);
      const headers = new Headers(_headers);
      if (!headers.has("Content-Type") && !isBI)
        headers.set("Content-Type", JSONRequest.contentType);
      if (!headers.has("Accept"))
        headers.set("Accept", JSONRequest.accept);
      super(input instanceof URL ? input.href : input, { headers, body, ..._init });
    }
  };
  Object.defineProperty(JSONRequest, "contentType", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "application/json;charset=UTF-8"
  });
  Object.defineProperty(JSONRequest, "accept", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "application/json, text/plain, */*"
  });
  var JSONResponse = class extends Response {
    constructor(body, init, replacer, space) {
      const { headers: _headers, ..._init } = init || {};
      let isBI;
      const _body = (isBI = isBodyInit(body)) ? body : JSON.stringify(body, replacer, space);
      const headers = new Headers(_headers);
      if (!headers.has("Content-Type") && !isBI)
        headers.set("Content-Type", JSONResponse.contentType);
      super(_body, { headers, ..._init });
    }
  };
  Object.defineProperty(JSONResponse, "contentType", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "application/json;charset=UTF-8"
  });

  // node_modules/.pnpm/event-target-to-async-iter@0.2.1/node_modules/event-target-to-async-iter/index.js
  init_env();
  var AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
  }).prototype);

  // node_modules/.pnpm/html-escaper@3.0.3/node_modules/html-escaper/esm/index.js
  init_env();
  var { replace } = "";

  // src/routes/api/iter.ts
  init_env();

  // src/routes/api/util.ts
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/index.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/dom/parser.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/symbols.js
  init_env();
  var CHANGED = Symbol("changed");
  var CLASS_LIST = Symbol("classList");
  var CUSTOM_ELEMENTS = Symbol("CustomElements");
  var CONTENT = Symbol("content");
  var DATASET = Symbol("dataset");
  var DOCTYPE = Symbol("doctype");
  var DOM_PARSER = Symbol("DOMParser");
  var END = Symbol("end");
  var EVENT_TARGET = Symbol("EventTarget");
  var GLOBALS = Symbol("globals");
  var IMAGE = Symbol("image");
  var MIME = Symbol("mime");
  var MUTATION_OBSERVER = Symbol("MutationObserver");
  var NEXT = Symbol("next");
  var OWNER_ELEMENT = Symbol("ownerElement");
  var PREV = Symbol("prev");
  var PRIVATE = Symbol("private");
  var SHEET = Symbol("sheet");
  var START = Symbol("start");
  var STYLE = Symbol("style");
  var UPGRADE = Symbol("upgrade");
  var VALUE = Symbol("value");

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/parse-from-string.js
  init_env();
  var HTMLParser2 = __toESM(require_lib7(), 1);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/constants.js
  init_env();
  var NODE_END = -1;
  var ELEMENT_NODE = 1;
  var ATTRIBUTE_NODE = 2;
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;
  var DOCUMENT_NODE = 9;
  var DOCUMENT_TYPE_NODE = 10;
  var DOCUMENT_FRAGMENT_NODE = 11;
  var SHOW_ALL = -1;
  var SHOW_ELEMENT = 1;
  var SHOW_TEXT = 4;
  var SHOW_COMMENT = 128;
  var DOCUMENT_POSITION_DISCONNECTED = 1;
  var DOCUMENT_POSITION_PRECEDING = 2;
  var DOCUMENT_POSITION_FOLLOWING = 4;
  var DOCUMENT_POSITION_CONTAINS = 8;
  var DOCUMENT_POSITION_CONTAINED_BY = 16;
  var DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
  var SVG_NAMESPACE = "http://www.w3.org/2000/svg";

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/object.js
  init_env();
  var {
    assign: assign2,
    create,
    defineProperties,
    entries,
    getOwnPropertyDescriptors,
    keys,
    setPrototypeOf
  } = Object;

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/utils.js
  init_env();
  var $String = String;
  var getEnd = (node) => node.nodeType === ELEMENT_NODE ? node[END] : node;
  var ignoreCase = ({ ownerDocument }) => ownerDocument[MIME].ignoreCase;
  var knownAdjacent = (prev, next) => {
    prev[NEXT] = next;
    next[PREV] = prev;
  };
  var knownBoundaries = (prev, current, next) => {
    knownAdjacent(prev, current);
    knownAdjacent(getEnd(current), next);
  };
  var knownSegment = (prev, start, end, next) => {
    knownAdjacent(prev, start);
    knownAdjacent(getEnd(end), next);
  };
  var knownSiblings = (prev, current, next) => {
    knownAdjacent(prev, current);
    knownAdjacent(current, next);
  };
  var localCase = ({ localName, ownerDocument }) => {
    return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
  };
  var setAdjacent = (prev, next) => {
    if (prev)
      prev[NEXT] = next;
    if (next)
      next[PREV] = prev;
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/custom-element-registry.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/shadow-roots.js
  init_env();
  var shadowRoots = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/custom-element-registry.js
  var reactive = false;
  var Classes = /* @__PURE__ */ new WeakMap();
  var customElements = /* @__PURE__ */ new WeakMap();
  var attributeChangedCallback = (element, attributeName, oldValue, newValue) => {
    if (reactive && customElements.has(element) && element.attributeChangedCallback && element.constructor.observedAttributes.includes(attributeName)) {
      element.attributeChangedCallback(attributeName, oldValue, newValue);
    }
  };
  var createTrigger = (method, isConnected2) => (element) => {
    if (customElements.has(element)) {
      const info = customElements.get(element);
      if (info.connected !== isConnected2 && element.isConnected === isConnected2) {
        info.connected = isConnected2;
        if (method in element)
          element[method]();
      }
    }
  };
  var triggerConnected = createTrigger("connectedCallback", true);
  var connectedCallback = (element) => {
    if (reactive) {
      triggerConnected(element);
      if (shadowRoots.has(element))
        element = shadowRoots.get(element).shadowRoot;
      let { [NEXT]: next, [END]: end } = element;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE)
          triggerConnected(next);
        next = next[NEXT];
      }
    }
  };
  var triggerDisconnected = createTrigger("disconnectedCallback", false);
  var disconnectedCallback = (element) => {
    if (reactive) {
      triggerDisconnected(element);
      if (shadowRoots.has(element))
        element = shadowRoots.get(element).shadowRoot;
      let { [NEXT]: next, [END]: end } = element;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE)
          triggerDisconnected(next);
        next = next[NEXT];
      }
    }
  };
  var CustomElementRegistry = class {
    constructor(ownerDocument) {
      this.ownerDocument = ownerDocument;
      this.registry = /* @__PURE__ */ new Map();
      this.waiting = /* @__PURE__ */ new Map();
      this.active = false;
    }
    define(localName, Class, options = {}) {
      const { ownerDocument, registry, waiting } = this;
      if (registry.has(localName))
        throw new Error("unable to redefine " + localName);
      if (Classes.has(Class))
        throw new Error("unable to redefine the same class: " + Class);
      this.active = reactive = true;
      const { extends: extend } = options;
      Classes.set(Class, {
        ownerDocument,
        options: { is: extend ? localName : "" },
        localName: extend || localName
      });
      const check = extend ? (element) => {
        return element.localName === extend && element.getAttribute("is") === localName;
      } : (element) => element.localName === localName;
      registry.set(localName, { Class, check });
      if (waiting.has(localName)) {
        for (const resolve of waiting.get(localName))
          resolve(Class);
        waiting.delete(localName);
      }
      ownerDocument.querySelectorAll(extend ? `${extend}[is="${localName}"]` : localName).forEach(this.upgrade, this);
    }
    upgrade(element) {
      if (customElements.has(element))
        return;
      const { ownerDocument, registry } = this;
      const ce = element.getAttribute("is") || element.localName;
      if (registry.has(ce)) {
        const { Class, check } = registry.get(ce);
        if (check(element)) {
          const { attributes, isConnected: isConnected2 } = element;
          for (const attr of attributes)
            element.removeAttributeNode(attr);
          const values = entries(element);
          for (const [key2] of values)
            delete element[key2];
          setPrototypeOf(element, Class.prototype);
          ownerDocument[UPGRADE] = { element, values };
          new Class(ownerDocument, ce);
          customElements.set(element, { connected: isConnected2 });
          for (const attr of attributes)
            element.setAttributeNode(attr);
          if (isConnected2 && element.connectedCallback)
            element.connectedCallback();
        }
      }
    }
    whenDefined(localName) {
      const { registry, waiting } = this;
      return new Promise((resolve) => {
        if (registry.has(localName))
          resolve(registry.get(localName).Class);
        else {
          if (!waiting.has(localName))
            waiting.set(localName, []);
          waiting.get(localName).push(resolve);
        }
      });
    }
    get(localName) {
      const info = this.registry.get(localName);
      return info && info.Class;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/parse-from-string.js
  var { Parser: Parser2 } = HTMLParser2;
  var notParsing = true;
  var append = (self2, node, active) => {
    const end = self2[END];
    node.parentNode = self2;
    knownBoundaries(end[PREV], node, end);
    if (active && node.nodeType === ELEMENT_NODE)
      connectedCallback(node);
    return node;
  };
  var attribute = (element, end, attribute2, value, active) => {
    attribute2[VALUE] = value;
    attribute2.ownerElement = element;
    knownSiblings(end[PREV], attribute2, end);
    if (attribute2.name === "class")
      element.className = value;
    if (active)
      attributeChangedCallback(element, attribute2.name, null, value);
  };
  var parseFromString = (document2, isHTML, markupLanguage) => {
    const { active, registry } = document2[CUSTOM_ELEMENTS];
    let node = document2;
    let ownerSVGElement = null;
    notParsing = false;
    const content = new Parser2({
      onprocessinginstruction(name, data) {
        if (name.toLowerCase() === "!doctype")
          document2.doctype = data.slice(name.length).trim();
      },
      onopentag(name, attributes) {
        let create3 = true;
        if (isHTML) {
          if (ownerSVGElement) {
            node = append(node, document2.createElementNS(SVG_NAMESPACE, name), active);
            node.ownerSVGElement = ownerSVGElement;
            create3 = false;
          } else if (name === "svg" || name === "SVG") {
            ownerSVGElement = document2.createElementNS(SVG_NAMESPACE, name);
            node = append(node, ownerSVGElement, active);
            create3 = false;
          } else if (active) {
            const ce = name.includes("-") ? name : attributes.is || "";
            if (ce && registry.has(ce)) {
              const { Class } = registry.get(ce);
              node = append(node, new Class(), active);
              delete attributes.is;
              create3 = false;
            }
          }
        }
        if (create3)
          node = append(node, document2.createElement(name), false);
        let end = node[END];
        for (const name2 of keys(attributes))
          attribute(node, end, document2.createAttribute(name2), attributes[name2], active);
      },
      oncomment(data) {
        append(node, document2.createComment(data), active);
      },
      ontext(text) {
        append(node, document2.createTextNode(text), active);
      },
      onclosetag() {
        if (isHTML && node === ownerSVGElement)
          ownerSVGElement = null;
        node = node.parentNode;
      }
    }, {
      lowerCaseAttributeNames: false,
      decodeEntities: true,
      xmlMode: !isHTML
    });
    content.write(markupLanguage);
    content.end();
    notParsing = true;
    return document2;
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/document.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/register-html-class.js
  init_env();
  var htmlClasses = /* @__PURE__ */ new Map();
  var registerHTMLClass = (names, Class) => {
    for (const name of [].concat(names)) {
      htmlClasses.set(name, Class);
      htmlClasses.set(name.toUpperCase(), Class);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/document.js
  init_env();
  var import_perf_hooks = __toESM(require_perf_hooks(), 1);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/facades.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/attr.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/jsdon.js
  init_env();
  var loopSegment = ({ [NEXT]: next, [END]: end }, json) => {
    while (next !== end) {
      switch (next.nodeType) {
        case ATTRIBUTE_NODE:
          attrAsJSON(next, json);
          break;
        case TEXT_NODE:
        case COMMENT_NODE:
          characterDataAsJSON(next, json);
          break;
        case ELEMENT_NODE:
          elementAsJSON(next, json);
          next = getEnd(next);
          break;
        case DOCUMENT_TYPE_NODE:
          documentTypeAsJSON(next, json);
          break;
      }
      next = next[NEXT];
    }
    const last = json.length - 1;
    const value = json[last];
    if (typeof value === "number" && value < 0)
      json[last] += NODE_END;
    else
      json.push(NODE_END);
  };
  var attrAsJSON = (attr, json) => {
    json.push(ATTRIBUTE_NODE, attr.name);
    const value = attr[VALUE].trim();
    if (value)
      json.push(value);
  };
  var characterDataAsJSON = (node, json) => {
    const value = node[VALUE];
    if (value.trim())
      json.push(node.nodeType, value);
  };
  var nonElementAsJSON = (node, json) => {
    json.push(node.nodeType);
    loopSegment(node, json);
  };
  var documentTypeAsJSON = ({ name, publicId, systemId }, json) => {
    json.push(DOCUMENT_TYPE_NODE, name);
    if (publicId)
      json.push(publicId);
    if (systemId)
      json.push(systemId);
  };
  var elementAsJSON = (element, json) => {
    json.push(ELEMENT_NODE, element.localName);
    loopSegment(element, json);
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/attributes.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/mutation-observer.js
  init_env();
  var createRecord = (type, target2, addedNodes, removedNodes, attributeName, oldValue) => ({ type, target: target2, addedNodes, removedNodes, attributeName, oldValue });
  var queueAttribute = (observer, target2, attributeName, attributeFilter, attributeOldValue, oldValue) => {
    if (!attributeFilter || attributeFilter.includes(attributeName)) {
      const { callback, records, scheduled } = observer;
      records.push(createRecord("attributes", target2, [], [], attributeName, attributeOldValue ? oldValue : void 0));
      if (!scheduled) {
        observer.scheduled = true;
        Promise.resolve().then(() => {
          observer.scheduled = false;
          callback(records.splice(0), observer);
        });
      }
    }
  };
  var attributeChangedCallback2 = (element, attributeName, oldValue) => {
    const { ownerDocument } = element;
    const { active, observers } = ownerDocument[MUTATION_OBSERVER];
    if (active) {
      for (const observer of observers) {
        for (const [
          target2,
          {
            childList,
            subtree,
            attributes,
            attributeFilter,
            attributeOldValue
          }
        ] of observer.nodes) {
          if (childList) {
            if (subtree && (target2 === ownerDocument || target2.contains(element)) || !subtree && target2.children.includes(element)) {
              queueAttribute(observer, element, attributeName, attributeFilter, attributeOldValue, oldValue);
              break;
            }
          } else if (attributes && target2 === element) {
            queueAttribute(observer, element, attributeName, attributeFilter, attributeOldValue, oldValue);
            break;
          }
        }
      }
    }
  };
  var moCallback = (element, parentNode) => {
    const { ownerDocument } = element;
    const { active, observers } = ownerDocument[MUTATION_OBSERVER];
    if (active) {
      for (const observer of observers) {
        for (const [target2, { subtree, childList, characterData }] of observer.nodes) {
          if (childList) {
            if (parentNode && (target2 === parentNode || subtree && target2.contains(parentNode)) || !parentNode && (subtree && (target2 === ownerDocument || target2.contains(element)) || !subtree && target2[characterData ? "childNodes" : "children"].includes(element))) {
              const { callback, records, scheduled } = observer;
              records.push(createRecord("childList", target2, parentNode ? [] : [element], parentNode ? [element] : []));
              if (!scheduled) {
                observer.scheduled = true;
                Promise.resolve().then(() => {
                  observer.scheduled = false;
                  callback(records.splice(0), observer);
                });
              }
              break;
            }
          }
        }
      }
    }
  };
  var MutationObserverClass = class {
    constructor(ownerDocument) {
      const observers = /* @__PURE__ */ new Set();
      this.observers = observers;
      this.active = false;
      this.class = class MutationObserver {
        constructor(callback) {
          this.callback = callback;
          this.nodes = /* @__PURE__ */ new Map();
          this.records = [];
          this.scheduled = false;
        }
        disconnect() {
          this.records.splice(0);
          this.nodes.clear();
          observers.delete(this);
          ownerDocument[MUTATION_OBSERVER].active = !!observers.size;
        }
        observe(target2, options = {
          subtree: false,
          childList: false,
          attributes: false,
          attributeFilter: null,
          attributeOldValue: false,
          characterData: false
        }) {
          if ("attributeOldValue" in options || "attributeFilter" in options)
            options.attributes = true;
          options.childList = !!options.childList;
          options.subtree = !!options.subtree;
          this.nodes.set(target2, options);
          observers.add(this);
          ownerDocument[MUTATION_OBSERVER].active = true;
        }
        takeRecords() {
          return this.records.splice(0);
        }
      };
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/attributes.js
  var emptyAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "class",
    "contenteditable",
    "controls",
    "default",
    "defer",
    "disabled",
    "draggable",
    "formnovalidate",
    "hidden",
    "id",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "style",
    "truespeed"
  ]);
  var setAttribute = (element, attribute2) => {
    const { [VALUE]: value, name } = attribute2;
    attribute2.ownerElement = element;
    knownSiblings(element, attribute2, element[NEXT]);
    if (name === "class")
      element.className = value;
    attributeChangedCallback2(element, name, null);
    attributeChangedCallback(element, name, null, value);
  };
  var removeAttribute = (element, attribute2) => {
    const { [VALUE]: value, name } = attribute2;
    knownAdjacent(attribute2[PREV], attribute2[NEXT]);
    attribute2.ownerElement = attribute2[PREV] = attribute2[NEXT] = null;
    if (name === "class")
      element[CLASS_LIST] = null;
    attributeChangedCallback2(element, name, value);
    attributeChangedCallback(element, name, value, null);
  };
  var booleanAttribute = {
    get(element, name) {
      return element.hasAttribute(name);
    },
    set(element, name, value) {
      if (value)
        element.setAttribute(name, "");
      else
        element.removeAttribute(name);
    }
  };
  var numericAttribute = {
    get(element, name) {
      return parseFloat(element.getAttribute(name) || 0);
    },
    set(element, name, value) {
      element.setAttribute(name, value);
    }
  };
  var stringAttribute = {
    get(element, name) {
      return element.getAttribute(name) || "";
    },
    set(element, name, value) {
      element.setAttribute(name, value);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/node.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/event-target.js
  init_env();
  var wm = /* @__PURE__ */ new WeakMap();
  function dispatch(event, listener) {
    if (typeof listener === "function")
      listener.call(event.target, event);
    else
      listener.handleEvent(event);
    return event._stopImmediatePropagationFlag;
  }
  function invokeListeners({ currentTarget, target: target2 }) {
    const map = wm.get(currentTarget);
    if (map && map.has(this.type)) {
      const listeners = map.get(this.type);
      if (currentTarget === target2) {
        this.eventPhase = this.AT_TARGET;
      } else {
        this.eventPhase = this.BUBBLING_PHASE;
      }
      this.currentTarget = currentTarget;
      this.target = target2;
      for (const [listener, options] of listeners) {
        if (options && options.once)
          listeners.delete(listener);
        if (dispatch(this, listener))
          break;
      }
      delete this.currentTarget;
      delete this.target;
      return this.cancelBubble;
    }
  }
  var DOMEventTarget = class {
    constructor() {
      wm.set(this, /* @__PURE__ */ new Map());
    }
    _getParent() {
      return null;
    }
    addEventListener(type, listener, options) {
      const map = wm.get(this);
      if (!map.has(type))
        map.set(type, /* @__PURE__ */ new Map());
      map.get(type).set(listener, options);
    }
    removeEventListener(type, listener) {
      const map = wm.get(this);
      if (map.has(type)) {
        const listeners = map.get(type);
        if (listeners.delete(listener) && !listeners.size)
          map.delete(type);
      }
    }
    dispatchEvent(event) {
      let node = this;
      event.eventPhase = event.CAPTURING_PHASE;
      while (node) {
        if (node.dispatchEvent)
          event._path.push({ currentTarget: node, target: this });
        node = event.bubbles && node._getParent && node._getParent();
      }
      event._path.some(invokeListeners, event);
      event._path = [];
      event.eventPhase = event.NONE;
      return !event.defaultPrevented;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/node-list.js
  init_env();
  var NodeList = class extends Array {
    item(i) {
      return i < this.length ? this[i] : null;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/node.js
  var getParentNodeCount = ({ parentNode }) => {
    let count = 0;
    while (parentNode) {
      count++;
      parentNode = parentNode.parentNode;
    }
    return count;
  };
  var Node = class extends DOMEventTarget {
    static get ELEMENT_NODE() {
      return ELEMENT_NODE;
    }
    static get ATTRIBUTE_NODE() {
      return ATTRIBUTE_NODE;
    }
    static get TEXT_NODE() {
      return TEXT_NODE;
    }
    static get COMMENT_NODE() {
      return COMMENT_NODE;
    }
    static get DOCUMENT_NODE() {
      return DOCUMENT_NODE;
    }
    static get DOCUMENT_FRAGMENT_NODE() {
      return DOCUMENT_FRAGMENT_NODE;
    }
    static get DOCUMENT_TYPE_NODE() {
      return DOCUMENT_TYPE_NODE;
    }
    constructor(ownerDocument, localName, nodeType) {
      super();
      this.ownerDocument = ownerDocument;
      this.localName = localName;
      this.nodeType = nodeType;
      this.parentNode = null;
      this[NEXT] = null;
      this[PREV] = null;
    }
    get ELEMENT_NODE() {
      return ELEMENT_NODE;
    }
    get ATTRIBUTE_NODE() {
      return ATTRIBUTE_NODE;
    }
    get TEXT_NODE() {
      return TEXT_NODE;
    }
    get COMMENT_NODE() {
      return COMMENT_NODE;
    }
    get DOCUMENT_NODE() {
      return DOCUMENT_NODE;
    }
    get DOCUMENT_FRAGMENT_NODE() {
      return DOCUMENT_FRAGMENT_NODE;
    }
    get DOCUMENT_TYPE_NODE() {
      return DOCUMENT_TYPE_NODE;
    }
    get baseURI() {
      const ownerDocument = this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument;
      if (ownerDocument) {
        const base = ownerDocument.querySelector("base");
        if (base)
          return base.getAttribute("href");
        const { location: location2 } = ownerDocument.defaultView;
        if (location2)
          return location2.href;
      }
      return null;
    }
    get isConnected() {
      return false;
    }
    get nodeName() {
      return this.localName;
    }
    get parentElement() {
      return null;
    }
    get previousSibling() {
      return null;
    }
    get previousElementSibling() {
      return null;
    }
    get nextSibling() {
      return null;
    }
    get nextElementSibling() {
      return null;
    }
    get childNodes() {
      return new NodeList();
    }
    get firstChild() {
      return null;
    }
    get lastChild() {
      return null;
    }
    get nodeValue() {
      return null;
    }
    set nodeValue(value) {
    }
    get textContent() {
      return null;
    }
    set textContent(value) {
    }
    normalize() {
    }
    cloneNode() {
      return null;
    }
    contains() {
      return false;
    }
    insertBefore(newNode, referenceNode) {
      return newNode;
    }
    appendChild(child) {
      return child;
    }
    replaceChild(newChild, oldChild) {
      return oldChild;
    }
    removeChild(child) {
      return child;
    }
    toString() {
      return "";
    }
    hasChildNodes() {
      return !!this.lastChild;
    }
    isSameNode(node) {
      return this === node;
    }
    compareDocumentPosition(target2) {
      let result = 0;
      if (this !== target2) {
        let self2 = getParentNodeCount(this);
        let other = getParentNodeCount(target2);
        if (self2 < other) {
          result += DOCUMENT_POSITION_FOLLOWING;
          if (this.contains(target2))
            result += DOCUMENT_POSITION_CONTAINED_BY;
        } else if (other < self2) {
          result += DOCUMENT_POSITION_PRECEDING;
          if (target2.contains(this))
            result += DOCUMENT_POSITION_CONTAINS;
        } else if (self2 && other) {
          const { childNodes } = this.parentNode;
          if (childNodes.indexOf(this) < childNodes.indexOf(target2))
            result += DOCUMENT_POSITION_FOLLOWING;
          else
            result += DOCUMENT_POSITION_PRECEDING;
        }
        if (!self2 || !other) {
          result += DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
          result += DOCUMENT_POSITION_DISCONNECTED;
        }
      }
      return result;
    }
    isEqualNode(node) {
      if (this === node)
        return true;
      if (this.nodeType === node.nodeType) {
        switch (this.nodeType) {
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            const aNodes = this.childNodes;
            const bNodes = node.childNodes;
            return aNodes.length === bNodes.length && aNodes.every((node2, i) => node2.isEqualNode(bNodes[i]));
          }
        }
        return this.toString() === node.toString();
      }
      return false;
    }
    _getParent() {
      return this.parentNode;
    }
    getRootNode() {
      let root = this;
      while (root.parentNode)
        root = root.parentNode;
      return root.nodeType === DOCUMENT_NODE ? root.documentElement : root;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/attr.js
  var QUOTE = /"/g;
  var Attr = class extends Node {
    constructor(ownerDocument, name, value = "") {
      super(ownerDocument, "#attribute", ATTRIBUTE_NODE);
      this.ownerElement = null;
      this.name = $String(name);
      this[VALUE] = $String(value);
      this[CHANGED] = false;
    }
    get value() {
      return this[VALUE];
    }
    set value(newValue) {
      const { [VALUE]: oldValue, name, ownerElement } = this;
      this[VALUE] = $String(newValue);
      this[CHANGED] = true;
      if (ownerElement) {
        attributeChangedCallback2(ownerElement, name, oldValue);
        attributeChangedCallback(ownerElement, name, oldValue, this[VALUE]);
      }
    }
    cloneNode() {
      const { ownerDocument, name, [VALUE]: value } = this;
      return new Attr(ownerDocument, name, value);
    }
    toString() {
      const { name, [VALUE]: value } = this;
      return emptyAttributes.has(name) && !value ? name : `${name}="${value.replace(QUOTE, "&quot;")}"`;
    }
    toJSON() {
      const json = [];
      attrAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/character-data.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/node.js
  init_env();
  var isConnected = ({ ownerDocument, parentNode }) => {
    while (parentNode) {
      if (parentNode === ownerDocument)
        return true;
      parentNode = parentNode.parentNode || parentNode.host;
    }
    return false;
  };
  var parentElement = ({ parentNode }) => {
    if (parentNode) {
      switch (parentNode.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          return null;
      }
    }
    return parentNode;
  };
  var previousSibling = ({ [PREV]: prev }) => {
    switch (prev ? prev.nodeType : 0) {
      case NODE_END:
        return prev[START];
      case TEXT_NODE:
      case COMMENT_NODE:
        return prev;
    }
    return null;
  };
  var nextSibling = (node) => {
    const next = getEnd(node)[NEXT];
    return next && (next.nodeType === NODE_END ? null : next);
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/non-document-type-child-node.js
  init_env();
  var nextElementSibling = (node) => {
    let next = nextSibling(node);
    while (next && next.nodeType !== ELEMENT_NODE)
      next = nextSibling(next);
    return next;
  };
  var previousElementSibling = (node) => {
    let prev = previousSibling(node);
    while (prev && prev.nodeType !== ELEMENT_NODE)
      prev = previousSibling(prev);
    return prev;
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/child-node.js
  init_env();
  var asFragment = (ownerDocument, nodes) => {
    const fragment = ownerDocument.createDocumentFragment();
    fragment.append(...nodes);
    return fragment;
  };
  var before = (node, nodes) => {
    const { ownerDocument, parentNode } = node;
    if (parentNode)
      parentNode.insertBefore(asFragment(ownerDocument, nodes), node);
  };
  var after = (node, nodes) => {
    const { ownerDocument, parentNode } = node;
    if (parentNode)
      parentNode.insertBefore(asFragment(ownerDocument, nodes), getEnd(node)[NEXT]);
  };
  var replaceWith = (node, nodes) => {
    const { ownerDocument, parentNode } = node;
    if (parentNode) {
      parentNode.insertBefore(asFragment(ownerDocument, nodes), node);
      node.remove();
    }
  };
  var remove = (prev, current, next) => {
    const { parentNode, nodeType } = current;
    if (prev || next) {
      setAdjacent(prev, next);
      current[PREV] = null;
      getEnd(current)[NEXT] = null;
    }
    if (parentNode) {
      current.parentNode = null;
      moCallback(current, parentNode);
      if (nodeType === ELEMENT_NODE)
        disconnectedCallback(current);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/character-data.js
  var CharacterData = class extends Node {
    constructor(ownerDocument, localName, nodeType, data) {
      super(ownerDocument, localName, nodeType);
      this[VALUE] = $String(data);
    }
    get isConnected() {
      return isConnected(this);
    }
    get parentElement() {
      return parentElement(this);
    }
    get previousSibling() {
      return previousSibling(this);
    }
    get nextSibling() {
      return nextSibling(this);
    }
    get previousElementSibling() {
      return previousElementSibling(this);
    }
    get nextElementSibling() {
      return nextElementSibling(this);
    }
    before(...nodes) {
      before(this, nodes);
    }
    after(...nodes) {
      after(this, nodes);
    }
    replaceWith(...nodes) {
      replaceWith(this, nodes);
    }
    remove() {
      remove(this[PREV], this, this[NEXT]);
    }
    get data() {
      return this[VALUE];
    }
    set data(value) {
      this[VALUE] = $String(value);
      moCallback(this, this.parentNode);
    }
    get nodeValue() {
      return this.data;
    }
    set nodeValue(value) {
      this.data = value;
    }
    get textContent() {
      return this.data;
    }
    set textContent(value) {
      this.data = value;
    }
    get length() {
      return this.data.length;
    }
    substringData(offset, count) {
      return this.data.substr(offset, count);
    }
    appendData(data) {
      this.data += data;
    }
    insertData(offset, data) {
      const { data: t } = this;
      this.data = t.slice(0, offset) + data + t.slice(offset);
    }
    deleteData(offset, count) {
      const { data: t } = this;
      this.data = t.slice(0, offset) + t.slice(offset + count);
    }
    replaceData(offset, count, data) {
      const { data: t } = this;
      this.data = t.slice(0, offset) + data + t.slice(offset + count);
    }
    toJSON() {
      const json = [];
      characterDataAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/comment.js
  init_env();
  var Comment = class extends CharacterData {
    constructor(ownerDocument, data = "") {
      super(ownerDocument, "#comment", COMMENT_NODE, data);
    }
    cloneNode() {
      const { ownerDocument, [VALUE]: data } = this;
      return new Comment(ownerDocument, data);
    }
    toString() {
      return `<!--${this[VALUE]}-->`;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/document-fragment.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/non-element-parent-node.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/parent-node.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/matches.js
  init_env();
  var CSSselect = __toESM(require_lib9(), 1);
  var { isArray } = Array;
  var isTag = ({ nodeType }) => nodeType === ELEMENT_NODE;
  var existsOne = (test, elements) => elements.some((element) => isTag(element) && (test(element) || existsOne(test, getChildren(element))));
  var getAttributeValue = (element, name) => name === "class" ? element.classList.value : element.getAttribute(name);
  var getChildren = ({ childNodes }) => childNodes;
  var getName = (element) => {
    const { localName } = element;
    return ignoreCase(element) ? localName.toLowerCase() : localName;
  };
  var getParent = ({ parentNode }) => parentNode;
  var getSiblings = (element) => {
    const { parentNode } = element;
    return parentNode ? getChildren(parentNode) : element;
  };
  var getText = (node) => {
    if (isArray(node))
      return node.map(getText).join("");
    if (isTag(node))
      return getText(getChildren(node));
    if (node.nodeType === TEXT_NODE)
      return node.data;
    return "";
  };
  var hasAttrib = (element, name) => element.hasAttribute(name);
  var removeSubsets = (nodes) => {
    let { length } = nodes;
    while (length--) {
      const node = nodes[length];
      if (length && -1 < nodes.lastIndexOf(node, length - 1)) {
        nodes.splice(length, 1);
        continue;
      }
      for (let { parentNode } = node; parentNode; parentNode = parentNode.parentNode) {
        if (nodes.includes(parentNode)) {
          nodes.splice(length, 1);
          break;
        }
      }
    }
    return nodes;
  };
  var findAll = (test, nodes) => {
    const matches2 = [];
    for (const node of nodes) {
      if (isTag(node)) {
        if (test(node))
          matches2.push(node);
        matches2.push(...findAll(test, getChildren(node)));
      }
    }
    return matches2;
  };
  var findOne = (test, nodes) => {
    for (let node of nodes)
      if (test(node) || (node = findOne(test, getChildren(node))))
        return node;
    return null;
  };
  var adapter = {
    isTag,
    existsOne,
    getAttributeValue,
    getChildren,
    getName,
    getParent,
    getSiblings,
    getText,
    hasAttrib,
    removeSubsets,
    findAll,
    findOne
  };
  var prepareMatch = (element, selectors) => {
    return CSSselect.compile(selectors, {
      xmlMode: !ignoreCase(element),
      adapter
    });
  };
  var matches = (element, selectors) => {
    return CSSselect.is(element, selectors, {
      strict: true,
      xmlMode: !ignoreCase(element),
      adapter
    });
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/text.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/text-escaper.js
  init_env();
  var { replace: replace2 } = "";
  var ca = /[<>&\xA0]/g;
  var esca = {
    "\xA0": "&nbsp;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  var pe = (m) => esca[m];
  var escape = (es) => replace2.call(es, ca, pe);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/text.js
  var Text = class extends CharacterData {
    constructor(ownerDocument, data = "") {
      super(ownerDocument, "#text", TEXT_NODE, data);
    }
    get wholeText() {
      const text = [];
      let { previousSibling: previousSibling2, nextSibling: nextSibling2 } = this;
      while (previousSibling2) {
        if (previousSibling2.nodeType === TEXT_NODE)
          text.unshift(previousSibling2[VALUE]);
        else
          break;
        previousSibling2 = previousSibling2.previousSibling;
      }
      text.push(this[VALUE]);
      while (nextSibling2) {
        if (nextSibling2.nodeType === TEXT_NODE)
          text.push(nextSibling2[VALUE]);
        else
          break;
        nextSibling2 = nextSibling2.nextSibling;
      }
      return text.join("");
    }
    cloneNode() {
      const { ownerDocument, [VALUE]: data } = this;
      return new Text(ownerDocument, data);
    }
    toString() {
      return escape(this[VALUE]);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/parent-node.js
  var isNode = (node) => node instanceof Node;
  var insert = (parentNode, child, nodes) => {
    const { ownerDocument } = parentNode;
    for (const node of nodes)
      parentNode.insertBefore(isNode(node) ? node : new Text(ownerDocument, node), child);
  };
  var ParentNode = class extends Node {
    constructor(ownerDocument, localName, nodeType) {
      super(ownerDocument, localName, nodeType);
      this[PRIVATE] = null;
      this[NEXT] = this[END] = {
        [NEXT]: null,
        [PREV]: this,
        [START]: this,
        nodeType: NODE_END,
        ownerDocument: this.ownerDocument,
        parentNode: null
      };
    }
    get childNodes() {
      const childNodes = new NodeList();
      let { firstChild } = this;
      while (firstChild) {
        childNodes.push(firstChild);
        firstChild = nextSibling(firstChild);
      }
      return childNodes;
    }
    get children() {
      const children = new NodeList();
      let { firstElementChild } = this;
      while (firstElementChild) {
        children.push(firstElementChild);
        firstElementChild = nextElementSibling(firstElementChild);
      }
      return children;
    }
    get firstChild() {
      let { [NEXT]: next, [END]: end } = this;
      while (next.nodeType === ATTRIBUTE_NODE)
        next = next[NEXT];
      return next === end ? null : next;
    }
    get firstElementChild() {
      let { firstChild } = this;
      while (firstChild) {
        if (firstChild.nodeType === ELEMENT_NODE)
          return firstChild;
        firstChild = nextSibling(firstChild);
      }
      return null;
    }
    get lastChild() {
      const prev = this[END][PREV];
      switch (prev.nodeType) {
        case NODE_END:
          return prev[START];
        case ATTRIBUTE_NODE:
          return null;
      }
      return prev === this ? null : prev;
    }
    get lastElementChild() {
      let { lastChild } = this;
      while (lastChild) {
        if (lastChild.nodeType === ELEMENT_NODE)
          return lastChild;
        lastChild = previousSibling(lastChild);
      }
      return null;
    }
    get childElementCount() {
      return this.children.length;
    }
    prepend(...nodes) {
      insert(this, this.firstChild, nodes);
    }
    append(...nodes) {
      insert(this, this[END], nodes);
    }
    replaceChildren(...nodes) {
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end && next.nodeType === ATTRIBUTE_NODE)
        next = next[NEXT];
      while (next !== end) {
        const after2 = getEnd(next)[NEXT];
        next.remove();
        next = after2;
      }
      if (nodes.length)
        insert(this, end, nodes);
    }
    getElementsByClassName(className) {
      const elements = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && next.hasAttribute("class") && next.classList.has(className))
          elements.push(next);
        next = next[NEXT];
      }
      return elements;
    }
    getElementsByTagName(tagName15) {
      const elements = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && (next.localName === tagName15 || localCase(next) === tagName15))
          elements.push(next);
        next = next[NEXT];
      }
      return elements;
    }
    querySelector(selectors) {
      const matches2 = prepareMatch(this, selectors);
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && matches2(next))
          return next;
        next = next[NEXT];
      }
      return null;
    }
    querySelectorAll(selectors) {
      const matches2 = prepareMatch(this, selectors);
      const elements = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && matches2(next))
          elements.push(next);
        next = next[NEXT];
      }
      return elements;
    }
    appendChild(node) {
      return this.insertBefore(node, this[END]);
    }
    contains(node) {
      let parentNode = node;
      while (parentNode && parentNode !== this)
        parentNode = parentNode.parentNode;
      return parentNode === this;
    }
    insertBefore(node, before2 = null) {
      if (node === before2)
        return node;
      if (node === this)
        throw new Error("unable to append a node to itself");
      const next = before2 || this[END];
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node.remove();
          node.parentNode = this;
          knownBoundaries(next[PREV], node, next);
          moCallback(node, null);
          connectedCallback(node);
          break;
        case DOCUMENT_FRAGMENT_NODE: {
          let { [PRIVATE]: parentNode, firstChild, lastChild } = node;
          if (firstChild) {
            knownSegment(next[PREV], firstChild, lastChild, next);
            knownAdjacent(node, node[END]);
            if (parentNode)
              parentNode.replaceChildren();
            do {
              firstChild.parentNode = this;
              moCallback(firstChild, null);
              if (firstChild.nodeType === ELEMENT_NODE)
                connectedCallback(firstChild);
            } while (firstChild !== lastChild && (firstChild = nextSibling(firstChild)));
          }
          break;
        }
        case TEXT_NODE:
        case COMMENT_NODE:
          node.remove();
        default:
          node.parentNode = this;
          knownSiblings(next[PREV], node, next);
          moCallback(node, null);
          break;
      }
      return node;
    }
    normalize() {
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        const { [NEXT]: $next, [PREV]: $prev, nodeType } = next;
        if (nodeType === TEXT_NODE) {
          if (!next[VALUE])
            next.remove();
          else if ($prev && $prev.nodeType === TEXT_NODE) {
            $prev.textContent += next.textContent;
            next.remove();
          }
        }
        next = $next;
      }
    }
    removeChild(node) {
      if (node.parentNode !== this)
        throw new Error("node is not a child");
      node.remove();
      return node;
    }
    replaceChild(node, replaced) {
      const next = getEnd(replaced)[NEXT];
      replaced.remove();
      this.insertBefore(node, next);
      return replaced;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/non-element-parent-node.js
  var NonElementParentNode = class extends ParentNode {
    getElementById(id) {
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && next.id === id)
          return next;
        next = next[NEXT];
      }
      return null;
    }
    cloneNode(deep) {
      const { ownerDocument, constructor } = this;
      const nonEPN = new constructor(ownerDocument);
      if (deep) {
        const { [END]: end } = nonEPN;
        for (const node of this.childNodes)
          nonEPN.insertBefore(node.cloneNode(deep), end);
      }
      return nonEPN;
    }
    toString() {
      const { childNodes, localName } = this;
      return `<${localName}>${childNodes.join("")}</${localName}>`;
    }
    toJSON() {
      const json = [];
      nonElementAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/document-fragment.js
  var DocumentFragment = class extends NonElementParentNode {
    constructor(ownerDocument) {
      super(ownerDocument, "#document-fragment", DOCUMENT_FRAGMENT_NODE);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/document-type.js
  init_env();
  var DocumentType = class extends Node {
    constructor(ownerDocument, name, publicId = "", systemId = "") {
      super(ownerDocument, "#document-type", DOCUMENT_TYPE_NODE);
      this.name = name;
      this.publicId = publicId;
      this.systemId = systemId;
    }
    cloneNode() {
      const { ownerDocument, name, publicId, systemId } = this;
      return new DocumentType(ownerDocument, name, publicId, systemId);
    }
    toString() {
      const { name, publicId, systemId } = this;
      const hasPublic = 0 < publicId.length;
      const str = [name];
      if (hasPublic)
        str.push("PUBLIC", `"${publicId}"`);
      if (systemId.length) {
        if (!hasPublic)
          str.push("SYSTEM");
        str.push(`"${systemId}"`);
      }
      return `<!DOCTYPE ${str.join(" ")}>`;
    }
    toJSON() {
      const json = [];
      documentTypeAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/element.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/mixin/inner-html.js
  init_env();
  var getInnerHtml = (node) => node.childNodes.join("");
  var setInnerHtml = (node, html2) => {
    const { ownerDocument } = node;
    const { constructor } = ownerDocument;
    const document2 = new constructor();
    document2[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
    const { childNodes } = parseFromString(document2, ignoreCase(node), html2);
    node.replaceChildren(...childNodes);
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/dom/string-map.js
  init_env();

  // node_modules/.pnpm/uhyphen@0.1.0/node_modules/uhyphen/esm/index.js
  init_env();
  var esm_default = (camel) => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, "$2$5-$3$6").toLowerCase();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/dom/string-map.js
  var refs = /* @__PURE__ */ new WeakMap();
  var key = (name) => `data-${esm_default(name)}`;
  var prop = (name) => name.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());
  var handler2 = {
    get(dataset, name) {
      if (name in dataset)
        return refs.get(dataset).getAttribute(key(name));
    },
    set(dataset, name, value) {
      dataset[name] = value;
      refs.get(dataset).setAttribute(key(name), value);
      return true;
    },
    deleteProperty(dataset, name) {
      if (name in dataset)
        refs.get(dataset).removeAttribute(key(name));
      return delete dataset[name];
    }
  };
  var DOMStringMap = class {
    constructor(ref) {
      for (const { name, value } of ref.attributes) {
        if (/^data-/.test(name))
          this[prop(name)] = value;
      }
      refs.set(this, ref);
      return new Proxy(this, handler2);
    }
  };
  setPrototypeOf(DOMStringMap.prototype, null);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/dom/token-list.js
  init_env();
  var { add } = Set.prototype;
  var addTokens = (self2, tokens) => {
    for (const token of tokens) {
      if (token)
        add.call(self2, token);
    }
  };
  var update = ({ [OWNER_ELEMENT]: ownerElement, value }) => {
    const attribute2 = ownerElement.getAttributeNode("class");
    if (attribute2)
      attribute2.value = value;
    else
      setAttribute(ownerElement, new Attr(ownerElement.ownerDocument, "class", value));
  };
  var DOMTokenList = class extends Set {
    constructor(ownerElement) {
      super();
      this[OWNER_ELEMENT] = ownerElement;
      const attribute2 = ownerElement.getAttributeNode("class");
      if (attribute2)
        addTokens(this, attribute2.value.split(/\s+/));
    }
    get length() {
      return this.size;
    }
    get value() {
      return [...this].join(" ");
    }
    add(...tokens) {
      addTokens(this, tokens);
      update(this);
    }
    contains(token) {
      return this.has(token);
    }
    remove(...tokens) {
      for (const token of tokens)
        this.delete(token);
      update(this);
    }
    toggle(token, force) {
      if (this.has(token)) {
        if (force)
          return true;
        this.delete(token);
        update(this);
      } else if (force || arguments.length === 1) {
        super.add(token);
        update(this);
        return true;
      }
      return false;
    }
    replace(token, newToken) {
      if (this.has(token)) {
        this.delete(token);
        super.add(newToken);
        update(this);
        return true;
      }
      return false;
    }
    supports() {
      return true;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/css-style-declaration.js
  init_env();
  var refs2 = /* @__PURE__ */ new WeakMap();
  var getKeys = (style) => [...style.keys()].filter((key2) => key2 !== PRIVATE);
  var updateKeys = (style) => {
    const attr = refs2.get(style).getAttributeNode("style");
    if (!attr || attr[CHANGED] || style.get(PRIVATE) !== attr) {
      style.clear();
      if (attr) {
        style.set(PRIVATE, attr);
        for (const rule of attr[VALUE].split(/\s*;\s*/)) {
          let [key2, ...rest] = rule.split(":");
          if (rest.length > 0) {
            key2 = key2.trim();
            const value = rest.join(":").trim();
            if (key2 && value)
              style.set(key2, value);
          }
        }
      }
    }
    return attr;
  };
  var handler3 = {
    get(style, name) {
      if (name in prototype)
        return style[name];
      updateKeys(style);
      if (name === "length")
        return getKeys(style).length;
      if (/^\d+$/.test(name))
        return getKeys(style)[name];
      return style.get(esm_default(name));
    },
    set(style, name, value) {
      if (name === "cssText")
        style[name] = value;
      else {
        let attr = updateKeys(style);
        if (value == null)
          style.delete(esm_default(name));
        else
          style.set(esm_default(name), value);
        if (!attr) {
          const element = refs2.get(style);
          attr = element.ownerDocument.createAttribute("style");
          element.setAttributeNode(attr);
          style.set(PRIVATE, attr);
        }
        attr[CHANGED] = false;
        attr[VALUE] = style.toString();
      }
      return true;
    }
  };
  var CSSStyleDeclaration = class extends Map {
    constructor(element) {
      super();
      refs2.set(this, element);
      return new Proxy(this, handler3);
    }
    get cssText() {
      return this.toString();
    }
    set cssText(value) {
      refs2.get(this).setAttribute("style", value);
    }
    getPropertyValue(name) {
      const self2 = this[PRIVATE];
      return handler3.get(self2, name);
    }
    setProperty(name, value) {
      const self2 = this[PRIVATE];
      handler3.set(self2, name, value);
    }
    removeProperty(name) {
      const self2 = this[PRIVATE];
      handler3.set(self2, name, null);
    }
    [Symbol.iterator]() {
      const keys2 = getKeys(this[PRIVATE]);
      const { length } = keys2;
      let i = 0;
      return {
        next() {
          const done = i === length;
          return { done, value: done ? null : keys2[i++] };
        }
      };
    }
    get [PRIVATE]() {
      return this;
    }
    toString() {
      const self2 = this[PRIVATE];
      updateKeys(self2);
      const cssText = [];
      self2.forEach(push, cssText);
      return cssText.join(";");
    }
  };
  var { prototype } = CSSStyleDeclaration;
  function push(value, key2) {
    if (key2 !== PRIVATE)
      this.push(`${key2}:${value}`);
  }

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/event.js
  init_env();
  var BUBBLING_PHASE = 3;
  var AT_TARGET = 2;
  var CAPTURING_PHASE = 1;
  var NONE = 0;
  var GlobalEvent = class {
    static get BUBBLING_PHASE() {
      return BUBBLING_PHASE;
    }
    static get AT_TARGET() {
      return AT_TARGET;
    }
    static get CAPTURING_PHASE() {
      return CAPTURING_PHASE;
    }
    static get NONE() {
      return NONE;
    }
    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = !!eventInitDict.bubbles;
      this.cancelBubble = false;
      this._stopImmediatePropagationFlag = false;
      this.cancelable = !!eventInitDict.cancelable;
      this.eventPhase = this.NONE;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.originalTarget = null;
      this.returnValue = null;
      this.srcElement = null;
      this.target = null;
      this._path = [];
    }
    get BUBBLING_PHASE() {
      return BUBBLING_PHASE;
    }
    get AT_TARGET() {
      return AT_TARGET;
    }
    get CAPTURING_PHASE() {
      return CAPTURING_PHASE;
    }
    get NONE() {
      return NONE;
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
    composedPath() {
      return this._path;
    }
    stopPropagation() {
      this.cancelBubble = true;
    }
    stopImmediatePropagation() {
      this.stopPropagation();
      this._stopImmediatePropagationFlag = true;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/named-node-map.js
  init_env();
  var NamedNodeMap = class extends Array {
    constructor(ownerElement) {
      super();
      this.ownerElement = ownerElement;
    }
    getNamedItem(name) {
      return this.ownerElement.getAttributeNode(name);
    }
    setNamedItem(attr) {
      this.ownerElement.setAttributeNode(attr);
      this.unshift(attr);
    }
    removeNamedItem(name) {
      const item = this.getNamedItem(name);
      this.ownerElement.removeAttribute(name);
      this.splice(this.indexOf(item), 1);
    }
    item(index) {
      return index < this.length ? this[index] : null;
    }
    getNamedItemNS(_, name) {
      return this.getNamedItem(name);
    }
    setNamedItemNS(_, attr) {
      return this.setNamedItem(attr);
    }
    removeNamedItemNS(_, name) {
      return this.removeNamedItem(name);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/shadow-root.js
  init_env();
  var ShadowRoot = class extends NonElementParentNode {
    constructor(host) {
      super(host.ownerDocument, "#shadow-root", DOCUMENT_FRAGMENT_NODE);
      this.host = host;
    }
    get innerHTML() {
      return getInnerHtml(this);
    }
    set innerHTML(html2) {
      setInnerHtml(this, html2);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/element.js
  var attributesHandler = {
    get(target2, key2) {
      return key2 in target2 ? target2[key2] : target2.find(({ name }) => name === key2);
    }
  };
  var create2 = (ownerDocument, element, localName) => {
    if ("ownerSVGElement" in element) {
      const svg = ownerDocument.createElementNS(SVG_NAMESPACE, localName);
      svg.ownerSVGElement = element.ownerSVGElement;
      return svg;
    }
    return ownerDocument.createElement(localName);
  };
  var isVoid = ({ localName, ownerDocument }) => {
    return ownerDocument[MIME].voidElements.test(localName);
  };
  var Element = class extends ParentNode {
    constructor(ownerDocument, localName) {
      super(ownerDocument, localName, ELEMENT_NODE);
      this[CLASS_LIST] = null;
      this[DATASET] = null;
      this[STYLE] = null;
    }
    get isConnected() {
      return isConnected(this);
    }
    get parentElement() {
      return parentElement(this);
    }
    get previousSibling() {
      return previousSibling(this);
    }
    get nextSibling() {
      return nextSibling(this);
    }
    get previousElementSibling() {
      return previousElementSibling(this);
    }
    get nextElementSibling() {
      return nextElementSibling(this);
    }
    before(...nodes) {
      before(this, nodes);
    }
    after(...nodes) {
      after(this, nodes);
    }
    replaceWith(...nodes) {
      replaceWith(this, nodes);
    }
    remove() {
      remove(this[PREV], this, this[END][NEXT]);
    }
    get id() {
      return stringAttribute.get(this, "id");
    }
    set id(value) {
      stringAttribute.set(this, "id", value);
    }
    get className() {
      return this.classList.value;
    }
    set className(value) {
      const { classList } = this;
      classList.clear();
      classList.add(...value.split(/\s+/));
    }
    get nodeName() {
      return localCase(this);
    }
    get tagName() {
      return localCase(this);
    }
    get classList() {
      return this[CLASS_LIST] || (this[CLASS_LIST] = new DOMTokenList(this));
    }
    get dataset() {
      return this[DATASET] || (this[DATASET] = new DOMStringMap(this));
    }
    get nonce() {
      return stringAttribute.get(this, "nonce");
    }
    set nonce(value) {
      stringAttribute.set(this, "nonce", value);
    }
    get style() {
      return this[STYLE] || (this[STYLE] = new CSSStyleDeclaration(this));
    }
    get tabIndex() {
      return numericAttribute.get(this, "tabindex") || -1;
    }
    set tabIndex(value) {
      numericAttribute.set(this, "tabindex", value);
    }
    get innerText() {
      return this.textContent;
    }
    get textContent() {
      const text = [];
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === TEXT_NODE)
          text.push(next.textContent);
        next = next[NEXT];
      }
      return text.join("");
    }
    set textContent(text) {
      this.replaceChildren();
      if (text)
        this.appendChild(new Text(this.ownerDocument, text));
    }
    get innerHTML() {
      return getInnerHtml(this);
    }
    set innerHTML(html2) {
      setInnerHtml(this, html2);
    }
    get outerHTML() {
      return this.toString();
    }
    set outerHTML(html2) {
      const template = this.ownerDocument.createElement("");
      template.innerHTML = html2;
      this.replaceWith(...template.childNodes);
    }
    get attributes() {
      const attributes = new NamedNodeMap(this);
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        attributes.push(next);
        next = next[NEXT];
      }
      return new Proxy(attributes, attributesHandler);
    }
    focus() {
      this.dispatchEvent(new GlobalEvent("focus"));
    }
    getAttribute(name) {
      if (name === "class")
        return this.className;
      const attribute2 = this.getAttributeNode(name);
      return attribute2 && attribute2.value;
    }
    getAttributeNode(name) {
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        if (next.name === name)
          return next;
        next = next[NEXT];
      }
      return null;
    }
    getAttributeNames() {
      const attributes = new NodeList();
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        attributes.push(next.name);
        next = next[NEXT];
      }
      return attributes;
    }
    hasAttribute(name) {
      return !!this.getAttributeNode(name);
    }
    hasAttributes() {
      return this[NEXT].nodeType === ATTRIBUTE_NODE;
    }
    removeAttribute(name) {
      if (name === "class" && this[CLASS_LIST])
        this[CLASS_LIST].clear();
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        if (next.name === name) {
          removeAttribute(this, next);
          return;
        }
        next = next[NEXT];
      }
    }
    removeAttributeNode(attribute2) {
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        if (next === attribute2) {
          removeAttribute(this, next);
          return;
        }
        next = next[NEXT];
      }
    }
    setAttribute(name, value) {
      if (name === "class")
        this.className = value;
      else {
        const attribute2 = this.getAttributeNode(name);
        if (attribute2)
          attribute2.value = value;
        else
          setAttribute(this, new Attr(this.ownerDocument, name, value));
      }
    }
    setAttributeNode(attribute2) {
      const { name } = attribute2;
      const previously = this.getAttributeNode(name);
      if (previously !== attribute2) {
        if (previously)
          this.removeAttributeNode(previously);
        const { ownerElement } = attribute2;
        if (ownerElement)
          ownerElement.removeAttributeNode(attribute2);
        setAttribute(this, attribute2);
      }
      return previously;
    }
    toggleAttribute(name, force) {
      if (this.hasAttribute(name)) {
        if (!force) {
          this.removeAttribute(name);
          return false;
        }
        return true;
      } else if (force || arguments.length === 1) {
        this.setAttribute(name, "");
        return true;
      }
      return false;
    }
    get shadowRoot() {
      if (shadowRoots.has(this)) {
        const { mode, shadowRoot } = shadowRoots.get(this);
        if (mode === "open")
          return shadowRoot;
      }
      return null;
    }
    attachShadow(init) {
      if (shadowRoots.has(this))
        throw new Error("operation not supported");
      const shadowRoot = new ShadowRoot(this);
      shadowRoot.append(...this.childNodes);
      shadowRoots.set(this, {
        mode: init.mode,
        shadowRoot
      });
      return shadowRoot;
    }
    matches(selectors) {
      return matches(this, selectors);
    }
    closest(selectors) {
      let parentElement2 = this;
      const matches2 = prepareMatch(parentElement2, selectors);
      while (parentElement2 && !matches2(parentElement2))
        parentElement2 = parentElement2.parentElement;
      return parentElement2;
    }
    insertAdjacentElement(position3, element) {
      const { parentElement: parentElement2 } = this;
      switch (position3) {
        case "beforebegin":
          if (parentElement2) {
            parentElement2.insertBefore(element, this);
            break;
          }
          return null;
        case "afterbegin":
          this.insertBefore(element, this.firstChild);
          break;
        case "beforeend":
          this.insertBefore(element, null);
          break;
        case "afterend":
          if (parentElement2) {
            parentElement2.insertBefore(element, this.nextSibling);
            break;
          }
          return null;
      }
      return element;
    }
    insertAdjacentHTML(position3, html2) {
      const template = this.ownerDocument.createElement("template");
      template.innerHTML = html2;
      this.insertAdjacentElement(position3, template.content);
    }
    insertAdjacentText(position3, text) {
      const node = this.ownerDocument.createTextNode(text);
      this.insertAdjacentElement(position3, node);
    }
    cloneNode(deep = false) {
      const { ownerDocument, localName } = this;
      const addNext = (next2) => {
        next2.parentNode = parentNode;
        knownAdjacent($next, next2);
        $next = next2;
      };
      const clone = create2(ownerDocument, this, localName);
      let parentNode = clone, $next = clone;
      let { [NEXT]: next, [END]: prev } = this;
      while (next !== prev && (deep || next.nodeType === ATTRIBUTE_NODE)) {
        switch (next.nodeType) {
          case NODE_END:
            knownAdjacent($next, parentNode[END]);
            $next = parentNode[END];
            parentNode = parentNode.parentNode;
            break;
          case ELEMENT_NODE: {
            const node = create2(ownerDocument, next, next.localName);
            addNext(node);
            parentNode = node;
            break;
          }
          case ATTRIBUTE_NODE:
          case TEXT_NODE:
          case COMMENT_NODE:
            addNext(next.cloneNode(deep));
            break;
        }
        next = next[NEXT];
      }
      knownAdjacent($next, clone[END]);
      return clone;
    }
    toString() {
      const out = [];
      const { [END]: end } = this;
      let next = { [NEXT]: this };
      let isOpened = false;
      do {
        next = next[NEXT];
        switch (next.nodeType) {
          case ATTRIBUTE_NODE: {
            const attr = " " + next;
            switch (attr) {
              case " id":
              case " class":
              case " style":
                break;
              default:
                out.push(attr);
            }
            break;
          }
          case NODE_END: {
            const start = next[START];
            if (isOpened) {
              if ("ownerSVGElement" in start)
                out.push(" />");
              else if (isVoid(start))
                out.push(ignoreCase(start) ? ">" : " />");
              else
                out.push(`></${start.localName}>`);
              isOpened = false;
            } else
              out.push(`</${start.localName}>`);
            break;
          }
          case ELEMENT_NODE:
            if (isOpened)
              out.push(">");
            if (next.toString !== this.toString) {
              out.push(next.toString());
              next = next[END];
              isOpened = false;
            } else {
              out.push(`<${next.localName}`);
              isOpened = true;
            }
            break;
          case TEXT_NODE:
          case COMMENT_NODE:
            out.push((isOpened ? ">" : "") + next);
            isOpened = false;
            break;
        }
      } while (next !== end);
      return out.join("");
    }
    toJSON() {
      const json = [];
      elementAsJSON(this, json);
      return json;
    }
    getAttributeNS(_, name) {
      return this.getAttribute(name);
    }
    getElementsByTagNameNS(_, name) {
      return this.getElementsByTagName(name);
    }
    hasAttributeNS(_, name) {
      return this.hasAttribute(name);
    }
    removeAttributeNS(_, name) {
      this.removeAttribute(name);
    }
    setAttributeNS(_, name, value) {
      this.setAttribute(name, value);
    }
    setAttributeNodeNS(attr) {
      return this.setAttributeNode(attr);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/svg/element.js
  init_env();
  var classNames = /* @__PURE__ */ new WeakMap();
  var handler4 = {
    get(target2, name) {
      return target2[name];
    },
    set(target2, name, value) {
      target2[name] = value;
      return true;
    }
  };
  var SVGElement = class extends Element {
    constructor(ownerDocument, localName, ownerSVGElement = null) {
      super(ownerDocument, localName);
      this.ownerSVGElement = ownerSVGElement;
    }
    get className() {
      if (!classNames.has(this))
        classNames.set(this, new Proxy({ baseVal: "", animVal: "" }, handler4));
      return classNames.get(this);
    }
    set className(value) {
      const { classList } = this;
      classList.clear();
      classList.add(...value.split(/\s+/));
    }
    getAttribute(name) {
      return name === "class" ? [...this.classList].join(" ") : super.getAttribute(name);
    }
    setAttribute(name, value) {
      if (name === "class")
        this.className = value;
      else if (name === "style") {
        const { className } = this;
        className.baseVal = className.animVal = value;
      }
      super.setAttribute(name, value);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/facades.js
  var illegalConstructor = () => {
    throw new TypeError("Illegal constructor");
  };
  function Attr2() {
    illegalConstructor();
  }
  setPrototypeOf(Attr2, Attr);
  Attr2.prototype = Attr.prototype;
  function CharacterData2() {
    illegalConstructor();
  }
  setPrototypeOf(CharacterData2, CharacterData);
  CharacterData2.prototype = CharacterData.prototype;
  function Comment2() {
    illegalConstructor();
  }
  setPrototypeOf(Comment2, Comment);
  Comment2.prototype = Comment.prototype;
  function DocumentFragment2() {
    illegalConstructor();
  }
  setPrototypeOf(DocumentFragment2, DocumentFragment);
  DocumentFragment2.prototype = DocumentFragment.prototype;
  function DocumentType2() {
    illegalConstructor();
  }
  setPrototypeOf(DocumentType2, DocumentType);
  DocumentType2.prototype = DocumentType.prototype;
  function Element2() {
    illegalConstructor();
  }
  setPrototypeOf(Element2, Element);
  Element2.prototype = Element.prototype;
  function Node2() {
    illegalConstructor();
  }
  setPrototypeOf(Node2, Node);
  Node2.prototype = Node.prototype;
  function ShadowRoot2() {
    illegalConstructor();
  }
  setPrototypeOf(ShadowRoot2, ShadowRoot);
  ShadowRoot2.prototype = ShadowRoot.prototype;
  function Text2() {
    illegalConstructor();
  }
  setPrototypeOf(Text2, Text);
  Text2.prototype = Text.prototype;
  function SVGElement2() {
    illegalConstructor();
  }
  setPrototypeOf(SVGElement2, SVGElement);
  SVGElement2.prototype = SVGElement.prototype;
  var Facades = {
    Attr: Attr2,
    CharacterData: CharacterData2,
    Comment: Comment2,
    DocumentFragment: DocumentFragment2,
    DocumentType: DocumentType2,
    Element: Element2,
    Node: Node2,
    ShadowRoot: ShadowRoot2,
    Text: Text2,
    SVGElement: SVGElement2
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/html-classes.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/element.js
  init_env();
  var Level0 = /* @__PURE__ */ new WeakMap();
  var level0 = {
    get(element, name) {
      return Level0.has(element) && Level0.get(element)[name] || null;
    },
    set(element, name, value) {
      if (!Level0.has(element))
        Level0.set(element, {});
      const handlers = Level0.get(element);
      const type = name.slice(2);
      if (handlers[name])
        element.removeEventListener(type, handlers[name], false);
      if (handlers[name] = value)
        element.addEventListener(type, value, false);
    }
  };
  var HTMLElement = class extends Element {
    static get observedAttributes() {
      return [];
    }
    constructor(ownerDocument = null, localName = "") {
      super(ownerDocument, localName);
      const ownerLess = !ownerDocument;
      let options;
      if (ownerLess) {
        const { constructor: Class } = this;
        if (!Classes.has(Class))
          throw new Error("unable to initialize this Custom Element");
        ({ ownerDocument, localName, options } = Classes.get(Class));
      }
      if (ownerDocument[UPGRADE]) {
        const { element, values } = ownerDocument[UPGRADE];
        ownerDocument[UPGRADE] = null;
        for (const [key2, value] of values)
          element[key2] = value;
        return element;
      }
      if (ownerLess) {
        this.ownerDocument = this[END].ownerDocument = ownerDocument;
        this.localName = localName;
        customElements.set(this, { connected: false });
        if (options.is)
          this.setAttribute("is", options.is);
      }
    }
    blur() {
      this.dispatchEvent(new GlobalEvent("blur"));
    }
    click() {
      this.dispatchEvent(new GlobalEvent("click"));
    }
    get accessKeyLabel() {
      const { accessKey } = this;
      return accessKey && `Alt+Shift+${accessKey}`;
    }
    get isContentEditable() {
      return this.hasAttribute("contenteditable");
    }
    get contentEditable() {
      return booleanAttribute.get(this, "contenteditable");
    }
    set contentEditable(value) {
      booleanAttribute.set(this, "contenteditable", value);
    }
    get draggable() {
      return booleanAttribute.get(this, "draggable");
    }
    set draggable(value) {
      booleanAttribute.set(this, "draggable", value);
    }
    get hidden() {
      return booleanAttribute.get(this, "hidden");
    }
    set hidden(value) {
      booleanAttribute.set(this, "hidden", value);
    }
    get spellcheck() {
      return booleanAttribute.get(this, "spellcheck");
    }
    set spellcheck(value) {
      booleanAttribute.set(this, "spellcheck", value);
    }
    get accessKey() {
      return stringAttribute.get(this, "accesskey");
    }
    set accessKey(value) {
      stringAttribute.set(this, "accesskey", value);
    }
    get dir() {
      return stringAttribute.get(this, "dir");
    }
    set dir(value) {
      stringAttribute.set(this, "dir", value);
    }
    get lang() {
      return stringAttribute.get(this, "lang");
    }
    set lang(value) {
      stringAttribute.set(this, "lang", value);
    }
    get title() {
      return stringAttribute.get(this, "title");
    }
    set title(value) {
      stringAttribute.set(this, "title", value);
    }
    get onabort() {
      return level0.get(this, "onabort");
    }
    set onabort(value) {
      level0.set(this, "onabort", value);
    }
    get onblur() {
      return level0.get(this, "onblur");
    }
    set onblur(value) {
      level0.set(this, "onblur", value);
    }
    get oncancel() {
      return level0.get(this, "oncancel");
    }
    set oncancel(value) {
      level0.set(this, "oncancel", value);
    }
    get oncanplay() {
      return level0.get(this, "oncanplay");
    }
    set oncanplay(value) {
      level0.set(this, "oncanplay", value);
    }
    get oncanplaythrough() {
      return level0.get(this, "oncanplaythrough");
    }
    set oncanplaythrough(value) {
      level0.set(this, "oncanplaythrough", value);
    }
    get onchange() {
      return level0.get(this, "onchange");
    }
    set onchange(value) {
      level0.set(this, "onchange", value);
    }
    get onclick() {
      return level0.get(this, "onclick");
    }
    set onclick(value) {
      level0.set(this, "onclick", value);
    }
    get onclose() {
      return level0.get(this, "onclose");
    }
    set onclose(value) {
      level0.set(this, "onclose", value);
    }
    get oncontextmenu() {
      return level0.get(this, "oncontextmenu");
    }
    set oncontextmenu(value) {
      level0.set(this, "oncontextmenu", value);
    }
    get oncuechange() {
      return level0.get(this, "oncuechange");
    }
    set oncuechange(value) {
      level0.set(this, "oncuechange", value);
    }
    get ondblclick() {
      return level0.get(this, "ondblclick");
    }
    set ondblclick(value) {
      level0.set(this, "ondblclick", value);
    }
    get ondrag() {
      return level0.get(this, "ondrag");
    }
    set ondrag(value) {
      level0.set(this, "ondrag", value);
    }
    get ondragend() {
      return level0.get(this, "ondragend");
    }
    set ondragend(value) {
      level0.set(this, "ondragend", value);
    }
    get ondragenter() {
      return level0.get(this, "ondragenter");
    }
    set ondragenter(value) {
      level0.set(this, "ondragenter", value);
    }
    get ondragleave() {
      return level0.get(this, "ondragleave");
    }
    set ondragleave(value) {
      level0.set(this, "ondragleave", value);
    }
    get ondragover() {
      return level0.get(this, "ondragover");
    }
    set ondragover(value) {
      level0.set(this, "ondragover", value);
    }
    get ondragstart() {
      return level0.get(this, "ondragstart");
    }
    set ondragstart(value) {
      level0.set(this, "ondragstart", value);
    }
    get ondrop() {
      return level0.get(this, "ondrop");
    }
    set ondrop(value) {
      level0.set(this, "ondrop", value);
    }
    get ondurationchange() {
      return level0.get(this, "ondurationchange");
    }
    set ondurationchange(value) {
      level0.set(this, "ondurationchange", value);
    }
    get onemptied() {
      return level0.get(this, "onemptied");
    }
    set onemptied(value) {
      level0.set(this, "onemptied", value);
    }
    get onended() {
      return level0.get(this, "onended");
    }
    set onended(value) {
      level0.set(this, "onended", value);
    }
    get onerror() {
      return level0.get(this, "onerror");
    }
    set onerror(value) {
      level0.set(this, "onerror", value);
    }
    get onfocus() {
      return level0.get(this, "onfocus");
    }
    set onfocus(value) {
      level0.set(this, "onfocus", value);
    }
    get oninput() {
      return level0.get(this, "oninput");
    }
    set oninput(value) {
      level0.set(this, "oninput", value);
    }
    get oninvalid() {
      return level0.get(this, "oninvalid");
    }
    set oninvalid(value) {
      level0.set(this, "oninvalid", value);
    }
    get onkeydown() {
      return level0.get(this, "onkeydown");
    }
    set onkeydown(value) {
      level0.set(this, "onkeydown", value);
    }
    get onkeypress() {
      return level0.get(this, "onkeypress");
    }
    set onkeypress(value) {
      level0.set(this, "onkeypress", value);
    }
    get onkeyup() {
      return level0.get(this, "onkeyup");
    }
    set onkeyup(value) {
      level0.set(this, "onkeyup", value);
    }
    get onload() {
      return level0.get(this, "onload");
    }
    set onload(value) {
      level0.set(this, "onload", value);
    }
    get onloadeddata() {
      return level0.get(this, "onloadeddata");
    }
    set onloadeddata(value) {
      level0.set(this, "onloadeddata", value);
    }
    get onloadedmetadata() {
      return level0.get(this, "onloadedmetadata");
    }
    set onloadedmetadata(value) {
      level0.set(this, "onloadedmetadata", value);
    }
    get onloadstart() {
      return level0.get(this, "onloadstart");
    }
    set onloadstart(value) {
      level0.set(this, "onloadstart", value);
    }
    get onmousedown() {
      return level0.get(this, "onmousedown");
    }
    set onmousedown(value) {
      level0.set(this, "onmousedown", value);
    }
    get onmouseenter() {
      return level0.get(this, "onmouseenter");
    }
    set onmouseenter(value) {
      level0.set(this, "onmouseenter", value);
    }
    get onmouseleave() {
      return level0.get(this, "onmouseleave");
    }
    set onmouseleave(value) {
      level0.set(this, "onmouseleave", value);
    }
    get onmousemove() {
      return level0.get(this, "onmousemove");
    }
    set onmousemove(value) {
      level0.set(this, "onmousemove", value);
    }
    get onmouseout() {
      return level0.get(this, "onmouseout");
    }
    set onmouseout(value) {
      level0.set(this, "onmouseout", value);
    }
    get onmouseover() {
      return level0.get(this, "onmouseover");
    }
    set onmouseover(value) {
      level0.set(this, "onmouseover", value);
    }
    get onmouseup() {
      return level0.get(this, "onmouseup");
    }
    set onmouseup(value) {
      level0.set(this, "onmouseup", value);
    }
    get onmousewheel() {
      return level0.get(this, "onmousewheel");
    }
    set onmousewheel(value) {
      level0.set(this, "onmousewheel", value);
    }
    get onpause() {
      return level0.get(this, "onpause");
    }
    set onpause(value) {
      level0.set(this, "onpause", value);
    }
    get onplay() {
      return level0.get(this, "onplay");
    }
    set onplay(value) {
      level0.set(this, "onplay", value);
    }
    get onplaying() {
      return level0.get(this, "onplaying");
    }
    set onplaying(value) {
      level0.set(this, "onplaying", value);
    }
    get onprogress() {
      return level0.get(this, "onprogress");
    }
    set onprogress(value) {
      level0.set(this, "onprogress", value);
    }
    get onratechange() {
      return level0.get(this, "onratechange");
    }
    set onratechange(value) {
      level0.set(this, "onratechange", value);
    }
    get onreset() {
      return level0.get(this, "onreset");
    }
    set onreset(value) {
      level0.set(this, "onreset", value);
    }
    get onresize() {
      return level0.get(this, "onresize");
    }
    set onresize(value) {
      level0.set(this, "onresize", value);
    }
    get onscroll() {
      return level0.get(this, "onscroll");
    }
    set onscroll(value) {
      level0.set(this, "onscroll", value);
    }
    get onseeked() {
      return level0.get(this, "onseeked");
    }
    set onseeked(value) {
      level0.set(this, "onseeked", value);
    }
    get onseeking() {
      return level0.get(this, "onseeking");
    }
    set onseeking(value) {
      level0.set(this, "onseeking", value);
    }
    get onselect() {
      return level0.get(this, "onselect");
    }
    set onselect(value) {
      level0.set(this, "onselect", value);
    }
    get onshow() {
      return level0.get(this, "onshow");
    }
    set onshow(value) {
      level0.set(this, "onshow", value);
    }
    get onstalled() {
      return level0.get(this, "onstalled");
    }
    set onstalled(value) {
      level0.set(this, "onstalled", value);
    }
    get onsubmit() {
      return level0.get(this, "onsubmit");
    }
    set onsubmit(value) {
      level0.set(this, "onsubmit", value);
    }
    get onsuspend() {
      return level0.get(this, "onsuspend");
    }
    set onsuspend(value) {
      level0.set(this, "onsuspend", value);
    }
    get ontimeupdate() {
      return level0.get(this, "ontimeupdate");
    }
    set ontimeupdate(value) {
      level0.set(this, "ontimeupdate", value);
    }
    get ontoggle() {
      return level0.get(this, "ontoggle");
    }
    set ontoggle(value) {
      level0.set(this, "ontoggle", value);
    }
    get onvolumechange() {
      return level0.get(this, "onvolumechange");
    }
    set onvolumechange(value) {
      level0.set(this, "onvolumechange", value);
    }
    get onwaiting() {
      return level0.get(this, "onwaiting");
    }
    set onwaiting(value) {
      level0.set(this, "onwaiting", value);
    }
    get onauxclick() {
      return level0.get(this, "onauxclick");
    }
    set onauxclick(value) {
      level0.set(this, "onauxclick", value);
    }
    get ongotpointercapture() {
      return level0.get(this, "ongotpointercapture");
    }
    set ongotpointercapture(value) {
      level0.set(this, "ongotpointercapture", value);
    }
    get onlostpointercapture() {
      return level0.get(this, "onlostpointercapture");
    }
    set onlostpointercapture(value) {
      level0.set(this, "onlostpointercapture", value);
    }
    get onpointercancel() {
      return level0.get(this, "onpointercancel");
    }
    set onpointercancel(value) {
      level0.set(this, "onpointercancel", value);
    }
    get onpointerdown() {
      return level0.get(this, "onpointerdown");
    }
    set onpointerdown(value) {
      level0.set(this, "onpointerdown", value);
    }
    get onpointerenter() {
      return level0.get(this, "onpointerenter");
    }
    set onpointerenter(value) {
      level0.set(this, "onpointerenter", value);
    }
    get onpointerleave() {
      return level0.get(this, "onpointerleave");
    }
    set onpointerleave(value) {
      level0.set(this, "onpointerleave", value);
    }
    get onpointermove() {
      return level0.get(this, "onpointermove");
    }
    set onpointermove(value) {
      level0.set(this, "onpointermove", value);
    }
    get onpointerout() {
      return level0.get(this, "onpointerout");
    }
    set onpointerout(value) {
      level0.set(this, "onpointerout", value);
    }
    get onpointerover() {
      return level0.get(this, "onpointerover");
    }
    set onpointerover(value) {
      level0.set(this, "onpointerover", value);
    }
    get onpointerup() {
      return level0.get(this, "onpointerup");
    }
    set onpointerup(value) {
      level0.set(this, "onpointerup", value);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/template-element.js
  init_env();
  var tagName = "template";
  var HTMLTemplateElement = class extends HTMLElement {
    constructor(ownerDocument) {
      super(ownerDocument, tagName);
      const content = this.ownerDocument.createDocumentFragment();
      (this[CONTENT] = content)[PRIVATE] = this;
    }
    get content() {
      if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
        for (const node of this.childNodes)
          this[CONTENT].appendChild(node.cloneNode(true));
      }
      return this[CONTENT];
    }
  };
  registerHTMLClass(tagName, HTMLTemplateElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/html-element.js
  init_env();
  var HTMLHtmlElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "html") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/script-element.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/text-element.js
  init_env();
  var { toString } = HTMLElement.prototype;
  var TextElement = class extends HTMLElement {
    get innerHTML() {
      return this.textContent;
    }
    set innerHTML(html2) {
      this.textContent = html2;
    }
    toString() {
      const outerHTML = toString.call(this.cloneNode());
      return outerHTML.replace(/></, `>${this.textContent}<`);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/script-element.js
  var tagName2 = "script";
  var HTMLScriptElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName2) {
      super(ownerDocument, localName);
    }
  };
  registerHTMLClass(tagName2, HTMLScriptElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/frame-element.js
  init_env();
  var HTMLFrameElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "frame") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/i-frame-element.js
  init_env();
  var HTMLIFrameElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "iframe") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/object-element.js
  init_env();
  var HTMLObjectElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "object") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/head-element.js
  init_env();
  var HTMLHeadElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "head") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/body-element.js
  init_env();
  var HTMLBodyElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "body") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/style-element.js
  init_env();
  var import_cssom = __toESM(require_lib10(), 1);
  var tagName3 = "style";
  var HTMLStyleElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName3) {
      super(ownerDocument, localName);
      this[SHEET] = null;
    }
    get sheet() {
      const sheet = this[SHEET];
      if (sheet !== null) {
        return sheet;
      }
      return this[SHEET] = (0, import_cssom.parse)(this.textContent);
    }
    get innerHTML() {
      return super.innerHTML || "";
    }
    set innerHTML(value) {
      super.textContent = value;
      this[SHEET] = null;
    }
    get innerText() {
      return super.innerText || "";
    }
    set innerText(value) {
      super.textContent = value;
      this[SHEET] = null;
    }
    get textContent() {
      return super.textContent || "";
    }
    set textContent(value) {
      super.textContent = value;
      this[SHEET] = null;
    }
  };
  registerHTMLClass(tagName3, HTMLStyleElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/time-element.js
  init_env();
  var HTMLTimeElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "time") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/field-set-element.js
  init_env();
  var HTMLFieldSetElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "fieldset") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/embed-element.js
  init_env();
  var HTMLEmbedElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "embed") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/hr-element.js
  init_env();
  var HTMLHRElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "hr") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/progress-element.js
  init_env();
  var HTMLProgressElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "progress") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/paragraph-element.js
  init_env();
  var HTMLParagraphElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "p") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/table-element.js
  init_env();
  var HTMLTableElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "table") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/frame-set-element.js
  init_env();
  var HTMLFrameSetElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "frameset") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/li-element.js
  init_env();
  var HTMLLIElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "li") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/base-element.js
  init_env();
  var HTMLBaseElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "base") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/data-list-element.js
  init_env();
  var HTMLDataListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "datalist") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/input-element.js
  init_env();
  var tagName4 = "input";
  var HTMLInputElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName4) {
      super(ownerDocument, localName);
    }
    get autofocus() {
      return booleanAttribute.get(this, "autofocus") || -1;
    }
    set autofocus(value) {
      booleanAttribute.set(this, "autofocus", value);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
    get placeholder() {
      return this.getAttribute("placeholder");
    }
    set placeholder(value) {
      this.setAttribute("placeholder", value);
    }
    get type() {
      return this.getAttribute("type");
    }
    set type(value) {
      this.setAttribute("type", value);
    }
  };
  registerHTMLClass(tagName4, HTMLInputElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/param-element.js
  init_env();
  var HTMLParamElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "param") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/media-element.js
  init_env();
  var HTMLMediaElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "media") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/audio-element.js
  init_env();
  var HTMLAudioElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "audio") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/heading-element.js
  init_env();
  var tagName5 = "h1";
  var HTMLHeadingElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName5) {
      super(ownerDocument, localName);
    }
  };
  registerHTMLClass([tagName5, "h2", "h3", "h4", "h5", "h6"], HTMLHeadingElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/directory-element.js
  init_env();
  var HTMLDirectoryElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "dir") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/quote-element.js
  init_env();
  var HTMLQuoteElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "quote") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/canvas-element.js
  init_env();
  var import_canvas = __toESM(require_canvas(), 1);
  var { createCanvas } = import_canvas.default;
  var tagName6 = "canvas";
  var HTMLCanvasElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName6) {
      super(ownerDocument, localName);
      this[IMAGE] = createCanvas(300, 150);
    }
    get width() {
      return this[IMAGE].width;
    }
    set width(value) {
      numericAttribute.set(this, "width", value);
      this[IMAGE].width = value;
    }
    get height() {
      return this[IMAGE].height;
    }
    set height(value) {
      numericAttribute.set(this, "height", value);
      this[IMAGE].height = value;
    }
    getContext(type) {
      return this[IMAGE].getContext(type);
    }
    toDataURL(...args) {
      return this[IMAGE].toDataURL(...args);
    }
  };
  registerHTMLClass(tagName6, HTMLCanvasElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/legend-element.js
  init_env();
  var HTMLLegendElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "legend") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/option-element.js
  init_env();
  var HTMLOptionElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "option") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/span-element.js
  init_env();
  var HTMLSpanElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "span") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/meter-element.js
  init_env();
  var HTMLMeterElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "meter") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/video-element.js
  init_env();
  var HTMLVideoElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "video") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/table-cell-element.js
  init_env();
  var HTMLTableCellElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "td") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/title-element.js
  init_env();
  var tagName7 = "title";
  var HTMLTitleElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName7) {
      super(ownerDocument, localName);
    }
  };
  registerHTMLClass(tagName7, HTMLTitleElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/output-element.js
  init_env();
  var HTMLOutputElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "output") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/table-row-element.js
  init_env();
  var HTMLTableRowElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "tr") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/data-element.js
  init_env();
  var HTMLDataElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "data") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/menu-element.js
  init_env();
  var HTMLMenuElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "menu") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/select-element.js
  init_env();
  var tagName8 = "select";
  var HTMLSelectElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName8) {
      super(ownerDocument, localName);
    }
    get options() {
      let children = new NodeList();
      let { firstElementChild } = this;
      while (firstElementChild) {
        if (firstElementChild.tagName === "OPTGROUP")
          children.push(...firstElementChild.children);
        else
          children.push(firstElementChild);
        firstElementChild = firstElementChild.nextElementSibling;
      }
      return children;
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
  };
  registerHTMLClass(tagName8, HTMLSelectElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/br-element.js
  init_env();
  var HTMLBRElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "br") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/button-element.js
  init_env();
  var tagName9 = "button";
  var HTMLButtonElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName9) {
      super(ownerDocument, localName);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
    get type() {
      return this.getAttribute("type");
    }
    set type(value) {
      this.setAttribute("type", value);
    }
  };
  registerHTMLClass(tagName9, HTMLButtonElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/map-element.js
  init_env();
  var HTMLMapElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "map") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/opt-group-element.js
  init_env();
  var HTMLOptGroupElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "optgroup") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/d-list-element.js
  init_env();
  var HTMLDListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "dl") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/text-area-element.js
  init_env();
  var tagName10 = "textarea";
  var HTMLTextAreaElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName10) {
      super(ownerDocument, localName);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
    get placeholder() {
      return this.getAttribute("placeholder");
    }
    set placeholder(value) {
      this.setAttribute("placeholder", value);
    }
    get type() {
      return this.getAttribute("type");
    }
    set type(value) {
      this.setAttribute("type", value);
    }
    get value() {
      return this.textContent;
    }
    set value(content) {
      this.textContent = content;
    }
  };
  registerHTMLClass(tagName10, HTMLTextAreaElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/font-element.js
  init_env();
  var HTMLFontElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "font") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/div-element.js
  init_env();
  var HTMLDivElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "div") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/link-element.js
  init_env();
  var tagName11 = "link";
  var HTMLLinkElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName11) {
      super(ownerDocument, localName);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get href() {
      return stringAttribute.get(this, "href");
    }
    set href(value) {
      stringAttribute.set(this, "href", value);
    }
    get hreflang() {
      return stringAttribute.get(this, "hreflang");
    }
    set hreflang(value) {
      stringAttribute.set(this, "hreflang", value);
    }
    get media() {
      return stringAttribute.get(this, "media");
    }
    set media(value) {
      stringAttribute.set(this, "media", value);
    }
    get rel() {
      return stringAttribute.get(this, "rel");
    }
    set rel(value) {
      stringAttribute.set(this, "rel", value);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
  };
  registerHTMLClass(tagName11, HTMLLinkElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/slot-element.js
  init_env();
  var HTMLSlotElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "slot") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/form-element.js
  init_env();
  var HTMLFormElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "form") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/image-element.js
  init_env();
  var tagName12 = "img";
  var HTMLImageElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName12) {
      super(ownerDocument, localName);
    }
    get alt() {
      return stringAttribute.get(this, "alt");
    }
    set alt(value) {
      stringAttribute.set(this, "alt", value);
    }
    get sizes() {
      return stringAttribute.get(this, "sizes");
    }
    set sizes(value) {
      stringAttribute.set(this, "sizes", value);
    }
    get src() {
      return stringAttribute.get(this, "src");
    }
    set src(value) {
      stringAttribute.set(this, "src", value);
    }
    get srcset() {
      return stringAttribute.get(this, "srcset");
    }
    set srcset(value) {
      stringAttribute.set(this, "srcset", value);
    }
    get title() {
      return stringAttribute.get(this, "title");
    }
    set title(value) {
      stringAttribute.set(this, "title", value);
    }
    get width() {
      return numericAttribute.get(this, "width");
    }
    set width(value) {
      numericAttribute.set(this, "width", value);
    }
    get height() {
      return numericAttribute.get(this, "height");
    }
    set height(value) {
      numericAttribute.set(this, "height", value);
    }
  };
  registerHTMLClass(tagName12, HTMLImageElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/pre-element.js
  init_env();
  var HTMLPreElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "pre") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/u-list-element.js
  init_env();
  var HTMLUListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "ul") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/meta-element.js
  init_env();
  var HTMLMetaElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "meta") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/picture-element.js
  init_env();
  var HTMLPictureElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "picture") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/area-element.js
  init_env();
  var HTMLAreaElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "area") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/o-list-element.js
  init_env();
  var HTMLOListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "ol") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/table-caption-element.js
  init_env();
  var HTMLTableCaptionElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "caption") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/anchor-element.js
  init_env();
  var tagName13 = "a";
  var HTMLAnchorElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName13) {
      super(ownerDocument, localName);
    }
    get href() {
      return encodeURI(stringAttribute.get(this, "href"));
    }
    set href(value) {
      stringAttribute.set(this, "href", decodeURI(value));
    }
    get download() {
      return encodeURI(stringAttribute.get(this, "download"));
    }
    set download(value) {
      stringAttribute.set(this, "download", decodeURI(value));
    }
    get target() {
      return stringAttribute.get(this, "target");
    }
    set target(value) {
      stringAttribute.set(this, "target", value);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
  };
  registerHTMLClass(tagName13, HTMLAnchorElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/label-element.js
  init_env();
  var HTMLLabelElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "label") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/unknown-element.js
  init_env();
  var HTMLUnknownElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "unknown") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/mod-element.js
  init_env();
  var HTMLModElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "mod") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/details-element.js
  init_env();
  var HTMLDetailsElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "details") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/source-element.js
  init_env();
  var tagName14 = "source";
  var HTMLSourceElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName14) {
      super(ownerDocument, localName);
    }
    get src() {
      return stringAttribute.get(this, "src");
    }
    set src(value) {
      stringAttribute.set(this, "src", value);
    }
    get srcset() {
      return stringAttribute.get(this, "srcset");
    }
    set srcset(value) {
      stringAttribute.set(this, "srcset", value);
    }
    get sizes() {
      return stringAttribute.get(this, "sizes");
    }
    set sizes(value) {
      stringAttribute.set(this, "sizes", value);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
  };
  registerHTMLClass(tagName14, HTMLSourceElement);

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/track-element.js
  init_env();
  var HTMLTrackElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "track") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/html/marquee-element.js
  init_env();
  var HTMLMarqueeElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "marquee") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/html-classes.js
  var HTMLClasses = {
    HTMLElement,
    HTMLTemplateElement,
    HTMLHtmlElement,
    HTMLScriptElement,
    HTMLFrameElement,
    HTMLIFrameElement,
    HTMLObjectElement,
    HTMLHeadElement,
    HTMLBodyElement,
    HTMLStyleElement,
    HTMLTimeElement,
    HTMLFieldSetElement,
    HTMLEmbedElement,
    HTMLHRElement,
    HTMLProgressElement,
    HTMLParagraphElement,
    HTMLTableElement,
    HTMLFrameSetElement,
    HTMLLIElement,
    HTMLBaseElement,
    HTMLDataListElement,
    HTMLInputElement,
    HTMLParamElement,
    HTMLMediaElement,
    HTMLAudioElement,
    HTMLHeadingElement,
    HTMLDirectoryElement,
    HTMLQuoteElement,
    HTMLCanvasElement,
    HTMLLegendElement,
    HTMLOptionElement,
    HTMLSpanElement,
    HTMLMeterElement,
    HTMLVideoElement,
    HTMLTableCellElement,
    HTMLTitleElement,
    HTMLOutputElement,
    HTMLTableRowElement,
    HTMLDataElement,
    HTMLMenuElement,
    HTMLSelectElement,
    HTMLBRElement,
    HTMLButtonElement,
    HTMLMapElement,
    HTMLOptGroupElement,
    HTMLDListElement,
    HTMLTextAreaElement,
    HTMLFontElement,
    HTMLDivElement,
    HTMLLinkElement,
    HTMLSlotElement,
    HTMLFormElement,
    HTMLImageElement,
    HTMLPreElement,
    HTMLUListElement,
    HTMLMetaElement,
    HTMLPictureElement,
    HTMLAreaElement,
    HTMLOListElement,
    HTMLTableCaptionElement,
    HTMLAnchorElement,
    HTMLLabelElement,
    HTMLUnknownElement,
    HTMLModElement,
    HTMLDetailsElement,
    HTMLSourceElement,
    HTMLTrackElement,
    HTMLMarqueeElement
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/mime.js
  init_env();
  var voidElements = { test: () => true };
  var Mime = {
    "text/html": {
      docType: "<!DOCTYPE html>",
      ignoreCase: true,
      voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
    },
    "image/svg+xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements
    },
    "text/xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements
    },
    "application/xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements
    },
    "application/xhtml+xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/custom-event.js
  init_env();
  var GlobalCustomEvent = typeof CustomEvent === "function" ? CustomEvent : class CustomEvent2 extends GlobalEvent {
    constructor(type, eventInitDict = {}) {
      super(type, eventInitDict);
      this.detail = eventInitDict.detail;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/input-event.js
  init_env();
  var InputEvent = class extends GlobalEvent {
    constructor(type, inputEventInit = {}) {
      super(type, inputEventInit);
      this.inputType = inputEventInit.inputType;
      this.data = inputEventInit.data;
      this.dataTransfer = inputEventInit.dataTransfer;
      this.isComposing = inputEventInit.isComposing || false;
      this.ranges = inputEventInit.ranges;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/image.js
  init_env();
  var ImageClass = (ownerDocument) => class Image extends HTMLImageElement {
    constructor(width, height) {
      super(ownerDocument);
      switch (arguments.length) {
        case 1:
          this.height = width;
          this.width = width;
          break;
        case 2:
          this.height = height;
          this.width = width;
          break;
      }
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/range.js
  init_env();
  var deleteContents = ({ [START]: start, [END]: end }, fragment = null) => {
    setAdjacent(start[PREV], end[NEXT]);
    do {
      const after2 = getEnd(start);
      const next = after2 === end ? after2 : after2[NEXT];
      if (fragment)
        fragment.insertBefore(start, fragment[END]);
      else
        start.remove();
      start = next;
    } while (start !== end);
  };
  var Range = class {
    constructor() {
      this[START] = null;
      this[END] = null;
      this.commonAncestorContainer = null;
    }
    insertNode(newNode) {
      this[END].parentNode.insertBefore(newNode, this[START]);
    }
    selectNode(node) {
      this[START] = node;
      this[END] = getEnd(node);
    }
    surroundContents(parentNode) {
      parentNode.replaceChildren(this.extractContents());
    }
    setStartBefore(node) {
      this[START] = node;
    }
    setStartAfter(node) {
      this[START] = node.nextSibling;
    }
    setEndBefore(node) {
      this[END] = getEnd(node.previousSibling);
    }
    setEndAfter(node) {
      this[END] = getEnd(node);
    }
    cloneContents() {
      let { [START]: start, [END]: end } = this;
      const fragment = start.ownerDocument.createDocumentFragment();
      while (start !== end) {
        fragment.insertBefore(start.cloneNode(true), fragment[END]);
        start = getEnd(start);
        if (start !== end)
          start = start[NEXT];
      }
      return fragment;
    }
    deleteContents() {
      deleteContents(this);
    }
    extractContents() {
      const fragment = this[START].ownerDocument.createDocumentFragment();
      deleteContents(this, fragment);
      return fragment;
    }
    createContextualFragment(html2) {
      const template = this.commonAncestorContainer.createElement("template");
      template.innerHTML = html2;
      this.selectNode(template.content);
      return template.content;
    }
    cloneRange() {
      const range = new Range();
      range[START] = this[START];
      range[END] = this[END];
      return range;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/tree-walker.js
  init_env();
  var isOK = ({ nodeType }, mask) => {
    switch (nodeType) {
      case ELEMENT_NODE:
        return mask & SHOW_ELEMENT;
      case TEXT_NODE:
        return mask & SHOW_TEXT;
      case COMMENT_NODE:
        return mask & SHOW_COMMENT;
    }
    return 0;
  };
  var TreeWalker = class {
    constructor(root, whatToShow = SHOW_ALL) {
      this.root = root;
      this.currentNode = root;
      this.whatToShow = whatToShow;
      let { [NEXT]: next, [END]: end } = root;
      if (root.nodeType === DOCUMENT_NODE) {
        const { documentElement } = root;
        next = documentElement;
        end = documentElement[END];
      }
      const nodes = [];
      while (next !== end) {
        if (isOK(next, whatToShow))
          nodes.push(next);
        next = next[NEXT];
      }
      this[PRIVATE] = { i: 0, nodes };
    }
    nextNode() {
      const $ = this[PRIVATE];
      this.currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
      return this.currentNode;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/document.js
  var query = (method, ownerDocument, selectors) => {
    let { [NEXT]: next, [END]: end } = ownerDocument;
    return method.call({ ownerDocument, [NEXT]: next, [END]: end }, selectors);
  };
  var globalExports = assign2({}, Facades, HTMLClasses, {
    CustomEvent: GlobalCustomEvent,
    Event: GlobalEvent,
    EventTarget: DOMEventTarget,
    InputEvent,
    NamedNodeMap,
    NodeList
  });
  var window = /* @__PURE__ */ new WeakMap();
  var Document = class extends NonElementParentNode {
    constructor(type) {
      super(null, "#document", DOCUMENT_NODE);
      this[CUSTOM_ELEMENTS] = { active: false, registry: null };
      this[MUTATION_OBSERVER] = { active: false, class: null };
      this[MIME] = Mime[type];
      this[DOCTYPE] = null;
      this[DOM_PARSER] = null;
      this[GLOBALS] = null;
      this[IMAGE] = null;
      this[UPGRADE] = null;
    }
    get defaultView() {
      if (!window.has(this))
        window.set(this, new Proxy(globalThis, {
          set: (target2, name, value) => {
            switch (name) {
              case "addEventListener":
              case "removeEventListener":
              case "dispatchEvent":
                this[EVENT_TARGET][name] = value;
                break;
              default:
                target2[name] = value;
                break;
            }
            return true;
          },
          get: (globalThis2, name) => {
            switch (name) {
              case "addEventListener":
              case "removeEventListener":
              case "dispatchEvent":
                if (!this[EVENT_TARGET]) {
                  const et = this[EVENT_TARGET] = new DOMEventTarget();
                  et.dispatchEvent = et.dispatchEvent.bind(et);
                  et.addEventListener = et.addEventListener.bind(et);
                  et.removeEventListener = et.removeEventListener.bind(et);
                }
                return this[EVENT_TARGET][name];
              case "document":
                return this;
              case "navigator":
                return {
                  userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
                };
              case "window":
                return window.get(this);
              case "customElements":
                if (!this[CUSTOM_ELEMENTS].registry)
                  this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
                return this[CUSTOM_ELEMENTS];
              case "performance":
                return import_perf_hooks.performance;
              case "DOMParser":
                return this[DOM_PARSER];
              case "Image":
                if (!this[IMAGE])
                  this[IMAGE] = ImageClass(this);
                return this[IMAGE];
              case "MutationObserver":
                if (!this[MUTATION_OBSERVER].class)
                  this[MUTATION_OBSERVER] = new MutationObserverClass(this);
                return this[MUTATION_OBSERVER].class;
            }
            return this[GLOBALS] && this[GLOBALS][name] || globalExports[name] || globalThis2[name];
          }
        }));
      return window.get(this);
    }
    get doctype() {
      const docType = this[DOCTYPE];
      if (docType)
        return docType;
      const { firstChild } = this;
      if (firstChild && firstChild.nodeType === DOCUMENT_TYPE_NODE)
        return this[DOCTYPE] = firstChild;
      return null;
    }
    set doctype(value) {
      if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(value)) {
        const { $1: name, $4: publicId, $6: systemId } = RegExp;
        this[DOCTYPE] = new DocumentType(this, name, publicId, systemId);
        knownSiblings(this, this[DOCTYPE], this[NEXT]);
      }
    }
    get documentElement() {
      return this.firstElementChild;
    }
    get isConnected() {
      return true;
    }
    _getParent() {
      return this[EVENT_TARGET];
    }
    createAttribute(name) {
      return new Attr(this, name);
    }
    createComment(textContent) {
      return new Comment(this, textContent);
    }
    createDocumentFragment() {
      return new DocumentFragment(this);
    }
    createDocumentType(name, publicId, systemId) {
      return new DocumentType(this, name, publicId, systemId);
    }
    createElement(localName) {
      return new Element(this, localName);
    }
    createRange() {
      const range = new Range();
      range.commonAncestorContainer = this;
      return range;
    }
    createTextNode(textContent) {
      return new Text(this, textContent);
    }
    createTreeWalker(root, whatToShow = -1) {
      return new TreeWalker(root, whatToShow);
    }
    createNodeIterator(root, whatToShow = -1) {
      return this.createTreeWalker(root, whatToShow);
    }
    createEvent(name) {
      const event = create(name === "Event" ? new GlobalEvent("") : new GlobalCustomEvent(""));
      event.initEvent = event.initCustomEvent = (type, canBubble = false, cancelable = false, detail) => {
        defineProperties(event, {
          type: { value: type },
          canBubble: { value: canBubble },
          cancelable: { value: cancelable },
          detail: { value: detail }
        });
      };
      return event;
    }
    cloneNode(deep = false) {
      const {
        constructor,
        [CUSTOM_ELEMENTS]: customElements2,
        [DOCTYPE]: doctype
      } = this;
      const document2 = new constructor();
      document2[CUSTOM_ELEMENTS] = customElements2;
      if (deep) {
        const end = document2[END];
        const { childNodes } = this;
        for (let { length } = childNodes, i = 0; i < length; i++)
          document2.insertBefore(childNodes[i].cloneNode(true), end);
        if (doctype)
          document2[DOCTYPE] = childNodes[0];
      }
      return document2;
    }
    importNode(externalNode) {
      const deep = 1 < arguments.length && !!arguments[1];
      const node = externalNode.cloneNode(deep);
      const { [CUSTOM_ELEMENTS]: customElements2 } = this;
      const { active } = customElements2;
      const upgrade = (element) => {
        const { ownerDocument, nodeType } = element;
        element.ownerDocument = this;
        if (active && ownerDocument !== this && nodeType === ELEMENT_NODE)
          customElements2.upgrade(element);
      };
      upgrade(node);
      if (deep) {
        switch (node.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            let { [NEXT]: next, [END]: end } = node;
            while (next !== end) {
              if (next.nodeType === ELEMENT_NODE)
                upgrade(next);
              next = next[NEXT];
            }
            break;
          }
        }
      }
      return node;
    }
    toString() {
      return this.childNodes.join("");
    }
    querySelector(selectors) {
      return query(super.querySelector, this, selectors);
    }
    querySelectorAll(selectors) {
      return query(super.querySelectorAll, this, selectors);
    }
    getElementsByTagNameNS(_, name) {
      return this.getElementsByTagName(name);
    }
    createAttributeNS(_, name) {
      return this.createAttribute(name);
    }
    createElementNS(nsp, localName, options) {
      return nsp === SVG_NAMESPACE ? new SVGElement(this, localName, null) : this.createElement(localName, options);
    }
  };
  setPrototypeOf(globalExports.Document = function Document2() {
    illegalConstructor();
  }, Document).prototype = Document.prototype;

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/svg/document.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/xml/document.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/shared/parse-json.js
  init_env();
  var { parse: parse3 } = JSON;

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/interface/node-filter.js
  init_env();

  // node_modules/.pnpm/linkedom@0.14.7/node_modules/linkedom/esm/index.js
  function Document3() {
    illegalConstructor();
  }
  setPrototypeOf(Document3, Document).prototype = Document.prototype;

  // src/routes/api/dom-api.ts
  var x = {
    ["news" /* TOP */]: "/news",
    ["newest" /* NEW */]: "/newest",
    ["best" /* BEST */]: "/best",
    ["show" /* SHOW */]: "/show",
    ["shownew" /* SHOW_NEW */]: "/shownew",
    ["ask" /* ASK */]: "/ask",
    ["jobs" /* JOB */]: "/jobs",
    ["submitted" /* USER */]: "/submitted",
    ["classic" /* CLASSIC */]: "/classic",
    ["from" /* FROM */]: "/from"
  };

  // src/routes/api/sw-api.ts
  init_env();
  var x2 = {
    ["news" /* TOP */]: "/news",
    ["newest" /* NEW */]: "/newest",
    ["best" /* BEST */]: "/best",
    ["show" /* SHOW */]: "/show",
    ["shownew" /* SHOW_NEW */]: "/shownew",
    ["ask" /* ASK */]: "/ask",
    ["jobs" /* JOB */]: "/jobs",
    ["submitted" /* USER */]: "/submitted",
    ["classic" /* CLASSIC */]: "/classic",
    ["from" /* FROM */]: "/from"
  };
  async function stories(params, type = "news" /* TOP */, args) {
    const res = await fetch(new JSONRequest(args.url));
    const data = await res.json();
    return data;
  }
  async function comments(id, p, args) {
    const res = await fetch(new JSONRequest(args.url));
    const data = await res.json();
    return data;
  }
  async function user(id, args) {
    const res = await fetch(new JSONRequest(args.url));
    const data = await res.json();
    return data;
  }
  async function threads(id, next, args) {
    const res = await fetch(new JSONRequest(args.url));
    const data = await res.json();
    return data;
  }

  // src/routes/api/index.ts
  var stories3 = true ? stories : stories2;
  var comments3 = true ? comments : comments2;
  var user3 = true ? user : user2;
  var threads3 = true ? threads : threads2;

  // src/routes/item.ts
  init_env();

  // node_modules/.pnpm/github.com+qwtel+blockies@e4dfe44e09b7b24f0647392b73409354680114f6/node_modules/@download/blockies/src/blockies.mjs
  init_env();
  var randseed = new Array(4);

  // src/routes/threads.ts
  init_env();
  var moreLinkEl = (moreLink) => html`
  <tr class="morespace" style="height:10px"></tr>
  <tr>
    <td>
      <table border="0">
        <tr>
          <td><img src="s.gif" height="1" width="0"></td>
          <td><img src="s.gif" height="1" width="14"></td>
          <td class="title"><a href="${moreLink}" class="morelink" rel="next">More</a></td>
        </tr>
      </table>
    </td>
  </tr>`;
  async function threads4({ searchParams, type: contentType, url }) {
    const id = searchParams.get("id");
    if (!id)
      return notFound2("No such item.");
    const title = `${id}'s comments`;
    const next = Number(searchParams.get("next"));
    const threadsPage = threads3(id, next, { url });
    if (contentType === "application/json") {
      return new JSONResponse(await jsonStringifyStream(threadsPage));
    }
    return new HTMLResponse(pageLayout({ title, op: "threads", id })(async () => {
      return html`
      <tr>
        <td> </td>
      </tr>
      ${async function* () {
        try {
          const { items, moreLink } = await threadsPage;
          for await (const item of items) {
            yield commentEl(item, { showReply: true, showParent: item.level === 0 });
          }
          yield moreLinkEl(await moreLink);
        } catch (err) {
          console.warn(err);
          yield html`<tr><td>${err instanceof Error ? err.message : err}</td></tr>`;
        }
      }}
      `;
    }));
  }
  router.get("/threads", mw, (_req, x4) => threads4(x4));

  // src/routes/item.ts
  var commentTr = (comm, { showToggle = true, showReply = true, showParent = false } = {}) => {
    const { id, level, by, text, time, quality, deleted, parent, story, storyTitle } = comm;
    const timeAgo = time && formatDistanceToNowStrict(new Date(time), { addSuffix: true });
    return html`<tr>
    <td class="ind" indent="${level ?? 0}"><img src="s.gif" height="1" width="${(level ?? 0) * 40}"></td>
    <td valign="top" class="votelinks">
      <center>${deleted ? html`<img src="s.gif" height="1" width="14">` : html`<a id="up_${id}" onclick="popitup(this,event)" href="https://news.ycombinator.com/item?id=${id}#${id}"><div class="votearrow" title="upvote"></div></a>`}</center>
    </td>
    <td class="default">
      <div style="margin-top:2px; margin-bottom:-10px;">
        <span class="comhead">
          <a href="user?id=${by}" class="hnuser">${identicon(by)} ${by}</a> 
          <span class="age" title="${time && new Date(time).toUTCString()}"><a href="item?id=${id}">${timeAgo}</a></span>
          <span id="unv_${id}"></span>
          <span class="navs">
            <span class="par">${showParent ? html` | <a href="item?id=${parent}">parent</a>` : ""}</span> 
          </span>
          ${showToggle ? html`<a class="togg clicky" id="${id}" n="${(comm.descendants ?? 0) + 1}" href="javascript:void(0)">[–]</a>` : ""}
          <span class="onstory">${showParent && story && storyTitle ? html` | on: <a href="item?id=${story}">${storyTitle}</a>` : ""}</span>
        </span>
      </div><br/>
      <div class="comment">
        <span class="commtext ${quality}">
          ${deleted ? "[flagged]" : text ? unsafeHTML(text) : " "}
          <div class="reply">
            <p>
              ${showReply && !deleted ? html`<font size="1">
                ${""}
                ${""}
                <u><a onclick="popitup(this,event,850,300)" href="https://news.ycombinator.com/item?id=${id}#${id}">reply</a></u>
              </font>` : ""}
            </p>
          </div>
        </span>
      </div>
    </td>
  </tr>`;
  };
  var commentEl = (comment, commOpts = {}) => {
    return html`<tr class="athing comtr" id="${comment.id}">
    <td>
      <table border="0">
        <tbody>
          ${commentTr(comment, commOpts)}
        </tbody>
      </table>
    </td>
  </tr>`;
  };
  var timeout = (n) => new Promise((res) => setTimeout(res, n));
  async function* commentTree(kids, parent) {
    let i = 0;
    for await (const item of kids) {
      yield commentEl(item, { showReply: !parent.dead });
      if (i++ % 10 === 0)
        await timeout(100);
      if (item.kids)
        yield* commentTree(item.kids, parent);
    }
  }
  var pollOptEl = (opt) => {
    return html`<tr class="athing" id="${opt.id}"><td></td>
    <td valign="top" class="votelinks"><center><a id="up_${opt.id}" href="https://news.ycombinator.com/item?id=${opt.id}#${opt.id}" onclick="popitup(this,event)">
      <div class="votearrow" title="upvote"></div></a></center></td><td class="comment"><div style="margin-top:1px;margin-bottom:0px">
    <font style="color:var(--text-strong)">${opt.text}</font>
    </div></td></tr><tr><td colspan="2"></td><td class="default"><span class="comhead">
    <span class="score" id="score_${opt.id}">${opt.score} points</span><span id="unv_${opt.id}"></span></span></td></tr>
    <tr style="height:7px"></tr>`;
  };
  async function* pollOptList(parts) {
    yield html`<tr style="height:10px"></tr>
    <tr>
      <td colspan="2"></td>
      <td><table border="0">${async function* () {
      for await (const item of parts) {
        yield pollOptEl(item);
      }
    }()}</table></td>
    </tr>`;
  }
  var PLACEHOLDER = "Worker News";
  var replyTr = ({ id, type }) => {
    return html`<tr style="height:10px"></tr>
    <tr>
      <td colspan="2"></td>
      <td>
        <form method="post" action="comment"><input type="hidden" name="parent" value="${id}"><input
            type="hidden" name="goto" value="item?id=${id}"><input type="hidden" name="hmac"
            value="${"TODO"}"><textarea name="text" rows="8"
            cols="80" disabled placeholder="Not implemented"></textarea>
          <br/><br/><input type="submit" value="${type === "comment" ? "reply" : "add comment"}" disabled>
          <font size="1"><u>
            <a onclick="popitup(this,event,850,275)" href="https://news.ycombinator.com/item?id=${id}#${id}">${type === "comment" ? "reply" : "add comment"} on HN</a>
          </u></font>
        </form>
      </td>
    </tr>`;
  };
  async function buffer(iter) {
    const chunks = [];
    for await (const x4 of iter)
      chunks.push(x4);
    return chunks;
  }
  async function jsonStringifyStream(_obj) {
    const obj = await _obj;
    for (const [key2, value] of Object.entries(obj)) {
      if (value != null && typeof value === "object" && Symbol.asyncIterator in value) {
        obj[key2] = await buffer(value);
      } else {
        obj[key2] = await value;
      }
    }
    return obj;
  }
  var _a6;
  async function getItem({ searchParams, type: contentType, url }) {
    const id = Number(searchParams.get("id"));
    if (Number.isNaN(id))
      return notFound2("No such item.");
    const p = Number(searchParams.get("p"));
    const postResponse = comments3(id, p, { url });
    const pageRenderer = pageLayout({ title: PLACEHOLDER, op: "item" });
    if (contentType === "application/json") {
      return new JSONResponse(await jsonStringifyStream(await postResponse));
    }
    return new HTMLResponse(pageRenderer(async () => {
      try {
        const post = await postResponse;
        const { title, text, kids, parts } = post;
        return html`
        ${title ? html(_a6 || (_a6 = __template(["<script>document.title = document.title.replace('", "', decodeURIComponent(document.getElementById('pagespace').title))<\/script>"])), PLACEHOLDER) : ""}
        <tr>
          <td>
            <table class="fatitem" border="0">
              <tbody>
                ${post.type === "comment" ? [commentTr(post, { showParent: true, showToggle: false })] : [
          aThing(post),
          subtext(post, void 0, void 0, { showPast: true }),
          text ? html`<tr style="height:2px"></tr><tr><td colspan="2"></td><td>${unsafeHTML(text)}</td></tr>` : "",
          parts ? pollOptList(parts) : ""
        ]}${!post.dead ? replyTr(post) : ""}
              </tbody>
            </table>
            <table border="0" class="comment-tree">
              <tbody>
                ${kids && commentTree(kids, post)}
                ${async () => {
          const moreLink = await post.moreLink;
          return moreLink ? moreLinkEl(moreLink) : html`<br/><br/>`;
        }}
              </tbody>
            </table>
          </td>
        </tr>`;
      } catch (err) {
        return html`<tr id="pagespace" title="Error" style="height:10px"></tr>
        <tr><td>${err instanceof Error ? err.message : err}</td></tr>`;
      }
    }));
  }
  router.get("/identicon/dang.svg", (req) => fetch("https://news.ycombinator.com/y18.gif", req));
  router.get("/identicon/:by.svg", pipe(basics(), contentTypes(["image/svg+xml", "*/*"])), async (req, { params, type, waitUntil, handled }) => {
    const cache = await self.caches?.open("identicon");
    const res = await cache?.match(req);
    if (!res) {
      let res2;
      if (true) {
        res2 = await fetch(req).then((r) => new Response(r.body, r));
      } else {
        const svg = renderIconSVG({ seed: params.by ?? "", size: 6, scale: 2 });
        res2 = new Response(svg, {
          headers: {
            "content-type": "image/svg+xml",
            "content-length": "" + svg.length,
            "cache-control": "public, max-age=31536000"
          }
        });
      }
      waitUntil((async () => {
        await handled;
        return cache?.put(req, res2);
      })());
      return res2.clone();
    }
    return new Response(res.body, res);
  });
  router.get("/item", mw, (_req, ctx) => getItem(ctx));

  // src/routes/news.ts
  var JUNK_NEWS = [];
  var SUB_SITES = ["medium.com", "substack.com", "mozilla.org", "mit.edu", "hardvard.edu", "google.com", "apple.com", "notion.site", "js.org"];
  var GIT_SITES = ["twitter.com", "github.com", "gitlab.com", "vercel.app"];
  var tryURL = (href) => {
    try {
      const url = new URL(href, self.location.origin);
      const res = parseDomain(url.hostname);
      if (res.type === "LISTED") {
        const { domain, topLevelDomains: tld, subDomains } = res;
        const allowedSubDomains = SUB_SITES.some((_) => url.hostname.endsWith(_)) && subDomains.length ? subDomains.slice(subDomains.length - 1).concat("").join(".") : "";
        const allowedPathname = GIT_SITES.includes(url.hostname) ? url.pathname.split(/\/+/).slice(0, 2).join("/").toLowerCase() : "";
        const sitebit = `${allowedSubDomains}${domain}.${tld.join(".")}${allowedPathname}`;
        return Object.assign(url, { sitebit });
      }
      return null;
    } catch {
      return null;
    }
  };
  var rankEl = (index) => html`
  <span class="rank">${index != null && !Number.isNaN(index) ? `${index + 1}.` : ""}</span>`;
  var favicon = (url) => {
    const img = url?.hostname && url.hostname !== self.location.hostname ? `https://icons.duckduckgo.com/ip3/${url.hostname}.ico` : `darky18.png`;
    return html`<img class="favicon" src="${img}" alt="${url?.hostname ?? "favicon"}" width="11" height="11"/>`;
  };
  var aThing = async ({ type, id, url: href, title, dead, deleted }, index, op) => {
    try {
      const url = tryURL(href);
      const upVoted = false;
      return html`
      <tr class="athing" id="${id}">
        <td align="right" valign="top" class="title">${rankEl(index)}</td>
        <td valign="top" class="votelinks"><center>${type === "job" ? html`<img src="s.gif" height="1" width="14">` : upVoted ? "" : html`<a id="up_${id}" onclick="popitup(this,event)" href="https://news.ycombinator.com/item?id=${id}#${id}"><div class="votearrow" title="upvote"></div></a>`}</center></td>
        <td class="title">${deleted ? "[flagged]" : html`<a href="${href}"
            class="titlelink">${favicon(url)} ${title}</a>${url?.host === self.location.host ? "" : url ? html`<span
            class="sitebit comhead"> (<a href="from?site=${url.sitebit}"><span
                class="sitestr">${url.sitebit}</span></a>)</span>` : ""}</td>`}</tr>`;
    } catch (err) {
      throw html`<tr><td>Something went wrong</td><td>${err instanceof Error ? err.message : err}</td></tr>`;
    }
  };
  var subtext = (post, index, op, { showPast = false } = {}) => {
    const { type, id, title, time, score, by, descendants, dead } = post;
    const timeAgo = time && formatDistanceToNowStrict(new Date(time), { addSuffix: true });
    return html`
    <tr>
      <td colspan="2"></td>
      <td class="subtext">
        ${!dead && type !== "job" ? html`<span class="score" id="score_${id}">${score} points</span> by` : ""}
        ${type !== "job" ? html`<a href="user?id=${by}" class="hnuser">${showPast ? identicon(by, 9) : ""} ${by}</a>` : ""}
        <span class="age" title="${time && new Date(time).toUTCString()}"><a href="item?id=${id}">${timeAgo}</a></span>
        <span id="unv_${id}"></span>
        ${showPast ? html`| <a href="https://hn.algolia.com/?query=${encodeURIComponent(title)}&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">past</a>` : ""}
        <!-- | <a href="hide?id=${id}&amp;auth=${"TODO"}&amp;goto=item%3Fid%3D${id}">hide</a> -->
        <!-- | <a href="hide?id=${id}&amp;auth=${"TODO"}&amp;goto=${op}" onclick="return hidestory(event, this, ${id})">hide</a>  -->
        ${!dead && type !== "job" ? html`| <a href="item?id=${id}">${descendants === 0 ? "discuss" : unsafeHTML(`${descendants}&nbsp;comments`)}</a></td>` : ""}
    </tr>
  `;
  };
  var rowEl = (post, i, type) => {
    if (JUNK_NEWS.some((f) => tryURL(post.url)?.hostname?.includes(f)))
      return "";
    const index = ["jobs" /* JOB */, "from" /* FROM */].includes(type) ? NaN : i;
    return html`
    ${aThing(post, index, type)}
    ${subtext(post, index, type)}
    <tr class="spacer" style="height:5px"></tr>`;
  };
  var x3 = {
    ["news" /* TOP */]: "",
    ["jobs" /* JOB */]: "jobs",
    ["ask" /* ASK */]: "Ask",
    ["best" /* BEST */]: "Top Links",
    ["newest" /* NEW */]: "New Links",
    ["show" /* SHOW */]: "Show",
    ["shownew" /* SHOW_NEW */]: "New Show",
    ["submitted" /* USER */]: `$user's submissions`,
    ["classic" /* CLASSIC */]: "",
    ["from" /* FROM */]: "Submissions from $site"
  };
  var messageEl = (message, marginBottom = 12) => html`
  <tr style="height:6px"></tr>
  <tr><td colspan="2"></td><td>${message}</td></tr>
  <tr style="height:${marginBottom}px"></tr>`;
  var mkStories = (type) => async ({ searchParams, type: contentType, url }) => {
    const p = Number(searchParams.get("p") || "1");
    if (p > Math.ceil(500 / 30))
      return notFound2("Not supported by Worker News");
    const next = Number(searchParams.get("next"));
    const n = Number(searchParams.get("n"));
    const id = "submitted" /* USER */ ? searchParams.get("id") : "";
    const site = "from" /* FROM */ ? searchParams.get("site") : "";
    const title = x3[type].replace("$user", searchParams.get("id")).replace("$site", searchParams.get("site"));
    const storiesPage = stories3({ p, n, next, id, site }, type, { url });
    if (contentType === "application/json") {
      return new JSONResponse(await jsonStringifyStream(storiesPage));
    }
    return new HTMLResponse(pageLayout({ op: type, title, id: searchParams.get("id") })(html`
    <tr>
      <td>
        <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
          <tbody>
            ${type === "show" /* SHOW */ ? messageEl(html`
              Please read the <a href="showhn.html"><u>rules</u></a>. You can also
              browse the <a href="shownew"><u>newest</u></a> Show HNs.`) : ""}
            ${type === "jobs" /* JOB */ ? messageEl(html`
              These are jobs at YC startups. See more at
              <a href="https://www.ycombinator.com/jobs"><u>ycombinator.com/jobs</u></a>.`, 14) : ""}
            ${async function* () {
      try {
        let i = next && n ? n - 1 : (p - 1) * 30;
        const { items, moreLink } = await storiesPage;
        for await (const post of items) {
          yield rowEl(post, i++, type);
        }
        yield html`<tr class="morespace" style="height:10px"></tr>
                  <tr>
                    <td colspan="2"></td>
                    <td class="title"><a href="${moreLink}" class="morelink" rel="next">More</a></td>
                  </tr>`;
      } catch (err) {
        yield html`<tr><td colspan="2"></td><td>${err instanceof Error ? err.message : err}</td></tr>`;
      }
    }}
          </tbody>
        </table>
      </td>
    </tr>`));
  };
  var news = mkStories("news" /* TOP */);
  var newest = mkStories("newest" /* NEW */);
  var best = mkStories("best" /* BEST */);
  var show = mkStories("show" /* SHOW */);
  var showNew = mkStories("shownew" /* SHOW_NEW */);
  var ask = mkStories("ask" /* ASK */);
  var jobs = mkStories("jobs" /* JOB */);
  var submitted = mkStories("submitted" /* USER */);
  var classic = mkStories("classic" /* CLASSIC */);
  var from = mkStories("from" /* FROM */);
  router.get("/news", mw, (_req, ctx) => news(ctx));
  router.get("/newest", mw, (_req, x4) => newest(x4));
  router.get("/best", mw, (_req, x4) => best(x4));
  router.get("/show", mw, (_req, x4) => show(x4));
  router.get("/shownew", mw, (_req, x4) => showNew(x4));
  router.get("/ask", mw, (_req, x4) => ask(x4));
  router.get("/jobs", mw, (_req, x4) => jobs(x4));
  router.get("/submitted", mw, (_req, x4) => submitted(x4));
  router.get("/classic", mw, (_req, x4) => classic(x4));
  router.get("/from", mw, (_req, x4) => from(x4));

  // src/routes/user.ts
  init_env();
  var dtf = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  var numDTF = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
  var user4 = async ({ searchParams, type, url }) => {
    const un = searchParams.get("id");
    if (!un)
      return notFound2("No such user.");
    const userPromise = user3(un, { url });
    const title = `Profile: ${un}`;
    if (type === "application/json") {
      return new JSONResponse(await jsonStringifyStream(userPromise));
    }
    return new HTMLResponse(pageLayout({ op: "user", title })(html`
    <tr>
      <td>
        <table border="0"><tbody>
          ${async () => {
      try {
        const uo = await userPromise;
        const dt = typeof uo?.created === "number" ? new Date(uo.created * 1e3) : new Date(uo.created ?? 0);
        const [{ value: month }, , { value: day }, , { value: year }] = numDTF.formatToParts(dt);
        return html`
                <tr class="athing"><td valign="top">user:</td><td timestamp="${uo.created}"><a href="user?id=${un}" class="hnuser">${identicon(un, 13)} ${un}</a></td></tr>
                <tr><td valign="top">created:</td><td><a href="front?day=${year}-${month}-${day}&amp;birth=${un}">${dtf.format(dt)}</a></td></tr>
                <tr><td valign="top">karma:</td><td>${uo.karma}</td></tr>
                <tr><td valign="top">about:</td><td style="overflow:hidden;">${unsafeHTML(uo.about ?? "")}</td></tr>
                <tr><td></td><td><a href="submitted?id=${un}"><u>submissions</u></a></td></tr>
                <tr><td></td><td><a href="threads?id=${un}"><u>comments</u></a></td></tr>
                <!-- <tr><td></td><td><a href="favorites?id=${un}"><u>favorites</u></a></td></tr> -->
              `;
      } catch (err) {
        return html`<tr><td colspan="2"></td><td>${err instanceof Error ? err.message : err}</td></tr>`;
      }
    }}
        </tbody></table>
        <br/><br/>
      </td>
    </tr>`));
  };
  router.get("/user", mw, (_req, x4) => user4(x4));

  // src/routes/index.ts
  router.get("/yc500.gif", (req) => fetch("https://news.ycombinator.com/yc500.gif", req));
  router.get("/newsfaq.html", (req) => fetch("https://news.ycombinator.com/newsfaq.html", req));
  router.get("/newsguidelines.html", (req) => fetch("https://news.ycombinator.com/newsguidelines.html", req));
  router.get("/showhn.html", (req) => fetch("https://news.ycombinator.com/showhn.html", req));
  router.get("/security.html", (req) => fetch("https://news.ycombinator.com/security.html", req));
  router.get("/yc.css", (req) => fetch("https://news.ycombinator.com/yc.css", req));
  router.get("/", mw, (req, x4) => news(x4));
  router.get("*", caching({
    cacheControl: "public",
    maxAge: 60 * 60 * 24 * 30 * 12
  }), handler);
  router.external("https://icons.duckduckgo.com/*", (req) => fetch(req));

  // src/entry/sw.ts
  self.addEventListener("fetch", router);
  self.addEventListener("install", async () => {
    self.skipWaiting();
    const cache = await caches.open("public");
    await cache.addAll([
      "/darkbluearrow.png",
      "/darkbluearrow2x.png",
      "/darky18.png",
      "/favicon.ico",
      "/grayarrow.gif",
      "/grayarrow2x.gif",
      "/hn.js",
      "/new.png",
      "/news.css?v=2",
      "/s.gif",
      "/y18.png",
      "/y18.gif"
    ]);
    console.log("skipWaiting");
  });
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
    console.log("claim");
  });
})();
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * Copyright (c) 2020 Henry Zhuang
 * MIT Licensed
 */
//# sourceMappingURL=sw.js.map
