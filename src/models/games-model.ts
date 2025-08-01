export interface GameModel {
    id: number,
    name: string,
    descriptions:{
        releaseDate: number;
        plataform: string;
        price: number;
    };
};