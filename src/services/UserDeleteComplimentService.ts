import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  user_id: string;
  compliment_id: string;
}

class UserDeleteComplimentService {
  async execute({ compliment_id, user_id }: IComplimentRequest) {
    if (!user_id || !compliment_id) {
      throw new Error("User is required");
    }

    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const compliment = await complimentsRepositories.findOne({
      user_sender: user_id,
      id: compliment_id,
    });

    try {
      complimentsRepositories.remove(compliment);
    } catch (error) {
      throw new Error("Did not delete");
    }
  }
}

export { UserDeleteComplimentService };
