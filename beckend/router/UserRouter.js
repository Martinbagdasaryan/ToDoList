import { Router } from "express";
import UserControler from "../controlers/UserControler.js";
import handler from "../middlewaree/utils.js"

const Userrouter = new Router();

Userrouter.post("/user", handler( UserControler.create));
Userrouter.post("/login", handler(UserControler.Login));
Userrouter.get("/user",handler( UserControler.getAll));
Userrouter.get("/user/:id", handler(UserControler.getOne) );
Userrouter.put("/user",handler(UserControler.update) );
Userrouter.delete("/user/:id",handler( UserControler.delete));

export default Userrouter;
