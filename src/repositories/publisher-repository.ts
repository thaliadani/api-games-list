import { PublisherModel } from './../models/publishers-model';
import fs from "fs/promises";

export const findAllPublishers = async (): Promise<PublisherModel[]> => {
    const data = await fs.readFile("./src/data/publishers.json", "utf-8");
    const publishers:PublisherModel[] = JSON.parse(data);
    return publishers;
}

export const findPublisherById = async (id: number): Promise<PublisherModel | undefined> => {
    const data = await fs.readFile("./src/data/publishers.json", "utf-8");
    const publishers:PublisherModel[] = JSON.parse(data);
    return publishers.find((publisher) => publisher.id === id);
}

export const insertPublisher = async (publisher: PublisherModel) => {
    const data = await fs.readFile("./src/data/publishers.json", "utf-8");
    const publishers:PublisherModel[] = JSON.parse(data);
    publishers.push(publisher);
}

export const deletePublisherById = async (id: number) => {
    const data = await fs.readFile("./src/data/publishers.json", "utf-8");
    const publishers:PublisherModel[] = JSON.parse(data);

    const index = publishers.findIndex((publisher) => publisher.id === id);
    if (index !== -1) {
        publishers.splice(index, 1);
        return true;
    }

    return false;
}