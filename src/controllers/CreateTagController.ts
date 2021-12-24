import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createTag = new CreateTagService();

    const tag = await createTag.execute(name);

    return res.json(tag);
  }
}

export { CreateTagController };
