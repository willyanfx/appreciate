import { Request, Response } from "express";
import { UserDeleteComplimentService } from "../services/UserDeleteComplimentService";

class UserDeleteComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id, compliment_id } = request.body;

    const userReceiveComplimentsService = new UserDeleteComplimentService();

    const compliment = await userReceiveComplimentsService.execute({
      user_id,
      compliment_id,
    });

    return response.json(compliment);
  }
}

export { UserDeleteComplimentsController };
