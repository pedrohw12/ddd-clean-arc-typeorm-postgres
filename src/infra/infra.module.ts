import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './db/config/migrationsConfig';
import * as TypeOrmConfig from './ormconfig';
// eslint-disable-next-line @typescript-eslint/no-var-requires

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bit1234',
      database: 'postgres',
      entities: [__dirname + '/db/orm/entity/*.entity{.ts,.js}'],
      migrations: ['src/infra/db/migrations/*.ts'],
    }),
  ],
  providers: [],
  exports: [],
})
export class InfraModule {}
