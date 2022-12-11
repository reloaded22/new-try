import express from "express";
import hello from "../controllers/testControllers.js";
const testRouter = express.Router();

testRouter.get('/', hello);

export default testRouter;