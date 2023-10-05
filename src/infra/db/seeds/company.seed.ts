import { Seeder } from 'typeorm-extension';
import { DataSource, DeepPartial } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Company } from 'src/infra/db/orm/entity/company';

export const generateAccount = () => {
  const companies = [
    {
      name: 'Ygor Leão',
      email: 'ygor.leao@bitflowin.com',
    },
    {
      name: 'Leonardo Vanzato',
      email: 'leonardo.vanzato@bitflowin.com',
    },
    {
      name: 'Pedro Wanderley',
      email: 'pedro.wanderley@bitflowin.com',
    },
  ];

  const company: DeepPartial<any> = {
    companies,
  };

  return company;
};

export default class CompanySeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(Company);
    const count = 10;

    for (let i = 0; i < count; i++) {
      await repository.save(generateAccount());
      Logger.log(`Company ${i + 1} of ${count} created`);
    }
  }
}
