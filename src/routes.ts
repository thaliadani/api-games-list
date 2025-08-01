import { Router } from "express";
import * as gamesController from "./controllers/games-controller";
import * as publisherController from "./controllers/publishers-controller";

const router = Router();

router.get("/games", gamesController.getGames);
router.get("/games/:id", gamesController.getGameById);
router.post("/games", gamesController.createGame);
router.patch("/games/:id", gamesController.updateGame);
router.delete("/games/:id", gamesController.deleteGame);

router.get("/publishers", publisherController.getPublishers);
router.get("/publishers/:id", publisherController.getPublisherById);
router.post("/publisher", publisherController.createPublisher);
router.delete("/publishers/:id", publisherController.deletePublisher);

export default router;