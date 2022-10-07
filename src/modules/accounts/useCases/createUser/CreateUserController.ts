/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUserCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUserCase);

    await createUserUseCase.execute({ name, username, email, password, driver_license });

    return response.status(201).send();
  }
}

export { CreateUserController }