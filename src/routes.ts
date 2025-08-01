import { update } from './utils/http-helper';
import { Router } from "express";
import * as gamesController from "./controllers/games-controller";

const router = Router();

router.get("/games", gamesController.getGame);
router.get("/games/:id", gamesController.getGameById);

router.post("/games", gamesController.postGame);

router.patch("/games/:id", gamesController.updateGame);

router.delete("/games/:id", gamesController.deleteGame);

export default router;