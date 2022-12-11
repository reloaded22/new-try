import express from "express";
import hello from "../controllers/userControllers.js";
const testRouter = express.Router();

testRouter.get('/', hello);

export default testRouter;