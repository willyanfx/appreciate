import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // receive the token
  const authHeader = request.headers.authorization;

  //   verify if token exists
  if (!authHeader) {
    return response.status(401).end();
  }

  const [_, token] = authHeader.split(" ");
  try {
    //   validate the token
    const { sub } = verify(token, process.env.JWT_KEY!) as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ error: "Token invalid" });
  }
}

export { ensureAuthenticated };
