import { Router, Request, Response } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router };
