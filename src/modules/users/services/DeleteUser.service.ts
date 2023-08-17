import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<void> {
    const findUser = await this.userRepository.findById(user_id);

    if (!findUser) throw new AppError('Usuário não encontrado', 404);

    await this.userRepository.delete(findUser);
  }
}

export default DeleteUserService;
