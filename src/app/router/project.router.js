import {Router} from 'express';
import ProjectController from '../controller/project.controller.js';

const projectRouter = Router();
const projectController = new ProjectController();

projectRouter.get("/", projectController.hello);
projectRouter.get("/name", projectController.helloName);
projectRouter.get("/multiply", projectController.multiply);

export{projectRouter};  