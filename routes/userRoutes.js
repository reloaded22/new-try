import express from "express";
import { hello, readSecrets } from "../controllers/userControllers.js";
const testRouter = express.Router();

testRouter.get("/", hello);

testRouter.get("/home", readSecrets);

export default testRouter;