import { Router } from "express";
import TaskController from "../controller/TaskController.js";
const routes = Router();

routes.get("/", TaskController.getAllTask);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);


export default routes;
