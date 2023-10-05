import { CreateCompanyData } from 'src/application/types/createCompanyData';

export const CompanyRepositoryKey = 'ICompanyRepository';
export interface ICompanyRepository {
  create({ name }: CreateCompanyData): Promise<void>;
}
