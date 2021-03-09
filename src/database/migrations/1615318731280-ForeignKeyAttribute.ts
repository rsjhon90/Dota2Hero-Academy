import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ForeignKeyAttribute1615318731280
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'heroes',
      new TableForeignKey({
        name: 'HeroPrimaryAttribute',
        columnNames: ['primaryAttribute_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'primaryAttributes',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('heroes', 'HeroPrimaryAttribute');
  }
}
