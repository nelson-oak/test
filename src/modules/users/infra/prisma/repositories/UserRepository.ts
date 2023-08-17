import { PrismaClient } from '@prisma/client';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import IUser from '@modules/users/entities/IUser';
import useORM from '@config/orm';

export default class UserRepository implements IUserRepository {
  private ormRepository: PrismaClient;

  constructor() {
    // @ts-ignore
    this.ormRepository = useORM;
  }

  public async findById(id: string): Promise<IUser | null> {
    const user = await this.ormRepository.user.findUnique({ where: { id } });

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.ormRepository.user.findFirst({ where: { email } });

    return user;
  }

  public async findAll(): Promise<IUser[]> {
    const users = await this.ormRepository.user.findMany();

    return users;
  }

  public async update({ id, ...data }: IUser): Promise<IUser> {
    const user = await this.ormRepository.user.update({ where: { id }, data });

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<IUser> {
    const user = await this.ormRepository.user.create({ data });

    return user;
  }

  public async delete(user: IUser): Promise<void> {
    await this.ormRepository.user.delete({ where: { id: user.id } });
  }
}
