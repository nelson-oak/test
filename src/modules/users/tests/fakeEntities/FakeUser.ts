import IUser from '@modules/users/entities/IUser';

export default class FakeUser implements IUser {
  id: string;

  name: string;

  email: string;

  password: string;

  avatar: string | null;

  created_at: Date;

  updated_at: Date;
}
