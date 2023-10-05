import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAccountsTable1696450889068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          { name: 'company_name', type: 'varchar', isNullable: false },
          {
            name: 'cnpj',
            type: 'varchar',
            length: '14',
            isPrimary: true,
            isNullable: false,
          },
          { name: 'address', type: 'varchar', isNullable: false },
          { name: 'company_segment', type: 'varchar', isNullable: false },
          { name: 'company_size', type: 'int', isNullable: false },
          { name: 'responsible_email', type: 'varchar', isNullable: false },
          { name: 'contracted_plan', type: 'varchar', isNullable: false },
          { name: 'password', type: 'varchar', isNullable: false },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
