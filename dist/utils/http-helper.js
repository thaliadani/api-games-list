"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/utils/http-helper.ts
var http_helper_exports = {};
__export(http_helper_exports, {
  badRequest: () => badRequest,
  created: () => created,
  noContent: () => noContent,
  ok: () => ok
});
module.exports = __toCommonJS(http_helper_exports);
var ok = (data) => __async(null, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var noContent = () => __async(null, null, function* () {
  return {
    statusCode: 204,
    body: {
      message: "No content"
    }
  };
});
var badRequest = () => __async(null, null, function* () {
  return {
    statusCode: 400,
    body: {
      message: "Game not found"
    }
  };
});
var created = () => __async(null, null, function* () {
  return {
    statusCode: 201,
    body: {
      message: "Game created successfully"
    }
  };
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  badRequest,
  created,
  noContent,
  ok
});
