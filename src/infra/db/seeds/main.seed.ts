import { DataSource } from 'typeorm';
import { Seeder, runSeeder } from 'typeorm-extension';
import { AccountSeed } from './';

export class MainSeeder implements Seeder {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, AccountSeed);
  }
}
