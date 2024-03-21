"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
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
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ../../node_modules/.pnpm/reflect-metadata@0.2.1/node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "../../node_modules/.pnpm/reflect-metadata@0.2.1/node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect !== "undefined") {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter, root);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          }
          function makeExporter(target, previous) {
            return function(key, value) {
              Object.defineProperty(target, key, { configurable: true, writable: true, value });
              if (previous)
                previous(key, value);
            };
          }
          function functionThis() {
            try {
              return Function("return this;")();
            } catch (_) {
            }
          }
          function indirectEvalThis() {
            try {
              return (void 0, eval)("(function() { return this; })()");
            } catch (_) {
            }
          }
          function sloppyModeThis() {
            return functionThis() || indirectEvalThis();
          }
        })(function(exporter, root) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
          var metadataRegistry = GetOrCreateMetadataRegistry();
          var metadataProvider = CreateMetadataProvider(metadataRegistry);
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
          }
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var provider = GetMetadataProvider(
              target,
              propertyKey,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return false;
            return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return false;
            return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
          }
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return;
            return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
          }
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              true
            );
            provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
          }
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a3 = 0, parentKeys_1 = parentKeys; _a3 < parentKeys_1.length; _a3++) {
              var key = parentKeys_1[_a3];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          function OrdinaryOwnMetadataKeys(O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*create*/
              false
            );
            if (!provider) {
              return [];
            }
            return provider.OrdinaryOwnMetadataKeys(O, P);
          }
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function IsUndefined(x) {
            return x === void 0;
          }
          function IsNull(x) {
            return x === null;
          }
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          function ToBoolean(argument) {
            return !!argument;
          }
          function ToString(argument) {
            return "" + argument;
          }
          function ToPropertyKey(argument) {
            var key = ToPrimitive(
              argument,
              3
              /* String */
            );
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function SameValueZero(x, y) {
            return x === y || x !== x && y !== y;
          }
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator2 = method.call(obj);
            if (!IsObject(iterator2))
              throw new TypeError();
            return iterator2;
          }
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          function IteratorStep(iterator2) {
            var result = iterator2.next();
            return result.done ? false : result;
          }
          function IteratorClose(iterator2) {
            var f = iterator2["return"];
            if (f)
              f.call(iterator2);
          }
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          function CreateMetadataRegistry() {
            var fallback;
            if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
              fallback = CreateFallbackProvider(root.Reflect);
            }
            var first;
            var second;
            var rest;
            var targetProviderMap = new _WeakMap();
            var registry = {
              registerProvider,
              getProvider,
              setProvider
            };
            return registry;
            function registerProvider(provider) {
              if (!Object.isExtensible(registry)) {
                throw new Error("Cannot add provider to a frozen registry.");
              }
              switch (true) {
                case fallback === provider:
                  break;
                case IsUndefined(first):
                  first = provider;
                  break;
                case first === provider:
                  break;
                case IsUndefined(second):
                  second = provider;
                  break;
                case second === provider:
                  break;
                default:
                  if (rest === void 0)
                    rest = new _Set();
                  rest.add(provider);
                  break;
              }
            }
            function getProviderNoCache(O, P) {
              if (!IsUndefined(first)) {
                if (first.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(second)) {
                  if (second.isProviderFor(O, P))
                    return first;
                  if (!IsUndefined(rest)) {
                    var iterator2 = GetIterator(rest);
                    while (true) {
                      var next = IteratorStep(iterator2);
                      if (!next) {
                        return void 0;
                      }
                      var provider = IteratorValue(next);
                      if (provider.isProviderFor(O, P)) {
                        IteratorClose(iterator2);
                        return provider;
                      }
                    }
                  }
                }
              }
              if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
                return fallback;
              }
              return void 0;
            }
            function getProvider(O, P) {
              var providerMap = targetProviderMap.get(O);
              var provider;
              if (!IsUndefined(providerMap)) {
                provider = providerMap.get(P);
              }
              if (!IsUndefined(provider)) {
                return provider;
              }
              provider = getProviderNoCache(O, P);
              if (!IsUndefined(provider)) {
                if (IsUndefined(providerMap)) {
                  providerMap = new _Map();
                  targetProviderMap.set(O, providerMap);
                }
                providerMap.set(P, provider);
              }
              return provider;
            }
            function hasProvider(provider) {
              if (IsUndefined(provider))
                throw new TypeError();
              return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
            }
            function setProvider(O, P, provider) {
              if (!hasProvider(provider)) {
                throw new Error("Metadata provider not registered.");
              }
              var existingProvider = getProvider(O, P);
              if (existingProvider !== provider) {
                if (!IsUndefined(existingProvider)) {
                  return false;
                }
                var providerMap = targetProviderMap.get(O);
                if (IsUndefined(providerMap)) {
                  providerMap = new _Map();
                  targetProviderMap.set(O, providerMap);
                }
                providerMap.set(P, provider);
              }
              return true;
            }
          }
          function GetOrCreateMetadataRegistry() {
            var metadataRegistry2;
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
              metadataRegistry2 = root.Reflect[registrySymbol];
            }
            if (IsUndefined(metadataRegistry2)) {
              metadataRegistry2 = CreateMetadataRegistry();
            }
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
              Object.defineProperty(root.Reflect, registrySymbol, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: metadataRegistry2
              });
            }
            return metadataRegistry2;
          }
          function CreateMetadataProvider(registry) {
            var metadata2 = new _WeakMap();
            var provider = {
              isProviderFor: function(O, P) {
                var targetMetadata = metadata2.get(O);
                if (IsUndefined(targetMetadata))
                  return false;
                return targetMetadata.has(P);
              },
              OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
              OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
              OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
              OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
              OrdinaryDeleteMetadata
            };
            metadataRegistry.registerProvider(provider);
            return provider;
            function GetOrCreateMetadataMap(O, P, Create) {
              var targetMetadata = metadata2.get(O);
              var createdTargetMetadata = false;
              if (IsUndefined(targetMetadata)) {
                if (!Create)
                  return void 0;
                targetMetadata = new _Map();
                metadata2.set(O, targetMetadata);
                createdTargetMetadata = true;
              }
              var metadataMap = targetMetadata.get(P);
              if (IsUndefined(metadataMap)) {
                if (!Create)
                  return void 0;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
                if (!registry.setProvider(O, P, provider)) {
                  targetMetadata.delete(P);
                  if (createdTargetMetadata) {
                    metadata2.delete(O);
                  }
                  throw new Error("Wrong provider for target.");
                }
              }
              return metadataMap;
            }
            function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return false;
              return ToBoolean(metadataMap.has(MetadataKey));
            }
            function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return void 0;
              return metadataMap.get(MetadataKey);
            }
            function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                true
              );
              metadataMap.set(MetadataKey, MetadataValue);
            }
            function OrdinaryOwnMetadataKeys2(O, P) {
              var keys = [];
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return keys;
              var keysObj = metadataMap.keys();
              var iterator2 = GetIterator(keysObj);
              var k = 0;
              while (true) {
                var next = IteratorStep(iterator2);
                if (!next) {
                  keys.length = k;
                  return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                  keys[k] = nextValue;
                } catch (e) {
                  try {
                    IteratorClose(iterator2);
                  } finally {
                    throw e;
                  }
                }
                k++;
              }
            }
            function OrdinaryDeleteMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return false;
              if (!metadataMap.delete(MetadataKey))
                return false;
              if (metadataMap.size === 0) {
                var targetMetadata = metadata2.get(O);
                if (!IsUndefined(targetMetadata)) {
                  targetMetadata.delete(P);
                  if (targetMetadata.size === 0) {
                    metadata2.delete(targetMetadata);
                  }
                }
              }
              return true;
            }
          }
          function CreateFallbackProvider(reflect) {
            var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
            var metadataOwner = new _WeakMap();
            var provider = {
              isProviderFor: function(O, P) {
                var metadataPropertySet = metadataOwner.get(O);
                if (!IsUndefined(metadataPropertySet)) {
                  return metadataPropertySet.has(P);
                }
                if (getOwnMetadataKeys2(O, P).length) {
                  if (IsUndefined(metadataPropertySet)) {
                    metadataPropertySet = new _Set();
                    metadataOwner.set(O, metadataPropertySet);
                  }
                  metadataPropertySet.add(P);
                  return true;
                }
                return false;
              },
              OrdinaryDefineOwnMetadata: defineMetadata2,
              OrdinaryHasOwnMetadata: hasOwnMetadata2,
              OrdinaryGetOwnMetadata: getOwnMetadata2,
              OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
              OrdinaryDeleteMetadata: deleteMetadata2
            };
            return provider;
          }
          function GetMetadataProvider(O, P, Create) {
            var registeredProvider = metadataRegistry.getProvider(O, P);
            if (!IsUndefined(registeredProvider)) {
              return registeredProvider;
            }
            if (Create) {
              if (metadataRegistry.setProvider(O, P, metadataProvider)) {
                return metadataProvider;
              }
              throw new Error("Illegal state.");
            }
            return void 0;
          }
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (
              /** @class */
              function() {
                function MapIterator2(keys, values, selector) {
                  this._index = 0;
                  this._keys = keys;
                  this._values = values;
                  this._selector = selector;
                }
                MapIterator2.prototype["@@iterator"] = function() {
                  return this;
                };
                MapIterator2.prototype[iteratorSymbol] = function() {
                  return this;
                };
                MapIterator2.prototype.next = function() {
                  var index = this._index;
                  if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                      this._index = -1;
                      this._keys = arraySentinel;
                      this._values = arraySentinel;
                    } else {
                      this._index++;
                    }
                    return { value: result, done: false };
                  }
                  return { value: void 0, done: true };
                };
                MapIterator2.prototype.throw = function(error) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  throw error;
                };
                MapIterator2.prototype.return = function(value) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  return { value, done: true };
                };
                return MapIterator2;
              }()
            );
            var Map2 = (
              /** @class */
              function() {
                function Map3() {
                  this._keys = [];
                  this._values = [];
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                Object.defineProperty(Map3.prototype, "size", {
                  get: function() {
                    return this._keys.length;
                  },
                  enumerable: true,
                  configurable: true
                });
                Map3.prototype.has = function(key) {
                  return this._find(
                    key,
                    /*insert*/
                    false
                  ) >= 0;
                };
                Map3.prototype.get = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  return index >= 0 ? this._values[index] : void 0;
                };
                Map3.prototype.set = function(key, value) {
                  var index = this._find(
                    key,
                    /*insert*/
                    true
                  );
                  this._values[index] = value;
                  return this;
                };
                Map3.prototype.delete = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                      this._keys[i - 1] = this._keys[i];
                      this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (SameValueZero(key, this._cacheKey)) {
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    }
                    return true;
                  }
                  return false;
                };
                Map3.prototype.clear = function() {
                  this._keys.length = 0;
                  this._values.length = 0;
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                };
                Map3.prototype.keys = function() {
                  return new MapIterator(this._keys, this._values, getKey);
                };
                Map3.prototype.values = function() {
                  return new MapIterator(this._keys, this._values, getValue);
                };
                Map3.prototype.entries = function() {
                  return new MapIterator(this._keys, this._values, getEntry);
                };
                Map3.prototype["@@iterator"] = function() {
                  return this.entries();
                };
                Map3.prototype[iteratorSymbol] = function() {
                  return this.entries();
                };
                Map3.prototype._find = function(key, insert) {
                  if (!SameValueZero(this._cacheKey, key)) {
                    this._cacheIndex = -1;
                    for (var i = 0; i < this._keys.length; i++) {
                      if (SameValueZero(this._keys[i], key)) {
                        this._cacheIndex = i;
                        break;
                      }
                    }
                  }
                  if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(void 0);
                  }
                  return this._cacheIndex;
                };
                return Map3;
              }()
            );
            return Map2;
            function getKey(key, _) {
              return key;
            }
            function getValue(_, value) {
              return value;
            }
            function getEntry(key, value) {
              return [key, value];
            }
          }
          function CreateSetPolyfill() {
            var Set2 = (
              /** @class */
              function() {
                function Set3() {
                  this._map = new _Map();
                }
                Object.defineProperty(Set3.prototype, "size", {
                  get: function() {
                    return this._map.size;
                  },
                  enumerable: true,
                  configurable: true
                });
                Set3.prototype.has = function(value) {
                  return this._map.has(value);
                };
                Set3.prototype.add = function(value) {
                  return this._map.set(value, value), this;
                };
                Set3.prototype.delete = function(value) {
                  return this._map.delete(value);
                };
                Set3.prototype.clear = function() {
                  this._map.clear();
                };
                Set3.prototype.keys = function() {
                  return this._map.keys();
                };
                Set3.prototype.values = function() {
                  return this._map.keys();
                };
                Set3.prototype.entries = function() {
                  return this._map.entries();
                };
                Set3.prototype["@@iterator"] = function() {
                  return this.keys();
                };
                Set3.prototype[iteratorSymbol] = function() {
                  return this.keys();
                };
                return Set3;
              }()
            );
            return Set2;
          }
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (
              /** @class */
              function() {
                function WeakMap2() {
                  this._key = CreateUniqueKey();
                }
                WeakMap2.prototype.has = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.has(table, this._key) : false;
                };
                WeakMap2.prototype.get = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.get(table, this._key) : void 0;
                };
                WeakMap2.prototype.set = function(target, value) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    true
                  );
                  table[this._key] = value;
                  return this;
                };
                WeakMap2.prototype.delete = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? delete table[this._key] : false;
                };
                WeakMap2.prototype.clear = function() {
                  this._key = CreateUniqueKey();
                };
                return WeakMap2;
              }()
            );
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                  return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                  return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
              }
              return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
          }
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/constants.js
  var require_constants = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/constants.js"(exports, module) {
      var SEMVER_SPEC_VERSION = "2.0.0";
      var MAX_LENGTH = 256;
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
      9007199254740991;
      var MAX_SAFE_COMPONENT_LENGTH = 16;
      var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
      var RELEASE_TYPES = [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease"
      ];
      module.exports = {
        MAX_LENGTH,
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_SAFE_INTEGER,
        RELEASE_TYPES,
        SEMVER_SPEC_VERSION,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
      };
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/debug.js
  var require_debug = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/debug.js"(exports, module) {
      var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
      };
      module.exports = debug;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/re.js
  var require_re = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/re.js"(exports, module) {
      var {
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_LENGTH
      } = require_constants();
      var debug = require_debug();
      exports = module.exports = {};
      var re = exports.re = [];
      var safeRe = exports.safeRe = [];
      var src = exports.src = [];
      var t = exports.t = {};
      var R = 0;
      var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
      var safeRegexReplacements = [
        ["\\s", 1],
        ["\\d", MAX_LENGTH],
        [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
      ];
      var makeSafeRegex = (value) => {
        for (const [token, max] of safeRegexReplacements) {
          value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
        }
        return value;
      };
      var createToken = (name, value, isGlobal) => {
        const safe = makeSafeRegex(value);
        const index = R++;
        debug(name, index, value);
        t[name] = index;
        src[index] = value;
        re[index] = new RegExp(value, isGlobal ? "g" : void 0);
        safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
      };
      createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
      createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
      createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
      createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
      createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
      createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
      createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
      createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
      createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
      createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
      createToken("FULL", `^${src[t.FULLPLAIN]}$`);
      createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
      createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
      createToken("GTLT", "((?:<|>)?=?)");
      createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
      createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
      createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
      createToken("COERCERTL", src[t.COERCE], true);
      createToken("LONETILDE", "(?:~>?)");
      createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
      exports.tildeTrimReplace = "$1~";
      createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
      createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("LONECARET", "(?:\\^)");
      createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
      exports.caretTrimReplace = "$1^";
      createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
      createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
      createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
      createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
      exports.comparatorTrimReplace = "$1$2$3";
      createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
      createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
      createToken("STAR", "(<|>)?=?\\s*\\*");
      createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/parse-options.js
  var require_parse_options = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/parse-options.js"(exports, module) {
      var looseOption = Object.freeze({ loose: true });
      var emptyOpts = Object.freeze({});
      var parseOptions = (options) => {
        if (!options) {
          return emptyOpts;
        }
        if (typeof options !== "object") {
          return looseOption;
        }
        return options;
      };
      module.exports = parseOptions;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/identifiers.js
  var require_identifiers = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/internal/identifiers.js"(exports, module) {
      var numeric = /^[0-9]+$/;
      var compareIdentifiers = (a, b) => {
        const anum = numeric.test(a);
        const bnum = numeric.test(b);
        if (anum && bnum) {
          a = +a;
          b = +b;
        }
        return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
      };
      var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
      module.exports = {
        compareIdentifiers,
        rcompareIdentifiers
      };
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/classes/semver.js
  var require_semver = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/classes/semver.js"(exports, module) {
      var debug = require_debug();
      var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
      var { safeRe: re, t } = require_re();
      var parseOptions = require_parse_options();
      var { compareIdentifiers } = require_identifiers();
      var SemVer = class _SemVer {
        constructor(version2, options) {
          options = parseOptions(options);
          if (version2 instanceof _SemVer) {
            if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
              return version2;
            } else {
              version2 = version2.version;
            }
          } else if (typeof version2 !== "string") {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
          }
          if (version2.length > MAX_LENGTH) {
            throw new TypeError(
              `version is longer than ${MAX_LENGTH} characters`
            );
          }
          debug("SemVer", version2, options);
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          const m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
          if (!m) {
            throw new TypeError(`Invalid Version: ${version2}`);
          }
          this.raw = version2;
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!m[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = m[4].split(".").map((id2) => {
              if (/^[0-9]+$/.test(id2)) {
                const num = +id2;
                if (num >= 0 && num < MAX_SAFE_INTEGER) {
                  return num;
                }
              }
              return id2;
            });
          }
          this.build = m[5] ? m[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`;
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(other) {
          debug("SemVer.compare", this.version, this.options, other);
          if (!(other instanceof _SemVer)) {
            if (typeof other === "string" && other === this.version) {
              return 0;
            }
            other = new _SemVer(other, this.options);
          }
          if (other.version === this.version) {
            return 0;
          }
          return this.compareMain(other) || this.comparePre(other);
        }
        compareMain(other) {
          if (!(other instanceof _SemVer)) {
            other = new _SemVer(other, this.options);
          }
          return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
        }
        comparePre(other) {
          if (!(other instanceof _SemVer)) {
            other = new _SemVer(other, this.options);
          }
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          let i = 0;
          do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug("prerelease compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        compareBuild(other) {
          if (!(other instanceof _SemVer)) {
            other = new _SemVer(other, this.options);
          }
          let i = 0;
          do {
            const a = this.build[i];
            const b = other.build[i];
            debug("prerelease compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        // preminor will bump the version up to the next minor release, and immediately
        // down to pre-release. premajor and prepatch work the same way.
        inc(release, identifier, identifierBase) {
          switch (release) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", identifier, identifierBase);
              this.inc("pre", identifier, identifierBase);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", identifier, identifierBase);
              }
              this.inc("pre", identifier, identifierBase);
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre": {
              const base = Number(identifierBase) ? 1 : 0;
              if (!identifier && identifierBase === false) {
                throw new Error("invalid increment argument: identifier is empty");
              }
              if (this.prerelease.length === 0) {
                this.prerelease = [base];
              } else {
                let i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === "number") {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) {
                  if (identifier === this.prerelease.join(".") && identifierBase === false) {
                    throw new Error("invalid increment argument: identifier already exists");
                  }
                  this.prerelease.push(base);
                }
              }
              if (identifier) {
                let prerelease = [identifier, base];
                if (identifierBase === false) {
                  prerelease = [identifier];
                }
                if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = prerelease;
                  }
                } else {
                  this.prerelease = prerelease;
                }
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${release}`);
          }
          this.raw = this.format();
          if (this.build.length) {
            this.raw += `+${this.build.join(".")}`;
          }
          return this;
        }
      };
      module.exports = SemVer;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/parse.js
  var require_parse = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/parse.js"(exports, module) {
      var SemVer = require_semver();
      var parse = (version2, options, throwErrors = false) => {
        if (version2 instanceof SemVer) {
          return version2;
        }
        try {
          return new SemVer(version2, options);
        } catch (er) {
          if (!throwErrors) {
            return null;
          }
          throw er;
        }
      };
      module.exports = parse;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/valid.js
  var require_valid = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/valid.js"(exports, module) {
      var parse = require_parse();
      var valid = (version2, options) => {
        const v = parse(version2, options);
        return v ? v.version : null;
      };
      module.exports = valid;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/clean.js
  var require_clean = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/clean.js"(exports, module) {
      var parse = require_parse();
      var clean = (version2, options) => {
        const s = parse(version2.trim().replace(/^[=v]+/, ""), options);
        return s ? s.version : null;
      };
      module.exports = clean;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/inc.js
  var require_inc = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/inc.js"(exports, module) {
      var SemVer = require_semver();
      var inc = (version2, release, options, identifier, identifierBase) => {
        if (typeof options === "string") {
          identifierBase = identifier;
          identifier = options;
          options = void 0;
        }
        try {
          return new SemVer(
            version2 instanceof SemVer ? version2.version : version2,
            options
          ).inc(release, identifier, identifierBase).version;
        } catch (er) {
          return null;
        }
      };
      module.exports = inc;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/diff.js
  var require_diff = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/diff.js"(exports, module) {
      var parse = require_parse();
      var diff = (version1, version2) => {
        const v1 = parse(version1, null, true);
        const v2 = parse(version2, null, true);
        const comparison = v1.compare(v2);
        if (comparison === 0) {
          return null;
        }
        const v1Higher = comparison > 0;
        const highVersion = v1Higher ? v1 : v2;
        const lowVersion = v1Higher ? v2 : v1;
        const highHasPre = !!highVersion.prerelease.length;
        const lowHasPre = !!lowVersion.prerelease.length;
        if (lowHasPre && !highHasPre) {
          if (!lowVersion.patch && !lowVersion.minor) {
            return "major";
          }
          if (highVersion.patch) {
            return "patch";
          }
          if (highVersion.minor) {
            return "minor";
          }
          return "major";
        }
        const prefix = highHasPre ? "pre" : "";
        if (v1.major !== v2.major) {
          return prefix + "major";
        }
        if (v1.minor !== v2.minor) {
          return prefix + "minor";
        }
        if (v1.patch !== v2.patch) {
          return prefix + "patch";
        }
        return "prerelease";
      };
      module.exports = diff;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/major.js
  var require_major = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/major.js"(exports, module) {
      var SemVer = require_semver();
      var major = (a, loose) => new SemVer(a, loose).major;
      module.exports = major;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/minor.js
  var require_minor = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/minor.js"(exports, module) {
      var SemVer = require_semver();
      var minor = (a, loose) => new SemVer(a, loose).minor;
      module.exports = minor;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/patch.js
  var require_patch = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/patch.js"(exports, module) {
      var SemVer = require_semver();
      var patch = (a, loose) => new SemVer(a, loose).patch;
      module.exports = patch;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/prerelease.js
  var require_prerelease = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/prerelease.js"(exports, module) {
      var parse = require_parse();
      var prerelease = (version2, options) => {
        const parsed = parse(version2, options);
        return parsed && parsed.prerelease.length ? parsed.prerelease : null;
      };
      module.exports = prerelease;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/compare.js
  var require_compare = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/compare.js"(exports, module) {
      var SemVer = require_semver();
      var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
      module.exports = compare;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/rcompare.js
  var require_rcompare = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/rcompare.js"(exports, module) {
      var compare = require_compare();
      var rcompare = (a, b, loose) => compare(b, a, loose);
      module.exports = rcompare;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/compare-loose.js
  var require_compare_loose = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/compare-loose.js"(exports, module) {
      var compare = require_compare();
      var compareLoose = (a, b) => compare(a, b, true);
      module.exports = compareLoose;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/compare-build.js
  var require_compare_build = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/compare-build.js"(exports, module) {
      var SemVer = require_semver();
      var compareBuild = (a, b, loose) => {
        const versionA = new SemVer(a, loose);
        const versionB = new SemVer(b, loose);
        return versionA.compare(versionB) || versionA.compareBuild(versionB);
      };
      module.exports = compareBuild;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/sort.js
  var require_sort = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/sort.js"(exports, module) {
      var compareBuild = require_compare_build();
      var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
      module.exports = sort;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/rsort.js
  var require_rsort = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/rsort.js"(exports, module) {
      var compareBuild = require_compare_build();
      var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
      module.exports = rsort;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/gt.js
  var require_gt = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/gt.js"(exports, module) {
      var compare = require_compare();
      var gt = (a, b, loose) => compare(a, b, loose) > 0;
      module.exports = gt;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/lt.js
  var require_lt = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/lt.js"(exports, module) {
      var compare = require_compare();
      var lt = (a, b, loose) => compare(a, b, loose) < 0;
      module.exports = lt;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/eq.js
  var require_eq = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/eq.js"(exports, module) {
      var compare = require_compare();
      var eq = (a, b, loose) => compare(a, b, loose) === 0;
      module.exports = eq;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/neq.js
  var require_neq = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/neq.js"(exports, module) {
      var compare = require_compare();
      var neq = (a, b, loose) => compare(a, b, loose) !== 0;
      module.exports = neq;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/gte.js
  var require_gte = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/gte.js"(exports, module) {
      var compare = require_compare();
      var gte = (a, b, loose) => compare(a, b, loose) >= 0;
      module.exports = gte;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/lte.js
  var require_lte = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/lte.js"(exports, module) {
      var compare = require_compare();
      var lte = (a, b, loose) => compare(a, b, loose) <= 0;
      module.exports = lte;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/cmp.js
  var require_cmp = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/cmp.js"(exports, module) {
      var eq = require_eq();
      var neq = require_neq();
      var gt = require_gt();
      var gte = require_gte();
      var lt = require_lt();
      var lte = require_lte();
      var cmp = (a, op, b, loose) => {
        switch (op) {
          case "===":
            if (typeof a === "object") {
              a = a.version;
            }
            if (typeof b === "object") {
              b = b.version;
            }
            return a === b;
          case "!==":
            if (typeof a === "object") {
              a = a.version;
            }
            if (typeof b === "object") {
              b = b.version;
            }
            return a !== b;
          case "":
          case "=":
          case "==":
            return eq(a, b, loose);
          case "!=":
            return neq(a, b, loose);
          case ">":
            return gt(a, b, loose);
          case ">=":
            return gte(a, b, loose);
          case "<":
            return lt(a, b, loose);
          case "<=":
            return lte(a, b, loose);
          default:
            throw new TypeError(`Invalid operator: ${op}`);
        }
      };
      module.exports = cmp;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/coerce.js
  var require_coerce = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/coerce.js"(exports, module) {
      var SemVer = require_semver();
      var parse = require_parse();
      var { safeRe: re, t } = require_re();
      var coerce = (version2, options) => {
        if (version2 instanceof SemVer) {
          return version2;
        }
        if (typeof version2 === "number") {
          version2 = String(version2);
        }
        if (typeof version2 !== "string") {
          return null;
        }
        options = options || {};
        let match = null;
        if (!options.rtl) {
          match = version2.match(re[t.COERCE]);
        } else {
          let next;
          while ((next = re[t.COERCERTL].exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
              match = next;
            }
            re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
          }
          re[t.COERCERTL].lastIndex = -1;
        }
        if (match === null) {
          return null;
        }
        return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
      };
      module.exports = coerce;
    }
  });

  // ../../node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/iterator.js
  var require_iterator = __commonJS({
    "../../node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/iterator.js"(exports, module) {
      "use strict";
      module.exports = function(Yallist) {
        Yallist.prototype[Symbol.iterator] = function* () {
          for (let walker = this.head; walker; walker = walker.next) {
            yield walker.value;
          }
        };
      };
    }
  });

  // ../../node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/yallist.js
  var require_yallist = __commonJS({
    "../../node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/yallist.js"(exports, module) {
      "use strict";
      module.exports = Yallist;
      Yallist.Node = Node;
      Yallist.create = Yallist;
      function Yallist(list) {
        var self2 = this;
        if (!(self2 instanceof Yallist)) {
          self2 = new Yallist();
        }
        self2.tail = null;
        self2.head = null;
        self2.length = 0;
        if (list && typeof list.forEach === "function") {
          list.forEach(function(item) {
            self2.push(item);
          });
        } else if (arguments.length > 0) {
          for (var i = 0, l = arguments.length; i < l; i++) {
            self2.push(arguments[i]);
          }
        }
        return self2;
      }
      Yallist.prototype.removeNode = function(node) {
        if (node.list !== this) {
          throw new Error("removing node which does not belong to this list");
        }
        var next = node.next;
        var prev = node.prev;
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        if (node === this.head) {
          this.head = next;
        }
        if (node === this.tail) {
          this.tail = prev;
        }
        node.list.length--;
        node.next = null;
        node.prev = null;
        node.list = null;
        return next;
      };
      Yallist.prototype.unshiftNode = function(node) {
        if (node === this.head) {
          return;
        }
        if (node.list) {
          node.list.removeNode(node);
        }
        var head = this.head;
        node.list = this;
        node.next = head;
        if (head) {
          head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
          this.tail = node;
        }
        this.length++;
      };
      Yallist.prototype.pushNode = function(node) {
        if (node === this.tail) {
          return;
        }
        if (node.list) {
          node.list.removeNode(node);
        }
        var tail = this.tail;
        node.list = this;
        node.prev = tail;
        if (tail) {
          tail.next = node;
        }
        this.tail = node;
        if (!this.head) {
          this.head = node;
        }
        this.length++;
      };
      Yallist.prototype.push = function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
          push(this, arguments[i]);
        }
        return this.length;
      };
      Yallist.prototype.unshift = function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
          unshift(this, arguments[i]);
        }
        return this.length;
      };
      Yallist.prototype.pop = function() {
        if (!this.tail) {
          return void 0;
        }
        var res = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
        this.length--;
        return res;
      };
      Yallist.prototype.shift = function() {
        if (!this.head) {
          return void 0;
        }
        var res = this.head.value;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.length--;
        return res;
      };
      Yallist.prototype.forEach = function(fn, thisp) {
        thisp = thisp || this;
        for (var walker = this.head, i = 0; walker !== null; i++) {
          fn.call(thisp, walker.value, i, this);
          walker = walker.next;
        }
      };
      Yallist.prototype.forEachReverse = function(fn, thisp) {
        thisp = thisp || this;
        for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
          fn.call(thisp, walker.value, i, this);
          walker = walker.prev;
        }
      };
      Yallist.prototype.get = function(n) {
        for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
          walker = walker.next;
        }
        if (i === n && walker !== null) {
          return walker.value;
        }
      };
      Yallist.prototype.getReverse = function(n) {
        for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
          walker = walker.prev;
        }
        if (i === n && walker !== null) {
          return walker.value;
        }
      };
      Yallist.prototype.map = function(fn, thisp) {
        thisp = thisp || this;
        var res = new Yallist();
        for (var walker = this.head; walker !== null; ) {
          res.push(fn.call(thisp, walker.value, this));
          walker = walker.next;
        }
        return res;
      };
      Yallist.prototype.mapReverse = function(fn, thisp) {
        thisp = thisp || this;
        var res = new Yallist();
        for (var walker = this.tail; walker !== null; ) {
          res.push(fn.call(thisp, walker.value, this));
          walker = walker.prev;
        }
        return res;
      };
      Yallist.prototype.reduce = function(fn, initial) {
        var acc;
        var walker = this.head;
        if (arguments.length > 1) {
          acc = initial;
        } else if (this.head) {
          walker = this.head.next;
          acc = this.head.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var i = 0; walker !== null; i++) {
          acc = fn(acc, walker.value, i);
          walker = walker.next;
        }
        return acc;
      };
      Yallist.prototype.reduceReverse = function(fn, initial) {
        var acc;
        var walker = this.tail;
        if (arguments.length > 1) {
          acc = initial;
        } else if (this.tail) {
          walker = this.tail.prev;
          acc = this.tail.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var i = this.length - 1; walker !== null; i--) {
          acc = fn(acc, walker.value, i);
          walker = walker.prev;
        }
        return acc;
      };
      Yallist.prototype.toArray = function() {
        var arr = new Array(this.length);
        for (var i = 0, walker = this.head; walker !== null; i++) {
          arr[i] = walker.value;
          walker = walker.next;
        }
        return arr;
      };
      Yallist.prototype.toArrayReverse = function() {
        var arr = new Array(this.length);
        for (var i = 0, walker = this.tail; walker !== null; i++) {
          arr[i] = walker.value;
          walker = walker.prev;
        }
        return arr;
      };
      Yallist.prototype.slice = function(from2, to) {
        to = to || this.length;
        if (to < 0) {
          to += this.length;
        }
        from2 = from2 || 0;
        if (from2 < 0) {
          from2 += this.length;
        }
        var ret = new Yallist();
        if (to < from2 || to < 0) {
          return ret;
        }
        if (from2 < 0) {
          from2 = 0;
        }
        if (to > this.length) {
          to = this.length;
        }
        for (var i = 0, walker = this.head; walker !== null && i < from2; i++) {
          walker = walker.next;
        }
        for (; walker !== null && i < to; i++, walker = walker.next) {
          ret.push(walker.value);
        }
        return ret;
      };
      Yallist.prototype.sliceReverse = function(from2, to) {
        to = to || this.length;
        if (to < 0) {
          to += this.length;
        }
        from2 = from2 || 0;
        if (from2 < 0) {
          from2 += this.length;
        }
        var ret = new Yallist();
        if (to < from2 || to < 0) {
          return ret;
        }
        if (from2 < 0) {
          from2 = 0;
        }
        if (to > this.length) {
          to = this.length;
        }
        for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
          walker = walker.prev;
        }
        for (; walker !== null && i > from2; i--, walker = walker.prev) {
          ret.push(walker.value);
        }
        return ret;
      };
      Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
        if (start > this.length) {
          start = this.length - 1;
        }
        if (start < 0) {
          start = this.length + start;
        }
        for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
          walker = walker.next;
        }
        var ret = [];
        for (var i = 0; walker && i < deleteCount; i++) {
          ret.push(walker.value);
          walker = this.removeNode(walker);
        }
        if (walker === null) {
          walker = this.tail;
        }
        if (walker !== this.head && walker !== this.tail) {
          walker = walker.prev;
        }
        for (var i = 0; i < nodes.length; i++) {
          walker = insert(this, walker, nodes[i]);
        }
        return ret;
      };
      Yallist.prototype.reverse = function() {
        var head = this.head;
        var tail = this.tail;
        for (var walker = head; walker !== null; walker = walker.prev) {
          var p = walker.prev;
          walker.prev = walker.next;
          walker.next = p;
        }
        this.head = tail;
        this.tail = head;
        return this;
      };
      function insert(self2, node, value) {
        var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
        if (inserted.next === null) {
          self2.tail = inserted;
        }
        if (inserted.prev === null) {
          self2.head = inserted;
        }
        self2.length++;
        return inserted;
      }
      function push(self2, item) {
        self2.tail = new Node(item, self2.tail, null, self2);
        if (!self2.head) {
          self2.head = self2.tail;
        }
        self2.length++;
      }
      function unshift(self2, item) {
        self2.head = new Node(item, null, self2.head, self2);
        if (!self2.tail) {
          self2.tail = self2.head;
        }
        self2.length++;
      }
      function Node(value, prev, next, list) {
        if (!(this instanceof Node)) {
          return new Node(value, prev, next, list);
        }
        this.list = list;
        this.value = value;
        if (prev) {
          prev.next = this;
          this.prev = prev;
        } else {
          this.prev = null;
        }
        if (next) {
          next.prev = this;
          this.next = next;
        } else {
          this.next = null;
        }
      }
      try {
        require_iterator()(Yallist);
      } catch (er) {
      }
    }
  });

  // ../../node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js
  var require_lru_cache = __commonJS({
    "../../node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js"(exports, module) {
      "use strict";
      var Yallist = require_yallist();
      var MAX = Symbol("max");
      var LENGTH = Symbol("length");
      var LENGTH_CALCULATOR = Symbol("lengthCalculator");
      var ALLOW_STALE = Symbol("allowStale");
      var MAX_AGE = Symbol("maxAge");
      var DISPOSE = Symbol("dispose");
      var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
      var LRU_LIST = Symbol("lruList");
      var CACHE = Symbol("cache");
      var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
      var naiveLength = () => 1;
      var LRUCache = class {
        constructor(options) {
          if (typeof options === "number")
            options = { max: options };
          if (!options)
            options = {};
          if (options.max && (typeof options.max !== "number" || options.max < 0))
            throw new TypeError("max must be a non-negative number");
          const max = this[MAX] = options.max || Infinity;
          const lc = options.length || naiveLength;
          this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
          this[ALLOW_STALE] = options.stale || false;
          if (options.maxAge && typeof options.maxAge !== "number")
            throw new TypeError("maxAge must be a number");
          this[MAX_AGE] = options.maxAge || 0;
          this[DISPOSE] = options.dispose;
          this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
          this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
          this.reset();
        }
        // resize the cache when the max changes.
        set max(mL) {
          if (typeof mL !== "number" || mL < 0)
            throw new TypeError("max must be a non-negative number");
          this[MAX] = mL || Infinity;
          trim(this);
        }
        get max() {
          return this[MAX];
        }
        set allowStale(allowStale) {
          this[ALLOW_STALE] = !!allowStale;
        }
        get allowStale() {
          return this[ALLOW_STALE];
        }
        set maxAge(mA) {
          if (typeof mA !== "number")
            throw new TypeError("maxAge must be a non-negative number");
          this[MAX_AGE] = mA;
          trim(this);
        }
        get maxAge() {
          return this[MAX_AGE];
        }
        // resize the cache when the lengthCalculator changes.
        set lengthCalculator(lC) {
          if (typeof lC !== "function")
            lC = naiveLength;
          if (lC !== this[LENGTH_CALCULATOR]) {
            this[LENGTH_CALCULATOR] = lC;
            this[LENGTH] = 0;
            this[LRU_LIST].forEach((hit) => {
              hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
              this[LENGTH] += hit.length;
            });
          }
          trim(this);
        }
        get lengthCalculator() {
          return this[LENGTH_CALCULATOR];
        }
        get length() {
          return this[LENGTH];
        }
        get itemCount() {
          return this[LRU_LIST].length;
        }
        rforEach(fn, thisp) {
          thisp = thisp || this;
          for (let walker = this[LRU_LIST].tail; walker !== null; ) {
            const prev = walker.prev;
            forEachStep(this, fn, walker, thisp);
            walker = prev;
          }
        }
        forEach(fn, thisp) {
          thisp = thisp || this;
          for (let walker = this[LRU_LIST].head; walker !== null; ) {
            const next = walker.next;
            forEachStep(this, fn, walker, thisp);
            walker = next;
          }
        }
        keys() {
          return this[LRU_LIST].toArray().map((k) => k.key);
        }
        values() {
          return this[LRU_LIST].toArray().map((k) => k.value);
        }
        reset() {
          if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
            this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
          }
          this[CACHE] = /* @__PURE__ */ new Map();
          this[LRU_LIST] = new Yallist();
          this[LENGTH] = 0;
        }
        dump() {
          return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
            k: hit.key,
            v: hit.value,
            e: hit.now + (hit.maxAge || 0)
          }).toArray().filter((h) => h);
        }
        dumpLru() {
          return this[LRU_LIST];
        }
        set(key, value, maxAge) {
          maxAge = maxAge || this[MAX_AGE];
          if (maxAge && typeof maxAge !== "number")
            throw new TypeError("maxAge must be a number");
          const now = maxAge ? Date.now() : 0;
          const len = this[LENGTH_CALCULATOR](value, key);
          if (this[CACHE].has(key)) {
            if (len > this[MAX]) {
              del(this, this[CACHE].get(key));
              return false;
            }
            const node = this[CACHE].get(key);
            const item = node.value;
            if (this[DISPOSE]) {
              if (!this[NO_DISPOSE_ON_SET])
                this[DISPOSE](key, item.value);
            }
            item.now = now;
            item.maxAge = maxAge;
            item.value = value;
            this[LENGTH] += len - item.length;
            item.length = len;
            this.get(key);
            trim(this);
            return true;
          }
          const hit = new Entry(key, value, len, now, maxAge);
          if (hit.length > this[MAX]) {
            if (this[DISPOSE])
              this[DISPOSE](key, value);
            return false;
          }
          this[LENGTH] += hit.length;
          this[LRU_LIST].unshift(hit);
          this[CACHE].set(key, this[LRU_LIST].head);
          trim(this);
          return true;
        }
        has(key) {
          if (!this[CACHE].has(key))
            return false;
          const hit = this[CACHE].get(key).value;
          return !isStale(this, hit);
        }
        get(key) {
          return get(this, key, true);
        }
        peek(key) {
          return get(this, key, false);
        }
        pop() {
          const node = this[LRU_LIST].tail;
          if (!node)
            return null;
          del(this, node);
          return node.value;
        }
        del(key) {
          del(this, this[CACHE].get(key));
        }
        load(arr) {
          this.reset();
          const now = Date.now();
          for (let l = arr.length - 1; l >= 0; l--) {
            const hit = arr[l];
            const expiresAt = hit.e || 0;
            if (expiresAt === 0)
              this.set(hit.k, hit.v);
            else {
              const maxAge = expiresAt - now;
              if (maxAge > 0) {
                this.set(hit.k, hit.v, maxAge);
              }
            }
          }
        }
        prune() {
          this[CACHE].forEach((value, key) => get(this, key, false));
        }
      };
      var get = (self2, key, doUse) => {
        const node = self2[CACHE].get(key);
        if (node) {
          const hit = node.value;
          if (isStale(self2, hit)) {
            del(self2, node);
            if (!self2[ALLOW_STALE])
              return void 0;
          } else {
            if (doUse) {
              if (self2[UPDATE_AGE_ON_GET])
                node.value.now = Date.now();
              self2[LRU_LIST].unshiftNode(node);
            }
          }
          return hit.value;
        }
      };
      var isStale = (self2, hit) => {
        if (!hit || !hit.maxAge && !self2[MAX_AGE])
          return false;
        const diff = Date.now() - hit.now;
        return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
      };
      var trim = (self2) => {
        if (self2[LENGTH] > self2[MAX]) {
          for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
            const prev = walker.prev;
            del(self2, walker);
            walker = prev;
          }
        }
      };
      var del = (self2, node) => {
        if (node) {
          const hit = node.value;
          if (self2[DISPOSE])
            self2[DISPOSE](hit.key, hit.value);
          self2[LENGTH] -= hit.length;
          self2[CACHE].delete(hit.key);
          self2[LRU_LIST].removeNode(node);
        }
      };
      var Entry = class {
        constructor(key, value, length, now, maxAge) {
          this.key = key;
          this.value = value;
          this.length = length;
          this.now = now;
          this.maxAge = maxAge || 0;
        }
      };
      var forEachStep = (self2, fn, node, thisp) => {
        let hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            hit = void 0;
        }
        if (hit)
          fn.call(thisp, hit.value, hit.key, self2);
      };
      module.exports = LRUCache;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/classes/range.js
  var require_range = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/classes/range.js"(exports, module) {
      var Range = class _Range {
        constructor(range, options) {
          options = parseOptions(options);
          if (range instanceof _Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
              return range;
            } else {
              return new _Range(range.raw, options);
            }
          }
          if (range instanceof Comparator) {
            this.raw = range.value;
            this.set = [[range]];
            this.format();
            return this;
          }
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          this.raw = range.trim().split(/\s+/).join(" ");
          this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
          if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          }
          if (this.set.length > 1) {
            const first = this.set[0];
            this.set = this.set.filter((c) => !isNullSet(c[0]));
            if (this.set.length === 0) {
              this.set = [first];
            } else if (this.set.length > 1) {
              for (const c of this.set) {
                if (c.length === 1 && isAny(c[0])) {
                  this.set = [c];
                  break;
                }
              }
            }
          }
          this.format();
        }
        format() {
          this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(range) {
          const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
          const memoKey = memoOpts + ":" + range;
          const cached = cache.get(memoKey);
          if (cached) {
            return cached;
          }
          const loose = this.options.loose;
          const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
          range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
          debug("hyphen replace", range);
          range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
          debug("comparator trim", range);
          range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
          debug("tilde trim", range);
          range = range.replace(re[t.CARETTRIM], caretTrimReplace);
          debug("caret trim", range);
          let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
          if (loose) {
            rangeList = rangeList.filter((comp) => {
              debug("loose invalid filter", comp, this.options);
              return !!comp.match(re[t.COMPARATORLOOSE]);
            });
          }
          debug("range list", rangeList);
          const rangeMap = /* @__PURE__ */ new Map();
          const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
          for (const comp of comparators) {
            if (isNullSet(comp)) {
              return [comp];
            }
            rangeMap.set(comp.value, comp);
          }
          if (rangeMap.size > 1 && rangeMap.has("")) {
            rangeMap.delete("");
          }
          const result = [...rangeMap.values()];
          cache.set(memoKey, result);
          return result;
        }
        intersects(range, options) {
          if (!(range instanceof _Range)) {
            throw new TypeError("a Range is required");
          }
          return this.set.some((thisComparators) => {
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
              return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
                return rangeComparators.every((rangeComparator) => {
                  return thisComparator.intersects(rangeComparator, options);
                });
              });
            });
          });
        }
        // if ANY of the sets match ALL of its comparators, then pass
        test(version2) {
          if (!version2) {
            return false;
          }
          if (typeof version2 === "string") {
            try {
              version2 = new SemVer(version2, this.options);
            } catch (er) {
              return false;
            }
          }
          for (let i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version2, this.options)) {
              return true;
            }
          }
          return false;
        }
      };
      module.exports = Range;
      var LRU = require_lru_cache();
      var cache = new LRU({ max: 1e3 });
      var parseOptions = require_parse_options();
      var Comparator = require_comparator();
      var debug = require_debug();
      var SemVer = require_semver();
      var {
        safeRe: re,
        t,
        comparatorTrimReplace,
        tildeTrimReplace,
        caretTrimReplace
      } = require_re();
      var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
      var isNullSet = (c) => c.value === "<0.0.0-0";
      var isAny = (c) => c.value === "";
      var isSatisfiable = (comparators, options) => {
        let result = true;
        const remainingComparators = comparators.slice();
        let testComparator = remainingComparators.pop();
        while (result && remainingComparators.length) {
          result = remainingComparators.every((otherComparator) => {
            return testComparator.intersects(otherComparator, options);
          });
          testComparator = remainingComparators.pop();
        }
        return result;
      };
      var parseComparator = (comp, options) => {
        debug("comp", comp, options);
        comp = replaceCarets(comp, options);
        debug("caret", comp);
        comp = replaceTildes(comp, options);
        debug("tildes", comp);
        comp = replaceXRanges(comp, options);
        debug("xrange", comp);
        comp = replaceStars(comp, options);
        debug("stars", comp);
        return comp;
      };
      var isX = (id2) => !id2 || id2.toLowerCase() === "x" || id2 === "*";
      var replaceTildes = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
      };
      var replaceTilde = (comp, options) => {
        const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
        return comp.replace(r, (_, M, m, p, pr) => {
          debug("tilde", comp, _, M, m, p, pr);
          let ret;
          if (isX(M)) {
            ret = "";
          } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
          } else if (isX(p)) {
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
          } else if (pr) {
            debug("replaceTilde pr", pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
          }
          debug("tilde return", ret);
          return ret;
        });
      };
      var replaceCarets = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
      };
      var replaceCaret = (comp, options) => {
        debug("caret", comp, options);
        const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
        const z = options.includePrerelease ? "-0" : "";
        return comp.replace(r, (_, M, m, p, pr) => {
          debug("caret", comp, _, M, m, p, pr);
          let ret;
          if (isX(M)) {
            ret = "";
          } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
          } else if (isX(p)) {
            if (M === "0") {
              ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
              ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
          } else if (pr) {
            debug("replaceCaret pr", pr);
            if (M === "0") {
              if (m === "0") {
                ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
              } else {
                ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
              }
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
          } else {
            debug("no pr");
            if (M === "0") {
              if (m === "0") {
                ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
              } else {
                ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
              }
            } else {
              ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
          }
          debug("caret return", ret);
          return ret;
        });
      };
      var replaceXRanges = (comp, options) => {
        debug("replaceXRanges", comp, options);
        return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
      };
      var replaceXRange = (comp, options) => {
        comp = comp.trim();
        const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
        return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
          debug("xRange", comp, ret, gtlt, M, m, p, pr);
          const xM = isX(M);
          const xm = xM || isX(m);
          const xp = xm || isX(p);
          const anyX = xp;
          if (gtlt === "=" && anyX) {
            gtlt = "";
          }
          pr = options.includePrerelease ? "-0" : "";
          if (xM) {
            if (gtlt === ">" || gtlt === "<") {
              ret = "<0.0.0-0";
            } else {
              ret = "*";
            }
          } else if (gtlt && anyX) {
            if (xm) {
              m = 0;
            }
            p = 0;
            if (gtlt === ">") {
              gtlt = ">=";
              if (xm) {
                M = +M + 1;
                m = 0;
                p = 0;
              } else {
                m = +m + 1;
                p = 0;
              }
            } else if (gtlt === "<=") {
              gtlt = "<";
              if (xm) {
                M = +M + 1;
              } else {
                m = +m + 1;
              }
            }
            if (gtlt === "<") {
              pr = "-0";
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
          } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
          } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
          }
          debug("xRange return", ret);
          return ret;
        });
      };
      var replaceStars = (comp, options) => {
        debug("replaceStars", comp, options);
        return comp.trim().replace(re[t.STAR], "");
      };
      var replaceGTE0 = (comp, options) => {
        debug("replaceGTE0", comp, options);
        return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
      };
      var hyphenReplace = (incPr) => ($0, from2, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
        if (isX(fM)) {
          from2 = "";
        } else if (isX(fm)) {
          from2 = `>=${fM}.0.0${incPr ? "-0" : ""}`;
        } else if (isX(fp)) {
          from2 = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
        } else if (fpr) {
          from2 = `>=${from2}`;
        } else {
          from2 = `>=${from2}${incPr ? "-0" : ""}`;
        }
        if (isX(tM)) {
          to = "";
        } else if (isX(tm)) {
          to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
          to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
          to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
          to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
          to = `<=${to}`;
        }
        return `${from2} ${to}`.trim();
      };
      var testSet = (set, version2, options) => {
        for (let i = 0; i < set.length; i++) {
          if (!set[i].test(version2)) {
            return false;
          }
        }
        if (version2.prerelease.length && !options.includePrerelease) {
          for (let i = 0; i < set.length; i++) {
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
              continue;
            }
            if (set[i].semver.prerelease.length > 0) {
              const allowed = set[i].semver;
              if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
                return true;
              }
            }
          }
          return false;
        }
        return true;
      };
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/classes/comparator.js
  var require_comparator = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/classes/comparator.js"(exports, module) {
      var ANY = Symbol("SemVer ANY");
      var Comparator = class _Comparator {
        static get ANY() {
          return ANY;
        }
        constructor(comp, options) {
          options = parseOptions(options);
          if (comp instanceof _Comparator) {
            if (comp.loose === !!options.loose) {
              return comp;
            } else {
              comp = comp.value;
            }
          }
          comp = comp.trim().split(/\s+/).join(" ");
          debug("comparator", comp, options);
          this.options = options;
          this.loose = !!options.loose;
          this.parse(comp);
          if (this.semver === ANY) {
            this.value = "";
          } else {
            this.value = this.operator + this.semver.version;
          }
          debug("comp", this);
        }
        parse(comp) {
          const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
          const m = comp.match(r);
          if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
          }
          this.operator = m[1] !== void 0 ? m[1] : "";
          if (this.operator === "=") {
            this.operator = "";
          }
          if (!m[2]) {
            this.semver = ANY;
          } else {
            this.semver = new SemVer(m[2], this.options.loose);
          }
        }
        toString() {
          return this.value;
        }
        test(version2) {
          debug("Comparator.test", version2, this.options.loose);
          if (this.semver === ANY || version2 === ANY) {
            return true;
          }
          if (typeof version2 === "string") {
            try {
              version2 = new SemVer(version2, this.options);
            } catch (er) {
              return false;
            }
          }
          return cmp(version2, this.operator, this.semver, this.options);
        }
        intersects(comp, options) {
          if (!(comp instanceof _Comparator)) {
            throw new TypeError("a Comparator is required");
          }
          if (this.operator === "") {
            if (this.value === "") {
              return true;
            }
            return new Range(comp.value, options).test(this.value);
          } else if (comp.operator === "") {
            if (comp.value === "") {
              return true;
            }
            return new Range(this.value, options).test(comp.semver);
          }
          options = parseOptions(options);
          if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
            return false;
          }
          if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
            return false;
          }
          if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
            return true;
          }
          if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
            return true;
          }
          if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
            return true;
          }
          if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
            return true;
          }
          if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
            return true;
          }
          return false;
        }
      };
      module.exports = Comparator;
      var parseOptions = require_parse_options();
      var { safeRe: re, t } = require_re();
      var cmp = require_cmp();
      var debug = require_debug();
      var SemVer = require_semver();
      var Range = require_range();
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/satisfies.js
  var require_satisfies = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/functions/satisfies.js"(exports, module) {
      var Range = require_range();
      var satisfies = (version2, range, options) => {
        try {
          range = new Range(range, options);
        } catch (er) {
          return false;
        }
        return range.test(version2);
      };
      module.exports = satisfies;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/to-comparators.js
  var require_to_comparators = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/to-comparators.js"(exports, module) {
      var Range = require_range();
      var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
      module.exports = toComparators;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/max-satisfying.js
  var require_max_satisfying = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
      var SemVer = require_semver();
      var Range = require_range();
      var maxSatisfying = (versions, range, options) => {
        let max = null;
        let maxSV = null;
        let rangeObj = null;
        try {
          rangeObj = new Range(range, options);
        } catch (er) {
          return null;
        }
        versions.forEach((v) => {
          if (rangeObj.test(v)) {
            if (!max || maxSV.compare(v) === -1) {
              max = v;
              maxSV = new SemVer(max, options);
            }
          }
        });
        return max;
      };
      module.exports = maxSatisfying;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/min-satisfying.js
  var require_min_satisfying = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
      var SemVer = require_semver();
      var Range = require_range();
      var minSatisfying = (versions, range, options) => {
        let min = null;
        let minSV = null;
        let rangeObj = null;
        try {
          rangeObj = new Range(range, options);
        } catch (er) {
          return null;
        }
        versions.forEach((v) => {
          if (rangeObj.test(v)) {
            if (!min || minSV.compare(v) === 1) {
              min = v;
              minSV = new SemVer(min, options);
            }
          }
        });
        return min;
      };
      module.exports = minSatisfying;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/min-version.js
  var require_min_version = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/min-version.js"(exports, module) {
      var SemVer = require_semver();
      var Range = require_range();
      var gt = require_gt();
      var minVersion = (range, loose) => {
        range = new Range(range, loose);
        let minver = new SemVer("0.0.0");
        if (range.test(minver)) {
          return minver;
        }
        minver = new SemVer("0.0.0-0");
        if (range.test(minver)) {
          return minver;
        }
        minver = null;
        for (let i = 0; i < range.set.length; ++i) {
          const comparators = range.set[i];
          let setMin = null;
          comparators.forEach((comparator) => {
            const compver = new SemVer(comparator.semver.version);
            switch (comparator.operator) {
              case ">":
                if (compver.prerelease.length === 0) {
                  compver.patch++;
                } else {
                  compver.prerelease.push(0);
                }
                compver.raw = compver.format();
              case "":
              case ">=":
                if (!setMin || gt(compver, setMin)) {
                  setMin = compver;
                }
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
          });
          if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
          }
        }
        if (minver && range.test(minver)) {
          return minver;
        }
        return null;
      };
      module.exports = minVersion;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/valid.js
  var require_valid2 = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/valid.js"(exports, module) {
      var Range = require_range();
      var validRange = (range, options) => {
        try {
          return new Range(range, options).range || "*";
        } catch (er) {
          return null;
        }
      };
      module.exports = validRange;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/outside.js
  var require_outside = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/outside.js"(exports, module) {
      var SemVer = require_semver();
      var Comparator = require_comparator();
      var { ANY } = Comparator;
      var Range = require_range();
      var satisfies = require_satisfies();
      var gt = require_gt();
      var lt = require_lt();
      var lte = require_lte();
      var gte = require_gte();
      var outside = (version2, range, hilo, options) => {
        version2 = new SemVer(version2, options);
        range = new Range(range, options);
        let gtfn, ltefn, ltfn, comp, ecomp;
        switch (hilo) {
          case ">":
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = ">";
            ecomp = ">=";
            break;
          case "<":
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = "<";
            ecomp = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (satisfies(version2, range, options)) {
          return false;
        }
        for (let i = 0; i < range.set.length; ++i) {
          const comparators = range.set[i];
          let high = null;
          let low = null;
          comparators.forEach((comparator) => {
            if (comparator.semver === ANY) {
              comparator = new Comparator(">=0.0.0");
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
              high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
              low = comparator;
            }
          });
          if (high.operator === comp || high.operator === ecomp) {
            return false;
          }
          if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
            return false;
          } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
            return false;
          }
        }
        return true;
      };
      module.exports = outside;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/gtr.js
  var require_gtr = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/gtr.js"(exports, module) {
      var outside = require_outside();
      var gtr = (version2, range, options) => outside(version2, range, ">", options);
      module.exports = gtr;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/ltr.js
  var require_ltr = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/ltr.js"(exports, module) {
      var outside = require_outside();
      var ltr = (version2, range, options) => outside(version2, range, "<", options);
      module.exports = ltr;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/intersects.js
  var require_intersects = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/intersects.js"(exports, module) {
      var Range = require_range();
      var intersects = (r1, r2, options) => {
        r1 = new Range(r1, options);
        r2 = new Range(r2, options);
        return r1.intersects(r2, options);
      };
      module.exports = intersects;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/simplify.js
  var require_simplify = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/simplify.js"(exports, module) {
      var satisfies = require_satisfies();
      var compare = require_compare();
      module.exports = (versions, range, options) => {
        const set = [];
        let first = null;
        let prev = null;
        const v = versions.sort((a, b) => compare(a, b, options));
        for (const version2 of v) {
          const included = satisfies(version2, range, options);
          if (included) {
            prev = version2;
            if (!first) {
              first = version2;
            }
          } else {
            if (prev) {
              set.push([first, prev]);
            }
            prev = null;
            first = null;
          }
        }
        if (first) {
          set.push([first, null]);
        }
        const ranges = [];
        for (const [min, max] of set) {
          if (min === max) {
            ranges.push(min);
          } else if (!max && min === v[0]) {
            ranges.push("*");
          } else if (!max) {
            ranges.push(`>=${min}`);
          } else if (min === v[0]) {
            ranges.push(`<=${max}`);
          } else {
            ranges.push(`${min} - ${max}`);
          }
        }
        const simplified = ranges.join(" || ");
        const original = typeof range.raw === "string" ? range.raw : String(range);
        return simplified.length < original.length ? simplified : range;
      };
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/subset.js
  var require_subset = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/ranges/subset.js"(exports, module) {
      var Range = require_range();
      var Comparator = require_comparator();
      var { ANY } = Comparator;
      var satisfies = require_satisfies();
      var compare = require_compare();
      var subset = (sub, dom, options = {}) => {
        if (sub === dom) {
          return true;
        }
        sub = new Range(sub, options);
        dom = new Range(dom, options);
        let sawNonNull = false;
        OUTER:
          for (const simpleSub of sub.set) {
            for (const simpleDom of dom.set) {
              const isSub = simpleSubset(simpleSub, simpleDom, options);
              sawNonNull = sawNonNull || isSub !== null;
              if (isSub) {
                continue OUTER;
              }
            }
            if (sawNonNull) {
              return false;
            }
          }
        return true;
      };
      var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
      var minimumVersion = [new Comparator(">=0.0.0")];
      var simpleSubset = (sub, dom, options) => {
        if (sub === dom) {
          return true;
        }
        if (sub.length === 1 && sub[0].semver === ANY) {
          if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
          } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
          } else {
            sub = minimumVersion;
          }
        }
        if (dom.length === 1 && dom[0].semver === ANY) {
          if (options.includePrerelease) {
            return true;
          } else {
            dom = minimumVersion;
          }
        }
        const eqSet = /* @__PURE__ */ new Set();
        let gt, lt;
        for (const c of sub) {
          if (c.operator === ">" || c.operator === ">=") {
            gt = higherGT(gt, c, options);
          } else if (c.operator === "<" || c.operator === "<=") {
            lt = lowerLT(lt, c, options);
          } else {
            eqSet.add(c.semver);
          }
        }
        if (eqSet.size > 1) {
          return null;
        }
        let gtltComp;
        if (gt && lt) {
          gtltComp = compare(gt.semver, lt.semver, options);
          if (gtltComp > 0) {
            return null;
          } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
            return null;
          }
        }
        for (const eq of eqSet) {
          if (gt && !satisfies(eq, String(gt), options)) {
            return null;
          }
          if (lt && !satisfies(eq, String(lt), options)) {
            return null;
          }
          for (const c of dom) {
            if (!satisfies(eq, String(c), options)) {
              return false;
            }
          }
          return true;
        }
        let higher, lower;
        let hasDomLT, hasDomGT;
        let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
        let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
        if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
          needDomLTPre = false;
        }
        for (const c of dom) {
          hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
          hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
          if (gt) {
            if (needDomGTPre) {
              if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                needDomGTPre = false;
              }
            }
            if (c.operator === ">" || c.operator === ">=") {
              higher = higherGT(gt, c, options);
              if (higher === c && higher !== gt) {
                return false;
              }
            } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
              return false;
            }
          }
          if (lt) {
            if (needDomLTPre) {
              if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                needDomLTPre = false;
              }
            }
            if (c.operator === "<" || c.operator === "<=") {
              lower = lowerLT(lt, c, options);
              if (lower === c && lower !== lt) {
                return false;
              }
            } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
              return false;
            }
          }
          if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
          }
        }
        if (gt && hasDomLT && !lt && gtltComp !== 0) {
          return false;
        }
        if (lt && hasDomGT && !gt && gtltComp !== 0) {
          return false;
        }
        if (needDomGTPre || needDomLTPre) {
          return false;
        }
        return true;
      };
      var higherGT = (a, b, options) => {
        if (!a) {
          return b;
        }
        const comp = compare(a.semver, b.semver, options);
        return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
      };
      var lowerLT = (a, b, options) => {
        if (!a) {
          return b;
        }
        const comp = compare(a.semver, b.semver, options);
        return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
      };
      module.exports = subset;
    }
  });

  // ../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/index.js
  var require_semver2 = __commonJS({
    "../../node_modules/.pnpm/semver@7.5.4/node_modules/semver/index.js"(exports, module) {
      var internalRe = require_re();
      var constants = require_constants();
      var SemVer = require_semver();
      var identifiers = require_identifiers();
      var parse = require_parse();
      var valid = require_valid();
      var clean = require_clean();
      var inc = require_inc();
      var diff = require_diff();
      var major = require_major();
      var minor = require_minor();
      var patch = require_patch();
      var prerelease = require_prerelease();
      var compare = require_compare();
      var rcompare = require_rcompare();
      var compareLoose = require_compare_loose();
      var compareBuild = require_compare_build();
      var sort = require_sort();
      var rsort = require_rsort();
      var gt = require_gt();
      var lt = require_lt();
      var eq = require_eq();
      var neq = require_neq();
      var gte = require_gte();
      var lte = require_lte();
      var cmp = require_cmp();
      var coerce = require_coerce();
      var Comparator = require_comparator();
      var Range = require_range();
      var satisfies = require_satisfies();
      var toComparators = require_to_comparators();
      var maxSatisfying = require_max_satisfying();
      var minSatisfying = require_min_satisfying();
      var minVersion = require_min_version();
      var validRange = require_valid2();
      var outside = require_outside();
      var gtr = require_gtr();
      var ltr = require_ltr();
      var intersects = require_intersects();
      var simplifyRange = require_simplify();
      var subset = require_subset();
      module.exports = {
        parse,
        valid,
        clean,
        inc,
        diff,
        major,
        minor,
        patch,
        prerelease,
        compare,
        rcompare,
        compareLoose,
        compareBuild,
        sort,
        rsort,
        gt,
        lt,
        eq,
        neq,
        gte,
        lte,
        cmp,
        coerce,
        Comparator,
        Range,
        satisfies,
        toComparators,
        maxSatisfying,
        minSatisfying,
        minVersion,
        validRange,
        outside,
        gtr,
        ltr,
        intersects,
        simplifyRange,
        subset,
        SemVer,
        re: internalRe.re,
        src: internalRe.src,
        tokens: internalRe.t,
        SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: constants.RELEASE_TYPES,
        compareIdentifiers: identifiers.compareIdentifiers,
        rcompareIdentifiers: identifiers.rcompareIdentifiers
      };
    }
  });

  // src/index.ts
  var import_reflect_metadata = __toESM(require_Reflect());

  // src/internal/config/di/configTypes.ts
  var configTypes = {
    LocalConfigDataSource: Symbol.for("LocalConfigDataSource"),
    RemoteConfigDataSource: Symbol.for("RemoteConfigDataSource"),
    ConfigService: Symbol.for("ConfigService"),
    GetSdkVersionUseCase: Symbol.for("GetSdkVersionUseCase")
  };

  // src/internal/discovery/di/discoveryTypes.ts
  var discoveryTypes = {
    StartDiscoveringUseCase: Symbol.for("StartDiscoveringUseCase"),
    StopDiscoveringUseCase: Symbol.for("StopDiscoveringUseCase"),
    ConnectUseCase: Symbol.for("ConnectUseCase")
  };

  // src/internal/hackathon/hackTypes.ts
  var hackTypes = {
    HackathonService: Symbol.for("HackathonService")
  };

  // src/internal/send/di/sendTypes.ts
  var sendTypes = {
    SendService: Symbol.for("SendService")
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/constants/metadata_keys.js
  var NAMED_TAG = "named";
  var NAME_TAG = "name";
  var UNMANAGED_TAG = "unmanaged";
  var OPTIONAL_TAG = "optional";
  var INJECT_TAG = "inject";
  var MULTI_INJECT_TAG = "multi_inject";
  var TAGGED = "inversify:tagged";
  var TAGGED_PROP = "inversify:tagged_props";
  var PARAM_TYPES = "inversify:paramtypes";
  var DESIGN_PARAM_TYPES = "design:paramtypes";
  var POST_CONSTRUCT = "post_construct";
  var PRE_DESTROY = "pre_destroy";
  function getNonCustomTagKeys() {
    return [
      INJECT_TAG,
      MULTI_INJECT_TAG,
      NAME_TAG,
      UNMANAGED_TAG,
      NAMED_TAG,
      OPTIONAL_TAG
    ];
  }
  var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/constants/literal_types.js
  var BindingScopeEnum = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
  };
  var BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
  };
  var TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/id.js
  var idCounter = 0;
  function id() {
    return idCounter++;
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/bindings/binding.js
  var Binding = function() {
    function Binding2(serviceIdentifier, scope) {
      this.id = id();
      this.activated = false;
      this.serviceIdentifier = serviceIdentifier;
      this.scope = scope;
      this.type = BindingTypeEnum.Invalid;
      this.constraint = function(request) {
        return true;
      };
      this.implementationType = null;
      this.cache = null;
      this.factory = null;
      this.provider = null;
      this.onActivation = null;
      this.onDeactivation = null;
      this.dynamicValue = null;
    }
    Binding2.prototype.clone = function() {
      var clone = new Binding2(this.serviceIdentifier, this.scope);
      clone.activated = clone.scope === BindingScopeEnum.Singleton ? this.activated : false;
      clone.implementationType = this.implementationType;
      clone.dynamicValue = this.dynamicValue;
      clone.scope = this.scope;
      clone.type = this.type;
      clone.factory = this.factory;
      clone.provider = this.provider;
      clone.constraint = this.constraint;
      clone.onActivation = this.onActivation;
      clone.onDeactivation = this.onDeactivation;
      clone.cache = this.cache;
      return clone;
    };
    return Binding2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/constants/error_msgs.js
  var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
  var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
  var NULL_ARGUMENT = "NULL argument";
  var KEY_NOT_FOUND = "Key Not Found";
  var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
  var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
  var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
  var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
  var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
  var UNDEFINED_INJECT_ANNOTATION = function(name) {
    return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifier to  overcome this limitation.";
  };
  var CIRCULAR_DEPENDENCY = "Circular dependency found:";
  var INVALID_BINDING_TYPE = "Invalid binding type:";
  var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
  var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
  var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
  var LAZY_IN_SYNC = function(key) {
    return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
  };
  var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
  var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
  var ARGUMENTS_LENGTH_MISMATCH = function() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }
    return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
  };
  var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
  var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = 'Invalid Container option. Default scope must be a string ("singleton" or "transient").';
  var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
  var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
  var ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
  var POST_CONSTRUCT_ERROR = function(clazz, errorMessage) {
    return "@postConstruct error in class " + clazz + ": " + errorMessage;
  };
  var PRE_DESTROY_ERROR = function(clazz, errorMessage) {
    return "@preDestroy error in class " + clazz + ": " + errorMessage;
  };
  var ON_DEACTIVATION_ERROR = function(clazz, errorMessage) {
    return "onDeactivation() error in class " + clazz + ": " + errorMessage;
  };
  var CIRCULAR_DEPENDENCY_IN_FACTORY = function(factoryType, serviceIdentifier) {
    return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with " + ("service identifier '" + serviceIdentifier + "'.");
  };
  var STACK_OVERFLOW = "Maximum call stack size exceeded";

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/metadata_reader.js
  var MetadataReader = function() {
    function MetadataReader2() {
    }
    MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
      var compilerGeneratedMetadata = Reflect.getMetadata(PARAM_TYPES, constructorFunc);
      var userGeneratedMetadata = Reflect.getMetadata(TAGGED, constructorFunc);
      return {
        compilerGeneratedMetadata,
        userGeneratedMetadata: userGeneratedMetadata || {}
      };
    };
    MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
      var userGeneratedMetadata = Reflect.getMetadata(TAGGED_PROP, constructorFunc) || [];
      return userGeneratedMetadata;
    };
    return MetadataReader2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/bindings/binding_count.js
  var BindingCount = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/exceptions.js
  function isStackOverflowExeption(error) {
    return error instanceof RangeError || error.message === STACK_OVERFLOW;
  }
  var tryAndThrowErrorIfStackOverflow = function(fn, errorCallback) {
    try {
      return fn();
    } catch (error) {
      if (isStackOverflowExeption(error)) {
        error = errorCallback();
      }
      throw error;
    }
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/serialization.js
  function getServiceIdentifierAsString(serviceIdentifier) {
    if (typeof serviceIdentifier === "function") {
      var _serviceIdentifier = serviceIdentifier;
      return _serviceIdentifier.name;
    } else if (typeof serviceIdentifier === "symbol") {
      return serviceIdentifier.toString();
    } else {
      var _serviceIdentifier = serviceIdentifier;
      return _serviceIdentifier;
    }
  }
  function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings2) {
    var registeredBindingsList = "";
    var registeredBindings = getBindings2(container, serviceIdentifier);
    if (registeredBindings.length !== 0) {
      registeredBindingsList = "\nRegistered bindings:";
      registeredBindings.forEach(function(binding) {
        var name = "Object";
        if (binding.implementationType !== null) {
          name = getFunctionName(binding.implementationType);
        }
        registeredBindingsList = registeredBindingsList + "\n " + name;
        if (binding.constraint.metaData) {
          registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
        }
      });
    }
    return registeredBindingsList;
  }
  function alreadyDependencyChain(request, serviceIdentifier) {
    if (request.parentRequest === null) {
      return false;
    } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
      return true;
    } else {
      return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
    }
  }
  function dependencyChainToString(request) {
    function _createStringArr(req, result) {
      if (result === void 0) {
        result = [];
      }
      var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
      result.push(serviceIdentifier);
      if (req.parentRequest !== null) {
        return _createStringArr(req.parentRequest, result);
      }
      return result;
    }
    var stringArr = _createStringArr(request);
    return stringArr.reverse().join(" --> ");
  }
  function circularDependencyToException(request) {
    request.childRequests.forEach(function(childRequest) {
      if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
        var services = dependencyChainToString(childRequest);
        throw new Error(CIRCULAR_DEPENDENCY + " " + services);
      } else {
        circularDependencyToException(childRequest);
      }
    });
  }
  function listMetadataForTarget(serviceIdentifierString, target) {
    if (target.isTagged() || target.isNamed()) {
      var m_1 = "";
      var namedTag = target.getNamedTag();
      var otherTags = target.getCustomTags();
      if (namedTag !== null) {
        m_1 += namedTag.toString() + "\n";
      }
      if (otherTags !== null) {
        otherTags.forEach(function(tag) {
          m_1 += tag.toString() + "\n";
        });
      }
      return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
    } else {
      return " " + serviceIdentifierString;
    }
  }
  function getFunctionName(func) {
    if (func.name) {
      return func.name;
    } else {
      var name_1 = func.toString();
      var match = name_1.match(/^function\s*([^\s(]+)/);
      return match ? match[1] : "Anonymous function: " + name_1;
    }
  }
  function getSymbolDescription(symbol) {
    return symbol.toString().slice(7, -1);
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/context.js
  var Context = function() {
    function Context2(container) {
      this.id = id();
      this.container = container;
    }
    Context2.prototype.addPlan = function(plan2) {
      this.plan = plan2;
    };
    Context2.prototype.setCurrentRequest = function(currentRequest) {
      this.currentRequest = currentRequest;
    };
    return Context2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/metadata.js
  var Metadata = function() {
    function Metadata2(key, value) {
      this.key = key;
      this.value = value;
    }
    Metadata2.prototype.toString = function() {
      if (this.key === NAMED_TAG) {
        return "named: " + String(this.value).toString() + " ";
      } else {
        return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
      }
    };
    return Metadata2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/plan.js
  var Plan = /* @__PURE__ */ function() {
    function Plan2(parentContext, rootRequest) {
      this.parentContext = parentContext;
      this.rootRequest = rootRequest;
    }
    return Plan2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/annotation/lazy_service_identifier.js
  var LazyServiceIdentifier = function() {
    function LazyServiceIdentifier2(cb) {
      this._cb = cb;
    }
    LazyServiceIdentifier2.prototype.unwrap = function() {
      return this._cb();
    };
    return LazyServiceIdentifier2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/queryable_string.js
  var QueryableString = function() {
    function QueryableString2(str) {
      this.str = str;
    }
    QueryableString2.prototype.startsWith = function(searchString) {
      return this.str.indexOf(searchString) === 0;
    };
    QueryableString2.prototype.endsWith = function(searchString) {
      var reverseString = "";
      var reverseSearchString = searchString.split("").reverse().join("");
      reverseString = this.str.split("").reverse().join("");
      return this.startsWith.call({ str: reverseString }, reverseSearchString);
    };
    QueryableString2.prototype.contains = function(searchString) {
      return this.str.indexOf(searchString) !== -1;
    };
    QueryableString2.prototype.equals = function(compareString) {
      return this.str === compareString;
    };
    QueryableString2.prototype.value = function() {
      return this.str;
    };
    return QueryableString2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/target.js
  var Target = function() {
    function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
      this.id = id();
      this.type = type;
      this.serviceIdentifier = serviceIdentifier;
      var queryableName = typeof identifier === "symbol" ? getSymbolDescription(identifier) : identifier;
      this.name = new QueryableString(queryableName || "");
      this.identifier = identifier;
      this.metadata = new Array();
      var metadataItem = null;
      if (typeof namedOrTagged === "string") {
        metadataItem = new Metadata(NAMED_TAG, namedOrTagged);
      } else if (namedOrTagged instanceof Metadata) {
        metadataItem = namedOrTagged;
      }
      if (metadataItem !== null) {
        this.metadata.push(metadataItem);
      }
    }
    Target2.prototype.hasTag = function(key) {
      for (var _i = 0, _a3 = this.metadata; _i < _a3.length; _i++) {
        var m = _a3[_i];
        if (m.key === key) {
          return true;
        }
      }
      return false;
    };
    Target2.prototype.isArray = function() {
      return this.hasTag(MULTI_INJECT_TAG);
    };
    Target2.prototype.matchesArray = function(name) {
      return this.matchesTag(MULTI_INJECT_TAG)(name);
    };
    Target2.prototype.isNamed = function() {
      return this.hasTag(NAMED_TAG);
    };
    Target2.prototype.isTagged = function() {
      return this.metadata.some(function(metadata) {
        return NON_CUSTOM_TAG_KEYS.every(function(key) {
          return metadata.key !== key;
        });
      });
    };
    Target2.prototype.isOptional = function() {
      return this.matchesTag(OPTIONAL_TAG)(true);
    };
    Target2.prototype.getNamedTag = function() {
      if (this.isNamed()) {
        return this.metadata.filter(function(m) {
          return m.key === NAMED_TAG;
        })[0];
      }
      return null;
    };
    Target2.prototype.getCustomTags = function() {
      if (this.isTagged()) {
        return this.metadata.filter(function(metadata) {
          return NON_CUSTOM_TAG_KEYS.every(function(key) {
            return metadata.key !== key;
          });
        });
      } else {
        return null;
      }
    };
    Target2.prototype.matchesNamedTag = function(name) {
      return this.matchesTag(NAMED_TAG)(name);
    };
    Target2.prototype.matchesTag = function(key) {
      var _this = this;
      return function(value) {
        for (var _i = 0, _a3 = _this.metadata; _i < _a3.length; _i++) {
          var m = _a3[_i];
          if (m.key === key && m.value === value) {
            return true;
          }
        }
        return false;
      };
    };
    return Target2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/reflection_utils.js
  var __spreadArray = function(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from2.length, ar; i < l; i++) {
        if (ar || !(i in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i);
          ar[i] = from2[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  };
  function getDependencies(metadataReader, func) {
    var constructorName = getFunctionName(func);
    return getTargets(metadataReader, constructorName, func, false);
  }
  function getTargets(metadataReader, constructorName, func, isBaseClass) {
    var metadata = metadataReader.getConstructorMetadata(func);
    var serviceIdentifiers = metadata.compilerGeneratedMetadata;
    if (serviceIdentifiers === void 0) {
      var msg = MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
      throw new Error(msg);
    }
    var constructorArgsMetadata = metadata.userGeneratedMetadata;
    var keys = Object.keys(constructorArgsMetadata);
    var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
    var hasOptionalParameters = keys.length > func.length;
    var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
    var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
    var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
    var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
    return targets;
  }
  function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
    var targetMetadata = constructorArgsMetadata[index.toString()] || [];
    var metadata = formatTargetMetadata(targetMetadata);
    var isManaged = metadata.unmanaged !== true;
    var serviceIdentifier = serviceIdentifiers[index];
    var injectIdentifier = metadata.inject || metadata.multiInject;
    serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
    if (serviceIdentifier instanceof LazyServiceIdentifier) {
      serviceIdentifier = serviceIdentifier.unwrap();
    }
    if (isManaged) {
      var isObject2 = serviceIdentifier === Object;
      var isFunction2 = serviceIdentifier === Function;
      var isUndefined = serviceIdentifier === void 0;
      var isUnknownType = isObject2 || isFunction2 || isUndefined;
      if (!isBaseClass && isUnknownType) {
        var msg = MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
        throw new Error(msg);
      }
      var target = new Target(TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
      target.metadata = targetMetadata;
      return target;
    }
    return null;
  }
  function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
    var targets = [];
    for (var i = 0; i < iterations; i++) {
      var index = i;
      var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
      if (target !== null) {
        targets.push(target);
      }
    }
    return targets;
  }
  function _getServiceIdentifierForProperty(inject2, multiInject, propertyName, className) {
    var serviceIdentifier = inject2 || multiInject;
    if (serviceIdentifier === void 0) {
      var msg = MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
      throw new Error(msg);
    }
    return serviceIdentifier;
  }
  function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
    var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
    var targets = [];
    var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
    var stringKeys = Object.keys(classPropsMetadata);
    var keys = stringKeys.concat(symbolKeys);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
      var key = keys_1[_i];
      var targetMetadata = classPropsMetadata[key];
      var metadata = formatTargetMetadata(targetMetadata);
      var identifier = metadata.targetName || key;
      var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
      var target = new Target(TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
      target.metadata = targetMetadata;
      targets.push(target);
    }
    var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
    if (baseConstructor !== Object) {
      var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
      targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
    }
    return targets;
  }
  function getBaseClassDependencyCount(metadataReader, func) {
    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
    if (baseConstructor !== Object) {
      var baseConstructorName = getFunctionName(baseConstructor);
      var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
      var metadata = targets.map(function(t) {
        return t.metadata.filter(function(m) {
          return m.key === UNMANAGED_TAG;
        });
      });
      var unmanagedCount = [].concat.apply([], metadata).length;
      var dependencyCount = targets.length - unmanagedCount;
      if (dependencyCount > 0) {
        return dependencyCount;
      } else {
        return getBaseClassDependencyCount(metadataReader, baseConstructor);
      }
    } else {
      return 0;
    }
  }
  function formatTargetMetadata(targetMetadata) {
    var targetMetadataMap = {};
    targetMetadata.forEach(function(m) {
      targetMetadataMap[m.key.toString()] = m.value;
    });
    return {
      inject: targetMetadataMap[INJECT_TAG],
      multiInject: targetMetadataMap[MULTI_INJECT_TAG],
      targetName: targetMetadataMap[NAME_TAG],
      unmanaged: targetMetadataMap[UNMANAGED_TAG]
    };
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/request.js
  var Request = function() {
    function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
      this.id = id();
      this.serviceIdentifier = serviceIdentifier;
      this.parentContext = parentContext;
      this.parentRequest = parentRequest;
      this.target = target;
      this.childRequests = [];
      this.bindings = Array.isArray(bindings) ? bindings : [bindings];
      this.requestScope = parentRequest === null ? /* @__PURE__ */ new Map() : null;
    }
    Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
      var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
      this.childRequests.push(child);
      return child;
    };
    return Request2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/planning/planner.js
  function getBindingDictionary(cntnr) {
    return cntnr._bindingDictionary;
  }
  function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
    var metadataKey = isMultiInject ? MULTI_INJECT_TAG : INJECT_TAG;
    var injectMetadata = new Metadata(metadataKey, serviceIdentifier);
    var target = new Target(targetType, name, serviceIdentifier, injectMetadata);
    if (key !== void 0) {
      var tagMetadata = new Metadata(key, value);
      target.metadata.push(tagMetadata);
    }
    return target;
  }
  function _getActiveBindings(metadataReader, avoidConstraints, context2, parentRequest, target) {
    var bindings = getBindings(context2.container, target.serviceIdentifier);
    var activeBindings = [];
    if (bindings.length === BindingCount.NoBindingsAvailable && context2.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
      context2.container.bind(target.serviceIdentifier).toSelf();
      bindings = getBindings(context2.container, target.serviceIdentifier);
    }
    if (!avoidConstraints) {
      activeBindings = bindings.filter(function(binding) {
        var request = new Request(binding.serviceIdentifier, context2, parentRequest, binding, target);
        return binding.constraint(request);
      });
    } else {
      activeBindings = bindings;
    }
    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context2.container);
    return activeBindings;
  }
  function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
    switch (bindings.length) {
      case BindingCount.NoBindingsAvailable:
        if (target.isOptional()) {
          return bindings;
        } else {
          var serviceIdentifierString = getServiceIdentifierAsString(serviceIdentifier);
          var msg = NOT_REGISTERED;
          msg += listMetadataForTarget(serviceIdentifierString, target);
          msg += listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
          throw new Error(msg);
        }
      case BindingCount.OnlyOneBindingAvailable:
        return bindings;
      case BindingCount.MultipleBindingsAvailable:
      default:
        if (!target.isArray()) {
          var serviceIdentifierString = getServiceIdentifierAsString(serviceIdentifier);
          var msg = AMBIGUOUS_MATCH + " " + serviceIdentifierString;
          msg += listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
          throw new Error(msg);
        } else {
          return bindings;
        }
    }
  }
  function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context2, parentRequest, target) {
    var activeBindings;
    var childRequest;
    if (parentRequest === null) {
      activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context2, null, target);
      childRequest = new Request(serviceIdentifier, context2, null, activeBindings, target);
      var thePlan = new Plan(context2, childRequest);
      context2.addPlan(thePlan);
    } else {
      activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context2, parentRequest, target);
      childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
    }
    activeBindings.forEach(function(binding) {
      var subChildRequest = null;
      if (target.isArray()) {
        subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
      } else {
        if (binding.cache) {
          return;
        }
        subChildRequest = childRequest;
      }
      if (binding.type === BindingTypeEnum.Instance && binding.implementationType !== null) {
        var dependencies = getDependencies(metadataReader, binding.implementationType);
        if (!context2.container.options.skipBaseClassChecks) {
          var baseClassDependencyCount = getBaseClassDependencyCount(metadataReader, binding.implementationType);
          if (dependencies.length < baseClassDependencyCount) {
            var error = ARGUMENTS_LENGTH_MISMATCH(getFunctionName(binding.implementationType));
            throw new Error(error);
          }
        }
        dependencies.forEach(function(dependency) {
          _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context2, subChildRequest, dependency);
        });
      }
    });
  }
  function getBindings(container, serviceIdentifier) {
    var bindings = [];
    var bindingDictionary = getBindingDictionary(container);
    if (bindingDictionary.hasKey(serviceIdentifier)) {
      bindings = bindingDictionary.get(serviceIdentifier);
    } else if (container.parent !== null) {
      bindings = getBindings(container.parent, serviceIdentifier);
    }
    return bindings;
  }
  function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
    if (avoidConstraints === void 0) {
      avoidConstraints = false;
    }
    var context2 = new Context(container);
    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
    try {
      _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context2, null, target);
      return context2;
    } catch (error) {
      if (isStackOverflowExeption(error)) {
        circularDependencyToException(context2.plan.rootRequest);
      }
      throw error;
    }
  }
  function createMockRequest(container, serviceIdentifier, key, value) {
    var target = new Target(TargetTypeEnum.Variable, "", serviceIdentifier, new Metadata(key, value));
    var context2 = new Context(container);
    var request = new Request(serviceIdentifier, context2, null, [], target);
    return request;
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/async.js
  function isPromise(object) {
    var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
    return isObjectOrFunction && typeof object.then === "function";
  }
  function isPromiseOrContainsPromise(object) {
    if (isPromise(object)) {
      return true;
    }
    return Array.isArray(object) && object.some(isPromise);
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/scope/scope.js
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
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
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator = function(thisArg, body) {
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
  var tryGetFromScope = function(requestScope, binding) {
    if (binding.scope === BindingScopeEnum.Singleton && binding.activated) {
      return binding.cache;
    }
    if (binding.scope === BindingScopeEnum.Request && requestScope.has(binding.id)) {
      return requestScope.get(binding.id);
    }
    return null;
  };
  var saveToScope = function(requestScope, binding, result) {
    if (binding.scope === BindingScopeEnum.Singleton) {
      _saveToSingletonScope(binding, result);
    }
    if (binding.scope === BindingScopeEnum.Request) {
      _saveToRequestScope(requestScope, binding, result);
    }
  };
  var _saveToRequestScope = function(requestScope, binding, result) {
    if (!requestScope.has(binding.id)) {
      requestScope.set(binding.id, result);
    }
  };
  var _saveToSingletonScope = function(binding, result) {
    binding.cache = result;
    binding.activated = true;
    if (isPromise(result)) {
      void _saveAsyncResultToSingletonScope(binding, result);
    }
  };
  var _saveAsyncResultToSingletonScope = function(binding, asyncResult) {
    return __awaiter(void 0, void 0, void 0, function() {
      var result, ex_1;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            _a3.trys.push([0, 2, , 3]);
            return [4, asyncResult];
          case 1:
            result = _a3.sent();
            binding.cache = result;
            return [3, 3];
          case 2:
            ex_1 = _a3.sent();
            binding.cache = null;
            binding.activated = false;
            throw ex_1;
          case 3:
            return [2];
        }
      });
    });
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/factory_type.js
  var FactoryType;
  (function(FactoryType2) {
    FactoryType2["DynamicValue"] = "toDynamicValue";
    FactoryType2["Factory"] = "toFactory";
    FactoryType2["Provider"] = "toProvider";
  })(FactoryType || (FactoryType = {}));

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/binding_utils.js
  var ensureFullyBound = function(binding) {
    var boundValue = null;
    switch (binding.type) {
      case BindingTypeEnum.ConstantValue:
      case BindingTypeEnum.Function:
        boundValue = binding.cache;
        break;
      case BindingTypeEnum.Constructor:
      case BindingTypeEnum.Instance:
        boundValue = binding.implementationType;
        break;
      case BindingTypeEnum.DynamicValue:
        boundValue = binding.dynamicValue;
        break;
      case BindingTypeEnum.Provider:
        boundValue = binding.provider;
        break;
      case BindingTypeEnum.Factory:
        boundValue = binding.factory;
        break;
    }
    if (boundValue === null) {
      var serviceIdentifierAsString = getServiceIdentifierAsString(binding.serviceIdentifier);
      throw new Error(INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
    }
  };
  var getFactoryDetails = function(binding) {
    switch (binding.type) {
      case BindingTypeEnum.Factory:
        return { factory: binding.factory, factoryType: FactoryType.Factory };
      case BindingTypeEnum.Provider:
        return { factory: binding.provider, factoryType: FactoryType.Provider };
      case BindingTypeEnum.DynamicValue:
        return { factory: binding.dynamicValue, factoryType: FactoryType.DynamicValue };
      default:
        throw new Error("Unexpected factory type " + binding.type);
    }
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/resolution/instantiation.js
  var __assign = function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __awaiter2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
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
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator2 = function(thisArg, body) {
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
  var __spreadArray2 = function(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from2.length, ar; i < l; i++) {
        if (ar || !(i in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i);
          ar[i] = from2[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  };
  function _resolveRequests(childRequests, resolveRequest) {
    return childRequests.reduce(function(resolvedRequests, childRequest) {
      var injection = resolveRequest(childRequest);
      var targetType = childRequest.target.type;
      if (targetType === TargetTypeEnum.ConstructorArgument) {
        resolvedRequests.constructorInjections.push(injection);
      } else {
        resolvedRequests.propertyRequests.push(childRequest);
        resolvedRequests.propertyInjections.push(injection);
      }
      if (!resolvedRequests.isAsync) {
        resolvedRequests.isAsync = isPromiseOrContainsPromise(injection);
      }
      return resolvedRequests;
    }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
  }
  function _createInstance(constr, childRequests, resolveRequest) {
    var result;
    if (childRequests.length > 0) {
      var resolved = _resolveRequests(childRequests, resolveRequest);
      var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr });
      if (resolved.isAsync) {
        result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
      } else {
        result = createInstanceWithInjections(createInstanceWithInjectionsArg);
      }
    } else {
      result = new constr();
    }
    return result;
  }
  function createInstanceWithInjections(args) {
    var _a3;
    var instance = new ((_a3 = args.constr).bind.apply(_a3, __spreadArray2([void 0], args.constructorInjections, false)))();
    args.propertyRequests.forEach(function(r, index) {
      var property = r.target.identifier;
      var injection = args.propertyInjections[index];
      if (!r.target.isOptional() || injection !== void 0) {
        instance[property] = injection;
      }
    });
    return instance;
  }
  function createInstanceWithInjectionsAsync(args) {
    return __awaiter2(this, void 0, void 0, function() {
      var constructorInjections, propertyInjections;
      return __generator2(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, possiblyWaitInjections(args.constructorInjections)];
          case 1:
            constructorInjections = _a3.sent();
            return [4, possiblyWaitInjections(args.propertyInjections)];
          case 2:
            propertyInjections = _a3.sent();
            return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections, propertyInjections }))];
        }
      });
    });
  }
  function possiblyWaitInjections(possiblePromiseinjections) {
    return __awaiter2(this, void 0, void 0, function() {
      var injections, _i, possiblePromiseinjections_1, injection;
      return __generator2(this, function(_a3) {
        injections = [];
        for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
          injection = possiblePromiseinjections_1[_i];
          if (Array.isArray(injection)) {
            injections.push(Promise.all(injection));
          } else {
            injections.push(injection);
          }
        }
        return [2, Promise.all(injections)];
      });
    });
  }
  function _getInstanceAfterPostConstruct(constr, result) {
    var postConstructResult = _postConstruct(constr, result);
    if (isPromise(postConstructResult)) {
      return postConstructResult.then(function() {
        return result;
      });
    } else {
      return result;
    }
  }
  function _postConstruct(constr, instance) {
    var _a3, _b;
    if (Reflect.hasMetadata(POST_CONSTRUCT, constr)) {
      var data = Reflect.getMetadata(POST_CONSTRUCT, constr);
      try {
        return (_b = (_a3 = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a3);
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(POST_CONSTRUCT_ERROR(constr.name, e.message));
        }
      }
    }
  }
  function _validateInstanceResolution(binding, constr) {
    if (binding.scope !== BindingScopeEnum.Singleton) {
      _throwIfHandlingDeactivation(binding, constr);
    }
  }
  function _throwIfHandlingDeactivation(binding, constr) {
    var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === BindingScopeEnum.Request ? "request" : "transient") + " scope.";
    if (typeof binding.onDeactivation === "function") {
      throw new Error(ON_DEACTIVATION_ERROR(constr.name, scopeErrorMessage));
    }
    if (Reflect.hasMetadata(PRE_DESTROY, constr)) {
      throw new Error(PRE_DESTROY_ERROR(constr.name, scopeErrorMessage));
    }
  }
  function resolveInstance(binding, constr, childRequests, resolveRequest) {
    _validateInstanceResolution(binding, constr);
    var result = _createInstance(constr, childRequests, resolveRequest);
    if (isPromise(result)) {
      return result.then(function(resolvedResult) {
        return _getInstanceAfterPostConstruct(constr, resolvedResult);
      });
    } else {
      return _getInstanceAfterPostConstruct(constr, result);
    }
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/resolution/resolver.js
  var __awaiter3 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
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
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator3 = function(thisArg, body) {
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
  var _resolveRequest = function(requestScope) {
    return function(request) {
      request.parentContext.setCurrentRequest(request);
      var bindings = request.bindings;
      var childRequests = request.childRequests;
      var targetIsAnArray = request.target && request.target.isArray();
      var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
      if (targetIsAnArray && targetParentIsNotAnArray) {
        return childRequests.map(function(childRequest) {
          var _f = _resolveRequest(requestScope);
          return _f(childRequest);
        });
      } else {
        if (request.target.isOptional() && bindings.length === 0) {
          return void 0;
        }
        var binding = bindings[0];
        return _resolveBinding(requestScope, request, binding);
      }
    };
  };
  var _resolveFactoryFromBinding = function(binding, context2) {
    var factoryDetails = getFactoryDetails(binding);
    return tryAndThrowErrorIfStackOverflow(function() {
      return factoryDetails.factory.bind(binding)(context2);
    }, function() {
      return new Error(CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context2.currentRequest.serviceIdentifier.toString()));
    });
  };
  var _getResolvedFromBinding = function(requestScope, request, binding) {
    var result;
    var childRequests = request.childRequests;
    ensureFullyBound(binding);
    switch (binding.type) {
      case BindingTypeEnum.ConstantValue:
      case BindingTypeEnum.Function:
        result = binding.cache;
        break;
      case BindingTypeEnum.Constructor:
        result = binding.implementationType;
        break;
      case BindingTypeEnum.Instance:
        result = resolveInstance(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
        break;
      default:
        result = _resolveFactoryFromBinding(binding, request.parentContext);
    }
    return result;
  };
  var _resolveInScope = function(requestScope, binding, resolveFromBinding) {
    var result = tryGetFromScope(requestScope, binding);
    if (result !== null) {
      return result;
    }
    result = resolveFromBinding();
    saveToScope(requestScope, binding, result);
    return result;
  };
  var _resolveBinding = function(requestScope, request, binding) {
    return _resolveInScope(requestScope, binding, function() {
      var result = _getResolvedFromBinding(requestScope, request, binding);
      if (isPromise(result)) {
        result = result.then(function(resolved) {
          return _onActivation(request, binding, resolved);
        });
      } else {
        result = _onActivation(request, binding, result);
      }
      return result;
    });
  };
  function _onActivation(request, binding, resolved) {
    var result = _bindingActivation(request.parentContext, binding, resolved);
    var containersIterator = _getContainersIterator(request.parentContext.container);
    var container;
    var containersIteratorResult = containersIterator.next();
    do {
      container = containersIteratorResult.value;
      var context_1 = request.parentContext;
      var serviceIdentifier = request.serviceIdentifier;
      var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
      if (isPromise(result)) {
        result = _activateContainerAsync(activationsIterator, context_1, result);
      } else {
        result = _activateContainer(activationsIterator, context_1, result);
      }
      containersIteratorResult = containersIterator.next();
    } while (containersIteratorResult.done !== true && !getBindingDictionary(container).hasKey(request.serviceIdentifier));
    return result;
  }
  var _bindingActivation = function(context2, binding, previousResult) {
    var result;
    if (typeof binding.onActivation === "function") {
      result = binding.onActivation(context2, previousResult);
    } else {
      result = previousResult;
    }
    return result;
  };
  var _activateContainer = function(activationsIterator, context2, result) {
    var activation = activationsIterator.next();
    while (!activation.done) {
      result = activation.value(context2, result);
      if (isPromise(result)) {
        return _activateContainerAsync(activationsIterator, context2, result);
      }
      activation = activationsIterator.next();
    }
    return result;
  };
  var _activateContainerAsync = function(activationsIterator, context2, resultPromise) {
    return __awaiter3(void 0, void 0, void 0, function() {
      var result, activation;
      return __generator3(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, resultPromise];
          case 1:
            result = _a3.sent();
            activation = activationsIterator.next();
            _a3.label = 2;
          case 2:
            if (!!activation.done)
              return [3, 4];
            return [4, activation.value(context2, result)];
          case 3:
            result = _a3.sent();
            activation = activationsIterator.next();
            return [3, 2];
          case 4:
            return [2, result];
        }
      });
    });
  };
  var _getContainerActivationsForService = function(container, serviceIdentifier) {
    var activations = container._activations;
    return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
  };
  var _getContainersIterator = function(container) {
    var containersStack = [container];
    var parent = container.parent;
    while (parent !== null) {
      containersStack.push(parent);
      parent = parent.parent;
    }
    var getNextContainer = function() {
      var nextContainer = containersStack.pop();
      if (nextContainer !== void 0) {
        return { done: false, value: nextContainer };
      } else {
        return { done: true, value: void 0 };
      }
    };
    var containersIterator = {
      next: getNextContainer
    };
    return containersIterator;
  };
  function resolve(context2) {
    var _f = _resolveRequest(context2.plan.rootRequest.requestScope);
    return _f(context2.plan.rootRequest);
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/constraint_helpers.js
  var traverseAncerstors = function(request, constraint) {
    var parent = request.parentRequest;
    if (parent !== null) {
      return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    } else {
      return false;
    }
  };
  var taggedConstraint = function(key) {
    return function(value) {
      var constraint = function(request) {
        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
      };
      constraint.metaData = new Metadata(key, value);
      return constraint;
    };
  };
  var namedConstraint = taggedConstraint(NAMED_TAG);
  var typeConstraint = function(type) {
    return function(request) {
      var binding = null;
      if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
          var serviceIdentifier = binding.serviceIdentifier;
          return serviceIdentifier === type;
        } else {
          var constructor = request.bindings[0].implementationType;
          return type === constructor;
        }
      }
      return false;
    };
  };

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/binding_when_syntax.js
  var BindingWhenSyntax = function() {
    function BindingWhenSyntax2(binding) {
      this._binding = binding;
    }
    BindingWhenSyntax2.prototype.when = function(constraint) {
      this._binding.constraint = constraint;
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
      this._binding.constraint = namedConstraint(name);
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
      this._binding.constraint = function(request) {
        if (request === null) {
          return false;
        }
        var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
        return targetIsDefault;
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
      this._binding.constraint = taggedConstraint(tag)(value);
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
      this._binding.constraint = function(request) {
        return request !== null && typeConstraint(parent)(request.parentRequest);
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
      this._binding.constraint = function(request) {
        return request !== null && namedConstraint(name)(request.parentRequest);
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
      this._binding.constraint = function(request) {
        return request !== null && taggedConstraint(tag)(value)(request.parentRequest);
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
      this._binding.constraint = function(request) {
        return request !== null && traverseAncerstors(request, typeConstraint(ancestor));
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
      this._binding.constraint = function(request) {
        return request !== null && !traverseAncerstors(request, typeConstraint(ancestor));
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
      this._binding.constraint = function(request) {
        return request !== null && traverseAncerstors(request, namedConstraint(name));
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
      this._binding.constraint = function(request) {
        return request !== null && !traverseAncerstors(request, namedConstraint(name));
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
      this._binding.constraint = function(request) {
        return request !== null && traverseAncerstors(request, taggedConstraint(tag)(value));
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
      this._binding.constraint = function(request) {
        return request !== null && !traverseAncerstors(request, taggedConstraint(tag)(value));
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
      this._binding.constraint = function(request) {
        return request !== null && traverseAncerstors(request, constraint);
      };
      return new BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
      this._binding.constraint = function(request) {
        return request !== null && !traverseAncerstors(request, constraint);
      };
      return new BindingOnSyntax(this._binding);
    };
    return BindingWhenSyntax2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/binding_on_syntax.js
  var BindingOnSyntax = function() {
    function BindingOnSyntax2(binding) {
      this._binding = binding;
    }
    BindingOnSyntax2.prototype.onActivation = function(handler) {
      this._binding.onActivation = handler;
      return new BindingWhenSyntax(this._binding);
    };
    BindingOnSyntax2.prototype.onDeactivation = function(handler) {
      this._binding.onDeactivation = handler;
      return new BindingWhenSyntax(this._binding);
    };
    return BindingOnSyntax2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/binding_when_on_syntax.js
  var BindingWhenOnSyntax = function() {
    function BindingWhenOnSyntax2(binding) {
      this._binding = binding;
      this._bindingWhenSyntax = new BindingWhenSyntax(this._binding);
      this._bindingOnSyntax = new BindingOnSyntax(this._binding);
    }
    BindingWhenOnSyntax2.prototype.when = function(constraint) {
      return this._bindingWhenSyntax.when(constraint);
    };
    BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
      return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
      return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
      return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
      return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
      return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
      return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
      return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
      return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
      return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
      return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
      return this._bindingOnSyntax.onActivation(handler);
    };
    BindingWhenOnSyntax2.prototype.onDeactivation = function(handler) {
      return this._bindingOnSyntax.onDeactivation(handler);
    };
    return BindingWhenOnSyntax2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/binding_in_syntax.js
  var BindingInSyntax = function() {
    function BindingInSyntax2(binding) {
      this._binding = binding;
    }
    BindingInSyntax2.prototype.inRequestScope = function() {
      this._binding.scope = BindingScopeEnum.Request;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax2.prototype.inSingletonScope = function() {
      this._binding.scope = BindingScopeEnum.Singleton;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax2.prototype.inTransientScope = function() {
      this._binding.scope = BindingScopeEnum.Transient;
      return new BindingWhenOnSyntax(this._binding);
    };
    return BindingInSyntax2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/binding_in_when_on_syntax.js
  var BindingInWhenOnSyntax = function() {
    function BindingInWhenOnSyntax2(binding) {
      this._binding = binding;
      this._bindingWhenSyntax = new BindingWhenSyntax(this._binding);
      this._bindingOnSyntax = new BindingOnSyntax(this._binding);
      this._bindingInSyntax = new BindingInSyntax(binding);
    }
    BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
      return this._bindingInSyntax.inRequestScope();
    };
    BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
      return this._bindingInSyntax.inSingletonScope();
    };
    BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
      return this._bindingInSyntax.inTransientScope();
    };
    BindingInWhenOnSyntax2.prototype.when = function(constraint) {
      return this._bindingWhenSyntax.when(constraint);
    };
    BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
      return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
      return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
      return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
      return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
      return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
      return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
      return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
      return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
      return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
      return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
      return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
      return this._bindingOnSyntax.onActivation(handler);
    };
    BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler) {
      return this._bindingOnSyntax.onDeactivation(handler);
    };
    return BindingInWhenOnSyntax2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/syntax/binding_to_syntax.js
  var BindingToSyntax = function() {
    function BindingToSyntax2(binding) {
      this._binding = binding;
    }
    BindingToSyntax2.prototype.to = function(constructor) {
      this._binding.type = BindingTypeEnum.Instance;
      this._binding.implementationType = constructor;
      return new BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toSelf = function() {
      if (typeof this._binding.serviceIdentifier !== "function") {
        throw new Error("" + INVALID_TO_SELF_VALUE);
      }
      var self2 = this._binding.serviceIdentifier;
      return this.to(self2);
    };
    BindingToSyntax2.prototype.toConstantValue = function(value) {
      this._binding.type = BindingTypeEnum.ConstantValue;
      this._binding.cache = value;
      this._binding.dynamicValue = null;
      this._binding.implementationType = null;
      this._binding.scope = BindingScopeEnum.Singleton;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toDynamicValue = function(func) {
      this._binding.type = BindingTypeEnum.DynamicValue;
      this._binding.cache = null;
      this._binding.dynamicValue = func;
      this._binding.implementationType = null;
      return new BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toConstructor = function(constructor) {
      this._binding.type = BindingTypeEnum.Constructor;
      this._binding.implementationType = constructor;
      this._binding.scope = BindingScopeEnum.Singleton;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toFactory = function(factory) {
      this._binding.type = BindingTypeEnum.Factory;
      this._binding.factory = factory;
      this._binding.scope = BindingScopeEnum.Singleton;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toFunction = function(func) {
      if (typeof func !== "function") {
        throw new Error(INVALID_FUNCTION_BINDING);
      }
      var bindingWhenOnSyntax = this.toConstantValue(func);
      this._binding.type = BindingTypeEnum.Function;
      this._binding.scope = BindingScopeEnum.Singleton;
      return bindingWhenOnSyntax;
    };
    BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
      this._binding.type = BindingTypeEnum.Factory;
      this._binding.factory = function(context2) {
        var autofactory = function() {
          return context2.container.get(serviceIdentifier);
        };
        return autofactory;
      };
      this._binding.scope = BindingScopeEnum.Singleton;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
      this._binding.type = BindingTypeEnum.Factory;
      this._binding.factory = function(context2) {
        return function(named) {
          return context2.container.getNamed(serviceIdentifier, named);
        };
      };
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toProvider = function(provider) {
      this._binding.type = BindingTypeEnum.Provider;
      this._binding.provider = provider;
      this._binding.scope = BindingScopeEnum.Singleton;
      return new BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax2.prototype.toService = function(service) {
      this.toDynamicValue(function(context2) {
        return context2.container.get(service);
      });
    };
    return BindingToSyntax2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/container/container_snapshot.js
  var ContainerSnapshot = function() {
    function ContainerSnapshot2() {
    }
    ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
      var snapshot = new ContainerSnapshot2();
      snapshot.bindings = bindings;
      snapshot.middleware = middleware;
      snapshot.deactivations = deactivations;
      snapshot.activations = activations;
      snapshot.moduleActivationStore = moduleActivationStore;
      return snapshot;
    };
    return ContainerSnapshot2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/clonable.js
  function isClonable(obj) {
    return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/container/lookup.js
  var Lookup = function() {
    function Lookup2() {
      this._map = /* @__PURE__ */ new Map();
    }
    Lookup2.prototype.getMap = function() {
      return this._map;
    };
    Lookup2.prototype.add = function(serviceIdentifier, value) {
      if (serviceIdentifier === null || serviceIdentifier === void 0) {
        throw new Error(NULL_ARGUMENT);
      }
      if (value === null || value === void 0) {
        throw new Error(NULL_ARGUMENT);
      }
      var entry = this._map.get(serviceIdentifier);
      if (entry !== void 0) {
        entry.push(value);
      } else {
        this._map.set(serviceIdentifier, [value]);
      }
    };
    Lookup2.prototype.get = function(serviceIdentifier) {
      if (serviceIdentifier === null || serviceIdentifier === void 0) {
        throw new Error(NULL_ARGUMENT);
      }
      var entry = this._map.get(serviceIdentifier);
      if (entry !== void 0) {
        return entry;
      } else {
        throw new Error(KEY_NOT_FOUND);
      }
    };
    Lookup2.prototype.remove = function(serviceIdentifier) {
      if (serviceIdentifier === null || serviceIdentifier === void 0) {
        throw new Error(NULL_ARGUMENT);
      }
      if (!this._map.delete(serviceIdentifier)) {
        throw new Error(KEY_NOT_FOUND);
      }
    };
    Lookup2.prototype.removeIntersection = function(lookup) {
      var _this = this;
      this.traverse(function(serviceIdentifier, value) {
        var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
        if (lookupActivations !== void 0) {
          var filteredValues = value.filter(function(lookupValue) {
            return !lookupActivations.some(function(moduleActivation) {
              return lookupValue === moduleActivation;
            });
          });
          _this._setValue(serviceIdentifier, filteredValues);
        }
      });
    };
    Lookup2.prototype.removeByCondition = function(condition) {
      var _this = this;
      var removals = [];
      this._map.forEach(function(entries, key) {
        var updatedEntries = [];
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
          var entry = entries_1[_i];
          var remove = condition(entry);
          if (remove) {
            removals.push(entry);
          } else {
            updatedEntries.push(entry);
          }
        }
        _this._setValue(key, updatedEntries);
      });
      return removals;
    };
    Lookup2.prototype.hasKey = function(serviceIdentifier) {
      if (serviceIdentifier === null || serviceIdentifier === void 0) {
        throw new Error(NULL_ARGUMENT);
      }
      return this._map.has(serviceIdentifier);
    };
    Lookup2.prototype.clone = function() {
      var copy = new Lookup2();
      this._map.forEach(function(value, key) {
        value.forEach(function(b) {
          return copy.add(key, isClonable(b) ? b.clone() : b);
        });
      });
      return copy;
    };
    Lookup2.prototype.traverse = function(func) {
      this._map.forEach(function(value, key) {
        func(key, value);
      });
    };
    Lookup2.prototype._setValue = function(serviceIdentifier, value) {
      if (value.length > 0) {
        this._map.set(serviceIdentifier, value);
      } else {
        this._map.delete(serviceIdentifier);
      }
    };
    return Lookup2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/container/module_activation_store.js
  var ModuleActivationStore = function() {
    function ModuleActivationStore2() {
      this._map = /* @__PURE__ */ new Map();
    }
    ModuleActivationStore2.prototype.remove = function(moduleId) {
      if (this._map.has(moduleId)) {
        var handlers = this._map.get(moduleId);
        this._map.delete(moduleId);
        return handlers;
      }
      return this._getEmptyHandlersStore();
    };
    ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
      this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
    };
    ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
      this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
    };
    ModuleActivationStore2.prototype.clone = function() {
      var clone = new ModuleActivationStore2();
      this._map.forEach(function(handlersStore, moduleId) {
        clone._map.set(moduleId, {
          onActivations: handlersStore.onActivations.clone(),
          onDeactivations: handlersStore.onDeactivations.clone()
        });
      });
      return clone;
    };
    ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
      var moduleActivationHandlers = this._map.get(moduleId);
      if (moduleActivationHandlers === void 0) {
        moduleActivationHandlers = this._getEmptyHandlersStore();
        this._map.set(moduleId, moduleActivationHandlers);
      }
      return moduleActivationHandlers;
    };
    ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
      var handlersStore = {
        onActivations: new Lookup(),
        onDeactivations: new Lookup()
      };
      return handlersStore;
    };
    return ModuleActivationStore2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/container/container.js
  var __assign2 = function() {
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
  var __awaiter4 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
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
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator4 = function(thisArg, body) {
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
  var __spreadArray3 = function(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from2.length, ar; i < l; i++) {
        if (ar || !(i in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i);
          ar[i] = from2[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  };
  var Container = function() {
    function Container2(containerOptions) {
      var options = containerOptions || {};
      if (typeof options !== "object") {
        throw new Error("" + CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
      }
      if (options.defaultScope === void 0) {
        options.defaultScope = BindingScopeEnum.Transient;
      } else if (options.defaultScope !== BindingScopeEnum.Singleton && options.defaultScope !== BindingScopeEnum.Transient && options.defaultScope !== BindingScopeEnum.Request) {
        throw new Error("" + CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
      }
      if (options.autoBindInjectable === void 0) {
        options.autoBindInjectable = false;
      } else if (typeof options.autoBindInjectable !== "boolean") {
        throw new Error("" + CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
      }
      if (options.skipBaseClassChecks === void 0) {
        options.skipBaseClassChecks = false;
      } else if (typeof options.skipBaseClassChecks !== "boolean") {
        throw new Error("" + CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
      }
      this.options = {
        autoBindInjectable: options.autoBindInjectable,
        defaultScope: options.defaultScope,
        skipBaseClassChecks: options.skipBaseClassChecks
      };
      this.id = id();
      this._bindingDictionary = new Lookup();
      this._snapshots = [];
      this._middleware = null;
      this._activations = new Lookup();
      this._deactivations = new Lookup();
      this.parent = null;
      this._metadataReader = new MetadataReader();
      this._moduleActivationStore = new ModuleActivationStore();
    }
    Container2.merge = function(container1, container2) {
      var containers = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        containers[_i - 2] = arguments[_i];
      }
      var container = new Container2();
      var targetContainers = __spreadArray3([container1, container2], containers, true).map(function(targetContainer) {
        return getBindingDictionary(targetContainer);
      });
      var bindingDictionary = getBindingDictionary(container);
      function copyDictionary(origin, destination) {
        origin.traverse(function(_key, value) {
          value.forEach(function(binding) {
            destination.add(binding.serviceIdentifier, binding.clone());
          });
        });
      }
      targetContainers.forEach(function(targetBindingDictionary) {
        copyDictionary(targetBindingDictionary, bindingDictionary);
      });
      return container;
    };
    Container2.prototype.load = function() {
      var modules = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i] = arguments[_i];
      }
      var getHelpers = this._getContainerModuleHelpersFactory();
      for (var _a3 = 0, modules_1 = modules; _a3 < modules_1.length; _a3++) {
        var currentModule = modules_1[_a3];
        var containerModuleHelpers = getHelpers(currentModule.id);
        currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
      }
    };
    Container2.prototype.loadAsync = function() {
      var modules = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i] = arguments[_i];
      }
      return __awaiter4(this, void 0, void 0, function() {
        var getHelpers, _a3, modules_2, currentModule, containerModuleHelpers;
        return __generator4(this, function(_b) {
          switch (_b.label) {
            case 0:
              getHelpers = this._getContainerModuleHelpersFactory();
              _a3 = 0, modules_2 = modules;
              _b.label = 1;
            case 1:
              if (!(_a3 < modules_2.length))
                return [3, 4];
              currentModule = modules_2[_a3];
              containerModuleHelpers = getHelpers(currentModule.id);
              return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              _a3++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    Container2.prototype.unload = function() {
      var _this = this;
      var modules = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i] = arguments[_i];
      }
      modules.forEach(function(module) {
        var deactivations = _this._removeModuleBindings(module.id);
        _this._deactivateSingletons(deactivations);
        _this._removeModuleHandlers(module.id);
      });
    };
    Container2.prototype.unloadAsync = function() {
      var modules = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i] = arguments[_i];
      }
      return __awaiter4(this, void 0, void 0, function() {
        var _a3, modules_3, module_1, deactivations;
        return __generator4(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a3 = 0, modules_3 = modules;
              _b.label = 1;
            case 1:
              if (!(_a3 < modules_3.length))
                return [3, 4];
              module_1 = modules_3[_a3];
              deactivations = this._removeModuleBindings(module_1.id);
              return [4, this._deactivateSingletonsAsync(deactivations)];
            case 2:
              _b.sent();
              this._removeModuleHandlers(module_1.id);
              _b.label = 3;
            case 3:
              _a3++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    Container2.prototype.bind = function(serviceIdentifier) {
      var scope = this.options.defaultScope || BindingScopeEnum.Transient;
      var binding = new Binding(serviceIdentifier, scope);
      this._bindingDictionary.add(serviceIdentifier, binding);
      return new BindingToSyntax(binding);
    };
    Container2.prototype.rebind = function(serviceIdentifier) {
      this.unbind(serviceIdentifier);
      return this.bind(serviceIdentifier);
    };
    Container2.prototype.rebindAsync = function(serviceIdentifier) {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              return [4, this.unbindAsync(serviceIdentifier)];
            case 1:
              _a3.sent();
              return [2, this.bind(serviceIdentifier)];
          }
        });
      });
    };
    Container2.prototype.unbind = function(serviceIdentifier) {
      if (this._bindingDictionary.hasKey(serviceIdentifier)) {
        var bindings = this._bindingDictionary.get(serviceIdentifier);
        this._deactivateSingletons(bindings);
      }
      this._removeServiceFromDictionary(serviceIdentifier);
    };
    Container2.prototype.unbindAsync = function(serviceIdentifier) {
      return __awaiter4(this, void 0, void 0, function() {
        var bindings;
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              if (!this._bindingDictionary.hasKey(serviceIdentifier))
                return [3, 2];
              bindings = this._bindingDictionary.get(serviceIdentifier);
              return [4, this._deactivateSingletonsAsync(bindings)];
            case 1:
              _a3.sent();
              _a3.label = 2;
            case 2:
              this._removeServiceFromDictionary(serviceIdentifier);
              return [2];
          }
        });
      });
    };
    Container2.prototype.unbindAll = function() {
      var _this = this;
      this._bindingDictionary.traverse(function(_key, value) {
        _this._deactivateSingletons(value);
      });
      this._bindingDictionary = new Lookup();
    };
    Container2.prototype.unbindAllAsync = function() {
      return __awaiter4(this, void 0, void 0, function() {
        var promises;
        var _this = this;
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              promises = [];
              this._bindingDictionary.traverse(function(_key, value) {
                promises.push(_this._deactivateSingletonsAsync(value));
              });
              return [4, Promise.all(promises)];
            case 1:
              _a3.sent();
              this._bindingDictionary = new Lookup();
              return [2];
          }
        });
      });
    };
    Container2.prototype.onActivation = function(serviceIdentifier, onActivation) {
      this._activations.add(serviceIdentifier, onActivation);
    };
    Container2.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
      this._deactivations.add(serviceIdentifier, onDeactivation);
    };
    Container2.prototype.isBound = function(serviceIdentifier) {
      var bound = this._bindingDictionary.hasKey(serviceIdentifier);
      if (!bound && this.parent) {
        bound = this.parent.isBound(serviceIdentifier);
      }
      return bound;
    };
    Container2.prototype.isCurrentBound = function(serviceIdentifier) {
      return this._bindingDictionary.hasKey(serviceIdentifier);
    };
    Container2.prototype.isBoundNamed = function(serviceIdentifier, named) {
      return this.isBoundTagged(serviceIdentifier, NAMED_TAG, named);
    };
    Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
      var bound = false;
      if (this._bindingDictionary.hasKey(serviceIdentifier)) {
        var bindings = this._bindingDictionary.get(serviceIdentifier);
        var request_1 = createMockRequest(this, serviceIdentifier, key, value);
        bound = bindings.some(function(b) {
          return b.constraint(request_1);
        });
      }
      if (!bound && this.parent) {
        bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
      }
      return bound;
    };
    Container2.prototype.snapshot = function() {
      this._snapshots.push(ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
    };
    Container2.prototype.restore = function() {
      var snapshot = this._snapshots.pop();
      if (snapshot === void 0) {
        throw new Error(NO_MORE_SNAPSHOTS_AVAILABLE);
      }
      this._bindingDictionary = snapshot.bindings;
      this._activations = snapshot.activations;
      this._deactivations = snapshot.deactivations;
      this._middleware = snapshot.middleware;
      this._moduleActivationStore = snapshot.moduleActivationStore;
    };
    Container2.prototype.createChild = function(containerOptions) {
      var child = new Container2(containerOptions || this.options);
      child.parent = this;
      return child;
    };
    Container2.prototype.applyMiddleware = function() {
      var middlewares = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
      }
      var initial = this._middleware ? this._middleware : this._planAndResolve();
      this._middleware = middlewares.reduce(function(prev, curr) {
        return curr(prev);
      }, initial);
    };
    Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
      this._metadataReader = metadataReader;
    };
    Container2.prototype.get = function(serviceIdentifier) {
      var getArgs = this._getNotAllArgs(serviceIdentifier, false);
      return this._getButThrowIfAsync(getArgs);
    };
    Container2.prototype.getAsync = function(serviceIdentifier) {
      return __awaiter4(this, void 0, void 0, function() {
        var getArgs;
        return __generator4(this, function(_a3) {
          getArgs = this._getNotAllArgs(serviceIdentifier, false);
          return [2, this._get(getArgs)];
        });
      });
    };
    Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
      var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
      return this._getButThrowIfAsync(getArgs);
    };
    Container2.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
      return __awaiter4(this, void 0, void 0, function() {
        var getArgs;
        return __generator4(this, function(_a3) {
          getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
          return [2, this._get(getArgs)];
        });
      });
    };
    Container2.prototype.getNamed = function(serviceIdentifier, named) {
      return this.getTagged(serviceIdentifier, NAMED_TAG, named);
    };
    Container2.prototype.getNamedAsync = function(serviceIdentifier, named) {
      return this.getTaggedAsync(serviceIdentifier, NAMED_TAG, named);
    };
    Container2.prototype.getAll = function(serviceIdentifier) {
      var getArgs = this._getAllArgs(serviceIdentifier);
      return this._getButThrowIfAsync(getArgs);
    };
    Container2.prototype.getAllAsync = function(serviceIdentifier) {
      var getArgs = this._getAllArgs(serviceIdentifier);
      return this._getAll(getArgs);
    };
    Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
      var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
      return this._getButThrowIfAsync(getArgs);
    };
    Container2.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
      var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
      return this._getAll(getArgs);
    };
    Container2.prototype.getAllNamed = function(serviceIdentifier, named) {
      return this.getAllTagged(serviceIdentifier, NAMED_TAG, named);
    };
    Container2.prototype.getAllNamedAsync = function(serviceIdentifier, named) {
      return this.getAllTaggedAsync(serviceIdentifier, NAMED_TAG, named);
    };
    Container2.prototype.resolve = function(constructorFunction) {
      var isBound = this.isBound(constructorFunction);
      if (!isBound) {
        this.bind(constructorFunction).toSelf();
      }
      var resolved = this.get(constructorFunction);
      if (!isBound) {
        this.unbind(constructorFunction);
      }
      return resolved;
    };
    Container2.prototype._preDestroy = function(constructor, instance) {
      var _a3, _b;
      if (Reflect.hasMetadata(PRE_DESTROY, constructor)) {
        var data = Reflect.getMetadata(PRE_DESTROY, constructor);
        return (_b = (_a3 = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a3);
      }
    };
    Container2.prototype._removeModuleHandlers = function(moduleId) {
      var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
      this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
      this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
    };
    Container2.prototype._removeModuleBindings = function(moduleId) {
      return this._bindingDictionary.removeByCondition(function(binding) {
        return binding.moduleId === moduleId;
      });
    };
    Container2.prototype._deactivate = function(binding, instance) {
      var _this = this;
      var constructor = Object.getPrototypeOf(instance).constructor;
      try {
        if (this._deactivations.hasKey(binding.serviceIdentifier)) {
          var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
          if (isPromise(result)) {
            return this._handleDeactivationError(result.then(function() {
              return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
            }), constructor);
          }
        }
        var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
        if (isPromise(propagateDeactivationResult)) {
          return this._handleDeactivationError(propagateDeactivationResult, constructor);
        }
      } catch (ex) {
        if (ex instanceof Error) {
          throw new Error(ON_DEACTIVATION_ERROR(constructor.name, ex.message));
        }
      }
    };
    Container2.prototype._handleDeactivationError = function(asyncResult, constructor) {
      return __awaiter4(this, void 0, void 0, function() {
        var ex_1;
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              _a3.trys.push([0, 2, , 3]);
              return [4, asyncResult];
            case 1:
              _a3.sent();
              return [3, 3];
            case 2:
              ex_1 = _a3.sent();
              if (ex_1 instanceof Error) {
                throw new Error(ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
              }
              return [3, 3];
            case 3:
              return [2];
          }
        });
      });
    };
    Container2.prototype._deactivateContainer = function(instance, deactivationsIterator) {
      var _this = this;
      var deactivation = deactivationsIterator.next();
      while (deactivation.value) {
        var result = deactivation.value(instance);
        if (isPromise(result)) {
          return result.then(function() {
            return _this._deactivateContainerAsync(instance, deactivationsIterator);
          });
        }
        deactivation = deactivationsIterator.next();
      }
    };
    Container2.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
      return __awaiter4(this, void 0, void 0, function() {
        var deactivation;
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              deactivation = deactivationsIterator.next();
              _a3.label = 1;
            case 1:
              if (!deactivation.value)
                return [3, 3];
              return [4, deactivation.value(instance)];
            case 2:
              _a3.sent();
              deactivation = deactivationsIterator.next();
              return [3, 1];
            case 3:
              return [2];
          }
        });
      });
    };
    Container2.prototype._getContainerModuleHelpersFactory = function() {
      var _this = this;
      var setModuleId = function(bindingToSyntax, moduleId) {
        bindingToSyntax._binding.moduleId = moduleId;
      };
      var getBindFunction = function(moduleId) {
        return function(serviceIdentifier) {
          var bindingToSyntax = _this.bind(serviceIdentifier);
          setModuleId(bindingToSyntax, moduleId);
          return bindingToSyntax;
        };
      };
      var getUnbindFunction = function() {
        return function(serviceIdentifier) {
          return _this.unbind(serviceIdentifier);
        };
      };
      var getUnbindAsyncFunction = function() {
        return function(serviceIdentifier) {
          return _this.unbindAsync(serviceIdentifier);
        };
      };
      var getIsboundFunction = function() {
        return function(serviceIdentifier) {
          return _this.isBound(serviceIdentifier);
        };
      };
      var getRebindFunction = function(moduleId) {
        return function(serviceIdentifier) {
          var bindingToSyntax = _this.rebind(serviceIdentifier);
          setModuleId(bindingToSyntax, moduleId);
          return bindingToSyntax;
        };
      };
      var getOnActivationFunction = function(moduleId) {
        return function(serviceIdentifier, onActivation) {
          _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
          _this.onActivation(serviceIdentifier, onActivation);
        };
      };
      var getOnDeactivationFunction = function(moduleId) {
        return function(serviceIdentifier, onDeactivation) {
          _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
          _this.onDeactivation(serviceIdentifier, onDeactivation);
        };
      };
      return function(mId) {
        return {
          bindFunction: getBindFunction(mId),
          isboundFunction: getIsboundFunction(),
          onActivationFunction: getOnActivationFunction(mId),
          onDeactivationFunction: getOnDeactivationFunction(mId),
          rebindFunction: getRebindFunction(mId),
          unbindFunction: getUnbindFunction(),
          unbindAsyncFunction: getUnbindAsyncFunction()
        };
      };
    };
    Container2.prototype._getAll = function(getArgs) {
      return Promise.all(this._get(getArgs));
    };
    Container2.prototype._get = function(getArgs) {
      var planAndResolveArgs = __assign2(__assign2({}, getArgs), { contextInterceptor: function(context2) {
        return context2;
      }, targetType: TargetTypeEnum.Variable });
      if (this._middleware) {
        var middlewareResult = this._middleware(planAndResolveArgs);
        if (middlewareResult === void 0 || middlewareResult === null) {
          throw new Error(INVALID_MIDDLEWARE_RETURN);
        }
        return middlewareResult;
      }
      return this._planAndResolve()(planAndResolveArgs);
    };
    Container2.prototype._getButThrowIfAsync = function(getArgs) {
      var result = this._get(getArgs);
      if (isPromiseOrContainsPromise(result)) {
        throw new Error(LAZY_IN_SYNC(getArgs.serviceIdentifier));
      }
      return result;
    };
    Container2.prototype._getAllArgs = function(serviceIdentifier) {
      var getAllArgs = {
        avoidConstraints: true,
        isMultiInject: true,
        serviceIdentifier
      };
      return getAllArgs;
    };
    Container2.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
      var getNotAllArgs = {
        avoidConstraints: false,
        isMultiInject,
        serviceIdentifier,
        key,
        value
      };
      return getNotAllArgs;
    };
    Container2.prototype._planAndResolve = function() {
      var _this = this;
      return function(args) {
        var context2 = plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
        context2 = args.contextInterceptor(context2);
        var result = resolve(context2);
        return result;
      };
    };
    Container2.prototype._deactivateIfSingleton = function(binding) {
      var _this = this;
      if (!binding.activated) {
        return;
      }
      if (isPromise(binding.cache)) {
        return binding.cache.then(function(resolved) {
          return _this._deactivate(binding, resolved);
        });
      }
      return this._deactivate(binding, binding.cache);
    };
    Container2.prototype._deactivateSingletons = function(bindings) {
      for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
        var binding = bindings_1[_i];
        var result = this._deactivateIfSingleton(binding);
        if (isPromise(result)) {
          throw new Error(ASYNC_UNBIND_REQUIRED);
        }
      }
    };
    Container2.prototype._deactivateSingletonsAsync = function(bindings) {
      return __awaiter4(this, void 0, void 0, function() {
        var _this = this;
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              return [4, Promise.all(bindings.map(function(b) {
                return _this._deactivateIfSingleton(b);
              }))];
            case 1:
              _a3.sent();
              return [2];
          }
        });
      });
    };
    Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
      if (this.parent) {
        return this._deactivate.bind(this.parent)(binding, instance);
      } else {
        return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
      }
    };
    Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              if (!this.parent)
                return [3, 2];
              return [4, this._deactivate.bind(this.parent)(binding, instance)];
            case 1:
              _a3.sent();
              return [3, 4];
            case 2:
              return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
            case 3:
              _a3.sent();
              _a3.label = 4;
            case 4:
              return [2];
          }
        });
      });
    };
    Container2.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
      try {
        this._bindingDictionary.remove(serviceIdentifier);
      } catch (e) {
        throw new Error(CANNOT_UNBIND + " " + getServiceIdentifierAsString(serviceIdentifier));
      }
    };
    Container2.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
      var _this = this;
      if (typeof binding.onDeactivation === "function") {
        var result = binding.onDeactivation(instance);
        if (isPromise(result)) {
          return result.then(function() {
            return _this._preDestroy(constructor, instance);
          });
        }
      }
      return this._preDestroy(constructor, instance);
    };
    Container2.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              if (!(typeof binding.onDeactivation === "function"))
                return [3, 2];
              return [4, binding.onDeactivation(instance)];
            case 1:
              _a3.sent();
              _a3.label = 2;
            case 2:
              return [4, this._preDestroy(constructor, instance)];
            case 3:
              _a3.sent();
              return [2];
          }
        });
      });
    };
    return Container2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/container/container_module.js
  var ContainerModule = /* @__PURE__ */ function() {
    function ContainerModule2(registry) {
      this.id = id();
      this.registry = registry;
    }
    return ContainerModule2;
  }();

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/utils/js.js
  function getFirstArrayDuplicate(array) {
    var seenValues = /* @__PURE__ */ new Set();
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
      var entry = array_1[_i];
      if (seenValues.has(entry)) {
        return entry;
      } else {
        seenValues.add(entry);
      }
    }
    return void 0;
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/annotation/decorator_utils.js
  function targetIsConstructorFunction(target) {
    return target.prototype !== void 0;
  }
  function _throwIfMethodParameter(parameterName) {
    if (parameterName !== void 0) {
      throw new Error(INVALID_DECORATOR_OPERATION);
    }
  }
  function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
    _throwIfMethodParameter(parameterName);
    _tagParameterOrProperty(TAGGED, annotationTarget, parameterIndex.toString(), metadata);
  }
  function tagProperty(annotationTarget, propertyName, metadata) {
    if (targetIsConstructorFunction(annotationTarget)) {
      throw new Error(INVALID_DECORATOR_OPERATION);
    }
    _tagParameterOrProperty(TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
  }
  function _ensureNoMetadataKeyDuplicates(metadata) {
    var metadatas = [];
    if (Array.isArray(metadata)) {
      metadatas = metadata;
      var duplicate = getFirstArrayDuplicate(metadatas.map(function(md) {
        return md.key;
      }));
      if (duplicate !== void 0) {
        throw new Error(DUPLICATED_METADATA + " " + duplicate.toString());
      }
    } else {
      metadatas = [metadata];
    }
    return metadatas;
  }
  function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
    var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
    var paramsOrPropertiesMetadata = {};
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
      paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (paramOrPropertyMetadata === void 0) {
      paramOrPropertyMetadata = [];
    } else {
      var _loop_1 = function(m2) {
        if (metadatas.some(function(md) {
          return md.key === m2.key;
        })) {
          throw new Error(DUPLICATED_METADATA + " " + m2.key.toString());
        }
      };
      for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
        var m = paramOrPropertyMetadata_1[_i];
        _loop_1(m);
      }
    }
    paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
  }
  function createTaggedDecorator(metadata) {
    return function(target, targetKey, indexOrPropertyDescriptor) {
      if (typeof indexOrPropertyDescriptor === "number") {
        tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
      } else {
        tagProperty(target, targetKey, metadata);
      }
    };
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/annotation/injectable.js
  function injectable() {
    return function(target) {
      if (Reflect.hasOwnMetadata(PARAM_TYPES, target)) {
        throw new Error(DUPLICATED_INJECTABLE_DECORATOR);
      }
      var types = Reflect.getMetadata(DESIGN_PARAM_TYPES, target) || [];
      Reflect.defineMetadata(PARAM_TYPES, types, target);
      return target;
    };
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/annotation/inject_base.js
  function injectBase(metadataKey) {
    return function(serviceIdentifier) {
      return function(target, targetKey, indexOrPropertyDescriptor) {
        if (serviceIdentifier === void 0) {
          var className = typeof target === "function" ? target.name : target.constructor.name;
          throw new Error(UNDEFINED_INJECT_ANNOTATION(className));
        }
        return createTaggedDecorator(new Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
      };
    };
  }

  // ../../node_modules/.pnpm/inversify@6.0.2/node_modules/inversify/es/annotation/inject.js
  var inject = injectBase(INJECT_TAG);

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/Maybe.js
  var Maybe = {
    of(value) {
      return just(value);
    },
    empty() {
      return nothing;
    },
    zero() {
      return nothing;
    },
    fromNullable(value) {
      return value == null ? nothing : just(value);
    },
    fromFalsy(value) {
      return value ? just(value) : nothing;
    },
    fromPredicate(pred, value) {
      switch (arguments.length) {
        case 1:
          return (value2) => Maybe.fromPredicate(pred, value2);
        default:
          return pred(value) ? just(value) : nothing;
      }
    },
    mapMaybe(f, list) {
      switch (arguments.length) {
        case 1:
          return (list2) => Maybe.mapMaybe(f, list2);
        default:
          return Maybe.catMaybes(list.map(f));
      }
    },
    catMaybes(list) {
      let res = [];
      for (const e of list) {
        if (e.isJust()) {
          res.push(e.extract());
        }
      }
      return res;
    },
    encase(thunk) {
      try {
        return just(thunk());
      } catch {
        return nothing;
      }
    },
    isMaybe(x) {
      return x instanceof Just || x instanceof Nothing;
    },
    sequence(maybes) {
      let res = [];
      for (const m of maybes) {
        if (m.isJust()) {
          res.push(m.extract());
        } else {
          return nothing;
        }
      }
      return just(res);
    },
    "fantasy-land/of"(value) {
      return this.of(value);
    },
    "fantasy-land/empty"() {
      return this.empty();
    },
    "fantasy-land/zero"() {
      return this.zero();
    }
  };
  var Just = class {
    constructor(__value) {
      this.__value = __value;
      this["fantasy-land/equals"] = this.equals;
      this["fantasy-land/map"] = this.map;
      this["fantasy-land/ap"] = this.ap;
      this["fantasy-land/alt"] = this.alt;
      this["fantasy-land/chain"] = this.chain;
      this["fantasy-land/reduce"] = this.reduce;
      this["fantasy-land/extend"] = this.extend;
      this["fantasy-land/filter"] = this.filter;
    }
    isJust() {
      return true;
    }
    isNothing() {
      return false;
    }
    inspect() {
      return `Just(${this.__value})`;
    }
    toString() {
      return this.inspect();
    }
    toJSON() {
      const value = this.__value;
      return value instanceof Date ? value.toJSON() : value;
    }
    equals(other) {
      return this.extract() === other.extract();
    }
    map(f) {
      return just(f(this.__value));
    }
    ap(maybeF) {
      return maybeF.isJust() ? this.map(maybeF.extract()) : nothing;
    }
    alt(_) {
      return this;
    }
    altLazy(_) {
      return this;
    }
    chain(f) {
      return f(this.__value);
    }
    chainNullable(f) {
      return Maybe.fromNullable(f(this.__value));
    }
    join() {
      return this.__value;
    }
    reduce(reducer, initialValue) {
      return reducer(initialValue, this.__value);
    }
    extend(f) {
      return just(f(this));
    }
    unsafeCoerce() {
      return this.__value;
    }
    caseOf(patterns) {
      return "_" in patterns ? patterns._() : patterns.Just(this.__value);
    }
    orDefault(_) {
      return this.__value;
    }
    orDefaultLazy(_) {
      return this.__value;
    }
    toList() {
      return [this.__value];
    }
    mapOrDefault(f, _) {
      return f(this.__value);
    }
    extract() {
      return this.__value;
    }
    extractNullable() {
      return this.__value;
    }
    toEither(_) {
      return right(this.__value);
    }
    ifJust(effect) {
      return effect(this.__value), this;
    }
    ifNothing(_) {
      return this;
    }
    filter(pred) {
      return pred(this.__value) ? just(this.__value) : nothing;
    }
  };
  Just.prototype.constructor = Maybe;
  var Nothing = class {
    constructor() {
      this["fantasy-land/equals"] = this.equals;
      this["fantasy-land/map"] = this.map;
      this["fantasy-land/ap"] = this.ap;
      this["fantasy-land/alt"] = this.alt;
      this["fantasy-land/chain"] = this.chain;
      this["fantasy-land/reduce"] = this.reduce;
      this["fantasy-land/extend"] = this.extend;
      this["fantasy-land/filter"] = this.filter;
    }
    isJust() {
      return false;
    }
    isNothing() {
      return true;
    }
    inspect() {
      return "Nothing";
    }
    toString() {
      return this.inspect();
    }
    toJSON() {
      return this.__value;
    }
    equals(other) {
      return this.extract() === other.extract();
    }
    map(_) {
      return nothing;
    }
    ap(_) {
      return nothing;
    }
    alt(other) {
      return other;
    }
    altLazy(other) {
      return other();
    }
    chain(_) {
      return nothing;
    }
    chainNullable(_) {
      return nothing;
    }
    join() {
      return nothing;
    }
    reduce(_, initialValue) {
      return initialValue;
    }
    extend(_) {
      return nothing;
    }
    unsafeCoerce() {
      throw new Error("Maybe#unsafeCoerce was ran on a Nothing");
    }
    caseOf(patterns) {
      return "_" in patterns ? patterns._() : patterns.Nothing();
    }
    orDefault(defaultValue) {
      return defaultValue;
    }
    orDefaultLazy(getDefaultValue) {
      return getDefaultValue();
    }
    toList() {
      return [];
    }
    mapOrDefault(_, defaultValue) {
      return defaultValue;
    }
    extract() {
      return void 0;
    }
    extractNullable() {
      return null;
    }
    toEither(left2) {
      return left(left2);
    }
    ifJust(_) {
      return this;
    }
    ifNothing(effect) {
      return effect(), this;
    }
    filter(_) {
      return nothing;
    }
  };
  Nothing.prototype.constructor = Maybe;
  var just = (value) => new Just(value);
  var nothing = new Nothing();

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/Either.js
  var Either = {
    of(value) {
      return right(value);
    },
    lefts(list) {
      let result = [];
      for (const x of list) {
        if (x.isLeft()) {
          result.push(x.extract());
        }
      }
      return result;
    },
    rights(list) {
      let result = [];
      for (const x of list) {
        if (x.isRight()) {
          result.push(x.extract());
        }
      }
      return result;
    },
    encase(throwsF) {
      try {
        return right(throwsF());
      } catch (e) {
        return left(e);
      }
    },
    sequence(eithers) {
      let res = [];
      for (const e of eithers) {
        if (e.isLeft()) {
          return e;
        }
        res.push(e.extract());
      }
      return right(res);
    },
    isEither(x) {
      return x instanceof Left || x instanceof Right;
    },
    "fantasy-land/of"(value) {
      return Either.of(value);
    }
  };
  var Right = class {
    constructor(__value) {
      this.__value = __value;
      this._ = "R";
      this["fantasy-land/bimap"] = this.bimap;
      this["fantasy-land/map"] = this.map;
      this["fantasy-land/ap"] = this.ap;
      this["fantasy-land/equals"] = this.equals;
      this["fantasy-land/chain"] = this.chain;
      this["fantasy-land/alt"] = this.alt;
      this["fantasy-land/reduce"] = this.reduce;
      this["fantasy-land/extend"] = this.extend;
    }
    isLeft() {
      return false;
    }
    isRight() {
      return true;
    }
    toJSON() {
      return this.__value;
    }
    inspect() {
      return `Right(${this.__value})`;
    }
    toString() {
      return this.inspect();
    }
    bimap(_, g) {
      return right(g(this.__value));
    }
    map(f) {
      return right(f(this.__value));
    }
    mapLeft(_) {
      return this;
    }
    ap(other) {
      return other.isRight() ? this.map(other.extract()) : other;
    }
    equals(other) {
      return other.isRight() ? this.__value === other.extract() : false;
    }
    chain(f) {
      return f(this.__value);
    }
    chainLeft(_) {
      return this;
    }
    join() {
      return this.__value;
    }
    alt(_) {
      return this;
    }
    altLazy(_) {
      return this;
    }
    reduce(reducer, initialValue) {
      return reducer(initialValue, this.__value);
    }
    extend(f) {
      return right(f(this));
    }
    unsafeCoerce() {
      return this.__value;
    }
    caseOf(patterns) {
      return "_" in patterns ? patterns._() : patterns.Right(this.__value);
    }
    leftOrDefault(defaultValue) {
      return defaultValue;
    }
    orDefault(_) {
      return this.__value;
    }
    orDefaultLazy(_) {
      return this.__value;
    }
    leftOrDefaultLazy(getDefaultValue) {
      return getDefaultValue();
    }
    ifLeft(_) {
      return this;
    }
    ifRight(effect) {
      return effect(this.__value), this;
    }
    toMaybe() {
      return just(this.__value);
    }
    leftToMaybe() {
      return nothing;
    }
    extract() {
      return this.__value;
    }
    swap() {
      return left(this.__value);
    }
  };
  Right.prototype.constructor = Either;
  var Left = class {
    constructor(__value) {
      this.__value = __value;
      this._ = "L";
      this["fantasy-land/bimap"] = this.bimap;
      this["fantasy-land/map"] = this.map;
      this["fantasy-land/ap"] = this.ap;
      this["fantasy-land/equals"] = this.equals;
      this["fantasy-land/chain"] = this.chain;
      this["fantasy-land/alt"] = this.alt;
      this["fantasy-land/reduce"] = this.reduce;
      this["fantasy-land/extend"] = this.extend;
    }
    isLeft() {
      return true;
    }
    isRight() {
      return false;
    }
    toJSON() {
      return this.__value;
    }
    inspect() {
      return `Left(${JSON.stringify(this.__value)})`;
    }
    toString() {
      return this.inspect();
    }
    bimap(f, _) {
      return left(f(this.__value));
    }
    map(_) {
      return this;
    }
    mapLeft(f) {
      return left(f(this.__value));
    }
    ap(other) {
      return other.isLeft() ? other : this;
    }
    equals(other) {
      return other.isLeft() ? other.extract() === this.__value : false;
    }
    chain(_) {
      return this;
    }
    chainLeft(f) {
      return f(this.__value);
    }
    join() {
      return this;
    }
    alt(other) {
      return other;
    }
    altLazy(other) {
      return other();
    }
    reduce(_, initialValue) {
      return initialValue;
    }
    extend(_) {
      return this;
    }
    unsafeCoerce() {
      if (this.__value instanceof Error) {
        throw this.__value;
      }
      throw new Error("Either#unsafeCoerce was ran on a Left");
    }
    caseOf(patterns) {
      return "_" in patterns ? patterns._() : patterns.Left(this.__value);
    }
    leftOrDefault(_) {
      return this.__value;
    }
    orDefault(defaultValue) {
      return defaultValue;
    }
    orDefaultLazy(getDefaultValue) {
      return getDefaultValue();
    }
    leftOrDefaultLazy(_) {
      return this.__value;
    }
    ifLeft(effect) {
      return effect(this.__value), this;
    }
    ifRight(_) {
      return this;
    }
    toMaybe() {
      return nothing;
    }
    leftToMaybe() {
      return just(this.__value);
    }
    extract() {
      return this.__value;
    }
    swap() {
      return right(this.__value);
    }
  };
  Left.prototype.constructor = Either;
  var left = (value) => new Left(value);
  var right = (value) => new Right(value);

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/Function.js
  var identity = (x) => x;
  var Order;
  (function(Order2) {
    Order2["LT"] = "LT";
    Order2["EQ"] = "EQ";
    Order2["GT"] = "GT";
  })(Order || (Order = {}));

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/NonEmptyList.js
  var NonEmptyListConstructor = (list) => list;
  var NonEmptyList = Object.assign(NonEmptyListConstructor, {
    fromArray: (source) => NonEmptyList.isNonEmpty(source) ? just(source) : nothing,
    unsafeCoerce: (source) => {
      if (NonEmptyList.isNonEmpty(source)) {
        return source;
      }
      throw new Error("NonEmptyList#unsafeCoerce was ran on an empty array");
    },
    fromTuple: (source) => NonEmptyList(source.toArray()),
    head: (list) => list[0],
    last: (list) => list[list.length - 1],
    isNonEmpty: (list) => list.length > 0,
    tail: (list) => list.slice(1)
  });

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/Codec.js
  var serializeValue = (_, value) => {
    return typeof value === "bigint" ? value.toString() : value;
  };
  var isObject = (obj) => typeof obj === "object" && obj !== null && !Array.isArray(obj);
  var reportError = (expectedType, input) => {
    let receivedString = "";
    switch (typeof input) {
      case "undefined":
        receivedString = "undefined";
        break;
      case "object":
        receivedString = input === null ? "null" : Array.isArray(input) ? "an array with value " + JSON.stringify(input, serializeValue) : "an object with value " + JSON.stringify(input, serializeValue);
        break;
      case "boolean":
        receivedString = "a boolean";
        break;
      case "symbol":
        receivedString = "a symbol";
        break;
      case "function":
        receivedString = "a function";
        break;
      case "bigint":
        receivedString = `a bigint with value ${input.toString()}`;
    }
    receivedString = receivedString || `a ${typeof input} with value ${JSON.stringify(input, serializeValue)}`;
    return `Expected ${expectedType}, but received ${receivedString}`;
  };
  var removeOneOfWithSingleElement = (schema) => {
    const schemaKeys = Object.keys(schema);
    if (schemaKeys.length === 1 && schema.oneOf?.length === 1 && typeof schema.oneOf[0] === "object") {
      Object.assign(schema, schema.oneOf[0]);
      delete schema.oneOf;
    }
    return schema;
  };
  var flattenNestedOneOf = (schema) => {
    if (Array.isArray(schema.oneOf)) {
      for (let i = 0; i < schema.oneOf.length; i++) {
        const e = schema.oneOf[i];
        if (typeof e === "object" && e.oneOf) {
          schema.oneOf.splice(i, 1);
          schema.oneOf.push(...e.oneOf);
          return optimizeSchema(schema);
        }
      }
    }
    return schema;
  };
  var optimizeSchema = (schema) => {
    flattenNestedOneOf(schema);
    removeOneOfWithSingleElement(schema);
    return schema;
  };
  var Codec = {
    /** Creates a codec for any JSON object */
    interface(properties) {
      const keys = Object.keys(properties);
      const decode = (input) => {
        if (!isObject(input)) {
          return left(reportError("an object", input));
        }
        const result = {};
        for (const key of keys) {
          if (!input.hasOwnProperty(key) && !properties[key]._isOptional) {
            return left(`Problem with property "${key}": it does not exist in received object ${JSON.stringify(input, serializeValue)}`);
          }
          const decodedProperty = properties[key].decode(input[key]);
          if (decodedProperty.isLeft()) {
            return left(`Problem with the value of property "${key}": ${decodedProperty.extract()}`);
          }
          const value = decodedProperty.extract();
          if (value !== void 0) {
            result[key] = value;
          }
        }
        return right(result);
      };
      const encode = (input) => {
        const result = {};
        for (const key of keys) {
          result[key] = properties[key].encode(input[key]);
        }
        return result;
      };
      return {
        decode,
        encode,
        unsafeDecode: (input) => decode(input).mapLeft(Error).unsafeCoerce(),
        schema: () => keys.reduce((acc, key) => {
          const isOptional = properties[key]._isOptional;
          if (!isOptional) {
            acc.required.push(key);
          }
          acc.properties[key] = optimizeSchema(properties[key].schema());
          return acc;
        }, {
          type: "object",
          properties: {},
          required: []
        })
      };
    },
    /** Creates a codec for any type, you can add your own deserialization/validation logic in the decode argument */
    custom({ decode, encode, schema }) {
      return {
        decode,
        encode,
        unsafeDecode: (input) => decode(input).mapLeft(Error).unsafeCoerce(),
        schema: schema ?? (() => ({}))
      };
    }
  };
  var string = Codec.custom({
    decode: (input) => typeof input === "string" ? right(input) : left(reportError("a string", input)),
    encode: identity,
    schema: () => ({ type: "string" })
  });
  var number = Codec.custom({
    decode: (input) => typeof input === "number" ? right(input) : left(reportError("a number", input)),
    encode: identity,
    schema: () => ({ type: "number" })
  });
  var nullType = Codec.custom({
    decode: (input) => input === null ? right(input) : left(reportError("a null", input)),
    encode: identity,
    schema: () => ({ type: "null" })
  });
  var undefinedType = Codec.custom({
    decode: (input) => input === void 0 ? right(input) : left(reportError("an undefined", input)),
    encode: identity
  });
  var boolean = Codec.custom({
    decode: (input) => typeof input === "boolean" ? right(input) : left(reportError("a boolean", input)),
    encode: identity,
    schema: () => ({ type: "boolean" })
  });
  var unknown = Codec.custom({
    decode: right,
    encode: identity,
    schema: () => ({})
  });
  var numberString = Codec.custom({
    decode: (input) => string.decode(input).chain((x) => isFinite(+x) ? right(x) : left(reportError("a number", input))),
    encode: identity,
    schema: number.schema
  });
  var date = Codec.custom({
    decode: (input) => string.decode(input).mapLeft((err) => `Problem with date string: ${err}`).chain((x) => Number.isNaN(Date.parse(x)) ? left("Expected a valid date string, but received a string that cannot be parsed") : right(new Date(x))),
    encode: (input) => input.toISOString(),
    schema: () => ({ type: "string", format: "date-time" })
  });

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/Tuple.js
  var TupleImpl = class {
    constructor(first, second) {
      this.first = first;
      this.second = second;
      this.length = 2;
      this["fantasy-land/equals"] = this.equals;
      this["fantasy-land/bimap"] = this.bimap;
      this["fantasy-land/map"] = this.map;
      this["fantasy-land/reduce"] = this.reduce;
      this["fantasy-land/ap"] = this.ap;
      this[0] = first;
      this[1] = second;
    }
    *[Symbol.iterator]() {
      yield this.first;
      yield this.second;
    }
    toJSON() {
      return this.toArray();
    }
    inspect() {
      return `Tuple(${JSON.stringify(this.first)}, ${JSON.stringify(this.second)})`;
    }
    toString() {
      return this.inspect();
    }
    fst() {
      return this.first;
    }
    snd() {
      return this.second;
    }
    equals(other) {
      return this.first === other.fst() && this.second === other.snd();
    }
    bimap(f, g) {
      return Tuple(f(this.first), g(this.second));
    }
    mapFirst(f) {
      return Tuple(f(this.first), this.second);
    }
    map(f) {
      return Tuple(this.first, f(this.second));
    }
    reduce(reducer, initialValue) {
      return reducer(initialValue, this.second);
    }
    toArray() {
      return [this.first, this.second];
    }
    swap() {
      return Tuple(this.second, this.first);
    }
    ap(f) {
      return Tuple(this.first, f.snd()(this.second));
    }
    every(pred) {
      return pred(this.first) && pred(this.second);
    }
    some(pred) {
      return pred(this.first) || pred(this.second);
    }
  };
  var Tuple = Object.assign((fst, snd) => new TupleImpl(fst, snd), {
    fromArray: ([fst, snd]) => {
      return Tuple(fst, snd);
    },
    fanout: (...args) => {
      const [f, g, value] = args;
      switch (args.length) {
        case 3:
          return Tuple(f(value), g(value));
        case 2:
          return (value2) => Tuple.fanout(f, g, value2);
        default:
          return (g2) => (value2) => Tuple.fanout(f, g2, value2);
      }
    }
  });
  TupleImpl.prototype.constructor = Tuple;

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/EitherAsync.js
  var _a;
  var helpers = {
    liftEither(either) {
      if (either.isRight()) {
        return Promise.resolve(either.extract());
      }
      throw either.extract();
    },
    fromPromise(promise) {
      return promise.then(helpers.liftEither);
    },
    throwE(error) {
      throw error;
    }
  };
  var EitherAsyncImpl = class {
    constructor(runPromise) {
      this.runPromise = runPromise;
      this[_a] = "EitherAsync";
      this["fantasy-land/chain"] = this.chain;
      this["fantasy-land/alt"] = this.alt;
      this.then = (onfulfilled, onrejected) => {
        return this.run().then(onfulfilled, onrejected);
      };
    }
    leftOrDefault(defaultValue) {
      return this.run().then((x) => x.leftOrDefault(defaultValue));
    }
    orDefault(defaultValue) {
      return this.run().then((x) => x.orDefault(defaultValue));
    }
    join() {
      return EitherAsync(async (helpers3) => {
        const either = await this;
        if (either.isRight()) {
          const nestedEither = await either.extract();
          return helpers3.liftEither(nestedEither);
        }
        return helpers3.liftEither(either);
      });
    }
    ap(eitherF) {
      return EitherAsync(async (helpers3) => {
        const otherValue = await eitherF;
        if (otherValue.isRight()) {
          const thisValue = await this.run();
          if (thisValue.isRight()) {
            return otherValue.extract()(thisValue.extract());
          } else {
            return helpers3.liftEither(thisValue);
          }
        }
        return helpers3.liftEither(otherValue);
      });
    }
    alt(other) {
      return EitherAsync(async (helpers3) => {
        const thisValue = await this.run();
        if (thisValue.isRight()) {
          return thisValue.extract();
        } else {
          const otherValue = await other;
          return helpers3.liftEither(otherValue);
        }
      });
    }
    extend(f) {
      return EitherAsync(async (helpers3) => {
        const either = await this.run();
        if (either.isRight()) {
          const v = EitherAsync.liftEither(either);
          return helpers3.liftEither(right(f(v)));
        }
        return helpers3.liftEither(either);
      });
    }
    async run() {
      try {
        return right(await this.runPromise(helpers));
      } catch (e) {
        return left(e);
      }
    }
    bimap(f, g) {
      return EitherAsync(async (helpers3) => {
        const either = await this.run();
        try {
          return await helpers3.liftEither(either.bimap(f, g));
        } catch (e) {
          throw await e;
        }
      });
    }
    map(f) {
      return EitherAsync((helpers3) => this.runPromise(helpers3).then(f));
    }
    mapLeft(f) {
      return EitherAsync(async (helpers3) => {
        try {
          return await this.runPromise(helpers3);
        } catch (e) {
          throw await f(e);
        }
      });
    }
    chain(f) {
      return EitherAsync(async (helpers3) => {
        const value = await this.runPromise(helpers3);
        return helpers3.fromPromise(f(value));
      });
    }
    chainLeft(f) {
      return EitherAsync(async (helpers3) => {
        try {
          return await this.runPromise(helpers3);
        } catch (e) {
          return helpers3.fromPromise(f(e));
        }
      });
    }
    toMaybeAsync() {
      return MaybeAsync(async ({ liftMaybe }) => {
        const either = await this.run();
        return liftMaybe(either.toMaybe());
      });
    }
    swap() {
      return EitherAsync(async (helpers3) => {
        const either = await this.run();
        if (either.isRight())
          helpers3.throwE(either.extract());
        return helpers3.liftEither(right(either.extract()));
      });
    }
    ifLeft(effect) {
      return EitherAsync(async (helpers3) => {
        const either = await this.run();
        either.ifLeft(effect);
        return helpers3.liftEither(either);
      });
    }
    ifRight(effect) {
      return EitherAsync(async (helpers3) => {
        const either = await this.run();
        either.ifRight(effect);
        return helpers3.liftEither(either);
      });
    }
    void() {
      return this.map((_) => {
      });
    }
    caseOf(patterns) {
      return this.run().then((x) => x.caseOf(patterns));
    }
    finally(effect) {
      return EitherAsync(({ fromPromise: fromPromise2 }) => fromPromise2(this.run().finally(effect)));
    }
  };
  _a = Symbol.toStringTag;
  var EitherAsync = Object.assign((runPromise) => new EitherAsyncImpl(runPromise), {
    fromPromise: (f) => EitherAsync(({ fromPromise: fP }) => fP(f())),
    liftEither: (either) => EitherAsync(({ liftEither }) => liftEither(either)),
    lefts: (list) => Promise.all(list.map((x) => x.run())).then(Either.lefts),
    rights: (list) => Promise.all(list.map((x) => x.run())).then(Either.rights),
    sequence: (eas) => EitherAsync(async (helpers3) => {
      let res = [];
      for await (const e of eas) {
        if (e.isLeft()) {
          return helpers3.liftEither(e);
        }
        res.push(e.extract());
      }
      return helpers3.liftEither(right(res));
    }),
    all: (eas) => EitherAsync.fromPromise(async () => Promise.all(eas).then(Either.sequence))
  });
  EitherAsyncImpl.prototype.constructor = EitherAsync;

  // ../../node_modules/.pnpm/purify-ts@2.0.3/node_modules/purify-ts/esm/MaybeAsync.js
  var _a2;
  var helpers2 = {
    liftMaybe(maybe) {
      if (maybe.isJust()) {
        return Promise.resolve(maybe.extract());
      }
      throw nothing;
    },
    fromPromise(promise) {
      return promise.then(helpers2.liftMaybe);
    }
  };
  var MaybeAsyncImpl = class {
    constructor(runPromise) {
      this.runPromise = runPromise;
      this[_a2] = "MaybeAsync";
      this["fantasy-land/chain"] = this.chain;
      this["fantasy-land/filter"] = this.filter;
      this["fantasy-land/alt"] = this.alt;
    }
    orDefault(defaultValue) {
      return this.run().then((x) => x.orDefault(defaultValue));
    }
    join() {
      return MaybeAsync(async (helpers3) => {
        const maybe = await this.run();
        if (maybe.isJust()) {
          const nestedMaybe = await maybe.extract();
          return helpers3.liftMaybe(nestedMaybe);
        }
        return helpers3.liftMaybe(nothing);
      });
    }
    ap(maybeF) {
      return MaybeAsync(async (helpers3) => {
        const otherValue = await maybeF;
        if (otherValue.isJust()) {
          const thisValue = await this.run();
          if (thisValue.isJust()) {
            return otherValue.extract()(thisValue.extract());
          } else {
            return helpers3.liftMaybe(nothing);
          }
        }
        return helpers3.liftMaybe(nothing);
      });
    }
    alt(other) {
      return MaybeAsync(async (helpers3) => {
        const thisValue = await this.run();
        if (thisValue.isJust()) {
          return thisValue.extract();
        } else {
          const otherValue = await other;
          return helpers3.liftMaybe(otherValue);
        }
      });
    }
    extend(f) {
      return MaybeAsync(async (helpers3) => {
        const maybe = await this.run();
        if (maybe.isJust()) {
          const v = MaybeAsync.liftMaybe(maybe);
          return helpers3.liftMaybe(just(f(v)));
        }
        return helpers3.liftMaybe(nothing);
      });
    }
    filter(pred) {
      return MaybeAsync(async (helpers3) => {
        const value = await this.run();
        return helpers3.liftMaybe(value.filter(pred));
      });
    }
    async run() {
      try {
        return just(await this.runPromise(helpers2));
      } catch {
        return nothing;
      }
    }
    map(f) {
      return MaybeAsync((helpers3) => this.runPromise(helpers3).then(f));
    }
    chain(f) {
      return MaybeAsync(async (helpers3) => {
        const value = await this.runPromise(helpers3);
        return helpers3.fromPromise(f(value));
      });
    }
    toEitherAsync(error) {
      return EitherAsync(async ({ liftEither }) => {
        const maybe = await this.run();
        return liftEither(maybe.toEither(error));
      });
    }
    ifJust(effect) {
      return MaybeAsync(async (helpers3) => {
        const maybe = await this.run();
        maybe.ifJust(effect);
        return helpers3.liftMaybe(maybe);
      });
    }
    ifNothing(effect) {
      return MaybeAsync(async (helpers3) => {
        const maybe = await this.run();
        maybe.ifNothing(effect);
        return helpers3.liftMaybe(maybe);
      });
    }
    void() {
      return this.map((_) => {
      });
    }
    caseOf(patterns) {
      return this.run().then((x) => x.caseOf(patterns));
    }
    finally(effect) {
      return MaybeAsync(({ fromPromise: fromPromise2 }) => fromPromise2(this.run().finally(effect)));
    }
    then(onfulfilled, onrejected) {
      return this.run().then(onfulfilled, onrejected);
    }
  };
  _a2 = Symbol.toStringTag;
  var MaybeAsync = Object.assign((runPromise) => new MaybeAsyncImpl(runPromise), {
    catMaybes: (list) => Promise.all(list).then(Maybe.catMaybes),
    fromPromise: (f) => MaybeAsync(({ fromPromise: fP }) => fP(f())),
    liftMaybe: (maybe) => MaybeAsync(({ liftMaybe }) => liftMaybe(maybe))
  });
  MaybeAsyncImpl.prototype.constructor = MaybeAsync;

  // src/internal/config/model/Errors.ts
  var ApiCallError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "ApiCallError";
    originalError;
  };
  var ParseResponseError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "ParseResponseError";
    originalError;
  };
  var JSONParseError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "JSONParseError";
    originalError;
  };
  var ReadFileError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "ReadFileError";
    originalError;
  };

  // package.json
  var package_default = {
    name: "@ledgerhq/device-sdk-core",
    version: "0.0.1",
    license: "MIT",
    main: "lib/index.js",
    types: "lib/index.d.ts",
    files: [
      "./lib"
    ],
    scripts: {
      build: "rimraf lib && tsc -p tsconfig.prod.json && tsc-alias -p tsconfig.prod.json",
      dev: 'tsc && (concurrently "tsc -w -p tsconfig.prod.json" "tsc-alias -w -p tsconfig.prod.json")',
      lint: 'eslint --cache --ext .ts "src"',
      "lint:fix": 'eslint --cache --fix --ext .ts "src"',
      prettier: "prettier . --check",
      "prettier:fix": "prettier . --write",
      test: "jest",
      "test:watch": "pnpm test -- --watch",
      "test:coverage": "pnpm test -- --coverage",
      typecheck: "tsc --noEmit",
      "module:create": "pnpm hygen core-module with-prompt",
      prebundle: "pnpm build",
      bundle: "esbuild index.ts --bundle --outfile=lib/index.min.js"
    },
    dependencies: {
      inversify: "^6.0.2",
      "inversify-logger-middleware": "^3.1.0",
      "purify-ts": "^2.0.3",
      "reflect-metadata": "^0.2.1",
      rxjs: "^7.8.1",
      semver: "^7.5.4",
      uuid: "^9.0.1"
    },
    devDependencies: {
      "@ledgerhq/eslint-config-dsdk": "workspace:*",
      "@ledgerhq/jest-config-dsdk": "workspace:*",
      "@ledgerhq/prettier-config-dsdk": "workspace:*",
      "@ledgerhq/tsconfig-dsdk": "workspace:*",
      "@types/semver": "^7.5.6",
      "@types/uuid": "^9.0.8",
      "@types/w3c-web-hid": "^1.0.6",
      concurrently: "^8.2.2",
      esbuild: "^0.20.2",
      "ts-node": "^10.9.2",
      "tsc-alias": "^1.8.8"
    }
  };

  // src/internal/config/data/LocalConfigDataSource.ts
  var version = {
    name: package_default.name,
    version: package_default.version
  };
  var stubFsReadFile = () => JSON.stringify(version);
  var FileLocalConfigDataSource = class {
    getConfig() {
      return Either.encase(() => stubFsReadFile()).mapLeft((error) => new ReadFileError(error)).chain((str) => {
        return Either.encase(() => JSON.parse(str)).mapLeft(
          (error) => new JSONParseError(error)
        );
      });
    }
  };
  FileLocalConfigDataSource = __decorateClass([
    injectable()
  ], FileLocalConfigDataSource);

  // src/internal/config/data/LocalConfigDataSource.stub.ts
  var StubLocalConfigDataSource = class {
    getConfig() {
      return Either.of({
        name: "DeviceSDK",
        version: "0.0.0-stub.1"
      });
    }
  };
  StubLocalConfigDataSource = __decorateClass([
    injectable()
  ], StubLocalConfigDataSource);

  // src/internal/config/data/RemoteConfigDataSource.ts
  var RestRemoteConfigDataSource = class {
    async getConfig() {
      const call = await this._callApi();
      if (call.isLeft()) {
        return left(new ApiCallError(call.extract()));
      }
      if (!call.extract().ok) {
        return left(new ApiCallError(new Error("response not ok")));
      }
      const json = await call.extract().json();
      if (json.isLeft()) {
        return left(new JSONParseError());
      }
      return json.chain((dto) => this._parseResponse(dto)).map((config2) => config2);
    }
    // Parser for the Dto
    // parserResponse: ConfigDto => Config
    _parseResponse(dto) {
      const { name, version: version2 } = dto;
      if (!name || !version2) {
        return left(new ParseResponseError());
      }
      return Either.of({ name, version: version2 });
    }
    _callApi() {
      return new Promise((res) => {
        res(
          Either.of({
            ok: true,
            json: async () => new Promise((r) => {
              r(
                Either.of({
                  name: "DeviceSDK",
                  version: "0.0.0-fake.1",
                  yolo: "yolo"
                })
              );
            })
          })
        );
      });
    }
  };
  RestRemoteConfigDataSource = __decorateClass([
    injectable()
  ], RestRemoteConfigDataSource);

  // src/internal/config/data/RemoteConfigDataSource.stub.ts
  var StubRemoteConfigDataSource = class {
    async getConfig() {
      return new Promise(
        (res) => res(
          Either.of({
            name: "DeviceSDK",
            version: "0.0.0-fake.2"
          })
        )
      );
    }
  };
  StubRemoteConfigDataSource = __decorateClass([
    injectable()
  ], StubRemoteConfigDataSource);

  // src/internal/logger-publisher/di/loggerTypes.ts
  var loggerTypes = {
    LoggerPublisherService: Symbol.for("LoggerPublisherService"),
    LoggerPublisherServiceFactory: Symbol.for("LoggerPublisherServiceFactory")
  };

  // src/internal/config/service/DefaultConfigService.ts
  var DefaultConfigService = class {
    _local;
    _remote;
    _logger;
    constructor(local, remote, loggerServiceFactory) {
      this._local = local;
      this._remote = remote;
      this._logger = loggerServiceFactory("config");
    }
    async getSdkConfig() {
      const localConfig = this._local.getConfig().ifLeft((error) => {
        this._logger.error("Local config not available", {
          data: { error }
        });
      });
      if (localConfig.isRight()) {
        const val = localConfig.extract();
        this._logger.info("Local config available", { data: { config: val } });
        return val;
      }
      return this._remote.getConfig().then((config2) => {
        return config2.mapLeft((error) => {
          this._logger.error("Local config available", { data: { error } });
          return { name: "DeadSdk", version: "0.0.0-dead.1" };
        }).extract();
      });
    }
  };
  DefaultConfigService = __decorateClass([
    injectable(),
    __decorateParam(0, inject(configTypes.LocalConfigDataSource)),
    __decorateParam(1, inject(configTypes.RemoteConfigDataSource)),
    __decorateParam(2, inject(loggerTypes.LoggerPublisherServiceFactory))
  ], DefaultConfigService);

  // src/internal/config/use-case/GetSdkVersionUseCase.ts
  var GetSdkVersionUseCase = class {
    _configService;
    constructor(configService) {
      this._configService = configService;
    }
    async getSdkVersion() {
      return (await this._configService.getSdkConfig()).version;
    }
  };
  GetSdkVersionUseCase = __decorateClass([
    injectable(),
    __decorateParam(0, inject(configTypes.ConfigService))
  ], GetSdkVersionUseCase);

  // src/internal/config/di/configModule.ts
  var configModuleFactory = ({
    stub = false
  } = {}) => new ContainerModule((bind2, _unbind, _isBound, rebind) => {
    bind2(configTypes.LocalConfigDataSource).to(FileLocalConfigDataSource);
    bind2(configTypes.RemoteConfigDataSource).to(RestRemoteConfigDataSource);
    bind2(configTypes.GetSdkVersionUseCase).to(GetSdkVersionUseCase);
    bind2(configTypes.ConfigService).to(DefaultConfigService);
    if (stub) {
      rebind(configTypes.LocalConfigDataSource).to(StubLocalConfigDataSource);
      rebind(configTypes.RemoteConfigDataSource).to(StubRemoteConfigDataSource);
    }
  });

  // src/internal/device-model/model/DeviceModel.ts
  var import_semver = __toESM(require_semver2());
  var DeviceModel = class {
    id;
    productName;
    usbProductId;
    legacyUsbProductId;
    usbOnly;
    memorySize;
    masks;
    bluetoothSpec;
    constructor(props) {
      this.id = props.id;
      this.productName = props.productName;
      this.usbProductId = props.usbProductId;
      this.legacyUsbProductId = props.legacyUsbProductId;
      this.usbOnly = props.usbOnly;
      this.memorySize = props.memorySize;
      this.masks = props.masks;
      this.bluetoothSpec = props.bluetoothSpec;
    }
    getBlockSize(firmwareVersion) {
      switch (this.id) {
        case "nanoS" /* NANO_S */:
          return import_semver.default.lt(import_semver.default.coerce(firmwareVersion) ?? "", "2.0.0") ? 4 * 1024 : 2 * 1024;
        case "nanoSP" /* NANO_SP */:
          return 32;
        case "nanoX" /* NANO_X */:
          return 4 * 1024;
        case "stax" /* STAX */:
          return 32;
      }
    }
  };

  // src/internal/device-model/data/StaticDeviceModelDataSource.ts
  var StaticDeviceModelDataSource = class {
    getAllDeviceModels() {
      return Object.values(StaticDeviceModelDataSource.deviceModelByIds);
    }
    getDeviceModel(params) {
      return StaticDeviceModelDataSource.deviceModelByIds[params.id];
    }
    /**
     * Returns the list of device models that match all the given parameters
     */
    filterDeviceModels(params) {
      return this.getAllDeviceModels().filter((deviceModel) => {
        return Object.entries(params).every(([key, value]) => {
          return deviceModel[key] === value;
        });
      });
    }
  };
  __publicField(StaticDeviceModelDataSource, "deviceModelByIds", {
    ["nanoS" /* NANO_S */]: new DeviceModel({
      id: "nanoS" /* NANO_S */,
      productName: "Ledger Nano S",
      usbProductId: 16,
      legacyUsbProductId: 1,
      usbOnly: true,
      memorySize: 320 * 1024,
      masks: [823132160]
    }),
    ["nanoSP" /* NANO_SP */]: new DeviceModel({
      id: "nanoSP" /* NANO_SP */,
      productName: "Ledger Nano S Plus",
      usbProductId: 80,
      legacyUsbProductId: 5,
      usbOnly: true,
      memorySize: 1533 * 1024,
      masks: [856686592]
    }),
    ["nanoX" /* NANO_X */]: new DeviceModel({
      id: "nanoX" /* NANO_X */,
      productName: "Ledger Nano X",
      usbProductId: 64,
      legacyUsbProductId: 4,
      usbOnly: false,
      memorySize: 2 * 1024 * 1024,
      masks: [855638016],
      bluetoothSpec: [
        {
          serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
          notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
          writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
          writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
        }
      ]
    }),
    ["stax" /* STAX */]: new DeviceModel({
      id: "stax" /* STAX */,
      productName: "Ledger Stax",
      usbProductId: 96,
      legacyUsbProductId: 6,
      usbOnly: false,
      memorySize: 1533 * 1024,
      masks: [857735168],
      bluetoothSpec: [
        {
          serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
          notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
          writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
          writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
        }
      ]
    })
  });
  StaticDeviceModelDataSource = __decorateClass([
    injectable()
  ], StaticDeviceModelDataSource);

  // src/internal/device-model/di/deviceModelTypes.ts
  var deviceModelTypes = {
    DeviceModelDataSource: Symbol.for("DeviceModelDataSource")
  };

  // src/internal/device-model/di/deviceModelModule.ts
  var deviceModelModuleFactory = ({
    stub = false
  } = {}) => new ContainerModule((bind2, _unbind, _isBound, _rebind) => {
    bind2(deviceModelTypes.DeviceModelDataSource).to(
      StaticDeviceModelDataSource
    );
    if (stub) {
    }
  });

  // ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }

  // ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // src/internal/device-session/data/FramerConst.ts
  var HEAD_TAG = 5;
  var HEAD_TAG_SIZE = 1;
  var CHANNEL_SIZE = 2;
  var INDEX_SIZE = 2;
  var APDU_DATA_SIZE = 2;

  // src/internal/device-session/model/Errors.ts
  var FramerOverflowError = class {
    _tag = "FramerOverflowError";
    originalError;
    constructor() {
      this.originalError = new Error(
        "Frame header length is greater than frame size"
      );
    }
  };
  var FramerApduError = class {
    _tag = "FramerApduError";
    originalError;
    constructor() {
      this.originalError = new Error("Frame offset is greater than apdu length");
    }
  };
  var DeviceSessionNotFound = class {
    _tag = "DeviceSessionNotFound";
    originalError;
    constructor(originalError) {
      this.originalError = originalError ?? new Error("Device session not found");
    }
  };

  // src/internal/device-session/model/Frame.ts
  var Frame = class {
    _header;
    _data;
    constructor({ header, data }) {
      this._header = header;
      this._data = data;
    }
    toString() {
      return JSON.stringify(
        {
          header: this._header.toString(),
          data: this._data.toString()
        },
        null,
        2
      );
    }
    getRawData() {
      const headerRaw = this._header.getRawData();
      const raw = new Uint8Array(headerRaw.length + this._data.length);
      raw.set(headerRaw, 0);
      raw.set(this._data, headerRaw.length);
      return raw;
    }
    getHeader() {
      return this._header;
    }
    getData() {
      return this._data;
    }
    isFirstIndex() {
      const index = this._header.getIndex();
      console.log(index);
      console.log(Array.from(index).every((value) => value === 0));
      return Array.from(index).every((value) => value === 0);
    }
  };

  // src/internal/device-session/model/FrameHeader.ts
  var FrameHeader = class {
    _uuid;
    _channel;
    _headTag;
    _index;
    _length;
    _dataSize;
    constructor({
      uuid,
      dataSize,
      index,
      headTag,
      length,
      channel
    }) {
      this._uuid = uuid;
      this._dataSize = dataSize;
      this._index = index;
      this._headTag = headTag;
      this._length = length;
      this._channel = channel;
    }
    setDataSize(dataSize) {
      this._dataSize = dataSize;
      return this;
    }
    getLength() {
      return this._length;
    }
    toString() {
      return JSON.stringify({
        uuid: this._uuid.toString(),
        dataSize: this._dataSize.extract()?.toString(),
        index: this._index.toString(),
        headTag: this._headTag.toString(),
        length: this._length.toString(),
        channel: this._channel.extract()?.toString()
      });
    }
    getRawData() {
      return new Uint8Array([
        ...this._channel.caseOf({
          Just: (channel) => [...channel],
          Nothing: () => []
        }),
        ...this._headTag,
        ...this._index,
        ...this._dataSize.caseOf({
          Just: (dataSize) => [...dataSize],
          Nothing: () => []
        })
      ]);
    }
    getIndex() {
      return this._index;
    }
  };

  // src/internal/device-session/utils/FramerUtils.ts
  var FramerUtils = {
    /*
     * Get last bytes of Uint8Array
     *
     * @param Uint8Array
     */
    getLastBytesFrom(array, size) {
      return new Uint8Array(array.slice(-size));
    }
  };

  // src/internal/device-session/service/DefaultFramerService.ts
  var DefaultFramerService = class {
    _frameSize;
    _channel;
    _padding;
    _logger;
    constructor({
      frameSize,
      channel = Maybe.zero(),
      padding = false
    }, loggerServiceFactory) {
      this._frameSize = frameSize;
      this._channel = channel;
      this._padding = padding;
      this._logger = loggerServiceFactory("framer");
    }
    /**
     * Get frames from apdu
     *
     * @param apdu
     */
    getFrames(apdu) {
      const frames = [];
      let count = 0;
      let frame = this.getFrameAtIndex(apdu, count);
      while (frame.isRight()) {
        frames.push(frame.extract());
        count += 1;
        frame = this.getFrameAtIndex(apdu, count).mapLeft((error) => {
          if (error instanceof FramerOverflowError) {
            this._logger.debug("Frames parsed", { data: { count } });
          } else {
            this._logger.error("Error while parsing frame", { data: { error } });
          }
          return error;
        });
      }
      return frames;
    }
    /**
     * Get apdu frame at index
     * Split every {{PACKET_SIZE - HEADER_SIZE}} bytes of apdu
     * @param apdu
     * @param frameIndex
     * @private
     */
    getFrameAtIndex(apdu, frameIndex) {
      const header = this.getFrameHeaderFrom(frameIndex, apdu.length);
      const frameOffset = frameIndex * this._frameSize - this.getHeaderSizeSumFrom(frameIndex);
      if (frameOffset > apdu.length) {
        return left(new FramerOverflowError());
      }
      if (header.getLength() > this._frameSize) {
        return left(new FramerApduError());
      }
      const dataMaxSize = this._frameSize - header.getLength();
      const data = apdu.slice(
        frameIndex === 0 ? 0 : frameOffset,
        frameIndex === 0 ? dataMaxSize : frameOffset + this._frameSize - header.getLength()
      );
      const frameData = this._padding ? new Uint8Array(dataMaxSize).fill(0) : new Uint8Array(data.length < dataMaxSize ? data.length : dataMaxSize);
      frameData.set(data, 0);
      const frame = new Frame({
        header,
        data: frameData
      });
      return right(frame);
    }
    /**
     * Get frame header
     * @param frameIndex
     * @param apduSize
     * @private
     */
    getFrameHeaderFrom(frameIndex, apduSize) {
      const header = new FrameHeader({
        uuid: v4_default(),
        channel: this._channel.map(
          (channel) => FramerUtils.getLastBytesFrom(channel, CHANNEL_SIZE)
        ),
        headTag: new Uint8Array([HEAD_TAG]),
        index: new Uint8Array([Math.floor(frameIndex / 255), frameIndex & 255]),
        length: this.getFrameHeaderSizeFromIndex(frameIndex),
        dataSize: Maybe.zero()
      });
      if (frameIndex === 0) {
        header.setDataSize(
          Maybe.of(
            new Uint8Array([Math.floor(apduSize / 255), apduSize & 255])
          )
        );
      }
      return header;
    }
    /**
     * Get frame offset
     * First frame has more bytes of header
     * Padding append means a 0 bytes is added at the end of each frame
     * @private
     * @param frameIndex
     */
    getHeaderSizeSumFrom(frameIndex) {
      let sum = this.getFrameHeaderSizeFromIndex(0);
      let i = 1;
      while (i < frameIndex) {
        sum += this.getFrameHeaderSizeFromIndex(i);
        i += 1;
      }
      return sum;
    }
    /**
     * Get frame header size
     * @private
     * @param frameIndex
     */
    getFrameHeaderSizeFromIndex(frameIndex) {
      return this._channel.caseOf({
        Just: () => CHANNEL_SIZE,
        Nothing: () => 0
      }) + INDEX_SIZE + HEAD_TAG_SIZE + (frameIndex === 0 ? APDU_DATA_SIZE : 0);
    }
  };
  DefaultFramerService = __decorateClass([
    injectable(),
    __decorateParam(1, inject(loggerTypes.LoggerPublisherServiceFactory))
  ], DefaultFramerService);

  // src/internal/device-session/service/DefaultSessionService.ts
  var DefaultSessionService = class {
    _sessions = [];
    _logger;
    constructor(loggerModuleFactory2, sessions) {
      this._sessions = sessions;
      this._logger = loggerModuleFactory2("session");
    }
    addSession(session) {
      const found = this._sessions.find((s) => s.id === session.id);
      if (found) {
        this._logger.warn("Session already exists", { data: { session } });
        return this;
      }
      this._sessions.push(session);
      this._logger.info("Session added", { data: { session } });
      return this;
    }
    removeSession(sessionId) {
      const found = this._sessions.find((s) => s.id === sessionId);
      if (found) {
        this._sessions = this._sessions.filter((s) => s.id !== sessionId);
        this._logger.info("Session removed", { data: { sessionId } });
        return this;
      }
      this._logger.warn("Session not found", { data: { sessionId } });
      return this;
    }
    getSession(sessionId) {
      const session = Maybe.fromNullable(
        this._sessions.find((s) => s.id === sessionId)
      );
      return session.toEither(new DeviceSessionNotFound());
    }
    getSessions() {
      return this._sessions;
    }
  };
  DefaultSessionService = __decorateClass([
    injectable(),
    __decorateParam(0, inject(loggerTypes.LoggerPublisherServiceFactory))
  ], DefaultSessionService);

  // src/internal/device-session/di/deviceSessionTypes.ts
  var deviceSessionTypes = {
    FramerService: Symbol.for("FramerService"),
    SessionService: Symbol.for("SessionService")
  };

  // src/internal/device-session/di/deviceSessionModule.ts
  var deviceSessionModuleFactory = () => new ContainerModule(
    (bind2, _unbind, _isBound, _rebind, _unbindAsync, _onActivation2, _onDeactivation) => {
      bind2(deviceSessionTypes.FramerService).to(DefaultFramerService);
      bind2(deviceSessionTypes.SessionService).to(DefaultSessionService);
    }
  );

  // src/internal/usb/di/usbDiTypes.ts
  var usbDiTypes = {
    UsbHidTransport: Symbol.for("UsbHidTransport")
  };

  // src/internal/discovery/use-case/ConnectUseCase.ts
  var ConnectUseCase = class {
    constructor(usbHidTransport) {
      this.usbHidTransport = usbHidTransport;
    }
    async execute({ deviceId }) {
      const either = await this.usbHidTransport.connect({ deviceId });
      return either.caseOf({
        Left: (error) => {
          throw error;
        },
        Right: (connectedDevice) => connectedDevice
      });
    }
  };
  ConnectUseCase = __decorateClass([
    injectable(),
    __decorateParam(0, inject(usbDiTypes.UsbHidTransport))
  ], ConnectUseCase);

  // src/internal/discovery/use-case/StartDiscoveringUseCase.ts
  var StartDiscoveringUseCase = class {
    constructor(usbHidTransport) {
      this.usbHidTransport = usbHidTransport;
    }
    execute() {
      return this.usbHidTransport.startDiscovering();
    }
  };
  StartDiscoveringUseCase = __decorateClass([
    injectable(),
    __decorateParam(0, inject(usbDiTypes.UsbHidTransport))
  ], StartDiscoveringUseCase);

  // src/internal/discovery/use-case/StopDiscoveringUseCase.ts
  var StopDiscoveringUseCase = class {
    constructor(usbHidTransport) {
      this.usbHidTransport = usbHidTransport;
    }
    execute() {
      return this.usbHidTransport.stopDiscovering();
    }
  };
  StopDiscoveringUseCase = __decorateClass([
    injectable(),
    __decorateParam(0, inject(usbDiTypes.UsbHidTransport))
  ], StopDiscoveringUseCase);

  // src/internal/discovery/di/discoveryModule.ts
  var discoveryModuleFactory = ({
    stub = false
  } = {}) => new ContainerModule((bind2, _unbind, _isBound, _rebind) => {
    bind2(discoveryTypes.StartDiscoveringUseCase).to(StartDiscoveringUseCase);
    bind2(discoveryTypes.StopDiscoveringUseCase).to(StopDiscoveringUseCase);
    bind2(discoveryTypes.ConnectUseCase).to(ConnectUseCase);
    if (stub) {
    }
  });

  // src/internal/hackathon/HackathonService.ts
  var initialAcc = {
    data: new Uint8Array(0),
    dataLength: 0,
    sequence: 0
  };
  var HackathonService = class {
    constructor(startDiscoveringUseCase, stopDiscoveringUseCase) {
      this.startDiscoveringUseCase = startDiscoveringUseCase;
      this.stopDiscoveringUseCase = stopDiscoveringUseCase;
      if ("hid" in navigator) {
        navigator.hid.addEventListener("connect", (event) => {
          const { device } = event;
          console.log(`\u{1F4E1} Received a connect event on ${device.productName}`);
        });
        navigator.hid.addEventListener("disconnect", (event) => {
          const { device } = event;
          console.log(`\u{1F4E1} Received a disconnect event on ${device.productName}`);
        });
      }
    }
    connectedDevice;
    discoveredDevice;
    acc;
    result;
    resolver;
    listener = (event) => {
      const { data } = event;
      const response = new Uint8Array(data.buffer);
      this.acc = HackathonService.reduceResponse(this.acc, response);
      this.result = HackathonService.getReducedResult(this.acc);
      if (this.result) {
        const sliced = HackathonService.toHexString(this.result.slice(0, 1));
        const pubKeyLength = Number("0x" + sliced);
        const pubKeySliced = this.result.slice(1, 1 + pubKeyLength);
        const pubKey = HackathonService.toHexString(pubKeySliced);
        const slicedAdressLength = this.result.slice(
          pubKeyLength + 1,
          pubKeyLength + 2
        );
        const addressLength = Number(
          "0x" + HackathonService.toHexString(slicedAdressLength)
        );
        const address = this.result.slice(
          pubKeyLength + 2,
          pubKeyLength + 2 + addressLength
        );
        const asciiString = new TextDecoder().decode(address);
        if (!this.resolver)
          return;
        this.resolver({
          pubKey,
          ethAddress: `0x${asciiString}`
        });
      }
    };
    addListener() {
      if (!this.connectedDevice)
        return;
      this.connectedDevice.addEventListener("inputreport", this.listener);
    }
    removeListener() {
      if (!this.connectedDevice)
        return;
      this.connectedDevice.removeEventListener("inputreport", this.listener);
    }
    discover() {
      return this.startDiscoveringUseCase.execute().subscribe({
        next: (device) => {
          this.discoveredDevice = device;
          this.connect().catch((err) => console.log(err));
        },
        complete: () => {
          this.stopDiscoveringUseCase.execute();
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
    async connect() {
      if (navigator && "hid" in navigator) {
        const [d] = await navigator.hid.getDevices();
        if (!d)
          return;
        this.connectedDevice = d;
        this.addListener();
      }
    }
    async getEthAddress() {
      if (!this.connectedDevice)
        return;
      if (!this.connectedDevice.opened) {
        await this.connectedDevice.open();
      }
      this.acc = void 0;
      this.result = void 0;
      const ethAddressApdu = new Uint8Array([
        224,
        2,
        0,
        0,
        29,
        5,
        128,
        0,
        0,
        44,
        128,
        0,
        0,
        60,
        128,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ]);
      const header = new Uint8Array([
        170,
        170,
        5,
        0,
        0,
        0,
        ethAddressApdu.length
      ]);
      const fullAPDU = new Uint8Array(header.length + ethAddressApdu.length);
      fullAPDU.set(header, 0);
      fullAPDU.set(ethAddressApdu, header.length);
      await this.connectedDevice.sendReport(0, fullAPDU);
      return new Promise((resolver) => {
        this.resolver = resolver;
      });
    }
    disconnect() {
      this.connectedDevice = void 0;
      this.acc = void 0;
      this.result = void 0;
    }
  };
  __publicField(HackathonService, "getReducedResult", (acc) => {
    if (acc && acc.dataLength === acc.data.length) {
      return acc.data;
    }
    return;
  });
  __publicField(HackathonService, "concatTypedArray", (a, b) => {
    const c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
  });
  __publicField(HackathonService, "toHexString", (bytes) => bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), ""));
  __publicField(HackathonService, "reduceResponse", (acc, chunk) => {
    let { data, dataLength, sequence } = acc ?? initialAcc;
    if (!acc) {
      const sliced = HackathonService.toHexString(chunk.slice(5, 7));
      dataLength = Number("0x" + sliced);
    }
    sequence++;
    const chunkData = chunk.slice(acc ? 5 : 7);
    data = HackathonService.concatTypedArray(data, chunkData);
    if (data.length > dataLength) {
      data = data.slice(0, dataLength);
    }
    return {
      data,
      dataLength,
      sequence
    };
  });
  HackathonService = __decorateClass([
    injectable(),
    __decorateParam(0, inject(discoveryTypes.StartDiscoveringUseCase)),
    __decorateParam(1, inject(discoveryTypes.StopDiscoveringUseCase))
  ], HackathonService);

  // src/internal/hackathon/hackModule.ts
  var hackModuleFactory = () => new ContainerModule((bind2, _unbind, _isBound, _rebind) => {
    bind2(hackTypes.HackathonService).to(HackathonService).inSingletonScope();
  });

  // src/api/logger-subscriber/model/LogLevel.ts
  var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
    LogLevel2["Fatal"] = "FATAL";
    LogLevel2["Error"] = "ERROR";
    LogLevel2["Warning"] = "WARNING";
    LogLevel2["Info"] = "INFO";
    LogLevel2["Debug"] = "DEBUG";
    return LogLevel2;
  })(LogLevel || {});

  // src/internal/logger-publisher/service/DefaultLoggerPublisherService.ts
  var DefaultLoggerPublisherService = class {
    subscribers;
    tag;
    constructor(subscribers, tag) {
      this.subscribers = subscribers;
      this.tag = tag;
    }
    _log(level, message, options) {
      this.subscribers.forEach((subscriber) => {
        const subscriberOptions = {
          timestamp: Date.now(),
          tag: this.tag,
          ...options
        };
        subscriber.log(level, message, subscriberOptions);
      });
    }
    info(message, options) {
      this._log("INFO" /* Info */, message, options);
    }
    warn(message, options) {
      this._log("WARNING" /* Warning */, message, options);
    }
    debug(message, options) {
      this._log("DEBUG" /* Debug */, message, options);
    }
    error(message, options) {
      this._log("ERROR" /* Error */, message, options);
    }
  };
  DefaultLoggerPublisherService = __decorateClass([
    injectable()
  ], DefaultLoggerPublisherService);

  // src/internal/logger-publisher/di/loggerModule.ts
  var loggerModuleFactory = ({ subscribers } = { subscribers: [] }) => new ContainerModule(
    (bind2, _unbind, _isBound, _rebind, _unbindAsync, _onActivation2, _onDeactivation) => {
      bind2(
        loggerTypes.LoggerPublisherServiceFactory
      ).toFactory((_context) => {
        return (tag) => new DefaultLoggerPublisherService(subscribers, tag);
      });
    }
  );

  // src/internal/send/usecase/SendApduUseCase.ts
  var SendApduUseCase = class {
    constructor(sessionService) {
      this.sessionService = sessionService;
    }
    async execute({ sessionId }) {
      const uint8Array = new Uint8Array([0, 0, 0, 0, 0]);
      const deviceSession = this.sessionService.getSession(sessionId);
      if (deviceSession.isLeft()) {
        throw deviceSession.extract();
      }
      if (deviceSession.isRight()) {
        const res = await deviceSession.extract().sendApdu(uint8Array);
        console.log("SendAPDU", res);
        return res;
      }
      return;
    }
  };
  SendApduUseCase = __decorateClass([
    injectable(),
    __decorateParam(0, inject(deviceSessionTypes.SessionService))
  ], SendApduUseCase);

  // src/internal/send/di/sendModule.ts
  var sendModuleFactory = (_args = {}) => new ContainerModule(
    (bind2, _unbind, _isBound, _rebind, _unbindAsync, _onActivation2, _onDeactivation) => {
      bind2(sendTypes.SendService).to(SendApduUseCase);
    }
  );

  // ../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
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
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __awaiter5(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
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
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator5(thisArg, body) {
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
      while (g && (g = 0, op[0] && (_ = 0)), _)
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
  }
  function __values(o) {
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
  }
  function __read(o, n) {
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
  }
  function __spreadArray4(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from2.length, ar; i < l; i++) {
        if (ar || !(i in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i);
          ar[i] = from2[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
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
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve2, reject) {
          v = o[n](v), settle(resolve2, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve2, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve2({ value: v2, done: d });
      }, reject);
    }
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction(value) {
    return typeof value === "function";
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError = createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscription.js
  var Subscription = function() {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription2.prototype.unsubscribe = function() {
      var e_1, _a3, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a3 = _parentage_1.return))
                  _a3.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray4(__spreadArray4([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                _b.call(_finalizers_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var _a3;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a3 = this._finalizers) !== null && _a3 !== void 0 ? _a3 : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = function() {
      var empty = new Subscription2();
      empty.closed = true;
      return empty;
    }();
    return Subscription2;
  }();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/config.js
  var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider = {
    setTimeout: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = timeoutProvider.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
        return delegate.setTimeout.apply(delegate, __spreadArray4([handler, timeout], __read(args)));
      }
      return setTimeout.apply(void 0, __spreadArray4([handler, timeout], __read(args)));
    },
    clearTimeout: function(handle) {
      var delegate = timeoutProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: void 0
  };

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      var onUnhandledError = config.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop() {
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
  var COMPLETE_NOTIFICATION = function() {
    return createNotification("C", void 0, void 0);
  }();
  function errorNotification(error) {
    return createNotification("E", void 0, error);
  }
  function nextNotification(value) {
    return createNotification("N", value, void 0);
  }
  function createNotification(kind, value, error) {
    return {
      kind,
      value,
      error
    };
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/errorContext.js
  var context = null;
  function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context;
      if (isRoot) {
        context = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a3 = context, errorThrown = _a3.errorThrown, error = _a3.error;
        context = null;
        if (errorThrown) {
          throw error;
        }
      }
    } else {
      cb();
    }
  }
  function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
      context.errorThrown = true;
      context.error = err;
    }
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscriber.js
  var Subscriber = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber2.create = function(next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
      if (this.isStopped) {
        handleStoppedNotification(nextNotification(value), this);
      } else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (this.isStopped) {
        handleStoppedNotification(errorNotification(err), this);
      } else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (this.isStopped) {
        handleStoppedNotification(COMPLETE_NOTIFICATION, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  }(Subscription);
  var _bind = Function.prototype.bind;
  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }
  var ConsumerObserver = function() {
    function ConsumerObserver2(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver2.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver2.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver2.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver2;
  }();
  var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        var context_1;
        if (_this && config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
          partialObserver = {
            next: observerOrNext.next && bind(observerOrNext.next, context_1),
            error: observerOrNext.error && bind(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    return SafeSubscriber2;
  }(Subscriber);
  function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      captureError(error);
    } else {
      reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity2(x) {
    return x;
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity2;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Observable.js
  var Observable = function() {
    function Observable3(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable3.prototype.lift = function(operator) {
      var observable2 = new Observable3();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function() {
        var _a3 = _this, operator = _a3.operator, source = _a3.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable3.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable3.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve2, reject) {
        var subscriber = new SafeSubscriber({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve2
        });
        _this.subscribe(subscriber);
      });
    };
    Observable3.prototype._subscribe = function(subscriber) {
      var _a3;
      return (_a3 = this.source) === null || _a3 === void 0 ? void 0 : _a3.subscribe(subscriber);
    };
    Observable3.prototype[observable] = function() {
      return this;
    };
    Observable3.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable3.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve2, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve2(value);
        });
      });
    };
    Observable3.create = function(subscribe) {
      return new Observable3(subscribe);
    };
    return Observable3;
  }();
  function getPromiseCtor(promiseCtor) {
    var _a3;
    return (_a3 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a3 !== void 0 ? _a3 : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
      var _a3;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a3 = this.onFinalize) === null || _a3 === void 0 ? void 0 : _a3.call(this));
      }
    };
    return OperatorSubscriber2;
  }(Subscriber);

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
  var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isPromise.js
  function isPromise2(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isIterable.js
  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a3, value, done;
      return __generator5(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              return [3, 8];
            return [4, __await(reader.read())];
          case 3:
            _a3 = _b.sent(), value = _a3.value, done = _a3.done;
            if (!done)
              return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise2(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function(subscriber) {
      var obs = obj[observable]();
      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike(array) {
    return new Observable(function(subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function(subscriber) {
      var e_1, _a3;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a3 = iterable_1.return))
            _a3.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function(subscriber) {
      process2(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process2(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a3;
    return __awaiter5(this, void 0, void 0, function() {
      var value, e_2_1;
      return __generator5(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a3 = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a3.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
      delay = 0;
    }
    if (repeat === void 0) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay));
      } else {
        this.unsubscribe();
      }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return operate(function(source, subscriber) {
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        return executeSchedule(subscriber, scheduler, function() {
          return subscriber.next(value);
        }, delay);
      }, function() {
        return executeSchedule(subscriber, scheduler, function() {
          return subscriber.complete();
        }, delay);
      }, function(err) {
        return executeSchedule(subscriber, scheduler, function() {
          return subscriber.error(err);
        }, delay);
      }));
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return operate(function(source, subscriber) {
      subscriber.add(scheduler.schedule(function() {
        return source.subscribe(subscriber);
      }, delay));
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
  function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
  function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
  function scheduleArray(input, scheduler) {
    return new Observable(function(subscriber) {
      var i = 0;
      return scheduler.schedule(function() {
        if (i === input.length) {
          subscriber.complete();
        } else {
          subscriber.next(input[i++]);
          if (!subscriber.closed) {
            this.schedule();
          }
        }
      });
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
  function scheduleIterable(input, scheduler) {
    return new Observable(function(subscriber) {
      var iterator2;
      executeSchedule(subscriber, scheduler, function() {
        iterator2 = input[iterator]();
        executeSchedule(subscriber, scheduler, function() {
          var _a3;
          var value;
          var done;
          try {
            _a3 = iterator2.next(), value = _a3.value, done = _a3.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
          }
        }, 0, true);
      });
      return function() {
        return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
      };
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
  function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
      throw new Error("Iterable cannot be null");
    }
    return new Observable(function(subscriber) {
      executeSchedule(subscriber, scheduler, function() {
        var iterator2 = input[Symbol.asyncIterator]();
        executeSchedule(subscriber, scheduler, function() {
          iterator2.next().then(function(result) {
            if (result.done) {
              subscriber.complete();
            } else {
              subscriber.next(result.value);
            }
          });
        }, 0, true);
      });
    });
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
  function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
  function scheduled(input, scheduler) {
    if (input != null) {
      if (isInteropObservable(input)) {
        return scheduleObservable(input, scheduler);
      }
      if (isArrayLike(input)) {
        return scheduleArray(input, scheduler);
      }
      if (isPromise2(input)) {
        return schedulePromise(input, scheduler);
      }
      if (isAsyncIterable(input)) {
        return scheduleAsyncIterable(input, scheduler);
      }
      if (isIterable(input)) {
        return scheduleIterable(input, scheduler);
      }
      if (isReadableStreamLike(input)) {
        return scheduleReadableStreamLike(input, scheduler);
      }
    }
    throw createInvalidObservableTypeError(input);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/from.js
  function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
  }

  // ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
  function switchMap(project, resultSelector) {
    return operate(function(source, subscriber) {
      var innerSubscriber = null;
      var index = 0;
      var isComplete = false;
      var checkComplete = function() {
        return isComplete && !innerSubscriber && subscriber.complete();
      };
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
        var innerIndex = 0;
        var outerIndex = index++;
        innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
          return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
        }, function() {
          innerSubscriber = null;
          checkComplete();
        }));
      }, function() {
        isComplete = true;
        checkComplete();
      }));
    });
  }

  // src/internal/usb/data/UsbHidConfig.ts
  var ledgerVendorId = 11415;

  // src/internal/usb/model/Errors.ts
  var DeviceNotRecognizedError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "DeviceNotRecognizedError";
    originalError;
  };
  var NoAccessibleDeviceError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "NoAccessibleDeviceError";
    originalError;
  };
  var OpeningConnectionError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "ConnectionOpeningError";
    originalError;
  };
  var UnknownDeviceError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "UnknownDeviceError";
    originalError;
  };
  var UsbHidTransportNotSupportedError = class {
    constructor(err) {
      this.err = err;
      this.originalError = err;
    }
    _tag = "UsbHidTransportNotSupportedError";
    originalError;
  };

  // src/internal/usb/transport/WebUsbHidTransport.ts
  var WebUsbHidTransport = class {
    constructor(deviceModelDataSource, loggerServiceFactory) {
      this.deviceModelDataSource = deviceModelDataSource;
      this.internalDevicesById = /* @__PURE__ */ new Map();
      this.connectionListenersAbortController = new AbortController();
      this.logger = loggerServiceFactory("WebUsbHidTransport");
    }
    // Maps uncoupled DiscoveredDevice and WebHID's HIDDevice WebHID
    internalDevicesById;
    connectionListenersAbortController;
    logger;
    /**
     * @returns `Either` an error if the WebHID API is not supported, or the WebHID API itself
     */
    hidApi = () => {
      if (this.isSupported()) {
        return right(navigator.hid);
      }
      return left(
        new UsbHidTransportNotSupportedError(new Error("WebHID not supported"))
      );
    };
    isSupported() {
      try {
        const result = !!navigator?.hid;
        this.logger.debug(`isSupported: ${result}`);
        return result;
      } catch (error) {
        this.logger.error(`isSupported: error`, { data: { error } });
        return false;
      }
    }
    /**
     * Currently: as there is no way to uniquely identify a device, we might need to always update the internal mapping
     * of devices when prompting for device access.
     *
     * Also, we cannot trust hidApi.getDevices() as 2 devices of the same models (even on the same USB port) will be recognized
     * as the same devices.
     */
    // private async promptDeviceAccess(): Promise<Either<PromptDeviceAccessError, DiscoveredDeviceDto[]>> {
    async promptDeviceAccess() {
      return EitherAsync.liftEither(this.hidApi()).map(async (hidApi) => {
        let hidDevices = [];
        try {
          hidDevices = await hidApi.requestDevice({
            filters: [{ vendorId: ledgerVendorId }]
          });
        } catch (error) {
          this.logger.error(`promptDeviceAccess: error requesting device`, {
            data: { error }
          });
          throw new NoAccessibleDeviceError(error);
        }
        this.logger.debug(
          `promptDeviceAccess: hidDevices len ${hidDevices.length}`
        );
        if (hidDevices.length === 0) {
          this.logger.warn("No device was selected");
          throw new NoAccessibleDeviceError(new Error("No selected device"));
        }
        const discoveredHidDevices = [];
        for (const hidDevice of hidDevices) {
          discoveredHidDevices.push(hidDevice);
          this.logger.debug(`promptDeviceAccess: selected device`, {
            data: { hidDevice }
          });
        }
        return discoveredHidDevices;
      }).run();
    }
    /**
     * For WebHID, the client can only discover devices for which the user granted access to.
     *
     * The issue is that once a user grant access to a device of a model/productId A, any other model/productId A device will be accessible.
     * Even if plugged on another USB port.
     * So we cannot rely on the `hid.getDevices` to get the list of accessible devices, because it is not possible to differentiate
     * between 2 devices of the same model.
     * Neither on `connect` and `disconnect` events.
     * We can only rely on the `hid.requestDevice` because it is the user who will select the device that we can access.
     *
     * 2 possible implementations:
     * - only `hid.requestDevice` and return the one selected device
     * - `hid.getDevices` first to get the previously accessible devices, then a `hid.requestDevice` to get any new one
     *
     * [ASK] Should we also subscribe to hid events `connect` and `disconnect` ?
     *
     * [ASK] For the 2nd option: the DiscoveredDevice could have a `isSelected` property ?
     * So the consumer can directly select this device.
     */
    startDiscovering() {
      this.logger.debug("startDiscovering");
      this.startListeningToConnectionEvents();
      this.internalDevicesById.clear();
      return from(this.promptDeviceAccess()).pipe(
        switchMap((either) => {
          return either.caseOf({
            Left: (error) => {
              this.logger.error("Error while getting accessible device", {
                data: { error }
              });
              throw error;
            },
            Right: (hidDevices) => {
              this.logger.info(`Got access to ${hidDevices.length} HID devices`);
              const discoveredDevices = hidDevices.map((hidDevice) => {
                const usbProductId = this.getHidUsbProductId(hidDevice.productId);
                const deviceModels = this.deviceModelDataSource.filterDeviceModels({ usbProductId });
                if (deviceModels.length === 1 && deviceModels[0]) {
                  const id2 = v4_default();
                  const discoveredDevice = {
                    id: id2,
                    deviceModel: deviceModels[0]
                  };
                  const internalDevice = {
                    id: id2,
                    hidDevice,
                    discoveredDevice
                  };
                  this.logger.debug(
                    `Discovered device ${id2} ${discoveredDevice.deviceModel.productName}`
                  );
                  this.internalDevicesById.set(id2, internalDevice);
                  return discoveredDevice;
                } else {
                  this.logger.warn(
                    `Device not recognized: 0x${usbProductId.toString(16)}`
                  );
                  throw new DeviceNotRecognizedError(
                    new Error(
                      `Device not recognized: 0x${usbProductId.toString(16)}`
                    )
                  );
                }
              });
              return from(discoveredDevices);
            }
          });
        })
      );
    }
    stopDiscovering() {
      this.logger.debug("stopDiscovering");
      this.stopListeningToConnectionEvents();
    }
    /**
     * Logs `connect` and `disconnect` events for already accessible devices
     */
    startListeningToConnectionEvents() {
      this.logger.debug("startListeningToConnectionEvents");
      this.hidApi().map((hidApi) => {
        hidApi.addEventListener(
          "connect",
          (event) => {
            this.logger.debug("connection event", { data: { event } });
          },
          { signal: this.connectionListenersAbortController.signal }
        );
        hidApi.addEventListener(
          "disconnect",
          (event) => {
            this.logger.debug("disconnect event", { data: { event } });
          },
          { signal: this.connectionListenersAbortController.signal }
        );
      });
    }
    stopListeningToConnectionEvents() {
      this.logger.debug("stopListeningToConnectionEvents");
      this.connectionListenersAbortController.abort();
    }
    /**
     * Connect to a HID USB device and update the internal state of the associated device
     */
    async connect({
      deviceId
    }) {
      this.logger.debug("connect", { data: { deviceId } });
      const internalDevice = this.internalDevicesById.get(deviceId);
      if (!internalDevice) {
        this.logger.error(`Unknown device ${deviceId}`);
        return left(
          new UnknownDeviceError(new Error(`Unknown device ${deviceId}`))
        );
      }
      try {
        await internalDevice.hidDevice.open();
      } catch (error) {
        if (error instanceof DOMException && error.name === "InvalidStateError") {
          this.logger.debug(`Device ${deviceId} is already opened`);
        } else {
          this.logger.debug(`Error while opening device: ${deviceId}`, {
            data: { error }
          });
          return left(new OpeningConnectionError(error));
        }
      }
      internalDevice.connectedDevice = {
        id: deviceId,
        deviceModel: internalDevice.discoveredDevice.deviceModel
      };
      return right(internalDevice.connectedDevice);
    }
    /**
     * The USB/HID product id is represented by only the 2nd byte
     */
    getHidUsbProductId(productId) {
      return productId >> 8;
    }
  };
  WebUsbHidTransport = __decorateClass([
    injectable(),
    __decorateParam(0, inject(deviceModelTypes.DeviceModelDataSource)),
    __decorateParam(1, inject(loggerTypes.LoggerPublisherServiceFactory))
  ], WebUsbHidTransport);

  // src/internal/usb/di/usbModule.ts
  var usbModuleFactory = ({
    stub = false
  } = {}) => new ContainerModule((bind2, _unbind, _isBound, _rebind) => {
    bind2(usbDiTypes.UsbHidTransport).to(WebUsbHidTransport).inSingletonScope();
    if (stub) {
    }
  });

  // src/di.ts
  var makeContainer = ({
    stub = false,
    loggers = []
  }) => {
    const container = new Container();
    container.load(
      configModuleFactory({ stub }),
      deviceModelModuleFactory({ stub }),
      usbModuleFactory({ stub }),
      discoveryModuleFactory({ stub }),
      loggerModuleFactory({ subscribers: loggers }),
      deviceSessionModuleFactory(),
      sendModuleFactory(),
      hackModuleFactory()
      // modules go here
    );
    return container;
  };

  // src/api/DeviceSdk.ts
  var DeviceSdk = class {
    container;
    /** @internal */
    constructor({ stub, loggers } = {}) {
      this.container = makeContainer({ stub, loggers });
    }
    startScan() {
      return;
    }
    stopScan() {
      return;
    }
    getVersion() {
      return this.container.get(configTypes.GetSdkVersionUseCase).getSdkVersion();
    }
    startDiscovering() {
      return this.container.get(discoveryTypes.StartDiscoveringUseCase).execute();
    }
    stopDiscovering() {
      return this.container.get(discoveryTypes.StopDiscoveringUseCase).execute();
    }
    connect(args) {
      return this.container.get(discoveryTypes.ConnectUseCase).execute(args);
    }
    sendApdu(args) {
      return this.container.get(sendTypes.SendService).execute(args);
    }
    // HACKATHON STUFF
    hackConnectAndDiscover() {
      this.container.get(hackTypes.HackathonService).discover();
    }
    hackDisconnect() {
      return this.container.get(hackTypes.HackathonService).disconnect();
    }
    async hackGetEthAddress() {
      return this.container.get(hackTypes.HackathonService).getEthAddress();
    }
  };

  // src/api/DeviceSdkBuilder.ts
  var LedgerDeviceSdkBuilder = class {
    stub = false;
    loggers = [];
    build() {
      return new DeviceSdk({ stub: this.stub, loggers: this.loggers });
    }
    setStub(stubbed) {
      this.stub = stubbed;
      return this;
    }
    addLogger(logger) {
      this.loggers.push(logger);
      return this;
    }
  };

  // src/api/logger-subscriber/service/ConsoleLogger.ts
  var ConsoleLogger = class {
    log(level, message, options) {
      const tag = `[${options.tag}]`;
      switch (level) {
        case "INFO" /* Info */:
          console.info(tag, message);
          break;
        case "WARNING" /* Warning */:
          console.warn(tag, message);
          break;
        case "DEBUG" /* Debug */:
          console.debug(tag, message);
          break;
        case "ERROR" /* Error */: {
          console.error(tag, message);
          break;
        }
        default:
          console.log(tag, message);
      }
    }
  };
})();
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
