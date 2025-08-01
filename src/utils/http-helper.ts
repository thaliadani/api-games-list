import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
    return{
        statusCode: 200,
        body: data
    }
};

export const noContent = async (): Promise<HttpResponse> => {
    return{
        statusCode: 204,
        body: {
            message: "No content",
        }
    }
};

export const badRequest = async (): Promise<HttpResponse> => {
    return{
        statusCode: 400,
        body: {
            message: "Game not found",
        }
    }
}

export const created = async (): Promise<HttpResponse> => {
    return{
        statusCode: 201,
        body: {
            message: "Game created successfully",
        }
    }
};