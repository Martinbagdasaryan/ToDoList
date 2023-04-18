import { Router } from "express";
import ToDoListControler from "../controlers/ToDoListControler.js";
import AuthMiddlewaree from "../middlewaree/auth_middlewaree.js";
import handler from "../middlewaree/utils.js"

const T_D_L_Router = new Router();

T_D_L_Router.post("/list/", AuthMiddlewaree, handler(ToDoListControler.create));
T_D_L_Router.get("/list", AuthMiddlewaree,handler(ToDoListControler.getAll));
T_D_L_Router.get("/list/:id",AuthMiddlewaree, handler( ToDoListControler.getOne));
T_D_L_Router.put("/list",AuthMiddlewaree, handler( ToDoListControler.update));
T_D_L_Router.delete("/list/:id", AuthMiddlewaree,handler( ToDoListControler.delete));

export default T_D_L_Router;
