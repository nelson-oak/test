import { DataSource } from 'typeorm';

import { PrismaClient } from '@prisma/client';
import { ORM } from '@shared/types/ORM';

export const orms = {
  [ORM.PRISMA]: new PrismaClient({
    log: ['info'],
  }),
  [ORM.TYPEORM]: new DataSource({
    type: 'postgres',
    database: process.env.TYPEORM_DB || 'project_name',
    host: process.env.TYPEORM_HOST || 'localhost',
    port: Number(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USER || 'postgres',
    password: process.env.TYPEORM_PASS || 'docker',
    logging: false,
    entities: [
      process.env.PRODUCTION?.toLowerCase().trim() === 'true'
        ? './dist/modules/**/infra/typeorm/entities/*.js'
        : './src/modules/**/infra/typeorm/entities/*.ts',
    ],
    migrations: [
      process.env.PRODUCTION?.toLowerCase().trim() === 'true'
        ? './dist/shared/infra/typeorm/migrations/*.js'
        : './src/shared/infra/typeorm/migrations/*.ts',
    ],
    subscribers: ['common/subscriber/**/*.ts'],
  }),
};
