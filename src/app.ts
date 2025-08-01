import express from 'express';
import router from './routes';
import corns from 'cors';

export function createApp() {
    const app = express();
    
    app.use(express.json());

    app.use("/api", router);

    app.use(corns());

    const cornsOptions = {
        origin: ["http://localhost:3333", "http://localhost:3000"],
        methods: ["GET"],
    }

    return app;
}

