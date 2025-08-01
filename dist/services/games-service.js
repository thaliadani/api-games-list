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

// src/services/games-service.ts
var games_service_exports = {};
__export(games_service_exports, {
  createGameService: () => createGameService,
  deleteGameService: () => deleteGameService,
  getGameByIdService: () => getGameByIdService,
  getGameService: () => getGameService,
  updateGameService: () => updateGameService
});
module.exports = __toCommonJS(games_service_exports);

// src/repositories/games-repository.ts
var database = [];
var findAllGames = () => __async(null, null, function* () {
  return database;
});
var findGameById = (id) => __async(null, null, function* () {
  return database.find((game) => game.id === id);
});
var insertGame = (game) => __async(null, null, function* () {
  database.push(game);
});
var findAndModifyDescriptionGame = (id, descriptions) => __async(null, null, function* () {
  const gameIndex = database.findIndex((g) => g.id === id);
  if (gameIndex !== -1) {
    database[gameIndex].descriptions = descriptions;
  }
  return database[gameIndex];
});
var deleteGameById = (id) => __async(null, null, function* () {
  const index = database.findIndex((g) => g.id === id);
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

// src/services/games-service.ts
var getGameService = () => __async(null, null, function* () {
  const data = yield findAllGames();
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var getGameByIdService = (id) => __async(null, null, function* () {
  const data = yield findGameById(id);
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var createGameService = (game) => __async(null, null, function* () {
  let response = null;
  if (Object.keys(game).length !== 0) {
    yield insertGame(game);
    response = yield created();
  } else {
    response = yield badRequest();
  }
  return response;
});
var updateGameService = (id, descriptions) => __async(null, null, function* () {
  const data = yield findAndModifyDescriptionGame(id, descriptions);
  let response = null;
  if (Object.keys(data).length === 0) {
    response = yield badRequest();
  } else {
    response = yield ok(data);
  }
  return response;
});
var deleteGameService = (id) => __async(null, null, function* () {
  let response = null;
  const isDeleted = yield deleteGameById(id);
  if (isDeleted) {
    response = yield ok({ message: "Game deleted successfully" });
  } else {
    response = yield badRequest();
  }
  return response;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createGameService,
  deleteGameService,
  getGameByIdService,
  getGameService,
  updateGameService
});
