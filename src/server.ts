import cors from "cors";
import express, { Router, Request, Response } from "express";
import { router } from "./routes";
import "./database";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3333, () => "server running on port 3333");
