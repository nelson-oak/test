import { injectable, inject } from 'tsyringe';

import IUser from '@modules/users/entities/IUser';
import IUserRepository from '@modules/users/repositories/IUserRepository';

@injectable()
class IndexUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<IUser[]> {
    const users = await this.userRepository.findAll();

    return users;
  }
}

export default IndexUsersService;
