import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../orm/entity/company';
import { ICompanyRepository } from 'src/domain/company/interface/ICompanyRepository';
import { Repository } from 'typeorm';

export class CompanyRepository implements ICompanyRepository {
  constructor(
    @InjectRepository(Company) private readonly ormRepo: Repository<Company>,
  ) {}
  async create({ name }) {
    console.log('REPOSITORY', name);
    return name;
  }
}
