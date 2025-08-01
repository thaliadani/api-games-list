import { DescriptionModel } from "../models/descriptions-model";
import { GameModel } from "../models/games-model";
import * as gameData from "../repositories/games-repository"
import * as HttpResponse from "../utils/http-helper"

export const getGameService = async () => {
    const data = await gameData.findAllGames();

    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getGameByIdService = async (id: number) => {
    const data = await gameData.findGameById(id);
    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }

    return response;
}

export const createGameService = async (game: GameModel) => {
    let response = null;

    if(Object.keys(game).length !== 0){
        await gameData.insertGame(game);
        response = await HttpResponse.created();
    }else{
        response = await HttpResponse.badRequest();
    }

    return response;
}


export const updateGameService = async (id: number, descriptions: DescriptionModel) => {
    const data = await gameData.findAndModifyDescriptionGame(id, descriptions);
    
    let response = null;

    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest()
    }else{
        response = await HttpResponse.ok(data);
    }

    return response;
}

export const deleteGameService = async (id: number) => {
    let response = null;

    const isDeleted = await gameData.deleteGameById(id);

    if(isDeleted){
        response = await HttpResponse.ok({message: "Game deleted successfully"});
    }else{
        response = await HttpResponse.badRequest();
    }

    return response;
}