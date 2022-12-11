// const express = require('express');
import express, { json } from "express";
import mongoDbConnection from "./config/mongoDbConnection.js";
import testRouter from "./routes/testRoutes.js";
import dotenv from "dotenv";

dotenv.config();

mongoDbConnection();

// const app = express();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/test", testRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});