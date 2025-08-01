import { DescriptionModel } from "../models/descriptions-model";
import { GameModel } from "../models/games-model";
import fs from "fs/promises";


export const findAllGames = async (): Promise<GameModel[]> => {
    const data = await fs.readFile("./src/data/games.json", "utf-8");
    return JSON.parse(data) as GameModel[];
}

export const findGameById = async (id: number): Promise<GameModel | undefined> => {
    const games = await findAllGames();
    return games.find((game) => game.id === id);
}

export const insertGame = async (game: GameModel): Promise<void> => {
    const games = await findAllGames();
    games.push(game);
    await fs.writeFile("./src/data/games.json", JSON.stringify(games));
}

export const findAndModifyDescriptionGame = async (id: number, descriptions: DescriptionModel): Promise<GameModel> => {
    const games = await findAllGames();
    const index = games.findIndex((g) => g.id === id);

    if (index !== -1) {
        games[index].descriptions = descriptions;
        await fs.writeFile("./src/data/games.json", JSON.stringify(games));
    }

    return games[index];
}

export const deleteGameById = async (id: number): Promise<boolean> => {
    const games = await findAllGames();
    const index = games.findIndex((g) => g.id === id);
    if (index !== -1) {
        games.splice(index, 1);
        await fs.writeFile("./src/data/games.json", JSON.stringify(games));
        return true;
    }

    return false;
}
