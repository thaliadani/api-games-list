import { Request, Response } from 'express';
import * as service from '../services/publishers-service';

export const getPublishers = async (request: Request, response: Response) => {
    const httpResponse = await service.getPublisherService();

    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPublisherById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.getPublisherByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const createPublisher = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await service.createPublisherService(bodyValue);

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const deletePublisher = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.deletePublisherService(id);

    response.status(httpResponse.statusCode).json(httpResponse.body);
}