// ormconfig.js
export const typeOrmConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'bit1234',
  database: 'postgres',
  entities: [__dirname + '/db/orm/entity/*.entity{.ts,.js}'],
  migrations: ['src/infra/db/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/infra/db/migrations',
  },
};
