import { Repository } from 'typeorm';

import useORM from '@config/orm';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUser from '@modules/users/entities/IUser';
import TypeORMUser from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<IUser>;

  constructor() {
    // @ts-ignore
    this.ormRepository = useORM.getRepository(TypeORMUser);
  }

  public async findById(id: string): Promise<IUser | null> {
    const findUser = await this.ormRepository.findOne({
      where: { id },
    });

    return findUser;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async findAll(): Promise<IUser[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async create({ email, password }: ICreateUserDTO): Promise<IUser> {
    const user = this.ormRepository.create({ email, password });
    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: IUser): Promise<IUser> {
    return this.ormRepository.save(user);
  }

  public async delete(user: IUser): Promise<void> {
    await this.ormRepository.remove(user);
  }
}

export default UserRepository;
