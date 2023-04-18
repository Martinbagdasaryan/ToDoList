import express from "express";
import mongoose from "mongoose";
import Userrouter from "./router/UserRouter.js";
import T_D_L_Router from "./router/ToDoListRouter.js";
import errorMiddleware from "../beckend/middlewaree/ErrMiddlewaree.js"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", Userrouter);
app.use("/api", T_D_L_Router);

app.use(errorMiddleware)


async function startApp() {
  try {
    await mongoose.connect(URL);
    app.listen(PORT, () => {
      console.log(`server listening on${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
