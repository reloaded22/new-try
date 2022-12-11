// const express = require('express');
import express, { json, urlencoded } from "express";
import mongoDbConnection from "./config/mongoDbConnection.js";
import testRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

mongoDbConnection();

// const app = express();
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/test", testRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});