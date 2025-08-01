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

// src/repositories/games-repository.ts
var games_repository_exports = {};
__export(games_repository_exports, {
  deleteGameById: () => deleteGameById,
  findAllGames: () => findAllGames,
  findAndModifyDescriptionGame: () => findAndModifyDescriptionGame,
  findGameById: () => findGameById,
  insertGame: () => insertGame
});
module.exports = __toCommonJS(games_repository_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteGameById,
  findAllGames,
  findAndModifyDescriptionGame,
  findGameById,
  insertGame
});
