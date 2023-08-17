import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUser from '../entities/IUser';

export default interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
  delete(user: IUser): Promise<void>;
  update?: (user: IUser) => Promise<IUser>;
  save?: (user: IUser) => Promise<IUser>;
}
