import cors from "cors";
import express, { Router, Request, Response } from "express";

const app = express();
const route = Router();

app.use(cors());
app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);

app.listen(3333, () => "server running on port 3333");
