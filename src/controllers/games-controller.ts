import { Request, Response } from 'express';
import * as service from '../services/games-service';
import { DescriptionModel } from '../models/descriptions-model';
export const getGames = async (request: Request, response: Response) => {
    const httpResponse = await service.getGameService();

    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getGameById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.getGameByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const createGame = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await service.createGameService(bodyValue);

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const updateGame = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const bodyValue: DescriptionModel = request.body;

    const httpResponse = await service.updateGameService(id, bodyValue);

    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deleteGame = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.deleteGameService(id);

    response.status(httpResponse.statusCode).json(httpResponse.body);
}