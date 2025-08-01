import { DescriptionModel } from "../models/descriptions-model";
import { GameModel } from "../models/games-model";

const database: GameModel[] = [
    {
        id: 1,
        name: 'Fifa 2022',
        descriptions: {
            releaseDate: 2004,
            plataform: 'PS5',
            price: 100,
        },
    },
    {
        id: 2,
        name: 'Fifa 2022',
        descriptions: {
            releaseDate: 2004,
            plataform: 'XBOX',
            price: 100
        },
    }

]

export const findAllGames = async (): Promise<GameModel[]> => {
    return database;
}

export const findGameById = async (id: number): Promise<GameModel | undefined> => {
    return database.find((game) => game.id === id);
}

export const insertGame = async (game: GameModel) => {
    database.push(game);
}

export const findAndModifyDescriptionGame = async (id: number, descriptions: DescriptionModel): Promise<GameModel> => {
    const gameIndex = database.findIndex((g) => g.id === id);
    
    if (gameIndex !== -1) {
        database[gameIndex].descriptions = descriptions;
    }

    return database[gameIndex];
}

export const deleteGameById = async (id: number) => {
    const index = database.findIndex((g) => g.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }

    return false;
}