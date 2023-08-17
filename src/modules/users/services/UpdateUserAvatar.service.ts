import { injectable, inject } from 'tsyringe';

import IUser from '@modules/users/entities/IUser';
import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IUpdateUserAvatarServiceRequest {
  user_id: string;
  avatarFileName?: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ user_id, avatarFileName }: IUpdateUserAvatarServiceRequest): Promise<IUser> {
    if (!avatarFileName) throw new AppError('Avatar não encontrado');

    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const fileName = await this.storageProvider.saveFile(avatarFileName);
    user.avatar = fileName;

    if (!this.userRepository.update) throw new AppError('The current ORM does not support the following methods: "update"');

    await this.userRepository.update(user);

    return user;
  }
}

export default UpdateUserAvatarService;
