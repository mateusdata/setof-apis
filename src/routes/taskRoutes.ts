import { Router } from "express";
import TodolistController from "../Controllers/TodolistController";
import UserController from "../Controllers/UserController";

const taskRoutes = Router();

taskRoutes.post("/task", TodolistController.create);
taskRoutes.get("/task", TodolistController.index);
taskRoutes.get("/task/:id", TodolistController.show);
taskRoutes.put("/task/:id", TodolistController.update);
taskRoutes.delete("/task/:id", TodolistController.update);

taskRoutes.post("/user", UserController.create);
taskRoutes.get("/user", UserController.index);
taskRoutes.get("/user/:id", UserController.show);
taskRoutes.put("/user/:id", UserController.update);
taskRoutes.delete("/user/:id", UserController.update);


export default taskRoutes