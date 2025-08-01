"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/controllers/publishers-controller.ts
var publishers_controller_exports = {};
__export(publishers_controller_exports, {
  createPublisher: () => createPublisher,
  deletePublisher: () => deletePublisher,
  getPublisherById: () => getPublisherById,
  getPublishers: () => getPublishers
});
module.exports = __toCommonJS(publishers_controller_exports);

// src/repositories/publisher-repository.ts
var import_promises = __toESM(require("fs/promises"));
var database = [];
var findAllPublishers = () => __async(null, null, function* () {
  const data = yield import_promises.default.readFile("./src/data/publishers.json", "utf-8");
  database.push(...JSON.parse(data));
  return database;
});
var findPublisherById = (id) => __async(null, null, function* () {
  return database.find((publisher) => publisher.id === id);
});
var insertPublisher = (publisher) => __async(null, null, function* () {
  database.push(publisher);
});
var deletePublisherById = (id) => __async(null, null, function* () {
  const index = database.findIndex((publisher) => publisher.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
});

// src/utils/http-helper.ts
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

// src/services/publishers-service.ts
var getPublisherService = () => __async(null, null, function* () {
  const data = yield findAllPublishers();
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var getPublisherByIdService = (id) => __async(null, null, function* () {
  const data = yield findPublisherById(id);
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var createPublisherService = (publisher) => __async(null, null, function* () {
  let response = null;
  if (Object.keys(publisher).length !== 0) {
    yield insertPublisher(publisher);
    response = yield created();
  } else {
    response = yield badRequest();
  }
  return response;
});
var deletePublisherService = (id) => __async(null, null, function* () {
  let response = null;
  const isDeleted = yield deletePublisherById(id);
  if (isDeleted) {
    response = yield ok({ message: "Game deleted successfully" });
  } else {
    response = yield badRequest();
  }
  return response;
});

// src/controllers/publishers-controller.ts
var getPublishers = (request, response) => __async(null, null, function* () {
  const httpResponse = yield getPublisherService();
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
var getPublisherById = (request, response) => __async(null, null, function* () {
  const id = parseInt(request.params.id);
  const httpResponse = yield getPublisherByIdService(id);
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
var createPublisher = (request, response) => __async(null, null, function* () {
  const bodyValue = request.body;
  const httpResponse = yield createPublisherService(bodyValue);
  if (httpResponse) {
    response.status(httpResponse.statusCode).json(httpResponse.body);
  }
});
var deletePublisher = (request, response) => __async(null, null, function* () {
  const id = parseInt(request.params.id);
  const httpResponse = yield deletePublisherService(id);
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPublisher,
  deletePublisher,
  getPublisherById,
  getPublishers
});
