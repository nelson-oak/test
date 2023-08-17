import { Exclude } from 'class-transformer';

import IUser from '@modules/users/entities/IUser';

export default class User implements IUser {
  id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  avatar: string | null;

  created_at: Date;

  updated_at: Date;
}
