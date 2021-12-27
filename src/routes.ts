import { Router, Request, Response } from "express";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/isAdmin";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };
