import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {

    let users;
    const userExist = this.usersRepository.findById(user_id);

    if (!userExist)
      throw new Error("Mensagem do erro");

    if (userExist.admin === true)
      users = this.usersRepository.list();
    else
      throw new Error("Mensagem do erro");

    return users;

  }
}

export { ListAllUsersUseCase };
