import { Inject, Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/infra/db/repositories/company.repository';
import { CompanyRepositoryKey } from '../interface/ICompanyRepository';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(CompanyRepositoryKey)
    protected readonly companyRepository: CompanyRepository,
  ) {}
  async create({ name }) {
    console.log('SERVICE', name);
    return name;
  }
}
