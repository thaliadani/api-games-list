import { PublisherModel } from "../models/publishers-model";
import * as publisherData from "../repositories/publisher-repository"
import * as HttpResponse from "../utils/http-helper"


export const getPublisherService = async () => {
    const data = await publisherData.findAllPublishers();

    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getPublisherByIdService = async (id: number) => {
    const data = await publisherData.findPublisherById(id);
    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }

    return response;
}

export const createPublisherService = async (publisher: PublisherModel) => {
    let response = null;

    if(Object.keys(publisher).length !== 0){
        await publisherData.insertPublisher(publisher);
        response = await HttpResponse.created();
    }else{
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const deletePublisherService = async (id: number) => {
    let response = null;

    const isDeleted = await publisherData.deletePublisherById(id);

    if(isDeleted){
        response = await HttpResponse.ok({message: "Game deleted successfully"});
    }else{
        response = await HttpResponse.badRequest();
    }

    return response;
}