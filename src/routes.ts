import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export { router };
