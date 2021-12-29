import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // verify if email exists
    const user = await usersRepositories.findOne(email);

    if (!user) {
      throw new Error("Incorrect email/password combination");
    }

    // verify if password is correct
    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new Error("Incorrect email/password combination");
    }

    const token = sign({ email: user.email }, process.env.JWT_KEY as string, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateUserService };
