//import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { config } from 'dotenv';
import { MainSeeder } from '../seeds/main.seed';

config();
//const configService = new ConfigService();

const entitiesRoot = __dirname + './../../entities/';

const options: DataSourceOptions & SeederOptions = {
  schema: 'bitflowindev',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'bit1234',
  database: 'postgres',
  /**
   * ATTENTION - Synchronize
   *
   * Do NOT turn this ON when pointing to a database on the cloud.
   * This is ONLY for local development.
   */
  synchronize: false,
  // uncomment extra property if database is running on local machine
  extra: {
    trustServerCertificate: true,
  },
  entities: [
    entitiesRoot + '**/*.entity{.ts,.js}',
    entitiesRoot + '*.entity{.ts,.js}',
  ],
  migrations: [__dirname + './../migrations/*{.ts,.js}'],
  seeds: [MainSeeder],
};

export const typeOrmConfig = new DataSource(options);
