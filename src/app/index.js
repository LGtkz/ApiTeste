import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { projectRouter } from "./router/project.router.js";

class App {
    app;

    constructor() {
        this.app = express();
        this.middleware();
        this.route();
    }

    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(express.json({ limite: '5mb' }))
        this.app.use(cors());
    }

    route() {
        this.app.use("/", projectRouter);
    }
}

export default new App().app;